(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34965c9c"],{"0d1f":function(t,e,c){},"13d5":function(t,e,c){"use strict";var s=c("23e7"),r=c("d58f").left,a=c("a640"),n=c("2d00"),o=c("605d"),i=a("reduce"),l=!o&&n>79&&n<83;s({target:"Array",proto:!0,forced:!i||l},{reduce:function(t){return r(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},ba7d:function(t,e,c){"use strict";c("0d1f")},d58f:function(t,e,c){var s=c("1c0b"),r=c("7b0b"),a=c("44ad"),n=c("50c4"),o=function(t){return function(e,c,o,i){s(c);var l=r(e),u=a(l),d=n(l.length),f=t?d-1:0,p=t?-1:1;if(o<2)while(1){if(f in u){i=u[f],f+=p;break}if(f+=p,t?f<0:d<=f)throw TypeError("Reduce of empty array with no initial value")}for(;t?f>=0:d>f;f+=p)f in u&&(i=c(i,u[f],f,l));return i}};t.exports={left:o(!1),right:o(!0)}},e5e5:function(t,e,c){"use strict";c.r(e);var s=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"progression-bosses pt-4 mt-5 border-top"},[c("h2",{staticClass:"font-diablo mb-4"},[t._v("Progression")]),c("b-row",t._l(t.sortedActs,(function(t,e){return c("b-col",{key:e,staticClass:"col-12 col-md-2"},[c("div",{staticClass:"bg-dark rounded mb-2"},[c("ProgressItem",{attrs:{act:{actNum:e,value:t}}})],1)])})),1)],1)},r=[],a=(c("13d5"),c("b64b"),function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"d-flex flex-column",attrs:{title:t.actTitle}},[c("div",{staticClass:"boss-img pt-2"},[c("div",{staticClass:"act",class:t.actClass})]),c("p",{staticClass:"d-block text-center m-0 lead font-weight-bold"},[t._v(" "+t._s(t.fullActName)+" ")])])}),n=[],o=(c("99af"),{act1:"I",act2:"II",act3:"III",act4:"IV",act5:"V"}),i={name:"ProgressItem",props:{act:{required:!0,type:Object,validator:function(t){return 2===Object.keys(t).length}}},computed:{fullActName:function(){return"Act ".concat(o[this.act.actNum])},actClass:function(){var t=this.act.value?"done":"pending";return"".concat(this.act.actNum," ").concat(t)},actTitle:function(){return this.act.value?"Act completed! 💃":"Act uncompleted 🙈"}}},l=i,u=c("2877"),d=Object(u["a"])(l,a,n,!1,null,null,null),f=d.exports,p={name:"ProgressBosses",components:{ProgressItem:f},props:{acts:{required:!0,type:Object}},computed:{sortedActs:function(){var t=this;return Object.keys(this.acts).sort().reduce((function(e,c){return e[c]=t.acts[c],e}),{})}}},b=p,m=(c("ba7d"),Object(u["a"])(b,s,r,!1,null,null,null));e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-34965c9c.7a55e2bc.js.map