(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{"Bdl+":function(t,e,o){"use strict";o("myRT")},CJTH:function(t,e,o){"use strict";var r=o("L2JU");function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function s(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var n={props:["footerCredit","version"],computed:function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){s(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}({},Object(r.c)("config",["configs"]))},i=(o("Sg/d"),o("KHd+")),c=Object(i.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",{class:["guest-footer mt-2",t.configs.auth&&t.configs.auth.guestLayoutDesign?"parent-design-"+t.configs.auth.guestLayoutDesign:"",t.configs.auth&&t.configs.auth.guestLayoutColor?"parent-color-"+t.configs.auth.guestLayoutColor:""]},[o("p",{staticClass:"text-center mb-0 py-3"},[t._v(t._s(t.footerCredit)+" "+t._s(t.$t("product.version"))+" "+t._s(t.version))])])}),[],!1,null,"5b42e22c",null);e.a=c.exports},LZDC:function(t,e,o){"use strict";o.r(e);var r={extends:o("WK6j").a,data:function(){return{formData:{email:"",code:"",newPassword:"",newPasswordConfirmation:""},requested:!1,validated:!1}},methods:{submit:function(){var t=this;this.isLoading=!0,this.requested&&this.validated?this.ResetPassword(this.formData).then((function(e){t.$toasted.success(e.message,t.$toastConfig),t.$router.push(t.withQuery({name:"login"}))})).catch((function(e){t.isLoading=!1,t.formErrors=formUtil.handleErrors(e)})):this.requested?this.ValidateResetPassword(this.formData).then((function(e){t.$toasted.success(e.message,t.$toastConfig),t.validated=!0,t.isLoading=!1})).catch((function(e){t.isLoading=!1,t.formErrors=formUtil.handleErrors(e)})):this.RequestReset(this.formData).then((function(e){t.$toasted.success(e.message,t.$toastConfig),t.requested=!0,t.isLoading=!1})).catch((function(e){t.isLoading=!1,t.formErrors=formUtil.handleErrors(e)}))}}},a=o("KHd+"),s=Object(a.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"guest-page"},[o("box",[o("animated-loader",{attrs:{"is-loading":t.isLoading,"loader-color":t.vars.loaderColor}}),t._v(" "),o("guest-header",[o("h5",[t._v(t._s(t.$t("auth.password.forgot.page_title")))])]),t._v(" "),o("section",{attrs:{role:"main"}},[o("form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[o("base-input",{staticClass:"mb-3",attrs:{"auto-focus":!t.requested&&!t.validated,disabled:t.requested||t.validated,label:t.$t("auth.password.props.email"),type:"text","addon-left-icon":"fas fa-envelope",error:t.formErrors.email},on:{"update:error":function(e){return t.$set(t.formErrors,"email",e)}},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}}),t._v(" "),t.requested?[t.validated?[o("base-input",{staticClass:"mb-3",attrs:{"auto-focus":t.requested&&t.validated,label:t.$t("auth.password.props.new_password"),type:"password","addon-left-icon":"fas fa-key",error:t.formErrors.newPassword},on:{"update:error":function(e){return t.$set(t.formErrors,"newPassword",e)}},model:{value:t.formData.newPassword,callback:function(e){t.$set(t.formData,"newPassword",e)},expression:"formData.newPassword"}}),t._v(" "),o("base-input",{staticClass:"mb-3",attrs:{label:t.$t("auth.password.props.new_password_confirmation"),type:"password","addon-left-icon":"fas fa-key",error:t.formErrors.newPasswordConfirmation},on:{"update:error":function(e){return t.$set(t.formErrors,"newPasswordConfirmation",e)}},model:{value:t.formData.newPasswordConfirmation,callback:function(e){t.$set(t.formData,"newPasswordConfirmation",e)},expression:"formData.newPasswordConfirmation"}})]:o("base-input",{staticClass:"mb-3",attrs:{"auto-focus":t.requested&&!t.validated,disabled:t.requested&&t.validated,label:t.$t("auth.password.props.code"),type:"password","addon-left-icon":"fas fa-qrcode",error:t.formErrors.code},on:{"update:error":function(e){return t.$set(t.formErrors,"code",e)}},model:{value:t.formData.code,callback:function(e){t.$set(t.formData,"code",e)},expression:"formData.code"}})]:t._e(),t._v(" "),o("div",{staticClass:"text-center"},[t.requested&&t.validated?o("base-button",{staticClass:"my-4 text-lg",attrs:{type:"submit",design:"primary",block:""}},[t._v(t._s(t.$t("auth.password.reset_password")))]):t.requested?o("base-button",{staticClass:"my-4 text-lg",attrs:{type:"submit",design:"primary",block:""}},[t._v(t._s(t.$t("auth.password.validate_code")))]):o("base-button",{staticClass:"my-4 text-lg",attrs:{type:"submit",design:"primary",block:""}},[t._v(t._s(t.$t("auth.password.request")))])],1),t._v(" "),o("div",{staticClass:"form-group m-b-0"},[o("div",{staticClass:"col-sm-12 text-center"},[o("p",[o("i",{staticClass:"fas fa-chevron-left"}),t._v(" "),o("router-link",{staticClass:"text-primary m-l-5",attrs:{to:t.withQuery({name:"login"})}},[o("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("auth.login.back_to_login")))])])],1)])])],2)])],1),t._v(" "),t.configs.system?o("guest-footer",{attrs:{"footer-credit":t.configs.system.footerCredit,version:t.configs.system.version}}):t._e()],1)}),[],!1,null,"444f4210",null);e.default=s.exports},OGiG:function(t,e,o){(t.exports=o("I1BE")(!1)).push([t.i,".guest-footer p[data-v-5b42e22c]{color:#fff;opacity:.3}.guest-footer.parent-color-light p[data-v-5b42e22c]{color:#000}.guest-footer.parent-color-dark p[data-v-5b42e22c]{color:#fff}.guest-footer.parent-design-boxed-left p[data-v-5b42e22c],.guest-footer.parent-design-boxed-right p[data-v-5b42e22c]{color:#000}",""])},"Sg/d":function(t,e,o){"use strict";o("l6oD")},WK6j:function(t,e,o){"use strict";var r=o("L2JU"),a=o("kUDz"),s=o("l7An"),n=o("CJTH");function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function c(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){l(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}e.a={components:{Box:a.a,GuestHeader:s.a,GuestFooter:n.a},data:function(){return{formData:{},formErrors:{},initialFormData:null,initianLength:0,emptyFormData:null,preRequisite:{},isLoading:!0,icons:{facebook:"fab fa-facebook-f",twitter:"fab fa-twitter",github:"fab fa-github",google:"fab fa-google"},btns:{facebook:"btn-facebook",twitter:"btn-twitter",github:"btn-github",google:"btn-google-plus"}}},computed:c(c(c({},Object(r.c)("config",["configs","vars"])),Object(r.c)("user",["twoFactorSet","hasRole"])),{},{selectedLocale:function(){var t=getQueryStringByParam("locale");return t||this.configs.system.locale},showLocaleSwitcher:function(){return this.configs.system.locales&&this.configs.system.locales.length>1}}),methods:c(c(c({},Object(r.b)("config",["GetConfig"])),Object(r.b)("user",["Register","SetCSRF","Logout","Login","LoginUsingOtp","ResetTwoFactorSet","RequestReset","ValidateResetPassword","ResetPassword","CheckTwoFactorCode"])),{},{withQuery:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=this.$route.query,a="";return t.hasOwnProperty("query")||(t.query={}),t.query.locale=r&&r.locale?r.locale:void 0,r&&r.locale&&(a="".concat(a,"?locale=").concat(r.locale)),!r||!r.ref||o&&o.hasOwnProperty("removeRef")&&o.removeRef||(t.query.ref=r.ref,a="?".concat(a,"&ref=").concat(r.ref),a="?".concat(a,"&ref=").concat(r.ref)),a="".concat(t.name).concat(a),e?a:t},switchLocale:function(t){var e=window.location.href;window.location.href=updateQueryStringParam(e,"locale",t.locale)}}),mounted:function(){this.initialFormData=_.cloneDeep(this.formData),this.isLoading=!1},beforeDestroy:function(){delete this.formData,delete this.formErrors,delete this.preRequisite}}},bdEB:function(t,e,o){"use strict";var r=o("L2JU");function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function s(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var i={props:{tag:{type:String,default:"a"},place:{type:String,default:"normal"},size:{type:String,default:"normal"},appLogo:{type:Boolean,default:!1},inline:{type:Boolean,default:!1},link:{type:String,default:""},assets:{type:Object}},data:function(){return{appLogoText:window.kmenv.name}},computed:s(s({},Object(r.c)("config",["configs","uiConfigs"])),{},{computedUrl:function(){return"a"===this.tag&&(""!==this.link?this.link:"/")},orgLogo:function(){if(this.appLogo||!this.configs.assets&&!this.assets)return"navbar"===this.place||"sidebar"===this.place||"dark"===this.place?"/images/logo-light.png":"/images/logo.png";var t=this.assets&&this.assets.logo?this.assets.logo:this.configs.assets.logo?this.configs.assets.logo:"/images/logo.png";return(this.assets&&this.assets.logoLight||this.configs.assets.logoLight)&&("navbar"===this.place&&this.uiConfigs.topNavbarLogoLight||"sidebar"===this.place&&this.uiConfigs.leftSidebarLogoLight||"dark"===this.place)&&(t=this.assets&&this.assets.logoLight?this.assets.logoLight:this.configs.assets.logoLight),t},appTitle:function(){return this.configs.basic?this.configs.basic.appName:window.kmenv.name}})},c=o("KHd+"),l=Object(c.a)(i,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o(t.tag,{tag:"component",class:["logo",t.place+"-logo",t.size+"-logo",t.orgLogo?"org-logo":"app-logo",t.inline?"inline-logo":""],attrs:{href:t.computedUrl}},[t.orgLogo?o("img",{staticClass:"logo-icon",attrs:{src:t.orgLogo,alt:t.appTitle}}):[o("span",{staticClass:"logo-text",attrs:{title:t.appTitle}},[t._v(t._s(t.appLogoText))])]],2)}),[],!1,null,null,null);e.a=l.exports},kUDz:function(t,e,o){"use strict";var r=o("bdEB"),a=o("L2JU");function s(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function n(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?s(Object(o),!0).forEach((function(e){i(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function i(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var c={props:{width:{type:String,default:"normal"}},components:{AppLogo:r.a},data:function(){return{}},computed:n(n({},Object(a.c)("config",["configs"])),{},{orgLogo:function(){return this.configs.image&&this.configs.image.logo?this.configs.image.logo:null}})},l=(o("Bdl+"),o("KHd+")),u=Object(l.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:["centered-box justify-content-center","width-"+t.width,t.configs.auth&&t.configs.auth.guestLayoutDesign?"parent-design-"+t.configs.auth.guestLayoutDesign:"",t.configs.auth&&t.configs.auth.guestLayoutColor?"parent-color-"+t.configs.auth.guestLayoutColor:""]},[o("card",{staticClass:"border-0",attrs:{type:"white","header-classes":"bg-white","body-classes":"px-lg-4 py-lg-4"}},[t._t("default"),t._v(" "),this.orgLogo?o("div",{staticClass:"powered-logo text-center"},[o("span",{staticClass:"text-muted mr-1"},[t._v(t._s(t.$t("general.powered_by"))+" ")]),t._v(" "),o("app-logo",{attrs:{"app-logo":"",inline:""}})],1):t._e()],2)],1)}),[],!1,null,"9e2b7368",null).exports,f={props:{name:{type:String,default:"CenteredBox"},width:{type:String,default:"normal"}},components:{CenteredBox:u}},d=Object(l.a)(f,(function(){var t=this.$createElement;return(this._self._c||t)(this.name,{tag:"component",attrs:{width:this.width}},[this._t("default")],2)}),[],!1,null,"ebb852f4",null);e.a=d.exports},l6oD:function(t,e,o){var r=o("OGiG");"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};o("aET+")(r,a);r.locals&&(t.exports=r.locals)},l7An:function(t,e,o){"use strict";var r=o("bdEB"),a=o("L2JU");function s(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var i={components:{AppLogo:r.a},data:function(){return{}},computed:function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?s(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}({},Object(a.c)("config",["configs"]))},c=o("KHd+"),l=Object(c.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"guest-header text-center mb-4"},[e("div",{staticClass:"logo-wrapper text-center mb-4 pb-2"},[e("app-logo")],1),this._v(" "),this._t("default")],2)}),[],!1,null,null,null);e.a=l.exports},myRT:function(t,e,o){var r=o("oKhl");"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};o("aET+")(r,a);r.locals&&(t.exports=r.locals)},oKhl:function(t,e,o){(e=t.exports=o("I1BE")(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Muli:300,400,600,700,800,900);",""]),e.push([t.i,".centered-box[data-v-9e2b7368]{display:flex;flex-direction:column;width:90vw;margin:1.5rem auto 0;justify-content:center}.centered-box>.card[data-v-9e2b7368]{box-shadow:0 .5rem 1rem rgba(0,0,0,.15)}.powered-logo[data-v-9e2b7368]{display:flex;justify-content:center;align-items:center;font-size:.8rem}.powered-logo span[data-v-9e2b7368]{line-height:10px}.powered-logo img[data-v-9e2b7368]{width:80px;margin-left:8px}@media (min-width:768px){.centered-box[data-v-9e2b7368]{width:400px}.centered-box.width-sm[data-v-9e2b7368]{width:350px}.centered-box.width-md[data-v-9e2b7368]{width:450px}.centered-box.width-xl[data-v-9e2b7368]{width:500px}.centered-box.width-xxl[data-v-9e2b7368]{width:550px}.centered-box.width-xxxl[data-v-9e2b7368]{width:600px}.centered-box.parent-design-boxed-left[data-v-9e2b7368],.centered-box.parent-design-boxed-right[data-v-9e2b7368]{margin-top:0;flex-grow:1}.centered-box.parent-design-boxed-left>.card[data-v-9e2b7368],.centered-box.parent-design-boxed-right>.card[data-v-9e2b7368]{box-shadow:none}}",""])}}]);
//# sourceMappingURL=password.js.map?id=d993acf0aa4f0407d45e