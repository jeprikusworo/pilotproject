(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/MoV":function(t,e,a){"use strict";a.d(e,"c",(function(){return o})),a.d(e,"g",(function(){return l})),a.d(e,"d",(function(){return u})),a.d(e,"a",(function(){return c})),a.d(e,"f",(function(){return d})),a.d(e,"h",(function(){return f})),a.d(e,"e",(function(){return p})),a.d(e,"b",(function(){return m}));var i=a("g6NE"),n=i.a.getters["config/configs"],r=i.a.getters["config/vars"],s=function(){return{timezone:n.system.timezone,defaultDateFormat:r.defaultDateFormat,defaultDateTimeFormat:r.defaultDateTimeFormat,serverDateFormat:r.serverDateFormat,serverDateTimeFormat:r.serverDateTimeFormat,calendarLocale:{lastDay:r.defaultDateFormat,sameDay:r.defaultTimeFormat,lastWeek:r.defaultDateFormat,sameElse:r.defaultDateFormat}}},o=function(t,e){var a=s(),i=moment(t,a.serverDateFormat);return t?(Array.isArray(t)&&(i=moment(t[0],t[1])),i.format(e||a.defaultDateFormat)):"INVALID DATE STRING"},l=function(t,e){var a=s(),i=moment(t,a.serverTimeFormat);return t?(Array.isArray(t)&&(i=moment(t[0],t[1])),i.format(e||a.defaultTimeFormat)):"INVALID TIME STRING"},u=function(t,e){var a=s(),i=moment(t,a.serverDateTimeFormat);return t?(Array.isArray(t)&&(i=moment(t[0],t[1])),i.format(e||a.defaultDateTimeFormat)):"INVALID DATE TIME STRING"},c=function(t,e){var a=s(),i=moment(t,a.serverDateTimeFormat);return t?(Array.isArray(t)&&(i=moment(t[0],t[1])),i.calendar(e||a.calendarLocale)):"INVALID DATE TIME STRING"},d=function(t,e,a){var i=s();if(!t)return"INVALID DATE STRING";var n=moment.utc(t,i.serverDateFormat);return"NOW"===t&&(n=moment.utc()),Array.isArray(t)&&(n=moment.utc(t[0],t[1])),n.tz(a||i.timezone).format(e||i.defaultDateFormat)},f=function(t,e,a){var i=s(),n=moment.utc("".concat(moment().format(i.serverDateFormat)," ").concat(t),i.serverTimeFormat);return t?(Array.isArray(t)&&(n=moment.utc(t[0],t[1])),n.tz(a||i.timezone).format(e||i.defaultTimeFormat)):"INVALID TIME STRING"},p=function(t,e,a){var i=s();if(!t)return"INVALID DATE TIME STRING";var n=moment.utc(t,i.serverDateTimeFormat);return"NOW"===t&&(n=moment.utc()),Array.isArray(t)&&(n=moment.utc(t[0],t[1])),n.tz(a||i.timezone).format(e||i.defaultDateTimeFormat)},m=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=s(),n=moment.utc(t,i.serverDateTimeFormat);if(!t)return"INVALID DATE TIME STRING";Array.isArray(t)&&(n=moment.utc(t[0],t[1]));var r=n.tz(a||i.timezone);return r=r.calendar(e||i.calendarLocale)}},"5Xmu":function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var i=a("wd/R"),n=a.n(i),r={DAY_OF_MONTH:{code:"%DAY_OF_MONTH%",example:"Ex. 1-31",outputFormat:"moment",output:"DD"},DAY_OF_YEAR:{code:"%DAY_OF_YEAR%",example:"Ex. 1-365",outputFormat:"moment",output:"DDDD"},YEAR:{code:"%YEAR%",example:"Ex. 2020",outputFormat:"moment",output:"YYYY"},YEAR_SHORT:{code:"%YEAR_SHORT%",example:"Ex. 20",outputFormat:"moment",output:"YY"},MONTH:{code:"%MONTH%",example:"Ex. JANUARY",outputFormat:"moment",output:"MMMM"},MONTH_SHORT:{code:"%MONTH_SHORT%",example:"Ex. JAN",outputFormat:"moment",output:"MMM"},MONTH_NUMBER:{code:"%MONTH_NUMBER%",example:"Ex. 1 - 12",outputFormat:"moment",output:"MM"},DAY:{code:"%DAY%",example:"Ex. MONDAY",outputFormat:"moment",output:"dddd"},DAY_SHORT:{code:"%DAY_SHORT%",example:"Ex. MON",outputFormat:"moment",output:"ddd"},DAY_NUMBER:{code:"%DAY_NUMBER%",example:"Ex. 1 - 7",outputFormat:"moment",output:"E"},DATE:{code:"%DATE%",example:"Ex. 31-08-1987",outputFormat:"moment",output:"YYYY"},TIME:{code:"%DATE%",example:"Ex. 23:59",outputFormat:"moment",output:"mm"}},s=/%(.*?)%/g;function o(t){t.match(s);return r.objForEach((function(e,a){var i=new RegExp(e.code,"g");if("moment"===e.outputFormat){var r=n()().format(e.output);t=t.replace(i,r)}})),t}},BcCH:function(t,e,a){"use strict";var i=a("XuX8"),n=new(a.n(i).a);e.a=n},ICll:function(t,e,a){"use strict";a.d(e,"d",(function(){return n})),a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return o}));var i=a("5TL6");function n(t,e){return Object(i.a)({url:t.url,method:"post",data:t.data,upload:!0,config:{headers:{"Content-Type":"multipart/form-data"}},headers:{"Content-Type":"multipart/form-data; charset=utf-8; boundary="+Math.random().toString().substr(2)},onUploadProgress:e})}function r(t){return Object(i.a)({url:t.url,method:"delete",data:t.data})}function s(t,e,a){return Object(i.a)({url:t.url,method:"post",data:t.data,upload:!0,config:{headers:{"Content-Type":"multipart/form-data"}},headers:{"Content-Type":"multipart/form-data; charset=utf-8; boundary="+Math.random().toString().substr(2)},onUploadProgress:e,cancelToken:a})}function o(t){return Object(i.a)({url:t.url,method:"delete",data:t.data})}},OjY7:function(t,e,a){"use strict";var i=a("vDqi"),n=a.n(i),r=a("ICll"),s=a("L2JU"),o=a("7Cbv"),l=a("BcCH"),u=a("nFxi");function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){f(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function f(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var p={name:"file-uploader",components:{},props:{data:{type:Array,default:function(){return[]}},additionalFormData:{type:Object,default:function(){return{}}},requestIdentifier:{type:String,default:Object(o.a)()},url:{type:String,default:"/uploads"},heading:{type:String,default:null},actionLabel:{type:String,default:"global.choose"},nameLabel:{type:String,default:"upload.file"},namesLabel:{type:String,default:"upload.files"},buttonWrapperClasses:{type:String,default:"justify-content-start"},headingClasses:{type:String,default:"mb-0"},buttonClasses:{type:String,default:""},buttonIcon:{type:String,default:"fas fa-upload"},buttonDesign:{type:String,default:"primary"},options:{type:Object,required:!0},autoUpload:{type:Boolean,default:!0},multiple:{type:Boolean,default:!0},hideButtonLabel:{type:Boolean,default:!1},hideFileList:{type:Boolean,default:!1},hideResetButton:{type:Boolean,default:!1},hideAfterUpload:{type:Boolean,default:!0},showSelectedFilesCount:{type:Boolean,default:!1}},data:function(){return{isLoading:!1,fileRemoved:!1,actionLabelUpdated:"",files:[],uploadedFiles:[],existingFiles:[],icons:u.b,mimeTypes:u.c}},computed:d(d({},Object(s.c)("config",["configs","vars"])),{},{computedActionLabel:function(){return this.existingFile?"global.change":this.actionLabel}}),watch:{data:function(t){this.existingFiles=t.map((function(t){return d(d({},t),{},{status:null})}))},"options.uuid":{deep:!0,handler:function(t,e){t&&t!==e&&this.reset()}}},methods:{getFileIcon:function(t){return this.icons[t]||"fa-file-alt"},getFileNameIcon:function(t){return this.icons[t]||"fa-file-alt"},generateFilesList:function(t){this.isLoading=!0;var e=null,a=this.$refs.filesInput.files;if(this.options.allowedExtensions&&(e=new RegExp("(."+this.options.allowedExtensions.join("|.")+")$")),this.options.maxNoOfFiles&&a.length+this.existingFiles.length>this.options.maxNoOfFiles)this.$toasted.error(this.$t("upload.max_file_limit_crossed",{number:this.options.maxNoOfFiles}),this.$toastConfig.error);else{for(var i=0;i<a.length;i++)e&&!e.test(a[i].name)?(this.isLoading=!1,this.$toasted.error(this.$t("global.file_not_supported",{attribute:a[i].name.split(".").pop()}),this.$toastConfig.error)):a[i].size>this.configs.system.postMaxSize?(this.isLoading=!1,this.$toasted.error(this.$t("global.file_too_large",{attribute:a[i].name}),this.$toastConfig.error)):this.files.push({uuid:Object(o.a)(),file:a[i],status:"waiting",progress:0});this.isLoading=!1,this.$emit("selected",this.files.length),this.autoUpload&&this.startUploading()}},startUploading:function(){var t=this;if(this.files.filter((function(t){return"waiting"===t.status})).length){var e=[],a=n.a.CancelToken;this.$emit("uploading",this.files.length);for(var i=function(i){var n=t.files[i];if(e[i]=function(t){n.progress=Math.round(100*t.loaded/t.total)},"waiting"===n.status){var s=new FormData;s.append("file",n.file),s.append("mime",n.file.type),s.append("token",t.options.token),s.append("module",t.options.module),s.append("request_uuid",t.requestIdentifier),s.append("first_attachment",0===i),s.append("last_attachment",i===t.files.length-1),t.additionalFormData.objForEach((function(t,e){t&&(_.isObject(t)?s.append(e.snakeCase(),JSON.stringify(t)):s.append(e.snakeCase(),t))})),n.status="uploading";var o=new a((function(t){n.cancel=t}));r.c({url:t.url,data:s},e[i],o).then((function(e){e.upload?t.uploadedFiles.push(e.upload):e.attachments&&t.uploadedFiles.push(e.attachments),n.uuid=e.upload?e.upload.uuid:e.uuid,n.status="justUploaded",delete n.cancel,setTimeout((function(){n.status="uploaded",t.hideAfterUpload&&t.files.splice(t.files.findIndex((function(t){return t.uuid===n.uuid})),1)}),2e3),t.$emit("updated",e),t.checkUploadStatus(e)})).catch((function(e){if(t.$emit("error",e),e.response&&e.response.data){var a=e.response.data||{},i=a.errors?formUtil.assignErrors(a.errors):{};n.error=i.message,t.$toasted.error(i.message,t.$toastConfig.error),n.status="error",setTimeout((function(){t.files.splice(t.files.findIndex((function(t){return t.uuid===n.uuid})),1)}),3e3),t.$emit("updated",e),t.checkUploadStatus()}else n.status="cancelled",setTimeout((function(){t.files.splice(t.files.findIndex((function(t){return t.uuid===n.uuid})),1)}),3e3)}))}},s=0;s<this.files.length;s++)i(s)}},removeFile:function(t,e){var a=this,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];formUtil.confirmAction().then((function(e){e.value&&(a.isLoading=!0,r.a({url:a.url+"/"+t.uuid,data:{token:a.options.token,module:a.options.module}}).then((function(e){t.status="removed",setTimeout((function(){i?a.existingFiles.splice(a.existingFiles.findIndex((function(e){return e.uuid===t.uuid})),1):a.files.splice(a.files.findIndex((function(e){return e.uuid===t.uuid})),1)}),3e3),a.isLoading=!1,a.$toasted.success(e.message,a.$toastConfig.success),a.$emit("selected",a.files.length),a.$emit("updated",e),a.checkUploadStatus()})).catch((function(e){var i=e.response.data||{},n=i.errors?formUtil.assignErrors(i.errors):{};a.$toasted.error(n.message,a.$toastConfig.error),t.error=n.message,t.status="removeError"})))}))},checkUploadStatus:function(t){for(var e=!0,a=0;a<this.files.length;a++)"justUploaded"!==this.files[a].status&&"uploaded"!==this.files[a].status&&(e=!1);e?this.$emit("uploaded",this.uploadedFiles):this.$emit("error")},reset:function(){this.isLoading=!1,this.fileRemoved=!1,this.actionLabelUpdated="",this.files=[],this.uploadedFiles=[];var t=this.$refs.filesInput;t.type="text",t.type="file",this.$emit("selected",this.files.length)},startUpload:function(){this.files.length?this.startUploading():this.$emit("noNeed")}},mounted:function(){l.a.$off("START_UPLOAD",this.startUpload),l.a.$on("START_UPLOAD",this.startUpload),l.a.$off("RESET_UPLOAD",this.reset),l.a.$on("RESET_UPLOAD",this.reset),this.existingFiles=this.data.map((function(t){return d(d({},t),{},{status:null})}))},filters:{decimal:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Number(t).toFixed(e)}},destroyed:function(){l.a.$off("START_UPLOAD",this.startUpload),l.a.$off("RESET_UPLOAD",this.reset)}},m=a("KHd+"),h=Object(m.a)(p,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sm-uploader file-uploader"},[a("div",{staticClass:"file-uploader-form"},[a("div",{class:["file-selector d-flex",t.buttonWrapperClasses]},[t.heading?a("h5",{class:["title-desc",t.headingClasses]},[t._v("\n                "+t._s(t.heading)+"\n            ")]):t._e(),t._v(" "),a("label",{class:["btn","btn-"+t.buttonDesign,t.buttonClasses]},[a("input",{ref:"filesInput",staticClass:"selector-input",attrs:{name:"filesInput",type:"file",id:"filesInput",multiple:t.multiple},on:{change:t.generateFilesList}}),t._v(" "),a("span",{staticClass:"button-icon"},[a("i",{class:t.buttonIcon})]),t._v(" "),t.hideButtonLabel?t._e():a("span",{staticClass:"button-label"},[t._v(t._s(t.$t(t.computedActionLabel,{attribute:t.$t(t.namesLabel)})))]),t._v(" "),t.showSelectedFilesCount&&t.files.length?a("span",{staticClass:"button-label bracketed"},[t._v(t._s(t.files.length))]):t._e()]),t._v(" "),t.hideFileList&&!t.hideResetButton&&t.files.length?a("button",{class:["btn","btn-"+t.buttonDesign,t.buttonClasses],attrs:{type:"button"},on:{click:t.reset}},[t._m(0)]):t._e()])]),t._v(" "),t.existingFiles.length||t.uploadedFiles.length||t.files.length?a("div",{class:["files-list-wrapper",{"d-none":t.hideFileList}]},[a("ul",{staticClass:"files-list"},[t._l(t.existingFiles,(function(e,i){return a("li",{key:e.uuid,staticClass:"file-details-row"},[a("div",{staticClass:"file-icon"},[a("span",[a("i",{class:["far",t.getFileIcon(e.mime)]})])]),t._v(" "),a("div",{staticClass:"file-details"},[a("h6",[t._v(t._s(e.filename))]),t._v(" "),e.error?a("p",{staticClass:"text-danger"},[t._v("\n                        "+t._s(e.error)+"\n                    ")]):a("p",[a("span",[a("span",{staticClass:"font-weight-700"},[t._v(t._s(t.$t("upload.type")))]),t._v(": "+t._s(t.mimeTypes[e.mime]||e.mime||"Unknown"))]),t._v(" "),a("span",{staticClass:"ml-1"},[a("span",{staticClass:"font-weight-700"},[t._v(t._s(t.$t("upload.size")))]),t._v(": "+t._s(t._f("decimal")(e.size/1024,0))+" KB")])])]),t._v(" "),a("div",{class:["status-wrapper",{"actions-wrapper":!e.status||"removeError"===e.status}]},[a("transition",{staticClass:"transition-wrapper",attrs:{appear:"",tag:"div",name:"actions",mode:"out-in"}},["removed"===e.status?a("div",{staticClass:"status-removed-wrapper"},[a("label",{staticClass:"status-text text-danger"},[t._v("Removed!")]),t._v(" "),a("span",{staticClass:"status-icon text-danger"},[a("i",{staticClass:"fas fa-trash"})])]):e.status&&"removeError"!==e.status?t._e():a("div",{staticClass:"actions-buttons"},["removeError"===e.status?a("label",{staticClass:"status-text text-danger"},[t._v("Error!")]):t._e(),t._v(" "),"removeError"===e.status?a("span",{staticClass:"status-icon text-danger"},[a("i",{staticClass:"fas fa-exclamation-triangle"})]):t._e(),t._v(" "),a("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",modifiers:{hover:!0,left:!0}}],staticClass:"download-btn",attrs:{href:e.fullUrl,target:"_blank",title:t.$t("global.download",{attribute:t.$t(t.nameLabel)})}},[a("i",{staticClass:"fas fa-download"})]),t._v(" "),a("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",modifiers:{hover:!0,left:!0}}],staticClass:"remove-btn",attrs:{type:"button",title:t.$t("global.remove",{attribute:t.$t(t.nameLabel)})},on:{click:function(a){return t.removeFile(e,i,!0)}}},[a("i",{staticClass:"fas fa-trash"})])])])],1)])})),t._v(" "),t._l(t.uploadedFiles,(function(e,i){return a("li",{key:e.uuid,staticClass:"file-details-row"},[a("div",{staticClass:"file-icon"},[a("span",[a("i",{class:["far",t.getFileIcon(e.mime)]})])]),t._v(" "),a("div",{staticClass:"file-details"},[a("h6",[t._v(t._s(e.filename))]),t._v(" "),e.error?a("p",{staticClass:"text-danger"},[t._v("\n                        "+t._s(e.error)+"\n                    ")]):a("p",[a("span",[a("span",{staticClass:"font-weight-700"},[t._v(t._s(t.$t("upload.type")))]),t._v(": "+t._s(t.mimeTypes[e.mime]||e.mime||"Unknown"))]),t._v(" "),a("span",{staticClass:"ml-1"},[a("span",{staticClass:"font-weight-700"},[t._v(t._s(t.$t("upload.size")))]),t._v(": "+t._s(t._f("decimal")(e.size/1024,0))+" KB")])])]),t._v(" "),a("div",{class:["status-wrapper",{"actions-wrapper":!e.status||"removeError"===e.status}]},[a("transition",{staticClass:"transition-wrapper",attrs:{appear:"",tag:"div",name:"actions",mode:"out-in"}},["removed"===e.status?a("div",{staticClass:"status-removed-wrapper"},[a("label",{staticClass:"status-text text-danger"},[t._v("Removed!")]),t._v(" "),a("span",{staticClass:"status-icon text-danger"},[a("i",{staticClass:"fas fa-trash"})])]):e.status&&"removeError"!==e.status?t._e():a("div",{staticClass:"actions-buttons"},["removeError"===e.status?a("label",{staticClass:"status-text text-danger"},[t._v("Error!")]):t._e(),t._v(" "),"removeError"===e.status?a("span",{staticClass:"status-icon text-danger"},[a("i",{staticClass:"fas fa-exclamation-triangle"})]):t._e(),t._v(" "),a("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",modifiers:{hover:!0,left:!0}}],staticClass:"download-btn",attrs:{href:e.fullUrl,target:"_blank",title:t.$t("global.download",{attribute:t.$t(t.nameLabel)})}},[a("i",{staticClass:"fas fa-download"})]),t._v(" "),a("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",modifiers:{hover:!0,left:!0}}],staticClass:"remove-btn",attrs:{type:"button",title:t.$t("global.remove",{attribute:t.$t(t.nameLabel)})},on:{click:function(a){return t.removeFile(e,i,!0)}}},[a("i",{staticClass:"fas fa-trash"})])])])],1)])})),t._v(" "),t._l(t.files,(function(e,i){return a("li",{key:i,staticClass:"file-details-row"},[a("div",{staticClass:"file-icon"},[a("span",[a("i",{class:["far",t.getFileIcon(e.file.type)]})])]),t._v(" "),a("div",{staticClass:"file-details"},[a("h6",[t._v(t._s(e.file.name))]),t._v(" "),e.error?a("p",{staticClass:"text-danger"},[t._v("\n                        "+t._s(e.error)+"\n                    ")]):a("p",[a("span",[a("span",{staticClass:"font-weight-700"},[t._v(t._s(t.$t("upload.type")))]),t._v(": "+t._s(t.mimeTypes[e.file.type]||"Unknown"))]),t._v(" "),a("span",{staticClass:"ml-1"},[a("span",{staticClass:"font-weight-700"},[t._v(t._s(t.$t("upload.size")))]),t._v(": "+t._s(t._f("decimal")(e.file.size/1024,0))+" KB")])])]),t._v(" "),a("div",{class:["status-wrapper",{"actions-wrapper":"uploaded"===e.status||"removeError"===e.status}]},[a("transition",{staticClass:"transition-wrapper",attrs:{appear:"",tag:"div",name:"actions",mode:"out-in"}},["uploading"===e.status?a("div",{staticClass:"status-uploading-wrapper"},[a("label",{staticClass:"status-action",on:{click:e.cancel}},[t._v(t._s(t.$t("general.cancel")))]),t._v(" "),a("progress-ring",{attrs:{value:e.progress,"stroke-color":t.vars.loaderColor}})],1):"justUploaded"===e.status?a("div",{staticClass:"status-uploaded-wrapper"},[a("label",{staticClass:"status-text text-success"},[t._v("Uploaded!")]),t._v(" "),a("span",{staticClass:"status-icon text-success"},[a("i",{staticClass:"fas fa-check"})])]):"cancelled"===e.status?a("div",{staticClass:"status-cancelled-wrapper"},[a("label",{staticClass:"status-text text-danger"},[t._v("Cancelled!")]),t._v(" "),a("span",{staticClass:"status-icon text-danger"},[a("i",{staticClass:"fas fa-times"})])]):"removed"===e.status?a("div",{staticClass:"status-removed-wrapper"},[a("label",{staticClass:"status-text text-danger"},[t._v("Removed!")]),t._v(" "),a("span",{staticClass:"status-icon text-danger"},[a("i",{staticClass:"fas fa-trash"})])]):"error"===e.status?a("div",{staticClass:"status-error-wrapper"},[a("label",{staticClass:"status-text text-danger"},[t._v("Error!")]),t._v(" "),a("span",{staticClass:"status-icon text-danger"},[a("i",{staticClass:"fas fa-exclamation-triangle"})])]):"uploaded"===e.status||"removeError"===e.status?a("div",{staticClass:"actions-buttons"},["removeError"===e.status?a("label",{staticClass:"status-text text-danger"},[t._v("Error!")]):t._e(),t._v(" "),"removeError"===e.status?a("span",{staticClass:"status-icon text-danger"},[a("i",{staticClass:"fas fa-exclamation-triangle"})]):"uploaded"===e.status?a("label",{staticClass:"status-text text-success"},[t._v("Uploaded!")]):t._e(),t._v(" "),a("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",modifiers:{hover:!0,left:!0}}],staticClass:"remove-btn",attrs:{type:"button",title:t.$t("global.remove",{attribute:t.$t(t.nameLabel)})},on:{click:function(a){return t.removeFile(e,i)}}},[a("i",{staticClass:"fas fa-trash"})])]):t._e()])],1)])}))],2)]):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"button-icon"},[e("i",{staticClass:"fas fa-times"})])}],!1,null,null,null);e.a=h.exports},"TBq+":function(t,e,a){"use strict";a.d(e,"m",(function(){return u})),a.d(e,"l",(function(){return c})),a.d(e,"j",(function(){return d})),a.d(e,"k",(function(){return f})),a.d(e,"a",(function(){return p})),a.d(e,"d",(function(){return m})),a.d(e,"h",(function(){return h})),a.d(e,"i",(function(){return v})),a.d(e,"n",(function(){return O})),a.d(e,"c",(function(){return F})),a.d(e,"o",(function(){return T})),a.d(e,"f",(function(){return E})),a.d(e,"g",(function(){return w})),a.d(e,"e",(function(){return x})),a.d(e,"b",(function(){return j}));a("nFxi");function i(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return n(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,i=new Array(e);a<e;a++)i[a]=t[a];return i}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var l=function(t){var e=t.label,a=t.icon,i=t.tooltip,n=t.design,r=void 0===n?{color:"white",size:"md"}:n;return{label:e,icon:a,tooltip:i,design:r&&r.color||"white",size:r&&r.size||"md"}},u=function(t,e,a){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:{};return s(s({},l({label:t,icon:e,tooltip:i,design:n})),{},{action:function(t){t.push({name:a,params:r,query:o})}})},c=function(t,e,a,i){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:{},l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:{};return s(s({},u(t,e,a,n,r,o,l)),{},{permissions:[i]})},d=function(t,e,a){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return s(s({},l({label:t,icon:e,tooltip:i,design:n})),{},{action:a})},f=function(t,e,a){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return d(t,e,(function(t,e){e.$emit(a.event,a.options)}),i,n)},p=function(t,e){return c($t("general.add_new"),"fas fa-plus",t,e)},m=function(t,e){return c($t("general.edit"),"fas fa-edit",t,e)},h=function(){return f($t("general.filter"),"fas fa-filter",{event:"TOGGLE_FILTER"})},g={storeName:"common",design:"white"},v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return s(s(s({},g),t),{},{options:[{label:$t("general.default"),dispatch:{sortBy:"created_at"}}].concat(i(e))})},b=function(t){return{label:t.label,icon:t.icon}},y=function(t,e,a){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return s(s({},b({label:t,icon:e})),{},{to:{name:a,params:i,query:n}})},_=function(t,e,a,i){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};return s(s({},y(t,e,a,n,r)),{},{permissions:[i]})},D=function(t,e,a){return s(s({},b({label:t,icon:e})),{},{action:a})},C=function(t,e,a){return D(t,e,(function(t,e){e.$emit(a.event,a.options)}))},O=function(t,e){return _($t("general.import"),"fas fa-file-import",t,e)},F=function(t,e){return _($t("general.config"),"fas fa-cog",t,e)},T=function(){return C($t("general.print"),"fas fa-print",{event:"EXPORT",options:{type:"print"}})},E=function(){return C($t("general.export_pdf"),"fas fa-file-pdf",{event:"EXPORT",options:{type:"pdf"}})},w=function(){return C($t("general.export_xls"),"fas fa-file-excel",{event:"EXPORT",options:{type:"xls"}})},x=function(){return C($t("general.export_csv"),"fas fa-file-csv",{event:"EXPORT",options:{type:"csv"}})},A={key_p:{type:"event",emit:"EXPORT",payload:{type:"print"}}},I={key_e:{type:"event",emit:"EXPORT",payload:{type:"pdf"}}},j=s(s(s({},{key_f:{type:"event",emit:"TOGGLE_FILTER"}}),A),I)},"g+26":function(t,e,a){"use strict";var i=a("o0o1"),n=a.n(i),r=a("TBq+"),s=a("OjY7"),o=a("V0LQ"),l=a("5Xmu"),u=a("L2JU"),c=a("BcCH"),d=a("/MoV");function f(t,e,a,i,n,r,s){try{var o=t[r](s),l=o.value}catch(t){return void a(t)}o.done?e(l):Promise.resolve(l).then(i,n)}function p(t){return function(){var e=this,a=arguments;return new Promise((function(i,n){var r=t.apply(e,a);function s(t){f(r,i,n,s,o,"next",t)}function o(t){f(r,i,n,s,o,"throw",t)}s(void 0)}))}}function m(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function h(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?m(Object(a),!0).forEach((function(e){g(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function g(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}e.a={components:{FileUploader:s.a},props:{editData:{type:Object},isFetching:{type:Boolean,default:!1},duplicate:{type:Boolean,default:!1}},data:function(){return{uuid:null,subUuid:null,formData:{},formErrors:{},formLabels:{},customFilters:{},initianLength:0,initialFormData:null,emptyFormData:null,preRequisite:{},keepAdding:!1,keepAddingOption:"clear_all",keepAddingSelectedFields:null,keepAddingFields:[],isLoading:!0,getInitialDataCalled:!1,doInitBeforeGetInitialData:!1,initUrl:"",initSubUrl:null,dateTimeFields:null,dataType:null,uploaderConfig:{module:"",token:"",allowedExtensions:"",maxNoOfFiles:5,uuid:uuid()},headerButtons:null}},computed:h(h(h({},Object(u.c)("config",["configs","vars","allowExtraInput"])),Object(u.c)("user",["hasPermission","hasRole"])),{},{showKeepAdding:function(){return!this.editData||this.duplicate},codePrefix:function(){return this.formData.codePrefix},lastCodeObj:function(){var t=this;return this.preRequisite.codes.find((function(e){return e.codePrefix===t.formData.codePrefix}))},formHasErrors:function(){var t=!1;return this.formErrors.objForEach((function(e){_.isObject(e)?e.objForEach((function(e){t=""!==e||t})):t=""!==e||t})),t}}),watch:{editData:function(t){var e=this;if(t){var a=t;this.dateTimeFields&&Array.isArray(this.dateTimeFields)&&this.dateTimeFields.forEach((function(t){a[t]&&(a[t]=d.e(a[t],e.vars.serverDateTimeFormat))})),this.timeFields&&Array.isArray(this.timeFields)&&this.timeFields.forEach((function(t){Array.isArray(t)?a[t[0]]&&(a[t[0]]=d.h([a[t[0]],a[t[1]]],e.vars.serverTimeFormat,null)):a[t]&&(a[t]=d.h(a[t],e.vars.serverTimeFormat,null))})),this.formData=Object.assign({},this.formData,_.cloneDeep(a)),this.uuid=this.formData.uuid,this.uploaderConfig.token=this.formData.token,"function"==typeof this.addNewRow&&"function"==typeof this.addNewRowIfNone&&this.addNewRowIfNone(),"function"==typeof this.afterEditData&&this.afterEditData(),this.duplicate&&this.computeCodeNumber(this.formData.codePrefix),window.setTimeout((function(){e.initialFormData=_.cloneDeep(e.formData)}),500)}},codePrefix:function(){this.computeCodeNumber()}},methods:h(h(h({},Object(u.b)("common",["Init","InitSub","Get","Store","Update","GetPreRequisite","Destroy","Custom"])),Object(u.b)("config",["SetUiConfig","SetConfig"])),{},{computeCodeNumber:function(){if(this.preRequisite.codes&&this.showKeepAdding){this.lastCodeObj;var t=this.configs[this.dataType].codeDigit;this.lastCodeObj?this.formData.codeNumber=this.numberPadding(this.lastCodeObj.codeNumber+1,t):this.formData.codeNumber=this.numberPadding(1,t)}},numberPadding:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1?arguments[1]:void 0;return Object(o.h)(t,e||this.configs[this.dataType].codeDigit)},doNothing:function(){},submit:function(){var t=this;if(formUtil.isUnchanged(this.initialFormData,this.formData))return this.$toasted.info(this.$t("general.nothing_changed"),this.$toastConfig.info),!1;this.doInit(),this.doInitSub(),this.isLoading=!0,this.beforeSubmit&&"function"==typeof this.beforeSubmit&&this.beforeSubmit(),this.duplicate&&(this.formData.uuid=null),(this.formData.uuid?this.Update:this.Store)(this.formData).then((function(e){t.$toasted.success(e.message,t.$toastConfig),"function"==typeof t.afterSubmit?t.afterSubmit(e):t.keepAdding?(t.uploaderConfig.uuid=uuid(),t.formData=formUtil.clearFormConditionally(t.formData,t.initialFormData,t.keepAddingOption,t.keepAddingSelectedFields),t.getInitialDataCalled&&t.getInitialData()):(t.initialFormData=_.cloneDeep(t.formData),t.$router.back()),t.isLoading=!1})).catch((function(e){t.isLoading=!1,t.formErrors=Object.assign(t.formErrors,formUtil.handleErrors(e))}))},reset:function(){var t=this;formUtil.confirmAction().then((function(e){e.value&&(t.formData=Object.assign({},t.formData,_.cloneDeep(t.initialFormData)))}))},unsavedCheck:function(t){formUtil.unsavedCheckAlert(this.initialFormData,this.formData,t)},fillPreRequisite:function(t){var e=this;this.preRequisite.objForEach((function(a,i){e.preRequisite[i]=t.hasOwnProperty(i)?t[i]:a}))},setUploaderConfig:function(t){var e=this;this.uploaderConfig.objForEach((function(a,i){e.uploaderConfig[i]=t.hasOwnProperty(i)?t[i]:a}))},getInitialData:function(t){var e=this;return p(n.a.mark((function a(){var i;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e.isLoading=!0,e.getInitialDataCalled=!0,a.prev=2,e.doInitBeforeGetInitialData&&e.doInit(),a.next=6,e.GetPreRequisite(e.customFilters);case 6:return i=a.sent,e.doInitBeforeGetInitialData&&e.doInitSub(),e.fillPreRequisite(i),i.uploadConfig&&e.setUploaderConfig(i.uploadConfig),"function"==typeof e.addNewRow&&"function"==typeof e.addNewRowIfNone&&e.$nextTick((function(){e.addNewRowIfNone()})),e.configs[e.dataType]&&e.$nextTick((function(){e.formData.codePrefix=l.a(e.configs[e.dataType].codePrefix)})),e.afterGetInitialData&&"function"==typeof e.afterGetInitialData&&e.afterGetInitialData(i),t&&e.$nextTick((function(){t(i),window.setTimeout((function(){e.initialFormData=_.cloneDeep(e.formData)}),500)})),e.isLoading=!1,a.abrupt("return",i);case 18:throw a.prev=18,a.t0=a.catch(2),e.isLoading=!1,formUtil.handleErrors(a.t0),a.t0;case 23:case"end":return a.stop()}}),a,null,[[2,18]])})))()},getEntityData:function(){var t=this;this.isLoading=!0,this.Get(this.formData.uuid).then((function(e){t.formData.objForEach((function(a,i){t.formData[i]=e.hasOwnProperty(i)?e[i]:null})),t.initialFormData=_.cloneDeep(t.formData),t.isLoading=!1})).catch((function(e){t.isLoading=!1,formUtil.handleErrors(e)}))},addTag:function(t){var e={name:t,slug:formUtil.generateSlug(t)};this.preRequisite.tags.push(e),this.formData.tags.push(e)},newModalClose:function(t){var e=this;if(this.doInit(),this.doInitSub(),t){var a=function(){var a=function(a){t.push?e.formData[t.dataTypeArr].push(a):e.formData[t.dataType]=a};e.isLoading=!0,t.dataType&&(t.dontMatch?a(t):t.dataTypeArr&&t.propertyToMatch&&a(e.preRequisite[t.dataTypeArr].find((function(e){return e[t.propertyToMatch]===t[t.propertyToMatch]}))||null)),e.isLoading=!1};this.getInitialDataCalled?this.getInitialData(a):a()}},getHeaderOptions:function(){var t=[];this.headerButtons&&(t=t.concat(this.headerButtons));var e=[];return e.push(r.o()),e.push(r.f()),{hideLinks:this.hideHeaderLinks||!1,buttons:t,links:e,title:this.pageTitle||"",subTitle:this.pageTitle&&this.subTitle||""}},getKeyBindingOptions:function(){return h({},r.b)},applyPageHeader:function(){var t=Object.assign({},this.getHeaderOptions(),this.header||{}),e=Object.assign({},this.getKeyBindingOptions(),this.keyBindings||{});this.SetUiConfig({pageHeader:t}),this.SetConfig({keyBindings:e})},export:function(t){var e=this;return p(n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.isLoading=!0,e.$printComponent("printable",{title:"Printing ".concat(e.dataTitle||"")}),e.isLoading=!1;case 3:case"end":return t.stop()}}),t)})))()},doInitSub:function(){this.initSubUrl&&this.InitSub({url:(this.subUuid?this.subUuid+"/":"")+this.initSubUrl})},doInit:function(){this.Init({url:this.initUrl})}}),mounted:function(){c.a.$off("ROUTE_LEAVING",this.unsavedCheck),c.a.$on("ROUTE_LEAVING",this.unsavedCheck),this.$route.params.subUuid&&(this.subUuid=this.$route.params.subUuid),this.doInit(),this.doInitSub(),this.uploaderConfig.token=this.formData.token,this.initialFormData=_.cloneDeep(this.formData)},created:function(){var t=this;this.formLabels&&this.formLabels.objForEach((function(e,a){t.keepAddingFields.push({uuid:a,value:e})})),this.formData&&this.formData.objForEach((function(e,a){_.isObject(e)&&!_.isArray(e)&&(t.formErrors[a]={})}))},beforeDestroy:function(){delete this.formData,delete this.formErrors,delete this.formLabels,delete this.preRequisite,delete this.keepAddingFields},destroyed:function(){c.a.$off("ROUTE_LEAVING",this.unsavedCheck)}}}}]);
//# sourceMappingURL=add~~198e5861.js.map?id=857e2c83ff85c5776cd0