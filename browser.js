// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,a=n.__lookupGetter__,f=n.__lookupSetter__,l=t,c=function(e,r,t){var l,c,p,_;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(a.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),p="get"in t,_="set"in t,c&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(e,r,t.get),_&&u&&u.call(e,r,t.set),e},p=r()?l:c,_=function(e,r,t){p(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=Math.floor;function b(e,r,t,n,o){var i,u,a,f,l,c,p,_,s,y,v,m,g;if(e<=0)return 0;if(1===e||0===n)return r+t[o];if(i=o,e<8){for(v=0,g=0;g<e;g++)v+=r+t[i],i+=n;return v}if(e<=128){for(u=r+t[i],a=r+t[i+n],f=r+t[i+2*n],l=r+t[i+3*n],c=r+t[i+4*n],p=r+t[i+5*n],_=r+t[i+6*n],s=r+t[i+7*n],i+=8*n,y=e%8,g=8;g<e-y;g+=8)u+=r+t[i],a+=r+t[i+n],f+=r+t[i+2*n],l+=r+t[i+3*n],c+=r+t[i+4*n],p+=r+t[i+5*n],_+=r+t[i+6*n],s+=r+t[i+7*n],i+=8*n;for(v=u+a+(f+l)+(c+p+(_+s));g<e;g++)v+=r+t[i],i+=n;return v}return m=d(e/2),b(m-=m%8,r,t,n,i)+b(e-m,r,t,n,i+m*n)}function s(e,r,t,n){var o,i,u;if(e<=0)return 0;if(1===e||0===n)return r+t[0];if(o=n<0?(1-e)*n:0,e<8){for(i=0,u=0;u<e;u++)i+=r+t[o],o+=n;return i}return b(e,r,t,n,o)}return _(s,"ndarray",b),s},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).gapxsumpw=r();
//# sourceMappingURL=browser.js.map
