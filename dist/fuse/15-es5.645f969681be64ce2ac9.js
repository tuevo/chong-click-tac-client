(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{CziI:function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),o=function(){return function(){}}(),a=e("NcP4"),c=e("pMnS"),i=e("bujt"),u=e("UodH"),r=e("lLAP"),d=e("wFw1"),p=e("21Lb"),g=e("OzfB"),m=e("TtEo"),s=e("LC5p"),f=e("Mr+X"),b=e("SMsm"),v=e("Ip0R"),h=e("mrSG"),k=e("pZ6u"),C=e("H0VJ"),_=e("mZtN"),P=e("k1t7"),M=function(n){function l(l,e,t){var o=n.call(this)||this;return o._dialogService=l,o._sessionService=e,o._fuseProgressBarService=t,o}return h.__extends(l,n),l.prototype.ngOnInit=function(){var n=this;this._fuseProgressBarService.show();var l=this._sessionService.getUser().subscribe(function(l){l&&(n.loggedInUser=l,n.isRegisterButtonNotDisplayed="CUSTOM"!==l.licence.type,n._fuseProgressBarService.hide())});this.subscriptions.push(l)},l.prototype.openUpgradeLicenceDialog=function(n,l){this._dialogService._openUpgradeLicenceDialog(n,l)},l.prototype.openContactInfoDialog=function(){this._dialogService._openInfoDialog("Vui l\xf2ng li\xean h\u1ec7 h\u1ed7 tr\u1ee3 vi\xean Mr.Long - S\u0110T, Zalo, Viber 093.757.3139 \u0111\u1ec3 \u0111\u01b0\u1ee3c h\u1ed7 tr\u1ee3 n\xe2ng c\u1ea5p g\xf3i n\xe0y.")},l}(k.a),x=t["\u0275crt"]({encapsulation:0,styles:[['@charset "UTF-8";.container[_ngcontent-%COMP%]{width:100%;height:90vh}.container[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%]{background-color:#7fcec5;background-image:linear-gradient(315deg,#7fcec5 0,#14557b 74%)}.container[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%]   .main-title-inner[_ngcontent-%COMP%]{padding:70px 20px 250px;text-align:center;width:100%}.container[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%]   .main-title-inner[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#90ee90;font-size:22px;font-weight:700;-webkit-filter:drop-shadow(0 1px 1px #000);filter:drop-shadow(0 1px 1px #000)}.container[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%]   .main-title-inner[_ngcontent-%COMP%]   .notice[_ngcontent-%COMP%]{color:#fff;font-size:14px;font-style:italic;-webkit-filter:drop-shadow(0 1px 1px #000);filter:drop-shadow(0 1px 1px #000);font-weight:700}.container[_ngcontent-%COMP%]   .shiny[_ngcontent-%COMP%]{color:#ffffe0;background:-webkit-gradient(linear,left top,left bottom,from(lightyellow),to(skyblue));-webkit-background-clip:text;-webkit-text-fill-color:transparent;display:inline-block;font-size:22px!important;font-weight:900;position:relative;text-transform:uppercase;-webkit-filter:drop-shadow(.5px 1px 1px #000);filter:drop-shadow(.5px 1px 1px #000)}.container[_ngcontent-%COMP%]   .shiny[_ngcontent-%COMP%]::before{-webkit-animation:2s linear infinite flare;background-image:linear-gradient(65deg,transparent 20%,rgba(255,255,255,.2) 20%,rgba(255,255,255,.3) 27%,transparent 27%,transparent 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;content:"N\xe2ng c\u1ea5p t\xe0i kho\u1ea3n";color:#fff;display:block;position:absolute}.container[_ngcontent-%COMP%]   .shiny[_ngcontent-%COMP%]::after{color:#fff;display:block;position:absolute;text-shadow:0 1px #6e4414,0 2px #6e4414,0 3px #6e4414,0 4px #6e4414,0 5px #6e4414,0 6px #6e4414,0 7px #6e4414,0 8px #6e4414,0 9px #6e4414,0 10px #6e4414;top:0;z-index:-1}.container[_ngcontent-%COMP%]   .inner-shiny[_ngcontent-%COMP%]::after, .container[_ngcontent-%COMP%]   .inner-shiny[_ngcontent-%COMP%]::before{-webkit-animation:5s linear infinite sparkle;background:#fff;border-radius:100%;box-shadow:0 0 5px #fff,0 0 10px #fff,0 0 15px #fff,0 0 20px #fff,0 0 25px #fff,0 0 30px #fff,0 0 35px #fff;content:"N\xe2ng c\u1ea5p t\xe0i kho\u1ea3n";display:block;height:10px;opacity:.7;position:absolute;width:10px}.container[_ngcontent-%COMP%]   .inner-shiny[_ngcontent-%COMP%]::before{-webkit-animation-delay:.2s;height:7px;left:.12em;top:.8em;width:7px}.container[_ngcontent-%COMP%]   .inner-shiny[_ngcontent-%COMP%]::after{top:.32em;right:-5px}@-webkit-keyframes flare{0%{background-position:-180px}100%,30%{background-position:500px}}@-webkit-keyframes sparkle{0%,100%,30%,60%{opacity:0}40%{opacity:.8}}.container[_ngcontent-%COMP%]   .package-wrapper[_ngcontent-%COMP%]{position:relative;z-index:100;top:-32vh}.container[_ngcontent-%COMP%]   .package-wrapper[_ngcontent-%COMP%]   .package[_ngcontent-%COMP%]{background:#fff;padding-bottom:20px;width:19vw;margin:25px;border-radius:7px;box-shadow:0 19px 38px rgba(0,0,0,.3),0 15px 12px rgba(0,0,0,.22);-webkit-transition:.2s;transition:.2s}.container[_ngcontent-%COMP%]   .package-wrapper[_ngcontent-%COMP%]   .package.free-package[_ngcontent-%COMP%]{-webkit-animation:.4s ease-out packageAnimation}.container[_ngcontent-%COMP%]   .package-wrapper[_ngcontent-%COMP%]   .package.vip-package[_ngcontent-%COMP%]{-webkit-animation:.6s ease-out packageAnimation}.container[_ngcontent-%COMP%]   .package-wrapper[_ngcontent-%COMP%]   .package.custom-package[_ngcontent-%COMP%]{-webkit-animation:.8s ease-out packageAnimation}@-webkit-keyframes packageAnimation{from{-webkit-transform:translateY(100vh);transform:translateY(100vh)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes packageAnimation{from{-webkit-transform:translateY(100vh);transform:translateY(100vh)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.container[_ngcontent-%COMP%]   .package-wrapper[_ngcontent-%COMP%]   .package[_ngcontent-%COMP%]:hover{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.container[_ngcontent-%COMP%]   .package-wrapper[_ngcontent-%COMP%]   .package[_ngcontent-%COMP%]   .contact-button[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .package-wrapper[_ngcontent-%COMP%]   .package[_ngcontent-%COMP%]   .register-package-button[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]   .package-wrapper[_ngcontent-%COMP%]   .package[_ngcontent-%COMP%]   .contact-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .package-wrapper[_ngcontent-%COMP%]   .package[_ngcontent-%COMP%]   .register-package-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#44b543;margin:0 auto;display:table}.container[_ngcontent-%COMP%]   .package-wrapper[_ngcontent-%COMP%]   .package[_ngcontent-%COMP%]   .package-price[_ngcontent-%COMP%]{width:100%;padding-top:20px;font-size:16px;color:rgba(0,0,0,.8);text-align:center}.container[_ngcontent-%COMP%]   .package-wrapper[_ngcontent-%COMP%]   .package[_ngcontent-%COMP%]   .package-benefit[_ngcontent-%COMP%]{padding:0 20px 20px;height:250px}.container[_ngcontent-%COMP%]   .package-wrapper[_ngcontent-%COMP%]   .package[_ngcontent-%COMP%]   .package-benefit[_ngcontent-%COMP%]   .benefit-title[_ngcontent-%COMP%]{font-size:16px}.container[_ngcontent-%COMP%]   .package-wrapper[_ngcontent-%COMP%]   .package[_ngcontent-%COMP%]   .package-benefit[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding-left:5px}.container[_ngcontent-%COMP%]   .package-wrapper[_ngcontent-%COMP%]   .package[_ngcontent-%COMP%]   .package-benefit[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .benefit-highline[_ngcontent-%COMP%]{font-weight:700;color:green}.container[_ngcontent-%COMP%]   .package-wrapper[_ngcontent-%COMP%]   .package[_ngcontent-%COMP%]   .package-benefit[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:11px}.container[_ngcontent-%COMP%]   .package-wrapper[_ngcontent-%COMP%]   .package[_ngcontent-%COMP%]   .package-benefit[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#44b543;font-size:16px}.container[_ngcontent-%COMP%]   .package-wrapper[_ngcontent-%COMP%]   .package[_ngcontent-%COMP%]   .recommended[_ngcontent-%COMP%]{background:#53a653;text-shadow:.5px .5px 1px gray;color:#fff;padding:5px;position:absolute;font-weight:700;font-size:10px;border-top-left-radius:5px;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.container[_ngcontent-%COMP%]   .package-wrapper[_ngcontent-%COMP%]   .package[_ngcontent-%COMP%]   .label-base[_ngcontent-%COMP%]{background:#fff;box-shadow:1px 1px 2px gray;padding-top:20px;padding-bottom:20px;width:100%;text-align:center;display:table;margin:0 auto;border-top-left-radius:5px;border-top-right-radius:5px;text-shadow:1px .8px .8px rgba(0,0,0,.5);display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.container[_ngcontent-%COMP%]   .package-wrapper[_ngcontent-%COMP%]   .package[_ngcontent-%COMP%]   .free-label[_ngcontent-%COMP%]{background-color:#63d471;background-image:linear-gradient(315deg,#63d471 0,#233329 74%);color:#fff;font-family:"Segoe UI",Tahoma,Geneva,Verdana,sans-serif;font-weight:700}.container[_ngcontent-%COMP%]   .package-wrapper[_ngcontent-%COMP%]   .package[_ngcontent-%COMP%]   .vip-label[_ngcontent-%COMP%]{background:radial-gradient(ellipse farthest-corner at right bottom,#fedb37 0,#fdb931 8%,#9f7928 30%,#8a6e2f 40%,transparent 80%),radial-gradient(ellipse farthest-corner at left top,#fff 0,#ffffac 8%,#d1b464 25%,#5d4a1f 62.5%,#5d4a1f 100%);color:#ffffe0;font-family:"Segoe UI",Tahoma,Geneva,Verdana,sans-serif;font-weight:700}.container[_ngcontent-%COMP%]   .package-wrapper[_ngcontent-%COMP%]   .package[_ngcontent-%COMP%]   .custom-label[_ngcontent-%COMP%]{font-weight:700;color:gold;font-family:"Segoe UI",Tahoma,Geneva,Verdana,sans-serif;background-color:#e0455f;background-image:linear-gradient(147deg,#e0455f 0,#44000b 74%)}@media screen and (max-width:600px){.container[_ngcontent-%COMP%]   .package-wrapper[_ngcontent-%COMP%]   .package[_ngcontent-%COMP%]{width:90vw;margin:20px}}']],data:{}});function O(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"div",[["class","register-package-button"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.openUpgradeLicenceDialog("VIP1","T\u1ed1i \u01b0u")&&t),t},null,null)),(n()(),t["\u0275eld"](1,0,null,null,2,"button",[["color","accent"],["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,i.d,i.b)),t["\u0275did"](2,180224,null,0,u.b,[t.ElementRef,r.h,[2,d.a]],{color:[0,"color"]},null),(n()(),t["\u0275ted"](-1,0,["\u0110\u0103ng k\xfd ngay"]))],function(n,l){n(l,2,0,"accent")},function(n,l){n(l,1,0,t["\u0275nov"](l,2).disabled||null,"NoopAnimations"===t["\u0275nov"](l,2)._animationMode)})}function w(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"div",[["class","contact-button"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,2,"button",[["color","accent"],["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.openContactInfoDialog()&&t),t},i.d,i.b)),t["\u0275did"](2,180224,null,0,u.b,[t.ElementRef,r.h,[2,d.a]],{color:[0,"color"]},null),(n()(),t["\u0275ted"](-1,0,["Li\xean h\u1ec7 ngay"]))],function(n,l){n(l,2,0,"accent")},function(n,l){n(l,1,0,t["\u0275nov"](l,2).disabled||null,"NoopAnimations"===t["\u0275nov"](l,2)._animationMode)})}function y(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,158,"div",[["class","container"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,8,"div",[["class","main-title"],["fxLayout","column"],["fxLayoutAlign","center center"]],null,null,null,null,null)),t["\u0275did"](2,671744,null,0,p.c,[t.ElementRef,g.j,[2,p.i],g.f],{fxLayout:[0,"fxLayout"]},null),t["\u0275did"](3,671744,null,0,p.b,[t.ElementRef,g.j,[2,p.g],g.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(n()(),t["\u0275eld"](4,0,null,null,5,"div",[["class","main-title-inner"]],null,null,null,null,null)),(n()(),t["\u0275eld"](5,0,null,null,2,"span",[["class","shiny"]],null,null,null,null,null)),(n()(),t["\u0275eld"](6,0,null,null,1,"span",[["class","inner-shiny"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["N\xe2ng c\u1ea5p t\xe0i kho\u1ea3n"])),(n()(),t["\u0275eld"](8,0,null,null,1,"p",[["class","notice"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" H\xe3y n\xe2ng c\u1ea5p t\xe0i kho\u1ea3n c\u1ee7a b\u1ea1n \u0111\u1ec3 tr\u1ea3i nghi\u1ec7m nh\u1eefng t\xednh n\u0103ng tuy\u1ec7t v\u1eddi nh\u1ea5t! "])),(n()(),t["\u0275eld"](10,0,null,null,148,"div",[["class","package-wrapper"],["fxLayout","row"],["fxLayout.xs","column"],["fxLayoutAlign","center"]],null,null,null,null,null)),t["\u0275did"](11,671744,null,0,p.c,[t.ElementRef,g.j,[2,p.i],g.f],{fxLayout:[0,"fxLayout"],"fxLayout.xs":[1,"fxLayout.xs"]},null),t["\u0275did"](12,671744,null,0,p.b,[t.ElementRef,g.j,[2,p.g],g.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(n()(),t["\u0275eld"](13,0,null,null,34,"div",[["class","package free-package"]],null,null,null,null,null)),(n()(),t["\u0275eld"](14,0,null,null,1,"span",[["class","label-base free-label"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["D\xd9NG TH\u1eec"])),(n()(),t["\u0275eld"](16,0,null,null,1,"p",[["class","package-price"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" Mi\u1ec5n ph\xed "])),(n()(),t["\u0275eld"](18,0,null,null,2,"div",[["style","padding: 10px 25px 10px 25px"]],null,null,null,null,null)),(n()(),t["\u0275eld"](19,0,null,null,1,"mat-divider",[["class","mat-divider"],["role","separator"]],[[1,"aria-orientation",0],[2,"mat-divider-vertical",null],[2,"mat-divider-horizontal",null],[2,"mat-divider-inset",null]],null,null,m.b,m.a)),t["\u0275did"](20,49152,null,0,s.a,[],null,null),(n()(),t["\u0275eld"](21,0,null,null,26,"div",[["class","package-benefit"]],null,null,null,null,null)),(n()(),t["\u0275eld"](22,0,null,null,25,"ul",[],null,null,null,null,null)),(n()(),t["\u0275eld"](23,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](24,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,f.b,f.a)),t["\u0275did"](25,9158656,null,0,b.b,[t.ElementRef,b.d,[8,null],[2,b.a]],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275ted"](-1,null,[" Ch\u1eb7n click \u1ea3o theo t\u1ea7n su\u1ea5t "])),(n()(),t["\u0275eld"](28,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](29,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,f.b,f.a)),t["\u0275did"](30,9158656,null,0,b.b,[t.ElementRef,b.d,[8,null],[2,b.a]],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275ted"](-1,null,[" Ch\u1eb7n click \u1ea3o theo nh\xe0 m\u1ea1ng (3G/4G) "])),(n()(),t["\u0275eld"](33,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](34,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,f.b,f.a)),t["\u0275did"](35,9158656,null,0,b.b,[t.ElementRef,b.d,[8,null],[2,b.a]],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275ted"](-1,null,[" Ch\u1eb7n click \u1ea3o t\u1ef1 \u0111\u1ed9ng \xedt h\u01a1n 5 gi\xe2y "])),(n()(),t["\u0275eld"](38,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](39,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,f.b,f.a)),t["\u0275did"](40,9158656,null,0,b.b,[t.ElementRef,b.d,[8,null],[2,b.a]],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275ted"](-1,null,[" T\xf9y ch\u1ec9nh danh s\xe1ch IP c\u1ea7n ch\u1eb7n "])),(n()(),t["\u0275eld"](43,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](44,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,f.b,f.a)),t["\u0275did"](45,9158656,null,0,b.b,[t.ElementRef,b.d,[8,null],[2,b.a]],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275ted"](-1,null,[" B\xe1o c\xe1o qu\u1ea3n tr\u1ecb IP click "])),(n()(),t["\u0275eld"](48,0,null,null,53,"div",[["class","package vip-package"]],null,null,null,null,null)),(n()(),t["\u0275eld"](49,0,null,null,1,"span",[["class","recommended"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Khuy\xean d\xf9ng"])),(n()(),t["\u0275eld"](51,0,null,null,1,"span",[["class","label-base vip-label"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["T\u1ed0I \u01afU"])),(n()(),t["\u0275eld"](53,0,null,null,1,"p",[["class","package-price"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" 500.000 VN\u0110/Th\xe1ng "])),(n()(),t["\u0275eld"](55,0,null,null,2,"div",[["style","padding: 10px 25px 10px 25px"]],null,null,null,null,null)),(n()(),t["\u0275eld"](56,0,null,null,1,"mat-divider",[["class","mat-divider"],["role","separator"]],[[1,"aria-orientation",0],[2,"mat-divider-vertical",null],[2,"mat-divider-horizontal",null],[2,"mat-divider-inset",null]],null,null,m.b,m.a)),t["\u0275did"](57,49152,null,0,s.a,[],null,null),(n()(),t["\u0275eld"](58,0,null,null,41,"div",[["class","package-benefit"]],null,null,null,null,null)),(n()(),t["\u0275eld"](59,0,null,null,40,"ul",[],null,null,null,null,null)),(n()(),t["\u0275eld"](60,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](61,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,f.b,f.a)),t["\u0275did"](62,9158656,null,0,b.b,[t.ElementRef,b.d,[8,null],[2,b.a]],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275ted"](-1,null,[" Ch\u1eb7n click \u1ea3o theo t\u1ea7n su\u1ea5t "])),(n()(),t["\u0275eld"](65,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](66,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,f.b,f.a)),t["\u0275did"](67,9158656,null,0,b.b,[t.ElementRef,b.d,[8,null],[2,b.a]],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275ted"](-1,null,[" Ch\u1eb7n click \u1ea3o theo nh\xe0 m\u1ea1ng (3G/4G) "])),(n()(),t["\u0275eld"](70,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](71,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,f.b,f.a)),t["\u0275did"](72,9158656,null,0,b.b,[t.ElementRef,b.d,[8,null],[2,b.a]],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275ted"](-1,null,[" Ch\u1eb7n click \u1ea3o t\u1ef1 \u0111\u1ed9ng \xedt h\u01a1n 5 gi\xe2y "])),(n()(),t["\u0275eld"](75,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](76,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,f.b,f.a)),t["\u0275did"](77,9158656,null,0,b.b,[t.ElementRef,b.d,[8,null],[2,b.a]],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275ted"](-1,null,[" T\xf9y ch\u1ec9nh danh s\xe1ch IP c\u1ea7n ch\u1eb7n "])),(n()(),t["\u0275eld"](80,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](81,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,f.b,f.a)),t["\u0275did"](82,9158656,null,0,b.b,[t.ElementRef,b.d,[8,null],[2,b.a]],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275ted"](-1,null,[" B\xe1o c\xe1o qu\u1ea3n tr\u1ecb IP click "])),(n()(),t["\u0275eld"](85,0,null,null,4,"li",[["class","benefit-highline"]],null,null,null,null,null)),(n()(),t["\u0275eld"](86,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,f.b,f.a)),t["\u0275did"](87,9158656,null,0,b.b,[t.ElementRef,b.d,[8,null],[2,b.a]],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275ted"](-1,null,[" Ch\u1eb7n click \u1ea3o theo h\xe0nh vi ng\u01b0\u1eddi d\xf9ng "])),(n()(),t["\u0275eld"](90,0,null,null,4,"li",[["class","benefit-highline"]],null,null,null,null,null)),(n()(),t["\u0275eld"](91,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,f.b,f.a)),t["\u0275did"](92,9158656,null,0,b.b,[t.ElementRef,b.d,[8,null],[2,b.a]],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275ted"](-1,null,[" Ch\u1eb7n click \u1ea3o theo nh\u1eafm ch\u1ecdn v\u1ecb tr\xed "])),(n()(),t["\u0275eld"](95,0,null,null,4,"li",[["class","benefit-highline"]],null,null,null,null,null)),(n()(),t["\u0275eld"](96,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,f.b,f.a)),t["\u0275did"](97,9158656,null,0,b.b,[t.ElementRef,b.d,[8,null],[2,b.a]],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275ted"](-1,null,[" H\u1ed7 tr\u1ee3 g\u1eedi b\u1ed3i ho\xe0n ph\xed t\u1eeb Google "])),(n()(),t["\u0275and"](16777216,null,null,1,null,O)),t["\u0275did"](101,16384,null,0,v.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](102,0,null,null,56,"div",[["class","package custom-package"]],null,null,null,null,null)),(n()(),t["\u0275eld"](103,0,null,null,1,"span",[["class","label-base custom-label"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\u0110\u1ed0I T\xc1C"])),(n()(),t["\u0275eld"](105,0,null,null,1,"p",[["class","package-price"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" Li\xean h\u1ec7 "])),(n()(),t["\u0275eld"](107,0,null,null,2,"div",[["style","padding: 10px 25px 10px 25px"]],null,null,null,null,null)),(n()(),t["\u0275eld"](108,0,null,null,1,"mat-divider",[["class","mat-divider"],["role","separator"]],[[1,"aria-orientation",0],[2,"mat-divider-vertical",null],[2,"mat-divider-horizontal",null],[2,"mat-divider-inset",null]],null,null,m.b,m.a)),t["\u0275did"](109,49152,null,0,s.a,[],null,null),(n()(),t["\u0275eld"](110,0,null,null,46,"div",[["class","package-benefit"]],null,null,null,null,null)),(n()(),t["\u0275eld"](111,0,null,null,45,"ul",[],null,null,null,null,null)),(n()(),t["\u0275eld"](112,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](113,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,f.b,f.a)),t["\u0275did"](114,9158656,null,0,b.b,[t.ElementRef,b.d,[8,null],[2,b.a]],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275ted"](-1,null,[" Ch\u1eb7n click \u1ea3o theo t\u1ea7n su\u1ea5t "])),(n()(),t["\u0275eld"](117,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](118,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,f.b,f.a)),t["\u0275did"](119,9158656,null,0,b.b,[t.ElementRef,b.d,[8,null],[2,b.a]],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275ted"](-1,null,[" Ch\u1eb7n click \u1ea3o theo nh\xe0 m\u1ea1ng (3G/4G) "])),(n()(),t["\u0275eld"](122,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](123,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,f.b,f.a)),t["\u0275did"](124,9158656,null,0,b.b,[t.ElementRef,b.d,[8,null],[2,b.a]],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275ted"](-1,null,[" Ch\u1eb7n click \u1ea3o t\u1ef1 \u0111\u1ed9ng \xedt h\u01a1n 5 gi\xe2y "])),(n()(),t["\u0275eld"](127,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](128,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,f.b,f.a)),t["\u0275did"](129,9158656,null,0,b.b,[t.ElementRef,b.d,[8,null],[2,b.a]],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275ted"](-1,null,[" T\xf9y ch\u1ec9nh danh s\xe1ch IP c\u1ea7n ch\u1eb7n "])),(n()(),t["\u0275eld"](132,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](133,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,f.b,f.a)),t["\u0275did"](134,9158656,null,0,b.b,[t.ElementRef,b.d,[8,null],[2,b.a]],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275ted"](-1,null,[" B\xe1o c\xe1o qu\u1ea3n tr\u1ecb IP click "])),(n()(),t["\u0275eld"](137,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](138,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,f.b,f.a)),t["\u0275did"](139,9158656,null,0,b.b,[t.ElementRef,b.d,[8,null],[2,b.a]],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275ted"](-1,null,[" Ch\u1eb7n click \u1ea3o theo h\xe0nh vi ng\u01b0\u1eddi d\xf9ng "])),(n()(),t["\u0275eld"](142,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](143,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,f.b,f.a)),t["\u0275did"](144,9158656,null,0,b.b,[t.ElementRef,b.d,[8,null],[2,b.a]],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275ted"](-1,null,[" Ch\u1eb7n click \u1ea3o theo nh\u1eafm ch\u1ecdn v\u1ecb tr\xed "])),(n()(),t["\u0275eld"](147,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](148,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,f.b,f.a)),t["\u0275did"](149,9158656,null,0,b.b,[t.ElementRef,b.d,[8,null],[2,b.a]],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275ted"](-1,null,[" H\u1ed7 tr\u1ee3 g\u1eedi b\u1ed3i ho\xe0n ph\xed t\u1eeb Google "])),(n()(),t["\u0275eld"](152,0,null,null,4,"li",[["class","benefit-highline"]],null,null,null,null,null)),(n()(),t["\u0275eld"](153,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,f.b,f.a)),t["\u0275did"](154,9158656,null,0,b.b,[t.ElementRef,b.d,[8,null],[2,b.a]],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275ted"](-1,null,[" C\xf3 1 nh\xe2n vi\xean h\u1ed7 tr\u1ee3 ri\xeang "])),(n()(),t["\u0275and"](16777216,null,null,1,null,w)),t["\u0275did"](158,16384,null,0,v.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,2,0,"column"),n(l,3,0,"center center"),n(l,11,0,"row","column"),n(l,12,0,"center"),n(l,25,0),n(l,30,0),n(l,35,0),n(l,40,0),n(l,45,0),n(l,62,0),n(l,67,0),n(l,72,0),n(l,77,0),n(l,82,0),n(l,87,0),n(l,92,0),n(l,97,0),n(l,101,0,e.isRegisterButtonNotDisplayed),n(l,114,0),n(l,119,0),n(l,124,0),n(l,129,0),n(l,134,0),n(l,139,0),n(l,144,0),n(l,149,0),n(l,154,0),n(l,158,0,e.isRegisterButtonNotDisplayed)},function(n,l){n(l,19,0,t["\u0275nov"](l,20).vertical?"vertical":"horizontal",t["\u0275nov"](l,20).vertical,!t["\u0275nov"](l,20).vertical,t["\u0275nov"](l,20).inset),n(l,24,0,t["\u0275nov"](l,25).inline,"primary"!==t["\u0275nov"](l,25).color&&"accent"!==t["\u0275nov"](l,25).color&&"warn"!==t["\u0275nov"](l,25).color),n(l,29,0,t["\u0275nov"](l,30).inline,"primary"!==t["\u0275nov"](l,30).color&&"accent"!==t["\u0275nov"](l,30).color&&"warn"!==t["\u0275nov"](l,30).color),n(l,34,0,t["\u0275nov"](l,35).inline,"primary"!==t["\u0275nov"](l,35).color&&"accent"!==t["\u0275nov"](l,35).color&&"warn"!==t["\u0275nov"](l,35).color),n(l,39,0,t["\u0275nov"](l,40).inline,"primary"!==t["\u0275nov"](l,40).color&&"accent"!==t["\u0275nov"](l,40).color&&"warn"!==t["\u0275nov"](l,40).color),n(l,44,0,t["\u0275nov"](l,45).inline,"primary"!==t["\u0275nov"](l,45).color&&"accent"!==t["\u0275nov"](l,45).color&&"warn"!==t["\u0275nov"](l,45).color),n(l,56,0,t["\u0275nov"](l,57).vertical?"vertical":"horizontal",t["\u0275nov"](l,57).vertical,!t["\u0275nov"](l,57).vertical,t["\u0275nov"](l,57).inset),n(l,61,0,t["\u0275nov"](l,62).inline,"primary"!==t["\u0275nov"](l,62).color&&"accent"!==t["\u0275nov"](l,62).color&&"warn"!==t["\u0275nov"](l,62).color),n(l,66,0,t["\u0275nov"](l,67).inline,"primary"!==t["\u0275nov"](l,67).color&&"accent"!==t["\u0275nov"](l,67).color&&"warn"!==t["\u0275nov"](l,67).color),n(l,71,0,t["\u0275nov"](l,72).inline,"primary"!==t["\u0275nov"](l,72).color&&"accent"!==t["\u0275nov"](l,72).color&&"warn"!==t["\u0275nov"](l,72).color),n(l,76,0,t["\u0275nov"](l,77).inline,"primary"!==t["\u0275nov"](l,77).color&&"accent"!==t["\u0275nov"](l,77).color&&"warn"!==t["\u0275nov"](l,77).color),n(l,81,0,t["\u0275nov"](l,82).inline,"primary"!==t["\u0275nov"](l,82).color&&"accent"!==t["\u0275nov"](l,82).color&&"warn"!==t["\u0275nov"](l,82).color),n(l,86,0,t["\u0275nov"](l,87).inline,"primary"!==t["\u0275nov"](l,87).color&&"accent"!==t["\u0275nov"](l,87).color&&"warn"!==t["\u0275nov"](l,87).color),n(l,91,0,t["\u0275nov"](l,92).inline,"primary"!==t["\u0275nov"](l,92).color&&"accent"!==t["\u0275nov"](l,92).color&&"warn"!==t["\u0275nov"](l,92).color),n(l,96,0,t["\u0275nov"](l,97).inline,"primary"!==t["\u0275nov"](l,97).color&&"accent"!==t["\u0275nov"](l,97).color&&"warn"!==t["\u0275nov"](l,97).color),n(l,108,0,t["\u0275nov"](l,109).vertical?"vertical":"horizontal",t["\u0275nov"](l,109).vertical,!t["\u0275nov"](l,109).vertical,t["\u0275nov"](l,109).inset),n(l,113,0,t["\u0275nov"](l,114).inline,"primary"!==t["\u0275nov"](l,114).color&&"accent"!==t["\u0275nov"](l,114).color&&"warn"!==t["\u0275nov"](l,114).color),n(l,118,0,t["\u0275nov"](l,119).inline,"primary"!==t["\u0275nov"](l,119).color&&"accent"!==t["\u0275nov"](l,119).color&&"warn"!==t["\u0275nov"](l,119).color),n(l,123,0,t["\u0275nov"](l,124).inline,"primary"!==t["\u0275nov"](l,124).color&&"accent"!==t["\u0275nov"](l,124).color&&"warn"!==t["\u0275nov"](l,124).color),n(l,128,0,t["\u0275nov"](l,129).inline,"primary"!==t["\u0275nov"](l,129).color&&"accent"!==t["\u0275nov"](l,129).color&&"warn"!==t["\u0275nov"](l,129).color),n(l,133,0,t["\u0275nov"](l,134).inline,"primary"!==t["\u0275nov"](l,134).color&&"accent"!==t["\u0275nov"](l,134).color&&"warn"!==t["\u0275nov"](l,134).color),n(l,138,0,t["\u0275nov"](l,139).inline,"primary"!==t["\u0275nov"](l,139).color&&"accent"!==t["\u0275nov"](l,139).color&&"warn"!==t["\u0275nov"](l,139).color),n(l,143,0,t["\u0275nov"](l,144).inline,"primary"!==t["\u0275nov"](l,144).color&&"accent"!==t["\u0275nov"](l,144).color&&"warn"!==t["\u0275nov"](l,144).color),n(l,148,0,t["\u0275nov"](l,149).inline,"primary"!==t["\u0275nov"](l,149).color&&"accent"!==t["\u0275nov"](l,149).color&&"warn"!==t["\u0275nov"](l,149).color),n(l,153,0,t["\u0275nov"](l,154).inline,"primary"!==t["\u0275nov"](l,154).color&&"accent"!==t["\u0275nov"](l,154).color&&"warn"!==t["\u0275nov"](l,154).color)})}function R(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-upgrade-licence",[],null,null,null,y,x)),t["\u0275did"](1,245760,null,0,M,[C.a,_.a,P.a],null,null)],function(n,l){n(l,1,0)},null)}var L=t["\u0275ccf"]("app-upgrade-licence",M,R,{},{},[]),E=e("M2Lx"),I=e("Wf4p"),T=e("eDkP"),z=e("Fzqc"),N=e("v9Dh"),A=e("ZYjt"),S=e("gIcY"),D=e("seP3"),U=e("wd5q"),G=e("uGex"),Y=e("dWZg"),B=e("/VYK"),V=e("b716"),F=e("y4qS"),j=e("BHnd"),q=e("4c35"),H=e("qAlS"),Z=e("6Wmm"),J=e("9It4"),W=e("de3e"),K=e("Sm0G"),Q=e("D1Ds"),X=e("1N2P"),$=e("L53J"),nn=e("hUWP"),ln=e("3pJQ"),en=e("V9q+"),tn=e("RaCk"),on=e("Tk7p"),an=e("5HBU"),cn=e("nwAg"),un=e("ZYCi"),rn=function(){return function(){}}();e.d(l,"UpgradeLicenceModuleNgFactory",function(){return dn});var dn=t["\u0275cmf"](o,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,c.a,L]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,v.NgLocalization,v.NgLocaleLocalization,[t.LOCALE_ID,[2,v["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,E.c,E.c,[]),t["\u0275mpd"](4608,I.b,I.z,[]),t["\u0275mpd"](4608,T.c,T.c,[T.i,T.e,t.ComponentFactoryResolver,T.h,T.f,t.Injector,t.NgZone,v.DOCUMENT,z.b,[2,v.Location]]),t["\u0275mpd"](5120,T.j,T.k,[T.c]),t["\u0275mpd"](5120,N.b,N.c,[T.c]),t["\u0275mpd"](4608,A.e,I.c,[[2,I.g],[2,I.l]]),t["\u0275mpd"](4608,S.z,S.z,[]),t["\u0275mpd"](4608,S.f,S.f,[]),t["\u0275mpd"](6144,D.d,null,[U.a]),t["\u0275mpd"](5120,G.a,G.b,[T.c]),t["\u0275mpd"](5120,t.APP_BOOTSTRAP_LISTENER,function(n,l){return[g.k(n,l)]},[v.DOCUMENT,t.PLATFORM_ID]),t["\u0275mpd"](135680,M,M,[C.a,_.a,P.a]),t["\u0275mpd"](1073742336,v.CommonModule,v.CommonModule,[]),t["\u0275mpd"](1073742336,z.a,z.a,[]),t["\u0275mpd"](1073742336,I.l,I.l,[[2,I.d],[2,A.f]]),t["\u0275mpd"](1073742336,Y.b,Y.b,[]),t["\u0275mpd"](1073742336,I.v,I.v,[]),t["\u0275mpd"](1073742336,u.c,u.c,[]),t["\u0275mpd"](1073742336,E.d,E.d,[]),t["\u0275mpd"](1073742336,D.e,D.e,[]),t["\u0275mpd"](1073742336,b.c,b.c,[]),t["\u0275mpd"](1073742336,B.c,B.c,[]),t["\u0275mpd"](1073742336,V.b,V.b,[]),t["\u0275mpd"](1073742336,F.p,F.p,[]),t["\u0275mpd"](1073742336,j.m,j.m,[]),t["\u0275mpd"](1073742336,r.a,r.a,[]),t["\u0275mpd"](1073742336,q.g,q.g,[]),t["\u0275mpd"](1073742336,H.c,H.c,[]),t["\u0275mpd"](1073742336,T.g,T.g,[]),t["\u0275mpd"](1073742336,N.e,N.e,[]),t["\u0275mpd"](1073742336,Z.a,Z.a,[]),t["\u0275mpd"](1073742336,J.c,J.c,[]),t["\u0275mpd"](1073742336,s.b,s.b,[]),t["\u0275mpd"](1073742336,S.y,S.y,[]),t["\u0275mpd"](1073742336,S.m,S.m,[]),t["\u0275mpd"](1073742336,S.w,S.w,[]),t["\u0275mpd"](1073742336,W.d,W.d,[]),t["\u0275mpd"](1073742336,W.c,W.c,[]),t["\u0275mpd"](1073742336,K.a,K.a,[]),t["\u0275mpd"](1073742336,Q.a,Q.a,[]),t["\u0275mpd"](1073742336,X.a,X.a,[]),t["\u0275mpd"](1073742336,I.t,I.t,[]),t["\u0275mpd"](1073742336,I.r,I.r,[]),t["\u0275mpd"](1073742336,G.d,G.d,[]),t["\u0275mpd"](1073742336,$.a,$.a,[]),t["\u0275mpd"](1073742336,g.c,g.c,[]),t["\u0275mpd"](1073742336,p.e,p.e,[]),t["\u0275mpd"](1073742336,nn.d,nn.d,[]),t["\u0275mpd"](1073742336,ln.a,ln.a,[]),t["\u0275mpd"](1073742336,en.a,en.a,[[2,g.h],t.PLATFORM_ID]),t["\u0275mpd"](1073742336,tn.a,tn.a,[]),t["\u0275mpd"](1073742336,on.a,on.a,[]),t["\u0275mpd"](1073742336,an.a,an.a,[]),t["\u0275mpd"](1073742336,cn.a,cn.a,[]),t["\u0275mpd"](1073742336,un.t,un.t,[[2,un.y],[2,un.p]]),t["\u0275mpd"](1073742336,rn,rn,[]),t["\u0275mpd"](1073742336,o,o,[]),t["\u0275mpd"](1024,un.m,function(){return[[{path:"",pathMatch:"full",component:M}]]},[])])})}}]);