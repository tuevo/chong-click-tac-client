(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-adwords-account-list-adwords-account-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/adwords-account-list/adwords-account-list.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/adwords-account-list/adwords-account-list.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"title1\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"15px\" fxLayoutGap.xs=\"10px\" fxLayoutAlign=\"space-around\"\n    fxLayoutAlign.xs=\"center center\">\n    <div fxFlex=\"70\" class=\"title1-main\">TÀI KHOẢN GOOGLE ADS & WEBSITE</div>\n    <div class=\"add-account\">\n      <button (click)=\"router.navigateByUrl('/them-tai-khoan-moi')\" mat-raised-button class=\"add-account-button\">\n        <mat-icon>library_add</mat-icon> Kết nối tài khoản Google Ads\n      </button>\n    </div>\n  </div>\n\n  <div class=\"inner\">\n\n    <div class=\"table-container\">\n      <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n        <ng-container matColumnDef=\"task\">\n          <mat-header-cell *matHeaderCellDef> Tác vụ </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            <button mat-icon-button color=\"accent\" matTooltip=\"Cập nhật tài khoản\"\n              (click)=\"checkAccountAcceptance(element.adsId, element.isConnected, element.connectType)\"\n              [disabled]=\"isProcessing\">\n              <mat-icon>sync</mat-icon>\n            </button>\n          </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"date\">\n          <mat-header-cell *matHeaderCellDef> Ngày tạo </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.createdAt | date: 'HH:mm dd/MM/yyyy'}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"adwords\">\n          <mat-header-cell *matHeaderCellDef>\n            <img src=\"../../../assets/icons/gg-ads.png\" alt=\"\" class=\"ggAds-icon\">\n            Tài khoản</mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            <div fxLayout=\"row\">\n              <p style=\"color: #4bb543\" *ngIf=\"element.isConnected && element.websites.length > 0\" fxFlex=\"75\"\n                fxFlex.xs=\"55\">\n                <span class=\"ads-account\" matTooltip=\"Tài khoản đã được chấp nhận quyền quản lý hệ thống.\">\n                  <span class=\"ads-account-id\">{{element.adsId | adsAccountId}}</span>\n                  <span class=\"ads-account-name\">{{element.adsName}}</span>\n                </span>\n              </p>\n              <p style=\"color: orange\" *ngIf=\"element.isConnected && element.websites.length === 0\" fxFlex=\"75\"\n                fxFlex.xs=\"55\">\n                <span class=\"ads-account\" matTooltip=\"Tài khoản chưa có website nào.\">\n                  <span class=\"ads-account-id\">{{element.adsId | adsAccountId}}</span>\n                  <span class=\"ads-account-name\">{{element.adsName}}</span>\n                </span>\n              </p>\n              <p style=\"color: silver\" *ngIf=\"!element.isConnected\" fxFlex=\"75\" fxFlex.xs=\"55\">\n                <span class=\"ads-account\" matTooltip=\"Tài khoản chưa được chấp nhận quyền quản lý hệ thống.\">\n                  <span class=\"ads-account-id\">{{element.adsId | adsAccountId}}</span>\n                  <span class=\"ads-account-name\">{{element.adsName}}</span>\n                </span>\n              </p>\n              <div fxLayout=\"row\" fxFlex=\"25\" fxLayoutAlign=\"center center\">\n                <button mat-icon-button color=\"accent\" matTooltip=\"Xem báo cáo click ảo\"\n                  (click)=\"navigateToSpamClickReport(element.accountId, element.adsId)\">\n                  <mat-icon>data_usage</mat-icon>\n                </button>\n                <a [routerLink]=\"['/gan-tracking/website', element.accountId]\" mat-icon-button color=\"accent\"\n                  matTooltip=\"Gắn mã tracking cho các website\" class=\"tracking-button\">\n                  <mat-icon>code</mat-icon>\n                </a>\n                <button mat-icon-button color=\"accent\" matTooltip=\"Ngắt kết nối tài khoản\"\n                  (click)=\"openRemoveAccountConfirmDialog(element.accountId)\" [disabled]=\"isProcessing\">\n                  <mat-icon style=\"color: silver\">close</mat-icon>\n                </button>\n              </div>\n            </div>\n          </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"accepted\">\n          <mat-header-cell *matHeaderCellDef> Quyền quản lý </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            <button mat-icon-button color=\"accent\" matTooltip=\"Đã được chấp nhận\"\n              *ngIf=\"element.connectType !== 'GOOGLE_ADS_ID' || element.isConnected === true\">\n              <mat-icon style=\"color: #4bb543\">check_circle</mat-icon>\n            </button>\n            <button mat-icon-button color=\"accent\" matTooltip=\"Chưa được chấp nhận\"\n              *ngIf=\"element.connectType === 'GOOGLE_ADS_ID' && element.isConnected === false\">\n              <mat-icon style=\"color: crimson\">highlight_off</mat-icon>\n            </button>\n          </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"website\">\n          <mat-header-cell *matHeaderCellDef> Website của tài khoản </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\" fxLayout=\"column\" fxLayoutAlign=\"start\">\n            <ul class=\"website-list\" *ngIf=\"element.websites.length > 0\">\n              <li *ngFor=\"let website of element.websites, let i = index\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                <div fxFlex=\"90\">\n                  <a href=\"{{website.domain}}\" target=\"_blank\">\n                    {{website.domain}}</a>\n                </div>\n                <div fxFlex=\"10\">\n                  <button (click)=\"openRemoveWebsiteConfirmDialog(website.code)\" mat-icon-button color=\"accent\"\n                    matTooltip=\"Xóa website\" [disabled]=\"isProcessing\">\n                    <mat-icon style=\"color: silver; font-size: 20px\">delete</mat-icon>\n                  </button>\n                </div>\n              </li>\n            </ul>\n            <button (click)=\"navigateToWebsiteManagement(element.accountId, element.campaignNumber)\" mat-button\n              class=\"add-domain-button\" [disabled]=\"isProcessing\" color=\"accent\"\n              *ngIf=\"element.websites.length < element.limitWebsite\">\n              <mat-icon>add</mat-icon>Thêm website\n            </button>\n            <span *ngIf=\"element.websites.length >= element.limitWebsite\">\n              <button mat-button class=\"add-domain-button\" color=\"accent\" disabled>\n                <mat-icon>add</mat-icon>Thêm website\n              </button>\n              <span class=\"caution\"><span style=\"color: red\">*</span><b>Chú ý:</b> Số lượng website của tài khoản này\n                đã đạt tối đa. Vui lòng nâng cấp thêm <a routerLink=\"/nang-cap-vip\">tại đây</a></span>\n            </span>\n          </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      </mat-table>\n    </div>\n\n    <div *ngIf=\"dataSource.filteredData.length === 0 && isProcessing === false\" class=\"warning\">\n      <span>Bạn chưa kết nối tài khoản Google Ads nào. Vui lòng thực hiện kết nối <a\n          routerLink=\"/them-tai-khoan-moi\">tại đây</a></span>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/main/adwords-account-list/adwords-account-list-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/main/adwords-account-list/adwords-account-list-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: AdwordsAccountListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdwordsAccountListRoutingModule", function() { return AdwordsAccountListRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _adwords_account_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adwords-account-list.component */ "./src/app/main/adwords-account-list/adwords-account-list.component.ts");




let AdwordsAccountListRoutingModule = class AdwordsAccountListRoutingModule {
};
AdwordsAccountListRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '',
                    pathMatch: 'full',
                    component: _adwords_account_list_component__WEBPACK_IMPORTED_MODULE_3__["AdwordsAccountListComponent"]
                }
            ])],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AdwordsAccountListRoutingModule);



/***/ }),

/***/ "./src/app/main/adwords-account-list/adwords-account-list.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/main/adwords-account-list/adwords-account-list.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  background: url('bg3.jpg');\n  background-size: 100% 100%;\n}\n.container .title1 {\n  color: white;\n  text-shadow: 1px 1px 2px black;\n  font-size: 16px;\n  font-weight: bold;\n  padding: 30px 30px 30px 30px;\n  height: 25vh;\n}\n.container .title1 .title1-main {\n  padding-top: 15px;\n}\n.container .title1 mat-icon {\n  font-size: 18px;\n}\n.container .title1 .add-account {\n  padding-top: 5px;\n}\n.container .title1 .add-account .add-account-button {\n  text-shadow: none;\n  max-width: 250px;\n  color: white;\n  background: rgba(255, 255, 255, 0.2);\n  box-shadow: none;\n}\n.container .title2 {\n  padding: 90px 20px 24px 25px;\n  background: url('adword-bg3.jpg');\n  background-size: 100% 100%;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n  text-shadow: 1px 1px 2px black;\n}\n.container .inner {\n  margin: 30px;\n  position: relative;\n  top: -15vh;\n  -webkit-animation: formAni 0.4s ease-out;\n  animation: formAni 0.4s ease-out;\n}\n@-webkit-keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n.container .inner mat-icon {\n  font-size: 20px;\n}\n.container .inner .warning {\n  padding: 20px;\n  background: lightyellow;\n  border-left: 4px solid darkorange;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  border-radius: 5px;\n  position: relative;\n  top: -50vh;\n  width: 60%;\n  display: table;\n  margin: 0 auto;\n  margin-top: 30px;\n  text-align: center;\n  -webkit-animation: notificationAni 0.2s ease-out;\n  animation: notificationAni 0.2s ease-out;\n}\n.container .inner .warning mat-icon {\n  color: orange;\n  font-size: 24px;\n  margin-right: 10px;\n}\n@-webkit-keyframes notificationAni {\n  from {\n    -webkit-transform: translateY(5vh);\n            transform: translateY(5vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes notificationAni {\n  from {\n    -webkit-transform: translateY(5vh);\n            transform: translateY(5vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n.container .inner .website-list {\n  width: 100%;\n  max-height: 105px;\n  overflow: auto;\n  border-radius: 5px;\n  margin: 5px;\n  border: 1px solid #eee;\n  padding: 5px;\n}\n.container .inner .website-list li a {\n  padding-left: 5px;\n}\n.container .inner .add-domain-button {\n  width: 40%;\n  text-align: left;\n  padding-left: 0;\n  width: 100%;\n  margin-left: 5px;\n  font-size: 12px;\n}\n.container .inner .add-domain-button mat-icon {\n  font-size: 14px;\n  margin-top: 8px;\n  margin-right: -5px;\n}\n.container .inner .caution {\n  font-size: 12px;\n  color: gray;\n  margin-left: 5px;\n}\n.container .inner .vip-icon {\n  height: 18px;\n  width: 18px;\n  -webkit-filter: drop-shadow(0px 1px 1px black);\n          filter: drop-shadow(0px 1px 1px black);\n}\n.container .inner .free-label {\n  background: #44b543;\n  color: white;\n  padding: 2px 4px 2px 4px;\n  font-size: 12px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  margin-left: 10px;\n  text-shadow: none;\n  -webkit-filter: drop-shadow(0px 1px 1px silver);\n          filter: drop-shadow(0px 1px 1px silver);\n  border-radius: 2px;\n}\n.container .inner .vip-label {\n  background: radial-gradient(ellipse farthest-corner at right bottom, #fedb37 0%, #fdb931 8%, #9f7928 30%, #8a6e2f 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #ffffff 0%, #ffffac 8%, #d1b464 25%, #5d4a1f 62.5%, #5d4a1f 100%);\n  color: lightyellow;\n  padding: 1.5px 4.5px 1.5px 4.5px;\n  font-size: 12px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  margin-left: 10px;\n  text-shadow: none;\n  -webkit-filter: drop-shadow(0px 1px 1px black);\n          filter: drop-shadow(0px 1px 1px black);\n  border-radius: 2px;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n}\n.container .inner .vip-expiration {\n  text-align: center;\n  margin-left: 5px;\n  color: #40a5ec;\n  font-weight: bold;\n}\n.container .inner .table-container {\n  min-height: 60vh;\n  background: white;\n  border-bottom: 0.5px solid #eee;\n  overflow: auto;\n  border-radius: 7px;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n.container .inner .table-container li {\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  height: 30px;\n}\n.container .inner .table-container li:hover {\n  background: rgba(3, 155, 229, 0.05);\n}\n.container .inner .table-container .ads-account {\n  font-weight: bold;\n  display: inline-block;\n  margin-right: 10px;\n  width: 140px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.container .inner .table-container .ads-account .ads-account-id {\n  font-size: 15px;\n}\n.container .inner .table-container mat-table {\n  width: 100%;\n  box-shadow: none;\n}\n.container .inner .table-container mat-table .ggAds-icon {\n  height: 12px;\n  width: 12px;\n  margin-right: 8px;\n}\n.container .inner .table-container mat-table mat-header-cell,\n.container .inner .table-container mat-table mat-cell {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: left;\n          justify-content: left;\n}\n.container .inner .table-container mat-table mat-header-cell:nth-child(1),\n.container .inner .table-container mat-table mat-cell:nth-child(1) {\n  -webkit-box-flex: 0;\n          flex: 0 0 8%;\n}\n.container .inner .table-container mat-table mat-header-cell:nth-child(2),\n.container .inner .table-container mat-table mat-cell:nth-child(2) {\n  -webkit-box-flex: 0;\n          flex: 0 0 14%;\n}\n.container .inner .table-container mat-table mat-header-cell:nth-child(3),\n.container .inner .table-container mat-table mat-cell:nth-child(3) {\n  -webkit-box-flex: 0;\n          flex: 0 0 24%;\n}\n.container .inner .table-container mat-table mat-header-cell:nth-child(4),\n.container .inner .table-container mat-table mat-cell:nth-child(4) {\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-flex: 0;\n          flex: 0 0 12%;\n}\n.container .inner .table-container mat-table mat-cell:nth-child(5) {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.container .inner .table-container mat-table mat-header-cell:nth-child(5) {\n  padding-left: 5px;\n}\n.container .inner .table-container mat-table mat-header-cell {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: bold;\n}\n.container .inner .table-container mat-table mat-row {\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  -webkit-animation: rowAppearance 0.4s linear;\n  animation: rowAppearance 0.4s linear;\n}\n@-webkit-keyframes rowAppearance {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes rowAppearance {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.container .inner .table-container mat-table mat-cell {\n  font-size: 12px;\n}\n.container .inner .table-container mat-table mat-row,\n.container .inner .table-container mat-table mat-header-row {\n  min-width: 1000px;\n  width: 100%;\n}\n.container .inner .info-button {\n  cursor: pointer;\n}\n.container .inner .vip-service {\n  color: #40a5ec;\n  font-weight: bold;\n}\n.container .inner .free-service {\n  color: coral;\n  font-weight: bold;\n}\n.container .inner .button-area {\n  padding-top: 30px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.container .inner .tracking {\n  color: orange;\n}\n.container .inner .tracking-button {\n  color: red;\n}\n.container .inner .tracking-button:disabled {\n  color: gray;\n}\n.container .inner .no-tracking {\n  color: #40a5ec;\n}\n.container .inner .clear {\n  clear: both;\n}\n.container .inner .footer {\n  padding-top: 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n@media screen and (max-width: 600px) {\n  .container .title1 {\n    padding: 30px 20px 20vh 20px;\n    height: 40vh;\n  }\n  .container .title1,\n.container .title2 {\n    text-align: center;\n  }\n  .container .inner {\n    margin: 15px;\n  }\n  .container .inner .table-container .ads-account .ads-account-id {\n    font-size: 13px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2Fkd29yZHMtYWNjb3VudC1saXN0L2Fkd29yZHMtYWNjb3VudC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2Fkd29yZHMtYWNjb3VudC1saXN0L2Fkd29yZHMtYWNjb3VudC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7QUNDRjtBRENFO0VBSUUsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDRko7QURJSTtFQUNFLGlCQUFBO0FDRk47QURLSTtFQUNFLGVBQUE7QUNITjtBRE1JO0VBQ0UsZ0JBQUE7QUNKTjtBREtNO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FDSFI7QURRRTtFQUNFLDRCQUFBO0VBQ0EsaUNBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQ05KO0FEU0U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQ0FBQTtBQ1BKO0FEUUk7RUFDRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUNOTjtFRFFJO0lBQ0UsZ0NBQUE7WUFBQSx3QkFBQTtFQ05OO0FBQ0Y7QURBSTtFQUNFO0lBQ0Usb0NBQUE7WUFBQSw0QkFBQTtFQ05OO0VEUUk7SUFDRSxnQ0FBQTtZQUFBLHdCQUFBO0VDTk47QUFDRjtBRFNJO0VBQ0UsZUFBQTtBQ1BOO0FEVUk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQ0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBUUEsZ0RBQUE7RUFDQSx3Q0FBQTtBQ2ZOO0FEUU07RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDTlI7QURXTTtFQUNFO0lBQ0Usa0NBQUE7WUFBQSwwQkFBQTtFQ1RSO0VEV007SUFDRSxnQ0FBQTtZQUFBLHdCQUFBO0VDVFI7QUFDRjtBREdNO0VBQ0U7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0VDVFI7RURXTTtJQUNFLGdDQUFBO1lBQUEsd0JBQUE7RUNUUjtBQUNGO0FEYUk7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDWE47QURjUTtFQUNFLGlCQUFBO0FDWlY7QURpQkk7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ2ZOO0FEaUJNO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ2ZSO0FEbUJJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ2pCTjtBRG9CSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtBQ2xCTjtBRHFCSTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLDREQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0NBQUE7VUFBQSx1Q0FBQTtFQUNBLGtCQUFBO0FDbkJOO0FEc0JJO0VBQ0UsK1BBQUE7RUFnQkEsa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSw0REFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7QUNuQ047QURzQ0k7RUFFRSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEsY0FBQTtFQUNBLGlCQUFBO0FDdENOO0FEMENJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsNEVBQUE7QUN4Q047QUQwQ007RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsWUFBQTtBQ3hDUjtBRDBDUTtFQUNFLG1DQUFBO0FDeENWO0FENENNO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQzFDUjtBRDRDUTtFQUNFLGVBQUE7QUMxQ1Y7QUQ4Q007RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUM1Q1I7QURrRFE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDaERWO0FEb0RROztFQUVFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO1VBQUEscUJBQUE7QUNsRFY7QURxRFE7O0VBRUUsbUJBQUE7VUFBQSxZQUFBO0FDbkRWO0FEc0RROztFQUVFLG1CQUFBO1VBQUEsYUFBQTtBQ3BEVjtBRHVEUTs7RUFFRSxtQkFBQTtVQUFBLGFBQUE7QUNyRFY7QUR3RFE7O0VBRUUsd0JBQUE7VUFBQSx1QkFBQTtFQUNBLG1CQUFBO1VBQUEsYUFBQTtBQ3REVjtBRHlEUTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUN2RFY7QUQwRFE7RUFDRSxpQkFBQTtBQ3hEVjtBRDJEUTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQ3pEVjtBRDREUTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFFQSw0Q0FBQTtFQUNBLG9DQUFBO0FDM0RWO0FENERVO0VBQ0U7SUFDRSxVQUFBO0VDMURaO0VENERVO0lBQ0UsVUFBQTtFQzFEWjtBQUNGO0FEb0RVO0VBQ0U7SUFDRSxVQUFBO0VDMURaO0VENERVO0lBQ0UsVUFBQTtFQzFEWjtBQUNGO0FEOERRO0VBQ0UsZUFBQTtBQzVEVjtBRCtEUTs7RUFFRSxpQkFBQTtFQUNBLFdBQUE7QUM3RFY7QURrRUk7RUFDRSxlQUFBO0FDaEVOO0FEbUVJO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDakVOO0FEb0VJO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDbEVOO0FEcUVJO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDbkVOO0FEc0VJO0VBQ0UsYUFBQTtBQ3BFTjtBRHVFSTtFQUNFLFVBQUE7QUNyRU47QUR1RU07RUFDRSxXQUFBO0FDckVSO0FEeUVJO0VBQ0UsY0FBQTtBQ3ZFTjtBRDBFSTtFQUNFLFdBQUE7QUN4RU47QUQyRUk7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUN6RU47QUQ4RUE7RUFFSTtJQUNFLDRCQUFBO0lBQ0EsWUFBQTtFQzVFSjtFRDhFRTs7SUFFRSxrQkFBQTtFQzVFSjtFRCtFRTtJQUNFLFlBQUE7RUM3RUo7RURpRlE7SUFDRSwwQkFBQTtFQy9FVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9hZHdvcmRzLWFjY291bnQtbGlzdC9hZHdvcmRzLWFjY291bnQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9iZzMuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcblxuICAudGl0bGUxIHtcbiAgICAvL3BhZGRpbmc6IDg2cHggMjBweCAxNnB4IDBweDtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmI1O1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNmZmZmYjUgMCUsICMyNDdiYTAgNzQlKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiAzMHB4IDMwcHggMzBweCAzMHB4O1xuICAgIGhlaWdodDogMjV2aDtcblxuICAgIC50aXRsZTEtbWFpbiB7XG4gICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICB9XG5cbiAgICBtYXQtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuXG4gICAgLmFkZC1hY2NvdW50IHtcbiAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAuYWRkLWFjY291bnQtYnV0dG9uIHtcbiAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIG1heC13aWR0aDogMjUwcHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC50aXRsZTIge1xuICAgIHBhZGRpbmc6IDkwcHggMjBweCAyNHB4IDI1cHg7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9hZHdvcmQtYmczLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcbiAgfVxuXG4gIC5pbm5lciB7XG4gICAgbWFyZ2luOiAzMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0xNXZoO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmb3JtQW5pIDAuNHMgZWFzZS1vdXQ7XG4gICAgYW5pbWF0aW9uOiBmb3JtQW5pIDAuNHMgZWFzZS1vdXQ7XG4gICAgQGtleWZyYW1lcyBmb3JtQW5pIHtcbiAgICAgIGZyb20ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpO1xuICAgICAgfVxuICAgICAgdG8ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWF0LWljb24ge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cblxuICAgIC53YXJuaW5nIHtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiBsaWdodHllbGxvdztcbiAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgZGFya29yYW5nZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0b3A6IC01MHZoO1xuICAgICAgd2lkdGg6IDYwJTtcbiAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICBtYXQtaWNvbiB7XG4gICAgICAgIGNvbG9yOiBvcmFuZ2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogbm90aWZpY2F0aW9uQW5pIDAuMnMgZWFzZS1vdXQ7XG4gICAgICBhbmltYXRpb246IG5vdGlmaWNhdGlvbkFuaSAwLjJzIGVhc2Utb3V0O1xuICAgICAgQGtleWZyYW1lcyBub3RpZmljYXRpb25Bbmkge1xuICAgICAgICBmcm9tIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXZoKTtcbiAgICAgICAgfVxuICAgICAgICB0byB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLndlYnNpdGUtbGlzdCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1heC1oZWlnaHQ6IDEwNXB4O1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBtYXJnaW46IDVweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgICBwYWRkaW5nOiA1cHg7XG5cbiAgICAgIGxpIHtcbiAgICAgICAgYSB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYWRkLWRvbWFpbi1idXR0b24ge1xuICAgICAgd2lkdGg6IDQwJTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG5cbiAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogLTVweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2F1dGlvbiB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogZ3JheTtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgfVxuXG4gICAgLnZpcC1pY29uIHtcbiAgICAgIGhlaWdodDogMThweDtcbiAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMXB4IDFweCBibGFjayk7XG4gICAgfVxuXG4gICAgLmZyZWUtbGFiZWwge1xuICAgICAgYmFja2dyb3VuZDogIzQ0YjU0MztcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHBhZGRpbmc6IDJweCA0cHggMnB4IDRweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMXB4IDFweCBzaWx2ZXIpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIH1cblxuICAgIC52aXAtbGFiZWwge1xuICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxuICAgICAgICAgIGVsbGlwc2UgZmFydGhlc3QtY29ybmVyIGF0IHJpZ2h0IGJvdHRvbSxcbiAgICAgICAgICAjZmVkYjM3IDAlLFxuICAgICAgICAgICNmZGI5MzEgOCUsXG4gICAgICAgICAgIzlmNzkyOCAzMCUsXG4gICAgICAgICAgIzhhNmUyZiA0MCUsXG4gICAgICAgICAgdHJhbnNwYXJlbnQgODAlXG4gICAgICAgICksXG4gICAgICAgIHJhZGlhbC1ncmFkaWVudChcbiAgICAgICAgICBlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciBhdCBsZWZ0IHRvcCxcbiAgICAgICAgICAjZmZmZmZmIDAlLFxuICAgICAgICAgICNmZmZmYWMgOCUsXG4gICAgICAgICAgI2QxYjQ2NCAyNSUsXG4gICAgICAgICAgIzVkNGExZiA2Mi41JSxcbiAgICAgICAgICAjNWQ0YTFmIDEwMCVcbiAgICAgICAgKTtcbiAgICAgIGNvbG9yOiBsaWdodHllbGxvdztcbiAgICAgIHBhZGRpbmc6IDEuNXB4IDQuNXB4IDEuNXB4IDQuNXB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxcHggMXB4IGJsYWNrKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgfVxuXG4gICAgLnZpcC1leHBpcmF0aW9uIHtcbiAgICAgIC8vZm9udC1zaXplOiAxMnB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgIC8vYmFja2dyb3VuZDogcmdiYSgzLCAxNTUsIDIyOSwgMC4wNSk7XG4gICAgICBjb2xvcjogIzQwYTVlYztcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgLy9wYWRkaW5nOiAzcHggNHB4IDNweCA0cHg7XG4gICAgfVxuXG4gICAgLnRhYmxlLWNvbnRhaW5lciB7XG4gICAgICBtaW4taGVpZ2h0OiA2MHZoO1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjZWVlO1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xuXG4gICAgICBsaSB7XG4gICAgICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgICAgIGhlaWdodDogMzBweDtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDMsIDE1NSwgMjI5LCAwLjA1KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuYWRzLWFjY291bnQge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIHdpZHRoOiAxNDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAuYWRzLWFjY291bnQtaWQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtYXQtdGFibGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcblxuICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgLy9maWx0ZXI6IGRyb3Atc2hhZG93KDAuNXB4IDFweCAxcHggc2lsdmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5nZ0Fkcy1pY29uIHtcbiAgICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgLy9maWx0ZXI6IGRyb3Atc2hhZG93KDAuMnB4IDAuN3B4IDAuN3B4IHJnYmEoMCwgMCwgMCwgMC40KSk7XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtaGVhZGVyLWNlbGwsXG4gICAgICAgIG1hdC1jZWxsIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMSksXG4gICAgICAgIG1hdC1jZWxsOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgZmxleDogMCAwIDglO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgyKSxcbiAgICAgICAgbWF0LWNlbGw6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICBmbGV4OiAwIDAgMTQlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgzKSxcbiAgICAgICAgbWF0LWNlbGw6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgICBmbGV4OiAwIDAgMjQlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCg0KSxcbiAgICAgICAgbWF0LWNlbGw6bnRoLWNoaWxkKDQpIHtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4OiAwIDAgMTIlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWNlbGw6bnRoLWNoaWxkKDUpIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoNSkge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWhlYWRlci1jZWxsIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtcm93IHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHJvd0FwcGVhcmFuY2UgMC40cyBsaW5lYXI7XG4gICAgICAgICAgYW5pbWF0aW9uOiByb3dBcHBlYXJhbmNlIDAuNHMgbGluZWFyO1xuICAgICAgICAgIEBrZXlmcmFtZXMgcm93QXBwZWFyYW5jZSB7XG4gICAgICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtY2VsbCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LXJvdyxcbiAgICAgICAgbWF0LWhlYWRlci1yb3cge1xuICAgICAgICAgIG1pbi13aWR0aDogMTAwMHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmluZm8tYnV0dG9uIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAudmlwLXNlcnZpY2Uge1xuICAgICAgY29sb3I6ICM0MGE1ZWM7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAuZnJlZS1zZXJ2aWNlIHtcbiAgICAgIGNvbG9yOiBjb3JhbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5idXR0b24tYXJlYSB7XG4gICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAudHJhY2tpbmcge1xuICAgICAgY29sb3I6IG9yYW5nZTtcbiAgICB9XG5cbiAgICAudHJhY2tpbmctYnV0dG9uIHtcbiAgICAgIGNvbG9yOiByZWQ7XG5cbiAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubm8tdHJhY2tpbmcge1xuICAgICAgY29sb3I6ICM0MGE1ZWM7XG4gICAgfVxuXG4gICAgLmNsZWFyIHtcbiAgICAgIGNsZWFyOiBib3RoO1xuICAgIH1cblxuICAgIC5mb290ZXIge1xuICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIC50aXRsZTEge1xuICAgICAgcGFkZGluZzogMzBweCAyMHB4IDIwdmggMjBweDtcbiAgICAgIGhlaWdodDogNDB2aDtcbiAgICB9XG4gICAgLnRpdGxlMSxcbiAgICAudGl0bGUyIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuaW5uZXIge1xuICAgICAgbWFyZ2luOiAxNXB4O1xuXG4gICAgICAudGFibGUtY29udGFpbmVyIHtcbiAgICAgICAgLmFkcy1hY2NvdW50IHtcbiAgICAgICAgICAuYWRzLWFjY291bnQtaWQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvYmczLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG4uY29udGFpbmVyIC50aXRsZTEge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMzBweCAzMHB4IDMwcHggMzBweDtcbiAgaGVpZ2h0OiAyNXZoO1xufVxuLmNvbnRhaW5lciAudGl0bGUxIC50aXRsZTEtbWFpbiB7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuLmNvbnRhaW5lciAudGl0bGUxIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLmNvbnRhaW5lciAudGl0bGUxIC5hZGQtYWNjb3VudCB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG4uY29udGFpbmVyIC50aXRsZTEgLmFkZC1hY2NvdW50IC5hZGQtYWNjb3VudC1idXR0b24ge1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgbWF4LXdpZHRoOiAyNTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uY29udGFpbmVyIC50aXRsZTIge1xuICBwYWRkaW5nOiA5MHB4IDIwcHggMjRweCAyNXB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL2Fkd29yZC1iZzMuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XG59XG4uY29udGFpbmVyIC5pbm5lciB7XG4gIG1hcmdpbjogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xNXZoO1xuICAtd2Via2l0LWFuaW1hdGlvbjogZm9ybUFuaSAwLjRzIGVhc2Utb3V0O1xuICBhbmltYXRpb246IGZvcm1BbmkgMC40cyBlYXNlLW91dDtcbn1cbkBrZXlmcmFtZXMgZm9ybUFuaSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDB2aCk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuLmNvbnRhaW5lciAuaW5uZXIgbWF0LWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAud2FybmluZyB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6IGxpZ2h0eWVsbG93O1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIGRhcmtvcmFuZ2U7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNTB2aDtcbiAgd2lkdGg6IDYwJTtcbiAgZGlzcGxheTogdGFibGU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBub3RpZmljYXRpb25BbmkgMC4ycyBlYXNlLW91dDtcbiAgYW5pbWF0aW9uOiBub3RpZmljYXRpb25BbmkgMC4ycyBlYXNlLW91dDtcbn1cbi5jb250YWluZXIgLmlubmVyIC53YXJuaW5nIG1hdC1pY29uIHtcbiAgY29sb3I6IG9yYW5nZTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5Aa2V5ZnJhbWVzIG5vdGlmaWNhdGlvbkFuaSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1dmgpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbi5jb250YWluZXIgLmlubmVyIC53ZWJzaXRlLWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTA1cHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICBwYWRkaW5nOiA1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAud2Vic2l0ZS1saXN0IGxpIGEge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZGQtZG9tYWluLWJ1dHRvbiB7XG4gIHdpZHRoOiA0MCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZGQtZG9tYWluLWJ1dHRvbiBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tcmlnaHQ6IC01cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuY2F1dGlvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAudmlwLWljb24ge1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiAxOHB4O1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxcHggMXB4IGJsYWNrKTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mcmVlLWxhYmVsIHtcbiAgYmFja2dyb3VuZDogIzQ0YjU0MztcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAycHggNHB4IDJweCA0cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDFweCAxcHggc2lsdmVyKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnZpcC1sYWJlbCB7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciBhdCByaWdodCBib3R0b20sICNmZWRiMzcgMCUsICNmZGI5MzEgOCUsICM5Zjc5MjggMzAlLCAjOGE2ZTJmIDQwJSwgdHJhbnNwYXJlbnQgODAlKSwgcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgZmFydGhlc3QtY29ybmVyIGF0IGxlZnQgdG9wLCAjZmZmZmZmIDAlLCAjZmZmZmFjIDglLCAjZDFiNDY0IDI1JSwgIzVkNGExZiA2Mi41JSwgIzVkNGExZiAxMDAlKTtcbiAgY29sb3I6IGxpZ2h0eWVsbG93O1xuICBwYWRkaW5nOiAxLjVweCA0LjVweCAxLjVweCA0LjVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMXB4IDFweCBibGFjayk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cbi5jb250YWluZXIgLmlubmVyIC52aXAtZXhwaXJhdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgY29sb3I6ICM0MGE1ZWM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDYwdmg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjZWVlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBsaSB7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGhlaWdodDogMzBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDMsIDE1NSwgMjI5LCAwLjA1KTtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgLmFkcy1hY2NvdW50IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIC5hZHMtYWNjb3VudCAuYWRzLWFjY291bnQtaWQge1xuICBmb250LXNpemU6IDE1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtdGFibGUgLmdnQWRzLWljb24ge1xuICBoZWlnaHQ6IDEycHg7XG4gIHdpZHRoOiAxMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LXRhYmxlIG1hdC1oZWFkZXItY2VsbCxcbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LXRhYmxlIG1hdC1jZWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtdGFibGUgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgxKSxcbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LXRhYmxlIG1hdC1jZWxsOm50aC1jaGlsZCgxKSB7XG4gIGZsZXg6IDAgMCA4JTtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LXRhYmxlIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMiksXG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC10YWJsZSBtYXQtY2VsbDpudGgtY2hpbGQoMikge1xuICBmbGV4OiAwIDAgMTQlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtdGFibGUgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgzKSxcbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LXRhYmxlIG1hdC1jZWxsOm50aC1jaGlsZCgzKSB7XG4gIGZsZXg6IDAgMCAyNCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC10YWJsZSBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDQpLFxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtdGFibGUgbWF0LWNlbGw6bnRoLWNoaWxkKDQpIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXg6IDAgMCAxMiU7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC10YWJsZSBtYXQtY2VsbDpudGgtY2hpbGQoNSkge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC10YWJsZSBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDUpIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC10YWJsZSBtYXQtaGVhZGVyLWNlbGwge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LXRhYmxlIG1hdC1yb3cge1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICAtd2Via2l0LWFuaW1hdGlvbjogcm93QXBwZWFyYW5jZSAwLjRzIGxpbmVhcjtcbiAgYW5pbWF0aW9uOiByb3dBcHBlYXJhbmNlIDAuNHMgbGluZWFyO1xufVxuQGtleWZyYW1lcyByb3dBcHBlYXJhbmNlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtdGFibGUgbWF0LWNlbGwge1xuICBmb250LXNpemU6IDEycHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC10YWJsZSBtYXQtcm93LFxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtdGFibGUgbWF0LWhlYWRlci1yb3cge1xuICBtaW4td2lkdGg6IDEwMDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuaW5mby1idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGFpbmVyIC5pbm5lciAudmlwLXNlcnZpY2Uge1xuICBjb2xvcjogIzQwYTVlYztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZnJlZS1zZXJ2aWNlIHtcbiAgY29sb3I6IGNvcmFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5idXR0b24tYXJlYSB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLmlubmVyIC50cmFja2luZyB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG4uY29udGFpbmVyIC5pbm5lciAudHJhY2tpbmctYnV0dG9uIHtcbiAgY29sb3I6IHJlZDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50cmFja2luZy1idXR0b246ZGlzYWJsZWQge1xuICBjb2xvcjogZ3JheTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5uby10cmFja2luZyB7XG4gIGNvbG9yOiAjNDBhNWVjO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNsZWFyIHtcbiAgY2xlYXI6IGJvdGg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZm9vdGVyIHtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIC50aXRsZTEge1xuICAgIHBhZGRpbmc6IDMwcHggMjBweCAyMHZoIDIwcHg7XG4gICAgaGVpZ2h0OiA0MHZoO1xuICB9XG4gIC5jb250YWluZXIgLnRpdGxlMSxcbi5jb250YWluZXIgLnRpdGxlMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIHtcbiAgICBtYXJnaW46IDE1cHg7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciAuYWRzLWFjY291bnQgLmFkcy1hY2NvdW50LWlkIHtcbiAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/main/adwords-account-list/adwords-account-list.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/main/adwords-account-list/adwords-account-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AdwordsAccountListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdwordsAccountListComponent", function() { return AdwordsAccountListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@fuse/components/progress-bar/progress-bar.service */ "./src/@fuse/components/progress-bar/progress-bar.service.ts");
/* harmony import */ var _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/components/base/page-base.component */ "./src/app/shared/components/base/page-base.component.ts");
/* harmony import */ var _adwords_account_list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adwords-account-list.service */ "./src/app/main/adwords-account-list/adwords-account-list.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fuse_components_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fuse/components/navigation/navigation.service */ "./src/@fuse/components/navigation/navigation.service.ts");
/* harmony import */ var app_shared_pipes_ads_account_id_ads_account_id_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/pipes/ads-account-id/ads-account-id.pipe */ "./src/app/shared/pipes/ads-account-id/ads-account-id.pipe.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var app_shared_constants_generals__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/shared/constants/generals */ "./src/app/shared/constants/generals.ts");












let AdwordsAccountListComponent = class AdwordsAccountListComponent extends app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_5__["PageBaseComponent"] {
    constructor(_fuseProgressiveBarService, _dialogService, _adwordsAccountListService, router, _sessionService, _fuseNavigationService) {
        super();
        this._fuseProgressiveBarService = _fuseProgressiveBarService;
        this._dialogService = _dialogService;
        this._adwordsAccountListService = _adwordsAccountListService;
        this.router = router;
        this._sessionService = _sessionService;
        this._fuseNavigationService = _fuseNavigationService;
        this.displayedColumns = ['task', 'date', 'adwords', 'accepted', 'website'];
        this.accounts = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"]();
        this.accountConnectTypes = [];
        this.adsAccountIdPipe = new app_shared_pipes_ads_account_id_ads_account_id_pipe__WEBPACK_IMPORTED_MODULE_9__["AdsAccountIdPipe"]();
    }
    ngOnInit() {
        this._fuseProgressiveBarService.show();
        this.isProcessing = true;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](this.accounts);
        this.getUser();
    }
    getUser() {
        const sub = this._sessionService.getUser()
            .subscribe(user => {
            if (user) {
                this.user = JSON.parse(this._sessionService.user);
                this._sessionService.notifyListAccountsChanged();
                this.getAccounts();
            }
        });
        this.subscriptions.push(sub);
    }
    openRemoveAccountConfirmDialog(accountId) {
        const openConfirmDialogSub = this._dialogService._openConfirmDialog('Ngắt kết nối tài khoản Google Ads này?')
            .subscribe((isAccepted) => {
            if (isAccepted) {
                this.removeAccount(accountId);
            }
        });
        this.subscriptions.push(openConfirmDialogSub);
    }
    removeAccount(accountId) {
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        const removeAccountSub = this._adwordsAccountListService.removeAccount(accountId)
            .subscribe((res) => {
            this._sessionService.notifyListAccountsChanged({
                status: 'SUCCESS',
                data: {
                    messages: ['Ngắt kết nối tài khoản Google Ads thành công']
                }
            });
            setTimeout(() => {
                this.isProcessing = false;
            }, 2000);
        }, (error) => {
            this._fuseProgressiveBarService.hide();
            this._dialogService._openErrorDialog(error.error);
            this.isProcessing = false;
        });
        this.subscriptions.push(removeAccountSub);
    }
    openRemoveWebsiteConfirmDialog(websiteId) {
        const confirmDialogSub = this._dialogService._openConfirmDialog('Xóa website này khỏi tài khoản Google Ads?')
            .subscribe((isAccepted) => {
            if (isAccepted) {
                this.removeWebiste(websiteId);
            }
        });
        this.subscriptions.push(confirmDialogSub);
    }
    removeWebiste(websiteId) {
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        const sub = this._adwordsAccountListService.removeWebsite(websiteId)
            .subscribe((res) => {
            this._sessionService.notifyListAccountsChanged({
                status: 'SUCCESS',
                data: res
            });
            setTimeout(() => {
                this.isProcessing = false;
            }, 2000);
        }, (error) => {
            if (error.error.messages) {
                this._dialogService._openErrorDialog(error.error);
            }
            this._fuseProgressiveBarService.hide();
            this.isProcessing = false;
        });
        this.subscriptions.push(sub);
    }
    getAccounts() {
        this._fuseProgressiveBarService.show();
        const sub = this._sessionService.getListAccounts()
            .subscribe(listAccounts => {
            if (listAccounts) {
                this.isProcessing = false;
                this._fuseProgressiveBarService.hide();
                this.accounts = listAccounts;
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](this.accounts);
            }
        });
        this.subscriptions.push(sub);
    }
    navigateToSpamClickReport(accountId, adsId) {
        this._sessionService.setActiveGoogleAdsAccount(accountId, this.adsAccountIdPipe.transform(adsId));
        this._fuseNavigationService.reloadNavigation();
        this.router.navigateByUrl('/bao-cao/click-ao');
    }
    navigateToWebsiteManagement(accountId, campaignNumber) {
        this.router.navigateByUrl(`/quan-ly-website/${accountId}`);
    }
    checkAccountAcceptance(adsId, isConnected, connectType) {
        if (connectType === app_shared_constants_generals__WEBPACK_IMPORTED_MODULE_11__["Generals"].AccountConnectionType.byGoogleAdsId) {
            this.isProcessing = true;
            this._fuseProgressiveBarService.show();
            const sub = this._adwordsAccountListService.checkAccountAcceptance({ adWordId: adsId })
                .subscribe(res => {
                if (this.adsAccountIdPipe.transform(adsId) === this._sessionService.activeAdsAccountId)
                    this._sessionService.setAccountAcceptance(res.data.isConnected);
                this._sessionService.notifyListAccountsChanged();
                this._fuseProgressiveBarService.hide();
                this.isProcessing = false;
            }, (error) => {
                this._fuseProgressiveBarService.hide();
                this._dialogService._openErrorDialog(error.error);
                this.isProcessing = false;
            });
            this.subscriptions.push(sub);
        }
        else {
            this._fuseProgressiveBarService.show();
            setTimeout(() => {
                this._fuseProgressiveBarService.hide();
            }, 1000);
        }
    }
};
AdwordsAccountListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adwords-account-list',
        template: __webpack_require__(/*! raw-loader!./adwords-account-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/adwords-account-list/adwords-account-list.component.html"),
        styles: [__webpack_require__(/*! ./adwords-account-list.component.scss */ "./src/app/main/adwords-account-list/adwords-account-list.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_2__["FuseProgressBarService"],
        _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"],
        _adwords_account_list_service__WEBPACK_IMPORTED_MODULE_6__["AdwordsAccountListService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"],
        _fuse_components_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_8__["FuseNavigationService"]])
], AdwordsAccountListComponent);



/***/ }),

/***/ "./src/app/main/adwords-account-list/adwords-account-list.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main/adwords-account-list/adwords-account-list.module.ts ***!
  \**************************************************************************/
/*! exports provided: AdwordsAccountListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdwordsAccountListModule", function() { return AdwordsAccountListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _adwords_account_list_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adwords-account-list-routing.module */ "./src/app/main/adwords-account-list/adwords-account-list-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _shared_components_input_text_input_text_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/components/input-text/input-text.module */ "./src/app/shared/components/input-text/input-text.module.ts");
/* harmony import */ var _shared_components_input_textarea_input_textarea_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/components/input-textarea/input-textarea.module */ "./src/app/shared/components/input-textarea/input-textarea.module.ts");
/* harmony import */ var _shared_components_select_text_select_text_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/components/select-text/select-text.module */ "./src/app/shared/components/select-text/select-text.module.ts");
/* harmony import */ var _shared_components_checkbox_group_checkbox_group_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/components/checkbox-group/checkbox-group.module */ "./src/app/shared/components/checkbox-group/checkbox-group.module.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _adwords_account_list_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./adwords-account-list.service */ "./src/app/main/adwords-account-list/adwords-account-list.service.ts");
/* harmony import */ var app_shared_pipes_ads_account_id_ads_account_id_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/shared/pipes/ads-account-id/ads-account-id.module */ "./src/app/shared/pipes/ads-account-id/ads-account-id.module.ts");
/* harmony import */ var _adwords_account_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./adwords-account-list.component */ "./src/app/main/adwords-account-list/adwords-account-list.component.ts");



















let AdwordsAccountListModule = class AdwordsAccountListModule {
};
AdwordsAccountListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_adwords_account_list_component__WEBPACK_IMPORTED_MODULE_18__["AdwordsAccountListComponent"]],
        imports: [
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
            _shared_components_checkbox_group_checkbox_group_module__WEBPACK_IMPORTED_MODULE_14__["CheckboxGroupModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _shared_components_input_text_input_text_module__WEBPACK_IMPORTED_MODULE_11__["InputTextModule"],
            _shared_components_input_textarea_input_textarea_module__WEBPACK_IMPORTED_MODULE_12__["InputTextareaModule"],
            _shared_components_select_text_select_text_module__WEBPACK_IMPORTED_MODULE_13__["SelectTextModule"],
            _fuse_shared_module__WEBPACK_IMPORTED_MODULE_15__["FuseSharedModule"],
            app_shared_pipes_ads_account_id_ads_account_id_module__WEBPACK_IMPORTED_MODULE_17__["AdsAccountIdModule"],
            _adwords_account_list_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdwordsAccountListRoutingModule"]
        ],
        providers: [_adwords_account_list_service__WEBPACK_IMPORTED_MODULE_16__["AdwordsAccountListService"]]
    })
], AdwordsAccountListModule);



/***/ }),

/***/ "./src/app/main/adwords-account-list/adwords-account-list.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/main/adwords-account-list/adwords-account-list.service.ts ***!
  \***************************************************************************/
/*! exports provided: AdwordsAccountListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdwordsAccountListService", function() { return AdwordsAccountListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/constants/api.constant */ "./src/app/shared/constants/api.constant.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let AdwordsAccountListService = class AdwordsAccountListService {
    constructor(_http) {
        this._http = _http;
    }
    getAccounts() {
        return this._http.get(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.getAccounts);
    }
    removeAccount(accountId) {
        const url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.removeAccount.replace('{account_id}', accountId);
        return this._http.delete(url);
    }
    getWebsites(accountId) {
        const url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].Website.getWebsites.replace('{accountId}', accountId);
        return this._http.get(url);
    }
    removeWebsite(websiteId) {
        const url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].Website.removeWebsite.replace('{website_id}', websiteId);
        return this._http.delete(url);
    }
    checkAccountAcceptance(params) {
        return this._http.post(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.checkAccountAcceptance, params);
    }
};
AdwordsAccountListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], AdwordsAccountListService);



/***/ })

}]);
//# sourceMappingURL=main-adwords-account-list-adwords-account-list-module-es2015.js.map