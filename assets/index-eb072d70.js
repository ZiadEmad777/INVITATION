var pm=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var rT=pm((oT,Sa)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $c="187",mm=0,ou=1,gm=2,Vr=1,_m=2,Fr=3,ns=0,vn=1,gn=2,er=0,Wr=1,vo=2,lu=3,cu=4,xm=5,Js=100,vm=101,Mm=102,ym=103,Sm=104,bm=200,Tm=201,Em=202,wm=203,sf=204,rf=205,Am=206,Rm=207,Cm=208,Pm=209,Lm=210,Im=211,Dm=212,Nm=213,Um=214,Xl=0,ql=1,Yl=2,jr=3,Kl=4,Zl=5,Jl=6,$l=7,af=0,Om=1,Fm=2,Ci=0,of=1,lf=2,cf=3,Qc=4,hf=5,uf=6,df=7,hu="attached",Bm="detached",ff=300,or=301,ea=302,Jo=303,$o=304,is=1e3,li=1001,Mo=1002,zt=1003,pf=1004,Br=1005,$t=1006,ao=1007,Gn=1008,Rn=1009,mf=1010,gf=1011,ta=1012,jc=1013,ui=1014,Hn=1015,di=1016,eh=1017,th=1018,lr=1020,_f=35902,xf=35899,vf=1021,Mf=1022,Zn=1023,ss=1026,Zi=1027,nh=1028,ih=1029,As=1030,sh=1031,rh=1033,oo=33776,lo=33777,co=33778,ho=33779,Ql=35840,jl=35841,ec=35842,tc=35843,nc=36196,ic=37492,sc=37496,rc=37488,ac=37489,yo=37490,oc=37491,lc=37808,cc=37809,hc=37810,uc=37811,dc=37812,fc=37813,pc=37814,mc=37815,gc=37816,_c=37817,xc=37818,vc=37819,Mc=37820,yc=37821,Sc=36492,bc=36494,Tc=36495,Ec=36283,wc=36284,So=36285,Ac=36286,na=2300,ia=2301,Qo=2302,uu=2303,du=2400,fu=2401,pu=2402,km=2500,zm=0,yf=1,Rc=2,Gm=3200,Cc=0,Hm=1,Ki="",At="srgb",Nn="srgb-linear",bo="linear",dt="srgb",jo=7680,Vm=519,Wm=512,Xm=513,qm=514,Sf=515,Ym=516,Km=517,bf=518,Tf=519,ah=35044,mu="300 es",Jn=2e3,sa=2001;function Zm(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Jm(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function ra(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function $m(){const r=ra("canvas");return r.style.display="block",r}const gu={};function To(...r){const e="THREE."+r.shift();console.log(e,...r)}function Ef(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function De(...r){r=Ef(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Ge(...r){r=Ef(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function tr(...r){const e=r.join(" ");e in gu||(gu[e]=!0,De(...r))}function Qm(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const jm={[Xl]:Xl,[Yl]:Jl,[Kl]:Kl,[jr]:Zl,[ql]:ql,[Jl]:Yl,[$l]:$l,[Zl]:jr};class Cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _u=1234567;const Xr=Math.PI/180,cr=180/Math.PI;function pi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[r&255]+tn[r>>8&255]+tn[r>>16&255]+tn[r>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function Ze(r,e,t){return Math.max(e,Math.min(t,r))}function oh(r,e){return(r%e+e)%e}function e0(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function t0(r,e,t){return r!==e?(t-r)/(e-r):0}function qr(r,e,t){return(1-t)*r+t*e}function n0(r,e,t,n){return qr(r,e,1-Math.exp(-t*n))}function i0(r,e=1){return e-Math.abs(oh(r,e*2)-e)}function s0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function r0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function a0(r,e){return r+Math.floor(Math.random()*(e-r+1))}function o0(r,e){return r+Math.random()*(e-r)}function l0(r){return r*(.5-Math.random())}function c0(r){r!==void 0&&(_u=r);let e=_u+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function h0(r){return r*Xr}function u0(r){return r*cr}function d0(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function f0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function wf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function p0(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),f=s((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*m,l*f,o*c);break;case"YXY":r.set(l*f,o*h,l*m,o*c);break;case"ZYZ":r.set(l*m,l*f,o*h,o*c);break;default:De("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function zo(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function lh(r,e){if(e.constructor===Float32Array)return r;const t=zo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/t,-1)}function ch(r,e){if(e.constructor===Float32Array)return r;const t=zo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*t)}const kt={DEG2RAD:Xr,RAD2DEG:cr,generateUUID:pi,clamp:Ze,euclideanModulo:oh,mapLinear:e0,inverseLerp:t0,lerp:qr,damp:n0,pingpong:i0,smoothstep:s0,smootherstep:r0,randInt:a0,randFloat:o0,randFloatSpread:l0,seededRandom:c0,degToRad:h0,radToDeg:u0,isPowerOfTwo:d0,ceilPowerOfTwo:f0,floorPowerOfTwo:wf,setQuaternionFromProperEuler:p0,normalize:ch,denormalize:lh},Xh=class Xh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Xh.prototype.isVector2=!0;let we=Xh;class Ui{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[a+0],f=s[a+1],m=s[a+2],_=s[a+3];if(u!==_||l!==d||c!==f||h!==m){let p=l*d+c*f+h*m+u*_;p<0&&(d=-d,f=-f,m=-m,_=-_,p=-p);let g=1-o;if(p<.9995){const v=Math.acos(p),b=Math.sin(v);g=Math.sin(g*v)/b,o=Math.sin(o*v)/b,l=l*g+d*o,c=c*g+f*o,h=h*g+m*o,u=u*g+_*o}else{l=l*g+d*o,c=c*g+f*o,h=h*g+m*o,u=u*g+_*o;const v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],f=s[a+2],m=s[a+3];return e[t]=o*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-o*f,e[t+2]=c*m+h*f+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),f=l(i/2),m=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const qh=class qh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return el.copy(this).projectOnVector(e),this.sub(el)}reflect(e){return this.sub(el.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};qh.prototype.isVector3=!0;let U=qh;const el=new U,xu=new Ui,Yh=class Yh{constructor(e,t,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],_=i[0],p=i[3],g=i[6],v=i[1],b=i[4],M=i[7],y=i[2],T=i[5],x=i[8];return s[0]=a*_+o*v+l*y,s[3]=a*p+o*b+l*T,s[6]=a*g+o*M+l*x,s[1]=c*_+h*v+u*y,s[4]=c*p+h*b+u*T,s[7]=c*g+h*M+u*x,s[2]=d*_+f*v+m*y,s[5]=d*p+f*b+m*T,s[8]=d*g+f*M+m*x,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,m=t*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return tr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(tl.makeScale(e,t)),this}rotate(e){return tr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(tl.makeRotation(-e)),this}translate(e,t){return tr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(tl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Yh.prototype.isMatrix3=!0;let He=Yh;const tl=new He,vu=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mu=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function m0(){const r={enabled:!0,workingColorSpace:Nn,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===dt&&(i.r=Pi(i.r),i.g=Pi(i.g),i.b=Pi(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(i.r=nr(i.r),i.g=nr(i.g),i.b=nr(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ki?bo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Nn]:{primaries:e,whitePoint:n,transfer:bo,toXYZ:vu,fromXYZ:Mu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:e,whitePoint:n,transfer:dt,toXYZ:vu,fromXYZ:Mu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:At}}}),r}const je=m0();function Pi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function nr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ls;class g0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ls===void 0&&(Ls=ra("canvas")),Ls.width=e.width,Ls.height=e.height;const i=Ls.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ls}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ra("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Pi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pi(t[n]/255)*255):t[n]=Pi(t[n]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _0=0;class hh{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=pi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(nl(i[a].image)):s.push(nl(i[a]))}else s=nl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function nl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?g0.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let x0=0;const il=new U;class Gt extends Cs{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,n=li,i=li,s=$t,a=Gn,o=Zn,l=Rn,c=Gt.DEFAULT_ANISOTROPY,h=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=pi(),this.name="",this.source=new hh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(il).x}get height(){return this.source.getSize(il).y}get depth(){return this.source.getSize(il).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ff)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case is:e.x=e.x-Math.floor(e.x);break;case li:e.x=e.x<0?0:1;break;case Mo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case is:e.y=e.y-Math.floor(e.y);break;case li:e.y=e.y<0?0:1;break;case Mo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=ff;Gt.DEFAULT_ANISOTROPY=1;const Kh=class Kh{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,M=(f+1)/2,y=(g+1)/2,T=(h+d)/4,x=(u+_)/4,S=(m+p)/4;return b>M&&b>y?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=T/n,s=x/n):M>y?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=T/i,s=S/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=x/s,i=S/s),this.set(n,i,s,t),this}let v=Math.sqrt((p-m)*(p-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(p-m)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Kh.prototype.isVector4=!0;let pt=Kh;class v0 extends Cs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t),this.textures=[];const i=n.count;for(let s=0;s<i;s++)this.textures[s]=new Gt({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:$t,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new hh(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hi extends v0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Af extends Gt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=zt,this.minFilter=zt,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class M0 extends Gt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=zt,this.minFilter=zt,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const ko=class ko{constructor(e,t,n,i,s,a,o,l,c,h,u,d,f,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,u,d,f,m,_,p)}set(e,t,n,i,s,a,o,l,c,h,u,d,f,m,_,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ko().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Is.setFromMatrixColumn(e,0).length(),s=1/Is.setFromMatrixColumn(e,1).length(),a=1/Is.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*h,f=a*u,m=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,m=c*h,_=c*u;t[0]=d+_*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,m=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,m=o*h,_=o*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,m=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*l,f=a*c,m=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(y0,e,S0)}lookAt(e,t,n){const i=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),zi.crossVectors(n,En),zi.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),zi.crossVectors(n,En)),zi.normalize(),Ea.crossVectors(En,zi),i[0]=zi.x,i[4]=Ea.x,i[8]=En.x,i[1]=zi.y,i[5]=Ea.y,i[9]=En.y,i[2]=zi.z,i[6]=Ea.z,i[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],_=n[6],p=n[10],g=n[14],v=n[3],b=n[7],M=n[11],y=n[15],T=i[0],x=i[4],S=i[8],R=i[12],P=i[1],D=i[5],F=i[9],G=i[13],I=i[2],H=i[6],Y=i[10],k=i[14],oe=i[3],K=i[7],L=i[11],A=i[15];return s[0]=a*T+o*P+l*I+c*oe,s[4]=a*x+o*D+l*H+c*K,s[8]=a*S+o*F+l*Y+c*L,s[12]=a*R+o*G+l*k+c*A,s[1]=h*T+u*P+d*I+f*oe,s[5]=h*x+u*D+d*H+f*K,s[9]=h*S+u*F+d*Y+f*L,s[13]=h*R+u*G+d*k+f*A,s[2]=m*T+_*P+p*I+g*oe,s[6]=m*x+_*D+p*H+g*K,s[10]=m*S+_*F+p*Y+g*L,s[14]=m*R+_*G+p*k+g*A,s[3]=v*T+b*P+M*I+y*oe,s[7]=v*x+b*D+M*H+y*K,s[11]=v*S+b*F+M*Y+y*L,s[15]=v*R+b*G+M*k+y*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],_=e[7],p=e[11],g=e[15],v=l*f-c*d,b=o*f-c*u,M=o*d-l*u,y=a*f-c*h,T=a*d-l*h,x=a*u-o*h;return t*(_*v-p*b+g*M)-n*(m*v-p*y+g*T)+i*(m*b-_*y+g*x)-s*(m*M-_*T+p*x)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(s*h-o*l)+i*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],_=e[13],p=e[14],g=e[15],v=t*o-n*a,b=t*l-i*a,M=t*c-s*a,y=n*l-i*o,T=n*c-s*o,x=i*c-s*l,S=h*_-u*m,R=h*p-d*m,P=h*g-f*m,D=u*p-d*_,F=u*g-f*_,G=d*g-f*p,I=v*G-b*F+M*D+y*P-T*R+x*S;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/I;return e[0]=(o*G-l*F+c*D)*H,e[1]=(i*F-n*G-s*D)*H,e[2]=(_*x-p*T+g*y)*H,e[3]=(d*T-u*x-f*y)*H,e[4]=(l*P-a*G-c*R)*H,e[5]=(t*G-i*P+s*R)*H,e[6]=(p*M-m*x-g*b)*H,e[7]=(h*x-d*M+f*b)*H,e[8]=(a*F-o*P+c*S)*H,e[9]=(n*P-t*F-s*S)*H,e[10]=(m*T-_*M+g*v)*H,e[11]=(u*M-h*T-f*v)*H,e[12]=(o*R-a*D-l*S)*H,e[13]=(t*D-n*R+i*S)*H,e[14]=(_*b-m*y-p*v)*H,e[15]=(h*y-u*b+d*v)*H,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,m=s*u,_=a*h,p=a*u,g=o*u,v=l*c,b=l*h,M=l*u,y=n.x,T=n.y,x=n.z;return i[0]=(1-(_+g))*y,i[1]=(f+M)*y,i[2]=(m-b)*y,i[3]=0,i[4]=(f-M)*T,i[5]=(1-(d+g))*T,i[6]=(p+v)*T,i[7]=0,i[8]=(m+b)*x,i[9]=(p-v)*x,i[10]=(1-(d+_))*x,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Is.set(i[0],i[1],i[2]).length();const o=Is.set(i[4],i[5],i[6]).length(),l=Is.set(i[8],i[9],i[10]).length();s<0&&(a=-a),qn.copy(this);const c=1/a,h=1/o,u=1/l;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=h,qn.elements[5]*=h,qn.elements[6]*=h,qn.elements[8]*=u,qn.elements[9]*=u,qn.elements[10]*=u,t.setFromRotationMatrix(qn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=Jn,l=!1){const c=this.elements,h=2*s/(t-e),u=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let m,_;if(l)m=s/(a-s),_=a*s/(a-s);else if(o===Jn)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===sa)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Jn,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let m,_;if(l)m=1/(a-s),_=a/(a-s);else if(o===Jn)m=-2/(a-s),_=-(a+s)/(a-s);else if(o===sa)m=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ko.prototype.isMatrix4=!0;let We=ko;const Is=new U,qn=new We,y0=new U(0,0,0),S0=new U(1,1,1),zi=new U,Ea=new U,En=new U,yu=new We,Su=new Ui;class rs{constructor(e=0,t=0,n=0,i=rs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Su.setFromEuler(this),this.setFromQuaternion(Su,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rs.DEFAULT_ORDER="XYZ";class Rf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let b0=0;const bu=new U,Ds=new Ui,_i=new We,wa=new U,br=new U,T0=new U,E0=new Ui,Tu=new U(1,0,0),Eu=new U(0,1,0),wu=new U(0,0,1),Au={type:"added"},w0={type:"removed"},Ns={type:"childadded",child:null},sl={type:"childremoved",child:null};class mt extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new U,t=new rs,n=new Ui,i=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new We},normalMatrix:{value:new He}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(Tu,e)}rotateY(e){return this.rotateOnAxis(Eu,e)}rotateZ(e){return this.rotateOnAxis(wu,e)}translateOnAxis(e,t){return bu.copy(e).applyQuaternion(this.quaternion),this.position.add(bu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tu,e)}translateY(e){return this.translateOnAxis(Eu,e)}translateZ(e){return this.translateOnAxis(wu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wa.copy(e):wa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(br,wa,this.up):_i.lookAt(wa,br,this.up),this.quaternion.setFromRotationMatrix(_i),i&&(_i.extractRotation(i.matrixWorld),Ds.setFromRotationMatrix(_i),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ge("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Au),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(w0),sl.child=e,this.dispatchEvent(sl),sl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Au),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,e,T0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,E0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}mt.DEFAULT_UP=new U(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ze extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const A0={type:"move"};class rl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(A0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ze;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Cf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},Aa={h:0,s:0,l:0};function al(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=je.workingColorSpace){if(e=oh(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=al(a,s,e+1/3),this.g=al(a,s,e),this.b=al(a,s,e-1/3)}return je.colorSpaceToWorking(this,i),this}setStyle(e,t=At){function n(s){s!==void 0&&parseFloat(s)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){const n=Cf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return je.workingToColorSpace(nn.copy(this),e),Math.round(Ze(nn.r*255,0,255))*65536+Math.round(Ze(nn.g*255,0,255))*256+Math.round(Ze(nn.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(nn.copy(this),t);const n=nn.r,i=nn.g,s=nn.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=At){je.workingToColorSpace(nn.copy(this),e);const t=nn.r,n=nn.g,i=nn.b;return e!==At?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+t,Gi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gi),e.getHSL(Aa);const n=qr(Gi.h,Aa.h,t),i=qr(Gi.s,Aa.s,t),s=qr(Gi.l,Aa.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new Be;Be.NAMES=Cf;class uh{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Be(e),this.density=t}clone(){return new uh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class R0 extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rs,this.environmentIntensity=1,this.environmentRotation=new rs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Yn=new U,xi=new U,ol=new U,vi=new U,Us=new U,Os=new U,Ru=new U,ll=new U,cl=new U,hl=new U,ul=new pt,dl=new pt,fl=new pt;class zn{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Yn.subVectors(e,t),i.cross(Yn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Yn.subVectors(i,t),xi.subVectors(n,t),ol.subVectors(e,t);const a=Yn.dot(Yn),o=Yn.dot(xi),l=Yn.dot(ol),c=xi.dot(xi),h=xi.dot(ol),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,vi.x),l.addScaledVector(a,vi.y),l.addScaledVector(o,vi.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return ul.setScalar(0),dl.setScalar(0),fl.setScalar(0),ul.fromBufferAttribute(e,t),dl.fromBufferAttribute(e,n),fl.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(ul,s.x),a.addScaledVector(dl,s.y),a.addScaledVector(fl,s.z),a}static isFrontFacing(e,t,n,i){return Yn.subVectors(n,t),xi.subVectors(e,t),Yn.cross(xi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Yn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return zn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Us.subVectors(i,n),Os.subVectors(s,n),ll.subVectors(e,n);const l=Us.dot(ll),c=Os.dot(ll);if(l<=0&&c<=0)return t.copy(n);cl.subVectors(e,i);const h=Us.dot(cl),u=Os.dot(cl);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(Us,a);hl.subVectors(e,s);const f=Us.dot(hl),m=Os.dot(hl);if(m>=0&&f<=m)return t.copy(s);const _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Os,o);const p=h*m-f*u;if(p<=0&&u-h>=0&&f-m>=0)return Ru.subVectors(s,i),o=(u-h)/(u-h+(f-m)),t.copy(i).addScaledVector(Ru,o);const g=1/(p+_+d);return a=_*g,o=d*g,t.copy(n).addScaledVector(Us,a).addScaledVector(Os,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Oi{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Kn):Kn.fromBufferAttribute(s,a),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ra.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ra.copy(n.boundingBox)),Ra.applyMatrix4(e.matrixWorld),this.union(Ra)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tr),Ca.subVectors(this.max,Tr),Fs.subVectors(e.a,Tr),Bs.subVectors(e.b,Tr),ks.subVectors(e.c,Tr),Hi.subVectors(Bs,Fs),Vi.subVectors(ks,Bs),fs.subVectors(Fs,ks);let t=[0,-Hi.z,Hi.y,0,-Vi.z,Vi.y,0,-fs.z,fs.y,Hi.z,0,-Hi.x,Vi.z,0,-Vi.x,fs.z,0,-fs.x,-Hi.y,Hi.x,0,-Vi.y,Vi.x,0,-fs.y,fs.x,0];return!pl(t,Fs,Bs,ks,Ca)||(t=[1,0,0,0,1,0,0,0,1],!pl(t,Fs,Bs,ks,Ca))?!1:(Pa.crossVectors(Hi,Vi),t=[Pa.x,Pa.y,Pa.z],pl(t,Fs,Bs,ks,Ca))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mi=[new U,new U,new U,new U,new U,new U,new U,new U],Kn=new U,Ra=new Oi,Fs=new U,Bs=new U,ks=new U,Hi=new U,Vi=new U,fs=new U,Tr=new U,Ca=new U,Pa=new U,ps=new U;function pl(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ps.fromArray(r,s);const o=i.x*Math.abs(ps.x)+i.y*Math.abs(ps.y)+i.z*Math.abs(ps.z),l=e.dot(ps),c=t.dot(ps),h=n.dot(ps);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ot=new U,La=new we;let C0=0;class In extends Cs{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:C0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ah,this.updateRanges=[],this.gpuType=Hn,this.version=0,this._normalizationScale=e!==void 0?zo(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)La.fromBufferAttribute(this,t),La.applyMatrix3(e),this.setXY(t,La.x,La.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):lh(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):ch(e,this.array)}}class Pf extends In{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Lf extends In{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class at extends In{constructor(e,t,n){super(new Float32Array(e),t,n)}}const P0=new Oi,Er=new U,ml=new U;class mi{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):P0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Er.subVectors(e,this.center);const t=Er.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Er,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ml.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Er.copy(e.center).add(ml)),this.expandByPoint(Er.copy(e.center).sub(ml))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let L0=0;const Fn=new We,gl=new mt,zs=new U,wn=new Oi,wr=new Oi,Yt=new U;class Bt extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zm(e)?Lf:Pf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new He().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,n){return Fn.makeTranslation(e,t,n),this.applyMatrix4(Fn),this}scale(e,t,n){return Fn.makeScale(e,t,n),this.applyMatrix4(Fn),this}lookAt(e){return gl.lookAt(e),gl.updateMatrix(),this.applyMatrix4(gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new at(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];wn.setFromBufferAttribute(s),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];wr.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(wn.min,wr.min),wn.expandByPoint(Yt),Yt.addVectors(wn.max,wr.max),wn.expandByPoint(Yt)):(wn.expandByPoint(wr.min),wn.expandByPoint(wr.max))}wn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Yt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Yt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Yt.fromBufferAttribute(o,c),l&&(zs.fromBufferAttribute(e,c),Yt.add(zs)),i=Math.max(i,n.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new In(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let R=0;R<n.count;R++)o[R]=new U,l[R]=new U;const h=new U,u=new U,d=new U,f=new we,m=new we,_=new we,p=new U,g=new U;function v(R,P,D){c[R]=c[P]=c[D]=1,h.fromBufferAttribute(n,R),u.fromBufferAttribute(n,P),d.fromBufferAttribute(n,D),f.fromBufferAttribute(s,R),m.fromBufferAttribute(s,P),_.fromBufferAttribute(s,D),u.sub(h),d.sub(h),m.sub(f),_.sub(f);const F=1/(m.x*_.y-_.x*m.y);isFinite(F)&&(p.copy(u).multiplyScalar(_.y).addScaledVector(d,-m.y).multiplyScalar(F),g.copy(d).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(F),o[R].add(p),o[P].add(p),o[D].add(p),l[R].add(g),l[P].add(g),l[D].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let R=0,P=b.length;R<P;++R){const D=b[R],F=D.start,G=D.count;for(let I=F,H=F+G;I<H;I+=3)v(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const M=new U,y=new U,T=new U,x=new U;function S(R){T.fromBufferAttribute(i,R),x.copy(T);const P=o[R];M.copy(P),M.sub(T.multiplyScalar(T.dot(P))).normalize(),y.crossVectors(x,P);const F=y.dot(l[R])<0?-1:1;a.setXYZW(R,M.x,M.y,M.z,F)}for(let R=0,P=n.count;R<P;++R)c[R]&&S(R);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new In(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new U,s=new U,a=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let g=0;g<h;g++)d[m++]=c[f++]}return new In(d,h,u)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class If{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ah,this.updateRanges=[],this.version=0,this.uuid=pi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=Cu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=Cu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function Cu(r){return r.buffer._uuid===void 0&&(r.buffer._uuid=pi()),r.byteOffset===0&&r.byteLength===r.buffer.byteLength?r.buffer._uuid:r.buffer._uuid+":"+r.byteOffset+":"+r.byteLength}const on=new U;class aa{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?zo(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){To("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new In(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new aa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){To("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):lh(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):ch(e,this.data.array)}}const _l=new U,I0=new U,D0=new He;class qi{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=_l.subVectors(n,t).cross(I0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(_l),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||D0.getNormalMatrix(e),i=this.coplanarPoint(_l).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let N0=0;class $n extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=pi(),this.name="",this.type="Material",this.blending=Wr,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sf,this.blendDst=rf,this.blendEquation=Js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jo,this.stencilZFail=jo,this.stencilZPass=jo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new qi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new we().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new we().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Df extends $n{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Gs;const Ar=new U,Hs=new U,Vs=new U,Ws=new we,Rr=new we,Nf=new We,Ia=new U,Cr=new U,Da=new U,Pu=new we,xl=new we,Lu=new we;class U0 extends mt{constructor(e=new Df){if(super(),this.isSprite=!0,this.type="Sprite",Gs===void 0){Gs=new Bt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new If(t,5);Gs.setIndex([0,1,2,0,2,3]),Gs.setAttribute("position",new aa(n,3,0,!1)),Gs.setAttribute("uv",new aa(n,2,3,!1))}this.geometry=Gs,this.material=e,this.center=new we(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ge('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hs.setFromMatrixScale(this.matrixWorld),Nf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Vs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hs.multiplyScalar(-Vs.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;Na(Ia.set(-.5,-.5,0),Vs,a,Hs,i,s),Na(Cr.set(.5,-.5,0),Vs,a,Hs,i,s),Na(Da.set(.5,.5,0),Vs,a,Hs,i,s),Pu.set(0,0),xl.set(1,0),Lu.set(1,1);let o=e.ray.intersectTriangle(Ia,Cr,Da,!1,Ar);if(o===null&&(Na(Cr.set(-.5,.5,0),Vs,a,Hs,i,s),xl.set(0,1),o=e.ray.intersectTriangle(Ia,Da,Cr,!1,Ar),o===null))return;const l=e.ray.origin.distanceTo(Ar);l<e.near||l>e.far||t.push({distance:l,point:Ar.clone(),uv:zn.getInterpolation(Ar,Ia,Cr,Da,Pu,xl,Lu,new we),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function Na(r,e,t,n,i,s){Ws.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Rr.x=s*Ws.x-i*Ws.y,Rr.y=i*Ws.x+s*Ws.y):Rr.copy(Ws),r.copy(e),r.x+=Rr.x,r.y+=Rr.y,r.applyMatrix4(Nf)}const yi=new U,vl=new U,Ua=new U,Oa=new U;class Go{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){vl.copy(e).add(t).multiplyScalar(.5),Ua.copy(t).sub(e).normalize(),Oa.copy(this.origin).sub(vl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ua),o=Oa.dot(this.direction),l=-Oa.dot(Ua),c=Oa.lengthSq(),h=Math.abs(1-a*a);let u,d,f,m;if(h>0)if(u=a*l-o,d=a*o-l,m=s*h,u>=0)if(d>=-m)if(d<=m){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(vl).addScaledVector(Ua,d),f}intersectSphere(e,t){if(e.radius<0)return null;yi.subVectors(e.center,this.origin);const n=yi.dot(this.direction),i=yi.dot(yi)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,n,i,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,m=t.x-a.x,_=t.y-a.y,p=t.z-a.z,g=n.x-a.x,v=n.y-a.y,b=n.z-a.z,M=Math.abs(l),y=Math.abs(c),T=Math.abs(h);let x,S,R,P,D,F,G,I,H,Y,k,oe;if(M>=y&&M>=T?(R=l,F=u,H=m,oe=g,l>=0?(x=c,S=h,P=d,D=f,G=_,I=p,Y=v,k=b):(x=h,S=c,P=f,D=d,G=p,I=_,Y=b,k=v)):y>=T?(R=c,F=d,H=_,oe=v,c>=0?(x=h,S=l,P=f,D=u,G=p,I=m,Y=b,k=g):(x=l,S=h,P=u,D=f,G=m,I=p,Y=g,k=b)):(R=h,F=f,H=p,oe=b,h>=0?(x=l,S=c,P=u,D=d,G=m,I=_,Y=g,k=v):(x=c,S=l,P=d,D=u,G=_,I=m,Y=v,k=g)),R===0)return null;const K=x/R,L=S/R,A=1/R,V=P-K*F,ie=D-L*F,z=G-K*H,Z=I-L*H,se=Y-K*oe,ae=k-L*oe,j=se*Z-ae*z,Me=V*ae-ie*se,Ue=z*ie-Z*V;if(i){if(j<0||Me<0||Ue<0)return null}else if((j<0||Me<0||Ue<0)&&(j>0||Me>0||Ue>0))return null;const ue=j+Me+Ue;if(ue===0)return null;const Le=A*(j*F+Me*H+Ue*oe);return(ue>0?Le<0:Le>0)?null:this.at(Le/ue,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xn extends $n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rs,this.combine=af,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Iu=new We,ms=new Go,Fa=new mi,Du=new U,Ba=new U,ka=new U,za=new U,Ml=new U,Ga=new U,Nu=new U,Ha=new U;class J extends mt{constructor(e=new Bt,t=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Ga.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(Ml.fromBufferAttribute(u,e),a?Ga.addScaledVector(Ml,h):Ga.addScaledVector(Ml.sub(t),h))}t.add(Ga)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(s),ms.copy(e.ray).recast(e.near),!(Fa.containsPoint(ms.origin)===!1&&(ms.intersectSphere(Fa,Du)===null||ms.origin.distanceToSquared(Du)>(e.far-e.near)**2))&&(Iu.copy(s).invert(),ms.copy(e.ray).applyMatrix4(Iu),!(n.boundingBox!==null&&ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ms)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const p=d[m],g=a[p.materialIndex],v=Math.max(p.start,f.start),b=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let M=v,y=b;M<y;M+=3){const T=o.getX(M),x=o.getX(M+1),S=o.getX(M+2);i=Va(this,g,e,n,c,h,u,T,x,S),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){const v=o.getX(p),b=o.getX(p+1),M=o.getX(p+2);i=Va(this,a,e,n,c,h,u,v,b,M),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const p=d[m],g=a[p.materialIndex],v=Math.max(p.start,f.start),b=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let M=v,y=b;M<y;M+=3){const T=M,x=M+1,S=M+2;i=Va(this,g,e,n,c,h,u,T,x,S),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){const v=p,b=p+1,M=p+2;i=Va(this,a,e,n,c,h,u,v,b,M),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function O0(r,e,t,n,i,s,a,o){let l;if(e.side===vn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===ns,o),l===null)return null;Ha.copy(o),Ha.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Ha);return c<t.near||c>t.far?null:{distance:c,point:Ha.clone(),object:r}}function Va(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Ba),r.getVertexPosition(l,ka),r.getVertexPosition(c,za);const h=O0(r,e,t,n,Ba,ka,za,Nu);if(h){const u=new U;zn.getBarycoord(Nu,Ba,ka,za,u),i&&(h.uv=zn.getInterpolatedAttribute(i,o,l,c,u,new we)),s&&(h.uv1=zn.getInterpolatedAttribute(s,o,l,c,u,new we)),a&&(h.normal=zn.getInterpolatedAttribute(a,o,l,c,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new U,materialIndex:0};zn.getNormal(Ba,ka,za,d.normal),h.face=d,h.barycoord=u}return h}const Pr=new pt,Uu=new pt,Ou=new pt,F0=new pt,Fu=new We,Wa=new U,yl=new mi,Bu=new We,Sl=new Go;class B0 extends J{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=hu,this.bindMatrix=new We,this.bindMatrixInverse=new We,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Oi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Wa),this.boundingBox.expandByPoint(Wa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new mi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Wa),this.boundingSphere.expandByPoint(Wa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yl.copy(this.boundingSphere),yl.applyMatrix4(i),e.ray.intersectsSphere(yl)!==!1&&(Bu.copy(i).invert(),Sl.copy(e.ray).applyMatrix4(Bu),!(this.boundingBox!==null&&Sl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Sl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new pt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===hu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Bm?this.bindMatrixInverse.copy(this.bindMatrix).invert():De("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Uu.fromBufferAttribute(i.attributes.skinIndex,e),Ou.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Pr.copy(t),t.set(0,0,0,0)):(Pr.set(t.x,t.y,t.z,1),t.set(0,0,0)),Pr.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){const a=Ou.getComponent(s);if(a!==0){const o=Uu.getComponent(s);Fu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(F0.copy(Pr).applyMatrix4(Fu),a)}}return t.isVector4&&(t.w=Pr.w),t.applyMatrix4(this.bindMatrixInverse)}}class Uf extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class dh extends Gt{constructor(e=null,t=1,n=1,i,s,a,o,l,c=zt,h=zt,u,d){super(null,a,o,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ku=new We,k0=new We;class fh{constructor(e=[],t=[]){this.uuid=pi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){De("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new We)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new We;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:k0;ku.multiplyMatrices(o,t[s]),ku.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new fh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new dh(t,e,e,Zn,Hn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(De("Skeleton: No bone found with UUID:",s),a=new Uf),this.bones.push(a),this.boneInverses.push(new We().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Eo extends In{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Xs=new We,zu=new We,Xa=[],Gu=new Oi,z0=new We,Lr=new J,Ir=new mi;class Of extends J{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Eo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,z0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Oi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xs),Gu.copy(e.boundingBox).applyMatrix4(Xs),this.boundingBox.union(Gu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xs),Ir.copy(e.boundingSphere).applyMatrix4(Xs),this.boundingSphere.union(Ir)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Lr.geometry=this.geometry,Lr.material=this.material,Lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ir.copy(this.boundingSphere),Ir.applyMatrix4(n),e.ray.intersectsSphere(Ir)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Xs),zu.multiplyMatrices(n,Xs),Lr.matrixWorld=zu,Lr.raycast(e,Xa);for(let a=0,o=Xa.length;a<o;a++){const l=Xa[a];l.instanceId=s,l.object=this,t.push(l)}Xa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Eo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new dh(new Float32Array(i*this.count),i,this.count,nh,Hn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return s[l]=o,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const gs=new mi,G0=new we(.5,.5),qa=new U;class oa{constructor(e=new qi,t=new qi,n=new qi,i=new qi,s=new qi,a=new qi){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Jn,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],f=s[7],m=s[8],_=s[9],p=s[10],g=s[11],v=s[12],b=s[13],M=s[14],y=s[15];if(i[0].setComponents(c-a,f-h,g-m,y-v).normalize(),i[1].setComponents(c+a,f+h,g+m,y+v).normalize(),i[2].setComponents(c+o,f+u,g+_,y+b).normalize(),i[3].setComponents(c-o,f-u,g-_,y-b).normalize(),n)i[4].setComponents(l,d,p,M).normalize(),i[5].setComponents(c-l,f-d,g-p,y-M).normalize();else if(i[4].setComponents(c-l,f-d,g-p,y-M).normalize(),t===Jn)i[5].setComponents(c+l,f+d,g+p,y+M).normalize();else if(t===sa)i[5].setComponents(l,d,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(e){gs.center.set(0,0,0);const t=G0.distanceTo(e.center);return gs.radius=.7071067811865476+t,gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(qa.x=i.normal.x>0?e.max.x:e.min.x,qa.y=i.normal.y>0?e.max.y:e.min.y,qa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(qa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Hu=new We;class ph{constructor(){this.coordinateSystem=Jn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){const s=t[i];Hu.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new oa),n[i].setFromProjectionMatrix(Hu,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new oa),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new ph().copy(this)}}class Ff extends $n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wo=new U,Ao=new U,Vu=new We,Dr=new Go,Ya=new mi,bl=new U,Wu=new U;class mh extends mt{constructor(e=new Bt,t=new Ff){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)wo.fromBufferAttribute(t,i-1),Ao.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=wo.distanceTo(Ao);e.setAttribute("lineDistance",new at(n,1))}else De("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ya.copy(n.boundingSphere),Ya.applyMatrix4(i),Ya.radius+=s,e.ray.intersectsSphere(Ya)===!1)return;Vu.copy(i).invert(),Dr.copy(e.ray).applyMatrix4(Vu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let _=f,p=m-1;_<p;_+=c){const g=h.getX(_),v=h.getX(_+1),b=Ka(this,e,Dr,l,g,v,_);b&&t.push(b)}if(this.isLineLoop){const _=h.getX(m-1),p=h.getX(f),g=Ka(this,e,Dr,l,_,p,m-1);g&&t.push(g)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let _=f,p=m-1;_<p;_+=c){const g=Ka(this,e,Dr,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){const _=Ka(this,e,Dr,l,m-1,f,m-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ka(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(wo.fromBufferAttribute(o,i),Ao.fromBufferAttribute(o,s),t.distanceSqToSegment(wo,Ao,bl,Wu)>n)return;bl.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(bl);if(!(c<e.near||c>e.far))return{distance:c,point:Wu.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const Xu=new U,qu=new U;class H0 extends mh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Xu.fromBufferAttribute(t,i),qu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Xu.distanceTo(qu);e.setAttribute("lineDistance",new at(n,1))}else De("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class V0 extends mh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class gh extends $n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Yu=new We,Pc=new Go,Za=new mi,Ja=new U;class Bf extends mt{constructor(e=new Bt,t=new gh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere),Za.applyMatrix4(i),Za.radius+=s,e.ray.intersectsSphere(Za)===!1)return;Yu.copy(i).invert(),Pc.copy(e.ray).applyMatrix4(Yu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,_=f;m<_;m++){const p=c.getX(m);Ja.fromBufferAttribute(u,p),Ku(Ja,p,l,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,_=f;m<_;m++)Ja.fromBufferAttribute(u,m),Ku(Ja,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ku(r,e,t,n,i,s,a){const o=Pc.distanceSqToPoint(r);if(o<t){const l=new U;Pc.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class kf extends Gt{constructor(e=[],t=or,n,i,s,a,o,l,c,h){super(e,t,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class la extends Gt{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hr extends Gt{constructor(e,t,n=ui,i,s,a,o=zt,l=zt,c,h=ss,u=1){if(h!==ss&&h!==Zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class zf extends hr{constructor(e,t=ui,n=or,i,s,a=zt,o=zt,l,c=ss){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Gf extends Gt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class qe extends Bt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(u,2));function m(_,p,g,v,b,M,y,T,x,S,R){const P=M/x,D=y/S,F=M/2,G=y/2,I=T/2,H=x+1,Y=S+1;let k=0,oe=0;const K=new U;for(let L=0;L<Y;L++){const A=L*D-G;for(let V=0;V<H;V++){const ie=V*P-F;K[_]=ie*v,K[p]=A*b,K[g]=I,c.push(K.x,K.y,K.z),K[_]=0,K[p]=0,K[g]=T>0?1:-1,h.push(K.x,K.y,K.z),u.push(V/x),u.push(1-L/S),k+=1}}for(let L=0;L<S;L++)for(let A=0;A<x;A++){const V=d+A+H*L,ie=d+A+H*(L+1),z=d+(A+1)+H*(L+1),Z=d+(A+1)+H*L;l.push(V,ie,Z),l.push(ie,z,Z),oe+=6}o.addGroup(f,oe,R),f+=oe,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qe(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ti extends Bt{constructor(e=1,t=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));const a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,m=n*2+s,_=i+1,p=new U,g=new U;for(let v=0;v<=m;v++){let b=0,M=0,y=0,T=0;if(v<=n){const R=v/n,P=R*Math.PI/2;M=-h-e*Math.cos(P),y=e*Math.sin(P),T=-e*Math.cos(P),b=R*u}else if(v<=n+s){const R=(v-n)/s;M=-h+R*t,y=e,T=0,b=u+R*d}else{const R=(v-n-s)/n,P=R*Math.PI/2;M=h+e*Math.sin(P),y=e*Math.cos(P),T=e*Math.sin(P),b=u+d+R*u}const x=Math.max(0,Math.min(1,b/f));let S=0;v===0?S=.5/i:v===m&&(S=-.5/i);for(let R=0;R<=i;R++){const P=R/i,D=P*Math.PI*2,F=Math.sin(D),G=Math.cos(D);g.x=-y*G,g.y=M,g.z=y*F,o.push(g.x,g.y,g.z),p.set(-y*G,T,y*F),p.normalize(),l.push(p.x,p.y,p.z),c.push(P+S,x)}if(v>0){const R=(v-1)*_;for(let P=0;P<i;P++){const D=R+P,F=R+P+1,G=v*_+P,I=v*_+P+1;a.push(D,F,G),a.push(F,I,G)}}}this.setIndex(a),this.setAttribute("position",new at(o,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ti(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class _h extends Bt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new U,h=new we;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new at(a,3)),this.setAttribute("normal",new at(o,3)),this.setAttribute("uv",new at(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _h(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class nt extends Bt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let m=0;const _=[],p=n/2;let g=0;v(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new at(u,3)),this.setAttribute("normal",new at(d,3)),this.setAttribute("uv",new at(f,2));function v(){const M=new U,y=new U;let T=0;const x=(t-e)/n;for(let S=0;S<=s;S++){const R=[],P=S/s,D=P*(t-e)+e;for(let F=0;F<=i;F++){const G=F/i,I=G*l+o,H=Math.sin(I),Y=Math.cos(I);y.x=D*H,y.y=-P*n+p,y.z=D*Y,u.push(y.x,y.y,y.z),M.set(H,x,Y).normalize(),d.push(M.x,M.y,M.z),f.push(G,1-P),R.push(m++)}_.push(R)}for(let S=0;S<i;S++)for(let R=0;R<s;R++){const P=_[R][S],D=_[R+1][S],F=_[R+1][S+1],G=_[R][S+1];(e>0||R!==0)&&(h.push(P,D,G),T+=3),(t>0||R!==s-1)&&(h.push(D,F,G),T+=3)}c.addGroup(g,T,0),g+=T}function b(M){const y=m,T=new we,x=new U;let S=0;const R=M===!0?e:t,P=M===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,p*P,0),d.push(0,P,0),f.push(.5,.5),m++;const D=m;for(let F=0;F<=i;F++){const I=F/i*l+o,H=Math.cos(I),Y=Math.sin(I);x.x=R*Y,x.y=p*P,x.z=R*H,u.push(x.x,x.y,x.z),d.push(0,P,0),T.x=H*.5+.5,T.y=Y*.5*P+.5,f.push(T.x,T.y),m++}for(let F=0;F<i;F++){const G=y+F,I=D+F;M===!0?h.push(I,I+1,G):h.push(I+1,I,G),S+=3}c.addGroup(g,S,M===!0?1:2),g+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ji extends nt{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new ji(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Fi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){De("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new we:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new U,i=[],s=[],a=[],o=new U,l=new We;for(let f=0;f<=e;f++){const m=f/e;i[f]=this.getTangentAt(m,new U)}s[0]=new U,a[0]=new U;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Ze(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(Ze(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),a[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class Hf extends Fi{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new we){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class W0 extends Hf{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function xh(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const Zu=new U,Ju=new U,Tl=new xh,El=new xh,wl=new xh;class X0 extends Fi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new U){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%s]:(Ju.subVectors(i[0],i[1]).add(i[0]),c=Ju);const u=i[o%s],d=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(Zu.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Zu),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),p<1e-4&&(p=_),Tl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,_,p),El.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,_,p),wl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,_,p)}else this.curveType==="catmullrom"&&(Tl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),El.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),wl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Tl.calc(l),El.calc(l),wl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new U().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function $u(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}function q0(r,e){const t=1-r;return t*t*e}function Y0(r,e){return 2*(1-r)*r*e}function K0(r,e){return r*r*e}function Yr(r,e,t,n){return q0(r,e)+Y0(r,t)+K0(r,n)}function Z0(r,e){const t=1-r;return t*t*t*e}function J0(r,e){const t=1-r;return 3*t*t*r*e}function $0(r,e){return 3*(1-r)*r*r*e}function Q0(r,e){return r*r*r*e}function Kr(r,e,t,n,i){return Z0(r,e)+J0(r,t)+$0(r,n)+Q0(r,i)}class j0 extends Fi{constructor(e=new we,t=new we,n=new we,i=new we){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new we){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Kr(e,i.x,s.x,a.x,o.x),Kr(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class eg extends Fi{constructor(e=new U,t=new U,n=new U,i=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new U){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Kr(e,i.x,s.x,a.x,o.x),Kr(e,i.y,s.y,a.y,o.y),Kr(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class tg extends Fi{constructor(e=new we,t=new we){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new we){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new we){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ng extends Fi{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ig extends Fi{constructor(e=new we,t=new we,n=new we){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new we){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Yr(e,i.x,s.x,a.x),Yr(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vh extends Fi{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Yr(e,i.x,s.x,a.x),Yr(e,i.y,s.y,a.y),Yr(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sg extends Fi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new we){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set($u(o,l.x,c.x,h.x,u.x),$u(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new we().fromArray(i))}return this}}var rg=Object.freeze({__proto__:null,ArcCurve:W0,CatmullRomCurve3:X0,CubicBezierCurve:j0,CubicBezierCurve3:eg,EllipseCurve:Hf,LineCurve:tg,LineCurve3:ng,QuadraticBezierCurve:ig,QuadraticBezierCurve3:vh,SplineCurve:sg});class cn extends Bt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,f=[],m=[],_=[],p=[];for(let g=0;g<h;g++){const v=g*d-a;for(let b=0;b<c;b++){const M=b*u-s;m.push(M,-v,0),_.push(0,0,1),p.push(b/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){const b=v+c*g,M=v+c*(g+1),y=v+1+c*(g+1),T=v+1+c*g;f.push(b,M,T),f.push(M,y,T)}this.setIndex(f),this.setAttribute("position",new at(m,3)),this.setAttribute("normal",new at(_,3)),this.setAttribute("uv",new at(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ho extends Bt{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=e;const d=(t-e)/i,f=new U,m=new we;for(let _=0;_<=i;_++){for(let p=0;p<=n;p++){const g=s+p/n*a;f.x=u*Math.cos(g),f.y=u*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let _=0;_<i;_++){const p=_*(n+1);for(let g=0;g<n;g++){const v=g+p,b=v,M=v+n+1,y=v+n+2,T=v+1;o.push(b,M,T),o.push(M,y,T)}}this.setIndex(o),this.setAttribute("position",new at(l,3)),this.setAttribute("normal",new at(c,3)),this.setAttribute("uv",new at(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ho(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class St extends Bt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new U,d=new U,f=[],m=[],_=[],p=[];for(let g=0;g<=n;g++){const v=[],b=g/n,M=a+b*o,y=e*Math.cos(M),T=Math.sqrt(e*e-y*y);let x=0;g===0&&a===0?x=.5/t:g===n&&l===Math.PI&&(x=-.5/t);for(let S=0;S<=t;S++){const R=S/t,P=i+R*s;u.x=-T*Math.cos(P),u.y=y,u.z=T*Math.sin(P),m.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),p.push(R+x,1-b),v.push(c++)}h.push(v)}for(let g=0;g<n;g++)for(let v=0;v<t;v++){const b=h[g][v+1],M=h[g][v],y=h[g+1][v],T=h[g+1][v+1];(g!==0||a>0)&&f.push(b,M,T),(g!==n-1||l<Math.PI)&&f.push(M,y,T)}this.setIndex(f),this.setAttribute("position",new at(m,3)),this.setAttribute("normal",new at(_,3)),this.setAttribute("uv",new at(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new St(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ai extends Bt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],h=[],u=[],d=new U,f=new U,m=new U;for(let _=0;_<=n;_++){const p=a+_/n*o;for(let g=0;g<=i;g++){const v=g/i*s;f.x=(e+t*Math.cos(p))*Math.cos(v),f.y=(e+t*Math.cos(p))*Math.sin(v),f.z=t*Math.sin(p),c.push(f.x,f.y,f.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),m.subVectors(f,d).normalize(),h.push(m.x,m.y,m.z),u.push(g/i),u.push(_/n)}}for(let _=1;_<=n;_++)for(let p=1;p<=i;p++){const g=(i+1)*_+p-1,v=(i+1)*(_-1)+p-1,b=(i+1)*(_-1)+p,M=(i+1)*_+p;l.push(g,v,M),l.push(v,b,M)}this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ai(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class Mh extends Bt{constructor(e=new vh(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new U,l=new U,c=new we;let h=new U;const u=[],d=[],f=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new at(u,3)),this.setAttribute("normal",new at(d,3)),this.setAttribute("uv",new at(f,2));function _(){for(let b=0;b<t;b++)p(b);p(s===!1?t:0),v(),g()}function p(b){h=e.getPointAt(b/t,h);const M=a.normals[b],y=a.binormals[b];for(let T=0;T<=i;T++){const x=T/i*Math.PI*2,S=Math.sin(x),R=-Math.cos(x);l.x=R*M.x+S*y.x,l.y=R*M.y+S*y.y,l.z=R*M.z+S*y.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function g(){for(let b=1;b<=t;b++)for(let M=1;M<=i;M++){const y=(i+1)*(b-1)+(M-1),T=(i+1)*b+(M-1),x=(i+1)*b+M,S=(i+1)*(b-1)+M;m.push(y,T,S),m.push(T,x,S)}}function v(){for(let b=0;b<=t;b++)for(let M=0;M<=i;M++)c.x=b/t,c.y=M/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Mh(new rg[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function ur(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];if(Qu(i))i.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Qu(i[0])){const s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function ln(r){const e={};for(let t=0;t<r.length;t++){const n=ur(r[t]);for(const i in n)e[i]=n[i]}return e}function Qu(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function ag(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Vf(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const og={clone:ur,merge:ln};var lg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rs extends $n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lg,this.fragmentShader=cg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ur(e.uniforms),this.uniformsGroups=ag(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Be().setHex(i.value);break;case"v2":this.uniforms[n].value=new we().fromArray(i.value);break;case"v3":this.uniforms[n].value=new U().fromArray(i.value);break;case"v4":this.uniforms[n].value=new pt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new He().fromArray(i.value);break;case"m4":this.uniforms[n].value=new We().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class hg extends Rs{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ee extends $n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cc,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jn extends Ee{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new we(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return tr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){tr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ug extends $n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dg extends $n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Yi(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function kr(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}function fg(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ju(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function pg(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class _r{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class mg extends _r{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:du,endingEnd:du}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case fu:s=e,o=2*t-n;break;case pu:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case fu:a=e,l=2*n-t;break;case pu:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),_=m*m,p=_*m,g=-d*p+2*d*_-d*m,v=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*m+1,b=(-1-f)*p+(1.5+f)*_+.5*m,M=f*p-f*_;for(let y=0;y!==o;++y)s[y]=g*a[h+y]+v*a[c+y]+b*a[l+y]+M*a[u+y];return s}}class gg extends _r{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}}class _g extends _r{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class xg extends _r{interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){const m=(n-t)/(i-t),_=1-m;for(let p=0;p!==o;++p)s[p]=a[c+p]*_+a[l+p]*m;return s}const d=o*2,f=e-1;for(let m=0;m!==o;++m){const _=a[c+m],p=a[l+m],g=f*d+m*2,v=u[g],b=u[g+1],M=e*d+m*2,y=h[M],T=h[M+1],x=Mg(n,t,v,y,i);s[m]=Wf(x,_,b,T,p)}return s}}function Wf(r,e,t,n,i){const s=1-r;return s*s*s*e+3*s*s*r*t+3*s*r*r*n+r*r*r*i}function vg(r,e,t,n,i){const s=1-r;return 3*s*s*(t-e)+6*s*r*(n-t)+3*r*r*(i-n)}function Mg(r,e,t,n,i){let s=(r-e)/(i-e);for(let a=0;a<8;a++){const o=Wf(s,e,t,n,i)-r;if(Math.abs(o)<1e-10)break;const l=vg(s,e,t,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}class ei{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Yi(t,this.TimeBufferType),this.values=Yi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Yi(e.times,Array),values:Yi(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),kr(e.settings)&&(n.settings={inTangents:Yi(e.settings.inTangents,Array),outTangents:Yi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new _g(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new mg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new xg(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case na:t=this.InterpolantFactoryMethodDiscrete;break;case ia:t=this.InterpolantFactoryMethodLinear;break;case Qo:t=this.InterpolantFactoryMethodSmooth;break;case uu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return De("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return na;case this.InterpolantFactoryMethodLinear:return ia;case this.InterpolantFactoryMethodSmooth:return Qo;case this.InterpolantFactoryMethodBezier:return uu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;kr(this.settings)&&(ed(this.settings.inTangents,e),ed(this.settings.outTangents,e))}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;kr(this.settings)&&(td(this.settings.inTangents,e),td(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ge("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(Ge("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Ge("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ge("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Jm(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){Ge("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Qo,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){const _=t[u+m];if(_!==t[d+m]||_!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,kr(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function ed(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]+=e}function td(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]*=e}ei.prototype.ValueTypeName="";ei.prototype.TimeBufferType=Float32Array;ei.prototype.ValueBufferType=Float32Array;ei.prototype.DefaultInterpolation=ia;class xr extends ei{constructor(e,t,n){super(e,t,n)}}xr.prototype.ValueTypeName="bool";xr.prototype.ValueBufferType=Array;xr.prototype.DefaultInterpolation=na;xr.prototype.InterpolantFactoryMethodLinear=void 0;xr.prototype.InterpolantFactoryMethodSmooth=void 0;class Xf extends ei{constructor(e,t,n,i){super(e,t,n,i)}}Xf.prototype.ValueTypeName="color";class ca extends ei{constructor(e,t,n,i){super(e,t,n,i)}}ca.prototype.ValueTypeName="number";class yg extends _r{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Ui.slerpFlat(s,0,a,c-o,a,c,l);return s}}class ha extends ei{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new yg(this.times,this.values,this.getValueSize(),e)}}ha.prototype.ValueTypeName="quaternion";ha.prototype.InterpolantFactoryMethodSmooth=void 0;class vr extends ei{constructor(e,t,n){super(e,t,n)}}vr.prototype.ValueTypeName="string";vr.prototype.ValueBufferType=Array;vr.prototype.DefaultInterpolation=na;vr.prototype.InterpolantFactoryMethodLinear=void 0;vr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ro extends ei{constructor(e,t,n,i){super(e,t,n,i)}}Ro.prototype.ValueTypeName="vector";class Sg{constructor(e="",t=-1,n=[],i=km){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=pi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Tg(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(ei.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=fg(l);l=ju(l,1,h),c=ju(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new ca(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function bg(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ca;case"vector":case"vector2":case"vector3":case"vector4":return Ro;case"color":return Xf;case"quaternion":return ha;case"bool":case"boolean":return xr;case"string":return vr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Tg(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=bg(r.type);if(r.times===void 0){const n=[],i=[];pg(r.keys,n,i,"value"),r.times=n,r.values=i}let t;return e.parse!==void 0?t=e.parse(r):t=new e(r.name,r.times,r.values,r.interpolation),kr(r.settings)&&(t.settings={inTangents:Yi(r.settings.inTangents,Float32Array),outTangents:Yi(r.settings.outTangents,Float32Array)}),t}const Ri={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(nd(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!nd(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function nd(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Eg{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const wg=new Eg;class Mr{constructor(e){this.manager=e!==void 0?e:wg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}Mr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Si={};class Ag extends Error{constructor(e,t){super(e),this.response=t}}class qf extends Mr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ri.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Si[e]!==void 0){Si[e].push({onLoad:t,onProgress:n,onError:i});return}Si[e]=[],Si[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&De("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Si[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let _=0;const p=new ReadableStream({start(g){v();function v(){u.read().then(({done:b,value:M})=>{if(b)g.close();else{_+=M.byteLength;const y=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let T=0,x=h.length;T<x;T++){const S=h[T];S.onProgress&&S.onProgress(y)}g.enqueue(M),v()}},b=>{g.error(b)})}}});return new Response(p)}else throw new Ag(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{Ri.add(`file:${e}`,c);const h=Si[e];delete Si[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Si[e];if(h===void 0)throw this.manager.itemError(e),c;delete Si[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const qs=new WeakMap;class Rg extends Mr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ri.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=qs.get(a);u===void 0&&(u=[],qs.set(a,u)),u.push({onLoad:t,onError:i})}return a}const o=ra("img");function l(){h(),t&&t(this);const u=qs.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}qs.delete(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),Ri.remove(`image:${e}`);const d=qs.get(this)||[];for(let f=0;f<d.length;f++){const m=d[f];m.onError&&m.onError(u)}qs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ri.add(`image:${e}`,o),s.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}}class uo extends Mr{constructor(e){super(e)}load(e,t,n,i){const s=new Gt,a=new Rg(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class va extends mt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Cg extends va{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Al=new We,id=new U,sd=new U;class yh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oa,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;id.setFromMatrixPosition(e.matrixWorld),t.position.copy(id),sd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Al.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Al,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=i?i.z/s.x:1,o=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;e.coordinateSystem===sa||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Al)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const $a=new U,Qa=new Ui,ti=new U;class Yf extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=Jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose($a,Qa,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($a,Qa,ti.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose($a,Qa,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($a,Qa,ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Wi=new U,rd=new we,ad=new we;class mn extends Yf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cr*2*Math.atan(Math.tan(Xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,t){return this.getViewBounds(e,rd,ad),t.subVectors(ad,rd)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Pg extends yh{constructor(){super(new mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=cr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class fo extends va{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Pg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Lg extends yh{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0}}class Kf extends va{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Lg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Sh extends Yf{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ig extends yh{constructor(){super(new Sh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class po extends va{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new Ig}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Dg extends va{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Zr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Rl=new WeakMap;class Ng extends Mr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&De("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&De("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ri.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{Rl.has(a)===!0?(i&&i(Rl.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}const o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ri.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Rl.set(l,c),Ri.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Ri.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ys=-90,Ks=1;class Lc extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new mn(Ys,Ks,e,t);i.layers=this.layers,this.add(i);const s=new mn(Ys,Ks,e,t);s.layers=this.layers,this.add(s);const a=new mn(Ys,Ks,e,t);a.layers=this.layers,this.add(a);const o=new mn(Ys,Ks,e,t);o.layers=this.layers,this.add(o);const l=new mn(Ys,Ks,e,t);l.layers=this.layers,this.add(l);const c=new mn(Ys,Ks,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===sa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Ug extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const bh="\\[\\]\\.:\\/",Og=new RegExp("["+bh+"]","g"),Th="[^"+bh+"]",Fg="[^"+bh.replace("\\.","")+"]",Bg=/((?:WC+[\/:])*)/.source.replace("WC",Th),kg=/(WCOD+)?/.source.replace("WCOD",Fg),zg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Th),Gg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Th),Hg=new RegExp("^"+Bg+kg+zg+Gg+"$"),Vg=["material","materials","bones","map"];class Wg{constructor(e,t,n){const i=n||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ft{constructor(e,t,n){this.path=t,this.parsedPath=n||ft.parseTrackName(t),this.node=ft.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ft.Composite(e,t,n):new ft(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Og,"")}static parseTrackName(e){const t=Hg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Vg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=ft.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){De("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ge("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ge("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ge("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ge("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ge("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;Ge("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ft.Composite=Wg;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Xg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,De("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Zh=class Zh{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};Zh.prototype.isMatrix2=!0;let od=Zh;function ld(r,e,t,n){const i=qg(n);switch(t){case vf:return r*e;case nh:return r*e/i.components*i.byteLength;case ih:return r*e/i.components*i.byteLength;case As:return r*e*2/i.components*i.byteLength;case sh:return r*e*2/i.components*i.byteLength;case Mf:return r*e*3/i.components*i.byteLength;case Zn:return r*e*4/i.components*i.byteLength;case rh:return r*e*4/i.components*i.byteLength;case oo:case lo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case co:case ho:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case jl:case tc:return Math.max(r,16)*Math.max(e,8)/4;case Ql:case ec:return Math.max(r,8)*Math.max(e,8)/2;case nc:case ic:case rc:case ac:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case sc:case yo:case oc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case lc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case cc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case hc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case uc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case dc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case fc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case pc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case mc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case gc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case _c:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case xc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case vc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Mc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case yc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Sc:case bc:case Tc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Ec:case wc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case So:case Ac:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qg(r){switch(r){case Rn:case mf:return{byteLength:1,components:1};case ta:case gf:case di:return{byteLength:2,components:1};case eh:case th:return{byteLength:2,components:4};case ui:case jc:case Hn:return{byteLength:4,components:1};case _f:case xf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$c}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$c);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Zf(){let r=null,e=!1,t=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),t(s,a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Yg(r){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const _=u[f];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var Kg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Jg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$g=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,e_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,t_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,n_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,i_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,s_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,r_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,a_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,o_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,l_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,c_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,h_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,u_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,d_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,p_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,m_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,g_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,__=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,x_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,v_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,M_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,y_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,S_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,b_="gl_FragColor = linearToOutputTexel( gl_FragColor );",T_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,E_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,w_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,A_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,R_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,C_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,P_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,L_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,I_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,D_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,N_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,U_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,O_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,F_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,B_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,k_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,z_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,G_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,H_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,V_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,W_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,X_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,q_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Y_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,K_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Z_=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,J_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ex=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ix=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ax=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ox=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ux=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,px=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_x=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,bx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ex=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ax=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Px=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ix=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ux=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ox=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Fx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jx=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ev=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,av=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ov=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_v=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Sv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ev=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:Kg,alphahash_pars_fragment:Zg,alphamap_fragment:Jg,alphamap_pars_fragment:$g,alphatest_fragment:Qg,alphatest_pars_fragment:jg,aomap_fragment:e_,aomap_pars_fragment:t_,batching_pars_vertex:n_,batching_vertex:i_,begin_vertex:s_,beginnormal_vertex:r_,bsdfs:a_,iridescence_fragment:o_,bumpmap_pars_fragment:l_,clipping_planes_fragment:c_,clipping_planes_pars_fragment:h_,clipping_planes_pars_vertex:u_,clipping_planes_vertex:d_,color_fragment:f_,color_pars_fragment:p_,color_pars_vertex:m_,color_vertex:g_,common:__,defaultnormal_vertex:x_,displacementmap_pars_vertex:v_,displacementmap_vertex:M_,emissivemap_fragment:y_,emissivemap_pars_fragment:S_,colorspace_fragment:b_,colorspace_pars_fragment:T_,envmap_fragment:E_,envmap_common_pars_fragment:w_,envmap_pars_fragment:A_,envmap_pars_vertex:R_,envmap_physical_pars_fragment:k_,envmap_vertex:C_,fog_vertex:P_,fog_pars_vertex:L_,fog_fragment:I_,fog_pars_fragment:D_,gradientmap_pars_fragment:N_,lightmap_pars_fragment:U_,lights_lambert_fragment:O_,lights_lambert_pars_fragment:F_,lights_pars_begin:B_,lights_toon_fragment:z_,lights_toon_pars_fragment:G_,lights_phong_fragment:H_,lights_phong_pars_fragment:V_,lights_physical_fragment:W_,lights_physical_pars_fragment:X_,lights_fragment_begin:q_,lights_fragment_maps:Y_,lights_fragment_end:K_,lightprobes_pars_fragment:Z_,logdepthbuf_fragment:J_,logdepthbuf_pars_fragment:$_,logdepthbuf_pars_vertex:Q_,logdepthbuf_vertex:j_,map_fragment:ex,map_pars_fragment:tx,map_particle_fragment:nx,map_particle_pars_fragment:ix,metalnessmap_fragment:sx,metalnessmap_pars_fragment:rx,morphinstance_vertex:ax,morphcolor_vertex:ox,morphnormal_vertex:lx,morphtarget_pars_vertex:cx,morphtarget_vertex:hx,normal_fragment_begin:ux,normal_fragment_maps:dx,normal_pars_fragment:fx,normal_pars_vertex:px,normal_vertex:mx,normalmap_pars_fragment:gx,clearcoat_normal_fragment_begin:_x,clearcoat_normal_fragment_maps:xx,clearcoat_pars_fragment:vx,iridescence_pars_fragment:Mx,opaque_fragment:yx,packing:Sx,premultiplied_alpha_fragment:bx,project_vertex:Tx,dithering_fragment:Ex,dithering_pars_fragment:wx,roughnessmap_fragment:Ax,roughnessmap_pars_fragment:Rx,shadowmap_pars_fragment:Cx,shadowmap_pars_vertex:Px,shadowmap_vertex:Lx,shadowmask_pars_fragment:Ix,skinbase_vertex:Dx,skinning_pars_vertex:Nx,skinning_vertex:Ux,skinnormal_vertex:Ox,specularmap_fragment:Fx,specularmap_pars_fragment:Bx,tonemapping_fragment:kx,tonemapping_pars_fragment:zx,transmission_fragment:Gx,transmission_pars_fragment:Hx,uv_pars_fragment:Vx,uv_pars_vertex:Wx,uv_vertex:Xx,worldpos_vertex:qx,background_vert:Yx,background_frag:Kx,backgroundCube_vert:Zx,backgroundCube_frag:Jx,cube_vert:$x,cube_frag:Qx,depth_vert:jx,depth_frag:ev,distance_vert:tv,distance_frag:nv,equirect_vert:iv,equirect_frag:sv,linedashed_vert:rv,linedashed_frag:av,meshbasic_vert:ov,meshbasic_frag:lv,meshlambert_vert:cv,meshlambert_frag:hv,meshmatcap_vert:uv,meshmatcap_frag:dv,meshnormal_vert:fv,meshnormal_frag:pv,meshphong_vert:mv,meshphong_frag:gv,meshphysical_vert:_v,meshphysical_frag:xv,meshtoon_vert:vv,meshtoon_frag:Mv,points_vert:yv,points_frag:Sv,shadow_vert:bv,shadow_frag:Tv,sprite_vert:Ev,sprite_frag:wv},be={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},ai={basic:{uniforms:ln([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:ln([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:ln([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:ln([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:ln([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:ln([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:ln([be.points,be.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:ln([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:ln([be.common,be.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:ln([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:ln([be.sprite,be.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:ln([be.common,be.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:ln([be.lights,be.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};ai.physical={uniforms:ln([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new He},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const ja={r:0,b:0,g:0},Av=new We,Jf=new He;Jf.set(-1,0,0,0,1,0,0,0,1);function Rv(r,e,t,n,i,s){const a=new Be(0);let o=i===!0?0:1,l,c,h=null,u=0,d=null;function f(v){let b=v.isScene===!0?v.background:null;if(b&&b.isTexture){const M=v.backgroundBlurriness>0;b=e.get(b,M)}return b}function m(v){let b=!1;const M=f(v);M===null?p(a,o):M&&M.isColor&&(p(M,1),b=!0);const y=r.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,s):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(v,b){const M=f(b);M&&M.isCubeTexture?(c===void 0&&(c=new J(new qe(1,1,1),new Rs({name:"BackgroundCubeMaterial",uniforms:ur(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Av.makeRotationFromEuler(b.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Jf),c.material.toneMapped=je.getTransfer(M.colorSpace)!==dt,(h!==M||u!==M.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,d=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new J(new cn(2,2),new Rs({name:"BackgroundMaterial",uniforms:ur(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=je.getTransfer(M.colorSpace)!==dt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,d=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,b){v.getRGB(ja,Vf(r)),t.buffers.color.setClear(ja.r,ja.g,ja.b,b,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,b=1){a.set(v),o=b,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:m,addToRenderList:_,dispose:g}}function Cv(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(D,F,G,I,H){let Y=!1;const k=u(D,I,G,F);s!==k&&(s=k,c(s.object)),Y=f(D,I,G,H),Y&&m(D,I,G,H),H!==null&&e.update(H,r.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,M(D,F,G,I),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return r.createVertexArray()}function c(D){return r.bindVertexArray(D)}function h(D){return r.deleteVertexArray(D)}function u(D,F,G,I){const H=I.wireframe===!0;let Y=n[F.id];Y===void 0&&(Y={},n[F.id]=Y);const k=D.isInstancedMesh===!0?D.id:0;let oe=Y[k];oe===void 0&&(oe={},Y[k]=oe);let K=oe[G.id];K===void 0&&(K={},oe[G.id]=K);let L=K[H];return L===void 0&&(L=d(l()),K[H]=L),L}function d(D){const F=[],G=[],I=[];for(let H=0;H<t;H++)F[H]=0,G[H]=0,I[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:G,attributeDivisors:I,object:D,attributes:{},index:null}}function f(D,F,G,I){const H=s.attributes,Y=F.attributes;let k=0;const oe=G.getAttributes();for(const K in oe)if(oe[K].location>=0){const A=H[K];let V=Y[K];if(V===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(V=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(V=D.instanceColor)),A===void 0||A.attribute!==V||V&&A.data!==V.data)return!0;k++}return s.attributesNum!==k||s.index!==I}function m(D,F,G,I){const H={},Y=F.attributes;let k=0;const oe=G.getAttributes();for(const K in oe)if(oe[K].location>=0){let A=Y[K];A===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(A=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(A=D.instanceColor));const V={};V.attribute=A,A&&A.data&&(V.data=A.data),H[K]=V,k++}s.attributes=H,s.attributesNum=k,s.index=I}function _(){const D=s.newAttributes;for(let F=0,G=D.length;F<G;F++)D[F]=0}function p(D){g(D,0)}function g(D,F){const G=s.newAttributes,I=s.enabledAttributes,H=s.attributeDivisors;G[D]=1,I[D]===0&&(r.enableVertexAttribArray(D),I[D]=1),H[D]!==F&&(r.vertexAttribDivisor(D,F),H[D]=F)}function v(){const D=s.newAttributes,F=s.enabledAttributes;for(let G=0,I=F.length;G<I;G++)F[G]!==D[G]&&(r.disableVertexAttribArray(G),F[G]=0)}function b(D,F,G,I,H,Y,k){k===!0?r.vertexAttribIPointer(D,F,G,H,Y):r.vertexAttribPointer(D,F,G,I,H,Y)}function M(D,F,G,I){_();const H=I.attributes,Y=G.getAttributes(),k=F.defaultAttributeValues;for(const oe in Y){const K=Y[oe];if(K.location>=0){let L=H[oe];if(L===void 0&&(oe==="instanceMatrix"&&D.instanceMatrix&&(L=D.instanceMatrix),oe==="instanceColor"&&D.instanceColor&&(L=D.instanceColor)),L!==void 0){const A=L.normalized,V=L.itemSize,ie=e.get(L);if(ie===void 0)continue;const z=ie.buffer,Z=ie.type,se=ie.bytesPerElement,ae=Z===r.INT||Z===r.UNSIGNED_INT||L.gpuType===jc;if(L.isInterleavedBufferAttribute){const j=L.data,Me=j.isInterleavedBuffer===!0?j.stride:j.itemSize,Ue=L.offset;if(j.isInstancedInterleavedBuffer||j.isInstancedBufferAttribute){for(let ue=0;ue<K.locationSize;ue++)g(K.location+ue,j.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ue=0;ue<K.locationSize;ue++)p(K.location+ue);r.bindBuffer(r.ARRAY_BUFFER,z);for(let ue=0;ue<K.locationSize;ue++)b(K.location+ue,V/K.locationSize,Z,A,Me*se,(Ue+V/K.locationSize*ue)*se,ae)}else{if(L.isInstancedBufferAttribute){for(let j=0;j<K.locationSize;j++)g(K.location+j,L.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let j=0;j<K.locationSize;j++)p(K.location+j);r.bindBuffer(r.ARRAY_BUFFER,z);for(let j=0;j<K.locationSize;j++)b(K.location+j,V/K.locationSize,Z,A,V*se,V/K.locationSize*j*se,ae)}}else if(k!==void 0){const A=k[oe];if(A!==void 0)switch(A.length){case 2:r.vertexAttrib2fv(K.location,A);break;case 3:r.vertexAttrib3fv(K.location,A);break;case 4:r.vertexAttrib4fv(K.location,A);break;default:r.vertexAttrib1fv(K.location,A)}}}}v()}function y(){R();for(const D in n){const F=n[D];for(const G in F){const I=F[G];for(const H in I){const Y=I[H];for(const k in Y)h(Y[k].object),delete Y[k];delete I[H]}}delete n[D]}}function T(D){if(n[D.id]===void 0)return;const F=n[D.id];for(const G in F){const I=F[G];for(const H in I){const Y=I[H];for(const k in Y)h(Y[k].object),delete Y[k];delete I[H]}}delete n[D.id]}function x(D){for(const F in n){const G=n[F];for(const I in G){const H=G[I];if(H[D.id]===void 0)continue;const Y=H[D.id];for(const k in Y)h(Y[k].object),delete Y[k];delete H[D.id]}}}function S(D){for(const F in n){const G=n[F],I=D.isInstancedMesh===!0?D.id:0,H=G[I];if(H!==void 0){for(const Y in H){const k=H[Y];for(const oe in k)h(k[oe].object),delete k[oe];delete H[Y]}delete G[I],Object.keys(G).length===0&&delete n[F]}}}function R(){P(),a=!0,s!==i&&(s=i,c(s.object))}function P(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:P,dispose:y,releaseStatesOfGeometry:T,releaseStatesOfObject:S,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function Pv(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(r.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Lv(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(x){return!(x!==Zn&&n.convert(x)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){const S=x===di&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Rn&&x!==Hn&&!S&&n.convert(x)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(De("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&De("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),y=r.getParameter(r.MAX_SAMPLES),T=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:M,maxSamples:y,samples:T}}function Iv(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new qi,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,g=r.get(u);if(!i||m===null||m.length===0||s&&!p)s?h(null):c();else{const v=s?0:n,b=v*4;let M=g.clippingState||null;l.value=M,M=h(m,d,b,f);for(let y=0;y!==b;++y)M[y]=t[y];g.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,m!==!0||p===null){const g=f+_*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let b=0,M=f;b!==_;++b,M+=4)a.copy(u[b]).applyMatrix4(v,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}class Eh extends hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new kf(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new qe(5,5,5),s=new Rs({name:"CubemapFromEquirect",uniforms:ur(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vn,blending:er});s.uniforms.tEquirect.value=t;const a=new J(i,s),o=t.minFilter;return t.minFilter===Gn&&(t.minFilter=$t),new Lc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const cd=256,Dv=3,Nv=20,$f=256,Qf=16,Uv=3,Ov=new U,Fv=new Be;class Co{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Lc(1,10,null),this._boxMesh=new J(new qe(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=Ov}=s,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);const u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,m=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(Fv));const p=new Lc(n,i,h);return p.position.copy(o),p.update(l,e),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=m,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ud(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(cd,wf(e))}_fromTexture(e,t){e.mapping===or||e.mapping===ea?this._setSize(e.image.length===0?cd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=hd(e,!1,!1),n=Math.log2(e)-Dv;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=hd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=e,s.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===or||e.mapping===ea?(this._cubemapMaterial===null&&(this._cubemapMaterial=dd()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=ud()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Bv(),this._integrationMaterial=kv());const t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/Qf);for(let a=0;a<=n;a++){const o=Co.lodToRoughness(a,n);if(a>n-Uv)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/($f*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=zv());const n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(s,0,n)}}function hd(r,e,t){return new Eh(r,{minFilter:Gn,generateMipmaps:e,type:di,colorSpace:Nn,depthBuffer:t})}function Ma(r,e,t){return new Rs({name:r,uniforms:e,vertexShader:Ke.cube_vert,fragmentShader:t,side:vn,blending:er,depthTest:!1,depthWrite:!1})}function Bv(){return Ma("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${$f}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function kv(){return Ma("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Qf}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function zv(){return Ma("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Nv}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function ud(){return Ma("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function dd(){return Ma("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Gv(r){let e=new WeakMap,t=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?a(d):s(d)}function s(d){if(d&&d.isTexture){const f=d.mapping;if(f===Jo||f===$o)if(e.has(d)){const m=e.get(d).texture;return o(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const _=new Eh(m.height);return _.fromEquirectangularTexture(r,d),e.set(d,_),d.addEventListener("dispose",c),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const f=d.mapping,m=f===Jo||f===$o,_=f===or||f===ea;if(m||_){let p=t.get(d);const g=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new Co(r)),p=m?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{const v=d.image;return m&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new Co(r)),p=m?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function o(d,f){return f===Jo?d.mapping=or:f===$o&&(d.mapping=ea),d}function l(d){let f=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&f++;return f===m}function c(d){const f=d.target;f.removeEventListener("dispose",c);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function Hv(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&tr("WebGLRenderer: "+n+" extension not supported."),i}}}function Vv(r,e,t,n){const i={},s=new WeakMap,a=new FinalizationRegistry(m=>delete i[m]);function o(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(const p in m.attributes)e.remove(m.attributes[p]);m.removeEventListener("dispose",o),delete i[m.id],a.unregister(m);const _=s.get(m);_&&(e.remove(_),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,_){return i[_.id]!==void 0||(_.addEventListener("dispose",o),i[_.id]=new WeakRef(_),a.register(_,_.id,_),t.memory.geometries++),_}function h(m){const _=m.attributes;for(const p in _)e.update(_[p],r.ARRAY_BUFFER)}function u(m){const _=m.index,p=m.attributes.position;let g=0;if(p===void 0)return;const v=_!==null?_.array.length:p.array.length/3-1,b=p.count>=65535?Lf:Pf,M=new b(Math.ceil(v/3)*6,1),y=M.array;if(_!==null){const x=_.array;g=_.version;for(let S=0,R=0;S<v;S+=3){const P=x[S+0],D=x[S+1],F=x[S+2];y[R++]=P,y[R++]=D,y[R++]=D,y[R++]=F,y[R++]=F,y[R++]=P}}else{g=p.version;for(let x=0,S=0;x<v;x+=3){const R=x+0,P=x+1,D=x+2;y[S++]=R,y[S++]=P,y[S++]=P,y[S++]=D,y[S++]=D,y[S++]=R}}M.version=g;const T=s.get(m);T&&e.remove(T),s.set(m,M)}function d(m){const _=s.get(m);if(_){const p=m.index;p!==null&&_.version<p.version&&u(m)}else u(m);return s.get(m)}function f(){for(const m in i){const _=i[m].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function Wv(r,e,t){let n;function i(u){n=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,d){r.drawElements(n,d,s,u*a),t.update(d,n,1)}function c(u,d,f){f!==0&&(r.drawElementsInstanced(n,d,s,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,u,0,f);let _=0;for(let p=0;p<f;p++)_+=d[p];t.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Xv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:Ge("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function qv(r,e,t){const n=new WeakMap,i=new pt;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let P=function(){S.dispose(),n.delete(o),o.removeEventListener("dispose",P)};var f=P;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let M=0;m===!0&&(M=1),_===!0&&(M=2),p===!0&&(M=3);let y=o.attributes.position.count*M,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const x=new Float32Array(y*T*4*u),S=new Af(x,y,T,u);S.type=Hn,S.needsUpdate=!0;const R=M*4;for(let D=0;D<u;D++){const F=g[D],G=v[D],I=b[D],H=y*T*4*D;for(let Y=0;Y<F.count;Y++){const k=Y*R;m===!0&&(i.fromBufferAttribute(F,Y),x[H+k+0]=i.x,x[H+k+1]=i.y,x[H+k+2]=i.z,x[H+k+3]=0),_===!0&&(i.fromBufferAttribute(G,Y),x[H+k+4]=i.x,x[H+k+5]=i.y,x[H+k+6]=i.z,x[H+k+7]=0),p===!0&&(i.fromBufferAttribute(I,Y),x[H+k+8]=i.x,x[H+k+9]=i.y,x[H+k+10]=i.z,x[H+k+11]=I.itemSize===4?i.w:1)}}d={count:u,texture:S,size:new we(y,T)},n.set(o,d),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let m=0;for(let p=0;p<c.length;p++)m+=c[p];const _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Yv(r,e,t,n,i){let s=new WeakMap;function a(c){const h=i.render.frame,u=c.geometry,d=e.get(c,u);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return d}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const Kv={[of]:"LINEAR_TONE_MAPPING",[lf]:"REINHARD_TONE_MAPPING",[cf]:"CINEON_TONE_MAPPING",[Qc]:"ACES_FILMIC_TONE_MAPPING",[uf]:"AGX_TONE_MAPPING",[df]:"NEUTRAL_TONE_MAPPING",[hf]:"CUSTOM_TONE_MAPPING"};function Zv(r,e,t,n,i,s){const a=new hi(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new Bt;h.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new at([0,2,0,0,2,0],2));const u=new hg({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new J(h,u),f=new Sh(-1,1,1,-1,0,1);let m=null,_=null,p=!1,g,v=null,b=[],M=!1;this.setSize=function(y,T){a.setSize(y,T),o!==null&&o.setSize(y,T),l!==null&&l.setSize(y,T);for(let x=0;x<b.length;x++){const S=b[x];S.setSize&&S.setSize(y,T)}},this.setEffects=function(y){b=y,M=b.length>0&&b[0].isRenderPass===!0;const T=a.width,x=a.height;b.length>0&&o===null&&(o=new hi(T,x,{type:di,depthBuffer:!1,stencilBuffer:!1}),l=new hi(T,x,{type:di,depthBuffer:!1,stencilBuffer:!1}));const S=i===!0&&b.some(R=>R.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new hr(T,x),s===!0&&(c.format=Zi,c.type=lr)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let R=0;R<b.length;R++){const P=b[R];P.setSize&&P.setSize(T,x),S&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(y,T){if(p||y.toneMapping===Ci&&b.length===0)return!1;if(v=T,T!==null){const x=T.width,S=T.height;(a.width!==x||a.height!==S)&&this.setSize(x,S)}return M===!1&&y.setRenderTarget(a),g=y.toneMapping,y.toneMapping=Ci,!0},this.hasRenderPass=function(){return M},this.end=function(y,T){y.toneMapping=g,p=!0;let x=a,S=o;for(let R=0;R<b.length;R++){const P=b[R];P.enabled!==!1&&(P.render(y,S,x,T),P.needsSwap!==!1&&(x=S,S=S===o?l:o))}if(m!==y.outputColorSpace||_!==y.toneMapping){m=y.outputColorSpace,_=y.toneMapping,u.defines={},je.getTransfer(m)===dt&&(u.defines.SRGB_TRANSFER="");const R=Kv[_];R&&(u.defines[R]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,y.setRenderTarget(v),y.render(d,f),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}const jf=new Gt,ep=new hr(1,1),tp=new zf(1),np=new Af,ip=new M0,sp=new kf,fd=[],pd=[],md=new Float32Array(16),gd=new Float32Array(9),_d=new Float32Array(4);function yr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=fd[i];if(s===void 0&&(s=new Float32Array(i),fd[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Ht(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Vt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Vo(r,e){let t=pd[e];t===void 0&&(t=new Int32Array(e),pd[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Jv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function $v(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;r.uniform2fv(this.addr,e),Vt(t,e)}}function Qv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;r.uniform3fv(this.addr,e),Vt(t,e)}}function jv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;r.uniform4fv(this.addr,e),Vt(t,e)}}function eM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;_d.set(n),r.uniformMatrix2fv(this.addr,!1,_d),Vt(t,n)}}function tM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;gd.set(n),r.uniformMatrix3fv(this.addr,!1,gd),Vt(t,n)}}function nM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;md.set(n),r.uniformMatrix4fv(this.addr,!1,md),Vt(t,n)}}function iM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function sM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;r.uniform2iv(this.addr,e),Vt(t,e)}}function rM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;r.uniform3iv(this.addr,e),Vt(t,e)}}function aM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;r.uniform4iv(this.addr,e),Vt(t,e)}}function oM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function lM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;r.uniform2uiv(this.addr,e),Vt(t,e)}}function cM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;r.uniform3uiv(this.addr,e),Vt(t,e)}}function hM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;r.uniform4uiv(this.addr,e),Vt(t,e)}}function Wo(r){return r.version===0&&(r.compareFunction=Tf,r.needsUpdate=!0),r}function uM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?s=Wo(ep):s=jf,t.setTexture2D(e||s,i)}function dM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ip,i)}function fM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=Wo(tp):s=sp,t.setTextureCube(e||s,i)}function pM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||np,i)}function mM(r){switch(r){case 5126:return Jv;case 35664:return $v;case 35665:return Qv;case 35666:return jv;case 35674:return eM;case 35675:return tM;case 35676:return nM;case 5124:case 35670:return iM;case 35667:case 35671:return sM;case 35668:case 35672:return rM;case 35669:case 35673:return aM;case 5125:return oM;case 36294:return lM;case 36295:return cM;case 36296:return hM;case 35678:case 36198:case 36298:case 36306:case 35682:return uM;case 35679:case 36299:case 36307:return dM;case 35680:case 36300:case 36308:case 36293:return fM;case 36289:case 36303:case 36311:case 36292:return pM}}function gM(r,e){r.uniform1fv(this.addr,e)}function _M(r,e){const t=yr(e,this.size,2);r.uniform2fv(this.addr,t)}function xM(r,e){const t=yr(e,this.size,3);r.uniform3fv(this.addr,t)}function vM(r,e){const t=yr(e,this.size,4);r.uniform4fv(this.addr,t)}function MM(r,e){const t=yr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function yM(r,e){const t=yr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function SM(r,e){const t=yr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function bM(r,e){r.uniform1iv(this.addr,e)}function TM(r,e){r.uniform2iv(this.addr,e)}function EM(r,e){r.uniform3iv(this.addr,e)}function wM(r,e){r.uniform4iv(this.addr,e)}function AM(r,e){r.uniform1uiv(this.addr,e)}function RM(r,e){r.uniform2uiv(this.addr,e)}function CM(r,e){r.uniform3uiv(this.addr,e)}function PM(r,e){r.uniform4uiv(this.addr,e)}function LM(r,e,t){const n=this.cache,i=e.length,s=Vo(t,i);Ht(n,s)||(r.uniform1iv(this.addr,s),Vt(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=Wo(ep):a=jf;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function IM(r,e,t){const n=this.cache,i=e.length,s=Vo(t,i);Ht(n,s)||(r.uniform1iv(this.addr,s),Vt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||ip,s[a])}function DM(r,e,t){const n=this.cache,i=e.length,s=Vo(t,i);Ht(n,s)||(r.uniform1iv(this.addr,s),Vt(n,s));let a;this.type===r.SAMPLER_CUBE_SHADOW?a=Wo(tp):a=sp;for(let o=0;o!==i;++o)t.setTextureCube(e[o]||a,s[o])}function NM(r,e,t){const n=this.cache,i=e.length,s=Vo(t,i);Ht(n,s)||(r.uniform1iv(this.addr,s),Vt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||np,s[a])}function UM(r){switch(r){case 5126:return gM;case 35664:return _M;case 35665:return xM;case 35666:return vM;case 35674:return MM;case 35675:return yM;case 35676:return SM;case 5124:case 35670:return bM;case 35667:case 35671:return TM;case 35668:case 35672:return EM;case 35669:case 35673:return wM;case 5125:return AM;case 36294:return RM;case 36295:return CM;case 36296:return PM;case 35678:case 36198:case 36298:case 36306:case 35682:return LM;case 35679:case 36299:case 36307:return IM;case 35680:case 36300:case 36308:case 36293:return DM;case 36289:case 36303:case 36311:case 36292:return NM}}class OM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=mM(t.type)}}class FM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=UM(t.type)}}class BM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Cl=/(\w+)(\])?(\[|\.)?/g;function xd(r,e){r.seq.push(e),r.map[e.id]=e}function kM(r,e,t){const n=r.name,i=n.length;for(Cl.lastIndex=0;;){const s=Cl.exec(n),a=Cl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){xd(t,c===void 0?new OM(o,r,e):new FM(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new BM(o),xd(t,u)),t=u}}}class mo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);kM(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function vd(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const zM=37297;let GM=0;function HM(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Md=new He;function VM(r){je._getMatrix(Md,je.workingColorSpace,r);const e=`mat3( ${Md.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(r)){case bo:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function yd(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+HM(r.getShaderSource(e),o)}else return s}function WM(r,e){const t=VM(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const XM={[of]:"Linear",[lf]:"Reinhard",[cf]:"Cineon",[Qc]:"ACESFilmic",[uf]:"AgX",[df]:"Neutral",[hf]:"Custom"};function qM(r,e){const t=XM[e];return t===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const eo=new U;function YM(){je.getLuminanceCoefficients(eo);const r=eo.x.toFixed(4),e=eo.y.toFixed(4),t=eo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zr).join(`
`)}function ZM(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function JM(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function zr(r){return r!==""}function Sd(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function bd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $M=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ic(r){return r.replace($M,QM)}function QM(r,e){const t=Ke[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Ic(t)}const jM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Td(r){return r.replace(jM,ey)}function ey(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ed(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ty={[Vr]:"SHADOWMAP_TYPE_PCF",[Fr]:"SHADOWMAP_TYPE_VSM"};function ny(r){return ty[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const iy={[ea]:"ENVMAP_MODE_REFRACTION"};function sy(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":iy[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ry={[af]:"ENVMAP_BLENDING_MULTIPLY",[Om]:"ENVMAP_BLENDING_MIX",[Fm]:"ENVMAP_BLENDING_ADD"};function ay(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":ry[r.combine]||"ENVMAP_BLENDING_NONE"}function oy(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=ny(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=sy(t),u=ay(t),d=KM(t),f=ZM(s),m=i.createProgram();let _,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(zr).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(zr).join(`
`),p.length>0&&(p+=`
`)):(_=[Ed(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zr).join(`
`),p=[Ed(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ci?"#define TONE_MAPPING":"",t.toneMapping!==Ci?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Ci?qM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,WM("linearToOutputTexel",t.outputColorSpace),YM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zr).join(`
`)),a=Ic(a),a=Sd(a,t),a=bd(a,t),o=Ic(o),o=Sd(o,t),o=bd(o,t),a=Td(a),o=Td(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===mu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=g+_+a,b=g+p+o,M=vd(i,i.VERTEX_SHADER,v),y=vd(i,i.FRAGMENT_SHADER,b);i.attachShader(m,M),i.attachShader(m,y),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function T(P){if(r.debug.checkShaderErrors){const D=i.getProgramInfoLog(m)||"",F=i.getShaderInfoLog(M)||"",G=i.getShaderInfoLog(y)||"",I=D.trim(),H=F.trim(),Y=G.trim();let k=!0,oe=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,M,y);else{const K=yd(i,M,"vertex"),L=yd(i,y,"fragment");Ge("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+K+`
`+L)}else I!==""?De("WebGLProgram: Program Info Log:",I):(H===""||Y==="")&&(oe=!1);oe&&(P.diagnostics={runnable:k,programLog:I,vertexShader:{log:H,prefix:_},fragmentShader:{log:Y,prefix:p}})}i.deleteShader(M),i.deleteShader(y),x=new mo(i,m),S=JM(i,m)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(m,zM)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=GM++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=y,this}let ly=0;class cy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new hy(e),t.set(e,n)),n}}class hy{constructor(e){this.id=ly++,this.code=e,this.usedTimes=0}}function uy(r){return r===As||r===yo||r===So}function dy(r,e,t,n,i,s){const a=new Rf,o=new cy,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,S,R,P,D,F){const G=P.fog,I=D.geometry,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,k=e.get(x.envMap||H,Y),oe=d[x.type];let K=n.precision;x.precision!==null&&(K=n.getMaxPrecision(x.precision),K!==x.precision&&De("WebGLProgram.getParameters:",x.precision,"not supported, using",K,"instead."));const L=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,A=L!==void 0?L.length:0;let V=0;I.morphAttributes.position!==void 0&&(V=1),I.morphAttributes.normal!==void 0&&(V=2),I.morphAttributes.color!==void 0&&(V=3);let ie,z,Z,se;if(oe){const Se=ai[oe];ie=Se.vertexShader,z=Se.fragmentShader}else{ie=x.vertexShader,z=x.fragmentShader;const Se=o.getVertexShaderStage(x),ut=o.getFragmentShaderStage(x);o.update(x,Se,ut),Z=Se.id,se=ut.id}const ae=r.getRenderTarget(),j=r.state.buffers.depth.getReversed(),Me=D.isInstancedMesh===!0,Ue=D.isBatchedMesh===!0,ue=!!x.map,Le=!!x.matcap,Ie=!!k,de=Ie&&k.isPMREMTexture===!0,$e=!!x.aoMap,Qe=!!x.lightMap,ct=!!x.bumpMap&&x.wireframe===!1,st=!!x.normalMap,Wt=!!x.displacementMap,ht=!!x.emissiveMap,hn=!!x.metalnessMap,un=!!x.roughnessMap,dn=x.anisotropy>0,B=x.clearcoat>0,fn=x.diffuseRoughness>0,gt=x.dispersion>0,Mt=x.retroreflectivity>0,ye=x.iridescence>0,Pt=x.sheen>0,Oe=x.transmission>0,ke=dn&&!!x.anisotropyMap,C=B&&!!x.clearcoatMap,E=B&&!!x.clearcoatNormalMap,X=B&&!!x.clearcoatRoughnessMap,le=fn&&!!x.diffuseRoughnessMap,re=ye&&!!x.iridescenceMap,fe=ye&&!!x.iridescenceThicknessMap,xe=Pt&&!!x.sheenColorMap,ee=Pt&&!!x.sheenRoughnessMap,te=!!x.specularMap,me=!!x.specularColorMap,N=!!x.specularIntensityMap,ne=Oe&&!!x.transmissionMap,Q=Oe&&!!x.thicknessMap,ge=!!x.gradientMap,he=!!x.alphaMap,pe=x.alphaTest>0,Ne=!!x.alphaHash,Ye=!!x.extensions;let ce=Ci;x.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(ce=r.toneMapping);const Fe=de?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,Xe={shaderID:oe,shaderType:x.type,shaderName:x.name,vertexShader:ie,fragmentShader:z,defines:x.defines,customVertexShaderID:Z,customFragmentShaderID:se,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:K,batching:Ue,batchingColor:Ue&&D._colorsTexture!==null,instancing:Me,instancingColor:Me&&D.instanceColor!==null,instancingMorph:Me&&D.morphTexture!==null,outputColorSpace:ae===null?r.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ue,matcap:Le,envMap:Ie,envMapMode:Ie&&k.mapping,envMapPMREM:de,envMapMaxLod:de?Fe.length-1:null,envMapSize:de?Fe[0].width:null,aoMap:$e,lightMap:Qe,bumpMap:ct,normalMap:st,displacementMap:Wt,emissiveMap:ht,normalMapObjectSpace:st&&x.normalMapType===Hm,normalMapTangentSpace:st&&x.normalMapType===Cc,packedNormalMap:st&&x.normalMapType===Cc&&uy(x.normalMap.format),metalnessMap:hn,roughnessMap:un,anisotropy:dn,anisotropyMap:ke,clearcoat:B,clearcoatMap:C,clearcoatNormalMap:E,clearcoatRoughnessMap:X,diffuseRoughness:fn,diffuseRoughnessMap:le,dispersion:gt,retroreflection:Mt,iridescence:ye,iridescenceMap:re,iridescenceThicknessMap:fe,sheen:Pt,sheenColorMap:xe,sheenRoughnessMap:ee,specularMap:te,specularColorMap:me,specularIntensityMap:N,transmission:Oe,transmissionMap:ne,thicknessMap:Q,gradientMap:ge,opaque:x.transparent===!1&&x.blending===Wr&&x.alphaToCoverage===!1,alphaMap:he,alphaTest:pe,alphaHash:Ne,combine:x.combine,mapUv:ue&&f(x.map.channel),aoMapUv:$e&&f(x.aoMap.channel),lightMapUv:Qe&&f(x.lightMap.channel),bumpMapUv:ct&&f(x.bumpMap.channel),normalMapUv:st&&f(x.normalMap.channel),displacementMapUv:Wt&&f(x.displacementMap.channel),emissiveMapUv:ht&&f(x.emissiveMap.channel),metalnessMapUv:hn&&f(x.metalnessMap.channel),roughnessMapUv:un&&f(x.roughnessMap.channel),anisotropyMapUv:ke&&f(x.anisotropyMap.channel),clearcoatMapUv:C&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:E&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:le&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:re&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:ee&&f(x.sheenRoughnessMap.channel),specularMapUv:te&&f(x.specularMap.channel),specularColorMapUv:me&&f(x.specularColorMap.channel),specularIntensityMapUv:N&&f(x.specularIntensityMap.channel),transmissionMapUv:ne&&f(x.transmissionMap.channel),thicknessMapUv:Q&&f(x.thicknessMap.channel),alphaMapUv:he&&f(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(st||dn),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!I.attributes.uv&&(ue||he),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&st===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:j,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:A,morphTextureStride:V,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:F.filter(Se=>Se.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:ce,decodeVideoTexture:ue&&x.map.isVideoTexture===!0&&je.getTransfer(x.map.colorSpace)===dt,decodeVideoTextureEmissive:ht&&x.emissiveMap.isVideoTexture===!0&&je.getTransfer(x.emissiveMap.colorSpace)===dt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===gn,flipSided:x.side===vn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ye&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&x.extensions.multiDraw===!0||Ue)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Xe.vertexUv1s=l.has(1),Xe.vertexUv2s=l.has(2),Xe.vertexUv3s=l.has(3),l.clear(),Xe}function _(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)S.push(R),S.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(p(S,x),g(S,x),S.push(r.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function p(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapPMREM),x.push(S.envMapMaxLod),x.push(S.envMapSize),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.diffuseRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.numLightProbeGrids),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function g(x,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function v(x){const S=d[x.type];let R;if(S){const P=ai[S];R=og.clone(P.uniforms)}else R=x.uniforms;return R}function b(x,S){let R=h.get(S);return R!==void 0?++R.usedTimes:(R=new oy(r,S,x,i),c.push(R),h.set(S,R)),R}function M(x){if(--x.usedTimes===0){const S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function y(x){o.remove(x)}function T(){o.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:v,acquireProgram:b,releaseProgram:M,releaseShaderCache:y,programs:c,dispose:T}}function fy(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function py(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function wd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ad(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,m,_,p,g){let v=r[e];return v===void 0?(v={id:d.id,object:d,geometry:f,material:m,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:p,group:g},r[e]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=m,v.materialVariant=a(d),v.groupOrder=_,v.renderOrder=d.renderOrder,v.z=p,v.group=g),e++,v}function l(d,f,m,_,p,g,v){v.reversedDepth===!0&&(p=-p);const b=o(d,f,m,_,p,g);m.transmission>0?n.push(b):m.transparent===!0?i.push(b):t.push(b)}function c(d,f,m,_,p,g){const v=o(d,f,m,_,p,g);m.transmission>0?n.unshift(v):m.transparent===!0?i.unshift(v):t.unshift(v)}function h(d,f){t.length>1&&t.sort(d||py),n.length>1&&n.sort(f||wd),i.length>1&&i.sort(f||wd)}function u(){for(let d=e,f=r.length;d<f;d++){const m=r[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:u,sort:h}}function my(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Ad,r.set(n,[a])):i>=s.length?(a=new Ad,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function gy(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new Be};break;case"SpotLight":t={position:new U,direction:new U,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new U,halfWidth:new U,halfHeight:new U};break}return r[e.id]=t,t}}}function _y(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let xy=0;function vy(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function My(r){const e=new gy,t=_y(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const i=new U,s=new We,a=new We;function o(c){let h=0,u=0,d=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,m=0,_=0,p=0,g=0,v=0,b=0,M=0,y=0,T=0,x=0,S=0,R=0,P=0;c.sort(vy);for(let F=0,G=c.length;F<G;F++){const I=c[F],H=I.color,Y=I.intensity,k=I.distance;let oe=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===As?oe=I.shadow.map.texture:oe=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=H.r*Y,u+=H.g*Y,d+=H.b*Y;else if(I.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(I.sh.coefficients[K],Y);P++}else if(I.isSunLight){const K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const L=I.shadow,A=t.get(I);A.shadowIntensity=L.intensity,A.shadowBias=L.bias,A.shadowNormalBias=L.normalBias,A.shadowRadius=L.radius,A.shadowMapSize.copy(L.mapSize).multiply(L.getFrameExtents()),n.sunShadow[m]=A,n.sunShadowMap[m]=oe;const V=L.getViewportCount();for(let ie=0;ie<V;ie++)n.sunShadowMatrix[_+ie]=L.getMatrix(ie),n.sunShadowCascade[_+ie]=L._cascadeData[ie];_+=V,m++}n.sun[f]=K,f++}else if(I.isDirectionalLight){const K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const L=I.shadow,A=t.get(I);A.shadowIntensity=L.intensity,A.shadowBias=L.bias,A.shadowNormalBias=L.normalBias,A.shadowRadius=L.radius,A.shadowMapSize=L.mapSize,n.directionalShadow[p]=A,n.directionalShadowMap[p]=oe,n.directionalShadowMatrix[p]=I.shadow.matrix,y++}n.directional[p]=K,p++}else if(I.isSpotLight){const K=e.get(I);K.position.setFromMatrixPosition(I.matrixWorld),K.color.copy(H).multiplyScalar(Y),K.distance=k,K.coneCos=Math.cos(I.angle),K.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),K.decay=I.decay,n.spot[v]=K;const L=I.shadow;if(I.map&&(n.spotLightMap[S]=I.map,S++,L.updateMatrices(I),I.castShadow&&R++),n.spotLightMatrix[v]=L.matrix,I.castShadow){const A=t.get(I);A.shadowIntensity=L.intensity,A.shadowBias=L.bias,A.shadowNormalBias=L.normalBias,A.shadowRadius=L.radius,A.shadowMapSize=L.mapSize,n.spotShadow[v]=A,n.spotShadowMap[v]=oe,x++}v++}else if(I.isRectAreaLight){const K=e.get(I);K.color.copy(H).multiplyScalar(Y),K.halfWidth.set(I.width*.5,0,0),K.halfHeight.set(0,I.height*.5,0),n.rectArea[b]=K,b++}else if(I.isPointLight){const K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),K.distance=I.distance,K.decay=I.decay,I.castShadow){const L=I.shadow,A=t.get(I);A.shadowIntensity=L.intensity,A.shadowBias=L.bias,A.shadowNormalBias=L.normalBias,A.shadowRadius=L.radius,A.shadowMapSize=L.mapSize,A.shadowCameraNear=L.camera.near,A.shadowCameraFar=L.camera.far,n.pointShadow[g]=A,n.pointShadowMap[g]=oe,n.pointShadowMatrix[g]=I.shadow.matrix,T++}n.point[g]=K,g++}else if(I.isHemisphereLight){const K=e.get(I);K.skyColor.copy(I.color).multiplyScalar(Y),K.groundColor.copy(I.groundColor).multiplyScalar(Y),n.hemi[M]=K,M++}}b>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.sunLength!==f||D.directionalLength!==p||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==b||D.hemiLength!==M||D.numSunShadows!==m||D.numDirectionalShadows!==y||D.numPointShadows!==T||D.numSpotShadows!==x||D.numSpotMaps!==S||D.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=p,n.spot.length=v,n.rectArea.length=b,n.point.length=g,n.hemi.length=M,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+S-R,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=P,D.sunLength=f,D.directionalLength=p,D.pointLength=g,D.spotLength=v,D.rectAreaLength=b,D.hemiLength=M,D.numSunShadows=m,D.numDirectionalShadows=y,D.numPointShadows=T,D.numSpotShadows=x,D.numSpotMaps=S,D.numLightProbes=P,n.version=xy++)}function l(c,h){let u=0,d=0,f=0,m=0,_=0,p=0;const g=h.matrixWorldInverse;for(let v=0,b=c.length;v<b;v++){const M=c[v];if(M.isSunLight){const y=n.sun[u];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(g),u++}else if(M.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),d++}else if(M.isSpotLight){const y=n.spot[m];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),m++}else if(M.isRectAreaLight){const y=n.rectArea[_];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),a.identity(),s.copy(M.matrixWorld),s.premultiply(g),a.extractRotation(s),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){const y=n.hemi[p];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(g),p++}}}return{setup:o,setupView:l,state:n}}function Rd(r){const e=new My(r),t=[],n=[],i=[];function s(u){h.camera=u,t.length=0,n.length=0,i.length=0}function a(u){u.isLightProbeGrid?i.push(u):t.push(u)}function o(u){n.push(u)}function l(){e.setup(t),i.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){e.setupView(t,u)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function yy(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Rd(r),e.set(i,[o])):s>=a.length?(o=new Rd(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Sy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,by=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ty=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Ey=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Cd=new We,Nr=new U,Pl=new U;function wy(r,e,t){let n=new oa;const i=new we,s=new we,a=new pt,o=new ug,l=new dg,c={},h=t.maxTextureSize,u={[ns]:vn,[vn]:ns,[gn]:gn},d=new Rs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:Sy,fragmentShader:by}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Bt;m.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new J(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vr;let g=this.type;this.render=function(T,x,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===_m&&(De("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Vr);const R=r.getRenderTarget(),P=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),F=r.state;F.setBlending(er),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const G=g!==this.type;G&&x.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(H=>H.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,H=T.length;I<H;I++){const Y=T[I],k=Y.shadow;if(k===void 0){De("WebGLShadowMap:",Y,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const oe=k.getFrameExtents();i.multiply(oe),s.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/oe.x),i.x=s.x*oe.x,k.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/oe.y),i.y=s.y*oe.y,k.mapSize.y=s.y));const K=r.state.buffers.depth.getReversed();if(k.camera._reversedDepth=K,k.map===null||G===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Fr){if(Y.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new hi(i.x,i.y,{format:As,type:di,minFilter:$t,magFilter:$t,generateMipmaps:!1}),k.map.texture.name=Y.name+".shadowMap",k.map.depthTexture=new hr(i.x,i.y,Hn),k.map.depthTexture.name=Y.name+".shadowMapDepth",k.map.depthTexture.format=ss,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=zt,k.map.depthTexture.magFilter=zt}else Y.isPointLight?(k.map=new Eh(i.x),k.map.depthTexture=new zf(i.x,ui)):(k.map=new hi(i.x,i.y),k.map.depthTexture=new hr(i.x,i.y,ui)),k.map.depthTexture.name=Y.name+".shadowMap",k.map.depthTexture.format=ss,this.type===Vr?(k.map.depthTexture.compareFunction=K?bf:Sf,k.map.depthTexture.minFilter=$t,k.map.depthTexture.magFilter=$t):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=zt,k.map.depthTexture.magFilter=zt);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==i.x||k.map.height!==i.y)&&k.map.setSize(i.x,i.y);const L=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();Y.isPointLight!==!0&&k.updateMatrices(Y,S);const A=k.camera.layers.mask&4294967294?k.camera.layers:S.layers;for(let V=0;V<L;V++){const ie=k.getCamera(V);if(Y.isPointLight){const z=k.camera,Z=k.matrix,se=Y.distance||z.far;se!==z.far&&(z.far=se,z.updateProjectionMatrix()),Nr.setFromMatrixPosition(Y.matrixWorld),z.position.copy(Nr),Pl.copy(z.position),Pl.add(Ty[V]),z.up.copy(Ey[V]),z.lookAt(Pl),z.updateMatrixWorld(),Z.makeTranslation(-Nr.x,-Nr.y,-Nr.z),Cd.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Cd,z.coordinateSystem,z.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)r.setRenderTarget(k.map,V),r.clear();else{V===0&&(r.setRenderTarget(k.map),r.clear());const z=k.getViewport(V);a.set(s.x*z.x,s.y*z.y,s.x*z.z,s.y*z.w),F.viewport(a)}n=k.getFrustum(V),M(x,S,ie,Y,A,this.type)}k.isPointLightShadow!==!0&&this.type===Fr&&v(k,S),k.needsUpdate=!1}g=this.type,p.needsUpdate=!1,r.setRenderTarget(R,P,D)};function v(T,x){const S=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new hi(i.x,i.y,{format:As,type:di}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(x,null,S,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(x,null,S,f,_,null)}function b(T,x,S,R){let P=null;const D=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)P=D;else if(P=S.isPointLight===!0?l:o,r.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const F=P.uuid,G=x.uuid;let I=c[F];I===void 0&&(I={},c[F]=I);let H=I[G];H===void 0&&(H=P.clone(),I[G]=H,x.addEventListener("dispose",y)),P=H}if(P.visible=x.visible,P.wireframe=x.wireframe,R===Fr?P.side=x.shadowSide!==null?x.shadowSide:x.side:P.side=x.shadowSide!==null?x.shadowSide:u[x.side],P.alphaMap=x.alphaMap,P.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,P.map=x.map,P.clipShadows=x.clipShadows,P.clippingPlanes=x.clippingPlanes,P.clipIntersection=x.clipIntersection,P.displacementMap=x.displacementMap,P.displacementScale=x.displacementScale,P.displacementBias=x.displacementBias,P.wireframeLinewidth=x.wireframeLinewidth,P.linewidth=x.linewidth,S.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const F=r.properties.get(P);F.light=S}return P}function M(T,x,S,R,P,D){if(T.visible===!1)return;if(T.layers.test(P)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&D===Fr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);const I=e.update(T),H=T.material;if(Array.isArray(H)){const Y=I.groups;for(let k=0,oe=Y.length;k<oe;k++){const K=Y[k],L=H[K.materialIndex];if(L&&L.visible){const A=b(T,L,R,D);T.onBeforeShadow(r,T,x,S,I,A,K),r.renderBufferDirect(S,null,I,A,T,K),T.onAfterShadow(r,T,x,S,I,A,K)}}}else if(H.visible){const Y=b(T,H,R,D);T.onBeforeShadow(r,T,x,S,I,Y,null),r.renderBufferDirect(S,null,I,Y,T,null),T.onAfterShadow(r,T,x,S,I,Y,null)}}const G=T.children;for(let I=0,H=G.length;I<H;I++)M(G[I],x,S,R,P,D)}function y(T){T.target.removeEventListener("dispose",y);for(const S in c){const R=c[S],P=T.target.uuid;P in R&&(R[P].dispose(),delete R[P])}}}function Ay(r,e){function t(){let N=!1;const ne=new pt;let Q=null;const ge=new pt(0,0,0,0);return{setMask:function(he){Q!==he&&!N&&(r.colorMask(he,he,he,he),Q=he)},setLocked:function(he){N=he},setClear:function(he,pe,Ne,Ye,ce){ce===!0&&(he*=Ye,pe*=Ye,Ne*=Ye),ne.set(he,pe,Ne,Ye),ge.equals(ne)===!1&&(r.clearColor(he,pe,Ne,Ye),ge.copy(ne))},reset:function(){N=!1,Q=null,ge.set(-1,0,0,0)}}}function n(){let N=!1,ne=!1,Q=null,ge=null,he=null;return{setReversed:function(pe){if(ne!==pe){const Ne=e.get("EXT_clip_control");pe?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),ne=pe;const Ye=he;he=null,this.setClear(Ye)}},getReversed:function(){return ne},setTest:function(pe){pe?j(r.DEPTH_TEST):Me(r.DEPTH_TEST)},setMask:function(pe){Q!==pe&&!N&&(r.depthMask(pe),Q=pe)},setFunc:function(pe){if(ne&&(pe=jm[pe]),ge!==pe){switch(pe){case Xl:r.depthFunc(r.NEVER);break;case ql:r.depthFunc(r.ALWAYS);break;case Yl:r.depthFunc(r.LESS);break;case jr:r.depthFunc(r.LEQUAL);break;case Kl:r.depthFunc(r.EQUAL);break;case Zl:r.depthFunc(r.GEQUAL);break;case Jl:r.depthFunc(r.GREATER);break;case $l:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ge=pe}},setLocked:function(pe){N=pe},setClear:function(pe){he!==pe&&(he=pe,ne&&(pe=1-pe),r.clearDepth(pe))},reset:function(){N=!1,Q=null,ge=null,he=null,ne=!1}}}function i(){let N=!1,ne=null,Q=null,ge=null,he=null,pe=null,Ne=null,Ye=null,ce=null;return{setTest:function(Fe){N||(Fe?j(r.STENCIL_TEST):Me(r.STENCIL_TEST))},setMask:function(Fe){ne!==Fe&&!N&&(r.stencilMask(Fe),ne=Fe)},setFunc:function(Fe,Xe,Se){(Q!==Fe||ge!==Xe||he!==Se)&&(r.stencilFunc(Fe,Xe,Se),Q=Fe,ge=Xe,he=Se)},setOp:function(Fe,Xe,Se){(pe!==Fe||Ne!==Xe||Ye!==Se)&&(r.stencilOp(Fe,Xe,Se),pe=Fe,Ne=Xe,Ye=Se)},setLocked:function(Fe){N=Fe},setClear:function(Fe){ce!==Fe&&(r.clearStencil(Fe),ce=Fe)},reset:function(){N=!1,ne=null,Q=null,ge=null,he=null,pe=null,Ne=null,Ye=null,ce=null}}}const s=new t,a=new n,o=new i;let l={};const c=new WeakMap;let h={},u={},d={},f=new WeakMap,m=[],_=null,p=!1,g=null,v=null,b=null,M=null,y=null,T=null,x=null,S=new Be(0,0,0),R=0,P=!1,D=null,F=null,G=null,I=null,H=null;const Y=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,oe=0;const K=r.getParameter(r.VERSION);K.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(K)[1]),k=oe>=1):K.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),k=oe>=2);let L=null,A={};const V=r.getParameter(r.SCISSOR_BOX),ie=r.getParameter(r.VIEWPORT),z=new pt().fromArray(V),Z=new pt().fromArray(ie);function se(N,ne,Q,ge){const he=new Uint8Array(4),pe=r.createTexture();r.bindTexture(N,pe),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ne=0;Ne<Q;Ne++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(ne,0,r.RGBA,1,1,ge,0,r.RGBA,r.UNSIGNED_BYTE,he):r.texImage2D(ne+Ne,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,he);return pe}const ae={};ae[r.TEXTURE_2D]=se(r.TEXTURE_2D,r.TEXTURE_2D,1),ae[r.TEXTURE_CUBE_MAP]=se(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[r.TEXTURE_2D_ARRAY]=se(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ae[r.TEXTURE_3D]=se(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(r.DEPTH_TEST),a.setFunc(jr),ct(!1),st(ou),j(r.CULL_FACE),$e(er);function j(N){h[N]!==!0&&(r.enable(N),h[N]=!0)}function Me(N){h[N]!==!1&&(r.disable(N),h[N]=!1)}function Ue(N,ne){return d[N]!==ne?(r.bindFramebuffer(N,ne),d[N]=ne,N===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ne),N===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ne),!0):!1}function ue(N,ne){let Q=m,ge=!1;if(N){Q=f.get(ne),Q===void 0&&(Q=[],f.set(ne,Q));const he=N.textures;if(Q.length!==he.length||Q[0]!==r.COLOR_ATTACHMENT0){for(let pe=0,Ne=he.length;pe<Ne;pe++)Q[pe]=r.COLOR_ATTACHMENT0+pe;Q.length=he.length,ge=!0}}else Q[0]!==r.BACK&&(Q[0]=r.BACK,ge=!0);ge&&r.drawBuffers(Q)}function Le(N){return _!==N?(r.useProgram(N),_=N,!0):!1}const Ie={[Js]:r.FUNC_ADD,[vm]:r.FUNC_SUBTRACT,[Mm]:r.FUNC_REVERSE_SUBTRACT};Ie[ym]=r.MIN,Ie[Sm]=r.MAX;const de={[bm]:r.ZERO,[Tm]:r.ONE,[Em]:r.SRC_COLOR,[sf]:r.SRC_ALPHA,[Lm]:r.SRC_ALPHA_SATURATE,[Cm]:r.DST_COLOR,[Am]:r.DST_ALPHA,[wm]:r.ONE_MINUS_SRC_COLOR,[rf]:r.ONE_MINUS_SRC_ALPHA,[Pm]:r.ONE_MINUS_DST_COLOR,[Rm]:r.ONE_MINUS_DST_ALPHA,[Im]:r.CONSTANT_COLOR,[Dm]:r.ONE_MINUS_CONSTANT_COLOR,[Nm]:r.CONSTANT_ALPHA,[Um]:r.ONE_MINUS_CONSTANT_ALPHA};function $e(N,ne,Q,ge,he,pe,Ne,Ye,ce,Fe){if(N===er){p===!0&&(Me(r.BLEND),p=!1);return}if(p===!1&&(j(r.BLEND),p=!0),N!==xm){if(N!==g||Fe!==P){if((v!==Js||y!==Js)&&(r.blendEquation(r.FUNC_ADD),v=Js,y=Js),Fe)switch(N){case Wr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case vo:r.blendFunc(r.ONE,r.ONE);break;case lu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case cu:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ge("WebGLState: Invalid blending: ",N);break}else switch(N){case Wr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case vo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case lu:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cu:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",N);break}b=null,M=null,T=null,x=null,S.set(0,0,0),R=0,g=N,P=Fe}return}he=he||ne,pe=pe||Q,Ne=Ne||ge,(ne!==v||he!==y)&&(r.blendEquationSeparate(Ie[ne],Ie[he]),v=ne,y=he),(Q!==b||ge!==M||pe!==T||Ne!==x)&&(r.blendFuncSeparate(de[Q],de[ge],de[pe],de[Ne]),b=Q,M=ge,T=pe,x=Ne),(Ye.equals(S)===!1||ce!==R)&&(r.blendColor(Ye.r,Ye.g,Ye.b,ce),S.copy(Ye),R=ce),g=N,P=!1}function Qe(N,ne){N.side===gn?Me(r.CULL_FACE):j(r.CULL_FACE);let Q=N.side===vn;ne&&(Q=!Q),ct(Q),N.blending===Wr&&N.transparent===!1?$e(er):$e(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const ge=N.stencilWrite;o.setTest(ge),ge&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ht(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?j(r.SAMPLE_ALPHA_TO_COVERAGE):Me(r.SAMPLE_ALPHA_TO_COVERAGE)}function ct(N){D!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),D=N)}function st(N){N!==mm?(j(r.CULL_FACE),N!==F&&(N===ou?r.cullFace(r.BACK):N===gm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Me(r.CULL_FACE),F=N}function Wt(N){N!==G&&(k&&r.lineWidth(N),G=N)}function ht(N,ne,Q){N?(j(r.POLYGON_OFFSET_FILL),(I!==ne||H!==Q)&&(I=ne,H=Q,a.getReversed()&&(ne=-ne,Q=-Q),r.polygonOffset(ne,Q))):Me(r.POLYGON_OFFSET_FILL)}function hn(N){N?j(r.SCISSOR_TEST):Me(r.SCISSOR_TEST)}function un(N){N===void 0&&(N=r.TEXTURE0+Y-1),L!==N&&(r.activeTexture(N),L=N)}function dn(N,ne,Q){Q===void 0&&(L===null?Q=r.TEXTURE0+Y-1:Q=L);let ge=A[Q];ge===void 0&&(ge={type:void 0,texture:void 0},A[Q]=ge),(ge.type!==N||ge.texture!==ne)&&(L!==Q&&(r.activeTexture(Q),L=Q),r.bindTexture(N,ne||ae[N]),ge.type=N,ge.texture=ne)}function B(){const N=A[L];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function fn(){try{r.compressedTexImage2D(...arguments)}catch(N){Ge("WebGLState:",N)}}function gt(){try{r.compressedTexImage3D(...arguments)}catch(N){Ge("WebGLState:",N)}}function Mt(){try{r.texSubImage2D(...arguments)}catch(N){Ge("WebGLState:",N)}}function ye(){try{r.texSubImage3D(...arguments)}catch(N){Ge("WebGLState:",N)}}function Pt(){try{r.compressedTexSubImage2D(...arguments)}catch(N){Ge("WebGLState:",N)}}function Oe(){try{r.compressedTexSubImage3D(...arguments)}catch(N){Ge("WebGLState:",N)}}function ke(){try{r.texStorage2D(...arguments)}catch(N){Ge("WebGLState:",N)}}function C(){try{r.texStorage3D(...arguments)}catch(N){Ge("WebGLState:",N)}}function E(){try{r.texImage2D(...arguments)}catch(N){Ge("WebGLState:",N)}}function X(){try{r.texImage3D(...arguments)}catch(N){Ge("WebGLState:",N)}}function le(N){return u[N]!==void 0?u[N]:r.getParameter(N)}function re(N,ne){u[N]!==ne&&(r.pixelStorei(N,ne),u[N]=ne)}function fe(N){z.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),z.copy(N))}function xe(N){Z.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),Z.copy(N))}function ee(N,ne){let Q=c.get(ne);Q===void 0&&(Q=new WeakMap,c.set(ne,Q));let ge=Q.get(N);ge===void 0&&(ge=r.getUniformBlockIndex(ne,N.name),r.uniformBlockBinding(ne,ge,ge),Q.set(N,ge))}function te(N,ne,Q){const he=c.get(ne).get(N);l[he]!==Q&&(r.bindBufferBase(r.UNIFORM_BUFFER,he,Q),l[he]=Q)}function me(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},u={},L=null,A={},d={},l={},f=new WeakMap,m=[],_=null,p=!1,g=null,v=null,b=null,M=null,y=null,T=null,x=null,S=new Be(0,0,0),R=0,P=!1,D=null,F=null,G=null,I=null,H=null,z.set(0,0,r.canvas.width,r.canvas.height),Z.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:j,disable:Me,bindFramebuffer:Ue,drawBuffers:ue,useProgram:Le,setBlending:$e,setMaterial:Qe,setFlipSided:ct,setCullFace:st,setLineWidth:Wt,setPolygonOffset:ht,setScissorTest:hn,activeTexture:un,bindTexture:dn,unbindTexture:B,compressedTexImage2D:fn,compressedTexImage3D:gt,texImage2D:E,texImage3D:X,pixelStorei:re,getParameter:le,updateUBOMapping:ee,uniformBlockBinding:te,texStorage2D:ke,texStorage3D:C,texSubImage2D:Mt,texSubImage3D:ye,compressedTexSubImage2D:Pt,compressedTexSubImage3D:Oe,scissor:fe,viewport:xe,reset:me}}function Ry(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new we,h=new WeakMap,u=new Set;let d;const f=new WeakMap,m=new Set,_=new FinalizationRegistry(C=>m.delete(C));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,E){return p?new OffscreenCanvas(C,E):ra("canvas")}function v(C,E,X){let le=1;const re=ke(C);if((re.width>X||re.height>X)&&(le=X/Math.max(re.width,re.height)),le<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const fe=Math.floor(le*re.width),xe=Math.floor(le*re.height);d===void 0&&(d=g(fe,xe));const ee=E?g(fe,xe):d;return ee.width=fe,ee.height=xe,ee.getContext("2d").drawImage(C,0,0,fe,xe),De("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+fe+"x"+xe+")."),ee}else return"data"in C&&De("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),C;return C}function b(C){return C.generateMipmaps}function M(C){r.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function T(C,E,X,le,re,fe=!1){if(C!==null){if(r[C]!==void 0)return r[C];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let xe;le&&(xe=e.get("EXT_texture_norm16"),xe||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=E;if(E===r.RED&&(X===r.FLOAT&&(ee=r.R32F),X===r.HALF_FLOAT&&(ee=r.R16F),X===r.UNSIGNED_BYTE&&(ee=r.R8),X===r.UNSIGNED_SHORT&&xe&&(ee=xe.R16_EXT),X===r.SHORT&&xe&&(ee=xe.R16_SNORM_EXT)),E===r.RED_INTEGER&&(X===r.UNSIGNED_BYTE&&(ee=r.R8UI),X===r.UNSIGNED_SHORT&&(ee=r.R16UI),X===r.UNSIGNED_INT&&(ee=r.R32UI),X===r.BYTE&&(ee=r.R8I),X===r.SHORT&&(ee=r.R16I),X===r.INT&&(ee=r.R32I)),E===r.RG&&(X===r.FLOAT&&(ee=r.RG32F),X===r.HALF_FLOAT&&(ee=r.RG16F),X===r.UNSIGNED_BYTE&&(ee=r.RG8),X===r.UNSIGNED_SHORT&&xe&&(ee=xe.RG16_EXT),X===r.SHORT&&xe&&(ee=xe.RG16_SNORM_EXT)),E===r.RG_INTEGER&&(X===r.UNSIGNED_BYTE&&(ee=r.RG8UI),X===r.UNSIGNED_SHORT&&(ee=r.RG16UI),X===r.UNSIGNED_INT&&(ee=r.RG32UI),X===r.BYTE&&(ee=r.RG8I),X===r.SHORT&&(ee=r.RG16I),X===r.INT&&(ee=r.RG32I)),E===r.RGB_INTEGER&&(X===r.UNSIGNED_BYTE&&(ee=r.RGB8UI),X===r.UNSIGNED_SHORT&&(ee=r.RGB16UI),X===r.UNSIGNED_INT&&(ee=r.RGB32UI),X===r.BYTE&&(ee=r.RGB8I),X===r.SHORT&&(ee=r.RGB16I),X===r.INT&&(ee=r.RGB32I)),E===r.RGBA_INTEGER&&(X===r.UNSIGNED_BYTE&&(ee=r.RGBA8UI),X===r.UNSIGNED_SHORT&&(ee=r.RGBA16UI),X===r.UNSIGNED_INT&&(ee=r.RGBA32UI),X===r.BYTE&&(ee=r.RGBA8I),X===r.SHORT&&(ee=r.RGBA16I),X===r.INT&&(ee=r.RGBA32I)),E===r.RGB&&(X===r.UNSIGNED_SHORT&&xe&&(ee=xe.RGB16_EXT),X===r.SHORT&&xe&&(ee=xe.RGB16_SNORM_EXT),X===r.UNSIGNED_INT_5_9_9_9_REV&&(ee=r.RGB9_E5),X===r.UNSIGNED_INT_10F_11F_11F_REV&&(ee=r.R11F_G11F_B10F)),E===r.RGBA){const te=fe?bo:je.getTransfer(re);X===r.FLOAT&&(ee=r.RGBA32F),X===r.HALF_FLOAT&&(ee=r.RGBA16F),X===r.UNSIGNED_BYTE&&(ee=te===dt?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT&&xe&&(ee=xe.RGBA16_EXT),X===r.SHORT&&xe&&(ee=xe.RGBA16_SNORM_EXT),X===r.UNSIGNED_SHORT_4_4_4_4&&(ee=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(ee=r.RGB5_A1)}return(ee===r.R16F||ee===r.R32F||ee===r.RG16F||ee===r.RG32F||ee===r.RGBA16F||ee===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function x(C,E){let X;return C?E===null||E===ui||E===lr?X=r.DEPTH24_STENCIL8:E===Hn?X=r.DEPTH32F_STENCIL8:E===ta&&(X=r.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ui||E===lr?X=r.DEPTH_COMPONENT24:E===Hn?X=r.DEPTH_COMPONENT32F:E===ta&&(X=r.DEPTH_COMPONENT16),X}function S(C,E){return b(C)===!0||C.isFramebufferTexture&&C.minFilter!==zt&&C.minFilter!==$t?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function R(C){const E=new WeakRef(C);n.get(C).__ref=E,m.add(E),_.register(C,E,E)}function P(C){const E=n.get(C).__ref;E!==void 0&&(m.delete(E),_.unregister(E))}function D(C){G(C.target)}function F(C){I(C.target)}function G(C){C.removeEventListener("dispose",D),P(C),Y(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&u.delete(C)}function I(C){C.removeEventListener("dispose",F),P(C),oe(C)}function H(){for(const C of m){const E=C.deref();E!==void 0&&(E.isRenderTarget===!0?I(E):G(E))}m.clear(),u.clear()}function Y(C){const E=n.get(C);if(E.__webglInit===void 0)return;const X=C.source,le=f.get(X);if(le){const re=le[E.__cacheKey];re.usedTimes--,re.usedTimes===0&&k(C),Object.keys(le).length===0&&f.delete(X)}n.remove(C)}function k(C){const E=n.get(C);r.deleteTexture(E.__webglTexture);const X=C.source,le=f.get(X);delete le[E.__cacheKey],a.memory.textures--}function oe(C){const E=n.get(C);E.__depthDisposeCallback&&E.__depthDisposeCallback();const X=C.depthTexture;if(X&&X.renderTarget===C&&G(X),C.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(E.__webglFramebuffer[re]))for(let fe=0;fe<E.__webglFramebuffer[re].length;fe++)r.deleteFramebuffer(E.__webglFramebuffer[re][fe]);else r.deleteFramebuffer(E.__webglFramebuffer[re]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[re])}else{if(Array.isArray(E.__webglFramebuffer))for(let re=0;re<E.__webglFramebuffer.length;re++)r.deleteFramebuffer(E.__webglFramebuffer[re]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let re=0;re<E.__webglColorRenderbuffer.length;re++)E.__webglColorRenderbuffer[re]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[re]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const le=C.textures;for(let re=0,fe=le.length;re<fe;re++){const xe=n.get(le[re]);xe.__webglTexture&&(r.deleteTexture(xe.__webglTexture),a.memory.textures--),n.remove(le[re])}n.remove(C)}let K=0;function L(){K=0}function A(){return K}function V(C){K=C}function ie(){const C=K;return C>=i.maxTextures&&De("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),K+=1,C}function z(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.mipmapsAutoUpdate),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function Z(C,E){const X=n.get(C);if(C.isVideoTexture&&Pt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&X.__version!==C.version){const le=C.image;if(le===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{Qe(X,C,E);return}}else C.isExternalTexture&&(X.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+E)}function se(C,E){const X=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){Qe(X,C,E);return}else C.isExternalTexture&&(X.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+E)}function ae(C,E){const X=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){Qe(X,C,E);return}t.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+E)}function j(C,E){const X=n.get(C);if(C.version>0&&X.__version!==C.version){ct(X,C,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+E)}const Me={[is]:r.REPEAT,[li]:r.CLAMP_TO_EDGE,[Mo]:r.MIRRORED_REPEAT},Ue={[zt]:r.NEAREST,[pf]:r.NEAREST_MIPMAP_NEAREST,[Br]:r.NEAREST_MIPMAP_LINEAR,[$t]:r.LINEAR,[ao]:r.LINEAR_MIPMAP_NEAREST,[Gn]:r.LINEAR_MIPMAP_LINEAR},ue={[Wm]:r.NEVER,[Tf]:r.ALWAYS,[Xm]:r.LESS,[Sf]:r.LEQUAL,[qm]:r.EQUAL,[bf]:r.GEQUAL,[Ym]:r.GREATER,[Km]:r.NOTEQUAL};function Le(C,E){if(E.type===Hn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===$t||E.magFilter===ao||E.magFilter===Br||E.magFilter===Gn||E.minFilter===$t||E.minFilter===ao||E.minFilter===Br||E.minFilter===Gn)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,Me[E.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,Me[E.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,Me[E.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,Ue[E.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,Ue[E.minFilter]),E.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,ue[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===zt||E.minFilter!==Br&&E.minFilter!==Gn||E.type===Hn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Ie(C,E){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",D),R(E));const le=E.source;let re=f.get(le);re===void 0&&(re={},f.set(le,re));const fe=z(E);if(fe!==C.__cacheKey){re[fe]===void 0&&(re[fe]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,X=!0),re[fe].usedTimes++;const xe=re[C.__cacheKey];xe!==void 0&&(re[C.__cacheKey].usedTimes--,xe.usedTimes===0&&k(E)),C.__cacheKey=fe,C.__webglTexture=re[fe].texture}return X}function de(C,E,X){return Math.floor(Math.floor(C/X)/E)}function $e(C,E,X,le){const fe=C.updateRanges;if(fe.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,X,le,E.data);else{fe.sort((N,ne)=>N.start-ne.start);let xe=0;for(let N=1;N<fe.length;N++){const ne=fe[xe],Q=fe[N],ge=ne.start+ne.count,he=de(Q.start,E.width,4),pe=de(ne.start,E.width,4);Q.start<=ge+1&&he===pe&&de(Q.start+Q.count-1,E.width,4)===he?ne.count=Math.max(ne.count,Q.start+Q.count-ne.start):(++xe,fe[xe]=Q)}fe.length=xe+1;const ee=t.getParameter(r.UNPACK_ROW_LENGTH),te=t.getParameter(r.UNPACK_SKIP_PIXELS),me=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let N=0,ne=fe.length;N<ne;N++){const Q=fe[N],ge=Math.floor(Q.start/4),he=Math.ceil(Q.count/4),pe=ge%E.width,Ne=Math.floor(ge/E.width),Ye=he,ce=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(r.UNPACK_SKIP_ROWS,Ne),t.texSubImage2D(r.TEXTURE_2D,0,pe,Ne,Ye,ce,X,le,E.data)}C.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,ee),t.pixelStorei(r.UNPACK_SKIP_PIXELS,te),t.pixelStorei(r.UNPACK_SKIP_ROWS,me)}}function Qe(C,E,X){let le=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(le=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(le=r.TEXTURE_3D);const re=Ie(C,E),fe=E.source;t.bindTexture(le,C.__webglTexture,r.TEXTURE0+X);const xe=n.get(fe);if(fe.version!==xe.__version||re===!0){if(t.activeTexture(r.TEXTURE0+X),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ce=je.getPrimaries(je.workingColorSpace),Fe=E.colorSpace===Ki?null:je.getPrimaries(E.colorSpace),Xe=E.colorSpace===Ki||ce===Fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe)}t.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let te=v(E.image,!1,i.maxTextureSize);te=Oe(E,te);const me=s.convert(E.format,E.colorSpace),N=s.convert(E.type);let ne=T(E.internalFormat,me,N,E.normalized,E.colorSpace,E.isVideoTexture);Le(le,E);let Q;const ge=E.mipmaps,he=E.isVideoTexture!==!0,pe=xe.__version===void 0||re===!0,Ne=fe.dataReady,Ye=S(E,te);if(E.isDepthTexture)ne=x(E.format===Zi,E.type),pe&&(he?t.texStorage2D(r.TEXTURE_2D,1,ne,te.width,te.height):t.texImage2D(r.TEXTURE_2D,0,ne,te.width,te.height,0,me,N,null));else if(E.isDataTexture)if(ge.length>0){he&&pe&&t.texStorage2D(r.TEXTURE_2D,Ye,ne,ge[0].width,ge[0].height);for(let ce=0,Fe=ge.length;ce<Fe;ce++)Q=ge[ce],he?Ne&&t.texSubImage2D(r.TEXTURE_2D,ce,0,0,Q.width,Q.height,me,N,Q.data):t.texImage2D(r.TEXTURE_2D,ce,ne,Q.width,Q.height,0,me,N,Q.data);E.generateMipmaps=!1}else he?(pe&&t.texStorage2D(r.TEXTURE_2D,Ye,ne,te.width,te.height),Ne&&$e(E,te,me,N)):t.texImage2D(r.TEXTURE_2D,0,ne,te.width,te.height,0,me,N,te.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){he&&pe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ye,ne,ge[0].width,ge[0].height,te.depth);for(let ce=0,Fe=ge.length;ce<Fe;ce++)if(Q=ge[ce],E.format!==Zn)if(me!==null)if(he){if(Ne)if(E.layerUpdates.size>0){const Xe=ld(Q.width,Q.height,E.format,E.type);for(const Se of E.layerUpdates){const ut=Q.data.subarray(Se*Xe/Q.data.BYTES_PER_ELEMENT,(Se+1)*Xe/Q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ce,0,0,Se,Q.width,Q.height,1,me,ut)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ce,0,0,0,Q.width,Q.height,te.depth,me,Q.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ce,ne,Q.width,Q.height,te.depth,0,Q.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else he?Ne&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ce,0,0,0,Q.width,Q.height,te.depth,me,N,Q.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ce,ne,Q.width,Q.height,te.depth,0,me,N,Q.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{he&&pe&&t.texStorage2D(r.TEXTURE_2D,Ye,ne,ge[0].width,ge[0].height);for(let ce=0,Fe=ge.length;ce<Fe;ce++)Q=ge[ce],E.format!==Zn?me!==null?he?Ne&&t.compressedTexSubImage2D(r.TEXTURE_2D,ce,0,0,Q.width,Q.height,me,Q.data):t.compressedTexImage2D(r.TEXTURE_2D,ce,ne,Q.width,Q.height,0,Q.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?Ne&&t.texSubImage2D(r.TEXTURE_2D,ce,0,0,Q.width,Q.height,me,N,Q.data):t.texImage2D(r.TEXTURE_2D,ce,ne,Q.width,Q.height,0,me,N,Q.data)}else if(E.isDataArrayTexture)if(he){if(pe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ye,ne,te.width,te.height,te.depth),Ne)if(E.layerUpdates.size>0){const ce=ld(te.width,te.height,E.format,E.type);for(const Fe of E.layerUpdates){const Xe=te.data.subarray(Fe*ce/te.data.BYTES_PER_ELEMENT,(Fe+1)*ce/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Fe,te.width,te.height,1,me,N,Xe)}E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,me,N,te.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ne,te.width,te.height,te.depth,0,me,N,te.data);else if(E.isData3DTexture)he?(pe&&t.texStorage3D(r.TEXTURE_3D,Ye,ne,te.width,te.height,te.depth),Ne&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,me,N,te.data)):t.texImage3D(r.TEXTURE_3D,0,ne,te.width,te.height,te.depth,0,me,N,te.data);else if(E.isFramebufferTexture){if(pe)if(he)t.texStorage2D(r.TEXTURE_2D,Ye,ne,te.width,te.height);else{let ce=te.width,Fe=te.height;for(let Xe=0;Xe<Ye;Xe++)t.texImage2D(r.TEXTURE_2D,Xe,ne,ce,Fe,0,me,N,null),ce>>=1,Fe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){const ce=r.canvas;if(ce.hasAttribute("layoutsubtree")||ce.setAttribute("layoutsubtree","true"),te.parentNode!==ce){ce.appendChild(te),u.add(E),ce.onpaint=Fe=>{const Xe=Fe.changedElements;for(const Se of u)Xe.includes(Se.image)&&(Se.needsUpdate=!0)},ce.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,te);else{const Xe=r.RGBA,Se=r.RGBA,ut=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Xe,Se,ut,te)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ge.length>0){if(he&&pe){const ce=ke(ge[0]);t.texStorage2D(r.TEXTURE_2D,Ye,ne,ce.width,ce.height)}for(let ce=0,Fe=ge.length;ce<Fe;ce++)Q=ge[ce],he?Ne&&t.texSubImage2D(r.TEXTURE_2D,ce,0,0,me,N,Q):t.texImage2D(r.TEXTURE_2D,ce,ne,me,N,Q);E.generateMipmaps=!1}else if(he){if(pe){const ce=ke(te);t.texStorage2D(r.TEXTURE_2D,Ye,ne,ce.width,ce.height)}Ne&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,me,N,te)}else t.texImage2D(r.TEXTURE_2D,0,ne,me,N,te);b(E)&&E.mipmapsAutoUpdate===!0&&M(le),xe.__version=fe.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function ct(C,E,X){if(E.image.length!==6)return;const le=Ie(C,E),re=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+X);const fe=n.get(re);if(re.version!==fe.__version||le===!0){t.activeTexture(r.TEXTURE0+X);const xe=je.getPrimaries(je.workingColorSpace),ee=E.colorSpace===Ki?null:je.getPrimaries(E.colorSpace),te=E.colorSpace===Ki||xe===ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const me=E.isCompressedTexture||E.image[0].isCompressedTexture,N=E.image[0]&&E.image[0].isDataTexture,ne=[];for(let Se=0;Se<6;Se++)!me&&!N?ne[Se]=v(E.image[Se],!0,i.maxCubemapSize):ne[Se]=N?E.image[Se].image:E.image[Se],ne[Se]=Oe(E,ne[Se]);const Q=ne[0],ge=s.convert(E.format,E.colorSpace),he=s.convert(E.type);let pe=T(E.internalFormat,ge,he,E.normalized,E.colorSpace);const Ne=E.isVideoTexture!==!0,Ye=fe.__version===void 0||le===!0,ce=re.dataReady;let Fe=S(E,Q);Le(r.TEXTURE_CUBE_MAP,E);let Xe;if(E.isDepthTexture){if(pe=x(E.format===Zi,E.type),Ye)if(Ne)t.texStorage2D(r.TEXTURE_CUBE_MAP,1,pe,Q.width,Q.height);else for(let Se=0;Se<6;Se++)t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,pe,Q.width,Q.height,0,ge,he,null)}else if(me){Ne&&Ye&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Fe,pe,Q.width,Q.height);for(let Se=0;Se<6;Se++){Xe=ne[Se].mipmaps;for(let ut=0;ut<Xe.length;ut++){const Xt=Xe[ut];E.format!==Zn?ge!==null?Ne?ce&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ut,0,0,Xt.width,Xt.height,ge,Xt.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ut,pe,Xt.width,Xt.height,0,Xt.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ut,0,0,Xt.width,Xt.height,ge,he,Xt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ut,pe,Xt.width,Xt.height,0,ge,he,Xt.data)}}}else{if(Xe=E.mipmaps,Ne&&Ye){Xe.length>0&&Fe++;const Se=ke(ne[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Fe,pe,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(N){Ne?ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,ne[Se].width,ne[Se].height,ge,he,ne[Se].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,pe,ne[Se].width,ne[Se].height,0,ge,he,ne[Se].data);for(let ut=0;ut<Xe.length;ut++){const Bi=Xe[ut].image[Se].image;Ne?ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ut+1,0,0,Bi.width,Bi.height,ge,he,Bi.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ut+1,pe,Bi.width,Bi.height,0,ge,he,Bi.data)}}else{Ne?ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,ge,he,ne[Se]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,pe,ge,he,ne[Se]);for(let ut=0;ut<Xe.length;ut++){const Xt=Xe[ut];Ne?ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ut+1,0,0,ge,he,Xt.image[Se]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ut+1,pe,ge,he,Xt.image[Se])}}}b(E)&&E.mipmapsAutoUpdate===!0&&M(r.TEXTURE_CUBE_MAP),fe.__version=re.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function st(C,E,X,le,re,fe){const xe=s.convert(X.format,X.colorSpace),ee=s.convert(X.type),te=T(X.internalFormat,xe,ee,X.normalized,X.colorSpace),me=n.get(E),N=n.get(X);if(N.__renderTarget=E,!me.__hasExternalTextures){const ne=Math.max(1,E.width>>fe),Q=Math.max(1,E.height>>fe);re===r.TEXTURE_3D||re===r.TEXTURE_2D_ARRAY?t.texImage3D(re,fe,te,ne,Q,E.depth,0,xe,ee,null):t.texImage2D(re,fe,te,ne,Q,0,xe,ee,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),ye(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,le,re,N.__webglTexture,0,Mt(E)):(re===r.TEXTURE_2D||re>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,le,re,N.__webglTexture,fe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Wt(C,E,X){if(r.bindRenderbuffer(r.RENDERBUFFER,C),E.depthBuffer){const le=E.depthTexture,re=le&&le.isDepthTexture?le.type:null,fe=x(E.stencilBuffer,re),xe=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ye(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Mt(E),fe,E.width,E.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,Mt(E),fe,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,fe,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,C)}else{const le=E.textures;for(let re=0;re<le.length;re++){const fe=le[re],xe=s.convert(fe.format,fe.colorSpace),ee=s.convert(fe.type),te=T(fe.internalFormat,xe,ee,fe.normalized,fe.colorSpace);ye(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Mt(E),te,E.width,E.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,Mt(E),te,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,te,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ht(C,E,X){const le=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const re=n.get(E.depthTexture);re.__renderTarget=E;const fe=le?E.depthTexture.image[0]:E.depthTexture.image;(!re.__webglTexture||fe.width!==E.width||fe.height!==E.height)&&(fe.width=E.width,fe.height=E.height,E.depthTexture.needsUpdate=!0),le?j(E.depthTexture,0):Z(E.depthTexture,0);const xe=re.__webglTexture,ee=Mt(E),te=le?r.TEXTURE_CUBE_MAP_POSITIVE_X+X:r.TEXTURE_2D,me=E.depthTexture.format===Zi?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===ss)ye(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,te,xe,0,ee):r.framebufferTexture2D(r.FRAMEBUFFER,me,te,xe,0);else if(E.depthTexture.format===Zi)ye(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,te,xe,0,ee):r.framebufferTexture2D(r.FRAMEBUFFER,me,te,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function hn(C){const E=n.get(C),X=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const le=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),le){const re=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,le.removeEventListener("dispose",re)};le.addEventListener("dispose",re),E.__depthDisposeCallback=re}E.__boundDepthTexture=le}if(C.depthTexture&&!E.__autoAllocateDepthBuffer)if(X)for(let le=0;le<6;le++)ht(E.__webglFramebuffer[le],C,le);else C.texture.mipmaps.length>0?ht(E.__webglFramebuffer[0],C,0):ht(E.__webglFramebuffer,C,0);else if(X){E.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[le]),E.__webglDepthbuffer[le]===void 0)E.__webglDepthbuffer[le]=r.createRenderbuffer(),Wt(E.__webglDepthbuffer[le],C,!1);else{const re=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=E.__webglDepthbuffer[le];r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,re,r.RENDERBUFFER,fe)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Wt(E.__webglDepthbuffer,C,!1);else{const re=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,re,r.RENDERBUFFER,fe)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function un(C,E,X){const le=n.get(C);E!==void 0&&st(le.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),X!==void 0&&hn(C)}function dn(C){const E=C.texture,X=n.get(C),le=n.get(E);C.addEventListener("dispose",F),R(C);const re=C.textures,fe=C.isWebGLCubeRenderTarget===!0,xe=re.length>1;if(xe||(le.__webglTexture===void 0&&(le.__webglTexture=r.createTexture()),le.__version=E.version,a.memory.textures++),fe){X.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(E.mipmaps.length>0){X.__webglFramebuffer[ee]=[];for(let te=0;te<E.mipmaps.length;te++)X.__webglFramebuffer[ee][te]=r.createFramebuffer()}else X.__webglFramebuffer[ee]=r.createFramebuffer()}else{if(E.mipmaps.length>0){X.__webglFramebuffer=[];for(let ee=0;ee<E.mipmaps.length;ee++)X.__webglFramebuffer[ee]=r.createFramebuffer()}else X.__webglFramebuffer=r.createFramebuffer();if(xe)for(let ee=0,te=re.length;ee<te;ee++){const me=n.get(re[ee]);me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&ye(C)===!1){X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ee=0;ee<re.length;ee++){const te=re[ee];X.__webglColorRenderbuffer[ee]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[ee]);const me=s.convert(te.format,te.colorSpace),N=s.convert(te.type),ne=T(te.internalFormat,me,N,te.normalized,te.colorSpace,C.isXRRenderTarget===!0),Q=Mt(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Q,ne,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.RENDERBUFFER,X.__webglColorRenderbuffer[ee])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),Wt(X.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(fe){t.bindTexture(r.TEXTURE_CUBE_MAP,le.__webglTexture),Le(r.TEXTURE_CUBE_MAP,E);for(let ee=0;ee<6;ee++)if(E.mipmaps.length>0)for(let te=0;te<E.mipmaps.length;te++)st(X.__webglFramebuffer[ee][te],C,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,te);else st(X.__webglFramebuffer[ee],C,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);b(E)?M(r.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(xe){for(let ee=0,te=re.length;ee<te;ee++){const me=re[ee],N=n.get(me);let ne=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ne=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ne,N.__webglTexture),Le(ne,me),st(X.__webglFramebuffer,C,me,r.COLOR_ATTACHMENT0+ee,ne,0),b(me)&&M(ne)}t.unbindTexture()}else{let ee=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ee=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ee,le.__webglTexture),Le(ee,E),E.mipmaps.length>0)for(let te=0;te<E.mipmaps.length;te++)st(X.__webglFramebuffer[te],C,E,r.COLOR_ATTACHMENT0,ee,te);else st(X.__webglFramebuffer,C,E,r.COLOR_ATTACHMENT0,ee,0);b(E)?M(ee):E.mipmaps.length>0&&r.texParameteri(ee,r.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&hn(C)}function B(C){const E=C.textures;for(let X=0,le=E.length;X<le;X++){const re=E[X];if(b(re)&&re.mipmapsAutoUpdate===!0){const fe=y(C),xe=n.get(re).__webglTexture;t.bindTexture(fe,xe),M(fe),t.unbindTexture()}}}const fn=[];function gt(C){if(C.samples>0){if(ye(C)===!1){const E=C.textures,X=C.width,le=C.height;let re=r.COLOR_BUFFER_BIT;const fe=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xe=n.get(C),ee=E.length>1;if(ee)for(let me=0;me<E.length;me++)t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let me=0;me<E.length;me++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(re|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(re|=r.STENCIL_BUFFER_BIT)),ee){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,xe.__webglColorRenderbuffer[me]);const N=n.get(E[me]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,N,0)}r.blitFramebuffer(0,0,X,le,0,0,X,le,re,r.NEAREST),l===!0&&(fn.length=0,fn.push(r.COLOR_ATTACHMENT0+me),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&fn.push(fe),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,fn))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ee)for(let me=0;me<E.length;me++){t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.RENDERBUFFER,xe.__webglColorRenderbuffer[me]);const N=n.get(E[me]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.TEXTURE_2D,N,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){const E=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Mt(C){return Math.min(i.maxSamples,C.samples)}function ye(C){const E=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Pt(C){const E=a.render.frame;h.get(C)!==E&&(h.set(C,E),C.update())}function Oe(C,E){const X=C.colorSpace,le=C.format,re=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||X!==Nn&&X!==Ki&&(je.getTransfer(X)===dt?(le!==Zn||re!==Rn)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",X)),E}function ke(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=ie,this.resetTextureUnits=L,this.getTextureUnits=A,this.setTextureUnits=V,this.setTexture2D=Z,this.setTexture2DArray=se,this.setTexture3D=ae,this.setTextureCube=j,this.rebindTextures=un,this.setupRenderTarget=dn,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=hn,this.setupFrameBufferTexture=st,this.useMultisampledRTT=ye,this.dispose=H}function Cy(r,e){function t(n,i=Ki){let s;const a=je.getTransfer(i);if(n===Rn)return r.UNSIGNED_BYTE;if(n===eh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===th)return r.UNSIGNED_SHORT_5_5_5_1;if(n===_f)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===xf)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===mf)return r.BYTE;if(n===gf)return r.SHORT;if(n===ta)return r.UNSIGNED_SHORT;if(n===jc)return r.INT;if(n===ui)return r.UNSIGNED_INT;if(n===Hn)return r.FLOAT;if(n===di)return r.HALF_FLOAT;if(n===vf)return r.ALPHA;if(n===Mf)return r.RGB;if(n===Zn)return r.RGBA;if(n===ss)return r.DEPTH_COMPONENT;if(n===Zi)return r.DEPTH_STENCIL;if(n===nh)return r.RED;if(n===ih)return r.RED_INTEGER;if(n===As)return r.RG;if(n===sh)return r.RG_INTEGER;if(n===rh)return r.RGBA_INTEGER;if(n===oo||n===lo||n===co||n===ho)if(a===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===oo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===oo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===co)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ho)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ql||n===jl||n===ec||n===tc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ql)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ec)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===tc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nc||n===ic||n===sc||n===rc||n===ac||n===yo||n===oc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===nc||n===ic)return a===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===sc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===rc)return s.COMPRESSED_R11_EAC;if(n===ac)return s.COMPRESSED_SIGNED_R11_EAC;if(n===yo)return s.COMPRESSED_RG11_EAC;if(n===oc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===lc||n===cc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===_c||n===xc||n===vc||n===Mc||n===yc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===lc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===cc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===uc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===dc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_c)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sc||n===bc||n===Tc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Sc)return a===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ec||n===wc||n===So||n===Ac)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ec)return s.COMPRESSED_RED_RGTC1_EXT;if(n===wc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===So)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ac)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===lr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const Py=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ly=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Iy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Gf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Rs({vertexShader:Py,fragmentShader:Ly,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new J(new cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Dy extends Cs{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null;const _=typeof XRWebGLBinding<"u",p=new Iy,g={},v=t.getContextAttributes();let b=null,M=null;const y=[],T=[],x=new we;let S=null,R=null;const P=new mn;P.viewport=new pt;const D=new mn;D.viewport=new pt;const F=[P,D],G=new Ug;let I=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let Z=y[z];return Z===void 0&&(Z=new rl,y[z]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(z){let Z=y[z];return Z===void 0&&(Z=new rl,y[z]=Z),Z.getGripSpace()},this.getHand=function(z){let Z=y[z];return Z===void 0&&(Z=new rl,y[z]=Z),Z.getHandSpace()};function Y(z){const Z=T.indexOf(z.inputSource);if(Z===-1)return;const se=y[Z];se!==void 0&&(se.update(z.inputSource,z.frame,c||a),se.dispatchEvent({type:z.type,data:z.inputSource}))}function k(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",oe);for(let z=0;z<y.length;z++){const Z=T[z];Z!==null&&(T[z]=null,y[z].disconnect(Z))}I=null,H=null,p.reset();for(const z in g)delete g[z];if(e.setRenderTarget(b),f=null,d=null,u=null,i=null,M=null,ie.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(x.width,x.height,!1),R!==null){const z=R.camera;z.fov=R.fov,z.zoom=R.zoom,z.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,n.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,n.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(b=e.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",k),i.addEventListener("inputsourceschange",oe),v.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,ae=null,j=null;v.depth&&(j=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=v.stencil?Zi:ss,ae=v.stencil?lr:ui);const Me={colorFormat:t.RGBA8,depthFormat:j,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Me),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new hi(d.textureWidth,d.textureHeight,{format:Zn,type:Rn,depthTexture:new hr(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const se={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,se),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new hi(f.framebufferWidth,f.framebufferHeight,{format:Zn,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ie.setContext(i),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function oe(z){for(let Z=0;Z<z.removed.length;Z++){const se=z.removed[Z],ae=T.indexOf(se);ae>=0&&(T[ae]=null,y[ae].disconnect(se))}for(let Z=0;Z<z.added.length;Z++){const se=z.added[Z];let ae=T.indexOf(se);if(ae===-1){for(let Me=0;Me<y.length;Me++)if(Me>=T.length){T.push(se),ae=Me;break}else if(T[Me]===null){T[Me]=se,ae=Me;break}if(ae===-1)break}const j=y[ae];j&&j.connect(se)}}function K(z,Z){Z===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(Z.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;let Z=z.near,se=z.far;p.texture!==null&&(p.depthNear>0&&(Z=p.depthNear),p.depthFar>0&&(se=p.depthFar)),G.near=D.near=P.near=Z,G.far=D.far=P.far=se,(I!==G.near||H!==G.far)&&(i.updateRenderState({depthNear:G.near,depthFar:G.far}),I=G.near,H=G.far),G.layers.mask=z.layers.mask|6,P.layers.mask=G.layers.mask&-5,D.layers.mask=G.layers.mask&-3;const ae=z.parent,j=G.cameras;K(G,ae);for(let Me=0;Me<j.length;Me++)K(j[Me],ae);G.projectionMatrix.copy(P.projectionMatrix),G.projectionMatrixInverse.copy(P.projectionMatrixInverse),R===null&&z.isPerspectiveCamera&&(R={camera:z,fov:z.fov,zoom:z.zoom}),L(z,G,ae)};function L(z,Z,se){se===null?z.matrix.copy(Z.matrixWorld):(z.matrix.copy(se.matrixWorld),z.matrix.invert(),z.matrix.multiply(Z.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(Z.projectionMatrix),z.projectionMatrixInverse.copy(Z.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=cr*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(z){l=z,d!==null&&(d.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(G)},this.getCameraTexture=function(z){return g[z]};let A=null;function V(z,Z){if(h=Z.getViewerPose(c||a),m=Z,h!==null){const se=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let ae=!1;se.length!==G.cameras.length&&(G.cameras.length=0,ae=!0);for(let ue=0;ue<se.length;ue++){const Le=se[ue];let Ie=null;if(f!==null)Ie=f.getViewport(Le);else{const $e=u.getViewSubImage(d,Le);Ie=$e.viewport,ue===0&&(e.setRenderTargetTextures(M,$e.colorTexture,$e.depthStencilTexture),e.setRenderTarget(M))}let de=F[ue];de===void 0&&(de=new mn,de.layers.enable(ue),de.viewport=new pt,F[ue]=de),de.matrix.fromArray(Le.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(Le.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),ue===0&&(G.matrix.copy(de.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),ae===!0&&G.cameras.push(de)}const j=i.enabledFeatures;if(j&&j.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const ue=u.getDepthInformation(se[0]);ue&&ue.isValid&&ue.texture&&p.init(ue,i.renderState)}if(j&&j.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let ue=0;ue<se.length;ue++){const Le=se[ue].camera;if(Le){let Ie=g[Le];Ie||(Ie=new Gf,g[Le]=Ie);const de=u.getCameraImage(Le);Ie.sourceTexture=de}}}}for(let se=0;se<y.length;se++){const ae=T[se],j=y[se];ae!==null&&j!==void 0&&j.update(ae,Z,c||a)}A&&A(z,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),m=null}const ie=new Zf;ie.setAnimationLoop(V),this.setAnimationLoop=function(z){A=z},this.dispose=function(){}}}const Ny=new We,rp=new He;rp.set(-1,0,0,0,1,0,0,0,1);function Uy(r,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Vf(r)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,v,b,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(p,g):g.isMeshLambertMaterial?(s(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(p,g),u(p,g)):g.isMeshPhongMaterial?(s(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,M)):g.isMeshMatcapMaterial?(s(p,g),m(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),_(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,v,b):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===vn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===vn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const v=e.get(g),b=v.envMap,M=v.envMapRotation;b&&(p.envMap.value=b,p.envMapRotation.value.setFromMatrix4(Ny.makeRotationFromEuler(M)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(rp),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,v,b){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*v,p.scale.value=b*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,v){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===vn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){const v=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Oy(r,e,t,n){let i={},s={};function a(v,b){const M=b.program;n.uniformBlockBinding(v,M,i[v.id])}function o(v,b){let M=i[v.id];M===void 0&&(m(v),M=l(v),i[v.id]=M,v.addEventListener("dispose",p));const y=b.program;n.updateUBOMapping(v,y);const T=e.render.frame;s[v.id]!==T&&(c(v),s[v.id]=T)}function l(v){const b=r.createBuffer(),M=v.__size,y=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,M,y),r.bindBuffer(r.UNIFORM_BUFFER,null),b}function c(v){const b=i[v.id],M=v.uniforms,y=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let T=0,x=M.length;T<x;T++){const S=M[T];if(Array.isArray(S))for(let R=0,P=S.length;R<P;R++)h(S[R],T,R,y);else h(S,T,0,y)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(v,b,M,y){if(d(v,b,M,y)===!0){const T=v.__offset,x=v.value;if(Array.isArray(x)){let S=0;for(let R=0;R<x.length;R++){const P=x[R],D=_(P,!0);u(P,v.__data,S),S+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,T,v.__data)}}function u(v,b,M){typeof v=="number"||typeof v=="boolean"?b[M]=v:v.isMatrix3?(b[M]=v.elements[0],b[M+1]=v.elements[1],b[M+2]=v.elements[2],b[M+3]=0,b[M+4]=v.elements[3],b[M+5]=v.elements[4],b[M+6]=v.elements[5],b[M+7]=0,b[M+8]=v.elements[6],b[M+9]=v.elements[7],b[M+10]=v.elements[8],b[M+11]=0):ArrayBuffer.isView(v)?b.set(v.subarray(0,b.length-M),M):v.toArray(b,M)}function d(v,b,M,y){const T=v.value,x=b+"_"+M;if(Array.isArray(T)){y[x]===void 0&&(y[x]=[]);const S=y[x];let R=!1;for(let P=0;P<T.length;P++)f(T[P],S,P)===!0&&(R=!0);return R}return f(T,y,x)}function f(v,b,M){if(b[M]===void 0)return typeof v=="number"||typeof v=="boolean"?b[M]=v:ArrayBuffer.isView(v)?b[M]=v.slice():b[M]=v.clone(),!0;{const y=b[M];if(typeof v=="number"||typeof v=="boolean"){if(y!==v)return b[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(y.equals(v)===!1)return y.copy(v),!0}}return!1}function m(v){const b=v.uniforms;let M=0;const y=16;for(let x=0,S=b.length;x<S;x++){const R=Array.isArray(b[x])?b[x]:[b[x]];for(let P=0,D=R.length;P<D;P++){const F=R[P],G=Array.isArray(F.value)?F.value:[F.value],I=Array.isArray(b[x])||Array.isArray(F.value);let H=M;for(let k=0,oe=G.length;k<oe;k++){const K=G[k],L=_(K,I),A=M%y,V=A%L.boundary,ie=A+V;M+=V,ie!==0&&y-ie<L.storage&&(M+=y-ie),k===0&&(H=M),M+=L.storage}const Y=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new Y((M-H)/Float32Array.BYTES_PER_ELEMENT),F.__offset=H}}const T=M%y;return T>0&&(M+=y-T),v.__size=M,v.__cache={},this}function _(v,b){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=16,M.storage=48):v.isMatrix4?(M.boundary=16,M.storage=64):v.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):De("WebGLRenderer: Unsupported uniform value type.",v),b===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function p(v){const b=v.target;b.removeEventListener("dispose",p),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function g(){for(const v in i)r.deleteBuffer(i[v]);i={},s={}}return{bind:a,update:o,dispose:g}}const Fy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ni=null;function By(){return ni===null&&(ni=new dh(Fy,16,16,As,di),ni.name="DFG_LUT",ni.minFilter=$t,ni.magFilter=$t,ni.wrapS=li,ni.wrapT=li,ni.generateMipmaps=!1,ni.needsUpdate=!0),ni}class ky{constructor(e={}){const{canvas:t=$m(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Rn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const _=f,p=new Set([rh,sh,ih]),g=new Set([Rn,ui,ta,lr,eh,th]),v=new Uint32Array(4),b=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]};let y=null,T=null;const x=[],S=[];let R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let D=!1,F=null,G=null,I=null,H=null;this._outputColorSpace=At;let Y=0,k=0,oe=null,K=-1,L=null;const A=new pt,V=new pt;let ie=null;const z=new Be(0);let Z=0,se=t.width,ae=t.height,j=1,Me=null,Ue=null;const ue=new pt(0,0,se,ae),Le=new pt(0,0,se,ae);let Ie=!1;const de=new oa,$e=new ph;let Qe=!1,ct=!1;const st=new We,Wt=new U,ht=new pt,hn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let un=!1;function dn(){return oe===null?j:1}let B=n;function fn(w,O){return t.getContext(w,O)}let gt,Mt,ye,Pt,Oe,ke,C,E,X,le,re,fe,xe,ee,te,me,N,ne,Q,ge,he,pe,Ne;try{const w={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$c}`),t.addEventListener("webglcontextlost",Fe,!1),t.addEventListener("webglcontextrestored",Xe,!1),t.addEventListener("webglcontextcreationerror",Se,!1),B===null){const O="webgl2";if(B=fn(O,w),B===null)throw fn(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ye()}catch(w){throw t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",Xe,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Ge("WebGLRenderer: "+w.message),w}function Ye(){gt=new Hv(B),gt.init(),he=new Cy(B,gt),Mt=new Lv(B,gt,e,he),ye=new Ay(B,gt),Mt.reversedDepthBuffer&&d&&ye.buffers.depth.setReversed(!0),G=B.createFramebuffer(),I=B.createFramebuffer(),H=B.createFramebuffer(),Pt=new Xv(B),Oe=new fy,ke=new Ry(B,gt,ye,Oe,Mt,he,Pt),C=new Gv(P),E=new Yg(B),pe=new Cv(B,E),X=new Vv(B,E,Pt,pe),le=new Yv(B,X,E,pe,Pt),ne=new qv(B,Mt,ke),te=new Iv(Oe),re=new dy(P,C,gt,Mt,pe,te),fe=new Uy(P,Oe),xe=new my,ee=new yy(gt),N=new Rv(P,C,ye,le,m,l),me=new wy(P,le,Mt),Ne=new Oy(B,Pt,Mt,ye),Q=new Pv(B,gt,Pt),ge=new Wv(B,gt,Pt),Pt.programs=re.programs,P.capabilities=Mt,P.extensions=gt,P.properties=Oe,P.renderLists=xe,P.shadowMap=me,P.state=ye,P.info=Pt}_!==Rn&&(R=new Zv(_,t.width,t.height,o,i,s));const ce=new Dy(P,B);this.xr=ce,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const w=gt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=gt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(w){w!==void 0&&(j=w,this.setSize(se,ae,!1))},this.getSize=function(w){return w.set(se,ae)},this.setSize=function(w,O,$=!0){if(ce.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}se=w,ae=O,t.width=Math.floor(w*j),t.height=Math.floor(O*j),$===!0&&(t.style.width=w+"px",t.style.height=O+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(se*j,ae*j).floor()},this.setDrawingBufferSize=function(w,O,$){se=w,ae=O,j=$,t.width=Math.floor(w*$),t.height=Math.floor(O*$),this.setViewport(0,0,w,O)},this.setEffects=function(w){if(_===Rn){Ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let O=0;O<w.length;O++)if(w[O].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(A)},this.getViewport=function(w){return w.copy(ue)},this.setViewport=function(w,O,$,W){w.isVector4?ue.set(w.x,w.y,w.z,w.w):ue.set(w,O,$,W),ye.viewport(A.copy(ue).multiplyScalar(dn()).round())},this.getScissor=function(w){return w.copy(Le)},this.setScissor=function(w,O,$,W){w.isVector4?Le.set(w.x,w.y,w.z,w.w):Le.set(w,O,$,W),ye.scissor(V.copy(Le).multiplyScalar(dn()).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(w){ye.setScissorTest(Ie=w)},this.setOpaqueSort=function(w){Me=w},this.setTransparentSort=function(w){Ue=w},this.getClearColor=function(w){return w.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(w=!0,O=!0,$=!0){let W=0;if(w){let q=!1;if(oe!==null){const ve=oe.texture.format;q=p.has(ve)}if(q){const ve=oe.texture.type,Ae=g.has(ve),_e=N.getClearColor(),Te=N.getClearAlpha(),Pe=_e.r,Ve=_e.g,et=_e.b;Ae?(v[0]=Pe,v[1]=Ve,v[2]=et,v[3]=Te,B.clearBufferuiv(B.COLOR,0,v)):(b[0]=Pe,b[1]=Ve,b[2]=et,b[3]=Te,B.clearBufferiv(B.COLOR,0,b))}else W|=B.COLOR_BUFFER_BIT}O&&(W|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),F=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",Xe,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),N.dispose(),xe.dispose(),ee.dispose(),ke.dispose(),Oe.dispose(),C.dispose(),le.dispose(),X.dispose(),pe.dispose(),Ne.dispose(),re.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",$h),ce.removeEventListener("sessionend",Qh),hs.stop()};function Fe(w){w.preventDefault(),To("WebGLRenderer: Context Lost."),D=!0}function Xe(){To("WebGLRenderer: Context Restored."),D=!1;const w=Pt.autoReset,O=me.enabled,$=me.autoUpdate,W=me.needsUpdate,q=me.type;Ye(),Pt.autoReset=w,me.enabled=O,me.autoUpdate=$,me.needsUpdate=W,me.type=q}function Se(w){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ut(w){const O=w.target;O.removeEventListener("dispose",ut),Xt(O)}function Xt(w){Bi(w),Oe.remove(w)}function Bi(w){const O=Oe.get(w).programs;O!==void 0&&(O.forEach(function($){re.releaseProgram($)}),w.isShaderMaterial&&re.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,$,W,q,ve){O===null&&(O=hn);const Ae=q.isMesh&&q.matrixWorld.determinantAffine()<0,_e=um(w,O,$,W,q);ye.setMaterial(W,Ae);let Te=$.index,Pe=1;if(W.wireframe===!0){if(Te=X.getWireframeAttribute($),Te===void 0)return;Pe=2}const Ve=$.drawRange,et=$.attributes.position;let Re=Ve.start*Pe,tt=(Ve.start+Ve.count)*Pe;ve!==null&&(Re=Math.max(Re,ve.start*Pe),tt=Math.min(tt,(ve.start+ve.count)*Pe)),Te!==null?(Re=Math.max(Re,0),tt=Math.min(tt,Te.count)):et!=null&&(Re=Math.max(Re,0),tt=Math.min(tt,et.count));const Ut=tt-Re;if(Ut<0||Ut===1/0)return;pe.setup(q,W,_e,$,Te);let yt,_t=Q;if(Te!==null&&(yt=E.get(Te),_t=ge,_t.setIndex(yt)),q.isMesh)W.wireframe===!0?(ye.setLineWidth(W.wireframeLinewidth*dn()),_t.setMode(B.LINES)):_t.setMode(B.TRIANGLES);else if(q.isLine){let jt=W.linewidth;jt===void 0&&(jt=1),ye.setLineWidth(jt*dn()),q.isLineSegments?_t.setMode(B.LINES):q.isLineLoop?_t.setMode(B.LINE_LOOP):_t.setMode(B.LINE_STRIP)}else q.isPoints?_t.setMode(B.POINTS):q.isSprite&&_t.setMode(B.TRIANGLES);if(q.isBatchedMesh)if(gt.get("WEBGL_multi_draw"))_t.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const jt=q._multiDrawStarts,Ce=q._multiDrawCounts,an=q._multiDrawCount,ot=Te?E.get(Te).bytesPerElement:1,us=Oe.get(W).currentProgram.getUniforms();for(let en=0;en<an;en++)us.setValue(B,"_gl_DrawID",en),_t.render(jt[en]/ot,Ce[en])}else if(q.isInstancedMesh)_t.renderInstances(Re,Ut,q.count);else if($.isInstancedBufferGeometry){const jt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ce=Math.min($.instanceCount,jt);_t.renderInstances(Re,Ut,Ce)}else _t.render(Re,Ut)};function Jh(w,O,$,W){F!==null&&w.isNodeMaterial&&F.setObject(W,w),Qe===!0&&te.setState(w,$,!1),w.transparent===!0&&w.side===gn&&w.forceSinglePass===!1?(w.side=vn,w.needsUpdate=!0,Sr(w,O,W),w.side=ns,w.needsUpdate=!0,Sr(w,O,W),w.side=gn):Sr(w,O,W)}this.compile=function(w,O,$=null){$===null&&($=w),F!==null&&F.renderStart(w,O,$),T=ee.get($),T.init(O),S.push(T),$.traverseVisible(function(q){q.isLight&&q.layers.test(O.layers)&&(T.pushLight(q),q.castShadow&&T.pushShadow(q))}),w!==$&&w.traverseVisible(function(q){q.isLight&&q.layers.test(O.layers)&&(T.pushLight(q),q.castShadow&&T.pushShadow(q))}),T.setupLights(),F!==null&&F.updateLights(T.state.lightsArray),ct=this.localClippingEnabled,Qe=te.init(this.clippingPlanes,ct),Qe===!0&&te.setGlobalState(this.clippingPlanes,O),F!==null&&me.render(T.state.shadowsArray,$,O);const W=new Set;return w.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const ve=q.material;if(ve)if(Array.isArray(ve))for(let Ae=0;Ae<ve.length;Ae++){const _e=ve[Ae];Jh(_e,$,O,q),W.add(_e)}else Jh(ve,$,O,q),W.add(ve)}),T=S.pop(),F!==null&&F.renderEnd(),W},this.compileAsync=function(w,O,$=null){const W=this.compile(w,O,$);return new Promise(q=>{function ve(){if(W.forEach(function(Ae){const Te=Oe.get(Ae).currentProgram;(Te===void 0||Te.isReady())&&W.delete(Ae)}),W.size===0){q(w);return}setTimeout(ve,10)}gt.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Ko=null;function cm(w){Ko&&Ko(w)}function $h(){hs.stop()}function Qh(){hs.start()}const hs=new Zf;hs.setAnimationLoop(cm),typeof self<"u"&&hs.setContext(self),this.setAnimationLoop=function(w){Ko=w,ce.setAnimationLoop(w),w===null?hs.stop():hs.start()},ce.addEventListener("sessionstart",$h),ce.addEventListener("sessionend",Qh),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;F!==null&&F.renderStart(w,O);const $=ce.enabled===!0&&ce.isPresenting===!0,W=R!==null&&(oe===null||$)&&R.begin(P,oe);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(O),O=ce.getCamera()),w.isScene===!0&&w.onBeforeRender(P,w,O,oe),T=ee.get(w,S.length),T.init(O),T.state.textureUnits=ke.getTextureUnits(),S.push(T),st.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?$e.setFromArrayCamera(O):de.setFromProjectionMatrix(st,Jn,O.reversedDepth),ct=this.localClippingEnabled,Qe=te.init(this.clippingPlanes,ct),y=xe.get(w,x.length),y.init(),x.push(y),this.info.render.frame++,ce.enabled===!0&&ce.isPresenting===!0){const Ae=P.xr.getDepthSensingMesh();Ae!==null&&Zo(Ae,O,-1/0,P.sortObjects)}Zo(w,O,0,P.sortObjects),y.finish(),F!==null&&F.updateLights(T.state.lightsArray),P.sortObjects===!0&&y.sort(Me,Ue),un=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,un&&N.addToRenderList(y,w),this.info.autoReset===!0&&this.info.reset(),Qe===!0&&te.beginShadows();const q=T.state.shadowsArray;if(me.render(q,w,O),Qe===!0&&te.endShadows(),(W&&R.hasRenderPass())===!1){const Ae=y.opaque,_e=y.transmissive;if(T.setupLights(),O.isArrayCamera){const Te=O.cameras;if(_e.length>0)for(let Pe=0,Ve=Te.length;Pe<Ve;Pe++){const et=Te[Pe];eu(Ae,_e,w,et)}un&&N.render(w);for(let Pe=0,Ve=Te.length;Pe<Ve;Pe++){const et=Te[Pe];jh(y,w,et,et.viewport)}}else _e.length>0&&eu(Ae,_e,w,O),un&&N.render(w),jh(y,w,O)}oe!==null&&k===0&&(ke.updateMultisampleRenderTarget(oe),ke.updateRenderTargetMipmap(oe)),W&&R.end(P),w.isScene===!0&&w.onAfterRender(P,w,O),pe.resetDefaultState(),K=-1,L=null,S.pop(),S.length>0?(T=S[S.length-1],ke.setTextureUnits(T.state.textureUnits),Qe===!0&&te.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?y=x[x.length-1]:y=null,F!==null&&F.renderEnd()};function Zo(w,O,$,W){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){const Ae=O.isArrayCamera?$e:de;if(!w.frustumCulled||w.intersectsFrustum(Ae)){W&&ht.setFromMatrixPosition(w.matrixWorld).applyMatrix4(st);const _e=le.update(w),Te=w.material;Te.visible&&y.push(w,_e,Te,$,ht.z,null,O)}}else if(w.isMesh||w.isLine||w.isPoints){const Ae=O.isArrayCamera?$e:de;if(!w.frustumCulled||w.intersectsFrustum(Ae)){const _e=le.update(w),Te=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ht.copy(w.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),ht.copy(_e.boundingSphere.center)),ht.applyMatrix4(w.matrixWorld).applyMatrix4(st)),Array.isArray(Te)){const Pe=_e.groups;for(let Ve=0,et=Pe.length;Ve<et;Ve++){const Re=Pe[Ve],tt=Te[Re.materialIndex];tt&&tt.visible&&y.push(w,_e,tt,$,ht.z,Re,O)}}else Te.visible&&y.push(w,_e,Te,$,ht.z,null,O)}}}const ve=w.children;for(let Ae=0,_e=ve.length;Ae<_e;Ae++)Zo(ve[Ae],O,$,W)}function jh(w,O,$,W){const{opaque:q,transmissive:ve,transparent:Ae}=w;T.setupLightsView($),Qe===!0&&te.setGlobalState(P.clippingPlanes,$),W&&ye.viewport(A.copy(W)),q.length>0&&ba(q,O,$),ve.length>0&&ba(ve,O,$),Ae.length>0&&ba(Ae,O,$),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function eu(w,O,$,W){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[W.id]===void 0){const Re=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[W.id]=new hi(1,1,{generateMipmaps:!0,type:Re?di:Rn,minFilter:Gn,samples:Math.max(4,Mt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:je.workingColorSpace})}const ve=T.state.transmissionRenderTarget[W.id],Ae=W.viewport||A;ve.setSize(Ae.z*P.transmissionResolutionScale,Ae.w*P.transmissionResolutionScale);const _e=P.getRenderTarget(),Te=P.getActiveCubeFace(),Pe=P.getActiveMipmapLevel();P.setRenderTarget(ve),P.getClearColor(z),Z=P.getClearAlpha(),Z<1&&P.setClearColor(16777215,.5),P.clear(),un&&N.render($);const Ve=P.toneMapping;P.toneMapping=Ci;const et=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),T.setupLightsView(W),Qe===!0&&te.setGlobalState(P.clippingPlanes,W),ba(w,$,W),ke.updateMultisampleRenderTarget(ve),ke.updateRenderTargetMipmap(ve),gt.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let tt=0,Ut=O.length;tt<Ut;tt++){const yt=O[tt],{object:_t,geometry:jt,material:Ce,group:an}=yt;if(Ce.side===gn&&_t.layers.test(W.layers)){const ot=Ce.side;Ce.side=vn,Ce.needsUpdate=!0,tu(_t,$,W,jt,Ce,an),Ce.side=ot,Ce.needsUpdate=!0,Re=!0}}Re===!0&&(ke.updateMultisampleRenderTarget(ve),ke.updateRenderTargetMipmap(ve))}P.setRenderTarget(_e,Te,Pe),P.setClearColor(z,Z),et!==void 0&&(W.viewport=et),P.toneMapping=Ve}function ba(w,O,$){const W=O.isScene===!0?O.overrideMaterial:null;for(let q=0,ve=w.length;q<ve;q++){const Ae=w[q],{object:_e,geometry:Te,group:Pe}=Ae;let Ve=Ae.material;Ve.allowOverride===!0&&W!==null&&(Ve=W),_e.layers.test($.layers)&&tu(_e,O,$,Te,Ve,Pe)}}function tu(w,O,$,W,q,ve){F!==null&&q.isNodeMaterial&&F.setObject(w,q),w.onBeforeRender(P,O,$,W,q,ve),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),q.onBeforeRender(P,O,$,W,w,ve),q.transparent===!0&&q.side===gn&&q.forceSinglePass===!1?(q.side=vn,q.needsUpdate=!0,P.renderBufferDirect($,O,W,q,w,ve),q.side=ns,q.needsUpdate=!0,P.renderBufferDirect($,O,W,q,w,ve),q.side=gn):P.renderBufferDirect($,O,W,q,w,ve),w.onAfterRender(P,O,$,W,q,ve)}function nu(w){let O=0;for(const $ of w)$.texture!==null&&O++;return O}function Sr(w,O,$){O.isScene!==!0&&(O=hn);const W=Oe.get(w),q=T.state.lights,ve=T.state.shadowsArray,Ae=q.state.version,_e=re.getParameters(w,q.state,ve,O,$,T.state.lightProbeGridArray),Te=re.getProgramCacheKey(_e);let Pe=W.programs;W.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?O.environment:null,W.fog=O.fog;const Ve=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;W.envMap=C.get(w.envMap||W.environment,Ve),W.envMapRotation=W.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Pe===void 0&&(w.addEventListener("dispose",ut),Pe=new Map,W.programs=Pe,W.programVariants=new Map);let et=Pe.get(Te);if(et!==void 0){if(W.currentProgram===et&&W.lightsStateVersion===Ae)return su(w,_e),et}else _e.uniforms=re.getUniforms(w),F!==null&&w.isNodeMaterial&&F.build(w,$,_e),w.onBeforeCompile(_e,P),et=re.acquireProgram(_e,Te),Pe.set(Te,et),W.uniforms=_e.uniforms;const Re=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Re.clippingPlanes=te.uniform),su(w,_e),W.needsLights=fm(w),W.lightsStateVersion=Ae,W.needsLights&&(Re.ambientLightColor.value=q.state.ambient,Re.lightProbe.value=q.state.probe,Re.sunLights.value=q.state.sun,Re.sunLightShadows.value=q.state.sunShadow,Re.directionalLights.value=q.state.directional,Re.directionalLightShadows.value=q.state.directionalShadow,Re.spotLights.value=q.state.spot,Re.spotLightShadows.value=q.state.spotShadow,Re.rectAreaLights.value=q.state.rectArea,Re.ltc_1.value=q.state.rectAreaLTC1,Re.ltc_2.value=q.state.rectAreaLTC2,Re.pointLights.value=q.state.point,Re.pointLightShadows.value=q.state.pointShadow,Re.hemisphereLights.value=q.state.hemi,Re.sunShadowMatrix.value=q.state.sunShadowMatrix,Re.sunShadowCascade.value=q.state.sunShadowCascade,Re.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Re.spotLightMatrix.value=q.state.spotLightMatrix,Re.spotLightMap.value=q.state.spotLightMap,Re.pointShadowMatrix.value=q.state.pointShadowMatrix),W.numLightProbeGrids=nu(T.state.lightProbeGridArray),W.currentProgram=et,W.uniformsList=null,et}function hm(w,O,$,W,q){const ve=Oe.get(w),Ae=ve.currentProgram.id+","+W+","+q;let _e=ve.programVariants.get(Ae);return _e===void 0?(_e=Sr(w,O,$),ve.programVariants.set(Ae,_e)):(ve.currentProgram=_e,ve.uniformsList=null,ve.outputColorSpace=W,ve.toneMapping=q),_e}function iu(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=mo.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function su(w,O){const $=Oe.get(w);$.outputColorSpace=O.outputColorSpace,$.batching=O.batching,$.batchingColor=O.batchingColor,$.instancing=O.instancing,$.instancingColor=O.instancingColor,$.instancingMorph=O.instancingMorph,$.skinning=O.skinning,$.morphTargets=O.morphTargets,$.morphNormals=O.morphNormals,$.morphColors=O.morphColors,$.morphTargetsCount=O.morphTargetsCount,$.numClippingPlanes=O.numClippingPlanes,$.numIntersection=O.numClipIntersection,$.vertexAlphas=O.vertexAlphas,$.vertexTangents=O.vertexTangents,$.toneMapping=O.toneMapping}function um(w,O,$,W,q){O.isScene!==!0&&(O=hn),ke.resetTextureUnits();const ve=O.fog,Ae=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?O.environment:null,_e=oe===null?P.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:je.workingColorSpace,Te=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Pe=C.get(W.envMap||Ae,Te),Ve=W.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,et=!!$.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Re=!!$.morphAttributes.position,tt=!!$.morphAttributes.normal,Ut=!!$.morphAttributes.color;let yt=Ci;W.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(yt=P.toneMapping);const _t=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,jt=_t!==void 0?_t.length:0,Ce=Oe.get(W),an=T.state.lights;if(Qe===!0&&(ct===!0||w!==L)){const Tt=w===L&&W.id===K;te.setState(W,w,Tt)}let ot=!1,us=!1;W.version===Ce.__version?Ce.needsLights&&Ce.lightsStateVersion!==an.state.version||q.isBatchedMesh&&Ce.batching===!1||!q.isBatchedMesh&&Ce.batching===!0||q.isBatchedMesh&&Ce.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Ce.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Ce.instancing===!1||!q.isInstancedMesh&&Ce.instancing===!0||q.isSkinnedMesh&&Ce.skinning===!1||!q.isSkinnedMesh&&Ce.skinning===!0||q.isInstancedMesh&&Ce.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ce.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ce.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ce.instancingMorph===!1&&q.morphTexture!==null||Ce.envMap!==Pe||W.fog===!0&&Ce.fog!==ve||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==te.numPlanes||Ce.numIntersection!==te.numIntersection)||Ce.vertexAlphas!==Ve||Ce.vertexTangents!==et||Ce.morphTargets!==Re||Ce.morphNormals!==tt||Ce.morphColors!==Ut||Ce.morphTargetsCount!==jt||Ce.numLightProbeGrids!==nu(T.state.lightProbeGridArray)?ot=!0:(Ce.outputColorSpace!==_e||Ce.toneMapping!==yt)&&(us=!0):(ot=!0,Ce.__version=W.version);let en=Ce.currentProgram;(ot===!0||us===!0)&&(en=us===!0?hm(W,O,q,_e,yt):Sr(W,O,q),F&&W.isNodeMaterial&&F.onUpdateProgram(W,en,Ce));let Ta=!1,ki=!1,ds=!1;const rt=en.getUniforms(),Jt=Ce.uniforms;if(ye.useProgram(en.program)&&(Ta=!0,ki=!0,ds=!0),W.id!==K&&(K=W.id,ki=!0),Ta||L!==w){ye.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),rt.setValue(B,"projectionMatrix",w.projectionMatrix),rt.setValue(B,"viewMatrix",w.matrixWorldInverse);const qt=rt.map.cameraPosition;qt!==void 0&&qt.setValue(B,Wt.setFromMatrixPosition(w.matrixWorld)),Mt.logarithmicDepthBuffer&&rt.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&rt.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),L!==w&&(L=w,ki=!0,ds=!0)}if(Ce.needsLights&&(an.state.sunShadowMap.length>0&&rt.setValue(B,"sunShadowMap",an.state.sunShadowMap,ke),an.state.directionalShadowMap.length>0&&rt.setValue(B,"directionalShadowMap",an.state.directionalShadowMap,ke),an.state.spotShadowMap.length>0&&rt.setValue(B,"spotShadowMap",an.state.spotShadowMap,ke),an.state.pointShadowMap.length>0&&rt.setValue(B,"pointShadowMap",an.state.pointShadowMap,ke)),q.isSkinnedMesh){rt.setOptional(B,q,"bindMatrix"),rt.setOptional(B,q,"bindMatrixInverse");const Tt=q.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),rt.setValue(B,"boneTexture",Tt.boneTexture,ke))}q.isBatchedMesh&&(rt.setOptional(B,q,"batchingTexture"),rt.setValue(B,"batchingTexture",q._matricesTexture,ke),rt.setOptional(B,q,"batchingIdTexture"),rt.setValue(B,"batchingIdTexture",q._indirectTexture,ke),rt.setOptional(B,q,"batchingColorTexture"),q._colorsTexture!==null&&rt.setValue(B,"batchingColorTexture",q._colorsTexture,ke));const Xn=$.morphAttributes;if((Xn.position!==void 0||Xn.normal!==void 0||Xn.color!==void 0)&&ne.update(q,$,en),(ki||Ce.receiveShadow!==q.receiveShadow)&&(Ce.receiveShadow=q.receiveShadow,rt.setValue(B,"receiveShadow",q.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&O.environment!==null&&(Jt.envMapIntensity.value=O.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=By()),ki){if(rt.setValue(B,"toneMappingExposure",P.toneMappingExposure),Ce.needsLights&&dm(Jt,ds),ve&&W.fog===!0&&fe.refreshFogUniforms(Jt,ve),fe.refreshMaterialUniforms(Jt,W,j,ae,T.state.transmissionRenderTarget[w.id]),Ce.needsLights&&Ce.numLightProbeGrids>0){const Tt=M;let qt=0;for(const gi of T.state.lightProbeGridArray)gi.texture!==null&&(Tt.textures[qt]=gi.texture,Tt.min[qt]=gi.boundingBox.min,Tt.max[qt]=gi.boundingBox.max,Tt.resolution[qt]=gi.resolution,qt++);for(const gi in Tt)Tt[gi].length=qt;Jt.probesSH.value=Tt.textures,Jt.probesMin.value=Tt.min,Jt.probesMax.value=Tt.max,Jt.probesResolution.value=Tt.resolution}mo.upload(B,iu(Ce),Jt,ke)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(mo.upload(B,iu(Ce),Jt,ke),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&rt.setValue(B,"center",q.center),rt.setValue(B,"modelViewMatrix",q.modelViewMatrix),rt.setValue(B,"normalMatrix",q.normalMatrix),rt.setValue(B,"modelMatrix",q.matrixWorld),W.uniformsGroups!==void 0){const Tt=W.uniformsGroups;for(let qt=0,gi=Tt.length;qt<gi;qt++){const au=Tt[qt];Ne.update(au,en),Ne.bind(au,en)}}return en}function dm(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.sunLights.needsUpdate=O,w.sunLightShadows.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function fm(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(w,O,$){const W=Oe.get(w);W.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Oe.get(w.texture).__webglTexture=O,Oe.get(w.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:$,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,O){const $=Oe.get(w);$.__webglFramebuffer=O,$.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,$=0){oe=w,Y=O,k=$;let W=null,q=!1,ve=!1;if(w){const _e=Oe.get(w);if(_e.__useDefaultFramebuffer!==void 0){ye.bindFramebuffer(B.FRAMEBUFFER,_e.__webglFramebuffer),A.copy(w.viewport),V.copy(w.scissor),ie=w.scissorTest,ye.viewport(A),ye.scissor(V),ye.setScissorTest(ie),K=-1;return}else if(_e.__webglFramebuffer===void 0)ke.setupRenderTarget(w);else if(_e.__hasExternalTextures)ke.rebindTextures(w,Oe.get(w.texture).__webglTexture,Oe.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ve=w.depthTexture;if(_e.__boundDepthTexture!==Ve){if(Ve!==null&&Oe.has(Ve)&&(w.width!==Ve.image.width||w.height!==Ve.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(w)}}const Te=w.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ve=!0);const Pe=Oe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Pe[O])?W=Pe[O][$]:W=Pe[O],q=!0):w.samples>0&&ke.useMultisampledRTT(w)===!1?W=Oe.get(w).__webglMultisampledFramebuffer:Array.isArray(Pe)?W=Pe[$]:W=Pe,A.copy(w.viewport),V.copy(w.scissor),ie=w.scissorTest}else A.copy(ue).multiplyScalar(j).floor(),V.copy(Le).multiplyScalar(j).floor(),ie=Ie;if($!==0&&(W=G),ye.bindFramebuffer(B.FRAMEBUFFER,W)&&ye.drawBuffers(w,W),ye.viewport(A),ye.scissor(V),ye.setScissorTest(ie),q){const _e=Oe.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+O,_e.__webglTexture,$)}else if(ve){const _e=O;for(let Te=0;Te<w.textures.length;Te++){const Pe=Oe.get(w.textures[Te]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Te,Pe.__webglTexture,$,_e)}}else if(w!==null&&$!==0){const _e=Oe.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,_e.__webglTexture,$)}K=-1};function ru(w){const O=Oe.get(w);return(O.__readFormat!==w.format||O.__readType!==w.type)&&(O.__readFormat=w.format,O.__readType=w.type,O.__formatReadable=Mt.textureFormatReadable(w.format),O.__typeReadable=Mt.textureTypeReadable(w.type)),O}this.readRenderTargetPixels=function(w,O,$,W,q,ve,Ae,_e=0){if(!(w&&w.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Oe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ae!==void 0&&(Te=Te[Ae],Array.isArray(Te)&&(Te=Te[0])),Te){ye.bindFramebuffer(B.FRAMEBUFFER,Te);try{const Pe=w.textures[_e],Ve=Pe.format,et=Pe.type;w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+_e);const Re=ru(Pe);if(Re.__formatReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Re.__typeReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-W&&$>=0&&$<=w.height-q&&B.readPixels(O,$,W,q,he.convert(Ve),he.convert(et),ve)}finally{const Pe=oe!==null?Oe.get(oe).__webglFramebuffer:null;ye.bindFramebuffer(B.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(w,O,$,W,q,ve,Ae,_e=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Oe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ae!==void 0&&(Te=Te[Ae],Array.isArray(Te)&&(Te=Te[0])),Te)if(O>=0&&O<=w.width-W&&$>=0&&$<=w.height-q){ye.bindFramebuffer(B.FRAMEBUFFER,Te);const Pe=w.textures[_e],Ve=Pe.format,et=Pe.type;w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+_e);const Re=ru(Pe);if(Re.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Re.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,tt),B.bufferData(B.PIXEL_PACK_BUFFER,ve.byteLength,B.STREAM_READ),B.readPixels(O,$,W,q,he.convert(Ve),he.convert(et),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);const Ut=oe!==null?Oe.get(oe).__webglFramebuffer:null;ye.bindFramebuffer(B.FRAMEBUFFER,Ut);const yt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Qm(B,yt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,tt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ve),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(tt),B.deleteSync(yt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,O=null,$=0){const W=Math.pow(2,-$),q=Math.floor(w.image.width*W),ve=Math.floor(w.image.height*W),Ae=O!==null?O.x:0,_e=O!==null?O.y:0;ke.setTexture2D(w,0),B.copyTexSubImage2D(B.TEXTURE_2D,$,0,0,Ae,_e,q,ve),ye.unbindTexture()},this.copyTextureToTexture=function(w,O,$=null,W=null,q=0,ve=0){let Ae,_e,Te,Pe,Ve,et,Re,tt,Ut;const yt=w.isCompressedTexture?w.mipmaps[ve]:w.image;if($!==null)Ae=$.max.x-$.min.x,_e=$.max.y-$.min.y,Te=$.isBox3?$.max.z-$.min.z:1,Pe=$.min.x,Ve=$.min.y,et=$.isBox3?$.min.z:0;else{const rt=Math.pow(2,-q);Ae=Math.floor(yt.width*rt),_e=Math.floor(yt.height*rt),w.isDataArrayTexture?Te=yt.depth:w.isData3DTexture?Te=Math.floor(yt.depth*rt):Te=1,Pe=0,Ve=0,et=0}W!==null?(Re=W.x,tt=W.y,Ut=W.z):(Re=0,tt=0,Ut=0);const _t=he.convert(O.format),jt=he.convert(O.type);let Ce;O.isData3DTexture?(ke.setTexture3D(O,0),Ce=B.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(ke.setTexture2DArray(O,0),Ce=B.TEXTURE_2D_ARRAY):(ke.setTexture2D(O,0),Ce=B.TEXTURE_2D),ye.activeTexture(B.TEXTURE0),ye.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,O.flipY),ye.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),ye.pixelStorei(B.UNPACK_ALIGNMENT,O.unpackAlignment);const an=ye.getParameter(B.UNPACK_ROW_LENGTH),ot=ye.getParameter(B.UNPACK_IMAGE_HEIGHT),us=ye.getParameter(B.UNPACK_SKIP_PIXELS),en=ye.getParameter(B.UNPACK_SKIP_ROWS),Ta=ye.getParameter(B.UNPACK_SKIP_IMAGES);ye.pixelStorei(B.UNPACK_ROW_LENGTH,yt.width),ye.pixelStorei(B.UNPACK_IMAGE_HEIGHT,yt.height),ye.pixelStorei(B.UNPACK_SKIP_PIXELS,Pe),ye.pixelStorei(B.UNPACK_SKIP_ROWS,Ve),ye.pixelStorei(B.UNPACK_SKIP_IMAGES,et);const ki=w.isDataArrayTexture||w.isData3DTexture,ds=O.isDataArrayTexture||O.isData3DTexture;if(w.isDepthTexture){const rt=Oe.get(w),Jt=Oe.get(O),Xn=Oe.get(rt.__renderTarget),Tt=Oe.get(Jt.__renderTarget);ye.bindFramebuffer(B.READ_FRAMEBUFFER,Xn.__webglFramebuffer),ye.bindFramebuffer(B.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let qt=0;qt<Te;qt++)ki&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Oe.get(w).__webglTexture,q,et+qt),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Oe.get(O).__webglTexture,ve,Ut+qt)),B.blitFramebuffer(Pe,Ve,Pe+Ae,Ve+_e,Re,tt,Re+Ae,tt+_e,B.DEPTH_BUFFER_BIT,B.NEAREST);ye.bindFramebuffer(B.READ_FRAMEBUFFER,null),ye.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(q!==0||w.isRenderTargetTexture||Oe.has(w)){const rt=Oe.get(w),Jt=Oe.get(O);ye.bindFramebuffer(B.READ_FRAMEBUFFER,I),ye.bindFramebuffer(B.DRAW_FRAMEBUFFER,H);for(let Xn=0;Xn<Te;Xn++)ki?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,rt.__webglTexture,q,et+Xn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,rt.__webglTexture,q),ds?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Jt.__webglTexture,ve,Ut+Xn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Jt.__webglTexture,ve),q!==0?B.blitFramebuffer(Pe,Ve,Pe+Ae,Ve+_e,Re,tt,Re+Ae,tt+_e,B.COLOR_BUFFER_BIT,B.NEAREST):ds?B.copyTexSubImage3D(Ce,ve,Re,tt,Ut+Xn,Pe,Ve,Ae,_e):B.copyTexSubImage2D(Ce,ve,Re,tt,Pe,Ve,Ae,_e);ye.bindFramebuffer(B.READ_FRAMEBUFFER,null),ye.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else ds?w.isDataTexture||w.isData3DTexture?B.texSubImage3D(Ce,ve,Re,tt,Ut,Ae,_e,Te,_t,jt,yt.data):O.isCompressedArrayTexture?B.compressedTexSubImage3D(Ce,ve,Re,tt,Ut,Ae,_e,Te,_t,yt.data):B.texSubImage3D(Ce,ve,Re,tt,Ut,Ae,_e,Te,_t,jt,yt):w.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ve,Re,tt,Ae,_e,_t,jt,yt.data):w.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ve,Re,tt,yt.width,yt.height,_t,yt.data):B.texSubImage2D(B.TEXTURE_2D,ve,Re,tt,Ae,_e,_t,jt,yt);ye.pixelStorei(B.UNPACK_ROW_LENGTH,an),ye.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ot),ye.pixelStorei(B.UNPACK_SKIP_PIXELS,us),ye.pixelStorei(B.UNPACK_SKIP_ROWS,en),ye.pixelStorei(B.UNPACK_SKIP_IMAGES,Ta),ve===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&B.generateMipmap(Ce),ye.unbindTexture()},this.initRenderTarget=function(w){Oe.get(w).__webglFramebuffer===void 0&&ke.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ke.setTextureCube(w,0):w.isData3DTexture?ke.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ke.setTexture2DArray(w,0):ke.setTexture2D(w,0),ye.unbindTexture()},this.resetState=function(){Y=0,k=0,oe=null,ye.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}function Ei(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function ap(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Dn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ua={duration:.5,overwrite:!1,delay:0},wh,Qt,bt,Vn=1e8,vt=1/Vn,Dc=Math.PI*2,zy=Dc/4,Gy=0,op=Math.sqrt,Hy=Math.cos,Vy=Math.sin,Zt=function(e){return typeof e=="string"},It=function(e){return typeof e=="function"},Di=function(e){return typeof e=="number"},Ah=function(e){return typeof e>"u"},fi=function(e){return typeof e=="object"},Mn=function(e){return e!==!1},Rh=function(){return typeof window<"u"},to=function(e){return It(e)||Zt(e)},lp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},rn=Array.isArray,Wy=/random\([^)]+\)/g,Xy=/,\s*/g,Pd=/(?:-?\.?\d|\.)+/gi,cp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Qs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ll=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,hp=/[+-]=-?[.\d]+/,qy=/[^,'"\[\]\s]+/gi,Yy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,wt,ri,Nc,Ch,Un={},Po={},up,dp=function(e){return(Po=dr(e,Un))&&Tn},Ph=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},da=function(e,t){return!t&&console.warn(e)},fp=function(e,t){return e&&(Un[e]=t)&&Po&&(Po[e]=t)||Un},fa=function(){return 0},Ky={suppressEvents:!0,isStart:!0,kill:!1},go={suppressEvents:!0,kill:!1},Zy={suppressEvents:!0},Lh={},es=[],Uc={},pp,An={},Il={},Ld=30,_o=[],Ih="",Dh=function(e){var t=e[0],n,i;if(fi(t)||It(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=_o.length;i--&&!_o[i].targetTest(t););n=_o[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Op(e[i],n)))||e.splice(i,1);return e},bs=function(e){return e._gsap||Dh(Wn(e))[0]._gsap},mp=function(e,t,n){return(n=e[t])&&It(n)?e[t]():Ah(n)&&e.getAttribute&&e.getAttribute(t)||n},yn=function(e,t){return(e=e.split(",")).forEach(t)||e},Nt=function(e){return Math.round(e*1e5)/1e5||0},Et=function(e){return Math.round(e*1e7)/1e7||0},ir=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Jy=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Lo=function(){var e=es.length,t=es.slice(0),n,i;for(Uc={},es.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Nh=function(e){return!!(e._initted||e._startAt||e.add)},gp=function(e,t,n,i){es.length&&!Qt&&Lo(),e.render(t,n,i||!!(Qt&&t<0&&Nh(e))),es.length&&!Qt&&Lo()},_p=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(qy).length<2?t:Zt(e)?e.trim():e},xp=function(e){return e},On=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},$y=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},dr=function(e,t){for(var n in t)e[n]=t[n];return e},Id=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=fi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Io=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Jr=function(e){var t=e.parent||wt,n=e.keyframes?$y(rn(e.keyframes)):On;if(Mn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Qy=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},vp=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Xo=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},as=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ts=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},jy=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Oc=function(e,t,n,i){return e._startAt&&(Qt?e._startAt.revert(go):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},eS=function r(e){return!e||e._ts&&r(e.parent)},Dd=function(e){return e._repeat?fr(e._tTime,e=e.duration()+e._rDelay)*e:0},fr=function(e,t){var n=Math.floor(e=Et(e/t));return e&&n===e?n-1:n},Do=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},qo=function(e){return e._end=Et(e._start+(e._tDur/Math.abs(e._ts||e._rts||vt)||0))},Yo=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Et(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),qo(e),n._dirty||Ts(n,e)),e},Mp=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Do(e.rawTime(),t),(!t._dur||ya(0,t.totalDuration(),n)-t._tTime>vt)&&t.render(n,!0)),Ts(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-vt}},oi=function(e,t,n,i){return t.parent&&as(t),t._start=Et((Di(n)?n:n||e!==wt?Bn(e,n,t):e._time)+t._delay),t._end=Et(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),vp(e,t,"_first","_last",e._sort?"_start":0),Fc(t)||(e._recent=t),i||Mp(e,t),e._ts<0&&Yo(e,e._tTime),e},yp=function(e,t){return(Un.ScrollTrigger||Ph("scrollTrigger",t))&&Un.ScrollTrigger.create(t,e)},Sp=function(e,t,n,i,s){if(Oh(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Qt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&pp!==Cn.frame)return es.push(e),e._lazy=[s,i],1},tS=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Fc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},nS=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&tS(e)&&!(!e._initted&&Fc(e))||(e._ts<0||e._dp._ts<0)&&!Fc(e))?0:1,o=e._rDelay,l=0,c,h,u;if(o&&e._repeat&&(l=ya(0,e._tDur,t),h=fr(l,o),e._yoyo&&h&1&&(a=1-a),h!==fr(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Qt||i||e._zTime===vt||!t&&e._zTime){if(!e._initted&&Sp(e,t,i,n,l))return;for(u=e._zTime,e._zTime=t||(n?vt:0),n||(n=t&&!u),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Oc(e,t,n,!0),e._onUpdate&&!n&&Pn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Pn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&as(e,1),!n&&!Qt&&(Pn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},iS=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},pr=function(e,t,n,i){var s=e._repeat,a=Et(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Et(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Yo(e,e._tTime=e._tDur*o),e.parent&&qo(e),n||Ts(e.parent,e),e},Nd=function(e){return e instanceof _n?Ts(e):pr(e,e._dur)},sS={_start:0,endTime:fa,totalDuration:fa},Bn=function r(e,t,n){var i=e.labels,s=e._recent||sS,a=e.duration()>=Vn?s.endTime(!1):e._dur,o,l,c;return Zt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(rn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},$r=function(e,t,n){var i=Di(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Mn(l.vars.inherit)&&l.parent;a.immediateRender=Mn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Ft(t[0],a,t[s+1])},cs=function(e,t){return e||e===0?t(e):t},ya=function(e,t,n){return n<e?e:n>t?t:n},sn=function(e,t){return!Zt(e)||!(t=Yy.exec(e))?"":t[1]},rS=function(e,t,n){return cs(n,function(i){return ya(e,t,i)})},Bc=[].slice,bp=function(e,t){return e&&fi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&fi(e[0]))&&!e.nodeType&&e!==ri},aS=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Zt(i)&&!t||bp(i,1)?(s=n).push.apply(s,Wn(i)):n.push(i)})||n},Wn=function(e,t,n){return bt&&!t&&bt.selector?bt.selector(e):Zt(e)&&!n&&(Nc||!mr())?Bc.call((t||Ch).querySelectorAll(e),0):rn(e)?aS(e,n):bp(e)?Bc.call(e,0):e?[e]:[]},kc=function(e){return e=Wn(e)[0]||da("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Wn(t,n.querySelectorAll?n:n===e?da("Invalid scope")||Ch.createElement("div"):e)}},Tp=function(e){return e.sort(function(){return .5-Math.random()})},Ep=function(e){if(It(e))return e;var t=fi(e)?e:{each:e},n=Es(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,h=i,u=i;return Zt(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],u=i[1]),function(d,f,m){var _=(m||t).length,p=a[_],g,v,b,M,y,T,x,S,R;if(!p){if(R=t.grid==="auto"?0:(t.grid||[1,Vn])[1],!R){for(x=-Vn;x<(x=m[R++].getBoundingClientRect().left)&&R<_;);R<_&&R--}for(p=a[_]=[],g=l?Math.min(R,_)*h-.5:i%R,v=R===Vn?0:l?_*u/R-.5:i/R|0,x=0,S=Vn,T=0;T<_;T++)b=T%R-g,M=v-(T/R|0),p[T]=y=c?Math.abs(c==="y"?M:b):op(b*b+M*M),y>x&&(x=y),y<S&&(S=y);i==="random"&&Tp(p),p.max=x-S,p.min=S,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(R>_?_-1:c?c==="y"?_/R:R:Math.max(R,_/R))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=sn(t.amount||t.each)||0,n=n&&_<0?vS(n):n}return _=(p[d]-p.min)/p.max||0,Et(p.b+(n?n(_):_)*p.v)+p.u}},zc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Et(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Di(n)?0:sn(n))}},wp=function(e,t){var n=rn(e),i,s;return!n&&fi(e)&&(i=n=e.radius||Vn,e.values?(e=Wn(e.values),(s=!Di(e[0]))&&(i*=i)):e=zc(e.increment)),cs(t,n?It(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Vn,h=0,u=e.length,d,f;u--;)s?(d=e[u].x-o,f=e[u].y-l,d=d*d+f*f):d=Math.abs(e[u]-o),d<c&&(c=d,h=u);return h=!i||c<=i?e[h]:a,s||h===a||Di(a)?h:h+sn(a)}:zc(e))},Ap=function(e,t,n,i){return cs(rn(e)?!t:n===!0?!!(n=0):!i,function(){return rn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},oS=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},lS=function(e,t){return function(n){return e(parseFloat(n))+(t||sn(n))}},cS=function(e,t,n){return Cp(e,t,0,1,n)},Rp=function(e,t,n){return cs(n,function(i){return e[~~t(i)]})},hS=function r(e,t,n){var i=t-e;return rn(e)?Rp(e,r(0,e.length),t):cs(n,function(s){return(i+(s-e)%i)%i+e})},uS=function r(e,t,n){var i=t-e,s=i*2;return rn(e)?Rp(e,r(0,e.length-1),t):cs(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},pa=function(e){return e.replace(Wy,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Xy);return Ap(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Cp=function(e,t,n,i,s){var a=t-e,o=i-n;return cs(s,function(l){return n+((l-e)/a*o||0)})},dS=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=Zt(e),o={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(rn(e)&&!rn(t)){for(h=[],u=e.length,d=u-2,c=1;c<u;c++)h.push(r(e[c-1],e[c]));u--,s=function(m){m*=u;var _=Math.min(d,~~m);return h[_](m-_)},n=t}else i||(e=dr(rn(e)?[]:{},e));if(!h){for(l in t)Uh.call(o,e,l,"get",t[l]);s=function(m){return kh(m,o)||(a?e.p:e)}}}return cs(n,s)},Ud=function(e,t,n){var i=e.labels,s=Vn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Pn=function(e,t,n){var i=e.vars,s=i[t],a=bt,o=e._ctx,l,c,h;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&es.length&&Lo(),o&&(bt=o),h=l?s.apply(c,l):s.call(c),bt=a,h},Gr=function(e){return as(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Qt),e.progress()<1&&Pn(e,"onInterrupt"),e},js,Pp=[],Lp=function(e){if(e)if(e=!e.name&&e.default||e,Rh()||e.headless){var t=e.name,n=It(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:fa,render:kh,add:Uh,kill:CS,modifier:RS,rawVars:0},a={targetTest:0,get:0,getSetter:Bh,aliases:{},register:0};if(mr(),e!==i){if(An[t])return;On(i,On(Io(e,s),a)),dr(i.prototype,dr(s,Io(e,a))),An[i.prop=t]=i,e.targetTest&&(_o.push(i),Lh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}fp(t,i),e.register&&e.register(Tn,i,Sn)}else Pp.push(e)},xt=255,Hr={aqua:[0,xt,xt],lime:[0,xt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,xt],navy:[0,0,128],white:[xt,xt,xt],olive:[128,128,0],yellow:[xt,xt,0],orange:[xt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[xt,0,0],pink:[xt,192,203],cyan:[0,xt,xt],transparent:[xt,xt,xt,0]},Dl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*xt+.5|0},Ip=function(e,t,n){var i=e?Di(e)?[e>>16,e>>8&xt,e&xt]:0:Hr.black,s,a,o,l,c,h,u,d,f,m;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Hr[e])i=Hr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&xt,i&xt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&xt,e&xt]}else if(e.substr(0,3)==="hsl"){if(i=m=e.match(Pd),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=Dl(l+1/3,s,a),i[1]=Dl(l,s,a),i[2]=Dl(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(cp),n&&i.length<4&&(i[3]=1),i}else i=e.match(Pd)||Hr.transparent;i=i.map(Number)}return t&&!m&&(s=i[0]/xt,a=i[1]/xt,o=i[2]/xt,u=Math.max(s,a,o),d=Math.min(s,a,o),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===s?(a-o)/f+(a<o?6:0):u===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Dp=function(e){var t=[],n=[],i=-1;return e.split(ts).forEach(function(s){var a=s.match(Qs)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Od=function(e,t,n){var i="",s=(e+i).match(ts),a=t?"hsla(":"rgba(",o=0,l,c,h,u;if(!s)return e;if(s=s.map(function(d){return(d=Ip(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=Dp(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(ts,"1").split(Qs),u=c.length-1;o<u;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(ts),u=c.length-1;o<u;o++)i+=c[o]+s[o];return i+c[u]},ts=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Hr)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),fS=/hsl[a]?\(/,Np=function(e){var t=e.join(" "),n;if(ts.lastIndex=0,ts.test(t))return n=fS.test(t),e[1]=Od(e[1],n),e[0]=Od(e[0],n,Dp(e[1])),!0},ma,Cn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,u,d,f,m=function _(p){var g=r()-i,v=p===!0,b,M,y,T;if((g>e||g<0)&&(n+=g-t),i+=g,y=i-n,b=y-a,(b>0||v)&&(T=++u.frame,d=y-u.time*1e3,u.time=y=y/1e3,a+=b+(b>=s?4:s-b),M=1),v||(l=c(_)),M)for(f=0;f<o.length;f++)o[f](y,d,T,p)};return u={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){up&&(!Nc&&Rh()&&(ri=Nc=window,Ch=ri.document||{},Un.gsap=Tn,(ri.gsapVersions||(ri.gsapVersions=[])).push(Tn.version),dp(Po||ri.GreenSockGlobals||!ri.gsap&&ri||{}),Pp.forEach(Lp)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(p){return setTimeout(p,a-u.time*1e3+1|0)},ma=1,m(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),ma=0,c=fa},lagSmoothing:function(p,g){e=p||1/0,t=Math.min(g||33,e)},fps:function(p){s=1e3/(p||240),a=u.time*1e3+s},add:function(p,g,v){var b=g?function(M,y,T,x){p(M,y,T,x),u.remove(b)}:p;return u.remove(p),o[v?"unshift":"push"](b),mr(),b},remove:function(p,g){~(g=o.indexOf(p))&&o.splice(g,1)&&f>=g&&f--},_listeners:o},u}(),mr=function(){return!ma&&Cn.wake()},it={},pS=/^[\d.\-M][\d.\-,\s]/,mS=/["']/g,gS=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(mS,"").trim():+c,i=l.substr(o+1).trim();return t},_S=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},xS=function(e){var t=(e+"").split("("),n=it[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[gS(t[1])]:_S(e).split(",").map(_p)):it._CE&&pS.test(e)?it._CE("",e):n},vS=function(e){return function(t){return 1-e(1-t)}},Es=function(e,t){return e&&(It(e)?e:it[e]||xS(e))||t},Ps=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return yn(e,function(o){it[o]=Un[o]=s,it[a=o.toLowerCase()]=n;for(var l in s)it[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=it[o+"."+l]=s[l]}),s},Up=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Nl=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Dc*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*Vy((h-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Up(o);return s=Dc/s,l.config=function(c,h){return r(e,c,h)},l},Ul=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Up(n);return i.config=function(s){return r(e,s)},i};yn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Ps(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});it.Linear.easeNone=it.none=it.Linear.easeIn;Ps("Elastic",Nl("in"),Nl("out"),Nl());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};Ps("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Ps("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Ps("Circ",function(r){return-(op(1-r*r)-1)});Ps("Sine",function(r){return r===1?1:-Hy(r*zy)+1});Ps("Back",Ul("in"),Ul("out"),Ul());it.SteppedEase=it.steps=Un.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-vt;return function(o){return((i*ya(0,a,o)|0)+s)*n}}};ua.ease=it["quad.out"];yn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Ih+=r+","+r+"Params,"});var Op=function(e,t){this.id=Gy++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:mp,this.set=t?t.getSetter:Bh},ga=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,pr(this,+t.duration,1,1),this.data=t.data,bt&&(this._ctx=bt,bt.data.push(this)),ma||Cn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,pr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(mr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Yo(this,n),!s._dp||s.parent||Mp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&oi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===vt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),gp(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Dd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Dd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?fr(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-vt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Do(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-vt?0:this._rts,this.totalTime(ya(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),qo(this),jy(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(mr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==vt&&(this._tTime-=vt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Et(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&oi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Mn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Do(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Zy);var i=Qt;return Qt=n,Nh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Qt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Nd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Nd(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Bn(this,n),Mn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Mn(i)),this._dur||(this._zTime=-vt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-vt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-vt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-vt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=It(n)?n:xp,l=function(){var h=i.then;i.then=null,s&&s(),It(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Gr(this)},r}();On(ga.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-vt,_prom:0,_ps:!1,_rts:1});var _n=function(r){ap(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Mn(n.sortChildren),wt&&oi(n.parent||wt,Ei(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&yp(Ei(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return $r(0,arguments,this),this},t.from=function(i,s,a){return $r(1,arguments,this),this},t.fromTo=function(i,s,a,o){return $r(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Jr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ft(i,s,Bn(this,a),1),this},t.call=function(i,s,a){return oi(this,Ft.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Ft(i,a,Bn(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,Jr(a).immediateRender=Mn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},t.staggerFromTo=function(i,s,a,o,l,c,h,u){return o.startAt=a,Jr(o).immediateRender=Mn(o.immediateRender),this.staggerTo(i,s,o,l,c,h,u)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Et(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,f,m,_,p,g,v,b,M,y,T,x;if(this!==wt&&h>l&&i>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),d=h,M=this._start,b=this._ts,g=!b,u&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(d=Et(h%p),h===l?(_=this._repeat,d=c):(y=Et(h/p),_=~~y,_&&_===y&&(d=c,_--),d>c&&(d=c)),y=fr(this._tTime,p),!o&&this._tTime&&y!==_&&this._tTime-y*p-this._dur<=0&&(y=_),T&&_&1&&(d=c-d,x=1),_!==y&&!this._lock){var S=T&&y&1,R=S===(T&&_&1);if(_<y&&(S=!S),o=S?0:h%c?c:h,this._lock=1,this.render(o||(x?0:Et(_*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Pn(this,"onRepeat"),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1,y=_),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,R&&(this._lock=2,o=S?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=iS(this,Et(o),Et(d)),v&&(h-=d-(d=v._start))),this._tTime=h,this._time=d,this._act=!!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!s&&!y&&(Pn(this,"onStart"),this._tTime!==h))return this;if(d>=o&&i>=0)for(f=this._first;f;){if(m=f._next,(f._act||d>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,a),d!==this._time||!this._ts&&!g){v=0,m&&(h+=this._zTime=-vt);break}}f=m}else{f=this._last;for(var P=i<0?i:d;f;){if(m=f._prev,(f._act||P<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(P-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(P-f._start)*f._ts,s,a||Qt&&Nh(f)),d!==this._time||!this._ts&&!g){v=0,m&&(h+=this._zTime=P?-vt:vt);break}}f=m}}if(v&&!s&&(this.pause(),v.render(d>=o?0:-vt)._zTime=d>=o?1:-1,this._ts))return this._start=M,qo(this),this.render(i,s,a);this._onUpdate&&!s&&Pn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(M===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&as(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(Pn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(Di(s)||(s=Bn(this,s,i)),!(i instanceof ga)){if(rn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Zt(i))return this.addLabel(i,s);if(It(i))i=Ft.delayedCall(0,i);else return this}return this!==i?oi(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Vn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Ft?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return Zt(i)?this.removeLabel(i):It(i)?this.killTweensOf(i):(i.parent===this&&Xo(this,i),i===this._recent&&(this._recent=this._last),Ts(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Et(Cn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Bn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Ft.delayedCall(0,s||fa,a);return o.data="isPause",this._hasPause=1,oi(this,o,Bn(this,i))},t.removePause=function(i){var s=this._first;for(i=Bn(this,i);s;)s._start===i&&s.data==="isPause"&&as(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Ji!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=Wn(i),l=this._first,c=Di(s),h;l;)l instanceof Ft?Jy(l._targets,o)&&(c?(!Ji||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=Bn(a,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,m=Ft.to(a,On({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||vt,onStart:function(){if(a.pause(),!f){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());m._dur!==p&&pr(m,p,0,1).render(m._time,!0,!0),f=1}h&&h.apply(m,u||[])}},s));return d?m.render(0):m},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,On({startAt:{time:Bn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Ud(this,Bn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Ud(this,Bn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+vt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Et(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Ts(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ts(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=Vn,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,oi(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=Et(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;pr(a,a===wt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(wt._ts&&(gp(wt,Do(i,wt)),pp=Cn.frame),Cn.frame>=Ld){Ld+=Dn.autoSleep||120;var s=wt._first;if((!s||!s._ts)&&Dn.autoSleep&&Cn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Cn.sleep()}}},e}(ga);On(_n.prototype,{_lock:0,_hasPause:0,_forcing:0});var MS=function(e,t,n,i,s,a,o){var l=new Sn(this._pt,e,t,0,1,Hp,null,s),c=0,h=0,u,d,f,m,_,p,g,v;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=pa(i)),a&&(v=[n,i],a(v,e,t),n=v[0],i=v[1]),d=n.match(Ll)||[];u=Ll.exec(i);)m=u[0],_=i.substring(c,u.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),m!==d[h++]&&(p=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:m.charAt(1)==="="?ir(p,m)-p:parseFloat(m)-p,m:f&&f<4?Math.round:0},c=Ll.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(hp.test(i)||g)&&(l.e=0),this._pt=l,l},Uh=function(e,t,n,i,s,a,o,l,c,h){It(i)&&(i=i(s||0,e,a));var u=e[t],d=n!=="get"?n:It(u)?c?e[t.indexOf("set")||!It(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,f=It(u)?c?ES:zp:Fh,m;if(Zt(i)&&(~i.indexOf("random(")&&(i=pa(i)),i.charAt(1)==="="&&(m=ir(d,i)+(sn(d)||0),(m||m===0)&&(i=m))),!h||d!==i||Gc)return!isNaN(d*i)&&i!==""?(m=new Sn(this._pt,e,t,+d||0,i-(d||0),typeof u=="boolean"?AS:Gp,0,f),c&&(m.fp=c),o&&m.modifier(o,this,e),this._pt=m):(!u&&!(t in e)&&Ph(t,i),MS.call(this,e,t,d,i,f,l||Dn.stringFilter,c))},yS=function(e,t,n,i,s){if(It(e)&&(e=Qr(e,s,t,n,i)),!fi(e)||e.style&&e.nodeType||rn(e)||lp(e))return Zt(e)?Qr(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Qr(e[o],s,t,n,i);return a},Fp=function(e,t,n,i,s,a){var o,l,c,h;if(An[e]&&(o=new An[e]).init(s,o.rawVars?t[e]:yS(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Sn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==js))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},Ji,Gc,Oh=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,f=i.autoRevert,m=e._dur,_=e._startAt,p=e._targets,g=e.parent,v=g&&g.data==="nested"?g.vars.targets:p,b=e._overwrite==="auto"&&!wh,M=e.timeline,y=i.easeReverse||u,T,x,S,R,P,D,F,G,I,H,Y,k,oe;if(M&&(!d||!s)&&(s="none"),e._ease=Es(s,ua.ease),e._rEase=y&&(Es(y)||e._ease),e._from=!M&&!!i.runBackwards,e._from&&(e.ratio=1),!M||d&&!i.stagger){if(G=p[0]?bs(p[0]).harness:0,k=G&&i[G.prop],T=Io(i,Lh),_&&(_._zTime<0&&_.progress(1),t<0&&h&&o&&!f?_.render(-1,!0):_.revert(h&&m?go:Ky),_._lazy=0),a){if(as(e._startAt=Ft.set(p,On({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&Mn(l),startAt:null,delay:0,onUpdate:c&&function(){return Pn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Qt||!o&&!f)&&e._startAt.revert(go),o&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&m&&!_){if(t&&(o=!1),S=On({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Mn(l),immediateRender:o,stagger:0,parent:g},T),k&&(S[G.prop]=k),as(e._startAt=Ft.set(p,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Qt?e._startAt.revert(go):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,vt,vt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&Mn(l)||l&&!m,x=0;x<p.length;x++){if(P=p[x],F=P._gsap||Dh(p)[x]._gsap,e._ptLookup[x]=H={},Uc[F.id]&&es.length&&Lo(),Y=v===p?x:v.indexOf(P),G&&(I=new G).init(P,k||T,e,Y,v)!==!1&&(e._pt=R=new Sn(e._pt,P,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(K){H[K]=R}),I.priority&&(D=1)),!G||k)for(S in T)An[S]&&(I=Fp(S,T,e,Y,P,v))?I.priority&&(D=1):H[S]=R=Uh.call(e,P,S,"get",T[S],Y,v,0,i.stringFilter);e._op&&e._op[x]&&e.kill(P,e._op[x]),b&&e._pt&&(Ji=e,wt.killTweensOf(P,H,e.globalTime(t)),oe=!e.parent,Ji=0),e._pt&&l&&(Uc[F.id]=1)}D&&Vp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!oe,d&&t<=0&&M.render(Vn,!0,!0)},SS=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(h=d[f][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Gc=1,e.vars[t]="+=0",Oh(e,o),Gc=0,l?da(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=Nt(n)+sn(u.e)),u.b&&(u.b=h.s+sn(u.b))},bS=function(e,t){var n=e[0]?bs(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=dr({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},TS=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(rn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Qr=function(e,t,n,i,s){return It(e)?e.call(t,n,i,s):Zt(e)&&~e.indexOf("random(")?pa(e):e},Bp=Ih+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",kp={};yn(Bp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return kp[r]=1});var Ft=function(r){ap(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Jr(i))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,m=l.keyframes,_=l.defaults,p=l.scrollTrigger,g=i.parent||wt,v=(rn(n)||lp(n)?Di(n[0]):"length"in i)?[n]:Wn(n),b,M,y,T,x,S,R,P;if(o._targets=v.length?Dh(v):da("GSAP target "+n+" not found. https://gsap.com",!Dn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,m||d||to(c)||to(h)){i=o.vars;var D=i.easeReverse||i.yoyoEase;if(b=o.timeline=new _n({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:v}),b.kill(),b.parent=b._dp=Ei(o),b._start=0,d||to(c)||to(h)){if(T=v.length,R=d&&Ep(d),fi(d))for(x in d)~Bp.indexOf(x)&&(P||(P={}),P[x]=d[x]);for(M=0;M<T;M++)y=Io(i,kp),y.stagger=0,D&&(y.easeReverse=D),P&&dr(y,P),S=v[M],y.duration=+Qr(c,Ei(o),M,S,v),y.delay=(+Qr(h,Ei(o),M,S,v)||0)-o._delay,!d&&T===1&&y.delay&&(o._delay=h=y.delay,o._start+=h,y.delay=0),b.to(S,y,R?R(M,S,v):0),b._ease=it.none;b.duration()?c=h=0:o.timeline=0}else if(m){Jr(On(b.vars.defaults,{ease:"none"})),b._ease=Es(m.ease||i.ease||"none");var F=0,G,I,H;if(rn(m))m.forEach(function(Y){return b.to(v,Y,">")}),b.duration();else{y={};for(x in m)x==="ease"||x==="easeEach"||TS(x,m[x],y,m.easeEach);for(x in y)for(G=y[x].sort(function(Y,k){return Y.t-k.t}),F=0,M=0;M<G.length;M++)I=G[M],H={ease:I.e,duration:(I.t-(M?G[M-1].t:0))/100*c},H[x]=I.v,b.to(v,H,F),F+=H.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||o.duration(c=b.duration())}else o.timeline=0;return f===!0&&!wh&&(Ji=Ei(o),wt.killTweensOf(v),Ji=0),oi(g,Ei(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!c&&!m&&o._start===Et(g._time)&&Mn(u)&&eS(Ei(o))&&g.data!=="nested")&&(o._tTime=-vt,o.render(Math.max(0,-h)||0)),p&&yp(Ei(o),p),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-vt&&!h?l:i<vt?0:i,d,f,m,_,p,g,v,b;if(!c)nS(this,i,s,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,b=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,a);if(d=Et(u%_),u===l?(m=this._repeat,d=c):(p=Et(u/_),m=~~p,m&&m===p?(d=c,m--):d>c&&(d=c)),g=this._yoyo&&m&1,g&&(d=c-d),p=fr(this._tTime,_),d===o&&!a&&this._initted&&m===p)return this._tTime=u,this;m!==p&&this.vars.repeatRefresh&&!g&&!this._lock&&d!==_&&this._initted&&(this._lock=a=1,this.render(Et(_*m),!0).invalidate()._lock=0)}if(!this._initted){if(Sp(this,h?i:d,a,s,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&m!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var M=d<o;if(M!==this._inv){var y=M?o:c-o;this._inv=M,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=y?(M?-1:1)/y:0,this._invScale=M?-this.ratio:1-this.ratio,this._invEase=M?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(d/c);if(this._from&&(this.ratio=v=1-v),this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&u&&!s&&!p&&(Pn(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;b&&b.render(i<0?i:b._dur*b._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Oc(this,i,s,a),Pn(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!s&&this.parent&&Pn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Oc(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&as(this,1),!s&&!(h&&!o)&&(u||o||g)&&(Pn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){ma||Cn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Oh(this,c),h=this._ease(c/this._dur),SS(this,i,s,a,o,h,c,l)?this.resetTo(i,s,a,o,1):(Yo(this,0),this.parent||vp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Gr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Qt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Ji&&Ji.vars.overwrite!==!0)._first||Gr(this),this.parent&&a!==this.timeline.totalDuration()&&pr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Wn(i):o,c=this._ptLookup,h=this._pt,u,d,f,m,_,p,g;if((!s||s==="all")&&Qy(o,l))return s==="all"&&(this._pt=0),Gr(this);for(u=this._op=this._op||[],s!=="all"&&(Zt(s)&&(_={},yn(s,function(v){return _[v]=1}),s=_),s=bS(o,s)),g=o.length;g--;)if(~l.indexOf(o[g])){d=c[g],s==="all"?(u[g]=s,m=d,f={}):(f=u[g]=u[g]||{},m=s);for(_ in m)p=d&&d[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Xo(this,p,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&Gr(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return $r(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return $r(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return wt.killTweensOf(i,s,a)},e}(ga);On(Ft.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});yn("staggerTo,staggerFrom,staggerFromTo",function(r){Ft[r]=function(){var e=new _n,t=Bc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Fh=function(e,t,n){return e[t]=n},zp=function(e,t,n){return e[t](n)},ES=function(e,t,n,i){return e[t](i.fp,n)},wS=function(e,t,n){return e.setAttribute(t,n)},Bh=function(e,t){return It(e[t])?zp:Ah(e[t])&&e.setAttribute?wS:Fh},Gp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},AS=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Hp=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},kh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},RS=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},CS=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Xo(this,t,"_pt"):t.dep||(n=1),t=i;return!n},PS=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Vp=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Sn=function(){function r(t,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Gp,this.d=l||this,this.set=c||Fh,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=PS,this.m=n,this.mt=s,this.tween=i},r}();yn(Ih+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Lh[r]=1});Un.TweenMax=Un.TweenLite=Ft;Un.TimelineLite=Un.TimelineMax=_n;wt=new _n({sortChildren:!1,defaults:ua,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Dn.stringFilter=Np;var ws=[],xo={},LS=[],Fd=0,IS=0,Ol=function(e){return(xo[e]||LS).map(function(t){return t()})},Hc=function(){var e=Date.now(),t=[];e-Fd>2&&(Ol("matchMediaInit"),ws.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=ri.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Ol("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Fd=e,Ol("matchMedia"))},Wp=function(){function r(t,n){this.selector=n&&kc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=IS++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){It(n)&&(s=i,i=n,n=It);var a=this,o=function(){var c=bt,h=a.selector,u;return c&&c!==a&&c.data.push(a),s&&(a.selector=kc(s)),bt=a,u=i.apply(a,arguments),It(u)&&a._r.push(u),bt=c,a.selector=h,a.isReverted=!1,u};return a.last=o,n===It?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=bt;bt=null,n(this),bt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ft&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof _n?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ft)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=ws.length;a--;)ws[a].id===this.id&&ws.splice(a,1)},e.revert=function(n){this.kill(n||{})},r}(),DS=function(){function r(t){this.contexts=[],this.scope=t,bt&&bt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){fi(n)||(n={matches:n});var a=new Wp(0,s||this.scope),o=a.conditions={},l,c,h;bt&&!a.selector&&(a.selector=bt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=ri.matchMedia(n[c]),l&&(ws.indexOf(a)<0&&ws.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(Hc):l.addEventListener("change",Hc)));return h&&i(a,function(u){return a.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),No={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Lp(i)})},timeline:function(e){return new _n(e)},getTweensOf:function(e,t){return wt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Zt(e)&&(e=Wn(e)[0]);var s=bs(e||{}).get,a=n?xp:_p;return n==="native"&&(n=""),e&&(t?a((An[t]&&An[t].get||s)(e,t,n,i)):function(o,l,c){return a((An[o]&&An[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Wn(e),e.length>1){var i=e.map(function(h){return Tn.quickSetter(h,t,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}e=e[0]||{};var a=An[t],o=bs(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(h){var u=new a;js._pt=0,u.init(e,n?h+n:h,js,0,[e]),u.render(1,u),js._pt&&kh(1,js)}:o.set(e,l);return a?c:function(h){return c(e,l,n?h+n:h,o,1)}},quickTo:function(e,t,n){var i,s=Tn.to(e,On((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return s.resetTo(t,l,c,h)};return a.tween=s,a},isTweening:function(e){return wt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Es(e.ease,ua.ease)),Id(ua,e||{})},config:function(e){return Id(Dn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!An[o]&&!Un[o]&&da(t+" effect requires "+o+" plugin.")}),Il[t]=function(o,l,c){return n(Wn(o),On(l||{},s),c)},a&&(_n.prototype[t]=function(o,l,c){return this.add(Il[t](o,fi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){it[e]=Es(t)},parseEase:function(e,t){return arguments.length?Es(e,t):it},getById:function(e){return wt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new _n(e),i,s;for(n.smoothChildTiming=Mn(e.smoothChildTiming),wt.remove(n),n._dp=0,n._time=n._tTime=wt._time,i=wt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Ft&&i.vars.onComplete===i._targets[0]))&&oi(n,i,i._start-i._delay),i=s;return oi(wt,n,0),n},context:function(e,t){return e?new Wp(e,t):bt},matchMedia:function(e){return new DS(e)},matchMediaRefresh:function(){return ws.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Hc()},addEventListener:function(e,t){var n=xo[e]||(xo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=xo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:hS,wrapYoyo:uS,distribute:Ep,random:Ap,snap:wp,normalize:cS,getUnit:sn,clamp:rS,splitColor:Ip,toArray:Wn,selector:kc,mapRange:Cp,pipe:oS,unitize:lS,interpolate:dS,shuffle:Tp},install:dp,effects:Il,ticker:Cn,updateRoot:_n.updateRoot,plugins:An,globalTimeline:wt,core:{PropTween:Sn,globals:fp,Tween:Ft,Timeline:_n,Animation:ga,getCache:bs,_removeLinkedListItem:Xo,reverting:function(){return Qt},context:function(e){return e&&bt&&(bt.data.push(e),e._ctx=bt),bt},suppressOverwrites:function(e){return wh=e}}};yn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return No[r]=Ft[r]});Cn.add(_n.updateRoot);js=No.to({},{duration:0});var NS=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},US=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=NS(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Fl=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Zt(s)&&(l={},yn(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}US(o,s)}}}},Tn=No.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Qt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Fl("roundProps",zc),Fl("modifiers"),Fl("snap",wp))||No;Ft.version=_n.version=Tn.version="3.15.0";up=1;Rh()&&mr();it.Power0;it.Power1;it.Power2;it.Power3;it.Power4;it.Linear;it.Quad;it.Cubic;it.Quart;it.Quint;it.Strong;it.Elastic;it.Back;it.SteppedEase;it.Bounce;it.Sine;it.Expo;it.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Bd,$i,sr,zh,Ss,kd,Gh,OS=function(){return typeof window<"u"},Ni={},ys=180/Math.PI,rr=Math.PI/180,Zs=Math.atan2,zd=1e8,Hh=/([A-Z])/g,FS=/(left|right|width|margin|padding|x)/i,BS=/[\s,\(]\S/,ci={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Vc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},kS=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},zS=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},GS=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},HS=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Xp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},qp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},VS=function(e,t,n){return e.style[t]=n},WS=function(e,t,n){return e.style.setProperty(t,n)},XS=function(e,t,n){return e._gsap[t]=n},qS=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},YS=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},KS=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Rt="transform",bn=Rt+"Origin",ZS=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in Ni&&s){if(this.tfm=this.tfm||{},e!=="transform")e=ci[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=wi(i,o)}):this.tfm[e]=a.x?a[e]:wi(i,e),e===bn&&(this.tfm.zOrigin=a.zOrigin);else return ci.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Rt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(bn,t,"")),e=Rt}(s||t)&&this.props.push(e,t,s[e])},Yp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},JS=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Hh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Gh(),(!s||!s.isStart)&&!n[Rt]&&(Yp(n),i.zOrigin&&n[bn]&&(n[bn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Kp=function(e,t){var n={target:e,props:[],revert:JS,save:ZS};return e._gsap||Tn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Zp,Wc=function(e,t){var n=$i.createElementNS?$i.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):$i.createElement(e);return n&&n.style?n:$i.createElement(e)},Ln=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Hh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,gr(t)||t,1)||""},Gd="O,Moz,ms,Ms,Webkit".split(","),gr=function(e,t,n){var i=t||Ss,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Gd[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Gd[a]:"")+e},Xc=function(){OS()&&window.document&&(Bd=window,$i=Bd.document,sr=$i.documentElement,Ss=Wc("div")||{style:{}},Wc("div"),Rt=gr(Rt),bn=Rt+"Origin",Ss.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Zp=!!gr("perspective"),Gh=Tn.core.reverting,zh=1)},Hd=function(e){var t=e.ownerSVGElement,n=Wc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),sr.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),sr.removeChild(n),s},Vd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Jp=function(e){var t,n;try{t=e.getBBox()}catch{t=Hd(e),n=1}return t&&(t.width||t.height)||n||(t=Hd(e)),t&&!t.width&&!t.x&&!t.y?{x:+Vd(e,["x","cx","x1"])||0,y:+Vd(e,["y","cy","y1"])||0,width:0,height:0}:t},$p=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Jp(e))},os=function(e,t){if(t){var n=e.style,i;t in Ni&&t!==bn&&(t=Rt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Hh,"-$1").toLowerCase())):n.removeAttribute(t)}},Qi=function(e,t,n,i,s,a){var o=new Sn(e._pt,t,n,0,1,a?qp:Xp);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Wd={deg:1,rad:1,turn:1},$S={grid:1,flex:1},ls=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Ss.style,l=FS.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",f=i==="%",m,_,p,g;if(i===a||!s||Wd[i]||Wd[a])return s;if(a!=="px"&&!d&&(s=r(e,t,n,"px")),g=e.getCTM&&$p(e),(f||a==="%")&&(Ni[t]||~t.indexOf("adius")))return m=g?e.getBBox()[l?"width":"height"]:e[h],Nt(f?s/m*u:s/100*m);if(o[l?"width":"height"]=u+(d?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===$i||!_.appendChild)&&(_=$i.body),p=_._gsap,p&&f&&p.width&&l&&p.time===Cn.time&&!p.uncache)return Nt(s/p.width*u);if(f&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=u+i,m=e[h],v?e.style[t]=v:os(e,t)}else(f||a==="%")&&!$S[Ln(_,"display")]&&(o.position=Ln(e,"position")),_===e&&(o.position="static"),_.appendChild(Ss),m=Ss[h],_.removeChild(Ss),o.position="absolute";return l&&f&&(p=bs(_),p.time=Cn.time,p.width=_[h]),Nt(d?m*s/u:m&&s?u/m*s:0)},wi=function(e,t,n,i){var s;return zh||Xc(),t in ci&&t!=="transform"&&(t=ci[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ni[t]&&t!=="transform"?(s=xa(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Oo(Ln(e,bn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Uo[t]&&Uo[t](e,t,n)||Ln(e,t)||mp(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ls(e,t,s,n)+n:s},QS=function(e,t,n,i){if(!n||n==="none"){var s=gr(t,e,1),a=s&&Ln(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=Ln(e,"borderTopColor"))}var o=new Sn(this._pt,e.style,t,0,1,Hp),l=0,c=0,h,u,d,f,m,_,p,g,v,b,M,y;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Ln(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Ln(e,t)||i,_?e.style[t]=_:os(e,t)),h=[n,i],Np(h),n=h[0],i=h[1],d=n.match(Qs)||[],y=i.match(Qs)||[],y.length){for(;u=Qs.exec(i);)p=u[0],v=i.substring(l,u.index),m?m=(m+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(m=1),p!==(_=d[c++]||"")&&(f=parseFloat(_)||0,M=_.substr((f+"").length),p.charAt(1)==="="&&(p=ir(f,p)+M),g=parseFloat(p),b=p.substr((g+"").length),l=Qs.lastIndex-b.length,b||(b=b||Dn.units[t]||M,l===i.length&&(i+=b,o.e+=b)),M!==b&&(f=ls(e,t,_,b)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:f,c:g-f,m:m&&m<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?qp:Xp;return hp.test(i)&&(o.e=0),this._pt=o,o},Xd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},jS=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Xd[n]||n,t[1]=Xd[i]||i,t.join(" ")},eb=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Ni[o]&&(l=1,o=o==="transformOrigin"?bn:Rt),os(n,o);l&&(os(n,Rt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",xa(n,1),a.uncache=1,Yp(i)))}},Uo={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Sn(e._pt,t,n,0,0,eb);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},_a=[1,0,0,1,0,0],Qp={},jp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},qd=function(e){var t=Ln(e,Rt);return jp(t)?_a:t.substr(7).match(cp).map(Nt)},Vh=function(e,t){var n=e._gsap||bs(e),i=e.style,s=qd(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?_a:s):(s===_a&&!e.offsetParent&&e!==sr&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,sr.appendChild(e)),s=qd(e),l?i.display=l:os(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):sr.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},qc=function(e,t,n,i,s,a){var o=e._gsap,l=s||Vh(e,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=l[0],m=l[1],_=l[2],p=l[3],g=l[4],v=l[5],b=t.split(" "),M=parseFloat(b[0])||0,y=parseFloat(b[1])||0,T,x,S,R;n?l!==_a&&(x=f*p-m*_)&&(S=M*(p/x)+y*(-_/x)+(_*v-p*g)/x,R=M*(-m/x)+y*(f/x)-(f*v-m*g)/x,M=S,y=R):(T=Jp(e),M=T.x+(~b[0].indexOf("%")?M/100*T.width:M),y=T.y+(~(b[1]||b[0]).indexOf("%")?y/100*T.height:y)),i||i!==!1&&o.smooth?(g=M-c,v=y-h,o.xOffset=u+(g*f+v*_)-g,o.yOffset=d+(g*m+v*p)-v):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=y,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[bn]="0px 0px",a&&(Qi(a,o,"xOrigin",c,M),Qi(a,o,"yOrigin",h,y),Qi(a,o,"xOffset",u,o.xOffset),Qi(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",M+" "+y)},xa=function(e,t){var n=e._gsap||new Op(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Ln(e,bn)||"0",h,u,d,f,m,_,p,g,v,b,M,y,T,x,S,R,P,D,F,G,I,H,Y,k,oe,K,L,A,V,ie,z,Z;return h=u=d=_=p=g=v=b=M=0,f=m=1,n.svg=!!(e.getCTM&&$p(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Rt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Rt]!=="none"?l[Rt]:"")),i.scale=i.rotate=i.translate="none"),x=Vh(e,n.svg),n.svg&&(n.uncache?(oe=e.getBBox(),c=n.xOrigin-oe.x+"px "+(n.yOrigin-oe.y)+"px",k=""):k=!t&&e.getAttribute("data-svg-origin"),qc(e,k||c,!!k||n.originIsAbsolute,n.smooth!==!1,x)),y=n.xOrigin||0,T=n.yOrigin||0,x!==_a&&(D=x[0],F=x[1],G=x[2],I=x[3],h=H=x[4],u=Y=x[5],x.length===6?(f=Math.sqrt(D*D+F*F),m=Math.sqrt(I*I+G*G),_=D||F?Zs(F,D)*ys:0,v=G||I?Zs(G,I)*ys+_:0,v&&(m*=Math.abs(Math.cos(v*rr))),n.svg&&(h-=y-(y*D+T*G),u-=T-(y*F+T*I))):(Z=x[6],ie=x[7],L=x[8],A=x[9],V=x[10],z=x[11],h=x[12],u=x[13],d=x[14],S=Zs(Z,V),p=S*ys,S&&(R=Math.cos(-S),P=Math.sin(-S),k=H*R+L*P,oe=Y*R+A*P,K=Z*R+V*P,L=H*-P+L*R,A=Y*-P+A*R,V=Z*-P+V*R,z=ie*-P+z*R,H=k,Y=oe,Z=K),S=Zs(-G,V),g=S*ys,S&&(R=Math.cos(-S),P=Math.sin(-S),k=D*R-L*P,oe=F*R-A*P,K=G*R-V*P,z=I*P+z*R,D=k,F=oe,G=K),S=Zs(F,D),_=S*ys,S&&(R=Math.cos(S),P=Math.sin(S),k=D*R+F*P,oe=H*R+Y*P,F=F*R-D*P,Y=Y*R-H*P,D=k,H=oe),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,g=180-g),f=Nt(Math.sqrt(D*D+F*F+G*G)),m=Nt(Math.sqrt(Y*Y+Z*Z)),S=Zs(H,Y),v=Math.abs(S)>2e-4?S*ys:0,M=z?1/(z<0?-z:z):0),n.svg&&(k=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!jp(Ln(e,Rt)),k&&e.setAttribute("transform",k))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(f*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Nt(f),n.scaleY=Nt(m),n.rotation=Nt(_)+o,n.rotationX=Nt(p)+o,n.rotationY=Nt(g)+o,n.skewX=v+o,n.skewY=b+o,n.transformPerspective=M+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[bn]=Oo(c)),n.xOffset=n.yOffset=0,n.force3D=Dn.force3D,n.renderTransform=n.svg?nb:Zp?em:tb,n.uncache=0,n},Oo=function(e){return(e=e.split(" "))[0]+" "+e[1]},Bl=function(e,t,n){var i=sn(t);return Nt(parseFloat(t)+parseFloat(ls(e,"x",n+"px",i)))+i},tb=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,em(e,t)},_s="0deg",Ur="0px",xs=") ",em=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,m=n.scaleX,_=n.scaleY,p=n.transformPerspective,g=n.force3D,v=n.target,b=n.zOrigin,M="",y=g==="auto"&&e&&e!==1||g===!0;if(b&&(u!==_s||h!==_s)){var T=parseFloat(h)*rr,x=Math.sin(T),S=Math.cos(T),R;T=parseFloat(u)*rr,R=Math.cos(T),a=Bl(v,a,x*R*-b),o=Bl(v,o,-Math.sin(T)*-b),l=Bl(v,l,S*R*-b+b)}p!==Ur&&(M+="perspective("+p+xs),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(y||a!==Ur||o!==Ur||l!==Ur)&&(M+=l!==Ur||y?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+xs),c!==_s&&(M+="rotate("+c+xs),h!==_s&&(M+="rotateY("+h+xs),u!==_s&&(M+="rotateX("+u+xs),(d!==_s||f!==_s)&&(M+="skew("+d+", "+f+xs),(m!==1||_!==1)&&(M+="scale("+m+", "+_+xs),v.style[Rt]=M||"translate(0, 0)"},nb=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,m=n.xOrigin,_=n.yOrigin,p=n.xOffset,g=n.yOffset,v=n.forceCSS,b=parseFloat(a),M=parseFloat(o),y,T,x,S,R;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=rr,c*=rr,y=Math.cos(l)*u,T=Math.sin(l)*u,x=Math.sin(l-c)*-d,S=Math.cos(l-c)*d,c&&(h*=rr,R=Math.tan(c-h),R=Math.sqrt(1+R*R),x*=R,S*=R,h&&(R=Math.tan(h),R=Math.sqrt(1+R*R),y*=R,T*=R)),y=Nt(y),T=Nt(T),x=Nt(x),S=Nt(S)):(y=u,S=d,T=x=0),(b&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(b=ls(f,"x",a,"px"),M=ls(f,"y",o,"px")),(m||_||p||g)&&(b=Nt(b+m-(m*y+_*x)+p),M=Nt(M+_-(m*T+_*S)+g)),(i||s)&&(R=f.getBBox(),b=Nt(b+i/100*R.width),M=Nt(M+s/100*R.height)),R="matrix("+y+","+T+","+x+","+S+","+b+","+M+")",f.setAttribute("transform",R),v&&(f.style[Rt]=R)},ib=function(e,t,n,i,s){var a=360,o=Zt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?ys:1),c=l-i,h=i+c+"deg",u,d;return o&&(u=s.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*zd)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*zd)%a-~~(c/a)*a)),e._pt=d=new Sn(e._pt,t,n,i,c,kS),d.e=h,d.u="deg",e._props.push(n),d},Yd=function(e,t){for(var n in t)e[n]=t[n];return e},sb=function(e,t,n){var i=Yd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,u,d,f,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Rt]=t,o=xa(n,1),os(n,Rt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Rt],a[Rt]=t,o=xa(n,1),a[Rt]=c);for(l in Ni)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(f=sn(c),m=sn(h),u=f!==m?ls(n,l,c,m):parseFloat(c),d=parseFloat(h),e._pt=new Sn(e._pt,o,l,u,d-u,Vc),e._pt.u=m||0,e._props.push(l));Yd(o,i)};yn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});Uo[e>1?"border"+r:r]=function(o,l,c,h,u){var d,f;if(arguments.length<4)return d=a.map(function(m){return wi(o,m,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},a.forEach(function(m,_){return f[m]=d[_]=d[_]||d[(_-1)/2|0]}),o.init(l,f,u)}});var tm={name:"css",register:Xc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,h,u,d,f,m,_,p,g,v,b,M,y,T,x,S,R;zh||Xc(),this.styles=this.styles||Kp(e),S=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(h=t[_],!(An[_]&&Fp(_,t,n,i,e,s)))){if(f=typeof h,m=Uo[_],f==="function"&&(h=h.call(n,i,e,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=pa(h)),m)m(this,e,_,h,n)&&(x=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",ts.lastIndex=0,ts.test(c)||(p=sn(c),g=sn(h),g?p!==g&&(c=ls(e,_,c,g)+g):p&&(h+=p)),this.add(o,"setProperty",c,h,i,s,0,0,_),a.push(_),S.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],Zt(c)&&~c.indexOf("random(")&&(c=pa(c)),sn(c+"")||c==="auto"||(c+=Dn.units[_]||sn(wi(e,_))||""),(c+"").charAt(1)==="="&&(c=wi(e,_))):c=wi(e,_),d=parseFloat(c),v=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),u=parseFloat(h),_ in ci&&(_==="autoAlpha"&&(d===1&&wi(e,"visibility")==="hidden"&&u&&(d=0),S.push("visibility",0,o.visibility),Qi(this,o,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=ci[_],~_.indexOf(",")&&(_=_.split(",")[0]))),b=_ in Ni,b){if(this.styles.save(_),R=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=Ln(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var P=e.style.perspective;e.style.perspective=h,h=Ln(e,"perspective"),P?e.style.perspective=P:os(e,"perspective")}u=parseFloat(h)}if(M||(y=e._gsap,y.renderTransform&&!t.parseTransform||xa(e,t.parseTransform),T=t.smoothOrigin!==!1&&y.smooth,M=this._pt=new Sn(this._pt,o,Rt,0,1,y.renderTransform,y,0,-1),M.dep=1),_==="scale")this._pt=new Sn(this._pt,y,"scaleY",y.scaleY,(v?ir(y.scaleY,v+u):u)-y.scaleY||0,Vc),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){S.push(bn,0,o[bn]),h=jS(h),y.svg?qc(e,h,0,T,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==y.zOrigin&&Qi(this,y,"zOrigin",y.zOrigin,g),Qi(this,o,_,Oo(c),Oo(h)));continue}else if(_==="svgOrigin"){qc(e,h,1,T,0,this);continue}else if(_ in Qp){ib(this,y,_,d,v?ir(d,v+h):h);continue}else if(_==="smoothOrigin"){Qi(this,y,"smooth",y.smooth,h);continue}else if(_==="force3D"){y[_]=h;continue}else if(_==="transform"){sb(this,h,e);continue}}else _ in o||(_=gr(_)||_);if(b||(u||u===0)&&(d||d===0)&&!BS.test(h)&&_ in o)p=(c+"").substr((d+"").length),u||(u=0),g=sn(h)||(_ in Dn.units?Dn.units[_]:p),p!==g&&(d=ls(e,_,c,g)),this._pt=new Sn(this._pt,b?y:o,_,d,(v?ir(d,v+u):u)-d,!b&&(g==="px"||_==="zIndex")&&t.autoRound!==!1?HS:Vc),this._pt.u=g||0,b&&R!==h?(this._pt.b=c,this._pt.e=R,this._pt.r=GS):p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=zS);else if(_ in o)QS.call(this,e,_,c,v?v+h:h);else if(_ in e)this.add(e,_,c||e[_],v?v+h:h,i,s);else if(_!=="parseTransform"){Ph(_,h);continue}b||(_ in o?S.push(_,0,o[_]):typeof e[_]=="function"?S.push(_,2,e[_]()):S.push(_,1,c||e[_])),a.push(_)}}x&&Vp(this)},render:function(e,t){if(t.tween._time||!Gh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:wi,aliases:ci,getSetter:function(e,t,n){var i=ci[t];return i&&i.indexOf(",")<0&&(t=i),t in Ni&&t!==bn&&(e._gsap.x||wi(e,"x"))?n&&kd===n?t==="scale"?qS:XS:(kd=n||{})&&(t==="scale"?YS:KS):e.style&&!Ah(e.style[t])?VS:~t.indexOf("-")?WS:Bh(e,t)},core:{_removeProperty:os,_getMatrix:Vh}};Tn.utils.checkPrefix=gr;Tn.core.getStyleSaver=Kp;(function(r,e,t,n){var i=yn(r+","+e+","+t,function(s){Ni[s]=1});yn(e,function(s){Dn.units[s]="deg",Qp[s]=1}),ci[i[13]]=r+","+e,yn(n,function(s){var a=s.split(":");ci[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");yn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Dn.units[r]="px"});Tn.registerPlugin(tm);var Dt=Tn.registerPlugin(tm)||Tn;Dt.core.Tween;let no=null,io=null,kl=null,zl=null;function nm(){if(no)return no;const r=document.createElement("canvas");r.width=512,r.height=512;const e=r.getContext("2d");e.clearRect(0,0,512,512),e.lineCap="round",e.lineJoin="round",e.strokeStyle="#111218",e.lineWidth=9,e.beginPath(),e.moveTo(130,115),e.bezierCurveTo(155,85,205,82,238,110),e.stroke(),e.beginPath(),e.moveTo(270,110),e.bezierCurveTo(305,88,355,92,385,120),e.stroke(),e.lineWidth=4.5,e.beginPath(),e.moveTo(172,82),e.quadraticCurveTo(195,74,218,80),e.stroke(),e.fillStyle="#ffffff",e.strokeStyle="#111218",e.lineWidth=9,e.beginPath(),e.ellipse(190,185,48,60,-.08,0,Math.PI*2),e.fill(),e.stroke(),e.beginPath(),e.ellipse(310,185,48,60,.08,0,Math.PI*2),e.fill(),e.stroke(),e.save(),e.beginPath(),e.ellipse(190,185,47,59,-.08,0,Math.PI*2),e.clip(),e.fillStyle="#f8d2b7",e.beginPath(),e.moveTo(130,120),e.lineTo(250,120),e.lineTo(250,185),e.quadraticCurveTo(190,202,130,182),e.closePath(),e.fill(),e.strokeStyle="#111218",e.lineWidth=8,e.beginPath(),e.moveTo(130,182),e.quadraticCurveTo(190,202,250,185),e.stroke(),e.restore(),e.save(),e.beginPath(),e.ellipse(310,185,47,59,.08,0,Math.PI*2),e.clip(),e.fillStyle="#f8d2b7",e.beginPath(),e.moveTo(250,120),e.lineTo(370,120),e.lineTo(370,182),e.quadraticCurveTo(310,202,250,185),e.closePath(),e.fill(),e.strokeStyle="#111218",e.lineWidth=8,e.beginPath(),e.moveTo(250,185),e.quadraticCurveTo(310,202,370,182),e.stroke(),e.restore(),e.lineWidth=5,e.beginPath(),e.moveTo(148,168),e.quadraticCurveTo(190,160,235,172),e.stroke(),e.beginPath(),e.moveTo(265,172),e.quadraticCurveTo(310,160,352,168),e.stroke(),e.fillStyle="#111218",e.beginPath(),e.ellipse(202,206,14,21,0,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(312,206,14,21,0,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.beginPath(),e.arc(206,198,5,0,Math.PI*2),e.arc(316,198,5,0,Math.PI*2),e.fill(),e.save(),e.beginPath(),e.moveTo(105,275),e.quadraticCurveTo(256,312,405,275),e.quadraticCurveTo(425,360,370,420),e.quadraticCurveTo(256,475,135,420),e.quadraticCurveTo(90,360,105,275),e.closePath(),e.fillStyle="#18080a",e.fill(),e.clip(),e.fillStyle="#ffffff",e.strokeStyle="#111218",e.lineWidth=5,e.beginPath(),e.moveTo(100,275),e.quadraticCurveTo(256,312,410,275),e.lineTo(410,335),e.quadraticCurveTo(256,365,100,335),e.closePath(),e.fill(),e.stroke(),[155,205,256,305,355].forEach(i=>{e.beginPath(),e.moveTo(i,290),e.lineTo(i,348),e.stroke()}),e.fillStyle="#e6283c",e.strokeStyle="#a61222",e.lineWidth=5,e.beginPath(),e.arc(256,440,78,Math.PI*1.1,Math.PI*1.9),e.quadraticCurveTo(256,480,256,440),e.fill(),e.stroke(),e.strokeStyle="#850d1a",e.lineWidth=4,e.beginPath(),e.moveTo(256,395),e.lineTo(256,435),e.stroke(),e.restore(),e.strokeStyle="#111218",e.lineWidth=9,e.beginPath(),e.moveTo(105,275),e.quadraticCurveTo(256,312,405,275),e.quadraticCurveTo(425,360,370,420),e.quadraticCurveTo(256,475,135,420),e.quadraticCurveTo(90,360,105,275),e.closePath(),e.stroke(),e.lineWidth=6,e.beginPath(),e.moveTo(95,260),e.quadraticCurveTo(80,285,100,305),e.stroke(),e.beginPath(),e.moveTo(415,260),e.quadraticCurveTo(430,285,410,305),e.stroke(),e.lineWidth=5,e.beginPath(),e.moveTo(215,478),e.quadraticCurveTo(256,492,295,478),e.stroke();const n=new la(r);return n.colorSpace=At,n.needsUpdate=!0,no=n,no}function im(){if(io)return io;const r=document.createElement("canvas");r.width=512,r.height=512;const e=r.getContext("2d");e.clearRect(0,0,512,512),e.lineCap="round",e.lineJoin="round",e.strokeStyle="#111218",e.lineWidth=7.5,e.beginPath(),e.moveTo(140,130),e.bezierCurveTo(165,75,220,80,240,125),e.stroke(),e.beginPath(),e.moveTo(270,125),e.bezierCurveTo(290,80,345,75,370,130),e.stroke(),e.fillStyle="#ffffff",e.strokeStyle="#111218",e.lineWidth=9,e.beginPath(),e.ellipse(195,200,52,70,-.04,0,Math.PI*2),e.fill(),e.stroke(),e.beginPath(),e.ellipse(315,200,52,70,.04,0,Math.PI*2),e.fill(),e.stroke(),e.lineWidth=4.5,e.beginPath(),e.moveTo(150,155),e.quadraticCurveTo(195,142,240,160),e.stroke(),e.beginPath(),e.moveTo(270,160),e.quadraticCurveTo(315,142,360,155),e.stroke(),e.fillStyle="#111218",e.beginPath(),e.ellipse(215,215,15,27,0,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(295,215,15,27,0,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.beginPath(),e.arc(220,205,6.5,0,Math.PI*2),e.arc(300,205,6.5,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(212,226,3.5,0,Math.PI*2),e.arc(292,226,3.5,0,Math.PI*2),e.fill(),e.save(),e.beginPath(),e.moveTo(115,280),e.quadraticCurveTo(256,315,395,280),e.quadraticCurveTo(420,365,365,425),e.quadraticCurveTo(256,480,145,425),e.quadraticCurveTo(90,365,115,280),e.closePath(),e.fillStyle="#18080a",e.fill(),e.clip(),e.fillStyle="#ffffff",e.strokeStyle="#111218",e.lineWidth=5,e.beginPath(),e.moveTo(110,280),e.quadraticCurveTo(256,315,400,280),e.lineTo(400,340),e.quadraticCurveTo(256,370,110,340),e.closePath(),e.fill(),e.stroke(),[165,210,256,300,345].forEach(i=>{e.beginPath(),e.moveTo(i,295),e.lineTo(i,352),e.stroke()}),e.fillStyle="#ff3860",e.strokeStyle="#c4193d",e.lineWidth=5,e.beginPath(),e.arc(256,445,82,Math.PI*1.1,Math.PI*1.9),e.quadraticCurveTo(256,485,256,445),e.fill(),e.stroke(),e.fillStyle="#ff7597",e.beginPath(),e.ellipse(256,425,36,12,0,0,Math.PI*2),e.fill(),e.restore(),e.strokeStyle="#111218",e.lineWidth=9,e.beginPath(),e.moveTo(115,280),e.quadraticCurveTo(256,315,395,280),e.quadraticCurveTo(420,365,365,425),e.quadraticCurveTo(256,480,145,425),e.quadraticCurveTo(90,365,115,280),e.closePath(),e.stroke(),e.lineWidth=6,e.beginPath(),e.moveTo(105,265),e.quadraticCurveTo(90,290,110,310),e.stroke(),e.beginPath(),e.moveTo(405,265),e.quadraticCurveTo(420,290,400,310),e.stroke(),e.lineWidth=5,e.beginPath(),e.moveTo(220,480),e.quadraticCurveTo(256,495,290,480),e.stroke();const n=new la(r);return n.colorSpace=At,n.needsUpdate=!0,io=n,io}function rb(){return kl||(kl=new xn({map:nm(),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1})),kl}function ab(){return zl||(zl=new xn({map:im(),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1})),zl}let Gl=null;function ob(){return Gl||(Gl=new Ee({color:14869998,roughness:.38,metalness:.04})),Gl}const vs=new Ee({color:13938487,roughness:.18,metalness:.9}),lb=new Ee({color:16777215,roughness:.25}),Kd=new Ee({color:657934,roughness:.25,metalness:.4}),cb=new Ee({color:789776,roughness:.25,metalness:.4}),lt={head:new St(.35,20,16),neck:new nt(.095,.125,.2,12),chest:(()=>{const r=new nt(.3,.24,.44,14);return r.scale(1.18,1,.78),r})(),pec:(()=>{const r=new St(.12,10,8);return r.scale(1.1,.85,.45),r})(),waist:(()=>{const r=new nt(.24,.21,.32,14);return r.scale(1.05,1,.72),r})(),hips:(()=>{const r=new nt(.21,.24,.24,14);return r.scale(1.08,1,.76),r})(),shoulder:new St(.105,10,10),upperArm:new Ti(.078,.28,4,8),elbow:new St(.068,8,8),forearm:new Ti(.068,.26,4,8),palm:new qe(.088,.088,.038),finger:new Ti(.015,.06,3,4),thumb:new Ti(.016,.05,3,4),hipJoint:new St(.098,8,8),thigh:new Ti(.098,.34,4,8),knee:new St(.082,8,8),calf:new Ti(.082,.32,4,8),foot:new Ti(.072,.2,4,8),shirt:(()=>{const r=new ji(.22,.38,3);return r.rotateZ(Math.PI),r})(),stud:new St(.015,4,4),tieKnot:new nt(.04,.03,.06,6),tieBlade:new qe(.065,.34,.02),bowtieWing:new ji(.055,.12,4),skirt:new ji(.66,.55,16,1,!0),skirtHem:new Ai(.66,.03,6,20),pearl:new St(.024,6,6),tiara:new Ai(.26,.025,4,12,Math.PI*.7),faceCap:new St(.353,16,14,Math.PI/2-.68,1.36,Math.PI/2-.68,1.36)};function sm({isPlayer:r=!1,gender:e="male",colorHex:t=1381915,isPureMannequin:n=!1,hasTopHat:i=!1,isGroom:s=!1,isBride:a=!1}={}){const o=new ze,l=new ze;o.add(l);const c=ob(),h=n||e==="classic"||t===14869998,u=!h&&(e==="male"||s),d=!h&&(e==="female"||a);let f;h?f=c:a?f=new Ee({color:16777215,roughness:.22,metalness:.12}):s?f=new Ee({color:1118742,roughness:.28,metalness:.25}):f=new Ee({color:t,roughness:.3,metalness:.2});const m=h?c:cb,_=new ze;_.position.set(0,1.84,0),l.add(_);const p=new J(lt.head,c);r&&(p.castShadow=!0),_.add(p);const v=d||a||e==="female"?ab():rb(),b=new J(lt.faceCap,v);_.add(b);const M=new J(lt.neck,c);M.position.set(0,1.6,0),l.add(M);const y=new ze;l.add(y);const T=u||d?f:c,x=new J(lt.chest,T);if(x.position.set(0,1.38,0),r&&(x.castShadow=!0),y.add(x),h||!d)for(const A of[-1,1]){const V=new J(lt.pec,h?c:T);V.position.set(A*.11,1.4,.17),y.add(V)}const S=new J(lt.waist,T);S.position.set(0,1.06,0),y.add(S);const R=new J(lt.hips,T);if(R.position.set(0,.84,0),y.add(R),u){const A=new J(lt.shirt,lb);A.position.set(0,1.38,.2),A.scale.set(1,1,.12),y.add(A);for(let V=0;V<3;V++){const ie=new J(lt.stud,vs);ie.position.set(0,1.42-V*.08,.225),y.add(ie)}if(s){const V=new J(lt.stud,vs);V.scale.setScalar(2.6),V.position.set(0,1.54,.22),y.add(V);for(const z of[-1,1]){const Z=new J(lt.bowtieWing,vs);Z.rotation.z=z*(Math.PI/2),Z.position.set(z*.08,1.54,.22),y.add(Z)}const ie=new J(new St(.045,6,6),new Ee({color:16724838,roughness:.3}));ie.position.set(-.18,1.48,.2),y.add(ie)}else{const V=new J(lt.tieKnot,Kd);V.position.set(0,1.53,.22),y.add(V);const ie=new J(lt.tieBlade,Kd);ie.position.set(0,1.34,.22),y.add(ie)}if(i||s){const V=new ze,ie=new Ee({color:s?657935:1184536,roughness:.25,metalness:.35}),z=new J(new nt(.44,.44,.035,16),ie);V.add(z);const Z=new J(new nt(.28,.3,.38,16),ie);Z.position.y=.2,V.add(Z);const se=new J(new nt(.302,.302,.08,16),vs);se.position.y=.08,V.add(se),V.position.set(0,.34,0),V.rotation.z=-.06,_.add(V)}}if(d){const A=new J(lt.skirt,f);A.position.set(0,.68,0),y.add(A);const V=new J(lt.skirtHem,a?c:vs);V.rotation.x=Math.PI/2,V.position.set(0,.42,0),y.add(V);const ie=new ze,z=new Ee({color:16776437,roughness:.1,metalness:.8});for(let Z=0;Z<7;Z++){const se=(Z-3)/3*(Math.PI*.45),ae=new J(lt.pearl,z);ae.position.set(Math.sin(se)*.22,1.56-Math.abs(se)*.04,Math.cos(se)*.22),ie.add(ae)}if(y.add(ie),a){const Z=new J(lt.tiara,vs);Z.position.set(0,.32,.12),Z.rotation.x=-Math.PI*.3,_.add(Z);const se=new J(new nt(.3,.85,1.4,12,1,!0),new Ee({color:16777215,transparent:!0,opacity:.55,side:gn,roughness:.25}));se.position.set(0,-.4,-.25),se.rotation.x=.18,_.add(se);const ae=new ze,j=[16739211,16777215,13938487];for(let Me=0;Me<5;Me++){const Ue=Me/5*Math.PI*2,ue=new J(new St(.045,6,6),new Ee({color:j[Me%j.length],roughness:.4}));ue.position.set(Math.cos(Ue)*.06,0,Math.sin(Ue)*.06),ae.add(ue)}ae.position.set(.3,1.05,.35),y.add(ae)}else{const Z=new J(lt.tiara,vs);Z.position.set(0,.3,.1),Z.rotation.x=-Math.PI*.35,_.add(Z)}}const P=new ze,D=new ze;P.position.set(-.4,1.52,0),D.position.set(.4,1.52,0),l.add(P,D);const F=new ze,G=new ze,I=u?f:c;[{arm:P,elbow:F,side:-1},{arm:D,elbow:G,side:1}].forEach(({arm:A,elbow:V,side:ie})=>{const z=new J(lt.shoulder,I);A.add(z);const Z=new J(lt.upperArm,I);Z.position.set(0,-.16,0),A.add(Z),V.position.set(0,-.32,0),A.add(V);const se=new J(lt.elbow,I);V.add(se);const ae=new J(lt.forearm,I);ae.position.set(0,-.14,0),V.add(ae);const j=new ze;j.position.set(0,-.28,0),V.add(j);const Me=new J(lt.palm,c);j.add(Me);for(let ue=0;ue<4;ue++){const Le=new J(lt.finger,c);Le.position.set(-.033+ue*.022,-.065,0),Le.rotation.x=.12,j.add(Le)}const Ue=new J(lt.thumb,c);Ue.position.set(ie*.045,-.02,.015),Ue.rotation.z=ie*.5,Ue.rotation.x=-.2,j.add(Ue)});const H=new ze,Y=new ze;H.position.set(-.16,.82,0),Y.position.set(.16,.82,0),l.add(H,Y);const k=new ze,oe=new ze,K=u?f:c;[{leg:H,knee:k,side:-1},{leg:Y,knee:oe,side:1}].forEach(({leg:A,knee:V,side:ie})=>{const z=new J(lt.hipJoint,K);A.add(z);const Z=new J(lt.thigh,K);Z.position.set(0,-.18,0),A.add(Z),V.position.set(0,-.36,0),A.add(V);const se=new J(lt.knee,K);V.add(se);const ae=new J(lt.calf,K);ae.position.set(0,-.16,0),V.add(ae);const j=new J(lt.foot,m);j.rotation.x=Math.PI/2,j.rotation.z=ie*.12,j.position.set(0,-.32,.06),V.add(j)});let L=null;return r&&(L=new J(new Ho(.65,.95,24),new xn({color:13938487,transparent:!0,opacity:.35,side:gn})),L.rotation.x=-Math.PI/2,L.position.y=.02,o.add(L)),o.userData={body:l,torso:y,head:_,armL:P,armR:D,elbowL:F,elbowR:G,legL:H,legR:Y,kneeL:k,kneeR:oe,aura:L},o}function so(){const r=new ze;r.name="gorilla-mascot";const e=2,t=new Ee({color:1315864,roughness:.95,metalness:.05}),n=new Ee({color:2237484,roughness:.55,metalness:.1}),i=new Ee({color:8524318,roughness:.6}),s=new Ee({color:16053488,roughness:.2,metalness:.1}),a=new Ee({color:1118481,roughness:.1,metalness:.8}),o=new ze;o.position.y=.95*e,r.add(o);const l=new J(new nt(.38,.32,.45,12),t);o.add(l);const c=new ze;c.position.y=.38,o.add(c);const h=new J(new nt(.55,.42,.65,12),t);c.add(h);const u=new J(new St(.48,12,10),t);u.position.set(0,.32,-.15),c.add(u);for(let Ie of[-1,1]){const de=new J(new qe(.24,.28,.14),n);de.position.set(Ie*.16,.14,.38),de.rotation.y=Ie*.15,c.add(de);const $e=new J(new qe(.18,.14,.1),n);$e.position.set(Ie*.12,-.1,.36),c.add($e);const Qe=new J(new qe(.16,.12,.08),n);Qe.position.set(Ie*.11,-.24,.32),c.add(Qe)}const d=new ze;d.position.set(0,.58,.08),c.add(d);const f=new J(new St(.34,14,12),t);d.add(f);const m=new J(new qe(.14,.22,.42),t);m.position.set(0,.22,-.05),m.rotation.x=-.25,d.add(m);const _=new J(new qe(.38,.1,.16),n);_.position.set(0,.12,.28),d.add(_);for(let Ie of[-1,1]){const de=new J(new St(.045,8,8),a);de.position.set(Ie*.11,.09,.32),d.add(de)}const p=new J(new qe(.28,.16,.22),n);p.position.set(0,.02,.35),d.add(p);for(let Ie of[-1,1]){const de=new J(new nt(.025,.025,.04,6),new xn({color:328965}));de.rotation.x=Math.PI/2,de.position.set(Ie*.05,.04,.46),d.add(de)}const g=new ze;g.position.set(0,-.08,.24),d.add(g);const v=new J(new qe(.26,.14,.22),n);v.position.set(0,-.04,.1),g.add(v);const b=new J(new qe(.22,.12,.14),i);b.position.set(0,.02,.08),g.add(b);const M=new J(new St(.06,8,6),i);M.position.set(0,-.01,.12),M.scale.set(1.2,.5,1.4),g.add(M);const y=new ji(.025,.07,5);for(let Ie of[-1,1]){const de=new J(y,s);de.rotation.x=Math.PI,de.position.set(Ie*.08,.07,.17),g.add(de);const $e=new J(y,s);$e.position.set(Ie*.07,-.03,.18),g.add($e);const Qe=new J(new qe(.04,.03,.03),s);Qe.position.set(Ie*.03,.05,.17),g.add(Qe);const ct=new J(new qe(.04,.03,.03),s);ct.position.set(Ie*.03,-.01,.17),g.add(ct)}const T=new ze,x=new ze;T.position.set(-.62,.32,.02),x.position.set(.62,.32,.02),c.add(T,x);const S=new St(.24,12,10),R=new J(S,t),P=new J(S,t);T.add(R),x.add(P);const D=new nt(.18,.15,.48,10),F=new J(D,t);F.position.y=-.28,T.add(F);const G=new J(D,t);G.position.y=-.28,x.add(G);const I=new ze,H=new ze;I.position.y=-.52,H.position.y=-.52,T.add(I),x.add(H);const Y=new nt(.16,.18,.52,10),k=new J(Y,t);k.position.y=-.24,I.add(k);const oe=new J(Y,t);oe.position.y=-.24,H.add(oe);const K=new qe(.22,.2,.24),L=new J(K,n);L.position.set(0,-.52,.04),I.add(L);const A=new J(K,n);A.position.set(0,-.52,.04),H.add(A);const V=new ze,ie=new ze;V.position.set(-.28,-.2,0),ie.position.set(.28,-.2,0),o.add(V,ie);const z=new nt(.24,.2,.48,10),Z=new J(z,t);Z.position.y=-.24,V.add(Z);const se=new J(z,t);se.position.y=-.24,ie.add(se);const ae=new nt(.2,.22,.44,10),j=new J(ae,t);j.position.y=-.66,V.add(j);const Me=new J(ae,t);Me.position.y=-.66,ie.add(Me);const Ue=new qe(.26,.14,.42),ue=new J(Ue,n);ue.position.set(0,-.9,.08),V.add(ue);const Le=new J(Ue,n);return Le.position.set(0,-.9,.08),ie.add(Le),r.scale.set(e,e,e),r.userData={body:o,chestGroup:c,head:d,jaw:g,armL:T,armR:x,elbowL:I,elbowR:H,legL:V,legR:ie,scale:e},r}function hb(r,e,t=0){const{body:n,chestGroup:i,head:s,jaw:a,armL:o,armR:l,elbowL:c,elbowR:h,legL:u,legR:d}=r.userData;if(!n)return;const f=e*3.5;switch(t%3){case 0:{const m=Math.abs(Math.sin(f*2))*.12;n.position.y=1.9+m,n.rotation.z=Math.sin(f)*.08,i.rotation.x=.15+Math.sin(f*2)*.06;const _=Math.sin(f*2),p=Math.sin(f*2+Math.PI);o.rotation.x=-1.2+_*.6,o.rotation.z=.6-Math.max(0,_)*.4,c.rotation.x=-1.4-Math.max(0,_)*.5,l.rotation.x=-1.2+p*.6,l.rotation.z=-.6+Math.max(0,p)*.4,h.rotation.x=-1.4-Math.max(0,p)*.5,s.rotation.x=-.1+Math.sin(f*2)*.15,a.rotation.x=Math.max(0,Math.sin(f*3))*.35;break}case 1:{const m=Math.sin(f*.8);n.position.y=1.9+Math.abs(Math.sin(f*1.6))*.08,n.rotation.z=m*.18,n.rotation.y=m*.22,o.rotation.z=-.5+m*.8,l.rotation.z=.5+m*.8,o.rotation.x=Math.sin(f*1.6)*.4,l.rotation.x=-Math.sin(f*1.6)*.4,c.rotation.x=-.4,h.rotation.x=-.4,s.rotation.y=-m*.3,a.rotation.x=.2+Math.sin(f*2)*.15;break}case 2:{const m=Math.abs(Math.sin(f*2.2))*.22;n.position.y=1.9+m,n.rotation.z=Math.sin(f*2.2)*.1,o.rotation.x=-2.4+Math.sin(f*2.2)*.5,l.rotation.x=-2.4+Math.sin(f*2.2)*.5,o.rotation.z=-.4+Math.sin(f*2.2)*.3,l.rotation.z=.4-Math.sin(f*2.2)*.3,c.rotation.x=-.8+Math.sin(f*4.4)*.3,h.rotation.x=-.8+Math.sin(f*4.4)*.3,s.rotation.x=-.3+m*.4,a.rotation.x=.35+Math.sin(f*4)*.2;break}}}function pn(r){if(!r)return"";const e=r.replace(/^\/+/,""),t="./";return`${t.endsWith("/")?t:`${t}/`}${e}`}const bi=60,Kt=-(bi-4);class ub{constructor(){this.scene=null,this.camera=null,this.renderer=null,this.clock=new Xg,this.doorLeft=null,this.doorRight=null,this.discoLights=[],this.stageSpotlights=[],this.discoCanCones=[],this.coldSparkEmitters=[],this.discoTime=0,this.ballroomActive=!1,this.inTransition=!1,this.gorillas=[],this.gorillaTime=0,this.cameraMode="follow",this.orbitAngle=0,this.greyTileMat1=null,this.greyTileMat2=null,this.greyTileMat3=null,this.centerScreenMat=null,this.sideScreenMats=[]}async init(){const e=document.getElementById("three-canvas");this.renderer=new ky({canvas:e,antialias:!0,powerPreference:"high-performance",stencil:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Vr,this.renderer.toneMapping=Qc,this.renderer.toneMappingExposure=1.55,this.renderer.outputColorSpace=At,this.scene=new R0,this.scene.background=new Be(1314850),this.scene.fog=new uh(1314850,.0055),this.camera=new mn(60,window.innerWidth/window.innerHeight,.1,260),this.camera.position.set(0,12,20),this.camera.lookAt(0,0,0),this._buildLighting(),this._buildRedCarpet(),this._buildBallroom(),window.addEventListener("resize",this._onResize.bind(this))}_buildLighting(){const e=new Dg(16775406,1.4);this.scene.add(e);const t=new Cg(16774630,4010069,1.3);this.scene.add(t);const n=new po(16775138,2.4);n.position.set(14,28,10),n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.camera.near=.5,n.shadow.camera.far=130,n.shadow.camera.left=-35,n.shadow.camera.right=35,n.shadow.camera.top=35,n.shadow.camera.bottom=-35,n.shadow.bias=-6e-4,this.scene.add(n);const i=new po(16766378,1.1);i.position.set(-14,14,-10),this.scene.add(i);const s=new po(16773851,1.7);s.position.set(0,22,-65),s.target.position.set(0,0,-65),this.scene.add(s,s.target)}_buildRedCarpet(){this.carpetGroup=new ze,this.scene.add(this.carpetGroup);const e=new cn(36,bi+20),t=new Ee({color:1578784,roughness:.85,metalness:.1}),n=new J(e,t);n.rotation.x=-Math.PI/2,n.position.set(0,-.02,-bi/2+5),n.receiveShadow=!0,this.carpetGroup.add(n);const i=new qe(4.8,.08,bi),s=new Ee({color:11868200,roughness:.75,metalness:.05}),a=new J(i,s);a.position.set(0,.04,-bi/2+5),a.receiveShadow=!0,this.carpetGroup.add(a);const o=new Ee({color:13938487,roughness:.15,metalness:.95,emissive:4468736,emissiveIntensity:.2}),l=new qe(.18,.12,bi),c=new J(l,o);c.position.set(-2.45,.06,-bi/2+5),this.carpetGroup.add(c);const h=new J(l,o);h.position.set(2.45,.06,-bi/2+5),this.carpetGroup.add(h),this._buildStanchions(),this._buildPhotoBanners(),this._buildDoorFrame(),this._buildDoors(),this._buildEntranceGorillas(),this._buildStars()}_buildStanchions(){const e=new Ee({color:13938487,roughness:.15,metalness:.95}),t=new Ee({color:9440286,roughness:.65}),n=new nt(.065,.065,1.25,8),i=new nt(.24,.28,.08,12),s=new St(.12,10,8),a=12,o=.035,l=5,c=Math.floor(bi/l);for(let h of[-1,1]){const u=h*3.1;let d=null;for(let f=0;f<=c;f++){const m=5-f*l;if(m<Kt+2)continue;const _=new ze,p=new J(i,e);p.position.y=.04;const g=new J(n,e);g.position.y=.65;const v=new J(s,e);v.position.y=1.3,_.add(p,g,v),_.position.set(u,0,m),this.carpetGroup.add(_);const b=new U(u,1.22,m);if(d){const M=(d.z+b.z)/2,y=new vh(d,new U(u,.72,M),b),T=new Mh(y,a,o,6,!1),x=new J(T,t);this.carpetGroup.add(x)}d=b}}}_buildPhotoBanners(){const e=new uo,t=new Ee({color:13938487,roughness:.15,metalness:.95,emissive:5586944,emissiveIntensity:.25}),n=new Ee({color:13147432,roughness:.2,metalness:.9});[{side:-1,z:-10,photo:pn("assets/photos/photo1.jpg")},{side:1,z:-10,photo:pn("assets/photos/photo2.jpg")},{side:-1,z:-26,photo:pn("assets/photos/photo3.jpg")},{side:1,z:-26,photo:pn("assets/photos/photo4.jpg")},{side:-1,z:-42,photo:pn("assets/photos/photo5.jpg")},{side:1,z:-42,photo:pn("assets/photos/photo6.jpg")}].forEach(({side:s,z:a,photo:o})=>{const l=new ze,c=s*5.2;l.position.set(c,0,a);const h=new J(new nt(.7,.8,.1,16),n);h.position.y=.05;const u=new J(new nt(.08,.08,2,10),n);u.position.y=1.05,l.add(h,u);const d=new J(new qe(3.2,4.2,.12),t);d.position.y=3.6,l.add(d);const f=new Ee({color:2234901,roughness:.25,metalness:.05});e.load(o,p=>{p.colorSpace=At,p.generateMipmaps=!0,p.minFilter=Gn,f.color.setHex(16777215),f.map=p,f.needsUpdate=!0},void 0,p=>{console.warn("[World] Could not load photo banner:",o,p)});const m=new J(new cn(2.9,3.9),f);m.position.set(0,3.6,.07),l.add(m);const _=new J(new cn(2.9,3.9),new Ee({color:1446684,roughness:.8}));_.rotation.y=Math.PI,_.position.set(0,3.6,-.07),l.add(_),l.rotation.y=s*-.15,this.carpetGroup.add(l)})}_buildDoorFrame(){const e=new Ee({color:13938487,roughness:.15,metalness:.95}),t=new qe(.8,9,.8),n=new J(t,e);n.position.set(-4.2,4.5,Kt),this.carpetGroup.add(n);const i=new J(t,e);i.position.set(4.2,4.5,Kt),this.carpetGroup.add(i);const s=new J(new Ai(4.2,.4,8,24,Math.PI),e);s.position.set(0,8.8,Kt),this.carpetGroup.add(s)}_buildDoors(){const e=new Ee({color:2233096,roughness:.4,metalness:.2}),t=new Ee({color:13938487,roughness:.15,metalness:.95});for(let s of[-1,1]){const a=new ze;s===-1?this.doorLeft=a:this.doorRight=a;const o=new J(new qe(3.9,8,.2),e);o.position.set(0,4,0),a.add(o);const l=new J(new qe(4.1,8.2,.08),t);l.position.set(0,4,-.07),a.add(l);const c=new J(new St(.15,8,8),t);c.position.set(-s*1.5,4,.2),a.add(c),a.position.set(s*2,0,Kt),this.carpetGroup.add(a)}const n=new Ee({color:13938487,roughness:.2,metalness:.9}),i=new J(new qe(8.5,.4,.3),n);i.position.set(0,8.2,Kt),this.carpetGroup.add(i)}_buildEntranceGorillas(){const e=so();e.position.set(-5.8,0,Kt+2.5),e.rotation.y=.28,this.carpetGroup.add(e),this.gorillas.push({group:e,mode:0,speed:1,phase:0,isBallroom:!1});const t=so();t.position.set(5.8,0,Kt+2.5),t.rotation.y=-.28,this.carpetGroup.add(t),this.gorillas.push({group:t,mode:2,speed:.95,phase:Math.PI*.5,isBallroom:!1})}_buildBallroomGorillas(){const e=so();e.position.set(-6.8,0,-28),e.rotation.y=.22,this.ballroomGroup.add(e),this.gorillas.push({group:e,mode:0,speed:1.05,phase:.3,isBallroom:!0});const t=so();t.position.set(6.8,0,-28),t.rotation.y=-.22,this.ballroomGroup.add(t),this.gorillas.push({group:t,mode:1,speed:.92,phase:1.4,isBallroom:!0})}_buildStars(){const e=new Bt,t=1200,n=new Float32Array(t*3);for(let s=0;s<t*3;s+=3)n[s]=(Math.random()-.5)*260,n[s+1]=Math.random()*70+10,n[s+2]=(Math.random()-.5)*260;e.setAttribute("position",new In(n,3));const i=new Bf(e,new gh({color:16777215,size:.15,sizeAttenuation:!0}));this.scene.add(i),this.stars=i}_createLeRoiCarpetTexture(){const e=document.createElement("canvas");e.width=1024,e.height=1024;const t=e.getContext("2d");t.fillStyle="#0f1422",t.fillRect(0,0,1024,1024);const n=t.createLinearGradient(0,0,1024,1024);n.addColorStop(0,"#0a0e19"),n.addColorStop(.5,"#141d30"),n.addColorStop(1,"#0c101d"),t.fillStyle=n,t.fillRect(0,0,1024,1024),t.lineWidth=14;for(let s=-100;s<1124;s+=34){t.beginPath(),t.strokeStyle=`rgba(0, 165, 195, ${.15+Math.sin(s*.05)*.09})`;for(let a=0;a<=1024;a+=16){const o=s+Math.sin((a+s)*.012)*52+Math.cos(a*.02)*26;a===0?t.moveTo(a,o):t.lineTo(a,o)}t.stroke()}t.lineWidth=7;for(let s=-80;s<1100;s+=46){t.beginPath(),t.strokeStyle=`rgba(214, 175, 55, ${.2+Math.cos(s*.08)*.12})`;for(let a=0;a<=1024;a+=16){const o=s+14+Math.sin((a+s*1.5)*.01)*62+Math.sin(a*.025)*22;a===0?t.moveTo(a,o):t.lineTo(a,o)}t.stroke()}t.lineWidth=3;for(let s=0;s<1024;s+=75){t.beginPath(),t.strokeStyle="rgba(130, 235, 255, 0.28)";for(let a=0;a<=1024;a+=20){const o=s+Math.cos(a*.015)*44+Math.sin((a+s)*.01)*28;a===0?t.moveTo(a,o):t.lineTo(a,o)}t.stroke()}const i=new la(e);return i.wrapS=is,i.wrapT=is,i.repeat.set(3,4),i}_buildBallroom(){this.ballroomGroup=new ze,this.ballroomGroup.position.set(0,0,Kt),this.scene.add(this.ballroomGroup);const e=this._createLeRoiCarpetTexture(),t=new Ee({map:e,roughness:.65,metalness:.25}),n=new J(new cn(44,54),t);n.rotation.x=-Math.PI/2,n.position.set(0,0,-27),n.receiveShadow=!0,this.ballroomGroup.add(n),this._buildWalls(),this._buildCircularLEDDanceFloor(),this._buildLeRoiCeilingCanopy(),this._buildLeRoiStage(),this._buildChandelier(),this._buildDiscoBall(),this._buildBallroomLights(),this._buildGuestCrowd(),this._buildTables(),this._buildBallroomGorillas()}_buildWalls(){const e=new Ee({color:1183774,roughness:.85}),t=new Ee({color:13938487,roughness:.2,metalness:.9}),n=new J(new cn(44,22),e);n.position.set(0,11,-54),this.ballroomGroup.add(n);const i=new J(new cn(54,22),e);i.rotation.y=Math.PI/2,i.position.set(-22,11,-27),this.ballroomGroup.add(i);const s=new J(new cn(54,22),e);s.rotation.y=-Math.PI/2,s.position.set(22,11,-27),this.ballroomGroup.add(s);const a=new J(new cn(44,54),e);a.rotation.x=Math.PI/2,a.position.set(0,22,-27),this.ballroomGroup.add(a);const o=new J(new qe(44,.4,.4),t);o.position.set(0,21.8,-53.8),this.ballroomGroup.add(o);const l=new J(new qe(.4,.4,54),t);l.position.set(-21.8,21.8,-27),this.ballroomGroup.add(l);const c=new J(new qe(.4,.4,54),t);c.position.set(21.8,21.8,-27),this.ballroomGroup.add(c)}_buildCircularLEDDanceFloor(){const e=new U(0,0,-16),t=7.75,n=.25,i=new nt(t,t+.22,n,64),s=new Ee({color:3159104,roughness:.35,metalness:.35}),a=new J(i,s);a.position.set(e.x,n/2,e.z),a.receiveShadow=!0,this.ballroomGroup.add(a);const o=new Ai(t+.22,.055,12,64),l=new Ee({color:13938487,roughness:.18,metalness:.92,emissive:5586960,emissiveIntensity:.4}),c=new J(o,l);c.rotation.x=Math.PI/2,c.position.set(e.x,n,e.z),this.ballroomGroup.add(c);const h=new Ai(t,.035,12,64),u=new Ee({color:11055296,emissive:5265512,emissiveIntensity:.5,roughness:.15,metalness:.8}),d=new J(h,u);d.rotation.x=Math.PI/2,d.position.set(e.x,n+.005,e.z),this.ballroomGroup.add(d);const f=new nt(t-.02,t-.02,.015,64),m=new Ee({color:2238e3,roughness:.3,metalness:.25}),_=new J(f,m);_.position.set(e.x,n+.008,e.z),_.receiveShadow=!0,this.ballroomGroup.add(_),this.greyTileMat1=new Ee({color:4475224,emissive:2369588,emissiveIntensity:.25,roughness:.14,metalness:.45}),this.greyTileMat2=new Ee({color:3159104,emissive:1711656,emissiveIntensity:.2,roughness:.16,metalness:.45}),this.greyTileMat3=new Ee({color:5594222,emissive:3159620,emissiveIntensity:.28,roughness:.12,metalness:.5});const p=1.34,g=1.39,v=new qe(p,.025,p);for(let T=-6;T<=6;T++)for(let x=-6;x<=6;x++){const S=T*g,R=x*g;if(Math.hypot(S,R)+p*.72>t-.1)continue;const D=Math.abs((T+x)%3);let F;D===0?F=this.greyTileMat1:D===1?F=this.greyTileMat2:F=this.greyTileMat3;const G=new J(v,F);G.position.set(e.x+S,n+.016,e.z+R),G.receiveShadow=!0,this.ballroomGroup.add(G)}const b=[-.68,-.34,0,.34,.68],M=[16774364,16771256,16777215,16771256,16774364],y=new Ee({color:2367516,roughness:.3,metalness:.85});b.forEach((T,x)=>{const S=Math.sin(T)*(t+.05),R=e.z+Math.cos(T)*(t+.05),P=M[x],D=new ze;D.position.set(S,n+.08,R);const F=new J(new nt(.18,.22,.42,12),y);F.rotation.x=-Math.PI/4.2,D.add(F);const G=new xn({color:P}),I=new J(new _h(.16,12),G);I.rotation.x=-Math.PI/4.2,I.position.set(0,.18,.12),D.add(I);const H=new xn({color:P,transparent:!0,opacity:.16,blending:vo,side:gn,depthWrite:!1}),Y=new ji(.75,4.2,16,1,!0),k=new J(Y,H);k.position.set(0,2.1,.9),k.rotation.x=-Math.PI/4.2+Math.PI,D.add(k),this.discoCanCones.push({mesh:k,baseOpacity:.16,phase:x*1.2}),this.ballroomGroup.add(D)})}_buildLeRoiCeilingCanopy(){const t=new nt(.015,.038,3.4,5),n=new Ee({roughness:.25,metalness:.15,emissiveIntensity:.75}),i=new Of(t,n,420);i.instanceMatrix.setUsage(ah);const s=new mt,a=new Be;let o=0;const l=38,c=48,h=-27;for(let u=0;u<420;u++){const d=Math.random(),f=Math.random(),m=(d-.5)*l,_=h+(f-.5)*c,p=.75+Math.random()*.55,g=22-p*3.4/2;s.position.set(m,g,_),s.scale.set(1,p,1),s.rotation.y=Math.random()*Math.PI,s.rotation.z=(Math.random()-.5)*.08,s.updateMatrix(),i.setMatrixAt(o,s.matrix),Math.abs(m)>6.5?a.setHex(Math.random()>.3?16763432:16766287):a.setHex(Math.random()>.4?8445674:16777215),i.setColorAt(o,a),o++}i.instanceColor.needsUpdate=!0,i.instanceMatrix.needsUpdate=!0,this.ballroomGroup.add(i)}_buildLeRoiStage(){this.stageGroup=new ze,this.ballroomGroup.add(this.stageGroup);const e=new Ee({color:2040624,roughness:.3,metalness:.45}),t=new J(new nt(11.8,12.4,.25,48,1,!1,0,Math.PI),e);t.rotation.y=Math.PI/2,t.position.set(0,.125,-42.2),t.receiveShadow=!0,this.stageGroup.add(t);const n=new J(new nt(10,10.5,.25,48,1,!1,0,Math.PI),e);n.rotation.y=Math.PI/2,n.position.set(0,.375,-43.4),n.receiveShadow=!0,this.stageGroup.add(n);const i=new J(new qe(18.2,.45,8),new Ee({color:2369592,roughness:.25,metalness:.55}));i.position.set(0,.625,-46.2),i.receiveShadow=!0,this.stageGroup.add(i);const s=[16711807,62932,16764928,8599788,16471559],a=18.2/s.length;s.forEach((y,T)=>{const x=new J(new qe(a-.08,.08,.12),new Ee({color:y,emissive:y,emissiveIntensity:2.2,roughness:.1}));x.position.set(-9.1+a*(T+.5),.86,-42.2),this.stageGroup.add(x)});const o=new ze;o.position.set(0,.85,-45),this.stageGroup.add(o);const l=new Ee({color:16645629,roughness:.55,metalness:.05}),c=new Ee({color:13938487,roughness:.15,metalness:.95,emissive:4468736,emissiveIntensity:.2}),h=new J(new qe(3.4,.38,1.25),l);h.position.y=.28,o.add(h);const u=new J(new qe(3.5,.95,.32),l);u.position.set(0,.85,-.48),o.add(u);for(let y of[-1,1]){const T=new J(new qe(.35,.65,1.25),l);T.position.set(y*1.7,.55,0),o.add(T)}const d=new J(new qe(3.6,.08,1.35),c);d.position.y=.05,o.add(d);for(let y of[-1,1]){const T=new J(new qe(.55,.55,.18),c);T.position.set(y*1.15,.6,-.32),T.rotation.y=y*.25,o.add(T)}this._buildCenterLEDScreen();const f=new Ee({color:16185080,roughness:.35,metalness:.1}),m=new Ee({color:13938487,roughness:.2,metalness:.9});for(let y of[-1,1])for(let T=0;T<3;T++){const x=10.5-T*1.2,S=new nt(.45,.85,x,16,1,!1,0,Math.PI),R=new J(S,f),P=y*(4.2+T*1.35);R.position.set(P,x/2+.8,-47.2+T*.4),R.rotation.y=y>0?Math.PI*.25:-Math.PI*.25,this.stageGroup.add(R);const D=new J(new nt(.06,.06,x,8),m);D.position.set(P+y*.4,x/2+.8,-47+T*.4),this.stageGroup.add(D)}const p=new uo().load(pn("assets/couples-initials.jpg"),y=>{y.colorSpace=At});for(let y of[-1,1]){const T=new Ee({map:p,emissive:16777215,emissiveMap:p,emissiveIntensity:.85,roughness:.15});this.sideScreenMats.push(T);const x=new J(new cn(3.8,3.4),T);x.position.set(y*14.5,6.2,-47.2),x.rotation.y=-y*.35,this.stageGroup.add(x);const S=new J(new qe(4.1,3.7,.1),new Ee({color:13938487,roughness:.2,metalness:.9}));S.position.set(y*14.5,6.2,-47.25),S.rotation.y=-y*.35,this.stageGroup.add(S)}const g=new Ee({color:16644338,roughness:.7,metalness:.05}),v=new Ee({color:2381874,roughness:.8});for(let y of[-1,1])for(let T=0;T<5;T++){const x=new ze;x.position.set(y*(3.5+T*1.5),.55,-42.8+T*.2);const S=new J(new St(.42,8,6),v),R=new J(new St(.38,8,6),g);R.position.y=.18,x.add(S,R),this.stageGroup.add(x)}[-8.8,8.8].forEach(y=>{const T=new J(new qe(.45,.65,.45),new Ee({color:1118486,roughness:.4,metalness:.8}));T.position.set(y,.95,-43),this.stageGroup.add(T);const x=new xn({color:16770688,transparent:!0,opacity:.85,blending:vo}),S=new J(new nt(.04,.32,3.6,8),x);S.position.set(y,2.75,-43),this.stageGroup.add(S),this.coldSparkEmitters.push(S)});const M=[{color:16711807,x:-5},{color:62932,x:5}];this.stageSpotlights=[],M.forEach(({color:y,x:T},x)=>{const S=new fo(y,6,35,Math.PI/7,.5,1.2);S.position.set(T,16,-36),S.castShadow=!1;const R=new mt;R.position.set(T,.7,-44),this.stageGroup.add(R),S.target=R,this.stageGroup.add(S),this.stageSpotlights.push({sp:S,target:R,basePos:new U(T,.7,-44),phase:x*Math.PI})})}_buildCenterLEDScreen(){const e=new ze;e.position.set(0,6.4,-47.4),this.stageGroup.add(e);const t=5.6,n=9.6,i=new Ee({color:13938487,roughness:.15,metalness:.95,emissive:13938487,emissiveIntensity:.35}),s=new J(new qe(t+.45,n+.45,.12),i);e.add(s);const a=new J(new qe(t+.12,n+.12,.14),new Ee({color:16711807,emissive:16711807,emissiveIntensity:2.2}));e.add(a);const l=new uo().load(pn("assets/couples-initials.jpg"),_=>{_.colorSpace=At,_.generateMipmaps=!0,_.minFilter=Gn}),c=new Ee({map:l,emissive:16777215,emissiveMap:l,emissiveIntensity:.92,roughness:.15,metalness:.1}),h=new J(new cn(t,n),c);h.position.z=.08,e.add(h),this.centerScreenMat=c;const u=document.createElement("canvas");u.width=1024,u.height=180;const d=u.getContext("2d");d.fillStyle="rgba(0,0,0,0)",d.fillRect(0,0,1024,180),d.shadowColor="#ffd000",d.shadowBlur=20,d.fillStyle="#fced9f",d.font='bold 54px "Cinzel", Georgia, serif',d.textAlign="center",d.textBaseline="middle",d.fillText("Ziad  ♥  Heba  •  March 12, 2027  •  Le Roi",512,90);const f=new la(u),m=new J(new cn(10.8,1.8),new xn({map:f,transparent:!0}));m.position.set(0,5.5,.09),e.add(m)}_buildChandelier(){const e=new Ee({color:13938487,roughness:.15,metalness:.95}),t=new Ee({color:16777215,roughness:.05,metalness:.1,transmission:.8,ior:1.5}),n=new J(new Ai(2.4,.08,6,24),e);n.rotation.x=Math.PI/2,n.position.set(0,17,-16),this.ballroomGroup.add(n);const i=new ji(.05,.4,5);for(let o=0;o<16;o++){const l=o/16*Math.PI*2,c=new J(i,t);c.position.set(2.4*Math.cos(l),16.5,-16+2.4*Math.sin(l)),this.ballroomGroup.add(c)}const s=new Kf(16774616,4.5,38,1.2);s.position.set(0,16.5,-16),this.ballroomGroup.add(s);const a=new fo(16774368,4,40,Math.PI/3.5,.4,1);a.position.set(0,19,-16),a.target.position.set(0,0,-16),this.ballroomGroup.add(a,a.target)}_buildDiscoBall(){this.discoBall=new ze,this.discoBall.position.set(0,17.5,-16),this.ballroomGroup.add(this.discoBall);const e=new J(new St(.8,16,12),new Ee({color:16777215,roughness:.05,metalness:.95}));this.discoBall.add(e);const t=[16722549,62932];this.discoLights=[],t.forEach((n,i)=>{const s=new fo(n,5,32,Math.PI/6,.6,1.2);s.position.set(0,17.2,-16),s.castShadow=!1;const a=new mt;this.ballroomGroup.add(a),s.target=a,this.ballroomGroup.add(s),this.discoLights.push({sp:s,target:a,phase:i*Math.PI,colorHex:n})})}_buildBallroomLights(){const e=new Ee({color:16771216,emissive:16762928,emissiveIntensity:1.8}),t=new St(.2,8,6);[[-21.6,8,-12],[-21.6,8,-26],[-21.6,8,-40],[21.6,8,-12],[21.6,8,-26],[21.6,8,-40]].forEach(([i,s,a])=>{const o=new J(t,e);o.position.set(i,s,a),this.ballroomGroup.add(o)})}_buildGuestCrowd(){const e=[{gender:"male",colorHex:1381915,hasTopHat:!1},{gender:"female",colorHex:14249868},{gender:"classic",colorHex:14869998},{gender:"male",colorHex:1452102,hasTopHat:!0},{gender:"female",colorHex:10188984},{gender:"male",colorHex:1325866,hasTopHat:!1},{gender:"female",colorHex:2247062},{gender:"classic",colorHex:14869998},{gender:"male",colorHex:5051172,hasTopHat:!1},{gender:"female",colorHex:11018301},{gender:"male",colorHex:2830395,hasTopHat:!1},{gender:"female",colorHex:13936462},{gender:"classic",colorHex:14869998},{gender:"male",colorHex:1850994,hasTopHat:!1},{gender:"female",colorHex:14704715},{gender:"female",colorHex:6431577}],t=16;this.guestBeans=[];for(let n=0;n<t;n++){const i=n/t*Math.PI*2,s=5.2+(n%2===0?.7:-.5),a=Math.cos(i)*s,o=Math.sin(i)*s-16,l=e[n%e.length],c=sm({gender:l.gender,colorHex:l.colorHex,hasTopHat:!!l.hasTopHat,isPureMannequin:l.gender==="classic"});c.position.set(a,.25,o),c.rotation.y=Math.atan2(-a,-(o+16)),this.ballroomGroup.add(c),this.guestBeans.push({group:c,danceType:n%8,speed:.9+n%5*.15,phase:n*.73})}}_buildTables(){const e=new Ee({color:16448250,roughness:.35,metalness:.1}),t=new Ee({color:13938487,roughness:.18,metalness:.92}),n=new Ee({color:16777215,roughness:.6}),i=new nt(1.6,1.6,.08,20),s=new nt(.06,.06,.75,8),a=new Ai(.28,.032,8,16),o=new nt(.26,.26,.05,12);[[-14.5,8],[14.5,8],[-15,-16],[15,-16],[-14.5,-34],[14.5,-34]].forEach(([c,h])=>{const u=new ze;u.position.set(c,0,h);const d=new J(i,e);d.position.y=.75;const f=new J(s,t);f.position.y=.38,u.add(d,f);const m=new J(new nt(.08,.18,.85,10),t);m.position.y=1.18;const _=new J(new St(.38,10,8),n);_.position.y=1.68,u.add(m,_);for(let p=0;p<4;p++){const g=p/4*Math.PI*2,v=Math.cos(g)*1.95,b=Math.sin(g)*1.95,M=new ze;M.position.set(v,0,b),M.rotation.y=-g+Math.PI/2;const y=new J(o,t);y.position.y=.42;const T=new J(a,t);T.position.set(0,.78,-.22),T.rotation.x=.1,M.add(y,T),u.add(M)}this.ballroomGroup.add(u)})}showRedCarpetPreview(){this.carpetGroup.visible=!0,this.ballroomGroup.visible=!1,this.camera.position.set(0,18,25),this.camera.lookAt(0,0,-10)}startRedCarpet(){this.carpetGroup.visible=!0,this.ballroomGroup.visible=!1}checkDoorProximity(e){return e?Math.abs(e.z-Kt)<5:!1}openDoorsAndEnter(e){this.ballroomGroup.visible=!0,this.ballroomActive=!0,this.inTransition=!0,Dt.to(this.doorLeft.position,{x:-5.5,duration:1.6,ease:"power2.inOut"}),Dt.to(this.doorRight.position,{x:5.5,duration:1.6,ease:"power2.inOut"});const t=Kt-16;Dt.to(this.camera.position,{x:0,y:4.8,z:Kt-5.5,duration:2.2,ease:"power2.inOut",onUpdate:()=>{this.camera.lookAt(0,1.4,t)},onComplete:()=>{this.inTransition=!1,this.carpetGroup.visible=!1,e&&e()}})}setCameraMode(e){this.cameraMode=e}update(e,t,n){if(this.stars&&(this.stars.rotation.y+=e*.005),this.gorillas&&this.gorillas.length>0&&(this.gorillaTime+=e,this.gorillas.forEach(({group:i,mode:s,speed:a,phase:o,isBallroom:l})=>{l&&!this.ballroomActive||!l&&!this.carpetGroup.visible||hb(i,this.gorillaTime*a+o,s)})),this.ballroomActive){if(this.discoTime+=e,this.discoBall&&(this.discoBall.rotation.y+=e*.5),this.discoLights.forEach(({sp:i,target:s,phase:a})=>{const o=this.discoTime*1.5+a;s.position.set(Math.cos(o)*12,0,Math.sin(o*.7)*12-16),s.updateMatrixWorld(),i.intensity=4+Math.sin(o*3)*1.5}),this.greyTileMat1&&this.greyTileMat2){const i=Math.sin(this.discoTime*2.2)*.04;this.greyTileMat1.emissiveIntensity=.25+i,this.greyTileMat2.emissiveIntensity=.2-i,this.greyTileMat3&&(this.greyTileMat3.emissiveIntensity=.28+Math.cos(this.discoTime*2.2)*.03)}this.discoCanCones&&this.discoCanCones.forEach(({mesh:i,baseOpacity:s,phase:a})=>{i.material.opacity=s+Math.sin(this.discoTime*3.5+a)*.08}),this.coldSparkEmitters&&this.coldSparkEmitters.forEach((i,s)=>{const a=.75+Math.random()*.25;i.material.opacity=a,i.scale.y=.9+Math.sin(this.discoTime*12+s)*.15}),this.centerScreenMat&&(this.centerScreenMat.emissiveIntensity=.88+Math.sin(this.discoTime*2)*.14),this.sideScreenMats&&this.sideScreenMats.forEach(i=>{i.emissiveIntensity=.82+Math.cos(this.discoTime*2)*.14}),this.stageSpotlights&&this.stageSpotlights.forEach(({sp:i,target:s,basePos:a,phase:o})=>{const l=this.discoTime*2+o;s.position.x=a.x+Math.sin(l)*2.5,s.position.z=a.z+Math.cos(l)*1.5,s.updateMatrixWorld(),i.intensity=5+Math.sin(l*1.8)*1.8}),this.guestBeans&&this.guestBeans.forEach(({group:i,danceType:s,speed:a,phase:o})=>{const l=this.discoTime*3.2*a+o,c=i.userData.body,h=i.userData.armL,u=i.userData.armR,d=i.userData.elbowL,f=i.userData.elbowR,m=i.userData.legL,_=i.userData.legR,p=i.userData.kneeL,g=i.userData.kneeR,v=.25;switch(s){case 0:i.position.y=v+Math.abs(Math.sin(l*2))*.06,c.rotation.z=Math.sin(l)*.2,c.rotation.x=Math.cos(l*2)*.05,h&&u&&(h.rotation.z=-.65+Math.sin(l)*.35,u.rotation.z=.65+Math.sin(l)*.35,h.rotation.x=Math.sin(l)*.45,u.rotation.x=-Math.sin(l)*.45),d&&f&&(d.rotation.x=-.5+Math.sin(l*2)*.25,f.rotation.x=-.5-Math.sin(l*2)*.25),m&&_&&(m.rotation.x=Math.sin(l)*.2,_.rotation.x=-Math.sin(l)*.2);break;case 1:if(i.position.y=v+Math.abs(Math.sin(l*2.2))*.16,c.rotation.z=Math.sin(l*2.2)*.12,h&&u){const b=Math.sin(l*.8)>0?1:-1;h.rotation.x=-1.6*b,h.rotation.z=-1.1*b,u.rotation.x=-.8*b,u.rotation.z=.6*b}p&&g&&(p.rotation.x=Math.abs(Math.sin(l*2.2))*.4,g.rotation.x=Math.abs(Math.sin(l*2.2))*.4);break;case 2:i.rotation.y+=e*3.5*a,i.position.y=v+.04+Math.sin(l*1.5)*.04,c.rotation.z=0,h&&u&&(h.rotation.z=-1.35,u.rotation.z=1.35,h.rotation.x=0,u.rotation.x=0),d&&f&&(d.rotation.x=-.2,f.rotation.x=-.2);break;case 3:i.position.y=v+Math.abs(Math.sin(l*2.5))*.2,c.rotation.z=0,h&&u&&(h.rotation.x=-2.2+Math.sin(l*2.5)*.3,u.rotation.x=-2.2+Math.sin(l*2.5)*.3,h.rotation.z=-.3+Math.sin(l*3)*.2,u.rotation.z=.3-Math.sin(l*3)*.2),p&&g&&(p.rotation.x=Math.abs(Math.sin(l*2.5))*.35,g.rotation.x=Math.abs(Math.sin(l*2.5))*.35);break;case 4:if(i.position.y=v+Math.abs(Math.sin(l*2.2))*.08,c.rotation.x=.12+Math.sin(l*2.2)*.18,c.rotation.z=0,h&&u){const b=Math.abs(Math.sin(l*2.2))*.85;h.rotation.z=-.4-b,u.rotation.z=.4+b,h.rotation.x=.2,u.rotation.x=.2}d&&f&&(d.rotation.x=-1.2,f.rotation.x=-1.2);break;case 5:i.position.y=v+Math.sin(l*1.5)*.04,c.rotation.z=Math.sin(l*1.5)*.24,c.rotation.x=Math.cos(l*1.5)*.12,h&&u&&(h.rotation.x=Math.sin(l*1.5)*.8,u.rotation.x=-Math.sin(l*1.5)*.8,h.rotation.z=-.45,u.rotation.z=.45),d&&f&&(d.rotation.x=-.6+Math.sin(l*1.5)*.3,f.rotation.x=-.6-Math.sin(l*1.5)*.3);break;case 6:i.position.y=v+Math.abs(Math.sin(l*2))*.15,c.rotation.z=.08,h&&u&&(u.rotation.x=-2+Math.sin(l*2)*.4,u.rotation.z=.5+Math.cos(l*2)*.45,h.rotation.x=.2,h.rotation.z=-.55),f&&(f.rotation.x=-.8+Math.sin(l*4)*.3),_&&(_.rotation.x=Math.sin(l*2)*.35);break;case 7:i.position.y=v+Math.abs(Math.sin(l*3.5))*.04,c.rotation.z=Math.sin(l*4)*.14,c.rotation.y+=Math.sin(l*4)*.04,h&&u&&(h.rotation.x=-.75+Math.sin(l*4)*.2,u.rotation.x=-.75-Math.sin(l*4)*.2,h.rotation.z=-.75,u.rotation.z=.75),d&&f&&(d.rotation.x=-1.1,f.rotation.x=-1.1);break}})}t&&n===2?this._updateFollowCamera(t,e):t&&n===3&&this._updateBallroomCamera(t,e),this.renderer.render(this.scene,this.camera)}_updateFollowCamera(e,t){const n=new U(e.x*.45,e.y+4.8,e.z+9.2);this.camera.position.lerp(n,6*t),this.camera.lookAt(e.x*.3,e.y+1.2,e.z-4.5)}_updateBallroomCamera(e,t){if(this.inTransition)return;const n=Kt-16;if(this.cameraMode==="follow"){const i=new U(e.x*.35,e.y+5.8,e.z+9.6);this.camera.position.lerp(i,5*t),this.camera.lookAt(e.x*.2,1.4,e.z-5.5)}else this.cameraMode==="orbit"?(this.orbitAngle+=t*.3,this.camera.position.set(Math.cos(this.orbitAngle)*15,7.5,Math.sin(this.orbitAngle)*15+n),this.camera.lookAt(0,1.4,n)):this.cameraMode==="stage"&&(this.camera.position.set(0,5.5,Kt-36),this.camera.lookAt(0,1.4,n))}_onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}}function Zd(r,e){if(e===zm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Rc||e===yf){let t=r.getIndex();if(t===null){const s=[],a=r.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)s.push(o);r.setIndex(s),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Rc)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function db(r){const e=new Map,t=new Map,n=r.clone();return rm(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,a=e.get(i),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function rm(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)rm(r.children[n],e.children[n],t)}class fb extends Mr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new xb(t)}),this.register(function(t){return new vb(t)}),this.register(function(t){return new Mb(t)}),this.register(function(t){return new Cb(t)}),this.register(function(t){return new Pb(t)}),this.register(function(t){return new Lb(t)}),this.register(function(t){return new Sb(t)}),this.register(function(t){return new bb(t)}),this.register(function(t){return new Tb(t)}),this.register(function(t){return new Eb(t)}),this.register(function(t){return new _b(t)}),this.register(function(t){return new wb(t)}),this.register(function(t){return new yb(t)}),this.register(function(t){return new Rb(t)}),this.register(function(t){return new Ab(t)}),this.register(function(t){return new mb(t)}),this.register(function(t){return new Jd(t,Je.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Jd(t,Je.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Ib(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Zr.extractUrlBase(e);a=Zr.resolveURL(c,this.path)}else a=Zr.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new qf(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===am){try{a[Je.KHR_BINARY_GLTF]=new Db(e)}catch(u){i&&i(u);return}s=JSON.parse(a[Je.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new qb(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Je.KHR_MATERIALS_UNLIT:a[u]=new gb;break;case Je.KHR_DRACO_MESH_COMPRESSION:a[u]=new Nb(s,this.dracoLoader);break;case Je.KHR_TEXTURE_TRANSFORM:a[u]=new Ub;break;case Je.KHR_MESH_QUANTIZATION:a[u]=new Ob;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function pb(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function Ct(r,e,t){const n=r.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const Je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class mb{constructor(e){this.parser=e,this.name=Je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new Be(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Nn);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new po(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Kf(h),c.distance=u;break;case"spot":c=new fo(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ii(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class gb{constructor(){this.name=Je.KHR_MATERIALS_UNLIT}getMaterialType(){return xn}extendParams(e,t,n){const i=[];e.color=new Be(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Nn),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,At))}return Promise.all(i)}}class _b{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Ct(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class xb{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?jn:null}extendMaterialParams(e,t){const n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new we(s,s)}return Promise.all(i)}}class vb{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?jn:null}extendMaterialParams(e,t){const n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}}class Mb{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?jn:null}extendMaterialParams(e,t){const n=Ct(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class yb{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?jn:null}extendMaterialParams(e,t){const n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class Sb{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SHEEN}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?jn:null}extendMaterialParams(e,t){const n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new Be(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],Nn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,At)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class bb{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?jn:null}extendMaterialParams(e,t){const n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class Tb{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_VOLUME}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?jn:null}extendMaterialParams(e,t){const n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const s=n.attenuationColor||[1,1,1];return t.attenuationColor=new Be().setRGB(s[0],s[1],s[2],Nn),Promise.all(i)}}class Eb{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IOR}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?jn:null}extendMaterialParams(e,t){const n=Ct(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class wb{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?jn:null}extendMaterialParams(e,t){const n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const s=n.specularColorFactor||[1,1,1];return t.specularColor=new Be().setRGB(s[0],s[1],s[2],Nn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,At)),Promise.all(i)}}class Ab{constructor(e){this.parser=e,this.name=Je.EXT_MATERIALS_BUMP}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?jn:null}extendMaterialParams(e,t){const n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class Rb{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?jn:null}extendMaterialParams(e,t){const n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class Cb{constructor(e){this.parser=e,this.name=Je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class Pb{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class Lb{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class Jd{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class Ib{constructor(e){this.name=Je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==kn.TRIANGLES&&c.mode!==kn.TRIANGLE_STRIP&&c.mode!==kn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const m of u){const _=new We,p=new U,g=new Ui,v=new U(1,1,1),b=new Of(m.geometry,m.material,d);for(let y=0;y<d;y++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,y),l.SCALE&&v.fromBufferAttribute(l.SCALE,y),b.setMatrixAt(y,_.compose(p,g,v));let M=null;for(const y in l)if(y==="_COLOR_0"){const T=l[y];b.instanceColor=new Eo(T.array,T.itemSize,T.normalized)}else if(y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"){if(M===null){const x=b.geometry;M=new Bt,M.name=x.name;for(const S in x.attributes)M.setAttribute(S,x.attributes[S]);for(const S in x.morphAttributes)M.morphAttributes[S]=x.morphAttributes[S];x.index!==null&&M.setIndex(x.index),M.morphTargetsRelative=x.morphTargetsRelative;for(const S of x.groups)M.addGroup(S.start,S.count,S.materialIndex);x.boundingBox!==null&&(M.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(M.boundingSphere=x.boundingSphere.clone()),M.drawRange.start=x.drawRange.start,M.drawRange.count=x.drawRange.count,M.userData=Object.assign({},x.userData),b.geometry=M}const T=l[y];M.setAttribute(y,new Eo(T.array,T.itemSize,T.normalized))}mt.prototype.copy.call(b,m),this.parser.assignFinalMaterial(b),f.push(b)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const am="glTF",Or=12,$d={JSON:1313821514,BIN:5130562};class Db{constructor(e){this.name=Je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Or),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==am)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Or,s=new DataView(e,Or);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===$d.JSON){const c=new Uint8Array(e,Or+a,o);this.content=n.decode(c)}else if(l===$d.BIN){const c=Or+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Nb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=Yc[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=Yc[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],f=ar[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const m in f.attributes){const _=f.attributes[m],p=l[m];p!==void 0&&(_.normalized=p)}u(f)},o,c,Nn,d)})})}}class Ub{constructor(){this.name=Je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){const n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class Ob{constructor(){this.name=Je.KHR_MESH_QUANTIZATION}}class om extends _r{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,m=e*c,_=m-c,p=-2*f+3*d,g=f-d,v=1-p,b=g-d+u;for(let M=0;M!==o;M++){const y=a[_+M+o],T=a[_+M+l]*h,x=a[m+M+o],S=a[m+M]*h;s[M]=v*y+b*T+p*x+g*S}return s}}const Fb=new Ui;class Bb extends om{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return Fb.fromArray(s).normalize().toArray(s),s}}const kn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ar={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Qd={9728:zt,9729:$t,9984:pf,9985:ao,9986:Br,9987:Gn},jd={33071:li,33648:Mo,10497:is},Hl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Yc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Xi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},kb={CUBICSPLINE:void 0,LINEAR:ia,STEP:na},Vl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function zb(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Ee({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ns})),r.DefaultMaterial}function Ms(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ii(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Gb(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function Hb(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Vb(r){let e;const t=r.extensions&&r.extensions[Je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Wl(t.attributes):e=r.indices+":"+Wl(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Wl(r.targets[n]);return e}function Wl(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Kc(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Wb(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Xb=new We;class qb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new pb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?(this.textureLoader=new uo(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Ng(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new qf(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Ms(s,o,i),ii(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())s(h,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(Zr.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Hl[i.type],o=ar[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new In(c,a,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=Hl[i.type],c=ar[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let _,p;if(f&&f!==u){const g=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let b=t.cache.get(v);b||(_=new c(o,g*f,i.count*f/h),b=new If(_,f/h),t.cache.add(v,b)),p=new aa(b,l,d%f/h,m)}else o===null?_=new c(i.count*l):_=new c(o,d,i.count*l),p=new In(_,l,m);if(i.sparse!==void 0){const g=Hl.SCALAR,v=ar[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,y=new v(a[1],b,i.sparse.count*g),T=new c(a[2],M,i.sparse.count*l);o!==null&&(p=new In(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let x=0,S=y.length;x<S;x++){const R=y[x];if(p.setX(R,T[x*l]),l>=2&&p.setY(R,T[x*l+1]),l>=3&&p.setZ(R,T[x*l+2]),l>=4&&p.setW(R,T[x*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=m}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return h.magFilter=Qd[d.magFilter]||$t,h.minFilter=Qd[d.minFilter]||Gn,h.wrapS=jd[d.wrapS]||is,h.wrapT=jd[d.wrapT]||is,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==zt&&h.minFilter!==$t,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)h=n.getDependency("bufferView",a.bufferView).then(function(d){return new Promise(function(f,m){t.parse(d,f,m)})});else{if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(d){c=!0;const f=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(d){return new Promise(function(f,m){let _=f;t.isImageBitmapLoader===!0&&(_=function(p){const g=new Gt(p);g.needsUpdate=!0,f(g)}),t.load(Zr.resolveURL(d,s.path),_,void 0,m)})})}const u=h.then(function(d){return c===!0&&o.revokeObjectURL(l),ii(d,a),d.userData.mimeType=a.mimeType||Wb(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[Je.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Je.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new gh,$n.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Ff,$n.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ee}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[Je.KHR_MATERIALS_UNLIT]){const u=i[Je.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,s,t))}else{const u=s.pbrMetallicRoughness||{};if(o.color=new Be(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Nn),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,At)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=gn);const h=s.alphaMode||Vl.OPAQUE;if(h===Vl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Vl.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==xn&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new we(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==xn&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==xn){const u=s.emissiveFactor;o.emissive=new Be().setRGB(u[0],u[1],u[2],Nn)}return s.emissiveTexture!==void 0&&a!==xn&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,At)),Promise.all(c).then(function(){const u=new a(o);return s.name&&(u.name=s.name),ii(u,s),t.associations.set(u,{materials:e}),s.extensions&&Ms(i,u,s),u})}createUniqueName(e){const t=ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return ef(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=Vb(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[Je.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=ef(new Bt,c,t),c.mode===kn.TRIANGLE_STRIP?d=d.then(f=>Zd(f,yf)):c.mode===kn.TRIANGLE_FAN&&(d=d.then(f=>Zd(f,Rc))),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?zb(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){const _=h[f],p=a[f];let g;const v=c[f];if(p.mode===kn.TRIANGLES||p.mode===kn.TRIANGLE_STRIP||p.mode===kn.TRIANGLE_FAN||p.mode===void 0){const b=s.isSkinnedMesh===!0,M=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");b&&M===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=b&&M?new B0(_,v):new J(_,v),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(p.mode===kn.LINES)g=new H0(_,v);else if(p.mode===kn.LINE_STRIP)g=new mh(_,v);else if(p.mode===kn.LINE_LOOP)g=new V0(_,v);else if(p.mode===kn.POINTS)g=new Bf(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&Hb(g,s),g.name=t.createUniqueName(s.name||"mesh_"+e),ii(g,s),p.extensions&&Ms(i,g,p),t.assignFinalMaterial(g),u.push(g)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&Ms(i,u[0],s),u[0];const d=new ze;s.extensions&&Ms(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new mn(kt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Sh(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ii(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const d=new We;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new fh(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],m=i.samplers[f.sampler],_=f.target,p=_.node,g=i.parameters!==void 0?i.parameters[m.input]:m.input,v=i.parameters!==void 0?i.parameters[m.output]:m.output;_.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",v)),c.push(m),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],m=u[2],_=u[3],p=u[4],g=[];for(let b=0,M=d.length;b<M;b++){const y=d[b],T=f[b],x=m[b],S=_[b],R=p[b];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const P=n._createAnimationTracks(y,T,x,S,R);if(P)for(let D=0;D<P.length;D++)g.push(P[D])}const v=new Sg(s,void 0,g);return ii(v,i),v})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Xb)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){const f=h.userData.pivot,m=u[0];h.pivot=new U().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new Uf:c.length>1?h=new ze:c.length===1?h=c[0]:h=new mt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=a),ii(h,s),s.extensions&&Ms(n,h,s),s.matrix!==void 0){const u=new We;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new ze;n.name&&(s.name=i.createUniqueName(n.name)),ii(s,n),n.extensions&&Ms(t,s,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){const d=l[h];d.parent!==null?s.add(db(d)):s.add(d)}const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof $n||d instanceof Gt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}Xi[s.path]===Xi.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(Xi[s.path]){case Xi.weights:h=ca;break;case Xi.rotation:h=ha;break;case Xi.translation:case Xi.scale:h=Ro;break;default:switch(n.itemSize){case 1:h=ca;break;case 2:case 3:default:h=Ro;break}break}const u=i.interpolation!==void 0?kb[i.interpolation]:ia,d=this._getArrayFromAccessor(n);for(let f=0,m=l.length;f<m;f++){const _=new h(l[f]+"."+Xi[s.path],t.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Kc(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ha?Bb:om;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Yb(r,e,t){const n=e.attributes,i=new Oi;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new U(l[0],l[1],l[2]),new U(c[0],c[1],c[2])),o.normalized){const h=Kc(ar[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new U,l=new U;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const _=Kc(ar[d.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new mi;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function ef(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(const a in n){const o=Yc[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return je.workingColorSpace!==Nn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${je.workingColorSpace}" not supported.`),ii(r,e),Yb(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Gb(r,e.targets,t):r})}var Sa={};(function r(e,t,n,i){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=function(){if(!e.OffscreenCanvas)return!1;try{var L=new OffscreenCanvas(1,1),A=L.getContext("2d");A.fillRect(0,0,1,1);var V=L.transferToImageBitmap();A.createPattern(V,"no-repeat")}catch{return!1}return!0}();function l(){}function c(L){var A=t.exports.Promise,V=A!==void 0?A:e.Promise;return typeof V=="function"?new V(L):(L(l,l),null)}var h=function(L,A){return{transform:function(V){if(L)return V;if(A.has(V))return A.get(V);var ie=new OffscreenCanvas(V.width,V.height),z=ie.getContext("2d");return z.drawImage(V,0,0),A.set(V,ie),ie},clear:function(){A.clear()}}}(o,new Map),u=function(){var L=Math.floor(16.666666666666668),A,V,ie={},z=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(A=function(Z){var se=Math.random();return ie[se]=requestAnimationFrame(function ae(j){z===j||z+L-1<j?(z=j,delete ie[se],Z()):ie[se]=requestAnimationFrame(ae)}),se},V=function(Z){ie[Z]&&cancelAnimationFrame(ie[Z])}):(A=function(Z){return setTimeout(Z,L)},V=function(Z){return clearTimeout(Z)}),{frame:A,cancel:V}}(),d=function(){var L,A,V={};function ie(z){function Z(se,ae){z.postMessage({options:se||{},callback:ae})}z.init=function(ae){var j=ae.transferControlToOffscreen();z.postMessage({canvas:j},[j])},z.fire=function(ae,j,Me){if(A)return Z(ae,null),A;var Ue=Math.random().toString(36).slice(2);return A=c(function(ue){function Le(Ie){Ie.data.callback===Ue&&(delete V[Ue],z.removeEventListener("message",Le),A=null,h.clear(),Me(),ue())}z.addEventListener("message",Le),Z(ae,Ue),V[Ue]=Le.bind(null,{data:{callback:Ue}})}),A},z.reset=function(){z.postMessage({reset:!0});for(var ae in V)V[ae](),delete V[ae]}}return function(){if(L)return L;if(!n&&s){var z=["var CONFETTI, SIZE = {}, module = {};","("+r.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{L=new Worker(URL.createObjectURL(new Blob([z])))}catch(Z){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",Z),null}ie(L)}return L}}(),f={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function m(L,A){return A?A(L):L}function _(L){return L!=null}function p(L,A,V){return m(L&&_(L[A])?L[A]:f[A],V)}function g(L){return L<0?0:Math.floor(L)}function v(L,A){return Math.floor(Math.random()*(A-L))+L}function b(L){return parseInt(L,16)}function M(L){return L.map(y)}function y(L){var A=String(L).replace(/[^0-9a-f]/gi,"");return A.length<6&&(A=A[0]+A[0]+A[1]+A[1]+A[2]+A[2]),{r:b(A.substring(0,2)),g:b(A.substring(2,4)),b:b(A.substring(4,6))}}function T(L){var A=p(L,"origin",Object);return A.x=p(A,"x",Number),A.y=p(A,"y",Number),A}function x(L){L.width=document.documentElement.clientWidth,L.height=document.documentElement.clientHeight}function S(L){var A=L.getBoundingClientRect();L.width=A.width,L.height=A.height}function R(L){var A=document.createElement("canvas");return A.style.position="fixed",A.style.top="0px",A.style.left="0px",A.style.pointerEvents="none",A.style.zIndex=L,A}function P(L,A,V,ie,z,Z,se,ae,j){L.save(),L.translate(A,V),L.rotate(Z),L.scale(ie,z),L.arc(0,0,1,se,ae,j),L.restore()}function D(L){var A=L.angle*(Math.PI/180),V=L.spread*(Math.PI/180);return{x:L.x,y:L.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:L.startVelocity*.5+Math.random()*L.startVelocity,angle2D:-A+(.5*V-Math.random()*V),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:L.color,shape:L.shape,tick:0,totalTicks:L.ticks,decay:L.decay,drift:L.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:L.gravity*3,ovalScalar:.6,scalar:L.scalar,flat:L.flat}}function F(L,A){A.x+=Math.cos(A.angle2D)*A.velocity+A.drift,A.y+=Math.sin(A.angle2D)*A.velocity+A.gravity,A.velocity*=A.decay,A.flat?(A.wobble=0,A.wobbleX=A.x+10*A.scalar,A.wobbleY=A.y+10*A.scalar,A.tiltSin=0,A.tiltCos=0,A.random=1):(A.wobble+=A.wobbleSpeed,A.wobbleX=A.x+10*A.scalar*Math.cos(A.wobble),A.wobbleY=A.y+10*A.scalar*Math.sin(A.wobble),A.tiltAngle+=.1,A.tiltSin=Math.sin(A.tiltAngle),A.tiltCos=Math.cos(A.tiltAngle),A.random=Math.random()+2);var V=A.tick++/A.totalTicks,ie=A.x+A.random*A.tiltCos,z=A.y+A.random*A.tiltSin,Z=A.wobbleX+A.random*A.tiltCos,se=A.wobbleY+A.random*A.tiltSin;if(L.fillStyle="rgba("+A.color.r+", "+A.color.g+", "+A.color.b+", "+(1-V)+")",L.beginPath(),a&&A.shape.type==="path"&&typeof A.shape.path=="string"&&Array.isArray(A.shape.matrix))L.fill(k(A.shape.path,A.shape.matrix,A.x,A.y,Math.abs(Z-ie)*.1,Math.abs(se-z)*.1,Math.PI/10*A.wobble));else if(A.shape.type==="bitmap"){var ae=Math.PI/10*A.wobble,j=Math.abs(Z-ie)*.1,Me=Math.abs(se-z)*.1,Ue=A.shape.bitmap.width*A.scalar,ue=A.shape.bitmap.height*A.scalar,Le=new DOMMatrix([Math.cos(ae)*j,Math.sin(ae)*j,-Math.sin(ae)*Me,Math.cos(ae)*Me,A.x,A.y]);Le.multiplySelf(new DOMMatrix(A.shape.matrix));var Ie=L.createPattern(h.transform(A.shape.bitmap),"no-repeat");Ie.setTransform(Le),L.globalAlpha=1-V,L.fillStyle=Ie,L.fillRect(A.x-Ue/2,A.y-ue/2,Ue,ue),L.globalAlpha=1}else if(A.shape==="circle")L.ellipse?L.ellipse(A.x,A.y,Math.abs(Z-ie)*A.ovalScalar,Math.abs(se-z)*A.ovalScalar,Math.PI/10*A.wobble,0,2*Math.PI):P(L,A.x,A.y,Math.abs(Z-ie)*A.ovalScalar,Math.abs(se-z)*A.ovalScalar,Math.PI/10*A.wobble,0,2*Math.PI);else if(A.shape==="star")for(var de=Math.PI/2*3,$e=4*A.scalar,Qe=8*A.scalar,ct=A.x,st=A.y,Wt=5,ht=Math.PI/Wt;Wt--;)ct=A.x+Math.cos(de)*Qe,st=A.y+Math.sin(de)*Qe,L.lineTo(ct,st),de+=ht,ct=A.x+Math.cos(de)*$e,st=A.y+Math.sin(de)*$e,L.lineTo(ct,st),de+=ht;else L.moveTo(Math.floor(A.x),Math.floor(A.y)),L.lineTo(Math.floor(A.wobbleX),Math.floor(z)),L.lineTo(Math.floor(Z),Math.floor(se)),L.lineTo(Math.floor(ie),Math.floor(A.wobbleY));return L.closePath(),L.fill(),A.tick<A.totalTicks}function G(L,A,V,ie,z){var Z=A.slice(),se=L.getContext("2d"),ae,j,Me=c(function(Ue){function ue(){ae=j=null,se.clearRect(0,0,ie.width,ie.height),h.clear(),z(),Ue()}function Le(){n&&!(ie.width===i.width&&ie.height===i.height)&&(ie.width=L.width=i.width,ie.height=L.height=i.height),!ie.width&&!ie.height&&(V(L),ie.width=L.width,ie.height=L.height),se.clearRect(0,0,ie.width,ie.height),Z=Z.filter(function(Ie){return F(se,Ie)}),Z.length?ae=u.frame(Le):ue()}ae=u.frame(Le),j=ue});return{addFettis:function(Ue){return Z=Z.concat(Ue),Me},canvas:L,promise:Me,reset:function(){ae&&u.cancel(ae),j&&j()}}}function I(L,A){var V=!L,ie=!!p(A||{},"resize"),z=!1,Z=p(A,"disableForReducedMotion",Boolean),se=s&&!!p(A||{},"useWorker"),ae=se?d():null,j=V?x:S,Me=L&&ae?!!L.__confetti_initialized:!1,Ue=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,ue;function Le(de,$e,Qe){for(var ct=p(de,"particleCount",g),st=p(de,"angle",Number),Wt=p(de,"spread",Number),ht=p(de,"startVelocity",Number),hn=p(de,"decay",Number),un=p(de,"gravity",Number),dn=p(de,"drift",Number),B=p(de,"colors",M),fn=p(de,"ticks",Number),gt=p(de,"shapes"),Mt=p(de,"scalar"),ye=!!p(de,"flat"),Pt=T(de),Oe=ct,ke=[],C=L.width*Pt.x,E=L.height*Pt.y;Oe--;)ke.push(D({x:C,y:E,angle:st,spread:Wt,startVelocity:ht,color:B[Oe%B.length],shape:gt[v(0,gt.length)],ticks:fn,decay:hn,gravity:un,drift:dn,scalar:Mt,flat:ye}));return ue?ue.addFettis(ke):(ue=G(L,ke,j,$e,Qe),ue.promise)}function Ie(de){var $e=Z||p(de,"disableForReducedMotion",Boolean),Qe=p(de,"zIndex",Number);if($e&&Ue)return c(function(ht){ht()});V&&ue?L=ue.canvas:V&&!L&&(L=R(Qe),document.body.appendChild(L)),ie&&!Me&&j(L);var ct={width:L.width,height:L.height};ae&&!Me&&ae.init(L),Me=!0,ae&&(L.__confetti_initialized=!0);function st(){if(ae){var ht={getBoundingClientRect:function(){if(!V)return L.getBoundingClientRect()}};j(ht),ae.postMessage({resize:{width:ht.width,height:ht.height}});return}ct.width=ct.height=null}function Wt(){ue=null,ie&&(z=!1,e.removeEventListener("resize",st)),V&&L&&(document.body.contains(L)&&document.body.removeChild(L),L=null,Me=!1)}return ie&&!z&&(z=!0,e.addEventListener("resize",st,!1)),ae?ae.fire(de,ct,Wt):Le(de,ct,Wt)}return Ie.reset=function(){ae&&ae.reset(),ue&&ue.reset()},Ie}var H;function Y(){return H||(H=I(null,{useWorker:!0,resize:!0})),H}function k(L,A,V,ie,z,Z,se){var ae=new Path2D(L),j=new Path2D;j.addPath(ae,new DOMMatrix(A));var Me=new Path2D;return Me.addPath(j,new DOMMatrix([Math.cos(se)*z,Math.sin(se)*z,-Math.sin(se)*Z,Math.cos(se)*Z,V,ie])),Me}function oe(L){if(!a)throw new Error("path confetti are not supported in this browser");var A,V;typeof L=="string"?A=L:(A=L.path,V=L.matrix);var ie=new Path2D(A),z=document.createElement("canvas"),Z=z.getContext("2d");if(!V){for(var se=1e3,ae=se,j=se,Me=0,Ue=0,ue,Le,Ie=0;Ie<se;Ie+=2)for(var de=0;de<se;de+=2)Z.isPointInPath(ie,Ie,de,"nonzero")&&(ae=Math.min(ae,Ie),j=Math.min(j,de),Me=Math.max(Me,Ie),Ue=Math.max(Ue,de));ue=Me-ae,Le=Ue-j;var $e=10,Qe=Math.min($e/ue,$e/Le);V=[Qe,0,0,Qe,-Math.round(ue/2+ae)*Qe,-Math.round(Le/2+j)*Qe]}return{type:"path",path:A,matrix:V}}function K(L){var A,V=1,ie="#000000",z='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof L=="string"?A=L:(A=L.text,V="scalar"in L?L.scalar:V,z="fontFamily"in L?L.fontFamily:z,ie="color"in L?L.color:ie);var Z=10*V,se=""+Z+"px "+z,ae=new OffscreenCanvas(Z,Z),j=ae.getContext("2d");j.font=se;var Me=j.measureText(A),Ue=Math.ceil(Me.actualBoundingBoxRight+Me.actualBoundingBoxLeft),ue=Math.ceil(Me.actualBoundingBoxAscent+Me.actualBoundingBoxDescent),Le=2,Ie=Me.actualBoundingBoxLeft+Le,de=Me.actualBoundingBoxAscent+Le;Ue+=Le+Le,ue+=Le+Le,ae=new OffscreenCanvas(Ue,ue),j=ae.getContext("2d"),j.font=se,j.fillStyle=ie,j.fillText(A,Ie,de);var $e=1/V;return{type:"bitmap",bitmap:ae.transferToImageBitmap(),matrix:[$e,0,0,$e,-Ue*$e/2,-ue*$e/2]}}t.exports=function(){return Y().apply(this,arguments)},t.exports.reset=function(){Y().reset()},t.exports.create=I,t.exports.shapeFromPath=oe,t.exports.shapeFromText=K})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),Sa,!1);const Kb=Sa.exports;Sa.exports.create;const Fo={black:{name:"Classic Obsidian Black",hex:1381915,css:"#15161b"},navy:{name:"Royal Navy Blue",hex:1452102,css:"#162846"},charcoal:{name:"Midnight Charcoal",hex:2830395,css:"#2b303b"},emerald:{name:"Emerald Velvet",hex:1325866,css:"#143b2a"},burgundy:{name:"Royal Burgundy",hex:5051172,css:"#4d1324"},sapphire:{name:"Imperial Sapphire",hex:1850994,css:"#1c3e72"},plum:{name:"Velvet Violet",hex:3742025,css:"#391949"}},Zc={rose:{name:"Blush Rose Gold",hex:14249868,css:"#d96f8c"},lavender:{name:"Lilac Lavender",hex:10188984,css:"#9b78b8"},emerald:{name:"Emerald Glamour",hex:1927760,css:"#1d6a50"},sapphire:{name:"Royal Sapphire",hex:2247062,css:"#224996"},ruby:{name:"Ruby Romance",hex:11018301,css:"#a8203d"},champagne:{name:"Champagne Gold",hex:13936462,css:"#d4a74e"},coral:{name:"Sunset Coral",hex:14704715,css:"#e0604b"},plum:{name:"Twilight Plum",hex:6431577,css:"#622359"}};class Zb{constructor(e){this.world=e,this.loader=new fb,this.player=null,this.playerBody=null,this.playerPosition=new U(0,0,4),this.playerFacing=0,this.isGrounded=!0,this.velocityY=0,this.gravity=24,this.jumpForce=9.2,this.baseY=0,this.armL=null,this.armR=null,this.elbowL=null,this.elbowR=null,this.legL=null,this.legR=null,this.kneeL=null,this.kneeR=null,this.torso=null,this.head=null,this.groomMesh=null,this.brideMesh=null,this.inBallroom=!1,this._walkTime=0,this._currentDance=null,this._selectedConfig={gender:"male",colorHex:Fo.black.hex}}async preload(){await Promise.all([this._tryLoadGLB(pn("assets/models/groom.glb")).then(e=>{e&&(this.groomMesh=e.scene)}),this._tryLoadGLB(pn("assets/models/bride.glb")).then(e=>{e&&(this.brideMesh=e.scene)})])}async _tryLoadGLB(e){return new Promise(t=>{this.loader.load(e,n=>t(n),void 0,()=>t(null))})}spawnPlayer(e={},t){this._selectedConfig={gender:e.gender||"male",colorHex:e.colorHex||(e.gender==="female"?Zc.rose.hex:Fo.black.hex)},this.player&&(this.world.scene.remove(this.player),this.player=null),this.inBallroom=!1,this.isGrounded=!0,this.velocityY=0,this.player=this._createMannequinModel({isPlayer:!0,gender:this._selectedConfig.gender,colorHex:this._selectedConfig.colorHex,hasTopHat:this._selectedConfig.gender==="male"}),this.playerPosition.set(0,0,4),this.player.position.copy(this.playerPosition),this.world.scene.add(this.player),this._spawnCoupleOnStage()}_createMannequinModel(e={}){const t=sm(e);return e.isPlayer&&(this.playerBody=t.userData.body,this.armL=t.userData.armL,this.armR=t.userData.armR,this.elbowL=t.userData.elbowL,this.elbowR=t.userData.elbowR,this.legL=t.userData.legL,this.legR=t.userData.legR,this.kneeL=t.userData.kneeL,this.kneeR=t.userData.kneeR,this.torso=t.userData.torso,this.head=t.userData.head,this._aura=t.userData.aura),t}_spawnCoupleOnStage(){const e=this.world.ballroomGroup;this.groomMesh||(this.groomMesh=this._createMannequinModel({gender:"male",isGroom:!0})),this.groomMesh.position.set(-1.4,.25,-16),this.groomMesh.rotation.y=.25,e.add(this.groomMesh),this.brideMesh||(this.brideMesh=this._createMannequinModel({gender:"female",isBride:!0})),this.brideMesh.position.set(1.4,.25,-16),this.brideMesh.rotation.y=-.25,e.add(this.brideMesh);const t=new J(new Ho(1.8,2.3,32),new Ee({color:13938487,emissive:16766720,emissiveIntensity:.85,side:gn,roughness:.15}));t.rotation.x=-Math.PI/2,t.position.set(0,.265,-16),e.add(t),this._addNameLabel(-1.4,3.05,-16,"Ziad 🤵"),this._addNameLabel(1.4,3.05,-16,"Heba 👰")}_addNameLabel(e,t,n,i){const s=document.createElement("canvas");s.width=300,s.height=80;const a=s.getContext("2d");a.fillStyle="rgba(12, 10, 22, 0.85)",a.strokeStyle="#d4af37",a.lineWidth=4,a.beginPath(),a.roundRect?a.roundRect(6,6,288,68,18):a.rect(6,6,288,68),a.fill(),a.stroke(),a.fillStyle="#f5e08a",a.font='bold 36px "Cinzel", serif, sans-serif',a.textAlign="center",a.textBaseline="middle",a.fillText(i,150,42);const o=new la(s),l=new U0(new Df({map:o,transparent:!0}));l.scale.set(2.8,.8,1),l.position.set(e,t,n),this.world.ballroomGroup.add(l)}jump(){!this.player||!this.isGrounded||(this.isGrounded=!1,this.velocityY=this.jumpForce,this.kneeL&&this.kneeR&&(Dt.to(this.kneeL.rotation,{x:.6,duration:.15}),Dt.to(this.kneeR.rotation,{x:.6,duration:.15})),this.armL&&this.armR&&(Dt.to(this.armL.rotation,{x:-2.3,z:-.5,duration:.2}),Dt.to(this.armR.rotation,{x:-2.3,z:.5,duration:.2})))}playDance(e){if(this.player){this._currentDance=e;try{Kb({particleCount:25,spread:60,origin:{y:.75},colors:["#d4af37","#e8a0a0","#ffffff"]})}catch{}}}enterBallroom(){this.inBallroom=!0,this._currentDance="idle",this.baseY=.25;const e=Kt-10;Dt.to(this.playerPosition,{x:0,y:.25,z:e,duration:1.8,ease:"power2.inOut",onUpdate:()=>{this.player&&(this.player.position.copy(this.playerPosition),this.player.rotation.y=Math.PI)}})}update(e,t,n){if(!this.player)return;const i=Math.abs(t)+Math.abs(n)>.05;if(this.inBallroom){const s=this.playerPosition.x+t*4.5*e,a=this.playerPosition.z+n*4.5*e;if(this.playerPosition.x=kt.clamp(s,-6.5,6.5),this.playerPosition.z=kt.clamp(a,Kt-22,Kt-6),i){const o=Math.atan2(t,n);this.playerFacing=kt.lerp(this.playerFacing,o,12*e),this.player.rotation.y=this.playerFacing}}else{const s=this.playerPosition.x+t*5.8*e,a=this.playerPosition.z+n*5.8*e;if(this.playerPosition.x=kt.clamp(s,-2.2,2.2),this.playerPosition.z=kt.clamp(a,Kt+1.5,4),i){const o=Math.atan2(t,n);this.playerFacing=kt.lerp(this.playerFacing,o,12*e),this.player.rotation.y=this.playerFacing}}this.isGrounded||(this.velocityY-=this.gravity*e,this.playerPosition.y+=this.velocityY*e,this.playerPosition.y<=this.baseY&&(this.playerPosition.y=this.baseY,this.velocityY=0,this.isGrounded=!0,this.kneeL&&this.kneeR&&Dt.timeline().to([this.kneeL.rotation,this.kneeR.rotation],{x:.5,duration:.08}).to([this.kneeL.rotation,this.kneeR.rotation],{x:0,duration:.25,ease:"power2.out"}))),this.player.position.copy(this.playerPosition),this._walkTime+=e,this._animateMannequin(e,i,this._currentDance),this._animateCouple(e)}_animateMannequin(e,t,n){if(!this.playerBody||!this.armL||!this.armR||!this.legL||!this.legR)return;const i=this._walkTime,s=this.playerBody;if(!this.isGrounded){this.armL.rotation.x=-2.2+Math.sin(i*12)*.3,this.armR.rotation.x=-2.2-Math.sin(i*12)*.3,this.armL.rotation.z=-.5,this.armR.rotation.z=.5,this.legL.rotation.x=-.4,this.legR.rotation.x=-.4,this.kneeL&&this.kneeR&&(this.kneeL.rotation.x=.6,this.kneeR.rotation.x=.6);return}if(n==="salsa")s.rotation.z=Math.sin(i*6)*.15,s.rotation.y=Math.cos(i*6)*.18,this.armL.rotation.x=-.8+Math.sin(i*6)*.4,this.armR.rotation.x=-.8-Math.sin(i*6)*.4,this.armL.rotation.z=-.6,this.armR.rotation.z=.6,this.elbowL&&this.elbowR&&(this.elbowL.rotation.x=-1.2+Math.sin(i*6)*.3,this.elbowR.rotation.x=-1.2-Math.sin(i*6)*.3),this.legL.rotation.x=Math.sin(i*6)*.25,this.legR.rotation.x=-Math.sin(i*6)*.25,s.position.y=Math.abs(Math.sin(i*12))*.05;else if(n==="hiphop"){const a=Math.abs(Math.sin(i*8))*.14;s.position.y=a,s.rotation.z=Math.sin(i*8)*.1,this.armL.rotation.x=-1.8,this.armL.rotation.z=-1.1,this.armR.rotation.x=-.9,this.armR.rotation.z=.6,this.kneeL&&this.kneeR&&(this.kneeL.rotation.x=Math.abs(Math.sin(i*8))*.5,this.kneeR.rotation.x=Math.abs(Math.sin(i*8))*.5)}else if(n==="spin")this.player.rotation.y+=e*5.5,this.armL.rotation.x=-1.2,this.armR.rotation.x=-1.2,this.armL.rotation.z=-1.1,this.armR.rotation.z=1.1,s.position.y=Math.sin(i*6)*.04;else if(n==="cheer"){const a=Math.abs(Math.sin(i*9))*.18;s.position.y=a,this.armL.rotation.x=-2.3+Math.sin(i*9)*.25,this.armR.rotation.x=-2.3+Math.sin(i*9)*.25,this.armL.rotation.z=-.25+Math.sin(i*10)*.2,this.armR.rotation.z=.25-Math.sin(i*10)*.2,this.kneeL&&this.kneeR&&(this.kneeL.rotation.x=Math.abs(Math.sin(i*9))*.4,this.kneeR.rotation.x=Math.abs(Math.sin(i*9))*.4)}else if(n==="hearts")s.rotation.z=Math.sin(i*4.5)*.12,this.armL.rotation.x=-.9,this.armR.rotation.x=-.9,this.armL.rotation.z=-.7+Math.sin(i*4.5)*.2,this.armR.rotation.z=.7-Math.sin(i*4.5)*.2,s.position.y=Math.sin(i*4.5)*.04;else if(t){const o=Math.sin(i*8.5);this.legL.rotation.x=o*.55,this.legR.rotation.x=-o*.55,this.kneeL&&this.kneeR&&(this.kneeL.rotation.x=Math.max(0,-o)*.65,this.kneeR.rotation.x=Math.max(0,o)*.65),this.armL.rotation.x=-o*.45,this.armR.rotation.x=o*.45,this.armL.rotation.z=-.15,this.armR.rotation.z=.15,this.elbowL&&this.elbowR&&(this.elbowL.rotation.x=Math.max(0,-o)*-.4,this.elbowR.rotation.x=Math.max(0,o)*-.4),s.rotation.y=-o*.08,s.rotation.z=Math.sin(i*8.5)*.06,s.position.y=Math.abs(Math.sin(i*8.5*2))*.05}else s.rotation.z=kt.lerp(s.rotation.z,0,6*e),s.rotation.y=kt.lerp(s.rotation.y,0,6*e),s.position.y=Math.sin(i*2.5)*.02,this.armL.rotation.x=kt.lerp(this.armL.rotation.x,.05,6*e),this.armR.rotation.x=kt.lerp(this.armR.rotation.x,.05,6*e),this.armL.rotation.z=kt.lerp(this.armL.rotation.z,-.15,6*e),this.armR.rotation.z=kt.lerp(this.armR.rotation.z,.15,6*e),this.legL.rotation.x=kt.lerp(this.legL.rotation.x,0,8*e),this.legR.rotation.x=kt.lerp(this.legR.rotation.x,0,8*e),this.kneeL&&this.kneeR&&(this.kneeL.rotation.x=kt.lerp(this.kneeL.rotation.x,0,8*e),this.kneeR.rotation.x=kt.lerp(this.kneeR.rotation.x,0,8*e)),this.elbowL&&this.elbowR&&(this.elbowL.rotation.x=kt.lerp(this.elbowL.rotation.x,-.15,6*e),this.elbowR.rotation.x=kt.lerp(this.elbowR.rotation.x,-.15,6*e));this._aura&&(this._aura.material.opacity=.25+Math.sin(i*4)*.12,this._aura.scale.setScalar(1+Math.sin(i*3)*.04))}_animateCouple(e){const t=this._walkTime;if(this.groomMesh&&this.groomMesh.userData.body){const n=this.groomMesh.userData.body,i=this.groomMesh.userData.armL,s=this.groomMesh.userData.armR,a=this.groomMesh.userData.legL,o=this.groomMesh.userData.legR;n.position.y=Math.abs(Math.sin(t*5))*.14,n.rotation.z=Math.sin(t*5)*.14,n.rotation.y=.25+Math.cos(t*5)*.1,i&&s&&(i.rotation.x=-2.1+Math.sin(t*5)*.35,s.rotation.x=-2.1+Math.sin(t*5+.3)*.35,i.rotation.z=-.35+Math.sin(t*6)*.2,s.rotation.z=.35-Math.sin(t*6)*.2),a&&o&&(a.rotation.x=Math.sin(t*5)*.35,o.rotation.x=-Math.sin(t*5)*.35)}if(this.brideMesh&&this.brideMesh.userData.body){const n=this.brideMesh.userData.body,i=this.brideMesh.userData.armL,s=this.brideMesh.userData.armR;this.brideMesh.rotation.y+=e*1.5,n.position.y=.05+Math.sin(t*3.5)*.06,n.rotation.z=Math.sin(t*3.5)*.12,i&&s&&(s.rotation.x=-2+Math.sin(t*3.5)*.3,s.rotation.z=.5+Math.cos(t*3.5)*.2,i.rotation.x=-.4,i.rotation.z=-1.1+Math.sin(t*3.5)*.15)}}}class Jb{constructor(){this.root=document.getElementById("ui-root"),this.enterBtnVisible=!1,this._joystickCallback=null,this._jumpCallback=null,this._cameraCallback=null,this._audioManager=null,this._onStartGameAction=null,this._joystick={x:0,y:0},this._isTouchDevice="ontouchstart"in window||navigator.maxTouchPoints>0||window.matchMedia("(pointer: coarse)").matches||window.innerWidth<=820,this.selectedGender="male",this.selectedSuitColor=Fo.black.hex,this.selectedDressColor=Zc.rose.hex,this._buildLoadingScreen(),this._buildSelectionScreen(),this._buildHUD(),this._buildJumpButton(),this._buildEnterButton(),this._buildDanceBar(),this._buildRSVPModal(),this._buildTransitionOverlay(),this._buildJoystick()}setAudioManager(e){this._audioManager=e,this.soundBtn&&this._audioManager&&this._audioManager.onChange((t,n)=>{t&&!n?(this.soundBtn.innerHTML="🔊",this.soundBtn.classList.remove("muted","pulse"),this.soundBtn.title="Mute Music"):(this.soundBtn.innerHTML="🔇",this.soundBtn.classList.add("muted","pulse"),this.soundBtn.title="Unmute Music")})}onStartGameAction(e){this._onStartGameAction=e}_buildLoadingScreen(){this.loadingEl=document.createElement("div"),this.loadingEl.id="loading-screen";const e=pn("assets/le-roi-logo.png");this.loadingEl.innerHTML=`
      <div class="logo-container">
        <img src="${e}" alt="Le Roi" onerror="this.style.display='none'"/>
      </div>
      <h2>Ziad &amp; Heba</h2>
      <div class="loading-bar-wrap"><div class="loading-bar" id="loading-bar"></div></div>
      <p class="loading-msg" id="loading-msg">Summoning the 3D Characters…</p>
    `,this.root.appendChild(this.loadingEl),this.loadingBar=document.getElementById("loading-bar"),this.loadingMsg=document.getElementById("loading-msg")}showLoading(e,t){this.loadingEl.style.display="flex",this.loadingMsg.textContent=e,this.loadingBar&&(this.loadingBar.style.width=t+"%")}hideLoading(){Dt.to(this.loadingEl,{opacity:0,duration:.7,ease:"power2.out",onComplete:()=>{this.loadingEl.style.display="none",this.loadingEl.style.opacity=1}})}_buildSelectionScreen(){const e=nm().image.toDataURL(),t=im().image.toDataURL(),n=pn("assets/le-roi-logo.png");this.selectionEl=document.createElement("div"),this.selectionEl.id="selection-screen",this.selectionEl.innerHTML=`
      <div class="selection-particles" id="particles"></div>
      <div class="invite-card">
        <!-- Compact Header -->
        <div class="card-header">
          <img src="${n}" alt="Le Roi" class="initials-img" onerror="this.style.display='none'"/>
          <div class="couple-title-wrap">
            <h1>Ziad <span class="ampersand">&amp;</span> Heba</h1>
          </div>
          <p class="subtitle">Invite you to celebrate their wedding</p>
          <div class="date-venue">
            <strong>March 12, 2027</strong> · Le Roi — Air Force House, Cairo
          </div>
        </div>

        <div class="divider"></div>

        <p class="selection-prompt">— Choose Your 3D Avatar &amp; Colors —</p>

        <!-- Avatar Tabs with Cartoon Faces -->
        <div class="avatar-cards">
          <div class="avatar-card active" id="avatar-male" data-gender="male">
            <img src="${e}" class="face-preview-thumb" alt="Gentleman Face"/>
            <h3>Gentleman</h3>
            <p>Suit &amp; Black Tie</p>
          </div>
          <div class="avatar-card" id="avatar-female" data-gender="female">
            <img src="${t}" class="face-preview-thumb" alt="Lady Face"/>
            <h3>Lady</h3>
            <p>Gown &amp; Tiara</p>
          </div>
        </div>

        <!-- Gentleman Color Customizer -->
        <div id="suit-color-picker" class="color-picker-box">
          <label class="color-picker-title">👔 Suit Color (اختر لون البدلة):</label>
          <div class="color-swatches" id="suit-swatches"></div>
        </div>

        <!-- Lady Color Customizer -->
        <div id="dress-color-picker" class="color-picker-box" style="display:none;">
          <div class="bride-white-alert">
            <span class="alert-icon">👰</span>
            <div>
              <strong>Rule of Honor:</strong> Pure White is reserved strictly for Bride Heba!<br/>
              <span class="arabic-subtext">(اللون الأبيض محجوز للعروسة هبة فقط)</span>
            </div>
          </div>
          <label class="color-picker-title">👗 Dress Color (اختر لون الفستان):</label>
          <div class="color-swatches" id="dress-swatches"></div>
        </div>

        <!-- Toast Notice for attempting white -->
        <div id="white-warning-toast" class="warning-toast">
          🚫 White is exclusively reserved for Bride Heba! Choose another gorgeous color 💕
        </div>

        <!-- Start Celebration Button -->
        <button id="start-game-btn" class="start-btn">
          ✨ ENTER THE WEDDING GAME ✨
        </button>
      </div>
    `,this.root.appendChild(this.selectionEl),this._spawnParticles(),this._populateColorSwatches()}_populateColorSwatches(){const e=this.selectionEl.querySelector("#suit-swatches");Object.entries(Fo).forEach(([n,i],s)=>{const a=document.createElement("div");a.className=`color-swatch ${s===0?"selected":""}`,a.style.backgroundColor=i.css,a.title=i.name,a.innerHTML='<span class="swatch-check">✓</span>',a.addEventListener("click",()=>{e.querySelectorAll(".color-swatch").forEach(o=>o.classList.remove("selected")),a.classList.add("selected"),this.selectedSuitColor=i.hex}),e.appendChild(a)});const t=this.selectionEl.querySelector("#dress-swatches");Object.entries(Zc).forEach(([n,i],s)=>{const a=document.createElement("div");a.className=`color-swatch ${s===0?"selected":""}`,a.style.backgroundColor=i.css,a.title=i.name,a.innerHTML='<span class="swatch-check">✓</span>',a.addEventListener("click",()=>{t.querySelectorAll(".color-swatch").forEach(o=>o.classList.remove("selected")),a.classList.add("selected"),this.selectedDressColor=i.hex}),t.appendChild(a)})}_spawnParticles(){const e=document.getElementById("particles");if(e)for(let t=0;t<30;t++){const n=document.createElement("div");n.className="particle",n.style.cssText=`
        left: ${Math.random()*100}%;
        --dur: ${4+Math.random()*6}s;
        --delay: ${-Math.random()*8}s;
        width: ${1+Math.random()*2}px;
        height: ${1+Math.random()*2}px;
        background: ${Math.random()>.5?"#d4af37":"#e8a0a0"};
      `,e.appendChild(n)}}showSelectionScreen(e){this.selectionEl.style.display="flex",Dt.fromTo(this.selectionEl,{opacity:0},{opacity:1,duration:.6});const t=document.getElementById("avatar-male"),n=document.getElementById("avatar-female"),i=document.getElementById("suit-color-picker"),s=document.getElementById("dress-color-picker"),a=document.getElementById("start-game-btn");t==null||t.addEventListener("click",()=>{t.classList.add("active"),n.classList.remove("active"),i.style.display="block",s.style.display="none",this.selectedGender="male"}),n==null||n.addEventListener("click",()=>{n.classList.add("active"),t.classList.remove("active"),i.style.display="none",s.style.display="block",this.selectedGender="female"}),a==null||a.addEventListener("click",()=>{this._onStartGameAction&&this._onStartGameAction();const o=this.selectedGender==="male"?this.selectedSuitColor:this.selectedDressColor;Dt.to(a,{scale:.94,duration:.1,yoyo:!0,repeat:1,onComplete:()=>{Dt.to(this.selectionEl,{opacity:0,duration:.45,onComplete:()=>e({gender:this.selectedGender,colorHex:o})})}})},{once:!0})}hideSelectionScreen(){this.selectionEl.style.display="none"}_buildHUD(){var e,t,n,i;this.hudEl=document.createElement("div"),this.hudEl.id="hud",this.hudEl.innerHTML=`
      <div id="hud-top-bar">
        <!-- Left: Details Button -->
        <button id="rsvp-btn" class="top-nav-btn" title="Wedding Details">
          💌 <span class="nav-btn-text">Details</span>
        </button>

        <!-- Center: Couple Badge -->
        <div id="hud-couple-badge">
          <span class="badge-ring">💍</span>
          <div class="badge-text-wrap">
            <span class="badge-names">Ziad &amp; Heba</span>
            <span class="badge-date">March 12, 2027</span>
          </div>
        </div>

        <!-- Right: Audio + Camera Controls -->
        <div class="top-nav-actions">
          <button id="sound-btn" class="icon-nav-btn pulse" title="Toggle Music">🔊</button>
          <div class="cam-dropdown-wrapper">
            <button id="cam-toggle-btn" class="icon-nav-btn" title="Camera View">🎥</button>
            <div id="camera-switcher" class="cam-dropdown-menu">
              <button class="cam-btn active" data-mode="follow">Follow</button>
              <button class="cam-btn" data-mode="orbit">Orbit</button>
              <button class="cam-btn" data-mode="stage">Stage</button>
            </div>
          </div>
        </div>
      </div>

      <div id="controls-hint" style="display:none;">
        🎮 <b>WASD / Arrows</b> to Waddle &nbsp;|&nbsp; <b>SPACE</b> to Jump 🦘
      </div>
    `,this.root.appendChild(this.hudEl),this.controlsHint=document.getElementById("controls-hint"),this.soundBtn=document.getElementById("sound-btn"),this.camToggleBtn=document.getElementById("cam-toggle-btn"),this.camMenu=document.getElementById("camera-switcher"),this.rsvpBtn=document.getElementById("rsvp-btn"),(e=this.soundBtn)==null||e.addEventListener("click",()=>{this._audioManager&&this._audioManager.toggle()}),(t=this.camToggleBtn)==null||t.addEventListener("click",s=>{s.stopPropagation(),this.camMenu&&(this.camMenu.classList.contains("open")?this.camMenu.classList.remove("open"):this.camMenu.classList.add("open"))}),window.addEventListener("click",s=>{this.camMenu&&!this.camMenu.contains(s.target)&&s.target!==this.camToggleBtn&&this.camMenu.classList.remove("open")}),(n=this.camMenu)==null||n.querySelectorAll(".cam-btn").forEach(s=>{s.addEventListener("click",a=>{a.stopPropagation(),this.camMenu.querySelectorAll(".cam-btn").forEach(l=>l.classList.remove("active")),s.classList.add("active");const o=s.dataset.mode;this.camMenu.classList.remove("open"),this._cameraCallback&&this._cameraCallback(o)})}),(i=this.rsvpBtn)==null||i.addEventListener("click",()=>{this._rsvpCallback&&this._rsvpCallback()})}showHUD(){this.hudEl.classList.add("visible"),this.jumpBtn&&(this.jumpBtn.classList.add("visible"),this.jumpBtn.style.display="flex")}showControls(e){e?(this.controlsHint&&(this._isTouchDevice?this.controlsHint.innerHTML="✨ <b>Drag Joystick</b> to Waddle &nbsp;|&nbsp; Tap <b>JUMP 🦘</b> ✨":this.controlsHint.innerHTML="🎮 <b>WASD / Arrows</b> to Waddle &nbsp;|&nbsp; <b>SPACE</b> to Jump 🦘",this.controlsHint.style.display="block"),this.jumpBtn&&(this.jumpBtn.classList.add("visible"),this.jumpBtn.style.display="flex"),this.joystickZone&&this._isTouchDevice&&(this.joystickZone.classList.add("visible"),this.joystickZone.style.display="block")):this.hideControls()}hideControls(){this.controlsHint&&(this.controlsHint.style.display="none"),this.joystickZone&&(this.joystickZone.classList.remove("visible"),this.joystickZone.style.display="none"),this.jumpBtn&&(this.jumpBtn.classList.remove("visible"),this.jumpBtn.style.display="none")}_buildJumpButton(){this.jumpBtn=document.createElement("button"),this.jumpBtn.id="jump-btn",this.jumpBtn.innerHTML=`
      <span class="jump-icon">🦘</span>
      <span class="jump-text">JUMP</span>
    `,this.root.appendChild(this.jumpBtn);const e=t=>{t==null||t.preventDefault(),Dt.fromTo(this.jumpBtn,{scale:.85},{scale:1,duration:.2,ease:"back.out(2)"}),this._jumpCallback&&this._jumpCallback()};this.jumpBtn.addEventListener("click",e),this.jumpBtn.addEventListener("touchstart",e,{passive:!1})}onJump(e){this._jumpCallback=e}_buildEnterButton(){this.enterBtn=document.createElement("button"),this.enterBtn.id="enter-btn",this.enterBtn.innerHTML="✨ ENTER THE BALLROOM ✨",this.root.appendChild(this.enterBtn),this._enterBtnClickCb=null,this.enterBtn.addEventListener("click",()=>{this._enterBtnClickCb&&this._enterBtnClickCb()})}showEnterButton(){this.enterBtnVisible||(this.enterBtnVisible=!0,this.enterBtn.classList.add("visible"),Dt.fromTo(this.enterBtn,{opacity:0,y:20},{opacity:1,y:0,duration:.5}))}hideEnterButton(){this.enterBtnVisible=!1,this.enterBtn.classList.remove("visible")}onEnterBtnClick(e){this._enterBtnClickCb=e}_buildDanceBar(){this.danceBar=document.createElement("div"),this.danceBar.id="dance-bar",this.danceBar.innerHTML=`
      <button class="dance-btn" data-action="salsa"><span class="dance-icon">💃</span>Salsa</button>
      <button class="dance-btn" data-action="hiphop"><span class="dance-icon">🕺</span>Hip-Hop</button>
      <button class="dance-btn" data-action="spin"><span class="dance-icon">🌀</span>Spin</button>
      <button class="dance-btn" data-action="cheer"><span class="dance-icon">🙌</span>Cheer</button>
      <button class="dance-btn" data-action="hearts"><span class="dance-icon">💖</span>Hearts</button>
    `,this.root.appendChild(this.danceBar),this._danceCallback=null,this.danceBar.querySelectorAll(".dance-btn").forEach(e=>{e.addEventListener("click",()=>{this.danceBar.querySelectorAll(".dance-btn").forEach(t=>t.classList.remove("active")),e.classList.add("active"),this._danceCallback&&this._danceCallback(e.dataset.action)})})}showDanceBar(e){this._danceCallback=e,this.danceBar.classList.add("visible"),Dt.fromTo(this.danceBar,{opacity:0,y:30},{opacity:1,y:0,duration:.5,delay:.3})}showCameraSwitcher(e){this._cameraCallback=e,this.camToggleBtn&&(this.camToggleBtn.style.display="flex")}showRSVPButton(e){this._rsvpCallback=e,this.rsvpBtn&&this.rsvpBtn.classList.add("glow")}_buildRSVPModal(){var n,i,s;this.rsvpOverlay=document.createElement("div"),this.rsvpOverlay.id="rsvp-modal-overlay";const e=pn("assets/le-roi-logo.png");this.rsvpOverlay.innerHTML=`
      <div id="rsvp-modal">
        <button id="modal-close" aria-label="Close">✕</button>
        <h2>💍 Save the Date</h2>
        <p class="modal-subtitle">Ziad &amp; Heba's Wedding</p>
        <div class="divider"></div>

        <div class="modal-row">
          <span class="modal-row-icon">📅</span>
          <div class="modal-row-content">
            <h4>Date &amp; Time</h4>
            <p>Friday, March 12, 2027</p>
          </div>
        </div>

        <div class="modal-row">
          <span class="modal-row-icon">🏛️</span>
          <div class="modal-row-content">
            <h4>Venue</h4>
            <p>Le Roi — Air Force House<br/>
               <a href="https://maps.google.com/maps?vet=10CAAQoqAOahcKEwiw0sGr0eGXAxUAAAAAHQAAAAAQBQ..i&udm&fvr=1&pvq=Cg0vZy8xMXJkYzJsY3poIgwKBkxlIHJvaRACGAOJAbj6Hf4yRAqc&lqi=CgZMZSByb2lIz9-ksbG3gIAIWhAQABABGAAYASIGbGUgcm9pkgENd2VkZGluZ192ZW51ZZoBRENpOURRVWxSUVVOdlpFTm9kSGxqUmpsdlQyNWtkVnBzVGxKUmEzQndWbFZHYzJOWVJsVmxSelUxVjIxVmVGUllZeEFC-gEECAAQPg&cs=1&um=1&ie=UTF-8&fb=1&gl=eg&sa=X&ftid=0x14583f4d5b405bdb:0x9c0a4432fe1dfab8" target="_blank" rel="noopener">📍 Open in Google Maps</a>
            </p>
          </div>
        </div>

        <div class="modal-row">
          <span class="modal-row-icon">👔</span>
          <div class="modal-row-content">
            <h4>Dress Code</h4>
            <p>Formal / Black Tie — Gold &amp; White accents welcome</p>
          </div>
        </div>

        <div class="modal-row">
          <span class="modal-row-icon">✉️</span>
          <div class="modal-row-content">
            <h4>RSVP</h4>
            <p>Kindly confirm your attendance<br/>by <strong>February 28, 2027</strong></p>
          </div>
        </div>

        <div class="modal-logo">
          <img src="${e}" alt="Le Roi" onerror="this.style.display='none'"/>
        </div>

        <div class="modal-actions">
          <a href="https://maps.google.com/maps?vet=10CAAQoqAOahcKEwiw0sGr0eGXAxUAAAAAHQAAAAAQBQ..i&udm&fvr=1&pvq=Cg0vZy8xMXJkYzJsY3poIgwKBkxlIHJvaRACGAOJAbj6Hf4yRAqc&lqi=CgZMZSByb2lIz9-ksbG3gIAIWhAQABABGAAYASIGbGUgcm9pkgENd2VkZGluZ192ZW51ZZoBRENpOURRVWxSUVVOdlpFTm9kSGxqUmpsdlQyNWtkVnBzVGxKUmEzQndWbFZHYzJOWVJsVmxSelUxVjIxVmVGUllZeEFC-gEECAAQPg&cs=1&um=1&ie=UTF-8&fb=1&gl=eg&sa=X&ftid=0x14583f4d5b405bdb:0x9c0a4432fe1dfab8" target="_blank" class="modal-btn primary">🗺️ &nbsp;Get Directions</a>
          <button class="modal-btn secondary" id="cal-btn">📅 &nbsp;Add to Calendar</button>
          <button class="modal-btn secondary" id="modal-close-btn">Close</button>
        </div>
      </div>
    `,this.root.appendChild(this.rsvpOverlay);const t=()=>this.hideRSVPModal();(n=document.getElementById("modal-close"))==null||n.addEventListener("click",t),(i=document.getElementById("modal-close-btn"))==null||i.addEventListener("click",t),this.rsvpOverlay.addEventListener("click",a=>{a.target===this.rsvpOverlay&&t()}),(s=document.getElementById("cal-btn"))==null||s.addEventListener("click",()=>{const a=["BEGIN:VCALENDAR","VERSION:2.0","BEGIN:VEVENT","DTSTART:20270312T180000","DTEND:20270312T230000","SUMMARY:Ziad & Heba Wedding","LOCATION:Le Roi - Air Force House, Cairo, Egypt","DESCRIPTION:You are invited to the wedding celebration of Ziad & Heba","END:VEVENT","END:VCALENDAR"].join(`\r
`),o=new Blob([a],{type:"text/calendar"}),l=URL.createObjectURL(o),c=document.createElement("a");c.href=l,c.download="Ziad-Heba-Wedding.ics",c.click(),URL.revokeObjectURL(l)})}showRSVPModal(){this.rsvpOverlay.classList.add("visible")}hideRSVPModal(){Dt.to(document.getElementById("rsvp-modal"),{scale:.92,opacity:0,duration:.25,ease:"power2.in",onComplete:()=>{this.rsvpOverlay.classList.remove("visible"),Dt.set(document.getElementById("rsvp-modal"),{scale:1,opacity:1})}})}_buildJoystick(){this.joystickZone=document.createElement("div"),this.joystickZone.id="joystick-zone",this.joystickZone.innerHTML=`
      <div id="joystick-base">
        <div id="joystick-knob"></div>
      </div>
    `,this.root.appendChild(this.joystickZone);const e=document.getElementById("joystick-knob"),t=38;let n=!1,i=null,s=60,a=60;const o=h=>{h.cancelable&&h.preventDefault();const u=h.changedTouches?h.changedTouches[0]:h;i=h.changedTouches?u.identifier:"mouse",n=!0;const d=this.joystickZone.getBoundingClientRect();s=u.clientX-d.left,a=u.clientY-d.top},l=h=>{if(!n)return;h.cancelable&&h.preventDefault();let u;if(h.changedTouches?u=Array.from(h.changedTouches).find(_=>_.identifier===i):u=h,!u)return;let d=u.clientX-this.joystickZone.getBoundingClientRect().left-s,f=u.clientY-this.joystickZone.getBoundingClientRect().top-a;const m=Math.sqrt(d*d+f*f);m>t&&(d=d/m*t,f=f/m*t),e.style.transform=`translate(calc(-50% + ${d}px), calc(-50% + ${f}px))`,this._joystick.x=d/t,this._joystick.y=f/t,this._joystickCallback&&this._joystickCallback({x:this._joystick.x,y:this._joystick.y})},c=h=>{h.changedTouches&&!Array.from(h.changedTouches).find(d=>d.identifier===i)||(n=!1,e.style.transform="translate(-50%, -50%)",this._joystick={x:0,y:0},this._joystickCallback&&this._joystickCallback({x:0,y:0}))};this.joystickZone.addEventListener("touchstart",o,{passive:!1}),this.joystickZone.addEventListener("touchmove",l,{passive:!1}),this.joystickZone.addEventListener("touchend",c,{passive:!1}),this.joystickZone.addEventListener("touchcancel",c,{passive:!1}),this.joystickZone.addEventListener("mousedown",o),window.addEventListener("mousemove",l),window.addEventListener("mouseup",c)}showJoystick(e){this._joystickCallback=e,this._isTouchDevice&&(this.joystickZone.classList.add("visible"),this.joystickZone.style.display="block");const t=()=>{this._isTouchDevice=!0,this.joystickZone&&(this.joystickZone.classList.add("visible"),this.joystickZone.style.display="block"),window.removeEventListener("touchstart",t)};window.addEventListener("touchstart",t,{once:!0})}_buildTransitionOverlay(){this.overlay=document.createElement("div"),this.overlay.id="transition-overlay",this.root.appendChild(this.overlay)}flash(e=.3){Dt.to(this.overlay,{opacity:1,duration:e/2,ease:"power2.in",onComplete:()=>Dt.to(this.overlay,{opacity:0,duration:e/2,ease:"power2.out"})})}}class $b{constructor(){this._src=pn("assets/audio/wedding-song.mp3"),this.audio=null,this.started=!1,this.isPlaying=!1,this.isMuted=!1,this._targetVolume=.6,this._listeners=new Set,this._unlocked=!1,this._setupGlobalUnlock()}_setupGlobalUnlock(){const e=()=>{this._unlock(),window.removeEventListener("click",e),window.removeEventListener("touchstart",e),window.removeEventListener("pointerdown",e)};window.addEventListener("click",e,{once:!0,passive:!0}),window.addEventListener("touchstart",e,{once:!0,passive:!0}),window.addEventListener("pointerdown",e,{once:!0,passive:!0})}_getAudio(){return this.audio||(this.audio=new Audio,this.audio.src=this._src,this.audio.loop=!0,this.audio.preload="auto",this.audio.volume=0,this.audio.addEventListener("play",()=>{this.isPlaying=!0,this._notify()}),this.audio.addEventListener("pause",()=>{this.isPlaying=!1,this._notify()}),this.audio.addEventListener("error",e=>{console.warn("[Audio] Failed to load wedding song at:",this._src,e)})),this.audio}_unlock(){if(this._unlocked)return;this._unlocked=!0;const e=this._getAudio();try{e.load()}catch{}}play(){this.started=!0;const e=this._getAudio();e.muted=!1,this.isMuted=!1;const t=e.play();t!==void 0&&t.then(()=>{this.isPlaying=!0,this._fadeIn(),this._notify()}).catch(n=>{console.warn("[Audio] Autoplay blocked or deferred:",n.message),this.isPlaying=!1,this._notify();const i=()=>{e.play().then(()=>{this.isPlaying=!0,this._fadeIn(),this._notify()}).catch(()=>{}),window.removeEventListener("click",i),window.removeEventListener("touchstart",i)};window.addEventListener("click",i,{once:!0,passive:!0}),window.addEventListener("touchstart",i,{once:!0,passive:!0})})}_fadeIn(e=2.5){if(!this.audio)return;const t=40,n=this._targetVolume;let i=0;clearInterval(this._fadeInterval),this._fadeInterval=setInterval(()=>{if(i++,!this.audio){clearInterval(this._fadeInterval);return}this.audio.volume=Math.min(n,i/t*n),i>=t&&clearInterval(this._fadeInterval)},e*1e3/t)}toggle(){const e=this._getAudio();return this.isPlaying?(e.pause(),this.isPlaying=!1,this.isMuted=!0):(this.play(),this.isMuted=!1),this._notify(),this.isPlaying}setVolume(e){this._targetVolume=Math.max(0,Math.min(1,e)),this.audio&&(this.audio.volume=this._targetVolume)}stop(){this.audio&&(this.audio.pause(),this.audio.currentTime=0,this.isPlaying=!1,this._notify())}onChange(e){return this._listeners.add(e),e(this.isPlaying,this.isMuted),()=>this._listeners.delete(e)}_notify(){this._listeners.forEach(e=>{try{e(this.isPlaying,this.isMuted)}catch(t){console.error(t)}})}}const Qn={LOADING:0,SELECTION:1,RED_CARPET:2,BALLROOM:3};let $s=Qn.LOADING;const Li=new ub,Ii=new Zb(Li),Lt=new Jb,Wh=new $b;Lt.setAudioManager(Wh);Lt.onStartGameAction(()=>{Wh.play()});async function Qb(){Lt.showLoading("Preparing the celebration…",0),await Li.init(),Lt.showLoading("Building the venue…",35),await Ii.preload(),Lt.showLoading("Dressing the guests…",70),await nf(400),Lt.showLoading("Ready!",100),await nf(600),Lt.hideLoading(),Bo(Qn.SELECTION)}async function Bo(r,e={}){switch($s=r,r){case Qn.SELECTION:Lt.showSelectionScreen(jb),Li.showRedCarpetPreview();break;case Qn.RED_CARPET:Wh.play(),Lt.hideSelectionScreen(),Lt.showHUD(),Lt.showControls(!0),Li.startRedCarpet(),Ii.spawnPlayer(e,"RED_CARPET"),eT();break;case Qn.BALLROOM:Li.openDoorsAndEnter(()=>{Ii.enterBallroom(),Lt.showDanceBar(tT),Lt.showRSVPButton(iT),Lt.showCameraSwitcher(nT),Lt.hideControls(),Lt.hideEnterButton()});break}}function jb(r){Bo(Qn.RED_CARPET,r)}const si={};let Jc={x:0,y:0},tf=!1;function eT(){tf||(tf=!0,window.addEventListener("keydown",r=>{si[r.code]=!0,r.code==="Space"&&(r.preventDefault(),Ii.jump()),r.code==="Enter"&&Lt.enterBtnVisible&&Bo(Qn.BALLROOM)}),window.addEventListener("keyup",r=>{si[r.code]=!1}),Lt.onJump(()=>Ii.jump()),Lt.showJoystick(r=>{Jc=r}),Lt.onEnterBtnClick(()=>Bo(Qn.BALLROOM)))}function tT(r){Ii.playDance(r),r==="hearts"&&sT()}function nT(r){Li.setCameraMode(r)}function iT(){Lt.showRSVPModal()}function sT(){const r=["💕","💖","💗","💝","🌸","✨"];for(let e=0;e<18;e++)setTimeout(()=>{const t=document.createElement("div");t.className="heart-shower",t.textContent=r[Math.floor(Math.random()*r.length)],t.style.left=Math.random()*100+"vw",t.style.animationDuration=2+Math.random()*2+"s",document.body.appendChild(t),t.addEventListener("animationend",()=>t.remove())},e*80)}let ro=0;function lm(r){requestAnimationFrame(lm),ro||(ro=r);const e=Math.min((r-ro)/1e3,.05);if(ro=r,$s===Qn.RED_CARPET||$s===Qn.BALLROOM){const t=(si.ArrowLeft||si.KeyA?-1:0)+(si.ArrowRight||si.KeyD?1:0)+Jc.x,n=(si.ArrowUp||si.KeyW?-1:0)+(si.ArrowDown||si.KeyS?1:0)+Jc.y;Ii.update(e,t,n),Li.update(e,Ii.playerPosition,$s),$s===Qn.RED_CARPET&&Li.checkDoorProximity(Ii.playerPosition)&&Lt.showEnterButton()}else Li.update(e,null,$s)}function nf(r){return new Promise(e=>setTimeout(e,r))}requestAnimationFrame(lm);Qb()});export default rT();
