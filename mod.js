// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,t=Object.defineProperty,e=Object.prototype,u=e.toString,o=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;n=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,v,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(f.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),v="get"in t,y="set"in t,l&&(v||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&o&&o.call(r,n,t.get),y&&i&&i.call(r,n,t.set),r};var c=n;function l(r,n,t){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var v=/./;function y(r){return"boolean"==typeof r}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var w=Object.prototype.hasOwnProperty;function d(r,n){return null!=r&&w.call(r,n)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var h=s()?function(r){var n,t,e;if(null==r)return b.call(r);t=r[m],n=d(r,m);try{r[m]=void 0}catch(n){return b.call(r)}return e=b.call(r),n?r[m]=t:delete r[m],e}:function(r){return b.call(r)},j=Boolean.prototype.toString;var N=s();function g(r){return"object"==typeof r&&(r instanceof Boolean||(N?function(r){try{return j.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===h(r)))}function A(r){return y(r)||g(r)}function _(){return new Function("return this;")()}l(A,"isPrimitive",y),l(A,"isObject",g);var O="object"==typeof self?self:null,U="object"==typeof window?window:null,S="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},E="object"==typeof S?S:null;var I=function(r){if(arguments.length){if(!y(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return _()}if(O)return O;if(U)return U;if(E)return E;throw new Error("unexpected error. Unable to resolve global object.")}(),T=I.document&&I.document.childNodes,F=Int8Array;function P(){return/^\s*function\s*([^(]*)/i}var x=/^\s*function\s*([^(]*)/i;l(P,"REGEXP",x);var V=Array.isArray?Array.isArray:function(r){return"[object Array]"===h(r)};function G(r){return null!==r&&"object"==typeof r}function H(r){var n,t,e,u;if(("Object"===(t=h(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(n=x.exec(e.toString()))return n[1]}return G(u=r)&&(u._isBuffer||u.constructor&&"function"==typeof u.constructor.isBuffer&&u.constructor.isBuffer(u))?"Buffer":t}l(G,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(n){var t,e;if(!V(n))return!1;if(0===(t=n.length))return!1;for(e=0;e<t;e++)if(!1===r(n[e]))return!1;return!0}}(G));var M="function"==typeof v||"object"==typeof F||"function"==typeof T?function(r){return H(r).toLowerCase()}:function(r){var n;return null===r?"null":"object"===(n=typeof r)?H(r).toLowerCase():n};function k(r){return"function"===M(r)}function B(r){var n=typeof r;return null!==r&&("object"===n||"function"===n)&&k(r.next)}function L(r){return"number"==typeof r}var W=Number,C=W.prototype.toString;var Y=s();function q(r){return"object"==typeof r&&(r instanceof W||(Y?function(r){try{return C.call(r),!0}catch(r){return!1}}(r):"[object Number]"===h(r)))}function R(r){return L(r)||q(r)}l(R,"isPrimitive",L),l(R,"isObject",q);var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&d(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var z,D=Object.getPrototypeOf;z=k(Object.getPrototypeOf)?D:function(r){var n=function(r){return r.__proto__}(r);return n||null===n?n:"[object Function]"===h(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var J=z;var K=Object.prototype;function Q(r){var n;return!!function(r){return"object"==typeof r&&null!==r&&!V(r)}(r)&&(n=function(r){return null==r?null:(r=Object(r),J(r))}(r),!n||!d(r,"constructor")&&d(n,"constructor")&&k(n.constructor)&&"[object Function]"===h(n.constructor)&&d(n,"isPrototypeOf")&&k(n.isPrototypeOf)&&(n===K||function(r){var n;for(n in r)if(!d(r,n))return!1;return!0}(r)))}function Z(r,n){return Q(n)?(d(n,"invalid")&&(r.invalid=n.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.")}function $(r,n,t,e){var u,o,i,f,a,c,v,y,p;for(f=2,o=[0,0],u=[],i=[],p=0;p<f;p++)if(u.push(arguments[p]),B(arguments[p]))i.push(1);else{if(!L(arguments[p]))throw new TypeError("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `"+p+"`. Value: `"+arguments[p]+"`.");i.push(0)}if(!k(t))throw new TypeError("invalid argument. Third argument must be a function. Value: `"+t+"`.");if(c={invalid:NaN},arguments.length>3&&(y=Z(c,e)))throw y;if(l(a={},"next",s),l(a,"return",b),X){for(p=0;p<f;p++)if(i[p]&&!k(u[p][X])){v=!0;break}v||l(a,X,w)}return v=!1,a;function s(){var r,n,e;if(v)return{done:!0};for(e=0;e<f;e++)if(i[e]){if((n=u[e].next()).done)return v=!0,n;"number"==typeof n.value?o[e]=n.value:r=!0}else o[e]=u[e];return r?{value:c.invalid,done:!1}:{value:t(o[0],o[1]),done:!1}}function b(r){return v=!0,arguments.length?{value:r,done:!0}:{done:!0}}function w(){var r,n;for(r=[],n=0;n<f;n++)i[n]?r.push(u[n][X]()):r.push(u[n]);return r.push(t,c),$.apply(null,r)}}function rr(r){return r!=r}var nr=Number.POSITIVE_INFINITY,tr=W.NEGATIVE_INFINITY;function er(r){return r===nr||r===tr}function ur(r){return Math.abs(r)}var or="function"==typeof Uint32Array;var ir="function"==typeof Uint32Array?Uint32Array:null;var fr,ar="function"==typeof Uint32Array?Uint32Array:void 0;fr=function(){var r,n,t;if("function"!=typeof ir)return!1;try{n=new ir(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(or&&t instanceof Uint32Array||"[object Uint32Array]"===h(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var cr=fr,lr="function"==typeof Float64Array;var vr="function"==typeof Float64Array?Float64Array:null;var yr,pr="function"==typeof Float64Array?Float64Array:void 0;yr=function(){var r,n,t;if("function"!=typeof vr)return!1;try{n=new vr([1,3.14,-3.14,NaN]),t=n,r=(lr&&t instanceof Float64Array||"[object Float64Array]"===h(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var sr=yr,br="function"==typeof Uint8Array;var wr="function"==typeof Uint8Array?Uint8Array:null;var dr,mr="function"==typeof Uint8Array?Uint8Array:void 0;dr=function(){var r,n,t;if("function"!=typeof wr)return!1;try{n=new wr(n=[1,3.14,-3.14,256,257]),t=n,r=(br&&t instanceof Uint8Array||"[object Uint8Array]"===h(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var hr=dr,jr="function"==typeof Uint16Array;var Nr="function"==typeof Uint16Array?Uint16Array:null;var gr,Ar="function"==typeof Uint16Array?Uint16Array:void 0;gr=function(){var r,n,t;if("function"!=typeof Nr)return!1;try{n=new Nr(n=[1,3.14,-3.14,65536,65537]),t=n,r=(jr&&t instanceof Uint16Array||"[object Uint16Array]"===h(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Ar:function(){throw new Error("not implemented")};var _r,Or={uint16:gr,uint8:hr};(_r=new Or.uint16(1))[0]=4660;var Ur=52===new Or.uint8(_r.buffer)[0],Sr=!0===Ur?1:0,Er=new sr(1),Ir=new cr(Er.buffer);function Tr(r){return Er[0]=r,Ir[Sr]}var Fr=!0===Ur?1:0,Pr=new sr(1),xr=new cr(Pr.buffer);function Vr(r,n){return Pr[0]=r,xr[Fr]=n>>>0,Pr[0]}var Gr=.6931471803691238,Hr=1.9082149292705877e-10;function Mr(r){var n,t,e,u,o,i,f,a,c,l,v,y;return 0===r?tr:rr(r)||r<0?NaN:(o=0,(t=Tr(r))<1048576&&(o-=54,t=Tr(r*=0x40000000000000)),t>=2146435072?r+r:(o+=(t>>20)-1023|0,o+=(a=(t&=1048575)+614244&1048576|0)>>20|0,f=(r=Vr(r,t|1072693248^a))-1,(1048575&2+t)<3?0===f?0===o?0:o*Gr+o*Hr:(i=f*f*(.5-.3333333333333333*f),0===o?f-i:o*Gr-(i-o*Hr-f)):(a=t-398458|0,c=440401-t|0,u=(v=(y=(l=f/(2+f))*l)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(v),e=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(v),i=e+u,(a|=c)>0?(n=.5*f*f,0===o?f-(n-l*(n+i)):o*Gr-(n-(l*(n+i)+o*Hr)-f)):0===o?f-l*(f-i):o*Gr-(l*(f-i)-o*Hr-f))))}var kr=Math.floor,Br=Math.ceil;function Lr(r){return r<0?Br(r):kr(r)}function Wr(r,n){var t,e,u,o;return u=(o=r*r)*o,e=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(u=1-(t=.5*o))+(1-u-t+(o*e-r*n))}var Cr=-.16666666666666632;function Yr(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(Cr+u*t):r-(u*(.5*n-e*t)-n-e*Cr)}var qr,Rr,Xr=!0===Ur?0:1,zr=new sr(1),Dr=new cr(zr.buffer);!0===Ur?(qr=1,Rr=0):(qr=0,Rr=1);var Jr={HIGH:qr,LOW:Rr},Kr=new sr(1),Qr=new cr(Kr.buffer),Zr=Jr.HIGH,$r=Jr.LOW;function rn(r,n){return Qr[Zr]=r,Qr[$r]=n,Kr[0]}var nn,tn;!0===Ur?(nn=1,tn=0):(nn=0,tn=1);var en={HIGH:nn,LOW:tn},un=new sr(1),on=new cr(un.buffer),fn=en.HIGH,an=en.LOW;function cn(r,n){return un[0]=n,r[0]=on[fn],r[1]=on[an],r}function ln(r,n){return 1===arguments.length?cn([0,0],r):cn(r,n)}var vn=[0,0];function yn(r,n){var t,e;return ln(vn,r),t=vn[0],t&=2147483647,e=Tr(n),rn(t|=e&=2147483648,vn[1])}function pn(r,n){return rr(n)||er(n)?(r[0]=n,r[1]=0,r):0!==n&&ur(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var sn=[0,0],bn=[0,0];function wn(r,n){var t,e;return 0===n||0===r||rr(r)||er(r)?r:(function(r,n){1===arguments.length?pn([0,0],r):pn(r,n)}(sn,r),n+=sn[1],n+=function(r){var n=Tr(r);return(n=(2146435072&n)>>>20)-1023|0}(r=sn[0]),n<-1074?yn(0,r):n>1023?r<0?tr:nr:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,ln(bn,r),t=bn[0],t&=2148532223,e*rn(t|=n+1023<<20,bn[1])))}function dn(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var mn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],hn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],jn=5.960464477539063e-8,Nn=dn(20),gn=dn(20),An=dn(20),_n=dn(20);function On(r,n,t,e,u,o,i,f,a){var c,l,v,y,p,s,b,w,d;for(y=o,d=e[t],w=t,p=0;w>0;p++)l=jn*d|0,_n[p]=d-16777216*l|0,d=e[w-1]+l,w-=1;if(d=wn(d,u),d-=8*kr(.125*d),d-=b=0|d,v=0,u>0?(b+=p=_n[t-1]>>24-u,_n[t-1]-=p<<24-u,v=_n[t-1]>>23-u):0===u?v=_n[t-1]>>23:d>=.5&&(v=2),v>0){for(b+=1,c=0,p=0;p<t;p++)w=_n[p],0===c?0!==w&&(c=1,_n[p]=16777216-w):_n[p]=16777215-w;if(u>0)switch(u){case 1:_n[t-1]&=8388607;break;case 2:_n[t-1]&=4194303}2===v&&(d=1-d,0!==c&&(d-=wn(1,u)))}if(0===d){for(w=0,p=t-1;p>=o;p--)w|=_n[p];if(0===w){for(s=1;0===_n[o-s];s++);for(p=t+1;p<=t+s;p++){for(a[f+p]=mn[i+p],l=0,w=0;w<=f;w++)l+=r[w]*a[f+(p-w)];e[p]=l}return On(r,n,t+=s,e,u,o,i,f,a)}}if(0===d)for(t-=1,u-=24;0===_n[t];)t-=1,u-=24;else(d=wn(d,-u))>=16777216?(l=jn*d|0,_n[t]=d-16777216*l|0,u+=24,_n[t+=1]=l):_n[t]=0|d;for(l=wn(1,u),p=t;p>=0;p--)e[p]=l*_n[p],l*=jn;for(p=t;p>=0;p--){for(l=0,s=0;s<=y&&s<=t-p;s++)l+=hn[s]*e[p+s];An[t-p]=l}for(l=0,p=t;p>=0;p--)l+=An[p];for(n[0]=0===v?l:-l,l=An[0]-l,p=1;p<=t;p++)l+=An[p];return n[1]=0===v?l:-l,7&b}function Un(r,n,t,e){var u,o,i,f,a,c,l;for(4,(o=(t-3)/24|0)<0&&(o=0),f=t-24*(o+1),c=o-(i=e-1),l=i+4,a=0;a<=l;a++)Nn[a]=c<0?0:mn[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=i;c++)u+=r[c]*Nn[i+(a-c)];gn[a]=u}return 4,On(r,n,4,gn,f,4,o,i,Nn)}var Sn=Math.round;function En(r,n,t){var e,u,o,i,f;return o=r-1.5707963267341256*(e=Sn(.6366197723675814*r)),i=6077100506506192e-26*e,f=n>>20|0,t[0]=o-i,f-(Tr(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((u=o)-(o=u-(i=6077100506303966e-26*e))-i),t[0]=o-i,f-(Tr(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((u=o)-(o=u-(i=20222662487111665e-37*e))-i),t[0]=o-i)),t[1]=o-t[0]-i,e}var In=1.5707963267341256,Tn=6077100506506192e-26,Fn=2*Tn,Pn=4*Tn,xn=[0,0,0],Vn=[0,0];function Gn(r,n){var t,e,u,o,i,f,a;if((u=2147483647&Tr(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?En(r,u,n):u<=1073928572?r>0?(a=r-In,n[0]=a-Tn,n[1]=a-n[0]-Tn,1):(a=r+In,n[0]=a+Tn,n[1]=a-n[0]+Tn,-1):r>0?(a=r-2*In,n[0]=a-Fn,n[1]=a-n[0]-Fn,2):(a=r+2*In,n[0]=a+Fn,n[1]=a-n[0]+Fn,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?En(r,u,n):r>0?(a=r-3*In,n[0]=a-1.8231301519518578e-10,n[1]=a-n[0]-1.8231301519518578e-10,3):(a=r+3*In,n[0]=a+1.8231301519518578e-10,n[1]=a-n[0]+1.8231301519518578e-10,-3):1075388923===u?En(r,u,n):r>0?(a=r-4*In,n[0]=a-Pn,n[1]=a-n[0]-Pn,4):(a=r+4*In,n[0]=a+Pn,n[1]=a-n[0]+Pn,-4);if(u<1094263291)return En(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return zr[0]=r,Dr[Xr]}(r),a=rn(u-((e=(u>>20)-1046)<<20|0),t),i=0;i<2;i++)xn[i]=0|a,a=16777216*(a-xn[i]);for(xn[2]=a,o=3;0===xn[o-1];)o-=1;return f=Un(xn,Vn,e,o),r<0?(n[0]=-Vn[0],n[1]=-Vn[1],-f):(n[0]=Vn[0],n[1]=Vn[1],f)}var Hn=[0,0];function Mn(r){var n;if(n=Tr(r),(n&=2147483647)<=1072243195)return n<1044381696?1:Wr(r,0);if(n>=2146435072)return NaN;switch(3&Gn(r,Hn)){case 0:return Wr(Hn[0],Hn[1]);case 1:return-Yr(Hn[0],Hn[1]);case 2:return-Wr(Hn[0],Hn[1]);default:return Yr(Hn[0],Hn[1])}}var kn=[0,0];function Bn(r){var n;if(n=Tr(r),(n&=2147483647)<=1072243195)return n<1045430272?r:Yr(r,0);if(n>=2146435072)return NaN;switch(3&Gn(r,kn)){case 0:return Yr(kn[0],kn[1]);case 1:return Wr(kn[0],kn[1]);case 2:return-Yr(kn[0],kn[1]);default:return-Wr(kn[0],kn[1])}}var Ln=3.141592653589793;var Wn=1.4616321449683622,Cn=1.4616321449683622;function Yn(r){var n,t,e,u,o,i,f,a,c,l,v,y,p;if(rr(r)||er(r))return r;if(0===r)return nr;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-Mr(r);if(n){if(r>=4503599627370496)return nr;if(c=function(r){var n,t;return rr(r)||er(r)?NaN:0===(n=ur(t=r%2))||1===n?yn(0,t):n<.25?Bn(Ln*t):n<.75?yn(Mn(Ln*(n=.5-n)),t):n<1.25?(t=yn(1,t)-t,Bn(Ln*t)):n<1.75?-yn(Mn(Ln*(n-=1.5)),t):(t-=yn(2,t),Bn(Ln*t))}(r),0===c)return nr;t=Mr(Ln/ur(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(p=-Mr(r),r>=Wn-1+.27?(v=1-r,e=0):r>=Wn-1-.27?(v=r-(Cn-1),e=1):(v=r,e=2)):(p=0,r>=Wn+.27?(v=2-r,e=0):r>=Wn-.27?(v=r-Cn,e=1):(v=r-1,e=2)),e){case 0:i=.07721566490153287+(y=v*v)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(y),o=y*(.3224670334241136+y*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(y)),p+=(f=v*i+o)-.5*v;break;case 1:i=.48383612272381005+(l=(y=v*v)*v)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(l),o=l*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(l)-.1475877229945939,u=.06462494023913339+l*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(l),p+=-.12148629053584961+(f=y*i-(-3638676997039505e-33-l*(o+v*u)));break;case 2:i=v*(v*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(v)-.07721566490153287),o=1+v*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(v),p+=-.5*v+i/o}else if(r<8)switch(f=(v=r-(e=Lr(r)))*(v*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(v)-.07721566490153287),a=1+v*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(v),p=.5*v+f/a,y=1,e){case 7:y*=v+6;case 6:y*=v+5;case 5:y*=v+4;case 4:y*=v+3;case 3:p+=Mr(y*=v+2)}else r<0x400000000000000?(c=Mr(r),l=.4189385332046727+(y=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(v=y*y),p=(r-.5)*(c-1)+l):p=r*(Mr(r)-1);return n&&(p=t-p),p}var qn=.6931471803691238,Rn=1.9082149292705877e-10;function Xn(r){var n,t,e,u,o,i,f,a,c,l;if(r<-1||rr(r))return NaN;if(-1===r)return tr;if(r===nr)return r;if(0===r)return r;if(l=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,u=r,t=1)}return 0!==l&&(e<9007199254740992?(o=(l=((t=Tr(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),o/=c):(l=((t=Tr(c=r))>>20)-1023,o=0),(t&=1048575)<434334?c=Vr(c,1072693248|t):(l+=1,c=Vr(c,1071644672|t),t=1048576-t>>2),u=c-1),n=.5*u*u,0===t?0===u?l*qn+(o+=l*Rn):l*qn-((a=n*(1-.6666666666666666*u))-(l*Rn+o)-u):(a=(f=(i=u/(2+u))*i)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(f),0===l?u-(n-i*(n+a)):l*qn-(n-(i*(n+a)+(l*Rn+o))-u))}function zn(r){return kr(r)===r}function Dn(r){return 0===r&&1/r===tr}function Jn(r){return zn(r/2)}function Kn(r){return Jn(r>0?r-1:r+1)}var Qn=Math.sqrt,Zn=!0===Ur?0:1,$n=new sr(1),rt=new cr($n.buffer);function nt(r,n){return $n[0]=r,rt[Zn]=n>>>0,$n[0]}function tt(r){return 0|r}var et=[1,1.5],ut=[0,.5849624872207642],ot=[0,1.350039202129749e-8];var it=1e300,ft=1e-300,at=[0,0],ct=[0,0];function lt(r,n){var t,e,u,o,i,f,a,c,l,v,y,p,s,b;if(rr(r)||rr(n))return NaN;if(ln(at,n),i=at[0],0===at[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Qn(r);if(-.5===n)return 1/Qn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(er(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:ur(r)<1==(n===nr)?0:nr}(r,n)}if(ln(at,r),o=at[0],0===at[1]){if(0===o)return function(r,n){return n===tr?nr:n===nr?0:n>0?Kn(n)?r:0:Kn(n)?yn(nr,r):nr}(r,n);if(1===r)return 1;if(-1===r&&Kn(n))return-1;if(er(r))return r===tr?lt(-0,-n):n<0?0:nr}if(r<0&&!1===zn(n))return(r-r)/(r-r);if(u=ur(r),t=2147483647&o|0,e=2147483647&i|0,a=i>>>31|0,f=(f=o>>>31|0)&&Kn(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&Tr(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*it*it:f*ft*ft;if(t>1072693248)return 0===a?f*it*it:f*ft*ft;y=function(r,n){var t,e,u,o,i,f;return t=(i=1.9259629911266175e-8*(u=n-1)-u*u*(0===(f=u)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=nt(e=(o=1.4426950216293335*u)+i,0))-o),r[0]=e,r[1]=t,r}(ct,u)}else y=function(r,n,t){var e,u,o,i,f,a,c,l,v,y,p,s,b,w,d,m,h,j,N,g,A;return j=0,t<1048576&&(j-=53,t=Tr(n*=9007199254740992)),j+=(t>>20)-1023|0,t=1072693248|(N=1048575&t|0),N<=235662?g=0:N<767610?g=1:(g=0,j+=1,t-=1048576),i=nt(u=(m=(n=Vr(n,t))-(c=et[g]))*(h=1/(n+c)),0),e=524288+(t>>1|536870912),a=Vr(0,e+=g<<18),d=(o=u*u)*o*(0===(A=o)?.5999999999999946:.5999999999999946+A*(.4285714285785502+A*(.33333332981837743+A*(.272728123808534+A*(.23066074577556175+.20697501780033842*A))))),a=nt(a=3+(o=i*i)+(d+=(f=h*(m-i*a-i*(n-(a-c))))*(i+u)),0),b=(p=-7.028461650952758e-9*(v=nt(v=(m=i*a)+(h=f*a+(d-(a-3-o))*u),0))+.9617966939259756*(h-(v-m))+ot[g])-((s=nt(s=(y=.9617967009544373*v)+p+(l=ut[g])+(w=j),0))-w-l-y),r[0]=s,r[1]=b,r}(ct,u,t);if(v=(n-(c=nt(n,0)))*y[0]+n*y[1],l=c*y[0],ln(at,p=v+l),s=tt(at[0]),b=tt(at[1]),s>=1083179008){if(0!=(s-1083179008|b))return f*it*it;if(v+8008566259537294e-32>p-l)return f*it*it}else if((2147483647&s)>=1083231232){if(0!=(s-3230714880|b))return f*ft*ft;if(v<=p-l)return f*ft*ft}return p=function(r,n,t){var e,u,o,i,f,a,c,l,v,y,p;return y=((v=2147483647&r|0)>>20)-1023|0,l=0,v>1071644672&&(e=((l=r+(1048576>>y+1)>>>0)&~(1048575>>(y=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-y>>>0,r<0&&(l=-l),n-=o=Vr(0,e)),r=tt(r=Tr(c=1-((c=(i=.6931471824645996*(o=nt(o=t+n,0)))+(f=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(u=c-(o=c*c)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(u-2)-((a=f-(c-i))+c*a)-c))),(r+=l<<20>>>0)>>20<=0?wn(c,l):Vr(c,r)}(s,l,v),f*p}function vt(r){var n;return rr(r)||r===nr?r:r===tr?0:r>709.782712893384?nr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,t){var e,u,o,i;return wn(1-(n-(e=r-n)*(o=e-(u=e*e)*(0===(i=u)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(r-.6931471803691238*(n=Lr(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}function yt(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=vt(r),2.5066282746310007*(t=r>143.01608?(e=lt(r,.5*r-.25))*(e/t):lt(r,r-.5)/t)*n}function pt(r,n){return n/((1+.5772156649015329*r)*r)}function st(r){var n,t,e,u;if(zn(r)&&r<0||r===tr||rr(r))return NaN;if(0===r)return Dn(r)?tr:nr;if(r>171.61447887182297)return nr;if(r<-170.5674972726612)return 0;if((t=ur(r))>33)return r>=0?yt(r):(n=0==(1&(e=kr(t)))?-1:1,(u=t-e)>.5&&(u=t-(e+=1)),u=t*Bn(Ln*u),n*Ln/(ur(u)*yt(t)));for(u=1;r>=3;)u*=r-=1;for(;r<0;){if(r>-1e-9)return pt(r,u);u/=r,r+=1}for(;r<2;){if(r<1e-9)return pt(r,u);u/=r,r+=1}return 2===r?u:u*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(r-=2)}function bt(r){return 0===r&&1/r===nr}var wt=[1276642195630063e-46,-3.401102254316749e-30,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2.868042435334643e-20,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,9.81082564692473e-9,-1384948176067564e-20,.16663894804518634],dt=wt.length;function mt(r){return r<10?NaN:r>=3745194030963158e291?0:r<94906265.62425156?function(r){var n,t,e,u,o;if(r<-1.1||r>1.1)return NaN;for(e=0,u=0,n=2*r,o=0;o<dt;o++)t=e,u=n*(e=u)-t+wt[o];return.5*(u-t)}(2*lt(10/r,2)-1)/r:1/(12*r)}function ht(r,n){var t,e,u;return e=function(r,n){var t,e,u,o;if(2===(t=arguments.length))return rr(r)||rr(n)?NaN:r===tr||n===tr?tr:r===n&&0===r?Dn(r)?r:n:r<n?r:n;for(e=nr,o=0;o<t;o++){if(rr(u=arguments[o])||u===tr)return u;(u<e||u===e&&0===u&&Dn(u))&&(e=u)}return e}(r,n),u=function(r,n){var t,e,u,o;if(2===(t=arguments.length))return rr(r)||rr(n)?NaN:r===nr||n===nr?nr:r===n&&0===r?bt(r)?r:n:r>n?r:n;for(e=tr,o=0;o<t;o++){if(rr(u=arguments[o])||u===nr)return u;(u>e||u===e&&0===u&&bt(u))&&(e=u)}return e}(r,n),e<0?NaN:0===e?nr:u===nr?tr:e>=10?(t=mt(e)+mt(u)-mt(e+u),-.5*Mr(u)+.9189385332046728+t+(e-.5)*Mr(e/(e+u))+u*Xn(-e/(e+u))):u>=10?(t=mt(u)-mt(e+u),Yn(e)+t+e-e*Mr(e+u)+(u-.5)*Xn(-e/(e+u))):Mr(st(e)*(st(u)/st(e+u)))}function jt(r,n){return $(r,n,ht)}export{jt as default};
//# sourceMappingURL=mod.js.map
