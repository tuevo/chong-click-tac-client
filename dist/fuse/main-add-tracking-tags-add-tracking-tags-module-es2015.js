(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-add-tracking-tags-add-tracking-tags-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/add-tracking-tags/select-campaigns/select-campaigns.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/add-tracking-tags/select-campaigns/select-campaigns.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"title1\">\n    GẮN TRACKING THEO DÕI CHIẾN DỊCH TÀI KHOẢN <span\n      style=\"color: yellow; font-weight: bolder\">{{_sessionService.activeAdsAccountId}}</span>\n  </div>\n\n  <div class=\"inner\">\n    <p class=\"usage\">\n      <b>Công dụng của Tracking:</b> Tracking là đoạn mã nhỏ, tích hợp vào trong quảng cáo Google Ads để theo dõi hoạt\n      động\n      bấm quảng cáo.\n    </p>\n\n    <div class=\"tracking-example\">\n      <img mat-card-image src=\"../../../../assets/images/huong-dan-tracking.jpg\" alt=\"Photo about tracking\">\n    </div>\n\n    <p class=\"title2\">\n      <span style=\"color: #039be5\">[GẮN MÃ]</span> CHỌN CHIẾN DỊCH CẦN GẮN MÃ <span\n        style=\"color: #039be5; font-weight: bold\">(NÊN CHỌN TẤT CẢ)</span>\n    </p>\n\n    <form class=\"form\">\n\n      <mat-form-field *ngIf=\"campaignList.length > 0 && !isProcessing\">\n        <mat-icon matPrefix style=\"font-size: 20px; color: rgba(0,0,0,0.6);\">search</mat-icon>\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Tìm kiếm\">\n      </mat-form-field>\n\n      <div class=\"table-wrapper\" *ngIf=\"campaignList.length > 0 && !isProcessing\">\n\n        <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n          <ng-container matColumnDef=\"order\">\n            <mat-header-cell *matHeaderCellDef> # </mat-header-cell>\n            <mat-cell *matCellDef=\"let i = index\"> {{i+1}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"id\">\n            <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.id}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"name\">\n            <mat-header-cell *matHeaderCellDef> Chiến dịch </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"status\">\n            <mat-header-cell *matHeaderCellDef> Trạng thái </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <span *ngIf=\"element.status === 'Hoạt động'\"\n                style=\"color: #039be5; font-weight: bold\">{{element.status}}</span>\n              <span *ngIf=\"element.status !== 'Hoạt động'\"\n                style=\"color: silver; font-weight: bold\">{{element.status}}</span>\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"tracking\">\n            <mat-header-cell *matHeaderCellDef>\n              <p>\n                <mat-checkbox (change)=\"onSelectAllCampaign($event)\" style=\"margin-right: 5px\"\n                  matTooltip=\"Chọn/ Bỏ chọn tất cả\" [checked]=\"selectedCampaigns.length === numberOfEnableCampaigns\">\n                </mat-checkbox> Gắn mã\n              </p>\n            </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n\n              <mat-checkbox (change)=\"onSelectCampaign($event, element.id)\"\n                [checked]=\"selectedCampaigns.includes(element.id)\" *ngIf=\"element.status === 'Hoạt động'\">\n              </mat-checkbox>\n\n              <mat-checkbox *ngIf=\"element.status !== 'Hoạt động'\" disabled></mat-checkbox>\n            </mat-cell>\n          </ng-container>\n\n          <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n\n      </div>\n\n      <p style=\"text-align: center\" *ngIf=\"campaignList.length > 0 && !isProcessing\">\n        <button (click)=\"addCampaignTracking()\" mat-raised-button class=\"submit-button\" [disabled]=\"isProcessing\">\n          <mat-icon>location_searching</mat-icon> GẮN MÃ TRACKING\n        </button>\n      </p>\n\n      <p class=\"notification\" *ngIf=\"campaignList.length === 0 && !isProcessing\">\n        Chúng tôi không tìm thấy chiến dịch nào trên tài khoản Google Ads này. Vui lòng <a (click)=\"getOriginalCampaigns()\"\n          class=\"link-button\">thử lại</a> hoặc <a class=\"link-button\" (click)=\"showSupportInfoDialog()\">liên\n          hệ</a> với hỗ trợ viên để được giúp đỡ.\n      </p>\n\n    </form>\n  </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/add-tracking-tags/tracking-website/tracking-website.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/add-tracking-tags/tracking-website/tracking-website.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"title1\">\n    GẮN MÃ TRACKING VÀO WEBSITE TÀI KHOẢN <span style=\"color: yellow\">{{adsId}}</span>\n  </div>\n\n  <div class=\"inner\">\n    <p class=\"info\">\n      <b>Tại sao cần gắn mã:</b> Hệ thống đưa vào mã tracking để phát hiện số điện thoại truy cập vào website của bạn.\n      Bạn\n      có thể bỏ mã vào bất cứ vị trí nào trong website. Tuy nhiên tốt nhất hãy bỏ mã vào trong\n      <span class=\"hightline\">&lt;head&gt;[mã tracking]&lt;/head&gt;</span>\n    </p>\n\n    <div style=\"padding-top: 10px\">\n      <span class=\"step\"><b>Bước 1:</b> Copy mã tracking</span>\n      <div fxLayout=\"row\" style=\"padding-top: 10px\">\n        <input class=\"key\" type=\"text\" #inputKey\n          value='&lt;script type=\"text/javascript\" src=\"{{hostTracking}}?key={{key}}\"&gt;&lt;/script&gt;' readonly>\n        <button mat-icon-button (click)=\"copyKey(inputKey.value)\" class=\"copy-button\" matTooltip=\"Nhấn vào để sao chép\">\n          <mat-icon style=\"font-size: 20px\">file_copy</mat-icon>\n        </button>\n      </div>\n      <p style=\"padding-top: 10px; line-height: 30px\">\n        <span class=\"step\"><b>Bước 2:</b> Mở các website của bạn và gắn mã vào trong thẻ\n          <span class=\"hightline\">&lt;head&gt;[mã tracking]&lt;/head&gt;</span></span>\n      </p>\n      <div style=\"padding-top: 10px\">\n        <span class=\"step\"><b>Bước 3:</b> Kiểm tra mã</span>\n        <p>\n          <button mat-raised-button color=\"accent\" style=\"border-radius: 0\" (click)=\"checkWebsiteTracking()\">\n            BẤM ĐỂ KIỂM TRA MÃ\n          </button>\n        </p>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/main/add-tracking-tags/add-tracking-tags-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/main/add-tracking-tags/add-tracking-tags-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: AddTrackingTagsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTrackingTagsRoutingModule", function() { return AddTrackingTagsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _select_campaigns_select_campaigns_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-campaigns/select-campaigns.component */ "./src/app/main/add-tracking-tags/select-campaigns/select-campaigns.component.ts");
/* harmony import */ var _tracking_website_tracking_website_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tracking-website/tracking-website.component */ "./src/app/main/add-tracking-tags/tracking-website/tracking-website.component.ts");
/* harmony import */ var app_shared_services_guard_account_acceptance_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/guard/account-acceptance-guard.service */ "./src/app/shared/services/guard/account-acceptance-guard.service.ts");






let AddTrackingTagsRoutingModule = class AddTrackingTagsRoutingModule {
};
AddTrackingTagsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: 'chien-dich',
                    pathMatch: 'full',
                    component: _select_campaigns_select_campaigns_component__WEBPACK_IMPORTED_MODULE_3__["SelectCampaignsComponent"]
                },
                {
                    path: 'website/:accountId',
                    pathMatch: 'full',
                    component: _tracking_website_tracking_website_component__WEBPACK_IMPORTED_MODULE_4__["TrackingWebsiteComponent"],
                    canActivate: [app_shared_services_guard_account_acceptance_guard_service__WEBPACK_IMPORTED_MODULE_5__["AccountAcceptanceGuardService"]]
                },
            ])],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AddTrackingTagsRoutingModule);



/***/ }),

/***/ "./src/app/main/add-tracking-tags/add-tracking-tags.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/main/add-tracking-tags/add-tracking-tags.module.ts ***!
  \********************************************************************/
/*! exports provided: AddTrackingTagsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTrackingTagsModule", function() { return AddTrackingTagsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _add_tracking_tags_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-tracking-tags-routing.module */ "./src/app/main/add-tracking-tags/add-tracking-tags-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _shared_components_input_text_input_text_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/components/input-text/input-text.module */ "./src/app/shared/components/input-text/input-text.module.ts");
/* harmony import */ var _shared_components_input_textarea_input_textarea_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/components/input-textarea/input-textarea.module */ "./src/app/shared/components/input-textarea/input-textarea.module.ts");
/* harmony import */ var _shared_components_select_text_select_text_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/components/select-text/select-text.module */ "./src/app/shared/components/select-text/select-text.module.ts");
/* harmony import */ var _shared_components_checkbox_group_checkbox_group_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/components/checkbox-group/checkbox-group.module */ "./src/app/shared/components/checkbox-group/checkbox-group.module.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _select_campaigns_select_campaigns_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./select-campaigns/select-campaigns.component */ "./src/app/main/add-tracking-tags/select-campaigns/select-campaigns.component.ts");
/* harmony import */ var _add_tracking_tags_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./add-tracking-tags.service */ "./src/app/main/add-tracking-tags/add-tracking-tags.service.ts");
/* harmony import */ var _tracking_website_tracking_website_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tracking-website/tracking-website.component */ "./src/app/main/add-tracking-tags/tracking-website/tracking-website.component.ts");





















let AddTrackingTagsModule = class AddTrackingTagsModule {
};
AddTrackingTagsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_select_campaigns_select_campaigns_component__WEBPACK_IMPORTED_MODULE_18__["SelectCampaignsComponent"], _tracking_website_tracking_website_component__WEBPACK_IMPORTED_MODULE_20__["TrackingWebsiteComponent"]],
        imports: [
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
            _shared_components_checkbox_group_checkbox_group_module__WEBPACK_IMPORTED_MODULE_16__["CheckboxGroupModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _shared_components_input_text_input_text_module__WEBPACK_IMPORTED_MODULE_13__["InputTextModule"],
            _shared_components_input_textarea_input_textarea_module__WEBPACK_IMPORTED_MODULE_14__["InputTextareaModule"],
            _shared_components_select_text_select_text_module__WEBPACK_IMPORTED_MODULE_15__["SelectTextModule"],
            _fuse_shared_module__WEBPACK_IMPORTED_MODULE_17__["FuseSharedModule"],
            _add_tracking_tags_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddTrackingTagsRoutingModule"]
        ],
        entryComponents: [
        // CheckWebsiteTrackingDialogComponent
        ],
        exports: [
        // CheckWebsiteTrackingDialogComponent
        ],
        providers: [_add_tracking_tags_service__WEBPACK_IMPORTED_MODULE_19__["AddTrackingTagsService"]]
    })
], AddTrackingTagsModule);



/***/ }),

/***/ "./src/app/main/add-tracking-tags/select-campaigns/select-campaigns.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/add-tracking-tags/select-campaigns/select-campaigns.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n}\n.container .title1 {\n  padding: 94px 60px 27px 30px;\n  background-color: #000000 !important;\n  background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%) !important;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n}\n.container .inner {\n  padding: 15px 30px 15px 30px;\n}\n.container .inner .title2 {\n  margin-top: 50px;\n  font-weight: bold;\n  text-align: justify;\n}\n.container .inner .usage {\n  text-align: justify;\n  padding-top: 20px;\n}\n.container .inner .link-button {\n  color: #039be5;\n  cursor: pointer;\n  text-decoration: underline !important;\n}\n.container .inner .tracking-example {\n  margin-top: 20px;\n}\n.container .inner .tracking-example img {\n  width: 100%;\n  box-shadow: 1px 1px 4px silver;\n}\n.container .inner .table-title {\n  font-weight: bold;\n  text-align: center;\n  padding: 10px;\n  padding-top: 20px;\n}\n.container .inner .notification {\n  display: table;\n  margin: 0 auto;\n  text-align: center;\n  background-color: #eee;\n  width: 80%;\n  margin-top: 30px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-left: 5px solid darkorange;\n}\n.container .inner .table-wrapper {\n  max-height: 500px;\n  box-shadow: 1px 1px 4px silver;\n  background-color: white;\n  overflow: auto;\n}\n.container .inner .table-wrapper mat-table {\n  width: 100%;\n  box-shadow: none;\n}\n.container .inner .table-wrapper mat-row {\n  transition: 0.2s;\n}\n.container .inner .table-wrapper mat-row:hover {\n  background-color: rgba(3, 155, 229, 0.1);\n}\n.container .inner .table-wrapper mat-header-cell:nth-child(1),\n.container .inner .table-wrapper mat-cell:nth-child(1) {\n  flex: 0 0 10%;\n}\n.container .inner .table-wrapper mat-header-cell:nth-child(3),\n.container .inner .table-wrapper mat-cell:nth-child(3) {\n  flex: 0 0 40%;\n}\n.container .inner .table-wrapper mat-header-cell:nth-child(5),\n.container .inner .table-wrapper mat-cell:nth-child(5) {\n  flex: 0 0 20%;\n  padding-left: 20px;\n}\n.container .inner .table-wrapper mat-header-cell {\n  background: #039be5;\n  color: white;\n}\n.container .inner .table-wrapper mat-row,\n.container .inner .table-wrapper mat-header-row {\n  min-width: 1000px;\n  width: 100%;\n}\n.container .inner .submit-button {\n  margin: 0 auto;\n  margin-top: 10px;\n  background-color: #44b543;\n  color: white;\n}\n.container .inner .enable-status {\n  color: #039be5;\n}\n.container .inner .disabled-status {\n  color: silver;\n}\n@media screen and (max-width: 600px) {\n  .container .inner {\n    padding: 15px;\n  }\n  .container .inner .submit-button {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2FkZC10cmFja2luZy10YWdzL3NlbGVjdC1jYW1wYWlnbnMvc2VsZWN0LWNhbXBhaWducy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9hZGQtdHJhY2tpbmctdGFncy9zZWxlY3QtY2FtcGFpZ25zL3NlbGVjdC1jYW1wYWlnbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7QURDRTtFQUNFLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSw2RUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjtBREVFO0VBQ0UsNEJBQUE7QUNBSjtBREVJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDQU47QURHSTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUNETjtBRElJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxxQ0FBQTtBQ0ZOO0FES0k7RUFDRSxnQkFBQTtBQ0hOO0FES007RUFDRSxXQUFBO0VBQ0EsOEJBQUE7QUNIUjtBRE9JO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ0xOO0FEUUk7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUNBQUE7QUNOTjtBRFNJO0VBQ0UsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ1BOO0FEU007RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNQUjtBRFVNO0VBQ0UsZ0JBQUE7QUNSUjtBRFdNO0VBQ0Usd0NBQUE7QUNUUjtBRFlNOztFQUVFLGFBQUE7QUNWUjtBRGFNOztFQUVFLGFBQUE7QUNYUjtBRGNNOztFQUVFLGFBQUE7RUFDQSxrQkFBQTtBQ1pSO0FEZU07RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNiUjtBRGdCTTs7RUFFRSxpQkFBQTtFQUNBLFdBQUE7QUNkUjtBRGtCSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ2hCTjtBRG1CSTtFQUNFLGNBQUE7QUNqQk47QURvQkk7RUFDRSxhQUFBO0FDbEJOO0FEdUJBO0VBRUk7SUFDRSxhQUFBO0VDckJKO0VEdUJJO0lBQ0UsZUFBQTtFQ3JCTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9hZGQtdHJhY2tpbmctdGFncy9zZWxlY3QtY2FtcGFpZ25zL3NlbGVjdC1jYW1wYWlnbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgLnRpdGxlMSB7XG4gICAgcGFkZGluZzogOTRweCA2MHB4IDI3cHggMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0N2RlZywgIzAwMDAwMCAwJSwgIzJjM2U1MCA3NCUpICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5pbm5lciB7XG4gICAgcGFkZGluZzogMTVweCAzMHB4IDE1cHggMzBweDtcblxuICAgIC50aXRsZTIge1xuICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICB9XG5cbiAgICAudXNhZ2Uge1xuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIH1cblxuICAgIC5saW5rLWJ1dHRvbiB7XG4gICAgICBjb2xvcjogIzAzOWJlNTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnRyYWNraW5nLWV4YW1wbGUge1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcblxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHNpbHZlcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAudGFibGUtdGl0bGUge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgfVxuXG4gICAgLm5vdGlmaWNhdGlvbiB7XG4gICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgZGFya29yYW5nZTtcbiAgICB9XG5cbiAgICAudGFibGUtd3JhcHBlciB7XG4gICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHNpbHZlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgICAgIG1hdC10YWJsZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgfVxuXG4gICAgICBtYXQtcm93IHtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAgIH1cblxuICAgICAgbWF0LXJvdzpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMywgMTU1LCAyMjksIDAuMSk7XG4gICAgICB9XG5cbiAgICAgIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMSksXG4gICAgICBtYXQtY2VsbDpudGgtY2hpbGQoMSkge1xuICAgICAgICBmbGV4OiAwIDAgMTAlO1xuICAgICAgfVxuXG4gICAgICBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDMpLFxuICAgICAgbWF0LWNlbGw6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgZmxleDogMCAwIDQwJTtcbiAgICAgIH1cblxuICAgICAgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCg1KSxcbiAgICAgIG1hdC1jZWxsOm50aC1jaGlsZCg1KSB7XG4gICAgICAgIGZsZXg6IDAgMCAyMCU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgIH1cblxuICAgICAgbWF0LWhlYWRlci1jZWxsIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzAzOWJlNTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuXG4gICAgICBtYXQtcm93LFxuICAgICAgbWF0LWhlYWRlci1yb3cge1xuICAgICAgICBtaW4td2lkdGg6IDEwMDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnN1Ym1pdC1idXR0b24ge1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0YjU0MztcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAuZW5hYmxlLXN0YXR1cyB7XG4gICAgICBjb2xvcjogIzAzOWJlNTtcbiAgICB9XG5cbiAgICAuZGlzYWJsZWQtc3RhdHVzIHtcbiAgICAgIGNvbG9yOiBzaWx2ZXI7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIC5pbm5lciB7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuXG4gICAgICAuc3VibWl0LWJ1dHRvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgLnRpdGxlMSB7XG4gIHBhZGRpbmc6IDk0cHggNjBweCAyN3B4IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0N2RlZywgIzAwMDAwMCAwJSwgIzJjM2U1MCA3NCUpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLmlubmVyIHtcbiAgcGFkZGluZzogMTVweCAzMHB4IDE1cHggMzBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50aXRsZTIge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbi5jb250YWluZXIgLmlubmVyIC51c2FnZSB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmxpbmstYnV0dG9uIHtcbiAgY29sb3I6ICMwMzliZTU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50cmFja2luZy1leGFtcGxlIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50cmFja2luZy1leGFtcGxlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDRweCBzaWx2ZXI7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5ub3RpZmljYXRpb24ge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIGRhcmtvcmFuZ2U7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciB7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDRweCBzaWx2ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LXJvdyB7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzLCAxNTUsIDIyOSwgMC4xKTtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMSksXG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtY2VsbDpudGgtY2hpbGQoMSkge1xuICBmbGV4OiAwIDAgMTAlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgzKSxcbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC1jZWxsOm50aC1jaGlsZCgzKSB7XG4gIGZsZXg6IDAgMCA0MCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDUpLFxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LWNlbGw6bnRoLWNoaWxkKDUpIHtcbiAgZmxleDogMCAwIDIwJTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LWhlYWRlci1jZWxsIHtcbiAgYmFja2dyb3VuZDogIzAzOWJlNTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LXJvdyxcbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC1oZWFkZXItcm93IHtcbiAgbWluLXdpZHRoOiAxMDAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnN1Ym1pdC1idXR0b24ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0YjU0MztcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmVuYWJsZS1zdGF0dXMge1xuICBjb2xvcjogIzAzOWJlNTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5kaXNhYmxlZC1zdGF0dXMge1xuICBjb2xvcjogc2lsdmVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIC5pbm5lciB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuICAuY29udGFpbmVyIC5pbm5lciAuc3VibWl0LWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/main/add-tracking-tags/select-campaigns/select-campaigns.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/main/add-tracking-tags/select-campaigns/select-campaigns.component.ts ***!
  \***************************************************************************************/
/*! exports provided: SelectCampaignsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCampaignsComponent", function() { return SelectCampaignsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@fuse/components/progress-bar/progress-bar.service */ "./src/@fuse/components/progress-bar/progress-bar.service.ts");
/* harmony import */ var _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/components/base/page-base.component */ "./src/app/shared/components/base/page-base.component.ts");
/* harmony import */ var _add_tracking_tags_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../add-tracking-tags.service */ "./src/app/main/add-tracking-tags/add-tracking-tags.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");










let SelectCampaignsComponent = class SelectCampaignsComponent extends app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_5__["PageBaseComponent"] {
    constructor(_fuseProgressiveBarService, _dialogService, _sessionService, _addTrackingTagsService, _router) {
        super();
        this._fuseProgressiveBarService = _fuseProgressiveBarService;
        this._dialogService = _dialogService;
        this._sessionService = _sessionService;
        this._addTrackingTagsService = _addTrackingTagsService;
        this._router = _router;
        this.displayedColumns = ['order', 'id', 'name', 'status', 'tracking'];
        this.isProcessing = false;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](this.campaignList);
        this.campaignList = [];
        this.selectedCampaigns = [];
        this.trackingCampaignList = [];
    }
    ngOnInit() {
        const sub = this._sessionService.getAccountId()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])())
            .subscribe((accountId) => {
            if (accountId) {
                this.getOriginalCampaigns();
            }
        });
        this.subscriptions.push(sub);
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    onSelectAllCampaign(event) {
        if (event.checked) {
            this.selectedCampaigns = this.campaignList.map(item => item.id);
            this.selectedCampaigns = this.selectedCampaigns.filter(id => this.isEnableCampaign(id));
        }
        else {
            this.selectedCampaigns = [];
        }
    }
    isEnableCampaign(campaignId) {
        return this.campaignList.find(item => campaignId === item.id && item.status === 'Hoạt động') !== undefined;
    }
    onSelectCampaign(event, campaignId) {
        if (event.checked) {
            if (!this.selectedCampaigns.includes(campaignId)) {
                this.selectedCampaigns.push(campaignId);
            }
        }
        else {
            this.selectedCampaigns = this.selectedCampaigns.filter(item => item !== campaignId);
        }
    }
    addCampaignTracking() {
        let sentCampaigns = [];
        for (const campagin of this.campaignList)
            if (this.selectedCampaigns.indexOf(campagin.id) >= 0)
                sentCampaigns.push({
                    campaignId: campagin.id,
                    campaignName: campagin.name || ''
                });
        const params = {
            campaigns: sentCampaigns
        };
        this._fuseProgressiveBarService.show();
        this.isProcessing = true;
        const sub = this._addTrackingTagsService.addCampaignTracking(params)
            .subscribe((res) => {
            //this.getOriginalCampaigns();
            setTimeout(() => {
                this._dialogService._openSuccessDialog(res);
                this._fuseProgressiveBarService.hide();
                this.isProcessing = false;
                this._router.navigateByUrl(`/gan-tracking/website/${this._sessionService.activeAccountId}`);
            }, 0);
        }, (error) => {
            this._fuseProgressiveBarService.hide();
            this._dialogService._openErrorDialog(error.error);
            this.isProcessing = false;
        });
        this.subscriptions.push(sub);
    }
    getOriginalCampaigns() {
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        const sub = this._addTrackingTagsService.getOriginalCampaigns()
            .subscribe(res => {
            this.campaignList = res.data.campaignList;
            const sub1 = this._addTrackingTagsService.getTrackingCampaigns()
                .subscribe(res => {
                this.trackingCampaignList = res.data.campaignIds;
                this.selectedCampaigns = this.trackingCampaignList;
                this.checkAll = this.campaignList.every(item => this.selectedCampaigns.includes(item.id));
                this.numberOfEnableCampaigns = this.campaignList.filter(item => item.status === 'Hoạt động').length;
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](this.campaignList);
                setTimeout(() => {
                    this._fuseProgressiveBarService.hide();
                    this.isProcessing = false;
                }, 0);
            }, (error) => {
                this.trackingCampaignList = [];
                this._fuseProgressiveBarService.hide();
                this._dialogService._openErrorDialog(error.error);
                this.isProcessing = false;
            });
            this.subscriptions.push(sub1);
        }, (error) => {
            if (error.error.messages) {
                this.campaignList = [];
                this.trackingCampaignList = [];
                this._dialogService._openErrorDialog(error.error);
                this.isProcessing = false;
            }
            this._fuseProgressiveBarService.hide();
        });
        this.subscriptions.push(sub);
    }
    showSupportInfoDialog() {
        this._dialogService._openInfoDialog('Vui lòng liên hệ email ha@appnet.edu.vn để được hỗ trợ thêm.');
    }
};
SelectCampaignsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-campaigns',
        template: __webpack_require__(/*! raw-loader!./select-campaigns.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/add-tracking-tags/select-campaigns/select-campaigns.component.html"),
        styles: [__webpack_require__(/*! ./select-campaigns.component.scss */ "./src/app/main/add-tracking-tags/select-campaigns/select-campaigns.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_2__["FuseProgressBarService"],
        _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"],
        app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"],
        _add_tracking_tags_service__WEBPACK_IMPORTED_MODULE_6__["AddTrackingTagsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
], SelectCampaignsComponent);



/***/ }),

/***/ "./src/app/main/add-tracking-tags/tracking-website/tracking-website.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/add-tracking-tags/tracking-website/tracking-website.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n}\n.container .title1 {\n  padding: 94px 30px 27px 30px;\n  background-color: #000000 !important;\n  background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%) !important;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n}\n.container .inner {\n  padding: 15px 30px 15px 30px;\n}\n.container .inner .info {\n  line-height: 30px;\n}\n.container .inner .hightline {\n  padding: 5px;\n  padding-left: 10px;\n  padding-right: 10px;\n  border-radius: 5px;\n  background-color: #eee;\n  color: deeppink;\n  font-family: \"consolas\";\n}\n.container .inner .key {\n  padding: 10px;\n  padding-right: 0;\n  width: 100%;\n  border-right: 0;\n  border-radius: 3px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  font-family: \"consolas\";\n  background: #eee;\n  color: deeppink;\n}\n.container .inner .code {\n  font-family: \"consolas\";\n}\n.container .inner .copy-button {\n  border-radius: 0;\n  color: gray;\n  padding-left: 5px;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n  border: 0;\n  background: #eee;\n}\n@media screen and (max-width: 600px) {\n  .container .inner {\n    padding: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2FkZC10cmFja2luZy10YWdzL3RyYWNraW5nLXdlYnNpdGUvdHJhY2tpbmctd2Vic2l0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9hZGQtdHJhY2tpbmctdGFncy90cmFja2luZy13ZWJzaXRlL3RyYWNraW5nLXdlYnNpdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7QURDRTtFQUNFLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSw2RUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjtBREVFO0VBQ0UsNEJBQUE7QUNBSjtBREVJO0VBQ0UsaUJBQUE7QUNBTjtBREdJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDRE47QURRSTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFHQSxnQkFBQTtFQUNBLGVBQUE7QUNSTjtBRFdJO0VBQ0UsdUJBQUE7QUNUTjtBRFlJO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDVk47QURlQTtFQUVJO0lBQ0UsYUFBQTtFQ2JKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL2FkZC10cmFja2luZy10YWdzL3RyYWNraW5nLXdlYnNpdGUvdHJhY2tpbmctd2Vic2l0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcblxuICAudGl0bGUxIHtcbiAgICBwYWRkaW5nOiA5NHB4IDMwcHggMjdweCAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTQ3ZGVnLCAjMDAwMDAwIDAlLCAjMmMzZTUwIDc0JSkgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLmlubmVyIHtcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHggMTVweCAzMHB4O1xuXG4gICAgLmluZm8ge1xuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgfVxuXG4gICAgLmhpZ2h0bGluZSB7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICAgIGNvbG9yOiBkZWVwcGluaztcbiAgICAgIGZvbnQtZmFtaWx5OiAnY29uc29sYXMnXG4gICAgfVxuXG4gICAgLnN0ZXAge1xuICAgICAgXG4gICAgfVxuXG4gICAgLmtleSB7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnY29uc29sYXMnO1xuICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjgpO1xuICAgICAgLy8gY29sb3I6IHNreWJsdWU7XG4gICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgICAgY29sb3I6IGRlZXBwaW5rO1xuICAgIH1cblxuICAgIC5jb2RlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAnY29uc29sYXMnO1xuICAgIH1cblxuICAgIC5jb3B5LWJ1dHRvbiB7XG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgY29sb3I6IGdyYXk7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgLmlubmVyIHtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgfVxuICB9XG59XG4iLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFpbmVyIC50aXRsZTEge1xuICBwYWRkaW5nOiA5NHB4IDMwcHggMjdweCAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNDdkZWcsICMwMDAwMDAgMCUsICMyYzNlNTAgNzQlKSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC5pbm5lciB7XG4gIHBhZGRpbmc6IDE1cHggMzBweCAxNXB4IDMwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuaW5mbyB7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmhpZ2h0bGluZSB7XG4gIHBhZGRpbmc6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGNvbG9yOiBkZWVwcGluaztcbiAgZm9udC1mYW1pbHk6IFwiY29uc29sYXNcIjtcbn1cbi5jb250YWluZXIgLmlubmVyIC5rZXkge1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgZm9udC1mYW1pbHk6IFwiY29uc29sYXNcIjtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgY29sb3I6IGRlZXBwaW5rO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNvZGUge1xuICBmb250LWZhbWlseTogXCJjb25zb2xhc1wiO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNvcHktYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgY29sb3I6IGdyYXk7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3B4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIgLmlubmVyIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/main/add-tracking-tags/tracking-website/tracking-website.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/main/add-tracking-tags/tracking-website/tracking-website.component.ts ***!
  \***************************************************************************************/
/*! exports provided: TrackingWebsiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackingWebsiteComponent", function() { return TrackingWebsiteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/components/base/page-base.component */ "./src/app/shared/components/base/page-base.component.ts");
/* harmony import */ var app_shared_pipes_ads_account_id_ads_account_id_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/pipes/ads-account-id/ads-account-id.pipe */ "./src/app/shared/pipes/ads-account-id/ads-account-id.pipe.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _check_website_tracking_dialog_check_website_tracking_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../check-website-tracking-dialog/check-website-tracking-dialog.component */ "./src/app/main/add-tracking-tags/check-website-tracking-dialog/check-website-tracking-dialog.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _add_tracking_tags_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../add-tracking-tags.service */ "./src/app/main/add-tracking-tags/add-tracking-tags.service.ts");









let TrackingWebsiteComponent = class TrackingWebsiteComponent extends app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_3__["PageBaseComponent"] {
    constructor(_activatedRoute, _matDialog, _addTrackingTagsService) {
        super();
        this._activatedRoute = _activatedRoute;
        this._matDialog = _matDialog;
        this._addTrackingTagsService = _addTrackingTagsService;
        this.hostTracking = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].hostTracking;
        this.adsAccountIdPipe = new app_shared_pipes_ads_account_id_ads_account_id_pipe__WEBPACK_IMPORTED_MODULE_4__["AdsAccountIdPipe"]();
    }
    ngOnInit() {
        const sub = this._activatedRoute.params
            .subscribe((params) => {
            this.accountId = params.accountId;
            const detailSub = this._addTrackingTagsService.getAdwordsAccountDetail(this.accountId)
                .subscribe(res => {
                this.adsId = this.adsAccountIdPipe.transform(res.data.adsAccount.adsId);
                this.key = res.data.adsAccount.key;
            });
            this.subscriptions.push(detailSub);
        });
        this.subscriptions.push(sub);
    }
    copyKey(item) {
        document.addEventListener('copy', (e) => {
            e.clipboardData.setData('text/plain', (item));
            e.preventDefault();
            document.removeEventListener('copy', null);
        });
        document.execCommand('copy');
    }
    checkWebsiteTracking() {
        const dialogRef = this._matDialog
            .open(_check_website_tracking_dialog_check_website_tracking_dialog_component__WEBPACK_IMPORTED_MODULE_6__["CheckWebsiteTrackingDialogComponent"], {
            autoFocus: false,
            maxWidth: '100vw !important'
        });
        return dialogRef.componentInstance.account = { accountId: this.accountId, adsId: this.adsId };
    }
};
TrackingWebsiteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tracking-website',
        template: __webpack_require__(/*! raw-loader!./tracking-website.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/add-tracking-tags/tracking-website/tracking-website.component.html"),
        styles: [__webpack_require__(/*! ./tracking-website.component.scss */ "./src/app/main/add-tracking-tags/tracking-website/tracking-website.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
        _add_tracking_tags_service__WEBPACK_IMPORTED_MODULE_8__["AddTrackingTagsService"]])
], TrackingWebsiteComponent);



/***/ })

}]);
//# sourceMappingURL=main-add-tracking-tags-add-tracking-tags-module-es2015.js.map