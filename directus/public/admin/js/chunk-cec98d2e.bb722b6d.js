(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cec98d2e"],{1749:function(e,t,n){"use strict";n.r(t);var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-select",{attrs:{id:e.name,value:e.value,disabled:e.readonly,options:e.choices,placeholder:e.options.placeholder},on:{input:function(t){return e.$emit("input",t)}}})},u=[],a=(n("456d"),n("ac6a"),n("8db2")),i=n.n(a),o={mixins:[i.a],computed:{choices:function(){var e=this,t=this.$store.state.extensions.interfaces||{},n={};return Object.keys(t).forEach(function(t){n[t]=e.$helpers.formatTitle(t)}),n}}},r=o,c=(n("6712"),n("2877")),p=Object(c["a"])(r,l,u,!1,null,"02e36986",null);t["default"]=p.exports},5889:function(e,t,n){},6712:function(e,t,n){"use strict";var l=n("5889"),u=n.n(l);u.a},"8db2":function(e,t){e.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null}}}}}]);
//# sourceMappingURL=chunk-cec98d2e.bb722b6d.js.map