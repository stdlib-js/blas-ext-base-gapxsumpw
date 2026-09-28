"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var t=s(function(w,i){
var v=require('@stdlib/blas-ext-base-gsumpw/dist').ndarray;function c(e,r,a,u,q){return e<=0?0:e*r+v(e,a,u,q)}i.exports=c
});var p=s(function(l,n){
var d=require('@stdlib/strided-base-stride2offset/dist'),f=t();function x(e,r,a,u){return f(e,r,a,u,d(e,u))}n.exports=x
});var y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=p(),m=t();y(o,"ndarray",m);module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
