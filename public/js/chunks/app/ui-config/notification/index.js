(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{"27Ju":function(t,o){t.exports="/images/notification_position_top_right.jpg?135a4dfad350fef68277d4f7e274ec37"},Gpig:function(t,o){t.exports="/images/notification_position_bottom_left.jpg?9f937676d33829d8e286eef8c72cdaa3"},OOS0:function(t,o,e){"use strict";var i=e("o0o1"),a=e.n(i),r=e("8BOd"),n=e("fHbr"),s=e("L2JU"),c=e("bh+U");function l(t,o,e,i,a,r,n){try{var s=t[r](n),c=s.value}catch(t){return void e(t)}s.done?o(c):Promise.resolve(c).then(i,a)}function f(t,o){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);o&&(i=i.filter((function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),e.push.apply(e,i)}return e}function d(t){for(var o=1;o<arguments.length;o++){var e=null!=arguments[o]?arguments[o]:{};o%2?f(Object(e),!0).forEach((function(o){u(t,o,e[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):f(Object(e)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))}))}return t}function u(t,o,e){return o in t?Object.defineProperty(t,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[o]=e,t}o.a={components:{CollapseTransition:n.a},data:function(){return{formData:d(d({},c.a),{},{type:"ui"}),actions:{leftSidebarStyle:{"push-content":{leftSidebarBackdrop:!1,leftSidebarShadow:!1,leftSidebarShow:!0},push:{leftSidebarShow:!0},over:{leftSidebarBackdrop:!0,leftSidebarShadow:!0,leftSidebarShow:!0},folded:{leftSidebarBackdrop:!0,leftSidebarShow:!1},"off-canvas":{leftSidebarShow:!0}},topNavbarHide:{true:{leftSidebarHeight:"full"}},leftSidebarHeight:{normal:{topNavbarHide:!1}},pageHeaderIsBoxed:{true:{pageHeaderBackgroundColor:"primary",colorScheme:"custom"}},pageHeaderBackgroundColor:{transparent:{pageHeaderIsBoxed:!1},any:{colorScheme:"custom"}},pageBackgroundColor:{any:{colorScheme:"custom"}},pageContainerBackgroundColor:{any:{colorScheme:"custom"}},leftSidebarColor:{any:{colorScheme:"custom"}},rightSidebarColor:{any:{colorScheme:"custom"}},modalSidebarColor:{any:{colorScheme:"custom"}},specialSidebarColor:{any:{colorScheme:"custom"}},topNavbarColor:{any:{colorScheme:"custom"}},colorScheme:{default:{pageBackgroundColor:"light",pageContainerBackgroundColor:"white",pageHeaderBackgroundColor:"transparent",leftSidebarColor:"dark-primary",leftSidebarLogoLight:!0,rightSidebarColor:"white",modalSidebarColor:"white",specialSidebarColor:"secondary",topNavbarColor:"black",topNavbarLogoLight:!0},white:{pageBackgroundColor:"white",pageContainerBackgroundColor:"white",pageHeaderBackgroundColor:"transparent",leftSidebarColor:"white",leftSidebarLogoLight:!1,rightSidebarColor:"white",modalSidebarColor:"white",specialSidebarColor:"white",topNavbarColor:"white",topNavbarLogoLight:!1},light:{pageBackgroundColor:"light",pageContainerBackgroundColor:"white",pageHeaderBackgroundColor:"transparent",leftSidebarColor:"white",leftSidebarLogoLight:!1,rightSidebarColor:"white",modalSidebarColor:"white",specialSidebarColor:"light",topNavbarColor:"white",topNavbarLogoLight:!1},dark:{pageBackgroundColor:"black",pageContainerBackgroundColor:"gray-darkest",pageHeaderBackgroundColor:"transparent",leftSidebarColor:"gray-darkest",leftSidebarLogoLight:!0,rightSidebarColor:"gray-darkest",modalSidebarColor:"black",specialSidebarColor:"black",topNavbarColor:"gray-darkest",topNavbarLogoLight:!0},"semi-dark":{pageBackgroundColor:"gray-darkest",pageContainerBackgroundColor:"gray-darker",pageHeaderBackgroundColor:"transparent",leftSidebarColor:"dark-primary",leftSidebarLogoLight:!0,rightSidebarColor:"gray-darker",modalSidebarColor:"gray-darker",specialSidebarColor:"primary",topNavbarColor:"black",topNavbarLogoLight:!0},casual:{pageBackgroundColor:"light",pageContainerBackgroundColor:"white",pageHeaderBackgroundColor:"transparent",leftSidebarColor:"primary",leftSidebarLogoLight:!0,rightSidebarColor:"white",modalSidebarColor:"white",specialSidebarColor:"success",topNavbarColor:"dark-primary",topNavbarLogoLight:!0},business:{pageBackgroundColor:"light",pageContainerBackgroundColor:"white",pageHeaderBackgroundColor:"transparent",leftSidebarColor:"gray-darkest",leftSidebarLogoLight:!0,rightSidebarColor:"white",modalSidebarColor:"white",specialSidebarColor:"white",topNavbarColor:"white",topNavbarLogoLight:!1}}},formErrors:{},preRequisite:{},colors:[{key:"primary",title:"Primary"},{key:"dark-primary",title:"Dark Primary"},{key:"secondary",title:"Secondary"},{key:"success",title:"Success"},{key:"info",title:"Info"},{key:"warning",title:"Warning"},{key:"danger",title:"Danger"},{key:"white",title:"White"},{key:"light",title:"Light"},{key:"dark",title:"Dark"},{key:"gray-darker",title:"Darker"},{key:"gray-darkest",title:"Darkest"},{key:"black",title:"Black"}],colorSchemes:[{key:"default",title:"Default"},{key:"white",title:"White"},{key:"light",title:"Light"},{key:"dark",title:"Dark"},{key:"semi-dark",title:"Semi Dark"},{key:"casual",title:"Casual"},{key:"business",title:"Business"}],initialFormData:null,emptyFormData:null,readyForAction:!1,isLoading:!0,getInitialDataCalled:!1}},computed:d(d({},Object(s.c)("config",["vars","uiConfigs"])),{},{computedFormData:function(){return _.cloneDeep(this.formData)}}),watch:{computedFormData:{deep:!0,handler:_.debounce((function(t,o){var e=this;this.readyForAction&&(t=this.processActions(t,o),this.formData.objForEach((function(o,i){e.formData[i]=t[i]})),this.SetUiConfig(t)),"function"==typeof this.afterSettingConfig&&this.$nextTick((function(){e.afterSettingConfig()})),this.readyForAction=!0}),500)}},methods:d(d(d({},Object(s.b)("config",["GetConfig"])),Object(s.b)("config",["SetUiConfig"])),{},{processActions:function(t,o){return this.actions.objForEach((function(e,i){if(t[i]!==o[i]){var a=e[t[i]];a&&a.objForEach((function(o,e){t[e]=o}));var r=e.any;r&&r.objForEach((function(o,e){t[e]=o}))}})),t},findActualValue:function(t,o){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"uuid";return o.find((function(o){return o[e]===t}))||null},submit:function(){var t=this;if(formUtil.isUnchanged(this.initialFormData,this.formData))return this.$toasted.info(this.$t("general.nothing_changed"),this.$toastConfig.info),!1;this.isLoading=!0,r.c(this.formData).then((function(o){t.GetConfig().then((function(){t.isLoading=!1,t.getInitialDataCalled&&t.getInitialData(),t.$toasted.success(o.message,t.$toastConfig.success),t.initialFormData=Object.assign({},t.formData)})).catch((function(o){t.isLoading=!1,formUtil.handleErrors(o)}))})).catch((function(o){t.isLoading=!1,t.formErrors=formUtil.handleErrors(o)}))},reset:function(){var t=this;formUtil.confirmAction().then((function(o){o.value&&(t.formData=Object.assign({},t.formData,_.cloneDeep(t.initialFormData)))}))},unsavedCheck:function(t){var o=this;formUtil.unsavedCheckAlert(this.initialFormData,this.formData,(function(e){e?(o.SetUiConfig(o.initialFormData),t()):!1!==e&&t()}))},fillPreRequisite:function(t){var o=this;this.preRequisite.objForEach((function(e,i){o.preRequisite[i]=t.hasOwnProperty(i)?t[i]:e})),this.isLoading=!1},fillFormData:function(){this.isLoading=!0,this.uiConfigs&&(this.formData=formUtil.assignValues(this.formData,this.uiConfigs)),this.isLoading=!1},getInitialData:function(t){var o,e=this;return(o=a.a.mark((function o(){var i;return a.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return e.isLoading=!0,e.getInitialDataCalled=!0,o.prev=2,o.next=5,r.b(Object.keys(e.preRequisite).join(","));case 5:return i=o.sent,e.fillPreRequisite(i),t&&e.$nextTick((function(){t()})),o.abrupt("return",i);case 11:throw o.prev=11,o.t0=o.catch(2),e.isLoading=!1,e.formErrors=formUtil.handleErrors(o.t0),o.t0;case 16:case"end":return o.stop()}}),o,null,[[2,11]])})),function(){var t=this,e=arguments;return new Promise((function(i,a){var r=o.apply(t,e);function n(t){l(r,i,a,n,s,"next",t)}function s(t){l(r,i,a,n,s,"throw",t)}n(void 0)}))})()}}),mounted:function(){this.fillFormData(),this.initialFormData=_.cloneDeep(this.formData)},beforeDestroy:function(){delete this.formData,delete this.formErrors,delete this.preRequisite},beforeRouteLeave:function(t,o,e){this.unsavedCheck(e)}}},XTCF:function(t,o){t.exports="/images/notification_position_bottom_right.jpg?9e22d4933602d02dcceecbf5f6c6950f"},ZHq5:function(t,o){t.exports="/images/notification_position_top_center.jpg?81043527119b3899bd40cd3db0fe0c17"},c9Qq:function(t,o,e){var i=e("jdMq");"string"==typeof i&&(i=[[t.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,a);i.locals&&(t.exports=i.locals)},geUM:function(t,o,e){"use strict";e.r(o);function i(t,o){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);o&&(i=i.filter((function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),e.push.apply(e,i)}return e}function a(t){for(var o=1;o<arguments.length;o++){var e=null!=arguments[o]?arguments[o]:{};o%2?i(Object(e),!0).forEach((function(o){r(t,o,e[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))}))}return t}function r(t,o,e){return o in t?Object.defineProperty(t,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[o]=e,t}var n={extends:e("OOS0").a,methods:{showNotification:function(t){this.$toasted.clear(),this.$toasted.show(this.$t("config.ui.notification_demo"),a(a({},this.$toastConfig.normal),{},{position:t}))}}},s=(e("s0j7"),e("KHd+")),c=Object(s.a)(n,(function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("base-container",{attrs:{boxed:"","with-loader":"","is-loading":t.isLoading,"loader-color":t.vars.loaderColor}},[i("form",{on:{submit:function(o){return o.preventDefault(),t.submit.apply(null,arguments)}}},[i("h4",[t._v(t._s(t.$t("config.ui.notification")))]),t._v(" "),i("hr",{staticClass:"mt-3 mb-4"}),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 mb-5"},[i("h6",{staticClass:"font-weight-700"},[t._v(t._s(t.$t("config.ui.position")))]),t._v(" "),i("div",{staticClass:"d-flex align-items-center"},[i("base-radio",{attrs:{value:"top-left",inline:"","has-image":""},on:{change:function(o){return t.showNotification("top-left")}},model:{value:t.formData.notificationPosition,callback:function(o){t.$set(t.formData,"notificationPosition",o)},expression:"formData.notificationPosition"}},[i("img",{attrs:{src:e("n8lj")}}),t._v(" "),i("div",{staticClass:"mt-2 text-center text-muted"},[t._v(t._s(t.$t("config.ui.top_left")))])]),t._v(" "),i("base-radio",{attrs:{value:"top-center",inline:"","has-image":""},on:{change:function(o){return t.showNotification("top-center")}},model:{value:t.formData.notificationPosition,callback:function(o){t.$set(t.formData,"notificationPosition",o)},expression:"formData.notificationPosition"}},[i("img",{attrs:{src:e("ZHq5")}}),t._v(" "),i("div",{staticClass:"mt-2 text-center text-muted"},[t._v(t._s(t.$t("config.ui.top_center")))])]),t._v(" "),i("base-radio",{attrs:{value:"top-right",inline:"","has-image":""},on:{change:function(o){return t.showNotification("top-right")}},model:{value:t.formData.notificationPosition,callback:function(o){t.$set(t.formData,"notificationPosition",o)},expression:"formData.notificationPosition"}},[i("img",{attrs:{src:e("27Ju")}}),t._v(" "),i("div",{staticClass:"mt-2 text-center text-muted"},[t._v(t._s(t.$t("config.ui.top_right")))])])],1),t._v(" "),i("div",{staticClass:"d-flex align-items-center"},[i("base-radio",{attrs:{value:"bottom-left",inline:"","has-image":""},on:{change:function(o){return t.showNotification("bottom-left")}},model:{value:t.formData.notificationPosition,callback:function(o){t.$set(t.formData,"notificationPosition",o)},expression:"formData.notificationPosition"}},[i("img",{attrs:{src:e("Gpig")}}),t._v(" "),i("div",{staticClass:"mt-2 text-center text-muted"},[t._v(t._s(t.$t("config.ui.bottom_left")))])]),t._v(" "),i("base-radio",{attrs:{value:"bottom-center",inline:"","has-image":""},on:{change:function(o){return t.showNotification("bottom-center")}},model:{value:t.formData.notificationPosition,callback:function(o){t.$set(t.formData,"notificationPosition",o)},expression:"formData.notificationPosition"}},[i("img",{attrs:{src:e("yTDK")}}),t._v(" "),i("div",{staticClass:"mt-2 text-center text-muted"},[t._v(t._s(t.$t("config.ui.bottom_center")))])]),t._v(" "),i("base-radio",{attrs:{value:"bottom-right",inline:"","has-image":""},on:{change:function(o){return t.showNotification("bottom-right")}},model:{value:t.formData.notificationPosition,callback:function(o){t.$set(t.formData,"notificationPosition",o)},expression:"formData.notificationPosition"}},[i("img",{attrs:{src:e("XTCF")}}),t._v(" "),i("div",{staticClass:"mt-2 text-center text-muted"},[t._v(t._s(t.$t("config.ui.bottom_right")))])])],1)]),t._v(" "),i("div",{staticClass:"col-12 col-md-6 mb-5"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 mb-5"},[i("h6",{staticClass:"font-weight-700"},[t._v(t._s(t.$t("config.ui.duration")))]),t._v(" "),i("base-input",{attrs:{type:"number",error:t.formErrors.notificationDuration,min:"0",step:"500","select-on-focus":"","addon-right-text":t.$t("config.ui.seconds")},on:{"update:error":function(o){return t.$set(t.formErrors,"notificationDuration",o)},wheel:function(t){t.stopPropagation(),t.preventDefault()}},model:{value:t.formData.notificationDuration,callback:function(o){t.$set(t.formData,"notificationDuration",o)},expression:"formData.notificationDuration"}})],1)])])]),t._v(" "),i("div",{staticClass:"text-right mt-5"},[i("base-button",{attrs:{type:"button",design:"light"},on:{click:t.reset}},[t._v(t._s(t.$t("general.reset")))]),t._v(" "),i("base-button",{attrs:{type:"submit",design:"primary"}},[t._v(t._s(t.$t("general.save")))])],1)])])}),[],!1,null,"2846ee15",null);o.default=c.exports},jdMq:function(t,o,e){(t.exports=e("I1BE")(!1)).push([t.i,".color-item[data-v-2846ee15]{width:100%}.color-list[data-v-2846ee15]{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap}.color-list>.color-item[data-v-2846ee15]{flex:0 50%}",""])},n8lj:function(t,o){t.exports="/images/notification_position_top_left.jpg?f150912ebe581c252af9421daa744709"},s0j7:function(t,o,e){"use strict";e("c9Qq")},yTDK:function(t,o){t.exports="/images/notification_position_bottom_center.jpg?221fe7d0a39f3c2745e0c35fd90abbc8"}}]);
//# sourceMappingURL=index.js.map?id=14a42a19d8776d18431f