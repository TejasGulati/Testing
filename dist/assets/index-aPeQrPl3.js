(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var id={exports:{}},Oo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c_;function GS(){if(c_)return Oo;c_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:u}}return Oo.Fragment=t,Oo.jsx=i,Oo.jsxs=i,Oo}var f_;function VS(){return f_||(f_=1,id.exports=GS()),id.exports}var $t=VS(),ad={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d_;function kS(){if(d_)return le;d_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function v(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,T={};function y(N,nt,Tt){this.props=N,this.context=nt,this.refs=T,this.updater=Tt||S}y.prototype.isReactComponent={},y.prototype.setState=function(N,nt){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,nt,"setState")},y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function _(){}_.prototype=y.prototype;function O(N,nt,Tt){this.props=N,this.context=nt,this.refs=T,this.updater=Tt||S}var U=O.prototype=new _;U.constructor=O,M(U,y.prototype),U.isPureReactComponent=!0;var D=Array.isArray,F={H:null,A:null,T:null,S:null},H=Object.prototype.hasOwnProperty;function B(N,nt,Tt,Rt,q,pt){return Tt=pt.ref,{$$typeof:r,type:N,key:nt,ref:Tt!==void 0?Tt:null,props:pt}}function Z(N,nt){return B(N.type,nt,void 0,void 0,void 0,N.props)}function w(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function A(N){var nt={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Tt){return nt[Tt]})}var z=/\/+/g;function ct(N,nt){return typeof N=="object"&&N!==null&&N.key!=null?A(""+N.key):nt.toString(36)}function it(){}function gt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(it,it):(N.status="pending",N.then(function(nt){N.status==="pending"&&(N.status="fulfilled",N.value=nt)},function(nt){N.status==="pending"&&(N.status="rejected",N.reason=nt)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function ht(N,nt,Tt,Rt,q){var pt=typeof N;(pt==="undefined"||pt==="boolean")&&(N=null);var St=!1;if(N===null)St=!0;else switch(pt){case"bigint":case"string":case"number":St=!0;break;case"object":switch(N.$$typeof){case r:case t:St=!0;break;case g:return St=N._init,ht(St(N._payload),nt,Tt,Rt,q)}}if(St)return q=q(N),St=Rt===""?"."+ct(N,0):Rt,D(q)?(Tt="",St!=null&&(Tt=St.replace(z,"$&/")+"/"),ht(q,nt,Tt,"",function(Qt){return Qt})):q!=null&&(w(q)&&(q=Z(q,Tt+(q.key==null||N&&N.key===q.key?"":(""+q.key).replace(z,"$&/")+"/")+St)),nt.push(q)),1;St=0;var bt=Rt===""?".":Rt+":";if(D(N))for(var Ct=0;Ct<N.length;Ct++)Rt=N[Ct],pt=bt+ct(Rt,Ct),St+=ht(Rt,nt,Tt,pt,q);else if(Ct=v(N),typeof Ct=="function")for(N=Ct.call(N),Ct=0;!(Rt=N.next()).done;)Rt=Rt.value,pt=bt+ct(Rt,Ct++),St+=ht(Rt,nt,Tt,pt,q);else if(pt==="object"){if(typeof N.then=="function")return ht(gt(N),nt,Tt,Rt,q);throw nt=String(N),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return St}function W(N,nt,Tt){if(N==null)return N;var Rt=[],q=0;return ht(N,Rt,"","",function(pt){return nt.call(Tt,pt,q++)}),Rt}function at(N){if(N._status===-1){var nt=N._result;nt=nt(),nt.then(function(Tt){(N._status===0||N._status===-1)&&(N._status=1,N._result=Tt)},function(Tt){(N._status===0||N._status===-1)&&(N._status=2,N._result=Tt)}),N._status===-1&&(N._status=0,N._result=nt)}if(N._status===1)return N._result.default;throw N._result}var j=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function yt(){}return le.Children={map:W,forEach:function(N,nt,Tt){W(N,function(){nt.apply(this,arguments)},Tt)},count:function(N){var nt=0;return W(N,function(){nt++}),nt},toArray:function(N){return W(N,function(nt){return nt})||[]},only:function(N){if(!w(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},le.Component=y,le.Fragment=i,le.Profiler=l,le.PureComponent=O,le.StrictMode=s,le.Suspense=p,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,le.act=function(){throw Error("act(...) is not supported in production builds of React.")},le.cache=function(N){return function(){return N.apply(null,arguments)}},le.cloneElement=function(N,nt,Tt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Rt=M({},N.props),q=N.key,pt=void 0;if(nt!=null)for(St in nt.ref!==void 0&&(pt=void 0),nt.key!==void 0&&(q=""+nt.key),nt)!H.call(nt,St)||St==="key"||St==="__self"||St==="__source"||St==="ref"&&nt.ref===void 0||(Rt[St]=nt[St]);var St=arguments.length-2;if(St===1)Rt.children=Tt;else if(1<St){for(var bt=Array(St),Ct=0;Ct<St;Ct++)bt[Ct]=arguments[Ct+2];Rt.children=bt}return B(N.type,q,void 0,void 0,pt,Rt)},le.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},le.createElement=function(N,nt,Tt){var Rt,q={},pt=null;if(nt!=null)for(Rt in nt.key!==void 0&&(pt=""+nt.key),nt)H.call(nt,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(q[Rt]=nt[Rt]);var St=arguments.length-2;if(St===1)q.children=Tt;else if(1<St){for(var bt=Array(St),Ct=0;Ct<St;Ct++)bt[Ct]=arguments[Ct+2];q.children=bt}if(N&&N.defaultProps)for(Rt in St=N.defaultProps,St)q[Rt]===void 0&&(q[Rt]=St[Rt]);return B(N,pt,void 0,void 0,null,q)},le.createRef=function(){return{current:null}},le.forwardRef=function(N){return{$$typeof:h,render:N}},le.isValidElement=w,le.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:at}},le.memo=function(N,nt){return{$$typeof:m,type:N,compare:nt===void 0?null:nt}},le.startTransition=function(N){var nt=F.T,Tt={};F.T=Tt;try{var Rt=N(),q=F.S;q!==null&&q(Tt,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(yt,j)}catch(pt){j(pt)}finally{F.T=nt}},le.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},le.use=function(N){return F.H.use(N)},le.useActionState=function(N,nt,Tt){return F.H.useActionState(N,nt,Tt)},le.useCallback=function(N,nt){return F.H.useCallback(N,nt)},le.useContext=function(N){return F.H.useContext(N)},le.useDebugValue=function(){},le.useDeferredValue=function(N,nt){return F.H.useDeferredValue(N,nt)},le.useEffect=function(N,nt){return F.H.useEffect(N,nt)},le.useId=function(){return F.H.useId()},le.useImperativeHandle=function(N,nt,Tt){return F.H.useImperativeHandle(N,nt,Tt)},le.useInsertionEffect=function(N,nt){return F.H.useInsertionEffect(N,nt)},le.useLayoutEffect=function(N,nt){return F.H.useLayoutEffect(N,nt)},le.useMemo=function(N,nt){return F.H.useMemo(N,nt)},le.useOptimistic=function(N,nt){return F.H.useOptimistic(N,nt)},le.useReducer=function(N,nt,Tt){return F.H.useReducer(N,nt,Tt)},le.useRef=function(N){return F.H.useRef(N)},le.useState=function(N){return F.H.useState(N)},le.useSyncExternalStore=function(N,nt,Tt){return F.H.useSyncExternalStore(N,nt,Tt)},le.useTransition=function(){return F.H.useTransition()},le.version="19.0.0",le}var h_;function Dh(){return h_||(h_=1,ad.exports=kS()),ad.exports}var lt=Dh(),rd={exports:{}},Po={},sd={exports:{}},od={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p_;function XS(){return p_||(p_=1,function(r){function t(W,at){var j=W.length;W.push(at);t:for(;0<j;){var yt=j-1>>>1,N=W[yt];if(0<l(N,at))W[yt]=at,W[j]=N,j=yt;else break t}}function i(W){return W.length===0?null:W[0]}function s(W){if(W.length===0)return null;var at=W[0],j=W.pop();if(j!==at){W[0]=j;t:for(var yt=0,N=W.length,nt=N>>>1;yt<nt;){var Tt=2*(yt+1)-1,Rt=W[Tt],q=Tt+1,pt=W[q];if(0>l(Rt,j))q<N&&0>l(pt,Rt)?(W[yt]=pt,W[q]=j,yt=q):(W[yt]=Rt,W[Tt]=j,yt=Tt);else if(q<N&&0>l(pt,j))W[yt]=pt,W[q]=j,yt=q;else break t}}return at}function l(W,at){var j=W.sortIndex-at.sortIndex;return j!==0?j:W.id-at.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var p=[],m=[],g=1,x=null,v=3,S=!1,M=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function U(W){for(var at=i(m);at!==null;){if(at.callback===null)s(m);else if(at.startTime<=W)s(m),at.sortIndex=at.expirationTime,t(p,at);else break;at=i(m)}}function D(W){if(T=!1,U(W),!M)if(i(p)!==null)M=!0,gt();else{var at=i(m);at!==null&&ht(D,at.startTime-W)}}var F=!1,H=-1,B=5,Z=-1;function w(){return!(r.unstable_now()-Z<B)}function A(){if(F){var W=r.unstable_now();Z=W;var at=!0;try{t:{M=!1,T&&(T=!1,_(H),H=-1),S=!0;var j=v;try{e:{for(U(W),x=i(p);x!==null&&!(x.expirationTime>W&&w());){var yt=x.callback;if(typeof yt=="function"){x.callback=null,v=x.priorityLevel;var N=yt(x.expirationTime<=W);if(W=r.unstable_now(),typeof N=="function"){x.callback=N,U(W),at=!0;break e}x===i(p)&&s(p),U(W)}else s(p);x=i(p)}if(x!==null)at=!0;else{var nt=i(m);nt!==null&&ht(D,nt.startTime-W),at=!1}}break t}finally{x=null,v=j,S=!1}at=void 0}}finally{at?z():F=!1}}}var z;if(typeof O=="function")z=function(){O(A)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,it=ct.port2;ct.port1.onmessage=A,z=function(){it.postMessage(null)}}else z=function(){y(A,0)};function gt(){F||(F=!0,z())}function ht(W,at){H=y(function(){W(r.unstable_now())},at)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(W){W.callback=null},r.unstable_continueExecution=function(){M||S||(M=!0,gt())},r.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<W?Math.floor(1e3/W):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_getFirstCallbackNode=function(){return i(p)},r.unstable_next=function(W){switch(v){case 1:case 2:case 3:var at=3;break;default:at=v}var j=v;v=at;try{return W()}finally{v=j}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(W,at){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var j=v;v=W;try{return at()}finally{v=j}},r.unstable_scheduleCallback=function(W,at,j){var yt=r.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?yt+j:yt):j=yt,W){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=j+N,W={id:g++,callback:at,priorityLevel:W,startTime:j,expirationTime:N,sortIndex:-1},j>yt?(W.sortIndex=j,t(m,W),i(p)===null&&W===i(m)&&(T?(_(H),H=-1):T=!0,ht(D,j-yt))):(W.sortIndex=N,t(p,W),M||S||(M=!0,gt())),W},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(W){var at=v;return function(){var j=v;v=at;try{return W.apply(this,arguments)}finally{v=j}}}}(od)),od}var m_;function WS(){return m_||(m_=1,sd.exports=XS()),sd.exports}var ld={exports:{}},Mn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g_;function qS(){if(g_)return Mn;g_=1;var r=Dh();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,m,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:p,containerInfo:m,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Mn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Mn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return u(p,m,null,g)},Mn.flushSync=function(p){var m=f.T,g=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=m,s.p=g,s.d.f()}},Mn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(p,m))},Mn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Mn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,x=h(g,m.crossOrigin),v=typeof m.integrity=="string"?m.integrity:void 0,S=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?s.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:x,integrity:v,fetchPriority:S}):g==="script"&&s.d.X(p,{crossOrigin:x,integrity:v,fetchPriority:S,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Mn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=h(m.as,m.crossOrigin);s.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(p)},Mn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,x=h(g,m.crossOrigin);s.d.L(p,g,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Mn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=h(m.as,m.crossOrigin);s.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(p)},Mn.requestFormReset=function(p){s.d.r(p)},Mn.unstable_batchedUpdates=function(p,m){return p(m)},Mn.useFormState=function(p,m,g){return f.H.useFormState(p,m,g)},Mn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Mn.version="19.0.0",Mn}var __;function YS(){if(__)return ld.exports;__=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),ld.exports=qS(),ld.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v_;function jS(){if(v_)return Po;v_=1;var r=WS(),t=Dh(),i=YS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var u=Symbol.for("react.element"),f=Symbol.for("react.transitional.element"),h=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),v=Symbol.for("react.consumer"),S=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),y=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),U=Symbol.for("react.offscreen"),D=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function H(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var B=Symbol.for("react.client.reference");function Z(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===B?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case p:return"Fragment";case h:return"Portal";case g:return"Profiler";case m:return"StrictMode";case T:return"Suspense";case y:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case S:return(e.displayName||"Context")+".Provider";case v:return(e._context.displayName||"Context")+".Consumer";case M:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _:return n=e.displayName||null,n!==null?n:Z(e.type)||"Memo";case O:n=e._payload,e=e._init;try{return Z(e(n))}catch{}}return null}var w=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=Object.assign,z,ct;function it(e){if(z===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);z=n&&n[1]||"",ct=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+z+e+ct}var gt=!1;function ht(e,n){if(!e||gt)return"";gt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(ot){var et=ot}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(ot){et=ot}e.call(vt.prototype)}}else{try{throw Error()}catch(ot){et=ot}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(ot){if(ot&&et&&typeof ot.stack=="string")return[ot.stack,et.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),E=d[0],R=d[1];if(E&&R){var P=E.split(`
`),V=R.split(`
`);for(c=o=0;o<P.length&&!P[o].includes("DetermineComponentFrameRoot");)o++;for(;c<V.length&&!V[c].includes("DetermineComponentFrameRoot");)c++;if(o===P.length||c===V.length)for(o=P.length-1,c=V.length-1;1<=o&&0<=c&&P[o]!==V[c];)c--;for(;1<=o&&0<=c;o--,c--)if(P[o]!==V[c]){if(o!==1||c!==1)do if(o--,c--,0>c||P[o]!==V[c]){var ut=`
`+P[o].replace(" at new "," at ");return e.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",e.displayName)),ut}while(1<=o&&0<=c);break}}}finally{gt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?it(a):""}function W(e){switch(e.tag){case 26:case 27:case 5:return it(e.type);case 16:return it("Lazy");case 13:return it("Suspense");case 19:return it("SuspenseList");case 0:case 15:return e=ht(e.type,!1),e;case 11:return e=ht(e.type.render,!1),e;case 1:return e=ht(e.type,!0),e;default:return""}}function at(e){try{var n="";do n+=W(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function j(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function yt(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function N(e){if(j(e)!==e)throw Error(s(188))}function nt(e){var n=e.alternate;if(!n){if(n=j(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var d=c.alternate;if(d===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===a)return N(c),e;if(d===o)return N(c),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=c,o=d;else{for(var E=!1,R=c.child;R;){if(R===a){E=!0,a=c,o=d;break}if(R===o){E=!0,o=c,a=d;break}R=R.sibling}if(!E){for(R=d.child;R;){if(R===a){E=!0,a=d,o=c;break}if(R===o){E=!0,o=d,a=c;break}R=R.sibling}if(!E)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function Tt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=Tt(e),n!==null)return n;e=e.sibling}return null}var Rt=Array.isArray,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pt={pending:!1,data:null,method:null,action:null},St=[],bt=-1;function Ct(e){return{current:e}}function Qt(e){0>bt||(e.current=St[bt],St[bt]=null,bt--)}function It(e,n){bt++,St[bt]=e.current,e.current=n}var Ee=Ct(null),Ce=Ct(null),re=Ct(null),I=Ct(null);function gn(e,n){switch(It(re,n),It(Ce,e),It(Ee,null),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?zg(n):0;break;default:if(e=e===8?n.parentNode:n,n=e.tagName,e=e.namespaceURI)e=zg(e),n=Hg(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Qt(Ee),It(Ee,n)}function oe(){Qt(Ee),Qt(Ce),Qt(re)}function de(e){e.memoizedState!==null&&It(I,e);var n=Ee.current,a=Hg(n,e.type);n!==a&&(It(Ce,e),It(Ee,a))}function Xt(e){Ce.current===e&&(Qt(Ee),Qt(Ce)),I.current===e&&(Qt(I),wo._currentValue=pt)}var we=Object.prototype.hasOwnProperty,Wt=r.unstable_scheduleCallback,L=r.unstable_cancelCallback,b=r.unstable_shouldYield,tt=r.unstable_requestPaint,ft=r.unstable_now,xt=r.unstable_getCurrentPriorityLevel,dt=r.unstable_ImmediatePriority,Gt=r.unstable_UserBlockingPriority,Dt=r.unstable_NormalPriority,Bt=r.unstable_LowPriority,me=r.unstable_IdlePriority,Mt=r.log,Ft=r.unstable_setDisableYieldValue,Kt=null,Vt=null;function zt(e){if(Vt&&typeof Vt.onCommitFiberRoot=="function")try{Vt.onCommitFiberRoot(Kt,e,void 0,(e.current.flags&128)===128)}catch{}}function se(e){if(typeof Mt=="function"&&Ft(e),Vt&&typeof Vt.setStrictMode=="function")try{Vt.setStrictMode(Kt,e)}catch{}}var jt=Math.clz32?Math.clz32:Nt,De=Math.log,k=Math.LN2;function Nt(e){return e>>>=0,e===0?32:31-(De(e)/k|0)|0}var st=128,_t=4194304;function wt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ut(e,n){var a=e.pendingLanes;if(a===0)return 0;var o=0,c=e.suspendedLanes,d=e.pingedLanes,E=e.warmLanes;e=e.finishedLanes!==0;var R=a&134217727;return R!==0?(a=R&~c,a!==0?o=wt(a):(d&=R,d!==0?o=wt(d):e||(E=R&~E,E!==0&&(o=wt(E))))):(R=a&~c,R!==0?o=wt(R):d!==0?o=wt(d):e||(E=a&~E,E!==0&&(o=wt(E)))),o===0?0:n!==0&&n!==o&&(n&c)===0&&(c=o&-o,E=n&-n,c>=E||c===32&&(E&4194176)!==0)?n:o}function te(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ge(e,n){switch(e){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nn(){var e=st;return st<<=1,(st&4194176)===0&&(st=128),e}function Me(){var e=_t;return _t<<=1,(_t&62914560)===0&&(_t=4194304),e}function Rn(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Cn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function rl(e,n,a,o,c,d){var E=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,P=e.expirationTimes,V=e.hiddenUpdates;for(a=E&~a;0<a;){var ut=31-jt(a),vt=1<<ut;R[ut]=0,P[ut]=-1;var et=V[ut];if(et!==null)for(V[ut]=null,ut=0;ut<et.length;ut++){var ot=et[ut];ot!==null&&(ot.lane&=-536870913)}a&=~vt}o!==0&&zs(e,o,0),d!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=d&~(E&~n))}function zs(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-jt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194218}function Si(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-jt(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function Dr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Hs(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:a_(e.type))}function sl(e,n){var a=q.p;try{return q.p=e,n()}finally{q.p=a}}var Gn=Math.random().toString(36).slice(2),an="__reactFiber$"+Gn,rn="__reactProps$"+Gn,Ui="__reactContainer$"+Gn,Ur="__reactEvents$"+Gn,tc="__reactListeners$"+Gn,ec="__reactHandles$"+Gn,ol="__reactResources$"+Gn,Xa="__reactMarker$"+Gn;function Gs(e){delete e[an],delete e[rn],delete e[Ur],delete e[tc],delete e[ec]}function Li(e){var n=e[an];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ui]||a[an]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=kg(e);e!==null;){if(a=e[an])return a;e=kg(e)}return n}e=a,a=e.parentNode}return null}function C(e){if(e=e[an]||e[Ui]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function X(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function J(e){var n=e[ol];return n||(n=e[ol]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Q(e){e[Xa]=!0}var Y=new Set,Et={};function At(e,n){Pt(e,n),Pt(e+"Capture",n)}function Pt(e,n){for(Et[e]=n,e=0;e<n.length;e++)Y.add(n[e])}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ee=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ne={},Yt={};function ge(e){return we.call(Yt,e)?!0:we.call(ne,e)?!1:ee.test(e)?Yt[e]=!0:(ne[e]=!0,!1)}function _e(e,n,a){if(ge(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function He(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Te(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function ie(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function sn(e){var n=Zt(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,d=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(E){o=""+E,d.call(this,E)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(E){o=""+E},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ve(e){e._valueTracker||(e._valueTracker=sn(e))}function On(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Zt(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function ui(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var wn=/[\n"\\]/g;function fn(e){return e.replace(wn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ue(e,n,a,o,c,d,E,R){e.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.type=E:e.removeAttribute("type"),n!=null?E==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ie(n)):e.value!==""+ie(n)&&(e.value=""+ie(n)):E!=="submit"&&E!=="reset"||e.removeAttribute("value"),n!=null?yn(e,E,ie(n)):a!=null?yn(e,E,ie(a)):o!=null&&e.removeAttribute("value"),c==null&&d!=null&&(e.defaultChecked=!!d),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+ie(R):e.removeAttribute("name")}function Dn(e,n,a,o,c,d,E,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null))return;a=a!=null?""+ie(a):"",n=n!=null?""+ie(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(e.name=E)}function yn(e,n,a){n==="number"&&ui(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function We(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ie(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function _n(e,n,a){if(n!=null&&(n=""+ie(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ie(a):""}function Lr(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(Rt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ie(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Pn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var F0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Yh(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||F0.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function jh(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&Yh(e,c,o)}else for(var d in n)n.hasOwnProperty(d)&&Yh(e,d,n[d])}function nc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var z0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),H0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ll(e){return H0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var ic=null;function ac(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Nr=null,Or=null;function Zh(e){var n=C(e);if(n&&(e=n.stateNode)){var a=e[rn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ue(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+fn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[rn]||null;if(!c)throw Error(s(90));Ue(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&On(o)}break t;case"textarea":_n(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&We(e,!!a.multiple,n,!1)}}}var rc=!1;function Kh(e,n,a){if(rc)return e(n,a);rc=!0;try{var o=e(n);return o}finally{if(rc=!1,(Nr!==null||Or!==null)&&(Wl(),Nr&&(n=Nr,e=Or,Or=Nr=null,Zh(n),e)))for(n=0;n<e.length;n++)Zh(e[n])}}function Vs(e,n){var a=e.stateNode;if(a===null)return null;var o=a[rn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var sc=!1;if(Ot)try{var ks={};Object.defineProperty(ks,"passive",{get:function(){sc=!0}}),window.addEventListener("test",ks,ks),window.removeEventListener("test",ks,ks)}catch{sc=!1}var ca=null,oc=null,ul=null;function Qh(){if(ul)return ul;var e,n=oc,a=n.length,o,c="value"in ca?ca.value:ca.textContent,d=c.length;for(e=0;e<a&&n[e]===c[e];e++);var E=a-e;for(o=1;o<=E&&n[a-o]===c[d-o];o++);return ul=c.slice(e,1<o?1-o:void 0)}function cl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function fl(){return!0}function $h(){return!1}function In(e){function n(a,o,c,d,E){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=d,this.target=E,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?fl:$h,this.isPropagationStopped=$h,this}return A(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),n}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dl=In(Wa),Xs=A({},Wa,{view:0,detail:0}),G0=In(Xs),lc,uc,Ws,hl=A({},Xs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ws&&(Ws&&e.type==="mousemove"?(lc=e.screenX-Ws.screenX,uc=e.screenY-Ws.screenY):uc=lc=0,Ws=e),lc)},movementY:function(e){return"movementY"in e?e.movementY:uc}}),Jh=In(hl),V0=A({},hl,{dataTransfer:0}),k0=In(V0),X0=A({},Xs,{relatedTarget:0}),cc=In(X0),W0=A({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),q0=In(W0),Y0=A({},Wa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),j0=In(Y0),Z0=A({},Wa,{data:0}),tp=In(Z0),K0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Q0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function J0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=$0[e])?!!n[e]:!1}function fc(){return J0}var tx=A({},Xs,{key:function(e){if(e.key){var n=K0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=cl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Q0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fc,charCode:function(e){return e.type==="keypress"?cl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?cl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ex=In(tx),nx=A({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ep=In(nx),ix=A({},Xs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fc}),ax=In(ix),rx=A({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),sx=In(rx),ox=A({},hl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lx=In(ox),ux=A({},Wa,{newState:0,oldState:0}),cx=In(ux),fx=[9,13,27,32],dc=Ot&&"CompositionEvent"in window,qs=null;Ot&&"documentMode"in document&&(qs=document.documentMode);var dx=Ot&&"TextEvent"in window&&!qs,np=Ot&&(!dc||qs&&8<qs&&11>=qs),ip=" ",ap=!1;function rp(e,n){switch(e){case"keyup":return fx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pr=!1;function hx(e,n){switch(e){case"compositionend":return sp(n);case"keypress":return n.which!==32?null:(ap=!0,ip);case"textInput":return e=n.data,e===ip&&ap?null:e;default:return null}}function px(e,n){if(Pr)return e==="compositionend"||!dc&&rp(e,n)?(e=Qh(),ul=oc=ca=null,Pr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return np&&n.locale!=="ko"?null:n.data;default:return null}}var mx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function op(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!mx[e.type]:n==="textarea"}function lp(e,n,a,o){Nr?Or?Or.push(o):Or=[o]:Nr=o,n=Kl(n,"onChange"),0<n.length&&(a=new dl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Ys=null,js=null;function gx(e){Og(e,0)}function pl(e){var n=X(e);if(On(n))return e}function up(e,n){if(e==="change")return n}var cp=!1;if(Ot){var hc;if(Ot){var pc="oninput"in document;if(!pc){var fp=document.createElement("div");fp.setAttribute("oninput","return;"),pc=typeof fp.oninput=="function"}hc=pc}else hc=!1;cp=hc&&(!document.documentMode||9<document.documentMode)}function dp(){Ys&&(Ys.detachEvent("onpropertychange",hp),js=Ys=null)}function hp(e){if(e.propertyName==="value"&&pl(js)){var n=[];lp(n,js,e,ac(e)),Kh(gx,n)}}function _x(e,n,a){e==="focusin"?(dp(),Ys=n,js=a,Ys.attachEvent("onpropertychange",hp)):e==="focusout"&&dp()}function vx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pl(js)}function xx(e,n){if(e==="click")return pl(n)}function Sx(e,n){if(e==="input"||e==="change")return pl(n)}function yx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Vn=typeof Object.is=="function"?Object.is:yx;function Zs(e,n){if(Vn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!we.call(n,c)||!Vn(e[c],n[c]))return!1}return!0}function pp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mp(e,n){var a=pp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=pp(a)}}function gp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?gp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function _p(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=ui(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=ui(e.document)}return n}function mc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Ex(e,n){var a=_p(n);n=e.focusedElem;var o=e.selectionRange;if(a!==n&&n&&n.ownerDocument&&gp(n.ownerDocument.documentElement,n)){if(o!==null&&mc(n)){if(e=o.start,a=o.end,a===void 0&&(a=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(a,n.value.length);else if(a=(e=n.ownerDocument||document)&&e.defaultView||window,a.getSelection){a=a.getSelection();var c=n.textContent.length,d=Math.min(o.start,c);o=o.end===void 0?d:Math.min(o.end,c),!a.extend&&d>o&&(c=o,o=d,d=c),c=mp(n,d);var E=mp(n,o);c&&E&&(a.rangeCount!==1||a.anchorNode!==c.node||a.anchorOffset!==c.offset||a.focusNode!==E.node||a.focusOffset!==E.offset)&&(e=e.createRange(),e.setStart(c.node,c.offset),a.removeAllRanges(),d>o?(a.addRange(e),a.extend(E.node,E.offset)):(e.setEnd(E.node,E.offset),a.addRange(e)))}}for(e=[],a=n;a=a.parentNode;)a.nodeType===1&&e.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)a=e[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var Mx=Ot&&"documentMode"in document&&11>=document.documentMode,Ir=null,gc=null,Ks=null,_c=!1;function vp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;_c||Ir==null||Ir!==ui(o)||(o=Ir,"selectionStart"in o&&mc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ks&&Zs(Ks,o)||(Ks=o,o=Kl(gc,"onSelect"),0<o.length&&(n=new dl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Ir)))}function qa(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Br={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionrun:qa("Transition","TransitionRun"),transitionstart:qa("Transition","TransitionStart"),transitioncancel:qa("Transition","TransitionCancel"),transitionend:qa("Transition","TransitionEnd")},vc={},xp={};Ot&&(xp=document.createElement("div").style,"AnimationEvent"in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),"TransitionEvent"in window||delete Br.transitionend.transition);function Ya(e){if(vc[e])return vc[e];if(!Br[e])return e;var n=Br[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in xp)return vc[e]=n[a];return e}var Sp=Ya("animationend"),yp=Ya("animationiteration"),Ep=Ya("animationstart"),Tx=Ya("transitionrun"),bx=Ya("transitionstart"),Ax=Ya("transitioncancel"),Mp=Ya("transitionend"),Tp=new Map,bp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function ci(e,n){Tp.set(e,n),At(n,[e])}var Kn=[],Fr=0,xc=0;function ml(){for(var e=Fr,n=xc=Fr=0;n<e;){var a=Kn[n];Kn[n++]=null;var o=Kn[n];Kn[n++]=null;var c=Kn[n];Kn[n++]=null;var d=Kn[n];if(Kn[n++]=null,o!==null&&c!==null){var E=o.pending;E===null?c.next=c:(c.next=E.next,E.next=c),o.pending=c}d!==0&&Ap(a,c,d)}}function gl(e,n,a,o){Kn[Fr++]=e,Kn[Fr++]=n,Kn[Fr++]=a,Kn[Fr++]=o,xc|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Sc(e,n,a,o){return gl(e,n,a,o),_l(e)}function fa(e,n){return gl(e,null,null,n),_l(e)}function Ap(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(c=!0)),e=d,d=d.return;c&&n!==null&&e.tag===3&&(d=e.stateNode,c=31-jt(a),d=d.hiddenUpdates,e=d[c],e===null?d[c]=[n]:e.push(n),n.lane=a|536870912)}function _l(e){if(50<Eo)throw Eo=0,Rf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var zr={},Rp=new WeakMap;function Qn(e,n){if(typeof e=="object"&&e!==null){var a=Rp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:at(n)},Rp.set(e,n),n)}return{value:e,source:n,stack:at(n)}}var Hr=[],Gr=0,vl=null,xl=0,$n=[],Jn=0,ja=null,Ni=1,Oi="";function Za(e,n){Hr[Gr++]=xl,Hr[Gr++]=vl,vl=e,xl=n}function Cp(e,n,a){$n[Jn++]=Ni,$n[Jn++]=Oi,$n[Jn++]=ja,ja=e;var o=Ni;e=Oi;var c=32-jt(o)-1;o&=~(1<<c),a+=1;var d=32-jt(n)+c;if(30<d){var E=c-c%5;d=(o&(1<<E)-1).toString(32),o>>=E,c-=E,Ni=1<<32-jt(n)+c|a<<c|o,Oi=d+e}else Ni=1<<d|a<<c|o,Oi=e}function yc(e){e.return!==null&&(Za(e,1),Cp(e,1,0))}function Ec(e){for(;e===vl;)vl=Hr[--Gr],Hr[Gr]=null,xl=Hr[--Gr],Hr[Gr]=null;for(;e===ja;)ja=$n[--Jn],$n[Jn]=null,Oi=$n[--Jn],$n[Jn]=null,Ni=$n[--Jn],$n[Jn]=null}var Un=null,vn=null,be=!1,fi=null,yi=!1,Mc=Error(s(519));function Ka(e){var n=Error(s(418,""));throw Js(Qn(n,e)),Mc}function wp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[an]=e,n[rn]=o,a){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(a=0;a<To.length;a++)xe(To[a],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),Dn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),ve(n);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),Lr(n,o.value,o.defaultValue,o.children),ve(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Fg(n.textContent,a)?(o.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),o.onScroll!=null&&xe("scroll",n),o.onScrollEnd!=null&&xe("scrollend",n),o.onClick!=null&&(n.onclick=Ql),n=!0):n=!1,n||Ka(e)}function Dp(e){for(Un=e.return;Un;)switch(Un.tag){case 3:case 27:yi=!0;return;case 5:case 13:yi=!1;return;default:Un=Un.return}}function Qs(e){if(e!==Un)return!1;if(!be)return Dp(e),be=!0,!1;var n=!1,a;if((a=e.tag!==3&&e.tag!==27)&&((a=e.tag===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Xf(e.type,e.memoizedProps)),a=!a),a&&(n=!0),n&&vn&&Ka(e),Dp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){vn=hi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}vn=null}}else vn=Un?hi(e.stateNode.nextSibling):null;return!0}function $s(){vn=Un=null,be=!1}function Js(e){fi===null?fi=[e]:fi.push(e)}var to=Error(s(460)),Up=Error(s(474)),Tc={then:function(){}};function Lp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Sl(){}function Np(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Sl,Sl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===to?Error(s(483)):e;default:if(typeof n.status=="string")n.then(Sl,Sl);else{if(e=Fe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===to?Error(s(483)):e}throw eo=n,to}}var eo=null;function Op(){if(eo===null)throw Error(s(459));var e=eo;return eo=null,e}var Vr=null,no=0;function yl(e){var n=no;return no+=1,Vr===null&&(Vr=[]),Np(Vr,e,n)}function io(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function El(e,n){throw n.$$typeof===u?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Pp(e){var n=e._init;return n(e._payload)}function Ip(e){function n(K,G){if(e){var $=K.deletions;$===null?(K.deletions=[G],K.flags|=16):$.push(G)}}function a(K,G){if(!e)return null;for(;G!==null;)n(K,G),G=G.sibling;return null}function o(K){for(var G=new Map;K!==null;)K.key!==null?G.set(K.key,K):G.set(K.index,K),K=K.sibling;return G}function c(K,G){return K=Ma(K,G),K.index=0,K.sibling=null,K}function d(K,G,$){return K.index=$,e?($=K.alternate,$!==null?($=$.index,$<G?(K.flags|=33554434,G):$):(K.flags|=33554434,G)):(K.flags|=1048576,G)}function E(K){return e&&K.alternate===null&&(K.flags|=33554434),K}function R(K,G,$,mt){return G===null||G.tag!==6?(G=xf($,K.mode,mt),G.return=K,G):(G=c(G,$),G.return=K,G)}function P(K,G,$,mt){var Ht=$.type;return Ht===p?ut(K,G,$.props.children,mt,$.key):G!==null&&(G.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===O&&Pp(Ht)===G.type)?(G=c(G,$.props),io(G,$),G.return=K,G):(G=Hl($.type,$.key,$.props,null,K.mode,mt),io(G,$),G.return=K,G)}function V(K,G,$,mt){return G===null||G.tag!==4||G.stateNode.containerInfo!==$.containerInfo||G.stateNode.implementation!==$.implementation?(G=Sf($,K.mode,mt),G.return=K,G):(G=c(G,$.children||[]),G.return=K,G)}function ut(K,G,$,mt,Ht){return G===null||G.tag!==7?(G=sr($,K.mode,mt,Ht),G.return=K,G):(G=c(G,$),G.return=K,G)}function vt(K,G,$){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=xf(""+G,K.mode,$),G.return=K,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case f:return $=Hl(G.type,G.key,G.props,null,K.mode,$),io($,G),$.return=K,$;case h:return G=Sf(G,K.mode,$),G.return=K,G;case O:var mt=G._init;return G=mt(G._payload),vt(K,G,$)}if(Rt(G)||H(G))return G=sr(G,K.mode,$,null),G.return=K,G;if(typeof G.then=="function")return vt(K,yl(G),$);if(G.$$typeof===S)return vt(K,Bl(K,G),$);El(K,G)}return null}function et(K,G,$,mt){var Ht=G!==null?G.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Ht!==null?null:R(K,G,""+$,mt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case f:return $.key===Ht?P(K,G,$,mt):null;case h:return $.key===Ht?V(K,G,$,mt):null;case O:return Ht=$._init,$=Ht($._payload),et(K,G,$,mt)}if(Rt($)||H($))return Ht!==null?null:ut(K,G,$,mt,null);if(typeof $.then=="function")return et(K,G,yl($),mt);if($.$$typeof===S)return et(K,G,Bl(K,$),mt);El(K,$)}return null}function ot(K,G,$,mt,Ht){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return K=K.get($)||null,R(G,K,""+mt,Ht);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case f:return K=K.get(mt.key===null?$:mt.key)||null,P(G,K,mt,Ht);case h:return K=K.get(mt.key===null?$:mt.key)||null,V(G,K,mt,Ht);case O:var he=mt._init;return mt=he(mt._payload),ot(K,G,$,mt,Ht)}if(Rt(mt)||H(mt))return K=K.get($)||null,ut(G,K,mt,Ht,null);if(typeof mt.then=="function")return ot(K,G,$,yl(mt),Ht);if(mt.$$typeof===S)return ot(K,G,$,Bl(G,mt),Ht);El(G,mt)}return null}function kt(K,G,$,mt){for(var Ht=null,he=null,qt=G,Jt=G=0,pn=null;qt!==null&&Jt<$.length;Jt++){qt.index>Jt?(pn=qt,qt=null):pn=qt.sibling;var Ae=et(K,qt,$[Jt],mt);if(Ae===null){qt===null&&(qt=pn);break}e&&qt&&Ae.alternate===null&&n(K,qt),G=d(Ae,G,Jt),he===null?Ht=Ae:he.sibling=Ae,he=Ae,qt=pn}if(Jt===$.length)return a(K,qt),be&&Za(K,Jt),Ht;if(qt===null){for(;Jt<$.length;Jt++)qt=vt(K,$[Jt],mt),qt!==null&&(G=d(qt,G,Jt),he===null?Ht=qt:he.sibling=qt,he=qt);return be&&Za(K,Jt),Ht}for(qt=o(qt);Jt<$.length;Jt++)pn=ot(qt,K,Jt,$[Jt],mt),pn!==null&&(e&&pn.alternate!==null&&qt.delete(pn.key===null?Jt:pn.key),G=d(pn,G,Jt),he===null?Ht=pn:he.sibling=pn,he=pn);return e&&qt.forEach(function(Da){return n(K,Da)}),be&&Za(K,Jt),Ht}function ae(K,G,$,mt){if($==null)throw Error(s(151));for(var Ht=null,he=null,qt=G,Jt=G=0,pn=null,Ae=$.next();qt!==null&&!Ae.done;Jt++,Ae=$.next()){qt.index>Jt?(pn=qt,qt=null):pn=qt.sibling;var Da=et(K,qt,Ae.value,mt);if(Da===null){qt===null&&(qt=pn);break}e&&qt&&Da.alternate===null&&n(K,qt),G=d(Da,G,Jt),he===null?Ht=Da:he.sibling=Da,he=Da,qt=pn}if(Ae.done)return a(K,qt),be&&Za(K,Jt),Ht;if(qt===null){for(;!Ae.done;Jt++,Ae=$.next())Ae=vt(K,Ae.value,mt),Ae!==null&&(G=d(Ae,G,Jt),he===null?Ht=Ae:he.sibling=Ae,he=Ae);return be&&Za(K,Jt),Ht}for(qt=o(qt);!Ae.done;Jt++,Ae=$.next())Ae=ot(qt,K,Jt,Ae.value,mt),Ae!==null&&(e&&Ae.alternate!==null&&qt.delete(Ae.key===null?Jt:Ae.key),G=d(Ae,G,Jt),he===null?Ht=Ae:he.sibling=Ae,he=Ae);return e&&qt.forEach(function(HS){return n(K,HS)}),be&&Za(K,Jt),Ht}function je(K,G,$,mt){if(typeof $=="object"&&$!==null&&$.type===p&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case f:t:{for(var Ht=$.key;G!==null;){if(G.key===Ht){if(Ht=$.type,Ht===p){if(G.tag===7){a(K,G.sibling),mt=c(G,$.props.children),mt.return=K,K=mt;break t}}else if(G.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===O&&Pp(Ht)===G.type){a(K,G.sibling),mt=c(G,$.props),io(mt,$),mt.return=K,K=mt;break t}a(K,G);break}else n(K,G);G=G.sibling}$.type===p?(mt=sr($.props.children,K.mode,mt,$.key),mt.return=K,K=mt):(mt=Hl($.type,$.key,$.props,null,K.mode,mt),io(mt,$),mt.return=K,K=mt)}return E(K);case h:t:{for(Ht=$.key;G!==null;){if(G.key===Ht)if(G.tag===4&&G.stateNode.containerInfo===$.containerInfo&&G.stateNode.implementation===$.implementation){a(K,G.sibling),mt=c(G,$.children||[]),mt.return=K,K=mt;break t}else{a(K,G);break}else n(K,G);G=G.sibling}mt=Sf($,K.mode,mt),mt.return=K,K=mt}return E(K);case O:return Ht=$._init,$=Ht($._payload),je(K,G,$,mt)}if(Rt($))return kt(K,G,$,mt);if(H($)){if(Ht=H($),typeof Ht!="function")throw Error(s(150));return $=Ht.call($),ae(K,G,$,mt)}if(typeof $.then=="function")return je(K,G,yl($),mt);if($.$$typeof===S)return je(K,G,Bl(K,$),mt);El(K,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,G!==null&&G.tag===6?(a(K,G.sibling),mt=c(G,$),mt.return=K,K=mt):(a(K,G),mt=xf($,K.mode,mt),mt.return=K,K=mt),E(K)):a(K,G)}return function(K,G,$,mt){try{no=0;var Ht=je(K,G,$,mt);return Vr=null,Ht}catch(qt){if(qt===to)throw qt;var he=ii(29,qt,null,K.mode);return he.lanes=mt,he.return=K,he}finally{}}}var Qa=Ip(!0),Bp=Ip(!1),kr=Ct(null),Ml=Ct(0);function Fp(e,n){e=Wi,It(Ml,e),It(kr,n),Wi=e|n.baseLanes}function bc(){It(Ml,Wi),It(kr,kr.current)}function Ac(){Wi=Ml.current,Qt(kr),Qt(Ml)}var ti=Ct(null),Ei=null;function da(e){var n=e.alternate;It(on,on.current&1),It(ti,e),Ei===null&&(n===null||kr.current!==null||n.memoizedState!==null)&&(Ei=e)}function zp(e){if(e.tag===22){if(It(on,on.current),It(ti,e),Ei===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ei=e)}}else ha()}function ha(){It(on,on.current),It(ti,ti.current)}function Pi(e){Qt(ti),Ei===e&&(Ei=null),Qt(on)}var on=Ct(0);function Tl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Rx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Cx=r.unstable_scheduleCallback,wx=r.unstable_NormalPriority,ln={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Rc(){return{controller:new Rx,data:new Map,refCount:0}}function ao(e){e.refCount--,e.refCount===0&&Cx(wx,function(){e.controller.abort()})}var ro=null,Cc=0,Xr=0,Wr=null;function Dx(e,n){if(ro===null){var a=ro=[];Cc=0,Xr=Pf(),Wr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Cc++,n.then(Hp,Hp),n}function Hp(){if(--Cc===0&&ro!==null){Wr!==null&&(Wr.status="fulfilled");var e=ro;ro=null,Xr=0,Wr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Ux(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var Gp=w.S;w.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Dx(e,n),Gp!==null&&Gp(e,n)};var $a=Ct(null);function wc(){var e=$a.current;return e!==null?e:Fe.pooledCache}function bl(e,n){n===null?It($a,$a.current):It($a,n.pool)}function Vp(){var e=wc();return e===null?null:{parent:ln._currentValue,pool:e}}var pa=0,fe=null,Le=null,Qe=null,Al=!1,qr=!1,Ja=!1,Rl=0,so=0,Yr=null,Lx=0;function Ze(){throw Error(s(321))}function Dc(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Vn(e[a],n[a]))return!1;return!0}function Uc(e,n,a,o,c,d){return pa=d,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,w.H=e===null||e.memoizedState===null?tr:ma,Ja=!1,d=a(o,c),Ja=!1,qr&&(d=Xp(n,a,o,c)),kp(e),d}function kp(e){w.H=Mi;var n=Le!==null&&Le.next!==null;if(pa=0,Qe=Le=fe=null,Al=!1,so=0,Yr=null,n)throw Error(s(300));e===null||dn||(e=e.dependencies,e!==null&&Il(e)&&(dn=!0))}function Xp(e,n,a,o){fe=e;var c=0;do{if(qr&&(Yr=null),so=0,qr=!1,25<=c)throw Error(s(301));if(c+=1,Qe=Le=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}w.H=er,d=n(a,o)}while(qr);return d}function Nx(){var e=w.H,n=e.useState()[0];return n=typeof n.then=="function"?oo(n):n,e=e.useState()[0],(Le!==null?Le.memoizedState:null)!==e&&(fe.flags|=1024),n}function Lc(){var e=Rl!==0;return Rl=0,e}function Nc(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Oc(e){if(Al){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Al=!1}pa=0,Qe=Le=fe=null,qr=!1,so=Rl=0,Yr=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?fe.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function $e(){if(Le===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var n=Qe===null?fe.memoizedState:Qe.next;if(n!==null)Qe=n,Le=e;else{if(e===null)throw fe.alternate===null?Error(s(467)):Error(s(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Qe===null?fe.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}var Cl;Cl=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function oo(e){var n=so;return so+=1,Yr===null&&(Yr=[]),e=Np(Yr,e,n),n=fe,(Qe===null?n.memoizedState:Qe.next)===null&&(n=n.alternate,w.H=n===null||n.memoizedState===null?tr:ma),e}function wl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return oo(e);if(e.$$typeof===S)return En(e)}throw Error(s(438,String(e)))}function Pc(e){var n=null,a=fe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=fe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Cl(),fe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=D;return n.index++,a}function Ii(e,n){return typeof n=="function"?n(e):n}function Dl(e){var n=$e();return Ic(n,Le,e)}function Ic(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var c=e.baseQueue,d=o.pending;if(d!==null){if(c!==null){var E=c.next;c.next=d.next,d.next=E}n.baseQueue=c=d,o.pending=null}if(d=e.baseState,c===null)e.memoizedState=d;else{n=c.next;var R=E=null,P=null,V=n,ut=!1;do{var vt=V.lane&-536870913;if(vt!==V.lane?(ye&vt)===vt:(pa&vt)===vt){var et=V.revertLane;if(et===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),vt===Xr&&(ut=!0);else if((pa&et)===et){V=V.next,et===Xr&&(ut=!0);continue}else vt={lane:0,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},P===null?(R=P=vt,E=d):P=P.next=vt,fe.lanes|=et,Ta|=et;vt=V.action,Ja&&a(d,vt),d=V.hasEagerState?V.eagerState:a(d,vt)}else et={lane:vt,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},P===null?(R=P=et,E=d):P=P.next=et,fe.lanes|=vt,Ta|=vt;V=V.next}while(V!==null&&V!==n);if(P===null?E=d:P.next=R,!Vn(d,e.memoizedState)&&(dn=!0,ut&&(a=Wr,a!==null)))throw a;e.memoizedState=d,e.baseState=E,e.baseQueue=P,o.lastRenderedState=d}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Bc(e){var n=$e(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,d=n.memoizedState;if(c!==null){a.pending=null;var E=c=c.next;do d=e(d,E.action),E=E.next;while(E!==c);Vn(d,n.memoizedState)||(dn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Wp(e,n,a){var o=fe,c=$e(),d=be;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var E=!Vn((Le||c).memoizedState,a);if(E&&(c.memoizedState=a,dn=!0),c=c.queue,Hc(jp.bind(null,o,c,e),[e]),c.getSnapshot!==n||E||Qe!==null&&Qe.memoizedState.tag&1){if(o.flags|=2048,jr(9,Yp.bind(null,o,c,a,n),{destroy:void 0},null),Fe===null)throw Error(s(349));d||(pa&60)!==0||qp(o,n,a)}return a}function qp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=fe.updateQueue,n===null?(n=Cl(),fe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Yp(e,n,a,o){n.value=a,n.getSnapshot=o,Zp(n)&&Kp(e)}function jp(e,n,a){return a(function(){Zp(n)&&Kp(e)})}function Zp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Vn(e,a)}catch{return!0}}function Kp(e){var n=fa(e,2);n!==null&&Ln(n,e,2)}function Fc(e){var n=Bn();if(typeof e=="function"){var a=e;if(e=a(),Ja){se(!0);try{a()}finally{se(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:e},n}function Qp(e,n,a,o){return e.baseState=a,Ic(e,Le,typeof o=="function"?o:Ii)}function Ox(e,n,a,o,c){if(Nl(e))throw Error(s(485));if(e=n.action,e!==null){var d={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){d.listeners.push(E)}};w.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,$p(n,d)):(d.next=a.next,n.pending=a.next=d)}}function $p(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var d=w.T,E={};w.T=E;try{var R=a(c,o),P=w.S;P!==null&&P(E,R),Jp(e,n,R)}catch(V){zc(e,n,V)}finally{w.T=d}}else try{d=a(c,o),Jp(e,n,d)}catch(V){zc(e,n,V)}}function Jp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){tm(e,n,o)},function(o){return zc(e,n,o)}):tm(e,n,a)}function tm(e,n,a){n.status="fulfilled",n.value=a,em(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,$p(e,a)))}function zc(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,em(n),n=n.next;while(n!==o)}e.action=null}function em(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function nm(e,n){return n}function im(e,n){if(be){var a=Fe.formState;if(a!==null){t:{var o=fe;if(be){if(vn){e:{for(var c=vn,d=yi;c.nodeType!==8;){if(!d){c=null;break e}if(c=hi(c.nextSibling),c===null){c=null;break e}}d=c.data,c=d==="F!"||d==="F"?c:null}if(c){vn=hi(c.nextSibling),o=c.data==="F!";break t}}Ka(o)}o=!1}o&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nm,lastRenderedState:n},a.queue=o,a=ym.bind(null,fe,o),o.dispatch=a,o=Fc(!1),d=Wc.bind(null,fe,!1,o.queue),o=Bn(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=Ox.bind(null,fe,c,d,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function am(e){var n=$e();return rm(n,Le,e)}function rm(e,n,a){n=Ic(e,n,nm)[0],e=Dl(Ii)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?oo(n):n;var o=$e(),c=o.queue,d=c.dispatch;return a!==o.memoizedState&&(fe.flags|=2048,jr(9,Px.bind(null,c,a),{destroy:void 0},null)),[n,d,e]}function Px(e,n){e.action=n}function sm(e){var n=$e(),a=Le;if(a!==null)return rm(n,a,e);$e(),n=n.memoizedState,a=$e();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function jr(e,n,a,o){return e={tag:e,create:n,inst:a,deps:o,next:null},n=fe.updateQueue,n===null&&(n=Cl(),fe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function om(){return $e().memoizedState}function Ul(e,n,a,o){var c=Bn();fe.flags|=e,c.memoizedState=jr(1|n,a,{destroy:void 0},o===void 0?null:o)}function Ll(e,n,a,o){var c=$e();o=o===void 0?null:o;var d=c.memoizedState.inst;Le!==null&&o!==null&&Dc(o,Le.memoizedState.deps)?c.memoizedState=jr(n,a,d,o):(fe.flags|=e,c.memoizedState=jr(1|n,a,d,o))}function lm(e,n){Ul(8390656,8,e,n)}function Hc(e,n){Ll(2048,8,e,n)}function um(e,n){return Ll(4,2,e,n)}function cm(e,n){return Ll(4,4,e,n)}function fm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function dm(e,n,a){a=a!=null?a.concat([e]):null,Ll(4,4,fm.bind(null,n,e),a)}function Gc(){}function hm(e,n){var a=$e();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Dc(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function pm(e,n){var a=$e();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Dc(n,o[1]))return o[0];if(o=e(),Ja){se(!0);try{e()}finally{se(!1)}}return a.memoizedState=[o,n],o}function Vc(e,n,a){return a===void 0||(pa&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=gg(),fe.lanes|=e,Ta|=e,a)}function mm(e,n,a,o){return Vn(a,n)?a:kr.current!==null?(e=Vc(e,a,o),Vn(e,n)||(dn=!0),e):(pa&42)===0?(dn=!0,e.memoizedState=a):(e=gg(),fe.lanes|=e,Ta|=e,n)}function gm(e,n,a,o,c){var d=q.p;q.p=d!==0&&8>d?d:8;var E=w.T,R={};w.T=R,Wc(e,!1,n,a);try{var P=c(),V=w.S;if(V!==null&&V(R,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ut=Ux(P,o);lo(e,n,ut,qn(e))}else lo(e,n,o,qn(e))}catch(vt){lo(e,n,{then:function(){},status:"rejected",reason:vt},qn())}finally{q.p=d,w.T=E}}function Ix(){}function kc(e,n,a,o){if(e.tag!==5)throw Error(s(476));var c=_m(e).queue;gm(e,c,n,pt,a===null?Ix:function(){return vm(e),a(o)})}function _m(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:pt,baseState:pt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:pt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function vm(e){var n=_m(e).next.queue;lo(e,n,{},qn())}function Xc(){return En(wo)}function xm(){return $e().memoizedState}function Sm(){return $e().memoizedState}function Bx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=qn();e=va(a);var o=xa(n,e,a);o!==null&&(Ln(o,n,a),fo(o,n,a)),n={cache:Rc()},e.payload=n;return}n=n.return}}function Fx(e,n,a){var o=qn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Nl(e)?Em(n,a):(a=Sc(e,n,a,o),a!==null&&(Ln(a,e,o),Mm(a,n,o)))}function ym(e,n,a){var o=qn();lo(e,n,a,o)}function lo(e,n,a,o){var c={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Nl(e))Em(n,c);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var E=n.lastRenderedState,R=d(E,a);if(c.hasEagerState=!0,c.eagerState=R,Vn(R,E))return gl(e,n,c,0),Fe===null&&ml(),!1}catch{}finally{}if(a=Sc(e,n,c,o),a!==null)return Ln(a,e,o),Mm(a,n,o),!0}return!1}function Wc(e,n,a,o){if(o={lane:2,revertLane:Pf(),action:o,hasEagerState:!1,eagerState:null,next:null},Nl(e)){if(n)throw Error(s(479))}else n=Sc(e,a,o,2),n!==null&&Ln(n,e,2)}function Nl(e){var n=e.alternate;return e===fe||n!==null&&n===fe}function Em(e,n){qr=Al=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Mm(e,n,a){if((a&4194176)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Si(e,a)}}var Mi={readContext:En,use:wl,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useLayoutEffect:Ze,useInsertionEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useSyncExternalStore:Ze,useId:Ze};Mi.useCacheRefresh=Ze,Mi.useMemoCache=Ze,Mi.useHostTransitionStatus=Ze,Mi.useFormState=Ze,Mi.useActionState=Ze,Mi.useOptimistic=Ze;var tr={readContext:En,use:wl,useCallback:function(e,n){return Bn().memoizedState=[e,n===void 0?null:n],e},useContext:En,useEffect:lm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ul(4194308,4,fm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ul(4194308,4,e,n)},useInsertionEffect:function(e,n){Ul(4,2,e,n)},useMemo:function(e,n){var a=Bn();n=n===void 0?null:n;var o=e();if(Ja){se(!0);try{e()}finally{se(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Bn();if(a!==void 0){var c=a(n);if(Ja){se(!0);try{a(n)}finally{se(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=Fx.bind(null,fe,e),[o.memoizedState,e]},useRef:function(e){var n=Bn();return e={current:e},n.memoizedState=e},useState:function(e){e=Fc(e);var n=e.queue,a=ym.bind(null,fe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Gc,useDeferredValue:function(e,n){var a=Bn();return Vc(a,e,n)},useTransition:function(){var e=Fc(!1);return e=gm.bind(null,fe,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=fe,c=Bn();if(be){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Fe===null)throw Error(s(349));(ye&60)!==0||qp(o,n,a)}c.memoizedState=a;var d={value:a,getSnapshot:n};return c.queue=d,lm(jp.bind(null,o,d,e),[e]),o.flags|=2048,jr(9,Yp.bind(null,o,d,a,n),{destroy:void 0},null),a},useId:function(){var e=Bn(),n=Fe.identifierPrefix;if(be){var a=Oi,o=Ni;a=(o&~(1<<32-jt(o)-1)).toString(32)+a,n=":"+n+"R"+a,a=Rl++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=Lx++,n=":"+n+"r"+a.toString(32)+":";return e.memoizedState=n},useCacheRefresh:function(){return Bn().memoizedState=Bx.bind(null,fe)}};tr.useMemoCache=Pc,tr.useHostTransitionStatus=Xc,tr.useFormState=im,tr.useActionState=im,tr.useOptimistic=function(e){var n=Bn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Wc.bind(null,fe,!0,a),a.dispatch=n,[e,n]};var ma={readContext:En,use:wl,useCallback:hm,useContext:En,useEffect:Hc,useImperativeHandle:dm,useInsertionEffect:um,useLayoutEffect:cm,useMemo:pm,useReducer:Dl,useRef:om,useState:function(){return Dl(Ii)},useDebugValue:Gc,useDeferredValue:function(e,n){var a=$e();return mm(a,Le.memoizedState,e,n)},useTransition:function(){var e=Dl(Ii)[0],n=$e().memoizedState;return[typeof e=="boolean"?e:oo(e),n]},useSyncExternalStore:Wp,useId:xm};ma.useCacheRefresh=Sm,ma.useMemoCache=Pc,ma.useHostTransitionStatus=Xc,ma.useFormState=am,ma.useActionState=am,ma.useOptimistic=function(e,n){var a=$e();return Qp(a,Le,e,n)};var er={readContext:En,use:wl,useCallback:hm,useContext:En,useEffect:Hc,useImperativeHandle:dm,useInsertionEffect:um,useLayoutEffect:cm,useMemo:pm,useReducer:Bc,useRef:om,useState:function(){return Bc(Ii)},useDebugValue:Gc,useDeferredValue:function(e,n){var a=$e();return Le===null?Vc(a,e,n):mm(a,Le.memoizedState,e,n)},useTransition:function(){var e=Bc(Ii)[0],n=$e().memoizedState;return[typeof e=="boolean"?e:oo(e),n]},useSyncExternalStore:Wp,useId:xm};er.useCacheRefresh=Sm,er.useMemoCache=Pc,er.useHostTransitionStatus=Xc,er.useFormState=sm,er.useActionState=sm,er.useOptimistic=function(e,n){var a=$e();return Le!==null?Qp(a,Le,e,n):(a.baseState=e,[e,a.queue.dispatch])};function qc(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:A({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Yc={isMounted:function(e){return(e=e._reactInternals)?j(e)===e:!1},enqueueSetState:function(e,n,a){e=e._reactInternals;var o=qn(),c=va(o);c.payload=n,a!=null&&(c.callback=a),n=xa(e,c,o),n!==null&&(Ln(n,e,o),fo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=qn(),c=va(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=xa(e,c,o),n!==null&&(Ln(n,e,o),fo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=qn(),o=va(a);o.tag=2,n!=null&&(o.callback=n),n=xa(e,o,a),n!==null&&(Ln(n,e,a),fo(n,e,a))}};function Tm(e,n,a,o,c,d,E){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,E):n.prototype&&n.prototype.isPureReactComponent?!Zs(a,o)||!Zs(c,d):!0}function bm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Yc.enqueueReplaceState(n,n.state,null)}function nr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=A({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var Ol=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Am(e){Ol(e)}function Rm(e){console.error(e)}function Cm(e){Ol(e)}function Pl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function wm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function jc(e,n,a){return a=va(a),a.tag=3,a.payload={element:null},a.callback=function(){Pl(e,n)},a}function Dm(e){return e=va(e),e.tag=3,e}function Um(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var d=o.value;e.payload=function(){return c(d)},e.callback=function(){wm(n,a,o)}}var E=a.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(e.callback=function(){wm(n,a,o),typeof c!="function"&&(ba===null?ba=new Set([this]):ba.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function zx(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&co(n,a,c,!0),a=ti.current,a!==null){switch(a.tag){case 13:return Ei===null?Df():a.alternate===null&&Ye===0&&(Ye=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===Tc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Lf(e,o,c)),!1;case 22:return a.flags|=65536,o===Tc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Lf(e,o,c)),!1}throw Error(s(435,a.tag))}return Lf(e,o,c),Df(),!1}if(be)return n=ti.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Mc&&(e=Error(s(422),{cause:o}),Js(Qn(e,a)))):(o!==Mc&&(n=Error(s(423),{cause:o}),Js(Qn(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=Qn(o,a),c=jc(e.stateNode,o,c),cf(e,c),Ye!==4&&(Ye=2)),!1;var d=Error(s(520),{cause:o});if(d=Qn(d,a),So===null?So=[d]:So.push(d),Ye!==4&&(Ye=2),n===null)return!0;o=Qn(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=jc(a.stateNode,o,e),cf(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ba===null||!ba.has(d))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Dm(c),Um(c,e,a,o),cf(a,c),!1}a=a.return}while(a!==null);return!1}var Lm=Error(s(461)),dn=!1;function xn(e,n,a,o){n.child=e===null?Bp(n,null,a,o):Qa(n,e.child,a,o)}function Nm(e,n,a,o,c){a=a.render;var d=n.ref;if("ref"in o){var E={};for(var R in o)R!=="ref"&&(E[R]=o[R])}else E=o;return ar(n),o=Uc(e,n,a,E,d,c),R=Lc(),e!==null&&!dn?(Nc(e,n,c),Bi(e,n,c)):(be&&R&&yc(n),n.flags|=1,xn(e,n,o,c),n.child)}function Om(e,n,a,o,c){if(e===null){var d=a.type;return typeof d=="function"&&!vf(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,Pm(e,n,d,o,c)):(e=Hl(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!af(e,c)){var E=d.memoizedProps;if(a=a.compare,a=a!==null?a:Zs,a(E,o)&&e.ref===n.ref)return Bi(e,n,c)}return n.flags|=1,e=Ma(d,o),e.ref=n.ref,e.return=n,n.child=e}function Pm(e,n,a,o,c){if(e!==null){var d=e.memoizedProps;if(Zs(d,o)&&e.ref===n.ref)if(dn=!1,n.pendingProps=o=d,af(e,c))(e.flags&131072)!==0&&(dn=!0);else return n.lanes=e.lanes,Bi(e,n,c)}return Zc(e,n,a,o,c)}function Im(e,n,a){var o=n.pendingProps,c=o.children,d=(n.stateNode._pendingVisibility&2)!==0,E=e!==null?e.memoizedState:null;if(uo(e,n),o.mode==="hidden"||d){if((n.flags&128)!==0){if(o=E!==null?E.baseLanes|a:a,e!==null){for(c=n.child=e.child,d=0;c!==null;)d=d|c.lanes|c.childLanes,c=c.sibling;n.childLanes=d&~o}else n.childLanes=0,n.child=null;return Bm(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&bl(n,E!==null?E.cachePool:null),E!==null?Fp(n,E):bc(),zp(n);else return n.lanes=n.childLanes=536870912,Bm(e,n,E!==null?E.baseLanes|a:a,a)}else E!==null?(bl(n,E.cachePool),Fp(n,E),ha(),n.memoizedState=null):(e!==null&&bl(n,null),bc(),ha());return xn(e,n,c,a),n.child}function Bm(e,n,a,o){var c=wc();return c=c===null?null:{parent:ln._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&bl(n,null),bc(),zp(n),e!==null&&co(e,n,o,!0),null}function uo(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=2097664)}}function Zc(e,n,a,o,c){return ar(n),a=Uc(e,n,a,o,void 0,c),o=Lc(),e!==null&&!dn?(Nc(e,n,c),Bi(e,n,c)):(be&&o&&yc(n),n.flags|=1,xn(e,n,a,c),n.child)}function Fm(e,n,a,o,c,d){return ar(n),n.updateQueue=null,a=Xp(n,o,a,c),kp(e),o=Lc(),e!==null&&!dn?(Nc(e,n,d),Bi(e,n,d)):(be&&o&&yc(n),n.flags|=1,xn(e,n,a,d),n.child)}function zm(e,n,a,o,c){if(ar(n),n.stateNode===null){var d=zr,E=a.contextType;typeof E=="object"&&E!==null&&(d=En(E)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Yc,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},lf(n),E=a.contextType,d.context=typeof E=="object"&&E!==null?En(E):zr,d.state=n.memoizedState,E=a.getDerivedStateFromProps,typeof E=="function"&&(qc(n,a,E,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(E=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),E!==d.state&&Yc.enqueueReplaceState(d,d.state,null),po(n,o,d,c),ho(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var R=n.memoizedProps,P=nr(a,R);d.props=P;var V=d.context,ut=a.contextType;E=zr,typeof ut=="object"&&ut!==null&&(E=En(ut));var vt=a.getDerivedStateFromProps;ut=typeof vt=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,ut||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||V!==E)&&bm(n,d,o,E),_a=!1;var et=n.memoizedState;d.state=et,po(n,o,d,c),ho(),V=n.memoizedState,R||et!==V||_a?(typeof vt=="function"&&(qc(n,a,vt,o),V=n.memoizedState),(P=_a||Tm(n,a,P,o,et,V,E))?(ut||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=V),d.props=o,d.state=V,d.context=E,o=P):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,uf(e,n),E=n.memoizedProps,ut=nr(a,E),d.props=ut,vt=n.pendingProps,et=d.context,V=a.contextType,P=zr,typeof V=="object"&&V!==null&&(P=En(V)),R=a.getDerivedStateFromProps,(V=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E!==vt||et!==P)&&bm(n,d,o,P),_a=!1,et=n.memoizedState,d.state=et,po(n,o,d,c),ho();var ot=n.memoizedState;E!==vt||et!==ot||_a||e!==null&&e.dependencies!==null&&Il(e.dependencies)?(typeof R=="function"&&(qc(n,a,R,o),ot=n.memoizedState),(ut=_a||Tm(n,a,ut,o,et,ot,P)||e!==null&&e.dependencies!==null&&Il(e.dependencies))?(V||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ot,P),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ot,P)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||E===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ot),d.props=o,d.state=ot,d.context=P,o=ut):(typeof d.componentDidUpdate!="function"||E===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,uo(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=Qa(n,e.child,null,c),n.child=Qa(n,null,a,c)):xn(e,n,a,c),n.memoizedState=d.state,e=n.child):e=Bi(e,n,c),e}function Hm(e,n,a,o){return $s(),n.flags|=256,xn(e,n,a,o),n.child}var Kc={dehydrated:null,treeContext:null,retryLane:0};function Qc(e){return{baseLanes:e,cachePool:Vp()}}function $c(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ai),e}function Gm(e,n,a){var o=n.pendingProps,c=!1,d=(n.flags&128)!==0,E;if((E=d)||(E=e!==null&&e.memoizedState===null?!1:(on.current&2)!==0),E&&(c=!0,n.flags&=-129),E=(n.flags&32)!==0,n.flags&=-33,e===null){if(be){if(c?da(n):ha(),be){var R=vn,P;if(P=R){t:{for(P=R,R=yi;P.nodeType!==8;){if(!R){R=null;break t}if(P=hi(P.nextSibling),P===null){R=null;break t}}R=P}R!==null?(n.memoizedState={dehydrated:R,treeContext:ja!==null?{id:Ni,overflow:Oi}:null,retryLane:536870912},P=ii(18,null,null,0),P.stateNode=R,P.return=n,n.child=P,Un=n,vn=null,P=!0):P=!1}P||Ka(n)}if(R=n.memoizedState,R!==null&&(R=R.dehydrated,R!==null))return R.data==="$!"?n.lanes=16:n.lanes=536870912,null;Pi(n)}return R=o.children,o=o.fallback,c?(ha(),c=n.mode,R=tf({mode:"hidden",children:R},c),o=sr(o,c,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,c=n.child,c.memoizedState=Qc(a),c.childLanes=$c(e,E,a),n.memoizedState=Kc,o):(da(n),Jc(n,R))}if(P=e.memoizedState,P!==null&&(R=P.dehydrated,R!==null)){if(d)n.flags&256?(da(n),n.flags&=-257,n=ef(e,n,a)):n.memoizedState!==null?(ha(),n.child=e.child,n.flags|=128,n=null):(ha(),c=o.fallback,R=n.mode,o=tf({mode:"visible",children:o.children},R),c=sr(c,R,a,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,Qa(n,e.child,null,a),o=n.child,o.memoizedState=Qc(a),o.childLanes=$c(e,E,a),n.memoizedState=Kc,n=c);else if(da(n),R.data==="$!"){if(E=R.nextSibling&&R.nextSibling.dataset,E)var V=E.dgst;E=V,o=Error(s(419)),o.stack="",o.digest=E,Js({value:o,source:null,stack:null}),n=ef(e,n,a)}else if(dn||co(e,n,a,!1),E=(a&e.childLanes)!==0,dn||E){if(E=Fe,E!==null){if(o=a&-a,(o&42)!==0)o=1;else switch(o){case 2:o=1;break;case 8:o=4;break;case 32:o=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:o=64;break;case 268435456:o=134217728;break;default:o=0}if(o=(o&(E.suspendedLanes|a))!==0?0:o,o!==0&&o!==P.retryLane)throw P.retryLane=o,fa(e,o),Ln(E,e,o),Lm}R.data==="$?"||Df(),n=ef(e,n,a)}else R.data==="$?"?(n.flags|=128,n.child=e.child,n=tS.bind(null,e),R._reactRetry=n,n=null):(e=P.treeContext,vn=hi(R.nextSibling),Un=n,be=!0,fi=null,yi=!1,e!==null&&($n[Jn++]=Ni,$n[Jn++]=Oi,$n[Jn++]=ja,Ni=e.id,Oi=e.overflow,ja=n),n=Jc(n,o.children),n.flags|=4096);return n}return c?(ha(),c=o.fallback,R=n.mode,P=e.child,V=P.sibling,o=Ma(P,{mode:"hidden",children:o.children}),o.subtreeFlags=P.subtreeFlags&31457280,V!==null?c=Ma(V,c):(c=sr(c,R,a,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,R=e.child.memoizedState,R===null?R=Qc(a):(P=R.cachePool,P!==null?(V=ln._currentValue,P=P.parent!==V?{parent:V,pool:V}:P):P=Vp(),R={baseLanes:R.baseLanes|a,cachePool:P}),c.memoizedState=R,c.childLanes=$c(e,E,a),n.memoizedState=Kc,o):(da(n),a=e.child,e=a.sibling,a=Ma(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(E=n.deletions,E===null?(n.deletions=[e],n.flags|=16):E.push(e)),n.child=a,n.memoizedState=null,a)}function Jc(e,n){return n=tf({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function tf(e,n){return hg(e,n,0,null)}function ef(e,n,a){return Qa(n,e.child,null,a),e=Jc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Vm(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),sf(e.return,n,a)}function nf(e,n,a,o,c){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=a,d.tailMode=c)}function km(e,n,a){var o=n.pendingProps,c=o.revealOrder,d=o.tail;if(xn(e,n,o.children,a),o=on.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vm(e,a,n);else if(e.tag===19)Vm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(It(on,o),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Tl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),nf(n,!1,c,a,d);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Tl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}nf(n,!0,a,null,d);break;case"together":nf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Bi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ta|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(co(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Ma(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ma(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function af(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Il(e)))}function Hx(e,n,a){switch(n.tag){case 3:gn(n,n.stateNode.containerInfo),ga(n,ln,e.memoizedState.cache),$s();break;case 27:case 5:de(n);break;case 4:gn(n,n.stateNode.containerInfo);break;case 10:ga(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(da(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Gm(e,n,a):(da(n),e=Bi(e,n,a),e!==null?e.sibling:null);da(n);break;case 19:var c=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(co(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return km(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),It(on,on.current),o)break;return null;case 22:case 23:return n.lanes=0,Im(e,n,a);case 24:ga(n,ln,e.memoizedState.cache)}return Bi(e,n,a)}function Xm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)dn=!0;else{if(!af(e,a)&&(n.flags&128)===0)return dn=!1,Hx(e,n,a);dn=(e.flags&131072)!==0}else dn=!1,be&&(n.flags&1048576)!==0&&Cp(n,xl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")vf(o)?(e=nr(o,e),n.tag=1,n=zm(null,n,o,e,a)):(n.tag=0,n=Zc(null,n,o,e,a));else{if(o!=null){if(c=o.$$typeof,c===M){n.tag=11,n=Nm(null,n,o,e,a);break t}else if(c===_){n.tag=14,n=Om(null,n,o,e,a);break t}}throw n=Z(o)||o,Error(s(306,n,""))}}return n;case 0:return Zc(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=nr(o,n.pendingProps),zm(e,n,o,c,a);case 3:t:{if(gn(n,n.stateNode.containerInfo),e===null)throw Error(s(387));var d=n.pendingProps;c=n.memoizedState,o=c.element,uf(e,n),po(n,d,null,a);var E=n.memoizedState;if(d=E.cache,ga(n,ln,d),d!==c.cache&&of(n,[ln],a,!0),ho(),d=E.element,c.isDehydrated)if(c={element:d,isDehydrated:!1,cache:E.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=Hm(e,n,d,a);break t}else if(d!==o){o=Qn(Error(s(424)),n),Js(o),n=Hm(e,n,d,a);break t}else for(vn=hi(n.stateNode.containerInfo.firstChild),Un=n,be=!0,fi=null,yi=!0,a=Bp(n,null,d,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if($s(),d===o){n=Bi(e,n,a);break t}xn(e,n,d,a)}n=n.child}return n;case 26:return uo(e,n),e===null?(a=Yg(n.type,null,n.pendingProps,null))?n.memoizedState=a:be||(a=n.type,e=n.pendingProps,o=$l(re.current).createElement(a),o[an]=n,o[rn]=e,Sn(o,a,e),Q(o),n.stateNode=o):n.memoizedState=Yg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return de(n),e===null&&be&&(o=n.stateNode=Xg(n.type,n.pendingProps,re.current),Un=n,yi=!0,vn=hi(o.firstChild)),o=n.pendingProps.children,e!==null||be?xn(e,n,o,a):n.child=Qa(n,null,o,a),uo(e,n),n.child;case 5:return e===null&&be&&((c=o=vn)&&(o=gS(o,n.type,n.pendingProps,yi),o!==null?(n.stateNode=o,Un=n,vn=hi(o.firstChild),yi=!1,c=!0):c=!1),c||Ka(n)),de(n),c=n.type,d=n.pendingProps,E=e!==null?e.memoizedProps:null,o=d.children,Xf(c,d)?o=null:E!==null&&Xf(c,E)&&(n.flags|=32),n.memoizedState!==null&&(c=Uc(e,n,Nx,null,null,a),wo._currentValue=c),uo(e,n),xn(e,n,o,a),n.child;case 6:return e===null&&be&&((e=a=vn)&&(a=_S(a,n.pendingProps,yi),a!==null?(n.stateNode=a,Un=n,vn=null,e=!0):e=!1),e||Ka(n)),null;case 13:return Gm(e,n,a);case 4:return gn(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Qa(n,null,o,a):xn(e,n,o,a),n.child;case 11:return Nm(e,n,n.type,n.pendingProps,a);case 7:return xn(e,n,n.pendingProps,a),n.child;case 8:return xn(e,n,n.pendingProps.children,a),n.child;case 12:return xn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ga(n,n.type,o.value),xn(e,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,ar(n),c=En(c),o=o(c),n.flags|=1,xn(e,n,o,a),n.child;case 14:return Om(e,n,n.type,n.pendingProps,a);case 15:return Pm(e,n,n.type,n.pendingProps,a);case 19:return km(e,n,a);case 22:return Im(e,n,a);case 24:return ar(n),o=En(ln),e===null?(c=wc(),c===null&&(c=Fe,d=Rc(),c.pooledCache=d,d.refCount++,d!==null&&(c.pooledCacheLanes|=a),c=d),n.memoizedState={parent:o,cache:c},lf(n),ga(n,ln,c)):((e.lanes&a)!==0&&(uf(e,n),po(n,null,null,a),ho()),c=e.memoizedState,d=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ga(n,ln,o)):(o=d.cache,ga(n,ln,o),o!==c.cache&&of(n,[ln],a,!0))),xn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}var rf=Ct(null),ir=null,Fi=null;function ga(e,n,a){It(rf,n._currentValue),n._currentValue=a}function zi(e){e._currentValue=rf.current,Qt(rf)}function sf(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function of(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var d=c.dependencies;if(d!==null){var E=c.child;d=d.firstContext;t:for(;d!==null;){var R=d;d=c;for(var P=0;P<n.length;P++)if(R.context===n[P]){d.lanes|=a,R=d.alternate,R!==null&&(R.lanes|=a),sf(d.return,a,e),o||(E=null);break t}d=R.next}}else if(c.tag===18){if(E=c.return,E===null)throw Error(s(341));E.lanes|=a,d=E.alternate,d!==null&&(d.lanes|=a),sf(E,a,e),E=null}else E=c.child;if(E!==null)E.return=c;else for(E=c;E!==null;){if(E===e){E=null;break}if(c=E.sibling,c!==null){c.return=E.return,E=c;break}E=E.return}c=E}}function co(e,n,a,o){e=null;for(var c=n,d=!1;c!==null;){if(!d){if((c.flags&524288)!==0)d=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var E=c.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var R=c.type;Vn(c.pendingProps.value,E.value)||(e!==null?e.push(R):e=[R])}}else if(c===I.current){if(E=c.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(wo):e=[wo])}c=c.return}e!==null&&of(n,e,a,o),n.flags|=262144}function Il(e){for(e=e.firstContext;e!==null;){if(!Vn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ar(e){ir=e,Fi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function En(e){return Wm(ir,e)}function Bl(e,n){return ir===null&&ar(e),Wm(e,n)}function Wm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Fi===null){if(e===null)throw Error(s(308));Fi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Fi=Fi.next=n;return a}var _a=!1;function lf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function va(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ke&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=_l(e),Ap(e,null,a),n}return gl(e,o,n,a),_l(e)}function fo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194176)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Si(e,a)}}function cf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var E={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?c=d=E:d=d.next=E,a=a.next}while(a!==null);d===null?c=d=n:d=d.next=n}else c=d=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var ff=!1;function ho(){if(ff){var e=Wr;if(e!==null)throw e}}function po(e,n,a,o){ff=!1;var c=e.updateQueue;_a=!1;var d=c.firstBaseUpdate,E=c.lastBaseUpdate,R=c.shared.pending;if(R!==null){c.shared.pending=null;var P=R,V=P.next;P.next=null,E===null?d=V:E.next=V,E=P;var ut=e.alternate;ut!==null&&(ut=ut.updateQueue,R=ut.lastBaseUpdate,R!==E&&(R===null?ut.firstBaseUpdate=V:R.next=V,ut.lastBaseUpdate=P))}if(d!==null){var vt=c.baseState;E=0,ut=V=P=null,R=d;do{var et=R.lane&-536870913,ot=et!==R.lane;if(ot?(ye&et)===et:(o&et)===et){et!==0&&et===Xr&&(ff=!0),ut!==null&&(ut=ut.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var kt=e,ae=R;et=n;var je=a;switch(ae.tag){case 1:if(kt=ae.payload,typeof kt=="function"){vt=kt.call(je,vt,et);break t}vt=kt;break t;case 3:kt.flags=kt.flags&-65537|128;case 0:if(kt=ae.payload,et=typeof kt=="function"?kt.call(je,vt,et):kt,et==null)break t;vt=A({},vt,et);break t;case 2:_a=!0}}et=R.callback,et!==null&&(e.flags|=64,ot&&(e.flags|=8192),ot=c.callbacks,ot===null?c.callbacks=[et]:ot.push(et))}else ot={lane:et,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ut===null?(V=ut=ot,P=vt):ut=ut.next=ot,E|=et;if(R=R.next,R===null){if(R=c.shared.pending,R===null)break;ot=R,R=ot.next,ot.next=null,c.lastBaseUpdate=ot,c.shared.pending=null}}while(!0);ut===null&&(P=vt),c.baseState=P,c.firstBaseUpdate=V,c.lastBaseUpdate=ut,d===null&&(c.shared.lanes=0),Ta|=E,e.lanes=E,e.memoizedState=vt}}function qm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Ym(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)qm(a[e],n)}function mo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var d=a.create,E=a.inst;o=d(),E.destroy=o}a=a.next}while(a!==c)}}catch(R){Ie(n,n.return,R)}}function Sa(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var d=c.next;o=d;do{if((o.tag&e)===e){var E=o.inst,R=E.destroy;if(R!==void 0){E.destroy=void 0,c=n;var P=a;try{R()}catch(V){Ie(c,P,V)}}}o=o.next}while(o!==d)}}catch(V){Ie(n,n.return,V)}}function jm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Ym(n,a)}catch(o){Ie(e,e.return,o)}}}function Zm(e,n,a){a.props=nr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ie(e,n,o)}}function rr(e,n){try{var a=e.ref;if(a!==null){var o=e.stateNode;switch(e.tag){case 26:case 27:case 5:var c=o;break;default:c=o}typeof a=="function"?e.refCleanup=a(c):a.current=c}}catch(d){Ie(e,n,d)}}function kn(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Ie(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ie(e,n,c)}else a.current=null}function Km(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Ie(e,e.return,c)}}function Qm(e,n,a){try{var o=e.stateNode;fS(o,e.type,a,n),o[rn]=n}catch(c){Ie(e,e.return,c)}}function $m(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function df(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||$m(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(e,n):a.insertBefore(e,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(e,a)):(n=a,n.appendChild(e)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ql));else if(o!==4&&o!==27&&(e=e.child,e!==null))for(hf(e,n,a),e=e.sibling;e!==null;)hf(e,n,a),e=e.sibling}function Fl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&o!==27&&(e=e.child,e!==null))for(Fl(e,n,a),e=e.sibling;e!==null;)Fl(e,n,a),e=e.sibling}var Hi=!1,qe=!1,pf=!1,Jm=typeof WeakSet=="function"?WeakSet:Set,hn=null,tg=!1;function Gx(e,n){if(e=e.containerInfo,Vf=au,e=_p(e),mc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var E=0,R=-1,P=-1,V=0,ut=0,vt=e,et=null;e:for(;;){for(var ot;vt!==a||c!==0&&vt.nodeType!==3||(R=E+c),vt!==d||o!==0&&vt.nodeType!==3||(P=E+o),vt.nodeType===3&&(E+=vt.nodeValue.length),(ot=vt.firstChild)!==null;)et=vt,vt=ot;for(;;){if(vt===e)break e;if(et===a&&++V===c&&(R=E),et===d&&++ut===o&&(P=E),(ot=vt.nextSibling)!==null)break;vt=et,et=vt.parentNode}vt=ot}a=R===-1||P===-1?null:{start:R,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(kf={focusedElem:e,selectionRange:a},au=!1,hn=n;hn!==null;)if(n=hn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,hn=e;else for(;hn!==null;){switch(n=hn,d=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,c=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var kt=nr(a.type,c,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(kt,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(ae){Ie(a,a.return,ae)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Yf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Yf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,hn=e;break}hn=n.return}return kt=tg,tg=!1,kt}function eg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Vi(e,a),o&4&&mo(5,a);break;case 1:if(Vi(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(R){Ie(a,a.return,R)}else{var c=nr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(R){Ie(a,a.return,R)}}o&64&&jm(a),o&512&&rr(a,a.return);break;case 3:if(Vi(e,a),o&64&&(o=a.updateQueue,o!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Ym(o,e)}catch(R){Ie(a,a.return,R)}}break;case 26:Vi(e,a),o&512&&rr(a,a.return);break;case 27:case 5:Vi(e,a),n===null&&o&4&&Km(a),o&512&&rr(a,a.return);break;case 12:Vi(e,a);break;case 13:Vi(e,a),o&4&&ag(e,a);break;case 22:if(c=a.memoizedState!==null||Hi,!c){n=n!==null&&n.memoizedState!==null||qe;var d=Hi,E=qe;Hi=c,(qe=n)&&!E?ya(e,a,(a.subtreeFlags&8772)!==0):Vi(e,a),Hi=d,qe=E}o&512&&(a.memoizedProps.mode==="manual"?rr(a,a.return):kn(a,a.return));break;default:Vi(e,a)}}function ng(e){var n=e.alternate;n!==null&&(e.alternate=null,ng(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Gs(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,Xn=!1;function Gi(e,n,a){for(a=a.child;a!==null;)ig(e,n,a),a=a.sibling}function ig(e,n,a){if(Vt&&typeof Vt.onCommitFiberUnmount=="function")try{Vt.onCommitFiberUnmount(Kt,a)}catch{}switch(a.tag){case 26:qe||kn(a,n),Gi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:qe||kn(a,n);var o=Je,c=Xn;for(Je=a.stateNode,Gi(e,n,a),a=a.stateNode,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);Gs(a),Je=o,Xn=c;break;case 5:qe||kn(a,n);case 6:c=Je;var d=Xn;if(Je=null,Gi(e,n,a),Je=c,Xn=d,Je!==null)if(Xn)try{e=Je,o=a.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)}catch(E){Ie(a,n,E)}else try{Je.removeChild(a.stateNode)}catch(E){Ie(a,n,E)}break;case 18:Je!==null&&(Xn?(n=Je,a=a.stateNode,n.nodeType===8?qf(n.parentNode,a):n.nodeType===1&&qf(n,a),No(n)):qf(Je,a.stateNode));break;case 4:o=Je,c=Xn,Je=a.stateNode.containerInfo,Xn=!0,Gi(e,n,a),Je=o,Xn=c;break;case 0:case 11:case 14:case 15:qe||Sa(2,a,n),qe||Sa(4,a,n),Gi(e,n,a);break;case 1:qe||(kn(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Zm(a,n,o)),Gi(e,n,a);break;case 21:Gi(e,n,a);break;case 22:qe||kn(a,n),qe=(o=qe)||a.memoizedState!==null,Gi(e,n,a),qe=o;break;default:Gi(e,n,a)}}function ag(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{No(e)}catch(a){Ie(n,n.return,a)}}function Vx(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Jm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Jm),n;default:throw Error(s(435,e.tag))}}function mf(e,n){var a=Vx(e);n.forEach(function(o){var c=eS.bind(null,e,o);a.has(o)||(a.add(o),o.then(c,c))})}function ei(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],d=e,E=n,R=E;t:for(;R!==null;){switch(R.tag){case 27:case 5:Je=R.stateNode,Xn=!1;break t;case 3:Je=R.stateNode.containerInfo,Xn=!0;break t;case 4:Je=R.stateNode.containerInfo,Xn=!0;break t}R=R.return}if(Je===null)throw Error(s(160));ig(d,E,c),Je=null,Xn=!1,d=c.alternate,d!==null&&(d.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)rg(n,e),n=n.sibling}var di=null;function rg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ei(n,e),ni(e),o&4&&(Sa(3,e,e.return),mo(3,e),Sa(5,e,e.return));break;case 1:ei(n,e),ni(e),o&512&&(qe||a===null||kn(a,a.return)),o&64&&Hi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=di;if(ei(n,e),ni(e),o&512&&(qe||a===null||kn(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":d=c.getElementsByTagName("title")[0],(!d||d[Xa]||d[an]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=c.createElement(o),c.head.insertBefore(d,c.querySelector("head > title"))),Sn(d,o,a),d[an]=e,Q(d),o=d;break t;case"link":var E=Kg("link","href",c).get(o+(a.href||""));if(E){for(var R=0;R<E.length;R++)if(d=E[R],d.getAttribute("href")===(a.href==null?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){E.splice(R,1);break e}}d=c.createElement(o),Sn(d,o,a),c.head.appendChild(d);break;case"meta":if(E=Kg("meta","content",c).get(o+(a.content||""))){for(R=0;R<E.length;R++)if(d=E[R],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){E.splice(R,1);break e}}d=c.createElement(o),Sn(d,o,a),c.head.appendChild(d);break;default:throw Error(s(468,o))}d[an]=e,Q(d),o=d}e.stateNode=o}else Qg(c,e.type,e.stateNode);else e.stateNode=Zg(c,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?Qg(c,e.type,e.stateNode):Zg(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Qm(e,e.memoizedProps,a.memoizedProps)}break;case 27:if(o&4&&e.alternate===null){c=e.stateNode,d=e.memoizedProps;try{for(var P=c.firstChild;P;){var V=P.nextSibling,ut=P.nodeName;P[Xa]||ut==="HEAD"||ut==="BODY"||ut==="SCRIPT"||ut==="STYLE"||ut==="LINK"&&P.rel.toLowerCase()==="stylesheet"||c.removeChild(P),P=V}for(var vt=e.type,et=c.attributes;et.length;)c.removeAttributeNode(et[0]);Sn(c,vt,d),c[an]=e,c[rn]=d}catch(kt){Ie(e,e.return,kt)}}case 5:if(ei(n,e),ni(e),o&512&&(qe||a===null||kn(a,a.return)),e.flags&32){c=e.stateNode;try{Pn(c,"")}catch(kt){Ie(e,e.return,kt)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,Qm(e,c,a!==null?a.memoizedProps:c)),o&1024&&(pf=!0);break;case 6:if(ei(n,e),ni(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(kt){Ie(e,e.return,kt)}}break;case 3:if(eu=null,c=di,di=Jl(n.containerInfo),ei(n,e),di=c,ni(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{No(n.containerInfo)}catch(kt){Ie(e,e.return,kt)}pf&&(pf=!1,sg(e));break;case 4:o=di,di=Jl(e.stateNode.containerInfo),ei(n,e),ni(e),di=o;break;case 12:ei(n,e),ni(e);break;case 13:ei(n,e),ni(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Tf=ft()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,mf(e,o)));break;case 22:if(o&512&&(qe||a===null||kn(a,a.return)),P=e.memoizedState!==null,V=a!==null&&a.memoizedState!==null,ut=Hi,vt=qe,Hi=ut||P,qe=vt||V,ei(n,e),qe=vt,Hi=ut,ni(e),n=e.stateNode,n._current=e,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,o&8192&&(n._visibility=P?n._visibility&-2:n._visibility|1,P&&(n=Hi||qe,a===null||V||n||Zr(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(a=null,n=e;;){if(n.tag===5||n.tag===26||n.tag===27){if(a===null){V=a=n;try{if(c=V.stateNode,P)d=c.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{E=V.stateNode,R=V.memoizedProps.style;var ot=R!=null&&R.hasOwnProperty("display")?R.display:null;E.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(kt){Ie(V,V.return,kt)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=P?"":V.memoizedProps}catch(kt){Ie(V,V.return,kt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,mf(e,a))));break;case 19:ei(n,e),ni(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,mf(e,o)));break;case 21:break;default:ei(n,e),ni(e)}}function ni(e){var n=e.flags;if(n&2){try{if(e.tag!==27){t:{for(var a=e.return;a!==null;){if($m(a)){var o=a;break t}a=a.return}throw Error(s(160))}switch(o.tag){case 27:var c=o.stateNode,d=df(e);Fl(e,d,c);break;case 5:var E=o.stateNode;o.flags&32&&(Pn(E,""),o.flags&=-33);var R=df(e);Fl(e,R,E);break;case 3:case 4:var P=o.stateNode.containerInfo,V=df(e);hf(e,V,P);break;default:throw Error(s(161))}}}catch(ut){Ie(e,e.return,ut)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function sg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;sg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Vi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)eg(e,n.alternate,n),n=n.sibling}function Zr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Sa(4,n,n.return),Zr(n);break;case 1:kn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Zm(n,n.return,a),Zr(n);break;case 26:case 27:case 5:kn(n,n.return),Zr(n);break;case 22:kn(n,n.return),n.memoizedState===null&&Zr(n);break;default:Zr(n)}e=e.sibling}}function ya(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,d=n,E=d.flags;switch(d.tag){case 0:case 11:case 15:ya(c,d,a),mo(4,d);break;case 1:if(ya(c,d,a),o=d,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(V){Ie(o,o.return,V)}if(o=d,c=o.updateQueue,c!==null){var R=o.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)qm(P[c],R)}catch(V){Ie(o,o.return,V)}}a&&E&64&&jm(d),rr(d,d.return);break;case 26:case 27:case 5:ya(c,d,a),a&&o===null&&E&4&&Km(d),rr(d,d.return);break;case 12:ya(c,d,a);break;case 13:ya(c,d,a),a&&E&4&&ag(c,d);break;case 22:d.memoizedState===null&&ya(c,d,a),rr(d,d.return);break;default:ya(c,d,a)}n=n.sibling}}function gf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ao(a))}function _f(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ao(e))}function Ea(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)og(e,n,a,o),n=n.sibling}function og(e,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ea(e,n,a,o),c&2048&&mo(9,n);break;case 3:Ea(e,n,a,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ao(e)));break;case 12:if(c&2048){Ea(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,E=d.id,R=d.onPostCommit;typeof R=="function"&&R(E,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(P){Ie(n,n.return,P)}}else Ea(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,n.memoizedState!==null?d._visibility&4?Ea(e,n,a,o):go(e,n):d._visibility&4?Ea(e,n,a,o):(d._visibility|=4,Kr(e,n,a,o,(n.subtreeFlags&10256)!==0)),c&2048&&gf(n.alternate,n);break;case 24:Ea(e,n,a,o),c&2048&&_f(n.alternate,n);break;default:Ea(e,n,a,o)}}function Kr(e,n,a,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var d=e,E=n,R=a,P=o,V=E.flags;switch(E.tag){case 0:case 11:case 15:Kr(d,E,R,P,c),mo(8,E);break;case 23:break;case 22:var ut=E.stateNode;E.memoizedState!==null?ut._visibility&4?Kr(d,E,R,P,c):go(d,E):(ut._visibility|=4,Kr(d,E,R,P,c)),c&&V&2048&&gf(E.alternate,E);break;case 24:Kr(d,E,R,P,c),c&&V&2048&&_f(E.alternate,E);break;default:Kr(d,E,R,P,c)}n=n.sibling}}function go(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:go(a,o),c&2048&&gf(o.alternate,o);break;case 24:go(a,o),c&2048&&_f(o.alternate,o);break;default:go(a,o)}n=n.sibling}}var _o=8192;function Qr(e){if(e.subtreeFlags&_o)for(e=e.child;e!==null;)lg(e),e=e.sibling}function lg(e){switch(e.tag){case 26:Qr(e),e.flags&_o&&e.memoizedState!==null&&DS(di,e.memoizedState,e.memoizedProps);break;case 5:Qr(e);break;case 3:case 4:var n=di;di=Jl(e.stateNode.containerInfo),Qr(e),di=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=_o,_o=16777216,Qr(e),_o=n):Qr(e));break;default:Qr(e)}}function ug(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function vo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];hn=o,fg(o,e)}ug(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)cg(e),e=e.sibling}function cg(e){switch(e.tag){case 0:case 11:case 15:vo(e),e.flags&2048&&Sa(9,e,e.return);break;case 3:vo(e);break;case 12:vo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&4&&(e.return===null||e.return.tag!==13)?(n._visibility&=-5,zl(e)):vo(e);break;default:vo(e)}}function zl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];hn=o,fg(o,e)}ug(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Sa(8,n,n.return),zl(n);break;case 22:a=n.stateNode,a._visibility&4&&(a._visibility&=-5,zl(n));break;default:zl(n)}e=e.sibling}}function fg(e,n){for(;hn!==null;){var a=hn;switch(a.tag){case 0:case 11:case 15:Sa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ao(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,hn=o;else t:for(a=e;hn!==null;){o=hn;var c=o.sibling,d=o.return;if(ng(o),o===a){hn=null;break t}if(c!==null){c.return=d,hn=c;break t}hn=d}}}function kx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(e,n,a,o){return new kx(e,n,a,o)}function vf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ma(e,n){var a=e.alternate;return a===null?(a=ii(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&31457280,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function dg(e,n){e.flags&=31457282;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Hl(e,n,a,o,c,d){var E=0;if(o=e,typeof e=="function")vf(e)&&(E=1);else if(typeof e=="string")E=CS(e,a,Ee.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case p:return sr(a.children,c,d,n);case m:E=8,c|=24;break;case g:return e=ii(12,a,n,c|2),e.elementType=g,e.lanes=d,e;case T:return e=ii(13,a,n,c),e.elementType=T,e.lanes=d,e;case y:return e=ii(19,a,n,c),e.elementType=y,e.lanes=d,e;case U:return hg(a,c,d,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case x:case S:E=10;break t;case v:E=9;break t;case M:E=11;break t;case _:E=14;break t;case O:E=16,o=null;break t}E=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ii(E,a,n,c),n.elementType=e,n.type=o,n.lanes=d,n}function sr(e,n,a,o){return e=ii(7,e,o,n),e.lanes=a,e}function hg(e,n,a,o){e=ii(22,e,o,n),e.elementType=U,e.lanes=a;var c={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var d=c._current;if(d===null)throw Error(s(456));if((c._pendingVisibility&2)===0){var E=fa(d,2);E!==null&&(c._pendingVisibility|=2,Ln(E,d,2))}},attach:function(){var d=c._current;if(d===null)throw Error(s(456));if((c._pendingVisibility&2)!==0){var E=fa(d,2);E!==null&&(c._pendingVisibility&=-3,Ln(E,d,2))}}};return e.stateNode=c,e}function xf(e,n,a){return e=ii(6,e,null,n),e.lanes=a,e}function Sf(e,n,a){return n=ii(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function ki(e){e.flags|=4}function pg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!$g(n)){if(n=ti.current,n!==null&&((ye&4194176)===ye?Ei!==null:(ye&62914560)!==ye&&(ye&536870912)===0||n!==Ei))throw eo=Tc,Up;e.flags|=8192}}function Gl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Me():536870912,e.lanes|=n,Jr|=n)}function xo(e,n){if(!be)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ve(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&31457280,o|=c.flags&31457280,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Xx(e,n,a){var o=n.pendingProps;switch(Ec(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(n),null;case 1:return Ve(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),zi(ln),oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Qs(n)?ki(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,fi!==null&&(Cf(fi),fi=null))),Ve(n),null;case 26:return a=n.memoizedState,e===null?(ki(n),a!==null?(Ve(n),pg(n,a)):(Ve(n),n.flags&=-16777217)):a?a!==e.memoizedState?(ki(n),Ve(n),pg(n,a)):(Ve(n),n.flags&=-16777217):(e.memoizedProps!==o&&ki(n),Ve(n),n.flags&=-16777217),null;case 27:Xt(n),a=re.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ki(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ve(n),null}e=Ee.current,Qs(n)?wp(n):(e=Xg(c,o,a),n.stateNode=e,ki(n))}return Ve(n),null;case 5:if(Xt(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ki(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ve(n),null}if(e=Ee.current,Qs(n))wp(n);else{switch(c=$l(re.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?c.createElement(a,{is:o.is}):c.createElement(a)}}e[an]=n,e[rn]=o;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(Sn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ki(n)}}return Ve(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ki(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=re.current,Qs(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=Un,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[an]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Fg(e.nodeValue,a)),e||Ka(n)}else e=$l(e).createTextNode(o),e[an]=n,n.stateNode=e}return Ve(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Qs(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[an]=n}else $s(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ve(n),c=!1}else fi!==null&&(Cf(fi),fi=null),c=!0;if(!c)return n.flags&256?(Pi(n),n):(Pi(n),null)}if(Pi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==c&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Gl(n,n.updateQueue),Ve(n),null;case 4:return oe(),e===null&&zf(n.stateNode.containerInfo),Ve(n),null;case 10:return zi(n.type),Ve(n),null;case 19:if(Qt(on),c=n.memoizedState,c===null)return Ve(n),null;if(o=(n.flags&128)!==0,d=c.rendering,d===null)if(o)xo(c,!1);else{if(Ye!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=Tl(e),d!==null){for(n.flags|=128,xo(c,!1),e=d.updateQueue,n.updateQueue=e,Gl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)dg(a,e),a=a.sibling;return It(on,on.current&1|2),n.child}e=e.sibling}c.tail!==null&&ft()>Vl&&(n.flags|=128,o=!0,xo(c,!1),n.lanes=4194304)}else{if(!o)if(e=Tl(d),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Gl(n,e),xo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!d.alternate&&!be)return Ve(n),null}else 2*ft()-c.renderingStartTime>Vl&&a!==536870912&&(n.flags|=128,o=!0,xo(c,!1),n.lanes=4194304);c.isBackwards?(d.sibling=n.child,n.child=d):(e=c.last,e!==null?e.sibling=d:n.child=d,c.last=d)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=ft(),n.sibling=null,e=on.current,It(on,o?e&1|2:e&1),n):(Ve(n),null);case 22:case 23:return Pi(n),Ac(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ve(n),n.subtreeFlags&6&&(n.flags|=8192)):Ve(n),a=n.updateQueue,a!==null&&Gl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&Qt($a),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),zi(ln),Ve(n),null;case 25:return null}throw Error(s(156,n.tag))}function Wx(e,n){switch(Ec(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return zi(ln),oe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Xt(n),null;case 13:if(Pi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));$s()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Qt(on),null;case 4:return oe(),null;case 10:return zi(n.type),null;case 22:case 23:return Pi(n),Ac(),e!==null&&Qt($a),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return zi(ln),null;case 25:return null;default:return null}}function mg(e,n){switch(Ec(n),n.tag){case 3:zi(ln),oe();break;case 26:case 27:case 5:Xt(n);break;case 4:oe();break;case 13:Pi(n);break;case 19:Qt(on);break;case 10:zi(n.type);break;case 22:case 23:Pi(n),Ac(),e!==null&&Qt($a);break;case 24:zi(ln)}}var qx={getCacheForType:function(e){var n=En(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Yx=typeof WeakMap=="function"?WeakMap:Map,ke=0,Fe=null,pe=null,ye=0,ze=0,Wn=null,Xi=!1,$r=!1,yf=!1,Wi=0,Ye=0,Ta=0,or=0,Ef=0,ai=0,Jr=0,So=null,Ti=null,Mf=!1,Tf=0,Vl=1/0,kl=null,ba=null,Xl=!1,lr=null,yo=0,bf=0,Af=null,Eo=0,Rf=null;function qn(){if((ke&2)!==0&&ye!==0)return ye&-ye;if(w.T!==null){var e=Xr;return e!==0?e:Pf()}return Hs()}function gg(){ai===0&&(ai=(ye&536870912)===0||be?nn():536870912);var e=ti.current;return e!==null&&(e.flags|=32),ai}function Ln(e,n,a){(e===Fe&&ze===2||e.cancelPendingCommit!==null)&&(ts(e,0),qi(e,ye,ai,!1)),Cn(e,a),((ke&2)===0||e!==Fe)&&(e===Fe&&((ke&2)===0&&(or|=a),Ye===4&&qi(e,ye,ai,!1)),bi(e))}function _g(e,n,a){if((ke&6)!==0)throw Error(s(327));var o=!a&&(n&60)===0&&(n&e.expiredLanes)===0||te(e,n),c=o?Kx(e,n):Uf(e,n,!0),d=o;do{if(c===0){$r&&!o&&qi(e,n,0,!1);break}else if(c===6)qi(e,n,0,!Xi);else{if(a=e.current.alternate,d&&!jx(a)){c=Uf(e,n,!1),d=!1;continue}if(c===2){if(d=n,e.errorRecoveryDisabledLanes&d)var E=0;else E=e.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){n=E;t:{var R=e;c=So;var P=R.current.memoizedState.isDehydrated;if(P&&(ts(R,E).flags|=256),E=Uf(R,E,!1),E!==2){if(yf&&!P){R.errorRecoveryDisabledLanes|=d,or|=d,c=4;break t}d=Ti,Ti=c,d!==null&&Cf(d)}c=E}if(d=!1,c!==2)continue}}if(c===1){ts(e,0),qi(e,n,0,!0);break}t:{switch(o=e,c){case 0:case 1:throw Error(s(345));case 4:if((n&4194176)===n){qi(o,n,ai,!Xi);break t}break;case 2:Ti=null;break;case 3:case 5:break;default:throw Error(s(329))}if(o.finishedWork=a,o.finishedLanes=n,(n&62914560)===n&&(d=Tf+300-ft(),10<d)){if(qi(o,n,ai,!Xi),Ut(o,0)!==0)break t;o.timeoutHandle=Gg(vg.bind(null,o,a,Ti,kl,Mf,n,ai,or,Jr,Xi,2,-0,0),d);break t}vg(o,a,Ti,kl,Mf,n,ai,or,Jr,Xi,0,-0,0)}}break}while(!0);bi(e)}function Cf(e){Ti===null?Ti=e:Ti.push.apply(Ti,e)}function vg(e,n,a,o,c,d,E,R,P,V,ut,vt,et){var ot=n.subtreeFlags;if((ot&8192||(ot&16785408)===16785408)&&(Co={stylesheets:null,count:0,unsuspend:wS},lg(n),n=US(),n!==null)){e.cancelPendingCommit=n(bg.bind(null,e,a,o,c,E,R,P,1,vt,et)),qi(e,d,E,!V);return}bg(e,a,o,c,E,R,P,ut,vt,et)}function jx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],d=c.getSnapshot;c=c.value;try{if(!Vn(d(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qi(e,n,a,o){n&=~Ef,n&=~or,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var d=31-jt(c),E=1<<d;o[d]=-1,c&=~E}a!==0&&zs(e,a,n)}function Wl(){return(ke&6)===0?(Mo(0),!1):!0}function wf(){if(pe!==null){if(ze===0)var e=pe.return;else e=pe,Fi=ir=null,Oc(e),Vr=null,no=0,e=pe;for(;e!==null;)mg(e.alternate,e),e=e.return;pe=null}}function ts(e,n){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,hS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),wf(),Fe=e,pe=a=Ma(e.current,null),ye=n,ze=0,Wn=null,Xi=!1,$r=te(e,n),yf=!1,Jr=ai=Ef=or=Ta=Ye=0,Ti=So=null,Mf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-jt(o),d=1<<c;n|=e[c],o&=~d}return Wi=n,ml(),a}function xg(e,n){fe=null,w.H=Mi,n===to?(n=Op(),ze=3):n===Up?(n=Op(),ze=4):ze=n===Lm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Wn=n,pe===null&&(Ye=1,Pl(e,Qn(n,e.current)))}function Sg(){var e=w.H;return w.H=Mi,e===null?Mi:e}function yg(){var e=w.A;return w.A=qx,e}function Df(){Ye=4,Xi||(ye&4194176)!==ye&&ti.current!==null||($r=!0),(Ta&134217727)===0&&(or&134217727)===0||Fe===null||qi(Fe,ye,ai,!1)}function Uf(e,n,a){var o=ke;ke|=2;var c=Sg(),d=yg();(Fe!==e||ye!==n)&&(kl=null,ts(e,n)),n=!1;var E=Ye;t:do try{if(ze!==0&&pe!==null){var R=pe,P=Wn;switch(ze){case 8:wf(),E=6;break t;case 3:case 2:case 6:ti.current===null&&(n=!0);var V=ze;if(ze=0,Wn=null,es(e,R,P,V),a&&$r){E=0;break t}break;default:V=ze,ze=0,Wn=null,es(e,R,P,V)}}Zx(),E=Ye;break}catch(ut){xg(e,ut)}while(!0);return n&&e.shellSuspendCounter++,Fi=ir=null,ke=o,w.H=c,w.A=d,pe===null&&(Fe=null,ye=0,ml()),E}function Zx(){for(;pe!==null;)Eg(pe)}function Kx(e,n){var a=ke;ke|=2;var o=Sg(),c=yg();Fe!==e||ye!==n?(kl=null,Vl=ft()+500,ts(e,n)):$r=te(e,n);t:do try{if(ze!==0&&pe!==null){n=pe;var d=Wn;e:switch(ze){case 1:ze=0,Wn=null,es(e,n,d,1);break;case 2:if(Lp(d)){ze=0,Wn=null,Mg(n);break}n=function(){ze===2&&Fe===e&&(ze=7),bi(e)},d.then(n,n);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:Lp(d)?(ze=0,Wn=null,Mg(n)):(ze=0,Wn=null,es(e,n,d,7));break;case 5:var E=null;switch(pe.tag){case 26:E=pe.memoizedState;case 5:case 27:var R=pe;if(!E||$g(E)){ze=0,Wn=null;var P=R.sibling;if(P!==null)pe=P;else{var V=R.return;V!==null?(pe=V,ql(V)):pe=null}break e}}ze=0,Wn=null,es(e,n,d,5);break;case 6:ze=0,Wn=null,es(e,n,d,6);break;case 8:wf(),Ye=6;break t;default:throw Error(s(462))}}Qx();break}catch(ut){xg(e,ut)}while(!0);return Fi=ir=null,w.H=o,w.A=c,ke=a,pe!==null?0:(Fe=null,ye=0,ml(),Ye)}function Qx(){for(;pe!==null&&!b();)Eg(pe)}function Eg(e){var n=Xm(e.alternate,e,Wi);e.memoizedProps=e.pendingProps,n===null?ql(e):pe=n}function Mg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Fm(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=Fm(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:Oc(n);default:mg(a,n),n=pe=dg(n,Wi),n=Xm(a,n,Wi)}e.memoizedProps=e.pendingProps,n===null?ql(e):pe=n}function es(e,n,a,o){Fi=ir=null,Oc(n),Vr=null,no=0;var c=n.return;try{if(zx(e,c,n,a,ye)){Ye=1,Pl(e,Qn(a,e.current)),pe=null;return}}catch(d){if(c!==null)throw pe=c,d;Ye=1,Pl(e,Qn(a,e.current)),pe=null;return}n.flags&32768?(be||o===1?e=!0:$r||(ye&536870912)!==0?e=!1:(Xi=e=!0,(o===2||o===3||o===6)&&(o=ti.current,o!==null&&o.tag===13&&(o.flags|=16384))),Tg(n,e)):ql(n)}function ql(e){var n=e;do{if((n.flags&32768)!==0){Tg(n,Xi);return}e=n.return;var a=Xx(n.alternate,n,Wi);if(a!==null){pe=a;return}if(n=n.sibling,n!==null){pe=n;return}pe=n=e}while(n!==null);Ye===0&&(Ye=5)}function Tg(e,n){do{var a=Wx(e.alternate,e);if(a!==null){a.flags&=32767,pe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){pe=e;return}pe=e=a}while(e!==null);Ye=6,pe=null}function bg(e,n,a,o,c,d,E,R,P,V){var ut=w.T,vt=q.p;try{q.p=2,w.T=null,$x(e,n,a,o,vt,c,d,E,R,P,V)}finally{w.T=ut,q.p=vt}}function $x(e,n,a,o,c,d,E,R){do ns();while(lr!==null);if((ke&6)!==0)throw Error(s(327));var P=e.finishedWork;if(o=e.finishedLanes,P===null)return null;if(e.finishedWork=null,e.finishedLanes=0,P===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var V=P.lanes|P.childLanes;if(V|=xc,rl(e,o,V,d,E,R),e===Fe&&(pe=Fe=null,ye=0),(P.subtreeFlags&10256)===0&&(P.flags&10256)===0||Xl||(Xl=!0,bf=V,Af=a,nS(Dt,function(){return ns(),null})),a=(P.flags&15990)!==0,(P.subtreeFlags&15990)!==0||a?(a=w.T,w.T=null,d=q.p,q.p=2,E=ke,ke|=4,Gx(e,P),rg(P,e),Ex(kf,e.containerInfo),au=!!Vf,kf=Vf=null,e.current=P,eg(e,P.alternate,P),tt(),ke=E,q.p=d,w.T=a):e.current=P,Xl?(Xl=!1,lr=e,yo=o):Ag(e,V),V=e.pendingLanes,V===0&&(ba=null),zt(P.stateNode),bi(e),n!==null)for(c=e.onRecoverableError,P=0;P<n.length;P++)V=n[P],c(V.value,{componentStack:V.stack});return(yo&3)!==0&&ns(),V=e.pendingLanes,(o&4194218)!==0&&(V&42)!==0?e===Rf?Eo++:(Eo=0,Rf=e):Eo=0,Mo(0),null}function Ag(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ao(n)))}function ns(){if(lr!==null){var e=lr,n=bf;bf=0;var a=Dr(yo),o=w.T,c=q.p;try{if(q.p=32>a?32:a,w.T=null,lr===null)var d=!1;else{a=Af,Af=null;var E=lr,R=yo;if(lr=null,yo=0,(ke&6)!==0)throw Error(s(331));var P=ke;if(ke|=4,cg(E.current),og(E,E.current,R,a),ke=P,Mo(0,!1),Vt&&typeof Vt.onPostCommitFiberRoot=="function")try{Vt.onPostCommitFiberRoot(Kt,E)}catch{}d=!0}return d}finally{q.p=c,w.T=o,Ag(e,n)}}return!1}function Rg(e,n,a){n=Qn(a,n),n=jc(e.stateNode,n,2),e=xa(e,n,2),e!==null&&(Cn(e,2),bi(e))}function Ie(e,n,a){if(e.tag===3)Rg(e,e,a);else for(;n!==null;){if(n.tag===3){Rg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ba===null||!ba.has(o))){e=Qn(a,e),a=Dm(2),o=xa(n,a,2),o!==null&&(Um(a,o,n,e),Cn(o,2),bi(o));break}}n=n.return}}function Lf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Yx;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(yf=!0,c.add(a),e=Jx.bind(null,e,n,a),n.then(e,e))}function Jx(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Fe===e&&(ye&a)===a&&(Ye===4||Ye===3&&(ye&62914560)===ye&&300>ft()-Tf?(ke&2)===0&&ts(e,0):Ef|=a,Jr===ye&&(Jr=0)),bi(e)}function Cg(e,n){n===0&&(n=Me()),e=fa(e,n),e!==null&&(Cn(e,n),bi(e))}function tS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Cg(e,a)}function eS(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Cg(e,a)}function nS(e,n){return Wt(e,n)}var Yl=null,is=null,Nf=!1,jl=!1,Of=!1,ur=0;function bi(e){e!==is&&e.next===null&&(is===null?Yl=is=e:is=is.next=e),jl=!0,Nf||(Nf=!0,aS(iS))}function Mo(e,n){if(!Of&&jl){Of=!0;do for(var a=!1,o=Yl;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var d=0;else{var E=o.suspendedLanes,R=o.pingedLanes;d=(1<<31-jt(42|e)+1)-1,d&=c&~(E&~R),d=d&201326677?d&201326677|1:d?d|2:0}d!==0&&(a=!0,Ug(o,d))}else d=ye,d=Ut(o,o===Fe?d:0),(d&3)===0||te(o,d)||(a=!0,Ug(o,d));o=o.next}while(a);Of=!1}}function iS(){jl=Nf=!1;var e=0;ur!==0&&(dS()&&(e=ur),ur=0);for(var n=ft(),a=null,o=Yl;o!==null;){var c=o.next,d=wg(o,n);d===0?(o.next=null,a===null?Yl=c:a.next=c,c===null&&(is=a)):(a=o,(e!==0||(d&3)!==0)&&(jl=!0)),o=c}Mo(e)}function wg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var E=31-jt(d),R=1<<E,P=c[E];P===-1?((R&a)===0||(R&o)!==0)&&(c[E]=Ge(R,n)):P<=n&&(e.expiredLanes|=R),d&=~R}if(n=Fe,a=ye,a=Ut(e,e===n?a:0),o=e.callbackNode,a===0||e===n&&ze===2||e.cancelPendingCommit!==null)return o!==null&&o!==null&&L(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||te(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&L(o),Dr(a)){case 2:case 8:a=Gt;break;case 32:a=Dt;break;case 268435456:a=me;break;default:a=Dt}return o=Dg.bind(null,e),a=Wt(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&L(o),e.callbackPriority=2,e.callbackNode=null,2}function Dg(e,n){var a=e.callbackNode;if(ns()&&e.callbackNode!==a)return null;var o=ye;return o=Ut(e,e===Fe?o:0),o===0?null:(_g(e,o,n),wg(e,ft()),e.callbackNode!=null&&e.callbackNode===a?Dg.bind(null,e):null)}function Ug(e,n){if(ns())return null;_g(e,n,!0)}function aS(e){pS(function(){(ke&6)!==0?Wt(dt,e):e()})}function Pf(){return ur===0&&(ur=nn()),ur}function Lg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ll(""+e)}function Ng(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function rS(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var d=Lg((c[rn]||null).action),E=o.submitter;E&&(n=(n=E[rn]||null)?Lg(n.formAction):E.getAttribute("formAction"),n!==null&&(d=n,E=null));var R=new dl("action","action",null,o,c);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ur!==0){var P=E?Ng(c,E):new FormData(c);kc(a,{pending:!0,data:P,method:c.method,action:d},null,P)}}else typeof d=="function"&&(R.preventDefault(),P=E?Ng(c,E):new FormData(c),kc(a,{pending:!0,data:P,method:c.method,action:d},d,P))},currentTarget:c}]})}}for(var If=0;If<bp.length;If++){var Bf=bp[If],sS=Bf.toLowerCase(),oS=Bf[0].toUpperCase()+Bf.slice(1);ci(sS,"on"+oS)}ci(Sp,"onAnimationEnd"),ci(yp,"onAnimationIteration"),ci(Ep,"onAnimationStart"),ci("dblclick","onDoubleClick"),ci("focusin","onFocus"),ci("focusout","onBlur"),ci(Tx,"onTransitionRun"),ci(bx,"onTransitionStart"),ci(Ax,"onTransitionCancel"),ci(Mp,"onTransitionEnd"),Pt("onMouseEnter",["mouseout","mouseover"]),Pt("onMouseLeave",["mouseout","mouseover"]),Pt("onPointerEnter",["pointerout","pointerover"]),Pt("onPointerLeave",["pointerout","pointerover"]),At("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),At("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),At("onBeforeInput",["compositionend","keypress","textInput","paste"]),At("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),At("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),At("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(To));function Og(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var E=o.length-1;0<=E;E--){var R=o[E],P=R.instance,V=R.currentTarget;if(R=R.listener,P!==d&&c.isPropagationStopped())break t;d=R,c.currentTarget=V;try{d(c)}catch(ut){Ol(ut)}c.currentTarget=null,d=P}else for(E=0;E<o.length;E++){if(R=o[E],P=R.instance,V=R.currentTarget,R=R.listener,P!==d&&c.isPropagationStopped())break t;d=R,c.currentTarget=V;try{d(c)}catch(ut){Ol(ut)}c.currentTarget=null,d=P}}}}function xe(e,n){var a=n[Ur];a===void 0&&(a=n[Ur]=new Set);var o=e+"__bubble";a.has(o)||(Pg(n,e,2,!1),a.add(o))}function Ff(e,n,a){var o=0;n&&(o|=4),Pg(a,e,o,n)}var Zl="_reactListening"+Math.random().toString(36).slice(2);function zf(e){if(!e[Zl]){e[Zl]=!0,Y.forEach(function(a){a!=="selectionchange"&&(lS.has(a)||Ff(a,!1,e),Ff(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Zl]||(n[Zl]=!0,Ff("selectionchange",!1,n))}}function Pg(e,n,a,o){switch(a_(n)){case 2:var c=OS;break;case 8:c=PS;break;default:c=$f}a=c.bind(null,n,a,e),c=void 0,!sc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Hf(e,n,a,o,c){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var E=o.tag;if(E===3||E===4){var R=o.stateNode.containerInfo;if(R===c||R.nodeType===8&&R.parentNode===c)break;if(E===4)for(E=o.return;E!==null;){var P=E.tag;if((P===3||P===4)&&(P=E.stateNode.containerInfo,P===c||P.nodeType===8&&P.parentNode===c))return;E=E.return}for(;R!==null;){if(E=Li(R),E===null)return;if(P=E.tag,P===5||P===6||P===26||P===27){o=d=E;continue t}R=R.parentNode}}o=o.return}Kh(function(){var V=d,ut=ac(a),vt=[];t:{var et=Tp.get(e);if(et!==void 0){var ot=dl,kt=e;switch(e){case"keypress":if(cl(a)===0)break t;case"keydown":case"keyup":ot=ex;break;case"focusin":kt="focus",ot=cc;break;case"focusout":kt="blur",ot=cc;break;case"beforeblur":case"afterblur":ot=cc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Jh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=k0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=ax;break;case Sp:case yp:case Ep:ot=q0;break;case Mp:ot=sx;break;case"scroll":case"scrollend":ot=G0;break;case"wheel":ot=lx;break;case"copy":case"cut":case"paste":ot=j0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=ep;break;case"toggle":case"beforetoggle":ot=cx}var ae=(n&4)!==0,je=!ae&&(e==="scroll"||e==="scrollend"),K=ae?et!==null?et+"Capture":null:et;ae=[];for(var G=V,$;G!==null;){var mt=G;if($=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||$===null||K===null||(mt=Vs(G,K),mt!=null&&ae.push(bo(G,mt,$))),je)break;G=G.return}0<ae.length&&(et=new ot(et,kt,null,a,ut),vt.push({event:et,listeners:ae}))}}if((n&7)===0){t:{if(et=e==="mouseover"||e==="pointerover",ot=e==="mouseout"||e==="pointerout",et&&a!==ic&&(kt=a.relatedTarget||a.fromElement)&&(Li(kt)||kt[Ui]))break t;if((ot||et)&&(et=ut.window===ut?ut:(et=ut.ownerDocument)?et.defaultView||et.parentWindow:window,ot?(kt=a.relatedTarget||a.toElement,ot=V,kt=kt?Li(kt):null,kt!==null&&(je=j(kt),ae=kt.tag,kt!==je||ae!==5&&ae!==27&&ae!==6)&&(kt=null)):(ot=null,kt=V),ot!==kt)){if(ae=Jh,mt="onMouseLeave",K="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(ae=ep,mt="onPointerLeave",K="onPointerEnter",G="pointer"),je=ot==null?et:X(ot),$=kt==null?et:X(kt),et=new ae(mt,G+"leave",ot,a,ut),et.target=je,et.relatedTarget=$,mt=null,Li(ut)===V&&(ae=new ae(K,G+"enter",kt,a,ut),ae.target=$,ae.relatedTarget=je,mt=ae),je=mt,ot&&kt)e:{for(ae=ot,K=kt,G=0,$=ae;$;$=as($))G++;for($=0,mt=K;mt;mt=as(mt))$++;for(;0<G-$;)ae=as(ae),G--;for(;0<$-G;)K=as(K),$--;for(;G--;){if(ae===K||K!==null&&ae===K.alternate)break e;ae=as(ae),K=as(K)}ae=null}else ae=null;ot!==null&&Ig(vt,et,ot,ae,!1),kt!==null&&je!==null&&Ig(vt,je,kt,ae,!0)}}t:{if(et=V?X(V):window,ot=et.nodeName&&et.nodeName.toLowerCase(),ot==="select"||ot==="input"&&et.type==="file")var Ht=up;else if(op(et))if(cp)Ht=Sx;else{Ht=vx;var he=_x}else ot=et.nodeName,!ot||ot.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?V&&nc(V.elementType)&&(Ht=up):Ht=xx;if(Ht&&(Ht=Ht(e,V))){lp(vt,Ht,a,ut);break t}he&&he(e,et,V),e==="focusout"&&V&&et.type==="number"&&V.memoizedProps.value!=null&&yn(et,"number",et.value)}switch(he=V?X(V):window,e){case"focusin":(op(he)||he.contentEditable==="true")&&(Ir=he,gc=V,Ks=null);break;case"focusout":Ks=gc=Ir=null;break;case"mousedown":_c=!0;break;case"contextmenu":case"mouseup":case"dragend":_c=!1,vp(vt,a,ut);break;case"selectionchange":if(Mx)break;case"keydown":case"keyup":vp(vt,a,ut)}var qt;if(dc)t:{switch(e){case"compositionstart":var Jt="onCompositionStart";break t;case"compositionend":Jt="onCompositionEnd";break t;case"compositionupdate":Jt="onCompositionUpdate";break t}Jt=void 0}else Pr?rp(e,a)&&(Jt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Jt="onCompositionStart");Jt&&(np&&a.locale!=="ko"&&(Pr||Jt!=="onCompositionStart"?Jt==="onCompositionEnd"&&Pr&&(qt=Qh()):(ca=ut,oc="value"in ca?ca.value:ca.textContent,Pr=!0)),he=Kl(V,Jt),0<he.length&&(Jt=new tp(Jt,e,null,a,ut),vt.push({event:Jt,listeners:he}),qt?Jt.data=qt:(qt=sp(a),qt!==null&&(Jt.data=qt)))),(qt=dx?hx(e,a):px(e,a))&&(Jt=Kl(V,"onBeforeInput"),0<Jt.length&&(he=new tp("onBeforeInput","beforeinput",null,a,ut),vt.push({event:he,listeners:Jt}),he.data=qt)),rS(vt,e,V,a,ut)}Og(vt,n)})}function bo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Kl(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,d=c.stateNode;c=c.tag,c!==5&&c!==26&&c!==27||d===null||(c=Vs(e,a),c!=null&&o.unshift(bo(e,c,d)),c=Vs(e,n),c!=null&&o.push(bo(e,c,d))),e=e.return}return o}function as(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ig(e,n,a,o,c){for(var d=n._reactName,E=[];a!==null&&a!==o;){var R=a,P=R.alternate,V=R.stateNode;if(R=R.tag,P!==null&&P===o)break;R!==5&&R!==26&&R!==27||V===null||(P=V,c?(V=Vs(a,d),V!=null&&E.unshift(bo(a,V,P))):c||(V=Vs(a,d),V!=null&&E.push(bo(a,V,P)))),a=a.return}E.length!==0&&e.push({event:n,listeners:E})}var uS=/\r\n?/g,cS=/\u0000|\uFFFD/g;function Bg(e){return(typeof e=="string"?e:""+e).replace(uS,`
`).replace(cS,"")}function Fg(e,n){return n=Bg(n),Bg(e)===n}function Ql(){}function Ne(e,n,a,o,c,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Pn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Pn(e,""+o);break;case"className":He(e,"class",o);break;case"tabIndex":He(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":He(e,a,o);break;case"style":jh(e,o,d);break;case"data":if(n!=="object"){He(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ll(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Ne(e,n,"name",c.name,c,null),Ne(e,n,"formEncType",c.formEncType,c,null),Ne(e,n,"formMethod",c.formMethod,c,null),Ne(e,n,"formTarget",c.formTarget,c,null)):(Ne(e,n,"encType",c.encType,c,null),Ne(e,n,"method",c.method,c,null),Ne(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ll(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Ql);break;case"onScroll":o!=null&&xe("scroll",e);break;case"onScrollEnd":o!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ll(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":xe("beforetoggle",e),xe("toggle",e),_e(e,"popover",o);break;case"xlinkActuate":Te(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Te(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Te(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Te(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Te(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Te(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Te(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Te(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Te(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":_e(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=z0.get(a)||a,_e(e,a,o))}}function Gf(e,n,a,o,c,d){switch(a){case"style":jh(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Pn(e,o):(typeof o=="number"||typeof o=="bigint")&&Pn(e,""+o);break;case"onScroll":o!=null&&xe("scroll",e);break;case"onScrollEnd":o!=null&&xe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Ql);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Et.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),d=e[rn]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,c),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,c);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):_e(e,a,o)}}}function Sn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var o=!1,c=!1,d;for(d in a)if(a.hasOwnProperty(d)){var E=a[d];if(E!=null)switch(d){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ne(e,n,d,E,a,null)}}c&&Ne(e,n,"srcSet",a.srcSet,a,null),o&&Ne(e,n,"src",a.src,a,null);return;case"input":xe("invalid",e);var R=d=E=c=null,P=null,V=null;for(o in a)if(a.hasOwnProperty(o)){var ut=a[o];if(ut!=null)switch(o){case"name":c=ut;break;case"type":E=ut;break;case"checked":P=ut;break;case"defaultChecked":V=ut;break;case"value":d=ut;break;case"defaultValue":R=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:Ne(e,n,o,ut,a,null)}}Dn(e,d,R,P,V,E,c,!1),ve(e);return;case"select":xe("invalid",e),o=E=d=null;for(c in a)if(a.hasOwnProperty(c)&&(R=a[c],R!=null))switch(c){case"value":d=R;break;case"defaultValue":E=R;break;case"multiple":o=R;default:Ne(e,n,c,R,a,null)}n=d,a=E,e.multiple=!!o,n!=null?We(e,!!o,n,!1):a!=null&&We(e,!!o,a,!0);return;case"textarea":xe("invalid",e),d=c=o=null;for(E in a)if(a.hasOwnProperty(E)&&(R=a[E],R!=null))switch(E){case"value":o=R;break;case"defaultValue":c=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Ne(e,n,E,R,a,null)}Lr(e,o,c,d),ve(e);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(o=a[P],o!=null))switch(P){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ne(e,n,P,o,a,null)}return;case"dialog":xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(o=0;o<To.length;o++)xe(To[o],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(V in a)if(a.hasOwnProperty(V)&&(o=a[V],o!=null))switch(V){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ne(e,n,V,o,a,null)}return;default:if(nc(n)){for(ut in a)a.hasOwnProperty(ut)&&(o=a[ut],o!==void 0&&Gf(e,n,ut,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Ne(e,n,R,o,a,null))}function fS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,d=null,E=null,R=null,P=null,V=null,ut=null;for(ot in a){var vt=a[ot];if(a.hasOwnProperty(ot)&&vt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":P=vt;default:o.hasOwnProperty(ot)||Ne(e,n,ot,null,o,vt)}}for(var et in o){var ot=o[et];if(vt=a[et],o.hasOwnProperty(et)&&(ot!=null||vt!=null))switch(et){case"type":d=ot;break;case"name":c=ot;break;case"checked":V=ot;break;case"defaultChecked":ut=ot;break;case"value":E=ot;break;case"defaultValue":R=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:ot!==vt&&Ne(e,n,et,ot,o,vt)}}Ue(e,E,R,P,V,ut,d,c);return;case"select":ot=E=R=et=null;for(d in a)if(P=a[d],a.hasOwnProperty(d)&&P!=null)switch(d){case"value":break;case"multiple":ot=P;default:o.hasOwnProperty(d)||Ne(e,n,d,null,o,P)}for(c in o)if(d=o[c],P=a[c],o.hasOwnProperty(c)&&(d!=null||P!=null))switch(c){case"value":et=d;break;case"defaultValue":R=d;break;case"multiple":E=d;default:d!==P&&Ne(e,n,c,d,o,P)}n=R,a=E,o=ot,et!=null?We(e,!!a,et,!1):!!o!=!!a&&(n!=null?We(e,!!a,n,!0):We(e,!!a,a?[]:"",!1));return;case"textarea":ot=et=null;for(R in a)if(c=a[R],a.hasOwnProperty(R)&&c!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Ne(e,n,R,null,o,c)}for(E in o)if(c=o[E],d=a[E],o.hasOwnProperty(E)&&(c!=null||d!=null))switch(E){case"value":et=c;break;case"defaultValue":ot=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==d&&Ne(e,n,E,c,o,d)}_n(e,et,ot);return;case"option":for(var kt in a)if(et=a[kt],a.hasOwnProperty(kt)&&et!=null&&!o.hasOwnProperty(kt))switch(kt){case"selected":e.selected=!1;break;default:Ne(e,n,kt,null,o,et)}for(P in o)if(et=o[P],ot=a[P],o.hasOwnProperty(P)&&et!==ot&&(et!=null||ot!=null))switch(P){case"selected":e.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:Ne(e,n,P,et,o,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in a)et=a[ae],a.hasOwnProperty(ae)&&et!=null&&!o.hasOwnProperty(ae)&&Ne(e,n,ae,null,o,et);for(V in o)if(et=o[V],ot=a[V],o.hasOwnProperty(V)&&et!==ot&&(et!=null||ot!=null))switch(V){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(s(137,n));break;default:Ne(e,n,V,et,o,ot)}return;default:if(nc(n)){for(var je in a)et=a[je],a.hasOwnProperty(je)&&et!==void 0&&!o.hasOwnProperty(je)&&Gf(e,n,je,void 0,o,et);for(ut in o)et=o[ut],ot=a[ut],!o.hasOwnProperty(ut)||et===ot||et===void 0&&ot===void 0||Gf(e,n,ut,et,o,ot);return}}for(var K in a)et=a[K],a.hasOwnProperty(K)&&et!=null&&!o.hasOwnProperty(K)&&Ne(e,n,K,null,o,et);for(vt in o)et=o[vt],ot=a[vt],!o.hasOwnProperty(vt)||et===ot||et==null&&ot==null||Ne(e,n,vt,et,o,ot)}var Vf=null,kf=null;function $l(e){return e.nodeType===9?e:e.ownerDocument}function zg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Hg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Xf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Wf=null;function dS(){var e=window.event;return e&&e.type==="popstate"?e===Wf?!1:(Wf=e,!0):(Wf=null,!1)}var Gg=typeof setTimeout=="function"?setTimeout:void 0,hS=typeof clearTimeout=="function"?clearTimeout:void 0,Vg=typeof Promise=="function"?Promise:void 0,pS=typeof queueMicrotask=="function"?queueMicrotask:typeof Vg<"u"?function(e){return Vg.resolve(null).then(e).catch(mS)}:Gg;function mS(e){setTimeout(function(){throw e})}function qf(e,n){var a=n,o=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"){if(o===0){e.removeChild(c),No(n);return}o--}else a!=="$"&&a!=="$?"&&a!=="$!"||o++;a=c}while(a);No(n)}function Yf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Yf(a),Gs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function gS(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Xa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==c.rel||e.getAttribute("href")!==(c.href==null?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=hi(e.nextSibling),e===null)break}return null}function _S(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=hi(e.nextSibling),e===null))return null;return e}function hi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}function kg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Xg(e,n,a){switch(n=$l(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}var ri=new Map,Wg=new Set;function Jl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var Yi=q.d;q.d={f:vS,r:xS,D:SS,C:yS,L:ES,m:MS,X:bS,S:TS,M:AS};function vS(){var e=Yi.f(),n=Wl();return e||n}function xS(e){var n=C(e);n!==null&&n.tag===5&&n.type==="form"?vm(n):Yi.r(e)}var rs=typeof document>"u"?null:document;function qg(e,n,a){var o=rs;if(o&&typeof n=="string"&&n){var c=fn(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Wg.has(c)||(Wg.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Sn(n,"link",e),Q(n),o.head.appendChild(n)))}}function SS(e){Yi.D(e),qg("dns-prefetch",e,null)}function yS(e,n){Yi.C(e,n),qg("preconnect",e,n)}function ES(e,n,a){Yi.L(e,n,a);var o=rs;if(o&&e&&n){var c='link[rel="preload"][as="'+fn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+fn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+fn(a.imageSizes)+'"]')):c+='[href="'+fn(e)+'"]';var d=c;switch(n){case"style":d=ss(e);break;case"script":d=os(e)}ri.has(d)||(e=A({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ri.set(d,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(Ao(d))||n==="script"&&o.querySelector(Ro(d))||(n=o.createElement("link"),Sn(n,"link",e),Q(n),o.head.appendChild(n)))}}function MS(e,n){Yi.m(e,n);var a=rs;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+fn(o)+'"][href="'+fn(e)+'"]',d=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=os(e)}if(!ri.has(d)&&(e=A({rel:"modulepreload",href:e},n),ri.set(d,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ro(d)))return}o=a.createElement("link"),Sn(o,"link",e),Q(o),a.head.appendChild(o)}}}function TS(e,n,a){Yi.S(e,n,a);var o=rs;if(o&&e){var c=J(o).hoistableStyles,d=ss(e);n=n||"default";var E=c.get(d);if(!E){var R={loading:0,preload:null};if(E=o.querySelector(Ao(d)))R.loading=5;else{e=A({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ri.get(d))&&jf(e,a);var P=E=o.createElement("link");Q(P),Sn(P,"link",e),P._p=new Promise(function(V,ut){P.onload=V,P.onerror=ut}),P.addEventListener("load",function(){R.loading|=1}),P.addEventListener("error",function(){R.loading|=2}),R.loading|=4,tu(E,n,o)}E={type:"stylesheet",instance:E,count:1,state:R},c.set(d,E)}}}function bS(e,n){Yi.X(e,n);var a=rs;if(a&&e){var o=J(a).hoistableScripts,c=os(e),d=o.get(c);d||(d=a.querySelector(Ro(c)),d||(e=A({src:e,async:!0},n),(n=ri.get(c))&&Zf(e,n),d=a.createElement("script"),Q(d),Sn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function AS(e,n){Yi.M(e,n);var a=rs;if(a&&e){var o=J(a).hoistableScripts,c=os(e),d=o.get(c);d||(d=a.querySelector(Ro(c)),d||(e=A({src:e,async:!0,type:"module"},n),(n=ri.get(c))&&Zf(e,n),d=a.createElement("script"),Q(d),Sn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function Yg(e,n,a,o){var c=(c=re.current)?Jl(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ss(a.href),a=J(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ss(a.href);var d=J(c).hoistableStyles,E=d.get(e);if(E||(c=c.ownerDocument||c,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,E),(d=c.querySelector(Ao(e)))&&!d._p&&(E.instance=d,E.state.loading=5),ri.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ri.set(e,a),d||RS(c,e,a,E.state))),n&&o===null)throw Error(s(528,""));return E}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=os(a),a=J(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function ss(e){return'href="'+fn(e)+'"'}function Ao(e){return'link[rel="stylesheet"]['+e+"]"}function jg(e){return A({},e,{"data-precedence":e.precedence,precedence:null})}function RS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Sn(n,"link",a),Q(n),e.head.appendChild(n))}function os(e){return'[src="'+fn(e)+'"]'}function Ro(e){return"script[async]"+e}function Zg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+fn(a.href)+'"]');if(o)return n.instance=o,Q(o),o;var c=A({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Q(o),Sn(o,"style",c),tu(o,a.precedence,e),n.instance=o;case"stylesheet":c=ss(a.href);var d=e.querySelector(Ao(c));if(d)return n.state.loading|=4,n.instance=d,Q(d),d;o=jg(a),(c=ri.get(c))&&jf(o,c),d=(e.ownerDocument||e).createElement("link"),Q(d);var E=d;return E._p=new Promise(function(R,P){E.onload=R,E.onerror=P}),Sn(d,"link",o),n.state.loading|=4,tu(d,a.precedence,e),n.instance=d;case"script":return d=os(a.src),(c=e.querySelector(Ro(d)))?(n.instance=c,Q(c),c):(o=a,(c=ri.get(d))&&(o=A({},a),Zf(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),Q(c),Sn(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,tu(o,a.precedence,e));return n.instance}function tu(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,d=c,E=0;E<o.length;E++){var R=o[E];if(R.dataset.precedence===n)d=R;else if(d!==c)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function jf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Zf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var eu=null;function Kg(e,n,a){if(eu===null){var o=new Map,c=eu=new Map;c.set(a,o)}else c=eu,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var d=a[c];if(!(d[Xa]||d[an]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var E=d.getAttribute(n)||"";E=e+E;var R=o.get(E);R?R.push(d):o.set(E,[d])}}return o}function Qg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function CS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function $g(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Co=null;function wS(){}function DS(e,n,a){if(Co===null)throw Error(s(475));var o=Co;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=ss(a.href),d=e.querySelector(Ao(c));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=nu.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=d,Q(d);return}d=e.ownerDocument||e,a=jg(a),(c=ri.get(c))&&jf(a,c),d=d.createElement("link"),Q(d);var E=d;E._p=new Promise(function(R,P){E.onload=R,E.onerror=P}),Sn(d,"link",a),n.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=nu.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function US(){if(Co===null)throw Error(s(475));var e=Co;return e.stylesheets&&e.count===0&&Kf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Kf(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function nu(){if(this.count--,this.count===0){if(this.stylesheets)Kf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var iu=null;function Kf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,iu=new Map,n.forEach(LS,e),iu=null,nu.call(e))}function LS(e,n){if(!(n.state.loading&4)){var a=iu.get(e);if(a)var o=a.get(null);else{a=new Map,iu.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<c.length;d++){var E=c[d];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(a.set(E.dataset.precedence,E),o=E)}o&&a.set(null,o)}c=n.instance,E=c.getAttribute("data-precedence"),d=a.get(E)||o,d===o&&a.set(null,c),a.set(E,c),this.count++,o=nu.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),d?d.parentNode.insertBefore(c,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var wo={$$typeof:S,Provider:null,Consumer:null,_currentValue:pt,_currentValue2:pt,_threadCount:0};function NS(e,n,a,o,c,d,E,R){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rn(0),this.hiddenUpdates=Rn(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=d,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function Jg(e,n,a,o,c,d,E,R,P,V,ut,vt){return e=new NS(e,n,a,E,R,P,V,vt),n=1,d===!0&&(n|=24),d=ii(3,null,null,n),e.current=d,d.stateNode=e,n=Rc(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},lf(d),e}function t_(e){return e?(e=zr,e):zr}function e_(e,n,a,o,c,d){c=t_(c),o.context===null?o.context=c:o.pendingContext=c,o=va(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=xa(e,o,n),a!==null&&(Ln(a,e,n),fo(a,e,n))}function n_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Qf(e,n){n_(e,n),(e=e.alternate)&&n_(e,n)}function i_(e){if(e.tag===13){var n=fa(e,67108864);n!==null&&Ln(n,e,67108864),Qf(e,67108864)}}var au=!0;function OS(e,n,a,o){var c=w.T;w.T=null;var d=q.p;try{q.p=2,$f(e,n,a,o)}finally{q.p=d,w.T=c}}function PS(e,n,a,o){var c=w.T;w.T=null;var d=q.p;try{q.p=8,$f(e,n,a,o)}finally{q.p=d,w.T=c}}function $f(e,n,a,o){if(au){var c=Jf(o);if(c===null)Hf(e,n,o,ru,a),r_(e,o);else if(BS(c,e,n,a,o))o.stopPropagation();else if(r_(e,o),n&4&&-1<IS.indexOf(e)){for(;c!==null;){var d=C(c);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var E=wt(d.pendingLanes);if(E!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;E;){var P=1<<31-jt(E);R.entanglements[1]|=P,E&=~P}bi(d),(ke&6)===0&&(Vl=ft()+500,Mo(0))}}break;case 13:R=fa(d,2),R!==null&&Ln(R,d,2),Wl(),Qf(d,2)}if(d=Jf(o),d===null&&Hf(e,n,o,ru,a),d===c)break;c=d}c!==null&&o.stopPropagation()}else Hf(e,n,o,null,a)}}function Jf(e){return e=ac(e),td(e)}var ru=null;function td(e){if(ru=null,e=Li(e),e!==null){var n=j(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=yt(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ru=e,null}function a_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xt()){case dt:return 2;case Gt:return 8;case Dt:case Bt:return 32;case me:return 268435456;default:return 32}default:return 32}}var ed=!1,Aa=null,Ra=null,Ca=null,Do=new Map,Uo=new Map,wa=[],IS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function r_(e,n){switch(e){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":Ra=null;break;case"mouseover":case"mouseout":Ca=null;break;case"pointerover":case"pointerout":Do.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uo.delete(n.pointerId)}}function Lo(e,n,a,o,c,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[c]},n!==null&&(n=C(n),n!==null&&i_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function BS(e,n,a,o,c){switch(n){case"focusin":return Aa=Lo(Aa,e,n,a,o,c),!0;case"dragenter":return Ra=Lo(Ra,e,n,a,o,c),!0;case"mouseover":return Ca=Lo(Ca,e,n,a,o,c),!0;case"pointerover":var d=c.pointerId;return Do.set(d,Lo(Do.get(d)||null,e,n,a,o,c)),!0;case"gotpointercapture":return d=c.pointerId,Uo.set(d,Lo(Uo.get(d)||null,e,n,a,o,c)),!0}return!1}function s_(e){var n=Li(e.target);if(n!==null){var a=j(n);if(a!==null){if(n=a.tag,n===13){if(n=yt(a),n!==null){e.blockedOn=n,sl(e.priority,function(){if(a.tag===13){var o=qn(),c=fa(a,o);c!==null&&Ln(c,a,o),Qf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function su(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Jf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);ic=o,a.target.dispatchEvent(o),ic=null}else return n=C(a),n!==null&&i_(n),e.blockedOn=a,!1;n.shift()}return!0}function o_(e,n,a){su(e)&&a.delete(n)}function FS(){ed=!1,Aa!==null&&su(Aa)&&(Aa=null),Ra!==null&&su(Ra)&&(Ra=null),Ca!==null&&su(Ca)&&(Ca=null),Do.forEach(o_),Uo.forEach(o_)}function ou(e,n){e.blockedOn===n&&(e.blockedOn=null,ed||(ed=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,FS)))}var lu=null;function l_(e){lu!==e&&(lu=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){lu===e&&(lu=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(td(o||a)===null)continue;break}var d=C(a);d!==null&&(e.splice(n,3),n-=3,kc(d,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function No(e){function n(P){return ou(P,e)}Aa!==null&&ou(Aa,e),Ra!==null&&ou(Ra,e),Ca!==null&&ou(Ca,e),Do.forEach(n),Uo.forEach(n);for(var a=0;a<wa.length;a++){var o=wa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<wa.length&&(a=wa[0],a.blockedOn===null);)s_(a),a.blockedOn===null&&wa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],d=a[o+1],E=c[rn]||null;if(typeof d=="function")E||l_(a);else if(E){var R=null;if(d&&d.hasAttribute("formAction")){if(c=d,E=d[rn]||null)R=E.formAction;else if(td(c)!==null)continue}else R=E.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),l_(a)}}}function nd(e){this._internalRoot=e}uu.prototype.render=nd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=qn();e_(a,o,e,n,null,null)},uu.prototype.unmount=nd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;e.tag===0&&ns(),e_(e.current,2,null,e,null,null),Wl(),n[Ui]=null}};function uu(e){this._internalRoot=e}uu.prototype.unstable_scheduleHydration=function(e){if(e){var n=Hs();e={blockedOn:null,target:e,priority:n};for(var a=0;a<wa.length&&n!==0&&n<wa[a].priority;a++);wa.splice(a,0,e),a===0&&s_(e)}};var u_=t.version;if(u_!=="19.0.0")throw Error(s(527,u_,"19.0.0"));q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=nt(n),e=e!==null?Tt(e):null,e=e===null?null:e.stateNode,e};var zS={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:w,findFiberByHostInstance:Li,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cu.isDisabled&&cu.supportsFiber)try{Kt=cu.inject(zS),Vt=cu}catch{}}return Po.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",c=Am,d=Rm,E=Cm,R=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(E=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(R=n.unstable_transitionCallbacks)),n=Jg(e,1,!1,null,null,a,o,c,d,E,R,null),e[Ui]=n.current,zf(e.nodeType===8?e.parentNode:e),new nd(n)},Po.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,c="",d=Am,E=Rm,R=Cm,P=null,V=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(E=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&(V=a.formState)),n=Jg(e,1,!0,n,a??null,o,c,d,E,R,P,V),n.context=t_(null),a=n.current,o=qn(),c=va(o),c.callback=null,xa(a,c,o),n.current.lanes=o,Cn(n,o),bi(n),e[Ui]=n.current,zf(e),new uu(n)},Po.version="19.0.0",Po}var x_;function ZS(){if(x_)return rd.exports;x_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),rd.exports=jS(),rd.exports}var KS=ZS(),Io={},S_;function QS(){if(S_)return Io;S_=1,Object.defineProperty(Io,"__esModule",{value:!0}),Io.parse=f,Io.serialize=m;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,u=(()=>{const v=function(){};return v.prototype=Object.create(null),v})();function f(v,S){const M=new u,T=v.length;if(T<2)return M;const y=(S==null?void 0:S.decode)||g;let _=0;do{const O=v.indexOf("=",_);if(O===-1)break;const U=v.indexOf(";",_),D=U===-1?T:U;if(O>D){_=v.lastIndexOf(";",O-1)+1;continue}const F=h(v,_,O),H=p(v,O,F),B=v.slice(F,H);if(M[B]===void 0){let Z=h(v,O+1,D),w=p(v,D,Z);const A=y(v.slice(Z,w));M[B]=A}_=D+1}while(_<T);return M}function h(v,S,M){do{const T=v.charCodeAt(S);if(T!==32&&T!==9)return S}while(++S<M);return M}function p(v,S,M){for(;S>M;){const T=v.charCodeAt(--S);if(T!==32&&T!==9)return S+1}return M}function m(v,S,M){const T=(M==null?void 0:M.encode)||encodeURIComponent;if(!r.test(v))throw new TypeError(`argument name is invalid: ${v}`);const y=T(S);if(!t.test(y))throw new TypeError(`argument val is invalid: ${S}`);let _=v+"="+y;if(!M)return _;if(M.maxAge!==void 0){if(!Number.isInteger(M.maxAge))throw new TypeError(`option maxAge is invalid: ${M.maxAge}`);_+="; Max-Age="+M.maxAge}if(M.domain){if(!i.test(M.domain))throw new TypeError(`option domain is invalid: ${M.domain}`);_+="; Domain="+M.domain}if(M.path){if(!s.test(M.path))throw new TypeError(`option path is invalid: ${M.path}`);_+="; Path="+M.path}if(M.expires){if(!x(M.expires)||!Number.isFinite(M.expires.valueOf()))throw new TypeError(`option expires is invalid: ${M.expires}`);_+="; Expires="+M.expires.toUTCString()}if(M.httpOnly&&(_+="; HttpOnly"),M.secure&&(_+="; Secure"),M.partitioned&&(_+="; Partitioned"),M.priority)switch(typeof M.priority=="string"?M.priority.toLowerCase():void 0){case"low":_+="; Priority=Low";break;case"medium":_+="; Priority=Medium";break;case"high":_+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${M.priority}`)}if(M.sameSite)switch(typeof M.sameSite=="string"?M.sameSite.toLowerCase():M.sameSite){case!0:case"strict":_+="; SameSite=Strict";break;case"lax":_+="; SameSite=Lax";break;case"none":_+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${M.sameSite}`)}return _}function g(v){if(v.indexOf("%")===-1)return v;try{return decodeURIComponent(v)}catch{return v}}function x(v){return l.call(v)==="[object Date]"}return Io}QS();/**
 * react-router v7.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var y_="popstate";function $S(r={}){function t(s,l){let{pathname:u,search:f,hash:h}=s.location;return Gd("",{pathname:u,search:f,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(s,l){return typeof l=="string"?l:qo(l)}return ty(t,i,null,r)}function Xe(r,t){if(r===!1||r===null||typeof r>"u")throw new Error(t)}function wi(r,t){if(!r){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function JS(){return Math.random().toString(36).substring(2,10)}function E_(r,t){return{usr:r.state,key:r.key,idx:t}}function Gd(r,t,i=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof t=="string"?Ps(t):t,state:i,key:t&&t.key||s||JS()}}function qo({pathname:r="/",search:t="",hash:i=""}){return t&&t!=="?"&&(r+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function Ps(r){let t={};if(r){let i=r.indexOf("#");i>=0&&(t.hash=r.substring(i),r=r.substring(0,i));let s=r.indexOf("?");s>=0&&(t.search=r.substring(s),r=r.substring(0,s)),r&&(t.pathname=r)}return t}function ty(r,t,i,s={}){let{window:l=document.defaultView,v5Compat:u=!1}=s,f=l.history,h="POP",p=null,m=g();m==null&&(m=0,f.replaceState({...f.state,idx:m},""));function g(){return(f.state||{idx:null}).idx}function x(){h="POP";let y=g(),_=y==null?null:y-m;m=y,p&&p({action:h,location:T.location,delta:_})}function v(y,_){h="PUSH";let O=Gd(T.location,y,_);m=g()+1;let U=E_(O,m),D=T.createHref(O);try{f.pushState(U,"",D)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;l.location.assign(D)}u&&p&&p({action:h,location:T.location,delta:1})}function S(y,_){h="REPLACE";let O=Gd(T.location,y,_);m=g();let U=E_(O,m),D=T.createHref(O);f.replaceState(U,"",D),u&&p&&p({action:h,location:T.location,delta:0})}function M(y){let _=l.location.origin!=="null"?l.location.origin:l.location.href,O=typeof y=="string"?y:qo(y);return O=O.replace(/ $/,"%20"),Xe(_,`No window.location.(origin|href) available to create URL for href: ${O}`),new URL(O,_)}let T={get action(){return h},get location(){return r(l,f)},listen(y){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(y_,x),p=y,()=>{l.removeEventListener(y_,x),p=null}},createHref(y){return t(l,y)},createURL:M,encodeLocation(y){let _=M(y);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:v,replace:S,go(y){return f.go(y)}};return T}function zv(r,t,i="/"){return ey(r,t,i,!1)}function ey(r,t,i,s){let l=typeof t=="string"?Ps(t):t,u=sa(l.pathname||"/",i);if(u==null)return null;let f=Hv(r);ny(f);let h=null;for(let p=0;h==null&&p<f.length;++p){let m=hy(u);h=fy(f[p],m,s)}return h}function Hv(r,t=[],i=[],s=""){let l=(u,f,h)=>{let p={relativePath:h===void 0?u.path||"":h,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};p.relativePath.startsWith("/")&&(Xe(p.relativePath.startsWith(s),`Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(s.length));let m=aa([s,p.relativePath]),g=i.concat(p);u.children&&u.children.length>0&&(Xe(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Hv(u.children,t,g,m)),!(u.path==null&&!u.index)&&t.push({path:m,score:uy(m,u.index),routesMeta:g})};return r.forEach((u,f)=>{var h;if(u.path===""||!((h=u.path)!=null&&h.includes("?")))l(u,f);else for(let p of Gv(u.path))l(u,f,p)}),t}function Gv(r){let t=r.split("/");if(t.length===0)return[];let[i,...s]=t,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(s.length===0)return l?[u,""]:[u];let f=Gv(s.join("/")),h=[];return h.push(...f.map(p=>p===""?u:[u,p].join("/"))),l&&h.push(...f),h.map(p=>r.startsWith("/")&&p===""?"/":p)}function ny(r){r.sort((t,i)=>t.score!==i.score?i.score-t.score:cy(t.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var iy=/^:[\w-]+$/,ay=3,ry=2,sy=1,oy=10,ly=-2,M_=r=>r==="*";function uy(r,t){let i=r.split("/"),s=i.length;return i.some(M_)&&(s+=ly),t&&(s+=ry),i.filter(l=>!M_(l)).reduce((l,u)=>l+(iy.test(u)?ay:u===""?sy:oy),s)}function cy(r,t){return r.length===t.length&&r.slice(0,-1).every((s,l)=>s===t[l])?r[r.length-1]-t[t.length-1]:0}function fy(r,t,i=!1){let{routesMeta:s}=r,l={},u="/",f=[];for(let h=0;h<s.length;++h){let p=s[h],m=h===s.length-1,g=u==="/"?t:t.slice(u.length)||"/",x=Xu({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},g),v=p.route;if(!x&&m&&i&&!s[s.length-1].route.index&&(x=Xu({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!x)return null;Object.assign(l,x.params),f.push({params:l,pathname:aa([u,x.pathname]),pathnameBase:_y(aa([u,x.pathnameBase])),route:v}),x.pathnameBase!=="/"&&(u=aa([u,x.pathnameBase]))}return f}function Xu(r,t){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,s]=dy(r.path,r.caseSensitive,r.end),l=t.match(i);if(!l)return null;let u=l[0],f=u.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:s.reduce((m,{paramName:g,isOptional:x},v)=>{if(g==="*"){let M=h[v]||"";f=u.slice(0,u.length-M.length).replace(/(.)\/+$/,"$1")}const S=h[v];return x&&!S?m[g]=void 0:m[g]=(S||"").replace(/%2F/g,"/"),m},{}),pathname:u,pathnameBase:f,pattern:r}}function dy(r,t=!1,i=!0){wi(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,p)=>(s.push({paramName:h,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),s]}function hy(r){try{return r.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return wi(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),r}}function sa(r,t){if(t==="/")return r;if(!r.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,s=r.charAt(i);return s&&s!=="/"?null:r.slice(i)||"/"}function py(r,t="/"){let{pathname:i,search:s="",hash:l=""}=typeof r=="string"?Ps(r):r;return{pathname:i?i.startsWith("/")?i:my(i,t):t,search:vy(s),hash:xy(l)}}function my(r,t){let i=t.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function ud(r,t,i,s){return`Cannot include a '${r}' character in a manually specified \`to.${t}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function gy(r){return r.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function Vv(r){let t=gy(r);return t.map((i,s)=>s===t.length-1?i.pathname:i.pathnameBase)}function kv(r,t,i,s=!1){let l;typeof r=="string"?l=Ps(r):(l={...r},Xe(!l.pathname||!l.pathname.includes("?"),ud("?","pathname","search",l)),Xe(!l.pathname||!l.pathname.includes("#"),ud("#","pathname","hash",l)),Xe(!l.search||!l.search.includes("#"),ud("#","search","hash",l)));let u=r===""||l.pathname==="",f=u?"/":l.pathname,h;if(f==null)h=i;else{let x=t.length-1;if(!s&&f.startsWith("..")){let v=f.split("/");for(;v[0]==="..";)v.shift(),x-=1;l.pathname=v.join("/")}h=x>=0?t[x]:"/"}let p=py(l,h),m=f&&f!=="/"&&f.endsWith("/"),g=(u||f===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(m||g)&&(p.pathname+="/"),p}var aa=r=>r.join("/").replace(/\/\/+/g,"/"),_y=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),vy=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,xy=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function Sy(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var Xv=["POST","PUT","PATCH","DELETE"];new Set(Xv);var yy=["GET",...Xv];new Set(yy);var Is=lt.createContext(null);Is.displayName="DataRouter";var ju=lt.createContext(null);ju.displayName="DataRouterState";var Wv=lt.createContext({isTransitioning:!1});Wv.displayName="ViewTransition";var Ey=lt.createContext(new Map);Ey.displayName="Fetchers";var My=lt.createContext(null);My.displayName="Await";var Di=lt.createContext(null);Di.displayName="Navigation";var Ko=lt.createContext(null);Ko.displayName="Location";var ua=lt.createContext({outlet:null,matches:[],isDataRoute:!1});ua.displayName="Route";var Uh=lt.createContext(null);Uh.displayName="RouteError";function Ty(r,{relative:t}={}){Xe(Qo(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=lt.useContext(Di),{hash:l,pathname:u,search:f}=$o(r,{relative:t}),h=u;return i!=="/"&&(h=u==="/"?i:aa([i,u])),s.createHref({pathname:h,search:f,hash:l})}function Qo(){return lt.useContext(Ko)!=null}function Cr(){return Xe(Qo(),"useLocation() may be used only in the context of a <Router> component."),lt.useContext(Ko).location}var qv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Yv(r){lt.useContext(Di).static||lt.useLayoutEffect(r)}function by(){let{isDataRoute:r}=lt.useContext(ua);return r?Fy():Ay()}function Ay(){Xe(Qo(),"useNavigate() may be used only in the context of a <Router> component.");let r=lt.useContext(Is),{basename:t,navigator:i}=lt.useContext(Di),{matches:s}=lt.useContext(ua),{pathname:l}=Cr(),u=JSON.stringify(Vv(s)),f=lt.useRef(!1);return Yv(()=>{f.current=!0}),lt.useCallback((p,m={})=>{if(wi(f.current,qv),!f.current)return;if(typeof p=="number"){i.go(p);return}let g=kv(p,JSON.parse(u),l,m.relative==="path");r==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:aa([t,g.pathname])),(m.replace?i.replace:i.push)(g,m.state,m)},[t,i,u,l,r])}lt.createContext(null);function $o(r,{relative:t}={}){let{matches:i}=lt.useContext(ua),{pathname:s}=Cr(),l=JSON.stringify(Vv(i));return lt.useMemo(()=>kv(r,JSON.parse(l),s,t==="path"),[r,l,s,t])}function Ry(r,t){return jv(r,t)}function jv(r,t,i,s){var O;Xe(Qo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l,static:u}=lt.useContext(Di),{matches:f}=lt.useContext(ua),h=f[f.length-1],p=h?h.params:{},m=h?h.pathname:"/",g=h?h.pathnameBase:"/",x=h&&h.route;{let U=x&&x.path||"";Zv(m,!x||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let v=Cr(),S;if(t){let U=typeof t=="string"?Ps(t):t;Xe(g==="/"||((O=U.pathname)==null?void 0:O.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${U.pathname}" was given in the \`location\` prop.`),S=U}else S=v;let M=S.pathname||"/",T=M;if(g!=="/"){let U=g.replace(/^\//,"").split("/");T="/"+M.replace(/^\//,"").split("/").slice(U.length).join("/")}let y=!u&&i&&i.matches&&i.matches.length>0?i.matches:zv(r,{pathname:T});wi(x||y!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),wi(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=Ly(y&&y.map(U=>Object.assign({},U,{params:Object.assign({},p,U.params),pathname:aa([g,l.encodeLocation?l.encodeLocation(U.pathname).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?g:aa([g,l.encodeLocation?l.encodeLocation(U.pathnameBase).pathname:U.pathnameBase])})),f,i,s);return t&&_?lt.createElement(Ko.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},_):_}function Cy(){let r=By(),t=Sy(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=lt.createElement(lt.Fragment,null,lt.createElement("p",null,"💿 Hey developer 👋"),lt.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",lt.createElement("code",{style:u},"ErrorBoundary")," or"," ",lt.createElement("code",{style:u},"errorElement")," prop on your route.")),lt.createElement(lt.Fragment,null,lt.createElement("h2",null,"Unexpected Application Error!"),lt.createElement("h3",{style:{fontStyle:"italic"}},t),i?lt.createElement("pre",{style:l},i):null,f)}var wy=lt.createElement(Cy,null),Dy=class extends lt.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,t){return t.location!==r.location||t.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:t.error,location:t.location,revalidation:r.revalidation||t.revalidation}}componentDidCatch(r,t){console.error("React Router caught the following error during render",r,t)}render(){return this.state.error!==void 0?lt.createElement(ua.Provider,{value:this.props.routeContext},lt.createElement(Uh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Uy({routeContext:r,match:t,children:i}){let s=lt.useContext(Is);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),lt.createElement(ua.Provider,{value:r},i)}function Ly(r,t=[],i=null,s=null){if(r==null){if(!i)return null;if(i.errors)r=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)r=i.matches;else return null}let l=r,u=i==null?void 0:i.errors;if(u!=null){let p=l.findIndex(m=>m.route.id&&(u==null?void 0:u[m.route.id])!==void 0);Xe(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,p+1))}let f=!1,h=-1;if(i)for(let p=0;p<l.length;p++){let m=l[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(h=p),m.route.id){let{loaderData:g,errors:x}=i,v=m.route.loader&&!g.hasOwnProperty(m.route.id)&&(!x||x[m.route.id]===void 0);if(m.route.lazy||v){f=!0,h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}return l.reduceRight((p,m,g)=>{let x,v=!1,S=null,M=null;i&&(x=u&&m.route.id?u[m.route.id]:void 0,S=m.route.errorElement||wy,f&&(h<0&&g===0?(Zv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,M=null):h===g&&(v=!0,M=m.route.hydrateFallbackElement||null)));let T=t.concat(l.slice(0,g+1)),y=()=>{let _;return x?_=S:v?_=M:m.route.Component?_=lt.createElement(m.route.Component,null):m.route.element?_=m.route.element:_=p,lt.createElement(Uy,{match:m,routeContext:{outlet:p,matches:T,isDataRoute:i!=null},children:_})};return i&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?lt.createElement(Dy,{location:i.location,revalidation:i.revalidation,component:S,error:x,children:y(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):y()},null)}function Lh(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ny(r){let t=lt.useContext(Is);return Xe(t,Lh(r)),t}function Oy(r){let t=lt.useContext(ju);return Xe(t,Lh(r)),t}function Py(r){let t=lt.useContext(ua);return Xe(t,Lh(r)),t}function Nh(r){let t=Py(r),i=t.matches[t.matches.length-1];return Xe(i.route.id,`${r} can only be used on routes that contain a unique "id"`),i.route.id}function Iy(){return Nh("useRouteId")}function By(){var s;let r=lt.useContext(Uh),t=Oy("useRouteError"),i=Nh("useRouteError");return r!==void 0?r:(s=t.errors)==null?void 0:s[i]}function Fy(){let{router:r}=Ny("useNavigate"),t=Nh("useNavigate"),i=lt.useRef(!1);return Yv(()=>{i.current=!0}),lt.useCallback(async(l,u={})=>{wi(i.current,qv),i.current&&(typeof l=="number"?r.navigate(l):await r.navigate(l,{fromRouteId:t,...u}))},[r,t])}var T_={};function Zv(r,t,i){!t&&!T_[r]&&(T_[r]=!0,wi(!1,i))}lt.memo(zy);function zy({routes:r,future:t,state:i}){return jv(r,void 0,i,t)}function Ou(r){Xe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Hy({basename:r="/",children:t=null,location:i,navigationType:s="POP",navigator:l,static:u=!1}){Xe(!Qo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=r.replace(/^\/*/,"/"),h=lt.useMemo(()=>({basename:f,navigator:l,static:u,future:{}}),[f,l,u]);typeof i=="string"&&(i=Ps(i));let{pathname:p="/",search:m="",hash:g="",state:x=null,key:v="default"}=i,S=lt.useMemo(()=>{let M=sa(p,f);return M==null?null:{location:{pathname:M,search:m,hash:g,state:x,key:v},navigationType:s}},[f,p,m,g,x,v,s]);return wi(S!=null,`<Router basename="${f}"> is not able to match the URL "${p}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:lt.createElement(Di.Provider,{value:h},lt.createElement(Ko.Provider,{children:t,value:S}))}function Gy({children:r,location:t}){return Ry(Vd(r),t)}function Vd(r,t=[]){let i=[];return lt.Children.forEach(r,(s,l)=>{if(!lt.isValidElement(s))return;let u=[...t,l];if(s.type===lt.Fragment){i.push.apply(i,Vd(s.props.children,u));return}Xe(s.type===Ou,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Xe(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=Vd(s.props.children,u)),i.push(f)}),i}var Pu="get",Iu="application/x-www-form-urlencoded";function Zu(r){return r!=null&&typeof r.tagName=="string"}function Vy(r){return Zu(r)&&r.tagName.toLowerCase()==="button"}function ky(r){return Zu(r)&&r.tagName.toLowerCase()==="form"}function Xy(r){return Zu(r)&&r.tagName.toLowerCase()==="input"}function Wy(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function qy(r,t){return r.button===0&&(!t||t==="_self")&&!Wy(r)}var fu=null;function Yy(){if(fu===null)try{new FormData(document.createElement("form"),0),fu=!1}catch{fu=!0}return fu}var jy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function cd(r){return r!=null&&!jy.has(r)?(wi(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Iu}"`),null):r}function Zy(r,t){let i,s,l,u,f;if(ky(r)){let h=r.getAttribute("action");s=h?sa(h,t):null,i=r.getAttribute("method")||Pu,l=cd(r.getAttribute("enctype"))||Iu,u=new FormData(r)}else if(Vy(r)||Xy(r)&&(r.type==="submit"||r.type==="image")){let h=r.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=r.getAttribute("formaction")||h.getAttribute("action");if(s=p?sa(p,t):null,i=r.getAttribute("formmethod")||h.getAttribute("method")||Pu,l=cd(r.getAttribute("formenctype"))||cd(h.getAttribute("enctype"))||Iu,u=new FormData(h,r),!Yy()){let{name:m,type:g,value:x}=r;if(g==="image"){let v=m?`${m}.`:"";u.append(`${v}x`,"0"),u.append(`${v}y`,"0")}else m&&u.append(m,x)}}else{if(Zu(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Pu,s=null,l=Iu,f=r}return u&&l==="text/plain"&&(f=u,u=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:u,body:f}}function Oh(r,t){if(r===!1||r===null||typeof r>"u")throw new Error(t)}async function Ky(r,t){if(r.id in t)return t[r.id];try{let i=await import(r.module);return t[r.id]=i,i}catch(i){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Qy(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function $y(r,t,i){let s=await Promise.all(r.map(async l=>{let u=t.routes[l.route.id];if(u){let f=await Ky(u,i);return f.links?f.links():[]}return[]}));return nE(s.flat(1).filter(Qy).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function b_(r,t,i,s,l,u){let f=(p,m)=>i[m]?p.route.id!==i[m].route.id:!0,h=(p,m)=>{var g;return i[m].pathname!==p.pathname||((g=i[m].route.path)==null?void 0:g.endsWith("*"))&&i[m].params["*"]!==p.params["*"]};return u==="assets"?t.filter((p,m)=>f(p,m)||h(p,m)):u==="data"?t.filter((p,m)=>{var x;let g=s.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(f(p,m)||h(p,m))return!0;if(p.route.shouldRevalidate){let v=p.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((x=i[0])==null?void 0:x.params)||{},nextUrl:new URL(r,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function Jy(r,t,{includeHydrateFallback:i}={}){return tE(r.map(s=>{let l=t.routes[s.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function tE(r){return[...new Set(r)]}function eE(r){let t={},i=Object.keys(r).sort();for(let s of i)t[s]=r[s];return t}function nE(r,t){let i=new Set;return new Set(t),r.reduce((s,l)=>{let u=JSON.stringify(eE(l));return i.has(u)||(i.add(u),s.push({key:u,link:l})),s},[])}function iE(r,t){let i=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return i.pathname==="/"?i.pathname="_root.data":t&&sa(i.pathname,t)==="/"?i.pathname=`${t.replace(/\/$/,"")}/_root.data`:i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function Kv(){let r=lt.useContext(Is);return Oh(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function aE(){let r=lt.useContext(ju);return Oh(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Ph=lt.createContext(void 0);Ph.displayName="FrameworkContext";function Qv(){let r=lt.useContext(Ph);return Oh(r,"You must render this element inside a <HydratedRouter> element"),r}function rE(r,t){let i=lt.useContext(Ph),[s,l]=lt.useState(!1),[u,f]=lt.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:m,onMouseLeave:g,onTouchStart:x}=t,v=lt.useRef(null);lt.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let T=_=>{_.forEach(O=>{f(O.isIntersecting)})},y=new IntersectionObserver(T,{threshold:.5});return v.current&&y.observe(v.current),()=>{y.disconnect()}}},[r]),lt.useEffect(()=>{if(s){let T=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(T)}}},[s]);let S=()=>{l(!0)},M=()=>{l(!1),f(!1)};return i?r!=="intent"?[u,v,{}]:[u,v,{onFocus:Bo(h,S),onBlur:Bo(p,M),onMouseEnter:Bo(m,S),onMouseLeave:Bo(g,M),onTouchStart:Bo(x,S)}]:[!1,v,{}]}function Bo(r,t){return i=>{r&&r(i),i.defaultPrevented||t(i)}}function sE({page:r,...t}){let{router:i}=Kv(),s=lt.useMemo(()=>zv(i.routes,r,i.basename),[i.routes,r,i.basename]);return s?lt.createElement(lE,{page:r,matches:s,...t}):null}function oE(r){let{manifest:t,routeModules:i}=Qv(),[s,l]=lt.useState([]);return lt.useEffect(()=>{let u=!1;return $y(r,t,i).then(f=>{u||l(f)}),()=>{u=!0}},[r,t,i]),s}function lE({page:r,matches:t,...i}){let s=Cr(),{manifest:l,routeModules:u}=Qv(),{basename:f}=Kv(),{loaderData:h,matches:p}=aE(),m=lt.useMemo(()=>b_(r,t,p,l,s,"data"),[r,t,p,l,s]),g=lt.useMemo(()=>b_(r,t,p,l,s,"assets"),[r,t,p,l,s]),x=lt.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let M=new Set,T=!1;if(t.forEach(_=>{var U;let O=l.routes[_.route.id];!O||!O.hasLoader||(!m.some(D=>D.route.id===_.route.id)&&_.route.id in h&&((U=u[_.route.id])!=null&&U.shouldRevalidate)||O.hasClientLoader?T=!0:M.add(_.route.id))}),M.size===0)return[];let y=iE(r,f);return T&&M.size>0&&y.searchParams.set("_routes",t.filter(_=>M.has(_.route.id)).map(_=>_.route.id).join(",")),[y.pathname+y.search]},[f,h,s,l,m,t,r,u]),v=lt.useMemo(()=>Jy(g,l),[g,l]),S=oE(g);return lt.createElement(lt.Fragment,null,x.map(M=>lt.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...i})),v.map(M=>lt.createElement("link",{key:M,rel:"modulepreload",href:M,...i})),S.map(({key:M,link:T})=>lt.createElement("link",{key:M,...T})))}function uE(...r){return t=>{r.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var $v=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{$v&&(window.__reactRouterVersion="7.4.0")}catch{}function cE({basename:r,children:t,window:i}){let s=lt.useRef();s.current==null&&(s.current=$S({window:i,v5Compat:!0}));let l=s.current,[u,f]=lt.useState({action:l.action,location:l.location}),h=lt.useCallback(p=>{lt.startTransition(()=>f(p))},[f]);return lt.useLayoutEffect(()=>l.listen(h),[l,h]),lt.createElement(Hy,{basename:r,children:t,location:u.location,navigationType:u.action,navigator:l})}var Jv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ms=lt.forwardRef(function({onClick:t,discover:i="render",prefetch:s="none",relative:l,reloadDocument:u,replace:f,state:h,target:p,to:m,preventScrollReset:g,viewTransition:x,...v},S){let{basename:M}=lt.useContext(Di),T=typeof m=="string"&&Jv.test(m),y,_=!1;if(typeof m=="string"&&T&&(y=m,$v))try{let w=new URL(window.location.href),A=m.startsWith("//")?new URL(w.protocol+m):new URL(m),z=sa(A.pathname,M);A.origin===w.origin&&z!=null?m=z+A.search+A.hash:_=!0}catch{wi(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let O=Ty(m,{relative:l}),[U,D,F]=rE(s,v),H=pE(m,{replace:f,state:h,target:p,preventScrollReset:g,relative:l,viewTransition:x});function B(w){t&&t(w),w.defaultPrevented||H(w)}let Z=lt.createElement("a",{...v,...F,href:y||O,onClick:_||u?t:B,ref:uE(S,D),target:p,"data-discover":!T&&i==="render"?"true":void 0});return U&&!T?lt.createElement(lt.Fragment,null,Z,lt.createElement(sE,{page:O})):Z});Ms.displayName="Link";var fE=lt.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:s="",end:l=!1,style:u,to:f,viewTransition:h,children:p,...m},g){let x=$o(f,{relative:m.relative}),v=Cr(),S=lt.useContext(ju),{navigator:M,basename:T}=lt.useContext(Di),y=S!=null&&xE(x)&&h===!0,_=M.encodeLocation?M.encodeLocation(x).pathname:x.pathname,O=v.pathname,U=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;i||(O=O.toLowerCase(),U=U?U.toLowerCase():null,_=_.toLowerCase()),U&&T&&(U=sa(U,T)||U);const D=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let F=O===_||!l&&O.startsWith(_)&&O.charAt(D)==="/",H=U!=null&&(U===_||!l&&U.startsWith(_)&&U.charAt(_.length)==="/"),B={isActive:F,isPending:H,isTransitioning:y},Z=F?t:void 0,w;typeof s=="function"?w=s(B):w=[s,F?"active":null,H?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let A=typeof u=="function"?u(B):u;return lt.createElement(Ms,{...m,"aria-current":Z,className:w,ref:g,style:A,to:f,viewTransition:h},typeof p=="function"?p(B):p)});fE.displayName="NavLink";var dE=lt.forwardRef(({discover:r="render",fetcherKey:t,navigate:i,reloadDocument:s,replace:l,state:u,method:f=Pu,action:h,onSubmit:p,relative:m,preventScrollReset:g,viewTransition:x,...v},S)=>{let M=_E(),T=vE(h,{relative:m}),y=f.toLowerCase()==="get"?"get":"post",_=typeof h=="string"&&Jv.test(h),O=U=>{if(p&&p(U),U.defaultPrevented)return;U.preventDefault();let D=U.nativeEvent.submitter,F=(D==null?void 0:D.getAttribute("formmethod"))||f;M(D||U.currentTarget,{fetcherKey:t,method:F,navigate:i,replace:l,state:u,relative:m,preventScrollReset:g,viewTransition:x})};return lt.createElement("form",{ref:S,method:y,action:T,onSubmit:s?p:O,...v,"data-discover":!_&&r==="render"?"true":void 0})});dE.displayName="Form";function hE(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function t0(r){let t=lt.useContext(Is);return Xe(t,hE(r)),t}function pE(r,{target:t,replace:i,state:s,preventScrollReset:l,relative:u,viewTransition:f}={}){let h=by(),p=Cr(),m=$o(r,{relative:u});return lt.useCallback(g=>{if(qy(g,t)){g.preventDefault();let x=i!==void 0?i:qo(p)===qo(m);h(r,{replace:x,state:s,preventScrollReset:l,relative:u,viewTransition:f})}},[p,h,m,i,s,t,r,l,u,f])}var mE=0,gE=()=>`__${String(++mE)}__`;function _E(){let{router:r}=t0("useSubmit"),{basename:t}=lt.useContext(Di),i=Iy();return lt.useCallback(async(s,l={})=>{let{action:u,method:f,encType:h,formData:p,body:m}=Zy(s,t);if(l.navigate===!1){let g=l.fetcherKey||gE();await r.fetch(g,i,l.action||u,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||f,formEncType:l.encType||h,flushSync:l.flushSync})}else await r.navigate(l.action||u,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||f,formEncType:l.encType||h,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[r,t,i])}function vE(r,{relative:t}={}){let{basename:i}=lt.useContext(Di),s=lt.useContext(ua);Xe(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),u={...$o(r||".",{relative:t})},f=Cr();if(r==null){u.search=f.search;let h=new URLSearchParams(u.search),p=h.getAll("index");if(p.some(g=>g==="")){h.delete("index"),p.filter(x=>x).forEach(x=>h.append("index",x));let g=h.toString();u.search=g?`?${g}`:""}}return(!r||r===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:aa([i,u.pathname])),qo(u)}function xE(r,t={}){let i=lt.useContext(Wv);Xe(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=t0("useViewTransitionState"),l=$o(r,{relative:t.relative});if(!i.isTransitioning)return!1;let u=sa(i.currentLocation.pathname,s)||i.currentLocation.pathname,f=sa(i.nextLocation.pathname,s)||i.nextLocation.pathname;return Xu(l.pathname,f)!=null||Xu(l.pathname,u)!=null}new TextEncoder;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ih="174",SE=0,A_=1,yE=2,e0=1,EE=2,Ji=3,Va=0,zn=1,ta=2,za=0,bs=1,R_=2,C_=3,w_=4,ME=5,xr=100,TE=101,bE=102,AE=103,RE=104,CE=200,wE=201,DE=202,UE=203,kd=204,Xd=205,LE=206,NE=207,OE=208,PE=209,IE=210,BE=211,FE=212,zE=213,HE=214,Wd=0,qd=1,Yd=2,Cs=3,jd=4,Zd=5,Kd=6,Qd=7,n0=0,GE=1,VE=2,Ha=0,kE=1,XE=2,WE=3,qE=4,YE=5,jE=6,ZE=7,i0=300,ws=301,Ds=302,$d=303,Jd=304,Ku=306,th=1e3,yr=1001,eh=1002,xi=1003,KE=1004,du=1005,Ri=1006,fd=1007,Er=1008,oa=1009,a0=1010,r0=1011,Yo=1012,Bh=1013,br=1014,ea=1015,Jo=1016,Fh=1017,zh=1018,Us=1020,s0=35902,o0=1021,l0=1022,vi=1023,u0=1024,c0=1025,As=1026,Ls=1027,f0=1028,Hh=1029,d0=1030,Gh=1031,Vh=1033,Bu=33776,Fu=33777,zu=33778,Hu=33779,nh=35840,ih=35841,ah=35842,rh=35843,sh=36196,oh=37492,lh=37496,uh=37808,ch=37809,fh=37810,dh=37811,hh=37812,ph=37813,mh=37814,gh=37815,_h=37816,vh=37817,xh=37818,Sh=37819,yh=37820,Eh=37821,Gu=36492,Mh=36494,Th=36495,h0=36283,bh=36284,Ah=36285,Rh=36286,QE=3200,$E=3201,JE=0,tM=1,Fa="",oi="srgb",Ns="srgb-linear",Wu="linear",Oe="srgb",ls=7680,D_=519,eM=512,nM=513,iM=514,p0=515,aM=516,rM=517,sM=518,oM=519,U_=35044,L_="300 es",na=2e3,qu=2001;class Bs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,f=l.length;u<f;u++)l[u].call(this,t);t.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dd=Math.PI/180,Ch=180/Math.PI;function tl(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Tn[r&255]+Tn[r>>8&255]+Tn[r>>16&255]+Tn[r>>24&255]+"-"+Tn[t&255]+Tn[t>>8&255]+"-"+Tn[t>>16&15|64]+Tn[t>>24&255]+"-"+Tn[i&63|128]+Tn[i>>8&255]+"-"+Tn[i>>16&255]+Tn[i>>24&255]+Tn[s&255]+Tn[s>>8&255]+Tn[s>>16&255]+Tn[s>>24&255]).toLowerCase()}function Se(r,t,i){return Math.max(t,Math.min(i,r))}function lM(r,t){return(r%t+t)%t}function hd(r,t,i){return(1-i)*r+i*t}function Fo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Fn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Be{constructor(t=0,i=0){Be.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Se(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,f=this.y-t.y;return this.x=u*s-f*l+t.x,this.y=u*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ue{constructor(t,i,s,l,u,f,h,p,m){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,f,h,p,m)}set(t,i,s,l,u,f,h,p,m){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=i,g[4]=u,g[5]=p,g[6]=s,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,f=s[0],h=s[3],p=s[6],m=s[1],g=s[4],x=s[7],v=s[2],S=s[5],M=s[8],T=l[0],y=l[3],_=l[6],O=l[1],U=l[4],D=l[7],F=l[2],H=l[5],B=l[8];return u[0]=f*T+h*O+p*F,u[3]=f*y+h*U+p*H,u[6]=f*_+h*D+p*B,u[1]=m*T+g*O+x*F,u[4]=m*y+g*U+x*H,u[7]=m*_+g*D+x*B,u[2]=v*T+S*O+M*F,u[5]=v*y+S*U+M*H,u[8]=v*_+S*D+M*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8];return i*f*g-i*h*m-s*u*g+s*h*p+l*u*m-l*f*p}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8],x=g*f-h*m,v=h*p-g*u,S=m*u-f*p,M=i*x+s*v+l*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return t[0]=x*T,t[1]=(l*m-g*s)*T,t[2]=(h*s-l*f)*T,t[3]=v*T,t[4]=(g*i-l*p)*T,t[5]=(l*u-h*i)*T,t[6]=S*T,t[7]=(s*p-m*i)*T,t[8]=(f*i-s*u)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,f,h){const p=Math.cos(u),m=Math.sin(u);return this.set(s*p,s*m,-s*(p*f+m*h)+f+t,-l*m,l*p,-l*(-m*f+p*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(pd.makeScale(t,i)),this}rotate(t){return this.premultiply(pd.makeRotation(-t)),this}translate(t,i){return this.premultiply(pd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const pd=new ue;function m0(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Yu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function uM(){const r=Yu("canvas");return r.style.display="block",r}const N_={};function gr(r){r in N_||(N_[r]=!0,console.warn(r))}function cM(r,t,i){return new Promise(function(s,l){function u(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}function fM(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function dM(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const O_=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),P_=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hM(){const r={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(l,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===Oe&&(l.r=ra(l.r),l.g=ra(l.g),l.b=ra(l.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Oe&&(l.r=Rs(l.r),l.g=Rs(l.g),l.b=Rs(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Fa?Wu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,f){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Ns]:{primaries:t,whitePoint:s,transfer:Wu,toXYZ:O_,fromXYZ:P_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:t,whitePoint:s,transfer:Oe,toXYZ:O_,fromXYZ:P_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),r}const Re=hM();function ra(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Rs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let us;class pM{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{us===void 0&&(us=Yu("canvas")),us.width=t.width,us.height=t.height;const s=us.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=us}return i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Yu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let f=0;f<u.length;f++)u[f]=ra(u[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ra(i[s]/255)*255):i[s]=ra(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let mM=0;class kh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=tl(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?u.push(md(l[f].image)):u.push(md(l[f]))}else u=md(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function md(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?pM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gM=0;class Hn extends Bs{constructor(t=Hn.DEFAULT_IMAGE,i=Hn.DEFAULT_MAPPING,s=yr,l=yr,u=Ri,f=Er,h=vi,p=oa,m=Hn.DEFAULT_ANISOTROPY,g=Fa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=tl(),this.name="",this.source=new kh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==i0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case th:t.x=t.x-Math.floor(t.x);break;case yr:t.x=t.x<0?0:1;break;case eh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case th:t.y=t.y-Math.floor(t.y);break;case yr:t.y=t.y<0?0:1;break;case eh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=i0;Hn.DEFAULT_ANISOTROPY=1;class Ke{constructor(t=0,i=0,s=0,l=1){Ke.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*u,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*u,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*u,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const p=t.elements,m=p[0],g=p[4],x=p[8],v=p[1],S=p[5],M=p[9],T=p[2],y=p[6],_=p[10];if(Math.abs(g-v)<.01&&Math.abs(x-T)<.01&&Math.abs(M-y)<.01){if(Math.abs(g+v)<.1&&Math.abs(x+T)<.1&&Math.abs(M+y)<.1&&Math.abs(m+S+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(m+1)/2,D=(S+1)/2,F=(_+1)/2,H=(g+v)/4,B=(x+T)/4,Z=(M+y)/4;return U>D&&U>F?U<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(U),l=H/s,u=B/s):D>F?D<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),s=H/l,u=Z/l):F<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(F),s=B/u,l=Z/u),this.set(s,l,u,i),this}let O=Math.sqrt((y-M)*(y-M)+(x-T)*(x-T)+(v-g)*(v-g));return Math.abs(O)<.001&&(O=1),this.x=(y-M)/O,this.y=(x-T)/O,this.z=(v-g)/O,this.w=Math.acos((m+S+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this.z=Se(this.z,t.z,i.z),this.w=Se(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this.z=Se(this.z,t,i),this.w=Se(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _M extends Bs{constructor(t=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new Ke(0,0,t,i),this.scissorTest=!1,this.viewport=new Ke(0,0,t,i);const l={width:t,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const u=new Hn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);u.flipY=!1,u.generateMipmaps=s.generateMipmaps,u.internalFormat=s.internalFormat,this.textures=[];const f=s.count;for(let h=0;h<f;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new kh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends _M{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class g0 extends Hn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=xi,this.minFilter=xi,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class vM extends Hn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=xi,this.minFilter=xi,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class el{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,f,h){let p=s[l+0],m=s[l+1],g=s[l+2],x=s[l+3];const v=u[f+0],S=u[f+1],M=u[f+2],T=u[f+3];if(h===0){t[i+0]=p,t[i+1]=m,t[i+2]=g,t[i+3]=x;return}if(h===1){t[i+0]=v,t[i+1]=S,t[i+2]=M,t[i+3]=T;return}if(x!==T||p!==v||m!==S||g!==M){let y=1-h;const _=p*v+m*S+g*M+x*T,O=_>=0?1:-1,U=1-_*_;if(U>Number.EPSILON){const F=Math.sqrt(U),H=Math.atan2(F,_*O);y=Math.sin(y*H)/F,h=Math.sin(h*H)/F}const D=h*O;if(p=p*y+v*D,m=m*y+S*D,g=g*y+M*D,x=x*y+T*D,y===1-h){const F=1/Math.sqrt(p*p+m*m+g*g+x*x);p*=F,m*=F,g*=F,x*=F}}t[i]=p,t[i+1]=m,t[i+2]=g,t[i+3]=x}static multiplyQuaternionsFlat(t,i,s,l,u,f){const h=s[l],p=s[l+1],m=s[l+2],g=s[l+3],x=u[f],v=u[f+1],S=u[f+2],M=u[f+3];return t[i]=h*M+g*x+p*S-m*v,t[i+1]=p*M+g*v+m*x-h*S,t[i+2]=m*M+g*S+h*v-p*x,t[i+3]=g*M-h*x-p*v-m*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,f=t._order,h=Math.cos,p=Math.sin,m=h(s/2),g=h(l/2),x=h(u/2),v=p(s/2),S=p(l/2),M=p(u/2);switch(f){case"XYZ":this._x=v*g*x+m*S*M,this._y=m*S*x-v*g*M,this._z=m*g*M+v*S*x,this._w=m*g*x-v*S*M;break;case"YXZ":this._x=v*g*x+m*S*M,this._y=m*S*x-v*g*M,this._z=m*g*M-v*S*x,this._w=m*g*x+v*S*M;break;case"ZXY":this._x=v*g*x-m*S*M,this._y=m*S*x+v*g*M,this._z=m*g*M+v*S*x,this._w=m*g*x-v*S*M;break;case"ZYX":this._x=v*g*x-m*S*M,this._y=m*S*x+v*g*M,this._z=m*g*M-v*S*x,this._w=m*g*x+v*S*M;break;case"YZX":this._x=v*g*x+m*S*M,this._y=m*S*x+v*g*M,this._z=m*g*M-v*S*x,this._w=m*g*x-v*S*M;break;case"XZY":this._x=v*g*x-m*S*M,this._y=m*S*x-v*g*M,this._z=m*g*M+v*S*x,this._w=m*g*x+v*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],f=i[1],h=i[5],p=i[9],m=i[2],g=i[6],x=i[10],v=s+h+x;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-p)*S,this._y=(u-m)*S,this._z=(f-l)*S}else if(s>h&&s>x){const S=2*Math.sqrt(1+s-h-x);this._w=(g-p)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(u+m)/S}else if(h>x){const S=2*Math.sqrt(1+h-s-x);this._w=(u-m)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(p+g)/S}else{const S=2*Math.sqrt(1+x-s-h);this._w=(f-l)/S,this._x=(u+m)/S,this._y=(p+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,f=t._w,h=i._x,p=i._y,m=i._z,g=i._w;return this._x=s*g+f*h+l*m-u*p,this._y=l*g+f*p+u*h-s*m,this._z=u*g+f*m+s*p-l*h,this._w=f*g-s*h-l*p-u*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,u=this._z,f=this._w;let h=f*t._w+s*t._x+l*t._y+u*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=s,this._y=l,this._z=u,this;const p=1-h*h;if(p<=Number.EPSILON){const S=1-i;return this._w=S*f+i*this._w,this._x=S*s+i*this._x,this._y=S*l+i*this._y,this._z=S*u+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,h),x=Math.sin((1-i)*g)/m,v=Math.sin(i*g)/m;return this._w=f*x+this._w*v,this._x=s*x+this._x*v,this._y=l*x+this._y*v,this._z=u*x+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class rt{constructor(t=0,i=0,s=0){rt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(I_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(I_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,f=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*f,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*f,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,f=t.y,h=t.z,p=t.w,m=2*(f*l-h*s),g=2*(h*i-u*l),x=2*(u*s-f*i);return this.x=i+p*m+f*x-h*g,this.y=s+p*g+h*m-u*x,this.z=l+p*x+u*g-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this.z=Se(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this.z=Se(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,f=i.x,h=i.y,p=i.z;return this.x=l*p-u*h,this.y=u*f-s*p,this.z=s*h-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return gd.copy(this).projectOnVector(t),this.sub(gd)}reflect(t){return this.sub(gd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Se(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gd=new rt,I_=new el;class nl{constructor(t=new rt(1/0,1/0,1/0),i=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(pi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(pi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=pi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=u.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,pi):pi.fromBufferAttribute(u,f),pi.applyMatrix4(t.matrixWorld),this.expandByPoint(pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hu.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),hu.copy(s.boundingBox)),hu.applyMatrix4(t.matrixWorld),this.union(hu)}const l=t.children;for(let u=0,f=l.length;u<f;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pi),pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zo),pu.subVectors(this.max,zo),cs.subVectors(t.a,zo),fs.subVectors(t.b,zo),ds.subVectors(t.c,zo),Ua.subVectors(fs,cs),La.subVectors(ds,fs),cr.subVectors(cs,ds);let i=[0,-Ua.z,Ua.y,0,-La.z,La.y,0,-cr.z,cr.y,Ua.z,0,-Ua.x,La.z,0,-La.x,cr.z,0,-cr.x,-Ua.y,Ua.x,0,-La.y,La.x,0,-cr.y,cr.x,0];return!_d(i,cs,fs,ds,pu)||(i=[1,0,0,0,1,0,0,0,1],!_d(i,cs,fs,ds,pu))?!1:(mu.crossVectors(Ua,La),i=[mu.x,mu.y,mu.z],_d(i,cs,fs,ds,pu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ji=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],pi=new rt,hu=new nl,cs=new rt,fs=new rt,ds=new rt,Ua=new rt,La=new rt,cr=new rt,zo=new rt,pu=new rt,mu=new rt,fr=new rt;function _d(r,t,i,s,l){for(let u=0,f=r.length-3;u<=f;u+=3){fr.fromArray(r,u);const h=l.x*Math.abs(fr.x)+l.y*Math.abs(fr.y)+l.z*Math.abs(fr.z),p=t.dot(fr),m=i.dot(fr),g=s.dot(fr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>h)return!1}return!0}const xM=new nl,Ho=new rt,vd=new rt;class Xh{constructor(t=new rt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):xM.setFromPoints(t).getCenter(s);let l=0;for(let u=0,f=t.length;u<f;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ho.subVectors(t,this.center);const i=Ho.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Ho,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ho.copy(t.center).add(vd)),this.expandByPoint(Ho.copy(t.center).sub(vd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zi=new rt,xd=new rt,gu=new rt,Na=new rt,Sd=new rt,_u=new rt,yd=new rt;class SM{constructor(t=new rt,i=new rt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zi)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Zi.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Zi.copy(this.origin).addScaledVector(this.direction,i),Zi.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){xd.copy(t).add(i).multiplyScalar(.5),gu.copy(i).sub(t).normalize(),Na.copy(this.origin).sub(xd);const u=t.distanceTo(i)*.5,f=-this.direction.dot(gu),h=Na.dot(this.direction),p=-Na.dot(gu),m=Na.lengthSq(),g=Math.abs(1-f*f);let x,v,S,M;if(g>0)if(x=f*p-h,v=f*h-p,M=u*g,x>=0)if(v>=-M)if(v<=M){const T=1/g;x*=T,v*=T,S=x*(x+f*v+2*h)+v*(f*x+v+2*p)+m}else v=u,x=Math.max(0,-(f*v+h)),S=-x*x+v*(v+2*p)+m;else v=-u,x=Math.max(0,-(f*v+h)),S=-x*x+v*(v+2*p)+m;else v<=-M?(x=Math.max(0,-(-f*u+h)),v=x>0?-u:Math.min(Math.max(-u,-p),u),S=-x*x+v*(v+2*p)+m):v<=M?(x=0,v=Math.min(Math.max(-u,-p),u),S=v*(v+2*p)+m):(x=Math.max(0,-(f*u+h)),v=x>0?u:Math.min(Math.max(-u,-p),u),S=-x*x+v*(v+2*p)+m);else v=f>0?-u:u,x=Math.max(0,-(f*v+h)),S=-x*x+v*(v+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(xd).addScaledVector(gu,v),S}intersectSphere(t,i){Zi.subVectors(t.center,this.origin);const s=Zi.dot(this.direction),l=Zi.dot(Zi)-s*s,u=t.radius*t.radius;if(l>u)return null;const f=Math.sqrt(u-l),h=s-f,p=s+f;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,f,h,p;const m=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,v=this.origin;return m>=0?(s=(t.min.x-v.x)*m,l=(t.max.x-v.x)*m):(s=(t.max.x-v.x)*m,l=(t.min.x-v.x)*m),g>=0?(u=(t.min.y-v.y)*g,f=(t.max.y-v.y)*g):(u=(t.max.y-v.y)*g,f=(t.min.y-v.y)*g),s>f||u>l||((u>s||isNaN(s))&&(s=u),(f<l||isNaN(l))&&(l=f),x>=0?(h=(t.min.z-v.z)*x,p=(t.max.z-v.z)*x):(h=(t.max.z-v.z)*x,p=(t.min.z-v.z)*x),s>p||h>l)||((h>s||s!==s)&&(s=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Zi)!==null}intersectTriangle(t,i,s,l,u){Sd.subVectors(i,t),_u.subVectors(s,t),yd.crossVectors(Sd,_u);let f=this.direction.dot(yd),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Na.subVectors(this.origin,t);const p=h*this.direction.dot(_u.crossVectors(Na,_u));if(p<0)return null;const m=h*this.direction.dot(Sd.cross(Na));if(m<0||p+m>f)return null;const g=-h*Na.dot(yd);return g<0?null:this.at(g/f,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class en{constructor(t,i,s,l,u,f,h,p,m,g,x,v,S,M,T,y){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,f,h,p,m,g,x,v,S,M,T,y)}set(t,i,s,l,u,f,h,p,m,g,x,v,S,M,T,y){const _=this.elements;return _[0]=t,_[4]=i,_[8]=s,_[12]=l,_[1]=u,_[5]=f,_[9]=h,_[13]=p,_[2]=m,_[6]=g,_[10]=x,_[14]=v,_[3]=S,_[7]=M,_[11]=T,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/hs.setFromMatrixColumn(t,0).length(),u=1/hs.setFromMatrixColumn(t,1).length(),f=1/hs.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,f=Math.cos(s),h=Math.sin(s),p=Math.cos(l),m=Math.sin(l),g=Math.cos(u),x=Math.sin(u);if(t.order==="XYZ"){const v=f*g,S=f*x,M=h*g,T=h*x;i[0]=p*g,i[4]=-p*x,i[8]=m,i[1]=S+M*m,i[5]=v-T*m,i[9]=-h*p,i[2]=T-v*m,i[6]=M+S*m,i[10]=f*p}else if(t.order==="YXZ"){const v=p*g,S=p*x,M=m*g,T=m*x;i[0]=v+T*h,i[4]=M*h-S,i[8]=f*m,i[1]=f*x,i[5]=f*g,i[9]=-h,i[2]=S*h-M,i[6]=T+v*h,i[10]=f*p}else if(t.order==="ZXY"){const v=p*g,S=p*x,M=m*g,T=m*x;i[0]=v-T*h,i[4]=-f*x,i[8]=M+S*h,i[1]=S+M*h,i[5]=f*g,i[9]=T-v*h,i[2]=-f*m,i[6]=h,i[10]=f*p}else if(t.order==="ZYX"){const v=f*g,S=f*x,M=h*g,T=h*x;i[0]=p*g,i[4]=M*m-S,i[8]=v*m+T,i[1]=p*x,i[5]=T*m+v,i[9]=S*m-M,i[2]=-m,i[6]=h*p,i[10]=f*p}else if(t.order==="YZX"){const v=f*p,S=f*m,M=h*p,T=h*m;i[0]=p*g,i[4]=T-v*x,i[8]=M*x+S,i[1]=x,i[5]=f*g,i[9]=-h*g,i[2]=-m*g,i[6]=S*x+M,i[10]=v-T*x}else if(t.order==="XZY"){const v=f*p,S=f*m,M=h*p,T=h*m;i[0]=p*g,i[4]=-x,i[8]=m*g,i[1]=v*x+T,i[5]=f*g,i[9]=S*x-M,i[2]=M*x-S,i[6]=h*g,i[10]=T*x+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yM,t,EM)}lookAt(t,i,s){const l=this.elements;return Yn.subVectors(t,i),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),Oa.crossVectors(s,Yn),Oa.lengthSq()===0&&(Math.abs(s.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),Oa.crossVectors(s,Yn)),Oa.normalize(),vu.crossVectors(Yn,Oa),l[0]=Oa.x,l[4]=vu.x,l[8]=Yn.x,l[1]=Oa.y,l[5]=vu.y,l[9]=Yn.y,l[2]=Oa.z,l[6]=vu.z,l[10]=Yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,f=s[0],h=s[4],p=s[8],m=s[12],g=s[1],x=s[5],v=s[9],S=s[13],M=s[2],T=s[6],y=s[10],_=s[14],O=s[3],U=s[7],D=s[11],F=s[15],H=l[0],B=l[4],Z=l[8],w=l[12],A=l[1],z=l[5],ct=l[9],it=l[13],gt=l[2],ht=l[6],W=l[10],at=l[14],j=l[3],yt=l[7],N=l[11],nt=l[15];return u[0]=f*H+h*A+p*gt+m*j,u[4]=f*B+h*z+p*ht+m*yt,u[8]=f*Z+h*ct+p*W+m*N,u[12]=f*w+h*it+p*at+m*nt,u[1]=g*H+x*A+v*gt+S*j,u[5]=g*B+x*z+v*ht+S*yt,u[9]=g*Z+x*ct+v*W+S*N,u[13]=g*w+x*it+v*at+S*nt,u[2]=M*H+T*A+y*gt+_*j,u[6]=M*B+T*z+y*ht+_*yt,u[10]=M*Z+T*ct+y*W+_*N,u[14]=M*w+T*it+y*at+_*nt,u[3]=O*H+U*A+D*gt+F*j,u[7]=O*B+U*z+D*ht+F*yt,u[11]=O*Z+U*ct+D*W+F*N,u[15]=O*w+U*it+D*at+F*nt,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],f=t[1],h=t[5],p=t[9],m=t[13],g=t[2],x=t[6],v=t[10],S=t[14],M=t[3],T=t[7],y=t[11],_=t[15];return M*(+u*p*x-l*m*x-u*h*v+s*m*v+l*h*S-s*p*S)+T*(+i*p*S-i*m*v+u*f*v-l*f*S+l*m*g-u*p*g)+y*(+i*m*x-i*h*S-u*f*x+s*f*S+u*h*g-s*m*g)+_*(-l*h*g-i*p*x+i*h*v+l*f*x-s*f*v+s*p*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8],x=t[9],v=t[10],S=t[11],M=t[12],T=t[13],y=t[14],_=t[15],O=x*y*m-T*v*m+T*p*S-h*y*S-x*p*_+h*v*_,U=M*v*m-g*y*m-M*p*S+f*y*S+g*p*_-f*v*_,D=g*T*m-M*x*m+M*h*S-f*T*S-g*h*_+f*x*_,F=M*x*p-g*T*p-M*h*v+f*T*v+g*h*y-f*x*y,H=i*O+s*U+l*D+u*F;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/H;return t[0]=O*B,t[1]=(T*v*u-x*y*u-T*l*S+s*y*S+x*l*_-s*v*_)*B,t[2]=(h*y*u-T*p*u+T*l*m-s*y*m-h*l*_+s*p*_)*B,t[3]=(x*p*u-h*v*u-x*l*m+s*v*m+h*l*S-s*p*S)*B,t[4]=U*B,t[5]=(g*y*u-M*v*u+M*l*S-i*y*S-g*l*_+i*v*_)*B,t[6]=(M*p*u-f*y*u-M*l*m+i*y*m+f*l*_-i*p*_)*B,t[7]=(f*v*u-g*p*u+g*l*m-i*v*m-f*l*S+i*p*S)*B,t[8]=D*B,t[9]=(M*x*u-g*T*u-M*s*S+i*T*S+g*s*_-i*x*_)*B,t[10]=(f*T*u-M*h*u+M*s*m-i*T*m-f*s*_+i*h*_)*B,t[11]=(g*h*u-f*x*u-g*s*m+i*x*m+f*s*S-i*h*S)*B,t[12]=F*B,t[13]=(g*T*l-M*x*l+M*s*v-i*T*v-g*s*y+i*x*y)*B,t[14]=(M*h*l-f*T*l-M*s*p+i*T*p+f*s*y-i*h*y)*B,t[15]=(f*x*l-g*h*l+g*s*p-i*x*p-f*s*v+i*h*v)*B,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,f=t.x,h=t.y,p=t.z,m=u*f,g=u*h;return this.set(m*f+s,m*h-l*p,m*p+l*h,0,m*h+l*p,g*h+s,g*p-l*f,0,m*p-l*h,g*p+l*f,u*p*p+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,f){return this.set(1,s,u,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,f=i._y,h=i._z,p=i._w,m=u+u,g=f+f,x=h+h,v=u*m,S=u*g,M=u*x,T=f*g,y=f*x,_=h*x,O=p*m,U=p*g,D=p*x,F=s.x,H=s.y,B=s.z;return l[0]=(1-(T+_))*F,l[1]=(S+D)*F,l[2]=(M-U)*F,l[3]=0,l[4]=(S-D)*H,l[5]=(1-(v+_))*H,l[6]=(y+O)*H,l[7]=0,l[8]=(M+U)*B,l[9]=(y-O)*B,l[10]=(1-(v+T))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let u=hs.set(l[0],l[1],l[2]).length();const f=hs.set(l[4],l[5],l[6]).length(),h=hs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],mi.copy(this);const m=1/u,g=1/f,x=1/h;return mi.elements[0]*=m,mi.elements[1]*=m,mi.elements[2]*=m,mi.elements[4]*=g,mi.elements[5]*=g,mi.elements[6]*=g,mi.elements[8]*=x,mi.elements[9]*=x,mi.elements[10]*=x,i.setFromRotationMatrix(mi),s.x=u,s.y=f,s.z=h,this}makePerspective(t,i,s,l,u,f,h=na){const p=this.elements,m=2*u/(i-t),g=2*u/(s-l),x=(i+t)/(i-t),v=(s+l)/(s-l);let S,M;if(h===na)S=-(f+u)/(f-u),M=-2*f*u/(f-u);else if(h===qu)S=-f/(f-u),M=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=v,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=M,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,u,f,h=na){const p=this.elements,m=1/(i-t),g=1/(s-l),x=1/(f-u),v=(i+t)*m,S=(s+l)*g;let M,T;if(h===na)M=(f+u)*x,T=-2*x;else if(h===qu)M=u*x,T=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-v,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=T,p[14]=-M,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const hs=new rt,mi=new en,yM=new rt(0,0,0),EM=new rt(1,1,1),Oa=new rt,vu=new rt,Yn=new rt,B_=new en,F_=new el;class la{constructor(t=0,i=0,s=0,l=la.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],f=l[4],h=l[8],p=l[1],m=l[5],g=l[9],x=l[2],v=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(Se(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Se(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(Se(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-Se(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return B_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(B_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return F_.setFromEuler(this),this.setFromQuaternion(F_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}la.DEFAULT_ORDER="XYZ";class _0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let MM=0;const z_=new rt,ps=new el,Ki=new en,xu=new rt,Go=new rt,TM=new rt,bM=new el,H_=new rt(1,0,0),G_=new rt(0,1,0),V_=new rt(0,0,1),k_={type:"added"},AM={type:"removed"},ms={type:"childadded",child:null},Ed={type:"childremoved",child:null};class Zn extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=tl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zn.DEFAULT_UP.clone();const t=new rt,i=new la,s=new el,l=new rt(1,1,1);function u(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new en},normalMatrix:{value:new ue}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=Zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ps.setFromAxisAngle(t,i),this.quaternion.multiply(ps),this}rotateOnWorldAxis(t,i){return ps.setFromAxisAngle(t,i),this.quaternion.premultiply(ps),this}rotateX(t){return this.rotateOnAxis(H_,t)}rotateY(t){return this.rotateOnAxis(G_,t)}rotateZ(t){return this.rotateOnAxis(V_,t)}translateOnAxis(t,i){return z_.copy(t).applyQuaternion(this.quaternion),this.position.add(z_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(H_,t)}translateY(t){return this.translateOnAxis(G_,t)}translateZ(t){return this.translateOnAxis(V_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?xu.copy(t):xu.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(Go,xu,this.up):Ki.lookAt(xu,Go,this.up),this.quaternion.setFromRotationMatrix(Ki),l&&(Ki.extractRotation(l.matrixWorld),ps.setFromRotationMatrix(Ki),this.quaternion.premultiply(ps.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(k_),ms.child=t,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(AM),Ed.child=t,this.dispatchEvent(Ed),Ed.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ki.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ki),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(k_),ms.child=t,this.dispatchEvent(ms),ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,t,TM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,bM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const x=p[m];u(t.shapes,x)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(u(t.materials,this.material[p]));l.material=h}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(u(t.animations,p))}}if(i){const h=f(t.geometries),p=f(t.materials),m=f(t.textures),g=f(t.images),x=f(t.shapes),v=f(t.skeletons),S=f(t.animations),M=f(t.nodes);h.length>0&&(s.geometries=h),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),g.length>0&&(s.images=g),x.length>0&&(s.shapes=x),v.length>0&&(s.skeletons=v),S.length>0&&(s.animations=S),M.length>0&&(s.nodes=M)}return s.object=l,s;function f(h){const p=[];for(const m in h){const g=h[m];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Zn.DEFAULT_UP=new rt(0,1,0);Zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new rt,Qi=new rt,Md=new rt,$i=new rt,gs=new rt,_s=new rt,X_=new rt,Td=new rt,bd=new rt,Ad=new rt,Rd=new Ke,Cd=new Ke,wd=new Ke;class _i{constructor(t=new rt,i=new rt,s=new rt){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),gi.subVectors(t,i),l.cross(gi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){gi.subVectors(l,i),Qi.subVectors(s,i),Md.subVectors(t,i);const f=gi.dot(gi),h=gi.dot(Qi),p=gi.dot(Md),m=Qi.dot(Qi),g=Qi.dot(Md),x=f*m-h*h;if(x===0)return u.set(0,0,0),null;const v=1/x,S=(m*p-h*g)*v,M=(f*g-h*p)*v;return u.set(1-S-M,M,S)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(t,i,s,l,u,f,h,p){return this.getBarycoord(t,i,s,l,$i)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,$i.x),p.addScaledVector(f,$i.y),p.addScaledVector(h,$i.z),p)}static getInterpolatedAttribute(t,i,s,l,u,f){return Rd.setScalar(0),Cd.setScalar(0),wd.setScalar(0),Rd.fromBufferAttribute(t,i),Cd.fromBufferAttribute(t,s),wd.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Rd,u.x),f.addScaledVector(Cd,u.y),f.addScaledVector(wd,u.z),f}static isFrontFacing(t,i,s,l){return gi.subVectors(s,i),Qi.subVectors(t,i),gi.cross(Qi).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gi.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),gi.cross(Qi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return _i.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return _i.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return _i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let f,h;gs.subVectors(l,s),_s.subVectors(u,s),Td.subVectors(t,s);const p=gs.dot(Td),m=_s.dot(Td);if(p<=0&&m<=0)return i.copy(s);bd.subVectors(t,l);const g=gs.dot(bd),x=_s.dot(bd);if(g>=0&&x<=g)return i.copy(l);const v=p*x-g*m;if(v<=0&&p>=0&&g<=0)return f=p/(p-g),i.copy(s).addScaledVector(gs,f);Ad.subVectors(t,u);const S=gs.dot(Ad),M=_s.dot(Ad);if(M>=0&&S<=M)return i.copy(u);const T=S*m-p*M;if(T<=0&&m>=0&&M<=0)return h=m/(m-M),i.copy(s).addScaledVector(_s,h);const y=g*M-S*x;if(y<=0&&x-g>=0&&S-M>=0)return X_.subVectors(u,l),h=(x-g)/(x-g+(S-M)),i.copy(l).addScaledVector(X_,h);const _=1/(y+T+v);return f=T*_,h=v*_,i.copy(s).addScaledVector(gs,f).addScaledVector(_s,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const v0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pa={h:0,s:0,l:0},Su={h:0,s:0,l:0};function Dd(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Pe{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=oi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.toWorkingColorSpace(this,i),this}setRGB(t,i,s,l=Re.workingColorSpace){return this.r=t,this.g=i,this.b=s,Re.toWorkingColorSpace(this,l),this}setHSL(t,i,s,l=Re.workingColorSpace){if(t=lM(t,1),i=Se(i,0,1),s=Se(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,f=2*s-u;this.r=Dd(f,u,t+1/3),this.g=Dd(f,u,t),this.b=Dd(f,u,t-1/3)}return Re.toWorkingColorSpace(this,l),this}setStyle(t,i=oi){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=oi){const s=v0[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ra(t.r),this.g=ra(t.g),this.b=ra(t.b),this}copyLinearToSRGB(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=oi){return Re.fromWorkingColorSpace(bn.copy(this),t),Math.round(Se(bn.r*255,0,255))*65536+Math.round(Se(bn.g*255,0,255))*256+Math.round(Se(bn.b*255,0,255))}getHexString(t=oi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Re.workingColorSpace){Re.fromWorkingColorSpace(bn.copy(this),i);const s=bn.r,l=bn.g,u=bn.b,f=Math.max(s,l,u),h=Math.min(s,l,u);let p,m;const g=(h+f)/2;if(h===f)p=0,m=0;else{const x=f-h;switch(m=g<=.5?x/(f+h):x/(2-f-h),f){case s:p=(l-u)/x+(l<u?6:0);break;case l:p=(u-s)/x+2;break;case u:p=(s-l)/x+4;break}p/=6}return t.h=p,t.s=m,t.l=g,t}getRGB(t,i=Re.workingColorSpace){return Re.fromWorkingColorSpace(bn.copy(this),i),t.r=bn.r,t.g=bn.g,t.b=bn.b,t}getStyle(t=oi){Re.fromWorkingColorSpace(bn.copy(this),t);const i=bn.r,s=bn.g,l=bn.b;return t!==oi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Pa),this.setHSL(Pa.h+t,Pa.s+i,Pa.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Pa),t.getHSL(Su);const s=hd(Pa.h,Su.h,i),l=hd(Pa.s,Su.s,i),u=hd(Pa.l,Su.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new Pe;Pe.NAMES=v0;let RM=0;class Qu extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:RM++}),this.uuid=tl(),this.name="",this.type="Material",this.blending=bs,this.side=Va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kd,this.blendDst=Xd,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=D_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(s.blending=this.blending),this.side!==Va&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==kd&&(s.blendSrc=this.blendSrc),this.blendDst!==Xd&&(s.blendDst=this.blendDst),this.blendEquation!==xr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==D_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const f=[];for(const h in u){const p=u[h];delete p.metadata,f.push(p)}return f}if(i){const u=l(t.textures),f=l(t.images);u.length>0&&(s.textures=u),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class x0 extends Qu{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new la,this.combine=n0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const tn=new rt,yu=new Be;let CM=0;class Ci{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:CM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=U_,this.updateRanges=[],this.gpuType=ea,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)yu.fromBufferAttribute(this,i),yu.applyMatrix3(t),this.setXY(i,yu.x,yu.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)tn.fromBufferAttribute(this,i),tn.applyMatrix3(t),this.setXYZ(i,tn.x,tn.y,tn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)tn.fromBufferAttribute(this,i),tn.applyMatrix4(t),this.setXYZ(i,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)tn.fromBufferAttribute(this,i),tn.applyNormalMatrix(t),this.setXYZ(i,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)tn.fromBufferAttribute(this,i),tn.transformDirection(t),this.setXYZ(i,tn.x,tn.y,tn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Fo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Fn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Fo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Fo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Fo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Fo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),s=Fn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),s=Fn(s,this.array),l=Fn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),s=Fn(s,this.array),l=Fn(l,this.array),u=Fn(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==U_&&(t.usage=this.usage),t}}class S0 extends Ci{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class y0 extends Ci{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Tr extends Ci{constructor(t,i,s){super(new Float32Array(t),i,s)}}let wM=0;const si=new en,Ud=new Zn,vs=new rt,jn=new nl,Vo=new nl,mn=new rt;class wr extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=tl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(m0(t)?y0:S0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new ue().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return si.makeRotationFromQuaternion(t),this.applyMatrix4(si),this}rotateX(t){return si.makeRotationX(t),this.applyMatrix4(si),this}rotateY(t){return si.makeRotationY(t),this.applyMatrix4(si),this}rotateZ(t){return si.makeRotationZ(t),this.applyMatrix4(si),this}translate(t,i,s){return si.makeTranslation(t,i,s),this.applyMatrix4(si),this}scale(t,i,s){return si.makeScale(t,i,s),this.applyMatrix4(si),this}lookAt(t){return Ud.lookAt(t),Ud.updateMatrix(),this.applyMatrix4(Ud.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Tr(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];jn.setFromBufferAttribute(u),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xh);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(t){const s=this.boundingSphere.center;if(jn.setFromBufferAttribute(t),i)for(let u=0,f=i.length;u<f;u++){const h=i[u];Vo.setFromBufferAttribute(h),this.morphTargetsRelative?(mn.addVectors(jn.min,Vo.min),jn.expandByPoint(mn),mn.addVectors(jn.max,Vo.max),jn.expandByPoint(mn)):(jn.expandByPoint(Vo.min),jn.expandByPoint(Vo.max))}jn.getCenter(s);let l=0;for(let u=0,f=t.count;u<f;u++)mn.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(mn));if(i)for(let u=0,f=i.length;u<f;u++){const h=i[u],p=this.morphTargetsRelative;for(let m=0,g=h.count;m<g;m++)mn.fromBufferAttribute(h,m),p&&(vs.fromBufferAttribute(t,m),mn.add(vs)),l=Math.max(l,s.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ci(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],p=[];for(let Z=0;Z<s.count;Z++)h[Z]=new rt,p[Z]=new rt;const m=new rt,g=new rt,x=new rt,v=new Be,S=new Be,M=new Be,T=new rt,y=new rt;function _(Z,w,A){m.fromBufferAttribute(s,Z),g.fromBufferAttribute(s,w),x.fromBufferAttribute(s,A),v.fromBufferAttribute(u,Z),S.fromBufferAttribute(u,w),M.fromBufferAttribute(u,A),g.sub(m),x.sub(m),S.sub(v),M.sub(v);const z=1/(S.x*M.y-M.x*S.y);isFinite(z)&&(T.copy(g).multiplyScalar(M.y).addScaledVector(x,-S.y).multiplyScalar(z),y.copy(x).multiplyScalar(S.x).addScaledVector(g,-M.x).multiplyScalar(z),h[Z].add(T),h[w].add(T),h[A].add(T),p[Z].add(y),p[w].add(y),p[A].add(y))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let Z=0,w=O.length;Z<w;++Z){const A=O[Z],z=A.start,ct=A.count;for(let it=z,gt=z+ct;it<gt;it+=3)_(t.getX(it+0),t.getX(it+1),t.getX(it+2))}const U=new rt,D=new rt,F=new rt,H=new rt;function B(Z){F.fromBufferAttribute(l,Z),H.copy(F);const w=h[Z];U.copy(w),U.sub(F.multiplyScalar(F.dot(w))).normalize(),D.crossVectors(H,w);const z=D.dot(p[Z])<0?-1:1;f.setXYZW(Z,U.x,U.y,U.z,z)}for(let Z=0,w=O.length;Z<w;++Z){const A=O[Z],z=A.start,ct=A.count;for(let it=z,gt=z+ct;it<gt;it+=3)B(t.getX(it+0)),B(t.getX(it+1)),B(t.getX(it+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ci(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,S=s.count;v<S;v++)s.setXYZ(v,0,0,0);const l=new rt,u=new rt,f=new rt,h=new rt,p=new rt,m=new rt,g=new rt,x=new rt;if(t)for(let v=0,S=t.count;v<S;v+=3){const M=t.getX(v+0),T=t.getX(v+1),y=t.getX(v+2);l.fromBufferAttribute(i,M),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,y),g.subVectors(f,u),x.subVectors(l,u),g.cross(x),h.fromBufferAttribute(s,M),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,y),h.add(g),p.add(g),m.add(g),s.setXYZ(M,h.x,h.y,h.z),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(y,m.x,m.y,m.z)}else for(let v=0,S=i.count;v<S;v+=3)l.fromBufferAttribute(i,v+0),u.fromBufferAttribute(i,v+1),f.fromBufferAttribute(i,v+2),g.subVectors(f,u),x.subVectors(l,u),g.cross(x),s.setXYZ(v+0,g.x,g.y,g.z),s.setXYZ(v+1,g.x,g.y,g.z),s.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)mn.fromBufferAttribute(t,i),mn.normalize(),t.setXYZ(i,mn.x,mn.y,mn.z)}toNonIndexed(){function t(h,p){const m=h.array,g=h.itemSize,x=h.normalized,v=new m.constructor(p.length*g);let S=0,M=0;for(let T=0,y=p.length;T<y;T++){h.isInterleavedBufferAttribute?S=p[T]*h.data.stride+h.offset:S=p[T]*g;for(let _=0;_<g;_++)v[M++]=m[S++]}return new Ci(v,g,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new wr,s=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=t(p,s);i.setAttribute(h,m)}const u=this.morphAttributes;for(const h in u){const p=[],m=u[h];for(let g=0,x=m.length;g<x;g++){const v=m[g],S=t(v,s);p.push(S)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,p=f.length;h<p;h++){const m=f[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let x=0,v=m.length;x<v;x++){const S=m[x];g.push(S.toJSON(t.data))}g.length>0&&(l[p]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone(i));const l=t.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const u=t.morphAttributes;for(const m in u){const g=[],x=u[m];for(let v=0,S=x.length;v<S;v++)g.push(x[v].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,g=f.length;m<g;m++){const x=f[m];this.addGroup(x.start,x.count,x.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const W_=new en,dr=new SM,Eu=new Xh,q_=new rt,Mu=new rt,Tu=new rt,bu=new rt,Ld=new rt,Au=new rt,Y_=new rt,Ru=new rt;class ia extends Zn{constructor(t=new wr,i=new x0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(u&&h){Au.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const g=h[p],x=u[p];g!==0&&(Ld.fromBufferAttribute(x,t),f?Au.addScaledVector(Ld,g):Au.addScaledVector(Ld.sub(i),g))}i.add(Au)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Eu.copy(s.boundingSphere),Eu.applyMatrix4(u),dr.copy(t.ray).recast(t.near),!(Eu.containsPoint(dr.origin)===!1&&(dr.intersectSphere(Eu,q_)===null||dr.origin.distanceToSquared(q_)>(t.far-t.near)**2))&&(W_.copy(u).invert(),dr.copy(t.ray).applyMatrix4(W_),!(s.boundingBox!==null&&dr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,dr)))}_computeIntersections(t,i,s){let l;const u=this.geometry,f=this.material,h=u.index,p=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,x=u.attributes.normal,v=u.groups,S=u.drawRange;if(h!==null)if(Array.isArray(f))for(let M=0,T=v.length;M<T;M++){const y=v[M],_=f[y.materialIndex],O=Math.max(y.start,S.start),U=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let D=O,F=U;D<F;D+=3){const H=h.getX(D),B=h.getX(D+1),Z=h.getX(D+2);l=Cu(this,_,t,s,m,g,x,H,B,Z),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const M=Math.max(0,S.start),T=Math.min(h.count,S.start+S.count);for(let y=M,_=T;y<_;y+=3){const O=h.getX(y),U=h.getX(y+1),D=h.getX(y+2);l=Cu(this,f,t,s,m,g,x,O,U,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let M=0,T=v.length;M<T;M++){const y=v[M],_=f[y.materialIndex],O=Math.max(y.start,S.start),U=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let D=O,F=U;D<F;D+=3){const H=D,B=D+1,Z=D+2;l=Cu(this,_,t,s,m,g,x,H,B,Z),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const M=Math.max(0,S.start),T=Math.min(p.count,S.start+S.count);for(let y=M,_=T;y<_;y+=3){const O=y,U=y+1,D=y+2;l=Cu(this,f,t,s,m,g,x,O,U,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function DM(r,t,i,s,l,u,f,h){let p;if(t.side===zn?p=s.intersectTriangle(f,u,l,!0,h):p=s.intersectTriangle(l,u,f,t.side===Va,h),p===null)return null;Ru.copy(h),Ru.applyMatrix4(r.matrixWorld);const m=i.ray.origin.distanceTo(Ru);return m<i.near||m>i.far?null:{distance:m,point:Ru.clone(),object:r}}function Cu(r,t,i,s,l,u,f,h,p,m){r.getVertexPosition(h,Mu),r.getVertexPosition(p,Tu),r.getVertexPosition(m,bu);const g=DM(r,t,i,s,Mu,Tu,bu,Y_);if(g){const x=new rt;_i.getBarycoord(Y_,Mu,Tu,bu,x),l&&(g.uv=_i.getInterpolatedAttribute(l,h,p,m,x,new Be)),u&&(g.uv1=_i.getInterpolatedAttribute(u,h,p,m,x,new Be)),f&&(g.normal=_i.getInterpolatedAttribute(f,h,p,m,x,new rt),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:p,c:m,normal:new rt,materialIndex:0};_i.getNormal(Mu,Tu,bu,v.normal),g.face=v,g.barycoord=x}return g}class il extends wr{constructor(t=1,i=1,s=1,l=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:f};const h=this;l=Math.floor(l),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],g=[],x=[];let v=0,S=0;M("z","y","x",-1,-1,s,i,t,f,u,0),M("z","y","x",1,-1,s,i,-t,f,u,1),M("x","z","y",1,1,t,s,i,l,f,2),M("x","z","y",1,-1,t,s,-i,l,f,3),M("x","y","z",1,-1,t,i,s,l,u,4),M("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(p),this.setAttribute("position",new Tr(m,3)),this.setAttribute("normal",new Tr(g,3)),this.setAttribute("uv",new Tr(x,2));function M(T,y,_,O,U,D,F,H,B,Z,w){const A=D/B,z=F/Z,ct=D/2,it=F/2,gt=H/2,ht=B+1,W=Z+1;let at=0,j=0;const yt=new rt;for(let N=0;N<W;N++){const nt=N*z-it;for(let Tt=0;Tt<ht;Tt++){const Rt=Tt*A-ct;yt[T]=Rt*O,yt[y]=nt*U,yt[_]=gt,m.push(yt.x,yt.y,yt.z),yt[T]=0,yt[y]=0,yt[_]=H>0?1:-1,g.push(yt.x,yt.y,yt.z),x.push(Tt/B),x.push(1-N/Z),at+=1}}for(let N=0;N<Z;N++)for(let nt=0;nt<B;nt++){const Tt=v+nt+ht*N,Rt=v+nt+ht*(N+1),q=v+(nt+1)+ht*(N+1),pt=v+(nt+1)+ht*N;p.push(Tt,Rt,pt),p.push(Rt,q,pt),j+=6}h.addGroup(S,j,w),S+=j,v+=at}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new il(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Os(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Nn(r){const t={};for(let i=0;i<r.length;i++){const s=Os(r[i]);for(const l in s)t[l]=s[l]}return t}function UM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function E0(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Re.workingColorSpace}const LM={clone:Os,merge:Nn};var NM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,OM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ka extends Qu{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NM,this.fragmentShader=OM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Os(t.uniforms),this.uniformsGroups=UM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class M0 extends Zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=na}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ia=new rt,j_=new Be,Z_=new Be;class li extends M0{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Ch*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(dd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ch*2*Math.atan(Math.tan(dd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ia.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ia.x,Ia.y).multiplyScalar(-t/Ia.z),Ia.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ia.x,Ia.y).multiplyScalar(-t/Ia.z)}getViewSize(t,i){return this.getViewBounds(t,j_,Z_),i.subVectors(Z_,j_)}setViewOffset(t,i,s,l,u,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(dd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*l/p,i-=f.offsetY*s/m,l*=f.width/p,s*=f.height/m}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const xs=-90,Ss=1;class PM extends Zn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new li(xs,Ss,t,i);l.layers=this.layers,this.add(l);const u=new li(xs,Ss,t,i);u.layers=this.layers,this.add(u);const f=new li(xs,Ss,t,i);f.layers=this.layers,this.add(f);const h=new li(xs,Ss,t,i);h.layers=this.layers,this.add(h);const p=new li(xs,Ss,t,i);p.layers=this.layers,this.add(p);const m=new li(xs,Ss,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,f,h,p]=i;for(const m of i)this.remove(m);if(t===na)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===qu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,f,h,p,m,g]=this.children,x=t.getRenderTarget(),v=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,u),t.setRenderTarget(s,1,l),t.render(i,f),t.setRenderTarget(s,2,l),t.render(i,h),t.setRenderTarget(s,3,l),t.render(i,p),t.setRenderTarget(s,4,l),t.render(i,m),s.texture.generateMipmaps=T,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(x,v,S),t.xr.enabled=M,s.texture.needsPMREMUpdate=!0}}class T0 extends Hn{constructor(t,i,s,l,u,f,h,p,m,g){t=t!==void 0?t:[],i=i!==void 0?i:ws,super(t,i,s,l,u,f,h,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class IM extends Ar{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new T0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ri}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new il(5,5,5),u=new ka({name:"CubemapFromEquirect",uniforms:Os(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:zn,blending:za});u.uniforms.tEquirect.value=i;const f=new ia(l,u),h=i.minFilter;return i.minFilter===Er&&(i.minFilter=Ri),new PM(1,10,this).update(t,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,i,s,l){const u=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(u)}}class wu extends Zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const BM={type:"move"};class Nd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,f=null;const h=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const T of t.hand.values()){const y=i.getJointPose(T,s),_=this._getHandJoint(m,T);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],v=g.position.distanceTo(x.position),S=.02,M=.005;m.inputState.pinching&&v>S+M?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&v<=S-M&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(BM)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new wu;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class FM extends Zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new la,this.environmentIntensity=1,this.environmentRotation=new la,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Od=new rt,zM=new rt,HM=new ue;class _r{constructor(t=new rt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Od.subVectors(s,i).cross(zM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Od),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||HM.getNormalMatrix(t),l=this.coplanarPoint(Od).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new Xh,Du=new rt;class b0{constructor(t=new _r,i=new _r,s=new _r,l=new _r,u=new _r,f=new _r){this.planes=[t,i,s,l,u,f]}set(t,i,s,l,u,f){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(u),h[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=na){const s=this.planes,l=t.elements,u=l[0],f=l[1],h=l[2],p=l[3],m=l[4],g=l[5],x=l[6],v=l[7],S=l[8],M=l[9],T=l[10],y=l[11],_=l[12],O=l[13],U=l[14],D=l[15];if(s[0].setComponents(p-u,v-m,y-S,D-_).normalize(),s[1].setComponents(p+u,v+m,y+S,D+_).normalize(),s[2].setComponents(p+f,v+g,y+M,D+O).normalize(),s[3].setComponents(p-f,v-g,y-M,D-O).normalize(),s[4].setComponents(p-h,v-x,y-T,D-U).normalize(),i===na)s[5].setComponents(p+h,v+x,y+T,D+U).normalize();else if(i===qu)s[5].setComponents(h,x,T,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),hr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(t){return hr.center.set(0,0,0),hr.radius=.7071067811865476,hr.applyMatrix4(t.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Du.x=l.normal.x>0?t.max.x:t.min.x,Du.y=l.normal.y>0?t.max.y:t.min.y,Du.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Du)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class A0 extends Hn{constructor(t,i,s,l,u,f,h,p,m,g=As){if(g!==As&&g!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&g===As&&(s=br),s===void 0&&g===Ls&&(s=Us),super(null,l,u,f,h,p,g,s,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=h!==void 0?h:xi,this.minFilter=p!==void 0?p:xi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new kh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class $u extends wr{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,f=i/2,h=Math.floor(s),p=Math.floor(l),m=h+1,g=p+1,x=t/h,v=i/p,S=[],M=[],T=[],y=[];for(let _=0;_<g;_++){const O=_*v-f;for(let U=0;U<m;U++){const D=U*x-u;M.push(D,-O,0),T.push(0,0,1),y.push(U/h),y.push(1-_/p)}}for(let _=0;_<p;_++)for(let O=0;O<h;O++){const U=O+m*_,D=O+m*(_+1),F=O+1+m*(_+1),H=O+1+m*_;S.push(U,D,H),S.push(D,F,H)}this.setIndex(S),this.setAttribute("position",new Tr(M,3)),this.setAttribute("normal",new Tr(T,3)),this.setAttribute("uv",new Tr(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $u(t.width,t.height,t.widthSegments,t.heightSegments)}}class GM extends Qu{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=QE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class VM extends Qu{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class kM extends M0{constructor(t=-1,i=1,s=1,l=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,f=s+t,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,f,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class XM extends li{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}function K_(r,t,i,s){const l=WM(s);switch(i){case o0:return r*t;case u0:return r*t;case c0:return r*t*2;case f0:return r*t/l.components*l.byteLength;case Hh:return r*t/l.components*l.byteLength;case d0:return r*t*2/l.components*l.byteLength;case Gh:return r*t*2/l.components*l.byteLength;case l0:return r*t*3/l.components*l.byteLength;case vi:return r*t*4/l.components*l.byteLength;case Vh:return r*t*4/l.components*l.byteLength;case Bu:case Fu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case zu:case Hu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ih:case rh:return Math.max(r,16)*Math.max(t,8)/4;case nh:case ah:return Math.max(r,8)*Math.max(t,8)/2;case sh:case oh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case lh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case uh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ch:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case fh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case dh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case hh:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case ph:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case mh:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case gh:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case _h:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case vh:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case xh:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Sh:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case yh:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Eh:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Gu:case Mh:case Th:return Math.ceil(r/4)*Math.ceil(t/4)*16;case h0:case bh:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Ah:case Rh:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function WM(r){switch(r){case oa:case a0:return{byteLength:1,components:1};case Yo:case r0:case Jo:return{byteLength:2,components:1};case Fh:case zh:return{byteLength:2,components:4};case br:case Bh:case ea:return{byteLength:4,components:1};case s0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ih}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ih);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function R0(){let r=null,t=!1,i=null,s=null;function l(u,f){i(u,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){r=u}}}function qM(r){const t=new WeakMap;function i(h,p){const m=h.array,g=h.usage,x=m.byteLength,v=r.createBuffer();r.bindBuffer(p,v),r.bufferData(p,m,g),h.onUploadCallback();let S;if(m instanceof Float32Array)S=r.FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=r.SHORT;else if(m instanceof Uint32Array)S=r.UNSIGNED_INT;else if(m instanceof Int32Array)S=r.INT;else if(m instanceof Int8Array)S=r.BYTE;else if(m instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:x}}function s(h,p,m){const g=p.array,x=p.updateRanges;if(r.bindBuffer(m,h),x.length===0)r.bufferSubData(m,0,g);else{x.sort((S,M)=>S.start-M.start);let v=0;for(let S=1;S<x.length;S++){const M=x[v],T=x[S];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++v,x[v]=T)}x.length=v+1;for(let S=0,M=x.length;S<M;S++){const T=x[S];r.bufferSubData(m,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(r.deleteBuffer(p.buffer),t.delete(h))}function f(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=t.get(h);if(m===void 0)t.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,h,p),m.version=h.version}}return{get:l,remove:u,update:f}}var YM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jM=`#ifdef USE_ALPHAHASH
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
#endif`,ZM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,KM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$M=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,JM=`#ifdef USE_AOMAP
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
#endif`,tT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eT=`#ifdef USE_BATCHING
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
#endif`,nT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,aT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sT=`#ifdef USE_IRIDESCENCE
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
#endif`,oT=`#ifdef USE_BUMPMAP
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
#endif`,lT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,uT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,gT=`#define PI 3.141592653589793
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
} // validated`,_T=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vT=`vec3 transformedNormal = objectNormal;
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
#endif`,xT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ST=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ET=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,MT="gl_FragColor = linearToOutputTexel( gl_FragColor );",TT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bT=`#ifdef USE_ENVMAP
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
#endif`,AT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,RT=`#ifdef USE_ENVMAP
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
#endif`,CT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wT=`#ifdef USE_ENVMAP
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
#endif`,DT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,UT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,NT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,OT=`#ifdef USE_GRADIENTMAP
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
}`,PT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,IT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,BT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,FT=`uniform bool receiveShadow;
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
#endif`,zT=`#ifdef USE_ENVMAP
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
#endif`,HT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,GT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,XT=`PhysicalMaterial material;
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
#endif`,WT=`struct PhysicalMaterial {
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
}`,qT=`
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
#endif`,YT=`#if defined( RE_IndirectDiffuse )
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
#endif`,jT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ZT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$T=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,JT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nb=`#if defined( USE_POINTS_UV )
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
#endif`,ib=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ab=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ob=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lb=`#ifdef USE_MORPHTARGETS
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
#endif`,ub=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,db=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mb=`#ifdef USE_NORMALMAP
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
#endif`,gb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_b=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Eb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ab=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Db=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ub=`float getShadowMask() {
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
}`,Lb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nb=`#ifdef USE_SKINNING
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
#endif`,Ob=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pb=`#ifdef USE_SKINNING
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
#endif`,Ib=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hb=`#ifdef USE_TRANSMISSION
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
#endif`,Gb=`#ifdef USE_TRANSMISSION
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
#endif`,Vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yb=`uniform sampler2D t2D;
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
}`,jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$b=`#include <common>
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
}`,Jb=`#if DEPTH_PACKING == 3200
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
}`,tA=`#define DISTANCE
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
}`,eA=`#define DISTANCE
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
}`,nA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aA=`uniform float scale;
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
}`,rA=`uniform vec3 diffuse;
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
}`,sA=`#include <common>
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
}`,oA=`uniform vec3 diffuse;
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
}`,lA=`#define LAMBERT
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
}`,uA=`#define LAMBERT
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
}`,cA=`#define MATCAP
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
}`,fA=`#define MATCAP
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
}`,dA=`#define NORMAL
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
}`,hA=`#define NORMAL
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
}`,pA=`#define PHONG
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
}`,mA=`#define PHONG
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
}`,gA=`#define STANDARD
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
}`,_A=`#define STANDARD
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
}`,vA=`#define TOON
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
}`,xA=`#define TOON
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
}`,SA=`uniform float size;
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
}`,yA=`uniform vec3 diffuse;
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
}`,EA=`#include <common>
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
}`,MA=`uniform vec3 color;
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
}`,TA=`uniform float rotation;
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
}`,bA=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:YM,alphahash_pars_fragment:jM,alphamap_fragment:ZM,alphamap_pars_fragment:KM,alphatest_fragment:QM,alphatest_pars_fragment:$M,aomap_fragment:JM,aomap_pars_fragment:tT,batching_pars_vertex:eT,batching_vertex:nT,begin_vertex:iT,beginnormal_vertex:aT,bsdfs:rT,iridescence_fragment:sT,bumpmap_pars_fragment:oT,clipping_planes_fragment:lT,clipping_planes_pars_fragment:uT,clipping_planes_pars_vertex:cT,clipping_planes_vertex:fT,color_fragment:dT,color_pars_fragment:hT,color_pars_vertex:pT,color_vertex:mT,common:gT,cube_uv_reflection_fragment:_T,defaultnormal_vertex:vT,displacementmap_pars_vertex:xT,displacementmap_vertex:ST,emissivemap_fragment:yT,emissivemap_pars_fragment:ET,colorspace_fragment:MT,colorspace_pars_fragment:TT,envmap_fragment:bT,envmap_common_pars_fragment:AT,envmap_pars_fragment:RT,envmap_pars_vertex:CT,envmap_physical_pars_fragment:zT,envmap_vertex:wT,fog_vertex:DT,fog_pars_vertex:UT,fog_fragment:LT,fog_pars_fragment:NT,gradientmap_pars_fragment:OT,lightmap_pars_fragment:PT,lights_lambert_fragment:IT,lights_lambert_pars_fragment:BT,lights_pars_begin:FT,lights_toon_fragment:HT,lights_toon_pars_fragment:GT,lights_phong_fragment:VT,lights_phong_pars_fragment:kT,lights_physical_fragment:XT,lights_physical_pars_fragment:WT,lights_fragment_begin:qT,lights_fragment_maps:YT,lights_fragment_end:jT,logdepthbuf_fragment:ZT,logdepthbuf_pars_fragment:KT,logdepthbuf_pars_vertex:QT,logdepthbuf_vertex:$T,map_fragment:JT,map_pars_fragment:tb,map_particle_fragment:eb,map_particle_pars_fragment:nb,metalnessmap_fragment:ib,metalnessmap_pars_fragment:ab,morphinstance_vertex:rb,morphcolor_vertex:sb,morphnormal_vertex:ob,morphtarget_pars_vertex:lb,morphtarget_vertex:ub,normal_fragment_begin:cb,normal_fragment_maps:fb,normal_pars_fragment:db,normal_pars_vertex:hb,normal_vertex:pb,normalmap_pars_fragment:mb,clearcoat_normal_fragment_begin:gb,clearcoat_normal_fragment_maps:_b,clearcoat_pars_fragment:vb,iridescence_pars_fragment:xb,opaque_fragment:Sb,packing:yb,premultiplied_alpha_fragment:Eb,project_vertex:Mb,dithering_fragment:Tb,dithering_pars_fragment:bb,roughnessmap_fragment:Ab,roughnessmap_pars_fragment:Rb,shadowmap_pars_fragment:Cb,shadowmap_pars_vertex:wb,shadowmap_vertex:Db,shadowmask_pars_fragment:Ub,skinbase_vertex:Lb,skinning_pars_vertex:Nb,skinning_vertex:Ob,skinnormal_vertex:Pb,specularmap_fragment:Ib,specularmap_pars_fragment:Bb,tonemapping_fragment:Fb,tonemapping_pars_fragment:zb,transmission_fragment:Hb,transmission_pars_fragment:Gb,uv_pars_fragment:Vb,uv_pars_vertex:kb,uv_vertex:Xb,worldpos_vertex:Wb,background_vert:qb,background_frag:Yb,backgroundCube_vert:jb,backgroundCube_frag:Zb,cube_vert:Kb,cube_frag:Qb,depth_vert:$b,depth_frag:Jb,distanceRGBA_vert:tA,distanceRGBA_frag:eA,equirect_vert:nA,equirect_frag:iA,linedashed_vert:aA,linedashed_frag:rA,meshbasic_vert:sA,meshbasic_frag:oA,meshlambert_vert:lA,meshlambert_frag:uA,meshmatcap_vert:cA,meshmatcap_frag:fA,meshnormal_vert:dA,meshnormal_frag:hA,meshphong_vert:pA,meshphong_frag:mA,meshphysical_vert:gA,meshphysical_frag:_A,meshtoon_vert:vA,meshtoon_frag:xA,points_vert:SA,points_frag:yA,shadow_vert:EA,shadow_frag:MA,sprite_vert:TA,sprite_frag:bA},Lt={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Ai={basic:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Pe(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Nn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Nn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Pe(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Nn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Nn([Lt.points,Lt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Nn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Nn([Lt.common,Lt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Nn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Nn([Lt.sprite,Lt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:Nn([Lt.common,Lt.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:Nn([Lt.lights,Lt.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Ai.physical={uniforms:Nn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const Uu={r:0,b:0,g:0},pr=new la,AA=new en;function RA(r,t,i,s,l,u,f){const h=new Pe(0);let p=u===!0?0:1,m,g,x=null,v=0,S=null;function M(U){let D=U.isScene===!0?U.background:null;return D&&D.isTexture&&(D=(U.backgroundBlurriness>0?i:t).get(D)),D}function T(U){let D=!1;const F=M(U);F===null?_(h,p):F&&F.isColor&&(_(F,1),D=!0);const H=r.xr.getEnvironmentBlendMode();H==="additive"?s.buffers.color.setClear(0,0,0,1,f):H==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(U,D){const F=M(D);F&&(F.isCubeTexture||F.mapping===Ku)?(g===void 0&&(g=new ia(new il(1,1,1),new ka({name:"BackgroundCubeMaterial",uniforms:Os(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,B,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),pr.copy(D.backgroundRotation),pr.x*=-1,pr.y*=-1,pr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),g.material.uniforms.envMap.value=F,g.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(AA.makeRotationFromEuler(pr)),g.material.toneMapped=Re.getTransfer(F.colorSpace)!==Oe,(x!==F||v!==F.version||S!==r.toneMapping)&&(g.material.needsUpdate=!0,x=F,v=F.version,S=r.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):F&&F.isTexture&&(m===void 0&&(m=new ia(new $u(2,2),new ka({name:"BackgroundMaterial",uniforms:Os(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Va,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=F,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=Re.getTransfer(F.colorSpace)!==Oe,F.matrixAutoUpdate===!0&&F.updateMatrix(),m.material.uniforms.uvTransform.value.copy(F.matrix),(x!==F||v!==F.version||S!==r.toneMapping)&&(m.material.needsUpdate=!0,x=F,v=F.version,S=r.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function _(U,D){U.getRGB(Uu,E0(r)),s.buffers.color.setClear(Uu.r,Uu.g,Uu.b,D,f)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,D=1){h.set(U),p=D,_(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,_(h,p)},render:T,addToRenderList:y,dispose:O}}function CA(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=v(null);let u=l,f=!1;function h(A,z,ct,it,gt){let ht=!1;const W=x(it,ct,z);u!==W&&(u=W,m(u.object)),ht=S(A,it,ct,gt),ht&&M(A,it,ct,gt),gt!==null&&t.update(gt,r.ELEMENT_ARRAY_BUFFER),(ht||f)&&(f=!1,D(A,z,ct,it),gt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(gt).buffer))}function p(){return r.createVertexArray()}function m(A){return r.bindVertexArray(A)}function g(A){return r.deleteVertexArray(A)}function x(A,z,ct){const it=ct.wireframe===!0;let gt=s[A.id];gt===void 0&&(gt={},s[A.id]=gt);let ht=gt[z.id];ht===void 0&&(ht={},gt[z.id]=ht);let W=ht[it];return W===void 0&&(W=v(p()),ht[it]=W),W}function v(A){const z=[],ct=[],it=[];for(let gt=0;gt<i;gt++)z[gt]=0,ct[gt]=0,it[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:ct,attributeDivisors:it,object:A,attributes:{},index:null}}function S(A,z,ct,it){const gt=u.attributes,ht=z.attributes;let W=0;const at=ct.getAttributes();for(const j in at)if(at[j].location>=0){const N=gt[j];let nt=ht[j];if(nt===void 0&&(j==="instanceMatrix"&&A.instanceMatrix&&(nt=A.instanceMatrix),j==="instanceColor"&&A.instanceColor&&(nt=A.instanceColor)),N===void 0||N.attribute!==nt||nt&&N.data!==nt.data)return!0;W++}return u.attributesNum!==W||u.index!==it}function M(A,z,ct,it){const gt={},ht=z.attributes;let W=0;const at=ct.getAttributes();for(const j in at)if(at[j].location>=0){let N=ht[j];N===void 0&&(j==="instanceMatrix"&&A.instanceMatrix&&(N=A.instanceMatrix),j==="instanceColor"&&A.instanceColor&&(N=A.instanceColor));const nt={};nt.attribute=N,N&&N.data&&(nt.data=N.data),gt[j]=nt,W++}u.attributes=gt,u.attributesNum=W,u.index=it}function T(){const A=u.newAttributes;for(let z=0,ct=A.length;z<ct;z++)A[z]=0}function y(A){_(A,0)}function _(A,z){const ct=u.newAttributes,it=u.enabledAttributes,gt=u.attributeDivisors;ct[A]=1,it[A]===0&&(r.enableVertexAttribArray(A),it[A]=1),gt[A]!==z&&(r.vertexAttribDivisor(A,z),gt[A]=z)}function O(){const A=u.newAttributes,z=u.enabledAttributes;for(let ct=0,it=z.length;ct<it;ct++)z[ct]!==A[ct]&&(r.disableVertexAttribArray(ct),z[ct]=0)}function U(A,z,ct,it,gt,ht,W){W===!0?r.vertexAttribIPointer(A,z,ct,gt,ht):r.vertexAttribPointer(A,z,ct,it,gt,ht)}function D(A,z,ct,it){T();const gt=it.attributes,ht=ct.getAttributes(),W=z.defaultAttributeValues;for(const at in ht){const j=ht[at];if(j.location>=0){let yt=gt[at];if(yt===void 0&&(at==="instanceMatrix"&&A.instanceMatrix&&(yt=A.instanceMatrix),at==="instanceColor"&&A.instanceColor&&(yt=A.instanceColor)),yt!==void 0){const N=yt.normalized,nt=yt.itemSize,Tt=t.get(yt);if(Tt===void 0)continue;const Rt=Tt.buffer,q=Tt.type,pt=Tt.bytesPerElement,St=q===r.INT||q===r.UNSIGNED_INT||yt.gpuType===Bh;if(yt.isInterleavedBufferAttribute){const bt=yt.data,Ct=bt.stride,Qt=yt.offset;if(bt.isInstancedInterleavedBuffer){for(let It=0;It<j.locationSize;It++)_(j.location+It,bt.meshPerAttribute);A.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let It=0;It<j.locationSize;It++)y(j.location+It);r.bindBuffer(r.ARRAY_BUFFER,Rt);for(let It=0;It<j.locationSize;It++)U(j.location+It,nt/j.locationSize,q,N,Ct*pt,(Qt+nt/j.locationSize*It)*pt,St)}else{if(yt.isInstancedBufferAttribute){for(let bt=0;bt<j.locationSize;bt++)_(j.location+bt,yt.meshPerAttribute);A.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let bt=0;bt<j.locationSize;bt++)y(j.location+bt);r.bindBuffer(r.ARRAY_BUFFER,Rt);for(let bt=0;bt<j.locationSize;bt++)U(j.location+bt,nt/j.locationSize,q,N,nt*pt,nt/j.locationSize*bt*pt,St)}}else if(W!==void 0){const N=W[at];if(N!==void 0)switch(N.length){case 2:r.vertexAttrib2fv(j.location,N);break;case 3:r.vertexAttrib3fv(j.location,N);break;case 4:r.vertexAttrib4fv(j.location,N);break;default:r.vertexAttrib1fv(j.location,N)}}}}O()}function F(){Z();for(const A in s){const z=s[A];for(const ct in z){const it=z[ct];for(const gt in it)g(it[gt].object),delete it[gt];delete z[ct]}delete s[A]}}function H(A){if(s[A.id]===void 0)return;const z=s[A.id];for(const ct in z){const it=z[ct];for(const gt in it)g(it[gt].object),delete it[gt];delete z[ct]}delete s[A.id]}function B(A){for(const z in s){const ct=s[z];if(ct[A.id]===void 0)continue;const it=ct[A.id];for(const gt in it)g(it[gt].object),delete it[gt];delete ct[A.id]}}function Z(){w(),f=!0,u!==l&&(u=l,m(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Z,resetDefaultState:w,dispose:F,releaseStatesOfGeometry:H,releaseStatesOfProgram:B,initAttributes:T,enableAttribute:y,disableUnusedAttributes:O}}function wA(r,t,i){let s;function l(m){s=m}function u(m,g){r.drawArrays(s,m,g),i.update(g,s,1)}function f(m,g,x){x!==0&&(r.drawArraysInstanced(s,m,g,x),i.update(g,s,x))}function h(m,g,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,g,0,x);let S=0;for(let M=0;M<x;M++)S+=g[M];i.update(S,s,1)}function p(m,g,x,v){if(x===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<m.length;M++)f(m[M],g[M],v[M]);else{S.multiDrawArraysInstancedWEBGL(s,m,0,g,0,v,0,x);let M=0;for(let T=0;T<x;T++)M+=g[T]*v[T];i.update(M,s,1)}}this.setMode=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function DA(r,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(B){return!(B!==vi&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const Z=B===Jo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==oa&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==ea&&!Z)}function p(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const x=i.logarithmicDepthBuffer===!0,v=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),O=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=M>0,H=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:x,reverseDepthBuffer:v,maxTextures:S,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:O,maxVaryings:U,maxFragmentUniforms:D,vertexTextures:F,maxSamples:H}}function UA(r){const t=this;let i=null,s=0,l=!1,u=!1;const f=new _r,h=new ue,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const S=x.length!==0||v||s!==0||l;return l=v,s=x.length,S},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,v){i=g(x,v,0)},this.setState=function(x,v,S){const M=x.clippingPlanes,T=x.clipIntersection,y=x.clipShadows,_=r.get(x);if(!l||M===null||M.length===0||u&&!y)u?g(null):m();else{const O=u?0:s,U=O*4;let D=_.clippingState||null;p.value=D,D=g(M,v,U,S);for(let F=0;F!==U;++F)D[F]=i[F];_.clippingState=D,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=O}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(x,v,S,M){const T=x!==null?x.length:0;let y=null;if(T!==0){if(y=p.value,M!==!0||y===null){const _=S+T*4,O=v.matrixWorldInverse;h.getNormalMatrix(O),(y===null||y.length<_)&&(y=new Float32Array(_));for(let U=0,D=S;U!==T;++U,D+=4)f.copy(x[U]).applyMatrix4(O,h),f.normal.toArray(y,D),y[D+3]=f.constant}p.value=y,p.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,y}}function LA(r){let t=new WeakMap;function i(f,h){return h===$d?f.mapping=ws:h===Jd&&(f.mapping=Ds),f}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===$d||h===Jd)if(t.has(f)){const p=t.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new IM(p.height);return m.fromEquirectangularTexture(r,f),t.set(f,m),f.addEventListener("dispose",l),i(m.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const Ts=4,Q_=[.125,.215,.35,.446,.526,.582],Sr=20,Pd=new kM,$_=new Pe;let Id=null,Bd=0,Fd=0,zd=!1;const vr=(1+Math.sqrt(5))/2,ys=1/vr,J_=[new rt(-vr,ys,0),new rt(vr,ys,0),new rt(-ys,0,vr),new rt(ys,0,vr),new rt(0,vr,-ys),new rt(0,vr,ys),new rt(-1,1,-1),new rt(1,1,-1),new rt(-1,1,1),new rt(1,1,1)],NA=new rt;class tv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,u={}){const{size:f=256,position:h=NA}=u;Id=this._renderer.getRenderTarget(),Bd=this._renderer.getActiveCubeFace(),Fd=this._renderer.getActiveMipmapLevel(),zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,s,l,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=iv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Id,Bd,Fd),this._renderer.xr.enabled=zd,t.scissorTest=!1,Lu(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===ws||t.mapping===Ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Id=this._renderer.getRenderTarget(),Bd=this._renderer.getActiveCubeFace(),Fd=this._renderer.getActiveMipmapLevel(),zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ri,minFilter:Ri,generateMipmaps:!1,type:Jo,format:vi,colorSpace:Ns,depthBuffer:!1},l=ev(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ev(t,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=OA(u)),this._blurMaterial=PA(u,t,i)}return l}_compileMaterial(t){const i=new ia(this._lodPlanes[0],t);this._renderer.compile(i,Pd)}_sceneToCubeUV(t,i,s,l,u){const p=new li(90,1,i,s),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,v=x.autoClear,S=x.toneMapping;x.getClearColor($_),x.toneMapping=Ha,x.autoClear=!1;const M=new x0({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),T=new ia(new il,M);let y=!1;const _=t.background;_?_.isColor&&(M.color.copy(_),t.background=null,y=!0):(M.color.copy($_),y=!0);for(let O=0;O<6;O++){const U=O%3;U===0?(p.up.set(0,m[O],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+g[O],u.y,u.z)):U===1?(p.up.set(0,0,m[O]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+g[O],u.z)):(p.up.set(0,m[O],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+g[O]));const D=this._cubeSize;Lu(l,U*D,O>2?D:0,D,D),x.setRenderTarget(l),y&&x.render(T,p),x.render(t,p)}T.geometry.dispose(),T.material.dispose(),x.toneMapping=S,x.autoClear=v,t.background=_}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===ws||t.mapping===Ds;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=iv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nv());const u=l?this._cubemapMaterial:this._equirectMaterial,f=new ia(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=t;const p=this._cubeSize;Lu(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(f,Pd)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=J_[(l-u-1)%J_.length];this._blur(t,u-1,u,f,h)}i.autoClear=s}_blur(t,i,s,l,u){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",u),this._halfBlur(f,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,f,h){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,x=new ia(this._lodPlanes[l],m),v=m.uniforms,S=this._sizeLods[s]-1,M=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Sr-1),T=u/M,y=isFinite(u)?1+Math.floor(g*T):Sr;y>Sr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Sr}`);const _=[];let O=0;for(let B=0;B<Sr;++B){const Z=B/T,w=Math.exp(-Z*Z/2);_.push(w),B===0?O+=w:B<y&&(O+=2*w)}for(let B=0;B<_.length;B++)_[B]=_[B]/O;v.envMap.value=t.texture,v.samples.value=y,v.weights.value=_,v.latitudinal.value=f==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:U}=this;v.dTheta.value=M,v.mipInt.value=U-s;const D=this._sizeLods[l],F=3*D*(l>U-Ts?l-U+Ts:0),H=4*(this._cubeSize-D);Lu(i,F,H,3*D,2*D),p.setRenderTarget(i),p.render(x,Pd)}}function OA(r){const t=[],i=[],s=[];let l=r;const u=r-Ts+1+Q_.length;for(let f=0;f<u;f++){const h=Math.pow(2,l);i.push(h);let p=1/h;f>r-Ts?p=Q_[f-r+Ts-1]:f===0&&(p=0),s.push(p);const m=1/(h-2),g=-m,x=1+m,v=[g,g,x,g,x,x,g,g,x,x,g,x],S=6,M=6,T=3,y=2,_=1,O=new Float32Array(T*M*S),U=new Float32Array(y*M*S),D=new Float32Array(_*M*S);for(let H=0;H<S;H++){const B=H%3*2/3-1,Z=H>2?0:-1,w=[B,Z,0,B+2/3,Z,0,B+2/3,Z+1,0,B,Z,0,B+2/3,Z+1,0,B,Z+1,0];O.set(w,T*M*H),U.set(v,y*M*H);const A=[H,H,H,H,H,H];D.set(A,_*M*H)}const F=new wr;F.setAttribute("position",new Ci(O,T)),F.setAttribute("uv",new Ci(U,y)),F.setAttribute("faceIndex",new Ci(D,_)),t.push(F),l>Ts&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function ev(r,t,i){const s=new Ar(r,t,i);return s.texture.mapping=Ku,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Lu(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function PA(r,t,i){const s=new Float32Array(Sr),l=new rt(0,1,0);return new ka({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Wh(),fragmentShader:`

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
		`,blending:za,depthTest:!1,depthWrite:!1})}function nv(){return new ka({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wh(),fragmentShader:`

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
		`,blending:za,depthTest:!1,depthWrite:!1})}function iv(){return new ka({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:za,depthTest:!1,depthWrite:!1})}function Wh(){return`

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
	`}function IA(r){let t=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const p=h.mapping,m=p===$d||p===Jd,g=p===ws||p===Ds;if(m||g){let x=t.get(h);const v=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return i===null&&(i=new tv(r)),x=m?i.fromEquirectangular(h,x):i.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),x.texture;if(x!==void 0)return x.texture;{const S=h.image;return m&&S&&S.height>0||g&&S&&l(S)?(i===null&&(i=new tv(r)),x=m?i.fromEquirectangular(h):i.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),h.addEventListener("dispose",u),x.texture):null}}}return h}function l(h){let p=0;const m=6;for(let g=0;g<m;g++)h[g]!==void 0&&p++;return p===m}function u(h){const p=h.target;p.removeEventListener("dispose",u);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function BA(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&gr("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function FA(r,t,i,s){const l={},u=new WeakMap;function f(x){const v=x.target;v.index!==null&&t.remove(v.index);for(const M in v.attributes)t.remove(v.attributes[M]);v.removeEventListener("dispose",f),delete l[v.id];const S=u.get(v);S&&(t.remove(S),u.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(x,v){return l[v.id]===!0||(v.addEventListener("dispose",f),l[v.id]=!0,i.memory.geometries++),v}function p(x){const v=x.attributes;for(const S in v)t.update(v[S],r.ARRAY_BUFFER)}function m(x){const v=[],S=x.index,M=x.attributes.position;let T=0;if(S!==null){const O=S.array;T=S.version;for(let U=0,D=O.length;U<D;U+=3){const F=O[U+0],H=O[U+1],B=O[U+2];v.push(F,H,H,B,B,F)}}else if(M!==void 0){const O=M.array;T=M.version;for(let U=0,D=O.length/3-1;U<D;U+=3){const F=U+0,H=U+1,B=U+2;v.push(F,H,H,B,B,F)}}else return;const y=new(m0(v)?y0:S0)(v,1);y.version=T;const _=u.get(x);_&&t.remove(_),u.set(x,y)}function g(x){const v=u.get(x);if(v){const S=x.index;S!==null&&v.version<S.version&&m(x)}else m(x);return u.get(x)}return{get:h,update:p,getWireframeAttribute:g}}function zA(r,t,i){let s;function l(v){s=v}let u,f;function h(v){u=v.type,f=v.bytesPerElement}function p(v,S){r.drawElements(s,S,u,v*f),i.update(S,s,1)}function m(v,S,M){M!==0&&(r.drawElementsInstanced(s,S,u,v*f,M),i.update(S,s,M))}function g(v,S,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,u,v,0,M);let y=0;for(let _=0;_<M;_++)y+=S[_];i.update(y,s,1)}function x(v,S,M,T){if(M===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<v.length;_++)m(v[_]/f,S[_],T[_]);else{y.multiDrawElementsInstancedWEBGL(s,S,0,u,v,0,T,0,M);let _=0;for(let O=0;O<M;O++)_+=S[O]*T[O];i.update(_,s,1)}}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function HA(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,f,h){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=h*(u/3);break;case r.LINES:i.lines+=h*(u/2);break;case r.LINE_STRIP:i.lines+=h*(u-1);break;case r.LINE_LOOP:i.lines+=h*u;break;case r.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function GA(r,t,i){const s=new WeakMap,l=new Ke;function u(f,h,p){const m=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=g!==void 0?g.length:0;let v=s.get(h);if(v===void 0||v.count!==x){let A=function(){Z.dispose(),s.delete(h),h.removeEventListener("dispose",A)};var S=A;v!==void 0&&v.texture.dispose();const M=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let D=0;M===!0&&(D=1),T===!0&&(D=2),y===!0&&(D=3);let F=h.attributes.position.count*D,H=1;F>t.maxTextureSize&&(H=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const B=new Float32Array(F*H*4*x),Z=new g0(B,F,H,x);Z.type=ea,Z.needsUpdate=!0;const w=D*4;for(let z=0;z<x;z++){const ct=_[z],it=O[z],gt=U[z],ht=F*H*4*z;for(let W=0;W<ct.count;W++){const at=W*w;M===!0&&(l.fromBufferAttribute(ct,W),B[ht+at+0]=l.x,B[ht+at+1]=l.y,B[ht+at+2]=l.z,B[ht+at+3]=0),T===!0&&(l.fromBufferAttribute(it,W),B[ht+at+4]=l.x,B[ht+at+5]=l.y,B[ht+at+6]=l.z,B[ht+at+7]=0),y===!0&&(l.fromBufferAttribute(gt,W),B[ht+at+8]=l.x,B[ht+at+9]=l.y,B[ht+at+10]=l.z,B[ht+at+11]=gt.itemSize===4?l.w:1)}}v={count:x,texture:Z,size:new Be(F,H)},s.set(h,v),h.addEventListener("dispose",A)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let M=0;for(let y=0;y<m.length;y++)M+=m[y];const T=h.morphTargetsRelative?1:1-M;p.getUniforms().setValue(r,"morphTargetBaseInfluence",T),p.getUniforms().setValue(r,"morphTargetInfluences",m)}p.getUniforms().setValue(r,"morphTargetsTexture",v.texture,i),p.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:u}}function VA(r,t,i,s){let l=new WeakMap;function u(p){const m=s.render.frame,g=p.geometry,x=t.get(p,g);if(l.get(x)!==m&&(t.update(x),l.set(x,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==m&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const v=p.skeleton;l.get(v)!==m&&(v.update(),l.set(v,m))}return x}function f(){l=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:f}}const C0=new Hn,av=new A0(1,1),w0=new g0,D0=new vM,U0=new T0,rv=[],sv=[],ov=new Float32Array(16),lv=new Float32Array(9),uv=new Float32Array(4);function Fs(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let u=rv[l];if(u===void 0&&(u=new Float32Array(l),rv[l]=u),t!==0){s.toArray(u,0);for(let f=1,h=0;f!==t;++f)h+=i,r[f].toArray(u,h)}return u}function un(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function cn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Ju(r,t){let i=sv[t];i===void 0&&(i=new Int32Array(t),sv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function kA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function XA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(un(i,t))return;r.uniform2fv(this.addr,t),cn(i,t)}}function WA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(un(i,t))return;r.uniform3fv(this.addr,t),cn(i,t)}}function qA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(un(i,t))return;r.uniform4fv(this.addr,t),cn(i,t)}}function YA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(un(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),cn(i,t)}else{if(un(i,s))return;uv.set(s),r.uniformMatrix2fv(this.addr,!1,uv),cn(i,s)}}function jA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(un(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),cn(i,t)}else{if(un(i,s))return;lv.set(s),r.uniformMatrix3fv(this.addr,!1,lv),cn(i,s)}}function ZA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(un(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),cn(i,t)}else{if(un(i,s))return;ov.set(s),r.uniformMatrix4fv(this.addr,!1,ov),cn(i,s)}}function KA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function QA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(un(i,t))return;r.uniform2iv(this.addr,t),cn(i,t)}}function $A(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(un(i,t))return;r.uniform3iv(this.addr,t),cn(i,t)}}function JA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(un(i,t))return;r.uniform4iv(this.addr,t),cn(i,t)}}function tR(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function eR(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(un(i,t))return;r.uniform2uiv(this.addr,t),cn(i,t)}}function nR(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(un(i,t))return;r.uniform3uiv(this.addr,t),cn(i,t)}}function iR(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(un(i,t))return;r.uniform4uiv(this.addr,t),cn(i,t)}}function aR(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let u;this.type===r.SAMPLER_2D_SHADOW?(av.compareFunction=p0,u=av):u=C0,i.setTexture2D(t||u,l)}function rR(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||D0,l)}function sR(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||U0,l)}function oR(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||w0,l)}function lR(r){switch(r){case 5126:return kA;case 35664:return XA;case 35665:return WA;case 35666:return qA;case 35674:return YA;case 35675:return jA;case 35676:return ZA;case 5124:case 35670:return KA;case 35667:case 35671:return QA;case 35668:case 35672:return $A;case 35669:case 35673:return JA;case 5125:return tR;case 36294:return eR;case 36295:return nR;case 36296:return iR;case 35678:case 36198:case 36298:case 36306:case 35682:return aR;case 35679:case 36299:case 36307:return rR;case 35680:case 36300:case 36308:case 36293:return sR;case 36289:case 36303:case 36311:case 36292:return oR}}function uR(r,t){r.uniform1fv(this.addr,t)}function cR(r,t){const i=Fs(t,this.size,2);r.uniform2fv(this.addr,i)}function fR(r,t){const i=Fs(t,this.size,3);r.uniform3fv(this.addr,i)}function dR(r,t){const i=Fs(t,this.size,4);r.uniform4fv(this.addr,i)}function hR(r,t){const i=Fs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function pR(r,t){const i=Fs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function mR(r,t){const i=Fs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function gR(r,t){r.uniform1iv(this.addr,t)}function _R(r,t){r.uniform2iv(this.addr,t)}function vR(r,t){r.uniform3iv(this.addr,t)}function xR(r,t){r.uniform4iv(this.addr,t)}function SR(r,t){r.uniform1uiv(this.addr,t)}function yR(r,t){r.uniform2uiv(this.addr,t)}function ER(r,t){r.uniform3uiv(this.addr,t)}function MR(r,t){r.uniform4uiv(this.addr,t)}function TR(r,t,i){const s=this.cache,l=t.length,u=Ju(i,l);un(s,u)||(r.uniform1iv(this.addr,u),cn(s,u));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||C0,u[f])}function bR(r,t,i){const s=this.cache,l=t.length,u=Ju(i,l);un(s,u)||(r.uniform1iv(this.addr,u),cn(s,u));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||D0,u[f])}function AR(r,t,i){const s=this.cache,l=t.length,u=Ju(i,l);un(s,u)||(r.uniform1iv(this.addr,u),cn(s,u));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||U0,u[f])}function RR(r,t,i){const s=this.cache,l=t.length,u=Ju(i,l);un(s,u)||(r.uniform1iv(this.addr,u),cn(s,u));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||w0,u[f])}function CR(r){switch(r){case 5126:return uR;case 35664:return cR;case 35665:return fR;case 35666:return dR;case 35674:return hR;case 35675:return pR;case 35676:return mR;case 5124:case 35670:return gR;case 35667:case 35671:return _R;case 35668:case 35672:return vR;case 35669:case 35673:return xR;case 5125:return SR;case 36294:return yR;case 36295:return ER;case 36296:return MR;case 35678:case 36198:case 36298:case 36306:case 35682:return TR;case 35679:case 36299:case 36307:return bR;case 35680:case 36300:case 36308:case 36293:return AR;case 36289:case 36303:case 36311:case 36292:return RR}}class wR{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=lR(i.type)}}class DR{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=CR(i.type)}}class UR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,f=l.length;u!==f;++u){const h=l[u];h.setValue(t,i[h.id],s)}}}const Hd=/(\w+)(\])?(\[|\.)?/g;function cv(r,t){r.seq.push(t),r.map[t.id]=t}function LR(r,t,i){const s=r.name,l=s.length;for(Hd.lastIndex=0;;){const u=Hd.exec(s),f=Hd.lastIndex;let h=u[1];const p=u[2]==="]",m=u[3];if(p&&(h=h|0),m===void 0||m==="["&&f+2===l){cv(i,m===void 0?new wR(h,r,t):new DR(h,r,t));break}else{let x=i.map[h];x===void 0&&(x=new UR(h),cv(i,x)),i=x}}}class Vu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=t.getActiveUniform(i,l),f=t.getUniformLocation(i,u.name);LR(u,f,this)}}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,f=i.length;u!==f;++u){const h=i[u],p=s[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function fv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const NR=37297;let OR=0;function PR(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let f=l;f<u;f++){const h=f+1;s.push(`${h===t?">":" "} ${h}: ${i[f]}`)}return s.join(`
`)}const dv=new ue;function IR(r){Re._getMatrix(dv,Re.workingColorSpace,r);const t=`mat3( ${dv.elements.map(i=>i.toFixed(4))} )`;switch(Re.getTransfer(r)){case Wu:return[t,"LinearTransferOETF"];case Oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function hv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),l=r.getShaderInfoLog(t).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+PR(r.getShaderSource(t),f)}else return l}function BR(r,t){const i=IR(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function FR(r,t){let i;switch(t){case kE:i="Linear";break;case XE:i="Reinhard";break;case WE:i="Cineon";break;case qE:i="ACESFilmic";break;case jE:i="AgX";break;case ZE:i="Neutral";break;case YE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Nu=new rt;function zR(){Re.getLuminanceCoefficients(Nu);const r=Nu.x.toFixed(4),t=Nu.y.toFixed(4),i=Nu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function HR(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function GR(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function VR(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=r.getActiveAttrib(t,l),f=u.name;let h=1;u.type===r.FLOAT_MAT2&&(h=2),u.type===r.FLOAT_MAT3&&(h=3),u.type===r.FLOAT_MAT4&&(h=4),i[f]={type:u.type,location:r.getAttribLocation(t,f),locationSize:h}}return i}function ko(r){return r!==""}function pv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const kR=/^[ \t]*#include +<([\w\d./]+)>/gm;function wh(r){return r.replace(kR,WR)}const XR=new Map;function WR(r,t){let i=ce[t];if(i===void 0){const s=XR.get(t);if(s!==void 0)i=ce[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return wh(i)}const qR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gv(r){return r.replace(qR,YR)}function YR(r,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function _v(r){let t=`precision ${r.precision} float;
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
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function jR(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===e0?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===EE?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ji&&(t="SHADOWMAP_TYPE_VSM"),t}function ZR(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ws:case Ds:t="ENVMAP_TYPE_CUBE";break;case Ku:t="ENVMAP_TYPE_CUBE_UV";break}return t}function KR(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ds:t="ENVMAP_MODE_REFRACTION";break}return t}function QR(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case n0:t="ENVMAP_BLENDING_MULTIPLY";break;case GE:t="ENVMAP_BLENDING_MIX";break;case VE:t="ENVMAP_BLENDING_ADD";break}return t}function $R(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:s,maxMip:i}}function JR(r,t,i,s){const l=r.getContext(),u=i.defines;let f=i.vertexShader,h=i.fragmentShader;const p=jR(i),m=ZR(i),g=KR(i),x=QR(i),v=$R(i),S=HR(i),M=GR(u),T=l.createProgram();let y,_,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(ko).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(ko).join(`
`),_.length>0&&(_+=`
`)):(y=[_v(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),_=[_v(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ha?"#define TONE_MAPPING":"",i.toneMapping!==Ha?ce.tonemapping_pars_fragment:"",i.toneMapping!==Ha?FR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,BR("linearToOutputTexel",i.outputColorSpace),zR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ko).join(`
`)),f=wh(f),f=pv(f,i),f=mv(f,i),h=wh(h),h=pv(h,i),h=mv(h,i),f=gv(f),h=gv(h),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===L_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===L_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const U=O+y+f,D=O+_+h,F=fv(l,l.VERTEX_SHADER,U),H=fv(l,l.FRAGMENT_SHADER,D);l.attachShader(T,F),l.attachShader(T,H),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function B(z){if(r.debug.checkShaderErrors){const ct=l.getProgramInfoLog(T).trim(),it=l.getShaderInfoLog(F).trim(),gt=l.getShaderInfoLog(H).trim();let ht=!0,W=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(ht=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,T,F,H);else{const at=hv(l,F,"vertex"),j=hv(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+ct+`
`+at+`
`+j)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(it===""||gt==="")&&(W=!1);W&&(z.diagnostics={runnable:ht,programLog:ct,vertexShader:{log:it,prefix:y},fragmentShader:{log:gt,prefix:_}})}l.deleteShader(F),l.deleteShader(H),Z=new Vu(l,T),w=VR(l,T)}let Z;this.getUniforms=function(){return Z===void 0&&B(this),Z};let w;this.getAttributes=function(){return w===void 0&&B(this),w};let A=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=l.getProgramParameter(T,NR)),A},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=OR++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=F,this.fragmentShader=H,this}let t1=0;class e1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new n1(t),i.set(t,s)),s}}class n1{constructor(t){this.id=t1++,this.code=t,this.usedTimes=0}}function i1(r,t,i,s,l,u,f){const h=new _0,p=new e1,m=new Set,g=[],x=l.logarithmicDepthBuffer,v=l.vertexTextures;let S=l.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(w){return m.add(w),w===0?"uv":`uv${w}`}function y(w,A,z,ct,it){const gt=ct.fog,ht=it.geometry,W=w.isMeshStandardMaterial?ct.environment:null,at=(w.isMeshStandardMaterial?i:t).get(w.envMap||W),j=at&&at.mapping===Ku?at.image.height:null,yt=M[w.type];w.precision!==null&&(S=l.getMaxPrecision(w.precision),S!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",S,"instead."));const N=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,nt=N!==void 0?N.length:0;let Tt=0;ht.morphAttributes.position!==void 0&&(Tt=1),ht.morphAttributes.normal!==void 0&&(Tt=2),ht.morphAttributes.color!==void 0&&(Tt=3);let Rt,q,pt,St;if(yt){const Me=Ai[yt];Rt=Me.vertexShader,q=Me.fragmentShader}else Rt=w.vertexShader,q=w.fragmentShader,p.update(w),pt=p.getVertexShaderID(w),St=p.getFragmentShaderID(w);const bt=r.getRenderTarget(),Ct=r.state.buffers.depth.getReversed(),Qt=it.isInstancedMesh===!0,It=it.isBatchedMesh===!0,Ee=!!w.map,Ce=!!w.matcap,re=!!at,I=!!w.aoMap,gn=!!w.lightMap,oe=!!w.bumpMap,de=!!w.normalMap,Xt=!!w.displacementMap,we=!!w.emissiveMap,Wt=!!w.metalnessMap,L=!!w.roughnessMap,b=w.anisotropy>0,tt=w.clearcoat>0,ft=w.dispersion>0,xt=w.iridescence>0,dt=w.sheen>0,Gt=w.transmission>0,Dt=b&&!!w.anisotropyMap,Bt=tt&&!!w.clearcoatMap,me=tt&&!!w.clearcoatNormalMap,Mt=tt&&!!w.clearcoatRoughnessMap,Ft=xt&&!!w.iridescenceMap,Kt=xt&&!!w.iridescenceThicknessMap,Vt=dt&&!!w.sheenColorMap,zt=dt&&!!w.sheenRoughnessMap,se=!!w.specularMap,jt=!!w.specularColorMap,De=!!w.specularIntensityMap,k=Gt&&!!w.transmissionMap,Nt=Gt&&!!w.thicknessMap,st=!!w.gradientMap,_t=!!w.alphaMap,wt=w.alphaTest>0,Ut=!!w.alphaHash,te=!!w.extensions;let Ge=Ha;w.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(Ge=r.toneMapping);const nn={shaderID:yt,shaderType:w.type,shaderName:w.name,vertexShader:Rt,fragmentShader:q,defines:w.defines,customVertexShaderID:pt,customFragmentShaderID:St,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:S,batching:It,batchingColor:It&&it._colorsTexture!==null,instancing:Qt,instancingColor:Qt&&it.instanceColor!==null,instancingMorph:Qt&&it.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:bt===null?r.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:Ns,alphaToCoverage:!!w.alphaToCoverage,map:Ee,matcap:Ce,envMap:re,envMapMode:re&&at.mapping,envMapCubeUVHeight:j,aoMap:I,lightMap:gn,bumpMap:oe,normalMap:de,displacementMap:v&&Xt,emissiveMap:we,normalMapObjectSpace:de&&w.normalMapType===tM,normalMapTangentSpace:de&&w.normalMapType===JE,metalnessMap:Wt,roughnessMap:L,anisotropy:b,anisotropyMap:Dt,clearcoat:tt,clearcoatMap:Bt,clearcoatNormalMap:me,clearcoatRoughnessMap:Mt,dispersion:ft,iridescence:xt,iridescenceMap:Ft,iridescenceThicknessMap:Kt,sheen:dt,sheenColorMap:Vt,sheenRoughnessMap:zt,specularMap:se,specularColorMap:jt,specularIntensityMap:De,transmission:Gt,transmissionMap:k,thicknessMap:Nt,gradientMap:st,opaque:w.transparent===!1&&w.blending===bs&&w.alphaToCoverage===!1,alphaMap:_t,alphaTest:wt,alphaHash:Ut,combine:w.combine,mapUv:Ee&&T(w.map.channel),aoMapUv:I&&T(w.aoMap.channel),lightMapUv:gn&&T(w.lightMap.channel),bumpMapUv:oe&&T(w.bumpMap.channel),normalMapUv:de&&T(w.normalMap.channel),displacementMapUv:Xt&&T(w.displacementMap.channel),emissiveMapUv:we&&T(w.emissiveMap.channel),metalnessMapUv:Wt&&T(w.metalnessMap.channel),roughnessMapUv:L&&T(w.roughnessMap.channel),anisotropyMapUv:Dt&&T(w.anisotropyMap.channel),clearcoatMapUv:Bt&&T(w.clearcoatMap.channel),clearcoatNormalMapUv:me&&T(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&T(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&T(w.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&T(w.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&T(w.sheenColorMap.channel),sheenRoughnessMapUv:zt&&T(w.sheenRoughnessMap.channel),specularMapUv:se&&T(w.specularMap.channel),specularColorMapUv:jt&&T(w.specularColorMap.channel),specularIntensityMapUv:De&&T(w.specularIntensityMap.channel),transmissionMapUv:k&&T(w.transmissionMap.channel),thicknessMapUv:Nt&&T(w.thicknessMap.channel),alphaMapUv:_t&&T(w.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(de||b),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:it.isPoints===!0&&!!ht.attributes.uv&&(Ee||_t),fog:!!gt,useFog:w.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Ct,skinning:it.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:Tt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ge,decodeVideoTexture:Ee&&w.map.isVideoTexture===!0&&Re.getTransfer(w.map.colorSpace)===Oe,decodeVideoTextureEmissive:we&&w.emissiveMap.isVideoTexture===!0&&Re.getTransfer(w.emissiveMap.colorSpace)===Oe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ta,flipSided:w.side===zn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:te&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&w.extensions.multiDraw===!0||It)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return nn.vertexUv1s=m.has(1),nn.vertexUv2s=m.has(2),nn.vertexUv3s=m.has(3),m.clear(),nn}function _(w){const A=[];if(w.shaderID?A.push(w.shaderID):(A.push(w.customVertexShaderID),A.push(w.customFragmentShaderID)),w.defines!==void 0)for(const z in w.defines)A.push(z),A.push(w.defines[z]);return w.isRawShaderMaterial===!1&&(O(A,w),U(A,w),A.push(r.outputColorSpace)),A.push(w.customProgramCacheKey),A.join()}function O(w,A){w.push(A.precision),w.push(A.outputColorSpace),w.push(A.envMapMode),w.push(A.envMapCubeUVHeight),w.push(A.mapUv),w.push(A.alphaMapUv),w.push(A.lightMapUv),w.push(A.aoMapUv),w.push(A.bumpMapUv),w.push(A.normalMapUv),w.push(A.displacementMapUv),w.push(A.emissiveMapUv),w.push(A.metalnessMapUv),w.push(A.roughnessMapUv),w.push(A.anisotropyMapUv),w.push(A.clearcoatMapUv),w.push(A.clearcoatNormalMapUv),w.push(A.clearcoatRoughnessMapUv),w.push(A.iridescenceMapUv),w.push(A.iridescenceThicknessMapUv),w.push(A.sheenColorMapUv),w.push(A.sheenRoughnessMapUv),w.push(A.specularMapUv),w.push(A.specularColorMapUv),w.push(A.specularIntensityMapUv),w.push(A.transmissionMapUv),w.push(A.thicknessMapUv),w.push(A.combine),w.push(A.fogExp2),w.push(A.sizeAttenuation),w.push(A.morphTargetsCount),w.push(A.morphAttributeCount),w.push(A.numDirLights),w.push(A.numPointLights),w.push(A.numSpotLights),w.push(A.numSpotLightMaps),w.push(A.numHemiLights),w.push(A.numRectAreaLights),w.push(A.numDirLightShadows),w.push(A.numPointLightShadows),w.push(A.numSpotLightShadows),w.push(A.numSpotLightShadowsWithMaps),w.push(A.numLightProbes),w.push(A.shadowMapType),w.push(A.toneMapping),w.push(A.numClippingPlanes),w.push(A.numClipIntersection),w.push(A.depthPacking)}function U(w,A){h.disableAll(),A.supportsVertexTextures&&h.enable(0),A.instancing&&h.enable(1),A.instancingColor&&h.enable(2),A.instancingMorph&&h.enable(3),A.matcap&&h.enable(4),A.envMap&&h.enable(5),A.normalMapObjectSpace&&h.enable(6),A.normalMapTangentSpace&&h.enable(7),A.clearcoat&&h.enable(8),A.iridescence&&h.enable(9),A.alphaTest&&h.enable(10),A.vertexColors&&h.enable(11),A.vertexAlphas&&h.enable(12),A.vertexUv1s&&h.enable(13),A.vertexUv2s&&h.enable(14),A.vertexUv3s&&h.enable(15),A.vertexTangents&&h.enable(16),A.anisotropy&&h.enable(17),A.alphaHash&&h.enable(18),A.batching&&h.enable(19),A.dispersion&&h.enable(20),A.batchingColor&&h.enable(21),w.push(h.mask),h.disableAll(),A.fog&&h.enable(0),A.useFog&&h.enable(1),A.flatShading&&h.enable(2),A.logarithmicDepthBuffer&&h.enable(3),A.reverseDepthBuffer&&h.enable(4),A.skinning&&h.enable(5),A.morphTargets&&h.enable(6),A.morphNormals&&h.enable(7),A.morphColors&&h.enable(8),A.premultipliedAlpha&&h.enable(9),A.shadowMapEnabled&&h.enable(10),A.doubleSided&&h.enable(11),A.flipSided&&h.enable(12),A.useDepthPacking&&h.enable(13),A.dithering&&h.enable(14),A.transmission&&h.enable(15),A.sheen&&h.enable(16),A.opaque&&h.enable(17),A.pointsUvs&&h.enable(18),A.decodeVideoTexture&&h.enable(19),A.decodeVideoTextureEmissive&&h.enable(20),A.alphaToCoverage&&h.enable(21),w.push(h.mask)}function D(w){const A=M[w.type];let z;if(A){const ct=Ai[A];z=LM.clone(ct.uniforms)}else z=w.uniforms;return z}function F(w,A){let z;for(let ct=0,it=g.length;ct<it;ct++){const gt=g[ct];if(gt.cacheKey===A){z=gt,++z.usedTimes;break}}return z===void 0&&(z=new JR(r,A,w,u),g.push(z)),z}function H(w){if(--w.usedTimes===0){const A=g.indexOf(w);g[A]=g[g.length-1],g.pop(),w.destroy()}}function B(w){p.remove(w)}function Z(){p.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:D,acquireProgram:F,releaseProgram:H,releaseShaderCache:B,programs:g,dispose:Z}}function a1(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function s(f){r.delete(f)}function l(f,h,p){r.get(f)[h]=p}function u(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function r1(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function vv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function xv(){const r=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function f(x,v,S,M,T,y){let _=r[t];return _===void 0?(_={id:x.id,object:x,geometry:v,material:S,groupOrder:M,renderOrder:x.renderOrder,z:T,group:y},r[t]=_):(_.id=x.id,_.object=x,_.geometry=v,_.material=S,_.groupOrder=M,_.renderOrder=x.renderOrder,_.z=T,_.group=y),t++,_}function h(x,v,S,M,T,y){const _=f(x,v,S,M,T,y);S.transmission>0?s.push(_):S.transparent===!0?l.push(_):i.push(_)}function p(x,v,S,M,T,y){const _=f(x,v,S,M,T,y);S.transmission>0?s.unshift(_):S.transparent===!0?l.unshift(_):i.unshift(_)}function m(x,v){i.length>1&&i.sort(x||r1),s.length>1&&s.sort(v||vv),l.length>1&&l.sort(v||vv)}function g(){for(let x=t,v=r.length;x<v;x++){const S=r[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:h,unshift:p,finish:g,sort:m}}function s1(){let r=new WeakMap;function t(s,l){const u=r.get(s);let f;return u===void 0?(f=new xv,r.set(s,[f])):l>=u.length?(f=new xv,u.push(f)):f=u[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function o1(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new rt,color:new Pe};break;case"SpotLight":i={position:new rt,direction:new rt,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new rt,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new rt,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":i={color:new Pe,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return r[t.id]=i,i}}}function l1(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let u1=0;function c1(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function f1(r){const t=new o1,i=l1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new rt);const l=new rt,u=new en,f=new en;function h(m){let g=0,x=0,v=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let S=0,M=0,T=0,y=0,_=0,O=0,U=0,D=0,F=0,H=0,B=0;m.sort(c1);for(let w=0,A=m.length;w<A;w++){const z=m[w],ct=z.color,it=z.intensity,gt=z.distance,ht=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)g+=ct.r*it,x+=ct.g*it,v+=ct.b*it;else if(z.isLightProbe){for(let W=0;W<9;W++)s.probe[W].addScaledVector(z.sh.coefficients[W],it);B++}else if(z.isDirectionalLight){const W=t.get(z);if(W.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const at=z.shadow,j=i.get(z);j.shadowIntensity=at.intensity,j.shadowBias=at.bias,j.shadowNormalBias=at.normalBias,j.shadowRadius=at.radius,j.shadowMapSize=at.mapSize,s.directionalShadow[S]=j,s.directionalShadowMap[S]=ht,s.directionalShadowMatrix[S]=z.shadow.matrix,O++}s.directional[S]=W,S++}else if(z.isSpotLight){const W=t.get(z);W.position.setFromMatrixPosition(z.matrixWorld),W.color.copy(ct).multiplyScalar(it),W.distance=gt,W.coneCos=Math.cos(z.angle),W.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),W.decay=z.decay,s.spot[T]=W;const at=z.shadow;if(z.map&&(s.spotLightMap[F]=z.map,F++,at.updateMatrices(z),z.castShadow&&H++),s.spotLightMatrix[T]=at.matrix,z.castShadow){const j=i.get(z);j.shadowIntensity=at.intensity,j.shadowBias=at.bias,j.shadowNormalBias=at.normalBias,j.shadowRadius=at.radius,j.shadowMapSize=at.mapSize,s.spotShadow[T]=j,s.spotShadowMap[T]=ht,D++}T++}else if(z.isRectAreaLight){const W=t.get(z);W.color.copy(ct).multiplyScalar(it),W.halfWidth.set(z.width*.5,0,0),W.halfHeight.set(0,z.height*.5,0),s.rectArea[y]=W,y++}else if(z.isPointLight){const W=t.get(z);if(W.color.copy(z.color).multiplyScalar(z.intensity),W.distance=z.distance,W.decay=z.decay,z.castShadow){const at=z.shadow,j=i.get(z);j.shadowIntensity=at.intensity,j.shadowBias=at.bias,j.shadowNormalBias=at.normalBias,j.shadowRadius=at.radius,j.shadowMapSize=at.mapSize,j.shadowCameraNear=at.camera.near,j.shadowCameraFar=at.camera.far,s.pointShadow[M]=j,s.pointShadowMap[M]=ht,s.pointShadowMatrix[M]=z.shadow.matrix,U++}s.point[M]=W,M++}else if(z.isHemisphereLight){const W=t.get(z);W.skyColor.copy(z.color).multiplyScalar(it),W.groundColor.copy(z.groundColor).multiplyScalar(it),s.hemi[_]=W,_++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Lt.LTC_FLOAT_1,s.rectAreaLTC2=Lt.LTC_FLOAT_2):(s.rectAreaLTC1=Lt.LTC_HALF_1,s.rectAreaLTC2=Lt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=x,s.ambient[2]=v;const Z=s.hash;(Z.directionalLength!==S||Z.pointLength!==M||Z.spotLength!==T||Z.rectAreaLength!==y||Z.hemiLength!==_||Z.numDirectionalShadows!==O||Z.numPointShadows!==U||Z.numSpotShadows!==D||Z.numSpotMaps!==F||Z.numLightProbes!==B)&&(s.directional.length=S,s.spot.length=T,s.rectArea.length=y,s.point.length=M,s.hemi.length=_,s.directionalShadow.length=O,s.directionalShadowMap.length=O,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=O,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=D+F-H,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=B,Z.directionalLength=S,Z.pointLength=M,Z.spotLength=T,Z.rectAreaLength=y,Z.hemiLength=_,Z.numDirectionalShadows=O,Z.numPointShadows=U,Z.numSpotShadows=D,Z.numSpotMaps=F,Z.numLightProbes=B,s.version=u1++)}function p(m,g){let x=0,v=0,S=0,M=0,T=0;const y=g.matrixWorldInverse;for(let _=0,O=m.length;_<O;_++){const U=m[_];if(U.isDirectionalLight){const D=s.directional[x];D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),x++}else if(U.isSpotLight){const D=s.spot[S];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),S++}else if(U.isRectAreaLight){const D=s.rectArea[M];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(y),f.identity(),u.copy(U.matrixWorld),u.premultiply(y),f.extractRotation(u),D.halfWidth.set(U.width*.5,0,0),D.halfHeight.set(0,U.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),M++}else if(U.isPointLight){const D=s.point[v];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(y),v++}else if(U.isHemisphereLight){const D=s.hemi[T];D.direction.setFromMatrixPosition(U.matrixWorld),D.direction.transformDirection(y),T++}}}return{setup:h,setupView:p,state:s}}function Sv(r){const t=new f1(r),i=[],s=[];function l(g){m.camera=g,i.length=0,s.length=0}function u(g){i.push(g)}function f(g){s.push(g)}function h(){t.setup(i)}function p(g){t.setupView(i,g)}const m={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:h,setupLightsView:p,pushLight:u,pushShadow:f}}function d1(r){let t=new WeakMap;function i(l,u=0){const f=t.get(l);let h;return f===void 0?(h=new Sv(r),t.set(l,[h])):u>=f.length?(h=new Sv(r),f.push(h)):h=f[u],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const h1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p1=`uniform sampler2D shadow_pass;
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
}`;function m1(r,t,i){let s=new b0;const l=new Be,u=new Be,f=new Ke,h=new GM({depthPacking:$E}),p=new VM,m={},g=i.maxTextureSize,x={[Va]:zn,[zn]:Va,[ta]:ta},v=new ka({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:h1,fragmentShader:p1}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const M=new wr;M.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new ia(M,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=e0;let _=this.type;this.render=function(H,B,Z){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||H.length===0)return;const w=r.getRenderTarget(),A=r.getActiveCubeFace(),z=r.getActiveMipmapLevel(),ct=r.state;ct.setBlending(za),ct.buffers.color.setClear(1,1,1,1),ct.buffers.depth.setTest(!0),ct.setScissorTest(!1);const it=_!==Ji&&this.type===Ji,gt=_===Ji&&this.type!==Ji;for(let ht=0,W=H.length;ht<W;ht++){const at=H[ht],j=at.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const yt=j.getFrameExtents();if(l.multiply(yt),u.copy(j.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/yt.x),l.x=u.x*yt.x,j.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/yt.y),l.y=u.y*yt.y,j.mapSize.y=u.y)),j.map===null||it===!0||gt===!0){const nt=this.type!==Ji?{minFilter:xi,magFilter:xi}:{};j.map!==null&&j.map.dispose(),j.map=new Ar(l.x,l.y,nt),j.map.texture.name=at.name+".shadowMap",j.camera.updateProjectionMatrix()}r.setRenderTarget(j.map),r.clear();const N=j.getViewportCount();for(let nt=0;nt<N;nt++){const Tt=j.getViewport(nt);f.set(u.x*Tt.x,u.y*Tt.y,u.x*Tt.z,u.y*Tt.w),ct.viewport(f),j.updateMatrices(at,nt),s=j.getFrustum(),D(B,Z,j.camera,at,this.type)}j.isPointLightShadow!==!0&&this.type===Ji&&O(j,Z),j.needsUpdate=!1}_=this.type,y.needsUpdate=!1,r.setRenderTarget(w,A,z)};function O(H,B){const Z=t.update(T);v.defines.VSM_SAMPLES!==H.blurSamples&&(v.defines.VSM_SAMPLES=H.blurSamples,S.defines.VSM_SAMPLES=H.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Ar(l.x,l.y)),v.uniforms.shadow_pass.value=H.map.texture,v.uniforms.resolution.value=H.mapSize,v.uniforms.radius.value=H.radius,r.setRenderTarget(H.mapPass),r.clear(),r.renderBufferDirect(B,null,Z,v,T,null),S.uniforms.shadow_pass.value=H.mapPass.texture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,r.setRenderTarget(H.map),r.clear(),r.renderBufferDirect(B,null,Z,S,T,null)}function U(H,B,Z,w){let A=null;const z=Z.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(z!==void 0)A=z;else if(A=Z.isPointLight===!0?p:h,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const ct=A.uuid,it=B.uuid;let gt=m[ct];gt===void 0&&(gt={},m[ct]=gt);let ht=gt[it];ht===void 0&&(ht=A.clone(),gt[it]=ht,B.addEventListener("dispose",F)),A=ht}if(A.visible=B.visible,A.wireframe=B.wireframe,w===Ji?A.side=B.shadowSide!==null?B.shadowSide:B.side:A.side=B.shadowSide!==null?B.shadowSide:x[B.side],A.alphaMap=B.alphaMap,A.alphaTest=B.alphaTest,A.map=B.map,A.clipShadows=B.clipShadows,A.clippingPlanes=B.clippingPlanes,A.clipIntersection=B.clipIntersection,A.displacementMap=B.displacementMap,A.displacementScale=B.displacementScale,A.displacementBias=B.displacementBias,A.wireframeLinewidth=B.wireframeLinewidth,A.linewidth=B.linewidth,Z.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const ct=r.properties.get(A);ct.light=Z}return A}function D(H,B,Z,w,A){if(H.visible===!1)return;if(H.layers.test(B.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&A===Ji)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,H.matrixWorld);const it=t.update(H),gt=H.material;if(Array.isArray(gt)){const ht=it.groups;for(let W=0,at=ht.length;W<at;W++){const j=ht[W],yt=gt[j.materialIndex];if(yt&&yt.visible){const N=U(H,yt,w,A);H.onBeforeShadow(r,H,B,Z,it,N,j),r.renderBufferDirect(Z,null,it,N,H,j),H.onAfterShadow(r,H,B,Z,it,N,j)}}}else if(gt.visible){const ht=U(H,gt,w,A);H.onBeforeShadow(r,H,B,Z,it,ht,null),r.renderBufferDirect(Z,null,it,ht,H,null),H.onAfterShadow(r,H,B,Z,it,ht,null)}}const ct=H.children;for(let it=0,gt=ct.length;it<gt;it++)D(ct[it],B,Z,w,A)}function F(H){H.target.removeEventListener("dispose",F);for(const Z in m){const w=m[Z],A=H.target.uuid;A in w&&(w[A].dispose(),delete w[A])}}}const g1={[Wd]:qd,[Yd]:Kd,[jd]:Qd,[Cs]:Zd,[qd]:Wd,[Kd]:Yd,[Qd]:jd,[Zd]:Cs};function _1(r,t){function i(){let k=!1;const Nt=new Ke;let st=null;const _t=new Ke(0,0,0,0);return{setMask:function(wt){st!==wt&&!k&&(r.colorMask(wt,wt,wt,wt),st=wt)},setLocked:function(wt){k=wt},setClear:function(wt,Ut,te,Ge,nn){nn===!0&&(wt*=Ge,Ut*=Ge,te*=Ge),Nt.set(wt,Ut,te,Ge),_t.equals(Nt)===!1&&(r.clearColor(wt,Ut,te,Ge),_t.copy(Nt))},reset:function(){k=!1,st=null,_t.set(-1,0,0,0)}}}function s(){let k=!1,Nt=!1,st=null,_t=null,wt=null;return{setReversed:function(Ut){if(Nt!==Ut){const te=t.get("EXT_clip_control");Nt?te.clipControlEXT(te.LOWER_LEFT_EXT,te.ZERO_TO_ONE_EXT):te.clipControlEXT(te.LOWER_LEFT_EXT,te.NEGATIVE_ONE_TO_ONE_EXT);const Ge=wt;wt=null,this.setClear(Ge)}Nt=Ut},getReversed:function(){return Nt},setTest:function(Ut){Ut?bt(r.DEPTH_TEST):Ct(r.DEPTH_TEST)},setMask:function(Ut){st!==Ut&&!k&&(r.depthMask(Ut),st=Ut)},setFunc:function(Ut){if(Nt&&(Ut=g1[Ut]),_t!==Ut){switch(Ut){case Wd:r.depthFunc(r.NEVER);break;case qd:r.depthFunc(r.ALWAYS);break;case Yd:r.depthFunc(r.LESS);break;case Cs:r.depthFunc(r.LEQUAL);break;case jd:r.depthFunc(r.EQUAL);break;case Zd:r.depthFunc(r.GEQUAL);break;case Kd:r.depthFunc(r.GREATER);break;case Qd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}_t=Ut}},setLocked:function(Ut){k=Ut},setClear:function(Ut){wt!==Ut&&(Nt&&(Ut=1-Ut),r.clearDepth(Ut),wt=Ut)},reset:function(){k=!1,st=null,_t=null,wt=null,Nt=!1}}}function l(){let k=!1,Nt=null,st=null,_t=null,wt=null,Ut=null,te=null,Ge=null,nn=null;return{setTest:function(Me){k||(Me?bt(r.STENCIL_TEST):Ct(r.STENCIL_TEST))},setMask:function(Me){Nt!==Me&&!k&&(r.stencilMask(Me),Nt=Me)},setFunc:function(Me,Rn,Cn){(st!==Me||_t!==Rn||wt!==Cn)&&(r.stencilFunc(Me,Rn,Cn),st=Me,_t=Rn,wt=Cn)},setOp:function(Me,Rn,Cn){(Ut!==Me||te!==Rn||Ge!==Cn)&&(r.stencilOp(Me,Rn,Cn),Ut=Me,te=Rn,Ge=Cn)},setLocked:function(Me){k=Me},setClear:function(Me){nn!==Me&&(r.clearStencil(Me),nn=Me)},reset:function(){k=!1,Nt=null,st=null,_t=null,wt=null,Ut=null,te=null,Ge=null,nn=null}}}const u=new i,f=new s,h=new l,p=new WeakMap,m=new WeakMap;let g={},x={},v=new WeakMap,S=[],M=null,T=!1,y=null,_=null,O=null,U=null,D=null,F=null,H=null,B=new Pe(0,0,0),Z=0,w=!1,A=null,z=null,ct=null,it=null,gt=null;const ht=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,at=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(j)[1]),W=at>=1):j.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),W=at>=2);let yt=null,N={};const nt=r.getParameter(r.SCISSOR_BOX),Tt=r.getParameter(r.VIEWPORT),Rt=new Ke().fromArray(nt),q=new Ke().fromArray(Tt);function pt(k,Nt,st,_t){const wt=new Uint8Array(4),Ut=r.createTexture();r.bindTexture(k,Ut),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let te=0;te<st;te++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(Nt,0,r.RGBA,1,1,_t,0,r.RGBA,r.UNSIGNED_BYTE,wt):r.texImage2D(Nt+te,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,wt);return Ut}const St={};St[r.TEXTURE_2D]=pt(r.TEXTURE_2D,r.TEXTURE_2D,1),St[r.TEXTURE_CUBE_MAP]=pt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[r.TEXTURE_2D_ARRAY]=pt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),St[r.TEXTURE_3D]=pt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),h.setClear(0),bt(r.DEPTH_TEST),f.setFunc(Cs),oe(!1),de(A_),bt(r.CULL_FACE),I(za);function bt(k){g[k]!==!0&&(r.enable(k),g[k]=!0)}function Ct(k){g[k]!==!1&&(r.disable(k),g[k]=!1)}function Qt(k,Nt){return x[k]!==Nt?(r.bindFramebuffer(k,Nt),x[k]=Nt,k===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Nt),k===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Nt),!0):!1}function It(k,Nt){let st=S,_t=!1;if(k){st=v.get(Nt),st===void 0&&(st=[],v.set(Nt,st));const wt=k.textures;if(st.length!==wt.length||st[0]!==r.COLOR_ATTACHMENT0){for(let Ut=0,te=wt.length;Ut<te;Ut++)st[Ut]=r.COLOR_ATTACHMENT0+Ut;st.length=wt.length,_t=!0}}else st[0]!==r.BACK&&(st[0]=r.BACK,_t=!0);_t&&r.drawBuffers(st)}function Ee(k){return M!==k?(r.useProgram(k),M=k,!0):!1}const Ce={[xr]:r.FUNC_ADD,[TE]:r.FUNC_SUBTRACT,[bE]:r.FUNC_REVERSE_SUBTRACT};Ce[AE]=r.MIN,Ce[RE]=r.MAX;const re={[CE]:r.ZERO,[wE]:r.ONE,[DE]:r.SRC_COLOR,[kd]:r.SRC_ALPHA,[IE]:r.SRC_ALPHA_SATURATE,[OE]:r.DST_COLOR,[LE]:r.DST_ALPHA,[UE]:r.ONE_MINUS_SRC_COLOR,[Xd]:r.ONE_MINUS_SRC_ALPHA,[PE]:r.ONE_MINUS_DST_COLOR,[NE]:r.ONE_MINUS_DST_ALPHA,[BE]:r.CONSTANT_COLOR,[FE]:r.ONE_MINUS_CONSTANT_COLOR,[zE]:r.CONSTANT_ALPHA,[HE]:r.ONE_MINUS_CONSTANT_ALPHA};function I(k,Nt,st,_t,wt,Ut,te,Ge,nn,Me){if(k===za){T===!0&&(Ct(r.BLEND),T=!1);return}if(T===!1&&(bt(r.BLEND),T=!0),k!==ME){if(k!==y||Me!==w){if((_!==xr||D!==xr)&&(r.blendEquation(r.FUNC_ADD),_=xr,D=xr),Me)switch(k){case bs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case R_:r.blendFunc(r.ONE,r.ONE);break;case C_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case w_:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case bs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case R_:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case C_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case w_:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}O=null,U=null,F=null,H=null,B.set(0,0,0),Z=0,y=k,w=Me}return}wt=wt||Nt,Ut=Ut||st,te=te||_t,(Nt!==_||wt!==D)&&(r.blendEquationSeparate(Ce[Nt],Ce[wt]),_=Nt,D=wt),(st!==O||_t!==U||Ut!==F||te!==H)&&(r.blendFuncSeparate(re[st],re[_t],re[Ut],re[te]),O=st,U=_t,F=Ut,H=te),(Ge.equals(B)===!1||nn!==Z)&&(r.blendColor(Ge.r,Ge.g,Ge.b,nn),B.copy(Ge),Z=nn),y=k,w=!1}function gn(k,Nt){k.side===ta?Ct(r.CULL_FACE):bt(r.CULL_FACE);let st=k.side===zn;Nt&&(st=!st),oe(st),k.blending===bs&&k.transparent===!1?I(za):I(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),f.setFunc(k.depthFunc),f.setTest(k.depthTest),f.setMask(k.depthWrite),u.setMask(k.colorWrite);const _t=k.stencilWrite;h.setTest(_t),_t&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),we(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?bt(r.SAMPLE_ALPHA_TO_COVERAGE):Ct(r.SAMPLE_ALPHA_TO_COVERAGE)}function oe(k){A!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),A=k)}function de(k){k!==SE?(bt(r.CULL_FACE),k!==z&&(k===A_?r.cullFace(r.BACK):k===yE?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ct(r.CULL_FACE),z=k}function Xt(k){k!==ct&&(W&&r.lineWidth(k),ct=k)}function we(k,Nt,st){k?(bt(r.POLYGON_OFFSET_FILL),(it!==Nt||gt!==st)&&(r.polygonOffset(Nt,st),it=Nt,gt=st)):Ct(r.POLYGON_OFFSET_FILL)}function Wt(k){k?bt(r.SCISSOR_TEST):Ct(r.SCISSOR_TEST)}function L(k){k===void 0&&(k=r.TEXTURE0+ht-1),yt!==k&&(r.activeTexture(k),yt=k)}function b(k,Nt,st){st===void 0&&(yt===null?st=r.TEXTURE0+ht-1:st=yt);let _t=N[st];_t===void 0&&(_t={type:void 0,texture:void 0},N[st]=_t),(_t.type!==k||_t.texture!==Nt)&&(yt!==st&&(r.activeTexture(st),yt=st),r.bindTexture(k,Nt||St[k]),_t.type=k,_t.texture=Nt)}function tt(){const k=N[yt];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ft(){try{r.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xt(){try{r.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function dt(){try{r.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Gt(){try{r.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Dt(){try{r.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Bt(){try{r.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function me(){try{r.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Mt(){try{r.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ft(){try{r.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Kt(){try{r.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Vt(k){Rt.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),Rt.copy(k))}function zt(k){q.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),q.copy(k))}function se(k,Nt){let st=m.get(Nt);st===void 0&&(st=new WeakMap,m.set(Nt,st));let _t=st.get(k);_t===void 0&&(_t=r.getUniformBlockIndex(Nt,k.name),st.set(k,_t))}function jt(k,Nt){const _t=m.get(Nt).get(k);p.get(Nt)!==_t&&(r.uniformBlockBinding(Nt,_t,k.__bindingPointIndex),p.set(Nt,_t))}function De(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},yt=null,N={},x={},v=new WeakMap,S=[],M=null,T=!1,y=null,_=null,O=null,U=null,D=null,F=null,H=null,B=new Pe(0,0,0),Z=0,w=!1,A=null,z=null,ct=null,it=null,gt=null,Rt.set(0,0,r.canvas.width,r.canvas.height),q.set(0,0,r.canvas.width,r.canvas.height),u.reset(),f.reset(),h.reset()}return{buffers:{color:u,depth:f,stencil:h},enable:bt,disable:Ct,bindFramebuffer:Qt,drawBuffers:It,useProgram:Ee,setBlending:I,setMaterial:gn,setFlipSided:oe,setCullFace:de,setLineWidth:Xt,setPolygonOffset:we,setScissorTest:Wt,activeTexture:L,bindTexture:b,unbindTexture:tt,compressedTexImage2D:ft,compressedTexImage3D:xt,texImage2D:Ft,texImage3D:Kt,updateUBOMapping:se,uniformBlockBinding:jt,texStorage2D:me,texStorage3D:Mt,texSubImage2D:dt,texSubImage3D:Gt,compressedTexSubImage2D:Dt,compressedTexSubImage3D:Bt,scissor:Vt,viewport:zt,reset:De}}function v1(r,t,i,s,l,u,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Be,g=new WeakMap;let x;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(L,b){return S?new OffscreenCanvas(L,b):Yu("canvas")}function T(L,b,tt){let ft=1;const xt=Wt(L);if((xt.width>tt||xt.height>tt)&&(ft=tt/Math.max(xt.width,xt.height)),ft<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const dt=Math.floor(ft*xt.width),Gt=Math.floor(ft*xt.height);x===void 0&&(x=M(dt,Gt));const Dt=b?M(dt,Gt):x;return Dt.width=dt,Dt.height=Gt,Dt.getContext("2d").drawImage(L,0,0,dt,Gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+dt+"x"+Gt+")."),Dt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),L;return L}function y(L){return L.generateMipmaps}function _(L){r.generateMipmap(L)}function O(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(L,b,tt,ft,xt=!1){if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let dt=b;if(b===r.RED&&(tt===r.FLOAT&&(dt=r.R32F),tt===r.HALF_FLOAT&&(dt=r.R16F),tt===r.UNSIGNED_BYTE&&(dt=r.R8)),b===r.RED_INTEGER&&(tt===r.UNSIGNED_BYTE&&(dt=r.R8UI),tt===r.UNSIGNED_SHORT&&(dt=r.R16UI),tt===r.UNSIGNED_INT&&(dt=r.R32UI),tt===r.BYTE&&(dt=r.R8I),tt===r.SHORT&&(dt=r.R16I),tt===r.INT&&(dt=r.R32I)),b===r.RG&&(tt===r.FLOAT&&(dt=r.RG32F),tt===r.HALF_FLOAT&&(dt=r.RG16F),tt===r.UNSIGNED_BYTE&&(dt=r.RG8)),b===r.RG_INTEGER&&(tt===r.UNSIGNED_BYTE&&(dt=r.RG8UI),tt===r.UNSIGNED_SHORT&&(dt=r.RG16UI),tt===r.UNSIGNED_INT&&(dt=r.RG32UI),tt===r.BYTE&&(dt=r.RG8I),tt===r.SHORT&&(dt=r.RG16I),tt===r.INT&&(dt=r.RG32I)),b===r.RGB_INTEGER&&(tt===r.UNSIGNED_BYTE&&(dt=r.RGB8UI),tt===r.UNSIGNED_SHORT&&(dt=r.RGB16UI),tt===r.UNSIGNED_INT&&(dt=r.RGB32UI),tt===r.BYTE&&(dt=r.RGB8I),tt===r.SHORT&&(dt=r.RGB16I),tt===r.INT&&(dt=r.RGB32I)),b===r.RGBA_INTEGER&&(tt===r.UNSIGNED_BYTE&&(dt=r.RGBA8UI),tt===r.UNSIGNED_SHORT&&(dt=r.RGBA16UI),tt===r.UNSIGNED_INT&&(dt=r.RGBA32UI),tt===r.BYTE&&(dt=r.RGBA8I),tt===r.SHORT&&(dt=r.RGBA16I),tt===r.INT&&(dt=r.RGBA32I)),b===r.RGB&&tt===r.UNSIGNED_INT_5_9_9_9_REV&&(dt=r.RGB9_E5),b===r.RGBA){const Gt=xt?Wu:Re.getTransfer(ft);tt===r.FLOAT&&(dt=r.RGBA32F),tt===r.HALF_FLOAT&&(dt=r.RGBA16F),tt===r.UNSIGNED_BYTE&&(dt=Gt===Oe?r.SRGB8_ALPHA8:r.RGBA8),tt===r.UNSIGNED_SHORT_4_4_4_4&&(dt=r.RGBA4),tt===r.UNSIGNED_SHORT_5_5_5_1&&(dt=r.RGB5_A1)}return(dt===r.R16F||dt===r.R32F||dt===r.RG16F||dt===r.RG32F||dt===r.RGBA16F||dt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function D(L,b){let tt;return L?b===null||b===br||b===Us?tt=r.DEPTH24_STENCIL8:b===ea?tt=r.DEPTH32F_STENCIL8:b===Yo&&(tt=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===br||b===Us?tt=r.DEPTH_COMPONENT24:b===ea?tt=r.DEPTH_COMPONENT32F:b===Yo&&(tt=r.DEPTH_COMPONENT16),tt}function F(L,b){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==xi&&L.minFilter!==Ri?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function H(L){const b=L.target;b.removeEventListener("dispose",H),Z(b),b.isVideoTexture&&g.delete(b)}function B(L){const b=L.target;b.removeEventListener("dispose",B),A(b)}function Z(L){const b=s.get(L);if(b.__webglInit===void 0)return;const tt=L.source,ft=v.get(tt);if(ft){const xt=ft[b.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&w(L),Object.keys(ft).length===0&&v.delete(tt)}s.remove(L)}function w(L){const b=s.get(L);r.deleteTexture(b.__webglTexture);const tt=L.source,ft=v.get(tt);delete ft[b.__cacheKey],f.memory.textures--}function A(L){const b=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(b.__webglFramebuffer[ft]))for(let xt=0;xt<b.__webglFramebuffer[ft].length;xt++)r.deleteFramebuffer(b.__webglFramebuffer[ft][xt]);else r.deleteFramebuffer(b.__webglFramebuffer[ft]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[ft])}else{if(Array.isArray(b.__webglFramebuffer))for(let ft=0;ft<b.__webglFramebuffer.length;ft++)r.deleteFramebuffer(b.__webglFramebuffer[ft]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ft=0;ft<b.__webglColorRenderbuffer.length;ft++)b.__webglColorRenderbuffer[ft]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[ft]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const tt=L.textures;for(let ft=0,xt=tt.length;ft<xt;ft++){const dt=s.get(tt[ft]);dt.__webglTexture&&(r.deleteTexture(dt.__webglTexture),f.memory.textures--),s.remove(tt[ft])}s.remove(L)}let z=0;function ct(){z=0}function it(){const L=z;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),z+=1,L}function gt(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function ht(L,b){const tt=s.get(L);if(L.isVideoTexture&&Xt(L),L.isRenderTargetTexture===!1&&L.version>0&&tt.__version!==L.version){const ft=L.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(tt,L,b);return}}i.bindTexture(r.TEXTURE_2D,tt.__webglTexture,r.TEXTURE0+b)}function W(L,b){const tt=s.get(L);if(L.version>0&&tt.__version!==L.version){q(tt,L,b);return}i.bindTexture(r.TEXTURE_2D_ARRAY,tt.__webglTexture,r.TEXTURE0+b)}function at(L,b){const tt=s.get(L);if(L.version>0&&tt.__version!==L.version){q(tt,L,b);return}i.bindTexture(r.TEXTURE_3D,tt.__webglTexture,r.TEXTURE0+b)}function j(L,b){const tt=s.get(L);if(L.version>0&&tt.__version!==L.version){pt(tt,L,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,tt.__webglTexture,r.TEXTURE0+b)}const yt={[th]:r.REPEAT,[yr]:r.CLAMP_TO_EDGE,[eh]:r.MIRRORED_REPEAT},N={[xi]:r.NEAREST,[KE]:r.NEAREST_MIPMAP_NEAREST,[du]:r.NEAREST_MIPMAP_LINEAR,[Ri]:r.LINEAR,[fd]:r.LINEAR_MIPMAP_NEAREST,[Er]:r.LINEAR_MIPMAP_LINEAR},nt={[eM]:r.NEVER,[oM]:r.ALWAYS,[nM]:r.LESS,[p0]:r.LEQUAL,[iM]:r.EQUAL,[sM]:r.GEQUAL,[aM]:r.GREATER,[rM]:r.NOTEQUAL};function Tt(L,b){if(b.type===ea&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ri||b.magFilter===fd||b.magFilter===du||b.magFilter===Er||b.minFilter===Ri||b.minFilter===fd||b.minFilter===du||b.minFilter===Er)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,yt[b.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,yt[b.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,yt[b.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,N[b.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,N[b.minFilter]),b.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,nt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===xi||b.minFilter!==du&&b.minFilter!==Er||b.type===ea&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");r.texParameterf(L,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function Rt(L,b){let tt=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",H));const ft=b.source;let xt=v.get(ft);xt===void 0&&(xt={},v.set(ft,xt));const dt=gt(b);if(dt!==L.__cacheKey){xt[dt]===void 0&&(xt[dt]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,tt=!0),xt[dt].usedTimes++;const Gt=xt[L.__cacheKey];Gt!==void 0&&(xt[L.__cacheKey].usedTimes--,Gt.usedTimes===0&&w(b)),L.__cacheKey=dt,L.__webglTexture=xt[dt].texture}return tt}function q(L,b,tt){let ft=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ft=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ft=r.TEXTURE_3D);const xt=Rt(L,b),dt=b.source;i.bindTexture(ft,L.__webglTexture,r.TEXTURE0+tt);const Gt=s.get(dt);if(dt.version!==Gt.__version||xt===!0){i.activeTexture(r.TEXTURE0+tt);const Dt=Re.getPrimaries(Re.workingColorSpace),Bt=b.colorSpace===Fa?null:Re.getPrimaries(b.colorSpace),me=b.colorSpace===Fa||Dt===Bt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let Mt=T(b.image,!1,l.maxTextureSize);Mt=we(b,Mt);const Ft=u.convert(b.format,b.colorSpace),Kt=u.convert(b.type);let Vt=U(b.internalFormat,Ft,Kt,b.colorSpace,b.isVideoTexture);Tt(ft,b);let zt;const se=b.mipmaps,jt=b.isVideoTexture!==!0,De=Gt.__version===void 0||xt===!0,k=dt.dataReady,Nt=F(b,Mt);if(b.isDepthTexture)Vt=D(b.format===Ls,b.type),De&&(jt?i.texStorage2D(r.TEXTURE_2D,1,Vt,Mt.width,Mt.height):i.texImage2D(r.TEXTURE_2D,0,Vt,Mt.width,Mt.height,0,Ft,Kt,null));else if(b.isDataTexture)if(se.length>0){jt&&De&&i.texStorage2D(r.TEXTURE_2D,Nt,Vt,se[0].width,se[0].height);for(let st=0,_t=se.length;st<_t;st++)zt=se[st],jt?k&&i.texSubImage2D(r.TEXTURE_2D,st,0,0,zt.width,zt.height,Ft,Kt,zt.data):i.texImage2D(r.TEXTURE_2D,st,Vt,zt.width,zt.height,0,Ft,Kt,zt.data);b.generateMipmaps=!1}else jt?(De&&i.texStorage2D(r.TEXTURE_2D,Nt,Vt,Mt.width,Mt.height),k&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Mt.width,Mt.height,Ft,Kt,Mt.data)):i.texImage2D(r.TEXTURE_2D,0,Vt,Mt.width,Mt.height,0,Ft,Kt,Mt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){jt&&De&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Nt,Vt,se[0].width,se[0].height,Mt.depth);for(let st=0,_t=se.length;st<_t;st++)if(zt=se[st],b.format!==vi)if(Ft!==null)if(jt){if(k)if(b.layerUpdates.size>0){const wt=K_(zt.width,zt.height,b.format,b.type);for(const Ut of b.layerUpdates){const te=zt.data.subarray(Ut*wt/zt.data.BYTES_PER_ELEMENT,(Ut+1)*wt/zt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,st,0,0,Ut,zt.width,zt.height,1,Ft,te)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,st,0,0,0,zt.width,zt.height,Mt.depth,Ft,zt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,st,Vt,zt.width,zt.height,Mt.depth,0,zt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?k&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,st,0,0,0,zt.width,zt.height,Mt.depth,Ft,Kt,zt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,st,Vt,zt.width,zt.height,Mt.depth,0,Ft,Kt,zt.data)}else{jt&&De&&i.texStorage2D(r.TEXTURE_2D,Nt,Vt,se[0].width,se[0].height);for(let st=0,_t=se.length;st<_t;st++)zt=se[st],b.format!==vi?Ft!==null?jt?k&&i.compressedTexSubImage2D(r.TEXTURE_2D,st,0,0,zt.width,zt.height,Ft,zt.data):i.compressedTexImage2D(r.TEXTURE_2D,st,Vt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?k&&i.texSubImage2D(r.TEXTURE_2D,st,0,0,zt.width,zt.height,Ft,Kt,zt.data):i.texImage2D(r.TEXTURE_2D,st,Vt,zt.width,zt.height,0,Ft,Kt,zt.data)}else if(b.isDataArrayTexture)if(jt){if(De&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Nt,Vt,Mt.width,Mt.height,Mt.depth),k)if(b.layerUpdates.size>0){const st=K_(Mt.width,Mt.height,b.format,b.type);for(const _t of b.layerUpdates){const wt=Mt.data.subarray(_t*st/Mt.data.BYTES_PER_ELEMENT,(_t+1)*st/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,_t,Mt.width,Mt.height,1,Ft,Kt,wt)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Ft,Kt,Mt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Vt,Mt.width,Mt.height,Mt.depth,0,Ft,Kt,Mt.data);else if(b.isData3DTexture)jt?(De&&i.texStorage3D(r.TEXTURE_3D,Nt,Vt,Mt.width,Mt.height,Mt.depth),k&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Ft,Kt,Mt.data)):i.texImage3D(r.TEXTURE_3D,0,Vt,Mt.width,Mt.height,Mt.depth,0,Ft,Kt,Mt.data);else if(b.isFramebufferTexture){if(De)if(jt)i.texStorage2D(r.TEXTURE_2D,Nt,Vt,Mt.width,Mt.height);else{let st=Mt.width,_t=Mt.height;for(let wt=0;wt<Nt;wt++)i.texImage2D(r.TEXTURE_2D,wt,Vt,st,_t,0,Ft,Kt,null),st>>=1,_t>>=1}}else if(se.length>0){if(jt&&De){const st=Wt(se[0]);i.texStorage2D(r.TEXTURE_2D,Nt,Vt,st.width,st.height)}for(let st=0,_t=se.length;st<_t;st++)zt=se[st],jt?k&&i.texSubImage2D(r.TEXTURE_2D,st,0,0,Ft,Kt,zt):i.texImage2D(r.TEXTURE_2D,st,Vt,Ft,Kt,zt);b.generateMipmaps=!1}else if(jt){if(De){const st=Wt(Mt);i.texStorage2D(r.TEXTURE_2D,Nt,Vt,st.width,st.height)}k&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ft,Kt,Mt)}else i.texImage2D(r.TEXTURE_2D,0,Vt,Ft,Kt,Mt);y(b)&&_(ft),Gt.__version=dt.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function pt(L,b,tt){if(b.image.length!==6)return;const ft=Rt(L,b),xt=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+tt);const dt=s.get(xt);if(xt.version!==dt.__version||ft===!0){i.activeTexture(r.TEXTURE0+tt);const Gt=Re.getPrimaries(Re.workingColorSpace),Dt=b.colorSpace===Fa?null:Re.getPrimaries(b.colorSpace),Bt=b.colorSpace===Fa||Gt===Dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);const me=b.isCompressedTexture||b.image[0].isCompressedTexture,Mt=b.image[0]&&b.image[0].isDataTexture,Ft=[];for(let _t=0;_t<6;_t++)!me&&!Mt?Ft[_t]=T(b.image[_t],!0,l.maxCubemapSize):Ft[_t]=Mt?b.image[_t].image:b.image[_t],Ft[_t]=we(b,Ft[_t]);const Kt=Ft[0],Vt=u.convert(b.format,b.colorSpace),zt=u.convert(b.type),se=U(b.internalFormat,Vt,zt,b.colorSpace),jt=b.isVideoTexture!==!0,De=dt.__version===void 0||ft===!0,k=xt.dataReady;let Nt=F(b,Kt);Tt(r.TEXTURE_CUBE_MAP,b);let st;if(me){jt&&De&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Nt,se,Kt.width,Kt.height);for(let _t=0;_t<6;_t++){st=Ft[_t].mipmaps;for(let wt=0;wt<st.length;wt++){const Ut=st[wt];b.format!==vi?Vt!==null?jt?k&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt,0,0,Ut.width,Ut.height,Vt,Ut.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt,se,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?k&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt,0,0,Ut.width,Ut.height,Vt,zt,Ut.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt,se,Ut.width,Ut.height,0,Vt,zt,Ut.data)}}}else{if(st=b.mipmaps,jt&&De){st.length>0&&Nt++;const _t=Wt(Ft[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Nt,se,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Mt){jt?k&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ft[_t].width,Ft[_t].height,Vt,zt,Ft[_t].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,se,Ft[_t].width,Ft[_t].height,0,Vt,zt,Ft[_t].data);for(let wt=0;wt<st.length;wt++){const te=st[wt].image[_t].image;jt?k&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt+1,0,0,te.width,te.height,Vt,zt,te.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt+1,se,te.width,te.height,0,Vt,zt,te.data)}}else{jt?k&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Vt,zt,Ft[_t]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,se,Vt,zt,Ft[_t]);for(let wt=0;wt<st.length;wt++){const Ut=st[wt];jt?k&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt+1,0,0,Vt,zt,Ut.image[_t]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt+1,se,Vt,zt,Ut.image[_t])}}}y(b)&&_(r.TEXTURE_CUBE_MAP),dt.__version=xt.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function St(L,b,tt,ft,xt,dt){const Gt=u.convert(tt.format,tt.colorSpace),Dt=u.convert(tt.type),Bt=U(tt.internalFormat,Gt,Dt,tt.colorSpace),me=s.get(b),Mt=s.get(tt);if(Mt.__renderTarget=b,!me.__hasExternalTextures){const Ft=Math.max(1,b.width>>dt),Kt=Math.max(1,b.height>>dt);xt===r.TEXTURE_3D||xt===r.TEXTURE_2D_ARRAY?i.texImage3D(xt,dt,Bt,Ft,Kt,b.depth,0,Gt,Dt,null):i.texImage2D(xt,dt,Bt,Ft,Kt,0,Gt,Dt,null)}i.bindFramebuffer(r.FRAMEBUFFER,L),de(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ft,xt,Mt.__webglTexture,0,oe(b)):(xt===r.TEXTURE_2D||xt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ft,xt,Mt.__webglTexture,dt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function bt(L,b,tt){if(r.bindRenderbuffer(r.RENDERBUFFER,L),b.depthBuffer){const ft=b.depthTexture,xt=ft&&ft.isDepthTexture?ft.type:null,dt=D(b.stencilBuffer,xt),Gt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Dt=oe(b);de(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Dt,dt,b.width,b.height):tt?r.renderbufferStorageMultisample(r.RENDERBUFFER,Dt,dt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,dt,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Gt,r.RENDERBUFFER,L)}else{const ft=b.textures;for(let xt=0;xt<ft.length;xt++){const dt=ft[xt],Gt=u.convert(dt.format,dt.colorSpace),Dt=u.convert(dt.type),Bt=U(dt.internalFormat,Gt,Dt,dt.colorSpace),me=oe(b);tt&&de(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,me,Bt,b.width,b.height):de(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,me,Bt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Bt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ct(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=s.get(b.depthTexture);ft.__renderTarget=b,(!ft.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ht(b.depthTexture,0);const xt=ft.__webglTexture,dt=oe(b);if(b.depthTexture.format===As)de(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,xt,0,dt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,xt,0);else if(b.depthTexture.format===Ls)de(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,xt,0,dt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,xt,0);else throw new Error("Unknown depthTexture format")}function Qt(L){const b=s.get(L),tt=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const ft=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ft){const xt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ft.removeEventListener("dispose",xt)};ft.addEventListener("dispose",xt),b.__depthDisposeCallback=xt}b.__boundDepthTexture=ft}if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");Ct(b.__webglFramebuffer,L)}else if(tt){b.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[ft]),b.__webglDepthbuffer[ft]===void 0)b.__webglDepthbuffer[ft]=r.createRenderbuffer(),bt(b.__webglDepthbuffer[ft],L,!1);else{const xt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=b.__webglDepthbuffer[ft];r.bindRenderbuffer(r.RENDERBUFFER,dt),r.framebufferRenderbuffer(r.FRAMEBUFFER,xt,r.RENDERBUFFER,dt)}}else if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),bt(b.__webglDepthbuffer,L,!1);else{const ft=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xt=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,xt),r.framebufferRenderbuffer(r.FRAMEBUFFER,ft,r.RENDERBUFFER,xt)}i.bindFramebuffer(r.FRAMEBUFFER,null)}function It(L,b,tt){const ft=s.get(L);b!==void 0&&St(ft.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),tt!==void 0&&Qt(L)}function Ee(L){const b=L.texture,tt=s.get(L),ft=s.get(b);L.addEventListener("dispose",B);const xt=L.textures,dt=L.isWebGLCubeRenderTarget===!0,Gt=xt.length>1;if(Gt||(ft.__webglTexture===void 0&&(ft.__webglTexture=r.createTexture()),ft.__version=b.version,f.memory.textures++),dt){tt.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(b.mipmaps&&b.mipmaps.length>0){tt.__webglFramebuffer[Dt]=[];for(let Bt=0;Bt<b.mipmaps.length;Bt++)tt.__webglFramebuffer[Dt][Bt]=r.createFramebuffer()}else tt.__webglFramebuffer[Dt]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Dt=0;Dt<b.mipmaps.length;Dt++)tt.__webglFramebuffer[Dt]=r.createFramebuffer()}else tt.__webglFramebuffer=r.createFramebuffer();if(Gt)for(let Dt=0,Bt=xt.length;Dt<Bt;Dt++){const me=s.get(xt[Dt]);me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture(),f.memory.textures++)}if(L.samples>0&&de(L)===!1){tt.__webglMultisampledFramebuffer=r.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Dt=0;Dt<xt.length;Dt++){const Bt=xt[Dt];tt.__webglColorRenderbuffer[Dt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,tt.__webglColorRenderbuffer[Dt]);const me=u.convert(Bt.format,Bt.colorSpace),Mt=u.convert(Bt.type),Ft=U(Bt.internalFormat,me,Mt,Bt.colorSpace,L.isXRRenderTarget===!0),Kt=oe(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,Kt,Ft,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Dt,r.RENDERBUFFER,tt.__webglColorRenderbuffer[Dt])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(tt.__webglDepthRenderbuffer=r.createRenderbuffer(),bt(tt.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(dt){i.bindTexture(r.TEXTURE_CUBE_MAP,ft.__webglTexture),Tt(r.TEXTURE_CUBE_MAP,b);for(let Dt=0;Dt<6;Dt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Bt=0;Bt<b.mipmaps.length;Bt++)St(tt.__webglFramebuffer[Dt][Bt],L,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Bt);else St(tt.__webglFramebuffer[Dt],L,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);y(b)&&_(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Gt){for(let Dt=0,Bt=xt.length;Dt<Bt;Dt++){const me=xt[Dt],Mt=s.get(me);i.bindTexture(r.TEXTURE_2D,Mt.__webglTexture),Tt(r.TEXTURE_2D,me),St(tt.__webglFramebuffer,L,me,r.COLOR_ATTACHMENT0+Dt,r.TEXTURE_2D,0),y(me)&&_(r.TEXTURE_2D)}i.unbindTexture()}else{let Dt=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Dt=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Dt,ft.__webglTexture),Tt(Dt,b),b.mipmaps&&b.mipmaps.length>0)for(let Bt=0;Bt<b.mipmaps.length;Bt++)St(tt.__webglFramebuffer[Bt],L,b,r.COLOR_ATTACHMENT0,Dt,Bt);else St(tt.__webglFramebuffer,L,b,r.COLOR_ATTACHMENT0,Dt,0);y(b)&&_(Dt),i.unbindTexture()}L.depthBuffer&&Qt(L)}function Ce(L){const b=L.textures;for(let tt=0,ft=b.length;tt<ft;tt++){const xt=b[tt];if(y(xt)){const dt=O(L),Gt=s.get(xt).__webglTexture;i.bindTexture(dt,Gt),_(dt),i.unbindTexture()}}}const re=[],I=[];function gn(L){if(L.samples>0){if(de(L)===!1){const b=L.textures,tt=L.width,ft=L.height;let xt=r.COLOR_BUFFER_BIT;const dt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Gt=s.get(L),Dt=b.length>1;if(Dt)for(let Bt=0;Bt<b.length;Bt++)i.bindFramebuffer(r.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Gt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let Bt=0;Bt<b.length;Bt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(xt|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(xt|=r.STENCIL_BUFFER_BIT)),Dt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Gt.__webglColorRenderbuffer[Bt]);const me=s.get(b[Bt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,me,0)}r.blitFramebuffer(0,0,tt,ft,0,0,tt,ft,xt,r.NEAREST),p===!0&&(re.length=0,I.length=0,re.push(r.COLOR_ATTACHMENT0+Bt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(re.push(dt),I.push(dt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,I)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,re))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Dt)for(let Bt=0;Bt<b.length;Bt++){i.bindFramebuffer(r.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.RENDERBUFFER,Gt.__webglColorRenderbuffer[Bt]);const me=s.get(b[Bt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Gt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.TEXTURE_2D,me,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const b=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function oe(L){return Math.min(l.maxSamples,L.samples)}function de(L){const b=s.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Xt(L){const b=f.render.frame;g.get(L)!==b&&(g.set(L,b),L.update())}function we(L,b){const tt=L.colorSpace,ft=L.format,xt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||tt!==Ns&&tt!==Fa&&(Re.getTransfer(tt)===Oe?(ft!==vi||xt!==oa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),b}function Wt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=it,this.resetTextureUnits=ct,this.setTexture2D=ht,this.setTexture2DArray=W,this.setTexture3D=at,this.setTextureCube=j,this.rebindTextures=It,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=gn,this.setupDepthRenderbuffer=Qt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=de}function x1(r,t){function i(s,l=Fa){let u;const f=Re.getTransfer(l);if(s===oa)return r.UNSIGNED_BYTE;if(s===Fh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===zh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===s0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===a0)return r.BYTE;if(s===r0)return r.SHORT;if(s===Yo)return r.UNSIGNED_SHORT;if(s===Bh)return r.INT;if(s===br)return r.UNSIGNED_INT;if(s===ea)return r.FLOAT;if(s===Jo)return r.HALF_FLOAT;if(s===o0)return r.ALPHA;if(s===l0)return r.RGB;if(s===vi)return r.RGBA;if(s===u0)return r.LUMINANCE;if(s===c0)return r.LUMINANCE_ALPHA;if(s===As)return r.DEPTH_COMPONENT;if(s===Ls)return r.DEPTH_STENCIL;if(s===f0)return r.RED;if(s===Hh)return r.RED_INTEGER;if(s===d0)return r.RG;if(s===Gh)return r.RG_INTEGER;if(s===Vh)return r.RGBA_INTEGER;if(s===Bu||s===Fu||s===zu||s===Hu)if(f===Oe)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Bu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Fu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===zu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Hu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Bu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Fu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===zu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Hu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===nh||s===ih||s===ah||s===rh)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===nh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ih)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ah)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===rh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===sh||s===oh||s===lh)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===sh||s===oh)return f===Oe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===lh)return f===Oe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===uh||s===ch||s===fh||s===dh||s===hh||s===ph||s===mh||s===gh||s===_h||s===vh||s===xh||s===Sh||s===yh||s===Eh)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===uh)return f===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ch)return f===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===fh)return f===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===dh)return f===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===hh)return f===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ph)return f===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===mh)return f===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===gh)return f===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===_h)return f===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===vh)return f===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===xh)return f===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Sh)return f===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===yh)return f===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Eh)return f===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Gu||s===Mh||s===Th)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===Gu)return f===Oe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Mh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Th)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===h0||s===bh||s===Ah||s===Rh)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===Gu)return u.COMPRESSED_RED_RGTC1_EXT;if(s===bh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ah)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Rh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Us?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const S1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,y1=`
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

}`;class E1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const l=new Hn,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ka({vertexShader:S1,fragmentShader:y1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ia(new $u(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class M1 extends Bs{constructor(t,i){super();const s=this;let l=null,u=1,f=null,h="local-floor",p=1,m=null,g=null,x=null,v=null,S=null,M=null;const T=new E1,y=i.getContextAttributes();let _=null,O=null;const U=[],D=[],F=new Be;let H=null;const B=new li;B.viewport=new Ke;const Z=new li;Z.viewport=new Ke;const w=[B,Z],A=new XM;let z=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let pt=U[q];return pt===void 0&&(pt=new Nd,U[q]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(q){let pt=U[q];return pt===void 0&&(pt=new Nd,U[q]=pt),pt.getGripSpace()},this.getHand=function(q){let pt=U[q];return pt===void 0&&(pt=new Nd,U[q]=pt),pt.getHandSpace()};function it(q){const pt=D.indexOf(q.inputSource);if(pt===-1)return;const St=U[pt];St!==void 0&&(St.update(q.inputSource,q.frame,m||f),St.dispatchEvent({type:q.type,data:q.inputSource}))}function gt(){l.removeEventListener("select",it),l.removeEventListener("selectstart",it),l.removeEventListener("selectend",it),l.removeEventListener("squeeze",it),l.removeEventListener("squeezestart",it),l.removeEventListener("squeezeend",it),l.removeEventListener("end",gt),l.removeEventListener("inputsourceschange",ht);for(let q=0;q<U.length;q++){const pt=D[q];pt!==null&&(D[q]=null,U[q].disconnect(pt))}z=null,ct=null,T.reset(),t.setRenderTarget(_),S=null,v=null,x=null,l=null,O=null,Rt.stop(),s.isPresenting=!1,t.setPixelRatio(H),t.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){u=q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){h=q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(q){m=q},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return x},this.getFrame=function(){return M},this.getSession=function(){return l},this.setSession=async function(q){if(l=q,l!==null){if(_=t.getRenderTarget(),l.addEventListener("select",it),l.addEventListener("selectstart",it),l.addEventListener("selectend",it),l.addEventListener("squeeze",it),l.addEventListener("squeezestart",it),l.addEventListener("squeezeend",it),l.addEventListener("end",gt),l.addEventListener("inputsourceschange",ht),y.xrCompatible!==!0&&await i.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(F),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,bt=null,Ct=null;y.depth&&(Ct=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,St=y.stencil?Ls:As,bt=y.stencil?Us:br);const Qt={colorFormat:i.RGBA8,depthFormat:Ct,scaleFactor:u};x=new XRWebGLBinding(l,i),v=x.createProjectionLayer(Qt),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),O=new Ar(v.textureWidth,v.textureHeight,{format:vi,type:oa,depthTexture:new A0(v.textureWidth,v.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const St={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(l,i,St),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),O=new Ar(S.framebufferWidth,S.framebufferHeight,{format:vi,type:oa,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(h),Rt.setContext(l),Rt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function ht(q){for(let pt=0;pt<q.removed.length;pt++){const St=q.removed[pt],bt=D.indexOf(St);bt>=0&&(D[bt]=null,U[bt].disconnect(St))}for(let pt=0;pt<q.added.length;pt++){const St=q.added[pt];let bt=D.indexOf(St);if(bt===-1){for(let Qt=0;Qt<U.length;Qt++)if(Qt>=D.length){D.push(St),bt=Qt;break}else if(D[Qt]===null){D[Qt]=St,bt=Qt;break}if(bt===-1)break}const Ct=U[bt];Ct&&Ct.connect(St)}}const W=new rt,at=new rt;function j(q,pt,St){W.setFromMatrixPosition(pt.matrixWorld),at.setFromMatrixPosition(St.matrixWorld);const bt=W.distanceTo(at),Ct=pt.projectionMatrix.elements,Qt=St.projectionMatrix.elements,It=Ct[14]/(Ct[10]-1),Ee=Ct[14]/(Ct[10]+1),Ce=(Ct[9]+1)/Ct[5],re=(Ct[9]-1)/Ct[5],I=(Ct[8]-1)/Ct[0],gn=(Qt[8]+1)/Qt[0],oe=It*I,de=It*gn,Xt=bt/(-I+gn),we=Xt*-I;if(pt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(we),q.translateZ(Xt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ct[10]===-1)q.projectionMatrix.copy(pt.projectionMatrix),q.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const Wt=It+Xt,L=Ee+Xt,b=oe-we,tt=de+(bt-we),ft=Ce*Ee/L*Wt,xt=re*Ee/L*Wt;q.projectionMatrix.makePerspective(b,tt,ft,xt,Wt,L),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function yt(q,pt){pt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(pt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(l===null)return;let pt=q.near,St=q.far;T.texture!==null&&(T.depthNear>0&&(pt=T.depthNear),T.depthFar>0&&(St=T.depthFar)),A.near=Z.near=B.near=pt,A.far=Z.far=B.far=St,(z!==A.near||ct!==A.far)&&(l.updateRenderState({depthNear:A.near,depthFar:A.far}),z=A.near,ct=A.far),B.layers.mask=q.layers.mask|2,Z.layers.mask=q.layers.mask|4,A.layers.mask=B.layers.mask|Z.layers.mask;const bt=q.parent,Ct=A.cameras;yt(A,bt);for(let Qt=0;Qt<Ct.length;Qt++)yt(Ct[Qt],bt);Ct.length===2?j(A,B,Z):A.projectionMatrix.copy(B.projectionMatrix),N(q,A,bt)};function N(q,pt,St){St===null?q.matrix.copy(pt.matrixWorld):(q.matrix.copy(St.matrixWorld),q.matrix.invert(),q.matrix.multiply(pt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(pt.projectionMatrix),q.projectionMatrixInverse.copy(pt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ch*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(v===null&&S===null))return p},this.setFoveation=function(q){p=q,v!==null&&(v.fixedFoveation=q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=q)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(A)};let nt=null;function Tt(q,pt){if(g=pt.getViewerPose(m||f),M=pt,g!==null){const St=g.views;S!==null&&(t.setRenderTargetFramebuffer(O,S.framebuffer),t.setRenderTarget(O));let bt=!1;St.length!==A.cameras.length&&(A.cameras.length=0,bt=!0);for(let It=0;It<St.length;It++){const Ee=St[It];let Ce=null;if(S!==null)Ce=S.getViewport(Ee);else{const I=x.getViewSubImage(v,Ee);Ce=I.viewport,It===0&&(t.setRenderTargetTextures(O,I.colorTexture,v.ignoreDepthValues?void 0:I.depthStencilTexture),t.setRenderTarget(O))}let re=w[It];re===void 0&&(re=new li,re.layers.enable(It),re.viewport=new Ke,w[It]=re),re.matrix.fromArray(Ee.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(Ee.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),It===0&&(A.matrix.copy(re.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),bt===!0&&A.cameras.push(re)}const Ct=l.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&x){const It=x.getDepthInformation(St[0]);It&&It.isValid&&It.texture&&T.init(t,It,l.renderState)}}for(let St=0;St<U.length;St++){const bt=D[St],Ct=U[St];bt!==null&&Ct!==void 0&&Ct.update(bt,pt,m||f)}nt&&nt(q,pt),pt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:pt}),M=null}const Rt=new R0;Rt.setAnimationLoop(Tt),this.setAnimationLoop=function(q){nt=q},this.dispose=function(){}}}const mr=new la,T1=new en;function b1(r,t){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function s(y,_){_.color.getRGB(y.fogColor.value,E0(r)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,O,U,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(y,_):_.isMeshToonMaterial?(u(y,_),x(y,_)):_.isMeshPhongMaterial?(u(y,_),g(y,_)):_.isMeshStandardMaterial?(u(y,_),v(y,_),_.isMeshPhysicalMaterial&&S(y,_,D)):_.isMeshMatcapMaterial?(u(y,_),M(y,_)):_.isMeshDepthMaterial?u(y,_):_.isMeshDistanceMaterial?(u(y,_),T(y,_)):_.isMeshNormalMaterial?u(y,_):_.isLineBasicMaterial?(f(y,_),_.isLineDashedMaterial&&h(y,_)):_.isPointsMaterial?p(y,_,O,U):_.isSpriteMaterial?m(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===zn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===zn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const O=t.get(_),U=O.envMap,D=O.envMapRotation;U&&(y.envMap.value=U,mr.copy(D),mr.x*=-1,mr.y*=-1,mr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),y.envMapRotation.value.setFromMatrix4(T1.makeRotationFromEuler(mr)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function f(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function h(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function p(y,_,O,U){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*O,y.scale.value=U*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function m(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function x(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function v(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function S(y,_,O){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===zn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=O.texture,y.transmissionSamplerSize.value.set(O.width,O.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,_){_.matcap&&(y.matcap.value=_.matcap)}function T(y,_){const O=t.get(_).light;y.referencePosition.value.setFromMatrixPosition(O.matrixWorld),y.nearDistance.value=O.shadow.camera.near,y.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function A1(r,t,i,s){let l={},u={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(O,U){const D=U.program;s.uniformBlockBinding(O,D)}function m(O,U){let D=l[O.id];D===void 0&&(M(O),D=g(O),l[O.id]=D,O.addEventListener("dispose",y));const F=U.program;s.updateUBOMapping(O,F);const H=t.render.frame;u[O.id]!==H&&(v(O),u[O.id]=H)}function g(O){const U=x();O.__bindingPointIndex=U;const D=r.createBuffer(),F=O.__size,H=O.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,F,H),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,D),D}function x(){for(let O=0;O<h;O++)if(f.indexOf(O)===-1)return f.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(O){const U=l[O.id],D=O.uniforms,F=O.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let H=0,B=D.length;H<B;H++){const Z=Array.isArray(D[H])?D[H]:[D[H]];for(let w=0,A=Z.length;w<A;w++){const z=Z[w];if(S(z,H,w,F)===!0){const ct=z.__offset,it=Array.isArray(z.value)?z.value:[z.value];let gt=0;for(let ht=0;ht<it.length;ht++){const W=it[ht],at=T(W);typeof W=="number"||typeof W=="boolean"?(z.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,ct+gt,z.__data)):W.isMatrix3?(z.__data[0]=W.elements[0],z.__data[1]=W.elements[1],z.__data[2]=W.elements[2],z.__data[3]=0,z.__data[4]=W.elements[3],z.__data[5]=W.elements[4],z.__data[6]=W.elements[5],z.__data[7]=0,z.__data[8]=W.elements[6],z.__data[9]=W.elements[7],z.__data[10]=W.elements[8],z.__data[11]=0):(W.toArray(z.__data,gt),gt+=at.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ct,z.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(O,U,D,F){const H=O.value,B=U+"_"+D;if(F[B]===void 0)return typeof H=="number"||typeof H=="boolean"?F[B]=H:F[B]=H.clone(),!0;{const Z=F[B];if(typeof H=="number"||typeof H=="boolean"){if(Z!==H)return F[B]=H,!0}else if(Z.equals(H)===!1)return Z.copy(H),!0}return!1}function M(O){const U=O.uniforms;let D=0;const F=16;for(let B=0,Z=U.length;B<Z;B++){const w=Array.isArray(U[B])?U[B]:[U[B]];for(let A=0,z=w.length;A<z;A++){const ct=w[A],it=Array.isArray(ct.value)?ct.value:[ct.value];for(let gt=0,ht=it.length;gt<ht;gt++){const W=it[gt],at=T(W),j=D%F,yt=j%at.boundary,N=j+yt;D+=yt,N!==0&&F-N<at.storage&&(D+=F-N),ct.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),ct.__offset=D,D+=at.storage}}}const H=D%F;return H>0&&(D+=F-H),O.__size=D,O.__cache={},this}function T(O){const U={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(U.boundary=4,U.storage=4):O.isVector2?(U.boundary=8,U.storage=8):O.isVector3||O.isColor?(U.boundary=16,U.storage=12):O.isVector4?(U.boundary=16,U.storage=16):O.isMatrix3?(U.boundary=48,U.storage=48):O.isMatrix4?(U.boundary=64,U.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),U}function y(O){const U=O.target;U.removeEventListener("dispose",y);const D=f.indexOf(U.__bindingPointIndex);f.splice(D,1),r.deleteBuffer(l[U.id]),delete l[U.id],delete u[U.id]}function _(){for(const O in l)r.deleteBuffer(l[O]);f=[],l={},u={}}return{bind:p,update:m,dispose:_}}class R1{constructor(t={}){const{canvas:i=uM(),context:s=null,depth:l=!0,stencil:u=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=f;const M=new Uint32Array(4),T=new Int32Array(4);let y=null,_=null;const O=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=oi,this.toneMapping=Ha,this.toneMappingExposure=1;const D=this;let F=!1,H=0,B=0,Z=null,w=-1,A=null;const z=new Ke,ct=new Ke;let it=null;const gt=new Pe(0);let ht=0,W=i.width,at=i.height,j=1,yt=null,N=null;const nt=new Ke(0,0,W,at),Tt=new Ke(0,0,W,at);let Rt=!1;const q=new b0;let pt=!1,St=!1;this.transmissionResolutionScale=1;const bt=new en,Ct=new en,Qt=new rt,It=new Ke,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ce=!1;function re(){return Z===null?j:1}let I=s;function gn(C,X){return i.getContext(C,X)}try{const C={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ih}`),i.addEventListener("webglcontextlost",_t,!1),i.addEventListener("webglcontextrestored",wt,!1),i.addEventListener("webglcontextcreationerror",Ut,!1),I===null){const X="webgl2";if(I=gn(X,C),I===null)throw gn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let oe,de,Xt,we,Wt,L,b,tt,ft,xt,dt,Gt,Dt,Bt,me,Mt,Ft,Kt,Vt,zt,se,jt,De,k;function Nt(){oe=new BA(I),oe.init(),jt=new x1(I,oe),de=new DA(I,oe,t,jt),Xt=new _1(I,oe),de.reverseDepthBuffer&&v&&Xt.buffers.depth.setReversed(!0),we=new HA(I),Wt=new a1,L=new v1(I,oe,Xt,Wt,de,jt,we),b=new LA(D),tt=new IA(D),ft=new qM(I),De=new CA(I,ft),xt=new FA(I,ft,we,De),dt=new VA(I,xt,ft,we),Vt=new GA(I,de,L),Mt=new UA(Wt),Gt=new i1(D,b,tt,oe,de,De,Mt),Dt=new b1(D,Wt),Bt=new s1,me=new d1(oe),Kt=new RA(D,b,tt,Xt,dt,S,p),Ft=new m1(D,dt,de),k=new A1(I,we,de,Xt),zt=new wA(I,oe,we),se=new zA(I,oe,we),we.programs=Gt.programs,D.capabilities=de,D.extensions=oe,D.properties=Wt,D.renderLists=Bt,D.shadowMap=Ft,D.state=Xt,D.info=we}Nt();const st=new M1(D,I);this.xr=st,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const C=oe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=oe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(C){C!==void 0&&(j=C,this.setSize(W,at,!1))},this.getSize=function(C){return C.set(W,at)},this.setSize=function(C,X,J=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=C,at=X,i.width=Math.floor(C*j),i.height=Math.floor(X*j),J===!0&&(i.style.width=C+"px",i.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(W*j,at*j).floor()},this.setDrawingBufferSize=function(C,X,J){W=C,at=X,j=J,i.width=Math.floor(C*J),i.height=Math.floor(X*J),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(z)},this.getViewport=function(C){return C.copy(nt)},this.setViewport=function(C,X,J,Q){C.isVector4?nt.set(C.x,C.y,C.z,C.w):nt.set(C,X,J,Q),Xt.viewport(z.copy(nt).multiplyScalar(j).round())},this.getScissor=function(C){return C.copy(Tt)},this.setScissor=function(C,X,J,Q){C.isVector4?Tt.set(C.x,C.y,C.z,C.w):Tt.set(C,X,J,Q),Xt.scissor(ct.copy(Tt).multiplyScalar(j).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(C){Xt.setScissorTest(Rt=C)},this.setOpaqueSort=function(C){yt=C},this.setTransparentSort=function(C){N=C},this.getClearColor=function(C){return C.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(C=!0,X=!0,J=!0){let Q=0;if(C){let Y=!1;if(Z!==null){const Et=Z.texture.format;Y=Et===Vh||Et===Gh||Et===Hh}if(Y){const Et=Z.texture.type,At=Et===oa||Et===br||Et===Yo||Et===Us||Et===Fh||Et===zh,Pt=Kt.getClearColor(),Ot=Kt.getClearAlpha(),ee=Pt.r,ne=Pt.g,Yt=Pt.b;At?(M[0]=ee,M[1]=ne,M[2]=Yt,M[3]=Ot,I.clearBufferuiv(I.COLOR,0,M)):(T[0]=ee,T[1]=ne,T[2]=Yt,T[3]=Ot,I.clearBufferiv(I.COLOR,0,T))}else Q|=I.COLOR_BUFFER_BIT}X&&(Q|=I.DEPTH_BUFFER_BIT),J&&(Q|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",_t,!1),i.removeEventListener("webglcontextrestored",wt,!1),i.removeEventListener("webglcontextcreationerror",Ut,!1),Kt.dispose(),Bt.dispose(),me.dispose(),Wt.dispose(),b.dispose(),tt.dispose(),dt.dispose(),De.dispose(),k.dispose(),Gt.dispose(),st.dispose(),st.removeEventListener("sessionstart",rl),st.removeEventListener("sessionend",zs),Si.stop()};function _t(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const C=we.autoReset,X=Ft.enabled,J=Ft.autoUpdate,Q=Ft.needsUpdate,Y=Ft.type;Nt(),we.autoReset=C,Ft.enabled=X,Ft.autoUpdate=J,Ft.needsUpdate=Q,Ft.type=Y}function Ut(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function te(C){const X=C.target;X.removeEventListener("dispose",te),Ge(X)}function Ge(C){nn(C),Wt.remove(C)}function nn(C){const X=Wt.get(C).programs;X!==void 0&&(X.forEach(function(J){Gt.releaseProgram(J)}),C.isShaderMaterial&&Gt.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,J,Q,Y,Et){X===null&&(X=Ee);const At=Y.isMesh&&Y.matrixWorld.determinant()<0,Pt=tc(C,X,J,Q,Y);Xt.setMaterial(Q,At);let Ot=J.index,ee=1;if(Q.wireframe===!0){if(Ot=xt.getWireframeAttribute(J),Ot===void 0)return;ee=2}const ne=J.drawRange,Yt=J.attributes.position;let ge=ne.start*ee,_e=(ne.start+ne.count)*ee;Et!==null&&(ge=Math.max(ge,Et.start*ee),_e=Math.min(_e,(Et.start+Et.count)*ee)),Ot!==null?(ge=Math.max(ge,0),_e=Math.min(_e,Ot.count)):Yt!=null&&(ge=Math.max(ge,0),_e=Math.min(_e,Yt.count));const He=_e-ge;if(He<0||He===1/0)return;De.setup(Y,Q,Pt,J,Ot);let Te,ie=zt;if(Ot!==null&&(Te=ft.get(Ot),ie=se,ie.setIndex(Te)),Y.isMesh)Q.wireframe===!0?(Xt.setLineWidth(Q.wireframeLinewidth*re()),ie.setMode(I.LINES)):ie.setMode(I.TRIANGLES);else if(Y.isLine){let Zt=Q.linewidth;Zt===void 0&&(Zt=1),Xt.setLineWidth(Zt*re()),Y.isLineSegments?ie.setMode(I.LINES):Y.isLineLoop?ie.setMode(I.LINE_LOOP):ie.setMode(I.LINE_STRIP)}else Y.isPoints?ie.setMode(I.POINTS):Y.isSprite&&ie.setMode(I.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)gr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ie.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))ie.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Zt=Y._multiDrawStarts,sn=Y._multiDrawCounts,ve=Y._multiDrawCount,On=Ot?ft.get(Ot).bytesPerElement:1,ui=Wt.get(Q).currentProgram.getUniforms();for(let wn=0;wn<ve;wn++)ui.setValue(I,"_gl_DrawID",wn),ie.render(Zt[wn]/On,sn[wn])}else if(Y.isInstancedMesh)ie.renderInstances(ge,He,Y.count);else if(J.isInstancedBufferGeometry){const Zt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,sn=Math.min(J.instanceCount,Zt);ie.renderInstances(ge,He,sn)}else ie.render(ge,He)};function Me(C,X,J){C.transparent===!0&&C.side===ta&&C.forceSinglePass===!1?(C.side=zn,C.needsUpdate=!0,rn(C,X,J),C.side=Va,C.needsUpdate=!0,rn(C,X,J),C.side=ta):rn(C,X,J)}this.compile=function(C,X,J=null){J===null&&(J=C),_=me.get(J),_.init(X),U.push(_),J.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),C!==J&&C.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),_.setupLights();const Q=new Set;return C.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Et=Y.material;if(Et)if(Array.isArray(Et))for(let At=0;At<Et.length;At++){const Pt=Et[At];Me(Pt,J,Y),Q.add(Pt)}else Me(Et,J,Y),Q.add(Et)}),_=U.pop(),Q},this.compileAsync=function(C,X,J=null){const Q=this.compile(C,X,J);return new Promise(Y=>{function Et(){if(Q.forEach(function(At){Wt.get(At).currentProgram.isReady()&&Q.delete(At)}),Q.size===0){Y(C);return}setTimeout(Et,10)}oe.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Rn=null;function Cn(C){Rn&&Rn(C)}function rl(){Si.stop()}function zs(){Si.start()}const Si=new R0;Si.setAnimationLoop(Cn),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(C){Rn=C,st.setAnimationLoop(C),C===null?Si.stop():Si.start()},st.addEventListener("sessionstart",rl),st.addEventListener("sessionend",zs),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(X),X=st.getCamera()),C.isScene===!0&&C.onBeforeRender(D,C,X,Z),_=me.get(C,U.length),_.init(X),U.push(_),Ct.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),q.setFromProjectionMatrix(Ct),St=this.localClippingEnabled,pt=Mt.init(this.clippingPlanes,St),y=Bt.get(C,O.length),y.init(),O.push(y),st.enabled===!0&&st.isPresenting===!0){const Et=D.xr.getDepthSensingMesh();Et!==null&&Dr(Et,X,-1/0,D.sortObjects)}Dr(C,X,0,D.sortObjects),y.finish(),D.sortObjects===!0&&y.sort(yt,N),Ce=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Ce&&Kt.addToRenderList(y,C),this.info.render.frame++,pt===!0&&Mt.beginShadows();const J=_.state.shadowsArray;Ft.render(J,C,X),pt===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=y.opaque,Y=y.transmissive;if(_.setupLights(),X.isArrayCamera){const Et=X.cameras;if(Y.length>0)for(let At=0,Pt=Et.length;At<Pt;At++){const Ot=Et[At];sl(Q,Y,C,Ot)}Ce&&Kt.render(C);for(let At=0,Pt=Et.length;At<Pt;At++){const Ot=Et[At];Hs(y,C,Ot,Ot.viewport)}}else Y.length>0&&sl(Q,Y,C,X),Ce&&Kt.render(C),Hs(y,C,X);Z!==null&&B===0&&(L.updateMultisampleRenderTarget(Z),L.updateRenderTargetMipmap(Z)),C.isScene===!0&&C.onAfterRender(D,C,X),De.resetDefaultState(),w=-1,A=null,U.pop(),U.length>0?(_=U[U.length-1],pt===!0&&Mt.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,O.pop(),O.length>0?y=O[O.length-1]:y=null};function Dr(C,X,J,Q){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)J=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||q.intersectsSprite(C)){Q&&It.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ct);const At=dt.update(C),Pt=C.material;Pt.visible&&y.push(C,At,Pt,J,It.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||q.intersectsObject(C))){const At=dt.update(C),Pt=C.material;if(Q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),It.copy(C.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),It.copy(At.boundingSphere.center)),It.applyMatrix4(C.matrixWorld).applyMatrix4(Ct)),Array.isArray(Pt)){const Ot=At.groups;for(let ee=0,ne=Ot.length;ee<ne;ee++){const Yt=Ot[ee],ge=Pt[Yt.materialIndex];ge&&ge.visible&&y.push(C,At,ge,J,It.z,Yt)}}else Pt.visible&&y.push(C,At,Pt,J,It.z,null)}}const Et=C.children;for(let At=0,Pt=Et.length;At<Pt;At++)Dr(Et[At],X,J,Q)}function Hs(C,X,J,Q){const Y=C.opaque,Et=C.transmissive,At=C.transparent;_.setupLightsView(J),pt===!0&&Mt.setGlobalState(D.clippingPlanes,J),Q&&Xt.viewport(z.copy(Q)),Y.length>0&&Gn(Y,X,J),Et.length>0&&Gn(Et,X,J),At.length>0&&Gn(At,X,J),Xt.buffers.depth.setTest(!0),Xt.buffers.depth.setMask(!0),Xt.buffers.color.setMask(!0),Xt.setPolygonOffset(!1)}function sl(C,X,J,Q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[Q.id]===void 0&&(_.state.transmissionRenderTarget[Q.id]=new Ar(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?Jo:oa,minFilter:Er,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace}));const Et=_.state.transmissionRenderTarget[Q.id],At=Q.viewport||z;Et.setSize(At.z*D.transmissionResolutionScale,At.w*D.transmissionResolutionScale);const Pt=D.getRenderTarget();D.setRenderTarget(Et),D.getClearColor(gt),ht=D.getClearAlpha(),ht<1&&D.setClearColor(16777215,.5),D.clear(),Ce&&Kt.render(J);const Ot=D.toneMapping;D.toneMapping=Ha;const ee=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),_.setupLightsView(Q),pt===!0&&Mt.setGlobalState(D.clippingPlanes,Q),Gn(C,J,Q),L.updateMultisampleRenderTarget(Et),L.updateRenderTargetMipmap(Et),oe.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let Yt=0,ge=X.length;Yt<ge;Yt++){const _e=X[Yt],He=_e.object,Te=_e.geometry,ie=_e.material,Zt=_e.group;if(ie.side===ta&&He.layers.test(Q.layers)){const sn=ie.side;ie.side=zn,ie.needsUpdate=!0,an(He,J,Q,Te,ie,Zt),ie.side=sn,ie.needsUpdate=!0,ne=!0}}ne===!0&&(L.updateMultisampleRenderTarget(Et),L.updateRenderTargetMipmap(Et))}D.setRenderTarget(Pt),D.setClearColor(gt,ht),ee!==void 0&&(Q.viewport=ee),D.toneMapping=Ot}function Gn(C,X,J){const Q=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,Et=C.length;Y<Et;Y++){const At=C[Y],Pt=At.object,Ot=At.geometry,ee=Q===null?At.material:Q,ne=At.group;Pt.layers.test(J.layers)&&an(Pt,X,J,Ot,ee,ne)}}function an(C,X,J,Q,Y,Et){C.onBeforeRender(D,X,J,Q,Y,Et),C.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(D,X,J,Q,C,Et),Y.transparent===!0&&Y.side===ta&&Y.forceSinglePass===!1?(Y.side=zn,Y.needsUpdate=!0,D.renderBufferDirect(J,X,Q,Y,C,Et),Y.side=Va,Y.needsUpdate=!0,D.renderBufferDirect(J,X,Q,Y,C,Et),Y.side=ta):D.renderBufferDirect(J,X,Q,Y,C,Et),C.onAfterRender(D,X,J,Q,Y,Et)}function rn(C,X,J){X.isScene!==!0&&(X=Ee);const Q=Wt.get(C),Y=_.state.lights,Et=_.state.shadowsArray,At=Y.state.version,Pt=Gt.getParameters(C,Y.state,Et,X,J),Ot=Gt.getProgramCacheKey(Pt);let ee=Q.programs;Q.environment=C.isMeshStandardMaterial?X.environment:null,Q.fog=X.fog,Q.envMap=(C.isMeshStandardMaterial?tt:b).get(C.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,ee===void 0&&(C.addEventListener("dispose",te),ee=new Map,Q.programs=ee);let ne=ee.get(Ot);if(ne!==void 0){if(Q.currentProgram===ne&&Q.lightsStateVersion===At)return Ur(C,Pt),ne}else Pt.uniforms=Gt.getUniforms(C),C.onBeforeCompile(Pt,D),ne=Gt.acquireProgram(Pt,Ot),ee.set(Ot,ne),Q.uniforms=Pt.uniforms;const Yt=Q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Yt.clippingPlanes=Mt.uniform),Ur(C,Pt),Q.needsLights=ol(C),Q.lightsStateVersion=At,Q.needsLights&&(Yt.ambientLightColor.value=Y.state.ambient,Yt.lightProbe.value=Y.state.probe,Yt.directionalLights.value=Y.state.directional,Yt.directionalLightShadows.value=Y.state.directionalShadow,Yt.spotLights.value=Y.state.spot,Yt.spotLightShadows.value=Y.state.spotShadow,Yt.rectAreaLights.value=Y.state.rectArea,Yt.ltc_1.value=Y.state.rectAreaLTC1,Yt.ltc_2.value=Y.state.rectAreaLTC2,Yt.pointLights.value=Y.state.point,Yt.pointLightShadows.value=Y.state.pointShadow,Yt.hemisphereLights.value=Y.state.hemi,Yt.directionalShadowMap.value=Y.state.directionalShadowMap,Yt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Yt.spotShadowMap.value=Y.state.spotShadowMap,Yt.spotLightMatrix.value=Y.state.spotLightMatrix,Yt.spotLightMap.value=Y.state.spotLightMap,Yt.pointShadowMap.value=Y.state.pointShadowMap,Yt.pointShadowMatrix.value=Y.state.pointShadowMatrix),Q.currentProgram=ne,Q.uniformsList=null,ne}function Ui(C){if(C.uniformsList===null){const X=C.currentProgram.getUniforms();C.uniformsList=Vu.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function Ur(C,X){const J=Wt.get(C);J.outputColorSpace=X.outputColorSpace,J.batching=X.batching,J.batchingColor=X.batchingColor,J.instancing=X.instancing,J.instancingColor=X.instancingColor,J.instancingMorph=X.instancingMorph,J.skinning=X.skinning,J.morphTargets=X.morphTargets,J.morphNormals=X.morphNormals,J.morphColors=X.morphColors,J.morphTargetsCount=X.morphTargetsCount,J.numClippingPlanes=X.numClippingPlanes,J.numIntersection=X.numClipIntersection,J.vertexAlphas=X.vertexAlphas,J.vertexTangents=X.vertexTangents,J.toneMapping=X.toneMapping}function tc(C,X,J,Q,Y){X.isScene!==!0&&(X=Ee),L.resetTextureUnits();const Et=X.fog,At=Q.isMeshStandardMaterial?X.environment:null,Pt=Z===null?D.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Ns,Ot=(Q.isMeshStandardMaterial?tt:b).get(Q.envMap||At),ee=Q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,ne=!!J.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Yt=!!J.morphAttributes.position,ge=!!J.morphAttributes.normal,_e=!!J.morphAttributes.color;let He=Ha;Q.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(He=D.toneMapping);const Te=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ie=Te!==void 0?Te.length:0,Zt=Wt.get(Q),sn=_.state.lights;if(pt===!0&&(St===!0||C!==A)){const We=C===A&&Q.id===w;Mt.setState(Q,C,We)}let ve=!1;Q.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==sn.state.version||Zt.outputColorSpace!==Pt||Y.isBatchedMesh&&Zt.batching===!1||!Y.isBatchedMesh&&Zt.batching===!0||Y.isBatchedMesh&&Zt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Zt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Zt.instancing===!1||!Y.isInstancedMesh&&Zt.instancing===!0||Y.isSkinnedMesh&&Zt.skinning===!1||!Y.isSkinnedMesh&&Zt.skinning===!0||Y.isInstancedMesh&&Zt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Zt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Zt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Zt.instancingMorph===!1&&Y.morphTexture!==null||Zt.envMap!==Ot||Q.fog===!0&&Zt.fog!==Et||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==Mt.numPlanes||Zt.numIntersection!==Mt.numIntersection)||Zt.vertexAlphas!==ee||Zt.vertexTangents!==ne||Zt.morphTargets!==Yt||Zt.morphNormals!==ge||Zt.morphColors!==_e||Zt.toneMapping!==He||Zt.morphTargetsCount!==ie)&&(ve=!0):(ve=!0,Zt.__version=Q.version);let On=Zt.currentProgram;ve===!0&&(On=rn(Q,X,Y));let ui=!1,wn=!1,fn=!1;const Ue=On.getUniforms(),Dn=Zt.uniforms;if(Xt.useProgram(On.program)&&(ui=!0,wn=!0,fn=!0),Q.id!==w&&(w=Q.id,wn=!0),ui||A!==C){Xt.buffers.depth.getReversed()?(bt.copy(C.projectionMatrix),fM(bt),dM(bt),Ue.setValue(I,"projectionMatrix",bt)):Ue.setValue(I,"projectionMatrix",C.projectionMatrix),Ue.setValue(I,"viewMatrix",C.matrixWorldInverse);const _n=Ue.map.cameraPosition;_n!==void 0&&_n.setValue(I,Qt.setFromMatrixPosition(C.matrixWorld)),de.logarithmicDepthBuffer&&Ue.setValue(I,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Ue.setValue(I,"isOrthographic",C.isOrthographicCamera===!0),A!==C&&(A=C,wn=!0,fn=!0)}if(Y.isSkinnedMesh){Ue.setOptional(I,Y,"bindMatrix"),Ue.setOptional(I,Y,"bindMatrixInverse");const We=Y.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),Ue.setValue(I,"boneTexture",We.boneTexture,L))}Y.isBatchedMesh&&(Ue.setOptional(I,Y,"batchingTexture"),Ue.setValue(I,"batchingTexture",Y._matricesTexture,L),Ue.setOptional(I,Y,"batchingIdTexture"),Ue.setValue(I,"batchingIdTexture",Y._indirectTexture,L),Ue.setOptional(I,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ue.setValue(I,"batchingColorTexture",Y._colorsTexture,L));const yn=J.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&Vt.update(Y,J,On),(wn||Zt.receiveShadow!==Y.receiveShadow)&&(Zt.receiveShadow=Y.receiveShadow,Ue.setValue(I,"receiveShadow",Y.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Dn.envMap.value=Ot,Dn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&X.environment!==null&&(Dn.envMapIntensity.value=X.environmentIntensity),wn&&(Ue.setValue(I,"toneMappingExposure",D.toneMappingExposure),Zt.needsLights&&ec(Dn,fn),Et&&Q.fog===!0&&Dt.refreshFogUniforms(Dn,Et),Dt.refreshMaterialUniforms(Dn,Q,j,at,_.state.transmissionRenderTarget[C.id]),Vu.upload(I,Ui(Zt),Dn,L)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Vu.upload(I,Ui(Zt),Dn,L),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Ue.setValue(I,"center",Y.center),Ue.setValue(I,"modelViewMatrix",Y.modelViewMatrix),Ue.setValue(I,"normalMatrix",Y.normalMatrix),Ue.setValue(I,"modelMatrix",Y.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const We=Q.uniformsGroups;for(let _n=0,Lr=We.length;_n<Lr;_n++){const Pn=We[_n];k.update(Pn,On),k.bind(Pn,On)}}return On}function ec(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function ol(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(C,X,J){Wt.get(C.texture).__webglTexture=X,Wt.get(C.depthTexture).__webglTexture=J;const Q=Wt.get(C);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=J===void 0,Q.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,X){const J=Wt.get(C);J.__webglFramebuffer=X,J.__useDefaultFramebuffer=X===void 0};const Xa=I.createFramebuffer();this.setRenderTarget=function(C,X=0,J=0){Z=C,H=X,B=J;let Q=!0,Y=null,Et=!1,At=!1;if(C){const Ot=Wt.get(C);if(Ot.__useDefaultFramebuffer!==void 0)Xt.bindFramebuffer(I.FRAMEBUFFER,null),Q=!1;else if(Ot.__webglFramebuffer===void 0)L.setupRenderTarget(C);else if(Ot.__hasExternalTextures)L.rebindTextures(C,Wt.get(C.texture).__webglTexture,Wt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Yt=C.depthTexture;if(Ot.__boundDepthTexture!==Yt){if(Yt!==null&&Wt.has(Yt)&&(C.width!==Yt.image.width||C.height!==Yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(C)}}const ee=C.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(At=!0);const ne=Wt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ne[X])?Y=ne[X][J]:Y=ne[X],Et=!0):C.samples>0&&L.useMultisampledRTT(C)===!1?Y=Wt.get(C).__webglMultisampledFramebuffer:Array.isArray(ne)?Y=ne[J]:Y=ne,z.copy(C.viewport),ct.copy(C.scissor),it=C.scissorTest}else z.copy(nt).multiplyScalar(j).floor(),ct.copy(Tt).multiplyScalar(j).floor(),it=Rt;if(J!==0&&(Y=Xa),Xt.bindFramebuffer(I.FRAMEBUFFER,Y)&&Q&&Xt.drawBuffers(C,Y),Xt.viewport(z),Xt.scissor(ct),Xt.setScissorTest(it),Et){const Ot=Wt.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ot.__webglTexture,J)}else if(At){const Ot=Wt.get(C.texture),ee=X;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ot.__webglTexture,J,ee)}else if(C!==null&&J!==0){const Ot=Wt.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ot.__webglTexture,J)}w=-1},this.readRenderTargetPixels=function(C,X,J,Q,Y,Et,At){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Wt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&At!==void 0&&(Pt=Pt[At]),Pt){Xt.bindFramebuffer(I.FRAMEBUFFER,Pt);try{const Ot=C.texture,ee=Ot.format,ne=Ot.type;if(!de.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-Q&&J>=0&&J<=C.height-Y&&I.readPixels(X,J,Q,Y,jt.convert(ee),jt.convert(ne),Et)}finally{const Ot=Z!==null?Wt.get(Z).__webglFramebuffer:null;Xt.bindFramebuffer(I.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(C,X,J,Q,Y,Et,At){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=Wt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&At!==void 0&&(Pt=Pt[At]),Pt){const Ot=C.texture,ee=Ot.format,ne=Ot.type;if(!de.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=C.width-Q&&J>=0&&J<=C.height-Y){Xt.bindFramebuffer(I.FRAMEBUFFER,Pt);const Yt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Yt),I.bufferData(I.PIXEL_PACK_BUFFER,Et.byteLength,I.STREAM_READ),I.readPixels(X,J,Q,Y,jt.convert(ee),jt.convert(ne),0);const ge=Z!==null?Wt.get(Z).__webglFramebuffer:null;Xt.bindFramebuffer(I.FRAMEBUFFER,ge);const _e=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await cM(I,_e,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Yt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Et),I.deleteBuffer(Yt),I.deleteSync(_e),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,X=null,J=0){C.isTexture!==!0&&(gr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,C=arguments[1]);const Q=Math.pow(2,-J),Y=Math.floor(C.image.width*Q),Et=Math.floor(C.image.height*Q),At=X!==null?X.x:0,Pt=X!==null?X.y:0;L.setTexture2D(C,0),I.copyTexSubImage2D(I.TEXTURE_2D,J,0,0,At,Pt,Y,Et),Xt.unbindTexture()};const Gs=I.createFramebuffer(),Li=I.createFramebuffer();this.copyTextureToTexture=function(C,X,J=null,Q=null,Y=0,Et=null){C.isTexture!==!0&&(gr("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,C=arguments[1],X=arguments[2],Et=arguments[3]||0,J=null),Et===null&&(Y!==0?(gr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Et=Y,Y=0):Et=0);let At,Pt,Ot,ee,ne,Yt,ge,_e,He;const Te=C.isCompressedTexture?C.mipmaps[Et]:C.image;if(J!==null)At=J.max.x-J.min.x,Pt=J.max.y-J.min.y,Ot=J.isBox3?J.max.z-J.min.z:1,ee=J.min.x,ne=J.min.y,Yt=J.isBox3?J.min.z:0;else{const yn=Math.pow(2,-Y);At=Math.floor(Te.width*yn),Pt=Math.floor(Te.height*yn),C.isDataArrayTexture?Ot=Te.depth:C.isData3DTexture?Ot=Math.floor(Te.depth*yn):Ot=1,ee=0,ne=0,Yt=0}Q!==null?(ge=Q.x,_e=Q.y,He=Q.z):(ge=0,_e=0,He=0);const ie=jt.convert(X.format),Zt=jt.convert(X.type);let sn;X.isData3DTexture?(L.setTexture3D(X,0),sn=I.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(L.setTexture2DArray(X,0),sn=I.TEXTURE_2D_ARRAY):(L.setTexture2D(X,0),sn=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,X.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,X.unpackAlignment);const ve=I.getParameter(I.UNPACK_ROW_LENGTH),On=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ui=I.getParameter(I.UNPACK_SKIP_PIXELS),wn=I.getParameter(I.UNPACK_SKIP_ROWS),fn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Te.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Te.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ee),I.pixelStorei(I.UNPACK_SKIP_ROWS,ne),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Yt);const Ue=C.isDataArrayTexture||C.isData3DTexture,Dn=X.isDataArrayTexture||X.isData3DTexture;if(C.isDepthTexture){const yn=Wt.get(C),We=Wt.get(X),_n=Wt.get(yn.__renderTarget),Lr=Wt.get(We.__renderTarget);Xt.bindFramebuffer(I.READ_FRAMEBUFFER,_n.__webglFramebuffer),Xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Lr.__webglFramebuffer);for(let Pn=0;Pn<Ot;Pn++)Ue&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Wt.get(C).__webglTexture,Y,Yt+Pn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Wt.get(X).__webglTexture,Et,He+Pn)),I.blitFramebuffer(ee,ne,At,Pt,ge,_e,At,Pt,I.DEPTH_BUFFER_BIT,I.NEAREST);Xt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(Y!==0||C.isRenderTargetTexture||Wt.has(C)){const yn=Wt.get(C),We=Wt.get(X);Xt.bindFramebuffer(I.READ_FRAMEBUFFER,Gs),Xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Li);for(let _n=0;_n<Ot;_n++)Ue?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,yn.__webglTexture,Y,Yt+_n):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,yn.__webglTexture,Y),Dn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,We.__webglTexture,Et,He+_n):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,We.__webglTexture,Et),Y!==0?I.blitFramebuffer(ee,ne,At,Pt,ge,_e,At,Pt,I.COLOR_BUFFER_BIT,I.NEAREST):Dn?I.copyTexSubImage3D(sn,Et,ge,_e,He+_n,ee,ne,At,Pt):I.copyTexSubImage2D(sn,Et,ge,_e,ee,ne,At,Pt);Xt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Dn?C.isDataTexture||C.isData3DTexture?I.texSubImage3D(sn,Et,ge,_e,He,At,Pt,Ot,ie,Zt,Te.data):X.isCompressedArrayTexture?I.compressedTexSubImage3D(sn,Et,ge,_e,He,At,Pt,Ot,ie,Te.data):I.texSubImage3D(sn,Et,ge,_e,He,At,Pt,Ot,ie,Zt,Te):C.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Et,ge,_e,At,Pt,ie,Zt,Te.data):C.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Et,ge,_e,Te.width,Te.height,ie,Te.data):I.texSubImage2D(I.TEXTURE_2D,Et,ge,_e,At,Pt,ie,Zt,Te);I.pixelStorei(I.UNPACK_ROW_LENGTH,ve),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,On),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ui),I.pixelStorei(I.UNPACK_SKIP_ROWS,wn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,fn),Et===0&&X.generateMipmaps&&I.generateMipmap(sn),Xt.unbindTexture()},this.copyTextureToTexture3D=function(C,X,J=null,Q=null,Y=0){return C.isTexture!==!0&&(gr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,Q=arguments[1]||null,C=arguments[2],X=arguments[3],Y=arguments[4]||0),gr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,X,J,Q,Y)},this.initRenderTarget=function(C){Wt.get(C).__webglFramebuffer===void 0&&L.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),Xt.unbindTexture()},this.resetState=function(){H=0,B=0,Z=null,Xt.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return na}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorspace=Re._getDrawingBufferColorSpace(t),i.unpackColorSpace=Re._getUnpackColorSpace()}}const C1=()=>{const r=lt.useRef(null);return lt.useEffect(()=>{if(!r.current)return;const t=new FM,i=new li(75,window.innerWidth/window.innerHeight,.1,1e3),s=new R1;s.setSize(window.innerWidth,window.innerHeight),r.current.appendChild(s.domElement),i.position.z=5;const l=()=>{requestAnimationFrame(l),s.render(t,i)};l();const u=()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",u),()=>{window.removeEventListener("resize",u),r.current&&s.domElement&&r.current.removeChild(s.domElement),s.dispose()}},[]),$t.jsx("div",{ref:r,style:{width:"100vw",height:"100vh"}})},Xo=({children:r,onClick:t,className:i})=>$t.jsx("button",{onClick:t,className:`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition ${i}`,children:r}),w1=()=>$t.jsxs("div",{className:"container mx-auto px-4 py-8",children:[$t.jsx("h1",{className:"text-4xl font-bold mb-4",children:"Welcome to BuildWars"}),$t.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[$t.jsxs("div",{children:[$t.jsx("p",{className:"text-lg mb-4",children:"Explore cutting-edge AI and visualization technologies."}),$t.jsx(Xo,{children:"Get Started"})]}),$t.jsx(C1,{})]})]});var yv;(function(r){r.STRING="string",r.NUMBER="number",r.INTEGER="integer",r.BOOLEAN="boolean",r.ARRAY="array",r.OBJECT="object"})(yv||(yv={}));/**
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
 */var Ev;(function(r){r.LANGUAGE_UNSPECIFIED="language_unspecified",r.PYTHON="python"})(Ev||(Ev={}));var Mv;(function(r){r.OUTCOME_UNSPECIFIED="outcome_unspecified",r.OUTCOME_OK="outcome_ok",r.OUTCOME_FAILED="outcome_failed",r.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(Mv||(Mv={}));/**
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
 */const Tv=["user","model","function","system"];var bv;(function(r){r.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",r.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",r.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",r.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",r.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",r.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY"})(bv||(bv={}));var Av;(function(r){r.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",r.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",r.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",r.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",r.BLOCK_NONE="BLOCK_NONE"})(Av||(Av={}));var Rv;(function(r){r.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",r.NEGLIGIBLE="NEGLIGIBLE",r.LOW="LOW",r.MEDIUM="MEDIUM",r.HIGH="HIGH"})(Rv||(Rv={}));var Cv;(function(r){r.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",r.SAFETY="SAFETY",r.OTHER="OTHER"})(Cv||(Cv={}));var Wo;(function(r){r.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",r.STOP="STOP",r.MAX_TOKENS="MAX_TOKENS",r.SAFETY="SAFETY",r.RECITATION="RECITATION",r.LANGUAGE="LANGUAGE",r.BLOCKLIST="BLOCKLIST",r.PROHIBITED_CONTENT="PROHIBITED_CONTENT",r.SPII="SPII",r.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",r.OTHER="OTHER"})(Wo||(Wo={}));var wv;(function(r){r.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",r.RETRIEVAL_QUERY="RETRIEVAL_QUERY",r.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",r.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",r.CLASSIFICATION="CLASSIFICATION",r.CLUSTERING="CLUSTERING"})(wv||(wv={}));var Dv;(function(r){r.MODE_UNSPECIFIED="MODE_UNSPECIFIED",r.AUTO="AUTO",r.ANY="ANY",r.NONE="NONE"})(Dv||(Dv={}));var Uv;(function(r){r.MODE_UNSPECIFIED="MODE_UNSPECIFIED",r.MODE_DYNAMIC="MODE_DYNAMIC"})(Uv||(Uv={}));/**
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
 */class An extends Error{constructor(t){super(`[GoogleGenerativeAI Error]: ${t}`)}}class Es extends An{constructor(t,i){super(t),this.response=i}}class L0 extends An{constructor(t,i,s,l){super(t),this.status=i,this.statusText=s,this.errorDetails=l}}class Ga extends An{}class N0 extends An{}/**
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
 */const D1="https://generativelanguage.googleapis.com",U1="v1beta",L1="0.24.0",N1="genai-js";var Rr;(function(r){r.GENERATE_CONTENT="generateContent",r.STREAM_GENERATE_CONTENT="streamGenerateContent",r.COUNT_TOKENS="countTokens",r.EMBED_CONTENT="embedContent",r.BATCH_EMBED_CONTENTS="batchEmbedContents"})(Rr||(Rr={}));class O1{constructor(t,i,s,l,u){this.model=t,this.task=i,this.apiKey=s,this.stream=l,this.requestOptions=u}toString(){var t,i;const s=((t=this.requestOptions)===null||t===void 0?void 0:t.apiVersion)||U1;let u=`${((i=this.requestOptions)===null||i===void 0?void 0:i.baseUrl)||D1}/${s}/${this.model}:${this.task}`;return this.stream&&(u+="?alt=sse"),u}}function P1(r){const t=[];return r!=null&&r.apiClient&&t.push(r.apiClient),t.push(`${N1}/${L1}`),t.join(" ")}async function I1(r){var t;const i=new Headers;i.append("Content-Type","application/json"),i.append("x-goog-api-client",P1(r.requestOptions)),i.append("x-goog-api-key",r.apiKey);let s=(t=r.requestOptions)===null||t===void 0?void 0:t.customHeaders;if(s){if(!(s instanceof Headers))try{s=new Headers(s)}catch(l){throw new Ga(`unable to convert customHeaders value ${JSON.stringify(s)} to Headers: ${l.message}`)}for(const[l,u]of s.entries()){if(l==="x-goog-api-key")throw new Ga(`Cannot set reserved header name ${l}`);if(l==="x-goog-api-client")throw new Ga(`Header name ${l} can only be set using the apiClient field`);i.append(l,u)}}return i}async function B1(r,t,i,s,l,u){const f=new O1(r,t,i,s,u);return{url:f.toString(),fetchOptions:Object.assign(Object.assign({},G1(u)),{method:"POST",headers:await I1(f),body:l})}}async function al(r,t,i,s,l,u={},f=fetch){const{url:h,fetchOptions:p}=await B1(r,t,i,s,l,u);return F1(h,p,f)}async function F1(r,t,i=fetch){let s;try{s=await i(r,t)}catch(l){z1(l,r)}return s.ok||await H1(s,r),s}function z1(r,t){let i=r;throw i.name==="AbortError"?(i=new N0(`Request aborted when fetching ${t.toString()}: ${r.message}`),i.stack=r.stack):r instanceof L0||r instanceof Ga||(i=new An(`Error fetching from ${t.toString()}: ${r.message}`),i.stack=r.stack),i}async function H1(r,t){let i="",s;try{const l=await r.json();i=l.error.message,l.error.details&&(i+=` ${JSON.stringify(l.error.details)}`,s=l.error.details)}catch{}throw new L0(`Error fetching from ${t.toString()}: [${r.status} ${r.statusText}] ${i}`,r.status,r.statusText,s)}function G1(r){const t={};if((r==null?void 0:r.signal)!==void 0||(r==null?void 0:r.timeout)>=0){const i=new AbortController;(r==null?void 0:r.timeout)>=0&&setTimeout(()=>i.abort(),r.timeout),r!=null&&r.signal&&r.signal.addEventListener("abort",()=>{i.abort()}),t.signal=i.signal}return t}/**
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
 */function qh(r){return r.text=()=>{if(r.candidates&&r.candidates.length>0){if(r.candidates.length>1&&console.warn(`This response had ${r.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),ku(r.candidates[0]))throw new Es(`${Ba(r)}`,r);return V1(r)}else if(r.promptFeedback)throw new Es(`Text not available. ${Ba(r)}`,r);return""},r.functionCall=()=>{if(r.candidates&&r.candidates.length>0){if(r.candidates.length>1&&console.warn(`This response had ${r.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),ku(r.candidates[0]))throw new Es(`${Ba(r)}`,r);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),Lv(r)[0]}else if(r.promptFeedback)throw new Es(`Function call not available. ${Ba(r)}`,r)},r.functionCalls=()=>{if(r.candidates&&r.candidates.length>0){if(r.candidates.length>1&&console.warn(`This response had ${r.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),ku(r.candidates[0]))throw new Es(`${Ba(r)}`,r);return Lv(r)}else if(r.promptFeedback)throw new Es(`Function call not available. ${Ba(r)}`,r)},r}function V1(r){var t,i,s,l;const u=[];if(!((i=(t=r.candidates)===null||t===void 0?void 0:t[0].content)===null||i===void 0)&&i.parts)for(const f of(l=(s=r.candidates)===null||s===void 0?void 0:s[0].content)===null||l===void 0?void 0:l.parts)f.text&&u.push(f.text),f.executableCode&&u.push("\n```"+f.executableCode.language+`
`+f.executableCode.code+"\n```\n"),f.codeExecutionResult&&u.push("\n```\n"+f.codeExecutionResult.output+"\n```\n");return u.length>0?u.join(""):""}function Lv(r){var t,i,s,l;const u=[];if(!((i=(t=r.candidates)===null||t===void 0?void 0:t[0].content)===null||i===void 0)&&i.parts)for(const f of(l=(s=r.candidates)===null||s===void 0?void 0:s[0].content)===null||l===void 0?void 0:l.parts)f.functionCall&&u.push(f.functionCall);if(u.length>0)return u}const k1=[Wo.RECITATION,Wo.SAFETY,Wo.LANGUAGE];function ku(r){return!!r.finishReason&&k1.includes(r.finishReason)}function Ba(r){var t,i,s;let l="";if((!r.candidates||r.candidates.length===0)&&r.promptFeedback)l+="Response was blocked",!((t=r.promptFeedback)===null||t===void 0)&&t.blockReason&&(l+=` due to ${r.promptFeedback.blockReason}`),!((i=r.promptFeedback)===null||i===void 0)&&i.blockReasonMessage&&(l+=`: ${r.promptFeedback.blockReasonMessage}`);else if(!((s=r.candidates)===null||s===void 0)&&s[0]){const u=r.candidates[0];ku(u)&&(l+=`Candidate was blocked due to ${u.finishReason}`,u.finishMessage&&(l+=`: ${u.finishMessage}`))}return l}function jo(r){return this instanceof jo?(this.v=r,this):new jo(r)}function X1(r,t,i){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s=i.apply(r,t||[]),l,u=[];return l={},f("next"),f("throw"),f("return"),l[Symbol.asyncIterator]=function(){return this},l;function f(v){s[v]&&(l[v]=function(S){return new Promise(function(M,T){u.push([v,S,M,T])>1||h(v,S)})})}function h(v,S){try{p(s[v](S))}catch(M){x(u[0][3],M)}}function p(v){v.value instanceof jo?Promise.resolve(v.value.v).then(m,g):x(u[0][2],v)}function m(v){h("next",v)}function g(v){h("throw",v)}function x(v,S){v(S),u.shift(),u.length&&h(u[0][0],u[0][1])}}/**
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
 */const Nv=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function W1(r){const t=r.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),i=j1(t),[s,l]=i.tee();return{stream:Y1(s),response:q1(l)}}async function q1(r){const t=[],i=r.getReader();for(;;){const{done:s,value:l}=await i.read();if(s)return qh(Z1(t));t.push(l)}}function Y1(r){return X1(this,arguments,function*(){const i=r.getReader();for(;;){const{value:s,done:l}=yield jo(i.read());if(l)break;yield yield jo(qh(s))}})}function j1(r){const t=r.getReader();return new ReadableStream({start(s){let l="";return u();function u(){return t.read().then(({value:f,done:h})=>{if(h){if(l.trim()){s.error(new An("Failed to parse stream"));return}s.close();return}l+=f;let p=l.match(Nv),m;for(;p;){try{m=JSON.parse(p[1])}catch{s.error(new An(`Error parsing JSON response: "${p[1]}"`));return}s.enqueue(m),l=l.substring(p[0].length),p=l.match(Nv)}return u()}).catch(f=>{let h=f;throw h.stack=f.stack,h.name==="AbortError"?h=new N0("Request aborted when reading from the stream"):h=new An("Error reading from the stream"),h})}}})}function Z1(r){const t=r[r.length-1],i={promptFeedback:t==null?void 0:t.promptFeedback};for(const s of r){if(s.candidates){let l=0;for(const u of s.candidates)if(i.candidates||(i.candidates=[]),i.candidates[l]||(i.candidates[l]={index:l}),i.candidates[l].citationMetadata=u.citationMetadata,i.candidates[l].groundingMetadata=u.groundingMetadata,i.candidates[l].finishReason=u.finishReason,i.candidates[l].finishMessage=u.finishMessage,i.candidates[l].safetyRatings=u.safetyRatings,u.content&&u.content.parts){i.candidates[l].content||(i.candidates[l].content={role:u.content.role||"user",parts:[]});const f={};for(const h of u.content.parts)h.text&&(f.text=h.text),h.functionCall&&(f.functionCall=h.functionCall),h.executableCode&&(f.executableCode=h.executableCode),h.codeExecutionResult&&(f.codeExecutionResult=h.codeExecutionResult),Object.keys(f).length===0&&(f.text=""),i.candidates[l].content.parts.push(f)}l++}s.usageMetadata&&(i.usageMetadata=s.usageMetadata)}return i}/**
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
 */async function O0(r,t,i,s){const l=await al(t,Rr.STREAM_GENERATE_CONTENT,r,!0,JSON.stringify(i),s);return W1(l)}async function P0(r,t,i,s){const u=await(await al(t,Rr.GENERATE_CONTENT,r,!1,JSON.stringify(i),s)).json();return{response:qh(u)}}/**
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
 */function I0(r){if(r!=null){if(typeof r=="string")return{role:"system",parts:[{text:r}]};if(r.text)return{role:"system",parts:[r]};if(r.parts)return r.role?r:{role:"system",parts:r.parts}}}function Zo(r){let t=[];if(typeof r=="string")t=[{text:r}];else for(const i of r)typeof i=="string"?t.push({text:i}):t.push(i);return K1(t)}function K1(r){const t={role:"user",parts:[]},i={role:"function",parts:[]};let s=!1,l=!1;for(const u of r)"functionResponse"in u?(i.parts.push(u),l=!0):(t.parts.push(u),s=!0);if(s&&l)throw new An("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!s&&!l)throw new An("No content is provided for sending chat message.");return s?t:i}function Q1(r,t){var i;let s={model:t==null?void 0:t.model,generationConfig:t==null?void 0:t.generationConfig,safetySettings:t==null?void 0:t.safetySettings,tools:t==null?void 0:t.tools,toolConfig:t==null?void 0:t.toolConfig,systemInstruction:t==null?void 0:t.systemInstruction,cachedContent:(i=t==null?void 0:t.cachedContent)===null||i===void 0?void 0:i.name,contents:[]};const l=r.generateContentRequest!=null;if(r.contents){if(l)throw new Ga("CountTokensRequest must have one of contents or generateContentRequest, not both.");s.contents=r.contents}else if(l)s=Object.assign(Object.assign({},s),r.generateContentRequest);else{const u=Zo(r);s.contents=[u]}return{generateContentRequest:s}}function Ov(r){let t;return r.contents?t=r:t={contents:[Zo(r)]},r.systemInstruction&&(t.systemInstruction=I0(r.systemInstruction)),t}function $1(r){return typeof r=="string"||Array.isArray(r)?{content:Zo(r)}:r}/**
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
 */const Pv=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],J1={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function tC(r){let t=!1;for(const i of r){const{role:s,parts:l}=i;if(!t&&s!=="user")throw new An(`First content should be with role 'user', got ${s}`);if(!Tv.includes(s))throw new An(`Each item should include role field. Got ${s} but valid roles are: ${JSON.stringify(Tv)}`);if(!Array.isArray(l))throw new An("Content should have 'parts' property with an array of Parts");if(l.length===0)throw new An("Each Content should have at least one part");const u={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const h of l)for(const p of Pv)p in h&&(u[p]+=1);const f=J1[s];for(const h of Pv)if(!f.includes(h)&&u[h]>0)throw new An(`Content with role '${s}' can't contain '${h}' part`);t=!0}}function Iv(r){var t;if(r.candidates===void 0||r.candidates.length===0)return!1;const i=(t=r.candidates[0])===null||t===void 0?void 0:t.content;if(i===void 0||i.parts===void 0||i.parts.length===0)return!1;for(const s of i.parts)if(s===void 0||Object.keys(s).length===0||s.text!==void 0&&s.text==="")return!1;return!0}/**
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
 */const Bv="SILENT_ERROR";class eC{constructor(t,i,s,l={}){this.model=i,this.params=s,this._requestOptions=l,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=t,s!=null&&s.history&&(tC(s.history),this._history=s.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(t,i={}){var s,l,u,f,h,p;await this._sendPromise;const m=Zo(t),g={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(l=this.params)===null||l===void 0?void 0:l.generationConfig,tools:(u=this.params)===null||u===void 0?void 0:u.tools,toolConfig:(f=this.params)===null||f===void 0?void 0:f.toolConfig,systemInstruction:(h=this.params)===null||h===void 0?void 0:h.systemInstruction,cachedContent:(p=this.params)===null||p===void 0?void 0:p.cachedContent,contents:[...this._history,m]},x=Object.assign(Object.assign({},this._requestOptions),i);let v;return this._sendPromise=this._sendPromise.then(()=>P0(this._apiKey,this.model,g,x)).then(S=>{var M;if(Iv(S.response)){this._history.push(m);const T=Object.assign({parts:[],role:"model"},(M=S.response.candidates)===null||M===void 0?void 0:M[0].content);this._history.push(T)}else{const T=Ba(S.response);T&&console.warn(`sendMessage() was unsuccessful. ${T}. Inspect response object for details.`)}v=S}),await this._sendPromise,v}async sendMessageStream(t,i={}){var s,l,u,f,h,p;await this._sendPromise;const m=Zo(t),g={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(l=this.params)===null||l===void 0?void 0:l.generationConfig,tools:(u=this.params)===null||u===void 0?void 0:u.tools,toolConfig:(f=this.params)===null||f===void 0?void 0:f.toolConfig,systemInstruction:(h=this.params)===null||h===void 0?void 0:h.systemInstruction,cachedContent:(p=this.params)===null||p===void 0?void 0:p.cachedContent,contents:[...this._history,m]},x=Object.assign(Object.assign({},this._requestOptions),i),v=O0(this._apiKey,this.model,g,x);return this._sendPromise=this._sendPromise.then(()=>v).catch(S=>{throw new Error(Bv)}).then(S=>S.response).then(S=>{if(Iv(S)){this._history.push(m);const M=Object.assign({},S.candidates[0].content);M.role||(M.role="model"),this._history.push(M)}else{const M=Ba(S);M&&console.warn(`sendMessageStream() was unsuccessful. ${M}. Inspect response object for details.`)}}).catch(S=>{S.message!==Bv&&console.error(S)}),v}}/**
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
 */async function nC(r,t,i,s){return(await al(t,Rr.COUNT_TOKENS,r,!1,JSON.stringify(i),s)).json()}/**
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
 */async function iC(r,t,i,s){return(await al(t,Rr.EMBED_CONTENT,r,!1,JSON.stringify(i),s)).json()}async function aC(r,t,i,s){const l=i.requests.map(f=>Object.assign(Object.assign({},f),{model:t}));return(await al(t,Rr.BATCH_EMBED_CONTENTS,r,!1,JSON.stringify({requests:l}),s)).json()}/**
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
 */class Fv{constructor(t,i,s={}){this.apiKey=t,this._requestOptions=s,i.model.includes("/")?this.model=i.model:this.model=`models/${i.model}`,this.generationConfig=i.generationConfig||{},this.safetySettings=i.safetySettings||[],this.tools=i.tools,this.toolConfig=i.toolConfig,this.systemInstruction=I0(i.systemInstruction),this.cachedContent=i.cachedContent}async generateContent(t,i={}){var s;const l=Ov(t),u=Object.assign(Object.assign({},this._requestOptions),i);return P0(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(s=this.cachedContent)===null||s===void 0?void 0:s.name},l),u)}async generateContentStream(t,i={}){var s;const l=Ov(t),u=Object.assign(Object.assign({},this._requestOptions),i);return O0(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(s=this.cachedContent)===null||s===void 0?void 0:s.name},l),u)}startChat(t){var i;return new eC(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(i=this.cachedContent)===null||i===void 0?void 0:i.name},t),this._requestOptions)}async countTokens(t,i={}){const s=Q1(t,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),l=Object.assign(Object.assign({},this._requestOptions),i);return nC(this.apiKey,this.model,s,l)}async embedContent(t,i={}){const s=$1(t),l=Object.assign(Object.assign({},this._requestOptions),i);return iC(this.apiKey,this.model,s,l)}async batchEmbedContents(t,i={}){const s=Object.assign(Object.assign({},this._requestOptions),i);return aC(this.apiKey,this.model,t,s)}}/**
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
 */class rC{constructor(t){this.apiKey=t}getGenerativeModel(t,i){if(!t.model)throw new An("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new Fv(this.apiKey,t,i)}getGenerativeModelFromCachedContent(t,i,s){if(!t.name)throw new Ga("Cached content must contain a `name` field.");if(!t.model)throw new Ga("Cached content must contain a `model` field.");const l=["model","systemInstruction"];for(const f of l)if(i!=null&&i[f]&&t[f]&&(i==null?void 0:i[f])!==t[f]){if(f==="model"){const h=i.model.startsWith("models/")?i.model.replace("models/",""):i.model,p=t.model.startsWith("models/")?t.model.replace("models/",""):t.model;if(h===p)continue}throw new Ga(`Different value for "${f}" specified in modelParams (${i[f]}) and cachedContent (${t[f]})`)}const u=Object.assign(Object.assign({},i),{model:t.model,tools:t.tools,toolConfig:t.toolConfig,systemInstruction:t.systemInstruction,cachedContent:t});return new Fv(this.apiKey,u,s)}}const sC={TEXT_GENERATION:"gemini-1.5-pro-latest",MULTI_MODAL:"gemini-1.5-pro-latest",ANALYSIS:"gemini-1.5-pro-latest"};class Mr extends Error{constructor(t,i="GenerationError"){super(t),this.name=i}}class oC{constructor(t){if(!t)throw new Mr("API Key is required","ConfigurationError");this.genAI=new rC(t)}async generateContent(t,i={}){try{return(await this.genAI.getGenerativeModel({model:i.model||sC.TEXT_GENERATION,generationConfig:{maxOutputTokens:i.maxTokens||1e3,temperature:i.temperature||.7,topP:i.topP||.9,topK:i.topK||40}}).generateContent(t)).response.text()}catch(s){throw console.error("AI Generation Error:",s),new Mr(`Content generation failed: ${s.message}`)}}async analyzeText(t,i="comprehensive"){const s={comprehensive:`Perform a comprehensive analysis of the following text. 
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
        
        Text: ${t}`};try{const l=s[i]||s.comprehensive,u=await this.generateContent(l);return{type:i,insights:u}}catch(l){throw console.error("Text Analysis Error:",l),new Mr(`Text analysis failed: ${l.message}`)}}async generateBusinessModel(t){const i=`Generate an innovative, AI-driven business model for a company with these characteristics:
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
      - Improving efficiency through AI`;try{const s=await this.generateContent(i);return this.parseBusinessModel(s)}catch(s){throw console.error("Business Model Generation Error:",s),new Mr(`Business model generation failed: ${s.message}`)}}parseBusinessModel(t){return{valueProposition:this.extractSection(t,"Value Proposition"),keyActivities:this.extractList(t,"Key Activities"),revenueStreams:this.extractList(t,"Revenue Streams"),sustainabilityImpact:this.extractSection(t,"Sustainability Impact"),aiIntegration:this.extractSection(t,"AI Integration")}}extractSection(t,i){const s=new RegExp(`${i}:(.+?)(?:

|
[A-Za-z]+:)`,"s"),l=t.match(s);return l?l[1].trim():"Not specified"}extractList(t,i){const s=new RegExp(`${i}:(.+?)(?:

|
[A-Za-z]+:)`,"s"),l=t.match(s);return l?l[1].split(`
`).map(u=>u.trim()).filter(u=>u):[]}}const lC=r=>{const[t,i]=lt.useState(null),[s,l]=lt.useState(null),u=lt.useCallback(()=>{try{const m=new oC(r);i(m),l(null)}catch(m){l(m),console.error("AI Service Initialization Error:",m)}},[r]),f=lt.useCallback(async(m,g)=>{if(!t)throw new Mr("AI Service not initialized");return t.generateContent(m,g)},[t]),h=lt.useCallback(async(m,g)=>{if(!t)throw new Mr("AI Service not initialized");return t.analyzeText(m,g)},[t]),p=lt.useCallback(async m=>{if(!t)throw new Mr("AI Service not initialized");return t.generateBusinessModel(m)},[t]);return{aiService:t,error:s,initializeAIService:u,generateContent:f,analyzeText:h,generateBusinessModel:p}},uC=r=>$t.jsx("textarea",{className:"border p-2 w-full",...r}),cC=()=>{const[r,t]=lt.useState(""),[i,s]=lt.useState(""),[l,u]=lt.useState("content"),[f,h]=lt.useState(!1),[p,m]=lt.useState(null),{initializeAIService:g,generateContent:x,analyzeText:v,generateBusinessModel:S}=lC("AIzaSyCUr7JVW3QowRFu_c_49zPDZatiypyrS4I");lt.useEffect(()=>{g()},[g]);const M=async()=>{h(!0),m(null);try{let T;switch(l){case"content":T=await x(r);break;case"analysis":T=await v(r,"comprehensive");break;case"business-model":T=await S({industry:"Technology",aiAdoption:65,primaryAIApplication:"Customer Support",esgScore:.8,sustainableGrowthIndex:.75});break;default:T=await x(r)}s(JSON.stringify(T,null,2))}catch(T){m(T.message),console.error("AI Generation Error:",T)}finally{h(!1)}};return $t.jsxs("div",{className:"container mx-auto px-4 py-8",children:[$t.jsx("h1",{className:"text-3xl font-bold mb-6",children:"AI Features"}),$t.jsxs("div",{className:"space-y-4 max-w-2xl mx-auto",children:[$t.jsxs("div",{className:"flex space-x-4",children:[$t.jsxs("select",{value:l,onChange:T=>u(T.target.value),className:"px-3 py-2 border rounded",children:[$t.jsx("option",{value:"content",children:"Content Generation"}),$t.jsx("option",{value:"analysis",children:"Text Analysis"}),$t.jsx("option",{value:"business-model",children:"Business Model"})]}),$t.jsx(uC,{placeholder:`Enter ${l} prompt`,value:r,onChange:T=>t(T.target.value),className:"flex-grow",disabled:l==="business-model"})]}),$t.jsx(Xo,{onClick:M,disabled:f||l!=="business-model"&&!r,className:"w-full",children:f?"Generating...":"Generate"}),p&&$t.jsx("div",{className:"bg-red-100 text-red-800 p-4 rounded",children:$t.jsxs("p",{children:["Error: ",p]})}),i&&$t.jsxs("div",{className:"mt-4 p-4 bg-gray-100 border rounded",children:[$t.jsx("h2",{className:"font-bold mb-2",children:"AI Response:"}),$t.jsx("pre",{className:"overflow-x-auto text-sm",children:i})]})]})]})},B0=()=>(lt.useEffect(()=>{const r=document.createElement("script");return r.src="https://embed.tawk.to/67e41762ec7c9f190e0dc869/default",r.async=!0,document.body.appendChild(r),()=>{document.body.removeChild(r)}},[]),null),fC=()=>$t.jsxs("div",{className:"container mx-auto px-4 py-8",children:[$t.jsx("h1",{className:"text-3xl font-bold mb-4",children:"Chatbot Integration"}),$t.jsx("p",{children:"Our AI-powered chatbot is ready to assist you!"}),$t.jsx(B0,{})]}),dC=()=>$t.jsx("nav",{className:"bg-primary text-primary-foreground p-4",children:$t.jsxs("div",{className:"container mx-auto flex justify-between items-center",children:[$t.jsx(Ms,{to:"/",className:"text-2xl font-bold",children:"BuildWars"}),$t.jsxs("div",{className:"space-x-4",children:[$t.jsx(Xo,{asChild:!0,variant:"ghost",children:$t.jsx(Ms,{to:"/",children:"Home"})}),$t.jsx(Xo,{asChild:!0,variant:"ghost",children:$t.jsx(Ms,{to:"/ai-features",children:"AI Features"})}),$t.jsx(Xo,{asChild:!0,variant:"ghost",children:$t.jsx(Ms,{to:"/chatbot",children:"Chatbot"})})]})]})});function hC(){return $t.jsx(cE,{children:$t.jsxs("div",{className:"min-h-screen bg-background text-foreground",children:[$t.jsx(dC,{}),$t.jsxs(Gy,{children:[$t.jsx(Ou,{path:"/",element:$t.jsx(w1,{})}),$t.jsx(Ou,{path:"/ai-features",element:$t.jsx(cC,{})}),$t.jsx(Ou,{path:"/chatbot",element:$t.jsx(fC,{})})]}),$t.jsx(B0,{})]})})}KS.createRoot(document.getElementById("root")).render($t.jsx(lt.StrictMode,{children:$t.jsx(hC,{})}));
