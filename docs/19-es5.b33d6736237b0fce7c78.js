(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{H4Xw:function e(n,o,c){"use strict";c.r(o);var t=c("EM62"),l=c("uHuC"),a=c("6aXC"),i=c("PCNd"),r=c("sEIs"),d=c("2kYt"),p=c("ykr0"),u=c("J4Gr");var m=[1,"wrapper"],s=[1,"content"],h=["class","implementation",4,"ngIf"],f=["module","card",3,"show"],g=[1,"description"],b=[3,"highlight"],x=["module","expansion",3,"show"],P=["loading",""],y=["module","app-element-test",3,"show"],v=[1,"implementation"],j=["mat-flat-button","","color","primary",3,"click"],w=["mat-flat-button","","color","primary",1,"additional-btn",3,"click"],M=["color","primary",4,"ngIf"],C=["mat-raised-button","","color","primary",3,"mouseover","click",4,"ngIf"],E=["module","app-breach",2,"width","100%",3,"show"],L=["breachModule",""],G=["module","lazy-example-7",3,"show","init"],z=["lazyModule",""];function O(e,n){if(1&e){var o=t.mc();t.lc(0,"div",v),t.lc(1,"button",j),t.rc("click",function(e){return t.Dc(o),t.tc().example1=!0}),t.lc(2,"mat-icon"),t.Pc(3,"play_arrow"),t.jc(),t.Pc(4," Show "),t.jc(),t.jc()}}function _(e,n){if(1&e){var o=t.mc();t.lc(0,"div",v),t.lc(1,"button",j),t.rc("click",function(e){return t.Dc(o),t.tc().example2=!0}),t.lc(2,"mat-icon"),t.Pc(3,"play_arrow"),t.jc(),t.Pc(4," Show "),t.jc(),t.jc()}}function I(e,n){1&e&&t.Pc(0,"Loading...")}function k(e,n){if(1&e){var o=t.mc();t.lc(0,"div",v),t.lc(1,"button",j),t.rc("click",function(e){return t.Dc(o),t.tc().example3=!0}),t.lc(2,"mat-icon"),t.Pc(3,"play_arrow"),t.jc(),t.Pc(4," Show "),t.jc(),t.jc()}}function S(e,n){if(1&e){var o=t.mc();t.lc(0,"div",v),t.lc(1,"button",j),t.rc("click",function(e){return t.Dc(o),t.tc().example4=!0}),t.lc(2,"mat-icon"),t.Pc(3,"play_arrow"),t.jc(),t.Pc(4," Show "),t.jc(),t.jc()}}var N=["color","primary"];function A(e,n){1&e&&(t.lc(0,"code",N),t.Pc(1,"Loaded"),t.jc())}var B=["mat-raised-button","","color","primary",3,"mouseover","click"];function T(e,n){if(1&e){var o=t.mc();t.lc(0,"button",B),t.rc("mouseover",function(e){return t.Dc(o),t.tc(),t.Bc(134).preload()}),t.rc("click",function(e){return t.Dc(o),t.tc().showBreach=!0}),t.Pc(1,"Hover to load/ Click to show"),t.jc()}}function D(e,n){1&e&&(t.lc(0,"code",N),t.Pc(1,"Loaded"),t.jc())}var F=function(){var e=function(){function e(e){this.loadableService=e,this.example1=!1,this.example2=!1,this.example3=!1,this.example4=!1,this.showBreach=!1,this.example7=!1,this.codeExample1module=R,this.codeExample1html=H,this.codeExample2module=U,this.codeExample2html=W,this.codeExample3module=V,this.codeExample3html=Y,this.codeExample4html=J,this.codeExample4coreModule=X,this.codeExample5html=$,this.codeExample5ts=q,this.codeExample6html=K,this.codeExample7ts=Z,this.codeExample7html=Q,this.counter=0}var n=e.prototype;n.ngOnInit=function e(){};n.increment=function e(){this.counter++};n.preload=function e(){this.loadableService.preloadAll().then(function(){return alert("preloaded all modules")})};n.preloadBreach=function e(){this.loadableService.preloadAll(["app-breach"]).then(function(){return alert("preloaded breach module")})};n.lazyInit=function e(n){var o=n.instance;var c=0;o.input="Updated by AppComponent using Input",o.output.subscribe(function(){o.input="Updated by AppComponent using Output "+ ++c})};return e}();return e.ngComponentDef=t.Yb({type:e,selectors:[["demo-advanced"]],factory:function n(o){return new(o||e)(t.ec(a.c))},consts:164,vars:29,template:function e(n,o){if(1&n&&(t.lc(0,"div",m),t.lc(1,"h1"),t.Pc(2,"Advanced"),t.jc(),t.lc(3,"h2"),t.Pc(4,"Elements configured in a feature module"),t.jc(),t.lc(5,"div",s),t.Nc(6,O,5,0,"div",h),t.lc(7,"div"),t.Lc(),t.fc(8,"ngx-loadable",f),t.jc(),t.lc(9,"div",g),t.lc(10,"p"),t.Pc(11," In this example we're pre-configuring "),t.lc(12,"code"),t.Pc(13,"LoadableModule"),t.jc(),t.Pc(14," with the element config. That way we don't have to specify loading template, error template and other configuration of the element in the "),t.lc(15,"code"),t.Pc(16,"ngx-loadable"),t.jc(),t.Pc(17," component. The module will be lazy-loaded the same way as before. "),t.jc(),t.fc(18,"pre",b),t.fc(19,"pre",b),t.jc(),t.jc(),t.lc(20,"h2"),t.Pc(21,"Elements configured in a feature module with HTML inline options"),t.jc(),t.lc(22,"div",s),t.Nc(23,_,5,0,"div",h),t.lc(24,"div"),t.Lc(),t.lc(25,"ngx-loadable",x),t.Nc(26,I,1,0,"ng-template",null,P,t.Oc),t.jc(),t.jc(),t.lc(28,"div",g),t.lc(29,"p"),t.Pc(30," We don't have to specify "),t.lc(31,"code"),t.Pc(32,"url"),t.jc(),t.Pc(33," when using pre-configured "),t.lc(34,"code"),t.Pc(35,"LoadableModule"),t.jc(),t.Pc(36,". We still might need to pass in "),t.lc(37,"code"),t.Pc(38,"null"),t.jc(),t.Pc(39," url into "),t.lc(40,"code"),t.Pc(41,"ngx-loadable"),t.jc(),t.Pc(42," component in case we want to use other options like "),t.lc(43,"code"),t.Pc(44,"module"),t.jc(),t.Pc(45," or "),t.lc(46,"code"),t.Pc(47,"loadingTemplate"),t.jc(),t.Pc(48,". "),t.jc(),t.fc(49,"pre",b),t.fc(50,"pre",b),t.jc(),t.jc(),t.lc(51,"h2"),t.Pc(52," Elements configured in a feature module with "),t.lc(53,"code"),t.Pc(54,"isElement"),t.jc(),t.Pc(55," option "),t.jc(),t.lc(56,"div",s),t.Nc(57,k,5,0,"div",h),t.lc(58,"div"),t.Lc(),t.jc(),t.lc(59,"div",g),t.lc(60,"p"),t.Pc(61," We can also pre-configure "),t.lc(62,"code"),t.Pc(63,"isElement"),t.jc(),t.Pc(64," flag by passing it to the "),t.lc(65,"code"),t.Pc(66,"LoadableModule"),t.jc(),t.Pc(67,"config. That way we don't have to specify it in the template for module style elements! "),t.jc(),t.fc(68,"pre",b),t.fc(69,"pre",b),t.jc(),t.jc(),t.lc(70,"h2"),t.Pc(71," Elements configured in "),t.lc(72,"code"),t.Pc(73,"AppModule"),t.jc(),t.Pc(74," or "),t.lc(75,"code"),t.Pc(76,"CoreModule"),t.jc(),t.Pc(77," using "),t.lc(78,"code"),t.Pc(79,"forRoot"),t.jc(),t.jc(),t.lc(80,"div",s),t.Nc(81,S,5,0,"div",h),t.lc(82,"div"),t.Lc(),t.fc(83,"ngx-loadable",y),t.jc(),t.lc(84,"div",g),t.lc(85,"p"),t.Pc(86," Some options can be pre-configured for the whole application using "),t.lc(87,"code"),t.Pc(88,"LoadableModule.forRoot()"),t.jc(),t.Pc(89,". This is usually done in "),t.lc(90,"code"),t.Pc(91,"AppModule"),t.jc(),t.Pc(92," or in the "),t.lc(93,"code"),t.Pc(94,"CoreModule"),t.jc(),t.Pc(95,". That way we don't have to specify this options in the feature modules while still preserving posibility to override them if necessary. The "),t.lc(96,"code"),t.Pc(97,"forRoot()"),t.jc(),t.Pc(98," accepts also "),t.lc(99,"code"),t.Pc(100,"elementConfigs"),t.jc(),t.Pc(101," so they can be pre-configured centrally removing the need to configure them in feature modules or inline in the templates. "),t.jc(),t.fc(102,"pre",b),t.fc(103,"pre",b),t.jc(),t.jc(),t.lc(104,"h2"),t.Pc(105," Preloading with service "),t.jc(),t.lc(106,"div",s),t.lc(107,"div",v),t.lc(108,"div"),t.lc(109,"button",j),t.rc("click",function(e){return o.preload()}),t.Pc(110," Preload Everything "),t.jc(),t.lc(111,"button",w),t.rc("click",function(e){return o.preloadBreach()}),t.Pc(112,' Preload "Breach" only (the next example) '),t.jc(),t.jc(),t.jc(),t.lc(113,"div",g),t.lc(114,"p"),t.Pc(115," You can inject "),t.lc(116,"code"),t.Pc(117,"LoadableService"),t.jc(),t.Pc(118," and call the "),t.lc(119,"code"),t.Pc(120,"preload"),t.jc(),t.Pc(121," method to preload all the configured modules, or specify the list of module "),t.lc(122,"code"),t.Pc(123,"names"),t.jc(),t.Pc(124," you want to preload. "),t.jc(),t.fc(125,"pre",b),t.fc(126,"pre",b),t.jc(),t.jc(),t.lc(127,"h2"),t.Pc(128," Preloading with ngx-loadable Component "),t.Nc(129,A,2,0,"code",M),t.jc(),t.lc(130,"div",s),t.lc(131,"div",v),t.Nc(132,T,2,0,"button",C),t.fc(133,"ngx-loadable",E,L),t.jc(),t.lc(135,"div",g),t.lc(136,"p"),t.Pc(137," You can use local variable to access "),t.lc(138,"code"),t.Pc(139,"LoadableComponent"),t.jc(),t.Pc(140," and call the "),t.lc(141,"code"),t.Pc(142,"preload"),t.jc(),t.Pc(143," method to preload the module passed to the component. "),t.jc(),t.fc(144,"pre",b),t.jc(),t.jc(),t.lc(145,"h2"),t.Pc(146," Passing Input and Outputs to loaded Component "),t.Nc(147,D,2,0,"code",M),t.jc(),t.lc(148,"div",s),t.lc(149,"div",v),t.lc(150,"button",j),t.rc("click",function(e){return o.example7=!0}),t.lc(151,"mat-icon"),t.Pc(152,"play_arrow"),t.jc(),t.Pc(153," Show "),t.jc(),t.lc(154,"ngx-loadable",G,z),t.rc("init",function(e){return o.lazyInit(e)}),t.jc(),t.jc(),t.lc(156,"div",g),t.lc(157,"p"),t.Pc(158," Use "),t.lc(159,"code"),t.Pc(160,"(init)"),t.jc(),t.Pc(161," output to access that components inputs and outputs "),t.jc(),t.fc(162,"pre",b),t.fc(163,"pre",b),t.jc(),t.jc(),t.jc()),2&n){var c=t.Bc(134),l=t.Bc(155);t.Gc(6),t.yc("ngIf",!o.example1),t.Gc(7),t.Vb("implementation",o.example1),t.Mc(),t.Gc(8),t.yc("show",o.example1),t.Gc(18),t.yc("highlight",o.codeExample1html),t.Gc(19),t.yc("highlight",o.codeExample1module),t.Gc(23),t.yc("ngIf",!o.example2),t.Gc(24),t.Vb("implementation",o.example2),t.Mc(),t.Gc(25),t.yc("show",o.example2),t.Gc(49),t.yc("highlight",o.codeExample2html),t.Gc(50),t.yc("highlight",o.codeExample2module),t.Gc(57),t.yc("ngIf",!o.example3),t.Gc(58),t.Vb("implementation",o.example3),t.Mc(),t.Gc(68),t.yc("highlight",o.codeExample3html),t.Gc(69),t.yc("highlight",o.codeExample3module),t.Gc(81),t.yc("ngIf",!o.example4),t.Gc(82),t.Vb("implementation",o.example4),t.Mc(),t.Gc(83),t.yc("show",o.example4),t.Gc(102),t.yc("highlight",o.codeExample4html),t.Gc(103),t.yc("highlight",o.codeExample4coreModule),t.Gc(125),t.yc("highlight",o.codeExample5html),t.Gc(126),t.yc("highlight",o.codeExample5ts),t.Gc(129),t.yc("ngIf",c.loaded),t.Gc(132),t.yc("ngIf",!o.showBreach),t.Gc(133),t.yc("show",o.showBreach),t.Gc(144),t.yc("highlight",o.codeExample6html),t.Gc(147),t.yc("ngIf",null==l?null:l.loaded),t.Gc(154),t.yc("show",o.example7),t.Gc(162),t.yc("highlight",o.codeExample7html),t.Gc(163),t.yc("highlight",o.codeExample7ts)}},directives:[d.j,a.a,l.a,p.b,u.a],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:0 0 50px}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .implementation[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;margin:0 20px 20px 0;border:2px solid #eee;padding:20px}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .implementation[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:10px 0 0}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{flex:1.5}.responsive-large[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:60%}.additional-btn[_ngcontent-%COMP%]{margin-left:10px}"]}),e}();var R="// pre-configured LoadableModule\nconst options: LoadableModuleOptions = {\n  elementConfigs: [\n    {\n      name: 'card',\n      load: () => import('./card/card.module').then(mod => mod.CardModule),\n      loadingComponent: SpinnerComponent,\n      errorComponent: ErrorComponent,\n      preload: true\n    }\n  ]\n};\n\n@NgModule({\n  declarations: [FeatureComponent],\n  imports: [\n    LoadableModule.forFeature(options),\n  ]\n})\nexport class FeatureModule { }\n",H='\x3c!-- No need to specify loading template or error template --\x3e\n<ngx-loadable module="card" [show]="true"></ngx-loadable>',U="// pre-configured LoadableModule in FeatureModule\nconst options: LoadableModuleOptions = {\n  elementConfigs: [\n    {\n      name: 'expansion',\n      load: () => import('./expansion/expansion.module').then(mod => mod.ExpansionModule)\n    }\n  ]\n};\n\n@NgModule({\n  declarations: [FeatureComponent],\n  imports: [\n    LoadableModule.forFeature(options),\n  ]\n})\nexport class FeatureModule { }\n",W='\x3c!-- We have to specify module and pass to be able to pass in additional options --\x3e\n<ngx-loadable module="lazy" [isElement]="true">\n  <ng-template #loading>Loading...</ng-template>\n</ngx-loadable>',V="// pre-configured LoadableModule\nconst options: LoadableModuleOptions = {\n  elementConfigs: [\n    {\n      name: 'lazy',\n      url: () => import('./lazy/lazy.module').then(mod => mod.LazyModule),\n      isElement: true\n    }\n  ]\n};\n\n@NgModule({\n  declarations: [FeatureComponent],\n  imports: [\n    LoadablesModule.forFeature(options),\n  ]\n})\nexport class FeatureModule { }\n",Y='\x3c!-- We have to specify module to be able to pass in additional options --\x3e\n<ngx-loadable module="lazy" [isElement]="true">\n  <ng-template #loading>Loading...</ng-template>\n</ngx-loadable>',J='\x3c!-- This can be used in any place in the whole application --\x3e\n<ngx-loadable module="app-element-test" [show]="true"></ngx-loadable>',X="// pre-configured LoadableModule in CoreModule or AppModule\nconst options: LoadableModuleRootOptions = {\n  rootOptions: {\n    errorComponent: RootErrorComponent\n    loadingComponent: RootSpinnerComponent\n    isElement: true\n  },\n  elementConfigs: [\n    {\n      name: 'app-element-test',\n      load: () => import('./element-test/element-test.module').then(mod => mod.ElementTestModule),\n    }\n  ]\n};\n\n@NgModule({\n  imports: [\n    LoadableModule.forRoot(options),\n  ]\n})\nexport class CoreModule { }\n",$='<button (click)="preload()">Preload</button>',q="\nclass PageComponent {\n  constructor(private loadableService: LoadableService) {}\n\n  preload() {\n    this.loadableService.preloadAll();\n  }\n\n  preloadBreach() {\n    this.loadableService.preloadAll(['app-breach']);\n  }\n}\n",K='<button (mouseover)="breachModule.preload()" (click)="showBreach = true">Hover to load/ Click to show</button>\n<ngx-loadable #breachModule module="app-breach" [show]="showBreach"></ngx-loadable>\n',Q='<ngx-loadable #lazyModule module="lazy" [show]="true" (init)="lazyInit($event)"></ngx-loadable>\n',Z="lazyInit({instance: lazyComponent}: ComponentRef<LazyComponent>) {\n    let i = 0;\n    lazyComponent.input = 'Updated by AppComponent using Input';\n\n    lazyComponent.output.subscribe(() => {\n      i++;\n      lazyComponent.input = 'Updated by AppComponent using Output ' + i;\n    });\n}\n",ee=[{path:"",component:F}];var ne=function(){var e=function e(){};return e.ngModuleDef=t.cc({type:e}),e.ngInjectorDef=t.bc({factory:function n(o){return new(o||e)},imports:[[r.f.forChild(ee)],r.f]}),e}();r.f.forChild(ee),c.d(o,"AdvancedModule",function(){return oe});var oe=function(){var e=function e(){};return e.ngModuleDef=t.cc({type:e}),e.ngInjectorDef=t.bc({factory:function n(o){return new(o||e)},imports:[[l.b,a.b.forRoot({moduleConfigs:[{name:"lazy",load:function e(){return c.e(0).then(c.bind(null,"xuv1")).then(function(e){return e.LazyModule})},preload:!0},{name:"lazy-slow",load:function e(){return new Promise(function(e){return setTimeout(function(){return e(!0)},500)}).then(function(){return c.e(0).then(c.bind(null,"xuv1"))}).then(function(e){return e.LazyModule})}}]}),i.a,ne]]}),e}();a.b.forRoot({moduleConfigs:[{name:"lazy",load:function e(){return c.e(0).then(c.bind(null,"xuv1")).then(function(e){return e.LazyModule})},preload:!0},{name:"lazy-slow",load:function e(){return new Promise(function(e){return setTimeout(function(){return e(!0)},500)}).then(function(){return c.e(0).then(c.bind(null,"xuv1"))}).then(function(e){return e.LazyModule})}}]})}}]);