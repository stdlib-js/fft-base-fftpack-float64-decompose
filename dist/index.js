"use strict";var x=function(n,a){return function(){try{return a||n((a={exports:{}}).exports,a),a.exports}catch(t){throw (a=0, t)}};};var k=x(function(z,h){
var j=require('@stdlib/math-base-special-floor/dist');function u(n,a,t,m,w,r,f,e){var v,p,l,i,b,q,d,s,c;if(n===0)return r[e]=n,r[e+f]=0,0;p=a,v=0,l=n,i=0,c=0;do for(c<p?v=t[w+c*m]:v+=2,c+=1;b=j(l/v),q=l-v*b,q===0;){if(i+=1,l=b,r[e+(i+1)*f]=v,v===2&&i!==1){for(s=2;s<=i;s++)d=i-s+2,r[e+(d+1)*f]=r[e+d*f];r[e+2*f]=2}if(l===1)break}while(l!==1);return r[e]=n,r[e+f]=i,i}h.exports=u
});var g=k();module.exports=g;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
