"use strict";var M=function(f,r){return function(){return r||f((r={exports:{}}).exports,r),r.exports}};var K=M(function(H,R){
var j=require('@stdlib/math-base-special-floor/dist'),k=128;function I(f,r,n,v,c){var u,q,y,g,w,O,B,C,E,L,m,e,o;if(f<=0)return 0;if(f===1||v===0)return r+n[c];if(u=c,f<8){for(m=0,o=0;o<f;o++)m+=r+n[u],u+=v;return m}if(f<=k){for(q=r+n[u],y=r+n[u+v],g=r+n[u+2*v],w=r+n[u+3*v],O=r+n[u+4*v],B=r+n[u+5*v],C=r+n[u+6*v],E=r+n[u+7*v],u+=8*v,L=f%8,o=8;o<f-L;o+=8)q+=r+n[u],y+=r+n[u+v],g+=r+n[u+2*v],w+=r+n[u+3*v],O+=r+n[u+4*v],B+=r+n[u+5*v],C+=r+n[u+6*v],E+=r+n[u+7*v],u+=8*v;for(m=q+y+(g+w)+(O+B+(C+E)),o;o<f;o++)m+=r+n[u],u+=v;return m}return e=j(f/2),e-=e%8,I(e,r,n,v,u)+I(f-e,r,n,v,u+e*v)}R.exports=I
});var Z=M(function(J,S){
var z=K();function A(f,r,n,v){var c,u,q;if(f<=0)return 0;if(f===1||v===0)return r+n[0];if(v<0?c=(1-f)*v:c=0,f<8){for(u=0,q=0;q<f;q++)u+=r+n[c],c+=v;return u}return z(f,r,n,v,c)}S.exports=A
});var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=Z(),F=K();D(b,"ndarray",F);module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
