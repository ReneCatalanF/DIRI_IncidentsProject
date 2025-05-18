var aE=Object.defineProperty;var uE=(r,e,t)=>e in r?aE(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var xl=(r,e,t)=>uE(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function cE(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Cc={exports:{}},ks={},Sc={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm;function dE(){if(pm)return le;pm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),_=Symbol.iterator;function w(S){return S===null||typeof S!="object"?null:(S=_&&S[_]||S["@@iterator"],typeof S=="function"?S:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,L={};function A(S,O,Y){this.props=S,this.context=O,this.refs=L,this.updater=Y||R}A.prototype.isReactComponent={},A.prototype.setState=function(S,O){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,O,"setState")},A.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function b(){}b.prototype=A.prototype;function H(S,O,Y){this.props=S,this.context=O,this.refs=L,this.updater=Y||R}var B=H.prototype=new b;B.constructor=H,I(B,A.prototype),B.isPureReactComponent=!0;var ee=Array.isArray,se=Object.prototype.hasOwnProperty,re={current:null},he={key:!0,ref:!0,__self:!0,__source:!0};function we(S,O,Y){var ie,oe={},ce=null,Ee=null;if(O!=null)for(ie in O.ref!==void 0&&(Ee=O.ref),O.key!==void 0&&(ce=""+O.key),O)se.call(O,ie)&&!he.hasOwnProperty(ie)&&(oe[ie]=O[ie]);var ge=arguments.length-2;if(ge===1)oe.children=Y;else if(1<ge){for(var Te=Array(ge),Ct=0;Ct<ge;Ct++)Te[Ct]=arguments[Ct+2];oe.children=Te}if(S&&S.defaultProps)for(ie in ge=S.defaultProps,ge)oe[ie]===void 0&&(oe[ie]=ge[ie]);return{$$typeof:r,type:S,key:ce,ref:Ee,props:oe,_owner:re.current}}function _e(S,O){return{$$typeof:r,type:S.type,key:O,ref:S.ref,props:S.props,_owner:S._owner}}function Me(S){return typeof S=="object"&&S!==null&&S.$$typeof===r}function Et(S){var O={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(Y){return O[Y]})}var Nt=/\/+/g;function nt(S,O){return typeof S=="object"&&S!==null&&S.key!=null?Et(""+S.key):O.toString(36)}function at(S,O,Y,ie,oe){var ce=typeof S;(ce==="undefined"||ce==="boolean")&&(S=null);var Ee=!1;if(S===null)Ee=!0;else switch(ce){case"string":case"number":Ee=!0;break;case"object":switch(S.$$typeof){case r:case e:Ee=!0}}if(Ee)return Ee=S,oe=oe(Ee),S=ie===""?"."+nt(Ee,0):ie,ee(oe)?(Y="",S!=null&&(Y=S.replace(Nt,"$&/")+"/"),at(oe,O,Y,"",function(Ct){return Ct})):oe!=null&&(Me(oe)&&(oe=_e(oe,Y+(!oe.key||Ee&&Ee.key===oe.key?"":(""+oe.key).replace(Nt,"$&/")+"/")+S)),O.push(oe)),1;if(Ee=0,ie=ie===""?".":ie+":",ee(S))for(var ge=0;ge<S.length;ge++){ce=S[ge];var Te=ie+nt(ce,ge);Ee+=at(ce,O,Y,Te,oe)}else if(Te=w(S),typeof Te=="function")for(S=Te.call(S),ge=0;!(ce=S.next()).done;)ce=ce.value,Te=ie+nt(ce,ge++),Ee+=at(ce,O,Y,Te,oe);else if(ce==="object")throw O=String(S),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.");return Ee}function Pt(S,O,Y){if(S==null)return S;var ie=[],oe=0;return at(S,ie,"","",function(ce){return O.call(Y,ce,oe++)}),ie}function rt(S){if(S._status===-1){var O=S._result;O=O(),O.then(function(Y){(S._status===0||S._status===-1)&&(S._status=1,S._result=Y)},function(Y){(S._status===0||S._status===-1)&&(S._status=2,S._result=Y)}),S._status===-1&&(S._status=0,S._result=O)}if(S._status===1)return S._result.default;throw S._result}var Pe={current:null},D={transition:null},q={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:D,ReactCurrentOwner:re};function W(){throw Error("act(...) is not supported in production builds of React.")}return le.Children={map:Pt,forEach:function(S,O,Y){Pt(S,function(){O.apply(this,arguments)},Y)},count:function(S){var O=0;return Pt(S,function(){O++}),O},toArray:function(S){return Pt(S,function(O){return O})||[]},only:function(S){if(!Me(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},le.Component=A,le.Fragment=t,le.Profiler=o,le.PureComponent=H,le.StrictMode=s,le.Suspense=p,le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,le.act=W,le.cloneElement=function(S,O,Y){if(S==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+S+".");var ie=I({},S.props),oe=S.key,ce=S.ref,Ee=S._owner;if(O!=null){if(O.ref!==void 0&&(ce=O.ref,Ee=re.current),O.key!==void 0&&(oe=""+O.key),S.type&&S.type.defaultProps)var ge=S.type.defaultProps;for(Te in O)se.call(O,Te)&&!he.hasOwnProperty(Te)&&(ie[Te]=O[Te]===void 0&&ge!==void 0?ge[Te]:O[Te])}var Te=arguments.length-2;if(Te===1)ie.children=Y;else if(1<Te){ge=Array(Te);for(var Ct=0;Ct<Te;Ct++)ge[Ct]=arguments[Ct+2];ie.children=ge}return{$$typeof:r,type:S.type,key:oe,ref:ce,props:ie,_owner:Ee}},le.createContext=function(S){return S={$$typeof:c,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},S.Provider={$$typeof:a,_context:S},S.Consumer=S},le.createElement=we,le.createFactory=function(S){var O=we.bind(null,S);return O.type=S,O},le.createRef=function(){return{current:null}},le.forwardRef=function(S){return{$$typeof:f,render:S}},le.isValidElement=Me,le.lazy=function(S){return{$$typeof:y,_payload:{_status:-1,_result:S},_init:rt}},le.memo=function(S,O){return{$$typeof:m,type:S,compare:O===void 0?null:O}},le.startTransition=function(S){var O=D.transition;D.transition={};try{S()}finally{D.transition=O}},le.unstable_act=W,le.useCallback=function(S,O){return Pe.current.useCallback(S,O)},le.useContext=function(S){return Pe.current.useContext(S)},le.useDebugValue=function(){},le.useDeferredValue=function(S){return Pe.current.useDeferredValue(S)},le.useEffect=function(S,O){return Pe.current.useEffect(S,O)},le.useId=function(){return Pe.current.useId()},le.useImperativeHandle=function(S,O,Y){return Pe.current.useImperativeHandle(S,O,Y)},le.useInsertionEffect=function(S,O){return Pe.current.useInsertionEffect(S,O)},le.useLayoutEffect=function(S,O){return Pe.current.useLayoutEffect(S,O)},le.useMemo=function(S,O){return Pe.current.useMemo(S,O)},le.useReducer=function(S,O,Y){return Pe.current.useReducer(S,O,Y)},le.useRef=function(S){return Pe.current.useRef(S)},le.useState=function(S){return Pe.current.useState(S)},le.useSyncExternalStore=function(S,O,Y){return Pe.current.useSyncExternalStore(S,O,Y)},le.useTransition=function(){return Pe.current.useTransition()},le.version="18.3.1",le}var mm;function pd(){return mm||(mm=1,Sc.exports=dE()),Sc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm;function hE(){if(gm)return ks;gm=1;var r=pd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(f,p,m){var y,_={},w=null,R=null;m!==void 0&&(w=""+m),p.key!==void 0&&(w=""+p.key),p.ref!==void 0&&(R=p.ref);for(y in p)s.call(p,y)&&!a.hasOwnProperty(y)&&(_[y]=p[y]);if(f&&f.defaultProps)for(y in p=f.defaultProps,p)_[y]===void 0&&(_[y]=p[y]);return{$$typeof:e,type:f,key:w,ref:R,props:_,_owner:o.current}}return ks.Fragment=t,ks.jsx=c,ks.jsxs=c,ks}var _m;function fE(){return _m||(_m=1,Cc.exports=hE()),Cc.exports}var T=fE(),N=pd();const pE=cE(N);var Al={},Ic={exports:{}},vt={},kc={exports:{}},Tc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym;function mE(){return ym||(ym=1,function(r){function e(D,q){var W=D.length;D.push(q);e:for(;0<W;){var S=W-1>>>1,O=D[S];if(0<o(O,q))D[S]=q,D[W]=O,W=S;else break e}}function t(D){return D.length===0?null:D[0]}function s(D){if(D.length===0)return null;var q=D[0],W=D.pop();if(W!==q){D[0]=W;e:for(var S=0,O=D.length,Y=O>>>1;S<Y;){var ie=2*(S+1)-1,oe=D[ie],ce=ie+1,Ee=D[ce];if(0>o(oe,W))ce<O&&0>o(Ee,oe)?(D[S]=Ee,D[ce]=W,S=ce):(D[S]=oe,D[ie]=W,S=ie);else if(ce<O&&0>o(Ee,W))D[S]=Ee,D[ce]=W,S=ce;else break e}}return q}function o(D,q){var W=D.sortIndex-q.sortIndex;return W!==0?W:D.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;r.unstable_now=function(){return a.now()}}else{var c=Date,f=c.now();r.unstable_now=function(){return c.now()-f}}var p=[],m=[],y=1,_=null,w=3,R=!1,I=!1,L=!1,A=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function B(D){for(var q=t(m);q!==null;){if(q.callback===null)s(m);else if(q.startTime<=D)s(m),q.sortIndex=q.expirationTime,e(p,q);else break;q=t(m)}}function ee(D){if(L=!1,B(D),!I)if(t(p)!==null)I=!0,rt(se);else{var q=t(m);q!==null&&Pe(ee,q.startTime-D)}}function se(D,q){I=!1,L&&(L=!1,b(we),we=-1),R=!0;var W=w;try{for(B(q),_=t(p);_!==null&&(!(_.expirationTime>q)||D&&!Et());){var S=_.callback;if(typeof S=="function"){_.callback=null,w=_.priorityLevel;var O=S(_.expirationTime<=q);q=r.unstable_now(),typeof O=="function"?_.callback=O:_===t(p)&&s(p),B(q)}else s(p);_=t(p)}if(_!==null)var Y=!0;else{var ie=t(m);ie!==null&&Pe(ee,ie.startTime-q),Y=!1}return Y}finally{_=null,w=W,R=!1}}var re=!1,he=null,we=-1,_e=5,Me=-1;function Et(){return!(r.unstable_now()-Me<_e)}function Nt(){if(he!==null){var D=r.unstable_now();Me=D;var q=!0;try{q=he(!0,D)}finally{q?nt():(re=!1,he=null)}}else re=!1}var nt;if(typeof H=="function")nt=function(){H(Nt)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,Pt=at.port2;at.port1.onmessage=Nt,nt=function(){Pt.postMessage(null)}}else nt=function(){A(Nt,0)};function rt(D){he=D,re||(re=!0,nt())}function Pe(D,q){we=A(function(){D(r.unstable_now())},q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(D){D.callback=null},r.unstable_continueExecution=function(){I||R||(I=!0,rt(se))},r.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_e=0<D?Math.floor(1e3/D):5},r.unstable_getCurrentPriorityLevel=function(){return w},r.unstable_getFirstCallbackNode=function(){return t(p)},r.unstable_next=function(D){switch(w){case 1:case 2:case 3:var q=3;break;default:q=w}var W=w;w=q;try{return D()}finally{w=W}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(D,q){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var W=w;w=D;try{return q()}finally{w=W}},r.unstable_scheduleCallback=function(D,q,W){var S=r.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?S+W:S):W=S,D){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=W+O,D={id:y++,callback:q,priorityLevel:D,startTime:W,expirationTime:O,sortIndex:-1},W>S?(D.sortIndex=W,e(m,D),t(p)===null&&D===t(m)&&(L?(b(we),we=-1):L=!0,Pe(ee,W-S))):(D.sortIndex=O,e(p,D),I||R||(I=!0,rt(se))),D},r.unstable_shouldYield=Et,r.unstable_wrapCallback=function(D){var q=w;return function(){var W=w;w=q;try{return D.apply(this,arguments)}finally{w=W}}}}(Tc)),Tc}var vm;function gE(){return vm||(vm=1,kc.exports=mE()),kc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wm;function _E(){if(wm)return vt;wm=1;var r=pd(),e=gE();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)i+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function a(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},_={};function w(n){return p.call(_,n)?!0:p.call(y,n)?!1:m.test(n)?_[n]=!0:(y[n]=!0,!1)}function R(n,i,l,u){if(l!==null&&l.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function I(n,i,l,u){if(i===null||typeof i>"u"||R(n,i,l,u))return!0;if(u)return!1;if(l!==null)switch(l.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function L(n,i,l,u,d,h,g){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=l,this.propertyName=n,this.type=i,this.sanitizeURL=h,this.removeEmptyString=g}var A={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){A[n]=new L(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];A[i]=new L(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){A[n]=new L(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){A[n]=new L(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){A[n]=new L(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){A[n]=new L(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){A[n]=new L(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){A[n]=new L(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){A[n]=new L(n,5,!1,n.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function H(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(b,H);A[i]=new L(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(b,H);A[i]=new L(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(b,H);A[i]=new L(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){A[n]=new L(n,1,!1,n.toLowerCase(),null,!1,!1)}),A.xlinkHref=new L("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){A[n]=new L(n,1,!1,n.toLowerCase(),null,!0,!0)});function B(n,i,l,u){var d=A.hasOwnProperty(i)?A[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(I(i,l,d,u)&&(l=null),u||d===null?w(i)&&(l===null?n.removeAttribute(i):n.setAttribute(i,""+l)):d.mustUseProperty?n[d.propertyName]=l===null?d.type===3?!1:"":l:(i=d.attributeName,u=d.attributeNamespace,l===null?n.removeAttribute(i):(d=d.type,l=d===3||d===4&&l===!0?"":""+l,u?n.setAttributeNS(u,i,l):n.setAttribute(i,l))))}var ee=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,se=Symbol.for("react.element"),re=Symbol.for("react.portal"),he=Symbol.for("react.fragment"),we=Symbol.for("react.strict_mode"),_e=Symbol.for("react.profiler"),Me=Symbol.for("react.provider"),Et=Symbol.for("react.context"),Nt=Symbol.for("react.forward_ref"),nt=Symbol.for("react.suspense"),at=Symbol.for("react.suspense_list"),Pt=Symbol.for("react.memo"),rt=Symbol.for("react.lazy"),Pe=Symbol.for("react.offscreen"),D=Symbol.iterator;function q(n){return n===null||typeof n!="object"?null:(n=D&&n[D]||n["@@iterator"],typeof n=="function"?n:null)}var W=Object.assign,S;function O(n){if(S===void 0)try{throw Error()}catch(l){var i=l.stack.trim().match(/\n( *(at )?)/);S=i&&i[1]||""}return`
`+S+n}var Y=!1;function ie(n,i){if(!n||Y)return"";Y=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(x){var u=x}Reflect.construct(n,[],i)}else{try{i.call()}catch(x){u=x}n.call(i.prototype)}else{try{throw Error()}catch(x){u=x}n()}}catch(x){if(x&&u&&typeof x.stack=="string"){for(var d=x.stack.split(`
`),h=u.stack.split(`
`),g=d.length-1,v=h.length-1;1<=g&&0<=v&&d[g]!==h[v];)v--;for(;1<=g&&0<=v;g--,v--)if(d[g]!==h[v]){if(g!==1||v!==1)do if(g--,v--,0>v||d[g]!==h[v]){var E=`
`+d[g].replace(" at new "," at ");return n.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",n.displayName)),E}while(1<=g&&0<=v);break}}}finally{Y=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?O(n):""}function oe(n){switch(n.tag){case 5:return O(n.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 2:case 15:return n=ie(n.type,!1),n;case 11:return n=ie(n.type.render,!1),n;case 1:return n=ie(n.type,!0),n;default:return""}}function ce(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case he:return"Fragment";case re:return"Portal";case _e:return"Profiler";case we:return"StrictMode";case nt:return"Suspense";case at:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Et:return(n.displayName||"Context")+".Consumer";case Me:return(n._context.displayName||"Context")+".Provider";case Nt:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Pt:return i=n.displayName||null,i!==null?i:ce(n.type)||"Memo";case rt:i=n._payload,n=n._init;try{return ce(n(i))}catch{}}return null}function Ee(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ce(i);case 8:return i===we?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ge(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Te(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ct(n){var i=Te(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var d=l.get,h=l.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(g){u=""+g,h.call(this,g)}}),Object.defineProperty(n,i,{enumerable:l.enumerable}),{getValue:function(){return u},setValue:function(g){u=""+g},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function wo(n){n._valueTracker||(n._valueTracker=Ct(n))}function vh(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var l=i.getValue(),u="";return n&&(u=Te(n)?n.checked?"true":"false":n.value),n=u,n!==l?(i.setValue(n),!0):!1}function Eo(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Pa(n,i){var l=i.checked;return W({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function wh(n,i){var l=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;l=ge(i.value!=null?i.value:l),n._wrapperState={initialChecked:u,initialValue:l,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Eh(n,i){i=i.checked,i!=null&&B(n,"checked",i,!1)}function xa(n,i){Eh(n,i);var l=ge(i.value),u=i.type;if(l!=null)u==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Aa(n,i.type,l):i.hasOwnProperty("defaultValue")&&Aa(n,i.type,ge(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ch(n,i,l){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,l||i===n.value||(n.value=i),n.defaultValue=i}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function Aa(n,i,l){(i!=="number"||Eo(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var zi=Array.isArray;function Hr(n,i,l,u){if(n=n.options,i){i={};for(var d=0;d<l.length;d++)i["$"+l[d]]=!0;for(l=0;l<n.length;l++)d=i.hasOwnProperty("$"+n[l].value),n[l].selected!==d&&(n[l].selected=d),d&&u&&(n[l].defaultSelected=!0)}else{for(l=""+ge(l),i=null,d=0;d<n.length;d++){if(n[d].value===l){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Oa(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return W({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Sh(n,i){var l=i.value;if(l==null){if(l=i.children,i=i.defaultValue,l!=null){if(i!=null)throw Error(t(92));if(zi(l)){if(1<l.length)throw Error(t(93));l=l[0]}i=l}i==null&&(i=""),l=i}n._wrapperState={initialValue:ge(l)}}function Ih(n,i){var l=ge(i.value),u=ge(i.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),i.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),u!=null&&(n.defaultValue=""+u)}function kh(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Th(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function La(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Th(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Co,Rh=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,l,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,l,u,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Co=Co||document.createElement("div"),Co.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Co.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Bi(n,i){if(i){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=i;return}}n.textContent=i}var Wi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fv=["Webkit","ms","Moz","O"];Object.keys(Wi).forEach(function(n){fv.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Wi[i]=Wi[n]})});function Nh(n,i,l){return i==null||typeof i=="boolean"||i===""?"":l||typeof i!="number"||i===0||Wi.hasOwnProperty(n)&&Wi[n]?(""+i).trim():i+"px"}function Ph(n,i){n=n.style;for(var l in i)if(i.hasOwnProperty(l)){var u=l.indexOf("--")===0,d=Nh(l,i[l],u);l==="float"&&(l="cssFloat"),u?n.setProperty(l,d):n[l]=d}}var pv=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Da(n,i){if(i){if(pv[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ma(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ba=null;function Fa(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ua=null,$r=null,Vr=null;function xh(n){if(n=cs(n)){if(typeof Ua!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Vo(i),Ua(n.stateNode,n.type,i))}}function Ah(n){$r?Vr?Vr.push(n):Vr=[n]:$r=n}function Oh(){if($r){var n=$r,i=Vr;if(Vr=$r=null,xh(n),i)for(n=0;n<i.length;n++)xh(i[n])}}function Lh(n,i){return n(i)}function Dh(){}var ja=!1;function Mh(n,i,l){if(ja)return n(i,l);ja=!0;try{return Lh(n,i,l)}finally{ja=!1,($r!==null||Vr!==null)&&(Dh(),Oh())}}function Hi(n,i){var l=n.stateNode;if(l===null)return null;var u=Vo(l);if(u===null)return null;l=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,i,typeof l));return l}var za=!1;if(f)try{var $i={};Object.defineProperty($i,"passive",{get:function(){za=!0}}),window.addEventListener("test",$i,$i),window.removeEventListener("test",$i,$i)}catch{za=!1}function mv(n,i,l,u,d,h,g,v,E){var x=Array.prototype.slice.call(arguments,3);try{i.apply(l,x)}catch(F){this.onError(F)}}var Vi=!1,So=null,Io=!1,Ba=null,gv={onError:function(n){Vi=!0,So=n}};function _v(n,i,l,u,d,h,g,v,E){Vi=!1,So=null,mv.apply(gv,arguments)}function yv(n,i,l,u,d,h,g,v,E){if(_v.apply(this,arguments),Vi){if(Vi){var x=So;Vi=!1,So=null}else throw Error(t(198));Io||(Io=!0,Ba=x)}}function gr(n){var i=n,l=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,i.flags&4098&&(l=i.return),n=i.return;while(n)}return i.tag===3?l:null}function bh(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Fh(n){if(gr(n)!==n)throw Error(t(188))}function vv(n){var i=n.alternate;if(!i){if(i=gr(n),i===null)throw Error(t(188));return i!==n?null:n}for(var l=n,u=i;;){var d=l.return;if(d===null)break;var h=d.alternate;if(h===null){if(u=d.return,u!==null){l=u;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===l)return Fh(d),n;if(h===u)return Fh(d),i;h=h.sibling}throw Error(t(188))}if(l.return!==u.return)l=d,u=h;else{for(var g=!1,v=d.child;v;){if(v===l){g=!0,l=d,u=h;break}if(v===u){g=!0,u=d,l=h;break}v=v.sibling}if(!g){for(v=h.child;v;){if(v===l){g=!0,l=h,u=d;break}if(v===u){g=!0,u=h,l=d;break}v=v.sibling}if(!g)throw Error(t(189))}}if(l.alternate!==u)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:i}function Uh(n){return n=vv(n),n!==null?jh(n):null}function jh(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=jh(n);if(i!==null)return i;n=n.sibling}return null}var zh=e.unstable_scheduleCallback,Bh=e.unstable_cancelCallback,wv=e.unstable_shouldYield,Ev=e.unstable_requestPaint,Ue=e.unstable_now,Cv=e.unstable_getCurrentPriorityLevel,Wa=e.unstable_ImmediatePriority,Wh=e.unstable_UserBlockingPriority,ko=e.unstable_NormalPriority,Sv=e.unstable_LowPriority,Hh=e.unstable_IdlePriority,To=null,Zt=null;function Iv(n){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(To,n,void 0,(n.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:Rv,kv=Math.log,Tv=Math.LN2;function Rv(n){return n>>>=0,n===0?32:31-(kv(n)/Tv|0)|0}var Ro=64,No=4194304;function Gi(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Po(n,i){var l=n.pendingLanes;if(l===0)return 0;var u=0,d=n.suspendedLanes,h=n.pingedLanes,g=l&268435455;if(g!==0){var v=g&~d;v!==0?u=Gi(v):(h&=g,h!==0&&(u=Gi(h)))}else g=l&~d,g!==0?u=Gi(g):h!==0&&(u=Gi(h));if(u===0)return 0;if(i!==0&&i!==u&&!(i&d)&&(d=u&-u,h=i&-i,d>=h||d===16&&(h&4194240)!==0))return i;if(u&4&&(u|=l&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)l=31-Bt(i),d=1<<l,u|=n[l],i&=~d;return u}function Nv(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pv(n,i){for(var l=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,h=n.pendingLanes;0<h;){var g=31-Bt(h),v=1<<g,E=d[g];E===-1?(!(v&l)||v&u)&&(d[g]=Nv(v,i)):E<=i&&(n.expiredLanes|=v),h&=~v}}function Ha(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function $h(){var n=Ro;return Ro<<=1,!(Ro&4194240)&&(Ro=64),n}function $a(n){for(var i=[],l=0;31>l;l++)i.push(n);return i}function Ki(n,i,l){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Bt(i),n[i]=l}function xv(n,i){var l=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<l;){var d=31-Bt(l),h=1<<d;i[d]=0,u[d]=-1,n[d]=-1,l&=~h}}function Va(n,i){var l=n.entangledLanes|=i;for(n=n.entanglements;l;){var u=31-Bt(l),d=1<<u;d&i|n[u]&i&&(n[u]|=i),l&=~d}}var ye=0;function Vh(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Gh,Ga,Kh,qh,Qh,Ka=!1,xo=[],xn=null,An=null,On=null,qi=new Map,Qi=new Map,Ln=[],Av="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yh(n,i){switch(n){case"focusin":case"focusout":xn=null;break;case"dragenter":case"dragleave":An=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":qi.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qi.delete(i.pointerId)}}function Yi(n,i,l,u,d,h){return n===null||n.nativeEvent!==h?(n={blockedOn:i,domEventName:l,eventSystemFlags:u,nativeEvent:h,targetContainers:[d]},i!==null&&(i=cs(i),i!==null&&Ga(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Ov(n,i,l,u,d){switch(i){case"focusin":return xn=Yi(xn,n,i,l,u,d),!0;case"dragenter":return An=Yi(An,n,i,l,u,d),!0;case"mouseover":return On=Yi(On,n,i,l,u,d),!0;case"pointerover":var h=d.pointerId;return qi.set(h,Yi(qi.get(h)||null,n,i,l,u,d)),!0;case"gotpointercapture":return h=d.pointerId,Qi.set(h,Yi(Qi.get(h)||null,n,i,l,u,d)),!0}return!1}function Jh(n){var i=_r(n.target);if(i!==null){var l=gr(i);if(l!==null){if(i=l.tag,i===13){if(i=bh(l),i!==null){n.blockedOn=i,Qh(n.priority,function(){Kh(l)});return}}else if(i===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ao(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var l=Qa(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var u=new l.constructor(l.type,l);ba=u,l.target.dispatchEvent(u),ba=null}else return i=cs(l),i!==null&&Ga(i),n.blockedOn=l,!1;i.shift()}return!0}function Xh(n,i,l){Ao(n)&&l.delete(i)}function Lv(){Ka=!1,xn!==null&&Ao(xn)&&(xn=null),An!==null&&Ao(An)&&(An=null),On!==null&&Ao(On)&&(On=null),qi.forEach(Xh),Qi.forEach(Xh)}function Ji(n,i){n.blockedOn===i&&(n.blockedOn=null,Ka||(Ka=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Lv)))}function Xi(n){function i(d){return Ji(d,n)}if(0<xo.length){Ji(xo[0],n);for(var l=1;l<xo.length;l++){var u=xo[l];u.blockedOn===n&&(u.blockedOn=null)}}for(xn!==null&&Ji(xn,n),An!==null&&Ji(An,n),On!==null&&Ji(On,n),qi.forEach(i),Qi.forEach(i),l=0;l<Ln.length;l++)u=Ln[l],u.blockedOn===n&&(u.blockedOn=null);for(;0<Ln.length&&(l=Ln[0],l.blockedOn===null);)Jh(l),l.blockedOn===null&&Ln.shift()}var Gr=ee.ReactCurrentBatchConfig,Oo=!0;function Dv(n,i,l,u){var d=ye,h=Gr.transition;Gr.transition=null;try{ye=1,qa(n,i,l,u)}finally{ye=d,Gr.transition=h}}function Mv(n,i,l,u){var d=ye,h=Gr.transition;Gr.transition=null;try{ye=4,qa(n,i,l,u)}finally{ye=d,Gr.transition=h}}function qa(n,i,l,u){if(Oo){var d=Qa(n,i,l,u);if(d===null)hu(n,i,u,Lo,l),Yh(n,u);else if(Ov(d,n,i,l,u))u.stopPropagation();else if(Yh(n,u),i&4&&-1<Av.indexOf(n)){for(;d!==null;){var h=cs(d);if(h!==null&&Gh(h),h=Qa(n,i,l,u),h===null&&hu(n,i,u,Lo,l),h===d)break;d=h}d!==null&&u.stopPropagation()}else hu(n,i,u,null,l)}}var Lo=null;function Qa(n,i,l,u){if(Lo=null,n=Fa(u),n=_r(n),n!==null)if(i=gr(n),i===null)n=null;else if(l=i.tag,l===13){if(n=bh(i),n!==null)return n;n=null}else if(l===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Lo=n,null}function Zh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cv()){case Wa:return 1;case Wh:return 4;case ko:case Sv:return 16;case Hh:return 536870912;default:return 16}default:return 16}}var Dn=null,Ya=null,Do=null;function ef(){if(Do)return Do;var n,i=Ya,l=i.length,u,d="value"in Dn?Dn.value:Dn.textContent,h=d.length;for(n=0;n<l&&i[n]===d[n];n++);var g=l-n;for(u=1;u<=g&&i[l-u]===d[h-u];u++);return Do=d.slice(n,1<u?1-u:void 0)}function Mo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function bo(){return!0}function tf(){return!1}function St(n){function i(l,u,d,h,g){this._reactName=l,this._targetInst=d,this.type=u,this.nativeEvent=h,this.target=g,this.currentTarget=null;for(var v in n)n.hasOwnProperty(v)&&(l=n[v],this[v]=l?l(h):h[v]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?bo:tf,this.isPropagationStopped=tf,this}return W(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=bo)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=bo)},persist:function(){},isPersistent:bo}),i}var Kr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ja=St(Kr),Zi=W({},Kr,{view:0,detail:0}),bv=St(Zi),Xa,Za,es,Fo=W({},Zi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==es&&(es&&n.type==="mousemove"?(Xa=n.screenX-es.screenX,Za=n.screenY-es.screenY):Za=Xa=0,es=n),Xa)},movementY:function(n){return"movementY"in n?n.movementY:Za}}),nf=St(Fo),Fv=W({},Fo,{dataTransfer:0}),Uv=St(Fv),jv=W({},Zi,{relatedTarget:0}),eu=St(jv),zv=W({},Kr,{animationName:0,elapsedTime:0,pseudoElement:0}),Bv=St(zv),Wv=W({},Kr,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Hv=St(Wv),$v=W({},Kr,{data:0}),rf=St($v),Vv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Kv[n])?!!i[n]:!1}function tu(){return qv}var Qv=W({},Zi,{key:function(n){if(n.key){var i=Vv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Mo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Gv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tu,charCode:function(n){return n.type==="keypress"?Mo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Mo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Yv=St(Qv),Jv=W({},Fo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sf=St(Jv),Xv=W({},Zi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tu}),Zv=St(Xv),ew=W({},Kr,{propertyName:0,elapsedTime:0,pseudoElement:0}),tw=St(ew),nw=W({},Fo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),rw=St(nw),iw=[9,13,27,32],nu=f&&"CompositionEvent"in window,ts=null;f&&"documentMode"in document&&(ts=document.documentMode);var sw=f&&"TextEvent"in window&&!ts,of=f&&(!nu||ts&&8<ts&&11>=ts),lf=" ",af=!1;function uf(n,i){switch(n){case"keyup":return iw.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var qr=!1;function ow(n,i){switch(n){case"compositionend":return cf(i);case"keypress":return i.which!==32?null:(af=!0,lf);case"textInput":return n=i.data,n===lf&&af?null:n;default:return null}}function lw(n,i){if(qr)return n==="compositionend"||!nu&&uf(n,i)?(n=ef(),Do=Ya=Dn=null,qr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return of&&i.locale!=="ko"?null:i.data;default:return null}}var aw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function df(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!aw[n.type]:i==="textarea"}function hf(n,i,l,u){Ah(u),i=Wo(i,"onChange"),0<i.length&&(l=new Ja("onChange","change",null,l,u),n.push({event:l,listeners:i}))}var ns=null,rs=null;function uw(n){xf(n,0)}function Uo(n){var i=Zr(n);if(vh(i))return n}function cw(n,i){if(n==="change")return i}var ff=!1;if(f){var ru;if(f){var iu="oninput"in document;if(!iu){var pf=document.createElement("div");pf.setAttribute("oninput","return;"),iu=typeof pf.oninput=="function"}ru=iu}else ru=!1;ff=ru&&(!document.documentMode||9<document.documentMode)}function mf(){ns&&(ns.detachEvent("onpropertychange",gf),rs=ns=null)}function gf(n){if(n.propertyName==="value"&&Uo(rs)){var i=[];hf(i,rs,n,Fa(n)),Mh(uw,i)}}function dw(n,i,l){n==="focusin"?(mf(),ns=i,rs=l,ns.attachEvent("onpropertychange",gf)):n==="focusout"&&mf()}function hw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Uo(rs)}function fw(n,i){if(n==="click")return Uo(i)}function pw(n,i){if(n==="input"||n==="change")return Uo(i)}function mw(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Wt=typeof Object.is=="function"?Object.is:mw;function is(n,i){if(Wt(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var l=Object.keys(n),u=Object.keys(i);if(l.length!==u.length)return!1;for(u=0;u<l.length;u++){var d=l[u];if(!p.call(i,d)||!Wt(n[d],i[d]))return!1}return!0}function _f(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function yf(n,i){var l=_f(n);n=0;for(var u;l;){if(l.nodeType===3){if(u=n+l.textContent.length,n<=i&&u>=i)return{node:l,offset:i-n};n=u}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=_f(l)}}function vf(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?vf(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function wf(){for(var n=window,i=Eo();i instanceof n.HTMLIFrameElement;){try{var l=typeof i.contentWindow.location.href=="string"}catch{l=!1}if(l)n=i.contentWindow;else break;i=Eo(n.document)}return i}function su(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function gw(n){var i=wf(),l=n.focusedElem,u=n.selectionRange;if(i!==l&&l&&l.ownerDocument&&vf(l.ownerDocument.documentElement,l)){if(u!==null&&su(l)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in l)l.selectionStart=i,l.selectionEnd=Math.min(n,l.value.length);else if(n=(i=l.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=l.textContent.length,h=Math.min(u.start,d);u=u.end===void 0?h:Math.min(u.end,d),!n.extend&&h>u&&(d=u,u=h,h=d),d=yf(l,h);var g=yf(l,u);d&&g&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==g.node||n.focusOffset!==g.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),h>u?(n.addRange(i),n.extend(g.node,g.offset)):(i.setEnd(g.node,g.offset),n.addRange(i)))}}for(i=[],n=l;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<i.length;l++)n=i[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var _w=f&&"documentMode"in document&&11>=document.documentMode,Qr=null,ou=null,ss=null,lu=!1;function Ef(n,i,l){var u=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;lu||Qr==null||Qr!==Eo(u)||(u=Qr,"selectionStart"in u&&su(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),ss&&is(ss,u)||(ss=u,u=Wo(ou,"onSelect"),0<u.length&&(i=new Ja("onSelect","select",null,i,l),n.push({event:i,listeners:u}),i.target=Qr)))}function jo(n,i){var l={};return l[n.toLowerCase()]=i.toLowerCase(),l["Webkit"+n]="webkit"+i,l["Moz"+n]="moz"+i,l}var Yr={animationend:jo("Animation","AnimationEnd"),animationiteration:jo("Animation","AnimationIteration"),animationstart:jo("Animation","AnimationStart"),transitionend:jo("Transition","TransitionEnd")},au={},Cf={};f&&(Cf=document.createElement("div").style,"AnimationEvent"in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),"TransitionEvent"in window||delete Yr.transitionend.transition);function zo(n){if(au[n])return au[n];if(!Yr[n])return n;var i=Yr[n],l;for(l in i)if(i.hasOwnProperty(l)&&l in Cf)return au[n]=i[l];return n}var Sf=zo("animationend"),If=zo("animationiteration"),kf=zo("animationstart"),Tf=zo("transitionend"),Rf=new Map,Nf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mn(n,i){Rf.set(n,i),a(i,[n])}for(var uu=0;uu<Nf.length;uu++){var cu=Nf[uu],yw=cu.toLowerCase(),vw=cu[0].toUpperCase()+cu.slice(1);Mn(yw,"on"+vw)}Mn(Sf,"onAnimationEnd"),Mn(If,"onAnimationIteration"),Mn(kf,"onAnimationStart"),Mn("dblclick","onDoubleClick"),Mn("focusin","onFocus"),Mn("focusout","onBlur"),Mn(Tf,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var os="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ww=new Set("cancel close invalid load scroll toggle".split(" ").concat(os));function Pf(n,i,l){var u=n.type||"unknown-event";n.currentTarget=l,yv(u,i,void 0,n),n.currentTarget=null}function xf(n,i){i=(i&4)!==0;for(var l=0;l<n.length;l++){var u=n[l],d=u.event;u=u.listeners;e:{var h=void 0;if(i)for(var g=u.length-1;0<=g;g--){var v=u[g],E=v.instance,x=v.currentTarget;if(v=v.listener,E!==h&&d.isPropagationStopped())break e;Pf(d,v,x),h=E}else for(g=0;g<u.length;g++){if(v=u[g],E=v.instance,x=v.currentTarget,v=v.listener,E!==h&&d.isPropagationStopped())break e;Pf(d,v,x),h=E}}}if(Io)throw n=Ba,Io=!1,Ba=null,n}function Re(n,i){var l=i[yu];l===void 0&&(l=i[yu]=new Set);var u=n+"__bubble";l.has(u)||(Af(i,n,2,!1),l.add(u))}function du(n,i,l){var u=0;i&&(u|=4),Af(l,n,u,i)}var Bo="_reactListening"+Math.random().toString(36).slice(2);function ls(n){if(!n[Bo]){n[Bo]=!0,s.forEach(function(l){l!=="selectionchange"&&(ww.has(l)||du(l,!1,n),du(l,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Bo]||(i[Bo]=!0,du("selectionchange",!1,i))}}function Af(n,i,l,u){switch(Zh(i)){case 1:var d=Dv;break;case 4:d=Mv;break;default:d=qa}l=d.bind(null,i,l,n),d=void 0,!za||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,l,{capture:!0,passive:d}):n.addEventListener(i,l,!0):d!==void 0?n.addEventListener(i,l,{passive:d}):n.addEventListener(i,l,!1)}function hu(n,i,l,u,d){var h=u;if(!(i&1)&&!(i&2)&&u!==null)e:for(;;){if(u===null)return;var g=u.tag;if(g===3||g===4){var v=u.stateNode.containerInfo;if(v===d||v.nodeType===8&&v.parentNode===d)break;if(g===4)for(g=u.return;g!==null;){var E=g.tag;if((E===3||E===4)&&(E=g.stateNode.containerInfo,E===d||E.nodeType===8&&E.parentNode===d))return;g=g.return}for(;v!==null;){if(g=_r(v),g===null)return;if(E=g.tag,E===5||E===6){u=h=g;continue e}v=v.parentNode}}u=u.return}Mh(function(){var x=h,F=Fa(l),U=[];e:{var M=Rf.get(n);if(M!==void 0){var $=Ja,G=n;switch(n){case"keypress":if(Mo(l)===0)break e;case"keydown":case"keyup":$=Yv;break;case"focusin":G="focus",$=eu;break;case"focusout":G="blur",$=eu;break;case"beforeblur":case"afterblur":$=eu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=nf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=Uv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=Zv;break;case Sf:case If:case kf:$=Bv;break;case Tf:$=tw;break;case"scroll":$=bv;break;case"wheel":$=rw;break;case"copy":case"cut":case"paste":$=Hv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=sf}var K=(i&4)!==0,je=!K&&n==="scroll",k=K?M!==null?M+"Capture":null:M;K=[];for(var C=x,P;C!==null;){P=C;var j=P.stateNode;if(P.tag===5&&j!==null&&(P=j,k!==null&&(j=Hi(C,k),j!=null&&K.push(as(C,j,P)))),je)break;C=C.return}0<K.length&&(M=new $(M,G,null,l,F),U.push({event:M,listeners:K}))}}if(!(i&7)){e:{if(M=n==="mouseover"||n==="pointerover",$=n==="mouseout"||n==="pointerout",M&&l!==ba&&(G=l.relatedTarget||l.fromElement)&&(_r(G)||G[cn]))break e;if(($||M)&&(M=F.window===F?F:(M=F.ownerDocument)?M.defaultView||M.parentWindow:window,$?(G=l.relatedTarget||l.toElement,$=x,G=G?_r(G):null,G!==null&&(je=gr(G),G!==je||G.tag!==5&&G.tag!==6)&&(G=null)):($=null,G=x),$!==G)){if(K=nf,j="onMouseLeave",k="onMouseEnter",C="mouse",(n==="pointerout"||n==="pointerover")&&(K=sf,j="onPointerLeave",k="onPointerEnter",C="pointer"),je=$==null?M:Zr($),P=G==null?M:Zr(G),M=new K(j,C+"leave",$,l,F),M.target=je,M.relatedTarget=P,j=null,_r(F)===x&&(K=new K(k,C+"enter",G,l,F),K.target=P,K.relatedTarget=je,j=K),je=j,$&&G)t:{for(K=$,k=G,C=0,P=K;P;P=Jr(P))C++;for(P=0,j=k;j;j=Jr(j))P++;for(;0<C-P;)K=Jr(K),C--;for(;0<P-C;)k=Jr(k),P--;for(;C--;){if(K===k||k!==null&&K===k.alternate)break t;K=Jr(K),k=Jr(k)}K=null}else K=null;$!==null&&Of(U,M,$,K,!1),G!==null&&je!==null&&Of(U,je,G,K,!0)}}e:{if(M=x?Zr(x):window,$=M.nodeName&&M.nodeName.toLowerCase(),$==="select"||$==="input"&&M.type==="file")var Q=cw;else if(df(M))if(ff)Q=pw;else{Q=hw;var J=dw}else($=M.nodeName)&&$.toLowerCase()==="input"&&(M.type==="checkbox"||M.type==="radio")&&(Q=fw);if(Q&&(Q=Q(n,x))){hf(U,Q,l,F);break e}J&&J(n,M,x),n==="focusout"&&(J=M._wrapperState)&&J.controlled&&M.type==="number"&&Aa(M,"number",M.value)}switch(J=x?Zr(x):window,n){case"focusin":(df(J)||J.contentEditable==="true")&&(Qr=J,ou=x,ss=null);break;case"focusout":ss=ou=Qr=null;break;case"mousedown":lu=!0;break;case"contextmenu":case"mouseup":case"dragend":lu=!1,Ef(U,l,F);break;case"selectionchange":if(_w)break;case"keydown":case"keyup":Ef(U,l,F)}var X;if(nu)e:{switch(n){case"compositionstart":var ne="onCompositionStart";break e;case"compositionend":ne="onCompositionEnd";break e;case"compositionupdate":ne="onCompositionUpdate";break e}ne=void 0}else qr?uf(n,l)&&(ne="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(ne="onCompositionStart");ne&&(of&&l.locale!=="ko"&&(qr||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&qr&&(X=ef()):(Dn=F,Ya="value"in Dn?Dn.value:Dn.textContent,qr=!0)),J=Wo(x,ne),0<J.length&&(ne=new rf(ne,n,null,l,F),U.push({event:ne,listeners:J}),X?ne.data=X:(X=cf(l),X!==null&&(ne.data=X)))),(X=sw?ow(n,l):lw(n,l))&&(x=Wo(x,"onBeforeInput"),0<x.length&&(F=new rf("onBeforeInput","beforeinput",null,l,F),U.push({event:F,listeners:x}),F.data=X))}xf(U,i)})}function as(n,i,l){return{instance:n,listener:i,currentTarget:l}}function Wo(n,i){for(var l=i+"Capture",u=[];n!==null;){var d=n,h=d.stateNode;d.tag===5&&h!==null&&(d=h,h=Hi(n,l),h!=null&&u.unshift(as(n,h,d)),h=Hi(n,i),h!=null&&u.push(as(n,h,d))),n=n.return}return u}function Jr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Of(n,i,l,u,d){for(var h=i._reactName,g=[];l!==null&&l!==u;){var v=l,E=v.alternate,x=v.stateNode;if(E!==null&&E===u)break;v.tag===5&&x!==null&&(v=x,d?(E=Hi(l,h),E!=null&&g.unshift(as(l,E,v))):d||(E=Hi(l,h),E!=null&&g.push(as(l,E,v)))),l=l.return}g.length!==0&&n.push({event:i,listeners:g})}var Ew=/\r\n?/g,Cw=/\u0000|\uFFFD/g;function Lf(n){return(typeof n=="string"?n:""+n).replace(Ew,`
`).replace(Cw,"")}function Ho(n,i,l){if(i=Lf(i),Lf(n)!==i&&l)throw Error(t(425))}function $o(){}var fu=null,pu=null;function mu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var gu=typeof setTimeout=="function"?setTimeout:void 0,Sw=typeof clearTimeout=="function"?clearTimeout:void 0,Df=typeof Promise=="function"?Promise:void 0,Iw=typeof queueMicrotask=="function"?queueMicrotask:typeof Df<"u"?function(n){return Df.resolve(null).then(n).catch(kw)}:gu;function kw(n){setTimeout(function(){throw n})}function _u(n,i){var l=i,u=0;do{var d=l.nextSibling;if(n.removeChild(l),d&&d.nodeType===8)if(l=d.data,l==="/$"){if(u===0){n.removeChild(d),Xi(i);return}u--}else l!=="$"&&l!=="$?"&&l!=="$!"||u++;l=d}while(l);Xi(i)}function bn(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Mf(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(i===0)return n;i--}else l==="/$"&&i++}n=n.previousSibling}return null}var Xr=Math.random().toString(36).slice(2),en="__reactFiber$"+Xr,us="__reactProps$"+Xr,cn="__reactContainer$"+Xr,yu="__reactEvents$"+Xr,Tw="__reactListeners$"+Xr,Rw="__reactHandles$"+Xr;function _r(n){var i=n[en];if(i)return i;for(var l=n.parentNode;l;){if(i=l[cn]||l[en]){if(l=i.alternate,i.child!==null||l!==null&&l.child!==null)for(n=Mf(n);n!==null;){if(l=n[en])return l;n=Mf(n)}return i}n=l,l=n.parentNode}return null}function cs(n){return n=n[en]||n[cn],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Zr(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Vo(n){return n[us]||null}var vu=[],ei=-1;function Fn(n){return{current:n}}function Ne(n){0>ei||(n.current=vu[ei],vu[ei]=null,ei--)}function Se(n,i){ei++,vu[ei]=n.current,n.current=i}var Un={},it=Fn(Un),pt=Fn(!1),yr=Un;function ti(n,i){var l=n.type.contextTypes;if(!l)return Un;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},h;for(h in l)d[h]=i[h];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function mt(n){return n=n.childContextTypes,n!=null}function Go(){Ne(pt),Ne(it)}function bf(n,i,l){if(it.current!==Un)throw Error(t(168));Se(it,i),Se(pt,l)}function Ff(n,i,l){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return l;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,Ee(n)||"Unknown",d));return W({},l,u)}function Ko(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Un,yr=it.current,Se(it,n),Se(pt,pt.current),!0}function Uf(n,i,l){var u=n.stateNode;if(!u)throw Error(t(169));l?(n=Ff(n,i,yr),u.__reactInternalMemoizedMergedChildContext=n,Ne(pt),Ne(it),Se(it,n)):Ne(pt),Se(pt,l)}var dn=null,qo=!1,wu=!1;function jf(n){dn===null?dn=[n]:dn.push(n)}function Nw(n){qo=!0,jf(n)}function jn(){if(!wu&&dn!==null){wu=!0;var n=0,i=ye;try{var l=dn;for(ye=1;n<l.length;n++){var u=l[n];do u=u(!0);while(u!==null)}dn=null,qo=!1}catch(d){throw dn!==null&&(dn=dn.slice(n+1)),zh(Wa,jn),d}finally{ye=i,wu=!1}}return null}var ni=[],ri=0,Qo=null,Yo=0,xt=[],At=0,vr=null,hn=1,fn="";function wr(n,i){ni[ri++]=Yo,ni[ri++]=Qo,Qo=n,Yo=i}function zf(n,i,l){xt[At++]=hn,xt[At++]=fn,xt[At++]=vr,vr=n;var u=hn;n=fn;var d=32-Bt(u)-1;u&=~(1<<d),l+=1;var h=32-Bt(i)+d;if(30<h){var g=d-d%5;h=(u&(1<<g)-1).toString(32),u>>=g,d-=g,hn=1<<32-Bt(i)+d|l<<d|u,fn=h+n}else hn=1<<h|l<<d|u,fn=n}function Eu(n){n.return!==null&&(wr(n,1),zf(n,1,0))}function Cu(n){for(;n===Qo;)Qo=ni[--ri],ni[ri]=null,Yo=ni[--ri],ni[ri]=null;for(;n===vr;)vr=xt[--At],xt[At]=null,fn=xt[--At],xt[At]=null,hn=xt[--At],xt[At]=null}var It=null,kt=null,xe=!1,Ht=null;function Bf(n,i){var l=Mt(5,null,null,0);l.elementType="DELETED",l.stateNode=i,l.return=n,i=n.deletions,i===null?(n.deletions=[l],n.flags|=16):i.push(l)}function Wf(n,i){switch(n.tag){case 5:var l=n.type;return i=i.nodeType!==1||l.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,It=n,kt=bn(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,It=n,kt=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(l=vr!==null?{id:hn,overflow:fn}:null,n.memoizedState={dehydrated:i,treeContext:l,retryLane:1073741824},l=Mt(18,null,null,0),l.stateNode=i,l.return=n,n.child=l,It=n,kt=null,!0):!1;default:return!1}}function Su(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Iu(n){if(xe){var i=kt;if(i){var l=i;if(!Wf(n,i)){if(Su(n))throw Error(t(418));i=bn(l.nextSibling);var u=It;i&&Wf(n,i)?Bf(u,l):(n.flags=n.flags&-4097|2,xe=!1,It=n)}}else{if(Su(n))throw Error(t(418));n.flags=n.flags&-4097|2,xe=!1,It=n}}}function Hf(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;It=n}function Jo(n){if(n!==It)return!1;if(!xe)return Hf(n),xe=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!mu(n.type,n.memoizedProps)),i&&(i=kt)){if(Su(n))throw $f(),Error(t(418));for(;i;)Bf(n,i),i=bn(i.nextSibling)}if(Hf(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(i===0){kt=bn(n.nextSibling);break e}i--}else l!=="$"&&l!=="$!"&&l!=="$?"||i++}n=n.nextSibling}kt=null}}else kt=It?bn(n.stateNode.nextSibling):null;return!0}function $f(){for(var n=kt;n;)n=bn(n.nextSibling)}function ii(){kt=It=null,xe=!1}function ku(n){Ht===null?Ht=[n]:Ht.push(n)}var Pw=ee.ReactCurrentBatchConfig;function ds(n,i,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var u=l.stateNode}if(!u)throw Error(t(147,n));var d=u,h=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(g){var v=d.refs;g===null?delete v[h]:v[h]=g},i._stringRef=h,i)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function Xo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Vf(n){var i=n._init;return i(n._payload)}function Gf(n){function i(k,C){if(n){var P=k.deletions;P===null?(k.deletions=[C],k.flags|=16):P.push(C)}}function l(k,C){if(!n)return null;for(;C!==null;)i(k,C),C=C.sibling;return null}function u(k,C){for(k=new Map;C!==null;)C.key!==null?k.set(C.key,C):k.set(C.index,C),C=C.sibling;return k}function d(k,C){return k=Kn(k,C),k.index=0,k.sibling=null,k}function h(k,C,P){return k.index=P,n?(P=k.alternate,P!==null?(P=P.index,P<C?(k.flags|=2,C):P):(k.flags|=2,C)):(k.flags|=1048576,C)}function g(k){return n&&k.alternate===null&&(k.flags|=2),k}function v(k,C,P,j){return C===null||C.tag!==6?(C=gc(P,k.mode,j),C.return=k,C):(C=d(C,P),C.return=k,C)}function E(k,C,P,j){var Q=P.type;return Q===he?F(k,C,P.props.children,j,P.key):C!==null&&(C.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===rt&&Vf(Q)===C.type)?(j=d(C,P.props),j.ref=ds(k,C,P),j.return=k,j):(j=Cl(P.type,P.key,P.props,null,k.mode,j),j.ref=ds(k,C,P),j.return=k,j)}function x(k,C,P,j){return C===null||C.tag!==4||C.stateNode.containerInfo!==P.containerInfo||C.stateNode.implementation!==P.implementation?(C=_c(P,k.mode,j),C.return=k,C):(C=d(C,P.children||[]),C.return=k,C)}function F(k,C,P,j,Q){return C===null||C.tag!==7?(C=Nr(P,k.mode,j,Q),C.return=k,C):(C=d(C,P),C.return=k,C)}function U(k,C,P){if(typeof C=="string"&&C!==""||typeof C=="number")return C=gc(""+C,k.mode,P),C.return=k,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case se:return P=Cl(C.type,C.key,C.props,null,k.mode,P),P.ref=ds(k,null,C),P.return=k,P;case re:return C=_c(C,k.mode,P),C.return=k,C;case rt:var j=C._init;return U(k,j(C._payload),P)}if(zi(C)||q(C))return C=Nr(C,k.mode,P,null),C.return=k,C;Xo(k,C)}return null}function M(k,C,P,j){var Q=C!==null?C.key:null;if(typeof P=="string"&&P!==""||typeof P=="number")return Q!==null?null:v(k,C,""+P,j);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case se:return P.key===Q?E(k,C,P,j):null;case re:return P.key===Q?x(k,C,P,j):null;case rt:return Q=P._init,M(k,C,Q(P._payload),j)}if(zi(P)||q(P))return Q!==null?null:F(k,C,P,j,null);Xo(k,P)}return null}function $(k,C,P,j,Q){if(typeof j=="string"&&j!==""||typeof j=="number")return k=k.get(P)||null,v(C,k,""+j,Q);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case se:return k=k.get(j.key===null?P:j.key)||null,E(C,k,j,Q);case re:return k=k.get(j.key===null?P:j.key)||null,x(C,k,j,Q);case rt:var J=j._init;return $(k,C,P,J(j._payload),Q)}if(zi(j)||q(j))return k=k.get(P)||null,F(C,k,j,Q,null);Xo(C,j)}return null}function G(k,C,P,j){for(var Q=null,J=null,X=C,ne=C=0,Ke=null;X!==null&&ne<P.length;ne++){X.index>ne?(Ke=X,X=null):Ke=X.sibling;var pe=M(k,X,P[ne],j);if(pe===null){X===null&&(X=Ke);break}n&&X&&pe.alternate===null&&i(k,X),C=h(pe,C,ne),J===null?Q=pe:J.sibling=pe,J=pe,X=Ke}if(ne===P.length)return l(k,X),xe&&wr(k,ne),Q;if(X===null){for(;ne<P.length;ne++)X=U(k,P[ne],j),X!==null&&(C=h(X,C,ne),J===null?Q=X:J.sibling=X,J=X);return xe&&wr(k,ne),Q}for(X=u(k,X);ne<P.length;ne++)Ke=$(X,k,ne,P[ne],j),Ke!==null&&(n&&Ke.alternate!==null&&X.delete(Ke.key===null?ne:Ke.key),C=h(Ke,C,ne),J===null?Q=Ke:J.sibling=Ke,J=Ke);return n&&X.forEach(function(qn){return i(k,qn)}),xe&&wr(k,ne),Q}function K(k,C,P,j){var Q=q(P);if(typeof Q!="function")throw Error(t(150));if(P=Q.call(P),P==null)throw Error(t(151));for(var J=Q=null,X=C,ne=C=0,Ke=null,pe=P.next();X!==null&&!pe.done;ne++,pe=P.next()){X.index>ne?(Ke=X,X=null):Ke=X.sibling;var qn=M(k,X,pe.value,j);if(qn===null){X===null&&(X=Ke);break}n&&X&&qn.alternate===null&&i(k,X),C=h(qn,C,ne),J===null?Q=qn:J.sibling=qn,J=qn,X=Ke}if(pe.done)return l(k,X),xe&&wr(k,ne),Q;if(X===null){for(;!pe.done;ne++,pe=P.next())pe=U(k,pe.value,j),pe!==null&&(C=h(pe,C,ne),J===null?Q=pe:J.sibling=pe,J=pe);return xe&&wr(k,ne),Q}for(X=u(k,X);!pe.done;ne++,pe=P.next())pe=$(X,k,ne,pe.value,j),pe!==null&&(n&&pe.alternate!==null&&X.delete(pe.key===null?ne:pe.key),C=h(pe,C,ne),J===null?Q=pe:J.sibling=pe,J=pe);return n&&X.forEach(function(lE){return i(k,lE)}),xe&&wr(k,ne),Q}function je(k,C,P,j){if(typeof P=="object"&&P!==null&&P.type===he&&P.key===null&&(P=P.props.children),typeof P=="object"&&P!==null){switch(P.$$typeof){case se:e:{for(var Q=P.key,J=C;J!==null;){if(J.key===Q){if(Q=P.type,Q===he){if(J.tag===7){l(k,J.sibling),C=d(J,P.props.children),C.return=k,k=C;break e}}else if(J.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===rt&&Vf(Q)===J.type){l(k,J.sibling),C=d(J,P.props),C.ref=ds(k,J,P),C.return=k,k=C;break e}l(k,J);break}else i(k,J);J=J.sibling}P.type===he?(C=Nr(P.props.children,k.mode,j,P.key),C.return=k,k=C):(j=Cl(P.type,P.key,P.props,null,k.mode,j),j.ref=ds(k,C,P),j.return=k,k=j)}return g(k);case re:e:{for(J=P.key;C!==null;){if(C.key===J)if(C.tag===4&&C.stateNode.containerInfo===P.containerInfo&&C.stateNode.implementation===P.implementation){l(k,C.sibling),C=d(C,P.children||[]),C.return=k,k=C;break e}else{l(k,C);break}else i(k,C);C=C.sibling}C=_c(P,k.mode,j),C.return=k,k=C}return g(k);case rt:return J=P._init,je(k,C,J(P._payload),j)}if(zi(P))return G(k,C,P,j);if(q(P))return K(k,C,P,j);Xo(k,P)}return typeof P=="string"&&P!==""||typeof P=="number"?(P=""+P,C!==null&&C.tag===6?(l(k,C.sibling),C=d(C,P),C.return=k,k=C):(l(k,C),C=gc(P,k.mode,j),C.return=k,k=C),g(k)):l(k,C)}return je}var si=Gf(!0),Kf=Gf(!1),Zo=Fn(null),el=null,oi=null,Tu=null;function Ru(){Tu=oi=el=null}function Nu(n){var i=Zo.current;Ne(Zo),n._currentValue=i}function Pu(n,i,l){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===l)break;n=n.return}}function li(n,i){el=n,Tu=oi=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&i&&(gt=!0),n.firstContext=null)}function Ot(n){var i=n._currentValue;if(Tu!==n)if(n={context:n,memoizedValue:i,next:null},oi===null){if(el===null)throw Error(t(308));oi=n,el.dependencies={lanes:0,firstContext:n}}else oi=oi.next=n;return i}var Er=null;function xu(n){Er===null?Er=[n]:Er.push(n)}function qf(n,i,l,u){var d=i.interleaved;return d===null?(l.next=l,xu(i)):(l.next=d.next,d.next=l),i.interleaved=l,pn(n,u)}function pn(n,i){n.lanes|=i;var l=n.alternate;for(l!==null&&(l.lanes|=i),l=n,n=n.return;n!==null;)n.childLanes|=i,l=n.alternate,l!==null&&(l.childLanes|=i),l=n,n=n.return;return l.tag===3?l.stateNode:null}var zn=!1;function Au(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qf(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function mn(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Bn(n,i,l){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,fe&2){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,pn(n,l)}return d=u.interleaved,d===null?(i.next=i,xu(u)):(i.next=d.next,d.next=i),u.interleaved=i,pn(n,l)}function tl(n,i,l){if(i=i.updateQueue,i!==null&&(i=i.shared,(l&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,l|=u,i.lanes=l,Va(n,l)}}function Yf(n,i){var l=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,l===u)){var d=null,h=null;if(l=l.firstBaseUpdate,l!==null){do{var g={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};h===null?d=h=g:h=h.next=g,l=l.next}while(l!==null);h===null?d=h=i:h=h.next=i}else d=h=i;l={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:u.shared,effects:u.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=i:n.next=i,l.lastBaseUpdate=i}function nl(n,i,l,u){var d=n.updateQueue;zn=!1;var h=d.firstBaseUpdate,g=d.lastBaseUpdate,v=d.shared.pending;if(v!==null){d.shared.pending=null;var E=v,x=E.next;E.next=null,g===null?h=x:g.next=x,g=E;var F=n.alternate;F!==null&&(F=F.updateQueue,v=F.lastBaseUpdate,v!==g&&(v===null?F.firstBaseUpdate=x:v.next=x,F.lastBaseUpdate=E))}if(h!==null){var U=d.baseState;g=0,F=x=E=null,v=h;do{var M=v.lane,$=v.eventTime;if((u&M)===M){F!==null&&(F=F.next={eventTime:$,lane:0,tag:v.tag,payload:v.payload,callback:v.callback,next:null});e:{var G=n,K=v;switch(M=i,$=l,K.tag){case 1:if(G=K.payload,typeof G=="function"){U=G.call($,U,M);break e}U=G;break e;case 3:G.flags=G.flags&-65537|128;case 0:if(G=K.payload,M=typeof G=="function"?G.call($,U,M):G,M==null)break e;U=W({},U,M);break e;case 2:zn=!0}}v.callback!==null&&v.lane!==0&&(n.flags|=64,M=d.effects,M===null?d.effects=[v]:M.push(v))}else $={eventTime:$,lane:M,tag:v.tag,payload:v.payload,callback:v.callback,next:null},F===null?(x=F=$,E=U):F=F.next=$,g|=M;if(v=v.next,v===null){if(v=d.shared.pending,v===null)break;M=v,v=M.next,M.next=null,d.lastBaseUpdate=M,d.shared.pending=null}}while(!0);if(F===null&&(E=U),d.baseState=E,d.firstBaseUpdate=x,d.lastBaseUpdate=F,i=d.shared.interleaved,i!==null){d=i;do g|=d.lane,d=d.next;while(d!==i)}else h===null&&(d.shared.lanes=0);Ir|=g,n.lanes=g,n.memoizedState=U}}function Jf(n,i,l){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=l,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var hs={},tn=Fn(hs),fs=Fn(hs),ps=Fn(hs);function Cr(n){if(n===hs)throw Error(t(174));return n}function Ou(n,i){switch(Se(ps,i),Se(fs,n),Se(tn,hs),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:La(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=La(i,n)}Ne(tn),Se(tn,i)}function ai(){Ne(tn),Ne(fs),Ne(ps)}function Xf(n){Cr(ps.current);var i=Cr(tn.current),l=La(i,n.type);i!==l&&(Se(fs,n),Se(tn,l))}function Lu(n){fs.current===n&&(Ne(tn),Ne(fs))}var Oe=Fn(0);function rl(n){for(var i=n;i!==null;){if(i.tag===13){var l=i.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Du=[];function Mu(){for(var n=0;n<Du.length;n++)Du[n]._workInProgressVersionPrimary=null;Du.length=0}var il=ee.ReactCurrentDispatcher,bu=ee.ReactCurrentBatchConfig,Sr=0,Le=null,Be=null,Ve=null,sl=!1,ms=!1,gs=0,xw=0;function st(){throw Error(t(321))}function Fu(n,i){if(i===null)return!1;for(var l=0;l<i.length&&l<n.length;l++)if(!Wt(n[l],i[l]))return!1;return!0}function Uu(n,i,l,u,d,h){if(Sr=h,Le=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,il.current=n===null||n.memoizedState===null?Dw:Mw,n=l(u,d),ms){h=0;do{if(ms=!1,gs=0,25<=h)throw Error(t(301));h+=1,Ve=Be=null,i.updateQueue=null,il.current=bw,n=l(u,d)}while(ms)}if(il.current=al,i=Be!==null&&Be.next!==null,Sr=0,Ve=Be=Le=null,sl=!1,i)throw Error(t(300));return n}function ju(){var n=gs!==0;return gs=0,n}function nn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?Le.memoizedState=Ve=n:Ve=Ve.next=n,Ve}function Lt(){if(Be===null){var n=Le.alternate;n=n!==null?n.memoizedState:null}else n=Be.next;var i=Ve===null?Le.memoizedState:Ve.next;if(i!==null)Ve=i,Be=n;else{if(n===null)throw Error(t(310));Be=n,n={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},Ve===null?Le.memoizedState=Ve=n:Ve=Ve.next=n}return Ve}function _s(n,i){return typeof i=="function"?i(n):i}function zu(n){var i=Lt(),l=i.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var u=Be,d=u.baseQueue,h=l.pending;if(h!==null){if(d!==null){var g=d.next;d.next=h.next,h.next=g}u.baseQueue=d=h,l.pending=null}if(d!==null){h=d.next,u=u.baseState;var v=g=null,E=null,x=h;do{var F=x.lane;if((Sr&F)===F)E!==null&&(E=E.next={lane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),u=x.hasEagerState?x.eagerState:n(u,x.action);else{var U={lane:F,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null};E===null?(v=E=U,g=u):E=E.next=U,Le.lanes|=F,Ir|=F}x=x.next}while(x!==null&&x!==h);E===null?g=u:E.next=v,Wt(u,i.memoizedState)||(gt=!0),i.memoizedState=u,i.baseState=g,i.baseQueue=E,l.lastRenderedState=u}if(n=l.interleaved,n!==null){d=n;do h=d.lane,Le.lanes|=h,Ir|=h,d=d.next;while(d!==n)}else d===null&&(l.lanes=0);return[i.memoizedState,l.dispatch]}function Bu(n){var i=Lt(),l=i.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var u=l.dispatch,d=l.pending,h=i.memoizedState;if(d!==null){l.pending=null;var g=d=d.next;do h=n(h,g.action),g=g.next;while(g!==d);Wt(h,i.memoizedState)||(gt=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),l.lastRenderedState=h}return[h,u]}function Zf(){}function ep(n,i){var l=Le,u=Lt(),d=i(),h=!Wt(u.memoizedState,d);if(h&&(u.memoizedState=d,gt=!0),u=u.queue,Wu(rp.bind(null,l,u,n),[n]),u.getSnapshot!==i||h||Ve!==null&&Ve.memoizedState.tag&1){if(l.flags|=2048,ys(9,np.bind(null,l,u,d,i),void 0,null),Ge===null)throw Error(t(349));Sr&30||tp(l,i,d)}return d}function tp(n,i,l){n.flags|=16384,n={getSnapshot:i,value:l},i=Le.updateQueue,i===null?(i={lastEffect:null,stores:null},Le.updateQueue=i,i.stores=[n]):(l=i.stores,l===null?i.stores=[n]:l.push(n))}function np(n,i,l,u){i.value=l,i.getSnapshot=u,ip(i)&&sp(n)}function rp(n,i,l){return l(function(){ip(i)&&sp(n)})}function ip(n){var i=n.getSnapshot;n=n.value;try{var l=i();return!Wt(n,l)}catch{return!0}}function sp(n){var i=pn(n,1);i!==null&&Kt(i,n,1,-1)}function op(n){var i=nn();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_s,lastRenderedState:n},i.queue=n,n=n.dispatch=Lw.bind(null,Le,n),[i.memoizedState,n]}function ys(n,i,l,u){return n={tag:n,create:i,destroy:l,deps:u,next:null},i=Le.updateQueue,i===null?(i={lastEffect:null,stores:null},Le.updateQueue=i,i.lastEffect=n.next=n):(l=i.lastEffect,l===null?i.lastEffect=n.next=n:(u=l.next,l.next=n,n.next=u,i.lastEffect=n)),n}function lp(){return Lt().memoizedState}function ol(n,i,l,u){var d=nn();Le.flags|=n,d.memoizedState=ys(1|i,l,void 0,u===void 0?null:u)}function ll(n,i,l,u){var d=Lt();u=u===void 0?null:u;var h=void 0;if(Be!==null){var g=Be.memoizedState;if(h=g.destroy,u!==null&&Fu(u,g.deps)){d.memoizedState=ys(i,l,h,u);return}}Le.flags|=n,d.memoizedState=ys(1|i,l,h,u)}function ap(n,i){return ol(8390656,8,n,i)}function Wu(n,i){return ll(2048,8,n,i)}function up(n,i){return ll(4,2,n,i)}function cp(n,i){return ll(4,4,n,i)}function dp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function hp(n,i,l){return l=l!=null?l.concat([n]):null,ll(4,4,dp.bind(null,i,n),l)}function Hu(){}function fp(n,i){var l=Lt();i=i===void 0?null:i;var u=l.memoizedState;return u!==null&&i!==null&&Fu(i,u[1])?u[0]:(l.memoizedState=[n,i],n)}function pp(n,i){var l=Lt();i=i===void 0?null:i;var u=l.memoizedState;return u!==null&&i!==null&&Fu(i,u[1])?u[0]:(n=n(),l.memoizedState=[n,i],n)}function mp(n,i,l){return Sr&21?(Wt(l,i)||(l=$h(),Le.lanes|=l,Ir|=l,n.baseState=!0),i):(n.baseState&&(n.baseState=!1,gt=!0),n.memoizedState=l)}function Aw(n,i){var l=ye;ye=l!==0&&4>l?l:4,n(!0);var u=bu.transition;bu.transition={};try{n(!1),i()}finally{ye=l,bu.transition=u}}function gp(){return Lt().memoizedState}function Ow(n,i,l){var u=Vn(n);if(l={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null},_p(n))yp(i,l);else if(l=qf(n,i,l,u),l!==null){var d=ct();Kt(l,n,u,d),vp(l,i,u)}}function Lw(n,i,l){var u=Vn(n),d={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null};if(_p(n))yp(i,d);else{var h=n.alternate;if(n.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var g=i.lastRenderedState,v=h(g,l);if(d.hasEagerState=!0,d.eagerState=v,Wt(v,g)){var E=i.interleaved;E===null?(d.next=d,xu(i)):(d.next=E.next,E.next=d),i.interleaved=d;return}}catch{}finally{}l=qf(n,i,d,u),l!==null&&(d=ct(),Kt(l,n,u,d),vp(l,i,u))}}function _p(n){var i=n.alternate;return n===Le||i!==null&&i===Le}function yp(n,i){ms=sl=!0;var l=n.pending;l===null?i.next=i:(i.next=l.next,l.next=i),n.pending=i}function vp(n,i,l){if(l&4194240){var u=i.lanes;u&=n.pendingLanes,l|=u,i.lanes=l,Va(n,l)}}var al={readContext:Ot,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useInsertionEffect:st,useLayoutEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useMutableSource:st,useSyncExternalStore:st,useId:st,unstable_isNewReconciler:!1},Dw={readContext:Ot,useCallback:function(n,i){return nn().memoizedState=[n,i===void 0?null:i],n},useContext:Ot,useEffect:ap,useImperativeHandle:function(n,i,l){return l=l!=null?l.concat([n]):null,ol(4194308,4,dp.bind(null,i,n),l)},useLayoutEffect:function(n,i){return ol(4194308,4,n,i)},useInsertionEffect:function(n,i){return ol(4,2,n,i)},useMemo:function(n,i){var l=nn();return i=i===void 0?null:i,n=n(),l.memoizedState=[n,i],n},useReducer:function(n,i,l){var u=nn();return i=l!==void 0?l(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=Ow.bind(null,Le,n),[u.memoizedState,n]},useRef:function(n){var i=nn();return n={current:n},i.memoizedState=n},useState:op,useDebugValue:Hu,useDeferredValue:function(n){return nn().memoizedState=n},useTransition:function(){var n=op(!1),i=n[0];return n=Aw.bind(null,n[1]),nn().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,l){var u=Le,d=nn();if(xe){if(l===void 0)throw Error(t(407));l=l()}else{if(l=i(),Ge===null)throw Error(t(349));Sr&30||tp(u,i,l)}d.memoizedState=l;var h={value:l,getSnapshot:i};return d.queue=h,ap(rp.bind(null,u,h,n),[n]),u.flags|=2048,ys(9,np.bind(null,u,h,l,i),void 0,null),l},useId:function(){var n=nn(),i=Ge.identifierPrefix;if(xe){var l=fn,u=hn;l=(u&~(1<<32-Bt(u)-1)).toString(32)+l,i=":"+i+"R"+l,l=gs++,0<l&&(i+="H"+l.toString(32)),i+=":"}else l=xw++,i=":"+i+"r"+l.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Mw={readContext:Ot,useCallback:fp,useContext:Ot,useEffect:Wu,useImperativeHandle:hp,useInsertionEffect:up,useLayoutEffect:cp,useMemo:pp,useReducer:zu,useRef:lp,useState:function(){return zu(_s)},useDebugValue:Hu,useDeferredValue:function(n){var i=Lt();return mp(i,Be.memoizedState,n)},useTransition:function(){var n=zu(_s)[0],i=Lt().memoizedState;return[n,i]},useMutableSource:Zf,useSyncExternalStore:ep,useId:gp,unstable_isNewReconciler:!1},bw={readContext:Ot,useCallback:fp,useContext:Ot,useEffect:Wu,useImperativeHandle:hp,useInsertionEffect:up,useLayoutEffect:cp,useMemo:pp,useReducer:Bu,useRef:lp,useState:function(){return Bu(_s)},useDebugValue:Hu,useDeferredValue:function(n){var i=Lt();return Be===null?i.memoizedState=n:mp(i,Be.memoizedState,n)},useTransition:function(){var n=Bu(_s)[0],i=Lt().memoizedState;return[n,i]},useMutableSource:Zf,useSyncExternalStore:ep,useId:gp,unstable_isNewReconciler:!1};function $t(n,i){if(n&&n.defaultProps){i=W({},i),n=n.defaultProps;for(var l in n)i[l]===void 0&&(i[l]=n[l]);return i}return i}function $u(n,i,l,u){i=n.memoizedState,l=l(u,i),l=l==null?i:W({},i,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var ul={isMounted:function(n){return(n=n._reactInternals)?gr(n)===n:!1},enqueueSetState:function(n,i,l){n=n._reactInternals;var u=ct(),d=Vn(n),h=mn(u,d);h.payload=i,l!=null&&(h.callback=l),i=Bn(n,h,d),i!==null&&(Kt(i,n,d,u),tl(i,n,d))},enqueueReplaceState:function(n,i,l){n=n._reactInternals;var u=ct(),d=Vn(n),h=mn(u,d);h.tag=1,h.payload=i,l!=null&&(h.callback=l),i=Bn(n,h,d),i!==null&&(Kt(i,n,d,u),tl(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var l=ct(),u=Vn(n),d=mn(l,u);d.tag=2,i!=null&&(d.callback=i),i=Bn(n,d,u),i!==null&&(Kt(i,n,u,l),tl(i,n,u))}};function wp(n,i,l,u,d,h,g){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,h,g):i.prototype&&i.prototype.isPureReactComponent?!is(l,u)||!is(d,h):!0}function Ep(n,i,l){var u=!1,d=Un,h=i.contextType;return typeof h=="object"&&h!==null?h=Ot(h):(d=mt(i)?yr:it.current,u=i.contextTypes,h=(u=u!=null)?ti(n,d):Un),i=new i(l,h),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ul,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=h),i}function Cp(n,i,l,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(l,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(l,u),i.state!==n&&ul.enqueueReplaceState(i,i.state,null)}function Vu(n,i,l,u){var d=n.stateNode;d.props=l,d.state=n.memoizedState,d.refs={},Au(n);var h=i.contextType;typeof h=="object"&&h!==null?d.context=Ot(h):(h=mt(i)?yr:it.current,d.context=ti(n,h)),d.state=n.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&($u(n,i,h,l),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&ul.enqueueReplaceState(d,d.state,null),nl(n,l,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function ui(n,i){try{var l="",u=i;do l+=oe(u),u=u.return;while(u);var d=l}catch(h){d=`
Error generating stack: `+h.message+`
`+h.stack}return{value:n,source:i,stack:d,digest:null}}function Gu(n,i,l){return{value:n,source:null,stack:l??null,digest:i??null}}function Ku(n,i){try{console.error(i.value)}catch(l){setTimeout(function(){throw l})}}var Fw=typeof WeakMap=="function"?WeakMap:Map;function Sp(n,i,l){l=mn(-1,l),l.tag=3,l.payload={element:null};var u=i.value;return l.callback=function(){gl||(gl=!0,ac=u),Ku(n,i)},l}function Ip(n,i,l){l=mn(-1,l),l.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;l.payload=function(){return u(d)},l.callback=function(){Ku(n,i)}}var h=n.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(l.callback=function(){Ku(n,i),typeof u!="function"&&(Hn===null?Hn=new Set([this]):Hn.add(this));var g=i.stack;this.componentDidCatch(i.value,{componentStack:g!==null?g:""})}),l}function kp(n,i,l){var u=n.pingCache;if(u===null){u=n.pingCache=new Fw;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(l)||(d.add(l),n=Jw.bind(null,n,i,l),i.then(n,n))}function Tp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Rp(n,i,l,u,d){return n.mode&1?(n.flags|=65536,n.lanes=d,n):(n===i?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(i=mn(-1,1),i.tag=2,Bn(l,i,1))),l.lanes|=1),n)}var Uw=ee.ReactCurrentOwner,gt=!1;function ut(n,i,l,u){i.child=n===null?Kf(i,null,l,u):si(i,n.child,l,u)}function Np(n,i,l,u,d){l=l.render;var h=i.ref;return li(i,d),u=Uu(n,i,l,u,h,d),l=ju(),n!==null&&!gt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,gn(n,i,d)):(xe&&l&&Eu(i),i.flags|=1,ut(n,i,u,d),i.child)}function Pp(n,i,l,u,d){if(n===null){var h=l.type;return typeof h=="function"&&!mc(h)&&h.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(i.tag=15,i.type=h,xp(n,i,h,u,d)):(n=Cl(l.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(h=n.child,!(n.lanes&d)){var g=h.memoizedProps;if(l=l.compare,l=l!==null?l:is,l(g,u)&&n.ref===i.ref)return gn(n,i,d)}return i.flags|=1,n=Kn(h,u),n.ref=i.ref,n.return=i,i.child=n}function xp(n,i,l,u,d){if(n!==null){var h=n.memoizedProps;if(is(h,u)&&n.ref===i.ref)if(gt=!1,i.pendingProps=u=h,(n.lanes&d)!==0)n.flags&131072&&(gt=!0);else return i.lanes=n.lanes,gn(n,i,d)}return qu(n,i,l,u,d)}function Ap(n,i,l){var u=i.pendingProps,d=u.children,h=n!==null?n.memoizedState:null;if(u.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(di,Tt),Tt|=l;else{if(!(l&1073741824))return n=h!==null?h.baseLanes|l:l,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Se(di,Tt),Tt|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=h!==null?h.baseLanes:l,Se(di,Tt),Tt|=u}else h!==null?(u=h.baseLanes|l,i.memoizedState=null):u=l,Se(di,Tt),Tt|=u;return ut(n,i,d,l),i.child}function Op(n,i){var l=i.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(i.flags|=512,i.flags|=2097152)}function qu(n,i,l,u,d){var h=mt(l)?yr:it.current;return h=ti(i,h),li(i,d),l=Uu(n,i,l,u,h,d),u=ju(),n!==null&&!gt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,gn(n,i,d)):(xe&&u&&Eu(i),i.flags|=1,ut(n,i,l,d),i.child)}function Lp(n,i,l,u,d){if(mt(l)){var h=!0;Ko(i)}else h=!1;if(li(i,d),i.stateNode===null)dl(n,i),Ep(i,l,u),Vu(i,l,u,d),u=!0;else if(n===null){var g=i.stateNode,v=i.memoizedProps;g.props=v;var E=g.context,x=l.contextType;typeof x=="object"&&x!==null?x=Ot(x):(x=mt(l)?yr:it.current,x=ti(i,x));var F=l.getDerivedStateFromProps,U=typeof F=="function"||typeof g.getSnapshotBeforeUpdate=="function";U||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(v!==u||E!==x)&&Cp(i,g,u,x),zn=!1;var M=i.memoizedState;g.state=M,nl(i,u,g,d),E=i.memoizedState,v!==u||M!==E||pt.current||zn?(typeof F=="function"&&($u(i,l,F,u),E=i.memoizedState),(v=zn||wp(i,l,v,u,M,E,x))?(U||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(i.flags|=4194308)):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=E),g.props=u,g.state=E,g.context=x,u=v):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{g=i.stateNode,Qf(n,i),v=i.memoizedProps,x=i.type===i.elementType?v:$t(i.type,v),g.props=x,U=i.pendingProps,M=g.context,E=l.contextType,typeof E=="object"&&E!==null?E=Ot(E):(E=mt(l)?yr:it.current,E=ti(i,E));var $=l.getDerivedStateFromProps;(F=typeof $=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(v!==U||M!==E)&&Cp(i,g,u,E),zn=!1,M=i.memoizedState,g.state=M,nl(i,u,g,d);var G=i.memoizedState;v!==U||M!==G||pt.current||zn?(typeof $=="function"&&($u(i,l,$,u),G=i.memoizedState),(x=zn||wp(i,l,x,u,M,G,E)||!1)?(F||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(u,G,E),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(u,G,E)),typeof g.componentDidUpdate=="function"&&(i.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof g.componentDidUpdate!="function"||v===n.memoizedProps&&M===n.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||v===n.memoizedProps&&M===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=G),g.props=u,g.state=G,g.context=E,u=x):(typeof g.componentDidUpdate!="function"||v===n.memoizedProps&&M===n.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||v===n.memoizedProps&&M===n.memoizedState||(i.flags|=1024),u=!1)}return Qu(n,i,l,u,h,d)}function Qu(n,i,l,u,d,h){Op(n,i);var g=(i.flags&128)!==0;if(!u&&!g)return d&&Uf(i,l,!1),gn(n,i,h);u=i.stateNode,Uw.current=i;var v=g&&typeof l.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&g?(i.child=si(i,n.child,null,h),i.child=si(i,null,v,h)):ut(n,i,v,h),i.memoizedState=u.state,d&&Uf(i,l,!0),i.child}function Dp(n){var i=n.stateNode;i.pendingContext?bf(n,i.pendingContext,i.pendingContext!==i.context):i.context&&bf(n,i.context,!1),Ou(n,i.containerInfo)}function Mp(n,i,l,u,d){return ii(),ku(d),i.flags|=256,ut(n,i,l,u),i.child}var Yu={dehydrated:null,treeContext:null,retryLane:0};function Ju(n){return{baseLanes:n,cachePool:null,transitions:null}}function bp(n,i,l){var u=i.pendingProps,d=Oe.current,h=!1,g=(i.flags&128)!==0,v;if((v=g)||(v=n!==null&&n.memoizedState===null?!1:(d&2)!==0),v?(h=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Se(Oe,d&1),n===null)return Iu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(i.mode&1?n.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(g=u.children,n=u.fallback,h?(u=i.mode,h=i.child,g={mode:"hidden",children:g},!(u&1)&&h!==null?(h.childLanes=0,h.pendingProps=g):h=Sl(g,u,0,null),n=Nr(n,u,l,null),h.return=i,n.return=i,h.sibling=n,i.child=h,i.child.memoizedState=Ju(l),i.memoizedState=Yu,n):Xu(i,g));if(d=n.memoizedState,d!==null&&(v=d.dehydrated,v!==null))return jw(n,i,g,u,v,d,l);if(h){h=u.fallback,g=i.mode,d=n.child,v=d.sibling;var E={mode:"hidden",children:u.children};return!(g&1)&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=E,i.deletions=null):(u=Kn(d,E),u.subtreeFlags=d.subtreeFlags&14680064),v!==null?h=Kn(v,h):(h=Nr(h,g,l,null),h.flags|=2),h.return=i,u.return=i,u.sibling=h,i.child=u,u=h,h=i.child,g=n.child.memoizedState,g=g===null?Ju(l):{baseLanes:g.baseLanes|l,cachePool:null,transitions:g.transitions},h.memoizedState=g,h.childLanes=n.childLanes&~l,i.memoizedState=Yu,u}return h=n.child,n=h.sibling,u=Kn(h,{mode:"visible",children:u.children}),!(i.mode&1)&&(u.lanes=l),u.return=i,u.sibling=null,n!==null&&(l=i.deletions,l===null?(i.deletions=[n],i.flags|=16):l.push(n)),i.child=u,i.memoizedState=null,u}function Xu(n,i){return i=Sl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function cl(n,i,l,u){return u!==null&&ku(u),si(i,n.child,null,l),n=Xu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function jw(n,i,l,u,d,h,g){if(l)return i.flags&256?(i.flags&=-257,u=Gu(Error(t(422))),cl(n,i,g,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(h=u.fallback,d=i.mode,u=Sl({mode:"visible",children:u.children},d,0,null),h=Nr(h,d,g,null),h.flags|=2,u.return=i,h.return=i,u.sibling=h,i.child=u,i.mode&1&&si(i,n.child,null,g),i.child.memoizedState=Ju(g),i.memoizedState=Yu,h);if(!(i.mode&1))return cl(n,i,g,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var v=u.dgst;return u=v,h=Error(t(419)),u=Gu(h,u,void 0),cl(n,i,g,u)}if(v=(g&n.childLanes)!==0,gt||v){if(u=Ge,u!==null){switch(g&-g){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(u.suspendedLanes|g)?0:d,d!==0&&d!==h.retryLane&&(h.retryLane=d,pn(n,d),Kt(u,n,d,-1))}return pc(),u=Gu(Error(t(421))),cl(n,i,g,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Xw.bind(null,n),d._reactRetry=i,null):(n=h.treeContext,kt=bn(d.nextSibling),It=i,xe=!0,Ht=null,n!==null&&(xt[At++]=hn,xt[At++]=fn,xt[At++]=vr,hn=n.id,fn=n.overflow,vr=i),i=Xu(i,u.children),i.flags|=4096,i)}function Fp(n,i,l){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Pu(n.return,i,l)}function Zu(n,i,l,u,d){var h=n.memoizedState;h===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:l,tailMode:d}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=u,h.tail=l,h.tailMode=d)}function Up(n,i,l){var u=i.pendingProps,d=u.revealOrder,h=u.tail;if(ut(n,i,u.children,l),u=Oe.current,u&2)u=u&1|2,i.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Fp(n,l,i);else if(n.tag===19)Fp(n,l,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Se(Oe,u),!(i.mode&1))i.memoizedState=null;else switch(d){case"forwards":for(l=i.child,d=null;l!==null;)n=l.alternate,n!==null&&rl(n)===null&&(d=l),l=l.sibling;l=d,l===null?(d=i.child,i.child=null):(d=l.sibling,l.sibling=null),Zu(i,!1,d,l,h);break;case"backwards":for(l=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&rl(n)===null){i.child=d;break}n=d.sibling,d.sibling=l,l=d,d=n}Zu(i,!0,l,null,h);break;case"together":Zu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function dl(n,i){!(i.mode&1)&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function gn(n,i,l){if(n!==null&&(i.dependencies=n.dependencies),Ir|=i.lanes,!(l&i.childLanes))return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,l=Kn(n,n.pendingProps),i.child=l,l.return=i;n.sibling!==null;)n=n.sibling,l=l.sibling=Kn(n,n.pendingProps),l.return=i;l.sibling=null}return i.child}function zw(n,i,l){switch(i.tag){case 3:Dp(i),ii();break;case 5:Xf(i);break;case 1:mt(i.type)&&Ko(i);break;case 4:Ou(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;Se(Zo,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Se(Oe,Oe.current&1),i.flags|=128,null):l&i.child.childLanes?bp(n,i,l):(Se(Oe,Oe.current&1),n=gn(n,i,l),n!==null?n.sibling:null);Se(Oe,Oe.current&1);break;case 19:if(u=(l&i.childLanes)!==0,n.flags&128){if(u)return Up(n,i,l);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Se(Oe,Oe.current),u)break;return null;case 22:case 23:return i.lanes=0,Ap(n,i,l)}return gn(n,i,l)}var jp,ec,zp,Bp;jp=function(n,i){for(var l=i.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===i)break;for(;l.sibling===null;){if(l.return===null||l.return===i)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},ec=function(){},zp=function(n,i,l,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Cr(tn.current);var h=null;switch(l){case"input":d=Pa(n,d),u=Pa(n,u),h=[];break;case"select":d=W({},d,{value:void 0}),u=W({},u,{value:void 0}),h=[];break;case"textarea":d=Oa(n,d),u=Oa(n,u),h=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=$o)}Da(l,u);var g;l=null;for(x in d)if(!u.hasOwnProperty(x)&&d.hasOwnProperty(x)&&d[x]!=null)if(x==="style"){var v=d[x];for(g in v)v.hasOwnProperty(g)&&(l||(l={}),l[g]="")}else x!=="dangerouslySetInnerHTML"&&x!=="children"&&x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(o.hasOwnProperty(x)?h||(h=[]):(h=h||[]).push(x,null));for(x in u){var E=u[x];if(v=d!=null?d[x]:void 0,u.hasOwnProperty(x)&&E!==v&&(E!=null||v!=null))if(x==="style")if(v){for(g in v)!v.hasOwnProperty(g)||E&&E.hasOwnProperty(g)||(l||(l={}),l[g]="");for(g in E)E.hasOwnProperty(g)&&v[g]!==E[g]&&(l||(l={}),l[g]=E[g])}else l||(h||(h=[]),h.push(x,l)),l=E;else x==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,v=v?v.__html:void 0,E!=null&&v!==E&&(h=h||[]).push(x,E)):x==="children"?typeof E!="string"&&typeof E!="number"||(h=h||[]).push(x,""+E):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&(o.hasOwnProperty(x)?(E!=null&&x==="onScroll"&&Re("scroll",n),h||v===E||(h=[])):(h=h||[]).push(x,E))}l&&(h=h||[]).push("style",l);var x=h;(i.updateQueue=x)&&(i.flags|=4)}},Bp=function(n,i,l,u){l!==u&&(i.flags|=4)};function vs(n,i){if(!xe)switch(n.tailMode){case"hidden":i=n.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var u=null;l!==null;)l.alternate!==null&&(u=l),l=l.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function ot(n){var i=n.alternate!==null&&n.alternate.child===n.child,l=0,u=0;if(i)for(var d=n.child;d!==null;)l|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)l|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=l,i}function Bw(n,i,l){var u=i.pendingProps;switch(Cu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(i),null;case 1:return mt(i.type)&&Go(),ot(i),null;case 3:return u=i.stateNode,ai(),Ne(pt),Ne(it),Mu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Jo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,Ht!==null&&(dc(Ht),Ht=null))),ec(n,i),ot(i),null;case 5:Lu(i);var d=Cr(ps.current);if(l=i.type,n!==null&&i.stateNode!=null)zp(n,i,l,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return ot(i),null}if(n=Cr(tn.current),Jo(i)){u=i.stateNode,l=i.type;var h=i.memoizedProps;switch(u[en]=i,u[us]=h,n=(i.mode&1)!==0,l){case"dialog":Re("cancel",u),Re("close",u);break;case"iframe":case"object":case"embed":Re("load",u);break;case"video":case"audio":for(d=0;d<os.length;d++)Re(os[d],u);break;case"source":Re("error",u);break;case"img":case"image":case"link":Re("error",u),Re("load",u);break;case"details":Re("toggle",u);break;case"input":wh(u,h),Re("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!h.multiple},Re("invalid",u);break;case"textarea":Sh(u,h),Re("invalid",u)}Da(l,h),d=null;for(var g in h)if(h.hasOwnProperty(g)){var v=h[g];g==="children"?typeof v=="string"?u.textContent!==v&&(h.suppressHydrationWarning!==!0&&Ho(u.textContent,v,n),d=["children",v]):typeof v=="number"&&u.textContent!==""+v&&(h.suppressHydrationWarning!==!0&&Ho(u.textContent,v,n),d=["children",""+v]):o.hasOwnProperty(g)&&v!=null&&g==="onScroll"&&Re("scroll",u)}switch(l){case"input":wo(u),Ch(u,h,!0);break;case"textarea":wo(u),kh(u);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(u.onclick=$o)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{g=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Th(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=g.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=g.createElement(l,{is:u.is}):(n=g.createElement(l),l==="select"&&(g=n,u.multiple?g.multiple=!0:u.size&&(g.size=u.size))):n=g.createElementNS(n,l),n[en]=i,n[us]=u,jp(n,i,!1,!1),i.stateNode=n;e:{switch(g=Ma(l,u),l){case"dialog":Re("cancel",n),Re("close",n),d=u;break;case"iframe":case"object":case"embed":Re("load",n),d=u;break;case"video":case"audio":for(d=0;d<os.length;d++)Re(os[d],n);d=u;break;case"source":Re("error",n),d=u;break;case"img":case"image":case"link":Re("error",n),Re("load",n),d=u;break;case"details":Re("toggle",n),d=u;break;case"input":wh(n,u),d=Pa(n,u),Re("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=W({},u,{value:void 0}),Re("invalid",n);break;case"textarea":Sh(n,u),d=Oa(n,u),Re("invalid",n);break;default:d=u}Da(l,d),v=d;for(h in v)if(v.hasOwnProperty(h)){var E=v[h];h==="style"?Ph(n,E):h==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,E!=null&&Rh(n,E)):h==="children"?typeof E=="string"?(l!=="textarea"||E!=="")&&Bi(n,E):typeof E=="number"&&Bi(n,""+E):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(o.hasOwnProperty(h)?E!=null&&h==="onScroll"&&Re("scroll",n):E!=null&&B(n,h,E,g))}switch(l){case"input":wo(n),Ch(n,u,!1);break;case"textarea":wo(n),kh(n);break;case"option":u.value!=null&&n.setAttribute("value",""+ge(u.value));break;case"select":n.multiple=!!u.multiple,h=u.value,h!=null?Hr(n,!!u.multiple,h,!1):u.defaultValue!=null&&Hr(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=$o)}switch(l){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return ot(i),null;case 6:if(n&&i.stateNode!=null)Bp(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(l=Cr(ps.current),Cr(tn.current),Jo(i)){if(u=i.stateNode,l=i.memoizedProps,u[en]=i,(h=u.nodeValue!==l)&&(n=It,n!==null))switch(n.tag){case 3:Ho(u.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ho(u.nodeValue,l,(n.mode&1)!==0)}h&&(i.flags|=4)}else u=(l.nodeType===9?l:l.ownerDocument).createTextNode(u),u[en]=i,i.stateNode=u}return ot(i),null;case 13:if(Ne(Oe),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(xe&&kt!==null&&i.mode&1&&!(i.flags&128))$f(),ii(),i.flags|=98560,h=!1;else if(h=Jo(i),u!==null&&u.dehydrated!==null){if(n===null){if(!h)throw Error(t(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(t(317));h[en]=i}else ii(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;ot(i),h=!1}else Ht!==null&&(dc(Ht),Ht=null),h=!0;if(!h)return i.flags&65536?i:null}return i.flags&128?(i.lanes=l,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,i.mode&1&&(n===null||Oe.current&1?We===0&&(We=3):pc())),i.updateQueue!==null&&(i.flags|=4),ot(i),null);case 4:return ai(),ec(n,i),n===null&&ls(i.stateNode.containerInfo),ot(i),null;case 10:return Nu(i.type._context),ot(i),null;case 17:return mt(i.type)&&Go(),ot(i),null;case 19:if(Ne(Oe),h=i.memoizedState,h===null)return ot(i),null;if(u=(i.flags&128)!==0,g=h.rendering,g===null)if(u)vs(h,!1);else{if(We!==0||n!==null&&n.flags&128)for(n=i.child;n!==null;){if(g=rl(n),g!==null){for(i.flags|=128,vs(h,!1),u=g.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=l,l=i.child;l!==null;)h=l,n=u,h.flags&=14680066,g=h.alternate,g===null?(h.childLanes=0,h.lanes=n,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=g.childLanes,h.lanes=g.lanes,h.child=g.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=g.memoizedProps,h.memoizedState=g.memoizedState,h.updateQueue=g.updateQueue,h.type=g.type,n=g.dependencies,h.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Se(Oe,Oe.current&1|2),i.child}n=n.sibling}h.tail!==null&&Ue()>hi&&(i.flags|=128,u=!0,vs(h,!1),i.lanes=4194304)}else{if(!u)if(n=rl(g),n!==null){if(i.flags|=128,u=!0,l=n.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),vs(h,!0),h.tail===null&&h.tailMode==="hidden"&&!g.alternate&&!xe)return ot(i),null}else 2*Ue()-h.renderingStartTime>hi&&l!==1073741824&&(i.flags|=128,u=!0,vs(h,!1),i.lanes=4194304);h.isBackwards?(g.sibling=i.child,i.child=g):(l=h.last,l!==null?l.sibling=g:i.child=g,h.last=g)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Ue(),i.sibling=null,l=Oe.current,Se(Oe,u?l&1|2:l&1),i):(ot(i),null);case 22:case 23:return fc(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&i.mode&1?Tt&1073741824&&(ot(i),i.subtreeFlags&6&&(i.flags|=8192)):ot(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Ww(n,i){switch(Cu(i),i.tag){case 1:return mt(i.type)&&Go(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ai(),Ne(pt),Ne(it),Mu(),n=i.flags,n&65536&&!(n&128)?(i.flags=n&-65537|128,i):null;case 5:return Lu(i),null;case 13:if(Ne(Oe),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ii()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ne(Oe),null;case 4:return ai(),null;case 10:return Nu(i.type._context),null;case 22:case 23:return fc(),null;case 24:return null;default:return null}}var hl=!1,lt=!1,Hw=typeof WeakSet=="function"?WeakSet:Set,V=null;function ci(n,i){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(u){be(n,i,u)}else l.current=null}function tc(n,i,l){try{l()}catch(u){be(n,i,u)}}var Wp=!1;function $w(n,i){if(fu=Oo,n=wf(),su(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var u=l.getSelection&&l.getSelection();if(u&&u.rangeCount!==0){l=u.anchorNode;var d=u.anchorOffset,h=u.focusNode;u=u.focusOffset;try{l.nodeType,h.nodeType}catch{l=null;break e}var g=0,v=-1,E=-1,x=0,F=0,U=n,M=null;t:for(;;){for(var $;U!==l||d!==0&&U.nodeType!==3||(v=g+d),U!==h||u!==0&&U.nodeType!==3||(E=g+u),U.nodeType===3&&(g+=U.nodeValue.length),($=U.firstChild)!==null;)M=U,U=$;for(;;){if(U===n)break t;if(M===l&&++x===d&&(v=g),M===h&&++F===u&&(E=g),($=U.nextSibling)!==null)break;U=M,M=U.parentNode}U=$}l=v===-1||E===-1?null:{start:v,end:E}}else l=null}l=l||{start:0,end:0}}else l=null;for(pu={focusedElem:n,selectionRange:l},Oo=!1,V=i;V!==null;)if(i=V,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,V=n;else for(;V!==null;){i=V;try{var G=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(G!==null){var K=G.memoizedProps,je=G.memoizedState,k=i.stateNode,C=k.getSnapshotBeforeUpdate(i.elementType===i.type?K:$t(i.type,K),je);k.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var P=i.stateNode.containerInfo;P.nodeType===1?P.textContent="":P.nodeType===9&&P.documentElement&&P.removeChild(P.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(j){be(i,i.return,j)}if(n=i.sibling,n!==null){n.return=i.return,V=n;break}V=i.return}return G=Wp,Wp=!1,G}function ws(n,i,l){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var h=d.destroy;d.destroy=void 0,h!==void 0&&tc(i,l,h)}d=d.next}while(d!==u)}}function fl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var l=i=i.next;do{if((l.tag&n)===n){var u=l.create;l.destroy=u()}l=l.next}while(l!==i)}}function nc(n){var i=n.ref;if(i!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof i=="function"?i(n):i.current=n}}function Hp(n){var i=n.alternate;i!==null&&(n.alternate=null,Hp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[en],delete i[us],delete i[yu],delete i[Tw],delete i[Rw])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function $p(n){return n.tag===5||n.tag===3||n.tag===4}function Vp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||$p(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function rc(n,i,l){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?l.nodeType===8?l.parentNode.insertBefore(n,i):l.insertBefore(n,i):(l.nodeType===8?(i=l.parentNode,i.insertBefore(n,l)):(i=l,i.appendChild(n)),l=l._reactRootContainer,l!=null||i.onclick!==null||(i.onclick=$o));else if(u!==4&&(n=n.child,n!==null))for(rc(n,i,l),n=n.sibling;n!==null;)rc(n,i,l),n=n.sibling}function ic(n,i,l){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?l.insertBefore(n,i):l.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(ic(n,i,l),n=n.sibling;n!==null;)ic(n,i,l),n=n.sibling}var Je=null,Vt=!1;function Wn(n,i,l){for(l=l.child;l!==null;)Gp(n,i,l),l=l.sibling}function Gp(n,i,l){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(To,l)}catch{}switch(l.tag){case 5:lt||ci(l,i);case 6:var u=Je,d=Vt;Je=null,Wn(n,i,l),Je=u,Vt=d,Je!==null&&(Vt?(n=Je,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):Je.removeChild(l.stateNode));break;case 18:Je!==null&&(Vt?(n=Je,l=l.stateNode,n.nodeType===8?_u(n.parentNode,l):n.nodeType===1&&_u(n,l),Xi(n)):_u(Je,l.stateNode));break;case 4:u=Je,d=Vt,Je=l.stateNode.containerInfo,Vt=!0,Wn(n,i,l),Je=u,Vt=d;break;case 0:case 11:case 14:case 15:if(!lt&&(u=l.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var h=d,g=h.destroy;h=h.tag,g!==void 0&&(h&2||h&4)&&tc(l,i,g),d=d.next}while(d!==u)}Wn(n,i,l);break;case 1:if(!lt&&(ci(l,i),u=l.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=l.memoizedProps,u.state=l.memoizedState,u.componentWillUnmount()}catch(v){be(l,i,v)}Wn(n,i,l);break;case 21:Wn(n,i,l);break;case 22:l.mode&1?(lt=(u=lt)||l.memoizedState!==null,Wn(n,i,l),lt=u):Wn(n,i,l);break;default:Wn(n,i,l)}}function Kp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new Hw),i.forEach(function(u){var d=Zw.bind(null,n,u);l.has(u)||(l.add(u),u.then(d,d))})}}function Gt(n,i){var l=i.deletions;if(l!==null)for(var u=0;u<l.length;u++){var d=l[u];try{var h=n,g=i,v=g;e:for(;v!==null;){switch(v.tag){case 5:Je=v.stateNode,Vt=!1;break e;case 3:Je=v.stateNode.containerInfo,Vt=!0;break e;case 4:Je=v.stateNode.containerInfo,Vt=!0;break e}v=v.return}if(Je===null)throw Error(t(160));Gp(h,g,d),Je=null,Vt=!1;var E=d.alternate;E!==null&&(E.return=null),d.return=null}catch(x){be(d,i,x)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)qp(i,n),i=i.sibling}function qp(n,i){var l=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Gt(i,n),rn(n),u&4){try{ws(3,n,n.return),fl(3,n)}catch(K){be(n,n.return,K)}try{ws(5,n,n.return)}catch(K){be(n,n.return,K)}}break;case 1:Gt(i,n),rn(n),u&512&&l!==null&&ci(l,l.return);break;case 5:if(Gt(i,n),rn(n),u&512&&l!==null&&ci(l,l.return),n.flags&32){var d=n.stateNode;try{Bi(d,"")}catch(K){be(n,n.return,K)}}if(u&4&&(d=n.stateNode,d!=null)){var h=n.memoizedProps,g=l!==null?l.memoizedProps:h,v=n.type,E=n.updateQueue;if(n.updateQueue=null,E!==null)try{v==="input"&&h.type==="radio"&&h.name!=null&&Eh(d,h),Ma(v,g);var x=Ma(v,h);for(g=0;g<E.length;g+=2){var F=E[g],U=E[g+1];F==="style"?Ph(d,U):F==="dangerouslySetInnerHTML"?Rh(d,U):F==="children"?Bi(d,U):B(d,F,U,x)}switch(v){case"input":xa(d,h);break;case"textarea":Ih(d,h);break;case"select":var M=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!h.multiple;var $=h.value;$!=null?Hr(d,!!h.multiple,$,!1):M!==!!h.multiple&&(h.defaultValue!=null?Hr(d,!!h.multiple,h.defaultValue,!0):Hr(d,!!h.multiple,h.multiple?[]:"",!1))}d[us]=h}catch(K){be(n,n.return,K)}}break;case 6:if(Gt(i,n),rn(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,h=n.memoizedProps;try{d.nodeValue=h}catch(K){be(n,n.return,K)}}break;case 3:if(Gt(i,n),rn(n),u&4&&l!==null&&l.memoizedState.isDehydrated)try{Xi(i.containerInfo)}catch(K){be(n,n.return,K)}break;case 4:Gt(i,n),rn(n);break;case 13:Gt(i,n),rn(n),d=n.child,d.flags&8192&&(h=d.memoizedState!==null,d.stateNode.isHidden=h,!h||d.alternate!==null&&d.alternate.memoizedState!==null||(lc=Ue())),u&4&&Kp(n);break;case 22:if(F=l!==null&&l.memoizedState!==null,n.mode&1?(lt=(x=lt)||F,Gt(i,n),lt=x):Gt(i,n),rn(n),u&8192){if(x=n.memoizedState!==null,(n.stateNode.isHidden=x)&&!F&&n.mode&1)for(V=n,F=n.child;F!==null;){for(U=V=F;V!==null;){switch(M=V,$=M.child,M.tag){case 0:case 11:case 14:case 15:ws(4,M,M.return);break;case 1:ci(M,M.return);var G=M.stateNode;if(typeof G.componentWillUnmount=="function"){u=M,l=M.return;try{i=u,G.props=i.memoizedProps,G.state=i.memoizedState,G.componentWillUnmount()}catch(K){be(u,l,K)}}break;case 5:ci(M,M.return);break;case 22:if(M.memoizedState!==null){Jp(U);continue}}$!==null?($.return=M,V=$):Jp(U)}F=F.sibling}e:for(F=null,U=n;;){if(U.tag===5){if(F===null){F=U;try{d=U.stateNode,x?(h=d.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(v=U.stateNode,E=U.memoizedProps.style,g=E!=null&&E.hasOwnProperty("display")?E.display:null,v.style.display=Nh("display",g))}catch(K){be(n,n.return,K)}}}else if(U.tag===6){if(F===null)try{U.stateNode.nodeValue=x?"":U.memoizedProps}catch(K){be(n,n.return,K)}}else if((U.tag!==22&&U.tag!==23||U.memoizedState===null||U===n)&&U.child!==null){U.child.return=U,U=U.child;continue}if(U===n)break e;for(;U.sibling===null;){if(U.return===null||U.return===n)break e;F===U&&(F=null),U=U.return}F===U&&(F=null),U.sibling.return=U.return,U=U.sibling}}break;case 19:Gt(i,n),rn(n),u&4&&Kp(n);break;case 21:break;default:Gt(i,n),rn(n)}}function rn(n){var i=n.flags;if(i&2){try{e:{for(var l=n.return;l!==null;){if($p(l)){var u=l;break e}l=l.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(Bi(d,""),u.flags&=-33);var h=Vp(n);ic(n,h,d);break;case 3:case 4:var g=u.stateNode.containerInfo,v=Vp(n);rc(n,v,g);break;default:throw Error(t(161))}}catch(E){be(n,n.return,E)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Vw(n,i,l){V=n,Qp(n)}function Qp(n,i,l){for(var u=(n.mode&1)!==0;V!==null;){var d=V,h=d.child;if(d.tag===22&&u){var g=d.memoizedState!==null||hl;if(!g){var v=d.alternate,E=v!==null&&v.memoizedState!==null||lt;v=hl;var x=lt;if(hl=g,(lt=E)&&!x)for(V=d;V!==null;)g=V,E=g.child,g.tag===22&&g.memoizedState!==null?Xp(d):E!==null?(E.return=g,V=E):Xp(d);for(;h!==null;)V=h,Qp(h),h=h.sibling;V=d,hl=v,lt=x}Yp(n)}else d.subtreeFlags&8772&&h!==null?(h.return=d,V=h):Yp(n)}}function Yp(n){for(;V!==null;){var i=V;if(i.flags&8772){var l=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:lt||fl(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!lt)if(l===null)u.componentDidMount();else{var d=i.elementType===i.type?l.memoizedProps:$t(i.type,l.memoizedProps);u.componentDidUpdate(d,l.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Jf(i,h,u);break;case 3:var g=i.updateQueue;if(g!==null){if(l=null,i.child!==null)switch(i.child.tag){case 5:l=i.child.stateNode;break;case 1:l=i.child.stateNode}Jf(i,g,l)}break;case 5:var v=i.stateNode;if(l===null&&i.flags&4){l=v;var E=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":E.autoFocus&&l.focus();break;case"img":E.src&&(l.src=E.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var x=i.alternate;if(x!==null){var F=x.memoizedState;if(F!==null){var U=F.dehydrated;U!==null&&Xi(U)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}lt||i.flags&512&&nc(i)}catch(M){be(i,i.return,M)}}if(i===n){V=null;break}if(l=i.sibling,l!==null){l.return=i.return,V=l;break}V=i.return}}function Jp(n){for(;V!==null;){var i=V;if(i===n){V=null;break}var l=i.sibling;if(l!==null){l.return=i.return,V=l;break}V=i.return}}function Xp(n){for(;V!==null;){var i=V;try{switch(i.tag){case 0:case 11:case 15:var l=i.return;try{fl(4,i)}catch(E){be(i,l,E)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(E){be(i,d,E)}}var h=i.return;try{nc(i)}catch(E){be(i,h,E)}break;case 5:var g=i.return;try{nc(i)}catch(E){be(i,g,E)}}}catch(E){be(i,i.return,E)}if(i===n){V=null;break}var v=i.sibling;if(v!==null){v.return=i.return,V=v;break}V=i.return}}var Gw=Math.ceil,pl=ee.ReactCurrentDispatcher,sc=ee.ReactCurrentOwner,Dt=ee.ReactCurrentBatchConfig,fe=0,Ge=null,ze=null,Xe=0,Tt=0,di=Fn(0),We=0,Es=null,Ir=0,ml=0,oc=0,Cs=null,_t=null,lc=0,hi=1/0,_n=null,gl=!1,ac=null,Hn=null,_l=!1,$n=null,yl=0,Ss=0,uc=null,vl=-1,wl=0;function ct(){return fe&6?Ue():vl!==-1?vl:vl=Ue()}function Vn(n){return n.mode&1?fe&2&&Xe!==0?Xe&-Xe:Pw.transition!==null?(wl===0&&(wl=$h()),wl):(n=ye,n!==0||(n=window.event,n=n===void 0?16:Zh(n.type)),n):1}function Kt(n,i,l,u){if(50<Ss)throw Ss=0,uc=null,Error(t(185));Ki(n,l,u),(!(fe&2)||n!==Ge)&&(n===Ge&&(!(fe&2)&&(ml|=l),We===4&&Gn(n,Xe)),yt(n,u),l===1&&fe===0&&!(i.mode&1)&&(hi=Ue()+500,qo&&jn()))}function yt(n,i){var l=n.callbackNode;Pv(n,i);var u=Po(n,n===Ge?Xe:0);if(u===0)l!==null&&Bh(l),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(l!=null&&Bh(l),i===1)n.tag===0?Nw(em.bind(null,n)):jf(em.bind(null,n)),Iw(function(){!(fe&6)&&jn()}),l=null;else{switch(Vh(u)){case 1:l=Wa;break;case 4:l=Wh;break;case 16:l=ko;break;case 536870912:l=Hh;break;default:l=ko}l=am(l,Zp.bind(null,n))}n.callbackPriority=i,n.callbackNode=l}}function Zp(n,i){if(vl=-1,wl=0,fe&6)throw Error(t(327));var l=n.callbackNode;if(fi()&&n.callbackNode!==l)return null;var u=Po(n,n===Ge?Xe:0);if(u===0)return null;if(u&30||u&n.expiredLanes||i)i=El(n,u);else{i=u;var d=fe;fe|=2;var h=nm();(Ge!==n||Xe!==i)&&(_n=null,hi=Ue()+500,Tr(n,i));do try{Qw();break}catch(v){tm(n,v)}while(!0);Ru(),pl.current=h,fe=d,ze!==null?i=0:(Ge=null,Xe=0,i=We)}if(i!==0){if(i===2&&(d=Ha(n),d!==0&&(u=d,i=cc(n,d))),i===1)throw l=Es,Tr(n,0),Gn(n,u),yt(n,Ue()),l;if(i===6)Gn(n,u);else{if(d=n.current.alternate,!(u&30)&&!Kw(d)&&(i=El(n,u),i===2&&(h=Ha(n),h!==0&&(u=h,i=cc(n,h))),i===1))throw l=Es,Tr(n,0),Gn(n,u),yt(n,Ue()),l;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Rr(n,_t,_n);break;case 3:if(Gn(n,u),(u&130023424)===u&&(i=lc+500-Ue(),10<i)){if(Po(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){ct(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=gu(Rr.bind(null,n,_t,_n),i);break}Rr(n,_t,_n);break;case 4:if(Gn(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var g=31-Bt(u);h=1<<g,g=i[g],g>d&&(d=g),u&=~h}if(u=d,u=Ue()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Gw(u/1960))-u,10<u){n.timeoutHandle=gu(Rr.bind(null,n,_t,_n),u);break}Rr(n,_t,_n);break;case 5:Rr(n,_t,_n);break;default:throw Error(t(329))}}}return yt(n,Ue()),n.callbackNode===l?Zp.bind(null,n):null}function cc(n,i){var l=Cs;return n.current.memoizedState.isDehydrated&&(Tr(n,i).flags|=256),n=El(n,i),n!==2&&(i=_t,_t=l,i!==null&&dc(i)),n}function dc(n){_t===null?_t=n:_t.push.apply(_t,n)}function Kw(n){for(var i=n;;){if(i.flags&16384){var l=i.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var u=0;u<l.length;u++){var d=l[u],h=d.getSnapshot;d=d.value;try{if(!Wt(h(),d))return!1}catch{return!1}}}if(l=i.child,i.subtreeFlags&16384&&l!==null)l.return=i,i=l;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Gn(n,i){for(i&=~oc,i&=~ml,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var l=31-Bt(i),u=1<<l;n[l]=-1,i&=~u}}function em(n){if(fe&6)throw Error(t(327));fi();var i=Po(n,0);if(!(i&1))return yt(n,Ue()),null;var l=El(n,i);if(n.tag!==0&&l===2){var u=Ha(n);u!==0&&(i=u,l=cc(n,u))}if(l===1)throw l=Es,Tr(n,0),Gn(n,i),yt(n,Ue()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Rr(n,_t,_n),yt(n,Ue()),null}function hc(n,i){var l=fe;fe|=1;try{return n(i)}finally{fe=l,fe===0&&(hi=Ue()+500,qo&&jn())}}function kr(n){$n!==null&&$n.tag===0&&!(fe&6)&&fi();var i=fe;fe|=1;var l=Dt.transition,u=ye;try{if(Dt.transition=null,ye=1,n)return n()}finally{ye=u,Dt.transition=l,fe=i,!(fe&6)&&jn()}}function fc(){Tt=di.current,Ne(di)}function Tr(n,i){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,Sw(l)),ze!==null)for(l=ze.return;l!==null;){var u=l;switch(Cu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Go();break;case 3:ai(),Ne(pt),Ne(it),Mu();break;case 5:Lu(u);break;case 4:ai();break;case 13:Ne(Oe);break;case 19:Ne(Oe);break;case 10:Nu(u.type._context);break;case 22:case 23:fc()}l=l.return}if(Ge=n,ze=n=Kn(n.current,null),Xe=Tt=i,We=0,Es=null,oc=ml=Ir=0,_t=Cs=null,Er!==null){for(i=0;i<Er.length;i++)if(l=Er[i],u=l.interleaved,u!==null){l.interleaved=null;var d=u.next,h=l.pending;if(h!==null){var g=h.next;h.next=d,u.next=g}l.pending=u}Er=null}return n}function tm(n,i){do{var l=ze;try{if(Ru(),il.current=al,sl){for(var u=Le.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}sl=!1}if(Sr=0,Ve=Be=Le=null,ms=!1,gs=0,sc.current=null,l===null||l.return===null){We=1,Es=i,ze=null;break}e:{var h=n,g=l.return,v=l,E=i;if(i=Xe,v.flags|=32768,E!==null&&typeof E=="object"&&typeof E.then=="function"){var x=E,F=v,U=F.tag;if(!(F.mode&1)&&(U===0||U===11||U===15)){var M=F.alternate;M?(F.updateQueue=M.updateQueue,F.memoizedState=M.memoizedState,F.lanes=M.lanes):(F.updateQueue=null,F.memoizedState=null)}var $=Tp(g);if($!==null){$.flags&=-257,Rp($,g,v,h,i),$.mode&1&&kp(h,x,i),i=$,E=x;var G=i.updateQueue;if(G===null){var K=new Set;K.add(E),i.updateQueue=K}else G.add(E);break e}else{if(!(i&1)){kp(h,x,i),pc();break e}E=Error(t(426))}}else if(xe&&v.mode&1){var je=Tp(g);if(je!==null){!(je.flags&65536)&&(je.flags|=256),Rp(je,g,v,h,i),ku(ui(E,v));break e}}h=E=ui(E,v),We!==4&&(We=2),Cs===null?Cs=[h]:Cs.push(h),h=g;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var k=Sp(h,E,i);Yf(h,k);break e;case 1:v=E;var C=h.type,P=h.stateNode;if(!(h.flags&128)&&(typeof C.getDerivedStateFromError=="function"||P!==null&&typeof P.componentDidCatch=="function"&&(Hn===null||!Hn.has(P)))){h.flags|=65536,i&=-i,h.lanes|=i;var j=Ip(h,v,i);Yf(h,j);break e}}h=h.return}while(h!==null)}im(l)}catch(Q){i=Q,ze===l&&l!==null&&(ze=l=l.return);continue}break}while(!0)}function nm(){var n=pl.current;return pl.current=al,n===null?al:n}function pc(){(We===0||We===3||We===2)&&(We=4),Ge===null||!(Ir&268435455)&&!(ml&268435455)||Gn(Ge,Xe)}function El(n,i){var l=fe;fe|=2;var u=nm();(Ge!==n||Xe!==i)&&(_n=null,Tr(n,i));do try{qw();break}catch(d){tm(n,d)}while(!0);if(Ru(),fe=l,pl.current=u,ze!==null)throw Error(t(261));return Ge=null,Xe=0,We}function qw(){for(;ze!==null;)rm(ze)}function Qw(){for(;ze!==null&&!wv();)rm(ze)}function rm(n){var i=lm(n.alternate,n,Tt);n.memoizedProps=n.pendingProps,i===null?im(n):ze=i,sc.current=null}function im(n){var i=n;do{var l=i.alternate;if(n=i.return,i.flags&32768){if(l=Ww(l,i),l!==null){l.flags&=32767,ze=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{We=6,ze=null;return}}else if(l=Bw(l,i,Tt),l!==null){ze=l;return}if(i=i.sibling,i!==null){ze=i;return}ze=i=n}while(i!==null);We===0&&(We=5)}function Rr(n,i,l){var u=ye,d=Dt.transition;try{Dt.transition=null,ye=1,Yw(n,i,l,u)}finally{Dt.transition=d,ye=u}return null}function Yw(n,i,l,u){do fi();while($n!==null);if(fe&6)throw Error(t(327));l=n.finishedWork;var d=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var h=l.lanes|l.childLanes;if(xv(n,h),n===Ge&&(ze=Ge=null,Xe=0),!(l.subtreeFlags&2064)&&!(l.flags&2064)||_l||(_l=!0,am(ko,function(){return fi(),null})),h=(l.flags&15990)!==0,l.subtreeFlags&15990||h){h=Dt.transition,Dt.transition=null;var g=ye;ye=1;var v=fe;fe|=4,sc.current=null,$w(n,l),qp(l,n),gw(pu),Oo=!!fu,pu=fu=null,n.current=l,Vw(l),Ev(),fe=v,ye=g,Dt.transition=h}else n.current=l;if(_l&&(_l=!1,$n=n,yl=d),h=n.pendingLanes,h===0&&(Hn=null),Iv(l.stateNode),yt(n,Ue()),i!==null)for(u=n.onRecoverableError,l=0;l<i.length;l++)d=i[l],u(d.value,{componentStack:d.stack,digest:d.digest});if(gl)throw gl=!1,n=ac,ac=null,n;return yl&1&&n.tag!==0&&fi(),h=n.pendingLanes,h&1?n===uc?Ss++:(Ss=0,uc=n):Ss=0,jn(),null}function fi(){if($n!==null){var n=Vh(yl),i=Dt.transition,l=ye;try{if(Dt.transition=null,ye=16>n?16:n,$n===null)var u=!1;else{if(n=$n,$n=null,yl=0,fe&6)throw Error(t(331));var d=fe;for(fe|=4,V=n.current;V!==null;){var h=V,g=h.child;if(V.flags&16){var v=h.deletions;if(v!==null){for(var E=0;E<v.length;E++){var x=v[E];for(V=x;V!==null;){var F=V;switch(F.tag){case 0:case 11:case 15:ws(8,F,h)}var U=F.child;if(U!==null)U.return=F,V=U;else for(;V!==null;){F=V;var M=F.sibling,$=F.return;if(Hp(F),F===x){V=null;break}if(M!==null){M.return=$,V=M;break}V=$}}}var G=h.alternate;if(G!==null){var K=G.child;if(K!==null){G.child=null;do{var je=K.sibling;K.sibling=null,K=je}while(K!==null)}}V=h}}if(h.subtreeFlags&2064&&g!==null)g.return=h,V=g;else e:for(;V!==null;){if(h=V,h.flags&2048)switch(h.tag){case 0:case 11:case 15:ws(9,h,h.return)}var k=h.sibling;if(k!==null){k.return=h.return,V=k;break e}V=h.return}}var C=n.current;for(V=C;V!==null;){g=V;var P=g.child;if(g.subtreeFlags&2064&&P!==null)P.return=g,V=P;else e:for(g=C;V!==null;){if(v=V,v.flags&2048)try{switch(v.tag){case 0:case 11:case 15:fl(9,v)}}catch(Q){be(v,v.return,Q)}if(v===g){V=null;break e}var j=v.sibling;if(j!==null){j.return=v.return,V=j;break e}V=v.return}}if(fe=d,jn(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(To,n)}catch{}u=!0}return u}finally{ye=l,Dt.transition=i}}return!1}function sm(n,i,l){i=ui(l,i),i=Sp(n,i,1),n=Bn(n,i,1),i=ct(),n!==null&&(Ki(n,1,i),yt(n,i))}function be(n,i,l){if(n.tag===3)sm(n,n,l);else for(;i!==null;){if(i.tag===3){sm(i,n,l);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Hn===null||!Hn.has(u))){n=ui(l,n),n=Ip(i,n,1),i=Bn(i,n,1),n=ct(),i!==null&&(Ki(i,1,n),yt(i,n));break}}i=i.return}}function Jw(n,i,l){var u=n.pingCache;u!==null&&u.delete(i),i=ct(),n.pingedLanes|=n.suspendedLanes&l,Ge===n&&(Xe&l)===l&&(We===4||We===3&&(Xe&130023424)===Xe&&500>Ue()-lc?Tr(n,0):oc|=l),yt(n,i)}function om(n,i){i===0&&(n.mode&1?(i=No,No<<=1,!(No&130023424)&&(No=4194304)):i=1);var l=ct();n=pn(n,i),n!==null&&(Ki(n,i,l),yt(n,l))}function Xw(n){var i=n.memoizedState,l=0;i!==null&&(l=i.retryLane),om(n,l)}function Zw(n,i){var l=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(l=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),om(n,l)}var lm;lm=function(n,i,l){if(n!==null)if(n.memoizedProps!==i.pendingProps||pt.current)gt=!0;else{if(!(n.lanes&l)&&!(i.flags&128))return gt=!1,zw(n,i,l);gt=!!(n.flags&131072)}else gt=!1,xe&&i.flags&1048576&&zf(i,Yo,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;dl(n,i),n=i.pendingProps;var d=ti(i,it.current);li(i,l),d=Uu(null,i,u,n,d,l);var h=ju();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,mt(u)?(h=!0,Ko(i)):h=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Au(i),d.updater=ul,i.stateNode=d,d._reactInternals=i,Vu(i,u,n,l),i=Qu(null,i,u,!0,h,l)):(i.tag=0,xe&&h&&Eu(i),ut(null,i,d,l),i=i.child),i;case 16:u=i.elementType;e:{switch(dl(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=tE(u),n=$t(u,n),d){case 0:i=qu(null,i,u,n,l);break e;case 1:i=Lp(null,i,u,n,l);break e;case 11:i=Np(null,i,u,n,l);break e;case 14:i=Pp(null,i,u,$t(u.type,n),l);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:$t(u,d),qu(n,i,u,d,l);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:$t(u,d),Lp(n,i,u,d,l);case 3:e:{if(Dp(i),n===null)throw Error(t(387));u=i.pendingProps,h=i.memoizedState,d=h.element,Qf(n,i),nl(i,u,null,l);var g=i.memoizedState;if(u=g.element,h.isDehydrated)if(h={element:u,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){d=ui(Error(t(423)),i),i=Mp(n,i,u,l,d);break e}else if(u!==d){d=ui(Error(t(424)),i),i=Mp(n,i,u,l,d);break e}else for(kt=bn(i.stateNode.containerInfo.firstChild),It=i,xe=!0,Ht=null,l=Kf(i,null,u,l),i.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(ii(),u===d){i=gn(n,i,l);break e}ut(n,i,u,l)}i=i.child}return i;case 5:return Xf(i),n===null&&Iu(i),u=i.type,d=i.pendingProps,h=n!==null?n.memoizedProps:null,g=d.children,mu(u,d)?g=null:h!==null&&mu(u,h)&&(i.flags|=32),Op(n,i),ut(n,i,g,l),i.child;case 6:return n===null&&Iu(i),null;case 13:return bp(n,i,l);case 4:return Ou(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=si(i,null,u,l):ut(n,i,u,l),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:$t(u,d),Np(n,i,u,d,l);case 7:return ut(n,i,i.pendingProps,l),i.child;case 8:return ut(n,i,i.pendingProps.children,l),i.child;case 12:return ut(n,i,i.pendingProps.children,l),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,h=i.memoizedProps,g=d.value,Se(Zo,u._currentValue),u._currentValue=g,h!==null)if(Wt(h.value,g)){if(h.children===d.children&&!pt.current){i=gn(n,i,l);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var v=h.dependencies;if(v!==null){g=h.child;for(var E=v.firstContext;E!==null;){if(E.context===u){if(h.tag===1){E=mn(-1,l&-l),E.tag=2;var x=h.updateQueue;if(x!==null){x=x.shared;var F=x.pending;F===null?E.next=E:(E.next=F.next,F.next=E),x.pending=E}}h.lanes|=l,E=h.alternate,E!==null&&(E.lanes|=l),Pu(h.return,l,i),v.lanes|=l;break}E=E.next}}else if(h.tag===10)g=h.type===i.type?null:h.child;else if(h.tag===18){if(g=h.return,g===null)throw Error(t(341));g.lanes|=l,v=g.alternate,v!==null&&(v.lanes|=l),Pu(g,l,i),g=h.sibling}else g=h.child;if(g!==null)g.return=h;else for(g=h;g!==null;){if(g===i){g=null;break}if(h=g.sibling,h!==null){h.return=g.return,g=h;break}g=g.return}h=g}ut(n,i,d.children,l),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,li(i,l),d=Ot(d),u=u(d),i.flags|=1,ut(n,i,u,l),i.child;case 14:return u=i.type,d=$t(u,i.pendingProps),d=$t(u.type,d),Pp(n,i,u,d,l);case 15:return xp(n,i,i.type,i.pendingProps,l);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:$t(u,d),dl(n,i),i.tag=1,mt(u)?(n=!0,Ko(i)):n=!1,li(i,l),Ep(i,u,d),Vu(i,u,d,l),Qu(null,i,u,!0,n,l);case 19:return Up(n,i,l);case 22:return Ap(n,i,l)}throw Error(t(156,i.tag))};function am(n,i){return zh(n,i)}function eE(n,i,l,u){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(n,i,l,u){return new eE(n,i,l,u)}function mc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function tE(n){if(typeof n=="function")return mc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Nt)return 11;if(n===Pt)return 14}return 2}function Kn(n,i){var l=n.alternate;return l===null?(l=Mt(n.tag,i,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=i,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,i=n.dependencies,l.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Cl(n,i,l,u,d,h){var g=2;if(u=n,typeof n=="function")mc(n)&&(g=1);else if(typeof n=="string")g=5;else e:switch(n){case he:return Nr(l.children,d,h,i);case we:g=8,d|=8;break;case _e:return n=Mt(12,l,i,d|2),n.elementType=_e,n.lanes=h,n;case nt:return n=Mt(13,l,i,d),n.elementType=nt,n.lanes=h,n;case at:return n=Mt(19,l,i,d),n.elementType=at,n.lanes=h,n;case Pe:return Sl(l,d,h,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Me:g=10;break e;case Et:g=9;break e;case Nt:g=11;break e;case Pt:g=14;break e;case rt:g=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Mt(g,l,i,d),i.elementType=n,i.type=u,i.lanes=h,i}function Nr(n,i,l,u){return n=Mt(7,n,u,i),n.lanes=l,n}function Sl(n,i,l,u){return n=Mt(22,n,u,i),n.elementType=Pe,n.lanes=l,n.stateNode={isHidden:!1},n}function gc(n,i,l){return n=Mt(6,n,null,i),n.lanes=l,n}function _c(n,i,l){return i=Mt(4,n.children!==null?n.children:[],n.key,i),i.lanes=l,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function nE(n,i,l,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$a(0),this.expirationTimes=$a(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$a(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function yc(n,i,l,u,d,h,g,v,E){return n=new nE(n,i,l,v,E),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Mt(3,null,null,i),n.current=h,h.stateNode=n,h.memoizedState={element:u,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Au(h),n}function rE(n,i,l){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:re,key:u==null?null:""+u,children:n,containerInfo:i,implementation:l}}function um(n){if(!n)return Un;n=n._reactInternals;e:{if(gr(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(mt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(mt(l))return Ff(n,l,i)}return i}function cm(n,i,l,u,d,h,g,v,E){return n=yc(l,u,!0,n,d,h,g,v,E),n.context=um(null),l=n.current,u=ct(),d=Vn(l),h=mn(u,d),h.callback=i??null,Bn(l,h,d),n.current.lanes=d,Ki(n,d,u),yt(n,u),n}function Il(n,i,l,u){var d=i.current,h=ct(),g=Vn(d);return l=um(l),i.context===null?i.context=l:i.pendingContext=l,i=mn(h,g),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=Bn(d,i,g),n!==null&&(Kt(n,d,g,h),tl(n,d,g)),g}function kl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function dm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<i?l:i}}function vc(n,i){dm(n,i),(n=n.alternate)&&dm(n,i)}var hm=typeof reportError=="function"?reportError:function(n){console.error(n)};function wc(n){this._internalRoot=n}Tl.prototype.render=wc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Il(n,i,null,null)},Tl.prototype.unmount=wc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;kr(function(){Il(null,n,null,null)}),i[cn]=null}};function Tl(n){this._internalRoot=n}Tl.prototype.unstable_scheduleHydration=function(n){if(n){var i=qh();n={blockedOn:null,target:n,priority:i};for(var l=0;l<Ln.length&&i!==0&&i<Ln[l].priority;l++);Ln.splice(l,0,n),l===0&&Jh(n)}};function Ec(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Rl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function fm(){}function iE(n,i,l,u,d){if(d){if(typeof u=="function"){var h=u;u=function(){var x=kl(g);h.call(x)}}var g=cm(i,u,n,0,null,!1,!1,"",fm);return n._reactRootContainer=g,n[cn]=g.current,ls(n.nodeType===8?n.parentNode:n),kr(),g}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var v=u;u=function(){var x=kl(E);v.call(x)}}var E=yc(n,0,!1,null,null,!1,!1,"",fm);return n._reactRootContainer=E,n[cn]=E.current,ls(n.nodeType===8?n.parentNode:n),kr(function(){Il(i,E,l,u)}),E}function Nl(n,i,l,u,d){var h=l._reactRootContainer;if(h){var g=h;if(typeof d=="function"){var v=d;d=function(){var E=kl(g);v.call(E)}}Il(i,g,n,d)}else g=iE(l,i,n,d,u);return kl(g)}Gh=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var l=Gi(i.pendingLanes);l!==0&&(Va(i,l|1),yt(i,Ue()),!(fe&6)&&(hi=Ue()+500,jn()))}break;case 13:kr(function(){var u=pn(n,1);if(u!==null){var d=ct();Kt(u,n,1,d)}}),vc(n,1)}},Ga=function(n){if(n.tag===13){var i=pn(n,134217728);if(i!==null){var l=ct();Kt(i,n,134217728,l)}vc(n,134217728)}},Kh=function(n){if(n.tag===13){var i=Vn(n),l=pn(n,i);if(l!==null){var u=ct();Kt(l,n,i,u)}vc(n,i)}},qh=function(){return ye},Qh=function(n,i){var l=ye;try{return ye=n,i()}finally{ye=l}},Ua=function(n,i,l){switch(i){case"input":if(xa(n,l),i=l.name,l.type==="radio"&&i!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<l.length;i++){var u=l[i];if(u!==n&&u.form===n.form){var d=Vo(u);if(!d)throw Error(t(90));vh(u),xa(u,d)}}}break;case"textarea":Ih(n,l);break;case"select":i=l.value,i!=null&&Hr(n,!!l.multiple,i,!1)}},Lh=hc,Dh=kr;var sE={usingClientEntryPoint:!1,Events:[cs,Zr,Vo,Ah,Oh,hc]},Is={findFiberByHostInstance:_r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},oE={bundleType:Is.bundleType,version:Is.version,rendererPackageName:Is.rendererPackageName,rendererConfig:Is.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Uh(n),n===null?null:n.stateNode},findFiberByHostInstance:Is.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pl.isDisabled&&Pl.supportsFiber)try{To=Pl.inject(oE),Zt=Pl}catch{}}return vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sE,vt.createPortal=function(n,i){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ec(i))throw Error(t(200));return rE(n,i,null,l)},vt.createRoot=function(n,i){if(!Ec(n))throw Error(t(299));var l=!1,u="",d=hm;return i!=null&&(i.unstable_strictMode===!0&&(l=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=yc(n,1,!1,null,null,l,!1,u,d),n[cn]=i.current,ls(n.nodeType===8?n.parentNode:n),new wc(i)},vt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Uh(i),n=n===null?null:n.stateNode,n},vt.flushSync=function(n){return kr(n)},vt.hydrate=function(n,i,l){if(!Rl(i))throw Error(t(200));return Nl(null,n,i,!0,l)},vt.hydrateRoot=function(n,i,l){if(!Ec(n))throw Error(t(405));var u=l!=null&&l.hydratedSources||null,d=!1,h="",g=hm;if(l!=null&&(l.unstable_strictMode===!0&&(d=!0),l.identifierPrefix!==void 0&&(h=l.identifierPrefix),l.onRecoverableError!==void 0&&(g=l.onRecoverableError)),i=cm(i,null,n,1,l??null,d,!1,h,g),n[cn]=i.current,ls(n),u)for(n=0;n<u.length;n++)l=u[n],d=l._getVersion,d=d(l._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[l,d]:i.mutableSourceEagerHydrationData.push(l,d);return new Tl(i)},vt.render=function(n,i,l){if(!Rl(i))throw Error(t(200));return Nl(null,n,i,!1,l)},vt.unmountComponentAtNode=function(n){if(!Rl(n))throw Error(t(40));return n._reactRootContainer?(kr(function(){Nl(null,null,n,!1,function(){n._reactRootContainer=null,n[cn]=null})}),!0):!1},vt.unstable_batchedUpdates=hc,vt.unstable_renderSubtreeIntoContainer=function(n,i,l,u){if(!Rl(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Nl(n,i,l,!1,u)},vt.version="18.3.1-next-f1338f8080-20240426",vt}var Em;function yE(){if(Em)return Ic.exports;Em=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Ic.exports=_E(),Ic.exports}var Cm;function vE(){if(Cm)return Al;Cm=1;var r=yE();return Al.createRoot=r.createRoot,Al.hydrateRoot=r.hydrateRoot,Al}var wE=vE(),Ts={},Sm;function EE(){if(Sm)return Ts;Sm=1,Object.defineProperty(Ts,"__esModule",{value:!0}),Ts.parse=c,Ts.serialize=m;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,a=(()=>{const w=function(){};return w.prototype=Object.create(null),w})();function c(w,R){const I=new a,L=w.length;if(L<2)return I;const A=(R==null?void 0:R.decode)||y;let b=0;do{const H=w.indexOf("=",b);if(H===-1)break;const B=w.indexOf(";",b),ee=B===-1?L:B;if(H>ee){b=w.lastIndexOf(";",H-1)+1;continue}const se=f(w,b,H),re=p(w,H,se),he=w.slice(se,re);if(I[he]===void 0){let we=f(w,H+1,ee),_e=p(w,ee,we);const Me=A(w.slice(we,_e));I[he]=Me}b=ee+1}while(b<L);return I}function f(w,R,I){do{const L=w.charCodeAt(R);if(L!==32&&L!==9)return R}while(++R<I);return I}function p(w,R,I){for(;R>I;){const L=w.charCodeAt(--R);if(L!==32&&L!==9)return R+1}return I}function m(w,R,I){const L=(I==null?void 0:I.encode)||encodeURIComponent;if(!r.test(w))throw new TypeError(`argument name is invalid: ${w}`);const A=L(R);if(!e.test(A))throw new TypeError(`argument val is invalid: ${R}`);let b=w+"="+A;if(!I)return b;if(I.maxAge!==void 0){if(!Number.isInteger(I.maxAge))throw new TypeError(`option maxAge is invalid: ${I.maxAge}`);b+="; Max-Age="+I.maxAge}if(I.domain){if(!t.test(I.domain))throw new TypeError(`option domain is invalid: ${I.domain}`);b+="; Domain="+I.domain}if(I.path){if(!s.test(I.path))throw new TypeError(`option path is invalid: ${I.path}`);b+="; Path="+I.path}if(I.expires){if(!_(I.expires)||!Number.isFinite(I.expires.valueOf()))throw new TypeError(`option expires is invalid: ${I.expires}`);b+="; Expires="+I.expires.toUTCString()}if(I.httpOnly&&(b+="; HttpOnly"),I.secure&&(b+="; Secure"),I.partitioned&&(b+="; Partitioned"),I.priority)switch(typeof I.priority=="string"?I.priority.toLowerCase():void 0){case"low":b+="; Priority=Low";break;case"medium":b+="; Priority=Medium";break;case"high":b+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${I.priority}`)}if(I.sameSite)switch(typeof I.sameSite=="string"?I.sameSite.toLowerCase():I.sameSite){case!0:case"strict":b+="; SameSite=Strict";break;case"lax":b+="; SameSite=Lax";break;case"none":b+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${I.sameSite}`)}return b}function y(w){if(w.indexOf("%")===-1)return w;try{return decodeURIComponent(w)}catch{return w}}function _(w){return o.call(w)==="[object Date]"}return Ts}EE();/**
 * react-router v7.1.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Im="popstate";function CE(r={}){function e(s,o){let{pathname:a,search:c,hash:f}=s.location;return Hc("",{pathname:a,search:c,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:Ws(o)}return IE(e,t,null,r)}function Ae(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Yt(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function SE(){return Math.random().toString(36).substring(2,10)}function km(r,e){return{usr:r.state,key:r.key,idx:e}}function Hc(r,e,t=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Ni(e):e,state:t,key:e&&e.key||s||SE()}}function Ws({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function Ni(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function IE(r,e,t,s={}){let{window:o=document.defaultView,v5Compat:a=!1}=s,c=o.history,f="POP",p=null,m=y();m==null&&(m=0,c.replaceState({...c.state,idx:m},""));function y(){return(c.state||{idx:null}).idx}function _(){f="POP";let A=y(),b=A==null?null:A-m;m=A,p&&p({action:f,location:L.location,delta:b})}function w(A,b){f="PUSH";let H=Hc(L.location,A,b);m=y()+1;let B=km(H,m),ee=L.createHref(H);try{c.pushState(B,"",ee)}catch(se){if(se instanceof DOMException&&se.name==="DataCloneError")throw se;o.location.assign(ee)}a&&p&&p({action:f,location:L.location,delta:1})}function R(A,b){f="REPLACE";let H=Hc(L.location,A,b);m=y();let B=km(H,m),ee=L.createHref(H);c.replaceState(B,"",ee),a&&p&&p({action:f,location:L.location,delta:0})}function I(A){let b=o.location.origin!=="null"?o.location.origin:o.location.href,H=typeof A=="string"?A:Ws(A);return H=H.replace(/ $/,"%20"),Ae(b,`No window.location.(origin|href) available to create URL for href: ${H}`),new URL(H,b)}let L={get action(){return f},get location(){return r(o,c)},listen(A){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Im,_),p=A,()=>{o.removeEventListener(Im,_),p=null}},createHref(A){return e(o,A)},createURL:I,encodeLocation(A){let b=I(A);return{pathname:b.pathname,search:b.search,hash:b.hash}},push:w,replace:R,go(A){return c.go(A)}};return L}function Bg(r,e,t="/"){return kE(r,e,t,!1)}function kE(r,e,t,s){let o=typeof e=="string"?Ni(e):e,a=lr(o.pathname||"/",t);if(a==null)return null;let c=Wg(r);TE(c);let f=null;for(let p=0;f==null&&p<c.length;++p){let m=FE(a);f=ME(c[p],m,s)}return f}function Wg(r,e=[],t=[],s=""){let o=(a,c,f)=>{let p={relativePath:f===void 0?a.path||"":f,caseSensitive:a.caseSensitive===!0,childrenIndex:c,route:a};p.relativePath.startsWith("/")&&(Ae(p.relativePath.startsWith(s),`Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(s.length));let m=Cn([s,p.relativePath]),y=t.concat(p);a.children&&a.children.length>0&&(Ae(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Wg(a.children,e,y,m)),!(a.path==null&&!a.index)&&e.push({path:m,score:LE(m,a.index),routesMeta:y})};return r.forEach((a,c)=>{var f;if(a.path===""||!((f=a.path)!=null&&f.includes("?")))o(a,c);else for(let p of Hg(a.path))o(a,c,p)}),e}function Hg(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),a=t.replace(/\?$/,"");if(s.length===0)return o?[a,""]:[a];let c=Hg(s.join("/")),f=[];return f.push(...c.map(p=>p===""?a:[a,p].join("/"))),o&&f.push(...c),f.map(p=>r.startsWith("/")&&p===""?"/":p)}function TE(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:DE(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var RE=/^:[\w-]+$/,NE=3,PE=2,xE=1,AE=10,OE=-2,Tm=r=>r==="*";function LE(r,e){let t=r.split("/"),s=t.length;return t.some(Tm)&&(s+=OE),e&&(s+=PE),t.filter(o=>!Tm(o)).reduce((o,a)=>o+(RE.test(a)?NE:a===""?xE:AE),s)}function DE(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function ME(r,e,t=!1){let{routesMeta:s}=r,o={},a="/",c=[];for(let f=0;f<s.length;++f){let p=s[f],m=f===s.length-1,y=a==="/"?e:e.slice(a.length)||"/",_=Hl({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},y),w=p.route;if(!_&&m&&t&&!s[s.length-1].route.index&&(_=Hl({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},y)),!_)return null;Object.assign(o,_.params),c.push({params:o,pathname:Cn([a,_.pathname]),pathnameBase:BE(Cn([a,_.pathnameBase])),route:w}),_.pathnameBase!=="/"&&(a=Cn([a,_.pathnameBase]))}return c}function Hl(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=bE(r.path,r.caseSensitive,r.end),o=e.match(t);if(!o)return null;let a=o[0],c=a.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:s.reduce((m,{paramName:y,isOptional:_},w)=>{if(y==="*"){let I=f[w]||"";c=a.slice(0,a.length-I.length).replace(/(.)\/+$/,"$1")}const R=f[w];return _&&!R?m[y]=void 0:m[y]=(R||"").replace(/%2F/g,"/"),m},{}),pathname:a,pathnameBase:c,pattern:r}}function bE(r,e=!1,t=!0){Yt(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,p)=>(s.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function FE(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Yt(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function lr(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}function UE(r,e="/"){let{pathname:t,search:s="",hash:o=""}=typeof r=="string"?Ni(r):r;return{pathname:t?t.startsWith("/")?t:jE(t,e):e,search:WE(s),hash:HE(o)}}function jE(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Rc(r,e,t,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function zE(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function md(r){let e=zE(r);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function gd(r,e,t,s=!1){let o;typeof r=="string"?o=Ni(r):(o={...r},Ae(!o.pathname||!o.pathname.includes("?"),Rc("?","pathname","search",o)),Ae(!o.pathname||!o.pathname.includes("#"),Rc("#","pathname","hash",o)),Ae(!o.search||!o.search.includes("#"),Rc("#","search","hash",o)));let a=r===""||o.pathname==="",c=a?"/":o.pathname,f;if(c==null)f=t;else{let _=e.length-1;if(!s&&c.startsWith("..")){let w=c.split("/");for(;w[0]==="..";)w.shift(),_-=1;o.pathname=w.join("/")}f=_>=0?e[_]:"/"}let p=UE(o,f),m=c&&c!=="/"&&c.endsWith("/"),y=(a||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(m||y)&&(p.pathname+="/"),p}var Cn=r=>r.join("/").replace(/\/\/+/g,"/"),BE=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),WE=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,HE=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function $E(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var $g=["POST","PUT","PATCH","DELETE"];new Set($g);var VE=["GET",...$g];new Set(VE);var Pi=N.createContext(null);Pi.displayName="DataRouter";var da=N.createContext(null);da.displayName="DataRouterState";var Vg=N.createContext({isTransitioning:!1});Vg.displayName="ViewTransition";var GE=N.createContext(new Map);GE.displayName="Fetchers";var KE=N.createContext(null);KE.displayName="Await";var Xt=N.createContext(null);Xt.displayName="Navigation";var ro=N.createContext(null);ro.displayName="Location";var an=N.createContext({outlet:null,matches:[],isDataRoute:!1});an.displayName="Route";var _d=N.createContext(null);_d.displayName="RouteError";function qE(r,{relative:e}={}){Ae(xi(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=N.useContext(Xt),{hash:o,pathname:a,search:c}=so(r,{relative:e}),f=a;return t!=="/"&&(f=a==="/"?t:Cn([t,a])),s.createHref({pathname:f,search:c,hash:o})}function xi(){return N.useContext(ro)!=null}function hr(){return Ae(xi(),"useLocation() may be used only in the context of a <Router> component."),N.useContext(ro).location}var Gg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Kg(r){N.useContext(Xt).static||N.useLayoutEffect(r)}function io(){let{isDataRoute:r}=N.useContext(an);return r?lC():QE()}function QE(){Ae(xi(),"useNavigate() may be used only in the context of a <Router> component.");let r=N.useContext(Pi),{basename:e,navigator:t}=N.useContext(Xt),{matches:s}=N.useContext(an),{pathname:o}=hr(),a=JSON.stringify(md(s)),c=N.useRef(!1);return Kg(()=>{c.current=!0}),N.useCallback((p,m={})=>{if(Yt(c.current,Gg),!c.current)return;if(typeof p=="number"){t.go(p);return}let y=gd(p,JSON.parse(a),o,m.relative==="path");r==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:Cn([e,y.pathname])),(m.replace?t.replace:t.push)(y,m.state,m)},[e,t,a,o,r])}N.createContext(null);function so(r,{relative:e}={}){let{matches:t}=N.useContext(an),{pathname:s}=hr(),o=JSON.stringify(md(t));return N.useMemo(()=>gd(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function YE(r,e){return qg(r,e)}function qg(r,e,t,s){var H;Ae(xi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:a}=N.useContext(Xt),{matches:c}=N.useContext(an),f=c[c.length-1],p=f?f.params:{},m=f?f.pathname:"/",y=f?f.pathnameBase:"/",_=f&&f.route;{let B=_&&_.path||"";Qg(m,!_||B.endsWith("*")||B.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${B}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${B}"> to <Route path="${B==="/"?"*":`${B}/*`}">.`)}let w=hr(),R;if(e){let B=typeof e=="string"?Ni(e):e;Ae(y==="/"||((H=B.pathname)==null?void 0:H.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${B.pathname}" was given in the \`location\` prop.`),R=B}else R=w;let I=R.pathname||"/",L=I;if(y!=="/"){let B=y.replace(/^\//,"").split("/");L="/"+I.replace(/^\//,"").split("/").slice(B.length).join("/")}let A=!a&&t&&t.matches&&t.matches.length>0?t.matches:Bg(r,{pathname:L});Yt(_||A!=null,`No routes matched location "${R.pathname}${R.search}${R.hash}" `),Yt(A==null||A[A.length-1].route.element!==void 0||A[A.length-1].route.Component!==void 0||A[A.length-1].route.lazy!==void 0,`Matched leaf route at location "${R.pathname}${R.search}${R.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let b=tC(A&&A.map(B=>Object.assign({},B,{params:Object.assign({},p,B.params),pathname:Cn([y,o.encodeLocation?o.encodeLocation(B.pathname).pathname:B.pathname]),pathnameBase:B.pathnameBase==="/"?y:Cn([y,o.encodeLocation?o.encodeLocation(B.pathnameBase).pathname:B.pathnameBase])})),c,t,s);return e&&b?N.createElement(ro.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...R},navigationType:"POP"}},b):b}function JE(){let r=oC(),e=$E(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},a={padding:"2px 4px",backgroundColor:s},c=null;return console.error("Error handled by React Router default ErrorBoundary:",r),c=N.createElement(N.Fragment,null,N.createElement("p",null,"💿 Hey developer 👋"),N.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",N.createElement("code",{style:a},"ErrorBoundary")," or"," ",N.createElement("code",{style:a},"errorElement")," prop on your route.")),N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},e),t?N.createElement("pre",{style:o},t):null,c)}var XE=N.createElement(JE,null),ZE=class extends N.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?N.createElement(an.Provider,{value:this.props.routeContext},N.createElement(_d.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function eC({routeContext:r,match:e,children:t}){let s=N.useContext(Pi);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),N.createElement(an.Provider,{value:r},t)}function tC(r,e=[],t=null,s=null){if(r==null){if(!t)return null;if(t.errors)r=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let o=r,a=t==null?void 0:t.errors;if(a!=null){let p=o.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id])!==void 0);Ae(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let c=!1,f=-1;if(t)for(let p=0;p<o.length;p++){let m=o[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(f=p),m.route.id){let{loaderData:y,errors:_}=t,w=m.route.loader&&!y.hasOwnProperty(m.route.id)&&(!_||_[m.route.id]===void 0);if(m.route.lazy||w){c=!0,f>=0?o=o.slice(0,f+1):o=[o[0]];break}}}return o.reduceRight((p,m,y)=>{let _,w=!1,R=null,I=null;t&&(_=a&&m.route.id?a[m.route.id]:void 0,R=m.route.errorElement||XE,c&&(f<0&&y===0?(Qg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,I=null):f===y&&(w=!0,I=m.route.hydrateFallbackElement||null)));let L=e.concat(o.slice(0,y+1)),A=()=>{let b;return _?b=R:w?b=I:m.route.Component?b=N.createElement(m.route.Component,null):m.route.element?b=m.route.element:b=p,N.createElement(eC,{match:m,routeContext:{outlet:p,matches:L,isDataRoute:t!=null},children:b})};return t&&(m.route.ErrorBoundary||m.route.errorElement||y===0)?N.createElement(ZE,{location:t.location,revalidation:t.revalidation,component:R,error:_,children:A(),routeContext:{outlet:null,matches:L,isDataRoute:!0}}):A()},null)}function yd(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function nC(r){let e=N.useContext(Pi);return Ae(e,yd(r)),e}function rC(r){let e=N.useContext(da);return Ae(e,yd(r)),e}function iC(r){let e=N.useContext(an);return Ae(e,yd(r)),e}function vd(r){let e=iC(r),t=e.matches[e.matches.length-1];return Ae(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function sC(){return vd("useRouteId")}function oC(){var s;let r=N.useContext(_d),e=rC("useRouteError"),t=vd("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[t]}function lC(){let{router:r}=nC("useNavigate"),e=vd("useNavigate"),t=N.useRef(!1);return Kg(()=>{t.current=!0}),N.useCallback(async(o,a={})=>{Yt(t.current,Gg),t.current&&(typeof o=="number"?r.navigate(o):await r.navigate(o,{fromRouteId:e,...a}))},[r,e])}var Rm={};function Qg(r,e,t){!e&&!Rm[r]&&(Rm[r]=!0,Yt(!1,t))}N.memo(aC);function aC({routes:r,future:e,state:t}){return qg(r,void 0,t,e)}function Yg({to:r,replace:e,state:t,relative:s}){Ae(xi(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=N.useContext(Xt);Yt(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:a}=N.useContext(an),{pathname:c}=hr(),f=io(),p=gd(r,md(a),c,s==="path"),m=JSON.stringify(p);return N.useEffect(()=>{f(JSON.parse(m),{replace:e,state:t,relative:s})},[f,m,s,e,t]),null}function Yn(r){Ae(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function uC({basename:r="/",children:e=null,location:t,navigationType:s="POP",navigator:o,static:a=!1}){Ae(!xi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=r.replace(/^\/*/,"/"),f=N.useMemo(()=>({basename:c,navigator:o,static:a,future:{}}),[c,o,a]);typeof t=="string"&&(t=Ni(t));let{pathname:p="/",search:m="",hash:y="",state:_=null,key:w="default"}=t,R=N.useMemo(()=>{let I=lr(p,c);return I==null?null:{location:{pathname:I,search:m,hash:y,state:_,key:w},navigationType:s}},[c,p,m,y,_,w,s]);return Yt(R!=null,`<Router basename="${c}"> is not able to match the URL "${p}${m}${y}" because it does not start with the basename, so the <Router> won't render anything.`),R==null?null:N.createElement(Xt.Provider,{value:f},N.createElement(ro.Provider,{children:e,value:R}))}function cC({children:r,location:e}){return YE($c(r),e)}function $c(r,e=[]){let t=[];return N.Children.forEach(r,(s,o)=>{if(!N.isValidElement(s))return;let a=[...e,o];if(s.type===N.Fragment){t.push.apply(t,$c(s.props.children,a));return}Ae(s.type===Yn,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ae(!s.props.index||!s.props.children,"An index route cannot have child routes.");let c={id:s.props.id||a.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=$c(s.props.children,a)),t.push(c)}),t}var bl="get",Fl="application/x-www-form-urlencoded";function ha(r){return r!=null&&typeof r.tagName=="string"}function dC(r){return ha(r)&&r.tagName.toLowerCase()==="button"}function hC(r){return ha(r)&&r.tagName.toLowerCase()==="form"}function fC(r){return ha(r)&&r.tagName.toLowerCase()==="input"}function pC(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function mC(r,e){return r.button===0&&(!e||e==="_self")&&!pC(r)}var Ol=null;function gC(){if(Ol===null)try{new FormData(document.createElement("form"),0),Ol=!1}catch{Ol=!0}return Ol}var _C=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Nc(r){return r!=null&&!_C.has(r)?(Yt(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Fl}"`),null):r}function yC(r,e){let t,s,o,a,c;if(hC(r)){let f=r.getAttribute("action");s=f?lr(f,e):null,t=r.getAttribute("method")||bl,o=Nc(r.getAttribute("enctype"))||Fl,a=new FormData(r)}else if(dC(r)||fC(r)&&(r.type==="submit"||r.type==="image")){let f=r.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=r.getAttribute("formaction")||f.getAttribute("action");if(s=p?lr(p,e):null,t=r.getAttribute("formmethod")||f.getAttribute("method")||bl,o=Nc(r.getAttribute("formenctype"))||Nc(f.getAttribute("enctype"))||Fl,a=new FormData(f,r),!gC()){let{name:m,type:y,value:_}=r;if(y==="image"){let w=m?`${m}.`:"";a.append(`${w}x`,"0"),a.append(`${w}y`,"0")}else m&&a.append(m,_)}}else{if(ha(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=bl,s=null,o=Fl,c=r}return a&&o==="text/plain"&&(c=a,a=void 0),{action:s,method:t.toLowerCase(),encType:o,formData:a,body:c}}function wd(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}async function vC(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function wC(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function EC(r,e,t){let s=await Promise.all(r.map(async o=>{let a=e.routes[o.route.id];if(a){let c=await vC(a,t);return c.links?c.links():[]}return[]}));return kC(s.flat(1).filter(wC).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Nm(r,e,t,s,o,a){let c=(p,m)=>t[m]?p.route.id!==t[m].route.id:!0,f=(p,m)=>{var y;return t[m].pathname!==p.pathname||((y=t[m].route.path)==null?void 0:y.endsWith("*"))&&t[m].params["*"]!==p.params["*"]};return a==="assets"?e.filter((p,m)=>c(p,m)||f(p,m)):a==="data"?e.filter((p,m)=>{var _;let y=s.routes[p.route.id];if(!y||!y.hasLoader)return!1;if(c(p,m)||f(p,m))return!0;if(p.route.shouldRevalidate){let w=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((_=t[0])==null?void 0:_.params)||{},nextUrl:new URL(r,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function CC(r,e){return SC(r.map(t=>{let s=e.routes[t.route.id];if(!s)return[];let o=[s.module];return s.imports&&(o=o.concat(s.imports)),o}).flat(1))}function SC(r){return[...new Set(r)]}function IC(r){let e={},t=Object.keys(r).sort();for(let s of t)e[s]=r[s];return e}function kC(r,e){let t=new Set;return new Set(e),r.reduce((s,o)=>{let a=JSON.stringify(IC(o));return t.has(a)||(t.add(a),s.push({key:a,link:o})),s},[])}function TC(r){let e=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function RC(){let r=N.useContext(Pi);return wd(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function NC(){let r=N.useContext(da);return wd(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Ed=N.createContext(void 0);Ed.displayName="FrameworkContext";function Jg(){let r=N.useContext(Ed);return wd(r,"You must render this element inside a <HydratedRouter> element"),r}function PC(r,e){let t=N.useContext(Ed),[s,o]=N.useState(!1),[a,c]=N.useState(!1),{onFocus:f,onBlur:p,onMouseEnter:m,onMouseLeave:y,onTouchStart:_}=e,w=N.useRef(null);N.useEffect(()=>{if(r==="render"&&c(!0),r==="viewport"){let L=b=>{b.forEach(H=>{c(H.isIntersecting)})},A=new IntersectionObserver(L,{threshold:.5});return w.current&&A.observe(w.current),()=>{A.disconnect()}}},[r]),N.useEffect(()=>{if(s){let L=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(L)}}},[s]);let R=()=>{o(!0)},I=()=>{o(!1),c(!1)};return t?r!=="intent"?[a,w,{}]:[a,w,{onFocus:Rs(f,R),onBlur:Rs(p,I),onMouseEnter:Rs(m,R),onMouseLeave:Rs(y,I),onTouchStart:Rs(_,R)}]:[!1,w,{}]}function Rs(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function xC({page:r,...e}){let{router:t}=RC(),s=N.useMemo(()=>Bg(t.routes,r,t.basename),[t.routes,r,t.basename]);return s?N.createElement(OC,{page:r,matches:s,...e}):null}function AC(r){let{manifest:e,routeModules:t}=Jg(),[s,o]=N.useState([]);return N.useEffect(()=>{let a=!1;return EC(r,e,t).then(c=>{a||o(c)}),()=>{a=!0}},[r,e,t]),s}function OC({page:r,matches:e,...t}){let s=hr(),{manifest:o,routeModules:a}=Jg(),{loaderData:c,matches:f}=NC(),p=N.useMemo(()=>Nm(r,e,f,o,s,"data"),[r,e,f,o,s]),m=N.useMemo(()=>Nm(r,e,f,o,s,"assets"),[r,e,f,o,s]),y=N.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let R=new Set,I=!1;if(e.forEach(A=>{var H;let b=o.routes[A.route.id];!b||!b.hasLoader||(!p.some(B=>B.route.id===A.route.id)&&A.route.id in c&&((H=a[A.route.id])!=null&&H.shouldRevalidate)||b.hasClientLoader?I=!0:R.add(A.route.id))}),R.size===0)return[];let L=TC(r);return I&&R.size>0&&L.searchParams.set("_routes",e.filter(A=>R.has(A.route.id)).map(A=>A.route.id).join(",")),[L.pathname+L.search]},[c,s,o,p,e,r,a]),_=N.useMemo(()=>CC(m,o),[m,o]),w=AC(m);return N.createElement(N.Fragment,null,y.map(R=>N.createElement("link",{key:R,rel:"prefetch",as:"fetch",href:R,...t})),_.map(R=>N.createElement("link",{key:R,rel:"modulepreload",href:R,...t})),w.map(({key:R,link:I})=>N.createElement("link",{key:R,...I})))}function LC(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var Xg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Xg&&(window.__reactRouterVersion="7.1.5")}catch{}function DC({basename:r,children:e,window:t}){let s=N.useRef();s.current==null&&(s.current=CE({window:t,v5Compat:!0}));let o=s.current,[a,c]=N.useState({action:o.action,location:o.location}),f=N.useCallback(p=>{N.startTransition(()=>c(p))},[c]);return N.useLayoutEffect(()=>o.listen(f),[o,f]),N.createElement(uC,{basename:r,children:e,location:a.location,navigationType:a.action,navigator:o})}var Zg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ar=N.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:o,reloadDocument:a,replace:c,state:f,target:p,to:m,preventScrollReset:y,viewTransition:_,...w},R){let{basename:I}=N.useContext(Xt),L=typeof m=="string"&&Zg.test(m),A,b=!1;if(typeof m=="string"&&L&&(A=m,Xg))try{let _e=new URL(window.location.href),Me=m.startsWith("//")?new URL(_e.protocol+m):new URL(m),Et=lr(Me.pathname,I);Me.origin===_e.origin&&Et!=null?m=Et+Me.search+Me.hash:b=!0}catch{Yt(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let H=qE(m,{relative:o}),[B,ee,se]=PC(s,w),re=UC(m,{replace:c,state:f,target:p,preventScrollReset:y,relative:o,viewTransition:_});function he(_e){e&&e(_e),_e.defaultPrevented||re(_e)}let we=N.createElement("a",{...w,...se,href:A||H,onClick:b||a?e:he,ref:LC(R,ee),target:p,"data-discover":!L&&t==="render"?"true":void 0});return B&&!L?N.createElement(N.Fragment,null,we,N.createElement(xC,{page:H})):we});Ar.displayName="Link";var MC=N.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:o=!1,style:a,to:c,viewTransition:f,children:p,...m},y){let _=so(c,{relative:m.relative}),w=hr(),R=N.useContext(da),{navigator:I,basename:L}=N.useContext(Xt),A=R!=null&&HC(_)&&f===!0,b=I.encodeLocation?I.encodeLocation(_).pathname:_.pathname,H=w.pathname,B=R&&R.navigation&&R.navigation.location?R.navigation.location.pathname:null;t||(H=H.toLowerCase(),B=B?B.toLowerCase():null,b=b.toLowerCase()),B&&L&&(B=lr(B,L)||B);const ee=b!=="/"&&b.endsWith("/")?b.length-1:b.length;let se=H===b||!o&&H.startsWith(b)&&H.charAt(ee)==="/",re=B!=null&&(B===b||!o&&B.startsWith(b)&&B.charAt(b.length)==="/"),he={isActive:se,isPending:re,isTransitioning:A},we=se?e:void 0,_e;typeof s=="function"?_e=s(he):_e=[s,se?"active":null,re?"pending":null,A?"transitioning":null].filter(Boolean).join(" ");let Me=typeof a=="function"?a(he):a;return N.createElement(Ar,{...m,"aria-current":we,className:_e,ref:y,style:Me,to:c,viewTransition:f},typeof p=="function"?p(he):p)});MC.displayName="NavLink";var bC=N.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:o,state:a,method:c=bl,action:f,onSubmit:p,relative:m,preventScrollReset:y,viewTransition:_,...w},R)=>{let I=BC(),L=WC(f,{relative:m}),A=c.toLowerCase()==="get"?"get":"post",b=typeof f=="string"&&Zg.test(f),H=B=>{if(p&&p(B),B.defaultPrevented)return;B.preventDefault();let ee=B.nativeEvent.submitter,se=(ee==null?void 0:ee.getAttribute("formmethod"))||c;I(ee||B.currentTarget,{fetcherKey:e,method:se,navigate:t,replace:o,state:a,relative:m,preventScrollReset:y,viewTransition:_})};return N.createElement("form",{ref:R,method:A,action:L,onSubmit:s?p:H,...w,"data-discover":!b&&r==="render"?"true":void 0})});bC.displayName="Form";function FC(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function e_(r){let e=N.useContext(Pi);return Ae(e,FC(r)),e}function UC(r,{target:e,replace:t,state:s,preventScrollReset:o,relative:a,viewTransition:c}={}){let f=io(),p=hr(),m=so(r,{relative:a});return N.useCallback(y=>{if(mC(y,e)){y.preventDefault();let _=t!==void 0?t:Ws(p)===Ws(m);f(r,{replace:_,state:s,preventScrollReset:o,relative:a,viewTransition:c})}},[p,f,m,t,s,e,r,o,a,c])}var jC=0,zC=()=>`__${String(++jC)}__`;function BC(){let{router:r}=e_("useSubmit"),{basename:e}=N.useContext(Xt),t=sC();return N.useCallback(async(s,o={})=>{let{action:a,method:c,encType:f,formData:p,body:m}=yC(s,e);if(o.navigate===!1){let y=o.fetcherKey||zC();await r.fetch(y,t,o.action||a,{preventScrollReset:o.preventScrollReset,formData:p,body:m,formMethod:o.method||c,formEncType:o.encType||f,flushSync:o.flushSync})}else await r.navigate(o.action||a,{preventScrollReset:o.preventScrollReset,formData:p,body:m,formMethod:o.method||c,formEncType:o.encType||f,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,e,t])}function WC(r,{relative:e}={}){let{basename:t}=N.useContext(Xt),s=N.useContext(an);Ae(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),a={...so(r||".",{relative:e})},c=hr();if(r==null){a.search=c.search;let f=new URLSearchParams(a.search),p=f.getAll("index");if(p.some(y=>y==="")){f.delete("index"),p.filter(_=>_).forEach(_=>f.append("index",_));let y=f.toString();a.search=y?`?${y}`:""}}return(!r||r===".")&&o.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(a.pathname=a.pathname==="/"?t:Cn([t,a.pathname])),Ws(a)}function HC(r,e={}){let t=N.useContext(Vg);Ae(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=e_("useViewTransitionState"),o=so(r,{relative:e.relative});if(!t.isTransitioning)return!1;let a=lr(t.currentLocation.pathname,s)||t.currentLocation.pathname,c=lr(t.nextLocation.pathname,s)||t.nextLocation.pathname;return Hl(o.pathname,c)!=null||Hl(o.pathname,a)!=null}new TextEncoder;var Sn=(r=>(r.ADMIN="ADMIN",r.USER="USER",r))(Sn||{}),Pm={};/**
 * @license
 * Copyright 2017 Google LLC
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
 */const t_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
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
 */const z=function(r,e){if(!r)throw Ai(e)},Ai=function(r){return new Error("Firebase Database ("+t_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
 * @license
 * Copyright 2017 Google LLC
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
 */const n_=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},$C=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const a=r[t++];e[s++]=String.fromCharCode((o&31)<<6|a&63)}else if(o>239&&o<365){const a=r[t++],c=r[t++],f=r[t++],p=((o&7)<<18|(a&63)<<12|(c&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const a=r[t++],c=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(a&63)<<6|c&63)}}return e.join("")},Cd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const a=r[o],c=o+1<r.length,f=c?r[o+1]:0,p=o+2<r.length,m=p?r[o+2]:0,y=a>>2,_=(a&3)<<4|f>>4;let w=(f&15)<<2|m>>6,R=m&63;p||(R=64,c||(w=64)),s.push(t[y],t[_],t[w],t[R])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(n_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):$C(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const a=t[r.charAt(o++)],f=o<r.length?t[r.charAt(o)]:0;++o;const m=o<r.length?t[r.charAt(o)]:64;++o;const _=o<r.length?t[r.charAt(o)]:64;if(++o,a==null||f==null||m==null||_==null)throw new VC;const w=a<<2|f>>4;if(s.push(w),m!==64){const R=f<<4&240|m>>2;if(s.push(R),_!==64){const I=m<<6&192|_;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class VC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const r_=function(r){const e=n_(r);return Cd.encodeByteArray(e,!0)},$l=function(r){return r_(r).replace(/\./g,"")},Vl=function(r){try{return Cd.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
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
 */function GC(r){return i_(void 0,r)}function i_(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!KC(t)||(r[t]=i_(r[t],e[t]));return r}function KC(r){return r!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
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
 */function qC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const QC=()=>qC().__FIREBASE_DEFAULTS__,YC=()=>{if(typeof process>"u"||typeof Pm>"u")return;const r=Pm.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},JC=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Vl(r[1]);return e&&JSON.parse(e)},Sd=()=>{try{return QC()||YC()||JC()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},s_=r=>{var e,t;return(t=(e=Sd())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},XC=r=>{const e=s_(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},o_=()=>{var r;return(r=Sd())===null||r===void 0?void 0:r.config},l_=r=>{var e;return(e=Sd())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class oo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function ZC(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,a=r.sub||r.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},r);return[$l(JSON.stringify(t)),$l(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Id(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())}function eS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function tS(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function a_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nS(){const r=ft();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function rS(){return t_.NODE_ADMIN===!0}function iS(){try{return typeof indexedDB=="object"}catch{return!1}}function sS(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var a;e(((a=o.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const oS="FirebaseError";class fr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=oS,Object.setPrototypeOf(this,fr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lo.prototype.create)}}class lo{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,a=this.errors[e],c=a?lS(a,s):"Error",f=`${this.serviceName}: ${c} (${o}).`;return new fr(o,f,s)}}function lS(r,e){return r.replace(aS,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const aS=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Hs(r){return JSON.parse(r)}function $e(r){return JSON.stringify(r)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const u_=function(r){let e={},t={},s={},o="";try{const a=r.split(".");e=Hs(Vl(a[0])||""),t=Hs(Vl(a[1])||""),o=a[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:o}},uS=function(r){const e=u_(r),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},cS=function(r){const e=u_(r).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
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
 */function un(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function wi(r,e){if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}function Vc(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Gl(r,e,t){const s={};for(const o in r)Object.prototype.hasOwnProperty.call(r,o)&&(s[o]=e.call(t,r[o],o,r));return s}function Kl(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const a=r[o],c=e[o];if(xm(a)&&xm(c)){if(!Kl(a,c))return!1}else if(a!==c)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function xm(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Oi(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ds(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,a]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(a)}}),e}function Ms(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class dS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let _=0;_<16;_++)s[_]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let _=0;_<16;_++)s[_]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let _=16;_<80;_++){const w=s[_-3]^s[_-8]^s[_-14]^s[_-16];s[_]=(w<<1|w>>>31)&4294967295}let o=this.chain_[0],a=this.chain_[1],c=this.chain_[2],f=this.chain_[3],p=this.chain_[4],m,y;for(let _=0;_<80;_++){_<40?_<20?(m=f^a&(c^f),y=1518500249):(m=a^c^f,y=1859775393):_<60?(m=a&c|f&(a|c),y=2400959708):(m=a^c^f,y=3395469782);const w=(o<<5|o>>>27)+m+p+y+s[_]&4294967295;p=f,f=c,c=(a<<30|a>>>2)&4294967295,a=o,o=w}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let o=0;const a=this.buf_;let c=this.inbuf_;for(;o<t;){if(c===0)for(;o<=s;)this.compress_(e,o),o+=this.blockSize;if(typeof e=="string"){for(;o<t;)if(a[c]=e.charCodeAt(o),++c,++o,c===this.blockSize){this.compress_(a),c=0;break}}else for(;o<t;)if(a[c]=e[o],++c,++o,c===this.blockSize){this.compress_(a),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let o=0;o<5;o++)for(let a=24;a>=0;a-=8)e[s]=this.chain_[o]>>a&255,++s;return e}}function hS(r,e){const t=new fS(r,e);return t.subscribe.bind(t)}class fS{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");pS(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Pc),o.error===void 0&&(o.error=Pc),o.complete===void 0&&(o.complete=Pc);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pS(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Pc(){}function fa(r,e){return`${r} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const mS=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);if(o>=55296&&o<=56319){const a=o-55296;s++,z(s<r.length,"Surrogate pair missing trail surrogate.");const c=r.charCodeAt(s)-56320;o=65536+(a<<10)+c}o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):o<65536?(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},pa=function(r){let e=0;for(let t=0;t<r.length;t++){const s=r.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
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
 */function tt(r){return r&&r._delegate?r._delegate:r}class Dr{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Pr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
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
 */class gS{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new oo;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(a){if(o)return null;throw a}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yS(e))try{this.getOrInitializeService({instanceIdentifier:Pr})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:o});s.resolve(a)}catch{}}}}clearInstance(e=Pr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pr){return this.instances.has(e)}getOptions(e=Pr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[a,c]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(a);s===f&&c.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),a=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;a.add(e),this.onInitCallbacks.set(o,a);const c=this.instances.get(o);return c&&e(c,o),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:_S(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Pr){return this.component?this.component.multipleInstances?e:Pr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _S(r){return r===Pr?void 0:r}function yS(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class vS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new gS(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var Ce;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ce||(Ce={}));const wS={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},ES=Ce.INFO,CS={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},SS=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=CS[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};let kd=class{constructor(e){this.name=e,this._logLevel=ES,this._logHandler=SS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}};const IS=(r,e)=>e.some(t=>r instanceof t);let Am,Om;function kS(){return Am||(Am=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function TS(){return Om||(Om=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const c_=new WeakMap,Gc=new WeakMap,d_=new WeakMap,xc=new WeakMap,Td=new WeakMap;function RS(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",a),r.removeEventListener("error",c)},a=()=>{t(nr(r.result)),o()},c=()=>{s(r.error),o()};r.addEventListener("success",a),r.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&c_.set(t,r)}).catch(()=>{}),Td.set(e,r),e}function NS(r){if(Gc.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",a),r.removeEventListener("error",c),r.removeEventListener("abort",c)},a=()=>{t(),o()},c=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",a),r.addEventListener("error",c),r.addEventListener("abort",c)});Gc.set(r,e)}let Kc={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Gc.get(r);if(e==="objectStoreNames")return r.objectStoreNames||d_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return nr(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function PS(r){Kc=r(Kc)}function xS(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(Ac(this),e,...t);return d_.set(s,e.sort?e.sort():[e]),nr(s)}:TS().includes(r)?function(...e){return r.apply(Ac(this),e),nr(c_.get(this))}:function(...e){return nr(r.apply(Ac(this),e))}}function AS(r){return typeof r=="function"?xS(r):(r instanceof IDBTransaction&&NS(r),IS(r,kS())?new Proxy(r,Kc):r)}function nr(r){if(r instanceof IDBRequest)return RS(r);if(xc.has(r))return xc.get(r);const e=AS(r);return e!==r&&(xc.set(r,e),Td.set(e,r)),e}const Ac=r=>Td.get(r);function OS(r,e,{blocked:t,upgrade:s,blocking:o,terminated:a}={}){const c=indexedDB.open(r,e),f=nr(c);return s&&c.addEventListener("upgradeneeded",p=>{s(nr(c.result),p.oldVersion,p.newVersion,nr(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),f.then(p=>{a&&p.addEventListener("close",()=>a()),o&&p.addEventListener("versionchange",m=>o(m.oldVersion,m.newVersion,m))}).catch(()=>{}),f}const LS=["get","getKey","getAll","getAllKeys","count"],DS=["put","add","delete","clear"],Oc=new Map;function Lm(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Oc.get(e))return Oc.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=DS.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||LS.includes(t)))return;const a=async function(c,...f){const p=this.transaction(c,o?"readwrite":"readonly");let m=p.store;return s&&(m=m.index(f.shift())),(await Promise.all([m[t](...f),o&&p.done]))[0]};return Oc.set(e,a),a}PS(r=>({...r,get:(e,t,s)=>Lm(e,t)||r.get(e,t,s),has:(e,t)=>!!Lm(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
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
 */class MS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(bS(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function bS(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qc="@firebase/app",Dm="0.11.1";/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Tn=new kd("@firebase/app"),FS="@firebase/app-compat",US="@firebase/analytics-compat",jS="@firebase/analytics",zS="@firebase/app-check-compat",BS="@firebase/app-check",WS="@firebase/auth",HS="@firebase/auth-compat",$S="@firebase/database",VS="@firebase/data-connect",GS="@firebase/database-compat",KS="@firebase/functions",qS="@firebase/functions-compat",QS="@firebase/installations",YS="@firebase/installations-compat",JS="@firebase/messaging",XS="@firebase/messaging-compat",ZS="@firebase/performance",eI="@firebase/performance-compat",tI="@firebase/remote-config",nI="@firebase/remote-config-compat",rI="@firebase/storage",iI="@firebase/storage-compat",sI="@firebase/firestore",oI="@firebase/vertexai",lI="@firebase/firestore-compat",aI="firebase",uI="11.3.1";/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Qc="[DEFAULT]",cI={[qc]:"fire-core",[FS]:"fire-core-compat",[jS]:"fire-analytics",[US]:"fire-analytics-compat",[BS]:"fire-app-check",[zS]:"fire-app-check-compat",[WS]:"fire-auth",[HS]:"fire-auth-compat",[$S]:"fire-rtdb",[VS]:"fire-data-connect",[GS]:"fire-rtdb-compat",[KS]:"fire-fn",[qS]:"fire-fn-compat",[QS]:"fire-iid",[YS]:"fire-iid-compat",[JS]:"fire-fcm",[XS]:"fire-fcm-compat",[ZS]:"fire-perf",[eI]:"fire-perf-compat",[tI]:"fire-rc",[nI]:"fire-rc-compat",[rI]:"fire-gcs",[iI]:"fire-gcs-compat",[sI]:"fire-fst",[lI]:"fire-fst-compat",[oI]:"fire-vertex","fire-js":"fire-js",[aI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
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
 */const $s=new Map,dI=new Map,Yc=new Map;function Mm(r,e){try{r.container.addComponent(e)}catch(t){Tn.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Ei(r){const e=r.name;if(Yc.has(e))return Tn.debug(`There were multiple attempts to register component ${e}.`),!1;Yc.set(e,r);for(const t of $s.values())Mm(t,r);for(const t of dI.values())Mm(t,r);return!0}function Rd(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function bt(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const hI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},rr=new lo("app","Firebase",hI);/**
 * @license
 * Copyright 2019 Google LLC
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
 */class fI{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Dr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Li=uI;function h_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Qc,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw rr.create("bad-app-name",{appName:String(o)});if(t||(t=o_()),!t)throw rr.create("no-options");const a=$s.get(o);if(a){if(Kl(t,a.options)&&Kl(s,a.config))return a;throw rr.create("duplicate-app",{appName:o})}const c=new vS(o);for(const p of Yc.values())c.addComponent(p);const f=new fI(t,s,c);return $s.set(o,f),f}function f_(r=Qc){const e=$s.get(r);if(!e&&r===Qc&&o_())return h_();if(!e)throw rr.create("no-app",{appName:r});return e}function bm(){return Array.from($s.values())}function ir(r,e,t){var s;let o=(s=cI[r])!==null&&s!==void 0?s:r;t&&(o+=`-${t}`);const a=o.match(/\s|\//),c=e.match(/\s|\//);if(a||c){const f=[`Unable to register library "${o}" with version "${e}":`];a&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&c&&f.push("and"),c&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tn.warn(f.join(" "));return}Ei(new Dr(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const pI="firebase-heartbeat-database",mI=1,Vs="firebase-heartbeat-store";let Lc=null;function p_(){return Lc||(Lc=OS(pI,mI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Vs)}catch(t){console.warn(t)}}}}).catch(r=>{throw rr.create("idb-open",{originalErrorMessage:r.message})})),Lc}async function gI(r){try{const t=(await p_()).transaction(Vs),s=await t.objectStore(Vs).get(m_(r));return await t.done,s}catch(e){if(e instanceof fr)Tn.warn(e.message);else{const t=rr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tn.warn(t.message)}}}async function Fm(r,e){try{const s=(await p_()).transaction(Vs,"readwrite");await s.objectStore(Vs).put(e,m_(r)),await s.done}catch(t){if(t instanceof fr)Tn.warn(t.message);else{const s=rr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Tn.warn(s.message)}}}function m_(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const _I=1024,yI=30;class vI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new EI(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Um();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(c=>c.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:o}),this._heartbeatsCache.heartbeats.length>yI){const c=CI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Tn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Um(),{heartbeatsToSend:s,unsentEntries:o}=wI(this._heartbeatsCache.heartbeats),a=$l(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return Tn.warn(t),""}}}function Um(){return new Date().toISOString().substring(0,10)}function wI(r,e=_I){const t=[];let s=r.slice();for(const o of r){const a=t.find(c=>c.agent===o.agent);if(a){if(a.dates.push(o.date),jm(t)>e){a.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),jm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class EI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return iS()?sS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await gI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Fm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Fm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function jm(r){return $l(JSON.stringify({version:2,heartbeats:r})).length}function CI(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
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
 */function SI(r){Ei(new Dr("platform-logger",e=>new MS(e),"PRIVATE")),Ei(new Dr("heartbeat",e=>new vI(e),"PRIVATE")),ir(qc,Dm,r),ir(qc,Dm,"esm2017"),ir("fire-js","")}SI("");function Nd(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(t[s[o]]=r[s[o]]);return t}function g_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const II=g_,__=new lo("auth","Firebase",g_());/**
 * @license
 * Copyright 2020 Google LLC
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
 */const ql=new kd("@firebase/auth");function kI(r,...e){ql.logLevel<=Ce.WARN&&ql.warn(`Auth (${Li}): ${r}`,...e)}function Ul(r,...e){ql.logLevel<=Ce.ERROR&&ql.error(`Auth (${Li}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Jt(r,...e){throw Pd(r,...e)}function on(r,...e){return Pd(r,...e)}function y_(r,e,t){const s=Object.assign(Object.assign({},II()),{[e]:t});return new lo("auth","Firebase",s).create(e,{appName:r.name})}function In(r){return y_(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Pd(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return __.create(r,...e)}function te(r,e,...t){if(!r)throw Pd(e,...t)}function yn(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Ul(e),new Error(e)}function Rn(r,e){r||yn(e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Jc(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function TI(){return zm()==="http:"||zm()==="https:"}function zm(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function RI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(TI()||tS()||"connection"in navigator)?navigator.onLine:!0}function NI(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class ao{constructor(e,t){this.shortDelay=e,this.longDelay=t,Rn(t>e,"Short delay should be less than long delay!"),this.isMobile=Id()||a_()}get(){return RI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function xd(r,e){Rn(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class v_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const PI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
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
 */const xI=new ao(3e4,6e4);function pr(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function mr(r,e,t,s,o={}){return w_(r,o,async()=>{let a={},c={};s&&(e==="GET"?c=s:a={body:JSON.stringify(s)});const f=Oi(Object.assign({key:r.config.apiKey},c)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const m=Object.assign({method:e,headers:p},a);return eS()||(m.referrerPolicy="no-referrer"),v_.fetch()(E_(r,r.config.apiHost,t,f),m)})}async function w_(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},PI),e);try{const o=new OI(r),a=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await a.json();if("needConfirmation"in c)throw Ll(r,"account-exists-with-different-credential",c);if(a.ok&&!("errorMessage"in c))return c;{const f=a.ok?c.errorMessage:c.error.message,[p,m]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ll(r,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw Ll(r,"email-already-in-use",c);if(p==="USER_DISABLED")throw Ll(r,"user-disabled",c);const y=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw y_(r,y,m);Jt(r,y)}}catch(o){if(o instanceof fr)throw o;Jt(r,"network-request-failed",{message:String(o)})}}async function uo(r,e,t,s,o={}){const a=await mr(r,e,t,s,o);return"mfaPendingCredential"in a&&Jt(r,"multi-factor-auth-required",{_serverResponse:a}),a}function E_(r,e,t,s){const o=`${e}${t}?${s}`;return r.config.emulator?xd(r.config,o):`${r.config.apiScheme}://${o}`}function AI(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class OI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(on(this.auth,"network-request-failed")),xI.get())})}}function Ll(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=on(r,e,s);return o.customData._tokenResponse=t,o}function Bm(r){return r!==void 0&&r.enterprise!==void 0}class LI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return AI(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function DI(r,e){return mr(r,"GET","/v2/recaptchaConfig",pr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function MI(r,e){return mr(r,"POST","/v1/accounts:delete",e)}async function C_(r,e){return mr(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function bs(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bI(r,e=!1){const t=tt(r),s=await t.getIdToken(e),o=Ad(s);te(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const a=typeof o.firebase=="object"?o.firebase:void 0,c=a==null?void 0:a.sign_in_provider;return{claims:o,token:s,authTime:bs(Dc(o.auth_time)),issuedAtTime:bs(Dc(o.iat)),expirationTime:bs(Dc(o.exp)),signInProvider:c||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Dc(r){return Number(r)*1e3}function Ad(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Ul("JWT malformed, contained fewer than 3 sections"),null;try{const o=Vl(t);return o?JSON.parse(o):(Ul("Failed to decode base64 JWT payload"),null)}catch(o){return Ul("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Wm(r){const e=Ad(r);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Gs(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof fr&&FI(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function FI({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class UI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Xc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=bs(this.lastLoginAt),this.creationTime=bs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function Ql(r){var e;const t=r.auth,s=await r.getIdToken(),o=await Gs(r,C_(t,{idToken:s}));te(o==null?void 0:o.users.length,t,"internal-error");const a=o.users[0];r._notifyReloadListener(a);const c=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?S_(a.providerUserInfo):[],f=zI(r.providerData,c),p=r.isAnonymous,m=!(r.email&&a.passwordHash)&&!(f!=null&&f.length),y=p?m:!1,_={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:f,metadata:new Xc(a.createdAt,a.lastLoginAt),isAnonymous:y};Object.assign(r,_)}async function jI(r){const e=tt(r);await Ql(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zI(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function S_(r){return r.map(e=>{var{providerId:t}=e,s=Nd(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function BI(r,e){const t=await w_(r,{},async()=>{const s=Oi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:a}=r.config,c=E_(r,o,"/v1/token",`key=${a}`),f=await r._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",v_.fetch()(c,{method:"POST",headers:f,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function WI(r,e){return mr(r,"POST","/v2/accounts:revokeToken",pr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class gi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){te(e.length!==0,"internal-error");const t=Wm(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:a}=await BI(e,t);this.updateTokensAndExpiration(s,o,Number(a))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:a}=t,c=new gi;return s&&(te(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),o&&(te(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),a&&(te(typeof a=="number","internal-error",{appName:e}),c.expirationTime=a),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gi,this.toJSON())}_performRefresh(){return yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Qn(r,e){te(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class vn{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,a=Nd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new UI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Xc(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Gs(this,this.stsTokenManager.getToken(this.auth,e));return te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return bI(this,e)}reload(){return jI(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new vn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Ql(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(bt(this.auth.app))return Promise.reject(In(this.auth));const e=await this.getIdToken();return await Gs(this,MI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,a,c,f,p,m,y;const _=(s=t.displayName)!==null&&s!==void 0?s:void 0,w=(o=t.email)!==null&&o!==void 0?o:void 0,R=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,I=(c=t.photoURL)!==null&&c!==void 0?c:void 0,L=(f=t.tenantId)!==null&&f!==void 0?f:void 0,A=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,b=(m=t.createdAt)!==null&&m!==void 0?m:void 0,H=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:B,emailVerified:ee,isAnonymous:se,providerData:re,stsTokenManager:he}=t;te(B&&he,e,"internal-error");const we=gi.fromJSON(this.name,he);te(typeof B=="string",e,"internal-error"),Qn(_,e.name),Qn(w,e.name),te(typeof ee=="boolean",e,"internal-error"),te(typeof se=="boolean",e,"internal-error"),Qn(R,e.name),Qn(I,e.name),Qn(L,e.name),Qn(A,e.name),Qn(b,e.name),Qn(H,e.name);const _e=new vn({uid:B,auth:e,email:w,emailVerified:ee,displayName:_,isAnonymous:se,photoURL:I,phoneNumber:R,tenantId:L,stsTokenManager:we,createdAt:b,lastLoginAt:H});return re&&Array.isArray(re)&&(_e.providerData=re.map(Me=>Object.assign({},Me))),A&&(_e._redirectEventId=A),_e}static async _fromIdTokenResponse(e,t,s=!1){const o=new gi;o.updateFromServerResponse(t);const a=new vn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Ql(a),a}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];te(o.localId!==void 0,"internal-error");const a=o.providerUserInfo!==void 0?S_(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(a!=null&&a.length),f=new gi;f.updateFromIdToken(s);const p=new vn({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:c}),m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Xc(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(a!=null&&a.length)};return Object.assign(p,m),p}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Hm=new Map;function wn(r){Rn(r instanceof Function,"Expected a class definition");let e=Hm.get(r);return e?(Rn(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Hm.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class I_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}I_.type="NONE";const $m=I_;/**
 * @license
 * Copyright 2019 Google LLC
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
 */function jl(r,e,t){return`firebase:${r}:${e}:${t}`}class _i{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:a}=this.auth;this.fullUserKey=jl(this.userKey,o.apiKey,a),this.fullPersistenceKey=jl("persistence",o.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new _i(wn($m),e,s);const o=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let a=o[0]||wn($m);const c=jl(s,e.config.apiKey,e.name);let f=null;for(const m of t)try{const y=await m._get(c);if(y){const _=vn._fromJSON(e,y);m!==a&&(f=_),a=m;break}}catch{}const p=o.filter(m=>m._shouldAllowMigration);return!a._shouldAllowMigration||!p.length?new _i(a,e,s):(a=p[0],f&&await a._set(c,f.toJSON()),await Promise.all(t.map(async m=>{if(m!==a)try{await m._remove(c)}catch{}})),new _i(a,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Vm(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(N_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(k_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(x_(e))return"Blackberry";if(A_(e))return"Webos";if(T_(e))return"Safari";if((e.includes("chrome/")||R_(e))&&!e.includes("edge/"))return"Chrome";if(P_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function k_(r=ft()){return/firefox\//i.test(r)}function T_(r=ft()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function R_(r=ft()){return/crios\//i.test(r)}function N_(r=ft()){return/iemobile/i.test(r)}function P_(r=ft()){return/android/i.test(r)}function x_(r=ft()){return/blackberry/i.test(r)}function A_(r=ft()){return/webos/i.test(r)}function Od(r=ft()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function HI(r=ft()){var e;return Od(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $I(){return nS()&&document.documentMode===10}function O_(r=ft()){return Od(r)||P_(r)||A_(r)||x_(r)||/windows phone/i.test(r)||N_(r)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function L_(r,e=[]){let t;switch(r){case"Browser":t=Vm(ft());break;case"Worker":t=`${Vm(ft())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Li}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class VI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=a=>new Promise((c,f)=>{try{const p=e(a);c(p)}catch(p){f(p)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function GI(r,e={}){return mr(r,"GET","/v2/passwordPolicy",pr(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const KI=6;class qI{constructor(e){var t,s,o,a;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:KI,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,a,c,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(a=p.containsUppercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class QI{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gm(this),this.idTokenSubscription=new Gm(this),this.beforeStateQueue=new VI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=__,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=wn(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await _i.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await C_(this,{idToken:e}),s=await vn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(bt(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===f)&&(p!=null&&p.user)&&(o=p.user,a=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ql(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=NI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(bt(this.app))return Promise.reject(In(this));const t=e?tt(e):null;return t&&te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return bt(this.app)?Promise.reject(In(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return bt(this.app)?Promise.reject(In(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await GI(this),t=new qI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new lo("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await WI(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&wn(e)||this._popupRedirectResolver;te(t,this,"argument-error"),this.redirectPersistenceManager=await _i.create(this,[wn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let c=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(f,this,"internal-error"),f.then(()=>{c||a(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,o);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=L_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(bt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&kI(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function zr(r){return tt(r)}class Gm{constructor(e){this.auth=e,this.observer=null,this.addObserver=hS(t=>this.observer=t)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */let ma={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function YI(r){ma=r}function D_(r){return ma.loadJS(r)}function JI(){return ma.recaptchaEnterpriseScript}function XI(){return ma.gapiScript}function ZI(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class ek{constructor(){this.enterprise=new tk}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class tk{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const nk="recaptcha-enterprise",M_="NO_RECAPTCHA";class rk{constructor(e){this.type=nk,this.auth=zr(e)}async verify(e="verify",t=!1){async function s(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(c,f)=>{DI(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const m=new LI(p);return a.tenantId==null?a._agentRecaptchaConfig=m:a._tenantRecaptchaConfigs[a.tenantId]=m,c(m.siteKey)}}).catch(p=>{f(p)})})}function o(a,c,f){const p=window.grecaptcha;Bm(p)?p.enterprise.ready(()=>{p.enterprise.execute(a,{action:e}).then(m=>{c(m)}).catch(()=>{c(M_)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ek().execute("siteKey",{action:"verify"}):new Promise((a,c)=>{s(this.auth).then(f=>{if(!t&&Bm(window.grecaptcha))o(f,a,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=JI();p.length!==0&&(p+=f),D_(p).then(()=>{o(f,a,c)}).catch(m=>{c(m)})}}).catch(f=>{c(f)})})}}async function Km(r,e,t,s=!1,o=!1){const a=new rk(r);let c;if(o)c=M_;else try{c=await a.verify(t)}catch{c=await a.verify(t,!0)}const f=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const p=f.phoneEnrollmentInfo.phoneNumber,m=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:m,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const p=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return s?Object.assign(f,{captchaResp:c}):Object.assign(f,{captchaResponse:c}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function Zc(r,e,t,s,o){var a;if(!((a=r._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Km(r,e,t,t==="getOobCode");return s(r,c)}else return s(r,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await Km(r,e,t,t==="getOobCode");return s(r,f)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function ik(r,e){const t=Rd(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),a=t.getOptions();if(Kl(a,e??{}))return o;Jt(o,"already-initialized")}return t.initialize({options:e})}function sk(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(wn);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function ok(r,e,t){const s=zr(r);te(s._canInitEmulator,s,"emulator-config-failed"),te(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,a=b_(e),{host:c,port:f}=lk(e),p=f===null?"":`:${f}`;s.config.emulator={url:`${a}//${c}${p}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:c,port:f,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:o})}),ak()}function b_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function lk(r){const e=b_(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const a=o[1];return{host:a,port:qm(s.substr(a.length+1))}}else{const[a,c]=s.split(":");return{host:a,port:qm(c)}}}function qm(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function ak(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Ld{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return yn("not implemented")}_getIdTokenResponse(e){return yn("not implemented")}_linkToIdToken(e,t){return yn("not implemented")}_getReauthenticationResolver(e){return yn("not implemented")}}async function uk(r,e){return mr(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function ck(r,e){return uo(r,"POST","/v1/accounts:signInWithPassword",pr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function dk(r,e){return uo(r,"POST","/v1/accounts:signInWithEmailLink",pr(r,e))}async function hk(r,e){return uo(r,"POST","/v1/accounts:signInWithEmailLink",pr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Ks extends Ld{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Ks(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Ks(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zc(e,t,"signInWithPassword",ck);case"emailLink":return dk(e,{email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zc(e,s,"signUpPassword",uk);case"emailLink":return hk(e,{idToken:t,email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function yi(r,e){return uo(r,"POST","/v1/accounts:signInWithIdp",pr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const fk="http://localhost";class Mr extends Ld{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Mr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Jt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,a=Nd(t,["providerId","signInMethod"]);if(!s||!o)return null;const c=new Mr(s,o);return c.idToken=a.idToken||void 0,c.accessToken=a.accessToken||void 0,c.secret=a.secret,c.nonce=a.nonce,c.pendingToken=a.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return yi(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,yi(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,yi(e,t)}buildRequest(){const e={requestUri:fk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Oi(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function pk(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mk(r){const e=Ds(Ms(r)).link,t=e?Ds(Ms(e)).deep_link_id:null,s=Ds(Ms(r)).deep_link_id;return(s?Ds(Ms(s)).link:null)||s||t||e||r}class Dd{constructor(e){var t,s,o,a,c,f;const p=Ds(Ms(e)),m=(t=p.apiKey)!==null&&t!==void 0?t:null,y=(s=p.oobCode)!==null&&s!==void 0?s:null,_=pk((o=p.mode)!==null&&o!==void 0?o:null);te(m&&y&&_,"argument-error"),this.apiKey=m,this.operation=_,this.code=y,this.continueUrl=(a=p.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(c=p.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(f=p.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=mk(e);try{return new Dd(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Di{constructor(){this.providerId=Di.PROVIDER_ID}static credential(e,t){return Ks._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Dd.parseLink(t);return te(s,"argument-error"),Ks._fromEmailAndCode(e,s.code,s.tenantId)}}Di.PROVIDER_ID="password";Di.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Di.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class F_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class co extends F_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Jn extends co{constructor(){super("facebook.com")}static credential(e){return Mr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Xn extends co{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Mr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Xn.credential(t,s)}catch{return null}}}Xn.GOOGLE_SIGN_IN_METHOD="google.com";Xn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Zn extends co{constructor(){super("github.com")}static credential(e){return Mr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.GITHUB_SIGN_IN_METHOD="github.com";Zn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class er extends co{constructor(){super("twitter.com")}static credential(e,t){return Mr._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return er.credential(t,s)}catch{return null}}}er.TWITTER_SIGN_IN_METHOD="twitter.com";er.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function gk(r,e){return uo(r,"POST","/v1/accounts:signUp",pr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class br{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const a=await vn._fromIdTokenResponse(e,s,o),c=Qm(s);return new br({user:a,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Qm(s);return new br({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Qm(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Yl extends fr{constructor(e,t,s,o){var a;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Yl.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Yl(e,t,s,o)}}function U_(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Yl._fromErrorAndOperation(r,a,e,s):a})}async function _k(r,e,t=!1){const s=await Gs(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return br._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function yk(r,e,t=!1){const{auth:s}=r;if(bt(s.app))return Promise.reject(In(s));const o="reauthenticate";try{const a=await Gs(r,U_(s,o,e,r),t);te(a.idToken,s,"internal-error");const c=Ad(a.idToken);te(c,s,"internal-error");const{sub:f}=c;return te(r.uid===f,s,"user-mismatch"),br._forOperation(r,o,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Jt(s,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function j_(r,e,t=!1){if(bt(r.app))return Promise.reject(In(r));const s="signIn",o=await U_(r,s,e),a=await br._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(a.user),a}async function vk(r,e){return j_(zr(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function z_(r){const e=zr(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function wk(r,e,t){if(bt(r.app))return Promise.reject(In(r));const s=zr(r),c=await Zc(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",gk).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&z_(r),p}),f=await br._fromIdTokenResponse(s,"signIn",c);return await s._updateCurrentUser(f.user),f}function Ek(r,e,t){return bt(r.app)?Promise.reject(In(r)):vk(tt(r),Di.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&z_(r),s})}function Ck(r,e,t,s){return tt(r).onIdTokenChanged(e,t,s)}function Sk(r,e,t){return tt(r).beforeAuthStateChanged(e,t)}function Ik(r,e,t,s){return tt(r).onAuthStateChanged(e,t,s)}function kk(r){return tt(r).signOut()}const Jl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
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
 */class B_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Jl,"1"),this.storage.removeItem(Jl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Tk=1e3,Rk=10;class W_ extends B_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=O_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,f,p)=>{this.notifyListeners(c,p)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},a=this.storage.getItem(s);$I()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,Rk):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},Tk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}W_.type="LOCAL";const Nk=W_;/**
 * @license
 * Copyright 2020 Google LLC
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
 */class H_ extends B_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}H_.type="SESSION";const $_=H_;/**
 * @license
 * Copyright 2019 Google LLC
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
 */function Pk(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class ga{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new ga(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:a}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const f=Array.from(c).map(async m=>m(t.origin,a)),p=await Pk(f);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ga.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Md(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class xk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let a,c;return new Promise((f,p)=>{const m=Md("",20);o.port1.start();const y=setTimeout(()=>{p(new Error("unsupported_event"))},s);c={messageChannel:o,onMessage(_){const w=_;if(w.data.eventId===m)switch(w.data.status){case"ack":clearTimeout(y),a=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),f(w.data.response);break;default:clearTimeout(y),clearTimeout(a),p(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function ln(){return window}function Ak(r){ln().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function V_(){return typeof ln().WorkerGlobalScope<"u"&&typeof ln().importScripts=="function"}async function Ok(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Lk(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function Dk(){return V_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const G_="firebaseLocalStorageDb",Mk=1,Xl="firebaseLocalStorage",K_="fbase_key";class ho{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function _a(r,e){return r.transaction([Xl],e?"readwrite":"readonly").objectStore(Xl)}function bk(){const r=indexedDB.deleteDatabase(G_);return new ho(r).toPromise()}function ed(){const r=indexedDB.open(G_,Mk);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Xl,{keyPath:K_})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Xl)?e(s):(s.close(),await bk(),e(await ed()))})})}async function Ym(r,e,t){const s=_a(r,!0).put({[K_]:e,value:t});return new ho(s).toPromise()}async function Fk(r,e){const t=_a(r,!1).get(e),s=await new ho(t).toPromise();return s===void 0?null:s.value}function Jm(r,e){const t=_a(r,!0).delete(e);return new ho(t).toPromise()}const Uk=800,jk=3;class q_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ed(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>jk)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return V_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ga._getInstance(Dk()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Ok(),!this.activeServiceWorker)return;this.sender=new xk(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Lk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ed();return await Ym(e,Jl,"1"),await Jm(e,Jl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ym(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Fk(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Jm(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const a=_a(o,!1).getAll();return new ho(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:a}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(a)&&(this.notifyListeners(o,a),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Uk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}q_.type="LOCAL";const zk=q_;new ao(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
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
 */function Bk(r,e){return e?wn(e):(te(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class bd extends Ld{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return yi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return yi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return yi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Wk(r){return j_(r.auth,new bd(r),r.bypassAuthState)}function Hk(r){const{auth:e,user:t}=r;return te(t,e,"internal-error"),yk(t,new bd(r),r.bypassAuthState)}async function $k(r){const{auth:e,user:t}=r;return te(t,e,"internal-error"),_k(t,new bd(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Q_{constructor(e,t,s,o,a=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:a,error:c,type:f}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:s,tenantId:a||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Wk;case"linkViaPopup":case"linkViaRedirect":return $k;case"reauthViaPopup":case"reauthViaRedirect":return Hk;default:Jt(this.auth,"internal-error")}}resolve(e){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Vk=new ao(2e3,1e4);class pi extends Q_{constructor(e,t,s,o,a){super(e,t,o,a),this.provider=s,this.authWindow=null,this.pollId=null,pi.currentPopupAction&&pi.currentPopupAction.cancel(),pi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){Rn(this.filter.length===1,"Popup operations only handle one event");const e=Md();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(on(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(on(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(on(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Vk.get())};e()}}pi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Gk="pendingRedirect",zl=new Map;class Kk extends Q_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=zl.get(this.auth._key());if(!e){try{const s=await qk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}zl.set(this.auth._key(),e)}return this.bypassAuthState||zl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qk(r,e){const t=Jk(e),s=Yk(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function Qk(r,e){zl.set(r._key(),e)}function Yk(r){return wn(r._redirectPersistence)}function Jk(r){return jl(Gk,r.config.apiKey,r.name)}async function Xk(r,e,t=!1){if(bt(r.app))return Promise.reject(In(r));const s=zr(r),o=Bk(s,e),c=await new Kk(s,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Zk=10*60*1e3;class eT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tT(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Y_(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(on(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Zk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xm(e))}saveEventToCache(e){this.cachedEventUids.add(Xm(e)),this.lastProcessedEventTime=Date.now()}}function Xm(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Y_({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tT(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Y_(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function nT(r,e={}){return mr(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const rT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iT=/^https?/;async function sT(r){if(r.config.emulator)return;const{authorizedDomains:e}=await nT(r);for(const t of e)try{if(oT(t))return}catch{}Jt(r,"unauthorized-domain")}function oT(r){const e=Jc(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const c=new URL(r);return c.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!iT.test(t))return!1;if(rT.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const lT=new ao(3e4,6e4);function Zm(){const r=ln().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function aT(r){return new Promise((e,t)=>{var s,o,a;function c(){Zm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zm(),t(on(r,"network-request-failed"))},timeout:lT.get()})}if(!((o=(s=ln().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((a=ln().gapi)===null||a===void 0)&&a.load)c();else{const f=ZI("iframefcb");return ln()[f]=()=>{gapi.load?c():t(on(r,"network-request-failed"))},D_(`${XI()}?onload=${f}`).catch(p=>t(p))}}).catch(e=>{throw Bl=null,e})}let Bl=null;function uT(r){return Bl=Bl||aT(r),Bl}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const cT=new ao(5e3,15e3),dT="__/auth/iframe",hT="emulator/auth/iframe",fT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mT(r){const e=r.config;te(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?xd(e,hT):`https://${r.config.authDomain}/${dT}`,s={apiKey:e.apiKey,appName:r.name,v:Li},o=pT.get(r.config.apiHost);o&&(s.eid=o);const a=r._getFrameworks();return a.length&&(s.fw=a.join(",")),`${t}?${Oi(s).slice(1)}`}async function gT(r){const e=await uT(r),t=ln().gapi;return te(t,r,"internal-error"),e.open({where:document.body,url:mT(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fT,dontclear:!0},s=>new Promise(async(o,a)=>{await s.restyle({setHideOnLeave:!1});const c=on(r,"network-request-failed"),f=ln().setTimeout(()=>{a(c)},cT.get());function p(){ln().clearTimeout(f),o(s)}s.ping(p).then(p,()=>{a(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const _T={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yT=500,vT=600,wT="_blank",ET="http://localhost";class eg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function CT(r,e,t,s=yT,o=vT){const a=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p=Object.assign(Object.assign({},_T),{width:s.toString(),height:o.toString(),top:a,left:c}),m=ft().toLowerCase();t&&(f=R_(m)?wT:t),k_(m)&&(e=e||ET,p.scrollbars="yes");const y=Object.entries(p).reduce((w,[R,I])=>`${w}${R}=${I},`,"");if(HI(m)&&f!=="_self")return ST(e||"",f),new eg(null);const _=window.open(e||"",f,y);te(_,r,"popup-blocked");try{_.focus()}catch{}return new eg(_)}function ST(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const IT="__/auth/handler",kT="emulator/auth/handler",TT=encodeURIComponent("fac");async function tg(r,e,t,s,o,a){te(r.config.authDomain,r,"auth-domain-config-required"),te(r.config.apiKey,r,"invalid-api-key");const c={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:Li,eventId:o};if(e instanceof F_){e.setDefaultLanguage(r.languageCode),c.providerId=e.providerId||"",Vc(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,_]of Object.entries({}))c[y]=_}if(e instanceof co){const y=e.getScopes().filter(_=>_!=="");y.length>0&&(c.scopes=y.join(","))}r.tenantId&&(c.tid=r.tenantId);const f=c;for(const y of Object.keys(f))f[y]===void 0&&delete f[y];const p=await r._getAppCheckToken(),m=p?`#${TT}=${encodeURIComponent(p)}`:"";return`${RT(r)}?${Oi(f).slice(1)}${m}`}function RT({config:r}){return r.emulator?xd(r,kT):`https://${r.authDomain}/${IT}`}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Mc="webStorageSupport";class NT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$_,this._completeRedirectFn=Xk,this._overrideRedirectResult=Qk}async _openPopup(e,t,s,o){var a;Rn((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const c=await tg(e,t,s,Jc(),o);return CT(e,c,Md())}async _openRedirect(e,t,s,o){await this._originValidation(e);const a=await tg(e,t,s,Jc(),o);return Ak(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:a}=this.eventManagers[t];return o?Promise.resolve(o):(Rn(a,"If manager is not set, promise should be"),a)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await gT(e),s=new eT(e);return t.register("authEvent",o=>(te(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Mc,{type:Mc},o=>{var a;const c=(a=o==null?void 0:o[0])===null||a===void 0?void 0:a[Mc];c!==void 0&&t(!!c),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=sT(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return O_()||T_()||Od()}}const PT=NT;var ng="@firebase/auth",rg="1.9.0";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class xT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function AT(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function OT(r){Ei(new Dr("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:c,authDomain:f}=s.options;te(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:c,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:L_(r)},m=new QI(s,o,a,p);return sk(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Ei(new Dr("auth-internal",e=>{const t=zr(e.getProvider("auth").getImmediate());return(s=>new xT(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ir(ng,rg,AT(r)),ir(ng,rg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const LT=5*60,DT=l_("authIdTokenMaxAge")||LT;let ig=null;const MT=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>DT)return;const o=t==null?void 0:t.token;ig!==o&&(ig=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function bT(r=f_()){const e=Rd(r,"auth");if(e.isInitialized())return e.getImmediate();const t=ik(r,{popupRedirectResolver:PT,persistence:[zk,Nk,$_]}),s=l_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(s,location.origin);if(location.origin===a.origin){const c=MT(a.toString());Sk(t,c,()=>c(t.currentUser)),Ck(t,f=>c(f))}}const o=s_("auth");return o&&ok(t,`http://${o}`),t}function FT(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}YI({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const a=on("internal-error");a.customData=o,t(a)},s.type="text/javascript",s.charset="UTF-8",FT().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});OT("Browser");var UT="firebase",jT="11.3.1";/**
 * @license
 * Copyright 2020 Google LLC
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
 */ir(UT,jT,"app");const zT={apiKey:"AIzaSyCNEJDVMHQY8BnaO2ZKkGBQbvoEHXhZBeo",authDomain:"diri-9ed53.firebaseapp.com",databaseURL:"https://diri-9ed53-default-rtdb.firebaseio.com",projectId:"diri-9ed53",storageBucket:"diri-9ed53.firebasestorage.app",messagingSenderId:"710505225558",appId:"1:710505225558:web:a1489ff5c4b458c28b4af7",measurementId:"G-4SMWBK22RK"},Rt=bm().length?bm()[0]:h_(zT);var sg={};const og="@firebase/database",lg="1.0.12";/**
 * @license
 * Copyright 2019 Google LLC
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
 */let J_="";function BT(r){J_=r}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class WT{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),$e(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Hs(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class HT{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return un(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const X_=function(r){try{if(typeof window<"u"&&typeof window[r]<"u"){const e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new WT(e)}}catch{}return new HT},Or=X_("localStorage"),$T=X_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
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
 */const vi=new kd("@firebase/database"),VT=function(){let r=1;return function(){return r++}}(),Z_=function(r){const e=mS(r),t=new dS;t.update(e);const s=t.digest();return Cd.encodeByteArray(s)},fo=function(...r){let e="";for(let t=0;t<r.length;t++){const s=r[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=fo.apply(null,s):typeof s=="object"?e+=$e(s):e+=s,e+=" "}return e};let Fs=null,ag=!0;const GT=function(r,e){z(!0,"Can't turn on custom loggers persistently."),vi.logLevel=Ce.VERBOSE,Fs=vi.log.bind(vi)},Ze=function(...r){if(ag===!0&&(ag=!1,Fs===null&&$T.get("logging_enabled")===!0&&GT()),Fs){const e=fo.apply(null,r);Fs(e)}},po=function(r){return function(...e){Ze(r,...e)}},td=function(...r){const e="FIREBASE INTERNAL ERROR: "+fo(...r);vi.error(e)},Nn=function(...r){const e=`FIREBASE FATAL ERROR: ${fo(...r)}`;throw vi.error(e),new Error(e)},ht=function(...r){const e="FIREBASE WARNING: "+fo(...r);vi.warn(e)},KT=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ht("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Fd=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},qT=function(r){if(document.readyState==="complete")r();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Fr="[MIN_NAME]",ar="[MAX_NAME]",Br=function(r,e){if(r===e)return 0;if(r===Fr||e===ar)return-1;if(e===Fr||r===ar)return 1;{const t=ug(r),s=ug(e);return t!==null?s!==null?t-s===0?r.length-e.length:t-s:-1:s!==null?1:r<e?-1:1}},QT=function(r,e){return r===e?0:r<e?-1:1},Ns=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+$e(e))},Ud=function(r){if(typeof r!="object"||r===null)return $e(r);const e=[];for(const s in r)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=$e(e[s]),t+=":",t+=Ud(r[e[s]]);return t+="}",t},ey=function(r,e){const t=r.length;if(t<=e)return[r];const s=[];for(let o=0;o<t;o+=e)o+e>t?s.push(r.substring(o,t)):s.push(r.substring(o,o+e));return s};function et(r,e){for(const t in r)r.hasOwnProperty(t)&&e(t,r[t])}const ty=function(r){z(!Fd(r),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let o,a,c,f,p;r===0?(a=0,c=0,o=1/r===-1/0?1:0):(o=r<0,r=Math.abs(r),r>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(r)/Math.LN2),s),a=f+s,c=Math.round(r*Math.pow(2,t-f)-Math.pow(2,t))):(a=0,c=Math.round(r/Math.pow(2,1-s-t))));const m=[];for(p=t;p;p-=1)m.push(c%2?1:0),c=Math.floor(c/2);for(p=e;p;p-=1)m.push(a%2?1:0),a=Math.floor(a/2);m.push(o?1:0),m.reverse();const y=m.join("");let _="";for(p=0;p<64;p+=8){let w=parseInt(y.substr(p,8),2).toString(16);w.length===1&&(w="0"+w),_=_+w}return _.toLowerCase()},YT=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},JT=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function XT(r,e){let t="Unknown Error";r==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":r==="permission_denied"?t="Client doesn't have permission to access the desired data.":r==="unavailable"&&(t="The service is unavailable");const s=new Error(r+" at "+e._path.toString()+": "+t);return s.code=r.toUpperCase(),s}const ZT=new RegExp("^-?(0*)\\d{1,10}$"),e0=-2147483648,t0=2147483647,ug=function(r){if(ZT.test(r)){const e=Number(r);if(e>=e0&&e<=t0)return e}return null},Mi=function(r){try{r()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ht("Exception was thrown by user callback.",t),e},Math.floor(0))}},n0=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Us=function(r,e){const t=setTimeout(r,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
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
 */class r0{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,bt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ht(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class i0{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(o=>this.auth_=o)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Ze("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ht(e)}}class Wl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Wl.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
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
 */const jd="5",ny="v",ry="s",iy="r",sy="f",oy=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ly="ls",ay="p",nd="ac",uy="websocket",cy="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
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
 */class dy{constructor(e,t,s,o,a=!1,c="",f=!1,p=!1){this.secure=t,this.namespace=s,this.webSocketOnly=o,this.nodeAdmin=a,this.persistenceKey=c,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=p,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Or.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Or.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function s0(r){return r.host!==r.internalHost||r.isCustomHost()||r.includeNamespaceInQueryParams}function hy(r,e,t){z(typeof e=="string","typeof type must == string"),z(typeof t=="object","typeof params must == object");let s;if(e===uy)s=(r.secure?"wss://":"ws://")+r.internalHost+"/.ws?";else if(e===cy)s=(r.secure?"https://":"http://")+r.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);s0(r)&&(t.ns=r.namespace);const o=[];return et(t,(a,c)=>{o.push(a+"="+c)}),s+o.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class o0{constructor(){this.counters_={}}incrementCounter(e,t=1){un(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return GC(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const bc={},Fc={};function zd(r){const e=r.toString();return bc[e]||(bc[e]=new o0),bc[e]}function l0(r,e){const t=r.toString();return Fc[t]||(Fc[t]=e()),Fc[t]}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class a0{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<s.length;++o)s[o]&&Mi(()=>{this.onMessage_(s[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const cg="start",u0="close",c0="pLPCommand",d0="pRTLPCB",fy="id",py="pw",my="ser",h0="cb",f0="seg",p0="ts",m0="d",g0="dframe",gy=1870,_y=30,_0=gy-_y,y0=25e3,v0=3e4;class mi{constructor(e,t,s,o,a,c,f){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=o,this.authToken=a,this.transportSessionId=c,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=po(e),this.stats_=zd(t),this.urlFn=p=>(this.appCheckToken&&(p[nd]=this.appCheckToken),hy(t,cy,p))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new a0(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(v0)),qT(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Bd((...a)=>{const[c,f,p,m,y]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===cg)this.id=f,this.password=p;else if(c===u0)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...a)=>{const[c,f]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(c,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[cg]="t",s[my]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[h0]=this.scriptTagHolder.uniqueCallbackIdentifier),s[ny]=jd,this.transportSessionId&&(s[ry]=this.transportSessionId),this.lastSessionId&&(s[ly]=this.lastSessionId),this.applicationId&&(s[ay]=this.applicationId),this.appCheckToken&&(s[nd]=this.appCheckToken),typeof location<"u"&&location.hostname&&oy.test(location.hostname)&&(s[iy]=sy);const o=this.urlFn(s);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){mi.forceAllow_=!0}static forceDisallow(){mi.forceDisallow_=!0}static isAvailable(){return mi.forceAllow_?!0:!mi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!YT()&&!JT()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=$e(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=r_(t),o=ey(s,_0);for(let a=0;a<o.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[a]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[g0]="t",s[fy]=e,s[py]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=$e(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Bd{constructor(e,t,s,o){this.onDisconnect=s,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=VT(),window[c0+this.uniqueCallbackIdentifier]=e,window[d0+this.uniqueCallbackIdentifier]=t,this.myIFrame=Bd.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(f){Ze("frame writing exception"),f.stack&&Ze(f.stack),Ze(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ze("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[fy]=this.myID,e[py]=this.myPW,e[my]=this.currentSerial;let t=this.urlFn(e),s="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+_y+s.length<=gy;){const c=this.pendingSegs.shift();s=s+"&"+f0+o+"="+c.seg+"&"+p0+o+"="+c.ts+"&"+m0+o+"="+c.d,o++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},o=setTimeout(s,Math.floor(y0)),a=()=>{clearTimeout(o),s()};this.addTag(e,a)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const o=s.readyState;(!o||o==="loaded"||o==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{Ze("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const w0=16384,E0=45e3;let Zl=null;typeof MozWebSocket<"u"?Zl=MozWebSocket:typeof WebSocket<"u"&&(Zl=WebSocket);class sn{constructor(e,t,s,o,a,c,f){this.connId=e,this.applicationId=s,this.appCheckToken=o,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=po(this.connId),this.stats_=zd(t),this.connURL=sn.connectionURL_(t,c,f,o,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,o,a){const c={};return c[ny]=jd,typeof location<"u"&&location.hostname&&oy.test(location.hostname)&&(c[iy]=sy),t&&(c[ry]=t),s&&(c[ly]=s),o&&(c[nd]=o),a&&(c[ay]=a),hy(e,uy,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Or.set("previous_websocket_failure",!0);try{let s;rS(),this.mySock=new Zl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const o=s.message||s.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const o=s.message||s.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){sn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Zl!==null&&!sn.forceDisallow_}static previouslyFailed(){return Or.isInMemoryStorage||Or.get("previous_websocket_failure")===!0}markConnectionHealthy(){Or.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Hs(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(z(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=$e(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=ey(t,w0);s.length>1&&this.sendString_(String(s.length));for(let o=0;o<s.length;o++)this.sendString_(s[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(E0))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}sn.responsesRequiredToBeHealthy=2;sn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
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
 */class qs{static get ALL_TRANSPORTS(){return[mi,sn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=sn.isAvailable();let s=t&&!sn.previouslyFailed();if(e.webSocketOnly&&(t||ht("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[sn];else{const o=this.transports_=[];for(const a of qs.ALL_TRANSPORTS)a&&a.isAvailable()&&o.push(a);qs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}qs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
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
 */const C0=6e4,S0=5e3,I0=10*1024,k0=100*1024,Uc="t",dg="d",T0="s",hg="r",R0="e",fg="o",pg="a",mg="n",gg="p",N0="h";class P0{constructor(e,t,s,o,a,c,f,p,m,y){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=o,this.authToken_=a,this.onMessage_=c,this.onReady_=f,this.onDisconnect_=p,this.onKill_=m,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=po("c:"+this.id+":"),this.transportManager_=new qs(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const o=e.healthyTimeout||0;o>0&&(this.healthyTimeout_=Us(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>k0?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>I0?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Uc in e){const t=e[Uc];t===pg?this.upgradeIfSecondaryHealthy_():t===hg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===fg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ns("t",e),s=Ns("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:gg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:pg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:mg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ns("t",e),s=Ns("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ns(Uc,e);if(dg in e){const s=e[dg];if(t===N0){const o=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(t===mg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===T0?this.onConnectionShutdown_(s):t===hg?this.onReset_(s):t===R0?td("Server Error: "+s):t===fg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):td("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,o=e.h;this.sessionId=e.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),jd!==s&&ht("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Us(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(C0))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Us(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(S0))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:gg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Or.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class yy{put(e,t,s,o){}merge(e,t,s,o){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class vy{constructor(e){this.allowedEvents_=e,this.listeners_={},z(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let o=0;o<s.length;o++)s[o].callback.apply(s[o].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const o=this.getInitialEvent(e);o&&t.apply(s,o)}off(e,t,s){this.validateEventType_(e);const o=this.listeners_[e]||[];for(let a=0;a<o.length;a++)if(o[a].callback===t&&(!s||s===o[a].context)){o.splice(a,1);return}}validateEventType_(e){z(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ea extends vy{static getInstance(){return new ea}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Id()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return z(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const _g=32,yg=768;class ve{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[s]=this.pieces_[o],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function me(){return new ve("")}function de(r){return r.pieceNum_>=r.pieces_.length?null:r.pieces_[r.pieceNum_]}function ur(r){return r.pieces_.length-r.pieceNum_}function ke(r){let e=r.pieceNum_;return e<r.pieces_.length&&e++,new ve(r.pieces_,e)}function Wd(r){return r.pieceNum_<r.pieces_.length?r.pieces_[r.pieces_.length-1]:null}function x0(r){let e="";for(let t=r.pieceNum_;t<r.pieces_.length;t++)r.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(r.pieces_[t])));return e||"/"}function Qs(r,e=0){return r.pieces_.slice(r.pieceNum_+e)}function wy(r){if(r.pieceNum_>=r.pieces_.length)return null;const e=[];for(let t=r.pieceNum_;t<r.pieces_.length-1;t++)e.push(r.pieces_[t]);return new ve(e,0)}function Fe(r,e){const t=[];for(let s=r.pieceNum_;s<r.pieces_.length;s++)t.push(r.pieces_[s]);if(e instanceof ve)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let o=0;o<s.length;o++)s[o].length>0&&t.push(s[o])}return new ve(t,0)}function ae(r){return r.pieceNum_>=r.pieces_.length}function dt(r,e){const t=de(r),s=de(e);if(t===null)return e;if(t===s)return dt(ke(r),ke(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+r+")")}function A0(r,e){const t=Qs(r,0),s=Qs(e,0);for(let o=0;o<t.length&&o<s.length;o++){const a=Br(t[o],s[o]);if(a!==0)return a}return t.length===s.length?0:t.length<s.length?-1:1}function Ey(r,e){if(ur(r)!==ur(e))return!1;for(let t=r.pieceNum_,s=e.pieceNum_;t<=r.pieces_.length;t++,s++)if(r.pieces_[t]!==e.pieces_[s])return!1;return!0}function Ft(r,e){let t=r.pieceNum_,s=e.pieceNum_;if(ur(r)>ur(e))return!1;for(;t<r.pieces_.length;){if(r.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class O0{constructor(e,t){this.errorPrefix_=t,this.parts_=Qs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=pa(this.parts_[s]);Cy(this)}}function L0(r,e){r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(e),r.byteLength_+=pa(e),Cy(r)}function D0(r){const e=r.parts_.pop();r.byteLength_-=pa(e),r.parts_.length>0&&(r.byteLength_-=1)}function Cy(r){if(r.byteLength_>yg)throw new Error(r.errorPrefix_+"has a key path longer than "+yg+" bytes ("+r.byteLength_+").");if(r.parts_.length>_g)throw new Error(r.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+_g+") or object contains a cycle "+xr(r))}function xr(r){return r.parts_.length===0?"":"in property '"+r.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Hd extends vy{static getInstance(){return new Hd}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return z(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Ps=1e3,M0=60*5*1e3,vg=30*1e3,b0=1.3,F0=3e4,U0="server_kill",wg=3;class kn extends yy{constructor(e,t,s,o,a,c,f,p){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=o,this.onServerInfoUpdate_=a,this.authTokenProvider_=c,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=kn.nextPersistentConnectionId_++,this.log_=po("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ps,this.maxReconnectDelay_=M0,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Hd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ea.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const o=++this.requestNumber_,a={r:o,a:e,b:t};this.log_($e(a)),z(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),s&&(this.requestCBHash_[o]=s)}get(e){this.initConnection_();const t=new oo,o={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const f=c.d;c.s==="ok"?t.resolve(f):t.reject(f)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),t.promise}listen(e,t,s,o){this.initConnection_();const a=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+a),this.listens.has(c)||this.listens.set(c,new Map),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),z(!this.listens.get(c).has(a),"listen() called twice for same path/queryId.");const f={onComplete:o,hashFn:t,query:e,tag:s};this.listens.get(c).set(a,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),o=t._queryIdentifier;this.log_("Listen on "+s+" for "+o);const a={p:s},c="q";e.tag&&(a.q=t._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(c,a,f=>{const p=f.d,m=f.s;kn.warnOnListenWarnings_(p,t),(this.listens.get(s)&&this.listens.get(s).get(o))===e&&(this.log_("listen response",f),m!=="ok"&&this.removeListen_(s,o),e.onComplete&&e.onComplete(m,p))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&un(e,"w")){const s=wi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const o='".indexOn": "'+t._queryParams.getIndex().toString()+'"',a=t._path.toString();ht(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||cS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=vg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=uS(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,o=>{const a=o.s,c=o.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),o=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+o),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,o)&&this.connected_&&this.sendUnlisten_(s,o,e._queryObject,t)}sendUnlisten_(e,t,s,o){this.log_("Unlisten on "+e+" for "+t);const a={p:e},c="n";o&&(a.q=s,a.t=o),this.sendRequest(c,a)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,o){const a={p:t,d:s};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,c=>{o&&setTimeout(()=>{o(c.s,c.d)},Math.floor(0))})}put(e,t,s,o){this.putInternal("p",e,t,s,o)}merge(e,t,s,o){this.putInternal("m",e,t,s,o)}putInternal(e,t,s,o,a){this.initConnection_();const c={p:t,d:s};a!==void 0&&(c.h=a),this.outstandingPuts_.push({action:e,request:c,onComplete:o}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,o=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,a=>{this.log_(t+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(a.s,a.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const a=s.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+$e(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):td("Unrecognized action received from server: "+$e(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){z(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ps,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ps,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>F0&&(this.reconnectDelay_=Ps),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*b0)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+kn.nextConnectionId_++,a=this.lastSessionId;let c=!1,f=null;const p=function(){f?f.close():(c=!0,s())},m=function(_){z(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(_)};this.realtime_={close:p,sendRequest:m};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[_,w]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);c?Ze("getToken() completed but was canceled"):(Ze("getToken() completed. Creating connection."),this.authToken_=_&&_.accessToken,this.appCheckToken_=w&&w.token,f=new P0(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,R=>{ht(R+" ("+this.repoInfo_.toString()+")"),this.interrupt(U0)},a))}catch(_){this.log_("Failed to get token: "+_),c||(this.repoInfo_.nodeAdmin&&ht(_),p())}}}interrupt(e){Ze("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ze("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Vc(this.interruptReasons_)&&(this.reconnectDelay_=Ps,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(a=>Ud(a)).join("$"):s="default";const o=this.removeListen_(e,s);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(e,t){const s=new ve(e).toString();let o;if(this.listens.has(s)){const a=this.listens.get(s);o=a.get(t),a.delete(t),a.size===0&&this.listens.delete(s)}else o=void 0;return o}onAuthRevoked_(e,t){Ze("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=wg&&(this.reconnectDelay_=vg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Ze("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=wg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+J_.replace(/\./g,"-")]=1,Id()?e["framework.cordova"]=1:a_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ea.getInstance().currentlyOnline();return Vc(this.interruptReasons_)&&e}}kn.nextPersistentConnectionId_=0;kn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ue{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new ue(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ya{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new ue(Fr,e),o=new ue(Fr,t);return this.compare(s,o)!==0}minPost(){return ue.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let Dl;class Sy extends ya{static get __EMPTY_NODE(){return Dl}static set __EMPTY_NODE(e){Dl=e}compare(e,t){return Br(e.name,t.name)}isDefinedOn(e){throw Ai("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return ue.MIN}maxPost(){return new ue(ar,Dl)}makePost(e,t){return z(typeof e=="string","KeyIndex indexValue must always be a string."),new ue(e,Dl)}toString(){return".key"}}const Lr=new Sy;/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ml{constructor(e,t,s,o,a=null){this.isReverse_=o,this.resultGenerator_=a,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?s(e.key,t):1,o&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ye{constructor(e,t,s,o,a){this.key=e,this.value=t,this.color=s??Ye.RED,this.left=o??wt.EMPTY_NODE,this.right=a??wt.EMPTY_NODE}copy(e,t,s,o,a){return new Ye(e??this.key,t??this.value,s??this.color,o??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const a=s(e,o.key);return a<0?o=o.copy(null,null,null,o.left.insert(e,t,s),null):a===0?o=o.copy(null,t,null,null,null):o=o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return wt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,o;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return wt.EMPTY_NODE;o=s.right.min_(),s=s.copy(o.key,o.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ye.RED=!0;Ye.BLACK=!1;class j0{copy(e,t,s,o,a){return this}insert(e,t,s){return new Ye(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class wt{constructor(e,t=wt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new wt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ye.BLACK,null,null))}remove(e){return new wt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ye.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,o=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return o?o.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(o=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ml(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ml(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ml(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ml(this.root_,null,this.comparator_,!0,e)}}wt.EMPTY_NODE=new j0;/**
 * @license
 * Copyright 2017 Google LLC
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
 */function z0(r,e){return Br(r.name,e.name)}function $d(r,e){return Br(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let rd;function B0(r){rd=r}const Iy=function(r){return typeof r=="number"?"number:"+ty(r):"string:"+r},ky=function(r){if(r.isLeafNode()){const e=r.val();z(typeof e=="string"||typeof e=="number"||typeof e=="object"&&un(e,".sv"),"Priority must be a string or number.")}else z(r===rd||r.isEmpty(),"priority of unexpected type.");z(r===rd||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
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
 */let Eg;class Qe{static set __childrenNodeConstructor(e){Eg=e}static get __childrenNodeConstructor(){return Eg}constructor(e,t=Qe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,z(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ky(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Qe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Qe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ae(e)?this:de(e)===".priority"?this.priorityNode_:Qe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Qe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=de(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(z(s!==".priority"||ur(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Qe.__childrenNodeConstructor.EMPTY_NODE.updateChild(ke(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Iy(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=ty(this.value_):e+=this.value_,this.lazyHash_=Z_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Qe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Qe.__childrenNodeConstructor?-1:(z(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,o=Qe.VALUE_TYPE_ORDER.indexOf(t),a=Qe.VALUE_TYPE_ORDER.indexOf(s);return z(o>=0,"Unknown leaf type: "+t),z(a>=0,"Unknown leaf type: "+s),o===a?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-o}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Qe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
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
 */let Ty,Ry;function W0(r){Ty=r}function H0(r){Ry=r}class $0 extends ya{compare(e,t){const s=e.node.getPriority(),o=t.node.getPriority(),a=s.compareTo(o);return a===0?Br(e.name,t.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return ue.MIN}maxPost(){return new ue(ar,new Qe("[PRIORITY-POST]",Ry))}makePost(e,t){const s=Ty(e);return new ue(t,new Qe("[PRIORITY-POST]",s))}toString(){return".priority"}}const De=new $0;/**
 * @license
 * Copyright 2017 Google LLC
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
 */const V0=Math.log(2);class G0{constructor(e){const t=a=>parseInt(Math.log(a)/V0,10),s=a=>parseInt(Array(a+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const o=s(this.count);this.bits_=e+1&o}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ta=function(r,e,t,s){r.sort(e);const o=function(p,m){const y=m-p;let _,w;if(y===0)return null;if(y===1)return _=r[p],w=t?t(_):_,new Ye(w,_.node,Ye.BLACK,null,null);{const R=parseInt(y/2,10)+p,I=o(p,R),L=o(R+1,m);return _=r[R],w=t?t(_):_,new Ye(w,_.node,Ye.BLACK,I,L)}},a=function(p){let m=null,y=null,_=r.length;const w=function(I,L){const A=_-I,b=_;_-=I;const H=o(A+1,b),B=r[A],ee=t?t(B):B;R(new Ye(ee,B.node,L,null,H))},R=function(I){m?(m.left=I,m=I):(y=I,m=I)};for(let I=0;I<p.count;++I){const L=p.nextBitIsOne(),A=Math.pow(2,p.count-(I+1));L?w(A,Ye.BLACK):(w(A,Ye.BLACK),w(A,Ye.RED))}return y},c=new G0(r.length),f=a(c);return new wt(s||e,f)};/**
 * @license
 * Copyright 2017 Google LLC
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
 */let jc;const xs={};class En{static get Default(){return z(De,"ChildrenNode.ts has not been loaded"),jc=jc||new En({".priority":xs},{".priority":De}),jc}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=wi(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof wt?t:null}hasIndex(e){return un(this.indexSet_,e.toString())}addIndex(e,t){z(e!==Lr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let o=!1;const a=t.getIterator(ue.Wrap);let c=a.getNext();for(;c;)o=o||e.isDefinedOn(c.node),s.push(c),c=a.getNext();let f;o?f=ta(s,e.getCompare()):f=xs;const p=e.toString(),m=Object.assign({},this.indexSet_);m[p]=e;const y=Object.assign({},this.indexes_);return y[p]=f,new En(y,m)}addToIndexes(e,t){const s=Gl(this.indexes_,(o,a)=>{const c=wi(this.indexSet_,a);if(z(c,"Missing index implementation for "+a),o===xs)if(c.isDefinedOn(e.node)){const f=[],p=t.getIterator(ue.Wrap);let m=p.getNext();for(;m;)m.name!==e.name&&f.push(m),m=p.getNext();return f.push(e),ta(f,c.getCompare())}else return xs;else{const f=t.get(e.name);let p=o;return f&&(p=p.remove(new ue(e.name,f))),p.insert(e,e.node)}});return new En(s,this.indexSet_)}removeFromIndexes(e,t){const s=Gl(this.indexes_,o=>{if(o===xs)return o;{const a=t.get(e.name);return a?o.remove(new ue(e.name,a)):o}});return new En(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let As;class Z{static get EMPTY_NODE(){return As||(As=new Z(new wt($d),null,En.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&ky(this.priorityNode_),this.children_.isEmpty()&&z(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||As}updatePriority(e){return this.children_.isEmpty()?this:new Z(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?As:t}}getChild(e){const t=de(e);return t===null?this:this.getImmediateChild(t).getChild(ke(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(z(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new ue(e,t);let o,a;t.isEmpty()?(o=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(s,this.children_)):(o=this.children_.insert(e,t),a=this.indexMap_.addToIndexes(s,this.children_));const c=o.isEmpty()?As:this.priorityNode_;return new Z(o,c,a)}}updateChild(e,t){const s=de(e);if(s===null)return t;{z(de(e)!==".priority"||ur(e)===1,".priority must be the last token in a path");const o=this.getImmediateChild(s).updateChild(ke(e),t);return this.updateImmediateChild(s,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,o=0,a=!0;if(this.forEachChild(De,(c,f)=>{t[c]=f.val(e),s++,a&&Z.INTEGER_REGEXP_.test(c)?o=Math.max(o,Number(c)):a=!1}),!e&&a&&o<2*s){const c=[];for(const f in t)c[f]=t[f];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Iy(this.getPriority().val())+":"),this.forEachChild(De,(t,s)=>{const o=s.hash();o!==""&&(e+=":"+t+":"+o)}),this.lazyHash_=e===""?"":Z_(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const o=this.resolveIndex_(s);if(o){const a=o.getPredecessorKey(new ue(e,t));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new ue(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new ue(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(o=>t(o.name,o.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,o=>o);{const o=this.children_.getIteratorFrom(e.name,ue.Wrap);let a=o.peek();for(;a!=null&&t.compare(a,e)<0;)o.getNext(),a=o.peek();return o}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,o=>o);{const o=this.children_.getReverseIteratorFrom(e.name,ue.Wrap);let a=o.peek();for(;a!=null&&t.compare(a,e)>0;)o.getNext(),a=o.peek();return o}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===mo?-1:0}withIndex(e){if(e===Lr||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Z(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Lr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(De),o=t.getIterator(De);let a=s.getNext(),c=o.getNext();for(;a&&c;){if(a.name!==c.name||!a.node.equals(c.node))return!1;a=s.getNext(),c=o.getNext()}return a===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===Lr?null:this.indexMap_.get(e.toString())}}Z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class K0 extends Z{constructor(){super(new wt($d),Z.EMPTY_NODE,En.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Z.EMPTY_NODE}isEmpty(){return!1}}const mo=new K0;Object.defineProperties(ue,{MIN:{value:new ue(Fr,Z.EMPTY_NODE)},MAX:{value:new ue(ar,mo)}});Sy.__EMPTY_NODE=Z.EMPTY_NODE;Qe.__childrenNodeConstructor=Z;B0(mo);H0(mo);/**
 * @license
 * Copyright 2017 Google LLC
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
 */const q0=!0;function He(r,e=null){if(r===null)return Z.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),z(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){const t=r;return new Qe(t,He(e))}if(!(r instanceof Array)&&q0){const t=[];let s=!1;if(et(r,(c,f)=>{if(c.substring(0,1)!=="."){const p=He(f);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),t.push(new ue(c,p)))}}),t.length===0)return Z.EMPTY_NODE;const a=ta(t,z0,c=>c.name,$d);if(s){const c=ta(t,De.getCompare());return new Z(a,He(e),new En({".priority":c},{".priority":De}))}else return new Z(a,He(e),En.Default)}else{let t=Z.EMPTY_NODE;return et(r,(s,o)=>{if(un(r,s)&&s.substring(0,1)!=="."){const a=He(o);(a.isLeafNode()||!a.isEmpty())&&(t=t.updateImmediateChild(s,a))}}),t.updatePriority(He(e))}}W0(He);/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Vd extends ya{constructor(e){super(),this.indexPath_=e,z(!ae(e)&&de(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),o=this.extractChild(t.node),a=s.compareTo(o);return a===0?Br(e.name,t.name):a}makePost(e,t){const s=He(e),o=Z.EMPTY_NODE.updateChild(this.indexPath_,s);return new ue(t,o)}maxPost(){const e=Z.EMPTY_NODE.updateChild(this.indexPath_,mo);return new ue(ar,e)}toString(){return Qs(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Q0 extends ya{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Br(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return ue.MIN}maxPost(){return ue.MAX}makePost(e,t){const s=He(e);return new ue(t,s)}toString(){return".value"}}const Ny=new Q0;/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Py(r){return{type:"value",snapshotNode:r}}function Ci(r,e){return{type:"child_added",snapshotNode:e,childName:r}}function Ys(r,e){return{type:"child_removed",snapshotNode:e,childName:r}}function Js(r,e,t){return{type:"child_changed",snapshotNode:e,childName:r,oldSnap:t}}function Y0(r,e){return{type:"child_moved",snapshotNode:e,childName:r}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Gd{constructor(e){this.index_=e}updateChild(e,t,s,o,a,c){z(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(t);return f.getChild(o).equals(s.getChild(o))&&f.isEmpty()===s.isEmpty()||(c!=null&&(s.isEmpty()?e.hasChild(t)?c.trackChildChange(Ys(t,f)):z(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?c.trackChildChange(Ci(t,s)):c.trackChildChange(Js(t,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(De,(o,a)=>{t.hasChild(o)||s.trackChildChange(Ys(o,a))}),t.isLeafNode()||t.forEachChild(De,(o,a)=>{if(e.hasChild(o)){const c=e.getImmediateChild(o);c.equals(a)||s.trackChildChange(Js(o,a,c))}else s.trackChildChange(Ci(o,a))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Z.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Xs{constructor(e){this.indexedFilter_=new Gd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Xs.getStartPost_(e),this.endPost_=Xs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,o,a,c){return this.matches(new ue(t,s))||(s=Z.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,o,a,c)}updateFullNode(e,t,s){t.isLeafNode()&&(t=Z.EMPTY_NODE);let o=t.withIndex(this.index_);o=o.updatePriority(Z.EMPTY_NODE);const a=this;return t.forEachChild(De,(c,f)=>{a.matches(new ue(c,f))||(o=o.updateImmediateChild(c,Z.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,o,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class J0{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Xs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,o,a,c){return this.rangedFilter_.matches(new ue(t,s))||(s=Z.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,o,a,c):this.fullLimitUpdateChild_(e,t,s,a,c)}updateFullNode(e,t,s){let o;if(t.isLeafNode()||t.isEmpty())o=Z.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){o=Z.EMPTY_NODE.withIndex(this.index_);let a;this.reverse_?a=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):a=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let c=0;for(;a.hasNext()&&c<this.limit_;){const f=a.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))o=o.updateImmediateChild(f.name,f.node),c++;else break;else continue}}else{o=t.withIndex(this.index_),o=o.updatePriority(Z.EMPTY_NODE);let a;this.reverse_?a=o.getReverseIterator(this.index_):a=o.getIterator(this.index_);let c=0;for(;a.hasNext();){const f=a.getNext();c<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?c++:o=o.updateImmediateChild(f.name,Z.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,o,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,o,a){let c;if(this.reverse_){const _=this.index_.getCompare();c=(w,R)=>_(R,w)}else c=this.index_.getCompare();const f=e;z(f.numChildren()===this.limit_,"");const p=new ue(t,s),m=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),y=this.rangedFilter_.matches(p);if(f.hasChild(t)){const _=f.getImmediateChild(t);let w=o.getChildAfterChild(this.index_,m,this.reverse_);for(;w!=null&&(w.name===t||f.hasChild(w.name));)w=o.getChildAfterChild(this.index_,w,this.reverse_);const R=w==null?1:c(w,p);if(y&&!s.isEmpty()&&R>=0)return a!=null&&a.trackChildChange(Js(t,s,_)),f.updateImmediateChild(t,s);{a!=null&&a.trackChildChange(Ys(t,_));const L=f.updateImmediateChild(t,Z.EMPTY_NODE);return w!=null&&this.rangedFilter_.matches(w)?(a!=null&&a.trackChildChange(Ci(w.name,w.node)),L.updateImmediateChild(w.name,w.node)):L}}else return s.isEmpty()?e:y&&c(m,p)>=0?(a!=null&&(a.trackChildChange(Ys(m.name,m.node)),a.trackChildChange(Ci(t,s))),f.updateImmediateChild(t,s).updateImmediateChild(m.name,Z.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Kd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=De}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return z(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return z(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Fr}hasEnd(){return this.endSet_}getIndexEndValue(){return z(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return z(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ar}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return z(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===De}copy(){const e=new Kd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function X0(r){return r.loadsAllData()?new Gd(r.getIndex()):r.hasLimit()?new J0(r):new Xs(r)}function Z0(r,e,t){const s=r.copy();return s.startSet_=!0,e===void 0&&(e=null),s.indexStartValue_=e,t!=null?(s.startNameSet_=!0,s.indexStartName_=t):(s.startNameSet_=!1,s.indexStartName_=""),s}function eR(r,e,t){const s=r.copy();return s.endSet_=!0,e===void 0&&(e=null),s.indexEndValue_=e,t!==void 0?(s.endNameSet_=!0,s.indexEndName_=t):(s.endNameSet_=!1,s.indexEndName_=""),s}function tR(r,e){const t=r.copy();return t.index_=e,t}function Cg(r){const e={};if(r.isDefault())return e;let t;if(r.index_===De?t="$priority":r.index_===Ny?t="$value":r.index_===Lr?t="$key":(z(r.index_ instanceof Vd,"Unrecognized index type!"),t=r.index_.toString()),e.orderBy=$e(t),r.startSet_){const s=r.startAfterSet_?"startAfter":"startAt";e[s]=$e(r.indexStartValue_),r.startNameSet_&&(e[s]+=","+$e(r.indexStartName_))}if(r.endSet_){const s=r.endBeforeSet_?"endBefore":"endAt";e[s]=$e(r.indexEndValue_),r.endNameSet_&&(e[s]+=","+$e(r.indexEndName_))}return r.limitSet_&&(r.isViewFromLeft()?e.limitToFirst=r.limit_:e.limitToLast=r.limit_),e}function Sg(r){const e={};if(r.startSet_&&(e.sp=r.indexStartValue_,r.startNameSet_&&(e.sn=r.indexStartName_),e.sin=!r.startAfterSet_),r.endSet_&&(e.ep=r.indexEndValue_,r.endNameSet_&&(e.en=r.indexEndName_),e.ein=!r.endBeforeSet_),r.limitSet_){e.l=r.limit_;let t=r.viewFrom_;t===""&&(r.isViewFromLeft()?t="l":t="r"),e.vf=t}return r.index_!==De&&(e.i=r.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class na extends yy{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(z(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,o){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.log_=po("p:rest:"),this.listens_={}}listen(e,t,s,o){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const c=na.getListenId_(e,s),f={};this.listens_[c]=f;const p=Cg(e._queryParams);this.restRequest_(a+".json",p,(m,y)=>{let _=y;if(m===404&&(_=null,m=null),m===null&&this.onDataUpdate_(a,_,!1,s),wi(this.listens_,c)===f){let w;m?m===401?w="permission_denied":w="rest_error:"+m:w="ok",o(w,null)}})}unlisten(e,t){const s=na.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Cg(e._queryParams),s=e._path.toString(),o=new oo;return this.restRequest_(s+".json",t,(a,c)=>{let f=c;a===404&&(f=null,a=null),a===null?(this.onDataUpdate_(s,f,!1,null),o.resolve(f)):o.reject(new Error(f))}),o.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,a])=>{o&&o.accessToken&&(t.auth=o.accessToken),a&&a.token&&(t.ac=a.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Oi(t);this.log_("Sending REST request for "+c);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+c+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=Hs(f.responseText)}catch{ht("Failed to parse JSON response for "+c+": "+f.responseText)}s(null,p)}else f.status!==401&&f.status!==404&&ht("Got unsuccessful REST response for "+c+" Status: "+f.status),s(f.status);s=null}},f.open("GET",c,!0),f.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class nR{constructor(){this.rootNode_=Z.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function ra(){return{value:null,children:new Map}}function xy(r,e,t){if(ae(e))r.value=t,r.children.clear();else if(r.value!==null)r.value=r.value.updateChild(e,t);else{const s=de(e);r.children.has(s)||r.children.set(s,ra());const o=r.children.get(s);e=ke(e),xy(o,e,t)}}function id(r,e,t){r.value!==null?t(e,r.value):rR(r,(s,o)=>{const a=new ve(e.toString()+"/"+s);id(o,a,t)})}function rR(r,e){r.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class iR{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&et(this.last_,(s,o)=>{t[s]=t[s]-o}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Ig=10*1e3,sR=30*1e3,oR=5*60*1e3;class lR{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new iR(e);const s=Ig+(sR-Ig)*Math.random();Us(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;et(e,(o,a)=>{a>0&&un(this.statsToReport_,o)&&(t[o]=a,s=!0)}),s&&this.server_.reportStats(t),Us(this.reportStats_.bind(this),Math.floor(Math.random()*2*oR))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var qt;(function(r){r[r.OVERWRITE=0]="OVERWRITE",r[r.MERGE=1]="MERGE",r[r.ACK_USER_WRITE=2]="ACK_USER_WRITE",r[r.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(qt||(qt={}));function qd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Qd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Yd(r){return{fromUser:!1,fromServer:!0,queryId:r,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ia{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=qt.ACK_USER_WRITE,this.source=qd()}operationForChild(e){if(ae(this.path)){if(this.affectedTree.value!=null)return z(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ve(e));return new ia(me(),t,this.revert)}}else return z(de(this.path)===e,"operationForChild called for unrelated child."),new ia(ke(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Zs{constructor(e,t){this.source=e,this.path=t,this.type=qt.LISTEN_COMPLETE}operationForChild(e){return ae(this.path)?new Zs(this.source,me()):new Zs(this.source,ke(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ur{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=qt.OVERWRITE}operationForChild(e){return ae(this.path)?new Ur(this.source,me(),this.snap.getImmediateChild(e)):new Ur(this.source,ke(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Si{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=qt.MERGE}operationForChild(e){if(ae(this.path)){const t=this.children.subtree(new ve(e));return t.isEmpty()?null:t.value?new Ur(this.source,me(),t.value):new Si(this.source,me(),t)}else return z(de(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Si(this.source,ke(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class cr{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ae(e))return this.isFullyInitialized()&&!this.filtered_;const t=de(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class aR{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function uR(r,e,t,s){const o=[],a=[];return e.forEach(c=>{c.type==="child_changed"&&r.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&a.push(Y0(c.childName,c.snapshotNode))}),Os(r,o,"child_removed",e,s,t),Os(r,o,"child_added",e,s,t),Os(r,o,"child_moved",a,s,t),Os(r,o,"child_changed",e,s,t),Os(r,o,"value",e,s,t),o}function Os(r,e,t,s,o,a){const c=s.filter(f=>f.type===t);c.sort((f,p)=>dR(r,f,p)),c.forEach(f=>{const p=cR(r,f,a);o.forEach(m=>{m.respondsTo(f.type)&&e.push(m.createEvent(p,r.query_))})})}function cR(r,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,r.index_)),e}function dR(r,e,t){if(e.childName==null||t.childName==null)throw Ai("Should only compare child_ events.");const s=new ue(e.childName,e.snapshotNode),o=new ue(t.childName,t.snapshotNode);return r.index_.compare(s,o)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function va(r,e){return{eventCache:r,serverCache:e}}function js(r,e,t,s){return va(new cr(e,t,s),r.serverCache)}function Ay(r,e,t,s){return va(r.eventCache,new cr(e,t,s))}function sa(r){return r.eventCache.isFullyInitialized()?r.eventCache.getNode():null}function jr(r){return r.serverCache.isFullyInitialized()?r.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let zc;const hR=()=>(zc||(zc=new wt(QT)),zc);class Ie{static fromObject(e){let t=new Ie(null);return et(e,(s,o)=>{t=t.set(new ve(s),o)}),t}constructor(e,t=hR()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:me(),value:this.value};if(ae(e))return null;{const s=de(e),o=this.children.get(s);if(o!==null){const a=o.findRootMostMatchingPathAndValue(ke(e),t);return a!=null?{path:Fe(new ve(s),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ae(e))return this;{const t=de(e),s=this.children.get(t);return s!==null?s.subtree(ke(e)):new Ie(null)}}set(e,t){if(ae(e))return new Ie(t,this.children);{const s=de(e),a=(this.children.get(s)||new Ie(null)).set(ke(e),t),c=this.children.insert(s,a);return new Ie(this.value,c)}}remove(e){if(ae(e))return this.children.isEmpty()?new Ie(null):new Ie(null,this.children);{const t=de(e),s=this.children.get(t);if(s){const o=s.remove(ke(e));let a;return o.isEmpty()?a=this.children.remove(t):a=this.children.insert(t,o),this.value===null&&a.isEmpty()?new Ie(null):new Ie(this.value,a)}else return this}}get(e){if(ae(e))return this.value;{const t=de(e),s=this.children.get(t);return s?s.get(ke(e)):null}}setTree(e,t){if(ae(e))return t;{const s=de(e),a=(this.children.get(s)||new Ie(null)).setTree(ke(e),t);let c;return a.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,a),new Ie(this.value,c)}}fold(e){return this.fold_(me(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((o,a)=>{s[o]=a.fold_(Fe(e,o),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,me(),t)}findOnPath_(e,t,s){const o=this.value?s(t,this.value):!1;if(o)return o;if(ae(e))return null;{const a=de(e),c=this.children.get(a);return c?c.findOnPath_(ke(e),Fe(t,a),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,me(),t)}foreachOnPath_(e,t,s){if(ae(e))return this;{this.value&&s(t,this.value);const o=de(e),a=this.children.get(o);return a?a.foreachOnPath_(ke(e),Fe(t,o),s):new Ie(null)}}foreach(e){this.foreach_(me(),e)}foreach_(e,t){this.children.inorderTraversal((s,o)=>{o.foreach_(Fe(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Qt{constructor(e){this.writeTree_=e}static empty(){return new Qt(new Ie(null))}}function zs(r,e,t){if(ae(e))return new Qt(new Ie(t));{const s=r.writeTree_.findRootMostValueAndPath(e);if(s!=null){const o=s.path;let a=s.value;const c=dt(o,e);return a=a.updateChild(c,t),new Qt(r.writeTree_.set(o,a))}else{const o=new Ie(t),a=r.writeTree_.setTree(e,o);return new Qt(a)}}}function sd(r,e,t){let s=r;return et(t,(o,a)=>{s=zs(s,Fe(e,o),a)}),s}function kg(r,e){if(ae(e))return Qt.empty();{const t=r.writeTree_.setTree(e,new Ie(null));return new Qt(t)}}function od(r,e){return Wr(r,e)!=null}function Wr(r,e){const t=r.writeTree_.findRootMostValueAndPath(e);return t!=null?r.writeTree_.get(t.path).getChild(dt(t.path,e)):null}function Tg(r){const e=[],t=r.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(De,(s,o)=>{e.push(new ue(s,o))}):r.writeTree_.children.inorderTraversal((s,o)=>{o.value!=null&&e.push(new ue(s,o.value))}),e}function sr(r,e){if(ae(e))return r;{const t=Wr(r,e);return t!=null?new Qt(new Ie(t)):new Qt(r.writeTree_.subtree(e))}}function ld(r){return r.writeTree_.isEmpty()}function Ii(r,e){return Oy(me(),r.writeTree_,e)}function Oy(r,e,t){if(e.value!=null)return t.updateChild(r,e.value);{let s=null;return e.children.inorderTraversal((o,a)=>{o===".priority"?(z(a.value!==null,"Priority writes must always be leaf nodes"),s=a.value):t=Oy(Fe(r,o),a,t)}),!t.getChild(r).isEmpty()&&s!==null&&(t=t.updateChild(Fe(r,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function wa(r,e){return by(e,r)}function fR(r,e,t,s,o){z(s>r.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),r.allWrites.push({path:e,snap:t,writeId:s,visible:o}),o&&(r.visibleWrites=zs(r.visibleWrites,e,t)),r.lastWriteId=s}function pR(r,e,t,s){z(s>r.lastWriteId,"Stacking an older merge on top of newer ones"),r.allWrites.push({path:e,children:t,writeId:s,visible:!0}),r.visibleWrites=sd(r.visibleWrites,e,t),r.lastWriteId=s}function mR(r,e){for(let t=0;t<r.allWrites.length;t++){const s=r.allWrites[t];if(s.writeId===e)return s}return null}function gR(r,e){const t=r.allWrites.findIndex(f=>f.writeId===e);z(t>=0,"removeWrite called with nonexistent writeId.");const s=r.allWrites[t];r.allWrites.splice(t,1);let o=s.visible,a=!1,c=r.allWrites.length-1;for(;o&&c>=0;){const f=r.allWrites[c];f.visible&&(c>=t&&_R(f,s.path)?o=!1:Ft(s.path,f.path)&&(a=!0)),c--}if(o){if(a)return yR(r),!0;if(s.snap)r.visibleWrites=kg(r.visibleWrites,s.path);else{const f=s.children;et(f,p=>{r.visibleWrites=kg(r.visibleWrites,Fe(s.path,p))})}return!0}else return!1}function _R(r,e){if(r.snap)return Ft(r.path,e);for(const t in r.children)if(r.children.hasOwnProperty(t)&&Ft(Fe(r.path,t),e))return!0;return!1}function yR(r){r.visibleWrites=Ly(r.allWrites,vR,me()),r.allWrites.length>0?r.lastWriteId=r.allWrites[r.allWrites.length-1].writeId:r.lastWriteId=-1}function vR(r){return r.visible}function Ly(r,e,t){let s=Qt.empty();for(let o=0;o<r.length;++o){const a=r[o];if(e(a)){const c=a.path;let f;if(a.snap)Ft(t,c)?(f=dt(t,c),s=zs(s,f,a.snap)):Ft(c,t)&&(f=dt(c,t),s=zs(s,me(),a.snap.getChild(f)));else if(a.children){if(Ft(t,c))f=dt(t,c),s=sd(s,f,a.children);else if(Ft(c,t))if(f=dt(c,t),ae(f))s=sd(s,me(),a.children);else{const p=wi(a.children,de(f));if(p){const m=p.getChild(ke(f));s=zs(s,me(),m)}}}else throw Ai("WriteRecord should have .snap or .children")}}return s}function Dy(r,e,t,s,o){if(!s&&!o){const a=Wr(r.visibleWrites,e);if(a!=null)return a;{const c=sr(r.visibleWrites,e);if(ld(c))return t;if(t==null&&!od(c,me()))return null;{const f=t||Z.EMPTY_NODE;return Ii(c,f)}}}else{const a=sr(r.visibleWrites,e);if(!o&&ld(a))return t;if(!o&&t==null&&!od(a,me()))return null;{const c=function(m){return(m.visible||o)&&(!s||!~s.indexOf(m.writeId))&&(Ft(m.path,e)||Ft(e,m.path))},f=Ly(r.allWrites,c,e),p=t||Z.EMPTY_NODE;return Ii(f,p)}}}function wR(r,e,t){let s=Z.EMPTY_NODE;const o=Wr(r.visibleWrites,e);if(o)return o.isLeafNode()||o.forEachChild(De,(a,c)=>{s=s.updateImmediateChild(a,c)}),s;if(t){const a=sr(r.visibleWrites,e);return t.forEachChild(De,(c,f)=>{const p=Ii(sr(a,new ve(c)),f);s=s.updateImmediateChild(c,p)}),Tg(a).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const a=sr(r.visibleWrites,e);return Tg(a).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function ER(r,e,t,s,o){z(s||o,"Either existingEventSnap or existingServerSnap must exist");const a=Fe(e,t);if(od(r.visibleWrites,a))return null;{const c=sr(r.visibleWrites,a);return ld(c)?o.getChild(t):Ii(c,o.getChild(t))}}function CR(r,e,t,s){const o=Fe(e,t),a=Wr(r.visibleWrites,o);if(a!=null)return a;if(s.isCompleteForChild(t)){const c=sr(r.visibleWrites,o);return Ii(c,s.getNode().getImmediateChild(t))}else return null}function SR(r,e){return Wr(r.visibleWrites,e)}function IR(r,e,t,s,o,a,c){let f;const p=sr(r.visibleWrites,e),m=Wr(p,me());if(m!=null)f=m;else if(t!=null)f=Ii(p,t);else return[];if(f=f.withIndex(c),!f.isEmpty()&&!f.isLeafNode()){const y=[],_=c.getCompare(),w=a?f.getReverseIteratorFrom(s,c):f.getIteratorFrom(s,c);let R=w.getNext();for(;R&&y.length<o;)_(R,s)!==0&&y.push(R),R=w.getNext();return y}else return[]}function kR(){return{visibleWrites:Qt.empty(),allWrites:[],lastWriteId:-1}}function oa(r,e,t,s){return Dy(r.writeTree,r.treePath,e,t,s)}function Jd(r,e){return wR(r.writeTree,r.treePath,e)}function Rg(r,e,t,s){return ER(r.writeTree,r.treePath,e,t,s)}function la(r,e){return SR(r.writeTree,Fe(r.treePath,e))}function TR(r,e,t,s,o,a){return IR(r.writeTree,r.treePath,e,t,s,o,a)}function Xd(r,e,t){return CR(r.writeTree,r.treePath,e,t)}function My(r,e){return by(Fe(r.treePath,e),r.writeTree)}function by(r,e){return{treePath:r,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class RR{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;z(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),z(s!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(s);if(o){const a=o.type;if(t==="child_added"&&a==="child_removed")this.changeMap.set(s,Js(s,e.snapshotNode,o.snapshotNode));else if(t==="child_removed"&&a==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&a==="child_changed")this.changeMap.set(s,Ys(s,o.oldSnap));else if(t==="child_changed"&&a==="child_added")this.changeMap.set(s,Ci(s,e.snapshotNode));else if(t==="child_changed"&&a==="child_changed")this.changeMap.set(s,Js(s,e.snapshotNode,o.oldSnap));else throw Ai("Illegal combination of changes: "+e+" occurred after "+o)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class NR{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Fy=new NR;class Zd{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new cr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Xd(this.writes_,e,s)}}getChildAfterChild(e,t,s){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:jr(this.viewCache_),a=TR(this.writes_,o,t,1,s,e);return a.length===0?null:a[0]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function PR(r){return{filter:r}}function xR(r,e){z(e.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),z(e.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed")}function AR(r,e,t,s,o){const a=new RR;let c,f;if(t.type===qt.OVERWRITE){const m=t;m.source.fromUser?c=ad(r,e,m.path,m.snap,s,o,a):(z(m.source.fromServer,"Unknown source."),f=m.source.tagged||e.serverCache.isFiltered()&&!ae(m.path),c=aa(r,e,m.path,m.snap,s,o,f,a))}else if(t.type===qt.MERGE){const m=t;m.source.fromUser?c=LR(r,e,m.path,m.children,s,o,a):(z(m.source.fromServer,"Unknown source."),f=m.source.tagged||e.serverCache.isFiltered(),c=ud(r,e,m.path,m.children,s,o,f,a))}else if(t.type===qt.ACK_USER_WRITE){const m=t;m.revert?c=bR(r,e,m.path,s,o,a):c=DR(r,e,m.path,m.affectedTree,s,o,a)}else if(t.type===qt.LISTEN_COMPLETE)c=MR(r,e,t.path,s,a);else throw Ai("Unknown operation type: "+t.type);const p=a.getChanges();return OR(e,c,p),{viewCache:c,changes:p}}function OR(r,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const o=s.getNode().isLeafNode()||s.getNode().isEmpty(),a=sa(r);(t.length>0||!r.eventCache.isFullyInitialized()||o&&!s.getNode().equals(a)||!s.getNode().getPriority().equals(a.getPriority()))&&t.push(Py(sa(e)))}}function Uy(r,e,t,s,o,a){const c=e.eventCache;if(la(s,t)!=null)return e;{let f,p;if(ae(t))if(z(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=jr(e),y=m instanceof Z?m:Z.EMPTY_NODE,_=Jd(s,y);f=r.filter.updateFullNode(e.eventCache.getNode(),_,a)}else{const m=oa(s,jr(e));f=r.filter.updateFullNode(e.eventCache.getNode(),m,a)}else{const m=de(t);if(m===".priority"){z(ur(t)===1,"Can't have a priority with additional path components");const y=c.getNode();p=e.serverCache.getNode();const _=Rg(s,t,y,p);_!=null?f=r.filter.updatePriority(y,_):f=c.getNode()}else{const y=ke(t);let _;if(c.isCompleteForChild(m)){p=e.serverCache.getNode();const w=Rg(s,t,c.getNode(),p);w!=null?_=c.getNode().getImmediateChild(m).updateChild(y,w):_=c.getNode().getImmediateChild(m)}else _=Xd(s,m,e.serverCache);_!=null?f=r.filter.updateChild(c.getNode(),m,_,y,o,a):f=c.getNode()}}return js(e,f,c.isFullyInitialized()||ae(t),r.filter.filtersNodes())}}function aa(r,e,t,s,o,a,c,f){const p=e.serverCache;let m;const y=c?r.filter:r.filter.getIndexedFilter();if(ae(t))m=y.updateFullNode(p.getNode(),s,null);else if(y.filtersNodes()&&!p.isFiltered()){const R=p.getNode().updateChild(t,s);m=y.updateFullNode(p.getNode(),R,null)}else{const R=de(t);if(!p.isCompleteForPath(t)&&ur(t)>1)return e;const I=ke(t),A=p.getNode().getImmediateChild(R).updateChild(I,s);R===".priority"?m=y.updatePriority(p.getNode(),A):m=y.updateChild(p.getNode(),R,A,I,Fy,null)}const _=Ay(e,m,p.isFullyInitialized()||ae(t),y.filtersNodes()),w=new Zd(o,_,a);return Uy(r,_,t,o,w,f)}function ad(r,e,t,s,o,a,c){const f=e.eventCache;let p,m;const y=new Zd(o,e,a);if(ae(t))m=r.filter.updateFullNode(e.eventCache.getNode(),s,c),p=js(e,m,!0,r.filter.filtersNodes());else{const _=de(t);if(_===".priority")m=r.filter.updatePriority(e.eventCache.getNode(),s),p=js(e,m,f.isFullyInitialized(),f.isFiltered());else{const w=ke(t),R=f.getNode().getImmediateChild(_);let I;if(ae(w))I=s;else{const L=y.getCompleteChild(_);L!=null?Wd(w)===".priority"&&L.getChild(wy(w)).isEmpty()?I=L:I=L.updateChild(w,s):I=Z.EMPTY_NODE}if(R.equals(I))p=e;else{const L=r.filter.updateChild(f.getNode(),_,I,w,y,c);p=js(e,L,f.isFullyInitialized(),r.filter.filtersNodes())}}}return p}function Ng(r,e){return r.eventCache.isCompleteForChild(e)}function LR(r,e,t,s,o,a,c){let f=e;return s.foreach((p,m)=>{const y=Fe(t,p);Ng(e,de(y))&&(f=ad(r,f,y,m,o,a,c))}),s.foreach((p,m)=>{const y=Fe(t,p);Ng(e,de(y))||(f=ad(r,f,y,m,o,a,c))}),f}function Pg(r,e,t){return t.foreach((s,o)=>{e=e.updateChild(s,o)}),e}function ud(r,e,t,s,o,a,c,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,m;ae(t)?m=s:m=new Ie(null).setTree(t,s);const y=e.serverCache.getNode();return m.children.inorderTraversal((_,w)=>{if(y.hasChild(_)){const R=e.serverCache.getNode().getImmediateChild(_),I=Pg(r,R,w);p=aa(r,p,new ve(_),I,o,a,c,f)}}),m.children.inorderTraversal((_,w)=>{const R=!e.serverCache.isCompleteForChild(_)&&w.value===null;if(!y.hasChild(_)&&!R){const I=e.serverCache.getNode().getImmediateChild(_),L=Pg(r,I,w);p=aa(r,p,new ve(_),L,o,a,c,f)}}),p}function DR(r,e,t,s,o,a,c){if(la(o,t)!=null)return e;const f=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(ae(t)&&p.isFullyInitialized()||p.isCompleteForPath(t))return aa(r,e,t,p.getNode().getChild(t),o,a,f,c);if(ae(t)){let m=new Ie(null);return p.getNode().forEachChild(Lr,(y,_)=>{m=m.set(new ve(y),_)}),ud(r,e,t,m,o,a,f,c)}else return e}else{let m=new Ie(null);return s.foreach((y,_)=>{const w=Fe(t,y);p.isCompleteForPath(w)&&(m=m.set(y,p.getNode().getChild(w)))}),ud(r,e,t,m,o,a,f,c)}}function MR(r,e,t,s,o){const a=e.serverCache,c=Ay(e,a.getNode(),a.isFullyInitialized()||ae(t),a.isFiltered());return Uy(r,c,t,s,Fy,o)}function bR(r,e,t,s,o,a){let c;if(la(s,t)!=null)return e;{const f=new Zd(s,e,o),p=e.eventCache.getNode();let m;if(ae(t)||de(t)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=oa(s,jr(e));else{const _=e.serverCache.getNode();z(_ instanceof Z,"serverChildren would be complete if leaf node"),y=Jd(s,_)}y=y,m=r.filter.updateFullNode(p,y,a)}else{const y=de(t);let _=Xd(s,y,e.serverCache);_==null&&e.serverCache.isCompleteForChild(y)&&(_=p.getImmediateChild(y)),_!=null?m=r.filter.updateChild(p,y,_,ke(t),f,a):e.eventCache.getNode().hasChild(y)?m=r.filter.updateChild(p,y,Z.EMPTY_NODE,ke(t),f,a):m=p,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=oa(s,jr(e)),c.isLeafNode()&&(m=r.filter.updateFullNode(m,c,a)))}return c=e.serverCache.isFullyInitialized()||la(s,me())!=null,js(e,m,c,r.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class FR{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,o=new Gd(s.getIndex()),a=X0(s);this.processor_=PR(a);const c=t.serverCache,f=t.eventCache,p=o.updateFullNode(Z.EMPTY_NODE,c.getNode(),null),m=a.updateFullNode(Z.EMPTY_NODE,f.getNode(),null),y=new cr(p,c.isFullyInitialized(),o.filtersNodes()),_=new cr(m,f.isFullyInitialized(),a.filtersNodes());this.viewCache_=va(_,y),this.eventGenerator_=new aR(this.query_)}get query(){return this.query_}}function UR(r){return r.viewCache_.serverCache.getNode()}function jR(r){return sa(r.viewCache_)}function zR(r,e){const t=jr(r.viewCache_);return t&&(r.query._queryParams.loadsAllData()||!ae(e)&&!t.getImmediateChild(de(e)).isEmpty())?t.getChild(e):null}function xg(r){return r.eventRegistrations_.length===0}function BR(r,e){r.eventRegistrations_.push(e)}function Ag(r,e,t){const s=[];if(t){z(e==null,"A cancel should cancel all event registrations.");const o=r.query._path;r.eventRegistrations_.forEach(a=>{const c=a.createCancelEvent(t,o);c&&s.push(c)})}if(e){let o=[];for(let a=0;a<r.eventRegistrations_.length;++a){const c=r.eventRegistrations_[a];if(!c.matches(e))o.push(c);else if(e.hasAnyCallback()){o=o.concat(r.eventRegistrations_.slice(a+1));break}}r.eventRegistrations_=o}else r.eventRegistrations_=[];return s}function Og(r,e,t,s){e.type===qt.MERGE&&e.source.queryId!==null&&(z(jr(r.viewCache_),"We should always have a full cache before handling merges"),z(sa(r.viewCache_),"Missing event cache, even though we have a server cache"));const o=r.viewCache_,a=AR(r.processor_,o,e,t,s);return xR(r.processor_,a.viewCache),z(a.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),r.viewCache_=a.viewCache,jy(r,a.changes,a.viewCache.eventCache.getNode(),null)}function WR(r,e){const t=r.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(De,(a,c)=>{s.push(Ci(a,c))}),t.isFullyInitialized()&&s.push(Py(t.getNode())),jy(r,s,t.getNode(),e)}function jy(r,e,t,s){const o=s?[s]:r.eventRegistrations_;return uR(r.eventGenerator_,e,t,o)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let ua;class zy{constructor(){this.views=new Map}}function HR(r){z(!ua,"__referenceConstructor has already been defined"),ua=r}function $R(){return z(ua,"Reference.ts has not been loaded"),ua}function VR(r){return r.views.size===0}function eh(r,e,t,s){const o=e.source.queryId;if(o!==null){const a=r.views.get(o);return z(a!=null,"SyncTree gave us an op for an invalid query."),Og(a,e,t,s)}else{let a=[];for(const c of r.views.values())a=a.concat(Og(c,e,t,s));return a}}function By(r,e,t,s,o){const a=e._queryIdentifier,c=r.views.get(a);if(!c){let f=oa(t,o?s:null),p=!1;f?p=!0:s instanceof Z?(f=Jd(t,s),p=!1):(f=Z.EMPTY_NODE,p=!1);const m=va(new cr(f,p,!1),new cr(s,o,!1));return new FR(e,m)}return c}function GR(r,e,t,s,o,a){const c=By(r,e,s,o,a);return r.views.has(e._queryIdentifier)||r.views.set(e._queryIdentifier,c),BR(c,t),WR(c,t)}function KR(r,e,t,s){const o=e._queryIdentifier,a=[];let c=[];const f=dr(r);if(o==="default")for(const[p,m]of r.views.entries())c=c.concat(Ag(m,t,s)),xg(m)&&(r.views.delete(p),m.query._queryParams.loadsAllData()||a.push(m.query));else{const p=r.views.get(o);p&&(c=c.concat(Ag(p,t,s)),xg(p)&&(r.views.delete(o),p.query._queryParams.loadsAllData()||a.push(p.query)))}return f&&!dr(r)&&a.push(new($R())(e._repo,e._path)),{removed:a,events:c}}function Wy(r){const e=[];for(const t of r.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function or(r,e){let t=null;for(const s of r.views.values())t=t||zR(s,e);return t}function Hy(r,e){if(e._queryParams.loadsAllData())return Ea(r);{const s=e._queryIdentifier;return r.views.get(s)}}function $y(r,e){return Hy(r,e)!=null}function dr(r){return Ea(r)!=null}function Ea(r){for(const e of r.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let ca;function qR(r){z(!ca,"__referenceConstructor has already been defined"),ca=r}function QR(){return z(ca,"Reference.ts has not been loaded"),ca}let YR=1;class Lg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ie(null),this.pendingWriteTree_=kR(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Vy(r,e,t,s,o){return fR(r.pendingWriteTree_,e,t,s,o),o?bi(r,new Ur(qd(),e,t)):[]}function JR(r,e,t,s){pR(r.pendingWriteTree_,e,t,s);const o=Ie.fromObject(t);return bi(r,new Si(qd(),e,o))}function tr(r,e,t=!1){const s=mR(r.pendingWriteTree_,e);if(gR(r.pendingWriteTree_,e)){let a=new Ie(null);return s.snap!=null?a=a.set(me(),!0):et(s.children,c=>{a=a.set(new ve(c),!0)}),bi(r,new ia(s.path,a,t))}else return[]}function go(r,e,t){return bi(r,new Ur(Qd(),e,t))}function XR(r,e,t){const s=Ie.fromObject(t);return bi(r,new Si(Qd(),e,s))}function ZR(r,e){return bi(r,new Zs(Qd(),e))}function eN(r,e,t){const s=nh(r,t);if(s){const o=rh(s),a=o.path,c=o.queryId,f=dt(a,e),p=new Zs(Yd(c),f);return ih(r,a,p)}else return[]}function Gy(r,e,t,s,o=!1){const a=e._path,c=r.syncPointTree_.get(a);let f=[];if(c&&(e._queryIdentifier==="default"||$y(c,e))){const p=KR(c,e,t,s);VR(c)&&(r.syncPointTree_=r.syncPointTree_.remove(a));const m=p.removed;if(f=p.events,!o){const y=m.findIndex(w=>w._queryParams.loadsAllData())!==-1,_=r.syncPointTree_.findOnPath(a,(w,R)=>dr(R));if(y&&!_){const w=r.syncPointTree_.subtree(a);if(!w.isEmpty()){const R=iN(w);for(let I=0;I<R.length;++I){const L=R[I],A=L.query,b=Yy(r,L);r.listenProvider_.startListening(Bs(A),eo(r,A),b.hashFn,b.onComplete)}}}!_&&m.length>0&&!s&&(y?r.listenProvider_.stopListening(Bs(e),null):m.forEach(w=>{const R=r.queryToTagMap.get(Ca(w));r.listenProvider_.stopListening(Bs(w),R)}))}sN(r,m)}return f}function Ky(r,e,t,s){const o=nh(r,s);if(o!=null){const a=rh(o),c=a.path,f=a.queryId,p=dt(c,e),m=new Ur(Yd(f),p,t);return ih(r,c,m)}else return[]}function tN(r,e,t,s){const o=nh(r,s);if(o){const a=rh(o),c=a.path,f=a.queryId,p=dt(c,e),m=Ie.fromObject(t),y=new Si(Yd(f),p,m);return ih(r,c,y)}else return[]}function nN(r,e,t,s=!1){const o=e._path;let a=null,c=!1;r.syncPointTree_.foreachOnPath(o,(w,R)=>{const I=dt(w,o);a=a||or(R,I),c=c||dr(R)});let f=r.syncPointTree_.get(o);f?(c=c||dr(f),a=a||or(f,me())):(f=new zy,r.syncPointTree_=r.syncPointTree_.set(o,f));let p;a!=null?p=!0:(p=!1,a=Z.EMPTY_NODE,r.syncPointTree_.subtree(o).foreachChild((R,I)=>{const L=or(I,me());L&&(a=a.updateImmediateChild(R,L))}));const m=$y(f,e);if(!m&&!e._queryParams.loadsAllData()){const w=Ca(e);z(!r.queryToTagMap.has(w),"View does not exist, but we have a tag");const R=oN();r.queryToTagMap.set(w,R),r.tagToQueryMap.set(R,w)}const y=wa(r.pendingWriteTree_,o);let _=GR(f,e,t,y,a,p);if(!m&&!c&&!s){const w=Hy(f,e);_=_.concat(lN(r,e,w))}return _}function th(r,e,t){const o=r.pendingWriteTree_,a=r.syncPointTree_.findOnPath(e,(c,f)=>{const p=dt(c,e),m=or(f,p);if(m)return m});return Dy(o,e,a,t,!0)}function rN(r,e){const t=e._path;let s=null;r.syncPointTree_.foreachOnPath(t,(m,y)=>{const _=dt(m,t);s=s||or(y,_)});let o=r.syncPointTree_.get(t);o?s=s||or(o,me()):(o=new zy,r.syncPointTree_=r.syncPointTree_.set(t,o));const a=s!=null,c=a?new cr(s,!0,!1):null,f=wa(r.pendingWriteTree_,e._path),p=By(o,e,f,a?c.getNode():Z.EMPTY_NODE,a);return jR(p)}function bi(r,e){return qy(e,r.syncPointTree_,null,wa(r.pendingWriteTree_,me()))}function qy(r,e,t,s){if(ae(r.path))return Qy(r,e,t,s);{const o=e.get(me());t==null&&o!=null&&(t=or(o,me()));let a=[];const c=de(r.path),f=r.operationForChild(c),p=e.children.get(c);if(p&&f){const m=t?t.getImmediateChild(c):null,y=My(s,c);a=a.concat(qy(f,p,m,y))}return o&&(a=a.concat(eh(o,r,s,t))),a}}function Qy(r,e,t,s){const o=e.get(me());t==null&&o!=null&&(t=or(o,me()));let a=[];return e.children.inorderTraversal((c,f)=>{const p=t?t.getImmediateChild(c):null,m=My(s,c),y=r.operationForChild(c);y&&(a=a.concat(Qy(y,f,p,m)))}),o&&(a=a.concat(eh(o,r,s,t))),a}function Yy(r,e){const t=e.query,s=eo(r,t);return{hashFn:()=>(UR(e)||Z.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return s?eN(r,t._path,s):ZR(r,t._path);{const a=XT(o,t);return Gy(r,t,null,a)}}}}function eo(r,e){const t=Ca(e);return r.queryToTagMap.get(t)}function Ca(r){return r._path.toString()+"$"+r._queryIdentifier}function nh(r,e){return r.tagToQueryMap.get(e)}function rh(r){const e=r.indexOf("$");return z(e!==-1&&e<r.length-1,"Bad queryKey."),{queryId:r.substr(e+1),path:new ve(r.substr(0,e))}}function ih(r,e,t){const s=r.syncPointTree_.get(e);z(s,"Missing sync point for query tag that we're tracking");const o=wa(r.pendingWriteTree_,e);return eh(s,t,o,null)}function iN(r){return r.fold((e,t,s)=>{if(t&&dr(t))return[Ea(t)];{let o=[];return t&&(o=Wy(t)),et(s,(a,c)=>{o=o.concat(c)}),o}})}function Bs(r){return r._queryParams.loadsAllData()&&!r._queryParams.isDefault()?new(QR())(r._repo,r._path):r}function sN(r,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const o=Ca(s),a=r.queryToTagMap.get(o);r.queryToTagMap.delete(o),r.tagToQueryMap.delete(a)}}}function oN(){return YR++}function lN(r,e,t){const s=e._path,o=eo(r,e),a=Yy(r,t),c=r.listenProvider_.startListening(Bs(e),o,a.hashFn,a.onComplete),f=r.syncPointTree_.subtree(s);if(o)z(!dr(f.value),"If we're adding a query, it shouldn't be shadowed");else{const p=f.fold((m,y,_)=>{if(!ae(m)&&y&&dr(y))return[Ea(y).query];{let w=[];return y&&(w=w.concat(Wy(y).map(R=>R.query))),et(_,(R,I)=>{w=w.concat(I)}),w}});for(let m=0;m<p.length;++m){const y=p[m];r.listenProvider_.stopListening(Bs(y),eo(r,y))}}return c}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class sh{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new sh(t)}node(){return this.node_}}class oh{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Fe(this.path_,e);return new oh(this.syncTree_,t)}node(){return th(this.syncTree_,this.path_)}}const aN=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},Dg=function(r,e,t){if(!r||typeof r!="object")return r;if(z(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return uN(r[".sv"],e,t);if(typeof r[".sv"]=="object")return cN(r[".sv"],e);z(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},uN=function(r,e,t){switch(r){case"timestamp":return t.timestamp;default:z(!1,"Unexpected server value: "+r)}},cN=function(r,e,t){r.hasOwnProperty("increment")||z(!1,"Unexpected server value: "+JSON.stringify(r,null,2));const s=r.increment;typeof s!="number"&&z(!1,"Unexpected increment value: "+s);const o=e.node();if(z(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return s;const c=o.getValue();return typeof c!="number"?s:c+s},Jy=function(r,e,t,s){return lh(e,new oh(t,r),s)},Xy=function(r,e,t){return lh(r,new sh(e),t)};function lh(r,e,t){const s=r.getPriority().val(),o=Dg(s,e.getImmediateChild(".priority"),t);let a;if(r.isLeafNode()){const c=r,f=Dg(c.getValue(),e,t);return f!==c.getValue()||o!==c.getPriority().val()?new Qe(f,He(o)):r}else{const c=r;return a=c,o!==c.getPriority().val()&&(a=a.updatePriority(new Qe(o))),c.forEachChild(De,(f,p)=>{const m=lh(p,e.getImmediateChild(f),t);m!==p&&(a=a.updateImmediateChild(f,m))}),a}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ah{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function uh(r,e){let t=e instanceof ve?e:new ve(e),s=r,o=de(t);for(;o!==null;){const a=wi(s.node.children,o)||{children:{},childCount:0};s=new ah(o,s,a),t=ke(t),o=de(t)}return s}function Fi(r){return r.node.value}function Zy(r,e){r.node.value=e,cd(r)}function ev(r){return r.node.childCount>0}function dN(r){return Fi(r)===void 0&&!ev(r)}function Sa(r,e){et(r.node.children,(t,s)=>{e(new ah(t,r,s))})}function tv(r,e,t,s){t&&e(r),Sa(r,o=>{tv(o,e,!0)})}function hN(r,e,t){let s=r.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function _o(r){return new ve(r.parent===null?r.name:_o(r.parent)+"/"+r.name)}function cd(r){r.parent!==null&&fN(r.parent,r.name,r)}function fN(r,e,t){const s=dN(t),o=un(r.node.children,e);s&&o?(delete r.node.children[e],r.node.childCount--,cd(r)):!s&&!o&&(r.node.children[e]=t.node,r.node.childCount++,cd(r))}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const pN=/[\[\].#$\/\u0000-\u001F\u007F]/,mN=/[\[\].#$\u0000-\u001F\u007F]/,Bc=10*1024*1024,ch=function(r){return typeof r=="string"&&r.length!==0&&!pN.test(r)},nv=function(r){return typeof r=="string"&&r.length!==0&&!mN.test(r)},gN=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),nv(r)},dd=function(r){return r===null||typeof r=="string"||typeof r=="number"&&!Fd(r)||r&&typeof r=="object"&&un(r,".sv")},yo=function(r,e,t,s){s&&e===void 0||Ia(fa(r,"value"),e,t)},Ia=function(r,e,t){const s=t instanceof ve?new O0(t,r):t;if(e===void 0)throw new Error(r+"contains undefined "+xr(s));if(typeof e=="function")throw new Error(r+"contains a function "+xr(s)+" with contents = "+e.toString());if(Fd(e))throw new Error(r+"contains "+e.toString()+" "+xr(s));if(typeof e=="string"&&e.length>Bc/3&&pa(e)>Bc)throw new Error(r+"contains a string greater than "+Bc+" utf8 bytes "+xr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let o=!1,a=!1;if(et(e,(c,f)=>{if(c===".value")o=!0;else if(c!==".priority"&&c!==".sv"&&(a=!0,!ch(c)))throw new Error(r+" contains an invalid key ("+c+") "+xr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);L0(s,c),Ia(r,f,s),D0(s)}),o&&a)throw new Error(r+' contains ".value" child '+xr(s)+" in addition to actual children.")}},_N=function(r,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const a=Qs(s);for(let c=0;c<a.length;c++)if(!(a[c]===".priority"&&c===a.length-1)){if(!ch(a[c]))throw new Error(r+"contains an invalid key ("+a[c]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(A0);let o=null;for(t=0;t<e.length;t++){if(s=e[t],o!==null&&Ft(o,s))throw new Error(r+"contains a path "+o.toString()+" that is ancestor of another path "+s.toString());o=s}},yN=function(r,e,t,s){const o=fa(r,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(o+" must be an object containing the children to replace.");const a=[];et(e,(c,f)=>{const p=new ve(c);if(Ia(o,f,Fe(t,p)),Wd(p)===".priority"&&!dd(f))throw new Error(o+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");a.push(p)}),_N(o,a)},dh=function(r,e,t,s){if(!nv(t))throw new Error(fa(r,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},vN=function(r,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),dh(r,e,t)},rv=function(r,e){if(de(e)===".info")throw new Error(r+" failed = Can't modify data under /.info/")},wN=function(r,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ch(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!gN(t))throw new Error(fa(r,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class EN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function hh(r,e){let t=null;for(let s=0;s<e.length;s++){const o=e[s],a=o.getPath();t!==null&&!Ey(a,t.path)&&(r.eventLists_.push(t),t=null),t===null&&(t={events:[],path:a}),t.events.push(o)}t&&r.eventLists_.push(t)}function zt(r,e,t){hh(r,t),CN(r,s=>Ft(s,e)||Ft(e,s))}function CN(r,e){r.recursionDepth_++;let t=!0;for(let s=0;s<r.eventLists_.length;s++){const o=r.eventLists_[s];if(o){const a=o.path;e(a)?(SN(r.eventLists_[s]),r.eventLists_[s]=null):t=!1}}t&&(r.eventLists_=[]),r.recursionDepth_--}function SN(r){for(let e=0;e<r.events.length;e++){const t=r.events[e];if(t!==null){r.events[e]=null;const s=t.getEventRunner();Fs&&Ze("event: "+t.toString()),Mi(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const IN="repo_interrupt",kN=25;class TN{constructor(e,t,s,o){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new EN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ra(),this.transactionQueueTree_=new ah,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function RN(r,e,t){if(r.stats_=zd(r.repoInfo_),r.forceRestClient_||n0())r.server_=new na(r.repoInfo_,(s,o,a,c)=>{Mg(r,s,o,a,c)},r.authTokenProvider_,r.appCheckProvider_),setTimeout(()=>bg(r,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{$e(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}r.persistentConnection_=new kn(r.repoInfo_,e,(s,o,a,c)=>{Mg(r,s,o,a,c)},s=>{bg(r,s)},s=>{NN(r,s)},r.authTokenProvider_,r.appCheckProvider_,t),r.server_=r.persistentConnection_}r.authTokenProvider_.addTokenChangeListener(s=>{r.server_.refreshAuthToken(s)}),r.appCheckProvider_.addTokenChangeListener(s=>{r.server_.refreshAppCheckToken(s.token)}),r.statsReporter_=l0(r.repoInfo_,()=>new lR(r.stats_,r.server_)),r.infoData_=new nR,r.infoSyncTree_=new Lg({startListening:(s,o,a,c)=>{let f=[];const p=r.infoData_.getNode(s._path);return p.isEmpty()||(f=go(r.infoSyncTree_,s._path,p),setTimeout(()=>{c("ok")},0)),f},stopListening:()=>{}}),fh(r,"connected",!1),r.serverSyncTree_=new Lg({startListening:(s,o,a,c)=>(r.server_.listen(s,a,o,(f,p)=>{const m=c(f,p);zt(r.eventQueue_,s._path,m)}),[]),stopListening:(s,o)=>{r.server_.unlisten(s,o)}})}function iv(r){const t=r.infoData_.getNode(new ve(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function ka(r){return aN({timestamp:iv(r)})}function Mg(r,e,t,s,o){r.dataUpdateCount++;const a=new ve(e);t=r.interceptServerDataCallback_?r.interceptServerDataCallback_(e,t):t;let c=[];if(o)if(s){const p=Gl(t,m=>He(m));c=tN(r.serverSyncTree_,a,p,o)}else{const p=He(t);c=Ky(r.serverSyncTree_,a,p,o)}else if(s){const p=Gl(t,m=>He(m));c=XR(r.serverSyncTree_,a,p)}else{const p=He(t);c=go(r.serverSyncTree_,a,p)}let f=a;c.length>0&&(f=ki(r,a)),zt(r.eventQueue_,f,c)}function bg(r,e){fh(r,"connected",e),e===!1&&ON(r)}function NN(r,e){et(e,(t,s)=>{fh(r,t,s)})}function fh(r,e,t){const s=new ve("/.info/"+e),o=He(t);r.infoData_.updateSnapshot(s,o);const a=go(r.infoSyncTree_,s,o);zt(r.eventQueue_,s,a)}function ph(r){return r.nextWriteId_++}function PN(r,e,t){const s=rN(r.serverSyncTree_,e);return s!=null?Promise.resolve(s):r.server_.get(e).then(o=>{const a=He(o).withIndex(e._queryParams.getIndex());nN(r.serverSyncTree_,e,t,!0);let c;if(e._queryParams.loadsAllData())c=go(r.serverSyncTree_,e._path,a);else{const f=eo(r.serverSyncTree_,e);c=Ky(r.serverSyncTree_,e._path,a,f)}return zt(r.eventQueue_,e._path,c),Gy(r.serverSyncTree_,e,t,null,!0),a},o=>(vo(r,"get for query "+$e(e)+" failed: "+o),Promise.reject(new Error(o))))}function xN(r,e,t,s,o){vo(r,"set",{path:e.toString(),value:t,priority:s});const a=ka(r),c=He(t,s),f=th(r.serverSyncTree_,e),p=Xy(c,f,a),m=ph(r),y=Vy(r.serverSyncTree_,e,p,m,!0);hh(r.eventQueue_,y),r.server_.put(e.toString(),c.val(!0),(w,R)=>{const I=w==="ok";I||ht("set at "+e+" failed: "+w);const L=tr(r.serverSyncTree_,m,!I);zt(r.eventQueue_,e,L),hd(r,o,w,R)});const _=gh(r,e);ki(r,_),zt(r.eventQueue_,_,[])}function AN(r,e,t,s){vo(r,"update",{path:e.toString(),value:t});let o=!0;const a=ka(r),c={};if(et(t,(f,p)=>{o=!1,c[f]=Jy(Fe(e,f),He(p),r.serverSyncTree_,a)}),o)Ze("update() called with empty data.  Don't do anything."),hd(r,s,"ok",void 0);else{const f=ph(r),p=JR(r.serverSyncTree_,e,c,f);hh(r.eventQueue_,p),r.server_.merge(e.toString(),t,(m,y)=>{const _=m==="ok";_||ht("update at "+e+" failed: "+m);const w=tr(r.serverSyncTree_,f,!_),R=w.length>0?ki(r,e):e;zt(r.eventQueue_,R,w),hd(r,s,m,y)}),et(t,m=>{const y=gh(r,Fe(e,m));ki(r,y)}),zt(r.eventQueue_,e,[])}}function ON(r){vo(r,"onDisconnectEvents");const e=ka(r),t=ra();id(r.onDisconnect_,me(),(o,a)=>{const c=Jy(o,a,r.serverSyncTree_,e);xy(t,o,c)});let s=[];id(t,me(),(o,a)=>{s=s.concat(go(r.serverSyncTree_,o,a));const c=gh(r,o);ki(r,c)}),r.onDisconnect_=ra(),zt(r.eventQueue_,me(),s)}function LN(r){r.persistentConnection_&&r.persistentConnection_.interrupt(IN)}function vo(r,...e){let t="";r.persistentConnection_&&(t=r.persistentConnection_.id+":"),Ze(t,...e)}function hd(r,e,t,s){e&&Mi(()=>{if(t==="ok")e(null);else{const o=(t||"error").toUpperCase();let a=o;s&&(a+=": "+s);const c=new Error(a);c.code=o,e(c)}})}function sv(r,e,t){return th(r.serverSyncTree_,e,t)||Z.EMPTY_NODE}function mh(r,e=r.transactionQueueTree_){if(e||Ta(r,e),Fi(e)){const t=lv(r,e);z(t.length>0,"Sending zero length transaction queue"),t.every(o=>o.status===0)&&DN(r,_o(e),t)}else ev(e)&&Sa(e,t=>{mh(r,t)})}function DN(r,e,t){const s=t.map(m=>m.currentWriteId),o=sv(r,e,s);let a=o;const c=o.hash();for(let m=0;m<t.length;m++){const y=t[m];z(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const _=dt(e,y.path);a=a.updateChild(_,y.currentOutputSnapshotRaw)}const f=a.val(!0),p=e;r.server_.put(p.toString(),f,m=>{vo(r,"transaction put response",{path:p.toString(),status:m});let y=[];if(m==="ok"){const _=[];for(let w=0;w<t.length;w++)t[w].status=2,y=y.concat(tr(r.serverSyncTree_,t[w].currentWriteId)),t[w].onComplete&&_.push(()=>t[w].onComplete(null,!0,t[w].currentOutputSnapshotResolved)),t[w].unwatcher();Ta(r,uh(r.transactionQueueTree_,e)),mh(r,r.transactionQueueTree_),zt(r.eventQueue_,e,y);for(let w=0;w<_.length;w++)Mi(_[w])}else{if(m==="datastale")for(let _=0;_<t.length;_++)t[_].status===3?t[_].status=4:t[_].status=0;else{ht("transaction at "+p.toString()+" failed: "+m);for(let _=0;_<t.length;_++)t[_].status=4,t[_].abortReason=m}ki(r,e)}},c)}function ki(r,e){const t=ov(r,e),s=_o(t),o=lv(r,t);return MN(r,o,s),s}function MN(r,e,t){if(e.length===0)return;const s=[];let o=[];const c=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const p=e[f],m=dt(t,p.path);let y=!1,_;if(z(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)y=!0,_=p.abortReason,o=o.concat(tr(r.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=kN)y=!0,_="maxretry",o=o.concat(tr(r.serverSyncTree_,p.currentWriteId,!0));else{const w=sv(r,p.path,c);p.currentInputSnapshot=w;const R=e[f].update(w.val());if(R!==void 0){Ia("transaction failed: Data returned ",R,p.path);let I=He(R);typeof R=="object"&&R!=null&&un(R,".priority")||(I=I.updatePriority(w.getPriority()));const A=p.currentWriteId,b=ka(r),H=Xy(I,w,b);p.currentOutputSnapshotRaw=I,p.currentOutputSnapshotResolved=H,p.currentWriteId=ph(r),c.splice(c.indexOf(A),1),o=o.concat(Vy(r.serverSyncTree_,p.path,H,p.currentWriteId,p.applyLocally)),o=o.concat(tr(r.serverSyncTree_,A,!0))}else y=!0,_="nodata",o=o.concat(tr(r.serverSyncTree_,p.currentWriteId,!0))}zt(r.eventQueue_,t,o),o=[],y&&(e[f].status=2,function(w){setTimeout(w,Math.floor(0))}(e[f].unwatcher),e[f].onComplete&&(_==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(_),!1,null))))}Ta(r,r.transactionQueueTree_);for(let f=0;f<s.length;f++)Mi(s[f]);mh(r,r.transactionQueueTree_)}function ov(r,e){let t,s=r.transactionQueueTree_;for(t=de(e);t!==null&&Fi(s)===void 0;)s=uh(s,t),e=ke(e),t=de(e);return s}function lv(r,e){const t=[];return av(r,e,t),t.sort((s,o)=>s.order-o.order),t}function av(r,e,t){const s=Fi(e);if(s)for(let o=0;o<s.length;o++)t.push(s[o]);Sa(e,o=>{av(r,o,t)})}function Ta(r,e){const t=Fi(e);if(t){let s=0;for(let o=0;o<t.length;o++)t[o].status!==2&&(t[s]=t[o],s++);t.length=s,Zy(e,t.length>0?t:void 0)}Sa(e,s=>{Ta(r,s)})}function gh(r,e){const t=_o(ov(r,e)),s=uh(r.transactionQueueTree_,e);return hN(s,o=>{Wc(r,o)}),Wc(r,s),tv(s,o=>{Wc(r,o)}),t}function Wc(r,e){const t=Fi(e);if(t){const s=[];let o=[],a=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(z(a===c-1,"All SENT items should be at beginning of queue."),a=c,t[c].status=3,t[c].abortReason="set"):(z(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),o=o.concat(tr(r.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&s.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));a===-1?Zy(e,void 0):t.length=a+1,zt(r.eventQueue_,_o(e),o);for(let c=0;c<s.length;c++)Mi(s[c])}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function bN(r){let e="";const t=r.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let o=t[s];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}e+="/"+o}return e}function FN(r){const e={};r.charAt(0)==="?"&&(r=r.substring(1));for(const t of r.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ht(`Invalid query segment '${t}' in query '${r}'`)}return e}const Fg=function(r,e){const t=UN(r),s=t.namespace;t.domain==="firebase.com"&&Nn(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Nn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||KT();const o=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new dy(t.host,t.secure,s,o,e,"",s!==t.subdomain),path:new ve(t.pathString)}},UN=function(r){let e="",t="",s="",o="",a="",c=!0,f="https",p=443;if(typeof r=="string"){let m=r.indexOf("//");m>=0&&(f=r.substring(0,m-1),r=r.substring(m+2));let y=r.indexOf("/");y===-1&&(y=r.length);let _=r.indexOf("?");_===-1&&(_=r.length),e=r.substring(0,Math.min(y,_)),y<_&&(o=bN(r.substring(y,_)));const w=FN(r.substring(Math.min(r.length,_)));m=e.indexOf(":"),m>=0?(c=f==="https"||f==="wss",p=parseInt(e.substring(m+1),10)):m=e.length;const R=e.slice(0,m);if(R.toLowerCase()==="localhost")t="localhost";else if(R.split(".").length<=2)t=R;else{const I=e.indexOf(".");s=e.substring(0,I).toLowerCase(),t=e.substring(I+1),a=s}"ns"in w&&(a=w.ns)}return{host:e,port:p,domain:t,subdomain:s,secure:c,scheme:f,pathString:o,namespace:a}};/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Ug="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",jN=function(){let r=0;const e=[];return function(t){const s=t===r;r=t;let o;const a=new Array(8);for(o=7;o>=0;o--)a[o]=Ug.charAt(t%64),t=Math.floor(t/64);z(t===0,"Cannot push at time == 0");let c=a.join("");if(s){for(o=11;o>=0&&e[o]===63;o--)e[o]=0;e[o]++}else for(o=0;o<12;o++)e[o]=Math.floor(Math.random()*64);for(o=0;o<12;o++)c+=Ug.charAt(e[o]);return z(c.length===20,"nextPushId: Length should be 20."),c}}();/**
 * @license
 * Copyright 2017 Google LLC
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
 */class zN{constructor(e,t,s,o){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=o}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+$e(this.snapshot.exportVal())}}class BN{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class WN{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return z(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Ui{constructor(e,t,s,o){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=o}get key(){return ae(this._path)?null:Wd(this._path)}get ref(){return new Pn(this._repo,this._path)}get _queryIdentifier(){const e=Sg(this._queryParams),t=Ud(e);return t==="{}"?"default":t}get _queryObject(){return Sg(this._queryParams)}isEqual(e){if(e=tt(e),!(e instanceof Ui))return!1;const t=this._repo===e._repo,s=Ey(this._path,e._path),o=this._queryIdentifier===e._queryIdentifier;return t&&s&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+x0(this._path)}}function HN(r,e){if(r._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function _h(r){let e=null,t=null;if(r.hasStart()&&(e=r.getIndexStartValue()),r.hasEnd()&&(t=r.getIndexEndValue()),r.getIndex()===Lr){const s="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",o="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(r.hasStart()){if(r.getIndexStartName()!==Fr)throw new Error(s);if(typeof e!="string")throw new Error(o)}if(r.hasEnd()){if(r.getIndexEndName()!==ar)throw new Error(s);if(typeof t!="string")throw new Error(o)}}else if(r.getIndex()===De){if(e!=null&&!dd(e)||t!=null&&!dd(t))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(z(r.getIndex()instanceof Vd||r.getIndex()===Ny,"unknown index type."),e!=null&&typeof e=="object"||t!=null&&typeof t=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function uv(r){if(r.hasStart()&&r.hasEnd()&&r.hasLimit()&&!r.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Pn extends Ui{constructor(e,t){super(e,t,new Kd,!1)}get parent(){const e=wy(this._path);return e===null?null:new Pn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class to{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ve(e),s=no(this.ref,e);return new to(this._node.getChild(t),s,De)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,o)=>e(new to(o,no(this.ref,s),De)))}hasChild(e){const t=new ve(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ut(r,e){return r=tt(r),r._checkNotDeleted("ref"),e!==void 0?no(r._root,e):r._root}function no(r,e){return r=tt(r),de(r._path)===null?vN("child","path",e):dh("child","path",e),new Pn(r._repo,Fe(r._path,e))}function $N(r,e){r=tt(r),rv("push",r._path),yo("push",e,r._path,!0);const t=iv(r._repo),s=jN(t),o=no(r,s),a=no(r,s);let c;return e!=null?c=cv(a,e).then(()=>a):c=Promise.resolve(a),o.then=c.then.bind(c),o.catch=c.then.bind(c,void 0),o}function cv(r,e){r=tt(r),rv("set",r._path),yo("set",e,r._path,!1);const t=new oo;return xN(r._repo,r._path,e,null,t.wrapCallback(()=>{})),t.promise}function Ra(r,e){yN("update",e,r._path);const t=new oo;return AN(r._repo,r._path,e,t.wrapCallback(()=>{})),t.promise}function Ti(r){r=tt(r);const e=new WN(()=>{}),t=new yh(e);return PN(r._repo,r,t).then(s=>new to(s,new Pn(r._repo,r._path),r._queryParams.getIndex()))}class yh{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new zN("value",this,new to(e.snapshotNode,new Pn(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new BN(this,e,t):null}matches(e){return e instanceof yh?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Na{}class VN extends Na{constructor(e,t){super(),this._value=e,this._key=t,this.type="endAt"}_apply(e){yo("endAt",this._value,e._path,!0);const t=eR(e._queryParams,this._value,this._key);if(uv(t),_h(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Ui(e._repo,e._path,t,e._orderByCalled)}}class GN extends Na{constructor(e,t){super(),this._value=e,this._key=t,this.type="startAt"}_apply(e){yo("startAt",this._value,e._path,!0);const t=Z0(e._queryParams,this._value,this._key);if(uv(t),_h(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Ui(e._repo,e._path,t,e._orderByCalled)}}class KN extends Na{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){HN(e,"orderByChild");const t=new ve(this._path);if(ae(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const s=new Vd(t),o=tR(e._queryParams,s);return _h(o),new Ui(e._repo,e._path,o,!0)}}function dv(r){if(r==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(r==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(r==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return dh("orderByChild","path",r),new KN(r)}class qN extends Na{constructor(e,t){super(),this._value=e,this._key=t,this.type="equalTo"}_apply(e){if(yo("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new VN(this._value,this._key)._apply(new GN(this._value,this._key)._apply(e))}}function QN(r,e){return new qN(r,e)}function hv(r,...e){let t=tt(r);for(const s of e)t=s._apply(t);return t}HR(Pn);qR(Pn);/**
 * @license
 * Copyright 2020 Google LLC
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
 */const YN="FIREBASE_DATABASE_EMULATOR_HOST",fd={};let JN=!1;function XN(r,e,t,s){r.repoInfo_=new dy(`${e}:${t}`,!1,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams,!0),s&&(r.authTokenProvider_=s)}function ZN(r,e,t,s,o){let a=s||r.options.databaseURL;a===void 0&&(r.options.projectId||Nn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ze("Using default host for project ",r.options.projectId),a=`${r.options.projectId}-default-rtdb.firebaseio.com`);let c=Fg(a,o),f=c.repoInfo,p;typeof process<"u"&&sg&&(p=sg[YN]),p?(a=`http://${p}?ns=${f.namespace}`,c=Fg(a,o),f=c.repoInfo):c.repoInfo.secure;const m=new i0(r.name,r.options,e);wN("Invalid Firebase Database URL",c),ae(c.path)||Nn("Database URL must point to the root of a Firebase Database (not including a child path).");const y=tP(f,r,m,new r0(r,t));return new nP(y,r)}function eP(r,e){const t=fd[e];(!t||t[r.key]!==r)&&Nn(`Database ${e}(${r.repoInfo_}) has already been deleted.`),LN(r),delete t[r.key]}function tP(r,e,t,s){let o=fd[e.name];o||(o={},fd[e.name]=o);let a=o[r.toURLString()];return a&&Nn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new TN(r,JN,t,s),o[r.toURLString()]=a,a}class nP{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(RN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Pn(this._repo,me())),this._rootInternal}_delete(){return this._rootInternal!==null&&(eP(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Nn("Cannot call "+e+" on a deleted database.")}}function jt(r=f_(),e){const t=Rd(r,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=XC("database");s&&rP(t,...s)}return t}function rP(r,e,t,s={}){r=tt(r),r._checkNotDeleted("useEmulator"),r._instanceStarted&&Nn("Cannot call useEmulator() after instance has already been initialized.");const o=r._repoInternal;let a;if(o.repoInfo_.nodeAdmin)s.mockUserToken&&Nn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),a=new Wl(Wl.OWNER);else if(s.mockUserToken){const c=typeof s.mockUserToken=="string"?s.mockUserToken:ZC(s.mockUserToken,r.app.options.projectId);a=new Wl(c)}XN(o,e,t,a)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function iP(r){BT(Li),Ei(new Dr("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return ZN(s,o,a,t)},"PUBLIC").setMultipleInstances(!0)),ir(og,lg,r),ir(og,lg,"esm2017")}kn.prototype.simpleListen=function(r,e){this.sendRequest("q",{p:r},e)};kn.prototype.echo=function(r,e){this.sendRequest("echo",{d:r},e)};iP();class sP{async getUserRoles(e){const t=jt(Rt),s=Ut(t,`users/${e}/roles`),o=await Ti(s);if(o.exists()){const a=o.val(),c=[];return a.admin===!0&&c.push(Sn.ADMIN),c.length===0&&c.push(Sn.USER),c}return[Sn.USER]}async setUserRoles(e,t){const s=jt(Rt),o=Ut(s,`users/${e}`);try{await cv(o,t),console.log("User roles set successfully for UID:",e)}catch(a){throw console.error("Error setting user roles:",a),a}}}const Ls=bT(Rt);class oP{constructor(){xl(this,"databaseService");this.databaseService=new sP}signIn(e,t){return Ek(Ls,e,t)}signUp(e,t){return wk(Ls,e,t)}signOut(){return kk(Ls)}onAuthStateChanged(e){return Ik(Ls,e)}getCurrentUser(){return Ls.currentUser}async getUserRoles(e){return e.email==="ricf1@mscloud.ua.es"?[Sn.ADMIN]:this.databaseService.getUserRoles(e.uid)}async setUserRoles(e,t){try{await this.databaseService.setUserRoles(e,{email:t.email,roles:{admin:!1}}),console.log("Roles de usuario establecidos correctamente.")}catch(s){throw console.error("Error al establecer roles de usuario:",s),s}}}const Ri=new oP,ji=N.createContext({user:null,roles:null}),lP=({children:r})=>{const[e,t]=N.useState(null),[s,o]=N.useState(null);return N.useEffect(()=>Ri.onAuthStateChanged(async c=>{if(t(c),c)try{const f=await Ri.getUserRoles(c);o(f)}catch(f){console.error("Error al obtener los roles:",f),o(null)}else o(null)}),[]),T.jsx(ji.Provider,{value:{user:e,roles:s},children:r})},aP=()=>{const{user:r,roles:e}=N.useContext(ji),t=io(),s=async()=>{try{await Ri.signOut(),t("/login")}catch(o){console.error("Error al cerrar sesión:",o)}};return T.jsx("nav",{className:"navbar",children:T.jsxs("ul",{className:"nav-menu",children:[r&&e&&e.includes(Sn.USER)&&T.jsx("li",{children:T.jsx(Ar,{to:"/dashboard2",children:"My Incidents"})}),r&&e&&e.includes(Sn.ADMIN)&&T.jsx("li",{children:T.jsx(Ar,{to:"/dashboard",children:"Incidents"})}),r&&e&&e.includes(Sn.ADMIN)&&T.jsx("li",{children:T.jsx(Ar,{to:"/admin",children:"UserRoles"})}),!r&&T.jsx("li",{children:T.jsx(Ar,{to:"/login",children:"Login"})}),!r&&T.jsx("li",{children:T.jsx(Ar,{to:"/register",children:"Registro"})}),r&&T.jsx("li",{children:T.jsx("button",{onClick:s,children:"Logout"})})]})})},jg=({children:r})=>{const{user:e,roles:t}=N.useContext(ji);return!e||!t||!t.includes(Sn.ADMIN)?T.jsx(Yg,{to:"/",replace:!0}):T.jsx(T.Fragment,{children:r})},uP=({children:r})=>{const{user:e}=N.useContext(ji);return e?r:T.jsx(Yg,{to:"/login",replace:!0})},cP=()=>{const[r,e]=N.useState(""),[t,s]=N.useState(""),[o,a]=N.useState(""),c=io(),f=async p=>{p.preventDefault(),a("");try{const m=await Ri.signIn(r,t);console.log("Usuario autenticado:",m.user),c("/")}catch(m){console.error("Error al iniciar sesión:",m),a(m.message)}};return T.jsxs("form",{onSubmit:f,children:[T.jsx("h2",{children:"Iniciar Sesión"}),T.jsx("input",{type:"email",placeholder:"Correo electrónico",value:r,onChange:p=>e(p.target.value)}),T.jsx("input",{type:"password",placeholder:"Contraseña",value:t,onChange:p=>s(p.target.value)}),T.jsx("button",{type:"submit",children:"Login"}),o&&T.jsx("p",{className:"error-message",children:o})]})},dP=()=>{const[r,e]=N.useState(""),[t,s]=N.useState(""),[o,a]=N.useState(""),[c,f]=N.useState(""),p=io(),m=async y=>{y.preventDefault(),a("");try{const _=await Ri.signUp(r,t);console.log("Usuario registrado:",_.user),await Ri.setUserRoles(_.user.uid,{email:_.user.email,roles:{admin:!1}}),f("Registro exitoso. Redirigiendo al Dashboard..."),setTimeout(()=>{p("/dashboard")},2e3)}catch(_){console.error("Error al registrarse:",_),a(_.message)}};return T.jsxs("form",{onSubmit:m,children:[T.jsx("h2",{children:"Registrarse"}),T.jsx("input",{type:"email",placeholder:"Correo electrónico",value:r,onChange:y=>e(y.target.value)}),T.jsx("input",{type:"password",placeholder:"Contraseña",value:t,onChange:y=>s(y.target.value)}),T.jsx("button",{type:"submit",children:"Registrarse"}),o&&T.jsx("p",{className:"error-message",children:o}),c&&T.jsx("p",{className:"success-message",children:c})]})};function zg(){return T.jsx(T.Fragment,{children:T.jsx("div",{children:"Primero debes registrate O iniciar sesión"})})}class hP{constructor(){xl(this,"levels");xl(this,"currentLevel");this.levels=["debug","info","warn","error"],this.currentLevel="debug"}setLevel(e){this.levels.includes(e)?this.currentLevel=e:console.error(`Nivel de log no válido: ${e}`)}log(e,t){const s=this.levels.indexOf(e),o=this.levels.indexOf(this.currentLevel);if(s>=o){const a=new Date().toISOString();console[e](`[${e.toUpperCase()}] ${a}: ${t}`)}}debug(e){this.log("debug",e)}info(e){this.log("info",e)}warn(e){this.log("warn",e)}error(e){this.log("error",e)}}const qe=new hP,fP=({incident:r,onIncidentUpdated:e,onIncidentClick:t})=>{const s=async()=>{const o=jt(Rt),a=Ut(o,`incidents/${r.id}`);try{await Ra(a,{status:!1}),qe.info("Incident new status Closed"),e()}catch(c){qe.error("Error closing incident:"+c)}};return T.jsx(T.Fragment,{children:T.jsxs("div",{className:"incident-item",children:[r.status?T.jsxs("div",{className:"incident-id",children:["INC",r.id]}):T.jsxs("div",{className:"incident-id-close",children:["INC",r.id]}),T.jsx("div",{className:"incident-title",onClick:()=>t(r),style:{cursor:"pointer"},children:r.title}),T.jsx("div",{className:"incident-path",onClick:()=>t(r),style:{cursor:"pointer"},children:r.path}),T.jsx("div",{className:"incident-assigned",onClick:()=>t(r),style:{cursor:"pointer"},children:r.assignedUser}),T.jsx("div",{className:"incident-date",onClick:()=>t(r),style:{cursor:"pointer"},children:r.fecha}),T.jsx("div",{className:"incident-action",children:r.status?T.jsx("button",{className:"close-incident-button",onClick:s,children:"Cerrar incidente"}):T.jsx("span",{className:"incident-closed",children:"Incidente cerrado"})})]})})},pP=()=>{const[r,e]=N.useState([]),[t,s]=N.useState(!1),[o,a]=N.useState(""),[c,f]=N.useState(""),[p,m]=N.useState(""),[y,_]=N.useState([]),[w,R]=N.useState(!0),[I,L]=N.useState(!0),[A,b]=N.useState(null),[H,B]=N.useState(!1),[ee,se]=N.useState(!1),[re,he]=N.useState(null),[we,_e]=N.useState(""),Me=()=>{qe.info("Open create Modal"),s(!0)},Et=()=>{qe.info("Close create Modal"),s(!1),a(""),f(""),m("")},Nt=D=>{qe.info("Open edit Modal"),he(D),se(!0)},nt=()=>{qe.info("Close edit Modal"),se(!1),he(null)},at=D=>{const{name:q,value:W}=D.target;switch(q){case"title":a(W);break;case"path":f(W);break;case"assignedUser":m(W);break}},Pt=async()=>{if(o&&c&&p){const D=jt(Rt),q=Ut(D,"incidents"),W={fecha:new Date().toLocaleString("es-ES"),assignedUser:p,title:o,path:c,status:!0};try{await $N(q,W),qe.info("Adding new Incident"),Et(),B(S=>!S)}catch(S){qe.error("Error adding incident:"+S),b("Error al agregar el incidente.")}}else qe.info("Missing param"),alert("Por favor, completa todos los campos.")},rt=()=>{qe.info("Refresh list"),B(D=>!D)},Pe=async()=>{if(re){const D=jt(Rt),q=Ut(D,`incidents/${re.id}`);try{const W={title:re.title,path:re.path,assignedUser:re.assignedUser};await Ra(q,W),qe.info("Update Incident "+W.title),nt(),B(S=>!S)}catch(W){qe.error("Error updating incident:"+W),b("Error al actualizar el incidente.")}}};return N.useEffect(()=>{const D=async()=>{R(!0);const W=jt(Rt),S=Ut(W,"incidents"),O=hv(S,dv("fecha"));try{const Y=await Ti(O);if(Y.exists()){const ie=Y.val(),oe=Object.keys(ie).map(ce=>({id:ce,...ie[ce]})).sort((ce,Ee)=>{const ge=q(ce.fecha);return q(Ee.fecha).getTime()-ge.getTime()});qe.info("Get Incidents: "+oe),e(oe)}else e([]),qe.warn("No incidents data available")}catch(Y){qe.error("Error fetching incidents:"+Y),b("Error al cargar los incidentes.")}finally{R(!1)}},q=W=>{if(!W)return new Date(0);const S=W.split(", "),O=S[0].split("/"),Y=S[1].split(":");return new Date(parseInt(O[2],10),parseInt(O[1],10)-1,parseInt(O[0],10),parseInt(Y[0],10),parseInt(Y[1],10),parseInt(Y[2],10))};D()},[H]),N.useEffect(()=>{(async()=>{var S;L(!0);const q=jt(Rt),W=Ut(q,"users");try{const O=await Ti(W);if(O.exists()){const Y=O.val(),ie=[];for(const oe in Y)Object.prototype.hasOwnProperty.call(Y,oe)&&!((S=Y[oe].roles)!=null&&S.admin)&&ie.push({uid:oe,...Y[oe]});qe.info("Get Users: "+ie),_(ie)}else _([]),qe.warn("No users data available")}catch(O){qe.error("Error fetching users:"+O),b("Error al cargar los usuarios.")}finally{L(!1)}})()},[]),w||I?T.jsx("div",{children:"Cargando..."}):A?T.jsxs("div",{children:["Error: ",A]}):T.jsxs("div",{className:"incident-list-container",children:[T.jsxs("div",{className:"incident-list-header",children:[T.jsxs("div",{className:"search-input-wrapper",children:[T.jsx("svg",{className:"search-icon","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",children:T.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m19 19-2-2m0-7a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"})}),T.jsx("input",{type:"text",className:"search-input",placeholder:"Buscar por título o ubicación",value:we,onChange:D=>_e(D.target.value)})]}),T.jsx("button",{onClick:Me,className:"add-incident-button",children:"Agregar Incidente"})]}),T.jsxs("div",{className:"incident-list-grid header-row",children:[T.jsx("div",{className:"grid-item",children:"ID"}),T.jsx("div",{className:"grid-item",children:"Título"}),T.jsx("div",{className:"grid-item",children:"Ubicación"}),T.jsx("div",{className:"grid-item",children:"Asignado a"}),T.jsx("div",{className:"grid-item",children:"Fecha"}),T.jsx("div",{className:"grid-item",children:"Acción"})]}),r.filter(D=>D.title.toLowerCase().includes(we.toLowerCase())||D.path.toLowerCase().includes(we.toLowerCase())).map(D=>T.jsx(fP,{incident:D,onIncidentUpdated:rt,onIncidentClick:Nt},D.id)),t&&T.jsx("div",{className:"modal-overlay",children:T.jsxs("div",{className:"modal",children:[T.jsxs("div",{className:"modal-header",children:[T.jsx("h2",{children:"Creando Incidente"}),T.jsx("button",{onClick:Et,children:T.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[T.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),T.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),T.jsxs("div",{className:"modal-content",children:[T.jsx("label",{htmlFor:"title",children:"Título"}),T.jsx("input",{type:"text",id:"title",name:"title",value:o,onChange:at}),T.jsx("label",{htmlFor:"path",children:"Ubicación"}),T.jsx("input",{type:"text",id:"path",name:"path",value:c,onChange:at}),T.jsx("label",{htmlFor:"assignedUser",children:"Personal Asignado"}),T.jsxs("select",{id:"assignedUser",name:"assignedUser",value:p,onChange:at,children:[T.jsx("option",{value:"",children:"Seleccionar usuario"}),y.map(D=>T.jsx("option",{value:D.email,children:D.email},D.uid))]}),T.jsx("div",{className:"modal-footer",children:T.jsx("button",{onClick:Pt,className:"confirm-button",children:"Agregar Incidente"})})]})]})}),ee&&re&&T.jsx("div",{className:"modal-overlay",children:T.jsxs("div",{className:"modal",children:[T.jsxs("div",{className:"modal-header",children:[T.jsxs("h2",{children:["Incidente INC",re.id]}),T.jsx("button",{onClick:nt,children:T.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[T.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),T.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),T.jsxs("div",{className:"modal-content",children:[T.jsx("label",{htmlFor:"editTitle",children:"Título"}),T.jsx("input",{type:"text",id:"editTitle",name:"title",value:re.title,onChange:D=>he({...re,title:D.target.value})}),T.jsx("label",{htmlFor:"editPath",children:"Ubicación"}),T.jsx("input",{type:"text",id:"editPath",name:"path",value:re.path,onChange:D=>he({...re,path:D.target.value})}),T.jsx("label",{htmlFor:"editAssignedUser",children:"Personal Asignado"}),T.jsxs("select",{id:"editAssignedUser",name:"assignedUser",value:re.assignedUser,onChange:D=>he({...re,assignedUser:D.target.value}),children:[T.jsx("option",{value:"",children:"Seleccionar usuario"}),y.map(D=>T.jsx("option",{value:D.email,children:D.email},D.uid))]}),T.jsx("div",{className:"modal-footer",children:T.jsxs("button",{className:"confirm-button",onClick:Pe,children:[" ","Guardar"]})})]})]})})]})},mP=({incident:r,onIncidentUpdated:e})=>{const t=async()=>{const s=jt(Rt),o=Ut(s,`incidents/${r.id}`);try{await Ra(o,{status:!1}),e()}catch(a){console.error("Error closing incident:",a)}};return T.jsxs("div",{className:"incident-item",style:{cursor:"pointer"},children:[r.status?T.jsxs("div",{className:"incident-id",children:["INC",r.id]}):T.jsxs("div",{className:"incident-id-close",children:["INC",r.id]}),T.jsx("div",{className:"incident-title",children:r.title}),T.jsx("div",{className:"incident-path",children:r.path}),T.jsx("div",{className:"incident-assigned",children:r.assignedUser}),T.jsx("div",{className:"incident-date",children:r.fecha}),T.jsx("div",{className:"incident-action",children:r.status?T.jsx("button",{className:"close-incident-button",onClick:t,children:"Cerrar incidente"}):T.jsx("span",{className:"incident-closed",children:"Incidente cerrado"})})]})},gP=()=>{const[r,e]=N.useState([]),[t,s]=N.useState(!0),[o,a]=N.useState(!0),[c,f]=N.useState(null),[p,m]=N.useState(!1),{user:y}=N.useContext(ji),[_,w]=N.useState(""),R=()=>{m(I=>!I)};return N.useEffect(()=>{const I=async()=>{s(!0);const A=jt(Rt),b=Ut(A,"incidents"),H=hv(b,dv("assignedUser"),QN(y.email));try{const B=await Ti(H);if(B.exists()){const ee=B.val(),se=Object.keys(ee).map(re=>({id:re,...ee[re]}));se.sort((re,he)=>{const we=L(re.fecha);return L(he.fecha).getTime()-we.getTime()}),e(se)}else e([]),console.log("No incidents data available")}catch(B){console.error("Error fetching incidents:",B),f("Error al cargar los incidentes.")}finally{s(!1)}},L=A=>{if(!A)return new Date(0);const b=A.split(", "),H=b[0].split("/"),B=b[1].split(":");return new Date(parseInt(H[2],10),parseInt(H[1],10)-1,parseInt(H[0],10),parseInt(B[0],10),parseInt(B[1],10),parseInt(B[2],10))};I()},[p]),N.useEffect(()=>{(async()=>{var b;a(!0);const L=jt(Rt),A=Ut(L,"users");try{const H=await Ti(A);if(H.exists()){const B=H.val(),ee=[];for(const se in B)Object.prototype.hasOwnProperty.call(B,se)&&!((b=B[se].roles)!=null&&b.admin)&&ee.push({uid:se,...B[se]})}else console.log("No users data available")}catch(H){console.error("Error fetching users:",H),f("Error al cargar los usuarios.")}finally{a(!1)}})()},[]),t||o?T.jsx("div",{children:"Cargando..."}):c?T.jsxs("div",{children:["Error: ",c]}):T.jsxs("div",{className:"incident-list-container",children:[T.jsx("div",{className:"incident-list-header",children:T.jsxs("div",{className:"search-input-wrapper",children:[T.jsx("svg",{className:"search-icon","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",children:T.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m19 19-2-2m0-7a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"})}),T.jsx("input",{type:"text",className:"search-input",placeholder:"Buscar por título o ubicación",value:_,onChange:I=>w(I.target.value)})]})}),T.jsxs("div",{className:"incident-list-grid header-row",children:[T.jsx("div",{className:"grid-item",children:"ID"}),T.jsx("div",{className:"grid-item",children:"Título"}),T.jsx("div",{className:"grid-item",children:"Ubicación"}),T.jsx("div",{className:"grid-item",children:"Asignado a"}),T.jsx("div",{className:"grid-item",children:"Fecha"}),T.jsx("div",{className:"grid-item",children:"Acción"})]}),r.filter(I=>I.title.toLowerCase().includes(_.toLowerCase())||I.path.toLowerCase().includes(_.toLowerCase())).map(I=>T.jsx(mP,{incident:I,onIncidentUpdated:R},I.id))]})},_P=()=>{const[r,e]=N.useState([]),[t,s]=N.useState(!0),[o,a]=N.useState(null),{user:c}=N.useContext(ji);N.useEffect(()=>{(async()=>{s(!0);const m=jt(Rt),y=Ut(m,"users");try{const _=await Ti(y);if(_.exists()){const w=_.val(),R=Object.keys(w).filter(I=>I!==(c==null?void 0:c.uid)).map(I=>({uid:I,email:w[I].email,roles:w[I].roles||{admin:!1}}));e(R)}else e([])}catch(_){console.error("Error fetching users:",_),a("Error al cargar los usuarios.")}finally{s(!1)}})()},[c==null?void 0:c.uid]);const f=async(p,m)=>{const y=jt(Rt),_=Ut(y,`users/${p}/roles`);try{await Ra(_,{admin:m}),e(w=>w.map(R=>R.uid===p?{...R,roles:{admin:m}}:R))}catch(w){console.error("Error updating user role:",w),a("Error al actualizar el rol del usuario.")}};return t?T.jsx("div",{children:"Cargando usuarios..."}):o?T.jsxs("div",{children:["Error: ",o]}):T.jsxs("div",{className:"roles-admin-container",children:[T.jsx("h2",{children:"Administración de Roles"}),T.jsx("div",{className:"user-list",children:r.map(p=>{var m,y;return T.jsxs("div",{className:"user-card",children:[T.jsx("h3",{children:p.email}),T.jsxs("div",{className:"role-toggle",children:[T.jsx("button",{className:`role-button ${(m=p.roles)!=null&&m.admin?"active":""}`,onClick:()=>f(p.uid,!0),children:"Admin"}),T.jsx("button",{className:`role-button ${(y=p.roles)!=null&&y.admin?"":"active"}`,onClick:()=>f(p.uid,!1),children:"Personal"})]})]},p.uid)})})]})},yP=pE.createContext([]),vP=()=>{const[r]=N.useState([{id:1,name:"Hamburguesa de Pollo",quantity:40,desc:"Hamburguesa de pollo frito - … y mayonesa",price:24,image:"Hamburg.jpg"},{id:2,name:"Hamburguesa de Vacuno",quantity:50,desc:"Hamburguesa de Vacuno frito - … con tomate y mayonesa",price:26,image:"Hamburg.jpg"},{id:3,name:"Hamburguesa de Cerdo",quantity:60,desc:"Hamburguesa de Cerdo frito - … con tomate y mayonesa",price:26,image:"Hamburg.jpg"},{id:4,name:"Hamburguesa de Hormiga",quantity:70,desc:"Hamburguesa de Hormiga frita - … con tomate y mayonesa",price:26,image:"Hamburg.jpg"}]);return T.jsx(yP.Provider,{value:r,children:T.jsx(lP,{children:T.jsxs(DC,{children:[T.jsx(aP,{}),T.jsx("div",{className:"main-content",children:T.jsxs(cC,{children:[T.jsx(Yn,{path:"/",element:T.jsx(zg,{})}),T.jsx(Yn,{path:"/login",element:T.jsx(cP,{})}),T.jsx(Yn,{path:"/register",element:T.jsx(dP,{})}),T.jsx(Yn,{path:"/dashboard",element:T.jsx(jg,{children:T.jsx(pP,{})})}),T.jsx(Yn,{path:"/dashboard2",element:T.jsx(uP,{children:T.jsx(gP,{})})}),T.jsx(Yn,{path:"/admin",element:T.jsx(jg,{children:T.jsx(_P,{})})}),T.jsx(Yn,{path:"*",element:T.jsx(zg,{})})]})})]})})})};wE.createRoot(document.getElementById("root")).render(T.jsx(N.StrictMode,{children:T.jsx(vP,{})}));
