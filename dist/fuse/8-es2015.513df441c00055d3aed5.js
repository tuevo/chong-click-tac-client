(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{nJkw:function(n,l,t){"use strict";t.r(l);var e=t("8Y7J");class o{}var u=t("pMnS"),c=t("bujt"),i=t("Fwaw"),a=t("5GAg"),s=t("omvX"),r=t("8rEH"),d=t("zQui"),b=t("Ourk"),g=t("elxJ"),h=t("8bJo"),p=t("Mz6y"),m=t("QQfA"),_=t("hOhj"),v=t("/HVE"),O=t("IP0z"),f=t("cUpR"),C=t("SVse"),P=t("pIm3"),w=t("Mr+X"),A=t("Gi4r"),M=t("Nhcz"),x=t("/q54"),G=t("TtEo"),I=t("02hT"),E=t("VDRc"),k=t("s7LF"),S=t("i1kN"),y=t("wd5q"),L=t("c3gj"),T=t("k1t7"),N=t("VMjx"),D=t("IheW");class B{constructor(n){this._http=n}addAdwordsAccount(n){return this._http.post(N.a.AdwordsAccount.addAccount,n)}getAccounts(){return this._http.get(N.a.AdwordsAccount.getAccounts)}getAdwordsAccountDetail(n){const l=N.a.AdwordsAccount.getAwordsAccountDetail.replace("{account_id}",n);return this._http.get(l)}checkAccountAcceptance(n){return this._http.post(N.a.AdwordsAccount.checkAccountAcceptance,n)}getAdsAccounts(n){let l=N.a.AdwordsAccount.getAdsAccounts.replace("{accessToken}",n.accessToken);return l=l.replace("{refreshToken}",n.refreshToken),this._http.get(l)}}B.ngInjectableDef=e.Sb({factory:function(){return new B(e.Wb(D.c))},token:B,providedIn:"root"});var R=t("H0VJ"),j=t("K9xE"),U=t("mZtN"),Q=t("f3OE"),z=t("5vgI"),H=t("AytR"),W=t("IYfF"),K=t("TaUB");class V extends L.a{constructor(n,l,t,e,o,u,c,i,a,s,r){super(),this._fuseProgressiveBarService=n,this._dialogService=l,this._fuseNavigationService=t,this._addAdwordsAccountsService=e,this._adwordsAccountsService=o,this._sessionService=u,this._router=c,this._fuseSlashScreenService=i,this.http=a,this._ngZone=s,this._authService=r,this.isConnected=!1,this._adsAccountIdPipe=new z.a,this.isProcessing=!1,this.isAccountListShown=!1,this.adsAccounts=[],this.adsAccountColumns=["order","adsId","name","selection"],this.selectedAccount=""}ngOnInit(){this.initForm(),this.checkAccountList()}ngAfterViewInit(){setTimeout(()=>{this.googleInit()},500)}loginByGG(){this.auth2.grantOfflineAccess().then(this.onSignIn.bind(this))}checkAccountList(){this.isProcessing=!0,this._fuseProgressiveBarService.show();const n=this._adwordsAccountsService.getAdwordsAccount().subscribe(n=>{this._fuseProgressiveBarService.hide(),this.isProcessing=!1},n=>{this.getAdsAccounts()});this.subscriptions.push(n)}googleInit(){gapi.load("auth2",()=>{this.auth2=gapi.auth2.init({client_id:H.a.googleAuth2ClientID,cookiepolicy:"single_host_origin",scope:"profile email https://www.googleapis.com/auth/adwords"})})}showAccountListByEmail(){const n=this._sessionService.getGoogleAccountToken();n.accessToken&&n.refreshToken?this.getAdsAccounts():this.auth2.grantOfflineAccess().then(this.onSignIn.bind(this))}onSignIn(n){n&&n.code?this.http.post("https://www.googleapis.com/oauth2/v4/token",{grant_type:"authorization_code",client_id:H.a.googleAuth2ClientID,client_secret:"mcIBWUsnOJ92Knb1fYYtiYSL",code:n.code,redirect_uri:H.a.oauth2RedirectUri}).subscribe(n=>{this._sessionService.setGoogleAccountToken(n.access_token,n.refresh_token),setTimeout(()=>{this.getAdsAccounts()},500)},n=>{console.log("POST call in error",n)},()=>{console.log("The POST observable is now completed.")}):this._dialogService._openErrorDialog({messages:["L\u1ea5y th\xf4ng tin t\xe0i kho\u1ea3n t\u1eeb google ko th\xe0nh c\xf4ng"]})}selectAccount(n){this.selectedAccount=n.value}getAdsAccounts(){this.isProcessing=!0,this._fuseProgressiveBarService.show();const n=this._sessionService.getGoogleAccountToken(),l=this._addAdwordsAccountsService.getAdsAccounts(n).subscribe(n=>{this.adsAccounts=n.data.googleAds,this.adsAccounts=(this.adsAccounts||[]).map(n=>(n.googleAdId=this._adsAccountIdPipe.transform(n.googleAdId),n)),this._fuseProgressiveBarService.hide(),this.isAccountListShown=!0,this.isProcessing=!1},n=>{this.isAccountListShown=!1,this.isProcessing=!1,this._fuseProgressiveBarService.hide(),"unauthorized_client"===n.error.messages[0]?this.loginByGG():this._dialogService._openErrorDialog(n.error,!0)});this.subscriptions.push(l)}generateConnectAccountByEmailParam(){return{adWordId:this.selectedAccount.replace(/[^a-zA-Z0-9 ]/g,"")}}connectAccountByEmail(){this.isProcessing=!0,this._fuseProgressiveBarService.show();const n=this.generateConnectAccountByEmailParam(),l=this._addAdwordsAccountsService.addAdwordsAccount(n).subscribe(n=>{if(this._fuseProgressiveBarService.hide(),this._dialogService._openInfoDialog(n.messages[0]),n.data.isRefresh)return this._fuseNavigationService.reloadNavigation(),void this._router.navigateByUrl("/danh-sach-tai-khoan");this.isConnected=!0,this.connectedAccountId=n.data.account._id,this.connectedAdsId=this._adsAccountIdPipe.transform(n.data.account.adsId),this._sessionService.setActiveAccountId(this.connectedAccountId),this._sessionService.setActiveAdsAccountId(this.connectedAdsId),this._sessionService.setAccountId(this.connectedAccountId),this._sessionService.setAdwordId(this.connectedAdsId),this._fuseNavigationService.reloadNavigation(),this.getAdsAccounts(),this.isProcessing=!1},n=>{this.isConnected=!1,this.connectedAccountId="",this.connectedAdsId="",this._fuseProgressiveBarService.hide(),this._dialogService._openErrorDialog(n.error),this.isProcessing=!1});this.subscriptions.push(l)}completeAccountConnection(){this.isProcessing=!0,this._fuseProgressiveBarService.show();const n=this._addAdwordsAccountsService.checkAccountAcceptance({adWordId:this.connectedAdsId.replace(/\D+/g,"")}).subscribe(n=>{n.data.isConnected?(this._dialogService._openSuccessDialog({messages:["K\u1ebft n\u1ed1i t\xe0i kho\u1ea3n Google Ads th\xe0nh c\xf4ng"]}),setTimeout(()=>{this._fuseProgressiveBarService.hide(),this._router.navigateByUrl("/gan-tracking/chien-dich")},2e3)):(this.isProcessing=!1,this._fuseProgressiveBarService.hide(),this._dialogService._openErrorDialog({messages:["K\u1ebft n\u1ed1i t\xe0i kho\u1ea3n Google Ads kh\xf4ng th\xe0nh c\xf4ng. Vui l\xf2ng ki\u1ebfm tra l\u1ea1i"]}))},n=>{this._fuseProgressiveBarService.hide(),this._dialogService._openErrorDialog({messages:["T\xe0i kho\u1ea3n Google Ads kh\xf4ng t\u1ed3n t\u1ea1i"]}),this.isProcessing=!1});this.subscriptions.push(n)}post(){this.isProcessing=!0,this._fuseProgressiveBarService.show();const n=this.generatePostObject(),l=this._addAdwordsAccountsService.addAdwordsAccount(n).subscribe(n=>{if(this._fuseProgressiveBarService.hide(),this._dialogService._openInfoDialog(n.messages[0]),n.data.isRefresh)return this._fuseNavigationService.reloadNavigation(),void this._router.navigateByUrl("/danh-sach-tai-khoan");this.isConnected=!0,this.connectedAccountId=n.data.account._id,this.connectedAdsId=this._adsAccountIdPipe.transform(n.data.account.adsId),this._sessionService.setActiveAccountId(this.connectedAccountId),this._sessionService.setActiveAdsAccountId(this.connectedAdsId),this._sessionService.setAccountId(this.connectedAccountId),this._sessionService.setAdwordId(this.connectedAdsId),this._fuseNavigationService.reloadNavigation(),this.isAccountListShown&&this.getAdsAccounts(),this.isProcessing=!1},n=>{this.isConnected=!1,this.connectedAccountId="",this.connectedAdsId="",this._fuseProgressiveBarService.hide(),this._dialogService._openErrorDialog(n.error),this.isProcessing=!1});this.subscriptions.push(l)}onClickBtnSubmit(){this.onSubmit()}initForm(){this.form=this.fb.group({adWordId:[null,[k.v.required]]})}generatePostObject(){const n=Object.assign({},this.form.value);return n.adWordId=n.adWordId.replace(/[^a-zA-Z0-9 ]/g,""),n}onPressId(n){return n>=48&&n<=57||45===n}}var F=t("iInd"),$=e.ub({encapsulation:0,styles:[[".container[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background:url(dark-material-bg.d914334bfb315da0efe3.jpg) 0 0/100% 100%;font-size:16px;font-weight:700;color:#fff;padding:100px 30px 30px}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]{padding:15px 30px 30px}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]{height:58px;margin:4px 0 2px 2px;width:120px}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{border:1px solid #d2d2d2;box-shadow:1px 1px 2px silver;background-color:#fff;min-width:350px;margin-bottom:10px}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .message-title[_ngcontent-%COMP%]{padding:10px;font-size:18px;font-style:tahoma}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .message-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:40px;width:40px;margin-right:10px}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .message-text[_ngcontent-%COMP%]{padding:10px}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]{color:#039be5}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{padding:30px}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .loginWithGoogle[_ngcontent-%COMP%]{display:table;margin:20px auto 10px}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .loginWithGoogle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:5px 10px;border-radius:0}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .loginWithGoogle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:24px;width:24px;margin-top:-5px;margin-right:5px}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .loginWithGoogle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled   img[_ngcontent-%COMP%]{opacity:.4}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .loginWithGoogle[_ngcontent-%COMP%]   .connect-by-emai-button[_ngcontent-%COMP%]{background:#fff;color:rgba(0,0,0,.6)}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .loginWithGoogle[_ngcontent-%COMP%]   .disconnect-by-email-button[_ngcontent-%COMP%]{background:#cf493c;color:#fff}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .loginWithGoogle[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]{font-size:12px;font-style:italic}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .ads-account-list[_ngcontent-%COMP%]{padding-top:20px}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .ads-account-list[_ngcontent-%COMP%]   .div-connect-account-button[_ngcontent-%COMP%]{text-align:center;padding-top:10px;padding-bottom:10px}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .ads-account-list[_ngcontent-%COMP%]   .div-connect-account-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-radius:0}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .ads-account-list[_ngcontent-%COMP%]   .div-connect-account-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .ads-account-list[_ngcontent-%COMP%]   .ads-account-list-title[_ngcontent-%COMP%]{font-weight:700;font-size:16px;padding-bottom:10px}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .ads-account-list[_ngcontent-%COMP%]   .ads-account-list-wrapper[_ngcontent-%COMP%]{max-height:300px;overflow:auto;background-color:#fff;box-shadow:1px 1px 4px silver}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .ads-account-list[_ngcontent-%COMP%]   .ads-account-list-wrapper[_ngcontent-%COMP%]   mat-table[_ngcontent-%COMP%]{box-shadow:none}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .ads-account-list[_ngcontent-%COMP%]   .ads-account-list-wrapper[_ngcontent-%COMP%]   mat-table[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]{transition:.2s}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .ads-account-list[_ngcontent-%COMP%]   .ads-account-list-wrapper[_ngcontent-%COMP%]   mat-table[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]:hover{background-color:rgba(3,155,229,.1)}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .ads-account-list[_ngcontent-%COMP%]   .ads-account-list-wrapper[_ngcontent-%COMP%]   mat-table[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]{color:#039be5}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .ads-account-list[_ngcontent-%COMP%]   .ads-account-list-wrapper[_ngcontent-%COMP%]   mat-table[_ngcontent-%COMP%]   .disabled-cell[_ngcontent-%COMP%]{color:silver}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .ads-account-list[_ngcontent-%COMP%]   .ads-account-list-wrapper[_ngcontent-%COMP%]   mat-table[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]:nth-child(1), .container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .ads-account-list[_ngcontent-%COMP%]   .ads-account-list-wrapper[_ngcontent-%COMP%]   mat-table[_ngcontent-%COMP%]   mat-header-cell[_ngcontent-%COMP%]:nth-child(1){flex:0 0 12%}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .ads-account-list[_ngcontent-%COMP%]   .ads-account-list-wrapper[_ngcontent-%COMP%]   mat-table[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]:last-child, .container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .ads-account-list[_ngcontent-%COMP%]   .ads-account-list-wrapper[_ngcontent-%COMP%]   mat-table[_ngcontent-%COMP%]   mat-header-cell[_ngcontent-%COMP%]:last-child{display:flex;justify-content:center}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .ads-account-list[_ngcontent-%COMP%]   .ads-account-list-wrapper[_ngcontent-%COMP%]   mat-table[_ngcontent-%COMP%]   mat-header-cell[_ngcontent-%COMP%]{background:#039be5;color:#fff}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .g-sign-in-button[_ngcontent-%COMP%]{background:#4285f4;height:40px;border-width:0;border-radius:2px;white-space:nowrap;padding:0;margin:10px;display:inline-block;width:210px;color:#fff;box-shadow:0 1px 2px 0 rgba(0,0,0,.25);transition:background-color 218ms,border-color 218ms,box-shadow 218ms}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;font-family:Roboto,arial,sans-serif;font-weight:500;letter-spacing:.21px;font-size:14px;border:none;text-align:center;width:166px;padding-top:10px}@media screen and (max-width:600px){.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]{padding:15px}.container[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]{padding:0 5px 0 0;font-size:12px}}"]],data:{}});function q(n){return e.Qb(0,[(n()(),e.wb(0,0,null,null,3,"button",[["class","connect-by-email-button"],["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.showAccountListByEmail()&&e),e},c.d,c.b)),e.vb(1,180224,null,0,i.b,[e.n,a.h,[2,s.a]],{disabled:[0,"disabled"]},null),(n()(),e.wb(2,0,null,0,0,"img",[["alt",""],["src","https://cdn4.iconfinder.com/data/icons/free-colorful-icons/360/gmail.png"],["style","margin-right: 8px"]],null,null,null,null,null)),(n()(),e.Ob(-1,0,["K\u1ebft n\u1ed1i nhanh b\u1eb1ng Gmail"]))],function(n,l){n(l,1,0,l.component.isProcessing)},function(n,l){n(l,0,0,e.Gb(l,1).disabled||null,"NoopAnimations"===e.Gb(l,1)._animationMode)})}function J(n){return e.Qb(0,[(n()(),e.wb(0,0,null,null,3,"button",[["class","disconnect-by-email-button"],["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,t){var e=!0,o=n.component;return"click"===l&&(o.isAccountListShown=!1,e=!1!==(o.selectedAccount="")&&e),e},c.d,c.b)),e.vb(1,180224,null,0,i.b,[e.n,a.h,[2,s.a]],{disabled:[0,"disabled"]},null),(n()(),e.wb(2,0,null,0,0,"img",[["alt",""],["src","https://cdn4.iconfinder.com/data/icons/free-colorful-icons/360/gmail.png"]],null,null,null,null,null)),(n()(),e.Ob(-1,0,["H\u1ee7y k\u1ebft n\u1ed1i nhanh b\u1eb1ng Gmail"]))],function(n,l){n(l,1,0,l.component.isProcessing)},function(n,l){n(l,0,0,e.Gb(l,1).disabled||null,"NoopAnimations"===e.Gb(l,1)._animationMode)})}function Y(n){return e.Qb(0,[(n()(),e.wb(0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),e.vb(1,16384,null,0,r.e,[d.d,e.n],null,null),(n()(),e.Ob(-1,null,[" # "]))],null,null)}function Z(n){return e.Qb(0,[(n()(),e.wb(0,0,null,null,2,"mat-cell",[["class","mat-cell"],["role","gridcell"]],[[2,"disabled-cell",null]],null,null,null,null)),e.vb(1,16384,null,0,r.a,[d.d,e.n],null,null),(n()(),e.Ob(2,null,[" "," "]))],null,function(n,l){n(l,0,0,!l.context.$implicit.availableToConnect),n(l,2,0,l.context.index+1)})}function X(n){return e.Qb(0,[(n()(),e.wb(0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),e.vb(1,16384,null,0,r.e,[d.d,e.n],null,null),(n()(),e.Ob(-1,null,[" Google Ads ID "]))],null,null)}function nn(n){return e.Qb(0,[(n()(),e.wb(0,0,null,null,2,"mat-cell",[["class","mat-cell"],["role","gridcell"]],[[2,"disabled-cell",null]],null,null,null,null)),e.vb(1,16384,null,0,r.a,[d.d,e.n],null,null),(n()(),e.Ob(2,null,[" "," "]))],null,function(n,l){n(l,0,0,!l.context.$implicit.availableToConnect),n(l,2,0,l.context.$implicit.googleAdId)})}function ln(n){return e.Qb(0,[(n()(),e.wb(0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),e.vb(1,16384,null,0,r.e,[d.d,e.n],null,null),(n()(),e.Ob(-1,null,[" T\xean "]))],null,null)}function tn(n){return e.Qb(0,[(n()(),e.wb(0,0,null,null,2,"mat-cell",[["class","mat-cell"],["role","gridcell"]],[[2,"disabled-cell",null]],null,null,null,null)),e.vb(1,16384,null,0,r.a,[d.d,e.n],null,null),(n()(),e.Ob(2,null,[" "," "]))],null,function(n,l){n(l,0,0,!l.context.$implicit.availableToConnect),n(l,2,0,l.context.$implicit.name)})}function en(n){return e.Qb(0,[(n()(),e.wb(0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),e.vb(1,16384,null,0,r.e,[d.d,e.n],null,null),(n()(),e.Ob(-1,null,[" Ch\u1ecdn t\u1ea1i \u0111\xe2y "]))],null,null)}function on(n){return e.Qb(0,[(n()(),e.wb(0,16777216,null,null,2,"mat-radio-button",[["class","mat-radio-button"],["disabled",""]],[[2,"mat-radio-checked",null],[2,"mat-radio-disabled",null],[2,"_mat-animation-noopable",null],[2,"mat-primary",null],[2,"mat-accent",null],[2,"mat-warn",null],[1,"tabindex",0],[1,"id",0]],[[null,"focus"],[null,"longpress"],[null,"keydown"],[null,"touchend"]],function(n,l,t){var o=!0;return"focus"===l&&(o=!1!==e.Gb(n,1)._inputElement.nativeElement.focus()&&o),"longpress"===l&&(o=!1!==e.Gb(n,2).show()&&o),"keydown"===l&&(o=!1!==e.Gb(n,2)._handleKeydown(t)&&o),"touchend"===l&&(o=!1!==e.Gb(n,2)._handleTouchend()&&o),o},b.b,b.a)),e.vb(1,4440064,null,0,g.a,[[2,g.b],e.n,e.i,a.h,h.d,[2,s.a]],{value:[0,"value"],disabled:[1,"disabled"]},null),e.vb(2,212992,null,0,p.d,[m.c,e.n,_.b,e.U,e.C,v.a,a.c,a.h,p.b,[2,O.b],[2,p.a],[2,f.f]],{message:[0,"message"]},null),(n()(),e.lb(0,null,null,0))],function(n,l){n(l,1,0,e.yb(1,"",l.parent.context.$implicit.googleAdId,""),""),n(l,2,0,e.yb(1,"",l.parent.context.$implicit.reason,""))},function(n,l){n(l,0,0,e.Gb(l,1).checked,e.Gb(l,1).disabled,"NoopAnimations"===e.Gb(l,1)._animationMode,"primary"===e.Gb(l,1).color,"accent"===e.Gb(l,1).color,"warn"===e.Gb(l,1).color,-1,e.Gb(l,1).id)})}function un(n){return e.Qb(0,[(n()(),e.wb(0,0,null,null,1,"mat-radio-button",[["class","mat-radio-button"]],[[2,"mat-radio-checked",null],[2,"mat-radio-disabled",null],[2,"_mat-animation-noopable",null],[2,"mat-primary",null],[2,"mat-accent",null],[2,"mat-warn",null],[1,"tabindex",0],[1,"id",0]],[[null,"change"],[null,"focus"]],function(n,l,t){var o=!0,u=n.component;return"focus"===l&&(o=!1!==e.Gb(n,1)._inputElement.nativeElement.focus()&&o),"change"===l&&(o=!1!==u.selectAccount(t)&&o),o},b.b,b.a)),e.vb(1,4440064,null,0,g.a,[[2,g.b],e.n,e.i,a.h,h.d,[2,s.a]],{value:[0,"value"]},{change:"change"})],function(n,l){n(l,1,0,e.yb(1,"",l.parent.context.$implicit.googleAdId,""))},function(n,l){n(l,0,0,e.Gb(l,1).checked,e.Gb(l,1).disabled,"NoopAnimations"===e.Gb(l,1)._animationMode,"primary"===e.Gb(l,1).color,"accent"===e.Gb(l,1).color,"warn"===e.Gb(l,1).color,-1,e.Gb(l,1).id)})}function cn(n){return e.Qb(0,[(n()(),e.wb(0,0,null,null,5,"mat-cell",[["class","mat-cell"],["role","gridcell"]],[[2,"disabled-cell",null]],null,null,null,null)),e.vb(1,16384,null,0,r.a,[d.d,e.n],null,null),(n()(),e.lb(16777216,null,null,1,null,on)),e.vb(3,16384,null,0,C.m,[e.U,e.R],{ngIf:[0,"ngIf"]},null),(n()(),e.lb(16777216,null,null,1,null,un)),e.vb(5,16384,null,0,C.m,[e.U,e.R],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,3,0,!l.context.$implicit.availableToConnect),n(l,5,0,l.context.$implicit.availableToConnect)},function(n,l){n(l,0,0,!l.context.$implicit.availableToConnect)})}function an(n){return e.Qb(0,[(n()(),e.wb(0,0,null,null,2,"mat-header-row",[["class","mat-header-row"],["role","row"]],null,null,null,P.d,P.a)),e.Lb(6144,null,d.k,null,[r.g]),e.vb(2,49152,null,0,r.g,[],null,null)],null,null)}function sn(n){return e.Qb(0,[(n()(),e.wb(0,0,null,null,2,"mat-row",[["class","mat-row"],["role","row"]],null,null,null,P.e,P.b)),e.Lb(6144,null,d.m,null,[r.i]),e.vb(2,49152,null,0,r.i,[],null,null)],null,null)}function rn(n){return e.Qb(0,[(n()(),e.wb(0,0,null,null,75,"div",[["class","ads-account-list"]],null,null,null,null,null)),(n()(),e.wb(1,0,null,null,1,"div",[["class","ads-account-list-title"]],null,null,null,null,null)),(n()(),e.Ob(-1,null,[" VUI L\xd2NG L\u1ef0A CH\u1eccN T\xc0I KHO\u1ea2N GOOGLE ADS C\u1ee6A B\u1ea0N "])),(n()(),e.wb(3,0,null,null,65,"div",[["class","ads-account-list-wrapper"]],null,null,null,null,null)),(n()(),e.wb(4,0,null,null,64,"mat-table",[["class","mat-elevation-z8 mat-table"]],null,null,null,P.f,P.c)),e.Lb(6144,null,d.o,null,[r.k]),e.vb(6,2342912,null,4,r.k,[e.v,e.i,e.n,[8,null],[2,O.b],C.d,v.a],{dataSource:[0,"dataSource"]},null),e.Mb(603979776,1,{_contentColumnDefs:1}),e.Mb(603979776,2,{_contentRowDefs:1}),e.Mb(603979776,3,{_contentHeaderRowDefs:1}),e.Mb(603979776,4,{_contentFooterRowDefs:1}),(n()(),e.wb(11,0,null,null,12,null,null,null,null,null,null,null)),e.Lb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[r.c]),e.vb(13,16384,null,3,r.c,[],{name:[0,"name"]},null),e.Mb(603979776,5,{cell:0}),e.Mb(603979776,6,{headerCell:0}),e.Mb(603979776,7,{footerCell:0}),e.Lb(2048,[[1,4]],d.d,null,[r.c]),(n()(),e.lb(0,null,null,2,null,Y)),e.vb(19,16384,null,0,r.f,[e.R],null,null),e.Lb(2048,[[6,4]],d.j,null,[r.f]),(n()(),e.lb(0,null,null,2,null,Z)),e.vb(22,16384,null,0,r.b,[e.R],null,null),e.Lb(2048,[[5,4]],d.b,null,[r.b]),(n()(),e.wb(24,0,null,null,12,null,null,null,null,null,null,null)),e.Lb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[r.c]),e.vb(26,16384,null,3,r.c,[],{name:[0,"name"]},null),e.Mb(603979776,8,{cell:0}),e.Mb(603979776,9,{headerCell:0}),e.Mb(603979776,10,{footerCell:0}),e.Lb(2048,[[1,4]],d.d,null,[r.c]),(n()(),e.lb(0,null,null,2,null,X)),e.vb(32,16384,null,0,r.f,[e.R],null,null),e.Lb(2048,[[9,4]],d.j,null,[r.f]),(n()(),e.lb(0,null,null,2,null,nn)),e.vb(35,16384,null,0,r.b,[e.R],null,null),e.Lb(2048,[[8,4]],d.b,null,[r.b]),(n()(),e.wb(37,0,null,null,12,null,null,null,null,null,null,null)),e.Lb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[r.c]),e.vb(39,16384,null,3,r.c,[],{name:[0,"name"]},null),e.Mb(603979776,11,{cell:0}),e.Mb(603979776,12,{headerCell:0}),e.Mb(603979776,13,{footerCell:0}),e.Lb(2048,[[1,4]],d.d,null,[r.c]),(n()(),e.lb(0,null,null,2,null,ln)),e.vb(45,16384,null,0,r.f,[e.R],null,null),e.Lb(2048,[[12,4]],d.j,null,[r.f]),(n()(),e.lb(0,null,null,2,null,tn)),e.vb(48,16384,null,0,r.b,[e.R],null,null),e.Lb(2048,[[11,4]],d.b,null,[r.b]),(n()(),e.wb(50,0,null,null,12,null,null,null,null,null,null,null)),e.Lb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[r.c]),e.vb(52,16384,null,3,r.c,[],{name:[0,"name"]},null),e.Mb(603979776,14,{cell:0}),e.Mb(603979776,15,{headerCell:0}),e.Mb(603979776,16,{footerCell:0}),e.Lb(2048,[[1,4]],d.d,null,[r.c]),(n()(),e.lb(0,null,null,2,null,en)),e.vb(58,16384,null,0,r.f,[e.R],null,null),e.Lb(2048,[[15,4]],d.j,null,[r.f]),(n()(),e.lb(0,null,null,2,null,cn)),e.vb(61,16384,null,0,r.b,[e.R],null,null),e.Lb(2048,[[14,4]],d.b,null,[r.b]),(n()(),e.lb(0,null,null,2,null,an)),e.vb(64,540672,null,0,r.h,[e.R,e.v],{columns:[0,"columns"],sticky:[1,"sticky"]},null),e.Lb(2048,[[3,4]],d.l,null,[r.h]),(n()(),e.lb(0,null,null,2,null,sn)),e.vb(67,540672,null,0,r.j,[e.R,e.v],{columns:[0,"columns"]},null),e.Lb(2048,[[2,4]],d.n,null,[r.j]),(n()(),e.wb(69,0,null,null,6,"p",[["class","div-connect-account-button"]],null,null,null,null,null)),(n()(),e.wb(70,0,null,null,5,"button",[["color","accent"],["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.connectAccountByEmail()&&e),e},c.d,c.b)),e.vb(71,180224,null,0,i.b,[e.n,a.h,[2,s.a]],{disabled:[0,"disabled"],color:[1,"color"]},null),(n()(),e.wb(72,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,w.b,w.a)),e.vb(73,9158656,null,0,A.b,[e.n,A.d,[8,null],[2,A.a]],null,null),(n()(),e.Ob(-1,0,["wifi"])),(n()(),e.Ob(-1,0,[" K\u1ebft n\u1ed1i t\xe0i kho\u1ea3n "]))],function(n,l){var t=l.component;n(l,6,0,t.adsAccounts),n(l,13,0,"order"),n(l,26,0,"adsId"),n(l,39,0,"name"),n(l,52,0,"selection"),n(l,64,0,t.adsAccountColumns,!0),n(l,67,0,t.adsAccountColumns),n(l,71,0,!t.selectedAccount||t.isProcessing,"accent"),n(l,73,0)},function(n,l){n(l,70,0,e.Gb(l,71).disabled||null,"NoopAnimations"===e.Gb(l,71)._animationMode),n(l,72,0,e.Gb(l,73).inline,"primary"!==e.Gb(l,73).color&&"accent"!==e.Gb(l,73).color&&"warn"!==e.Gb(l,73).color)})}function dn(n){return e.Qb(0,[(n()(),e.wb(0,0,null,null,44,"div",[["gdArea","content"]],null,null,null,null,null)),e.vb(1,671744,null,0,M.c,[e.n,x.j,[2,M.b],x.f],{gdArea:[0,"gdArea"]},null),(n()(),e.wb(2,0,null,null,1,"mat-divider",[["class","mat-divider"],["role","separator"]],[[1,"aria-orientation",0],[2,"mat-divider-vertical",null],[2,"mat-divider-horizontal",null],[2,"mat-divider-inset",null]],null,null,G.b,G.a)),e.vb(3,49152,null,0,I.a,[],null,null),(n()(),e.wb(4,0,null,null,4,"h3",[],null,null,null,null,null)),(n()(),e.wb(5,0,null,null,3,"strong",[],null,null,null,null,null)),(n()(),e.wb(6,0,null,null,1,"span",[["class","step"]],null,null,null,null,null)),(n()(),e.Ob(-1,null,["[3]"])),(n()(),e.Ob(-1,null,[" VUI L\xd2NG \u0110\u1ed2NG \xdd Y\xcaU C\u1ea6U K\u1ebeT N\u1ed0I"])),(n()(),e.wb(9,0,null,null,6,"p",[],null,null,null,null,null)),(n()(),e.wb(10,0,null,null,1,"strong",[],null,null,null,null,null)),(n()(),e.Ob(-1,null,["B\u01b0\u1edbc 1: "])),(n()(),e.Ob(-1,null,[" Truy c\u1eadp l\u1ea1i t\xe0i kho\u1ea3n AdWords c\u1ee7a b\u1ea1n "])),(n()(),e.wb(13,0,null,null,1,"a",[["href","https://ads.google.com/intl/vi_VN/home/"],["target","_blank"]],null,null,null,null,null)),(n()(),e.Ob(-1,null,["adwords.google.com"])),(n()(),e.Ob(-1,null,[" v\xe0 b\u1ea5m v\xe0o icon \u1edf menu b\xean tr\xe1i "])),(n()(),e.wb(16,0,null,null,1,"p",[["class","text-center"]],null,null,null,null,null)),(n()(),e.wb(17,0,null,null,0,"img",[["src","/assets/images/adwords-caidat-b1-moi.jpg?v=1"]],null,null,null,null,null)),(n()(),e.wb(18,0,null,null,9,"p",[],null,null,null,null,null)),(n()(),e.wb(19,0,null,null,1,"strong",[],null,null,null,null,null)),(n()(),e.Ob(-1,null,["B\u01b0\u1edbc 2: "])),(n()(),e.Ob(-1,null,[" Sau \u0111\xf3 b\u1ea5m v\xe0o "])),(n()(),e.wb(22,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),e.Ob(-1,null,[" Ng\u01b0\u1eddi Qu\u1ea3n L\xfd "])),(n()(),e.Ob(-1,null,[" v\xe0 b\u1ea5m "])),(n()(),e.wb(25,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),e.Ob(-1,null,["Ch\u1ea5p Thu\u1eadn"])),(n()(),e.Ob(-1,null,[" (n\u1ebfu b\u1ea1n kh\xf4ng th\u1ea5y ng\u01b0\u1eddi qu\u1ea3n l\xfd vui l\xf2ng ch\u1edd kho\u1ea3ng 5 ph\xfat)"])),(n()(),e.wb(28,0,null,null,1,"p",[["class","text-center"]],null,null,null,null,null)),(n()(),e.wb(29,0,null,null,0,"img",[["src","./assets/images/adwords-caidat-b2-moi.jpg?v=1"]],null,null,null,null,null)),(n()(),e.wb(30,0,null,null,5,"p",[],null,null,null,null,null)),(n()(),e.wb(31,0,null,null,1,"strong",[],null,null,null,null,null)),(n()(),e.Ob(-1,null,["B\u01b0\u1edbc 3: "])),(n()(),e.Ob(-1,null,["M\u1ed9t th\xf4ng b\xe1o hi\u1ec7n ra, b\u1ea1n ch\u1ecdn "])),(n()(),e.wb(34,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),e.Ob(-1,null,["C\u1ea5p Quy\u1ec1n Truy C\u1eadp"])),(n()(),e.wb(36,0,null,null,1,"p",[["class","text-center"]],null,null,null,null,null)),(n()(),e.wb(37,0,null,null,0,"img",[["src","./assets/images/adwords-caidat-b3-moi.jpg?v=1"]],null,null,null,null,null)),(n()(),e.wb(38,0,null,null,6,"p",[["class","text-center"],["style","padding-top: 20px"]],null,null,null,null,null)),(n()(),e.wb(39,0,null,null,5,"button",[["aria-label","T\xd4I \u0110\xc3 HO\xc0N T\u1ea4T K\u1ebeT N\u1ed0I"],["color","warn"],["mat-raised-button",""],["style","border-radius: 0"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.completeAccountConnection()&&e),e},c.d,c.b)),e.vb(40,180224,null,0,i.b,[e.n,a.h,[2,s.a]],{disabled:[0,"disabled"],color:[1,"color"]},null),(n()(),e.wb(41,0,null,0,2,"mat-icon",[["class","done_outline mat-icon notranslate"],["matSuffix",""],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,w.b,w.a)),e.vb(42,9158656,null,0,A.b,[e.n,A.d,[8,null],[2,A.a]],null,null),(n()(),e.Ob(-1,0,["done_outline"])),(n()(),e.Ob(-1,0,[" T\xd4I \u0110\xc3 HO\xc0N T\u1ea4T K\u1ebeT N\u1ed0I "]))],function(n,l){var t=l.component;n(l,1,0,"content"),n(l,40,0,t.isProcessing,"warn"),n(l,42,0)},function(n,l){n(l,2,0,e.Gb(l,3).vertical?"vertical":"horizontal",e.Gb(l,3).vertical,!e.Gb(l,3).vertical,e.Gb(l,3).inset),n(l,39,0,e.Gb(l,40).disabled||null,"NoopAnimations"===e.Gb(l,40)._animationMode),n(l,41,0,e.Gb(l,42).inline,"primary"!==e.Gb(l,42).color&&"accent"!==e.Gb(l,42).color&&"warn"!==e.Gb(l,42).color)})}function bn(n){return e.Qb(0,[(n()(),e.wb(0,0,null,null,59,"div",[["class","container"]],null,null,null,null,null)),(n()(),e.wb(1,0,null,null,1,"div",[["class","title"]],null,null,null,null,null)),(n()(),e.Ob(-1,null,[" K\u1ebeT N\u1ed0I T\xc0I KHO\u1ea2N GOOGLE ADS C\u1ee6A B\u1ea0N "])),(n()(),e.wb(3,0,null,null,56,"div",[["class","inner"]],null,null,null,null,null)),(n()(),e.wb(4,0,null,null,51,"div",[["fxLayout","row"],["fxLayout.xs","column"],["fxLayoutGap","20px"]],null,null,null,null,null)),e.vb(5,671744,null,0,E.c,[e.n,x.j,[2,E.k],x.f],{fxLayout:[0,"fxLayout"],"fxLayout.xs":[1,"fxLayout.xs"]},null),e.vb(6,1720320,null,0,E.d,[e.n,e.C,O.b,x.j,[2,E.j],x.f],{fxLayoutGap:[0,"fxLayoutGap"]},null),(n()(),e.wb(7,0,null,null,13,"div",[["class","connect-button"],["gdArea","connect-button"]],null,null,null,null,null)),e.vb(8,671744,null,0,M.c,[e.n,x.j,[2,M.b],x.f],{gdArea:[0,"gdArea"]},null),(n()(),e.wb(9,0,null,null,4,"h3",[],null,null,null,null,null)),(n()(),e.wb(10,0,null,null,3,"strong",[],null,null,null,null,null)),(n()(),e.wb(11,0,null,null,1,"span",[["class","step"]],null,null,null,null,null)),(n()(),e.Ob(-1,null,["[1]"])),(n()(),e.Ob(-1,null,[" K\u1ebeT N\u1ed0I NHANH B\u1eb0NG GMAIL"])),(n()(),e.wb(14,0,null,null,1,"p",[["style","text-align: justify"]],null,null,null,null,null)),(n()(),e.Ob(-1,null,[" S\u1eed d\u1ee5ng t\xe0i kho\u1ea3n Gmail qu\u1ea3n l\xfd Google Ads, b\u1ea5m k\u1ebft n\u1ed1i nhanh \u0111\u1ec3 ho\xe0n t\u1ea5t qu\xe1 tr\xecnh k\u1ebft n\u1ed1i"])),(n()(),e.wb(16,0,null,null,4,"div",[["class","loginWithGoogle"]],null,null,null,null,null)),(n()(),e.lb(16777216,null,null,1,null,q)),e.vb(18,16384,null,0,C.m,[e.U,e.R],{ngIf:[0,"ngIf"]},null),(n()(),e.lb(16777216,null,null,1,null,J)),e.vb(20,16384,null,0,C.m,[e.U,e.R],{ngIf:[0,"ngIf"]},null),(n()(),e.wb(21,0,null,null,34,"div",[["class","input-side"],["gdArea","input-side"]],null,null,null,null,null)),e.vb(22,671744,null,0,M.c,[e.n,x.j,[2,M.b],x.f],{gdArea:[0,"gdArea"]},null),(n()(),e.wb(23,0,null,null,4,"h3",[],null,null,null,null,null)),(n()(),e.wb(24,0,null,null,3,"strong",[],null,null,null,null,null)),(n()(),e.wb(25,0,null,null,1,"span",[["class","step"]],null,null,null,null,null)),(n()(),e.Ob(-1,null,["[2]"])),(n()(),e.Ob(-1,null,[" K\u1ebeT N\u1ed0I TH\xd4NG QUA M\xc3 GOOGLE ADS ID"])),(n()(),e.wb(28,0,null,null,9,"p",[["style","text-align: justify"]],null,null,null,null,null)),(n()(),e.wb(29,0,null,null,1,"strong",[],null,null,null,null,null)),(n()(),e.Ob(-1,null,["B\u01b0\u1edbc 1: "])),(n()(),e.Ob(-1,null,[" \u0110\u0103ng nh\u1eadp "])),(n()(),e.wb(32,0,null,null,1,"a",[["href","https://ads.google.com/intl/vi_VN/home/"],["target","_blank"]],null,null,null,null,null)),(n()(),e.Ob(-1,null,["adwords.google.com"])),(n()(),e.Ob(-1,null,[", ID t\xe0i kho\u1ea3n Google Ads c\u1ee7a b\u1ea1n s\u1ebd n\u1eb1m \u1edf g\xf3c ph\u1ea3i tr\xean c\xf9ng. "])),(n()(),e.wb(35,0,null,null,1,"span",[["style","color: deeppink;"]],null,null,null,null,null)),(n()(),e.Ob(-1,null,["VD: 552-999-5152"])),(n()(),e.Ob(-1,null,[" l\xe0 ID t\xe0i kho\u1ea3n Google Ads c\u1ee7a b\u1ea1n"])),(n()(),e.wb(38,0,null,null,17,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,t){var o=!0;return"submit"===l&&(o=!1!==e.Gb(n,40).onSubmit(t)&&o),"reset"===l&&(o=!1!==e.Gb(n,40).onReset()&&o),o},null,null)),e.vb(39,16384,null,0,k.A,[],null,null),e.vb(40,540672,null,0,k.j,[[8,null],[8,null]],{form:[0,"form"]},null),e.Lb(2048,null,k.c,null,[k.j]),e.vb(42,16384,null,0,k.q,[[4,k.c]],null,null),(n()(),e.wb(43,0,null,null,12,"div",[["fxLayout","row"]],null,null,null,null,null)),e.vb(44,671744,null,0,E.c,[e.n,x.j,[2,E.k],x.f],{fxLayout:[0,"fxLayout"]},null),(n()(),e.wb(45,0,null,null,4,"app-input-text",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[1,"data-id",0]],[[null,"keypress"]],function(n,l,t){var e=!0;return"keypress"===l&&(e=!1!==n.component.onPressId(t.keyCode)&&e),e},S.b,S.a)),e.vb(46,671744,null,0,k.h,[[3,k.c],[8,null],[8,null],[8,null],[2,k.y]],{name:[0,"name"]},null),e.Lb(2048,null,k.o,null,[k.h]),e.vb(48,16384,null,0,k.p,[[4,k.o]],null,null),e.vb(49,245760,null,0,y.a,[e.n,[6,k.o]],{placeholder:[0,"placeholder"],title:[1,"title"],errors:[2,"errors"],pristine:[3,"pristine"]},null),(n()(),e.wb(50,0,null,null,5,"button",[["aria-label","K\u1ebft n\u1ed1i"],["class","submit-button"],["color","accent"],["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.onClickBtnSubmit()&&e),e},c.d,c.b)),e.vb(51,180224,null,0,i.b,[e.n,a.h,[2,s.a]],{disabled:[0,"disabled"],color:[1,"color"]},null),(n()(),e.wb(52,0,null,0,2,"mat-icon",[["class","add_box mat-icon notranslate"],["matSuffix",""],["role","img"],["style","font-size: 20px"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,w.b,w.a)),e.vb(53,9158656,null,0,A.b,[e.n,A.d,[8,null],[2,A.a]],null,null),(n()(),e.Ob(-1,0,["wifi"])),(n()(),e.Ob(-1,0,[" K\u1ebft n\u1ed1i "])),(n()(),e.lb(16777216,null,null,1,null,rn)),e.vb(57,16384,null,0,C.m,[e.U,e.R],{ngIf:[0,"ngIf"]},null),(n()(),e.lb(16777216,null,null,1,null,dn)),e.vb(59,16384,null,0,C.m,[e.U,e.R],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,5,0,"row","column"),n(l,6,0,"20px"),n(l,8,0,"connect-button"),n(l,18,0,!t.isAccountListShown),n(l,20,0,t.isAccountListShown),n(l,22,0,"input-side"),n(l,40,0,t.form),n(l,44,0,"row"),n(l,46,0,"adWordId"),n(l,49,0,"V\xed d\u1ee5: 5456445193 ho\u1eb7c 545-644-5193","Google Ads ID",t.getMessageErrors("adWordId"),!0),n(l,51,0,t.isProcessing,"accent"),n(l,53,0),n(l,57,0,t.isAccountListShown),n(l,59,0,t.isConnected)},function(n,l){n(l,38,0,e.Gb(l,42).ngClassUntouched,e.Gb(l,42).ngClassTouched,e.Gb(l,42).ngClassPristine,e.Gb(l,42).ngClassDirty,e.Gb(l,42).ngClassValid,e.Gb(l,42).ngClassInvalid,e.Gb(l,42).ngClassPending),n(l,45,0,e.Gb(l,48).ngClassUntouched,e.Gb(l,48).ngClassTouched,e.Gb(l,48).ngClassPristine,e.Gb(l,48).ngClassDirty,e.Gb(l,48).ngClassValid,e.Gb(l,48).ngClassInvalid,e.Gb(l,48).ngClassPending,e.Gb(l,49).id),n(l,50,0,e.Gb(l,51).disabled||null,"NoopAnimations"===e.Gb(l,51)._animationMode),n(l,52,0,e.Gb(l,53).inline,"primary"!==e.Gb(l,53).color&&"accent"!==e.Gb(l,53).color&&"warn"!==e.Gb(l,53).color)})}function gn(n){return e.Qb(0,[(n()(),e.wb(0,0,null,null,1,"app-add-adwords-accounts",[],null,null,null,bn,$)),e.vb(1,4440064,null,0,V,[T.a,R.a,j.a,B,K.a,U.a,F.p,Q.a,D.c,e.C,W.a],null,null)],function(n,l){n(l,1,0)},null)}var hn=e.sb("app-add-adwords-accounts",V,gn,{},{},[]),pn=t("NcP4"),mn=t("POq0"),_n=t("Xd0L"),vn=t("HsOI"),On=t("bOtU");class fn{}var Cn=t("FVPZ"),Pn=t("ura0"),wn=t("u9T3"),An=t("RaCk"),Mn=t("Tk7p"),xn=t("5HBU"),Gn=t("oapL"),In=t("ZwOa"),En=t("D1Ds"),kn=t("/ALb"),Sn=t("zMNK");t.d(l,"AddAdwordsAccountsModuleNgFactory",function(){return yn});var yn=e.tb(o,[],function(n){return e.Db([e.Eb(512,e.l,e.gb,[[8,[u.a,hn,pn.a]],[3,e.l],e.A]),e.Eb(4608,C.o,C.n,[e.x,[2,C.F]]),e.Eb(4608,k.x,k.x,[]),e.Eb(4608,k.f,k.f,[]),e.Eb(5120,e.b,function(n,l){return[x.k(n,l)]},[C.d,e.F]),e.Eb(4608,mn.c,mn.c,[]),e.Eb(4608,_n.b,_n.z,[]),e.Eb(6144,vn.d,null,[y.a]),e.Eb(5120,On.e,On.d,[On.a,On.b]),e.Eb(4608,On.g,On.g,[On.e]),e.Eb(4608,m.c,m.c,[m.i,m.e,e.l,m.h,m.f,e.t,e.C,C.d,O.b,[2,C.i]]),e.Eb(5120,m.j,m.k,[m.c]),e.Eb(5120,p.b,p.c,[m.c]),e.Eb(4608,f.e,_n.c,[[2,_n.g],[2,_n.l]]),e.Eb(4608,B,B,[D.c]),e.Eb(1073742336,C.c,C.c,[]),e.Eb(1073742336,F.t,F.t,[[2,F.y],[2,F.p]]),e.Eb(1073742336,fn,fn,[]),e.Eb(1073742336,O.a,O.a,[]),e.Eb(1073742336,_n.l,_n.l,[[2,_n.d],[2,f.f]]),e.Eb(1073742336,_n.n,_n.n,[]),e.Eb(1073742336,Cn.a,Cn.a,[]),e.Eb(1073742336,k.w,k.w,[]),e.Eb(1073742336,k.l,k.l,[]),e.Eb(1073742336,k.u,k.u,[]),e.Eb(1073742336,x.c,x.c,[]),e.Eb(1073742336,E.g,E.g,[]),e.Eb(1073742336,Pn.c,Pn.c,[]),e.Eb(1073742336,M.a,M.a,[]),e.Eb(1073742336,wn.a,wn.a,[[2,x.h],e.F]),e.Eb(1073742336,An.a,An.a,[]),e.Eb(1073742336,Mn.a,Mn.a,[]),e.Eb(1073742336,xn.a,xn.a,[]),e.Eb(1073742336,v.b,v.b,[]),e.Eb(1073742336,Gn.c,Gn.c,[]),e.Eb(1073742336,mn.d,mn.d,[]),e.Eb(1073742336,vn.e,vn.e,[]),e.Eb(1073742336,In.b,In.b,[]),e.Eb(1073742336,A.c,A.c,[]),e.Eb(1073742336,En.a,En.a,[]),e.Eb(1073742336,_n.v,_n.v,[]),e.Eb(1073742336,i.c,i.c,[]),e.Eb(1073742336,On.c,On.c,[]),e.Eb(1073742336,kn.a,kn.a,[]),e.Eb(1073742336,I.b,I.b,[]),e.Eb(1073742336,d.p,d.p,[]),e.Eb(1073742336,r.m,r.m,[]),e.Eb(1073742336,g.c,g.c,[]),e.Eb(1073742336,a.a,a.a,[]),e.Eb(1073742336,Sn.g,Sn.g,[]),e.Eb(1073742336,_.c,_.c,[]),e.Eb(1073742336,m.g,m.g,[]),e.Eb(1073742336,p.e,p.e,[]),e.Eb(1073742336,o,o,[]),e.Eb(1024,F.m,function(){return[[{path:"",pathMatch:"full",component:V}]]},[]),e.Eb(256,On.b,void 0,[]),e.Eb(256,On.a,On.f,[])])})}}]);