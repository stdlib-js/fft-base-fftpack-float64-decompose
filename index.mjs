// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.4-esm/index.mjs";function e(e,t,i,f,o,s,a,n){var d,l,m,h,p,u,b,c;if(0===e)return s[n]=e,s[n+a]=0,0;l=t,d=0,m=e,h=0,c=0;do{for(c<l?d=i[o+c*f]:d+=2,c+=1;0==m-d*(p=r(m/d));){if(m=p,s[n+((h+=1)+1)*a]=d,2===d&&1!==h){for(b=2;b<=h;b++)s[n+((u=h-b+2)+1)*a]=s[n+u*a];s[n+2*a]=2}if(1===m)break}}while(1!==m);return s[n]=e,s[n+a]=h,h}export{e as default};
//# sourceMappingURL=index.mjs.map
