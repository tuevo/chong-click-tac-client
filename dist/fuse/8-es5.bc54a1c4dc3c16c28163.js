(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{yPfU:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=function(){return function(){}}(),a=u("NcP4"),c=u("pMnS"),i=u("BHnd"),o=u("y4qS"),b=u("Ip0R"),r=u("Z5h4"),s=u("gIcY"),d=u("de3e"),g=u("v9Dh"),p=u("eDkP"),m=u("qAlS"),h=u("dWZg"),f=u("lLAP"),x=u("Fzqc"),C=u("ZYjt"),_=u("wFw1"),y=u("pIm3"),k=u("bujt"),v=u("UodH"),O=u("Mr+X"),P=u("SMsm"),M=u("FVSy"),I=u("mrSG"),w=u("k1t7"),S=u("H0VJ"),G=u("mZtN"),T=u("pZ6u"),N=u("Z0fI"),A=u("f3OE"),Q=u("ad02"),D=function(l){function n(n,u,t,e,a,c){var i=l.call(this)||this;return i._fuseProgressiveBarService=n,i._dialogService=u,i._sessionService=t,i._addTrackingTagsService=e,i._router=a,i._fuseSlashScreenService=c,i.displayedColumns=["order","id","name","status","tracking"],i.isProcessing=!1,i.campaignList=[],i.selectedCampaigns=[],i.trackingCampaignList=[],i}return I.c(n,l),n.prototype.ngOnInit=function(){var l=this,n=this._sessionService.getAccountId().pipe(Object(Q.a)()).subscribe(function(n){n&&l.getOriginalCampaigns()});this.subscriptions.push(n)},n.prototype.onSelectAllCampaign=function(l){this.selectedCampaigns=l.checked?this.campaignList.map(function(l){return l.id}):[]},n.prototype.onSelectCampaign=function(l,n){var u=this;l.checked?this.selectedCampaigns.includes(n)||this.selectedCampaigns.push(n):this.selectedCampaigns=this.selectedCampaigns.filter(function(l){return l!==n}),this.checkAll=this.campaignList.every(function(l){return u.selectedCampaigns.includes(l.id)})},n.prototype.addCampaignTracking=function(){var l=this,n={campaignIds:this.selectedCampaigns};this._fuseProgressiveBarService.show(),this.isProcessing=!0;var u=this._addTrackingTagsService.addCampaignTracking(n).subscribe(function(n){l.getOriginalCampaigns(),setTimeout(function(){l._dialogService._openSuccessDialog(n),l._fuseProgressiveBarService.hide(),l.isProcessing=!1},0)},function(n){l._fuseProgressiveBarService.hide(),l._dialogService._openErrorDialog(n.error),l.isProcessing=!1});this.subscriptions.push(u)},n.prototype.getOriginalCampaigns=function(){var l=this;this.isProcessing=!0,this._fuseProgressiveBarService.show();var n=this._addTrackingTagsService.getOriginalCampaigns().subscribe(function(n){l.campaignList=n.data.campaignList;var u=l._addTrackingTagsService.getTrackingCampaigns().subscribe(function(n){l.trackingCampaignList=n.data.campaignIds,l.selectedCampaigns=l.trackingCampaignList,l.checkAll=l.campaignList.every(function(n){return l.selectedCampaigns.includes(n.id)}),setTimeout(function(){l._fuseProgressiveBarService.hide(),l.isProcessing=!1},0)},function(n){l.trackingCampaignList=[],l._fuseProgressiveBarService.hide(),l._dialogService._openErrorDialog(n.error),l.isProcessing=!1});l.subscriptions.push(u)},function(n){n.error.messages&&(l.campaignList=[],l.trackingCampaignList=[],l._dialogService._openErrorDialog(n.error),l.isProcessing=!1),l._fuseProgressiveBarService.hide()});this.subscriptions.push(n)},n.prototype.showSupportInfoDialog=function(){this._dialogService._openInfoDialog("Vui l\xf2ng li\xean h\u1ec7 hotline 0984 66 80 60 ho\u1eb7c 0901 47 48 46 \u0111\u1ec3 \u0111\u01b0\u1ee3c h\u1ed7 tr\u1ee3 th\xeam.")},n}(T.a),L=u("ZYCi"),E=t.wb({encapsulation:0,styles:[[".container[_ngcontent-%COMP%]{padding:15px 30px;width:100%;box-shadow:2px 2px 5px silver}.container[_ngcontent-%COMP%]   .title1[_ngcontent-%COMP%]{padding:15px;background-color:#f5f5f5;color:gray;font-size:16px;font-weight:700;box-shadow:2px 2px 5px silver}.container[_ngcontent-%COMP%]   .title2[_ngcontent-%COMP%]{margin-top:50px;font-weight:700;text-align:justify}.container[_ngcontent-%COMP%]   .usage[_ngcontent-%COMP%]{text-align:justify;padding-top:20px}.container[_ngcontent-%COMP%]   .link-button[_ngcontent-%COMP%]{color:#1e90ff;cursor:pointer;text-decoration:underline!important}.container[_ngcontent-%COMP%]   .tracking-example[_ngcontent-%COMP%]{margin-top:20px}.container[_ngcontent-%COMP%]   .tracking-example[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;box-shadow:2px 2px 5px silver}.container[_ngcontent-%COMP%]   .table-title[_ngcontent-%COMP%]{font-weight:700;text-align:center;padding:20px 10px 10px}.container[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]{display:table;margin:20px auto 0;text-align:center;background-color:#eee;width:80%;padding-top:20px;padding-bottom:20px;border-left:5px solid #ff8c00}.container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]{height:500px;box-shadow:2px 2px 5px silver;background-color:#fff;overflow:auto}.container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-table[_ngcontent-%COMP%]{width:100%;box-shadow:none}.container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]{transition:.2s}.container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]:hover{background-color:#f5f5f5}.container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]:nth-child(1), .container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-header-cell[_ngcontent-%COMP%]:nth-child(1){flex:0 0 10%}.container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]:nth-child(3), .container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-header-cell[_ngcontent-%COMP%]:nth-child(3){flex:0 0 40%}.container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]:nth-child(5), .container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-header-cell[_ngcontent-%COMP%]:nth-child(5){flex:0 0 20%;padding-left:20px}.container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-header-row[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]{min-width:1000px;width:100%}.container[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]{margin:10px auto 0;background-color:#44b543;color:#fff}.container[_ngcontent-%COMP%]   .enable-status[_ngcontent-%COMP%]{color:#1e90ff}.container[_ngcontent-%COMP%]   .disabled-status[_ngcontent-%COMP%]{color:silver}@media screen and (max-width:600px){.container[_ngcontent-%COMP%]{padding:15px}.submit-button[_ngcontent-%COMP%]{font-size:12px}}"]],data:{}});function H(l){return t.Sb(0,[(l()(),t.yb(0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),t.xb(1,16384,null,0,i.e,[o.d,t.n],null,null),(l()(),t.Qb(-1,null,[" # "]))],null,null)}function R(l){return t.Sb(0,[(l()(),t.yb(0,0,null,null,2,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),t.xb(1,16384,null,0,i.a,[o.d,t.n],null,null),(l()(),t.Qb(2,null,[" "," "]))],null,function(l,n){l(n,2,0,n.context.index+1)})}function B(l){return t.Sb(0,[(l()(),t.yb(0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),t.xb(1,16384,null,0,i.e,[o.d,t.n],null,null),(l()(),t.Qb(-1,null,[" ID "]))],null,null)}function W(l){return t.Sb(0,[(l()(),t.yb(0,0,null,null,2,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),t.xb(1,16384,null,0,i.a,[o.d,t.n],null,null),(l()(),t.Qb(2,null,[" "," "]))],null,function(l,n){l(n,2,0,n.context.$implicit.id)})}function j(l){return t.Sb(0,[(l()(),t.yb(0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),t.xb(1,16384,null,0,i.e,[o.d,t.n],null,null),(l()(),t.Qb(-1,null,[" Chi\u1ebfn d\u1ecbch "]))],null,null)}function F(l){return t.Sb(0,[(l()(),t.yb(0,0,null,null,2,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),t.xb(1,16384,null,0,i.a,[o.d,t.n],null,null),(l()(),t.Qb(2,null,[" "," "]))],null,function(l,n){l(n,2,0,n.context.$implicit.name)})}function K(l){return t.Sb(0,[(l()(),t.yb(0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),t.xb(1,16384,null,0,i.e,[o.d,t.n],null,null),(l()(),t.Qb(-1,null,[" Tr\u1ea1ng th\xe1i "]))],null,null)}function U(l){return t.Sb(0,[(l()(),t.yb(0,0,null,null,1,"span",[["style","color: #039be5; font-weight: bold"]],null,null,null,null,null)),(l()(),t.Qb(1,null,["",""]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.status)})}function $(l){return t.Sb(0,[(l()(),t.yb(0,0,null,null,1,"span",[["style","color: silver; font-weight: bold"]],null,null,null,null,null)),(l()(),t.Qb(1,null,["",""]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.status)})}function z(l){return t.Sb(0,[(l()(),t.yb(0,0,null,null,5,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),t.xb(1,16384,null,0,i.a,[o.d,t.n],null,null),(l()(),t.nb(16777216,null,null,1,null,U)),t.xb(3,16384,null,0,b.m,[t.W,t.T],{ngIf:[0,"ngIf"]},null),(l()(),t.nb(16777216,null,null,1,null,$)),t.xb(5,16384,null,0,b.m,[t.W,t.T],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,3,0,"Ho\u1ea1t \u0111\u1ed9ng"===n.context.$implicit.status),l(n,5,0,"Ho\u1ea1t \u0111\u1ed9ng"!==n.context.$implicit.status)},null)}function q(l){return t.Sb(0,[(l()(),t.yb(0,0,null,null,7,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),t.xb(1,16384,null,0,i.e,[o.d,t.n],null,null),(l()(),t.yb(2,0,null,null,5,"p",[],null,null,null,null,null)),(l()(),t.yb(3,16777216,null,null,3,"mat-checkbox",[["class","mat-checkbox"],["matTooltip","Ch\u1ecdn/ B\u1ecf ch\u1ecdn t\u1ea5t c\u1ea3"],["style","margin-right: 5px"]],[[8,"id",0],[1,"tabindex",0],[2,"mat-checkbox-indeterminate",null],[2,"mat-checkbox-checked",null],[2,"mat-checkbox-disabled",null],[2,"mat-checkbox-label-before",null],[2,"_mat-animation-noopable",null]],[[null,"change"],[null,"longpress"],[null,"keydown"],[null,"touchend"]],function(l,n,u){var e=!0,a=l.component;return"longpress"===n&&(e=!1!==t.Ib(l,5).show()&&e),"keydown"===n&&(e=!1!==t.Ib(l,5)._handleKeydown(u)&&e),"touchend"===n&&(e=!1!==t.Ib(l,5)._handleTouchend()&&e),"change"===n&&(e=!1!==a.onSelectAllCampaign(u)&&e),e},r.b,r.a)),t.Nb(5120,null,s.n,function(l){return[l]},[d.b]),t.xb(5,212992,null,0,g.d,[p.c,t.n,m.b,t.W,t.E,h.a,f.c,f.h,g.b,[2,x.b],[2,g.a],[2,C.f]],{message:[0,"message"]},null),t.xb(6,8568832,null,0,d.b,[t.n,t.i,f.h,t.E,[8,null],[2,d.a],[2,_.a]],{checked:[0,"checked"]},{change:"change"}),(l()(),t.Qb(-1,null,[" G\u1eafn m\xe3 "]))],function(l,n){var u=n.component;l(n,5,0,"Ch\u1ecdn/ B\u1ecf ch\u1ecdn t\u1ea5t c\u1ea3"),l(n,6,0,u.campaignList.length===u.selectedCampaigns.length)},function(l,n){l(n,3,0,t.Ib(n,6).id,null,t.Ib(n,6).indeterminate,t.Ib(n,6).checked,t.Ib(n,6).disabled,"before"==t.Ib(n,6).labelPosition,"NoopAnimations"===t.Ib(n,6)._animationMode)})}function V(l){return t.Sb(0,[(l()(),t.yb(0,0,null,null,2,"mat-checkbox",[["class","mat-checkbox"]],[[8,"id",0],[1,"tabindex",0],[2,"mat-checkbox-indeterminate",null],[2,"mat-checkbox-checked",null],[2,"mat-checkbox-disabled",null],[2,"mat-checkbox-label-before",null],[2,"_mat-animation-noopable",null]],[[null,"change"]],function(l,n,u){var t=!0;return"change"===n&&(t=!1!==l.component.onSelectCampaign(u,l.parent.context.$implicit.id)&&t),t},r.b,r.a)),t.Nb(5120,null,s.n,function(l){return[l]},[d.b]),t.xb(2,8568832,null,0,d.b,[t.n,t.i,f.h,t.E,[8,null],[2,d.a],[2,_.a]],{checked:[0,"checked"]},{change:"change"})],function(l,n){l(n,2,0,n.component.selectedCampaigns.includes(n.parent.context.$implicit.id))},function(l,n){l(n,0,0,t.Ib(n,2).id,null,t.Ib(n,2).indeterminate,t.Ib(n,2).checked,t.Ib(n,2).disabled,"before"==t.Ib(n,2).labelPosition,"NoopAnimations"===t.Ib(n,2)._animationMode)})}function Z(l){return t.Sb(0,[(l()(),t.yb(0,0,null,null,2,"mat-checkbox",[["class","mat-checkbox"],["disabled",""]],[[8,"id",0],[1,"tabindex",0],[2,"mat-checkbox-indeterminate",null],[2,"mat-checkbox-checked",null],[2,"mat-checkbox-disabled",null],[2,"mat-checkbox-label-before",null],[2,"_mat-animation-noopable",null]],null,null,r.b,r.a)),t.Nb(5120,null,s.n,function(l){return[l]},[d.b]),t.xb(2,8568832,null,0,d.b,[t.n,t.i,f.h,t.E,[8,null],[2,d.a],[2,_.a]],{disabled:[0,"disabled"]},null)],function(l,n){l(n,2,0,"")},function(l,n){l(n,0,0,t.Ib(n,2).id,null,t.Ib(n,2).indeterminate,t.Ib(n,2).checked,t.Ib(n,2).disabled,"before"==t.Ib(n,2).labelPosition,"NoopAnimations"===t.Ib(n,2)._animationMode)})}function J(l){return t.Sb(0,[(l()(),t.yb(0,0,null,null,5,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),t.xb(1,16384,null,0,i.a,[o.d,t.n],null,null),(l()(),t.nb(16777216,null,null,1,null,V)),t.xb(3,16384,null,0,b.m,[t.W,t.T],{ngIf:[0,"ngIf"]},null),(l()(),t.nb(16777216,null,null,1,null,Z)),t.xb(5,16384,null,0,b.m,[t.W,t.T],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,3,0,"Ho\u1ea1t \u0111\u1ed9ng"===n.context.$implicit.status),l(n,5,0,"Ho\u1ea1t \u0111\u1ed9ng"!==n.context.$implicit.status)},null)}function Y(l){return t.Sb(0,[(l()(),t.yb(0,0,null,null,2,"mat-header-row",[["class","mat-header-row"],["role","row"]],null,null,null,y.d,y.a)),t.Nb(6144,null,o.k,null,[i.g]),t.xb(2,49152,null,0,i.g,[],null,null)],null,null)}function X(l){return t.Sb(0,[(l()(),t.yb(0,0,null,null,2,"mat-row",[["class","mat-row"],["role","row"]],null,null,null,y.e,y.b)),t.Nb(6144,null,o.m,null,[i.i]),t.xb(2,49152,null,0,i.i,[],null,null)],null,null)}function ll(l){return t.Sb(0,[(l()(),t.yb(0,0,null,null,78,"div",[["class","table-wrapper"]],null,null,null,null,null)),(l()(),t.yb(1,0,null,null,77,"mat-table",[["class","mat-elevation-z8 mat-table"]],null,null,null,y.f,y.c)),t.Nb(6144,null,o.o,null,[i.k]),t.xb(3,2342912,null,4,i.k,[t.x,t.i,t.n,[8,null],[2,x.b],b.d,h.a],{dataSource:[0,"dataSource"]},null),t.Ob(603979776,1,{_contentColumnDefs:1}),t.Ob(603979776,2,{_contentRowDefs:1}),t.Ob(603979776,3,{_contentHeaderRowDefs:1}),t.Ob(603979776,4,{_contentFooterRowDefs:1}),(l()(),t.yb(8,0,null,null,12,null,null,null,null,null,null,null)),t.Nb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[i.c]),t.xb(10,16384,null,3,i.c,[],{name:[0,"name"]},null),t.Ob(603979776,5,{cell:0}),t.Ob(603979776,6,{headerCell:0}),t.Ob(603979776,7,{footerCell:0}),t.Nb(2048,[[1,4]],o.d,null,[i.c]),(l()(),t.nb(0,null,null,2,null,H)),t.xb(16,16384,null,0,i.f,[t.T],null,null),t.Nb(2048,[[6,4]],o.j,null,[i.f]),(l()(),t.nb(0,null,null,2,null,R)),t.xb(19,16384,null,0,i.b,[t.T],null,null),t.Nb(2048,[[5,4]],o.b,null,[i.b]),(l()(),t.yb(21,0,null,null,12,null,null,null,null,null,null,null)),t.Nb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[i.c]),t.xb(23,16384,null,3,i.c,[],{name:[0,"name"]},null),t.Ob(603979776,8,{cell:0}),t.Ob(603979776,9,{headerCell:0}),t.Ob(603979776,10,{footerCell:0}),t.Nb(2048,[[1,4]],o.d,null,[i.c]),(l()(),t.nb(0,null,null,2,null,B)),t.xb(29,16384,null,0,i.f,[t.T],null,null),t.Nb(2048,[[9,4]],o.j,null,[i.f]),(l()(),t.nb(0,null,null,2,null,W)),t.xb(32,16384,null,0,i.b,[t.T],null,null),t.Nb(2048,[[8,4]],o.b,null,[i.b]),(l()(),t.yb(34,0,null,null,12,null,null,null,null,null,null,null)),t.Nb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[i.c]),t.xb(36,16384,null,3,i.c,[],{name:[0,"name"]},null),t.Ob(603979776,11,{cell:0}),t.Ob(603979776,12,{headerCell:0}),t.Ob(603979776,13,{footerCell:0}),t.Nb(2048,[[1,4]],o.d,null,[i.c]),(l()(),t.nb(0,null,null,2,null,j)),t.xb(42,16384,null,0,i.f,[t.T],null,null),t.Nb(2048,[[12,4]],o.j,null,[i.f]),(l()(),t.nb(0,null,null,2,null,F)),t.xb(45,16384,null,0,i.b,[t.T],null,null),t.Nb(2048,[[11,4]],o.b,null,[i.b]),(l()(),t.yb(47,0,null,null,12,null,null,null,null,null,null,null)),t.Nb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[i.c]),t.xb(49,16384,null,3,i.c,[],{name:[0,"name"]},null),t.Ob(603979776,14,{cell:0}),t.Ob(603979776,15,{headerCell:0}),t.Ob(603979776,16,{footerCell:0}),t.Nb(2048,[[1,4]],o.d,null,[i.c]),(l()(),t.nb(0,null,null,2,null,K)),t.xb(55,16384,null,0,i.f,[t.T],null,null),t.Nb(2048,[[15,4]],o.j,null,[i.f]),(l()(),t.nb(0,null,null,2,null,z)),t.xb(58,16384,null,0,i.b,[t.T],null,null),t.Nb(2048,[[14,4]],o.b,null,[i.b]),(l()(),t.yb(60,0,null,null,12,null,null,null,null,null,null,null)),t.Nb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[i.c]),t.xb(62,16384,null,3,i.c,[],{name:[0,"name"]},null),t.Ob(603979776,17,{cell:0}),t.Ob(603979776,18,{headerCell:0}),t.Ob(603979776,19,{footerCell:0}),t.Nb(2048,[[1,4]],o.d,null,[i.c]),(l()(),t.nb(0,null,null,2,null,q)),t.xb(68,16384,null,0,i.f,[t.T],null,null),t.Nb(2048,[[18,4]],o.j,null,[i.f]),(l()(),t.nb(0,null,null,2,null,J)),t.xb(71,16384,null,0,i.b,[t.T],null,null),t.Nb(2048,[[17,4]],o.b,null,[i.b]),(l()(),t.nb(0,null,null,2,null,Y)),t.xb(74,540672,null,0,i.h,[t.T,t.x],{columns:[0,"columns"],sticky:[1,"sticky"]},null),t.Nb(2048,[[3,4]],o.l,null,[i.h]),(l()(),t.nb(0,null,null,2,null,X)),t.xb(77,540672,null,0,i.j,[t.T,t.x],{columns:[0,"columns"]},null),t.Nb(2048,[[2,4]],o.n,null,[i.j])],function(l,n){var u=n.component;l(n,3,0,u.campaignList),l(n,10,0,"order"),l(n,23,0,"id"),l(n,36,0,"name"),l(n,49,0,"status"),l(n,62,0,"tracking"),l(n,74,0,u.displayedColumns,!0),l(n,77,0,u.displayedColumns)},null)}function nl(l){return t.Sb(0,[(l()(),t.yb(0,0,null,null,6,"p",[["style","text-align: center"]],null,null,null,null,null)),(l()(),t.yb(1,0,null,null,5,"button",[["class","submit-button"],["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.addCampaignTracking()&&t),t},k.d,k.b)),t.xb(2,180224,null,0,v.b,[t.n,f.h,[2,_.a]],{disabled:[0,"disabled"]},null),(l()(),t.yb(3,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,O.b,O.a)),t.xb(4,9158656,null,0,P.b,[t.n,P.d,[8,null],[2,P.a]],null,null),(l()(),t.Qb(-1,0,["location_searching"])),(l()(),t.Qb(-1,0,[" G\u1eaeN M\xc3 TRACKING "]))],function(l,n){l(n,2,0,n.component.isProcessing),l(n,4,0)},function(l,n){l(n,1,0,t.Ib(n,2).disabled||null,"NoopAnimations"===t.Ib(n,2)._animationMode),l(n,3,0,t.Ib(n,4).inline,"primary"!==t.Ib(n,4).color&&"accent"!==t.Ib(n,4).color&&"warn"!==t.Ib(n,4).color)})}function ul(l){return t.Sb(0,[(l()(),t.yb(0,0,null,null,7,"p",[["class","notification"]],null,null,null,null,null)),(l()(),t.Qb(-1,null,[" Ch\xfang t\xf4i kh\xf4ng t\xecm th\u1ea5y chi\u1ebfn d\u1ecbch n\xe0o \u0111ang ch\u1ea1y. Vui l\xf2ng "])),(l()(),t.yb(2,0,null,null,1,"a",[["class","link-button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.getOriginalCampaigns()&&t),t},null,null)),(l()(),t.Qb(-1,null,["th\u1eed l\u1ea1i"])),(l()(),t.Qb(-1,null,[" ho\u1eb7c "])),(l()(),t.yb(5,0,null,null,1,"a",[["class","link-button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.showSupportInfoDialog()&&t),t},null,null)),(l()(),t.Qb(-1,null,["li\xean h\u1ec7"])),(l()(),t.Qb(-1,null,[" v\u1edbi h\u1ed7 tr\u1ee3 vi\xean \u0111\u1ec3 \u0111\u01b0\u1ee3c gi\xfap \u0111\u1ee1. "]))],null,null)}function tl(l){return t.Sb(0,[(l()(),t.yb(0,0,null,null,28,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.yb(1,0,null,null,3,"div",[["class","title1"]],null,null,null,null,null)),(l()(),t.Qb(-1,null,[" G\u1eaeN TRACKING THEO D\xd5I CHI\u1ebeN D\u1ecaCH T\xc0I KHO\u1ea2N "])),(l()(),t.yb(3,0,null,null,1,"span",[["style","color:black; font-weight: bolder"]],null,null,null,null,null)),(l()(),t.Qb(4,null,["",""])),(l()(),t.yb(5,0,null,null,3,"p",[["class","usage"]],null,null,null,null,null)),(l()(),t.yb(6,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Qb(-1,null,["C\xf4ng d\u1ee5ng c\u1ee7a Tracking:"])),(l()(),t.Qb(-1,null,[" Tracking l\xe0 \u0111o\u1ea1n m\xe3 nh\u1ecf, t\xedch h\u1ee3p v\xe0o trong qu\u1ea3ng c\xe1o AdWords \u0111\u1ec3 theo d\xf5i ho\u1ea1t \u0111\u1ed9ng b\u1ea5m qu\u1ea3ng c\xe1o "])),(l()(),t.yb(9,0,null,null,2,"div",[["class","tracking-example"]],null,null,null,null,null)),(l()(),t.yb(10,0,null,null,1,"img",[["alt","Photo about tracking"],["class","mat-card-image"],["mat-card-image",""],["src","../../../../assets/images/huong-dan-tracking.jpg"]],null,null,null,null,null)),t.xb(11,16384,null,0,M.a,[],null,null),(l()(),t.yb(12,0,null,null,3,"p",[["class","title2"]],null,null,null,null,null)),(l()(),t.yb(13,0,null,null,1,"span",[["style","color: #039be5"]],null,null,null,null,null)),(l()(),t.Qb(-1,null,["[G\u1eaeN M\xc3]"])),(l()(),t.Qb(-1,null,[" CH\u1eccN CHI\u1ebeN D\u1ecaCH C\u1ea6N G\u1eaeN M\xc3 "])),(l()(),t.yb(16,0,null,null,12,"form",[["class","form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0;return"submit"===n&&(e=!1!==t.Ib(l,18).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.Ib(l,18).onReset()&&e),e},null,null)),t.xb(17,16384,null,0,s.A,[],null,null),t.xb(18,4210688,null,0,s.r,[[8,null],[8,null]],null,null),t.Nb(2048,null,s.c,null,[s.r]),t.xb(20,16384,null,0,s.q,[[4,s.c]],null,null),(l()(),t.yb(21,0,null,null,1,"p",[["class","table-title"]],null,null,null,null,null)),(l()(),t.Qb(-1,null,["Ch\u1ecdn chi\u1ebfn d\u1ecbch \u0111\u1ec3 g\u1eafn tracking (n\xean ch\u1ecdn t\u1ea5t c\u1ea3)"])),(l()(),t.nb(16777216,null,null,1,null,ll)),t.xb(24,16384,null,0,b.m,[t.W,t.T],{ngIf:[0,"ngIf"]},null),(l()(),t.nb(16777216,null,null,1,null,nl)),t.xb(26,16384,null,0,b.m,[t.W,t.T],{ngIf:[0,"ngIf"]},null),(l()(),t.nb(16777216,null,null,1,null,ul)),t.xb(28,16384,null,0,b.m,[t.W,t.T],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,24,0,u.campaignList.length>0&&!u.isProcessing),l(n,26,0,u.campaignList.length>0&&!u.isProcessing),l(n,28,0,0===u.campaignList.length&&!u.isProcessing)},function(l,n){l(n,4,0,n.component._sessionService.activeAdsAccountId),l(n,16,0,t.Ib(n,20).ngClassUntouched,t.Ib(n,20).ngClassTouched,t.Ib(n,20).ngClassPristine,t.Ib(n,20).ngClassDirty,t.Ib(n,20).ngClassValid,t.Ib(n,20).ngClassInvalid,t.Ib(n,20).ngClassPending)})}function el(l){return t.Sb(0,[(l()(),t.yb(0,0,null,null,1,"app-select-campaigns",[],null,null,null,tl,E)),t.xb(1,245760,null,0,D,[w.a,S.a,G.a,N.a,L.p,A.a],null,null)],function(l,n){l(n,1,0)},null)}var al=t.ub("app-select-campaigns",D,el,{},{},[]),cl=u("21Lb"),il=u("OzfB"),ol=u("5vgI"),bl=u("Cako"),rl=u("AytR"),sl=function(l){function n(n,u,t){var e=l.call(this)||this;return e._activatedRoute=n,e._matDialog=u,e._addTrackingTagsService=t,e.hostTracking=rl.a.hostTracking,e.adsAccountIdPipe=new ol.a,e}return I.c(n,l),n.prototype.ngOnInit=function(){var l=this,n=this._activatedRoute.params.subscribe(function(n){l.accountId=n.accountId;var u=l._addTrackingTagsService.getAdwordsAccountDetail(l.accountId).subscribe(function(n){l.adsId=l.adsAccountIdPipe.transform(n.data.adsAccount.adsId),l.key=n.data.adsAccount.key});l.subscriptions.push(u)});this.subscriptions.push(n)},n.prototype.copyKey=function(l){document.addEventListener("copy",function(n){n.clipboardData.setData("text/plain",l),n.preventDefault(),document.removeEventListener("copy",null)}),document.execCommand("copy")},n.prototype.checkWebsiteTracking=function(){return this._matDialog.open(bl.a,{autoFocus:!1,maxWidth:"100vw !important"}).componentInstance.account={accountId:this.accountId,adsId:this.adsId}},n}(T.a),dl=u("o3x0"),gl=t.wb({encapsulation:0,styles:[[".container[_ngcontent-%COMP%]{padding:15px 30px;width:100%;box-shadow:2px 2px 5px silver}.container[_ngcontent-%COMP%]   .title1[_ngcontent-%COMP%]{padding:15px;background-color:#f5f5f5;color:gray;font-size:16px;font-weight:700;box-shadow:2px 2px 5px silver}.container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{margin-top:25px;line-height:30px}.container[_ngcontent-%COMP%]   .hightline[_ngcontent-%COMP%]{padding:5px;background-color:#eee;color:#ff1493}.container[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]{padding:10px;width:100%;border:.5px solid silver;border-right:0;border-radius:5px 0 0 5px}.container[_ngcontent-%COMP%]   .copy-button[_ngcontent-%COMP%]{border-radius:0 5px 5px 0;border:.5px solid silver}@media screen and (max-width:600px){.container[_ngcontent-%COMP%]{padding:0 15px 15px}}"]],data:{}});function pl(l){return t.Sb(0,[(l()(),t.yb(0,0,null,null,37,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.yb(1,0,null,null,3,"p",[["class","title1"]],null,null,null,null,null)),(l()(),t.Qb(-1,null,[" G\u1eaeN M\xc3 TRACKING V\xc0O WEBSITE T\xc0I KHO\u1ea2N "])),(l()(),t.yb(3,0,null,null,1,"span",[["style","color: black"]],null,null,null,null,null)),(l()(),t.Qb(4,null,["",""])),(l()(),t.yb(5,0,null,null,5,"p",[["class","info"]],null,null,null,null,null)),(l()(),t.yb(6,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Qb(-1,null,["T\u1ea1i sao c\u1ea7n g\u1eafn m\xe3:"])),(l()(),t.Qb(-1,null,[" H\u1ec7 th\u1ed1ng \u0111\u01b0a v\xe0o m\xe3 tracking \u0111\u1ec3 ph\xe1t hi\u1ec7n s\u1ed1 \u0111i\u1ec7n tho\u1ea1i truy c\u1eadp v\xe0o website c\u1ee7a b\u1ea1n. B\u1ea1n c\xf3 th\u1ec3 b\u1ecf m\xe3 v\xe0o b\u1ea5t c\u1ee9 v\u1ecb tr\xed n\xe0o trong website. Tuy nhi\xean t\u1ed1t nh\u1ea5t h\xe3y b\u1ecf m\xe3 v\xe0o trong "])),(l()(),t.yb(9,0,null,null,1,"span",[["class","hightline"]],null,null,null,null,null)),(l()(),t.Qb(-1,null,["<head>[m\xe3 tracking]</head>"])),(l()(),t.yb(11,0,null,null,26,"div",[],null,null,null,null,null)),(l()(),t.yb(12,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Qb(-1,null,["B\u01b0\u1edbc 1:"])),(l()(),t.Qb(-1,null,[" Copy m\xe3 tracking "])),(l()(),t.yb(15,0,null,null,5,"div",[["fxLayout","row"],["style","padding-top: 10px"]],null,null,null,null,null)),t.xb(16,671744,null,0,cl.c,[t.n,il.j,[2,cl.k],il.f],{fxLayout:[0,"fxLayout"]},null),(l()(),t.yb(17,0,[["inputKey",1]],null,0,"input",[["class","key"],["readonly",""],["type","text"]],[[8,"value",0]],null,null,null,null)),(l()(),t.yb(18,0,null,null,2,"button",[["class","copy-button"],["mat-stroked-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.copyKey(t.Ib(l,17).value)&&e),e},k.d,k.b)),t.xb(19,180224,null,0,v.b,[t.n,f.h,[2,_.a]],null,null),(l()(),t.Qb(-1,0,["copy"])),(l()(),t.yb(21,0,null,null,8,"p",[["style","padding-top: 20px; line-height: 30px"]],null,null,null,null,null)),(l()(),t.yb(22,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Qb(-1,null,["B\u01b0\u1edbc 2:"])),(l()(),t.Qb(-1,null,[" M\u1edf website "])),(l()(),t.yb(25,0,null,null,1,"a",[["href","https://hecta.vn/"]],null,null,null,null,null)),(l()(),t.Qb(-1,null,["hecta.vn"])),(l()(),t.Qb(-1,null,[" v\xe0 g\u1eafn m\xe3 v\xe0o trong th\u1ebb "])),(l()(),t.yb(28,0,null,null,1,"span",[["class","hightline"]],null,null,null,null,null)),(l()(),t.Qb(-1,null,["<head>[m\xe3 tracking]</head>"])),(l()(),t.yb(30,0,null,null,7,"div",[["style","padding-top: 20px"]],null,null,null,null,null)),(l()(),t.yb(31,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Qb(-1,null,["B\u01b0\u1edbc 3:"])),(l()(),t.Qb(-1,null,[" Ki\u1ec3m tra m\xe3 "])),(l()(),t.yb(34,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),t.yb(35,0,null,null,2,"button",[["color","accent"],["mat-raised-button",""],["style","border-radius: 0"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.checkWebsiteTracking()&&t),t},k.d,k.b)),t.xb(36,180224,null,0,v.b,[t.n,f.h,[2,_.a]],{color:[0,"color"]},null),(l()(),t.Qb(-1,0,[" B\u1ea4M \u0110\u1ec2 KI\u1ec2M TRA M\xc3 "]))],function(l,n){l(n,16,0,"row"),l(n,36,0,"accent")},function(l,n){var u=n.component;l(n,4,0,u.adsId),l(n,17,0,t.Ab(2,'<script type="text/javascript" src="',u.hostTracking,"?key=",u.key,'"><\/script>')),l(n,18,0,t.Ib(n,19).disabled||null,"NoopAnimations"===t.Ib(n,19)._animationMode),l(n,35,0,t.Ib(n,36).disabled||null,"NoopAnimations"===t.Ib(n,36)._animationMode)})}function ml(l){return t.Sb(0,[(l()(),t.yb(0,0,null,null,1,"app-tracking-website",[],null,null,null,pl,gl)),t.xb(1,245760,null,0,sl,[L.a,dl.d,N.a],null,null)],function(l,n){l(n,1,0)},null)}var hl=t.ub("app-tracking-website",sl,ml,{},{},[]),fl=u("M2Lx"),xl=u("Wf4p"),Cl=u("seP3"),_l=u("wd5q"),yl=u("uGex"),kl=u("t/Na"),vl=u("/VYK"),Ol=u("b716"),Pl=u("4c35"),Ml=u("6Wmm"),Il=u("Sm0G"),wl=u("D1Ds"),Sl=u("1N2P"),Gl=u("L53J"),Tl=u("hUWP"),Nl=u("3pJQ"),Al=u("V9q+"),Ql=u("RaCk"),Dl=u("Tk7p"),Ll=u("5HBU"),El=function(){return function(){}}(),Hl=u("zNkS");u.d(n,"AddTrackingTagsModuleNgFactory",function(){return Rl});var Rl=t.vb(e,[],function(l){return t.Fb([t.Gb(512,t.l,t.ib,[[8,[a.a,c.a,al,hl]],[3,t.l],t.C]),t.Gb(4608,b.o,b.n,[t.z,[2,b.F]]),t.Gb(4608,fl.c,fl.c,[]),t.Gb(4608,xl.b,xl.z,[]),t.Gb(4608,p.c,p.c,[p.i,p.e,t.l,p.h,p.f,t.v,t.E,b.d,x.b,[2,b.i]]),t.Gb(5120,p.j,p.k,[p.c]),t.Gb(5120,g.b,g.c,[p.c]),t.Gb(4608,C.e,xl.c,[[2,xl.g],[2,xl.l]]),t.Gb(4608,s.x,s.x,[]),t.Gb(4608,s.f,s.f,[]),t.Gb(6144,Cl.d,null,[_l.a]),t.Gb(5120,yl.a,yl.b,[p.c]),t.Gb(5120,t.b,function(l,n){return[il.k(l,n)]},[b.d,t.H]),t.Gb(4608,N.a,N.a,[kl.c,G.a]),t.Gb(1073742336,b.c,b.c,[]),t.Gb(1073742336,x.a,x.a,[]),t.Gb(1073742336,xl.l,xl.l,[[2,xl.d],[2,C.f]]),t.Gb(1073742336,h.b,h.b,[]),t.Gb(1073742336,xl.v,xl.v,[]),t.Gb(1073742336,v.c,v.c,[]),t.Gb(1073742336,fl.d,fl.d,[]),t.Gb(1073742336,Cl.e,Cl.e,[]),t.Gb(1073742336,P.c,P.c,[]),t.Gb(1073742336,vl.c,vl.c,[]),t.Gb(1073742336,Ol.b,Ol.b,[]),t.Gb(1073742336,o.p,o.p,[]),t.Gb(1073742336,i.l,i.l,[]),t.Gb(1073742336,f.a,f.a,[]),t.Gb(1073742336,Pl.g,Pl.g,[]),t.Gb(1073742336,m.c,m.c,[]),t.Gb(1073742336,p.g,p.g,[]),t.Gb(1073742336,g.e,g.e,[]),t.Gb(1073742336,Ml.a,Ml.a,[]),t.Gb(1073742336,d.d,d.d,[]),t.Gb(1073742336,d.c,d.c,[]),t.Gb(1073742336,M.b,M.b,[]),t.Gb(1073742336,s.w,s.w,[]),t.Gb(1073742336,s.l,s.l,[]),t.Gb(1073742336,s.u,s.u,[]),t.Gb(1073742336,Il.a,Il.a,[]),t.Gb(1073742336,wl.a,wl.a,[]),t.Gb(1073742336,Sl.a,Sl.a,[]),t.Gb(1073742336,xl.t,xl.t,[]),t.Gb(1073742336,xl.r,xl.r,[]),t.Gb(1073742336,yl.d,yl.d,[]),t.Gb(1073742336,Gl.a,Gl.a,[]),t.Gb(1073742336,il.c,il.c,[]),t.Gb(1073742336,cl.g,cl.g,[]),t.Gb(1073742336,Tl.c,Tl.c,[]),t.Gb(1073742336,Nl.a,Nl.a,[]),t.Gb(1073742336,Al.a,Al.a,[[2,il.h],t.H]),t.Gb(1073742336,Ql.a,Ql.a,[]),t.Gb(1073742336,Dl.a,Dl.a,[]),t.Gb(1073742336,Ll.a,Ll.a,[]),t.Gb(1073742336,L.t,L.t,[[2,L.y],[2,L.p]]),t.Gb(1073742336,El,El,[]),t.Gb(1073742336,e,e,[]),t.Gb(1024,L.m,function(){return[[{path:"chien-dich",pathMatch:"full",component:D},{path:"website/:accountId",pathMatch:"full",component:sl,canActivate:[Hl.a]}]]},[])])})}}]);