(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();var gh={exports:{}},Vo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w_;function _S(){if(w_)return Vo;w_=1;var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:a,type:r,key:f,ref:l!==void 0?l:null,props:c}}return Vo.Fragment=t,Vo.jsx=n,Vo.jsxs=n,Vo}var D_;function vS(){return D_||(D_=1,gh.exports=_S()),gh.exports}var Kt=vS(),_h={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U_;function yS(){if(U_)return le;U_=1;var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),y=Symbol.iterator;function v(O){return O===null||typeof O!="object"?null:(O=y&&O[y]||O["@@iterator"],typeof O=="function"?O:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,T={};function S(O,it,Tt){this.props=O,this.context=it,this.refs=T,this.updater=Tt||x}S.prototype.isReactComponent={},S.prototype.setState=function(O,it){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,it,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function g(){}g.prototype=S.prototype;function L(O,it,Tt){this.props=O,this.context=it,this.refs=T,this.updater=Tt||x}var U=L.prototype=new g;U.constructor=L,M(U,S.prototype),U.isPureReactComponent=!0;var D=Array.isArray,I={H:null,A:null,T:null,S:null},B=Object.prototype.hasOwnProperty;function z(O,it,Tt,Rt,Y,pt){return Tt=pt.ref,{$$typeof:a,type:O,key:it,ref:Tt!==void 0?Tt:null,props:pt}}function q(O,it){return z(O.type,it,void 0,void 0,void 0,O.props)}function w(O){return typeof O=="object"&&O!==null&&O.$$typeof===a}function A(O){var it={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Tt){return it[Tt]})}var H=/\/+/g;function ct(O,it){return typeof O=="object"&&O!==null&&O.key!=null?A(""+O.key):it.toString(36)}function at(){}function gt(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(at,at):(O.status="pending",O.then(function(it){O.status==="pending"&&(O.status="fulfilled",O.value=it)},function(it){O.status==="pending"&&(O.status="rejected",O.reason=it)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function dt(O,it,Tt,Rt,Y){var pt=typeof O;(pt==="undefined"||pt==="boolean")&&(O=null);var xt=!1;if(O===null)xt=!0;else switch(pt){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(O.$$typeof){case a:case t:xt=!0;break;case _:return xt=O._init,dt(xt(O._payload),it,Tt,Rt,Y)}}if(xt)return Y=Y(O),xt=Rt===""?"."+ct(O,0):Rt,D(Y)?(Tt="",xt!=null&&(Tt=xt.replace(H,"$&/")+"/"),dt(Y,it,Tt,"",function($t){return $t})):Y!=null&&(w(Y)&&(Y=q(Y,Tt+(Y.key==null||O&&O.key===Y.key?"":(""+Y.key).replace(H,"$&/")+"/")+xt)),it.push(Y)),1;xt=0;var bt=Rt===""?".":Rt+":";if(D(O))for(var Ct=0;Ct<O.length;Ct++)Rt=O[Ct],pt=bt+ct(Rt,Ct),xt+=dt(Rt,it,Tt,pt,Y);else if(Ct=v(O),typeof Ct=="function")for(O=Ct.call(O),Ct=0;!(Rt=O.next()).done;)Rt=Rt.value,pt=bt+ct(Rt,Ct++),xt+=dt(Rt,it,Tt,pt,Y);else if(pt==="object"){if(typeof O.then=="function")return dt(gt(O),it,Tt,Rt,Y);throw it=String(O),Error("Objects are not valid as a React child (found: "+(it==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":it)+"). If you meant to render a collection of children, use an array instead.")}return xt}function W(O,it,Tt){if(O==null)return O;var Rt=[],Y=0;return dt(O,Rt,"","",function(pt){return it.call(Tt,pt,Y++)}),Rt}function rt(O){if(O._status===-1){var it=O._result;it=it(),it.then(function(Tt){(O._status===0||O._status===-1)&&(O._status=1,O._result=Tt)},function(Tt){(O._status===0||O._status===-1)&&(O._status=2,O._result=Tt)}),O._status===-1&&(O._status=0,O._result=it)}if(O._status===1)return O._result.default;throw O._result}var Z=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var it=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(it))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function St(){}return le.Children={map:W,forEach:function(O,it,Tt){W(O,function(){it.apply(this,arguments)},Tt)},count:function(O){var it=0;return W(O,function(){it++}),it},toArray:function(O){return W(O,function(it){return it})||[]},only:function(O){if(!w(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},le.Component=S,le.Fragment=n,le.Profiler=l,le.PureComponent=L,le.StrictMode=r,le.Suspense=p,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,le.act=function(){throw Error("act(...) is not supported in production builds of React.")},le.cache=function(O){return function(){return O.apply(null,arguments)}},le.cloneElement=function(O,it,Tt){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Rt=M({},O.props),Y=O.key,pt=void 0;if(it!=null)for(xt in it.ref!==void 0&&(pt=void 0),it.key!==void 0&&(Y=""+it.key),it)!B.call(it,xt)||xt==="key"||xt==="__self"||xt==="__source"||xt==="ref"&&it.ref===void 0||(Rt[xt]=it[xt]);var xt=arguments.length-2;if(xt===1)Rt.children=Tt;else if(1<xt){for(var bt=Array(xt),Ct=0;Ct<xt;Ct++)bt[Ct]=arguments[Ct+2];Rt.children=bt}return z(O.type,Y,void 0,void 0,pt,Rt)},le.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},le.createElement=function(O,it,Tt){var Rt,Y={},pt=null;if(it!=null)for(Rt in it.key!==void 0&&(pt=""+it.key),it)B.call(it,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(Y[Rt]=it[Rt]);var xt=arguments.length-2;if(xt===1)Y.children=Tt;else if(1<xt){for(var bt=Array(xt),Ct=0;Ct<xt;Ct++)bt[Ct]=arguments[Ct+2];Y.children=bt}if(O&&O.defaultProps)for(Rt in xt=O.defaultProps,xt)Y[Rt]===void 0&&(Y[Rt]=xt[Rt]);return z(O,pt,void 0,void 0,null,Y)},le.createRef=function(){return{current:null}},le.forwardRef=function(O){return{$$typeof:h,render:O}},le.isValidElement=w,le.lazy=function(O){return{$$typeof:_,_payload:{_status:-1,_result:O},_init:rt}},le.memo=function(O,it){return{$$typeof:m,type:O,compare:it===void 0?null:it}},le.startTransition=function(O){var it=I.T,Tt={};I.T=Tt;try{var Rt=O(),Y=I.S;Y!==null&&Y(Tt,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(St,Z)}catch(pt){Z(pt)}finally{I.T=it}},le.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},le.use=function(O){return I.H.use(O)},le.useActionState=function(O,it,Tt){return I.H.useActionState(O,it,Tt)},le.useCallback=function(O,it){return I.H.useCallback(O,it)},le.useContext=function(O){return I.H.useContext(O)},le.useDebugValue=function(){},le.useDeferredValue=function(O,it){return I.H.useDeferredValue(O,it)},le.useEffect=function(O,it){return I.H.useEffect(O,it)},le.useId=function(){return I.H.useId()},le.useImperativeHandle=function(O,it,Tt){return I.H.useImperativeHandle(O,it,Tt)},le.useInsertionEffect=function(O,it){return I.H.useInsertionEffect(O,it)},le.useLayoutEffect=function(O,it){return I.H.useLayoutEffect(O,it)},le.useMemo=function(O,it){return I.H.useMemo(O,it)},le.useOptimistic=function(O,it){return I.H.useOptimistic(O,it)},le.useReducer=function(O,it,Tt){return I.H.useReducer(O,it,Tt)},le.useRef=function(O){return I.H.useRef(O)},le.useState=function(O){return I.H.useState(O)},le.useSyncExternalStore=function(O,it,Tt){return I.H.useSyncExternalStore(O,it,Tt)},le.useTransition=function(){return I.H.useTransition()},le.version="19.0.0",le}var L_;function Wd(){return L_||(L_=1,_h.exports=yS()),_h.exports}var lt=Wd(),vh={exports:{}},ko={},yh={exports:{}},xh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N_;function xS(){return N_||(N_=1,function(a){function t(W,rt){var Z=W.length;W.push(rt);t:for(;0<Z;){var St=Z-1>>>1,O=W[St];if(0<l(O,rt))W[St]=rt,W[Z]=O,Z=St;else break t}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var rt=W[0],Z=W.pop();if(Z!==rt){W[0]=Z;t:for(var St=0,O=W.length,it=O>>>1;St<it;){var Tt=2*(St+1)-1,Rt=W[Tt],Y=Tt+1,pt=W[Y];if(0>l(Rt,Z))Y<O&&0>l(pt,Rt)?(W[St]=pt,W[Y]=Z,St=Y):(W[St]=Rt,W[Tt]=Z,St=Tt);else if(Y<O&&0>l(pt,Z))W[St]=pt,W[Y]=Z,St=Y;else break t}}return rt}function l(W,rt){var Z=W.sortIndex-rt.sortIndex;return Z!==0?Z:W.id-rt.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();a.unstable_now=function(){return f.now()-h}}var p=[],m=[],_=1,y=null,v=3,x=!1,M=!1,T=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function U(W){for(var rt=n(m);rt!==null;){if(rt.callback===null)r(m);else if(rt.startTime<=W)r(m),rt.sortIndex=rt.expirationTime,t(p,rt);else break;rt=n(m)}}function D(W){if(T=!1,U(W),!M)if(n(p)!==null)M=!0,gt();else{var rt=n(m);rt!==null&&dt(D,rt.startTime-W)}}var I=!1,B=-1,z=5,q=-1;function w(){return!(a.unstable_now()-q<z)}function A(){if(I){var W=a.unstable_now();q=W;var rt=!0;try{t:{M=!1,T&&(T=!1,g(B),B=-1),x=!0;var Z=v;try{e:{for(U(W),y=n(p);y!==null&&!(y.expirationTime>W&&w());){var St=y.callback;if(typeof St=="function"){y.callback=null,v=y.priorityLevel;var O=St(y.expirationTime<=W);if(W=a.unstable_now(),typeof O=="function"){y.callback=O,U(W),rt=!0;break e}y===n(p)&&r(p),U(W)}else r(p);y=n(p)}if(y!==null)rt=!0;else{var it=n(m);it!==null&&dt(D,it.startTime-W),rt=!1}}break t}finally{y=null,v=Z,x=!1}rt=void 0}}finally{rt?H():I=!1}}}var H;if(typeof L=="function")H=function(){L(A)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,at=ct.port2;ct.port1.onmessage=A,H=function(){at.postMessage(null)}}else H=function(){S(A,0)};function gt(){I||(I=!0,H())}function dt(W,rt){B=S(function(){W(a.unstable_now())},rt)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(W){W.callback=null},a.unstable_continueExecution=function(){M||x||(M=!0,gt())},a.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<W?Math.floor(1e3/W):5},a.unstable_getCurrentPriorityLevel=function(){return v},a.unstable_getFirstCallbackNode=function(){return n(p)},a.unstable_next=function(W){switch(v){case 1:case 2:case 3:var rt=3;break;default:rt=v}var Z=v;v=rt;try{return W()}finally{v=Z}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(W,rt){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var Z=v;v=W;try{return rt()}finally{v=Z}},a.unstable_scheduleCallback=function(W,rt,Z){var St=a.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?St+Z:St):Z=St,W){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=Z+O,W={id:_++,callback:rt,priorityLevel:W,startTime:Z,expirationTime:O,sortIndex:-1},Z>St?(W.sortIndex=Z,t(m,W),n(p)===null&&W===n(m)&&(T?(g(B),B=-1):T=!0,dt(D,Z-St))):(W.sortIndex=O,t(p,W),M||x||(M=!0,gt())),W},a.unstable_shouldYield=w,a.unstable_wrapCallback=function(W){var rt=v;return function(){var Z=v;v=rt;try{return W.apply(this,arguments)}finally{v=Z}}}}(xh)),xh}var O_;function SS(){return O_||(O_=1,yh.exports=xS()),yh.exports}var Sh={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P_;function ES(){if(P_)return An;P_=1;var a=Wd();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)m+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,_){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:""+y,children:p,containerInfo:m,implementation:_}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,An.createPortal=function(p,m){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(p,m,null,_)},An.flushSync=function(p){var m=f.T,_=r.p;try{if(f.T=null,r.p=2,p)return p()}finally{f.T=m,r.p=_,r.d.f()}},An.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},An.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},An.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var _=m.as,y=h(_,m.crossOrigin),v=typeof m.integrity=="string"?m.integrity:void 0,x=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;_==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:y,integrity:v,fetchPriority:x}):_==="script"&&r.d.X(p,{crossOrigin:y,integrity:v,fetchPriority:x,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},An.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var _=h(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},An.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var _=m.as,y=h(_,m.crossOrigin);r.d.L(p,_,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},An.preloadModule=function(p,m){if(typeof p=="string")if(m){var _=h(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},An.requestFormReset=function(p){r.d.r(p)},An.unstable_batchedUpdates=function(p,m){return p(m)},An.useFormState=function(p,m,_){return f.H.useFormState(p,m,_)},An.useFormStatus=function(){return f.H.useHostTransitionStatus()},An.version="19.0.0",An}var I_;function MS(){if(I_)return Sh.exports;I_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),Sh.exports=ES(),Sh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B_;function TS(){if(B_)return ko;B_=1;var a=SS(),t=Wd(),n=MS();function r(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var c=Symbol.for("react.element"),f=Symbol.for("react.transitional.element"),h=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),v=Symbol.for("react.consumer"),x=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),S=Symbol.for("react.suspense_list"),g=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),U=Symbol.for("react.offscreen"),D=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function B(e){return e===null||typeof e!="object"?null:(e=I&&e[I]||e["@@iterator"],typeof e=="function"?e:null)}var z=Symbol.for("react.client.reference");function q(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===z?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case p:return"Fragment";case h:return"Portal";case _:return"Profiler";case m:return"StrictMode";case T:return"Suspense";case S:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case x:return(e.displayName||"Context")+".Provider";case v:return(e._context.displayName||"Context")+".Consumer";case M:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case g:return i=e.displayName||null,i!==null?i:q(e.type)||"Memo";case L:i=e._payload,e=e._init;try{return q(e(i))}catch{}}return null}var w=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=Object.assign,H,ct;function at(e){if(H===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);H=i&&i[1]||"",ct=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+H+e+ct}var gt=!1;function dt(e,i){if(!e||gt)return"";gt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(ot){var nt=ot}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(ot){nt=ot}e.call(vt.prototype)}}else{try{throw Error()}catch(ot){nt=ot}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(ot){if(ot&&nt&&typeof ot.stack=="string")return[ot.stack,nt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),E=d[0],R=d[1];if(E&&R){var P=E.split(`
`),V=R.split(`
`);for(u=o=0;o<P.length&&!P[o].includes("DetermineComponentFrameRoot");)o++;for(;u<V.length&&!V[u].includes("DetermineComponentFrameRoot");)u++;if(o===P.length||u===V.length)for(o=P.length-1,u=V.length-1;1<=o&&0<=u&&P[o]!==V[u];)u--;for(;1<=o&&0<=u;o--,u--)if(P[o]!==V[u]){if(o!==1||u!==1)do if(o--,u--,0>u||P[o]!==V[u]){var ut=`
`+P[o].replace(" at new "," at ");return e.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",e.displayName)),ut}while(1<=o&&0<=u);break}}}finally{gt=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?at(s):""}function W(e){switch(e.tag){case 26:case 27:case 5:return at(e.type);case 16:return at("Lazy");case 13:return at("Suspense");case 19:return at("SuspenseList");case 0:case 15:return e=dt(e.type,!1),e;case 11:return e=dt(e.type.render,!1),e;case 1:return e=dt(e.type,!0),e;default:return""}}function rt(e){try{var i="";do i+=W(e),e=e.return;while(e);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function Z(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function St(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function O(e){if(Z(e)!==e)throw Error(r(188))}function it(e){var i=e.alternate;if(!i){if(i=Z(e),i===null)throw Error(r(188));return i!==e?null:e}for(var s=e,o=i;;){var u=s.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){s=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===s)return O(u),e;if(d===o)return O(u),i;d=d.sibling}throw Error(r(188))}if(s.return!==o.return)s=u,o=d;else{for(var E=!1,R=u.child;R;){if(R===s){E=!0,s=u,o=d;break}if(R===o){E=!0,o=u,s=d;break}R=R.sibling}if(!E){for(R=d.child;R;){if(R===s){E=!0,s=d,o=u;break}if(R===o){E=!0,o=d,s=u;break}R=R.sibling}if(!E)throw Error(r(189))}}if(s.alternate!==o)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?e:i}function Tt(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=Tt(e),i!==null)return i;e=e.sibling}return null}var Rt=Array.isArray,Y=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pt={pending:!1,data:null,method:null,action:null},xt=[],bt=-1;function Ct(e){return{current:e}}function $t(e){0>bt||(e.current=xt[bt],xt[bt]=null,bt--)}function It(e,i){bt++,xt[bt]=e.current,e.current=i}var Te=Ct(null),De=Ct(null),re=Ct(null),F=Ct(null);function vn(e,i){switch(It(re,i),It(De,e),It(Te,null),e=i.nodeType,e){case 9:case 11:i=(i=i.documentElement)&&(i=i.namespaceURI)?a_(i):0;break;default:if(e=e===8?i.parentNode:i,i=e.tagName,e=e.namespaceURI)e=a_(e),i=r_(e,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}$t(Te),It(Te,i)}function oe(){$t(Te),$t(De),$t(re)}function de(e){e.memoizedState!==null&&It(F,e);var i=Te.current,s=r_(i,e.type);i!==s&&(It(De,e),It(Te,s))}function Xt(e){De.current===e&&($t(Te),$t(De)),F.current===e&&($t(F),Bo._currentValue=pt)}var Ue=Object.prototype.hasOwnProperty,Wt=a.unstable_scheduleCallback,N=a.unstable_cancelCallback,b=a.unstable_shouldYield,et=a.unstable_requestPaint,ft=a.unstable_now,yt=a.unstable_getCurrentPriorityLevel,ht=a.unstable_ImmediatePriority,Gt=a.unstable_UserBlockingPriority,Dt=a.unstable_NormalPriority,Bt=a.unstable_LowPriority,_e=a.unstable_IdlePriority,Mt=a.log,zt=a.unstable_setDisableYieldValue,Qt=null,Vt=null;function Ft(e){if(Vt&&typeof Vt.onCommitFiberRoot=="function")try{Vt.onCommitFiberRoot(Qt,e,void 0,(e.current.flags&128)===128)}catch{}}function se(e){if(typeof Mt=="function"&&zt(e),Vt&&typeof Vt.setStrictMode=="function")try{Vt.setStrictMode(Qt,e)}catch{}}var jt=Math.clz32?Math.clz32:Nt,Le=Math.log,k=Math.LN2;function Nt(e){return e>>>=0,e===0?32:31-(Le(e)/k|0)|0}var st=128,_t=4194304;function wt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ut(e,i){var s=e.pendingLanes;if(s===0)return 0;var o=0,u=e.suspendedLanes,d=e.pingedLanes,E=e.warmLanes;e=e.finishedLanes!==0;var R=s&134217727;return R!==0?(s=R&~u,s!==0?o=wt(s):(d&=R,d!==0?o=wt(d):e||(E=R&~E,E!==0&&(o=wt(E))))):(R=s&~u,R!==0?o=wt(R):d!==0?o=wt(d):e||(E=s&~E,E!==0&&(o=wt(E)))),o===0?0:i!==0&&i!==o&&(i&u)===0&&(u=o&-o,E=i&-i,u>=E||u===32&&(E&4194176)!==0)?i:o}function te(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function Ve(e,i){switch(e){case 1:case 2:case 4:case 8:return i+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function an(){var e=st;return st<<=1,(st&4194176)===0&&(st=128),e}function be(){var e=_t;return _t<<=1,(_t&62914560)===0&&(_t=4194304),e}function Dn(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function Un(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function dl(e,i,s,o,u,d){var E=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var R=e.entanglements,P=e.expirationTimes,V=e.hiddenUpdates;for(s=E&~s;0<s;){var ut=31-jt(s),vt=1<<ut;R[ut]=0,P[ut]=-1;var nt=V[ut];if(nt!==null)for(V[ut]=null,ut=0;ut<nt.length;ut++){var ot=nt[ut];ot!==null&&(ot.lane&=-536870913)}s&=~vt}o!==0&&qs(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(E&~i))}function qs(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var o=31-jt(i);e.entangledLanes|=i,e.entanglements[o]=e.entanglements[o]|1073741824|s&4194218}function Ti(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var o=31-jt(s),u=1<<o;u&i|e[o]&i&&(e[o]|=i),s&=~u}}function Pr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function js(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:M_(e.type))}function pl(e,i){var s=Y.p;try{return Y.p=e,i()}finally{Y.p=s}}var Wn=Math.random().toString(36).slice(2),rn="__reactFiber$"+Wn,sn="__reactProps$"+Wn,zi="__reactContainer$"+Wn,Ir="__reactEvents$"+Wn,du="__reactListeners$"+Wn,pu="__reactHandles$"+Wn,ml="__reactResources$"+Wn,Ka="__reactMarker$"+Wn;function Zs(e){delete e[rn],delete e[sn],delete e[Ir],delete e[du],delete e[pu]}function Fi(e){var i=e[rn];if(i)return i;for(var s=e.parentNode;s;){if(i=s[zi]||s[rn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=l_(e);e!==null;){if(s=e[rn])return s;e=l_(e)}return i}e=s,s=e.parentNode}return null}function C(e){if(e=e[rn]||e[zi]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function X(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(r(33))}function tt(e){var i=e[ml];return i||(i=e[ml]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Q(e){e[Ka]=!0}var j=new Set,Et={};function At(e,i){Pt(e,i),Pt(e+"Capture",i)}function Pt(e,i){for(Et[e]=i,e=0;e<i.length;e++)j.add(i[e])}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ee=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ne={},qt={};function ve(e){return Ue.call(qt,e)?!0:Ue.call(ne,e)?!1:ee.test(e)?qt[e]=!0:(ne[e]=!0,!1)}function ye(e,i,s){if(ve(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function Ge(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function Ae(e,i,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+o)}}function ie(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zt(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function on(e){var i=Zt(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),o=""+e[i];if(!e.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,d=s.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return u.call(this)},set:function(E){o=""+E,d.call(this,E)}}),Object.defineProperty(e,i,{enumerable:s.enumerable}),{getValue:function(){return o},setValue:function(E){o=""+E},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function xe(e){e._valueTracker||(e._valueTracker=on(e))}function Bn(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),o="";return e&&(o=Zt(e)?e.checked?"true":"false":e.value),e=o,e!==s?(i.setValue(e),!0):!1}function hi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ln=/[\n"\\]/g;function dn(e){return e.replace(Ln,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Ne(e,i,s,o,u,d,E,R){e.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.type=E:e.removeAttribute("type"),i!=null?E==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+ie(i)):e.value!==""+ie(i)&&(e.value=""+ie(i)):E!=="submit"&&E!=="reset"||e.removeAttribute("value"),i!=null?Tn(e,E,ie(i)):s!=null?Tn(e,E,ie(s)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+ie(R):e.removeAttribute("name")}function Nn(e,i,s,o,u,d,E,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;s=s!=null?""+ie(s):"",i=i!=null?""+ie(i):s,R||i===e.value||(e.value=i),e.defaultValue=i}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(e.name=E)}function Tn(e,i,s){i==="number"&&hi(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function qe(e,i,s,o){if(e=e.options,i){i={};for(var u=0;u<s.length;u++)i["$"+s[u]]=!0;for(s=0;s<e.length;s++)u=i.hasOwnProperty("$"+e[s].value),e[s].selected!==u&&(e[s].selected=u),u&&o&&(e[s].defaultSelected=!0)}else{for(s=""+ie(s),i=null,u=0;u<e.length;u++){if(e[u].value===s){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}i!==null||e[u].disabled||(i=e[u])}i!==null&&(i.selected=!0)}}function yn(e,i,s){if(i!=null&&(i=""+ie(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+ie(s):""}function Br(e,i,s,o){if(i==null){if(o!=null){if(s!=null)throw Error(r(92));if(Rt(o)){if(1<o.length)throw Error(r(93));o=o[0]}s=o}s==null&&(s=""),i=s}s=ie(i),e.defaultValue=s,o=e.textContent,o===s&&o!==""&&o!==null&&(e.value=o)}function zn(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var py=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function hp(e,i,s){var o=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":o?e.setProperty(i,s):typeof s!="number"||s===0||py.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function dp(e,i,s){if(i!=null&&typeof i!="object")throw Error(r(62));if(e=e.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in i)o=i[u],i.hasOwnProperty(u)&&s[u]!==o&&hp(e,u,o)}else for(var d in i)i.hasOwnProperty(d)&&hp(e,d,i[d])}function mu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var my=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),gy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gl(e){return gy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var gu=null;function _u(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zr=null,Fr=null;function pp(e){var i=C(e);if(i&&(e=i.stateNode)){var s=e[sn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Ne(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+dn(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var o=s[i];if(o!==e&&o.form===e.form){var u=o[sn]||null;if(!u)throw Error(r(90));Ne(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<s.length;i++)o=s[i],o.form===e.form&&Bn(o)}break t;case"textarea":yn(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&qe(e,!!s.multiple,i,!1)}}}var vu=!1;function mp(e,i,s){if(vu)return e(i,s);vu=!0;try{var o=e(i);return o}finally{if(vu=!1,(zr!==null||Fr!==null)&&(Jl(),zr&&(i=zr,e=Fr,Fr=zr=null,pp(i),e)))for(i=0;i<e.length;i++)pp(e[i])}}function Ks(e,i){var s=e.stateNode;if(s===null)return null;var o=s[sn]||null;if(o===null)return null;s=o[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(r(231,i,typeof s));return s}var yu=!1;if(Ot)try{var Qs={};Object.defineProperty(Qs,"passive",{get:function(){yu=!0}}),window.addEventListener("test",Qs,Qs),window.removeEventListener("test",Qs,Qs)}catch{yu=!1}var ma=null,xu=null,_l=null;function gp(){if(_l)return _l;var e,i=xu,s=i.length,o,u="value"in ma?ma.value:ma.textContent,d=u.length;for(e=0;e<s&&i[e]===u[e];e++);var E=s-e;for(o=1;o<=E&&i[s-o]===u[d-o];o++);return _l=u.slice(e,1<o?1-o:void 0)}function vl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function yl(){return!0}function _p(){return!1}function Fn(e){function i(s,o,u,d,E){this._reactName=s,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=E,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(s=e[R],this[R]=s?s(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?yl:_p,this.isPropagationStopped=_p,this}return A(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=yl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=yl)},persist:function(){},isPersistent:yl}),i}var Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xl=Fn(Qa),$s=A({},Qa,{view:0,detail:0}),_y=Fn($s),Su,Eu,Js,Sl=A({},$s,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Js&&(Js&&e.type==="mousemove"?(Su=e.screenX-Js.screenX,Eu=e.screenY-Js.screenY):Eu=Su=0,Js=e),Su)},movementY:function(e){return"movementY"in e?e.movementY:Eu}}),vp=Fn(Sl),vy=A({},Sl,{dataTransfer:0}),yy=Fn(vy),xy=A({},$s,{relatedTarget:0}),Mu=Fn(xy),Sy=A({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0}),Ey=Fn(Sy),My=A({},Qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ty=Fn(My),by=A({},Qa,{data:0}),yp=Fn(by),Ay={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ry={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wy(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Cy[e])?!!i[e]:!1}function Tu(){return wy}var Dy=A({},$s,{key:function(e){if(e.key){var i=Ay[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=vl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ry[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tu,charCode:function(e){return e.type==="keypress"?vl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Uy=Fn(Dy),Ly=A({},Sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xp=Fn(Ly),Ny=A({},$s,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tu}),Oy=Fn(Ny),Py=A({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Iy=Fn(Py),By=A({},Sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zy=Fn(By),Fy=A({},Qa,{newState:0,oldState:0}),Hy=Fn(Fy),Gy=[9,13,27,32],bu=Ot&&"CompositionEvent"in window,to=null;Ot&&"documentMode"in document&&(to=document.documentMode);var Vy=Ot&&"TextEvent"in window&&!to,Sp=Ot&&(!bu||to&&8<to&&11>=to),Ep=" ",Mp=!1;function Tp(e,i){switch(e){case"keyup":return Gy.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hr=!1;function ky(e,i){switch(e){case"compositionend":return bp(i);case"keypress":return i.which!==32?null:(Mp=!0,Ep);case"textInput":return e=i.data,e===Ep&&Mp?null:e;default:return null}}function Xy(e,i){if(Hr)return e==="compositionend"||!bu&&Tp(e,i)?(e=gp(),_l=xu=ma=null,Hr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Sp&&i.locale!=="ko"?null:i.data;default:return null}}var Wy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ap(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Wy[e.type]:i==="textarea"}function Rp(e,i,s,o){zr?Fr?Fr.push(o):Fr=[o]:zr=o,i=ac(i,"onChange"),0<i.length&&(s=new xl("onChange","change",null,s,o),e.push({event:s,listeners:i}))}var eo=null,no=null;function Yy(e){Jg(e,0)}function El(e){var i=X(e);if(Bn(i))return e}function Cp(e,i){if(e==="change")return i}var wp=!1;if(Ot){var Au;if(Ot){var Ru="oninput"in document;if(!Ru){var Dp=document.createElement("div");Dp.setAttribute("oninput","return;"),Ru=typeof Dp.oninput=="function"}Au=Ru}else Au=!1;wp=Au&&(!document.documentMode||9<document.documentMode)}function Up(){eo&&(eo.detachEvent("onpropertychange",Lp),no=eo=null)}function Lp(e){if(e.propertyName==="value"&&El(no)){var i=[];Rp(i,no,e,_u(e)),mp(Yy,i)}}function qy(e,i,s){e==="focusin"?(Up(),eo=i,no=s,eo.attachEvent("onpropertychange",Lp)):e==="focusout"&&Up()}function jy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return El(no)}function Zy(e,i){if(e==="click")return El(i)}function Ky(e,i){if(e==="input"||e==="change")return El(i)}function Qy(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var Yn=typeof Object.is=="function"?Object.is:Qy;function io(e,i){if(Yn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),o=Object.keys(i);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var u=s[o];if(!Ue.call(i,u)||!Yn(e[u],i[u]))return!1}return!0}function Np(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Op(e,i){var s=Np(e);e=0;for(var o;s;){if(s.nodeType===3){if(o=e+s.textContent.length,e<=i&&o>=i)return{node:s,offset:i-e};e=o}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=Np(s)}}function Pp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Pp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Ip(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=hi(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=hi(e.document)}return i}function Cu(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}function $y(e,i){var s=Ip(i);i=e.focusedElem;var o=e.selectionRange;if(s!==i&&i&&i.ownerDocument&&Pp(i.ownerDocument.documentElement,i)){if(o!==null&&Cu(i)){if(e=o.start,s=o.end,s===void 0&&(s=e),"selectionStart"in i)i.selectionStart=e,i.selectionEnd=Math.min(s,i.value.length);else if(s=(e=i.ownerDocument||document)&&e.defaultView||window,s.getSelection){s=s.getSelection();var u=i.textContent.length,d=Math.min(o.start,u);o=o.end===void 0?d:Math.min(o.end,u),!s.extend&&d>o&&(u=o,o=d,d=u),u=Op(i,d);var E=Op(i,o);u&&E&&(s.rangeCount!==1||s.anchorNode!==u.node||s.anchorOffset!==u.offset||s.focusNode!==E.node||s.focusOffset!==E.offset)&&(e=e.createRange(),e.setStart(u.node,u.offset),s.removeAllRanges(),d>o?(s.addRange(e),s.extend(E.node,E.offset)):(e.setEnd(E.node,E.offset),s.addRange(e)))}}for(e=[],s=i;s=s.parentNode;)s.nodeType===1&&e.push({element:s,left:s.scrollLeft,top:s.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<e.length;i++)s=e[i],s.element.scrollLeft=s.left,s.element.scrollTop=s.top}}var Jy=Ot&&"documentMode"in document&&11>=document.documentMode,Gr=null,wu=null,ao=null,Du=!1;function Bp(e,i,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Du||Gr==null||Gr!==hi(o)||(o=Gr,"selectionStart"in o&&Cu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ao&&io(ao,o)||(ao=o,o=ac(wu,"onSelect"),0<o.length&&(i=new xl("onSelect","select",null,i,s),e.push({event:i,listeners:o}),i.target=Gr)))}function $a(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var Vr={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionrun:$a("Transition","TransitionRun"),transitionstart:$a("Transition","TransitionStart"),transitioncancel:$a("Transition","TransitionCancel"),transitionend:$a("Transition","TransitionEnd")},Uu={},zp={};Ot&&(zp=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function Ja(e){if(Uu[e])return Uu[e];if(!Vr[e])return e;var i=Vr[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in zp)return Uu[e]=i[s];return e}var Fp=Ja("animationend"),Hp=Ja("animationiteration"),Gp=Ja("animationstart"),tx=Ja("transitionrun"),ex=Ja("transitionstart"),nx=Ja("transitioncancel"),Vp=Ja("transitionend"),kp=new Map,Xp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function di(e,i){kp.set(e,i),At(i,[e])}var Jn=[],kr=0,Lu=0;function Ml(){for(var e=kr,i=Lu=kr=0;i<e;){var s=Jn[i];Jn[i++]=null;var o=Jn[i];Jn[i++]=null;var u=Jn[i];Jn[i++]=null;var d=Jn[i];if(Jn[i++]=null,o!==null&&u!==null){var E=o.pending;E===null?u.next=u:(u.next=E.next,E.next=u),o.pending=u}d!==0&&Wp(s,u,d)}}function Tl(e,i,s,o){Jn[kr++]=e,Jn[kr++]=i,Jn[kr++]=s,Jn[kr++]=o,Lu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Nu(e,i,s,o){return Tl(e,i,s,o),bl(e)}function ga(e,i){return Tl(e,null,null,i),bl(e)}function Wp(e,i,s){e.lanes|=s;var o=e.alternate;o!==null&&(o.lanes|=s);for(var u=!1,d=e.return;d!==null;)d.childLanes|=s,o=d.alternate,o!==null&&(o.childLanes|=s),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;u&&i!==null&&e.tag===3&&(d=e.stateNode,u=31-jt(s),d=d.hiddenUpdates,e=d[u],e===null?d[u]=[i]:e.push(i),i.lane=s|536870912)}function bl(e){if(50<Do)throw Do=0,Hf=null,Error(r(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Xr={},Yp=new WeakMap;function ti(e,i){if(typeof e=="object"&&e!==null){var s=Yp.get(e);return s!==void 0?s:(i={value:e,source:i,stack:rt(i)},Yp.set(e,i),i)}return{value:e,source:i,stack:rt(i)}}var Wr=[],Yr=0,Al=null,Rl=0,ei=[],ni=0,tr=null,Hi=1,Gi="";function er(e,i){Wr[Yr++]=Rl,Wr[Yr++]=Al,Al=e,Rl=i}function qp(e,i,s){ei[ni++]=Hi,ei[ni++]=Gi,ei[ni++]=tr,tr=e;var o=Hi;e=Gi;var u=32-jt(o)-1;o&=~(1<<u),s+=1;var d=32-jt(i)+u;if(30<d){var E=u-u%5;d=(o&(1<<E)-1).toString(32),o>>=E,u-=E,Hi=1<<32-jt(i)+u|s<<u|o,Gi=d+e}else Hi=1<<d|s<<u|o,Gi=e}function Ou(e){e.return!==null&&(er(e,1),qp(e,1,0))}function Pu(e){for(;e===Al;)Al=Wr[--Yr],Wr[Yr]=null,Rl=Wr[--Yr],Wr[Yr]=null;for(;e===tr;)tr=ei[--ni],ei[ni]=null,Gi=ei[--ni],ei[ni]=null,Hi=ei[--ni],ei[ni]=null}var On=null,xn=null,Re=!1,pi=null,bi=!1,Iu=Error(r(519));function nr(e){var i=Error(r(418,""));throw oo(ti(i,e)),Iu}function jp(e){var i=e.stateNode,s=e.type,o=e.memoizedProps;switch(i[rn]=e,i[sn]=o,s){case"dialog":Se("cancel",i),Se("close",i);break;case"iframe":case"object":case"embed":Se("load",i);break;case"video":case"audio":for(s=0;s<Lo.length;s++)Se(Lo[s],i);break;case"source":Se("error",i);break;case"img":case"image":case"link":Se("error",i),Se("load",i);break;case"details":Se("toggle",i);break;case"input":Se("invalid",i),Nn(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),xe(i);break;case"select":Se("invalid",i);break;case"textarea":Se("invalid",i),Br(i,o.value,o.defaultValue,o.children),xe(i)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||o.suppressHydrationWarning===!0||i_(i.textContent,s)?(o.popover!=null&&(Se("beforetoggle",i),Se("toggle",i)),o.onScroll!=null&&Se("scroll",i),o.onScrollEnd!=null&&Se("scrollend",i),o.onClick!=null&&(i.onclick=rc),i=!0):i=!1,i||nr(e)}function Zp(e){for(On=e.return;On;)switch(On.tag){case 3:case 27:bi=!0;return;case 5:case 13:bi=!1;return;default:On=On.return}}function ro(e){if(e!==On)return!1;if(!Re)return Zp(e),Re=!0,!1;var i=!1,s;if((s=e.tag!==3&&e.tag!==27)&&((s=e.tag===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||ih(e.type,e.memoizedProps)),s=!s),s&&(i=!0),i&&xn&&nr(e),Zp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(i===0){xn=gi(e.nextSibling);break t}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;e=e.nextSibling}xn=null}}else xn=On?gi(e.stateNode.nextSibling):null;return!0}function so(){xn=On=null,Re=!1}function oo(e){pi===null?pi=[e]:pi.push(e)}var lo=Error(r(460)),Kp=Error(r(474)),Bu={then:function(){}};function Qp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Cl(){}function $p(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(Cl,Cl),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,e===lo?Error(r(483)):e;default:if(typeof i.status=="string")i.then(Cl,Cl);else{if(e=Fe,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=i,e.status="pending",e.then(function(o){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=o}},function(o){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,e===lo?Error(r(483)):e}throw co=i,lo}}var co=null;function Jp(){if(co===null)throw Error(r(459));var e=co;return co=null,e}var qr=null,uo=0;function wl(e){var i=uo;return uo+=1,qr===null&&(qr=[]),$p(qr,e,i)}function fo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Dl(e,i){throw i.$$typeof===c?Error(r(525)):(e=Object.prototype.toString.call(i),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function tm(e){var i=e._init;return i(e._payload)}function em(e){function i(K,G){if(e){var $=K.deletions;$===null?(K.deletions=[G],K.flags|=16):$.push(G)}}function s(K,G){if(!e)return null;for(;G!==null;)i(K,G),G=G.sibling;return null}function o(K){for(var G=new Map;K!==null;)K.key!==null?G.set(K.key,K):G.set(K.index,K),K=K.sibling;return G}function u(K,G){return K=Ca(K,G),K.index=0,K.sibling=null,K}function d(K,G,$){return K.index=$,e?($=K.alternate,$!==null?($=$.index,$<G?(K.flags|=33554434,G):$):(K.flags|=33554434,G)):(K.flags|=1048576,G)}function E(K){return e&&K.alternate===null&&(K.flags|=33554434),K}function R(K,G,$,mt){return G===null||G.tag!==6?(G=Lf($,K.mode,mt),G.return=K,G):(G=u(G,$),G.return=K,G)}function P(K,G,$,mt){var Ht=$.type;return Ht===p?ut(K,G,$.props.children,mt,$.key):G!==null&&(G.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===L&&tm(Ht)===G.type)?(G=u(G,$.props),fo(G,$),G.return=K,G):(G=jl($.type,$.key,$.props,null,K.mode,mt),fo(G,$),G.return=K,G)}function V(K,G,$,mt){return G===null||G.tag!==4||G.stateNode.containerInfo!==$.containerInfo||G.stateNode.implementation!==$.implementation?(G=Nf($,K.mode,mt),G.return=K,G):(G=u(G,$.children||[]),G.return=K,G)}function ut(K,G,$,mt,Ht){return G===null||G.tag!==7?(G=hr($,K.mode,mt,Ht),G.return=K,G):(G=u(G,$),G.return=K,G)}function vt(K,G,$){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=Lf(""+G,K.mode,$),G.return=K,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case f:return $=jl(G.type,G.key,G.props,null,K.mode,$),fo($,G),$.return=K,$;case h:return G=Nf(G,K.mode,$),G.return=K,G;case L:var mt=G._init;return G=mt(G._payload),vt(K,G,$)}if(Rt(G)||B(G))return G=hr(G,K.mode,$,null),G.return=K,G;if(typeof G.then=="function")return vt(K,wl(G),$);if(G.$$typeof===x)return vt(K,Wl(K,G),$);Dl(K,G)}return null}function nt(K,G,$,mt){var Ht=G!==null?G.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Ht!==null?null:R(K,G,""+$,mt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case f:return $.key===Ht?P(K,G,$,mt):null;case h:return $.key===Ht?V(K,G,$,mt):null;case L:return Ht=$._init,$=Ht($._payload),nt(K,G,$,mt)}if(Rt($)||B($))return Ht!==null?null:ut(K,G,$,mt,null);if(typeof $.then=="function")return nt(K,G,wl($),mt);if($.$$typeof===x)return nt(K,G,Wl(K,$),mt);Dl(K,$)}return null}function ot(K,G,$,mt,Ht){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return K=K.get($)||null,R(G,K,""+mt,Ht);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case f:return K=K.get(mt.key===null?$:mt.key)||null,P(G,K,mt,Ht);case h:return K=K.get(mt.key===null?$:mt.key)||null,V(G,K,mt,Ht);case L:var pe=mt._init;return mt=pe(mt._payload),ot(K,G,$,mt,Ht)}if(Rt(mt)||B(mt))return K=K.get($)||null,ut(G,K,mt,Ht,null);if(typeof mt.then=="function")return ot(K,G,$,wl(mt),Ht);if(mt.$$typeof===x)return ot(K,G,$,Wl(G,mt),Ht);Dl(G,mt)}return null}function kt(K,G,$,mt){for(var Ht=null,pe=null,Yt=G,Jt=G=0,gn=null;Yt!==null&&Jt<$.length;Jt++){Yt.index>Jt?(gn=Yt,Yt=null):gn=Yt.sibling;var Ce=nt(K,Yt,$[Jt],mt);if(Ce===null){Yt===null&&(Yt=gn);break}e&&Yt&&Ce.alternate===null&&i(K,Yt),G=d(Ce,G,Jt),pe===null?Ht=Ce:pe.sibling=Ce,pe=Ce,Yt=gn}if(Jt===$.length)return s(K,Yt),Re&&er(K,Jt),Ht;if(Yt===null){for(;Jt<$.length;Jt++)Yt=vt(K,$[Jt],mt),Yt!==null&&(G=d(Yt,G,Jt),pe===null?Ht=Yt:pe.sibling=Yt,pe=Yt);return Re&&er(K,Jt),Ht}for(Yt=o(Yt);Jt<$.length;Jt++)gn=ot(Yt,K,Jt,$[Jt],mt),gn!==null&&(e&&gn.alternate!==null&&Yt.delete(gn.key===null?Jt:gn.key),G=d(gn,G,Jt),pe===null?Ht=gn:pe.sibling=gn,pe=gn);return e&&Yt.forEach(function(Pa){return i(K,Pa)}),Re&&er(K,Jt),Ht}function ae(K,G,$,mt){if($==null)throw Error(r(151));for(var Ht=null,pe=null,Yt=G,Jt=G=0,gn=null,Ce=$.next();Yt!==null&&!Ce.done;Jt++,Ce=$.next()){Yt.index>Jt?(gn=Yt,Yt=null):gn=Yt.sibling;var Pa=nt(K,Yt,Ce.value,mt);if(Pa===null){Yt===null&&(Yt=gn);break}e&&Yt&&Pa.alternate===null&&i(K,Yt),G=d(Pa,G,Jt),pe===null?Ht=Pa:pe.sibling=Pa,pe=Pa,Yt=gn}if(Ce.done)return s(K,Yt),Re&&er(K,Jt),Ht;if(Yt===null){for(;!Ce.done;Jt++,Ce=$.next())Ce=vt(K,Ce.value,mt),Ce!==null&&(G=d(Ce,G,Jt),pe===null?Ht=Ce:pe.sibling=Ce,pe=Ce);return Re&&er(K,Jt),Ht}for(Yt=o(Yt);!Ce.done;Jt++,Ce=$.next())Ce=ot(Yt,K,Jt,Ce.value,mt),Ce!==null&&(e&&Ce.alternate!==null&&Yt.delete(Ce.key===null?Jt:Ce.key),G=d(Ce,G,Jt),pe===null?Ht=Ce:pe.sibling=Ce,pe=Ce);return e&&Yt.forEach(function(gS){return i(K,gS)}),Re&&er(K,Jt),Ht}function Ke(K,G,$,mt){if(typeof $=="object"&&$!==null&&$.type===p&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case f:t:{for(var Ht=$.key;G!==null;){if(G.key===Ht){if(Ht=$.type,Ht===p){if(G.tag===7){s(K,G.sibling),mt=u(G,$.props.children),mt.return=K,K=mt;break t}}else if(G.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===L&&tm(Ht)===G.type){s(K,G.sibling),mt=u(G,$.props),fo(mt,$),mt.return=K,K=mt;break t}s(K,G);break}else i(K,G);G=G.sibling}$.type===p?(mt=hr($.props.children,K.mode,mt,$.key),mt.return=K,K=mt):(mt=jl($.type,$.key,$.props,null,K.mode,mt),fo(mt,$),mt.return=K,K=mt)}return E(K);case h:t:{for(Ht=$.key;G!==null;){if(G.key===Ht)if(G.tag===4&&G.stateNode.containerInfo===$.containerInfo&&G.stateNode.implementation===$.implementation){s(K,G.sibling),mt=u(G,$.children||[]),mt.return=K,K=mt;break t}else{s(K,G);break}else i(K,G);G=G.sibling}mt=Nf($,K.mode,mt),mt.return=K,K=mt}return E(K);case L:return Ht=$._init,$=Ht($._payload),Ke(K,G,$,mt)}if(Rt($))return kt(K,G,$,mt);if(B($)){if(Ht=B($),typeof Ht!="function")throw Error(r(150));return $=Ht.call($),ae(K,G,$,mt)}if(typeof $.then=="function")return Ke(K,G,wl($),mt);if($.$$typeof===x)return Ke(K,G,Wl(K,$),mt);Dl(K,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,G!==null&&G.tag===6?(s(K,G.sibling),mt=u(G,$),mt.return=K,K=mt):(s(K,G),mt=Lf($,K.mode,mt),mt.return=K,K=mt),E(K)):s(K,G)}return function(K,G,$,mt){try{uo=0;var Ht=Ke(K,G,$,mt);return qr=null,Ht}catch(Yt){if(Yt===lo)throw Yt;var pe=si(29,Yt,null,K.mode);return pe.lanes=mt,pe.return=K,pe}finally{}}}var ir=em(!0),nm=em(!1),jr=Ct(null),Ul=Ct(0);function im(e,i){e=$i,It(Ul,e),It(jr,i),$i=e|i.baseLanes}function zu(){It(Ul,$i),It(jr,jr.current)}function Fu(){$i=Ul.current,$t(jr),$t(Ul)}var ii=Ct(null),Ai=null;function _a(e){var i=e.alternate;It(ln,ln.current&1),It(ii,e),Ai===null&&(i===null||jr.current!==null||i.memoizedState!==null)&&(Ai=e)}function am(e){if(e.tag===22){if(It(ln,ln.current),It(ii,e),Ai===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(Ai=e)}}else va()}function va(){It(ln,ln.current),It(ii,ii.current)}function Vi(e){$t(ii),Ai===e&&(Ai=null),$t(ln)}var ln=Ct(0);function Ll(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ix=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,o){e.push(o)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},ax=a.unstable_scheduleCallback,rx=a.unstable_NormalPriority,cn={$$typeof:x,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hu(){return{controller:new ix,data:new Map,refCount:0}}function ho(e){e.refCount--,e.refCount===0&&ax(rx,function(){e.controller.abort()})}var po=null,Gu=0,Zr=0,Kr=null;function sx(e,i){if(po===null){var s=po=[];Gu=0,Zr=jf(),Kr={status:"pending",value:void 0,then:function(o){s.push(o)}}}return Gu++,i.then(rm,rm),i}function rm(){if(--Gu===0&&po!==null){Kr!==null&&(Kr.status="fulfilled");var e=po;po=null,Zr=0,Kr=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function ox(e,i){var s=[],o={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return e.then(function(){o.status="fulfilled",o.value=i;for(var u=0;u<s.length;u++)(0,s[u])(i)},function(u){for(o.status="rejected",o.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),o}var sm=w.S;w.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&sx(e,i),sm!==null&&sm(e,i)};var ar=Ct(null);function Vu(){var e=ar.current;return e!==null?e:Fe.pooledCache}function Nl(e,i){i===null?It(ar,ar.current):It(ar,i.pool)}function om(){var e=Vu();return e===null?null:{parent:cn._currentValue,pool:e}}var ya=0,he=null,Oe=null,Je=null,Ol=!1,Qr=!1,rr=!1,Pl=0,mo=0,$r=null,lx=0;function $e(){throw Error(r(321))}function ku(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!Yn(e[s],i[s]))return!1;return!0}function Xu(e,i,s,o,u,d){return ya=d,he=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,w.H=e===null||e.memoizedState===null?sr:xa,rr=!1,d=s(o,u),rr=!1,Qr&&(d=cm(i,s,o,u)),lm(e),d}function lm(e){w.H=Ri;var i=Oe!==null&&Oe.next!==null;if(ya=0,Je=Oe=he=null,Ol=!1,mo=0,$r=null,i)throw Error(r(300));e===null||pn||(e=e.dependencies,e!==null&&Xl(e)&&(pn=!0))}function cm(e,i,s,o){he=e;var u=0;do{if(Qr&&($r=null),mo=0,Qr=!1,25<=u)throw Error(r(301));if(u+=1,Je=Oe=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}w.H=or,d=i(s,o)}while(Qr);return d}function cx(){var e=w.H,i=e.useState()[0];return i=typeof i.then=="function"?go(i):i,e=e.useState()[0],(Oe!==null?Oe.memoizedState:null)!==e&&(he.flags|=1024),i}function Wu(){var e=Pl!==0;return Pl=0,e}function Yu(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function qu(e){if(Ol){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Ol=!1}ya=0,Je=Oe=he=null,Qr=!1,mo=Pl=0,$r=null}function Hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?he.memoizedState=Je=e:Je=Je.next=e,Je}function tn(){if(Oe===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var i=Je===null?he.memoizedState:Je.next;if(i!==null)Je=i,Oe=e;else{if(e===null)throw he.alternate===null?Error(r(467)):Error(r(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Je===null?he.memoizedState=Je=e:Je=Je.next=e}return Je}var Il;Il=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function go(e){var i=mo;return mo+=1,$r===null&&($r=[]),e=$p($r,e,i),i=he,(Je===null?i.memoizedState:Je.next)===null&&(i=i.alternate,w.H=i===null||i.memoizedState===null?sr:xa),e}function Bl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return go(e);if(e.$$typeof===x)return bn(e)}throw Error(r(438,String(e)))}function ju(e){var i=null,s=he.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var o=he.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Il(),he.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),o=0;o<e;o++)s[o]=D;return i.index++,s}function ki(e,i){return typeof i=="function"?i(e):i}function zl(e){var i=tn();return Zu(i,Oe,e)}function Zu(e,i,s){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=s;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var E=u.next;u.next=d.next,d.next=E}i.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{i=u.next;var R=E=null,P=null,V=i,ut=!1;do{var vt=V.lane&-536870913;if(vt!==V.lane?(Ee&vt)===vt:(ya&vt)===vt){var nt=V.revertLane;if(nt===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),vt===Zr&&(ut=!0);else if((ya&nt)===nt){V=V.next,nt===Zr&&(ut=!0);continue}else vt={lane:0,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},P===null?(R=P=vt,E=d):P=P.next=vt,he.lanes|=nt,wa|=nt;vt=V.action,rr&&s(d,vt),d=V.hasEagerState?V.eagerState:s(d,vt)}else nt={lane:vt,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},P===null?(R=P=nt,E=d):P=P.next=nt,he.lanes|=vt,wa|=vt;V=V.next}while(V!==null&&V!==i);if(P===null?E=d:P.next=R,!Yn(d,e.memoizedState)&&(pn=!0,ut&&(s=Kr,s!==null)))throw s;e.memoizedState=d,e.baseState=E,e.baseQueue=P,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Ku(e){var i=tn(),s=i.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=e;var o=s.dispatch,u=s.pending,d=i.memoizedState;if(u!==null){s.pending=null;var E=u=u.next;do d=e(d,E.action),E=E.next;while(E!==u);Yn(d,i.memoizedState)||(pn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),s.lastRenderedState=d}return[d,o]}function um(e,i,s){var o=he,u=tn(),d=Re;if(d){if(s===void 0)throw Error(r(407));s=s()}else s=i();var E=!Yn((Oe||u).memoizedState,s);if(E&&(u.memoizedState=s,pn=!0),u=u.queue,Ju(dm.bind(null,o,u,e),[e]),u.getSnapshot!==i||E||Je!==null&&Je.memoizedState.tag&1){if(o.flags|=2048,Jr(9,hm.bind(null,o,u,s,i),{destroy:void 0},null),Fe===null)throw Error(r(349));d||(ya&60)!==0||fm(o,i,s)}return s}function fm(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=he.updateQueue,i===null?(i=Il(),he.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function hm(e,i,s,o){i.value=s,i.getSnapshot=o,pm(i)&&mm(e)}function dm(e,i,s){return s(function(){pm(i)&&mm(e)})}function pm(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!Yn(e,s)}catch{return!0}}function mm(e){var i=ga(e,2);i!==null&&Pn(i,e,2)}function Qu(e){var i=Hn();if(typeof e=="function"){var s=e;if(e=s(),rr){se(!0);try{s()}finally{se(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:e},i}function gm(e,i,s,o){return e.baseState=s,Zu(e,Oe,typeof o=="function"?o:ki)}function ux(e,i,s,o,u){if(Gl(e))throw Error(r(485));if(e=i.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){d.listeners.push(E)}};w.T!==null?s(!0):d.isTransition=!1,o(d),s=i.pending,s===null?(d.next=i.pending=d,_m(i,d)):(d.next=s.next,i.pending=s.next=d)}}function _m(e,i){var s=i.action,o=i.payload,u=e.state;if(i.isTransition){var d=w.T,E={};w.T=E;try{var R=s(u,o),P=w.S;P!==null&&P(E,R),vm(e,i,R)}catch(V){$u(e,i,V)}finally{w.T=d}}else try{d=s(u,o),vm(e,i,d)}catch(V){$u(e,i,V)}}function vm(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){ym(e,i,o)},function(o){return $u(e,i,o)}):ym(e,i,s)}function ym(e,i,s){i.status="fulfilled",i.value=s,xm(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,_m(e,s)))}function $u(e,i,s){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=s,xm(i),i=i.next;while(i!==o)}e.action=null}function xm(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Sm(e,i){return i}function Em(e,i){if(Re){var s=Fe.formState;if(s!==null){t:{var o=he;if(Re){if(xn){e:{for(var u=xn,d=bi;u.nodeType!==8;){if(!d){u=null;break e}if(u=gi(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){xn=gi(u.nextSibling),o=u.data==="F!";break t}}nr(o)}o=!1}o&&(i=s[0])}}return s=Hn(),s.memoizedState=s.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sm,lastRenderedState:i},s.queue=o,s=Hm.bind(null,he,o),o.dispatch=s,o=Qu(!1),d=rf.bind(null,he,!1,o.queue),o=Hn(),u={state:i,dispatch:null,action:e,pending:null},o.queue=u,s=ux.bind(null,he,u,d,s),u.dispatch=s,o.memoizedState=e,[i,s,!1]}function Mm(e){var i=tn();return Tm(i,Oe,e)}function Tm(e,i,s){i=Zu(e,i,Sm)[0],e=zl(ki)[0],i=typeof i=="object"&&i!==null&&typeof i.then=="function"?go(i):i;var o=tn(),u=o.queue,d=u.dispatch;return s!==o.memoizedState&&(he.flags|=2048,Jr(9,fx.bind(null,u,s),{destroy:void 0},null)),[i,d,e]}function fx(e,i){e.action=i}function bm(e){var i=tn(),s=Oe;if(s!==null)return Tm(i,s,e);tn(),i=i.memoizedState,s=tn();var o=s.queue.dispatch;return s.memoizedState=e,[i,o,!1]}function Jr(e,i,s,o){return e={tag:e,create:i,inst:s,deps:o,next:null},i=he.updateQueue,i===null&&(i=Il(),he.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(o=s.next,s.next=e,e.next=o,i.lastEffect=e),e}function Am(){return tn().memoizedState}function Fl(e,i,s,o){var u=Hn();he.flags|=e,u.memoizedState=Jr(1|i,s,{destroy:void 0},o===void 0?null:o)}function Hl(e,i,s,o){var u=tn();o=o===void 0?null:o;var d=u.memoizedState.inst;Oe!==null&&o!==null&&ku(o,Oe.memoizedState.deps)?u.memoizedState=Jr(i,s,d,o):(he.flags|=e,u.memoizedState=Jr(1|i,s,d,o))}function Rm(e,i){Fl(8390656,8,e,i)}function Ju(e,i){Hl(2048,8,e,i)}function Cm(e,i){return Hl(4,2,e,i)}function wm(e,i){return Hl(4,4,e,i)}function Dm(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Um(e,i,s){s=s!=null?s.concat([e]):null,Hl(4,4,Dm.bind(null,i,e),s)}function tf(){}function Lm(e,i){var s=tn();i=i===void 0?null:i;var o=s.memoizedState;return i!==null&&ku(i,o[1])?o[0]:(s.memoizedState=[e,i],e)}function Nm(e,i){var s=tn();i=i===void 0?null:i;var o=s.memoizedState;if(i!==null&&ku(i,o[1]))return o[0];if(o=e(),rr){se(!0);try{e()}finally{se(!1)}}return s.memoizedState=[o,i],o}function ef(e,i,s){return s===void 0||(ya&1073741824)!==0?e.memoizedState=i:(e.memoizedState=s,e=Pg(),he.lanes|=e,wa|=e,s)}function Om(e,i,s,o){return Yn(s,i)?s:jr.current!==null?(e=ef(e,s,o),Yn(e,i)||(pn=!0),e):(ya&42)===0?(pn=!0,e.memoizedState=s):(e=Pg(),he.lanes|=e,wa|=e,i)}function Pm(e,i,s,o,u){var d=Y.p;Y.p=d!==0&&8>d?d:8;var E=w.T,R={};w.T=R,rf(e,!1,i,s);try{var P=u(),V=w.S;if(V!==null&&V(R,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ut=ox(P,o);_o(e,i,ut,Kn(e))}else _o(e,i,o,Kn(e))}catch(vt){_o(e,i,{then:function(){},status:"rejected",reason:vt},Kn())}finally{Y.p=d,w.T=E}}function hx(){}function nf(e,i,s,o){if(e.tag!==5)throw Error(r(476));var u=Im(e).queue;Pm(e,u,i,pt,s===null?hx:function(){return Bm(e),s(o)})}function Im(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:pt,baseState:pt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:pt},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Bm(e){var i=Im(e).next.queue;_o(e,i,{},Kn())}function af(){return bn(Bo)}function zm(){return tn().memoizedState}function Fm(){return tn().memoizedState}function dx(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=Kn();e=Ma(s);var o=Ta(i,e,s);o!==null&&(Pn(o,i,s),xo(o,i,s)),i={cache:Hu()},e.payload=i;return}i=i.return}}function px(e,i,s){var o=Kn();s={lane:o,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},Gl(e)?Gm(i,s):(s=Nu(e,i,s,o),s!==null&&(Pn(s,e,o),Vm(s,i,o)))}function Hm(e,i,s){var o=Kn();_o(e,i,s,o)}function _o(e,i,s,o){var u={lane:o,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(Gl(e))Gm(i,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var E=i.lastRenderedState,R=d(E,s);if(u.hasEagerState=!0,u.eagerState=R,Yn(R,E))return Tl(e,i,u,0),Fe===null&&Ml(),!1}catch{}finally{}if(s=Nu(e,i,u,o),s!==null)return Pn(s,e,o),Vm(s,i,o),!0}return!1}function rf(e,i,s,o){if(o={lane:2,revertLane:jf(),action:o,hasEagerState:!1,eagerState:null,next:null},Gl(e)){if(i)throw Error(r(479))}else i=Nu(e,s,o,2),i!==null&&Pn(i,e,2)}function Gl(e){var i=e.alternate;return e===he||i!==null&&i===he}function Gm(e,i){Qr=Ol=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function Vm(e,i,s){if((s&4194176)!==0){var o=i.lanes;o&=e.pendingLanes,s|=o,i.lanes=s,Ti(e,s)}}var Ri={readContext:bn,use:Bl,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e};Ri.useCacheRefresh=$e,Ri.useMemoCache=$e,Ri.useHostTransitionStatus=$e,Ri.useFormState=$e,Ri.useActionState=$e,Ri.useOptimistic=$e;var sr={readContext:bn,use:Bl,useCallback:function(e,i){return Hn().memoizedState=[e,i===void 0?null:i],e},useContext:bn,useEffect:Rm,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,Fl(4194308,4,Dm.bind(null,i,e),s)},useLayoutEffect:function(e,i){return Fl(4194308,4,e,i)},useInsertionEffect:function(e,i){Fl(4,2,e,i)},useMemo:function(e,i){var s=Hn();i=i===void 0?null:i;var o=e();if(rr){se(!0);try{e()}finally{se(!1)}}return s.memoizedState=[o,i],o},useReducer:function(e,i,s){var o=Hn();if(s!==void 0){var u=s(i);if(rr){se(!0);try{s(i)}finally{se(!1)}}}else u=i;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=px.bind(null,he,e),[o.memoizedState,e]},useRef:function(e){var i=Hn();return e={current:e},i.memoizedState=e},useState:function(e){e=Qu(e);var i=e.queue,s=Hm.bind(null,he,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:tf,useDeferredValue:function(e,i){var s=Hn();return ef(s,e,i)},useTransition:function(){var e=Qu(!1);return e=Pm.bind(null,he,e.queue,!0,!1),Hn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var o=he,u=Hn();if(Re){if(s===void 0)throw Error(r(407));s=s()}else{if(s=i(),Fe===null)throw Error(r(349));(Ee&60)!==0||fm(o,i,s)}u.memoizedState=s;var d={value:s,getSnapshot:i};return u.queue=d,Rm(dm.bind(null,o,d,e),[e]),o.flags|=2048,Jr(9,hm.bind(null,o,d,s,i),{destroy:void 0},null),s},useId:function(){var e=Hn(),i=Fe.identifierPrefix;if(Re){var s=Gi,o=Hi;s=(o&~(1<<32-jt(o)-1)).toString(32)+s,i=":"+i+"R"+s,s=Pl++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=lx++,i=":"+i+"r"+s.toString(32)+":";return e.memoizedState=i},useCacheRefresh:function(){return Hn().memoizedState=dx.bind(null,he)}};sr.useMemoCache=ju,sr.useHostTransitionStatus=af,sr.useFormState=Em,sr.useActionState=Em,sr.useOptimistic=function(e){var i=Hn();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=rf.bind(null,he,!0,s),s.dispatch=i,[e,i]};var xa={readContext:bn,use:Bl,useCallback:Lm,useContext:bn,useEffect:Ju,useImperativeHandle:Um,useInsertionEffect:Cm,useLayoutEffect:wm,useMemo:Nm,useReducer:zl,useRef:Am,useState:function(){return zl(ki)},useDebugValue:tf,useDeferredValue:function(e,i){var s=tn();return Om(s,Oe.memoizedState,e,i)},useTransition:function(){var e=zl(ki)[0],i=tn().memoizedState;return[typeof e=="boolean"?e:go(e),i]},useSyncExternalStore:um,useId:zm};xa.useCacheRefresh=Fm,xa.useMemoCache=ju,xa.useHostTransitionStatus=af,xa.useFormState=Mm,xa.useActionState=Mm,xa.useOptimistic=function(e,i){var s=tn();return gm(s,Oe,e,i)};var or={readContext:bn,use:Bl,useCallback:Lm,useContext:bn,useEffect:Ju,useImperativeHandle:Um,useInsertionEffect:Cm,useLayoutEffect:wm,useMemo:Nm,useReducer:Ku,useRef:Am,useState:function(){return Ku(ki)},useDebugValue:tf,useDeferredValue:function(e,i){var s=tn();return Oe===null?ef(s,e,i):Om(s,Oe.memoizedState,e,i)},useTransition:function(){var e=Ku(ki)[0],i=tn().memoizedState;return[typeof e=="boolean"?e:go(e),i]},useSyncExternalStore:um,useId:zm};or.useCacheRefresh=Fm,or.useMemoCache=ju,or.useHostTransitionStatus=af,or.useFormState=bm,or.useActionState=bm,or.useOptimistic=function(e,i){var s=tn();return Oe!==null?gm(s,Oe,e,i):(s.baseState=e,[e,s.queue.dispatch])};function sf(e,i,s,o){i=e.memoizedState,s=s(o,i),s=s==null?i:A({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var of={isMounted:function(e){return(e=e._reactInternals)?Z(e)===e:!1},enqueueSetState:function(e,i,s){e=e._reactInternals;var o=Kn(),u=Ma(o);u.payload=i,s!=null&&(u.callback=s),i=Ta(e,u,o),i!==null&&(Pn(i,e,o),xo(i,e,o))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var o=Kn(),u=Ma(o);u.tag=1,u.payload=i,s!=null&&(u.callback=s),i=Ta(e,u,o),i!==null&&(Pn(i,e,o),xo(i,e,o))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=Kn(),o=Ma(s);o.tag=2,i!=null&&(o.callback=i),i=Ta(e,o,s),i!==null&&(Pn(i,e,s),xo(i,e,s))}};function km(e,i,s,o,u,d,E){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,E):i.prototype&&i.prototype.isPureReactComponent?!io(s,o)||!io(u,d):!0}function Xm(e,i,s,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,o),i.state!==e&&of.enqueueReplaceState(i,i.state,null)}function lr(e,i){var s=i;if("ref"in i){s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}if(e=e.defaultProps){s===i&&(s=A({},s));for(var u in e)s[u]===void 0&&(s[u]=e[u])}return s}var Vl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Wm(e){Vl(e)}function Ym(e){console.error(e)}function qm(e){Vl(e)}function kl(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function jm(e,i,s){try{var o=e.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function lf(e,i,s){return s=Ma(s),s.tag=3,s.payload={element:null},s.callback=function(){kl(e,i)},s}function Zm(e){return e=Ma(e),e.tag=3,e}function Km(e,i,s,o){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){jm(i,s,o)}}var E=s.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(e.callback=function(){jm(i,s,o),typeof u!="function"&&(Da===null?Da=new Set([this]):Da.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function mx(e,i,s,o,u){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=s.alternate,i!==null&&yo(i,s,u,!0),s=ii.current,s!==null){switch(s.tag){case 13:return Ai===null?kf():s.alternate===null&&Ze===0&&(Ze=3),s.flags&=-257,s.flags|=65536,s.lanes=u,o===Bu?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([o]):i.add(o),Wf(e,o,u)),!1;case 22:return s.flags|=65536,o===Bu?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([o]):s.add(o)),Wf(e,o,u)),!1}throw Error(r(435,s.tag))}return Wf(e,o,u),kf(),!1}if(Re)return i=ii.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,o!==Iu&&(e=Error(r(422),{cause:o}),oo(ti(e,s)))):(o!==Iu&&(i=Error(r(423),{cause:o}),oo(ti(i,s))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ti(o,s),u=lf(e.stateNode,o,u),Mf(e,u),Ze!==4&&(Ze=2)),!1;var d=Error(r(520),{cause:o});if(d=ti(d,s),Co===null?Co=[d]:Co.push(d),Ze!==4&&(Ze=2),i===null)return!0;o=ti(o,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=u&-u,s.lanes|=e,e=lf(s.stateNode,o,e),Mf(s,e),!1;case 1:if(i=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Da===null||!Da.has(d))))return s.flags|=65536,u&=-u,s.lanes|=u,u=Zm(u),Km(u,e,s,o),Mf(s,u),!1}s=s.return}while(s!==null);return!1}var Qm=Error(r(461)),pn=!1;function Sn(e,i,s,o){i.child=e===null?nm(i,null,s,o):ir(i,e.child,s,o)}function $m(e,i,s,o,u){s=s.render;var d=i.ref;if("ref"in o){var E={};for(var R in o)R!=="ref"&&(E[R]=o[R])}else E=o;return ur(i),o=Xu(e,i,s,E,d,u),R=Wu(),e!==null&&!pn?(Yu(e,i,u),Xi(e,i,u)):(Re&&R&&Ou(i),i.flags|=1,Sn(e,i,o,u),i.child)}function Jm(e,i,s,o,u){if(e===null){var d=s.type;return typeof d=="function"&&!Uf(d)&&d.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=d,tg(e,i,d,o,u)):(e=jl(s.type,null,o,i,i.mode,u),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!_f(e,u)){var E=d.memoizedProps;if(s=s.compare,s=s!==null?s:io,s(E,o)&&e.ref===i.ref)return Xi(e,i,u)}return i.flags|=1,e=Ca(d,o),e.ref=i.ref,e.return=i,i.child=e}function tg(e,i,s,o,u){if(e!==null){var d=e.memoizedProps;if(io(d,o)&&e.ref===i.ref)if(pn=!1,i.pendingProps=o=d,_f(e,u))(e.flags&131072)!==0&&(pn=!0);else return i.lanes=e.lanes,Xi(e,i,u)}return cf(e,i,s,o,u)}function eg(e,i,s){var o=i.pendingProps,u=o.children,d=(i.stateNode._pendingVisibility&2)!==0,E=e!==null?e.memoizedState:null;if(vo(e,i),o.mode==="hidden"||d){if((i.flags&128)!==0){if(o=E!==null?E.baseLanes|s:s,e!==null){for(u=i.child=e.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;i.childLanes=d&~o}else i.childLanes=0,i.child=null;return ng(e,i,o,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Nl(i,E!==null?E.cachePool:null),E!==null?im(i,E):zu(),am(i);else return i.lanes=i.childLanes=536870912,ng(e,i,E!==null?E.baseLanes|s:s,s)}else E!==null?(Nl(i,E.cachePool),im(i,E),va(),i.memoizedState=null):(e!==null&&Nl(i,null),zu(),va());return Sn(e,i,u,s),i.child}function ng(e,i,s,o){var u=Vu();return u=u===null?null:{parent:cn._currentValue,pool:u},i.memoizedState={baseLanes:s,cachePool:u},e!==null&&Nl(i,null),zu(),am(i),e!==null&&yo(e,i,o,!0),null}function vo(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=2097664);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(e===null||e.ref!==s)&&(i.flags|=2097664)}}function cf(e,i,s,o,u){return ur(i),s=Xu(e,i,s,o,void 0,u),o=Wu(),e!==null&&!pn?(Yu(e,i,u),Xi(e,i,u)):(Re&&o&&Ou(i),i.flags|=1,Sn(e,i,s,u),i.child)}function ig(e,i,s,o,u,d){return ur(i),i.updateQueue=null,s=cm(i,o,s,u),lm(e),o=Wu(),e!==null&&!pn?(Yu(e,i,d),Xi(e,i,d)):(Re&&o&&Ou(i),i.flags|=1,Sn(e,i,s,d),i.child)}function ag(e,i,s,o,u){if(ur(i),i.stateNode===null){var d=Xr,E=s.contextType;typeof E=="object"&&E!==null&&(d=bn(E)),d=new s(o,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=of,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=o,d.state=i.memoizedState,d.refs={},Sf(i),E=s.contextType,d.context=typeof E=="object"&&E!==null?bn(E):Xr,d.state=i.memoizedState,E=s.getDerivedStateFromProps,typeof E=="function"&&(sf(i,s,E,o),d.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(E=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),E!==d.state&&of.enqueueReplaceState(d,d.state,null),Eo(i,o,d,u),So(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(e===null){d=i.stateNode;var R=i.memoizedProps,P=lr(s,R);d.props=P;var V=d.context,ut=s.contextType;E=Xr,typeof ut=="object"&&ut!==null&&(E=bn(ut));var vt=s.getDerivedStateFromProps;ut=typeof vt=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=i.pendingProps!==R,ut||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||V!==E)&&Xm(i,d,o,E),Ea=!1;var nt=i.memoizedState;d.state=nt,Eo(i,o,d,u),So(),V=i.memoizedState,R||nt!==V||Ea?(typeof vt=="function"&&(sf(i,s,vt,o),V=i.memoizedState),(P=Ea||km(i,s,P,o,nt,V,E))?(ut||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=V),d.props=o,d.state=V,d.context=E,o=P):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{d=i.stateNode,Ef(e,i),E=i.memoizedProps,ut=lr(s,E),d.props=ut,vt=i.pendingProps,nt=d.context,V=s.contextType,P=Xr,typeof V=="object"&&V!==null&&(P=bn(V)),R=s.getDerivedStateFromProps,(V=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E!==vt||nt!==P)&&Xm(i,d,o,P),Ea=!1,nt=i.memoizedState,d.state=nt,Eo(i,o,d,u),So();var ot=i.memoizedState;E!==vt||nt!==ot||Ea||e!==null&&e.dependencies!==null&&Xl(e.dependencies)?(typeof R=="function"&&(sf(i,s,R,o),ot=i.memoizedState),(ut=Ea||km(i,s,ut,o,nt,ot,P)||e!==null&&e.dependencies!==null&&Xl(e.dependencies))?(V||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ot,P),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ot,P)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||E===e.memoizedProps&&nt===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&nt===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=ot),d.props=o,d.state=ot,d.context=P,o=ut):(typeof d.componentDidUpdate!="function"||E===e.memoizedProps&&nt===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&nt===e.memoizedState||(i.flags|=1024),o=!1)}return d=o,vo(e,i),o=(i.flags&128)!==0,d||o?(d=i.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&o?(i.child=ir(i,e.child,null,u),i.child=ir(i,null,s,u)):Sn(e,i,s,u),i.memoizedState=d.state,e=i.child):e=Xi(e,i,u),e}function rg(e,i,s,o){return so(),i.flags|=256,Sn(e,i,s,o),i.child}var uf={dehydrated:null,treeContext:null,retryLane:0};function ff(e){return{baseLanes:e,cachePool:om()}}function hf(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=oi),e}function sg(e,i,s){var o=i.pendingProps,u=!1,d=(i.flags&128)!==0,E;if((E=d)||(E=e!==null&&e.memoizedState===null?!1:(ln.current&2)!==0),E&&(u=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,e===null){if(Re){if(u?_a(i):va(),Re){var R=xn,P;if(P=R){t:{for(P=R,R=bi;P.nodeType!==8;){if(!R){R=null;break t}if(P=gi(P.nextSibling),P===null){R=null;break t}}R=P}R!==null?(i.memoizedState={dehydrated:R,treeContext:tr!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912},P=si(18,null,null,0),P.stateNode=R,P.return=i,i.child=P,On=i,xn=null,P=!0):P=!1}P||nr(i)}if(R=i.memoizedState,R!==null&&(R=R.dehydrated,R!==null))return R.data==="$!"?i.lanes=16:i.lanes=536870912,null;Vi(i)}return R=o.children,o=o.fallback,u?(va(),u=i.mode,R=pf({mode:"hidden",children:R},u),o=hr(o,u,s,null),R.return=i,o.return=i,R.sibling=o,i.child=R,u=i.child,u.memoizedState=ff(s),u.childLanes=hf(e,E,s),i.memoizedState=uf,o):(_a(i),df(i,R))}if(P=e.memoizedState,P!==null&&(R=P.dehydrated,R!==null)){if(d)i.flags&256?(_a(i),i.flags&=-257,i=mf(e,i,s)):i.memoizedState!==null?(va(),i.child=e.child,i.flags|=128,i=null):(va(),u=o.fallback,R=i.mode,o=pf({mode:"visible",children:o.children},R),u=hr(u,R,s,null),u.flags|=2,o.return=i,u.return=i,o.sibling=u,i.child=o,ir(i,e.child,null,s),o=i.child,o.memoizedState=ff(s),o.childLanes=hf(e,E,s),i.memoizedState=uf,i=u);else if(_a(i),R.data==="$!"){if(E=R.nextSibling&&R.nextSibling.dataset,E)var V=E.dgst;E=V,o=Error(r(419)),o.stack="",o.digest=E,oo({value:o,source:null,stack:null}),i=mf(e,i,s)}else if(pn||yo(e,i,s,!1),E=(s&e.childLanes)!==0,pn||E){if(E=Fe,E!==null){if(o=s&-s,(o&42)!==0)o=1;else switch(o){case 2:o=1;break;case 8:o=4;break;case 32:o=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:o=64;break;case 268435456:o=134217728;break;default:o=0}if(o=(o&(E.suspendedLanes|s))!==0?0:o,o!==0&&o!==P.retryLane)throw P.retryLane=o,ga(e,o),Pn(E,e,o),Qm}R.data==="$?"||kf(),i=mf(e,i,s)}else R.data==="$?"?(i.flags|=128,i.child=e.child,i=Dx.bind(null,e),R._reactRetry=i,i=null):(e=P.treeContext,xn=gi(R.nextSibling),On=i,Re=!0,pi=null,bi=!1,e!==null&&(ei[ni++]=Hi,ei[ni++]=Gi,ei[ni++]=tr,Hi=e.id,Gi=e.overflow,tr=i),i=df(i,o.children),i.flags|=4096);return i}return u?(va(),u=o.fallback,R=i.mode,P=e.child,V=P.sibling,o=Ca(P,{mode:"hidden",children:o.children}),o.subtreeFlags=P.subtreeFlags&31457280,V!==null?u=Ca(V,u):(u=hr(u,R,s,null),u.flags|=2),u.return=i,o.return=i,o.sibling=u,i.child=o,o=u,u=i.child,R=e.child.memoizedState,R===null?R=ff(s):(P=R.cachePool,P!==null?(V=cn._currentValue,P=P.parent!==V?{parent:V,pool:V}:P):P=om(),R={baseLanes:R.baseLanes|s,cachePool:P}),u.memoizedState=R,u.childLanes=hf(e,E,s),i.memoizedState=uf,o):(_a(i),s=e.child,e=s.sibling,s=Ca(s,{mode:"visible",children:o.children}),s.return=i,s.sibling=null,e!==null&&(E=i.deletions,E===null?(i.deletions=[e],i.flags|=16):E.push(e)),i.child=s,i.memoizedState=null,s)}function df(e,i){return i=pf({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function pf(e,i){return Lg(e,i,0,null)}function mf(e,i,s){return ir(i,e.child,null,s),e=df(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function og(e,i,s){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),yf(e.return,i,s)}function gf(e,i,s,o,u){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:u}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=s,d.tailMode=u)}function lg(e,i,s){var o=i.pendingProps,u=o.revealOrder,d=o.tail;if(Sn(e,i,o.children,s),o=ln.current,(o&2)!==0)o=o&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&og(e,s,i);else if(e.tag===19)og(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(It(ln,o),u){case"forwards":for(s=i.child,u=null;s!==null;)e=s.alternate,e!==null&&Ll(e)===null&&(u=s),s=s.sibling;s=u,s===null?(u=i.child,i.child=null):(u=s.sibling,s.sibling=null),gf(i,!1,u,s,d);break;case"backwards":for(s=null,u=i.child,i.child=null;u!==null;){if(e=u.alternate,e!==null&&Ll(e)===null){i.child=u;break}e=u.sibling,u.sibling=s,s=u,u=e}gf(i,!0,s,null,d);break;case"together":gf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Xi(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),wa|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(yo(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(r(153));if(i.child!==null){for(e=i.child,s=Ca(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=Ca(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function _f(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Xl(e)))}function gx(e,i,s){switch(i.tag){case 3:vn(i,i.stateNode.containerInfo),Sa(i,cn,e.memoizedState.cache),so();break;case 27:case 5:de(i);break;case 4:vn(i,i.stateNode.containerInfo);break;case 10:Sa(i,i.type,i.memoizedProps.value);break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(_a(i),i.flags|=128,null):(s&i.child.childLanes)!==0?sg(e,i,s):(_a(i),e=Xi(e,i,s),e!==null?e.sibling:null);_a(i);break;case 19:var u=(e.flags&128)!==0;if(o=(s&i.childLanes)!==0,o||(yo(e,i,s,!1),o=(s&i.childLanes)!==0),u){if(o)return lg(e,i,s);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),It(ln,ln.current),o)break;return null;case 22:case 23:return i.lanes=0,eg(e,i,s);case 24:Sa(i,cn,e.memoizedState.cache)}return Xi(e,i,s)}function cg(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)pn=!0;else{if(!_f(e,s)&&(i.flags&128)===0)return pn=!1,gx(e,i,s);pn=(e.flags&131072)!==0}else pn=!1,Re&&(i.flags&1048576)!==0&&qp(i,Rl,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var o=i.elementType,u=o._init;if(o=u(o._payload),i.type=o,typeof o=="function")Uf(o)?(e=lr(o,e),i.tag=1,i=ag(null,i,o,e,s)):(i.tag=0,i=cf(null,i,o,e,s));else{if(o!=null){if(u=o.$$typeof,u===M){i.tag=11,i=$m(null,i,o,e,s);break t}else if(u===g){i.tag=14,i=Jm(null,i,o,e,s);break t}}throw i=q(o)||o,Error(r(306,i,""))}}return i;case 0:return cf(e,i,i.type,i.pendingProps,s);case 1:return o=i.type,u=lr(o,i.pendingProps),ag(e,i,o,u,s);case 3:t:{if(vn(i,i.stateNode.containerInfo),e===null)throw Error(r(387));var d=i.pendingProps;u=i.memoizedState,o=u.element,Ef(e,i),Eo(i,d,null,s);var E=i.memoizedState;if(d=E.cache,Sa(i,cn,d),d!==u.cache&&xf(i,[cn],s,!0),So(),d=E.element,u.isDehydrated)if(u={element:d,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=u,i.memoizedState=u,i.flags&256){i=rg(e,i,d,s);break t}else if(d!==o){o=ti(Error(r(424)),i),oo(o),i=rg(e,i,d,s);break t}else for(xn=gi(i.stateNode.containerInfo.firstChild),On=i,Re=!0,pi=null,bi=!0,s=nm(i,null,d,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(so(),d===o){i=Xi(e,i,s);break t}Sn(e,i,d,s)}i=i.child}return i;case 26:return vo(e,i),e===null?(s=h_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Re||(s=i.type,e=i.pendingProps,o=sc(re.current).createElement(s),o[rn]=i,o[sn]=e,En(o,s,e),Q(o),i.stateNode=o):i.memoizedState=h_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return de(i),e===null&&Re&&(o=i.stateNode=c_(i.type,i.pendingProps,re.current),On=i,bi=!0,xn=gi(o.firstChild)),o=i.pendingProps.children,e!==null||Re?Sn(e,i,o,s):i.child=ir(i,null,o,s),vo(e,i),i.child;case 5:return e===null&&Re&&((u=o=xn)&&(o=Yx(o,i.type,i.pendingProps,bi),o!==null?(i.stateNode=o,On=i,xn=gi(o.firstChild),bi=!1,u=!0):u=!1),u||nr(i)),de(i),u=i.type,d=i.pendingProps,E=e!==null?e.memoizedProps:null,o=d.children,ih(u,d)?o=null:E!==null&&ih(u,E)&&(i.flags|=32),i.memoizedState!==null&&(u=Xu(e,i,cx,null,null,s),Bo._currentValue=u),vo(e,i),Sn(e,i,o,s),i.child;case 6:return e===null&&Re&&((e=s=xn)&&(s=qx(s,i.pendingProps,bi),s!==null?(i.stateNode=s,On=i,xn=null,e=!0):e=!1),e||nr(i)),null;case 13:return sg(e,i,s);case 4:return vn(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=ir(i,null,o,s):Sn(e,i,o,s),i.child;case 11:return $m(e,i,i.type,i.pendingProps,s);case 7:return Sn(e,i,i.pendingProps,s),i.child;case 8:return Sn(e,i,i.pendingProps.children,s),i.child;case 12:return Sn(e,i,i.pendingProps.children,s),i.child;case 10:return o=i.pendingProps,Sa(i,i.type,o.value),Sn(e,i,o.children,s),i.child;case 9:return u=i.type._context,o=i.pendingProps.children,ur(i),u=bn(u),o=o(u),i.flags|=1,Sn(e,i,o,s),i.child;case 14:return Jm(e,i,i.type,i.pendingProps,s);case 15:return tg(e,i,i.type,i.pendingProps,s);case 19:return lg(e,i,s);case 22:return eg(e,i,s);case 24:return ur(i),o=bn(cn),e===null?(u=Vu(),u===null&&(u=Fe,d=Hu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=s),u=d),i.memoizedState={parent:o,cache:u},Sf(i),Sa(i,cn,u)):((e.lanes&s)!==0&&(Ef(e,i),Eo(i,null,null,s),So()),u=e.memoizedState,d=i.memoizedState,u.parent!==o?(u={parent:o,cache:o},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),Sa(i,cn,o)):(o=d.cache,Sa(i,cn,o),o!==u.cache&&xf(i,[cn],s,!0))),Sn(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}var vf=Ct(null),cr=null,Wi=null;function Sa(e,i,s){It(vf,i._currentValue),i._currentValue=s}function Yi(e){e._currentValue=vf.current,$t(vf)}function yf(e,i,s){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===s)break;e=e.return}}function xf(e,i,s,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var E=u.child;d=d.firstContext;t:for(;d!==null;){var R=d;d=u;for(var P=0;P<i.length;P++)if(R.context===i[P]){d.lanes|=s,R=d.alternate,R!==null&&(R.lanes|=s),yf(d.return,s,e),o||(E=null);break t}d=R.next}}else if(u.tag===18){if(E=u.return,E===null)throw Error(r(341));E.lanes|=s,d=E.alternate,d!==null&&(d.lanes|=s),yf(E,s,e),E=null}else E=u.child;if(E!==null)E.return=u;else for(E=u;E!==null;){if(E===e){E=null;break}if(u=E.sibling,u!==null){u.return=E.return,E=u;break}E=E.return}u=E}}function yo(e,i,s,o){e=null;for(var u=i,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var E=u.alternate;if(E===null)throw Error(r(387));if(E=E.memoizedProps,E!==null){var R=u.type;Yn(u.pendingProps.value,E.value)||(e!==null?e.push(R):e=[R])}}else if(u===F.current){if(E=u.alternate,E===null)throw Error(r(387));E.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Bo):e=[Bo])}u=u.return}e!==null&&xf(i,e,s,o),i.flags|=262144}function Xl(e){for(e=e.firstContext;e!==null;){if(!Yn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ur(e){cr=e,Wi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function bn(e){return ug(cr,e)}function Wl(e,i){return cr===null&&ur(e),ug(e,i)}function ug(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Wi===null){if(e===null)throw Error(r(308));Wi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Wi=Wi.next=i;return s}var Ea=!1;function Sf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ef(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ma(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ta(e,i,s){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Xe&2)!==0){var u=o.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),o.pending=i,i=bl(e),Wp(e,null,s),i}return Tl(e,o,i,s),bl(e)}function xo(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194176)!==0)){var o=i.lanes;o&=e.pendingLanes,s|=o,i.lanes=s,Ti(e,s)}}function Mf(e,i){var s=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var u=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var E={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?u=d=E:d=d.next=E,s=s.next}while(s!==null);d===null?u=d=i:d=d.next=i}else u=d=i;s={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var Tf=!1;function So(){if(Tf){var e=Kr;if(e!==null)throw e}}function Eo(e,i,s,o){Tf=!1;var u=e.updateQueue;Ea=!1;var d=u.firstBaseUpdate,E=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var P=R,V=P.next;P.next=null,E===null?d=V:E.next=V,E=P;var ut=e.alternate;ut!==null&&(ut=ut.updateQueue,R=ut.lastBaseUpdate,R!==E&&(R===null?ut.firstBaseUpdate=V:R.next=V,ut.lastBaseUpdate=P))}if(d!==null){var vt=u.baseState;E=0,ut=V=P=null,R=d;do{var nt=R.lane&-536870913,ot=nt!==R.lane;if(ot?(Ee&nt)===nt:(o&nt)===nt){nt!==0&&nt===Zr&&(Tf=!0),ut!==null&&(ut=ut.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var kt=e,ae=R;nt=i;var Ke=s;switch(ae.tag){case 1:if(kt=ae.payload,typeof kt=="function"){vt=kt.call(Ke,vt,nt);break t}vt=kt;break t;case 3:kt.flags=kt.flags&-65537|128;case 0:if(kt=ae.payload,nt=typeof kt=="function"?kt.call(Ke,vt,nt):kt,nt==null)break t;vt=A({},vt,nt);break t;case 2:Ea=!0}}nt=R.callback,nt!==null&&(e.flags|=64,ot&&(e.flags|=8192),ot=u.callbacks,ot===null?u.callbacks=[nt]:ot.push(nt))}else ot={lane:nt,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ut===null?(V=ut=ot,P=vt):ut=ut.next=ot,E|=nt;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ot=R,R=ot.next,ot.next=null,u.lastBaseUpdate=ot,u.shared.pending=null}}while(!0);ut===null&&(P=vt),u.baseState=P,u.firstBaseUpdate=V,u.lastBaseUpdate=ut,d===null&&(u.shared.lanes=0),wa|=E,e.lanes=E,e.memoizedState=vt}}function fg(e,i){if(typeof e!="function")throw Error(r(191,e));e.call(i)}function hg(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)fg(s[e],i)}function Mo(e,i){try{var s=i.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var u=o.next;s=u;do{if((s.tag&e)===e){o=void 0;var d=s.create,E=s.inst;o=d(),E.destroy=o}s=s.next}while(s!==u)}}catch(R){ze(i,i.return,R)}}function ba(e,i,s){try{var o=i.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var E=o.inst,R=E.destroy;if(R!==void 0){E.destroy=void 0,u=i;var P=s;try{R()}catch(V){ze(u,P,V)}}}o=o.next}while(o!==d)}}catch(V){ze(i,i.return,V)}}function dg(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{hg(i,s)}catch(o){ze(e,e.return,o)}}}function pg(e,i,s){s.props=lr(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(o){ze(e,i,o)}}function fr(e,i){try{var s=e.ref;if(s!==null){var o=e.stateNode;switch(e.tag){case 26:case 27:case 5:var u=o;break;default:u=o}typeof s=="function"?e.refCleanup=s(u):s.current=u}}catch(d){ze(e,i,d)}}function qn(e,i){var s=e.ref,o=e.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(u){ze(e,i,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){ze(e,i,u)}else s.current=null}function mg(e){var i=e.type,s=e.memoizedProps,o=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break t;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(u){ze(e,e.return,u)}}function gg(e,i,s){try{var o=e.stateNode;Gx(o,e.type,s,i),o[sn]=i}catch(u){ze(e,e.return,u)}}function _g(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function bf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||_g(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Af(e,i,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(e,i):s.insertBefore(e,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(e,s)):(i=s,i.appendChild(e)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=rc));else if(o!==4&&o!==27&&(e=e.child,e!==null))for(Af(e,i,s),e=e.sibling;e!==null;)Af(e,i,s),e=e.sibling}function Yl(e,i,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(o!==4&&o!==27&&(e=e.child,e!==null))for(Yl(e,i,s),e=e.sibling;e!==null;)Yl(e,i,s),e=e.sibling}var qi=!1,je=!1,Rf=!1,vg=typeof WeakSet=="function"?WeakSet:Set,mn=null,yg=!1;function _x(e,i){if(e=e.containerInfo,eh=hc,e=Ip(e),Cu(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break t}var E=0,R=-1,P=-1,V=0,ut=0,vt=e,nt=null;e:for(;;){for(var ot;vt!==s||u!==0&&vt.nodeType!==3||(R=E+u),vt!==d||o!==0&&vt.nodeType!==3||(P=E+o),vt.nodeType===3&&(E+=vt.nodeValue.length),(ot=vt.firstChild)!==null;)nt=vt,vt=ot;for(;;){if(vt===e)break e;if(nt===s&&++V===u&&(R=E),nt===d&&++ut===o&&(P=E),(ot=vt.nextSibling)!==null)break;vt=nt,nt=vt.parentNode}vt=ot}s=R===-1||P===-1?null:{start:R,end:P}}else s=null}s=s||{start:0,end:0}}else s=null;for(nh={focusedElem:e,selectionRange:s},hc=!1,mn=i;mn!==null;)if(i=mn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,mn=e;else for(;mn!==null;){switch(i=mn,d=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,s=i,u=d.memoizedProps,d=d.memoizedState,o=s.stateNode;try{var kt=lr(s.type,u,s.elementType===s.type);e=o.getSnapshotBeforeUpdate(kt,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(ae){ze(s,s.return,ae)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)sh(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":sh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=i.sibling,e!==null){e.return=i.return,mn=e;break}mn=i.return}return kt=yg,yg=!1,kt}function xg(e,i,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:Zi(e,s),o&4&&Mo(5,s);break;case 1:if(Zi(e,s),o&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(R){ze(s,s.return,R)}else{var u=lr(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(u,i,e.__reactInternalSnapshotBeforeUpdate)}catch(R){ze(s,s.return,R)}}o&64&&dg(s),o&512&&fr(s,s.return);break;case 3:if(Zi(e,s),o&64&&(o=s.updateQueue,o!==null)){if(e=null,s.child!==null)switch(s.child.tag){case 27:case 5:e=s.child.stateNode;break;case 1:e=s.child.stateNode}try{hg(o,e)}catch(R){ze(s,s.return,R)}}break;case 26:Zi(e,s),o&512&&fr(s,s.return);break;case 27:case 5:Zi(e,s),i===null&&o&4&&mg(s),o&512&&fr(s,s.return);break;case 12:Zi(e,s);break;case 13:Zi(e,s),o&4&&Mg(e,s);break;case 22:if(u=s.memoizedState!==null||qi,!u){i=i!==null&&i.memoizedState!==null||je;var d=qi,E=je;qi=u,(je=i)&&!E?Aa(e,s,(s.subtreeFlags&8772)!==0):Zi(e,s),qi=d,je=E}o&512&&(s.memoizedProps.mode==="manual"?fr(s,s.return):qn(s,s.return));break;default:Zi(e,s)}}function Sg(e){var i=e.alternate;i!==null&&(e.alternate=null,Sg(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Zs(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var en=null,jn=!1;function ji(e,i,s){for(s=s.child;s!==null;)Eg(e,i,s),s=s.sibling}function Eg(e,i,s){if(Vt&&typeof Vt.onCommitFiberUnmount=="function")try{Vt.onCommitFiberUnmount(Qt,s)}catch{}switch(s.tag){case 26:je||qn(s,i),ji(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:je||qn(s,i);var o=en,u=jn;for(en=s.stateNode,ji(e,i,s),s=s.stateNode,i=s.attributes;i.length;)s.removeAttributeNode(i[0]);Zs(s),en=o,jn=u;break;case 5:je||qn(s,i);case 6:u=en;var d=jn;if(en=null,ji(e,i,s),en=u,jn=d,en!==null)if(jn)try{e=en,o=s.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)}catch(E){ze(s,i,E)}else try{en.removeChild(s.stateNode)}catch(E){ze(s,i,E)}break;case 18:en!==null&&(jn?(i=en,s=s.stateNode,i.nodeType===8?rh(i.parentNode,s):i.nodeType===1&&rh(i,s),Go(i)):rh(en,s.stateNode));break;case 4:o=en,u=jn,en=s.stateNode.containerInfo,jn=!0,ji(e,i,s),en=o,jn=u;break;case 0:case 11:case 14:case 15:je||ba(2,s,i),je||ba(4,s,i),ji(e,i,s);break;case 1:je||(qn(s,i),o=s.stateNode,typeof o.componentWillUnmount=="function"&&pg(s,i,o)),ji(e,i,s);break;case 21:ji(e,i,s);break;case 22:je||qn(s,i),je=(o=je)||s.memoizedState!==null,ji(e,i,s),je=o;break;default:ji(e,i,s)}}function Mg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Go(e)}catch(s){ze(i,i.return,s)}}function vx(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new vg),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new vg),i;default:throw Error(r(435,e.tag))}}function Cf(e,i){var s=vx(e);i.forEach(function(o){var u=Ux.bind(null,e,o);s.has(o)||(s.add(o),o.then(u,u))})}function ai(e,i){var s=i.deletions;if(s!==null)for(var o=0;o<s.length;o++){var u=s[o],d=e,E=i,R=E;t:for(;R!==null;){switch(R.tag){case 27:case 5:en=R.stateNode,jn=!1;break t;case 3:en=R.stateNode.containerInfo,jn=!0;break t;case 4:en=R.stateNode.containerInfo,jn=!0;break t}R=R.return}if(en===null)throw Error(r(160));Eg(d,E,u),en=null,jn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Tg(i,e),i=i.sibling}var mi=null;function Tg(e,i){var s=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ai(i,e),ri(e),o&4&&(ba(3,e,e.return),Mo(3,e),ba(5,e,e.return));break;case 1:ai(i,e),ri(e),o&512&&(je||s===null||qn(s,s.return)),o&64&&qi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var u=mi;if(ai(i,e),ri(e),o&512&&(je||s===null||qn(s,s.return)),o&4){var d=s!==null?s.memoizedState:null;if(o=e.memoizedState,s===null)if(o===null)if(e.stateNode===null){t:{o=e.type,s=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Ka]||d[rn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),En(d,o,s),d[rn]=e,Q(d),o=d;break t;case"link":var E=m_("link","href",u).get(o+(s.href||""));if(E){for(var R=0;R<E.length;R++)if(d=E[R],d.getAttribute("href")===(s.href==null?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){E.splice(R,1);break e}}d=u.createElement(o),En(d,o,s),u.head.appendChild(d);break;case"meta":if(E=m_("meta","content",u).get(o+(s.content||""))){for(R=0;R<E.length;R++)if(d=E[R],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){E.splice(R,1);break e}}d=u.createElement(o),En(d,o,s),u.head.appendChild(d);break;default:throw Error(r(468,o))}d[rn]=e,Q(d),o=d}e.stateNode=o}else g_(u,e.type,e.stateNode);else e.stateNode=p_(u,o,e.memoizedProps);else d!==o?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,o===null?g_(u,e.type,e.stateNode):p_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&gg(e,e.memoizedProps,s.memoizedProps)}break;case 27:if(o&4&&e.alternate===null){u=e.stateNode,d=e.memoizedProps;try{for(var P=u.firstChild;P;){var V=P.nextSibling,ut=P.nodeName;P[Ka]||ut==="HEAD"||ut==="BODY"||ut==="SCRIPT"||ut==="STYLE"||ut==="LINK"&&P.rel.toLowerCase()==="stylesheet"||u.removeChild(P),P=V}for(var vt=e.type,nt=u.attributes;nt.length;)u.removeAttributeNode(nt[0]);En(u,vt,d),u[rn]=e,u[sn]=d}catch(kt){ze(e,e.return,kt)}}case 5:if(ai(i,e),ri(e),o&512&&(je||s===null||qn(s,s.return)),e.flags&32){u=e.stateNode;try{zn(u,"")}catch(kt){ze(e,e.return,kt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,gg(e,u,s!==null?s.memoizedProps:u)),o&1024&&(Rf=!0);break;case 6:if(ai(i,e),ri(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,s=e.stateNode;try{s.nodeValue=o}catch(kt){ze(e,e.return,kt)}}break;case 3:if(cc=null,u=mi,mi=oc(i.containerInfo),ai(i,e),mi=u,ri(e),o&4&&s!==null&&s.memoizedState.isDehydrated)try{Go(i.containerInfo)}catch(kt){ze(e,e.return,kt)}Rf&&(Rf=!1,bg(e));break;case 4:o=mi,mi=oc(e.stateNode.containerInfo),ai(i,e),ri(e),mi=o;break;case 12:ai(i,e),ri(e);break;case 13:ai(i,e),ri(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Bf=ft()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Cf(e,o)));break;case 22:if(o&512&&(je||s===null||qn(s,s.return)),P=e.memoizedState!==null,V=s!==null&&s.memoizedState!==null,ut=qi,vt=je,qi=ut||P,je=vt||V,ai(i,e),je=vt,qi=ut,ri(e),i=e.stateNode,i._current=e,i._visibility&=-3,i._visibility|=i._pendingVisibility&2,o&8192&&(i._visibility=P?i._visibility&-2:i._visibility|1,P&&(i=qi||je,s===null||V||i||ts(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(s=null,i=e;;){if(i.tag===5||i.tag===26||i.tag===27){if(s===null){V=s=i;try{if(u=V.stateNode,P)d=u.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{E=V.stateNode,R=V.memoizedProps.style;var ot=R!=null&&R.hasOwnProperty("display")?R.display:null;E.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(kt){ze(V,V.return,kt)}}}else if(i.tag===6){if(s===null){V=i;try{V.stateNode.nodeValue=P?"":V.memoizedProps}catch(kt){ze(V,V.return,kt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=e.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,Cf(e,s))));break;case 19:ai(i,e),ri(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Cf(e,o)));break;case 21:break;default:ai(i,e),ri(e)}}function ri(e){var i=e.flags;if(i&2){try{if(e.tag!==27){t:{for(var s=e.return;s!==null;){if(_g(s)){var o=s;break t}s=s.return}throw Error(r(160))}switch(o.tag){case 27:var u=o.stateNode,d=bf(e);Yl(e,d,u);break;case 5:var E=o.stateNode;o.flags&32&&(zn(E,""),o.flags&=-33);var R=bf(e);Yl(e,R,E);break;case 3:case 4:var P=o.stateNode.containerInfo,V=bf(e);Af(e,V,P);break;default:throw Error(r(161))}}}catch(ut){ze(e,e.return,ut)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function bg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;bg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Zi(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)xg(e,i.alternate,i),i=i.sibling}function ts(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:ba(4,i,i.return),ts(i);break;case 1:qn(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&pg(i,i.return,s),ts(i);break;case 26:case 27:case 5:qn(i,i.return),ts(i);break;case 22:qn(i,i.return),i.memoizedState===null&&ts(i);break;default:ts(i)}e=e.sibling}}function Aa(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,u=e,d=i,E=d.flags;switch(d.tag){case 0:case 11:case 15:Aa(u,d,s),Mo(4,d);break;case 1:if(Aa(u,d,s),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(V){ze(o,o.return,V)}if(o=d,u=o.updateQueue,u!==null){var R=o.stateNode;try{var P=u.shared.hiddenCallbacks;if(P!==null)for(u.shared.hiddenCallbacks=null,u=0;u<P.length;u++)fg(P[u],R)}catch(V){ze(o,o.return,V)}}s&&E&64&&dg(d),fr(d,d.return);break;case 26:case 27:case 5:Aa(u,d,s),s&&o===null&&E&4&&mg(d),fr(d,d.return);break;case 12:Aa(u,d,s);break;case 13:Aa(u,d,s),s&&E&4&&Mg(u,d);break;case 22:d.memoizedState===null&&Aa(u,d,s),fr(d,d.return);break;default:Aa(u,d,s)}i=i.sibling}}function wf(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&ho(s))}function Df(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&ho(e))}function Ra(e,i,s,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Ag(e,i,s,o),i=i.sibling}function Ag(e,i,s,o){var u=i.flags;switch(i.tag){case 0:case 11:case 15:Ra(e,i,s,o),u&2048&&Mo(9,i);break;case 3:Ra(e,i,s,o),u&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&ho(e)));break;case 12:if(u&2048){Ra(e,i,s,o),e=i.stateNode;try{var d=i.memoizedProps,E=d.id,R=d.onPostCommit;typeof R=="function"&&R(E,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(P){ze(i,i.return,P)}}else Ra(e,i,s,o);break;case 23:break;case 22:d=i.stateNode,i.memoizedState!==null?d._visibility&4?Ra(e,i,s,o):To(e,i):d._visibility&4?Ra(e,i,s,o):(d._visibility|=4,es(e,i,s,o,(i.subtreeFlags&10256)!==0)),u&2048&&wf(i.alternate,i);break;case 24:Ra(e,i,s,o),u&2048&&Df(i.alternate,i);break;default:Ra(e,i,s,o)}}function es(e,i,s,o,u){for(u=u&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=e,E=i,R=s,P=o,V=E.flags;switch(E.tag){case 0:case 11:case 15:es(d,E,R,P,u),Mo(8,E);break;case 23:break;case 22:var ut=E.stateNode;E.memoizedState!==null?ut._visibility&4?es(d,E,R,P,u):To(d,E):(ut._visibility|=4,es(d,E,R,P,u)),u&&V&2048&&wf(E.alternate,E);break;case 24:es(d,E,R,P,u),u&&V&2048&&Df(E.alternate,E);break;default:es(d,E,R,P,u)}i=i.sibling}}function To(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,o=i,u=o.flags;switch(o.tag){case 22:To(s,o),u&2048&&wf(o.alternate,o);break;case 24:To(s,o),u&2048&&Df(o.alternate,o);break;default:To(s,o)}i=i.sibling}}var bo=8192;function ns(e){if(e.subtreeFlags&bo)for(e=e.child;e!==null;)Rg(e),e=e.sibling}function Rg(e){switch(e.tag){case 26:ns(e),e.flags&bo&&e.memoizedState!==null&&sS(mi,e.memoizedState,e.memoizedProps);break;case 5:ns(e);break;case 3:case 4:var i=mi;mi=oc(e.stateNode.containerInfo),ns(e),mi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=bo,bo=16777216,ns(e),bo=i):ns(e));break;default:ns(e)}}function Cg(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Ao(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];mn=o,Dg(o,e)}Cg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)wg(e),e=e.sibling}function wg(e){switch(e.tag){case 0:case 11:case 15:Ao(e),e.flags&2048&&ba(9,e,e.return);break;case 3:Ao(e);break;case 12:Ao(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&4&&(e.return===null||e.return.tag!==13)?(i._visibility&=-5,ql(e)):Ao(e);break;default:Ao(e)}}function ql(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];mn=o,Dg(o,e)}Cg(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:ba(8,i,i.return),ql(i);break;case 22:s=i.stateNode,s._visibility&4&&(s._visibility&=-5,ql(i));break;default:ql(i)}e=e.sibling}}function Dg(e,i){for(;mn!==null;){var s=mn;switch(s.tag){case 0:case 11:case 15:ba(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ho(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,mn=o;else t:for(s=e;mn!==null;){o=mn;var u=o.sibling,d=o.return;if(Sg(o),o===s){mn=null;break t}if(u!==null){u.return=d,mn=u;break t}mn=d}}}function yx(e,i,s,o){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(e,i,s,o){return new yx(e,i,s,o)}function Uf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ca(e,i){var s=e.alternate;return s===null?(s=si(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&31457280,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function Ug(e,i){e.flags&=31457282;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function jl(e,i,s,o,u,d){var E=0;if(o=e,typeof e=="function")Uf(e)&&(E=1);else if(typeof e=="string")E=aS(e,s,Te.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case p:return hr(s.children,u,d,i);case m:E=8,u|=24;break;case _:return e=si(12,s,i,u|2),e.elementType=_,e.lanes=d,e;case T:return e=si(13,s,i,u),e.elementType=T,e.lanes=d,e;case S:return e=si(19,s,i,u),e.elementType=S,e.lanes=d,e;case U:return Lg(s,u,d,i);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case y:case x:E=10;break t;case v:E=9;break t;case M:E=11;break t;case g:E=14;break t;case L:E=16,o=null;break t}E=29,s=Error(r(130,e===null?"null":typeof e,"")),o=null}return i=si(E,s,i,u),i.elementType=e,i.type=o,i.lanes=d,i}function hr(e,i,s,o){return e=si(7,e,o,i),e.lanes=s,e}function Lg(e,i,s,o){e=si(22,e,o,i),e.elementType=U,e.lanes=s;var u={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var d=u._current;if(d===null)throw Error(r(456));if((u._pendingVisibility&2)===0){var E=ga(d,2);E!==null&&(u._pendingVisibility|=2,Pn(E,d,2))}},attach:function(){var d=u._current;if(d===null)throw Error(r(456));if((u._pendingVisibility&2)!==0){var E=ga(d,2);E!==null&&(u._pendingVisibility&=-3,Pn(E,d,2))}}};return e.stateNode=u,e}function Lf(e,i,s){return e=si(6,e,null,i),e.lanes=s,e}function Nf(e,i,s){return i=si(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}function Ki(e){e.flags|=4}function Ng(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!__(i)){if(i=ii.current,i!==null&&((Ee&4194176)===Ee?Ai!==null:(Ee&62914560)!==Ee&&(Ee&536870912)===0||i!==Ai))throw co=Bu,Kp;e.flags|=8192}}function Zl(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?be():536870912,e.lanes|=i,as|=i)}function Ro(e,i){if(!Re)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function ke(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,o=0;if(i)for(var u=e.child;u!==null;)s|=u.lanes|u.childLanes,o|=u.subtreeFlags&31457280,o|=u.flags&31457280,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)s|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=s,i}function xx(e,i,s){var o=i.pendingProps;switch(Pu(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(i),null;case 1:return ke(i),null;case 3:return s=i.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),Yi(cn),oe(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(ro(i)?Ki(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,pi!==null&&(Gf(pi),pi=null))),ke(i),null;case 26:return s=i.memoizedState,e===null?(Ki(i),s!==null?(ke(i),Ng(i,s)):(ke(i),i.flags&=-16777217)):s?s!==e.memoizedState?(Ki(i),ke(i),Ng(i,s)):(ke(i),i.flags&=-16777217):(e.memoizedProps!==o&&Ki(i),ke(i),i.flags&=-16777217),null;case 27:Xt(i),s=re.current;var u=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==o&&Ki(i);else{if(!o){if(i.stateNode===null)throw Error(r(166));return ke(i),null}e=Te.current,ro(i)?jp(i):(e=c_(u,o,s),i.stateNode=e,Ki(i))}return ke(i),null;case 5:if(Xt(i),s=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&Ki(i);else{if(!o){if(i.stateNode===null)throw Error(r(166));return ke(i),null}if(e=Te.current,ro(i))jp(i);else{switch(u=sc(re.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(s,{is:o.is}):u.createElement(s)}}e[rn]=i,e[sn]=o;t:for(u=i.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===i)break t;for(;u.sibling===null;){if(u.return===null||u.return===i)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}i.stateNode=e;t:switch(En(e,s,o),s){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Ki(i)}}return ke(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==o&&Ki(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(r(166));if(e=re.current,ro(i)){if(e=i.stateNode,s=i.memoizedProps,o=null,u=On,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[rn]=i,e=!!(e.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||i_(e.nodeValue,s)),e||nr(i)}else e=sc(e).createTextNode(o),e[rn]=i,i.stateNode=e}return ke(i),null;case 13:if(o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=ro(i),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[rn]=i}else so(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ke(i),u=!1}else pi!==null&&(Gf(pi),pi=null),u=!0;if(!u)return i.flags&256?(Vi(i),i):(Vi(i),null)}if(Vi(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=o!==null,e=e!==null&&e.memoizedState!==null,s){o=i.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)}return s!==e&&s&&(i.child.flags|=8192),Zl(i,i.updateQueue),ke(i),null;case 4:return oe(),e===null&&$f(i.stateNode.containerInfo),ke(i),null;case 10:return Yi(i.type),ke(i),null;case 19:if($t(ln),u=i.memoizedState,u===null)return ke(i),null;if(o=(i.flags&128)!==0,d=u.rendering,d===null)if(o)Ro(u,!1);else{if(Ze!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=Ll(e),d!==null){for(i.flags|=128,Ro(u,!1),e=d.updateQueue,i.updateQueue=e,Zl(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)Ug(s,e),s=s.sibling;return It(ln,ln.current&1|2),i.child}e=e.sibling}u.tail!==null&&ft()>Kl&&(i.flags|=128,o=!0,Ro(u,!1),i.lanes=4194304)}else{if(!o)if(e=Ll(d),e!==null){if(i.flags|=128,o=!0,e=e.updateQueue,i.updateQueue=e,Zl(i,e),Ro(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!Re)return ke(i),null}else 2*ft()-u.renderingStartTime>Kl&&s!==536870912&&(i.flags|=128,o=!0,Ro(u,!1),i.lanes=4194304);u.isBackwards?(d.sibling=i.child,i.child=d):(e=u.last,e!==null?e.sibling=d:i.child=d,u.last=d)}return u.tail!==null?(i=u.tail,u.rendering=i,u.tail=i.sibling,u.renderingStartTime=ft(),i.sibling=null,e=ln.current,It(ln,o?e&1|2:e&1),i):(ke(i),null);case 22:case 23:return Vi(i),Fu(),o=i.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(s&536870912)!==0&&(i.flags&128)===0&&(ke(i),i.subtreeFlags&6&&(i.flags|=8192)):ke(i),s=i.updateQueue,s!==null&&Zl(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==s&&(i.flags|=2048),e!==null&&$t(ar),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Yi(cn),ke(i),null;case 25:return null}throw Error(r(156,i.tag))}function Sx(e,i){switch(Pu(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Yi(cn),oe(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Xt(i),null;case 13:if(Vi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(r(340));so()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return $t(ln),null;case 4:return oe(),null;case 10:return Yi(i.type),null;case 22:case 23:return Vi(i),Fu(),e!==null&&$t(ar),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Yi(cn),null;case 25:return null;default:return null}}function Og(e,i){switch(Pu(i),i.tag){case 3:Yi(cn),oe();break;case 26:case 27:case 5:Xt(i);break;case 4:oe();break;case 13:Vi(i);break;case 19:$t(ln);break;case 10:Yi(i.type);break;case 22:case 23:Vi(i),Fu(),e!==null&&$t(ar);break;case 24:Yi(cn)}}var Ex={getCacheForType:function(e){var i=bn(cn),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s}},Mx=typeof WeakMap=="function"?WeakMap:Map,Xe=0,Fe=null,me=null,Ee=0,He=0,Zn=null,Qi=!1,is=!1,Of=!1,$i=0,Ze=0,wa=0,dr=0,Pf=0,oi=0,as=0,Co=null,Ci=null,If=!1,Bf=0,Kl=1/0,Ql=null,Da=null,$l=!1,pr=null,wo=0,zf=0,Ff=null,Do=0,Hf=null;function Kn(){if((Xe&2)!==0&&Ee!==0)return Ee&-Ee;if(w.T!==null){var e=Zr;return e!==0?e:jf()}return js()}function Pg(){oi===0&&(oi=(Ee&536870912)===0||Re?an():536870912);var e=ii.current;return e!==null&&(e.flags|=32),oi}function Pn(e,i,s){(e===Fe&&He===2||e.cancelPendingCommit!==null)&&(rs(e,0),Ji(e,Ee,oi,!1)),Un(e,s),((Xe&2)===0||e!==Fe)&&(e===Fe&&((Xe&2)===0&&(dr|=s),Ze===4&&Ji(e,Ee,oi,!1)),wi(e))}function Ig(e,i,s){if((Xe&6)!==0)throw Error(r(327));var o=!s&&(i&60)===0&&(i&e.expiredLanes)===0||te(e,i),u=o?Ax(e,i):Xf(e,i,!0),d=o;do{if(u===0){is&&!o&&Ji(e,i,0,!1);break}else if(u===6)Ji(e,i,0,!Qi);else{if(s=e.current.alternate,d&&!Tx(s)){u=Xf(e,i,!1),d=!1;continue}if(u===2){if(d=i,e.errorRecoveryDisabledLanes&d)var E=0;else E=e.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;t:{var R=e;u=Co;var P=R.current.memoizedState.isDehydrated;if(P&&(rs(R,E).flags|=256),E=Xf(R,E,!1),E!==2){if(Of&&!P){R.errorRecoveryDisabledLanes|=d,dr|=d,u=4;break t}d=Ci,Ci=u,d!==null&&Gf(d)}u=E}if(d=!1,u!==2)continue}}if(u===1){rs(e,0),Ji(e,i,0,!0);break}t:{switch(o=e,u){case 0:case 1:throw Error(r(345));case 4:if((i&4194176)===i){Ji(o,i,oi,!Qi);break t}break;case 2:Ci=null;break;case 3:case 5:break;default:throw Error(r(329))}if(o.finishedWork=s,o.finishedLanes=i,(i&62914560)===i&&(d=Bf+300-ft(),10<d)){if(Ji(o,i,oi,!Qi),Ut(o,0)!==0)break t;o.timeoutHandle=s_(Bg.bind(null,o,s,Ci,Ql,If,i,oi,dr,as,Qi,2,-0,0),d);break t}Bg(o,s,Ci,Ql,If,i,oi,dr,as,Qi,0,-0,0)}}break}while(!0);wi(e)}function Gf(e){Ci===null?Ci=e:Ci.push.apply(Ci,e)}function Bg(e,i,s,o,u,d,E,R,P,V,ut,vt,nt){var ot=i.subtreeFlags;if((ot&8192||(ot&16785408)===16785408)&&(Io={stylesheets:null,count:0,unsuspend:rS},Rg(i),i=oS(),i!==null)){e.cancelPendingCommit=i(Xg.bind(null,e,s,o,u,E,R,P,1,vt,nt)),Ji(e,d,E,!V);return}Xg(e,s,o,u,E,R,P,ut,vt,nt)}function Tx(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var u=s[o],d=u.getSnapshot;u=u.value;try{if(!Yn(d(),u))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ji(e,i,s,o){i&=~Pf,i&=~dr,e.suspendedLanes|=i,e.pingedLanes&=~i,o&&(e.warmLanes|=i),o=e.expirationTimes;for(var u=i;0<u;){var d=31-jt(u),E=1<<d;o[d]=-1,u&=~E}s!==0&&qs(e,s,i)}function Jl(){return(Xe&6)===0?(Uo(0),!1):!0}function Vf(){if(me!==null){if(He===0)var e=me.return;else e=me,Wi=cr=null,qu(e),qr=null,uo=0,e=me;for(;e!==null;)Og(e.alternate,e),e=e.return;me=null}}function rs(e,i){e.finishedWork=null,e.finishedLanes=0;var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,kx(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Vf(),Fe=e,me=s=Ca(e.current,null),Ee=i,He=0,Zn=null,Qi=!1,is=te(e,i),Of=!1,as=oi=Pf=dr=wa=Ze=0,Ci=Co=null,If=!1,(i&8)!==0&&(i|=i&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=i;0<o;){var u=31-jt(o),d=1<<u;i|=e[u],o&=~d}return $i=i,Ml(),s}function zg(e,i){he=null,w.H=Ri,i===lo?(i=Jp(),He=3):i===Kp?(i=Jp(),He=4):He=i===Qm?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Zn=i,me===null&&(Ze=1,kl(e,ti(i,e.current)))}function Fg(){var e=w.H;return w.H=Ri,e===null?Ri:e}function Hg(){var e=w.A;return w.A=Ex,e}function kf(){Ze=4,Qi||(Ee&4194176)!==Ee&&ii.current!==null||(is=!0),(wa&134217727)===0&&(dr&134217727)===0||Fe===null||Ji(Fe,Ee,oi,!1)}function Xf(e,i,s){var o=Xe;Xe|=2;var u=Fg(),d=Hg();(Fe!==e||Ee!==i)&&(Ql=null,rs(e,i)),i=!1;var E=Ze;t:do try{if(He!==0&&me!==null){var R=me,P=Zn;switch(He){case 8:Vf(),E=6;break t;case 3:case 2:case 6:ii.current===null&&(i=!0);var V=He;if(He=0,Zn=null,ss(e,R,P,V),s&&is){E=0;break t}break;default:V=He,He=0,Zn=null,ss(e,R,P,V)}}bx(),E=Ze;break}catch(ut){zg(e,ut)}while(!0);return i&&e.shellSuspendCounter++,Wi=cr=null,Xe=o,w.H=u,w.A=d,me===null&&(Fe=null,Ee=0,Ml()),E}function bx(){for(;me!==null;)Gg(me)}function Ax(e,i){var s=Xe;Xe|=2;var o=Fg(),u=Hg();Fe!==e||Ee!==i?(Ql=null,Kl=ft()+500,rs(e,i)):is=te(e,i);t:do try{if(He!==0&&me!==null){i=me;var d=Zn;e:switch(He){case 1:He=0,Zn=null,ss(e,i,d,1);break;case 2:if(Qp(d)){He=0,Zn=null,Vg(i);break}i=function(){He===2&&Fe===e&&(He=7),wi(e)},d.then(i,i);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:Qp(d)?(He=0,Zn=null,Vg(i)):(He=0,Zn=null,ss(e,i,d,7));break;case 5:var E=null;switch(me.tag){case 26:E=me.memoizedState;case 5:case 27:var R=me;if(!E||__(E)){He=0,Zn=null;var P=R.sibling;if(P!==null)me=P;else{var V=R.return;V!==null?(me=V,tc(V)):me=null}break e}}He=0,Zn=null,ss(e,i,d,5);break;case 6:He=0,Zn=null,ss(e,i,d,6);break;case 8:Vf(),Ze=6;break t;default:throw Error(r(462))}}Rx();break}catch(ut){zg(e,ut)}while(!0);return Wi=cr=null,w.H=o,w.A=u,Xe=s,me!==null?0:(Fe=null,Ee=0,Ml(),Ze)}function Rx(){for(;me!==null&&!b();)Gg(me)}function Gg(e){var i=cg(e.alternate,e,$i);e.memoizedProps=e.pendingProps,i===null?tc(e):me=i}function Vg(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=ig(s,i,i.pendingProps,i.type,void 0,Ee);break;case 11:i=ig(s,i,i.pendingProps,i.type.render,i.ref,Ee);break;case 5:qu(i);default:Og(s,i),i=me=Ug(i,$i),i=cg(s,i,$i)}e.memoizedProps=e.pendingProps,i===null?tc(e):me=i}function ss(e,i,s,o){Wi=cr=null,qu(i),qr=null,uo=0;var u=i.return;try{if(mx(e,u,i,s,Ee)){Ze=1,kl(e,ti(s,e.current)),me=null;return}}catch(d){if(u!==null)throw me=u,d;Ze=1,kl(e,ti(s,e.current)),me=null;return}i.flags&32768?(Re||o===1?e=!0:is||(Ee&536870912)!==0?e=!1:(Qi=e=!0,(o===2||o===3||o===6)&&(o=ii.current,o!==null&&o.tag===13&&(o.flags|=16384))),kg(i,e)):tc(i)}function tc(e){var i=e;do{if((i.flags&32768)!==0){kg(i,Qi);return}e=i.return;var s=xx(i.alternate,i,$i);if(s!==null){me=s;return}if(i=i.sibling,i!==null){me=i;return}me=i=e}while(i!==null);Ze===0&&(Ze=5)}function kg(e,i){do{var s=Sx(e.alternate,e);if(s!==null){s.flags&=32767,me=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){me=e;return}me=e=s}while(e!==null);Ze=6,me=null}function Xg(e,i,s,o,u,d,E,R,P,V){var ut=w.T,vt=Y.p;try{Y.p=2,w.T=null,Cx(e,i,s,o,vt,u,d,E,R,P,V)}finally{w.T=ut,Y.p=vt}}function Cx(e,i,s,o,u,d,E,R){do os();while(pr!==null);if((Xe&6)!==0)throw Error(r(327));var P=e.finishedWork;if(o=e.finishedLanes,P===null)return null;if(e.finishedWork=null,e.finishedLanes=0,P===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var V=P.lanes|P.childLanes;if(V|=Lu,dl(e,o,V,d,E,R),e===Fe&&(me=Fe=null,Ee=0),(P.subtreeFlags&10256)===0&&(P.flags&10256)===0||$l||($l=!0,zf=V,Ff=s,Lx(Dt,function(){return os(),null})),s=(P.flags&15990)!==0,(P.subtreeFlags&15990)!==0||s?(s=w.T,w.T=null,d=Y.p,Y.p=2,E=Xe,Xe|=4,_x(e,P),Tg(P,e),$y(nh,e.containerInfo),hc=!!eh,nh=eh=null,e.current=P,xg(e,P.alternate,P),et(),Xe=E,Y.p=d,w.T=s):e.current=P,$l?($l=!1,pr=e,wo=o):Wg(e,V),V=e.pendingLanes,V===0&&(Da=null),Ft(P.stateNode),wi(e),i!==null)for(u=e.onRecoverableError,P=0;P<i.length;P++)V=i[P],u(V.value,{componentStack:V.stack});return(wo&3)!==0&&os(),V=e.pendingLanes,(o&4194218)!==0&&(V&42)!==0?e===Hf?Do++:(Do=0,Hf=e):Do=0,Uo(0),null}function Wg(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,ho(i)))}function os(){if(pr!==null){var e=pr,i=zf;zf=0;var s=Pr(wo),o=w.T,u=Y.p;try{if(Y.p=32>s?32:s,w.T=null,pr===null)var d=!1;else{s=Ff,Ff=null;var E=pr,R=wo;if(pr=null,wo=0,(Xe&6)!==0)throw Error(r(331));var P=Xe;if(Xe|=4,wg(E.current),Ag(E,E.current,R,s),Xe=P,Uo(0,!1),Vt&&typeof Vt.onPostCommitFiberRoot=="function")try{Vt.onPostCommitFiberRoot(Qt,E)}catch{}d=!0}return d}finally{Y.p=u,w.T=o,Wg(e,i)}}return!1}function Yg(e,i,s){i=ti(s,i),i=lf(e.stateNode,i,2),e=Ta(e,i,2),e!==null&&(Un(e,2),wi(e))}function ze(e,i,s){if(e.tag===3)Yg(e,e,s);else for(;i!==null;){if(i.tag===3){Yg(i,e,s);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Da===null||!Da.has(o))){e=ti(s,e),s=Zm(2),o=Ta(i,s,2),o!==null&&(Km(s,o,i,e),Un(o,2),wi(o));break}}i=i.return}}function Wf(e,i,s){var o=e.pingCache;if(o===null){o=e.pingCache=new Mx;var u=new Set;o.set(i,u)}else u=o.get(i),u===void 0&&(u=new Set,o.set(i,u));u.has(s)||(Of=!0,u.add(s),e=wx.bind(null,e,i,s),i.then(e,e))}function wx(e,i,s){var o=e.pingCache;o!==null&&o.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,Fe===e&&(Ee&s)===s&&(Ze===4||Ze===3&&(Ee&62914560)===Ee&&300>ft()-Bf?(Xe&2)===0&&rs(e,0):Pf|=s,as===Ee&&(as=0)),wi(e)}function qg(e,i){i===0&&(i=be()),e=ga(e,i),e!==null&&(Un(e,i),wi(e))}function Dx(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),qg(e,s)}function Ux(e,i){var s=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(s=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(i),qg(e,s)}function Lx(e,i){return Wt(e,i)}var ec=null,ls=null,Yf=!1,nc=!1,qf=!1,mr=0;function wi(e){e!==ls&&e.next===null&&(ls===null?ec=ls=e:ls=ls.next=e),nc=!0,Yf||(Yf=!0,Ox(Nx))}function Uo(e,i){if(!qf&&nc){qf=!0;do for(var s=!1,o=ec;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var E=o.suspendedLanes,R=o.pingedLanes;d=(1<<31-jt(42|e)+1)-1,d&=u&~(E&~R),d=d&201326677?d&201326677|1:d?d|2:0}d!==0&&(s=!0,Kg(o,d))}else d=Ee,d=Ut(o,o===Fe?d:0),(d&3)===0||te(o,d)||(s=!0,Kg(o,d));o=o.next}while(s);qf=!1}}function Nx(){nc=Yf=!1;var e=0;mr!==0&&(Vx()&&(e=mr),mr=0);for(var i=ft(),s=null,o=ec;o!==null;){var u=o.next,d=jg(o,i);d===0?(o.next=null,s===null?ec=u:s.next=u,u===null&&(ls=s)):(s=o,(e!==0||(d&3)!==0)&&(nc=!0)),o=u}Uo(e)}function jg(e,i){for(var s=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var E=31-jt(d),R=1<<E,P=u[E];P===-1?((R&s)===0||(R&o)!==0)&&(u[E]=Ve(R,i)):P<=i&&(e.expiredLanes|=R),d&=~R}if(i=Fe,s=Ee,s=Ut(e,e===i?s:0),o=e.callbackNode,s===0||e===i&&He===2||e.cancelPendingCommit!==null)return o!==null&&o!==null&&N(o),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||te(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(o!==null&&N(o),Pr(s)){case 2:case 8:s=Gt;break;case 32:s=Dt;break;case 268435456:s=_e;break;default:s=Dt}return o=Zg.bind(null,e),s=Wt(s,o),e.callbackPriority=i,e.callbackNode=s,i}return o!==null&&o!==null&&N(o),e.callbackPriority=2,e.callbackNode=null,2}function Zg(e,i){var s=e.callbackNode;if(os()&&e.callbackNode!==s)return null;var o=Ee;return o=Ut(e,e===Fe?o:0),o===0?null:(Ig(e,o,i),jg(e,ft()),e.callbackNode!=null&&e.callbackNode===s?Zg.bind(null,e):null)}function Kg(e,i){if(os())return null;Ig(e,i,!0)}function Ox(e){Xx(function(){(Xe&6)!==0?Wt(ht,e):e()})}function jf(){return mr===0&&(mr=an()),mr}function Qg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:gl(""+e)}function $g(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function Px(e,i,s,o,u){if(i==="submit"&&s&&s.stateNode===u){var d=Qg((u[sn]||null).action),E=o.submitter;E&&(i=(i=E[sn]||null)?Qg(i.formAction):E.getAttribute("formAction"),i!==null&&(d=i,E=null));var R=new xl("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(mr!==0){var P=E?$g(u,E):new FormData(u);nf(s,{pending:!0,data:P,method:u.method,action:d},null,P)}}else typeof d=="function"&&(R.preventDefault(),P=E?$g(u,E):new FormData(u),nf(s,{pending:!0,data:P,method:u.method,action:d},d,P))},currentTarget:u}]})}}for(var Zf=0;Zf<Xp.length;Zf++){var Kf=Xp[Zf],Ix=Kf.toLowerCase(),Bx=Kf[0].toUpperCase()+Kf.slice(1);di(Ix,"on"+Bx)}di(Fp,"onAnimationEnd"),di(Hp,"onAnimationIteration"),di(Gp,"onAnimationStart"),di("dblclick","onDoubleClick"),di("focusin","onFocus"),di("focusout","onBlur"),di(tx,"onTransitionRun"),di(ex,"onTransitionStart"),di(nx,"onTransitionCancel"),di(Vp,"onTransitionEnd"),Pt("onMouseEnter",["mouseout","mouseover"]),Pt("onMouseLeave",["mouseout","mouseover"]),Pt("onPointerEnter",["pointerout","pointerover"]),Pt("onPointerLeave",["pointerout","pointerover"]),At("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),At("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),At("onBeforeInput",["compositionend","keypress","textInput","paste"]),At("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),At("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),At("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lo));function Jg(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var o=e[s],u=o.event;o=o.listeners;t:{var d=void 0;if(i)for(var E=o.length-1;0<=E;E--){var R=o[E],P=R.instance,V=R.currentTarget;if(R=R.listener,P!==d&&u.isPropagationStopped())break t;d=R,u.currentTarget=V;try{d(u)}catch(ut){Vl(ut)}u.currentTarget=null,d=P}else for(E=0;E<o.length;E++){if(R=o[E],P=R.instance,V=R.currentTarget,R=R.listener,P!==d&&u.isPropagationStopped())break t;d=R,u.currentTarget=V;try{d(u)}catch(ut){Vl(ut)}u.currentTarget=null,d=P}}}}function Se(e,i){var s=i[Ir];s===void 0&&(s=i[Ir]=new Set);var o=e+"__bubble";s.has(o)||(t_(i,e,2,!1),s.add(o))}function Qf(e,i,s){var o=0;i&&(o|=4),t_(s,e,o,i)}var ic="_reactListening"+Math.random().toString(36).slice(2);function $f(e){if(!e[ic]){e[ic]=!0,j.forEach(function(s){s!=="selectionchange"&&(zx.has(s)||Qf(s,!1,e),Qf(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[ic]||(i[ic]=!0,Qf("selectionchange",!1,i))}}function t_(e,i,s,o){switch(M_(i)){case 2:var u=uS;break;case 8:u=fS;break;default:u=fh}s=u.bind(null,i,s,e),u=void 0,!yu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(i,s,{capture:!0,passive:u}):e.addEventListener(i,s,!0):u!==void 0?e.addEventListener(i,s,{passive:u}):e.addEventListener(i,s,!1)}function Jf(e,i,s,o,u){var d=o;if((i&1)===0&&(i&2)===0&&o!==null)t:for(;;){if(o===null)return;var E=o.tag;if(E===3||E===4){var R=o.stateNode.containerInfo;if(R===u||R.nodeType===8&&R.parentNode===u)break;if(E===4)for(E=o.return;E!==null;){var P=E.tag;if((P===3||P===4)&&(P=E.stateNode.containerInfo,P===u||P.nodeType===8&&P.parentNode===u))return;E=E.return}for(;R!==null;){if(E=Fi(R),E===null)return;if(P=E.tag,P===5||P===6||P===26||P===27){o=d=E;continue t}R=R.parentNode}}o=o.return}mp(function(){var V=d,ut=_u(s),vt=[];t:{var nt=kp.get(e);if(nt!==void 0){var ot=xl,kt=e;switch(e){case"keypress":if(vl(s)===0)break t;case"keydown":case"keyup":ot=Uy;break;case"focusin":kt="focus",ot=Mu;break;case"focusout":kt="blur",ot=Mu;break;case"beforeblur":case"afterblur":ot=Mu;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=vp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=yy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=Oy;break;case Fp:case Hp:case Gp:ot=Ey;break;case Vp:ot=Iy;break;case"scroll":case"scrollend":ot=_y;break;case"wheel":ot=zy;break;case"copy":case"cut":case"paste":ot=Ty;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=xp;break;case"toggle":case"beforetoggle":ot=Hy}var ae=(i&4)!==0,Ke=!ae&&(e==="scroll"||e==="scrollend"),K=ae?nt!==null?nt+"Capture":null:nt;ae=[];for(var G=V,$;G!==null;){var mt=G;if($=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||$===null||K===null||(mt=Ks(G,K),mt!=null&&ae.push(No(G,mt,$))),Ke)break;G=G.return}0<ae.length&&(nt=new ot(nt,kt,null,s,ut),vt.push({event:nt,listeners:ae}))}}if((i&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",ot=e==="mouseout"||e==="pointerout",nt&&s!==gu&&(kt=s.relatedTarget||s.fromElement)&&(Fi(kt)||kt[zi]))break t;if((ot||nt)&&(nt=ut.window===ut?ut:(nt=ut.ownerDocument)?nt.defaultView||nt.parentWindow:window,ot?(kt=s.relatedTarget||s.toElement,ot=V,kt=kt?Fi(kt):null,kt!==null&&(Ke=Z(kt),ae=kt.tag,kt!==Ke||ae!==5&&ae!==27&&ae!==6)&&(kt=null)):(ot=null,kt=V),ot!==kt)){if(ae=vp,mt="onMouseLeave",K="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(ae=xp,mt="onPointerLeave",K="onPointerEnter",G="pointer"),Ke=ot==null?nt:X(ot),$=kt==null?nt:X(kt),nt=new ae(mt,G+"leave",ot,s,ut),nt.target=Ke,nt.relatedTarget=$,mt=null,Fi(ut)===V&&(ae=new ae(K,G+"enter",kt,s,ut),ae.target=$,ae.relatedTarget=Ke,mt=ae),Ke=mt,ot&&kt)e:{for(ae=ot,K=kt,G=0,$=ae;$;$=cs($))G++;for($=0,mt=K;mt;mt=cs(mt))$++;for(;0<G-$;)ae=cs(ae),G--;for(;0<$-G;)K=cs(K),$--;for(;G--;){if(ae===K||K!==null&&ae===K.alternate)break e;ae=cs(ae),K=cs(K)}ae=null}else ae=null;ot!==null&&e_(vt,nt,ot,ae,!1),kt!==null&&Ke!==null&&e_(vt,Ke,kt,ae,!0)}}t:{if(nt=V?X(V):window,ot=nt.nodeName&&nt.nodeName.toLowerCase(),ot==="select"||ot==="input"&&nt.type==="file")var Ht=Cp;else if(Ap(nt))if(wp)Ht=Ky;else{Ht=jy;var pe=qy}else ot=nt.nodeName,!ot||ot.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?V&&mu(V.elementType)&&(Ht=Cp):Ht=Zy;if(Ht&&(Ht=Ht(e,V))){Rp(vt,Ht,s,ut);break t}pe&&pe(e,nt,V),e==="focusout"&&V&&nt.type==="number"&&V.memoizedProps.value!=null&&Tn(nt,"number",nt.value)}switch(pe=V?X(V):window,e){case"focusin":(Ap(pe)||pe.contentEditable==="true")&&(Gr=pe,wu=V,ao=null);break;case"focusout":ao=wu=Gr=null;break;case"mousedown":Du=!0;break;case"contextmenu":case"mouseup":case"dragend":Du=!1,Bp(vt,s,ut);break;case"selectionchange":if(Jy)break;case"keydown":case"keyup":Bp(vt,s,ut)}var Yt;if(bu)t:{switch(e){case"compositionstart":var Jt="onCompositionStart";break t;case"compositionend":Jt="onCompositionEnd";break t;case"compositionupdate":Jt="onCompositionUpdate";break t}Jt=void 0}else Hr?Tp(e,s)&&(Jt="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(Jt="onCompositionStart");Jt&&(Sp&&s.locale!=="ko"&&(Hr||Jt!=="onCompositionStart"?Jt==="onCompositionEnd"&&Hr&&(Yt=gp()):(ma=ut,xu="value"in ma?ma.value:ma.textContent,Hr=!0)),pe=ac(V,Jt),0<pe.length&&(Jt=new yp(Jt,e,null,s,ut),vt.push({event:Jt,listeners:pe}),Yt?Jt.data=Yt:(Yt=bp(s),Yt!==null&&(Jt.data=Yt)))),(Yt=Vy?ky(e,s):Xy(e,s))&&(Jt=ac(V,"onBeforeInput"),0<Jt.length&&(pe=new yp("onBeforeInput","beforeinput",null,s,ut),vt.push({event:pe,listeners:Jt}),pe.data=Yt)),Px(vt,e,V,s,ut)}Jg(vt,i)})}function No(e,i,s){return{instance:e,listener:i,currentTarget:s}}function ac(e,i){for(var s=i+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Ks(e,s),u!=null&&o.unshift(No(e,u,d)),u=Ks(e,i),u!=null&&o.push(No(e,u,d))),e=e.return}return o}function cs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function e_(e,i,s,o,u){for(var d=i._reactName,E=[];s!==null&&s!==o;){var R=s,P=R.alternate,V=R.stateNode;if(R=R.tag,P!==null&&P===o)break;R!==5&&R!==26&&R!==27||V===null||(P=V,u?(V=Ks(s,d),V!=null&&E.unshift(No(s,V,P))):u||(V=Ks(s,d),V!=null&&E.push(No(s,V,P)))),s=s.return}E.length!==0&&e.push({event:i,listeners:E})}var Fx=/\r\n?/g,Hx=/\u0000|\uFFFD/g;function n_(e){return(typeof e=="string"?e:""+e).replace(Fx,`
`).replace(Hx,"")}function i_(e,i){return i=n_(i),n_(e)===i}function rc(){}function Pe(e,i,s,o,u,d){switch(s){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||zn(e,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&zn(e,""+o);break;case"className":Ge(e,"class",o);break;case"tabIndex":Ge(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ge(e,s,o);break;case"style":dp(e,o,d);break;case"data":if(i!=="object"){Ge(e,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=gl(""+o),e.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(i!=="input"&&Pe(e,i,"name",u.name,u,null),Pe(e,i,"formEncType",u.formEncType,u,null),Pe(e,i,"formMethod",u.formMethod,u,null),Pe(e,i,"formTarget",u.formTarget,u,null)):(Pe(e,i,"encType",u.encType,u,null),Pe(e,i,"method",u.method,u,null),Pe(e,i,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=gl(""+o),e.setAttribute(s,o);break;case"onClick":o!=null&&(e.onclick=rc);break;case"onScroll":o!=null&&Se("scroll",e);break;case"onScrollEnd":o!=null&&Se("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(s=o.__html,s!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=s}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}s=gl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""+o):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":o===!0?e.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,o):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(s,o):e.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(s):e.setAttribute(s,o);break;case"popover":Se("beforetoggle",e),Se("toggle",e),ye(e,"popover",o);break;case"xlinkActuate":Ae(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ae(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ae(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ae(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ae(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ae(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ae(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ae(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ae(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ye(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=my.get(s)||s,ye(e,s,o))}}function th(e,i,s,o,u,d){switch(s){case"style":dp(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(s=o.__html,s!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=s}}break;case"children":typeof o=="string"?zn(e,o):(typeof o=="number"||typeof o=="bigint")&&zn(e,""+o);break;case"onScroll":o!=null&&Se("scroll",e);break;case"onScrollEnd":o!=null&&Se("scrollend",e);break;case"onClick":o!=null&&(e.onclick=rc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Et.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),i=s.slice(2,u?s.length-7:void 0),d=e[sn]||null,d=d!=null?d[s]:null,typeof d=="function"&&e.removeEventListener(i,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,o,u);break t}s in e?e[s]=o:o===!0?e.setAttribute(s,""):ye(e,s,o)}}}function En(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",e),Se("load",e);var o=!1,u=!1,d;for(d in s)if(s.hasOwnProperty(d)){var E=s[d];if(E!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Pe(e,i,d,E,s,null)}}u&&Pe(e,i,"srcSet",s.srcSet,s,null),o&&Pe(e,i,"src",s.src,s,null);return;case"input":Se("invalid",e);var R=d=E=u=null,P=null,V=null;for(o in s)if(s.hasOwnProperty(o)){var ut=s[o];if(ut!=null)switch(o){case"name":u=ut;break;case"type":E=ut;break;case"checked":P=ut;break;case"defaultChecked":V=ut;break;case"value":d=ut;break;case"defaultValue":R=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,i));break;default:Pe(e,i,o,ut,s,null)}}Nn(e,d,R,P,V,E,u,!1),xe(e);return;case"select":Se("invalid",e),o=E=d=null;for(u in s)if(s.hasOwnProperty(u)&&(R=s[u],R!=null))switch(u){case"value":d=R;break;case"defaultValue":E=R;break;case"multiple":o=R;default:Pe(e,i,u,R,s,null)}i=d,s=E,e.multiple=!!o,i!=null?qe(e,!!o,i,!1):s!=null&&qe(e,!!o,s,!0);return;case"textarea":Se("invalid",e),d=u=o=null;for(E in s)if(s.hasOwnProperty(E)&&(R=s[E],R!=null))switch(E){case"value":o=R;break;case"defaultValue":u=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Pe(e,i,E,R,s,null)}Br(e,o,u,d),xe(e);return;case"option":for(P in s)if(s.hasOwnProperty(P)&&(o=s[P],o!=null))switch(P){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Pe(e,i,P,o,s,null)}return;case"dialog":Se("cancel",e),Se("close",e);break;case"iframe":case"object":Se("load",e);break;case"video":case"audio":for(o=0;o<Lo.length;o++)Se(Lo[o],e);break;case"image":Se("error",e),Se("load",e);break;case"details":Se("toggle",e);break;case"embed":case"source":case"link":Se("error",e),Se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(V in s)if(s.hasOwnProperty(V)&&(o=s[V],o!=null))switch(V){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Pe(e,i,V,o,s,null)}return;default:if(mu(i)){for(ut in s)s.hasOwnProperty(ut)&&(o=s[ut],o!==void 0&&th(e,i,ut,o,s,void 0));return}}for(R in s)s.hasOwnProperty(R)&&(o=s[R],o!=null&&Pe(e,i,R,o,s,null))}function Gx(e,i,s,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,E=null,R=null,P=null,V=null,ut=null;for(ot in s){var vt=s[ot];if(s.hasOwnProperty(ot)&&vt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":P=vt;default:o.hasOwnProperty(ot)||Pe(e,i,ot,null,o,vt)}}for(var nt in o){var ot=o[nt];if(vt=s[nt],o.hasOwnProperty(nt)&&(ot!=null||vt!=null))switch(nt){case"type":d=ot;break;case"name":u=ot;break;case"checked":V=ot;break;case"defaultChecked":ut=ot;break;case"value":E=ot;break;case"defaultValue":R=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,i));break;default:ot!==vt&&Pe(e,i,nt,ot,o,vt)}}Ne(e,E,R,P,V,ut,d,u);return;case"select":ot=E=R=nt=null;for(d in s)if(P=s[d],s.hasOwnProperty(d)&&P!=null)switch(d){case"value":break;case"multiple":ot=P;default:o.hasOwnProperty(d)||Pe(e,i,d,null,o,P)}for(u in o)if(d=o[u],P=s[u],o.hasOwnProperty(u)&&(d!=null||P!=null))switch(u){case"value":nt=d;break;case"defaultValue":R=d;break;case"multiple":E=d;default:d!==P&&Pe(e,i,u,d,o,P)}i=R,s=E,o=ot,nt!=null?qe(e,!!s,nt,!1):!!o!=!!s&&(i!=null?qe(e,!!s,i,!0):qe(e,!!s,s?[]:"",!1));return;case"textarea":ot=nt=null;for(R in s)if(u=s[R],s.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Pe(e,i,R,null,o,u)}for(E in o)if(u=o[E],d=s[E],o.hasOwnProperty(E)&&(u!=null||d!=null))switch(E){case"value":nt=u;break;case"defaultValue":ot=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&Pe(e,i,E,u,o,d)}yn(e,nt,ot);return;case"option":for(var kt in s)if(nt=s[kt],s.hasOwnProperty(kt)&&nt!=null&&!o.hasOwnProperty(kt))switch(kt){case"selected":e.selected=!1;break;default:Pe(e,i,kt,null,o,nt)}for(P in o)if(nt=o[P],ot=s[P],o.hasOwnProperty(P)&&nt!==ot&&(nt!=null||ot!=null))switch(P){case"selected":e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Pe(e,i,P,nt,o,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in s)nt=s[ae],s.hasOwnProperty(ae)&&nt!=null&&!o.hasOwnProperty(ae)&&Pe(e,i,ae,null,o,nt);for(V in o)if(nt=o[V],ot=s[V],o.hasOwnProperty(V)&&nt!==ot&&(nt!=null||ot!=null))switch(V){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,i));break;default:Pe(e,i,V,nt,o,ot)}return;default:if(mu(i)){for(var Ke in s)nt=s[Ke],s.hasOwnProperty(Ke)&&nt!==void 0&&!o.hasOwnProperty(Ke)&&th(e,i,Ke,void 0,o,nt);for(ut in o)nt=o[ut],ot=s[ut],!o.hasOwnProperty(ut)||nt===ot||nt===void 0&&ot===void 0||th(e,i,ut,nt,o,ot);return}}for(var K in s)nt=s[K],s.hasOwnProperty(K)&&nt!=null&&!o.hasOwnProperty(K)&&Pe(e,i,K,null,o,nt);for(vt in o)nt=o[vt],ot=s[vt],!o.hasOwnProperty(vt)||nt===ot||nt==null&&ot==null||Pe(e,i,vt,nt,o,ot)}var eh=null,nh=null;function sc(e){return e.nodeType===9?e:e.ownerDocument}function a_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function r_(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function ih(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ah=null;function Vx(){var e=window.event;return e&&e.type==="popstate"?e===ah?!1:(ah=e,!0):(ah=null,!1)}var s_=typeof setTimeout=="function"?setTimeout:void 0,kx=typeof clearTimeout=="function"?clearTimeout:void 0,o_=typeof Promise=="function"?Promise:void 0,Xx=typeof queueMicrotask=="function"?queueMicrotask:typeof o_<"u"?function(e){return o_.resolve(null).then(e).catch(Wx)}:s_;function Wx(e){setTimeout(function(){throw e})}function rh(e,i){var s=i,o=0;do{var u=s.nextSibling;if(e.removeChild(s),u&&u.nodeType===8)if(s=u.data,s==="/$"){if(o===0){e.removeChild(u),Go(i);return}o--}else s!=="$"&&s!=="$?"&&s!=="$!"||o++;s=u}while(s);Go(i)}function sh(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":sh(s),Zs(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function Yx(e,i,s,o){for(;e.nodeType===1;){var u=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ka])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=gi(e.nextSibling),e===null)break}return null}function qx(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=gi(e.nextSibling),e===null))return null;return e}function gi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}function l_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return e;i--}else s==="/$"&&i++}e=e.previousSibling}return null}function c_(e,i,s){switch(i=sc(s),e){case"html":if(e=i.documentElement,!e)throw Error(r(452));return e;case"head":if(e=i.head,!e)throw Error(r(453));return e;case"body":if(e=i.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}var li=new Map,u_=new Set;function oc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var ta=Y.d;Y.d={f:jx,r:Zx,D:Kx,C:Qx,L:$x,m:Jx,X:eS,S:tS,M:nS};function jx(){var e=ta.f(),i=Jl();return e||i}function Zx(e){var i=C(e);i!==null&&i.tag===5&&i.type==="form"?Bm(i):ta.r(e)}var us=typeof document>"u"?null:document;function f_(e,i,s){var o=us;if(o&&typeof i=="string"&&i){var u=dn(i);u='link[rel="'+e+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),u_.has(u)||(u_.add(u),e={rel:e,crossOrigin:s,href:i},o.querySelector(u)===null&&(i=o.createElement("link"),En(i,"link",e),Q(i),o.head.appendChild(i)))}}function Kx(e){ta.D(e),f_("dns-prefetch",e,null)}function Qx(e,i){ta.C(e,i),f_("preconnect",e,i)}function $x(e,i,s){ta.L(e,i,s);var o=us;if(o&&e&&i){var u='link[rel="preload"][as="'+dn(i)+'"]';i==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+dn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+dn(s.imageSizes)+'"]')):u+='[href="'+dn(e)+'"]';var d=u;switch(i){case"style":d=fs(e);break;case"script":d=hs(e)}li.has(d)||(e=A({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),li.set(d,e),o.querySelector(u)!==null||i==="style"&&o.querySelector(Oo(d))||i==="script"&&o.querySelector(Po(d))||(i=o.createElement("link"),En(i,"link",e),Q(i),o.head.appendChild(i)))}}function Jx(e,i){ta.m(e,i);var s=us;if(s&&e){var o=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+dn(o)+'"][href="'+dn(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=hs(e)}if(!li.has(d)&&(e=A({rel:"modulepreload",href:e},i),li.set(d,e),s.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Po(d)))return}o=s.createElement("link"),En(o,"link",e),Q(o),s.head.appendChild(o)}}}function tS(e,i,s){ta.S(e,i,s);var o=us;if(o&&e){var u=tt(o).hoistableStyles,d=fs(e);i=i||"default";var E=u.get(d);if(!E){var R={loading:0,preload:null};if(E=o.querySelector(Oo(d)))R.loading=5;else{e=A({rel:"stylesheet",href:e,"data-precedence":i},s),(s=li.get(d))&&oh(e,s);var P=E=o.createElement("link");Q(P),En(P,"link",e),P._p=new Promise(function(V,ut){P.onload=V,P.onerror=ut}),P.addEventListener("load",function(){R.loading|=1}),P.addEventListener("error",function(){R.loading|=2}),R.loading|=4,lc(E,i,o)}E={type:"stylesheet",instance:E,count:1,state:R},u.set(d,E)}}}function eS(e,i){ta.X(e,i);var s=us;if(s&&e){var o=tt(s).hoistableScripts,u=hs(e),d=o.get(u);d||(d=s.querySelector(Po(u)),d||(e=A({src:e,async:!0},i),(i=li.get(u))&&lh(e,i),d=s.createElement("script"),Q(d),En(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function nS(e,i){ta.M(e,i);var s=us;if(s&&e){var o=tt(s).hoistableScripts,u=hs(e),d=o.get(u);d||(d=s.querySelector(Po(u)),d||(e=A({src:e,async:!0,type:"module"},i),(i=li.get(u))&&lh(e,i),d=s.createElement("script"),Q(d),En(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function h_(e,i,s,o){var u=(u=re.current)?oc(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=fs(s.href),s=tt(u).hoistableStyles,o=s.get(i),o||(o={type:"style",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=fs(s.href);var d=tt(u).hoistableStyles,E=d.get(e);if(E||(u=u.ownerDocument||u,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,E),(d=u.querySelector(Oo(e)))&&!d._p&&(E.instance=d,E.state.loading=5),li.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},li.set(e,s),d||iS(u,e,s,E.state))),i&&o===null)throw Error(r(528,""));return E}if(i&&o!==null)throw Error(r(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=hs(s),s=tt(u).hoistableScripts,o=s.get(i),o||(o={type:"script",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function fs(e){return'href="'+dn(e)+'"'}function Oo(e){return'link[rel="stylesheet"]['+e+"]"}function d_(e){return A({},e,{"data-precedence":e.precedence,precedence:null})}function iS(e,i,s,o){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=e.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),En(i,"link",s),Q(i),e.head.appendChild(i))}function hs(e){return'[src="'+dn(e)+'"]'}function Po(e){return"script[async]"+e}function p_(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var o=e.querySelector('style[data-href~="'+dn(s.href)+'"]');if(o)return i.instance=o,Q(o),o;var u=A({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Q(o),En(o,"style",u),lc(o,s.precedence,e),i.instance=o;case"stylesheet":u=fs(s.href);var d=e.querySelector(Oo(u));if(d)return i.state.loading|=4,i.instance=d,Q(d),d;o=d_(s),(u=li.get(u))&&oh(o,u),d=(e.ownerDocument||e).createElement("link"),Q(d);var E=d;return E._p=new Promise(function(R,P){E.onload=R,E.onerror=P}),En(d,"link",o),i.state.loading|=4,lc(d,s.precedence,e),i.instance=d;case"script":return d=hs(s.src),(u=e.querySelector(Po(d)))?(i.instance=u,Q(u),u):(o=s,(u=li.get(d))&&(o=A({},s),lh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),Q(u),En(u,"link",o),e.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,lc(o,s.precedence,e));return i.instance}function lc(e,i,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,E=0;E<o.length;E++){var R=o[E];if(R.dataset.precedence===i)d=R;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function oh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function lh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var cc=null;function m_(e,i,s){if(cc===null){var o=new Map,u=cc=new Map;u.set(s,o)}else u=cc,o=u.get(s),o||(o=new Map,u.set(s,o));if(o.has(e))return o;for(o.set(e,null),s=s.getElementsByTagName(e),u=0;u<s.length;u++){var d=s[u];if(!(d[Ka]||d[rn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var E=d.getAttribute(i)||"";E=e+E;var R=o.get(E);R?R.push(d):o.set(E,[d])}}return o}function g_(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function aS(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function __(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Io=null;function rS(){}function sS(e,i,s){if(Io===null)throw Error(r(475));var o=Io;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var u=fs(s.href),d=e.querySelector(Oo(u));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=uc.bind(o),e.then(o,o)),i.state.loading|=4,i.instance=d,Q(d);return}d=e.ownerDocument||e,s=d_(s),(u=li.get(u))&&oh(s,u),d=d.createElement("link"),Q(d);var E=d;E._p=new Promise(function(R,P){E.onload=R,E.onerror=P}),En(d,"link",s),i.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(o.count++,i=uc.bind(o),e.addEventListener("load",i),e.addEventListener("error",i))}}function oS(){if(Io===null)throw Error(r(475));var e=Io;return e.stylesheets&&e.count===0&&ch(e,e.stylesheets),0<e.count?function(i){var s=setTimeout(function(){if(e.stylesheets&&ch(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(s)}}:null}function uc(){if(this.count--,this.count===0){if(this.stylesheets)ch(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var fc=null;function ch(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,fc=new Map,i.forEach(lS,e),fc=null,uc.call(e))}function lS(e,i){if(!(i.state.loading&4)){var s=fc.get(e);if(s)var o=s.get(null);else{s=new Map,fc.set(e,s);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var E=u[d];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(s.set(E.dataset.precedence,E),o=E)}o&&s.set(null,o)}u=i.instance,E=u.getAttribute("data-precedence"),d=s.get(E)||o,d===o&&s.set(null,u),s.set(E,u),this.count++,o=uc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),i.state.loading|=4}}var Bo={$$typeof:x,Provider:null,Consumer:null,_currentValue:pt,_currentValue2:pt,_threadCount:0};function cS(e,i,s,o,u,d,E,R){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Dn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dn(0),this.hiddenUpdates=Dn(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function v_(e,i,s,o,u,d,E,R,P,V,ut,vt){return e=new cS(e,i,s,E,R,P,V,vt),i=1,d===!0&&(i|=24),d=si(3,null,null,i),e.current=d,d.stateNode=e,i=Hu(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:o,isDehydrated:s,cache:i},Sf(d),e}function y_(e){return e?(e=Xr,e):Xr}function x_(e,i,s,o,u,d){u=y_(u),o.context===null?o.context=u:o.pendingContext=u,o=Ma(i),o.payload={element:s},d=d===void 0?null:d,d!==null&&(o.callback=d),s=Ta(e,o,i),s!==null&&(Pn(s,e,i),xo(s,e,i))}function S_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function uh(e,i){S_(e,i),(e=e.alternate)&&S_(e,i)}function E_(e){if(e.tag===13){var i=ga(e,67108864);i!==null&&Pn(i,e,67108864),uh(e,67108864)}}var hc=!0;function uS(e,i,s,o){var u=w.T;w.T=null;var d=Y.p;try{Y.p=2,fh(e,i,s,o)}finally{Y.p=d,w.T=u}}function fS(e,i,s,o){var u=w.T;w.T=null;var d=Y.p;try{Y.p=8,fh(e,i,s,o)}finally{Y.p=d,w.T=u}}function fh(e,i,s,o){if(hc){var u=hh(o);if(u===null)Jf(e,i,o,dc,s),T_(e,o);else if(dS(u,e,i,s,o))o.stopPropagation();else if(T_(e,o),i&4&&-1<hS.indexOf(e)){for(;u!==null;){var d=C(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var E=wt(d.pendingLanes);if(E!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;E;){var P=1<<31-jt(E);R.entanglements[1]|=P,E&=~P}wi(d),(Xe&6)===0&&(Kl=ft()+500,Uo(0))}}break;case 13:R=ga(d,2),R!==null&&Pn(R,d,2),Jl(),uh(d,2)}if(d=hh(o),d===null&&Jf(e,i,o,dc,s),d===u)break;u=d}u!==null&&o.stopPropagation()}else Jf(e,i,o,null,s)}}function hh(e){return e=_u(e),dh(e)}var dc=null;function dh(e){if(dc=null,e=Fi(e),e!==null){var i=Z(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=St(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return dc=e,null}function M_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(yt()){case ht:return 2;case Gt:return 8;case Dt:case Bt:return 32;case _e:return 268435456;default:return 32}default:return 32}}var ph=!1,Ua=null,La=null,Na=null,zo=new Map,Fo=new Map,Oa=[],hS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function T_(e,i){switch(e){case"focusin":case"focusout":Ua=null;break;case"dragenter":case"dragleave":La=null;break;case"mouseover":case"mouseout":Na=null;break;case"pointerover":case"pointerout":zo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(i.pointerId)}}function Ho(e,i,s,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:s,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},i!==null&&(i=C(i),i!==null&&E_(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),e)}function dS(e,i,s,o,u){switch(i){case"focusin":return Ua=Ho(Ua,e,i,s,o,u),!0;case"dragenter":return La=Ho(La,e,i,s,o,u),!0;case"mouseover":return Na=Ho(Na,e,i,s,o,u),!0;case"pointerover":var d=u.pointerId;return zo.set(d,Ho(zo.get(d)||null,e,i,s,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Fo.set(d,Ho(Fo.get(d)||null,e,i,s,o,u)),!0}return!1}function b_(e){var i=Fi(e.target);if(i!==null){var s=Z(i);if(s!==null){if(i=s.tag,i===13){if(i=St(s),i!==null){e.blockedOn=i,pl(e.priority,function(){if(s.tag===13){var o=Kn(),u=ga(s,o);u!==null&&Pn(u,s,o),uh(s,o)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=hh(e.nativeEvent);if(s===null){s=e.nativeEvent;var o=new s.constructor(s.type,s);gu=o,s.target.dispatchEvent(o),gu=null}else return i=C(s),i!==null&&E_(i),e.blockedOn=s,!1;i.shift()}return!0}function A_(e,i,s){pc(e)&&s.delete(i)}function pS(){ph=!1,Ua!==null&&pc(Ua)&&(Ua=null),La!==null&&pc(La)&&(La=null),Na!==null&&pc(Na)&&(Na=null),zo.forEach(A_),Fo.forEach(A_)}function mc(e,i){e.blockedOn===i&&(e.blockedOn=null,ph||(ph=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,pS)))}var gc=null;function R_(e){gc!==e&&(gc=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){gc===e&&(gc=null);for(var i=0;i<e.length;i+=3){var s=e[i],o=e[i+1],u=e[i+2];if(typeof o!="function"){if(dh(o||s)===null)continue;break}var d=C(s);d!==null&&(e.splice(i,3),i-=3,nf(d,{pending:!0,data:u,method:s.method,action:o},o,u))}}))}function Go(e){function i(P){return mc(P,e)}Ua!==null&&mc(Ua,e),La!==null&&mc(La,e),Na!==null&&mc(Na,e),zo.forEach(i),Fo.forEach(i);for(var s=0;s<Oa.length;s++){var o=Oa[s];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Oa.length&&(s=Oa[0],s.blockedOn===null);)b_(s),s.blockedOn===null&&Oa.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var u=s[o],d=s[o+1],E=u[sn]||null;if(typeof d=="function")E||R_(s);else if(E){var R=null;if(d&&d.hasAttribute("formAction")){if(u=d,E=d[sn]||null)R=E.formAction;else if(dh(u)!==null)continue}else R=E.action;typeof R=="function"?s[o+1]=R:(s.splice(o,3),o-=3),R_(s)}}}function mh(e){this._internalRoot=e}_c.prototype.render=mh.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(r(409));var s=i.current,o=Kn();x_(s,o,e,i,null,null)},_c.prototype.unmount=mh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;e.tag===0&&os(),x_(e.current,2,null,e,null,null),Jl(),i[zi]=null}};function _c(e){this._internalRoot=e}_c.prototype.unstable_scheduleHydration=function(e){if(e){var i=js();e={blockedOn:null,target:e,priority:i};for(var s=0;s<Oa.length&&i!==0&&i<Oa[s].priority;s++);Oa.splice(s,0,e),s===0&&b_(e)}};var C_=t.version;if(C_!=="19.0.0")throw Error(r(527,C_,"19.0.0"));Y.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=it(i),e=e!==null?Tt(e):null,e=e===null?null:e.stateNode,e};var mS={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:w,findFiberByHostInstance:Fi,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vc.isDisabled&&vc.supportsFiber)try{Qt=vc.inject(mS),Vt=vc}catch{}}return ko.createRoot=function(e,i){if(!l(e))throw Error(r(299));var s=!1,o="",u=Wm,d=Ym,E=qm,R=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(R=i.unstable_transitionCallbacks)),i=v_(e,1,!1,null,null,s,o,u,d,E,R,null),e[zi]=i.current,$f(e.nodeType===8?e.parentNode:e),new mh(i)},ko.hydrateRoot=function(e,i,s){if(!l(e))throw Error(r(299));var o=!1,u="",d=Wm,E=Ym,R=qm,P=null,V=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(E=s.onCaughtError),s.onRecoverableError!==void 0&&(R=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(P=s.unstable_transitionCallbacks),s.formState!==void 0&&(V=s.formState)),i=v_(e,1,!0,i,s??null,o,u,d,E,R,P,V),i.context=y_(null),s=i.current,o=Kn(),u=Ma(o),u.callback=null,Ta(s,u,o),i.current.lanes=o,Un(i,o),wi(i),e[zi]=i.current,$f(e),new _c(i)},ko.version="19.0.0",ko}var z_;function bS(){if(z_)return vh.exports;z_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),vh.exports=TS(),vh.exports}var AS=bS(),Xo={},F_;function RS(){if(F_)return Xo;F_=1,Object.defineProperty(Xo,"__esModule",{value:!0}),Xo.parse=f,Xo.serialize=m;const a=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,c=(()=>{const v=function(){};return v.prototype=Object.create(null),v})();function f(v,x){const M=new c,T=v.length;if(T<2)return M;const S=(x==null?void 0:x.decode)||_;let g=0;do{const L=v.indexOf("=",g);if(L===-1)break;const U=v.indexOf(";",g),D=U===-1?T:U;if(L>D){g=v.lastIndexOf(";",L-1)+1;continue}const I=h(v,g,L),B=p(v,L,I),z=v.slice(I,B);if(M[z]===void 0){let q=h(v,L+1,D),w=p(v,D,q);const A=S(v.slice(q,w));M[z]=A}g=D+1}while(g<T);return M}function h(v,x,M){do{const T=v.charCodeAt(x);if(T!==32&&T!==9)return x}while(++x<M);return M}function p(v,x,M){for(;x>M;){const T=v.charCodeAt(--x);if(T!==32&&T!==9)return x+1}return M}function m(v,x,M){const T=(M==null?void 0:M.encode)||encodeURIComponent;if(!a.test(v))throw new TypeError(`argument name is invalid: ${v}`);const S=T(x);if(!t.test(S))throw new TypeError(`argument val is invalid: ${x}`);let g=v+"="+S;if(!M)return g;if(M.maxAge!==void 0){if(!Number.isInteger(M.maxAge))throw new TypeError(`option maxAge is invalid: ${M.maxAge}`);g+="; Max-Age="+M.maxAge}if(M.domain){if(!n.test(M.domain))throw new TypeError(`option domain is invalid: ${M.domain}`);g+="; Domain="+M.domain}if(M.path){if(!r.test(M.path))throw new TypeError(`option path is invalid: ${M.path}`);g+="; Path="+M.path}if(M.expires){if(!y(M.expires)||!Number.isFinite(M.expires.valueOf()))throw new TypeError(`option expires is invalid: ${M.expires}`);g+="; Expires="+M.expires.toUTCString()}if(M.httpOnly&&(g+="; HttpOnly"),M.secure&&(g+="; Secure"),M.partitioned&&(g+="; Partitioned"),M.priority)switch(typeof M.priority=="string"?M.priority.toLowerCase():void 0){case"low":g+="; Priority=Low";break;case"medium":g+="; Priority=Medium";break;case"high":g+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${M.priority}`)}if(M.sameSite)switch(typeof M.sameSite=="string"?M.sameSite.toLowerCase():M.sameSite){case!0:case"strict":g+="; SameSite=Strict";break;case"lax":g+="; SameSite=Lax";break;case"none":g+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${M.sameSite}`)}return g}function _(v){if(v.indexOf("%")===-1)return v;try{return decodeURIComponent(v)}catch{return v}}function y(v){return l.call(v)==="[object Date]"}return Xo}RS();/**
 * react-router v7.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var H_="popstate";function CS(a={}){function t(r,l){let{pathname:c,search:f,hash:h}=r.location;return nd("",{pathname:c,search:f,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(r,l){return typeof l=="string"?l:el(l)}return DS(t,n,null,a)}function We(a,t){if(a===!1||a===null||typeof a>"u")throw new Error(t)}function Oi(a,t){if(!a){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function wS(){return Math.random().toString(36).substring(2,10)}function G_(a,t){return{usr:a.state,key:a.key,idx:t}}function nd(a,t,n=null,r){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof t=="string"?ks(t):t,state:n,key:t&&t.key||r||wS()}}function el({pathname:a="/",search:t="",hash:n=""}){return t&&t!=="?"&&(a+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(a+=n.charAt(0)==="#"?n:"#"+n),a}function ks(a){let t={};if(a){let n=a.indexOf("#");n>=0&&(t.hash=a.substring(n),a=a.substring(0,n));let r=a.indexOf("?");r>=0&&(t.search=a.substring(r),a=a.substring(0,r)),a&&(t.pathname=a)}return t}function DS(a,t,n,r={}){let{window:l=document.defaultView,v5Compat:c=!1}=r,f=l.history,h="POP",p=null,m=_();m==null&&(m=0,f.replaceState({...f.state,idx:m},""));function _(){return(f.state||{idx:null}).idx}function y(){h="POP";let S=_(),g=S==null?null:S-m;m=S,p&&p({action:h,location:T.location,delta:g})}function v(S,g){h="PUSH";let L=nd(T.location,S,g);m=_()+1;let U=G_(L,m),D=T.createHref(L);try{f.pushState(U,"",D)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;l.location.assign(D)}c&&p&&p({action:h,location:T.location,delta:1})}function x(S,g){h="REPLACE";let L=nd(T.location,S,g);m=_();let U=G_(L,m),D=T.createHref(L);f.replaceState(U,"",D),c&&p&&p({action:h,location:T.location,delta:0})}function M(S){let g=l.location.origin!=="null"?l.location.origin:l.location.href,L=typeof S=="string"?S:el(S);return L=L.replace(/ $/,"%20"),We(g,`No window.location.(origin|href) available to create URL for href: ${L}`),new URL(L,g)}let T={get action(){return h},get location(){return a(l,f)},listen(S){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(H_,y),p=S,()=>{l.removeEventListener(H_,y),p=null}},createHref(S){return t(l,S)},createURL:M,encodeLocation(S){let g=M(S);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:v,replace:x,go(S){return f.go(S)}};return T}function h0(a,t,n="/"){return US(a,t,n,!1)}function US(a,t,n,r){let l=typeof t=="string"?ks(t):t,c=ha(l.pathname||"/",n);if(c==null)return null;let f=d0(a);LS(f);let h=null;for(let p=0;h==null&&p<f.length;++p){let m=kS(c);h=GS(f[p],m,r)}return h}function d0(a,t=[],n=[],r=""){let l=(c,f,h)=>{let p={relativePath:h===void 0?c.path||"":h,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};p.relativePath.startsWith("/")&&(We(p.relativePath.startsWith(r),`Absolute route path "${p.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(r.length));let m=ua([r,p.relativePath]),_=n.concat(p);c.children&&c.children.length>0&&(We(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),d0(c.children,t,_,m)),!(c.path==null&&!c.index)&&t.push({path:m,score:FS(m,c.index),routesMeta:_})};return a.forEach((c,f)=>{var h;if(c.path===""||!((h=c.path)!=null&&h.includes("?")))l(c,f);else for(let p of p0(c.path))l(c,f,p)}),t}function p0(a){let t=a.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),c=n.replace(/\?$/,"");if(r.length===0)return l?[c,""]:[c];let f=p0(r.join("/")),h=[];return h.push(...f.map(p=>p===""?c:[c,p].join("/"))),l&&h.push(...f),h.map(p=>a.startsWith("/")&&p===""?"/":p)}function LS(a){a.sort((t,n)=>t.score!==n.score?n.score-t.score:HS(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var NS=/^:[\w-]+$/,OS=3,PS=2,IS=1,BS=10,zS=-2,V_=a=>a==="*";function FS(a,t){let n=a.split("/"),r=n.length;return n.some(V_)&&(r+=zS),t&&(r+=PS),n.filter(l=>!V_(l)).reduce((l,c)=>l+(NS.test(c)?OS:c===""?IS:BS),r)}function HS(a,t){return a.length===t.length&&a.slice(0,-1).every((r,l)=>r===t[l])?a[a.length-1]-t[t.length-1]:0}function GS(a,t,n=!1){let{routesMeta:r}=a,l={},c="/",f=[];for(let h=0;h<r.length;++h){let p=r[h],m=h===r.length-1,_=c==="/"?t:t.slice(c.length)||"/",y=eu({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},_),v=p.route;if(!y&&m&&n&&!r[r.length-1].route.index&&(y=eu({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},_)),!y)return null;Object.assign(l,y.params),f.push({params:l,pathname:ua([c,y.pathname]),pathnameBase:qS(ua([c,y.pathnameBase])),route:v}),y.pathnameBase!=="/"&&(c=ua([c,y.pathnameBase]))}return f}function eu(a,t){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[n,r]=VS(a.path,a.caseSensitive,a.end),l=t.match(n);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:r.reduce((m,{paramName:_,isOptional:y},v)=>{if(_==="*"){let M=h[v]||"";f=c.slice(0,c.length-M.length).replace(/(.)\/+$/,"$1")}const x=h[v];return y&&!x?m[_]=void 0:m[_]=(x||"").replace(/%2F/g,"/"),m},{}),pathname:c,pathnameBase:f,pattern:a}}function VS(a,t=!1,n=!0){Oi(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let r=[],l="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,p)=>(r.push({paramName:h,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(r.push({paramName:"*"}),l+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":a!==""&&a!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function kS(a){try{return a.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Oi(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),a}}function ha(a,t){if(t==="/")return a;if(!a.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=a.charAt(n);return r&&r!=="/"?null:a.slice(n)||"/"}function XS(a,t="/"){let{pathname:n,search:r="",hash:l=""}=typeof a=="string"?ks(a):a;return{pathname:n?n.startsWith("/")?n:WS(n,t):t,search:jS(r),hash:ZS(l)}}function WS(a,t){let n=t.replace(/\/+$/,"").split("/");return a.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function Eh(a,t,n,r){return`Cannot include a '${a}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function YS(a){return a.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function m0(a){let t=YS(a);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function g0(a,t,n,r=!1){let l;typeof a=="string"?l=ks(a):(l={...a},We(!l.pathname||!l.pathname.includes("?"),Eh("?","pathname","search",l)),We(!l.pathname||!l.pathname.includes("#"),Eh("#","pathname","hash",l)),We(!l.search||!l.search.includes("#"),Eh("#","search","hash",l)));let c=a===""||l.pathname==="",f=c?"/":l.pathname,h;if(f==null)h=n;else{let y=t.length-1;if(!r&&f.startsWith("..")){let v=f.split("/");for(;v[0]==="..";)v.shift(),y-=1;l.pathname=v.join("/")}h=y>=0?t[y]:"/"}let p=XS(l,h),m=f&&f!=="/"&&f.endsWith("/"),_=(c||f===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(m||_)&&(p.pathname+="/"),p}var ua=a=>a.join("/").replace(/\/\/+/g,"/"),qS=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),jS=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,ZS=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function KS(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var _0=["POST","PUT","PATCH","DELETE"];new Set(_0);var QS=["GET",..._0];new Set(QS);var Xs=lt.createContext(null);Xs.displayName="DataRouter";var ou=lt.createContext(null);ou.displayName="DataRouterState";var v0=lt.createContext({isTransitioning:!1});v0.displayName="ViewTransition";var $S=lt.createContext(new Map);$S.displayName="Fetchers";var JS=lt.createContext(null);JS.displayName="Await";var Ii=lt.createContext(null);Ii.displayName="Navigation";var rl=lt.createContext(null);rl.displayName="Location";var pa=lt.createContext({outlet:null,matches:[],isDataRoute:!1});pa.displayName="Route";var Yd=lt.createContext(null);Yd.displayName="RouteError";function tE(a,{relative:t}={}){We(sl(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=lt.useContext(Ii),{hash:l,pathname:c,search:f}=ol(a,{relative:t}),h=c;return n!=="/"&&(h=c==="/"?n:ua([n,c])),r.createHref({pathname:h,search:f,hash:l})}function sl(){return lt.useContext(rl)!=null}function Nr(){return We(sl(),"useLocation() may be used only in the context of a <Router> component."),lt.useContext(rl).location}var y0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function x0(a){lt.useContext(Ii).static||lt.useLayoutEffect(a)}function eE(){let{isDataRoute:a}=lt.useContext(pa);return a?pE():nE()}function nE(){We(sl(),"useNavigate() may be used only in the context of a <Router> component.");let a=lt.useContext(Xs),{basename:t,navigator:n}=lt.useContext(Ii),{matches:r}=lt.useContext(pa),{pathname:l}=Nr(),c=JSON.stringify(m0(r)),f=lt.useRef(!1);return x0(()=>{f.current=!0}),lt.useCallback((p,m={})=>{if(Oi(f.current,y0),!f.current)return;if(typeof p=="number"){n.go(p);return}let _=g0(p,JSON.parse(c),l,m.relative==="path");a==null&&t!=="/"&&(_.pathname=_.pathname==="/"?t:ua([t,_.pathname])),(m.replace?n.replace:n.push)(_,m.state,m)},[t,n,c,l,a])}lt.createContext(null);function ol(a,{relative:t}={}){let{matches:n}=lt.useContext(pa),{pathname:r}=Nr(),l=JSON.stringify(m0(n));return lt.useMemo(()=>g0(a,JSON.parse(l),r,t==="path"),[a,l,r,t])}function iE(a,t){return S0(a,t)}function S0(a,t,n,r){var L;We(sl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l,static:c}=lt.useContext(Ii),{matches:f}=lt.useContext(pa),h=f[f.length-1],p=h?h.params:{},m=h?h.pathname:"/",_=h?h.pathnameBase:"/",y=h&&h.route;{let U=y&&y.path||"";E0(m,!y||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let v=Nr(),x;if(t){let U=typeof t=="string"?ks(t):t;We(_==="/"||((L=U.pathname)==null?void 0:L.startsWith(_)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${U.pathname}" was given in the \`location\` prop.`),x=U}else x=v;let M=x.pathname||"/",T=M;if(_!=="/"){let U=_.replace(/^\//,"").split("/");T="/"+M.replace(/^\//,"").split("/").slice(U.length).join("/")}let S=!c&&n&&n.matches&&n.matches.length>0?n.matches:h0(a,{pathname:T});Oi(y||S!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),Oi(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let g=lE(S&&S.map(U=>Object.assign({},U,{params:Object.assign({},p,U.params),pathname:ua([_,l.encodeLocation?l.encodeLocation(U.pathname).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?_:ua([_,l.encodeLocation?l.encodeLocation(U.pathnameBase).pathname:U.pathnameBase])})),f,n,r);return t&&g?lt.createElement(rl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...x},navigationType:"POP"}},g):g}function aE(){let a=dE(),t=KS(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),n=a instanceof Error?a.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",a),f=lt.createElement(lt.Fragment,null,lt.createElement("p",null,"💿 Hey developer 👋"),lt.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",lt.createElement("code",{style:c},"ErrorBoundary")," or"," ",lt.createElement("code",{style:c},"errorElement")," prop on your route.")),lt.createElement(lt.Fragment,null,lt.createElement("h2",null,"Unexpected Application Error!"),lt.createElement("h3",{style:{fontStyle:"italic"}},t),n?lt.createElement("pre",{style:l},n):null,f)}var rE=lt.createElement(aE,null),sE=class extends lt.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,t){return t.location!==a.location||t.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:t.error,location:t.location,revalidation:a.revalidation||t.revalidation}}componentDidCatch(a,t){console.error("React Router caught the following error during render",a,t)}render(){return this.state.error!==void 0?lt.createElement(pa.Provider,{value:this.props.routeContext},lt.createElement(Yd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function oE({routeContext:a,match:t,children:n}){let r=lt.useContext(Xs);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),lt.createElement(pa.Provider,{value:a},n)}function lE(a,t=[],n=null,r=null){if(a==null){if(!n)return null;if(n.errors)a=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)a=n.matches;else return null}let l=a,c=n==null?void 0:n.errors;if(c!=null){let p=l.findIndex(m=>m.route.id&&(c==null?void 0:c[m.route.id])!==void 0);We(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,p+1))}let f=!1,h=-1;if(n)for(let p=0;p<l.length;p++){let m=l[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(h=p),m.route.id){let{loaderData:_,errors:y}=n,v=m.route.loader&&!_.hasOwnProperty(m.route.id)&&(!y||y[m.route.id]===void 0);if(m.route.lazy||v){f=!0,h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}return l.reduceRight((p,m,_)=>{let y,v=!1,x=null,M=null;n&&(y=c&&m.route.id?c[m.route.id]:void 0,x=m.route.errorElement||rE,f&&(h<0&&_===0?(E0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,M=null):h===_&&(v=!0,M=m.route.hydrateFallbackElement||null)));let T=t.concat(l.slice(0,_+1)),S=()=>{let g;return y?g=x:v?g=M:m.route.Component?g=lt.createElement(m.route.Component,null):m.route.element?g=m.route.element:g=p,lt.createElement(oE,{match:m,routeContext:{outlet:p,matches:T,isDataRoute:n!=null},children:g})};return n&&(m.route.ErrorBoundary||m.route.errorElement||_===0)?lt.createElement(sE,{location:n.location,revalidation:n.revalidation,component:x,error:y,children:S(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):S()},null)}function qd(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function cE(a){let t=lt.useContext(Xs);return We(t,qd(a)),t}function uE(a){let t=lt.useContext(ou);return We(t,qd(a)),t}function fE(a){let t=lt.useContext(pa);return We(t,qd(a)),t}function jd(a){let t=fE(a),n=t.matches[t.matches.length-1];return We(n.route.id,`${a} can only be used on routes that contain a unique "id"`),n.route.id}function hE(){return jd("useRouteId")}function dE(){var r;let a=lt.useContext(Yd),t=uE("useRouteError"),n=jd("useRouteError");return a!==void 0?a:(r=t.errors)==null?void 0:r[n]}function pE(){let{router:a}=cE("useNavigate"),t=jd("useNavigate"),n=lt.useRef(!1);return x0(()=>{n.current=!0}),lt.useCallback(async(l,c={})=>{Oi(n.current,y0),n.current&&(typeof l=="number"?a.navigate(l):await a.navigate(l,{fromRouteId:t,...c}))},[a,t])}var k_={};function E0(a,t,n){!t&&!k_[a]&&(k_[a]=!0,Oi(!1,n))}lt.memo(mE);function mE({routes:a,future:t,state:n}){return S0(a,void 0,n,t)}function Xc(a){We(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function gE({basename:a="/",children:t=null,location:n,navigationType:r="POP",navigator:l,static:c=!1}){We(!sl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=a.replace(/^\/*/,"/"),h=lt.useMemo(()=>({basename:f,navigator:l,static:c,future:{}}),[f,l,c]);typeof n=="string"&&(n=ks(n));let{pathname:p="/",search:m="",hash:_="",state:y=null,key:v="default"}=n,x=lt.useMemo(()=>{let M=ha(p,f);return M==null?null:{location:{pathname:M,search:m,hash:_,state:y,key:v},navigationType:r}},[f,p,m,_,y,v,r]);return Oi(x!=null,`<Router basename="${f}"> is not able to match the URL "${p}${m}${_}" because it does not start with the basename, so the <Router> won't render anything.`),x==null?null:lt.createElement(Ii.Provider,{value:h},lt.createElement(rl.Provider,{children:t,value:x}))}function _E({children:a,location:t}){return iE(id(a),t)}function id(a,t=[]){let n=[];return lt.Children.forEach(a,(r,l)=>{if(!lt.isValidElement(r))return;let c=[...t,l];if(r.type===lt.Fragment){n.push.apply(n,id(r.props.children,c));return}We(r.type===Xc,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),We(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=id(r.props.children,c)),n.push(f)}),n}var Wc="get",Yc="application/x-www-form-urlencoded";function lu(a){return a!=null&&typeof a.tagName=="string"}function vE(a){return lu(a)&&a.tagName.toLowerCase()==="button"}function yE(a){return lu(a)&&a.tagName.toLowerCase()==="form"}function xE(a){return lu(a)&&a.tagName.toLowerCase()==="input"}function SE(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function EE(a,t){return a.button===0&&(!t||t==="_self")&&!SE(a)}var yc=null;function ME(){if(yc===null)try{new FormData(document.createElement("form"),0),yc=!1}catch{yc=!0}return yc}var TE=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Mh(a){return a!=null&&!TE.has(a)?(Oi(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Yc}"`),null):a}function bE(a,t){let n,r,l,c,f;if(yE(a)){let h=a.getAttribute("action");r=h?ha(h,t):null,n=a.getAttribute("method")||Wc,l=Mh(a.getAttribute("enctype"))||Yc,c=new FormData(a)}else if(vE(a)||xE(a)&&(a.type==="submit"||a.type==="image")){let h=a.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=a.getAttribute("formaction")||h.getAttribute("action");if(r=p?ha(p,t):null,n=a.getAttribute("formmethod")||h.getAttribute("method")||Wc,l=Mh(a.getAttribute("formenctype"))||Mh(h.getAttribute("enctype"))||Yc,c=new FormData(h,a),!ME()){let{name:m,type:_,value:y}=a;if(_==="image"){let v=m?`${m}.`:"";c.append(`${v}x`,"0"),c.append(`${v}y`,"0")}else m&&c.append(m,y)}}else{if(lu(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Wc,r=null,l=Yc,f=a}return c&&l==="text/plain"&&(f=c,c=void 0),{action:r,method:n.toLowerCase(),encType:l,formData:c,body:f}}function Zd(a,t){if(a===!1||a===null||typeof a>"u")throw new Error(t)}async function AE(a,t){if(a.id in t)return t[a.id];try{let n=await import(a.module);return t[a.id]=n,n}catch(n){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function RE(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function CE(a,t,n){let r=await Promise.all(a.map(async l=>{let c=t.routes[l.route.id];if(c){let f=await AE(c,n);return f.links?f.links():[]}return[]}));return LE(r.flat(1).filter(RE).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function X_(a,t,n,r,l,c){let f=(p,m)=>n[m]?p.route.id!==n[m].route.id:!0,h=(p,m)=>{var _;return n[m].pathname!==p.pathname||((_=n[m].route.path)==null?void 0:_.endsWith("*"))&&n[m].params["*"]!==p.params["*"]};return c==="assets"?t.filter((p,m)=>f(p,m)||h(p,m)):c==="data"?t.filter((p,m)=>{var y;let _=r.routes[p.route.id];if(!_||!_.hasLoader)return!1;if(f(p,m)||h(p,m))return!0;if(p.route.shouldRevalidate){let v=p.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((y=n[0])==null?void 0:y.params)||{},nextUrl:new URL(a,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function wE(a,t,{includeHydrateFallback:n}={}){return DE(a.map(r=>{let l=t.routes[r.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),n&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function DE(a){return[...new Set(a)]}function UE(a){let t={},n=Object.keys(a).sort();for(let r of n)t[r]=a[r];return t}function LE(a,t){let n=new Set;return new Set(t),a.reduce((r,l)=>{let c=JSON.stringify(UE(l));return n.has(c)||(n.add(c),r.push({key:c,link:l})),r},[])}function NE(a,t){let n=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return n.pathname==="/"?n.pathname="_root.data":t&&ha(n.pathname,t)==="/"?n.pathname=`${t.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function M0(){let a=lt.useContext(Xs);return Zd(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function OE(){let a=lt.useContext(ou);return Zd(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Kd=lt.createContext(void 0);Kd.displayName="FrameworkContext";function T0(){let a=lt.useContext(Kd);return Zd(a,"You must render this element inside a <HydratedRouter> element"),a}function PE(a,t){let n=lt.useContext(Kd),[r,l]=lt.useState(!1),[c,f]=lt.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:m,onMouseLeave:_,onTouchStart:y}=t,v=lt.useRef(null);lt.useEffect(()=>{if(a==="render"&&f(!0),a==="viewport"){let T=g=>{g.forEach(L=>{f(L.isIntersecting)})},S=new IntersectionObserver(T,{threshold:.5});return v.current&&S.observe(v.current),()=>{S.disconnect()}}},[a]),lt.useEffect(()=>{if(r){let T=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(T)}}},[r]);let x=()=>{l(!0)},M=()=>{l(!1),f(!1)};return n?a!=="intent"?[c,v,{}]:[c,v,{onFocus:Wo(h,x),onBlur:Wo(p,M),onMouseEnter:Wo(m,x),onMouseLeave:Wo(_,M),onTouchStart:Wo(y,x)}]:[!1,v,{}]}function Wo(a,t){return n=>{a&&a(n),n.defaultPrevented||t(n)}}function IE({page:a,...t}){let{router:n}=M0(),r=lt.useMemo(()=>h0(n.routes,a,n.basename),[n.routes,a,n.basename]);return r?lt.createElement(zE,{page:a,matches:r,...t}):null}function BE(a){let{manifest:t,routeModules:n}=T0(),[r,l]=lt.useState([]);return lt.useEffect(()=>{let c=!1;return CE(a,t,n).then(f=>{c||l(f)}),()=>{c=!0}},[a,t,n]),r}function zE({page:a,matches:t,...n}){let r=Nr(),{manifest:l,routeModules:c}=T0(),{basename:f}=M0(),{loaderData:h,matches:p}=OE(),m=lt.useMemo(()=>X_(a,t,p,l,r,"data"),[a,t,p,l,r]),_=lt.useMemo(()=>X_(a,t,p,l,r,"assets"),[a,t,p,l,r]),y=lt.useMemo(()=>{if(a===r.pathname+r.search+r.hash)return[];let M=new Set,T=!1;if(t.forEach(g=>{var U;let L=l.routes[g.route.id];!L||!L.hasLoader||(!m.some(D=>D.route.id===g.route.id)&&g.route.id in h&&((U=c[g.route.id])!=null&&U.shouldRevalidate)||L.hasClientLoader?T=!0:M.add(g.route.id))}),M.size===0)return[];let S=NE(a,f);return T&&M.size>0&&S.searchParams.set("_routes",t.filter(g=>M.has(g.route.id)).map(g=>g.route.id).join(",")),[S.pathname+S.search]},[f,h,r,l,m,t,a,c]),v=lt.useMemo(()=>wE(_,l),[_,l]),x=BE(_);return lt.createElement(lt.Fragment,null,y.map(M=>lt.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...n})),v.map(M=>lt.createElement("link",{key:M,rel:"modulepreload",href:M,...n})),x.map(({key:M,link:T})=>lt.createElement("link",{key:M,...T})))}function FE(...a){return t=>{a.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var b0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{b0&&(window.__reactRouterVersion="7.4.0")}catch{}function HE({basename:a,children:t,window:n}){let r=lt.useRef();r.current==null&&(r.current=CS({window:n,v5Compat:!0}));let l=r.current,[c,f]=lt.useState({action:l.action,location:l.location}),h=lt.useCallback(p=>{lt.startTransition(()=>f(p))},[f]);return lt.useLayoutEffect(()=>l.listen(h),[l,h]),lt.createElement(gE,{basename:a,children:t,location:c.location,navigationType:c.action,navigator:l})}var A0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Cs=lt.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:l,reloadDocument:c,replace:f,state:h,target:p,to:m,preventScrollReset:_,viewTransition:y,...v},x){let{basename:M}=lt.useContext(Ii),T=typeof m=="string"&&A0.test(m),S,g=!1;if(typeof m=="string"&&T&&(S=m,b0))try{let w=new URL(window.location.href),A=m.startsWith("//")?new URL(w.protocol+m):new URL(m),H=ha(A.pathname,M);A.origin===w.origin&&H!=null?m=H+A.search+A.hash:g=!0}catch{Oi(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=tE(m,{relative:l}),[U,D,I]=PE(r,v),B=XE(m,{replace:f,state:h,target:p,preventScrollReset:_,relative:l,viewTransition:y});function z(w){t&&t(w),w.defaultPrevented||B(w)}let q=lt.createElement("a",{...v,...I,href:S||L,onClick:g||c?t:z,ref:FE(x,D),target:p,"data-discover":!T&&n==="render"?"true":void 0});return U&&!T?lt.createElement(lt.Fragment,null,q,lt.createElement(IE,{page:L})):q});Cs.displayName="Link";var GE=lt.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:l=!1,style:c,to:f,viewTransition:h,children:p,...m},_){let y=ol(f,{relative:m.relative}),v=Nr(),x=lt.useContext(ou),{navigator:M,basename:T}=lt.useContext(Ii),S=x!=null&&ZE(y)&&h===!0,g=M.encodeLocation?M.encodeLocation(y).pathname:y.pathname,L=v.pathname,U=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;n||(L=L.toLowerCase(),U=U?U.toLowerCase():null,g=g.toLowerCase()),U&&T&&(U=ha(U,T)||U);const D=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let I=L===g||!l&&L.startsWith(g)&&L.charAt(D)==="/",B=U!=null&&(U===g||!l&&U.startsWith(g)&&U.charAt(g.length)==="/"),z={isActive:I,isPending:B,isTransitioning:S},q=I?t:void 0,w;typeof r=="function"?w=r(z):w=[r,I?"active":null,B?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let A=typeof c=="function"?c(z):c;return lt.createElement(Cs,{...m,"aria-current":q,className:w,ref:_,style:A,to:f,viewTransition:h},typeof p=="function"?p(z):p)});GE.displayName="NavLink";var VE=lt.forwardRef(({discover:a="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:l,state:c,method:f=Wc,action:h,onSubmit:p,relative:m,preventScrollReset:_,viewTransition:y,...v},x)=>{let M=qE(),T=jE(h,{relative:m}),S=f.toLowerCase()==="get"?"get":"post",g=typeof h=="string"&&A0.test(h),L=U=>{if(p&&p(U),U.defaultPrevented)return;U.preventDefault();let D=U.nativeEvent.submitter,I=(D==null?void 0:D.getAttribute("formmethod"))||f;M(D||U.currentTarget,{fetcherKey:t,method:I,navigate:n,replace:l,state:c,relative:m,preventScrollReset:_,viewTransition:y})};return lt.createElement("form",{ref:x,method:S,action:T,onSubmit:r?p:L,...v,"data-discover":!g&&a==="render"?"true":void 0})});VE.displayName="Form";function kE(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function R0(a){let t=lt.useContext(Xs);return We(t,kE(a)),t}function XE(a,{target:t,replace:n,state:r,preventScrollReset:l,relative:c,viewTransition:f}={}){let h=eE(),p=Nr(),m=ol(a,{relative:c});return lt.useCallback(_=>{if(EE(_,t)){_.preventDefault();let y=n!==void 0?n:el(p)===el(m);h(a,{replace:y,state:r,preventScrollReset:l,relative:c,viewTransition:f})}},[p,h,m,n,r,t,a,l,c,f])}var WE=0,YE=()=>`__${String(++WE)}__`;function qE(){let{router:a}=R0("useSubmit"),{basename:t}=lt.useContext(Ii),n=hE();return lt.useCallback(async(r,l={})=>{let{action:c,method:f,encType:h,formData:p,body:m}=bE(r,t);if(l.navigate===!1){let _=l.fetcherKey||YE();await a.fetch(_,n,l.action||c,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||f,formEncType:l.encType||h,flushSync:l.flushSync})}else await a.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||f,formEncType:l.encType||h,replace:l.replace,state:l.state,fromRouteId:n,flushSync:l.flushSync,viewTransition:l.viewTransition})},[a,t,n])}function jE(a,{relative:t}={}){let{basename:n}=lt.useContext(Ii),r=lt.useContext(pa);We(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),c={...ol(a||".",{relative:t})},f=Nr();if(a==null){c.search=f.search;let h=new URLSearchParams(c.search),p=h.getAll("index");if(p.some(_=>_==="")){h.delete("index"),p.filter(y=>y).forEach(y=>h.append("index",y));let _=h.toString();c.search=_?`?${_}`:""}}return(!a||a===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(c.pathname=c.pathname==="/"?n:ua([n,c.pathname])),el(c)}function ZE(a,t={}){let n=lt.useContext(v0);We(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=R0("useViewTransitionState"),l=ol(a,{relative:t.relative});if(!n.isTransitioning)return!1;let c=ha(n.currentLocation.pathname,r)||n.currentLocation.pathname,f=ha(n.nextLocation.pathname,r)||n.nextLocation.pathname;return eu(l.pathname,f)!=null||eu(l.pathname,c)!=null}new TextEncoder;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qd="174",Ls={ROTATE:0,DOLLY:1,PAN:2},ws={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},KE=0,W_=1,QE=2,C0=1,$E=2,sa=3,ja=0,kn=1,oa=2,Wa=0,Ns=1,Y_=2,q_=3,j_=4,JE=5,Tr=100,tM=101,eM=102,nM=103,iM=104,aM=200,rM=201,sM=202,oM=203,ad=204,rd=205,lM=206,cM=207,uM=208,fM=209,hM=210,dM=211,pM=212,mM=213,gM=214,sd=0,od=1,ld=2,Is=3,cd=4,ud=5,fd=6,hd=7,$d=0,_M=1,vM=2,Ya=0,yM=1,xM=2,SM=3,EM=4,MM=5,TM=6,bM=7,w0=300,Bs=301,zs=302,dd=303,pd=304,cu=306,md=1e3,Ar=1001,gd=1002,Ei=1003,AM=1004,xc=1005,Ui=1006,Th=1007,Rr=1008,da=1009,D0=1010,U0=1011,nl=1012,Jd=1013,wr=1014,la=1015,ll=1016,tp=1017,ep=1018,Fs=1020,L0=35902,N0=1021,O0=1022,Si=1023,P0=1024,I0=1025,Os=1026,Hs=1027,B0=1028,np=1029,z0=1030,ip=1031,ap=1033,qc=33776,jc=33777,Zc=33778,Kc=33779,_d=35840,vd=35841,yd=35842,xd=35843,Sd=36196,Ed=37492,Md=37496,Td=37808,bd=37809,Ad=37810,Rd=37811,Cd=37812,wd=37813,Dd=37814,Ud=37815,Ld=37816,Nd=37817,Od=37818,Pd=37819,Id=37820,Bd=37821,Qc=36492,zd=36494,Fd=36495,F0=36283,Hd=36284,Gd=36285,Vd=36286,RM=3200,CM=3201,H0=0,wM=1,Xa="",ui="srgb",Gs="srgb-linear",nu="linear",Ie="srgb",ds=7680,Z_=519,DM=512,UM=513,LM=514,G0=515,NM=516,OM=517,PM=518,IM=519,K_=35044,Q_="300 es",ca=2e3,iu=2001;class Or{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(n)===-1&&r[t].push(n)}hasEventListener(t,n){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(n)!==-1}removeEventListener(t,n){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(n);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const r=n[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$c=Math.PI/180,kd=180/Math.PI;function cl(){const a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rn[a&255]+Rn[a>>8&255]+Rn[a>>16&255]+Rn[a>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[n&63|128]+Rn[n>>8&255]+"-"+Rn[n>>16&255]+Rn[n>>24&255]+Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]).toLowerCase()}function ge(a,t,n){return Math.max(t,Math.min(n,a))}function BM(a,t){return(a%t+t)%t}function bh(a,t,n){return(1-n)*a+n*t}function Yo(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Gn(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const zM={DEG2RAD:$c};class ue{constructor(t=0,n=0){ue.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,r=this.y,l=t.elements;return this.x=l[0]*n+l[3]*r+l[6],this.y=l[1]*n+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ge(this.x,t.x,n.x),this.y=ge(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ge(this.x,t,n),this.y=ge(this.y,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ge(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(t)/n;return Math.acos(ge(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,r=this.y-t.y;return n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const r=Math.cos(n),l=Math.sin(n),c=this.x-t.x,f=this.y-t.y;return this.x=c*r-f*l+t.x,this.y=c*l+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ce{constructor(t,n,r,l,c,f,h,p,m){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,l,c,f,h,p,m)}set(t,n,r,l,c,f,h,p,m){const _=this.elements;return _[0]=t,_[1]=l,_[2]=h,_[3]=n,_[4]=c,_[5]=p,_[6]=r,_[7]=f,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,r=t.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(t,n,r){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const r=t.elements,l=n.elements,c=this.elements,f=r[0],h=r[3],p=r[6],m=r[1],_=r[4],y=r[7],v=r[2],x=r[5],M=r[8],T=l[0],S=l[3],g=l[6],L=l[1],U=l[4],D=l[7],I=l[2],B=l[5],z=l[8];return c[0]=f*T+h*L+p*I,c[3]=f*S+h*U+p*B,c[6]=f*g+h*D+p*z,c[1]=m*T+_*L+y*I,c[4]=m*S+_*U+y*B,c[7]=m*g+_*D+y*z,c[2]=v*T+x*L+M*I,c[5]=v*S+x*U+M*B,c[8]=v*g+x*D+M*z,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],r=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],_=t[8];return n*f*_-n*h*m-r*c*_+r*h*p+l*c*m-l*f*p}invert(){const t=this.elements,n=t[0],r=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],_=t[8],y=_*f-h*m,v=h*p-_*c,x=m*c-f*p,M=n*y+r*v+l*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return t[0]=y*T,t[1]=(l*m-_*r)*T,t[2]=(h*r-l*f)*T,t[3]=v*T,t[4]=(_*n-l*p)*T,t[5]=(l*c-h*n)*T,t[6]=x*T,t[7]=(r*p-m*n)*T,t[8]=(f*n-r*c)*T,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,r,l,c,f,h){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*f+m*h)+f+t,-l*m,l*p,-l*(-m*f+p*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(Ah.makeScale(t,n)),this}rotate(t){return this.premultiply(Ah.makeRotation(-t)),this}translate(t,n){return this.premultiply(Ah.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,r=t.elements;for(let l=0;l<9;l++)if(n[l]!==r[l])return!1;return!0}fromArray(t,n=0){for(let r=0;r<9;r++)this.elements[r]=t[r+n];return this}toArray(t=[],n=0){const r=this.elements;return t[n]=r[0],t[n+1]=r[1],t[n+2]=r[2],t[n+3]=r[3],t[n+4]=r[4],t[n+5]=r[5],t[n+6]=r[6],t[n+7]=r[7],t[n+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ah=new ce;function V0(a){for(let t=a.length-1;t>=0;--t)if(a[t]>=65535)return!0;return!1}function au(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function FM(){const a=au("canvas");return a.style.display="block",a}const $_={};function Er(a){a in $_||($_[a]=!0,console.warn(a))}function HM(a,t,n){return new Promise(function(r,l){function c(){switch(a.clientWaitSync(t,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:l();break;case a.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}function GM(a){const t=a.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function VM(a){const t=a.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const J_=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tv=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kM(){const a={enabled:!0,workingColorSpace:Gs,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ie&&(l.r=fa(l.r),l.g=fa(l.g),l.b=fa(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ie&&(l.r=Ps(l.r),l.g=Ps(l.g),l.b=Ps(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Xa?nu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[Gs]:{primaries:t,whitePoint:r,transfer:nu,toXYZ:J_,fromXYZ:tv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:t,whitePoint:r,transfer:Ie,toXYZ:J_,fromXYZ:tv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),a}const we=kM();function fa(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Ps(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let ps;class XM{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ps===void 0&&(ps=au("canvas")),ps.width=t.width,ps.height=t.height;const r=ps.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=ps}return n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=au("canvas");n.width=t.width,n.height=t.height;const r=n.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=fa(c[f]/255)*255;return r.putImageData(l,0,0),n}else if(t.data){const n=t.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(fa(n[r]/255)*255):n[r]=fa(n[r]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let WM=0;class rp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:WM++}),this.uuid=cl(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Rh(l[f].image)):c.push(Rh(l[f]))}else c=Rh(l);r.url=c}return n||(t.images[this.uuid]=r),r}}function Rh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?XM.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let YM=0;class Xn extends Or{constructor(t=Xn.DEFAULT_IMAGE,n=Xn.DEFAULT_MAPPING,r=Ar,l=Ar,c=Ui,f=Rr,h=Si,p=da,m=Xn.DEFAULT_ANISOTROPY,_=Xa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:YM++}),this.uuid=cl(),this.name="",this.source=new rp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==w0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case md:t.x=t.x-Math.floor(t.x);break;case Ar:t.x=t.x<0?0:1;break;case gd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case md:t.y=t.y-Math.floor(t.y);break;case Ar:t.y=t.y<0?0:1;break;case gd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=w0;Xn.DEFAULT_ANISOTROPY=1;class Qe{constructor(t=0,n=0,r=0,l=1){Qe.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,r,l){return this.x=t,this.y=n,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,r=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*n+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*n+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*n+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*n+f[7]*r+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,r,l,c;const p=t.elements,m=p[0],_=p[4],y=p[8],v=p[1],x=p[5],M=p[9],T=p[2],S=p[6],g=p[10];if(Math.abs(_-v)<.01&&Math.abs(y-T)<.01&&Math.abs(M-S)<.01){if(Math.abs(_+v)<.1&&Math.abs(y+T)<.1&&Math.abs(M+S)<.1&&Math.abs(m+x+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(m+1)/2,D=(x+1)/2,I=(g+1)/2,B=(_+v)/4,z=(y+T)/4,q=(M+S)/4;return U>D&&U>I?U<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(U),l=B/r,c=z/r):D>I?D<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),r=B/l,c=q/l):I<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),r=z/c,l=q/c),this.set(r,l,c,n),this}let L=Math.sqrt((S-M)*(S-M)+(y-T)*(y-T)+(v-_)*(v-_));return Math.abs(L)<.001&&(L=1),this.x=(S-M)/L,this.y=(y-T)/L,this.z=(v-_)/L,this.w=Math.acos((m+x+g-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ge(this.x,t.x,n.x),this.y=ge(this.y,t.y,n.y),this.z=ge(this.z,t.z,n.z),this.w=ge(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ge(this.x,t,n),this.y=ge(this.y,t,n),this.z=ge(this.z,t,n),this.w=ge(this.w,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ge(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this.w=t.w+(n.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qM extends Or{constructor(t=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new Qe(0,0,t,n),this.scissorTest=!1,this.viewport=new Qe(0,0,t,n);const l={width:t,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Xn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,r=1){if(this.width!==t||this.height!==n||this.depth!==r){this.width=t,this.height=n,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=n,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const l=Object.assign({},t.textures[n].image);this.textures[n].source=new rp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dr extends qM{constructor(t=1,n=1,r={}){super(t,n,r),this.isWebGLRenderTarget=!0}}class k0 extends Xn{constructor(t=null,n=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:r,depth:l},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class jM extends Xn{constructor(t=null,n=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:r,depth:l},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ur{constructor(t=0,n=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=r,this._w=l}static slerpFlat(t,n,r,l,c,f,h){let p=r[l+0],m=r[l+1],_=r[l+2],y=r[l+3];const v=c[f+0],x=c[f+1],M=c[f+2],T=c[f+3];if(h===0){t[n+0]=p,t[n+1]=m,t[n+2]=_,t[n+3]=y;return}if(h===1){t[n+0]=v,t[n+1]=x,t[n+2]=M,t[n+3]=T;return}if(y!==T||p!==v||m!==x||_!==M){let S=1-h;const g=p*v+m*x+_*M+y*T,L=g>=0?1:-1,U=1-g*g;if(U>Number.EPSILON){const I=Math.sqrt(U),B=Math.atan2(I,g*L);S=Math.sin(S*B)/I,h=Math.sin(h*B)/I}const D=h*L;if(p=p*S+v*D,m=m*S+x*D,_=_*S+M*D,y=y*S+T*D,S===1-h){const I=1/Math.sqrt(p*p+m*m+_*_+y*y);p*=I,m*=I,_*=I,y*=I}}t[n]=p,t[n+1]=m,t[n+2]=_,t[n+3]=y}static multiplyQuaternionsFlat(t,n,r,l,c,f){const h=r[l],p=r[l+1],m=r[l+2],_=r[l+3],y=c[f],v=c[f+1],x=c[f+2],M=c[f+3];return t[n]=h*M+_*y+p*x-m*v,t[n+1]=p*M+_*v+m*y-h*x,t[n+2]=m*M+_*x+h*v-p*y,t[n+3]=_*M-h*y-p*v-m*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,r,l){return this._x=t,this._y=n,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const r=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,p=Math.sin,m=h(r/2),_=h(l/2),y=h(c/2),v=p(r/2),x=p(l/2),M=p(c/2);switch(f){case"XYZ":this._x=v*_*y+m*x*M,this._y=m*x*y-v*_*M,this._z=m*_*M+v*x*y,this._w=m*_*y-v*x*M;break;case"YXZ":this._x=v*_*y+m*x*M,this._y=m*x*y-v*_*M,this._z=m*_*M-v*x*y,this._w=m*_*y+v*x*M;break;case"ZXY":this._x=v*_*y-m*x*M,this._y=m*x*y+v*_*M,this._z=m*_*M+v*x*y,this._w=m*_*y-v*x*M;break;case"ZYX":this._x=v*_*y-m*x*M,this._y=m*x*y+v*_*M,this._z=m*_*M-v*x*y,this._w=m*_*y+v*x*M;break;case"YZX":this._x=v*_*y+m*x*M,this._y=m*x*y+v*_*M,this._z=m*_*M-v*x*y,this._w=m*_*y-v*x*M;break;case"XZY":this._x=v*_*y-m*x*M,this._y=m*x*y-v*_*M,this._z=m*_*M+v*x*y,this._w=m*_*y+v*x*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const r=n/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,r=n[0],l=n[4],c=n[8],f=n[1],h=n[5],p=n[9],m=n[2],_=n[6],y=n[10],v=r+h+y;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(_-p)*x,this._y=(c-m)*x,this._z=(f-l)*x}else if(r>h&&r>y){const x=2*Math.sqrt(1+r-h-y);this._w=(_-p)/x,this._x=.25*x,this._y=(l+f)/x,this._z=(c+m)/x}else if(h>y){const x=2*Math.sqrt(1+h-r-y);this._w=(c-m)/x,this._x=(l+f)/x,this._y=.25*x,this._z=(p+_)/x}else{const x=2*Math.sqrt(1+y-r-h);this._w=(f-l)/x,this._x=(c+m)/x,this._y=(p+_)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let r=t.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ge(this.dot(t),-1,1)))}rotateTowards(t,n){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,n/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const r=t._x,l=t._y,c=t._z,f=t._w,h=n._x,p=n._y,m=n._z,_=n._w;return this._x=r*_+f*h+l*m-c*p,this._y=l*_+f*p+c*h-r*m,this._z=c*_+f*m+r*p-l*h,this._w=f*_-r*h-l*p-c*m,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,f=this._w;let h=f*t._w+r*t._x+l*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=r,this._y=l,this._z=c,this;const p=1-h*h;if(p<=Number.EPSILON){const x=1-n;return this._w=x*f+n*this._w,this._x=x*r+n*this._x,this._y=x*l+n*this._y,this._z=x*c+n*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,h),y=Math.sin((1-n)*_)/m,v=Math.sin(n*_)/m;return this._w=f*y+this._w*v,this._x=r*y+this._x*v,this._y=l*y+this._y*v,this._z=c*y+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,n,r){return this.copy(t).slerp(n,r)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(t=0,n=0,r=0){J.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(t,n,r){return r===void 0&&(r=this.z),this.x=t,this.y=n,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(ev.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(ev.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[3]*r+c[6]*l,this.y=c[1]*n+c[4]*r+c[7]*l,this.z=c[2]*n+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,r=this.y,l=this.z,c=t.elements,f=1/(c[3]*n+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*n+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*n+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(t){const n=this.x,r=this.y,l=this.z,c=t.x,f=t.y,h=t.z,p=t.w,m=2*(f*l-h*r),_=2*(h*n-c*l),y=2*(c*r-f*n);return this.x=n+p*m+f*y-h*_,this.y=r+p*_+h*m-c*y,this.z=l+p*y+c*_-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[4]*r+c[8]*l,this.y=c[1]*n+c[5]*r+c[9]*l,this.z=c[2]*n+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ge(this.x,t.x,n.x),this.y=ge(this.y,t.y,n.y),this.z=ge(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ge(this.x,t,n),this.y=ge(this.y,t,n),this.z=ge(this.z,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ge(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const r=t.x,l=t.y,c=t.z,f=n.x,h=n.y,p=n.z;return this.x=l*p-c*h,this.y=c*f-r*p,this.z=r*h-l*f,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const r=t.dot(this)/n;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Ch.copy(this).projectOnVector(t),this.sub(Ch)}reflect(t){return this.sub(Ch.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(t)/n;return Math.acos(ge(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return n*n+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,r){const l=Math.sin(n)*t;return this.x=l*Math.sin(r),this.y=Math.cos(n)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,r){return this.x=t*Math.sin(n),this.y=r,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=r,this.z=l,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(t),this.y=n,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ch=new J,ev=new Ur;class ul{constructor(t=new J(1/0,1/0,1/0),n=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,r=t.length;n<r;n+=3)this.expandByPoint(_i.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,r=t.count;n<r;n++)this.expandByPoint(_i.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,r=t.length;n<r;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const r=_i.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,_i):_i.fromBufferAttribute(c,f),_i.applyMatrix4(t.matrixWorld),this.expandByPoint(_i);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Sc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Sc.copy(r.boundingBox)),Sc.applyMatrix4(t.matrixWorld),this.union(Sc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_i),_i.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,r;return t.normal.x>0?(n=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),n<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qo),Ec.subVectors(this.max,qo),ms.subVectors(t.a,qo),gs.subVectors(t.b,qo),_s.subVectors(t.c,qo),Ia.subVectors(gs,ms),Ba.subVectors(_s,gs),gr.subVectors(ms,_s);let n=[0,-Ia.z,Ia.y,0,-Ba.z,Ba.y,0,-gr.z,gr.y,Ia.z,0,-Ia.x,Ba.z,0,-Ba.x,gr.z,0,-gr.x,-Ia.y,Ia.x,0,-Ba.y,Ba.x,0,-gr.y,gr.x,0];return!wh(n,ms,gs,_s,Ec)||(n=[1,0,0,0,1,0,0,0,1],!wh(n,ms,gs,_s,Ec))?!1:(Mc.crossVectors(Ia,Ba),n=[Mc.x,Mc.y,Mc.z],wh(n,ms,gs,_s,Ec))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_i).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_i).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ea[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ea[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ea[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ea[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ea[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ea[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ea[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ea[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ea),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ea=[new J,new J,new J,new J,new J,new J,new J,new J],_i=new J,Sc=new ul,ms=new J,gs=new J,_s=new J,Ia=new J,Ba=new J,gr=new J,qo=new J,Ec=new J,Mc=new J,_r=new J;function wh(a,t,n,r,l){for(let c=0,f=a.length-3;c<=f;c+=3){_r.fromArray(a,c);const h=l.x*Math.abs(_r.x)+l.y*Math.abs(_r.y)+l.z*Math.abs(_r.z),p=t.dot(_r),m=n.dot(_r),_=r.dot(_r);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>h)return!1}return!0}const ZM=new ul,jo=new J,Dh=new J;class uu{constructor(t=new J,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const r=this.center;n!==void 0?r.copy(n):ZM.setFromPoints(t).getCenter(r);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const r=this.center.distanceToSquared(t);return n.copy(t),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;jo.subVectors(t,this.center);const n=jo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),l=(r-this.radius)*.5;this.center.addScaledVector(jo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Dh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(jo.copy(t.center).add(Dh)),this.expandByPoint(jo.copy(t.center).sub(Dh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const na=new J,Uh=new J,Tc=new J,za=new J,Lh=new J,bc=new J,Nh=new J;class sp{constructor(t=new J,n=new J(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,na)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=na.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(na.copy(this.origin).addScaledVector(this.direction,n),na.distanceToSquared(t))}distanceSqToSegment(t,n,r,l){Uh.copy(t).add(n).multiplyScalar(.5),Tc.copy(n).sub(t).normalize(),za.copy(this.origin).sub(Uh);const c=t.distanceTo(n)*.5,f=-this.direction.dot(Tc),h=za.dot(this.direction),p=-za.dot(Tc),m=za.lengthSq(),_=Math.abs(1-f*f);let y,v,x,M;if(_>0)if(y=f*p-h,v=f*h-p,M=c*_,y>=0)if(v>=-M)if(v<=M){const T=1/_;y*=T,v*=T,x=y*(y+f*v+2*h)+v*(f*y+v+2*p)+m}else v=c,y=Math.max(0,-(f*v+h)),x=-y*y+v*(v+2*p)+m;else v=-c,y=Math.max(0,-(f*v+h)),x=-y*y+v*(v+2*p)+m;else v<=-M?(y=Math.max(0,-(-f*c+h)),v=y>0?-c:Math.min(Math.max(-c,-p),c),x=-y*y+v*(v+2*p)+m):v<=M?(y=0,v=Math.min(Math.max(-c,-p),c),x=v*(v+2*p)+m):(y=Math.max(0,-(f*c+h)),v=y>0?c:Math.min(Math.max(-c,-p),c),x=-y*y+v*(v+2*p)+m);else v=f>0?-c:c,y=Math.max(0,-(f*v+h)),x=-y*y+v*(v+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),l&&l.copy(Uh).addScaledVector(Tc,v),x}intersectSphere(t,n){na.subVectors(t.center,this.origin);const r=na.dot(this.direction),l=na.dot(na)-r*r,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=r-f,p=r+f;return p<0?null:h<0?this.at(p,n):this.at(h,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/n;return r>=0?r:null}intersectPlane(t,n){const r=this.distanceToPlane(t);return r===null?null:this.at(r,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let r,l,c,f,h,p;const m=1/this.direction.x,_=1/this.direction.y,y=1/this.direction.z,v=this.origin;return m>=0?(r=(t.min.x-v.x)*m,l=(t.max.x-v.x)*m):(r=(t.max.x-v.x)*m,l=(t.min.x-v.x)*m),_>=0?(c=(t.min.y-v.y)*_,f=(t.max.y-v.y)*_):(c=(t.max.y-v.y)*_,f=(t.min.y-v.y)*_),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),y>=0?(h=(t.min.z-v.z)*y,p=(t.max.z-v.z)*y):(h=(t.max.z-v.z)*y,p=(t.min.z-v.z)*y),r>p||h>l)||((h>r||r!==r)&&(r=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,n)}intersectsBox(t){return this.intersectBox(t,na)!==null}intersectTriangle(t,n,r,l,c){Lh.subVectors(n,t),bc.subVectors(r,t),Nh.crossVectors(Lh,bc);let f=this.direction.dot(Nh),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;za.subVectors(this.origin,t);const p=h*this.direction.dot(bc.crossVectors(za,bc));if(p<0)return null;const m=h*this.direction.dot(Lh.cross(za));if(m<0||p+m>f)return null;const _=-h*za.dot(Nh);return _<0?null:this.at(_/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(t,n,r,l,c,f,h,p,m,_,y,v,x,M,T,S){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,l,c,f,h,p,m,_,y,v,x,M,T,S)}set(t,n,r,l,c,f,h,p,m,_,y,v,x,M,T,S){const g=this.elements;return g[0]=t,g[4]=n,g[8]=r,g[12]=l,g[1]=c,g[5]=f,g[9]=h,g[13]=p,g[2]=m,g[6]=_,g[10]=y,g[14]=v,g[3]=x,g[7]=M,g[11]=T,g[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(t){const n=this.elements,r=t.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(t){const n=this.elements,r=t.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,r){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,n,r){return this.set(t.x,n.x,r.x,0,t.y,n.y,r.y,0,t.z,n.z,r.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,r=t.elements,l=1/vs.setFromMatrixColumn(t,0).length(),c=1/vs.setFromMatrixColumn(t,1).length(),f=1/vs.setFromMatrixColumn(t,2).length();return n[0]=r[0]*l,n[1]=r[1]*l,n[2]=r[2]*l,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,r=t.x,l=t.y,c=t.z,f=Math.cos(r),h=Math.sin(r),p=Math.cos(l),m=Math.sin(l),_=Math.cos(c),y=Math.sin(c);if(t.order==="XYZ"){const v=f*_,x=f*y,M=h*_,T=h*y;n[0]=p*_,n[4]=-p*y,n[8]=m,n[1]=x+M*m,n[5]=v-T*m,n[9]=-h*p,n[2]=T-v*m,n[6]=M+x*m,n[10]=f*p}else if(t.order==="YXZ"){const v=p*_,x=p*y,M=m*_,T=m*y;n[0]=v+T*h,n[4]=M*h-x,n[8]=f*m,n[1]=f*y,n[5]=f*_,n[9]=-h,n[2]=x*h-M,n[6]=T+v*h,n[10]=f*p}else if(t.order==="ZXY"){const v=p*_,x=p*y,M=m*_,T=m*y;n[0]=v-T*h,n[4]=-f*y,n[8]=M+x*h,n[1]=x+M*h,n[5]=f*_,n[9]=T-v*h,n[2]=-f*m,n[6]=h,n[10]=f*p}else if(t.order==="ZYX"){const v=f*_,x=f*y,M=h*_,T=h*y;n[0]=p*_,n[4]=M*m-x,n[8]=v*m+T,n[1]=p*y,n[5]=T*m+v,n[9]=x*m-M,n[2]=-m,n[6]=h*p,n[10]=f*p}else if(t.order==="YZX"){const v=f*p,x=f*m,M=h*p,T=h*m;n[0]=p*_,n[4]=T-v*y,n[8]=M*y+x,n[1]=y,n[5]=f*_,n[9]=-h*_,n[2]=-m*_,n[6]=x*y+M,n[10]=v-T*y}else if(t.order==="XZY"){const v=f*p,x=f*m,M=h*p,T=h*m;n[0]=p*_,n[4]=-y,n[8]=m*_,n[1]=v*y+T,n[5]=f*_,n[9]=x*y-M,n[2]=M*y-x,n[6]=h*_,n[10]=T*y+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(KM,t,QM)}lookAt(t,n,r){const l=this.elements;return Qn.subVectors(t,n),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Fa.crossVectors(r,Qn),Fa.lengthSq()===0&&(Math.abs(r.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Fa.crossVectors(r,Qn)),Fa.normalize(),Ac.crossVectors(Qn,Fa),l[0]=Fa.x,l[4]=Ac.x,l[8]=Qn.x,l[1]=Fa.y,l[5]=Ac.y,l[9]=Qn.y,l[2]=Fa.z,l[6]=Ac.z,l[10]=Qn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const r=t.elements,l=n.elements,c=this.elements,f=r[0],h=r[4],p=r[8],m=r[12],_=r[1],y=r[5],v=r[9],x=r[13],M=r[2],T=r[6],S=r[10],g=r[14],L=r[3],U=r[7],D=r[11],I=r[15],B=l[0],z=l[4],q=l[8],w=l[12],A=l[1],H=l[5],ct=l[9],at=l[13],gt=l[2],dt=l[6],W=l[10],rt=l[14],Z=l[3],St=l[7],O=l[11],it=l[15];return c[0]=f*B+h*A+p*gt+m*Z,c[4]=f*z+h*H+p*dt+m*St,c[8]=f*q+h*ct+p*W+m*O,c[12]=f*w+h*at+p*rt+m*it,c[1]=_*B+y*A+v*gt+x*Z,c[5]=_*z+y*H+v*dt+x*St,c[9]=_*q+y*ct+v*W+x*O,c[13]=_*w+y*at+v*rt+x*it,c[2]=M*B+T*A+S*gt+g*Z,c[6]=M*z+T*H+S*dt+g*St,c[10]=M*q+T*ct+S*W+g*O,c[14]=M*w+T*at+S*rt+g*it,c[3]=L*B+U*A+D*gt+I*Z,c[7]=L*z+U*H+D*dt+I*St,c[11]=L*q+U*ct+D*W+I*O,c[15]=L*w+U*at+D*rt+I*it,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],r=t[4],l=t[8],c=t[12],f=t[1],h=t[5],p=t[9],m=t[13],_=t[2],y=t[6],v=t[10],x=t[14],M=t[3],T=t[7],S=t[11],g=t[15];return M*(+c*p*y-l*m*y-c*h*v+r*m*v+l*h*x-r*p*x)+T*(+n*p*x-n*m*v+c*f*v-l*f*x+l*m*_-c*p*_)+S*(+n*m*y-n*h*x-c*f*y+r*f*x+c*h*_-r*m*_)+g*(-l*h*_-n*p*y+n*h*v+l*f*y-r*f*v+r*p*_)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=n,l[14]=r),this}invert(){const t=this.elements,n=t[0],r=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],_=t[8],y=t[9],v=t[10],x=t[11],M=t[12],T=t[13],S=t[14],g=t[15],L=y*S*m-T*v*m+T*p*x-h*S*x-y*p*g+h*v*g,U=M*v*m-_*S*m-M*p*x+f*S*x+_*p*g-f*v*g,D=_*T*m-M*y*m+M*h*x-f*T*x-_*h*g+f*y*g,I=M*y*p-_*T*p-M*h*v+f*T*v+_*h*S-f*y*S,B=n*L+r*U+l*D+c*I;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/B;return t[0]=L*z,t[1]=(T*v*c-y*S*c-T*l*x+r*S*x+y*l*g-r*v*g)*z,t[2]=(h*S*c-T*p*c+T*l*m-r*S*m-h*l*g+r*p*g)*z,t[3]=(y*p*c-h*v*c-y*l*m+r*v*m+h*l*x-r*p*x)*z,t[4]=U*z,t[5]=(_*S*c-M*v*c+M*l*x-n*S*x-_*l*g+n*v*g)*z,t[6]=(M*p*c-f*S*c-M*l*m+n*S*m+f*l*g-n*p*g)*z,t[7]=(f*v*c-_*p*c+_*l*m-n*v*m-f*l*x+n*p*x)*z,t[8]=D*z,t[9]=(M*y*c-_*T*c-M*r*x+n*T*x+_*r*g-n*y*g)*z,t[10]=(f*T*c-M*h*c+M*r*m-n*T*m-f*r*g+n*h*g)*z,t[11]=(_*h*c-f*y*c-_*r*m+n*y*m+f*r*x-n*h*x)*z,t[12]=I*z,t[13]=(_*T*l-M*y*l+M*r*v-n*T*v-_*r*S+n*y*S)*z,t[14]=(M*h*l-f*T*l-M*r*p+n*T*p+f*r*S-n*h*S)*z,t[15]=(f*y*l-_*h*l+_*r*p-n*y*p-f*r*v+n*h*v)*z,this}scale(t){const n=this.elements,r=t.x,l=t.y,c=t.z;return n[0]*=r,n[4]*=l,n[8]*=c,n[1]*=r,n[5]*=l,n[9]*=c,n[2]*=r,n[6]*=l,n[10]*=c,n[3]*=r,n[7]*=l,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,r,l))}makeTranslation(t,n,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const r=Math.cos(n),l=Math.sin(n),c=1-r,f=t.x,h=t.y,p=t.z,m=c*f,_=c*h;return this.set(m*f+r,m*h-l*p,m*p+l*h,0,m*h+l*p,_*h+r,_*p-l*f,0,m*p-l*h,_*p+l*f,c*p*p+r,0,0,0,0,1),this}makeScale(t,n,r){return this.set(t,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,n,r,l,c,f){return this.set(1,r,c,0,t,1,f,0,n,l,1,0,0,0,0,1),this}compose(t,n,r){const l=this.elements,c=n._x,f=n._y,h=n._z,p=n._w,m=c+c,_=f+f,y=h+h,v=c*m,x=c*_,M=c*y,T=f*_,S=f*y,g=h*y,L=p*m,U=p*_,D=p*y,I=r.x,B=r.y,z=r.z;return l[0]=(1-(T+g))*I,l[1]=(x+D)*I,l[2]=(M-U)*I,l[3]=0,l[4]=(x-D)*B,l[5]=(1-(v+g))*B,l[6]=(S+L)*B,l[7]=0,l[8]=(M+U)*z,l[9]=(S-L)*z,l[10]=(1-(v+T))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,n,r){const l=this.elements;let c=vs.set(l[0],l[1],l[2]).length();const f=vs.set(l[4],l[5],l[6]).length(),h=vs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],vi.copy(this);const m=1/c,_=1/f,y=1/h;return vi.elements[0]*=m,vi.elements[1]*=m,vi.elements[2]*=m,vi.elements[4]*=_,vi.elements[5]*=_,vi.elements[6]*=_,vi.elements[8]*=y,vi.elements[9]*=y,vi.elements[10]*=y,n.setFromRotationMatrix(vi),r.x=c,r.y=f,r.z=h,this}makePerspective(t,n,r,l,c,f,h=ca){const p=this.elements,m=2*c/(n-t),_=2*c/(r-l),y=(n+t)/(n-t),v=(r+l)/(r-l);let x,M;if(h===ca)x=-(f+c)/(f-c),M=-2*f*c/(f-c);else if(h===iu)x=-f/(f-c),M=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=_,p[9]=v,p[13]=0,p[2]=0,p[6]=0,p[10]=x,p[14]=M,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,r,l,c,f,h=ca){const p=this.elements,m=1/(n-t),_=1/(r-l),y=1/(f-c),v=(n+t)*m,x=(r+l)*_;let M,T;if(h===ca)M=(f+c)*y,T=-2*y;else if(h===iu)M=c*y,T=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-v,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-x,p[2]=0,p[6]=0,p[10]=T,p[14]=-M,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,r=t.elements;for(let l=0;l<16;l++)if(n[l]!==r[l])return!1;return!0}fromArray(t,n=0){for(let r=0;r<16;r++)this.elements[r]=t[r+n];return this}toArray(t=[],n=0){const r=this.elements;return t[n]=r[0],t[n+1]=r[1],t[n+2]=r[2],t[n+3]=r[3],t[n+4]=r[4],t[n+5]=r[5],t[n+6]=r[6],t[n+7]=r[7],t[n+8]=r[8],t[n+9]=r[9],t[n+10]=r[10],t[n+11]=r[11],t[n+12]=r[12],t[n+13]=r[13],t[n+14]=r[14],t[n+15]=r[15],t}}const vs=new J,vi=new Ye,KM=new J(0,0,0),QM=new J(1,1,1),Fa=new J,Ac=new J,Qn=new J,nv=new Ye,iv=new Ur;class Pi{constructor(t=0,n=0,r=0,l=Pi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,r,l=this._order){return this._x=t,this._y=n,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,r=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],p=l[1],m=l[5],_=l[9],y=l[2],v=l[6],x=l[10];switch(n){case"XYZ":this._y=Math.asin(ge(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,x),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-ge(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-y,c),this._z=0);break;case"ZXY":this._x=Math.asin(ge(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-y,x),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-ge(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(ge(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-y,c)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-ge(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,r){return nv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nv,n,r)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return iv.setFromEuler(this),this.setFromQuaternion(iv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pi.DEFAULT_ORDER="XYZ";class X0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let $M=0;const av=new J,ys=new Ur,ia=new Ye,Rc=new J,Zo=new J,JM=new J,tT=new Ur,rv=new J(1,0,0),sv=new J(0,1,0),ov=new J(0,0,1),lv={type:"added"},eT={type:"removed"},xs={type:"childadded",child:null},Oh={type:"childremoved",child:null};class Mn extends Or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$M++}),this.uuid=cl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const t=new J,n=new Pi,r=new Ur,l=new J(1,1,1);function c(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ye},normalMatrix:{value:new ce}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new X0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return ys.setFromAxisAngle(t,n),this.quaternion.multiply(ys),this}rotateOnWorldAxis(t,n){return ys.setFromAxisAngle(t,n),this.quaternion.premultiply(ys),this}rotateX(t){return this.rotateOnAxis(rv,t)}rotateY(t){return this.rotateOnAxis(sv,t)}rotateZ(t){return this.rotateOnAxis(ov,t)}translateOnAxis(t,n){return av.copy(t).applyQuaternion(this.quaternion),this.position.add(av.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(rv,t)}translateY(t){return this.translateOnAxis(sv,t)}translateZ(t){return this.translateOnAxis(ov,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ia.copy(this.matrixWorld).invert())}lookAt(t,n,r){t.isVector3?Rc.copy(t):Rc.set(t,n,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ia.lookAt(Zo,Rc,this.up):ia.lookAt(Rc,Zo,this.up),this.quaternion.setFromRotationMatrix(ia),l&&(ia.extractRotation(l.matrixWorld),ys.setFromRotationMatrix(ia),this.quaternion.premultiply(ys.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lv),xs.child=t,this.dispatchEvent(xs),xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(eT),Oh.child=t,this.dispatchEvent(Oh),Oh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ia.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ia.multiply(t.parent.matrixWorld)),t.applyMatrix4(ia),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lv),xs.child=t,this.dispatchEvent(xs),xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(t,n);if(f!==void 0)return f}}getObjectsByProperty(t,n,r=[]){this[t]===n&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,n,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,t,JM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,tT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let r=0,l=n.length;r<l;r++)n[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let r=0,l=n.length;r<l;r++)n[r].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let r=0,l=n.length;r<l;r++)n[r].updateMatrixWorld(t)}updateWorldMatrix(t,n){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",r={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const y=p[m];c(t.shapes,y)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(c(t.materials,this.material[p]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(c(t.animations,p))}}if(n){const h=f(t.geometries),p=f(t.materials),m=f(t.textures),_=f(t.images),y=f(t.shapes),v=f(t.skeletons),x=f(t.animations),M=f(t.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),y.length>0&&(r.shapes=y),v.length>0&&(r.skeletons=v),x.length>0&&(r.animations=x),M.length>0&&(r.nodes=M)}return r.object=l,r;function f(h){const p=[];for(const m in h){const _=h[m];delete _.metadata,p.push(_)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Mn.DEFAULT_UP=new J(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new J,aa=new J,Ph=new J,ra=new J,Ss=new J,Es=new J,cv=new J,Ih=new J,Bh=new J,zh=new J,Fh=new Qe,Hh=new Qe,Gh=new Qe;class xi{constructor(t=new J,n=new J,r=new J){this.a=t,this.b=n,this.c=r}static getNormal(t,n,r,l){l.subVectors(r,n),yi.subVectors(t,n),l.cross(yi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,n,r,l,c){yi.subVectors(l,n),aa.subVectors(r,n),Ph.subVectors(t,n);const f=yi.dot(yi),h=yi.dot(aa),p=yi.dot(Ph),m=aa.dot(aa),_=aa.dot(Ph),y=f*m-h*h;if(y===0)return c.set(0,0,0),null;const v=1/y,x=(m*p-h*_)*v,M=(f*_-h*p)*v;return c.set(1-x-M,M,x)}static containsPoint(t,n,r,l){return this.getBarycoord(t,n,r,l,ra)===null?!1:ra.x>=0&&ra.y>=0&&ra.x+ra.y<=1}static getInterpolation(t,n,r,l,c,f,h,p){return this.getBarycoord(t,n,r,l,ra)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,ra.x),p.addScaledVector(f,ra.y),p.addScaledVector(h,ra.z),p)}static getInterpolatedAttribute(t,n,r,l,c,f){return Fh.setScalar(0),Hh.setScalar(0),Gh.setScalar(0),Fh.fromBufferAttribute(t,n),Hh.fromBufferAttribute(t,r),Gh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Fh,c.x),f.addScaledVector(Hh,c.y),f.addScaledVector(Gh,c.z),f}static isFrontFacing(t,n,r,l){return yi.subVectors(r,n),aa.subVectors(t,n),yi.cross(aa).dot(l)<0}set(t,n,r){return this.a.copy(t),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(t,n,r,l){return this.a.copy(t[n]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,n,r,l){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yi.subVectors(this.c,this.b),aa.subVectors(this.a,this.b),yi.cross(aa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return xi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,l,c){return xi.getInterpolation(t,this.a,this.b,this.c,n,r,l,c)}containsPoint(t){return xi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const r=this.a,l=this.b,c=this.c;let f,h;Ss.subVectors(l,r),Es.subVectors(c,r),Ih.subVectors(t,r);const p=Ss.dot(Ih),m=Es.dot(Ih);if(p<=0&&m<=0)return n.copy(r);Bh.subVectors(t,l);const _=Ss.dot(Bh),y=Es.dot(Bh);if(_>=0&&y<=_)return n.copy(l);const v=p*y-_*m;if(v<=0&&p>=0&&_<=0)return f=p/(p-_),n.copy(r).addScaledVector(Ss,f);zh.subVectors(t,c);const x=Ss.dot(zh),M=Es.dot(zh);if(M>=0&&x<=M)return n.copy(c);const T=x*m-p*M;if(T<=0&&m>=0&&M<=0)return h=m/(m-M),n.copy(r).addScaledVector(Es,h);const S=_*M-x*y;if(S<=0&&y-_>=0&&x-M>=0)return cv.subVectors(c,l),h=(y-_)/(y-_+(x-M)),n.copy(l).addScaledVector(cv,h);const g=1/(S+T+v);return f=T*g,h=v*g,n.copy(r).addScaledVector(Ss,f).addScaledVector(Es,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const W0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ha={h:0,s:0,l:0},Cc={h:0,s:0,l:0};function Vh(a,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(t-a)*6*n:n<1/2?t:n<2/3?a+(t-a)*6*(2/3-n):a}class Me{constructor(t,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,r)}set(t,n,r){if(n===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,n,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=ui){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.toWorkingColorSpace(this,n),this}setRGB(t,n,r,l=we.workingColorSpace){return this.r=t,this.g=n,this.b=r,we.toWorkingColorSpace(this,l),this}setHSL(t,n,r,l=we.workingColorSpace){if(t=BM(t,1),n=ge(n,0,1),r=ge(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,f=2*r-c;this.r=Vh(f,c,t+1/3),this.g=Vh(f,c,t),this.b=Vh(f,c,t-1/3)}return we.toWorkingColorSpace(this,l),this}setStyle(t,n=ui){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=ui){const r=W0[t.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fa(t.r),this.g=fa(t.g),this.b=fa(t.b),this}copyLinearToSRGB(t){return this.r=Ps(t.r),this.g=Ps(t.g),this.b=Ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ui){return we.fromWorkingColorSpace(Cn.copy(this),t),Math.round(ge(Cn.r*255,0,255))*65536+Math.round(ge(Cn.g*255,0,255))*256+Math.round(ge(Cn.b*255,0,255))}getHexString(t=ui){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=we.workingColorSpace){we.fromWorkingColorSpace(Cn.copy(this),n);const r=Cn.r,l=Cn.g,c=Cn.b,f=Math.max(r,l,c),h=Math.min(r,l,c);let p,m;const _=(h+f)/2;if(h===f)p=0,m=0;else{const y=f-h;switch(m=_<=.5?y/(f+h):y/(2-f-h),f){case r:p=(l-c)/y+(l<c?6:0);break;case l:p=(c-r)/y+2;break;case c:p=(r-l)/y+4;break}p/=6}return t.h=p,t.s=m,t.l=_,t}getRGB(t,n=we.workingColorSpace){return we.fromWorkingColorSpace(Cn.copy(this),n),t.r=Cn.r,t.g=Cn.g,t.b=Cn.b,t}getStyle(t=ui){we.fromWorkingColorSpace(Cn.copy(this),t);const n=Cn.r,r=Cn.g,l=Cn.b;return t!==ui?`color(${t} ${n.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,n,r){return this.getHSL(Ha),this.setHSL(Ha.h+t,Ha.s+n,Ha.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,r){return this.r=t.r+(n.r-t.r)*r,this.g=t.g+(n.g-t.g)*r,this.b=t.b+(n.b-t.b)*r,this}lerpHSL(t,n){this.getHSL(Ha),t.getHSL(Cc);const r=bh(Ha.h,Cc.h,n),l=bh(Ha.s,Cc.s,n),c=bh(Ha.l,Cc.l,n);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*n+c[3]*r+c[6]*l,this.g=c[1]*n+c[4]*r+c[7]*l,this.b=c[2]*n+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Me;Me.NAMES=W0;let nT=0;class Ws extends Or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nT++}),this.uuid=cl(),this.name="",this.type="Material",this.blending=Ns,this.side=ja,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ad,this.blendDst=rd,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Z_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const r=t[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[n]=r}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(r.blending=this.blending),this.side!==ja&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ad&&(r.blendSrc=this.blendSrc),this.blendDst!==rd&&(r.blendDst=this.blendDst),this.blendEquation!==Tr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Z_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const h in c){const p=c[h];delete p.metadata,f.push(p)}return f}if(n){const c=l(t.textures),f=l(t.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let r=null;if(n!==null){const l=n.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Y0 extends Ws{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=$d,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const nn=new J,wc=new ue;let iT=0;class Ni{constructor(t,n,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:iT++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=r,this.usage=K_,this.updateRanges=[],this.gpuType=la,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,r){t*=this.itemSize,r*=n.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=n.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)wc.fromBufferAttribute(this,n),wc.applyMatrix3(t),this.setXY(n,wc.x,wc.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)nn.fromBufferAttribute(this,n),nn.applyMatrix3(t),this.setXYZ(n,nn.x,nn.y,nn.z);return this}applyMatrix4(t){for(let n=0,r=this.count;n<r;n++)nn.fromBufferAttribute(this,n),nn.applyMatrix4(t),this.setXYZ(n,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let n=0,r=this.count;n<r;n++)nn.fromBufferAttribute(this,n),nn.applyNormalMatrix(t),this.setXYZ(n,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let n=0,r=this.count;n<r;n++)nn.fromBufferAttribute(this,n),nn.transformDirection(t),this.setXYZ(n,nn.x,nn.y,nn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let r=this.array[t*this.itemSize+n];return this.normalized&&(r=Yo(r,this.array)),r}setComponent(t,n,r){return this.normalized&&(r=Gn(r,this.array)),this.array[t*this.itemSize+n]=r,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Yo(n,this.array)),n}setX(t,n){return this.normalized&&(n=Gn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Yo(n,this.array)),n}setY(t,n){return this.normalized&&(n=Gn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Yo(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Gn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Yo(n,this.array)),n}setW(t,n){return this.normalized&&(n=Gn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,r){return t*=this.itemSize,this.normalized&&(n=Gn(n,this.array),r=Gn(r,this.array)),this.array[t+0]=n,this.array[t+1]=r,this}setXYZ(t,n,r,l){return t*=this.itemSize,this.normalized&&(n=Gn(n,this.array),r=Gn(r,this.array),l=Gn(l,this.array)),this.array[t+0]=n,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,n,r,l,c){return t*=this.itemSize,this.normalized&&(n=Gn(n,this.array),r=Gn(r,this.array),l=Gn(l,this.array),c=Gn(c,this.array)),this.array[t+0]=n,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==K_&&(t.usage=this.usage),t}}class q0 extends Ni{constructor(t,n,r){super(new Uint16Array(t),n,r)}}class j0 extends Ni{constructor(t,n,r){super(new Uint32Array(t),n,r)}}class Mi extends Ni{constructor(t,n,r){super(new Float32Array(t),n,r)}}let aT=0;const ci=new Ye,kh=new Mn,Ms=new J,$n=new ul,Ko=new ul,_n=new J;class Bi extends Or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:aT++}),this.uuid=cl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(V0(t)?j0:q0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,r=0){this.groups.push({start:t,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ce().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ci.makeRotationFromQuaternion(t),this.applyMatrix4(ci),this}rotateX(t){return ci.makeRotationX(t),this.applyMatrix4(ci),this}rotateY(t){return ci.makeRotationY(t),this.applyMatrix4(ci),this}rotateZ(t){return ci.makeRotationZ(t),this.applyMatrix4(ci),this}translate(t,n,r){return ci.makeTranslation(t,n,r),this.applyMatrix4(ci),this}scale(t,n,r){return ci.makeScale(t,n,r),this.applyMatrix4(ci),this}lookAt(t){return kh.lookAt(t),kh.updateMatrix(),this.applyMatrix4(kh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Mi(r,3))}else{const r=Math.min(t.length,n.count);for(let l=0;l<r;l++){const c=t[l];n.setXYZ(l,c.x,c.y,c.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ul);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let r=0,l=n.length;r<l;r++){const c=n[r];$n.setFromBufferAttribute(c),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uu);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(t),n)for(let c=0,f=n.length;c<f;c++){const h=n[c];Ko.setFromBufferAttribute(h),this.morphTargetsRelative?(_n.addVectors($n.min,Ko.min),$n.expandByPoint(_n),_n.addVectors($n.max,Ko.max),$n.expandByPoint(_n)):($n.expandByPoint(Ko.min),$n.expandByPoint(Ko.max))}$n.getCenter(r);let l=0;for(let c=0,f=t.count;c<f;c++)_n.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(_n));if(n)for(let c=0,f=n.length;c<f;c++){const h=n[c],p=this.morphTargetsRelative;for(let m=0,_=h.count;m<_;m++)_n.fromBufferAttribute(h,m),p&&(Ms.fromBufferAttribute(t,m),_n.add(Ms)),l=Math.max(l,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,l=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ni(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],p=[];for(let q=0;q<r.count;q++)h[q]=new J,p[q]=new J;const m=new J,_=new J,y=new J,v=new ue,x=new ue,M=new ue,T=new J,S=new J;function g(q,w,A){m.fromBufferAttribute(r,q),_.fromBufferAttribute(r,w),y.fromBufferAttribute(r,A),v.fromBufferAttribute(c,q),x.fromBufferAttribute(c,w),M.fromBufferAttribute(c,A),_.sub(m),y.sub(m),x.sub(v),M.sub(v);const H=1/(x.x*M.y-M.x*x.y);isFinite(H)&&(T.copy(_).multiplyScalar(M.y).addScaledVector(y,-x.y).multiplyScalar(H),S.copy(y).multiplyScalar(x.x).addScaledVector(_,-M.x).multiplyScalar(H),h[q].add(T),h[w].add(T),h[A].add(T),p[q].add(S),p[w].add(S),p[A].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let q=0,w=L.length;q<w;++q){const A=L[q],H=A.start,ct=A.count;for(let at=H,gt=H+ct;at<gt;at+=3)g(t.getX(at+0),t.getX(at+1),t.getX(at+2))}const U=new J,D=new J,I=new J,B=new J;function z(q){I.fromBufferAttribute(l,q),B.copy(I);const w=h[q];U.copy(w),U.sub(I.multiplyScalar(I.dot(w))).normalize(),D.crossVectors(B,w);const H=D.dot(p[q])<0?-1:1;f.setXYZW(q,U.x,U.y,U.z,H)}for(let q=0,w=L.length;q<w;++q){const A=L[q],H=A.start,ct=A.count;for(let at=H,gt=H+ct;at<gt;at+=3)z(t.getX(at+0)),z(t.getX(at+1)),z(t.getX(at+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ni(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let v=0,x=r.count;v<x;v++)r.setXYZ(v,0,0,0);const l=new J,c=new J,f=new J,h=new J,p=new J,m=new J,_=new J,y=new J;if(t)for(let v=0,x=t.count;v<x;v+=3){const M=t.getX(v+0),T=t.getX(v+1),S=t.getX(v+2);l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,T),f.fromBufferAttribute(n,S),_.subVectors(f,c),y.subVectors(l,c),_.cross(y),h.fromBufferAttribute(r,M),p.fromBufferAttribute(r,T),m.fromBufferAttribute(r,S),h.add(_),p.add(_),m.add(_),r.setXYZ(M,h.x,h.y,h.z),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let v=0,x=n.count;v<x;v+=3)l.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),f.fromBufferAttribute(n,v+2),_.subVectors(f,c),y.subVectors(l,c),_.cross(y),r.setXYZ(v+0,_.x,_.y,_.z),r.setXYZ(v+1,_.x,_.y,_.z),r.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,r=t.count;n<r;n++)_n.fromBufferAttribute(t,n),_n.normalize(),t.setXYZ(n,_n.x,_n.y,_n.z)}toNonIndexed(){function t(h,p){const m=h.array,_=h.itemSize,y=h.normalized,v=new m.constructor(p.length*_);let x=0,M=0;for(let T=0,S=p.length;T<S;T++){h.isInterleavedBufferAttribute?x=p[T]*h.data.stride+h.offset:x=p[T]*_;for(let g=0;g<_;g++)v[M++]=m[x++]}return new Ni(v,_,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Bi,r=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=t(p,r);n.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const p=[],m=c[h];for(let _=0,y=m.length;_<y;_++){const v=m[_],x=t(v,r);p.push(x)}n.morphAttributes[h]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,p=f.length;h<p;h++){const m=f[h];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let y=0,v=m.length;y<v;y++){const x=m[y];_.push(x.toJSON(t.data))}_.length>0&&(l[p]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone(n));const l=t.attributes;for(const m in l){const _=l[m];this.setAttribute(m,_.clone(n))}const c=t.morphAttributes;for(const m in c){const _=[],y=c[m];for(let v=0,x=y.length;v<x;v++)_.push(y[v].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,_=f.length;m<_;m++){const y=f[m];this.addGroup(y.start,y.count,y.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uv=new Ye,vr=new sp,Dc=new uu,fv=new J,Uc=new J,Lc=new J,Nc=new J,Xh=new J,Oc=new J,hv=new J,Pc=new J;class Li extends Mn{constructor(t=new Bi,n=new Y0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const l=n[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Oc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const _=h[p],y=c[p];_!==0&&(Xh.fromBufferAttribute(y,t),f?Oc.addScaledVector(Xh,_):Oc.addScaledVector(Xh.sub(n),_))}n.add(Oc)}return n}raycast(t,n){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Dc.copy(r.boundingSphere),Dc.applyMatrix4(c),vr.copy(t.ray).recast(t.near),!(Dc.containsPoint(vr.origin)===!1&&(vr.intersectSphere(Dc,fv)===null||vr.origin.distanceToSquared(fv)>(t.far-t.near)**2))&&(uv.copy(c).invert(),vr.copy(t.ray).applyMatrix4(uv),!(r.boundingBox!==null&&vr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,n,vr)))}_computeIntersections(t,n,r){let l;const c=this.geometry,f=this.material,h=c.index,p=c.attributes.position,m=c.attributes.uv,_=c.attributes.uv1,y=c.attributes.normal,v=c.groups,x=c.drawRange;if(h!==null)if(Array.isArray(f))for(let M=0,T=v.length;M<T;M++){const S=v[M],g=f[S.materialIndex],L=Math.max(S.start,x.start),U=Math.min(h.count,Math.min(S.start+S.count,x.start+x.count));for(let D=L,I=U;D<I;D+=3){const B=h.getX(D),z=h.getX(D+1),q=h.getX(D+2);l=Ic(this,g,t,r,m,_,y,B,z,q),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,n.push(l))}}else{const M=Math.max(0,x.start),T=Math.min(h.count,x.start+x.count);for(let S=M,g=T;S<g;S+=3){const L=h.getX(S),U=h.getX(S+1),D=h.getX(S+2);l=Ic(this,f,t,r,m,_,y,L,U,D),l&&(l.faceIndex=Math.floor(S/3),n.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let M=0,T=v.length;M<T;M++){const S=v[M],g=f[S.materialIndex],L=Math.max(S.start,x.start),U=Math.min(p.count,Math.min(S.start+S.count,x.start+x.count));for(let D=L,I=U;D<I;D+=3){const B=D,z=D+1,q=D+2;l=Ic(this,g,t,r,m,_,y,B,z,q),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,n.push(l))}}else{const M=Math.max(0,x.start),T=Math.min(p.count,x.start+x.count);for(let S=M,g=T;S<g;S+=3){const L=S,U=S+1,D=S+2;l=Ic(this,f,t,r,m,_,y,L,U,D),l&&(l.faceIndex=Math.floor(S/3),n.push(l))}}}}function rT(a,t,n,r,l,c,f,h){let p;if(t.side===kn?p=r.intersectTriangle(f,c,l,!0,h):p=r.intersectTriangle(l,c,f,t.side===ja,h),p===null)return null;Pc.copy(h),Pc.applyMatrix4(a.matrixWorld);const m=n.ray.origin.distanceTo(Pc);return m<n.near||m>n.far?null:{distance:m,point:Pc.clone(),object:a}}function Ic(a,t,n,r,l,c,f,h,p,m){a.getVertexPosition(h,Uc),a.getVertexPosition(p,Lc),a.getVertexPosition(m,Nc);const _=rT(a,t,n,r,Uc,Lc,Nc,hv);if(_){const y=new J;xi.getBarycoord(hv,Uc,Lc,Nc,y),l&&(_.uv=xi.getInterpolatedAttribute(l,h,p,m,y,new ue)),c&&(_.uv1=xi.getInterpolatedAttribute(c,h,p,m,y,new ue)),f&&(_.normal=xi.getInterpolatedAttribute(f,h,p,m,y,new J),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const v={a:h,b:p,c:m,normal:new J,materialIndex:0};xi.getNormal(Uc,Lc,Nc,v.normal),_.face=v,_.barycoord=y}return _}class fl extends Bi{constructor(t=1,n=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],_=[],y=[];let v=0,x=0;M("z","y","x",-1,-1,r,n,t,f,c,0),M("z","y","x",1,-1,r,n,-t,f,c,1),M("x","z","y",1,1,t,r,n,l,f,2),M("x","z","y",1,-1,t,r,-n,l,f,3),M("x","y","z",1,-1,t,n,r,l,c,4),M("x","y","z",-1,-1,t,n,-r,l,c,5),this.setIndex(p),this.setAttribute("position",new Mi(m,3)),this.setAttribute("normal",new Mi(_,3)),this.setAttribute("uv",new Mi(y,2));function M(T,S,g,L,U,D,I,B,z,q,w){const A=D/z,H=I/q,ct=D/2,at=I/2,gt=B/2,dt=z+1,W=q+1;let rt=0,Z=0;const St=new J;for(let O=0;O<W;O++){const it=O*H-at;for(let Tt=0;Tt<dt;Tt++){const Rt=Tt*A-ct;St[T]=Rt*L,St[S]=it*U,St[g]=gt,m.push(St.x,St.y,St.z),St[T]=0,St[S]=0,St[g]=B>0?1:-1,_.push(St.x,St.y,St.z),y.push(Tt/z),y.push(1-O/q),rt+=1}}for(let O=0;O<q;O++)for(let it=0;it<z;it++){const Tt=v+it+dt*O,Rt=v+it+dt*(O+1),Y=v+(it+1)+dt*(O+1),pt=v+(it+1)+dt*O;p.push(Tt,Rt,pt),p.push(Rt,Y,pt),Z+=6}h.addGroup(x,Z,w),x+=Z,v+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Vs(a){const t={};for(const n in a){t[n]={};for(const r in a[n]){const l=a[n][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][r]=null):t[n][r]=l.clone():Array.isArray(l)?t[n][r]=l.slice():t[n][r]=l}}return t}function In(a){const t={};for(let n=0;n<a.length;n++){const r=Vs(a[n]);for(const l in r)t[l]=r[l]}return t}function sT(a){const t=[];for(let n=0;n<a.length;n++)t.push(a[n].clone());return t}function Z0(a){const t=a.getRenderTarget();return t===null?a.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const oT={clone:Vs,merge:In};var lT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Za extends Ws{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lT,this.fragmentShader=cT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vs(t.uniforms),this.uniformsGroups=sT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?n.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?n.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[l]={type:"m4",value:f.toArray()}:n.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class K0 extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=ca}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ga=new J,dv=new ue,pv=new ue;class fi extends K0{constructor(t=50,n=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=kd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($c*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return kd*2*Math.atan(Math.tan($c*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,r){Ga.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ga.x,Ga.y).multiplyScalar(-t/Ga.z),Ga.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ga.x,Ga.y).multiplyScalar(-t/Ga.z)}getViewSize(t,n){return this.getViewBounds(t,dv,pv),n.subVectors(pv,dv)}setViewOffset(t,n,r,l,c,f){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan($c*.5*this.fov)/this.zoom,r=2*n,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*l/p,n-=f.offsetY*r/m,l*=f.width/p,r*=f.height/m}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,n,n-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ts=-90,bs=1;class uT extends Mn{constructor(t,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new fi(Ts,bs,t,n);l.layers=this.layers,this.add(l);const c=new fi(Ts,bs,t,n);c.layers=this.layers,this.add(c);const f=new fi(Ts,bs,t,n);f.layers=this.layers,this.add(f);const h=new fi(Ts,bs,t,n);h.layers=this.layers,this.add(h);const p=new fi(Ts,bs,t,n);p.layers=this.layers,this.add(p);const m=new fi(Ts,bs,t,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[r,l,c,f,h,p]=n;for(const m of n)this.remove(m);if(t===ca)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===iu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of n)this.add(m),m.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,p,m,_]=this.children,y=t.getRenderTarget(),v=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(n,c),t.setRenderTarget(r,1,l),t.render(n,f),t.setRenderTarget(r,2,l),t.render(n,h),t.setRenderTarget(r,3,l),t.render(n,p),t.setRenderTarget(r,4,l),t.render(n,m),r.texture.generateMipmaps=T,t.setRenderTarget(r,5,l),t.render(n,_),t.setRenderTarget(y,v,x),t.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class Q0 extends Xn{constructor(t,n,r,l,c,f,h,p,m,_){t=t!==void 0?t:[],n=n!==void 0?n:Bs,super(t,n,r,l,c,f,h,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fT extends Dr{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Q0(l,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ui}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new fl(5,5,5),c=new Za({name:"CubemapFromEquirect",uniforms:Vs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:Wa});c.uniforms.tEquirect.value=n;const f=new Li(l,c),h=n.minFilter;return n.minFilter===Rr&&(n.minFilter=Ui),new uT(1,10,this).update(t,f),n.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,n,r,l){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(n,r,l);t.setRenderTarget(c)}}class Ds extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hT={type:"move"};class Wh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ds,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ds,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ds,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const r of t.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,r){let l=null,c=null,f=null;const h=this._targetRay,p=this._grip,m=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const T of t.hand.values()){const S=n.getJointPose(T,r),g=this._getHandJoint(m,T);S!==null&&(g.matrix.fromArray(S.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=S.radius),g.visible=S!==null}const _=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],v=_.position.distanceTo(y.position),x=.02,M=.005;m.inputState.pinching&&v>x+M?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&v<=x-M&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(l=n.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(hT)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const r=new Ds;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[n.jointName]=r,t.add(r)}return t.joints[n.jointName]}}class dT extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Yh=new J,pT=new J,mT=new ce;class Va{constructor(t=new J(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,r,l){return this.normal.set(t,n,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,r){const l=Yh.subVectors(r,n).cross(pT.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const r=t.delta(Yh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:n.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return n<0&&r>0||r<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const r=n||mT.getNormalMatrix(t),l=this.coplanarPoint(Yh).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new uu,Bc=new J;class op{constructor(t=new Va,n=new Va,r=new Va,l=new Va,c=new Va,f=new Va){this.planes=[t,n,r,l,c,f]}set(t,n,r,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,n=ca){const r=this.planes,l=t.elements,c=l[0],f=l[1],h=l[2],p=l[3],m=l[4],_=l[5],y=l[6],v=l[7],x=l[8],M=l[9],T=l[10],S=l[11],g=l[12],L=l[13],U=l[14],D=l[15];if(r[0].setComponents(p-c,v-m,S-x,D-g).normalize(),r[1].setComponents(p+c,v+m,S+x,D+g).normalize(),r[2].setComponents(p+f,v+_,S+M,D+L).normalize(),r[3].setComponents(p-f,v-_,S-M,D-L).normalize(),r[4].setComponents(p-h,v-y,S-T,D-U).normalize(),n===ca)r[5].setComponents(p+h,v+y,S+T,D+U).normalize();else if(n===iu)r[5].setComponents(h,y,T,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(t){return yr.center.set(0,0,0),yr.radius=.7071067811865476,yr.applyMatrix4(t.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(t){const n=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const n=this.planes;for(let r=0;r<6;r++){const l=n[r];if(Bc.x=l.normal.x>0?t.max.x:t.min.x,Bc.y=l.normal.y>0?t.max.y:t.min.y,Bc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Bc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $0 extends Ws{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ru=new J,su=new J,mv=new Ye,Qo=new sp,zc=new uu,qh=new J,gv=new J;class gT extends Mn{constructor(t=new Bi,n=new $0){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,r=[0];for(let l=1,c=n.count;l<c;l++)ru.fromBufferAttribute(n,l-1),su.fromBufferAttribute(n,l),r[l]=r[l-1],r[l]+=ru.distanceTo(su);t.setAttribute("lineDistance",new Mi(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const r=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),zc.copy(r.boundingSphere),zc.applyMatrix4(l),zc.radius+=c,t.ray.intersectsSphere(zc)===!1)return;mv.copy(l).invert(),Qo.copy(t.ray).applyMatrix4(mv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=this.isLineSegments?2:1,_=r.index,v=r.attributes.position;if(_!==null){const x=Math.max(0,f.start),M=Math.min(_.count,f.start+f.count);for(let T=x,S=M-1;T<S;T+=m){const g=_.getX(T),L=_.getX(T+1),U=Fc(this,t,Qo,p,g,L,T);U&&n.push(U)}if(this.isLineLoop){const T=_.getX(M-1),S=_.getX(x),g=Fc(this,t,Qo,p,T,S,M-1);g&&n.push(g)}}else{const x=Math.max(0,f.start),M=Math.min(v.count,f.start+f.count);for(let T=x,S=M-1;T<S;T+=m){const g=Fc(this,t,Qo,p,T,T+1,T);g&&n.push(g)}if(this.isLineLoop){const T=Fc(this,t,Qo,p,M-1,x,M-1);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const l=n[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Fc(a,t,n,r,l,c,f){const h=a.geometry.attributes.position;if(ru.fromBufferAttribute(h,l),su.fromBufferAttribute(h,c),n.distanceSqToSegment(ru,su,qh,gv)>r)return;qh.applyMatrix4(a.matrixWorld);const m=t.ray.origin.distanceTo(qh);if(!(m<t.near||m>t.far))return{distance:m,point:gv.clone().applyMatrix4(a.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:a}}class J0 extends Xn{constructor(t,n,r,l,c,f,h,p,m,_=Os){if(_!==Os&&_!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Os&&(r=wr),r===void 0&&_===Hs&&(r=Fs),super(null,l,c,f,h,p,_,r,m),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=h!==void 0?h:Ei,this.minFilter=p!==void 0?p:Ei,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new rp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class fu extends Bi{constructor(t=1,n=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:r,heightSegments:l};const c=t/2,f=n/2,h=Math.floor(r),p=Math.floor(l),m=h+1,_=p+1,y=t/h,v=n/p,x=[],M=[],T=[],S=[];for(let g=0;g<_;g++){const L=g*v-f;for(let U=0;U<m;U++){const D=U*y-c;M.push(D,-L,0),T.push(0,0,1),S.push(U/h),S.push(1-g/p)}}for(let g=0;g<p;g++)for(let L=0;L<h;L++){const U=L+m*g,D=L+m*(g+1),I=L+1+m*(g+1),B=L+1+m*g;x.push(U,D,B),x.push(D,I,B)}this.setIndex(x),this.setAttribute("position",new Mi(M,3)),this.setAttribute("normal",new Mi(T,3)),this.setAttribute("uv",new Mi(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fu(t.width,t.height,t.widthSegments,t.heightSegments)}}class lp extends Bi{constructor(t=1,n=32,r=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:r,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const p=Math.min(f+h,Math.PI);let m=0;const _=[],y=new J,v=new J,x=[],M=[],T=[],S=[];for(let g=0;g<=r;g++){const L=[],U=g/r;let D=0;g===0&&f===0?D=.5/n:g===r&&p===Math.PI&&(D=-.5/n);for(let I=0;I<=n;I++){const B=I/n;y.x=-t*Math.cos(l+B*c)*Math.sin(f+U*h),y.y=t*Math.cos(f+U*h),y.z=t*Math.sin(l+B*c)*Math.sin(f+U*h),M.push(y.x,y.y,y.z),v.copy(y).normalize(),T.push(v.x,v.y,v.z),S.push(B+D,1-U),L.push(m++)}_.push(L)}for(let g=0;g<r;g++)for(let L=0;L<n;L++){const U=_[g][L+1],D=_[g][L],I=_[g+1][L],B=_[g+1][L+1];(g!==0||f>0)&&x.push(U,D,B),(g!==r-1||p<Math.PI)&&x.push(D,I,B)}this.setIndex(x),this.setAttribute("position",new Mi(M,3)),this.setAttribute("normal",new Mi(T,3)),this.setAttribute("uv",new Mi(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lp(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class _T extends Ws{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Me(16777215),this.specular=new Me(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=H0,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=$d,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class vT extends Ws{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=RM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class yT extends Ws{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ty extends Mn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const jh=new Ye,_v=new J,vv=new J;class xT{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new op,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,r=this.matrix;_v.setFromMatrixPosition(t.matrixWorld),n.position.copy(_v),vv.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(vv),n.updateMatrixWorld(),jh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(jh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ey extends K0{constructor(t=-1,n=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,f=r+t,h=l+n,p=l-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,h-=_*this.view.offsetY,p=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class ST extends xT{constructor(){super(new ey(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ET extends ty{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new ST}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class MT extends ty{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class TT extends fi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class bT{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=yv(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=yv();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function yv(){return performance.now()}class xv{constructor(t=1,n=0,r=0){this.radius=t,this.phi=n,this.theta=r}set(t,n,r){return this.radius=t,this.phi=n,this.theta=r,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ge(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,r){return this.radius=Math.sqrt(t*t+n*n+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,r),this.phi=Math.acos(ge(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class AT extends Or{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Sv(a,t,n,r){const l=RT(r);switch(n){case N0:return a*t;case P0:return a*t;case I0:return a*t*2;case B0:return a*t/l.components*l.byteLength;case np:return a*t/l.components*l.byteLength;case z0:return a*t*2/l.components*l.byteLength;case ip:return a*t*2/l.components*l.byteLength;case O0:return a*t*3/l.components*l.byteLength;case Si:return a*t*4/l.components*l.byteLength;case ap:return a*t*4/l.components*l.byteLength;case qc:case jc:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case Zc:case Kc:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case vd:case xd:return Math.max(a,16)*Math.max(t,8)/4;case _d:case yd:return Math.max(a,8)*Math.max(t,8)/2;case Sd:case Ed:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case Md:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case Td:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case bd:return Math.floor((a+4)/5)*Math.floor((t+3)/4)*16;case Ad:return Math.floor((a+4)/5)*Math.floor((t+4)/5)*16;case Rd:return Math.floor((a+5)/6)*Math.floor((t+4)/5)*16;case Cd:return Math.floor((a+5)/6)*Math.floor((t+5)/6)*16;case wd:return Math.floor((a+7)/8)*Math.floor((t+4)/5)*16;case Dd:return Math.floor((a+7)/8)*Math.floor((t+5)/6)*16;case Ud:return Math.floor((a+7)/8)*Math.floor((t+7)/8)*16;case Ld:return Math.floor((a+9)/10)*Math.floor((t+4)/5)*16;case Nd:return Math.floor((a+9)/10)*Math.floor((t+5)/6)*16;case Od:return Math.floor((a+9)/10)*Math.floor((t+7)/8)*16;case Pd:return Math.floor((a+9)/10)*Math.floor((t+9)/10)*16;case Id:return Math.floor((a+11)/12)*Math.floor((t+9)/10)*16;case Bd:return Math.floor((a+11)/12)*Math.floor((t+11)/12)*16;case Qc:case zd:case Fd:return Math.ceil(a/4)*Math.ceil(t/4)*16;case F0:case Hd:return Math.ceil(a/4)*Math.ceil(t/4)*8;case Gd:case Vd:return Math.ceil(a/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function RT(a){switch(a){case da:case D0:return{byteLength:1,components:1};case nl:case U0:case ll:return{byteLength:2,components:1};case tp:case ep:return{byteLength:2,components:4};case wr:case Jd:case la:return{byteLength:4,components:1};case L0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ny(){let a=null,t=!1,n=null,r=null;function l(c,f){n(c,f),r=a.requestAnimationFrame(l)}return{start:function(){t!==!0&&n!==null&&(r=a.requestAnimationFrame(l),t=!0)},stop:function(){a.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){a=c}}}function CT(a){const t=new WeakMap;function n(h,p){const m=h.array,_=h.usage,y=m.byteLength,v=a.createBuffer();a.bindBuffer(p,v),a.bufferData(p,m,_),h.onUploadCallback();let x;if(m instanceof Float32Array)x=a.FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?x=a.HALF_FLOAT:x=a.UNSIGNED_SHORT;else if(m instanceof Int16Array)x=a.SHORT;else if(m instanceof Uint32Array)x=a.UNSIGNED_INT;else if(m instanceof Int32Array)x=a.INT;else if(m instanceof Int8Array)x=a.BYTE;else if(m instanceof Uint8Array)x=a.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)x=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:x,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:y}}function r(h,p,m){const _=p.array,y=p.updateRanges;if(a.bindBuffer(m,h),y.length===0)a.bufferSubData(m,0,_);else{y.sort((x,M)=>x.start-M.start);let v=0;for(let x=1;x<y.length;x++){const M=y[v],T=y[x];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++v,y[v]=T)}y.length=v+1;for(let x=0,M=y.length;x<M;x++){const T=y[x];a.bufferSubData(m,T.start*_.BYTES_PER_ELEMENT,_,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(a.deleteBuffer(p.buffer),t.delete(h))}function f(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=t.get(h);(!_||_.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=t.get(h);if(m===void 0)t.set(h,n(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,h,p),m.version=h.version}}return{get:l,remove:c,update:f}}var wT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,DT=`#ifdef USE_ALPHAHASH
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
#endif`,UT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,LT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,OT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,PT=`#ifdef USE_AOMAP
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
#endif`,IT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,BT=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,zT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,FT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,HT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,GT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,VT=`#ifdef USE_IRIDESCENCE
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
#endif`,kT=`#ifdef USE_BUMPMAP
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
#endif`,XT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,WT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,YT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ZT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,KT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,QT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,$T=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,JT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tb=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,eb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ib=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ab=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rb="gl_FragColor = linearToOutputTexel( gl_FragColor );",sb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ob=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cb=`#ifdef USE_ENVMAP
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
#endif`,ub=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,db=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gb=`#ifdef USE_GRADIENTMAP
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
}`,_b=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xb=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Sb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Eb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ab=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Rb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cb=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Db=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ub=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ob=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ib=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zb=`#if defined( USE_POINTS_UV )
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
#endif`,Fb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xb=`#ifdef USE_MORPHTARGETS
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
#endif`,Wb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qb=`#ifdef USE_NORMALMAP
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
#endif`,$b=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,aA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,fA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,hA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,dA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,pA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mA=`#ifdef USE_SKINNING
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
#endif`,gA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_A=`#ifdef USE_SKINNING
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
#endif`,vA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,SA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,EA=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,MA=`#ifdef USE_TRANSMISSION
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
#endif`,TA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const CA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wA=`uniform sampler2D t2D;
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
}`,DA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OA=`#include <common>
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
}`,PA=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,IA=`#define DISTANCE
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
}`,BA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,FA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HA=`uniform float scale;
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
}`,GA=`uniform vec3 diffuse;
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
}`,VA=`#include <common>
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
}`,kA=`uniform vec3 diffuse;
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
}`,XA=`#define LAMBERT
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
}`,WA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,YA=`#define MATCAP
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
}`,qA=`#define MATCAP
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
}`,jA=`#define NORMAL
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
}`,ZA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,KA=`#define PHONG
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
}`,QA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,$A=`#define STANDARD
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
}`,JA=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,tR=`#define TOON
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
}`,eR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,nR=`uniform float size;
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
}`,iR=`uniform vec3 diffuse;
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
}`,aR=`#include <common>
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
}`,rR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,sR=`uniform float rotation;
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
}`,oR=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:wT,alphahash_pars_fragment:DT,alphamap_fragment:UT,alphamap_pars_fragment:LT,alphatest_fragment:NT,alphatest_pars_fragment:OT,aomap_fragment:PT,aomap_pars_fragment:IT,batching_pars_vertex:BT,batching_vertex:zT,begin_vertex:FT,beginnormal_vertex:HT,bsdfs:GT,iridescence_fragment:VT,bumpmap_pars_fragment:kT,clipping_planes_fragment:XT,clipping_planes_pars_fragment:WT,clipping_planes_pars_vertex:YT,clipping_planes_vertex:qT,color_fragment:jT,color_pars_fragment:ZT,color_pars_vertex:KT,color_vertex:QT,common:$T,cube_uv_reflection_fragment:JT,defaultnormal_vertex:tb,displacementmap_pars_vertex:eb,displacementmap_vertex:nb,emissivemap_fragment:ib,emissivemap_pars_fragment:ab,colorspace_fragment:rb,colorspace_pars_fragment:sb,envmap_fragment:ob,envmap_common_pars_fragment:lb,envmap_pars_fragment:cb,envmap_pars_vertex:ub,envmap_physical_pars_fragment:Sb,envmap_vertex:fb,fog_vertex:hb,fog_pars_vertex:db,fog_fragment:pb,fog_pars_fragment:mb,gradientmap_pars_fragment:gb,lightmap_pars_fragment:_b,lights_lambert_fragment:vb,lights_lambert_pars_fragment:yb,lights_pars_begin:xb,lights_toon_fragment:Eb,lights_toon_pars_fragment:Mb,lights_phong_fragment:Tb,lights_phong_pars_fragment:bb,lights_physical_fragment:Ab,lights_physical_pars_fragment:Rb,lights_fragment_begin:Cb,lights_fragment_maps:wb,lights_fragment_end:Db,logdepthbuf_fragment:Ub,logdepthbuf_pars_fragment:Lb,logdepthbuf_pars_vertex:Nb,logdepthbuf_vertex:Ob,map_fragment:Pb,map_pars_fragment:Ib,map_particle_fragment:Bb,map_particle_pars_fragment:zb,metalnessmap_fragment:Fb,metalnessmap_pars_fragment:Hb,morphinstance_vertex:Gb,morphcolor_vertex:Vb,morphnormal_vertex:kb,morphtarget_pars_vertex:Xb,morphtarget_vertex:Wb,normal_fragment_begin:Yb,normal_fragment_maps:qb,normal_pars_fragment:jb,normal_pars_vertex:Zb,normal_vertex:Kb,normalmap_pars_fragment:Qb,clearcoat_normal_fragment_begin:$b,clearcoat_normal_fragment_maps:Jb,clearcoat_pars_fragment:tA,iridescence_pars_fragment:eA,opaque_fragment:nA,packing:iA,premultiplied_alpha_fragment:aA,project_vertex:rA,dithering_fragment:sA,dithering_pars_fragment:oA,roughnessmap_fragment:lA,roughnessmap_pars_fragment:cA,shadowmap_pars_fragment:uA,shadowmap_pars_vertex:fA,shadowmap_vertex:hA,shadowmask_pars_fragment:dA,skinbase_vertex:pA,skinning_pars_vertex:mA,skinning_vertex:gA,skinnormal_vertex:_A,specularmap_fragment:vA,specularmap_pars_fragment:yA,tonemapping_fragment:xA,tonemapping_pars_fragment:SA,transmission_fragment:EA,transmission_pars_fragment:MA,uv_pars_fragment:TA,uv_pars_vertex:bA,uv_vertex:AA,worldpos_vertex:RA,background_vert:CA,background_frag:wA,backgroundCube_vert:DA,backgroundCube_frag:UA,cube_vert:LA,cube_frag:NA,depth_vert:OA,depth_frag:PA,distanceRGBA_vert:IA,distanceRGBA_frag:BA,equirect_vert:zA,equirect_frag:FA,linedashed_vert:HA,linedashed_frag:GA,meshbasic_vert:VA,meshbasic_frag:kA,meshlambert_vert:XA,meshlambert_frag:WA,meshmatcap_vert:YA,meshmatcap_frag:qA,meshnormal_vert:jA,meshnormal_frag:ZA,meshphong_vert:KA,meshphong_frag:QA,meshphysical_vert:$A,meshphysical_frag:JA,meshtoon_vert:tR,meshtoon_frag:eR,points_vert:nR,points_frag:iR,shadow_vert:aR,shadow_frag:rR,sprite_vert:sR,sprite_frag:oR},Lt={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Di={basic:{uniforms:In([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:In([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Me(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:In([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:In([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:In([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Me(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:In([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:In([Lt.points,Lt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:In([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:In([Lt.common,Lt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:In([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:In([Lt.sprite,Lt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:In([Lt.common,Lt.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:In([Lt.lights,Lt.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Di.physical={uniforms:In([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const Hc={r:0,b:0,g:0},xr=new Pi,lR=new Ye;function cR(a,t,n,r,l,c,f){const h=new Me(0);let p=c===!0?0:1,m,_,y=null,v=0,x=null;function M(U){let D=U.isScene===!0?U.background:null;return D&&D.isTexture&&(D=(U.backgroundBlurriness>0?n:t).get(D)),D}function T(U){let D=!1;const I=M(U);I===null?g(h,p):I&&I.isColor&&(g(I,1),D=!0);const B=a.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,f):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(a.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function S(U,D){const I=M(D);I&&(I.isCubeTexture||I.mapping===cu)?(_===void 0&&(_=new Li(new fl(1,1,1),new Za({name:"BackgroundCubeMaterial",uniforms:Vs(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(B,z,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),xr.copy(D.backgroundRotation),xr.x*=-1,xr.y*=-1,xr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),_.material.uniforms.envMap.value=I,_.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(lR.makeRotationFromEuler(xr)),_.material.toneMapped=we.getTransfer(I.colorSpace)!==Ie,(y!==I||v!==I.version||x!==a.toneMapping)&&(_.material.needsUpdate=!0,y=I,v=I.version,x=a.toneMapping),_.layers.enableAll(),U.unshift(_,_.geometry,_.material,0,0,null)):I&&I.isTexture&&(m===void 0&&(m=new Li(new fu(2,2),new Za({name:"BackgroundMaterial",uniforms:Vs(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:ja,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=I,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=we.getTransfer(I.colorSpace)!==Ie,I.matrixAutoUpdate===!0&&I.updateMatrix(),m.material.uniforms.uvTransform.value.copy(I.matrix),(y!==I||v!==I.version||x!==a.toneMapping)&&(m.material.needsUpdate=!0,y=I,v=I.version,x=a.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function g(U,D){U.getRGB(Hc,Z0(a)),r.buffers.color.setClear(Hc.r,Hc.g,Hc.b,D,f)}function L(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,D=1){h.set(U),p=D,g(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,g(h,p)},render:T,addToRenderList:S,dispose:L}}function uR(a,t){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},l=v(null);let c=l,f=!1;function h(A,H,ct,at,gt){let dt=!1;const W=y(at,ct,H);c!==W&&(c=W,m(c.object)),dt=x(A,at,ct,gt),dt&&M(A,at,ct,gt),gt!==null&&t.update(gt,a.ELEMENT_ARRAY_BUFFER),(dt||f)&&(f=!1,D(A,H,ct,at),gt!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,t.get(gt).buffer))}function p(){return a.createVertexArray()}function m(A){return a.bindVertexArray(A)}function _(A){return a.deleteVertexArray(A)}function y(A,H,ct){const at=ct.wireframe===!0;let gt=r[A.id];gt===void 0&&(gt={},r[A.id]=gt);let dt=gt[H.id];dt===void 0&&(dt={},gt[H.id]=dt);let W=dt[at];return W===void 0&&(W=v(p()),dt[at]=W),W}function v(A){const H=[],ct=[],at=[];for(let gt=0;gt<n;gt++)H[gt]=0,ct[gt]=0,at[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:ct,attributeDivisors:at,object:A,attributes:{},index:null}}function x(A,H,ct,at){const gt=c.attributes,dt=H.attributes;let W=0;const rt=ct.getAttributes();for(const Z in rt)if(rt[Z].location>=0){const O=gt[Z];let it=dt[Z];if(it===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&(it=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&(it=A.instanceColor)),O===void 0||O.attribute!==it||it&&O.data!==it.data)return!0;W++}return c.attributesNum!==W||c.index!==at}function M(A,H,ct,at){const gt={},dt=H.attributes;let W=0;const rt=ct.getAttributes();for(const Z in rt)if(rt[Z].location>=0){let O=dt[Z];O===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&(O=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&(O=A.instanceColor));const it={};it.attribute=O,O&&O.data&&(it.data=O.data),gt[Z]=it,W++}c.attributes=gt,c.attributesNum=W,c.index=at}function T(){const A=c.newAttributes;for(let H=0,ct=A.length;H<ct;H++)A[H]=0}function S(A){g(A,0)}function g(A,H){const ct=c.newAttributes,at=c.enabledAttributes,gt=c.attributeDivisors;ct[A]=1,at[A]===0&&(a.enableVertexAttribArray(A),at[A]=1),gt[A]!==H&&(a.vertexAttribDivisor(A,H),gt[A]=H)}function L(){const A=c.newAttributes,H=c.enabledAttributes;for(let ct=0,at=H.length;ct<at;ct++)H[ct]!==A[ct]&&(a.disableVertexAttribArray(ct),H[ct]=0)}function U(A,H,ct,at,gt,dt,W){W===!0?a.vertexAttribIPointer(A,H,ct,gt,dt):a.vertexAttribPointer(A,H,ct,at,gt,dt)}function D(A,H,ct,at){T();const gt=at.attributes,dt=ct.getAttributes(),W=H.defaultAttributeValues;for(const rt in dt){const Z=dt[rt];if(Z.location>=0){let St=gt[rt];if(St===void 0&&(rt==="instanceMatrix"&&A.instanceMatrix&&(St=A.instanceMatrix),rt==="instanceColor"&&A.instanceColor&&(St=A.instanceColor)),St!==void 0){const O=St.normalized,it=St.itemSize,Tt=t.get(St);if(Tt===void 0)continue;const Rt=Tt.buffer,Y=Tt.type,pt=Tt.bytesPerElement,xt=Y===a.INT||Y===a.UNSIGNED_INT||St.gpuType===Jd;if(St.isInterleavedBufferAttribute){const bt=St.data,Ct=bt.stride,$t=St.offset;if(bt.isInstancedInterleavedBuffer){for(let It=0;It<Z.locationSize;It++)g(Z.location+It,bt.meshPerAttribute);A.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let It=0;It<Z.locationSize;It++)S(Z.location+It);a.bindBuffer(a.ARRAY_BUFFER,Rt);for(let It=0;It<Z.locationSize;It++)U(Z.location+It,it/Z.locationSize,Y,O,Ct*pt,($t+it/Z.locationSize*It)*pt,xt)}else{if(St.isInstancedBufferAttribute){for(let bt=0;bt<Z.locationSize;bt++)g(Z.location+bt,St.meshPerAttribute);A.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let bt=0;bt<Z.locationSize;bt++)S(Z.location+bt);a.bindBuffer(a.ARRAY_BUFFER,Rt);for(let bt=0;bt<Z.locationSize;bt++)U(Z.location+bt,it/Z.locationSize,Y,O,it*pt,it/Z.locationSize*bt*pt,xt)}}else if(W!==void 0){const O=W[rt];if(O!==void 0)switch(O.length){case 2:a.vertexAttrib2fv(Z.location,O);break;case 3:a.vertexAttrib3fv(Z.location,O);break;case 4:a.vertexAttrib4fv(Z.location,O);break;default:a.vertexAttrib1fv(Z.location,O)}}}}L()}function I(){q();for(const A in r){const H=r[A];for(const ct in H){const at=H[ct];for(const gt in at)_(at[gt].object),delete at[gt];delete H[ct]}delete r[A]}}function B(A){if(r[A.id]===void 0)return;const H=r[A.id];for(const ct in H){const at=H[ct];for(const gt in at)_(at[gt].object),delete at[gt];delete H[ct]}delete r[A.id]}function z(A){for(const H in r){const ct=r[H];if(ct[A.id]===void 0)continue;const at=ct[A.id];for(const gt in at)_(at[gt].object),delete at[gt];delete ct[A.id]}}function q(){w(),f=!0,c!==l&&(c=l,m(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:q,resetDefaultState:w,dispose:I,releaseStatesOfGeometry:B,releaseStatesOfProgram:z,initAttributes:T,enableAttribute:S,disableUnusedAttributes:L}}function fR(a,t,n){let r;function l(m){r=m}function c(m,_){a.drawArrays(r,m,_),n.update(_,r,1)}function f(m,_,y){y!==0&&(a.drawArraysInstanced(r,m,_,y),n.update(_,r,y))}function h(m,_,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,y);let x=0;for(let M=0;M<y;M++)x+=_[M];n.update(x,r,1)}function p(m,_,y,v){if(y===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<m.length;M++)f(m[M],_[M],v[M]);else{x.multiDrawArraysInstancedWEBGL(r,m,0,_,0,v,0,y);let M=0;for(let T=0;T<y;T++)M+=_[T]*v[T];n.update(M,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function hR(a,t,n,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=a.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(z){return!(z!==Si&&r.convert(z)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const q=z===ll&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==da&&r.convert(z)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==la&&!q)}function p(z){if(z==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const y=n.logarithmicDepthBuffer===!0,v=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),x=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),M=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=a.getParameter(a.MAX_TEXTURE_SIZE),S=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),g=a.getParameter(a.MAX_VERTEX_ATTRIBS),L=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),U=a.getParameter(a.MAX_VARYING_VECTORS),D=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),I=M>0,B=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:y,reverseDepthBuffer:v,maxTextures:x,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:S,maxAttributes:g,maxVertexUniforms:L,maxVaryings:U,maxFragmentUniforms:D,vertexTextures:I,maxSamples:B}}function dR(a){const t=this;let n=null,r=0,l=!1,c=!1;const f=new Va,h=new ce,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(y,v){const x=y.length!==0||v||r!==0||l;return l=v,r=y.length,x},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(y,v){n=_(y,v,0)},this.setState=function(y,v,x){const M=y.clippingPlanes,T=y.clipIntersection,S=y.clipShadows,g=a.get(y);if(!l||M===null||M.length===0||c&&!S)c?_(null):m();else{const L=c?0:r,U=L*4;let D=g.clippingState||null;p.value=D,D=_(M,v,U,x);for(let I=0;I!==U;++I)D[I]=n[I];g.clippingState=D,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=L}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function _(y,v,x,M){const T=y!==null?y.length:0;let S=null;if(T!==0){if(S=p.value,M!==!0||S===null){const g=x+T*4,L=v.matrixWorldInverse;h.getNormalMatrix(L),(S===null||S.length<g)&&(S=new Float32Array(g));for(let U=0,D=x;U!==T;++U,D+=4)f.copy(y[U]).applyMatrix4(L,h),f.normal.toArray(S,D),S[D+3]=f.constant}p.value=S,p.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,S}}function pR(a){let t=new WeakMap;function n(f,h){return h===dd?f.mapping=Bs:h===pd&&(f.mapping=zs),f}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===dd||h===pd)if(t.has(f)){const p=t.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new fT(p.height);return m.fromEquirectangularTexture(a,f),t.set(f,m),f.addEventListener("dispose",l),n(m.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const Us=4,Ev=[.125,.215,.35,.446,.526,.582],br=20,Zh=new ey,Mv=new Me;let Kh=null,Qh=0,$h=0,Jh=!1;const Mr=(1+Math.sqrt(5))/2,As=1/Mr,Tv=[new J(-Mr,As,0),new J(Mr,As,0),new J(-As,0,Mr),new J(As,0,Mr),new J(0,Mr,-As),new J(0,Mr,As),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)],mR=new J;class bv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,r=.1,l=100,c={}){const{size:f=256,position:h=mR}=c;Kh=this._renderer.getRenderTarget(),Qh=this._renderer.getActiveCubeFace(),$h=this._renderer.getActiveMipmapLevel(),Jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,r,l,p,h),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Kh,Qh,$h),this._renderer.xr.enabled=Jh,t.scissorTest=!1,Gc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Bs||t.mapping===zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Kh=this._renderer.getRenderTarget(),Qh=this._renderer.getActiveCubeFace(),$h=this._renderer.getActiveMipmapLevel(),Jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Ui,minFilter:Ui,generateMipmaps:!1,type:ll,format:Si,colorSpace:Gs,depthBuffer:!1},l=Av(t,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Av(t,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gR(c)),this._blurMaterial=_R(c,t,n)}return l}_compileMaterial(t){const n=new Li(this._lodPlanes[0],t);this._renderer.compile(n,Zh)}_sceneToCubeUV(t,n,r,l,c){const p=new fi(90,1,n,r),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],y=this._renderer,v=y.autoClear,x=y.toneMapping;y.getClearColor(Mv),y.toneMapping=Ya,y.autoClear=!1;const M=new Y0({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),T=new Li(new fl,M);let S=!1;const g=t.background;g?g.isColor&&(M.color.copy(g),t.background=null,S=!0):(M.color.copy(Mv),S=!0);for(let L=0;L<6;L++){const U=L%3;U===0?(p.up.set(0,m[L],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+_[L],c.y,c.z)):U===1?(p.up.set(0,0,m[L]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+_[L],c.z)):(p.up.set(0,m[L],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+_[L]));const D=this._cubeSize;Gc(l,U*D,L>2?D:0,D,D),y.setRenderTarget(l),S&&y.render(T,p),y.render(t,p)}T.geometry.dispose(),T.material.dispose(),y.toneMapping=x,y.autoClear=v,t.background=g}_textureToCubeUV(t,n){const r=this._renderer,l=t.mapping===Bs||t.mapping===zs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new Li(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const p=this._cubeSize;Gc(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,Zh)}_applyPMREM(t){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=Tv[(l-c-1)%Tv.length];this._blur(t,c-1,c,f,h)}n.autoClear=r}_blur(t,n,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,n,r,l,"latitudinal",c),this._halfBlur(f,t,r,r,l,"longitudinal",c)}_halfBlur(t,n,r,l,c,f,h){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,y=new Li(this._lodPlanes[l],m),v=m.uniforms,x=this._sizeLods[r]-1,M=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*br-1),T=c/M,S=isFinite(c)?1+Math.floor(_*T):br;S>br&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${br}`);const g=[];let L=0;for(let z=0;z<br;++z){const q=z/T,w=Math.exp(-q*q/2);g.push(w),z===0?L+=w:z<S&&(L+=2*w)}for(let z=0;z<g.length;z++)g[z]=g[z]/L;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=g,v.latitudinal.value=f==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:U}=this;v.dTheta.value=M,v.mipInt.value=U-r;const D=this._sizeLods[l],I=3*D*(l>U-Us?l-U+Us:0),B=4*(this._cubeSize-D);Gc(n,I,B,3*D,2*D),p.setRenderTarget(n),p.render(y,Zh)}}function gR(a){const t=[],n=[],r=[];let l=a;const c=a-Us+1+Ev.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);n.push(h);let p=1/h;f>a-Us?p=Ev[f-a+Us-1]:f===0&&(p=0),r.push(p);const m=1/(h-2),_=-m,y=1+m,v=[_,_,y,_,y,y,_,_,y,y,_,y],x=6,M=6,T=3,S=2,g=1,L=new Float32Array(T*M*x),U=new Float32Array(S*M*x),D=new Float32Array(g*M*x);for(let B=0;B<x;B++){const z=B%3*2/3-1,q=B>2?0:-1,w=[z,q,0,z+2/3,q,0,z+2/3,q+1,0,z,q,0,z+2/3,q+1,0,z,q+1,0];L.set(w,T*M*B),U.set(v,S*M*B);const A=[B,B,B,B,B,B];D.set(A,g*M*B)}const I=new Bi;I.setAttribute("position",new Ni(L,T)),I.setAttribute("uv",new Ni(U,S)),I.setAttribute("faceIndex",new Ni(D,g)),t.push(I),l>Us&&l--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function Av(a,t,n){const r=new Dr(a,t,n);return r.texture.mapping=cu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Gc(a,t,n,r,l){a.viewport.set(t,n,r,l),a.scissor.set(t,n,r,l)}function _R(a,t,n){const r=new Float32Array(br),l=new J(0,1,0);return new Za({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function Rv(){return new Za({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function Cv(){return new Za({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function cp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vR(a){let t=new WeakMap,n=null;function r(h){if(h&&h.isTexture){const p=h.mapping,m=p===dd||p===pd,_=p===Bs||p===zs;if(m||_){let y=t.get(h);const v=y!==void 0?y.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return n===null&&(n=new bv(a)),y=m?n.fromEquirectangular(h,y):n.fromCubemap(h,y),y.texture.pmremVersion=h.pmremVersion,t.set(h,y),y.texture;if(y!==void 0)return y.texture;{const x=h.image;return m&&x&&x.height>0||_&&x&&l(x)?(n===null&&(n=new bv(a)),y=m?n.fromEquirectangular(h):n.fromCubemap(h),y.texture.pmremVersion=h.pmremVersion,t.set(h,y),h.addEventListener("dispose",c),y.texture):null}}}return h}function l(h){let p=0;const m=6;for(let _=0;_<m;_++)h[_]!==void 0&&p++;return p===m}function c(h){const p=h.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function yR(a){const t={};function n(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=a.getExtension(r)}return t[r]=l,l}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const l=n(r);return l===null&&Er("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function xR(a,t,n,r){const l={},c=new WeakMap;function f(y){const v=y.target;v.index!==null&&t.remove(v.index);for(const M in v.attributes)t.remove(v.attributes[M]);v.removeEventListener("dispose",f),delete l[v.id];const x=c.get(v);x&&(t.remove(x),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function h(y,v){return l[v.id]===!0||(v.addEventListener("dispose",f),l[v.id]=!0,n.memory.geometries++),v}function p(y){const v=y.attributes;for(const x in v)t.update(v[x],a.ARRAY_BUFFER)}function m(y){const v=[],x=y.index,M=y.attributes.position;let T=0;if(x!==null){const L=x.array;T=x.version;for(let U=0,D=L.length;U<D;U+=3){const I=L[U+0],B=L[U+1],z=L[U+2];v.push(I,B,B,z,z,I)}}else if(M!==void 0){const L=M.array;T=M.version;for(let U=0,D=L.length/3-1;U<D;U+=3){const I=U+0,B=U+1,z=U+2;v.push(I,B,B,z,z,I)}}else return;const S=new(V0(v)?j0:q0)(v,1);S.version=T;const g=c.get(y);g&&t.remove(g),c.set(y,S)}function _(y){const v=c.get(y);if(v){const x=y.index;x!==null&&v.version<x.version&&m(y)}else m(y);return c.get(y)}return{get:h,update:p,getWireframeAttribute:_}}function SR(a,t,n){let r;function l(v){r=v}let c,f;function h(v){c=v.type,f=v.bytesPerElement}function p(v,x){a.drawElements(r,x,c,v*f),n.update(x,r,1)}function m(v,x,M){M!==0&&(a.drawElementsInstanced(r,x,c,v*f,M),n.update(x,r,M))}function _(v,x,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,c,v,0,M);let S=0;for(let g=0;g<M;g++)S+=x[g];n.update(S,r,1)}function y(v,x,M,T){if(M===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let g=0;g<v.length;g++)m(v[g]/f,x[g],T[g]);else{S.multiDrawElementsInstancedWEBGL(r,x,0,c,v,0,T,0,M);let g=0;for(let L=0;L<M;L++)g+=x[L]*T[L];n.update(g,r,1)}}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=y}function ER(a){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,h){switch(n.calls++,f){case a.TRIANGLES:n.triangles+=h*(c/3);break;case a.LINES:n.lines+=h*(c/2);break;case a.LINE_STRIP:n.lines+=h*(c-1);break;case a.LINE_LOOP:n.lines+=h*c;break;case a.POINTS:n.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:l,update:r}}function MR(a,t,n){const r=new WeakMap,l=new Qe;function c(f,h,p){const m=f.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=_!==void 0?_.length:0;let v=r.get(h);if(v===void 0||v.count!==y){let A=function(){q.dispose(),r.delete(h),h.removeEventListener("dispose",A)};var x=A;v!==void 0&&v.texture.dispose();const M=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,g=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let D=0;M===!0&&(D=1),T===!0&&(D=2),S===!0&&(D=3);let I=h.attributes.position.count*D,B=1;I>t.maxTextureSize&&(B=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const z=new Float32Array(I*B*4*y),q=new k0(z,I,B,y);q.type=la,q.needsUpdate=!0;const w=D*4;for(let H=0;H<y;H++){const ct=g[H],at=L[H],gt=U[H],dt=I*B*4*H;for(let W=0;W<ct.count;W++){const rt=W*w;M===!0&&(l.fromBufferAttribute(ct,W),z[dt+rt+0]=l.x,z[dt+rt+1]=l.y,z[dt+rt+2]=l.z,z[dt+rt+3]=0),T===!0&&(l.fromBufferAttribute(at,W),z[dt+rt+4]=l.x,z[dt+rt+5]=l.y,z[dt+rt+6]=l.z,z[dt+rt+7]=0),S===!0&&(l.fromBufferAttribute(gt,W),z[dt+rt+8]=l.x,z[dt+rt+9]=l.y,z[dt+rt+10]=l.z,z[dt+rt+11]=gt.itemSize===4?l.w:1)}}v={count:y,texture:q,size:new ue(I,B)},r.set(h,v),h.addEventListener("dispose",A)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(a,"morphTexture",f.morphTexture,n);else{let M=0;for(let S=0;S<m.length;S++)M+=m[S];const T=h.morphTargetsRelative?1:1-M;p.getUniforms().setValue(a,"morphTargetBaseInfluence",T),p.getUniforms().setValue(a,"morphTargetInfluences",m)}p.getUniforms().setValue(a,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(a,"morphTargetsTextureSize",v.size)}return{update:c}}function TR(a,t,n,r){let l=new WeakMap;function c(p){const m=r.render.frame,_=p.geometry,y=t.get(p,_);if(l.get(y)!==m&&(t.update(y),l.set(y,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==m&&(n.update(p.instanceMatrix,a.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,a.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const v=p.skeleton;l.get(v)!==m&&(v.update(),l.set(v,m))}return y}function f(){l=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:f}}const iy=new Xn,wv=new J0(1,1),ay=new k0,ry=new jM,sy=new Q0,Dv=[],Uv=[],Lv=new Float32Array(16),Nv=new Float32Array(9),Ov=new Float32Array(4);function Ys(a,t,n){const r=a[0];if(r<=0||r>0)return a;const l=t*n;let c=Dv[l];if(c===void 0&&(c=new Float32Array(l),Dv[l]=c),t!==0){r.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=n,a[f].toArray(c,h)}return c}function fn(a,t){if(a.length!==t.length)return!1;for(let n=0,r=a.length;n<r;n++)if(a[n]!==t[n])return!1;return!0}function hn(a,t){for(let n=0,r=t.length;n<r;n++)a[n]=t[n]}function hu(a,t){let n=Uv[t];n===void 0&&(n=new Int32Array(t),Uv[t]=n);for(let r=0;r!==t;++r)n[r]=a.allocateTextureUnit();return n}function bR(a,t){const n=this.cache;n[0]!==t&&(a.uniform1f(this.addr,t),n[0]=t)}function AR(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(a.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(fn(n,t))return;a.uniform2fv(this.addr,t),hn(n,t)}}function RR(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(a.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(a.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(fn(n,t))return;a.uniform3fv(this.addr,t),hn(n,t)}}function CR(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(a.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(fn(n,t))return;a.uniform4fv(this.addr,t),hn(n,t)}}function wR(a,t){const n=this.cache,r=t.elements;if(r===void 0){if(fn(n,t))return;a.uniformMatrix2fv(this.addr,!1,t),hn(n,t)}else{if(fn(n,r))return;Ov.set(r),a.uniformMatrix2fv(this.addr,!1,Ov),hn(n,r)}}function DR(a,t){const n=this.cache,r=t.elements;if(r===void 0){if(fn(n,t))return;a.uniformMatrix3fv(this.addr,!1,t),hn(n,t)}else{if(fn(n,r))return;Nv.set(r),a.uniformMatrix3fv(this.addr,!1,Nv),hn(n,r)}}function UR(a,t){const n=this.cache,r=t.elements;if(r===void 0){if(fn(n,t))return;a.uniformMatrix4fv(this.addr,!1,t),hn(n,t)}else{if(fn(n,r))return;Lv.set(r),a.uniformMatrix4fv(this.addr,!1,Lv),hn(n,r)}}function LR(a,t){const n=this.cache;n[0]!==t&&(a.uniform1i(this.addr,t),n[0]=t)}function NR(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(a.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(fn(n,t))return;a.uniform2iv(this.addr,t),hn(n,t)}}function OR(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(a.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(fn(n,t))return;a.uniform3iv(this.addr,t),hn(n,t)}}function PR(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(a.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(fn(n,t))return;a.uniform4iv(this.addr,t),hn(n,t)}}function IR(a,t){const n=this.cache;n[0]!==t&&(a.uniform1ui(this.addr,t),n[0]=t)}function BR(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(a.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(fn(n,t))return;a.uniform2uiv(this.addr,t),hn(n,t)}}function zR(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(a.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(fn(n,t))return;a.uniform3uiv(this.addr,t),hn(n,t)}}function FR(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(a.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(fn(n,t))return;a.uniform4uiv(this.addr,t),hn(n,t)}}function HR(a,t,n){const r=this.cache,l=n.allocateTextureUnit();r[0]!==l&&(a.uniform1i(this.addr,l),r[0]=l);let c;this.type===a.SAMPLER_2D_SHADOW?(wv.compareFunction=G0,c=wv):c=iy,n.setTexture2D(t||c,l)}function GR(a,t,n){const r=this.cache,l=n.allocateTextureUnit();r[0]!==l&&(a.uniform1i(this.addr,l),r[0]=l),n.setTexture3D(t||ry,l)}function VR(a,t,n){const r=this.cache,l=n.allocateTextureUnit();r[0]!==l&&(a.uniform1i(this.addr,l),r[0]=l),n.setTextureCube(t||sy,l)}function kR(a,t,n){const r=this.cache,l=n.allocateTextureUnit();r[0]!==l&&(a.uniform1i(this.addr,l),r[0]=l),n.setTexture2DArray(t||ay,l)}function XR(a){switch(a){case 5126:return bR;case 35664:return AR;case 35665:return RR;case 35666:return CR;case 35674:return wR;case 35675:return DR;case 35676:return UR;case 5124:case 35670:return LR;case 35667:case 35671:return NR;case 35668:case 35672:return OR;case 35669:case 35673:return PR;case 5125:return IR;case 36294:return BR;case 36295:return zR;case 36296:return FR;case 35678:case 36198:case 36298:case 36306:case 35682:return HR;case 35679:case 36299:case 36307:return GR;case 35680:case 36300:case 36308:case 36293:return VR;case 36289:case 36303:case 36311:case 36292:return kR}}function WR(a,t){a.uniform1fv(this.addr,t)}function YR(a,t){const n=Ys(t,this.size,2);a.uniform2fv(this.addr,n)}function qR(a,t){const n=Ys(t,this.size,3);a.uniform3fv(this.addr,n)}function jR(a,t){const n=Ys(t,this.size,4);a.uniform4fv(this.addr,n)}function ZR(a,t){const n=Ys(t,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function KR(a,t){const n=Ys(t,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function QR(a,t){const n=Ys(t,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function $R(a,t){a.uniform1iv(this.addr,t)}function JR(a,t){a.uniform2iv(this.addr,t)}function t1(a,t){a.uniform3iv(this.addr,t)}function e1(a,t){a.uniform4iv(this.addr,t)}function n1(a,t){a.uniform1uiv(this.addr,t)}function i1(a,t){a.uniform2uiv(this.addr,t)}function a1(a,t){a.uniform3uiv(this.addr,t)}function r1(a,t){a.uniform4uiv(this.addr,t)}function s1(a,t,n){const r=this.cache,l=t.length,c=hu(n,l);fn(r,c)||(a.uniform1iv(this.addr,c),hn(r,c));for(let f=0;f!==l;++f)n.setTexture2D(t[f]||iy,c[f])}function o1(a,t,n){const r=this.cache,l=t.length,c=hu(n,l);fn(r,c)||(a.uniform1iv(this.addr,c),hn(r,c));for(let f=0;f!==l;++f)n.setTexture3D(t[f]||ry,c[f])}function l1(a,t,n){const r=this.cache,l=t.length,c=hu(n,l);fn(r,c)||(a.uniform1iv(this.addr,c),hn(r,c));for(let f=0;f!==l;++f)n.setTextureCube(t[f]||sy,c[f])}function c1(a,t,n){const r=this.cache,l=t.length,c=hu(n,l);fn(r,c)||(a.uniform1iv(this.addr,c),hn(r,c));for(let f=0;f!==l;++f)n.setTexture2DArray(t[f]||ay,c[f])}function u1(a){switch(a){case 5126:return WR;case 35664:return YR;case 35665:return qR;case 35666:return jR;case 35674:return ZR;case 35675:return KR;case 35676:return QR;case 5124:case 35670:return $R;case 35667:case 35671:return JR;case 35668:case 35672:return t1;case 35669:case 35673:return e1;case 5125:return n1;case 36294:return i1;case 36295:return a1;case 36296:return r1;case 35678:case 36198:case 36298:case 36306:case 35682:return s1;case 35679:case 36299:case 36307:return o1;case 35680:case 36300:case 36308:case 36293:return l1;case 36289:case 36303:case 36311:case 36292:return c1}}class f1{constructor(t,n,r){this.id=t,this.addr=r,this.cache=[],this.type=n.type,this.setValue=XR(n.type)}}class h1{constructor(t,n,r){this.id=t,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=u1(n.type)}}class d1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,n[h.id],r)}}}const td=/(\w+)(\])?(\[|\.)?/g;function Pv(a,t){a.seq.push(t),a.map[t.id]=t}function p1(a,t,n){const r=a.name,l=r.length;for(td.lastIndex=0;;){const c=td.exec(r),f=td.lastIndex;let h=c[1];const p=c[2]==="]",m=c[3];if(p&&(h=h|0),m===void 0||m==="["&&f+2===l){Pv(n,m===void 0?new f1(h,a,t):new h1(h,a,t));break}else{let y=n.map[h];y===void 0&&(y=new d1(h),Pv(n,y)),n=y}}}class Jc{constructor(t,n){this.seq=[],this.map={};const r=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(n,l),f=t.getUniformLocation(n,c.name);p1(c,f,this)}}setValue(t,n,r,l){const c=this.map[n];c!==void 0&&c.setValue(t,r,l)}setOptional(t,n,r){const l=n[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,n,r,l){for(let c=0,f=n.length;c!==f;++c){const h=n[c],p=r[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,l)}}static seqWithValue(t,n){const r=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in n&&r.push(f)}return r}}function Iv(a,t,n){const r=a.createShader(t);return a.shaderSource(r,n),a.compileShader(r),r}const m1=37297;let g1=0;function _1(a,t){const n=a.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let f=l;f<c;f++){const h=f+1;r.push(`${h===t?">":" "} ${h}: ${n[f]}`)}return r.join(`
`)}const Bv=new ce;function v1(a){we._getMatrix(Bv,we.workingColorSpace,a);const t=`mat3( ${Bv.elements.map(n=>n.toFixed(4))} )`;switch(we.getTransfer(a)){case nu:return[t,"LinearTransferOETF"];case Ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[t,"LinearTransferOETF"]}}function zv(a,t,n){const r=a.getShaderParameter(t,a.COMPILE_STATUS),l=a.getShaderInfoLog(t).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+l+`

`+_1(a.getShaderSource(t),f)}else return l}function y1(a,t){const n=v1(t);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function x1(a,t){let n;switch(t){case yM:n="Linear";break;case xM:n="Reinhard";break;case SM:n="Cineon";break;case EM:n="ACESFilmic";break;case TM:n="AgX";break;case bM:n="Neutral";break;case MM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Vc=new J;function S1(){we.getLuminanceCoefficients(Vc);const a=Vc.x.toFixed(4),t=Vc.y.toFixed(4),n=Vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function E1(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function M1(a){const t=[];for(const n in a){const r=a[n];r!==!1&&t.push("#define "+n+" "+r)}return t.join(`
`)}function T1(a,t){const n={},r=a.getProgramParameter(t,a.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=a.getActiveAttrib(t,l),f=c.name;let h=1;c.type===a.FLOAT_MAT2&&(h=2),c.type===a.FLOAT_MAT3&&(h=3),c.type===a.FLOAT_MAT4&&(h=4),n[f]={type:c.type,location:a.getAttribLocation(t,f),locationSize:h}}return n}function $o(a){return a!==""}function Fv(a,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hv(a,t){return a.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const b1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xd(a){return a.replace(b1,R1)}const A1=new Map;function R1(a,t){let n=fe[t];if(n===void 0){const r=A1.get(t);if(r!==void 0)n=fe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Xd(n)}const C1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gv(a){return a.replace(C1,w1)}function w1(a,t,n,r){let l="";for(let c=parseInt(t);c<parseInt(n);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Vv(a){let t=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?t+=`
#define HIGH_PRECISION`:a.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function D1(a){let t="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===C0?t="SHADOWMAP_TYPE_PCF":a.shadowMapType===$E?t="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===sa&&(t="SHADOWMAP_TYPE_VSM"),t}function U1(a){let t="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Bs:case zs:t="ENVMAP_TYPE_CUBE";break;case cu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function L1(a){let t="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case zs:t="ENVMAP_MODE_REFRACTION";break}return t}function N1(a){let t="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case $d:t="ENVMAP_BLENDING_MULTIPLY";break;case _M:t="ENVMAP_BLENDING_MIX";break;case vM:t="ENVMAP_BLENDING_ADD";break}return t}function O1(a){const t=a.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function P1(a,t,n,r){const l=a.getContext(),c=n.defines;let f=n.vertexShader,h=n.fragmentShader;const p=D1(n),m=U1(n),_=L1(n),y=N1(n),v=O1(n),x=E1(n),M=M1(c),T=l.createProgram();let S,g,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter($o).join(`
`),S.length>0&&(S+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter($o).join(`
`),g.length>0&&(g+=`
`)):(S=[Vv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),g=[Vv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+y:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ya?"#define TONE_MAPPING":"",n.toneMapping!==Ya?fe.tonemapping_pars_fragment:"",n.toneMapping!==Ya?x1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,y1("linearToOutputTexel",n.outputColorSpace),S1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter($o).join(`
`)),f=Xd(f),f=Fv(f,n),f=Hv(f,n),h=Xd(h),h=Fv(h,n),h=Hv(h,n),f=Gv(f),h=Gv(h),n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,g=["#define varying in",n.glslVersion===Q_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Q_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const U=L+S+f,D=L+g+h,I=Iv(l,l.VERTEX_SHADER,U),B=Iv(l,l.FRAGMENT_SHADER,D);l.attachShader(T,I),l.attachShader(T,B),n.index0AttributeName!==void 0?l.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function z(H){if(a.debug.checkShaderErrors){const ct=l.getProgramInfoLog(T).trim(),at=l.getShaderInfoLog(I).trim(),gt=l.getShaderInfoLog(B).trim();let dt=!0,W=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(dt=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(l,T,I,B);else{const rt=zv(l,I,"vertex"),Z=zv(l,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ct+`
`+rt+`
`+Z)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(at===""||gt==="")&&(W=!1);W&&(H.diagnostics={runnable:dt,programLog:ct,vertexShader:{log:at,prefix:S},fragmentShader:{log:gt,prefix:g}})}l.deleteShader(I),l.deleteShader(B),q=new Jc(l,T),w=T1(l,T)}let q;this.getUniforms=function(){return q===void 0&&z(this),q};let w;this.getAttributes=function(){return w===void 0&&z(this),w};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=l.getProgramParameter(T,m1)),A},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=g1++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=I,this.fragmentShader=B,this}let I1=0;class B1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(n),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let r=n.get(t);return r===void 0&&(r=new Set,n.set(t,r)),r}_getShaderStage(t){const n=this.shaderCache;let r=n.get(t);return r===void 0&&(r=new z1(t),n.set(t,r)),r}}class z1{constructor(t){this.id=I1++,this.code=t,this.usedTimes=0}}function F1(a,t,n,r,l,c,f){const h=new X0,p=new B1,m=new Set,_=[],y=l.logarithmicDepthBuffer,v=l.vertexTextures;let x=l.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(w){return m.add(w),w===0?"uv":`uv${w}`}function S(w,A,H,ct,at){const gt=ct.fog,dt=at.geometry,W=w.isMeshStandardMaterial?ct.environment:null,rt=(w.isMeshStandardMaterial?n:t).get(w.envMap||W),Z=rt&&rt.mapping===cu?rt.image.height:null,St=M[w.type];w.precision!==null&&(x=l.getMaxPrecision(w.precision),x!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",x,"instead."));const O=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,it=O!==void 0?O.length:0;let Tt=0;dt.morphAttributes.position!==void 0&&(Tt=1),dt.morphAttributes.normal!==void 0&&(Tt=2),dt.morphAttributes.color!==void 0&&(Tt=3);let Rt,Y,pt,xt;if(St){const be=Di[St];Rt=be.vertexShader,Y=be.fragmentShader}else Rt=w.vertexShader,Y=w.fragmentShader,p.update(w),pt=p.getVertexShaderID(w),xt=p.getFragmentShaderID(w);const bt=a.getRenderTarget(),Ct=a.state.buffers.depth.getReversed(),$t=at.isInstancedMesh===!0,It=at.isBatchedMesh===!0,Te=!!w.map,De=!!w.matcap,re=!!rt,F=!!w.aoMap,vn=!!w.lightMap,oe=!!w.bumpMap,de=!!w.normalMap,Xt=!!w.displacementMap,Ue=!!w.emissiveMap,Wt=!!w.metalnessMap,N=!!w.roughnessMap,b=w.anisotropy>0,et=w.clearcoat>0,ft=w.dispersion>0,yt=w.iridescence>0,ht=w.sheen>0,Gt=w.transmission>0,Dt=b&&!!w.anisotropyMap,Bt=et&&!!w.clearcoatMap,_e=et&&!!w.clearcoatNormalMap,Mt=et&&!!w.clearcoatRoughnessMap,zt=yt&&!!w.iridescenceMap,Qt=yt&&!!w.iridescenceThicknessMap,Vt=ht&&!!w.sheenColorMap,Ft=ht&&!!w.sheenRoughnessMap,se=!!w.specularMap,jt=!!w.specularColorMap,Le=!!w.specularIntensityMap,k=Gt&&!!w.transmissionMap,Nt=Gt&&!!w.thicknessMap,st=!!w.gradientMap,_t=!!w.alphaMap,wt=w.alphaTest>0,Ut=!!w.alphaHash,te=!!w.extensions;let Ve=Ya;w.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(Ve=a.toneMapping);const an={shaderID:St,shaderType:w.type,shaderName:w.name,vertexShader:Rt,fragmentShader:Y,defines:w.defines,customVertexShaderID:pt,customFragmentShaderID:xt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:x,batching:It,batchingColor:It&&at._colorsTexture!==null,instancing:$t,instancingColor:$t&&at.instanceColor!==null,instancingMorph:$t&&at.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:bt===null?a.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:Gs,alphaToCoverage:!!w.alphaToCoverage,map:Te,matcap:De,envMap:re,envMapMode:re&&rt.mapping,envMapCubeUVHeight:Z,aoMap:F,lightMap:vn,bumpMap:oe,normalMap:de,displacementMap:v&&Xt,emissiveMap:Ue,normalMapObjectSpace:de&&w.normalMapType===wM,normalMapTangentSpace:de&&w.normalMapType===H0,metalnessMap:Wt,roughnessMap:N,anisotropy:b,anisotropyMap:Dt,clearcoat:et,clearcoatMap:Bt,clearcoatNormalMap:_e,clearcoatRoughnessMap:Mt,dispersion:ft,iridescence:yt,iridescenceMap:zt,iridescenceThicknessMap:Qt,sheen:ht,sheenColorMap:Vt,sheenRoughnessMap:Ft,specularMap:se,specularColorMap:jt,specularIntensityMap:Le,transmission:Gt,transmissionMap:k,thicknessMap:Nt,gradientMap:st,opaque:w.transparent===!1&&w.blending===Ns&&w.alphaToCoverage===!1,alphaMap:_t,alphaTest:wt,alphaHash:Ut,combine:w.combine,mapUv:Te&&T(w.map.channel),aoMapUv:F&&T(w.aoMap.channel),lightMapUv:vn&&T(w.lightMap.channel),bumpMapUv:oe&&T(w.bumpMap.channel),normalMapUv:de&&T(w.normalMap.channel),displacementMapUv:Xt&&T(w.displacementMap.channel),emissiveMapUv:Ue&&T(w.emissiveMap.channel),metalnessMapUv:Wt&&T(w.metalnessMap.channel),roughnessMapUv:N&&T(w.roughnessMap.channel),anisotropyMapUv:Dt&&T(w.anisotropyMap.channel),clearcoatMapUv:Bt&&T(w.clearcoatMap.channel),clearcoatNormalMapUv:_e&&T(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&T(w.clearcoatRoughnessMap.channel),iridescenceMapUv:zt&&T(w.iridescenceMap.channel),iridescenceThicknessMapUv:Qt&&T(w.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&T(w.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&T(w.sheenRoughnessMap.channel),specularMapUv:se&&T(w.specularMap.channel),specularColorMapUv:jt&&T(w.specularColorMap.channel),specularIntensityMapUv:Le&&T(w.specularIntensityMap.channel),transmissionMapUv:k&&T(w.transmissionMap.channel),thicknessMapUv:Nt&&T(w.thicknessMap.channel),alphaMapUv:_t&&T(w.alphaMap.channel),vertexTangents:!!dt.attributes.tangent&&(de||b),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!dt.attributes.uv&&(Te||_t),fog:!!gt,useFog:w.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:y,reverseDepthBuffer:Ct,skinning:at.isSkinnedMesh===!0,morphTargets:dt.morphAttributes.position!==void 0,morphNormals:dt.morphAttributes.normal!==void 0,morphColors:dt.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:Tt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:w.dithering,shadowMapEnabled:a.shadowMap.enabled&&H.length>0,shadowMapType:a.shadowMap.type,toneMapping:Ve,decodeVideoTexture:Te&&w.map.isVideoTexture===!0&&we.getTransfer(w.map.colorSpace)===Ie,decodeVideoTextureEmissive:Ue&&w.emissiveMap.isVideoTexture===!0&&we.getTransfer(w.emissiveMap.colorSpace)===Ie,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===oa,flipSided:w.side===kn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:te&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&w.extensions.multiDraw===!0||It)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return an.vertexUv1s=m.has(1),an.vertexUv2s=m.has(2),an.vertexUv3s=m.has(3),m.clear(),an}function g(w){const A=[];if(w.shaderID?A.push(w.shaderID):(A.push(w.customVertexShaderID),A.push(w.customFragmentShaderID)),w.defines!==void 0)for(const H in w.defines)A.push(H),A.push(w.defines[H]);return w.isRawShaderMaterial===!1&&(L(A,w),U(A,w),A.push(a.outputColorSpace)),A.push(w.customProgramCacheKey),A.join()}function L(w,A){w.push(A.precision),w.push(A.outputColorSpace),w.push(A.envMapMode),w.push(A.envMapCubeUVHeight),w.push(A.mapUv),w.push(A.alphaMapUv),w.push(A.lightMapUv),w.push(A.aoMapUv),w.push(A.bumpMapUv),w.push(A.normalMapUv),w.push(A.displacementMapUv),w.push(A.emissiveMapUv),w.push(A.metalnessMapUv),w.push(A.roughnessMapUv),w.push(A.anisotropyMapUv),w.push(A.clearcoatMapUv),w.push(A.clearcoatNormalMapUv),w.push(A.clearcoatRoughnessMapUv),w.push(A.iridescenceMapUv),w.push(A.iridescenceThicknessMapUv),w.push(A.sheenColorMapUv),w.push(A.sheenRoughnessMapUv),w.push(A.specularMapUv),w.push(A.specularColorMapUv),w.push(A.specularIntensityMapUv),w.push(A.transmissionMapUv),w.push(A.thicknessMapUv),w.push(A.combine),w.push(A.fogExp2),w.push(A.sizeAttenuation),w.push(A.morphTargetsCount),w.push(A.morphAttributeCount),w.push(A.numDirLights),w.push(A.numPointLights),w.push(A.numSpotLights),w.push(A.numSpotLightMaps),w.push(A.numHemiLights),w.push(A.numRectAreaLights),w.push(A.numDirLightShadows),w.push(A.numPointLightShadows),w.push(A.numSpotLightShadows),w.push(A.numSpotLightShadowsWithMaps),w.push(A.numLightProbes),w.push(A.shadowMapType),w.push(A.toneMapping),w.push(A.numClippingPlanes),w.push(A.numClipIntersection),w.push(A.depthPacking)}function U(w,A){h.disableAll(),A.supportsVertexTextures&&h.enable(0),A.instancing&&h.enable(1),A.instancingColor&&h.enable(2),A.instancingMorph&&h.enable(3),A.matcap&&h.enable(4),A.envMap&&h.enable(5),A.normalMapObjectSpace&&h.enable(6),A.normalMapTangentSpace&&h.enable(7),A.clearcoat&&h.enable(8),A.iridescence&&h.enable(9),A.alphaTest&&h.enable(10),A.vertexColors&&h.enable(11),A.vertexAlphas&&h.enable(12),A.vertexUv1s&&h.enable(13),A.vertexUv2s&&h.enable(14),A.vertexUv3s&&h.enable(15),A.vertexTangents&&h.enable(16),A.anisotropy&&h.enable(17),A.alphaHash&&h.enable(18),A.batching&&h.enable(19),A.dispersion&&h.enable(20),A.batchingColor&&h.enable(21),w.push(h.mask),h.disableAll(),A.fog&&h.enable(0),A.useFog&&h.enable(1),A.flatShading&&h.enable(2),A.logarithmicDepthBuffer&&h.enable(3),A.reverseDepthBuffer&&h.enable(4),A.skinning&&h.enable(5),A.morphTargets&&h.enable(6),A.morphNormals&&h.enable(7),A.morphColors&&h.enable(8),A.premultipliedAlpha&&h.enable(9),A.shadowMapEnabled&&h.enable(10),A.doubleSided&&h.enable(11),A.flipSided&&h.enable(12),A.useDepthPacking&&h.enable(13),A.dithering&&h.enable(14),A.transmission&&h.enable(15),A.sheen&&h.enable(16),A.opaque&&h.enable(17),A.pointsUvs&&h.enable(18),A.decodeVideoTexture&&h.enable(19),A.decodeVideoTextureEmissive&&h.enable(20),A.alphaToCoverage&&h.enable(21),w.push(h.mask)}function D(w){const A=M[w.type];let H;if(A){const ct=Di[A];H=oT.clone(ct.uniforms)}else H=w.uniforms;return H}function I(w,A){let H;for(let ct=0,at=_.length;ct<at;ct++){const gt=_[ct];if(gt.cacheKey===A){H=gt,++H.usedTimes;break}}return H===void 0&&(H=new P1(a,A,w,c),_.push(H)),H}function B(w){if(--w.usedTimes===0){const A=_.indexOf(w);_[A]=_[_.length-1],_.pop(),w.destroy()}}function z(w){p.remove(w)}function q(){p.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:D,acquireProgram:I,releaseProgram:B,releaseShaderCache:z,programs:_,dispose:q}}function H1(){let a=new WeakMap;function t(f){return a.has(f)}function n(f){let h=a.get(f);return h===void 0&&(h={},a.set(f,h)),h}function r(f){a.delete(f)}function l(f,h,p){a.get(f)[h]=p}function c(){a=new WeakMap}return{has:t,get:n,remove:r,update:l,dispose:c}}function G1(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.material.id!==t.material.id?a.material.id-t.material.id:a.z!==t.z?a.z-t.z:a.id-t.id}function kv(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.z!==t.z?t.z-a.z:a.id-t.id}function Xv(){const a=[];let t=0;const n=[],r=[],l=[];function c(){t=0,n.length=0,r.length=0,l.length=0}function f(y,v,x,M,T,S){let g=a[t];return g===void 0?(g={id:y.id,object:y,geometry:v,material:x,groupOrder:M,renderOrder:y.renderOrder,z:T,group:S},a[t]=g):(g.id=y.id,g.object=y,g.geometry=v,g.material=x,g.groupOrder=M,g.renderOrder=y.renderOrder,g.z=T,g.group=S),t++,g}function h(y,v,x,M,T,S){const g=f(y,v,x,M,T,S);x.transmission>0?r.push(g):x.transparent===!0?l.push(g):n.push(g)}function p(y,v,x,M,T,S){const g=f(y,v,x,M,T,S);x.transmission>0?r.unshift(g):x.transparent===!0?l.unshift(g):n.unshift(g)}function m(y,v){n.length>1&&n.sort(y||G1),r.length>1&&r.sort(v||kv),l.length>1&&l.sort(v||kv)}function _(){for(let y=t,v=a.length;y<v;y++){const x=a[y];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:r,transparent:l,init:c,push:h,unshift:p,finish:_,sort:m}}function V1(){let a=new WeakMap;function t(r,l){const c=a.get(r);let f;return c===void 0?(f=new Xv,a.set(r,[f])):l>=c.length?(f=new Xv,c.push(f)):f=c[l],f}function n(){a=new WeakMap}return{get:t,dispose:n}}function k1(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new J,color:new Me};break;case"SpotLight":n={position:new J,direction:new J,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new J,color:new Me,distance:0,decay:0};break;case"HemisphereLight":n={direction:new J,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":n={color:new Me,position:new J,halfWidth:new J,halfHeight:new J};break}return a[t.id]=n,n}}}function X1(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[t.id]=n,n}}}let W1=0;function Y1(a,t){return(t.castShadow?2:0)-(a.castShadow?2:0)+(t.map?1:0)-(a.map?1:0)}function q1(a){const t=new k1,n=X1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new J);const l=new J,c=new Ye,f=new Ye;function h(m){let _=0,y=0,v=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let x=0,M=0,T=0,S=0,g=0,L=0,U=0,D=0,I=0,B=0,z=0;m.sort(Y1);for(let w=0,A=m.length;w<A;w++){const H=m[w],ct=H.color,at=H.intensity,gt=H.distance,dt=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)_+=ct.r*at,y+=ct.g*at,v+=ct.b*at;else if(H.isLightProbe){for(let W=0;W<9;W++)r.probe[W].addScaledVector(H.sh.coefficients[W],at);z++}else if(H.isDirectionalLight){const W=t.get(H);if(W.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const rt=H.shadow,Z=n.get(H);Z.shadowIntensity=rt.intensity,Z.shadowBias=rt.bias,Z.shadowNormalBias=rt.normalBias,Z.shadowRadius=rt.radius,Z.shadowMapSize=rt.mapSize,r.directionalShadow[x]=Z,r.directionalShadowMap[x]=dt,r.directionalShadowMatrix[x]=H.shadow.matrix,L++}r.directional[x]=W,x++}else if(H.isSpotLight){const W=t.get(H);W.position.setFromMatrixPosition(H.matrixWorld),W.color.copy(ct).multiplyScalar(at),W.distance=gt,W.coneCos=Math.cos(H.angle),W.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),W.decay=H.decay,r.spot[T]=W;const rt=H.shadow;if(H.map&&(r.spotLightMap[I]=H.map,I++,rt.updateMatrices(H),H.castShadow&&B++),r.spotLightMatrix[T]=rt.matrix,H.castShadow){const Z=n.get(H);Z.shadowIntensity=rt.intensity,Z.shadowBias=rt.bias,Z.shadowNormalBias=rt.normalBias,Z.shadowRadius=rt.radius,Z.shadowMapSize=rt.mapSize,r.spotShadow[T]=Z,r.spotShadowMap[T]=dt,D++}T++}else if(H.isRectAreaLight){const W=t.get(H);W.color.copy(ct).multiplyScalar(at),W.halfWidth.set(H.width*.5,0,0),W.halfHeight.set(0,H.height*.5,0),r.rectArea[S]=W,S++}else if(H.isPointLight){const W=t.get(H);if(W.color.copy(H.color).multiplyScalar(H.intensity),W.distance=H.distance,W.decay=H.decay,H.castShadow){const rt=H.shadow,Z=n.get(H);Z.shadowIntensity=rt.intensity,Z.shadowBias=rt.bias,Z.shadowNormalBias=rt.normalBias,Z.shadowRadius=rt.radius,Z.shadowMapSize=rt.mapSize,Z.shadowCameraNear=rt.camera.near,Z.shadowCameraFar=rt.camera.far,r.pointShadow[M]=Z,r.pointShadowMap[M]=dt,r.pointShadowMatrix[M]=H.shadow.matrix,U++}r.point[M]=W,M++}else if(H.isHemisphereLight){const W=t.get(H);W.skyColor.copy(H.color).multiplyScalar(at),W.groundColor.copy(H.groundColor).multiplyScalar(at),r.hemi[g]=W,g++}}S>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Lt.LTC_FLOAT_1,r.rectAreaLTC2=Lt.LTC_FLOAT_2):(r.rectAreaLTC1=Lt.LTC_HALF_1,r.rectAreaLTC2=Lt.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=y,r.ambient[2]=v;const q=r.hash;(q.directionalLength!==x||q.pointLength!==M||q.spotLength!==T||q.rectAreaLength!==S||q.hemiLength!==g||q.numDirectionalShadows!==L||q.numPointShadows!==U||q.numSpotShadows!==D||q.numSpotMaps!==I||q.numLightProbes!==z)&&(r.directional.length=x,r.spot.length=T,r.rectArea.length=S,r.point.length=M,r.hemi.length=g,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=D+I-B,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=z,q.directionalLength=x,q.pointLength=M,q.spotLength=T,q.rectAreaLength=S,q.hemiLength=g,q.numDirectionalShadows=L,q.numPointShadows=U,q.numSpotShadows=D,q.numSpotMaps=I,q.numLightProbes=z,r.version=W1++)}function p(m,_){let y=0,v=0,x=0,M=0,T=0;const S=_.matrixWorldInverse;for(let g=0,L=m.length;g<L;g++){const U=m[g];if(U.isDirectionalLight){const D=r.directional[y];D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),y++}else if(U.isSpotLight){const D=r.spot[x];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),x++}else if(U.isRectAreaLight){const D=r.rectArea[M];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(S),f.identity(),c.copy(U.matrixWorld),c.premultiply(S),f.extractRotation(c),D.halfWidth.set(U.width*.5,0,0),D.halfHeight.set(0,U.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),M++}else if(U.isPointLight){const D=r.point[v];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(S),v++}else if(U.isHemisphereLight){const D=r.hemi[T];D.direction.setFromMatrixPosition(U.matrixWorld),D.direction.transformDirection(S),T++}}}return{setup:h,setupView:p,state:r}}function Wv(a){const t=new q1(a),n=[],r=[];function l(_){m.camera=_,n.length=0,r.length=0}function c(_){n.push(_)}function f(_){r.push(_)}function h(){t.setup(n)}function p(_){t.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:f}}function j1(a){let t=new WeakMap;function n(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new Wv(a),t.set(l,[h])):c>=f.length?(h=new Wv(a),f.push(h)):h=f[c],h}function r(){t=new WeakMap}return{get:n,dispose:r}}const Z1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Q1(a,t,n){let r=new op;const l=new ue,c=new ue,f=new Qe,h=new vT({depthPacking:CM}),p=new yT,m={},_=n.maxTextureSize,y={[ja]:kn,[kn]:ja,[oa]:oa},v=new Za({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:Z1,fragmentShader:K1}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const M=new Bi;M.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Li(M,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=C0;let g=this.type;this.render=function(B,z,q){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||B.length===0)return;const w=a.getRenderTarget(),A=a.getActiveCubeFace(),H=a.getActiveMipmapLevel(),ct=a.state;ct.setBlending(Wa),ct.buffers.color.setClear(1,1,1,1),ct.buffers.depth.setTest(!0),ct.setScissorTest(!1);const at=g!==sa&&this.type===sa,gt=g===sa&&this.type!==sa;for(let dt=0,W=B.length;dt<W;dt++){const rt=B[dt],Z=rt.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const St=Z.getFrameExtents();if(l.multiply(St),c.copy(Z.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/St.x),l.x=c.x*St.x,Z.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/St.y),l.y=c.y*St.y,Z.mapSize.y=c.y)),Z.map===null||at===!0||gt===!0){const it=this.type!==sa?{minFilter:Ei,magFilter:Ei}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Dr(l.x,l.y,it),Z.map.texture.name=rt.name+".shadowMap",Z.camera.updateProjectionMatrix()}a.setRenderTarget(Z.map),a.clear();const O=Z.getViewportCount();for(let it=0;it<O;it++){const Tt=Z.getViewport(it);f.set(c.x*Tt.x,c.y*Tt.y,c.x*Tt.z,c.y*Tt.w),ct.viewport(f),Z.updateMatrices(rt,it),r=Z.getFrustum(),D(z,q,Z.camera,rt,this.type)}Z.isPointLightShadow!==!0&&this.type===sa&&L(Z,q),Z.needsUpdate=!1}g=this.type,S.needsUpdate=!1,a.setRenderTarget(w,A,H)};function L(B,z){const q=t.update(T);v.defines.VSM_SAMPLES!==B.blurSamples&&(v.defines.VSM_SAMPLES=B.blurSamples,x.defines.VSM_SAMPLES=B.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Dr(l.x,l.y)),v.uniforms.shadow_pass.value=B.map.texture,v.uniforms.resolution.value=B.mapSize,v.uniforms.radius.value=B.radius,a.setRenderTarget(B.mapPass),a.clear(),a.renderBufferDirect(z,null,q,v,T,null),x.uniforms.shadow_pass.value=B.mapPass.texture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,a.setRenderTarget(B.map),a.clear(),a.renderBufferDirect(z,null,q,x,T,null)}function U(B,z,q,w){let A=null;const H=q.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(H!==void 0)A=H;else if(A=q.isPointLight===!0?p:h,a.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const ct=A.uuid,at=z.uuid;let gt=m[ct];gt===void 0&&(gt={},m[ct]=gt);let dt=gt[at];dt===void 0&&(dt=A.clone(),gt[at]=dt,z.addEventListener("dispose",I)),A=dt}if(A.visible=z.visible,A.wireframe=z.wireframe,w===sa?A.side=z.shadowSide!==null?z.shadowSide:z.side:A.side=z.shadowSide!==null?z.shadowSide:y[z.side],A.alphaMap=z.alphaMap,A.alphaTest=z.alphaTest,A.map=z.map,A.clipShadows=z.clipShadows,A.clippingPlanes=z.clippingPlanes,A.clipIntersection=z.clipIntersection,A.displacementMap=z.displacementMap,A.displacementScale=z.displacementScale,A.displacementBias=z.displacementBias,A.wireframeLinewidth=z.wireframeLinewidth,A.linewidth=z.linewidth,q.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const ct=a.properties.get(A);ct.light=q}return A}function D(B,z,q,w,A){if(B.visible===!1)return;if(B.layers.test(z.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&A===sa)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,B.matrixWorld);const at=t.update(B),gt=B.material;if(Array.isArray(gt)){const dt=at.groups;for(let W=0,rt=dt.length;W<rt;W++){const Z=dt[W],St=gt[Z.materialIndex];if(St&&St.visible){const O=U(B,St,w,A);B.onBeforeShadow(a,B,z,q,at,O,Z),a.renderBufferDirect(q,null,at,O,B,Z),B.onAfterShadow(a,B,z,q,at,O,Z)}}}else if(gt.visible){const dt=U(B,gt,w,A);B.onBeforeShadow(a,B,z,q,at,dt,null),a.renderBufferDirect(q,null,at,dt,B,null),B.onAfterShadow(a,B,z,q,at,dt,null)}}const ct=B.children;for(let at=0,gt=ct.length;at<gt;at++)D(ct[at],z,q,w,A)}function I(B){B.target.removeEventListener("dispose",I);for(const q in m){const w=m[q],A=B.target.uuid;A in w&&(w[A].dispose(),delete w[A])}}}const $1={[sd]:od,[ld]:fd,[cd]:hd,[Is]:ud,[od]:sd,[fd]:ld,[hd]:cd,[ud]:Is};function J1(a,t){function n(){let k=!1;const Nt=new Qe;let st=null;const _t=new Qe(0,0,0,0);return{setMask:function(wt){st!==wt&&!k&&(a.colorMask(wt,wt,wt,wt),st=wt)},setLocked:function(wt){k=wt},setClear:function(wt,Ut,te,Ve,an){an===!0&&(wt*=Ve,Ut*=Ve,te*=Ve),Nt.set(wt,Ut,te,Ve),_t.equals(Nt)===!1&&(a.clearColor(wt,Ut,te,Ve),_t.copy(Nt))},reset:function(){k=!1,st=null,_t.set(-1,0,0,0)}}}function r(){let k=!1,Nt=!1,st=null,_t=null,wt=null;return{setReversed:function(Ut){if(Nt!==Ut){const te=t.get("EXT_clip_control");Nt?te.clipControlEXT(te.LOWER_LEFT_EXT,te.ZERO_TO_ONE_EXT):te.clipControlEXT(te.LOWER_LEFT_EXT,te.NEGATIVE_ONE_TO_ONE_EXT);const Ve=wt;wt=null,this.setClear(Ve)}Nt=Ut},getReversed:function(){return Nt},setTest:function(Ut){Ut?bt(a.DEPTH_TEST):Ct(a.DEPTH_TEST)},setMask:function(Ut){st!==Ut&&!k&&(a.depthMask(Ut),st=Ut)},setFunc:function(Ut){if(Nt&&(Ut=$1[Ut]),_t!==Ut){switch(Ut){case sd:a.depthFunc(a.NEVER);break;case od:a.depthFunc(a.ALWAYS);break;case ld:a.depthFunc(a.LESS);break;case Is:a.depthFunc(a.LEQUAL);break;case cd:a.depthFunc(a.EQUAL);break;case ud:a.depthFunc(a.GEQUAL);break;case fd:a.depthFunc(a.GREATER);break;case hd:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}_t=Ut}},setLocked:function(Ut){k=Ut},setClear:function(Ut){wt!==Ut&&(Nt&&(Ut=1-Ut),a.clearDepth(Ut),wt=Ut)},reset:function(){k=!1,st=null,_t=null,wt=null,Nt=!1}}}function l(){let k=!1,Nt=null,st=null,_t=null,wt=null,Ut=null,te=null,Ve=null,an=null;return{setTest:function(be){k||(be?bt(a.STENCIL_TEST):Ct(a.STENCIL_TEST))},setMask:function(be){Nt!==be&&!k&&(a.stencilMask(be),Nt=be)},setFunc:function(be,Dn,Un){(st!==be||_t!==Dn||wt!==Un)&&(a.stencilFunc(be,Dn,Un),st=be,_t=Dn,wt=Un)},setOp:function(be,Dn,Un){(Ut!==be||te!==Dn||Ve!==Un)&&(a.stencilOp(be,Dn,Un),Ut=be,te=Dn,Ve=Un)},setLocked:function(be){k=be},setClear:function(be){an!==be&&(a.clearStencil(be),an=be)},reset:function(){k=!1,Nt=null,st=null,_t=null,wt=null,Ut=null,te=null,Ve=null,an=null}}}const c=new n,f=new r,h=new l,p=new WeakMap,m=new WeakMap;let _={},y={},v=new WeakMap,x=[],M=null,T=!1,S=null,g=null,L=null,U=null,D=null,I=null,B=null,z=new Me(0,0,0),q=0,w=!1,A=null,H=null,ct=null,at=null,gt=null;const dt=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,rt=0;const Z=a.getParameter(a.VERSION);Z.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(Z)[1]),W=rt>=1):Z.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),W=rt>=2);let St=null,O={};const it=a.getParameter(a.SCISSOR_BOX),Tt=a.getParameter(a.VIEWPORT),Rt=new Qe().fromArray(it),Y=new Qe().fromArray(Tt);function pt(k,Nt,st,_t){const wt=new Uint8Array(4),Ut=a.createTexture();a.bindTexture(k,Ut),a.texParameteri(k,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(k,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let te=0;te<st;te++)k===a.TEXTURE_3D||k===a.TEXTURE_2D_ARRAY?a.texImage3D(Nt,0,a.RGBA,1,1,_t,0,a.RGBA,a.UNSIGNED_BYTE,wt):a.texImage2D(Nt+te,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,wt);return Ut}const xt={};xt[a.TEXTURE_2D]=pt(a.TEXTURE_2D,a.TEXTURE_2D,1),xt[a.TEXTURE_CUBE_MAP]=pt(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[a.TEXTURE_2D_ARRAY]=pt(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),xt[a.TEXTURE_3D]=pt(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),bt(a.DEPTH_TEST),f.setFunc(Is),oe(!1),de(W_),bt(a.CULL_FACE),F(Wa);function bt(k){_[k]!==!0&&(a.enable(k),_[k]=!0)}function Ct(k){_[k]!==!1&&(a.disable(k),_[k]=!1)}function $t(k,Nt){return y[k]!==Nt?(a.bindFramebuffer(k,Nt),y[k]=Nt,k===a.DRAW_FRAMEBUFFER&&(y[a.FRAMEBUFFER]=Nt),k===a.FRAMEBUFFER&&(y[a.DRAW_FRAMEBUFFER]=Nt),!0):!1}function It(k,Nt){let st=x,_t=!1;if(k){st=v.get(Nt),st===void 0&&(st=[],v.set(Nt,st));const wt=k.textures;if(st.length!==wt.length||st[0]!==a.COLOR_ATTACHMENT0){for(let Ut=0,te=wt.length;Ut<te;Ut++)st[Ut]=a.COLOR_ATTACHMENT0+Ut;st.length=wt.length,_t=!0}}else st[0]!==a.BACK&&(st[0]=a.BACK,_t=!0);_t&&a.drawBuffers(st)}function Te(k){return M!==k?(a.useProgram(k),M=k,!0):!1}const De={[Tr]:a.FUNC_ADD,[tM]:a.FUNC_SUBTRACT,[eM]:a.FUNC_REVERSE_SUBTRACT};De[nM]=a.MIN,De[iM]=a.MAX;const re={[aM]:a.ZERO,[rM]:a.ONE,[sM]:a.SRC_COLOR,[ad]:a.SRC_ALPHA,[hM]:a.SRC_ALPHA_SATURATE,[uM]:a.DST_COLOR,[lM]:a.DST_ALPHA,[oM]:a.ONE_MINUS_SRC_COLOR,[rd]:a.ONE_MINUS_SRC_ALPHA,[fM]:a.ONE_MINUS_DST_COLOR,[cM]:a.ONE_MINUS_DST_ALPHA,[dM]:a.CONSTANT_COLOR,[pM]:a.ONE_MINUS_CONSTANT_COLOR,[mM]:a.CONSTANT_ALPHA,[gM]:a.ONE_MINUS_CONSTANT_ALPHA};function F(k,Nt,st,_t,wt,Ut,te,Ve,an,be){if(k===Wa){T===!0&&(Ct(a.BLEND),T=!1);return}if(T===!1&&(bt(a.BLEND),T=!0),k!==JE){if(k!==S||be!==w){if((g!==Tr||D!==Tr)&&(a.blendEquation(a.FUNC_ADD),g=Tr,D=Tr),be)switch(k){case Ns:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Y_:a.blendFunc(a.ONE,a.ONE);break;case q_:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case j_:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ns:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Y_:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case q_:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case j_:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}L=null,U=null,I=null,B=null,z.set(0,0,0),q=0,S=k,w=be}return}wt=wt||Nt,Ut=Ut||st,te=te||_t,(Nt!==g||wt!==D)&&(a.blendEquationSeparate(De[Nt],De[wt]),g=Nt,D=wt),(st!==L||_t!==U||Ut!==I||te!==B)&&(a.blendFuncSeparate(re[st],re[_t],re[Ut],re[te]),L=st,U=_t,I=Ut,B=te),(Ve.equals(z)===!1||an!==q)&&(a.blendColor(Ve.r,Ve.g,Ve.b,an),z.copy(Ve),q=an),S=k,w=!1}function vn(k,Nt){k.side===oa?Ct(a.CULL_FACE):bt(a.CULL_FACE);let st=k.side===kn;Nt&&(st=!st),oe(st),k.blending===Ns&&k.transparent===!1?F(Wa):F(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),f.setFunc(k.depthFunc),f.setTest(k.depthTest),f.setMask(k.depthWrite),c.setMask(k.colorWrite);const _t=k.stencilWrite;h.setTest(_t),_t&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ue(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?bt(a.SAMPLE_ALPHA_TO_COVERAGE):Ct(a.SAMPLE_ALPHA_TO_COVERAGE)}function oe(k){A!==k&&(k?a.frontFace(a.CW):a.frontFace(a.CCW),A=k)}function de(k){k!==KE?(bt(a.CULL_FACE),k!==H&&(k===W_?a.cullFace(a.BACK):k===QE?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Ct(a.CULL_FACE),H=k}function Xt(k){k!==ct&&(W&&a.lineWidth(k),ct=k)}function Ue(k,Nt,st){k?(bt(a.POLYGON_OFFSET_FILL),(at!==Nt||gt!==st)&&(a.polygonOffset(Nt,st),at=Nt,gt=st)):Ct(a.POLYGON_OFFSET_FILL)}function Wt(k){k?bt(a.SCISSOR_TEST):Ct(a.SCISSOR_TEST)}function N(k){k===void 0&&(k=a.TEXTURE0+dt-1),St!==k&&(a.activeTexture(k),St=k)}function b(k,Nt,st){st===void 0&&(St===null?st=a.TEXTURE0+dt-1:st=St);let _t=O[st];_t===void 0&&(_t={type:void 0,texture:void 0},O[st]=_t),(_t.type!==k||_t.texture!==Nt)&&(St!==st&&(a.activeTexture(st),St=st),a.bindTexture(k,Nt||xt[k]),_t.type=k,_t.texture=Nt)}function et(){const k=O[St];k!==void 0&&k.type!==void 0&&(a.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ft(){try{a.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function yt(){try{a.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ht(){try{a.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Gt(){try{a.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Dt(){try{a.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Bt(){try{a.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _e(){try{a.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Mt(){try{a.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function zt(){try{a.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Qt(){try{a.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Vt(k){Rt.equals(k)===!1&&(a.scissor(k.x,k.y,k.z,k.w),Rt.copy(k))}function Ft(k){Y.equals(k)===!1&&(a.viewport(k.x,k.y,k.z,k.w),Y.copy(k))}function se(k,Nt){let st=m.get(Nt);st===void 0&&(st=new WeakMap,m.set(Nt,st));let _t=st.get(k);_t===void 0&&(_t=a.getUniformBlockIndex(Nt,k.name),st.set(k,_t))}function jt(k,Nt){const _t=m.get(Nt).get(k);p.get(Nt)!==_t&&(a.uniformBlockBinding(Nt,_t,k.__bindingPointIndex),p.set(Nt,_t))}function Le(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),f.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),_={},St=null,O={},y={},v=new WeakMap,x=[],M=null,T=!1,S=null,g=null,L=null,U=null,D=null,I=null,B=null,z=new Me(0,0,0),q=0,w=!1,A=null,H=null,ct=null,at=null,gt=null,Rt.set(0,0,a.canvas.width,a.canvas.height),Y.set(0,0,a.canvas.width,a.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:bt,disable:Ct,bindFramebuffer:$t,drawBuffers:It,useProgram:Te,setBlending:F,setMaterial:vn,setFlipSided:oe,setCullFace:de,setLineWidth:Xt,setPolygonOffset:Ue,setScissorTest:Wt,activeTexture:N,bindTexture:b,unbindTexture:et,compressedTexImage2D:ft,compressedTexImage3D:yt,texImage2D:zt,texImage3D:Qt,updateUBOMapping:se,uniformBlockBinding:jt,texStorage2D:_e,texStorage3D:Mt,texSubImage2D:ht,texSubImage3D:Gt,compressedTexSubImage2D:Dt,compressedTexSubImage3D:Bt,scissor:Vt,viewport:Ft,reset:Le}}function tC(a,t,n,r,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new ue,_=new WeakMap;let y;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(N,b){return x?new OffscreenCanvas(N,b):au("canvas")}function T(N,b,et){let ft=1;const yt=Wt(N);if((yt.width>et||yt.height>et)&&(ft=et/Math.max(yt.width,yt.height)),ft<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ht=Math.floor(ft*yt.width),Gt=Math.floor(ft*yt.height);y===void 0&&(y=M(ht,Gt));const Dt=b?M(ht,Gt):y;return Dt.width=ht,Dt.height=Gt,Dt.getContext("2d").drawImage(N,0,0,ht,Gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+ht+"x"+Gt+")."),Dt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),N;return N}function S(N){return N.generateMipmaps}function g(N){a.generateMipmap(N)}function L(N){return N.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?a.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function U(N,b,et,ft,yt=!1){if(N!==null){if(a[N]!==void 0)return a[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ht=b;if(b===a.RED&&(et===a.FLOAT&&(ht=a.R32F),et===a.HALF_FLOAT&&(ht=a.R16F),et===a.UNSIGNED_BYTE&&(ht=a.R8)),b===a.RED_INTEGER&&(et===a.UNSIGNED_BYTE&&(ht=a.R8UI),et===a.UNSIGNED_SHORT&&(ht=a.R16UI),et===a.UNSIGNED_INT&&(ht=a.R32UI),et===a.BYTE&&(ht=a.R8I),et===a.SHORT&&(ht=a.R16I),et===a.INT&&(ht=a.R32I)),b===a.RG&&(et===a.FLOAT&&(ht=a.RG32F),et===a.HALF_FLOAT&&(ht=a.RG16F),et===a.UNSIGNED_BYTE&&(ht=a.RG8)),b===a.RG_INTEGER&&(et===a.UNSIGNED_BYTE&&(ht=a.RG8UI),et===a.UNSIGNED_SHORT&&(ht=a.RG16UI),et===a.UNSIGNED_INT&&(ht=a.RG32UI),et===a.BYTE&&(ht=a.RG8I),et===a.SHORT&&(ht=a.RG16I),et===a.INT&&(ht=a.RG32I)),b===a.RGB_INTEGER&&(et===a.UNSIGNED_BYTE&&(ht=a.RGB8UI),et===a.UNSIGNED_SHORT&&(ht=a.RGB16UI),et===a.UNSIGNED_INT&&(ht=a.RGB32UI),et===a.BYTE&&(ht=a.RGB8I),et===a.SHORT&&(ht=a.RGB16I),et===a.INT&&(ht=a.RGB32I)),b===a.RGBA_INTEGER&&(et===a.UNSIGNED_BYTE&&(ht=a.RGBA8UI),et===a.UNSIGNED_SHORT&&(ht=a.RGBA16UI),et===a.UNSIGNED_INT&&(ht=a.RGBA32UI),et===a.BYTE&&(ht=a.RGBA8I),et===a.SHORT&&(ht=a.RGBA16I),et===a.INT&&(ht=a.RGBA32I)),b===a.RGB&&et===a.UNSIGNED_INT_5_9_9_9_REV&&(ht=a.RGB9_E5),b===a.RGBA){const Gt=yt?nu:we.getTransfer(ft);et===a.FLOAT&&(ht=a.RGBA32F),et===a.HALF_FLOAT&&(ht=a.RGBA16F),et===a.UNSIGNED_BYTE&&(ht=Gt===Ie?a.SRGB8_ALPHA8:a.RGBA8),et===a.UNSIGNED_SHORT_4_4_4_4&&(ht=a.RGBA4),et===a.UNSIGNED_SHORT_5_5_5_1&&(ht=a.RGB5_A1)}return(ht===a.R16F||ht===a.R32F||ht===a.RG16F||ht===a.RG32F||ht===a.RGBA16F||ht===a.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function D(N,b){let et;return N?b===null||b===wr||b===Fs?et=a.DEPTH24_STENCIL8:b===la?et=a.DEPTH32F_STENCIL8:b===nl&&(et=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===wr||b===Fs?et=a.DEPTH_COMPONENT24:b===la?et=a.DEPTH_COMPONENT32F:b===nl&&(et=a.DEPTH_COMPONENT16),et}function I(N,b){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ei&&N.minFilter!==Ui?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function B(N){const b=N.target;b.removeEventListener("dispose",B),q(b),b.isVideoTexture&&_.delete(b)}function z(N){const b=N.target;b.removeEventListener("dispose",z),A(b)}function q(N){const b=r.get(N);if(b.__webglInit===void 0)return;const et=N.source,ft=v.get(et);if(ft){const yt=ft[b.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&w(N),Object.keys(ft).length===0&&v.delete(et)}r.remove(N)}function w(N){const b=r.get(N);a.deleteTexture(b.__webglTexture);const et=N.source,ft=v.get(et);delete ft[b.__cacheKey],f.memory.textures--}function A(N){const b=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(b.__webglFramebuffer[ft]))for(let yt=0;yt<b.__webglFramebuffer[ft].length;yt++)a.deleteFramebuffer(b.__webglFramebuffer[ft][yt]);else a.deleteFramebuffer(b.__webglFramebuffer[ft]);b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer[ft])}else{if(Array.isArray(b.__webglFramebuffer))for(let ft=0;ft<b.__webglFramebuffer.length;ft++)a.deleteFramebuffer(b.__webglFramebuffer[ft]);else a.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&a.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ft=0;ft<b.__webglColorRenderbuffer.length;ft++)b.__webglColorRenderbuffer[ft]&&a.deleteRenderbuffer(b.__webglColorRenderbuffer[ft]);b.__webglDepthRenderbuffer&&a.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const et=N.textures;for(let ft=0,yt=et.length;ft<yt;ft++){const ht=r.get(et[ft]);ht.__webglTexture&&(a.deleteTexture(ht.__webglTexture),f.memory.textures--),r.remove(et[ft])}r.remove(N)}let H=0;function ct(){H=0}function at(){const N=H;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),H+=1,N}function gt(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function dt(N,b){const et=r.get(N);if(N.isVideoTexture&&Xt(N),N.isRenderTargetTexture===!1&&N.version>0&&et.__version!==N.version){const ft=N.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(et,N,b);return}}n.bindTexture(a.TEXTURE_2D,et.__webglTexture,a.TEXTURE0+b)}function W(N,b){const et=r.get(N);if(N.version>0&&et.__version!==N.version){Y(et,N,b);return}n.bindTexture(a.TEXTURE_2D_ARRAY,et.__webglTexture,a.TEXTURE0+b)}function rt(N,b){const et=r.get(N);if(N.version>0&&et.__version!==N.version){Y(et,N,b);return}n.bindTexture(a.TEXTURE_3D,et.__webglTexture,a.TEXTURE0+b)}function Z(N,b){const et=r.get(N);if(N.version>0&&et.__version!==N.version){pt(et,N,b);return}n.bindTexture(a.TEXTURE_CUBE_MAP,et.__webglTexture,a.TEXTURE0+b)}const St={[md]:a.REPEAT,[Ar]:a.CLAMP_TO_EDGE,[gd]:a.MIRRORED_REPEAT},O={[Ei]:a.NEAREST,[AM]:a.NEAREST_MIPMAP_NEAREST,[xc]:a.NEAREST_MIPMAP_LINEAR,[Ui]:a.LINEAR,[Th]:a.LINEAR_MIPMAP_NEAREST,[Rr]:a.LINEAR_MIPMAP_LINEAR},it={[DM]:a.NEVER,[IM]:a.ALWAYS,[UM]:a.LESS,[G0]:a.LEQUAL,[LM]:a.EQUAL,[PM]:a.GEQUAL,[NM]:a.GREATER,[OM]:a.NOTEQUAL};function Tt(N,b){if(b.type===la&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ui||b.magFilter===Th||b.magFilter===xc||b.magFilter===Rr||b.minFilter===Ui||b.minFilter===Th||b.minFilter===xc||b.minFilter===Rr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(N,a.TEXTURE_WRAP_S,St[b.wrapS]),a.texParameteri(N,a.TEXTURE_WRAP_T,St[b.wrapT]),(N===a.TEXTURE_3D||N===a.TEXTURE_2D_ARRAY)&&a.texParameteri(N,a.TEXTURE_WRAP_R,St[b.wrapR]),a.texParameteri(N,a.TEXTURE_MAG_FILTER,O[b.magFilter]),a.texParameteri(N,a.TEXTURE_MIN_FILTER,O[b.minFilter]),b.compareFunction&&(a.texParameteri(N,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(N,a.TEXTURE_COMPARE_FUNC,it[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ei||b.minFilter!==xc&&b.minFilter!==Rr||b.type===la&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");a.texParameterf(N,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function Rt(N,b){let et=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",B));const ft=b.source;let yt=v.get(ft);yt===void 0&&(yt={},v.set(ft,yt));const ht=gt(b);if(ht!==N.__cacheKey){yt[ht]===void 0&&(yt[ht]={texture:a.createTexture(),usedTimes:0},f.memory.textures++,et=!0),yt[ht].usedTimes++;const Gt=yt[N.__cacheKey];Gt!==void 0&&(yt[N.__cacheKey].usedTimes--,Gt.usedTimes===0&&w(b)),N.__cacheKey=ht,N.__webglTexture=yt[ht].texture}return et}function Y(N,b,et){let ft=a.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ft=a.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ft=a.TEXTURE_3D);const yt=Rt(N,b),ht=b.source;n.bindTexture(ft,N.__webglTexture,a.TEXTURE0+et);const Gt=r.get(ht);if(ht.version!==Gt.__version||yt===!0){n.activeTexture(a.TEXTURE0+et);const Dt=we.getPrimaries(we.workingColorSpace),Bt=b.colorSpace===Xa?null:we.getPrimaries(b.colorSpace),_e=b.colorSpace===Xa||Dt===Bt?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let Mt=T(b.image,!1,l.maxTextureSize);Mt=Ue(b,Mt);const zt=c.convert(b.format,b.colorSpace),Qt=c.convert(b.type);let Vt=U(b.internalFormat,zt,Qt,b.colorSpace,b.isVideoTexture);Tt(ft,b);let Ft;const se=b.mipmaps,jt=b.isVideoTexture!==!0,Le=Gt.__version===void 0||yt===!0,k=ht.dataReady,Nt=I(b,Mt);if(b.isDepthTexture)Vt=D(b.format===Hs,b.type),Le&&(jt?n.texStorage2D(a.TEXTURE_2D,1,Vt,Mt.width,Mt.height):n.texImage2D(a.TEXTURE_2D,0,Vt,Mt.width,Mt.height,0,zt,Qt,null));else if(b.isDataTexture)if(se.length>0){jt&&Le&&n.texStorage2D(a.TEXTURE_2D,Nt,Vt,se[0].width,se[0].height);for(let st=0,_t=se.length;st<_t;st++)Ft=se[st],jt?k&&n.texSubImage2D(a.TEXTURE_2D,st,0,0,Ft.width,Ft.height,zt,Qt,Ft.data):n.texImage2D(a.TEXTURE_2D,st,Vt,Ft.width,Ft.height,0,zt,Qt,Ft.data);b.generateMipmaps=!1}else jt?(Le&&n.texStorage2D(a.TEXTURE_2D,Nt,Vt,Mt.width,Mt.height),k&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,Mt.width,Mt.height,zt,Qt,Mt.data)):n.texImage2D(a.TEXTURE_2D,0,Vt,Mt.width,Mt.height,0,zt,Qt,Mt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){jt&&Le&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Nt,Vt,se[0].width,se[0].height,Mt.depth);for(let st=0,_t=se.length;st<_t;st++)if(Ft=se[st],b.format!==Si)if(zt!==null)if(jt){if(k)if(b.layerUpdates.size>0){const wt=Sv(Ft.width,Ft.height,b.format,b.type);for(const Ut of b.layerUpdates){const te=Ft.data.subarray(Ut*wt/Ft.data.BYTES_PER_ELEMENT,(Ut+1)*wt/Ft.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,st,0,0,Ut,Ft.width,Ft.height,1,zt,te)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,st,0,0,0,Ft.width,Ft.height,Mt.depth,zt,Ft.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,st,Vt,Ft.width,Ft.height,Mt.depth,0,Ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?k&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,st,0,0,0,Ft.width,Ft.height,Mt.depth,zt,Qt,Ft.data):n.texImage3D(a.TEXTURE_2D_ARRAY,st,Vt,Ft.width,Ft.height,Mt.depth,0,zt,Qt,Ft.data)}else{jt&&Le&&n.texStorage2D(a.TEXTURE_2D,Nt,Vt,se[0].width,se[0].height);for(let st=0,_t=se.length;st<_t;st++)Ft=se[st],b.format!==Si?zt!==null?jt?k&&n.compressedTexSubImage2D(a.TEXTURE_2D,st,0,0,Ft.width,Ft.height,zt,Ft.data):n.compressedTexImage2D(a.TEXTURE_2D,st,Vt,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?k&&n.texSubImage2D(a.TEXTURE_2D,st,0,0,Ft.width,Ft.height,zt,Qt,Ft.data):n.texImage2D(a.TEXTURE_2D,st,Vt,Ft.width,Ft.height,0,zt,Qt,Ft.data)}else if(b.isDataArrayTexture)if(jt){if(Le&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Nt,Vt,Mt.width,Mt.height,Mt.depth),k)if(b.layerUpdates.size>0){const st=Sv(Mt.width,Mt.height,b.format,b.type);for(const _t of b.layerUpdates){const wt=Mt.data.subarray(_t*st/Mt.data.BYTES_PER_ELEMENT,(_t+1)*st/Mt.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,_t,Mt.width,Mt.height,1,zt,Qt,wt)}b.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,zt,Qt,Mt.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,Vt,Mt.width,Mt.height,Mt.depth,0,zt,Qt,Mt.data);else if(b.isData3DTexture)jt?(Le&&n.texStorage3D(a.TEXTURE_3D,Nt,Vt,Mt.width,Mt.height,Mt.depth),k&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,zt,Qt,Mt.data)):n.texImage3D(a.TEXTURE_3D,0,Vt,Mt.width,Mt.height,Mt.depth,0,zt,Qt,Mt.data);else if(b.isFramebufferTexture){if(Le)if(jt)n.texStorage2D(a.TEXTURE_2D,Nt,Vt,Mt.width,Mt.height);else{let st=Mt.width,_t=Mt.height;for(let wt=0;wt<Nt;wt++)n.texImage2D(a.TEXTURE_2D,wt,Vt,st,_t,0,zt,Qt,null),st>>=1,_t>>=1}}else if(se.length>0){if(jt&&Le){const st=Wt(se[0]);n.texStorage2D(a.TEXTURE_2D,Nt,Vt,st.width,st.height)}for(let st=0,_t=se.length;st<_t;st++)Ft=se[st],jt?k&&n.texSubImage2D(a.TEXTURE_2D,st,0,0,zt,Qt,Ft):n.texImage2D(a.TEXTURE_2D,st,Vt,zt,Qt,Ft);b.generateMipmaps=!1}else if(jt){if(Le){const st=Wt(Mt);n.texStorage2D(a.TEXTURE_2D,Nt,Vt,st.width,st.height)}k&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,zt,Qt,Mt)}else n.texImage2D(a.TEXTURE_2D,0,Vt,zt,Qt,Mt);S(b)&&g(ft),Gt.__version=ht.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function pt(N,b,et){if(b.image.length!==6)return;const ft=Rt(N,b),yt=b.source;n.bindTexture(a.TEXTURE_CUBE_MAP,N.__webglTexture,a.TEXTURE0+et);const ht=r.get(yt);if(yt.version!==ht.__version||ft===!0){n.activeTexture(a.TEXTURE0+et);const Gt=we.getPrimaries(we.workingColorSpace),Dt=b.colorSpace===Xa?null:we.getPrimaries(b.colorSpace),Bt=b.colorSpace===Xa||Gt===Dt?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);const _e=b.isCompressedTexture||b.image[0].isCompressedTexture,Mt=b.image[0]&&b.image[0].isDataTexture,zt=[];for(let _t=0;_t<6;_t++)!_e&&!Mt?zt[_t]=T(b.image[_t],!0,l.maxCubemapSize):zt[_t]=Mt?b.image[_t].image:b.image[_t],zt[_t]=Ue(b,zt[_t]);const Qt=zt[0],Vt=c.convert(b.format,b.colorSpace),Ft=c.convert(b.type),se=U(b.internalFormat,Vt,Ft,b.colorSpace),jt=b.isVideoTexture!==!0,Le=ht.__version===void 0||ft===!0,k=yt.dataReady;let Nt=I(b,Qt);Tt(a.TEXTURE_CUBE_MAP,b);let st;if(_e){jt&&Le&&n.texStorage2D(a.TEXTURE_CUBE_MAP,Nt,se,Qt.width,Qt.height);for(let _t=0;_t<6;_t++){st=zt[_t].mipmaps;for(let wt=0;wt<st.length;wt++){const Ut=st[wt];b.format!==Si?Vt!==null?jt?k&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt,0,0,Ut.width,Ut.height,Vt,Ut.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt,se,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?k&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt,0,0,Ut.width,Ut.height,Vt,Ft,Ut.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt,se,Ut.width,Ut.height,0,Vt,Ft,Ut.data)}}}else{if(st=b.mipmaps,jt&&Le){st.length>0&&Nt++;const _t=Wt(zt[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,Nt,se,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Mt){jt?k&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,zt[_t].width,zt[_t].height,Vt,Ft,zt[_t].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,se,zt[_t].width,zt[_t].height,0,Vt,Ft,zt[_t].data);for(let wt=0;wt<st.length;wt++){const te=st[wt].image[_t].image;jt?k&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt+1,0,0,te.width,te.height,Vt,Ft,te.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt+1,se,te.width,te.height,0,Vt,Ft,te.data)}}else{jt?k&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Vt,Ft,zt[_t]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,se,Vt,Ft,zt[_t]);for(let wt=0;wt<st.length;wt++){const Ut=st[wt];jt?k&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt+1,0,0,Vt,Ft,Ut.image[_t]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt+1,se,Vt,Ft,Ut.image[_t])}}}S(b)&&g(a.TEXTURE_CUBE_MAP),ht.__version=yt.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function xt(N,b,et,ft,yt,ht){const Gt=c.convert(et.format,et.colorSpace),Dt=c.convert(et.type),Bt=U(et.internalFormat,Gt,Dt,et.colorSpace),_e=r.get(b),Mt=r.get(et);if(Mt.__renderTarget=b,!_e.__hasExternalTextures){const zt=Math.max(1,b.width>>ht),Qt=Math.max(1,b.height>>ht);yt===a.TEXTURE_3D||yt===a.TEXTURE_2D_ARRAY?n.texImage3D(yt,ht,Bt,zt,Qt,b.depth,0,Gt,Dt,null):n.texImage2D(yt,ht,Bt,zt,Qt,0,Gt,Dt,null)}n.bindFramebuffer(a.FRAMEBUFFER,N),de(b)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ft,yt,Mt.__webglTexture,0,oe(b)):(yt===a.TEXTURE_2D||yt>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ft,yt,Mt.__webglTexture,ht),n.bindFramebuffer(a.FRAMEBUFFER,null)}function bt(N,b,et){if(a.bindRenderbuffer(a.RENDERBUFFER,N),b.depthBuffer){const ft=b.depthTexture,yt=ft&&ft.isDepthTexture?ft.type:null,ht=D(b.stencilBuffer,yt),Gt=b.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Dt=oe(b);de(b)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Dt,ht,b.width,b.height):et?a.renderbufferStorageMultisample(a.RENDERBUFFER,Dt,ht,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,ht,b.width,b.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Gt,a.RENDERBUFFER,N)}else{const ft=b.textures;for(let yt=0;yt<ft.length;yt++){const ht=ft[yt],Gt=c.convert(ht.format,ht.colorSpace),Dt=c.convert(ht.type),Bt=U(ht.internalFormat,Gt,Dt,ht.colorSpace),_e=oe(b);et&&de(b)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,_e,Bt,b.width,b.height):de(b)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,_e,Bt,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,Bt,b.width,b.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Ct(N,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(a.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=r.get(b.depthTexture);ft.__renderTarget=b,(!ft.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),dt(b.depthTexture,0);const yt=ft.__webglTexture,ht=oe(b);if(b.depthTexture.format===Os)de(b)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,yt,0,ht):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,yt,0);else if(b.depthTexture.format===Hs)de(b)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,yt,0,ht):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,yt,0);else throw new Error("Unknown depthTexture format")}function $t(N){const b=r.get(N),et=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const ft=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ft){const yt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ft.removeEventListener("dispose",yt)};ft.addEventListener("dispose",yt),b.__depthDisposeCallback=yt}b.__boundDepthTexture=ft}if(N.depthTexture&&!b.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");Ct(b.__webglFramebuffer,N)}else if(et){b.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(n.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[ft]),b.__webglDepthbuffer[ft]===void 0)b.__webglDepthbuffer[ft]=a.createRenderbuffer(),bt(b.__webglDepthbuffer[ft],N,!1);else{const yt=N.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ht=b.__webglDepthbuffer[ft];a.bindRenderbuffer(a.RENDERBUFFER,ht),a.framebufferRenderbuffer(a.FRAMEBUFFER,yt,a.RENDERBUFFER,ht)}}else if(n.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=a.createRenderbuffer(),bt(b.__webglDepthbuffer,N,!1);else{const ft=N.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,yt=b.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,yt),a.framebufferRenderbuffer(a.FRAMEBUFFER,ft,a.RENDERBUFFER,yt)}n.bindFramebuffer(a.FRAMEBUFFER,null)}function It(N,b,et){const ft=r.get(N);b!==void 0&&xt(ft.__webglFramebuffer,N,N.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),et!==void 0&&$t(N)}function Te(N){const b=N.texture,et=r.get(N),ft=r.get(b);N.addEventListener("dispose",z);const yt=N.textures,ht=N.isWebGLCubeRenderTarget===!0,Gt=yt.length>1;if(Gt||(ft.__webglTexture===void 0&&(ft.__webglTexture=a.createTexture()),ft.__version=b.version,f.memory.textures++),ht){et.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer[Dt]=[];for(let Bt=0;Bt<b.mipmaps.length;Bt++)et.__webglFramebuffer[Dt][Bt]=a.createFramebuffer()}else et.__webglFramebuffer[Dt]=a.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer=[];for(let Dt=0;Dt<b.mipmaps.length;Dt++)et.__webglFramebuffer[Dt]=a.createFramebuffer()}else et.__webglFramebuffer=a.createFramebuffer();if(Gt)for(let Dt=0,Bt=yt.length;Dt<Bt;Dt++){const _e=r.get(yt[Dt]);_e.__webglTexture===void 0&&(_e.__webglTexture=a.createTexture(),f.memory.textures++)}if(N.samples>0&&de(N)===!1){et.__webglMultisampledFramebuffer=a.createFramebuffer(),et.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Dt=0;Dt<yt.length;Dt++){const Bt=yt[Dt];et.__webglColorRenderbuffer[Dt]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,et.__webglColorRenderbuffer[Dt]);const _e=c.convert(Bt.format,Bt.colorSpace),Mt=c.convert(Bt.type),zt=U(Bt.internalFormat,_e,Mt,Bt.colorSpace,N.isXRRenderTarget===!0),Qt=oe(N);a.renderbufferStorageMultisample(a.RENDERBUFFER,Qt,zt,N.width,N.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Dt,a.RENDERBUFFER,et.__webglColorRenderbuffer[Dt])}a.bindRenderbuffer(a.RENDERBUFFER,null),N.depthBuffer&&(et.__webglDepthRenderbuffer=a.createRenderbuffer(),bt(et.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(ht){n.bindTexture(a.TEXTURE_CUBE_MAP,ft.__webglTexture),Tt(a.TEXTURE_CUBE_MAP,b);for(let Dt=0;Dt<6;Dt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Bt=0;Bt<b.mipmaps.length;Bt++)xt(et.__webglFramebuffer[Dt][Bt],N,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Bt);else xt(et.__webglFramebuffer[Dt],N,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);S(b)&&g(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Gt){for(let Dt=0,Bt=yt.length;Dt<Bt;Dt++){const _e=yt[Dt],Mt=r.get(_e);n.bindTexture(a.TEXTURE_2D,Mt.__webglTexture),Tt(a.TEXTURE_2D,_e),xt(et.__webglFramebuffer,N,_e,a.COLOR_ATTACHMENT0+Dt,a.TEXTURE_2D,0),S(_e)&&g(a.TEXTURE_2D)}n.unbindTexture()}else{let Dt=a.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Dt=N.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Dt,ft.__webglTexture),Tt(Dt,b),b.mipmaps&&b.mipmaps.length>0)for(let Bt=0;Bt<b.mipmaps.length;Bt++)xt(et.__webglFramebuffer[Bt],N,b,a.COLOR_ATTACHMENT0,Dt,Bt);else xt(et.__webglFramebuffer,N,b,a.COLOR_ATTACHMENT0,Dt,0);S(b)&&g(Dt),n.unbindTexture()}N.depthBuffer&&$t(N)}function De(N){const b=N.textures;for(let et=0,ft=b.length;et<ft;et++){const yt=b[et];if(S(yt)){const ht=L(N),Gt=r.get(yt).__webglTexture;n.bindTexture(ht,Gt),g(ht),n.unbindTexture()}}}const re=[],F=[];function vn(N){if(N.samples>0){if(de(N)===!1){const b=N.textures,et=N.width,ft=N.height;let yt=a.COLOR_BUFFER_BIT;const ht=N.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Gt=r.get(N),Dt=b.length>1;if(Dt)for(let Bt=0;Bt<b.length;Bt++)n.bindFramebuffer(a.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Bt,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,Gt.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Bt,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let Bt=0;Bt<b.length;Bt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(yt|=a.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(yt|=a.STENCIL_BUFFER_BIT)),Dt){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Gt.__webglColorRenderbuffer[Bt]);const _e=r.get(b[Bt]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,_e,0)}a.blitFramebuffer(0,0,et,ft,0,0,et,ft,yt,a.NEAREST),p===!0&&(re.length=0,F.length=0,re.push(a.COLOR_ATTACHMENT0+Bt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(re.push(ht),F.push(ht),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,F)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,re))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Dt)for(let Bt=0;Bt<b.length;Bt++){n.bindFramebuffer(a.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Bt,a.RENDERBUFFER,Gt.__webglColorRenderbuffer[Bt]);const _e=r.get(b[Bt]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,Gt.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Bt,a.TEXTURE_2D,_e,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&p){const b=N.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[b])}}}function oe(N){return Math.min(l.maxSamples,N.samples)}function de(N){const b=r.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Xt(N){const b=f.render.frame;_.get(N)!==b&&(_.set(N,b),N.update())}function Ue(N,b){const et=N.colorSpace,ft=N.format,yt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||et!==Gs&&et!==Xa&&(we.getTransfer(et)===Ie?(ft!==Si||yt!==da)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),b}function Wt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(m.width=N.naturalWidth||N.width,m.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(m.width=N.displayWidth,m.height=N.displayHeight):(m.width=N.width,m.height=N.height),m}this.allocateTextureUnit=at,this.resetTextureUnits=ct,this.setTexture2D=dt,this.setTexture2DArray=W,this.setTexture3D=rt,this.setTextureCube=Z,this.rebindTextures=It,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=vn,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=de}function eC(a,t){function n(r,l=Xa){let c;const f=we.getTransfer(l);if(r===da)return a.UNSIGNED_BYTE;if(r===tp)return a.UNSIGNED_SHORT_4_4_4_4;if(r===ep)return a.UNSIGNED_SHORT_5_5_5_1;if(r===L0)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===D0)return a.BYTE;if(r===U0)return a.SHORT;if(r===nl)return a.UNSIGNED_SHORT;if(r===Jd)return a.INT;if(r===wr)return a.UNSIGNED_INT;if(r===la)return a.FLOAT;if(r===ll)return a.HALF_FLOAT;if(r===N0)return a.ALPHA;if(r===O0)return a.RGB;if(r===Si)return a.RGBA;if(r===P0)return a.LUMINANCE;if(r===I0)return a.LUMINANCE_ALPHA;if(r===Os)return a.DEPTH_COMPONENT;if(r===Hs)return a.DEPTH_STENCIL;if(r===B0)return a.RED;if(r===np)return a.RED_INTEGER;if(r===z0)return a.RG;if(r===ip)return a.RG_INTEGER;if(r===ap)return a.RGBA_INTEGER;if(r===qc||r===jc||r===Zc||r===Kc)if(f===Ie)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===qc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===qc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===jc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Zc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Kc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===_d||r===vd||r===yd||r===xd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===_d)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===vd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===yd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===xd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Sd||r===Ed||r===Md)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Sd||r===Ed)return f===Ie?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Md)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Td||r===bd||r===Ad||r===Rd||r===Cd||r===wd||r===Dd||r===Ud||r===Ld||r===Nd||r===Od||r===Pd||r===Id||r===Bd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Td)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===bd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ad)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Rd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Cd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===wd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Dd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ud)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ld)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Nd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Od)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Pd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Id)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Bd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Qc||r===zd||r===Fd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===Qc)return f===Ie?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===zd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Fd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===F0||r===Hd||r===Gd||r===Vd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===Qc)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Hd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Gd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Vd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Fs?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:n}}const nC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iC=`
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

}`;class aC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,r){if(this.texture===null){const l=new Xn,c=t.properties.get(l);c.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,r=new Za({vertexShader:nC,fragmentShader:iC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Li(new fu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rC extends Or{constructor(t,n){super();const r=this;let l=null,c=1,f=null,h="local-floor",p=1,m=null,_=null,y=null,v=null,x=null,M=null;const T=new aC,S=n.getContextAttributes();let g=null,L=null;const U=[],D=[],I=new ue;let B=null;const z=new fi;z.viewport=new Qe;const q=new fi;q.viewport=new Qe;const w=[z,q],A=new TT;let H=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let pt=U[Y];return pt===void 0&&(pt=new Wh,U[Y]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(Y){let pt=U[Y];return pt===void 0&&(pt=new Wh,U[Y]=pt),pt.getGripSpace()},this.getHand=function(Y){let pt=U[Y];return pt===void 0&&(pt=new Wh,U[Y]=pt),pt.getHandSpace()};function at(Y){const pt=D.indexOf(Y.inputSource);if(pt===-1)return;const xt=U[pt];xt!==void 0&&(xt.update(Y.inputSource,Y.frame,m||f),xt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function gt(){l.removeEventListener("select",at),l.removeEventListener("selectstart",at),l.removeEventListener("selectend",at),l.removeEventListener("squeeze",at),l.removeEventListener("squeezestart",at),l.removeEventListener("squeezeend",at),l.removeEventListener("end",gt),l.removeEventListener("inputsourceschange",dt);for(let Y=0;Y<U.length;Y++){const pt=D[Y];pt!==null&&(D[Y]=null,U[Y].disconnect(pt))}H=null,ct=null,T.reset(),t.setRenderTarget(g),x=null,v=null,y=null,l=null,L=null,Rt.stop(),r.isPresenting=!1,t.setPixelRatio(B),t.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){c=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){h=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(Y){m=Y},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return y},this.getFrame=function(){return M},this.getSession=function(){return l},this.setSession=async function(Y){if(l=Y,l!==null){if(g=t.getRenderTarget(),l.addEventListener("select",at),l.addEventListener("selectstart",at),l.addEventListener("selectend",at),l.addEventListener("squeeze",at),l.addEventListener("squeezestart",at),l.addEventListener("squeezeend",at),l.addEventListener("end",gt),l.addEventListener("inputsourceschange",dt),S.xrCompatible!==!0&&await n.makeXRCompatible(),B=t.getPixelRatio(),t.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,bt=null,Ct=null;S.depth&&(Ct=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,xt=S.stencil?Hs:Os,bt=S.stencil?Fs:wr);const $t={colorFormat:n.RGBA8,depthFormat:Ct,scaleFactor:c};y=new XRWebGLBinding(l,n),v=y.createProjectionLayer($t),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),L=new Dr(v.textureWidth,v.textureHeight,{format:Si,type:da,depthTexture:new J0(v.textureWidth,v.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const xt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(l,n,xt),l.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),L=new Dr(x.framebufferWidth,x.framebufferHeight,{format:Si,type:da,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(h),Rt.setContext(l),Rt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function dt(Y){for(let pt=0;pt<Y.removed.length;pt++){const xt=Y.removed[pt],bt=D.indexOf(xt);bt>=0&&(D[bt]=null,U[bt].disconnect(xt))}for(let pt=0;pt<Y.added.length;pt++){const xt=Y.added[pt];let bt=D.indexOf(xt);if(bt===-1){for(let $t=0;$t<U.length;$t++)if($t>=D.length){D.push(xt),bt=$t;break}else if(D[$t]===null){D[$t]=xt,bt=$t;break}if(bt===-1)break}const Ct=U[bt];Ct&&Ct.connect(xt)}}const W=new J,rt=new J;function Z(Y,pt,xt){W.setFromMatrixPosition(pt.matrixWorld),rt.setFromMatrixPosition(xt.matrixWorld);const bt=W.distanceTo(rt),Ct=pt.projectionMatrix.elements,$t=xt.projectionMatrix.elements,It=Ct[14]/(Ct[10]-1),Te=Ct[14]/(Ct[10]+1),De=(Ct[9]+1)/Ct[5],re=(Ct[9]-1)/Ct[5],F=(Ct[8]-1)/Ct[0],vn=($t[8]+1)/$t[0],oe=It*F,de=It*vn,Xt=bt/(-F+vn),Ue=Xt*-F;if(pt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ue),Y.translateZ(Xt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ct[10]===-1)Y.projectionMatrix.copy(pt.projectionMatrix),Y.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const Wt=It+Xt,N=Te+Xt,b=oe-Ue,et=de+(bt-Ue),ft=De*Te/N*Wt,yt=re*Te/N*Wt;Y.projectionMatrix.makePerspective(b,et,ft,yt,Wt,N),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function St(Y,pt){pt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(pt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(l===null)return;let pt=Y.near,xt=Y.far;T.texture!==null&&(T.depthNear>0&&(pt=T.depthNear),T.depthFar>0&&(xt=T.depthFar)),A.near=q.near=z.near=pt,A.far=q.far=z.far=xt,(H!==A.near||ct!==A.far)&&(l.updateRenderState({depthNear:A.near,depthFar:A.far}),H=A.near,ct=A.far),z.layers.mask=Y.layers.mask|2,q.layers.mask=Y.layers.mask|4,A.layers.mask=z.layers.mask|q.layers.mask;const bt=Y.parent,Ct=A.cameras;St(A,bt);for(let $t=0;$t<Ct.length;$t++)St(Ct[$t],bt);Ct.length===2?Z(A,z,q):A.projectionMatrix.copy(z.projectionMatrix),O(Y,A,bt)};function O(Y,pt,xt){xt===null?Y.matrix.copy(pt.matrixWorld):(Y.matrix.copy(xt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(pt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(pt.projectionMatrix),Y.projectionMatrixInverse.copy(pt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=kd*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(v===null&&x===null))return p},this.setFoveation=function(Y){p=Y,v!==null&&(v.fixedFoveation=Y),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=Y)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(A)};let it=null;function Tt(Y,pt){if(_=pt.getViewerPose(m||f),M=pt,_!==null){const xt=_.views;x!==null&&(t.setRenderTargetFramebuffer(L,x.framebuffer),t.setRenderTarget(L));let bt=!1;xt.length!==A.cameras.length&&(A.cameras.length=0,bt=!0);for(let It=0;It<xt.length;It++){const Te=xt[It];let De=null;if(x!==null)De=x.getViewport(Te);else{const F=y.getViewSubImage(v,Te);De=F.viewport,It===0&&(t.setRenderTargetTextures(L,F.colorTexture,v.ignoreDepthValues?void 0:F.depthStencilTexture),t.setRenderTarget(L))}let re=w[It];re===void 0&&(re=new fi,re.layers.enable(It),re.viewport=new Qe,w[It]=re),re.matrix.fromArray(Te.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(Te.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(De.x,De.y,De.width,De.height),It===0&&(A.matrix.copy(re.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),bt===!0&&A.cameras.push(re)}const Ct=l.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&y){const It=y.getDepthInformation(xt[0]);It&&It.isValid&&It.texture&&T.init(t,It,l.renderState)}}for(let xt=0;xt<U.length;xt++){const bt=D[xt],Ct=U[xt];bt!==null&&Ct!==void 0&&Ct.update(bt,pt,m||f)}it&&it(Y,pt),pt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pt}),M=null}const Rt=new ny;Rt.setAnimationLoop(Tt),this.setAnimationLoop=function(Y){it=Y},this.dispose=function(){}}}const Sr=new Pi,sC=new Ye;function oC(a,t){function n(S,g){S.matrixAutoUpdate===!0&&S.updateMatrix(),g.value.copy(S.matrix)}function r(S,g){g.color.getRGB(S.fogColor.value,Z0(a)),g.isFog?(S.fogNear.value=g.near,S.fogFar.value=g.far):g.isFogExp2&&(S.fogDensity.value=g.density)}function l(S,g,L,U,D){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(S,g):g.isMeshToonMaterial?(c(S,g),y(S,g)):g.isMeshPhongMaterial?(c(S,g),_(S,g)):g.isMeshStandardMaterial?(c(S,g),v(S,g),g.isMeshPhysicalMaterial&&x(S,g,D)):g.isMeshMatcapMaterial?(c(S,g),M(S,g)):g.isMeshDepthMaterial?c(S,g):g.isMeshDistanceMaterial?(c(S,g),T(S,g)):g.isMeshNormalMaterial?c(S,g):g.isLineBasicMaterial?(f(S,g),g.isLineDashedMaterial&&h(S,g)):g.isPointsMaterial?p(S,g,L,U):g.isSpriteMaterial?m(S,g):g.isShadowMaterial?(S.color.value.copy(g.color),S.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(S,g){S.opacity.value=g.opacity,g.color&&S.diffuse.value.copy(g.color),g.emissive&&S.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(S.map.value=g.map,n(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,n(g.alphaMap,S.alphaMapTransform)),g.bumpMap&&(S.bumpMap.value=g.bumpMap,n(g.bumpMap,S.bumpMapTransform),S.bumpScale.value=g.bumpScale,g.side===kn&&(S.bumpScale.value*=-1)),g.normalMap&&(S.normalMap.value=g.normalMap,n(g.normalMap,S.normalMapTransform),S.normalScale.value.copy(g.normalScale),g.side===kn&&S.normalScale.value.negate()),g.displacementMap&&(S.displacementMap.value=g.displacementMap,n(g.displacementMap,S.displacementMapTransform),S.displacementScale.value=g.displacementScale,S.displacementBias.value=g.displacementBias),g.emissiveMap&&(S.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,S.emissiveMapTransform)),g.specularMap&&(S.specularMap.value=g.specularMap,n(g.specularMap,S.specularMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest);const L=t.get(g),U=L.envMap,D=L.envMapRotation;U&&(S.envMap.value=U,Sr.copy(D),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),S.envMapRotation.value.setFromMatrix4(sC.makeRotationFromEuler(Sr)),S.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=g.reflectivity,S.ior.value=g.ior,S.refractionRatio.value=g.refractionRatio),g.lightMap&&(S.lightMap.value=g.lightMap,S.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,S.lightMapTransform)),g.aoMap&&(S.aoMap.value=g.aoMap,S.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,S.aoMapTransform))}function f(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,g.map&&(S.map.value=g.map,n(g.map,S.mapTransform))}function h(S,g){S.dashSize.value=g.dashSize,S.totalSize.value=g.dashSize+g.gapSize,S.scale.value=g.scale}function p(S,g,L,U){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.size.value=g.size*L,S.scale.value=U*.5,g.map&&(S.map.value=g.map,n(g.map,S.uvTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,n(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function m(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.rotation.value=g.rotation,g.map&&(S.map.value=g.map,n(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,n(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function _(S,g){S.specular.value.copy(g.specular),S.shininess.value=Math.max(g.shininess,1e-4)}function y(S,g){g.gradientMap&&(S.gradientMap.value=g.gradientMap)}function v(S,g){S.metalness.value=g.metalness,g.metalnessMap&&(S.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,S.metalnessMapTransform)),S.roughness.value=g.roughness,g.roughnessMap&&(S.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,S.roughnessMapTransform)),g.envMap&&(S.envMapIntensity.value=g.envMapIntensity)}function x(S,g,L){S.ior.value=g.ior,g.sheen>0&&(S.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),S.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(S.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,S.sheenColorMapTransform)),g.sheenRoughnessMap&&(S.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,S.sheenRoughnessMapTransform))),g.clearcoat>0&&(S.clearcoat.value=g.clearcoat,S.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(S.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,S.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(S.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===kn&&S.clearcoatNormalScale.value.negate())),g.dispersion>0&&(S.dispersion.value=g.dispersion),g.iridescence>0&&(S.iridescence.value=g.iridescence,S.iridescenceIOR.value=g.iridescenceIOR,S.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(S.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,S.iridescenceMapTransform)),g.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),g.transmission>0&&(S.transmission.value=g.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),g.transmissionMap&&(S.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,S.transmissionMapTransform)),S.thickness.value=g.thickness,g.thicknessMap&&(S.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=g.attenuationDistance,S.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(S.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(S.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=g.specularIntensity,S.specularColor.value.copy(g.specularColor),g.specularColorMap&&(S.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,S.specularColorMapTransform)),g.specularIntensityMap&&(S.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,g){g.matcap&&(S.matcap.value=g.matcap)}function T(S,g){const L=t.get(g).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function lC(a,t,n,r){let l={},c={},f=[];const h=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function p(L,U){const D=U.program;r.uniformBlockBinding(L,D)}function m(L,U){let D=l[L.id];D===void 0&&(M(L),D=_(L),l[L.id]=D,L.addEventListener("dispose",S));const I=U.program;r.updateUBOMapping(L,I);const B=t.render.frame;c[L.id]!==B&&(v(L),c[L.id]=B)}function _(L){const U=y();L.__bindingPointIndex=U;const D=a.createBuffer(),I=L.__size,B=L.usage;return a.bindBuffer(a.UNIFORM_BUFFER,D),a.bufferData(a.UNIFORM_BUFFER,I,B),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,U,D),D}function y(){for(let L=0;L<h;L++)if(f.indexOf(L)===-1)return f.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(L){const U=l[L.id],D=L.uniforms,I=L.__cache;a.bindBuffer(a.UNIFORM_BUFFER,U);for(let B=0,z=D.length;B<z;B++){const q=Array.isArray(D[B])?D[B]:[D[B]];for(let w=0,A=q.length;w<A;w++){const H=q[w];if(x(H,B,w,I)===!0){const ct=H.__offset,at=Array.isArray(H.value)?H.value:[H.value];let gt=0;for(let dt=0;dt<at.length;dt++){const W=at[dt],rt=T(W);typeof W=="number"||typeof W=="boolean"?(H.__data[0]=W,a.bufferSubData(a.UNIFORM_BUFFER,ct+gt,H.__data)):W.isMatrix3?(H.__data[0]=W.elements[0],H.__data[1]=W.elements[1],H.__data[2]=W.elements[2],H.__data[3]=0,H.__data[4]=W.elements[3],H.__data[5]=W.elements[4],H.__data[6]=W.elements[5],H.__data[7]=0,H.__data[8]=W.elements[6],H.__data[9]=W.elements[7],H.__data[10]=W.elements[8],H.__data[11]=0):(W.toArray(H.__data,gt),gt+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,ct,H.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function x(L,U,D,I){const B=L.value,z=U+"_"+D;if(I[z]===void 0)return typeof B=="number"||typeof B=="boolean"?I[z]=B:I[z]=B.clone(),!0;{const q=I[z];if(typeof B=="number"||typeof B=="boolean"){if(q!==B)return I[z]=B,!0}else if(q.equals(B)===!1)return q.copy(B),!0}return!1}function M(L){const U=L.uniforms;let D=0;const I=16;for(let z=0,q=U.length;z<q;z++){const w=Array.isArray(U[z])?U[z]:[U[z]];for(let A=0,H=w.length;A<H;A++){const ct=w[A],at=Array.isArray(ct.value)?ct.value:[ct.value];for(let gt=0,dt=at.length;gt<dt;gt++){const W=at[gt],rt=T(W),Z=D%I,St=Z%rt.boundary,O=Z+St;D+=St,O!==0&&I-O<rt.storage&&(D+=I-O),ct.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),ct.__offset=D,D+=rt.storage}}}const B=D%I;return B>0&&(D+=I-B),L.__size=D,L.__cache={},this}function T(L){const U={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(U.boundary=4,U.storage=4):L.isVector2?(U.boundary=8,U.storage=8):L.isVector3||L.isColor?(U.boundary=16,U.storage=12):L.isVector4?(U.boundary=16,U.storage=16):L.isMatrix3?(U.boundary=48,U.storage=48):L.isMatrix4?(U.boundary=64,U.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),U}function S(L){const U=L.target;U.removeEventListener("dispose",S);const D=f.indexOf(U.__bindingPointIndex);f.splice(D,1),a.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function g(){for(const L in l)a.deleteBuffer(l[L]);f=[],l={},c={}}return{bind:p,update:m,dispose:g}}class cC{constructor(t={}){const{canvas:n=FM(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:y=!1,reverseDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=f;const M=new Uint32Array(4),T=new Int32Array(4);let S=null,g=null;const L=[],U=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ui,this.toneMapping=Ya,this.toneMappingExposure=1;const D=this;let I=!1,B=0,z=0,q=null,w=-1,A=null;const H=new Qe,ct=new Qe;let at=null;const gt=new Me(0);let dt=0,W=n.width,rt=n.height,Z=1,St=null,O=null;const it=new Qe(0,0,W,rt),Tt=new Qe(0,0,W,rt);let Rt=!1;const Y=new op;let pt=!1,xt=!1;this.transmissionResolutionScale=1;const bt=new Ye,Ct=new Ye,$t=new J,It=new Qe,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function re(){return q===null?Z:1}let F=r;function vn(C,X){return n.getContext(C,X)}try{const C={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:y};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Qd}`),n.addEventListener("webglcontextlost",_t,!1),n.addEventListener("webglcontextrestored",wt,!1),n.addEventListener("webglcontextcreationerror",Ut,!1),F===null){const X="webgl2";if(F=vn(X,C),F===null)throw vn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let oe,de,Xt,Ue,Wt,N,b,et,ft,yt,ht,Gt,Dt,Bt,_e,Mt,zt,Qt,Vt,Ft,se,jt,Le,k;function Nt(){oe=new yR(F),oe.init(),jt=new eC(F,oe),de=new hR(F,oe,t,jt),Xt=new J1(F,oe),de.reverseDepthBuffer&&v&&Xt.buffers.depth.setReversed(!0),Ue=new ER(F),Wt=new H1,N=new tC(F,oe,Xt,Wt,de,jt,Ue),b=new pR(D),et=new vR(D),ft=new CT(F),Le=new uR(F,ft),yt=new xR(F,ft,Ue,Le),ht=new TR(F,yt,ft,Ue),Vt=new MR(F,de,N),Mt=new dR(Wt),Gt=new F1(D,b,et,oe,de,Le,Mt),Dt=new oC(D,Wt),Bt=new V1,_e=new j1(oe),Qt=new cR(D,b,et,Xt,ht,x,p),zt=new Q1(D,ht,de),k=new lC(F,Ue,de,Xt),Ft=new fR(F,oe,Ue),se=new SR(F,oe,Ue),Ue.programs=Gt.programs,D.capabilities=de,D.extensions=oe,D.properties=Wt,D.renderLists=Bt,D.shadowMap=zt,D.state=Xt,D.info=Ue}Nt();const st=new rC(D,F);this.xr=st,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const C=oe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=oe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(C){C!==void 0&&(Z=C,this.setSize(W,rt,!1))},this.getSize=function(C){return C.set(W,rt)},this.setSize=function(C,X,tt=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=C,rt=X,n.width=Math.floor(C*Z),n.height=Math.floor(X*Z),tt===!0&&(n.style.width=C+"px",n.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(W*Z,rt*Z).floor()},this.setDrawingBufferSize=function(C,X,tt){W=C,rt=X,Z=tt,n.width=Math.floor(C*tt),n.height=Math.floor(X*tt),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(H)},this.getViewport=function(C){return C.copy(it)},this.setViewport=function(C,X,tt,Q){C.isVector4?it.set(C.x,C.y,C.z,C.w):it.set(C,X,tt,Q),Xt.viewport(H.copy(it).multiplyScalar(Z).round())},this.getScissor=function(C){return C.copy(Tt)},this.setScissor=function(C,X,tt,Q){C.isVector4?Tt.set(C.x,C.y,C.z,C.w):Tt.set(C,X,tt,Q),Xt.scissor(ct.copy(Tt).multiplyScalar(Z).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(C){Xt.setScissorTest(Rt=C)},this.setOpaqueSort=function(C){St=C},this.setTransparentSort=function(C){O=C},this.getClearColor=function(C){return C.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor(...arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha(...arguments)},this.clear=function(C=!0,X=!0,tt=!0){let Q=0;if(C){let j=!1;if(q!==null){const Et=q.texture.format;j=Et===ap||Et===ip||Et===np}if(j){const Et=q.texture.type,At=Et===da||Et===wr||Et===nl||Et===Fs||Et===tp||Et===ep,Pt=Qt.getClearColor(),Ot=Qt.getClearAlpha(),ee=Pt.r,ne=Pt.g,qt=Pt.b;At?(M[0]=ee,M[1]=ne,M[2]=qt,M[3]=Ot,F.clearBufferuiv(F.COLOR,0,M)):(T[0]=ee,T[1]=ne,T[2]=qt,T[3]=Ot,F.clearBufferiv(F.COLOR,0,T))}else Q|=F.COLOR_BUFFER_BIT}X&&(Q|=F.DEPTH_BUFFER_BIT),tt&&(Q|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",_t,!1),n.removeEventListener("webglcontextrestored",wt,!1),n.removeEventListener("webglcontextcreationerror",Ut,!1),Qt.dispose(),Bt.dispose(),_e.dispose(),Wt.dispose(),b.dispose(),et.dispose(),ht.dispose(),Le.dispose(),k.dispose(),Gt.dispose(),st.dispose(),st.removeEventListener("sessionstart",dl),st.removeEventListener("sessionend",qs),Ti.stop()};function _t(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const C=Ue.autoReset,X=zt.enabled,tt=zt.autoUpdate,Q=zt.needsUpdate,j=zt.type;Nt(),Ue.autoReset=C,zt.enabled=X,zt.autoUpdate=tt,zt.needsUpdate=Q,zt.type=j}function Ut(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function te(C){const X=C.target;X.removeEventListener("dispose",te),Ve(X)}function Ve(C){an(C),Wt.remove(C)}function an(C){const X=Wt.get(C).programs;X!==void 0&&(X.forEach(function(tt){Gt.releaseProgram(tt)}),C.isShaderMaterial&&Gt.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,tt,Q,j,Et){X===null&&(X=Te);const At=j.isMesh&&j.matrixWorld.determinant()<0,Pt=du(C,X,tt,Q,j);Xt.setMaterial(Q,At);let Ot=tt.index,ee=1;if(Q.wireframe===!0){if(Ot=yt.getWireframeAttribute(tt),Ot===void 0)return;ee=2}const ne=tt.drawRange,qt=tt.attributes.position;let ve=ne.start*ee,ye=(ne.start+ne.count)*ee;Et!==null&&(ve=Math.max(ve,Et.start*ee),ye=Math.min(ye,(Et.start+Et.count)*ee)),Ot!==null?(ve=Math.max(ve,0),ye=Math.min(ye,Ot.count)):qt!=null&&(ve=Math.max(ve,0),ye=Math.min(ye,qt.count));const Ge=ye-ve;if(Ge<0||Ge===1/0)return;Le.setup(j,Q,Pt,tt,Ot);let Ae,ie=Ft;if(Ot!==null&&(Ae=ft.get(Ot),ie=se,ie.setIndex(Ae)),j.isMesh)Q.wireframe===!0?(Xt.setLineWidth(Q.wireframeLinewidth*re()),ie.setMode(F.LINES)):ie.setMode(F.TRIANGLES);else if(j.isLine){let Zt=Q.linewidth;Zt===void 0&&(Zt=1),Xt.setLineWidth(Zt*re()),j.isLineSegments?ie.setMode(F.LINES):j.isLineLoop?ie.setMode(F.LINE_LOOP):ie.setMode(F.LINE_STRIP)}else j.isPoints?ie.setMode(F.POINTS):j.isSprite&&ie.setMode(F.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Er("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ie.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))ie.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Zt=j._multiDrawStarts,on=j._multiDrawCounts,xe=j._multiDrawCount,Bn=Ot?ft.get(Ot).bytesPerElement:1,hi=Wt.get(Q).currentProgram.getUniforms();for(let Ln=0;Ln<xe;Ln++)hi.setValue(F,"_gl_DrawID",Ln),ie.render(Zt[Ln]/Bn,on[Ln])}else if(j.isInstancedMesh)ie.renderInstances(ve,Ge,j.count);else if(tt.isInstancedBufferGeometry){const Zt=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,on=Math.min(tt.instanceCount,Zt);ie.renderInstances(ve,Ge,on)}else ie.render(ve,Ge)};function be(C,X,tt){C.transparent===!0&&C.side===oa&&C.forceSinglePass===!1?(C.side=kn,C.needsUpdate=!0,sn(C,X,tt),C.side=ja,C.needsUpdate=!0,sn(C,X,tt),C.side=oa):sn(C,X,tt)}this.compile=function(C,X,tt=null){tt===null&&(tt=C),g=_e.get(tt),g.init(X),U.push(g),tt.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),C!==tt&&C.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),g.setupLights();const Q=new Set;return C.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Et=j.material;if(Et)if(Array.isArray(Et))for(let At=0;At<Et.length;At++){const Pt=Et[At];be(Pt,tt,j),Q.add(Pt)}else be(Et,tt,j),Q.add(Et)}),g=U.pop(),Q},this.compileAsync=function(C,X,tt=null){const Q=this.compile(C,X,tt);return new Promise(j=>{function Et(){if(Q.forEach(function(At){Wt.get(At).currentProgram.isReady()&&Q.delete(At)}),Q.size===0){j(C);return}setTimeout(Et,10)}oe.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Dn=null;function Un(C){Dn&&Dn(C)}function dl(){Ti.stop()}function qs(){Ti.start()}const Ti=new ny;Ti.setAnimationLoop(Un),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(C){Dn=C,st.setAnimationLoop(C),C===null?Ti.stop():Ti.start()},st.addEventListener("sessionstart",dl),st.addEventListener("sessionend",qs),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(X),X=st.getCamera()),C.isScene===!0&&C.onBeforeRender(D,C,X,q),g=_e.get(C,U.length),g.init(X),U.push(g),Ct.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Y.setFromProjectionMatrix(Ct),xt=this.localClippingEnabled,pt=Mt.init(this.clippingPlanes,xt),S=Bt.get(C,L.length),S.init(),L.push(S),st.enabled===!0&&st.isPresenting===!0){const Et=D.xr.getDepthSensingMesh();Et!==null&&Pr(Et,X,-1/0,D.sortObjects)}Pr(C,X,0,D.sortObjects),S.finish(),D.sortObjects===!0&&S.sort(St,O),De=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,De&&Qt.addToRenderList(S,C),this.info.render.frame++,pt===!0&&Mt.beginShadows();const tt=g.state.shadowsArray;zt.render(tt,C,X),pt===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=S.opaque,j=S.transmissive;if(g.setupLights(),X.isArrayCamera){const Et=X.cameras;if(j.length>0)for(let At=0,Pt=Et.length;At<Pt;At++){const Ot=Et[At];pl(Q,j,C,Ot)}De&&Qt.render(C);for(let At=0,Pt=Et.length;At<Pt;At++){const Ot=Et[At];js(S,C,Ot,Ot.viewport)}}else j.length>0&&pl(Q,j,C,X),De&&Qt.render(C),js(S,C,X);q!==null&&z===0&&(N.updateMultisampleRenderTarget(q),N.updateRenderTargetMipmap(q)),C.isScene===!0&&C.onAfterRender(D,C,X),Le.resetDefaultState(),w=-1,A=null,U.pop(),U.length>0?(g=U[U.length-1],pt===!0&&Mt.setGlobalState(D.clippingPlanes,g.state.camera)):g=null,L.pop(),L.length>0?S=L[L.length-1]:S=null};function Pr(C,X,tt,Q){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)tt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Y.intersectsSprite(C)){Q&&It.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ct);const At=ht.update(C),Pt=C.material;Pt.visible&&S.push(C,At,Pt,tt,It.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Y.intersectsObject(C))){const At=ht.update(C),Pt=C.material;if(Q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),It.copy(C.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),It.copy(At.boundingSphere.center)),It.applyMatrix4(C.matrixWorld).applyMatrix4(Ct)),Array.isArray(Pt)){const Ot=At.groups;for(let ee=0,ne=Ot.length;ee<ne;ee++){const qt=Ot[ee],ve=Pt[qt.materialIndex];ve&&ve.visible&&S.push(C,At,ve,tt,It.z,qt)}}else Pt.visible&&S.push(C,At,Pt,tt,It.z,null)}}const Et=C.children;for(let At=0,Pt=Et.length;At<Pt;At++)Pr(Et[At],X,tt,Q)}function js(C,X,tt,Q){const j=C.opaque,Et=C.transmissive,At=C.transparent;g.setupLightsView(tt),pt===!0&&Mt.setGlobalState(D.clippingPlanes,tt),Q&&Xt.viewport(H.copy(Q)),j.length>0&&Wn(j,X,tt),Et.length>0&&Wn(Et,X,tt),At.length>0&&Wn(At,X,tt),Xt.buffers.depth.setTest(!0),Xt.buffers.depth.setMask(!0),Xt.buffers.color.setMask(!0),Xt.setPolygonOffset(!1)}function pl(C,X,tt,Q){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[Q.id]===void 0&&(g.state.transmissionRenderTarget[Q.id]=new Dr(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?ll:da,minFilter:Rr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));const Et=g.state.transmissionRenderTarget[Q.id],At=Q.viewport||H;Et.setSize(At.z*D.transmissionResolutionScale,At.w*D.transmissionResolutionScale);const Pt=D.getRenderTarget();D.setRenderTarget(Et),D.getClearColor(gt),dt=D.getClearAlpha(),dt<1&&D.setClearColor(16777215,.5),D.clear(),De&&Qt.render(tt);const Ot=D.toneMapping;D.toneMapping=Ya;const ee=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),g.setupLightsView(Q),pt===!0&&Mt.setGlobalState(D.clippingPlanes,Q),Wn(C,tt,Q),N.updateMultisampleRenderTarget(Et),N.updateRenderTargetMipmap(Et),oe.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let qt=0,ve=X.length;qt<ve;qt++){const ye=X[qt],Ge=ye.object,Ae=ye.geometry,ie=ye.material,Zt=ye.group;if(ie.side===oa&&Ge.layers.test(Q.layers)){const on=ie.side;ie.side=kn,ie.needsUpdate=!0,rn(Ge,tt,Q,Ae,ie,Zt),ie.side=on,ie.needsUpdate=!0,ne=!0}}ne===!0&&(N.updateMultisampleRenderTarget(Et),N.updateRenderTargetMipmap(Et))}D.setRenderTarget(Pt),D.setClearColor(gt,dt),ee!==void 0&&(Q.viewport=ee),D.toneMapping=Ot}function Wn(C,X,tt){const Q=X.isScene===!0?X.overrideMaterial:null;for(let j=0,Et=C.length;j<Et;j++){const At=C[j],Pt=At.object,Ot=At.geometry,ee=Q===null?At.material:Q,ne=At.group;Pt.layers.test(tt.layers)&&rn(Pt,X,tt,Ot,ee,ne)}}function rn(C,X,tt,Q,j,Et){C.onBeforeRender(D,X,tt,Q,j,Et),C.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),j.onBeforeRender(D,X,tt,Q,C,Et),j.transparent===!0&&j.side===oa&&j.forceSinglePass===!1?(j.side=kn,j.needsUpdate=!0,D.renderBufferDirect(tt,X,Q,j,C,Et),j.side=ja,j.needsUpdate=!0,D.renderBufferDirect(tt,X,Q,j,C,Et),j.side=oa):D.renderBufferDirect(tt,X,Q,j,C,Et),C.onAfterRender(D,X,tt,Q,j,Et)}function sn(C,X,tt){X.isScene!==!0&&(X=Te);const Q=Wt.get(C),j=g.state.lights,Et=g.state.shadowsArray,At=j.state.version,Pt=Gt.getParameters(C,j.state,Et,X,tt),Ot=Gt.getProgramCacheKey(Pt);let ee=Q.programs;Q.environment=C.isMeshStandardMaterial?X.environment:null,Q.fog=X.fog,Q.envMap=(C.isMeshStandardMaterial?et:b).get(C.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,ee===void 0&&(C.addEventListener("dispose",te),ee=new Map,Q.programs=ee);let ne=ee.get(Ot);if(ne!==void 0){if(Q.currentProgram===ne&&Q.lightsStateVersion===At)return Ir(C,Pt),ne}else Pt.uniforms=Gt.getUniforms(C),C.onBeforeCompile(Pt,D),ne=Gt.acquireProgram(Pt,Ot),ee.set(Ot,ne),Q.uniforms=Pt.uniforms;const qt=Q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(qt.clippingPlanes=Mt.uniform),Ir(C,Pt),Q.needsLights=ml(C),Q.lightsStateVersion=At,Q.needsLights&&(qt.ambientLightColor.value=j.state.ambient,qt.lightProbe.value=j.state.probe,qt.directionalLights.value=j.state.directional,qt.directionalLightShadows.value=j.state.directionalShadow,qt.spotLights.value=j.state.spot,qt.spotLightShadows.value=j.state.spotShadow,qt.rectAreaLights.value=j.state.rectArea,qt.ltc_1.value=j.state.rectAreaLTC1,qt.ltc_2.value=j.state.rectAreaLTC2,qt.pointLights.value=j.state.point,qt.pointLightShadows.value=j.state.pointShadow,qt.hemisphereLights.value=j.state.hemi,qt.directionalShadowMap.value=j.state.directionalShadowMap,qt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,qt.spotShadowMap.value=j.state.spotShadowMap,qt.spotLightMatrix.value=j.state.spotLightMatrix,qt.spotLightMap.value=j.state.spotLightMap,qt.pointShadowMap.value=j.state.pointShadowMap,qt.pointShadowMatrix.value=j.state.pointShadowMatrix),Q.currentProgram=ne,Q.uniformsList=null,ne}function zi(C){if(C.uniformsList===null){const X=C.currentProgram.getUniforms();C.uniformsList=Jc.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function Ir(C,X){const tt=Wt.get(C);tt.outputColorSpace=X.outputColorSpace,tt.batching=X.batching,tt.batchingColor=X.batchingColor,tt.instancing=X.instancing,tt.instancingColor=X.instancingColor,tt.instancingMorph=X.instancingMorph,tt.skinning=X.skinning,tt.morphTargets=X.morphTargets,tt.morphNormals=X.morphNormals,tt.morphColors=X.morphColors,tt.morphTargetsCount=X.morphTargetsCount,tt.numClippingPlanes=X.numClippingPlanes,tt.numIntersection=X.numClipIntersection,tt.vertexAlphas=X.vertexAlphas,tt.vertexTangents=X.vertexTangents,tt.toneMapping=X.toneMapping}function du(C,X,tt,Q,j){X.isScene!==!0&&(X=Te),N.resetTextureUnits();const Et=X.fog,At=Q.isMeshStandardMaterial?X.environment:null,Pt=q===null?D.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Gs,Ot=(Q.isMeshStandardMaterial?et:b).get(Q.envMap||At),ee=Q.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,ne=!!tt.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),qt=!!tt.morphAttributes.position,ve=!!tt.morphAttributes.normal,ye=!!tt.morphAttributes.color;let Ge=Ya;Q.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Ge=D.toneMapping);const Ae=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,ie=Ae!==void 0?Ae.length:0,Zt=Wt.get(Q),on=g.state.lights;if(pt===!0&&(xt===!0||C!==A)){const qe=C===A&&Q.id===w;Mt.setState(Q,C,qe)}let xe=!1;Q.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==on.state.version||Zt.outputColorSpace!==Pt||j.isBatchedMesh&&Zt.batching===!1||!j.isBatchedMesh&&Zt.batching===!0||j.isBatchedMesh&&Zt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Zt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Zt.instancing===!1||!j.isInstancedMesh&&Zt.instancing===!0||j.isSkinnedMesh&&Zt.skinning===!1||!j.isSkinnedMesh&&Zt.skinning===!0||j.isInstancedMesh&&Zt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Zt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Zt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Zt.instancingMorph===!1&&j.morphTexture!==null||Zt.envMap!==Ot||Q.fog===!0&&Zt.fog!==Et||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==Mt.numPlanes||Zt.numIntersection!==Mt.numIntersection)||Zt.vertexAlphas!==ee||Zt.vertexTangents!==ne||Zt.morphTargets!==qt||Zt.morphNormals!==ve||Zt.morphColors!==ye||Zt.toneMapping!==Ge||Zt.morphTargetsCount!==ie)&&(xe=!0):(xe=!0,Zt.__version=Q.version);let Bn=Zt.currentProgram;xe===!0&&(Bn=sn(Q,X,j));let hi=!1,Ln=!1,dn=!1;const Ne=Bn.getUniforms(),Nn=Zt.uniforms;if(Xt.useProgram(Bn.program)&&(hi=!0,Ln=!0,dn=!0),Q.id!==w&&(w=Q.id,Ln=!0),hi||A!==C){Xt.buffers.depth.getReversed()?(bt.copy(C.projectionMatrix),GM(bt),VM(bt),Ne.setValue(F,"projectionMatrix",bt)):Ne.setValue(F,"projectionMatrix",C.projectionMatrix),Ne.setValue(F,"viewMatrix",C.matrixWorldInverse);const yn=Ne.map.cameraPosition;yn!==void 0&&yn.setValue(F,$t.setFromMatrixPosition(C.matrixWorld)),de.logarithmicDepthBuffer&&Ne.setValue(F,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Ne.setValue(F,"isOrthographic",C.isOrthographicCamera===!0),A!==C&&(A=C,Ln=!0,dn=!0)}if(j.isSkinnedMesh){Ne.setOptional(F,j,"bindMatrix"),Ne.setOptional(F,j,"bindMatrixInverse");const qe=j.skeleton;qe&&(qe.boneTexture===null&&qe.computeBoneTexture(),Ne.setValue(F,"boneTexture",qe.boneTexture,N))}j.isBatchedMesh&&(Ne.setOptional(F,j,"batchingTexture"),Ne.setValue(F,"batchingTexture",j._matricesTexture,N),Ne.setOptional(F,j,"batchingIdTexture"),Ne.setValue(F,"batchingIdTexture",j._indirectTexture,N),Ne.setOptional(F,j,"batchingColorTexture"),j._colorsTexture!==null&&Ne.setValue(F,"batchingColorTexture",j._colorsTexture,N));const Tn=tt.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&Vt.update(j,tt,Bn),(Ln||Zt.receiveShadow!==j.receiveShadow)&&(Zt.receiveShadow=j.receiveShadow,Ne.setValue(F,"receiveShadow",j.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Nn.envMap.value=Ot,Nn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&X.environment!==null&&(Nn.envMapIntensity.value=X.environmentIntensity),Ln&&(Ne.setValue(F,"toneMappingExposure",D.toneMappingExposure),Zt.needsLights&&pu(Nn,dn),Et&&Q.fog===!0&&Dt.refreshFogUniforms(Nn,Et),Dt.refreshMaterialUniforms(Nn,Q,Z,rt,g.state.transmissionRenderTarget[C.id]),Jc.upload(F,zi(Zt),Nn,N)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Jc.upload(F,zi(Zt),Nn,N),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Ne.setValue(F,"center",j.center),Ne.setValue(F,"modelViewMatrix",j.modelViewMatrix),Ne.setValue(F,"normalMatrix",j.normalMatrix),Ne.setValue(F,"modelMatrix",j.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const qe=Q.uniformsGroups;for(let yn=0,Br=qe.length;yn<Br;yn++){const zn=qe[yn];k.update(zn,Bn),k.bind(zn,Bn)}}return Bn}function pu(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function ml(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(C,X,tt){Wt.get(C.texture).__webglTexture=X,Wt.get(C.depthTexture).__webglTexture=tt;const Q=Wt.get(C);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=tt===void 0,Q.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,X){const tt=Wt.get(C);tt.__webglFramebuffer=X,tt.__useDefaultFramebuffer=X===void 0};const Ka=F.createFramebuffer();this.setRenderTarget=function(C,X=0,tt=0){q=C,B=X,z=tt;let Q=!0,j=null,Et=!1,At=!1;if(C){const Ot=Wt.get(C);if(Ot.__useDefaultFramebuffer!==void 0)Xt.bindFramebuffer(F.FRAMEBUFFER,null),Q=!1;else if(Ot.__webglFramebuffer===void 0)N.setupRenderTarget(C);else if(Ot.__hasExternalTextures)N.rebindTextures(C,Wt.get(C.texture).__webglTexture,Wt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const qt=C.depthTexture;if(Ot.__boundDepthTexture!==qt){if(qt!==null&&Wt.has(qt)&&(C.width!==qt.image.width||C.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(C)}}const ee=C.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(At=!0);const ne=Wt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ne[X])?j=ne[X][tt]:j=ne[X],Et=!0):C.samples>0&&N.useMultisampledRTT(C)===!1?j=Wt.get(C).__webglMultisampledFramebuffer:Array.isArray(ne)?j=ne[tt]:j=ne,H.copy(C.viewport),ct.copy(C.scissor),at=C.scissorTest}else H.copy(it).multiplyScalar(Z).floor(),ct.copy(Tt).multiplyScalar(Z).floor(),at=Rt;if(tt!==0&&(j=Ka),Xt.bindFramebuffer(F.FRAMEBUFFER,j)&&Q&&Xt.drawBuffers(C,j),Xt.viewport(H),Xt.scissor(ct),Xt.setScissorTest(at),Et){const Ot=Wt.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ot.__webglTexture,tt)}else if(At){const Ot=Wt.get(C.texture),ee=X;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ot.__webglTexture,tt,ee)}else if(C!==null&&tt!==0){const Ot=Wt.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ot.__webglTexture,tt)}w=-1},this.readRenderTargetPixels=function(C,X,tt,Q,j,Et,At){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Wt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&At!==void 0&&(Pt=Pt[At]),Pt){Xt.bindFramebuffer(F.FRAMEBUFFER,Pt);try{const Ot=C.texture,ee=Ot.format,ne=Ot.type;if(!de.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-Q&&tt>=0&&tt<=C.height-j&&F.readPixels(X,tt,Q,j,jt.convert(ee),jt.convert(ne),Et)}finally{const Ot=q!==null?Wt.get(q).__webglFramebuffer:null;Xt.bindFramebuffer(F.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(C,X,tt,Q,j,Et,At){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=Wt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&At!==void 0&&(Pt=Pt[At]),Pt){const Ot=C.texture,ee=Ot.format,ne=Ot.type;if(!de.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=C.width-Q&&tt>=0&&tt<=C.height-j){Xt.bindFramebuffer(F.FRAMEBUFFER,Pt);const qt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,qt),F.bufferData(F.PIXEL_PACK_BUFFER,Et.byteLength,F.STREAM_READ),F.readPixels(X,tt,Q,j,jt.convert(ee),jt.convert(ne),0);const ve=q!==null?Wt.get(q).__webglFramebuffer:null;Xt.bindFramebuffer(F.FRAMEBUFFER,ve);const ye=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await HM(F,ye,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,qt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Et),F.deleteBuffer(qt),F.deleteSync(ye),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,X=null,tt=0){C.isTexture!==!0&&(Er("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,C=arguments[1]);const Q=Math.pow(2,-tt),j=Math.floor(C.image.width*Q),Et=Math.floor(C.image.height*Q),At=X!==null?X.x:0,Pt=X!==null?X.y:0;N.setTexture2D(C,0),F.copyTexSubImage2D(F.TEXTURE_2D,tt,0,0,At,Pt,j,Et),Xt.unbindTexture()};const Zs=F.createFramebuffer(),Fi=F.createFramebuffer();this.copyTextureToTexture=function(C,X,tt=null,Q=null,j=0,Et=null){C.isTexture!==!0&&(Er("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,C=arguments[1],X=arguments[2],Et=arguments[3]||0,tt=null),Et===null&&(j!==0?(Er("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Et=j,j=0):Et=0);let At,Pt,Ot,ee,ne,qt,ve,ye,Ge;const Ae=C.isCompressedTexture?C.mipmaps[Et]:C.image;if(tt!==null)At=tt.max.x-tt.min.x,Pt=tt.max.y-tt.min.y,Ot=tt.isBox3?tt.max.z-tt.min.z:1,ee=tt.min.x,ne=tt.min.y,qt=tt.isBox3?tt.min.z:0;else{const Tn=Math.pow(2,-j);At=Math.floor(Ae.width*Tn),Pt=Math.floor(Ae.height*Tn),C.isDataArrayTexture?Ot=Ae.depth:C.isData3DTexture?Ot=Math.floor(Ae.depth*Tn):Ot=1,ee=0,ne=0,qt=0}Q!==null?(ve=Q.x,ye=Q.y,Ge=Q.z):(ve=0,ye=0,Ge=0);const ie=jt.convert(X.format),Zt=jt.convert(X.type);let on;X.isData3DTexture?(N.setTexture3D(X,0),on=F.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(N.setTexture2DArray(X,0),on=F.TEXTURE_2D_ARRAY):(N.setTexture2D(X,0),on=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,X.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,X.unpackAlignment);const xe=F.getParameter(F.UNPACK_ROW_LENGTH),Bn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),hi=F.getParameter(F.UNPACK_SKIP_PIXELS),Ln=F.getParameter(F.UNPACK_SKIP_ROWS),dn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ae.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ae.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ee),F.pixelStorei(F.UNPACK_SKIP_ROWS,ne),F.pixelStorei(F.UNPACK_SKIP_IMAGES,qt);const Ne=C.isDataArrayTexture||C.isData3DTexture,Nn=X.isDataArrayTexture||X.isData3DTexture;if(C.isDepthTexture){const Tn=Wt.get(C),qe=Wt.get(X),yn=Wt.get(Tn.__renderTarget),Br=Wt.get(qe.__renderTarget);Xt.bindFramebuffer(F.READ_FRAMEBUFFER,yn.__webglFramebuffer),Xt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Br.__webglFramebuffer);for(let zn=0;zn<Ot;zn++)Ne&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Wt.get(C).__webglTexture,j,qt+zn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Wt.get(X).__webglTexture,Et,Ge+zn)),F.blitFramebuffer(ee,ne,At,Pt,ve,ye,At,Pt,F.DEPTH_BUFFER_BIT,F.NEAREST);Xt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(j!==0||C.isRenderTargetTexture||Wt.has(C)){const Tn=Wt.get(C),qe=Wt.get(X);Xt.bindFramebuffer(F.READ_FRAMEBUFFER,Zs),Xt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Fi);for(let yn=0;yn<Ot;yn++)Ne?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Tn.__webglTexture,j,qt+yn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Tn.__webglTexture,j),Nn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,qe.__webglTexture,Et,Ge+yn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,qe.__webglTexture,Et),j!==0?F.blitFramebuffer(ee,ne,At,Pt,ve,ye,At,Pt,F.COLOR_BUFFER_BIT,F.NEAREST):Nn?F.copyTexSubImage3D(on,Et,ve,ye,Ge+yn,ee,ne,At,Pt):F.copyTexSubImage2D(on,Et,ve,ye,ee,ne,At,Pt);Xt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Nn?C.isDataTexture||C.isData3DTexture?F.texSubImage3D(on,Et,ve,ye,Ge,At,Pt,Ot,ie,Zt,Ae.data):X.isCompressedArrayTexture?F.compressedTexSubImage3D(on,Et,ve,ye,Ge,At,Pt,Ot,ie,Ae.data):F.texSubImage3D(on,Et,ve,ye,Ge,At,Pt,Ot,ie,Zt,Ae):C.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Et,ve,ye,At,Pt,ie,Zt,Ae.data):C.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Et,ve,ye,Ae.width,Ae.height,ie,Ae.data):F.texSubImage2D(F.TEXTURE_2D,Et,ve,ye,At,Pt,ie,Zt,Ae);F.pixelStorei(F.UNPACK_ROW_LENGTH,xe),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Bn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,hi),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ln),F.pixelStorei(F.UNPACK_SKIP_IMAGES,dn),Et===0&&X.generateMipmaps&&F.generateMipmap(on),Xt.unbindTexture()},this.copyTextureToTexture3D=function(C,X,tt=null,Q=null,j=0){return C.isTexture!==!0&&(Er("WebGLRenderer: copyTextureToTexture3D function signature has changed."),tt=arguments[0]||null,Q=arguments[1]||null,C=arguments[2],X=arguments[3],j=arguments[4]||0),Er('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,X,tt,Q,j)},this.initRenderTarget=function(C){Wt.get(C).__webglFramebuffer===void 0&&N.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?N.setTextureCube(C,0):C.isData3DTexture?N.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?N.setTexture2DArray(C,0):N.setTexture2D(C,0),Xt.unbindTexture()},this.resetState=function(){B=0,z=0,q=null,Xt.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ca}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorspace=we._getDrawingBufferColorSpace(t),n.unpackColorSpace=we._getUnpackColorSpace()}}const Yv={type:"change"},up={type:"start"},oy={type:"end"},kc=new sp,qv=new Va,uC=Math.cos(70*zM.DEG2RAD),un=new J,Vn=2*Math.PI,Be={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ed=1e-6;class fC extends AT{constructor(t,n=null){super(t,n),this.state=Be.NONE,this.enabled=!0,this.target=new J,this.cursor=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ls.ROTATE,MIDDLE:Ls.DOLLY,RIGHT:Ls.PAN},this.touches={ONE:ws.ROTATE,TWO:ws.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new J,this._lastQuaternion=new Ur,this._lastTargetPosition=new J,this._quat=new Ur().setFromUnitVectors(t.up,new J(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new xv,this._sphericalDelta=new xv,this._scale=1,this._panOffset=new J,this._rotateStart=new ue,this._rotateEnd=new ue,this._rotateDelta=new ue,this._panStart=new ue,this._panEnd=new ue,this._panDelta=new ue,this._dollyStart=new ue,this._dollyEnd=new ue,this._dollyDelta=new ue,this._dollyDirection=new J,this._mouse=new ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=dC.bind(this),this._onPointerDown=hC.bind(this),this._onPointerUp=pC.bind(this),this._onContextMenu=SC.bind(this),this._onMouseWheel=_C.bind(this),this._onKeyDown=vC.bind(this),this._onTouchStart=yC.bind(this),this._onTouchMove=xC.bind(this),this._onMouseDown=mC.bind(this),this._onMouseMove=gC.bind(this),this._interceptControlDown=EC.bind(this),this._interceptControlUp=MC.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Yv),this.update(),this.state=Be.NONE}update(t=null){const n=this.object.position;un.copy(n).sub(this.target),un.applyQuaternion(this._quat),this._spherical.setFromVector3(un),this.autoRotate&&this.state===Be.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(r)&&isFinite(l)&&(r<-Math.PI?r+=Vn:r>Math.PI&&(r-=Vn),l<-Math.PI?l+=Vn:l>Math.PI&&(l-=Vn),r<=l?this._spherical.theta=Math.max(r,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+l)/2?Math.max(r,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(un.setFromSpherical(this._spherical),un.applyQuaternion(this._quatInverse),n.copy(this.target).add(un),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const h=un.length();f=this._clampDistance(h*this._scale);const p=h-f;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),c=!!p}else if(this.object.isOrthographicCamera){const h=new J(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=p!==this.object.zoom;const m=new J(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(h),this.object.updateMatrixWorld(),f=un.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(kc.origin.copy(this.object.position),kc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(kc.direction))<uC?this.object.lookAt(this.target):(qv.setFromNormalAndCoplanarPoint(this.object.up,this.target),kc.intersectPlane(qv,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>ed||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ed||this._lastTargetPosition.distanceToSquared(this.target)>ed?(this.dispatchEvent(Yv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Vn/60*this.autoRotateSpeed*t:Vn/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){un.setFromMatrixColumn(n,0),un.multiplyScalar(-t),this._panOffset.add(un)}_panUp(t,n){this.screenSpacePanning===!0?un.setFromMatrixColumn(n,1):(un.setFromMatrixColumn(n,0),un.crossVectors(this.object.up,un)),un.multiplyScalar(t),this._panOffset.add(un)}_pan(t,n){const r=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;un.copy(l).sub(this.target);let c=un.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/r.clientHeight,this.object.matrix),this._panUp(2*n*c/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),l=t-r.left,c=n-r.top,f=r.width,h=r.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._rotateStart.set(r,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._panStart.set(r,l)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),r=t.pageX-n.x,l=t.pageY-n.y,c=Math.sqrt(r*r+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const r=this._getSecondPointerPosition(t),l=.5*(t.pageX+r.x),c=.5*(t.pageY+r.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._panEnd.set(r,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),r=t.pageX-n.x,l=t.pageY-n.y,c=Math.sqrt(r*r+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+n.x)*.5,h=(t.pageY+n.y)*.5;this._updateZoomParameters(f,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new ue,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,r={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function hC(a){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(a.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(a)&&(this._addPointer(a),a.pointerType==="touch"?this._onTouchStart(a):this._onMouseDown(a)))}function dC(a){this.enabled!==!1&&(a.pointerType==="touch"?this._onTouchMove(a):this._onMouseMove(a))}function pC(a){switch(this._removePointer(a),this._pointers.length){case 0:this.domElement.releasePointerCapture(a.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(oy),this.state=Be.NONE;break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function mC(a){let t;switch(a.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ls.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(a),this.state=Be.DOLLY;break;case Ls.ROTATE:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=Be.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=Be.ROTATE}break;case Ls.PAN:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=Be.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=Be.PAN}break;default:this.state=Be.NONE}this.state!==Be.NONE&&this.dispatchEvent(up)}function gC(a){switch(this.state){case Be.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(a);break;case Be.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(a);break;case Be.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(a);break}}function _C(a){this.enabled===!1||this.enableZoom===!1||this.state!==Be.NONE||(a.preventDefault(),this.dispatchEvent(up),this._handleMouseWheel(this._customWheelEvent(a)),this.dispatchEvent(oy))}function vC(a){this.enabled!==!1&&this._handleKeyDown(a)}function yC(a){switch(this._trackPointer(a),this._pointers.length){case 1:switch(this.touches.ONE){case ws.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(a),this.state=Be.TOUCH_ROTATE;break;case ws.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(a),this.state=Be.TOUCH_PAN;break;default:this.state=Be.NONE}break;case 2:switch(this.touches.TWO){case ws.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(a),this.state=Be.TOUCH_DOLLY_PAN;break;case ws.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(a),this.state=Be.TOUCH_DOLLY_ROTATE;break;default:this.state=Be.NONE}break;default:this.state=Be.NONE}this.state!==Be.NONE&&this.dispatchEvent(up)}function xC(a){switch(this._trackPointer(a),this.state){case Be.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(a),this.update();break;case Be.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(a),this.update();break;case Be.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(a),this.update();break;case Be.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(a),this.update();break;default:this.state=Be.NONE}}function SC(a){this.enabled!==!1&&a.preventDefault()}function EC(a){a.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function MC(a){a.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const TC=()=>{const a=lt.useRef(null),[t,n]=lt.useState(!0);lt.useEffect(()=>{if(!a.current)return;const l=new dT;l.background=new Me(661807);const c=new fi(75,window.innerWidth/window.innerHeight,.1,1e3),f=new cC({antialias:!0});f.setSize(window.innerWidth,window.innerHeight),a.current.appendChild(f.domElement);const h=new fC(c,f.domElement);h.enableDamping=!0,h.dampingFactor=.05;const p=new MT(4210752);l.add(p);const m=new ET(16777215,.5);m.position.set(1,1,1),l.add(m);const _=new Ds,y=[2899536,3426654,2719929,3447003],v=4,x=10;for(let g=0;g<v;g++){const L=new Ds;for(let U=0;U<x;U++){const D=new lp(.1,32,32),I=new _T({color:y[g],emissive:y[g],emissiveIntensity:.3}),B=new Li(D,I),z=1+g,q=U/x*Math.PI*2;B.position.x=Math.cos(q)*z,B.position.y=Math.sin(q)*z,B.position.z=g*1-2,L.add(B),g>0&&_.children[g-1].children.forEach(A=>{const H=new Bi().setFromPoints([A.position,B.position]),ct=new $0({color:6139362,transparent:!0,opacity:.3}),at=new gT(H,ct);_.add(at)})}_.add(L)}l.add(_),c.position.z=6;const M=new bT,T=()=>{if(!t)return;requestAnimationFrame(T);const g=M.getElapsedTime();_.rotation.y=g*.1,_.rotation.x=Math.sin(g*.2)*.1,_.children.forEach((L,U)=>{L.children.forEach((D,I)=>{const B=1+Math.sin(g*2+U+I)*.1;D.scale.set(B,B,B)})}),h.update(),f.render(l,c)};T();const S=()=>{c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),f.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",S),()=>{window.removeEventListener("resize",S),a.current&&f.domElement&&a.current.removeChild(f.domElement),f.dispose()}},[t]);const r=()=>{n(!t)};return Kt.jsxs("div",{className:"relative w-full h-screen",children:[Kt.jsx("div",{ref:a,className:"absolute top-0 left-0 w-full h-full"}),Kt.jsxs("button",{onClick:r,className:"absolute top-4 right-4 z-10 bg-blue-500 text-white px-4 py-2 rounded",children:[t?"Pause":"Resume"," Animation"]})]})},Jo=({children:a,onClick:t,className:n})=>Kt.jsx("button",{onClick:t,className:`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition ${n}`,children:a}),bC=()=>Kt.jsxs("div",{className:"container mx-auto px-4 py-8",children:[Kt.jsx("h1",{className:"text-4xl font-bold mb-4",children:"Welcome to BuildWars"}),Kt.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[Kt.jsxs("div",{children:[Kt.jsx("p",{className:"text-lg mb-4",children:"Explore cutting-edge AI and visualization technologies."}),Kt.jsx(Jo,{children:"Get Started"})]}),Kt.jsx(TC,{})]})]});var jv;(function(a){a.STRING="string",a.NUMBER="number",a.INTEGER="integer",a.BOOLEAN="boolean",a.ARRAY="array",a.OBJECT="object"})(jv||(jv={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zv;(function(a){a.LANGUAGE_UNSPECIFIED="language_unspecified",a.PYTHON="python"})(Zv||(Zv={}));var Kv;(function(a){a.OUTCOME_UNSPECIFIED="outcome_unspecified",a.OUTCOME_OK="outcome_ok",a.OUTCOME_FAILED="outcome_failed",a.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(Kv||(Kv={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv=["user","model","function","system"];var $v;(function(a){a.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",a.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",a.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",a.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",a.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",a.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY"})($v||($v={}));var Jv;(function(a){a.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",a.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",a.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",a.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",a.BLOCK_NONE="BLOCK_NONE"})(Jv||(Jv={}));var t0;(function(a){a.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",a.NEGLIGIBLE="NEGLIGIBLE",a.LOW="LOW",a.MEDIUM="MEDIUM",a.HIGH="HIGH"})(t0||(t0={}));var e0;(function(a){a.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",a.SAFETY="SAFETY",a.OTHER="OTHER"})(e0||(e0={}));var tl;(function(a){a.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",a.STOP="STOP",a.MAX_TOKENS="MAX_TOKENS",a.SAFETY="SAFETY",a.RECITATION="RECITATION",a.LANGUAGE="LANGUAGE",a.BLOCKLIST="BLOCKLIST",a.PROHIBITED_CONTENT="PROHIBITED_CONTENT",a.SPII="SPII",a.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",a.OTHER="OTHER"})(tl||(tl={}));var n0;(function(a){a.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",a.RETRIEVAL_QUERY="RETRIEVAL_QUERY",a.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",a.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",a.CLASSIFICATION="CLASSIFICATION",a.CLUSTERING="CLUSTERING"})(n0||(n0={}));var i0;(function(a){a.MODE_UNSPECIFIED="MODE_UNSPECIFIED",a.AUTO="AUTO",a.ANY="ANY",a.NONE="NONE"})(i0||(i0={}));var a0;(function(a){a.MODE_UNSPECIFIED="MODE_UNSPECIFIED",a.MODE_DYNAMIC="MODE_DYNAMIC"})(a0||(a0={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends Error{constructor(t){super(`[GoogleGenerativeAI Error]: ${t}`)}}class Rs extends wn{constructor(t,n){super(t),this.response=n}}class ly extends wn{constructor(t,n,r,l){super(t),this.status=n,this.statusText=r,this.errorDetails=l}}class qa extends wn{}class cy extends wn{}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC="https://generativelanguage.googleapis.com",RC="v1beta",CC="0.24.0",wC="genai-js";var Lr;(function(a){a.GENERATE_CONTENT="generateContent",a.STREAM_GENERATE_CONTENT="streamGenerateContent",a.COUNT_TOKENS="countTokens",a.EMBED_CONTENT="embedContent",a.BATCH_EMBED_CONTENTS="batchEmbedContents"})(Lr||(Lr={}));class DC{constructor(t,n,r,l,c){this.model=t,this.task=n,this.apiKey=r,this.stream=l,this.requestOptions=c}toString(){var t,n;const r=((t=this.requestOptions)===null||t===void 0?void 0:t.apiVersion)||RC;let c=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||AC}/${r}/${this.model}:${this.task}`;return this.stream&&(c+="?alt=sse"),c}}function UC(a){const t=[];return a!=null&&a.apiClient&&t.push(a.apiClient),t.push(`${wC}/${CC}`),t.join(" ")}async function LC(a){var t;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",UC(a.requestOptions)),n.append("x-goog-api-key",a.apiKey);let r=(t=a.requestOptions)===null||t===void 0?void 0:t.customHeaders;if(r){if(!(r instanceof Headers))try{r=new Headers(r)}catch(l){throw new qa(`unable to convert customHeaders value ${JSON.stringify(r)} to Headers: ${l.message}`)}for(const[l,c]of r.entries()){if(l==="x-goog-api-key")throw new qa(`Cannot set reserved header name ${l}`);if(l==="x-goog-api-client")throw new qa(`Header name ${l} can only be set using the apiClient field`);n.append(l,c)}}return n}async function NC(a,t,n,r,l,c){const f=new DC(a,t,n,r,c);return{url:f.toString(),fetchOptions:Object.assign(Object.assign({},BC(c)),{method:"POST",headers:await LC(f),body:l})}}async function hl(a,t,n,r,l,c={},f=fetch){const{url:h,fetchOptions:p}=await NC(a,t,n,r,l,c);return OC(h,p,f)}async function OC(a,t,n=fetch){let r;try{r=await n(a,t)}catch(l){PC(l,a)}return r.ok||await IC(r,a),r}function PC(a,t){let n=a;throw n.name==="AbortError"?(n=new cy(`Request aborted when fetching ${t.toString()}: ${a.message}`),n.stack=a.stack):a instanceof ly||a instanceof qa||(n=new wn(`Error fetching from ${t.toString()}: ${a.message}`),n.stack=a.stack),n}async function IC(a,t){let n="",r;try{const l=await a.json();n=l.error.message,l.error.details&&(n+=` ${JSON.stringify(l.error.details)}`,r=l.error.details)}catch{}throw new ly(`Error fetching from ${t.toString()}: [${a.status} ${a.statusText}] ${n}`,a.status,a.statusText,r)}function BC(a){const t={};if((a==null?void 0:a.signal)!==void 0||(a==null?void 0:a.timeout)>=0){const n=new AbortController;(a==null?void 0:a.timeout)>=0&&setTimeout(()=>n.abort(),a.timeout),a!=null&&a.signal&&a.signal.addEventListener("abort",()=>{n.abort()}),t.signal=n.signal}return t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(a){return a.text=()=>{if(a.candidates&&a.candidates.length>0){if(a.candidates.length>1&&console.warn(`This response had ${a.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),tu(a.candidates[0]))throw new Rs(`${ka(a)}`,a);return zC(a)}else if(a.promptFeedback)throw new Rs(`Text not available. ${ka(a)}`,a);return""},a.functionCall=()=>{if(a.candidates&&a.candidates.length>0){if(a.candidates.length>1&&console.warn(`This response had ${a.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),tu(a.candidates[0]))throw new Rs(`${ka(a)}`,a);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),r0(a)[0]}else if(a.promptFeedback)throw new Rs(`Function call not available. ${ka(a)}`,a)},a.functionCalls=()=>{if(a.candidates&&a.candidates.length>0){if(a.candidates.length>1&&console.warn(`This response had ${a.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),tu(a.candidates[0]))throw new Rs(`${ka(a)}`,a);return r0(a)}else if(a.promptFeedback)throw new Rs(`Function call not available. ${ka(a)}`,a)},a}function zC(a){var t,n,r,l;const c=[];if(!((n=(t=a.candidates)===null||t===void 0?void 0:t[0].content)===null||n===void 0)&&n.parts)for(const f of(l=(r=a.candidates)===null||r===void 0?void 0:r[0].content)===null||l===void 0?void 0:l.parts)f.text&&c.push(f.text),f.executableCode&&c.push("\n```"+f.executableCode.language+`
`+f.executableCode.code+"\n```\n"),f.codeExecutionResult&&c.push("\n```\n"+f.codeExecutionResult.output+"\n```\n");return c.length>0?c.join(""):""}function r0(a){var t,n,r,l;const c=[];if(!((n=(t=a.candidates)===null||t===void 0?void 0:t[0].content)===null||n===void 0)&&n.parts)for(const f of(l=(r=a.candidates)===null||r===void 0?void 0:r[0].content)===null||l===void 0?void 0:l.parts)f.functionCall&&c.push(f.functionCall);if(c.length>0)return c}const FC=[tl.RECITATION,tl.SAFETY,tl.LANGUAGE];function tu(a){return!!a.finishReason&&FC.includes(a.finishReason)}function ka(a){var t,n,r;let l="";if((!a.candidates||a.candidates.length===0)&&a.promptFeedback)l+="Response was blocked",!((t=a.promptFeedback)===null||t===void 0)&&t.blockReason&&(l+=` due to ${a.promptFeedback.blockReason}`),!((n=a.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(l+=`: ${a.promptFeedback.blockReasonMessage}`);else if(!((r=a.candidates)===null||r===void 0)&&r[0]){const c=a.candidates[0];tu(c)&&(l+=`Candidate was blocked due to ${c.finishReason}`,c.finishMessage&&(l+=`: ${c.finishMessage}`))}return l}function il(a){return this instanceof il?(this.v=a,this):new il(a)}function HC(a,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(a,t||[]),l,c=[];return l={},f("next"),f("throw"),f("return"),l[Symbol.asyncIterator]=function(){return this},l;function f(v){r[v]&&(l[v]=function(x){return new Promise(function(M,T){c.push([v,x,M,T])>1||h(v,x)})})}function h(v,x){try{p(r[v](x))}catch(M){y(c[0][3],M)}}function p(v){v.value instanceof il?Promise.resolve(v.value.v).then(m,_):y(c[0][2],v)}function m(v){h("next",v)}function _(v){h("throw",v)}function y(v,x){v(x),c.shift(),c.length&&h(c[0][0],c[0][1])}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function GC(a){const t=a.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=XC(t),[r,l]=n.tee();return{stream:kC(r),response:VC(l)}}async function VC(a){const t=[],n=a.getReader();for(;;){const{done:r,value:l}=await n.read();if(r)return fp(WC(t));t.push(l)}}function kC(a){return HC(this,arguments,function*(){const n=a.getReader();for(;;){const{value:r,done:l}=yield il(n.read());if(l)break;yield yield il(fp(r))}})}function XC(a){const t=a.getReader();return new ReadableStream({start(r){let l="";return c();function c(){return t.read().then(({value:f,done:h})=>{if(h){if(l.trim()){r.error(new wn("Failed to parse stream"));return}r.close();return}l+=f;let p=l.match(s0),m;for(;p;){try{m=JSON.parse(p[1])}catch{r.error(new wn(`Error parsing JSON response: "${p[1]}"`));return}r.enqueue(m),l=l.substring(p[0].length),p=l.match(s0)}return c()}).catch(f=>{let h=f;throw h.stack=f.stack,h.name==="AbortError"?h=new cy("Request aborted when reading from the stream"):h=new wn("Error reading from the stream"),h})}}})}function WC(a){const t=a[a.length-1],n={promptFeedback:t==null?void 0:t.promptFeedback};for(const r of a){if(r.candidates){let l=0;for(const c of r.candidates)if(n.candidates||(n.candidates=[]),n.candidates[l]||(n.candidates[l]={index:l}),n.candidates[l].citationMetadata=c.citationMetadata,n.candidates[l].groundingMetadata=c.groundingMetadata,n.candidates[l].finishReason=c.finishReason,n.candidates[l].finishMessage=c.finishMessage,n.candidates[l].safetyRatings=c.safetyRatings,c.content&&c.content.parts){n.candidates[l].content||(n.candidates[l].content={role:c.content.role||"user",parts:[]});const f={};for(const h of c.content.parts)h.text&&(f.text=h.text),h.functionCall&&(f.functionCall=h.functionCall),h.executableCode&&(f.executableCode=h.executableCode),h.codeExecutionResult&&(f.codeExecutionResult=h.codeExecutionResult),Object.keys(f).length===0&&(f.text=""),n.candidates[l].content.parts.push(f)}l++}r.usageMetadata&&(n.usageMetadata=r.usageMetadata)}return n}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uy(a,t,n,r){const l=await hl(t,Lr.STREAM_GENERATE_CONTENT,a,!0,JSON.stringify(n),r);return GC(l)}async function fy(a,t,n,r){const c=await(await hl(t,Lr.GENERATE_CONTENT,a,!1,JSON.stringify(n),r)).json();return{response:fp(c)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(a){if(a!=null){if(typeof a=="string")return{role:"system",parts:[{text:a}]};if(a.text)return{role:"system",parts:[a]};if(a.parts)return a.role?a:{role:"system",parts:a.parts}}}function al(a){let t=[];if(typeof a=="string")t=[{text:a}];else for(const n of a)typeof n=="string"?t.push({text:n}):t.push(n);return YC(t)}function YC(a){const t={role:"user",parts:[]},n={role:"function",parts:[]};let r=!1,l=!1;for(const c of a)"functionResponse"in c?(n.parts.push(c),l=!0):(t.parts.push(c),r=!0);if(r&&l)throw new wn("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!r&&!l)throw new wn("No content is provided for sending chat message.");return r?t:n}function qC(a,t){var n;let r={model:t==null?void 0:t.model,generationConfig:t==null?void 0:t.generationConfig,safetySettings:t==null?void 0:t.safetySettings,tools:t==null?void 0:t.tools,toolConfig:t==null?void 0:t.toolConfig,systemInstruction:t==null?void 0:t.systemInstruction,cachedContent:(n=t==null?void 0:t.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const l=a.generateContentRequest!=null;if(a.contents){if(l)throw new qa("CountTokensRequest must have one of contents or generateContentRequest, not both.");r.contents=a.contents}else if(l)r=Object.assign(Object.assign({},r),a.generateContentRequest);else{const c=al(a);r.contents=[c]}return{generateContentRequest:r}}function o0(a){let t;return a.contents?t=a:t={contents:[al(a)]},a.systemInstruction&&(t.systemInstruction=hy(a.systemInstruction)),t}function jC(a){return typeof a=="string"||Array.isArray(a)?{content:al(a)}:a}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],ZC={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function KC(a){let t=!1;for(const n of a){const{role:r,parts:l}=n;if(!t&&r!=="user")throw new wn(`First content should be with role 'user', got ${r}`);if(!Qv.includes(r))throw new wn(`Each item should include role field. Got ${r} but valid roles are: ${JSON.stringify(Qv)}`);if(!Array.isArray(l))throw new wn("Content should have 'parts' property with an array of Parts");if(l.length===0)throw new wn("Each Content should have at least one part");const c={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const h of l)for(const p of l0)p in h&&(c[p]+=1);const f=ZC[r];for(const h of l0)if(!f.includes(h)&&c[h]>0)throw new wn(`Content with role '${r}' can't contain '${h}' part`);t=!0}}function c0(a){var t;if(a.candidates===void 0||a.candidates.length===0)return!1;const n=(t=a.candidates[0])===null||t===void 0?void 0:t.content;if(n===void 0||n.parts===void 0||n.parts.length===0)return!1;for(const r of n.parts)if(r===void 0||Object.keys(r).length===0||r.text!==void 0&&r.text==="")return!1;return!0}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0="SILENT_ERROR";class QC{constructor(t,n,r,l={}){this.model=n,this.params=r,this._requestOptions=l,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=t,r!=null&&r.history&&(KC(r.history),this._history=r.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(t,n={}){var r,l,c,f,h,p;await this._sendPromise;const m=al(t),_={safetySettings:(r=this.params)===null||r===void 0?void 0:r.safetySettings,generationConfig:(l=this.params)===null||l===void 0?void 0:l.generationConfig,tools:(c=this.params)===null||c===void 0?void 0:c.tools,toolConfig:(f=this.params)===null||f===void 0?void 0:f.toolConfig,systemInstruction:(h=this.params)===null||h===void 0?void 0:h.systemInstruction,cachedContent:(p=this.params)===null||p===void 0?void 0:p.cachedContent,contents:[...this._history,m]},y=Object.assign(Object.assign({},this._requestOptions),n);let v;return this._sendPromise=this._sendPromise.then(()=>fy(this._apiKey,this.model,_,y)).then(x=>{var M;if(c0(x.response)){this._history.push(m);const T=Object.assign({parts:[],role:"model"},(M=x.response.candidates)===null||M===void 0?void 0:M[0].content);this._history.push(T)}else{const T=ka(x.response);T&&console.warn(`sendMessage() was unsuccessful. ${T}. Inspect response object for details.`)}v=x}),await this._sendPromise,v}async sendMessageStream(t,n={}){var r,l,c,f,h,p;await this._sendPromise;const m=al(t),_={safetySettings:(r=this.params)===null||r===void 0?void 0:r.safetySettings,generationConfig:(l=this.params)===null||l===void 0?void 0:l.generationConfig,tools:(c=this.params)===null||c===void 0?void 0:c.tools,toolConfig:(f=this.params)===null||f===void 0?void 0:f.toolConfig,systemInstruction:(h=this.params)===null||h===void 0?void 0:h.systemInstruction,cachedContent:(p=this.params)===null||p===void 0?void 0:p.cachedContent,contents:[...this._history,m]},y=Object.assign(Object.assign({},this._requestOptions),n),v=uy(this._apiKey,this.model,_,y);return this._sendPromise=this._sendPromise.then(()=>v).catch(x=>{throw new Error(u0)}).then(x=>x.response).then(x=>{if(c0(x)){this._history.push(m);const M=Object.assign({},x.candidates[0].content);M.role||(M.role="model"),this._history.push(M)}else{const M=ka(x);M&&console.warn(`sendMessageStream() was unsuccessful. ${M}. Inspect response object for details.`)}}).catch(x=>{x.message!==u0&&console.error(x)}),v}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $C(a,t,n,r){return(await hl(t,Lr.COUNT_TOKENS,a,!1,JSON.stringify(n),r)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JC(a,t,n,r){return(await hl(t,Lr.EMBED_CONTENT,a,!1,JSON.stringify(n),r)).json()}async function tw(a,t,n,r){const l=n.requests.map(f=>Object.assign(Object.assign({},f),{model:t}));return(await hl(t,Lr.BATCH_EMBED_CONTENTS,a,!1,JSON.stringify({requests:l}),r)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(t,n,r={}){this.apiKey=t,this._requestOptions=r,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=hy(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(t,n={}){var r;const l=o0(t),c=Object.assign(Object.assign({},this._requestOptions),n);return fy(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(r=this.cachedContent)===null||r===void 0?void 0:r.name},l),c)}async generateContentStream(t,n={}){var r;const l=o0(t),c=Object.assign(Object.assign({},this._requestOptions),n);return uy(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(r=this.cachedContent)===null||r===void 0?void 0:r.name},l),c)}startChat(t){var n;return new QC(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},t),this._requestOptions)}async countTokens(t,n={}){const r=qC(t,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),l=Object.assign(Object.assign({},this._requestOptions),n);return $C(this.apiKey,this.model,r,l)}async embedContent(t,n={}){const r=jC(t),l=Object.assign(Object.assign({},this._requestOptions),n);return JC(this.apiKey,this.model,r,l)}async batchEmbedContents(t,n={}){const r=Object.assign(Object.assign({},this._requestOptions),n);return tw(this.apiKey,this.model,t,r)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(t){this.apiKey=t}getGenerativeModel(t,n){if(!t.model)throw new wn("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new f0(this.apiKey,t,n)}getGenerativeModelFromCachedContent(t,n,r){if(!t.name)throw new qa("Cached content must contain a `name` field.");if(!t.model)throw new qa("Cached content must contain a `model` field.");const l=["model","systemInstruction"];for(const f of l)if(n!=null&&n[f]&&t[f]&&(n==null?void 0:n[f])!==t[f]){if(f==="model"){const h=n.model.startsWith("models/")?n.model.replace("models/",""):n.model,p=t.model.startsWith("models/")?t.model.replace("models/",""):t.model;if(h===p)continue}throw new qa(`Different value for "${f}" specified in modelParams (${n[f]}) and cachedContent (${t[f]})`)}const c=Object.assign(Object.assign({},n),{model:t.model,tools:t.tools,toolConfig:t.toolConfig,systemInstruction:t.systemInstruction,cachedContent:t});return new f0(this.apiKey,c,r)}}const nw={TEXT_GENERATION:"gemini-1.5-pro-latest",MULTI_MODAL:"gemini-1.5-pro-latest",ANALYSIS:"gemini-1.5-pro-latest"};class Cr extends Error{constructor(t,n="GenerationError"){super(t),this.name=n}}class iw{constructor(t){if(!t)throw new Cr("API Key is required","ConfigurationError");this.genAI=new ew(t)}async generateContent(t,n={}){try{return(await this.genAI.getGenerativeModel({model:n.model||nw.TEXT_GENERATION,generationConfig:{maxOutputTokens:n.maxTokens||1e3,temperature:n.temperature||.7,topP:n.topP||.9,topK:n.topK||40}}).generateContent(t)).response.text()}catch(r){throw console.error("AI Generation Error:",r),new Cr(`Content generation failed: ${r.message}`)}}async analyzeText(t,n="comprehensive"){const r={comprehensive:`Perform a comprehensive analysis of the following text. 
        Provide insights on:
        1. Key themes
        2. Sentiment
        3. Complexity
        4. Potential implications
        
        Text: ${t}`,sustainability:`Analyze the text from a sustainability perspective:
        1. Identify sustainability-related keywords
        2. Assess environmental impact statements
        3. Rate the sustainability consciousness
        
        Text: ${t}`,businessInsights:`Extract business and innovation insights from the text:
        1. Potential business opportunities
        2. Innovation indicators
        3. Market trend signals
        
        Text: ${t}`};try{const l=r[n]||r.comprehensive,c=await this.generateContent(l);return{type:n,insights:c}}catch(l){throw console.error("Text Analysis Error:",l),new Cr(`Text analysis failed: ${l.message}`)}}async generateBusinessModel(t){const n=`Generate an innovative, AI-driven business model for a company with these characteristics:
      - Industry: ${t.industry}
      - Current AI Adoption: ${t.aiAdoption}%
      - Primary AI Application: ${t.primaryAIApplication}
      - ESG Score: ${t.esgScore}
      - Sustainable Growth Index: ${t.sustainableGrowthIndex}

      Focus on:
      - Leveraging generative AI technologies
      - Disrupting traditional industry practices
      - Aligning with ESG objectives
      - Creating sustainable revenue streams
      - Improving efficiency through AI`;try{const r=await this.generateContent(n);return this.parseBusinessModel(r)}catch(r){throw console.error("Business Model Generation Error:",r),new Cr(`Business model generation failed: ${r.message}`)}}parseBusinessModel(t){return{valueProposition:this.extractSection(t,"Value Proposition"),keyActivities:this.extractList(t,"Key Activities"),revenueStreams:this.extractList(t,"Revenue Streams"),sustainabilityImpact:this.extractSection(t,"Sustainability Impact"),aiIntegration:this.extractSection(t,"AI Integration")}}extractSection(t,n){const r=new RegExp(`${n}:(.+?)(?:

|
[A-Za-z]+:)`,"s"),l=t.match(r);return l?l[1].trim():"Not specified"}extractList(t,n){const r=new RegExp(`${n}:(.+?)(?:

|
[A-Za-z]+:)`,"s"),l=t.match(r);return l?l[1].split(`
`).map(c=>c.trim()).filter(c=>c):[]}}const aw=a=>{const[t,n]=lt.useState(null),[r,l]=lt.useState(null),c=lt.useCallback(()=>{try{const m=new iw(a);n(m),l(null)}catch(m){l(m),console.error("AI Service Initialization Error:",m)}},[a]),f=lt.useCallback(async(m,_)=>{if(!t)throw new Cr("AI Service not initialized");return t.generateContent(m,_)},[t]),h=lt.useCallback(async(m,_)=>{if(!t)throw new Cr("AI Service not initialized");return t.analyzeText(m,_)},[t]),p=lt.useCallback(async m=>{if(!t)throw new Cr("AI Service not initialized");return t.generateBusinessModel(m)},[t]);return{aiService:t,error:r,initializeAIService:c,generateContent:f,analyzeText:h,generateBusinessModel:p}},rw=a=>Kt.jsx("textarea",{className:"border p-2 w-full",...a}),sw=()=>{const[a,t]=lt.useState(""),[n,r]=lt.useState(""),[l,c]=lt.useState("content"),[f,h]=lt.useState(!1),[p,m]=lt.useState(null),{initializeAIService:_,generateContent:y,analyzeText:v,generateBusinessModel:x}=aw("AIzaSyCUr7JVW3QowRFu_c_49zPDZatiypyrS4I");lt.useEffect(()=>{_()},[_]);const M=async()=>{h(!0),m(null);try{let T;switch(l){case"content":T=await y(a);break;case"analysis":T=await v(a,"comprehensive");break;case"business-model":T=await x({industry:"Technology",aiAdoption:65,primaryAIApplication:"Customer Support",esgScore:.8,sustainableGrowthIndex:.75});break;default:T=await y(a)}r(JSON.stringify(T,null,2))}catch(T){m(T.message),console.error("AI Generation Error:",T)}finally{h(!1)}};return Kt.jsxs("div",{className:"container mx-auto px-4 py-8",children:[Kt.jsx("h1",{className:"text-3xl font-bold mb-6",children:"AI Features"}),Kt.jsxs("div",{className:"space-y-4 max-w-2xl mx-auto",children:[Kt.jsxs("div",{className:"flex space-x-4",children:[Kt.jsxs("select",{value:l,onChange:T=>c(T.target.value),className:"px-3 py-2 border rounded",children:[Kt.jsx("option",{value:"content",children:"Content Generation"}),Kt.jsx("option",{value:"analysis",children:"Text Analysis"}),Kt.jsx("option",{value:"business-model",children:"Business Model"})]}),Kt.jsx(rw,{placeholder:`Enter ${l} prompt`,value:a,onChange:T=>t(T.target.value),className:"flex-grow",disabled:l==="business-model"})]}),Kt.jsx(Jo,{onClick:M,disabled:f||l!=="business-model"&&!a,className:"w-full",children:f?"Generating...":"Generate"}),p&&Kt.jsx("div",{className:"bg-red-100 text-red-800 p-4 rounded",children:Kt.jsxs("p",{children:["Error: ",p]})}),n&&Kt.jsxs("div",{className:"mt-4 p-4 bg-gray-100 border rounded",children:[Kt.jsx("h2",{className:"font-bold mb-2",children:"AI Response:"}),Kt.jsx("pre",{className:"overflow-x-auto text-sm",children:n})]})]})]})},dy=()=>(lt.useEffect(()=>{const a=document.createElement("script");return a.src="https://embed.tawk.to/67e41762ec7c9f190e0dc869/default",a.async=!0,document.body.appendChild(a),()=>{document.body.removeChild(a)}},[]),null),ow=()=>Kt.jsxs("div",{className:"container mx-auto px-4 py-8",children:[Kt.jsx("h1",{className:"text-3xl font-bold mb-4",children:"Chatbot Integration"}),Kt.jsx("p",{children:"Our AI-powered chatbot is ready to assist you!"}),Kt.jsx(dy,{})]}),lw=()=>Kt.jsx("nav",{className:"bg-primary text-primary-foreground p-4",children:Kt.jsxs("div",{className:"container mx-auto flex justify-between items-center",children:[Kt.jsx(Cs,{to:"/",className:"text-2xl font-bold",children:"BuildWars"}),Kt.jsxs("div",{className:"space-x-4",children:[Kt.jsx(Jo,{asChild:!0,variant:"ghost",children:Kt.jsx(Cs,{to:"/",children:"Home"})}),Kt.jsx(Jo,{asChild:!0,variant:"ghost",children:Kt.jsx(Cs,{to:"/ai-features",children:"AI Features"})}),Kt.jsx(Jo,{asChild:!0,variant:"ghost",children:Kt.jsx(Cs,{to:"/chatbot",children:"Chatbot"})})]})]})});function cw(){return Kt.jsx(HE,{children:Kt.jsxs("div",{className:"min-h-screen bg-background text-foreground",children:[Kt.jsx(lw,{}),Kt.jsxs(_E,{children:[Kt.jsx(Xc,{path:"/",element:Kt.jsx(bC,{})}),Kt.jsx(Xc,{path:"/ai-features",element:Kt.jsx(sw,{})}),Kt.jsx(Xc,{path:"/chatbot",element:Kt.jsx(ow,{})})]}),Kt.jsx(dy,{})]})})}AS.createRoot(document.getElementById("root")).render(Kt.jsx(lt.StrictMode,{children:Kt.jsx(cw,{})}));
