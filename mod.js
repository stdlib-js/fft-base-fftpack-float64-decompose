// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.floor;function f(f,o,a,e,t,i,n,u){var l,d,h,v,b,c,k,p;if(0===f)return i[u]=f,i[u+n]=0,0;d=o,l=0,h=f,v=0,p=0;do{for(p<d?l=a[t+p*e]:l+=2,p+=1;0==h-l*(b=r(h/l));){if(h=b,i[u+((v+=1)+1)*n]=l,2===l&&1!==v){for(k=2;k<=v;k++)i[u+((c=v-k+2)+1)*n]=i[u+c*n];i[u+2*n]=2}if(1===h)break}}while(1!==h);return i[u]=f,i[u+n]=v,v}export{f as default};
//# sourceMappingURL=mod.js.map
