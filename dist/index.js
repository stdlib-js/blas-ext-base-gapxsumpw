"use strict";var K=function(f,r){return function(){return r||f((r={exports:{}}).exports,r),r.exports}};var E=K(function(H,L){
var b=require('@stdlib/math-base-special-floor/dist'),j=128;function C(f,r,n,u,Z){var v,c,y,m,g,w,O,s,B,I,e,q,o;if(f<=0)return 0;if(v=Z,u===0)return f*(r+n[v]);if(f<8){for(e=0,o=0;o<f;o++)e+=r+n[v],v+=u;return e}if(f<=j){for(c=r+n[v],y=r+n[v+u],m=r+n[v+2*u],g=r+n[v+3*u],w=r+n[v+4*u],O=r+n[v+5*u],s=r+n[v+6*u],B=r+n[v+7*u],v+=8*u,I=f%8,o=8;o<f-I;o+=8)c+=r+n[v],y+=r+n[v+u],m+=r+n[v+2*u],g+=r+n[v+3*u],w+=r+n[v+4*u],O+=r+n[v+5*u],s+=r+n[v+6*u],B+=r+n[v+7*u],v+=8*u;for(e=c+y+(m+g)+(w+O+(s+B)),o;o<f;o++)e+=r+n[v],v+=u;return e}return q=b(f/2),q-=q%8,C(q,r,n,u,v)+C(f-q,r,n,u,v+q*u)}L.exports=C
});var R=K(function(J,M){
var k=require('@stdlib/strided-base-stride2offset/dist'),z=E();function A(f,r,n,u){return z(f,r,n,u,k(f,u))}M.exports=A
});var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),S=R(),F=E();D(S,"ndarray",F);module.exports=S;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
