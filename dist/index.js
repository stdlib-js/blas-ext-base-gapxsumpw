"use strict";var L=function(f,r){return function(){return r||f((r={exports:{}}).exports,r),r.exports}};var k=L(function($,j){
var D=require('@stdlib/math-base-special-floor/dist'),F=128;function M(f,r,n,v,K){var u,c,o,w,O,b,e,B,C,E,g,I,y,q,m;if(u=n.data,c=n.accessors[0],o=K,v===0)return f*(r+c(u,o));if(f<8){for(y=0,m=0;m<f;m++)y+=r+c(u,o),o+=v;return y}if(f<=F){for(w=r+c(u,o),O=r+c(u,o+v),b=r+c(u,o+2*v),e=r+c(u,o+3*v),B=r+c(u,o+4*v),C=r+c(u,o+5*v),E=r+c(u,o+6*v),g=r+c(u,o+7*v),o+=8*v,I=f%8,m=8;m<f-I;m+=8)w+=r+c(u,o),O+=r+c(u,o+v),b+=r+c(u,o+2*v),e+=r+c(u,o+3*v),B+=r+c(u,o+4*v),C+=r+c(u,o+5*v),E+=r+c(u,o+6*v),g+=r+c(u,o+7*v),o+=8*v;for(y=w+O+(b+e)+(B+C+(E+g)),m;m<f;m++)y+=r+c(u,o),o+=v;return y}return q=D(f/2),q-=q%8,M(q,r,n,v,o)+M(f-q,r,n,v,o+q*v)}j.exports=M
});var Z=L(function(s,P){
var G=require('@stdlib/array-base-arraylike2object/dist'),H=require('@stdlib/math-base-special-floor/dist'),J=k(),Q=128;function S(f,r,n,v,K){var u,c,o,w,O,b,e,B,C,E,g,I,y,q;if(f<=0)return 0;if(I=G(n),I.accessorProtocol)return J(f,r,I,v,K);if(u=K,v===0)return f*(r+n[u]);if(f<8){for(g=0,q=0;q<f;q++)g+=r+n[u],u+=v;return g}if(f<=Q){for(c=r+n[u],o=r+n[u+v],w=r+n[u+2*v],O=r+n[u+3*v],b=r+n[u+4*v],e=r+n[u+5*v],B=r+n[u+6*v],C=r+n[u+7*v],u+=8*v,E=f%8,q=8;q<f-E;q+=8)c+=r+n[u],o+=r+n[u+v],w+=r+n[u+2*v],O+=r+n[u+3*v],b+=r+n[u+4*v],e+=r+n[u+5*v],B+=r+n[u+6*v],C+=r+n[u+7*v],u+=8*v;for(g=c+o+(w+O)+(b+e+(B+C)),q;q<f;q++)g+=r+n[u],u+=v;return g}return y=H(f/2),y-=y%8,S(y,r,n,v,u)+S(f-y,r,n,v,u+y*v)}P.exports=S
});var z=L(function(t,R){
var T=require('@stdlib/strided-base-stride2offset/dist'),U=Z();function V(f,r,n,v){return U(f,r,n,v,T(f,v))}R.exports=V
});var W=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),A=z(),Y=Z();W(A,"ndarray",Y);module.exports=A;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
