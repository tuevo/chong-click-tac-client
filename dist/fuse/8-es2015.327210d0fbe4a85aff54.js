(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{yPfU:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var a=u("NcP4"),i=u("pMnS"),c=u("8rEH"),o=u("zQui"),s=u("SVse"),b=u("Z5h4"),r=u("s7LF"),d=u("r0V8"),g=u("Mz6y"),p=u("QQfA"),h=u("hOhj"),m=u("/HVE"),f=u("5GAg"),v=u("IP0z"),C=u("cUpR"),w=u("omvX"),_=u("pIm3"),O=u("bujt"),x=u("Fwaw"),M=u("Mr+X"),k=u("Gi4r"),P=u("igqZ"),E=u("k1t7"),y=u("H0VJ"),L=u("mZtN"),I=u("pZ6u"),G=u("Z0fI"),T=u("f3OE"),S=u("/uUt");class R extends I.a{constructor(l,n,u,t,e,a){super(),this._fuseProgressiveBarService=l,this._dialogService=n,this._sessionService=u,this._addTrackingTagsService=t,this._router=e,this._fuseSlashScreenService=a,this.displayedColumns=["order","id","name","status","tracking"],this.isProcessing=!1,this.campaignList=[],this.selectedCampaigns=[],this.trackingCampaignList=[]}ngOnInit(){const l=this._sessionService.getAccountId().pipe(Object(S.a)()).subscribe(l=>{l&&this.getOriginalCampaigns()});this.subscriptions.push(l)}onSelectAllCampaign(l){this.selectedCampaigns=l.checked?this.campaignList.map(l=>l.id):[]}onSelectCampaign(l,n){l.checked?this.selectedCampaigns.includes(n)||this.selectedCampaigns.push(n):this.selectedCampaigns=this.selectedCampaigns.filter(l=>l!==n),this.checkAll=this.campaignList.every(l=>this.selectedCampaigns.includes(l.id))}addCampaignTracking(){const l={campaignIds:this.selectedCampaigns};this._fuseProgressiveBarService.show(),this.isProcessing=!0;const n=this._addTrackingTagsService.addCampaignTracking(l).subscribe(l=>{this.getOriginalCampaigns(),setTimeout(()=>{this._dialogService._openSuccessDialog(l),this._fuseProgressiveBarService.hide(),this.isProcessing=!1},0)},l=>{this._fuseProgressiveBarService.hide(),this._dialogService._openErrorDialog(l.error),this.isProcessing=!1});this.subscriptions.push(n)}getOriginalCampaigns(){this.isProcessing=!0,this._fuseProgressiveBarService.show();const l=this._addTrackingTagsService.getOriginalCampaigns().subscribe(l=>{this.campaignList=l.data.campaignList;const n=this._addTrackingTagsService.getTrackingCampaigns().subscribe(l=>{this.trackingCampaignList=l.data.campaignIds,this.selectedCampaigns=this.trackingCampaignList,this.checkAll=this.campaignList.every(l=>this.selectedCampaigns.includes(l.id)),setTimeout(()=>{this._fuseProgressiveBarService.hide(),this.isProcessing=!1},0)},l=>{this.trackingCampaignList=[],this._fuseProgressiveBarService.hide(),this._dialogService._openErrorDialog(l.error),this.isProcessing=!1});this.subscriptions.push(n)},l=>{l.error.messages&&(this.campaignList=[],this.trackingCampaignList=[],this._dialogService._openErrorDialog(l.error),this.isProcessing=!1),this._fuseProgressiveBarService.hide()});this.subscriptions.push(l)}showSupportInfoDialog(){this._dialogService._openInfoDialog("Vui l\xf2ng li\xean h\u1ec7 hotline 0984 66 80 60 ho\u1eb7c 0901 47 48 46 \u0111\u1ec3 \u0111\u01b0\u1ee3c h\u1ed7 tr\u1ee3 th\xeam.")}}var A=u("iInd"),D=t.ub({encapsulation:0,styles:[[".container[_ngcontent-%COMP%]{padding:15px 30px;width:100%;box-shadow:2px 2px 5px silver}.container[_ngcontent-%COMP%]   .title1[_ngcontent-%COMP%]{padding:15px;background-color:#f5f5f5;color:gray;font-size:16px;font-weight:700;box-shadow:2px 2px 5px silver}.container[_ngcontent-%COMP%]   .title2[_ngcontent-%COMP%]{margin-top:50px;font-weight:700;text-align:justify}.container[_ngcontent-%COMP%]   .usage[_ngcontent-%COMP%]{text-align:justify;padding-top:20px}.container[_ngcontent-%COMP%]   .link-button[_ngcontent-%COMP%]{color:#1e90ff;cursor:pointer;text-decoration:underline!important}.container[_ngcontent-%COMP%]   .tracking-example[_ngcontent-%COMP%]{margin-top:20px}.container[_ngcontent-%COMP%]   .tracking-example[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;box-shadow:2px 2px 5px silver}.container[_ngcontent-%COMP%]   .table-title[_ngcontent-%COMP%]{font-weight:700;text-align:center;padding:20px 10px 10px}.container[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]{display:table;margin:20px auto 0;text-align:center;background-color:#eee;width:80%;padding-top:20px;padding-bottom:20px;border-left:5px solid #ff8c00}.container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]{height:500px;box-shadow:2px 2px 5px silver;background-color:#fff;overflow:auto}.container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-table[_ngcontent-%COMP%]{width:100%;box-shadow:none}.container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]{transition:.2s}.container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]:hover{background-color:#f5f5f5}.container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]:nth-child(1), .container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-header-cell[_ngcontent-%COMP%]:nth-child(1){flex:0 0 10%}.container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]:nth-child(3), .container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-header-cell[_ngcontent-%COMP%]:nth-child(3){flex:0 0 40%}.container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]:nth-child(5), .container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-header-cell[_ngcontent-%COMP%]:nth-child(5){flex:0 0 20%;padding-left:20px}.container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-header-row[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]{min-width:1000px;width:100%}.container[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]{margin:10px auto 0;background-color:#44b543;color:#fff}.container[_ngcontent-%COMP%]   .enable-status[_ngcontent-%COMP%]{color:#1e90ff}.container[_ngcontent-%COMP%]   .disabled-status[_ngcontent-%COMP%]{color:silver}@media screen and (max-width:600px){.container[_ngcontent-%COMP%]{padding:15px}.submit-button[_ngcontent-%COMP%]{font-size:12px}}"]],data:{}});function N(l){return t.Qb(0,[(l()(),t.wb(0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),t.vb(1,16384,null,0,c.e,[o.d,t.n],null,null),(l()(),t.Ob(-1,null,[" # "]))],null,null)}function Q(l){return t.Qb(0,[(l()(),t.wb(0,0,null,null,2,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),t.vb(1,16384,null,0,c.a,[o.d,t.n],null,null),(l()(),t.Ob(2,null,[" "," "]))],null,function(l,n){l(n,2,0,n.context.index+1)})}function H(l){return t.Qb(0,[(l()(),t.wb(0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),t.vb(1,16384,null,0,c.e,[o.d,t.n],null,null),(l()(),t.Ob(-1,null,[" ID "]))],null,null)}function U(l){return t.Qb(0,[(l()(),t.wb(0,0,null,null,2,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),t.vb(1,16384,null,0,c.a,[o.d,t.n],null,null),(l()(),t.Ob(2,null,[" "," "]))],null,function(l,n){l(n,2,0,n.context.$implicit.id)})}function j(l){return t.Qb(0,[(l()(),t.wb(0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),t.vb(1,16384,null,0,c.e,[o.d,t.n],null,null),(l()(),t.Ob(-1,null,[" Chi\u1ebfn d\u1ecbch "]))],null,null)}function B(l){return t.Qb(0,[(l()(),t.wb(0,0,null,null,2,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),t.vb(1,16384,null,0,c.a,[o.d,t.n],null,null),(l()(),t.Ob(2,null,[" "," "]))],null,function(l,n){l(n,2,0,n.context.$implicit.name)})}function F(l){return t.Qb(0,[(l()(),t.wb(0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),t.vb(1,16384,null,0,c.e,[o.d,t.n],null,null),(l()(),t.Ob(-1,null,[" Tr\u1ea1ng th\xe1i "]))],null,null)}function K(l){return t.Qb(0,[(l()(),t.wb(0,0,null,null,1,"span",[["style","color: #039be5; font-weight: bold"]],null,null,null,null,null)),(l()(),t.Ob(1,null,["",""]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.status)})}function z(l){return t.Qb(0,[(l()(),t.wb(0,0,null,null,1,"span",[["style","color: silver; font-weight: bold"]],null,null,null,null,null)),(l()(),t.Ob(1,null,["",""]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.status)})}function $(l){return t.Qb(0,[(l()(),t.wb(0,0,null,null,5,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),t.vb(1,16384,null,0,c.a,[o.d,t.n],null,null),(l()(),t.lb(16777216,null,null,1,null,K)),t.vb(3,16384,null,0,s.m,[t.U,t.R],{ngIf:[0,"ngIf"]},null),(l()(),t.lb(16777216,null,null,1,null,z)),t.vb(5,16384,null,0,s.m,[t.U,t.R],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,3,0,"Ho\u1ea1t \u0111\u1ed9ng"===n.context.$implicit.status),l(n,5,0,"Ho\u1ea1t \u0111\u1ed9ng"!==n.context.$implicit.status)},null)}function V(l){return t.Qb(0,[(l()(),t.wb(0,0,null,null,7,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),t.vb(1,16384,null,0,c.e,[o.d,t.n],null,null),(l()(),t.wb(2,0,null,null,5,"p",[],null,null,null,null,null)),(l()(),t.wb(3,16777216,null,null,3,"mat-checkbox",[["class","mat-checkbox"],["matTooltip","Ch\u1ecdn/ B\u1ecf ch\u1ecdn t\u1ea5t c\u1ea3"],["style","margin-right: 5px"]],[[8,"id",0],[1,"tabindex",0],[2,"mat-checkbox-indeterminate",null],[2,"mat-checkbox-checked",null],[2,"mat-checkbox-disabled",null],[2,"mat-checkbox-label-before",null],[2,"_mat-animation-noopable",null]],[[null,"change"],[null,"longpress"],[null,"keydown"],[null,"touchend"]],function(l,n,u){var e=!0,a=l.component;return"longpress"===n&&(e=!1!==t.Gb(l,5).show()&&e),"keydown"===n&&(e=!1!==t.Gb(l,5)._handleKeydown(u)&&e),"touchend"===n&&(e=!1!==t.Gb(l,5)._handleTouchend()&&e),"change"===n&&(e=!1!==a.onSelectAllCampaign(u)&&e),e},b.b,b.a)),t.Lb(5120,null,r.n,function(l){return[l]},[d.b]),t.vb(5,212992,null,0,g.d,[p.c,t.n,h.b,t.U,t.C,m.a,f.c,f.h,g.b,[2,v.b],[2,g.a],[2,C.f]],{message:[0,"message"]},null),t.vb(6,8568832,null,0,d.b,[t.n,t.i,f.h,t.C,[8,null],[2,d.a],[2,w.a]],{checked:[0,"checked"]},{change:"change"}),(l()(),t.Ob(-1,null,[" G\u1eafn m\xe3 "]))],function(l,n){var u=n.component;l(n,5,0,"Ch\u1ecdn/ B\u1ecf ch\u1ecdn t\u1ea5t c\u1ea3"),l(n,6,0,u.campaignList.length===u.selectedCampaigns.length)},function(l,n){l(n,3,0,t.Gb(n,6).id,null,t.Gb(n,6).indeterminate,t.Gb(n,6).checked,t.Gb(n,6).disabled,"before"==t.Gb(n,6).labelPosition,"NoopAnimations"===t.Gb(n,6)._animationMode)})}function W(l){return t.Qb(0,[(l()(),t.wb(0,0,null,null,2,"mat-checkbox",[["class","mat-checkbox"]],[[8,"id",0],[1,"tabindex",0],[2,"mat-checkbox-indeterminate",null],[2,"mat-checkbox-checked",null],[2,"mat-checkbox-disabled",null],[2,"mat-checkbox-label-before",null],[2,"_mat-animation-noopable",null]],[[null,"change"]],function(l,n,u){var t=!0;return"change"===n&&(t=!1!==l.component.onSelectCampaign(u,l.parent.context.$implicit.id)&&t),t},b.b,b.a)),t.Lb(5120,null,r.n,function(l){return[l]},[d.b]),t.vb(2,8568832,null,0,d.b,[t.n,t.i,f.h,t.C,[8,null],[2,d.a],[2,w.a]],{checked:[0,"checked"]},{change:"change"})],function(l,n){l(n,2,0,n.component.selectedCampaigns.includes(n.parent.context.$implicit.id))},function(l,n){l(n,0,0,t.Gb(n,2).id,null,t.Gb(n,2).indeterminate,t.Gb(n,2).checked,t.Gb(n,2).disabled,"before"==t.Gb(n,2).labelPosition,"NoopAnimations"===t.Gb(n,2)._animationMode)})}function q(l){return t.Qb(0,[(l()(),t.wb(0,0,null,null,2,"mat-checkbox",[["class","mat-checkbox"],["disabled",""]],[[8,"id",0],[1,"tabindex",0],[2,"mat-checkbox-indeterminate",null],[2,"mat-checkbox-checked",null],[2,"mat-checkbox-disabled",null],[2,"mat-checkbox-label-before",null],[2,"_mat-animation-noopable",null]],null,null,b.b,b.a)),t.Lb(5120,null,r.n,function(l){return[l]},[d.b]),t.vb(2,8568832,null,0,d.b,[t.n,t.i,f.h,t.C,[8,null],[2,d.a],[2,w.a]],{disabled:[0,"disabled"]},null)],function(l,n){l(n,2,0,"")},function(l,n){l(n,0,0,t.Gb(n,2).id,null,t.Gb(n,2).indeterminate,t.Gb(n,2).checked,t.Gb(n,2).disabled,"before"==t.Gb(n,2).labelPosition,"NoopAnimations"===t.Gb(n,2)._animationMode)})}function J(l){return t.Qb(0,[(l()(),t.wb(0,0,null,null,5,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),t.vb(1,16384,null,0,c.a,[o.d,t.n],null,null),(l()(),t.lb(16777216,null,null,1,null,W)),t.vb(3,16384,null,0,s.m,[t.U,t.R],{ngIf:[0,"ngIf"]},null),(l()(),t.lb(16777216,null,null,1,null,q)),t.vb(5,16384,null,0,s.m,[t.U,t.R],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,3,0,"Ho\u1ea1t \u0111\u1ed9ng"===n.context.$implicit.status),l(n,5,0,"Ho\u1ea1t \u0111\u1ed9ng"!==n.context.$implicit.status)},null)}function Z(l){return t.Qb(0,[(l()(),t.wb(0,0,null,null,2,"mat-header-row",[["class","mat-header-row"],["role","row"]],null,null,null,_.d,_.a)),t.Lb(6144,null,o.k,null,[c.g]),t.vb(2,49152,null,0,c.g,[],null,null)],null,null)}function X(l){return t.Qb(0,[(l()(),t.wb(0,0,null,null,2,"mat-row",[["class","mat-row"],["role","row"]],null,null,null,_.e,_.b)),t.Lb(6144,null,o.m,null,[c.i]),t.vb(2,49152,null,0,c.i,[],null,null)],null,null)}function Y(l){return t.Qb(0,[(l()(),t.wb(0,0,null,null,78,"div",[["class","table-wrapper"]],null,null,null,null,null)),(l()(),t.wb(1,0,null,null,77,"mat-table",[["class","mat-elevation-z8 mat-table"]],null,null,null,_.f,_.c)),t.Lb(6144,null,o.o,null,[c.k]),t.vb(3,2342912,null,4,c.k,[t.v,t.i,t.n,[8,null],[2,v.b],s.d,m.a],{dataSource:[0,"dataSource"]},null),t.Mb(603979776,1,{_contentColumnDefs:1}),t.Mb(603979776,2,{_contentRowDefs:1}),t.Mb(603979776,3,{_contentHeaderRowDefs:1}),t.Mb(603979776,4,{_contentFooterRowDefs:1}),(l()(),t.wb(8,0,null,null,12,null,null,null,null,null,null,null)),t.Lb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[c.c]),t.vb(10,16384,null,3,c.c,[],{name:[0,"name"]},null),t.Mb(603979776,5,{cell:0}),t.Mb(603979776,6,{headerCell:0}),t.Mb(603979776,7,{footerCell:0}),t.Lb(2048,[[1,4]],o.d,null,[c.c]),(l()(),t.lb(0,null,null,2,null,N)),t.vb(16,16384,null,0,c.f,[t.R],null,null),t.Lb(2048,[[6,4]],o.j,null,[c.f]),(l()(),t.lb(0,null,null,2,null,Q)),t.vb(19,16384,null,0,c.b,[t.R],null,null),t.Lb(2048,[[5,4]],o.b,null,[c.b]),(l()(),t.wb(21,0,null,null,12,null,null,null,null,null,null,null)),t.Lb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[c.c]),t.vb(23,16384,null,3,c.c,[],{name:[0,"name"]},null),t.Mb(603979776,8,{cell:0}),t.Mb(603979776,9,{headerCell:0}),t.Mb(603979776,10,{footerCell:0}),t.Lb(2048,[[1,4]],o.d,null,[c.c]),(l()(),t.lb(0,null,null,2,null,H)),t.vb(29,16384,null,0,c.f,[t.R],null,null),t.Lb(2048,[[9,4]],o.j,null,[c.f]),(l()(),t.lb(0,null,null,2,null,U)),t.vb(32,16384,null,0,c.b,[t.R],null,null),t.Lb(2048,[[8,4]],o.b,null,[c.b]),(l()(),t.wb(34,0,null,null,12,null,null,null,null,null,null,null)),t.Lb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[c.c]),t.vb(36,16384,null,3,c.c,[],{name:[0,"name"]},null),t.Mb(603979776,11,{cell:0}),t.Mb(603979776,12,{headerCell:0}),t.Mb(603979776,13,{footerCell:0}),t.Lb(2048,[[1,4]],o.d,null,[c.c]),(l()(),t.lb(0,null,null,2,null,j)),t.vb(42,16384,null,0,c.f,[t.R],null,null),t.Lb(2048,[[12,4]],o.j,null,[c.f]),(l()(),t.lb(0,null,null,2,null,B)),t.vb(45,16384,null,0,c.b,[t.R],null,null),t.Lb(2048,[[11,4]],o.b,null,[c.b]),(l()(),t.wb(47,0,null,null,12,null,null,null,null,null,null,null)),t.Lb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[c.c]),t.vb(49,16384,null,3,c.c,[],{name:[0,"name"]},null),t.Mb(603979776,14,{cell:0}),t.Mb(603979776,15,{headerCell:0}),t.Mb(603979776,16,{footerCell:0}),t.Lb(2048,[[1,4]],o.d,null,[c.c]),(l()(),t.lb(0,null,null,2,null,F)),t.vb(55,16384,null,0,c.f,[t.R],null,null),t.Lb(2048,[[15,4]],o.j,null,[c.f]),(l()(),t.lb(0,null,null,2,null,$)),t.vb(58,16384,null,0,c.b,[t.R],null,null),t.Lb(2048,[[14,4]],o.b,null,[c.b]),(l()(),t.wb(60,0,null,null,12,null,null,null,null,null,null,null)),t.Lb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[c.c]),t.vb(62,16384,null,3,c.c,[],{name:[0,"name"]},null),t.Mb(603979776,17,{cell:0}),t.Mb(603979776,18,{headerCell:0}),t.Mb(603979776,19,{footerCell:0}),t.Lb(2048,[[1,4]],o.d,null,[c.c]),(l()(),t.lb(0,null,null,2,null,V)),t.vb(68,16384,null,0,c.f,[t.R],null,null),t.Lb(2048,[[18,4]],o.j,null,[c.f]),(l()(),t.lb(0,null,null,2,null,J)),t.vb(71,16384,null,0,c.b,[t.R],null,null),t.Lb(2048,[[17,4]],o.b,null,[c.b]),(l()(),t.lb(0,null,null,2,null,Z)),t.vb(74,540672,null,0,c.h,[t.R,t.v],{columns:[0,"columns"],sticky:[1,"sticky"]},null),t.Lb(2048,[[3,4]],o.l,null,[c.h]),(l()(),t.lb(0,null,null,2,null,X)),t.vb(77,540672,null,0,c.j,[t.R,t.v],{columns:[0,"columns"]},null),t.Lb(2048,[[2,4]],o.n,null,[c.j])],function(l,n){var u=n.component;l(n,3,0,u.campaignList),l(n,10,0,"order"),l(n,23,0,"id"),l(n,36,0,"name"),l(n,49,0,"status"),l(n,62,0,"tracking"),l(n,74,0,u.displayedColumns,!0),l(n,77,0,u.displayedColumns)},null)}function ll(l){return t.Qb(0,[(l()(),t.wb(0,0,null,null,6,"p",[["style","text-align: center"]],null,null,null,null,null)),(l()(),t.wb(1,0,null,null,5,"button",[["class","submit-button"],["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.addCampaignTracking()&&t),t},O.d,O.b)),t.vb(2,180224,null,0,x.b,[t.n,f.h,[2,w.a]],{disabled:[0,"disabled"]},null),(l()(),t.wb(3,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,M.b,M.a)),t.vb(4,9158656,null,0,k.b,[t.n,k.d,[8,null],[2,k.a]],null,null),(l()(),t.Ob(-1,0,["location_searching"])),(l()(),t.Ob(-1,0,[" G\u1eaeN M\xc3 TRACKING "]))],function(l,n){l(n,2,0,n.component.isProcessing),l(n,4,0)},function(l,n){l(n,1,0,t.Gb(n,2).disabled||null,"NoopAnimations"===t.Gb(n,2)._animationMode),l(n,3,0,t.Gb(n,4).inline,"primary"!==t.Gb(n,4).color&&"accent"!==t.Gb(n,4).color&&"warn"!==t.Gb(n,4).color)})}function nl(l){return t.Qb(0,[(l()(),t.wb(0,0,null,null,7,"p",[["class","notification"]],null,null,null,null,null)),(l()(),t.Ob(-1,null,[" Ch\xfang t\xf4i kh\xf4ng t\xecm th\u1ea5y chi\u1ebfn d\u1ecbch n\xe0o \u0111ang ch\u1ea1y. Vui l\xf2ng "])),(l()(),t.wb(2,0,null,null,1,"a",[["class","link-button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.getOriginalCampaigns()&&t),t},null,null)),(l()(),t.Ob(-1,null,["th\u1eed l\u1ea1i"])),(l()(),t.Ob(-1,null,[" ho\u1eb7c "])),(l()(),t.wb(5,0,null,null,1,"a",[["class","link-button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.showSupportInfoDialog()&&t),t},null,null)),(l()(),t.Ob(-1,null,["li\xean h\u1ec7"])),(l()(),t.Ob(-1,null,[" v\u1edbi h\u1ed7 tr\u1ee3 vi\xean \u0111\u1ec3 \u0111\u01b0\u1ee3c gi\xfap \u0111\u1ee1. "]))],null,null)}function ul(l){return t.Qb(0,[(l()(),t.wb(0,0,null,null,28,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.wb(1,0,null,null,3,"div",[["class","title1"]],null,null,null,null,null)),(l()(),t.Ob(-1,null,[" G\u1eaeN TRACKING THEO D\xd5I CHI\u1ebeN D\u1ecaCH T\xc0I KHO\u1ea2N "])),(l()(),t.wb(3,0,null,null,1,"span",[["style","color:black; font-weight: bolder"]],null,null,null,null,null)),(l()(),t.Ob(4,null,["",""])),(l()(),t.wb(5,0,null,null,3,"p",[["class","usage"]],null,null,null,null,null)),(l()(),t.wb(6,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Ob(-1,null,["C\xf4ng d\u1ee5ng c\u1ee7a Tracking:"])),(l()(),t.Ob(-1,null,[" Tracking l\xe0 \u0111o\u1ea1n m\xe3 nh\u1ecf, t\xedch h\u1ee3p v\xe0o trong qu\u1ea3ng c\xe1o AdWords \u0111\u1ec3 theo d\xf5i ho\u1ea1t \u0111\u1ed9ng b\u1ea5m qu\u1ea3ng c\xe1o "])),(l()(),t.wb(9,0,null,null,2,"div",[["class","tracking-example"]],null,null,null,null,null)),(l()(),t.wb(10,0,null,null,1,"img",[["alt","Photo about tracking"],["class","mat-card-image"],["mat-card-image",""],["src","../../../../assets/images/huong-dan-tracking.jpg"]],null,null,null,null,null)),t.vb(11,16384,null,0,P.a,[],null,null),(l()(),t.wb(12,0,null,null,3,"p",[["class","title2"]],null,null,null,null,null)),(l()(),t.wb(13,0,null,null,1,"span",[["style","color: #039be5"]],null,null,null,null,null)),(l()(),t.Ob(-1,null,["[G\u1eaeN M\xc3]"])),(l()(),t.Ob(-1,null,[" CH\u1eccN CHI\u1ebeN D\u1ecaCH C\u1ea6N G\u1eaeN M\xc3 "])),(l()(),t.wb(16,0,null,null,12,"form",[["class","form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0;return"submit"===n&&(e=!1!==t.Gb(l,18).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.Gb(l,18).onReset()&&e),e},null,null)),t.vb(17,16384,null,0,r.A,[],null,null),t.vb(18,4210688,null,0,r.r,[[8,null],[8,null]],null,null),t.Lb(2048,null,r.c,null,[r.r]),t.vb(20,16384,null,0,r.q,[[4,r.c]],null,null),(l()(),t.wb(21,0,null,null,1,"p",[["class","table-title"]],null,null,null,null,null)),(l()(),t.Ob(-1,null,["Ch\u1ecdn chi\u1ebfn d\u1ecbch \u0111\u1ec3 g\u1eafn tracking (n\xean ch\u1ecdn t\u1ea5t c\u1ea3)"])),(l()(),t.lb(16777216,null,null,1,null,Y)),t.vb(24,16384,null,0,s.m,[t.U,t.R],{ngIf:[0,"ngIf"]},null),(l()(),t.lb(16777216,null,null,1,null,ll)),t.vb(26,16384,null,0,s.m,[t.U,t.R],{ngIf:[0,"ngIf"]},null),(l()(),t.lb(16777216,null,null,1,null,nl)),t.vb(28,16384,null,0,s.m,[t.U,t.R],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,24,0,u.campaignList.length>0&&!u.isProcessing),l(n,26,0,u.campaignList.length>0&&!u.isProcessing),l(n,28,0,0===u.campaignList.length&&!u.isProcessing)},function(l,n){l(n,4,0,n.component._sessionService.activeAdsAccountId),l(n,16,0,t.Gb(n,20).ngClassUntouched,t.Gb(n,20).ngClassTouched,t.Gb(n,20).ngClassPristine,t.Gb(n,20).ngClassDirty,t.Gb(n,20).ngClassValid,t.Gb(n,20).ngClassInvalid,t.Gb(n,20).ngClassPending)})}function tl(l){return t.Qb(0,[(l()(),t.wb(0,0,null,null,1,"app-select-campaigns",[],null,null,null,ul,D)),t.vb(1,245760,null,0,R,[E.a,y.a,L.a,G.a,A.p,T.a],null,null)],function(l,n){l(n,1,0)},null)}var el=t.sb("app-select-campaigns",R,tl,{},{},[]),al=u("VDRc"),il=u("/q54"),cl=u("5vgI"),ol=u("Cako"),sl=u("AytR");class bl extends I.a{constructor(l,n,u){super(),this._activatedRoute=l,this._matDialog=n,this._addTrackingTagsService=u,this.hostTracking=sl.a.hostTracking,this.adsAccountIdPipe=new cl.a}ngOnInit(){const l=this._activatedRoute.params.subscribe(l=>{this.accountId=l.accountId;const n=this._addTrackingTagsService.getAdwordsAccountDetail(this.accountId).subscribe(l=>{this.adsId=this.adsAccountIdPipe.transform(l.data.adsAccount.adsId),this.key=l.data.adsAccount.key});this.subscriptions.push(n)});this.subscriptions.push(l)}copyKey(l){document.addEventListener("copy",n=>{n.clipboardData.setData("text/plain",l),n.preventDefault(),document.removeEventListener("copy",null)}),document.execCommand("copy")}checkWebsiteTracking(){return this._matDialog.open(ol.a,{autoFocus:!1,maxWidth:"100vw !important"}).componentInstance.account={accountId:this.accountId,adsId:this.adsId}}}var rl=u("s6ns"),dl=t.ub({encapsulation:0,styles:[[".container[_ngcontent-%COMP%]{padding:15px 30px;width:100%;box-shadow:2px 2px 5px silver}.container[_ngcontent-%COMP%]   .title1[_ngcontent-%COMP%]{padding:15px;background-color:#f5f5f5;color:gray;font-size:16px;font-weight:700;box-shadow:2px 2px 5px silver}.container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{margin-top:25px;line-height:30px}.container[_ngcontent-%COMP%]   .hightline[_ngcontent-%COMP%]{padding:5px;background-color:#eee;color:#ff1493}.container[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]{padding:10px;width:100%;border:.5px solid silver;border-right:0;border-radius:5px 0 0 5px}.container[_ngcontent-%COMP%]   .copy-button[_ngcontent-%COMP%]{border-radius:0 5px 5px 0;border:.5px solid silver}@media screen and (max-width:600px){.container[_ngcontent-%COMP%]{padding:0 15px 15px}}"]],data:{}});function gl(l){return t.Qb(0,[(l()(),t.wb(0,0,null,null,37,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.wb(1,0,null,null,3,"p",[["class","title1"]],null,null,null,null,null)),(l()(),t.Ob(-1,null,[" G\u1eaeN M\xc3 TRACKING V\xc0O WEBSITE T\xc0I KHO\u1ea2N "])),(l()(),t.wb(3,0,null,null,1,"span",[["style","color: black"]],null,null,null,null,null)),(l()(),t.Ob(4,null,["",""])),(l()(),t.wb(5,0,null,null,5,"p",[["class","info"]],null,null,null,null,null)),(l()(),t.wb(6,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Ob(-1,null,["T\u1ea1i sao c\u1ea7n g\u1eafn m\xe3:"])),(l()(),t.Ob(-1,null,[" H\u1ec7 th\u1ed1ng \u0111\u01b0a v\xe0o m\xe3 tracking \u0111\u1ec3 ph\xe1t hi\u1ec7n s\u1ed1 \u0111i\u1ec7n tho\u1ea1i truy c\u1eadp v\xe0o website c\u1ee7a b\u1ea1n. B\u1ea1n c\xf3 th\u1ec3 b\u1ecf m\xe3 v\xe0o b\u1ea5t c\u1ee9 v\u1ecb tr\xed n\xe0o trong website. Tuy nhi\xean t\u1ed1t nh\u1ea5t h\xe3y b\u1ecf m\xe3 v\xe0o trong "])),(l()(),t.wb(9,0,null,null,1,"span",[["class","hightline"]],null,null,null,null,null)),(l()(),t.Ob(-1,null,["<head>[m\xe3 tracking]</head>"])),(l()(),t.wb(11,0,null,null,26,"div",[],null,null,null,null,null)),(l()(),t.wb(12,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Ob(-1,null,["B\u01b0\u1edbc 1:"])),(l()(),t.Ob(-1,null,[" Copy m\xe3 tracking "])),(l()(),t.wb(15,0,null,null,5,"div",[["fxLayout","row"],["style","padding-top: 10px"]],null,null,null,null,null)),t.vb(16,671744,null,0,al.c,[t.n,il.j,[2,al.k],il.f],{fxLayout:[0,"fxLayout"]},null),(l()(),t.wb(17,0,[["inputKey",1]],null,0,"input",[["class","key"],["readonly",""],["type","text"]],[[8,"value",0]],null,null,null,null)),(l()(),t.wb(18,0,null,null,2,"button",[["class","copy-button"],["mat-stroked-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.copyKey(t.Gb(l,17).value)&&e),e},O.d,O.b)),t.vb(19,180224,null,0,x.b,[t.n,f.h,[2,w.a]],null,null),(l()(),t.Ob(-1,0,["copy"])),(l()(),t.wb(21,0,null,null,8,"p",[["style","padding-top: 20px; line-height: 30px"]],null,null,null,null,null)),(l()(),t.wb(22,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Ob(-1,null,["B\u01b0\u1edbc 2:"])),(l()(),t.Ob(-1,null,[" M\u1edf website "])),(l()(),t.wb(25,0,null,null,1,"a",[["href","https://hecta.vn/"]],null,null,null,null,null)),(l()(),t.Ob(-1,null,["hecta.vn"])),(l()(),t.Ob(-1,null,[" v\xe0 g\u1eafn m\xe3 v\xe0o trong th\u1ebb "])),(l()(),t.wb(28,0,null,null,1,"span",[["class","hightline"]],null,null,null,null,null)),(l()(),t.Ob(-1,null,["<head>[m\xe3 tracking]</head>"])),(l()(),t.wb(30,0,null,null,7,"div",[["style","padding-top: 20px"]],null,null,null,null,null)),(l()(),t.wb(31,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Ob(-1,null,["B\u01b0\u1edbc 3:"])),(l()(),t.Ob(-1,null,[" Ki\u1ec3m tra m\xe3 "])),(l()(),t.wb(34,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),t.wb(35,0,null,null,2,"button",[["color","accent"],["mat-raised-button",""],["style","border-radius: 0"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.checkWebsiteTracking()&&t),t},O.d,O.b)),t.vb(36,180224,null,0,x.b,[t.n,f.h,[2,w.a]],{color:[0,"color"]},null),(l()(),t.Ob(-1,0,[" B\u1ea4M \u0110\u1ec2 KI\u1ec2M TRA M\xc3 "]))],function(l,n){l(n,16,0,"row"),l(n,36,0,"accent")},function(l,n){var u=n.component;l(n,4,0,u.adsId),l(n,17,0,t.yb(2,'<script type="text/javascript" src="',u.hostTracking,"?key=",u.key,'"><\/script>')),l(n,18,0,t.Gb(n,19).disabled||null,"NoopAnimations"===t.Gb(n,19)._animationMode),l(n,35,0,t.Gb(n,36).disabled||null,"NoopAnimations"===t.Gb(n,36)._animationMode)})}function pl(l){return t.Qb(0,[(l()(),t.wb(0,0,null,null,1,"app-tracking-website",[],null,null,null,gl,dl)),t.vb(1,245760,null,0,bl,[A.a,rl.d,G.a],null,null)],function(l,n){l(n,1,0)},null)}var hl=t.sb("app-tracking-website",bl,pl,{},{},[]),ml=u("POq0"),fl=u("Xd0L"),vl=u("HsOI"),Cl=u("wd5q"),wl=u("JjoW"),_l=u("IheW"),Ol=u("oapL"),xl=u("ZwOa"),Ml=u("zMNK"),kl=u("KPQW"),Pl=u("Sm0G"),El=u("D1Ds"),yl=u("1N2P"),Ll=u("L53J"),Il=u("ura0"),Gl=u("Nhcz"),Tl=u("u9T3"),Sl=u("RaCk"),Rl=u("Tk7p"),Al=u("5HBU");class Dl{}var Nl=u("zNkS");u.d(n,"AddTrackingTagsModuleNgFactory",function(){return Ql});var Ql=t.tb(e,[],function(l){return t.Db([t.Eb(512,t.l,t.gb,[[8,[a.a,i.a,el,hl]],[3,t.l],t.A]),t.Eb(4608,s.o,s.n,[t.x,[2,s.F]]),t.Eb(4608,ml.c,ml.c,[]),t.Eb(4608,fl.b,fl.z,[]),t.Eb(4608,p.c,p.c,[p.i,p.e,t.l,p.h,p.f,t.t,t.C,s.d,v.b,[2,s.i]]),t.Eb(5120,p.j,p.k,[p.c]),t.Eb(5120,g.b,g.c,[p.c]),t.Eb(4608,C.e,fl.c,[[2,fl.g],[2,fl.l]]),t.Eb(4608,r.x,r.x,[]),t.Eb(4608,r.f,r.f,[]),t.Eb(6144,vl.d,null,[Cl.a]),t.Eb(5120,wl.a,wl.b,[p.c]),t.Eb(5120,t.b,function(l,n){return[il.k(l,n)]},[s.d,t.F]),t.Eb(4608,G.a,G.a,[_l.c,L.a]),t.Eb(1073742336,s.c,s.c,[]),t.Eb(1073742336,v.a,v.a,[]),t.Eb(1073742336,fl.l,fl.l,[[2,fl.d],[2,C.f]]),t.Eb(1073742336,m.b,m.b,[]),t.Eb(1073742336,fl.v,fl.v,[]),t.Eb(1073742336,x.c,x.c,[]),t.Eb(1073742336,ml.d,ml.d,[]),t.Eb(1073742336,vl.e,vl.e,[]),t.Eb(1073742336,k.c,k.c,[]),t.Eb(1073742336,Ol.c,Ol.c,[]),t.Eb(1073742336,xl.b,xl.b,[]),t.Eb(1073742336,o.p,o.p,[]),t.Eb(1073742336,c.l,c.l,[]),t.Eb(1073742336,f.a,f.a,[]),t.Eb(1073742336,Ml.g,Ml.g,[]),t.Eb(1073742336,h.c,h.c,[]),t.Eb(1073742336,p.g,p.g,[]),t.Eb(1073742336,g.e,g.e,[]),t.Eb(1073742336,kl.a,kl.a,[]),t.Eb(1073742336,d.d,d.d,[]),t.Eb(1073742336,d.c,d.c,[]),t.Eb(1073742336,P.b,P.b,[]),t.Eb(1073742336,r.w,r.w,[]),t.Eb(1073742336,r.l,r.l,[]),t.Eb(1073742336,r.u,r.u,[]),t.Eb(1073742336,Pl.a,Pl.a,[]),t.Eb(1073742336,El.a,El.a,[]),t.Eb(1073742336,yl.a,yl.a,[]),t.Eb(1073742336,fl.t,fl.t,[]),t.Eb(1073742336,fl.r,fl.r,[]),t.Eb(1073742336,wl.d,wl.d,[]),t.Eb(1073742336,Ll.a,Ll.a,[]),t.Eb(1073742336,il.c,il.c,[]),t.Eb(1073742336,al.g,al.g,[]),t.Eb(1073742336,Il.c,Il.c,[]),t.Eb(1073742336,Gl.a,Gl.a,[]),t.Eb(1073742336,Tl.a,Tl.a,[[2,il.h],t.F]),t.Eb(1073742336,Sl.a,Sl.a,[]),t.Eb(1073742336,Rl.a,Rl.a,[]),t.Eb(1073742336,Al.a,Al.a,[]),t.Eb(1073742336,A.t,A.t,[[2,A.y],[2,A.p]]),t.Eb(1073742336,Dl,Dl,[]),t.Eb(1073742336,e,e,[]),t.Eb(1024,A.m,function(){return[[{path:"chien-dich",pathMatch:"full",component:R},{path:"website/:accountId",pathMatch:"full",component:bl,canActivate:[Nl.a]}]]},[])])})}}]);