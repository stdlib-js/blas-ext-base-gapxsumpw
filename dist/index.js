"use strict";var s=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var t=s(function(w,i){
var v=require('@stdlib/blas-ext-base-gsumpw/dist').ndarray;function c(r,e,u,a,q){return r<=0?0:r*e+v(r,u,a,q)}i.exports=c
});var p=s(function(l,n){
var d=require('@stdlib/strided-base-stride2offset/dist'),f=t();function x(r,e,u,a){return f(r,e,u,a,d(r,a))}n.exports=x
});var y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=p(),m=t();y(o,"ndarray",m);module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
