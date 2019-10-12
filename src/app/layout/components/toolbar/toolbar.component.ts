import { Component, OnDestroy, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';

import { FuseConfigService } from '@fuse/services/config.service';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';

import { navigation } from 'app/navigation/navigation';
import { SessionService } from '../../../shared/services/session.service';
import { Router } from '@angular/router';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { DialogService } from 'app/shared/services/dialog.service';
import { ToolbarService } from './toolbar.service';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';
import { FormControl } from '@angular/forms';
import { MatSelect } from '@angular/material';

interface GoogleAdsAccount {
    name: string;
    id: string;
}

@Component({
    selector: 'toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ToolbarComponent extends PageBaseComponent implements OnInit, OnDestroy {
    user = {
        avatar: '',
        name: '',
        email: ''
    };
    horizontalNavbar: boolean;
    rightNavbar: boolean;
    hiddenNavbar: boolean;
    languages: any;
    navigation: any;
    selectedLanguage: any;
    userStatusOptions: any[];
    isProcessing: boolean = false;
    isAlertDisplayed: boolean = false;

    adsAccounts: GoogleAdsAccount[] = [
        {
            name: '123-123-1234',
            id: '1231231234'
        },
        {
            name: '345-345-3345',
            id: '3453453345'
        },
    ];

    activeAdsId: string;

    /** control for selected account */
    public accountCtrl: FormControl = new FormControl();

    /** control for the MatSelect filter keyword */
    public accountFilterCtrl: FormControl = new FormControl();

    /** list of accounts filterd by search keyword */
    public filteredAccounts: ReplaySubject<GoogleAdsAccount[]> = new ReplaySubject<GoogleAdsAccount[]>(1);

    @ViewChild('singleSelect', { static: true }) singleSelect: MatSelect;

    private _onDestroy = new Subject<void>();

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FuseSidebarService} _fuseSidebarService
     * @param {TranslateService} _translateService
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _fuseSidebarService: FuseSidebarService,
        private _translateService: TranslateService,
        private _sessionService: SessionService,
        private _router: Router,
        private _dialogService: DialogService,
        private _toolbarService: ToolbarService,
        private _fuseProgressiveBarService: FuseProgressBarService,
        private _fuseSplashScreenService: FuseSplashScreenService
    ) {
        super();

        // Set the defaults
        this.userStatusOptions = [
            {
                title: 'Online',
                icon: 'icon-checkbox-marked-circle',
                color: '#4CAF50'
            },
            {
                title: 'Away',
                icon: 'icon-clock',
                color: '#FFC107'
            },
            {
                title: 'Do not Disturb',
                icon: 'icon-minus-circle',
                color: '#F44336'
            },
            {
                title: 'Invisible',
                icon: 'icon-checkbox-blank-circle-outline',
                color: '#BDBDBD'
            },
            {
                title: 'Offline',
                icon: 'icon-checkbox-blank-circle-outline',
                color: '#616161'
            }
        ];

        this.languages = [
            {
                id: 'en',
                title: 'English',
                flag: 'us'
            },
            {
                id: 'tr',
                title: 'Turkish',
                flag: 'tr'
            }
        ];

        this.navigation = navigation;

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // set initial selection
        this.accountCtrl.setValue(this.adsAccounts[0]);

        // load the initial account list
        this.filteredAccounts.next(this.adsAccounts.slice());

        // listen for search field value changes
        this.accountFilterCtrl.valueChanges
            .pipe(takeUntil(this._onDestroy))
            .subscribe(() => {
                this.filterAccounts();
            });


        // Subscribe to the config changes
        this._fuseConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((settings) => {
                this.horizontalNavbar = settings.layout.navbar.position === 'top';
                this.rightNavbar = settings.layout.navbar.position === 'right';
                this.hiddenNavbar = settings.layout.navbar.hidden === true;
            });

        // Set the selected language from default languages
        this.selectedLanguage = _.find(this.languages, { id: this._translateService.currentLang });

        if (this._sessionService.user)
            this._sessionService.setUser(JSON.parse(this._sessionService.user));

        const sub = this._sessionService.getUser()
            .subscribe((user: any) => {
                if (user) {
                    this.user.name = user.name;
                    this.user.avatar = user.avatar;
                    this.user.email = user.email;
                }
            });
        this.subscriptions.push(sub);

        const getAdsIdSub = this._sessionService.getAdwordId()
            .subscribe((adsId: string) => {
                if (adsId) {
                    this.isProcessing = true;
                    const checkAccountSub = this._toolbarService.checkAccountAcceptance()
                        .subscribe(res => {
                            this.isAlertDisplayed = !res.data.isConnected;
                            this.isProcessing = false;
                        },
                            (error: HttpErrorResponse) => {
                                //this._dialogService._openErrorDialog(error.error);
                                this.isAlertDisplayed = false;
                                this.isProcessing = false;
                            });
                    this.subscriptions.push(checkAccountSub);
                }
                else this.isAlertDisplayed = false;
            });
        this.subscriptions.push(getAdsIdSub);

        const getAccountAcceptanceSub = this._sessionService.getAccountAcceptance()
            .subscribe((isAccepted: boolean) => {
                this.isAlertDisplayed = !isAccepted;
            });
        this.subscriptions.push(getAccountAcceptanceSub);
    }

    ngAfterViewInit() {
        this.setInitialValue();
    }

    selectAccount() {
        console.log(this.accountCtrl.value);
    }

    private setInitialValue() {
        this.filteredAccounts
            .pipe(take(1), takeUntil(this._onDestroy))
            .subscribe(() => {
                // setting the compareWith property to a comparison function 
                // triggers initializing the selection according to the initial value of 
                // the form control (i.e. _initializeSelection())
                // this needs to be done after the filteredBanks are loaded initially 
                // and after the mat-option elements are available
                this.singleSelect.compareWith = (a: GoogleAdsAccount, b: GoogleAdsAccount) => a.id === b.id;
            });
    }

    private filterAccounts() {
        if (!this.adsAccounts) {
            return;
        }
        // get the search keyword
        let search = this.accountFilterCtrl.value;
        if (!search) {
            this.filteredAccounts.next(this.adsAccounts.slice());
            return;
        } else {
            search = search.toLowerCase();
        }
        // filter the banks
        this.filteredAccounts.next(
            this.adsAccounts.filter(bank => bank.name.toLowerCase().indexOf(search) > -1)
        );
    }

    checkAccountAcceptance() {
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();

        const sub = this._toolbarService.checkAccountAcceptance()
            .subscribe(res => {
                this._fuseProgressiveBarService.hide();

                if (res.data.isConnected) {
                    this.isAlertDisplayed = false;
                    this._router.navigateByUrl('/gan-tracking/chien-dich');
                    this._dialogService._openSuccessDialog({ messages: ['Cập nhật quyền quản lý hệ thống tài khoản Google Ads thành công'] });
                }
                else {
                    this.isAlertDisplayed = true;
                    this._dialogService._openInfoDialog('Tài khoản Google Ads chưa được chấp nhận quyền quản lý hệ thống');
                }

                this._sessionService.setAcceptedAdsId();

                this.isProcessing = false;
            },
                (error: HttpErrorResponse) => {
                    this._fuseProgressiveBarService.hide();
                    //this._dialogService._openErrorDialog(error.error);
                    this.isAlertDisplayed = false;
                    this.isProcessing = false;
                });
        this.subscriptions.push(sub);
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle sidebar open
     *
     * @param key
     */
    toggleSidebarOpen(key): void {
        this._fuseSidebarService.getSidebar(key).toggleOpen();
    }

    /**
     * Search
     *
     * @param value
     */
    search(value): void {
        // Do your search here...
        console.log(value);
    }

    /**
     * Set the language
     *
     * @param lang
     */
    setLanguage(lang): void {
        // Set the selected language for the toolbar
        this.selectedLanguage = lang;

        // Use the selected language for translations
        this._translateService.use(lang.id);
    }

    logout(): void {
        const openConfirmDialogSub = this._dialogService._openConfirmDialog('Thoát khỏi hệ thống?')
            .subscribe(
                (isAccepted: boolean) => {
                    if (isAccepted) {
                        this._sessionService.remove();
                        this._router.navigate(['/gioi-thieu']);
                    }
                }
            );
        this.subscriptions.push(openConfirmDialogSub);
    }
}
