(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Isy7:function(l,n,t){"use strict";t.r(n);var e=t("8Y7J");class o{}var u=t("NcP4"),a=t("pMnS"),c=t("8rEH"),i=t("zQui"),r=t("bujt"),b=t("Fwaw"),s=t("5GAg"),d=t("omvX"),m=t("Mz6y"),p=t("QQfA"),g=t("hOhj"),h=t("/HVE"),f=t("IP0z"),_=t("cUpR"),w=t("Mr+X"),x=t("Gi4r"),y=t("VDRc"),C=t("/q54"),z=t("SVse"),M=t("iInd"),O=t("pIm3"),P=t("5vgI"),k=t("s7LF"),v=t("k1t7"),E=t("H0VJ"),A=t("mZtN"),N=t("pZ6u"),H=t("VMjx"),S=t("IheW");class T{constructor(l){this._http=l}getAccounts(){return this._http.get(H.a.AdwordsAccount.getAccounts)}getWebsites(l){const n=H.a.Website.getWebsites.replace("{accountId}",l);return this._http.get(n)}removeWebsite(l){const n=H.a.Website.removeWebsite.replace("{website_id}",l);return this._http.delete(n)}}T.ngInjectableDef=e.Lb({factory:function(){return new T(e.Pb(S.c))},token:T,providedIn:"root"});class D extends N.a{constructor(l,n,t,e){super(),this._fuseProgressiveBarService=l,this._dialogService=n,this._sessionService=t,this._adwordsAccountListService=e,this.displayedColumns=["task","date","adwords","website"]}ngOnInit(){this.getAccounts()}openRemoveWebsiteDialog(l){const n=this._dialogService._openConfirmDialog("X\xf3a t\xean mi\u1ec1n n\xe0y?").subscribe(n=>{if(n){this._fuseProgressiveBarService.show();const n=this._adwordsAccountListService.removeWebsite(l).subscribe(l=>{this._fuseProgressiveBarService.hide(),this._dialogService._openSuccessDialog(l),this.getAccounts()},l=>{l.error.messages&&this._dialogService._openErrorDialog(l.error),this._fuseProgressiveBarService.hide()});this.subscriptions.push(n)}});this.subscriptions.push(n)}getAccounts(){this.accounts=[],this._fuseProgressiveBarService.show();const l=this._adwordsAccountListService.getAccounts().subscribe(l=>{if(this.accounts=l.data.accounts,this.accounts.length>0)for(const n of this.accounts){n.websites=[];const l=this._adwordsAccountListService.getWebsites(n.id).subscribe(l=>{this._fuseProgressiveBarService.hide(),n.websites=l.data.website});this.subscriptions.push(l)}},l=>{l.error.messages&&this._dialogService._openErrorDialog(l.error),this._fuseProgressiveBarService.hide()});this.subscriptions.push(l)}}var F=e.nb({encapsulation:0,styles:[['@charset "UTF-8";.container[_ngcontent-%COMP%]{padding:15px 30px;width:100%}.container[_ngcontent-%COMP%]   .title1[_ngcontent-%COMP%]{padding:15px;background-color:#eee;color:gray;font-size:16px;font-weight:700}.container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]{height:440px;box-shadow:2px 2px 10px silver;background-color:#fff;overflow:auto;margin-top:30px}.container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   mat-table[_ngcontent-%COMP%]{width:100%;box-shadow:none}.container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   \u200bmat-header-cell[_ngcontent-%COMP%]{display:flex;justify-content:center}.container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   mat-header-row[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]{min-width:1500px;width:100%}.container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]:nth-child(1), .container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   mat-header-cell[_ngcontent-%COMP%]:nth-child(1){flex:0 0 8%;justify-content:left}.container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]:nth-child(2), .container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   mat-header-cell[_ngcontent-%COMP%]:nth-child(2){flex:0 0 12%;justify-content:left}.container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]:nth-child(3), .container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   mat-header-cell[_ngcontent-%COMP%]:nth-child(3){flex:0 0 18%;justify-content:left}.container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]:nth-child(3){font-weight:700;color:gray}.container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]:nth-child(4), .container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   mat-header-cell[_ngcontent-%COMP%]:nth-child(4){justify-content:left}.container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]:nth-child(4){font-weight:700;color:gray}.container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]{transition:.2s}.container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]:hover{background-color:#eeee}.container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]:hover   mat-cell[_ngcontent-%COMP%]{color:gray;font-weight:700}.container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:0}.container[_ngcontent-%COMP%]   .info-button[_ngcontent-%COMP%]{cursor:pointer}.container[_ngcontent-%COMP%]   .vip-service[_ngcontent-%COMP%]{color:#1e90ff;font-weight:700}.container[_ngcontent-%COMP%]   .free-service[_ngcontent-%COMP%]{color:coral;font-weight:700}.container[_ngcontent-%COMP%]   .button-area[_ngcontent-%COMP%]{padding-top:20px;display:flex;justify-content:center}.container[_ngcontent-%COMP%]   .tracking[_ngcontent-%COMP%]{color:orange}.container[_ngcontent-%COMP%]   .no-tracking[_ngcontent-%COMP%]{color:#1e90ff}.container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{padding-top:15px;display:flex;justify-content:center}@media screen and (max-width:600px){.container[_ngcontent-%COMP%]{padding:15px}}']],data:{}});function K(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),e.ob(1,16384,null,0,c.e,[i.d,e.k],null,null),(l()(),e.Hb(-1,null,[" T\xe1c v\u1ee5 "]))],null,null)}function j(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,7,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),e.ob(1,16384,null,0,c.a,[i.d,e.k],null,null),(l()(),e.pb(2,16777216,null,null,5,"button",[["color","accent"],["mat-icon-button",""],["matTooltip","C\u1eadp nh\u1eadt d\u1eef li\u1ec7u"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"longpress"],[null,"keydown"],[null,"touchend"]],function(l,n,t){var o=!0;return"longpress"===n&&(o=!1!==e.zb(l,4).show()&&o),"keydown"===n&&(o=!1!==e.zb(l,4)._handleKeydown(t)&&o),"touchend"===n&&(o=!1!==e.zb(l,4)._handleTouchend()&&o),o},r.d,r.b)),e.ob(3,180224,null,0,b.b,[e.k,s.e,[2,d.a]],{color:[0,"color"]},null),e.ob(4,212992,null,0,m.d,[p.c,e.k,g.b,e.N,e.x,h.a,s.c,s.e,m.b,[2,f.b],[2,m.a],[2,_.f]],{message:[0,"message"]},null),(l()(),e.pb(5,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,w.b,w.a)),e.ob(6,9158656,null,0,x.b,[e.k,x.d,[8,null],[2,x.a]],null,null),(l()(),e.Hb(-1,0,["update"]))],function(l,n){l(n,3,0,"accent"),l(n,4,0,"C\u1eadp nh\u1eadt d\u1eef li\u1ec7u"),l(n,6,0)},function(l,n){l(n,2,0,e.zb(n,3).disabled||null,"NoopAnimations"===e.zb(n,3)._animationMode),l(n,5,0,e.zb(n,6).inline,"primary"!==e.zb(n,6).color&&"accent"!==e.zb(n,6).color&&"warn"!==e.zb(n,6).color)})}function L(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),e.ob(1,16384,null,0,c.e,[i.d,e.k],null,null),(l()(),e.Hb(-1,null,[" Ng\xe0y "]))],null,null)}function I(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,3,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),e.ob(1,16384,null,0,c.a,[i.d,e.k],null,null),(l()(),e.Hb(2,null,[" "," "])),e.Db(3,2)],null,function(l,n){var t=e.Ib(n,2,0,l(n,3,0,e.zb(n.parent,0),n.context.$implicit.createdAt,"dd/MM/yyyy HH:mm"));l(n,2,0,t)})}function J(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),e.ob(1,16384,null,0,c.e,[i.d,e.k],null,null),(l()(),e.Hb(-1,null,[" AdWords "]))],null,null)}function R(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,25,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),e.ob(1,16384,null,0,c.a,[i.d,e.k],null,null),(l()(),e.pb(2,0,null,null,23,"div",[["fxLayout","row"]],null,null,null,null,null)),e.ob(3,671744,null,0,y.c,[e.k,C.j,[2,y.k],C.f],{fxLayout:[0,"fxLayout"]},null),(l()(),e.pb(4,0,null,null,2,"p",[["style","width: 100px"]],null,null,null,null,null)),(l()(),e.Hb(5,null,[" "," "])),e.Db(6,1),(l()(),e.pb(7,0,null,null,18,"div",[],null,null,null,null,null)),(l()(),e.pb(8,16777216,null,null,5,"button",[["color","accent"],["mat-icon-button",""],["matTooltip","Xem b\xe1o c\xe1o t\u1ed5ng quan"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"longpress"],[null,"keydown"],[null,"touchend"]],function(l,n,t){var o=!0;return"longpress"===n&&(o=!1!==e.zb(l,10).show()&&o),"keydown"===n&&(o=!1!==e.zb(l,10)._handleKeydown(t)&&o),"touchend"===n&&(o=!1!==e.zb(l,10)._handleTouchend()&&o),o},r.d,r.b)),e.ob(9,180224,null,0,b.b,[e.k,s.e,[2,d.a]],{color:[0,"color"]},null),e.ob(10,212992,null,0,m.d,[p.c,e.k,g.b,e.N,e.x,h.a,s.c,s.e,m.b,[2,f.b],[2,m.a],[2,_.f]],{message:[0,"message"]},null),(l()(),e.pb(11,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,w.b,w.a)),e.ob(12,9158656,null,0,x.b,[e.k,x.d,[8,null],[2,x.a]],null,null),(l()(),e.Hb(-1,0,["notifications"])),(l()(),e.pb(14,16777216,null,null,5,"button",[["color","accent"],["mat-icon-button",""],["matTooltip","Ch\u1ec9nh s\u1eeda"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"longpress"],[null,"keydown"],[null,"touchend"]],function(l,n,t){var o=!0;return"longpress"===n&&(o=!1!==e.zb(l,16).show()&&o),"keydown"===n&&(o=!1!==e.zb(l,16)._handleKeydown(t)&&o),"touchend"===n&&(o=!1!==e.zb(l,16)._handleTouchend()&&o),o},r.d,r.b)),e.ob(15,180224,null,0,b.b,[e.k,s.e,[2,d.a]],{color:[0,"color"]},null),e.ob(16,212992,null,0,m.d,[p.c,e.k,g.b,e.N,e.x,h.a,s.c,s.e,m.b,[2,f.b],[2,m.a],[2,_.f]],{message:[0,"message"]},null),(l()(),e.pb(17,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,w.b,w.a)),e.ob(18,9158656,null,0,x.b,[e.k,x.d,[8,null],[2,x.a]],null,null),(l()(),e.Hb(-1,0,["edit"])),(l()(),e.pb(20,16777216,null,null,5,"button",[["color","accent"],["mat-icon-button",""],["matTooltip","X\xf3a"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"longpress"],[null,"keydown"],[null,"touchend"]],function(l,n,t){var o=!0;return"longpress"===n&&(o=!1!==e.zb(l,22).show()&&o),"keydown"===n&&(o=!1!==e.zb(l,22)._handleKeydown(t)&&o),"touchend"===n&&(o=!1!==e.zb(l,22)._handleTouchend()&&o),o},r.d,r.b)),e.ob(21,180224,null,0,b.b,[e.k,s.e,[2,d.a]],{color:[0,"color"]},null),e.ob(22,212992,null,0,m.d,[p.c,e.k,g.b,e.N,e.x,h.a,s.c,s.e,m.b,[2,f.b],[2,m.a],[2,_.f]],{message:[0,"message"]},null),(l()(),e.pb(23,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,w.b,w.a)),e.ob(24,9158656,null,0,x.b,[e.k,x.d,[8,null],[2,x.a]],null,null),(l()(),e.Hb(-1,0,["delete"]))],function(l,n){l(n,3,0,"row"),l(n,9,0,"accent"),l(n,10,0,"Xem b\xe1o c\xe1o t\u1ed5ng quan"),l(n,12,0),l(n,15,0,"accent"),l(n,16,0,"Ch\u1ec9nh s\u1eeda"),l(n,18,0),l(n,21,0,"accent"),l(n,22,0,"X\xf3a"),l(n,24,0)},function(l,n){var t=e.Ib(n,5,0,l(n,6,0,e.zb(n.parent,1),n.context.$implicit.adsId));l(n,5,0,t),l(n,8,0,e.zb(n,9).disabled||null,"NoopAnimations"===e.zb(n,9)._animationMode),l(n,11,0,e.zb(n,12).inline,"primary"!==e.zb(n,12).color&&"accent"!==e.zb(n,12).color&&"warn"!==e.zb(n,12).color),l(n,14,0,e.zb(n,15).disabled||null,"NoopAnimations"===e.zb(n,15)._animationMode),l(n,17,0,e.zb(n,18).inline,"primary"!==e.zb(n,18).color&&"accent"!==e.zb(n,18).color&&"warn"!==e.zb(n,18).color),l(n,20,0,e.zb(n,21).disabled||null,"NoopAnimations"===e.zb(n,21)._animationMode),l(n,23,0,e.zb(n,24).inline,"primary"!==e.zb(n,24).color&&"accent"!==e.zb(n,24).color&&"warn"!==e.zb(n,24).color)})}function W(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),e.ob(1,16384,null,0,c.e,[i.d,e.k],null,null),(l()(),e.Hb(-1,null,[" Website "]))],null,null)}function q(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,24,"li",[["fxLayout","row"]],null,null,null,null,null)),e.ob(1,671744,null,0,y.c,[e.k,C.j,[2,y.k],C.f],{fxLayout:[0,"fxLayout"]},null),(l()(),e.pb(2,0,null,null,3,"p",[["style","width: 200px"]],null,null,null,null,null)),(l()(),e.pb(3,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Hb(4,null,["",""])),(l()(),e.Hb(5,null,[". ",""])),(l()(),e.pb(6,0,null,null,18,"div",[],null,null,null,null,null)),(l()(),e.pb(7,16777216,null,null,5,"button",[["color","accent"],["mat-icon-button",""],["matTooltip","G\u1eafn tracking chi\u1ebfn d\u1ecbch t\xe0i kho\u1ea3n"],["style","color: red"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"longpress"],[null,"keydown"],[null,"touchend"]],function(l,n,t){var o=!0;return"longpress"===n&&(o=!1!==e.zb(l,9).show()&&o),"keydown"===n&&(o=!1!==e.zb(l,9)._handleKeydown(t)&&o),"touchend"===n&&(o=!1!==e.zb(l,9)._handleTouchend()&&o),o},r.d,r.b)),e.ob(8,180224,null,0,b.b,[e.k,s.e,[2,d.a]],{color:[0,"color"]},null),e.ob(9,212992,null,0,m.d,[p.c,e.k,g.b,e.N,e.x,h.a,s.c,s.e,m.b,[2,f.b],[2,m.a],[2,_.f]],{message:[0,"message"]},null),(l()(),e.pb(10,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,w.b,w.a)),e.ob(11,9158656,null,0,x.b,[e.k,x.d,[8,null],[2,x.a]],null,null),(l()(),e.Hb(-1,0,["code"])),(l()(),e.pb(13,16777216,null,null,5,"button",[["color","accent"],["mat-icon-button",""],["matTooltip","Ng\u1eaft k\u1ebft n\u1ed1i Adwords cho website n\xe0y"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"],[null,"longpress"],[null,"keydown"],[null,"touchend"]],function(l,n,t){var o=!0,u=l.component;return"longpress"===n&&(o=!1!==e.zb(l,15).show()&&o),"keydown"===n&&(o=!1!==e.zb(l,15)._handleKeydown(t)&&o),"touchend"===n&&(o=!1!==e.zb(l,15)._handleTouchend()&&o),"click"===n&&(o=!1!==u.openRemoveWebsiteDialog(l.context.$implicit.code)&&o),o},r.d,r.b)),e.ob(14,180224,null,0,b.b,[e.k,s.e,[2,d.a]],{color:[0,"color"]},null),e.ob(15,212992,null,0,m.d,[p.c,e.k,g.b,e.N,e.x,h.a,s.c,s.e,m.b,[2,f.b],[2,m.a],[2,_.f]],{message:[0,"message"]},null),(l()(),e.pb(16,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,w.b,w.a)),e.ob(17,9158656,null,0,x.b,[e.k,x.d,[8,null],[2,x.a]],null,null),(l()(),e.Hb(-1,0,["delete"])),(l()(),e.pb(19,16777216,null,null,5,"button",[["color","accent"],["mat-icon-button",""],["matTooltip","K\u1ebft n\u1ed1i AdWords cho website n\xe0y"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"longpress"],[null,"keydown"],[null,"touchend"]],function(l,n,t){var o=!0;return"longpress"===n&&(o=!1!==e.zb(l,21).show()&&o),"keydown"===n&&(o=!1!==e.zb(l,21)._handleKeydown(t)&&o),"touchend"===n&&(o=!1!==e.zb(l,21)._handleTouchend()&&o),o},r.d,r.b)),e.ob(20,180224,null,0,b.b,[e.k,s.e,[2,d.a]],{color:[0,"color"]},null),e.ob(21,212992,null,0,m.d,[p.c,e.k,g.b,e.N,e.x,h.a,s.c,s.e,m.b,[2,f.b],[2,m.a],[2,_.f]],{message:[0,"message"]},null),(l()(),e.pb(22,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,w.b,w.a)),e.ob(23,9158656,null,0,x.b,[e.k,x.d,[8,null],[2,x.a]],null,null),(l()(),e.Hb(-1,0,["add_circle_outline"]))],function(l,n){l(n,1,0,"row"),l(n,8,0,"accent"),l(n,9,0,"G\u1eafn tracking chi\u1ebfn d\u1ecbch t\xe0i kho\u1ea3n"),l(n,11,0),l(n,14,0,"accent"),l(n,15,0,"Ng\u1eaft k\u1ebft n\u1ed1i Adwords cho website n\xe0y"),l(n,17,0),l(n,20,0,"accent"),l(n,21,0,"K\u1ebft n\u1ed1i AdWords cho website n\xe0y"),l(n,23,0)},function(l,n){l(n,4,0,n.context.index+1),l(n,5,0,n.context.$implicit.domain),l(n,7,0,e.zb(n,8).disabled||null,"NoopAnimations"===e.zb(n,8)._animationMode),l(n,10,0,e.zb(n,11).inline,"primary"!==e.zb(n,11).color&&"accent"!==e.zb(n,11).color&&"warn"!==e.zb(n,11).color),l(n,13,0,e.zb(n,14).disabled||null,"NoopAnimations"===e.zb(n,14)._animationMode),l(n,16,0,e.zb(n,17).inline,"primary"!==e.zb(n,17).color&&"accent"!==e.zb(n,17).color&&"warn"!==e.zb(n,17).color),l(n,19,0,e.zb(n,20).disabled||null,"NoopAnimations"===e.zb(n,20)._animationMode),l(n,22,0,e.zb(n,23).inline,"primary"!==e.zb(n,23).color&&"accent"!==e.zb(n,23).color&&"warn"!==e.zb(n,23).color)})}function B(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,13,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),e.ob(1,16384,null,0,c.a,[i.d,e.k],null,null),(l()(),e.pb(2,0,null,null,11,"ul",[],null,null,null,null,null)),(l()(),e.eb(16777216,null,null,1,null,q)),e.ob(4,278528,null,0,z.l,[e.N,e.K,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.pb(5,0,null,null,8,"li",[],null,null,null,null,null)),(l()(),e.pb(6,0,null,null,7,"a",[["color","accent"],["mat-button",""],["style","padding-left: 0"]],[[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null],[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var o=!0;return"click"===n&&(o=!1!==e.zb(l,7)._haltDisabledEvents(t)&&o),"click"===n&&(o=!1!==e.zb(l,8).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o),o},r.c,r.a)),e.ob(7,180224,null,0,b.a,[s.e,e.k,[2,d.a]],{color:[0,"color"]},null),e.ob(8,671744,null,0,M.s,[M.p,M.a,z.j],{routerLink:[0,"routerLink"]},null),e.Ab(9,2),(l()(),e.pb(10,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,w.b,w.a)),e.ob(11,9158656,null,0,x.b,[e.k,x.d,[8,null],[2,x.a]],null,null),(l()(),e.Hb(-1,0,["add_circle_outline"])),(l()(),e.Hb(-1,0,[" Th\xeam Website "]))],function(l,n){l(n,4,0,n.context.$implicit.websites),l(n,7,0,"accent");var t=l(n,9,0,"/quan-ly-website",n.context.$implicit.adsId);l(n,8,0,t),l(n,11,0)},function(l,n){l(n,6,0,e.zb(n,7).disabled?-1:e.zb(n,7).tabIndex||0,e.zb(n,7).disabled||null,e.zb(n,7).disabled.toString(),"NoopAnimations"===e.zb(n,7)._animationMode,e.zb(n,8).target,e.zb(n,8).href),l(n,10,0,e.zb(n,11).inline,"primary"!==e.zb(n,11).color&&"accent"!==e.zb(n,11).color&&"warn"!==e.zb(n,11).color)})}function U(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,2,"mat-header-row",[["class","mat-header-row"],["role","row"]],null,null,null,O.d,O.a)),e.Eb(6144,null,i.k,null,[c.g]),e.ob(2,49152,null,0,c.g,[],null,null)],null,null)}function V(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,2,"mat-row",[["class","mat-row"],["role","row"]],null,null,null,O.e,O.b)),e.Eb(6144,null,i.m,null,[c.i]),e.ob(2,49152,null,0,c.i,[],null,null)],null,null)}function X(l){return e.Jb(0,[e.Bb(0,z.e,[e.s]),e.Bb(0,P.a,[]),(l()(),e.pb(2,0,null,null,80,"div",[["class","container"]],null,null,null,null,null)),(l()(),e.pb(3,0,null,null,1,"div",[["class","title1"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,[" QU\u1ea2N L\xdd T\xc0I KHO\u1ea2N ADWORDS V\xc0 WEBSITE "])),(l()(),e.pb(5,0,null,null,77,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,t){var o=!0;return"submit"===n&&(o=!1!==e.zb(l,7).onSubmit(t)&&o),"reset"===n&&(o=!1!==e.zb(l,7).onReset()&&o),o},null,null)),e.ob(6,16384,null,0,k.y,[],null,null),e.ob(7,4210688,null,0,k.r,[[8,null],[8,null]],null,null),e.Eb(2048,null,k.c,null,[k.r]),e.ob(9,16384,null,0,k.q,[[4,k.c]],null,null),(l()(),e.pb(10,0,null,null,65,"div",[["class","table-container"]],null,null,null,null,null)),(l()(),e.pb(11,0,null,null,64,"mat-table",[["class","mat-elevation-z8 mat-table"]],null,null,null,O.f,O.c)),e.Eb(6144,null,i.o,null,[c.k]),e.ob(13,2342912,null,4,c.k,[e.q,e.h,e.k,[8,null],[2,f.b],z.d,h.a],{dataSource:[0,"dataSource"]},null),e.Fb(603979776,1,{_contentColumnDefs:1}),e.Fb(603979776,2,{_contentRowDefs:1}),e.Fb(603979776,3,{_contentHeaderRowDefs:1}),e.Fb(603979776,4,{_contentFooterRowDefs:1}),(l()(),e.pb(18,0,null,null,12,null,null,null,null,null,null,null)),e.Eb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[c.c]),e.ob(20,16384,null,3,c.c,[],{name:[0,"name"]},null),e.Fb(603979776,5,{cell:0}),e.Fb(603979776,6,{headerCell:0}),e.Fb(603979776,7,{footerCell:0}),e.Eb(2048,[[1,4]],i.d,null,[c.c]),(l()(),e.eb(0,null,null,2,null,K)),e.ob(26,16384,null,0,c.f,[e.K],null,null),e.Eb(2048,[[6,4]],i.j,null,[c.f]),(l()(),e.eb(0,null,null,2,null,j)),e.ob(29,16384,null,0,c.b,[e.K],null,null),e.Eb(2048,[[5,4]],i.b,null,[c.b]),(l()(),e.pb(31,0,null,null,12,null,null,null,null,null,null,null)),e.Eb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[c.c]),e.ob(33,16384,null,3,c.c,[],{name:[0,"name"]},null),e.Fb(603979776,8,{cell:0}),e.Fb(603979776,9,{headerCell:0}),e.Fb(603979776,10,{footerCell:0}),e.Eb(2048,[[1,4]],i.d,null,[c.c]),(l()(),e.eb(0,null,null,2,null,L)),e.ob(39,16384,null,0,c.f,[e.K],null,null),e.Eb(2048,[[9,4]],i.j,null,[c.f]),(l()(),e.eb(0,null,null,2,null,I)),e.ob(42,16384,null,0,c.b,[e.K],null,null),e.Eb(2048,[[8,4]],i.b,null,[c.b]),(l()(),e.pb(44,0,null,null,12,null,null,null,null,null,null,null)),e.Eb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[c.c]),e.ob(46,16384,null,3,c.c,[],{name:[0,"name"]},null),e.Fb(603979776,11,{cell:0}),e.Fb(603979776,12,{headerCell:0}),e.Fb(603979776,13,{footerCell:0}),e.Eb(2048,[[1,4]],i.d,null,[c.c]),(l()(),e.eb(0,null,null,2,null,J)),e.ob(52,16384,null,0,c.f,[e.K],null,null),e.Eb(2048,[[12,4]],i.j,null,[c.f]),(l()(),e.eb(0,null,null,2,null,R)),e.ob(55,16384,null,0,c.b,[e.K],null,null),e.Eb(2048,[[11,4]],i.b,null,[c.b]),(l()(),e.pb(57,0,null,null,12,null,null,null,null,null,null,null)),e.Eb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[c.c]),e.ob(59,16384,null,3,c.c,[],{name:[0,"name"]},null),e.Fb(603979776,14,{cell:0}),e.Fb(603979776,15,{headerCell:0}),e.Fb(603979776,16,{footerCell:0}),e.Eb(2048,[[1,4]],i.d,null,[c.c]),(l()(),e.eb(0,null,null,2,null,W)),e.ob(65,16384,null,0,c.f,[e.K],null,null),e.Eb(2048,[[15,4]],i.j,null,[c.f]),(l()(),e.eb(0,null,null,2,null,B)),e.ob(68,16384,null,0,c.b,[e.K],null,null),e.Eb(2048,[[14,4]],i.b,null,[c.b]),(l()(),e.eb(0,null,null,2,null,U)),e.ob(71,540672,null,0,c.h,[e.K,e.q],{columns:[0,"columns"],sticky:[1,"sticky"]},null),e.Eb(2048,[[3,4]],i.l,null,[c.h]),(l()(),e.eb(0,null,null,2,null,V)),e.ob(74,540672,null,0,c.j,[e.K,e.q],{columns:[0,"columns"]},null),e.Eb(2048,[[2,4]],i.n,null,[c.j]),(l()(),e.pb(76,0,null,null,6,"div",[["class","button-area"]],null,null,null,null,null)),(l()(),e.pb(77,0,null,null,5,"button",[["color","accent"],["mat-raised-button",""],["style","border-radius: 0"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,r.d,r.b)),e.ob(78,180224,null,0,b.b,[e.k,s.e,[2,d.a]],{color:[0,"color"]},null),(l()(),e.pb(79,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,w.b,w.a)),e.ob(80,9158656,null,0,x.b,[e.k,x.d,[8,null],[2,x.a]],null,null),(l()(),e.Hb(-1,0,["wifi"])),(l()(),e.Hb(-1,0,[" K\u1ebeT N\u1ed0I T\xc0I KHO\u1ea2N ADWORDS "]))],function(l,n){var t=n.component;l(n,13,0,t.accounts),l(n,20,0,"task"),l(n,33,0,"date"),l(n,46,0,"adwords"),l(n,59,0,"website"),l(n,71,0,t.displayedColumns,!0),l(n,74,0,t.displayedColumns),l(n,78,0,"accent"),l(n,80,0)},function(l,n){l(n,5,0,e.zb(n,9).ngClassUntouched,e.zb(n,9).ngClassTouched,e.zb(n,9).ngClassPristine,e.zb(n,9).ngClassDirty,e.zb(n,9).ngClassValid,e.zb(n,9).ngClassInvalid,e.zb(n,9).ngClassPending),l(n,77,0,e.zb(n,78).disabled||null,"NoopAnimations"===e.zb(n,78)._animationMode),l(n,79,0,e.zb(n,80).inline,"primary"!==e.zb(n,80).color&&"accent"!==e.zb(n,80).color&&"warn"!==e.zb(n,80).color)})}function Q(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,1,"app-adwords-account-list",[],null,null,null,X,F)),e.ob(1,245760,null,0,D,[v.a,E.a,A.a,T],null,null)],function(l,n){l(n,1,0)},null)}var $=e.lb("app-adwords-account-list",D,Q,{},{},[]),G=t("POq0"),Z=t("Xd0L"),Y=t("HsOI"),ll=t("wd5q"),nl=t("JjoW"),tl=t("oapL"),el=t("ZwOa"),ol=t("zMNK"),ul=t("KPQW"),al=t("r0V8"),cl=t("Sm0G"),il=t("D1Ds"),rl=t("1N2P"),bl=t("L53J"),sl=t("ura0"),dl=t("Nhcz"),ml=t("u9T3"),pl=t("RaCk"),gl=t("Tk7p"),hl=t("5HBU"),fl=t("nwAg");class _l{}t.d(n,"AdwordsAccountListModuleNgFactory",function(){return wl});var wl=e.mb(o,[],function(l){return e.wb([e.xb(512,e.j,e.Z,[[8,[u.a,a.a,$]],[3,e.j],e.v]),e.xb(4608,z.o,z.n,[e.s,[2,z.E]]),e.xb(4608,G.c,G.c,[]),e.xb(4608,Z.b,Z.y,[]),e.xb(4608,p.c,p.c,[p.i,p.e,e.j,p.h,p.f,e.p,e.x,z.d,f.b,[2,z.i]]),e.xb(5120,p.j,p.k,[p.c]),e.xb(5120,m.b,m.c,[p.c]),e.xb(4608,_.e,Z.c,[[2,Z.g],[2,Z.l]]),e.xb(4608,k.w,k.w,[]),e.xb(4608,k.f,k.f,[]),e.xb(6144,Y.d,null,[ll.a]),e.xb(5120,nl.a,nl.b,[p.c]),e.xb(5120,e.b,function(l,n){return[C.k(l,n)]},[z.d,e.z]),e.xb(4608,T,T,[S.c]),e.xb(1073742336,z.c,z.c,[]),e.xb(1073742336,f.a,f.a,[]),e.xb(1073742336,Z.l,Z.l,[[2,Z.d],[2,_.f]]),e.xb(1073742336,h.b,h.b,[]),e.xb(1073742336,Z.v,Z.v,[]),e.xb(1073742336,b.c,b.c,[]),e.xb(1073742336,G.d,G.d,[]),e.xb(1073742336,Y.e,Y.e,[]),e.xb(1073742336,x.c,x.c,[]),e.xb(1073742336,tl.c,tl.c,[]),e.xb(1073742336,el.b,el.b,[]),e.xb(1073742336,i.p,i.p,[]),e.xb(1073742336,c.l,c.l,[]),e.xb(1073742336,s.a,s.a,[]),e.xb(1073742336,ol.f,ol.f,[]),e.xb(1073742336,g.c,g.c,[]),e.xb(1073742336,p.g,p.g,[]),e.xb(1073742336,m.e,m.e,[]),e.xb(1073742336,ul.a,ul.a,[]),e.xb(1073742336,k.v,k.v,[]),e.xb(1073742336,k.l,k.l,[]),e.xb(1073742336,k.t,k.t,[]),e.xb(1073742336,al.d,al.d,[]),e.xb(1073742336,al.c,al.c,[]),e.xb(1073742336,cl.a,cl.a,[]),e.xb(1073742336,il.a,il.a,[]),e.xb(1073742336,rl.a,rl.a,[]),e.xb(1073742336,Z.t,Z.t,[]),e.xb(1073742336,Z.r,Z.r,[]),e.xb(1073742336,nl.d,nl.d,[]),e.xb(1073742336,bl.a,bl.a,[]),e.xb(1073742336,C.c,C.c,[]),e.xb(1073742336,y.g,y.g,[]),e.xb(1073742336,sl.c,sl.c,[]),e.xb(1073742336,dl.a,dl.a,[]),e.xb(1073742336,ml.a,ml.a,[[2,C.h],e.z]),e.xb(1073742336,pl.a,pl.a,[]),e.xb(1073742336,gl.a,gl.a,[]),e.xb(1073742336,hl.a,hl.a,[]),e.xb(1073742336,fl.a,fl.a,[]),e.xb(1073742336,M.t,M.t,[[2,M.y],[2,M.p]]),e.xb(1073742336,_l,_l,[]),e.xb(1073742336,o,o,[]),e.xb(1024,M.m,function(){return[[{path:"",pathMatch:"full",component:D}]]},[])])})},pIm3:function(l,n,t){"use strict";t.d(n,"c",function(){return u}),t.d(n,"f",function(){return a}),t.d(n,"a",function(){return c}),t.d(n,"d",function(){return i}),t.d(n,"b",function(){return r}),t.d(n,"e",function(){return b});var e=t("8Y7J"),o=(t("8rEH"),t("SVse"),t("zQui")),u=(t("IP0z"),t("Xd0L"),t("cUpR"),t("/HVE"),e.nb({encapsulation:2,styles:["mat-table{display:block}mat-header-row{min-height:56px}mat-footer-row,mat-row{min-height:48px}mat-footer-row,mat-header-row,mat-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-footer-row::after,mat-header-row::after,mat-row::after{display:inline-block;min-height:inherit;content:''}mat-cell:first-of-type,mat-footer-cell:first-of-type,mat-header-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type,[dir=rtl] mat-footer-cell:first-of-type,[dir=rtl] mat-header-cell:first-of-type{padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-footer-cell:last-of-type,mat-header-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type,[dir=rtl] mat-footer-cell:last-of-type,[dir=rtl] mat-header-cell:last-of-type{padding-right:0;padding-left:24px}mat-cell,mat-footer-cell,mat-header-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-footer-row,tr.mat-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}td.mat-cell,td.mat-footer-cell,th.mat-header-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type,th.mat-header-cell:first-of-type{padding-left:24px}[dir=rtl] td.mat-cell:first-of-type,[dir=rtl] td.mat-footer-cell:first-of-type,[dir=rtl] th.mat-header-cell:first-of-type{padding-left:0;padding-right:24px}td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type,th.mat-header-cell:last-of-type{padding-right:24px}[dir=rtl] td.mat-cell:last-of-type,[dir=rtl] td.mat-footer-cell:last-of-type,[dir=rtl] th.mat-header-cell:last-of-type{padding-right:0;padding-left:24px}"],data:{}}));function a(l){return e.Jb(0,[e.Fb(402653184,1,{_rowOutlet:0}),e.Fb(402653184,2,{_headerRowOutlet:0}),e.Fb(402653184,3,{_footerRowOutlet:0}),e.yb(null,0),(l()(),e.pb(4,16777216,null,null,1,null,null,null,null,null,null,null)),e.ob(5,16384,[[2,4]],0,o.t,[e.N,e.k],null,null),(l()(),e.pb(6,16777216,null,null,1,null,null,null,null,null,null,null)),e.ob(7,16384,[[1,4]],0,o.r,[e.N,e.k],null,null),(l()(),e.pb(8,16777216,null,null,1,null,null,null,null,null,null,null)),e.ob(9,16384,[[3,4]],0,o.s,[e.N,e.k],null,null)],null,null)}var c=e.nb({encapsulation:2,styles:[],data:{}});function i(l){return e.Jb(0,[(l()(),e.pb(0,16777216,null,null,1,null,null,null,null,null,null,null)),e.ob(1,147456,null,0,o.c,[e.N],null,null)],null,null)}var r=e.nb({encapsulation:2,styles:[],data:{}});function b(l){return e.Jb(0,[(l()(),e.pb(0,16777216,null,null,1,null,null,null,null,null,null,null)),e.ob(1,147456,null,0,o.c,[e.N],null,null)],null,null)}}}]);