(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-adwords-account-list-adwords-account-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/adwords-account-list/adwords-account-list.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/adwords-account-list/adwords-account-list.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"title1\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"15px\" fxLayoutAlign=\"space-around\" fxLayoutAlign.xs=\"center center\">\n    <span fxFlex=\"70\" class=\"title1-main\">TÀI KHOẢN GOOGLE ADS & WEBSITE</span>\n    <button (click)=\"router.navigateByUrl('/them-tai-khoan-moi')\" mat-raised-button class=\"add-account-button\">\n      <mat-icon>library_add</mat-icon> Kết nối tài khoản Google Ads\n    </button>\n  </div>\n\n  <div class=\"inner\">\n\n    <div class=\"table-container\">\n      <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n        <ng-container matColumnDef=\"task\">\n          <mat-header-cell *matHeaderCellDef> Tác vụ </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            <button mat-icon-button color=\"accent\" matTooltip=\"Cập nhật tài khoản\"\n              (click)=\"checkAccountAcceptance(element.adsId, element.isConnected, element.connectType)\"\n              [disabled]=\"isProcessing\">\n              <mat-icon>sync</mat-icon>\n            </button>\n          </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"date\">\n          <mat-header-cell *matHeaderCellDef> Ngày kết nối </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.createdAt | date: 'HH:mm dd/MM/yyyy'}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"adwords\">\n          <mat-header-cell *matHeaderCellDef>\n            <img src=\"../../../assets/icons/gg-ads.png\" alt=\"\" class=\"ggAds-icon\">\n            Tài khoản</mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            <div fxLayout=\"row\">\n              <p style=\"color: #4bb543\" *ngIf=\"element.isConnected && element.websites.length > 0\" fxFlex=\"75\" fxFlex.xs=\"55\">\n                <span class=\"ads-account\" matTooltip=\"Tài khoản đã được chấp nhận quyền quản lý hệ thống.\">\n                  <span class=\"ads-account-id\">{{element.adsId | adsAccountId}}</span>\n                  <span class=\"ads-account-name\">{{element.adsName}}</span>\n                </span>\n              </p>\n              <p style=\"color: orange\" *ngIf=\"element.isConnected && element.websites.length === 0\" fxFlex=\"75\" fxFlex.xs=\"55\">\n                <span class=\"ads-account\" matTooltip=\"Tài khoản chưa có website nào.\">\n                  <span class=\"ads-account-id\">{{element.adsId | adsAccountId}}</span>\n                  <span class=\"ads-account-name\">{{element.adsName}}</span>\n                </span>\n              </p>\n              <p style=\"color: silver\" *ngIf=\"!element.isConnected\" fxFlex=\"75\" fxFlex.xs=\"55\">\n                <span class=\"ads-account\" matTooltip=\"Tài khoản chưa được chấp nhận quyền quản lý hệ thống.\">\n                  <span class=\"ads-account-id\">{{element.adsId | adsAccountId}}</span>\n                  <span class=\"ads-account-name\">{{element.adsName}}</span>\n                </span>\n              </p>\n              <div fxLayout=\"row\" fxFlex=\"25\" fxLayoutAlign=\"center center\">\n                <button mat-icon-button color=\"accent\" matTooltip=\"Xem báo cáo click ảo\"\n                  (click)=\"navigateToSpamClickReport(element.accountId, element.adsId)\">\n                  <mat-icon>data_usage</mat-icon>\n                </button>\n                <a [routerLink]=\"['/gan-tracking/website', element.accountId]\" mat-icon-button color=\"accent\"\n                  matTooltip=\"Gắn mã tracking cho các website\" class=\"tracking-button\">\n                  <mat-icon>code</mat-icon>\n                </a>\n                <button mat-icon-button color=\"accent\" matTooltip=\"Ngắt kết nối tài khoản\"\n                  (click)=\"openRemoveAccountConfirmDialog(element.accountId)\" [disabled]=\"isProcessing\">\n                  <mat-icon style=\"color: silver\">close</mat-icon>\n                </button>\n              </div>\n            </div>\n          </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"accepted\">\n          <mat-header-cell *matHeaderCellDef> Quyền quản lý </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            <button mat-icon-button color=\"accent\" matTooltip=\"Đã được chấp nhận\"\n              *ngIf=\"element.connectType !== 'GOOGLE_ADS_ID' || element.isConnected === true\">\n              <mat-icon style=\"color: #4bb543\">check_circle</mat-icon>\n            </button>\n            <button mat-icon-button color=\"accent\" matTooltip=\"Chưa được chấp nhận\"\n              *ngIf=\"element.connectType === 'GOOGLE_ADS_ID' && element.isConnected === false\">\n              <mat-icon style=\"color: crimson\">highlight_off</mat-icon>\n            </button>\n          </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"website\">\n          <mat-header-cell *matHeaderCellDef> Website của tài khoản </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\" fxLayout=\"column\" fxLayoutAlign=\"start\">\n            <ul class=\"website-list\" *ngIf=\"element.websites.length > 0\">\n              <li *ngFor=\"let website of element.websites, let i = index\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                <div fxFlex=\"90\">\n                  <a href=\"{{website.domain}}\" target=\"_blank\">\n                    {{website.domain}}</a>\n                </div>\n                <div fxFlex=\"10\">\n                  <button (click)=\"openRemoveWebsiteConfirmDialog(website.code)\" mat-icon-button color=\"accent\"\n                    matTooltip=\"Xóa website\" [disabled]=\"isProcessing\">\n                    <mat-icon style=\"color: silver; font-size: 20px\">delete</mat-icon>\n                  </button>\n                </div>\n              </li>\n            </ul>\n            <button (click)=\"navigateToWebsiteManagement(element.accountId, element.campaignNumber)\" mat-button\n              class=\"add-domain-button\" [disabled]=\"isProcessing\" color=\"accent\"\n              *ngIf=\"element.websites.length < element.limitWebsite\">\n              <mat-icon>add</mat-icon>Thêm website\n            </button>\n            <span *ngIf=\"element.websites.length >= element.limitWebsite\">\n              <button mat-button class=\"add-domain-button\" color=\"accent\" disabled>\n                <mat-icon>add</mat-icon>Thêm website\n              </button>\n              <span class=\"caution\"><span style=\"color: red\">*</span><b>Chú ý:</b> Số lượng website của tài khoản này\n                đã đạt tối đa. Vui lòng nâng cấp thêm <a routerLink=\"/nang-cap-vip\">tại đây</a></span>\n            </span>\n          </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      </mat-table>\n    </div>\n\n    <div *ngIf=\"dataSource.filteredData.length === 0 && isProcessing === false\" class=\"warning\">\n      <span>Bạn chưa kết nối tài khoản Google Ads nào. Vui lòng thực hiện kết nối <a\n          routerLink=\"/them-tai-khoan-moi\">tại đây</a></span>\n    </div>\n  </div>\n\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adwords_account_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adwords-account-list.component */ "./src/app/main/adwords-account-list/adwords-account-list.component.ts");




var AdwordsAccountListRoutingModule = /** @class */ (function () {
    function AdwordsAccountListRoutingModule() {
    }
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
    return AdwordsAccountListRoutingModule;
}());



/***/ }),

/***/ "./src/app/main/adwords-account-list/adwords-account-list.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/main/adwords-account-list/adwords-account-list.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  background: url('gg-material_1.png');\n  background-size: 100% 100%;\n}\n.container .title1 {\n  color: white;\n  text-shadow: 1px 1px 2px black;\n  font-size: 16px;\n  font-weight: bold;\n  padding-top: 30px;\n  height: 25vh;\n}\n.container .title1 .title1-main {\n  padding-top: 15px;\n  padding-left: 20px;\n}\n.container .title1 mat-icon {\n  font-size: 18px;\n}\n.container .title1 .add-account-button {\n  text-shadow: none;\n  max-height: 40px;\n  max-width: 250px;\n  color: white;\n  background: rgba(255, 255, 255, 0.2);\n  box-shadow: none;\n}\n.container .title2 {\n  padding: 90px 20px 24px 25px;\n  background: url('adword-bg3.jpg');\n  background-size: 100% 100%;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n  text-shadow: 1px 1px 2px black;\n}\n.container .inner {\n  margin: 30px;\n  position: relative;\n  top: -15vh;\n  -webkit-animation: formAni 0.4s ease-out;\n}\n@-webkit-keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n.container .inner mat-icon {\n  font-size: 20px;\n}\n.container .inner .warning {\n  padding: 20px;\n  background: lightyellow;\n  border-left: 4px solid darkorange;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  border-radius: 5px;\n  position: relative;\n  top: -50vh;\n  width: 60%;\n  display: table;\n  margin: 0 auto;\n  margin-top: 30px;\n  text-align: center;\n  -webkit-animation: notificationAni 0.2s ease-out;\n}\n.container .inner .warning mat-icon {\n  color: orange;\n  font-size: 24px;\n  margin-right: 10px;\n}\n@-webkit-keyframes notificationAni {\n  from {\n    -webkit-transform: translateY(5vh);\n            transform: translateY(5vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes notificationAni {\n  from {\n    -webkit-transform: translateY(5vh);\n            transform: translateY(5vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n.container .inner .website-list {\n  width: 100%;\n  max-height: 105px;\n  overflow: auto;\n  border-radius: 5px;\n  margin: 5px;\n  border: 1px solid #eee;\n  padding: 5px;\n}\n.container .inner .website-list li a {\n  padding-left: 5px;\n}\n.container .inner .add-domain-button {\n  width: 40%;\n  text-align: left;\n  padding-left: 0;\n  width: 100%;\n  margin-left: 5px;\n  font-size: 12px;\n}\n.container .inner .add-domain-button mat-icon {\n  font-size: 14px;\n  margin-top: 8px;\n  margin-right: -5px;\n}\n.container .inner .caution {\n  font-size: 12px;\n  color: gray;\n  margin-left: 5px;\n}\n.container .inner .vip-icon {\n  height: 18px;\n  width: 18px;\n  -webkit-filter: drop-shadow(0px 1px 1px black);\n          filter: drop-shadow(0px 1px 1px black);\n}\n.container .inner .free-label {\n  background: #44b543;\n  color: white;\n  padding: 2px 4px 2px 4px;\n  font-size: 12px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  margin-left: 10px;\n  text-shadow: none;\n  -webkit-filter: drop-shadow(0px 1px 1px silver);\n          filter: drop-shadow(0px 1px 1px silver);\n  border-radius: 2px;\n}\n.container .inner .vip-label {\n  background: radial-gradient(ellipse farthest-corner at right bottom, #fedb37 0%, #fdb931 8%, #9f7928 30%, #8a6e2f 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #ffffff 0%, #ffffac 8%, #d1b464 25%, #5d4a1f 62.5%, #5d4a1f 100%);\n  color: lightyellow;\n  padding: 1.5px 4.5px 1.5px 4.5px;\n  font-size: 12px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  margin-left: 10px;\n  text-shadow: none;\n  -webkit-filter: drop-shadow(0px 1px 1px black);\n          filter: drop-shadow(0px 1px 1px black);\n  border-radius: 2px;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n}\n.container .inner .vip-expiration {\n  text-align: center;\n  margin-left: 5px;\n  color: #40a5ec;\n  font-weight: bold;\n}\n.container .inner .table-container {\n  min-height: 60vh;\n  background: white;\n  border-bottom: 0.5px solid #eee;\n  overflow: auto;\n  border-radius: 7px;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n.container .inner .table-container li {\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  height: 30px;\n}\n.container .inner .table-container li:hover {\n  background: rgba(3, 155, 229, 0.05);\n}\n.container .inner .table-container .ads-account {\n  font-weight: bold;\n  display: inline-block;\n  margin-right: 10px;\n  width: 140px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.container .inner .table-container .ads-account .ads-account-id {\n  font-size: 15px;\n}\n.container .inner .table-container mat-table {\n  width: 100%;\n  box-shadow: none;\n}\n.container .inner .table-container mat-table .ggAds-icon {\n  height: 12px;\n  width: 12px;\n  margin-right: 8px;\n}\n.container .inner .table-container mat-table mat-header-cell,\n.container .inner .table-container mat-table mat-cell {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: left;\n          justify-content: left;\n}\n.container .inner .table-container mat-table mat-header-cell:nth-child(1),\n.container .inner .table-container mat-table mat-cell:nth-child(1) {\n  -webkit-box-flex: 0;\n          flex: 0 0 8%;\n}\n.container .inner .table-container mat-table mat-header-cell:nth-child(2),\n.container .inner .table-container mat-table mat-cell:nth-child(2) {\n  -webkit-box-flex: 0;\n          flex: 0 0 14%;\n}\n.container .inner .table-container mat-table mat-header-cell:nth-child(3),\n.container .inner .table-container mat-table mat-cell:nth-child(3) {\n  -webkit-box-flex: 0;\n          flex: 0 0 24%;\n}\n.container .inner .table-container mat-table mat-header-cell:nth-child(4),\n.container .inner .table-container mat-table mat-cell:nth-child(4) {\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-flex: 0;\n          flex: 0 0 12%;\n}\n.container .inner .table-container mat-table mat-cell:nth-child(5) {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.container .inner .table-container mat-table mat-header-cell:nth-child(5) {\n  padding-left: 5px;\n}\n.container .inner .table-container mat-table mat-header-cell {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: bold;\n}\n.container .inner .table-container mat-table mat-row {\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  -webkit-animation: rowAppearance 0.4s linear;\n}\n@-webkit-keyframes rowAppearance {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes rowAppearance {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.container .inner .table-container mat-table mat-cell {\n  font-size: 12px;\n}\n.container .inner .table-container mat-table mat-row,\n.container .inner .table-container mat-table mat-header-row {\n  min-width: 1000px;\n  width: 100%;\n}\n.container .inner .info-button {\n  cursor: pointer;\n}\n.container .inner .vip-service {\n  color: #40a5ec;\n  font-weight: bold;\n}\n.container .inner .free-service {\n  color: coral;\n  font-weight: bold;\n}\n.container .inner .button-area {\n  padding-top: 30px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.container .inner .tracking {\n  color: orange;\n}\n.container .inner .tracking-button {\n  color: red;\n}\n.container .inner .tracking-button:disabled {\n  color: gray;\n}\n.container .inner .no-tracking {\n  color: #40a5ec;\n}\n.container .inner .clear {\n  clear: both;\n}\n.container .inner .footer {\n  padding-top: 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n@media screen and (max-width: 600px) {\n  .container .title1 {\n    padding: 30px 20px 20vh 20px;\n    height: 40vh;\n  }\n  .container .title1,\n.container .title2 {\n    text-align: center;\n  }\n  .container .inner {\n    margin: 15px;\n  }\n  .container .inner .table-container .ads-account .ads-account-id {\n    font-size: 13px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2Fkd29yZHMtYWNjb3VudC1saXN0L2Fkd29yZHMtYWNjb3VudC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2Fkd29yZHMtYWNjb3VudC1saXN0L2Fkd29yZHMtYWNjb3VudC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsMEJBQUE7QUNDRjtBRENFO0VBSUUsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDRko7QURJSTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNGTjtBREtJO0VBQ0UsZUFBQTtBQ0hOO0FETUk7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0pOO0FEUUU7RUFDRSw0QkFBQTtFQUNBLGlDQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUNOSjtBRFNFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHdDQUFBO0FDUEo7QURRSTtFQUNFO0lBQ0Usb0NBQUE7WUFBQSw0QkFBQTtFQ05OO0VEUUk7SUFDRSxnQ0FBQTtZQUFBLHdCQUFBO0VDTk47QUFDRjtBREFJO0VBQ0U7SUFDRSxvQ0FBQTtZQUFBLDRCQUFBO0VDTk47RURRSTtJQUNFLGdDQUFBO1lBQUEsd0JBQUE7RUNOTjtBQUNGO0FEU0k7RUFDRSxlQUFBO0FDUE47QURVSTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlDQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFRQSxnREFBQTtBQ2ZOO0FEU007RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDUFI7QURXTTtFQUNFO0lBQ0Usa0NBQUE7WUFBQSwwQkFBQTtFQ1RSO0VEV007SUFDRSxnQ0FBQTtZQUFBLHdCQUFBO0VDVFI7QUFDRjtBREdNO0VBQ0U7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0VDVFI7RURXTTtJQUNFLGdDQUFBO1lBQUEsd0JBQUE7RUNUUjtBQUNGO0FEYUk7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDWE47QURjUTtFQUNFLGlCQUFBO0FDWlY7QURpQkk7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ2ZOO0FEaUJNO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ2ZSO0FEbUJJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ2pCTjtBRG9CSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtBQ2xCTjtBRHFCSTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLDREQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0NBQUE7VUFBQSx1Q0FBQTtFQUNBLGtCQUFBO0FDbkJOO0FEc0JJO0VBQ0UsK1BBQUE7RUFnQkEsa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSw0REFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7QUNuQ047QURzQ0k7RUFFRSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEsY0FBQTtFQUNBLGlCQUFBO0FDdENOO0FEMENJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsNEVBQUE7QUN4Q047QUQwQ007RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsWUFBQTtBQ3hDUjtBRDBDUTtFQUNFLG1DQUFBO0FDeENWO0FENENNO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQzFDUjtBRDRDUTtFQUNFLGVBQUE7QUMxQ1Y7QUQ4Q007RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUM1Q1I7QURrRFE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDaERWO0FEb0RROztFQUVFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO1VBQUEscUJBQUE7QUNsRFY7QURxRFE7O0VBRUUsbUJBQUE7VUFBQSxZQUFBO0FDbkRWO0FEc0RROztFQUVFLG1CQUFBO1VBQUEsYUFBQTtBQ3BEVjtBRHVEUTs7RUFFRSxtQkFBQTtVQUFBLGFBQUE7QUNyRFY7QUR3RFE7O0VBRUUsd0JBQUE7VUFBQSx1QkFBQTtFQUNBLG1CQUFBO1VBQUEsYUFBQTtBQ3REVjtBRHlEUTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUN2RFY7QUQwRFE7RUFDRSxpQkFBQTtBQ3hEVjtBRDJEUTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQ3pEVjtBRDREUTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFFQSw0Q0FBQTtBQzNEVjtBRDREVTtFQUNFO0lBQ0UsVUFBQTtFQzFEWjtFRDREVTtJQUNFLFVBQUE7RUMxRFo7QUFDRjtBRG9EVTtFQUNFO0lBQ0UsVUFBQTtFQzFEWjtFRDREVTtJQUNFLFVBQUE7RUMxRFo7QUFDRjtBRDhEUTtFQUNFLGVBQUE7QUM1RFY7QUQrRFE7O0VBRUUsaUJBQUE7RUFDQSxXQUFBO0FDN0RWO0FEa0VJO0VBQ0UsZUFBQTtBQ2hFTjtBRG1FSTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ2pFTjtBRG9FSTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQ2xFTjtBRHFFSTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ25FTjtBRHNFSTtFQUNFLGFBQUE7QUNwRU47QUR1RUk7RUFDRSxVQUFBO0FDckVOO0FEdUVNO0VBQ0UsV0FBQTtBQ3JFUjtBRHlFSTtFQUNFLGNBQUE7QUN2RU47QUQwRUk7RUFDRSxXQUFBO0FDeEVOO0FEMkVJO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDekVOO0FEOEVBO0VBRUk7SUFDRSw0QkFBQTtJQUNBLFlBQUE7RUM1RUo7RUQ4RUU7O0lBRUUsa0JBQUE7RUM1RUo7RUQrRUU7SUFDRSxZQUFBO0VDN0VKO0VEaUZRO0lBQ0UsMEJBQUE7RUMvRVY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW4vYWR3b3Jkcy1hY2NvdW50LWxpc3QvYWR3b3Jkcy1hY2NvdW50LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvZ2ctbWF0ZXJpYWxfMS5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuXG4gIC50aXRsZTEge1xuICAgIC8vcGFkZGluZzogODZweCAyMHB4IDE2cHggMHB4O1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmZmYjU7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2ZmZmZiNSAwJSwgIzI0N2JhMCA3NCUpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIGhlaWdodDogMjV2aDtcblxuICAgIC50aXRsZTEtbWFpbiB7XG4gICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICB9XG5cbiAgICBtYXQtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuXG4gICAgLmFkZC1hY2NvdW50LWJ1dHRvbiB7XG4gICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgIG1heC1oZWlnaHQ6IDQwcHg7XG4gICAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4gIH1cblxuICAudGl0bGUyIHtcbiAgICBwYWRkaW5nOiA5MHB4IDIwcHggMjRweCAyNXB4O1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvYWR3b3JkLWJnMy5qcGdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XG4gIH1cblxuICAuaW5uZXIge1xuICAgIG1hcmdpbjogMzBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMTV2aDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZm9ybUFuaSAwLjRzIGVhc2Utb3V0O1xuICAgIEBrZXlmcmFtZXMgZm9ybUFuaSB7XG4gICAgICBmcm9tIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHZoKTtcbiAgICAgIH1cbiAgICAgIHRvIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1hdC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG5cbiAgICAud2FybmluZyB7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgYmFja2dyb3VuZDogbGlnaHR5ZWxsb3c7XG4gICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIGRhcmtvcmFuZ2U7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdG9wOiAtNTB2aDtcbiAgICAgIHdpZHRoOiA2MCU7XG4gICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgbWF0LWljb24ge1xuICAgICAgICBjb2xvcjogb3JhbmdlO1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIH1cblxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IG5vdGlmaWNhdGlvbkFuaSAwLjJzIGVhc2Utb3V0O1xuICAgICAgQGtleWZyYW1lcyBub3RpZmljYXRpb25Bbmkge1xuICAgICAgICBmcm9tIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXZoKTtcbiAgICAgICAgfVxuICAgICAgICB0byB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLndlYnNpdGUtbGlzdCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1heC1oZWlnaHQ6IDEwNXB4O1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBtYXJnaW46IDVweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgICBwYWRkaW5nOiA1cHg7XG5cbiAgICAgIGxpIHtcbiAgICAgICAgYSB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYWRkLWRvbWFpbi1idXR0b24ge1xuICAgICAgd2lkdGg6IDQwJTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG5cbiAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogLTVweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2F1dGlvbiB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogZ3JheTtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgfVxuXG4gICAgLnZpcC1pY29uIHtcbiAgICAgIGhlaWdodDogMThweDtcbiAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMXB4IDFweCBibGFjayk7XG4gICAgfVxuXG4gICAgLmZyZWUtbGFiZWwge1xuICAgICAgYmFja2dyb3VuZDogIzQ0YjU0MztcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHBhZGRpbmc6IDJweCA0cHggMnB4IDRweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMXB4IDFweCBzaWx2ZXIpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIH1cblxuICAgIC52aXAtbGFiZWwge1xuICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxuICAgICAgICAgIGVsbGlwc2UgZmFydGhlc3QtY29ybmVyIGF0IHJpZ2h0IGJvdHRvbSxcbiAgICAgICAgICAjZmVkYjM3IDAlLFxuICAgICAgICAgICNmZGI5MzEgOCUsXG4gICAgICAgICAgIzlmNzkyOCAzMCUsXG4gICAgICAgICAgIzhhNmUyZiA0MCUsXG4gICAgICAgICAgdHJhbnNwYXJlbnQgODAlXG4gICAgICAgICksXG4gICAgICAgIHJhZGlhbC1ncmFkaWVudChcbiAgICAgICAgICBlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciBhdCBsZWZ0IHRvcCxcbiAgICAgICAgICAjZmZmZmZmIDAlLFxuICAgICAgICAgICNmZmZmYWMgOCUsXG4gICAgICAgICAgI2QxYjQ2NCAyNSUsXG4gICAgICAgICAgIzVkNGExZiA2Mi41JSxcbiAgICAgICAgICAjNWQ0YTFmIDEwMCVcbiAgICAgICAgKTtcbiAgICAgIGNvbG9yOiBsaWdodHllbGxvdztcbiAgICAgIHBhZGRpbmc6IDEuNXB4IDQuNXB4IDEuNXB4IDQuNXB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxcHggMXB4IGJsYWNrKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgfVxuXG4gICAgLnZpcC1leHBpcmF0aW9uIHtcbiAgICAgIC8vZm9udC1zaXplOiAxMnB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgIC8vYmFja2dyb3VuZDogcmdiYSgzLCAxNTUsIDIyOSwgMC4wNSk7XG4gICAgICBjb2xvcjogIzQwYTVlYztcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgLy9wYWRkaW5nOiAzcHggNHB4IDNweCA0cHg7XG4gICAgfVxuXG4gICAgLnRhYmxlLWNvbnRhaW5lciB7XG4gICAgICBtaW4taGVpZ2h0OiA2MHZoO1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjZWVlO1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xuXG4gICAgICBsaSB7XG4gICAgICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgICAgIGhlaWdodDogMzBweDtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDMsIDE1NSwgMjI5LCAwLjA1KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuYWRzLWFjY291bnQge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIHdpZHRoOiAxNDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAuYWRzLWFjY291bnQtaWQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtYXQtdGFibGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcblxuICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgLy9maWx0ZXI6IGRyb3Atc2hhZG93KDAuNXB4IDFweCAxcHggc2lsdmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5nZ0Fkcy1pY29uIHtcbiAgICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgLy9maWx0ZXI6IGRyb3Atc2hhZG93KDAuMnB4IDAuN3B4IDAuN3B4IHJnYmEoMCwgMCwgMCwgMC40KSk7XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtaGVhZGVyLWNlbGwsXG4gICAgICAgIG1hdC1jZWxsIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMSksXG4gICAgICAgIG1hdC1jZWxsOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgZmxleDogMCAwIDglO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgyKSxcbiAgICAgICAgbWF0LWNlbGw6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICBmbGV4OiAwIDAgMTQlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgzKSxcbiAgICAgICAgbWF0LWNlbGw6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgICBmbGV4OiAwIDAgMjQlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCg0KSxcbiAgICAgICAgbWF0LWNlbGw6bnRoLWNoaWxkKDQpIHtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4OiAwIDAgMTIlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWNlbGw6bnRoLWNoaWxkKDUpIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoNSkge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWhlYWRlci1jZWxsIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtcm93IHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHJvd0FwcGVhcmFuY2UgMC40cyBsaW5lYXI7XG4gICAgICAgICAgQGtleWZyYW1lcyByb3dBcHBlYXJhbmNlIHtcbiAgICAgICAgICAgIGZyb20ge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG8ge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1jZWxsIHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtcm93LFxuICAgICAgICBtYXQtaGVhZGVyLXJvdyB7XG4gICAgICAgICAgbWluLXdpZHRoOiAxMDAwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaW5mby1idXR0b24ge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIC52aXAtc2VydmljZSB7XG4gICAgICBjb2xvcjogIzQwYTVlYztcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5mcmVlLXNlcnZpY2Uge1xuICAgICAgY29sb3I6IGNvcmFsO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLmJ1dHRvbi1hcmVhIHtcbiAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cblxuICAgIC50cmFja2luZyB7XG4gICAgICBjb2xvcjogb3JhbmdlO1xuICAgIH1cblxuICAgIC50cmFja2luZy1idXR0b24ge1xuICAgICAgY29sb3I6IHJlZDtcblxuICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5uby10cmFja2luZyB7XG4gICAgICBjb2xvcjogIzQwYTVlYztcbiAgICB9XG5cbiAgICAuY2xlYXIge1xuICAgICAgY2xlYXI6IGJvdGg7XG4gICAgfVxuXG4gICAgLmZvb3RlciB7XG4gICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgLnRpdGxlMSB7XG4gICAgICBwYWRkaW5nOiAzMHB4IDIwcHggMjB2aCAyMHB4O1xuICAgICAgaGVpZ2h0OiA0MHZoO1xuICAgIH1cbiAgICAudGl0bGUxLFxuICAgIC50aXRsZTIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5pbm5lciB7XG4gICAgICBtYXJnaW46IDE1cHg7XG5cbiAgICAgIC50YWJsZS1jb250YWluZXIge1xuICAgICAgICAuYWRzLWFjY291bnQge1xuICAgICAgICAgIC5hZHMtYWNjb3VudC1pZCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9nZy1tYXRlcmlhbF8xLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG4uY29udGFpbmVyIC50aXRsZTEge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIGhlaWdodDogMjV2aDtcbn1cbi5jb250YWluZXIgLnRpdGxlMSAudGl0bGUxLW1haW4ge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLmNvbnRhaW5lciAudGl0bGUxIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLmNvbnRhaW5lciAudGl0bGUxIC5hZGQtYWNjb3VudC1idXR0b24ge1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgbWF4LWhlaWdodDogNDBweDtcbiAgbWF4LXdpZHRoOiAyNTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uY29udGFpbmVyIC50aXRsZTIge1xuICBwYWRkaW5nOiA5MHB4IDIwcHggMjRweCAyNXB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL2Fkd29yZC1iZzMuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XG59XG4uY29udGFpbmVyIC5pbm5lciB7XG4gIG1hcmdpbjogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xNXZoO1xuICAtd2Via2l0LWFuaW1hdGlvbjogZm9ybUFuaSAwLjRzIGVhc2Utb3V0O1xufVxuQGtleWZyYW1lcyBmb3JtQW5pIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHZoKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG4uY29udGFpbmVyIC5pbm5lciBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC53YXJuaW5nIHtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogbGlnaHR5ZWxsb3c7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgZGFya29yYW5nZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC01MHZoO1xuICB3aWR0aDogNjAlO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC1hbmltYXRpb246IG5vdGlmaWNhdGlvbkFuaSAwLjJzIGVhc2Utb3V0O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLndhcm5pbmcgbWF0LWljb24ge1xuICBjb2xvcjogb3JhbmdlO1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbkBrZXlmcmFtZXMgbm90aWZpY2F0aW9uQW5pIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDV2aCk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuLmNvbnRhaW5lciAuaW5uZXIgLndlYnNpdGUtbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDVweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC53ZWJzaXRlLWxpc3QgbGkgYSB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkZC1kb21haW4tYnV0dG9uIHtcbiAgd2lkdGg6IDQwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkZC1kb21haW4tYnV0dG9uIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1yaWdodDogLTVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5jYXV0aW9uIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC52aXAtaWNvbiB7XG4gIGhlaWdodDogMThweDtcbiAgd2lkdGg6IDE4cHg7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDFweCAxcHggYmxhY2spO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmZyZWUtbGFiZWwge1xuICBiYWNrZ3JvdW5kOiAjNDRiNTQzO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDJweCA0cHggMnB4IDRweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMXB4IDFweCBzaWx2ZXIpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAudmlwLWxhYmVsIHtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgZmFydGhlc3QtY29ybmVyIGF0IHJpZ2h0IGJvdHRvbSwgI2ZlZGIzNyAwJSwgI2ZkYjkzMSA4JSwgIzlmNzkyOCAzMCUsICM4YTZlMmYgNDAlLCB0cmFuc3BhcmVudCA4MCUpLCByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBmYXJ0aGVzdC1jb3JuZXIgYXQgbGVmdCB0b3AsICNmZmZmZmYgMCUsICNmZmZmYWMgOCUsICNkMWI0NjQgMjUlLCAjNWQ0YTFmIDYyLjUlLCAjNWQ0YTFmIDEwMCUpO1xuICBjb2xvcjogbGlnaHR5ZWxsb3c7XG4gIHBhZGRpbmc6IDEuNXB4IDQuNXB4IDEuNXB4IDQuNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxcHggMXB4IGJsYWNrKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnZpcC1leHBpcmF0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBjb2xvcjogIzQwYTVlYztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogNjB2aDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNlZWU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIGxpIHtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgaGVpZ2h0OiAzMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMywgMTU1LCAyMjksIDAuMDUpO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciAuYWRzLWFjY291bnQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgLmFkcy1hY2NvdW50IC5hZHMtYWNjb3VudC1pZCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC10YWJsZSAuZ2dBZHMtaWNvbiB7XG4gIGhlaWdodDogMTJweDtcbiAgd2lkdGg6IDEycHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtdGFibGUgbWF0LWhlYWRlci1jZWxsLFxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtdGFibGUgbWF0LWNlbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC10YWJsZSBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDEpLFxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtdGFibGUgbWF0LWNlbGw6bnRoLWNoaWxkKDEpIHtcbiAgZmxleDogMCAwIDglO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtdGFibGUgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgyKSxcbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LXRhYmxlIG1hdC1jZWxsOm50aC1jaGlsZCgyKSB7XG4gIGZsZXg6IDAgMCAxNCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC10YWJsZSBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDMpLFxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtdGFibGUgbWF0LWNlbGw6bnRoLWNoaWxkKDMpIHtcbiAgZmxleDogMCAwIDI0JTtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LXRhYmxlIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoNCksXG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC10YWJsZSBtYXQtY2VsbDpudGgtY2hpbGQoNCkge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleDogMCAwIDEyJTtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LXRhYmxlIG1hdC1jZWxsOm50aC1jaGlsZCg1KSB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LXRhYmxlIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoNSkge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LXRhYmxlIG1hdC1oZWFkZXItY2VsbCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtdGFibGUgbWF0LXJvdyB7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiByb3dBcHBlYXJhbmNlIDAuNHMgbGluZWFyO1xufVxuQGtleWZyYW1lcyByb3dBcHBlYXJhbmNlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtdGFibGUgbWF0LWNlbGwge1xuICBmb250LXNpemU6IDEycHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC10YWJsZSBtYXQtcm93LFxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtdGFibGUgbWF0LWhlYWRlci1yb3cge1xuICBtaW4td2lkdGg6IDEwMDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuaW5mby1idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGFpbmVyIC5pbm5lciAudmlwLXNlcnZpY2Uge1xuICBjb2xvcjogIzQwYTVlYztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZnJlZS1zZXJ2aWNlIHtcbiAgY29sb3I6IGNvcmFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5idXR0b24tYXJlYSB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLmlubmVyIC50cmFja2luZyB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG4uY29udGFpbmVyIC5pbm5lciAudHJhY2tpbmctYnV0dG9uIHtcbiAgY29sb3I6IHJlZDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50cmFja2luZy1idXR0b246ZGlzYWJsZWQge1xuICBjb2xvcjogZ3JheTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5uby10cmFja2luZyB7XG4gIGNvbG9yOiAjNDBhNWVjO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNsZWFyIHtcbiAgY2xlYXI6IGJvdGg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZm9vdGVyIHtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIC50aXRsZTEge1xuICAgIHBhZGRpbmc6IDMwcHggMjBweCAyMHZoIDIwcHg7XG4gICAgaGVpZ2h0OiA0MHZoO1xuICB9XG4gIC5jb250YWluZXIgLnRpdGxlMSxcbi5jb250YWluZXIgLnRpdGxlMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIHtcbiAgICBtYXJnaW46IDE1cHg7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciAuYWRzLWFjY291bnQgLmFkcy1hY2NvdW50LWlkIHtcbiAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@fuse/components/progress-bar/progress-bar.service */ "./src/@fuse/components/progress-bar/progress-bar.service.ts");
/* harmony import */ var _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/components/base/page-base.component */ "./src/app/shared/components/base/page-base.component.ts");
/* harmony import */ var _adwords_account_list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adwords-account-list.service */ "./src/app/main/adwords-account-list/adwords-account-list.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fuse_components_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fuse/components/navigation/navigation.service */ "./src/@fuse/components/navigation/navigation.service.ts");
/* harmony import */ var app_shared_pipes_ads_account_id_ads_account_id_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/pipes/ads-account-id/ads-account-id.pipe */ "./src/app/shared/pipes/ads-account-id/ads-account-id.pipe.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_shared_constants_generals__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/shared/constants/generals */ "./src/app/shared/constants/generals.ts");












var AdwordsAccountListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AdwordsAccountListComponent, _super);
    function AdwordsAccountListComponent(_fuseProgressiveBarService, _dialogService, _adwordsAccountListService, router, _sessionService, _fuseNavigationService) {
        var _this = _super.call(this) || this;
        _this._fuseProgressiveBarService = _fuseProgressiveBarService;
        _this._dialogService = _dialogService;
        _this._adwordsAccountListService = _adwordsAccountListService;
        _this.router = router;
        _this._sessionService = _sessionService;
        _this._fuseNavigationService = _fuseNavigationService;
        _this.displayedColumns = ['task', 'date', 'adwords', 'accepted', 'website'];
        _this.accounts = [];
        _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"]();
        _this.accountConnectTypes = [];
        _this.adsAccountIdPipe = new app_shared_pipes_ads_account_id_ads_account_id_pipe__WEBPACK_IMPORTED_MODULE_9__["AdsAccountIdPipe"]();
        return _this;
    }
    AdwordsAccountListComponent.prototype.ngOnInit = function () {
        this._fuseProgressiveBarService.show();
        this.isProcessing = true;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](this.accounts);
        this.getUser();
    };
    AdwordsAccountListComponent.prototype.getUser = function () {
        var _this = this;
        var sub = this._sessionService.getUser()
            .subscribe(function (user) {
            if (user) {
                _this.user = JSON.parse(_this._sessionService.user);
                _this._sessionService.notifyListAccountsChanged();
                _this.getAccounts();
            }
        });
        this.subscriptions.push(sub);
    };
    AdwordsAccountListComponent.prototype.openRemoveAccountConfirmDialog = function (accountId) {
        var _this = this;
        var openConfirmDialogSub = this._dialogService._openConfirmDialog('Ngắt kết nối tài khoản Google Ads này?')
            .subscribe(function (isAccepted) {
            if (isAccepted) {
                _this.removeAccount(accountId);
            }
        });
        this.subscriptions.push(openConfirmDialogSub);
    };
    AdwordsAccountListComponent.prototype.removeAccount = function (accountId) {
        var _this = this;
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        var removeAccountSub = this._adwordsAccountListService.removeAccount(accountId)
            .subscribe(function (res) {
            _this._sessionService.notifyListAccountsChanged({
                status: 'SUCCESS',
                data: {
                    messages: ['Ngắt kết nối tài khoản Google Ads thành công']
                }
            });
            setTimeout(function () {
                _this.isProcessing = false;
            }, 2000);
        }, function (error) {
            _this._fuseProgressiveBarService.hide();
            _this._dialogService._openErrorDialog(error.error);
            _this.isProcessing = false;
        });
        this.subscriptions.push(removeAccountSub);
    };
    AdwordsAccountListComponent.prototype.openRemoveWebsiteConfirmDialog = function (websiteId) {
        var _this = this;
        var confirmDialogSub = this._dialogService._openConfirmDialog('Xóa website này khỏi tài khoản Google Ads?')
            .subscribe(function (isAccepted) {
            if (isAccepted) {
                _this.removeWebiste(websiteId);
            }
        });
        this.subscriptions.push(confirmDialogSub);
    };
    AdwordsAccountListComponent.prototype.removeWebiste = function (websiteId) {
        var _this = this;
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        var sub = this._adwordsAccountListService.removeWebsite(websiteId)
            .subscribe(function (res) {
            _this._sessionService.notifyListAccountsChanged({
                status: 'SUCCESS',
                data: res
            });
            setTimeout(function () {
                _this.isProcessing = false;
            }, 2000);
        }, function (error) {
            if (error.error.messages) {
                _this._dialogService._openErrorDialog(error.error);
            }
            _this._fuseProgressiveBarService.hide();
            _this.isProcessing = false;
        });
        this.subscriptions.push(sub);
    };
    AdwordsAccountListComponent.prototype.getAccounts = function () {
        var _this = this;
        this._fuseProgressiveBarService.show();
        var sub = this._sessionService.getListAccounts()
            .subscribe(function (listAccounts) {
            if (listAccounts) {
                _this.isProcessing = false;
                _this._fuseProgressiveBarService.hide();
                _this.accounts = listAccounts;
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](_this.accounts);
            }
        });
        this.subscriptions.push(sub);
    };
    AdwordsAccountListComponent.prototype.navigateToSpamClickReport = function (accountId, adsId) {
        this._sessionService.setActiveGoogleAdsAccount(accountId, this.adsAccountIdPipe.transform(adsId));
        this._fuseNavigationService.reloadNavigation();
        this.router.navigateByUrl('/bao-cao/click-ao');
    };
    AdwordsAccountListComponent.prototype.navigateToWebsiteManagement = function (accountId, campaignNumber) {
        this.router.navigateByUrl("/quan-ly-website/" + accountId);
    };
    AdwordsAccountListComponent.prototype.checkAccountAcceptance = function (adsId, isConnected, connectType) {
        var _this = this;
        if (connectType === app_shared_constants_generals__WEBPACK_IMPORTED_MODULE_11__["Generals"].AccountConnectionType.byGoogleAdsId) {
            this.isProcessing = true;
            this._fuseProgressiveBarService.show();
            var sub = this._adwordsAccountListService.checkAccountAcceptance({ adWordId: adsId })
                .subscribe(function (res) {
                if (_this.adsAccountIdPipe.transform(adsId) === _this._sessionService.activeAdsAccountId)
                    _this._sessionService.setAccountAcceptance(res.data.isConnected);
                _this._sessionService.notifyListAccountsChanged();
                _this._fuseProgressiveBarService.hide();
                _this.isProcessing = false;
            }, function (error) {
                _this._fuseProgressiveBarService.hide();
                _this._dialogService._openErrorDialog(error.error);
                _this.isProcessing = false;
            });
            this.subscriptions.push(sub);
        }
        else {
            this._fuseProgressiveBarService.show();
            setTimeout(function () {
                _this._fuseProgressiveBarService.hide();
            }, 1000);
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
    return AdwordsAccountListComponent;
}(app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_5__["PageBaseComponent"]));



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _adwords_account_list_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adwords-account-list-routing.module */ "./src/app/main/adwords-account-list/adwords-account-list-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _shared_components_input_text_input_text_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/components/input-text/input-text.module */ "./src/app/shared/components/input-text/input-text.module.ts");
/* harmony import */ var _shared_components_input_textarea_input_textarea_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/components/input-textarea/input-textarea.module */ "./src/app/shared/components/input-textarea/input-textarea.module.ts");
/* harmony import */ var _shared_components_select_text_select_text_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/components/select-text/select-text.module */ "./src/app/shared/components/select-text/select-text.module.ts");
/* harmony import */ var _shared_components_checkbox_group_checkbox_group_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/components/checkbox-group/checkbox-group.module */ "./src/app/shared/components/checkbox-group/checkbox-group.module.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _adwords_account_list_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./adwords-account-list.service */ "./src/app/main/adwords-account-list/adwords-account-list.service.ts");
/* harmony import */ var app_shared_pipes_ads_account_id_ads_account_id_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/shared/pipes/ads-account-id/ads-account-id.module */ "./src/app/shared/pipes/ads-account-id/ads-account-id.module.ts");
/* harmony import */ var _adwords_account_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./adwords-account-list.component */ "./src/app/main/adwords-account-list/adwords-account-list.component.ts");



















var AdwordsAccountListModule = /** @class */ (function () {
    function AdwordsAccountListModule() {
    }
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
    return AdwordsAccountListModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/constants/api.constant */ "./src/app/shared/constants/api.constant.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AdwordsAccountListService = /** @class */ (function () {
    function AdwordsAccountListService(_http) {
        this._http = _http;
    }
    AdwordsAccountListService.prototype.getAccounts = function () {
        return this._http.get(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.getAccounts);
    };
    AdwordsAccountListService.prototype.removeAccount = function (accountId) {
        var url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.removeAccount.replace('{account_id}', accountId);
        return this._http.delete(url);
    };
    AdwordsAccountListService.prototype.getWebsites = function (accountId) {
        var url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].Website.getWebsites.replace('{accountId}', accountId);
        return this._http.get(url);
    };
    AdwordsAccountListService.prototype.removeWebsite = function (websiteId) {
        var url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].Website.removeWebsite.replace('{website_id}', websiteId);
        return this._http.delete(url);
    };
    AdwordsAccountListService.prototype.checkAccountAcceptance = function (params) {
        return this._http.post(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.checkAccountAcceptance, params);
    };
    AdwordsAccountListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AdwordsAccountListService);
    return AdwordsAccountListService;
}());



/***/ })

}]);
//# sourceMappingURL=main-adwords-account-list-adwords-account-list-module-es5.js.map