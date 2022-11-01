// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).iterBetaln=n()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,t=Object.defineProperty,e=Object.prototype,u=e.toString,o=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;n=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,v,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(f.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),v="get"in t,y="set"in t,l&&(v||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&o&&o.call(r,n,t.get),y&&i&&i.call(r,n,t.set),r};var c=n;function l(r,n,t){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var v=/./;function y(r){return"boolean"==typeof r}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function w(r,n){return null!=r&&d.call(r,n)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var h=s()?function(r){var n,t,e;if(null==r)return b.call(r);t=r[m],n=w(r,m);try{r[m]=void 0}catch(n){return b.call(r)}return e=b.call(r),n?r[m]=t:delete r[m],e}:function(r){return b.call(r)},j=Boolean.prototype.toString;var g=s();function N(r){return"object"==typeof r&&(r instanceof Boolean||(g?function(r){try{return j.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===h(r)))}function A(r){return y(r)||N(r)}function _(){return new Function("return this;")()}l(A,"isPrimitive",y),l(A,"isObject",N);var O="object"==typeof self?self:null,U="object"==typeof window?window:null,S="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},E="object"==typeof S?S:null;var T=function(r){if(arguments.length){if(!y(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return _()}if(O)return O;if(U)return U;if(E)return E;throw new Error("unexpected error. Unable to resolve global object.")}(),I=T.document&&T.document.childNodes,F=Int8Array;function P(){return/^\s*function\s*([^(]*)/i}var x=/^\s*function\s*([^(]*)/i;l(P,"REGEXP",x);var V=Array.isArray?Array.isArray:function(r){return"[object Array]"===h(r)};function B(r){return null!==r&&"object"==typeof r}function G(r){var n,t,e,u;if(("Object"===(t=h(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(n=x.exec(e.toString()))return n[1]}return B(u=r)&&(u._isBuffer||u.constructor&&"function"==typeof u.constructor.isBuffer&&u.constructor.isBuffer(u))?"Buffer":t}l(B,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(n){var t,e;if(!V(n))return!1;if(0===(t=n.length))return!1;for(e=0;e<t;e++)if(!1===r(n[e]))return!1;return!0}}(B));var H="function"==typeof v||"object"==typeof F||"function"==typeof I?function(r){return G(r).toLowerCase()}:function(r){var n;return null===r?"null":"object"===(n=typeof r)?G(r).toLowerCase():n};function M(r){return"function"===H(r)}function k(r){var n=typeof r;return null!==r&&("object"===n||"function"===n)&&M(r.next)}function L(r){return"number"==typeof r}var W=Number,C=W.prototype.toString;var Y=s();function q(r){return"object"==typeof r&&(r instanceof W||(Y?function(r){try{return C.call(r),!0}catch(r){return!1}}(r):"[object Number]"===h(r)))}function R(r){return L(r)||q(r)}l(R,"isPrimitive",L),l(R,"isObject",q);var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&w(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var z,D=Object.getPrototypeOf;z=M(Object.getPrototypeOf)?D:function(r){var n=function(r){return r.__proto__}(r);return n||null===n?n:"[object Function]"===h(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var J=z;var K=Object.prototype;function Q(r){var n;return!!function(r){return"object"==typeof r&&null!==r&&!V(r)}(r)&&(n=function(r){return null==r?null:(r=Object(r),J(r))}(r),!n||!w(r,"constructor")&&w(n,"constructor")&&M(n.constructor)&&"[object Function]"===h(n.constructor)&&w(n,"isPrototypeOf")&&M(n.isPrototypeOf)&&(n===K||function(r){var n;for(n in r)if(!w(r,n))return!1;return!0}(r)))}function Z(r,n){return Q(n)?(w(n,"invalid")&&(r.invalid=n.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.")}function $(r,n,t,e){var u,o,i,f,a,c,v,y,p;for(f=2,o=[0,0],u=[],i=[],p=0;p<f;p++)if(u.push(arguments[p]),k(arguments[p]))i.push(1);else{if(!L(arguments[p]))throw new TypeError("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `"+p+"`. Value: `"+arguments[p]+"`.");i.push(0)}if(!M(t))throw new TypeError("invalid argument. Third argument must be a function. Value: `"+t+"`.");if(c={invalid:NaN},arguments.length>3&&(y=Z(c,e)))throw y;if(l(a={},"next",s),l(a,"return",b),X){for(p=0;p<f;p++)if(i[p]&&!M(u[p][X])){v=!0;break}v||l(a,X,d)}return v=!1,a;function s(){var r,n,e;if(v)return{done:!0};for(e=0;e<f;e++)if(i[e]){if((n=u[e].next()).done)return v=!0,n;"number"==typeof n.value?o[e]=n.value:r=!0}else o[e]=u[e];return r?{value:c.invalid,done:!1}:{value:t(o[0],o[1]),done:!1}}function b(r){return v=!0,arguments.length?{value:r,done:!0}:{done:!0}}function d(){var r,n;for(r=[],n=0;n<f;n++)i[n]?r.push(u[n][X]()):r.push(u[n]);return r.push(t,c),$.apply(null,r)}}function rr(r){return r!=r}var nr=Number.POSITIVE_INFINITY,tr=W.NEGATIVE_INFINITY;function er(r){return r===nr||r===tr}function ur(r){return Math.abs(r)}var or="function"==typeof Uint32Array;var ir="function"==typeof Uint32Array?Uint32Array:null;var fr,ar="function"==typeof Uint32Array?Uint32Array:void 0;fr=function(){var r,n,t;if("function"!=typeof ir)return!1;try{n=new ir(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(or&&t instanceof Uint32Array||"[object Uint32Array]"===h(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var cr=fr,lr="function"==typeof Float64Array;var vr="function"==typeof Float64Array?Float64Array:null;var yr,pr="function"==typeof Float64Array?Float64Array:void 0;yr=function(){var r,n,t;if("function"!=typeof vr)return!1;try{n=new vr([1,3.14,-3.14,NaN]),t=n,r=(lr&&t instanceof Float64Array||"[object Float64Array]"===h(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var sr=yr,br="function"==typeof Uint8Array;var dr="function"==typeof Uint8Array?Uint8Array:null;var wr,mr="function"==typeof Uint8Array?Uint8Array:void 0;wr=function(){var r,n,t;if("function"!=typeof dr)return!1;try{n=new dr(n=[1,3.14,-3.14,256,257]),t=n,r=(br&&t instanceof Uint8Array||"[object Uint8Array]"===h(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var hr=wr,jr="function"==typeof Uint16Array;var gr="function"==typeof Uint16Array?Uint16Array:null;var Nr,Ar="function"==typeof Uint16Array?Uint16Array:void 0;Nr=function(){var r,n,t;if("function"!=typeof gr)return!1;try{n=new gr(n=[1,3.14,-3.14,65536,65537]),t=n,r=(jr&&t instanceof Uint16Array||"[object Uint16Array]"===h(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Ar:function(){throw new Error("not implemented")};var _r,Or={uint16:Nr,uint8:hr};(_r=new Or.uint16(1))[0]=4660;var Ur=52===new Or.uint8(_r.buffer)[0],Sr=!0===Ur?1:0,Er=new sr(1),Tr=new cr(Er.buffer);function Ir(r){return Er[0]=r,Tr[Sr]}var Fr=!0===Ur?1:0,Pr=new sr(1),xr=new cr(Pr.buffer);function Vr(r,n){return Pr[0]=r,xr[Fr]=n>>>0,Pr[0]}var Br=1023;var Gr=.6931471803691238,Hr=1.9082149292705877e-10,Mr=1048575;function kr(r){var n,t,e,u,o,i,f,a,c,l,v,y;return 0===r?tr:rr(r)||r<0?NaN:(o=0,(t=Ir(r))<1048576&&(o-=54,t=Ir(r*=0x40000000000000)),t>=2146435072?r+r:(o+=(t>>20)-Br|0,o+=(a=(t&=Mr)+614244&1048576|0)>>20|0,f=(r=Vr(r,t|1072693248^a))-1,(Mr&2+t)<3?0===f?0===o?0:o*Gr+o*Hr:(i=f*f*(.5-.3333333333333333*f),0===o?f-i:o*Gr-(i-o*Hr-f)):(a=t-398458|0,c=440401-t|0,u=(v=(y=(l=f/(2+f))*l)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(v),e=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(v),i=e+u,(a|=c)>0?(n=.5*f*f,0===o?f-(n-l*(n+i)):o*Gr-(n-(l*(n+i)+o*Hr)-f)):0===o?f-l*(f-i):o*Gr-(l*(f-i)-o*Hr-f))))}var Lr=Math.floor,Wr=Math.ceil;function Cr(r){return r<0?Wr(r):Lr(r)}function Yr(r,n){var t,e,u,o;return u=(o=r*r)*o,e=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(u=1-(t=.5*o))+(1-u-t+(o*e-r*n))}var qr=-.16666666666666632;function Rr(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(qr+u*t):r-(u*(.5*n-e*t)-n-e*qr)}var Xr,zr,Dr=!0===Ur?0:1,Jr=new sr(1),Kr=new cr(Jr.buffer);!0===Ur?(Xr=1,zr=0):(Xr=0,zr=1);var Qr={HIGH:Xr,LOW:zr},Zr=new sr(1),$r=new cr(Zr.buffer),rn=Qr.HIGH,nn=Qr.LOW;function tn(r,n){return $r[rn]=r,$r[nn]=n,Zr[0]}var en,un;!0===Ur?(en=1,un=0):(en=0,un=1);var on={HIGH:en,LOW:un},fn=new sr(1),an=new cr(fn.buffer),cn=on.HIGH,ln=on.LOW;function vn(r,n){return fn[0]=n,r[0]=an[cn],r[1]=an[ln],r}function yn(r,n){return 1===arguments.length?vn([0,0],r):vn(r,n)}var pn=[0,0];function sn(r,n){var t,e;return yn(pn,r),t=pn[0],t&=2147483647,e=Ir(n),tn(t|=e&=2147483648,pn[1])}function bn(r,n,t,e){return rr(r)||er(r)?(n[e]=r,n[e+t]=0,n):0!==r&&ur(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}l((function(r){return bn(r,[0,0],1,0)}),"assign",bn);var dn=[0,0],wn=[0,0];function mn(r,n){var t,e;return 0===n||0===r||rr(r)||er(r)?r:(bn(r,dn,1,0),n+=dn[1],n+=function(r){var n=Ir(r);return(n=(2146435072&n)>>>20)-Br|0}(r=dn[0]),n<-1074?sn(0,r):n>1023?r<0?tr:nr:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,yn(wn,r),t=wn[0],t&=2148532223,e*tn(t|=n+Br<<20,wn[1])))}function hn(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var jn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],gn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Nn=16777216,An=5.960464477539063e-8,_n=hn(20),On=hn(20),Un=hn(20),Sn=hn(20);function En(r,n,t,e,u,o,i,f,a){var c,l,v,y,p,s,b,d,w;for(y=o,w=e[t],d=t,p=0;d>0;p++)l=An*w|0,Sn[p]=w-Nn*l|0,w=e[d-1]+l,d-=1;if(w=mn(w,u),w-=8*Lr(.125*w),w-=b=0|w,v=0,u>0?(b+=p=Sn[t-1]>>24-u,Sn[t-1]-=p<<24-u,v=Sn[t-1]>>23-u):0===u?v=Sn[t-1]>>23:w>=.5&&(v=2),v>0){for(b+=1,c=0,p=0;p<t;p++)d=Sn[p],0===c?0!==d&&(c=1,Sn[p]=16777216-d):Sn[p]=16777215-d;if(u>0)switch(u){case 1:Sn[t-1]&=8388607;break;case 2:Sn[t-1]&=4194303}2===v&&(w=1-w,0!==c&&(w-=mn(1,u)))}if(0===w){for(d=0,p=t-1;p>=o;p--)d|=Sn[p];if(0===d){for(s=1;0===Sn[o-s];s++);for(p=t+1;p<=t+s;p++){for(a[f+p]=jn[i+p],l=0,d=0;d<=f;d++)l+=r[d]*a[f+(p-d)];e[p]=l}return En(r,n,t+=s,e,u,o,i,f,a)}}if(0===w)for(t-=1,u-=24;0===Sn[t];)t-=1,u-=24;else(w=mn(w,-u))>=Nn?(l=An*w|0,Sn[t]=w-Nn*l|0,u+=24,Sn[t+=1]=l):Sn[t]=0|w;for(l=mn(1,u),p=t;p>=0;p--)e[p]=l*Sn[p],l*=An;for(p=t;p>=0;p--){for(l=0,s=0;s<=y&&s<=t-p;s++)l+=gn[s]*e[p+s];Un[t-p]=l}for(l=0,p=t;p>=0;p--)l+=Un[p];for(n[0]=0===v?l:-l,l=Un[0]-l,p=1;p<=t;p++)l+=Un[p];return n[1]=0===v?l:-l,7&b}function Tn(r,n,t,e){var u,o,i,f,a,c,l;for(4,(o=(t-3)/24|0)<0&&(o=0),f=t-24*(o+1),c=o-(i=e-1),l=i+4,a=0;a<=l;a++)_n[a]=c<0?0:jn[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=i;c++)u+=r[c]*_n[i+(a-c)];On[a]=u}return 4,En(r,n,4,On,f,4,o,i,_n)}var In=Math.round;function Fn(r,n,t){var e,u,o,i,f;return o=r-1.5707963267341256*(e=In(.6366197723675814*r)),i=6077100506506192e-26*e,f=n>>20|0,t[0]=o-i,f-(Ir(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((u=o)-(o=u-(i=6077100506303966e-26*e))-i),t[0]=o-i,f-(Ir(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((u=o)-(o=u-(i=20222662487111665e-37*e))-i),t[0]=o-i)),t[1]=o-t[0]-i,e}var Pn=1.5707963267341256,xn=6077100506506192e-26,Vn=2*xn,Bn=3*xn,Gn=4*xn,Hn=[0,0,0],Mn=[0,0];function kn(r,n){var t,e,u,o,i,f,a;if((u=2147483647&Ir(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Fn(r,u,n):u<=1073928572?r>0?(a=r-Pn,n[0]=a-xn,n[1]=a-n[0]-xn,1):(a=r+Pn,n[0]=a+xn,n[1]=a-n[0]+xn,-1):r>0?(a=r-2*Pn,n[0]=a-Vn,n[1]=a-n[0]-Vn,2):(a=r+2*Pn,n[0]=a+Vn,n[1]=a-n[0]+Vn,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Fn(r,u,n):r>0?(a=r-3*Pn,n[0]=a-Bn,n[1]=a-n[0]-Bn,3):(a=r+3*Pn,n[0]=a+Bn,n[1]=a-n[0]+Bn,-3):1075388923===u?Fn(r,u,n):r>0?(a=r-4*Pn,n[0]=a-Gn,n[1]=a-n[0]-Gn,4):(a=r+4*Pn,n[0]=a+Gn,n[1]=a-n[0]+Gn,-4);if(u<1094263291)return Fn(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return Jr[0]=r,Kr[Dr]}(r),a=tn(u-((e=(u>>20)-1046)<<20|0),t),i=0;i<2;i++)Hn[i]=0|a,a=16777216*(a-Hn[i]);for(Hn[2]=a,o=3;0===Hn[o-1];)o-=1;return f=Tn(Hn,Mn,e,o),r<0?(n[0]=-Mn[0],n[1]=-Mn[1],-f):(n[0]=Mn[0],n[1]=Mn[1],f)}var Ln=[0,0];function Wn(r){var n;if(n=Ir(r),(n&=2147483647)<=1072243195)return n<1044381696?1:Yr(r,0);if(n>=2146435072)return NaN;switch(3&kn(r,Ln)){case 0:return Yr(Ln[0],Ln[1]);case 1:return-Rr(Ln[0],Ln[1]);case 2:return-Yr(Ln[0],Ln[1]);default:return Rr(Ln[0],Ln[1])}}var Cn=[0,0];function Yn(r){var n;if(n=Ir(r),(n&=2147483647)<=1072243195)return n<1045430272?r:Rr(r,0);if(n>=2146435072)return NaN;switch(3&kn(r,Cn)){case 0:return Rr(Cn[0],Cn[1]);case 1:return Yr(Cn[0],Cn[1]);case 2:return-Rr(Cn[0],Cn[1]);default:return-Yr(Cn[0],Cn[1])}}var qn=3.141592653589793;var Rn=1.4616321449683622,Xn=1.4616321449683622;function zn(r){var n,t,e,u,o,i,f,a,c,l,v,y,p;if(rr(r)||er(r))return r;if(0===r)return nr;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-kr(r);if(n){if(r>=4503599627370496)return nr;if(c=function(r){var n,t;return rr(r)||er(r)?NaN:0===(n=ur(t=r%2))||1===n?sn(0,t):n<.25?Yn(qn*t):n<.75?sn(Wn(qn*(n=.5-n)),t):n<1.25?(t=sn(1,t)-t,Yn(qn*t)):n<1.75?-sn(Wn(qn*(n-=1.5)),t):(t-=sn(2,t),Yn(qn*t))}(r),0===c)return nr;t=kr(qn/ur(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(p=-kr(r),r>=Rn-1+.27?(v=1-r,e=0):r>=Rn-1-.27?(v=r-(Xn-1),e=1):(v=r,e=2)):(p=0,r>=Rn+.27?(v=2-r,e=0):r>=Rn-.27?(v=r-Xn,e=1):(v=r-1,e=2)),e){case 0:i=.07721566490153287+(y=v*v)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(y),o=y*(.3224670334241136+y*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(y)),p+=(f=v*i+o)-.5*v;break;case 1:i=.48383612272381005+(l=(y=v*v)*v)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(l),o=l*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(l)-.1475877229945939,u=.06462494023913339+l*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(l),p+=-.12148629053584961+(f=y*i-(-3638676997039505e-33-l*(o+v*u)));break;case 2:i=v*(v*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(v)-.07721566490153287),o=1+v*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(v),p+=-.5*v+i/o}else if(r<8)switch(f=(v=r-(e=Cr(r)))*(v*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(v)-.07721566490153287),a=1+v*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(v),p=.5*v+f/a,y=1,e){case 7:y*=v+6;case 6:y*=v+5;case 5:y*=v+4;case 4:y*=v+3;case 3:p+=kr(y*=v+2)}else r<0x400000000000000?(c=kr(r),l=.4189385332046727+(y=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(v=y*y),p=(r-.5)*(c-1)+l):p=r*(kr(r)-1);return n&&(p=t-p),p}var Dn=.6931471803691238,Jn=1.9082149292705877e-10;function Kn(r){var n,t,e,u,o,i,f,a,c,l;if(r<-1||rr(r))return NaN;if(-1===r)return tr;if(r===nr)return r;if(0===r)return r;if(l=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,u=r,t=1)}return 0!==l&&(e<9007199254740992?(o=(l=((t=Ir(c=1+r))>>20)-Br)>0?1-(c-r):r-(c-1),o/=c):(l=((t=Ir(c=r))>>20)-Br,o=0),(t&=1048575)<434334?c=Vr(c,1072693248|t):(l+=1,c=Vr(c,1071644672|t),t=1048576-t>>2),u=c-1),n=.5*u*u,0===t?0===u?l*Dn+(o+=l*Jn):l*Dn-((a=n*(1-.6666666666666666*u))-(l*Jn+o)-u):(a=(f=(i=u/(2+u))*i)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(f),0===l?u-(n-i*(n+a)):l*Dn-(n-(i*(n+a)+(l*Jn+o))-u))}function Qn(r){return Lr(r)===r}function Zn(r){return 0===r&&1/r===tr}function $n(r){return Qn(r/2)}function rt(r){return $n(r>0?r-1:r+1)}var nt=Math.sqrt,tt=!0===Ur?0:1,et=new sr(1),ut=new cr(et.buffer);function ot(r,n){return et[0]=r,ut[tt]=n>>>0,et[0]}function it(r){return 0|r}var ft=1048576,at=[1,1.5],ct=[0,.5849624872207642],lt=[0,1.350039202129749e-8];var vt=2147483647,yt=1048575,pt=1048576;var st=2147483647,bt=1083179008,dt=1e300,wt=1e-300,mt=[0,0],ht=[0,0];function jt(r,n){var t,e,u,o,i,f,a,c,l,v,y,p,s,b;if(rr(r)||rr(n))return NaN;if(yn(mt,n),i=mt[0],0===mt[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return nt(r);if(-.5===n)return 1/nt(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(er(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:ur(r)<1==(n===nr)?0:nr}(r,n)}if(yn(mt,r),o=mt[0],0===mt[1]){if(0===o)return function(r,n){return n===tr?nr:n===nr?0:n>0?rt(n)?r:0:rt(n)?sn(nr,r):nr}(r,n);if(1===r)return 1;if(-1===r&&rt(n))return-1;if(er(r))return r===tr?jt(-0,-n):n<0?0:nr}if(r<0&&!1===Qn(n))return(r-r)/(r-r);if(u=ur(r),t=o&st|0,e=i&st|0,a=i>>>31|0,f=(f=o>>>31|0)&&rt(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&Ir(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*dt*dt:f*wt*wt;if(t>1072693248)return 0===a?f*dt*dt:f*wt*wt;y=function(r,n){var t,e,u,o,i,f;return t=(i=1.9259629911266175e-8*(u=n-1)-u*u*(0===(f=u)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=ot(e=(o=1.4426950216293335*u)+i,0))-o),r[0]=e,r[1]=t,r}(ht,u)}else y=function(r,n,t){var e,u,o,i,f,a,c,l,v,y,p,s,b,d,w,m,h,j,g,N,A;return j=0,t<ft&&(j-=53,t=Ir(n*=9007199254740992)),j+=(t>>20)-Br|0,t=1072693248|(g=1048575&t|0),g<=235662?N=0:g<767610?N=1:(N=0,j+=1,t-=ft),i=ot(u=(m=(n=Vr(n,t))-(c=at[N]))*(h=1/(n+c)),0),e=524288+(t>>1|536870912),a=Vr(0,e+=N<<18),w=(o=u*u)*o*(0===(A=o)?.5999999999999946:.5999999999999946+A*(.4285714285785502+A*(.33333332981837743+A*(.272728123808534+A*(.23066074577556175+.20697501780033842*A))))),a=ot(a=3+(o=i*i)+(w+=(f=h*(m-i*a-i*(n-(a-c))))*(i+u)),0),b=(p=-7.028461650952758e-9*(v=ot(v=(m=i*a)+(h=f*a+(w-(a-3-o))*u),0))+.9617966939259756*(h-(v-m))+lt[N])-((s=ot(s=(y=.9617967009544373*v)+p+(l=ct[N])+(d=j),0))-d-l-y),r[0]=s,r[1]=b,r}(ht,u,t);if(v=(n-(c=ot(n,0)))*y[0]+n*y[1],l=c*y[0],yn(mt,p=v+l),s=it(mt[0]),b=it(mt[1]),s>=bt){if(0!=(s-bt|b))return f*dt*dt;if(v+8008566259537294e-32>p-l)return f*dt*dt}else if((s&st)>=1083231232){if(0!=(s-3230714880|b))return f*wt*wt;if(v<=p-l)return f*wt*wt}return p=function(r,n,t){var e,u,o,i,f,a,c,l,v,y;return v=((l=r&vt|0)>>20)-Br|0,c=0,l>1071644672&&(u=Vr(0,((c=r+(pt>>v+1)>>>0)&~(yt>>(v=((c&vt)>>20)-Br|0)))>>>0),c=(c&yt|pt)>>20-v>>>0,r<0&&(c=-c),n-=u),r=it(r=Ir(a=1-((a=(o=.6931471824645996*(u=ot(u=t+n,0)))+(i=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(y=u)?.16666666666666602:.16666666666666602+y*(y*(6613756321437934e-20+y*(4.1381367970572385e-8*y-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-o))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?mn(a,c):Vr(a,r)}(s,l,v),f*p}var gt=1.4426950408889634,Nt=1/(1<<28);function At(r){var n;return rr(r)||r===nr?r:r===tr?0:r>709.782712893384?nr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Nt?1+r:function(r,n,t){var e,u,o,i;return mn(1-(n-(e=r-n)*(o=e-(u=e*e)*(0===(i=u)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(r-.6931471803691238*(n=Cr(r<0?gt*r-.5:gt*r+.5)),1.9082149292705877e-10*n,n)}function _t(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=At(r),2.5066282746310007*(t=r>143.01608?(e=jt(r,.5*r-.25))*(e/t):jt(r,r-.5)/t)*n}function Ot(r,n){return n/((1+.5772156649015329*r)*r)}function Ut(r){var n,t,e,u;if(Qn(r)&&r<0||r===tr||rr(r))return NaN;if(0===r)return Zn(r)?tr:nr;if(r>171.61447887182297)return nr;if(r<-170.5674972726612)return 0;if((t=ur(r))>33)return r>=0?_t(r):(n=0==(1&(e=Lr(t)))?-1:1,(u=t-e)>.5&&(u=t-(e+=1)),u=t*Yn(qn*u),n*qn/(ur(u)*_t(t)));for(u=1;r>=3;)u*=r-=1;for(;r<0;){if(r>-1e-9)return Ot(r,u);u/=r,r+=1}for(;r<2;){if(r<1e-9)return Ot(r,u);u/=r,r+=1}return 2===r?u:u*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(r-=2)}function St(r){return 0===r&&1/r===nr}var Et=[1276642195630063e-46,-3.401102254316749e-30,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2.868042435334643e-20,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,9.81082564692473e-9,-1384948176067564e-20,.16663894804518634],Tt=Et.length;function It(r){return r<10?NaN:r>=3745194030963158e291?0:r<94906265.62425156?function(r){var n,t,e,u,o;if(r<-1.1||r>1.1)return NaN;for(e=0,u=0,n=2*r,o=0;o<Tt;o++)t=e,u=n*(e=u)-t+Et[o];return.5*(u-t)}(2*jt(10/r,2)-1)/r:1/(12*r)}function Ft(r,n){var t,e,u;return e=function(r,n){var t,e,u,o;if(2===(t=arguments.length))return rr(r)||rr(n)?NaN:r===tr||n===tr?tr:r===n&&0===r?Zn(r)?r:n:r<n?r:n;for(e=nr,o=0;o<t;o++){if(rr(u=arguments[o])||u===tr)return u;(u<e||u===e&&0===u&&Zn(u))&&(e=u)}return e}(r,n),u=function(r,n){var t,e,u,o;if(2===(t=arguments.length))return rr(r)||rr(n)?NaN:r===nr||n===nr?nr:r===n&&0===r?St(r)?r:n:r>n?r:n;for(e=tr,o=0;o<t;o++){if(rr(u=arguments[o])||u===nr)return u;(u>e||u===e&&0===u&&St(u))&&(e=u)}return e}(r,n),e<0?NaN:0===e?nr:u===nr?tr:e>=10?(t=It(e)+It(u)-It(e+u),-.5*kr(u)+.9189385332046728+t+(e-.5)*kr(e/(e+u))+u*Kn(-e/(e+u))):u>=10?(t=It(u)-It(e+u),zn(e)+t+e-e*kr(e+u)+(u-.5)*Kn(-e/(e+u))):kr(Ut(e)*(Ut(u)/Ut(e+u)))}return function(r,n){return $(r,n,Ft)}}));
//# sourceMappingURL=index.js.map
