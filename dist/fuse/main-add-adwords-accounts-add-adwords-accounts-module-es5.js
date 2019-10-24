(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-add-adwords-accounts-add-adwords-accounts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/add-adwords-accounts/add-adwords-accounts.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/add-adwords-accounts/add-adwords-accounts.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"title\">\n    KẾT NỐI TÀI KHOẢN GOOGLE ADS CỦA BẠN\n  </div>\n  <div class=\"inner\">\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"20px\">\n      <div gdArea=\"connect-button\" class=\"connect-button\">\n        <h3><strong><span class=\"step\">[1]</span> KẾT NỐI NHANH BẰNG GMAIL</strong></h3>\n        <p style=\"text-align: justify\"> Sử dụng tài khoản Gmail quản lý Google Ads, bấm kết nối nhanh để hoàn tất\n          quá\n          trình kết nối</p>\n        <div class=\"loginWithGoogle\">\n\n          <button mat-raised-button (click)=\"showAccountListByEmail()\" [disabled]=\"isProcessing\"\n            *ngIf=\"!isAccountListShown\" class=\"connect-by-email-button\">\n            <img src=\"https://cdn4.iconfinder.com/data/icons/free-colorful-icons/360/gmail.png\" alt=\"\"\n              style=\"margin-right: 8px\">Kết nối nhanh\n            bằng\n            Gmail</button>\n\n          <button mat-raised-button (click)=\"isAccountListShown = false; selectedAccount = ''\" [disabled]=\"isProcessing\"\n            *ngIf=\"isAccountListShown\" class=\"disconnect-by-email-button\">\n            <img src=\"https://cdn4.iconfinder.com/data/icons/free-colorful-icons/360/gmail.png\" alt=\"\">Hủy kết nối nhanh\n            bằng Gmail</button>\n\n        </div>\n      </div>\n\n      <div gdArea=\"input-side\" class=\"input-side\">\n\n        <h3><strong><span class=\"step\">[2]</span> KẾT NỐI THÔNG QUA MÃ GOOGLE ADS ID</strong></h3>\n        <p style=\"text-align: justify\"><strong>Bước 1: </strong> Đăng nhập <a\n            href=\"https://ads.google.com/intl/vi_VN/home/\" target=\"_blank\">adwords.google.com</a>, ID tài\n          khoản Google Ads của bạn sẽ nằm ở góc phải trên cùng. <span style=\"color: deeppink;\">VD: 552-999-5152</span>\n          là\n          ID\n          tài khoản Google Ads của bạn</p>\n\n        <form [formGroup]=\"form\" novalidate>\n          <div fxLayout=\"row\">\n            <app-input-text [formControlName]=\"'adWordId'\" [title]=\"'Google Ads ID'\"\n              [placeholder]=\"'Ví dụ: 5456445193 hoặc 545-644-5193'\" [pristine]=\"true\"\n              [errors]=\"getMessageErrors('adWordId')\" (keypress)=\"onPressId($event.keyCode)\">\n            </app-input-text>\n            <button mat-raised-button color=\"accent\" class=\"submit-button\" aria-label=\"Kết nối\"\n              (click)=\"onClickBtnSubmit()\" [disabled]=\"isProcessing\">\n              <mat-icon matSuffix class=\"add_box\" style=\"font-size: 20px\">wifi</mat-icon>\n              Kết nối\n            </button>\n          </div>\n        </form>\n\n      </div>\n    </div>\n\n    <div class=\"ads-account-list\" *ngIf=\"isAccountListShown\">\n\n      <div class=\"ads-account-list-title\">\n        <img src=\"../../../assets/icons/gg-ads.png\" alt=\"\" style=\"width: 20px; height: 20px\"> VUI LÒNG LỰA CHỌN TÀI KHOẢN\n        GOOGLE ADS CỦA BẠN\n      </div>\n\n      <mat-form-field>\n        <mat-icon matPrefix style=\"font-size: 20px; color: rgba(0,0,0,0.6);\">search</mat-icon>\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Tìm kiếm\">\n      </mat-form-field>\n\n      <div class=\"ads-account-list-wrapper\">\n\n        <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n          <ng-container matColumnDef=\"order\">\n            <mat-header-cell *matHeaderCellDef> # </mat-header-cell>\n            <mat-cell *matCellDef=\"let element; let i = index\" [class.disabled-cell]=\"!element.availableToConnect\">\n              {{i + 1}}\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"adsId\">\n            <mat-header-cell *matHeaderCellDef>Google Ads ID </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" [class.disabled-cell]=\"!element.availableToConnect\">\n              {{element.googleAdId}}\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"name\">\n            <mat-header-cell *matHeaderCellDef> Tên tài khoản </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" [class.disabled-cell]=\"!element.availableToConnect\">\n              {{element.name}}\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"selection\">\n            <mat-header-cell *matHeaderCellDef> Chọn tại đây </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" [class.disabled-cell]=\"!element.availableToConnect\">\n\n              <mat-radio-button value=\"{{element.googleAdId}}\" *ngIf=\"!element.availableToConnect\"\n                matTooltip=\"{{element.reason}}\" disabled></mat-radio-button>\n\n              <mat-radio-button value=\"{{element.googleAdId}}\" *ngIf=\"element.availableToConnect\"\n                (change)=\"selectAccount($event)\"></mat-radio-button>\n\n            </mat-cell>\n          </ng-container>\n\n          <mat-header-row *matHeaderRowDef=\"adsAccountColumns; sticky: true\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: adsAccountColumns;\"></mat-row>\n        </mat-table>\n\n      </div>\n\n      <p class=\"div-connect-account-button\">\n        <button mat-raised-button color=\"accent\" [disabled]=\"!selectedAccount || isProcessing\"\n          (click)=\"connectAccountByEmail()\" style=\"height: 45px\">\n          <mat-icon>wifi</mat-icon> Kết nối tài khoản\n        </button>\n      </p>\n    </div>\n\n    <div gdArea=\"content\" *ngIf=\"isConnected\">\n      <mat-divider></mat-divider>\n      <h3><strong><span class=\"step\">[3]</span> VUI LÒNG ĐỒNG Ý YÊU CẦU KẾT NỐI</strong></h3>\n      <p class=\"instruction-step\"><strong>Bước 1: </strong> Truy cập lại tài khoản AdWords của bạn <a\n          href=\"https://ads.google.com/intl/vi_VN/home/\" target=\"_blank\">adwords.google.com</a> và bấm vào icon ở menu\n        bên\n        trái </p>\n      <p class=\"text-center\"><img src=\"/assets/images/adwords-caidat-b1-moi.jpg?v=1\"></p>\n      <p class=\"instruction-step\"><strong>Bước 2: </strong> Sau đó bấm vào <code> NGƯỜI QUẢN LÝ </code> và bấm\n        <code>CHẤP NHẬN</code> (nếu bạn\n        không thấy người quản lý vui lòng chờ khoảng 5 phút)</p>\n      <p class=\"text-center\">\n        <img src=\"../../../assets/images/connect-ads-account-step2.PNG\">\n      </p>\n      <p class=\"instruction-step\"><strong>Bước 3: </strong>Một thông báo hiện ra, bạn chọn\n        <code>CẤP QUYỀN TRUY CẬP</code></p>\n      <p class=\"text-center\">\n        <img src=\"../../../assets/images/connect-ads-account-step3.PNG\" class=\"instruction-step3\">\n      </p>\n      <p class=\"text-center\" style=\"padding-top: 20px\">\n        <button mat-raised-button [disabled]=\"isProcessing\" aria-label=\"TÔI ĐÃ HOÀN TẤT KẾT NỐI\"\n          [disabled]=\"isProcessing\" (click)=\"completeAccountConnection()\"\n          style=\"border-radius: 0; background-color: #44b543; color: white\">\n          <mat-icon matSuffix class=\"done_outline\" style=\"font-size: 20px\">check</mat-icon>\n          TÔI ĐÃ HOÀN TẤT KẾT NỐI\n        </button>\n\n      </p>\n      <!-- <div gdArea=\"content\">\n            <h3><strong><span class=\"step\">[2]</span>  Vui lòng đồng ý yêu cầu kết nối</strong></h3>\n            <p><strong>Bước 1: </strong> Đăng nhập <a href=\"https://ads.google.com/intl/vi_VN/home/\" target=\"_blank\">adwords.google.com</a>, ID tài\n              khoản adwords của bạn sẽ nằm ở góc phải trên cùng. <span style=\"color: deeppink;\">VD: 552-999-5152</span> là ID\n              tài khoản Adwords của bạn</p>\n          </div> -->\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/main/add-adwords-accounts/add-adwords-accounts-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/main/add-adwords-accounts/add-adwords-accounts-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: AddAdwordsAccountsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAdwordsAccountsRoutingModule", function() { return AddAdwordsAccountsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_adwords_accounts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-adwords-accounts.component */ "./src/app/main/add-adwords-accounts/add-adwords-accounts.component.ts");




var AddAdwordsAccountsRoutingModule = /** @class */ (function () {
    function AddAdwordsAccountsRoutingModule() {
    }
    AddAdwordsAccountsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        pathMatch: 'full',
                        component: _add_adwords_accounts_component__WEBPACK_IMPORTED_MODULE_3__["AddAdwordsAccountsComponent"]
                    }
                ])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AddAdwordsAccountsRoutingModule);
    return AddAdwordsAccountsRoutingModule;
}());



/***/ }),

/***/ "./src/app/main/add-adwords-accounts/add-adwords-accounts.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/main/add-adwords-accounts/add-adwords-accounts.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n}\n.container .title {\n  background: url('dark-material-bg.jpg');\n  background-size: 100% 100%;\n  font-size: 16px;\n  font-weight: bold;\n  color: white;\n  padding: 94px 30px 27px 30px;\n}\n.container .inner {\n  padding: 30px;\n}\n.container .inner .submit-button {\n  height: 58px;\n  margin: 2px;\n  margin-top: 4px;\n  margin-right: 0;\n  width: 120px;\n}\n.container .inner .message {\n  border: 1px solid #d2d2d2;\n  box-shadow: 1px 1px 2px silver;\n  background-color: white;\n  min-width: 350px;\n  margin-bottom: 10px;\n}\n.container .inner .message .message-title {\n  padding: 10px;\n  font-size: 18px;\n  font-style: tahoma;\n}\n.container .inner .message .message-title img {\n  height: 40px;\n  width: 40px;\n  margin-right: 10px;\n}\n.container .inner .message .message-text {\n  padding: 10px;\n}\n.container .inner .step {\n  color: #039be5;\n}\n.container .inner .box {\n  padding: 30px;\n}\n.container .inner .loginWithGoogle {\n  display: table;\n  margin: 0 auto;\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n.container .inner .loginWithGoogle button {\n  padding: 5px;\n  padding-left: 10px;\n  padding-right: 10px;\n  border-radius: 0;\n}\n.container .inner .loginWithGoogle button img {\n  height: 24px;\n  width: 24px;\n  margin-top: -5px;\n  margin-right: 5px;\n}\n.container .inner .loginWithGoogle button:disabled img {\n  opacity: 0.4;\n}\n.container .inner .loginWithGoogle .connect-by-emai-button {\n  background: white;\n  color: rgba(0, 0, 0, 0.6);\n}\n.container .inner .loginWithGoogle .disconnect-by-email-button {\n  background: #cf493c;\n  color: white;\n}\n.container .inner .loginWithGoogle .note {\n  font-size: 12px;\n  font-style: italic;\n}\n.container .inner .ads-account-list {\n  padding-top: 20px;\n}\n.container .inner .ads-account-list .div-connect-account-button {\n  text-align: center;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.container .inner .ads-account-list .div-connect-account-button button {\n  border-radius: 0;\n}\n.container .inner .ads-account-list .div-connect-account-button button mat-icon {\n  font-size: 20px;\n}\n.container .inner .ads-account-list .ads-account-list-title {\n  font-weight: bold;\n  font-size: 16px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper {\n  max-height: 300px;\n  overflow: auto;\n  background-color: white;\n  box-shadow: 1px 1px 4px silver;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table {\n  box-shadow: none;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-row {\n  transition: 0.2s;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-row:hover {\n  background-color: rgba(3, 155, 229, 0.1);\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-cell {\n  color: #039be5;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table .disabled-cell {\n  color: silver;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-header-cell:nth-child(1),\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-cell:nth-child(1) {\n  flex: 0 0 12%;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-header-cell:last-child,\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-cell:last-child {\n  display: flex;\n  justify-content: center;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-header-cell {\n  background: #039be5;\n  color: white;\n}\n.container .inner .g-sign-in-button {\n  width: 250px;\n  background: #2d77f3;\n}\n.container .inner .g-sign-in-button {\n  height: 40px;\n  border-width: 0;\n  border-radius: 2px;\n  white-space: nowrap;\n  /* box-shadow: 1px 1px 0px 1px rgba(0, 0, 0, 0.05); */\n  /* transition-property: background-color, box-shadow; */\n  /* transition-duration: 150ms; */\n  /* transition-timing-function: ease-in-out; */\n  padding: 0;\n  margin: 10px;\n  display: inline-block;\n  width: 210px;\n  background-color: #4285f4;\n  color: #fff;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);\n  transition: background-color 0.218s, border-color 0.218s, box-shadow 0.218s;\n}\n.container .inner .text-container {\n  display: inline-block;\n  vertical-align: middle;\n  font-family: \"Roboto\", arial, sans-serif;\n  font-weight: 500;\n  letter-spacing: 0.21px;\n  font-size: 14px;\n  border: none;\n  text-align: center;\n  width: 166px;\n  padding-top: 10px;\n}\n.container .inner .instruction-step3 {\n  height: 50%;\n  width: 50%;\n}\n.container .inner .instruction-step {\n  font-size: 16px;\n  padding-top: 20px;\n}\n@media screen and (max-width: 600px) {\n  .container .inner {\n    padding: 15px;\n  }\n  .container .inner .instruction-step3 {\n    height: 100%;\n    width: 100%;\n  }\n  .container .submit-button {\n    padding: 0;\n    padding-right: 5px;\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2FkZC1hZHdvcmRzLWFjY291bnRzL2FkZC1hZHdvcmRzLWFjY291bnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2FkZC1hZHdvcmRzLWFjY291bnRzL2FkZC1hZHdvcmRzLWFjY291bnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGO0FEQ0U7RUFDRSx1Q0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FDQ0o7QURFRTtFQUNFLGFBQUE7QUNBSjtBRElJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNGTjtBREtJO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0hOO0FES007RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDSFI7QURLUTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNIVjtBRE9NO0VBQ0UsYUFBQTtBQ0xSO0FEU0k7RUFDRSxjQUFBO0FDUE47QURTSTtFQUNFLGFBQUE7QUNQTjtBRFNJO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDUE47QURTTTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNQUjtBRFNRO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDUFY7QURXVTtFQUNFLFlBQUE7QUNUWjtBRGNNO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtBQ1pSO0FEZU07RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNiUjtBRGdCTTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ2RSO0FEa0JJO0VBQ0UsaUJBQUE7QUNoQk47QURrQk07RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNoQlI7QURrQlE7RUFDRSxnQkFBQTtBQ2hCVjtBRGtCVTtFQUNFLGVBQUE7QUNoQlo7QURxQk07RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDbkJSO0FEc0JNO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtBQ3BCUjtBRHNCUTtFQUNFLGdCQUFBO0FDcEJWO0FEc0JVO0VBQ0UsZ0JBQUE7QUNwQlo7QURzQlk7RUFDRSx3Q0FBQTtBQ3BCZDtBRHdCVTtFQUNFLGNBQUE7QUN0Qlo7QUR5QlU7RUFDRSxhQUFBO0FDdkJaO0FEMEJVOztFQUVFLGFBQUE7QUN4Qlo7QUQyQlU7O0VBRUUsYUFBQTtFQUNBLHVCQUFBO0FDekJaO0FENEJVO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDMUJaO0FEZ0NJO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDOUJOO0FEZ0NJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscURBQUE7RUFDQSx1REFBQTtFQUNBLGdDQUFBO0VBQ0EsNkNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLDJDQUFBO0VBQ0EsMkVBQUE7QUM5Qk47QURpQ0k7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQy9CTjtBRGtDSTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FDaENOO0FEbUNJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDakNOO0FEc0NBO0VBRUk7SUFDRSxhQUFBO0VDcENKO0VEc0NJO0lBQ0UsWUFBQTtJQUNBLFdBQUE7RUNwQ047RUR1Q0U7SUFDRSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0VDckNKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL2FkZC1hZHdvcmRzLWFjY291bnRzL2FkZC1hZHdvcmRzLWFjY291bnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC50aXRsZSB7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9kYXJrLW1hdGVyaWFsLWJnLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDk0cHggMzBweCAyN3B4IDMwcHg7XG4gIH1cblxuICAuaW5uZXIge1xuICAgIHBhZGRpbmc6IDMwcHg7XG5cbiAgICAuaW5wdXQtc2lkZSB7XG4gICAgfVxuICAgIC5zdWJtaXQtYnV0dG9uIHtcbiAgICAgIGhlaWdodDogNThweDtcbiAgICAgIG1hcmdpbjogMnB4O1xuICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgd2lkdGg6IDEyMHB4O1xuICAgIH1cblxuICAgIC5tZXNzYWdlIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMmQyZDI7XG4gICAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCBzaWx2ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIG1pbi13aWR0aDogMzUwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gICAgICAubWVzc2FnZS10aXRsZSB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC1zdHlsZTogdGFob21hO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAubWVzc2FnZS10ZXh0IHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc3RlcCB7XG4gICAgICBjb2xvcjogIzAzOWJlNTtcbiAgICB9XG4gICAgLmJveCB7XG4gICAgICBwYWRkaW5nOiAzMHB4O1xuICAgIH1cbiAgICAubG9naW5XaXRoR29vZ2xlIHtcbiAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5jb25uZWN0LWJ5LWVtYWktYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgICB9XG5cbiAgICAgIC5kaXNjb25uZWN0LWJ5LWVtYWlsLWJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNjZjQ5M2M7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cblxuICAgICAgLm5vdGUge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYWRzLWFjY291bnQtbGlzdCB7XG4gICAgICBwYWRkaW5nLXRvcDogMjBweDtcblxuICAgICAgLmRpdi1jb25uZWN0LWFjY291bnQtYnV0dG9uIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuXG4gICAgICAgICAgbWF0LWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuYWRzLWFjY291bnQtbGlzdC10aXRsZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgIH1cblxuICAgICAgLmFkcy1hY2NvdW50LWxpc3Qtd3JhcHBlciB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHNpbHZlcjtcblxuICAgICAgICBtYXQtdGFibGUge1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG5cbiAgICAgICAgICBtYXQtcm93IHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMsIDE1NSwgMjI5LCAwLjEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG1hdC1jZWxsIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMDM5YmU1O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5kaXNhYmxlZC1jZWxsIHtcbiAgICAgICAgICAgIGNvbG9yOiBzaWx2ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgxKSxcbiAgICAgICAgICBtYXQtY2VsbDpudGgtY2hpbGQoMSkge1xuICAgICAgICAgICAgZmxleDogMCAwIDEyJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtYXQtaGVhZGVyLWNlbGw6bGFzdC1jaGlsZCxcbiAgICAgICAgICBtYXQtY2VsbDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtYXQtaGVhZGVyLWNlbGwge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAzOWJlNTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZy1zaWduLWluLWJ1dHRvbiB7XG4gICAgICB3aWR0aDogMjUwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjMmQ3N2YzO1xuICAgIH1cbiAgICAuZy1zaWduLWluLWJ1dHRvbiB7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBib3JkZXItd2lkdGg6IDA7XG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgLyogYm94LXNoYWRvdzogMXB4IDFweCAwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7ICovXG4gICAgICAvKiB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBib3gtc2hhZG93OyAqL1xuICAgICAgLyogdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7ICovXG4gICAgICAvKiB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7ICovXG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IDIxMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQyODVmNDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yMThzLCBib3JkZXItY29sb3IgMC4yMThzLCBib3gtc2hhZG93IDAuMjE4cztcbiAgICB9XG5cbiAgICAudGV4dC1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBhcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4yMXB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgd2lkdGg6IDE2NnB4O1xuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgfVxuXG4gICAgLmluc3RydWN0aW9uLXN0ZXAzIHtcbiAgICAgIGhlaWdodDogNTAlO1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG5cbiAgICAuaW5zdHJ1Y3Rpb24tc3RlcCB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICAuaW5uZXIge1xuICAgICAgcGFkZGluZzogMTVweDtcblxuICAgICAgLmluc3RydWN0aW9uLXN0ZXAzIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG4gICAgLnN1Ym1pdC1idXR0b24ge1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gIH1cbn1cbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgLnRpdGxlIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9kYXJrLW1hdGVyaWFsLWJnLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogOTRweCAzMHB4IDI3cHggMzBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIHtcbiAgcGFkZGluZzogMzBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5zdWJtaXQtYnV0dG9uIHtcbiAgaGVpZ2h0OiA1OHB4O1xuICBtYXJnaW46IDJweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMjBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5tZXNzYWdlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAycHggc2lsdmVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWluLXdpZHRoOiAzNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5tZXNzYWdlIC5tZXNzYWdlLXRpdGxlIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXN0eWxlOiB0YWhvbWE7XG59XG4uY29udGFpbmVyIC5pbm5lciAubWVzc2FnZSAubWVzc2FnZS10aXRsZSBpbWcge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAubWVzc2FnZSAubWVzc2FnZS10ZXh0IHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5zdGVwIHtcbiAgY29sb3I6ICMwMzliZTU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYm94IHtcbiAgcGFkZGluZzogMzBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5sb2dpbldpdGhHb29nbGUge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAubG9naW5XaXRoR29vZ2xlIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmxvZ2luV2l0aEdvb2dsZSBidXR0b24gaW1nIHtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMjRweDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAubG9naW5XaXRoR29vZ2xlIGJ1dHRvbjpkaXNhYmxlZCBpbWcge1xuICBvcGFjaXR5OiAwLjQ7XG59XG4uY29udGFpbmVyIC5pbm5lciAubG9naW5XaXRoR29vZ2xlIC5jb25uZWN0LWJ5LWVtYWktYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG4uY29udGFpbmVyIC5pbm5lciAubG9naW5XaXRoR29vZ2xlIC5kaXNjb25uZWN0LWJ5LWVtYWlsLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNjZjQ5M2M7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5sb2dpbldpdGhHb29nbGUgLm5vdGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCAuZGl2LWNvbm5lY3QtYWNjb3VudC1idXR0b24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5kaXYtY29ubmVjdC1hY2NvdW50LWJ1dHRvbiBidXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmRpdi1jb25uZWN0LWFjY291bnQtYnV0dG9uIGJ1dHRvbiBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5hZHMtYWNjb3VudC1saXN0LXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmFkcy1hY2NvdW50LWxpc3Qtd3JhcHBlciB7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHNpbHZlcjtcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5hZHMtYWNjb3VudC1saXN0LXdyYXBwZXIgbWF0LXRhYmxlIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5hZHMtYWNjb3VudC1saXN0LXdyYXBwZXIgbWF0LXRhYmxlIG1hdC1yb3cge1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmFkcy1hY2NvdW50LWxpc3Qtd3JhcHBlciBtYXQtdGFibGUgbWF0LXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMywgMTU1LCAyMjksIDAuMSk7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCAuYWRzLWFjY291bnQtbGlzdC13cmFwcGVyIG1hdC10YWJsZSBtYXQtY2VsbCB7XG4gIGNvbG9yOiAjMDM5YmU1O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmFkcy1hY2NvdW50LWxpc3Qtd3JhcHBlciBtYXQtdGFibGUgLmRpc2FibGVkLWNlbGwge1xuICBjb2xvcjogc2lsdmVyO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmFkcy1hY2NvdW50LWxpc3Qtd3JhcHBlciBtYXQtdGFibGUgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgxKSxcbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5hZHMtYWNjb3VudC1saXN0LXdyYXBwZXIgbWF0LXRhYmxlIG1hdC1jZWxsOm50aC1jaGlsZCgxKSB7XG4gIGZsZXg6IDAgMCAxMiU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCAuYWRzLWFjY291bnQtbGlzdC13cmFwcGVyIG1hdC10YWJsZSBtYXQtaGVhZGVyLWNlbGw6bGFzdC1jaGlsZCxcbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5hZHMtYWNjb3VudC1saXN0LXdyYXBwZXIgbWF0LXRhYmxlIG1hdC1jZWxsOmxhc3QtY2hpbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5hZHMtYWNjb3VudC1saXN0LXdyYXBwZXIgbWF0LXRhYmxlIG1hdC1oZWFkZXItY2VsbCB7XG4gIGJhY2tncm91bmQ6ICMwMzliZTU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5nLXNpZ24taW4tYnV0dG9uIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBiYWNrZ3JvdW5kOiAjMmQ3N2YzO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmctc2lnbi1pbi1idXR0b24ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci13aWR0aDogMDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAvKiBib3gtc2hhZG93OiAxcHggMXB4IDBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KTsgKi9cbiAgLyogdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgYm94LXNoYWRvdzsgKi9cbiAgLyogdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7ICovXG4gIC8qIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDsgKi9cbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyODVmNDtcbiAgY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yMThzLCBib3JkZXItY29sb3IgMC4yMThzLCBib3gtc2hhZG93IDAuMjE4cztcbn1cbi5jb250YWluZXIgLmlubmVyIC50ZXh0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIGFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4yMXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTY2cHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmluc3RydWN0aW9uLXN0ZXAzIHtcbiAgaGVpZ2h0OiA1MCU7XG4gIHdpZHRoOiA1MCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuaW5zdHJ1Y3Rpb24tc3RlcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIgLmlubmVyIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIC5pbnN0cnVjdGlvbi1zdGVwMyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5jb250YWluZXIgLnN1Ym1pdC1idXR0b24ge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/main/add-adwords-accounts/add-adwords-accounts.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/main/add-adwords-accounts/add-adwords-accounts.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AddAdwordsAccountsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAdwordsAccountsComponent", function() { return AddAdwordsAccountsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_components_base_editable_form_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/base/editable-form-base.component */ "./src/app/shared/components/base/editable-form-base.component.ts");
/* harmony import */ var _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@fuse/components/progress-bar/progress-bar.service */ "./src/@fuse/components/progress-bar/progress-bar.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _add_adwords_accounts_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-adwords-accounts.service */ "./src/app/main/add-adwords-accounts/add-adwords-accounts.service.ts");
/* harmony import */ var _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var _fuse_components_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@fuse/components/navigation/navigation.service */ "./src/@fuse/components/navigation/navigation.service.ts");
/* harmony import */ var app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_shared_pipes_ads_account_id_ads_account_id_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/shared/pipes/ads-account-id/ads-account-id.pipe */ "./src/app/shared/pipes/ads-account-id/ads-account-id.pipe.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var app_shared_services_ads_accounts_adwords_accounts_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/shared/services/ads-accounts/adwords-accounts.service */ "./src/app/shared/services/ads-accounts/adwords-accounts.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");















var AddAdwordsAccountsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AddAdwordsAccountsComponent, _super);
    function AddAdwordsAccountsComponent(_fuseProgressiveBarService, _dialogService, _fuseNavigationService, _addAdwordsAccountsService, _adwordsAccountsService, _sessionService, _router, http) {
        var _this = _super.call(this) || this;
        _this._fuseProgressiveBarService = _fuseProgressiveBarService;
        _this._dialogService = _dialogService;
        _this._fuseNavigationService = _fuseNavigationService;
        _this._addAdwordsAccountsService = _addAdwordsAccountsService;
        _this._adwordsAccountsService = _adwordsAccountsService;
        _this._sessionService = _sessionService;
        _this._router = _router;
        _this.http = http;
        _this.isConnected = false;
        _this._adsAccountIdPipe = new app_shared_pipes_ads_account_id_ads_account_id_pipe__WEBPACK_IMPORTED_MODULE_11__["AdsAccountIdPipe"]();
        _this.isProcessing = false;
        _this.isAccountListShown = false;
        _this.adsAccounts = [];
        _this.adsAccountColumns = ['order', 'adsId', 'name', 'selection'];
        _this.selectedAccount = '';
        _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTableDataSource"](_this.adsAccounts);
        return _this;
    }
    AddAdwordsAccountsComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.checkAccountList();
    };
    AddAdwordsAccountsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.googleInit();
        }, 500);
    };
    AddAdwordsAccountsComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    AddAdwordsAccountsComponent.prototype.loginByGG = function () {
        this.auth2.grantOfflineAccess().then(this.onSignIn.bind(this));
    };
    AddAdwordsAccountsComponent.prototype.checkAccountList = function () {
        var _this = this;
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        var sub = this._adwordsAccountsService.getAdwordsAccount()
            .subscribe(function (res) {
            _this._fuseProgressiveBarService.hide();
            _this.isProcessing = false;
        }, function (error) {
            _this.checkRefreshToken();
        });
        this.subscriptions.push(sub);
    };
    AddAdwordsAccountsComponent.prototype.googleInit = function () {
        var _this = this;
        gapi.load('auth2', function () {
            _this.auth2 = gapi.auth2.init({
                client_id: environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].googleAuth2ClientID,
                cookiepolicy: 'single_host_origin',
                scope: 'profile email https://www.googleapis.com/auth/adwords'
            });
        });
    };
    AddAdwordsAccountsComponent.prototype.showAccountListByEmail = function () {
        this.checkRefreshToken();
    };
    AddAdwordsAccountsComponent.prototype.onSignIn = function (googleUser) {
        var _this = this;
        if (googleUser && googleUser['code']) {
            this.http.post('https://www.googleapis.com/oauth2/v4/token', {
                grant_type: 'authorization_code',
                client_id: environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].googleAuth2ClientID,
                client_secret: 'mcIBWUsnOJ92Knb1fYYtiYSL',
                code: googleUser['code'],
                redirect_uri: environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].oauth2RedirectUri
            })
                .subscribe(function (val) {
                _this._sessionService.setGoogleAccountToken(val['access_token'], val['refresh_token']);
                setTimeout(function () {
                    _this.updateAccessTokenRefreshToken();
                }, 500);
            }, function (response) {
                console.log('POST call in error', response);
            }, function () {
                console.log('The POST observable is now completed.');
            });
        }
        else {
            this._dialogService._openErrorDialog({ messages: ['Lấy thông tin tài khoản từ google không thành công'] });
        }
    };
    AddAdwordsAccountsComponent.prototype.selectAccount = function (event) {
        this.selectedAccount = event.value;
    };
    AddAdwordsAccountsComponent.prototype.checkRefreshToken = function () {
        var _this = this;
        this.isProcessing = false;
        this._fuseProgressiveBarService.show();
        var sub = this._addAdwordsAccountsService.checkRefreshToken()
            .subscribe(function (res) {
            _this.isProcessing = false;
            _this._fuseProgressiveBarService.hide();
            _this.getAccountsFromGoogleAds();
        }, function (error) {
            _this._fuseProgressiveBarService.hide();
            _this.isProcessing = false;
            _this.isAccountListShown = false;
            _this.loginByGG();
        });
        this.subscriptions.push(sub);
    };
    AddAdwordsAccountsComponent.prototype.updateAccessTokenRefreshToken = function () {
        var _this = this;
        this.isProcessing = false;
        this._fuseProgressiveBarService.show();
        var params = this._sessionService.getGoogleAccountToken();
        var sub = this._addAdwordsAccountsService.updateAccessTokenRefreshToken(params)
            .subscribe(function (res) {
            _this._fuseProgressiveBarService.hide();
            _this.isProcessing = false;
            _this.getAccountsFromGoogleAds();
        }, function (error) {
            _this._dialogService._openErrorDialog(error.error, true);
            _this._fuseProgressiveBarService.hide();
            _this.isAccountListShown = false;
            _this.isProcessing = false;
        });
        this.subscriptions.push(sub);
    };
    AddAdwordsAccountsComponent.prototype.getAccountsFromGoogleAds = function () {
        var _this = this;
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        var sub = this._addAdwordsAccountsService.getAccountsFromGoogleAds()
            .subscribe(function (res) {
            _this.adsAccounts = res.data.googleAds;
            _this.adsAccounts = (_this.adsAccounts || []).map(function (item) {
                item.googleAdId = _this._adsAccountIdPipe.transform(item.googleAdId);
                return item;
            });
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTableDataSource"](_this.adsAccounts);
            _this._fuseProgressiveBarService.hide();
            _this.isAccountListShown = true;
            _this.isProcessing = false;
        }, function (error) {
            _this.isAccountListShown = false;
            _this.isProcessing = false;
            _this._fuseProgressiveBarService.hide();
            if (error.error.messages[0] === 'unauthorized_client') {
                _this.loginByGG();
            }
            else {
                _this._dialogService._openErrorDialog(error.error, true);
            }
        });
        this.subscriptions.push(sub);
    };
    AddAdwordsAccountsComponent.prototype.generateConnectAccountByEmailParam = function () {
        return { adWordId: this.selectedAccount.replace(/\D/g, '') };
    };
    AddAdwordsAccountsComponent.prototype.connectAccountByEmail = function () {
        var _this = this;
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        var param = this.generateConnectAccountByEmailParam();
        var sub = this._addAdwordsAccountsService.addAdwordsAccountByEmail(param)
            .subscribe(function (res) {
            _this._fuseProgressiveBarService.hide();
            _this._dialogService._openSuccessDialog({ messages: ['Kết nối tài khoản Google Ads thành công'] });
            _this.connectedAccountId = res.data.account._id;
            _this.connectedAdsId = _this._adsAccountIdPipe.transform(res.data.account.adsId);
            _this._sessionService.setActiveGoogleAdsAccount(_this.connectedAccountId, _this.connectedAdsId);
            _this._sessionService.notifyNewAccountWasAdded();
            _this._fuseNavigationService.reloadNavigation();
            _this._router.navigateByUrl('/gan-tracking/chien-dich');
        }, function (error) {
            _this.isConnected = false;
            _this.connectedAccountId = '';
            _this.connectedAdsId = '';
            _this._fuseProgressiveBarService.hide();
            if (error.error.messages[0] === 'Không xác định được lỗi') {
                _this._dialogService._openErrorDialog({
                    messages: [
                        "Kh\u00F4ng th\u1EC3 g\u1EAFn tracking v\u00E0o t\u00E0i kho\u1EA3n n\u00E0y!<br> \nC\u00F3 th\u1EC3 b\u1EA1n ch\u01B0a k\u1EBFt n\u1ED1i Google Ads v\u1EDBi Appnet Technology <br> \nho\u1EB7c t\u00E0i kho\u1EA3n n\u00E0y \u0111\u00E3 t\u1ED3n t\u1EA1i trong h\u1EC7 th\u1ED1ng.\n                "
                    ]
                }, true);
            }
            else {
                _this._dialogService._openErrorDialog(error.error);
            }
            _this.isProcessing = false;
        });
        this.subscriptions.push(sub);
    };
    AddAdwordsAccountsComponent.prototype.completeAccountConnection = function () {
        var _this = this;
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        var sub = this._addAdwordsAccountsService.checkAccountAcceptance({
            adWordId: this.connectedAdsId.replace(/\D+/g, '')
        })
            .subscribe(function (res) {
            if (res.data.isConnected) {
                _this._dialogService._openSuccessDialog({ messages: ['Kết nối tài khoản Google Ads thành công'] });
                setTimeout(function () {
                    _this._fuseProgressiveBarService.hide();
                    _this._router.navigateByUrl('/gan-tracking/chien-dich');
                }, 2000);
            }
            else {
                _this.isProcessing = false;
                _this._fuseProgressiveBarService.hide();
                _this._dialogService._openErrorDialog({ messages: ['Hoàn tất kết nối tài khoản Google Ads thất bại.'] }, true);
            }
        }, function (error) {
            _this._fuseProgressiveBarService.hide();
            _this._dialogService._openErrorDialog({ messages: ['Tài khoản Google Ads không tồn tại'] });
            _this.isProcessing = false;
        });
        this.subscriptions.push(sub);
    };
    AddAdwordsAccountsComponent.prototype.post = function () {
        var _this = this;
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        var params = this.generatePostObject();
        var sub = this._addAdwordsAccountsService.addAdwordsAccount(params)
            .subscribe(function (res) {
            _this._fuseProgressiveBarService.hide();
            _this.connectedAccountId = res.data.account._id;
            _this.connectedAdsId = _this._adsAccountIdPipe.transform(res.data.account.adsId);
            if (res.data.isRefresh === true) {
                _this._dialogService._openSuccessDialog({ messages: ['Kết nối tài khoản Google Ads thành công'] });
                _this._sessionService.setActiveGoogleAdsAccount(_this.connectedAccountId, _this.connectedAdsId);
                _this._sessionService.notifyNewAccountWasAdded();
                _this._fuseNavigationService.reloadNavigation();
                _this._router.navigateByUrl('/danh-sach-tai-khoan');
                return;
            }
            else {
                _this._dialogService._openSuccessDialog({ messages: ['Kết nối tài khoản Google Ads thành công! Vui lòng thực hiện theo các bước tiếp theo để hoàn tất kết nối.'] });
            }
            _this.isConnected = true;
            _this._sessionService.setActiveGoogleAdsAccount(_this.connectedAccountId, _this.connectedAdsId);
            _this._sessionService.notifyNewAccountWasAdded();
            _this._fuseNavigationService.reloadNavigation();
            if (_this.isAccountListShown === true) {
                _this.isAccountListShown = false;
            }
            _this.isProcessing = false;
        }, function (error) {
            _this.isConnected = false;
            _this.connectedAccountId = '';
            _this.connectedAdsId = '';
            _this._fuseProgressiveBarService.hide();
            _this._dialogService._openErrorDialog(error.error);
            _this.isProcessing = false;
        });
        this.subscriptions.push(sub);
    };
    AddAdwordsAccountsComponent.prototype.onClickBtnSubmit = function () {
        this.onSubmit();
    };
    AddAdwordsAccountsComponent.prototype.initForm = function () {
        this.form = this.fb.group({
            adWordId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
    };
    AddAdwordsAccountsComponent.prototype.generatePostObject = function () {
        var params = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.form.value);
        // required
        params.adWordId = params.adWordId.replace(/\D/g, '');
        return params;
    };
    AddAdwordsAccountsComponent.prototype.onPressId = function (keyCode) {
        return (keyCode >= 48 && keyCode <= 57) || keyCode === 45;
    };
    AddAdwordsAccountsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-adwords-accounts',
            template: __webpack_require__(/*! raw-loader!./add-adwords-accounts.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/add-adwords-accounts/add-adwords-accounts.component.html"),
            styles: [__webpack_require__(/*! ./add-adwords-accounts.component.scss */ "./src/app/main/add-adwords-accounts/add-adwords-accounts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_3__["FuseProgressBarService"],
            _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"],
            _fuse_components_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_8__["FuseNavigationService"],
            _add_adwords_accounts_service__WEBPACK_IMPORTED_MODULE_6__["AddAdwordsAccountsService"],
            app_shared_services_ads_accounts_adwords_accounts_service__WEBPACK_IMPORTED_MODULE_13__["AdwordsAccountsService"],
            app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], AddAdwordsAccountsComponent);
    return AddAdwordsAccountsComponent;
}(_shared_components_base_editable_form_base_component__WEBPACK_IMPORTED_MODULE_2__["EditableFormBaseComponent"]));



/***/ }),

/***/ "./src/app/main/add-adwords-accounts/add-adwords-accounts.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main/add-adwords-accounts/add-adwords-accounts.module.ts ***!
  \**************************************************************************/
/*! exports provided: AddAdwordsAccountsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAdwordsAccountsModule", function() { return AddAdwordsAccountsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_adwords_accounts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-adwords-accounts.component */ "./src/app/main/add-adwords-accounts/add-adwords-accounts.component.ts");
/* harmony import */ var _add_adwords_accounts_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-adwords-accounts-routing.module */ "./src/app/main/add-adwords-accounts/add-adwords-accounts-routing.module.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _shared_components_input_text_input_text_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/input-text/input-text.module */ "./src/app/shared/components/input-text/input-text.module.ts");
/* harmony import */ var _shared_components_input_number_input_number_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/input-number/input-number.module */ "./src/app/shared/components/input-number/input-number.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _add_adwords_accounts_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-adwords-accounts.service */ "./src/app/main/add-adwords-accounts/add-adwords-accounts.service.ts");











var AddAdwordsAccountsModule = /** @class */ (function () {
    function AddAdwordsAccountsModule() {
    }
    AddAdwordsAccountsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_add_adwords_accounts_component__WEBPACK_IMPORTED_MODULE_3__["AddAdwordsAccountsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _add_adwords_accounts_routing_module__WEBPACK_IMPORTED_MODULE_4__["AddAdwordsAccountsRoutingModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__["FuseSharedModule"],
                _shared_components_input_text_input_text_module__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _shared_components_input_number_input_number_module__WEBPACK_IMPORTED_MODULE_8__["InputNumberModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            ],
            providers: [
                _add_adwords_accounts_service__WEBPACK_IMPORTED_MODULE_10__["AddAdwordsAccountsService"]
            ]
        })
    ], AddAdwordsAccountsModule);
    return AddAdwordsAccountsModule;
}());



/***/ }),

/***/ "./src/app/main/add-adwords-accounts/add-adwords-accounts.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/main/add-adwords-accounts/add-adwords-accounts.service.ts ***!
  \***************************************************************************/
/*! exports provided: AddAdwordsAccountsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAdwordsAccountsService", function() { return AddAdwordsAccountsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/constants/api.constant */ "./src/app/shared/constants/api.constant.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AddAdwordsAccountsService = /** @class */ (function () {
    function AddAdwordsAccountsService(_http) {
        this._http = _http;
    }
    AddAdwordsAccountsService.prototype.addAdwordsAccount = function (param) {
        return this._http.post(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.addAccount, param);
    };
    AddAdwordsAccountsService.prototype.addAdwordsAccountByEmail = function (param) {
        return this._http.post(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.addAccountByEmail, param);
    };
    AddAdwordsAccountsService.prototype.getAccounts = function () {
        return this._http.get(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.getAccounts);
    };
    AddAdwordsAccountsService.prototype.getAdwordsAccountDetail = function (accountId) {
        var url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.getAwordsAccountDetail.replace('{account_id}', accountId);
        return this._http.get(url);
    };
    AddAdwordsAccountsService.prototype.checkAccountAcceptance = function (params) {
        return this._http.post(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.checkAccountAcceptance, params);
    };
    AddAdwordsAccountsService.prototype.getAccountsFromGoogleAds = function () {
        return this._http.get(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.getAccountsFromGoogleAds);
    };
    AddAdwordsAccountsService.prototype.checkRefreshToken = function () {
        return this._http.get(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.checkRefreshToken);
    };
    AddAdwordsAccountsService.prototype.updateAccessTokenRefreshToken = function (params) {
        return this._http.put(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.updateAccessTokenRefreshToken, params);
    };
    AddAdwordsAccountsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AddAdwordsAccountsService);
    return AddAdwordsAccountsService;
}());



/***/ })

}]);
//# sourceMappingURL=main-add-adwords-accounts-add-adwords-accounts-module-es5.js.map