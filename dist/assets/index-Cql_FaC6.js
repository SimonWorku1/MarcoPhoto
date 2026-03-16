function oS(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in n)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(n,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function W_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var nf={exports:{}},ul={},rf={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xy;function aS(){if(xy)return Ve;xy=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),E=Symbol.iterator;function I(V){return V===null||typeof V!="object"?null:(V=E&&V[E]||V["@@iterator"],typeof V=="function"?V:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,M={};function z(V,Q,ve){this.props=V,this.context=Q,this.refs=M,this.updater=ve||O}z.prototype.isReactComponent={},z.prototype.setState=function(V,Q){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,Q,"setState")},z.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function ee(){}ee.prototype=z.prototype;function ne(V,Q,ve){this.props=V,this.context=Q,this.refs=M,this.updater=ve||O}var se=ne.prototype=new ee;se.constructor=ne,W(se,z.prototype),se.isPureReactComponent=!0;var le=Array.isArray,oe=Object.prototype.hasOwnProperty,ce={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function S(V,Q,ve){var Ee,xe={},X=null,de=null;if(Q!=null)for(Ee in Q.ref!==void 0&&(de=Q.ref),Q.key!==void 0&&(X=""+Q.key),Q)oe.call(Q,Ee)&&!R.hasOwnProperty(Ee)&&(xe[Ee]=Q[Ee]);var Ne=arguments.length-2;if(Ne===1)xe.children=ve;else if(1<Ne){for(var We=Array(Ne),gt=0;gt<Ne;gt++)We[gt]=arguments[gt+2];xe.children=We}if(V&&V.defaultProps)for(Ee in Ne=V.defaultProps,Ne)xe[Ee]===void 0&&(xe[Ee]=Ne[Ee]);return{$$typeof:n,type:V,key:X,ref:de,props:xe,_owner:ce.current}}function k(V,Q){return{$$typeof:n,type:V.type,key:Q,ref:V.ref,props:V.props,_owner:V._owner}}function b(V){return typeof V=="object"&&V!==null&&V.$$typeof===n}function x(V){var Q={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(ve){return Q[ve]})}var D=/\/+/g;function C(V,Q){return typeof V=="object"&&V!==null&&V.key!=null?x(""+V.key):Q.toString(36)}function Be(V,Q,ve,Ee,xe){var X=typeof V;(X==="undefined"||X==="boolean")&&(V=null);var de=!1;if(V===null)de=!0;else switch(X){case"string":case"number":de=!0;break;case"object":switch(V.$$typeof){case n:case e:de=!0}}if(de)return de=V,xe=xe(de),V=Ee===""?"."+C(de,0):Ee,le(xe)?(ve="",V!=null&&(ve=V.replace(D,"$&/")+"/"),Be(xe,Q,ve,"",function(gt){return gt})):xe!=null&&(b(xe)&&(xe=k(xe,ve+(!xe.key||de&&de.key===xe.key?"":(""+xe.key).replace(D,"$&/")+"/")+V)),Q.push(xe)),1;if(de=0,Ee=Ee===""?".":Ee+":",le(V))for(var Ne=0;Ne<V.length;Ne++){X=V[Ne];var We=Ee+C(X,Ne);de+=Be(X,Q,ve,We,xe)}else if(We=I(V),typeof We=="function")for(V=We.call(V),Ne=0;!(X=V.next()).done;)X=X.value,We=Ee+C(X,Ne++),de+=Be(X,Q,ve,We,xe);else if(X==="object")throw Q=String(V),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return de}function Ge(V,Q,ve){if(V==null)return V;var Ee=[],xe=0;return Be(V,Ee,"","",function(X){return Q.call(ve,X,xe++)}),Ee}function Qe(V){if(V._status===-1){var Q=V._result;Q=Q(),Q.then(function(ve){(V._status===0||V._status===-1)&&(V._status=1,V._result=ve)},function(ve){(V._status===0||V._status===-1)&&(V._status=2,V._result=ve)}),V._status===-1&&(V._status=0,V._result=Q)}if(V._status===1)return V._result.default;throw V._result}var Ue={current:null},q={transition:null},we={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:q,ReactCurrentOwner:ce};function ae(){throw Error("act(...) is not supported in production builds of React.")}return Ve.Children={map:Ge,forEach:function(V,Q,ve){Ge(V,function(){Q.apply(this,arguments)},ve)},count:function(V){var Q=0;return Ge(V,function(){Q++}),Q},toArray:function(V){return Ge(V,function(Q){return Q})||[]},only:function(V){if(!b(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Ve.Component=z,Ve.Fragment=t,Ve.Profiler=o,Ve.PureComponent=ne,Ve.StrictMode=i,Ve.Suspense=g,Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=we,Ve.act=ae,Ve.cloneElement=function(V,Q,ve){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Ee=W({},V.props),xe=V.key,X=V.ref,de=V._owner;if(Q!=null){if(Q.ref!==void 0&&(X=Q.ref,de=ce.current),Q.key!==void 0&&(xe=""+Q.key),V.type&&V.type.defaultProps)var Ne=V.type.defaultProps;for(We in Q)oe.call(Q,We)&&!R.hasOwnProperty(We)&&(Ee[We]=Q[We]===void 0&&Ne!==void 0?Ne[We]:Q[We])}var We=arguments.length-2;if(We===1)Ee.children=ve;else if(1<We){Ne=Array(We);for(var gt=0;gt<We;gt++)Ne[gt]=arguments[gt+2];Ee.children=Ne}return{$$typeof:n,type:V.type,key:xe,ref:X,props:Ee,_owner:de}},Ve.createContext=function(V){return V={$$typeof:c,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:l,_context:V},V.Consumer=V},Ve.createElement=S,Ve.createFactory=function(V){var Q=S.bind(null,V);return Q.type=V,Q},Ve.createRef=function(){return{current:null}},Ve.forwardRef=function(V){return{$$typeof:f,render:V}},Ve.isValidElement=b,Ve.lazy=function(V){return{$$typeof:_,_payload:{_status:-1,_result:V},_init:Qe}},Ve.memo=function(V,Q){return{$$typeof:y,type:V,compare:Q===void 0?null:Q}},Ve.startTransition=function(V){var Q=q.transition;q.transition={};try{V()}finally{q.transition=Q}},Ve.unstable_act=ae,Ve.useCallback=function(V,Q){return Ue.current.useCallback(V,Q)},Ve.useContext=function(V){return Ue.current.useContext(V)},Ve.useDebugValue=function(){},Ve.useDeferredValue=function(V){return Ue.current.useDeferredValue(V)},Ve.useEffect=function(V,Q){return Ue.current.useEffect(V,Q)},Ve.useId=function(){return Ue.current.useId()},Ve.useImperativeHandle=function(V,Q,ve){return Ue.current.useImperativeHandle(V,Q,ve)},Ve.useInsertionEffect=function(V,Q){return Ue.current.useInsertionEffect(V,Q)},Ve.useLayoutEffect=function(V,Q){return Ue.current.useLayoutEffect(V,Q)},Ve.useMemo=function(V,Q){return Ue.current.useMemo(V,Q)},Ve.useReducer=function(V,Q,ve){return Ue.current.useReducer(V,Q,ve)},Ve.useRef=function(V){return Ue.current.useRef(V)},Ve.useState=function(V){return Ue.current.useState(V)},Ve.useSyncExternalStore=function(V,Q,ve){return Ue.current.useSyncExternalStore(V,Q,ve)},Ve.useTransition=function(){return Ue.current.useTransition()},Ve.version="18.3.1",Ve}var by;function up(){return by||(by=1,rf.exports=aS()),rf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ny;function lS(){if(Ny)return ul;Ny=1;var n=up(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,g,y){var _,E={},I=null,O=null;y!==void 0&&(I=""+y),g.key!==void 0&&(I=""+g.key),g.ref!==void 0&&(O=g.ref);for(_ in g)i.call(g,_)&&!l.hasOwnProperty(_)&&(E[_]=g[_]);if(f&&f.defaultProps)for(_ in g=f.defaultProps,g)E[_]===void 0&&(E[_]=g[_]);return{$$typeof:e,type:f,key:I,ref:O,props:E,_owner:o.current}}return ul.Fragment=t,ul.jsx=c,ul.jsxs=c,ul}var Dy;function uS(){return Dy||(Dy=1,nf.exports=lS()),nf.exports}var G=uS(),lc={},sf={exports:{}},on={},of={exports:{}},af={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vy;function cS(){return Vy||(Vy=1,(function(n){function e(q,we){var ae=q.length;q.push(we);e:for(;0<ae;){var V=ae-1>>>1,Q=q[V];if(0<o(Q,we))q[V]=we,q[ae]=Q,ae=V;else break e}}function t(q){return q.length===0?null:q[0]}function i(q){if(q.length===0)return null;var we=q[0],ae=q.pop();if(ae!==we){q[0]=ae;e:for(var V=0,Q=q.length,ve=Q>>>1;V<ve;){var Ee=2*(V+1)-1,xe=q[Ee],X=Ee+1,de=q[X];if(0>o(xe,ae))X<Q&&0>o(de,xe)?(q[V]=de,q[X]=ae,V=X):(q[V]=xe,q[Ee]=ae,V=Ee);else if(X<Q&&0>o(de,ae))q[V]=de,q[X]=ae,V=X;else break e}}return we}function o(q,we){var ae=q.sortIndex-we.sortIndex;return ae!==0?ae:q.id-we.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();n.unstable_now=function(){return c.now()-f}}var g=[],y=[],_=1,E=null,I=3,O=!1,W=!1,M=!1,z=typeof setTimeout=="function"?setTimeout:null,ee=typeof clearTimeout=="function"?clearTimeout:null,ne=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function se(q){for(var we=t(y);we!==null;){if(we.callback===null)i(y);else if(we.startTime<=q)i(y),we.sortIndex=we.expirationTime,e(g,we);else break;we=t(y)}}function le(q){if(M=!1,se(q),!W)if(t(g)!==null)W=!0,Qe(oe);else{var we=t(y);we!==null&&Ue(le,we.startTime-q)}}function oe(q,we){W=!1,M&&(M=!1,ee(S),S=-1),O=!0;var ae=I;try{for(se(we),E=t(g);E!==null&&(!(E.expirationTime>we)||q&&!x());){var V=E.callback;if(typeof V=="function"){E.callback=null,I=E.priorityLevel;var Q=V(E.expirationTime<=we);we=n.unstable_now(),typeof Q=="function"?E.callback=Q:E===t(g)&&i(g),se(we)}else i(g);E=t(g)}if(E!==null)var ve=!0;else{var Ee=t(y);Ee!==null&&Ue(le,Ee.startTime-we),ve=!1}return ve}finally{E=null,I=ae,O=!1}}var ce=!1,R=null,S=-1,k=5,b=-1;function x(){return!(n.unstable_now()-b<k)}function D(){if(R!==null){var q=n.unstable_now();b=q;var we=!0;try{we=R(!0,q)}finally{we?C():(ce=!1,R=null)}}else ce=!1}var C;if(typeof ne=="function")C=function(){ne(D)};else if(typeof MessageChannel<"u"){var Be=new MessageChannel,Ge=Be.port2;Be.port1.onmessage=D,C=function(){Ge.postMessage(null)}}else C=function(){z(D,0)};function Qe(q){R=q,ce||(ce=!0,C())}function Ue(q,we){S=z(function(){q(n.unstable_now())},we)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(q){q.callback=null},n.unstable_continueExecution=function(){W||O||(W=!0,Qe(oe))},n.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<q?Math.floor(1e3/q):5},n.unstable_getCurrentPriorityLevel=function(){return I},n.unstable_getFirstCallbackNode=function(){return t(g)},n.unstable_next=function(q){switch(I){case 1:case 2:case 3:var we=3;break;default:we=I}var ae=I;I=we;try{return q()}finally{I=ae}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(q,we){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var ae=I;I=q;try{return we()}finally{I=ae}},n.unstable_scheduleCallback=function(q,we,ae){var V=n.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?V+ae:V):ae=V,q){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=ae+Q,q={id:_++,callback:we,priorityLevel:q,startTime:ae,expirationTime:Q,sortIndex:-1},ae>V?(q.sortIndex=ae,e(y,q),t(g)===null&&q===t(y)&&(M?(ee(S),S=-1):M=!0,Ue(le,ae-V))):(q.sortIndex=Q,e(g,q),W||O||(W=!0,Qe(oe))),q},n.unstable_shouldYield=x,n.unstable_wrapCallback=function(q){var we=I;return function(){var ae=I;I=we;try{return q.apply(this,arguments)}finally{I=ae}}}})(af)),af}var Oy;function hS(){return Oy||(Oy=1,of.exports=cS()),of.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var My;function dS(){if(My)return on;My=1;var n=up(),e=hS();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},E={};function I(r){return g.call(E,r)?!0:g.call(_,r)?!1:y.test(r)?E[r]=!0:(_[r]=!0,!1)}function O(r,s,a,h){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function W(r,s,a,h){if(s===null||typeof s>"u"||O(r,s,a,h))return!0;if(h)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function M(r,s,a,h,d,p,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=p,this.removeEmptyString=w}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){z[r]=new M(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];z[s]=new M(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){z[r]=new M(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){z[r]=new M(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){z[r]=new M(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){z[r]=new M(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){z[r]=new M(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){z[r]=new M(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){z[r]=new M(r,5,!1,r.toLowerCase(),null,!1,!1)});var ee=/[\-:]([a-z])/g;function ne(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(ee,ne);z[s]=new M(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(ee,ne);z[s]=new M(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(ee,ne);z[s]=new M(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){z[r]=new M(r,1,!1,r.toLowerCase(),null,!1,!1)}),z.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){z[r]=new M(r,1,!1,r.toLowerCase(),null,!0,!0)});function se(r,s,a,h){var d=z.hasOwnProperty(s)?z[s]:null;(d!==null?d.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(W(s,a,d,h)&&(a=null),h||d===null?I(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):d.mustUseProperty?r[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,h=d.attributeNamespace,a===null?r.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,h?r.setAttributeNS(h,s,a):r.setAttribute(s,a))))}var le=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oe=Symbol.for("react.element"),ce=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),x=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),Be=Symbol.for("react.suspense_list"),Ge=Symbol.for("react.memo"),Qe=Symbol.for("react.lazy"),Ue=Symbol.for("react.offscreen"),q=Symbol.iterator;function we(r){return r===null||typeof r!="object"?null:(r=q&&r[q]||r["@@iterator"],typeof r=="function"?r:null)}var ae=Object.assign,V;function Q(r){if(V===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);V=s&&s[1]||""}return`
`+V+r}var ve=!1;function Ee(r,s){if(!r||ve)return"";ve=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(B){var h=B}Reflect.construct(r,[],s)}else{try{s.call()}catch(B){h=B}r.call(s.prototype)}else{try{throw Error()}catch(B){h=B}r()}}catch(B){if(B&&h&&typeof B.stack=="string"){for(var d=B.stack.split(`
`),p=h.stack.split(`
`),w=d.length-1,A=p.length-1;1<=w&&0<=A&&d[w]!==p[A];)A--;for(;1<=w&&0<=A;w--,A--)if(d[w]!==p[A]){if(w!==1||A!==1)do if(w--,A--,0>A||d[w]!==p[A]){var P=`
`+d[w].replace(" at new "," at ");return r.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",r.displayName)),P}while(1<=w&&0<=A);break}}}finally{ve=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?Q(r):""}function xe(r){switch(r.tag){case 5:return Q(r.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return r=Ee(r.type,!1),r;case 11:return r=Ee(r.type.render,!1),r;case 1:return r=Ee(r.type,!0),r;default:return""}}function X(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case R:return"Fragment";case ce:return"Portal";case k:return"Profiler";case S:return"StrictMode";case C:return"Suspense";case Be:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case x:return(r.displayName||"Context")+".Consumer";case b:return(r._context.displayName||"Context")+".Provider";case D:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Ge:return s=r.displayName||null,s!==null?s:X(r.type)||"Memo";case Qe:s=r._payload,r=r._init;try{return X(r(s))}catch{}}return null}function de(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return X(s);case 8:return s===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Ne(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function We(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function gt(r){var s=We(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),h=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return d.call(this)},set:function(w){h=""+w,p.call(this,w)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return h},setValue:function(w){h=""+w},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function Kn(r){r._valueTracker||(r._valueTracker=gt(r))}function Qn(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),h="";return r&&(h=We(r)?r.checked?"true":"false":r.value),r=h,r!==a?(s.setValue(r),!0):!1}function Zr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Ks(r,s){var a=s.checked;return ae({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Gl(r,s){var a=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;a=Ne(s.value!=null?s.value:a),r._wrapperState={initialChecked:h,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Qs(r,s){s=s.checked,s!=null&&se(r,"checked",s,!1)}function is(r,s){Qs(r,s);var a=Ne(s.value),h=s.type;if(a!=null)h==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(h==="submit"||h==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?yt(r,s.type,a):s.hasOwnProperty("defaultValue")&&yt(r,s.type,Ne(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function ga(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function yt(r,s,a){(s!=="number"||Zr(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var ct=Array.isArray;function bn(r,s,a,h){if(r=r.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=s.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&h&&(r[a].defaultSelected=!0)}else{for(a=""+Ne(a),s=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,h&&(r[d].defaultSelected=!0);return}s!==null||r[d].disabled||(s=r[d])}s!==null&&(s.selected=!0)}}function ya(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function va(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(ct(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:Ne(a)}}function Kl(r,s){var a=Ne(s.value),h=Ne(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),h!=null&&(r.defaultValue=""+h)}function ei(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function _a(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ys(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?_a(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var ti,Ql=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,h,d){MSApp.execUnsafeLocalFunction(function(){return r(s,a,h,d)})}:r})(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(ti=ti||document.createElement("div"),ti.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=ti.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function ss(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var ni={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yl=["Webkit","ms","Moz","O"];Object.keys(ni).forEach(function(r){Yl.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),ni[s]=ni[r]})});function ri(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||ni.hasOwnProperty(r)&&ni[r]?(""+s).trim():s+"px"}function Js(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var h=a.indexOf("--")===0,d=ri(a,s[a],h);a==="float"&&(a="cssFloat"),h?r.setProperty(a,d):r[a]=d}}var wa=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nn(r,s){if(s){if(wa[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Xs(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ii=null;function Zs(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Ir=null,Sr=null,lt=null;function Ea(r){if(r=Ka(r)){if(typeof Ir!="function")throw Error(t(280));var s=r.stateNode;s&&(s=Iu(s),Ir(r.stateNode,r.type,s))}}function si(r){Sr?lt?lt.push(r):lt=[r]:Sr=r}function oi(){if(Sr){var r=Sr,s=lt;if(lt=Sr=null,Ea(r),s)for(r=0;r<s.length;r++)Ea(s[r])}}function Jl(r,s){return r(s)}function Xl(){}var Yn=!1;function Zl(r,s,a){if(Yn)return r(s,a);Yn=!0;try{return Jl(r,s,a)}finally{Yn=!1,(Sr!==null||lt!==null)&&(Xl(),oi())}}function os(r,s){var a=r.stateNode;if(a===null)return null;var h=Iu(a);if(h===null)return null;a=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(r=r.type,h=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!h;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var ai=!1;if(f)try{var li={};Object.defineProperty(li,"passive",{get:function(){ai=!0}}),window.addEventListener("test",li,li),window.removeEventListener("test",li,li)}catch{ai=!1}function eu(r,s,a,h,d,p,w,A,P){var B=Array.prototype.slice.call(arguments,3);try{s.apply(a,B)}catch(J){this.onError(J)}}var Ar=!1,Jn=null,eo=!1,Tn=null,tu={onError:function(r){Ar=!0,Jn=r}};function nu(r,s,a,h,d,p,w,A,P){Ar=!1,Jn=null,eu.apply(tu,arguments)}function Ta(r,s,a,h,d,p,w,A,P){if(nu.apply(this,arguments),Ar){if(Ar){var B=Jn;Ar=!1,Jn=null}else throw Error(t(198));eo||(eo=!0,Tn=B)}}function Dn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function Ia(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function ru(r){if(Dn(r)!==r)throw Error(t(188))}function iu(r){var s=r.alternate;if(!s){if(s=Dn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,h=s;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(h=d.return,h!==null){a=h;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return ru(d),r;if(p===h)return ru(d),s;p=p.sibling}throw Error(t(188))}if(a.return!==h.return)a=d,h=p;else{for(var w=!1,A=d.child;A;){if(A===a){w=!0,a=d,h=p;break}if(A===h){w=!0,h=d,a=p;break}A=A.sibling}if(!w){for(A=p.child;A;){if(A===a){w=!0,a=p,h=d;break}if(A===h){w=!0,h=p,a=d;break}A=A.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==h)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function su(r){return r=iu(r),r!==null?as(r):null}function as(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=as(r);if(s!==null)return s;r=r.sibling}return null}var Sa=e.unstable_scheduleCallback,to=e.unstable_cancelCallback,ls=e.unstable_shouldYield,Rr=e.unstable_requestPaint,Ze=e.unstable_now,Dh=e.unstable_getCurrentPriorityLevel,no=e.unstable_ImmediatePriority,Aa=e.unstable_UserBlockingPriority,us=e.unstable_NormalPriority,Ra=e.unstable_LowPriority,ro=e.unstable_IdlePriority,cs=null,ln=null;function ou(r){if(ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(cs,r,void 0,(r.current.flags&128)===128)}catch{}}var un=Math.clz32?Math.clz32:hs,Xn=Math.log,In=Math.LN2;function hs(r){return r>>>=0,r===0?32:31-(Xn(r)/In|0)|0}var Zn=64,ui=4194304;function He(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Cr(r,s){var a=r.pendingLanes;if(a===0)return 0;var h=0,d=r.suspendedLanes,p=r.pingedLanes,w=a&268435455;if(w!==0){var A=w&~d;A!==0?h=He(A):(p&=w,p!==0&&(h=He(p)))}else w=a&~d,w!==0?h=He(w):p!==0&&(h=He(p));if(h===0)return 0;if(s!==0&&s!==h&&(s&d)===0&&(d=h&-h,p=s&-s,d>=p||d===16&&(p&4194240)!==0))return s;if((h&4)!==0&&(h|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=h;0<s;)a=31-un(s),d=1<<a,h|=r[a],s&=~d;return h}function ds(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fs(r,s){for(var a=r.suspendedLanes,h=r.pingedLanes,d=r.expirationTimes,p=r.pendingLanes;0<p;){var w=31-un(p),A=1<<w,P=d[w];P===-1?((A&a)===0||(A&h)!==0)&&(d[w]=ds(A,s)):P<=s&&(r.expiredLanes|=A),p&=~A}}function Ca(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function ka(){var r=Zn;return Zn<<=1,(Zn&4194240)===0&&(Zn=64),r}function Pa(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function ps(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-un(s),r[s]=a}function Vh(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var h=r.eventTimes;for(r=r.expirationTimes;0<a;){var d=31-un(a),p=1<<d;s[d]=0,h[d]=-1,r[d]=-1,a&=~p}}function xa(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var h=31-un(a),d=1<<h;d&s|r[h]&s&&(r[h]|=s),a&=~d}}var Fe=0;function er(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var ba,io,Na,Da,Va,tr=!1,so=[],nr=null,rr=null,Dt=null,ms=new Map,kr=new Map,cn=[],au="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ci(r,s){switch(r){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":Dt=null;break;case"pointerover":case"pointerout":ms.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":kr.delete(s.pointerId)}}function Vn(r,s,a,h,d,p){return r===null||r.nativeEvent!==p?(r={blockedOn:s,domEventName:a,eventSystemFlags:h,nativeEvent:p,targetContainers:[d]},s!==null&&(s=Ka(s),s!==null&&io(s)),r):(r.eventSystemFlags|=h,s=r.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),r)}function lu(r,s,a,h,d){switch(s){case"focusin":return nr=Vn(nr,r,s,a,h,d),!0;case"dragenter":return rr=Vn(rr,r,s,a,h,d),!0;case"mouseover":return Dt=Vn(Dt,r,s,a,h,d),!0;case"pointerover":var p=d.pointerId;return ms.set(p,Vn(ms.get(p)||null,r,s,a,h,d)),!0;case"gotpointercapture":return p=d.pointerId,kr.set(p,Vn(kr.get(p)||null,r,s,a,h,d)),!0}return!1}function oo(r){var s=_s(r.target);if(s!==null){var a=Dn(s);if(a!==null){if(s=a.tag,s===13){if(s=Ia(a),s!==null){r.blockedOn=s,Va(r.priority,function(){Na(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Je(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=ao(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var h=new a.constructor(a.type,a);ii=h,a.target.dispatchEvent(h),ii=null}else return s=Ka(a),s!==null&&io(s),r.blockedOn=a,!1;s.shift()}return!0}function uu(r,s,a){Je(r)&&a.delete(s)}function Oh(){tr=!1,nr!==null&&Je(nr)&&(nr=null),rr!==null&&Je(rr)&&(rr=null),Dt!==null&&Je(Dt)&&(Dt=null),ms.forEach(uu),kr.forEach(uu)}function hi(r,s){r.blockedOn===s&&(r.blockedOn=null,tr||(tr=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Oh)))}function di(r){function s(d){return hi(d,r)}if(0<so.length){hi(so[0],r);for(var a=1;a<so.length;a++){var h=so[a];h.blockedOn===r&&(h.blockedOn=null)}}for(nr!==null&&hi(nr,r),rr!==null&&hi(rr,r),Dt!==null&&hi(Dt,r),ms.forEach(s),kr.forEach(s),a=0;a<cn.length;a++)h=cn[a],h.blockedOn===r&&(h.blockedOn=null);for(;0<cn.length&&(a=cn[0],a.blockedOn===null);)oo(a),a.blockedOn===null&&cn.shift()}var Pr=le.ReactCurrentBatchConfig,xr=!0;function ir(r,s,a,h){var d=Fe,p=Pr.transition;Pr.transition=null;try{Fe=1,Oa(r,s,a,h)}finally{Fe=d,Pr.transition=p}}function cu(r,s,a,h){var d=Fe,p=Pr.transition;Pr.transition=null;try{Fe=4,Oa(r,s,a,h)}finally{Fe=d,Pr.transition=p}}function Oa(r,s,a,h){if(xr){var d=ao(r,s,a,h);if(d===null)Hh(r,s,h,sr,a),ci(r,h);else if(lu(d,r,s,a,h))h.stopPropagation();else if(ci(r,h),s&4&&-1<au.indexOf(r)){for(;d!==null;){var p=Ka(d);if(p!==null&&ba(p),p=ao(r,s,a,h),p===null&&Hh(r,s,h,sr,a),p===d)break;d=p}d!==null&&h.stopPropagation()}else Hh(r,s,h,null,a)}}var sr=null;function ao(r,s,a,h){if(sr=null,r=Zs(h),r=_s(r),r!==null)if(s=Dn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=Ia(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return sr=r,null}function lo(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Dh()){case no:return 1;case Aa:return 4;case us:case Ra:return 16;case ro:return 536870912;default:return 16}default:return 16}}var hn=null,uo=null,br=null;function hu(){if(br)return br;var r,s=uo,a=s.length,h,d="value"in hn?hn.value:hn.textContent,p=d.length;for(r=0;r<a&&s[r]===d[r];r++);var w=a-r;for(h=1;h<=w&&s[a-h]===d[p-h];h++);return br=d.slice(r,1<h?1-h:void 0)}function gs(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function or(){return!0}function Ma(){return!1}function zt(r){function s(a,h,d,p,w){this._reactName=a,this._targetInst=d,this.type=h,this.nativeEvent=p,this.target=w,this.currentTarget=null;for(var A in r)r.hasOwnProperty(A)&&(a=r[A],this[A]=a?a(p):p[A]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?or:Ma,this.isPropagationStopped=Ma,this}return ae(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=or)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=or)},persist:function(){},isPersistent:or}),s}var ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ys=zt(ar),fi=ae({},ar,{view:0,detail:0}),co=zt(fi),ho,fo,dn,vs=ae({},fi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:be,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==dn&&(dn&&r.type==="mousemove"?(ho=r.screenX-dn.screenX,fo=r.screenY-dn.screenY):fo=ho=0,dn=r),ho)},movementY:function(r){return"movementY"in r?r.movementY:fo}}),La=zt(vs),du=ae({},vs,{dataTransfer:0}),fu=zt(du),po=ae({},fi,{relatedTarget:0}),Vt=zt(po),pu=ae({},ar,{animationName:0,elapsedTime:0,pseudoElement:0}),mu=zt(pu),pi=ae({},ar,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),u=zt(pi),m=ae({},ar,{data:0}),v=zt(m),T={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},F={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function re(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=$[r])?!!s[r]:!1}function be(){return re}var ht=ae({},fi,{key:function(r){if(r.key){var s=T[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=gs(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?F[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:be,charCode:function(r){return r.type==="keypress"?gs(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?gs(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),Ke=zt(ht),vt=ae({},vs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fn=zt(vt),Nr=ae({},fi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:be}),lr=zt(Nr),ur=ae({},ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),mo=zt(ur),Fa=ae({},vs,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),e0=zt(Fa),t0=[9,13,27,32],Mh=f&&"CompositionEvent"in window,Ua=null;f&&"documentMode"in document&&(Ua=document.documentMode);var n0=f&&"TextEvent"in window&&!Ua,Tm=f&&(!Mh||Ua&&8<Ua&&11>=Ua),Im=" ",Sm=!1;function Am(r,s){switch(r){case"keyup":return t0.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rm(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var go=!1;function r0(r,s){switch(r){case"compositionend":return Rm(s);case"keypress":return s.which!==32?null:(Sm=!0,Im);case"textInput":return r=s.data,r===Im&&Sm?null:r;default:return null}}function i0(r,s){if(go)return r==="compositionend"||!Mh&&Am(r,s)?(r=hu(),br=uo=hn=null,go=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Tm&&s.locale!=="ko"?null:s.data;default:return null}}var s0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cm(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!s0[r.type]:s==="textarea"}function km(r,s,a,h){si(h),s=wu(s,"onChange"),0<s.length&&(a=new ys("onChange","change",null,a,h),r.push({event:a,listeners:s}))}var ja=null,za=null;function o0(r){Hm(r,0)}function gu(r){var s=Eo(r);if(Qn(s))return r}function a0(r,s){if(r==="change")return s}var Pm=!1;if(f){var Lh;if(f){var Fh="oninput"in document;if(!Fh){var xm=document.createElement("div");xm.setAttribute("oninput","return;"),Fh=typeof xm.oninput=="function"}Lh=Fh}else Lh=!1;Pm=Lh&&(!document.documentMode||9<document.documentMode)}function bm(){ja&&(ja.detachEvent("onpropertychange",Nm),za=ja=null)}function Nm(r){if(r.propertyName==="value"&&gu(za)){var s=[];km(s,za,r,Zs(r)),Zl(o0,s)}}function l0(r,s,a){r==="focusin"?(bm(),ja=s,za=a,ja.attachEvent("onpropertychange",Nm)):r==="focusout"&&bm()}function u0(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return gu(za)}function c0(r,s){if(r==="click")return gu(s)}function h0(r,s){if(r==="input"||r==="change")return gu(s)}function d0(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var On=typeof Object.is=="function"?Object.is:d0;function Ba(r,s){if(On(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),h=Object.keys(s);if(a.length!==h.length)return!1;for(h=0;h<a.length;h++){var d=a[h];if(!g.call(s,d)||!On(r[d],s[d]))return!1}return!0}function Dm(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Vm(r,s){var a=Dm(r);r=0;for(var h;a;){if(a.nodeType===3){if(h=r+a.textContent.length,r<=s&&h>=s)return{node:a,offset:s-r};r=h}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Dm(a)}}function Om(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Om(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Mm(){for(var r=window,s=Zr();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=Zr(r.document)}return s}function Uh(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function f0(r){var s=Mm(),a=r.focusedElem,h=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&Om(a.ownerDocument.documentElement,a)){if(h!==null&&Uh(a)){if(s=h.start,r=h.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var d=a.textContent.length,p=Math.min(h.start,d);h=h.end===void 0?p:Math.min(h.end,d),!r.extend&&p>h&&(d=h,h=p,p=d),d=Vm(a,p);var w=Vm(a,h);d&&w&&(r.rangeCount!==1||r.anchorNode!==d.node||r.anchorOffset!==d.offset||r.focusNode!==w.node||r.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),r.removeAllRanges(),p>h?(r.addRange(s),r.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var p0=f&&"documentMode"in document&&11>=document.documentMode,yo=null,jh=null,$a=null,zh=!1;function Lm(r,s,a){var h=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;zh||yo==null||yo!==Zr(h)||(h=yo,"selectionStart"in h&&Uh(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),$a&&Ba($a,h)||($a=h,h=wu(jh,"onSelect"),0<h.length&&(s=new ys("onSelect","select",null,s,a),r.push({event:s,listeners:h}),s.target=yo)))}function yu(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var vo={animationend:yu("Animation","AnimationEnd"),animationiteration:yu("Animation","AnimationIteration"),animationstart:yu("Animation","AnimationStart"),transitionend:yu("Transition","TransitionEnd")},Bh={},Fm={};f&&(Fm=document.createElement("div").style,"AnimationEvent"in window||(delete vo.animationend.animation,delete vo.animationiteration.animation,delete vo.animationstart.animation),"TransitionEvent"in window||delete vo.transitionend.transition);function vu(r){if(Bh[r])return Bh[r];if(!vo[r])return r;var s=vo[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in Fm)return Bh[r]=s[a];return r}var Um=vu("animationend"),jm=vu("animationiteration"),zm=vu("animationstart"),Bm=vu("transitionend"),$m=new Map,Wm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mi(r,s){$m.set(r,s),l(s,[r])}for(var $h=0;$h<Wm.length;$h++){var Wh=Wm[$h],m0=Wh.toLowerCase(),g0=Wh[0].toUpperCase()+Wh.slice(1);mi(m0,"on"+g0)}mi(Um,"onAnimationEnd"),mi(jm,"onAnimationIteration"),mi(zm,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(Bm,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),y0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wa));function qm(r,s,a){var h=r.type||"unknown-event";r.currentTarget=a,Ta(h,s,void 0,r),r.currentTarget=null}function Hm(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var h=r[a],d=h.event;h=h.listeners;e:{var p=void 0;if(s)for(var w=h.length-1;0<=w;w--){var A=h[w],P=A.instance,B=A.currentTarget;if(A=A.listener,P!==p&&d.isPropagationStopped())break e;qm(d,A,B),p=P}else for(w=0;w<h.length;w++){if(A=h[w],P=A.instance,B=A.currentTarget,A=A.listener,P!==p&&d.isPropagationStopped())break e;qm(d,A,B),p=P}}}if(eo)throw r=Tn,eo=!1,Tn=null,r}function et(r,s){var a=s[Xh];a===void 0&&(a=s[Xh]=new Set);var h=r+"__bubble";a.has(h)||(Gm(s,r,2,!1),a.add(h))}function qh(r,s,a){var h=0;s&&(h|=4),Gm(a,r,h,s)}var _u="_reactListening"+Math.random().toString(36).slice(2);function qa(r){if(!r[_u]){r[_u]=!0,i.forEach(function(a){a!=="selectionchange"&&(y0.has(a)||qh(a,!1,r),qh(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[_u]||(s[_u]=!0,qh("selectionchange",!1,s))}}function Gm(r,s,a,h){switch(lo(s)){case 1:var d=ir;break;case 4:d=cu;break;default:d=Oa}a=d.bind(null,s,a,r),d=void 0,!ai||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),h?d!==void 0?r.addEventListener(s,a,{capture:!0,passive:d}):r.addEventListener(s,a,!0):d!==void 0?r.addEventListener(s,a,{passive:d}):r.addEventListener(s,a,!1)}function Hh(r,s,a,h,d){var p=h;if((s&1)===0&&(s&2)===0&&h!==null)e:for(;;){if(h===null)return;var w=h.tag;if(w===3||w===4){var A=h.stateNode.containerInfo;if(A===d||A.nodeType===8&&A.parentNode===d)break;if(w===4)for(w=h.return;w!==null;){var P=w.tag;if((P===3||P===4)&&(P=w.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;w=w.return}for(;A!==null;){if(w=_s(A),w===null)return;if(P=w.tag,P===5||P===6){h=p=w;continue e}A=A.parentNode}}h=h.return}Zl(function(){var B=p,J=Zs(a),Z=[];e:{var Y=$m.get(r);if(Y!==void 0){var ue=ys,pe=r;switch(r){case"keypress":if(gs(a)===0)break e;case"keydown":case"keyup":ue=Ke;break;case"focusin":pe="focus",ue=Vt;break;case"focusout":pe="blur",ue=Vt;break;case"beforeblur":case"afterblur":ue=Vt;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=La;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=fu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=lr;break;case Um:case jm:case zm:ue=mu;break;case Bm:ue=mo;break;case"scroll":ue=co;break;case"wheel":ue=e0;break;case"copy":case"cut":case"paste":ue=u;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=fn}var ye=(s&4)!==0,dt=!ye&&r==="scroll",L=ye?Y!==null?Y+"Capture":null:Y;ye=[];for(var N=B,j;N!==null;){j=N;var te=j.stateNode;if(j.tag===5&&te!==null&&(j=te,L!==null&&(te=os(N,L),te!=null&&ye.push(Ha(N,te,j)))),dt)break;N=N.return}0<ye.length&&(Y=new ue(Y,pe,null,a,J),Z.push({event:Y,listeners:ye}))}}if((s&7)===0){e:{if(Y=r==="mouseover"||r==="pointerover",ue=r==="mouseout"||r==="pointerout",Y&&a!==ii&&(pe=a.relatedTarget||a.fromElement)&&(_s(pe)||pe[Dr]))break e;if((ue||Y)&&(Y=J.window===J?J:(Y=J.ownerDocument)?Y.defaultView||Y.parentWindow:window,ue?(pe=a.relatedTarget||a.toElement,ue=B,pe=pe?_s(pe):null,pe!==null&&(dt=Dn(pe),pe!==dt||pe.tag!==5&&pe.tag!==6)&&(pe=null)):(ue=null,pe=B),ue!==pe)){if(ye=La,te="onMouseLeave",L="onMouseEnter",N="mouse",(r==="pointerout"||r==="pointerover")&&(ye=fn,te="onPointerLeave",L="onPointerEnter",N="pointer"),dt=ue==null?Y:Eo(ue),j=pe==null?Y:Eo(pe),Y=new ye(te,N+"leave",ue,a,J),Y.target=dt,Y.relatedTarget=j,te=null,_s(J)===B&&(ye=new ye(L,N+"enter",pe,a,J),ye.target=j,ye.relatedTarget=dt,te=ye),dt=te,ue&&pe)t:{for(ye=ue,L=pe,N=0,j=ye;j;j=_o(j))N++;for(j=0,te=L;te;te=_o(te))j++;for(;0<N-j;)ye=_o(ye),N--;for(;0<j-N;)L=_o(L),j--;for(;N--;){if(ye===L||L!==null&&ye===L.alternate)break t;ye=_o(ye),L=_o(L)}ye=null}else ye=null;ue!==null&&Km(Z,Y,ue,ye,!1),pe!==null&&dt!==null&&Km(Z,dt,pe,ye,!0)}}e:{if(Y=B?Eo(B):window,ue=Y.nodeName&&Y.nodeName.toLowerCase(),ue==="select"||ue==="input"&&Y.type==="file")var _e=a0;else if(Cm(Y))if(Pm)_e=h0;else{_e=u0;var Se=l0}else(ue=Y.nodeName)&&ue.toLowerCase()==="input"&&(Y.type==="checkbox"||Y.type==="radio")&&(_e=c0);if(_e&&(_e=_e(r,B))){km(Z,_e,a,J);break e}Se&&Se(r,Y,B),r==="focusout"&&(Se=Y._wrapperState)&&Se.controlled&&Y.type==="number"&&yt(Y,"number",Y.value)}switch(Se=B?Eo(B):window,r){case"focusin":(Cm(Se)||Se.contentEditable==="true")&&(yo=Se,jh=B,$a=null);break;case"focusout":$a=jh=yo=null;break;case"mousedown":zh=!0;break;case"contextmenu":case"mouseup":case"dragend":zh=!1,Lm(Z,a,J);break;case"selectionchange":if(p0)break;case"keydown":case"keyup":Lm(Z,a,J)}var Ae;if(Mh)e:{switch(r){case"compositionstart":var Ce="onCompositionStart";break e;case"compositionend":Ce="onCompositionEnd";break e;case"compositionupdate":Ce="onCompositionUpdate";break e}Ce=void 0}else go?Am(r,a)&&(Ce="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(Ce="onCompositionStart");Ce&&(Tm&&a.locale!=="ko"&&(go||Ce!=="onCompositionStart"?Ce==="onCompositionEnd"&&go&&(Ae=hu()):(hn=J,uo="value"in hn?hn.value:hn.textContent,go=!0)),Se=wu(B,Ce),0<Se.length&&(Ce=new v(Ce,r,null,a,J),Z.push({event:Ce,listeners:Se}),Ae?Ce.data=Ae:(Ae=Rm(a),Ae!==null&&(Ce.data=Ae)))),(Ae=n0?r0(r,a):i0(r,a))&&(B=wu(B,"onBeforeInput"),0<B.length&&(J=new v("onBeforeInput","beforeinput",null,a,J),Z.push({event:J,listeners:B}),J.data=Ae))}Hm(Z,s)})}function Ha(r,s,a){return{instance:r,listener:s,currentTarget:a}}function wu(r,s){for(var a=s+"Capture",h=[];r!==null;){var d=r,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=os(r,a),p!=null&&h.unshift(Ha(r,p,d)),p=os(r,s),p!=null&&h.push(Ha(r,p,d))),r=r.return}return h}function _o(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Km(r,s,a,h,d){for(var p=s._reactName,w=[];a!==null&&a!==h;){var A=a,P=A.alternate,B=A.stateNode;if(P!==null&&P===h)break;A.tag===5&&B!==null&&(A=B,d?(P=os(a,p),P!=null&&w.unshift(Ha(a,P,A))):d||(P=os(a,p),P!=null&&w.push(Ha(a,P,A)))),a=a.return}w.length!==0&&r.push({event:s,listeners:w})}var v0=/\r\n?/g,_0=/\u0000|\uFFFD/g;function Qm(r){return(typeof r=="string"?r:""+r).replace(v0,`
`).replace(_0,"")}function Eu(r,s,a){if(s=Qm(s),Qm(r)!==s&&a)throw Error(t(425))}function Tu(){}var Gh=null,Kh=null;function Qh(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Yh=typeof setTimeout=="function"?setTimeout:void 0,w0=typeof clearTimeout=="function"?clearTimeout:void 0,Ym=typeof Promise=="function"?Promise:void 0,E0=typeof queueMicrotask=="function"?queueMicrotask:typeof Ym<"u"?function(r){return Ym.resolve(null).then(r).catch(T0)}:Yh;function T0(r){setTimeout(function(){throw r})}function Jh(r,s){var a=s,h=0;do{var d=a.nextSibling;if(r.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(h===0){r.removeChild(d),di(s);return}h--}else a!=="$"&&a!=="$?"&&a!=="$!"||h++;a=d}while(a);di(s)}function gi(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Jm(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var wo=Math.random().toString(36).slice(2),cr="__reactFiber$"+wo,Ga="__reactProps$"+wo,Dr="__reactContainer$"+wo,Xh="__reactEvents$"+wo,I0="__reactListeners$"+wo,S0="__reactHandles$"+wo;function _s(r){var s=r[cr];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Dr]||a[cr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=Jm(r);r!==null;){if(a=r[cr])return a;r=Jm(r)}return s}r=a,a=r.parentNode}return null}function Ka(r){return r=r[cr]||r[Dr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function Eo(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function Iu(r){return r[Ga]||null}var Zh=[],To=-1;function yi(r){return{current:r}}function tt(r){0>To||(r.current=Zh[To],Zh[To]=null,To--)}function Xe(r,s){To++,Zh[To]=r.current,r.current=s}var vi={},Bt=yi(vi),en=yi(!1),ws=vi;function Io(r,s){var a=r.type.contextTypes;if(!a)return vi;var h=r.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=s[p];return h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=d),d}function tn(r){return r=r.childContextTypes,r!=null}function Su(){tt(en),tt(Bt)}function Xm(r,s,a){if(Bt.current!==vi)throw Error(t(168));Xe(Bt,s),Xe(en,a)}function Zm(r,s,a){var h=r.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return a;h=h.getChildContext();for(var d in h)if(!(d in s))throw Error(t(108,de(r)||"Unknown",d));return ae({},a,h)}function Au(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||vi,ws=Bt.current,Xe(Bt,r),Xe(en,en.current),!0}function eg(r,s,a){var h=r.stateNode;if(!h)throw Error(t(169));a?(r=Zm(r,s,ws),h.__reactInternalMemoizedMergedChildContext=r,tt(en),tt(Bt),Xe(Bt,r)):tt(en),Xe(en,a)}var Vr=null,Ru=!1,ed=!1;function tg(r){Vr===null?Vr=[r]:Vr.push(r)}function A0(r){Ru=!0,tg(r)}function _i(){if(!ed&&Vr!==null){ed=!0;var r=0,s=Fe;try{var a=Vr;for(Fe=1;r<a.length;r++){var h=a[r];do h=h(!0);while(h!==null)}Vr=null,Ru=!1}catch(d){throw Vr!==null&&(Vr=Vr.slice(r+1)),Sa(no,_i),d}finally{Fe=s,ed=!1}}return null}var So=[],Ao=0,Cu=null,ku=0,Sn=[],An=0,Es=null,Or=1,Mr="";function Ts(r,s){So[Ao++]=ku,So[Ao++]=Cu,Cu=r,ku=s}function ng(r,s,a){Sn[An++]=Or,Sn[An++]=Mr,Sn[An++]=Es,Es=r;var h=Or;r=Mr;var d=32-un(h)-1;h&=~(1<<d),a+=1;var p=32-un(s)+d;if(30<p){var w=d-d%5;p=(h&(1<<w)-1).toString(32),h>>=w,d-=w,Or=1<<32-un(s)+d|a<<d|h,Mr=p+r}else Or=1<<p|a<<d|h,Mr=r}function td(r){r.return!==null&&(Ts(r,1),ng(r,1,0))}function nd(r){for(;r===Cu;)Cu=So[--Ao],So[Ao]=null,ku=So[--Ao],So[Ao]=null;for(;r===Es;)Es=Sn[--An],Sn[An]=null,Mr=Sn[--An],Sn[An]=null,Or=Sn[--An],Sn[An]=null}var pn=null,mn=null,rt=!1,Mn=null;function rg(r,s){var a=Pn(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function ig(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,pn=r,mn=gi(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,pn=r,mn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Es!==null?{id:Or,overflow:Mr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=Pn(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,pn=r,mn=null,!0):!1;default:return!1}}function rd(r){return(r.mode&1)!==0&&(r.flags&128)===0}function id(r){if(rt){var s=mn;if(s){var a=s;if(!ig(r,s)){if(rd(r))throw Error(t(418));s=gi(a.nextSibling);var h=pn;s&&ig(r,s)?rg(h,a):(r.flags=r.flags&-4097|2,rt=!1,pn=r)}}else{if(rd(r))throw Error(t(418));r.flags=r.flags&-4097|2,rt=!1,pn=r}}}function sg(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;pn=r}function Pu(r){if(r!==pn)return!1;if(!rt)return sg(r),rt=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Qh(r.type,r.memoizedProps)),s&&(s=mn)){if(rd(r))throw og(),Error(t(418));for(;s;)rg(r,s),s=gi(s.nextSibling)}if(sg(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){mn=gi(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}mn=null}}else mn=pn?gi(r.stateNode.nextSibling):null;return!0}function og(){for(var r=mn;r;)r=gi(r.nextSibling)}function Ro(){mn=pn=null,rt=!1}function sd(r){Mn===null?Mn=[r]:Mn.push(r)}var R0=le.ReactCurrentBatchConfig;function Qa(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var h=a.stateNode}if(!h)throw Error(t(147,r));var d=h,p=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===p?s.ref:(s=function(w){var A=d.refs;w===null?delete A[p]:A[p]=w},s._stringRef=p,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function xu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function ag(r){var s=r._init;return s(r._payload)}function lg(r){function s(L,N){if(r){var j=L.deletions;j===null?(L.deletions=[N],L.flags|=16):j.push(N)}}function a(L,N){if(!r)return null;for(;N!==null;)s(L,N),N=N.sibling;return null}function h(L,N){for(L=new Map;N!==null;)N.key!==null?L.set(N.key,N):L.set(N.index,N),N=N.sibling;return L}function d(L,N){return L=Ci(L,N),L.index=0,L.sibling=null,L}function p(L,N,j){return L.index=j,r?(j=L.alternate,j!==null?(j=j.index,j<N?(L.flags|=2,N):j):(L.flags|=2,N)):(L.flags|=1048576,N)}function w(L){return r&&L.alternate===null&&(L.flags|=2),L}function A(L,N,j,te){return N===null||N.tag!==6?(N=Yd(j,L.mode,te),N.return=L,N):(N=d(N,j),N.return=L,N)}function P(L,N,j,te){var _e=j.type;return _e===R?J(L,N,j.props.children,te,j.key):N!==null&&(N.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===Qe&&ag(_e)===N.type)?(te=d(N,j.props),te.ref=Qa(L,N,j),te.return=L,te):(te=ec(j.type,j.key,j.props,null,L.mode,te),te.ref=Qa(L,N,j),te.return=L,te)}function B(L,N,j,te){return N===null||N.tag!==4||N.stateNode.containerInfo!==j.containerInfo||N.stateNode.implementation!==j.implementation?(N=Jd(j,L.mode,te),N.return=L,N):(N=d(N,j.children||[]),N.return=L,N)}function J(L,N,j,te,_e){return N===null||N.tag!==7?(N=xs(j,L.mode,te,_e),N.return=L,N):(N=d(N,j),N.return=L,N)}function Z(L,N,j){if(typeof N=="string"&&N!==""||typeof N=="number")return N=Yd(""+N,L.mode,j),N.return=L,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case oe:return j=ec(N.type,N.key,N.props,null,L.mode,j),j.ref=Qa(L,null,N),j.return=L,j;case ce:return N=Jd(N,L.mode,j),N.return=L,N;case Qe:var te=N._init;return Z(L,te(N._payload),j)}if(ct(N)||we(N))return N=xs(N,L.mode,j,null),N.return=L,N;xu(L,N)}return null}function Y(L,N,j,te){var _e=N!==null?N.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return _e!==null?null:A(L,N,""+j,te);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case oe:return j.key===_e?P(L,N,j,te):null;case ce:return j.key===_e?B(L,N,j,te):null;case Qe:return _e=j._init,Y(L,N,_e(j._payload),te)}if(ct(j)||we(j))return _e!==null?null:J(L,N,j,te,null);xu(L,j)}return null}function ue(L,N,j,te,_e){if(typeof te=="string"&&te!==""||typeof te=="number")return L=L.get(j)||null,A(N,L,""+te,_e);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case oe:return L=L.get(te.key===null?j:te.key)||null,P(N,L,te,_e);case ce:return L=L.get(te.key===null?j:te.key)||null,B(N,L,te,_e);case Qe:var Se=te._init;return ue(L,N,j,Se(te._payload),_e)}if(ct(te)||we(te))return L=L.get(j)||null,J(N,L,te,_e,null);xu(N,te)}return null}function pe(L,N,j,te){for(var _e=null,Se=null,Ae=N,Ce=N=0,xt=null;Ae!==null&&Ce<j.length;Ce++){Ae.index>Ce?(xt=Ae,Ae=null):xt=Ae.sibling;var qe=Y(L,Ae,j[Ce],te);if(qe===null){Ae===null&&(Ae=xt);break}r&&Ae&&qe.alternate===null&&s(L,Ae),N=p(qe,N,Ce),Se===null?_e=qe:Se.sibling=qe,Se=qe,Ae=xt}if(Ce===j.length)return a(L,Ae),rt&&Ts(L,Ce),_e;if(Ae===null){for(;Ce<j.length;Ce++)Ae=Z(L,j[Ce],te),Ae!==null&&(N=p(Ae,N,Ce),Se===null?_e=Ae:Se.sibling=Ae,Se=Ae);return rt&&Ts(L,Ce),_e}for(Ae=h(L,Ae);Ce<j.length;Ce++)xt=ue(Ae,L,Ce,j[Ce],te),xt!==null&&(r&&xt.alternate!==null&&Ae.delete(xt.key===null?Ce:xt.key),N=p(xt,N,Ce),Se===null?_e=xt:Se.sibling=xt,Se=xt);return r&&Ae.forEach(function(ki){return s(L,ki)}),rt&&Ts(L,Ce),_e}function ye(L,N,j,te){var _e=we(j);if(typeof _e!="function")throw Error(t(150));if(j=_e.call(j),j==null)throw Error(t(151));for(var Se=_e=null,Ae=N,Ce=N=0,xt=null,qe=j.next();Ae!==null&&!qe.done;Ce++,qe=j.next()){Ae.index>Ce?(xt=Ae,Ae=null):xt=Ae.sibling;var ki=Y(L,Ae,qe.value,te);if(ki===null){Ae===null&&(Ae=xt);break}r&&Ae&&ki.alternate===null&&s(L,Ae),N=p(ki,N,Ce),Se===null?_e=ki:Se.sibling=ki,Se=ki,Ae=xt}if(qe.done)return a(L,Ae),rt&&Ts(L,Ce),_e;if(Ae===null){for(;!qe.done;Ce++,qe=j.next())qe=Z(L,qe.value,te),qe!==null&&(N=p(qe,N,Ce),Se===null?_e=qe:Se.sibling=qe,Se=qe);return rt&&Ts(L,Ce),_e}for(Ae=h(L,Ae);!qe.done;Ce++,qe=j.next())qe=ue(Ae,L,Ce,qe.value,te),qe!==null&&(r&&qe.alternate!==null&&Ae.delete(qe.key===null?Ce:qe.key),N=p(qe,N,Ce),Se===null?_e=qe:Se.sibling=qe,Se=qe);return r&&Ae.forEach(function(sS){return s(L,sS)}),rt&&Ts(L,Ce),_e}function dt(L,N,j,te){if(typeof j=="object"&&j!==null&&j.type===R&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case oe:e:{for(var _e=j.key,Se=N;Se!==null;){if(Se.key===_e){if(_e=j.type,_e===R){if(Se.tag===7){a(L,Se.sibling),N=d(Se,j.props.children),N.return=L,L=N;break e}}else if(Se.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===Qe&&ag(_e)===Se.type){a(L,Se.sibling),N=d(Se,j.props),N.ref=Qa(L,Se,j),N.return=L,L=N;break e}a(L,Se);break}else s(L,Se);Se=Se.sibling}j.type===R?(N=xs(j.props.children,L.mode,te,j.key),N.return=L,L=N):(te=ec(j.type,j.key,j.props,null,L.mode,te),te.ref=Qa(L,N,j),te.return=L,L=te)}return w(L);case ce:e:{for(Se=j.key;N!==null;){if(N.key===Se)if(N.tag===4&&N.stateNode.containerInfo===j.containerInfo&&N.stateNode.implementation===j.implementation){a(L,N.sibling),N=d(N,j.children||[]),N.return=L,L=N;break e}else{a(L,N);break}else s(L,N);N=N.sibling}N=Jd(j,L.mode,te),N.return=L,L=N}return w(L);case Qe:return Se=j._init,dt(L,N,Se(j._payload),te)}if(ct(j))return pe(L,N,j,te);if(we(j))return ye(L,N,j,te);xu(L,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,N!==null&&N.tag===6?(a(L,N.sibling),N=d(N,j),N.return=L,L=N):(a(L,N),N=Yd(j,L.mode,te),N.return=L,L=N),w(L)):a(L,N)}return dt}var Co=lg(!0),ug=lg(!1),bu=yi(null),Nu=null,ko=null,od=null;function ad(){od=ko=Nu=null}function ld(r){var s=bu.current;tt(bu),r._currentValue=s}function ud(r,s,a){for(;r!==null;){var h=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),r===a)break;r=r.return}}function Po(r,s){Nu=r,od=ko=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(nn=!0),r.firstContext=null)}function Rn(r){var s=r._currentValue;if(od!==r)if(r={context:r,memoizedValue:s,next:null},ko===null){if(Nu===null)throw Error(t(308));ko=r,Nu.dependencies={lanes:0,firstContext:r}}else ko=ko.next=r;return s}var Is=null;function cd(r){Is===null?Is=[r]:Is.push(r)}function cg(r,s,a,h){var d=s.interleaved;return d===null?(a.next=a,cd(s)):(a.next=d.next,d.next=a),s.interleaved=a,Lr(r,h)}function Lr(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var wi=!1;function hd(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hg(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Fr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function Ei(r,s,a){var h=r.updateQueue;if(h===null)return null;if(h=h.shared,($e&2)!==0){var d=h.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),h.pending=s,Lr(r,a)}return d=h.interleaved,d===null?(s.next=s,cd(h)):(s.next=d.next,d.next=s),h.interleaved=s,Lr(r,a)}function Du(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var h=s.lanes;h&=r.pendingLanes,a|=h,s.lanes=a,xa(r,a)}}function dg(r,s){var a=r.updateQueue,h=r.alternate;if(h!==null&&(h=h.updateQueue,a===h)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=w:p=p.next=w,a=a.next}while(a!==null);p===null?d=p=s:p=p.next=s}else d=p=s;a={baseState:h.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:h.shared,effects:h.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function Vu(r,s,a,h){var d=r.updateQueue;wi=!1;var p=d.firstBaseUpdate,w=d.lastBaseUpdate,A=d.shared.pending;if(A!==null){d.shared.pending=null;var P=A,B=P.next;P.next=null,w===null?p=B:w.next=B,w=P;var J=r.alternate;J!==null&&(J=J.updateQueue,A=J.lastBaseUpdate,A!==w&&(A===null?J.firstBaseUpdate=B:A.next=B,J.lastBaseUpdate=P))}if(p!==null){var Z=d.baseState;w=0,J=B=P=null,A=p;do{var Y=A.lane,ue=A.eventTime;if((h&Y)===Y){J!==null&&(J=J.next={eventTime:ue,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var pe=r,ye=A;switch(Y=s,ue=a,ye.tag){case 1:if(pe=ye.payload,typeof pe=="function"){Z=pe.call(ue,Z,Y);break e}Z=pe;break e;case 3:pe.flags=pe.flags&-65537|128;case 0:if(pe=ye.payload,Y=typeof pe=="function"?pe.call(ue,Z,Y):pe,Y==null)break e;Z=ae({},Z,Y);break e;case 2:wi=!0}}A.callback!==null&&A.lane!==0&&(r.flags|=64,Y=d.effects,Y===null?d.effects=[A]:Y.push(A))}else ue={eventTime:ue,lane:Y,tag:A.tag,payload:A.payload,callback:A.callback,next:null},J===null?(B=J=ue,P=Z):J=J.next=ue,w|=Y;if(A=A.next,A===null){if(A=d.shared.pending,A===null)break;Y=A,A=Y.next,Y.next=null,d.lastBaseUpdate=Y,d.shared.pending=null}}while(!0);if(J===null&&(P=Z),d.baseState=P,d.firstBaseUpdate=B,d.lastBaseUpdate=J,s=d.shared.interleaved,s!==null){d=s;do w|=d.lane,d=d.next;while(d!==s)}else p===null&&(d.shared.lanes=0);Rs|=w,r.lanes=w,r.memoizedState=Z}}function fg(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var h=r[s],d=h.callback;if(d!==null){if(h.callback=null,h=a,typeof d!="function")throw Error(t(191,d));d.call(h)}}}var Ya={},hr=yi(Ya),Ja=yi(Ya),Xa=yi(Ya);function Ss(r){if(r===Ya)throw Error(t(174));return r}function dd(r,s){switch(Xe(Xa,s),Xe(Ja,r),Xe(hr,Ya),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Ys(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=Ys(s,r)}tt(hr),Xe(hr,s)}function xo(){tt(hr),tt(Ja),tt(Xa)}function pg(r){Ss(Xa.current);var s=Ss(hr.current),a=Ys(s,r.type);s!==a&&(Xe(Ja,r),Xe(hr,a))}function fd(r){Ja.current===r&&(tt(hr),tt(Ja))}var it=yi(0);function Ou(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var pd=[];function md(){for(var r=0;r<pd.length;r++)pd[r]._workInProgressVersionPrimary=null;pd.length=0}var Mu=le.ReactCurrentDispatcher,gd=le.ReactCurrentBatchConfig,As=0,st=null,St=null,kt=null,Lu=!1,Za=!1,el=0,C0=0;function $t(){throw Error(t(321))}function yd(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!On(r[a],s[a]))return!1;return!0}function vd(r,s,a,h,d,p){if(As=p,st=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Mu.current=r===null||r.memoizedState===null?b0:N0,r=a(h,d),Za){p=0;do{if(Za=!1,el=0,25<=p)throw Error(t(301));p+=1,kt=St=null,s.updateQueue=null,Mu.current=D0,r=a(h,d)}while(Za)}if(Mu.current=ju,s=St!==null&&St.next!==null,As=0,kt=St=st=null,Lu=!1,s)throw Error(t(300));return r}function _d(){var r=el!==0;return el=0,r}function dr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?st.memoizedState=kt=r:kt=kt.next=r,kt}function Cn(){if(St===null){var r=st.alternate;r=r!==null?r.memoizedState:null}else r=St.next;var s=kt===null?st.memoizedState:kt.next;if(s!==null)kt=s,St=r;else{if(r===null)throw Error(t(310));St=r,r={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},kt===null?st.memoizedState=kt=r:kt=kt.next=r}return kt}function tl(r,s){return typeof s=="function"?s(r):s}function wd(r){var s=Cn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var h=St,d=h.baseQueue,p=a.pending;if(p!==null){if(d!==null){var w=d.next;d.next=p.next,p.next=w}h.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,h=h.baseState;var A=w=null,P=null,B=p;do{var J=B.lane;if((As&J)===J)P!==null&&(P=P.next={lane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),h=B.hasEagerState?B.eagerState:r(h,B.action);else{var Z={lane:J,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null};P===null?(A=P=Z,w=h):P=P.next=Z,st.lanes|=J,Rs|=J}B=B.next}while(B!==null&&B!==p);P===null?w=h:P.next=A,On(h,s.memoizedState)||(nn=!0),s.memoizedState=h,s.baseState=w,s.baseQueue=P,a.lastRenderedState=h}if(r=a.interleaved,r!==null){d=r;do p=d.lane,st.lanes|=p,Rs|=p,d=d.next;while(d!==r)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Ed(r){var s=Cn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var h=a.dispatch,d=a.pending,p=s.memoizedState;if(d!==null){a.pending=null;var w=d=d.next;do p=r(p,w.action),w=w.next;while(w!==d);On(p,s.memoizedState)||(nn=!0),s.memoizedState=p,s.baseQueue===null&&(s.baseState=p),a.lastRenderedState=p}return[p,h]}function mg(){}function gg(r,s){var a=st,h=Cn(),d=s(),p=!On(h.memoizedState,d);if(p&&(h.memoizedState=d,nn=!0),h=h.queue,Td(_g.bind(null,a,h,r),[r]),h.getSnapshot!==s||p||kt!==null&&kt.memoizedState.tag&1){if(a.flags|=2048,nl(9,vg.bind(null,a,h,d,s),void 0,null),Pt===null)throw Error(t(349));(As&30)!==0||yg(a,s,d)}return d}function yg(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=st.updateQueue,s===null?(s={lastEffect:null,stores:null},st.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function vg(r,s,a,h){s.value=a,s.getSnapshot=h,wg(s)&&Eg(r)}function _g(r,s,a){return a(function(){wg(s)&&Eg(r)})}function wg(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!On(r,a)}catch{return!0}}function Eg(r){var s=Lr(r,1);s!==null&&jn(s,r,1,-1)}function Tg(r){var s=dr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:tl,lastRenderedState:r},s.queue=r,r=r.dispatch=x0.bind(null,st,r),[s.memoizedState,r]}function nl(r,s,a,h){return r={tag:r,create:s,destroy:a,deps:h,next:null},s=st.updateQueue,s===null?(s={lastEffect:null,stores:null},st.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(h=a.next,a.next=r,r.next=h,s.lastEffect=r)),r}function Ig(){return Cn().memoizedState}function Fu(r,s,a,h){var d=dr();st.flags|=r,d.memoizedState=nl(1|s,a,void 0,h===void 0?null:h)}function Uu(r,s,a,h){var d=Cn();h=h===void 0?null:h;var p=void 0;if(St!==null){var w=St.memoizedState;if(p=w.destroy,h!==null&&yd(h,w.deps)){d.memoizedState=nl(s,a,p,h);return}}st.flags|=r,d.memoizedState=nl(1|s,a,p,h)}function Sg(r,s){return Fu(8390656,8,r,s)}function Td(r,s){return Uu(2048,8,r,s)}function Ag(r,s){return Uu(4,2,r,s)}function Rg(r,s){return Uu(4,4,r,s)}function Cg(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function kg(r,s,a){return a=a!=null?a.concat([r]):null,Uu(4,4,Cg.bind(null,s,r),a)}function Id(){}function Pg(r,s){var a=Cn();s=s===void 0?null:s;var h=a.memoizedState;return h!==null&&s!==null&&yd(s,h[1])?h[0]:(a.memoizedState=[r,s],r)}function xg(r,s){var a=Cn();s=s===void 0?null:s;var h=a.memoizedState;return h!==null&&s!==null&&yd(s,h[1])?h[0]:(r=r(),a.memoizedState=[r,s],r)}function bg(r,s,a){return(As&21)===0?(r.baseState&&(r.baseState=!1,nn=!0),r.memoizedState=a):(On(a,s)||(a=ka(),st.lanes|=a,Rs|=a,r.baseState=!0),s)}function k0(r,s){var a=Fe;Fe=a!==0&&4>a?a:4,r(!0);var h=gd.transition;gd.transition={};try{r(!1),s()}finally{Fe=a,gd.transition=h}}function Ng(){return Cn().memoizedState}function P0(r,s,a){var h=Ai(r);if(a={lane:h,action:a,hasEagerState:!1,eagerState:null,next:null},Dg(r))Vg(s,a);else if(a=cg(r,s,a,h),a!==null){var d=Yt();jn(a,r,h,d),Og(a,s,h)}}function x0(r,s,a){var h=Ai(r),d={lane:h,action:a,hasEagerState:!1,eagerState:null,next:null};if(Dg(r))Vg(s,d);else{var p=r.alternate;if(r.lanes===0&&(p===null||p.lanes===0)&&(p=s.lastRenderedReducer,p!==null))try{var w=s.lastRenderedState,A=p(w,a);if(d.hasEagerState=!0,d.eagerState=A,On(A,w)){var P=s.interleaved;P===null?(d.next=d,cd(s)):(d.next=P.next,P.next=d),s.interleaved=d;return}}catch{}finally{}a=cg(r,s,d,h),a!==null&&(d=Yt(),jn(a,r,h,d),Og(a,s,h))}}function Dg(r){var s=r.alternate;return r===st||s!==null&&s===st}function Vg(r,s){Za=Lu=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function Og(r,s,a){if((a&4194240)!==0){var h=s.lanes;h&=r.pendingLanes,a|=h,s.lanes=a,xa(r,a)}}var ju={readContext:Rn,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},b0={readContext:Rn,useCallback:function(r,s){return dr().memoizedState=[r,s===void 0?null:s],r},useContext:Rn,useEffect:Sg,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,Fu(4194308,4,Cg.bind(null,s,r),a)},useLayoutEffect:function(r,s){return Fu(4194308,4,r,s)},useInsertionEffect:function(r,s){return Fu(4,2,r,s)},useMemo:function(r,s){var a=dr();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var h=dr();return s=a!==void 0?a(s):s,h.memoizedState=h.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},h.queue=r,r=r.dispatch=P0.bind(null,st,r),[h.memoizedState,r]},useRef:function(r){var s=dr();return r={current:r},s.memoizedState=r},useState:Tg,useDebugValue:Id,useDeferredValue:function(r){return dr().memoizedState=r},useTransition:function(){var r=Tg(!1),s=r[0];return r=k0.bind(null,r[1]),dr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var h=st,d=dr();if(rt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),Pt===null)throw Error(t(349));(As&30)!==0||yg(h,s,a)}d.memoizedState=a;var p={value:a,getSnapshot:s};return d.queue=p,Sg(_g.bind(null,h,p,r),[r]),h.flags|=2048,nl(9,vg.bind(null,h,p,a,s),void 0,null),a},useId:function(){var r=dr(),s=Pt.identifierPrefix;if(rt){var a=Mr,h=Or;a=(h&~(1<<32-un(h)-1)).toString(32)+a,s=":"+s+"R"+a,a=el++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=C0++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},N0={readContext:Rn,useCallback:Pg,useContext:Rn,useEffect:Td,useImperativeHandle:kg,useInsertionEffect:Ag,useLayoutEffect:Rg,useMemo:xg,useReducer:wd,useRef:Ig,useState:function(){return wd(tl)},useDebugValue:Id,useDeferredValue:function(r){var s=Cn();return bg(s,St.memoizedState,r)},useTransition:function(){var r=wd(tl)[0],s=Cn().memoizedState;return[r,s]},useMutableSource:mg,useSyncExternalStore:gg,useId:Ng,unstable_isNewReconciler:!1},D0={readContext:Rn,useCallback:Pg,useContext:Rn,useEffect:Td,useImperativeHandle:kg,useInsertionEffect:Ag,useLayoutEffect:Rg,useMemo:xg,useReducer:Ed,useRef:Ig,useState:function(){return Ed(tl)},useDebugValue:Id,useDeferredValue:function(r){var s=Cn();return St===null?s.memoizedState=r:bg(s,St.memoizedState,r)},useTransition:function(){var r=Ed(tl)[0],s=Cn().memoizedState;return[r,s]},useMutableSource:mg,useSyncExternalStore:gg,useId:Ng,unstable_isNewReconciler:!1};function Ln(r,s){if(r&&r.defaultProps){s=ae({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function Sd(r,s,a,h){s=r.memoizedState,a=a(h,s),a=a==null?s:ae({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var zu={isMounted:function(r){return(r=r._reactInternals)?Dn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var h=Yt(),d=Ai(r),p=Fr(h,d);p.payload=s,a!=null&&(p.callback=a),s=Ei(r,p,d),s!==null&&(jn(s,r,d,h),Du(s,r,d))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var h=Yt(),d=Ai(r),p=Fr(h,d);p.tag=1,p.payload=s,a!=null&&(p.callback=a),s=Ei(r,p,d),s!==null&&(jn(s,r,d,h),Du(s,r,d))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Yt(),h=Ai(r),d=Fr(a,h);d.tag=2,s!=null&&(d.callback=s),s=Ei(r,d,h),s!==null&&(jn(s,r,h,a),Du(s,r,h))}};function Mg(r,s,a,h,d,p,w){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(h,p,w):s.prototype&&s.prototype.isPureReactComponent?!Ba(a,h)||!Ba(d,p):!0}function Lg(r,s,a){var h=!1,d=vi,p=s.contextType;return typeof p=="object"&&p!==null?p=Rn(p):(d=tn(s)?ws:Bt.current,h=s.contextTypes,p=(h=h!=null)?Io(r,d):vi),s=new s(a,p),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=zu,r.stateNode=s,s._reactInternals=r,h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=d,r.__reactInternalMemoizedMaskedChildContext=p),s}function Fg(r,s,a,h){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,h),s.state!==r&&zu.enqueueReplaceState(s,s.state,null)}function Ad(r,s,a,h){var d=r.stateNode;d.props=a,d.state=r.memoizedState,d.refs={},hd(r);var p=s.contextType;typeof p=="object"&&p!==null?d.context=Rn(p):(p=tn(s)?ws:Bt.current,d.context=Io(r,p)),d.state=r.memoizedState,p=s.getDerivedStateFromProps,typeof p=="function"&&(Sd(r,s,p,a),d.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&zu.enqueueReplaceState(d,d.state,null),Vu(r,a,d,h),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308)}function bo(r,s){try{var a="",h=s;do a+=xe(h),h=h.return;while(h);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:r,source:s,stack:d,digest:null}}function Rd(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function Cd(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var V0=typeof WeakMap=="function"?WeakMap:Map;function Ug(r,s,a){a=Fr(-1,a),a.tag=3,a.payload={element:null};var h=s.value;return a.callback=function(){Ku||(Ku=!0,Bd=h),Cd(r,s)},a}function jg(r,s,a){a=Fr(-1,a),a.tag=3;var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var d=s.value;a.payload=function(){return h(d)},a.callback=function(){Cd(r,s)}}var p=r.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){Cd(r,s),typeof h!="function"&&(Ii===null?Ii=new Set([this]):Ii.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),a}function zg(r,s,a){var h=r.pingCache;if(h===null){h=r.pingCache=new V0;var d=new Set;h.set(s,d)}else d=h.get(s),d===void 0&&(d=new Set,h.set(s,d));d.has(a)||(d.add(a),r=K0.bind(null,r,s,a),s.then(r,r))}function Bg(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function $g(r,s,a,h,d){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Fr(-1,1),s.tag=2,Ei(a,s,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=d,r)}var O0=le.ReactCurrentOwner,nn=!1;function Qt(r,s,a,h){s.child=r===null?ug(s,null,a,h):Co(s,r.child,a,h)}function Wg(r,s,a,h,d){a=a.render;var p=s.ref;return Po(s,d),h=vd(r,s,a,h,p,d),a=_d(),r!==null&&!nn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,Ur(r,s,d)):(rt&&a&&td(s),s.flags|=1,Qt(r,s,h,d),s.child)}function qg(r,s,a,h,d){if(r===null){var p=a.type;return typeof p=="function"&&!Qd(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=p,Hg(r,s,p,h,d)):(r=ec(a.type,null,h,s,s.mode,d),r.ref=s.ref,r.return=s,s.child=r)}if(p=r.child,(r.lanes&d)===0){var w=p.memoizedProps;if(a=a.compare,a=a!==null?a:Ba,a(w,h)&&r.ref===s.ref)return Ur(r,s,d)}return s.flags|=1,r=Ci(p,h),r.ref=s.ref,r.return=s,s.child=r}function Hg(r,s,a,h,d){if(r!==null){var p=r.memoizedProps;if(Ba(p,h)&&r.ref===s.ref)if(nn=!1,s.pendingProps=h=p,(r.lanes&d)!==0)(r.flags&131072)!==0&&(nn=!0);else return s.lanes=r.lanes,Ur(r,s,d)}return kd(r,s,a,h,d)}function Gg(r,s,a){var h=s.pendingProps,d=h.children,p=r!==null?r.memoizedState:null;if(h.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xe(Do,gn),gn|=a;else{if((a&1073741824)===0)return r=p!==null?p.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,Xe(Do,gn),gn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=p!==null?p.baseLanes:a,Xe(Do,gn),gn|=h}else p!==null?(h=p.baseLanes|a,s.memoizedState=null):h=a,Xe(Do,gn),gn|=h;return Qt(r,s,d,a),s.child}function Kg(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function kd(r,s,a,h,d){var p=tn(a)?ws:Bt.current;return p=Io(s,p),Po(s,d),a=vd(r,s,a,h,p,d),h=_d(),r!==null&&!nn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,Ur(r,s,d)):(rt&&h&&td(s),s.flags|=1,Qt(r,s,a,d),s.child)}function Qg(r,s,a,h,d){if(tn(a)){var p=!0;Au(s)}else p=!1;if(Po(s,d),s.stateNode===null)$u(r,s),Lg(s,a,h),Ad(s,a,h,d),h=!0;else if(r===null){var w=s.stateNode,A=s.memoizedProps;w.props=A;var P=w.context,B=a.contextType;typeof B=="object"&&B!==null?B=Rn(B):(B=tn(a)?ws:Bt.current,B=Io(s,B));var J=a.getDerivedStateFromProps,Z=typeof J=="function"||typeof w.getSnapshotBeforeUpdate=="function";Z||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(A!==h||P!==B)&&Fg(s,w,h,B),wi=!1;var Y=s.memoizedState;w.state=Y,Vu(s,h,w,d),P=s.memoizedState,A!==h||Y!==P||en.current||wi?(typeof J=="function"&&(Sd(s,a,J,h),P=s.memoizedState),(A=wi||Mg(s,a,A,h,Y,P,B))?(Z||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=P),w.props=h,w.state=P,w.context=B,h=A):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{w=s.stateNode,hg(r,s),A=s.memoizedProps,B=s.type===s.elementType?A:Ln(s.type,A),w.props=B,Z=s.pendingProps,Y=w.context,P=a.contextType,typeof P=="object"&&P!==null?P=Rn(P):(P=tn(a)?ws:Bt.current,P=Io(s,P));var ue=a.getDerivedStateFromProps;(J=typeof ue=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(A!==Z||Y!==P)&&Fg(s,w,h,P),wi=!1,Y=s.memoizedState,w.state=Y,Vu(s,h,w,d);var pe=s.memoizedState;A!==Z||Y!==pe||en.current||wi?(typeof ue=="function"&&(Sd(s,a,ue,h),pe=s.memoizedState),(B=wi||Mg(s,a,B,h,Y,pe,P)||!1)?(J||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(h,pe,P),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(h,pe,P)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=pe),w.props=h,w.state=pe,w.context=P,h=B):(typeof w.componentDidUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=1024),h=!1)}return Pd(r,s,a,h,p,d)}function Pd(r,s,a,h,d,p){Kg(r,s);var w=(s.flags&128)!==0;if(!h&&!w)return d&&eg(s,a,!1),Ur(r,s,p);h=s.stateNode,O0.current=s;var A=w&&typeof a.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,r!==null&&w?(s.child=Co(s,r.child,null,p),s.child=Co(s,null,A,p)):Qt(r,s,A,p),s.memoizedState=h.state,d&&eg(s,a,!0),s.child}function Yg(r){var s=r.stateNode;s.pendingContext?Xm(r,s.pendingContext,s.pendingContext!==s.context):s.context&&Xm(r,s.context,!1),dd(r,s.containerInfo)}function Jg(r,s,a,h,d){return Ro(),sd(d),s.flags|=256,Qt(r,s,a,h),s.child}var xd={dehydrated:null,treeContext:null,retryLane:0};function bd(r){return{baseLanes:r,cachePool:null,transitions:null}}function Xg(r,s,a){var h=s.pendingProps,d=it.current,p=!1,w=(s.flags&128)!==0,A;if((A=w)||(A=r!==null&&r.memoizedState===null?!1:(d&2)!==0),A?(p=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(d|=1),Xe(it,d&1),r===null)return id(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(w=h.children,r=h.fallback,p?(h=s.mode,p=s.child,w={mode:"hidden",children:w},(h&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=w):p=tc(w,h,0,null),r=xs(r,h,a,null),p.return=s,r.return=s,p.sibling=r,s.child=p,s.child.memoizedState=bd(a),s.memoizedState=xd,r):Nd(s,w));if(d=r.memoizedState,d!==null&&(A=d.dehydrated,A!==null))return M0(r,s,w,h,A,d,a);if(p){p=h.fallback,w=s.mode,d=r.child,A=d.sibling;var P={mode:"hidden",children:h.children};return(w&1)===0&&s.child!==d?(h=s.child,h.childLanes=0,h.pendingProps=P,s.deletions=null):(h=Ci(d,P),h.subtreeFlags=d.subtreeFlags&14680064),A!==null?p=Ci(A,p):(p=xs(p,w,a,null),p.flags|=2),p.return=s,h.return=s,h.sibling=p,s.child=h,h=p,p=s.child,w=r.child.memoizedState,w=w===null?bd(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},p.memoizedState=w,p.childLanes=r.childLanes&~a,s.memoizedState=xd,h}return p=r.child,r=p.sibling,h=Ci(p,{mode:"visible",children:h.children}),(s.mode&1)===0&&(h.lanes=a),h.return=s,h.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=h,s.memoizedState=null,h}function Nd(r,s){return s=tc({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Bu(r,s,a,h){return h!==null&&sd(h),Co(s,r.child,null,a),r=Nd(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function M0(r,s,a,h,d,p,w){if(a)return s.flags&256?(s.flags&=-257,h=Rd(Error(t(422))),Bu(r,s,w,h)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(p=h.fallback,d=s.mode,h=tc({mode:"visible",children:h.children},d,0,null),p=xs(p,d,w,null),p.flags|=2,h.return=s,p.return=s,h.sibling=p,s.child=h,(s.mode&1)!==0&&Co(s,r.child,null,w),s.child.memoizedState=bd(w),s.memoizedState=xd,p);if((s.mode&1)===0)return Bu(r,s,w,null);if(d.data==="$!"){if(h=d.nextSibling&&d.nextSibling.dataset,h)var A=h.dgst;return h=A,p=Error(t(419)),h=Rd(p,h,void 0),Bu(r,s,w,h)}if(A=(w&r.childLanes)!==0,nn||A){if(h=Pt,h!==null){switch(w&-w){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(h.suspendedLanes|w))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Lr(r,d),jn(h,r,d,-1))}return Kd(),h=Rd(Error(t(421))),Bu(r,s,w,h)}return d.data==="$?"?(s.flags|=128,s.child=r.child,s=Q0.bind(null,r),d._reactRetry=s,null):(r=p.treeContext,mn=gi(d.nextSibling),pn=s,rt=!0,Mn=null,r!==null&&(Sn[An++]=Or,Sn[An++]=Mr,Sn[An++]=Es,Or=r.id,Mr=r.overflow,Es=s),s=Nd(s,h.children),s.flags|=4096,s)}function Zg(r,s,a){r.lanes|=s;var h=r.alternate;h!==null&&(h.lanes|=s),ud(r.return,s,a)}function Dd(r,s,a,h,d){var p=r.memoizedState;p===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:a,tailMode:d}:(p.isBackwards=s,p.rendering=null,p.renderingStartTime=0,p.last=h,p.tail=a,p.tailMode=d)}function ey(r,s,a){var h=s.pendingProps,d=h.revealOrder,p=h.tail;if(Qt(r,s,h.children,a),h=it.current,(h&2)!==0)h=h&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Zg(r,a,s);else if(r.tag===19)Zg(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}h&=1}if(Xe(it,h),(s.mode&1)===0)s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)r=a.alternate,r!==null&&Ou(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),Dd(s,!1,d,a,p);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(r=d.alternate,r!==null&&Ou(r)===null){s.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}Dd(s,!0,a,null,p);break;case"together":Dd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function $u(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Ur(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),Rs|=s.lanes,(a&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=Ci(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=Ci(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function L0(r,s,a){switch(s.tag){case 3:Yg(s),Ro();break;case 5:pg(s);break;case 1:tn(s.type)&&Au(s);break;case 4:dd(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,d=s.memoizedProps.value;Xe(bu,h._currentValue),h._currentValue=d;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?(Xe(it,it.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?Xg(r,s,a):(Xe(it,it.current&1),r=Ur(r,s,a),r!==null?r.sibling:null);Xe(it,it.current&1);break;case 19:if(h=(a&s.childLanes)!==0,(r.flags&128)!==0){if(h)return ey(r,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Xe(it,it.current),h)break;return null;case 22:case 23:return s.lanes=0,Gg(r,s,a)}return Ur(r,s,a)}var ty,Vd,ny,ry;ty=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Vd=function(){},ny=function(r,s,a,h){var d=r.memoizedProps;if(d!==h){r=s.stateNode,Ss(hr.current);var p=null;switch(a){case"input":d=Ks(r,d),h=Ks(r,h),p=[];break;case"select":d=ae({},d,{value:void 0}),h=ae({},h,{value:void 0}),p=[];break;case"textarea":d=ya(r,d),h=ya(r,h),p=[];break;default:typeof d.onClick!="function"&&typeof h.onClick=="function"&&(r.onclick=Tu)}Nn(a,h);var w;a=null;for(B in d)if(!h.hasOwnProperty(B)&&d.hasOwnProperty(B)&&d[B]!=null)if(B==="style"){var A=d[B];for(w in A)A.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else B!=="dangerouslySetInnerHTML"&&B!=="children"&&B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&B!=="autoFocus"&&(o.hasOwnProperty(B)?p||(p=[]):(p=p||[]).push(B,null));for(B in h){var P=h[B];if(A=d!=null?d[B]:void 0,h.hasOwnProperty(B)&&P!==A&&(P!=null||A!=null))if(B==="style")if(A){for(w in A)!A.hasOwnProperty(w)||P&&P.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in P)P.hasOwnProperty(w)&&A[w]!==P[w]&&(a||(a={}),a[w]=P[w])}else a||(p||(p=[]),p.push(B,a)),a=P;else B==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,A=A?A.__html:void 0,P!=null&&A!==P&&(p=p||[]).push(B,P)):B==="children"?typeof P!="string"&&typeof P!="number"||(p=p||[]).push(B,""+P):B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&(o.hasOwnProperty(B)?(P!=null&&B==="onScroll"&&et("scroll",r),p||A===P||(p=[])):(p=p||[]).push(B,P))}a&&(p=p||[]).push("style",a);var B=p;(s.updateQueue=B)&&(s.flags|=4)}},ry=function(r,s,a,h){a!==h&&(s.flags|=4)};function rl(r,s){if(!rt)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var h=null;a!==null;)a.alternate!==null&&(h=a),a=a.sibling;h===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:h.sibling=null}}function Wt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,h=0;if(s)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,h|=d.subtreeFlags&14680064,h|=d.flags&14680064,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,h|=d.subtreeFlags,h|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=h,r.childLanes=a,s}function F0(r,s,a){var h=s.pendingProps;switch(nd(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(s),null;case 1:return tn(s.type)&&Su(),Wt(s),null;case 3:return h=s.stateNode,xo(),tt(en),tt(Bt),md(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(r===null||r.child===null)&&(Pu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Mn!==null&&(qd(Mn),Mn=null))),Vd(r,s),Wt(s),null;case 5:fd(s);var d=Ss(Xa.current);if(a=s.type,r!==null&&s.stateNode!=null)ny(r,s,a,h,d),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(t(166));return Wt(s),null}if(r=Ss(hr.current),Pu(s)){h=s.stateNode,a=s.type;var p=s.memoizedProps;switch(h[cr]=s,h[Ga]=p,r=(s.mode&1)!==0,a){case"dialog":et("cancel",h),et("close",h);break;case"iframe":case"object":case"embed":et("load",h);break;case"video":case"audio":for(d=0;d<Wa.length;d++)et(Wa[d],h);break;case"source":et("error",h);break;case"img":case"image":case"link":et("error",h),et("load",h);break;case"details":et("toggle",h);break;case"input":Gl(h,p),et("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!p.multiple},et("invalid",h);break;case"textarea":va(h,p),et("invalid",h)}Nn(a,p),d=null;for(var w in p)if(p.hasOwnProperty(w)){var A=p[w];w==="children"?typeof A=="string"?h.textContent!==A&&(p.suppressHydrationWarning!==!0&&Eu(h.textContent,A,r),d=["children",A]):typeof A=="number"&&h.textContent!==""+A&&(p.suppressHydrationWarning!==!0&&Eu(h.textContent,A,r),d=["children",""+A]):o.hasOwnProperty(w)&&A!=null&&w==="onScroll"&&et("scroll",h)}switch(a){case"input":Kn(h),ga(h,p,!0);break;case"textarea":Kn(h),ei(h);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(h.onclick=Tu)}h=d,s.updateQueue=h,h!==null&&(s.flags|=4)}else{w=d.nodeType===9?d:d.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=_a(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=w.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof h.is=="string"?r=w.createElement(a,{is:h.is}):(r=w.createElement(a),a==="select"&&(w=r,h.multiple?w.multiple=!0:h.size&&(w.size=h.size))):r=w.createElementNS(r,a),r[cr]=s,r[Ga]=h,ty(r,s,!1,!1),s.stateNode=r;e:{switch(w=Xs(a,h),a){case"dialog":et("cancel",r),et("close",r),d=h;break;case"iframe":case"object":case"embed":et("load",r),d=h;break;case"video":case"audio":for(d=0;d<Wa.length;d++)et(Wa[d],r);d=h;break;case"source":et("error",r),d=h;break;case"img":case"image":case"link":et("error",r),et("load",r),d=h;break;case"details":et("toggle",r),d=h;break;case"input":Gl(r,h),d=Ks(r,h),et("invalid",r);break;case"option":d=h;break;case"select":r._wrapperState={wasMultiple:!!h.multiple},d=ae({},h,{value:void 0}),et("invalid",r);break;case"textarea":va(r,h),d=ya(r,h),et("invalid",r);break;default:d=h}Nn(a,d),A=d;for(p in A)if(A.hasOwnProperty(p)){var P=A[p];p==="style"?Js(r,P):p==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&Ql(r,P)):p==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&ss(r,P):typeof P=="number"&&ss(r,""+P):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?P!=null&&p==="onScroll"&&et("scroll",r):P!=null&&se(r,p,P,w))}switch(a){case"input":Kn(r),ga(r,h,!1);break;case"textarea":Kn(r),ei(r);break;case"option":h.value!=null&&r.setAttribute("value",""+Ne(h.value));break;case"select":r.multiple=!!h.multiple,p=h.value,p!=null?bn(r,!!h.multiple,p,!1):h.defaultValue!=null&&bn(r,!!h.multiple,h.defaultValue,!0);break;default:typeof d.onClick=="function"&&(r.onclick=Tu)}switch(a){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Wt(s),null;case 6:if(r&&s.stateNode!=null)ry(r,s,r.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(t(166));if(a=Ss(Xa.current),Ss(hr.current),Pu(s)){if(h=s.stateNode,a=s.memoizedProps,h[cr]=s,(p=h.nodeValue!==a)&&(r=pn,r!==null))switch(r.tag){case 3:Eu(h.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Eu(h.nodeValue,a,(r.mode&1)!==0)}p&&(s.flags|=4)}else h=(a.nodeType===9?a:a.ownerDocument).createTextNode(h),h[cr]=s,s.stateNode=h}return Wt(s),null;case 13:if(tt(it),h=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(rt&&mn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)og(),Ro(),s.flags|=98560,p=!1;else if(p=Pu(s),h!==null&&h.dehydrated!==null){if(r===null){if(!p)throw Error(t(318));if(p=s.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[cr]=s}else Ro(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Wt(s),p=!1}else Mn!==null&&(qd(Mn),Mn=null),p=!0;if(!p)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(h=h!==null,h!==(r!==null&&r.memoizedState!==null)&&h&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(it.current&1)!==0?At===0&&(At=3):Kd())),s.updateQueue!==null&&(s.flags|=4),Wt(s),null);case 4:return xo(),Vd(r,s),r===null&&qa(s.stateNode.containerInfo),Wt(s),null;case 10:return ld(s.type._context),Wt(s),null;case 17:return tn(s.type)&&Su(),Wt(s),null;case 19:if(tt(it),p=s.memoizedState,p===null)return Wt(s),null;if(h=(s.flags&128)!==0,w=p.rendering,w===null)if(h)rl(p,!1);else{if(At!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(w=Ou(r),w!==null){for(s.flags|=128,rl(p,!1),h=w.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=a,a=s.child;a!==null;)p=a,r=h,p.flags&=14680066,w=p.alternate,w===null?(p.childLanes=0,p.lanes=r,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=w.childLanes,p.lanes=w.lanes,p.child=w.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=w.memoizedProps,p.memoizedState=w.memoizedState,p.updateQueue=w.updateQueue,p.type=w.type,r=w.dependencies,p.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return Xe(it,it.current&1|2),s.child}r=r.sibling}p.tail!==null&&Ze()>Vo&&(s.flags|=128,h=!0,rl(p,!1),s.lanes=4194304)}else{if(!h)if(r=Ou(w),r!==null){if(s.flags|=128,h=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),rl(p,!0),p.tail===null&&p.tailMode==="hidden"&&!w.alternate&&!rt)return Wt(s),null}else 2*Ze()-p.renderingStartTime>Vo&&a!==1073741824&&(s.flags|=128,h=!0,rl(p,!1),s.lanes=4194304);p.isBackwards?(w.sibling=s.child,s.child=w):(a=p.last,a!==null?a.sibling=w:s.child=w,p.last=w)}return p.tail!==null?(s=p.tail,p.rendering=s,p.tail=s.sibling,p.renderingStartTime=Ze(),s.sibling=null,a=it.current,Xe(it,h?a&1|2:a&1),s):(Wt(s),null);case 22:case 23:return Gd(),h=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==h&&(s.flags|=8192),h&&(s.mode&1)!==0?(gn&1073741824)!==0&&(Wt(s),s.subtreeFlags&6&&(s.flags|=8192)):Wt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function U0(r,s){switch(nd(s),s.tag){case 1:return tn(s.type)&&Su(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return xo(),tt(en),tt(Bt),md(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return fd(s),null;case 13:if(tt(it),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Ro()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return tt(it),null;case 4:return xo(),null;case 10:return ld(s.type._context),null;case 22:case 23:return Gd(),null;case 24:return null;default:return null}}var Wu=!1,qt=!1,j0=typeof WeakSet=="function"?WeakSet:Set,fe=null;function No(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(h){ut(r,s,h)}else a.current=null}function Od(r,s,a){try{a()}catch(h){ut(r,s,h)}}var iy=!1;function z0(r,s){if(Gh=xr,r=Mm(),Uh(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var h=a.getSelection&&a.getSelection();if(h&&h.rangeCount!==0){a=h.anchorNode;var d=h.anchorOffset,p=h.focusNode;h=h.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var w=0,A=-1,P=-1,B=0,J=0,Z=r,Y=null;t:for(;;){for(var ue;Z!==a||d!==0&&Z.nodeType!==3||(A=w+d),Z!==p||h!==0&&Z.nodeType!==3||(P=w+h),Z.nodeType===3&&(w+=Z.nodeValue.length),(ue=Z.firstChild)!==null;)Y=Z,Z=ue;for(;;){if(Z===r)break t;if(Y===a&&++B===d&&(A=w),Y===p&&++J===h&&(P=w),(ue=Z.nextSibling)!==null)break;Z=Y,Y=Z.parentNode}Z=ue}a=A===-1||P===-1?null:{start:A,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Kh={focusedElem:r,selectionRange:a},xr=!1,fe=s;fe!==null;)if(s=fe,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,fe=r;else for(;fe!==null;){s=fe;try{var pe=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(pe!==null){var ye=pe.memoizedProps,dt=pe.memoizedState,L=s.stateNode,N=L.getSnapshotBeforeUpdate(s.elementType===s.type?ye:Ln(s.type,ye),dt);L.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var j=s.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(te){ut(s,s.return,te)}if(r=s.sibling,r!==null){r.return=s.return,fe=r;break}fe=s.return}return pe=iy,iy=!1,pe}function il(r,s,a){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var d=h=h.next;do{if((d.tag&r)===r){var p=d.destroy;d.destroy=void 0,p!==void 0&&Od(s,a,p)}d=d.next}while(d!==h)}}function qu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var h=a.create;a.destroy=h()}a=a.next}while(a!==s)}}function Md(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function sy(r){var s=r.alternate;s!==null&&(r.alternate=null,sy(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[cr],delete s[Ga],delete s[Xh],delete s[I0],delete s[S0])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function oy(r){return r.tag===5||r.tag===3||r.tag===4}function ay(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||oy(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Ld(r,s,a){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Tu));else if(h!==4&&(r=r.child,r!==null))for(Ld(r,s,a),r=r.sibling;r!==null;)Ld(r,s,a),r=r.sibling}function Fd(r,s,a){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(h!==4&&(r=r.child,r!==null))for(Fd(r,s,a),r=r.sibling;r!==null;)Fd(r,s,a),r=r.sibling}var Ot=null,Fn=!1;function Ti(r,s,a){for(a=a.child;a!==null;)ly(r,s,a),a=a.sibling}function ly(r,s,a){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(cs,a)}catch{}switch(a.tag){case 5:qt||No(a,s);case 6:var h=Ot,d=Fn;Ot=null,Ti(r,s,a),Ot=h,Fn=d,Ot!==null&&(Fn?(r=Ot,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Ot.removeChild(a.stateNode));break;case 18:Ot!==null&&(Fn?(r=Ot,a=a.stateNode,r.nodeType===8?Jh(r.parentNode,a):r.nodeType===1&&Jh(r,a),di(r)):Jh(Ot,a.stateNode));break;case 4:h=Ot,d=Fn,Ot=a.stateNode.containerInfo,Fn=!0,Ti(r,s,a),Ot=h,Fn=d;break;case 0:case 11:case 14:case 15:if(!qt&&(h=a.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){d=h=h.next;do{var p=d,w=p.destroy;p=p.tag,w!==void 0&&((p&2)!==0||(p&4)!==0)&&Od(a,s,w),d=d.next}while(d!==h)}Ti(r,s,a);break;case 1:if(!qt&&(No(a,s),h=a.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=a.memoizedProps,h.state=a.memoizedState,h.componentWillUnmount()}catch(A){ut(a,s,A)}Ti(r,s,a);break;case 21:Ti(r,s,a);break;case 22:a.mode&1?(qt=(h=qt)||a.memoizedState!==null,Ti(r,s,a),qt=h):Ti(r,s,a);break;default:Ti(r,s,a)}}function uy(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new j0),s.forEach(function(h){var d=Y0.bind(null,r,h);a.has(h)||(a.add(h),h.then(d,d))})}}function Un(r,s){var a=s.deletions;if(a!==null)for(var h=0;h<a.length;h++){var d=a[h];try{var p=r,w=s,A=w;e:for(;A!==null;){switch(A.tag){case 5:Ot=A.stateNode,Fn=!1;break e;case 3:Ot=A.stateNode.containerInfo,Fn=!0;break e;case 4:Ot=A.stateNode.containerInfo,Fn=!0;break e}A=A.return}if(Ot===null)throw Error(t(160));ly(p,w,d),Ot=null,Fn=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(B){ut(d,s,B)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)cy(s,r),s=s.sibling}function cy(r,s){var a=r.alternate,h=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Un(s,r),fr(r),h&4){try{il(3,r,r.return),qu(3,r)}catch(ye){ut(r,r.return,ye)}try{il(5,r,r.return)}catch(ye){ut(r,r.return,ye)}}break;case 1:Un(s,r),fr(r),h&512&&a!==null&&No(a,a.return);break;case 5:if(Un(s,r),fr(r),h&512&&a!==null&&No(a,a.return),r.flags&32){var d=r.stateNode;try{ss(d,"")}catch(ye){ut(r,r.return,ye)}}if(h&4&&(d=r.stateNode,d!=null)){var p=r.memoizedProps,w=a!==null?a.memoizedProps:p,A=r.type,P=r.updateQueue;if(r.updateQueue=null,P!==null)try{A==="input"&&p.type==="radio"&&p.name!=null&&Qs(d,p),Xs(A,w);var B=Xs(A,p);for(w=0;w<P.length;w+=2){var J=P[w],Z=P[w+1];J==="style"?Js(d,Z):J==="dangerouslySetInnerHTML"?Ql(d,Z):J==="children"?ss(d,Z):se(d,J,Z,B)}switch(A){case"input":is(d,p);break;case"textarea":Kl(d,p);break;case"select":var Y=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var ue=p.value;ue!=null?bn(d,!!p.multiple,ue,!1):Y!==!!p.multiple&&(p.defaultValue!=null?bn(d,!!p.multiple,p.defaultValue,!0):bn(d,!!p.multiple,p.multiple?[]:"",!1))}d[Ga]=p}catch(ye){ut(r,r.return,ye)}}break;case 6:if(Un(s,r),fr(r),h&4){if(r.stateNode===null)throw Error(t(162));d=r.stateNode,p=r.memoizedProps;try{d.nodeValue=p}catch(ye){ut(r,r.return,ye)}}break;case 3:if(Un(s,r),fr(r),h&4&&a!==null&&a.memoizedState.isDehydrated)try{di(s.containerInfo)}catch(ye){ut(r,r.return,ye)}break;case 4:Un(s,r),fr(r);break;case 13:Un(s,r),fr(r),d=r.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(zd=Ze())),h&4&&uy(r);break;case 22:if(J=a!==null&&a.memoizedState!==null,r.mode&1?(qt=(B=qt)||J,Un(s,r),qt=B):Un(s,r),fr(r),h&8192){if(B=r.memoizedState!==null,(r.stateNode.isHidden=B)&&!J&&(r.mode&1)!==0)for(fe=r,J=r.child;J!==null;){for(Z=fe=J;fe!==null;){switch(Y=fe,ue=Y.child,Y.tag){case 0:case 11:case 14:case 15:il(4,Y,Y.return);break;case 1:No(Y,Y.return);var pe=Y.stateNode;if(typeof pe.componentWillUnmount=="function"){h=Y,a=Y.return;try{s=h,pe.props=s.memoizedProps,pe.state=s.memoizedState,pe.componentWillUnmount()}catch(ye){ut(h,a,ye)}}break;case 5:No(Y,Y.return);break;case 22:if(Y.memoizedState!==null){fy(Z);continue}}ue!==null?(ue.return=Y,fe=ue):fy(Z)}J=J.sibling}e:for(J=null,Z=r;;){if(Z.tag===5){if(J===null){J=Z;try{d=Z.stateNode,B?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(A=Z.stateNode,P=Z.memoizedProps.style,w=P!=null&&P.hasOwnProperty("display")?P.display:null,A.style.display=ri("display",w))}catch(ye){ut(r,r.return,ye)}}}else if(Z.tag===6){if(J===null)try{Z.stateNode.nodeValue=B?"":Z.memoizedProps}catch(ye){ut(r,r.return,ye)}}else if((Z.tag!==22&&Z.tag!==23||Z.memoizedState===null||Z===r)&&Z.child!==null){Z.child.return=Z,Z=Z.child;continue}if(Z===r)break e;for(;Z.sibling===null;){if(Z.return===null||Z.return===r)break e;J===Z&&(J=null),Z=Z.return}J===Z&&(J=null),Z.sibling.return=Z.return,Z=Z.sibling}}break;case 19:Un(s,r),fr(r),h&4&&uy(r);break;case 21:break;default:Un(s,r),fr(r)}}function fr(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(oy(a)){var h=a;break e}a=a.return}throw Error(t(160))}switch(h.tag){case 5:var d=h.stateNode;h.flags&32&&(ss(d,""),h.flags&=-33);var p=ay(r);Fd(r,p,d);break;case 3:case 4:var w=h.stateNode.containerInfo,A=ay(r);Ld(r,A,w);break;default:throw Error(t(161))}}catch(P){ut(r,r.return,P)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function B0(r,s,a){fe=r,hy(r)}function hy(r,s,a){for(var h=(r.mode&1)!==0;fe!==null;){var d=fe,p=d.child;if(d.tag===22&&h){var w=d.memoizedState!==null||Wu;if(!w){var A=d.alternate,P=A!==null&&A.memoizedState!==null||qt;A=Wu;var B=qt;if(Wu=w,(qt=P)&&!B)for(fe=d;fe!==null;)w=fe,P=w.child,w.tag===22&&w.memoizedState!==null?py(d):P!==null?(P.return=w,fe=P):py(d);for(;p!==null;)fe=p,hy(p),p=p.sibling;fe=d,Wu=A,qt=B}dy(r)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,fe=p):dy(r)}}function dy(r){for(;fe!==null;){var s=fe;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:qt||qu(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!qt)if(a===null)h.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:Ln(s.type,a.memoizedProps);h.componentDidUpdate(d,a.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var p=s.updateQueue;p!==null&&fg(s,p,h);break;case 3:var w=s.updateQueue;if(w!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}fg(s,w,a)}break;case 5:var A=s.stateNode;if(a===null&&s.flags&4){a=A;var P=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var B=s.alternate;if(B!==null){var J=B.memoizedState;if(J!==null){var Z=J.dehydrated;Z!==null&&di(Z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}qt||s.flags&512&&Md(s)}catch(Y){ut(s,s.return,Y)}}if(s===r){fe=null;break}if(a=s.sibling,a!==null){a.return=s.return,fe=a;break}fe=s.return}}function fy(r){for(;fe!==null;){var s=fe;if(s===r){fe=null;break}var a=s.sibling;if(a!==null){a.return=s.return,fe=a;break}fe=s.return}}function py(r){for(;fe!==null;){var s=fe;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{qu(4,s)}catch(P){ut(s,a,P)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var d=s.return;try{h.componentDidMount()}catch(P){ut(s,d,P)}}var p=s.return;try{Md(s)}catch(P){ut(s,p,P)}break;case 5:var w=s.return;try{Md(s)}catch(P){ut(s,w,P)}}}catch(P){ut(s,s.return,P)}if(s===r){fe=null;break}var A=s.sibling;if(A!==null){A.return=s.return,fe=A;break}fe=s.return}}var $0=Math.ceil,Hu=le.ReactCurrentDispatcher,Ud=le.ReactCurrentOwner,kn=le.ReactCurrentBatchConfig,$e=0,Pt=null,_t=null,Mt=0,gn=0,Do=yi(0),At=0,sl=null,Rs=0,Gu=0,jd=0,ol=null,rn=null,zd=0,Vo=1/0,jr=null,Ku=!1,Bd=null,Ii=null,Qu=!1,Si=null,Yu=0,al=0,$d=null,Ju=-1,Xu=0;function Yt(){return($e&6)!==0?Ze():Ju!==-1?Ju:Ju=Ze()}function Ai(r){return(r.mode&1)===0?1:($e&2)!==0&&Mt!==0?Mt&-Mt:R0.transition!==null?(Xu===0&&(Xu=ka()),Xu):(r=Fe,r!==0||(r=window.event,r=r===void 0?16:lo(r.type)),r)}function jn(r,s,a,h){if(50<al)throw al=0,$d=null,Error(t(185));ps(r,a,h),(($e&2)===0||r!==Pt)&&(r===Pt&&(($e&2)===0&&(Gu|=a),At===4&&Ri(r,Mt)),sn(r,h),a===1&&$e===0&&(s.mode&1)===0&&(Vo=Ze()+500,Ru&&_i()))}function sn(r,s){var a=r.callbackNode;fs(r,s);var h=Cr(r,r===Pt?Mt:0);if(h===0)a!==null&&to(a),r.callbackNode=null,r.callbackPriority=0;else if(s=h&-h,r.callbackPriority!==s){if(a!=null&&to(a),s===1)r.tag===0?A0(gy.bind(null,r)):tg(gy.bind(null,r)),E0(function(){($e&6)===0&&_i()}),a=null;else{switch(er(h)){case 1:a=no;break;case 4:a=Aa;break;case 16:a=us;break;case 536870912:a=ro;break;default:a=us}a=Sy(a,my.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function my(r,s){if(Ju=-1,Xu=0,($e&6)!==0)throw Error(t(327));var a=r.callbackNode;if(Oo()&&r.callbackNode!==a)return null;var h=Cr(r,r===Pt?Mt:0);if(h===0)return null;if((h&30)!==0||(h&r.expiredLanes)!==0||s)s=Zu(r,h);else{s=h;var d=$e;$e|=2;var p=vy();(Pt!==r||Mt!==s)&&(jr=null,Vo=Ze()+500,ks(r,s));do try{H0();break}catch(A){yy(r,A)}while(!0);ad(),Hu.current=p,$e=d,_t!==null?s=0:(Pt=null,Mt=0,s=At)}if(s!==0){if(s===2&&(d=Ca(r),d!==0&&(h=d,s=Wd(r,d))),s===1)throw a=sl,ks(r,0),Ri(r,h),sn(r,Ze()),a;if(s===6)Ri(r,h);else{if(d=r.current.alternate,(h&30)===0&&!W0(d)&&(s=Zu(r,h),s===2&&(p=Ca(r),p!==0&&(h=p,s=Wd(r,p))),s===1))throw a=sl,ks(r,0),Ri(r,h),sn(r,Ze()),a;switch(r.finishedWork=d,r.finishedLanes=h,s){case 0:case 1:throw Error(t(345));case 2:Ps(r,rn,jr);break;case 3:if(Ri(r,h),(h&130023424)===h&&(s=zd+500-Ze(),10<s)){if(Cr(r,0)!==0)break;if(d=r.suspendedLanes,(d&h)!==h){Yt(),r.pingedLanes|=r.suspendedLanes&d;break}r.timeoutHandle=Yh(Ps.bind(null,r,rn,jr),s);break}Ps(r,rn,jr);break;case 4:if(Ri(r,h),(h&4194240)===h)break;for(s=r.eventTimes,d=-1;0<h;){var w=31-un(h);p=1<<w,w=s[w],w>d&&(d=w),h&=~p}if(h=d,h=Ze()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*$0(h/1960))-h,10<h){r.timeoutHandle=Yh(Ps.bind(null,r,rn,jr),h);break}Ps(r,rn,jr);break;case 5:Ps(r,rn,jr);break;default:throw Error(t(329))}}}return sn(r,Ze()),r.callbackNode===a?my.bind(null,r):null}function Wd(r,s){var a=ol;return r.current.memoizedState.isDehydrated&&(ks(r,s).flags|=256),r=Zu(r,s),r!==2&&(s=rn,rn=a,s!==null&&qd(s)),r}function qd(r){rn===null?rn=r:rn.push.apply(rn,r)}function W0(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var h=0;h<a.length;h++){var d=a[h],p=d.getSnapshot;d=d.value;try{if(!On(p(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ri(r,s){for(s&=~jd,s&=~Gu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-un(s),h=1<<a;r[a]=-1,s&=~h}}function gy(r){if(($e&6)!==0)throw Error(t(327));Oo();var s=Cr(r,0);if((s&1)===0)return sn(r,Ze()),null;var a=Zu(r,s);if(r.tag!==0&&a===2){var h=Ca(r);h!==0&&(s=h,a=Wd(r,h))}if(a===1)throw a=sl,ks(r,0),Ri(r,s),sn(r,Ze()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,Ps(r,rn,jr),sn(r,Ze()),null}function Hd(r,s){var a=$e;$e|=1;try{return r(s)}finally{$e=a,$e===0&&(Vo=Ze()+500,Ru&&_i())}}function Cs(r){Si!==null&&Si.tag===0&&($e&6)===0&&Oo();var s=$e;$e|=1;var a=kn.transition,h=Fe;try{if(kn.transition=null,Fe=1,r)return r()}finally{Fe=h,kn.transition=a,$e=s,($e&6)===0&&_i()}}function Gd(){gn=Do.current,tt(Do)}function ks(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,w0(a)),_t!==null)for(a=_t.return;a!==null;){var h=a;switch(nd(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Su();break;case 3:xo(),tt(en),tt(Bt),md();break;case 5:fd(h);break;case 4:xo();break;case 13:tt(it);break;case 19:tt(it);break;case 10:ld(h.type._context);break;case 22:case 23:Gd()}a=a.return}if(Pt=r,_t=r=Ci(r.current,null),Mt=gn=s,At=0,sl=null,jd=Gu=Rs=0,rn=ol=null,Is!==null){for(s=0;s<Is.length;s++)if(a=Is[s],h=a.interleaved,h!==null){a.interleaved=null;var d=h.next,p=a.pending;if(p!==null){var w=p.next;p.next=d,h.next=w}a.pending=h}Is=null}return r}function yy(r,s){do{var a=_t;try{if(ad(),Mu.current=ju,Lu){for(var h=st.memoizedState;h!==null;){var d=h.queue;d!==null&&(d.pending=null),h=h.next}Lu=!1}if(As=0,kt=St=st=null,Za=!1,el=0,Ud.current=null,a===null||a.return===null){At=1,sl=s,_t=null;break}e:{var p=r,w=a.return,A=a,P=s;if(s=Mt,A.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var B=P,J=A,Z=J.tag;if((J.mode&1)===0&&(Z===0||Z===11||Z===15)){var Y=J.alternate;Y?(J.updateQueue=Y.updateQueue,J.memoizedState=Y.memoizedState,J.lanes=Y.lanes):(J.updateQueue=null,J.memoizedState=null)}var ue=Bg(w);if(ue!==null){ue.flags&=-257,$g(ue,w,A,p,s),ue.mode&1&&zg(p,B,s),s=ue,P=B;var pe=s.updateQueue;if(pe===null){var ye=new Set;ye.add(P),s.updateQueue=ye}else pe.add(P);break e}else{if((s&1)===0){zg(p,B,s),Kd();break e}P=Error(t(426))}}else if(rt&&A.mode&1){var dt=Bg(w);if(dt!==null){(dt.flags&65536)===0&&(dt.flags|=256),$g(dt,w,A,p,s),sd(bo(P,A));break e}}p=P=bo(P,A),At!==4&&(At=2),ol===null?ol=[p]:ol.push(p),p=w;do{switch(p.tag){case 3:p.flags|=65536,s&=-s,p.lanes|=s;var L=Ug(p,P,s);dg(p,L);break e;case 1:A=P;var N=p.type,j=p.stateNode;if((p.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(Ii===null||!Ii.has(j)))){p.flags|=65536,s&=-s,p.lanes|=s;var te=jg(p,A,s);dg(p,te);break e}}p=p.return}while(p!==null)}wy(a)}catch(_e){s=_e,_t===a&&a!==null&&(_t=a=a.return);continue}break}while(!0)}function vy(){var r=Hu.current;return Hu.current=ju,r===null?ju:r}function Kd(){(At===0||At===3||At===2)&&(At=4),Pt===null||(Rs&268435455)===0&&(Gu&268435455)===0||Ri(Pt,Mt)}function Zu(r,s){var a=$e;$e|=2;var h=vy();(Pt!==r||Mt!==s)&&(jr=null,ks(r,s));do try{q0();break}catch(d){yy(r,d)}while(!0);if(ad(),$e=a,Hu.current=h,_t!==null)throw Error(t(261));return Pt=null,Mt=0,At}function q0(){for(;_t!==null;)_y(_t)}function H0(){for(;_t!==null&&!ls();)_y(_t)}function _y(r){var s=Iy(r.alternate,r,gn);r.memoizedProps=r.pendingProps,s===null?wy(r):_t=s,Ud.current=null}function wy(r){var s=r;do{var a=s.alternate;if(r=s.return,(s.flags&32768)===0){if(a=F0(a,s,gn),a!==null){_t=a;return}}else{if(a=U0(a,s),a!==null){a.flags&=32767,_t=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{At=6,_t=null;return}}if(s=s.sibling,s!==null){_t=s;return}_t=s=r}while(s!==null);At===0&&(At=5)}function Ps(r,s,a){var h=Fe,d=kn.transition;try{kn.transition=null,Fe=1,G0(r,s,a,h)}finally{kn.transition=d,Fe=h}return null}function G0(r,s,a,h){do Oo();while(Si!==null);if(($e&6)!==0)throw Error(t(327));a=r.finishedWork;var d=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var p=a.lanes|a.childLanes;if(Vh(r,p),r===Pt&&(_t=Pt=null,Mt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Qu||(Qu=!0,Sy(us,function(){return Oo(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=kn.transition,kn.transition=null;var w=Fe;Fe=1;var A=$e;$e|=4,Ud.current=null,z0(r,a),cy(a,r),f0(Kh),xr=!!Gh,Kh=Gh=null,r.current=a,B0(a),Rr(),$e=A,Fe=w,kn.transition=p}else r.current=a;if(Qu&&(Qu=!1,Si=r,Yu=d),p=r.pendingLanes,p===0&&(Ii=null),ou(a.stateNode),sn(r,Ze()),s!==null)for(h=r.onRecoverableError,a=0;a<s.length;a++)d=s[a],h(d.value,{componentStack:d.stack,digest:d.digest});if(Ku)throw Ku=!1,r=Bd,Bd=null,r;return(Yu&1)!==0&&r.tag!==0&&Oo(),p=r.pendingLanes,(p&1)!==0?r===$d?al++:(al=0,$d=r):al=0,_i(),null}function Oo(){if(Si!==null){var r=er(Yu),s=kn.transition,a=Fe;try{if(kn.transition=null,Fe=16>r?16:r,Si===null)var h=!1;else{if(r=Si,Si=null,Yu=0,($e&6)!==0)throw Error(t(331));var d=$e;for($e|=4,fe=r.current;fe!==null;){var p=fe,w=p.child;if((fe.flags&16)!==0){var A=p.deletions;if(A!==null){for(var P=0;P<A.length;P++){var B=A[P];for(fe=B;fe!==null;){var J=fe;switch(J.tag){case 0:case 11:case 15:il(8,J,p)}var Z=J.child;if(Z!==null)Z.return=J,fe=Z;else for(;fe!==null;){J=fe;var Y=J.sibling,ue=J.return;if(sy(J),J===B){fe=null;break}if(Y!==null){Y.return=ue,fe=Y;break}fe=ue}}}var pe=p.alternate;if(pe!==null){var ye=pe.child;if(ye!==null){pe.child=null;do{var dt=ye.sibling;ye.sibling=null,ye=dt}while(ye!==null)}}fe=p}}if((p.subtreeFlags&2064)!==0&&w!==null)w.return=p,fe=w;else e:for(;fe!==null;){if(p=fe,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:il(9,p,p.return)}var L=p.sibling;if(L!==null){L.return=p.return,fe=L;break e}fe=p.return}}var N=r.current;for(fe=N;fe!==null;){w=fe;var j=w.child;if((w.subtreeFlags&2064)!==0&&j!==null)j.return=w,fe=j;else e:for(w=N;fe!==null;){if(A=fe,(A.flags&2048)!==0)try{switch(A.tag){case 0:case 11:case 15:qu(9,A)}}catch(_e){ut(A,A.return,_e)}if(A===w){fe=null;break e}var te=A.sibling;if(te!==null){te.return=A.return,fe=te;break e}fe=A.return}}if($e=d,_i(),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(cs,r)}catch{}h=!0}return h}finally{Fe=a,kn.transition=s}}return!1}function Ey(r,s,a){s=bo(a,s),s=Ug(r,s,1),r=Ei(r,s,1),s=Yt(),r!==null&&(ps(r,1,s),sn(r,s))}function ut(r,s,a){if(r.tag===3)Ey(r,r,a);else for(;s!==null;){if(s.tag===3){Ey(s,r,a);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Ii===null||!Ii.has(h))){r=bo(a,r),r=jg(s,r,1),s=Ei(s,r,1),r=Yt(),s!==null&&(ps(s,1,r),sn(s,r));break}}s=s.return}}function K0(r,s,a){var h=r.pingCache;h!==null&&h.delete(s),s=Yt(),r.pingedLanes|=r.suspendedLanes&a,Pt===r&&(Mt&a)===a&&(At===4||At===3&&(Mt&130023424)===Mt&&500>Ze()-zd?ks(r,0):jd|=a),sn(r,s)}function Ty(r,s){s===0&&((r.mode&1)===0?s=1:(s=ui,ui<<=1,(ui&130023424)===0&&(ui=4194304)));var a=Yt();r=Lr(r,s),r!==null&&(ps(r,s,a),sn(r,a))}function Q0(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),Ty(r,a)}function Y0(r,s){var a=0;switch(r.tag){case 13:var h=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:h=r.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(s),Ty(r,a)}var Iy;Iy=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||en.current)nn=!0;else{if((r.lanes&a)===0&&(s.flags&128)===0)return nn=!1,L0(r,s,a);nn=(r.flags&131072)!==0}else nn=!1,rt&&(s.flags&1048576)!==0&&ng(s,ku,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;$u(r,s),r=s.pendingProps;var d=Io(s,Bt.current);Po(s,a),d=vd(null,s,h,r,d,a);var p=_d();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,tn(h)?(p=!0,Au(s)):p=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,hd(s),d.updater=zu,s.stateNode=d,d._reactInternals=s,Ad(s,h,r,a),s=Pd(null,s,h,!0,p,a)):(s.tag=0,rt&&p&&td(s),Qt(null,s,d,a),s=s.child),s;case 16:h=s.elementType;e:{switch($u(r,s),r=s.pendingProps,d=h._init,h=d(h._payload),s.type=h,d=s.tag=X0(h),r=Ln(h,r),d){case 0:s=kd(null,s,h,r,a);break e;case 1:s=Qg(null,s,h,r,a);break e;case 11:s=Wg(null,s,h,r,a);break e;case 14:s=qg(null,s,h,Ln(h.type,r),a);break e}throw Error(t(306,h,""))}return s;case 0:return h=s.type,d=s.pendingProps,d=s.elementType===h?d:Ln(h,d),kd(r,s,h,d,a);case 1:return h=s.type,d=s.pendingProps,d=s.elementType===h?d:Ln(h,d),Qg(r,s,h,d,a);case 3:e:{if(Yg(s),r===null)throw Error(t(387));h=s.pendingProps,p=s.memoizedState,d=p.element,hg(r,s),Vu(s,h,null,a);var w=s.memoizedState;if(h=w.element,p.isDehydrated)if(p={element:h,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=p,s.memoizedState=p,s.flags&256){d=bo(Error(t(423)),s),s=Jg(r,s,h,a,d);break e}else if(h!==d){d=bo(Error(t(424)),s),s=Jg(r,s,h,a,d);break e}else for(mn=gi(s.stateNode.containerInfo.firstChild),pn=s,rt=!0,Mn=null,a=ug(s,null,h,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ro(),h===d){s=Ur(r,s,a);break e}Qt(r,s,h,a)}s=s.child}return s;case 5:return pg(s),r===null&&id(s),h=s.type,d=s.pendingProps,p=r!==null?r.memoizedProps:null,w=d.children,Qh(h,d)?w=null:p!==null&&Qh(h,p)&&(s.flags|=32),Kg(r,s),Qt(r,s,w,a),s.child;case 6:return r===null&&id(s),null;case 13:return Xg(r,s,a);case 4:return dd(s,s.stateNode.containerInfo),h=s.pendingProps,r===null?s.child=Co(s,null,h,a):Qt(r,s,h,a),s.child;case 11:return h=s.type,d=s.pendingProps,d=s.elementType===h?d:Ln(h,d),Wg(r,s,h,d,a);case 7:return Qt(r,s,s.pendingProps,a),s.child;case 8:return Qt(r,s,s.pendingProps.children,a),s.child;case 12:return Qt(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(h=s.type._context,d=s.pendingProps,p=s.memoizedProps,w=d.value,Xe(bu,h._currentValue),h._currentValue=w,p!==null)if(On(p.value,w)){if(p.children===d.children&&!en.current){s=Ur(r,s,a);break e}}else for(p=s.child,p!==null&&(p.return=s);p!==null;){var A=p.dependencies;if(A!==null){w=p.child;for(var P=A.firstContext;P!==null;){if(P.context===h){if(p.tag===1){P=Fr(-1,a&-a),P.tag=2;var B=p.updateQueue;if(B!==null){B=B.shared;var J=B.pending;J===null?P.next=P:(P.next=J.next,J.next=P),B.pending=P}}p.lanes|=a,P=p.alternate,P!==null&&(P.lanes|=a),ud(p.return,a,s),A.lanes|=a;break}P=P.next}}else if(p.tag===10)w=p.type===s.type?null:p.child;else if(p.tag===18){if(w=p.return,w===null)throw Error(t(341));w.lanes|=a,A=w.alternate,A!==null&&(A.lanes|=a),ud(w,a,s),w=p.sibling}else w=p.child;if(w!==null)w.return=p;else for(w=p;w!==null;){if(w===s){w=null;break}if(p=w.sibling,p!==null){p.return=w.return,w=p;break}w=w.return}p=w}Qt(r,s,d.children,a),s=s.child}return s;case 9:return d=s.type,h=s.pendingProps.children,Po(s,a),d=Rn(d),h=h(d),s.flags|=1,Qt(r,s,h,a),s.child;case 14:return h=s.type,d=Ln(h,s.pendingProps),d=Ln(h.type,d),qg(r,s,h,d,a);case 15:return Hg(r,s,s.type,s.pendingProps,a);case 17:return h=s.type,d=s.pendingProps,d=s.elementType===h?d:Ln(h,d),$u(r,s),s.tag=1,tn(h)?(r=!0,Au(s)):r=!1,Po(s,a),Lg(s,h,d),Ad(s,h,d,a),Pd(null,s,h,!0,r,a);case 19:return ey(r,s,a);case 22:return Gg(r,s,a)}throw Error(t(156,s.tag))};function Sy(r,s){return Sa(r,s)}function J0(r,s,a,h){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(r,s,a,h){return new J0(r,s,a,h)}function Qd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function X0(r){if(typeof r=="function")return Qd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===D)return 11;if(r===Ge)return 14}return 2}function Ci(r,s){var a=r.alternate;return a===null?(a=Pn(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function ec(r,s,a,h,d,p){var w=2;if(h=r,typeof r=="function")Qd(r)&&(w=1);else if(typeof r=="string")w=5;else e:switch(r){case R:return xs(a.children,d,p,s);case S:w=8,d|=8;break;case k:return r=Pn(12,a,s,d|2),r.elementType=k,r.lanes=p,r;case C:return r=Pn(13,a,s,d),r.elementType=C,r.lanes=p,r;case Be:return r=Pn(19,a,s,d),r.elementType=Be,r.lanes=p,r;case Ue:return tc(a,d,p,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case b:w=10;break e;case x:w=9;break e;case D:w=11;break e;case Ge:w=14;break e;case Qe:w=16,h=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=Pn(w,a,s,d),s.elementType=r,s.type=h,s.lanes=p,s}function xs(r,s,a,h){return r=Pn(7,r,h,s),r.lanes=a,r}function tc(r,s,a,h){return r=Pn(22,r,h,s),r.elementType=Ue,r.lanes=a,r.stateNode={isHidden:!1},r}function Yd(r,s,a){return r=Pn(6,r,null,s),r.lanes=a,r}function Jd(r,s,a){return s=Pn(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function Z0(r,s,a,h,d){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pa(0),this.expirationTimes=Pa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pa(0),this.identifierPrefix=h,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Xd(r,s,a,h,d,p,w,A,P){return r=new Z0(r,s,a,A,P),s===1?(s=1,p===!0&&(s|=8)):s=0,p=Pn(3,null,null,s),r.current=p,p.stateNode=r,p.memoizedState={element:h,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},hd(p),r}function eS(r,s,a){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ce,key:h==null?null:""+h,children:r,containerInfo:s,implementation:a}}function Ay(r){if(!r)return vi;r=r._reactInternals;e:{if(Dn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(tn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(tn(a))return Zm(r,a,s)}return s}function Ry(r,s,a,h,d,p,w,A,P){return r=Xd(a,h,!0,r,d,p,w,A,P),r.context=Ay(null),a=r.current,h=Yt(),d=Ai(a),p=Fr(h,d),p.callback=s??null,Ei(a,p,d),r.current.lanes=d,ps(r,d,h),sn(r,h),r}function nc(r,s,a,h){var d=s.current,p=Yt(),w=Ai(d);return a=Ay(a),s.context===null?s.context=a:s.pendingContext=a,s=Fr(p,w),s.payload={element:r},h=h===void 0?null:h,h!==null&&(s.callback=h),r=Ei(d,s,w),r!==null&&(jn(r,d,w,p),Du(r,d,w)),w}function rc(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Cy(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function Zd(r,s){Cy(r,s),(r=r.alternate)&&Cy(r,s)}function tS(){return null}var ky=typeof reportError=="function"?reportError:function(r){console.error(r)};function ef(r){this._internalRoot=r}ic.prototype.render=ef.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));nc(r,s,null,null)},ic.prototype.unmount=ef.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;Cs(function(){nc(null,r,null,null)}),s[Dr]=null}};function ic(r){this._internalRoot=r}ic.prototype.unstable_scheduleHydration=function(r){if(r){var s=Da();r={blockedOn:null,target:r,priority:s};for(var a=0;a<cn.length&&s!==0&&s<cn[a].priority;a++);cn.splice(a,0,r),a===0&&oo(r)}};function tf(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function sc(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Py(){}function nS(r,s,a,h,d){if(d){if(typeof h=="function"){var p=h;h=function(){var B=rc(w);p.call(B)}}var w=Ry(s,h,r,0,null,!1,!1,"",Py);return r._reactRootContainer=w,r[Dr]=w.current,qa(r.nodeType===8?r.parentNode:r),Cs(),w}for(;d=r.lastChild;)r.removeChild(d);if(typeof h=="function"){var A=h;h=function(){var B=rc(P);A.call(B)}}var P=Xd(r,0,!1,null,null,!1,!1,"",Py);return r._reactRootContainer=P,r[Dr]=P.current,qa(r.nodeType===8?r.parentNode:r),Cs(function(){nc(s,P,a,h)}),P}function oc(r,s,a,h,d){var p=a._reactRootContainer;if(p){var w=p;if(typeof d=="function"){var A=d;d=function(){var P=rc(w);A.call(P)}}nc(s,w,r,d)}else w=nS(a,s,r,d,h);return rc(w)}ba=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=He(s.pendingLanes);a!==0&&(xa(s,a|1),sn(s,Ze()),($e&6)===0&&(Vo=Ze()+500,_i()))}break;case 13:Cs(function(){var h=Lr(r,1);if(h!==null){var d=Yt();jn(h,r,1,d)}}),Zd(r,1)}},io=function(r){if(r.tag===13){var s=Lr(r,134217728);if(s!==null){var a=Yt();jn(s,r,134217728,a)}Zd(r,134217728)}},Na=function(r){if(r.tag===13){var s=Ai(r),a=Lr(r,s);if(a!==null){var h=Yt();jn(a,r,s,h)}Zd(r,s)}},Da=function(){return Fe},Va=function(r,s){var a=Fe;try{return Fe=r,s()}finally{Fe=a}},Ir=function(r,s,a){switch(s){case"input":if(is(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var h=a[s];if(h!==r&&h.form===r.form){var d=Iu(h);if(!d)throw Error(t(90));Qn(h),is(h,d)}}}break;case"textarea":Kl(r,a);break;case"select":s=a.value,s!=null&&bn(r,!!a.multiple,s,!1)}},Jl=Hd,Xl=Cs;var rS={usingClientEntryPoint:!1,Events:[Ka,Eo,Iu,si,oi,Hd]},ll={findFiberByHostInstance:_s,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},iS={bundleType:ll.bundleType,version:ll.version,rendererPackageName:ll.rendererPackageName,rendererConfig:ll.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:le.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=su(r),r===null?null:r.stateNode},findFiberByHostInstance:ll.findFiberByHostInstance||tS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ac.isDisabled&&ac.supportsFiber)try{cs=ac.inject(iS),ln=ac}catch{}}return on.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rS,on.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tf(s))throw Error(t(200));return eS(r,s,null,a)},on.createRoot=function(r,s){if(!tf(r))throw Error(t(299));var a=!1,h="",d=ky;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=Xd(r,1,!1,null,null,a,!1,h,d),r[Dr]=s.current,qa(r.nodeType===8?r.parentNode:r),new ef(s)},on.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=su(s),r=r===null?null:r.stateNode,r},on.flushSync=function(r){return Cs(r)},on.hydrate=function(r,s,a){if(!sc(s))throw Error(t(200));return oc(null,r,s,!0,a)},on.hydrateRoot=function(r,s,a){if(!tf(r))throw Error(t(405));var h=a!=null&&a.hydratedSources||null,d=!1,p="",w=ky;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),s=Ry(s,null,r,1,a??null,d,!1,p,w),r[Dr]=s.current,qa(r),h)for(r=0;r<h.length;r++)a=h[r],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new ic(s)},on.render=function(r,s,a){if(!sc(s))throw Error(t(200));return oc(null,r,s,!1,a)},on.unmountComponentAtNode=function(r){if(!sc(r))throw Error(t(40));return r._reactRootContainer?(Cs(function(){oc(null,null,r,!1,function(){r._reactRootContainer=null,r[Dr]=null})}),!0):!1},on.unstable_batchedUpdates=Hd,on.unstable_renderSubtreeIntoContainer=function(r,s,a,h){if(!sc(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return oc(r,s,a,!1,h)},on.version="18.3.1-next-f1338f8080-20240426",on}var Ly;function q_(){if(Ly)return sf.exports;Ly=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),sf.exports=dS(),sf.exports}var Fy;function fS(){if(Fy)return lc;Fy=1;var n=q_();return lc.createRoot=n.createRoot,lc.hydrateRoot=n.hydrateRoot,lc}var pS=fS(),U=up();const mS=W_(U),gS=oS({__proto__:null,default:mS},[U]);function Pi({onClick:n,children:e,disabled:t=!1}){return G.jsx("button",{onClick:n,disabled:t,className:"bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 active:scale-95",children:e})}const yS="/assets/bc1bc1c44f6ba6cb1fd8be782ee33922cc6339af-Dpd72UCo.png",vS=()=>{};var Uy={};/**
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
 */const H_=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},_S=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],c=n[t++],f=n[t++],g=((o&7)<<18|(l&63)<<12|(c&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(g>>10)),e[i++]=String.fromCharCode(56320+(g&1023))}else{const l=n[t++],c=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|c&63)}}return e.join("")},G_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],c=o+1<n.length,f=c?n[o+1]:0,g=o+2<n.length,y=g?n[o+2]:0,_=l>>2,E=(l&3)<<4|f>>4;let I=(f&15)<<2|y>>6,O=y&63;g||(O=64,c||(I=64)),i.push(t[_],t[E],t[I],t[O])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(H_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):_S(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],f=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const E=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||f==null||y==null||E==null)throw new wS;const I=l<<2|f>>4;if(i.push(I),y!==64){const O=f<<4&240|y>>2;if(i.push(O),E!==64){const W=y<<6&192|E;i.push(W)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class wS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ES=function(n){const e=H_(n);return G_.encodeByteArray(e,!0)},Vc=function(n){return ES(n).replace(/\./g,"")},K_=function(n){try{return G_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function TS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const IS=()=>TS().__FIREBASE_DEFAULTS__,SS=()=>{if(typeof process>"u"||typeof Uy>"u")return;const n=Uy.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},AS=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&K_(n[1]);return e&&JSON.parse(e)},sh=()=>{try{return vS()||IS()||SS()||AS()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Q_=n=>{var e,t;return(t=(e=sh())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},RS=n=>{const e=Q_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Y_=()=>{var n;return(n=sh())==null?void 0:n.config},J_=n=>{var e;return(e=sh())==null?void 0:e[`_${n}`]};/**
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
 */class CS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function oa(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function X_(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function kS(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Vc(JSON.stringify(t)),Vc(JSON.stringify(c)),""].join(".")}const yl={};function PS(){const n={prod:[],emulator:[]};for(const e of Object.keys(yl))yl[e]?n.emulator.push(e):n.prod.push(e);return n}function xS(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let jy=!1;function Z_(n,e){if(typeof window>"u"||typeof document>"u"||!oa(window.location.host)||yl[n]===e||yl[n]||jy)return;yl[n]=e;function t(I){return`__firebase__banner__${I}`}const i="__firebase__banner",l=PS().prod.length>0;function c(){const I=document.getElementById(i);I&&I.remove()}function f(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function g(I,O){I.setAttribute("width","24"),I.setAttribute("id",O),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function y(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{jy=!0,c()},I}function _(I,O){I.setAttribute("id",O),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function E(){const I=xS(i),O=t("text"),W=document.getElementById(O)||document.createElement("span"),M=t("learnmore"),z=document.getElementById(M)||document.createElement("a"),ee=t("preprendIcon"),ne=document.getElementById(ee)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const se=I.element;f(se),_(z,M);const le=y();g(ne,ee),se.append(ne,W,z,le),document.body.appendChild(se)}l?(W.innerText="Preview backend disconnected.",ne.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ne.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,W.innerText="Preview backend running in this workspace."),W.setAttribute("id",O)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
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
 */function Kt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Kt())}function NS(){var e;const n=(e=sh())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function DS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function cp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function VS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function OS(){const n=Kt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function MS(){return!NS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function hp(){try{return typeof indexedDB=="object"}catch{return!1}}function dp(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)==null?void 0:l.message)||"")}}catch(t){e(t)}})}function ew(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const LS="FirebaseError";class Hn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=LS,Object.setPrototypeOf(this,Hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ws.prototype.create)}}class Ws{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],c=l?FS(l,i):"Error",f=`${this.serviceName}: ${c} (${o}).`;return new Hn(o,f,i)}}function FS(n,e){return n.replace(US,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const US=/\{\$([^}]+)}/g;function jS(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Wi(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],c=e[o];if(zy(l)&&zy(c)){if(!Wi(l,c))return!1}else if(l!==c)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function zy(n){return n!==null&&typeof n=="object"}/**
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
 */function Ol(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function zS(n,e){const t=new BS(n,e);return t.subscribe.bind(t)}class BS{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");$S(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=lf),o.error===void 0&&(o.error=lf),o.complete===void 0&&(o.complete=lf);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $S(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function lf(){}/**
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
 */const WS=1e3,qS=2,HS=14400*1e3,GS=.5;function By(n,e=WS,t=qS){const i=e*Math.pow(t,n),o=Math.round(GS*i*(Math.random()-.5)*2);return Math.min(HS,i+o)}/**
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
 */function mt(n){return n&&n._delegate?n._delegate:n}class Wn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ns="[DEFAULT]";/**
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
 */class KS{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new CS;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(YS(e))try{this.getOrInitializeService({instanceIdentifier:Ns})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=Ns){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ns){return this.instances.has(e)}getOptions(e=Ns){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,c]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&c.resolve(o)}return o}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(i)??new Set;o.add(e),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&e(l,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:QS(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ns){return this.component?this.component.multipleInstances?e:Ns:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function QS(n){return n===Ns?void 0:n}function YS(n){return n.instantiationMode==="EAGER"}/**
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
 */class JS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new KS(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Oe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Oe||(Oe={}));const XS={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},ZS=Oe.INFO,eA={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},tA=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=eA[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class oh{constructor(e){this.name=e,this._logLevel=ZS,this._logHandler=tA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?XS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...e),this._logHandler(this,Oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...e),this._logHandler(this,Oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...e),this._logHandler(this,Oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...e),this._logHandler(this,Oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...e),this._logHandler(this,Oe.ERROR,...e)}}const nA=(n,e)=>e.some(t=>n instanceof t);let $y,Wy;function rA(){return $y||($y=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iA(){return Wy||(Wy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tw=new WeakMap,Nf=new WeakMap,nw=new WeakMap,uf=new WeakMap,fp=new WeakMap;function sA(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(Fi(n.result)),o()},c=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&tw.set(t,n)}).catch(()=>{}),fp.set(e,n),e}function oA(n){if(Nf.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),o()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});Nf.set(n,e)}let Df={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Nf.get(n);if(e==="objectStoreNames")return n.objectStoreNames||nw.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Fi(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function aA(n){Df=n(Df)}function lA(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(cf(this),e,...t);return nw.set(i,e.sort?e.sort():[e]),Fi(i)}:iA().includes(n)?function(...e){return n.apply(cf(this),e),Fi(tw.get(this))}:function(...e){return Fi(n.apply(cf(this),e))}}function uA(n){return typeof n=="function"?lA(n):(n instanceof IDBTransaction&&oA(n),nA(n,rA())?new Proxy(n,Df):n)}function Fi(n){if(n instanceof IDBRequest)return sA(n);if(uf.has(n))return uf.get(n);const e=uA(n);return e!==n&&(uf.set(n,e),fp.set(e,n)),e}const cf=n=>fp.get(n);function rw(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const c=indexedDB.open(n,e),f=Fi(c);return i&&c.addEventListener("upgradeneeded",g=>{i(Fi(c.result),g.oldVersion,g.newVersion,Fi(c.transaction),g)}),t&&c.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),f.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),f}const cA=["get","getKey","getAll","getAllKeys","count"],hA=["put","add","delete","clear"],hf=new Map;function qy(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(hf.get(e))return hf.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=hA.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||cA.includes(t)))return;const l=async function(c,...f){const g=this.transaction(c,o?"readwrite":"readonly");let y=g.store;return i&&(y=y.index(f.shift())),(await Promise.all([y[t](...f),o&&g.done]))[0]};return hf.set(e,l),l}aA(n=>({...n,get:(e,t,i)=>qy(e,t)||n.get(e,t,i),has:(e,t)=>!!qy(e,t)||n.has(e,t)}));/**
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
 */class dA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(fA(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function fA(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vf="@firebase/app",Hy="0.14.8";/**
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
 */const qr=new oh("@firebase/app"),pA="@firebase/app-compat",mA="@firebase/analytics-compat",gA="@firebase/analytics",yA="@firebase/app-check-compat",vA="@firebase/app-check",_A="@firebase/auth",wA="@firebase/auth-compat",EA="@firebase/database",TA="@firebase/data-connect",IA="@firebase/database-compat",SA="@firebase/functions",AA="@firebase/functions-compat",RA="@firebase/installations",CA="@firebase/installations-compat",kA="@firebase/messaging",PA="@firebase/messaging-compat",xA="@firebase/performance",bA="@firebase/performance-compat",NA="@firebase/remote-config",DA="@firebase/remote-config-compat",VA="@firebase/storage",OA="@firebase/storage-compat",MA="@firebase/firestore",LA="@firebase/ai",FA="@firebase/firestore-compat",UA="firebase",jA="12.9.0";/**
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
 */const Of="[DEFAULT]",zA={[Vf]:"fire-core",[pA]:"fire-core-compat",[gA]:"fire-analytics",[mA]:"fire-analytics-compat",[vA]:"fire-app-check",[yA]:"fire-app-check-compat",[_A]:"fire-auth",[wA]:"fire-auth-compat",[EA]:"fire-rtdb",[TA]:"fire-data-connect",[IA]:"fire-rtdb-compat",[SA]:"fire-fn",[AA]:"fire-fn-compat",[RA]:"fire-iid",[CA]:"fire-iid-compat",[kA]:"fire-fcm",[PA]:"fire-fcm-compat",[xA]:"fire-perf",[bA]:"fire-perf-compat",[NA]:"fire-rc",[DA]:"fire-rc-compat",[VA]:"fire-gcs",[OA]:"fire-gcs-compat",[MA]:"fire-fst",[FA]:"fire-fst-compat",[LA]:"fire-vertex","fire-js":"fire-js",[UA]:"fire-js-all"};/**
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
 */const Oc=new Map,BA=new Map,Mf=new Map;function Gy(n,e){try{n.container.addComponent(e)}catch(t){qr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Er(n){const e=n.name;if(Mf.has(e))return qr.debug(`There were multiple attempts to register component ${e}.`),!1;Mf.set(e,n);for(const t of Oc.values())Gy(t,n);for(const t of BA.values())Gy(t,n);return!0}function qs(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function zn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const $A={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ui=new Ws("app","Firebase",$A);/**
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
 */class WA{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ui.create("app-deleted",{appName:this._name})}}/**
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
 */const aa=jA;function iw(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:Of,automaticDataCollectionEnabled:!0,...e},o=i.name;if(typeof o!="string"||!o)throw Ui.create("bad-app-name",{appName:String(o)});if(t||(t=Y_()),!t)throw Ui.create("no-options");const l=Oc.get(o);if(l){if(Wi(t,l.options)&&Wi(i,l.config))return l;throw Ui.create("duplicate-app",{appName:o})}const c=new JS(o);for(const g of Mf.values())c.addComponent(g);const f=new WA(t,i,c);return Oc.set(o,f),f}function pp(n=Of){const e=Oc.get(n);if(!e&&n===Of&&Y_())return iw();if(!e)throw Ui.create("no-app",{appName:n});return e}function xn(n,e,t){let i=zA[n]??n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const c=[`Unable to register library "${i}" with version "${e}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qr.warn(c.join(" "));return}Er(new Wn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const qA="firebase-heartbeat-database",HA=1,Al="firebase-heartbeat-store";let df=null;function sw(){return df||(df=rw(qA,HA,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Al)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ui.create("idb-open",{originalErrorMessage:n.message})})),df}async function GA(n){try{const t=(await sw()).transaction(Al),i=await t.objectStore(Al).get(ow(n));return await t.done,i}catch(e){if(e instanceof Hn)qr.warn(e.message);else{const t=Ui.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qr.warn(t.message)}}}async function Ky(n,e){try{const i=(await sw()).transaction(Al,"readwrite");await i.objectStore(Al).put(e,ow(n)),await i.done}catch(t){if(t instanceof Hn)qr.warn(t.message);else{const i=Ui.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});qr.warn(i.message)}}}function ow(n){return`${n.name}!${n.options.appId}`}/**
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
 */const KA=1024,QA=30;class YA{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new XA(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Qy();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>QA){const c=ZA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){qr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Qy(),{heartbeatsToSend:i,unsentEntries:o}=JA(this._heartbeatsCache.heartbeats),l=Vc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return qr.warn(t),""}}}function Qy(){return new Date().toISOString().substring(0,10)}function JA(n,e=KA){const t=[];let i=n.slice();for(const o of n){const l=t.find(c=>c.agent===o.agent);if(l){if(l.dates.push(o.date),Yy(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Yy(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class XA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hp()?dp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await GA(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Ky(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Ky(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Yy(n){return Vc(JSON.stringify({version:2,heartbeats:n})).length}function ZA(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function eR(n){Er(new Wn("platform-logger",e=>new dA(e),"PRIVATE")),Er(new Wn("heartbeat",e=>new YA(e),"PRIVATE")),xn(Vf,Hy,n),xn(Vf,Hy,"esm2020"),xn("fire-js","")}eR("");var tR="firebase",nR="12.9.0";/**
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
 */xn(tR,nR,"app");const aw="@firebase/installations",mp="0.6.19";/**
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
 */const lw=1e4,uw=`w:${mp}`,cw="FIS_v2",rR="https://firebaseinstallations.googleapis.com/v1",iR=3600*1e3,sR="installations",oR="Installations";/**
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
 */const aR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ms=new Ws(sR,oR,aR);function hw(n){return n instanceof Hn&&n.code.includes("request-failed")}/**
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
 */function dw({projectId:n}){return`${rR}/projects/${n}/installations`}function fw(n){return{token:n.token,requestStatus:2,expiresIn:uR(n.expiresIn),creationTime:Date.now()}}async function pw(n,e){const i=(await e.json()).error;return Ms.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function mw({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function lR(n,{refreshToken:e}){const t=mw(n);return t.append("Authorization",cR(e)),t}async function gw(n){const e=await n();return e.status>=500&&e.status<600?n():e}function uR(n){return Number(n.replace("s","000"))}function cR(n){return`${cw} ${n}`}/**
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
 */async function hR({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=dw(n),o=mw(n),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const c={fid:t,authVersion:cw,appId:n.appId,sdkVersion:uw},f={method:"POST",headers:o,body:JSON.stringify(c)},g=await gw(()=>fetch(i,f));if(g.ok){const y=await g.json();return{fid:y.fid||t,registrationStatus:2,refreshToken:y.refreshToken,authToken:fw(y.authToken)}}else throw await pw("Create Installation",g)}/**
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
 */function yw(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function dR(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const fR=/^[cdef][\w-]{21}$/,Lf="";function pR(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=mR(n);return fR.test(t)?t:Lf}catch{return Lf}}function mR(n){return dR(n).substr(0,22)}/**
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
 */function ah(n){return`${n.appName}!${n.appId}`}/**
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
 */const vw=new Map;function _w(n,e){const t=ah(n);ww(t,e),gR(t,e)}function ww(n,e){const t=vw.get(n);if(t)for(const i of t)i(e)}function gR(n,e){const t=yR();t&&t.postMessage({key:n,fid:e}),vR()}let Ds=null;function yR(){return!Ds&&"BroadcastChannel"in self&&(Ds=new BroadcastChannel("[Firebase] FID Change"),Ds.onmessage=n=>{ww(n.data.key,n.data.fid)}),Ds}function vR(){vw.size===0&&Ds&&(Ds.close(),Ds=null)}/**
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
 */const _R="firebase-installations-database",wR=1,Ls="firebase-installations-store";let ff=null;function gp(){return ff||(ff=rw(_R,wR,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ls)}}})),ff}async function Mc(n,e){const t=ah(n),o=(await gp()).transaction(Ls,"readwrite"),l=o.objectStore(Ls),c=await l.get(t);return await l.put(e,t),await o.done,(!c||c.fid!==e.fid)&&_w(n,e.fid),e}async function Ew(n){const e=ah(n),i=(await gp()).transaction(Ls,"readwrite");await i.objectStore(Ls).delete(e),await i.done}async function lh(n,e){const t=ah(n),o=(await gp()).transaction(Ls,"readwrite"),l=o.objectStore(Ls),c=await l.get(t),f=e(c);return f===void 0?await l.delete(t):await l.put(f,t),await o.done,f&&(!c||c.fid!==f.fid)&&_w(n,f.fid),f}/**
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
 */async function yp(n){let e;const t=await lh(n.appConfig,i=>{const o=ER(i),l=TR(n,o);return e=l.registrationPromise,l.installationEntry});return t.fid===Lf?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function ER(n){const e=n||{fid:pR(),registrationStatus:0};return Tw(e)}function TR(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Ms.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=IR(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:SR(n)}:{installationEntry:e}}async function IR(n,e){try{const t=await hR(n,e);return Mc(n.appConfig,t)}catch(t){throw hw(t)&&t.customData.serverCode===409?await Ew(n.appConfig):await Mc(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function SR(n){let e=await Jy(n.appConfig);for(;e.registrationStatus===1;)await yw(100),e=await Jy(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await yp(n);return i||t}return e}function Jy(n){return lh(n,e=>{if(!e)throw Ms.create("installation-not-found");return Tw(e)})}function Tw(n){return AR(n)?{fid:n.fid,registrationStatus:0}:n}function AR(n){return n.registrationStatus===1&&n.registrationTime+lw<Date.now()}/**
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
 */async function RR({appConfig:n,heartbeatServiceProvider:e},t){const i=CR(n,t),o=lR(n,t),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const c={installation:{sdkVersion:uw,appId:n.appId}},f={method:"POST",headers:o,body:JSON.stringify(c)},g=await gw(()=>fetch(i,f));if(g.ok){const y=await g.json();return fw(y)}else throw await pw("Generate Auth Token",g)}function CR(n,{fid:e}){return`${dw(n)}/${e}/authTokens:generate`}/**
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
 */async function vp(n,e=!1){let t;const i=await lh(n.appConfig,l=>{if(!Iw(l))throw Ms.create("not-registered");const c=l.authToken;if(!e&&xR(c))return l;if(c.requestStatus===1)return t=kR(n,e),l;{if(!navigator.onLine)throw Ms.create("app-offline");const f=NR(l);return t=PR(n,f),f}});return t?await t:i.authToken}async function kR(n,e){let t=await Xy(n.appConfig);for(;t.authToken.requestStatus===1;)await yw(100),t=await Xy(n.appConfig);const i=t.authToken;return i.requestStatus===0?vp(n,e):i}function Xy(n){return lh(n,e=>{if(!Iw(e))throw Ms.create("not-registered");const t=e.authToken;return DR(t)?{...e,authToken:{requestStatus:0}}:e})}async function PR(n,e){try{const t=await RR(n,e),i={...e,authToken:t};return await Mc(n.appConfig,i),t}catch(t){if(hw(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Ew(n.appConfig);else{const i={...e,authToken:{requestStatus:0}};await Mc(n.appConfig,i)}throw t}}function Iw(n){return n!==void 0&&n.registrationStatus===2}function xR(n){return n.requestStatus===2&&!bR(n)}function bR(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+iR}function NR(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function DR(n){return n.requestStatus===1&&n.requestTime+lw<Date.now()}/**
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
 */async function VR(n){const e=n,{installationEntry:t,registrationPromise:i}=await yp(e);return i?i.catch(console.error):vp(e).catch(console.error),t.fid}/**
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
 */async function OR(n,e=!1){const t=n;return await MR(t),(await vp(t,e)).token}async function MR(n){const{registrationPromise:e}=await yp(n);e&&await e}/**
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
 */function LR(n){if(!n||!n.options)throw pf("App Configuration");if(!n.name)throw pf("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw pf(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function pf(n){return Ms.create("missing-app-config-values",{valueName:n})}/**
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
 */const Sw="installations",FR="installations-internal",UR=n=>{const e=n.getProvider("app").getImmediate(),t=LR(e),i=qs(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},jR=n=>{const e=n.getProvider("app").getImmediate(),t=qs(e,Sw).getImmediate();return{getId:()=>VR(t),getToken:o=>OR(t,o)}};function zR(){Er(new Wn(Sw,UR,"PUBLIC")),Er(new Wn(FR,jR,"PRIVATE"))}zR();xn(aw,mp);xn(aw,mp,"esm2020");/**
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
 */const Lc="analytics",BR="firebase_id",$R="origin",WR=60*1e3,qR="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",_p="https://www.googletagmanager.com/gtag/js";/**
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
 */const Zt=new oh("@firebase/analytics");/**
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
 */const HR={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},_n=new Ws("analytics","Analytics",HR);/**
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
 */function GR(n){if(!n.startsWith(_p)){const e=_n.create("invalid-gtag-resource",{gtagURL:n});return Zt.warn(e.message),""}return n}function Aw(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function KR(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function QR(n,e){const t=KR("firebase-js-sdk-policy",{createScriptURL:GR}),i=document.createElement("script"),o=`${_p}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(o):o,i.async=!0,document.head.appendChild(i)}function YR(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function JR(n,e,t,i,o,l){const c=i[o];try{if(c)await e[c];else{const g=(await Aw(t)).find(y=>y.measurementId===o);g&&await e[g.appId]}}catch(f){Zt.error(f)}n("config",o,l)}async function XR(n,e,t,i,o){try{let l=[];if(o&&o.send_to){let c=o.send_to;Array.isArray(c)||(c=[c]);const f=await Aw(t);for(const g of c){const y=f.find(E=>E.measurementId===g),_=y&&e[y.appId];if(_)l.push(_);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),n("event",i,o||{})}catch(l){Zt.error(l)}}function ZR(n,e,t,i){async function o(l,...c){try{if(l==="event"){const[f,g]=c;await XR(n,e,t,f,g)}else if(l==="config"){const[f,g]=c;await JR(n,e,t,i,f,g)}else if(l==="consent"){const[f,g]=c;n("consent",f,g)}else if(l==="get"){const[f,g,y]=c;n("get",f,g,y)}else if(l==="set"){const[f]=c;n("set",f)}else n(l,...c)}catch(f){Zt.error(f)}}return o}function eC(n,e,t,i,o){let l=function(...c){window[i].push(arguments)};return window[o]&&typeof window[o]=="function"&&(l=window[o]),window[o]=ZR(l,n,e,t),{gtagCore:l,wrappedGtag:window[o]}}function tC(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(_p)&&t.src.includes(n))return t;return null}/**
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
 */const nC=30,rC=1e3;class iC{constructor(e={},t=rC){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Rw=new iC;function sC(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function oC(n){var c;const{appId:e,apiKey:t}=n,i={method:"GET",headers:sC(t)},o=qR.replace("{app-id}",e),l=await fetch(o,i);if(l.status!==200&&l.status!==304){let f="";try{const g=await l.json();(c=g.error)!=null&&c.message&&(f=g.error.message)}catch{}throw _n.create("config-fetch-failed",{httpStatus:l.status,responseMessage:f})}return l.json()}async function aC(n,e=Rw,t){const{appId:i,apiKey:o,measurementId:l}=n.options;if(!i)throw _n.create("no-app-id");if(!o){if(l)return{measurementId:l,appId:i};throw _n.create("no-api-key")}const c=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new cC;return setTimeout(async()=>{f.abort()},WR),Cw({appId:i,apiKey:o,measurementId:l},c,f,e)}async function Cw(n,{throttleEndTimeMillis:e,backoffCount:t},i,o=Rw){var f;const{appId:l,measurementId:c}=n;try{await lC(i,e)}catch(g){if(c)return Zt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:l,measurementId:c};throw g}try{const g=await oC(n);return o.deleteThrottleMetadata(l),g}catch(g){const y=g;if(!uC(y)){if(o.deleteThrottleMetadata(l),c)return Zt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:l,measurementId:c};throw g}const _=Number((f=y==null?void 0:y.customData)==null?void 0:f.httpStatus)===503?By(t,o.intervalMillis,nC):By(t,o.intervalMillis),E={throttleEndTimeMillis:Date.now()+_,backoffCount:t+1};return o.setThrottleMetadata(l,E),Zt.debug(`Calling attemptFetch again in ${_} millis`),Cw(n,E,i,o)}}function lC(n,e){return new Promise((t,i)=>{const o=Math.max(e-Date.now(),0),l=setTimeout(t,o);n.addEventListener(()=>{clearTimeout(l),i(_n.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function uC(n){if(!(n instanceof Hn)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class cC{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function hC(n,e,t,i,o){if(o&&o.global){n("event",t,i);return}else{const l=await e,c={...i,send_to:l};n("event",t,c)}}async function dC(n,e,t,i){if(i&&i.global){const o={};for(const l of Object.keys(t))o[`user_properties.${l}`]=t[l];return n("set",o),Promise.resolve()}else{const o=await e;n("config",o,{update:!0,user_properties:t})}}/**
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
 */async function fC(){if(hp())try{await dp()}catch(n){return Zt.warn(_n.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Zt.warn(_n.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function pC(n,e,t,i,o,l,c){const f=aC(n);f.then(I=>{t[I.measurementId]=I.appId,n.options.measurementId&&I.measurementId!==n.options.measurementId&&Zt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${I.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(I=>Zt.error(I)),e.push(f);const g=fC().then(I=>{if(I)return i.getId()}),[y,_]=await Promise.all([f,g]);tC(l)||QR(l,y.measurementId),o("js",new Date);const E=(c==null?void 0:c.config)??{};return E[$R]="firebase",E.update=!0,_!=null&&(E[BR]=_),o("config",y.measurementId,E),y.measurementId}/**
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
 */class mC{constructor(e){this.app=e}_delete(){return delete Ho[this.app.options.appId],Promise.resolve()}}let Ho={},Zy=[];const ev={};let mf="dataLayer",gC="gtag",tv,wp,nv=!1;function yC(){const n=[];if(cp()&&n.push("This is a browser extension environment."),ew()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,o)=>`(${o+1}) ${i}`).join(" "),t=_n.create("invalid-analytics-context",{errorInfo:e});Zt.warn(t.message)}}function vC(n,e,t){yC();const i=n.options.appId;if(!i)throw _n.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Zt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw _n.create("no-api-key");if(Ho[i]!=null)throw _n.create("already-exists",{id:i});if(!nv){YR(mf);const{wrappedGtag:l,gtagCore:c}=eC(Ho,Zy,ev,mf,gC);wp=l,tv=c,nv=!0}return Ho[i]=pC(n,Zy,ev,e,tv,mf,t),new mC(n)}function _C(n=pp()){n=mt(n);const e=qs(n,Lc);return e.isInitialized()?e.getImmediate():wC(n)}function wC(n,e={}){const t=qs(n,Lc);if(t.isInitialized()){const o=t.getImmediate();if(Wi(e,t.getOptions()))return o;throw _n.create("already-initialized")}return t.initialize({options:e})}async function EC(){if(cp()||!ew()||!hp())return!1;try{return await dp()}catch{return!1}}function TC(n,e,t){n=mt(n),dC(wp,Ho[n.app.options.appId],e,t).catch(i=>Zt.error(i))}function IC(n,e,t,i){n=mt(n),hC(wp,Ho[n.app.options.appId],e,t,i).catch(o=>Zt.error(o))}const rv="@firebase/analytics",iv="0.10.19";function SC(){Er(new Wn(Lc,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return vC(i,o,t)},"PUBLIC")),Er(new Wn("analytics-internal",n,"PRIVATE")),xn(rv,iv),xn(rv,iv,"esm2020");function n(e){try{const t=e.getProvider(Lc).getImmediate();return{logEvent:(i,o,l)=>IC(t,i,o,l),setUserProperties:(i,o)=>TC(t,i,o)}}catch(t){throw _n.create("interop-component-reg-failed",{reason:t})}}}SC();function kw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const AC=kw,Pw=new Ws("auth","Firebase",kw());/**
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
 */const Fc=new oh("@firebase/auth");function RC(n,...e){Fc.logLevel<=Oe.WARN&&Fc.warn(`Auth (${aa}): ${n}`,...e)}function Tc(n,...e){Fc.logLevel<=Oe.ERROR&&Fc.error(`Auth (${aa}): ${n}`,...e)}/**
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
 */function Hr(n,...e){throw Ep(n,...e)}function gr(n,...e){return Ep(n,...e)}function xw(n,e,t){const i={...AC(),[e]:t};return new Ws("auth","Firebase",i).create(e,{appName:n.name})}function ji(n){return xw(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ep(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Pw.create(n,...e)}function ke(n,e,...t){if(!n)throw Ep(e,...t)}function Br(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Tc(e),new Error(e)}function Gr(n,e){n||Br(e)}/**
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
 */function Ff(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function CC(){return sv()==="http:"||sv()==="https:"}function sv(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function kC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(CC()||cp()||"connection"in navigator)?navigator.onLine:!0}function PC(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Ml{constructor(e,t){this.shortDelay=e,this.longDelay=t,Gr(t>e,"Short delay should be less than long delay!"),this.isMobile=bS()||VS()}get(){return kC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Tp(n,e){Gr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class bw{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Br("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Br("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Br("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const xC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const bC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],NC=new Ml(3e4,6e4);function uh(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function la(n,e,t,i,o={}){return Nw(n,o,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const f=Ol({key:n.config.apiKey,...c}).slice(1),g=await n._getAdditionalHeaders();g["Content-Type"]="application/json",n.languageCode&&(g["X-Firebase-Locale"]=n.languageCode);const y={method:e,headers:g,...l};return DS()||(y.referrerPolicy="no-referrer"),n.emulatorConfig&&oa(n.emulatorConfig.host)&&(y.credentials="include"),bw.fetch()(await Vw(n,n.config.apiHost,t,f),y)})}async function Nw(n,e,t){n._canInitEmulator=!1;const i={...xC,...e};try{const o=new DC(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw uc(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const f=l.ok?c.errorMessage:c.error.message,[g,y]=f.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw uc(n,"credential-already-in-use",c);if(g==="EMAIL_EXISTS")throw uc(n,"email-already-in-use",c);if(g==="USER_DISABLED")throw uc(n,"user-disabled",c);const _=i[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw xw(n,_,y);Hr(n,_)}}catch(o){if(o instanceof Hn)throw o;Hr(n,"network-request-failed",{message:String(o)})}}async function Dw(n,e,t,i,o={}){const l=await la(n,e,t,i,o);return"mfaPendingCredential"in l&&Hr(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function Vw(n,e,t,i){const o=`${e}${t}?${i}`,l=n,c=l.config.emulator?Tp(n.config,o):`${n.config.apiScheme}://${o}`;return bC.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}class DC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(gr(this.auth,"network-request-failed")),NC.get())})}}function uc(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=gr(n,e,i);return o.customData._tokenResponse=t,o}/**
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
 */async function VC(n,e){return la(n,"POST","/v1/accounts:delete",e)}async function Uc(n,e){return la(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function vl(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function OC(n,e=!1){const t=mt(n),i=await t.getIdToken(e),o=Ip(i);ke(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:vl(gf(o.auth_time)),issuedAtTime:vl(gf(o.iat)),expirationTime:vl(gf(o.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function gf(n){return Number(n)*1e3}function Ip(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Tc("JWT malformed, contained fewer than 3 sections"),null;try{const o=K_(t);return o?JSON.parse(o):(Tc("Failed to decode base64 JWT payload"),null)}catch(o){return Tc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function ov(n){const e=Ip(n);return ke(e,"internal-error"),ke(typeof e.exp<"u","internal-error"),ke(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Rl(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Hn&&MC(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function MC({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class LC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Uf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=vl(this.lastLoginAt),this.creationTime=vl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function jc(n){var E;const e=n.auth,t=await n.getIdToken(),i=await Rl(n,Uc(e,{idToken:t}));ke(i==null?void 0:i.users.length,e,"internal-error");const o=i.users[0];n._notifyReloadListener(o);const l=(E=o.providerUserInfo)!=null&&E.length?Ow(o.providerUserInfo):[],c=UC(n.providerData,l),f=n.isAnonymous,g=!(n.email&&o.passwordHash)&&!(c!=null&&c.length),y=f?g:!1,_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Uf(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(n,_)}async function FC(n){const e=mt(n);await jc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function UC(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function Ow(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function jC(n,e){const t=await Nw(n,{},async()=>{const i=Ol({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,c=await Vw(n,o,"/v1/token",`key=${l}`),f=await n._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:f,body:i};return n.emulatorConfig&&oa(n.emulatorConfig.host)&&(g.credentials="include"),bw.fetch()(c,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function zC(n,e){return la(n,"POST","/v2/accounts:revokeToken",uh(n,e))}/**
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
 */class Go{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ke(e.idToken,"internal-error"),ke(typeof e.idToken<"u","internal-error"),ke(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ov(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ke(e.length!==0,"internal-error");const t=ov(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ke(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await jC(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,c=new Go;return i&&(ke(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),o&&(ke(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),l&&(ke(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Go,this.toJSON())}_performRefresh(){return Br("not implemented")}}/**
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
 */function xi(n,e){ke(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Bn{constructor({uid:e,auth:t,stsTokenManager:i,...o}){this.providerId="firebase",this.proactiveRefresh=new LC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Uf(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Rl(this,this.stsTokenManager.getToken(this.auth,e));return ke(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return OC(this,e)}reload(){return FC(this)}_assign(e){this!==e&&(ke(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Bn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ke(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await jc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(zn(this.auth.app))return Promise.reject(ji(this.auth));const e=await this.getIdToken();return await Rl(this,VC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,o=t.email??void 0,l=t.phoneNumber??void 0,c=t.photoURL??void 0,f=t.tenantId??void 0,g=t._redirectEventId??void 0,y=t.createdAt??void 0,_=t.lastLoginAt??void 0,{uid:E,emailVerified:I,isAnonymous:O,providerData:W,stsTokenManager:M}=t;ke(E&&M,e,"internal-error");const z=Go.fromJSON(this.name,M);ke(typeof E=="string",e,"internal-error"),xi(i,e.name),xi(o,e.name),ke(typeof I=="boolean",e,"internal-error"),ke(typeof O=="boolean",e,"internal-error"),xi(l,e.name),xi(c,e.name),xi(f,e.name),xi(g,e.name),xi(y,e.name),xi(_,e.name);const ee=new Bn({uid:E,auth:e,email:o,emailVerified:I,displayName:i,isAnonymous:O,photoURL:c,phoneNumber:l,tenantId:f,stsTokenManager:z,createdAt:y,lastLoginAt:_});return W&&Array.isArray(W)&&(ee.providerData=W.map(ne=>({...ne}))),g&&(ee._redirectEventId=g),ee}static async _fromIdTokenResponse(e,t,i=!1){const o=new Go;o.updateFromServerResponse(t);const l=new Bn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await jc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];ke(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?Ow(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new Go;f.updateFromIdToken(i);const g=new Bn({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:c}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Uf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(g,y),g}}/**
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
 */const av=new Map;function $r(n){Gr(n instanceof Function,"Expected a class definition");let e=av.get(n);return e?(Gr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,av.set(n,e),e)}/**
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
 */class Mw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Mw.type="NONE";const lv=Mw;/**
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
 */function Ic(n,e,t){return`firebase:${n}:${e}:${t}`}class Ko{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=Ic(this.userKey,o.apiKey,l),this.fullPersistenceKey=Ic("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Uc(this.auth,{idToken:e}).catch(()=>{});return t?Bn._fromGetAccountInfoResponse(this.auth,t,e):null}return Bn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Ko($r(lv),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||$r(lv);const c=Ic(i,e.config.apiKey,e.name);let f=null;for(const y of t)try{const _=await y._get(c);if(_){let E;if(typeof _=="string"){const I=await Uc(e,{idToken:_}).catch(()=>{});if(!I)break;E=await Bn._fromGetAccountInfoResponse(e,I,_)}else E=Bn._fromJSON(e,_);y!==l&&(f=E),l=y;break}}catch{}const g=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new Ko(l,e,i):(l=g[0],f&&await l._set(c,f.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(c)}catch{}})),new Ko(l,e,i))}}/**
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
 */function uv(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Lw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bw(e))return"Blackberry";if($w(e))return"Webos";if(Fw(e))return"Safari";if((e.includes("chrome/")||Uw(e))&&!e.includes("edge/"))return"Chrome";if(zw(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Lw(n=Kt()){return/firefox\//i.test(n)}function Fw(n=Kt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Uw(n=Kt()){return/crios\//i.test(n)}function jw(n=Kt()){return/iemobile/i.test(n)}function zw(n=Kt()){return/android/i.test(n)}function Bw(n=Kt()){return/blackberry/i.test(n)}function $w(n=Kt()){return/webos/i.test(n)}function Sp(n=Kt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function BC(n=Kt()){var e;return Sp(n)&&!!((e=window.navigator)!=null&&e.standalone)}function $C(){return OS()&&document.documentMode===10}function Ww(n=Kt()){return Sp(n)||zw(n)||$w(n)||Bw(n)||/windows phone/i.test(n)||jw(n)}/**
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
 */function qw(n,e=[]){let t;switch(n){case"Browser":t=uv(Kt());break;case"Worker":t=`${uv(Kt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${aa}/${i}`}/**
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
 */class WC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((c,f)=>{try{const g=e(l);c(g)}catch(g){f(g)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function qC(n,e={}){return la(n,"GET","/v2/passwordPolicy",uh(n,e))}/**
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
 */const HC=6;class GC{constructor(e){var i;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??HC,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class KC{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cv(this),this.idTokenSubscription=new cv(this),this.beforeStateQueue=new WC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=$r(t)),this._initializationPromise=this.queue(async()=>{var i,o,l;if(!this._deleted&&(this.persistenceManager=await Ko.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Uc(this,{idToken:e}),i=await Bn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(zn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(l=this.redirectUser)==null?void 0:l._redirectEventId,f=i==null?void 0:i._redirectEventId,g=await this.tryRedirectSignIn(e);(!c||c===f)&&(g!=null&&g.user)&&(i=g.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(c){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ke(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await jc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=PC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(zn(this.app))return Promise.reject(ji(this));const t=e?mt(e):null;return t&&ke(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ke(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return zn(this.app)?Promise.reject(ji(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return zn(this.app)?Promise.reject(ji(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($r(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qC(this),t=new GC(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ws("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await zC(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&$r(e)||this._popupRedirectResolver;ke(t,this,"argument-error"),this.redirectPersistenceManager=await Ko.create(this,[$r(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ke(f,this,"internal-error"),f.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,i,o);return()=>{c=!0,g()}}else{const g=e.addObserver(t);return()=>{c=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ke(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;if(zn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&RC(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ch(n){return mt(n)}class cv{constructor(e){this.auth=e,this.observer=null,this.addObserver=zS(t=>this.observer=t)}get next(){return ke(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ap={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function QC(n){Ap=n}function YC(n){return Ap.loadJS(n)}function JC(){return Ap.gapiScript}function XC(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function ZC(n,e){const t=qs(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Wi(l,e??{}))return o;Hr(o,"already-initialized")}return t.initialize({options:e})}function e1(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map($r);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function t1(n,e,t){const i=ch(n);ke(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=Hw(e),{host:c,port:f}=n1(e),g=f===null?"":`:${f}`,y={url:`${l}//${c}${g}/`},_=Object.freeze({host:c,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){ke(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),ke(Wi(y,i.config.emulator)&&Wi(_,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=y,i.emulatorConfig=_,i.settings.appVerificationDisabledForTesting=!0,oa(c)?(X_(`${l}//${c}${g}`),Z_("Auth",!0)):r1()}function Hw(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function n1(n){const e=Hw(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:hv(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:hv(c)}}}function hv(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function r1(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Gw{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Br("not implemented")}_getIdTokenResponse(e){return Br("not implemented")}_linkToIdToken(e,t){return Br("not implemented")}_getReauthenticationResolver(e){return Br("not implemented")}}/**
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
 */async function Qo(n,e){return Dw(n,"POST","/v1/accounts:signInWithIdp",uh(n,e))}/**
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
 */const i1="http://localhost";class Fs extends Gw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Fs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Hr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o,...l}=t;if(!i||!o)return null;const c=new Fs(i,o);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Qo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Qo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Qo(e,t)}buildRequest(){const e={requestUri:i1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ol(t)}return e}}/**
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
 */class Kw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ll extends Kw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Di extends Ll{constructor(){super("facebook.com")}static credential(e){return Fs._fromParams({providerId:Di.PROVIDER_ID,signInMethod:Di.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Di.credentialFromTaggedObject(e)}static credentialFromError(e){return Di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Di.credential(e.oauthAccessToken)}catch{return null}}}Di.FACEBOOK_SIGN_IN_METHOD="facebook.com";Di.PROVIDER_ID="facebook.com";/**
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
 */class Vi extends Ll{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Fs._fromParams({providerId:Vi.PROVIDER_ID,signInMethod:Vi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Vi.credentialFromTaggedObject(e)}static credentialFromError(e){return Vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Vi.credential(t,i)}catch{return null}}}Vi.GOOGLE_SIGN_IN_METHOD="google.com";Vi.PROVIDER_ID="google.com";/**
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
 */class Oi extends Ll{constructor(){super("github.com")}static credential(e){return Fs._fromParams({providerId:Oi.PROVIDER_ID,signInMethod:Oi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Oi.credentialFromTaggedObject(e)}static credentialFromError(e){return Oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Oi.credential(e.oauthAccessToken)}catch{return null}}}Oi.GITHUB_SIGN_IN_METHOD="github.com";Oi.PROVIDER_ID="github.com";/**
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
 */class Mi extends Ll{constructor(){super("twitter.com")}static credential(e,t){return Fs._fromParams({providerId:Mi.PROVIDER_ID,signInMethod:Mi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Mi.credentialFromTaggedObject(e)}static credentialFromError(e){return Mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Mi.credential(t,i)}catch{return null}}}Mi.TWITTER_SIGN_IN_METHOD="twitter.com";Mi.PROVIDER_ID="twitter.com";/**
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
 */async function s1(n,e){return Dw(n,"POST","/v1/accounts:signUp",uh(n,e))}/**
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
 */class qi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Bn._fromIdTokenResponse(e,i,o),c=dv(i);return new qi({user:l,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=dv(i);return new qi({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function dv(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function o1(n){var o;if(zn(n.app))return Promise.reject(ji(n));const e=ch(n);if(await e._initializationPromise,(o=e.currentUser)!=null&&o.isAnonymous)return new qi({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await s1(e,{returnSecureToken:!0}),i=await qi._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(i.user),i}/**
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
 */class zc extends Hn{constructor(e,t,i,o){super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,zc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new zc(e,t,i,o)}}function Qw(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?zc._fromErrorAndOperation(n,l,e,i):l})}async function a1(n,e,t=!1){const i=await Rl(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return qi._forOperation(n,"link",i)}/**
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
 */async function l1(n,e,t=!1){const{auth:i}=n;if(zn(i.app))return Promise.reject(ji(i));const o="reauthenticate";try{const l=await Rl(n,Qw(i,o,e,n),t);ke(l.idToken,i,"internal-error");const c=Ip(l.idToken);ke(c,i,"internal-error");const{sub:f}=c;return ke(n.uid===f,i,"user-mismatch"),qi._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Hr(i,"user-mismatch"),l}}/**
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
 */async function u1(n,e,t=!1){if(zn(n.app))return Promise.reject(ji(n));const i="signIn",o=await Qw(n,i,e),l=await qi._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}function c1(n,e,t,i){return mt(n).onIdTokenChanged(e,t,i)}function h1(n,e,t){return mt(n).beforeAuthStateChanged(e,t)}const Bc="__sak";/**
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
 */class Yw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Bc,"1"),this.storage.removeItem(Bc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const d1=1e3,f1=10;class Jw extends Yw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ww(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,f,g)=>{this.notifyListeners(c,g)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);$C()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,f1):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},d1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jw.type="LOCAL";const p1=Jw;/**
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
 */class Xw extends Yw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Xw.type="SESSION";const Zw=Xw;/**
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
 */function m1(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class hh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new hh(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(c).map(async y=>y(t.origin,l)),g=await m1(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hh.receivers=[];/**
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
 */function Rp(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class g1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,c;return new Promise((f,g)=>{const y=Rp("",20);o.port1.start();const _=setTimeout(()=>{g(new Error("unsupported_event"))},i);c={messageChannel:o,onMessage(E){const I=E;if(I.data.eventId===y)switch(I.data.status){case"ack":clearTimeout(_),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(I.data.response);break;default:clearTimeout(_),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function yr(){return window}function y1(n){yr().location.href=n}/**
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
 */function eE(){return typeof yr().WorkerGlobalScope<"u"&&typeof yr().importScripts=="function"}async function v1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _1(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function w1(){return eE()?self:null}/**
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
 */const tE="firebaseLocalStorageDb",E1=1,$c="firebaseLocalStorage",nE="fbase_key";class Fl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function dh(n,e){return n.transaction([$c],e?"readwrite":"readonly").objectStore($c)}function T1(){const n=indexedDB.deleteDatabase(tE);return new Fl(n).toPromise()}function jf(){const n=indexedDB.open(tE,E1);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore($c,{keyPath:nE})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains($c)?e(i):(i.close(),await T1(),e(await jf()))})})}async function fv(n,e,t){const i=dh(n,!0).put({[nE]:e,value:t});return new Fl(i).toPromise()}async function I1(n,e){const t=dh(n,!1).get(e),i=await new Fl(t).toPromise();return i===void 0?null:i.value}function pv(n,e){const t=dh(n,!0).delete(e);return new Fl(t).toPromise()}const S1=800,A1=3;class rE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>A1)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return eE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hh._getInstance(w1()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await v1(),!this.activeServiceWorker)return;this.sender=new g1(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jf();return await fv(e,Bc,"1"),await pv(e,Bc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>fv(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>I1(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>pv(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=dh(o,!1).getAll();return new Fl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),S1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rE.type="LOCAL";const R1=rE;new Ml(3e4,6e4);/**
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
 */function C1(n,e){return e?$r(e):(ke(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Cp extends Gw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Qo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Qo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function k1(n){return u1(n.auth,new Cp(n),n.bypassAuthState)}function P1(n){const{auth:e,user:t}=n;return ke(t,e,"internal-error"),l1(t,new Cp(n),n.bypassAuthState)}async function x1(n){const{auth:e,user:t}=n;return ke(t,e,"internal-error"),a1(t,new Cp(n),n.bypassAuthState)}/**
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
 */class iE{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:c,type:f}=e;if(c){this.reject(c);return}const g={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(g))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return k1;case"linkViaPopup":case"linkViaRedirect":return x1;case"reauthViaPopup":case"reauthViaRedirect":return P1;default:Hr(this.auth,"internal-error")}}resolve(e){Gr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const b1=new Ml(2e3,1e4);class Wo extends iE{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,Wo.currentPopupAction&&Wo.currentPopupAction.cancel(),Wo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ke(e,this.auth,"internal-error"),e}async onExecution(){Gr(this.filter.length===1,"Popup operations only handle one event");const e=Rp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(gr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(gr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if((i=(t=this.authWindow)==null?void 0:t.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,b1.get())};e()}}Wo.currentPopupAction=null;/**
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
 */const N1="pendingRedirect",Sc=new Map;class D1 extends iE{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Sc.get(this.auth._key());if(!e){try{const i=await V1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Sc.set(this.auth._key(),e)}return this.bypassAuthState||Sc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function V1(n,e){const t=L1(e),i=M1(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function O1(n,e){Sc.set(n._key(),e)}function M1(n){return $r(n._redirectPersistence)}function L1(n){return Ic(N1,n.config.apiKey,n.name)}async function F1(n,e,t=!1){if(zn(n.app))return Promise.reject(ji(n));const i=ch(n),o=C1(i,e),c=await new D1(i,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
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
 */const U1=600*1e3;class j1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!z1(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!sE(e)){const o=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";t.onError(gr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=U1&&this.cachedEventUids.clear(),this.cachedEventUids.has(mv(e))}saveEventToCache(e){this.cachedEventUids.add(mv(e)),this.lastProcessedEventTime=Date.now()}}function mv(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function sE({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function z1(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sE(n);default:return!1}}/**
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
 */async function B1(n,e={}){return la(n,"GET","/v1/projects",e)}/**
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
 */const $1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,W1=/^https?/;async function q1(n){if(n.config.emulator)return;const{authorizedDomains:e}=await B1(n);for(const t of e)try{if(H1(t))return}catch{}Hr(n,"unauthorized-domain")}function H1(n){const e=Ff(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!W1.test(t))return!1;if($1.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const G1=new Ml(3e4,6e4);function gv(){const n=yr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function K1(n){return new Promise((e,t)=>{var o,l,c;function i(){gv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gv(),t(gr(n,"network-request-failed"))},timeout:G1.get()})}if((l=(o=yr().gapi)==null?void 0:o.iframes)!=null&&l.Iframe)e(gapi.iframes.getContext());else if((c=yr().gapi)!=null&&c.load)i();else{const f=XC("iframefcb");return yr()[f]=()=>{gapi.load?i():t(gr(n,"network-request-failed"))},YC(`${JC()}?onload=${f}`).catch(g=>t(g))}}).catch(e=>{throw Ac=null,e})}let Ac=null;function Q1(n){return Ac=Ac||K1(n),Ac}/**
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
 */const Y1=new Ml(5e3,15e3),J1="__/auth/iframe",X1="emulator/auth/iframe",Z1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ek=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tk(n){const e=n.config;ke(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Tp(e,X1):`https://${n.config.authDomain}/${J1}`,i={apiKey:e.apiKey,appName:n.name,v:aa},o=ek.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${Ol(i).slice(1)}`}async function nk(n){const e=await Q1(n),t=yr().gapi;return ke(t,n,"internal-error"),e.open({where:document.body,url:tk(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Z1,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const c=gr(n,"network-request-failed"),f=yr().setTimeout(()=>{l(c)},Y1.get());function g(){yr().clearTimeout(f),o(i)}i.ping(g).then(g,()=>{l(c)})}))}/**
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
 */const rk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ik=500,sk=600,ok="_blank",ak="http://localhost";class yv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lk(n,e,t,i=ik,o=sk){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const g={...rk,width:i.toString(),height:o.toString(),top:l,left:c},y=Kt().toLowerCase();t&&(f=Uw(y)?ok:t),Lw(y)&&(e=e||ak,g.scrollbars="yes");const _=Object.entries(g).reduce((I,[O,W])=>`${I}${O}=${W},`,"");if(BC(y)&&f!=="_self")return uk(e||"",f),new yv(null);const E=window.open(e||"",f,_);ke(E,n,"popup-blocked");try{E.focus()}catch{}return new yv(E)}function uk(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const ck="__/auth/handler",hk="emulator/auth/handler",dk=encodeURIComponent("fac");async function vv(n,e,t,i,o,l){ke(n.config.authDomain,n,"auth-domain-config-required"),ke(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:aa,eventId:o};if(e instanceof Kw){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",jS(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,E]of Object.entries({}))c[_]=E}if(e instanceof Ll){const _=e.getScopes().filter(E=>E!=="");_.length>0&&(c.scopes=_.join(","))}n.tenantId&&(c.tid=n.tenantId);const f=c;for(const _ of Object.keys(f))f[_]===void 0&&delete f[_];const g=await n._getAppCheckToken(),y=g?`#${dk}=${encodeURIComponent(g)}`:"";return`${fk(n)}?${Ol(f).slice(1)}${y}`}function fk({config:n}){return n.emulator?Tp(n,hk):`https://${n.authDomain}/${ck}`}/**
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
 */const yf="webStorageSupport";class pk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zw,this._completeRedirectFn=F1,this._overrideRedirectResult=O1}async _openPopup(e,t,i,o){var c;Gr((c=this.eventManagers[e._key()])==null?void 0:c.manager,"_initialize() not called before _openPopup()");const l=await vv(e,t,i,Ff(),o);return lk(e,l,Rp())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await vv(e,t,i,Ff(),o);return y1(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Gr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await nk(e),i=new j1(e);return t.register("authEvent",o=>(ke(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(yf,{type:yf},o=>{var c;const l=(c=o==null?void 0:o[0])==null?void 0:c[yf];l!==void 0&&t(!!l),Hr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=q1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ww()||Fw()||Sp()}}const mk=pk;var _v="@firebase/auth",wv="1.12.0";/**
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
 */class gk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ke(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function yk(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function vk(n){Er(new Wn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:f}=i.options;ke(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const g={apiKey:c,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qw(n)},y=new KC(i,o,l,g);return e1(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Er(new Wn("auth-internal",e=>{const t=ch(e.getProvider("auth").getImmediate());return(i=>new gk(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),xn(_v,wv,yk(n)),xn(_v,wv,"esm2020")}/**
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
 */const _k=300,wk=J_("authIdTokenMaxAge")||_k;let Ev=null;const Ek=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>wk)return;const o=t==null?void 0:t.token;Ev!==o&&(Ev=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Tk(n=pp()){const e=qs(n,"auth");if(e.isInitialized())return e.getImmediate();const t=ZC(n,{popupRedirectResolver:mk,persistence:[R1,p1,Zw]}),i=J_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const c=Ek(l.toString());h1(t,c,()=>c(t.currentUser)),c1(t,f=>c(f))}}const o=Q_("auth");return o&&t1(t,`http://${o}`),t}function Ik(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}QC({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=gr("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",Ik().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});vk("Browser");var Tv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zi,oE;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,S){function k(){}k.prototype=S.prototype,R.F=S.prototype,R.prototype=new k,R.prototype.constructor=R,R.D=function(b,x,D){for(var C=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)C[Be-2]=arguments[Be];return S.prototype[x].apply(b,C)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,t),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(R,S,k){k||(k=0);const b=Array(16);if(typeof S=="string")for(var x=0;x<16;++x)b[x]=S.charCodeAt(k++)|S.charCodeAt(k++)<<8|S.charCodeAt(k++)<<16|S.charCodeAt(k++)<<24;else for(x=0;x<16;++x)b[x]=S[k++]|S[k++]<<8|S[k++]<<16|S[k++]<<24;S=R.g[0],k=R.g[1],x=R.g[2];let D=R.g[3],C;C=S+(D^k&(x^D))+b[0]+3614090360&4294967295,S=k+(C<<7&4294967295|C>>>25),C=D+(x^S&(k^x))+b[1]+3905402710&4294967295,D=S+(C<<12&4294967295|C>>>20),C=x+(k^D&(S^k))+b[2]+606105819&4294967295,x=D+(C<<17&4294967295|C>>>15),C=k+(S^x&(D^S))+b[3]+3250441966&4294967295,k=x+(C<<22&4294967295|C>>>10),C=S+(D^k&(x^D))+b[4]+4118548399&4294967295,S=k+(C<<7&4294967295|C>>>25),C=D+(x^S&(k^x))+b[5]+1200080426&4294967295,D=S+(C<<12&4294967295|C>>>20),C=x+(k^D&(S^k))+b[6]+2821735955&4294967295,x=D+(C<<17&4294967295|C>>>15),C=k+(S^x&(D^S))+b[7]+4249261313&4294967295,k=x+(C<<22&4294967295|C>>>10),C=S+(D^k&(x^D))+b[8]+1770035416&4294967295,S=k+(C<<7&4294967295|C>>>25),C=D+(x^S&(k^x))+b[9]+2336552879&4294967295,D=S+(C<<12&4294967295|C>>>20),C=x+(k^D&(S^k))+b[10]+4294925233&4294967295,x=D+(C<<17&4294967295|C>>>15),C=k+(S^x&(D^S))+b[11]+2304563134&4294967295,k=x+(C<<22&4294967295|C>>>10),C=S+(D^k&(x^D))+b[12]+1804603682&4294967295,S=k+(C<<7&4294967295|C>>>25),C=D+(x^S&(k^x))+b[13]+4254626195&4294967295,D=S+(C<<12&4294967295|C>>>20),C=x+(k^D&(S^k))+b[14]+2792965006&4294967295,x=D+(C<<17&4294967295|C>>>15),C=k+(S^x&(D^S))+b[15]+1236535329&4294967295,k=x+(C<<22&4294967295|C>>>10),C=S+(x^D&(k^x))+b[1]+4129170786&4294967295,S=k+(C<<5&4294967295|C>>>27),C=D+(k^x&(S^k))+b[6]+3225465664&4294967295,D=S+(C<<9&4294967295|C>>>23),C=x+(S^k&(D^S))+b[11]+643717713&4294967295,x=D+(C<<14&4294967295|C>>>18),C=k+(D^S&(x^D))+b[0]+3921069994&4294967295,k=x+(C<<20&4294967295|C>>>12),C=S+(x^D&(k^x))+b[5]+3593408605&4294967295,S=k+(C<<5&4294967295|C>>>27),C=D+(k^x&(S^k))+b[10]+38016083&4294967295,D=S+(C<<9&4294967295|C>>>23),C=x+(S^k&(D^S))+b[15]+3634488961&4294967295,x=D+(C<<14&4294967295|C>>>18),C=k+(D^S&(x^D))+b[4]+3889429448&4294967295,k=x+(C<<20&4294967295|C>>>12),C=S+(x^D&(k^x))+b[9]+568446438&4294967295,S=k+(C<<5&4294967295|C>>>27),C=D+(k^x&(S^k))+b[14]+3275163606&4294967295,D=S+(C<<9&4294967295|C>>>23),C=x+(S^k&(D^S))+b[3]+4107603335&4294967295,x=D+(C<<14&4294967295|C>>>18),C=k+(D^S&(x^D))+b[8]+1163531501&4294967295,k=x+(C<<20&4294967295|C>>>12),C=S+(x^D&(k^x))+b[13]+2850285829&4294967295,S=k+(C<<5&4294967295|C>>>27),C=D+(k^x&(S^k))+b[2]+4243563512&4294967295,D=S+(C<<9&4294967295|C>>>23),C=x+(S^k&(D^S))+b[7]+1735328473&4294967295,x=D+(C<<14&4294967295|C>>>18),C=k+(D^S&(x^D))+b[12]+2368359562&4294967295,k=x+(C<<20&4294967295|C>>>12),C=S+(k^x^D)+b[5]+4294588738&4294967295,S=k+(C<<4&4294967295|C>>>28),C=D+(S^k^x)+b[8]+2272392833&4294967295,D=S+(C<<11&4294967295|C>>>21),C=x+(D^S^k)+b[11]+1839030562&4294967295,x=D+(C<<16&4294967295|C>>>16),C=k+(x^D^S)+b[14]+4259657740&4294967295,k=x+(C<<23&4294967295|C>>>9),C=S+(k^x^D)+b[1]+2763975236&4294967295,S=k+(C<<4&4294967295|C>>>28),C=D+(S^k^x)+b[4]+1272893353&4294967295,D=S+(C<<11&4294967295|C>>>21),C=x+(D^S^k)+b[7]+4139469664&4294967295,x=D+(C<<16&4294967295|C>>>16),C=k+(x^D^S)+b[10]+3200236656&4294967295,k=x+(C<<23&4294967295|C>>>9),C=S+(k^x^D)+b[13]+681279174&4294967295,S=k+(C<<4&4294967295|C>>>28),C=D+(S^k^x)+b[0]+3936430074&4294967295,D=S+(C<<11&4294967295|C>>>21),C=x+(D^S^k)+b[3]+3572445317&4294967295,x=D+(C<<16&4294967295|C>>>16),C=k+(x^D^S)+b[6]+76029189&4294967295,k=x+(C<<23&4294967295|C>>>9),C=S+(k^x^D)+b[9]+3654602809&4294967295,S=k+(C<<4&4294967295|C>>>28),C=D+(S^k^x)+b[12]+3873151461&4294967295,D=S+(C<<11&4294967295|C>>>21),C=x+(D^S^k)+b[15]+530742520&4294967295,x=D+(C<<16&4294967295|C>>>16),C=k+(x^D^S)+b[2]+3299628645&4294967295,k=x+(C<<23&4294967295|C>>>9),C=S+(x^(k|~D))+b[0]+4096336452&4294967295,S=k+(C<<6&4294967295|C>>>26),C=D+(k^(S|~x))+b[7]+1126891415&4294967295,D=S+(C<<10&4294967295|C>>>22),C=x+(S^(D|~k))+b[14]+2878612391&4294967295,x=D+(C<<15&4294967295|C>>>17),C=k+(D^(x|~S))+b[5]+4237533241&4294967295,k=x+(C<<21&4294967295|C>>>11),C=S+(x^(k|~D))+b[12]+1700485571&4294967295,S=k+(C<<6&4294967295|C>>>26),C=D+(k^(S|~x))+b[3]+2399980690&4294967295,D=S+(C<<10&4294967295|C>>>22),C=x+(S^(D|~k))+b[10]+4293915773&4294967295,x=D+(C<<15&4294967295|C>>>17),C=k+(D^(x|~S))+b[1]+2240044497&4294967295,k=x+(C<<21&4294967295|C>>>11),C=S+(x^(k|~D))+b[8]+1873313359&4294967295,S=k+(C<<6&4294967295|C>>>26),C=D+(k^(S|~x))+b[15]+4264355552&4294967295,D=S+(C<<10&4294967295|C>>>22),C=x+(S^(D|~k))+b[6]+2734768916&4294967295,x=D+(C<<15&4294967295|C>>>17),C=k+(D^(x|~S))+b[13]+1309151649&4294967295,k=x+(C<<21&4294967295|C>>>11),C=S+(x^(k|~D))+b[4]+4149444226&4294967295,S=k+(C<<6&4294967295|C>>>26),C=D+(k^(S|~x))+b[11]+3174756917&4294967295,D=S+(C<<10&4294967295|C>>>22),C=x+(S^(D|~k))+b[2]+718787259&4294967295,x=D+(C<<15&4294967295|C>>>17),C=k+(D^(x|~S))+b[9]+3951481745&4294967295,R.g[0]=R.g[0]+S&4294967295,R.g[1]=R.g[1]+(x+(C<<21&4294967295|C>>>11))&4294967295,R.g[2]=R.g[2]+x&4294967295,R.g[3]=R.g[3]+D&4294967295}i.prototype.v=function(R,S){S===void 0&&(S=R.length);const k=S-this.blockSize,b=this.C;let x=this.h,D=0;for(;D<S;){if(x==0)for(;D<=k;)o(this,R,D),D+=this.blockSize;if(typeof R=="string"){for(;D<S;)if(b[x++]=R.charCodeAt(D++),x==this.blockSize){o(this,b),x=0;break}}else for(;D<S;)if(b[x++]=R[D++],x==this.blockSize){o(this,b),x=0;break}}this.h=x,this.o+=S},i.prototype.A=function(){var R=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);R[0]=128;for(var S=1;S<R.length-8;++S)R[S]=0;S=this.o*8;for(var k=R.length-8;k<R.length;++k)R[k]=S&255,S/=256;for(this.v(R),R=Array(16),S=0,k=0;k<4;++k)for(let b=0;b<32;b+=8)R[S++]=this.g[k]>>>b&255;return R};function l(R,S){var k=f;return Object.prototype.hasOwnProperty.call(k,R)?k[R]:k[R]=S(R)}function c(R,S){this.h=S;const k=[];let b=!0;for(let x=R.length-1;x>=0;x--){const D=R[x]|0;b&&D==S||(k[x]=D,b=!1)}this.g=k}var f={};function g(R){return-128<=R&&R<128?l(R,function(S){return new c([S|0],S<0?-1:0)}):new c([R|0],R<0?-1:0)}function y(R){if(isNaN(R)||!isFinite(R))return E;if(R<0)return z(y(-R));const S=[];let k=1;for(let b=0;R>=k;b++)S[b]=R/k|0,k*=4294967296;return new c(S,0)}function _(R,S){if(R.length==0)throw Error("number format error: empty string");if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(R.charAt(0)=="-")return z(_(R.substring(1),S));if(R.indexOf("-")>=0)throw Error('number format error: interior "-" character');const k=y(Math.pow(S,8));let b=E;for(let D=0;D<R.length;D+=8){var x=Math.min(8,R.length-D);const C=parseInt(R.substring(D,D+x),S);x<8?(x=y(Math.pow(S,x)),b=b.j(x).add(y(C))):(b=b.j(k),b=b.add(y(C)))}return b}var E=g(0),I=g(1),O=g(16777216);n=c.prototype,n.m=function(){if(M(this))return-z(this).m();let R=0,S=1;for(let k=0;k<this.g.length;k++){const b=this.i(k);R+=(b>=0?b:4294967296+b)*S,S*=4294967296}return R},n.toString=function(R){if(R=R||10,R<2||36<R)throw Error("radix out of range: "+R);if(W(this))return"0";if(M(this))return"-"+z(this).toString(R);const S=y(Math.pow(R,6));var k=this;let b="";for(;;){const x=le(k,S).g;k=ee(k,x.j(S));let D=((k.g.length>0?k.g[0]:k.h)>>>0).toString(R);if(k=x,W(k))return D+b;for(;D.length<6;)D="0"+D;b=D+b}},n.i=function(R){return R<0?0:R<this.g.length?this.g[R]:this.h};function W(R){if(R.h!=0)return!1;for(let S=0;S<R.g.length;S++)if(R.g[S]!=0)return!1;return!0}function M(R){return R.h==-1}n.l=function(R){return R=ee(this,R),M(R)?-1:W(R)?0:1};function z(R){const S=R.g.length,k=[];for(let b=0;b<S;b++)k[b]=~R.g[b];return new c(k,~R.h).add(I)}n.abs=function(){return M(this)?z(this):this},n.add=function(R){const S=Math.max(this.g.length,R.g.length),k=[];let b=0;for(let x=0;x<=S;x++){let D=b+(this.i(x)&65535)+(R.i(x)&65535),C=(D>>>16)+(this.i(x)>>>16)+(R.i(x)>>>16);b=C>>>16,D&=65535,C&=65535,k[x]=C<<16|D}return new c(k,k[k.length-1]&-2147483648?-1:0)};function ee(R,S){return R.add(z(S))}n.j=function(R){if(W(this)||W(R))return E;if(M(this))return M(R)?z(this).j(z(R)):z(z(this).j(R));if(M(R))return z(this.j(z(R)));if(this.l(O)<0&&R.l(O)<0)return y(this.m()*R.m());const S=this.g.length+R.g.length,k=[];for(var b=0;b<2*S;b++)k[b]=0;for(b=0;b<this.g.length;b++)for(let x=0;x<R.g.length;x++){const D=this.i(b)>>>16,C=this.i(b)&65535,Be=R.i(x)>>>16,Ge=R.i(x)&65535;k[2*b+2*x]+=C*Ge,ne(k,2*b+2*x),k[2*b+2*x+1]+=D*Ge,ne(k,2*b+2*x+1),k[2*b+2*x+1]+=C*Be,ne(k,2*b+2*x+1),k[2*b+2*x+2]+=D*Be,ne(k,2*b+2*x+2)}for(R=0;R<S;R++)k[R]=k[2*R+1]<<16|k[2*R];for(R=S;R<2*S;R++)k[R]=0;return new c(k,0)};function ne(R,S){for(;(R[S]&65535)!=R[S];)R[S+1]+=R[S]>>>16,R[S]&=65535,S++}function se(R,S){this.g=R,this.h=S}function le(R,S){if(W(S))throw Error("division by zero");if(W(R))return new se(E,E);if(M(R))return S=le(z(R),S),new se(z(S.g),z(S.h));if(M(S))return S=le(R,z(S)),new se(z(S.g),S.h);if(R.g.length>30){if(M(R)||M(S))throw Error("slowDivide_ only works with positive integers.");for(var k=I,b=S;b.l(R)<=0;)k=oe(k),b=oe(b);var x=ce(k,1),D=ce(b,1);for(b=ce(b,2),k=ce(k,2);!W(b);){var C=D.add(b);C.l(R)<=0&&(x=x.add(k),D=C),b=ce(b,1),k=ce(k,1)}return S=ee(R,x.j(S)),new se(x,S)}for(x=E;R.l(S)>=0;){for(k=Math.max(1,Math.floor(R.m()/S.m())),b=Math.ceil(Math.log(k)/Math.LN2),b=b<=48?1:Math.pow(2,b-48),D=y(k),C=D.j(S);M(C)||C.l(R)>0;)k-=b,D=y(k),C=D.j(S);W(D)&&(D=I),x=x.add(D),R=ee(R,C)}return new se(x,R)}n.B=function(R){return le(this,R).h},n.and=function(R){const S=Math.max(this.g.length,R.g.length),k=[];for(let b=0;b<S;b++)k[b]=this.i(b)&R.i(b);return new c(k,this.h&R.h)},n.or=function(R){const S=Math.max(this.g.length,R.g.length),k=[];for(let b=0;b<S;b++)k[b]=this.i(b)|R.i(b);return new c(k,this.h|R.h)},n.xor=function(R){const S=Math.max(this.g.length,R.g.length),k=[];for(let b=0;b<S;b++)k[b]=this.i(b)^R.i(b);return new c(k,this.h^R.h)};function oe(R){const S=R.g.length+1,k=[];for(let b=0;b<S;b++)k[b]=R.i(b)<<1|R.i(b-1)>>>31;return new c(k,R.h)}function ce(R,S){const k=S>>5;S%=32;const b=R.g.length-k,x=[];for(let D=0;D<b;D++)x[D]=S>0?R.i(D+k)>>>S|R.i(D+k+1)<<32-S:R.i(D+k);return new c(x,R.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,oE=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.B,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=y,c.fromString=_,zi=c}).apply(typeof Tv<"u"?Tv:typeof self<"u"?self:typeof window<"u"?window:{});var cc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var aE,fl,lE,Rc,zf,uE,cE,hE;(function(){var n,e=Object.defineProperty;function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof cc=="object"&&cc];for(var m=0;m<u.length;++m){var v=u[m];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var v=i;u=u.split(".");for(var T=0;T<u.length-1;T++){var F=u[T];if(!(F in v))break e;v=v[F]}u=u[u.length-1],T=v[u],m=m(T),m!=T&&m!=null&&e(v,u,{configurable:!0,writable:!0,value:m})}}o("Symbol.dispose",function(u){return u||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(u){return u||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(u){return u||function(m){var v=[],T;for(T in m)Object.prototype.hasOwnProperty.call(m,T)&&v.push([T,m[T]]);return v}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},c=this||self;function f(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function g(u,m,v){return u.call.apply(u.bind,arguments)}function y(u,m,v){return y=g,y.apply(null,arguments)}function _(u,m){var v=Array.prototype.slice.call(arguments,1);return function(){var T=v.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function E(u,m){function v(){}v.prototype=m.prototype,u.Z=m.prototype,u.prototype=new v,u.prototype.constructor=u,u.Ob=function(T,F,$){for(var re=Array(arguments.length-2),be=2;be<arguments.length;be++)re[be-2]=arguments[be];return m.prototype[F].apply(T,re)}}var I=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?u=>u&&AsyncContext.Snapshot.wrap(u):u=>u;function O(u){const m=u.length;if(m>0){const v=Array(m);for(let T=0;T<m;T++)v[T]=u[T];return v}return[]}function W(u,m){for(let T=1;T<arguments.length;T++){const F=arguments[T];var v=typeof F;if(v=v!="object"?v:F?Array.isArray(F)?"array":v:"null",v=="array"||v=="object"&&typeof F.length=="number"){v=u.length||0;const $=F.length||0;u.length=v+$;for(let re=0;re<$;re++)u[v+re]=F[re]}else u.push(F)}}class M{constructor(m,v){this.i=m,this.j=v,this.h=0,this.g=null}get(){let m;return this.h>0?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function z(u){c.setTimeout(()=>{throw u},0)}function ee(){var u=R;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class ne{constructor(){this.h=this.g=null}add(m,v){const T=se.get();T.set(m,v),this.h?this.h.next=T:this.g=T,this.h=T}}var se=new M(()=>new le,u=>u.reset());class le{constructor(){this.next=this.g=this.h=null}set(m,v){this.h=m,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let oe,ce=!1,R=new ne,S=()=>{const u=Promise.resolve(void 0);oe=()=>{u.then(k)}};function k(){for(var u;u=ee();){try{u.h.call(u.g)}catch(v){z(v)}var m=se;m.j(u),m.h<100&&(m.h++,u.next=m.g,m.g=u)}ce=!1}function b(){this.u=this.u,this.C=this.C}b.prototype.u=!1,b.prototype.dispose=function(){this.u||(this.u=!0,this.N())},b.prototype[Symbol.dispose]=function(){this.dispose()},b.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function x(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}x.prototype.h=function(){this.defaultPrevented=!0};var D=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const v=()=>{};c.addEventListener("test",v,m),c.removeEventListener("test",v,m)}catch{}return u})();function C(u){return/^[\s\xa0]*$/.test(u)}function Be(u,m){x.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u&&this.init(u,m)}E(Be,x),Be.prototype.init=function(u,m){const v=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget,m||(v=="mouseover"?m=u.fromElement:v=="mouseout"&&(m=u.toElement)),this.relatedTarget=m,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=u.pointerType,this.state=u.state,this.i=u,u.defaultPrevented&&Be.Z.h.call(this)},Be.prototype.h=function(){Be.Z.h.call(this);const u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Ge="closure_listenable_"+(Math.random()*1e6|0),Qe=0;function Ue(u,m,v,T,F){this.listener=u,this.proxy=null,this.src=m,this.type=v,this.capture=!!T,this.ha=F,this.key=++Qe,this.da=this.fa=!1}function q(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function we(u,m,v){for(const T in u)m.call(v,u[T],T,u)}function ae(u,m){for(const v in u)m.call(void 0,u[v],v,u)}function V(u){const m={};for(const v in u)m[v]=u[v];return m}const Q="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ve(u,m){let v,T;for(let F=1;F<arguments.length;F++){T=arguments[F];for(v in T)u[v]=T[v];for(let $=0;$<Q.length;$++)v=Q[$],Object.prototype.hasOwnProperty.call(T,v)&&(u[v]=T[v])}}function Ee(u){this.src=u,this.g={},this.h=0}Ee.prototype.add=function(u,m,v,T,F){const $=u.toString();u=this.g[$],u||(u=this.g[$]=[],this.h++);const re=X(u,m,T,F);return re>-1?(m=u[re],v||(m.fa=!1)):(m=new Ue(m,this.src,$,!!T,F),m.fa=v,u.push(m)),m};function xe(u,m){const v=m.type;if(v in u.g){var T=u.g[v],F=Array.prototype.indexOf.call(T,m,void 0),$;($=F>=0)&&Array.prototype.splice.call(T,F,1),$&&(q(m),u.g[v].length==0&&(delete u.g[v],u.h--))}}function X(u,m,v,T){for(let F=0;F<u.length;++F){const $=u[F];if(!$.da&&$.listener==m&&$.capture==!!v&&$.ha==T)return F}return-1}var de="closure_lm_"+(Math.random()*1e6|0),Ne={};function We(u,m,v,T,F){if(Array.isArray(m)){for(let $=0;$<m.length;$++)We(u,m[$],v,T,F);return null}return v=ga(v),u&&u[Ge]?u.J(m,v,f(T)?!!T.capture:!1,F):gt(u,m,v,!1,T,F)}function gt(u,m,v,T,F,$){if(!m)throw Error("Invalid event type");const re=f(F)?!!F.capture:!!F;let be=Qs(u);if(be||(u[de]=be=new Ee(u)),v=be.add(m,v,T,re,$),v.proxy)return v;if(T=Kn(),v.proxy=T,T.src=u,T.listener=v,u.addEventListener)D||(F=re),F===void 0&&(F=!1),u.addEventListener(m.toString(),T,F);else if(u.attachEvent)u.attachEvent(Ks(m.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Kn(){function u(v){return m.call(u.src,u.listener,v)}const m=Gl;return u}function Qn(u,m,v,T,F){if(Array.isArray(m))for(var $=0;$<m.length;$++)Qn(u,m[$],v,T,F);else T=f(T)?!!T.capture:!!T,v=ga(v),u&&u[Ge]?(u=u.i,$=String(m).toString(),$ in u.g&&(m=u.g[$],v=X(m,v,T,F),v>-1&&(q(m[v]),Array.prototype.splice.call(m,v,1),m.length==0&&(delete u.g[$],u.h--)))):u&&(u=Qs(u))&&(m=u.g[m.toString()],u=-1,m&&(u=X(m,v,T,F)),(v=u>-1?m[u]:null)&&Zr(v))}function Zr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Ge])xe(m.i,u);else{var v=u.type,T=u.proxy;m.removeEventListener?m.removeEventListener(v,T,u.capture):m.detachEvent?m.detachEvent(Ks(v),T):m.addListener&&m.removeListener&&m.removeListener(T),(v=Qs(m))?(xe(v,u),v.h==0&&(v.src=null,m[de]=null)):q(u)}}}function Ks(u){return u in Ne?Ne[u]:Ne[u]="on"+u}function Gl(u,m){if(u.da)u=!0;else{m=new Be(m,this);const v=u.listener,T=u.ha||u.src;u.fa&&Zr(u),u=v.call(T,m)}return u}function Qs(u){return u=u[de],u instanceof Ee?u:null}var is="__closure_events_fn_"+(Math.random()*1e9>>>0);function ga(u){return typeof u=="function"?u:(u[is]||(u[is]=function(m){return u.handleEvent(m)}),u[is])}function yt(){b.call(this),this.i=new Ee(this),this.M=this,this.G=null}E(yt,b),yt.prototype[Ge]=!0,yt.prototype.removeEventListener=function(u,m,v,T){Qn(this,u,m,v,T)};function ct(u,m){var v,T=u.G;if(T)for(v=[];T;T=T.G)v.push(T);if(u=u.M,T=m.type||m,typeof m=="string")m=new x(m,u);else if(m instanceof x)m.target=m.target||u;else{var F=m;m=new x(T,u),ve(m,F)}F=!0;let $,re;if(v)for(re=v.length-1;re>=0;re--)$=m.g=v[re],F=bn($,T,!0,m)&&F;if($=m.g=u,F=bn($,T,!0,m)&&F,F=bn($,T,!1,m)&&F,v)for(re=0;re<v.length;re++)$=m.g=v[re],F=bn($,T,!1,m)&&F}yt.prototype.N=function(){if(yt.Z.N.call(this),this.i){var u=this.i;for(const m in u.g){const v=u.g[m];for(let T=0;T<v.length;T++)q(v[T]);delete u.g[m],u.h--}}this.G=null},yt.prototype.J=function(u,m,v,T){return this.i.add(String(u),m,!1,v,T)},yt.prototype.K=function(u,m,v,T){return this.i.add(String(u),m,!0,v,T)};function bn(u,m,v,T){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();let F=!0;for(let $=0;$<m.length;++$){const re=m[$];if(re&&!re.da&&re.capture==v){const be=re.listener,ht=re.ha||re.src;re.fa&&xe(u.i,re),F=be.call(ht,T)!==!1&&F}}return F&&!T.defaultPrevented}function ya(u,m){if(typeof u!="function")if(u&&typeof u.handleEvent=="function")u=y(u.handleEvent,u);else throw Error("Invalid listener argument");return Number(m)>2147483647?-1:c.setTimeout(u,m||0)}function va(u){u.g=ya(()=>{u.g=null,u.i&&(u.i=!1,va(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Kl extends b{constructor(m,v){super(),this.m=m,this.l=v,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:va(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ei(u){b.call(this),this.h=u,this.g={}}E(ei,b);var _a=[];function Ys(u){we(u.g,function(m,v){this.g.hasOwnProperty(v)&&Zr(m)},u),u.g={}}ei.prototype.N=function(){ei.Z.N.call(this),Ys(this)},ei.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ti=c.JSON.stringify,Ql=c.JSON.parse,ss=class{stringify(u){return c.JSON.stringify(u,void 0)}parse(u){return c.JSON.parse(u,void 0)}};function ni(){}function Yl(){}var ri={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Js(){x.call(this,"d")}E(Js,x);function wa(){x.call(this,"c")}E(wa,x);var Nn={},Xs=null;function ii(){return Xs=Xs||new yt}Nn.Ia="serverreachability";function Zs(u){x.call(this,Nn.Ia,u)}E(Zs,x);function Ir(u){const m=ii();ct(m,new Zs(m))}Nn.STAT_EVENT="statevent";function Sr(u,m){x.call(this,Nn.STAT_EVENT,u),this.stat=m}E(Sr,x);function lt(u){const m=ii();ct(m,new Sr(m,u))}Nn.Ja="timingevent";function Ea(u,m){x.call(this,Nn.Ja,u),this.size=m}E(Ea,x);function si(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){u()},m)}function oi(){this.g=!0}oi.prototype.ua=function(){this.g=!1};function Jl(u,m,v,T,F,$){u.info(function(){if(u.g)if($){var re="",be=$.split("&");for(let Ke=0;Ke<be.length;Ke++){var ht=be[Ke].split("=");if(ht.length>1){const vt=ht[0];ht=ht[1];const fn=vt.split("_");re=fn.length>=2&&fn[1]=="type"?re+(vt+"="+ht+"&"):re+(vt+"=redacted&")}}}else re=null;else re=$;return"XMLHTTP REQ ("+T+") [attempt "+F+"]: "+m+`
`+v+`
`+re})}function Xl(u,m,v,T,F,$,re){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+F+"]: "+m+`
`+v+`
`+$+" "+re})}function Yn(u,m,v,T){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+os(u,v)+(T?" "+T:"")})}function Zl(u,m){u.info(function(){return"TIMEOUT: "+m})}oi.prototype.info=function(){};function os(u,m){if(!u.g)return m;if(!m)return null;try{const $=JSON.parse(m);if($){for(u=0;u<$.length;u++)if(Array.isArray($[u])){var v=$[u];if(!(v.length<2)){var T=v[1];if(Array.isArray(T)&&!(T.length<1)){var F=T[0];if(F!="noop"&&F!="stop"&&F!="close")for(let re=1;re<T.length;re++)T[re]=""}}}}return ti($)}catch{return m}}var ai={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},li={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},eu;function Ar(){}E(Ar,ni),Ar.prototype.g=function(){return new XMLHttpRequest},eu=new Ar;function Jn(u){return encodeURIComponent(String(u))}function eo(u){var m=1;u=u.split(":");const v=[];for(;m>0&&u.length;)v.push(u.shift()),m--;return u.length&&v.push(u.join(":")),v}function Tn(u,m,v,T){this.j=u,this.i=m,this.l=v,this.S=T||1,this.V=new ei(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new tu}function tu(){this.i=null,this.g="",this.h=!1}var nu={},Ta={};function Dn(u,m,v){u.M=1,u.A=Cr(In(m)),u.u=v,u.R=!0,Ia(u,null)}function Ia(u,m){u.F=Date.now(),as(u),u.B=In(u.A);var v=u.B,T=u.S;Array.isArray(T)||(T=[String(T)]),Da(v.i,"t",T),u.C=0,v=u.j.L,u.h=new tu,u.g=du(u.j,v?m:null,!u.u),u.P>0&&(u.O=new Kl(y(u.Y,u,u.g),u.P)),m=u.V,v=u.g,T=u.ba;var F="readystatechange";Array.isArray(F)||(F&&(_a[0]=F.toString()),F=_a);for(let $=0;$<F.length;$++){const re=We(v,F[$],T||m.handleEvent,!1,m.h||m);if(!re)break;m.g[re.key]=re}m=u.J?V(u.J):{},u.u?(u.v||(u.v="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.B,u.v,u.u,m)):(u.v="GET",u.g.ea(u.B,u.v,null,m)),Ir(),Jl(u.i,u.v,u.B,u.l,u.S,u.u)}Tn.prototype.ba=function(u){u=u.target;const m=this.O;m&&ir(u)==3?m.j():this.Y(u)},Tn.prototype.Y=function(u){try{if(u==this.g)e:{const be=ir(this.g),ht=this.g.ya(),Ke=this.g.ca();if(!(be<3)&&(be!=3||this.g&&(this.h.h||this.g.la()||cu(this.g)))){this.K||be!=4||ht==7||(ht==8||Ke<=0?Ir(3):Ir(2)),to(this);var m=this.g.ca();this.X=m;var v=ru(this);if(this.o=m==200,Xl(this.i,this.v,this.B,this.l,this.S,be,m),this.o){if(this.U&&!this.L){t:{if(this.g){var T,F=this.g;if((T=F.g?F.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(T)){var $=T;break t}}$=null}if(u=$)Yn(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ze(this,u);else{this.o=!1,this.m=3,lt(12),Rr(this),ls(this);break e}}if(this.R){u=!0;let vt;for(;!this.K&&this.C<v.length;)if(vt=su(this,v),vt==Ta){be==4&&(this.m=4,lt(14),u=!1),Yn(this.i,this.l,null,"[Incomplete Response]");break}else if(vt==nu){this.m=4,lt(15),Yn(this.i,this.l,v,"[Invalid Chunk]"),u=!1;break}else Yn(this.i,this.l,vt,null),Ze(this,vt);if(iu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),be!=4||v.length!=0||this.h.h||(this.m=1,lt(16),u=!1),this.o=this.o&&u,!u)Yn(this.i,this.l,v,"[Invalid Chunked Response]"),Rr(this),ls(this);else if(v.length>0&&!this.W){this.W=!0;var re=this.j;re.g==this&&re.aa&&!re.P&&(re.j.info("Great, no buffering proxy detected. Bytes received: "+v.length),ys(re),re.P=!0,lt(11))}}else Yn(this.i,this.l,v,null),Ze(this,v);be==4&&Rr(this),this.o&&!this.K&&(be==4?ho(this.j,this):(this.o=!1,as(this)))}else Oa(this.g),m==400&&v.indexOf("Unknown SID")>0?(this.m=3,lt(12)):(this.m=0,lt(13)),Rr(this),ls(this)}}}catch{}finally{}};function ru(u){if(!iu(u))return u.g.la();const m=cu(u.g);if(m==="")return"";let v="";const T=m.length,F=ir(u.g)==4;if(!u.h.i){if(typeof TextDecoder>"u")return Rr(u),ls(u),"";u.h.i=new c.TextDecoder}for(let $=0;$<T;$++)u.h.h=!0,v+=u.h.i.decode(m[$],{stream:!(F&&$==T-1)});return m.length=0,u.h.g+=v,u.C=0,u.h.g}function iu(u){return u.g?u.v=="GET"&&u.M!=2&&u.j.Aa:!1}function su(u,m){var v=u.C,T=m.indexOf(`
`,v);return T==-1?Ta:(v=Number(m.substring(v,T)),isNaN(v)?nu:(T+=1,T+v>m.length?Ta:(m=m.slice(T,T+v),u.C=T+v,m)))}Tn.prototype.cancel=function(){this.K=!0,Rr(this)};function as(u){u.T=Date.now()+u.H,Sa(u,u.H)}function Sa(u,m){if(u.D!=null)throw Error("WatchDog timer not null");u.D=si(y(u.aa,u),m)}function to(u){u.D&&(c.clearTimeout(u.D),u.D=null)}Tn.prototype.aa=function(){this.D=null;const u=Date.now();u-this.T>=0?(Zl(this.i,this.B),this.M!=2&&(Ir(),lt(17)),Rr(this),this.m=2,ls(this)):Sa(this,this.T-u)};function ls(u){u.j.I==0||u.K||ho(u.j,u)}function Rr(u){to(u);var m=u.O;m&&typeof m.dispose=="function"&&m.dispose(),u.O=null,Ys(u.V),u.g&&(m=u.g,u.g=null,m.abort(),m.dispose())}function Ze(u,m){try{var v=u.j;if(v.I!=0&&(v.g==u||Ra(v.h,u))){if(!u.L&&Ra(v.h,u)&&v.I==3){try{var T=v.Ba.g.parse(m)}catch{T=null}if(Array.isArray(T)&&T.length==3){var F=T;if(F[0]==0){e:if(!v.v){if(v.g)if(v.g.F+3e3<u.F)co(v),hn(v);else break e;ar(v),lt(18)}}else v.xa=F[1],0<v.xa-v.K&&F[2]<37500&&v.F&&v.A==0&&!v.C&&(v.C=si(y(v.Va,v),6e3));us(v.h)<=1&&v.ta&&(v.ta=void 0)}else dn(v,11)}else if((u.L||v.g==u)&&co(v),!C(m))for(F=v.Ba.g.parse(m),m=0;m<F.length;m++){let Ke=F[m];const vt=Ke[0];if(!(vt<=v.K))if(v.K=vt,Ke=Ke[1],v.I==2)if(Ke[0]=="c"){v.M=Ke[1],v.ba=Ke[2];const fn=Ke[3];fn!=null&&(v.ka=fn,v.j.info("VER="+v.ka));const Nr=Ke[4];Nr!=null&&(v.za=Nr,v.j.info("SVER="+v.za));const lr=Ke[5];lr!=null&&typeof lr=="number"&&lr>0&&(T=1.5*lr,v.O=T,v.j.info("backChannelRequestTimeoutMs_="+T)),T=v;const ur=u.g;if(ur){const mo=ur.g?ur.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(mo){var $=T.h;$.g||mo.indexOf("spdy")==-1&&mo.indexOf("quic")==-1&&mo.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(ro($,$.h),$.h=null))}if(T.G){const Fa=ur.g?ur.g.getResponseHeader("X-HTTP-Session-Id"):null;Fa&&(T.wa=Fa,He(T.J,T.G,Fa))}}v.I=3,v.l&&v.l.ra(),v.aa&&(v.T=Date.now()-u.F,v.j.info("Handshake RTT: "+v.T+"ms")),T=v;var re=u;if(T.na=La(T,T.L?T.ba:null,T.W),re.L){cs(T.h,re);var be=re,ht=T.O;ht&&(be.H=ht),be.D&&(to(be),as(be)),T.g=re}else zt(T);v.i.length>0&&br(v)}else Ke[0]!="stop"&&Ke[0]!="close"||dn(v,7);else v.I==3&&(Ke[0]=="stop"||Ke[0]=="close"?Ke[0]=="stop"?dn(v,7):lo(v):Ke[0]!="noop"&&v.l&&v.l.qa(Ke),v.A=0)}}Ir(4)}catch{}}var Dh=class{constructor(u,m){this.g=u,this.map=m}};function no(u){this.l=u||10,c.PerformanceNavigationTiming?(u=c.performance.getEntriesByType("navigation"),u=u.length>0&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Aa(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function us(u){return u.h?1:u.g?u.g.size:0}function Ra(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function ro(u,m){u.g?u.g.add(m):u.h=m}function cs(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}no.prototype.cancel=function(){if(this.i=ln(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function ln(u){if(u.h!=null)return u.i.concat(u.h.G);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const v of u.g.values())m=m.concat(v.G);return m}return O(u.i)}var ou=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function un(u,m){if(u){u=u.split("&");for(let v=0;v<u.length;v++){const T=u[v].indexOf("=");let F,$=null;T>=0?(F=u[v].substring(0,T),$=u[v].substring(T+1)):F=u[v],m(F,$?decodeURIComponent($.replace(/\+/g," ")):"")}}}function Xn(u){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let m;u instanceof Xn?(this.l=u.l,hs(this,u.j),this.o=u.o,this.g=u.g,Zn(this,u.u),this.h=u.h,ui(this,Va(u.i)),this.m=u.m):u&&(m=String(u).match(ou))?(this.l=!1,hs(this,m[1]||"",!0),this.o=ds(m[2]||""),this.g=ds(m[3]||"",!0),Zn(this,m[4]),this.h=ds(m[5]||"",!0),ui(this,m[6]||"",!0),this.m=ds(m[7]||"")):(this.l=!1,this.i=new Fe(null,this.l))}Xn.prototype.toString=function(){const u=[];var m=this.j;m&&u.push(fs(m,ka,!0),":");var v=this.g;return(v||m=="file")&&(u.push("//"),(m=this.o)&&u.push(fs(m,ka,!0),"@"),u.push(Jn(v).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.u,v!=null&&u.push(":",String(v))),(v=this.h)&&(this.g&&v.charAt(0)!="/"&&u.push("/"),u.push(fs(v,v.charAt(0)=="/"?ps:Pa,!0))),(v=this.i.toString())&&u.push("?",v),(v=this.m)&&u.push("#",fs(v,xa)),u.join("")},Xn.prototype.resolve=function(u){const m=In(this);let v=!!u.j;v?hs(m,u.j):v=!!u.o,v?m.o=u.o:v=!!u.g,v?m.g=u.g:v=u.u!=null;var T=u.h;if(v)Zn(m,u.u);else if(v=!!u.h){if(T.charAt(0)!="/")if(this.g&&!this.h)T="/"+T;else{var F=m.h.lastIndexOf("/");F!=-1&&(T=m.h.slice(0,F+1)+T)}if(F=T,F==".."||F==".")T="";else if(F.indexOf("./")!=-1||F.indexOf("/.")!=-1){T=F.lastIndexOf("/",0)==0,F=F.split("/");const $=[];for(let re=0;re<F.length;){const be=F[re++];be=="."?T&&re==F.length&&$.push(""):be==".."?(($.length>1||$.length==1&&$[0]!="")&&$.pop(),T&&re==F.length&&$.push("")):($.push(be),T=!0)}T=$.join("/")}else T=F}return v?m.h=T:v=u.i.toString()!=="",v?ui(m,Va(u.i)):v=!!u.m,v&&(m.m=u.m),m};function In(u){return new Xn(u)}function hs(u,m,v){u.j=v?ds(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Zn(u,m){if(m){if(m=Number(m),isNaN(m)||m<0)throw Error("Bad port number "+m);u.u=m}else u.u=null}function ui(u,m,v){m instanceof Fe?(u.i=m,so(u.i,u.l)):(v||(m=fs(m,Vh)),u.i=new Fe(m,u.l))}function He(u,m,v){u.i.set(m,v)}function Cr(u){return He(u,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),u}function ds(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function fs(u,m,v){return typeof u=="string"?(u=encodeURI(u).replace(m,Ca),v&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Ca(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var ka=/[#\/\?@]/g,Pa=/[#\?:]/g,ps=/[#\?]/g,Vh=/[#\?@]/g,xa=/#/g;function Fe(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function er(u){u.g||(u.g=new Map,u.h=0,u.i&&un(u.i,function(m,v){u.add(decodeURIComponent(m.replace(/\+/g," ")),v)}))}n=Fe.prototype,n.add=function(u,m){er(this),this.i=null,u=tr(this,u);let v=this.g.get(u);return v||this.g.set(u,v=[]),v.push(m),this.h+=1,this};function ba(u,m){er(u),m=tr(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function io(u,m){return er(u),m=tr(u,m),u.g.has(m)}n.forEach=function(u,m){er(this),this.g.forEach(function(v,T){v.forEach(function(F){u.call(m,F,T,this)},this)},this)};function Na(u,m){er(u);let v=[];if(typeof m=="string")io(u,m)&&(v=v.concat(u.g.get(tr(u,m))));else for(u=Array.from(u.g.values()),m=0;m<u.length;m++)v=v.concat(u[m]);return v}n.set=function(u,m){return er(this),this.i=null,u=tr(this,u),io(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=Na(this,u),u.length>0?String(u[0]):m):m};function Da(u,m,v){ba(u,m),v.length>0&&(u.i=null,u.g.set(tr(u,m),O(v)),u.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(let T=0;T<m.length;T++){var v=m[T];const F=Jn(v);v=Na(this,v);for(let $=0;$<v.length;$++){let re=F;v[$]!==""&&(re+="="+Jn(v[$])),u.push(re)}}return this.i=u.join("&")};function Va(u){const m=new Fe;return m.i=u.i,u.g&&(m.g=new Map(u.g),m.h=u.h),m}function tr(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function so(u,m){m&&!u.j&&(er(u),u.i=null,u.g.forEach(function(v,T){const F=T.toLowerCase();T!=F&&(ba(this,T),Da(this,F,v))},u)),u.j=m}function nr(u,m){const v=new oi;if(c.Image){const T=new Image;T.onload=_(Dt,v,"TestLoadImage: loaded",!0,m,T),T.onerror=_(Dt,v,"TestLoadImage: error",!1,m,T),T.onabort=_(Dt,v,"TestLoadImage: abort",!1,m,T),T.ontimeout=_(Dt,v,"TestLoadImage: timeout",!1,m,T),c.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else m(!1)}function rr(u,m){const v=new oi,T=new AbortController,F=setTimeout(()=>{T.abort(),Dt(v,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:T.signal}).then($=>{clearTimeout(F),$.ok?Dt(v,"TestPingServer: ok",!0,m):Dt(v,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(F),Dt(v,"TestPingServer: error",!1,m)})}function Dt(u,m,v,T,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),T(v)}catch{}}function ms(){this.g=new ss}function kr(u){this.i=u.Sb||null,this.h=u.ab||!1}E(kr,ni),kr.prototype.g=function(){return new cn(this.i,this.h)};function cn(u,m){yt.call(this),this.H=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}E(cn,yt),n=cn.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=u,this.D=m,this.readyState=1,Vn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const m={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};u&&(m.body=u),(this.H||c).fetch(new Request(this.D,m)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ci(this)),this.readyState=0},n.Pa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Vn(this)),this.g&&(this.readyState=3,Vn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;au(this)}else u.text().then(this.Oa.bind(this),this.ga.bind(this))};function au(u){u.j.read().then(u.Ma.bind(u)).catch(u.ga.bind(u))}n.Ma=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.B.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?ci(this):Vn(this),this.readyState==3&&au(this)}},n.Oa=function(u){this.g&&(this.response=this.responseText=u,ci(this))},n.Na=function(u){this.g&&(this.response=u,ci(this))},n.ga=function(){this.g&&ci(this)};function ci(u){u.readyState=4,u.l=null,u.j=null,u.B=null,Vn(u)}n.setRequestHeader=function(u,m){this.A.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var v=m.next();!v.done;)v=v.value,u.push(v[0]+": "+v[1]),v=m.next();return u.join(`\r
`)};function Vn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(cn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function lu(u){let m="";return we(u,function(v,T){m+=T,m+=":",m+=v,m+=`\r
`}),m}function oo(u,m,v){e:{for(T in v){var T=!1;break e}T=!0}T||(v=lu(v),typeof u=="string"?v!=null&&Jn(v):He(u,m,v))}function Je(u){yt.call(this),this.headers=new Map,this.L=u||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}E(Je,yt);var uu=/^https?$/i,Oh=["POST","PUT"];n=Je.prototype,n.Fa=function(u){this.H=u},n.ea=function(u,m,v,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():eu.g(),this.g.onreadystatechange=I(y(this.Ca,this));try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch($){hi(this,$);return}if(u=v||"",v=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var F in T)v.set(F,T[F]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const $ of T.keys())v.set($,T.get($));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(v.keys()).find($=>$.toLowerCase()=="content-type"),F=c.FormData&&u instanceof c.FormData,!(Array.prototype.indexOf.call(Oh,m,void 0)>=0)||T||F||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,re]of v)this.g.setRequestHeader($,re);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(u),this.v=!1}catch($){hi(this,$)}};function hi(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.o=5,di(u),xr(u)}function di(u){u.A||(u.A=!0,ct(u,"complete"),ct(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=u||7,ct(this,"complete"),ct(this,"abort"),xr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),xr(this,!0)),Je.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Pr(this):this.Xa())},n.Xa=function(){Pr(this)};function Pr(u){if(u.h&&typeof l<"u"){if(u.v&&ir(u)==4)setTimeout(u.Ca.bind(u),0);else if(ct(u,"readystatechange"),ir(u)==4){u.h=!1;try{const $=u.ca();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var v;if(!(v=m)){var T;if(T=$===0){let re=String(u.D).match(ou)[1]||null;!re&&c.self&&c.self.location&&(re=c.self.location.protocol.slice(0,-1)),T=!uu.test(re?re.toLowerCase():"")}v=T}if(v)ct(u,"complete"),ct(u,"success");else{u.o=6;try{var F=ir(u)>2?u.g.statusText:""}catch{F=""}u.l=F+" ["+u.ca()+"]",di(u)}}finally{xr(u)}}}}function xr(u,m){if(u.g){u.m&&(clearTimeout(u.m),u.m=null);const v=u.g;u.g=null,m||ct(u,"ready");try{v.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function ir(u){return u.g?u.g.readyState:0}n.ca=function(){try{return ir(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Ql(m)}};function cu(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.F){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Oa(u){const m={};u=(u.g&&ir(u)>=2&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(C(u[T]))continue;var v=eo(u[T]);const F=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const $=m[F]||[];m[F]=$,$.push(v)}ae(m,function(T){return T.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function sr(u,m,v){return v&&v.internalChannelParams&&v.internalChannelParams[u]||m}function ao(u){this.za=0,this.i=[],this.j=new oi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=sr("failFast",!1,u),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=sr("baseRetryDelayMs",5e3,u),this.Za=sr("retryDelaySeedMs",1e4,u),this.Ta=sr("forwardChannelMaxRetries",2,u),this.va=sr("forwardChannelRequestTimeoutMs",2e4,u),this.ma=u&&u.xmlHttpFactory||void 0,this.Ua=u&&u.Rb||void 0,this.Aa=u&&u.useFetchStreams||!1,this.O=void 0,this.L=u&&u.supportsCrossDomainXhr||!1,this.M="",this.h=new no(u&&u.concurrentRequestLimit),this.Ba=new ms,this.S=u&&u.fastHandshake||!1,this.R=u&&u.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=u&&u.Pb||!1,u&&u.ua&&this.j.ua(),u&&u.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&u&&u.detectBufferingProxy||!1,this.ia=void 0,u&&u.longPollingTimeout&&u.longPollingTimeout>0&&(this.ia=u.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=ao.prototype,n.ka=8,n.I=1,n.connect=function(u,m,v,T){lt(0),this.W=u,this.H=m||{},v&&T!==void 0&&(this.H.OSID=v,this.H.OAID=T),this.F=this.X,this.J=La(this,null,this.W),br(this)};function lo(u){if(uo(u),u.I==3){var m=u.V++,v=In(u.J);if(He(v,"SID",u.M),He(v,"RID",m),He(v,"TYPE","terminate"),or(u,v),m=new Tn(u,u.j,m),m.M=2,m.A=Cr(In(v)),v=!1,c.navigator&&c.navigator.sendBeacon)try{v=c.navigator.sendBeacon(m.A.toString(),"")}catch{}!v&&c.Image&&(new Image().src=m.A,v=!0),v||(m.g=du(m.j,null),m.g.ea(m.A)),m.F=Date.now(),as(m)}vs(u)}function hn(u){u.g&&(ys(u),u.g.cancel(),u.g=null)}function uo(u){hn(u),u.v&&(c.clearTimeout(u.v),u.v=null),co(u),u.h.cancel(),u.m&&(typeof u.m=="number"&&c.clearTimeout(u.m),u.m=null)}function br(u){if(!Aa(u.h)&&!u.m){u.m=!0;var m=u.Ea;oe||S(),ce||(oe(),ce=!0),R.add(m,u),u.D=0}}function hu(u,m){return us(u.h)>=u.h.j-(u.m?1:0)?!1:u.m?(u.i=m.G.concat(u.i),!0):u.I==1||u.I==2||u.D>=(u.Sa?0:u.Ta)?!1:(u.m=si(y(u.Ea,u,m),fo(u,u.D)),u.D++,!0)}n.Ea=function(u){if(this.m)if(this.m=null,this.I==1){if(!u){this.V=Math.floor(Math.random()*1e5),u=this.V++;const F=new Tn(this,this.j,u);let $=this.o;if(this.U&&($?($=V($),ve($,this.U)):$=this.U),this.u!==null||this.R||(F.J=$,$=null),this.S)e:{for(var m=0,v=0;v<this.i.length;v++){t:{var T=this.i[v];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(m+=T,m>4096){m=v;break e}if(m===4096||v===this.i.length-1){m=v+1;break e}}m=1e3}else m=1e3;m=Ma(this,F,m),v=In(this.J),He(v,"RID",u),He(v,"CVER",22),this.G&&He(v,"X-HTTP-Session-Id",this.G),or(this,v),$&&(this.R?m="headers="+Jn(lu($))+"&"+m:this.u&&oo(v,this.u,$)),ro(this.h,F),this.Ra&&He(v,"TYPE","init"),this.S?(He(v,"$req",m),He(v,"SID","null"),F.U=!0,Dn(F,v,null)):Dn(F,v,m),this.I=2}}else this.I==3&&(u?gs(this,u):this.i.length==0||Aa(this.h)||gs(this))};function gs(u,m){var v;m?v=m.l:v=u.V++;const T=In(u.J);He(T,"SID",u.M),He(T,"RID",v),He(T,"AID",u.K),or(u,T),u.u&&u.o&&oo(T,u.u,u.o),v=new Tn(u,u.j,v,u.D+1),u.u===null&&(v.J=u.o),m&&(u.i=m.G.concat(u.i)),m=Ma(u,v,1e3),v.H=Math.round(u.va*.5)+Math.round(u.va*.5*Math.random()),ro(u.h,v),Dn(v,T,m)}function or(u,m){u.H&&we(u.H,function(v,T){He(m,T,v)}),u.l&&we({},function(v,T){He(m,T,v)})}function Ma(u,m,v){v=Math.min(u.i.length,v);const T=u.l?y(u.l.Ka,u.l,u):null;e:{var F=u.i;let be=-1;for(;;){const ht=["count="+v];be==-1?v>0?(be=F[0].g,ht.push("ofs="+be)):be=0:ht.push("ofs="+be);let Ke=!0;for(let vt=0;vt<v;vt++){var $=F[vt].g;const fn=F[vt].map;if($-=be,$<0)be=Math.max(0,F[vt].g-100),Ke=!1;else try{$="req"+$+"_"||"";try{var re=fn instanceof Map?fn:Object.entries(fn);for(const[Nr,lr]of re){let ur=lr;f(lr)&&(ur=ti(lr)),ht.push($+Nr+"="+encodeURIComponent(ur))}}catch(Nr){throw ht.push($+"type="+encodeURIComponent("_badmap")),Nr}}catch{T&&T(fn)}}if(Ke){re=ht.join("&");break e}}re=void 0}return u=u.i.splice(0,v),m.G=u,re}function zt(u){if(!u.g&&!u.v){u.Y=1;var m=u.Da;oe||S(),ce||(oe(),ce=!0),R.add(m,u),u.A=0}}function ar(u){return u.g||u.v||u.A>=3?!1:(u.Y++,u.v=si(y(u.Da,u),fo(u,u.A)),u.A++,!0)}n.Da=function(){if(this.v=null,fi(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var u=4*this.T;this.j.info("BP detection timer enabled: "+u),this.B=si(y(this.Wa,this),u)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,lt(10),hn(this),fi(this))};function ys(u){u.B!=null&&(c.clearTimeout(u.B),u.B=null)}function fi(u){u.g=new Tn(u,u.j,"rpc",u.Y),u.u===null&&(u.g.J=u.o),u.g.P=0;var m=In(u.na);He(m,"RID","rpc"),He(m,"SID",u.M),He(m,"AID",u.K),He(m,"CI",u.F?"0":"1"),!u.F&&u.ia&&He(m,"TO",u.ia),He(m,"TYPE","xmlhttp"),or(u,m),u.u&&u.o&&oo(m,u.u,u.o),u.O&&(u.g.H=u.O);var v=u.g;u=u.ba,v.M=1,v.A=Cr(In(m)),v.u=null,v.R=!0,Ia(v,u)}n.Va=function(){this.C!=null&&(this.C=null,hn(this),ar(this),lt(19))};function co(u){u.C!=null&&(c.clearTimeout(u.C),u.C=null)}function ho(u,m){var v=null;if(u.g==m){co(u),ys(u),u.g=null;var T=2}else if(Ra(u.h,m))v=m.G,cs(u.h,m),T=1;else return;if(u.I!=0){if(m.o)if(T==1){v=m.u?m.u.length:0,m=Date.now()-m.F;var F=u.D;T=ii(),ct(T,new Ea(T,v)),br(u)}else zt(u);else if(F=m.m,F==3||F==0&&m.X>0||!(T==1&&hu(u,m)||T==2&&ar(u)))switch(v&&v.length>0&&(m=u.h,m.i=m.i.concat(v)),F){case 1:dn(u,5);break;case 4:dn(u,10);break;case 3:dn(u,6);break;default:dn(u,2)}}}function fo(u,m){let v=u.Qa+Math.floor(Math.random()*u.Za);return u.isActive()||(v*=2),v*m}function dn(u,m){if(u.j.info("Error code "+m),m==2){var v=y(u.bb,u),T=u.Ua;const F=!T;T=new Xn(T||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||hs(T,"https"),Cr(T),F?nr(T.toString(),v):rr(T.toString(),v)}else lt(2);u.I=0,u.l&&u.l.pa(m),vs(u),uo(u)}n.bb=function(u){u?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function vs(u){if(u.I=0,u.ja=[],u.l){const m=ln(u.h);(m.length!=0||u.i.length!=0)&&(W(u.ja,m),W(u.ja,u.i),u.h.i.length=0,O(u.i),u.i.length=0),u.l.oa()}}function La(u,m,v){var T=v instanceof Xn?In(v):new Xn(v);if(T.g!="")m&&(T.g=m+"."+T.g),Zn(T,T.u);else{var F=c.location;T=F.protocol,m=m?m+"."+F.hostname:F.hostname,F=+F.port;const $=new Xn(null);T&&hs($,T),m&&($.g=m),F&&Zn($,F),v&&($.h=v),T=$}return v=u.G,m=u.wa,v&&m&&He(T,v,m),He(T,"VER",u.ka),or(u,T),T}function du(u,m,v){if(m&&!u.L)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Aa&&!u.ma?new Je(new kr({ab:v})):new Je(u.ma),m.Fa(u.L),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function fu(){}n=fu.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function po(){}po.prototype.g=function(u,m){return new Vt(u,m)};function Vt(u,m){yt.call(this),this.g=new ao(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.sa&&(u?u["X-WebChannel-Client-Profile"]=m.sa:u={"X-WebChannel-Client-Profile":m.sa}),this.g.U=u,(u=m&&m.Qb)&&!C(u)&&(this.g.u=u),this.A=m&&m.supportsCrossDomainXhr||!1,this.v=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!C(m)&&(this.g.G=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new pi(this)}E(Vt,yt),Vt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Vt.prototype.close=function(){lo(this.g)},Vt.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var v={};v.__data__=u,u=v}else this.v&&(v={},v.__data__=ti(u),u=v);m.i.push(new Dh(m.Ya++,u)),m.I==3&&br(m)},Vt.prototype.N=function(){this.g.l=null,delete this.j,lo(this.g),delete this.g,Vt.Z.N.call(this)};function pu(u){Js.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const v in m){u=v;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}E(pu,Js);function mu(){wa.call(this),this.status=1}E(mu,wa);function pi(u){this.g=u}E(pi,fu),pi.prototype.ra=function(){ct(this.g,"a")},pi.prototype.qa=function(u){ct(this.g,new pu(u))},pi.prototype.pa=function(u){ct(this.g,new mu)},pi.prototype.oa=function(){ct(this.g,"b")},po.prototype.createWebChannel=po.prototype.g,Vt.prototype.send=Vt.prototype.o,Vt.prototype.open=Vt.prototype.m,Vt.prototype.close=Vt.prototype.close,hE=function(){return new po},cE=function(){return ii()},uE=Nn,zf={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ai.NO_ERROR=0,ai.TIMEOUT=8,ai.HTTP_ERROR=6,Rc=ai,li.COMPLETE="complete",lE=li,Yl.EventType=ri,ri.OPEN="a",ri.CLOSE="b",ri.ERROR="c",ri.MESSAGE="d",yt.prototype.listen=yt.prototype.J,fl=Yl,Je.prototype.listenOnce=Je.prototype.K,Je.prototype.getLastError=Je.prototype.Ha,Je.prototype.getLastErrorCode=Je.prototype.ya,Je.prototype.getStatus=Je.prototype.ca,Je.prototype.getResponseJson=Je.prototype.La,Je.prototype.getResponseText=Je.prototype.la,Je.prototype.send=Je.prototype.ea,Je.prototype.setWithCredentials=Je.prototype.Fa,aE=Je}).apply(typeof cc<"u"?cc:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class Gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Gt.UNAUTHENTICATED=new Gt(null),Gt.GOOGLE_CREDENTIALS=new Gt("google-credentials-uid"),Gt.FIRST_PARTY=new Gt("first-party-uid"),Gt.MOCK_USER=new Gt("mock-user");/**
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
 */let ua="12.9.0";function Sk(n){ua=n}/**
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
 *//**
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
 */const Us=new oh("@firebase/firestore");function jo(){return Us.logLevel}function he(n,...e){if(Us.logLevel<=Oe.DEBUG){const t=e.map(kp);Us.debug(`Firestore (${ua}): ${n}`,...t)}}function Kr(n,...e){if(Us.logLevel<=Oe.ERROR){const t=e.map(kp);Us.error(`Firestore (${ua}): ${n}`,...t)}}function js(n,...e){if(Us.logLevel<=Oe.WARN){const t=e.map(kp);Us.warn(`Firestore (${ua}): ${n}`,...t)}}function kp(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function Ie(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,dE(n,i,t)}function dE(n,e,t){let i=`FIRESTORE (${ua}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Kr(i),new Error(i)}function ze(n,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,n||dE(e,o,i)}function Pe(n,e){return n}/**
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
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends Hn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class vr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class fE{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ak{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Gt.UNAUTHENTICATED)))}shutdown(){}}class Rk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Ck{constructor(e){this.t=e,this.currentUser=Gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ze(this.o===void 0,42304);let i=this.i;const o=g=>this.i!==i?(i=this.i,t(g)):Promise.resolve();let l=new vr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new vr,e.enqueueRetryable((()=>o(this.currentUser)))};const c=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},f=g=>{he("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((g=>f(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?f(g):(he("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new vr)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(he("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ze(typeof i.accessToken=="string",31837,{l:i}),new fE(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string",2055,{h:e}),new Gt(e)}}class kk{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Gt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Pk{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new kk(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Gt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Iv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xk{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,zn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ze(this.o===void 0,3512);const i=l=>{l.error!=null&&he("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,he("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const o=l=>{he("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):he("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Iv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ze(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Iv(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function bk(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class Pp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=bk(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%62))}return i}}function Me(n,e){return n<e?-1:n>e?1:0}function Bf(n,e){const t=Math.min(n.length,e.length);for(let i=0;i<t;i++){const o=n.charAt(i),l=e.charAt(i);if(o!==l)return vf(o)===vf(l)?Me(o,l):vf(o)?1:-1}return Me(n.length,e.length)}const Nk=55296,Dk=57343;function vf(n){const e=n.charCodeAt(0);return e>=Nk&&e<=Dk}function ea(n,e,t){return n.length===e.length&&n.every(((i,o)=>t(i,e[o])))}/**
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
 */const Sv="__name__";class pr{constructor(e,t,i){t===void 0?t=0:t>e.length&&Ie(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&Ie(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return pr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof pr?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=pr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Me(e.length,t.length)}static compareSegments(e,t){const i=pr.isNumericId(e),o=pr.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?pr.extractNumericId(e).compare(pr.extractNumericId(t)):Bf(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return zi.fromString(e.substring(4,e.length-2))}}class Ye extends pr{construct(e,t,i){return new Ye(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ie(H.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new Ye(t)}static emptyPath(){return new Ye([])}}const Vk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ft extends pr{construct(e,t,i){return new Ft(e,t,i)}static isValidIdentifier(e){return Vk.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ft.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Sv}static keyField(){return new Ft([Sv])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new ie(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new ie(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ie(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=g,o+=2}else f==="`"?(c=!c,o++):f!=="."||c?(i+=f,o++):(l(),o++)}if(l(),c)throw new ie(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ft(t)}static emptyPath(){return new Ft([])}}/**
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
 */class Te{constructor(e){this.path=e}static fromPath(e){return new Te(Ye.fromString(e))}static fromName(e){return new Te(Ye.fromString(e).popFirst(5))}static empty(){return new Te(Ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ye.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Te(new Ye(e.slice()))}}/**
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
 */function pE(n,e,t){if(!t)throw new ie(H.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Ok(n,e,t,i){if(e===!0&&i===!0)throw new ie(H.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Av(n){if(!Te.isDocumentKey(n))throw new ie(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Rv(n){if(Te.isDocumentKey(n))throw new ie(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function mE(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function fh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ie(12329,{type:typeof n})}function wn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ie(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=fh(n);throw new ie(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function It(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ul(n,e){if(!mE(n))throw new ie(H.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const c=n[i];if(o&&typeof c!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(l!==void 0&&c!==l.value){t=`Expected '${i}' field to equal '${l.value}'`;break}}if(t)throw new ie(H.INVALID_ARGUMENT,t);return!0}/**
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
 */const Cv=-62135596800,kv=1e6;class nt{static now(){return nt.fromMillis(Date.now())}static fromDate(e){return nt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*kv);return new nt(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ie(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ie(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Cv)throw new ie(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/kv}_compareTo(e){return this.seconds===e.seconds?Me(this.nanoseconds,e.nanoseconds):Me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:nt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ul(e,nt._jsonSchema))return new nt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Cv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}nt._jsonSchemaVersion="firestore/timestamp/1.0",nt._jsonSchema={type:It("string",nt._jsonSchemaVersion),seconds:It("number"),nanoseconds:It("number")};/**
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
 */class Re{static fromTimestamp(e){return new Re(e)}static min(){return new Re(new nt(0,0))}static max(){return new Re(new nt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Cl=-1;function Mk(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Re.fromTimestamp(i===1e9?new nt(t+1,0):new nt(t,i));return new Hi(o,Te.empty(),e)}function Lk(n){return new Hi(n.readTime,n.key,Cl)}class Hi{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Hi(Re.min(),Te.empty(),Cl)}static max(){return new Hi(Re.max(),Te.empty(),Cl)}}function Fk(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Te.comparator(n.documentKey,e.documentKey),t!==0?t:Me(n.largestBatchId,e.largestBatchId))}/**
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
 */const Uk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function ca(n){if(n.code!==H.FAILED_PRECONDITION||n.message!==Uk)throw n;he("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ie(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new K(((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof K?t:K.resolve(t)}catch(t){return K.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):K.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):K.reject(t)}static resolve(e){return new K(((t,i)=>{t(e)}))}static reject(e){return new K(((t,i)=>{i(e)}))}static waitFor(e){return new K(((t,i)=>{let o=0,l=0,c=!1;e.forEach((f=>{++o,f.next((()=>{++l,c&&l===o&&t()}),(g=>i(g)))})),c=!0,l===o&&t()}))}static or(e){let t=K.resolve(!1);for(const i of e)t=t.next((o=>o?K.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,l)=>{i.push(t.call(this,o,l))})),this.waitFor(i)}static mapArray(e,t){return new K(((i,o)=>{const l=e.length,c=new Array(l);let f=0;for(let g=0;g<l;g++){const y=g;t(e[y]).next((_=>{c[y]=_,++f,f===l&&i(c)}),(_=>o(_)))}}))}static doWhile(e,t){return new K(((i,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):i()};l()}))}}function zk(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ha(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class ph{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>t.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ph.ce=-1;/**
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
 */const xp=-1;function jl(n){return n==null}function Wc(n){return n===0&&1/n==-1/0}function Bk(n){return typeof n=="number"&&Number.isInteger(n)&&!Wc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const gE="";function $k(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Pv(e)),e=Wk(n.get(t),e);return Pv(e)}function Wk(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case gE:t+="";break;default:t+=l}}return t}function Pv(n){return n+gE+""}/**
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
 */function xv(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Zi(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function yE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class at{constructor(e,t){this.comparator=e,this.root=t||Lt.EMPTY}insert(e,t){return new at(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Lt.BLACK,null,null))}remove(e){return new at(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Lt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new hc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new hc(this.root,e,this.comparator,!1)}getReverseIterator(){return new hc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new hc(this.root,e,this.comparator,!0)}}class hc{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Lt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Lt.RED,this.left=o??Lt.EMPTY,this.right=l??Lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Lt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Lt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ie(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ie(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ie(27949);return e+(this.isRed()?0:1)}}Lt.EMPTY=null,Lt.RED=!0,Lt.BLACK=!1;Lt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ie(57766)}get value(){throw Ie(16141)}get color(){throw Ie(16727)}get left(){throw Ie(29726)}get right(){throw Ie(36894)}copy(e,t,i,o,l){return this}insert(e,t,i){return new Lt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ct{constructor(e){this.comparator=e,this.data=new at(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new bv(this.data.getIterator())}getIteratorFrom(e){return new bv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof Ct)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ct(this.comparator);return t.data=e,t}}class bv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class vn{constructor(e){this.fields=e,e.sort(Ft.comparator)}static empty(){return new vn([])}unionWith(e){let t=new Ct(Ft.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new vn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ea(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class vE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class jt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new vE("Invalid base64 string: "+l):l}})(e);return new jt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let c=0;c<o.length;++c)l+=String.fromCharCode(o[c]);return l})(e);return new jt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}jt.EMPTY_BYTE_STRING=new jt("");const qk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gi(n){if(ze(!!n,39018),typeof n=="string"){let e=0;const t=qk.exec(n);if(ze(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ft(n.seconds),nanos:ft(n.nanos)}}function ft(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ki(n){return typeof n=="string"?jt.fromBase64String(n):jt.fromUint8Array(n)}/**
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
 */const _E="server_timestamp",wE="__type__",EE="__previous_value__",TE="__local_write_time__";function bp(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[wE])==null?void 0:i.stringValue)===_E}function mh(n){const e=n.mapValue.fields[EE];return bp(e)?mh(e):e}function kl(n){const e=Gi(n.mapValue.fields[TE].timestampValue);return new nt(e.seconds,e.nanos)}/**
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
 */class Hk{constructor(e,t,i,o,l,c,f,g,y,_,E){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=f,this.longPollingOptions=g,this.useFetchStreams=y,this.isUsingEmulator=_,this.apiKey=E}}const qc="(default)";class Pl{constructor(e,t){this.projectId=e,this.database=t||qc}static empty(){return new Pl("","")}get isDefaultDatabase(){return this.database===qc}isEqual(e){return e instanceof Pl&&e.projectId===this.projectId&&e.database===this.database}}function Gk(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new ie(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pl(n.options.projectId,e)}/**
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
 */const IE="__type__",Kk="__max__",dc={mapValue:{}},SE="__vector__",Hc="value";function Qi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?bp(n)?4:Yk(n)?9007199254740991:Qk(n)?10:11:Ie(28295,{value:n})}function Tr(n,e){if(n===e)return!0;const t=Qi(n);if(t!==Qi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return kl(n).isEqual(kl(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const c=Gi(o.timestampValue),f=Gi(l.timestampValue);return c.seconds===f.seconds&&c.nanos===f.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,l){return Ki(o.bytesValue).isEqual(Ki(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,l){return ft(o.geoPointValue.latitude)===ft(l.geoPointValue.latitude)&&ft(o.geoPointValue.longitude)===ft(l.geoPointValue.longitude)})(n,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return ft(o.integerValue)===ft(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const c=ft(o.doubleValue),f=ft(l.doubleValue);return c===f?Wc(c)===Wc(f):isNaN(c)&&isNaN(f)}return!1})(n,e);case 9:return ea(n.arrayValue.values||[],e.arrayValue.values||[],Tr);case 10:case 11:return(function(o,l){const c=o.mapValue.fields||{},f=l.mapValue.fields||{};if(xv(c)!==xv(f))return!1;for(const g in c)if(c.hasOwnProperty(g)&&(f[g]===void 0||!Tr(c[g],f[g])))return!1;return!0})(n,e);default:return Ie(52216,{left:n})}}function xl(n,e){return(n.values||[]).find((t=>Tr(t,e)))!==void 0}function ta(n,e){if(n===e)return 0;const t=Qi(n),i=Qi(e);if(t!==i)return Me(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Me(n.booleanValue,e.booleanValue);case 2:return(function(l,c){const f=ft(l.integerValue||l.doubleValue),g=ft(c.integerValue||c.doubleValue);return f<g?-1:f>g?1:f===g?0:isNaN(f)?isNaN(g)?0:-1:1})(n,e);case 3:return Nv(n.timestampValue,e.timestampValue);case 4:return Nv(kl(n),kl(e));case 5:return Bf(n.stringValue,e.stringValue);case 6:return(function(l,c){const f=Ki(l),g=Ki(c);return f.compareTo(g)})(n.bytesValue,e.bytesValue);case 7:return(function(l,c){const f=l.split("/"),g=c.split("/");for(let y=0;y<f.length&&y<g.length;y++){const _=Me(f[y],g[y]);if(_!==0)return _}return Me(f.length,g.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,c){const f=Me(ft(l.latitude),ft(c.latitude));return f!==0?f:Me(ft(l.longitude),ft(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Dv(n.arrayValue,e.arrayValue);case 10:return(function(l,c){var I,O,W,M;const f=l.fields||{},g=c.fields||{},y=(I=f[Hc])==null?void 0:I.arrayValue,_=(O=g[Hc])==null?void 0:O.arrayValue,E=Me(((W=y==null?void 0:y.values)==null?void 0:W.length)||0,((M=_==null?void 0:_.values)==null?void 0:M.length)||0);return E!==0?E:Dv(y,_)})(n.mapValue,e.mapValue);case 11:return(function(l,c){if(l===dc.mapValue&&c===dc.mapValue)return 0;if(l===dc.mapValue)return 1;if(c===dc.mapValue)return-1;const f=l.fields||{},g=Object.keys(f),y=c.fields||{},_=Object.keys(y);g.sort(),_.sort();for(let E=0;E<g.length&&E<_.length;++E){const I=Bf(g[E],_[E]);if(I!==0)return I;const O=ta(f[g[E]],y[_[E]]);if(O!==0)return O}return Me(g.length,_.length)})(n.mapValue,e.mapValue);default:throw Ie(23264,{he:t})}}function Nv(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Me(n,e);const t=Gi(n),i=Gi(e),o=Me(t.seconds,i.seconds);return o!==0?o:Me(t.nanos,i.nanos)}function Dv(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=ta(t[o],i[o]);if(l)return l}return Me(t.length,i.length)}function na(n){return $f(n)}function $f(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=Gi(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Ki(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return Te.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=$f(l);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const c of i)l?l=!1:o+=",",o+=`${c}:${$f(t.fields[c])}`;return o+"}"})(n.mapValue):Ie(61005,{value:n})}function Cc(n){switch(Qi(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=mh(n);return e?16+Cc(e):16;case 5:return 2*n.stringValue.length;case 6:return Ki(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,l)=>o+Cc(l)),0)})(n.arrayValue);case 10:case 11:return(function(i){let o=0;return Zi(i.fields,((l,c)=>{o+=l.length+Cc(c)})),o})(n.mapValue);default:throw Ie(13486,{value:n})}}function Vv(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Wf(n){return!!n&&"integerValue"in n}function Np(n){return!!n&&"arrayValue"in n}function Ov(n){return!!n&&"nullValue"in n}function Mv(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function kc(n){return!!n&&"mapValue"in n}function Qk(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[IE])==null?void 0:i.stringValue)===SE}function _l(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Zi(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=_l(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=_l(n.arrayValue.values[t]);return e}return{...n}}function Yk(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Kk}/**
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
 */class Jt{constructor(e){this.value=e}static empty(){return new Jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!kc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=_l(t)}setAll(e){let t=Ft.emptyPath(),i={},o=[];e.forEach(((c,f)=>{if(!t.isImmediateParentOf(f)){const g=this.getFieldsMap(t);this.applyChanges(g,i,o),i={},o=[],t=f.popLast()}c?i[f.lastSegment()]=_l(c):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());kc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Tr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];kc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Zi(t,((o,l)=>e[o]=l));for(const o of i)delete e[o]}clone(){return new Jt(_l(this.value))}}function AE(n){const e=[];return Zi(n.fields,((t,i)=>{const o=new Ft([t]);if(kc(i)){const l=AE(i.mapValue).fields;if(l.length===0)e.push(o);else for(const c of l)e.push(o.child(c))}else e.push(o)})),new vn(e)}/**
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
 */class Nt{constructor(e,t,i,o,l,c,f){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=c,this.documentState=f}static newInvalidDocument(e){return new Nt(e,0,Re.min(),Re.min(),Re.min(),Jt.empty(),0)}static newFoundDocument(e,t,i,o){return new Nt(e,1,t,Re.min(),i,o,0)}static newNoDocument(e,t){return new Nt(e,2,t,Re.min(),Re.min(),Jt.empty(),0)}static newUnknownDocument(e,t){return new Nt(e,3,t,Re.min(),Re.min(),Jt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Gc{constructor(e,t){this.position=e,this.inclusive=t}}function Lv(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],c=n.position[o];if(l.field.isKeyField()?i=Te.comparator(Te.fromName(c.referenceValue),t.key):i=ta(c,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function Fv(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Tr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class bl{constructor(e,t="asc"){this.field=e,this.dir=t}}function Jk(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class RE{}class Tt extends RE{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new Zk(e,t,i):t==="array-contains"?new nP(e,i):t==="in"?new rP(e,i):t==="not-in"?new iP(e,i):t==="array-contains-any"?new sP(e,i):new Tt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new eP(e,i):new tP(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ta(t,this.value)):t!==null&&Qi(this.value)===Qi(t)&&this.matchesComparison(ta(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ie(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qn extends RE{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new qn(e,t)}matches(e){return CE(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function CE(n){return n.op==="and"}function kE(n){return Xk(n)&&CE(n)}function Xk(n){for(const e of n.filters)if(e instanceof qn)return!1;return!0}function qf(n){if(n instanceof Tt)return n.field.canonicalString()+n.op.toString()+na(n.value);if(kE(n))return n.filters.map((e=>qf(e))).join(",");{const e=n.filters.map((t=>qf(t))).join(",");return`${n.op}(${e})`}}function PE(n,e){return n instanceof Tt?(function(i,o){return o instanceof Tt&&i.op===o.op&&i.field.isEqual(o.field)&&Tr(i.value,o.value)})(n,e):n instanceof qn?(function(i,o){return o instanceof qn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((l,c,f)=>l&&PE(c,o.filters[f])),!0):!1})(n,e):void Ie(19439)}function xE(n){return n instanceof Tt?(function(t){return`${t.field.canonicalString()} ${t.op} ${na(t.value)}`})(n):n instanceof qn?(function(t){return t.op.toString()+" {"+t.getFilters().map(xE).join(" ,")+"}"})(n):"Filter"}class Zk extends Tt{constructor(e,t,i){super(e,t,i),this.key=Te.fromName(i.referenceValue)}matches(e){const t=Te.comparator(e.key,this.key);return this.matchesComparison(t)}}class eP extends Tt{constructor(e,t){super(e,"in",t),this.keys=bE("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class tP extends Tt{constructor(e,t){super(e,"not-in",t),this.keys=bE("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function bE(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((i=>Te.fromName(i.referenceValue)))}class nP extends Tt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Np(t)&&xl(t.arrayValue,this.value)}}class rP extends Tt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&xl(this.value.arrayValue,t)}}class iP extends Tt{constructor(e,t){super(e,"not-in",t)}matches(e){if(xl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!xl(this.value.arrayValue,t)}}class sP extends Tt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Np(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>xl(this.value.arrayValue,i)))}}/**
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
 */class oP{constructor(e,t=null,i=[],o=[],l=null,c=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=c,this.endAt=f,this.Te=null}}function Uv(n,e=null,t=[],i=[],o=null,l=null,c=null){return new oP(n,e,t,i,o,l,c)}function Dp(n){const e=Pe(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>qf(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),jl(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>na(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>na(i))).join(",")),e.Te=t}return e.Te}function Vp(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Jk(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!PE(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Fv(n.startAt,e.startAt)&&Fv(n.endAt,e.endAt)}function Hf(n){return Te.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class da{constructor(e,t=null,i=[],o=[],l=null,c="F",f=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=c,this.startAt=f,this.endAt=g,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function aP(n,e,t,i,o,l,c,f){return new da(n,e,t,i,o,l,c,f)}function gh(n){return new da(n)}function jv(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function lP(n){return Te.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function NE(n){return n.collectionGroup!==null}function wl(n){const e=Pe(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let f=new Ct(Ft.comparator);return c.filters.forEach((g=>{g.getFlattenedFilters().forEach((y=>{y.isInequality()&&(f=f.add(y.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new bl(l,i))})),t.has(Ft.keyField().canonicalString())||e.Ie.push(new bl(Ft.keyField(),i))}return e.Ie}function _r(n){const e=Pe(n);return e.Ee||(e.Ee=uP(e,wl(n))),e.Ee}function uP(n,e){if(n.limitType==="F")return Uv(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new bl(o.field,l)}));const t=n.endAt?new Gc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Gc(n.startAt.position,n.startAt.inclusive):null;return Uv(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Gf(n,e){const t=n.filters.concat([e]);return new da(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function cP(n,e){const t=n.explicitOrderBy.concat([e]);return new da(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function Kf(n,e,t){return new da(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function yh(n,e){return Vp(_r(n),_r(e))&&n.limitType===e.limitType}function DE(n){return`${Dp(_r(n))}|lt:${n.limitType}`}function zo(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>xE(o))).join(", ")}]`),jl(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>na(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>na(o))).join(",")),`Target(${i})`})(_r(n))}; limitType=${n.limitType})`}function vh(n,e){return e.isFoundDocument()&&(function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):Te.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(n,e)&&(function(i,o){for(const l of wl(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0})(n,e)&&(function(i,o){return!(i.startAt&&!(function(c,f,g){const y=Lv(c,f,g);return c.inclusive?y<=0:y<0})(i.startAt,wl(i),o)||i.endAt&&!(function(c,f,g){const y=Lv(c,f,g);return c.inclusive?y>=0:y>0})(i.endAt,wl(i),o))})(n,e)}function hP(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function VE(n){return(e,t)=>{let i=!1;for(const o of wl(n)){const l=dP(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function dP(n,e,t){const i=n.field.isKeyField()?Te.comparator(e.key,t.key):(function(l,c,f){const g=c.data.field(l),y=f.data.field(l);return g!==null&&y!==null?ta(g,y):Ie(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Ie(19790,{direction:n.dir})}}/**
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
 */class Hs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Zi(this.inner,((t,i)=>{for(const[o,l]of i)e(o,l)}))}isEmpty(){return yE(this.inner)}size(){return this.innerSize}}/**
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
 */const fP=new at(Te.comparator);function Qr(){return fP}const OE=new at(Te.comparator);function pl(...n){let e=OE;for(const t of n)e=e.insert(t.key,t);return e}function ME(n){let e=OE;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function Vs(){return El()}function LE(){return El()}function El(){return new Hs((n=>n.toString()),((n,e)=>n.isEqual(e)))}const pP=new at(Te.comparator),mP=new Ct(Te.comparator);function Le(...n){let e=mP;for(const t of n)e=e.add(t);return e}const gP=new Ct(Me);function yP(){return gP}/**
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
 */function Op(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wc(e)?"-0":e}}function FE(n){return{integerValue:""+n}}function vP(n,e){return Bk(e)?FE(e):Op(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class _h{constructor(){this._=void 0}}function _P(n,e,t){return n instanceof Nl?(function(o,l){const c={fields:{[wE]:{stringValue:_E},[TE]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&bp(l)&&(l=mh(l)),l&&(c.fields[EE]=l),{mapValue:c}})(t,e):n instanceof Dl?jE(n,e):n instanceof Vl?zE(n,e):(function(o,l){const c=UE(o,l),f=zv(c)+zv(o.Ae);return Wf(c)&&Wf(o.Ae)?FE(f):Op(o.serializer,f)})(n,e)}function wP(n,e,t){return n instanceof Dl?jE(n,e):n instanceof Vl?zE(n,e):t}function UE(n,e){return n instanceof Kc?(function(i){return Wf(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class Nl extends _h{}class Dl extends _h{constructor(e){super(),this.elements=e}}function jE(n,e){const t=BE(e);for(const i of n.elements)t.some((o=>Tr(o,i)))||t.push(i);return{arrayValue:{values:t}}}class Vl extends _h{constructor(e){super(),this.elements=e}}function zE(n,e){let t=BE(e);for(const i of n.elements)t=t.filter((o=>!Tr(o,i)));return{arrayValue:{values:t}}}class Kc extends _h{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function zv(n){return ft(n.integerValue||n.doubleValue)}function BE(n){return Np(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class EP{constructor(e,t){this.field=e,this.transform=t}}function TP(n,e){return n.field.isEqual(e.field)&&(function(i,o){return i instanceof Dl&&o instanceof Dl||i instanceof Vl&&o instanceof Vl?ea(i.elements,o.elements,Tr):i instanceof Kc&&o instanceof Kc?Tr(i.Ae,o.Ae):i instanceof Nl&&o instanceof Nl})(n.transform,e.transform)}class IP{constructor(e,t){this.version=e,this.transformResults=t}}class Xt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Xt}static exists(e){return new Xt(void 0,e)}static updateTime(e){return new Xt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Pc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class wh{}function $E(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Mp(n.key,Xt.none()):new zl(n.key,n.data,Xt.none());{const t=n.data,i=Jt.empty();let o=new Ct(Ft.comparator);for(let l of e.fields)if(!o.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?i.delete(l):i.set(l,c),o=o.add(l)}return new es(n.key,i,new vn(o.toArray()),Xt.none())}}function SP(n,e,t){n instanceof zl?(function(o,l,c){const f=o.value.clone(),g=$v(o.fieldTransforms,l,c.transformResults);f.setAll(g),l.convertToFoundDocument(c.version,f).setHasCommittedMutations()})(n,e,t):n instanceof es?(function(o,l,c){if(!Pc(o.precondition,l))return void l.convertToUnknownDocument(c.version);const f=$v(o.fieldTransforms,l,c.transformResults),g=l.data;g.setAll(WE(o)),g.setAll(f),l.convertToFoundDocument(c.version,g).setHasCommittedMutations()})(n,e,t):(function(o,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function Tl(n,e,t,i){return n instanceof zl?(function(l,c,f,g){if(!Pc(l.precondition,c))return f;const y=l.value.clone(),_=Wv(l.fieldTransforms,g,c);return y.setAll(_),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),null})(n,e,t,i):n instanceof es?(function(l,c,f,g){if(!Pc(l.precondition,c))return f;const y=Wv(l.fieldTransforms,g,c),_=c.data;return _.setAll(WE(l)),_.setAll(y),c.convertToFoundDocument(c.version,_).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((E=>E.field)))})(n,e,t,i):(function(l,c,f){return Pc(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):f})(n,e,t)}function AP(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=UE(i.transform,o||null);l!=null&&(t===null&&(t=Jt.empty()),t.set(i.field,l))}return t||null}function Bv(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&ea(i,o,((l,c)=>TP(l,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class zl extends wh{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class es extends wh{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function WE(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function $v(n,e,t){const i=new Map;ze(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let o=0;o<t.length;o++){const l=n[o],c=l.transform,f=e.data.field(l.field);i.set(l.field,wP(c,f,t[o]))}return i}function Wv(n,e,t){const i=new Map;for(const o of n){const l=o.transform,c=t.data.field(o.field);i.set(o.field,_P(l,c,e))}return i}class Mp extends wh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qE extends wh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class RP{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&SP(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Tl(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Tl(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=LE();return this.mutations.forEach((o=>{const l=e.get(o.key),c=l.overlayedDocument;let f=this.applyToLocalView(c,l.mutatedFields);f=t.has(o.key)?null:f;const g=$E(c,f);g!==null&&i.set(o.key,g),c.isValidDocument()||c.convertToNoDocument(Re.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Le())}isEqual(e){return this.batchId===e.batchId&&ea(this.mutations,e.mutations,((t,i)=>Bv(t,i)))&&ea(this.baseMutations,e.baseMutations,((t,i)=>Bv(t,i)))}}class Lp{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){ze(e.mutations.length===i.length,58842,{me:e.mutations.length,fe:i.length});let o=(function(){return pP})();const l=e.mutations;for(let c=0;c<l.length;c++)o=o.insert(l[c].key,i[c].version);return new Lp(e,t,i,o)}}/**
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
 */let CP=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};/**
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
 */class kP{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var wt,je;function HE(n){switch(n){case H.OK:return Ie(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return Ie(15467,{code:n})}}function GE(n){if(n===void 0)return Kr("GRPC error has no .code"),H.UNKNOWN;switch(n){case wt.OK:return H.OK;case wt.CANCELLED:return H.CANCELLED;case wt.UNKNOWN:return H.UNKNOWN;case wt.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case wt.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case wt.INTERNAL:return H.INTERNAL;case wt.UNAVAILABLE:return H.UNAVAILABLE;case wt.UNAUTHENTICATED:return H.UNAUTHENTICATED;case wt.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case wt.NOT_FOUND:return H.NOT_FOUND;case wt.ALREADY_EXISTS:return H.ALREADY_EXISTS;case wt.PERMISSION_DENIED:return H.PERMISSION_DENIED;case wt.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case wt.ABORTED:return H.ABORTED;case wt.OUT_OF_RANGE:return H.OUT_OF_RANGE;case wt.UNIMPLEMENTED:return H.UNIMPLEMENTED;case wt.DATA_LOSS:return H.DATA_LOSS;default:return Ie(39323,{code:n})}}(je=wt||(wt={}))[je.OK=0]="OK",je[je.CANCELLED=1]="CANCELLED",je[je.UNKNOWN=2]="UNKNOWN",je[je.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",je[je.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",je[je.NOT_FOUND=5]="NOT_FOUND",je[je.ALREADY_EXISTS=6]="ALREADY_EXISTS",je[je.PERMISSION_DENIED=7]="PERMISSION_DENIED",je[je.UNAUTHENTICATED=16]="UNAUTHENTICATED",je[je.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",je[je.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",je[je.ABORTED=10]="ABORTED",je[je.OUT_OF_RANGE=11]="OUT_OF_RANGE",je[je.UNIMPLEMENTED=12]="UNIMPLEMENTED",je[je.INTERNAL=13]="INTERNAL",je[je.UNAVAILABLE=14]="UNAVAILABLE",je[je.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function PP(){return new TextEncoder}/**
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
 */const xP=new zi([4294967295,4294967295],0);function qv(n){const e=PP().encode(n),t=new oE;return t.update(e),new Uint8Array(t.digest())}function Hv(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new zi([t,i],0),new zi([o,l],0)]}class Fp{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new ml(`Invalid padding: ${t}`);if(i<0)throw new ml(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new ml(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new ml(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=zi.fromNumber(this.ge)}ye(e,t,i){let o=e.add(t.multiply(zi.fromNumber(i)));return o.compare(xP)===1&&(o=new zi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=qv(e),[i,o]=Hv(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(i,o,l);if(!this.we(c))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new Fp(l,o,t);return i.forEach((f=>c.insert(f))),c}insert(e){if(this.ge===0)return;const t=qv(e),[i,o]=Hv(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(i,o,l);this.be(c)}}be(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class ml extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Eh{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,Bl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Eh(Re.min(),o,new at(Me),Qr(),Le())}}class Bl{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Bl(i,t,Le(),Le(),Le())}}/**
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
 */class xc{constructor(e,t,i,o){this.Se=e,this.removedTargetIds=t,this.key=i,this.De=o}}class KE{constructor(e,t){this.targetId=e,this.Ce=t}}class QE{constructor(e,t,i=jt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class Gv{constructor(){this.ve=0,this.Fe=Kv(),this.Me=jt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Le(),t=Le(),i=Le();return this.Fe.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:Ie(38017,{changeType:l})}})),new Bl(this.Me,this.xe,e,t,i)}Ke(){this.Oe=!1,this.Fe=Kv()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ze(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class bP{constructor(e){this.Ge=e,this.ze=new Map,this.je=Qr(),this.He=fc(),this.Je=fc(),this.Ze=new at(Me)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const i=this.nt(t);switch(e.state){case 0:this.rt(t)&&i.Le(e.resumeToken);break;case 1:i.We(),i.Ne||i.Ke(),i.Le(e.resumeToken);break;case 2:i.We(),i.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(i.Qe(),i.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),i.Le(e.resumeToken));break;default:Ie(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((i,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,i=e.Ce.count,o=this.ot(t);if(o){const l=o.target;if(Hf(l))if(i===0){const c=new Te(l.path);this.et(t,c,Nt.newNoDocument(c,Re.min()))}else ze(i===1,20013,{expectedCount:i});else{const c=this._t(t);if(c!==i){const f=this.ut(e),g=f?this.ct(f,e,c):1;if(g!==0){this.it(t);const y=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,y)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let c,f;try{c=Ki(i).toUint8Array()}catch(g){if(g instanceof vE)return js("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{f=new Fp(c,o,l)}catch(g){return js(g instanceof ml?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return f.ge===0?null:f}ct(e,t,i){return t.Ce.count===i-this.Pt(e,t.targetId)?0:2}Pt(e,t){const i=this.Ge.getRemoteKeysForTarget(t);let o=0;return i.forEach((l=>{const c=this.Ge.ht(),f=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.et(t,l,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((l,c)=>{const f=this.ot(c);if(f){if(l.current&&Hf(f.target)){const g=new Te(f.target.path);this.It(g).has(c)||this.Et(c,g)||this.et(c,g,Nt.newNoDocument(g,e))}l.Be&&(t.set(c,l.ke()),l.Ke())}}));let i=Le();this.Je.forEach(((l,c)=>{let f=!0;c.forEachWhile((g=>{const y=this.ot(g);return!y||y.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(i=i.add(l))})),this.je.forEach(((l,c)=>c.setReadTime(e)));const o=new Eh(e,t,this.Ze,this.je,i);return this.je=Qr(),this.He=fc(),this.Je=fc(),this.Ze=new at(Me),o}Ye(e,t){if(!this.rt(e))return;const i=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,i),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,i){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.qe(t,1):o.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),i&&(this.je=this.je.insert(t,i))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Gv,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new Ct(Me),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new Ct(Me),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||he("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Gv),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function fc(){return new at(Te.comparator)}function Kv(){return new at(Te.comparator)}const NP={asc:"ASCENDING",desc:"DESCENDING"},DP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},VP={and:"AND",or:"OR"};class OP{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Qf(n,e){return n.useProto3Json||jl(e)?e:{value:e}}function Qc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function YE(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function MP(n,e){return Qc(n,e.toTimestamp())}function En(n){return ze(!!n,49232),Re.fromTimestamp((function(t){const i=Gi(t);return new nt(i.seconds,i.nanos)})(n))}function Up(n,e){return Yf(n,e).canonicalString()}function Yf(n,e){const t=(function(o){return new Ye(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function JE(n){const e=Ye.fromString(n);return ze(rT(e),10190,{key:e.toString()}),e}function Yc(n,e){return Up(n.databaseId,e.path)}function Il(n,e){const t=JE(e);if(t.get(1)!==n.databaseId.projectId)throw new ie(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ie(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Te(ZE(t))}function XE(n,e){return Up(n.databaseId,e)}function LP(n){const e=JE(n);return e.length===4?Ye.emptyPath():ZE(e)}function Jf(n){return new Ye(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ZE(n){return ze(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Qv(n,e,t){return{name:Yc(n,e),fields:t.value.mapValue.fields}}function FP(n,e){return"found"in e?(function(i,o){ze(!!o.found,43571),o.found.name,o.found.updateTime;const l=Il(i,o.found.name),c=En(o.found.updateTime),f=o.found.createTime?En(o.found.createTime):Re.min(),g=new Jt({mapValue:{fields:o.found.fields}});return Nt.newFoundDocument(l,c,f,g)})(n,e):"missing"in e?(function(i,o){ze(!!o.missing,3894),ze(!!o.readTime,22933);const l=Il(i,o.missing),c=En(o.readTime);return Nt.newNoDocument(l,c)})(n,e):Ie(7234,{result:e})}function UP(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Ie(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(y,_){return y.useProto3Json?(ze(_===void 0||typeof _=="string",58123),jt.fromBase64String(_||"")):(ze(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array,16193),jt.fromUint8Array(_||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,f=c&&(function(y){const _=y.code===void 0?H.UNKNOWN:GE(y.code);return new ie(_,y.message||"")})(c);t=new QE(i,o,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=Il(n,i.document.name),l=En(i.document.updateTime),c=i.document.createTime?En(i.document.createTime):Re.min(),f=new Jt({mapValue:{fields:i.document.fields}}),g=Nt.newFoundDocument(o,l,c,f),y=i.targetIds||[],_=i.removedTargetIds||[];t=new xc(y,_,g.key,g)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=Il(n,i.document),l=i.readTime?En(i.readTime):Re.min(),c=Nt.newNoDocument(o,l),f=i.removedTargetIds||[];t=new xc([],f,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=Il(n,i.document),l=i.removedTargetIds||[];t=new xc([],l,o,null)}else{if(!("filter"in e))return Ie(11601,{Vt:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,c=new kP(o,l),f=i.targetId;t=new KE(f,c)}}return t}function eT(n,e){let t;if(e instanceof zl)t={update:Qv(n,e.key,e.value)};else if(e instanceof Mp)t={delete:Yc(n,e.key)};else if(e instanceof es)t={update:Qv(n,e.key,e.data),updateMask:KP(e.fieldMask)};else{if(!(e instanceof qE))return Ie(16599,{dt:e.type});t={verify:Yc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,c){const f=c.transform;if(f instanceof Nl)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof Dl)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof Vl)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof Kc)return{fieldPath:c.field.canonicalString(),increment:f.Ae};throw Ie(20930,{transform:c.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:MP(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Ie(27497)})(n,e.precondition)),t}function jP(n,e){return n&&n.length>0?(ze(e!==void 0,14353),n.map((t=>(function(o,l){let c=o.updateTime?En(o.updateTime):En(l);return c.isEqual(Re.min())&&(c=En(l)),new IP(c,o.transformResults||[])})(t,e)))):[]}function zP(n,e){return{documents:[XE(n,e.path)]}}function BP(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=XE(n,o);const l=(function(y){if(y.length!==0)return nT(qn.create(y,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const c=(function(y){if(y.length!==0)return y.map((_=>(function(I){return{field:Bo(I.field),direction:qP(I.dir)}})(_)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const f=Qf(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{ft:t,parent:o}}function $P(n){let e=LP(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){ze(i===1,65062);const _=t.from[0];_.allDescendants?o=_.collectionId:e=e.child(_.collectionId)}let l=[];t.where&&(l=(function(E){const I=tT(E);return I instanceof qn&&kE(I)?I.getFilters():[I]})(t.where));let c=[];t.orderBy&&(c=(function(E){return E.map((I=>(function(W){return new bl($o(W.field),(function(z){switch(z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(W.direction))})(I)))})(t.orderBy));let f=null;t.limit&&(f=(function(E){let I;return I=typeof E=="object"?E.value:E,jl(I)?null:I})(t.limit));let g=null;t.startAt&&(g=(function(E){const I=!!E.before,O=E.values||[];return new Gc(O,I)})(t.startAt));let y=null;return t.endAt&&(y=(function(E){const I=!E.before,O=E.values||[];return new Gc(O,I)})(t.endAt)),aP(e,o,c,l,f,"F",g,y)}function WP(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ie(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function tT(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=$o(t.unaryFilter.field);return Tt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=$o(t.unaryFilter.field);return Tt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=$o(t.unaryFilter.field);return Tt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=$o(t.unaryFilter.field);return Tt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ie(61313);default:return Ie(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Tt.create($o(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ie(58110);default:return Ie(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return qn.create(t.compositeFilter.filters.map((i=>tT(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ie(1026)}})(t.compositeFilter.op))})(n):Ie(30097,{filter:n})}function qP(n){return NP[n]}function HP(n){return DP[n]}function GP(n){return VP[n]}function Bo(n){return{fieldPath:n.canonicalString()}}function $o(n){return Ft.fromServerFormat(n.fieldPath)}function nT(n){return n instanceof Tt?(function(t){if(t.op==="=="){if(Mv(t.value))return{unaryFilter:{field:Bo(t.field),op:"IS_NAN"}};if(Ov(t.value))return{unaryFilter:{field:Bo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Mv(t.value))return{unaryFilter:{field:Bo(t.field),op:"IS_NOT_NAN"}};if(Ov(t.value))return{unaryFilter:{field:Bo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bo(t.field),op:HP(t.op),value:t.value}}})(n):n instanceof qn?(function(t){const i=t.getFilters().map((o=>nT(o)));return i.length===1?i[0]:{compositeFilter:{op:GP(t.op),filters:i}}})(n):Ie(54877,{filter:n})}function KP(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function rT(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function iT(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class Li{constructor(e,t,i,o,l=Re.min(),c=Re.min(),f=jt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=f,this.expectedCount=g}withSequenceNumber(e){return new Li(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Li(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Li(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Li(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class QP{constructor(e){this.yt=e}}function YP(n){const e=$P({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Kf(e,e.limit,"L"):e}/**
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
 */class JP{constructor(){this.Sn=new XP}addToCollectionParentIndex(e,t){return this.Sn.add(t),K.resolve()}getCollectionParents(e,t){return K.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return K.resolve()}deleteFieldIndex(e,t){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,t){return K.resolve()}getDocumentsMatchingTarget(e,t){return K.resolve(null)}getIndexType(e,t){return K.resolve(0)}getFieldIndexes(e,t){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,t){return K.resolve(Hi.min())}getMinOffsetFromCollectionGroup(e,t){return K.resolve(Hi.min())}updateCollectionGroup(e,t,i){return K.resolve()}updateIndexEntries(e,t){return K.resolve()}}class XP{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new Ct(Ye.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new Ct(Ye.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Yv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},sT=41943040;class an{static withCacheSize(e){return new an(e,an.DEFAULT_COLLECTION_PERCENTILE,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */an.DEFAULT_COLLECTION_PERCENTILE=10,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,an.DEFAULT=new an(sT,an.DEFAULT_COLLECTION_PERCENTILE,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),an.DISABLED=new an(-1,0,0);/**
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
 */class ra{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new ra(0)}static ar(){return new ra(-1)}}/**
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
 */const Jv="LruGarbageCollector",ZP=1048576;function Xv([n,e],[t,i]){const o=Me(n,t);return o===0?Me(e,i):o}class ex{constructor(e){this.Pr=e,this.buffer=new Ct(Xv),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();Xv(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class tx{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){he(Jv,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ha(t)?he(Jv,"Ignoring IndexedDB error during garbage collection: ",t):await ca(t)}await this.Ar(3e5)}))}}class nx{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return K.resolve(ph.ce);const i=new ex(t);return this.Vr.forEachTarget(e,(o=>i.Er(o.sequenceNumber))).next((()=>this.Vr.mr(e,(o=>i.Er(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(he("LruGarbageCollector","Garbage collection skipped; disabled"),K.resolve(Yv)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(he("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Yv):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let i,o,l,c,f,g,y;const _=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((E=>(E>this.params.maximumSequenceNumbersToCollect?(he("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),o=this.params.maximumSequenceNumbersToCollect):o=E,c=Date.now(),this.nthSequenceNumber(e,o)))).next((E=>(i=E,f=Date.now(),this.removeTargets(e,i,t)))).next((E=>(l=E,g=Date.now(),this.removeOrphanedDocuments(e,i)))).next((E=>(y=Date.now(),jo()<=Oe.DEBUG&&he("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-_}ms
	Determined least recently used ${o} in `+(f-c)+`ms
	Removed ${l} targets in `+(g-f)+`ms
	Removed ${E} documents in `+(y-g)+`ms
Total Duration: ${y-_}ms`),K.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:E}))))}}function rx(n,e){return new nx(n,e)}/**
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
 */class ix{constructor(){this.changes=new Hs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Nt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?K.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class sx{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class ox{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&Tl(i.mutation,o,vn.empty(),nt.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,Le()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=Le()){const o=Vs();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((l=>{let c=pl();return l.forEach(((f,g)=>{c=c.insert(f,g.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const i=Vs();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,Le())))}populateOverlays(e,t,i){const o=[];return i.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((c,f)=>{t.set(c,f)}))}))}computeViews(e,t,i,o){let l=Qr();const c=El(),f=(function(){return El()})();return t.forEach(((g,y)=>{const _=i.get(y.key);o.has(y.key)&&(_===void 0||_.mutation instanceof es)?l=l.insert(y.key,y):_!==void 0?(c.set(y.key,_.mutation.getFieldMask()),Tl(_.mutation,y,_.mutation.getFieldMask(),nt.now())):c.set(y.key,vn.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((y,_)=>c.set(y,_))),t.forEach(((y,_)=>f.set(y,new sx(_,c.get(y)??null)))),f)))}recalculateAndSaveOverlays(e,t){const i=El();let o=new at(((c,f)=>c-f)),l=Le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const f of c)f.keys().forEach((g=>{const y=t.get(g);if(y===null)return;let _=i.get(g)||vn.empty();_=f.applyToLocalView(y,_),i.set(g,_);const E=(o.get(f.batchId)||Le()).add(g);o=o.insert(f.batchId,E)}))})).next((()=>{const c=[],f=o.getReverseIterator();for(;f.hasNext();){const g=f.getNext(),y=g.key,_=g.value,E=LE();_.forEach((I=>{if(!l.has(I)){const O=$E(t.get(I),i.get(I));O!==null&&E.set(I,O),l=l.add(I)}})),c.push(this.documentOverlayCache.saveOverlays(e,y,E))}return K.waitFor(c)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return lP(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):NE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((l=>{const c=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):K.resolve(Vs());let f=Cl,g=l;return c.next((y=>K.forEach(y,((_,E)=>(f<E.largestBatchId&&(f=E.largestBatchId),l.get(_)?K.resolve():this.remoteDocumentCache.getEntry(e,_).next((I=>{g=g.insert(_,I)}))))).next((()=>this.populateOverlays(e,y,l))).next((()=>this.computeViews(e,g,y,Le()))).next((_=>({batchId:f,changes:ME(_)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Te(t)).next((i=>{let o=pl();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let c=pl();return this.indexManager.getCollectionParents(e,l).next((f=>K.forEach(f,(g=>{const y=(function(E,I){return new da(I,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next((_=>{_.forEach(((E,I)=>{c=c.insert(E,I)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o)))).next((c=>{l.forEach(((g,y)=>{const _=y.getKey();c.get(_)===null&&(c=c.insert(_,Nt.newInvalidDocument(_)))}));let f=pl();return c.forEach(((g,y)=>{const _=l.get(g);_!==void 0&&Tl(_.mutation,y,vn.empty(),nt.now()),vh(t,y)&&(f=f.insert(g,y))})),f}))}}/**
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
 */class ax{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return K.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:En(o.createTime)}})(t)),K.resolve()}getNamedQuery(e,t){return K.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(o){return{name:o.name,query:YP(o.bundledQuery),readTime:En(o.readTime)}})(t)),K.resolve()}}/**
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
 */class lx{constructor(){this.overlays=new at(Te.comparator),this.Lr=new Map}getOverlay(e,t){return K.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Vs();return K.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&i.set(o,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,l)=>{this.bt(e,t,l)})),K.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.Lr.get(i);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.Lr.delete(i)),K.resolve()}getOverlaysForCollection(e,t,i){const o=Vs(),l=t.length+1,c=new Te(t.child("")),f=this.overlays.getIteratorFrom(c);for(;f.hasNext();){const g=f.getNext().value,y=g.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&g.largestBatchId>i&&o.set(g.getKey(),g)}return K.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new at(((y,_)=>y-_));const c=this.overlays.getIterator();for(;c.hasNext();){const y=c.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let _=l.get(y.largestBatchId);_===null&&(_=Vs(),l=l.insert(y.largestBatchId,_)),_.set(y.getKey(),y)}}const f=Vs(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((y,_)=>f.set(y,_))),!(f.size()>=o)););return K.resolve(f)}bt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const c=this.Lr.get(o.largestBatchId).delete(i.key);this.Lr.set(o.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new CP(t,i));let l=this.Lr.get(t);l===void 0&&(l=Le(),this.Lr.set(t,l)),this.Lr.set(t,l.add(i.key))}}/**
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
 */class ux{constructor(){this.sessionToken=jt.EMPTY_BYTE_STRING}getSessionToken(e){return K.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,K.resolve()}}/**
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
 */class jp{constructor(){this.kr=new Ct(bt.Kr),this.qr=new Ct(bt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const i=new bt(e,t);this.kr=this.kr.add(i),this.qr=this.qr.add(i)}$r(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new bt(e,t))}Qr(e,t){e.forEach((i=>this.removeReference(i,t)))}Gr(e){const t=new Te(new Ye([])),i=new bt(t,e),o=new bt(t,e+1),l=[];return this.qr.forEachInRange([i,o],(c=>{this.Wr(c),l.push(c.key)})),l}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new Te(new Ye([])),i=new bt(t,e),o=new bt(t,e+1);let l=Le();return this.qr.forEachInRange([i,o],(c=>{l=l.add(c.key)})),l}containsKey(e){const t=new bt(e,0),i=this.kr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class bt{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return Te.comparator(e.key,t.key)||Me(e.Hr,t.Hr)}static Ur(e,t){return Me(e.Hr,t.Hr)||Te.comparator(e.key,t.key)}}/**
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
 */class cx{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new Ct(bt.Kr)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new RP(l,t,i,o);this.mutationQueue.push(c);for(const f of o)this.Jr=this.Jr.add(new bt(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return K.resolve(c)}lookupMutationBatch(e,t){return K.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Xr(i),l=o<0?0:o;return K.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?xp:this.Yn-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new bt(t,0),o=new bt(t,Number.POSITIVE_INFINITY),l=[];return this.Jr.forEachInRange([i,o],(c=>{const f=this.Zr(c.Hr);l.push(f)})),K.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Ct(Me);return t.forEach((o=>{const l=new bt(o,0),c=new bt(o,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([l,c],(f=>{i=i.add(f.Hr)}))})),K.resolve(this.Yr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;Te.isDocumentKey(l)||(l=l.child(""));const c=new bt(new Te(l),0);let f=new Ct(Me);return this.Jr.forEachWhile((g=>{const y=g.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(f=f.add(g.Hr)),!0)}),c),K.resolve(this.Yr(f))}Yr(e){const t=[];return e.forEach((i=>{const o=this.Zr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){ze(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Jr;return K.forEach(t.mutations,(o=>{const l=new bt(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Jr=i}))}nr(e){}containsKey(e,t){const i=new bt(t,0),o=this.Jr.firstAfterOrEqual(i);return K.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class hx{constructor(e){this.ti=e,this.docs=(function(){return new at(Te.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,c=this.ti(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return K.resolve(i?i.document.mutableCopy():Nt.newInvalidDocument(t))}getEntries(e,t){let i=Qr();return t.forEach((o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():Nt.newInvalidDocument(o))})),K.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Qr();const c=t.path,f=new Te(c.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(f);for(;g.hasNext();){const{key:y,value:{document:_}}=g.getNext();if(!c.isPrefixOf(y.path))break;y.path.length>c.length+1||Fk(Lk(_),i)<=0||(o.has(_.key)||vh(t,_))&&(l=l.insert(_.key,_.mutableCopy()))}return K.resolve(l)}getAllFromCollectionGroup(e,t,i,o){Ie(9500)}ni(e,t){return K.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new dx(this)}getSize(e){return K.resolve(this.size)}}class dx extends ix{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Mr.addEntry(e,o)):this.Mr.removeEntry(i)})),K.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class fx{constructor(e){this.persistence=e,this.ri=new Hs((t=>Dp(t)),Vp),this.lastRemoteSnapshotVersion=Re.min(),this.highestTargetId=0,this.ii=0,this.si=new jp,this.targetCount=0,this.oi=ra._r()}forEachTarget(e,t){return this.ri.forEach(((i,o)=>t(o))),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.ii&&(this.ii=t),K.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new ra(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,K.resolve()}updateTargetData(e,t){return this.lr(t),K.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.ri.forEach(((c,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.ri.delete(c),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),K.waitFor(l).next((()=>o))}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,t){const i=this.ri.get(t)||null;return K.resolve(i)}addMatchingKeys(e,t,i){return this.si.$r(t,i),K.resolve()}removeMatchingKeys(e,t,i){this.si.Qr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((c=>{l.push(o.markPotentiallyOrphaned(e,c))})),K.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),K.resolve()}getMatchingKeysForTargetId(e,t){const i=this.si.jr(t);return K.resolve(i)}containsKey(e,t){return K.resolve(this.si.containsKey(t))}}/**
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
 */class oT{constructor(e,t){this._i={},this.overlays={},this.ai=new ph(0),this.ui=!1,this.ui=!0,this.ci=new ux,this.referenceDelegate=e(this),this.li=new fx(this),this.indexManager=new JP,this.remoteDocumentCache=(function(o){return new hx(o)})((i=>this.referenceDelegate.hi(i))),this.serializer=new QP(t),this.Pi=new ax(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new lx,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this._i[e.toKey()];return i||(i=new cx(t,this.referenceDelegate),this._i[e.toKey()]=i),i}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,i){he("MemoryPersistence","Starting transaction:",e);const o=new px(this.ai.next());return this.referenceDelegate.Ti(),i(o).next((l=>this.referenceDelegate.Ii(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ei(e,t){return K.or(Object.values(this._i).map((i=>()=>i.containsKey(e,t))))}}class px extends jk{constructor(e){super(),this.currentSequenceNumber=e}}class zp{constructor(e){this.persistence=e,this.Ri=new jp,this.Ai=null}static Vi(e){return new zp(e)}get di(){if(this.Ai)return this.Ai;throw Ie(60996)}addReference(e,t,i){return this.Ri.addReference(i,t),this.di.delete(i.toString()),K.resolve()}removeReference(e,t,i){return this.Ri.removeReference(i,t),this.di.add(i.toString()),K.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),K.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((o=>this.di.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.di.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.di,(i=>{const o=Te.fromPath(i);return this.mi(e,o).next((l=>{l||t.removeEntry(o,Re.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((i=>{i?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return K.or([()=>K.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Jc{constructor(e,t){this.persistence=e,this.fi=new Hs((i=>$k(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=rx(this,t)}static Vi(e,t){return new Jc(e,t)}Ti(){}Ii(e){return K.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}pr(e){let t=0;return this.mr(e,(i=>{t++})).next((()=>t))}mr(e,t){return K.forEach(this.fi,((i,o)=>this.wr(e,i,o).next((l=>l?K.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ni(e,(c=>this.wr(e,c,t).next((f=>{f||(i++,l.removeEntry(c,Re.min()))})))).next((()=>l.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),K.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),K.resolve()}removeReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),K.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),K.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Cc(e.data.value)),t}wr(e,t,i){return K.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.fi.get(t);return K.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Bp{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Ts=i,this.Is=o}static Es(e,t){let i=Le(),o=Le();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Bp(e,t.fromCache,i,o)}}/**
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
 */class mx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class gx{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return MS()?8:zk(Kt())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.gs(e,t).next((c=>{l.result=c})).next((()=>{if(!l.result)return this.ps(e,t,o,i).next((c=>{l.result=c}))})).next((()=>{if(l.result)return;const c=new mx;return this.ys(e,t,c).next((f=>{if(l.result=f,this.As)return this.ws(e,t,c,f.size)}))})).next((()=>l.result))}ws(e,t,i,o){return i.documentReadCount<this.Vs?(jo()<=Oe.DEBUG&&he("QueryEngine","SDK will not create cache indexes for query:",zo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),K.resolve()):(jo()<=Oe.DEBUG&&he("QueryEngine","Query:",zo(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.ds*o?(jo()<=Oe.DEBUG&&he("QueryEngine","The SDK decides to create cache indexes for query:",zo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_r(t))):K.resolve())}gs(e,t){if(jv(t))return K.resolve(null);let i=_r(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Kf(t,null,"F"),i=_r(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const c=Le(...l);return this.fs.getDocuments(e,c).next((f=>this.indexManager.getMinOffset(e,i).next((g=>{const y=this.bs(t,f);return this.Ss(t,y,c,g.readTime)?this.gs(e,Kf(t,null,"F")):this.Ds(e,y,t,g)}))))})))))}ps(e,t,i,o){return jv(t)||o.isEqual(Re.min())?K.resolve(null):this.fs.getDocuments(e,i).next((l=>{const c=this.bs(t,l);return this.Ss(t,c,i,o)?K.resolve(null):(jo()<=Oe.DEBUG&&he("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),zo(t)),this.Ds(e,c,t,Mk(o,Cl)).next((f=>f)))}))}bs(e,t){let i=new Ct(VE(e));return t.forEach(((o,l)=>{vh(e,l)&&(i=i.add(l))})),i}Ss(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ys(e,t,i){return jo()<=Oe.DEBUG&&he("QueryEngine","Using full collection scan to execute query:",zo(t)),this.fs.getDocumentsMatchingQuery(e,t,Hi.min(),i)}Ds(e,t,i,o){return this.fs.getDocumentsMatchingQuery(e,i,o).next((l=>(t.forEach((c=>{l=l.insert(c.key,c)})),l)))}}/**
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
 */const $p="LocalStore",yx=3e8;class vx{constructor(e,t,i,o){this.persistence=e,this.Cs=t,this.serializer=o,this.vs=new at(Me),this.Fs=new Hs((l=>Dp(l)),Vp),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(i)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ox(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function _x(n,e,t,i){return new vx(n,e,t,i)}async function aT(n,e){const t=Pe(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((l=>(o=l,t.Os(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const c=[],f=[];let g=Le();for(const y of o){c.push(y.batchId);for(const _ of y.mutations)g=g.add(_.key)}for(const y of l){f.push(y.batchId);for(const _ of y.mutations)g=g.add(_.key)}return t.localDocuments.getDocuments(i,g).next((y=>({Ns:y,removedBatchIds:c,addedBatchIds:f})))}))}))}function wx(n,e){const t=Pe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),l=t.xs.newChangeBuffer({trackRemovals:!0});return(function(f,g,y,_){const E=y.batch,I=E.keys();let O=K.resolve();return I.forEach((W=>{O=O.next((()=>_.getEntry(g,W))).next((M=>{const z=y.docVersions.get(W);ze(z!==null,48541),M.version.compareTo(z)<0&&(E.applyToRemoteDocument(M,y),M.isValidDocument()&&(M.setReadTime(y.commitVersion),_.addEntry(M)))}))})),O.next((()=>f.mutationQueue.removeMutationBatch(g,E)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(f){let g=Le();for(let y=0;y<f.mutationResults.length;++y)f.mutationResults[y].transformResults.length>0&&(g=g.add(f.batch.mutations[y].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function lT(n){const e=Pe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function Ex(n,e){const t=Pe(n),i=e.snapshotVersion;let o=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const c=t.xs.newChangeBuffer({trackRemovals:!0});o=t.vs;const f=[];e.targetChanges.forEach(((_,E)=>{const I=o.get(E);if(!I)return;f.push(t.li.removeMatchingKeys(l,_.removedDocuments,E).next((()=>t.li.addMatchingKeys(l,_.addedDocuments,E))));let O=I.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(E)!==null?O=O.withResumeToken(jt.EMPTY_BYTE_STRING,Re.min()).withLastLimboFreeSnapshotVersion(Re.min()):_.resumeToken.approximateByteSize()>0&&(O=O.withResumeToken(_.resumeToken,i)),o=o.insert(E,O),(function(M,z,ee){return M.resumeToken.approximateByteSize()===0||z.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=yx?!0:ee.addedDocuments.size+ee.modifiedDocuments.size+ee.removedDocuments.size>0})(I,O,_)&&f.push(t.li.updateTargetData(l,O))}));let g=Qr(),y=Le();if(e.documentUpdates.forEach((_=>{e.resolvedLimboDocuments.has(_)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,_))})),f.push(Tx(l,c,e.documentUpdates).next((_=>{g=_.Bs,y=_.Ls}))),!i.isEqual(Re.min())){const _=t.li.getLastRemoteSnapshotVersion(l).next((E=>t.li.setTargetsMetadata(l,l.currentSequenceNumber,i)));f.push(_)}return K.waitFor(f).next((()=>c.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,y))).next((()=>g))})).then((l=>(t.vs=o,l)))}function Tx(n,e,t){let i=Le(),o=Le();return t.forEach((l=>i=i.add(l))),e.getEntries(n,i).next((l=>{let c=Qr();return t.forEach(((f,g)=>{const y=l.get(f);g.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(f)),g.isNoDocument()&&g.version.isEqual(Re.min())?(e.removeEntry(f,g.readTime),c=c.insert(f,g)):!y.isValidDocument()||g.version.compareTo(y.version)>0||g.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(g),c=c.insert(f,g)):he($p,"Ignoring outdated watch update for ",f,". Current version:",y.version," Watch version:",g.version)})),{Bs:c,Ls:o}}))}function Ix(n,e){const t=Pe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=xp),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function Sx(n,e){const t=Pe(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.li.getTargetData(i,e).next((l=>l?(o=l,K.resolve(o)):t.li.allocateTargetId(i).next((c=>(o=new Li(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.li.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.vs.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.vs=t.vs.insert(i.targetId,i),t.Fs.set(e,i.targetId)),i}))}async function Xf(n,e,t){const i=Pe(n),o=i.vs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(c=>i.persistence.referenceDelegate.removeTarget(c,o)))}catch(c){if(!ha(c))throw c;he($p,`Failed to update sequence numbers for target ${e}: ${c}`)}i.vs=i.vs.remove(e),i.Fs.delete(o.target)}function Zv(n,e,t){const i=Pe(n);let o=Re.min(),l=Le();return i.persistence.runTransaction("Execute query","readwrite",(c=>(function(g,y,_){const E=Pe(g),I=E.Fs.get(_);return I!==void 0?K.resolve(E.vs.get(I)):E.li.getTargetData(y,_)})(i,c,_r(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.li.getMatchingKeysForTargetId(c,f.targetId).next((g=>{l=g}))})).next((()=>i.Cs.getDocumentsMatchingQuery(c,e,t?o:Re.min(),t?l:Le()))).next((f=>(Ax(i,hP(e),f),{documents:f,ks:l})))))}function Ax(n,e,t){let i=n.Ms.get(e)||Re.min();t.forEach(((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),n.Ms.set(e,i)}class e_{constructor(){this.activeTargetIds=yP()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Rx{constructor(){this.vo=new e_,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,i){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new e_,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Cx{Mo(e){}shutdown(){}}/**
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
 */const t_="ConnectivityMonitor";class n_{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){he(t_,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){he(t_,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let pc=null;function Zf(){return pc===null?pc=(function(){return 268435456+Math.round(2147483648*Math.random())})():pc++,"0x"+pc.toString(16)}/**
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
 */const _f="RestConnection",kx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Px{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${i}/databases/${o}`,this.$o=this.databaseId.database===qc?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Wo(e,t,i,o,l){const c=Zf(),f=this.Qo(e,t.toUriEncodedString());he(_f,`Sending RPC '${e}' ${c}:`,f,i);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(g,o,l);const{host:y}=new URL(f),_=oa(y);return this.zo(e,f,g,i,_).then((E=>(he(_f,`Received RPC '${e}' ${c}: `,E),E)),(E=>{throw js(_f,`RPC '${e}' ${c} failed with error: `,E,"url: ",f,"request:",i),E}))}jo(e,t,i,o,l,c){return this.Wo(e,t,i,o,l)}Go(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ua})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),i&&i.headers.forEach(((o,l)=>e[l]=o))}Qo(e,t){const i=kx[e];let o=`${this.qo}/v1/${t}:${i}`;return this.databaseInfo.apiKey&&(o=`${o}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),o}terminate(){}}/**
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
 */class xx{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const Ht="WebChannelConnection",cl=(n,e,t)=>{n.listen(e,(i=>{try{t(i)}catch(o){setTimeout((()=>{throw o}),0)}}))};class Yo extends Px{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Yo.c_){const e=cE();cl(e,uE.STAT_EVENT,(t=>{t.stat===zf.PROXY?he(Ht,"STAT_EVENT: detected buffering proxy"):t.stat===zf.NOPROXY&&he(Ht,"STAT_EVENT: detected no buffering proxy")})),Yo.c_=!0}}zo(e,t,i,o,l){const c=Zf();return new Promise(((f,g)=>{const y=new aE;y.setWithCredentials(!0),y.listenOnce(lE.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case Rc.NO_ERROR:const E=y.getResponseJson();he(Ht,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(E)),f(E);break;case Rc.TIMEOUT:he(Ht,`RPC '${e}' ${c} timed out`),g(new ie(H.DEADLINE_EXCEEDED,"Request time out"));break;case Rc.HTTP_ERROR:const I=y.getStatus();if(he(Ht,`RPC '${e}' ${c} failed with status:`,I,"response text:",y.getResponseText()),I>0){let O=y.getResponseJson();Array.isArray(O)&&(O=O[0]);const W=O==null?void 0:O.error;if(W&&W.status&&W.message){const M=(function(ee){const ne=ee.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(ne)>=0?ne:H.UNKNOWN})(W.status);g(new ie(M,W.message))}else g(new ie(H.UNKNOWN,"Server responded with status "+y.getStatus()))}else g(new ie(H.UNAVAILABLE,"Connection failed."));break;default:Ie(9055,{l_:e,streamId:c,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{he(Ht,`RPC '${e}' ${c} completed.`)}}));const _=JSON.stringify(o);he(Ht,`RPC '${e}' ${c} sending request:`,o),y.send(t,"POST",_,i,15)}))}T_(e,t,i){const o=Zf(),l=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=this.createWebChannelTransport(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(f.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Go(f.initMessageHeaders,t,i),f.encodeInitMessageHeaders=!0;const y=l.join("");he(Ht,`Creating RPC '${e}' stream ${o}: ${y}`,f);const _=c.createWebChannel(y,f);this.I_(_);let E=!1,I=!1;const O=new xx({Ho:W=>{I?he(Ht,`Not sending because RPC '${e}' stream ${o} is closed:`,W):(E||(he(Ht,`Opening RPC '${e}' stream ${o} transport.`),_.open(),E=!0),he(Ht,`RPC '${e}' stream ${o} sending:`,W),_.send(W))},Jo:()=>_.close()});return cl(_,fl.EventType.OPEN,(()=>{I||(he(Ht,`RPC '${e}' stream ${o} transport opened.`),O.i_())})),cl(_,fl.EventType.CLOSE,(()=>{I||(I=!0,he(Ht,`RPC '${e}' stream ${o} transport closed`),O.o_(),this.E_(_))})),cl(_,fl.EventType.ERROR,(W=>{I||(I=!0,js(Ht,`RPC '${e}' stream ${o} transport errored. Name:`,W.name,"Message:",W.message),O.o_(new ie(H.UNAVAILABLE,"The operation could not be completed")))})),cl(_,fl.EventType.MESSAGE,(W=>{var M;if(!I){const z=W.data[0];ze(!!z,16349);const ee=z,ne=(ee==null?void 0:ee.error)||((M=ee[0])==null?void 0:M.error);if(ne){he(Ht,`RPC '${e}' stream ${o} received error:`,ne);const se=ne.status;let le=(function(R){const S=wt[R];if(S!==void 0)return GE(S)})(se),oe=ne.message;se==="NOT_FOUND"&&oe.includes("database")&&oe.includes("does not exist")&&oe.includes(this.databaseId.database)&&js(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),le===void 0&&(le=H.INTERNAL,oe="Unknown error status: "+se+" with message "+ne.message),I=!0,O.o_(new ie(le,oe)),_.close()}else he(Ht,`RPC '${e}' stream ${o} received:`,z),O.__(z)}})),Yo.u_(),setTimeout((()=>{O.s_()}),0),O}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,i){super.Go(e,t,i),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return hE()}}/**
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
 */function bx(n){return new Yo(n)}function wf(){return typeof document<"u"?document:null}/**
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
 */function Th(n){return new OP(n,!0)}/**
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
 */Yo.c_=!1;class Wp{constructor(e,t,i=1e3,o=1.5,l=6e4){this.Ci=e,this.timerId=t,this.R_=i,this.A_=o,this.V_=l,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),i=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-i);o>0&&he("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const r_="PersistentStream";class uT{constructor(e,t,i,o,l,c,f,g){this.Ci=e,this.b_=i,this.S_=o,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=f,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Wp(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===H.RESOURCE_EXHAUSTED?(Kr(t.toString()),Kr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.D_===t&&this.G_(i,o)}),(i=>{e((()=>{const o=new ie(H.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(o)}))}))}G_(e,t){const i=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.Yo((()=>{i((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((o=>{i((()=>this.z_(o)))})),this.stream.onMessage((o=>{i((()=>++this.F_==1?this.H_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return he(r_,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(he(r_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Nx extends uT{constructor(e,t,i,o,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=UP(this.serializer,e),i=(function(l){if(!("targetChange"in l))return Re.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Re.min():c.readTime?En(c.readTime):Re.min()})(e);return this.listener.J_(t,i)}Z_(e){const t={};t.database=Jf(this.serializer),t.addTarget=(function(l,c){let f;const g=c.target;if(f=Hf(g)?{documents:zP(l,g)}:{query:BP(l,g).ft},f.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){f.resumeToken=YE(l,c.resumeToken);const y=Qf(l,c.expectedCount);y!==null&&(f.expectedCount=y)}else if(c.snapshotVersion.compareTo(Re.min())>0){f.readTime=Qc(l,c.snapshotVersion.toTimestamp());const y=Qf(l,c.expectedCount);y!==null&&(f.expectedCount=y)}return f})(this.serializer,e);const i=WP(this.serializer,e);i&&(t.labels=i),this.K_(t)}X_(e){const t={};t.database=Jf(this.serializer),t.removeTarget=e,this.K_(t)}}class Dx extends uT{constructor(e,t,i,o,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return ze(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ze(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ze(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=jP(e.writeResults,e.commitTime),i=En(e.commitTime);return this.listener.na(i,t)}ra(){const e={};e.database=Jf(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>eT(this.serializer,i)))};this.K_(t)}}/**
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
 */class Vx{}class Ox extends Vx{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ie(H.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,c])=>this.connection.Wo(e,Yf(t,i),o,l,c))).catch((l=>{throw l.name==="FirebaseError"?(l.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ie(H.UNKNOWN,l.toString())}))}jo(e,t,i,o,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,f])=>this.connection.jo(e,Yf(t,i),o,c,f,l))).catch((c=>{throw c.name==="FirebaseError"?(c.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ie(H.UNKNOWN,c.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function Mx(n,e,t,i){return new Ox(n,e,t,i)}class Lx{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Kr(t),this.aa=!1):he("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const zs="RemoteStore";class Fx{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=l,this.Aa.Mo((c=>{i.enqueueAndForget((async()=>{Gs(this)&&(he(zs,"Restarting streams for network reachability change."),await(async function(g){const y=Pe(g);y.Ea.add(4),await $l(y),y.Va.set("Unknown"),y.Ea.delete(4),await Ih(y)})(this))}))})),this.Va=new Lx(i,o)}}async function Ih(n){if(Gs(n))for(const e of n.Ra)await e(!0)}async function $l(n){for(const e of n.Ra)await e(!1)}function cT(n,e){const t=Pe(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Kp(t)?Gp(t):fa(t).O_()&&Hp(t,e))}function qp(n,e){const t=Pe(n),i=fa(t);t.Ia.delete(e),i.O_()&&hT(t,e),t.Ia.size===0&&(i.O_()?i.L_():Gs(t)&&t.Va.set("Unknown"))}function Hp(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Re.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}fa(n).Z_(e)}function hT(n,e){n.da.$e(e),fa(n).X_(e)}function Gp(n){n.da=new bP({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),fa(n).start(),n.Va.ua()}function Kp(n){return Gs(n)&&!fa(n).x_()&&n.Ia.size>0}function Gs(n){return Pe(n).Ea.size===0}function dT(n){n.da=void 0}async function Ux(n){n.Va.set("Online")}async function jx(n){n.Ia.forEach(((e,t)=>{Hp(n,e)}))}async function zx(n,e){dT(n),Kp(n)?(n.Va.ha(e),Gp(n)):n.Va.set("Unknown")}async function Bx(n,e,t){if(n.Va.set("Online"),e instanceof QE&&e.state===2&&e.cause)try{await(async function(o,l){const c=l.cause;for(const f of l.targetIds)o.Ia.has(f)&&(await o.remoteSyncer.rejectListen(f,c),o.Ia.delete(f),o.da.removeTarget(f))})(n,e)}catch(i){he(zs,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Xc(n,i)}else if(e instanceof xc?n.da.Xe(e):e instanceof KE?n.da.st(e):n.da.tt(e),!t.isEqual(Re.min()))try{const i=await lT(n.localStore);t.compareTo(i)>=0&&await(function(l,c){const f=l.da.Tt(c);return f.targetChanges.forEach(((g,y)=>{if(g.resumeToken.approximateByteSize()>0){const _=l.Ia.get(y);_&&l.Ia.set(y,_.withResumeToken(g.resumeToken,c))}})),f.targetMismatches.forEach(((g,y)=>{const _=l.Ia.get(g);if(!_)return;l.Ia.set(g,_.withResumeToken(jt.EMPTY_BYTE_STRING,_.snapshotVersion)),hT(l,g);const E=new Li(_.target,g,y,_.sequenceNumber);Hp(l,E)})),l.remoteSyncer.applyRemoteEvent(f)})(n,t)}catch(i){he(zs,"Failed to raise snapshot:",i),await Xc(n,i)}}async function Xc(n,e,t){if(!ha(e))throw e;n.Ea.add(1),await $l(n),n.Va.set("Offline"),t||(t=()=>lT(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{he(zs,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Ih(n)}))}function fT(n,e){return e().catch((t=>Xc(n,t,e)))}async function Sh(n){const e=Pe(n),t=Yi(e);let i=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:xp;for(;$x(e);)try{const o=await Ix(e.localStore,i);if(o===null){e.Ta.length===0&&t.L_();break}i=o.batchId,Wx(e,o)}catch(o){await Xc(e,o)}pT(e)&&mT(e)}function $x(n){return Gs(n)&&n.Ta.length<10}function Wx(n,e){n.Ta.push(e);const t=Yi(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function pT(n){return Gs(n)&&!Yi(n).x_()&&n.Ta.length>0}function mT(n){Yi(n).start()}async function qx(n){Yi(n).ra()}async function Hx(n){const e=Yi(n);for(const t of n.Ta)e.ea(t.mutations)}async function Gx(n,e,t){const i=n.Ta.shift(),o=Lp.from(i,e,t);await fT(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await Sh(n)}async function Kx(n,e){e&&Yi(n).Y_&&await(async function(i,o){if((function(c){return HE(c)&&c!==H.ABORTED})(o.code)){const l=i.Ta.shift();Yi(i).B_(),await fT(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o))),await Sh(i)}})(n,e),pT(n)&&mT(n)}async function i_(n,e){const t=Pe(n);t.asyncQueue.verifyOperationInProgress(),he(zs,"RemoteStore received new credentials");const i=Gs(t);t.Ea.add(3),await $l(t),i&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Ih(t)}async function Qx(n,e){const t=Pe(n);e?(t.Ea.delete(2),await Ih(t)):e||(t.Ea.add(2),await $l(t),t.Va.set("Unknown"))}function fa(n){return n.ma||(n.ma=(function(t,i,o){const l=Pe(t);return l.sa(),new Nx(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:Ux.bind(null,n),Yo:jx.bind(null,n),t_:zx.bind(null,n),J_:Bx.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),Kp(n)?Gp(n):n.Va.set("Unknown")):(await n.ma.stop(),dT(n))}))),n.ma}function Yi(n){return n.fa||(n.fa=(function(t,i,o){const l=Pe(t);return l.sa(),new Dx(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:qx.bind(null,n),t_:Kx.bind(null,n),ta:Hx.bind(null,n),na:Gx.bind(null,n)}),n.Ra.push((async e=>{e?(n.fa.B_(),await Sh(n)):(await n.fa.stop(),n.Ta.length>0&&(he(zs,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class Qp{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new vr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const c=Date.now()+i,f=new Qp(e,t,c,o,l);return f.start(i),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yp(n,e){if(Kr("AsyncQueue",`${e}: ${n}`),ha(n))return new ie(H.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Jo{static emptySet(e){return new Jo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||Te.comparator(t.key,i.key):(t,i)=>Te.comparator(t.key,i.key),this.keyedMap=pl(),this.sortedSet=new at(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Jo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Jo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class s_{constructor(){this.ga=new at(Te.comparator)}track(e){const t=e.doc.key,i=this.ga.get(t);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(t,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(t):e.type===1&&i.type===2?this.ga=this.ga.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):Ie(63341,{Vt:e,pa:i}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,i)=>{e.push(i)})),e}}class ia{constructor(e,t,i,o,l,c,f,g,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=f,this.excludesMetadataChanges=g,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const c=[];return t.forEach((f=>{c.push({type:0,doc:f})})),new ia(e,t,Jo.emptySet(t),c,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
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
 */class Yx{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class Jx{constructor(){this.queries=o_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,i){const o=Pe(t),l=o.queries;o.queries=o_(),l.forEach(((c,f)=>{for(const g of f.ba)g.onError(i)}))})(this,new ie(H.ABORTED,"Firestore shutting down"))}}function o_(){return new Hs((n=>DE(n)),yh)}async function Jp(n,e){const t=Pe(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Sa()&&e.Da()&&(i=2):(l=new Yx,i=e.Da()?0:1);try{switch(i){case 0:l.wa=await t.onListen(o,!0);break;case 1:l.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(c){const f=Yp(c,`Initialization of query '${zo(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.ba.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&Zp(t)}async function Xp(n,e){const t=Pe(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const c=l.ba.indexOf(e);c>=0&&(l.ba.splice(c,1),l.ba.length===0?o=e.Da()?0:1:!l.Sa()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function Xx(n,e){const t=Pe(n);let i=!1;for(const o of e){const l=o.query,c=t.queries.get(l);if(c){for(const f of c.ba)f.Fa(o)&&(i=!0);c.wa=o}}i&&Zp(t)}function Zx(n,e,t){const i=Pe(n),o=i.queries.get(e);if(o)for(const l of o.ba)l.onError(t);i.queries.delete(e)}function Zp(n){n.Ca.forEach((e=>{e.next()}))}var ep,a_;(a_=ep||(ep={})).Ma="default",a_.Cache="cache";class em{constructor(e,t,i){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new ia(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const i=t!=="Offline";return(!this.options.Ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=ia.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ep.Cache}}/**
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
 */class gT{constructor(e){this.key=e}}class yT{constructor(e){this.key=e}}class eb{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Le(),this.mutatedKeys=Le(),this.eu=VE(e),this.tu=new Jo(this.eu)}get nu(){return this.Za}ru(e,t){const i=t?t.iu:new s_,o=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,c=o,f=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((_,E)=>{const I=o.get(_),O=vh(this.query,E)?E:null,W=!!I&&this.mutatedKeys.has(I.key),M=!!O&&(O.hasLocalMutations||this.mutatedKeys.has(O.key)&&O.hasCommittedMutations);let z=!1;I&&O?I.data.isEqual(O.data)?W!==M&&(i.track({type:3,doc:O}),z=!0):this.su(I,O)||(i.track({type:2,doc:O}),z=!0,(g&&this.eu(O,g)>0||y&&this.eu(O,y)<0)&&(f=!0)):!I&&O?(i.track({type:0,doc:O}),z=!0):I&&!O&&(i.track({type:1,doc:I}),z=!0,(g||y)&&(f=!0)),z&&(O?(c=c.add(O),l=M?l.add(_):l.delete(_)):(c=c.delete(_),l=l.delete(_)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const _=this.query.limitType==="F"?c.last():c.first();c=c.delete(_.key),l=l.delete(_.key),i.track({type:1,doc:_})}return{tu:c,iu:i,Ss:f,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort(((_,E)=>(function(O,W){const M=z=>{switch(z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ie(20277,{Vt:z})}};return M(O)-M(W)})(_.type,E.type)||this.eu(_.doc,E.doc))),this.ou(i),o=o??!1;const f=t&&!o?this._u():[],g=this.Ya.size===0&&this.current&&!o?1:0,y=g!==this.Xa;return this.Xa=g,c.length!==0||y?{snapshot:new ia(this.query,e.tu,l,c,e.mutatedKeys,g===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:f}:{au:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new s_,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=Le(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Ya=this.Ya.add(i.key))}));const t=[];return e.forEach((i=>{this.Ya.has(i)||t.push(new yT(i))})),this.Ya.forEach((i=>{e.has(i)||t.push(new gT(i))})),t}cu(e){this.Za=e.ks,this.Ya=Le();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return ia.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const tm="SyncEngine";class tb{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class nb{constructor(e){this.key=e,this.hu=!1}}class rb{constructor(e,t,i,o,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new Hs((f=>DE(f)),yh),this.Iu=new Map,this.Eu=new Set,this.Ru=new at(Te.comparator),this.Au=new Map,this.Vu=new jp,this.du={},this.mu=new Map,this.fu=ra.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function ib(n,e,t=!0){const i=IT(n);let o;const l=i.Tu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.lu()):o=await vT(i,e,t,!0),o}async function sb(n,e){const t=IT(n);await vT(t,e,!0,!1)}async function vT(n,e,t,i){const o=await Sx(n.localStore,_r(e)),l=o.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await ob(n,e,l,c==="current",o.resumeToken)),n.isPrimaryClient&&t&&cT(n.remoteStore,o),f}async function ob(n,e,t,i,o){n.pu=(E,I,O)=>(async function(M,z,ee,ne){let se=z.view.ru(ee);se.Ss&&(se=await Zv(M.localStore,z.query,!1).then((({documents:R})=>z.view.ru(R,se))));const le=ne&&ne.targetChanges.get(z.targetId),oe=ne&&ne.targetMismatches.get(z.targetId)!=null,ce=z.view.applyChanges(se,M.isPrimaryClient,le,oe);return u_(M,z.targetId,ce.au),ce.snapshot})(n,E,I,O);const l=await Zv(n.localStore,e,!0),c=new eb(e,l.ks),f=c.ru(l.documents),g=Bl.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=c.applyChanges(f,n.isPrimaryClient,g);u_(n,t,y.au);const _=new tb(e,t,c);return n.Tu.set(e,_),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),y.snapshot}async function ab(n,e,t){const i=Pe(n),o=i.Tu.get(e),l=i.Iu.get(o.targetId);if(l.length>1)return i.Iu.set(o.targetId,l.filter((c=>!yh(c,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await Xf(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&qp(i.remoteStore,o.targetId),tp(i,o.targetId)})).catch(ca)):(tp(i,o.targetId),await Xf(i.localStore,o.targetId,!0))}async function lb(n,e){const t=Pe(n),i=t.Tu.get(e),o=t.Iu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),qp(t.remoteStore,i.targetId))}async function ub(n,e,t){const i=gb(n);try{const o=await(function(c,f){const g=Pe(c),y=nt.now(),_=f.reduce(((O,W)=>O.add(W.key)),Le());let E,I;return g.persistence.runTransaction("Locally write mutations","readwrite",(O=>{let W=Qr(),M=Le();return g.xs.getEntries(O,_).next((z=>{W=z,W.forEach(((ee,ne)=>{ne.isValidDocument()||(M=M.add(ee))}))})).next((()=>g.localDocuments.getOverlayedDocuments(O,W))).next((z=>{E=z;const ee=[];for(const ne of f){const se=AP(ne,E.get(ne.key).overlayedDocument);se!=null&&ee.push(new es(ne.key,se,AE(se.value.mapValue),Xt.exists(!0)))}return g.mutationQueue.addMutationBatch(O,y,ee,f)})).next((z=>{I=z;const ee=z.applyToLocalDocumentSet(E,M);return g.documentOverlayCache.saveOverlays(O,z.batchId,ee)}))})).then((()=>({batchId:I.batchId,changes:ME(E)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(c,f,g){let y=c.du[c.currentUser.toKey()];y||(y=new at(Me)),y=y.insert(f,g),c.du[c.currentUser.toKey()]=y})(i,o.batchId,t),await Wl(i,o.changes),await Sh(i.remoteStore)}catch(o){const l=Yp(o,"Failed to persist write");t.reject(l)}}async function _T(n,e){const t=Pe(n);try{const i=await Ex(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const c=t.Au.get(l);c&&(ze(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?c.hu=!0:o.modifiedDocuments.size>0?ze(c.hu,14607):o.removedDocuments.size>0&&(ze(c.hu,42227),c.hu=!1))})),await Wl(t,i,e)}catch(i){await ca(i)}}function l_(n,e,t){const i=Pe(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Tu.forEach(((l,c)=>{const f=c.view.va(e);f.snapshot&&o.push(f.snapshot)})),(function(c,f){const g=Pe(c);g.onlineState=f;let y=!1;g.queries.forEach(((_,E)=>{for(const I of E.ba)I.va(f)&&(y=!0)})),y&&Zp(g)})(i.eventManager,e),o.length&&i.Pu.J_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function cb(n,e,t){const i=Pe(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Au.get(e),l=o&&o.key;if(l){let c=new at(Te.comparator);c=c.insert(l,Nt.newNoDocument(l,Re.min()));const f=Le().add(l),g=new Eh(Re.min(),new Map,new at(Me),c,f);await _T(i,g),i.Ru=i.Ru.remove(l),i.Au.delete(e),nm(i)}else await Xf(i.localStore,e,!1).then((()=>tp(i,e,t))).catch(ca)}async function hb(n,e){const t=Pe(n),i=e.batch.batchId;try{const o=await wx(t.localStore,e);ET(t,i,null),wT(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Wl(t,o)}catch(o){await ca(o)}}async function db(n,e,t){const i=Pe(n);try{const o=await(function(c,f){const g=Pe(c);return g.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let _;return g.mutationQueue.lookupMutationBatch(y,f).next((E=>(ze(E!==null,37113),_=E.keys(),g.mutationQueue.removeMutationBatch(y,E)))).next((()=>g.mutationQueue.performConsistencyCheck(y))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(y,_,f))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,_))).next((()=>g.localDocuments.getDocuments(y,_)))}))})(i.localStore,e);ET(i,e,t),wT(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Wl(i,o)}catch(o){await ca(o)}}function wT(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function ET(n,e,t){const i=Pe(n);let o=i.du[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.du[i.currentUser.toKey()]=o}}function tp(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Iu.get(e))n.Tu.delete(i),t&&n.Pu.yu(i,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((i=>{n.Vu.containsKey(i)||TT(n,i)}))}function TT(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(qp(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),nm(n))}function u_(n,e,t){for(const i of t)i instanceof gT?(n.Vu.addReference(i.key,e),fb(n,i)):i instanceof yT?(he(tm,"Document no longer in limbo: "+i.key),n.Vu.removeReference(i.key,e),n.Vu.containsKey(i.key)||TT(n,i.key)):Ie(19791,{wu:i})}function fb(n,e){const t=e.key,i=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(i)||(he(tm,"New document in limbo: "+t),n.Eu.add(i),nm(n))}function nm(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new Te(Ye.fromString(e)),i=n.fu.next();n.Au.set(i,new nb(t)),n.Ru=n.Ru.insert(t,i),cT(n.remoteStore,new Li(_r(gh(t.path)),i,"TargetPurposeLimboResolution",ph.ce))}}async function Wl(n,e,t){const i=Pe(n),o=[],l=[],c=[];i.Tu.isEmpty()||(i.Tu.forEach(((f,g)=>{c.push(i.pu(g,e,t).then((y=>{var _;if((y||t)&&i.isPrimaryClient){const E=y?!y.fromCache:(_=t==null?void 0:t.targetChanges.get(g.targetId))==null?void 0:_.current;i.sharedClientState.updateQueryState(g.targetId,E?"current":"not-current")}if(y){o.push(y);const E=Bp.Es(g.targetId,y);l.push(E)}})))})),await Promise.all(c),i.Pu.J_(o),await(async function(g,y){const _=Pe(g);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",(E=>K.forEach(y,(I=>K.forEach(I.Ts,(O=>_.persistence.referenceDelegate.addReference(E,I.targetId,O))).next((()=>K.forEach(I.Is,(O=>_.persistence.referenceDelegate.removeReference(E,I.targetId,O)))))))))}catch(E){if(!ha(E))throw E;he($p,"Failed to update sequence numbers: "+E)}for(const E of y){const I=E.targetId;if(!E.fromCache){const O=_.vs.get(I),W=O.snapshotVersion,M=O.withLastLimboFreeSnapshotVersion(W);_.vs=_.vs.insert(I,M)}}})(i.localStore,l))}async function pb(n,e){const t=Pe(n);if(!t.currentUser.isEqual(e)){he(tm,"User change. New user:",e.toKey());const i=await aT(t.localStore,e);t.currentUser=e,(function(l,c){l.mu.forEach((f=>{f.forEach((g=>{g.reject(new ie(H.CANCELLED,c))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Wl(t,i.Ns)}}function mb(n,e){const t=Pe(n),i=t.Au.get(e);if(i&&i.hu)return Le().add(i.key);{let o=Le();const l=t.Iu.get(e);if(!l)return o;for(const c of l){const f=t.Tu.get(c);o=o.unionWith(f.view.nu)}return o}}function IT(n){const e=Pe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=_T.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=cb.bind(null,e),e.Pu.J_=Xx.bind(null,e.eventManager),e.Pu.yu=Zx.bind(null,e.eventManager),e}function gb(n){const e=Pe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=db.bind(null,e),e}class Zc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Th(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return _x(this.persistence,new gx,e.initialUser,this.serializer)}Cu(e){return new oT(zp.Vi,this.serializer)}Du(e){return new Rx}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Zc.provider={build:()=>new Zc};class yb extends Zc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ze(this.persistence.referenceDelegate instanceof Jc,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new tx(i,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?an.withCacheSize(this.cacheSizeBytes):an.DEFAULT;return new oT((i=>Jc.Vi(i,t)),this.serializer)}}class np{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>l_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=pb.bind(null,this.syncEngine),await Qx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Jx})()}createDatastore(e){const t=Th(e.databaseInfo.databaseId),i=bx(e.databaseInfo);return Mx(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,l,c,f){return new Fx(i,o,l,c,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>l_(this.syncEngine,t,0)),(function(){return n_.v()?new n_:new Cx})())}createSyncEngine(e,t){return(function(o,l,c,f,g,y,_){const E=new rb(o,l,c,f,g,y);return _&&(E.gu=!0),E})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Pe(o);he(zs,"RemoteStore shutting down."),l.Ea.add(5),await $l(l),l.Aa.shutdown(),l.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}np.provider={build:()=>new np};/**
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
 *//**
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
 */class rm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Kr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */let vb=class{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new ie(H.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await(async function(o,l){const c=Pe(o),f={documents:l.map((E=>Yc(c.serializer,E)))},g=await c.jo("BatchGetDocuments",c.serializer.databaseId,Ye.emptyPath(),f,l.length),y=new Map;g.forEach((E=>{const I=FP(c.serializer,E);y.set(I.key.toString(),I)}));const _=[];return l.forEach((E=>{const I=y.get(E.toString());ze(!!I,55234,{key:E}),_.push(I)})),_})(this.datastore,e);return t.forEach((i=>this.recordVersion(i))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(i){this.lastTransactionError=i}this.writtenDocs.add(e.toString())}delete(e){this.write(new Mp(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((t,i)=>{const o=Te.fromPath(i);this.mutations.push(new qE(o,this.precondition(o)))})),await(async function(i,o){const l=Pe(i),c={writes:o.map((f=>eT(l.serializer,f)))};await l.Wo("Commit",l.serializer.databaseId,Ye.emptyPath(),c)})(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw Ie(50498,{Gu:e.constructor.name});t=Re.min()}const i=this.readVersions.get(e.key.toString());if(i){if(!t.isEqual(i))throw new ie(H.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(Re.min())?Xt.exists(!1):Xt.updateTime(t):Xt.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Re.min()))throw new ie(H.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Xt.updateTime(t)}return Xt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}};/**
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
 */class _b{constructor(e,t,i,o,l){this.asyncQueue=e,this.datastore=t,this.options=i,this.updateFunction=o,this.deferred=l,this.zu=i.maxAttempts,this.M_=new Wp(this.asyncQueue,"transaction_retry")}ju(){this.zu-=1,this.Hu()}Hu(){this.M_.p_((async()=>{const e=new vb(this.datastore),t=this.Ju(e);t&&t.then((i=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(i)})).catch((o=>{this.Zu(o)}))))})).catch((i=>{this.Zu(i)}))}))}Ju(e){try{const t=this.updateFunction(e);return!jl(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Zu(e){this.zu>0&&this.Xu(e)?(this.zu-=1,this.asyncQueue.enqueueAndForget((()=>(this.Hu(),Promise.resolve())))):this.deferred.reject(e)}Xu(e){if((e==null?void 0:e.name)==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!HE(t)}return!1}}/**
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
 */const Ji="FirestoreClient";class wb{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this._databaseInfo=o,this.user=Gt.UNAUTHENTICATED,this.clientId=Pp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async c=>{he(Ji,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(i,(c=>(he(Ji,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Yp(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function Ef(n,e){n.asyncQueue.verifyOperationInProgress(),he(Ji,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async o=>{i.isEqual(o)||(await aT(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function c_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Eb(n);he(Ji,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>i_(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,o)=>i_(e.remoteStore,o))),n._onlineComponents=e}async function Eb(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){he(Ji,"Using user provided OfflineComponentProvider");try{await Ef(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===H.FAILED_PRECONDITION||o.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;js("Error using user provided cache. Falling back to memory cache: "+t),await Ef(n,new Zc)}}else he(Ji,"Using default OfflineComponentProvider"),await Ef(n,new yb(void 0));return n._offlineComponents}async function im(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(he(Ji,"Using user provided OnlineComponentProvider"),await c_(n,n._uninitializedComponentsProvider._online)):(he(Ji,"Using default OnlineComponentProvider"),await c_(n,new np))),n._onlineComponents}function Tb(n){return im(n).then((e=>e.syncEngine))}function Ib(n){return im(n).then((e=>e.datastore))}async function eh(n){const e=await im(n),t=e.eventManager;return t.onListen=ib.bind(null,e.syncEngine),t.onUnlisten=ab.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=sb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=lb.bind(null,e.syncEngine),t}function Sb(n,e,t,i){const o=new rm(i),l=new em(e,o,t);return n.asyncQueue.enqueueAndForget((async()=>Jp(await eh(n),l))),()=>{o.Nu(),n.asyncQueue.enqueueAndForget((async()=>Xp(await eh(n),l)))}}function Ab(n,e,t={}){const i=new vr;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,f,g,y){const _=new rm({next:I=>{_.Nu(),c.enqueueAndForget((()=>Xp(l,E)));const O=I.docs.has(f);!O&&I.fromCache?y.reject(new ie(H.UNAVAILABLE,"Failed to get document because the client is offline.")):O&&I.fromCache&&g&&g.source==="server"?y.reject(new ie(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(I)},error:I=>y.reject(I)}),E=new em(gh(f.path),_,{includeMetadataChanges:!0,Ka:!0});return Jp(l,E)})(await eh(n),n.asyncQueue,e,t,i))),i.promise}function Rb(n,e,t={}){const i=new vr;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,f,g,y){const _=new rm({next:I=>{_.Nu(),c.enqueueAndForget((()=>Xp(l,E))),I.fromCache&&g.source==="server"?y.reject(new ie(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(I)},error:I=>y.reject(I)}),E=new em(f,_,{includeMetadataChanges:!0,Ka:!0});return Jp(l,E)})(await eh(n),n.asyncQueue,e,t,i))),i.promise}function Cb(n,e){const t=new vr;return n.asyncQueue.enqueueAndForget((async()=>ub(await Tb(n),e,t))),t.promise}function kb(n,e,t){const i=new vr;return n.asyncQueue.enqueueAndForget((async()=>{const o=await Ib(n);new _b(n.asyncQueue,o,t,e,i).ju()})),i.promise}/**
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
 */function ST(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Pb="ComponentProvider",h_=new Map;function xb(n,e,t,i,o){return new Hk(n,e,t,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,ST(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator,i)}/**
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
 */const AT="firestore.googleapis.com",d_=!0;class f_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ie(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=AT,this.ssl=d_}else this.host=e.host,this.ssl=e.ssl??d_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=sT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ZP)throw new ie(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ok("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ST(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ie(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ie(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ie(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ah{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new f_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new f_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new Ak;switch(i.type){case"firstParty":return new Pk(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ie(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=h_.get(t);i&&(he(Pb,"Removing Datastore"),h_.delete(t),i.terminate())})(this),Promise.resolve()}}function bb(n,e,t,i={}){var y;n=wn(n,Ah);const o=oa(e),l=n._getSettings(),c={...l,emulatorOptions:n._getEmulatorOptions()},f=`${e}:${t}`;o&&(X_(`https://${f}`),Z_("Firestore",!0)),l.host!==AT&&l.host!==f&&js("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...l,host:f,ssl:o,emulatorOptions:i};if(!Wi(g,c)&&(n._setSettings(g),i.mockUserToken)){let _,E;if(typeof i.mockUserToken=="string")_=i.mockUserToken,E=Gt.MOCK_USER;else{_=kS(i.mockUserToken,(y=n._app)==null?void 0:y.options.projectId);const I=i.mockUserToken.sub||i.mockUserToken.user_id;if(!I)throw new ie(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new Gt(I)}n._authCredentials=new Rk(new fE(_,E))}}/**
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
 */class ts{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new ts(this.firestore,e,this._query)}}class ot{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}toJSON(){return{type:ot._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(Ul(t,ot._jsonSchema))return new ot(e,i||null,new Te(Ye.fromString(t.referencePath)))}}ot._jsonSchemaVersion="firestore/documentReference/1.0",ot._jsonSchema={type:It("string",ot._jsonSchemaVersion),referencePath:It("string")};class Bi extends ts{constructor(e,t,i){super(e,t,gh(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new Te(e))}withConverter(e){return new Bi(this.firestore,e,this._path)}}function sm(n,e,...t){if(n=mt(n),pE("collection","path",e),n instanceof Ah){const i=Ye.fromString(e,...t);return Rv(i),new Bi(n,null,i)}{if(!(n instanceof ot||n instanceof Bi))throw new ie(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ye.fromString(e,...t));return Rv(i),new Bi(n.firestore,null,i)}}function Ut(n,e,...t){if(n=mt(n),arguments.length===1&&(e=Pp.newId()),pE("doc","path",e),n instanceof Ah){const i=Ye.fromString(e,...t);return Av(i),new ot(n,null,new Te(i))}{if(!(n instanceof ot||n instanceof Bi))throw new ie(H.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ye.fromString(e,...t));return Av(i),new ot(n.firestore,n instanceof Bi?n.converter:null,new Te(i))}}/**
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
 */const p_="AsyncQueue";class m_{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Wp(this,"async_queue_retry"),this._c=()=>{const i=wf();i&&he(p_,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=wf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=wf();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new vr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!ha(e))throw e;he(p_,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,Kr("INTERNAL UNHANDLED ERROR: ",g_(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=Qp.createAndSchedule(this,e,t,i,(l=>this.hc(l)));return this.tc.push(o),o}uc(){this.nc&&Ie(47125,{Pc:g_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function g_(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Xi extends Ah{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new m_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new m_(e),this._firestoreClient=void 0,await e}}}function Nb(n,e){const t=typeof n=="object"?n:pp(),i=typeof n=="string"?n:qc,o=qs(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=RS("firestore");l&&bb(o,...l)}return o}function ql(n){if(n._terminated)throw new ie(H.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Db(n),n._firestoreClient}function Db(n){var i,o,l,c;const e=n._freezeSettings(),t=xb(n._databaseId,((i=n._app)==null?void 0:i.options.appId)||"",n._persistenceKey,(o=n._app)==null?void 0:o.options.apiKey,e);n._componentsProvider||(l=e.localCache)!=null&&l._offlineComponentProvider&&((c=e.localCache)!=null&&c._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new wb(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(g){const y=g==null?void 0:g._online.build();return{_offline:g==null?void 0:g._offline.build(y),_online:y}})(n._componentsProvider))}/**
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
 */class yn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new yn(jt.fromBase64String(e))}catch(t){throw new ie(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new yn(jt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:yn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ul(e,yn._jsonSchema))return yn.fromBase64String(e.bytes)}}yn._jsonSchemaVersion="firestore/bytes/1.0",yn._jsonSchema={type:It("string",yn._jsonSchemaVersion),bytes:It("string")};/**
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
 */class Rh{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ie(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ch{constructor(e){this._methodName=e}}/**
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
 */class wr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ie(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ie(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Me(this._lat,e._lat)||Me(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:wr._jsonSchemaVersion}}static fromJSON(e){if(Ul(e,wr._jsonSchema))return new wr(e.latitude,e.longitude)}}wr._jsonSchemaVersion="firestore/geoPoint/1.0",wr._jsonSchema={type:It("string",wr._jsonSchemaVersion),latitude:It("number"),longitude:It("number")};/**
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
 */class $n{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:$n._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ul(e,$n._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new $n(e.vectorValues);throw new ie(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}$n._jsonSchemaVersion="firestore/vectorValue/1.0",$n._jsonSchema={type:It("string",$n._jsonSchemaVersion),vectorValues:It("object")};/**
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
 */const Vb=/^__.*__$/;class Ob{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new es(e,this.data,this.fieldMask,t,this.fieldTransforms):new zl(e,this.data,t,this.fieldTransforms)}}class RT{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new es(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function CT(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ie(40011,{dataSource:n})}}class om{constructor(e,t,i,o,l,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.validatePath(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new om({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var o;const t=(o=this.path)==null?void 0:o.child(e),i=this.contextWith({path:t,arrayElement:!1});return i.validatePathSegment(e),i}childContextForFieldPath(e){var o;const t=(o=this.path)==null?void 0:o.child(e),i=this.contextWith({path:t,arrayElement:!1});return i.validatePath(),i}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return th(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(CT(this.dataSource)&&Vb.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class Mb{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Th(e)}createContext(e,t,i,o=!1){return new om({dataSource:e,methodName:t,targetDoc:i,path:Ft.emptyPath(),arrayElement:!1,hasConverter:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function kh(n){const e=n._freezeSettings(),t=Th(n._databaseId);return new Mb(n._databaseId,!!e.ignoreUndefinedProperties,t)}function kT(n,e,t,i,o,l={}){const c=n.createContext(l.merge||l.mergeFields?2:0,e,t,o);lm("Data must be an object, but it was:",c,i);const f=bT(i,c);let g,y;if(l.merge)g=new vn(c.fieldMask),y=c.fieldTransforms;else if(l.mergeFields){const _=[];for(const E of l.mergeFields){const I=sa(e,E,t);if(!c.contains(I))throw new ie(H.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);VT(_,I)||_.push(I)}g=new vn(_),y=c.fieldTransforms.filter((E=>g.covers(E.field)))}else g=null,y=c.fieldTransforms;return new Ob(new Jt(f),g,y)}class Ph extends Ch{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ph}}class am extends Ch{_toFieldTransform(e){return new EP(e.path,new Nl)}isEqual(e){return e instanceof am}}function PT(n,e,t,i){const o=n.createContext(1,e,t);lm("Data must be an object, but it was:",o,i);const l=[],c=Jt.empty();Zi(i,((g,y)=>{const _=DT(e,g,t);y=mt(y);const E=o.childContextForFieldPath(_);if(y instanceof Ph)l.push(_);else{const I=Hl(y,E);I!=null&&(l.push(_),c.set(_,I))}}));const f=new vn(l);return new RT(c,f,o.fieldTransforms)}function xT(n,e,t,i,o,l){const c=n.createContext(1,e,t),f=[sa(e,i,t)],g=[o];if(l.length%2!=0)throw new ie(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<l.length;I+=2)f.push(sa(e,l[I])),g.push(l[I+1]);const y=[],_=Jt.empty();for(let I=f.length-1;I>=0;--I)if(!VT(y,f[I])){const O=f[I];let W=g[I];W=mt(W);const M=c.childContextForFieldPath(O);if(W instanceof Ph)y.push(O);else{const z=Hl(W,M);z!=null&&(y.push(O),_.set(O,z))}}const E=new vn(y);return new RT(_,E,c.fieldTransforms)}function Lb(n,e,t,i=!1){return Hl(t,n.createContext(i?4:3,e))}function Hl(n,e){if(NT(n=mt(n)))return lm("Unsupported field value:",e,n),bT(n,e);if(n instanceof Ch)return(function(i,o){if(!CT(o.dataSource))throw o.createError(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.createError(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(i,o){const l=[];let c=0;for(const f of i){let g=Hl(f,o.childContextForArray(c));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),c++}return{arrayValue:{values:l}}})(n,e)}return(function(i,o){if((i=mt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return vP(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=nt.fromDate(i);return{timestampValue:Qc(o.serializer,l)}}if(i instanceof nt){const l=new nt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Qc(o.serializer,l)}}if(i instanceof wr)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof yn)return{bytesValue:YE(o.serializer,i._byteString)};if(i instanceof ot){const l=o.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw o.createError(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Up(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof $n)return(function(c,f){const g=c instanceof $n?c.toArray():c;return{mapValue:{fields:{[IE]:{stringValue:SE},[Hc]:{arrayValue:{values:g.map((_=>{if(typeof _!="number")throw f.createError("VectorValues must only contain numeric values.");return Op(f.serializer,_)}))}}}}}})(i,o);if(iT(i))return i._toProto(o.serializer);throw o.createError(`Unsupported field value: ${fh(i)}`)})(n,e)}function bT(n,e){const t={};return yE(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zi(n,((i,o)=>{const l=Hl(o,e.childContextForField(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function NT(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof nt||n instanceof wr||n instanceof yn||n instanceof ot||n instanceof Ch||n instanceof $n||iT(n))}function lm(n,e,t){if(!NT(t)||!mE(t)){const i=fh(t);throw i==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+i)}}function sa(n,e,t){if((e=mt(e))instanceof Rh)return e._internalPath;if(typeof e=="string")return DT(n,e);throw th("Field path arguments must be of type string or ",n,!1,void 0,t)}const Fb=new RegExp("[~\\*/\\[\\]]");function DT(n,e,t){if(e.search(Fb)>=0)throw th(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Rh(...e.split("."))._internalPath}catch{throw th(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function th(n,e,t,i,o){const l=i&&!i.isEmpty(),c=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let g="";return(l||c)&&(g+=" (found",l&&(g+=` in field ${i}`),c&&(g+=` in document ${o}`),g+=")"),new ie(H.INVALID_ARGUMENT,f+n+g)}function VT(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class OT{convertValue(e,t="none"){switch(Qi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ft(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ki(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ie(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Zi(e,((o,l)=>{i[o]=this.convertValue(l,t)})),i}convertVectorValue(e){var i,o,l;const t=(l=(o=(i=e.fields)==null?void 0:i[Hc].arrayValue)==null?void 0:o.values)==null?void 0:l.map((c=>ft(c.doubleValue)));return new $n(t)}convertGeoPoint(e){return new wr(ft(e.latitude),ft(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=mh(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(kl(e));default:return null}}convertTimestamp(e){const t=Gi(e);return new nt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Ye.fromString(e);ze(rT(i),9688,{name:e});const o=new Pl(i.get(1),i.get(3)),l=new Te(i.popFirst(5));return o.isEqual(t)||Kr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */class xh extends OT{constructor(e){super(),this.firestore=e}convertBytes(e){return new yn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,t)}}function Et(){return new am("serverTimestamp")}const y_="@firebase/firestore",v_="4.11.0";/**
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
 */function __(n){return(function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of i)if(l in o&&typeof o[l]=="function")return!0;return!1})(n,["next","error","complete"])}/**
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
 */class nh{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ub(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(sa("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Ub extends nh{data(){return super.data()}}/**
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
 */function MT(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ie(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class um{}class LT extends um{}function FT(n,e,...t){let i=[];e instanceof um&&i.push(e),i=i.concat(t),(function(l){const c=l.filter((g=>g instanceof hm)).length,f=l.filter((g=>g instanceof cm)).length;if(c>1||c>0&&f>0)throw new ie(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const o of i)n=o._apply(n);return n}class cm extends LT{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new cm(e,t,i)}_apply(e){const t=this._parse(e);return jT(e._query,t),new ts(e.firestore,e.converter,Gf(e._query,t))}_parse(e){const t=kh(e.firestore);return(function(l,c,f,g,y,_,E){let I;if(y.isKeyField()){if(_==="array-contains"||_==="array-contains-any")throw new ie(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${_}' queries on documentId().`);if(_==="in"||_==="not-in"){E_(E,_);const W=[];for(const M of E)W.push(w_(g,l,M));I={arrayValue:{values:W}}}else I=w_(g,l,E)}else _!=="in"&&_!=="not-in"&&_!=="array-contains-any"||E_(E,_),I=Lb(f,c,E,_==="in"||_==="not-in");return Tt.create(y,_,I)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class hm extends um{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new hm(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:qn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let c=o;const f=l.getFlattenedFilters();for(const g of f)jT(c,g),c=Gf(c,g)})(e._query,t),new ts(e.firestore,e.converter,Gf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class dm extends LT{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new dm(e,t)}_apply(e){const t=(function(o,l,c){if(o.startAt!==null)throw new ie(H.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ie(H.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new bl(l,c)})(e._query,this._field,this._direction);return new ts(e.firestore,e.converter,cP(e._query,t))}}function UT(n,e="asc"){const t=e,i=sa("orderBy",n);return dm._create(i,t)}function w_(n,e,t){if(typeof(t=mt(t))=="string"){if(t==="")throw new ie(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!NE(e)&&t.indexOf("/")!==-1)throw new ie(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Ye.fromString(t));if(!Te.isDocumentKey(i))throw new ie(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Vv(n,new Te(i))}if(t instanceof ot)return Vv(n,t._key);throw new ie(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${fh(t)}.`)}function E_(n,e){if(!Array.isArray(n)||n.length===0)throw new ie(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function jT(n,e){const t=(function(o,l){for(const c of o)for(const f of c.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ie(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ie(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function zT(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}class jb extends OT{constructor(e){super(),this.firestore=e}convertBytes(e){return new yn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,t)}}class qo{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $i extends nh{constructor(e,t,i,o,l,c){super(e,t,i,o,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new bc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(sa("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ie(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=$i._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}$i._jsonSchemaVersion="firestore/documentSnapshot/1.0",$i._jsonSchema={type:It("string",$i._jsonSchemaVersion),bundleSource:It("string","DocumentSnapshot"),bundleName:It("string"),bundle:It("string")};class bc extends $i{data(e={}){return super.data(e)}}class Os{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new qo(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new bc(this._firestore,this._userDataWriter,i.key,i,new qo(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ie(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let c=0;return o._snapshot.docChanges.map((f=>{const g=new bc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new qo(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:g,oldIndex:-1,newIndex:c++}}))}{let c=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const g=new bc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new qo(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,_=-1;return f.type!==0&&(y=c.indexOf(f.doc.key),c=c.delete(f.doc.key)),f.type!==1&&(c=c.add(f.doc),_=c.indexOf(f.doc.key)),{type:zb(f.type),doc:g,oldIndex:y,newIndex:_}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ie(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Os._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Pp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function zb(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ie(61501,{type:n})}}/**
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
 */Os._jsonSchemaVersion="firestore/querySnapshot/1.0",Os._jsonSchema={type:It("string",Os._jsonSchemaVersion),bundleSource:It("string","QuerySnapshot"),bundleName:It("string"),bundle:It("string")};const Bb={maxAttempts:5};function gl(n,e){if((n=mt(n)).firestore!==e)throw new ie(H.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */class $b{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=kh(e)}get(e){const t=gl(e,this._firestore),i=new jb(this._firestore);return this._transaction.lookup([t._key]).then((o=>{if(!o||o.length!==1)return Ie(24041);const l=o[0];if(l.isFoundDocument())return new nh(this._firestore,i,l.key,l,t.converter);if(l.isNoDocument())return new nh(this._firestore,i,t._key,null,t.converter);throw Ie(18433,{doc:l})}))}set(e,t,i){const o=gl(e,this._firestore),l=zT(o.converter,t,i),c=kT(this._dataReader,"Transaction.set",o._key,l,o.converter!==null,i);return this._transaction.set(o._key,c),this}update(e,t,i,...o){const l=gl(e,this._firestore);let c;return c=typeof(t=mt(t))=="string"||t instanceof Rh?xT(this._dataReader,"Transaction.update",l._key,t,i,o):PT(this._dataReader,"Transaction.update",l._key,t),this._transaction.update(l._key,c),this}delete(e){const t=gl(e,this._firestore);return this._transaction.delete(t._key),this}}/**
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
 */class Wb extends $b{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=gl(e,this._firestore),i=new xh(this._firestore);return super.get(e).then((o=>new $i(this._firestore,i,t._key,o._document,new qo(!1,!1),t.converter)))}}function fm(n,e,t){n=wn(n,Xi);const i={...Bb,...t};(function(c){if(c.maxAttempts<1)throw new ie(H.INVALID_ARGUMENT,"Max attempts must be at least 1")})(i);const o=ql(n);return kb(o,(l=>e(new Wb(n,l))),i)}/**
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
 */function BT(n){n=wn(n,ot);const e=wn(n.firestore,Xi),t=ql(e);return Ab(t,n._key).then((i=>qT(e,n,i)))}function qb(n){n=wn(n,ts);const e=wn(n.firestore,Xi),t=ql(e),i=new xh(e);return MT(n._query),Rb(t,n._query).then((o=>new Os(e,i,n,o)))}function Hb(n,e,t){n=wn(n,ot);const i=wn(n.firestore,Xi),o=zT(n.converter,e,t),l=kh(i);return WT(i,[kT(l,"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,Xt.none())])}function pm(n,e,t,...i){n=wn(n,ot);const o=wn(n.firestore,Xi),l=kh(o);let c;return c=typeof(e=mt(e))=="string"||e instanceof Rh?xT(l,"updateDoc",n._key,e,t,i):PT(l,"updateDoc",n._key,e),WT(o,[c.toMutation(n._key,Xt.exists(!0))])}function $T(n,...e){var y,_,E;n=mt(n);let t={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||__(e[i])||(t=e[i++]);const o={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(__(e[i])){const I=e[i];e[i]=(y=I.next)==null?void 0:y.bind(I),e[i+1]=(_=I.error)==null?void 0:_.bind(I),e[i+2]=(E=I.complete)==null?void 0:E.bind(I)}let l,c,f;if(n instanceof ot)c=wn(n.firestore,Xi),f=gh(n._key.path),l={next:I=>{e[i]&&e[i](qT(c,n,I))},error:e[i+1],complete:e[i+2]};else{const I=wn(n,ts);c=wn(I.firestore,Xi),f=I._query;const O=new xh(c);l={next:W=>{e[i]&&e[i](new Os(c,O,I,W))},error:e[i+1],complete:e[i+2]},MT(n._query)}const g=ql(c);return Sb(g,f,o,l)}function WT(n,e){const t=ql(n);return Cb(t,e)}function qT(n,e,t){const i=t.docs.get(e._key),o=new xh(n);return new $i(n,o,e._key,i,new qo(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){Sk(aa),Er(new Wn("firestore",((i,{instanceIdentifier:o,options:l})=>{const c=i.getProvider("app").getImmediate(),f=new Xi(new Ck(i.getProvider("auth-internal")),new xk(c,i.getProvider("app-check-internal")),Gk(c,o),c);return l={useFetchStreams:t,...l},f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),xn(y_,v_,e),xn(y_,v_,"esm2020")})();const Gb={apiKey:"AIzaSyBWTuW6eD1gxTf8sLnZzuWN2dngDFphUH8",authDomain:"marcophoto-9cb75.firebaseapp.com",projectId:"marcophoto-9cb75",storageBucket:"marcophoto-9cb75.firebasestorage.app",messagingSenderId:"690399228253",appId:"1:690399228253:web:39777c4e908417294838b4",measurementId:"G-EY1HGL647R"},mm=iw(Gb),Sl=Tk(mm),pt=Nb(mm),Kb=async()=>{await EC()&&_C(mm)},T_=async()=>(Sl.currentUser||await o1(Sl),Sl.currentUser);Kb();const hl="main",Qb=15,Yb=2,ns=()=>{var e;const n=(e=Sl.currentUser)==null?void 0:e.uid;if(!n)throw new Error("Not signed in.");return n},I_=async n=>{const e=ns(),t=Ut(pt,"users",e);await Hb(t,{displayName:n},{merge:!0})},Jb=async()=>{const n=ns(),e=await BT(Ut(pt,"users",n));return e.exists()?e.data().activeRoomId??null:null},Xb=(n,e)=>{const t=Ut(pt,"rooms",n);return $T(t,i=>{if(!i.exists()){e(null);return}const o=i.data();e({id:i.id,...o})})},Zb=(n,e)=>{const t=sm(pt,"rooms",n,"players"),i=FT(t,UT("joinedAt","asc"));return $T(i,o=>{const l=o.docs.map(c=>{const f=c.data();return{id:c.id,...f}});e(l)})},eN=async n=>{const e=ns(),t=Ut(pt,"rooms",n,"players",e);await pm(t,{lastSeenAt:Et()})},tN=async n=>{const e=ns(),t=Ut(pt,"rooms",hl),i=Ut(pt,"users",e),o=Ut(pt,"rooms",hl,"players",e);return fm(pt,async l=>{var _;const f=((_=(await l.get(i)).data())==null?void 0:_.activeRoomId)??null;if(f&&f!==hl)throw new Error("You are already in a room.");const g=await l.get(t),y=await l.get(o);if(!g.exists())l.set(t,{state:"waiting",createdAt:Et(),lastActiveAt:Et(),playerCount:1,waitingSince:Et()}),l.set(o,{name:n,isReady:!1,votekickCount:0,joinedAt:Et(),lastSeenAt:Et()});else{const E=g.data(),I=E.playerCount??0,O=I<2;if(E.state!=="waiting"&&!O)throw new Error("Game already started.");if(y.exists())l.set(o,{name:n,lastSeenAt:Et()},{merge:!0}),O&&E.state!=="waiting"&&l.update(t,{state:"waiting",lastActiveAt:Et(),waitingSince:Et()});else{if(I>=Qb)throw new Error("Room is full (15 players max).");l.set(o,{name:n,isReady:!1,votekickCount:0,joinedAt:Et(),lastSeenAt:Et()});const W={playerCount:I+1,lastActiveAt:Et(),waitingSince:I+1<=1?Et():E.waitingSince??null};O&&(W.state="waiting"),l.update(t,W)}}return l.set(i,{displayName:n,activeRoomId:hl},{merge:!0}),{roomId:hl}})},nN=async n=>{const e=ns(),t=Ut(pt,"rooms",n),i=Ut(pt,"rooms",n,"players",e),o=Ut(pt,"users",e);return fm(pt,async l=>{const c=await l.get(t);if(c.exists()){const f=c.data(),g=Math.max((f.playerCount??1)-1,0),y={playerCount:g,lastActiveAt:Et(),waitingSince:g<=1?Et():f.waitingSince??null};g<2&&(y.state="waiting"),l.update(t,y)}l.delete(i),l.set(o,{activeRoomId:null},{merge:!0})})},rN=async(n,e)=>{const t=ns();if(t===e)throw new Error("You cannot vote kick yourself.");const i=Ut(pt,"rooms",n),o=sm(pt,"rooms",n,"players"),l=Ut(o,t),c=Ut(o,e),f=Ut(pt,"rooms",n,"players",e,"votes",t),g=Ut(pt,"users",e);return fm(pt,async y=>{const _=await y.get(i);if(!_.exists())throw new Error("Room not found.");if(!(await y.get(l)).exists())throw new Error("You are not in this room.");const I=await y.get(c);if(!I.exists())throw new Error("Player is no longer in this room.");if((await y.get(f)).exists())throw new Error("You already voted to kick this player.");const W=_.data(),M=I.data(),z=W.playerCount??0,ee=(M.votekickCount??0)+1,ne=Math.max(Yb,Math.ceil((z-1)/2));if(y.set(f,{voterUid:t,createdAt:Et()}),ee<ne)return y.update(c,{votekickCount:ee}),{kicked:!1,voteCount:ee,votesNeeded:ne};const se=Math.max(z-1,0),le={playerCount:se,lastActiveAt:Et(),waitingSince:se<=1?Et():W.waitingSince??null};return se<2&&(le.state="waiting"),y.update(i,le),y.delete(c),y.set(g,{activeRoomId:null},{merge:!0}),{kicked:!0,voteCount:ee,votesNeeded:ne}})},iN=async(n,e)=>{const t=ns(),i=Ut(pt,"rooms",n,"players",t);await pm(i,{isReady:e,lastSeenAt:Et()})},sN=async n=>{ns();const e=Ut(pt,"rooms",n);if(!(await BT(e)).exists())throw new Error("Room not found.");const i=sm(pt,"rooms",n,"players"),o=await qb(FT(i,UT("joinedAt","asc")));if(o.size<2)throw new Error("Need at least two players.");if(!o.docs.every(c=>c.data().isReady===!0))throw new Error("All players must be ready first.");await pm(e,{state:"playing",lastActiveAt:Et()})};function oN(n,e){const t=U.createContext(e),i=l=>{const{children:c,...f}=l,g=U.useMemo(()=>f,Object.values(f));return G.jsx(t.Provider,{value:g,children:c})};i.displayName=n+"Provider";function o(l){const c=U.useContext(t);if(c)return c;if(e!==void 0)return e;throw new Error(`\`${l}\` must be used within \`${n}\``)}return[i,o]}function HT(n,e=[]){let t=[];function i(l,c){const f=U.createContext(c),g=t.length;t=[...t,c];const y=E=>{var ee;const{scope:I,children:O,...W}=E,M=((ee=I==null?void 0:I[n])==null?void 0:ee[g])||f,z=U.useMemo(()=>W,Object.values(W));return G.jsx(M.Provider,{value:z,children:O})};y.displayName=l+"Provider";function _(E,I){var M;const O=((M=I==null?void 0:I[n])==null?void 0:M[g])||f,W=U.useContext(O);if(W)return W;if(c!==void 0)return c;throw new Error(`\`${E}\` must be used within \`${l}\``)}return[y,_]}const o=()=>{const l=t.map(c=>U.createContext(c));return function(f){const g=(f==null?void 0:f[n])||l;return U.useMemo(()=>({[`__scope${n}`]:{...f,[n]:g}}),[f,g])}};return o.scopeName=n,[i,aN(o,...e)]}function aN(...n){const e=n[0];if(n.length===1)return e;const t=()=>{const i=n.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(l){const c=i.reduce((f,{useScope:g,scopeName:y})=>{const E=g(l)[`__scope${y}`];return{...f,...E}},{});return U.useMemo(()=>({[`__scope${e.scopeName}`]:c}),[c])}};return t.scopeName=e.scopeName,t}function S_(n,e){if(typeof n=="function")return n(e);n!=null&&(n.current=e)}function GT(...n){return e=>{let t=!1;const i=n.map(o=>{const l=S_(o,e);return!t&&typeof l=="function"&&(t=!0),l});if(t)return()=>{for(let o=0;o<i.length;o++){const l=i[o];typeof l=="function"?l():S_(n[o],null)}}}}function Yr(...n){return U.useCallback(GT(...n),n)}function Wr(n,e,{checkForDefaultPrevented:t=!0}={}){return function(o){if(n==null||n(o),t===!1||!o.defaultPrevented)return e==null?void 0:e(o)}}var rh=globalThis!=null&&globalThis.document?U.useLayoutEffect:()=>{},lN=gS.useId||(()=>{}),uN=0;function Tf(n){const[e,t]=U.useState(lN());return rh(()=>{t(i=>i??String(uN++))},[n]),n||(e?`radix-${e}`:"")}function Bs(n){const e=U.useRef(n);return U.useEffect(()=>{e.current=n}),U.useMemo(()=>(...t)=>{var i;return(i=e.current)==null?void 0:i.call(e,...t)},[])}function cN({prop:n,defaultProp:e,onChange:t=()=>{}}){const[i,o]=hN({defaultProp:e,onChange:t}),l=n!==void 0,c=l?n:i,f=Bs(t),g=U.useCallback(y=>{if(l){const E=typeof y=="function"?y(n):y;E!==n&&f(E)}else o(y)},[l,n,o,f]);return[c,g]}function hN({defaultProp:n,onChange:e}){const t=U.useState(n),[i]=t,o=U.useRef(i),l=Bs(e);return U.useEffect(()=>{o.current!==i&&(l(i),o.current=i)},[i,o,l]),t}var KT=q_();const dN=W_(KT);var gm=U.forwardRef((n,e)=>{const{children:t,...i}=n,o=U.Children.toArray(t),l=o.find(fN);if(l){const c=l.props.children,f=o.map(g=>g===l?U.Children.count(c)>1?U.Children.only(null):U.isValidElement(c)?c.props.children:null:g);return G.jsx(rp,{...i,ref:e,children:U.isValidElement(c)?U.cloneElement(c,void 0,f):null})}return G.jsx(rp,{...i,ref:e,children:t})});gm.displayName="Slot";var rp=U.forwardRef((n,e)=>{const{children:t,...i}=n;if(U.isValidElement(t)){const o=mN(t),l=pN(i,t.props);return t.type!==U.Fragment&&(l.ref=e?GT(e,o):o),U.cloneElement(t,l)}return U.Children.count(t)>1?U.Children.only(null):null});rp.displayName="SlotClone";var QT=({children:n})=>G.jsx(G.Fragment,{children:n});function fN(n){return U.isValidElement(n)&&n.type===QT}function pN(n,e){const t={...e};for(const i in e){const o=n[i],l=e[i];/^on[A-Z]/.test(i)?o&&l?t[i]=(...f)=>{l(...f),o(...f)}:o&&(t[i]=o):i==="style"?t[i]={...o,...l}:i==="className"&&(t[i]=[o,l].filter(Boolean).join(" "))}return{...n,...t}}function mN(n){var i,o;let e=(i=Object.getOwnPropertyDescriptor(n.props,"ref"))==null?void 0:i.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?n.ref:(e=(o=Object.getOwnPropertyDescriptor(n,"ref"))==null?void 0:o.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?n.props.ref:n.props.ref||n.ref)}var gN=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Jr=gN.reduce((n,e)=>{const t=U.forwardRef((i,o)=>{const{asChild:l,...c}=i,f=l?gm:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),G.jsx(f,{...c,ref:o})});return t.displayName=`Primitive.${e}`,{...n,[e]:t}},{});function yN(n,e){n&&KT.flushSync(()=>n.dispatchEvent(e))}function vN(n,e=globalThis==null?void 0:globalThis.document){const t=Bs(n);U.useEffect(()=>{const i=o=>{o.key==="Escape"&&t(o)};return e.addEventListener("keydown",i,{capture:!0}),()=>e.removeEventListener("keydown",i,{capture:!0})},[t,e])}var _N="DismissableLayer",ip="dismissableLayer.update",wN="dismissableLayer.pointerDownOutside",EN="dismissableLayer.focusOutside",A_,YT=U.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),JT=U.forwardRef((n,e)=>{const{disableOutsidePointerEvents:t=!1,onEscapeKeyDown:i,onPointerDownOutside:o,onFocusOutside:l,onInteractOutside:c,onDismiss:f,...g}=n,y=U.useContext(YT),[_,E]=U.useState(null),I=(_==null?void 0:_.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,O]=U.useState({}),W=Yr(e,R=>E(R)),M=Array.from(y.layers),[z]=[...y.layersWithOutsidePointerEventsDisabled].slice(-1),ee=M.indexOf(z),ne=_?M.indexOf(_):-1,se=y.layersWithOutsidePointerEventsDisabled.size>0,le=ne>=ee,oe=SN(R=>{const S=R.target,k=[...y.branches].some(b=>b.contains(S));!le||k||(o==null||o(R),c==null||c(R),R.defaultPrevented||f==null||f())},I),ce=AN(R=>{const S=R.target;[...y.branches].some(b=>b.contains(S))||(l==null||l(R),c==null||c(R),R.defaultPrevented||f==null||f())},I);return vN(R=>{ne===y.layers.size-1&&(i==null||i(R),!R.defaultPrevented&&f&&(R.preventDefault(),f()))},I),U.useEffect(()=>{if(_)return t&&(y.layersWithOutsidePointerEventsDisabled.size===0&&(A_=I.body.style.pointerEvents,I.body.style.pointerEvents="none"),y.layersWithOutsidePointerEventsDisabled.add(_)),y.layers.add(_),R_(),()=>{t&&y.layersWithOutsidePointerEventsDisabled.size===1&&(I.body.style.pointerEvents=A_)}},[_,I,t,y]),U.useEffect(()=>()=>{_&&(y.layers.delete(_),y.layersWithOutsidePointerEventsDisabled.delete(_),R_())},[_,y]),U.useEffect(()=>{const R=()=>O({});return document.addEventListener(ip,R),()=>document.removeEventListener(ip,R)},[]),G.jsx(Jr.div,{...g,ref:W,style:{pointerEvents:se?le?"auto":"none":void 0,...n.style},onFocusCapture:Wr(n.onFocusCapture,ce.onFocusCapture),onBlurCapture:Wr(n.onBlurCapture,ce.onBlurCapture),onPointerDownCapture:Wr(n.onPointerDownCapture,oe.onPointerDownCapture)})});JT.displayName=_N;var TN="DismissableLayerBranch",IN=U.forwardRef((n,e)=>{const t=U.useContext(YT),i=U.useRef(null),o=Yr(e,i);return U.useEffect(()=>{const l=i.current;if(l)return t.branches.add(l),()=>{t.branches.delete(l)}},[t.branches]),G.jsx(Jr.div,{...n,ref:o})});IN.displayName=TN;function SN(n,e=globalThis==null?void 0:globalThis.document){const t=Bs(n),i=U.useRef(!1),o=U.useRef(()=>{});return U.useEffect(()=>{const l=f=>{if(f.target&&!i.current){let g=function(){XT(wN,t,y,{discrete:!0})};const y={originalEvent:f};f.pointerType==="touch"?(e.removeEventListener("click",o.current),o.current=g,e.addEventListener("click",o.current,{once:!0})):g()}else e.removeEventListener("click",o.current);i.current=!1},c=window.setTimeout(()=>{e.addEventListener("pointerdown",l)},0);return()=>{window.clearTimeout(c),e.removeEventListener("pointerdown",l),e.removeEventListener("click",o.current)}},[e,t]),{onPointerDownCapture:()=>i.current=!0}}function AN(n,e=globalThis==null?void 0:globalThis.document){const t=Bs(n),i=U.useRef(!1);return U.useEffect(()=>{const o=l=>{l.target&&!i.current&&XT(EN,t,{originalEvent:l},{discrete:!1})};return e.addEventListener("focusin",o),()=>e.removeEventListener("focusin",o)},[e,t]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}function R_(){const n=new CustomEvent(ip);document.dispatchEvent(n)}function XT(n,e,t,{discrete:i}){const o=t.originalEvent.target,l=new CustomEvent(n,{bubbles:!1,cancelable:!0,detail:t});e&&o.addEventListener(n,e,{once:!0}),i?yN(o,l):o.dispatchEvent(l)}var If="focusScope.autoFocusOnMount",Sf="focusScope.autoFocusOnUnmount",C_={bubbles:!1,cancelable:!0},RN="FocusScope",ZT=U.forwardRef((n,e)=>{const{loop:t=!1,trapped:i=!1,onMountAutoFocus:o,onUnmountAutoFocus:l,...c}=n,[f,g]=U.useState(null),y=Bs(o),_=Bs(l),E=U.useRef(null),I=Yr(e,M=>g(M)),O=U.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;U.useEffect(()=>{if(i){let M=function(se){if(O.paused||!f)return;const le=se.target;f.contains(le)?E.current=le:Ni(E.current,{select:!0})},z=function(se){if(O.paused||!f)return;const le=se.relatedTarget;le!==null&&(f.contains(le)||Ni(E.current,{select:!0}))},ee=function(se){if(document.activeElement===document.body)for(const oe of se)oe.removedNodes.length>0&&Ni(f)};document.addEventListener("focusin",M),document.addEventListener("focusout",z);const ne=new MutationObserver(ee);return f&&ne.observe(f,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",M),document.removeEventListener("focusout",z),ne.disconnect()}}},[i,f,O.paused]),U.useEffect(()=>{if(f){P_.add(O);const M=document.activeElement;if(!f.contains(M)){const ee=new CustomEvent(If,C_);f.addEventListener(If,y),f.dispatchEvent(ee),ee.defaultPrevented||(CN(NN(eI(f)),{select:!0}),document.activeElement===M&&Ni(f))}return()=>{f.removeEventListener(If,y),setTimeout(()=>{const ee=new CustomEvent(Sf,C_);f.addEventListener(Sf,_),f.dispatchEvent(ee),ee.defaultPrevented||Ni(M??document.body,{select:!0}),f.removeEventListener(Sf,_),P_.remove(O)},0)}}},[f,y,_,O]);const W=U.useCallback(M=>{if(!t&&!i||O.paused)return;const z=M.key==="Tab"&&!M.altKey&&!M.ctrlKey&&!M.metaKey,ee=document.activeElement;if(z&&ee){const ne=M.currentTarget,[se,le]=kN(ne);se&&le?!M.shiftKey&&ee===le?(M.preventDefault(),t&&Ni(se,{select:!0})):M.shiftKey&&ee===se&&(M.preventDefault(),t&&Ni(le,{select:!0})):ee===ne&&M.preventDefault()}},[t,i,O.paused]);return G.jsx(Jr.div,{tabIndex:-1,...c,ref:I,onKeyDown:W})});ZT.displayName=RN;function CN(n,{select:e=!1}={}){const t=document.activeElement;for(const i of n)if(Ni(i,{select:e}),document.activeElement!==t)return}function kN(n){const e=eI(n),t=k_(e,n),i=k_(e.reverse(),n);return[t,i]}function eI(n){const e=[],t=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>{const o=i.tagName==="INPUT"&&i.type==="hidden";return i.disabled||i.hidden||o?NodeFilter.FILTER_SKIP:i.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;t.nextNode();)e.push(t.currentNode);return e}function k_(n,e){for(const t of n)if(!PN(t,{upTo:e}))return t}function PN(n,{upTo:e}){if(getComputedStyle(n).visibility==="hidden")return!0;for(;n;){if(e!==void 0&&n===e)return!1;if(getComputedStyle(n).display==="none")return!0;n=n.parentElement}return!1}function xN(n){return n instanceof HTMLInputElement&&"select"in n}function Ni(n,{select:e=!1}={}){if(n&&n.focus){const t=document.activeElement;n.focus({preventScroll:!0}),n!==t&&xN(n)&&e&&n.select()}}var P_=bN();function bN(){let n=[];return{add(e){const t=n[0];e!==t&&(t==null||t.pause()),n=x_(n,e),n.unshift(e)},remove(e){var t;n=x_(n,e),(t=n[0])==null||t.resume()}}}function x_(n,e){const t=[...n],i=t.indexOf(e);return i!==-1&&t.splice(i,1),t}function NN(n){return n.filter(e=>e.tagName!=="A")}var DN="Portal",tI=U.forwardRef((n,e)=>{var f;const{container:t,...i}=n,[o,l]=U.useState(!1);rh(()=>l(!0),[]);const c=t||o&&((f=globalThis==null?void 0:globalThis.document)==null?void 0:f.body);return c?dN.createPortal(G.jsx(Jr.div,{...i,ref:e}),c):null});tI.displayName=DN;function VN(n,e){return U.useReducer((t,i)=>e[t][i]??t,n)}var bh=n=>{const{present:e,children:t}=n,i=ON(e),o=typeof t=="function"?t({present:i.isPresent}):U.Children.only(t),l=Yr(i.ref,MN(o));return typeof t=="function"||i.isPresent?U.cloneElement(o,{ref:l}):null};bh.displayName="Presence";function ON(n){const[e,t]=U.useState(),i=U.useRef({}),o=U.useRef(n),l=U.useRef("none"),c=n?"mounted":"unmounted",[f,g]=VN(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return U.useEffect(()=>{const y=mc(i.current);l.current=f==="mounted"?y:"none"},[f]),rh(()=>{const y=i.current,_=o.current;if(_!==n){const I=l.current,O=mc(y);n?g("MOUNT"):O==="none"||(y==null?void 0:y.display)==="none"?g("UNMOUNT"):g(_&&I!==O?"ANIMATION_OUT":"UNMOUNT"),o.current=n}},[n,g]),rh(()=>{if(e){let y;const _=e.ownerDocument.defaultView??window,E=O=>{const M=mc(i.current).includes(O.animationName);if(O.target===e&&M&&(g("ANIMATION_END"),!o.current)){const z=e.style.animationFillMode;e.style.animationFillMode="forwards",y=_.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=z)})}},I=O=>{O.target===e&&(l.current=mc(i.current))};return e.addEventListener("animationstart",I),e.addEventListener("animationcancel",E),e.addEventListener("animationend",E),()=>{_.clearTimeout(y),e.removeEventListener("animationstart",I),e.removeEventListener("animationcancel",E),e.removeEventListener("animationend",E)}}else g("ANIMATION_END")},[e,g]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:U.useCallback(y=>{y&&(i.current=getComputedStyle(y)),t(y)},[])}}function mc(n){return(n==null?void 0:n.animationName)||"none"}function MN(n){var i,o;let e=(i=Object.getOwnPropertyDescriptor(n.props,"ref"))==null?void 0:i.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?n.ref:(e=(o=Object.getOwnPropertyDescriptor(n,"ref"))==null?void 0:o.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?n.props.ref:n.props.ref||n.ref)}var Af=0;function LN(){U.useEffect(()=>{const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",n[0]??b_()),document.body.insertAdjacentElement("beforeend",n[1]??b_()),Af++,()=>{Af===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),Af--}},[])}function b_(){const n=document.createElement("span");return n.setAttribute("data-radix-focus-guard",""),n.tabIndex=0,n.style.outline="none",n.style.opacity="0",n.style.position="fixed",n.style.pointerEvents="none",n}var mr=function(){return mr=Object.assign||function(e){for(var t,i=1,o=arguments.length;i<o;i++){t=arguments[i];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},mr.apply(this,arguments)};function nI(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function FN(n,e,t){if(t||arguments.length===2)for(var i=0,o=e.length,l;i<o;i++)(l||!(i in e))&&(l||(l=Array.prototype.slice.call(e,0,i)),l[i]=e[i]);return n.concat(l||Array.prototype.slice.call(e))}var Nc="right-scroll-bar-position",Dc="width-before-scroll-bar",UN="with-scroll-bars-hidden",jN="--removed-body-scroll-bar-size";function Rf(n,e){return typeof n=="function"?n(e):n&&(n.current=e),n}function zN(n,e){var t=U.useState(function(){return{value:n,callback:e,facade:{get current(){return t.value},set current(i){var o=t.value;o!==i&&(t.value=i,t.callback(i,o))}}}})[0];return t.callback=e,t.facade}var BN=typeof window<"u"?U.useLayoutEffect:U.useEffect,N_=new WeakMap;function $N(n,e){var t=zN(null,function(i){return n.forEach(function(o){return Rf(o,i)})});return BN(function(){var i=N_.get(t);if(i){var o=new Set(i),l=new Set(n),c=t.current;o.forEach(function(f){l.has(f)||Rf(f,null)}),l.forEach(function(f){o.has(f)||Rf(f,c)})}N_.set(t,n)},[n]),t}function WN(n){return n}function qN(n,e){e===void 0&&(e=WN);var t=[],i=!1,o={read:function(){if(i)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return t.length?t[t.length-1]:n},useMedium:function(l){var c=e(l,i);return t.push(c),function(){t=t.filter(function(f){return f!==c})}},assignSyncMedium:function(l){for(i=!0;t.length;){var c=t;t=[],c.forEach(l)}t={push:function(f){return l(f)},filter:function(){return t}}},assignMedium:function(l){i=!0;var c=[];if(t.length){var f=t;t=[],f.forEach(l),c=t}var g=function(){var _=c;c=[],_.forEach(l)},y=function(){return Promise.resolve().then(g)};y(),t={push:function(_){c.push(_),y()},filter:function(_){return c=c.filter(_),t}}}};return o}function HN(n){n===void 0&&(n={});var e=qN(null);return e.options=mr({async:!0,ssr:!1},n),e}var rI=function(n){var e=n.sideCar,t=nI(n,["sideCar"]);if(!e)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var i=e.read();if(!i)throw new Error("Sidecar medium not found");return U.createElement(i,mr({},t))};rI.isSideCarExport=!0;function GN(n,e){return n.useMedium(e),rI}var iI=HN(),Cf=function(){},Nh=U.forwardRef(function(n,e){var t=U.useRef(null),i=U.useState({onScrollCapture:Cf,onWheelCapture:Cf,onTouchMoveCapture:Cf}),o=i[0],l=i[1],c=n.forwardProps,f=n.children,g=n.className,y=n.removeScrollBar,_=n.enabled,E=n.shards,I=n.sideCar,O=n.noRelative,W=n.noIsolation,M=n.inert,z=n.allowPinchZoom,ee=n.as,ne=ee===void 0?"div":ee,se=n.gapMode,le=nI(n,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),oe=I,ce=$N([t,e]),R=mr(mr({},le),o);return U.createElement(U.Fragment,null,_&&U.createElement(oe,{sideCar:iI,removeScrollBar:y,shards:E,noRelative:O,noIsolation:W,inert:M,setCallbacks:l,allowPinchZoom:!!z,lockRef:t,gapMode:se}),c?U.cloneElement(U.Children.only(f),mr(mr({},R),{ref:ce})):U.createElement(ne,mr({},R,{className:g,ref:ce}),f))});Nh.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Nh.classNames={fullWidth:Dc,zeroRight:Nc};var KN=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function QN(){if(!document)return null;var n=document.createElement("style");n.type="text/css";var e=KN();return e&&n.setAttribute("nonce",e),n}function YN(n,e){n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}function JN(n){var e=document.head||document.getElementsByTagName("head")[0];e.appendChild(n)}var XN=function(){var n=0,e=null;return{add:function(t){n==0&&(e=QN())&&(YN(e,t),JN(e)),n++},remove:function(){n--,!n&&e&&(e.parentNode&&e.parentNode.removeChild(e),e=null)}}},ZN=function(){var n=XN();return function(e,t){U.useEffect(function(){return n.add(e),function(){n.remove()}},[e&&t])}},sI=function(){var n=ZN(),e=function(t){var i=t.styles,o=t.dynamic;return n(i,o),null};return e},eD={left:0,top:0,right:0,gap:0},kf=function(n){return parseInt(n||"",10)||0},tD=function(n){var e=window.getComputedStyle(document.body),t=e[n==="padding"?"paddingLeft":"marginLeft"],i=e[n==="padding"?"paddingTop":"marginTop"],o=e[n==="padding"?"paddingRight":"marginRight"];return[kf(t),kf(i),kf(o)]},nD=function(n){if(n===void 0&&(n="margin"),typeof window>"u")return eD;var e=tD(n),t=document.documentElement.clientWidth,i=window.innerWidth;return{left:e[0],top:e[1],right:e[2],gap:Math.max(0,i-t+e[2]-e[0])}},rD=sI(),Xo="data-scroll-locked",iD=function(n,e,t,i){var o=n.left,l=n.top,c=n.right,f=n.gap;return t===void 0&&(t="margin"),`
  .`.concat(UN,` {
   overflow: hidden `).concat(i,`;
   padding-right: `).concat(f,"px ").concat(i,`;
  }
  body[`).concat(Xo,`] {
    overflow: hidden `).concat(i,`;
    overscroll-behavior: contain;
    `).concat([e&&"position: relative ".concat(i,";"),t==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(l,`px;
    padding-right: `).concat(c,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(f,"px ").concat(i,`;
    `),t==="padding"&&"padding-right: ".concat(f,"px ").concat(i,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(Nc,` {
    right: `).concat(f,"px ").concat(i,`;
  }
  
  .`).concat(Dc,` {
    margin-right: `).concat(f,"px ").concat(i,`;
  }
  
  .`).concat(Nc," .").concat(Nc,` {
    right: 0 `).concat(i,`;
  }
  
  .`).concat(Dc," .").concat(Dc,` {
    margin-right: 0 `).concat(i,`;
  }
  
  body[`).concat(Xo,`] {
    `).concat(jN,": ").concat(f,`px;
  }
`)},D_=function(){var n=parseInt(document.body.getAttribute(Xo)||"0",10);return isFinite(n)?n:0},sD=function(){U.useEffect(function(){return document.body.setAttribute(Xo,(D_()+1).toString()),function(){var n=D_()-1;n<=0?document.body.removeAttribute(Xo):document.body.setAttribute(Xo,n.toString())}},[])},oD=function(n){var e=n.noRelative,t=n.noImportant,i=n.gapMode,o=i===void 0?"margin":i;sD();var l=U.useMemo(function(){return nD(o)},[o]);return U.createElement(rD,{styles:iD(l,!e,o,t?"":"!important")})},sp=!1;if(typeof window<"u")try{var gc=Object.defineProperty({},"passive",{get:function(){return sp=!0,!0}});window.addEventListener("test",gc,gc),window.removeEventListener("test",gc,gc)}catch{sp=!1}var Mo=sp?{passive:!1}:!1,aD=function(n){return n.tagName==="TEXTAREA"},oI=function(n,e){if(!(n instanceof Element))return!1;var t=window.getComputedStyle(n);return t[e]!=="hidden"&&!(t.overflowY===t.overflowX&&!aD(n)&&t[e]==="visible")},lD=function(n){return oI(n,"overflowY")},uD=function(n){return oI(n,"overflowX")},V_=function(n,e){var t=e.ownerDocument,i=e;do{typeof ShadowRoot<"u"&&i instanceof ShadowRoot&&(i=i.host);var o=aI(n,i);if(o){var l=lI(n,i),c=l[1],f=l[2];if(c>f)return!0}i=i.parentNode}while(i&&i!==t.body);return!1},cD=function(n){var e=n.scrollTop,t=n.scrollHeight,i=n.clientHeight;return[e,t,i]},hD=function(n){var e=n.scrollLeft,t=n.scrollWidth,i=n.clientWidth;return[e,t,i]},aI=function(n,e){return n==="v"?lD(e):uD(e)},lI=function(n,e){return n==="v"?cD(e):hD(e)},dD=function(n,e){return n==="h"&&e==="rtl"?-1:1},fD=function(n,e,t,i,o){var l=dD(n,window.getComputedStyle(e).direction),c=l*i,f=t.target,g=e.contains(f),y=!1,_=c>0,E=0,I=0;do{if(!f)break;var O=lI(n,f),W=O[0],M=O[1],z=O[2],ee=M-z-l*W;(W||ee)&&aI(n,f)&&(E+=ee,I+=W);var ne=f.parentNode;f=ne&&ne.nodeType===Node.DOCUMENT_FRAGMENT_NODE?ne.host:ne}while(!g&&f!==document.body||g&&(e.contains(f)||e===f));return(_&&Math.abs(E)<1||!_&&Math.abs(I)<1)&&(y=!0),y},yc=function(n){return"changedTouches"in n?[n.changedTouches[0].clientX,n.changedTouches[0].clientY]:[0,0]},O_=function(n){return[n.deltaX,n.deltaY]},M_=function(n){return n&&"current"in n?n.current:n},pD=function(n,e){return n[0]===e[0]&&n[1]===e[1]},mD=function(n){return`
  .block-interactivity-`.concat(n,` {pointer-events: none;}
  .allow-interactivity-`).concat(n,` {pointer-events: all;}
`)},gD=0,Lo=[];function yD(n){var e=U.useRef([]),t=U.useRef([0,0]),i=U.useRef(),o=U.useState(gD++)[0],l=U.useState(sI)[0],c=U.useRef(n);U.useEffect(function(){c.current=n},[n]),U.useEffect(function(){if(n.inert){document.body.classList.add("block-interactivity-".concat(o));var M=FN([n.lockRef.current],(n.shards||[]).map(M_),!0).filter(Boolean);return M.forEach(function(z){return z.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),M.forEach(function(z){return z.classList.remove("allow-interactivity-".concat(o))})}}},[n.inert,n.lockRef.current,n.shards]);var f=U.useCallback(function(M,z){if("touches"in M&&M.touches.length===2||M.type==="wheel"&&M.ctrlKey)return!c.current.allowPinchZoom;var ee=yc(M),ne=t.current,se="deltaX"in M?M.deltaX:ne[0]-ee[0],le="deltaY"in M?M.deltaY:ne[1]-ee[1],oe,ce=M.target,R=Math.abs(se)>Math.abs(le)?"h":"v";if("touches"in M&&R==="h"&&ce.type==="range")return!1;var S=window.getSelection(),k=S&&S.anchorNode,b=k?k===ce||k.contains(ce):!1;if(b)return!1;var x=V_(R,ce);if(!x)return!0;if(x?oe=R:(oe=R==="v"?"h":"v",x=V_(R,ce)),!x)return!1;if(!i.current&&"changedTouches"in M&&(se||le)&&(i.current=oe),!oe)return!0;var D=i.current||oe;return fD(D,z,M,D==="h"?se:le)},[]),g=U.useCallback(function(M){var z=M;if(!(!Lo.length||Lo[Lo.length-1]!==l)){var ee="deltaY"in z?O_(z):yc(z),ne=e.current.filter(function(oe){return oe.name===z.type&&(oe.target===z.target||z.target===oe.shadowParent)&&pD(oe.delta,ee)})[0];if(ne&&ne.should){z.cancelable&&z.preventDefault();return}if(!ne){var se=(c.current.shards||[]).map(M_).filter(Boolean).filter(function(oe){return oe.contains(z.target)}),le=se.length>0?f(z,se[0]):!c.current.noIsolation;le&&z.cancelable&&z.preventDefault()}}},[]),y=U.useCallback(function(M,z,ee,ne){var se={name:M,delta:z,target:ee,should:ne,shadowParent:vD(ee)};e.current.push(se),setTimeout(function(){e.current=e.current.filter(function(le){return le!==se})},1)},[]),_=U.useCallback(function(M){t.current=yc(M),i.current=void 0},[]),E=U.useCallback(function(M){y(M.type,O_(M),M.target,f(M,n.lockRef.current))},[]),I=U.useCallback(function(M){y(M.type,yc(M),M.target,f(M,n.lockRef.current))},[]);U.useEffect(function(){return Lo.push(l),n.setCallbacks({onScrollCapture:E,onWheelCapture:E,onTouchMoveCapture:I}),document.addEventListener("wheel",g,Mo),document.addEventListener("touchmove",g,Mo),document.addEventListener("touchstart",_,Mo),function(){Lo=Lo.filter(function(M){return M!==l}),document.removeEventListener("wheel",g,Mo),document.removeEventListener("touchmove",g,Mo),document.removeEventListener("touchstart",_,Mo)}},[]);var O=n.removeScrollBar,W=n.inert;return U.createElement(U.Fragment,null,W?U.createElement(l,{styles:mD(o)}):null,O?U.createElement(oD,{noRelative:n.noRelative,gapMode:n.gapMode}):null)}function vD(n){for(var e=null;n!==null;)n instanceof ShadowRoot&&(e=n.host,n=n.host),n=n.parentNode;return e}const _D=GN(iI,yD);var uI=U.forwardRef(function(n,e){return U.createElement(Nh,mr({},n,{ref:e,sideCar:_D}))});uI.classNames=Nh.classNames;var wD=function(n){if(typeof document>"u")return null;var e=Array.isArray(n)?n[0]:n;return e.ownerDocument.body},Fo=new WeakMap,vc=new WeakMap,_c={},Pf=0,cI=function(n){return n&&(n.host||cI(n.parentNode))},ED=function(n,e){return e.map(function(t){if(n.contains(t))return t;var i=cI(t);return i&&n.contains(i)?i:(console.error("aria-hidden",t,"in not contained inside",n,". Doing nothing"),null)}).filter(function(t){return!!t})},TD=function(n,e,t,i){var o=ED(e,Array.isArray(n)?n:[n]);_c[t]||(_c[t]=new WeakMap);var l=_c[t],c=[],f=new Set,g=new Set(o),y=function(E){!E||f.has(E)||(f.add(E),y(E.parentNode))};o.forEach(y);var _=function(E){!E||g.has(E)||Array.prototype.forEach.call(E.children,function(I){if(f.has(I))_(I);else try{var O=I.getAttribute(i),W=O!==null&&O!=="false",M=(Fo.get(I)||0)+1,z=(l.get(I)||0)+1;Fo.set(I,M),l.set(I,z),c.push(I),M===1&&W&&vc.set(I,!0),z===1&&I.setAttribute(t,"true"),W||I.setAttribute(i,"true")}catch(ee){console.error("aria-hidden: cannot operate on ",I,ee)}})};return _(e),f.clear(),Pf++,function(){c.forEach(function(E){var I=Fo.get(E)-1,O=l.get(E)-1;Fo.set(E,I),l.set(E,O),I||(vc.has(E)||E.removeAttribute(i),vc.delete(E)),O||E.removeAttribute(t)}),Pf--,Pf||(Fo=new WeakMap,Fo=new WeakMap,vc=new WeakMap,_c={})}},ID=function(n,e,t){t===void 0&&(t="data-aria-hidden");var i=Array.from(Array.isArray(n)?n:[n]),o=wD(n);return o?(i.push.apply(i,Array.from(o.querySelectorAll("[aria-live], script"))),TD(i,o,t,"aria-hidden")):function(){return null}},ym="Dialog",[hI,dI]=HT(ym),[SD,Gn]=hI(ym),fI=n=>{const{__scopeDialog:e,children:t,open:i,defaultOpen:o,onOpenChange:l,modal:c=!0}=n,f=U.useRef(null),g=U.useRef(null),[y=!1,_]=cN({prop:i,defaultProp:o,onChange:l});return G.jsx(SD,{scope:e,triggerRef:f,contentRef:g,contentId:Tf(),titleId:Tf(),descriptionId:Tf(),open:y,onOpenChange:_,onOpenToggle:U.useCallback(()=>_(E=>!E),[_]),modal:c,children:t})};fI.displayName=ym;var pI="DialogTrigger",mI=U.forwardRef((n,e)=>{const{__scopeDialog:t,...i}=n,o=Gn(pI,t),l=Yr(e,o.triggerRef);return G.jsx(Jr.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":wm(o.open),...i,ref:l,onClick:Wr(n.onClick,o.onOpenToggle)})});mI.displayName=pI;var vm="DialogPortal",[AD,gI]=hI(vm,{forceMount:void 0}),yI=n=>{const{__scopeDialog:e,forceMount:t,children:i,container:o}=n,l=Gn(vm,e);return G.jsx(AD,{scope:e,forceMount:t,children:U.Children.map(i,c=>G.jsx(bh,{present:t||l.open,children:G.jsx(tI,{asChild:!0,container:o,children:c})}))})};yI.displayName=vm;var ih="DialogOverlay",vI=U.forwardRef((n,e)=>{const t=gI(ih,n.__scopeDialog),{forceMount:i=t.forceMount,...o}=n,l=Gn(ih,n.__scopeDialog);return l.modal?G.jsx(bh,{present:i||l.open,children:G.jsx(RD,{...o,ref:e})}):null});vI.displayName=ih;var RD=U.forwardRef((n,e)=>{const{__scopeDialog:t,...i}=n,o=Gn(ih,t);return G.jsx(uI,{as:gm,allowPinchZoom:!0,shards:[o.contentRef],children:G.jsx(Jr.div,{"data-state":wm(o.open),...i,ref:e,style:{pointerEvents:"auto",...i.style}})})}),$s="DialogContent",_I=U.forwardRef((n,e)=>{const t=gI($s,n.__scopeDialog),{forceMount:i=t.forceMount,...o}=n,l=Gn($s,n.__scopeDialog);return G.jsx(bh,{present:i||l.open,children:l.modal?G.jsx(CD,{...o,ref:e}):G.jsx(kD,{...o,ref:e})})});_I.displayName=$s;var CD=U.forwardRef((n,e)=>{const t=Gn($s,n.__scopeDialog),i=U.useRef(null),o=Yr(e,t.contentRef,i);return U.useEffect(()=>{const l=i.current;if(l)return ID(l)},[]),G.jsx(wI,{...n,ref:o,trapFocus:t.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:Wr(n.onCloseAutoFocus,l=>{var c;l.preventDefault(),(c=t.triggerRef.current)==null||c.focus()}),onPointerDownOutside:Wr(n.onPointerDownOutside,l=>{const c=l.detail.originalEvent,f=c.button===0&&c.ctrlKey===!0;(c.button===2||f)&&l.preventDefault()}),onFocusOutside:Wr(n.onFocusOutside,l=>l.preventDefault())})}),kD=U.forwardRef((n,e)=>{const t=Gn($s,n.__scopeDialog),i=U.useRef(!1),o=U.useRef(!1);return G.jsx(wI,{...n,ref:e,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:l=>{var c,f;(c=n.onCloseAutoFocus)==null||c.call(n,l),l.defaultPrevented||(i.current||(f=t.triggerRef.current)==null||f.focus(),l.preventDefault()),i.current=!1,o.current=!1},onInteractOutside:l=>{var g,y;(g=n.onInteractOutside)==null||g.call(n,l),l.defaultPrevented||(i.current=!0,l.detail.originalEvent.type==="pointerdown"&&(o.current=!0));const c=l.target;((y=t.triggerRef.current)==null?void 0:y.contains(c))&&l.preventDefault(),l.detail.originalEvent.type==="focusin"&&o.current&&l.preventDefault()}})}),wI=U.forwardRef((n,e)=>{const{__scopeDialog:t,trapFocus:i,onOpenAutoFocus:o,onCloseAutoFocus:l,...c}=n,f=Gn($s,t),g=U.useRef(null),y=Yr(e,g);return LN(),G.jsxs(G.Fragment,{children:[G.jsx(ZT,{asChild:!0,loop:!0,trapped:i,onMountAutoFocus:o,onUnmountAutoFocus:l,children:G.jsx(JT,{role:"dialog",id:f.contentId,"aria-describedby":f.descriptionId,"aria-labelledby":f.titleId,"data-state":wm(f.open),...c,ref:y,onDismiss:()=>f.onOpenChange(!1)})}),G.jsxs(G.Fragment,{children:[G.jsx(xD,{titleId:f.titleId}),G.jsx(ND,{contentRef:g,descriptionId:f.descriptionId})]})]})}),_m="DialogTitle",EI=U.forwardRef((n,e)=>{const{__scopeDialog:t,...i}=n,o=Gn(_m,t);return G.jsx(Jr.h2,{id:o.titleId,...i,ref:e})});EI.displayName=_m;var TI="DialogDescription",II=U.forwardRef((n,e)=>{const{__scopeDialog:t,...i}=n,o=Gn(TI,t);return G.jsx(Jr.p,{id:o.descriptionId,...i,ref:e})});II.displayName=TI;var SI="DialogClose",AI=U.forwardRef((n,e)=>{const{__scopeDialog:t,...i}=n,o=Gn(SI,t);return G.jsx(Jr.button,{type:"button",...i,ref:e,onClick:Wr(n.onClick,()=>o.onOpenChange(!1))})});AI.displayName=SI;function wm(n){return n?"open":"closed"}var RI="DialogTitleWarning",[PD,CI]=oN(RI,{contentName:$s,titleName:_m,docsSlug:"dialog"}),xD=({titleId:n})=>{const e=CI(RI),t=`\`${e.contentName}\` requires a \`${e.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${e.docsSlug}`;return U.useEffect(()=>{n&&(document.getElementById(n)||console.error(t))},[t,n]),null},bD="DialogDescriptionWarning",ND=({contentRef:n,descriptionId:e})=>{const i=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${CI(bD).contentName}}.`;return U.useEffect(()=>{var l;const o=(l=n.current)==null?void 0:l.getAttribute("aria-describedby");e&&o&&(document.getElementById(e)||console.warn(i))},[i,n,e]),null},DD=fI,VD=mI,OD=yI,MD=vI,LD=_I,FD=EI,UD=II,kI=AI,PI="AlertDialog",[jD]=HT(PI,[dI]),Xr=dI(),xI=n=>{const{__scopeAlertDialog:e,...t}=n,i=Xr(e);return G.jsx(DD,{...i,...t,modal:!0})};xI.displayName=PI;var zD="AlertDialogTrigger",BD=U.forwardRef((n,e)=>{const{__scopeAlertDialog:t,...i}=n,o=Xr(t);return G.jsx(VD,{...o,...i,ref:e})});BD.displayName=zD;var $D="AlertDialogPortal",bI=n=>{const{__scopeAlertDialog:e,...t}=n,i=Xr(e);return G.jsx(OD,{...i,...t})};bI.displayName=$D;var WD="AlertDialogOverlay",NI=U.forwardRef((n,e)=>{const{__scopeAlertDialog:t,...i}=n,o=Xr(t);return G.jsx(MD,{...o,...i,ref:e})});NI.displayName=WD;var Zo="AlertDialogContent",[qD,HD]=jD(Zo),DI=U.forwardRef((n,e)=>{const{__scopeAlertDialog:t,children:i,...o}=n,l=Xr(t),c=U.useRef(null),f=Yr(e,c),g=U.useRef(null);return G.jsx(PD,{contentName:Zo,titleName:VI,docsSlug:"alert-dialog",children:G.jsx(qD,{scope:t,cancelRef:g,children:G.jsxs(LD,{role:"alertdialog",...l,...o,ref:f,onOpenAutoFocus:Wr(o.onOpenAutoFocus,y=>{var _;y.preventDefault(),(_=g.current)==null||_.focus({preventScroll:!0})}),onPointerDownOutside:y=>y.preventDefault(),onInteractOutside:y=>y.preventDefault(),children:[G.jsx(QT,{children:i}),G.jsx(KD,{contentRef:c})]})})})});DI.displayName=Zo;var VI="AlertDialogTitle",OI=U.forwardRef((n,e)=>{const{__scopeAlertDialog:t,...i}=n,o=Xr(t);return G.jsx(FD,{...o,...i,ref:e})});OI.displayName=VI;var MI="AlertDialogDescription",LI=U.forwardRef((n,e)=>{const{__scopeAlertDialog:t,...i}=n,o=Xr(t);return G.jsx(UD,{...o,...i,ref:e})});LI.displayName=MI;var GD="AlertDialogAction",FI=U.forwardRef((n,e)=>{const{__scopeAlertDialog:t,...i}=n,o=Xr(t);return G.jsx(kI,{...o,...i,ref:e})});FI.displayName=GD;var UI="AlertDialogCancel",jI=U.forwardRef((n,e)=>{const{__scopeAlertDialog:t,...i}=n,{cancelRef:o}=HD(UI,t),l=Xr(t),c=Yr(e,o);return G.jsx(kI,{...l,...i,ref:c})});jI.displayName=UI;var KD=({contentRef:n})=>{const e=`\`${Zo}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${Zo}\` by passing a \`${MI}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${Zo}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return U.useEffect(()=>{var i;document.getElementById((i=n.current)==null?void 0:i.getAttribute("aria-describedby"))||console.warn(e)},[e,n]),null},QD=xI,YD=bI,JD=NI,XD=DI,ZD=FI,e2=jI,t2=OI,n2=LI;function zI(n){var e,t,i="";if(typeof n=="string"||typeof n=="number")i+=n;else if(typeof n=="object")if(Array.isArray(n)){var o=n.length;for(e=0;e<o;e++)n[e]&&(t=zI(n[e]))&&(i&&(i+=" "),i+=t)}else for(t in n)n[t]&&(i&&(i+=" "),i+=t);return i}function BI(){for(var n,e,t=0,i="",o=arguments.length;t<o;t++)(n=arguments[t])&&(e=zI(n))&&(i&&(i+=" "),i+=e);return i}const Em="-",r2=n=>{const e=s2(n),{conflictingClassGroups:t,conflictingClassGroupModifiers:i}=n;return{getClassGroupId:c=>{const f=c.split(Em);return f[0]===""&&f.length!==1&&f.shift(),$I(f,e)||i2(c)},getConflictingClassGroupIds:(c,f)=>{const g=t[c]||[];return f&&i[c]?[...g,...i[c]]:g}}},$I=(n,e)=>{var c;if(n.length===0)return e.classGroupId;const t=n[0],i=e.nextPart.get(t),o=i?$I(n.slice(1),i):void 0;if(o)return o;if(e.validators.length===0)return;const l=n.join(Em);return(c=e.validators.find(({validator:f})=>f(l)))==null?void 0:c.classGroupId},L_=/^\[(.+)\]$/,i2=n=>{if(L_.test(n)){const e=L_.exec(n)[1],t=e==null?void 0:e.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}},s2=n=>{const{theme:e,classGroups:t}=n,i={nextPart:new Map,validators:[]};for(const o in t)op(t[o],i,o,e);return i},op=(n,e,t,i)=>{n.forEach(o=>{if(typeof o=="string"){const l=o===""?e:F_(e,o);l.classGroupId=t;return}if(typeof o=="function"){if(o2(o)){op(o(i),e,t,i);return}e.validators.push({validator:o,classGroupId:t});return}Object.entries(o).forEach(([l,c])=>{op(c,F_(e,l),t,i)})})},F_=(n,e)=>{let t=n;return e.split(Em).forEach(i=>{t.nextPart.has(i)||t.nextPart.set(i,{nextPart:new Map,validators:[]}),t=t.nextPart.get(i)}),t},o2=n=>n.isThemeGetter,a2=n=>{if(n<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,i=new Map;const o=(l,c)=>{t.set(l,c),e++,e>n&&(e=0,i=t,t=new Map)};return{get(l){let c=t.get(l);if(c!==void 0)return c;if((c=i.get(l))!==void 0)return o(l,c),c},set(l,c){t.has(l)?t.set(l,c):o(l,c)}}},ap="!",lp=":",l2=lp.length,u2=n=>{const{prefix:e,experimentalParseClassName:t}=n;let i=o=>{const l=[];let c=0,f=0,g=0,y;for(let W=0;W<o.length;W++){let M=o[W];if(c===0&&f===0){if(M===lp){l.push(o.slice(g,W)),g=W+l2;continue}if(M==="/"){y=W;continue}}M==="["?c++:M==="]"?c--:M==="("?f++:M===")"&&f--}const _=l.length===0?o:o.substring(g),E=c2(_),I=E!==_,O=y&&y>g?y-g:void 0;return{modifiers:l,hasImportantModifier:I,baseClassName:E,maybePostfixModifierPosition:O}};if(e){const o=e+lp,l=i;i=c=>c.startsWith(o)?l(c.substring(o.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:c,maybePostfixModifierPosition:void 0}}if(t){const o=i;i=l=>t({className:l,parseClassName:o})}return i},c2=n=>n.endsWith(ap)?n.substring(0,n.length-1):n.startsWith(ap)?n.substring(1):n,h2=n=>{const e=Object.fromEntries(n.orderSensitiveModifiers.map(i=>[i,!0]));return i=>{if(i.length<=1)return i;const o=[];let l=[];return i.forEach(c=>{c[0]==="["||e[c]?(o.push(...l.sort(),c),l=[]):l.push(c)}),o.push(...l.sort()),o}},d2=n=>({cache:a2(n.cacheSize),parseClassName:u2(n),sortModifiers:h2(n),...r2(n)}),f2=/\s+/,p2=(n,e)=>{const{parseClassName:t,getClassGroupId:i,getConflictingClassGroupIds:o,sortModifiers:l}=e,c=[],f=n.trim().split(f2);let g="";for(let y=f.length-1;y>=0;y-=1){const _=f[y],{isExternal:E,modifiers:I,hasImportantModifier:O,baseClassName:W,maybePostfixModifierPosition:M}=t(_);if(E){g=_+(g.length>0?" "+g:g);continue}let z=!!M,ee=i(z?W.substring(0,M):W);if(!ee){if(!z){g=_+(g.length>0?" "+g:g);continue}if(ee=i(W),!ee){g=_+(g.length>0?" "+g:g);continue}z=!1}const ne=l(I).join(":"),se=O?ne+ap:ne,le=se+ee;if(c.includes(le))continue;c.push(le);const oe=o(ee,z);for(let ce=0;ce<oe.length;++ce){const R=oe[ce];c.push(se+R)}g=_+(g.length>0?" "+g:g)}return g};function m2(){let n=0,e,t,i="";for(;n<arguments.length;)(e=arguments[n++])&&(t=WI(e))&&(i&&(i+=" "),i+=t);return i}const WI=n=>{if(typeof n=="string")return n;let e,t="";for(let i=0;i<n.length;i++)n[i]&&(e=WI(n[i]))&&(t&&(t+=" "),t+=e);return t};function g2(n,...e){let t,i,o,l=c;function c(g){const y=e.reduce((_,E)=>E(_),n());return t=d2(y),i=t.cache.get,o=t.cache.set,l=f,f(g)}function f(g){const y=i(g);if(y)return y;const _=p2(g,t);return o(g,_),_}return function(){return l(m2.apply(null,arguments))}}const Rt=n=>{const e=t=>t[n]||[];return e.isThemeGetter=!0,e},qI=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,HI=/^\((?:(\w[\w-]*):)?(.+)\)$/i,y2=/^\d+\/\d+$/,v2=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,_2=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,w2=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,E2=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,T2=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Uo=n=>y2.test(n),De=n=>!!n&&!Number.isNaN(Number(n)),bi=n=>!!n&&Number.isInteger(Number(n)),xf=n=>n.endsWith("%")&&De(n.slice(0,-1)),zr=n=>v2.test(n),I2=()=>!0,S2=n=>_2.test(n)&&!w2.test(n),GI=()=>!1,A2=n=>E2.test(n),R2=n=>T2.test(n),C2=n=>!me(n)&&!ge(n),k2=n=>pa(n,YI,GI),me=n=>qI.test(n),bs=n=>pa(n,JI,S2),bf=n=>pa(n,D2,De),U_=n=>pa(n,KI,GI),P2=n=>pa(n,QI,R2),wc=n=>pa(n,XI,A2),ge=n=>HI.test(n),dl=n=>ma(n,JI),x2=n=>ma(n,V2),j_=n=>ma(n,KI),b2=n=>ma(n,YI),N2=n=>ma(n,QI),Ec=n=>ma(n,XI,!0),pa=(n,e,t)=>{const i=qI.exec(n);return i?i[1]?e(i[1]):t(i[2]):!1},ma=(n,e,t=!1)=>{const i=HI.exec(n);return i?i[1]?e(i[1]):t:!1},KI=n=>n==="position"||n==="percentage",QI=n=>n==="image"||n==="url",YI=n=>n==="length"||n==="size"||n==="bg-size",JI=n=>n==="length",D2=n=>n==="number",V2=n=>n==="family-name",XI=n=>n==="shadow",O2=()=>{const n=Rt("color"),e=Rt("font"),t=Rt("text"),i=Rt("font-weight"),o=Rt("tracking"),l=Rt("leading"),c=Rt("breakpoint"),f=Rt("container"),g=Rt("spacing"),y=Rt("radius"),_=Rt("shadow"),E=Rt("inset-shadow"),I=Rt("text-shadow"),O=Rt("drop-shadow"),W=Rt("blur"),M=Rt("perspective"),z=Rt("aspect"),ee=Rt("ease"),ne=Rt("animate"),se=()=>["auto","avoid","all","avoid-page","page","left","right","column"],le=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],oe=()=>[...le(),ge,me],ce=()=>["auto","hidden","clip","visible","scroll"],R=()=>["auto","contain","none"],S=()=>[ge,me,g],k=()=>[Uo,"full","auto",...S()],b=()=>[bi,"none","subgrid",ge,me],x=()=>["auto",{span:["full",bi,ge,me]},bi,ge,me],D=()=>[bi,"auto",ge,me],C=()=>["auto","min","max","fr",ge,me],Be=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Ge=()=>["start","end","center","stretch","center-safe","end-safe"],Qe=()=>["auto",...S()],Ue=()=>[Uo,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...S()],q=()=>[n,ge,me],we=()=>[...le(),j_,U_,{position:[ge,me]}],ae=()=>["no-repeat",{repeat:["","x","y","space","round"]}],V=()=>["auto","cover","contain",b2,k2,{size:[ge,me]}],Q=()=>[xf,dl,bs],ve=()=>["","none","full",y,ge,me],Ee=()=>["",De,dl,bs],xe=()=>["solid","dashed","dotted","double"],X=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],de=()=>[De,xf,j_,U_],Ne=()=>["","none",W,ge,me],We=()=>["none",De,ge,me],gt=()=>["none",De,ge,me],Kn=()=>[De,ge,me],Qn=()=>[Uo,"full",...S()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[zr],breakpoint:[zr],color:[I2],container:[zr],"drop-shadow":[zr],ease:["in","out","in-out"],font:[C2],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[zr],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[zr],shadow:[zr],spacing:["px",De],text:[zr],"text-shadow":[zr],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Uo,me,ge,z]}],container:["container"],columns:[{columns:[De,me,ge,f]}],"break-after":[{"break-after":se()}],"break-before":[{"break-before":se()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:oe()}],overflow:[{overflow:ce()}],"overflow-x":[{"overflow-x":ce()}],"overflow-y":[{"overflow-y":ce()}],overscroll:[{overscroll:R()}],"overscroll-x":[{"overscroll-x":R()}],"overscroll-y":[{"overscroll-y":R()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:k()}],"inset-x":[{"inset-x":k()}],"inset-y":[{"inset-y":k()}],start:[{start:k()}],end:[{end:k()}],top:[{top:k()}],right:[{right:k()}],bottom:[{bottom:k()}],left:[{left:k()}],visibility:["visible","invisible","collapse"],z:[{z:[bi,"auto",ge,me]}],basis:[{basis:[Uo,"full","auto",f,...S()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[De,Uo,"auto","initial","none",me]}],grow:[{grow:["",De,ge,me]}],shrink:[{shrink:["",De,ge,me]}],order:[{order:[bi,"first","last","none",ge,me]}],"grid-cols":[{"grid-cols":b()}],"col-start-end":[{col:x()}],"col-start":[{"col-start":D()}],"col-end":[{"col-end":D()}],"grid-rows":[{"grid-rows":b()}],"row-start-end":[{row:x()}],"row-start":[{"row-start":D()}],"row-end":[{"row-end":D()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":C()}],"auto-rows":[{"auto-rows":C()}],gap:[{gap:S()}],"gap-x":[{"gap-x":S()}],"gap-y":[{"gap-y":S()}],"justify-content":[{justify:[...Be(),"normal"]}],"justify-items":[{"justify-items":[...Ge(),"normal"]}],"justify-self":[{"justify-self":["auto",...Ge()]}],"align-content":[{content:["normal",...Be()]}],"align-items":[{items:[...Ge(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Ge(),{baseline:["","last"]}]}],"place-content":[{"place-content":Be()}],"place-items":[{"place-items":[...Ge(),"baseline"]}],"place-self":[{"place-self":["auto",...Ge()]}],p:[{p:S()}],px:[{px:S()}],py:[{py:S()}],ps:[{ps:S()}],pe:[{pe:S()}],pt:[{pt:S()}],pr:[{pr:S()}],pb:[{pb:S()}],pl:[{pl:S()}],m:[{m:Qe()}],mx:[{mx:Qe()}],my:[{my:Qe()}],ms:[{ms:Qe()}],me:[{me:Qe()}],mt:[{mt:Qe()}],mr:[{mr:Qe()}],mb:[{mb:Qe()}],ml:[{ml:Qe()}],"space-x":[{"space-x":S()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":S()}],"space-y-reverse":["space-y-reverse"],size:[{size:Ue()}],w:[{w:[f,"screen",...Ue()]}],"min-w":[{"min-w":[f,"screen","none",...Ue()]}],"max-w":[{"max-w":[f,"screen","none","prose",{screen:[c]},...Ue()]}],h:[{h:["screen",...Ue()]}],"min-h":[{"min-h":["screen","none",...Ue()]}],"max-h":[{"max-h":["screen",...Ue()]}],"font-size":[{text:["base",t,dl,bs]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[i,ge,bf]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",xf,me]}],"font-family":[{font:[x2,me,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[o,ge,me]}],"line-clamp":[{"line-clamp":[De,"none",ge,bf]}],leading:[{leading:[l,...S()]}],"list-image":[{"list-image":["none",ge,me]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",ge,me]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:q()}],"text-color":[{text:q()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...xe(),"wavy"]}],"text-decoration-thickness":[{decoration:[De,"from-font","auto",ge,bs]}],"text-decoration-color":[{decoration:q()}],"underline-offset":[{"underline-offset":[De,"auto",ge,me]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:S()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ge,me]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ge,me]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:we()}],"bg-repeat":[{bg:ae()}],"bg-size":[{bg:V()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},bi,ge,me],radial:["",ge,me],conic:[bi,ge,me]},N2,P2]}],"bg-color":[{bg:q()}],"gradient-from-pos":[{from:Q()}],"gradient-via-pos":[{via:Q()}],"gradient-to-pos":[{to:Q()}],"gradient-from":[{from:q()}],"gradient-via":[{via:q()}],"gradient-to":[{to:q()}],rounded:[{rounded:ve()}],"rounded-s":[{"rounded-s":ve()}],"rounded-e":[{"rounded-e":ve()}],"rounded-t":[{"rounded-t":ve()}],"rounded-r":[{"rounded-r":ve()}],"rounded-b":[{"rounded-b":ve()}],"rounded-l":[{"rounded-l":ve()}],"rounded-ss":[{"rounded-ss":ve()}],"rounded-se":[{"rounded-se":ve()}],"rounded-ee":[{"rounded-ee":ve()}],"rounded-es":[{"rounded-es":ve()}],"rounded-tl":[{"rounded-tl":ve()}],"rounded-tr":[{"rounded-tr":ve()}],"rounded-br":[{"rounded-br":ve()}],"rounded-bl":[{"rounded-bl":ve()}],"border-w":[{border:Ee()}],"border-w-x":[{"border-x":Ee()}],"border-w-y":[{"border-y":Ee()}],"border-w-s":[{"border-s":Ee()}],"border-w-e":[{"border-e":Ee()}],"border-w-t":[{"border-t":Ee()}],"border-w-r":[{"border-r":Ee()}],"border-w-b":[{"border-b":Ee()}],"border-w-l":[{"border-l":Ee()}],"divide-x":[{"divide-x":Ee()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Ee()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...xe(),"hidden","none"]}],"divide-style":[{divide:[...xe(),"hidden","none"]}],"border-color":[{border:q()}],"border-color-x":[{"border-x":q()}],"border-color-y":[{"border-y":q()}],"border-color-s":[{"border-s":q()}],"border-color-e":[{"border-e":q()}],"border-color-t":[{"border-t":q()}],"border-color-r":[{"border-r":q()}],"border-color-b":[{"border-b":q()}],"border-color-l":[{"border-l":q()}],"divide-color":[{divide:q()}],"outline-style":[{outline:[...xe(),"none","hidden"]}],"outline-offset":[{"outline-offset":[De,ge,me]}],"outline-w":[{outline:["",De,dl,bs]}],"outline-color":[{outline:q()}],shadow:[{shadow:["","none",_,Ec,wc]}],"shadow-color":[{shadow:q()}],"inset-shadow":[{"inset-shadow":["none",E,Ec,wc]}],"inset-shadow-color":[{"inset-shadow":q()}],"ring-w":[{ring:Ee()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:q()}],"ring-offset-w":[{"ring-offset":[De,bs]}],"ring-offset-color":[{"ring-offset":q()}],"inset-ring-w":[{"inset-ring":Ee()}],"inset-ring-color":[{"inset-ring":q()}],"text-shadow":[{"text-shadow":["none",I,Ec,wc]}],"text-shadow-color":[{"text-shadow":q()}],opacity:[{opacity:[De,ge,me]}],"mix-blend":[{"mix-blend":[...X(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":X()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[De]}],"mask-image-linear-from-pos":[{"mask-linear-from":de()}],"mask-image-linear-to-pos":[{"mask-linear-to":de()}],"mask-image-linear-from-color":[{"mask-linear-from":q()}],"mask-image-linear-to-color":[{"mask-linear-to":q()}],"mask-image-t-from-pos":[{"mask-t-from":de()}],"mask-image-t-to-pos":[{"mask-t-to":de()}],"mask-image-t-from-color":[{"mask-t-from":q()}],"mask-image-t-to-color":[{"mask-t-to":q()}],"mask-image-r-from-pos":[{"mask-r-from":de()}],"mask-image-r-to-pos":[{"mask-r-to":de()}],"mask-image-r-from-color":[{"mask-r-from":q()}],"mask-image-r-to-color":[{"mask-r-to":q()}],"mask-image-b-from-pos":[{"mask-b-from":de()}],"mask-image-b-to-pos":[{"mask-b-to":de()}],"mask-image-b-from-color":[{"mask-b-from":q()}],"mask-image-b-to-color":[{"mask-b-to":q()}],"mask-image-l-from-pos":[{"mask-l-from":de()}],"mask-image-l-to-pos":[{"mask-l-to":de()}],"mask-image-l-from-color":[{"mask-l-from":q()}],"mask-image-l-to-color":[{"mask-l-to":q()}],"mask-image-x-from-pos":[{"mask-x-from":de()}],"mask-image-x-to-pos":[{"mask-x-to":de()}],"mask-image-x-from-color":[{"mask-x-from":q()}],"mask-image-x-to-color":[{"mask-x-to":q()}],"mask-image-y-from-pos":[{"mask-y-from":de()}],"mask-image-y-to-pos":[{"mask-y-to":de()}],"mask-image-y-from-color":[{"mask-y-from":q()}],"mask-image-y-to-color":[{"mask-y-to":q()}],"mask-image-radial":[{"mask-radial":[ge,me]}],"mask-image-radial-from-pos":[{"mask-radial-from":de()}],"mask-image-radial-to-pos":[{"mask-radial-to":de()}],"mask-image-radial-from-color":[{"mask-radial-from":q()}],"mask-image-radial-to-color":[{"mask-radial-to":q()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":le()}],"mask-image-conic-pos":[{"mask-conic":[De]}],"mask-image-conic-from-pos":[{"mask-conic-from":de()}],"mask-image-conic-to-pos":[{"mask-conic-to":de()}],"mask-image-conic-from-color":[{"mask-conic-from":q()}],"mask-image-conic-to-color":[{"mask-conic-to":q()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:we()}],"mask-repeat":[{mask:ae()}],"mask-size":[{mask:V()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",ge,me]}],filter:[{filter:["","none",ge,me]}],blur:[{blur:Ne()}],brightness:[{brightness:[De,ge,me]}],contrast:[{contrast:[De,ge,me]}],"drop-shadow":[{"drop-shadow":["","none",O,Ec,wc]}],"drop-shadow-color":[{"drop-shadow":q()}],grayscale:[{grayscale:["",De,ge,me]}],"hue-rotate":[{"hue-rotate":[De,ge,me]}],invert:[{invert:["",De,ge,me]}],saturate:[{saturate:[De,ge,me]}],sepia:[{sepia:["",De,ge,me]}],"backdrop-filter":[{"backdrop-filter":["","none",ge,me]}],"backdrop-blur":[{"backdrop-blur":Ne()}],"backdrop-brightness":[{"backdrop-brightness":[De,ge,me]}],"backdrop-contrast":[{"backdrop-contrast":[De,ge,me]}],"backdrop-grayscale":[{"backdrop-grayscale":["",De,ge,me]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[De,ge,me]}],"backdrop-invert":[{"backdrop-invert":["",De,ge,me]}],"backdrop-opacity":[{"backdrop-opacity":[De,ge,me]}],"backdrop-saturate":[{"backdrop-saturate":[De,ge,me]}],"backdrop-sepia":[{"backdrop-sepia":["",De,ge,me]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":S()}],"border-spacing-x":[{"border-spacing-x":S()}],"border-spacing-y":[{"border-spacing-y":S()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",ge,me]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[De,"initial",ge,me]}],ease:[{ease:["linear","initial",ee,ge,me]}],delay:[{delay:[De,ge,me]}],animate:[{animate:["none",ne,ge,me]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[M,ge,me]}],"perspective-origin":[{"perspective-origin":oe()}],rotate:[{rotate:We()}],"rotate-x":[{"rotate-x":We()}],"rotate-y":[{"rotate-y":We()}],"rotate-z":[{"rotate-z":We()}],scale:[{scale:gt()}],"scale-x":[{"scale-x":gt()}],"scale-y":[{"scale-y":gt()}],"scale-z":[{"scale-z":gt()}],"scale-3d":["scale-3d"],skew:[{skew:Kn()}],"skew-x":[{"skew-x":Kn()}],"skew-y":[{"skew-y":Kn()}],transform:[{transform:[ge,me,"","none","gpu","cpu"]}],"transform-origin":[{origin:oe()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Qn()}],"translate-x":[{"translate-x":Qn()}],"translate-y":[{"translate-y":Qn()}],"translate-z":[{"translate-z":Qn()}],"translate-none":["translate-none"],accent:[{accent:q()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:q()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ge,me]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":S()}],"scroll-mx":[{"scroll-mx":S()}],"scroll-my":[{"scroll-my":S()}],"scroll-ms":[{"scroll-ms":S()}],"scroll-me":[{"scroll-me":S()}],"scroll-mt":[{"scroll-mt":S()}],"scroll-mr":[{"scroll-mr":S()}],"scroll-mb":[{"scroll-mb":S()}],"scroll-ml":[{"scroll-ml":S()}],"scroll-p":[{"scroll-p":S()}],"scroll-px":[{"scroll-px":S()}],"scroll-py":[{"scroll-py":S()}],"scroll-ps":[{"scroll-ps":S()}],"scroll-pe":[{"scroll-pe":S()}],"scroll-pt":[{"scroll-pt":S()}],"scroll-pr":[{"scroll-pr":S()}],"scroll-pb":[{"scroll-pb":S()}],"scroll-pl":[{"scroll-pl":S()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ge,me]}],fill:[{fill:["none",...q()]}],"stroke-w":[{stroke:[De,dl,bs,bf]}],stroke:[{stroke:["none",...q()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},M2=g2(O2);function rs(...n){return M2(BI(n))}const z_=n=>typeof n=="boolean"?`${n}`:n===0?"0":n,B_=BI,L2=(n,e)=>t=>{var i;if((e==null?void 0:e.variants)==null)return B_(n,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:o,defaultVariants:l}=e,c=Object.keys(o).map(y=>{const _=t==null?void 0:t[y],E=l==null?void 0:l[y];if(_===null)return null;const I=z_(_)||z_(E);return o[y][I]}),f=t&&Object.entries(t).reduce((y,_)=>{let[E,I]=_;return I===void 0||(y[E]=I),y},{}),g=e==null||(i=e.compoundVariants)===null||i===void 0?void 0:i.reduce((y,_)=>{let{class:E,className:I,...O}=_;return Object.entries(O).every(W=>{let[M,z]=W;return Array.isArray(z)?z.includes({...l,...f}[M]):{...l,...f}[M]===z})?[...y,E,I]:y},[]);return B_(n,c,g,t==null?void 0:t.class,t==null?void 0:t.className)},ZI=L2("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9 rounded-md"}},defaultVariants:{variant:"default",size:"default"}});function F2({...n}){return G.jsx(QD,{"data-slot":"alert-dialog",...n})}function U2({...n}){return G.jsx(YD,{"data-slot":"alert-dialog-portal",...n})}function j2({className:n,...e}){return G.jsx(JD,{"data-slot":"alert-dialog-overlay",className:rs("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",n),...e})}function z2({className:n,...e}){return G.jsxs(U2,{children:[G.jsx(j2,{}),G.jsx(XD,{"data-slot":"alert-dialog-content",className:rs("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",n),...e})]})}function B2({className:n,...e}){return G.jsx("div",{"data-slot":"alert-dialog-header",className:rs("flex flex-col gap-2 text-center sm:text-left",n),...e})}function $2({className:n,...e}){return G.jsx("div",{"data-slot":"alert-dialog-footer",className:rs("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",n),...e})}function W2({className:n,...e}){return G.jsx(t2,{"data-slot":"alert-dialog-title",className:rs("text-lg font-semibold",n),...e})}function q2({className:n,...e}){return G.jsx(n2,{"data-slot":"alert-dialog-description",className:rs("text-muted-foreground text-sm",n),...e})}function H2({className:n,...e}){return G.jsx(ZD,{className:rs(ZI(),n),...e})}function G2({className:n,...e}){return G.jsx(e2,{className:rs(ZI({variant:"outline"}),n),...e})}const $_="marcoPlayerName";function K2(){var xe;const[n,e]=U.useState("menu"),[t,i]=U.useState(null),[o,l]=U.useState(null),[c,f]=U.useState([]),[g,y]=U.useState(""),[_,E]=U.useState(""),[I,O]=U.useState(!1),[W,M]=U.useState(!1),[z,ee]=U.useState(!1),[ne,se]=U.useState(null),[le,oe]=U.useState(null),[ce,R]=U.useState(!1),[S,k]=U.useState(null),b=U.useMemo(()=>/[a-z0-9]/i.test(g),[g]),x=I&&b&&W&&!ce,D=(xe=Sl.currentUser)==null?void 0:xe.uid,C=c.find(X=>X.id===D)??null,Be=(C==null?void 0:C.isReady)===!0,Ge=c.length>=2&&c.every(X=>X.isReady===!0),Qe=Math.max(2,Math.ceil((c.length-1)/2));U.useEffect(()=>{const X=localStorage.getItem($_);X&&(y(X),E(X),O(!0))},[]),U.useEffect(()=>{let X=!0;return T_().then(async()=>{if(!X)return;M(!0);const de=await Jb();de&&(i(de),e("lobby"))}).catch(de=>{X&&(M(!1),oe(de.message))}),()=>{X=!1}},[]),U.useEffect(()=>{if(!W||!I||!_)return;let X=!0;return I_(_).catch(de=>{X&&oe(de.message)}),()=>{X=!1}},[W,I,_]),U.useEffect(()=>{if(!t){l(null),f([]);return}const X=Xb(t,Ne=>{l(Ne),Ne||(i(null),e("menu"))}),de=Zb(t,f);return()=>{X(),de()}},[t]),U.useEffect(()=>{if(!t)return;let X=!0;const de=async()=>{try{await eN(t)}catch{if(!X)return}};de();const Ne=window.setInterval(de,3e4);return()=>{X=!1,window.clearInterval(Ne)}},[t]),U.useEffect(()=>{(o==null?void 0:o.state)==="playing"&&n==="lobby"&&e("photo-select")},[o==null?void 0:o.state,n]),U.useEffect(()=>{if(!t||n!=="lobby"||(o==null?void 0:o.state)!=="waiting"||!Ge||ce)return;let X=!1;return(async()=>{try{await sN(t)}catch(Ne){X||oe(Ne.message)}})(),()=>{X=!0}},[t,o==null?void 0:o.state,n,Ge,ce]);const Ue=async()=>{if(oe(null),!b){oe("Name must contain at least one letter or number.");return}const X=g.trim();if(!X){oe("Name cannot be empty.");return}R(!0);try{await T_(),await I_(X),E(X),O(!0),localStorage.setItem($_,X)}catch(de){oe(de.message)}finally{R(!1)}},q=async()=>{oe(null),R(!0);try{const X=await tN(_);i(X.roomId),e("lobby")}catch(X){oe(X.message)}finally{R(!1)}},we=async()=>{if(t){oe(null),R(!0);try{await iN(t,!Be)}catch(X){oe(X.message)}finally{R(!1)}}},ae=()=>{ee(!0)},V=async()=>{if(!(!t||!window.confirm("Leave the room? You can rejoin later."))){oe(null),R(!0);try{await nN(t),se(null),ee(!1),i(null),e("menu")}catch(de){oe(de.message)}finally{R(!1)}}},Q=()=>{const X=Math.random()<.25?"Marco":"Reg";se(X),e("role-reveal")},ve=X=>{!t||X.id===D||k(X)},Ee=async()=>{if(!(!t||!S)){oe(null),R(!0);try{const X=await rN(t,S.id);k(null),X.kicked||oe(`${S.name} has ${X.voteCount}/${X.votesNeeded} votes.`)}catch(X){oe(X.message)}finally{R(!1)}}};return G.jsxs("div",{className:"min-h-screen w-full flex items-center justify-center px-4 py-10 sm:px-8",children:[G.jsxs("div",{className:"w-full max-w-5xl text-center",children:[n==="menu"&&G.jsxs("div",{className:"space-y-6 sm:space-y-8",children:[G.jsx("img",{src:yS,alt:"Marco Photo",className:"w-full h-auto max-w-4xl mx-auto mb-6 sm:mb-8"}),G.jsx("p",{className:"text-base sm:text-lg lg:text-2xl mb-6 sm:mb-8",children:"Get ready for a fun game!"}),G.jsxs("div",{className:"flex flex-col items-center gap-3 sm:gap-4",children:[G.jsxs("div",{className:"w-full max-w-sm space-y-3",children:[G.jsx("input",{type:"text",value:g,onChange:X=>{y(X.target.value),O(!1)},placeholder:"Enter your name",className:"border-2 border-gray-300 p-2 w-full text-center rounded-full"}),G.jsx(Pi,{onClick:Ue,disabled:!b||ce,children:I?"Name Saved":"Save Name"})]}),G.jsx("div",{className:"flex flex-col gap-3 sm:gap-4 items-center",children:G.jsx(Pi,{onClick:q,disabled:!x,children:"Join Game"})}),G.jsx("p",{className:"text-sm text-gray-500",children:"One shared lobby, up to 15 players."}),!b&&g.length>0&&G.jsx("p",{className:"text-sm text-red-500",children:"Name must contain at least one letter or number."}),!W&&G.jsx("p",{className:"text-sm text-red-500",children:"Waiting for sign-in. If this persists, enable Anonymous Auth in Firebase."})]}),le&&G.jsx("p",{className:"text-sm text-red-500",children:le})]}),n==="lobby"&&G.jsxs("div",{className:"space-y-6 sm:space-y-8",children:[G.jsx("h1",{className:"text-3xl sm:text-4xl lg:text-5xl",children:"Game Lobby"}),G.jsxs("div",{className:"bg-white rounded-3xl p-6 sm:p-8 mb-6 shadow-lg",children:[G.jsx("p",{className:"text-base sm:text-lg lg:text-xl mb-2",children:"Room:"}),G.jsx("p",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-500 break-all",children:"Main Lobby"}),G.jsxs("p",{className:"text-sm text-gray-500 mt-2",children:[c.length,"/15 players joined"]})]}),G.jsxs("div",{className:"bg-white rounded-3xl p-6 sm:p-8 shadow-lg",children:[G.jsx("p",{className:"text-base sm:text-lg lg:text-xl mb-4",children:"Players"}),G.jsx("div",{className:"space-y-2",children:c.map(X=>G.jsxs("div",{className:"flex items-center justify-between border-b last:border-b-0 pb-2",children:[G.jsxs("span",{className:"text-base sm:text-lg",children:[X.name,X.id===D?" (You)":""]}),G.jsxs("div",{className:"flex items-center gap-3",children:[X.isReady&&G.jsx("span",{className:"text-xs uppercase tracking-wide text-green-600",children:"Ready"}),X.id!==D&&G.jsx("button",{type:"button",onClick:()=>ve(X),disabled:ce,className:"text-sm font-semibold text-red-600 hover:text-red-700 disabled:text-red-300",children:"Vote Kick"})]})]},X.id))})]}),G.jsx("p",{className:"text-base sm:text-lg lg:text-xl",children:(o==null?void 0:o.state)==="playing"?"Game in progress.":Ge?"Everyone is ready.":"Waiting for everyone to ready up..."}),(o==null?void 0:o.state)!=="playing"&&G.jsx(Pi,{onClick:we,disabled:ce||!C,children:Be?"Not Ready":"Ready"}),G.jsx(Pi,{onClick:V,disabled:ce,children:"Leave Room"}),le&&G.jsx("p",{className:"text-sm text-red-500",children:le})]}),n==="photo-select"&&G.jsxs("div",{className:"space-y-6 sm:space-y-8",children:[G.jsx("h1",{className:"text-3xl sm:text-4xl lg:text-5xl mb-4",children:"Select Your Photos"}),G.jsx("p",{className:"text-base sm:text-lg lg:text-xl mb-8",children:z?"Photos selected! Reveal your role when you're all set.":"Choose your photos for the game"}),G.jsxs("div",{className:"flex flex-col gap-4 items-center",children:[!z&&G.jsx(Pi,{onClick:ae,disabled:ce,children:"Select Photos"}),z&&G.jsx(Pi,{onClick:Q,disabled:ce,children:"Reveal Role"}),G.jsx(Pi,{onClick:V,disabled:ce,children:"Leave Room"})]})]}),n==="role-reveal"&&ne&&G.jsxs("div",{className:"space-y-6 sm:space-y-8",children:[G.jsx("h1",{className:"text-3xl sm:text-5xl lg:text-6xl mb-4",children:"Your Role"}),G.jsx("div",{className:`text-4xl sm:text-6xl lg:text-8xl p-6 sm:p-10 lg:p-12 rounded-3xl shadow-2xl ${ne==="Marco"?"bg-blue-500 text-white":"bg-white text-blue-500 border-4 border-blue-500"}`,children:ne==="Marco"?"🏊 Marco 🏊":"🧍 Reg 🧍"}),G.jsx("p",{className:"text-lg sm:text-2xl lg:text-3xl mt-6 sm:mt-8",children:ne==="Marco"?"You're the Marco! Time to hunt!":"You're a Reg. Stay hidden!"}),G.jsx(Pi,{onClick:V,disabled:ce,children:"Leave Room"})]})]}),G.jsx(F2,{open:!!S,onOpenChange:X=>{!X&&!ce&&k(null)},children:G.jsxs(z2,{className:"rounded-3xl border-2 border-blue-200",children:[G.jsxs(B2,{children:[G.jsx(W2,{className:"text-2xl text-blue-600",children:"Vote Kick Player?"}),G.jsx(q2,{className:"text-base text-gray-600",children:S?`Vote to remove ${S.name} from the room? ${Qe} votes needed right now.`:"Vote to remove this player from the room?"})]}),G.jsxs($2,{children:[G.jsx(G2,{disabled:ce,children:"Cancel"}),G.jsx(H2,{onClick:Ee,disabled:ce,className:"bg-red-600 text-white hover:bg-red-700",children:ce?"Submitting...":"Vote Kick"})]})]})})]})}pS.createRoot(document.getElementById("root")).render(G.jsx(K2,{}));
