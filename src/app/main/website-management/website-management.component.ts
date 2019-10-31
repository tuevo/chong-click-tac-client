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
import { ActivatedRoute, Router } from '@angular/router';

export interface Website {
  domain: string;
  code: string;
  expiredAt: Date | null;
  status: number;
}

export interface Account {
  accountId: string;
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
  isProcessing: boolean;
  isAddingWebsiteAllowed: boolean;
  limitWebsite: number;
  user: any;

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
    this.isProcessing = false;
  }

  ngOnInit() {
    this.initForm();
    this.user = JSON.parse(this._sessionService.user);

    this.isProcessing = true;
    this._fuseProgressiveBarService.show();
    const sub = this._activatedRoute.params.subscribe(
      (params: any) => {

        if (params.accountId === undefined) {
          this.selectedAccountId = this._sessionService.activeAccountId;
          this.selectedAdsId = this._sessionService.activeAdsAccountId;

          this._fuseProgressiveBarService.hide();
          this.isProcessing = false;
        }
        else {
          this.selectedAccountId = params.accountId;
          this.getAdwordsAccountDetail();
        }

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

  getAdwordsAccountDetail() {
    const detailSub = this._websiteManagementService.getAdwordsAccountDetail(this.selectedAccountId)
      .subscribe(
        res => {
          this.selectedAdsId = this.adsAccountIdPipe.transform(res.data.adsAccount.adsId);
          this.limitWebsite = res.data.adsAccount.setting.limitWebsite;
          this._fuseProgressiveBarService.hide();
          this.isProcessing = false;
          this.getAccounts();
        },
        (error: HttpErrorResponse) => {
          this._router.navigateByUrl('/danh-sach-tai-khoan');
        });
    this.subscriptions.push(detailSub);
  }

  getWebsites() {
    this.isProcessing = true;
    this._fuseProgressiveBarService.show();

    const sub = this._websiteManagementService.getWebsiteTrackingInfo(this.selectedAccountId)
      .subscribe(
        res => {
          this.websites = res.data.websites;
          this.isAddingWebsiteAllowed = (this.websites || []).length < this.limitWebsite;
          this._fuseProgressiveBarService.hide();
          this.isProcessing = false;
        },
        (error: HttpErrorResponse) => {
          this._fuseProgressiveBarService.hide();
          this.websites = [];
          this.isProcessing = false;

          if (error.status === 404) {
            const data = [];
            data['select-campaign'] = {
              accountId: this.selectedAccountId,
              adsId: this.selectedAdsId
            };

            this._dialogService._openInfoDialog(
              'Tài khoản bạn chọn hiện chưa có chiến dịch nào được gắn tracking. Vui lòng gắn tracking chiến dịch ',
              '', '', 'select-campaign', data
            );
          }
          else this._dialogService._openErrorDialog(error.error);
        });
    this.subscriptions.push(sub);
  }

  getAccounts() {
    this.isProcessing = true;
    this._fuseProgressiveBarService.show();

    const sub = this._sessionService.getListAccounts()
      .subscribe(
        listAccounts => {
          if (listAccounts) {
            this.accounts = listAccounts;

            if (this.accounts.length > 0) {
              
              for (const item of this.accounts) {
                if (this.adsAccountIdPipe.transform(item.adsId) !== this.selectedAdsId) {
                  this.accountItemsSource.push({
                    text: this.adsAccountIdPipe.transform(item.adsId),
                    value: item.accountId
                  });
                }
                else {
                  this.accountItemsSource.unshift({
                    text: this.selectedAdsId,
                    value: item.accountId
                  });
                  this.selectedAccountId = item.accountId;
                  this.getWebsites();
                }

                if (this.accountItemsSource.length === 1) {
                  this.form.controls['adsId'].setValue(this.accountItemsSource[0]);
                }
              }
            }
          }
        });
    this.subscriptions.push(sub);
  }

  generatePostObject() {
    const body = { ...this.form.value };

    const params = {
      domain: body.domain,
      accountId: this.selectedAccountId
    };

    return params;
  }

  post() {
    this.isProcessing = true;
    const params = this.generatePostObject();
    this._fuseProgressiveBarService.show();

    const sub = this._websiteManagementService.addWebsite(params)
      .subscribe(
        (res: ILoginSuccess) => {
          this.getWebsites();
          this._fuseProgressiveBarService.hide();
          this._dialogService._openSuccessDialog(res);
          this.isProcessing = false;
        },
        (error: HttpErrorResponse) => {
          this._dialogService._openErrorDialog(error.error);
          this._fuseProgressiveBarService.hide();
          this.isProcessing = false;
        }
      );
    this.subscriptions.push(sub);
  }

  openRemoveWebsiteConfirmDialog(websiteId: string) {
    const confirmDialogSub = this._dialogService._openConfirmDialog('Xóa website này khỏi tài khoản Google Ads?')
      .subscribe(
        (isAccepted) => {
          if (isAccepted) {
            this.isProcessing = true;
            this._fuseProgressiveBarService.show();

            const sub = this._websiteManagementService.removeWebsite(websiteId)
              .subscribe(
                (res: ILoginSuccess) => {
                  this.getWebsites();
                  this._fuseProgressiveBarService.hide();
                  this._dialogService._openSuccessDialog(res);
                },
                (error: HttpErrorResponse) => {
                  if (error.error.messages) {
                    this._dialogService._openErrorDialog(error.error);
                  }
                  this._fuseProgressiveBarService.hide();
                  this.isProcessing = false;
                });
            this.subscriptions.push(sub);
          }
        });
    this.subscriptions.push(confirmDialogSub);
  }

  onSelectAdsId(event) {
    this.selectedAdsId = event.value.text;
    this.selectedAccountId = event.value.value;

    this.getWebsites();
  }

}
