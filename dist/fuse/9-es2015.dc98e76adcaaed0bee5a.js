(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{yPfU:function(n,l,e){"use strict";e.r(l);var t=e("8Y7J");class u{}var a=e("NcP4"),i=e("pMnS"),o=e("8rEH"),c=e("zQui"),d=e("SVse"),r=e("Z5h4"),s=e("s7LF"),p=e("r0V8"),g=e("Mz6y"),m=e("QQfA"),h=e("hOhj"),f=e("/HVE"),b=e("5GAg"),C=e("IP0z"),_=e("cUpR"),v=e("omvX"),M=e("pIm3"),P=e("bujt"),O=e("Fwaw"),k=e("Mr+X"),x=e("Gi4r"),w=e("igqZ"),R=e("k1t7"),T=e("H0VJ"),y=e("mZtN"),I=e("pZ6u"),E=e("Z0fI"),N=e("f3OE"),D=e("/uUt");class S extends I.a{constructor(n,l,e,t,u,a){super(),this._fuseProgressiveBarService=n,this._dialogService=l,this._sessionService=e,this._addTrackingTagsService=t,this._router=u,this._fuseSlashScreenService=a,this.displayedColumns=["order","id","name","status","tracking"],this.isProcessing=!1,this.campaignList=[],this.selectedCampaigns=[],this.trackingCampaignList=[]}ngOnInit(){const n=this._sessionService.getAccountId().pipe(Object(D.a)()).subscribe(n=>{n&&this.getOriginalCampaigns()});this.subscriptions.push(n)}onSelectAllCampaign(n){this.selectedCampaigns=n.checked?this.campaignList.map(n=>n.id):[]}onSelectCampaign(n,l){n.checked?this.selectedCampaigns.includes(l)||this.selectedCampaigns.push(l):this.selectedCampaigns=this.selectedCampaigns.filter(n=>n!==l),this.checkAll=this.campaignList.every(n=>this.selectedCampaigns.includes(n.id))}addCampaignTracking(){const n={campaignIds:this.selectedCampaigns};this._fuseProgressiveBarService.show(),this.isProcessing=!0;const l=this._addTrackingTagsService.addCampaignTracking(n).subscribe(n=>{this.getOriginalCampaigns(),setTimeout(()=>{this._dialogService._openSuccessDialog(n),this._fuseProgressiveBarService.hide(),this.isProcessing=!1},0)},n=>{this._fuseProgressiveBarService.hide(),this._dialogService._openErrorDialog(n.error),this.isProcessing=!1});this.subscriptions.push(l)}getOriginalCampaigns(){this.isProcessing=!0,this._fuseProgressiveBarService.show();const n=this._addTrackingTagsService.getOriginalCampaigns().subscribe(n=>{this.campaignList=n.data.campaignList;const l=this._addTrackingTagsService.getTrackingCampaigns().subscribe(n=>{this.trackingCampaignList=n.data.campaignIds,this.selectedCampaigns=this.trackingCampaignList,this.checkAll=this.campaignList.every(n=>this.selectedCampaigns.includes(n.id)),setTimeout(()=>{this._fuseProgressiveBarService.hide(),this.isProcessing=!1},0)},n=>{this.trackingCampaignList=[],this._fuseProgressiveBarService.hide(),this._dialogService._openErrorDialog(n.error),this.isProcessing=!1});this.subscriptions.push(l)},n=>{n.error.messages&&(this.campaignList=[],this.trackingCampaignList=[],this._dialogService._openErrorDialog(n.error),this.isProcessing=!1),this._fuseProgressiveBarService.hide()});this.subscriptions.push(n)}showSupportInfoDialog(){this._dialogService._openInfoDialog("Vui l\xf2ng li\xean h\u1ec7 email ha@appnet.edu.vn \u0111\u1ec3 \u0111\u01b0\u1ee3c h\u1ed7 tr\u1ee3 th\xeam.")}}var A=e("iInd"),L=t["\u0275crt"]({encapsulation:0,styles:[[".container[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]   .title1[_ngcontent-%COMP%]{padding:100px 60px 30px 30px;background:url(dark-material-bg.d914334bfb315da0efe3.jpg) 0 0/100% 100%;color:#fff;font-size:16px;font-weight:700}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]{padding:15px 30px}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .title2[_ngcontent-%COMP%]{margin-top:50px;font-weight:700;text-align:justify}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .usage[_ngcontent-%COMP%]{text-align:justify;padding-top:20px}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .link-button[_ngcontent-%COMP%]{color:#039be5;cursor:pointer;text-decoration:underline!important}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .tracking-example[_ngcontent-%COMP%]{margin-top:20px}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .tracking-example[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;box-shadow:1px 1px 4px silver}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .table-title[_ngcontent-%COMP%]{font-weight:700;text-align:center;padding:20px 10px 10px}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]{display:table;margin:20px auto 0;text-align:center;background-color:#eee;width:80%;padding-top:20px;padding-bottom:20px;border-left:5px solid #ff8c00}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]{max-height:500px;box-shadow:1px 1px 4px silver;background-color:#fff;overflow:auto}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-table[_ngcontent-%COMP%]{width:100%;box-shadow:none}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]{transition:.2s}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]:hover{background-color:rgba(3,155,229,.1)}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]:nth-child(1), .container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-header-cell[_ngcontent-%COMP%]:nth-child(1){flex:0 0 10%}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]:nth-child(3), .container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-header-cell[_ngcontent-%COMP%]:nth-child(3){flex:0 0 40%}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]:nth-child(5), .container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-header-cell[_ngcontent-%COMP%]:nth-child(5){flex:0 0 20%;padding-left:20px}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-header-cell[_ngcontent-%COMP%]{background:#039be5;color:#fff}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-header-row[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]{min-width:1000px;width:100%}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]{margin:10px auto 0;background-color:#44b543;color:#fff}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .enable-status[_ngcontent-%COMP%]{color:#039be5}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .disabled-status[_ngcontent-%COMP%]{color:silver}@media screen and (max-width:600px){.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]{padding:15px}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]{font-size:12px}}"]],data:{}});function q(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),t["\u0275did"](1,16384,null,0,o.e,[c.d,t.ElementRef],null,null),(n()(),t["\u0275ted"](-1,null,[" # "]))],null,null)}function H(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),t["\u0275did"](1,16384,null,0,o.a,[c.d,t.ElementRef],null,null),(n()(),t["\u0275ted"](2,null,[" "," "]))],null,function(n,l){n(l,2,0,l.context.index+1)})}function j(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),t["\u0275did"](1,16384,null,0,o.e,[c.d,t.ElementRef],null,null),(n()(),t["\u0275ted"](-1,null,[" ID "]))],null,null)}function B(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),t["\u0275did"](1,16384,null,0,o.a,[c.d,t.ElementRef],null,null),(n()(),t["\u0275ted"](2,null,[" "," "]))],null,function(n,l){n(l,2,0,l.context.$implicit.id)})}function V(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),t["\u0275did"](1,16384,null,0,o.e,[c.d,t.ElementRef],null,null),(n()(),t["\u0275ted"](-1,null,[" Chi\u1ebfn d\u1ecbch "]))],null,null)}function F(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),t["\u0275did"](1,16384,null,0,o.a,[c.d,t.ElementRef],null,null),(n()(),t["\u0275ted"](2,null,[" "," "]))],null,function(n,l){n(l,2,0,l.context.$implicit.name)})}function z(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),t["\u0275did"](1,16384,null,0,o.e,[c.d,t.ElementRef],null,null),(n()(),t["\u0275ted"](-1,null,[" Tr\u1ea1ng th\xe1i "]))],null,null)}function K(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"span",[["style","color: #039be5; font-weight: bold"]],null,null,null,null,null)),(n()(),t["\u0275ted"](1,null,["",""]))],null,function(n,l){n(l,1,0,l.parent.context.$implicit.status)})}function G(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"span",[["style","color: silver; font-weight: bold"]],null,null,null,null,null)),(n()(),t["\u0275ted"](1,null,["",""]))],null,function(n,l){n(l,1,0,l.parent.context.$implicit.status)})}function U(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,5,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),t["\u0275did"](1,16384,null,0,o.a,[c.d,t.ElementRef],null,null),(n()(),t["\u0275and"](16777216,null,null,1,null,K)),t["\u0275did"](3,16384,null,0,d.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,G)),t["\u0275did"](5,16384,null,0,d.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,3,0,"Ho\u1ea1t \u0111\u1ed9ng"===l.context.$implicit.status),n(l,5,0,"Ho\u1ea1t \u0111\u1ed9ng"!==l.context.$implicit.status)},null)}function Z(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,7,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),t["\u0275did"](1,16384,null,0,o.e,[c.d,t.ElementRef],null,null),(n()(),t["\u0275eld"](2,0,null,null,5,"p",[],null,null,null,null,null)),(n()(),t["\u0275eld"](3,16777216,null,null,3,"mat-checkbox",[["class","mat-checkbox"],["matTooltip","Ch\u1ecdn/ B\u1ecf ch\u1ecdn t\u1ea5t c\u1ea3"],["style","margin-right: 5px"]],[[8,"id",0],[1,"tabindex",0],[2,"mat-checkbox-indeterminate",null],[2,"mat-checkbox-checked",null],[2,"mat-checkbox-disabled",null],[2,"mat-checkbox-label-before",null],[2,"_mat-animation-noopable",null]],[[null,"change"],[null,"longpress"],[null,"keydown"],[null,"touchend"]],function(n,l,e){var u=!0,a=n.component;return"longpress"===l&&(u=!1!==t["\u0275nov"](n,5).show()&&u),"keydown"===l&&(u=!1!==t["\u0275nov"](n,5)._handleKeydown(e)&&u),"touchend"===l&&(u=!1!==t["\u0275nov"](n,5)._handleTouchend()&&u),"change"===l&&(u=!1!==a.onSelectAllCampaign(e)&&u),u},r.b,r.a)),t["\u0275prd"](5120,null,s.n,function(n){return[n]},[p.b]),t["\u0275did"](5,212992,null,0,g.d,[m.c,t.ElementRef,h.b,t.ViewContainerRef,t.NgZone,f.a,b.c,b.h,g.b,[2,C.b],[2,g.a],[2,_.f]],{message:[0,"message"]},null),t["\u0275did"](6,8568832,null,0,p.b,[t.ElementRef,t.ChangeDetectorRef,b.h,t.NgZone,[8,null],[2,p.a],[2,v.a]],{checked:[0,"checked"]},{change:"change"}),(n()(),t["\u0275ted"](-1,null,[" G\u1eafn m\xe3 "]))],function(n,l){var e=l.component;n(l,5,0,"Ch\u1ecdn/ B\u1ecf ch\u1ecdn t\u1ea5t c\u1ea3"),n(l,6,0,e.campaignList.length===e.selectedCampaigns.length)},function(n,l){n(l,3,0,t["\u0275nov"](l,6).id,null,t["\u0275nov"](l,6).indeterminate,t["\u0275nov"](l,6).checked,t["\u0275nov"](l,6).disabled,"before"==t["\u0275nov"](l,6).labelPosition,"NoopAnimations"===t["\u0275nov"](l,6)._animationMode)})}function $(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"mat-checkbox",[["class","mat-checkbox"]],[[8,"id",0],[1,"tabindex",0],[2,"mat-checkbox-indeterminate",null],[2,"mat-checkbox-checked",null],[2,"mat-checkbox-disabled",null],[2,"mat-checkbox-label-before",null],[2,"_mat-animation-noopable",null]],[[null,"change"]],function(n,l,e){var t=!0;return"change"===l&&(t=!1!==n.component.onSelectCampaign(e,n.parent.context.$implicit.id)&&t),t},r.b,r.a)),t["\u0275prd"](5120,null,s.n,function(n){return[n]},[p.b]),t["\u0275did"](2,8568832,null,0,p.b,[t.ElementRef,t.ChangeDetectorRef,b.h,t.NgZone,[8,null],[2,p.a],[2,v.a]],{checked:[0,"checked"]},{change:"change"})],function(n,l){n(l,2,0,l.component.selectedCampaigns.includes(l.parent.context.$implicit.id))},function(n,l){n(l,0,0,t["\u0275nov"](l,2).id,null,t["\u0275nov"](l,2).indeterminate,t["\u0275nov"](l,2).checked,t["\u0275nov"](l,2).disabled,"before"==t["\u0275nov"](l,2).labelPosition,"NoopAnimations"===t["\u0275nov"](l,2)._animationMode)})}function W(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"mat-checkbox",[["class","mat-checkbox"],["disabled",""]],[[8,"id",0],[1,"tabindex",0],[2,"mat-checkbox-indeterminate",null],[2,"mat-checkbox-checked",null],[2,"mat-checkbox-disabled",null],[2,"mat-checkbox-label-before",null],[2,"_mat-animation-noopable",null]],null,null,r.b,r.a)),t["\u0275prd"](5120,null,s.n,function(n){return[n]},[p.b]),t["\u0275did"](2,8568832,null,0,p.b,[t.ElementRef,t.ChangeDetectorRef,b.h,t.NgZone,[8,null],[2,p.a],[2,v.a]],{disabled:[0,"disabled"]},null)],function(n,l){n(l,2,0,"")},function(n,l){n(l,0,0,t["\u0275nov"](l,2).id,null,t["\u0275nov"](l,2).indeterminate,t["\u0275nov"](l,2).checked,t["\u0275nov"](l,2).disabled,"before"==t["\u0275nov"](l,2).labelPosition,"NoopAnimations"===t["\u0275nov"](l,2)._animationMode)})}function J(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,5,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),t["\u0275did"](1,16384,null,0,o.a,[c.d,t.ElementRef],null,null),(n()(),t["\u0275and"](16777216,null,null,1,null,$)),t["\u0275did"](3,16384,null,0,d.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,W)),t["\u0275did"](5,16384,null,0,d.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,3,0,"Ho\u1ea1t \u0111\u1ed9ng"===l.context.$implicit.status),n(l,5,0,"Ho\u1ea1t \u0111\u1ed9ng"!==l.context.$implicit.status)},null)}function Q(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"mat-header-row",[["class","mat-header-row"],["role","row"]],null,null,null,M.d,M.a)),t["\u0275prd"](6144,null,c.k,null,[o.g]),t["\u0275did"](2,49152,null,0,o.g,[],null,null)],null,null)}function X(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"mat-row",[["class","mat-row"],["role","row"]],null,null,null,M.e,M.b)),t["\u0275prd"](6144,null,c.m,null,[o.i]),t["\u0275did"](2,49152,null,0,o.i,[],null,null)],null,null)}function Y(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,78,"div",[["class","table-wrapper"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,77,"mat-table",[["class","mat-elevation-z8 mat-table"]],null,null,null,M.f,M.c)),t["\u0275prd"](6144,null,c.o,null,[o.k]),t["\u0275did"](3,2342912,null,4,o.k,[t.IterableDiffers,t.ChangeDetectorRef,t.ElementRef,[8,null],[2,C.b],d.DOCUMENT,f.a],{dataSource:[0,"dataSource"]},null),t["\u0275qud"](603979776,1,{_contentColumnDefs:1}),t["\u0275qud"](603979776,2,{_contentRowDefs:1}),t["\u0275qud"](603979776,3,{_contentHeaderRowDefs:1}),t["\u0275qud"](603979776,4,{_contentFooterRowDefs:1}),(n()(),t["\u0275eld"](8,0,null,null,12,null,null,null,null,null,null,null)),t["\u0275prd"](6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[o.c]),t["\u0275did"](10,16384,null,3,o.c,[],{name:[0,"name"]},null),t["\u0275qud"](603979776,5,{cell:0}),t["\u0275qud"](603979776,6,{headerCell:0}),t["\u0275qud"](603979776,7,{footerCell:0}),t["\u0275prd"](2048,[[1,4]],c.d,null,[o.c]),(n()(),t["\u0275and"](0,null,null,2,null,q)),t["\u0275did"](16,16384,null,0,o.f,[t.TemplateRef],null,null),t["\u0275prd"](2048,[[6,4]],c.j,null,[o.f]),(n()(),t["\u0275and"](0,null,null,2,null,H)),t["\u0275did"](19,16384,null,0,o.b,[t.TemplateRef],null,null),t["\u0275prd"](2048,[[5,4]],c.b,null,[o.b]),(n()(),t["\u0275eld"](21,0,null,null,12,null,null,null,null,null,null,null)),t["\u0275prd"](6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[o.c]),t["\u0275did"](23,16384,null,3,o.c,[],{name:[0,"name"]},null),t["\u0275qud"](603979776,8,{cell:0}),t["\u0275qud"](603979776,9,{headerCell:0}),t["\u0275qud"](603979776,10,{footerCell:0}),t["\u0275prd"](2048,[[1,4]],c.d,null,[o.c]),(n()(),t["\u0275and"](0,null,null,2,null,j)),t["\u0275did"](29,16384,null,0,o.f,[t.TemplateRef],null,null),t["\u0275prd"](2048,[[9,4]],c.j,null,[o.f]),(n()(),t["\u0275and"](0,null,null,2,null,B)),t["\u0275did"](32,16384,null,0,o.b,[t.TemplateRef],null,null),t["\u0275prd"](2048,[[8,4]],c.b,null,[o.b]),(n()(),t["\u0275eld"](34,0,null,null,12,null,null,null,null,null,null,null)),t["\u0275prd"](6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[o.c]),t["\u0275did"](36,16384,null,3,o.c,[],{name:[0,"name"]},null),t["\u0275qud"](603979776,11,{cell:0}),t["\u0275qud"](603979776,12,{headerCell:0}),t["\u0275qud"](603979776,13,{footerCell:0}),t["\u0275prd"](2048,[[1,4]],c.d,null,[o.c]),(n()(),t["\u0275and"](0,null,null,2,null,V)),t["\u0275did"](42,16384,null,0,o.f,[t.TemplateRef],null,null),t["\u0275prd"](2048,[[12,4]],c.j,null,[o.f]),(n()(),t["\u0275and"](0,null,null,2,null,F)),t["\u0275did"](45,16384,null,0,o.b,[t.TemplateRef],null,null),t["\u0275prd"](2048,[[11,4]],c.b,null,[o.b]),(n()(),t["\u0275eld"](47,0,null,null,12,null,null,null,null,null,null,null)),t["\u0275prd"](6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[o.c]),t["\u0275did"](49,16384,null,3,o.c,[],{name:[0,"name"]},null),t["\u0275qud"](603979776,14,{cell:0}),t["\u0275qud"](603979776,15,{headerCell:0}),t["\u0275qud"](603979776,16,{footerCell:0}),t["\u0275prd"](2048,[[1,4]],c.d,null,[o.c]),(n()(),t["\u0275and"](0,null,null,2,null,z)),t["\u0275did"](55,16384,null,0,o.f,[t.TemplateRef],null,null),t["\u0275prd"](2048,[[15,4]],c.j,null,[o.f]),(n()(),t["\u0275and"](0,null,null,2,null,U)),t["\u0275did"](58,16384,null,0,o.b,[t.TemplateRef],null,null),t["\u0275prd"](2048,[[14,4]],c.b,null,[o.b]),(n()(),t["\u0275eld"](60,0,null,null,12,null,null,null,null,null,null,null)),t["\u0275prd"](6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[o.c]),t["\u0275did"](62,16384,null,3,o.c,[],{name:[0,"name"]},null),t["\u0275qud"](603979776,17,{cell:0}),t["\u0275qud"](603979776,18,{headerCell:0}),t["\u0275qud"](603979776,19,{footerCell:0}),t["\u0275prd"](2048,[[1,4]],c.d,null,[o.c]),(n()(),t["\u0275and"](0,null,null,2,null,Z)),t["\u0275did"](68,16384,null,0,o.f,[t.TemplateRef],null,null),t["\u0275prd"](2048,[[18,4]],c.j,null,[o.f]),(n()(),t["\u0275and"](0,null,null,2,null,J)),t["\u0275did"](71,16384,null,0,o.b,[t.TemplateRef],null,null),t["\u0275prd"](2048,[[17,4]],c.b,null,[o.b]),(n()(),t["\u0275and"](0,null,null,2,null,Q)),t["\u0275did"](74,540672,null,0,o.h,[t.TemplateRef,t.IterableDiffers],{columns:[0,"columns"],sticky:[1,"sticky"]},null),t["\u0275prd"](2048,[[3,4]],c.l,null,[o.h]),(n()(),t["\u0275and"](0,null,null,2,null,X)),t["\u0275did"](77,540672,null,0,o.j,[t.TemplateRef,t.IterableDiffers],{columns:[0,"columns"]},null),t["\u0275prd"](2048,[[2,4]],c.n,null,[o.j])],function(n,l){var e=l.component;n(l,3,0,e.campaignList),n(l,10,0,"order"),n(l,23,0,"id"),n(l,36,0,"name"),n(l,49,0,"status"),n(l,62,0,"tracking"),n(l,74,0,e.displayedColumns,!0),n(l,77,0,e.displayedColumns)},null)}function nn(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,6,"p",[["style","text-align: center"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,5,"button",[["class","submit-button"],["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.addCampaignTracking()&&t),t},P.d,P.b)),t["\u0275did"](2,180224,null,0,O.b,[t.ElementRef,b.h,[2,v.a]],{disabled:[0,"disabled"]},null),(n()(),t["\u0275eld"](3,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,k.b,k.a)),t["\u0275did"](4,9158656,null,0,x.b,[t.ElementRef,x.d,[8,null],[2,x.a]],null,null),(n()(),t["\u0275ted"](-1,0,["location_searching"])),(n()(),t["\u0275ted"](-1,0,[" G\u1eaeN M\xc3 TRACKING "]))],function(n,l){n(l,2,0,l.component.isProcessing),n(l,4,0)},function(n,l){n(l,1,0,t["\u0275nov"](l,2).disabled||null,"NoopAnimations"===t["\u0275nov"](l,2)._animationMode),n(l,3,0,t["\u0275nov"](l,4).inline,"primary"!==t["\u0275nov"](l,4).color&&"accent"!==t["\u0275nov"](l,4).color&&"warn"!==t["\u0275nov"](l,4).color)})}function ln(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,7,"p",[["class","notification"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" Ch\xfang t\xf4i kh\xf4ng t\xecm th\u1ea5y chi\u1ebfn d\u1ecbch n\xe0o \u0111ang ch\u1ea1y. Vui l\xf2ng "])),(n()(),t["\u0275eld"](2,0,null,null,1,"a",[["class","link-button"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.getOriginalCampaigns()&&t),t},null,null)),(n()(),t["\u0275ted"](-1,null,["th\u1eed l\u1ea1i"])),(n()(),t["\u0275ted"](-1,null,[" ho\u1eb7c "])),(n()(),t["\u0275eld"](5,0,null,null,1,"a",[["class","link-button"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.showSupportInfoDialog()&&t),t},null,null)),(n()(),t["\u0275ted"](-1,null,["li\xean h\u1ec7"])),(n()(),t["\u0275ted"](-1,null,[" v\u1edbi h\u1ed7 tr\u1ee3 vi\xean \u0111\u1ec3 \u0111\u01b0\u1ee3c gi\xfap \u0111\u1ee1. "]))],null,null)}function en(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,29,"div",[["class","container"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,3,"div",[["class","title1"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" G\u1eaeN TRACKING THEO D\xd5I CHI\u1ebeN D\u1ecaCH T\xc0I KHO\u1ea2N "])),(n()(),t["\u0275eld"](3,0,null,null,1,"span",[["style","color: yellow; font-weight: bolder"]],null,null,null,null,null)),(n()(),t["\u0275ted"](4,null,["",""])),(n()(),t["\u0275eld"](5,0,null,null,24,"div",[["class","inner"]],null,null,null,null,null)),(n()(),t["\u0275eld"](6,0,null,null,3,"p",[["class","usage"]],null,null,null,null,null)),(n()(),t["\u0275eld"](7,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["C\xf4ng d\u1ee5ng c\u1ee7a Tracking:"])),(n()(),t["\u0275ted"](-1,null,[" Tracking l\xe0 \u0111o\u1ea1n m\xe3 nh\u1ecf, t\xedch h\u1ee3p v\xe0o trong qu\u1ea3ng c\xe1o Google Ads \u0111\u1ec3 theo d\xf5i ho\u1ea1t \u0111\u1ed9ng b\u1ea5m qu\u1ea3ng c\xe1o "])),(n()(),t["\u0275eld"](10,0,null,null,2,"div",[["class","tracking-example"]],null,null,null,null,null)),(n()(),t["\u0275eld"](11,0,null,null,1,"img",[["alt","Photo about tracking"],["class","mat-card-image"],["mat-card-image",""],["src","../../../../assets/images/huong-dan-tracking.jpg"]],null,null,null,null,null)),t["\u0275did"](12,16384,null,0,w.a,[],null,null),(n()(),t["\u0275eld"](13,0,null,null,3,"p",[["class","title2"]],null,null,null,null,null)),(n()(),t["\u0275eld"](14,0,null,null,1,"span",[["style","color: #039be5"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["[G\u1eaeN M\xc3]"])),(n()(),t["\u0275ted"](-1,null,[" CH\u1eccN CHI\u1ebeN D\u1ecaCH C\u1ea6N G\u1eaeN M\xc3 "])),(n()(),t["\u0275eld"](17,0,null,null,12,"form",[["class","form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,e){var u=!0;return"submit"===l&&(u=!1!==t["\u0275nov"](n,19).onSubmit(e)&&u),"reset"===l&&(u=!1!==t["\u0275nov"](n,19).onReset()&&u),u},null,null)),t["\u0275did"](18,16384,null,0,s.A,[],null,null),t["\u0275did"](19,4210688,null,0,s.r,[[8,null],[8,null]],null,null),t["\u0275prd"](2048,null,s.c,null,[s.r]),t["\u0275did"](21,16384,null,0,s.q,[[4,s.c]],null,null),(n()(),t["\u0275eld"](22,0,null,null,1,"p",[["class","table-title"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Ch\u1ecdn chi\u1ebfn d\u1ecbch \u0111\u1ec3 g\u1eafn tracking (n\xean ch\u1ecdn t\u1ea5t c\u1ea3)"])),(n()(),t["\u0275and"](16777216,null,null,1,null,Y)),t["\u0275did"](25,16384,null,0,d.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,nn)),t["\u0275did"](27,16384,null,0,d.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,ln)),t["\u0275did"](29,16384,null,0,d.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,25,0,e.campaignList.length>0&&!e.isProcessing),n(l,27,0,e.campaignList.length>0&&!e.isProcessing),n(l,29,0,0===e.campaignList.length&&!e.isProcessing)},function(n,l){n(l,4,0,l.component._sessionService.activeAdsAccountId),n(l,17,0,t["\u0275nov"](l,21).ngClassUntouched,t["\u0275nov"](l,21).ngClassTouched,t["\u0275nov"](l,21).ngClassPristine,t["\u0275nov"](l,21).ngClassDirty,t["\u0275nov"](l,21).ngClassValid,t["\u0275nov"](l,21).ngClassInvalid,t["\u0275nov"](l,21).ngClassPending)})}function tn(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-select-campaigns",[],null,null,null,en,L)),t["\u0275did"](1,245760,null,0,S,[R.a,T.a,y.a,E.a,A.p,N.a],null,null)],function(n,l){n(l,1,0)},null)}var un=t["\u0275ccf"]("app-select-campaigns",S,tn,{},{},[]),an=e("VDRc"),on=e("/q54"),cn=e("5vgI"),dn=e("Cako"),rn=e("AytR");class sn extends I.a{constructor(n,l,e){super(),this._activatedRoute=n,this._matDialog=l,this._addTrackingTagsService=e,this.hostTracking=rn.a.hostTracking,this.adsAccountIdPipe=new cn.a}ngOnInit(){const n=this._activatedRoute.params.subscribe(n=>{this.accountId=n.accountId;const l=this._addTrackingTagsService.getAdwordsAccountDetail(this.accountId).subscribe(n=>{this.adsId=this.adsAccountIdPipe.transform(n.data.adsAccount.adsId),this.key=n.data.adsAccount.key});this.subscriptions.push(l)});this.subscriptions.push(n)}copyKey(n){document.addEventListener("copy",l=>{l.clipboardData.setData("text/plain",n),l.preventDefault(),document.removeEventListener("copy",null)}),document.execCommand("copy")}checkWebsiteTracking(){return this._matDialog.open(dn.a,{autoFocus:!1,maxWidth:"100vw !important"}).componentInstance.account={accountId:this.accountId,adsId:this.adsId}}}var pn=e("s6ns"),gn=t["\u0275crt"]({encapsulation:0,styles:[[".container[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]   .title1[_ngcontent-%COMP%]{padding:100px 30px 30px;background:url(dark-material-bg.d914334bfb315da0efe3.jpg) 0 0/100% 100%;color:#fff;font-size:16px;font-weight:700}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]{padding:15px 30px}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{line-height:30px}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .hightline[_ngcontent-%COMP%]{padding:5px 10px;border-radius:5px;background-color:#eee;color:#ff1493;font-family:consolas}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]{padding:10px 0 10px 10px;width:100%;border-right:0;border-radius:3px 0 0 3px;font-family:consolas;background:#eee;color:#ff1493}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%]{font-family:consolas}.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .copy-button[_ngcontent-%COMP%]{border-radius:0 3px 3px 0;color:gray;padding-left:5px;border:0;background:#eee}@media screen and (max-width:600px){.container[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]{padding:15px}}"]],data:{}});function mn(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,41,"div",[["class","container"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,3,"div",[["class","title1"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" G\u1eaeN M\xc3 TRACKING V\xc0O WEBSITE T\xc0I KHO\u1ea2N "])),(n()(),t["\u0275eld"](3,0,null,null,1,"span",[["style","color: yellow"]],null,null,null,null,null)),(n()(),t["\u0275ted"](4,null,["",""])),(n()(),t["\u0275eld"](5,0,null,null,36,"div",[["class","inner"]],null,null,null,null,null)),(n()(),t["\u0275eld"](6,0,null,null,5,"p",[["class","info"]],null,null,null,null,null)),(n()(),t["\u0275eld"](7,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["T\u1ea1i sao c\u1ea7n g\u1eafn m\xe3:"])),(n()(),t["\u0275ted"](-1,null,[" H\u1ec7 th\u1ed1ng \u0111\u01b0a v\xe0o m\xe3 tracking \u0111\u1ec3 ph\xe1t hi\u1ec7n s\u1ed1 \u0111i\u1ec7n tho\u1ea1i truy c\u1eadp v\xe0o website c\u1ee7a b\u1ea1n. B\u1ea1n c\xf3 th\u1ec3 b\u1ecf m\xe3 v\xe0o b\u1ea5t c\u1ee9 v\u1ecb tr\xed n\xe0o trong website. Tuy nhi\xean t\u1ed1t nh\u1ea5t h\xe3y b\u1ecf m\xe3 v\xe0o trong "])),(n()(),t["\u0275eld"](10,0,null,null,1,"span",[["class","hightline"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["<head>[m\xe3 tracking]</head>"])),(n()(),t["\u0275eld"](12,0,null,null,29,"div",[["style","padding-top: 10px"]],null,null,null,null,null)),(n()(),t["\u0275eld"](13,0,null,null,3,"span",[["class","step"]],null,null,null,null,null)),(n()(),t["\u0275eld"](14,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["B\u01b0\u1edbc 1:"])),(n()(),t["\u0275ted"](-1,null,[" Copy m\xe3 tracking"])),(n()(),t["\u0275eld"](17,0,null,null,8,"div",[["fxLayout","row"],["style","padding-top: 10px"]],null,null,null,null,null)),t["\u0275did"](18,671744,null,0,an.c,[t.ElementRef,on.j,[2,an.k],on.f],{fxLayout:[0,"fxLayout"]},null),(n()(),t["\u0275eld"](19,0,[["inputKey",1]],null,0,"input",[["class","key"],["readonly",""],["type","text"]],[[8,"value",0]],null,null,null,null)),(n()(),t["\u0275eld"](20,16777216,null,null,5,"button",[["class","copy-button"],["mat-icon-button",""],["matTooltip","Nh\u1ea5n v\xe0o \u0111\u1ec3 sao ch\xe9p"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"],[null,"longpress"],[null,"keydown"],[null,"touchend"]],function(n,l,e){var u=!0,a=n.component;return"longpress"===l&&(u=!1!==t["\u0275nov"](n,22).show()&&u),"keydown"===l&&(u=!1!==t["\u0275nov"](n,22)._handleKeydown(e)&&u),"touchend"===l&&(u=!1!==t["\u0275nov"](n,22)._handleTouchend()&&u),"click"===l&&(u=!1!==a.copyKey(t["\u0275nov"](n,19).value)&&u),u},P.d,P.b)),t["\u0275did"](21,180224,null,0,O.b,[t.ElementRef,b.h,[2,v.a]],null,null),t["\u0275did"](22,212992,null,0,g.d,[m.c,t.ElementRef,h.b,t.ViewContainerRef,t.NgZone,f.a,b.c,b.h,g.b,[2,C.b],[2,g.a],[2,_.f]],{message:[0,"message"]},null),(n()(),t["\u0275eld"](23,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"],["style","font-size: 20px"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,k.b,k.a)),t["\u0275did"](24,9158656,null,0,x.b,[t.ElementRef,x.d,[8,null],[2,x.a]],null,null),(n()(),t["\u0275ted"](-1,0,["file_copy"])),(n()(),t["\u0275eld"](26,0,null,null,6,"p",[["style","padding-top: 10px; line-height: 30px"]],null,null,null,null,null)),(n()(),t["\u0275eld"](27,0,null,null,5,"span",[["class","step"]],null,null,null,null,null)),(n()(),t["\u0275eld"](28,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["B\u01b0\u1edbc 2:"])),(n()(),t["\u0275ted"](-1,null,[" M\u1edf c\xe1c website c\u1ee7a b\u1ea1n v\xe0 g\u1eafn m\xe3 v\xe0o trong th\u1ebb "])),(n()(),t["\u0275eld"](31,0,null,null,1,"span",[["class","hightline"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["<head>[m\xe3 tracking]</head>"])),(n()(),t["\u0275eld"](33,0,null,null,8,"div",[["style","padding-top: 10px"]],null,null,null,null,null)),(n()(),t["\u0275eld"](34,0,null,null,3,"span",[["class","step"]],null,null,null,null,null)),(n()(),t["\u0275eld"](35,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["B\u01b0\u1edbc 3:"])),(n()(),t["\u0275ted"](-1,null,[" Ki\u1ec3m tra m\xe3"])),(n()(),t["\u0275eld"](38,0,null,null,3,"p",[],null,null,null,null,null)),(n()(),t["\u0275eld"](39,0,null,null,2,"button",[["color","accent"],["mat-raised-button",""],["style","border-radius: 0"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.checkWebsiteTracking()&&t),t},P.d,P.b)),t["\u0275did"](40,180224,null,0,O.b,[t.ElementRef,b.h,[2,v.a]],{color:[0,"color"]},null),(n()(),t["\u0275ted"](-1,0,[" B\u1ea4M \u0110\u1ec2 KI\u1ec2M TRA M\xc3 "]))],function(n,l){n(l,18,0,"row"),n(l,22,0,"Nh\u1ea5n v\xe0o \u0111\u1ec3 sao ch\xe9p"),n(l,24,0),n(l,40,0,"accent")},function(n,l){var e=l.component;n(l,4,0,e.adsId),n(l,19,0,t["\u0275inlineInterpolate"](2,'<script type="text/javascript" src="',e.hostTracking,"?key=",e.key,'"><\/script>')),n(l,20,0,t["\u0275nov"](l,21).disabled||null,"NoopAnimations"===t["\u0275nov"](l,21)._animationMode),n(l,23,0,t["\u0275nov"](l,24).inline,"primary"!==t["\u0275nov"](l,24).color&&"accent"!==t["\u0275nov"](l,24).color&&"warn"!==t["\u0275nov"](l,24).color),n(l,39,0,t["\u0275nov"](l,40).disabled||null,"NoopAnimations"===t["\u0275nov"](l,40)._animationMode)})}function hn(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-tracking-website",[],null,null,null,mn,gn)),t["\u0275did"](1,245760,null,0,sn,[A.a,pn.d,E.a],null,null)],function(n,l){n(l,1,0)},null)}var fn=t["\u0275ccf"]("app-tracking-website",sn,hn,{},{},[]),bn=e("POq0"),Cn=e("Xd0L"),_n=e("HsOI"),vn=e("wd5q"),Mn=e("JjoW"),Pn=e("IheW"),On=e("oapL"),kn=e("ZwOa"),xn=e("zMNK"),wn=e("KPQW"),Rn=e("Sm0G"),Tn=e("D1Ds"),yn=e("1N2P"),In=e("L53J"),En=e("ura0"),Nn=e("Nhcz"),Dn=e("u9T3"),Sn=e("RaCk"),An=e("Tk7p"),Ln=e("5HBU");class qn{}var Hn=e("zNkS");e.d(l,"AddTrackingTagsModuleNgFactory",function(){return jn});var jn=t["\u0275cmf"](u,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,i.a,un,fn]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,d.NgLocalization,d.NgLocaleLocalization,[t.LOCALE_ID,[2,d["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,bn.c,bn.c,[]),t["\u0275mpd"](4608,Cn.b,Cn.z,[]),t["\u0275mpd"](4608,m.c,m.c,[m.i,m.e,t.ComponentFactoryResolver,m.h,m.f,t.Injector,t.NgZone,d.DOCUMENT,C.b,[2,d.Location]]),t["\u0275mpd"](5120,m.j,m.k,[m.c]),t["\u0275mpd"](5120,g.b,g.c,[m.c]),t["\u0275mpd"](4608,_.e,Cn.c,[[2,Cn.g],[2,Cn.l]]),t["\u0275mpd"](4608,s.x,s.x,[]),t["\u0275mpd"](4608,s.f,s.f,[]),t["\u0275mpd"](6144,_n.d,null,[vn.a]),t["\u0275mpd"](5120,Mn.a,Mn.b,[m.c]),t["\u0275mpd"](5120,t.APP_BOOTSTRAP_LISTENER,function(n,l){return[on.k(n,l)]},[d.DOCUMENT,t.PLATFORM_ID]),t["\u0275mpd"](4608,E.a,E.a,[Pn.c,y.a]),t["\u0275mpd"](1073742336,d.CommonModule,d.CommonModule,[]),t["\u0275mpd"](1073742336,C.a,C.a,[]),t["\u0275mpd"](1073742336,Cn.l,Cn.l,[[2,Cn.d],[2,_.f]]),t["\u0275mpd"](1073742336,f.b,f.b,[]),t["\u0275mpd"](1073742336,Cn.v,Cn.v,[]),t["\u0275mpd"](1073742336,O.c,O.c,[]),t["\u0275mpd"](1073742336,bn.d,bn.d,[]),t["\u0275mpd"](1073742336,_n.e,_n.e,[]),t["\u0275mpd"](1073742336,x.c,x.c,[]),t["\u0275mpd"](1073742336,On.c,On.c,[]),t["\u0275mpd"](1073742336,kn.b,kn.b,[]),t["\u0275mpd"](1073742336,c.p,c.p,[]),t["\u0275mpd"](1073742336,o.m,o.m,[]),t["\u0275mpd"](1073742336,b.a,b.a,[]),t["\u0275mpd"](1073742336,xn.g,xn.g,[]),t["\u0275mpd"](1073742336,h.c,h.c,[]),t["\u0275mpd"](1073742336,m.g,m.g,[]),t["\u0275mpd"](1073742336,g.e,g.e,[]),t["\u0275mpd"](1073742336,wn.a,wn.a,[]),t["\u0275mpd"](1073742336,p.d,p.d,[]),t["\u0275mpd"](1073742336,p.c,p.c,[]),t["\u0275mpd"](1073742336,w.b,w.b,[]),t["\u0275mpd"](1073742336,s.w,s.w,[]),t["\u0275mpd"](1073742336,s.l,s.l,[]),t["\u0275mpd"](1073742336,s.u,s.u,[]),t["\u0275mpd"](1073742336,Rn.a,Rn.a,[]),t["\u0275mpd"](1073742336,Tn.a,Tn.a,[]),t["\u0275mpd"](1073742336,yn.a,yn.a,[]),t["\u0275mpd"](1073742336,Cn.t,Cn.t,[]),t["\u0275mpd"](1073742336,Cn.r,Cn.r,[]),t["\u0275mpd"](1073742336,Mn.d,Mn.d,[]),t["\u0275mpd"](1073742336,In.a,In.a,[]),t["\u0275mpd"](1073742336,on.c,on.c,[]),t["\u0275mpd"](1073742336,an.g,an.g,[]),t["\u0275mpd"](1073742336,En.c,En.c,[]),t["\u0275mpd"](1073742336,Nn.a,Nn.a,[]),t["\u0275mpd"](1073742336,Dn.a,Dn.a,[[2,on.h],t.PLATFORM_ID]),t["\u0275mpd"](1073742336,Sn.a,Sn.a,[]),t["\u0275mpd"](1073742336,An.a,An.a,[]),t["\u0275mpd"](1073742336,Ln.a,Ln.a,[]),t["\u0275mpd"](1073742336,A.t,A.t,[[2,A.y],[2,A.p]]),t["\u0275mpd"](1073742336,qn,qn,[]),t["\u0275mpd"](1073742336,u,u,[]),t["\u0275mpd"](1024,A.m,function(){return[[{path:"chien-dich",pathMatch:"full",component:S},{path:"website/:accountId",pathMatch:"full",component:sn,canActivate:[Hn.a]}]]},[])])})}}]);