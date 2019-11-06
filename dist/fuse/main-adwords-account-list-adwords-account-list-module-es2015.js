(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-adwords-account-list-adwords-account-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/adwords-account-list/adwords-account-list.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/adwords-account-list/adwords-account-list.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"title1\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-around center\" fxLayoutGap=\"15px\">\n    <span fxFlex=\"75\">QUẢN LÝ TÀI KHOẢN GOOGLE ADS & WEBSITE</span>\n    <a [routerLink]=\"'/them-tai-khoan-moi'\" mat-raised-button color=\"warn\" class=\"add-account-button\">\n      <mat-icon>library_add</mat-icon> Thêm tài khoản mới\n    </a>\n  </div>\n\n  <div class=\"inner\">\n    <form>\n\n      <div class=\"table-container\">\n\n        <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n          <ng-container matColumnDef=\"task\">\n            <mat-header-cell *matHeaderCellDef> Tác vụ </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <button mat-icon-button color=\"accent\" matTooltip=\"Cập nhật dữ liệu\"\n                (click)=\"checkAccountAcceptance(element.adsId, element.isConnected, element.connectType)\"\n                [disabled]=\"isProcessing\">\n                <mat-icon>sync</mat-icon>\n              </button>\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"date\">\n            <mat-header-cell *matHeaderCellDef> Ngày kết nối </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.createdAt | date: 'HH:mm dd/MM/yyyy'}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"adwords\">\n            <mat-header-cell *matHeaderCellDef>\n              <img src=\"../../../assets/icons/gg-ads.png\" alt=\"\" style=\"height: 18px; width: 18px; margin-right: 5px\">\n              Google Ads ID </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <div fxLayout=\"row\">\n                <p style=\"color: #4bb543\" *ngIf=\"element.isConnected && element.websites.length > 0\" fxFlex=\"65\">\n\n                  <span class=\"ads-account\"\n                    matTooltip=\"Tài khoản đã được chấp nhận quyền quản lý hệ thống.\">{{element.adsId | adsAccountId}}</span>\n\n                  <!-- <a *ngIf=\"element.isFree === true\" class=\"free-label\" routerLink=\"/nang-cap-vip\" matTooltip=\"\"\n                    style=\"padding-left:0\">\n                    FREE - Nâng cấp VIP\n                  </a> -->\n\n                </p>\n                <p style=\"color: orange\" *ngIf=\"element.isConnected && element.websites.length === 0\" fxFlex=\"65\">\n\n                  <span class=\"ads-account\"\n                    matTooltip=\"Tài khoản chưa có website nào.\">{{element.adsId | adsAccountId}}</span>\n\n                  <!-- <a *ngIf=\"element.isFree === true\" class=\"free-label\" routerLink=\"/nang-cap-vip\" matTooltip=\"\"\n                    style=\"padding-left:0\">\n                    FREE - Nâng cấp VIP\n                  </a> -->\n\n                </p>\n                <p style=\"color: silver\" *ngIf=\"!element.isConnected\" fxFlex=\"65\">\n\n                  <span class=\"ads-account\"\n                    matTooltip=\"Tài khoản chưa được chấp nhận quyền quản lý hệ thống.\">{{element.adsId | adsAccountId}}</span>\n\n                  <!-- <a *ngIf=\"element.isFree === true\" class=\"free-label\" routerLink=\"/nang-cap-vip\" matTooltip=\"\"\n                    style=\"padding-left:0\">\n                    FREE - Nâng cấp VIP\n                  </a> -->\n\n                </p>\n                <div fxLayout=\"row\" fxFlex=\"35\" fxLayoutAlign=\"center center\">\n                  <button mat-icon-button color=\"accent\" matTooltip=\"Xem báo cáo click ảo\"\n                    (click)=\"navigateToSpamClickReport(element.accountId, element.adsId)\">\n                    <mat-icon>data_usage</mat-icon>\n                  </button>\n                  <a [routerLink]=\"['/gan-tracking/website', element.accountId]\" mat-icon-button color=\"accent\"\n                    matTooltip=\"Gắn mã tracking cho các website\" class=\"tracking-button\">\n                    <mat-icon>code</mat-icon>\n                  </a>\n                  <button mat-icon-button color=\"accent\" matTooltip=\"Ngắt kết nối tài khoản Google Ads\"\n                    (click)=\"openRemoveAccountConfirmDialog(element.accountId)\" [disabled]=\"isProcessing\">\n                    <mat-icon style=\"color: silver\">close</mat-icon>\n                  </button>\n                </div>\n              </div>\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"accepted\">\n            <mat-header-cell *matHeaderCellDef> Quyền quản lý </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <button mat-icon-button color=\"accent\" matTooltip=\"Đã được chấp nhận\"\n                *ngIf=\"element.connectType !== 'GOOGLE_ADS_ID' || element.isConnected === true\">\n                <mat-icon style=\"color: #4bb543\">check_circle</mat-icon>\n              </button>\n              <button mat-icon-button color=\"accent\" matTooltip=\"Chưa được chấp nhận\"\n                *ngIf=\"element.connectType === 'GOOGLE_ADS_ID' && element.isConnected === false\">\n                <mat-icon style=\"color: crimson\">highlight_off</mat-icon>\n              </button>\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"website\">\n            <mat-header-cell *matHeaderCellDef> Website của tài khoản </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" fxLayout=\"column\" fxLayoutAlign=\"start\">\n              <ul class=\"website-list\" *ngIf=\"element.websites.length > 0\">\n                <li *ngFor=\"let website of element.websites, let i = index\" fxLayout=\"row\"\n                  fxLayoutAlign=\"center center\">\n                  <div style=\"padding-left: 5px\" fxFlex=\"55\">\n                    <span>{{i+1}}</span>.\n                    <a href=\"{{website.domain}}\" target=\"_blank\">\n                      {{website.domain}}</a>\n                  </div>\n                  <div fxFlex=\"35\">\n                    <!-- <a *ngIf=\"website.isExpired === true\" class=\"free-label\" routerLink=\"/nang-cap-vip\" matTooltip=\"\">\n                      FREE - Nâng cấp VIP\n                    </a> -->\n                    <!-- <div *ngIf=\"website.isExpired === false\">\n                      <a routerLink=\"/nang-cap-vip\">\n                        <span class=\"vip-label\" matTooltip=\"Nhấn để gia hạn thêm VIP\">VIP</span>\n                      </a>\n                      <span class=\"vip-expiration\">({{(website.expiredAt | date: 'dd/MM/yyyy') || 'Unknown'}})</span>\n                    </div> -->\n                  </div>\n                  <div fxFlex=\"10\">\n                    <button (click)=\"openRemoveWebsiteConfirmDialog(website.code)\" mat-icon-button color=\"accent\"\n                      matTooltip=\"Xóa website\" [disabled]=\"isProcessing\">\n                      <mat-icon style=\"color: silver; font-size: 20px\">delete</mat-icon>\n                    </button>\n                  </div>\n                </li>\n              </ul>\n              <button (click)=\"navigateToWebsiteManagement(element.accountId, element.campaignNumber)\" mat-button\n                class=\"add-domain-button\" [disabled]=\"isProcessing\" color=\"accent\" *ngIf=\"element.websites.length < element.limitWebsite\">\n                <mat-icon>add_circle_outline</mat-icon> Thêm Website\n              </button>\n              <span *ngIf=\"element.websites.length >= element.limitWebsite\">\n                <button mat-button class=\"add-domain-button\" color=\"accent\" disabled>\n                  <mat-icon>add_circle_outline</mat-icon> Thêm Website\n                </button>\n                <span class=\"caution\"><span style=\"color: red\">*</span><b>Chú ý:</b> Số lượng website của tài khoản này\n                  đã đạt tối đa. Vui lòng nâng cấp thêm <a routerLink=\"/nang-cap-vip\">tại đây</a></span>\n              </span>\n            </mat-cell>\n          </ng-container>\n\n          <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n\n      </div>\n\n    </form>\n  </div>\n\n</div>"

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

module.exports = ".container {\n  width: 100%;\n  background: white;\n}\n.container .title1 {\n  padding: 86px 20px 16px 0px;\n  background: url('adword-bg3.jpg');\n  background-size: 100% 100%;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n  text-shadow: 1px 1px 2px black;\n}\n.container .title1 .add-account-button {\n  text-shadow: none;\n}\n.container .title2 {\n  padding: 90px 20px 24px 25px;\n  background: url('adword-bg3.jpg');\n  background-size: 100% 100%;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n  text-shadow: 1px 1px 2px black;\n}\n.container .inner mat-icon {\n  font-size: 20px;\n}\n.container .inner .website-list {\n  width: 100%;\n  max-height: 250px;\n  overflow: auto;\n  border-radius: 5px;\n  box-shadow: 1px 1px 3px silver;\n  padding: 10px;\n  margin: 5px;\n}\n.container .inner .add-domain-button {\n  width: 40%;\n  text-align: left;\n  padding-left: 0;\n  width: 100%;\n  margin-left: 5px;\n}\n.container .inner .add-domain-button mat-icon {\n  font-size: 20px;\n}\n.container .inner .caution {\n  font-size: 12px;\n  color: gray;\n  margin-left: 5px;\n}\n.container .inner .vip-icon {\n  height: 18px;\n  width: 18px;\n  -webkit-filter: drop-shadow(0px 1px 1px black);\n          filter: drop-shadow(0px 1px 1px black);\n}\n.container .inner .free-label {\n  background: #44b543;\n  color: white;\n  padding: 2px 4px 2px 4px;\n  font-size: 12px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  margin-left: 10px;\n  text-shadow: none;\n  -webkit-filter: drop-shadow(0px 1px 1px silver);\n          filter: drop-shadow(0px 1px 1px silver);\n  border-radius: 2px;\n}\n.container .inner .vip-label {\n  background: radial-gradient(ellipse farthest-corner at right bottom, #fedb37 0%, #fdb931 8%, #9f7928 30%, #8a6e2f 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #ffffff 0%, #ffffac 8%, #d1b464 25%, #5d4a1f 62.5%, #5d4a1f 100%);\n  color: lightyellow;\n  padding: 1.5px 4.5px 1.5px 4.5px;\n  font-size: 12px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  margin-left: 10px;\n  text-shadow: none;\n  -webkit-filter: drop-shadow(0px 1px 1px black);\n          filter: drop-shadow(0px 1px 1px black);\n  border-radius: 2px;\n  transition: 0.2s;\n}\n.container .inner .vip-expiration {\n  text-align: center;\n  margin-left: 5px;\n  color: #039be5;\n  font-weight: bold;\n}\n.container .inner .table-container {\n  box-shadow: 1px 1px 4px silver;\n  background-color: white;\n  overflow: auto;\n}\n.container .inner .table-container li {\n  transition: 0.2s;\n  height: 30px;\n}\n.container .inner .table-container li:hover {\n  background: rgba(3, 155, 229, 0.1);\n}\n.container .inner .table-container .ads-account {\n  font-weight: bold;\n  margin-right: 10px;\n  display: inline-block;\n  width: 100px;\n}\n.container .inner .table-container mat-table {\n  width: 100%;\n  box-shadow: none;\n}\n.container .inner .table-container mat-header-cell,\n.container .inner .table-container mat-cell {\n  display: flex;\n  justify-content: left;\n}\n.container .inner .table-container mat-header-cell:nth-child(1),\n.container .inner .table-container mat-cell:nth-child(1) {\n  flex: 0 0 8%;\n}\n.container .inner .table-container mat-header-cell:nth-child(2),\n.container .inner .table-container mat-cell:nth-child(2) {\n  flex: 0 0 14%;\n}\n.container .inner .table-container mat-header-cell:nth-child(3),\n.container .inner .table-container mat-cell:nth-child(3) {\n  flex: 0 0 22%;\n}\n.container .inner .table-container mat-header-cell:nth-child(4),\n.container .inner .table-container mat-cell:nth-child(4) {\n  justify-content: center;\n  flex: 0 0 14%;\n}\n.container .inner .table-container mat-cell:nth-child(5) {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.container .inner .table-container mat-header-cell {\n  background: #039be5;\n  color: white;\n}\n.container .inner .table-container mat-row {\n  transition: 0.2s;\n}\n.container .inner .table-container mat-cell {\n  font-size: 12px;\n}\n.container .inner .table-container mat-row,\n.container .inner .table-container mat-header-row {\n  min-width: 1200px;\n  width: 100%;\n}\n.container .inner .info-button {\n  cursor: pointer;\n}\n.container .inner .vip-service {\n  color: #039be5;\n  font-weight: bold;\n}\n.container .inner .free-service {\n  color: coral;\n  font-weight: bold;\n}\n.container .inner .button-area {\n  padding-top: 30px;\n  display: flex;\n  justify-content: center;\n}\n.container .inner .tracking {\n  color: orange;\n}\n.container .inner .tracking-button {\n  color: red;\n}\n.container .inner .tracking-button:disabled {\n  color: gray;\n}\n.container .inner .no-tracking {\n  color: #039be5;\n}\n.container .inner .clear {\n  clear: both;\n}\n.container .inner .footer {\n  padding-top: 15px;\n  display: flex;\n  justify-content: center;\n}\n@media screen and (max-width: 600px) {\n  .title1,\n.title2 {\n    font-size: 14px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2Fkd29yZHMtYWNjb3VudC1saXN0L2Fkd29yZHMtYWNjb3VudC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2Fkd29yZHMtYWNjb3VudC1saXN0L2Fkd29yZHMtYWNjb3VudC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDQ0Y7QURDRTtFQUNFLDJCQUFBO0VBQ0EsaUNBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQ0NKO0FEQ0k7RUFDRSxpQkFBQTtBQ0NOO0FER0U7RUFDRSw0QkFBQTtFQUNBLGlDQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUNESjtBREtJO0VBQ0UsZUFBQTtBQ0hOO0FETUk7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDSk47QURPSTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNMTjtBRE9NO0VBQ0UsZUFBQTtBQ0xSO0FEU0k7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDUE47QURVSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtBQ1JOO0FEV0k7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSw0REFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLCtDQUFBO1VBQUEsdUNBQUE7RUFDQSxrQkFBQTtBQ1ROO0FEWUk7RUFDRSwrUEFBQTtFQWdCQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLDREQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUN6Qk47QUQ0Qkk7RUFFRSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEsY0FBQTtFQUNBLGlCQUFBO0FDNUJOO0FEZ0NJO0VBQ0UsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUM5Qk47QURnQ007RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUM5QlI7QURnQ1E7RUFDRSxrQ0FBQTtBQzlCVjtBRGtDTTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUNoQ1I7QURtQ007RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNqQ1I7QURvQ007O0VBRUUsYUFBQTtFQUNBLHFCQUFBO0FDbENSO0FEcUNNOztFQUVFLFlBQUE7QUNuQ1I7QURzQ007O0VBRUUsYUFBQTtBQ3BDUjtBRHVDTTs7RUFFRSxhQUFBO0FDckNSO0FEd0NNOztFQUVFLHVCQUFBO0VBQ0EsYUFBQTtBQ3RDUjtBRHlDTTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUN2Q1I7QUQwQ007RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUN4Q1I7QUQyQ007RUFDRSxnQkFBQTtBQ3pDUjtBRDRDTTtFQUNFLGVBQUE7QUMxQ1I7QUQ2Q007O0VBRUUsaUJBQUE7RUFDQSxXQUFBO0FDM0NSO0FEK0NJO0VBQ0UsZUFBQTtBQzdDTjtBRGdESTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQzlDTjtBRGlESTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQy9DTjtBRGtESTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDaEROO0FEbURJO0VBQ0UsYUFBQTtBQ2pETjtBRG9ESTtFQUNFLFVBQUE7QUNsRE47QURvRE07RUFDRSxXQUFBO0FDbERSO0FEc0RJO0VBQ0UsY0FBQTtBQ3BETjtBRHVESTtFQUNFLFdBQUE7QUNyRE47QUR3REk7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ3RETjtBRDJEQTtFQUNFOztJQUVFLDBCQUFBO0VDeERGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL2Fkd29yZHMtYWNjb3VudC1saXN0L2Fkd29yZHMtYWNjb3VudC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcblxuICAudGl0bGUxIHtcbiAgICBwYWRkaW5nOiA4NnB4IDIwcHggMTZweCAwcHg7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9hZHdvcmQtYmczLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcblxuICAgIC5hZGQtYWNjb3VudC1idXR0b24ge1xuICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLnRpdGxlMiB7XG4gICAgcGFkZGluZzogOTBweCAyMHB4IDI0cHggMjVweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL2Fkd29yZC1iZzMuanBnXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrO1xuICB9XG5cbiAgLmlubmVyIHtcbiAgICBtYXQtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuXG4gICAgLndlYnNpdGUtbGlzdCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCBzaWx2ZXI7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgbWFyZ2luOiA1cHg7XG4gICAgfVxuXG4gICAgLmFkZC1kb21haW4tYnV0dG9uIHtcbiAgICAgIHdpZHRoOiA0MCU7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xuXG4gICAgICBtYXQtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2F1dGlvbiB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogZ3JheTtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgfVxuXG4gICAgLnZpcC1pY29uIHtcbiAgICAgIGhlaWdodDogMThweDtcbiAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMXB4IDFweCBibGFjayk7XG4gICAgfVxuXG4gICAgLmZyZWUtbGFiZWwge1xuICAgICAgYmFja2dyb3VuZDogIzQ0YjU0MztcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHBhZGRpbmc6IDJweCA0cHggMnB4IDRweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMXB4IDFweCBzaWx2ZXIpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIH1cblxuICAgIC52aXAtbGFiZWwge1xuICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxuICAgICAgICAgIGVsbGlwc2UgZmFydGhlc3QtY29ybmVyIGF0IHJpZ2h0IGJvdHRvbSxcbiAgICAgICAgICAjZmVkYjM3IDAlLFxuICAgICAgICAgICNmZGI5MzEgOCUsXG4gICAgICAgICAgIzlmNzkyOCAzMCUsXG4gICAgICAgICAgIzhhNmUyZiA0MCUsXG4gICAgICAgICAgdHJhbnNwYXJlbnQgODAlXG4gICAgICAgICksXG4gICAgICAgIHJhZGlhbC1ncmFkaWVudChcbiAgICAgICAgICBlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciBhdCBsZWZ0IHRvcCxcbiAgICAgICAgICAjZmZmZmZmIDAlLFxuICAgICAgICAgICNmZmZmYWMgOCUsXG4gICAgICAgICAgI2QxYjQ2NCAyNSUsXG4gICAgICAgICAgIzVkNGExZiA2Mi41JSxcbiAgICAgICAgICAjNWQ0YTFmIDEwMCVcbiAgICAgICAgKTtcbiAgICAgIGNvbG9yOiBsaWdodHllbGxvdztcbiAgICAgIHBhZGRpbmc6IDEuNXB4IDQuNXB4IDEuNXB4IDQuNXB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxcHggMXB4IGJsYWNrKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgfVxuXG4gICAgLnZpcC1leHBpcmF0aW9uIHtcbiAgICAgIC8vZm9udC1zaXplOiAxMnB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgIC8vYmFja2dyb3VuZDogcmdiYSgzLCAxNTUsIDIyOSwgMC4xKTtcbiAgICAgIGNvbG9yOiAjMDM5YmU1O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAvL3BhZGRpbmc6IDNweCA0cHggM3B4IDRweDtcbiAgICB9XG5cbiAgICAudGFibGUtY29udGFpbmVyIHtcbiAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHNpbHZlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgICAgIGxpIHtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMywgMTU1LCAyMjksIDAuMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmFkcy1hY2NvdW50IHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICB9XG5cbiAgICAgIG1hdC10YWJsZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgfVxuXG4gICAgICBtYXQtaGVhZGVyLWNlbGwsXG4gICAgICBtYXQtY2VsbCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgICAgIH1cblxuICAgICAgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgxKSxcbiAgICAgIG1hdC1jZWxsOm50aC1jaGlsZCgxKSB7XG4gICAgICAgIGZsZXg6IDAgMCA4JTtcbiAgICAgIH1cblxuICAgICAgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgyKSxcbiAgICAgIG1hdC1jZWxsOm50aC1jaGlsZCgyKSB7XG4gICAgICAgIGZsZXg6IDAgMCAxNCU7XG4gICAgICB9XG5cbiAgICAgIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMyksXG4gICAgICBtYXQtY2VsbDpudGgtY2hpbGQoMykge1xuICAgICAgICBmbGV4OiAwIDAgMjIlO1xuICAgICAgfVxuXG4gICAgICBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDQpLFxuICAgICAgbWF0LWNlbGw6bnRoLWNoaWxkKDQpIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZsZXg6IDAgMCAxNCU7XG4gICAgICB9XG5cbiAgICAgIG1hdC1jZWxsOm50aC1jaGlsZCg1KSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgIH1cblxuICAgICAgbWF0LWhlYWRlci1jZWxsIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzAzOWJlNTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuXG4gICAgICBtYXQtcm93IHtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAgIH1cblxuICAgICAgbWF0LWNlbGwge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB9XG5cbiAgICAgIG1hdC1yb3csXG4gICAgICBtYXQtaGVhZGVyLXJvdyB7XG4gICAgICAgIG1pbi13aWR0aDogMTIwMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaW5mby1idXR0b24ge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIC52aXAtc2VydmljZSB7XG4gICAgICBjb2xvcjogIzAzOWJlNTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5mcmVlLXNlcnZpY2Uge1xuICAgICAgY29sb3I6IGNvcmFsO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLmJ1dHRvbi1hcmVhIHtcbiAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cblxuICAgIC50cmFja2luZyB7XG4gICAgICBjb2xvcjogb3JhbmdlO1xuICAgIH1cblxuICAgIC50cmFja2luZy1idXR0b24ge1xuICAgICAgY29sb3I6IHJlZDtcblxuICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5uby10cmFja2luZyB7XG4gICAgICBjb2xvcjogIzAzOWJlNTtcbiAgICB9XG5cbiAgICAuY2xlYXIge1xuICAgICAgY2xlYXI6IGJvdGg7XG4gICAgfVxuXG4gICAgLmZvb3RlciB7XG4gICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnRpdGxlMSxcbiAgLnRpdGxlMiB7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4uY29udGFpbmVyIC50aXRsZTEge1xuICBwYWRkaW5nOiA4NnB4IDIwcHggMTZweCAwcHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvYWR3b3JkLWJnMy5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcbn1cbi5jb250YWluZXIgLnRpdGxlMSAuYWRkLWFjY291bnQtYnV0dG9uIHtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG59XG4uY29udGFpbmVyIC50aXRsZTIge1xuICBwYWRkaW5nOiA5MHB4IDIwcHggMjRweCAyNXB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL2Fkd29yZC1iZzMuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XG59XG4uY29udGFpbmVyIC5pbm5lciBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC53ZWJzaXRlLWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMjUwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IHNpbHZlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiA1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYWRkLWRvbWFpbi1idXR0b24ge1xuICB3aWR0aDogNDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkZC1kb21haW4tYnV0dG9uIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNhdXRpb24ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnZpcC1pY29uIHtcbiAgaGVpZ2h0OiAxOHB4O1xuICB3aWR0aDogMThweDtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMXB4IDFweCBibGFjayk7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZnJlZS1sYWJlbCB7XG4gIGJhY2tncm91bmQ6ICM0NGI1NDM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMnB4IDRweCAycHggNHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxcHggMXB4IHNpbHZlcik7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC52aXAtbGFiZWwge1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBmYXJ0aGVzdC1jb3JuZXIgYXQgcmlnaHQgYm90dG9tLCAjZmVkYjM3IDAlLCAjZmRiOTMxIDglLCAjOWY3OTI4IDMwJSwgIzhhNmUyZiA0MCUsIHRyYW5zcGFyZW50IDgwJSksIHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciBhdCBsZWZ0IHRvcCwgI2ZmZmZmZiAwJSwgI2ZmZmZhYyA4JSwgI2QxYjQ2NCAyNSUsICM1ZDRhMWYgNjIuNSUsICM1ZDRhMWYgMTAwJSk7XG4gIGNvbG9yOiBsaWdodHllbGxvdztcbiAgcGFkZGluZzogMS41cHggNC41cHggMS41cHggNC41cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDFweCAxcHggYmxhY2spO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG4uY29udGFpbmVyIC5pbm5lciAudmlwLWV4cGlyYXRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGNvbG9yOiAjMDM5YmU1O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIge1xuICBib3gtc2hhZG93OiAxcHggMXB4IDRweCBzaWx2ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbGkge1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBoZWlnaHQ6IDMwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgzLCAxNTUsIDIyOSwgMC4xKTtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgLmFkcy1hY2NvdW50IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtaGVhZGVyLWNlbGwsXG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC1jZWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDEpLFxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtY2VsbDpudGgtY2hpbGQoMSkge1xuICBmbGV4OiAwIDAgOCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMiksXG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC1jZWxsOm50aC1jaGlsZCgyKSB7XG4gIGZsZXg6IDAgMCAxNCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMyksXG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC1jZWxsOm50aC1jaGlsZCgzKSB7XG4gIGZsZXg6IDAgMCAyMiU7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoNCksXG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC1jZWxsOm50aC1jaGlsZCg0KSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4OiAwIDAgMTQlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtY2VsbDpudGgtY2hpbGQoNSkge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC1oZWFkZXItY2VsbCB7XG4gIGJhY2tncm91bmQ6ICMwMzliZTU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LXJvdyB7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC1jZWxsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtcm93LFxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtaGVhZGVyLXJvdyB7XG4gIG1pbi13aWR0aDogMTIwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5pbmZvLWJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250YWluZXIgLmlubmVyIC52aXAtc2VydmljZSB7XG4gIGNvbG9yOiAjMDM5YmU1O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mcmVlLXNlcnZpY2Uge1xuICBjb2xvcjogY29yYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmJ1dHRvbi1hcmVhIHtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRyYWNraW5nIHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cbi5jb250YWluZXIgLmlubmVyIC50cmFja2luZy1idXR0b24ge1xuICBjb2xvcjogcmVkO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRyYWNraW5nLWJ1dHRvbjpkaXNhYmxlZCB7XG4gIGNvbG9yOiBncmF5O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLm5vLXRyYWNraW5nIHtcbiAgY29sb3I6ICMwMzliZTU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuY2xlYXIge1xuICBjbGVhcjogYm90aDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mb290ZXIge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC50aXRsZTEsXG4udGl0bGUyIHtcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"

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











let AdwordsAccountListComponent = class AdwordsAccountListComponent extends app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_5__["PageBaseComponent"] {
    constructor(_fuseProgressiveBarService, _dialogService, _adwordsAccountListService, _router, _sessionService, _fuseNavigationService) {
        super();
        this._fuseProgressiveBarService = _fuseProgressiveBarService;
        this._dialogService = _dialogService;
        this._adwordsAccountListService = _adwordsAccountListService;
        this._router = _router;
        this._sessionService = _sessionService;
        this._fuseNavigationService = _fuseNavigationService;
        this.displayedColumns = ['task', 'date', 'adwords', 'accepted', 'website'];
        this.accounts = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"]();
        this.accountConnectTypes = [];
        this.isProcessing = false;
        this.adsAccountIdPipe = new app_shared_pipes_ads_account_id_ads_account_id_pipe__WEBPACK_IMPORTED_MODULE_9__["AdsAccountIdPipe"]();
    }
    ngOnInit() {
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
            // this._sessionService.notifyListAccountsChanged({
            //   name: 'remove',
            //   message: 'Ngắt kết nối tài khoản Google Ads thành công'
            // });
            // this._sessionService.notifyListAccountsChanged('remove');
            // _.remove(this.accounts, account => account.accountId === accountId);
            // this._sessionService.completeRemovingAccount(accountId);
            // this.dataSource = new MatTableDataSource(this.accounts);
            this._sessionService.notifyListAccountsChanged();
            setTimeout(() => {
                this._dialogService._openSuccessDialog({ messages: ['Ngắt kết nối tài khoản Google Ads thành công'] });
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
            // this._sessionService.notifyListAccountsChanged({
            //   name: 'remove',
            //   message: res.messages[0]
            // });
            this._sessionService.notifyListAccountsChanged();
            setTimeout(() => {
                this._dialogService._openSuccessDialog(res);
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
            .subscribe((listAccounts) => {
            if (listAccounts) {
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
        this._router.navigateByUrl('/bao-cao/click-ao');
    }
    navigateToWebsiteManagement(accountId, campaignNumber) {
        this._router.navigateByUrl(`/quan-ly-website/${accountId}`);
    }
    checkAccountAcceptance(adsId, isConnected, connectType) {
        if (connectType === 'GOOGLE_ADS_ID') {
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