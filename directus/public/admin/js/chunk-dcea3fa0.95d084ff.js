(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dcea3fa0"],{1902:function(e,t,n){},"38cb":function(e,t,n){"use strict";var r=n("1902"),i=n.n(r);i.a},"61e2":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.parseError?n("small",{staticClass:"notice"},[n("v-icon",{attrs:{name:"warning"}}),n("span",[e._v("\n    "+e._s(e.$t("interfaces-dropdown-options_invalid"))+"\n    "),n("br"),e._v("\n    "+e._s(e.parseError)+"\n  ")])],1):n("v-select",{attrs:{id:e.name,value:e.value,disabled:e.readonly,options:e.choices,placeholder:e.options.placeholder,icon:e.options.icon},on:{input:function(t){return e.$emit("input",t)}}})},i=[],o=(n("6b54"),n("8db2")),a=n.n(o),l={mixins:[a.a],data:function(){return{parseError:null}},computed:{choices:function(){var e=this.options.choices;if(!e)return{};if("string"===typeof this.options.choices)try{e=JSON.parse(this.options.choices)}catch(t){this.parseError=t.toString()}return e}}},s=l,u=(n("38cb"),n("2877")),c=Object(u["a"])(s,r,i,!1,null,"364a0a9a",null);t["default"]=c.exports},"8db2":function(e,t){e.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null}}}}}]);
//# sourceMappingURL=chunk-dcea3fa0.95d084ff.js.map