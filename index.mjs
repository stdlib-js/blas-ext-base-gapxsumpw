// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.1.0-esm/index.mjs";function n(r,t,i,f,s){var o,a,u,d,l,m,p,j,c,h,v,b,y;if(r<=0)return 0;if(1===r||0===f)return t+i[s];if(o=s,r<8){for(v=0,y=0;y<r;y++)v+=t+i[o],o+=f;return v}if(r<=128){for(a=t+i[o],u=t+i[o+f],d=t+i[o+2*f],l=t+i[o+3*f],m=t+i[o+4*f],p=t+i[o+5*f],j=t+i[o+6*f],c=t+i[o+7*f],o+=8*f,h=r%8,y=8;y<r-h;y+=8)a+=t+i[o],u+=t+i[o+f],d+=t+i[o+2*f],l+=t+i[o+3*f],m+=t+i[o+4*f],p+=t+i[o+5*f],j+=t+i[o+6*f],c+=t+i[o+7*f],o+=8*f;for(v=a+u+(d+l)+(m+p+(j+c));y<r;y++)v+=t+i[o],o+=f;return v}return b=e(r/2),n(b-=b%8,t,i,f,o)+n(r-b,t,i,f,o+b*f)}function t(r,e,t,i){var f,s,o;if(r<=0)return 0;if(1===r||0===i)return e+t[0];if(f=i<0?(1-r)*i:0,r<8){for(s=0,o=0;o<r;o++)s+=e+t[f],f+=i;return s}return n(r,e,t,i,f)}r(t,"ndarray",n);export{t as default,n as ndarray};
//# sourceMappingURL=index.mjs.map