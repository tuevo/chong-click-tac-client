import { Component, OnInit } from '@angular/core';
import { EditableFormBaseComponent } from '../../shared/components/base/editable-form-base.component';
import { FuseProgressBarService } from '../../../@fuse/components/progress-bar/progress-bar.service';
import { ILoginSuccess } from '../../authentication/login/models/i-login-success';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogService } from '../../shared/services/dialog.service';
import { SessionService } from 'app/shared/services/session.service';
import { ValidatorsService } from 'app/shared/services/validator.service';
import { Validators } from '@angular/forms';
import { WebsiteManagementService } from './website-management.service';
import { AdsAccountIdPipe } from 'app/shared/pipes/ads-account-id/ads-account-id.pipe';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

export interface Website {
  domain: string;
  code: string;
  expiredAt: Date | null;
  status: number;
}

export interface Account {
  id: string;
  adsId: string;
  createdAt: Date;
  numberOfWebsites: number;
  websites: Website[];
}

@Component({
  selector: 'app-website-management',
  templateUrl: './website-management.component.html',
  styleUrls: ['./website-management.component.scss']
})
export class WebsiteManagementComponent extends EditableFormBaseComponent implements OnInit {

  displayedColumns: string[] = ['order', 'website', 'tracking'];

  websites: Website[];

  accounts: Account[];

  accountItemsSource: any[];

  adsAccountIdPipe: AdsAccountIdPipe = new AdsAccountIdPipe();

  selectedAdsId: string;
  selectedAccountId: string;
  onAddingDomain: boolean;

  constructor(
    private _fuseProgressiveBarService: FuseProgressBarService,
    public _dialogService: DialogService,
    private _sessionService: SessionService,
    private _validatorsService: ValidatorsService,
    private _websiteManagementService: WebsiteManagementService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
  ) {
    super();
    this.accounts = [];
    this.websites = [];
    this.accountItemsSource = [];
    this.selectedAdsId = '';
    this.selectedAccountId = '';
    this.onAddingDomain = false;
  }

  ngOnInit() {
    const sub = this._activatedRoute.params.subscribe((params: any) => {

      if (params.accountId === undefined) {
        this.selectedAdsId = this._sessionService.activeAdsAccountId;
      }
      else {
        const detailSub = this._websiteManagementService.getAdwordAccountDetail(params.accountId)
          .subscribe(res => {
            this.selectedAdsId = this.adsAccountIdPipe.transform(res.data.adsId);
          });
        this.subscriptions.push(detailSub);
      }

      this.getAccounts();
      this.initForm();
    });
    this.subscriptions.push(sub);
  }

  initForm() {
    this.form = this.fb.group({
      adsId: [''],
      domain: ['', [Validators.required, this._validatorsService.checkDomain]]
    })
  }

  onSubmitForm() {
    this.onSubmit();
  }

  getWebsites() {
    this._fuseProgressiveBarService.show();
    const sub = this._websiteManagementService.getWebsiteTrackingInfo(this.selectedAccountId)
      .subscribe(res => {
        this._fuseProgressiveBarService.hide();
        this.websites = res.data.websites;
      },
        (error: HttpErrorResponse) => {
          this._fuseProgressiveBarService.hide();
          this._dialogService._openErrorDialog(error.error);
          this.websites = [];
        });
    this.subscriptions.push(sub);
  }

  getAccounts() {
    this._fuseProgressiveBarService.show();
    const sub = this._websiteManagementService.getAccounts()
      .subscribe(res => {
        this.accounts = res.data.accounts;

        if (this.accounts.length > 0) {

          for (const item of this.accounts) {
            item.websites = [];
            const getWebsiteSub = this._websiteManagementService.getWebsites(item.id)
              .subscribe(res => {
                this._fuseProgressiveBarService.hide();
                item.websites = res.data.website;

                if (this.adsAccountIdPipe.transform(item.adsId) !== this.selectedAdsId) {
                  this.accountItemsSource.push({
                    text: this.adsAccountIdPipe.transform(item.adsId),
                    value: item.id
                  });
                } else {
                  this.accountItemsSource.unshift({
                    text: this.selectedAdsId,
                    value: item.id
                  });
                  this.selectedAccountId = item.id;
                  this.getWebsites();
                }

                if (this.accountItemsSource.length === 1) {
                  this.form.controls['adsId'].setValue(this.accountItemsSource[0]);
                }
              },
                (error: HttpErrorResponse) => {
                  if (error.error.messages) {
                    this._fuseProgressiveBarService.hide();
                    this._dialogService._openErrorDialog(error.error);
                  }
                });
            this.subscriptions.push(getWebsiteSub);
          }
        } else {
          this._dialogService._openErrorDialog({
            messages: ['Vui lòng thêm tài khoản AdWords']
          });
          this._router.navigateByUrl('/them-tai-khoan-moi');
        }
      },
        (error: HttpErrorResponse) => {

          if (error.error.messages) {
            this._dialogService._openErrorDialog(error.error);
          }
          this._fuseProgressiveBarService.hide();
        });
    this.subscriptions.push(sub);
  }

  generatePostObject() {
    const body = { ...this.form.value };
    const params = {
      domain: body.domain,
      accountId: this.selectedAccountId
    }
    return params;
  }

  post() {
    const params = this.generatePostObject();
    this.onAddingDomain = true;
    this._fuseProgressiveBarService.show();
    const sub = this._websiteManagementService.addWebsite(params)
      .subscribe((res: ILoginSuccess) => {
        this._dialogService._openSuccessDialog(res);
        this._fuseProgressiveBarService.hide();
        this.onAddingDomain = false;
        this.getWebsites();
      },
        (error: HttpErrorResponse) => {
          this._dialogService._openErrorDialog(error.error);
          this._fuseProgressiveBarService.hide();
          this.onAddingDomain = false;
        }
      );
    this.subscriptions.push(sub);
  }

  onSelectAdsId(event) {
    this.selectedAdsId = event.value.text;
    this.selectedAccountId = event.value.value;
    this.getWebsites();
  }

}
