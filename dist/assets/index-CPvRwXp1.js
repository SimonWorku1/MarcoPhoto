function oS(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in n)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(n,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function $_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var rf={exports:{}},ul={},sf={exports:{}},Me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Py;function aS(){if(Py)return Me;Py=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),E=Symbol.iterator;function I(O){return O===null||typeof O!="object"?null:(O=E&&O[E]||O["@@iterator"],typeof O=="function"?O:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,M={};function z(O,Q,he){this.props=O,this.context=Q,this.refs=M,this.updater=he||D}z.prototype.isReactComponent={},z.prototype.setState=function(O,Q){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Q,"setState")},z.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function Z(){}Z.prototype=z.prototype;function ne(O,Q,he){this.props=O,this.context=Q,this.refs=M,this.updater=he||D}var ie=ne.prototype=new Z;ie.constructor=ne,W(ie,z.prototype),ie.isPureReactComponent=!0;var ue=Array.isArray,ve=Object.prototype.hasOwnProperty,we={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function S(O,Q,he){var _e,be={},Ne=null,Ae=null;if(Q!=null)for(_e in Q.ref!==void 0&&(Ae=Q.ref),Q.key!==void 0&&(Ne=""+Q.key),Q)ve.call(Q,_e)&&!R.hasOwnProperty(_e)&&(be[_e]=Q[_e]);var Oe=arguments.length-2;if(Oe===1)be.children=he;else if(1<Oe){for(var Be=Array(Oe),ot=0;ot<Oe;ot++)Be[ot]=arguments[ot+2];be.children=Be}if(O&&O.defaultProps)for(_e in Oe=O.defaultProps,Oe)be[_e]===void 0&&(be[_e]=Oe[_e]);return{$$typeof:n,type:O,key:Ne,ref:Ae,props:be,_owner:we.current}}function C(O,Q){return{$$typeof:n,type:O.type,key:Q,ref:O.ref,props:O.props,_owner:O._owner}}function b(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function x(O){var Q={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(he){return Q[he]})}var V=/\/+/g;function k(O,Q){return typeof O=="object"&&O!==null&&O.key!=null?x(""+O.key):Q.toString(36)}function He(O,Q,he,_e,be){var Ne=typeof O;(Ne==="undefined"||Ne==="boolean")&&(O=null);var Ae=!1;if(O===null)Ae=!0;else switch(Ne){case"string":case"number":Ae=!0;break;case"object":switch(O.$$typeof){case n:case e:Ae=!0}}if(Ae)return Ae=O,be=be(Ae),O=_e===""?"."+k(Ae,0):_e,ue(be)?(he="",O!=null&&(he=O.replace(V,"$&/")+"/"),He(be,Q,he,"",function(ot){return ot})):be!=null&&(b(be)&&(be=C(be,he+(!be.key||Ae&&Ae.key===be.key?"":(""+be.key).replace(V,"$&/")+"/")+O)),Q.push(be)),1;if(Ae=0,_e=_e===""?".":_e+":",ue(O))for(var Oe=0;Oe<O.length;Oe++){Ne=O[Oe];var Be=_e+k(Ne,Oe);Ae+=He(Ne,Q,he,Be,be)}else if(Be=I(O),typeof Be=="function")for(O=Be.call(O),Oe=0;!(Ne=O.next()).done;)Ne=Ne.value,Be=_e+k(Ne,Oe++),Ae+=He(Ne,Q,he,Be,be);else if(Ne==="object")throw Q=String(O),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return Ae}function Ye(O,Q,he){if(O==null)return O;var _e=[],be=0;return He(O,_e,"","",function(Ne){return Q.call(he,Ne,be++)}),_e}function Ve(O){if(O._status===-1){var Q=O._result;Q=Q(),Q.then(function(he){(O._status===0||O._status===-1)&&(O._status=1,O._result=he)},function(he){(O._status===0||O._status===-1)&&(O._status=2,O._result=he)}),O._status===-1&&(O._status=0,O._result=Q)}if(O._status===1)return O._result.default;throw O._result}var je={current:null},q={transition:null},ye={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:q,ReactCurrentOwner:we};function se(){throw Error("act(...) is not supported in production builds of React.")}return Me.Children={map:Ye,forEach:function(O,Q,he){Ye(O,function(){Q.apply(this,arguments)},he)},count:function(O){var Q=0;return Ye(O,function(){Q++}),Q},toArray:function(O){return Ye(O,function(Q){return Q})||[]},only:function(O){if(!b(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Me.Component=z,Me.Fragment=t,Me.Profiler=o,Me.PureComponent=ne,Me.StrictMode=i,Me.Suspense=m,Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ye,Me.act=se,Me.cloneElement=function(O,Q,he){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var _e=W({},O.props),be=O.key,Ne=O.ref,Ae=O._owner;if(Q!=null){if(Q.ref!==void 0&&(Ne=Q.ref,Ae=we.current),Q.key!==void 0&&(be=""+Q.key),O.type&&O.type.defaultProps)var Oe=O.type.defaultProps;for(Be in Q)ve.call(Q,Be)&&!R.hasOwnProperty(Be)&&(_e[Be]=Q[Be]===void 0&&Oe!==void 0?Oe[Be]:Q[Be])}var Be=arguments.length-2;if(Be===1)_e.children=he;else if(1<Be){Oe=Array(Be);for(var ot=0;ot<Be;ot++)Oe[ot]=arguments[ot+2];_e.children=Oe}return{$$typeof:n,type:O.type,key:be,ref:Ne,props:_e,_owner:Ae}},Me.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},Me.createElement=S,Me.createFactory=function(O){var Q=S.bind(null,O);return Q.type=O,Q},Me.createRef=function(){return{current:null}},Me.forwardRef=function(O){return{$$typeof:f,render:O}},Me.isValidElement=b,Me.lazy=function(O){return{$$typeof:_,_payload:{_status:-1,_result:O},_init:Ve}},Me.memo=function(O,Q){return{$$typeof:y,type:O,compare:Q===void 0?null:Q}},Me.startTransition=function(O){var Q=q.transition;q.transition={};try{O()}finally{q.transition=Q}},Me.unstable_act=se,Me.useCallback=function(O,Q){return je.current.useCallback(O,Q)},Me.useContext=function(O){return je.current.useContext(O)},Me.useDebugValue=function(){},Me.useDeferredValue=function(O){return je.current.useDeferredValue(O)},Me.useEffect=function(O,Q){return je.current.useEffect(O,Q)},Me.useId=function(){return je.current.useId()},Me.useImperativeHandle=function(O,Q,he){return je.current.useImperativeHandle(O,Q,he)},Me.useInsertionEffect=function(O,Q){return je.current.useInsertionEffect(O,Q)},Me.useLayoutEffect=function(O,Q){return je.current.useLayoutEffect(O,Q)},Me.useMemo=function(O,Q){return je.current.useMemo(O,Q)},Me.useReducer=function(O,Q,he){return je.current.useReducer(O,Q,he)},Me.useRef=function(O){return je.current.useRef(O)},Me.useState=function(O){return je.current.useState(O)},Me.useSyncExternalStore=function(O,Q,he){return je.current.useSyncExternalStore(O,Q,he)},Me.useTransition=function(){return je.current.useTransition()},Me.version="18.3.1",Me}var xy;function cp(){return xy||(xy=1,sf.exports=aS()),sf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var by;function lS(){if(by)return ul;by=1;var n=cp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,m,y){var _,E={},I=null,D=null;y!==void 0&&(I=""+y),m.key!==void 0&&(I=""+m.key),m.ref!==void 0&&(D=m.ref);for(_ in m)i.call(m,_)&&!l.hasOwnProperty(_)&&(E[_]=m[_]);if(f&&f.defaultProps)for(_ in m=f.defaultProps,m)E[_]===void 0&&(E[_]=m[_]);return{$$typeof:e,type:f,key:I,ref:D,props:E,_owner:o.current}}return ul.Fragment=t,ul.jsx=c,ul.jsxs=c,ul}var Ny;function uS(){return Ny||(Ny=1,rf.exports=lS()),rf.exports}var G=uS(),lc={},of={exports:{}},un={},af={exports:{}},lf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dy;function cS(){return Dy||(Dy=1,(function(n){function e(q,ye){var se=q.length;q.push(ye);e:for(;0<se;){var O=se-1>>>1,Q=q[O];if(0<o(Q,ye))q[O]=ye,q[se]=Q,se=O;else break e}}function t(q){return q.length===0?null:q[0]}function i(q){if(q.length===0)return null;var ye=q[0],se=q.pop();if(se!==ye){q[0]=se;e:for(var O=0,Q=q.length,he=Q>>>1;O<he;){var _e=2*(O+1)-1,be=q[_e],Ne=_e+1,Ae=q[Ne];if(0>o(be,se))Ne<Q&&0>o(Ae,be)?(q[O]=Ae,q[Ne]=se,O=Ne):(q[O]=be,q[_e]=se,O=_e);else if(Ne<Q&&0>o(Ae,se))q[O]=Ae,q[Ne]=se,O=Ne;else break e}}return ye}function o(q,ye){var se=q.sortIndex-ye.sortIndex;return se!==0?se:q.id-ye.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();n.unstable_now=function(){return c.now()-f}}var m=[],y=[],_=1,E=null,I=3,D=!1,W=!1,M=!1,z=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,ne=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ie(q){for(var ye=t(y);ye!==null;){if(ye.callback===null)i(y);else if(ye.startTime<=q)i(y),ye.sortIndex=ye.expirationTime,e(m,ye);else break;ye=t(y)}}function ue(q){if(M=!1,ie(q),!W)if(t(m)!==null)W=!0,Ve(ve);else{var ye=t(y);ye!==null&&je(ue,ye.startTime-q)}}function ve(q,ye){W=!1,M&&(M=!1,Z(S),S=-1),D=!0;var se=I;try{for(ie(ye),E=t(m);E!==null&&(!(E.expirationTime>ye)||q&&!x());){var O=E.callback;if(typeof O=="function"){E.callback=null,I=E.priorityLevel;var Q=O(E.expirationTime<=ye);ye=n.unstable_now(),typeof Q=="function"?E.callback=Q:E===t(m)&&i(m),ie(ye)}else i(m);E=t(m)}if(E!==null)var he=!0;else{var _e=t(y);_e!==null&&je(ue,_e.startTime-ye),he=!1}return he}finally{E=null,I=se,D=!1}}var we=!1,R=null,S=-1,C=5,b=-1;function x(){return!(n.unstable_now()-b<C)}function V(){if(R!==null){var q=n.unstable_now();b=q;var ye=!0;try{ye=R(!0,q)}finally{ye?k():(we=!1,R=null)}}else we=!1}var k;if(typeof ne=="function")k=function(){ne(V)};else if(typeof MessageChannel<"u"){var He=new MessageChannel,Ye=He.port2;He.port1.onmessage=V,k=function(){Ye.postMessage(null)}}else k=function(){z(V,0)};function Ve(q){R=q,we||(we=!0,k())}function je(q,ye){S=z(function(){q(n.unstable_now())},ye)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(q){q.callback=null},n.unstable_continueExecution=function(){W||D||(W=!0,Ve(ve))},n.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<q?Math.floor(1e3/q):5},n.unstable_getCurrentPriorityLevel=function(){return I},n.unstable_getFirstCallbackNode=function(){return t(m)},n.unstable_next=function(q){switch(I){case 1:case 2:case 3:var ye=3;break;default:ye=I}var se=I;I=ye;try{return q()}finally{I=se}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(q,ye){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var se=I;I=q;try{return ye()}finally{I=se}},n.unstable_scheduleCallback=function(q,ye,se){var O=n.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?O+se:O):se=O,q){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=se+Q,q={id:_++,callback:ye,priorityLevel:q,startTime:se,expirationTime:Q,sortIndex:-1},se>O?(q.sortIndex=se,e(y,q),t(m)===null&&q===t(y)&&(M?(Z(S),S=-1):M=!0,je(ue,se-O))):(q.sortIndex=Q,e(m,q),W||D||(W=!0,Ve(ve))),q},n.unstable_shouldYield=x,n.unstable_wrapCallback=function(q){var ye=I;return function(){var se=I;I=ye;try{return q.apply(this,arguments)}finally{I=se}}}})(lf)),lf}var Vy;function hS(){return Vy||(Vy=1,af.exports=cS()),af.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oy;function dS(){if(Oy)return un;Oy=1;var n=cp(),e=hS();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},E={};function I(r){return m.call(E,r)?!0:m.call(_,r)?!1:y.test(r)?E[r]=!0:(_[r]=!0,!1)}function D(r,s,a,h){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function W(r,s,a,h){if(s===null||typeof s>"u"||D(r,s,a,h))return!0;if(h)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function M(r,s,a,h,d,p,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=p,this.removeEmptyString=w}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){z[r]=new M(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];z[s]=new M(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){z[r]=new M(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){z[r]=new M(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){z[r]=new M(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){z[r]=new M(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){z[r]=new M(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){z[r]=new M(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){z[r]=new M(r,5,!1,r.toLowerCase(),null,!1,!1)});var Z=/[\-:]([a-z])/g;function ne(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(Z,ne);z[s]=new M(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(Z,ne);z[s]=new M(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(Z,ne);z[s]=new M(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){z[r]=new M(r,1,!1,r.toLowerCase(),null,!1,!1)}),z.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){z[r]=new M(r,1,!1,r.toLowerCase(),null,!0,!0)});function ie(r,s,a,h){var d=z.hasOwnProperty(s)?z[s]:null;(d!==null?d.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(W(s,a,d,h)&&(a=null),h||d===null?I(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):d.mustUseProperty?r[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,h=d.attributeNamespace,a===null?r.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,h?r.setAttributeNS(h,s,a):r.setAttribute(s,a))))}var ue=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ve=Symbol.for("react.element"),we=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),x=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),He=Symbol.for("react.suspense_list"),Ye=Symbol.for("react.memo"),Ve=Symbol.for("react.lazy"),je=Symbol.for("react.offscreen"),q=Symbol.iterator;function ye(r){return r===null||typeof r!="object"?null:(r=q&&r[q]||r["@@iterator"],typeof r=="function"?r:null)}var se=Object.assign,O;function Q(r){if(O===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);O=s&&s[1]||""}return`
`+O+r}var he=!1;function _e(r,s){if(!r||he)return"";he=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(B){var h=B}Reflect.construct(r,[],s)}else{try{s.call()}catch(B){h=B}r.call(s.prototype)}else{try{throw Error()}catch(B){h=B}r()}}catch(B){if(B&&h&&typeof B.stack=="string"){for(var d=B.stack.split(`
`),p=h.stack.split(`
`),w=d.length-1,A=p.length-1;1<=w&&0<=A&&d[w]!==p[A];)A--;for(;1<=w&&0<=A;w--,A--)if(d[w]!==p[A]){if(w!==1||A!==1)do if(w--,A--,0>A||d[w]!==p[A]){var P=`
`+d[w].replace(" at new "," at ");return r.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",r.displayName)),P}while(1<=w&&0<=A);break}}}finally{he=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?Q(r):""}function be(r){switch(r.tag){case 5:return Q(r.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return r=_e(r.type,!1),r;case 11:return r=_e(r.type.render,!1),r;case 1:return r=_e(r.type,!0),r;default:return""}}function Ne(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case R:return"Fragment";case we:return"Portal";case C:return"Profiler";case S:return"StrictMode";case k:return"Suspense";case He:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case x:return(r.displayName||"Context")+".Consumer";case b:return(r._context.displayName||"Context")+".Provider";case V:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Ye:return s=r.displayName||null,s!==null?s:Ne(r.type)||"Memo";case Ve:s=r._payload,r=r._init;try{return Ne(r(s))}catch{}}return null}function Ae(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(s);case 8:return s===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Oe(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Be(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function ot(r){var s=Be(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),h=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return d.call(this)},set:function(w){h=""+w,p.call(this,w)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return h},setValue:function(w){h=""+w},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function oe(r){r._valueTracker||(r._valueTracker=ot(r))}function Ge(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),h="";return r&&(h=Be(r)?r.checked?"true":"false":r.value),r=h,r!==a?(s.setValue(r),!0):!1}function Jt(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Ks(r,s){var a=s.checked;return se({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Gl(r,s){var a=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;a=Oe(s.value!=null?s.value:a),r._wrapperState={initialChecked:h,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Qs(r,s){s=s.checked,s!=null&&ie(r,"checked",s,!1)}function is(r,s){Qs(r,s);var a=Oe(s.value),h=s.type;if(a!=null)h==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(h==="submit"||h==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?_t(r,s.type,a):s.hasOwnProperty("defaultValue")&&_t(r,s.type,Oe(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function ga(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function _t(r,s,a){(s!=="number"||Jt(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var pt=Array.isArray;function Vn(r,s,a,h){if(r=r.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=s.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&h&&(r[a].defaultSelected=!0)}else{for(a=""+Oe(a),s=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,h&&(r[d].defaultSelected=!0);return}s!==null||r[d].disabled||(s=r[d])}s!==null&&(s.selected=!0)}}function ya(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function va(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(pt(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:Oe(a)}}function Kl(r,s){var a=Oe(s.value),h=Oe(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),h!=null&&(r.defaultValue=""+h)}function ei(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function _a(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ys(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?_a(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var ti,Ql=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,h,d){MSApp.execUnsafeLocalFunction(function(){return r(s,a,h,d)})}:r})(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(ti=ti||document.createElement("div"),ti.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=ti.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function ss(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var ni={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yl=["Webkit","ms","Moz","O"];Object.keys(ni).forEach(function(r){Yl.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),ni[s]=ni[r]})});function ri(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||ni.hasOwnProperty(r)&&ni[r]?(""+s).trim():s+"px"}function Js(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var h=a.indexOf("--")===0,d=ri(a,s[a],h);a==="float"&&(a="cssFloat"),h?r.setProperty(a,d):r[a]=d}}var wa=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function On(r,s){if(s){if(wa[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Xs(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ii=null;function Zs(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Sr=null,Ar=null,ht=null;function Ea(r){if(r=Ka(r)){if(typeof Sr!="function")throw Error(t(280));var s=r.stateNode;s&&(s=Iu(s),Sr(r.stateNode,r.type,s))}}function si(r){Ar?ht?ht.push(r):ht=[r]:Ar=r}function oi(){if(Ar){var r=Ar,s=ht;if(ht=Ar=null,Ea(r),s)for(r=0;r<s.length;r++)Ea(s[r])}}function Jl(r,s){return r(s)}function Xl(){}var Jn=!1;function Zl(r,s,a){if(Jn)return r(s,a);Jn=!0;try{return Jl(r,s,a)}finally{Jn=!1,(Ar!==null||ht!==null)&&(Xl(),oi())}}function os(r,s){var a=r.stateNode;if(a===null)return null;var h=Iu(a);if(h===null)return null;a=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(r=r.type,h=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!h;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var ai=!1;if(f)try{var li={};Object.defineProperty(li,"passive",{get:function(){ai=!0}}),window.addEventListener("test",li,li),window.removeEventListener("test",li,li)}catch{ai=!1}function eu(r,s,a,h,d,p,w,A,P){var B=Array.prototype.slice.call(arguments,3);try{s.apply(a,B)}catch(J){this.onError(J)}}var Rr=!1,Xn=null,eo=!1,An=null,tu={onError:function(r){Rr=!0,Xn=r}};function nu(r,s,a,h,d,p,w,A,P){Rr=!1,Xn=null,eu.apply(tu,arguments)}function Ta(r,s,a,h,d,p,w,A,P){if(nu.apply(this,arguments),Rr){if(Rr){var B=Xn;Rr=!1,Xn=null}else throw Error(t(198));eo||(eo=!0,An=B)}}function Mn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function Ia(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function ru(r){if(Mn(r)!==r)throw Error(t(188))}function iu(r){var s=r.alternate;if(!s){if(s=Mn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,h=s;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(h=d.return,h!==null){a=h;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return ru(d),r;if(p===h)return ru(d),s;p=p.sibling}throw Error(t(188))}if(a.return!==h.return)a=d,h=p;else{for(var w=!1,A=d.child;A;){if(A===a){w=!0,a=d,h=p;break}if(A===h){w=!0,h=d,a=p;break}A=A.sibling}if(!w){for(A=p.child;A;){if(A===a){w=!0,a=p,h=d;break}if(A===h){w=!0,h=p,a=d;break}A=A.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==h)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function su(r){return r=iu(r),r!==null?as(r):null}function as(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=as(r);if(s!==null)return s;r=r.sibling}return null}var Sa=e.unstable_scheduleCallback,to=e.unstable_cancelCallback,ls=e.unstable_shouldYield,Cr=e.unstable_requestPaint,tt=e.unstable_now,Vh=e.unstable_getCurrentPriorityLevel,no=e.unstable_ImmediatePriority,Aa=e.unstable_UserBlockingPriority,us=e.unstable_NormalPriority,Ra=e.unstable_LowPriority,ro=e.unstable_IdlePriority,cs=null,hn=null;function ou(r){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(cs,r,void 0,(r.current.flags&128)===128)}catch{}}var dn=Math.clz32?Math.clz32:hs,Zn=Math.log,Rn=Math.LN2;function hs(r){return r>>>=0,r===0?32:31-(Zn(r)/Rn|0)|0}var er=64,ui=4194304;function Qe(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function kr(r,s){var a=r.pendingLanes;if(a===0)return 0;var h=0,d=r.suspendedLanes,p=r.pingedLanes,w=a&268435455;if(w!==0){var A=w&~d;A!==0?h=Qe(A):(p&=w,p!==0&&(h=Qe(p)))}else w=a&~d,w!==0?h=Qe(w):p!==0&&(h=Qe(p));if(h===0)return 0;if(s!==0&&s!==h&&(s&d)===0&&(d=h&-h,p=s&-s,d>=p||d===16&&(p&4194240)!==0))return s;if((h&4)!==0&&(h|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=h;0<s;)a=31-dn(s),d=1<<a,h|=r[a],s&=~d;return h}function ds(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fs(r,s){for(var a=r.suspendedLanes,h=r.pingedLanes,d=r.expirationTimes,p=r.pendingLanes;0<p;){var w=31-dn(p),A=1<<w,P=d[w];P===-1?((A&a)===0||(A&h)!==0)&&(d[w]=ds(A,s)):P<=s&&(r.expiredLanes|=A),p&=~A}}function Ca(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function ka(){var r=er;return er<<=1,(er&4194240)===0&&(er=64),r}function Pa(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function ps(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-dn(s),r[s]=a}function Oh(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var h=r.eventTimes;for(r=r.expirationTimes;0<a;){var d=31-dn(a),p=1<<d;s[d]=0,h[d]=-1,r[d]=-1,a&=~p}}function xa(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var h=31-dn(a),d=1<<h;d&s|r[h]&s&&(r[h]|=s),a&=~d}}var ze=0;function tr(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var ba,io,Na,Da,Va,nr=!1,so=[],rr=null,ir=null,Ot=null,ms=new Map,Pr=new Map,fn=[],au="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ci(r,s){switch(r){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":ms.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pr.delete(s.pointerId)}}function Ln(r,s,a,h,d,p){return r===null||r.nativeEvent!==p?(r={blockedOn:s,domEventName:a,eventSystemFlags:h,nativeEvent:p,targetContainers:[d]},s!==null&&(s=Ka(s),s!==null&&io(s)),r):(r.eventSystemFlags|=h,s=r.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),r)}function lu(r,s,a,h,d){switch(s){case"focusin":return rr=Ln(rr,r,s,a,h,d),!0;case"dragenter":return ir=Ln(ir,r,s,a,h,d),!0;case"mouseover":return Ot=Ln(Ot,r,s,a,h,d),!0;case"pointerover":var p=d.pointerId;return ms.set(p,Ln(ms.get(p)||null,r,s,a,h,d)),!0;case"gotpointercapture":return p=d.pointerId,Pr.set(p,Ln(Pr.get(p)||null,r,s,a,h,d)),!0}return!1}function oo(r){var s=_s(r.target);if(s!==null){var a=Mn(s);if(a!==null){if(s=a.tag,s===13){if(s=Ia(a),s!==null){r.blockedOn=s,Va(r.priority,function(){Na(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Ze(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=ao(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var h=new a.constructor(a.type,a);ii=h,a.target.dispatchEvent(h),ii=null}else return s=Ka(a),s!==null&&io(s),r.blockedOn=a,!1;s.shift()}return!0}function uu(r,s,a){Ze(r)&&a.delete(s)}function Mh(){nr=!1,rr!==null&&Ze(rr)&&(rr=null),ir!==null&&Ze(ir)&&(ir=null),Ot!==null&&Ze(Ot)&&(Ot=null),ms.forEach(uu),Pr.forEach(uu)}function hi(r,s){r.blockedOn===s&&(r.blockedOn=null,nr||(nr=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Mh)))}function di(r){function s(d){return hi(d,r)}if(0<so.length){hi(so[0],r);for(var a=1;a<so.length;a++){var h=so[a];h.blockedOn===r&&(h.blockedOn=null)}}for(rr!==null&&hi(rr,r),ir!==null&&hi(ir,r),Ot!==null&&hi(Ot,r),ms.forEach(s),Pr.forEach(s),a=0;a<fn.length;a++)h=fn[a],h.blockedOn===r&&(h.blockedOn=null);for(;0<fn.length&&(a=fn[0],a.blockedOn===null);)oo(a),a.blockedOn===null&&fn.shift()}var xr=ue.ReactCurrentBatchConfig,br=!0;function sr(r,s,a,h){var d=ze,p=xr.transition;xr.transition=null;try{ze=1,Oa(r,s,a,h)}finally{ze=d,xr.transition=p}}function cu(r,s,a,h){var d=ze,p=xr.transition;xr.transition=null;try{ze=4,Oa(r,s,a,h)}finally{ze=d,xr.transition=p}}function Oa(r,s,a,h){if(br){var d=ao(r,s,a,h);if(d===null)Gh(r,s,h,or,a),ci(r,h);else if(lu(d,r,s,a,h))h.stopPropagation();else if(ci(r,h),s&4&&-1<au.indexOf(r)){for(;d!==null;){var p=Ka(d);if(p!==null&&ba(p),p=ao(r,s,a,h),p===null&&Gh(r,s,h,or,a),p===d)break;d=p}d!==null&&h.stopPropagation()}else Gh(r,s,h,null,a)}}var or=null;function ao(r,s,a,h){if(or=null,r=Zs(h),r=_s(r),r!==null)if(s=Mn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=Ia(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return or=r,null}function lo(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vh()){case no:return 1;case Aa:return 4;case us:case Ra:return 16;case ro:return 536870912;default:return 16}default:return 16}}var pn=null,uo=null,Nr=null;function hu(){if(Nr)return Nr;var r,s=uo,a=s.length,h,d="value"in pn?pn.value:pn.textContent,p=d.length;for(r=0;r<a&&s[r]===d[r];r++);var w=a-r;for(h=1;h<=w&&s[a-h]===d[p-h];h++);return Nr=d.slice(r,1<h?1-h:void 0)}function gs(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function ar(){return!0}function Ma(){return!1}function $t(r){function s(a,h,d,p,w){this._reactName=a,this._targetInst=d,this.type=h,this.nativeEvent=p,this.target=w,this.currentTarget=null;for(var A in r)r.hasOwnProperty(A)&&(a=r[A],this[A]=a?a(p):p[A]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ar:Ma,this.isPropagationStopped=Ma,this}return se(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ar)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ar)},persist:function(){},isPersistent:ar}),s}var lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ys=$t(lr),fi=se({},lr,{view:0,detail:0}),co=$t(fi),ho,fo,mn,vs=se({},fi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xe,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==mn&&(mn&&r.type==="mousemove"?(ho=r.screenX-mn.screenX,fo=r.screenY-mn.screenY):fo=ho=0,mn=r),ho)},movementY:function(r){return"movementY"in r?r.movementY:fo}}),La=$t(vs),du=se({},vs,{dataTransfer:0}),fu=$t(du),po=se({},fi,{relatedTarget:0}),Mt=$t(po),pu=se({},lr,{animationName:0,elapsedTime:0,pseudoElement:0}),mu=$t(pu),pi=se({},lr,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),u=$t(pi),g=se({},lr,{data:0}),v=$t(g),T={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},U={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function te(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=$[r])?!!s[r]:!1}function xe(){return te}var mt=se({},fi,{key:function(r){if(r.key){var s=T[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=gs(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?U[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xe,charCode:function(r){return r.type==="keypress"?gs(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?gs(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),Je=$t(mt),wt=se({},vs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gn=$t(wt),Dr=se({},fi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xe}),ur=$t(Dr),cr=se({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),mo=$t(cr),Fa=se({},vs,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),e0=$t(Fa),t0=[9,13,27,32],Lh=f&&"CompositionEvent"in window,Ua=null;f&&"documentMode"in document&&(Ua=document.documentMode);var n0=f&&"TextEvent"in window&&!Ua,Em=f&&(!Lh||Ua&&8<Ua&&11>=Ua),Tm=" ",Im=!1;function Sm(r,s){switch(r){case"keyup":return t0.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Am(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var go=!1;function r0(r,s){switch(r){case"compositionend":return Am(s);case"keypress":return s.which!==32?null:(Im=!0,Tm);case"textInput":return r=s.data,r===Tm&&Im?null:r;default:return null}}function i0(r,s){if(go)return r==="compositionend"||!Lh&&Sm(r,s)?(r=hu(),Nr=uo=pn=null,go=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Em&&s.locale!=="ko"?null:s.data;default:return null}}var s0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rm(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!s0[r.type]:s==="textarea"}function Cm(r,s,a,h){si(h),s=wu(s,"onChange"),0<s.length&&(a=new ys("onChange","change",null,a,h),r.push({event:a,listeners:s}))}var ja=null,za=null;function o0(r){qm(r,0)}function gu(r){var s=Eo(r);if(Ge(s))return r}function a0(r,s){if(r==="change")return s}var km=!1;if(f){var Fh;if(f){var Uh="oninput"in document;if(!Uh){var Pm=document.createElement("div");Pm.setAttribute("oninput","return;"),Uh=typeof Pm.oninput=="function"}Fh=Uh}else Fh=!1;km=Fh&&(!document.documentMode||9<document.documentMode)}function xm(){ja&&(ja.detachEvent("onpropertychange",bm),za=ja=null)}function bm(r){if(r.propertyName==="value"&&gu(za)){var s=[];Cm(s,za,r,Zs(r)),Zl(o0,s)}}function l0(r,s,a){r==="focusin"?(xm(),ja=s,za=a,ja.attachEvent("onpropertychange",bm)):r==="focusout"&&xm()}function u0(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return gu(za)}function c0(r,s){if(r==="click")return gu(s)}function h0(r,s){if(r==="input"||r==="change")return gu(s)}function d0(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Fn=typeof Object.is=="function"?Object.is:d0;function Ba(r,s){if(Fn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),h=Object.keys(s);if(a.length!==h.length)return!1;for(h=0;h<a.length;h++){var d=a[h];if(!m.call(s,d)||!Fn(r[d],s[d]))return!1}return!0}function Nm(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Dm(r,s){var a=Nm(r);r=0;for(var h;a;){if(a.nodeType===3){if(h=r+a.textContent.length,r<=s&&h>=s)return{node:a,offset:s-r};r=h}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Nm(a)}}function Vm(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Vm(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Om(){for(var r=window,s=Jt();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=Jt(r.document)}return s}function jh(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function f0(r){var s=Om(),a=r.focusedElem,h=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&Vm(a.ownerDocument.documentElement,a)){if(h!==null&&jh(a)){if(s=h.start,r=h.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var d=a.textContent.length,p=Math.min(h.start,d);h=h.end===void 0?p:Math.min(h.end,d),!r.extend&&p>h&&(d=h,h=p,p=d),d=Dm(a,p);var w=Dm(a,h);d&&w&&(r.rangeCount!==1||r.anchorNode!==d.node||r.anchorOffset!==d.offset||r.focusNode!==w.node||r.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),r.removeAllRanges(),p>h?(r.addRange(s),r.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var p0=f&&"documentMode"in document&&11>=document.documentMode,yo=null,zh=null,$a=null,Bh=!1;function Mm(r,s,a){var h=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Bh||yo==null||yo!==Jt(h)||(h=yo,"selectionStart"in h&&jh(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),$a&&Ba($a,h)||($a=h,h=wu(zh,"onSelect"),0<h.length&&(s=new ys("onSelect","select",null,s,a),r.push({event:s,listeners:h}),s.target=yo)))}function yu(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var vo={animationend:yu("Animation","AnimationEnd"),animationiteration:yu("Animation","AnimationIteration"),animationstart:yu("Animation","AnimationStart"),transitionend:yu("Transition","TransitionEnd")},$h={},Lm={};f&&(Lm=document.createElement("div").style,"AnimationEvent"in window||(delete vo.animationend.animation,delete vo.animationiteration.animation,delete vo.animationstart.animation),"TransitionEvent"in window||delete vo.transitionend.transition);function vu(r){if($h[r])return $h[r];if(!vo[r])return r;var s=vo[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in Lm)return $h[r]=s[a];return r}var Fm=vu("animationend"),Um=vu("animationiteration"),jm=vu("animationstart"),zm=vu("transitionend"),Bm=new Map,$m="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mi(r,s){Bm.set(r,s),l(s,[r])}for(var Wh=0;Wh<$m.length;Wh++){var qh=$m[Wh],m0=qh.toLowerCase(),g0=qh[0].toUpperCase()+qh.slice(1);mi(m0,"on"+g0)}mi(Fm,"onAnimationEnd"),mi(Um,"onAnimationIteration"),mi(jm,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(zm,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),y0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wa));function Wm(r,s,a){var h=r.type||"unknown-event";r.currentTarget=a,Ta(h,s,void 0,r),r.currentTarget=null}function qm(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var h=r[a],d=h.event;h=h.listeners;e:{var p=void 0;if(s)for(var w=h.length-1;0<=w;w--){var A=h[w],P=A.instance,B=A.currentTarget;if(A=A.listener,P!==p&&d.isPropagationStopped())break e;Wm(d,A,B),p=P}else for(w=0;w<h.length;w++){if(A=h[w],P=A.instance,B=A.currentTarget,A=A.listener,P!==p&&d.isPropagationStopped())break e;Wm(d,A,B),p=P}}}if(eo)throw r=An,eo=!1,An=null,r}function nt(r,s){var a=s[Zh];a===void 0&&(a=s[Zh]=new Set);var h=r+"__bubble";a.has(h)||(Hm(s,r,2,!1),a.add(h))}function Hh(r,s,a){var h=0;s&&(h|=4),Hm(a,r,h,s)}var _u="_reactListening"+Math.random().toString(36).slice(2);function qa(r){if(!r[_u]){r[_u]=!0,i.forEach(function(a){a!=="selectionchange"&&(y0.has(a)||Hh(a,!1,r),Hh(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[_u]||(s[_u]=!0,Hh("selectionchange",!1,s))}}function Hm(r,s,a,h){switch(lo(s)){case 1:var d=sr;break;case 4:d=cu;break;default:d=Oa}a=d.bind(null,s,a,r),d=void 0,!ai||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),h?d!==void 0?r.addEventListener(s,a,{capture:!0,passive:d}):r.addEventListener(s,a,!0):d!==void 0?r.addEventListener(s,a,{passive:d}):r.addEventListener(s,a,!1)}function Gh(r,s,a,h,d){var p=h;if((s&1)===0&&(s&2)===0&&h!==null)e:for(;;){if(h===null)return;var w=h.tag;if(w===3||w===4){var A=h.stateNode.containerInfo;if(A===d||A.nodeType===8&&A.parentNode===d)break;if(w===4)for(w=h.return;w!==null;){var P=w.tag;if((P===3||P===4)&&(P=w.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;w=w.return}for(;A!==null;){if(w=_s(A),w===null)return;if(P=w.tag,P===5||P===6){h=p=w;continue e}A=A.parentNode}}h=h.return}Zl(function(){var B=p,J=Zs(a),X=[];e:{var Y=Bm.get(r);if(Y!==void 0){var ae=ys,de=r;switch(r){case"keypress":if(gs(a)===0)break e;case"keydown":case"keyup":ae=Je;break;case"focusin":de="focus",ae=Mt;break;case"focusout":de="blur",ae=Mt;break;case"beforeblur":case"afterblur":ae=Mt;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ae=La;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ae=fu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ae=ur;break;case Fm:case Um:case jm:ae=mu;break;case zm:ae=mo;break;case"scroll":ae=co;break;case"wheel":ae=e0;break;case"copy":case"cut":case"paste":ae=u;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ae=gn}var me=(s&4)!==0,gt=!me&&r==="scroll",F=me?Y!==null?Y+"Capture":null:Y;me=[];for(var N=B,j;N!==null;){j=N;var ee=j.stateNode;if(j.tag===5&&ee!==null&&(j=ee,F!==null&&(ee=os(N,F),ee!=null&&me.push(Ha(N,ee,j)))),gt)break;N=N.return}0<me.length&&(Y=new ae(Y,de,null,a,J),X.push({event:Y,listeners:me}))}}if((s&7)===0){e:{if(Y=r==="mouseover"||r==="pointerover",ae=r==="mouseout"||r==="pointerout",Y&&a!==ii&&(de=a.relatedTarget||a.fromElement)&&(_s(de)||de[Vr]))break e;if((ae||Y)&&(Y=J.window===J?J:(Y=J.ownerDocument)?Y.defaultView||Y.parentWindow:window,ae?(de=a.relatedTarget||a.toElement,ae=B,de=de?_s(de):null,de!==null&&(gt=Mn(de),de!==gt||de.tag!==5&&de.tag!==6)&&(de=null)):(ae=null,de=B),ae!==de)){if(me=La,ee="onMouseLeave",F="onMouseEnter",N="mouse",(r==="pointerout"||r==="pointerover")&&(me=gn,ee="onPointerLeave",F="onPointerEnter",N="pointer"),gt=ae==null?Y:Eo(ae),j=de==null?Y:Eo(de),Y=new me(ee,N+"leave",ae,a,J),Y.target=gt,Y.relatedTarget=j,ee=null,_s(J)===B&&(me=new me(F,N+"enter",de,a,J),me.target=j,me.relatedTarget=gt,ee=me),gt=ee,ae&&de)t:{for(me=ae,F=de,N=0,j=me;j;j=_o(j))N++;for(j=0,ee=F;ee;ee=_o(ee))j++;for(;0<N-j;)me=_o(me),N--;for(;0<j-N;)F=_o(F),j--;for(;N--;){if(me===F||F!==null&&me===F.alternate)break t;me=_o(me),F=_o(F)}me=null}else me=null;ae!==null&&Gm(X,Y,ae,me,!1),de!==null&&gt!==null&&Gm(X,gt,de,me,!0)}}e:{if(Y=B?Eo(B):window,ae=Y.nodeName&&Y.nodeName.toLowerCase(),ae==="select"||ae==="input"&&Y.type==="file")var ge=a0;else if(Rm(Y))if(km)ge=h0;else{ge=u0;var Ie=l0}else(ae=Y.nodeName)&&ae.toLowerCase()==="input"&&(Y.type==="checkbox"||Y.type==="radio")&&(ge=c0);if(ge&&(ge=ge(r,B))){Cm(X,ge,a,J);break e}Ie&&Ie(r,Y,B),r==="focusout"&&(Ie=Y._wrapperState)&&Ie.controlled&&Y.type==="number"&&_t(Y,"number",Y.value)}switch(Ie=B?Eo(B):window,r){case"focusin":(Rm(Ie)||Ie.contentEditable==="true")&&(yo=Ie,zh=B,$a=null);break;case"focusout":$a=zh=yo=null;break;case"mousedown":Bh=!0;break;case"contextmenu":case"mouseup":case"dragend":Bh=!1,Mm(X,a,J);break;case"selectionchange":if(p0)break;case"keydown":case"keyup":Mm(X,a,J)}var Se;if(Lh)e:{switch(r){case"compositionstart":var Ce="onCompositionStart";break e;case"compositionend":Ce="onCompositionEnd";break e;case"compositionupdate":Ce="onCompositionUpdate";break e}Ce=void 0}else go?Sm(r,a)&&(Ce="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(Ce="onCompositionStart");Ce&&(Em&&a.locale!=="ko"&&(go||Ce!=="onCompositionStart"?Ce==="onCompositionEnd"&&go&&(Se=hu()):(pn=J,uo="value"in pn?pn.value:pn.textContent,go=!0)),Ie=wu(B,Ce),0<Ie.length&&(Ce=new v(Ce,r,null,a,J),X.push({event:Ce,listeners:Ie}),Se?Ce.data=Se:(Se=Am(a),Se!==null&&(Ce.data=Se)))),(Se=n0?r0(r,a):i0(r,a))&&(B=wu(B,"onBeforeInput"),0<B.length&&(J=new v("onBeforeInput","beforeinput",null,a,J),X.push({event:J,listeners:B}),J.data=Se))}qm(X,s)})}function Ha(r,s,a){return{instance:r,listener:s,currentTarget:a}}function wu(r,s){for(var a=s+"Capture",h=[];r!==null;){var d=r,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=os(r,a),p!=null&&h.unshift(Ha(r,p,d)),p=os(r,s),p!=null&&h.push(Ha(r,p,d))),r=r.return}return h}function _o(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Gm(r,s,a,h,d){for(var p=s._reactName,w=[];a!==null&&a!==h;){var A=a,P=A.alternate,B=A.stateNode;if(P!==null&&P===h)break;A.tag===5&&B!==null&&(A=B,d?(P=os(a,p),P!=null&&w.unshift(Ha(a,P,A))):d||(P=os(a,p),P!=null&&w.push(Ha(a,P,A)))),a=a.return}w.length!==0&&r.push({event:s,listeners:w})}var v0=/\r\n?/g,_0=/\u0000|\uFFFD/g;function Km(r){return(typeof r=="string"?r:""+r).replace(v0,`
`).replace(_0,"")}function Eu(r,s,a){if(s=Km(s),Km(r)!==s&&a)throw Error(t(425))}function Tu(){}var Kh=null,Qh=null;function Yh(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Jh=typeof setTimeout=="function"?setTimeout:void 0,w0=typeof clearTimeout=="function"?clearTimeout:void 0,Qm=typeof Promise=="function"?Promise:void 0,E0=typeof queueMicrotask=="function"?queueMicrotask:typeof Qm<"u"?function(r){return Qm.resolve(null).then(r).catch(T0)}:Jh;function T0(r){setTimeout(function(){throw r})}function Xh(r,s){var a=s,h=0;do{var d=a.nextSibling;if(r.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(h===0){r.removeChild(d),di(s);return}h--}else a!=="$"&&a!=="$?"&&a!=="$!"||h++;a=d}while(a);di(s)}function gi(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Ym(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var wo=Math.random().toString(36).slice(2),hr="__reactFiber$"+wo,Ga="__reactProps$"+wo,Vr="__reactContainer$"+wo,Zh="__reactEvents$"+wo,I0="__reactListeners$"+wo,S0="__reactHandles$"+wo;function _s(r){var s=r[hr];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Vr]||a[hr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=Ym(r);r!==null;){if(a=r[hr])return a;r=Ym(r)}return s}r=a,a=r.parentNode}return null}function Ka(r){return r=r[hr]||r[Vr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function Eo(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function Iu(r){return r[Ga]||null}var ed=[],To=-1;function yi(r){return{current:r}}function rt(r){0>To||(r.current=ed[To],ed[To]=null,To--)}function et(r,s){To++,ed[To]=r.current,r.current=s}var vi={},Wt=yi(vi),rn=yi(!1),ws=vi;function Io(r,s){var a=r.type.contextTypes;if(!a)return vi;var h=r.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=s[p];return h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=d),d}function sn(r){return r=r.childContextTypes,r!=null}function Su(){rt(rn),rt(Wt)}function Jm(r,s,a){if(Wt.current!==vi)throw Error(t(168));et(Wt,s),et(rn,a)}function Xm(r,s,a){var h=r.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return a;h=h.getChildContext();for(var d in h)if(!(d in s))throw Error(t(108,Ae(r)||"Unknown",d));return se({},a,h)}function Au(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||vi,ws=Wt.current,et(Wt,r),et(rn,rn.current),!0}function Zm(r,s,a){var h=r.stateNode;if(!h)throw Error(t(169));a?(r=Xm(r,s,ws),h.__reactInternalMemoizedMergedChildContext=r,rt(rn),rt(Wt),et(Wt,r)):rt(rn),et(rn,a)}var Or=null,Ru=!1,td=!1;function eg(r){Or===null?Or=[r]:Or.push(r)}function A0(r){Ru=!0,eg(r)}function _i(){if(!td&&Or!==null){td=!0;var r=0,s=ze;try{var a=Or;for(ze=1;r<a.length;r++){var h=a[r];do h=h(!0);while(h!==null)}Or=null,Ru=!1}catch(d){throw Or!==null&&(Or=Or.slice(r+1)),Sa(no,_i),d}finally{ze=s,td=!1}}return null}var So=[],Ao=0,Cu=null,ku=0,Cn=[],kn=0,Es=null,Mr=1,Lr="";function Ts(r,s){So[Ao++]=ku,So[Ao++]=Cu,Cu=r,ku=s}function tg(r,s,a){Cn[kn++]=Mr,Cn[kn++]=Lr,Cn[kn++]=Es,Es=r;var h=Mr;r=Lr;var d=32-dn(h)-1;h&=~(1<<d),a+=1;var p=32-dn(s)+d;if(30<p){var w=d-d%5;p=(h&(1<<w)-1).toString(32),h>>=w,d-=w,Mr=1<<32-dn(s)+d|a<<d|h,Lr=p+r}else Mr=1<<p|a<<d|h,Lr=r}function nd(r){r.return!==null&&(Ts(r,1),tg(r,1,0))}function rd(r){for(;r===Cu;)Cu=So[--Ao],So[Ao]=null,ku=So[--Ao],So[Ao]=null;for(;r===Es;)Es=Cn[--kn],Cn[kn]=null,Lr=Cn[--kn],Cn[kn]=null,Mr=Cn[--kn],Cn[kn]=null}var yn=null,vn=null,st=!1,Un=null;function ng(r,s){var a=Nn(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function rg(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,yn=r,vn=gi(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,yn=r,vn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Es!==null?{id:Mr,overflow:Lr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=Nn(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,yn=r,vn=null,!0):!1;default:return!1}}function id(r){return(r.mode&1)!==0&&(r.flags&128)===0}function sd(r){if(st){var s=vn;if(s){var a=s;if(!rg(r,s)){if(id(r))throw Error(t(418));s=gi(a.nextSibling);var h=yn;s&&rg(r,s)?ng(h,a):(r.flags=r.flags&-4097|2,st=!1,yn=r)}}else{if(id(r))throw Error(t(418));r.flags=r.flags&-4097|2,st=!1,yn=r}}}function ig(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;yn=r}function Pu(r){if(r!==yn)return!1;if(!st)return ig(r),st=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Yh(r.type,r.memoizedProps)),s&&(s=vn)){if(id(r))throw sg(),Error(t(418));for(;s;)ng(r,s),s=gi(s.nextSibling)}if(ig(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){vn=gi(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}vn=null}}else vn=yn?gi(r.stateNode.nextSibling):null;return!0}function sg(){for(var r=vn;r;)r=gi(r.nextSibling)}function Ro(){vn=yn=null,st=!1}function od(r){Un===null?Un=[r]:Un.push(r)}var R0=ue.ReactCurrentBatchConfig;function Qa(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var h=a.stateNode}if(!h)throw Error(t(147,r));var d=h,p=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===p?s.ref:(s=function(w){var A=d.refs;w===null?delete A[p]:A[p]=w},s._stringRef=p,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function xu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function og(r){var s=r._init;return s(r._payload)}function ag(r){function s(F,N){if(r){var j=F.deletions;j===null?(F.deletions=[N],F.flags|=16):j.push(N)}}function a(F,N){if(!r)return null;for(;N!==null;)s(F,N),N=N.sibling;return null}function h(F,N){for(F=new Map;N!==null;)N.key!==null?F.set(N.key,N):F.set(N.index,N),N=N.sibling;return F}function d(F,N){return F=Ci(F,N),F.index=0,F.sibling=null,F}function p(F,N,j){return F.index=j,r?(j=F.alternate,j!==null?(j=j.index,j<N?(F.flags|=2,N):j):(F.flags|=2,N)):(F.flags|=1048576,N)}function w(F){return r&&F.alternate===null&&(F.flags|=2),F}function A(F,N,j,ee){return N===null||N.tag!==6?(N=Jd(j,F.mode,ee),N.return=F,N):(N=d(N,j),N.return=F,N)}function P(F,N,j,ee){var ge=j.type;return ge===R?J(F,N,j.props.children,ee,j.key):N!==null&&(N.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===Ve&&og(ge)===N.type)?(ee=d(N,j.props),ee.ref=Qa(F,N,j),ee.return=F,ee):(ee=ec(j.type,j.key,j.props,null,F.mode,ee),ee.ref=Qa(F,N,j),ee.return=F,ee)}function B(F,N,j,ee){return N===null||N.tag!==4||N.stateNode.containerInfo!==j.containerInfo||N.stateNode.implementation!==j.implementation?(N=Xd(j,F.mode,ee),N.return=F,N):(N=d(N,j.children||[]),N.return=F,N)}function J(F,N,j,ee,ge){return N===null||N.tag!==7?(N=xs(j,F.mode,ee,ge),N.return=F,N):(N=d(N,j),N.return=F,N)}function X(F,N,j){if(typeof N=="string"&&N!==""||typeof N=="number")return N=Jd(""+N,F.mode,j),N.return=F,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case ve:return j=ec(N.type,N.key,N.props,null,F.mode,j),j.ref=Qa(F,null,N),j.return=F,j;case we:return N=Xd(N,F.mode,j),N.return=F,N;case Ve:var ee=N._init;return X(F,ee(N._payload),j)}if(pt(N)||ye(N))return N=xs(N,F.mode,j,null),N.return=F,N;xu(F,N)}return null}function Y(F,N,j,ee){var ge=N!==null?N.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return ge!==null?null:A(F,N,""+j,ee);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case ve:return j.key===ge?P(F,N,j,ee):null;case we:return j.key===ge?B(F,N,j,ee):null;case Ve:return ge=j._init,Y(F,N,ge(j._payload),ee)}if(pt(j)||ye(j))return ge!==null?null:J(F,N,j,ee,null);xu(F,j)}return null}function ae(F,N,j,ee,ge){if(typeof ee=="string"&&ee!==""||typeof ee=="number")return F=F.get(j)||null,A(N,F,""+ee,ge);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case ve:return F=F.get(ee.key===null?j:ee.key)||null,P(N,F,ee,ge);case we:return F=F.get(ee.key===null?j:ee.key)||null,B(N,F,ee,ge);case Ve:var Ie=ee._init;return ae(F,N,j,Ie(ee._payload),ge)}if(pt(ee)||ye(ee))return F=F.get(j)||null,J(N,F,ee,ge,null);xu(N,ee)}return null}function de(F,N,j,ee){for(var ge=null,Ie=null,Se=N,Ce=N=0,bt=null;Se!==null&&Ce<j.length;Ce++){Se.index>Ce?(bt=Se,Se=null):bt=Se.sibling;var Ke=Y(F,Se,j[Ce],ee);if(Ke===null){Se===null&&(Se=bt);break}r&&Se&&Ke.alternate===null&&s(F,Se),N=p(Ke,N,Ce),Ie===null?ge=Ke:Ie.sibling=Ke,Ie=Ke,Se=bt}if(Ce===j.length)return a(F,Se),st&&Ts(F,Ce),ge;if(Se===null){for(;Ce<j.length;Ce++)Se=X(F,j[Ce],ee),Se!==null&&(N=p(Se,N,Ce),Ie===null?ge=Se:Ie.sibling=Se,Ie=Se);return st&&Ts(F,Ce),ge}for(Se=h(F,Se);Ce<j.length;Ce++)bt=ae(Se,F,Ce,j[Ce],ee),bt!==null&&(r&&bt.alternate!==null&&Se.delete(bt.key===null?Ce:bt.key),N=p(bt,N,Ce),Ie===null?ge=bt:Ie.sibling=bt,Ie=bt);return r&&Se.forEach(function(ki){return s(F,ki)}),st&&Ts(F,Ce),ge}function me(F,N,j,ee){var ge=ye(j);if(typeof ge!="function")throw Error(t(150));if(j=ge.call(j),j==null)throw Error(t(151));for(var Ie=ge=null,Se=N,Ce=N=0,bt=null,Ke=j.next();Se!==null&&!Ke.done;Ce++,Ke=j.next()){Se.index>Ce?(bt=Se,Se=null):bt=Se.sibling;var ki=Y(F,Se,Ke.value,ee);if(ki===null){Se===null&&(Se=bt);break}r&&Se&&ki.alternate===null&&s(F,Se),N=p(ki,N,Ce),Ie===null?ge=ki:Ie.sibling=ki,Ie=ki,Se=bt}if(Ke.done)return a(F,Se),st&&Ts(F,Ce),ge;if(Se===null){for(;!Ke.done;Ce++,Ke=j.next())Ke=X(F,Ke.value,ee),Ke!==null&&(N=p(Ke,N,Ce),Ie===null?ge=Ke:Ie.sibling=Ke,Ie=Ke);return st&&Ts(F,Ce),ge}for(Se=h(F,Se);!Ke.done;Ce++,Ke=j.next())Ke=ae(Se,F,Ce,Ke.value,ee),Ke!==null&&(r&&Ke.alternate!==null&&Se.delete(Ke.key===null?Ce:Ke.key),N=p(Ke,N,Ce),Ie===null?ge=Ke:Ie.sibling=Ke,Ie=Ke);return r&&Se.forEach(function(sS){return s(F,sS)}),st&&Ts(F,Ce),ge}function gt(F,N,j,ee){if(typeof j=="object"&&j!==null&&j.type===R&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case ve:e:{for(var ge=j.key,Ie=N;Ie!==null;){if(Ie.key===ge){if(ge=j.type,ge===R){if(Ie.tag===7){a(F,Ie.sibling),N=d(Ie,j.props.children),N.return=F,F=N;break e}}else if(Ie.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===Ve&&og(ge)===Ie.type){a(F,Ie.sibling),N=d(Ie,j.props),N.ref=Qa(F,Ie,j),N.return=F,F=N;break e}a(F,Ie);break}else s(F,Ie);Ie=Ie.sibling}j.type===R?(N=xs(j.props.children,F.mode,ee,j.key),N.return=F,F=N):(ee=ec(j.type,j.key,j.props,null,F.mode,ee),ee.ref=Qa(F,N,j),ee.return=F,F=ee)}return w(F);case we:e:{for(Ie=j.key;N!==null;){if(N.key===Ie)if(N.tag===4&&N.stateNode.containerInfo===j.containerInfo&&N.stateNode.implementation===j.implementation){a(F,N.sibling),N=d(N,j.children||[]),N.return=F,F=N;break e}else{a(F,N);break}else s(F,N);N=N.sibling}N=Xd(j,F.mode,ee),N.return=F,F=N}return w(F);case Ve:return Ie=j._init,gt(F,N,Ie(j._payload),ee)}if(pt(j))return de(F,N,j,ee);if(ye(j))return me(F,N,j,ee);xu(F,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,N!==null&&N.tag===6?(a(F,N.sibling),N=d(N,j),N.return=F,F=N):(a(F,N),N=Jd(j,F.mode,ee),N.return=F,F=N),w(F)):a(F,N)}return gt}var Co=ag(!0),lg=ag(!1),bu=yi(null),Nu=null,ko=null,ad=null;function ld(){ad=ko=Nu=null}function ud(r){var s=bu.current;rt(bu),r._currentValue=s}function cd(r,s,a){for(;r!==null;){var h=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),r===a)break;r=r.return}}function Po(r,s){Nu=r,ad=ko=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(on=!0),r.firstContext=null)}function Pn(r){var s=r._currentValue;if(ad!==r)if(r={context:r,memoizedValue:s,next:null},ko===null){if(Nu===null)throw Error(t(308));ko=r,Nu.dependencies={lanes:0,firstContext:r}}else ko=ko.next=r;return s}var Is=null;function hd(r){Is===null?Is=[r]:Is.push(r)}function ug(r,s,a,h){var d=s.interleaved;return d===null?(a.next=a,hd(s)):(a.next=d.next,d.next=a),s.interleaved=a,Fr(r,h)}function Fr(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var wi=!1;function dd(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cg(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Ur(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function Ei(r,s,a){var h=r.updateQueue;if(h===null)return null;if(h=h.shared,(qe&2)!==0){var d=h.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),h.pending=s,Fr(r,a)}return d=h.interleaved,d===null?(s.next=s,hd(h)):(s.next=d.next,d.next=s),h.interleaved=s,Fr(r,a)}function Du(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var h=s.lanes;h&=r.pendingLanes,a|=h,s.lanes=a,xa(r,a)}}function hg(r,s){var a=r.updateQueue,h=r.alternate;if(h!==null&&(h=h.updateQueue,a===h)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=w:p=p.next=w,a=a.next}while(a!==null);p===null?d=p=s:p=p.next=s}else d=p=s;a={baseState:h.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:h.shared,effects:h.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function Vu(r,s,a,h){var d=r.updateQueue;wi=!1;var p=d.firstBaseUpdate,w=d.lastBaseUpdate,A=d.shared.pending;if(A!==null){d.shared.pending=null;var P=A,B=P.next;P.next=null,w===null?p=B:w.next=B,w=P;var J=r.alternate;J!==null&&(J=J.updateQueue,A=J.lastBaseUpdate,A!==w&&(A===null?J.firstBaseUpdate=B:A.next=B,J.lastBaseUpdate=P))}if(p!==null){var X=d.baseState;w=0,J=B=P=null,A=p;do{var Y=A.lane,ae=A.eventTime;if((h&Y)===Y){J!==null&&(J=J.next={eventTime:ae,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var de=r,me=A;switch(Y=s,ae=a,me.tag){case 1:if(de=me.payload,typeof de=="function"){X=de.call(ae,X,Y);break e}X=de;break e;case 3:de.flags=de.flags&-65537|128;case 0:if(de=me.payload,Y=typeof de=="function"?de.call(ae,X,Y):de,Y==null)break e;X=se({},X,Y);break e;case 2:wi=!0}}A.callback!==null&&A.lane!==0&&(r.flags|=64,Y=d.effects,Y===null?d.effects=[A]:Y.push(A))}else ae={eventTime:ae,lane:Y,tag:A.tag,payload:A.payload,callback:A.callback,next:null},J===null?(B=J=ae,P=X):J=J.next=ae,w|=Y;if(A=A.next,A===null){if(A=d.shared.pending,A===null)break;Y=A,A=Y.next,Y.next=null,d.lastBaseUpdate=Y,d.shared.pending=null}}while(!0);if(J===null&&(P=X),d.baseState=P,d.firstBaseUpdate=B,d.lastBaseUpdate=J,s=d.shared.interleaved,s!==null){d=s;do w|=d.lane,d=d.next;while(d!==s)}else p===null&&(d.shared.lanes=0);Rs|=w,r.lanes=w,r.memoizedState=X}}function dg(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var h=r[s],d=h.callback;if(d!==null){if(h.callback=null,h=a,typeof d!="function")throw Error(t(191,d));d.call(h)}}}var Ya={},dr=yi(Ya),Ja=yi(Ya),Xa=yi(Ya);function Ss(r){if(r===Ya)throw Error(t(174));return r}function fd(r,s){switch(et(Xa,s),et(Ja,r),et(dr,Ya),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Ys(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=Ys(s,r)}rt(dr),et(dr,s)}function xo(){rt(dr),rt(Ja),rt(Xa)}function fg(r){Ss(Xa.current);var s=Ss(dr.current),a=Ys(s,r.type);s!==a&&(et(Ja,r),et(dr,a))}function pd(r){Ja.current===r&&(rt(dr),rt(Ja))}var at=yi(0);function Ou(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var md=[];function gd(){for(var r=0;r<md.length;r++)md[r]._workInProgressVersionPrimary=null;md.length=0}var Mu=ue.ReactCurrentDispatcher,yd=ue.ReactCurrentBatchConfig,As=0,lt=null,At=null,Pt=null,Lu=!1,Za=!1,el=0,C0=0;function qt(){throw Error(t(321))}function vd(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!Fn(r[a],s[a]))return!1;return!0}function _d(r,s,a,h,d,p){if(As=p,lt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Mu.current=r===null||r.memoizedState===null?b0:N0,r=a(h,d),Za){p=0;do{if(Za=!1,el=0,25<=p)throw Error(t(301));p+=1,Pt=At=null,s.updateQueue=null,Mu.current=D0,r=a(h,d)}while(Za)}if(Mu.current=ju,s=At!==null&&At.next!==null,As=0,Pt=At=lt=null,Lu=!1,s)throw Error(t(300));return r}function wd(){var r=el!==0;return el=0,r}function fr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?lt.memoizedState=Pt=r:Pt=Pt.next=r,Pt}function xn(){if(At===null){var r=lt.alternate;r=r!==null?r.memoizedState:null}else r=At.next;var s=Pt===null?lt.memoizedState:Pt.next;if(s!==null)Pt=s,At=r;else{if(r===null)throw Error(t(310));At=r,r={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Pt===null?lt.memoizedState=Pt=r:Pt=Pt.next=r}return Pt}function tl(r,s){return typeof s=="function"?s(r):s}function Ed(r){var s=xn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var h=At,d=h.baseQueue,p=a.pending;if(p!==null){if(d!==null){var w=d.next;d.next=p.next,p.next=w}h.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,h=h.baseState;var A=w=null,P=null,B=p;do{var J=B.lane;if((As&J)===J)P!==null&&(P=P.next={lane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),h=B.hasEagerState?B.eagerState:r(h,B.action);else{var X={lane:J,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null};P===null?(A=P=X,w=h):P=P.next=X,lt.lanes|=J,Rs|=J}B=B.next}while(B!==null&&B!==p);P===null?w=h:P.next=A,Fn(h,s.memoizedState)||(on=!0),s.memoizedState=h,s.baseState=w,s.baseQueue=P,a.lastRenderedState=h}if(r=a.interleaved,r!==null){d=r;do p=d.lane,lt.lanes|=p,Rs|=p,d=d.next;while(d!==r)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Td(r){var s=xn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var h=a.dispatch,d=a.pending,p=s.memoizedState;if(d!==null){a.pending=null;var w=d=d.next;do p=r(p,w.action),w=w.next;while(w!==d);Fn(p,s.memoizedState)||(on=!0),s.memoizedState=p,s.baseQueue===null&&(s.baseState=p),a.lastRenderedState=p}return[p,h]}function pg(){}function mg(r,s){var a=lt,h=xn(),d=s(),p=!Fn(h.memoizedState,d);if(p&&(h.memoizedState=d,on=!0),h=h.queue,Id(vg.bind(null,a,h,r),[r]),h.getSnapshot!==s||p||Pt!==null&&Pt.memoizedState.tag&1){if(a.flags|=2048,nl(9,yg.bind(null,a,h,d,s),void 0,null),xt===null)throw Error(t(349));(As&30)!==0||gg(a,s,d)}return d}function gg(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=lt.updateQueue,s===null?(s={lastEffect:null,stores:null},lt.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function yg(r,s,a,h){s.value=a,s.getSnapshot=h,_g(s)&&wg(r)}function vg(r,s,a){return a(function(){_g(s)&&wg(r)})}function _g(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!Fn(r,a)}catch{return!0}}function wg(r){var s=Fr(r,1);s!==null&&$n(s,r,1,-1)}function Eg(r){var s=fr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:tl,lastRenderedState:r},s.queue=r,r=r.dispatch=x0.bind(null,lt,r),[s.memoizedState,r]}function nl(r,s,a,h){return r={tag:r,create:s,destroy:a,deps:h,next:null},s=lt.updateQueue,s===null?(s={lastEffect:null,stores:null},lt.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(h=a.next,a.next=r,r.next=h,s.lastEffect=r)),r}function Tg(){return xn().memoizedState}function Fu(r,s,a,h){var d=fr();lt.flags|=r,d.memoizedState=nl(1|s,a,void 0,h===void 0?null:h)}function Uu(r,s,a,h){var d=xn();h=h===void 0?null:h;var p=void 0;if(At!==null){var w=At.memoizedState;if(p=w.destroy,h!==null&&vd(h,w.deps)){d.memoizedState=nl(s,a,p,h);return}}lt.flags|=r,d.memoizedState=nl(1|s,a,p,h)}function Ig(r,s){return Fu(8390656,8,r,s)}function Id(r,s){return Uu(2048,8,r,s)}function Sg(r,s){return Uu(4,2,r,s)}function Ag(r,s){return Uu(4,4,r,s)}function Rg(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Cg(r,s,a){return a=a!=null?a.concat([r]):null,Uu(4,4,Rg.bind(null,s,r),a)}function Sd(){}function kg(r,s){var a=xn();s=s===void 0?null:s;var h=a.memoizedState;return h!==null&&s!==null&&vd(s,h[1])?h[0]:(a.memoizedState=[r,s],r)}function Pg(r,s){var a=xn();s=s===void 0?null:s;var h=a.memoizedState;return h!==null&&s!==null&&vd(s,h[1])?h[0]:(r=r(),a.memoizedState=[r,s],r)}function xg(r,s,a){return(As&21)===0?(r.baseState&&(r.baseState=!1,on=!0),r.memoizedState=a):(Fn(a,s)||(a=ka(),lt.lanes|=a,Rs|=a,r.baseState=!0),s)}function k0(r,s){var a=ze;ze=a!==0&&4>a?a:4,r(!0);var h=yd.transition;yd.transition={};try{r(!1),s()}finally{ze=a,yd.transition=h}}function bg(){return xn().memoizedState}function P0(r,s,a){var h=Ai(r);if(a={lane:h,action:a,hasEagerState:!1,eagerState:null,next:null},Ng(r))Dg(s,a);else if(a=ug(r,s,a,h),a!==null){var d=Zt();$n(a,r,h,d),Vg(a,s,h)}}function x0(r,s,a){var h=Ai(r),d={lane:h,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ng(r))Dg(s,d);else{var p=r.alternate;if(r.lanes===0&&(p===null||p.lanes===0)&&(p=s.lastRenderedReducer,p!==null))try{var w=s.lastRenderedState,A=p(w,a);if(d.hasEagerState=!0,d.eagerState=A,Fn(A,w)){var P=s.interleaved;P===null?(d.next=d,hd(s)):(d.next=P.next,P.next=d),s.interleaved=d;return}}catch{}finally{}a=ug(r,s,d,h),a!==null&&(d=Zt(),$n(a,r,h,d),Vg(a,s,h))}}function Ng(r){var s=r.alternate;return r===lt||s!==null&&s===lt}function Dg(r,s){Za=Lu=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function Vg(r,s,a){if((a&4194240)!==0){var h=s.lanes;h&=r.pendingLanes,a|=h,s.lanes=a,xa(r,a)}}var ju={readContext:Pn,useCallback:qt,useContext:qt,useEffect:qt,useImperativeHandle:qt,useInsertionEffect:qt,useLayoutEffect:qt,useMemo:qt,useReducer:qt,useRef:qt,useState:qt,useDebugValue:qt,useDeferredValue:qt,useTransition:qt,useMutableSource:qt,useSyncExternalStore:qt,useId:qt,unstable_isNewReconciler:!1},b0={readContext:Pn,useCallback:function(r,s){return fr().memoizedState=[r,s===void 0?null:s],r},useContext:Pn,useEffect:Ig,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,Fu(4194308,4,Rg.bind(null,s,r),a)},useLayoutEffect:function(r,s){return Fu(4194308,4,r,s)},useInsertionEffect:function(r,s){return Fu(4,2,r,s)},useMemo:function(r,s){var a=fr();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var h=fr();return s=a!==void 0?a(s):s,h.memoizedState=h.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},h.queue=r,r=r.dispatch=P0.bind(null,lt,r),[h.memoizedState,r]},useRef:function(r){var s=fr();return r={current:r},s.memoizedState=r},useState:Eg,useDebugValue:Sd,useDeferredValue:function(r){return fr().memoizedState=r},useTransition:function(){var r=Eg(!1),s=r[0];return r=k0.bind(null,r[1]),fr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var h=lt,d=fr();if(st){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),xt===null)throw Error(t(349));(As&30)!==0||gg(h,s,a)}d.memoizedState=a;var p={value:a,getSnapshot:s};return d.queue=p,Ig(vg.bind(null,h,p,r),[r]),h.flags|=2048,nl(9,yg.bind(null,h,p,a,s),void 0,null),a},useId:function(){var r=fr(),s=xt.identifierPrefix;if(st){var a=Lr,h=Mr;a=(h&~(1<<32-dn(h)-1)).toString(32)+a,s=":"+s+"R"+a,a=el++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=C0++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},N0={readContext:Pn,useCallback:kg,useContext:Pn,useEffect:Id,useImperativeHandle:Cg,useInsertionEffect:Sg,useLayoutEffect:Ag,useMemo:Pg,useReducer:Ed,useRef:Tg,useState:function(){return Ed(tl)},useDebugValue:Sd,useDeferredValue:function(r){var s=xn();return xg(s,At.memoizedState,r)},useTransition:function(){var r=Ed(tl)[0],s=xn().memoizedState;return[r,s]},useMutableSource:pg,useSyncExternalStore:mg,useId:bg,unstable_isNewReconciler:!1},D0={readContext:Pn,useCallback:kg,useContext:Pn,useEffect:Id,useImperativeHandle:Cg,useInsertionEffect:Sg,useLayoutEffect:Ag,useMemo:Pg,useReducer:Td,useRef:Tg,useState:function(){return Td(tl)},useDebugValue:Sd,useDeferredValue:function(r){var s=xn();return At===null?s.memoizedState=r:xg(s,At.memoizedState,r)},useTransition:function(){var r=Td(tl)[0],s=xn().memoizedState;return[r,s]},useMutableSource:pg,useSyncExternalStore:mg,useId:bg,unstable_isNewReconciler:!1};function jn(r,s){if(r&&r.defaultProps){s=se({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function Ad(r,s,a,h){s=r.memoizedState,a=a(h,s),a=a==null?s:se({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var zu={isMounted:function(r){return(r=r._reactInternals)?Mn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var h=Zt(),d=Ai(r),p=Ur(h,d);p.payload=s,a!=null&&(p.callback=a),s=Ei(r,p,d),s!==null&&($n(s,r,d,h),Du(s,r,d))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var h=Zt(),d=Ai(r),p=Ur(h,d);p.tag=1,p.payload=s,a!=null&&(p.callback=a),s=Ei(r,p,d),s!==null&&($n(s,r,d,h),Du(s,r,d))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Zt(),h=Ai(r),d=Ur(a,h);d.tag=2,s!=null&&(d.callback=s),s=Ei(r,d,h),s!==null&&($n(s,r,h,a),Du(s,r,h))}};function Og(r,s,a,h,d,p,w){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(h,p,w):s.prototype&&s.prototype.isPureReactComponent?!Ba(a,h)||!Ba(d,p):!0}function Mg(r,s,a){var h=!1,d=vi,p=s.contextType;return typeof p=="object"&&p!==null?p=Pn(p):(d=sn(s)?ws:Wt.current,h=s.contextTypes,p=(h=h!=null)?Io(r,d):vi),s=new s(a,p),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=zu,r.stateNode=s,s._reactInternals=r,h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=d,r.__reactInternalMemoizedMaskedChildContext=p),s}function Lg(r,s,a,h){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,h),s.state!==r&&zu.enqueueReplaceState(s,s.state,null)}function Rd(r,s,a,h){var d=r.stateNode;d.props=a,d.state=r.memoizedState,d.refs={},dd(r);var p=s.contextType;typeof p=="object"&&p!==null?d.context=Pn(p):(p=sn(s)?ws:Wt.current,d.context=Io(r,p)),d.state=r.memoizedState,p=s.getDerivedStateFromProps,typeof p=="function"&&(Ad(r,s,p,a),d.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&zu.enqueueReplaceState(d,d.state,null),Vu(r,a,d,h),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308)}function bo(r,s){try{var a="",h=s;do a+=be(h),h=h.return;while(h);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:r,source:s,stack:d,digest:null}}function Cd(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function kd(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var V0=typeof WeakMap=="function"?WeakMap:Map;function Fg(r,s,a){a=Ur(-1,a),a.tag=3,a.payload={element:null};var h=s.value;return a.callback=function(){Ku||(Ku=!0,$d=h),kd(r,s)},a}function Ug(r,s,a){a=Ur(-1,a),a.tag=3;var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var d=s.value;a.payload=function(){return h(d)},a.callback=function(){kd(r,s)}}var p=r.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){kd(r,s),typeof h!="function"&&(Ii===null?Ii=new Set([this]):Ii.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),a}function jg(r,s,a){var h=r.pingCache;if(h===null){h=r.pingCache=new V0;var d=new Set;h.set(s,d)}else d=h.get(s),d===void 0&&(d=new Set,h.set(s,d));d.has(a)||(d.add(a),r=K0.bind(null,r,s,a),s.then(r,r))}function zg(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function Bg(r,s,a,h,d){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Ur(-1,1),s.tag=2,Ei(a,s,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=d,r)}var O0=ue.ReactCurrentOwner,on=!1;function Xt(r,s,a,h){s.child=r===null?lg(s,null,a,h):Co(s,r.child,a,h)}function $g(r,s,a,h,d){a=a.render;var p=s.ref;return Po(s,d),h=_d(r,s,a,h,p,d),a=wd(),r!==null&&!on?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,jr(r,s,d)):(st&&a&&nd(s),s.flags|=1,Xt(r,s,h,d),s.child)}function Wg(r,s,a,h,d){if(r===null){var p=a.type;return typeof p=="function"&&!Yd(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=p,qg(r,s,p,h,d)):(r=ec(a.type,null,h,s,s.mode,d),r.ref=s.ref,r.return=s,s.child=r)}if(p=r.child,(r.lanes&d)===0){var w=p.memoizedProps;if(a=a.compare,a=a!==null?a:Ba,a(w,h)&&r.ref===s.ref)return jr(r,s,d)}return s.flags|=1,r=Ci(p,h),r.ref=s.ref,r.return=s,s.child=r}function qg(r,s,a,h,d){if(r!==null){var p=r.memoizedProps;if(Ba(p,h)&&r.ref===s.ref)if(on=!1,s.pendingProps=h=p,(r.lanes&d)!==0)(r.flags&131072)!==0&&(on=!0);else return s.lanes=r.lanes,jr(r,s,d)}return Pd(r,s,a,h,d)}function Hg(r,s,a){var h=s.pendingProps,d=h.children,p=r!==null?r.memoizedState:null;if(h.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},et(Do,_n),_n|=a;else{if((a&1073741824)===0)return r=p!==null?p.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,et(Do,_n),_n|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=p!==null?p.baseLanes:a,et(Do,_n),_n|=h}else p!==null?(h=p.baseLanes|a,s.memoizedState=null):h=a,et(Do,_n),_n|=h;return Xt(r,s,d,a),s.child}function Gg(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Pd(r,s,a,h,d){var p=sn(a)?ws:Wt.current;return p=Io(s,p),Po(s,d),a=_d(r,s,a,h,p,d),h=wd(),r!==null&&!on?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,jr(r,s,d)):(st&&h&&nd(s),s.flags|=1,Xt(r,s,a,d),s.child)}function Kg(r,s,a,h,d){if(sn(a)){var p=!0;Au(s)}else p=!1;if(Po(s,d),s.stateNode===null)$u(r,s),Mg(s,a,h),Rd(s,a,h,d),h=!0;else if(r===null){var w=s.stateNode,A=s.memoizedProps;w.props=A;var P=w.context,B=a.contextType;typeof B=="object"&&B!==null?B=Pn(B):(B=sn(a)?ws:Wt.current,B=Io(s,B));var J=a.getDerivedStateFromProps,X=typeof J=="function"||typeof w.getSnapshotBeforeUpdate=="function";X||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(A!==h||P!==B)&&Lg(s,w,h,B),wi=!1;var Y=s.memoizedState;w.state=Y,Vu(s,h,w,d),P=s.memoizedState,A!==h||Y!==P||rn.current||wi?(typeof J=="function"&&(Ad(s,a,J,h),P=s.memoizedState),(A=wi||Og(s,a,A,h,Y,P,B))?(X||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=P),w.props=h,w.state=P,w.context=B,h=A):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{w=s.stateNode,cg(r,s),A=s.memoizedProps,B=s.type===s.elementType?A:jn(s.type,A),w.props=B,X=s.pendingProps,Y=w.context,P=a.contextType,typeof P=="object"&&P!==null?P=Pn(P):(P=sn(a)?ws:Wt.current,P=Io(s,P));var ae=a.getDerivedStateFromProps;(J=typeof ae=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(A!==X||Y!==P)&&Lg(s,w,h,P),wi=!1,Y=s.memoizedState,w.state=Y,Vu(s,h,w,d);var de=s.memoizedState;A!==X||Y!==de||rn.current||wi?(typeof ae=="function"&&(Ad(s,a,ae,h),de=s.memoizedState),(B=wi||Og(s,a,B,h,Y,de,P)||!1)?(J||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(h,de,P),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(h,de,P)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=de),w.props=h,w.state=de,w.context=P,h=B):(typeof w.componentDidUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(s.flags|=1024),h=!1)}return xd(r,s,a,h,p,d)}function xd(r,s,a,h,d,p){Gg(r,s);var w=(s.flags&128)!==0;if(!h&&!w)return d&&Zm(s,a,!1),jr(r,s,p);h=s.stateNode,O0.current=s;var A=w&&typeof a.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,r!==null&&w?(s.child=Co(s,r.child,null,p),s.child=Co(s,null,A,p)):Xt(r,s,A,p),s.memoizedState=h.state,d&&Zm(s,a,!0),s.child}function Qg(r){var s=r.stateNode;s.pendingContext?Jm(r,s.pendingContext,s.pendingContext!==s.context):s.context&&Jm(r,s.context,!1),fd(r,s.containerInfo)}function Yg(r,s,a,h,d){return Ro(),od(d),s.flags|=256,Xt(r,s,a,h),s.child}var bd={dehydrated:null,treeContext:null,retryLane:0};function Nd(r){return{baseLanes:r,cachePool:null,transitions:null}}function Jg(r,s,a){var h=s.pendingProps,d=at.current,p=!1,w=(s.flags&128)!==0,A;if((A=w)||(A=r!==null&&r.memoizedState===null?!1:(d&2)!==0),A?(p=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(d|=1),et(at,d&1),r===null)return sd(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(w=h.children,r=h.fallback,p?(h=s.mode,p=s.child,w={mode:"hidden",children:w},(h&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=w):p=tc(w,h,0,null),r=xs(r,h,a,null),p.return=s,r.return=s,p.sibling=r,s.child=p,s.child.memoizedState=Nd(a),s.memoizedState=bd,r):Dd(s,w));if(d=r.memoizedState,d!==null&&(A=d.dehydrated,A!==null))return M0(r,s,w,h,A,d,a);if(p){p=h.fallback,w=s.mode,d=r.child,A=d.sibling;var P={mode:"hidden",children:h.children};return(w&1)===0&&s.child!==d?(h=s.child,h.childLanes=0,h.pendingProps=P,s.deletions=null):(h=Ci(d,P),h.subtreeFlags=d.subtreeFlags&14680064),A!==null?p=Ci(A,p):(p=xs(p,w,a,null),p.flags|=2),p.return=s,h.return=s,h.sibling=p,s.child=h,h=p,p=s.child,w=r.child.memoizedState,w=w===null?Nd(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},p.memoizedState=w,p.childLanes=r.childLanes&~a,s.memoizedState=bd,h}return p=r.child,r=p.sibling,h=Ci(p,{mode:"visible",children:h.children}),(s.mode&1)===0&&(h.lanes=a),h.return=s,h.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=h,s.memoizedState=null,h}function Dd(r,s){return s=tc({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Bu(r,s,a,h){return h!==null&&od(h),Co(s,r.child,null,a),r=Dd(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function M0(r,s,a,h,d,p,w){if(a)return s.flags&256?(s.flags&=-257,h=Cd(Error(t(422))),Bu(r,s,w,h)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(p=h.fallback,d=s.mode,h=tc({mode:"visible",children:h.children},d,0,null),p=xs(p,d,w,null),p.flags|=2,h.return=s,p.return=s,h.sibling=p,s.child=h,(s.mode&1)!==0&&Co(s,r.child,null,w),s.child.memoizedState=Nd(w),s.memoizedState=bd,p);if((s.mode&1)===0)return Bu(r,s,w,null);if(d.data==="$!"){if(h=d.nextSibling&&d.nextSibling.dataset,h)var A=h.dgst;return h=A,p=Error(t(419)),h=Cd(p,h,void 0),Bu(r,s,w,h)}if(A=(w&r.childLanes)!==0,on||A){if(h=xt,h!==null){switch(w&-w){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(h.suspendedLanes|w))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Fr(r,d),$n(h,r,d,-1))}return Qd(),h=Cd(Error(t(421))),Bu(r,s,w,h)}return d.data==="$?"?(s.flags|=128,s.child=r.child,s=Q0.bind(null,r),d._reactRetry=s,null):(r=p.treeContext,vn=gi(d.nextSibling),yn=s,st=!0,Un=null,r!==null&&(Cn[kn++]=Mr,Cn[kn++]=Lr,Cn[kn++]=Es,Mr=r.id,Lr=r.overflow,Es=s),s=Dd(s,h.children),s.flags|=4096,s)}function Xg(r,s,a){r.lanes|=s;var h=r.alternate;h!==null&&(h.lanes|=s),cd(r.return,s,a)}function Vd(r,s,a,h,d){var p=r.memoizedState;p===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:a,tailMode:d}:(p.isBackwards=s,p.rendering=null,p.renderingStartTime=0,p.last=h,p.tail=a,p.tailMode=d)}function Zg(r,s,a){var h=s.pendingProps,d=h.revealOrder,p=h.tail;if(Xt(r,s,h.children,a),h=at.current,(h&2)!==0)h=h&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Xg(r,a,s);else if(r.tag===19)Xg(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}h&=1}if(et(at,h),(s.mode&1)===0)s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)r=a.alternate,r!==null&&Ou(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),Vd(s,!1,d,a,p);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(r=d.alternate,r!==null&&Ou(r)===null){s.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}Vd(s,!0,a,null,p);break;case"together":Vd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function $u(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function jr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),Rs|=s.lanes,(a&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=Ci(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=Ci(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function L0(r,s,a){switch(s.tag){case 3:Qg(s),Ro();break;case 5:fg(s);break;case 1:sn(s.type)&&Au(s);break;case 4:fd(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,d=s.memoizedProps.value;et(bu,h._currentValue),h._currentValue=d;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?(et(at,at.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?Jg(r,s,a):(et(at,at.current&1),r=jr(r,s,a),r!==null?r.sibling:null);et(at,at.current&1);break;case 19:if(h=(a&s.childLanes)!==0,(r.flags&128)!==0){if(h)return Zg(r,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),et(at,at.current),h)break;return null;case 22:case 23:return s.lanes=0,Hg(r,s,a)}return jr(r,s,a)}var ey,Od,ty,ny;ey=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Od=function(){},ty=function(r,s,a,h){var d=r.memoizedProps;if(d!==h){r=s.stateNode,Ss(dr.current);var p=null;switch(a){case"input":d=Ks(r,d),h=Ks(r,h),p=[];break;case"select":d=se({},d,{value:void 0}),h=se({},h,{value:void 0}),p=[];break;case"textarea":d=ya(r,d),h=ya(r,h),p=[];break;default:typeof d.onClick!="function"&&typeof h.onClick=="function"&&(r.onclick=Tu)}On(a,h);var w;a=null;for(B in d)if(!h.hasOwnProperty(B)&&d.hasOwnProperty(B)&&d[B]!=null)if(B==="style"){var A=d[B];for(w in A)A.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else B!=="dangerouslySetInnerHTML"&&B!=="children"&&B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&B!=="autoFocus"&&(o.hasOwnProperty(B)?p||(p=[]):(p=p||[]).push(B,null));for(B in h){var P=h[B];if(A=d!=null?d[B]:void 0,h.hasOwnProperty(B)&&P!==A&&(P!=null||A!=null))if(B==="style")if(A){for(w in A)!A.hasOwnProperty(w)||P&&P.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in P)P.hasOwnProperty(w)&&A[w]!==P[w]&&(a||(a={}),a[w]=P[w])}else a||(p||(p=[]),p.push(B,a)),a=P;else B==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,A=A?A.__html:void 0,P!=null&&A!==P&&(p=p||[]).push(B,P)):B==="children"?typeof P!="string"&&typeof P!="number"||(p=p||[]).push(B,""+P):B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&(o.hasOwnProperty(B)?(P!=null&&B==="onScroll"&&nt("scroll",r),p||A===P||(p=[])):(p=p||[]).push(B,P))}a&&(p=p||[]).push("style",a);var B=p;(s.updateQueue=B)&&(s.flags|=4)}},ny=function(r,s,a,h){a!==h&&(s.flags|=4)};function rl(r,s){if(!st)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var h=null;a!==null;)a.alternate!==null&&(h=a),a=a.sibling;h===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:h.sibling=null}}function Ht(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,h=0;if(s)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,h|=d.subtreeFlags&14680064,h|=d.flags&14680064,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,h|=d.subtreeFlags,h|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=h,r.childLanes=a,s}function F0(r,s,a){var h=s.pendingProps;switch(rd(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ht(s),null;case 1:return sn(s.type)&&Su(),Ht(s),null;case 3:return h=s.stateNode,xo(),rt(rn),rt(Wt),gd(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(r===null||r.child===null)&&(Pu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Un!==null&&(Hd(Un),Un=null))),Od(r,s),Ht(s),null;case 5:pd(s);var d=Ss(Xa.current);if(a=s.type,r!==null&&s.stateNode!=null)ty(r,s,a,h,d),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(t(166));return Ht(s),null}if(r=Ss(dr.current),Pu(s)){h=s.stateNode,a=s.type;var p=s.memoizedProps;switch(h[hr]=s,h[Ga]=p,r=(s.mode&1)!==0,a){case"dialog":nt("cancel",h),nt("close",h);break;case"iframe":case"object":case"embed":nt("load",h);break;case"video":case"audio":for(d=0;d<Wa.length;d++)nt(Wa[d],h);break;case"source":nt("error",h);break;case"img":case"image":case"link":nt("error",h),nt("load",h);break;case"details":nt("toggle",h);break;case"input":Gl(h,p),nt("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!p.multiple},nt("invalid",h);break;case"textarea":va(h,p),nt("invalid",h)}On(a,p),d=null;for(var w in p)if(p.hasOwnProperty(w)){var A=p[w];w==="children"?typeof A=="string"?h.textContent!==A&&(p.suppressHydrationWarning!==!0&&Eu(h.textContent,A,r),d=["children",A]):typeof A=="number"&&h.textContent!==""+A&&(p.suppressHydrationWarning!==!0&&Eu(h.textContent,A,r),d=["children",""+A]):o.hasOwnProperty(w)&&A!=null&&w==="onScroll"&&nt("scroll",h)}switch(a){case"input":oe(h),ga(h,p,!0);break;case"textarea":oe(h),ei(h);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(h.onclick=Tu)}h=d,s.updateQueue=h,h!==null&&(s.flags|=4)}else{w=d.nodeType===9?d:d.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=_a(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=w.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof h.is=="string"?r=w.createElement(a,{is:h.is}):(r=w.createElement(a),a==="select"&&(w=r,h.multiple?w.multiple=!0:h.size&&(w.size=h.size))):r=w.createElementNS(r,a),r[hr]=s,r[Ga]=h,ey(r,s,!1,!1),s.stateNode=r;e:{switch(w=Xs(a,h),a){case"dialog":nt("cancel",r),nt("close",r),d=h;break;case"iframe":case"object":case"embed":nt("load",r),d=h;break;case"video":case"audio":for(d=0;d<Wa.length;d++)nt(Wa[d],r);d=h;break;case"source":nt("error",r),d=h;break;case"img":case"image":case"link":nt("error",r),nt("load",r),d=h;break;case"details":nt("toggle",r),d=h;break;case"input":Gl(r,h),d=Ks(r,h),nt("invalid",r);break;case"option":d=h;break;case"select":r._wrapperState={wasMultiple:!!h.multiple},d=se({},h,{value:void 0}),nt("invalid",r);break;case"textarea":va(r,h),d=ya(r,h),nt("invalid",r);break;default:d=h}On(a,d),A=d;for(p in A)if(A.hasOwnProperty(p)){var P=A[p];p==="style"?Js(r,P):p==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&Ql(r,P)):p==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&ss(r,P):typeof P=="number"&&ss(r,""+P):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?P!=null&&p==="onScroll"&&nt("scroll",r):P!=null&&ie(r,p,P,w))}switch(a){case"input":oe(r),ga(r,h,!1);break;case"textarea":oe(r),ei(r);break;case"option":h.value!=null&&r.setAttribute("value",""+Oe(h.value));break;case"select":r.multiple=!!h.multiple,p=h.value,p!=null?Vn(r,!!h.multiple,p,!1):h.defaultValue!=null&&Vn(r,!!h.multiple,h.defaultValue,!0);break;default:typeof d.onClick=="function"&&(r.onclick=Tu)}switch(a){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Ht(s),null;case 6:if(r&&s.stateNode!=null)ny(r,s,r.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(t(166));if(a=Ss(Xa.current),Ss(dr.current),Pu(s)){if(h=s.stateNode,a=s.memoizedProps,h[hr]=s,(p=h.nodeValue!==a)&&(r=yn,r!==null))switch(r.tag){case 3:Eu(h.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Eu(h.nodeValue,a,(r.mode&1)!==0)}p&&(s.flags|=4)}else h=(a.nodeType===9?a:a.ownerDocument).createTextNode(h),h[hr]=s,s.stateNode=h}return Ht(s),null;case 13:if(rt(at),h=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(st&&vn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)sg(),Ro(),s.flags|=98560,p=!1;else if(p=Pu(s),h!==null&&h.dehydrated!==null){if(r===null){if(!p)throw Error(t(318));if(p=s.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[hr]=s}else Ro(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Ht(s),p=!1}else Un!==null&&(Hd(Un),Un=null),p=!0;if(!p)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(h=h!==null,h!==(r!==null&&r.memoizedState!==null)&&h&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(at.current&1)!==0?Rt===0&&(Rt=3):Qd())),s.updateQueue!==null&&(s.flags|=4),Ht(s),null);case 4:return xo(),Od(r,s),r===null&&qa(s.stateNode.containerInfo),Ht(s),null;case 10:return ud(s.type._context),Ht(s),null;case 17:return sn(s.type)&&Su(),Ht(s),null;case 19:if(rt(at),p=s.memoizedState,p===null)return Ht(s),null;if(h=(s.flags&128)!==0,w=p.rendering,w===null)if(h)rl(p,!1);else{if(Rt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(w=Ou(r),w!==null){for(s.flags|=128,rl(p,!1),h=w.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=a,a=s.child;a!==null;)p=a,r=h,p.flags&=14680066,w=p.alternate,w===null?(p.childLanes=0,p.lanes=r,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=w.childLanes,p.lanes=w.lanes,p.child=w.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=w.memoizedProps,p.memoizedState=w.memoizedState,p.updateQueue=w.updateQueue,p.type=w.type,r=w.dependencies,p.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return et(at,at.current&1|2),s.child}r=r.sibling}p.tail!==null&&tt()>Vo&&(s.flags|=128,h=!0,rl(p,!1),s.lanes=4194304)}else{if(!h)if(r=Ou(w),r!==null){if(s.flags|=128,h=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),rl(p,!0),p.tail===null&&p.tailMode==="hidden"&&!w.alternate&&!st)return Ht(s),null}else 2*tt()-p.renderingStartTime>Vo&&a!==1073741824&&(s.flags|=128,h=!0,rl(p,!1),s.lanes=4194304);p.isBackwards?(w.sibling=s.child,s.child=w):(a=p.last,a!==null?a.sibling=w:s.child=w,p.last=w)}return p.tail!==null?(s=p.tail,p.rendering=s,p.tail=s.sibling,p.renderingStartTime=tt(),s.sibling=null,a=at.current,et(at,h?a&1|2:a&1),s):(Ht(s),null);case 22:case 23:return Kd(),h=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==h&&(s.flags|=8192),h&&(s.mode&1)!==0?(_n&1073741824)!==0&&(Ht(s),s.subtreeFlags&6&&(s.flags|=8192)):Ht(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function U0(r,s){switch(rd(s),s.tag){case 1:return sn(s.type)&&Su(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return xo(),rt(rn),rt(Wt),gd(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return pd(s),null;case 13:if(rt(at),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Ro()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return rt(at),null;case 4:return xo(),null;case 10:return ud(s.type._context),null;case 22:case 23:return Kd(),null;case 24:return null;default:return null}}var Wu=!1,Gt=!1,j0=typeof WeakSet=="function"?WeakSet:Set,ce=null;function No(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(h){dt(r,s,h)}else a.current=null}function Md(r,s,a){try{a()}catch(h){dt(r,s,h)}}var ry=!1;function z0(r,s){if(Kh=br,r=Om(),jh(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var h=a.getSelection&&a.getSelection();if(h&&h.rangeCount!==0){a=h.anchorNode;var d=h.anchorOffset,p=h.focusNode;h=h.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var w=0,A=-1,P=-1,B=0,J=0,X=r,Y=null;t:for(;;){for(var ae;X!==a||d!==0&&X.nodeType!==3||(A=w+d),X!==p||h!==0&&X.nodeType!==3||(P=w+h),X.nodeType===3&&(w+=X.nodeValue.length),(ae=X.firstChild)!==null;)Y=X,X=ae;for(;;){if(X===r)break t;if(Y===a&&++B===d&&(A=w),Y===p&&++J===h&&(P=w),(ae=X.nextSibling)!==null)break;X=Y,Y=X.parentNode}X=ae}a=A===-1||P===-1?null:{start:A,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Qh={focusedElem:r,selectionRange:a},br=!1,ce=s;ce!==null;)if(s=ce,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,ce=r;else for(;ce!==null;){s=ce;try{var de=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(de!==null){var me=de.memoizedProps,gt=de.memoizedState,F=s.stateNode,N=F.getSnapshotBeforeUpdate(s.elementType===s.type?me:jn(s.type,me),gt);F.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var j=s.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ee){dt(s,s.return,ee)}if(r=s.sibling,r!==null){r.return=s.return,ce=r;break}ce=s.return}return de=ry,ry=!1,de}function il(r,s,a){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var d=h=h.next;do{if((d.tag&r)===r){var p=d.destroy;d.destroy=void 0,p!==void 0&&Md(s,a,p)}d=d.next}while(d!==h)}}function qu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var h=a.create;a.destroy=h()}a=a.next}while(a!==s)}}function Ld(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function iy(r){var s=r.alternate;s!==null&&(r.alternate=null,iy(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[hr],delete s[Ga],delete s[Zh],delete s[I0],delete s[S0])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function sy(r){return r.tag===5||r.tag===3||r.tag===4}function oy(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||sy(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Fd(r,s,a){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Tu));else if(h!==4&&(r=r.child,r!==null))for(Fd(r,s,a),r=r.sibling;r!==null;)Fd(r,s,a),r=r.sibling}function Ud(r,s,a){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(h!==4&&(r=r.child,r!==null))for(Ud(r,s,a),r=r.sibling;r!==null;)Ud(r,s,a),r=r.sibling}var Lt=null,zn=!1;function Ti(r,s,a){for(a=a.child;a!==null;)ay(r,s,a),a=a.sibling}function ay(r,s,a){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(cs,a)}catch{}switch(a.tag){case 5:Gt||No(a,s);case 6:var h=Lt,d=zn;Lt=null,Ti(r,s,a),Lt=h,zn=d,Lt!==null&&(zn?(r=Lt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Lt.removeChild(a.stateNode));break;case 18:Lt!==null&&(zn?(r=Lt,a=a.stateNode,r.nodeType===8?Xh(r.parentNode,a):r.nodeType===1&&Xh(r,a),di(r)):Xh(Lt,a.stateNode));break;case 4:h=Lt,d=zn,Lt=a.stateNode.containerInfo,zn=!0,Ti(r,s,a),Lt=h,zn=d;break;case 0:case 11:case 14:case 15:if(!Gt&&(h=a.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){d=h=h.next;do{var p=d,w=p.destroy;p=p.tag,w!==void 0&&((p&2)!==0||(p&4)!==0)&&Md(a,s,w),d=d.next}while(d!==h)}Ti(r,s,a);break;case 1:if(!Gt&&(No(a,s),h=a.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=a.memoizedProps,h.state=a.memoizedState,h.componentWillUnmount()}catch(A){dt(a,s,A)}Ti(r,s,a);break;case 21:Ti(r,s,a);break;case 22:a.mode&1?(Gt=(h=Gt)||a.memoizedState!==null,Ti(r,s,a),Gt=h):Ti(r,s,a);break;default:Ti(r,s,a)}}function ly(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new j0),s.forEach(function(h){var d=Y0.bind(null,r,h);a.has(h)||(a.add(h),h.then(d,d))})}}function Bn(r,s){var a=s.deletions;if(a!==null)for(var h=0;h<a.length;h++){var d=a[h];try{var p=r,w=s,A=w;e:for(;A!==null;){switch(A.tag){case 5:Lt=A.stateNode,zn=!1;break e;case 3:Lt=A.stateNode.containerInfo,zn=!0;break e;case 4:Lt=A.stateNode.containerInfo,zn=!0;break e}A=A.return}if(Lt===null)throw Error(t(160));ay(p,w,d),Lt=null,zn=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(B){dt(d,s,B)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)uy(s,r),s=s.sibling}function uy(r,s){var a=r.alternate,h=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Bn(s,r),pr(r),h&4){try{il(3,r,r.return),qu(3,r)}catch(me){dt(r,r.return,me)}try{il(5,r,r.return)}catch(me){dt(r,r.return,me)}}break;case 1:Bn(s,r),pr(r),h&512&&a!==null&&No(a,a.return);break;case 5:if(Bn(s,r),pr(r),h&512&&a!==null&&No(a,a.return),r.flags&32){var d=r.stateNode;try{ss(d,"")}catch(me){dt(r,r.return,me)}}if(h&4&&(d=r.stateNode,d!=null)){var p=r.memoizedProps,w=a!==null?a.memoizedProps:p,A=r.type,P=r.updateQueue;if(r.updateQueue=null,P!==null)try{A==="input"&&p.type==="radio"&&p.name!=null&&Qs(d,p),Xs(A,w);var B=Xs(A,p);for(w=0;w<P.length;w+=2){var J=P[w],X=P[w+1];J==="style"?Js(d,X):J==="dangerouslySetInnerHTML"?Ql(d,X):J==="children"?ss(d,X):ie(d,J,X,B)}switch(A){case"input":is(d,p);break;case"textarea":Kl(d,p);break;case"select":var Y=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var ae=p.value;ae!=null?Vn(d,!!p.multiple,ae,!1):Y!==!!p.multiple&&(p.defaultValue!=null?Vn(d,!!p.multiple,p.defaultValue,!0):Vn(d,!!p.multiple,p.multiple?[]:"",!1))}d[Ga]=p}catch(me){dt(r,r.return,me)}}break;case 6:if(Bn(s,r),pr(r),h&4){if(r.stateNode===null)throw Error(t(162));d=r.stateNode,p=r.memoizedProps;try{d.nodeValue=p}catch(me){dt(r,r.return,me)}}break;case 3:if(Bn(s,r),pr(r),h&4&&a!==null&&a.memoizedState.isDehydrated)try{di(s.containerInfo)}catch(me){dt(r,r.return,me)}break;case 4:Bn(s,r),pr(r);break;case 13:Bn(s,r),pr(r),d=r.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Bd=tt())),h&4&&ly(r);break;case 22:if(J=a!==null&&a.memoizedState!==null,r.mode&1?(Gt=(B=Gt)||J,Bn(s,r),Gt=B):Bn(s,r),pr(r),h&8192){if(B=r.memoizedState!==null,(r.stateNode.isHidden=B)&&!J&&(r.mode&1)!==0)for(ce=r,J=r.child;J!==null;){for(X=ce=J;ce!==null;){switch(Y=ce,ae=Y.child,Y.tag){case 0:case 11:case 14:case 15:il(4,Y,Y.return);break;case 1:No(Y,Y.return);var de=Y.stateNode;if(typeof de.componentWillUnmount=="function"){h=Y,a=Y.return;try{s=h,de.props=s.memoizedProps,de.state=s.memoizedState,de.componentWillUnmount()}catch(me){dt(h,a,me)}}break;case 5:No(Y,Y.return);break;case 22:if(Y.memoizedState!==null){dy(X);continue}}ae!==null?(ae.return=Y,ce=ae):dy(X)}J=J.sibling}e:for(J=null,X=r;;){if(X.tag===5){if(J===null){J=X;try{d=X.stateNode,B?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(A=X.stateNode,P=X.memoizedProps.style,w=P!=null&&P.hasOwnProperty("display")?P.display:null,A.style.display=ri("display",w))}catch(me){dt(r,r.return,me)}}}else if(X.tag===6){if(J===null)try{X.stateNode.nodeValue=B?"":X.memoizedProps}catch(me){dt(r,r.return,me)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===r)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===r)break e;for(;X.sibling===null;){if(X.return===null||X.return===r)break e;J===X&&(J=null),X=X.return}J===X&&(J=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:Bn(s,r),pr(r),h&4&&ly(r);break;case 21:break;default:Bn(s,r),pr(r)}}function pr(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(sy(a)){var h=a;break e}a=a.return}throw Error(t(160))}switch(h.tag){case 5:var d=h.stateNode;h.flags&32&&(ss(d,""),h.flags&=-33);var p=oy(r);Ud(r,p,d);break;case 3:case 4:var w=h.stateNode.containerInfo,A=oy(r);Fd(r,A,w);break;default:throw Error(t(161))}}catch(P){dt(r,r.return,P)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function B0(r,s,a){ce=r,cy(r)}function cy(r,s,a){for(var h=(r.mode&1)!==0;ce!==null;){var d=ce,p=d.child;if(d.tag===22&&h){var w=d.memoizedState!==null||Wu;if(!w){var A=d.alternate,P=A!==null&&A.memoizedState!==null||Gt;A=Wu;var B=Gt;if(Wu=w,(Gt=P)&&!B)for(ce=d;ce!==null;)w=ce,P=w.child,w.tag===22&&w.memoizedState!==null?fy(d):P!==null?(P.return=w,ce=P):fy(d);for(;p!==null;)ce=p,cy(p),p=p.sibling;ce=d,Wu=A,Gt=B}hy(r)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,ce=p):hy(r)}}function hy(r){for(;ce!==null;){var s=ce;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Gt||qu(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!Gt)if(a===null)h.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:jn(s.type,a.memoizedProps);h.componentDidUpdate(d,a.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var p=s.updateQueue;p!==null&&dg(s,p,h);break;case 3:var w=s.updateQueue;if(w!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}dg(s,w,a)}break;case 5:var A=s.stateNode;if(a===null&&s.flags&4){a=A;var P=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var B=s.alternate;if(B!==null){var J=B.memoizedState;if(J!==null){var X=J.dehydrated;X!==null&&di(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Gt||s.flags&512&&Ld(s)}catch(Y){dt(s,s.return,Y)}}if(s===r){ce=null;break}if(a=s.sibling,a!==null){a.return=s.return,ce=a;break}ce=s.return}}function dy(r){for(;ce!==null;){var s=ce;if(s===r){ce=null;break}var a=s.sibling;if(a!==null){a.return=s.return,ce=a;break}ce=s.return}}function fy(r){for(;ce!==null;){var s=ce;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{qu(4,s)}catch(P){dt(s,a,P)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var d=s.return;try{h.componentDidMount()}catch(P){dt(s,d,P)}}var p=s.return;try{Ld(s)}catch(P){dt(s,p,P)}break;case 5:var w=s.return;try{Ld(s)}catch(P){dt(s,w,P)}}}catch(P){dt(s,s.return,P)}if(s===r){ce=null;break}var A=s.sibling;if(A!==null){A.return=s.return,ce=A;break}ce=s.return}}var $0=Math.ceil,Hu=ue.ReactCurrentDispatcher,jd=ue.ReactCurrentOwner,bn=ue.ReactCurrentBatchConfig,qe=0,xt=null,Et=null,Ft=0,_n=0,Do=yi(0),Rt=0,sl=null,Rs=0,Gu=0,zd=0,ol=null,an=null,Bd=0,Vo=1/0,zr=null,Ku=!1,$d=null,Ii=null,Qu=!1,Si=null,Yu=0,al=0,Wd=null,Ju=-1,Xu=0;function Zt(){return(qe&6)!==0?tt():Ju!==-1?Ju:Ju=tt()}function Ai(r){return(r.mode&1)===0?1:(qe&2)!==0&&Ft!==0?Ft&-Ft:R0.transition!==null?(Xu===0&&(Xu=ka()),Xu):(r=ze,r!==0||(r=window.event,r=r===void 0?16:lo(r.type)),r)}function $n(r,s,a,h){if(50<al)throw al=0,Wd=null,Error(t(185));ps(r,a,h),((qe&2)===0||r!==xt)&&(r===xt&&((qe&2)===0&&(Gu|=a),Rt===4&&Ri(r,Ft)),ln(r,h),a===1&&qe===0&&(s.mode&1)===0&&(Vo=tt()+500,Ru&&_i()))}function ln(r,s){var a=r.callbackNode;fs(r,s);var h=kr(r,r===xt?Ft:0);if(h===0)a!==null&&to(a),r.callbackNode=null,r.callbackPriority=0;else if(s=h&-h,r.callbackPriority!==s){if(a!=null&&to(a),s===1)r.tag===0?A0(my.bind(null,r)):eg(my.bind(null,r)),E0(function(){(qe&6)===0&&_i()}),a=null;else{switch(tr(h)){case 1:a=no;break;case 4:a=Aa;break;case 16:a=us;break;case 536870912:a=ro;break;default:a=us}a=Iy(a,py.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function py(r,s){if(Ju=-1,Xu=0,(qe&6)!==0)throw Error(t(327));var a=r.callbackNode;if(Oo()&&r.callbackNode!==a)return null;var h=kr(r,r===xt?Ft:0);if(h===0)return null;if((h&30)!==0||(h&r.expiredLanes)!==0||s)s=Zu(r,h);else{s=h;var d=qe;qe|=2;var p=yy();(xt!==r||Ft!==s)&&(zr=null,Vo=tt()+500,ks(r,s));do try{H0();break}catch(A){gy(r,A)}while(!0);ld(),Hu.current=p,qe=d,Et!==null?s=0:(xt=null,Ft=0,s=Rt)}if(s!==0){if(s===2&&(d=Ca(r),d!==0&&(h=d,s=qd(r,d))),s===1)throw a=sl,ks(r,0),Ri(r,h),ln(r,tt()),a;if(s===6)Ri(r,h);else{if(d=r.current.alternate,(h&30)===0&&!W0(d)&&(s=Zu(r,h),s===2&&(p=Ca(r),p!==0&&(h=p,s=qd(r,p))),s===1))throw a=sl,ks(r,0),Ri(r,h),ln(r,tt()),a;switch(r.finishedWork=d,r.finishedLanes=h,s){case 0:case 1:throw Error(t(345));case 2:Ps(r,an,zr);break;case 3:if(Ri(r,h),(h&130023424)===h&&(s=Bd+500-tt(),10<s)){if(kr(r,0)!==0)break;if(d=r.suspendedLanes,(d&h)!==h){Zt(),r.pingedLanes|=r.suspendedLanes&d;break}r.timeoutHandle=Jh(Ps.bind(null,r,an,zr),s);break}Ps(r,an,zr);break;case 4:if(Ri(r,h),(h&4194240)===h)break;for(s=r.eventTimes,d=-1;0<h;){var w=31-dn(h);p=1<<w,w=s[w],w>d&&(d=w),h&=~p}if(h=d,h=tt()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*$0(h/1960))-h,10<h){r.timeoutHandle=Jh(Ps.bind(null,r,an,zr),h);break}Ps(r,an,zr);break;case 5:Ps(r,an,zr);break;default:throw Error(t(329))}}}return ln(r,tt()),r.callbackNode===a?py.bind(null,r):null}function qd(r,s){var a=ol;return r.current.memoizedState.isDehydrated&&(ks(r,s).flags|=256),r=Zu(r,s),r!==2&&(s=an,an=a,s!==null&&Hd(s)),r}function Hd(r){an===null?an=r:an.push.apply(an,r)}function W0(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var h=0;h<a.length;h++){var d=a[h],p=d.getSnapshot;d=d.value;try{if(!Fn(p(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ri(r,s){for(s&=~zd,s&=~Gu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-dn(s),h=1<<a;r[a]=-1,s&=~h}}function my(r){if((qe&6)!==0)throw Error(t(327));Oo();var s=kr(r,0);if((s&1)===0)return ln(r,tt()),null;var a=Zu(r,s);if(r.tag!==0&&a===2){var h=Ca(r);h!==0&&(s=h,a=qd(r,h))}if(a===1)throw a=sl,ks(r,0),Ri(r,s),ln(r,tt()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,Ps(r,an,zr),ln(r,tt()),null}function Gd(r,s){var a=qe;qe|=1;try{return r(s)}finally{qe=a,qe===0&&(Vo=tt()+500,Ru&&_i())}}function Cs(r){Si!==null&&Si.tag===0&&(qe&6)===0&&Oo();var s=qe;qe|=1;var a=bn.transition,h=ze;try{if(bn.transition=null,ze=1,r)return r()}finally{ze=h,bn.transition=a,qe=s,(qe&6)===0&&_i()}}function Kd(){_n=Do.current,rt(Do)}function ks(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,w0(a)),Et!==null)for(a=Et.return;a!==null;){var h=a;switch(rd(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Su();break;case 3:xo(),rt(rn),rt(Wt),gd();break;case 5:pd(h);break;case 4:xo();break;case 13:rt(at);break;case 19:rt(at);break;case 10:ud(h.type._context);break;case 22:case 23:Kd()}a=a.return}if(xt=r,Et=r=Ci(r.current,null),Ft=_n=s,Rt=0,sl=null,zd=Gu=Rs=0,an=ol=null,Is!==null){for(s=0;s<Is.length;s++)if(a=Is[s],h=a.interleaved,h!==null){a.interleaved=null;var d=h.next,p=a.pending;if(p!==null){var w=p.next;p.next=d,h.next=w}a.pending=h}Is=null}return r}function gy(r,s){do{var a=Et;try{if(ld(),Mu.current=ju,Lu){for(var h=lt.memoizedState;h!==null;){var d=h.queue;d!==null&&(d.pending=null),h=h.next}Lu=!1}if(As=0,Pt=At=lt=null,Za=!1,el=0,jd.current=null,a===null||a.return===null){Rt=1,sl=s,Et=null;break}e:{var p=r,w=a.return,A=a,P=s;if(s=Ft,A.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var B=P,J=A,X=J.tag;if((J.mode&1)===0&&(X===0||X===11||X===15)){var Y=J.alternate;Y?(J.updateQueue=Y.updateQueue,J.memoizedState=Y.memoizedState,J.lanes=Y.lanes):(J.updateQueue=null,J.memoizedState=null)}var ae=zg(w);if(ae!==null){ae.flags&=-257,Bg(ae,w,A,p,s),ae.mode&1&&jg(p,B,s),s=ae,P=B;var de=s.updateQueue;if(de===null){var me=new Set;me.add(P),s.updateQueue=me}else de.add(P);break e}else{if((s&1)===0){jg(p,B,s),Qd();break e}P=Error(t(426))}}else if(st&&A.mode&1){var gt=zg(w);if(gt!==null){(gt.flags&65536)===0&&(gt.flags|=256),Bg(gt,w,A,p,s),od(bo(P,A));break e}}p=P=bo(P,A),Rt!==4&&(Rt=2),ol===null?ol=[p]:ol.push(p),p=w;do{switch(p.tag){case 3:p.flags|=65536,s&=-s,p.lanes|=s;var F=Fg(p,P,s);hg(p,F);break e;case 1:A=P;var N=p.type,j=p.stateNode;if((p.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(Ii===null||!Ii.has(j)))){p.flags|=65536,s&=-s,p.lanes|=s;var ee=Ug(p,A,s);hg(p,ee);break e}}p=p.return}while(p!==null)}_y(a)}catch(ge){s=ge,Et===a&&a!==null&&(Et=a=a.return);continue}break}while(!0)}function yy(){var r=Hu.current;return Hu.current=ju,r===null?ju:r}function Qd(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),xt===null||(Rs&268435455)===0&&(Gu&268435455)===0||Ri(xt,Ft)}function Zu(r,s){var a=qe;qe|=2;var h=yy();(xt!==r||Ft!==s)&&(zr=null,ks(r,s));do try{q0();break}catch(d){gy(r,d)}while(!0);if(ld(),qe=a,Hu.current=h,Et!==null)throw Error(t(261));return xt=null,Ft=0,Rt}function q0(){for(;Et!==null;)vy(Et)}function H0(){for(;Et!==null&&!ls();)vy(Et)}function vy(r){var s=Ty(r.alternate,r,_n);r.memoizedProps=r.pendingProps,s===null?_y(r):Et=s,jd.current=null}function _y(r){var s=r;do{var a=s.alternate;if(r=s.return,(s.flags&32768)===0){if(a=F0(a,s,_n),a!==null){Et=a;return}}else{if(a=U0(a,s),a!==null){a.flags&=32767,Et=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{Rt=6,Et=null;return}}if(s=s.sibling,s!==null){Et=s;return}Et=s=r}while(s!==null);Rt===0&&(Rt=5)}function Ps(r,s,a){var h=ze,d=bn.transition;try{bn.transition=null,ze=1,G0(r,s,a,h)}finally{bn.transition=d,ze=h}return null}function G0(r,s,a,h){do Oo();while(Si!==null);if((qe&6)!==0)throw Error(t(327));a=r.finishedWork;var d=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var p=a.lanes|a.childLanes;if(Oh(r,p),r===xt&&(Et=xt=null,Ft=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Qu||(Qu=!0,Iy(us,function(){return Oo(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=bn.transition,bn.transition=null;var w=ze;ze=1;var A=qe;qe|=4,jd.current=null,z0(r,a),uy(a,r),f0(Qh),br=!!Kh,Qh=Kh=null,r.current=a,B0(a),Cr(),qe=A,ze=w,bn.transition=p}else r.current=a;if(Qu&&(Qu=!1,Si=r,Yu=d),p=r.pendingLanes,p===0&&(Ii=null),ou(a.stateNode),ln(r,tt()),s!==null)for(h=r.onRecoverableError,a=0;a<s.length;a++)d=s[a],h(d.value,{componentStack:d.stack,digest:d.digest});if(Ku)throw Ku=!1,r=$d,$d=null,r;return(Yu&1)!==0&&r.tag!==0&&Oo(),p=r.pendingLanes,(p&1)!==0?r===Wd?al++:(al=0,Wd=r):al=0,_i(),null}function Oo(){if(Si!==null){var r=tr(Yu),s=bn.transition,a=ze;try{if(bn.transition=null,ze=16>r?16:r,Si===null)var h=!1;else{if(r=Si,Si=null,Yu=0,(qe&6)!==0)throw Error(t(331));var d=qe;for(qe|=4,ce=r.current;ce!==null;){var p=ce,w=p.child;if((ce.flags&16)!==0){var A=p.deletions;if(A!==null){for(var P=0;P<A.length;P++){var B=A[P];for(ce=B;ce!==null;){var J=ce;switch(J.tag){case 0:case 11:case 15:il(8,J,p)}var X=J.child;if(X!==null)X.return=J,ce=X;else for(;ce!==null;){J=ce;var Y=J.sibling,ae=J.return;if(iy(J),J===B){ce=null;break}if(Y!==null){Y.return=ae,ce=Y;break}ce=ae}}}var de=p.alternate;if(de!==null){var me=de.child;if(me!==null){de.child=null;do{var gt=me.sibling;me.sibling=null,me=gt}while(me!==null)}}ce=p}}if((p.subtreeFlags&2064)!==0&&w!==null)w.return=p,ce=w;else e:for(;ce!==null;){if(p=ce,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:il(9,p,p.return)}var F=p.sibling;if(F!==null){F.return=p.return,ce=F;break e}ce=p.return}}var N=r.current;for(ce=N;ce!==null;){w=ce;var j=w.child;if((w.subtreeFlags&2064)!==0&&j!==null)j.return=w,ce=j;else e:for(w=N;ce!==null;){if(A=ce,(A.flags&2048)!==0)try{switch(A.tag){case 0:case 11:case 15:qu(9,A)}}catch(ge){dt(A,A.return,ge)}if(A===w){ce=null;break e}var ee=A.sibling;if(ee!==null){ee.return=A.return,ce=ee;break e}ce=A.return}}if(qe=d,_i(),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(cs,r)}catch{}h=!0}return h}finally{ze=a,bn.transition=s}}return!1}function wy(r,s,a){s=bo(a,s),s=Fg(r,s,1),r=Ei(r,s,1),s=Zt(),r!==null&&(ps(r,1,s),ln(r,s))}function dt(r,s,a){if(r.tag===3)wy(r,r,a);else for(;s!==null;){if(s.tag===3){wy(s,r,a);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Ii===null||!Ii.has(h))){r=bo(a,r),r=Ug(s,r,1),s=Ei(s,r,1),r=Zt(),s!==null&&(ps(s,1,r),ln(s,r));break}}s=s.return}}function K0(r,s,a){var h=r.pingCache;h!==null&&h.delete(s),s=Zt(),r.pingedLanes|=r.suspendedLanes&a,xt===r&&(Ft&a)===a&&(Rt===4||Rt===3&&(Ft&130023424)===Ft&&500>tt()-Bd?ks(r,0):zd|=a),ln(r,s)}function Ey(r,s){s===0&&((r.mode&1)===0?s=1:(s=ui,ui<<=1,(ui&130023424)===0&&(ui=4194304)));var a=Zt();r=Fr(r,s),r!==null&&(ps(r,s,a),ln(r,a))}function Q0(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),Ey(r,a)}function Y0(r,s){var a=0;switch(r.tag){case 13:var h=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:h=r.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(s),Ey(r,a)}var Ty;Ty=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||rn.current)on=!0;else{if((r.lanes&a)===0&&(s.flags&128)===0)return on=!1,L0(r,s,a);on=(r.flags&131072)!==0}else on=!1,st&&(s.flags&1048576)!==0&&tg(s,ku,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;$u(r,s),r=s.pendingProps;var d=Io(s,Wt.current);Po(s,a),d=_d(null,s,h,r,d,a);var p=wd();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,sn(h)?(p=!0,Au(s)):p=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,dd(s),d.updater=zu,s.stateNode=d,d._reactInternals=s,Rd(s,h,r,a),s=xd(null,s,h,!0,p,a)):(s.tag=0,st&&p&&nd(s),Xt(null,s,d,a),s=s.child),s;case 16:h=s.elementType;e:{switch($u(r,s),r=s.pendingProps,d=h._init,h=d(h._payload),s.type=h,d=s.tag=X0(h),r=jn(h,r),d){case 0:s=Pd(null,s,h,r,a);break e;case 1:s=Kg(null,s,h,r,a);break e;case 11:s=$g(null,s,h,r,a);break e;case 14:s=Wg(null,s,h,jn(h.type,r),a);break e}throw Error(t(306,h,""))}return s;case 0:return h=s.type,d=s.pendingProps,d=s.elementType===h?d:jn(h,d),Pd(r,s,h,d,a);case 1:return h=s.type,d=s.pendingProps,d=s.elementType===h?d:jn(h,d),Kg(r,s,h,d,a);case 3:e:{if(Qg(s),r===null)throw Error(t(387));h=s.pendingProps,p=s.memoizedState,d=p.element,cg(r,s),Vu(s,h,null,a);var w=s.memoizedState;if(h=w.element,p.isDehydrated)if(p={element:h,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=p,s.memoizedState=p,s.flags&256){d=bo(Error(t(423)),s),s=Yg(r,s,h,a,d);break e}else if(h!==d){d=bo(Error(t(424)),s),s=Yg(r,s,h,a,d);break e}else for(vn=gi(s.stateNode.containerInfo.firstChild),yn=s,st=!0,Un=null,a=lg(s,null,h,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ro(),h===d){s=jr(r,s,a);break e}Xt(r,s,h,a)}s=s.child}return s;case 5:return fg(s),r===null&&sd(s),h=s.type,d=s.pendingProps,p=r!==null?r.memoizedProps:null,w=d.children,Yh(h,d)?w=null:p!==null&&Yh(h,p)&&(s.flags|=32),Gg(r,s),Xt(r,s,w,a),s.child;case 6:return r===null&&sd(s),null;case 13:return Jg(r,s,a);case 4:return fd(s,s.stateNode.containerInfo),h=s.pendingProps,r===null?s.child=Co(s,null,h,a):Xt(r,s,h,a),s.child;case 11:return h=s.type,d=s.pendingProps,d=s.elementType===h?d:jn(h,d),$g(r,s,h,d,a);case 7:return Xt(r,s,s.pendingProps,a),s.child;case 8:return Xt(r,s,s.pendingProps.children,a),s.child;case 12:return Xt(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(h=s.type._context,d=s.pendingProps,p=s.memoizedProps,w=d.value,et(bu,h._currentValue),h._currentValue=w,p!==null)if(Fn(p.value,w)){if(p.children===d.children&&!rn.current){s=jr(r,s,a);break e}}else for(p=s.child,p!==null&&(p.return=s);p!==null;){var A=p.dependencies;if(A!==null){w=p.child;for(var P=A.firstContext;P!==null;){if(P.context===h){if(p.tag===1){P=Ur(-1,a&-a),P.tag=2;var B=p.updateQueue;if(B!==null){B=B.shared;var J=B.pending;J===null?P.next=P:(P.next=J.next,J.next=P),B.pending=P}}p.lanes|=a,P=p.alternate,P!==null&&(P.lanes|=a),cd(p.return,a,s),A.lanes|=a;break}P=P.next}}else if(p.tag===10)w=p.type===s.type?null:p.child;else if(p.tag===18){if(w=p.return,w===null)throw Error(t(341));w.lanes|=a,A=w.alternate,A!==null&&(A.lanes|=a),cd(w,a,s),w=p.sibling}else w=p.child;if(w!==null)w.return=p;else for(w=p;w!==null;){if(w===s){w=null;break}if(p=w.sibling,p!==null){p.return=w.return,w=p;break}w=w.return}p=w}Xt(r,s,d.children,a),s=s.child}return s;case 9:return d=s.type,h=s.pendingProps.children,Po(s,a),d=Pn(d),h=h(d),s.flags|=1,Xt(r,s,h,a),s.child;case 14:return h=s.type,d=jn(h,s.pendingProps),d=jn(h.type,d),Wg(r,s,h,d,a);case 15:return qg(r,s,s.type,s.pendingProps,a);case 17:return h=s.type,d=s.pendingProps,d=s.elementType===h?d:jn(h,d),$u(r,s),s.tag=1,sn(h)?(r=!0,Au(s)):r=!1,Po(s,a),Mg(s,h,d),Rd(s,h,d,a),xd(null,s,h,!0,r,a);case 19:return Zg(r,s,a);case 22:return Hg(r,s,a)}throw Error(t(156,s.tag))};function Iy(r,s){return Sa(r,s)}function J0(r,s,a,h){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(r,s,a,h){return new J0(r,s,a,h)}function Yd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function X0(r){if(typeof r=="function")return Yd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===V)return 11;if(r===Ye)return 14}return 2}function Ci(r,s){var a=r.alternate;return a===null?(a=Nn(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function ec(r,s,a,h,d,p){var w=2;if(h=r,typeof r=="function")Yd(r)&&(w=1);else if(typeof r=="string")w=5;else e:switch(r){case R:return xs(a.children,d,p,s);case S:w=8,d|=8;break;case C:return r=Nn(12,a,s,d|2),r.elementType=C,r.lanes=p,r;case k:return r=Nn(13,a,s,d),r.elementType=k,r.lanes=p,r;case He:return r=Nn(19,a,s,d),r.elementType=He,r.lanes=p,r;case je:return tc(a,d,p,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case b:w=10;break e;case x:w=9;break e;case V:w=11;break e;case Ye:w=14;break e;case Ve:w=16,h=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=Nn(w,a,s,d),s.elementType=r,s.type=h,s.lanes=p,s}function xs(r,s,a,h){return r=Nn(7,r,h,s),r.lanes=a,r}function tc(r,s,a,h){return r=Nn(22,r,h,s),r.elementType=je,r.lanes=a,r.stateNode={isHidden:!1},r}function Jd(r,s,a){return r=Nn(6,r,null,s),r.lanes=a,r}function Xd(r,s,a){return s=Nn(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function Z0(r,s,a,h,d){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pa(0),this.expirationTimes=Pa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pa(0),this.identifierPrefix=h,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Zd(r,s,a,h,d,p,w,A,P){return r=new Z0(r,s,a,A,P),s===1?(s=1,p===!0&&(s|=8)):s=0,p=Nn(3,null,null,s),r.current=p,p.stateNode=r,p.memoizedState={element:h,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},dd(p),r}function eS(r,s,a){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:we,key:h==null?null:""+h,children:r,containerInfo:s,implementation:a}}function Sy(r){if(!r)return vi;r=r._reactInternals;e:{if(Mn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(sn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(sn(a))return Xm(r,a,s)}return s}function Ay(r,s,a,h,d,p,w,A,P){return r=Zd(a,h,!0,r,d,p,w,A,P),r.context=Sy(null),a=r.current,h=Zt(),d=Ai(a),p=Ur(h,d),p.callback=s??null,Ei(a,p,d),r.current.lanes=d,ps(r,d,h),ln(r,h),r}function nc(r,s,a,h){var d=s.current,p=Zt(),w=Ai(d);return a=Sy(a),s.context===null?s.context=a:s.pendingContext=a,s=Ur(p,w),s.payload={element:r},h=h===void 0?null:h,h!==null&&(s.callback=h),r=Ei(d,s,w),r!==null&&($n(r,d,w,p),Du(r,d,w)),w}function rc(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Ry(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function ef(r,s){Ry(r,s),(r=r.alternate)&&Ry(r,s)}function tS(){return null}var Cy=typeof reportError=="function"?reportError:function(r){console.error(r)};function tf(r){this._internalRoot=r}ic.prototype.render=tf.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));nc(r,s,null,null)},ic.prototype.unmount=tf.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;Cs(function(){nc(null,r,null,null)}),s[Vr]=null}};function ic(r){this._internalRoot=r}ic.prototype.unstable_scheduleHydration=function(r){if(r){var s=Da();r={blockedOn:null,target:r,priority:s};for(var a=0;a<fn.length&&s!==0&&s<fn[a].priority;a++);fn.splice(a,0,r),a===0&&oo(r)}};function nf(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function sc(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function ky(){}function nS(r,s,a,h,d){if(d){if(typeof h=="function"){var p=h;h=function(){var B=rc(w);p.call(B)}}var w=Ay(s,h,r,0,null,!1,!1,"",ky);return r._reactRootContainer=w,r[Vr]=w.current,qa(r.nodeType===8?r.parentNode:r),Cs(),w}for(;d=r.lastChild;)r.removeChild(d);if(typeof h=="function"){var A=h;h=function(){var B=rc(P);A.call(B)}}var P=Zd(r,0,!1,null,null,!1,!1,"",ky);return r._reactRootContainer=P,r[Vr]=P.current,qa(r.nodeType===8?r.parentNode:r),Cs(function(){nc(s,P,a,h)}),P}function oc(r,s,a,h,d){var p=a._reactRootContainer;if(p){var w=p;if(typeof d=="function"){var A=d;d=function(){var P=rc(w);A.call(P)}}nc(s,w,r,d)}else w=nS(a,s,r,d,h);return rc(w)}ba=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=Qe(s.pendingLanes);a!==0&&(xa(s,a|1),ln(s,tt()),(qe&6)===0&&(Vo=tt()+500,_i()))}break;case 13:Cs(function(){var h=Fr(r,1);if(h!==null){var d=Zt();$n(h,r,1,d)}}),ef(r,1)}},io=function(r){if(r.tag===13){var s=Fr(r,134217728);if(s!==null){var a=Zt();$n(s,r,134217728,a)}ef(r,134217728)}},Na=function(r){if(r.tag===13){var s=Ai(r),a=Fr(r,s);if(a!==null){var h=Zt();$n(a,r,s,h)}ef(r,s)}},Da=function(){return ze},Va=function(r,s){var a=ze;try{return ze=r,s()}finally{ze=a}},Sr=function(r,s,a){switch(s){case"input":if(is(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var h=a[s];if(h!==r&&h.form===r.form){var d=Iu(h);if(!d)throw Error(t(90));Ge(h),is(h,d)}}}break;case"textarea":Kl(r,a);break;case"select":s=a.value,s!=null&&Vn(r,!!a.multiple,s,!1)}},Jl=Gd,Xl=Cs;var rS={usingClientEntryPoint:!1,Events:[Ka,Eo,Iu,si,oi,Gd]},ll={findFiberByHostInstance:_s,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},iS={bundleType:ll.bundleType,version:ll.version,rendererPackageName:ll.rendererPackageName,rendererConfig:ll.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ue.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=su(r),r===null?null:r.stateNode},findFiberByHostInstance:ll.findFiberByHostInstance||tS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ac.isDisabled&&ac.supportsFiber)try{cs=ac.inject(iS),hn=ac}catch{}}return un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rS,un.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nf(s))throw Error(t(200));return eS(r,s,null,a)},un.createRoot=function(r,s){if(!nf(r))throw Error(t(299));var a=!1,h="",d=Cy;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=Zd(r,1,!1,null,null,a,!1,h,d),r[Vr]=s.current,qa(r.nodeType===8?r.parentNode:r),new tf(s)},un.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=su(s),r=r===null?null:r.stateNode,r},un.flushSync=function(r){return Cs(r)},un.hydrate=function(r,s,a){if(!sc(s))throw Error(t(200));return oc(null,r,s,!0,a)},un.hydrateRoot=function(r,s,a){if(!nf(r))throw Error(t(405));var h=a!=null&&a.hydratedSources||null,d=!1,p="",w=Cy;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),s=Ay(s,null,r,1,a??null,d,!1,p,w),r[Vr]=s.current,qa(r),h)for(r=0;r<h.length;r++)a=h[r],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new ic(s)},un.render=function(r,s,a){if(!sc(s))throw Error(t(200));return oc(null,r,s,!1,a)},un.unmountComponentAtNode=function(r){if(!sc(r))throw Error(t(40));return r._reactRootContainer?(Cs(function(){oc(null,null,r,!1,function(){r._reactRootContainer=null,r[Vr]=null})}),!0):!1},un.unstable_batchedUpdates=Gd,un.unstable_renderSubtreeIntoContainer=function(r,s,a,h){if(!sc(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return oc(r,s,a,!1,h)},un.version="18.3.1-next-f1338f8080-20240426",un}var My;function W_(){if(My)return of.exports;My=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),of.exports=dS(),of.exports}var Ly;function fS(){if(Ly)return lc;Ly=1;var n=W_();return lc.createRoot=n.createRoot,lc.hydrateRoot=n.hydrateRoot,lc}var pS=fS(),L=cp();const mS=$_(L),gS=oS({__proto__:null,default:mS},[L]);function Pi({onClick:n,children:e,disabled:t=!1}){return G.jsx("button",{onClick:n,disabled:t,className:"bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 active:scale-95",children:e})}const yS="/assets/bc1bc1c44f6ba6cb1fd8be782ee33922cc6339af-Dpd72UCo.png",vS=()=>{};var Fy={};/**
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
 */const q_=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},_S=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],c=n[t++],f=n[t++],m=((o&7)<<18|(l&63)<<12|(c&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(m>>10)),e[i++]=String.fromCharCode(56320+(m&1023))}else{const l=n[t++],c=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|c&63)}}return e.join("")},H_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],c=o+1<n.length,f=c?n[o+1]:0,m=o+2<n.length,y=m?n[o+2]:0,_=l>>2,E=(l&3)<<4|f>>4;let I=(f&15)<<2|y>>6,D=y&63;m||(D=64,c||(I=64)),i.push(t[_],t[E],t[I],t[D])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(q_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):_S(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],f=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const E=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||f==null||y==null||E==null)throw new wS;const I=l<<2|f>>4;if(i.push(I),y!==64){const D=f<<4&240|y>>2;if(i.push(D),E!==64){const W=y<<6&192|E;i.push(W)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class wS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ES=function(n){const e=q_(n);return H_.encodeByteArray(e,!0)},Vc=function(n){return ES(n).replace(/\./g,"")},G_=function(n){try{return H_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const IS=()=>TS().__FIREBASE_DEFAULTS__,SS=()=>{if(typeof process>"u"||typeof Fy>"u")return;const n=Fy.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},AS=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&G_(n[1]);return e&&JSON.parse(e)},sh=()=>{try{return vS()||IS()||SS()||AS()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},K_=n=>{var e,t;return(t=(e=sh())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},RS=n=>{const e=K_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Q_=()=>{var n;return(n=sh())==null?void 0:n.config},Y_=n=>{var e;return(e=sh())==null?void 0:e[`_${n}`]};/**
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
 */function oa(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function J_(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function kS(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Vc(JSON.stringify(t)),Vc(JSON.stringify(c)),""].join(".")}const yl={};function PS(){const n={prod:[],emulator:[]};for(const e of Object.keys(yl))yl[e]?n.emulator.push(e):n.prod.push(e);return n}function xS(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Uy=!1;function X_(n,e){if(typeof window>"u"||typeof document>"u"||!oa(window.location.host)||yl[n]===e||yl[n]||Uy)return;yl[n]=e;function t(I){return`__firebase__banner__${I}`}const i="__firebase__banner",l=PS().prod.length>0;function c(){const I=document.getElementById(i);I&&I.remove()}function f(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function m(I,D){I.setAttribute("width","24"),I.setAttribute("id",D),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function y(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{Uy=!0,c()},I}function _(I,D){I.setAttribute("id",D),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function E(){const I=xS(i),D=t("text"),W=document.getElementById(D)||document.createElement("span"),M=t("learnmore"),z=document.getElementById(M)||document.createElement("a"),Z=t("preprendIcon"),ne=document.getElementById(Z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const ie=I.element;f(ie),_(z,M);const ue=y();m(ne,Z),ie.append(ne,W,z,ue),document.body.appendChild(ie)}l?(W.innerText="Preview backend disconnected.",ne.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,W.innerText="Preview backend running in this workspace."),W.setAttribute("id",D)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
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
 */function Yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Yt())}function NS(){var e;const n=(e=sh())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function DS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function hp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function VS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function OS(){const n=Yt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function MS(){return!NS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function dp(){try{return typeof indexedDB=="object"}catch{return!1}}function fp(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)==null?void 0:l.message)||"")}}catch(t){e(t)}})}function Z_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const LS="FirebaseError";class Qn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=LS,Object.setPrototypeOf(this,Qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ws.prototype.create)}}class Ws{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],c=l?FS(l,i):"Error",f=`${this.serviceName}: ${c} (${o}).`;return new Qn(o,f,i)}}function FS(n,e){return n.replace(US,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const US=/\{\$([^}]+)}/g;function jS(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Wi(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],c=e[o];if(jy(l)&&jy(c)){if(!Wi(l,c))return!1}else if(l!==c)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function jy(n){return n!==null&&typeof n=="object"}/**
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
 */function Ol(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function zS(n,e){const t=new BS(n,e);return t.subscribe.bind(t)}class BS{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");$S(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=uf),o.error===void 0&&(o.error=uf),o.complete===void 0&&(o.complete=uf);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $S(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function uf(){}/**
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
 */const WS=1e3,qS=2,HS=14400*1e3,GS=.5;function zy(n,e=WS,t=qS){const i=e*Math.pow(t,n),o=Math.round(GS*i*(Math.random()-.5)*2);return Math.min(HS,i+o)}/**
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
 */function vt(n){return n&&n._delegate?n._delegate:n}class Gn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */var Le;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Le||(Le={}));const XS={debug:Le.DEBUG,verbose:Le.VERBOSE,info:Le.INFO,warn:Le.WARN,error:Le.ERROR,silent:Le.SILENT},ZS=Le.INFO,eA={[Le.DEBUG]:"log",[Le.VERBOSE]:"log",[Le.INFO]:"info",[Le.WARN]:"warn",[Le.ERROR]:"error"},tA=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=eA[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class oh{constructor(e){this.name=e,this._logLevel=ZS,this._logHandler=tA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?XS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Le.DEBUG,...e),this._logHandler(this,Le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Le.VERBOSE,...e),this._logHandler(this,Le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Le.INFO,...e),this._logHandler(this,Le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Le.WARN,...e),this._logHandler(this,Le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Le.ERROR,...e),this._logHandler(this,Le.ERROR,...e)}}const nA=(n,e)=>e.some(t=>n instanceof t);let By,$y;function rA(){return By||(By=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iA(){return $y||($y=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ew=new WeakMap,Df=new WeakMap,tw=new WeakMap,cf=new WeakMap,pp=new WeakMap;function sA(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(Fi(n.result)),o()},c=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&ew.set(t,n)}).catch(()=>{}),pp.set(e,n),e}function oA(n){if(Df.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),o()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});Df.set(n,e)}let Vf={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Df.get(n);if(e==="objectStoreNames")return n.objectStoreNames||tw.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Fi(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function aA(n){Vf=n(Vf)}function lA(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(hf(this),e,...t);return tw.set(i,e.sort?e.sort():[e]),Fi(i)}:iA().includes(n)?function(...e){return n.apply(hf(this),e),Fi(ew.get(this))}:function(...e){return Fi(n.apply(hf(this),e))}}function uA(n){return typeof n=="function"?lA(n):(n instanceof IDBTransaction&&oA(n),nA(n,rA())?new Proxy(n,Vf):n)}function Fi(n){if(n instanceof IDBRequest)return sA(n);if(cf.has(n))return cf.get(n);const e=uA(n);return e!==n&&(cf.set(n,e),pp.set(e,n)),e}const hf=n=>pp.get(n);function nw(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const c=indexedDB.open(n,e),f=Fi(c);return i&&c.addEventListener("upgradeneeded",m=>{i(Fi(c.result),m.oldVersion,m.newVersion,Fi(c.transaction),m)}),t&&c.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),f.then(m=>{l&&m.addEventListener("close",()=>l()),o&&m.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),f}const cA=["get","getKey","getAll","getAllKeys","count"],hA=["put","add","delete","clear"],df=new Map;function Wy(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(df.get(e))return df.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=hA.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||cA.includes(t)))return;const l=async function(c,...f){const m=this.transaction(c,o?"readwrite":"readonly");let y=m.store;return i&&(y=y.index(f.shift())),(await Promise.all([y[t](...f),o&&m.done]))[0]};return df.set(e,l),l}aA(n=>({...n,get:(e,t,i)=>Wy(e,t)||n.get(e,t,i),has:(e,t)=>!!Wy(e,t)||n.has(e,t)}));/**
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
 */class dA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(fA(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function fA(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Of="@firebase/app",qy="0.14.8";/**
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
 */const Hr=new oh("@firebase/app"),pA="@firebase/app-compat",mA="@firebase/analytics-compat",gA="@firebase/analytics",yA="@firebase/app-check-compat",vA="@firebase/app-check",_A="@firebase/auth",wA="@firebase/auth-compat",EA="@firebase/database",TA="@firebase/data-connect",IA="@firebase/database-compat",SA="@firebase/functions",AA="@firebase/functions-compat",RA="@firebase/installations",CA="@firebase/installations-compat",kA="@firebase/messaging",PA="@firebase/messaging-compat",xA="@firebase/performance",bA="@firebase/performance-compat",NA="@firebase/remote-config",DA="@firebase/remote-config-compat",VA="@firebase/storage",OA="@firebase/storage-compat",MA="@firebase/firestore",LA="@firebase/ai",FA="@firebase/firestore-compat",UA="firebase",jA="12.9.0";/**
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
 */const Mf="[DEFAULT]",zA={[Of]:"fire-core",[pA]:"fire-core-compat",[gA]:"fire-analytics",[mA]:"fire-analytics-compat",[vA]:"fire-app-check",[yA]:"fire-app-check-compat",[_A]:"fire-auth",[wA]:"fire-auth-compat",[EA]:"fire-rtdb",[TA]:"fire-data-connect",[IA]:"fire-rtdb-compat",[SA]:"fire-fn",[AA]:"fire-fn-compat",[RA]:"fire-iid",[CA]:"fire-iid-compat",[kA]:"fire-fcm",[PA]:"fire-fcm-compat",[xA]:"fire-perf",[bA]:"fire-perf-compat",[NA]:"fire-rc",[DA]:"fire-rc-compat",[VA]:"fire-gcs",[OA]:"fire-gcs-compat",[MA]:"fire-fst",[FA]:"fire-fst-compat",[LA]:"fire-vertex","fire-js":"fire-js",[UA]:"fire-js-all"};/**
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
 */const Oc=new Map,BA=new Map,Lf=new Map;function Hy(n,e){try{n.container.addComponent(e)}catch(t){Hr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Tr(n){const e=n.name;if(Lf.has(e))return Hr.debug(`There were multiple attempts to register component ${e}.`),!1;Lf.set(e,n);for(const t of Oc.values())Hy(t,n);for(const t of BA.values())Hy(t,n);return!0}function qs(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Wn(n){return n==null?!1:n.settings!==void 0}/**
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
 */class WA{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ui.create("app-deleted",{appName:this._name})}}/**
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
 */const aa=jA;function rw(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:Mf,automaticDataCollectionEnabled:!0,...e},o=i.name;if(typeof o!="string"||!o)throw Ui.create("bad-app-name",{appName:String(o)});if(t||(t=Q_()),!t)throw Ui.create("no-options");const l=Oc.get(o);if(l){if(Wi(t,l.options)&&Wi(i,l.config))return l;throw Ui.create("duplicate-app",{appName:o})}const c=new JS(o);for(const m of Lf.values())c.addComponent(m);const f=new WA(t,i,c);return Oc.set(o,f),f}function mp(n=Mf){const e=Oc.get(n);if(!e&&n===Mf&&Q_())return rw();if(!e)throw Ui.create("no-app",{appName:n});return e}function Dn(n,e,t){let i=zA[n]??n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const c=[`Unable to register library "${i}" with version "${e}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Hr.warn(c.join(" "));return}Tr(new Gn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const qA="firebase-heartbeat-database",HA=1,Al="firebase-heartbeat-store";let ff=null;function iw(){return ff||(ff=nw(qA,HA,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Al)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ui.create("idb-open",{originalErrorMessage:n.message})})),ff}async function GA(n){try{const t=(await iw()).transaction(Al),i=await t.objectStore(Al).get(sw(n));return await t.done,i}catch(e){if(e instanceof Qn)Hr.warn(e.message);else{const t=Ui.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Hr.warn(t.message)}}}async function Gy(n,e){try{const i=(await iw()).transaction(Al,"readwrite");await i.objectStore(Al).put(e,sw(n)),await i.done}catch(t){if(t instanceof Qn)Hr.warn(t.message);else{const i=Ui.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Hr.warn(i.message)}}}function sw(n){return`${n.name}!${n.options.appId}`}/**
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
 */const KA=1024,QA=30;class YA{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new XA(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Ky();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>QA){const c=ZA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Hr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ky(),{heartbeatsToSend:i,unsentEntries:o}=JA(this._heartbeatsCache.heartbeats),l=Vc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Hr.warn(t),""}}}function Ky(){return new Date().toISOString().substring(0,10)}function JA(n,e=KA){const t=[];let i=n.slice();for(const o of n){const l=t.find(c=>c.agent===o.agent);if(l){if(l.dates.push(o.date),Qy(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Qy(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class XA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dp()?fp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await GA(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Gy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Gy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Qy(n){return Vc(JSON.stringify({version:2,heartbeats:n})).length}function ZA(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function eR(n){Tr(new Gn("platform-logger",e=>new dA(e),"PRIVATE")),Tr(new Gn("heartbeat",e=>new YA(e),"PRIVATE")),Dn(Of,qy,n),Dn(Of,qy,"esm2020"),Dn("fire-js","")}eR("");var tR="firebase",nR="12.9.0";/**
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
 */Dn(tR,nR,"app");const ow="@firebase/installations",gp="0.6.19";/**
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
 */const aw=1e4,lw=`w:${gp}`,uw="FIS_v2",rR="https://firebaseinstallations.googleapis.com/v1",iR=3600*1e3,sR="installations",oR="Installations";/**
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
 */const aR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ms=new Ws(sR,oR,aR);function cw(n){return n instanceof Qn&&n.code.includes("request-failed")}/**
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
 */function hw({projectId:n}){return`${rR}/projects/${n}/installations`}function dw(n){return{token:n.token,requestStatus:2,expiresIn:uR(n.expiresIn),creationTime:Date.now()}}async function fw(n,e){const i=(await e.json()).error;return Ms.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function pw({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function lR(n,{refreshToken:e}){const t=pw(n);return t.append("Authorization",cR(e)),t}async function mw(n){const e=await n();return e.status>=500&&e.status<600?n():e}function uR(n){return Number(n.replace("s","000"))}function cR(n){return`${uw} ${n}`}/**
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
 */async function hR({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=hw(n),o=pw(n),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const c={fid:t,authVersion:uw,appId:n.appId,sdkVersion:lw},f={method:"POST",headers:o,body:JSON.stringify(c)},m=await mw(()=>fetch(i,f));if(m.ok){const y=await m.json();return{fid:y.fid||t,registrationStatus:2,refreshToken:y.refreshToken,authToken:dw(y.authToken)}}else throw await fw("Create Installation",m)}/**
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
 */function gw(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */const fR=/^[cdef][\w-]{21}$/,Ff="";function pR(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=mR(n);return fR.test(t)?t:Ff}catch{return Ff}}function mR(n){return dR(n).substr(0,22)}/**
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
 */const yw=new Map;function vw(n,e){const t=ah(n);_w(t,e),gR(t,e)}function _w(n,e){const t=yw.get(n);if(t)for(const i of t)i(e)}function gR(n,e){const t=yR();t&&t.postMessage({key:n,fid:e}),vR()}let Ds=null;function yR(){return!Ds&&"BroadcastChannel"in self&&(Ds=new BroadcastChannel("[Firebase] FID Change"),Ds.onmessage=n=>{_w(n.data.key,n.data.fid)}),Ds}function vR(){yw.size===0&&Ds&&(Ds.close(),Ds=null)}/**
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
 */const _R="firebase-installations-database",wR=1,Ls="firebase-installations-store";let pf=null;function yp(){return pf||(pf=nw(_R,wR,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ls)}}})),pf}async function Mc(n,e){const t=ah(n),o=(await yp()).transaction(Ls,"readwrite"),l=o.objectStore(Ls),c=await l.get(t);return await l.put(e,t),await o.done,(!c||c.fid!==e.fid)&&vw(n,e.fid),e}async function ww(n){const e=ah(n),i=(await yp()).transaction(Ls,"readwrite");await i.objectStore(Ls).delete(e),await i.done}async function lh(n,e){const t=ah(n),o=(await yp()).transaction(Ls,"readwrite"),l=o.objectStore(Ls),c=await l.get(t),f=e(c);return f===void 0?await l.delete(t):await l.put(f,t),await o.done,f&&(!c||c.fid!==f.fid)&&vw(n,f.fid),f}/**
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
 */async function vp(n){let e;const t=await lh(n.appConfig,i=>{const o=ER(i),l=TR(n,o);return e=l.registrationPromise,l.installationEntry});return t.fid===Ff?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function ER(n){const e=n||{fid:pR(),registrationStatus:0};return Ew(e)}function TR(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Ms.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=IR(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:SR(n)}:{installationEntry:e}}async function IR(n,e){try{const t=await hR(n,e);return Mc(n.appConfig,t)}catch(t){throw cw(t)&&t.customData.serverCode===409?await ww(n.appConfig):await Mc(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function SR(n){let e=await Yy(n.appConfig);for(;e.registrationStatus===1;)await gw(100),e=await Yy(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await vp(n);return i||t}return e}function Yy(n){return lh(n,e=>{if(!e)throw Ms.create("installation-not-found");return Ew(e)})}function Ew(n){return AR(n)?{fid:n.fid,registrationStatus:0}:n}function AR(n){return n.registrationStatus===1&&n.registrationTime+aw<Date.now()}/**
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
 */async function RR({appConfig:n,heartbeatServiceProvider:e},t){const i=CR(n,t),o=lR(n,t),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const c={installation:{sdkVersion:lw,appId:n.appId}},f={method:"POST",headers:o,body:JSON.stringify(c)},m=await mw(()=>fetch(i,f));if(m.ok){const y=await m.json();return dw(y)}else throw await fw("Generate Auth Token",m)}function CR(n,{fid:e}){return`${hw(n)}/${e}/authTokens:generate`}/**
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
 */async function _p(n,e=!1){let t;const i=await lh(n.appConfig,l=>{if(!Tw(l))throw Ms.create("not-registered");const c=l.authToken;if(!e&&xR(c))return l;if(c.requestStatus===1)return t=kR(n,e),l;{if(!navigator.onLine)throw Ms.create("app-offline");const f=NR(l);return t=PR(n,f),f}});return t?await t:i.authToken}async function kR(n,e){let t=await Jy(n.appConfig);for(;t.authToken.requestStatus===1;)await gw(100),t=await Jy(n.appConfig);const i=t.authToken;return i.requestStatus===0?_p(n,e):i}function Jy(n){return lh(n,e=>{if(!Tw(e))throw Ms.create("not-registered");const t=e.authToken;return DR(t)?{...e,authToken:{requestStatus:0}}:e})}async function PR(n,e){try{const t=await RR(n,e),i={...e,authToken:t};return await Mc(n.appConfig,i),t}catch(t){if(cw(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await ww(n.appConfig);else{const i={...e,authToken:{requestStatus:0}};await Mc(n.appConfig,i)}throw t}}function Tw(n){return n!==void 0&&n.registrationStatus===2}function xR(n){return n.requestStatus===2&&!bR(n)}function bR(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+iR}function NR(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function DR(n){return n.requestStatus===1&&n.requestTime+aw<Date.now()}/**
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
 */async function VR(n){const e=n,{installationEntry:t,registrationPromise:i}=await vp(e);return i?i.catch(console.error):_p(e).catch(console.error),t.fid}/**
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
 */async function OR(n,e=!1){const t=n;return await MR(t),(await _p(t,e)).token}async function MR(n){const{registrationPromise:e}=await vp(n);e&&await e}/**
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
 */function LR(n){if(!n||!n.options)throw mf("App Configuration");if(!n.name)throw mf("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw mf(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function mf(n){return Ms.create("missing-app-config-values",{valueName:n})}/**
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
 */const Iw="installations",FR="installations-internal",UR=n=>{const e=n.getProvider("app").getImmediate(),t=LR(e),i=qs(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},jR=n=>{const e=n.getProvider("app").getImmediate(),t=qs(e,Iw).getImmediate();return{getId:()=>VR(t),getToken:o=>OR(t,o)}};function zR(){Tr(new Gn(Iw,UR,"PUBLIC")),Tr(new Gn(FR,jR,"PRIVATE"))}zR();Dn(ow,gp);Dn(ow,gp,"esm2020");/**
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
 */const Lc="analytics",BR="firebase_id",$R="origin",WR=60*1e3,qR="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",wp="https://www.googletagmanager.com/gtag/js";/**
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
 */const nn=new oh("@firebase/analytics");/**
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
 */const HR={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Tn=new Ws("analytics","Analytics",HR);/**
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
 */function GR(n){if(!n.startsWith(wp)){const e=Tn.create("invalid-gtag-resource",{gtagURL:n});return nn.warn(e.message),""}return n}function Sw(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function KR(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function QR(n,e){const t=KR("firebase-js-sdk-policy",{createScriptURL:GR}),i=document.createElement("script"),o=`${wp}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(o):o,i.async=!0,document.head.appendChild(i)}function YR(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function JR(n,e,t,i,o,l){const c=i[o];try{if(c)await e[c];else{const m=(await Sw(t)).find(y=>y.measurementId===o);m&&await e[m.appId]}}catch(f){nn.error(f)}n("config",o,l)}async function XR(n,e,t,i,o){try{let l=[];if(o&&o.send_to){let c=o.send_to;Array.isArray(c)||(c=[c]);const f=await Sw(t);for(const m of c){const y=f.find(E=>E.measurementId===m),_=y&&e[y.appId];if(_)l.push(_);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),n("event",i,o||{})}catch(l){nn.error(l)}}function ZR(n,e,t,i){async function o(l,...c){try{if(l==="event"){const[f,m]=c;await XR(n,e,t,f,m)}else if(l==="config"){const[f,m]=c;await JR(n,e,t,i,f,m)}else if(l==="consent"){const[f,m]=c;n("consent",f,m)}else if(l==="get"){const[f,m,y]=c;n("get",f,m,y)}else if(l==="set"){const[f]=c;n("set",f)}else n(l,...c)}catch(f){nn.error(f)}}return o}function eC(n,e,t,i,o){let l=function(...c){window[i].push(arguments)};return window[o]&&typeof window[o]=="function"&&(l=window[o]),window[o]=ZR(l,n,e,t),{gtagCore:l,wrappedGtag:window[o]}}function tC(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(wp)&&t.src.includes(n))return t;return null}/**
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
 */const nC=30,rC=1e3;class iC{constructor(e={},t=rC){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Aw=new iC;function sC(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function oC(n){var c;const{appId:e,apiKey:t}=n,i={method:"GET",headers:sC(t)},o=qR.replace("{app-id}",e),l=await fetch(o,i);if(l.status!==200&&l.status!==304){let f="";try{const m=await l.json();(c=m.error)!=null&&c.message&&(f=m.error.message)}catch{}throw Tn.create("config-fetch-failed",{httpStatus:l.status,responseMessage:f})}return l.json()}async function aC(n,e=Aw,t){const{appId:i,apiKey:o,measurementId:l}=n.options;if(!i)throw Tn.create("no-app-id");if(!o){if(l)return{measurementId:l,appId:i};throw Tn.create("no-api-key")}const c=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new cC;return setTimeout(async()=>{f.abort()},WR),Rw({appId:i,apiKey:o,measurementId:l},c,f,e)}async function Rw(n,{throttleEndTimeMillis:e,backoffCount:t},i,o=Aw){var f;const{appId:l,measurementId:c}=n;try{await lC(i,e)}catch(m){if(c)return nn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${m==null?void 0:m.message}]`),{appId:l,measurementId:c};throw m}try{const m=await oC(n);return o.deleteThrottleMetadata(l),m}catch(m){const y=m;if(!uC(y)){if(o.deleteThrottleMetadata(l),c)return nn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:l,measurementId:c};throw m}const _=Number((f=y==null?void 0:y.customData)==null?void 0:f.httpStatus)===503?zy(t,o.intervalMillis,nC):zy(t,o.intervalMillis),E={throttleEndTimeMillis:Date.now()+_,backoffCount:t+1};return o.setThrottleMetadata(l,E),nn.debug(`Calling attemptFetch again in ${_} millis`),Rw(n,E,i,o)}}function lC(n,e){return new Promise((t,i)=>{const o=Math.max(e-Date.now(),0),l=setTimeout(t,o);n.addEventListener(()=>{clearTimeout(l),i(Tn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function uC(n){if(!(n instanceof Qn)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class cC{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function hC(n,e,t,i,o){if(o&&o.global){n("event",t,i);return}else{const l=await e,c={...i,send_to:l};n("event",t,c)}}async function dC(n,e,t,i){if(i&&i.global){const o={};for(const l of Object.keys(t))o[`user_properties.${l}`]=t[l];return n("set",o),Promise.resolve()}else{const o=await e;n("config",o,{update:!0,user_properties:t})}}/**
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
 */async function fC(){if(dp())try{await fp()}catch(n){return nn.warn(Tn.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return nn.warn(Tn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function pC(n,e,t,i,o,l,c){const f=aC(n);f.then(I=>{t[I.measurementId]=I.appId,n.options.measurementId&&I.measurementId!==n.options.measurementId&&nn.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${I.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(I=>nn.error(I)),e.push(f);const m=fC().then(I=>{if(I)return i.getId()}),[y,_]=await Promise.all([f,m]);tC(l)||QR(l,y.measurementId),o("js",new Date);const E=(c==null?void 0:c.config)??{};return E[$R]="firebase",E.update=!0,_!=null&&(E[BR]=_),o("config",y.measurementId,E),y.measurementId}/**
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
 */class mC{constructor(e){this.app=e}_delete(){return delete Ho[this.app.options.appId],Promise.resolve()}}let Ho={},Xy=[];const Zy={};let gf="dataLayer",gC="gtag",ev,Ep,tv=!1;function yC(){const n=[];if(hp()&&n.push("This is a browser extension environment."),Z_()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,o)=>`(${o+1}) ${i}`).join(" "),t=Tn.create("invalid-analytics-context",{errorInfo:e});nn.warn(t.message)}}function vC(n,e,t){yC();const i=n.options.appId;if(!i)throw Tn.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)nn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Tn.create("no-api-key");if(Ho[i]!=null)throw Tn.create("already-exists",{id:i});if(!tv){YR(gf);const{wrappedGtag:l,gtagCore:c}=eC(Ho,Xy,Zy,gf,gC);Ep=l,ev=c,tv=!0}return Ho[i]=pC(n,Xy,Zy,e,ev,gf,t),new mC(n)}function _C(n=mp()){n=vt(n);const e=qs(n,Lc);return e.isInitialized()?e.getImmediate():wC(n)}function wC(n,e={}){const t=qs(n,Lc);if(t.isInitialized()){const o=t.getImmediate();if(Wi(e,t.getOptions()))return o;throw Tn.create("already-initialized")}return t.initialize({options:e})}async function EC(){if(hp()||!Z_()||!dp())return!1;try{return await fp()}catch{return!1}}function TC(n,e,t){n=vt(n),dC(Ep,Ho[n.app.options.appId],e,t).catch(i=>nn.error(i))}function IC(n,e,t,i){n=vt(n),hC(Ep,Ho[n.app.options.appId],e,t,i).catch(o=>nn.error(o))}const nv="@firebase/analytics",rv="0.10.19";function SC(){Tr(new Gn(Lc,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return vC(i,o,t)},"PUBLIC")),Tr(new Gn("analytics-internal",n,"PRIVATE")),Dn(nv,rv),Dn(nv,rv,"esm2020");function n(e){try{const t=e.getProvider(Lc).getImmediate();return{logEvent:(i,o,l)=>IC(t,i,o,l),setUserProperties:(i,o)=>TC(t,i,o)}}catch(t){throw Tn.create("interop-component-reg-failed",{reason:t})}}}SC();function Cw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const AC=Cw,kw=new Ws("auth","Firebase",Cw());/**
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
 */const Fc=new oh("@firebase/auth");function RC(n,...e){Fc.logLevel<=Le.WARN&&Fc.warn(`Auth (${aa}): ${n}`,...e)}function Tc(n,...e){Fc.logLevel<=Le.ERROR&&Fc.error(`Auth (${aa}): ${n}`,...e)}/**
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
 */function Gr(n,...e){throw Tp(n,...e)}function yr(n,...e){return Tp(n,...e)}function Pw(n,e,t){const i={...AC(),[e]:t};return new Ws("auth","Firebase",i).create(e,{appName:n.name})}function ji(n){return Pw(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Tp(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return kw.create(n,...e)}function ke(n,e,...t){if(!n)throw Tp(e,...t)}function $r(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Tc(e),new Error(e)}function Kr(n,e){n||$r(e)}/**
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
 */function Uf(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function CC(){return iv()==="http:"||iv()==="https:"}function iv(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function kC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(CC()||hp()||"connection"in navigator)?navigator.onLine:!0}function PC(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Ml{constructor(e,t){this.shortDelay=e,this.longDelay=t,Kr(t>e,"Short delay should be less than long delay!"),this.isMobile=bS()||VS()}get(){return kC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ip(n,e){Kr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class xw{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;$r("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;$r("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;$r("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const bC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],NC=new Ml(3e4,6e4);function uh(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function la(n,e,t,i,o={}){return bw(n,o,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const f=Ol({key:n.config.apiKey,...c}).slice(1),m=await n._getAdditionalHeaders();m["Content-Type"]="application/json",n.languageCode&&(m["X-Firebase-Locale"]=n.languageCode);const y={method:e,headers:m,...l};return DS()||(y.referrerPolicy="no-referrer"),n.emulatorConfig&&oa(n.emulatorConfig.host)&&(y.credentials="include"),xw.fetch()(await Dw(n,n.config.apiHost,t,f),y)})}async function bw(n,e,t){n._canInitEmulator=!1;const i={...xC,...e};try{const o=new DC(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw uc(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const f=l.ok?c.errorMessage:c.error.message,[m,y]=f.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw uc(n,"credential-already-in-use",c);if(m==="EMAIL_EXISTS")throw uc(n,"email-already-in-use",c);if(m==="USER_DISABLED")throw uc(n,"user-disabled",c);const _=i[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Pw(n,_,y);Gr(n,_)}}catch(o){if(o instanceof Qn)throw o;Gr(n,"network-request-failed",{message:String(o)})}}async function Nw(n,e,t,i,o={}){const l=await la(n,e,t,i,o);return"mfaPendingCredential"in l&&Gr(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function Dw(n,e,t,i){const o=`${e}${t}?${i}`,l=n,c=l.config.emulator?Ip(n.config,o):`${n.config.apiScheme}://${o}`;return bC.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}class DC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(yr(this.auth,"network-request-failed")),NC.get())})}}function uc(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=yr(n,e,i);return o.customData._tokenResponse=t,o}/**
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
 */function vl(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function OC(n,e=!1){const t=vt(n),i=await t.getIdToken(e),o=Sp(i);ke(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:vl(yf(o.auth_time)),issuedAtTime:vl(yf(o.iat)),expirationTime:vl(yf(o.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function yf(n){return Number(n)*1e3}function Sp(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Tc("JWT malformed, contained fewer than 3 sections"),null;try{const o=G_(t);return o?JSON.parse(o):(Tc("Failed to decode base64 JWT payload"),null)}catch(o){return Tc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function sv(n){const e=Sp(n);return ke(e,"internal-error"),ke(typeof e.exp<"u","internal-error"),ke(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Rl(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Qn&&MC(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function MC({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class jf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=vl(this.lastLoginAt),this.creationTime=vl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function jc(n){var E;const e=n.auth,t=await n.getIdToken(),i=await Rl(n,Uc(e,{idToken:t}));ke(i==null?void 0:i.users.length,e,"internal-error");const o=i.users[0];n._notifyReloadListener(o);const l=(E=o.providerUserInfo)!=null&&E.length?Vw(o.providerUserInfo):[],c=UC(n.providerData,l),f=n.isAnonymous,m=!(n.email&&o.passwordHash)&&!(c!=null&&c.length),y=f?m:!1,_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new jf(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(n,_)}async function FC(n){const e=vt(n);await jc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function UC(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function Vw(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function jC(n,e){const t=await bw(n,{},async()=>{const i=Ol({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,c=await Dw(n,o,"/v1/token",`key=${l}`),f=await n._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:f,body:i};return n.emulatorConfig&&oa(n.emulatorConfig.host)&&(m.credentials="include"),xw.fetch()(c,m)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function zC(n,e){return la(n,"POST","/v2/accounts:revokeToken",uh(n,e))}/**
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
 */class Go{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ke(e.idToken,"internal-error"),ke(typeof e.idToken<"u","internal-error"),ke(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ke(e.length!==0,"internal-error");const t=sv(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ke(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await jC(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,c=new Go;return i&&(ke(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),o&&(ke(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),l&&(ke(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Go,this.toJSON())}_performRefresh(){return $r("not implemented")}}/**
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
 */function xi(n,e){ke(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class qn{constructor({uid:e,auth:t,stsTokenManager:i,...o}){this.providerId="firebase",this.proactiveRefresh=new LC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new jf(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Rl(this,this.stsTokenManager.getToken(this.auth,e));return ke(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return OC(this,e)}reload(){return FC(this)}_assign(e){this!==e&&(ke(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new qn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ke(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await jc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Wn(this.auth.app))return Promise.reject(ji(this.auth));const e=await this.getIdToken();return await Rl(this,VC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,o=t.email??void 0,l=t.phoneNumber??void 0,c=t.photoURL??void 0,f=t.tenantId??void 0,m=t._redirectEventId??void 0,y=t.createdAt??void 0,_=t.lastLoginAt??void 0,{uid:E,emailVerified:I,isAnonymous:D,providerData:W,stsTokenManager:M}=t;ke(E&&M,e,"internal-error");const z=Go.fromJSON(this.name,M);ke(typeof E=="string",e,"internal-error"),xi(i,e.name),xi(o,e.name),ke(typeof I=="boolean",e,"internal-error"),ke(typeof D=="boolean",e,"internal-error"),xi(l,e.name),xi(c,e.name),xi(f,e.name),xi(m,e.name),xi(y,e.name),xi(_,e.name);const Z=new qn({uid:E,auth:e,email:o,emailVerified:I,displayName:i,isAnonymous:D,photoURL:c,phoneNumber:l,tenantId:f,stsTokenManager:z,createdAt:y,lastLoginAt:_});return W&&Array.isArray(W)&&(Z.providerData=W.map(ne=>({...ne}))),m&&(Z._redirectEventId=m),Z}static async _fromIdTokenResponse(e,t,i=!1){const o=new Go;o.updateFromServerResponse(t);const l=new qn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await jc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];ke(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?Vw(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new Go;f.updateFromIdToken(i);const m=new qn({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:c}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new jf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(m,y),m}}/**
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
 */const ov=new Map;function Wr(n){Kr(n instanceof Function,"Expected a class definition");let e=ov.get(n);return e?(Kr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ov.set(n,e),e)}/**
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
 */class Ow{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ow.type="NONE";const av=Ow;/**
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
 */function Ic(n,e,t){return`firebase:${n}:${e}:${t}`}class Ko{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=Ic(this.userKey,o.apiKey,l),this.fullPersistenceKey=Ic("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Uc(this.auth,{idToken:e}).catch(()=>{});return t?qn._fromGetAccountInfoResponse(this.auth,t,e):null}return qn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Ko(Wr(av),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||Wr(av);const c=Ic(i,e.config.apiKey,e.name);let f=null;for(const y of t)try{const _=await y._get(c);if(_){let E;if(typeof _=="string"){const I=await Uc(e,{idToken:_}).catch(()=>{});if(!I)break;E=await qn._fromGetAccountInfoResponse(e,I,_)}else E=qn._fromJSON(e,_);y!==l&&(f=E),l=y;break}}catch{}const m=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!m.length?new Ko(l,e,i):(l=m[0],f&&await l._set(c,f.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(c)}catch{}})),new Ko(l,e,i))}}/**
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
 */function lv(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Uw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Mw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zw(e))return"Blackberry";if(Bw(e))return"Webos";if(Lw(e))return"Safari";if((e.includes("chrome/")||Fw(e))&&!e.includes("edge/"))return"Chrome";if(jw(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Mw(n=Yt()){return/firefox\//i.test(n)}function Lw(n=Yt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fw(n=Yt()){return/crios\//i.test(n)}function Uw(n=Yt()){return/iemobile/i.test(n)}function jw(n=Yt()){return/android/i.test(n)}function zw(n=Yt()){return/blackberry/i.test(n)}function Bw(n=Yt()){return/webos/i.test(n)}function Ap(n=Yt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function BC(n=Yt()){var e;return Ap(n)&&!!((e=window.navigator)!=null&&e.standalone)}function $C(){return OS()&&document.documentMode===10}function $w(n=Yt()){return Ap(n)||jw(n)||Bw(n)||zw(n)||/windows phone/i.test(n)||Uw(n)}/**
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
 */function Ww(n,e=[]){let t;switch(n){case"Browser":t=lv(Yt());break;case"Worker":t=`${lv(Yt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${aa}/${i}`}/**
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
 */class WC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((c,f)=>{try{const m=e(l);c(m)}catch(m){f(m)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */class KC{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uv(this),this.idTokenSubscription=new uv(this),this.beforeStateQueue=new WC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Wr(t)),this._initializationPromise=this.queue(async()=>{var i,o,l;if(!this._deleted&&(this.persistenceManager=await Ko.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Uc(this,{idToken:e}),i=await qn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(Wn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(l=this.redirectUser)==null?void 0:l._redirectEventId,f=i==null?void 0:i._redirectEventId,m=await this.tryRedirectSignIn(e);(!c||c===f)&&(m!=null&&m.user)&&(i=m.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(c){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ke(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await jc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=PC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Wn(this.app))return Promise.reject(ji(this));const t=e?vt(e):null;return t&&ke(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ke(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Wn(this.app)?Promise.reject(ji(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Wn(this.app)?Promise.reject(ji(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Wr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qC(this),t=new GC(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ws("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await zC(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Wr(e)||this._popupRedirectResolver;ke(t,this,"argument-error"),this.redirectPersistenceManager=await Ko.create(this,[Wr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ke(f,this,"internal-error"),f.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,i,o);return()=>{c=!0,m()}}else{const m=e.addObserver(t);return()=>{c=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ke(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ww(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;if(Wn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&RC(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ch(n){return vt(n)}class uv{constructor(e){this.auth=e,this.observer=null,this.addObserver=zS(t=>this.observer=t)}get next(){return ke(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Rp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function QC(n){Rp=n}function YC(n){return Rp.loadJS(n)}function JC(){return Rp.gapiScript}function XC(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function ZC(n,e){const t=qs(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Wi(l,e??{}))return o;Gr(o,"already-initialized")}return t.initialize({options:e})}function e1(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Wr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function t1(n,e,t){const i=ch(n);ke(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=qw(e),{host:c,port:f}=n1(e),m=f===null?"":`:${f}`,y={url:`${l}//${c}${m}/`},_=Object.freeze({host:c,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){ke(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),ke(Wi(y,i.config.emulator)&&Wi(_,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=y,i.emulatorConfig=_,i.settings.appVerificationDisabledForTesting=!0,oa(c)?(J_(`${l}//${c}${m}`),X_("Auth",!0)):r1()}function qw(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function n1(n){const e=qw(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:cv(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:cv(c)}}}function cv(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function r1(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Hw{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return $r("not implemented")}_getIdTokenResponse(e){return $r("not implemented")}_linkToIdToken(e,t){return $r("not implemented")}_getReauthenticationResolver(e){return $r("not implemented")}}/**
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
 */async function Qo(n,e){return Nw(n,"POST","/v1/accounts:signInWithIdp",uh(n,e))}/**
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
 */const i1="http://localhost";class Fs extends Hw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Fs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Gr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o,...l}=t;if(!i||!o)return null;const c=new Fs(i,o);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Qo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Qo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Qo(e,t)}buildRequest(){const e={requestUri:i1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ol(t)}return e}}/**
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
 */class Gw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ll extends Gw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */async function s1(n,e){return Nw(n,"POST","/v1/accounts:signUp",uh(n,e))}/**
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
 */class qi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await qn._fromIdTokenResponse(e,i,o),c=hv(i);return new qi({user:l,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=hv(i);return new qi({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function hv(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function o1(n){var o;if(Wn(n.app))return Promise.reject(ji(n));const e=ch(n);if(await e._initializationPromise,(o=e.currentUser)!=null&&o.isAnonymous)return new qi({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await s1(e,{returnSecureToken:!0}),i=await qi._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(i.user),i}/**
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
 */class zc extends Qn{constructor(e,t,i,o){super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,zc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new zc(e,t,i,o)}}function Kw(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?zc._fromErrorAndOperation(n,l,e,i):l})}async function a1(n,e,t=!1){const i=await Rl(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return qi._forOperation(n,"link",i)}/**
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
 */async function l1(n,e,t=!1){const{auth:i}=n;if(Wn(i.app))return Promise.reject(ji(i));const o="reauthenticate";try{const l=await Rl(n,Kw(i,o,e,n),t);ke(l.idToken,i,"internal-error");const c=Sp(l.idToken);ke(c,i,"internal-error");const{sub:f}=c;return ke(n.uid===f,i,"user-mismatch"),qi._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Gr(i,"user-mismatch"),l}}/**
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
 */async function u1(n,e,t=!1){if(Wn(n.app))return Promise.reject(ji(n));const i="signIn",o=await Kw(n,i,e),l=await qi._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}function c1(n,e,t,i){return vt(n).onIdTokenChanged(e,t,i)}function h1(n,e,t){return vt(n).beforeAuthStateChanged(e,t)}const Bc="__sak";/**
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
 */class Qw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Bc,"1"),this.storage.removeItem(Bc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const d1=1e3,f1=10;class Yw extends Qw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=$w(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,f,m)=>{this.notifyListeners(c,m)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);$C()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,f1):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},d1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Yw.type="LOCAL";const p1=Yw;/**
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
 */class Jw extends Qw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Jw.type="SESSION";const Xw=Jw;/**
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
 */class hh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new hh(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(c).map(async y=>y(t.origin,l)),m=await m1(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hh.receivers=[];/**
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
 */function Cp(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class g1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,c;return new Promise((f,m)=>{const y=Cp("",20);o.port1.start();const _=setTimeout(()=>{m(new Error("unsupported_event"))},i);c={messageChannel:o,onMessage(E){const I=E;if(I.data.eventId===y)switch(I.data.status){case"ack":clearTimeout(_),l=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(I.data.response);break;default:clearTimeout(_),clearTimeout(l),m(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function vr(){return window}function y1(n){vr().location.href=n}/**
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
 */function Zw(){return typeof vr().WorkerGlobalScope<"u"&&typeof vr().importScripts=="function"}async function v1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _1(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function w1(){return Zw()?self:null}/**
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
 */const eE="firebaseLocalStorageDb",E1=1,$c="firebaseLocalStorage",tE="fbase_key";class Fl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function dh(n,e){return n.transaction([$c],e?"readwrite":"readonly").objectStore($c)}function T1(){const n=indexedDB.deleteDatabase(eE);return new Fl(n).toPromise()}function zf(){const n=indexedDB.open(eE,E1);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore($c,{keyPath:tE})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains($c)?e(i):(i.close(),await T1(),e(await zf()))})})}async function dv(n,e,t){const i=dh(n,!0).put({[tE]:e,value:t});return new Fl(i).toPromise()}async function I1(n,e){const t=dh(n,!1).get(e),i=await new Fl(t).toPromise();return i===void 0?null:i.value}function fv(n,e){const t=dh(n,!0).delete(e);return new Fl(t).toPromise()}const S1=800,A1=3;class nE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>A1)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hh._getInstance(w1()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await v1(),!this.activeServiceWorker)return;this.sender=new g1(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zf();return await dv(e,Bc,"1"),await fv(e,Bc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>dv(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>I1(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>fv(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=dh(o,!1).getAll();return new Fl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),S1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nE.type="LOCAL";const R1=nE;new Ml(3e4,6e4);/**
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
 */function C1(n,e){return e?Wr(e):(ke(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class kp extends Hw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Qo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Qo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function k1(n){return u1(n.auth,new kp(n),n.bypassAuthState)}function P1(n){const{auth:e,user:t}=n;return ke(t,e,"internal-error"),l1(t,new kp(n),n.bypassAuthState)}async function x1(n){const{auth:e,user:t}=n;return ke(t,e,"internal-error"),a1(t,new kp(n),n.bypassAuthState)}/**
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
 */class rE{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:c,type:f}=e;if(c){this.reject(c);return}const m={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(m))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return k1;case"linkViaPopup":case"linkViaRedirect":return x1;case"reauthViaPopup":case"reauthViaRedirect":return P1;default:Gr(this.auth,"internal-error")}}resolve(e){Kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const b1=new Ml(2e3,1e4);class Wo extends rE{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,Wo.currentPopupAction&&Wo.currentPopupAction.cancel(),Wo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ke(e,this.auth,"internal-error"),e}async onExecution(){Kr(this.filter.length===1,"Popup operations only handle one event");const e=Cp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(yr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(yr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if((i=(t=this.authWindow)==null?void 0:t.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,b1.get())};e()}}Wo.currentPopupAction=null;/**
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
 */const N1="pendingRedirect",Sc=new Map;class D1 extends rE{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Sc.get(this.auth._key());if(!e){try{const i=await V1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Sc.set(this.auth._key(),e)}return this.bypassAuthState||Sc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function V1(n,e){const t=L1(e),i=M1(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function O1(n,e){Sc.set(n._key(),e)}function M1(n){return Wr(n._redirectPersistence)}function L1(n){return Ic(N1,n.config.apiKey,n.name)}async function F1(n,e,t=!1){if(Wn(n.app))return Promise.reject(ji(n));const i=ch(n),o=C1(i,e),c=await new D1(i,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
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
 */const U1=600*1e3;class j1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!z1(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!iE(e)){const o=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";t.onError(yr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=U1&&this.cachedEventUids.clear(),this.cachedEventUids.has(pv(e))}saveEventToCache(e){this.cachedEventUids.add(pv(e)),this.lastProcessedEventTime=Date.now()}}function pv(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function iE({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function z1(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iE(n);default:return!1}}/**
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
 */const $1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,W1=/^https?/;async function q1(n){if(n.config.emulator)return;const{authorizedDomains:e}=await B1(n);for(const t of e)try{if(H1(t))return}catch{}Gr(n,"unauthorized-domain")}function H1(n){const e=Uf(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!W1.test(t))return!1;if($1.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const G1=new Ml(3e4,6e4);function mv(){const n=vr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function K1(n){return new Promise((e,t)=>{var o,l,c;function i(){mv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mv(),t(yr(n,"network-request-failed"))},timeout:G1.get()})}if((l=(o=vr().gapi)==null?void 0:o.iframes)!=null&&l.Iframe)e(gapi.iframes.getContext());else if((c=vr().gapi)!=null&&c.load)i();else{const f=XC("iframefcb");return vr()[f]=()=>{gapi.load?i():t(yr(n,"network-request-failed"))},YC(`${JC()}?onload=${f}`).catch(m=>t(m))}}).catch(e=>{throw Ac=null,e})}let Ac=null;function Q1(n){return Ac=Ac||K1(n),Ac}/**
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
 */const Y1=new Ml(5e3,15e3),J1="__/auth/iframe",X1="emulator/auth/iframe",Z1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ek=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tk(n){const e=n.config;ke(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ip(e,X1):`https://${n.config.authDomain}/${J1}`,i={apiKey:e.apiKey,appName:n.name,v:aa},o=ek.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${Ol(i).slice(1)}`}async function nk(n){const e=await Q1(n),t=vr().gapi;return ke(t,n,"internal-error"),e.open({where:document.body,url:tk(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Z1,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const c=yr(n,"network-request-failed"),f=vr().setTimeout(()=>{l(c)},Y1.get());function m(){vr().clearTimeout(f),o(i)}i.ping(m).then(m,()=>{l(c)})}))}/**
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
 */const rk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ik=500,sk=600,ok="_blank",ak="http://localhost";class gv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lk(n,e,t,i=ik,o=sk){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const m={...rk,width:i.toString(),height:o.toString(),top:l,left:c},y=Yt().toLowerCase();t&&(f=Fw(y)?ok:t),Mw(y)&&(e=e||ak,m.scrollbars="yes");const _=Object.entries(m).reduce((I,[D,W])=>`${I}${D}=${W},`,"");if(BC(y)&&f!=="_self")return uk(e||"",f),new gv(null);const E=window.open(e||"",f,_);ke(E,n,"popup-blocked");try{E.focus()}catch{}return new gv(E)}function uk(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const ck="__/auth/handler",hk="emulator/auth/handler",dk=encodeURIComponent("fac");async function yv(n,e,t,i,o,l){ke(n.config.authDomain,n,"auth-domain-config-required"),ke(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:aa,eventId:o};if(e instanceof Gw){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",jS(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,E]of Object.entries({}))c[_]=E}if(e instanceof Ll){const _=e.getScopes().filter(E=>E!=="");_.length>0&&(c.scopes=_.join(","))}n.tenantId&&(c.tid=n.tenantId);const f=c;for(const _ of Object.keys(f))f[_]===void 0&&delete f[_];const m=await n._getAppCheckToken(),y=m?`#${dk}=${encodeURIComponent(m)}`:"";return`${fk(n)}?${Ol(f).slice(1)}${y}`}function fk({config:n}){return n.emulator?Ip(n,hk):`https://${n.authDomain}/${ck}`}/**
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
 */const vf="webStorageSupport";class pk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xw,this._completeRedirectFn=F1,this._overrideRedirectResult=O1}async _openPopup(e,t,i,o){var c;Kr((c=this.eventManagers[e._key()])==null?void 0:c.manager,"_initialize() not called before _openPopup()");const l=await yv(e,t,i,Uf(),o);return lk(e,l,Cp())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await yv(e,t,i,Uf(),o);return y1(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Kr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await nk(e),i=new j1(e);return t.register("authEvent",o=>(ke(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(vf,{type:vf},o=>{var c;const l=(c=o==null?void 0:o[0])==null?void 0:c[vf];l!==void 0&&t(!!l),Gr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=q1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return $w()||Lw()||Ap()}}const mk=pk;var vv="@firebase/auth",_v="1.12.0";/**
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
 */function yk(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function vk(n){Tr(new Gn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:f}=i.options;ke(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const m={apiKey:c,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ww(n)},y=new KC(i,o,l,m);return e1(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Tr(new Gn("auth-internal",e=>{const t=ch(e.getProvider("auth").getImmediate());return(i=>new gk(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dn(vv,_v,yk(n)),Dn(vv,_v,"esm2020")}/**
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
 */const _k=300,wk=Y_("authIdTokenMaxAge")||_k;let wv=null;const Ek=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>wk)return;const o=t==null?void 0:t.token;wv!==o&&(wv=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Tk(n=mp()){const e=qs(n,"auth");if(e.isInitialized())return e.getImmediate();const t=ZC(n,{popupRedirectResolver:mk,persistence:[R1,p1,Xw]}),i=Y_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const c=Ek(l.toString());h1(t,c,()=>c(t.currentUser)),c1(t,f=>c(f))}}const o=K_("auth");return o&&t1(t,`http://${o}`),t}function Ik(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}QC({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=yr("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",Ik().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});vk("Browser");var Ev=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zi,sE;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,S){function C(){}C.prototype=S.prototype,R.F=S.prototype,R.prototype=new C,R.prototype.constructor=R,R.D=function(b,x,V){for(var k=Array(arguments.length-2),He=2;He<arguments.length;He++)k[He-2]=arguments[He];return S.prototype[x].apply(b,k)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,t),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(R,S,C){C||(C=0);const b=Array(16);if(typeof S=="string")for(var x=0;x<16;++x)b[x]=S.charCodeAt(C++)|S.charCodeAt(C++)<<8|S.charCodeAt(C++)<<16|S.charCodeAt(C++)<<24;else for(x=0;x<16;++x)b[x]=S[C++]|S[C++]<<8|S[C++]<<16|S[C++]<<24;S=R.g[0],C=R.g[1],x=R.g[2];let V=R.g[3],k;k=S+(V^C&(x^V))+b[0]+3614090360&4294967295,S=C+(k<<7&4294967295|k>>>25),k=V+(x^S&(C^x))+b[1]+3905402710&4294967295,V=S+(k<<12&4294967295|k>>>20),k=x+(C^V&(S^C))+b[2]+606105819&4294967295,x=V+(k<<17&4294967295|k>>>15),k=C+(S^x&(V^S))+b[3]+3250441966&4294967295,C=x+(k<<22&4294967295|k>>>10),k=S+(V^C&(x^V))+b[4]+4118548399&4294967295,S=C+(k<<7&4294967295|k>>>25),k=V+(x^S&(C^x))+b[5]+1200080426&4294967295,V=S+(k<<12&4294967295|k>>>20),k=x+(C^V&(S^C))+b[6]+2821735955&4294967295,x=V+(k<<17&4294967295|k>>>15),k=C+(S^x&(V^S))+b[7]+4249261313&4294967295,C=x+(k<<22&4294967295|k>>>10),k=S+(V^C&(x^V))+b[8]+1770035416&4294967295,S=C+(k<<7&4294967295|k>>>25),k=V+(x^S&(C^x))+b[9]+2336552879&4294967295,V=S+(k<<12&4294967295|k>>>20),k=x+(C^V&(S^C))+b[10]+4294925233&4294967295,x=V+(k<<17&4294967295|k>>>15),k=C+(S^x&(V^S))+b[11]+2304563134&4294967295,C=x+(k<<22&4294967295|k>>>10),k=S+(V^C&(x^V))+b[12]+1804603682&4294967295,S=C+(k<<7&4294967295|k>>>25),k=V+(x^S&(C^x))+b[13]+4254626195&4294967295,V=S+(k<<12&4294967295|k>>>20),k=x+(C^V&(S^C))+b[14]+2792965006&4294967295,x=V+(k<<17&4294967295|k>>>15),k=C+(S^x&(V^S))+b[15]+1236535329&4294967295,C=x+(k<<22&4294967295|k>>>10),k=S+(x^V&(C^x))+b[1]+4129170786&4294967295,S=C+(k<<5&4294967295|k>>>27),k=V+(C^x&(S^C))+b[6]+3225465664&4294967295,V=S+(k<<9&4294967295|k>>>23),k=x+(S^C&(V^S))+b[11]+643717713&4294967295,x=V+(k<<14&4294967295|k>>>18),k=C+(V^S&(x^V))+b[0]+3921069994&4294967295,C=x+(k<<20&4294967295|k>>>12),k=S+(x^V&(C^x))+b[5]+3593408605&4294967295,S=C+(k<<5&4294967295|k>>>27),k=V+(C^x&(S^C))+b[10]+38016083&4294967295,V=S+(k<<9&4294967295|k>>>23),k=x+(S^C&(V^S))+b[15]+3634488961&4294967295,x=V+(k<<14&4294967295|k>>>18),k=C+(V^S&(x^V))+b[4]+3889429448&4294967295,C=x+(k<<20&4294967295|k>>>12),k=S+(x^V&(C^x))+b[9]+568446438&4294967295,S=C+(k<<5&4294967295|k>>>27),k=V+(C^x&(S^C))+b[14]+3275163606&4294967295,V=S+(k<<9&4294967295|k>>>23),k=x+(S^C&(V^S))+b[3]+4107603335&4294967295,x=V+(k<<14&4294967295|k>>>18),k=C+(V^S&(x^V))+b[8]+1163531501&4294967295,C=x+(k<<20&4294967295|k>>>12),k=S+(x^V&(C^x))+b[13]+2850285829&4294967295,S=C+(k<<5&4294967295|k>>>27),k=V+(C^x&(S^C))+b[2]+4243563512&4294967295,V=S+(k<<9&4294967295|k>>>23),k=x+(S^C&(V^S))+b[7]+1735328473&4294967295,x=V+(k<<14&4294967295|k>>>18),k=C+(V^S&(x^V))+b[12]+2368359562&4294967295,C=x+(k<<20&4294967295|k>>>12),k=S+(C^x^V)+b[5]+4294588738&4294967295,S=C+(k<<4&4294967295|k>>>28),k=V+(S^C^x)+b[8]+2272392833&4294967295,V=S+(k<<11&4294967295|k>>>21),k=x+(V^S^C)+b[11]+1839030562&4294967295,x=V+(k<<16&4294967295|k>>>16),k=C+(x^V^S)+b[14]+4259657740&4294967295,C=x+(k<<23&4294967295|k>>>9),k=S+(C^x^V)+b[1]+2763975236&4294967295,S=C+(k<<4&4294967295|k>>>28),k=V+(S^C^x)+b[4]+1272893353&4294967295,V=S+(k<<11&4294967295|k>>>21),k=x+(V^S^C)+b[7]+4139469664&4294967295,x=V+(k<<16&4294967295|k>>>16),k=C+(x^V^S)+b[10]+3200236656&4294967295,C=x+(k<<23&4294967295|k>>>9),k=S+(C^x^V)+b[13]+681279174&4294967295,S=C+(k<<4&4294967295|k>>>28),k=V+(S^C^x)+b[0]+3936430074&4294967295,V=S+(k<<11&4294967295|k>>>21),k=x+(V^S^C)+b[3]+3572445317&4294967295,x=V+(k<<16&4294967295|k>>>16),k=C+(x^V^S)+b[6]+76029189&4294967295,C=x+(k<<23&4294967295|k>>>9),k=S+(C^x^V)+b[9]+3654602809&4294967295,S=C+(k<<4&4294967295|k>>>28),k=V+(S^C^x)+b[12]+3873151461&4294967295,V=S+(k<<11&4294967295|k>>>21),k=x+(V^S^C)+b[15]+530742520&4294967295,x=V+(k<<16&4294967295|k>>>16),k=C+(x^V^S)+b[2]+3299628645&4294967295,C=x+(k<<23&4294967295|k>>>9),k=S+(x^(C|~V))+b[0]+4096336452&4294967295,S=C+(k<<6&4294967295|k>>>26),k=V+(C^(S|~x))+b[7]+1126891415&4294967295,V=S+(k<<10&4294967295|k>>>22),k=x+(S^(V|~C))+b[14]+2878612391&4294967295,x=V+(k<<15&4294967295|k>>>17),k=C+(V^(x|~S))+b[5]+4237533241&4294967295,C=x+(k<<21&4294967295|k>>>11),k=S+(x^(C|~V))+b[12]+1700485571&4294967295,S=C+(k<<6&4294967295|k>>>26),k=V+(C^(S|~x))+b[3]+2399980690&4294967295,V=S+(k<<10&4294967295|k>>>22),k=x+(S^(V|~C))+b[10]+4293915773&4294967295,x=V+(k<<15&4294967295|k>>>17),k=C+(V^(x|~S))+b[1]+2240044497&4294967295,C=x+(k<<21&4294967295|k>>>11),k=S+(x^(C|~V))+b[8]+1873313359&4294967295,S=C+(k<<6&4294967295|k>>>26),k=V+(C^(S|~x))+b[15]+4264355552&4294967295,V=S+(k<<10&4294967295|k>>>22),k=x+(S^(V|~C))+b[6]+2734768916&4294967295,x=V+(k<<15&4294967295|k>>>17),k=C+(V^(x|~S))+b[13]+1309151649&4294967295,C=x+(k<<21&4294967295|k>>>11),k=S+(x^(C|~V))+b[4]+4149444226&4294967295,S=C+(k<<6&4294967295|k>>>26),k=V+(C^(S|~x))+b[11]+3174756917&4294967295,V=S+(k<<10&4294967295|k>>>22),k=x+(S^(V|~C))+b[2]+718787259&4294967295,x=V+(k<<15&4294967295|k>>>17),k=C+(V^(x|~S))+b[9]+3951481745&4294967295,R.g[0]=R.g[0]+S&4294967295,R.g[1]=R.g[1]+(x+(k<<21&4294967295|k>>>11))&4294967295,R.g[2]=R.g[2]+x&4294967295,R.g[3]=R.g[3]+V&4294967295}i.prototype.v=function(R,S){S===void 0&&(S=R.length);const C=S-this.blockSize,b=this.C;let x=this.h,V=0;for(;V<S;){if(x==0)for(;V<=C;)o(this,R,V),V+=this.blockSize;if(typeof R=="string"){for(;V<S;)if(b[x++]=R.charCodeAt(V++),x==this.blockSize){o(this,b),x=0;break}}else for(;V<S;)if(b[x++]=R[V++],x==this.blockSize){o(this,b),x=0;break}}this.h=x,this.o+=S},i.prototype.A=function(){var R=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);R[0]=128;for(var S=1;S<R.length-8;++S)R[S]=0;S=this.o*8;for(var C=R.length-8;C<R.length;++C)R[C]=S&255,S/=256;for(this.v(R),R=Array(16),S=0,C=0;C<4;++C)for(let b=0;b<32;b+=8)R[S++]=this.g[C]>>>b&255;return R};function l(R,S){var C=f;return Object.prototype.hasOwnProperty.call(C,R)?C[R]:C[R]=S(R)}function c(R,S){this.h=S;const C=[];let b=!0;for(let x=R.length-1;x>=0;x--){const V=R[x]|0;b&&V==S||(C[x]=V,b=!1)}this.g=C}var f={};function m(R){return-128<=R&&R<128?l(R,function(S){return new c([S|0],S<0?-1:0)}):new c([R|0],R<0?-1:0)}function y(R){if(isNaN(R)||!isFinite(R))return E;if(R<0)return z(y(-R));const S=[];let C=1;for(let b=0;R>=C;b++)S[b]=R/C|0,C*=4294967296;return new c(S,0)}function _(R,S){if(R.length==0)throw Error("number format error: empty string");if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(R.charAt(0)=="-")return z(_(R.substring(1),S));if(R.indexOf("-")>=0)throw Error('number format error: interior "-" character');const C=y(Math.pow(S,8));let b=E;for(let V=0;V<R.length;V+=8){var x=Math.min(8,R.length-V);const k=parseInt(R.substring(V,V+x),S);x<8?(x=y(Math.pow(S,x)),b=b.j(x).add(y(k))):(b=b.j(C),b=b.add(y(k)))}return b}var E=m(0),I=m(1),D=m(16777216);n=c.prototype,n.m=function(){if(M(this))return-z(this).m();let R=0,S=1;for(let C=0;C<this.g.length;C++){const b=this.i(C);R+=(b>=0?b:4294967296+b)*S,S*=4294967296}return R},n.toString=function(R){if(R=R||10,R<2||36<R)throw Error("radix out of range: "+R);if(W(this))return"0";if(M(this))return"-"+z(this).toString(R);const S=y(Math.pow(R,6));var C=this;let b="";for(;;){const x=ue(C,S).g;C=Z(C,x.j(S));let V=((C.g.length>0?C.g[0]:C.h)>>>0).toString(R);if(C=x,W(C))return V+b;for(;V.length<6;)V="0"+V;b=V+b}},n.i=function(R){return R<0?0:R<this.g.length?this.g[R]:this.h};function W(R){if(R.h!=0)return!1;for(let S=0;S<R.g.length;S++)if(R.g[S]!=0)return!1;return!0}function M(R){return R.h==-1}n.l=function(R){return R=Z(this,R),M(R)?-1:W(R)?0:1};function z(R){const S=R.g.length,C=[];for(let b=0;b<S;b++)C[b]=~R.g[b];return new c(C,~R.h).add(I)}n.abs=function(){return M(this)?z(this):this},n.add=function(R){const S=Math.max(this.g.length,R.g.length),C=[];let b=0;for(let x=0;x<=S;x++){let V=b+(this.i(x)&65535)+(R.i(x)&65535),k=(V>>>16)+(this.i(x)>>>16)+(R.i(x)>>>16);b=k>>>16,V&=65535,k&=65535,C[x]=k<<16|V}return new c(C,C[C.length-1]&-2147483648?-1:0)};function Z(R,S){return R.add(z(S))}n.j=function(R){if(W(this)||W(R))return E;if(M(this))return M(R)?z(this).j(z(R)):z(z(this).j(R));if(M(R))return z(this.j(z(R)));if(this.l(D)<0&&R.l(D)<0)return y(this.m()*R.m());const S=this.g.length+R.g.length,C=[];for(var b=0;b<2*S;b++)C[b]=0;for(b=0;b<this.g.length;b++)for(let x=0;x<R.g.length;x++){const V=this.i(b)>>>16,k=this.i(b)&65535,He=R.i(x)>>>16,Ye=R.i(x)&65535;C[2*b+2*x]+=k*Ye,ne(C,2*b+2*x),C[2*b+2*x+1]+=V*Ye,ne(C,2*b+2*x+1),C[2*b+2*x+1]+=k*He,ne(C,2*b+2*x+1),C[2*b+2*x+2]+=V*He,ne(C,2*b+2*x+2)}for(R=0;R<S;R++)C[R]=C[2*R+1]<<16|C[2*R];for(R=S;R<2*S;R++)C[R]=0;return new c(C,0)};function ne(R,S){for(;(R[S]&65535)!=R[S];)R[S+1]+=R[S]>>>16,R[S]&=65535,S++}function ie(R,S){this.g=R,this.h=S}function ue(R,S){if(W(S))throw Error("division by zero");if(W(R))return new ie(E,E);if(M(R))return S=ue(z(R),S),new ie(z(S.g),z(S.h));if(M(S))return S=ue(R,z(S)),new ie(z(S.g),S.h);if(R.g.length>30){if(M(R)||M(S))throw Error("slowDivide_ only works with positive integers.");for(var C=I,b=S;b.l(R)<=0;)C=ve(C),b=ve(b);var x=we(C,1),V=we(b,1);for(b=we(b,2),C=we(C,2);!W(b);){var k=V.add(b);k.l(R)<=0&&(x=x.add(C),V=k),b=we(b,1),C=we(C,1)}return S=Z(R,x.j(S)),new ie(x,S)}for(x=E;R.l(S)>=0;){for(C=Math.max(1,Math.floor(R.m()/S.m())),b=Math.ceil(Math.log(C)/Math.LN2),b=b<=48?1:Math.pow(2,b-48),V=y(C),k=V.j(S);M(k)||k.l(R)>0;)C-=b,V=y(C),k=V.j(S);W(V)&&(V=I),x=x.add(V),R=Z(R,k)}return new ie(x,R)}n.B=function(R){return ue(this,R).h},n.and=function(R){const S=Math.max(this.g.length,R.g.length),C=[];for(let b=0;b<S;b++)C[b]=this.i(b)&R.i(b);return new c(C,this.h&R.h)},n.or=function(R){const S=Math.max(this.g.length,R.g.length),C=[];for(let b=0;b<S;b++)C[b]=this.i(b)|R.i(b);return new c(C,this.h|R.h)},n.xor=function(R){const S=Math.max(this.g.length,R.g.length),C=[];for(let b=0;b<S;b++)C[b]=this.i(b)^R.i(b);return new c(C,this.h^R.h)};function ve(R){const S=R.g.length+1,C=[];for(let b=0;b<S;b++)C[b]=R.i(b)<<1|R.i(b-1)>>>31;return new c(C,R.h)}function we(R,S){const C=S>>5;S%=32;const b=R.g.length-C,x=[];for(let V=0;V<b;V++)x[V]=S>0?R.i(V+C)>>>S|R.i(V+C+1)<<32-S:R.i(V+C);return new c(x,R.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,sE=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.B,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=y,c.fromString=_,zi=c}).apply(typeof Ev<"u"?Ev:typeof self<"u"?self:typeof window<"u"?window:{});var cc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var oE,fl,aE,Rc,Bf,lE,uE,cE;(function(){var n,e=Object.defineProperty;function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof cc=="object"&&cc];for(var g=0;g<u.length;++g){var v=u[g];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var i=t(this);function o(u,g){if(g)e:{var v=i;u=u.split(".");for(var T=0;T<u.length-1;T++){var U=u[T];if(!(U in v))break e;v=v[U]}u=u[u.length-1],T=v[u],g=g(T),g!=T&&g!=null&&e(v,u,{configurable:!0,writable:!0,value:g})}}o("Symbol.dispose",function(u){return u||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(u){return u||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(u){return u||function(g){var v=[],T;for(T in g)Object.prototype.hasOwnProperty.call(g,T)&&v.push([T,g[T]]);return v}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},c=this||self;function f(u){var g=typeof u;return g=="object"&&u!=null||g=="function"}function m(u,g,v){return u.call.apply(u.bind,arguments)}function y(u,g,v){return y=m,y.apply(null,arguments)}function _(u,g){var v=Array.prototype.slice.call(arguments,1);return function(){var T=v.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function E(u,g){function v(){}v.prototype=g.prototype,u.Z=g.prototype,u.prototype=new v,u.prototype.constructor=u,u.Ob=function(T,U,$){for(var te=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)te[xe-2]=arguments[xe];return g.prototype[U].apply(T,te)}}var I=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?u=>u&&AsyncContext.Snapshot.wrap(u):u=>u;function D(u){const g=u.length;if(g>0){const v=Array(g);for(let T=0;T<g;T++)v[T]=u[T];return v}return[]}function W(u,g){for(let T=1;T<arguments.length;T++){const U=arguments[T];var v=typeof U;if(v=v!="object"?v:U?Array.isArray(U)?"array":v:"null",v=="array"||v=="object"&&typeof U.length=="number"){v=u.length||0;const $=U.length||0;u.length=v+$;for(let te=0;te<$;te++)u[v+te]=U[te]}else u.push(U)}}class M{constructor(g,v){this.i=g,this.j=v,this.h=0,this.g=null}get(){let g;return this.h>0?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function z(u){c.setTimeout(()=>{throw u},0)}function Z(){var u=R;let g=null;return u.g&&(g=u.g,u.g=u.g.next,u.g||(u.h=null),g.next=null),g}class ne{constructor(){this.h=this.g=null}add(g,v){const T=ie.get();T.set(g,v),this.h?this.h.next=T:this.g=T,this.h=T}}var ie=new M(()=>new ue,u=>u.reset());class ue{constructor(){this.next=this.g=this.h=null}set(g,v){this.h=g,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ve,we=!1,R=new ne,S=()=>{const u=Promise.resolve(void 0);ve=()=>{u.then(C)}};function C(){for(var u;u=Z();){try{u.h.call(u.g)}catch(v){z(v)}var g=ie;g.j(u),g.h<100&&(g.h++,u.next=g.g,g.g=u)}we=!1}function b(){this.u=this.u,this.C=this.C}b.prototype.u=!1,b.prototype.dispose=function(){this.u||(this.u=!0,this.N())},b.prototype[Symbol.dispose]=function(){this.dispose()},b.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function x(u,g){this.type=u,this.g=this.target=g,this.defaultPrevented=!1}x.prototype.h=function(){this.defaultPrevented=!0};var V=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var u=!1,g=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const v=()=>{};c.addEventListener("test",v,g),c.removeEventListener("test",v,g)}catch{}return u})();function k(u){return/^[\s\xa0]*$/.test(u)}function He(u,g){x.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u&&this.init(u,g)}E(He,x),He.prototype.init=function(u,g){const v=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;this.target=u.target||u.srcElement,this.g=g,g=u.relatedTarget,g||(v=="mouseover"?g=u.fromElement:v=="mouseout"&&(g=u.toElement)),this.relatedTarget=g,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=u.pointerType,this.state=u.state,this.i=u,u.defaultPrevented&&He.Z.h.call(this)},He.prototype.h=function(){He.Z.h.call(this);const u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Ye="closure_listenable_"+(Math.random()*1e6|0),Ve=0;function je(u,g,v,T,U){this.listener=u,this.proxy=null,this.src=g,this.type=v,this.capture=!!T,this.ha=U,this.key=++Ve,this.da=this.fa=!1}function q(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function ye(u,g,v){for(const T in u)g.call(v,u[T],T,u)}function se(u,g){for(const v in u)g.call(void 0,u[v],v,u)}function O(u){const g={};for(const v in u)g[v]=u[v];return g}const Q="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function he(u,g){let v,T;for(let U=1;U<arguments.length;U++){T=arguments[U];for(v in T)u[v]=T[v];for(let $=0;$<Q.length;$++)v=Q[$],Object.prototype.hasOwnProperty.call(T,v)&&(u[v]=T[v])}}function _e(u){this.src=u,this.g={},this.h=0}_e.prototype.add=function(u,g,v,T,U){const $=u.toString();u=this.g[$],u||(u=this.g[$]=[],this.h++);const te=Ne(u,g,T,U);return te>-1?(g=u[te],v||(g.fa=!1)):(g=new je(g,this.src,$,!!T,U),g.fa=v,u.push(g)),g};function be(u,g){const v=g.type;if(v in u.g){var T=u.g[v],U=Array.prototype.indexOf.call(T,g,void 0),$;($=U>=0)&&Array.prototype.splice.call(T,U,1),$&&(q(g),u.g[v].length==0&&(delete u.g[v],u.h--))}}function Ne(u,g,v,T){for(let U=0;U<u.length;++U){const $=u[U];if(!$.da&&$.listener==g&&$.capture==!!v&&$.ha==T)return U}return-1}var Ae="closure_lm_"+(Math.random()*1e6|0),Oe={};function Be(u,g,v,T,U){if(Array.isArray(g)){for(let $=0;$<g.length;$++)Be(u,g[$],v,T,U);return null}return v=ga(v),u&&u[Ye]?u.J(g,v,f(T)?!!T.capture:!1,U):ot(u,g,v,!1,T,U)}function ot(u,g,v,T,U,$){if(!g)throw Error("Invalid event type");const te=f(U)?!!U.capture:!!U;let xe=Qs(u);if(xe||(u[Ae]=xe=new _e(u)),v=xe.add(g,v,T,te,$),v.proxy)return v;if(T=oe(),v.proxy=T,T.src=u,T.listener=v,u.addEventListener)V||(U=te),U===void 0&&(U=!1),u.addEventListener(g.toString(),T,U);else if(u.attachEvent)u.attachEvent(Ks(g.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return v}function oe(){function u(v){return g.call(u.src,u.listener,v)}const g=Gl;return u}function Ge(u,g,v,T,U){if(Array.isArray(g))for(var $=0;$<g.length;$++)Ge(u,g[$],v,T,U);else T=f(T)?!!T.capture:!!T,v=ga(v),u&&u[Ye]?(u=u.i,$=String(g).toString(),$ in u.g&&(g=u.g[$],v=Ne(g,v,T,U),v>-1&&(q(g[v]),Array.prototype.splice.call(g,v,1),g.length==0&&(delete u.g[$],u.h--)))):u&&(u=Qs(u))&&(g=u.g[g.toString()],u=-1,g&&(u=Ne(g,v,T,U)),(v=u>-1?g[u]:null)&&Jt(v))}function Jt(u){if(typeof u!="number"&&u&&!u.da){var g=u.src;if(g&&g[Ye])be(g.i,u);else{var v=u.type,T=u.proxy;g.removeEventListener?g.removeEventListener(v,T,u.capture):g.detachEvent?g.detachEvent(Ks(v),T):g.addListener&&g.removeListener&&g.removeListener(T),(v=Qs(g))?(be(v,u),v.h==0&&(v.src=null,g[Ae]=null)):q(u)}}}function Ks(u){return u in Oe?Oe[u]:Oe[u]="on"+u}function Gl(u,g){if(u.da)u=!0;else{g=new He(g,this);const v=u.listener,T=u.ha||u.src;u.fa&&Jt(u),u=v.call(T,g)}return u}function Qs(u){return u=u[Ae],u instanceof _e?u:null}var is="__closure_events_fn_"+(Math.random()*1e9>>>0);function ga(u){return typeof u=="function"?u:(u[is]||(u[is]=function(g){return u.handleEvent(g)}),u[is])}function _t(){b.call(this),this.i=new _e(this),this.M=this,this.G=null}E(_t,b),_t.prototype[Ye]=!0,_t.prototype.removeEventListener=function(u,g,v,T){Ge(this,u,g,v,T)};function pt(u,g){var v,T=u.G;if(T)for(v=[];T;T=T.G)v.push(T);if(u=u.M,T=g.type||g,typeof g=="string")g=new x(g,u);else if(g instanceof x)g.target=g.target||u;else{var U=g;g=new x(T,u),he(g,U)}U=!0;let $,te;if(v)for(te=v.length-1;te>=0;te--)$=g.g=v[te],U=Vn($,T,!0,g)&&U;if($=g.g=u,U=Vn($,T,!0,g)&&U,U=Vn($,T,!1,g)&&U,v)for(te=0;te<v.length;te++)$=g.g=v[te],U=Vn($,T,!1,g)&&U}_t.prototype.N=function(){if(_t.Z.N.call(this),this.i){var u=this.i;for(const g in u.g){const v=u.g[g];for(let T=0;T<v.length;T++)q(v[T]);delete u.g[g],u.h--}}this.G=null},_t.prototype.J=function(u,g,v,T){return this.i.add(String(u),g,!1,v,T)},_t.prototype.K=function(u,g,v,T){return this.i.add(String(u),g,!0,v,T)};function Vn(u,g,v,T){if(g=u.i.g[String(g)],!g)return!0;g=g.concat();let U=!0;for(let $=0;$<g.length;++$){const te=g[$];if(te&&!te.da&&te.capture==v){const xe=te.listener,mt=te.ha||te.src;te.fa&&be(u.i,te),U=xe.call(mt,T)!==!1&&U}}return U&&!T.defaultPrevented}function ya(u,g){if(typeof u!="function")if(u&&typeof u.handleEvent=="function")u=y(u.handleEvent,u);else throw Error("Invalid listener argument");return Number(g)>2147483647?-1:c.setTimeout(u,g||0)}function va(u){u.g=ya(()=>{u.g=null,u.i&&(u.i=!1,va(u))},u.l);const g=u.h;u.h=null,u.m.apply(null,g)}class Kl extends b{constructor(g,v){super(),this.m=g,this.l=v,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:va(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ei(u){b.call(this),this.h=u,this.g={}}E(ei,b);var _a=[];function Ys(u){ye(u.g,function(g,v){this.g.hasOwnProperty(v)&&Jt(g)},u),u.g={}}ei.prototype.N=function(){ei.Z.N.call(this),Ys(this)},ei.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ti=c.JSON.stringify,Ql=c.JSON.parse,ss=class{stringify(u){return c.JSON.stringify(u,void 0)}parse(u){return c.JSON.parse(u,void 0)}};function ni(){}function Yl(){}var ri={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Js(){x.call(this,"d")}E(Js,x);function wa(){x.call(this,"c")}E(wa,x);var On={},Xs=null;function ii(){return Xs=Xs||new _t}On.Ia="serverreachability";function Zs(u){x.call(this,On.Ia,u)}E(Zs,x);function Sr(u){const g=ii();pt(g,new Zs(g))}On.STAT_EVENT="statevent";function Ar(u,g){x.call(this,On.STAT_EVENT,u),this.stat=g}E(Ar,x);function ht(u){const g=ii();pt(g,new Ar(g,u))}On.Ja="timingevent";function Ea(u,g){x.call(this,On.Ja,u),this.size=g}E(Ea,x);function si(u,g){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){u()},g)}function oi(){this.g=!0}oi.prototype.ua=function(){this.g=!1};function Jl(u,g,v,T,U,$){u.info(function(){if(u.g)if($){var te="",xe=$.split("&");for(let Je=0;Je<xe.length;Je++){var mt=xe[Je].split("=");if(mt.length>1){const wt=mt[0];mt=mt[1];const gn=wt.split("_");te=gn.length>=2&&gn[1]=="type"?te+(wt+"="+mt+"&"):te+(wt+"=redacted&")}}}else te=null;else te=$;return"XMLHTTP REQ ("+T+") [attempt "+U+"]: "+g+`
`+v+`
`+te})}function Xl(u,g,v,T,U,$,te){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+U+"]: "+g+`
`+v+`
`+$+" "+te})}function Jn(u,g,v,T){u.info(function(){return"XMLHTTP TEXT ("+g+"): "+os(u,v)+(T?" "+T:"")})}function Zl(u,g){u.info(function(){return"TIMEOUT: "+g})}oi.prototype.info=function(){};function os(u,g){if(!u.g)return g;if(!g)return null;try{const $=JSON.parse(g);if($){for(u=0;u<$.length;u++)if(Array.isArray($[u])){var v=$[u];if(!(v.length<2)){var T=v[1];if(Array.isArray(T)&&!(T.length<1)){var U=T[0];if(U!="noop"&&U!="stop"&&U!="close")for(let te=1;te<T.length;te++)T[te]=""}}}}return ti($)}catch{return g}}var ai={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},li={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},eu;function Rr(){}E(Rr,ni),Rr.prototype.g=function(){return new XMLHttpRequest},eu=new Rr;function Xn(u){return encodeURIComponent(String(u))}function eo(u){var g=1;u=u.split(":");const v=[];for(;g>0&&u.length;)v.push(u.shift()),g--;return u.length&&v.push(u.join(":")),v}function An(u,g,v,T){this.j=u,this.i=g,this.l=v,this.S=T||1,this.V=new ei(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new tu}function tu(){this.i=null,this.g="",this.h=!1}var nu={},Ta={};function Mn(u,g,v){u.M=1,u.A=kr(Rn(g)),u.u=v,u.R=!0,Ia(u,null)}function Ia(u,g){u.F=Date.now(),as(u),u.B=Rn(u.A);var v=u.B,T=u.S;Array.isArray(T)||(T=[String(T)]),Da(v.i,"t",T),u.C=0,v=u.j.L,u.h=new tu,u.g=du(u.j,v?g:null,!u.u),u.P>0&&(u.O=new Kl(y(u.Y,u,u.g),u.P)),g=u.V,v=u.g,T=u.ba;var U="readystatechange";Array.isArray(U)||(U&&(_a[0]=U.toString()),U=_a);for(let $=0;$<U.length;$++){const te=Be(v,U[$],T||g.handleEvent,!1,g.h||g);if(!te)break;g.g[te.key]=te}g=u.J?O(u.J):{},u.u?(u.v||(u.v="POST"),g["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.B,u.v,u.u,g)):(u.v="GET",u.g.ea(u.B,u.v,null,g)),Sr(),Jl(u.i,u.v,u.B,u.l,u.S,u.u)}An.prototype.ba=function(u){u=u.target;const g=this.O;g&&sr(u)==3?g.j():this.Y(u)},An.prototype.Y=function(u){try{if(u==this.g)e:{const xe=sr(this.g),mt=this.g.ya(),Je=this.g.ca();if(!(xe<3)&&(xe!=3||this.g&&(this.h.h||this.g.la()||cu(this.g)))){this.K||xe!=4||mt==7||(mt==8||Je<=0?Sr(3):Sr(2)),to(this);var g=this.g.ca();this.X=g;var v=ru(this);if(this.o=g==200,Xl(this.i,this.v,this.B,this.l,this.S,xe,g),this.o){if(this.U&&!this.L){t:{if(this.g){var T,U=this.g;if((T=U.g?U.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(T)){var $=T;break t}}$=null}if(u=$)Jn(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,tt(this,u);else{this.o=!1,this.m=3,ht(12),Cr(this),ls(this);break e}}if(this.R){u=!0;let wt;for(;!this.K&&this.C<v.length;)if(wt=su(this,v),wt==Ta){xe==4&&(this.m=4,ht(14),u=!1),Jn(this.i,this.l,null,"[Incomplete Response]");break}else if(wt==nu){this.m=4,ht(15),Jn(this.i,this.l,v,"[Invalid Chunk]"),u=!1;break}else Jn(this.i,this.l,wt,null),tt(this,wt);if(iu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),xe!=4||v.length!=0||this.h.h||(this.m=1,ht(16),u=!1),this.o=this.o&&u,!u)Jn(this.i,this.l,v,"[Invalid Chunked Response]"),Cr(this),ls(this);else if(v.length>0&&!this.W){this.W=!0;var te=this.j;te.g==this&&te.aa&&!te.P&&(te.j.info("Great, no buffering proxy detected. Bytes received: "+v.length),ys(te),te.P=!0,ht(11))}}else Jn(this.i,this.l,v,null),tt(this,v);xe==4&&Cr(this),this.o&&!this.K&&(xe==4?ho(this.j,this):(this.o=!1,as(this)))}else Oa(this.g),g==400&&v.indexOf("Unknown SID")>0?(this.m=3,ht(12)):(this.m=0,ht(13)),Cr(this),ls(this)}}}catch{}finally{}};function ru(u){if(!iu(u))return u.g.la();const g=cu(u.g);if(g==="")return"";let v="";const T=g.length,U=sr(u.g)==4;if(!u.h.i){if(typeof TextDecoder>"u")return Cr(u),ls(u),"";u.h.i=new c.TextDecoder}for(let $=0;$<T;$++)u.h.h=!0,v+=u.h.i.decode(g[$],{stream:!(U&&$==T-1)});return g.length=0,u.h.g+=v,u.C=0,u.h.g}function iu(u){return u.g?u.v=="GET"&&u.M!=2&&u.j.Aa:!1}function su(u,g){var v=u.C,T=g.indexOf(`
`,v);return T==-1?Ta:(v=Number(g.substring(v,T)),isNaN(v)?nu:(T+=1,T+v>g.length?Ta:(g=g.slice(T,T+v),u.C=T+v,g)))}An.prototype.cancel=function(){this.K=!0,Cr(this)};function as(u){u.T=Date.now()+u.H,Sa(u,u.H)}function Sa(u,g){if(u.D!=null)throw Error("WatchDog timer not null");u.D=si(y(u.aa,u),g)}function to(u){u.D&&(c.clearTimeout(u.D),u.D=null)}An.prototype.aa=function(){this.D=null;const u=Date.now();u-this.T>=0?(Zl(this.i,this.B),this.M!=2&&(Sr(),ht(17)),Cr(this),this.m=2,ls(this)):Sa(this,this.T-u)};function ls(u){u.j.I==0||u.K||ho(u.j,u)}function Cr(u){to(u);var g=u.O;g&&typeof g.dispose=="function"&&g.dispose(),u.O=null,Ys(u.V),u.g&&(g=u.g,u.g=null,g.abort(),g.dispose())}function tt(u,g){try{var v=u.j;if(v.I!=0&&(v.g==u||Ra(v.h,u))){if(!u.L&&Ra(v.h,u)&&v.I==3){try{var T=v.Ba.g.parse(g)}catch{T=null}if(Array.isArray(T)&&T.length==3){var U=T;if(U[0]==0){e:if(!v.v){if(v.g)if(v.g.F+3e3<u.F)co(v),pn(v);else break e;lr(v),ht(18)}}else v.xa=U[1],0<v.xa-v.K&&U[2]<37500&&v.F&&v.A==0&&!v.C&&(v.C=si(y(v.Va,v),6e3));us(v.h)<=1&&v.ta&&(v.ta=void 0)}else mn(v,11)}else if((u.L||v.g==u)&&co(v),!k(g))for(U=v.Ba.g.parse(g),g=0;g<U.length;g++){let Je=U[g];const wt=Je[0];if(!(wt<=v.K))if(v.K=wt,Je=Je[1],v.I==2)if(Je[0]=="c"){v.M=Je[1],v.ba=Je[2];const gn=Je[3];gn!=null&&(v.ka=gn,v.j.info("VER="+v.ka));const Dr=Je[4];Dr!=null&&(v.za=Dr,v.j.info("SVER="+v.za));const ur=Je[5];ur!=null&&typeof ur=="number"&&ur>0&&(T=1.5*ur,v.O=T,v.j.info("backChannelRequestTimeoutMs_="+T)),T=v;const cr=u.g;if(cr){const mo=cr.g?cr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(mo){var $=T.h;$.g||mo.indexOf("spdy")==-1&&mo.indexOf("quic")==-1&&mo.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(ro($,$.h),$.h=null))}if(T.G){const Fa=cr.g?cr.g.getResponseHeader("X-HTTP-Session-Id"):null;Fa&&(T.wa=Fa,Qe(T.J,T.G,Fa))}}v.I=3,v.l&&v.l.ra(),v.aa&&(v.T=Date.now()-u.F,v.j.info("Handshake RTT: "+v.T+"ms")),T=v;var te=u;if(T.na=La(T,T.L?T.ba:null,T.W),te.L){cs(T.h,te);var xe=te,mt=T.O;mt&&(xe.H=mt),xe.D&&(to(xe),as(xe)),T.g=te}else $t(T);v.i.length>0&&Nr(v)}else Je[0]!="stop"&&Je[0]!="close"||mn(v,7);else v.I==3&&(Je[0]=="stop"||Je[0]=="close"?Je[0]=="stop"?mn(v,7):lo(v):Je[0]!="noop"&&v.l&&v.l.qa(Je),v.A=0)}}Sr(4)}catch{}}var Vh=class{constructor(u,g){this.g=u,this.map=g}};function no(u){this.l=u||10,c.PerformanceNavigationTiming?(u=c.performance.getEntriesByType("navigation"),u=u.length>0&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Aa(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function us(u){return u.h?1:u.g?u.g.size:0}function Ra(u,g){return u.h?u.h==g:u.g?u.g.has(g):!1}function ro(u,g){u.g?u.g.add(g):u.h=g}function cs(u,g){u.h&&u.h==g?u.h=null:u.g&&u.g.has(g)&&u.g.delete(g)}no.prototype.cancel=function(){if(this.i=hn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function hn(u){if(u.h!=null)return u.i.concat(u.h.G);if(u.g!=null&&u.g.size!==0){let g=u.i;for(const v of u.g.values())g=g.concat(v.G);return g}return D(u.i)}var ou=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function dn(u,g){if(u){u=u.split("&");for(let v=0;v<u.length;v++){const T=u[v].indexOf("=");let U,$=null;T>=0?(U=u[v].substring(0,T),$=u[v].substring(T+1)):U=u[v],g(U,$?decodeURIComponent($.replace(/\+/g," ")):"")}}}function Zn(u){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let g;u instanceof Zn?(this.l=u.l,hs(this,u.j),this.o=u.o,this.g=u.g,er(this,u.u),this.h=u.h,ui(this,Va(u.i)),this.m=u.m):u&&(g=String(u).match(ou))?(this.l=!1,hs(this,g[1]||"",!0),this.o=ds(g[2]||""),this.g=ds(g[3]||"",!0),er(this,g[4]),this.h=ds(g[5]||"",!0),ui(this,g[6]||"",!0),this.m=ds(g[7]||"")):(this.l=!1,this.i=new ze(null,this.l))}Zn.prototype.toString=function(){const u=[];var g=this.j;g&&u.push(fs(g,ka,!0),":");var v=this.g;return(v||g=="file")&&(u.push("//"),(g=this.o)&&u.push(fs(g,ka,!0),"@"),u.push(Xn(v).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.u,v!=null&&u.push(":",String(v))),(v=this.h)&&(this.g&&v.charAt(0)!="/"&&u.push("/"),u.push(fs(v,v.charAt(0)=="/"?ps:Pa,!0))),(v=this.i.toString())&&u.push("?",v),(v=this.m)&&u.push("#",fs(v,xa)),u.join("")},Zn.prototype.resolve=function(u){const g=Rn(this);let v=!!u.j;v?hs(g,u.j):v=!!u.o,v?g.o=u.o:v=!!u.g,v?g.g=u.g:v=u.u!=null;var T=u.h;if(v)er(g,u.u);else if(v=!!u.h){if(T.charAt(0)!="/")if(this.g&&!this.h)T="/"+T;else{var U=g.h.lastIndexOf("/");U!=-1&&(T=g.h.slice(0,U+1)+T)}if(U=T,U==".."||U==".")T="";else if(U.indexOf("./")!=-1||U.indexOf("/.")!=-1){T=U.lastIndexOf("/",0)==0,U=U.split("/");const $=[];for(let te=0;te<U.length;){const xe=U[te++];xe=="."?T&&te==U.length&&$.push(""):xe==".."?(($.length>1||$.length==1&&$[0]!="")&&$.pop(),T&&te==U.length&&$.push("")):($.push(xe),T=!0)}T=$.join("/")}else T=U}return v?g.h=T:v=u.i.toString()!=="",v?ui(g,Va(u.i)):v=!!u.m,v&&(g.m=u.m),g};function Rn(u){return new Zn(u)}function hs(u,g,v){u.j=v?ds(g,!0):g,u.j&&(u.j=u.j.replace(/:$/,""))}function er(u,g){if(g){if(g=Number(g),isNaN(g)||g<0)throw Error("Bad port number "+g);u.u=g}else u.u=null}function ui(u,g,v){g instanceof ze?(u.i=g,so(u.i,u.l)):(v||(g=fs(g,Oh)),u.i=new ze(g,u.l))}function Qe(u,g,v){u.i.set(g,v)}function kr(u){return Qe(u,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),u}function ds(u,g){return u?g?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function fs(u,g,v){return typeof u=="string"?(u=encodeURI(u).replace(g,Ca),v&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Ca(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var ka=/[#\/\?@]/g,Pa=/[#\?:]/g,ps=/[#\?]/g,Oh=/[#\?@]/g,xa=/#/g;function ze(u,g){this.h=this.g=null,this.i=u||null,this.j=!!g}function tr(u){u.g||(u.g=new Map,u.h=0,u.i&&dn(u.i,function(g,v){u.add(decodeURIComponent(g.replace(/\+/g," ")),v)}))}n=ze.prototype,n.add=function(u,g){tr(this),this.i=null,u=nr(this,u);let v=this.g.get(u);return v||this.g.set(u,v=[]),v.push(g),this.h+=1,this};function ba(u,g){tr(u),g=nr(u,g),u.g.has(g)&&(u.i=null,u.h-=u.g.get(g).length,u.g.delete(g))}function io(u,g){return tr(u),g=nr(u,g),u.g.has(g)}n.forEach=function(u,g){tr(this),this.g.forEach(function(v,T){v.forEach(function(U){u.call(g,U,T,this)},this)},this)};function Na(u,g){tr(u);let v=[];if(typeof g=="string")io(u,g)&&(v=v.concat(u.g.get(nr(u,g))));else for(u=Array.from(u.g.values()),g=0;g<u.length;g++)v=v.concat(u[g]);return v}n.set=function(u,g){return tr(this),this.i=null,u=nr(this,u),io(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[g]),this.h+=1,this},n.get=function(u,g){return u?(u=Na(this,u),u.length>0?String(u[0]):g):g};function Da(u,g,v){ba(u,g),v.length>0&&(u.i=null,u.g.set(nr(u,g),D(v)),u.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],g=Array.from(this.g.keys());for(let T=0;T<g.length;T++){var v=g[T];const U=Xn(v);v=Na(this,v);for(let $=0;$<v.length;$++){let te=U;v[$]!==""&&(te+="="+Xn(v[$])),u.push(te)}}return this.i=u.join("&")};function Va(u){const g=new ze;return g.i=u.i,u.g&&(g.g=new Map(u.g),g.h=u.h),g}function nr(u,g){return g=String(g),u.j&&(g=g.toLowerCase()),g}function so(u,g){g&&!u.j&&(tr(u),u.i=null,u.g.forEach(function(v,T){const U=T.toLowerCase();T!=U&&(ba(this,T),Da(this,U,v))},u)),u.j=g}function rr(u,g){const v=new oi;if(c.Image){const T=new Image;T.onload=_(Ot,v,"TestLoadImage: loaded",!0,g,T),T.onerror=_(Ot,v,"TestLoadImage: error",!1,g,T),T.onabort=_(Ot,v,"TestLoadImage: abort",!1,g,T),T.ontimeout=_(Ot,v,"TestLoadImage: timeout",!1,g,T),c.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else g(!1)}function ir(u,g){const v=new oi,T=new AbortController,U=setTimeout(()=>{T.abort(),Ot(v,"TestPingServer: timeout",!1,g)},1e4);fetch(u,{signal:T.signal}).then($=>{clearTimeout(U),$.ok?Ot(v,"TestPingServer: ok",!0,g):Ot(v,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(U),Ot(v,"TestPingServer: error",!1,g)})}function Ot(u,g,v,T,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),T(v)}catch{}}function ms(){this.g=new ss}function Pr(u){this.i=u.Sb||null,this.h=u.ab||!1}E(Pr,ni),Pr.prototype.g=function(){return new fn(this.i,this.h)};function fn(u,g){_t.call(this),this.H=u,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}E(fn,_t),n=fn.prototype,n.open=function(u,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=u,this.D=g,this.readyState=1,Ln(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const g={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};u&&(g.body=u),(this.H||c).fetch(new Request(this.D,g)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ci(this)),this.readyState=0},n.Pa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Ln(this)),this.g&&(this.readyState=3,Ln(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;au(this)}else u.text().then(this.Oa.bind(this),this.ga.bind(this))};function au(u){u.j.read().then(u.Ma.bind(u)).catch(u.ga.bind(u))}n.Ma=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var g=u.value?u.value:new Uint8Array(0);(g=this.B.decode(g,{stream:!u.done}))&&(this.response=this.responseText+=g)}u.done?ci(this):Ln(this),this.readyState==3&&au(this)}},n.Oa=function(u){this.g&&(this.response=this.responseText=u,ci(this))},n.Na=function(u){this.g&&(this.response=u,ci(this))},n.ga=function(){this.g&&ci(this)};function ci(u){u.readyState=4,u.l=null,u.j=null,u.B=null,Ln(u)}n.setRequestHeader=function(u,g){this.A.append(u,g)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],g=this.h.entries();for(var v=g.next();!v.done;)v=v.value,u.push(v[0]+": "+v[1]),v=g.next();return u.join(`\r
`)};function Ln(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(fn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function lu(u){let g="";return ye(u,function(v,T){g+=T,g+=":",g+=v,g+=`\r
`}),g}function oo(u,g,v){e:{for(T in v){var T=!1;break e}T=!0}T||(v=lu(v),typeof u=="string"?v!=null&&Xn(v):Qe(u,g,v))}function Ze(u){_t.call(this),this.headers=new Map,this.L=u||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}E(Ze,_t);var uu=/^https?$/i,Mh=["POST","PUT"];n=Ze.prototype,n.Fa=function(u){this.H=u},n.ea=function(u,g,v,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);g=g?g.toUpperCase():"GET",this.D=u,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():eu.g(),this.g.onreadystatechange=I(y(this.Ca,this));try{this.B=!0,this.g.open(g,String(u),!0),this.B=!1}catch($){hi(this,$);return}if(u=v||"",v=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var U in T)v.set(U,T[U]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const $ of T.keys())v.set($,T.get($));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(v.keys()).find($=>$.toLowerCase()=="content-type"),U=c.FormData&&u instanceof c.FormData,!(Array.prototype.indexOf.call(Mh,g,void 0)>=0)||T||U||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,te]of v)this.g.setRequestHeader($,te);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(u),this.v=!1}catch($){hi(this,$)}};function hi(u,g){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=g,u.o=5,di(u),br(u)}function di(u){u.A||(u.A=!0,pt(u,"complete"),pt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=u||7,pt(this,"complete"),pt(this,"abort"),br(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),br(this,!0)),Ze.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?xr(this):this.Xa())},n.Xa=function(){xr(this)};function xr(u){if(u.h&&typeof l<"u"){if(u.v&&sr(u)==4)setTimeout(u.Ca.bind(u),0);else if(pt(u,"readystatechange"),sr(u)==4){u.h=!1;try{const $=u.ca();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var v;if(!(v=g)){var T;if(T=$===0){let te=String(u.D).match(ou)[1]||null;!te&&c.self&&c.self.location&&(te=c.self.location.protocol.slice(0,-1)),T=!uu.test(te?te.toLowerCase():"")}v=T}if(v)pt(u,"complete"),pt(u,"success");else{u.o=6;try{var U=sr(u)>2?u.g.statusText:""}catch{U=""}u.l=U+" ["+u.ca()+"]",di(u)}}finally{br(u)}}}}function br(u,g){if(u.g){u.m&&(clearTimeout(u.m),u.m=null);const v=u.g;u.g=null,g||pt(u,"ready");try{v.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function sr(u){return u.g?u.g.readyState:0}n.ca=function(){try{return sr(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(u){if(this.g){var g=this.g.responseText;return u&&g.indexOf(u)==0&&(g=g.substring(u.length)),Ql(g)}};function cu(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.F){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Oa(u){const g={};u=(u.g&&sr(u)>=2&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(k(u[T]))continue;var v=eo(u[T]);const U=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const $=g[U]||[];g[U]=$,$.push(v)}se(g,function(T){return T.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function or(u,g,v){return v&&v.internalChannelParams&&v.internalChannelParams[u]||g}function ao(u){this.za=0,this.i=[],this.j=new oi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=or("failFast",!1,u),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=or("baseRetryDelayMs",5e3,u),this.Za=or("retryDelaySeedMs",1e4,u),this.Ta=or("forwardChannelMaxRetries",2,u),this.va=or("forwardChannelRequestTimeoutMs",2e4,u),this.ma=u&&u.xmlHttpFactory||void 0,this.Ua=u&&u.Rb||void 0,this.Aa=u&&u.useFetchStreams||!1,this.O=void 0,this.L=u&&u.supportsCrossDomainXhr||!1,this.M="",this.h=new no(u&&u.concurrentRequestLimit),this.Ba=new ms,this.S=u&&u.fastHandshake||!1,this.R=u&&u.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=u&&u.Pb||!1,u&&u.ua&&this.j.ua(),u&&u.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&u&&u.detectBufferingProxy||!1,this.ia=void 0,u&&u.longPollingTimeout&&u.longPollingTimeout>0&&(this.ia=u.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=ao.prototype,n.ka=8,n.I=1,n.connect=function(u,g,v,T){ht(0),this.W=u,this.H=g||{},v&&T!==void 0&&(this.H.OSID=v,this.H.OAID=T),this.F=this.X,this.J=La(this,null,this.W),Nr(this)};function lo(u){if(uo(u),u.I==3){var g=u.V++,v=Rn(u.J);if(Qe(v,"SID",u.M),Qe(v,"RID",g),Qe(v,"TYPE","terminate"),ar(u,v),g=new An(u,u.j,g),g.M=2,g.A=kr(Rn(v)),v=!1,c.navigator&&c.navigator.sendBeacon)try{v=c.navigator.sendBeacon(g.A.toString(),"")}catch{}!v&&c.Image&&(new Image().src=g.A,v=!0),v||(g.g=du(g.j,null),g.g.ea(g.A)),g.F=Date.now(),as(g)}vs(u)}function pn(u){u.g&&(ys(u),u.g.cancel(),u.g=null)}function uo(u){pn(u),u.v&&(c.clearTimeout(u.v),u.v=null),co(u),u.h.cancel(),u.m&&(typeof u.m=="number"&&c.clearTimeout(u.m),u.m=null)}function Nr(u){if(!Aa(u.h)&&!u.m){u.m=!0;var g=u.Ea;ve||S(),we||(ve(),we=!0),R.add(g,u),u.D=0}}function hu(u,g){return us(u.h)>=u.h.j-(u.m?1:0)?!1:u.m?(u.i=g.G.concat(u.i),!0):u.I==1||u.I==2||u.D>=(u.Sa?0:u.Ta)?!1:(u.m=si(y(u.Ea,u,g),fo(u,u.D)),u.D++,!0)}n.Ea=function(u){if(this.m)if(this.m=null,this.I==1){if(!u){this.V=Math.floor(Math.random()*1e5),u=this.V++;const U=new An(this,this.j,u);let $=this.o;if(this.U&&($?($=O($),he($,this.U)):$=this.U),this.u!==null||this.R||(U.J=$,$=null),this.S)e:{for(var g=0,v=0;v<this.i.length;v++){t:{var T=this.i[v];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(g+=T,g>4096){g=v;break e}if(g===4096||v===this.i.length-1){g=v+1;break e}}g=1e3}else g=1e3;g=Ma(this,U,g),v=Rn(this.J),Qe(v,"RID",u),Qe(v,"CVER",22),this.G&&Qe(v,"X-HTTP-Session-Id",this.G),ar(this,v),$&&(this.R?g="headers="+Xn(lu($))+"&"+g:this.u&&oo(v,this.u,$)),ro(this.h,U),this.Ra&&Qe(v,"TYPE","init"),this.S?(Qe(v,"$req",g),Qe(v,"SID","null"),U.U=!0,Mn(U,v,null)):Mn(U,v,g),this.I=2}}else this.I==3&&(u?gs(this,u):this.i.length==0||Aa(this.h)||gs(this))};function gs(u,g){var v;g?v=g.l:v=u.V++;const T=Rn(u.J);Qe(T,"SID",u.M),Qe(T,"RID",v),Qe(T,"AID",u.K),ar(u,T),u.u&&u.o&&oo(T,u.u,u.o),v=new An(u,u.j,v,u.D+1),u.u===null&&(v.J=u.o),g&&(u.i=g.G.concat(u.i)),g=Ma(u,v,1e3),v.H=Math.round(u.va*.5)+Math.round(u.va*.5*Math.random()),ro(u.h,v),Mn(v,T,g)}function ar(u,g){u.H&&ye(u.H,function(v,T){Qe(g,T,v)}),u.l&&ye({},function(v,T){Qe(g,T,v)})}function Ma(u,g,v){v=Math.min(u.i.length,v);const T=u.l?y(u.l.Ka,u.l,u):null;e:{var U=u.i;let xe=-1;for(;;){const mt=["count="+v];xe==-1?v>0?(xe=U[0].g,mt.push("ofs="+xe)):xe=0:mt.push("ofs="+xe);let Je=!0;for(let wt=0;wt<v;wt++){var $=U[wt].g;const gn=U[wt].map;if($-=xe,$<0)xe=Math.max(0,U[wt].g-100),Je=!1;else try{$="req"+$+"_"||"";try{var te=gn instanceof Map?gn:Object.entries(gn);for(const[Dr,ur]of te){let cr=ur;f(ur)&&(cr=ti(ur)),mt.push($+Dr+"="+encodeURIComponent(cr))}}catch(Dr){throw mt.push($+"type="+encodeURIComponent("_badmap")),Dr}}catch{T&&T(gn)}}if(Je){te=mt.join("&");break e}}te=void 0}return u=u.i.splice(0,v),g.G=u,te}function $t(u){if(!u.g&&!u.v){u.Y=1;var g=u.Da;ve||S(),we||(ve(),we=!0),R.add(g,u),u.A=0}}function lr(u){return u.g||u.v||u.A>=3?!1:(u.Y++,u.v=si(y(u.Da,u),fo(u,u.A)),u.A++,!0)}n.Da=function(){if(this.v=null,fi(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var u=4*this.T;this.j.info("BP detection timer enabled: "+u),this.B=si(y(this.Wa,this),u)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ht(10),pn(this),fi(this))};function ys(u){u.B!=null&&(c.clearTimeout(u.B),u.B=null)}function fi(u){u.g=new An(u,u.j,"rpc",u.Y),u.u===null&&(u.g.J=u.o),u.g.P=0;var g=Rn(u.na);Qe(g,"RID","rpc"),Qe(g,"SID",u.M),Qe(g,"AID",u.K),Qe(g,"CI",u.F?"0":"1"),!u.F&&u.ia&&Qe(g,"TO",u.ia),Qe(g,"TYPE","xmlhttp"),ar(u,g),u.u&&u.o&&oo(g,u.u,u.o),u.O&&(u.g.H=u.O);var v=u.g;u=u.ba,v.M=1,v.A=kr(Rn(g)),v.u=null,v.R=!0,Ia(v,u)}n.Va=function(){this.C!=null&&(this.C=null,pn(this),lr(this),ht(19))};function co(u){u.C!=null&&(c.clearTimeout(u.C),u.C=null)}function ho(u,g){var v=null;if(u.g==g){co(u),ys(u),u.g=null;var T=2}else if(Ra(u.h,g))v=g.G,cs(u.h,g),T=1;else return;if(u.I!=0){if(g.o)if(T==1){v=g.u?g.u.length:0,g=Date.now()-g.F;var U=u.D;T=ii(),pt(T,new Ea(T,v)),Nr(u)}else $t(u);else if(U=g.m,U==3||U==0&&g.X>0||!(T==1&&hu(u,g)||T==2&&lr(u)))switch(v&&v.length>0&&(g=u.h,g.i=g.i.concat(v)),U){case 1:mn(u,5);break;case 4:mn(u,10);break;case 3:mn(u,6);break;default:mn(u,2)}}}function fo(u,g){let v=u.Qa+Math.floor(Math.random()*u.Za);return u.isActive()||(v*=2),v*g}function mn(u,g){if(u.j.info("Error code "+g),g==2){var v=y(u.bb,u),T=u.Ua;const U=!T;T=new Zn(T||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||hs(T,"https"),kr(T),U?rr(T.toString(),v):ir(T.toString(),v)}else ht(2);u.I=0,u.l&&u.l.pa(g),vs(u),uo(u)}n.bb=function(u){u?(this.j.info("Successfully pinged google.com"),ht(2)):(this.j.info("Failed to ping google.com"),ht(1))};function vs(u){if(u.I=0,u.ja=[],u.l){const g=hn(u.h);(g.length!=0||u.i.length!=0)&&(W(u.ja,g),W(u.ja,u.i),u.h.i.length=0,D(u.i),u.i.length=0),u.l.oa()}}function La(u,g,v){var T=v instanceof Zn?Rn(v):new Zn(v);if(T.g!="")g&&(T.g=g+"."+T.g),er(T,T.u);else{var U=c.location;T=U.protocol,g=g?g+"."+U.hostname:U.hostname,U=+U.port;const $=new Zn(null);T&&hs($,T),g&&($.g=g),U&&er($,U),v&&($.h=v),T=$}return v=u.G,g=u.wa,v&&g&&Qe(T,v,g),Qe(T,"VER",u.ka),ar(u,T),T}function du(u,g,v){if(g&&!u.L)throw Error("Can't create secondary domain capable XhrIo object.");return g=u.Aa&&!u.ma?new Ze(new Pr({ab:v})):new Ze(u.ma),g.Fa(u.L),g}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function fu(){}n=fu.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function po(){}po.prototype.g=function(u,g){return new Mt(u,g)};function Mt(u,g){_t.call(this),this.g=new ao(g),this.l=u,this.h=g&&g.messageUrlParams||null,u=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(u?u["X-WebChannel-Content-Type"]=g.messageContentType:u={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.sa&&(u?u["X-WebChannel-Client-Profile"]=g.sa:u={"X-WebChannel-Client-Profile":g.sa}),this.g.U=u,(u=g&&g.Qb)&&!k(u)&&(this.g.u=u),this.A=g&&g.supportsCrossDomainXhr||!1,this.v=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!k(g)&&(this.g.G=g,u=this.h,u!==null&&g in u&&(u=this.h,g in u&&delete u[g])),this.j=new pi(this)}E(Mt,_t),Mt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Mt.prototype.close=function(){lo(this.g)},Mt.prototype.o=function(u){var g=this.g;if(typeof u=="string"){var v={};v.__data__=u,u=v}else this.v&&(v={},v.__data__=ti(u),u=v);g.i.push(new Vh(g.Ya++,u)),g.I==3&&Nr(g)},Mt.prototype.N=function(){this.g.l=null,delete this.j,lo(this.g),delete this.g,Mt.Z.N.call(this)};function pu(u){Js.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var g=u.__sm__;if(g){e:{for(const v in g){u=v;break e}u=void 0}(this.i=u)&&(u=this.i,g=g!==null&&u in g?g[u]:void 0),this.data=g}else this.data=u}E(pu,Js);function mu(){wa.call(this),this.status=1}E(mu,wa);function pi(u){this.g=u}E(pi,fu),pi.prototype.ra=function(){pt(this.g,"a")},pi.prototype.qa=function(u){pt(this.g,new pu(u))},pi.prototype.pa=function(u){pt(this.g,new mu)},pi.prototype.oa=function(){pt(this.g,"b")},po.prototype.createWebChannel=po.prototype.g,Mt.prototype.send=Mt.prototype.o,Mt.prototype.open=Mt.prototype.m,Mt.prototype.close=Mt.prototype.close,cE=function(){return new po},uE=function(){return ii()},lE=On,Bf={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ai.NO_ERROR=0,ai.TIMEOUT=8,ai.HTTP_ERROR=6,Rc=ai,li.COMPLETE="complete",aE=li,Yl.EventType=ri,ri.OPEN="a",ri.CLOSE="b",ri.ERROR="c",ri.MESSAGE="d",_t.prototype.listen=_t.prototype.J,fl=Yl,Ze.prototype.listenOnce=Ze.prototype.K,Ze.prototype.getLastError=Ze.prototype.Ha,Ze.prototype.getLastErrorCode=Ze.prototype.ya,Ze.prototype.getStatus=Ze.prototype.ca,Ze.prototype.getResponseJson=Ze.prototype.La,Ze.prototype.getResponseText=Ze.prototype.la,Ze.prototype.send=Ze.prototype.ea,Ze.prototype.setWithCredentials=Ze.prototype.Fa,oE=Ze}).apply(typeof cc<"u"?cc:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class Qt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Qt.UNAUTHENTICATED=new Qt(null),Qt.GOOGLE_CREDENTIALS=new Qt("google-credentials-uid"),Qt.FIRST_PARTY=new Qt("first-party-uid"),Qt.MOCK_USER=new Qt("mock-user");/**
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
 */const Us=new oh("@firebase/firestore");function jo(){return Us.logLevel}function le(n,...e){if(Us.logLevel<=Le.DEBUG){const t=e.map(Pp);Us.debug(`Firestore (${ua}): ${n}`,...t)}}function Qr(n,...e){if(Us.logLevel<=Le.ERROR){const t=e.map(Pp);Us.error(`Firestore (${ua}): ${n}`,...t)}}function js(n,...e){if(Us.logLevel<=Le.WARN){const t=e.map(Pp);Us.warn(`Firestore (${ua}): ${n}`,...t)}}function Pp(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function Te(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,hE(n,i,t)}function hE(n,e,t){let i=`FIRESTORE (${ua}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Qr(i),new Error(i)}function We(n,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,n||hE(e,o,i)}function Pe(n,e){return n}/**
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
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends Qn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class _r{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class dE{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ak{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Qt.UNAUTHENTICATED)))}shutdown(){}}class Rk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Ck{constructor(e){this.t=e,this.currentUser=Qt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){We(this.o===void 0,42304);let i=this.i;const o=m=>this.i!==i?(i=this.i,t(m)):Promise.resolve();let l=new _r;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new _r,e.enqueueRetryable((()=>o(this.currentUser)))};const c=()=>{const m=l;e.enqueueRetryable((async()=>{await m.promise,await o(this.currentUser)}))},f=m=>{le("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((m=>f(m))),setTimeout((()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?f(m):(le("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new _r)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(le("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(We(typeof i.accessToken=="string",31837,{l:i}),new dE(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return We(e===null||typeof e=="string",2055,{h:e}),new Qt(e)}}class kk{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Qt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Pk{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new kk(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Qt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Tv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xk{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Wn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){We(this.o===void 0,3512);const i=l=>{l.error!=null&&le("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,le("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const o=l=>{le("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):le("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Tv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(We(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Tv(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */class xp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=bk(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%62))}return i}}function Fe(n,e){return n<e?-1:n>e?1:0}function $f(n,e){const t=Math.min(n.length,e.length);for(let i=0;i<t;i++){const o=n.charAt(i),l=e.charAt(i);if(o!==l)return _f(o)===_f(l)?Fe(o,l):_f(o)?1:-1}return Fe(n.length,e.length)}const Nk=55296,Dk=57343;function _f(n){const e=n.charCodeAt(0);return e>=Nk&&e<=Dk}function ea(n,e,t){return n.length===e.length&&n.every(((i,o)=>t(i,e[o])))}/**
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
 */const Iv="__name__";class mr{constructor(e,t,i){t===void 0?t=0:t>e.length&&Te(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&Te(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return mr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof mr?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=mr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Fe(e.length,t.length)}static compareSegments(e,t){const i=mr.isNumericId(e),o=mr.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?mr.extractNumericId(e).compare(mr.extractNumericId(t)):$f(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return zi.fromString(e.substring(4,e.length-2))}}class Xe extends mr{construct(e,t,i){return new Xe(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new re(H.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new Xe(t)}static emptyPath(){return new Xe([])}}const Vk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class jt extends mr{construct(e,t,i){return new jt(e,t,i)}static isValidIdentifier(e){return Vk.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),jt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Iv}static keyField(){return new jt([Iv])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new re(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new re(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[o+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new re(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=m,o+=2}else f==="`"?(c=!c,o++):f!=="."||c?(i+=f,o++):(l(),o++)}if(l(),c)throw new re(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new jt(t)}static emptyPath(){return new jt([])}}/**
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
 */class Ee{constructor(e){this.path=e}static fromPath(e){return new Ee(Xe.fromString(e))}static fromName(e){return new Ee(Xe.fromString(e).popFirst(5))}static empty(){return new Ee(Xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Xe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ee(new Xe(e.slice()))}}/**
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
 */function fE(n,e,t){if(!t)throw new re(H.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Ok(n,e,t,i){if(e===!0&&i===!0)throw new re(H.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Sv(n){if(!Ee.isDocumentKey(n))throw new re(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Av(n){if(Ee.isDocumentKey(n))throw new re(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function pE(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function fh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Te(12329,{type:typeof n})}function In(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new re(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=fh(n);throw new re(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function St(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ul(n,e){if(!pE(n))throw new re(H.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const c=n[i];if(o&&typeof c!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(l!==void 0&&c!==l.value){t=`Expected '${i}' field to equal '${l.value}'`;break}}if(t)throw new re(H.INVALID_ARGUMENT,t);return!0}/**
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
 */const Rv=-62135596800,Cv=1e6;class it{static now(){return it.fromMillis(Date.now())}static fromDate(e){return it.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*Cv);return new it(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new re(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new re(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Rv)throw new re(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Cv}_compareTo(e){return this.seconds===e.seconds?Fe(this.nanoseconds,e.nanoseconds):Fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:it._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ul(e,it._jsonSchema))return new it(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Rv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}it._jsonSchemaVersion="firestore/timestamp/1.0",it._jsonSchema={type:St("string",it._jsonSchemaVersion),seconds:St("number"),nanoseconds:St("number")};/**
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
 */class Re{static fromTimestamp(e){return new Re(e)}static min(){return new Re(new it(0,0))}static max(){return new Re(new it(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Cl=-1;function Mk(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Re.fromTimestamp(i===1e9?new it(t+1,0):new it(t,i));return new Hi(o,Ee.empty(),e)}function Lk(n){return new Hi(n.readTime,n.key,Cl)}class Hi{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Hi(Re.min(),Ee.empty(),Cl)}static max(){return new Hi(Re.max(),Ee.empty(),Cl)}}function Fk(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Ee.comparator(n.documentKey,e.documentKey),t!==0?t:Fe(n.largestBatchId,e.largestBatchId))}/**
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
 */async function ca(n){if(n.code!==H.FAILED_PRECONDITION||n.message!==Uk)throw n;le("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Te(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new K(((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof K?t:K.resolve(t)}catch(t){return K.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):K.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):K.reject(t)}static resolve(e){return new K(((t,i)=>{t(e)}))}static reject(e){return new K(((t,i)=>{i(e)}))}static waitFor(e){return new K(((t,i)=>{let o=0,l=0,c=!1;e.forEach((f=>{++o,f.next((()=>{++l,c&&l===o&&t()}),(m=>i(m)))})),c=!0,l===o&&t()}))}static or(e){let t=K.resolve(!1);for(const i of e)t=t.next((o=>o?K.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,l)=>{i.push(t.call(this,o,l))})),this.waitFor(i)}static mapArray(e,t){return new K(((i,o)=>{const l=e.length,c=new Array(l);let f=0;for(let m=0;m<l;m++){const y=m;t(e[y]).next((_=>{c[y]=_,++f,f===l&&i(c)}),(_=>o(_)))}}))}static doWhile(e,t){return new K(((i,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):i()};l()}))}}function zk(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ha(n){return n.name==="IndexedDbTransactionError"}/**
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
 */const bp=-1;function jl(n){return n==null}function Wc(n){return n===0&&1/n==-1/0}function Bk(n){return typeof n=="number"&&Number.isInteger(n)&&!Wc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const mE="";function $k(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=kv(e)),e=Wk(n.get(t),e);return kv(e)}function Wk(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case mE:t+="";break;default:t+=l}}return t}function kv(n){return n+mE+""}/**
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
 */function Pv(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Zi(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function gE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ct{constructor(e,t){this.comparator=e,this.root=t||Ut.EMPTY}insert(e,t){return new ct(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ut.BLACK,null,null))}remove(e){return new ct(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ut.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new hc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new hc(this.root,e,this.comparator,!1)}getReverseIterator(){return new hc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new hc(this.root,e,this.comparator,!0)}}class hc{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ut{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Ut.RED,this.left=o??Ut.EMPTY,this.right=l??Ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Ut(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Ut.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Ut.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Te(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Te(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Te(27949);return e+(this.isRed()?0:1)}}Ut.EMPTY=null,Ut.RED=!0,Ut.BLACK=!1;Ut.EMPTY=new class{constructor(){this.size=0}get key(){throw Te(57766)}get value(){throw Te(16141)}get color(){throw Te(16727)}get left(){throw Te(29726)}get right(){throw Te(36894)}copy(e,t,i,o,l){return this}insert(e,t,i){return new Ut(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class kt{constructor(e){this.comparator=e,this.data=new ct(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new xv(this.data.getIterator())}getIteratorFrom(e){return new xv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof kt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new kt(this.comparator);return t.data=e,t}}class xv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class En{constructor(e){this.fields=e,e.sort(jt.comparator)}static empty(){return new En([])}unionWith(e){let t=new kt(jt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new En(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ea(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class yE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Bt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new yE("Invalid base64 string: "+l):l}})(e);return new Bt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let c=0;c<o.length;++c)l+=String.fromCharCode(o[c]);return l})(e);return new Bt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Bt.EMPTY_BYTE_STRING=new Bt("");const qk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gi(n){if(We(!!n,39018),typeof n=="string"){let e=0;const t=qk.exec(n);if(We(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:yt(n.seconds),nanos:yt(n.nanos)}}function yt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ki(n){return typeof n=="string"?Bt.fromBase64String(n):Bt.fromUint8Array(n)}/**
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
 */const vE="server_timestamp",_E="__type__",wE="__previous_value__",EE="__local_write_time__";function Np(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[_E])==null?void 0:i.stringValue)===vE}function mh(n){const e=n.mapValue.fields[wE];return Np(e)?mh(e):e}function kl(n){const e=Gi(n.mapValue.fields[EE].timestampValue);return new it(e.seconds,e.nanos)}/**
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
 */class Hk{constructor(e,t,i,o,l,c,f,m,y,_,E){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=f,this.longPollingOptions=m,this.useFetchStreams=y,this.isUsingEmulator=_,this.apiKey=E}}const qc="(default)";class Pl{constructor(e,t){this.projectId=e,this.database=t||qc}static empty(){return new Pl("","")}get isDefaultDatabase(){return this.database===qc}isEqual(e){return e instanceof Pl&&e.projectId===this.projectId&&e.database===this.database}}function Gk(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new re(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pl(n.options.projectId,e)}/**
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
 */const TE="__type__",Kk="__max__",dc={mapValue:{}},IE="__vector__",Hc="value";function Qi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Np(n)?4:Yk(n)?9007199254740991:Qk(n)?10:11:Te(28295,{value:n})}function Ir(n,e){if(n===e)return!0;const t=Qi(n);if(t!==Qi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return kl(n).isEqual(kl(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const c=Gi(o.timestampValue),f=Gi(l.timestampValue);return c.seconds===f.seconds&&c.nanos===f.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,l){return Ki(o.bytesValue).isEqual(Ki(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,l){return yt(o.geoPointValue.latitude)===yt(l.geoPointValue.latitude)&&yt(o.geoPointValue.longitude)===yt(l.geoPointValue.longitude)})(n,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return yt(o.integerValue)===yt(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const c=yt(o.doubleValue),f=yt(l.doubleValue);return c===f?Wc(c)===Wc(f):isNaN(c)&&isNaN(f)}return!1})(n,e);case 9:return ea(n.arrayValue.values||[],e.arrayValue.values||[],Ir);case 10:case 11:return(function(o,l){const c=o.mapValue.fields||{},f=l.mapValue.fields||{};if(Pv(c)!==Pv(f))return!1;for(const m in c)if(c.hasOwnProperty(m)&&(f[m]===void 0||!Ir(c[m],f[m])))return!1;return!0})(n,e);default:return Te(52216,{left:n})}}function xl(n,e){return(n.values||[]).find((t=>Ir(t,e)))!==void 0}function ta(n,e){if(n===e)return 0;const t=Qi(n),i=Qi(e);if(t!==i)return Fe(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Fe(n.booleanValue,e.booleanValue);case 2:return(function(l,c){const f=yt(l.integerValue||l.doubleValue),m=yt(c.integerValue||c.doubleValue);return f<m?-1:f>m?1:f===m?0:isNaN(f)?isNaN(m)?0:-1:1})(n,e);case 3:return bv(n.timestampValue,e.timestampValue);case 4:return bv(kl(n),kl(e));case 5:return $f(n.stringValue,e.stringValue);case 6:return(function(l,c){const f=Ki(l),m=Ki(c);return f.compareTo(m)})(n.bytesValue,e.bytesValue);case 7:return(function(l,c){const f=l.split("/"),m=c.split("/");for(let y=0;y<f.length&&y<m.length;y++){const _=Fe(f[y],m[y]);if(_!==0)return _}return Fe(f.length,m.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,c){const f=Fe(yt(l.latitude),yt(c.latitude));return f!==0?f:Fe(yt(l.longitude),yt(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Nv(n.arrayValue,e.arrayValue);case 10:return(function(l,c){var I,D,W,M;const f=l.fields||{},m=c.fields||{},y=(I=f[Hc])==null?void 0:I.arrayValue,_=(D=m[Hc])==null?void 0:D.arrayValue,E=Fe(((W=y==null?void 0:y.values)==null?void 0:W.length)||0,((M=_==null?void 0:_.values)==null?void 0:M.length)||0);return E!==0?E:Nv(y,_)})(n.mapValue,e.mapValue);case 11:return(function(l,c){if(l===dc.mapValue&&c===dc.mapValue)return 0;if(l===dc.mapValue)return 1;if(c===dc.mapValue)return-1;const f=l.fields||{},m=Object.keys(f),y=c.fields||{},_=Object.keys(y);m.sort(),_.sort();for(let E=0;E<m.length&&E<_.length;++E){const I=$f(m[E],_[E]);if(I!==0)return I;const D=ta(f[m[E]],y[_[E]]);if(D!==0)return D}return Fe(m.length,_.length)})(n.mapValue,e.mapValue);default:throw Te(23264,{he:t})}}function bv(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Fe(n,e);const t=Gi(n),i=Gi(e),o=Fe(t.seconds,i.seconds);return o!==0?o:Fe(t.nanos,i.nanos)}function Nv(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=ta(t[o],i[o]);if(l)return l}return Fe(t.length,i.length)}function na(n){return Wf(n)}function Wf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=Gi(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Ki(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return Ee.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=Wf(l);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const c of i)l?l=!1:o+=",",o+=`${c}:${Wf(t.fields[c])}`;return o+"}"})(n.mapValue):Te(61005,{value:n})}function Cc(n){switch(Qi(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=mh(n);return e?16+Cc(e):16;case 5:return 2*n.stringValue.length;case 6:return Ki(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,l)=>o+Cc(l)),0)})(n.arrayValue);case 10:case 11:return(function(i){let o=0;return Zi(i.fields,((l,c)=>{o+=l.length+Cc(c)})),o})(n.mapValue);default:throw Te(13486,{value:n})}}function Dv(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function qf(n){return!!n&&"integerValue"in n}function Dp(n){return!!n&&"arrayValue"in n}function Vv(n){return!!n&&"nullValue"in n}function Ov(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function kc(n){return!!n&&"mapValue"in n}function Qk(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[TE])==null?void 0:i.stringValue)===IE}function _l(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Zi(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=_l(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=_l(n.arrayValue.values[t]);return e}return{...n}}function Yk(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Kk}/**
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
 */class en{constructor(e){this.value=e}static empty(){return new en({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!kc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=_l(t)}setAll(e){let t=jt.emptyPath(),i={},o=[];e.forEach(((c,f)=>{if(!t.isImmediateParentOf(f)){const m=this.getFieldsMap(t);this.applyChanges(m,i,o),i={},o=[],t=f.popLast()}c?i[f.lastSegment()]=_l(c):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());kc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ir(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];kc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Zi(t,((o,l)=>e[o]=l));for(const o of i)delete e[o]}clone(){return new en(_l(this.value))}}function SE(n){const e=[];return Zi(n.fields,((t,i)=>{const o=new jt([t]);if(kc(i)){const l=SE(i.mapValue).fields;if(l.length===0)e.push(o);else for(const c of l)e.push(o.child(c))}else e.push(o)})),new En(e)}/**
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
 */class Vt{constructor(e,t,i,o,l,c,f){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=c,this.documentState=f}static newInvalidDocument(e){return new Vt(e,0,Re.min(),Re.min(),Re.min(),en.empty(),0)}static newFoundDocument(e,t,i,o){return new Vt(e,1,t,Re.min(),i,o,0)}static newNoDocument(e,t){return new Vt(e,2,t,Re.min(),Re.min(),en.empty(),0)}static newUnknownDocument(e,t){return new Vt(e,3,t,Re.min(),Re.min(),en.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=en.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=en.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Gc{constructor(e,t){this.position=e,this.inclusive=t}}function Mv(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],c=n.position[o];if(l.field.isKeyField()?i=Ee.comparator(Ee.fromName(c.referenceValue),t.key):i=ta(c,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function Lv(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ir(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class AE{}class It extends AE{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new Zk(e,t,i):t==="array-contains"?new nP(e,i):t==="in"?new rP(e,i):t==="not-in"?new iP(e,i):t==="array-contains-any"?new sP(e,i):new It(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new eP(e,i):new tP(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ta(t,this.value)):t!==null&&Qi(this.value)===Qi(t)&&this.matchesComparison(ta(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kn extends AE{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Kn(e,t)}matches(e){return RE(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function RE(n){return n.op==="and"}function CE(n){return Xk(n)&&RE(n)}function Xk(n){for(const e of n.filters)if(e instanceof Kn)return!1;return!0}function Hf(n){if(n instanceof It)return n.field.canonicalString()+n.op.toString()+na(n.value);if(CE(n))return n.filters.map((e=>Hf(e))).join(",");{const e=n.filters.map((t=>Hf(t))).join(",");return`${n.op}(${e})`}}function kE(n,e){return n instanceof It?(function(i,o){return o instanceof It&&i.op===o.op&&i.field.isEqual(o.field)&&Ir(i.value,o.value)})(n,e):n instanceof Kn?(function(i,o){return o instanceof Kn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((l,c,f)=>l&&kE(c,o.filters[f])),!0):!1})(n,e):void Te(19439)}function PE(n){return n instanceof It?(function(t){return`${t.field.canonicalString()} ${t.op} ${na(t.value)}`})(n):n instanceof Kn?(function(t){return t.op.toString()+" {"+t.getFilters().map(PE).join(" ,")+"}"})(n):"Filter"}class Zk extends It{constructor(e,t,i){super(e,t,i),this.key=Ee.fromName(i.referenceValue)}matches(e){const t=Ee.comparator(e.key,this.key);return this.matchesComparison(t)}}class eP extends It{constructor(e,t){super(e,"in",t),this.keys=xE("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class tP extends It{constructor(e,t){super(e,"not-in",t),this.keys=xE("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function xE(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((i=>Ee.fromName(i.referenceValue)))}class nP extends It{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Dp(t)&&xl(t.arrayValue,this.value)}}class rP extends It{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&xl(this.value.arrayValue,t)}}class iP extends It{constructor(e,t){super(e,"not-in",t)}matches(e){if(xl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!xl(this.value.arrayValue,t)}}class sP extends It{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Dp(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>xl(this.value.arrayValue,i)))}}/**
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
 */class oP{constructor(e,t=null,i=[],o=[],l=null,c=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=c,this.endAt=f,this.Te=null}}function Fv(n,e=null,t=[],i=[],o=null,l=null,c=null){return new oP(n,e,t,i,o,l,c)}function Vp(n){const e=Pe(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>Hf(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),jl(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>na(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>na(i))).join(",")),e.Te=t}return e.Te}function Op(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Jk(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!kE(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Lv(n.startAt,e.startAt)&&Lv(n.endAt,e.endAt)}function Gf(n){return Ee.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class da{constructor(e,t=null,i=[],o=[],l=null,c="F",f=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=c,this.startAt=f,this.endAt=m,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function aP(n,e,t,i,o,l,c,f){return new da(n,e,t,i,o,l,c,f)}function gh(n){return new da(n)}function Uv(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function lP(n){return Ee.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function bE(n){return n.collectionGroup!==null}function wl(n){const e=Pe(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let f=new kt(jt.comparator);return c.filters.forEach((m=>{m.getFlattenedFilters().forEach((y=>{y.isInequality()&&(f=f.add(y.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new bl(l,i))})),t.has(jt.keyField().canonicalString())||e.Ie.push(new bl(jt.keyField(),i))}return e.Ie}function wr(n){const e=Pe(n);return e.Ee||(e.Ee=uP(e,wl(n))),e.Ee}function uP(n,e){if(n.limitType==="F")return Fv(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new bl(o.field,l)}));const t=n.endAt?new Gc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Gc(n.startAt.position,n.startAt.inclusive):null;return Fv(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Kf(n,e){const t=n.filters.concat([e]);return new da(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function cP(n,e){const t=n.explicitOrderBy.concat([e]);return new da(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function Qf(n,e,t){return new da(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function yh(n,e){return Op(wr(n),wr(e))&&n.limitType===e.limitType}function NE(n){return`${Vp(wr(n))}|lt:${n.limitType}`}function zo(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>PE(o))).join(", ")}]`),jl(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>na(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>na(o))).join(",")),`Target(${i})`})(wr(n))}; limitType=${n.limitType})`}function vh(n,e){return e.isFoundDocument()&&(function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):Ee.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(n,e)&&(function(i,o){for(const l of wl(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0})(n,e)&&(function(i,o){return!(i.startAt&&!(function(c,f,m){const y=Mv(c,f,m);return c.inclusive?y<=0:y<0})(i.startAt,wl(i),o)||i.endAt&&!(function(c,f,m){const y=Mv(c,f,m);return c.inclusive?y>=0:y>0})(i.endAt,wl(i),o))})(n,e)}function hP(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function DE(n){return(e,t)=>{let i=!1;for(const o of wl(n)){const l=dP(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function dP(n,e,t){const i=n.field.isKeyField()?Ee.comparator(e.key,t.key):(function(l,c,f){const m=c.data.field(l),y=f.data.field(l);return m!==null&&y!==null?ta(m,y):Te(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Te(19790,{direction:n.dir})}}/**
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
 */class Hs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Zi(this.inner,((t,i)=>{for(const[o,l]of i)e(o,l)}))}isEmpty(){return gE(this.inner)}size(){return this.innerSize}}/**
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
 */const fP=new ct(Ee.comparator);function Yr(){return fP}const VE=new ct(Ee.comparator);function pl(...n){let e=VE;for(const t of n)e=e.insert(t.key,t);return e}function OE(n){let e=VE;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function Vs(){return El()}function ME(){return El()}function El(){return new Hs((n=>n.toString()),((n,e)=>n.isEqual(e)))}const pP=new ct(Ee.comparator),mP=new kt(Ee.comparator);function Ue(...n){let e=mP;for(const t of n)e=e.add(t);return e}const gP=new kt(Fe);function yP(){return gP}/**
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
 */function Mp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wc(e)?"-0":e}}function LE(n){return{integerValue:""+n}}function vP(n,e){return Bk(e)?LE(e):Mp(n,e)}/**
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
 */class _h{constructor(){this._=void 0}}function _P(n,e,t){return n instanceof Nl?(function(o,l){const c={fields:{[_E]:{stringValue:vE},[EE]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Np(l)&&(l=mh(l)),l&&(c.fields[wE]=l),{mapValue:c}})(t,e):n instanceof Dl?UE(n,e):n instanceof Vl?jE(n,e):(function(o,l){const c=FE(o,l),f=jv(c)+jv(o.Ae);return qf(c)&&qf(o.Ae)?LE(f):Mp(o.serializer,f)})(n,e)}function wP(n,e,t){return n instanceof Dl?UE(n,e):n instanceof Vl?jE(n,e):t}function FE(n,e){return n instanceof Kc?(function(i){return qf(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class Nl extends _h{}class Dl extends _h{constructor(e){super(),this.elements=e}}function UE(n,e){const t=zE(e);for(const i of n.elements)t.some((o=>Ir(o,i)))||t.push(i);return{arrayValue:{values:t}}}class Vl extends _h{constructor(e){super(),this.elements=e}}function jE(n,e){let t=zE(e);for(const i of n.elements)t=t.filter((o=>!Ir(o,i)));return{arrayValue:{values:t}}}class Kc extends _h{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function jv(n){return yt(n.integerValue||n.doubleValue)}function zE(n){return Dp(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class EP{constructor(e,t){this.field=e,this.transform=t}}function TP(n,e){return n.field.isEqual(e.field)&&(function(i,o){return i instanceof Dl&&o instanceof Dl||i instanceof Vl&&o instanceof Vl?ea(i.elements,o.elements,Ir):i instanceof Kc&&o instanceof Kc?Ir(i.Ae,o.Ae):i instanceof Nl&&o instanceof Nl})(n.transform,e.transform)}class IP{constructor(e,t){this.version=e,this.transformResults=t}}class tn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new tn}static exists(e){return new tn(void 0,e)}static updateTime(e){return new tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Pc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class wh{}function BE(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Lp(n.key,tn.none()):new zl(n.key,n.data,tn.none());{const t=n.data,i=en.empty();let o=new kt(jt.comparator);for(let l of e.fields)if(!o.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?i.delete(l):i.set(l,c),o=o.add(l)}return new es(n.key,i,new En(o.toArray()),tn.none())}}function SP(n,e,t){n instanceof zl?(function(o,l,c){const f=o.value.clone(),m=Bv(o.fieldTransforms,l,c.transformResults);f.setAll(m),l.convertToFoundDocument(c.version,f).setHasCommittedMutations()})(n,e,t):n instanceof es?(function(o,l,c){if(!Pc(o.precondition,l))return void l.convertToUnknownDocument(c.version);const f=Bv(o.fieldTransforms,l,c.transformResults),m=l.data;m.setAll($E(o)),m.setAll(f),l.convertToFoundDocument(c.version,m).setHasCommittedMutations()})(n,e,t):(function(o,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function Tl(n,e,t,i){return n instanceof zl?(function(l,c,f,m){if(!Pc(l.precondition,c))return f;const y=l.value.clone(),_=$v(l.fieldTransforms,m,c);return y.setAll(_),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),null})(n,e,t,i):n instanceof es?(function(l,c,f,m){if(!Pc(l.precondition,c))return f;const y=$v(l.fieldTransforms,m,c),_=c.data;return _.setAll($E(l)),_.setAll(y),c.convertToFoundDocument(c.version,_).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((E=>E.field)))})(n,e,t,i):(function(l,c,f){return Pc(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):f})(n,e,t)}function AP(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=FE(i.transform,o||null);l!=null&&(t===null&&(t=en.empty()),t.set(i.field,l))}return t||null}function zv(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&ea(i,o,((l,c)=>TP(l,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class zl extends wh{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class es extends wh{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function $E(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function Bv(n,e,t){const i=new Map;We(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let o=0;o<t.length;o++){const l=n[o],c=l.transform,f=e.data.field(l.field);i.set(l.field,wP(c,f,t[o]))}return i}function $v(n,e,t){const i=new Map;for(const o of n){const l=o.transform,c=t.data.field(o.field);i.set(o.field,_P(l,c,e))}return i}class Lp extends wh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class WE extends wh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class RP{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&SP(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Tl(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Tl(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=ME();return this.mutations.forEach((o=>{const l=e.get(o.key),c=l.overlayedDocument;let f=this.applyToLocalView(c,l.mutatedFields);f=t.has(o.key)?null:f;const m=BE(c,f);m!==null&&i.set(o.key,m),c.isValidDocument()||c.convertToNoDocument(Re.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ue())}isEqual(e){return this.batchId===e.batchId&&ea(this.mutations,e.mutations,((t,i)=>zv(t,i)))&&ea(this.baseMutations,e.baseMutations,((t,i)=>zv(t,i)))}}class Fp{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){We(e.mutations.length===i.length,58842,{me:e.mutations.length,fe:i.length});let o=(function(){return pP})();const l=e.mutations;for(let c=0;c<l.length;c++)o=o.insert(l[c].key,i[c].version);return new Fp(e,t,i,o)}}/**
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
 */var Tt,$e;function qE(n){switch(n){case H.OK:return Te(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return Te(15467,{code:n})}}function HE(n){if(n===void 0)return Qr("GRPC error has no .code"),H.UNKNOWN;switch(n){case Tt.OK:return H.OK;case Tt.CANCELLED:return H.CANCELLED;case Tt.UNKNOWN:return H.UNKNOWN;case Tt.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case Tt.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case Tt.INTERNAL:return H.INTERNAL;case Tt.UNAVAILABLE:return H.UNAVAILABLE;case Tt.UNAUTHENTICATED:return H.UNAUTHENTICATED;case Tt.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case Tt.NOT_FOUND:return H.NOT_FOUND;case Tt.ALREADY_EXISTS:return H.ALREADY_EXISTS;case Tt.PERMISSION_DENIED:return H.PERMISSION_DENIED;case Tt.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case Tt.ABORTED:return H.ABORTED;case Tt.OUT_OF_RANGE:return H.OUT_OF_RANGE;case Tt.UNIMPLEMENTED:return H.UNIMPLEMENTED;case Tt.DATA_LOSS:return H.DATA_LOSS;default:return Te(39323,{code:n})}}($e=Tt||(Tt={}))[$e.OK=0]="OK",$e[$e.CANCELLED=1]="CANCELLED",$e[$e.UNKNOWN=2]="UNKNOWN",$e[$e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$e[$e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$e[$e.NOT_FOUND=5]="NOT_FOUND",$e[$e.ALREADY_EXISTS=6]="ALREADY_EXISTS",$e[$e.PERMISSION_DENIED=7]="PERMISSION_DENIED",$e[$e.UNAUTHENTICATED=16]="UNAUTHENTICATED",$e[$e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$e[$e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$e[$e.ABORTED=10]="ABORTED",$e[$e.OUT_OF_RANGE=11]="OUT_OF_RANGE",$e[$e.UNIMPLEMENTED=12]="UNIMPLEMENTED",$e[$e.INTERNAL=13]="INTERNAL",$e[$e.UNAVAILABLE=14]="UNAVAILABLE",$e[$e.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const xP=new zi([4294967295,4294967295],0);function Wv(n){const e=PP().encode(n),t=new sE;return t.update(e),new Uint8Array(t.digest())}function qv(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new zi([t,i],0),new zi([o,l],0)]}class Up{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new ml(`Invalid padding: ${t}`);if(i<0)throw new ml(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new ml(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new ml(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=zi.fromNumber(this.ge)}ye(e,t,i){let o=e.add(t.multiply(zi.fromNumber(i)));return o.compare(xP)===1&&(o=new zi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Wv(e),[i,o]=qv(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(i,o,l);if(!this.we(c))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new Up(l,o,t);return i.forEach((f=>c.insert(f))),c}insert(e){if(this.ge===0)return;const t=Wv(e),[i,o]=qv(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(i,o,l);this.be(c)}}be(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class ml extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Eh{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,Bl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Eh(Re.min(),o,new ct(Fe),Yr(),Ue())}}class Bl{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Bl(i,t,Ue(),Ue(),Ue())}}/**
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
 */class xc{constructor(e,t,i,o){this.Se=e,this.removedTargetIds=t,this.key=i,this.De=o}}class GE{constructor(e,t){this.targetId=e,this.Ce=t}}class KE{constructor(e,t,i=Bt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class Hv{constructor(){this.ve=0,this.Fe=Gv(),this.Me=Bt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ue(),t=Ue(),i=Ue();return this.Fe.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:Te(38017,{changeType:l})}})),new Bl(this.Me,this.xe,e,t,i)}Ke(){this.Oe=!1,this.Fe=Gv()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,We(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class bP{constructor(e){this.Ge=e,this.ze=new Map,this.je=Yr(),this.He=fc(),this.Je=fc(),this.Ze=new ct(Fe)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const i=this.nt(t);switch(e.state){case 0:this.rt(t)&&i.Le(e.resumeToken);break;case 1:i.We(),i.Ne||i.Ke(),i.Le(e.resumeToken);break;case 2:i.We(),i.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(i.Qe(),i.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),i.Le(e.resumeToken));break;default:Te(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((i,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,i=e.Ce.count,o=this.ot(t);if(o){const l=o.target;if(Gf(l))if(i===0){const c=new Ee(l.path);this.et(t,c,Vt.newNoDocument(c,Re.min()))}else We(i===1,20013,{expectedCount:i});else{const c=this._t(t);if(c!==i){const f=this.ut(e),m=f?this.ct(f,e,c):1;if(m!==0){this.it(t);const y=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,y)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let c,f;try{c=Ki(i).toUint8Array()}catch(m){if(m instanceof yE)return js("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{f=new Up(c,o,l)}catch(m){return js(m instanceof ml?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return f.ge===0?null:f}ct(e,t,i){return t.Ce.count===i-this.Pt(e,t.targetId)?0:2}Pt(e,t){const i=this.Ge.getRemoteKeysForTarget(t);let o=0;return i.forEach((l=>{const c=this.Ge.ht(),f=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.et(t,l,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((l,c)=>{const f=this.ot(c);if(f){if(l.current&&Gf(f.target)){const m=new Ee(f.target.path);this.It(m).has(c)||this.Et(c,m)||this.et(c,m,Vt.newNoDocument(m,e))}l.Be&&(t.set(c,l.ke()),l.Ke())}}));let i=Ue();this.Je.forEach(((l,c)=>{let f=!0;c.forEachWhile((m=>{const y=this.ot(m);return!y||y.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(i=i.add(l))})),this.je.forEach(((l,c)=>c.setReadTime(e)));const o=new Eh(e,t,this.Ze,this.je,i);return this.je=Yr(),this.He=fc(),this.Je=fc(),this.Ze=new ct(Fe),o}Ye(e,t){if(!this.rt(e))return;const i=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,i),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,i){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.qe(t,1):o.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),i&&(this.je=this.je.insert(t,i))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Hv,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new kt(Fe),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new kt(Fe),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||le("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Hv),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function fc(){return new ct(Ee.comparator)}function Gv(){return new ct(Ee.comparator)}const NP={asc:"ASCENDING",desc:"DESCENDING"},DP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},VP={and:"AND",or:"OR"};class OP{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Yf(n,e){return n.useProto3Json||jl(e)?e:{value:e}}function Qc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function QE(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function MP(n,e){return Qc(n,e.toTimestamp())}function Sn(n){return We(!!n,49232),Re.fromTimestamp((function(t){const i=Gi(t);return new it(i.seconds,i.nanos)})(n))}function jp(n,e){return Jf(n,e).canonicalString()}function Jf(n,e){const t=(function(o){return new Xe(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function YE(n){const e=Xe.fromString(n);return We(nT(e),10190,{key:e.toString()}),e}function Yc(n,e){return jp(n.databaseId,e.path)}function Il(n,e){const t=YE(e);if(t.get(1)!==n.databaseId.projectId)throw new re(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new re(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Ee(XE(t))}function JE(n,e){return jp(n.databaseId,e)}function LP(n){const e=YE(n);return e.length===4?Xe.emptyPath():XE(e)}function Xf(n){return new Xe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function XE(n){return We(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Kv(n,e,t){return{name:Yc(n,e),fields:t.value.mapValue.fields}}function FP(n,e){return"found"in e?(function(i,o){We(!!o.found,43571),o.found.name,o.found.updateTime;const l=Il(i,o.found.name),c=Sn(o.found.updateTime),f=o.found.createTime?Sn(o.found.createTime):Re.min(),m=new en({mapValue:{fields:o.found.fields}});return Vt.newFoundDocument(l,c,f,m)})(n,e):"missing"in e?(function(i,o){We(!!o.missing,3894),We(!!o.readTime,22933);const l=Il(i,o.missing),c=Sn(o.readTime);return Vt.newNoDocument(l,c)})(n,e):Te(7234,{result:e})}function UP(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Te(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(y,_){return y.useProto3Json?(We(_===void 0||typeof _=="string",58123),Bt.fromBase64String(_||"")):(We(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array,16193),Bt.fromUint8Array(_||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,f=c&&(function(y){const _=y.code===void 0?H.UNKNOWN:HE(y.code);return new re(_,y.message||"")})(c);t=new KE(i,o,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=Il(n,i.document.name),l=Sn(i.document.updateTime),c=i.document.createTime?Sn(i.document.createTime):Re.min(),f=new en({mapValue:{fields:i.document.fields}}),m=Vt.newFoundDocument(o,l,c,f),y=i.targetIds||[],_=i.removedTargetIds||[];t=new xc(y,_,m.key,m)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=Il(n,i.document),l=i.readTime?Sn(i.readTime):Re.min(),c=Vt.newNoDocument(o,l),f=i.removedTargetIds||[];t=new xc([],f,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=Il(n,i.document),l=i.removedTargetIds||[];t=new xc([],l,o,null)}else{if(!("filter"in e))return Te(11601,{Vt:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,c=new kP(o,l),f=i.targetId;t=new GE(f,c)}}return t}function ZE(n,e){let t;if(e instanceof zl)t={update:Kv(n,e.key,e.value)};else if(e instanceof Lp)t={delete:Yc(n,e.key)};else if(e instanceof es)t={update:Kv(n,e.key,e.data),updateMask:KP(e.fieldMask)};else{if(!(e instanceof WE))return Te(16599,{dt:e.type});t={verify:Yc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,c){const f=c.transform;if(f instanceof Nl)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof Dl)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof Vl)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof Kc)return{fieldPath:c.field.canonicalString(),increment:f.Ae};throw Te(20930,{transform:c.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:MP(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Te(27497)})(n,e.precondition)),t}function jP(n,e){return n&&n.length>0?(We(e!==void 0,14353),n.map((t=>(function(o,l){let c=o.updateTime?Sn(o.updateTime):Sn(l);return c.isEqual(Re.min())&&(c=Sn(l)),new IP(c,o.transformResults||[])})(t,e)))):[]}function zP(n,e){return{documents:[JE(n,e.path)]}}function BP(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=JE(n,o);const l=(function(y){if(y.length!==0)return tT(Kn.create(y,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const c=(function(y){if(y.length!==0)return y.map((_=>(function(I){return{field:Bo(I.field),direction:qP(I.dir)}})(_)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const f=Yf(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{ft:t,parent:o}}function $P(n){let e=LP(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){We(i===1,65062);const _=t.from[0];_.allDescendants?o=_.collectionId:e=e.child(_.collectionId)}let l=[];t.where&&(l=(function(E){const I=eT(E);return I instanceof Kn&&CE(I)?I.getFilters():[I]})(t.where));let c=[];t.orderBy&&(c=(function(E){return E.map((I=>(function(W){return new bl($o(W.field),(function(z){switch(z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(W.direction))})(I)))})(t.orderBy));let f=null;t.limit&&(f=(function(E){let I;return I=typeof E=="object"?E.value:E,jl(I)?null:I})(t.limit));let m=null;t.startAt&&(m=(function(E){const I=!!E.before,D=E.values||[];return new Gc(D,I)})(t.startAt));let y=null;return t.endAt&&(y=(function(E){const I=!E.before,D=E.values||[];return new Gc(D,I)})(t.endAt)),aP(e,o,c,l,f,"F",m,y)}function WP(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function eT(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=$o(t.unaryFilter.field);return It.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=$o(t.unaryFilter.field);return It.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=$o(t.unaryFilter.field);return It.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=$o(t.unaryFilter.field);return It.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Te(61313);default:return Te(60726)}})(n):n.fieldFilter!==void 0?(function(t){return It.create($o(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Te(58110);default:return Te(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Kn.create(t.compositeFilter.filters.map((i=>eT(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Te(1026)}})(t.compositeFilter.op))})(n):Te(30097,{filter:n})}function qP(n){return NP[n]}function HP(n){return DP[n]}function GP(n){return VP[n]}function Bo(n){return{fieldPath:n.canonicalString()}}function $o(n){return jt.fromServerFormat(n.fieldPath)}function tT(n){return n instanceof It?(function(t){if(t.op==="=="){if(Ov(t.value))return{unaryFilter:{field:Bo(t.field),op:"IS_NAN"}};if(Vv(t.value))return{unaryFilter:{field:Bo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ov(t.value))return{unaryFilter:{field:Bo(t.field),op:"IS_NOT_NAN"}};if(Vv(t.value))return{unaryFilter:{field:Bo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bo(t.field),op:HP(t.op),value:t.value}}})(n):n instanceof Kn?(function(t){const i=t.getFilters().map((o=>tT(o)));return i.length===1?i[0]:{compositeFilter:{op:GP(t.op),filters:i}}})(n):Te(54877,{filter:n})}function KP(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function nT(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function rT(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class Li{constructor(e,t,i,o,l=Re.min(),c=Re.min(),f=Bt.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=f,this.expectedCount=m}withSequenceNumber(e){return new Li(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Li(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Li(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Li(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class QP{constructor(e){this.yt=e}}function YP(n){const e=$P({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Qf(e,e.limit,"L"):e}/**
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
 */class JP{constructor(){this.Sn=new XP}addToCollectionParentIndex(e,t){return this.Sn.add(t),K.resolve()}getCollectionParents(e,t){return K.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return K.resolve()}deleteFieldIndex(e,t){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,t){return K.resolve()}getDocumentsMatchingTarget(e,t){return K.resolve(null)}getIndexType(e,t){return K.resolve(0)}getFieldIndexes(e,t){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,t){return K.resolve(Hi.min())}getMinOffsetFromCollectionGroup(e,t){return K.resolve(Hi.min())}updateCollectionGroup(e,t,i){return K.resolve()}updateIndexEntries(e,t){return K.resolve()}}class XP{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new kt(Xe.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new kt(Xe.comparator)).toArray()}}/**
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
 */const Qv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},iT=41943040;class cn{static withCacheSize(e){return new cn(e,cn.DEFAULT_COLLECTION_PERCENTILE,cn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */cn.DEFAULT_COLLECTION_PERCENTILE=10,cn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,cn.DEFAULT=new cn(iT,cn.DEFAULT_COLLECTION_PERCENTILE,cn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),cn.DISABLED=new cn(-1,0,0);/**
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
 */const Yv="LruGarbageCollector",ZP=1048576;function Jv([n,e],[t,i]){const o=Fe(n,t);return o===0?Fe(e,i):o}class ex{constructor(e){this.Pr=e,this.buffer=new kt(Jv),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();Jv(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class tx{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){le(Yv,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ha(t)?le(Yv,"Ignoring IndexedDB error during garbage collection: ",t):await ca(t)}await this.Ar(3e5)}))}}class nx{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return K.resolve(ph.ce);const i=new ex(t);return this.Vr.forEachTarget(e,(o=>i.Er(o.sequenceNumber))).next((()=>this.Vr.mr(e,(o=>i.Er(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(le("LruGarbageCollector","Garbage collection skipped; disabled"),K.resolve(Qv)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(le("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Qv):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let i,o,l,c,f,m,y;const _=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((E=>(E>this.params.maximumSequenceNumbersToCollect?(le("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),o=this.params.maximumSequenceNumbersToCollect):o=E,c=Date.now(),this.nthSequenceNumber(e,o)))).next((E=>(i=E,f=Date.now(),this.removeTargets(e,i,t)))).next((E=>(l=E,m=Date.now(),this.removeOrphanedDocuments(e,i)))).next((E=>(y=Date.now(),jo()<=Le.DEBUG&&le("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-_}ms
	Determined least recently used ${o} in `+(f-c)+`ms
	Removed ${l} targets in `+(m-f)+`ms
	Removed ${E} documents in `+(y-m)+`ms
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
 */class ix{constructor(){this.changes=new Hs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Vt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?K.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ox{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&Tl(i.mutation,o,En.empty(),it.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,Ue()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=Ue()){const o=Vs();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((l=>{let c=pl();return l.forEach(((f,m)=>{c=c.insert(f,m.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const i=Vs();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,Ue())))}populateOverlays(e,t,i){const o=[];return i.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((c,f)=>{t.set(c,f)}))}))}computeViews(e,t,i,o){let l=Yr();const c=El(),f=(function(){return El()})();return t.forEach(((m,y)=>{const _=i.get(y.key);o.has(y.key)&&(_===void 0||_.mutation instanceof es)?l=l.insert(y.key,y):_!==void 0?(c.set(y.key,_.mutation.getFieldMask()),Tl(_.mutation,y,_.mutation.getFieldMask(),it.now())):c.set(y.key,En.empty())})),this.recalculateAndSaveOverlays(e,l).next((m=>(m.forEach(((y,_)=>c.set(y,_))),t.forEach(((y,_)=>f.set(y,new sx(_,c.get(y)??null)))),f)))}recalculateAndSaveOverlays(e,t){const i=El();let o=new ct(((c,f)=>c-f)),l=Ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const f of c)f.keys().forEach((m=>{const y=t.get(m);if(y===null)return;let _=i.get(m)||En.empty();_=f.applyToLocalView(y,_),i.set(m,_);const E=(o.get(f.batchId)||Ue()).add(m);o=o.insert(f.batchId,E)}))})).next((()=>{const c=[],f=o.getReverseIterator();for(;f.hasNext();){const m=f.getNext(),y=m.key,_=m.value,E=ME();_.forEach((I=>{if(!l.has(I)){const D=BE(t.get(I),i.get(I));D!==null&&E.set(I,D),l=l.add(I)}})),c.push(this.documentOverlayCache.saveOverlays(e,y,E))}return K.waitFor(c)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return lP(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):bE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((l=>{const c=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):K.resolve(Vs());let f=Cl,m=l;return c.next((y=>K.forEach(y,((_,E)=>(f<E.largestBatchId&&(f=E.largestBatchId),l.get(_)?K.resolve():this.remoteDocumentCache.getEntry(e,_).next((I=>{m=m.insert(_,I)}))))).next((()=>this.populateOverlays(e,y,l))).next((()=>this.computeViews(e,m,y,Ue()))).next((_=>({batchId:f,changes:OE(_)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ee(t)).next((i=>{let o=pl();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let c=pl();return this.indexManager.getCollectionParents(e,l).next((f=>K.forEach(f,(m=>{const y=(function(E,I){return new da(I,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)})(t,m.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next((_=>{_.forEach(((E,I)=>{c=c.insert(E,I)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o)))).next((c=>{l.forEach(((m,y)=>{const _=y.getKey();c.get(_)===null&&(c=c.insert(_,Vt.newInvalidDocument(_)))}));let f=pl();return c.forEach(((m,y)=>{const _=l.get(m);_!==void 0&&Tl(_.mutation,y,En.empty(),it.now()),vh(t,y)&&(f=f.insert(m,y))})),f}))}}/**
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
 */class ax{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return K.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:Sn(o.createTime)}})(t)),K.resolve()}getNamedQuery(e,t){return K.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(o){return{name:o.name,query:YP(o.bundledQuery),readTime:Sn(o.readTime)}})(t)),K.resolve()}}/**
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
 */class lx{constructor(){this.overlays=new ct(Ee.comparator),this.Lr=new Map}getOverlay(e,t){return K.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Vs();return K.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&i.set(o,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,l)=>{this.bt(e,t,l)})),K.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.Lr.get(i);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.Lr.delete(i)),K.resolve()}getOverlaysForCollection(e,t,i){const o=Vs(),l=t.length+1,c=new Ee(t.child("")),f=this.overlays.getIteratorFrom(c);for(;f.hasNext();){const m=f.getNext().value,y=m.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&m.largestBatchId>i&&o.set(m.getKey(),m)}return K.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new ct(((y,_)=>y-_));const c=this.overlays.getIterator();for(;c.hasNext();){const y=c.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let _=l.get(y.largestBatchId);_===null&&(_=Vs(),l=l.insert(y.largestBatchId,_)),_.set(y.getKey(),y)}}const f=Vs(),m=l.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach(((y,_)=>f.set(y,_))),!(f.size()>=o)););return K.resolve(f)}bt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const c=this.Lr.get(o.largestBatchId).delete(i.key);this.Lr.set(o.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new CP(t,i));let l=this.Lr.get(t);l===void 0&&(l=Ue(),this.Lr.set(t,l)),this.Lr.set(t,l.add(i.key))}}/**
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
 */class ux{constructor(){this.sessionToken=Bt.EMPTY_BYTE_STRING}getSessionToken(e){return K.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,K.resolve()}}/**
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
 */class zp{constructor(){this.kr=new kt(Dt.Kr),this.qr=new kt(Dt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const i=new Dt(e,t);this.kr=this.kr.add(i),this.qr=this.qr.add(i)}$r(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new Dt(e,t))}Qr(e,t){e.forEach((i=>this.removeReference(i,t)))}Gr(e){const t=new Ee(new Xe([])),i=new Dt(t,e),o=new Dt(t,e+1),l=[];return this.qr.forEachInRange([i,o],(c=>{this.Wr(c),l.push(c.key)})),l}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new Ee(new Xe([])),i=new Dt(t,e),o=new Dt(t,e+1);let l=Ue();return this.qr.forEachInRange([i,o],(c=>{l=l.add(c.key)})),l}containsKey(e){const t=new Dt(e,0),i=this.kr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Dt{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return Ee.comparator(e.key,t.key)||Fe(e.Hr,t.Hr)}static Ur(e,t){return Fe(e.Hr,t.Hr)||Ee.comparator(e.key,t.key)}}/**
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
 */class cx{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new kt(Dt.Kr)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new RP(l,t,i,o);this.mutationQueue.push(c);for(const f of o)this.Jr=this.Jr.add(new Dt(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return K.resolve(c)}lookupMutationBatch(e,t){return K.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Xr(i),l=o<0?0:o;return K.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?bp:this.Yn-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Dt(t,0),o=new Dt(t,Number.POSITIVE_INFINITY),l=[];return this.Jr.forEachInRange([i,o],(c=>{const f=this.Zr(c.Hr);l.push(f)})),K.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new kt(Fe);return t.forEach((o=>{const l=new Dt(o,0),c=new Dt(o,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([l,c],(f=>{i=i.add(f.Hr)}))})),K.resolve(this.Yr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;Ee.isDocumentKey(l)||(l=l.child(""));const c=new Dt(new Ee(l),0);let f=new kt(Fe);return this.Jr.forEachWhile((m=>{const y=m.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(f=f.add(m.Hr)),!0)}),c),K.resolve(this.Yr(f))}Yr(e){const t=[];return e.forEach((i=>{const o=this.Zr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){We(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Jr;return K.forEach(t.mutations,(o=>{const l=new Dt(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Jr=i}))}nr(e){}containsKey(e,t){const i=new Dt(t,0),o=this.Jr.firstAfterOrEqual(i);return K.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class hx{constructor(e){this.ti=e,this.docs=(function(){return new ct(Ee.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,c=this.ti(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return K.resolve(i?i.document.mutableCopy():Vt.newInvalidDocument(t))}getEntries(e,t){let i=Yr();return t.forEach((o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():Vt.newInvalidDocument(o))})),K.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Yr();const c=t.path,f=new Ee(c.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(f);for(;m.hasNext();){const{key:y,value:{document:_}}=m.getNext();if(!c.isPrefixOf(y.path))break;y.path.length>c.length+1||Fk(Lk(_),i)<=0||(o.has(_.key)||vh(t,_))&&(l=l.insert(_.key,_.mutableCopy()))}return K.resolve(l)}getAllFromCollectionGroup(e,t,i,o){Te(9500)}ni(e,t){return K.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new dx(this)}getSize(e){return K.resolve(this.size)}}class dx extends ix{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Mr.addEntry(e,o)):this.Mr.removeEntry(i)})),K.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class fx{constructor(e){this.persistence=e,this.ri=new Hs((t=>Vp(t)),Op),this.lastRemoteSnapshotVersion=Re.min(),this.highestTargetId=0,this.ii=0,this.si=new zp,this.targetCount=0,this.oi=ra._r()}forEachTarget(e,t){return this.ri.forEach(((i,o)=>t(o))),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.ii&&(this.ii=t),K.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new ra(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,K.resolve()}updateTargetData(e,t){return this.lr(t),K.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.ri.forEach(((c,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.ri.delete(c),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),K.waitFor(l).next((()=>o))}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,t){const i=this.ri.get(t)||null;return K.resolve(i)}addMatchingKeys(e,t,i){return this.si.$r(t,i),K.resolve()}removeMatchingKeys(e,t,i){this.si.Qr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((c=>{l.push(o.markPotentiallyOrphaned(e,c))})),K.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),K.resolve()}getMatchingKeysForTargetId(e,t){const i=this.si.jr(t);return K.resolve(i)}containsKey(e,t){return K.resolve(this.si.containsKey(t))}}/**
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
 */class sT{constructor(e,t){this._i={},this.overlays={},this.ai=new ph(0),this.ui=!1,this.ui=!0,this.ci=new ux,this.referenceDelegate=e(this),this.li=new fx(this),this.indexManager=new JP,this.remoteDocumentCache=(function(o){return new hx(o)})((i=>this.referenceDelegate.hi(i))),this.serializer=new QP(t),this.Pi=new ax(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new lx,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this._i[e.toKey()];return i||(i=new cx(t,this.referenceDelegate),this._i[e.toKey()]=i),i}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,i){le("MemoryPersistence","Starting transaction:",e);const o=new px(this.ai.next());return this.referenceDelegate.Ti(),i(o).next((l=>this.referenceDelegate.Ii(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ei(e,t){return K.or(Object.values(this._i).map((i=>()=>i.containsKey(e,t))))}}class px extends jk{constructor(e){super(),this.currentSequenceNumber=e}}class Bp{constructor(e){this.persistence=e,this.Ri=new zp,this.Ai=null}static Vi(e){return new Bp(e)}get di(){if(this.Ai)return this.Ai;throw Te(60996)}addReference(e,t,i){return this.Ri.addReference(i,t),this.di.delete(i.toString()),K.resolve()}removeReference(e,t,i){return this.Ri.removeReference(i,t),this.di.add(i.toString()),K.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),K.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((o=>this.di.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.di.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.di,(i=>{const o=Ee.fromPath(i);return this.mi(e,o).next((l=>{l||t.removeEntry(o,Re.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((i=>{i?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return K.or([()=>K.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Jc{constructor(e,t){this.persistence=e,this.fi=new Hs((i=>$k(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=rx(this,t)}static Vi(e,t){return new Jc(e,t)}Ti(){}Ii(e){return K.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}pr(e){let t=0;return this.mr(e,(i=>{t++})).next((()=>t))}mr(e,t){return K.forEach(this.fi,((i,o)=>this.wr(e,i,o).next((l=>l?K.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ni(e,(c=>this.wr(e,c,t).next((f=>{f||(i++,l.removeEntry(c,Re.min()))})))).next((()=>l.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),K.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),K.resolve()}removeReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),K.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),K.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Cc(e.data.value)),t}wr(e,t,i){return K.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.fi.get(t);return K.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class $p{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Ts=i,this.Is=o}static Es(e,t){let i=Ue(),o=Ue();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new $p(e,t.fromCache,i,o)}}/**
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
 */class gx{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return MS()?8:zk(Yt())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.gs(e,t).next((c=>{l.result=c})).next((()=>{if(!l.result)return this.ps(e,t,o,i).next((c=>{l.result=c}))})).next((()=>{if(l.result)return;const c=new mx;return this.ys(e,t,c).next((f=>{if(l.result=f,this.As)return this.ws(e,t,c,f.size)}))})).next((()=>l.result))}ws(e,t,i,o){return i.documentReadCount<this.Vs?(jo()<=Le.DEBUG&&le("QueryEngine","SDK will not create cache indexes for query:",zo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),K.resolve()):(jo()<=Le.DEBUG&&le("QueryEngine","Query:",zo(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.ds*o?(jo()<=Le.DEBUG&&le("QueryEngine","The SDK decides to create cache indexes for query:",zo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,wr(t))):K.resolve())}gs(e,t){if(Uv(t))return K.resolve(null);let i=wr(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Qf(t,null,"F"),i=wr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const c=Ue(...l);return this.fs.getDocuments(e,c).next((f=>this.indexManager.getMinOffset(e,i).next((m=>{const y=this.bs(t,f);return this.Ss(t,y,c,m.readTime)?this.gs(e,Qf(t,null,"F")):this.Ds(e,y,t,m)}))))})))))}ps(e,t,i,o){return Uv(t)||o.isEqual(Re.min())?K.resolve(null):this.fs.getDocuments(e,i).next((l=>{const c=this.bs(t,l);return this.Ss(t,c,i,o)?K.resolve(null):(jo()<=Le.DEBUG&&le("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),zo(t)),this.Ds(e,c,t,Mk(o,Cl)).next((f=>f)))}))}bs(e,t){let i=new kt(DE(e));return t.forEach(((o,l)=>{vh(e,l)&&(i=i.add(l))})),i}Ss(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ys(e,t,i){return jo()<=Le.DEBUG&&le("QueryEngine","Using full collection scan to execute query:",zo(t)),this.fs.getDocumentsMatchingQuery(e,t,Hi.min(),i)}Ds(e,t,i,o){return this.fs.getDocumentsMatchingQuery(e,i,o).next((l=>(t.forEach((c=>{l=l.insert(c.key,c)})),l)))}}/**
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
 */const Wp="LocalStore",yx=3e8;class vx{constructor(e,t,i,o){this.persistence=e,this.Cs=t,this.serializer=o,this.vs=new ct(Fe),this.Fs=new Hs((l=>Vp(l)),Op),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(i)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ox(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function _x(n,e,t,i){return new vx(n,e,t,i)}async function oT(n,e){const t=Pe(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((l=>(o=l,t.Os(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const c=[],f=[];let m=Ue();for(const y of o){c.push(y.batchId);for(const _ of y.mutations)m=m.add(_.key)}for(const y of l){f.push(y.batchId);for(const _ of y.mutations)m=m.add(_.key)}return t.localDocuments.getDocuments(i,m).next((y=>({Ns:y,removedBatchIds:c,addedBatchIds:f})))}))}))}function wx(n,e){const t=Pe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),l=t.xs.newChangeBuffer({trackRemovals:!0});return(function(f,m,y,_){const E=y.batch,I=E.keys();let D=K.resolve();return I.forEach((W=>{D=D.next((()=>_.getEntry(m,W))).next((M=>{const z=y.docVersions.get(W);We(z!==null,48541),M.version.compareTo(z)<0&&(E.applyToRemoteDocument(M,y),M.isValidDocument()&&(M.setReadTime(y.commitVersion),_.addEntry(M)))}))})),D.next((()=>f.mutationQueue.removeMutationBatch(m,E)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(f){let m=Ue();for(let y=0;y<f.mutationResults.length;++y)f.mutationResults[y].transformResults.length>0&&(m=m.add(f.batch.mutations[y].key));return m})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function aT(n){const e=Pe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function Ex(n,e){const t=Pe(n),i=e.snapshotVersion;let o=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const c=t.xs.newChangeBuffer({trackRemovals:!0});o=t.vs;const f=[];e.targetChanges.forEach(((_,E)=>{const I=o.get(E);if(!I)return;f.push(t.li.removeMatchingKeys(l,_.removedDocuments,E).next((()=>t.li.addMatchingKeys(l,_.addedDocuments,E))));let D=I.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(E)!==null?D=D.withResumeToken(Bt.EMPTY_BYTE_STRING,Re.min()).withLastLimboFreeSnapshotVersion(Re.min()):_.resumeToken.approximateByteSize()>0&&(D=D.withResumeToken(_.resumeToken,i)),o=o.insert(E,D),(function(M,z,Z){return M.resumeToken.approximateByteSize()===0||z.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=yx?!0:Z.addedDocuments.size+Z.modifiedDocuments.size+Z.removedDocuments.size>0})(I,D,_)&&f.push(t.li.updateTargetData(l,D))}));let m=Yr(),y=Ue();if(e.documentUpdates.forEach((_=>{e.resolvedLimboDocuments.has(_)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,_))})),f.push(Tx(l,c,e.documentUpdates).next((_=>{m=_.Bs,y=_.Ls}))),!i.isEqual(Re.min())){const _=t.li.getLastRemoteSnapshotVersion(l).next((E=>t.li.setTargetsMetadata(l,l.currentSequenceNumber,i)));f.push(_)}return K.waitFor(f).next((()=>c.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,m,y))).next((()=>m))})).then((l=>(t.vs=o,l)))}function Tx(n,e,t){let i=Ue(),o=Ue();return t.forEach((l=>i=i.add(l))),e.getEntries(n,i).next((l=>{let c=Yr();return t.forEach(((f,m)=>{const y=l.get(f);m.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(f)),m.isNoDocument()&&m.version.isEqual(Re.min())?(e.removeEntry(f,m.readTime),c=c.insert(f,m)):!y.isValidDocument()||m.version.compareTo(y.version)>0||m.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(m),c=c.insert(f,m)):le(Wp,"Ignoring outdated watch update for ",f,". Current version:",y.version," Watch version:",m.version)})),{Bs:c,Ls:o}}))}function Ix(n,e){const t=Pe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=bp),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function Sx(n,e){const t=Pe(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.li.getTargetData(i,e).next((l=>l?(o=l,K.resolve(o)):t.li.allocateTargetId(i).next((c=>(o=new Li(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.li.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.vs.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.vs=t.vs.insert(i.targetId,i),t.Fs.set(e,i.targetId)),i}))}async function Zf(n,e,t){const i=Pe(n),o=i.vs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(c=>i.persistence.referenceDelegate.removeTarget(c,o)))}catch(c){if(!ha(c))throw c;le(Wp,`Failed to update sequence numbers for target ${e}: ${c}`)}i.vs=i.vs.remove(e),i.Fs.delete(o.target)}function Xv(n,e,t){const i=Pe(n);let o=Re.min(),l=Ue();return i.persistence.runTransaction("Execute query","readwrite",(c=>(function(m,y,_){const E=Pe(m),I=E.Fs.get(_);return I!==void 0?K.resolve(E.vs.get(I)):E.li.getTargetData(y,_)})(i,c,wr(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.li.getMatchingKeysForTargetId(c,f.targetId).next((m=>{l=m}))})).next((()=>i.Cs.getDocumentsMatchingQuery(c,e,t?o:Re.min(),t?l:Ue()))).next((f=>(Ax(i,hP(e),f),{documents:f,ks:l})))))}function Ax(n,e,t){let i=n.Ms.get(e)||Re.min();t.forEach(((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),n.Ms.set(e,i)}class Zv{constructor(){this.activeTargetIds=yP()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Rx{constructor(){this.vo=new Zv,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,i){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Zv,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */const e_="ConnectivityMonitor";class t_{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){le(e_,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){le(e_,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let pc=null;function ep(){return pc===null?pc=(function(){return 268435456+Math.round(2147483648*Math.random())})():pc++,"0x"+pc.toString(16)}/**
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
 */const wf="RestConnection",kx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Px{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${i}/databases/${o}`,this.$o=this.databaseId.database===qc?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Wo(e,t,i,o,l){const c=ep(),f=this.Qo(e,t.toUriEncodedString());le(wf,`Sending RPC '${e}' ${c}:`,f,i);const m={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(m,o,l);const{host:y}=new URL(f),_=oa(y);return this.zo(e,f,m,i,_).then((E=>(le(wf,`Received RPC '${e}' ${c}: `,E),E)),(E=>{throw js(wf,`RPC '${e}' ${c} failed with error: `,E,"url: ",f,"request:",i),E}))}jo(e,t,i,o,l,c){return this.Wo(e,t,i,o,l)}Go(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ua})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),i&&i.headers.forEach(((o,l)=>e[l]=o))}Qo(e,t){const i=kx[e];let o=`${this.qo}/v1/${t}:${i}`;return this.databaseInfo.apiKey&&(o=`${o}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),o}terminate(){}}/**
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
 */const Kt="WebChannelConnection",cl=(n,e,t)=>{n.listen(e,(i=>{try{t(i)}catch(o){setTimeout((()=>{throw o}),0)}}))};class Yo extends Px{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Yo.c_){const e=uE();cl(e,lE.STAT_EVENT,(t=>{t.stat===Bf.PROXY?le(Kt,"STAT_EVENT: detected buffering proxy"):t.stat===Bf.NOPROXY&&le(Kt,"STAT_EVENT: detected no buffering proxy")})),Yo.c_=!0}}zo(e,t,i,o,l){const c=ep();return new Promise(((f,m)=>{const y=new oE;y.setWithCredentials(!0),y.listenOnce(aE.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case Rc.NO_ERROR:const E=y.getResponseJson();le(Kt,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(E)),f(E);break;case Rc.TIMEOUT:le(Kt,`RPC '${e}' ${c} timed out`),m(new re(H.DEADLINE_EXCEEDED,"Request time out"));break;case Rc.HTTP_ERROR:const I=y.getStatus();if(le(Kt,`RPC '${e}' ${c} failed with status:`,I,"response text:",y.getResponseText()),I>0){let D=y.getResponseJson();Array.isArray(D)&&(D=D[0]);const W=D==null?void 0:D.error;if(W&&W.status&&W.message){const M=(function(Z){const ne=Z.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(ne)>=0?ne:H.UNKNOWN})(W.status);m(new re(M,W.message))}else m(new re(H.UNKNOWN,"Server responded with status "+y.getStatus()))}else m(new re(H.UNAVAILABLE,"Connection failed."));break;default:Te(9055,{l_:e,streamId:c,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{le(Kt,`RPC '${e}' ${c} completed.`)}}));const _=JSON.stringify(o);le(Kt,`RPC '${e}' ${c} sending request:`,o),y.send(t,"POST",_,i,15)}))}T_(e,t,i){const o=ep(),l=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=this.createWebChannelTransport(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(f.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Go(f.initMessageHeaders,t,i),f.encodeInitMessageHeaders=!0;const y=l.join("");le(Kt,`Creating RPC '${e}' stream ${o}: ${y}`,f);const _=c.createWebChannel(y,f);this.I_(_);let E=!1,I=!1;const D=new xx({Ho:W=>{I?le(Kt,`Not sending because RPC '${e}' stream ${o} is closed:`,W):(E||(le(Kt,`Opening RPC '${e}' stream ${o} transport.`),_.open(),E=!0),le(Kt,`RPC '${e}' stream ${o} sending:`,W),_.send(W))},Jo:()=>_.close()});return cl(_,fl.EventType.OPEN,(()=>{I||(le(Kt,`RPC '${e}' stream ${o} transport opened.`),D.i_())})),cl(_,fl.EventType.CLOSE,(()=>{I||(I=!0,le(Kt,`RPC '${e}' stream ${o} transport closed`),D.o_(),this.E_(_))})),cl(_,fl.EventType.ERROR,(W=>{I||(I=!0,js(Kt,`RPC '${e}' stream ${o} transport errored. Name:`,W.name,"Message:",W.message),D.o_(new re(H.UNAVAILABLE,"The operation could not be completed")))})),cl(_,fl.EventType.MESSAGE,(W=>{var M;if(!I){const z=W.data[0];We(!!z,16349);const Z=z,ne=(Z==null?void 0:Z.error)||((M=Z[0])==null?void 0:M.error);if(ne){le(Kt,`RPC '${e}' stream ${o} received error:`,ne);const ie=ne.status;let ue=(function(R){const S=Tt[R];if(S!==void 0)return HE(S)})(ie),ve=ne.message;ie==="NOT_FOUND"&&ve.includes("database")&&ve.includes("does not exist")&&ve.includes(this.databaseId.database)&&js(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),ue===void 0&&(ue=H.INTERNAL,ve="Unknown error status: "+ie+" with message "+ne.message),I=!0,D.o_(new re(ue,ve)),_.close()}else le(Kt,`RPC '${e}' stream ${o} received:`,z),D.__(z)}})),Yo.u_(),setTimeout((()=>{D.s_()}),0),D}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,i){super.Go(e,t,i),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return cE()}}/**
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
 */function bx(n){return new Yo(n)}function Ef(){return typeof document<"u"?document:null}/**
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
 */Yo.c_=!1;class qp{constructor(e,t,i=1e3,o=1.5,l=6e4){this.Ci=e,this.timerId=t,this.R_=i,this.A_=o,this.V_=l,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),i=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-i);o>0&&le("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const n_="PersistentStream";class lT{constructor(e,t,i,o,l,c,f,m){this.Ci=e,this.b_=i,this.S_=o,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=f,this.listener=m,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new qp(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===H.RESOURCE_EXHAUSTED?(Qr(t.toString()),Qr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.D_===t&&this.G_(i,o)}),(i=>{e((()=>{const o=new re(H.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(o)}))}))}G_(e,t){const i=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.Yo((()=>{i((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((o=>{i((()=>this.z_(o)))})),this.stream.onMessage((o=>{i((()=>++this.F_==1?this.H_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return le(n_,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(le(n_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Nx extends lT{constructor(e,t,i,o,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=UP(this.serializer,e),i=(function(l){if(!("targetChange"in l))return Re.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Re.min():c.readTime?Sn(c.readTime):Re.min()})(e);return this.listener.J_(t,i)}Z_(e){const t={};t.database=Xf(this.serializer),t.addTarget=(function(l,c){let f;const m=c.target;if(f=Gf(m)?{documents:zP(l,m)}:{query:BP(l,m).ft},f.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){f.resumeToken=QE(l,c.resumeToken);const y=Yf(l,c.expectedCount);y!==null&&(f.expectedCount=y)}else if(c.snapshotVersion.compareTo(Re.min())>0){f.readTime=Qc(l,c.snapshotVersion.toTimestamp());const y=Yf(l,c.expectedCount);y!==null&&(f.expectedCount=y)}return f})(this.serializer,e);const i=WP(this.serializer,e);i&&(t.labels=i),this.K_(t)}X_(e){const t={};t.database=Xf(this.serializer),t.removeTarget=e,this.K_(t)}}class Dx extends lT{constructor(e,t,i,o,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return We(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,We(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){We(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=jP(e.writeResults,e.commitTime),i=Sn(e.commitTime);return this.listener.na(i,t)}ra(){const e={};e.database=Xf(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>ZE(this.serializer,i)))};this.K_(t)}}/**
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
 */class Vx{}class Ox extends Vx{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new re(H.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,c])=>this.connection.Wo(e,Jf(t,i),o,l,c))).catch((l=>{throw l.name==="FirebaseError"?(l.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new re(H.UNKNOWN,l.toString())}))}jo(e,t,i,o,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,f])=>this.connection.jo(e,Jf(t,i),o,c,f,l))).catch((c=>{throw c.name==="FirebaseError"?(c.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new re(H.UNKNOWN,c.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function Mx(n,e,t,i){return new Ox(n,e,t,i)}class Lx{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Qr(t),this.aa=!1):le("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const zs="RemoteStore";class Fx{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=l,this.Aa.Mo((c=>{i.enqueueAndForget((async()=>{Gs(this)&&(le(zs,"Restarting streams for network reachability change."),await(async function(m){const y=Pe(m);y.Ea.add(4),await $l(y),y.Va.set("Unknown"),y.Ea.delete(4),await Ih(y)})(this))}))})),this.Va=new Lx(i,o)}}async function Ih(n){if(Gs(n))for(const e of n.Ra)await e(!0)}async function $l(n){for(const e of n.Ra)await e(!1)}function uT(n,e){const t=Pe(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Qp(t)?Kp(t):fa(t).O_()&&Gp(t,e))}function Hp(n,e){const t=Pe(n),i=fa(t);t.Ia.delete(e),i.O_()&&cT(t,e),t.Ia.size===0&&(i.O_()?i.L_():Gs(t)&&t.Va.set("Unknown"))}function Gp(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Re.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}fa(n).Z_(e)}function cT(n,e){n.da.$e(e),fa(n).X_(e)}function Kp(n){n.da=new bP({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),fa(n).start(),n.Va.ua()}function Qp(n){return Gs(n)&&!fa(n).x_()&&n.Ia.size>0}function Gs(n){return Pe(n).Ea.size===0}function hT(n){n.da=void 0}async function Ux(n){n.Va.set("Online")}async function jx(n){n.Ia.forEach(((e,t)=>{Gp(n,e)}))}async function zx(n,e){hT(n),Qp(n)?(n.Va.ha(e),Kp(n)):n.Va.set("Unknown")}async function Bx(n,e,t){if(n.Va.set("Online"),e instanceof KE&&e.state===2&&e.cause)try{await(async function(o,l){const c=l.cause;for(const f of l.targetIds)o.Ia.has(f)&&(await o.remoteSyncer.rejectListen(f,c),o.Ia.delete(f),o.da.removeTarget(f))})(n,e)}catch(i){le(zs,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Xc(n,i)}else if(e instanceof xc?n.da.Xe(e):e instanceof GE?n.da.st(e):n.da.tt(e),!t.isEqual(Re.min()))try{const i=await aT(n.localStore);t.compareTo(i)>=0&&await(function(l,c){const f=l.da.Tt(c);return f.targetChanges.forEach(((m,y)=>{if(m.resumeToken.approximateByteSize()>0){const _=l.Ia.get(y);_&&l.Ia.set(y,_.withResumeToken(m.resumeToken,c))}})),f.targetMismatches.forEach(((m,y)=>{const _=l.Ia.get(m);if(!_)return;l.Ia.set(m,_.withResumeToken(Bt.EMPTY_BYTE_STRING,_.snapshotVersion)),cT(l,m);const E=new Li(_.target,m,y,_.sequenceNumber);Gp(l,E)})),l.remoteSyncer.applyRemoteEvent(f)})(n,t)}catch(i){le(zs,"Failed to raise snapshot:",i),await Xc(n,i)}}async function Xc(n,e,t){if(!ha(e))throw e;n.Ea.add(1),await $l(n),n.Va.set("Offline"),t||(t=()=>aT(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{le(zs,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Ih(n)}))}function dT(n,e){return e().catch((t=>Xc(n,t,e)))}async function Sh(n){const e=Pe(n),t=Yi(e);let i=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:bp;for(;$x(e);)try{const o=await Ix(e.localStore,i);if(o===null){e.Ta.length===0&&t.L_();break}i=o.batchId,Wx(e,o)}catch(o){await Xc(e,o)}fT(e)&&pT(e)}function $x(n){return Gs(n)&&n.Ta.length<10}function Wx(n,e){n.Ta.push(e);const t=Yi(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function fT(n){return Gs(n)&&!Yi(n).x_()&&n.Ta.length>0}function pT(n){Yi(n).start()}async function qx(n){Yi(n).ra()}async function Hx(n){const e=Yi(n);for(const t of n.Ta)e.ea(t.mutations)}async function Gx(n,e,t){const i=n.Ta.shift(),o=Fp.from(i,e,t);await dT(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await Sh(n)}async function Kx(n,e){e&&Yi(n).Y_&&await(async function(i,o){if((function(c){return qE(c)&&c!==H.ABORTED})(o.code)){const l=i.Ta.shift();Yi(i).B_(),await dT(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o))),await Sh(i)}})(n,e),fT(n)&&pT(n)}async function r_(n,e){const t=Pe(n);t.asyncQueue.verifyOperationInProgress(),le(zs,"RemoteStore received new credentials");const i=Gs(t);t.Ea.add(3),await $l(t),i&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Ih(t)}async function Qx(n,e){const t=Pe(n);e?(t.Ea.delete(2),await Ih(t)):e||(t.Ea.add(2),await $l(t),t.Va.set("Unknown"))}function fa(n){return n.ma||(n.ma=(function(t,i,o){const l=Pe(t);return l.sa(),new Nx(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:Ux.bind(null,n),Yo:jx.bind(null,n),t_:zx.bind(null,n),J_:Bx.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),Qp(n)?Kp(n):n.Va.set("Unknown")):(await n.ma.stop(),hT(n))}))),n.ma}function Yi(n){return n.fa||(n.fa=(function(t,i,o){const l=Pe(t);return l.sa(),new Dx(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:qx.bind(null,n),t_:Kx.bind(null,n),ta:Hx.bind(null,n),na:Gx.bind(null,n)}),n.Ra.push((async e=>{e?(n.fa.B_(),await Sh(n)):(await n.fa.stop(),n.Ta.length>0&&(le(zs,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class Yp{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new _r,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const c=Date.now()+i,f=new Yp(e,t,c,o,l);return f.start(i),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jp(n,e){if(Qr("AsyncQueue",`${e}: ${n}`),ha(n))return new re(H.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Jo{static emptySet(e){return new Jo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||Ee.comparator(t.key,i.key):(t,i)=>Ee.comparator(t.key,i.key),this.keyedMap=pl(),this.sortedSet=new ct(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Jo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class i_{constructor(){this.ga=new ct(Ee.comparator)}track(e){const t=e.doc.key,i=this.ga.get(t);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(t,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(t):e.type===1&&i.type===2?this.ga=this.ga.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):Te(63341,{Vt:e,pa:i}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,i)=>{e.push(i)})),e}}class ia{constructor(e,t,i,o,l,c,f,m,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=f,this.excludesMetadataChanges=m,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const c=[];return t.forEach((f=>{c.push({type:0,doc:f})})),new ia(e,t,Jo.emptySet(t),c,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
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
 */class Yx{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class Jx{constructor(){this.queries=s_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,i){const o=Pe(t),l=o.queries;o.queries=s_(),l.forEach(((c,f)=>{for(const m of f.ba)m.onError(i)}))})(this,new re(H.ABORTED,"Firestore shutting down"))}}function s_(){return new Hs((n=>NE(n)),yh)}async function Xp(n,e){const t=Pe(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Sa()&&e.Da()&&(i=2):(l=new Yx,i=e.Da()?0:1);try{switch(i){case 0:l.wa=await t.onListen(o,!0);break;case 1:l.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(c){const f=Jp(c,`Initialization of query '${zo(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.ba.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&em(t)}async function Zp(n,e){const t=Pe(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const c=l.ba.indexOf(e);c>=0&&(l.ba.splice(c,1),l.ba.length===0?o=e.Da()?0:1:!l.Sa()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function Xx(n,e){const t=Pe(n);let i=!1;for(const o of e){const l=o.query,c=t.queries.get(l);if(c){for(const f of c.ba)f.Fa(o)&&(i=!0);c.wa=o}}i&&em(t)}function Zx(n,e,t){const i=Pe(n),o=i.queries.get(e);if(o)for(const l of o.ba)l.onError(t);i.queries.delete(e)}function em(n){n.Ca.forEach((e=>{e.next()}))}var tp,o_;(o_=tp||(tp={})).Ma="default",o_.Cache="cache";class tm{constructor(e,t,i){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new ia(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const i=t!=="Offline";return(!this.options.Ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=ia.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==tp.Cache}}/**
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
 */class mT{constructor(e){this.key=e}}class gT{constructor(e){this.key=e}}class eb{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Ue(),this.mutatedKeys=Ue(),this.eu=DE(e),this.tu=new Jo(this.eu)}get nu(){return this.Za}ru(e,t){const i=t?t.iu:new i_,o=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,c=o,f=!1;const m=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((_,E)=>{const I=o.get(_),D=vh(this.query,E)?E:null,W=!!I&&this.mutatedKeys.has(I.key),M=!!D&&(D.hasLocalMutations||this.mutatedKeys.has(D.key)&&D.hasCommittedMutations);let z=!1;I&&D?I.data.isEqual(D.data)?W!==M&&(i.track({type:3,doc:D}),z=!0):this.su(I,D)||(i.track({type:2,doc:D}),z=!0,(m&&this.eu(D,m)>0||y&&this.eu(D,y)<0)&&(f=!0)):!I&&D?(i.track({type:0,doc:D}),z=!0):I&&!D&&(i.track({type:1,doc:I}),z=!0,(m||y)&&(f=!0)),z&&(D?(c=c.add(D),l=M?l.add(_):l.delete(_)):(c=c.delete(_),l=l.delete(_)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const _=this.query.limitType==="F"?c.last():c.first();c=c.delete(_.key),l=l.delete(_.key),i.track({type:1,doc:_})}return{tu:c,iu:i,Ss:f,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort(((_,E)=>(function(D,W){const M=z=>{switch(z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te(20277,{Vt:z})}};return M(D)-M(W)})(_.type,E.type)||this.eu(_.doc,E.doc))),this.ou(i),o=o??!1;const f=t&&!o?this._u():[],m=this.Ya.size===0&&this.current&&!o?1:0,y=m!==this.Xa;return this.Xa=m,c.length!==0||y?{snapshot:new ia(this.query,e.tu,l,c,e.mutatedKeys,m===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:f}:{au:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new i_,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=Ue(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Ya=this.Ya.add(i.key))}));const t=[];return e.forEach((i=>{this.Ya.has(i)||t.push(new gT(i))})),this.Ya.forEach((i=>{e.has(i)||t.push(new mT(i))})),t}cu(e){this.Za=e.ks,this.Ya=Ue();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return ia.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const nm="SyncEngine";class tb{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class nb{constructor(e){this.key=e,this.hu=!1}}class rb{constructor(e,t,i,o,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new Hs((f=>NE(f)),yh),this.Iu=new Map,this.Eu=new Set,this.Ru=new ct(Ee.comparator),this.Au=new Map,this.Vu=new zp,this.du={},this.mu=new Map,this.fu=ra.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function ib(n,e,t=!0){const i=TT(n);let o;const l=i.Tu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.lu()):o=await yT(i,e,t,!0),o}async function sb(n,e){const t=TT(n);await yT(t,e,!0,!1)}async function yT(n,e,t,i){const o=await Sx(n.localStore,wr(e)),l=o.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await ob(n,e,l,c==="current",o.resumeToken)),n.isPrimaryClient&&t&&uT(n.remoteStore,o),f}async function ob(n,e,t,i,o){n.pu=(E,I,D)=>(async function(M,z,Z,ne){let ie=z.view.ru(Z);ie.Ss&&(ie=await Xv(M.localStore,z.query,!1).then((({documents:R})=>z.view.ru(R,ie))));const ue=ne&&ne.targetChanges.get(z.targetId),ve=ne&&ne.targetMismatches.get(z.targetId)!=null,we=z.view.applyChanges(ie,M.isPrimaryClient,ue,ve);return l_(M,z.targetId,we.au),we.snapshot})(n,E,I,D);const l=await Xv(n.localStore,e,!0),c=new eb(e,l.ks),f=c.ru(l.documents),m=Bl.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=c.applyChanges(f,n.isPrimaryClient,m);l_(n,t,y.au);const _=new tb(e,t,c);return n.Tu.set(e,_),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),y.snapshot}async function ab(n,e,t){const i=Pe(n),o=i.Tu.get(e),l=i.Iu.get(o.targetId);if(l.length>1)return i.Iu.set(o.targetId,l.filter((c=>!yh(c,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await Zf(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&Hp(i.remoteStore,o.targetId),np(i,o.targetId)})).catch(ca)):(np(i,o.targetId),await Zf(i.localStore,o.targetId,!0))}async function lb(n,e){const t=Pe(n),i=t.Tu.get(e),o=t.Iu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Hp(t.remoteStore,i.targetId))}async function ub(n,e,t){const i=gb(n);try{const o=await(function(c,f){const m=Pe(c),y=it.now(),_=f.reduce(((D,W)=>D.add(W.key)),Ue());let E,I;return m.persistence.runTransaction("Locally write mutations","readwrite",(D=>{let W=Yr(),M=Ue();return m.xs.getEntries(D,_).next((z=>{W=z,W.forEach(((Z,ne)=>{ne.isValidDocument()||(M=M.add(Z))}))})).next((()=>m.localDocuments.getOverlayedDocuments(D,W))).next((z=>{E=z;const Z=[];for(const ne of f){const ie=AP(ne,E.get(ne.key).overlayedDocument);ie!=null&&Z.push(new es(ne.key,ie,SE(ie.value.mapValue),tn.exists(!0)))}return m.mutationQueue.addMutationBatch(D,y,Z,f)})).next((z=>{I=z;const Z=z.applyToLocalDocumentSet(E,M);return m.documentOverlayCache.saveOverlays(D,z.batchId,Z)}))})).then((()=>({batchId:I.batchId,changes:OE(E)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(c,f,m){let y=c.du[c.currentUser.toKey()];y||(y=new ct(Fe)),y=y.insert(f,m),c.du[c.currentUser.toKey()]=y})(i,o.batchId,t),await Wl(i,o.changes),await Sh(i.remoteStore)}catch(o){const l=Jp(o,"Failed to persist write");t.reject(l)}}async function vT(n,e){const t=Pe(n);try{const i=await Ex(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const c=t.Au.get(l);c&&(We(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?c.hu=!0:o.modifiedDocuments.size>0?We(c.hu,14607):o.removedDocuments.size>0&&(We(c.hu,42227),c.hu=!1))})),await Wl(t,i,e)}catch(i){await ca(i)}}function a_(n,e,t){const i=Pe(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Tu.forEach(((l,c)=>{const f=c.view.va(e);f.snapshot&&o.push(f.snapshot)})),(function(c,f){const m=Pe(c);m.onlineState=f;let y=!1;m.queries.forEach(((_,E)=>{for(const I of E.ba)I.va(f)&&(y=!0)})),y&&em(m)})(i.eventManager,e),o.length&&i.Pu.J_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function cb(n,e,t){const i=Pe(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Au.get(e),l=o&&o.key;if(l){let c=new ct(Ee.comparator);c=c.insert(l,Vt.newNoDocument(l,Re.min()));const f=Ue().add(l),m=new Eh(Re.min(),new Map,new ct(Fe),c,f);await vT(i,m),i.Ru=i.Ru.remove(l),i.Au.delete(e),rm(i)}else await Zf(i.localStore,e,!1).then((()=>np(i,e,t))).catch(ca)}async function hb(n,e){const t=Pe(n),i=e.batch.batchId;try{const o=await wx(t.localStore,e);wT(t,i,null),_T(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Wl(t,o)}catch(o){await ca(o)}}async function db(n,e,t){const i=Pe(n);try{const o=await(function(c,f){const m=Pe(c);return m.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let _;return m.mutationQueue.lookupMutationBatch(y,f).next((E=>(We(E!==null,37113),_=E.keys(),m.mutationQueue.removeMutationBatch(y,E)))).next((()=>m.mutationQueue.performConsistencyCheck(y))).next((()=>m.documentOverlayCache.removeOverlaysForBatchId(y,_,f))).next((()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,_))).next((()=>m.localDocuments.getDocuments(y,_)))}))})(i.localStore,e);wT(i,e,t),_T(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Wl(i,o)}catch(o){await ca(o)}}function _T(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function wT(n,e,t){const i=Pe(n);let o=i.du[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.du[i.currentUser.toKey()]=o}}function np(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Iu.get(e))n.Tu.delete(i),t&&n.Pu.yu(i,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((i=>{n.Vu.containsKey(i)||ET(n,i)}))}function ET(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(Hp(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),rm(n))}function l_(n,e,t){for(const i of t)i instanceof mT?(n.Vu.addReference(i.key,e),fb(n,i)):i instanceof gT?(le(nm,"Document no longer in limbo: "+i.key),n.Vu.removeReference(i.key,e),n.Vu.containsKey(i.key)||ET(n,i.key)):Te(19791,{wu:i})}function fb(n,e){const t=e.key,i=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(i)||(le(nm,"New document in limbo: "+t),n.Eu.add(i),rm(n))}function rm(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new Ee(Xe.fromString(e)),i=n.fu.next();n.Au.set(i,new nb(t)),n.Ru=n.Ru.insert(t,i),uT(n.remoteStore,new Li(wr(gh(t.path)),i,"TargetPurposeLimboResolution",ph.ce))}}async function Wl(n,e,t){const i=Pe(n),o=[],l=[],c=[];i.Tu.isEmpty()||(i.Tu.forEach(((f,m)=>{c.push(i.pu(m,e,t).then((y=>{var _;if((y||t)&&i.isPrimaryClient){const E=y?!y.fromCache:(_=t==null?void 0:t.targetChanges.get(m.targetId))==null?void 0:_.current;i.sharedClientState.updateQueryState(m.targetId,E?"current":"not-current")}if(y){o.push(y);const E=$p.Es(m.targetId,y);l.push(E)}})))})),await Promise.all(c),i.Pu.J_(o),await(async function(m,y){const _=Pe(m);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",(E=>K.forEach(y,(I=>K.forEach(I.Ts,(D=>_.persistence.referenceDelegate.addReference(E,I.targetId,D))).next((()=>K.forEach(I.Is,(D=>_.persistence.referenceDelegate.removeReference(E,I.targetId,D)))))))))}catch(E){if(!ha(E))throw E;le(Wp,"Failed to update sequence numbers: "+E)}for(const E of y){const I=E.targetId;if(!E.fromCache){const D=_.vs.get(I),W=D.snapshotVersion,M=D.withLastLimboFreeSnapshotVersion(W);_.vs=_.vs.insert(I,M)}}})(i.localStore,l))}async function pb(n,e){const t=Pe(n);if(!t.currentUser.isEqual(e)){le(nm,"User change. New user:",e.toKey());const i=await oT(t.localStore,e);t.currentUser=e,(function(l,c){l.mu.forEach((f=>{f.forEach((m=>{m.reject(new re(H.CANCELLED,c))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Wl(t,i.Ns)}}function mb(n,e){const t=Pe(n),i=t.Au.get(e);if(i&&i.hu)return Ue().add(i.key);{let o=Ue();const l=t.Iu.get(e);if(!l)return o;for(const c of l){const f=t.Tu.get(c);o=o.unionWith(f.view.nu)}return o}}function TT(n){const e=Pe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=vT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=cb.bind(null,e),e.Pu.J_=Xx.bind(null,e.eventManager),e.Pu.yu=Zx.bind(null,e.eventManager),e}function gb(n){const e=Pe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=db.bind(null,e),e}class Zc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Th(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return _x(this.persistence,new gx,e.initialUser,this.serializer)}Cu(e){return new sT(Bp.Vi,this.serializer)}Du(e){return new Rx}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Zc.provider={build:()=>new Zc};class yb extends Zc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){We(this.persistence.referenceDelegate instanceof Jc,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new tx(i,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?cn.withCacheSize(this.cacheSizeBytes):cn.DEFAULT;return new sT((i=>Jc.Vi(i,t)),this.serializer)}}class rp{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>a_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=pb.bind(null,this.syncEngine),await Qx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Jx})()}createDatastore(e){const t=Th(e.databaseInfo.databaseId),i=bx(e.databaseInfo);return Mx(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,l,c,f){return new Fx(i,o,l,c,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>a_(this.syncEngine,t,0)),(function(){return t_.v()?new t_:new Cx})())}createSyncEngine(e,t){return(function(o,l,c,f,m,y,_){const E=new rb(o,l,c,f,m,y);return _&&(E.gu=!0),E})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Pe(o);le(zs,"RemoteStore shutting down."),l.Ea.add(5),await $l(l),l.Aa.shutdown(),l.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}rp.provider={build:()=>new rp};/**
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
 */class im{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Qr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */let vb=class{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new re(H.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await(async function(o,l){const c=Pe(o),f={documents:l.map((E=>Yc(c.serializer,E)))},m=await c.jo("BatchGetDocuments",c.serializer.databaseId,Xe.emptyPath(),f,l.length),y=new Map;m.forEach((E=>{const I=FP(c.serializer,E);y.set(I.key.toString(),I)}));const _=[];return l.forEach((E=>{const I=y.get(E.toString());We(!!I,55234,{key:E}),_.push(I)})),_})(this.datastore,e);return t.forEach((i=>this.recordVersion(i))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(i){this.lastTransactionError=i}this.writtenDocs.add(e.toString())}delete(e){this.write(new Lp(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((t,i)=>{const o=Ee.fromPath(i);this.mutations.push(new WE(o,this.precondition(o)))})),await(async function(i,o){const l=Pe(i),c={writes:o.map((f=>ZE(l.serializer,f)))};await l.Wo("Commit",l.serializer.databaseId,Xe.emptyPath(),c)})(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw Te(50498,{Gu:e.constructor.name});t=Re.min()}const i=this.readVersions.get(e.key.toString());if(i){if(!t.isEqual(i))throw new re(H.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(Re.min())?tn.exists(!1):tn.updateTime(t):tn.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Re.min()))throw new re(H.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return tn.updateTime(t)}return tn.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}};/**
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
 */class _b{constructor(e,t,i,o,l){this.asyncQueue=e,this.datastore=t,this.options=i,this.updateFunction=o,this.deferred=l,this.zu=i.maxAttempts,this.M_=new qp(this.asyncQueue,"transaction_retry")}ju(){this.zu-=1,this.Hu()}Hu(){this.M_.p_((async()=>{const e=new vb(this.datastore),t=this.Ju(e);t&&t.then((i=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(i)})).catch((o=>{this.Zu(o)}))))})).catch((i=>{this.Zu(i)}))}))}Ju(e){try{const t=this.updateFunction(e);return!jl(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Zu(e){this.zu>0&&this.Xu(e)?(this.zu-=1,this.asyncQueue.enqueueAndForget((()=>(this.Hu(),Promise.resolve())))):this.deferred.reject(e)}Xu(e){if((e==null?void 0:e.name)==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!qE(t)}return!1}}/**
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
 */const Ji="FirestoreClient";class wb{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this._databaseInfo=o,this.user=Qt.UNAUTHENTICATED,this.clientId=xp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async c=>{le(Ji,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(i,(c=>(le(Ji,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _r;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Jp(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function Tf(n,e){n.asyncQueue.verifyOperationInProgress(),le(Ji,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async o=>{i.isEqual(o)||(await oT(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function u_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Eb(n);le(Ji,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>r_(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,o)=>r_(e.remoteStore,o))),n._onlineComponents=e}async function Eb(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){le(Ji,"Using user provided OfflineComponentProvider");try{await Tf(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===H.FAILED_PRECONDITION||o.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;js("Error using user provided cache. Falling back to memory cache: "+t),await Tf(n,new Zc)}}else le(Ji,"Using default OfflineComponentProvider"),await Tf(n,new yb(void 0));return n._offlineComponents}async function sm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(le(Ji,"Using user provided OnlineComponentProvider"),await u_(n,n._uninitializedComponentsProvider._online)):(le(Ji,"Using default OnlineComponentProvider"),await u_(n,new rp))),n._onlineComponents}function Tb(n){return sm(n).then((e=>e.syncEngine))}function Ib(n){return sm(n).then((e=>e.datastore))}async function eh(n){const e=await sm(n),t=e.eventManager;return t.onListen=ib.bind(null,e.syncEngine),t.onUnlisten=ab.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=sb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=lb.bind(null,e.syncEngine),t}function Sb(n,e,t,i){const o=new im(i),l=new tm(e,o,t);return n.asyncQueue.enqueueAndForget((async()=>Xp(await eh(n),l))),()=>{o.Nu(),n.asyncQueue.enqueueAndForget((async()=>Zp(await eh(n),l)))}}function Ab(n,e,t={}){const i=new _r;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,f,m,y){const _=new im({next:I=>{_.Nu(),c.enqueueAndForget((()=>Zp(l,E)));const D=I.docs.has(f);!D&&I.fromCache?y.reject(new re(H.UNAVAILABLE,"Failed to get document because the client is offline.")):D&&I.fromCache&&m&&m.source==="server"?y.reject(new re(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(I)},error:I=>y.reject(I)}),E=new tm(gh(f.path),_,{includeMetadataChanges:!0,Ka:!0});return Xp(l,E)})(await eh(n),n.asyncQueue,e,t,i))),i.promise}function Rb(n,e,t={}){const i=new _r;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,f,m,y){const _=new im({next:I=>{_.Nu(),c.enqueueAndForget((()=>Zp(l,E))),I.fromCache&&m.source==="server"?y.reject(new re(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(I)},error:I=>y.reject(I)}),E=new tm(f,_,{includeMetadataChanges:!0,Ka:!0});return Xp(l,E)})(await eh(n),n.asyncQueue,e,t,i))),i.promise}function Cb(n,e){const t=new _r;return n.asyncQueue.enqueueAndForget((async()=>ub(await Tb(n),e,t))),t.promise}function kb(n,e,t){const i=new _r;return n.asyncQueue.enqueueAndForget((async()=>{const o=await Ib(n);new _b(n.asyncQueue,o,t,e,i).ju()})),i.promise}/**
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
 */function IT(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Pb="ComponentProvider",c_=new Map;function xb(n,e,t,i,o){return new Hk(n,e,t,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,IT(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator,i)}/**
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
 */const ST="firestore.googleapis.com",h_=!0;class d_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new re(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ST,this.ssl=h_}else this.host=e.host,this.ssl=e.ssl??h_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=iT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ZP)throw new re(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ok("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=IT(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new re(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new re(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new re(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ah{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new d_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new d_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new Ak;switch(i.type){case"firstParty":return new Pk(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new re(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=c_.get(t);i&&(le(Pb,"Removing Datastore"),c_.delete(t),i.terminate())})(this),Promise.resolve()}}function bb(n,e,t,i={}){var y;n=In(n,Ah);const o=oa(e),l=n._getSettings(),c={...l,emulatorOptions:n._getEmulatorOptions()},f=`${e}:${t}`;o&&(J_(`https://${f}`),X_("Firestore",!0)),l.host!==ST&&l.host!==f&&js("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m={...l,host:f,ssl:o,emulatorOptions:i};if(!Wi(m,c)&&(n._setSettings(m),i.mockUserToken)){let _,E;if(typeof i.mockUserToken=="string")_=i.mockUserToken,E=Qt.MOCK_USER;else{_=kS(i.mockUserToken,(y=n._app)==null?void 0:y.options.projectId);const I=i.mockUserToken.sub||i.mockUserToken.user_id;if(!I)throw new re(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new Qt(I)}n._authCredentials=new Rk(new dE(_,E))}}/**
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
 */class ts{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new ts(this.firestore,e,this._query)}}class ut{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ut(this.firestore,e,this._key)}toJSON(){return{type:ut._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(Ul(t,ut._jsonSchema))return new ut(e,i||null,new Ee(Xe.fromString(t.referencePath)))}}ut._jsonSchemaVersion="firestore/documentReference/1.0",ut._jsonSchema={type:St("string",ut._jsonSchemaVersion),referencePath:St("string")};class Bi extends ts{constructor(e,t,i){super(e,t,gh(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ut(this.firestore,null,new Ee(e))}withConverter(e){return new Bi(this.firestore,e,this._path)}}function om(n,e,...t){if(n=vt(n),fE("collection","path",e),n instanceof Ah){const i=Xe.fromString(e,...t);return Av(i),new Bi(n,null,i)}{if(!(n instanceof ut||n instanceof Bi))throw new re(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Xe.fromString(e,...t));return Av(i),new Bi(n.firestore,null,i)}}function zt(n,e,...t){if(n=vt(n),arguments.length===1&&(e=xp.newId()),fE("doc","path",e),n instanceof Ah){const i=Xe.fromString(e,...t);return Sv(i),new ut(n,null,new Ee(i))}{if(!(n instanceof ut||n instanceof Bi))throw new re(H.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Xe.fromString(e,...t));return Sv(i),new ut(n.firestore,n instanceof Bi?n.converter:null,new Ee(i))}}/**
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
 */const f_="AsyncQueue";class p_{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new qp(this,"async_queue_retry"),this._c=()=>{const i=Ef();i&&le(f_,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=Ef();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Ef();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new _r;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!ha(e))throw e;le(f_,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,Qr("INTERNAL UNHANDLED ERROR: ",m_(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=Yp.createAndSchedule(this,e,t,i,(l=>this.hc(l)));return this.tc.push(o),o}uc(){this.nc&&Te(47125,{Pc:m_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function m_(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Xi extends Ah{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new p_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new p_(e),this._firestoreClient=void 0,await e}}}function Nb(n,e){const t=typeof n=="object"?n:mp(),i=typeof n=="string"?n:qc,o=qs(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=RS("firestore");l&&bb(o,...l)}return o}function ql(n){if(n._terminated)throw new re(H.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Db(n),n._firestoreClient}function Db(n){var i,o,l,c;const e=n._freezeSettings(),t=xb(n._databaseId,((i=n._app)==null?void 0:i.options.appId)||"",n._persistenceKey,(o=n._app)==null?void 0:o.options.apiKey,e);n._componentsProvider||(l=e.localCache)!=null&&l._offlineComponentProvider&&((c=e.localCache)!=null&&c._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new wb(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(m){const y=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(y),_online:y}})(n._componentsProvider))}/**
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
 */class wn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wn(Bt.fromBase64String(e))}catch(t){throw new re(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new wn(Bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:wn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ul(e,wn._jsonSchema))return wn.fromBase64String(e.bytes)}}wn._jsonSchemaVersion="firestore/bytes/1.0",wn._jsonSchema={type:St("string",wn._jsonSchemaVersion),bytes:St("string")};/**
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
 */class Rh{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new re(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new jt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Er{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new re(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new re(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Fe(this._lat,e._lat)||Fe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Er._jsonSchemaVersion}}static fromJSON(e){if(Ul(e,Er._jsonSchema))return new Er(e.latitude,e.longitude)}}Er._jsonSchemaVersion="firestore/geoPoint/1.0",Er._jsonSchema={type:St("string",Er._jsonSchemaVersion),latitude:St("number"),longitude:St("number")};/**
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
 */class Hn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Hn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ul(e,Hn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Hn(e.vectorValues);throw new re(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Hn._jsonSchemaVersion="firestore/vectorValue/1.0",Hn._jsonSchema={type:St("string",Hn._jsonSchemaVersion),vectorValues:St("object")};/**
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
 */const Vb=/^__.*__$/;class Ob{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new es(e,this.data,this.fieldMask,t,this.fieldTransforms):new zl(e,this.data,t,this.fieldTransforms)}}class AT{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new es(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function RT(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te(40011,{dataSource:n})}}class am{constructor(e,t,i,o,l,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.validatePath(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new am({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var o;const t=(o=this.path)==null?void 0:o.child(e),i=this.contextWith({path:t,arrayElement:!1});return i.validatePathSegment(e),i}childContextForFieldPath(e){var o;const t=(o=this.path)==null?void 0:o.child(e),i=this.contextWith({path:t,arrayElement:!1});return i.validatePath(),i}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return th(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(RT(this.dataSource)&&Vb.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class Mb{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Th(e)}createContext(e,t,i,o=!1){return new am({dataSource:e,methodName:t,targetDoc:i,path:jt.emptyPath(),arrayElement:!1,hasConverter:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function kh(n){const e=n._freezeSettings(),t=Th(n._databaseId);return new Mb(n._databaseId,!!e.ignoreUndefinedProperties,t)}function CT(n,e,t,i,o,l={}){const c=n.createContext(l.merge||l.mergeFields?2:0,e,t,o);um("Data must be an object, but it was:",c,i);const f=xT(i,c);let m,y;if(l.merge)m=new En(c.fieldMask),y=c.fieldTransforms;else if(l.mergeFields){const _=[];for(const E of l.mergeFields){const I=sa(e,E,t);if(!c.contains(I))throw new re(H.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);DT(_,I)||_.push(I)}m=new En(_),y=c.fieldTransforms.filter((E=>m.covers(E.field)))}else m=null,y=c.fieldTransforms;return new Ob(new en(f),m,y)}class Ph extends Ch{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ph}}class lm extends Ch{_toFieldTransform(e){return new EP(e.path,new Nl)}isEqual(e){return e instanceof lm}}function kT(n,e,t,i){const o=n.createContext(1,e,t);um("Data must be an object, but it was:",o,i);const l=[],c=en.empty();Zi(i,((m,y)=>{const _=NT(e,m,t);y=vt(y);const E=o.childContextForFieldPath(_);if(y instanceof Ph)l.push(_);else{const I=Hl(y,E);I!=null&&(l.push(_),c.set(_,I))}}));const f=new En(l);return new AT(c,f,o.fieldTransforms)}function PT(n,e,t,i,o,l){const c=n.createContext(1,e,t),f=[sa(e,i,t)],m=[o];if(l.length%2!=0)throw new re(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<l.length;I+=2)f.push(sa(e,l[I])),m.push(l[I+1]);const y=[],_=en.empty();for(let I=f.length-1;I>=0;--I)if(!DT(y,f[I])){const D=f[I];let W=m[I];W=vt(W);const M=c.childContextForFieldPath(D);if(W instanceof Ph)y.push(D);else{const z=Hl(W,M);z!=null&&(y.push(D),_.set(D,z))}}const E=new En(y);return new AT(_,E,c.fieldTransforms)}function Lb(n,e,t,i=!1){return Hl(t,n.createContext(i?4:3,e))}function Hl(n,e){if(bT(n=vt(n)))return um("Unsupported field value:",e,n),xT(n,e);if(n instanceof Ch)return(function(i,o){if(!RT(o.dataSource))throw o.createError(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.createError(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(i,o){const l=[];let c=0;for(const f of i){let m=Hl(f,o.childContextForArray(c));m==null&&(m={nullValue:"NULL_VALUE"}),l.push(m),c++}return{arrayValue:{values:l}}})(n,e)}return(function(i,o){if((i=vt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return vP(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=it.fromDate(i);return{timestampValue:Qc(o.serializer,l)}}if(i instanceof it){const l=new it(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Qc(o.serializer,l)}}if(i instanceof Er)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof wn)return{bytesValue:QE(o.serializer,i._byteString)};if(i instanceof ut){const l=o.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw o.createError(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:jp(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof Hn)return(function(c,f){const m=c instanceof Hn?c.toArray():c;return{mapValue:{fields:{[TE]:{stringValue:IE},[Hc]:{arrayValue:{values:m.map((_=>{if(typeof _!="number")throw f.createError("VectorValues must only contain numeric values.");return Mp(f.serializer,_)}))}}}}}})(i,o);if(rT(i))return i._toProto(o.serializer);throw o.createError(`Unsupported field value: ${fh(i)}`)})(n,e)}function xT(n,e){const t={};return gE(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zi(n,((i,o)=>{const l=Hl(o,e.childContextForField(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function bT(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof it||n instanceof Er||n instanceof wn||n instanceof ut||n instanceof Ch||n instanceof Hn||rT(n))}function um(n,e,t){if(!bT(t)||!pE(t)){const i=fh(t);throw i==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+i)}}function sa(n,e,t){if((e=vt(e))instanceof Rh)return e._internalPath;if(typeof e=="string")return NT(n,e);throw th("Field path arguments must be of type string or ",n,!1,void 0,t)}const Fb=new RegExp("[~\\*/\\[\\]]");function NT(n,e,t){if(e.search(Fb)>=0)throw th(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Rh(...e.split("."))._internalPath}catch{throw th(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function th(n,e,t,i,o){const l=i&&!i.isEmpty(),c=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let m="";return(l||c)&&(m+=" (found",l&&(m+=` in field ${i}`),c&&(m+=` in document ${o}`),m+=")"),new re(H.INVALID_ARGUMENT,f+n+m)}function DT(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class VT{convertValue(e,t="none"){switch(Qi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return yt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ki(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Te(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Zi(e,((o,l)=>{i[o]=this.convertValue(l,t)})),i}convertVectorValue(e){var i,o,l;const t=(l=(o=(i=e.fields)==null?void 0:i[Hc].arrayValue)==null?void 0:o.values)==null?void 0:l.map((c=>yt(c.doubleValue)));return new Hn(t)}convertGeoPoint(e){return new Er(yt(e.latitude),yt(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=mh(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(kl(e));default:return null}}convertTimestamp(e){const t=Gi(e);return new it(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Xe.fromString(e);We(nT(i),9688,{name:e});const o=new Pl(i.get(1),i.get(3)),l=new Ee(i.popFirst(5));return o.isEqual(t)||Qr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */class xh extends VT{constructor(e){super(),this.firestore=e}convertBytes(e){return new wn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ut(this.firestore,null,t)}}function Nt(){return new lm("serverTimestamp")}const g_="@firebase/firestore",y_="4.11.0";/**
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
 */function v_(n){return(function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of i)if(l in o&&typeof o[l]=="function")return!0;return!1})(n,["next","error","complete"])}/**
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
 */class nh{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ub(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(sa("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Ub extends nh{data(){return super.data()}}/**
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
 */function OT(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new re(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cm{}class MT extends cm{}function LT(n,e,...t){let i=[];e instanceof cm&&i.push(e),i=i.concat(t),(function(l){const c=l.filter((m=>m instanceof dm)).length,f=l.filter((m=>m instanceof hm)).length;if(c>1||c>0&&f>0)throw new re(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const o of i)n=o._apply(n);return n}class hm extends MT{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new hm(e,t,i)}_apply(e){const t=this._parse(e);return UT(e._query,t),new ts(e.firestore,e.converter,Kf(e._query,t))}_parse(e){const t=kh(e.firestore);return(function(l,c,f,m,y,_,E){let I;if(y.isKeyField()){if(_==="array-contains"||_==="array-contains-any")throw new re(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${_}' queries on documentId().`);if(_==="in"||_==="not-in"){w_(E,_);const W=[];for(const M of E)W.push(__(m,l,M));I={arrayValue:{values:W}}}else I=__(m,l,E)}else _!=="in"&&_!=="not-in"&&_!=="array-contains-any"||w_(E,_),I=Lb(f,c,E,_==="in"||_==="not-in");return It.create(y,_,I)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class dm extends cm{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new dm(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:Kn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let c=o;const f=l.getFlattenedFilters();for(const m of f)UT(c,m),c=Kf(c,m)})(e._query,t),new ts(e.firestore,e.converter,Kf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class fm extends MT{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new fm(e,t)}_apply(e){const t=(function(o,l,c){if(o.startAt!==null)throw new re(H.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new re(H.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new bl(l,c)})(e._query,this._field,this._direction);return new ts(e.firestore,e.converter,cP(e._query,t))}}function FT(n,e="asc"){const t=e,i=sa("orderBy",n);return fm._create(i,t)}function __(n,e,t){if(typeof(t=vt(t))=="string"){if(t==="")throw new re(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bE(e)&&t.indexOf("/")!==-1)throw new re(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Xe.fromString(t));if(!Ee.isDocumentKey(i))throw new re(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Dv(n,new Ee(i))}if(t instanceof ut)return Dv(n,t._key);throw new re(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${fh(t)}.`)}function w_(n,e){if(!Array.isArray(n)||n.length===0)throw new re(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function UT(n,e){const t=(function(o,l){for(const c of o)for(const f of c.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new re(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new re(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function jT(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}class jb extends VT{constructor(e){super(),this.firestore=e}convertBytes(e){return new wn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ut(this.firestore,null,t)}}class qo{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $i extends nh{constructor(e,t,i,o,l,c){super(e,t,i,o,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new bc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(sa("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new re(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=$i._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}$i._jsonSchemaVersion="firestore/documentSnapshot/1.0",$i._jsonSchema={type:St("string",$i._jsonSchemaVersion),bundleSource:St("string","DocumentSnapshot"),bundleName:St("string"),bundle:St("string")};class bc extends $i{data(e={}){return super.data(e)}}class Os{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new qo(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new bc(this._firestore,this._userDataWriter,i.key,i,new qo(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new re(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let c=0;return o._snapshot.docChanges.map((f=>{const m=new bc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new qo(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:m,oldIndex:-1,newIndex:c++}}))}{let c=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const m=new bc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new qo(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,_=-1;return f.type!==0&&(y=c.indexOf(f.doc.key),c=c.delete(f.doc.key)),f.type!==1&&(c=c.add(f.doc),_=c.indexOf(f.doc.key)),{type:zb(f.type),doc:m,oldIndex:y,newIndex:_}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new re(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Os._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=xp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function zb(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te(61501,{type:n})}}/**
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
 */Os._jsonSchemaVersion="firestore/querySnapshot/1.0",Os._jsonSchema={type:St("string",Os._jsonSchemaVersion),bundleSource:St("string","QuerySnapshot"),bundleName:St("string"),bundle:St("string")};const Bb={maxAttempts:5};function gl(n,e){if((n=vt(n)).firestore!==e)throw new re(H.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */class $b{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=kh(e)}get(e){const t=gl(e,this._firestore),i=new jb(this._firestore);return this._transaction.lookup([t._key]).then((o=>{if(!o||o.length!==1)return Te(24041);const l=o[0];if(l.isFoundDocument())return new nh(this._firestore,i,l.key,l,t.converter);if(l.isNoDocument())return new nh(this._firestore,i,t._key,null,t.converter);throw Te(18433,{doc:l})}))}set(e,t,i){const o=gl(e,this._firestore),l=jT(o.converter,t,i),c=CT(this._dataReader,"Transaction.set",o._key,l,o.converter!==null,i);return this._transaction.set(o._key,c),this}update(e,t,i,...o){const l=gl(e,this._firestore);let c;return c=typeof(t=vt(t))=="string"||t instanceof Rh?PT(this._dataReader,"Transaction.update",l._key,t,i,o):kT(this._dataReader,"Transaction.update",l._key,t),this._transaction.update(l._key,c),this}delete(e){const t=gl(e,this._firestore);return this._transaction.delete(t._key),this}}/**
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
 */class Wb extends $b{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=gl(e,this._firestore),i=new xh(this._firestore);return super.get(e).then((o=>new $i(this._firestore,i,t._key,o._document,new qo(!1,!1),t.converter)))}}function bh(n,e,t){n=In(n,Xi);const i={...Bb,...t};(function(c){if(c.maxAttempts<1)throw new re(H.INVALID_ARGUMENT,"Max attempts must be at least 1")})(i);const o=ql(n);return kb(o,(l=>e(new Wb(n,l))),i)}/**
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
 */function qb(n){n=In(n,ut);const e=In(n.firestore,Xi),t=ql(e);return Ab(t,n._key).then((i=>WT(e,n,i)))}function Hb(n){n=In(n,ts);const e=In(n.firestore,Xi),t=ql(e),i=new xh(e);return OT(n._query),Rb(t,n._query).then((o=>new Os(e,i,n,o)))}function Gb(n,e,t){n=In(n,ut);const i=In(n.firestore,Xi),o=jT(n.converter,e,t),l=kh(i);return $T(i,[CT(l,"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,tn.none())])}function zT(n,e,t,...i){n=In(n,ut);const o=In(n.firestore,Xi),l=kh(o);let c;return c=typeof(e=vt(e))=="string"||e instanceof Rh?PT(l,"updateDoc",n._key,e,t,i):kT(l,"updateDoc",n._key,e),$T(o,[c.toMutation(n._key,tn.exists(!0))])}function BT(n,...e){var y,_,E;n=vt(n);let t={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||v_(e[i])||(t=e[i++]);const o={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(v_(e[i])){const I=e[i];e[i]=(y=I.next)==null?void 0:y.bind(I),e[i+1]=(_=I.error)==null?void 0:_.bind(I),e[i+2]=(E=I.complete)==null?void 0:E.bind(I)}let l,c,f;if(n instanceof ut)c=In(n.firestore,Xi),f=gh(n._key.path),l={next:I=>{e[i]&&e[i](WT(c,n,I))},error:e[i+1],complete:e[i+2]};else{const I=In(n,ts);c=In(I.firestore,Xi),f=I._query;const D=new xh(c);l={next:W=>{e[i]&&e[i](new Os(c,D,I,W))},error:e[i+1],complete:e[i+2]},OT(n._query)}const m=ql(c);return Sb(m,f,o,l)}function $T(n,e){const t=ql(n);return Cb(t,e)}function WT(n,e,t){const i=t.docs.get(e._key),o=new xh(n);return new $i(n,o,e._key,i,new qo(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){Sk(aa),Tr(new Gn("firestore",((i,{instanceIdentifier:o,options:l})=>{const c=i.getProvider("app").getImmediate(),f=new Xi(new Ck(i.getProvider("auth-internal")),new xk(c,i.getProvider("app-check-internal")),Gk(c,o),c);return l={useFetchStreams:t,...l},f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),Dn(g_,y_,e),Dn(g_,y_,"esm2020")})();const Kb={apiKey:"AIzaSyBWTuW6eD1gxTf8sLnZzuWN2dngDFphUH8",authDomain:"marcophoto-9cb75.firebaseapp.com",projectId:"marcophoto-9cb75",storageBucket:"marcophoto-9cb75.firebasestorage.app",messagingSenderId:"690399228253",appId:"1:690399228253:web:39777c4e908417294838b4",measurementId:"G-EY1HGL647R"},pm=rw(Kb),Sl=Tk(pm),ft=Nb(pm),Qb=async()=>{await EC()&&_C(pm)},E_=async()=>(Sl.currentUser||await o1(Sl),Sl.currentUser);Qb();const qT=n=>n>=16?{marcoCount:4,rounds:12,photosPerPlayer:24}:n>=12?{marcoCount:3,rounds:9,photosPerPlayer:18}:n>=8?{marcoCount:2,rounds:6,photosPerPlayer:12}:{marcoCount:1,rounds:3,photosPerPlayer:6},hl="main",Yb=19,Jb=2,ns=()=>{var e;const n=(e=Sl.currentUser)==null?void 0:e.uid;if(!n)throw new Error("Not signed in.");return n},T_=async n=>{const e=ns(),t=zt(ft,"users",e);await Gb(t,{displayName:n},{merge:!0})},Xb=async()=>{const n=ns(),e=await qb(zt(ft,"users",n));return e.exists()?e.data().activeRoomId??null:null},Zb=(n,e)=>{const t=zt(ft,"rooms",n);return BT(t,i=>{if(!i.exists()){e(null);return}const o=i.data();e({id:i.id,...o})})},eN=(n,e)=>{const t=om(ft,"rooms",n,"players"),i=LT(t,FT("joinedAt","asc"));return BT(i,o=>{const l=o.docs.map(c=>{const f=c.data();return{id:c.id,...f}});e(l)})},tN=async n=>{const e=ns(),t=zt(ft,"rooms",n,"players",e);await zT(t,{lastSeenAt:Nt()})},nN=async n=>{const e=ns(),t=zt(ft,"rooms",hl),i=zt(ft,"users",e),o=zt(ft,"rooms",hl,"players",e);return bh(ft,async l=>{var _;const f=((_=(await l.get(i)).data())==null?void 0:_.activeRoomId)??null;if(f&&f!==hl)throw new Error("You are already in a room.");const m=await l.get(t),y=await l.get(o);if(!m.exists())l.set(t,{state:"waiting",createdAt:Nt(),lastActiveAt:Nt(),playerCount:1,waitingSince:Nt()}),l.set(o,{name:n,isReady:!1,votekickCount:0,joinedAt:Nt(),lastSeenAt:Nt()});else{const E=m.data(),I=E.playerCount??0,D=I<2;if(E.state!=="waiting"&&!D)throw new Error("Game already started.");if(y.exists())l.set(o,{name:n,lastSeenAt:Nt()},{merge:!0}),D&&E.state!=="waiting"&&l.update(t,{state:"waiting",lastActiveAt:Nt(),waitingSince:Nt()});else{if(I>=Yb)throw new Error("Room is full (15 players max).");l.set(o,{name:n,isReady:!1,votekickCount:0,joinedAt:Nt(),lastSeenAt:Nt()});const W={playerCount:I+1,lastActiveAt:Nt(),waitingSince:I+1<=1?Nt():E.waitingSince??null};D&&(W.state="waiting"),l.update(t,W)}}return l.set(i,{displayName:n,activeRoomId:hl},{merge:!0}),{roomId:hl}})},rN=async n=>{const e=ns(),t=zt(ft,"rooms",n),i=zt(ft,"rooms",n,"players",e),o=zt(ft,"users",e);return bh(ft,async l=>{const c=await l.get(t);if(c.exists()){const f=c.data(),m=Math.max((f.playerCount??1)-1,0),y={playerCount:m,lastActiveAt:Nt(),waitingSince:m<=1?Nt():f.waitingSince??null};m<2&&(y.state="waiting"),l.update(t,y)}l.delete(i),l.set(o,{activeRoomId:null},{merge:!0})})},iN=async(n,e)=>{const t=ns();if(t===e)throw new Error("You cannot vote kick yourself.");const i=zt(ft,"rooms",n),o=om(ft,"rooms",n,"players"),l=zt(o,t),c=zt(o,e),f=zt(ft,"rooms",n,"players",e,"votes",t);return bh(ft,async m=>{const y=await m.get(i);if(!y.exists())throw new Error("Room not found.");if(!(await m.get(l)).exists())throw new Error("You are not in this room.");const E=await m.get(c);if(!E.exists())throw new Error("Player is no longer in this room.");if((await m.get(f)).exists())throw new Error("You already voted to kick this player.");const D=y.data(),W=E.data(),M=D.playerCount??0,z=(W.votekickCount??0)+1,Z=Math.max(Jb,Math.ceil((M-1)/2));return fetch("http://127.0.0.1:7405/ingest/d453ec47-2b73-4a1b-bd86-9e13d383d1b3",{method:"POST",headers:{"Content-Type":"application/json","X-Debug-Session-Id":"6ab149"},body:JSON.stringify({sessionId:"6ab149",location:"rooms.ts:voteKickPlayer",message:"vote cast - client only increments count, server handles kick",data:{nextVoteCount:z,votesNeeded:Z,willKick:z>=Z,currentCount:M},timestamp:Date.now(),hypothesisId:"H-A"})}).catch(()=>{}),m.set(f,{voterUid:t,createdAt:Nt()}),m.update(c,{votekickCount:z}),{kicked:z>=Z,voteCount:z,votesNeeded:Z}})},sN=async(n,e)=>{const t=ns(),i=zt(ft,"rooms",n,"players",t);await zT(i,{isReady:e,lastSeenAt:Nt()})},oN=n=>{const e=[...n];for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e},aN=async n=>{ns();const e=zt(ft,"rooms",n),t=om(ft,"rooms",n,"players");return bh(ft,async i=>{if(!(await i.get(e)).exists())throw new Error("Room not found.");const l=await Hb(LT(t,FT("joinedAt","asc")));if(l.size<4)throw new Error("Need at least 4 players to start.");if(!l.docs.every(E=>E.data().isReady===!0))throw new Error("All players must be ready first.");const{marcoCount:f,rounds:m,photosPerPlayer:y}=qT(l.size),_=oN(l.docs.map(E=>E.id));for(let E=0;E<_.length;E++){const I=zt(ft,"rooms",n,"players",_[E]);i.update(I,{role:E<f?"Marco":"Reg"})}i.update(e,{state:"playing",marcoCount:f,rounds:m,photosPerPlayer:y,lastActiveAt:Nt()})})};function lN(n,e){const t=L.createContext(e),i=l=>{const{children:c,...f}=l,m=L.useMemo(()=>f,Object.values(f));return G.jsx(t.Provider,{value:m,children:c})};i.displayName=n+"Provider";function o(l){const c=L.useContext(t);if(c)return c;if(e!==void 0)return e;throw new Error(`\`${l}\` must be used within \`${n}\``)}return[i,o]}function HT(n,e=[]){let t=[];function i(l,c){const f=L.createContext(c),m=t.length;t=[...t,c];const y=E=>{var Z;const{scope:I,children:D,...W}=E,M=((Z=I==null?void 0:I[n])==null?void 0:Z[m])||f,z=L.useMemo(()=>W,Object.values(W));return G.jsx(M.Provider,{value:z,children:D})};y.displayName=l+"Provider";function _(E,I){var M;const D=((M=I==null?void 0:I[n])==null?void 0:M[m])||f,W=L.useContext(D);if(W)return W;if(c!==void 0)return c;throw new Error(`\`${E}\` must be used within \`${l}\``)}return[y,_]}const o=()=>{const l=t.map(c=>L.createContext(c));return function(f){const m=(f==null?void 0:f[n])||l;return L.useMemo(()=>({[`__scope${n}`]:{...f,[n]:m}}),[f,m])}};return o.scopeName=n,[i,uN(o,...e)]}function uN(...n){const e=n[0];if(n.length===1)return e;const t=()=>{const i=n.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(l){const c=i.reduce((f,{useScope:m,scopeName:y})=>{const E=m(l)[`__scope${y}`];return{...f,...E}},{});return L.useMemo(()=>({[`__scope${e.scopeName}`]:c}),[c])}};return t.scopeName=e.scopeName,t}function I_(n,e){if(typeof n=="function")return n(e);n!=null&&(n.current=e)}function GT(...n){return e=>{let t=!1;const i=n.map(o=>{const l=I_(o,e);return!t&&typeof l=="function"&&(t=!0),l});if(t)return()=>{for(let o=0;o<i.length;o++){const l=i[o];typeof l=="function"?l():I_(n[o],null)}}}}function Jr(...n){return L.useCallback(GT(...n),n)}function qr(n,e,{checkForDefaultPrevented:t=!0}={}){return function(o){if(n==null||n(o),t===!1||!o.defaultPrevented)return e==null?void 0:e(o)}}var rh=globalThis!=null&&globalThis.document?L.useLayoutEffect:()=>{},cN=gS.useId||(()=>{}),hN=0;function If(n){const[e,t]=L.useState(cN());return rh(()=>{t(i=>i??String(hN++))},[n]),n||(e?`radix-${e}`:"")}function Bs(n){const e=L.useRef(n);return L.useEffect(()=>{e.current=n}),L.useMemo(()=>(...t)=>{var i;return(i=e.current)==null?void 0:i.call(e,...t)},[])}function dN({prop:n,defaultProp:e,onChange:t=()=>{}}){const[i,o]=fN({defaultProp:e,onChange:t}),l=n!==void 0,c=l?n:i,f=Bs(t),m=L.useCallback(y=>{if(l){const E=typeof y=="function"?y(n):y;E!==n&&f(E)}else o(y)},[l,n,o,f]);return[c,m]}function fN({defaultProp:n,onChange:e}){const t=L.useState(n),[i]=t,o=L.useRef(i),l=Bs(e);return L.useEffect(()=>{o.current!==i&&(l(i),o.current=i)},[i,o,l]),t}var KT=W_();const pN=$_(KT);var mm=L.forwardRef((n,e)=>{const{children:t,...i}=n,o=L.Children.toArray(t),l=o.find(mN);if(l){const c=l.props.children,f=o.map(m=>m===l?L.Children.count(c)>1?L.Children.only(null):L.isValidElement(c)?c.props.children:null:m);return G.jsx(ip,{...i,ref:e,children:L.isValidElement(c)?L.cloneElement(c,void 0,f):null})}return G.jsx(ip,{...i,ref:e,children:t})});mm.displayName="Slot";var ip=L.forwardRef((n,e)=>{const{children:t,...i}=n;if(L.isValidElement(t)){const o=yN(t),l=gN(i,t.props);return t.type!==L.Fragment&&(l.ref=e?GT(e,o):o),L.cloneElement(t,l)}return L.Children.count(t)>1?L.Children.only(null):null});ip.displayName="SlotClone";var QT=({children:n})=>G.jsx(G.Fragment,{children:n});function mN(n){return L.isValidElement(n)&&n.type===QT}function gN(n,e){const t={...e};for(const i in e){const o=n[i],l=e[i];/^on[A-Z]/.test(i)?o&&l?t[i]=(...f)=>{l(...f),o(...f)}:o&&(t[i]=o):i==="style"?t[i]={...o,...l}:i==="className"&&(t[i]=[o,l].filter(Boolean).join(" "))}return{...n,...t}}function yN(n){var i,o;let e=(i=Object.getOwnPropertyDescriptor(n.props,"ref"))==null?void 0:i.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?n.ref:(e=(o=Object.getOwnPropertyDescriptor(n,"ref"))==null?void 0:o.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?n.props.ref:n.props.ref||n.ref)}var vN=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Xr=vN.reduce((n,e)=>{const t=L.forwardRef((i,o)=>{const{asChild:l,...c}=i,f=l?mm:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),G.jsx(f,{...c,ref:o})});return t.displayName=`Primitive.${e}`,{...n,[e]:t}},{});function _N(n,e){n&&KT.flushSync(()=>n.dispatchEvent(e))}function wN(n,e=globalThis==null?void 0:globalThis.document){const t=Bs(n);L.useEffect(()=>{const i=o=>{o.key==="Escape"&&t(o)};return e.addEventListener("keydown",i,{capture:!0}),()=>e.removeEventListener("keydown",i,{capture:!0})},[t,e])}var EN="DismissableLayer",sp="dismissableLayer.update",TN="dismissableLayer.pointerDownOutside",IN="dismissableLayer.focusOutside",S_,YT=L.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),JT=L.forwardRef((n,e)=>{const{disableOutsidePointerEvents:t=!1,onEscapeKeyDown:i,onPointerDownOutside:o,onFocusOutside:l,onInteractOutside:c,onDismiss:f,...m}=n,y=L.useContext(YT),[_,E]=L.useState(null),I=(_==null?void 0:_.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,D]=L.useState({}),W=Jr(e,R=>E(R)),M=Array.from(y.layers),[z]=[...y.layersWithOutsidePointerEventsDisabled].slice(-1),Z=M.indexOf(z),ne=_?M.indexOf(_):-1,ie=y.layersWithOutsidePointerEventsDisabled.size>0,ue=ne>=Z,ve=RN(R=>{const S=R.target,C=[...y.branches].some(b=>b.contains(S));!ue||C||(o==null||o(R),c==null||c(R),R.defaultPrevented||f==null||f())},I),we=CN(R=>{const S=R.target;[...y.branches].some(b=>b.contains(S))||(l==null||l(R),c==null||c(R),R.defaultPrevented||f==null||f())},I);return wN(R=>{ne===y.layers.size-1&&(i==null||i(R),!R.defaultPrevented&&f&&(R.preventDefault(),f()))},I),L.useEffect(()=>{if(_)return t&&(y.layersWithOutsidePointerEventsDisabled.size===0&&(S_=I.body.style.pointerEvents,I.body.style.pointerEvents="none"),y.layersWithOutsidePointerEventsDisabled.add(_)),y.layers.add(_),A_(),()=>{t&&y.layersWithOutsidePointerEventsDisabled.size===1&&(I.body.style.pointerEvents=S_)}},[_,I,t,y]),L.useEffect(()=>()=>{_&&(y.layers.delete(_),y.layersWithOutsidePointerEventsDisabled.delete(_),A_())},[_,y]),L.useEffect(()=>{const R=()=>D({});return document.addEventListener(sp,R),()=>document.removeEventListener(sp,R)},[]),G.jsx(Xr.div,{...m,ref:W,style:{pointerEvents:ie?ue?"auto":"none":void 0,...n.style},onFocusCapture:qr(n.onFocusCapture,we.onFocusCapture),onBlurCapture:qr(n.onBlurCapture,we.onBlurCapture),onPointerDownCapture:qr(n.onPointerDownCapture,ve.onPointerDownCapture)})});JT.displayName=EN;var SN="DismissableLayerBranch",AN=L.forwardRef((n,e)=>{const t=L.useContext(YT),i=L.useRef(null),o=Jr(e,i);return L.useEffect(()=>{const l=i.current;if(l)return t.branches.add(l),()=>{t.branches.delete(l)}},[t.branches]),G.jsx(Xr.div,{...n,ref:o})});AN.displayName=SN;function RN(n,e=globalThis==null?void 0:globalThis.document){const t=Bs(n),i=L.useRef(!1),o=L.useRef(()=>{});return L.useEffect(()=>{const l=f=>{if(f.target&&!i.current){let m=function(){XT(TN,t,y,{discrete:!0})};const y={originalEvent:f};f.pointerType==="touch"?(e.removeEventListener("click",o.current),o.current=m,e.addEventListener("click",o.current,{once:!0})):m()}else e.removeEventListener("click",o.current);i.current=!1},c=window.setTimeout(()=>{e.addEventListener("pointerdown",l)},0);return()=>{window.clearTimeout(c),e.removeEventListener("pointerdown",l),e.removeEventListener("click",o.current)}},[e,t]),{onPointerDownCapture:()=>i.current=!0}}function CN(n,e=globalThis==null?void 0:globalThis.document){const t=Bs(n),i=L.useRef(!1);return L.useEffect(()=>{const o=l=>{l.target&&!i.current&&XT(IN,t,{originalEvent:l},{discrete:!1})};return e.addEventListener("focusin",o),()=>e.removeEventListener("focusin",o)},[e,t]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}function A_(){const n=new CustomEvent(sp);document.dispatchEvent(n)}function XT(n,e,t,{discrete:i}){const o=t.originalEvent.target,l=new CustomEvent(n,{bubbles:!1,cancelable:!0,detail:t});e&&o.addEventListener(n,e,{once:!0}),i?_N(o,l):o.dispatchEvent(l)}var Sf="focusScope.autoFocusOnMount",Af="focusScope.autoFocusOnUnmount",R_={bubbles:!1,cancelable:!0},kN="FocusScope",ZT=L.forwardRef((n,e)=>{const{loop:t=!1,trapped:i=!1,onMountAutoFocus:o,onUnmountAutoFocus:l,...c}=n,[f,m]=L.useState(null),y=Bs(o),_=Bs(l),E=L.useRef(null),I=Jr(e,M=>m(M)),D=L.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;L.useEffect(()=>{if(i){let M=function(ie){if(D.paused||!f)return;const ue=ie.target;f.contains(ue)?E.current=ue:Ni(E.current,{select:!0})},z=function(ie){if(D.paused||!f)return;const ue=ie.relatedTarget;ue!==null&&(f.contains(ue)||Ni(E.current,{select:!0}))},Z=function(ie){if(document.activeElement===document.body)for(const ve of ie)ve.removedNodes.length>0&&Ni(f)};document.addEventListener("focusin",M),document.addEventListener("focusout",z);const ne=new MutationObserver(Z);return f&&ne.observe(f,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",M),document.removeEventListener("focusout",z),ne.disconnect()}}},[i,f,D.paused]),L.useEffect(()=>{if(f){k_.add(D);const M=document.activeElement;if(!f.contains(M)){const Z=new CustomEvent(Sf,R_);f.addEventListener(Sf,y),f.dispatchEvent(Z),Z.defaultPrevented||(PN(VN(eI(f)),{select:!0}),document.activeElement===M&&Ni(f))}return()=>{f.removeEventListener(Sf,y),setTimeout(()=>{const Z=new CustomEvent(Af,R_);f.addEventListener(Af,_),f.dispatchEvent(Z),Z.defaultPrevented||Ni(M??document.body,{select:!0}),f.removeEventListener(Af,_),k_.remove(D)},0)}}},[f,y,_,D]);const W=L.useCallback(M=>{if(!t&&!i||D.paused)return;const z=M.key==="Tab"&&!M.altKey&&!M.ctrlKey&&!M.metaKey,Z=document.activeElement;if(z&&Z){const ne=M.currentTarget,[ie,ue]=xN(ne);ie&&ue?!M.shiftKey&&Z===ue?(M.preventDefault(),t&&Ni(ie,{select:!0})):M.shiftKey&&Z===ie&&(M.preventDefault(),t&&Ni(ue,{select:!0})):Z===ne&&M.preventDefault()}},[t,i,D.paused]);return G.jsx(Xr.div,{tabIndex:-1,...c,ref:I,onKeyDown:W})});ZT.displayName=kN;function PN(n,{select:e=!1}={}){const t=document.activeElement;for(const i of n)if(Ni(i,{select:e}),document.activeElement!==t)return}function xN(n){const e=eI(n),t=C_(e,n),i=C_(e.reverse(),n);return[t,i]}function eI(n){const e=[],t=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>{const o=i.tagName==="INPUT"&&i.type==="hidden";return i.disabled||i.hidden||o?NodeFilter.FILTER_SKIP:i.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;t.nextNode();)e.push(t.currentNode);return e}function C_(n,e){for(const t of n)if(!bN(t,{upTo:e}))return t}function bN(n,{upTo:e}){if(getComputedStyle(n).visibility==="hidden")return!0;for(;n;){if(e!==void 0&&n===e)return!1;if(getComputedStyle(n).display==="none")return!0;n=n.parentElement}return!1}function NN(n){return n instanceof HTMLInputElement&&"select"in n}function Ni(n,{select:e=!1}={}){if(n&&n.focus){const t=document.activeElement;n.focus({preventScroll:!0}),n!==t&&NN(n)&&e&&n.select()}}var k_=DN();function DN(){let n=[];return{add(e){const t=n[0];e!==t&&(t==null||t.pause()),n=P_(n,e),n.unshift(e)},remove(e){var t;n=P_(n,e),(t=n[0])==null||t.resume()}}}function P_(n,e){const t=[...n],i=t.indexOf(e);return i!==-1&&t.splice(i,1),t}function VN(n){return n.filter(e=>e.tagName!=="A")}var ON="Portal",tI=L.forwardRef((n,e)=>{var f;const{container:t,...i}=n,[o,l]=L.useState(!1);rh(()=>l(!0),[]);const c=t||o&&((f=globalThis==null?void 0:globalThis.document)==null?void 0:f.body);return c?pN.createPortal(G.jsx(Xr.div,{...i,ref:e}),c):null});tI.displayName=ON;function MN(n,e){return L.useReducer((t,i)=>e[t][i]??t,n)}var Nh=n=>{const{present:e,children:t}=n,i=LN(e),o=typeof t=="function"?t({present:i.isPresent}):L.Children.only(t),l=Jr(i.ref,FN(o));return typeof t=="function"||i.isPresent?L.cloneElement(o,{ref:l}):null};Nh.displayName="Presence";function LN(n){const[e,t]=L.useState(),i=L.useRef({}),o=L.useRef(n),l=L.useRef("none"),c=n?"mounted":"unmounted",[f,m]=MN(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return L.useEffect(()=>{const y=mc(i.current);l.current=f==="mounted"?y:"none"},[f]),rh(()=>{const y=i.current,_=o.current;if(_!==n){const I=l.current,D=mc(y);n?m("MOUNT"):D==="none"||(y==null?void 0:y.display)==="none"?m("UNMOUNT"):m(_&&I!==D?"ANIMATION_OUT":"UNMOUNT"),o.current=n}},[n,m]),rh(()=>{if(e){let y;const _=e.ownerDocument.defaultView??window,E=D=>{const M=mc(i.current).includes(D.animationName);if(D.target===e&&M&&(m("ANIMATION_END"),!o.current)){const z=e.style.animationFillMode;e.style.animationFillMode="forwards",y=_.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=z)})}},I=D=>{D.target===e&&(l.current=mc(i.current))};return e.addEventListener("animationstart",I),e.addEventListener("animationcancel",E),e.addEventListener("animationend",E),()=>{_.clearTimeout(y),e.removeEventListener("animationstart",I),e.removeEventListener("animationcancel",E),e.removeEventListener("animationend",E)}}else m("ANIMATION_END")},[e,m]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:L.useCallback(y=>{y&&(i.current=getComputedStyle(y)),t(y)},[])}}function mc(n){return(n==null?void 0:n.animationName)||"none"}function FN(n){var i,o;let e=(i=Object.getOwnPropertyDescriptor(n.props,"ref"))==null?void 0:i.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?n.ref:(e=(o=Object.getOwnPropertyDescriptor(n,"ref"))==null?void 0:o.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?n.props.ref:n.props.ref||n.ref)}var Rf=0;function UN(){L.useEffect(()=>{const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",n[0]??x_()),document.body.insertAdjacentElement("beforeend",n[1]??x_()),Rf++,()=>{Rf===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),Rf--}},[])}function x_(){const n=document.createElement("span");return n.setAttribute("data-radix-focus-guard",""),n.tabIndex=0,n.style.outline="none",n.style.opacity="0",n.style.position="fixed",n.style.pointerEvents="none",n}var gr=function(){return gr=Object.assign||function(e){for(var t,i=1,o=arguments.length;i<o;i++){t=arguments[i];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},gr.apply(this,arguments)};function nI(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function jN(n,e,t){if(t||arguments.length===2)for(var i=0,o=e.length,l;i<o;i++)(l||!(i in e))&&(l||(l=Array.prototype.slice.call(e,0,i)),l[i]=e[i]);return n.concat(l||Array.prototype.slice.call(e))}var Nc="right-scroll-bar-position",Dc="width-before-scroll-bar",zN="with-scroll-bars-hidden",BN="--removed-body-scroll-bar-size";function Cf(n,e){return typeof n=="function"?n(e):n&&(n.current=e),n}function $N(n,e){var t=L.useState(function(){return{value:n,callback:e,facade:{get current(){return t.value},set current(i){var o=t.value;o!==i&&(t.value=i,t.callback(i,o))}}}})[0];return t.callback=e,t.facade}var WN=typeof window<"u"?L.useLayoutEffect:L.useEffect,b_=new WeakMap;function qN(n,e){var t=$N(null,function(i){return n.forEach(function(o){return Cf(o,i)})});return WN(function(){var i=b_.get(t);if(i){var o=new Set(i),l=new Set(n),c=t.current;o.forEach(function(f){l.has(f)||Cf(f,null)}),l.forEach(function(f){o.has(f)||Cf(f,c)})}b_.set(t,n)},[n]),t}function HN(n){return n}function GN(n,e){e===void 0&&(e=HN);var t=[],i=!1,o={read:function(){if(i)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return t.length?t[t.length-1]:n},useMedium:function(l){var c=e(l,i);return t.push(c),function(){t=t.filter(function(f){return f!==c})}},assignSyncMedium:function(l){for(i=!0;t.length;){var c=t;t=[],c.forEach(l)}t={push:function(f){return l(f)},filter:function(){return t}}},assignMedium:function(l){i=!0;var c=[];if(t.length){var f=t;t=[],f.forEach(l),c=t}var m=function(){var _=c;c=[],_.forEach(l)},y=function(){return Promise.resolve().then(m)};y(),t={push:function(_){c.push(_),y()},filter:function(_){return c=c.filter(_),t}}}};return o}function KN(n){n===void 0&&(n={});var e=GN(null);return e.options=gr({async:!0,ssr:!1},n),e}var rI=function(n){var e=n.sideCar,t=nI(n,["sideCar"]);if(!e)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var i=e.read();if(!i)throw new Error("Sidecar medium not found");return L.createElement(i,gr({},t))};rI.isSideCarExport=!0;function QN(n,e){return n.useMedium(e),rI}var iI=KN(),kf=function(){},Dh=L.forwardRef(function(n,e){var t=L.useRef(null),i=L.useState({onScrollCapture:kf,onWheelCapture:kf,onTouchMoveCapture:kf}),o=i[0],l=i[1],c=n.forwardProps,f=n.children,m=n.className,y=n.removeScrollBar,_=n.enabled,E=n.shards,I=n.sideCar,D=n.noRelative,W=n.noIsolation,M=n.inert,z=n.allowPinchZoom,Z=n.as,ne=Z===void 0?"div":Z,ie=n.gapMode,ue=nI(n,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),ve=I,we=qN([t,e]),R=gr(gr({},ue),o);return L.createElement(L.Fragment,null,_&&L.createElement(ve,{sideCar:iI,removeScrollBar:y,shards:E,noRelative:D,noIsolation:W,inert:M,setCallbacks:l,allowPinchZoom:!!z,lockRef:t,gapMode:ie}),c?L.cloneElement(L.Children.only(f),gr(gr({},R),{ref:we})):L.createElement(ne,gr({},R,{className:m,ref:we}),f))});Dh.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Dh.classNames={fullWidth:Dc,zeroRight:Nc};var YN=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function JN(){if(!document)return null;var n=document.createElement("style");n.type="text/css";var e=YN();return e&&n.setAttribute("nonce",e),n}function XN(n,e){n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}function ZN(n){var e=document.head||document.getElementsByTagName("head")[0];e.appendChild(n)}var eD=function(){var n=0,e=null;return{add:function(t){n==0&&(e=JN())&&(XN(e,t),ZN(e)),n++},remove:function(){n--,!n&&e&&(e.parentNode&&e.parentNode.removeChild(e),e=null)}}},tD=function(){var n=eD();return function(e,t){L.useEffect(function(){return n.add(e),function(){n.remove()}},[e&&t])}},sI=function(){var n=tD(),e=function(t){var i=t.styles,o=t.dynamic;return n(i,o),null};return e},nD={left:0,top:0,right:0,gap:0},Pf=function(n){return parseInt(n||"",10)||0},rD=function(n){var e=window.getComputedStyle(document.body),t=e[n==="padding"?"paddingLeft":"marginLeft"],i=e[n==="padding"?"paddingTop":"marginTop"],o=e[n==="padding"?"paddingRight":"marginRight"];return[Pf(t),Pf(i),Pf(o)]},iD=function(n){if(n===void 0&&(n="margin"),typeof window>"u")return nD;var e=rD(n),t=document.documentElement.clientWidth,i=window.innerWidth;return{left:e[0],top:e[1],right:e[2],gap:Math.max(0,i-t+e[2]-e[0])}},sD=sI(),Xo="data-scroll-locked",oD=function(n,e,t,i){var o=n.left,l=n.top,c=n.right,f=n.gap;return t===void 0&&(t="margin"),`
  .`.concat(zN,` {
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
    `).concat(BN,": ").concat(f,`px;
  }
`)},N_=function(){var n=parseInt(document.body.getAttribute(Xo)||"0",10);return isFinite(n)?n:0},aD=function(){L.useEffect(function(){return document.body.setAttribute(Xo,(N_()+1).toString()),function(){var n=N_()-1;n<=0?document.body.removeAttribute(Xo):document.body.setAttribute(Xo,n.toString())}},[])},lD=function(n){var e=n.noRelative,t=n.noImportant,i=n.gapMode,o=i===void 0?"margin":i;aD();var l=L.useMemo(function(){return iD(o)},[o]);return L.createElement(sD,{styles:oD(l,!e,o,t?"":"!important")})},op=!1;if(typeof window<"u")try{var gc=Object.defineProperty({},"passive",{get:function(){return op=!0,!0}});window.addEventListener("test",gc,gc),window.removeEventListener("test",gc,gc)}catch{op=!1}var Mo=op?{passive:!1}:!1,uD=function(n){return n.tagName==="TEXTAREA"},oI=function(n,e){if(!(n instanceof Element))return!1;var t=window.getComputedStyle(n);return t[e]!=="hidden"&&!(t.overflowY===t.overflowX&&!uD(n)&&t[e]==="visible")},cD=function(n){return oI(n,"overflowY")},hD=function(n){return oI(n,"overflowX")},D_=function(n,e){var t=e.ownerDocument,i=e;do{typeof ShadowRoot<"u"&&i instanceof ShadowRoot&&(i=i.host);var o=aI(n,i);if(o){var l=lI(n,i),c=l[1],f=l[2];if(c>f)return!0}i=i.parentNode}while(i&&i!==t.body);return!1},dD=function(n){var e=n.scrollTop,t=n.scrollHeight,i=n.clientHeight;return[e,t,i]},fD=function(n){var e=n.scrollLeft,t=n.scrollWidth,i=n.clientWidth;return[e,t,i]},aI=function(n,e){return n==="v"?cD(e):hD(e)},lI=function(n,e){return n==="v"?dD(e):fD(e)},pD=function(n,e){return n==="h"&&e==="rtl"?-1:1},mD=function(n,e,t,i,o){var l=pD(n,window.getComputedStyle(e).direction),c=l*i,f=t.target,m=e.contains(f),y=!1,_=c>0,E=0,I=0;do{if(!f)break;var D=lI(n,f),W=D[0],M=D[1],z=D[2],Z=M-z-l*W;(W||Z)&&aI(n,f)&&(E+=Z,I+=W);var ne=f.parentNode;f=ne&&ne.nodeType===Node.DOCUMENT_FRAGMENT_NODE?ne.host:ne}while(!m&&f!==document.body||m&&(e.contains(f)||e===f));return(_&&Math.abs(E)<1||!_&&Math.abs(I)<1)&&(y=!0),y},yc=function(n){return"changedTouches"in n?[n.changedTouches[0].clientX,n.changedTouches[0].clientY]:[0,0]},V_=function(n){return[n.deltaX,n.deltaY]},O_=function(n){return n&&"current"in n?n.current:n},gD=function(n,e){return n[0]===e[0]&&n[1]===e[1]},yD=function(n){return`
  .block-interactivity-`.concat(n,` {pointer-events: none;}
  .allow-interactivity-`).concat(n,` {pointer-events: all;}
`)},vD=0,Lo=[];function _D(n){var e=L.useRef([]),t=L.useRef([0,0]),i=L.useRef(),o=L.useState(vD++)[0],l=L.useState(sI)[0],c=L.useRef(n);L.useEffect(function(){c.current=n},[n]),L.useEffect(function(){if(n.inert){document.body.classList.add("block-interactivity-".concat(o));var M=jN([n.lockRef.current],(n.shards||[]).map(O_),!0).filter(Boolean);return M.forEach(function(z){return z.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),M.forEach(function(z){return z.classList.remove("allow-interactivity-".concat(o))})}}},[n.inert,n.lockRef.current,n.shards]);var f=L.useCallback(function(M,z){if("touches"in M&&M.touches.length===2||M.type==="wheel"&&M.ctrlKey)return!c.current.allowPinchZoom;var Z=yc(M),ne=t.current,ie="deltaX"in M?M.deltaX:ne[0]-Z[0],ue="deltaY"in M?M.deltaY:ne[1]-Z[1],ve,we=M.target,R=Math.abs(ie)>Math.abs(ue)?"h":"v";if("touches"in M&&R==="h"&&we.type==="range")return!1;var S=window.getSelection(),C=S&&S.anchorNode,b=C?C===we||C.contains(we):!1;if(b)return!1;var x=D_(R,we);if(!x)return!0;if(x?ve=R:(ve=R==="v"?"h":"v",x=D_(R,we)),!x)return!1;if(!i.current&&"changedTouches"in M&&(ie||ue)&&(i.current=ve),!ve)return!0;var V=i.current||ve;return mD(V,z,M,V==="h"?ie:ue)},[]),m=L.useCallback(function(M){var z=M;if(!(!Lo.length||Lo[Lo.length-1]!==l)){var Z="deltaY"in z?V_(z):yc(z),ne=e.current.filter(function(ve){return ve.name===z.type&&(ve.target===z.target||z.target===ve.shadowParent)&&gD(ve.delta,Z)})[0];if(ne&&ne.should){z.cancelable&&z.preventDefault();return}if(!ne){var ie=(c.current.shards||[]).map(O_).filter(Boolean).filter(function(ve){return ve.contains(z.target)}),ue=ie.length>0?f(z,ie[0]):!c.current.noIsolation;ue&&z.cancelable&&z.preventDefault()}}},[]),y=L.useCallback(function(M,z,Z,ne){var ie={name:M,delta:z,target:Z,should:ne,shadowParent:wD(Z)};e.current.push(ie),setTimeout(function(){e.current=e.current.filter(function(ue){return ue!==ie})},1)},[]),_=L.useCallback(function(M){t.current=yc(M),i.current=void 0},[]),E=L.useCallback(function(M){y(M.type,V_(M),M.target,f(M,n.lockRef.current))},[]),I=L.useCallback(function(M){y(M.type,yc(M),M.target,f(M,n.lockRef.current))},[]);L.useEffect(function(){return Lo.push(l),n.setCallbacks({onScrollCapture:E,onWheelCapture:E,onTouchMoveCapture:I}),document.addEventListener("wheel",m,Mo),document.addEventListener("touchmove",m,Mo),document.addEventListener("touchstart",_,Mo),function(){Lo=Lo.filter(function(M){return M!==l}),document.removeEventListener("wheel",m,Mo),document.removeEventListener("touchmove",m,Mo),document.removeEventListener("touchstart",_,Mo)}},[]);var D=n.removeScrollBar,W=n.inert;return L.createElement(L.Fragment,null,W?L.createElement(l,{styles:yD(o)}):null,D?L.createElement(lD,{noRelative:n.noRelative,gapMode:n.gapMode}):null)}function wD(n){for(var e=null;n!==null;)n instanceof ShadowRoot&&(e=n.host,n=n.host),n=n.parentNode;return e}const ED=QN(iI,_D);var uI=L.forwardRef(function(n,e){return L.createElement(Dh,gr({},n,{ref:e,sideCar:ED}))});uI.classNames=Dh.classNames;var TD=function(n){if(typeof document>"u")return null;var e=Array.isArray(n)?n[0]:n;return e.ownerDocument.body},Fo=new WeakMap,vc=new WeakMap,_c={},xf=0,cI=function(n){return n&&(n.host||cI(n.parentNode))},ID=function(n,e){return e.map(function(t){if(n.contains(t))return t;var i=cI(t);return i&&n.contains(i)?i:(console.error("aria-hidden",t,"in not contained inside",n,". Doing nothing"),null)}).filter(function(t){return!!t})},SD=function(n,e,t,i){var o=ID(e,Array.isArray(n)?n:[n]);_c[t]||(_c[t]=new WeakMap);var l=_c[t],c=[],f=new Set,m=new Set(o),y=function(E){!E||f.has(E)||(f.add(E),y(E.parentNode))};o.forEach(y);var _=function(E){!E||m.has(E)||Array.prototype.forEach.call(E.children,function(I){if(f.has(I))_(I);else try{var D=I.getAttribute(i),W=D!==null&&D!=="false",M=(Fo.get(I)||0)+1,z=(l.get(I)||0)+1;Fo.set(I,M),l.set(I,z),c.push(I),M===1&&W&&vc.set(I,!0),z===1&&I.setAttribute(t,"true"),W||I.setAttribute(i,"true")}catch(Z){console.error("aria-hidden: cannot operate on ",I,Z)}})};return _(e),f.clear(),xf++,function(){c.forEach(function(E){var I=Fo.get(E)-1,D=l.get(E)-1;Fo.set(E,I),l.set(E,D),I||(vc.has(E)||E.removeAttribute(i),vc.delete(E)),D||E.removeAttribute(t)}),xf--,xf||(Fo=new WeakMap,Fo=new WeakMap,vc=new WeakMap,_c={})}},AD=function(n,e,t){t===void 0&&(t="data-aria-hidden");var i=Array.from(Array.isArray(n)?n:[n]),o=TD(n);return o?(i.push.apply(i,Array.from(o.querySelectorAll("[aria-live], script"))),SD(i,o,t,"aria-hidden")):function(){return null}},gm="Dialog",[hI,dI]=HT(gm),[RD,Yn]=hI(gm),fI=n=>{const{__scopeDialog:e,children:t,open:i,defaultOpen:o,onOpenChange:l,modal:c=!0}=n,f=L.useRef(null),m=L.useRef(null),[y=!1,_]=dN({prop:i,defaultProp:o,onChange:l});return G.jsx(RD,{scope:e,triggerRef:f,contentRef:m,contentId:If(),titleId:If(),descriptionId:If(),open:y,onOpenChange:_,onOpenToggle:L.useCallback(()=>_(E=>!E),[_]),modal:c,children:t})};fI.displayName=gm;var pI="DialogTrigger",mI=L.forwardRef((n,e)=>{const{__scopeDialog:t,...i}=n,o=Yn(pI,t),l=Jr(e,o.triggerRef);return G.jsx(Xr.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":_m(o.open),...i,ref:l,onClick:qr(n.onClick,o.onOpenToggle)})});mI.displayName=pI;var ym="DialogPortal",[CD,gI]=hI(ym,{forceMount:void 0}),yI=n=>{const{__scopeDialog:e,forceMount:t,children:i,container:o}=n,l=Yn(ym,e);return G.jsx(CD,{scope:e,forceMount:t,children:L.Children.map(i,c=>G.jsx(Nh,{present:t||l.open,children:G.jsx(tI,{asChild:!0,container:o,children:c})}))})};yI.displayName=ym;var ih="DialogOverlay",vI=L.forwardRef((n,e)=>{const t=gI(ih,n.__scopeDialog),{forceMount:i=t.forceMount,...o}=n,l=Yn(ih,n.__scopeDialog);return l.modal?G.jsx(Nh,{present:i||l.open,children:G.jsx(kD,{...o,ref:e})}):null});vI.displayName=ih;var kD=L.forwardRef((n,e)=>{const{__scopeDialog:t,...i}=n,o=Yn(ih,t);return G.jsx(uI,{as:mm,allowPinchZoom:!0,shards:[o.contentRef],children:G.jsx(Xr.div,{"data-state":_m(o.open),...i,ref:e,style:{pointerEvents:"auto",...i.style}})})}),$s="DialogContent",_I=L.forwardRef((n,e)=>{const t=gI($s,n.__scopeDialog),{forceMount:i=t.forceMount,...o}=n,l=Yn($s,n.__scopeDialog);return G.jsx(Nh,{present:i||l.open,children:l.modal?G.jsx(PD,{...o,ref:e}):G.jsx(xD,{...o,ref:e})})});_I.displayName=$s;var PD=L.forwardRef((n,e)=>{const t=Yn($s,n.__scopeDialog),i=L.useRef(null),o=Jr(e,t.contentRef,i);return L.useEffect(()=>{const l=i.current;if(l)return AD(l)},[]),G.jsx(wI,{...n,ref:o,trapFocus:t.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:qr(n.onCloseAutoFocus,l=>{var c;l.preventDefault(),(c=t.triggerRef.current)==null||c.focus()}),onPointerDownOutside:qr(n.onPointerDownOutside,l=>{const c=l.detail.originalEvent,f=c.button===0&&c.ctrlKey===!0;(c.button===2||f)&&l.preventDefault()}),onFocusOutside:qr(n.onFocusOutside,l=>l.preventDefault())})}),xD=L.forwardRef((n,e)=>{const t=Yn($s,n.__scopeDialog),i=L.useRef(!1),o=L.useRef(!1);return G.jsx(wI,{...n,ref:e,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:l=>{var c,f;(c=n.onCloseAutoFocus)==null||c.call(n,l),l.defaultPrevented||(i.current||(f=t.triggerRef.current)==null||f.focus(),l.preventDefault()),i.current=!1,o.current=!1},onInteractOutside:l=>{var m,y;(m=n.onInteractOutside)==null||m.call(n,l),l.defaultPrevented||(i.current=!0,l.detail.originalEvent.type==="pointerdown"&&(o.current=!0));const c=l.target;((y=t.triggerRef.current)==null?void 0:y.contains(c))&&l.preventDefault(),l.detail.originalEvent.type==="focusin"&&o.current&&l.preventDefault()}})}),wI=L.forwardRef((n,e)=>{const{__scopeDialog:t,trapFocus:i,onOpenAutoFocus:o,onCloseAutoFocus:l,...c}=n,f=Yn($s,t),m=L.useRef(null),y=Jr(e,m);return UN(),G.jsxs(G.Fragment,{children:[G.jsx(ZT,{asChild:!0,loop:!0,trapped:i,onMountAutoFocus:o,onUnmountAutoFocus:l,children:G.jsx(JT,{role:"dialog",id:f.contentId,"aria-describedby":f.descriptionId,"aria-labelledby":f.titleId,"data-state":_m(f.open),...c,ref:y,onDismiss:()=>f.onOpenChange(!1)})}),G.jsxs(G.Fragment,{children:[G.jsx(ND,{titleId:f.titleId}),G.jsx(VD,{contentRef:m,descriptionId:f.descriptionId})]})]})}),vm="DialogTitle",EI=L.forwardRef((n,e)=>{const{__scopeDialog:t,...i}=n,o=Yn(vm,t);return G.jsx(Xr.h2,{id:o.titleId,...i,ref:e})});EI.displayName=vm;var TI="DialogDescription",II=L.forwardRef((n,e)=>{const{__scopeDialog:t,...i}=n,o=Yn(TI,t);return G.jsx(Xr.p,{id:o.descriptionId,...i,ref:e})});II.displayName=TI;var SI="DialogClose",AI=L.forwardRef((n,e)=>{const{__scopeDialog:t,...i}=n,o=Yn(SI,t);return G.jsx(Xr.button,{type:"button",...i,ref:e,onClick:qr(n.onClick,()=>o.onOpenChange(!1))})});AI.displayName=SI;function _m(n){return n?"open":"closed"}var RI="DialogTitleWarning",[bD,CI]=lN(RI,{contentName:$s,titleName:vm,docsSlug:"dialog"}),ND=({titleId:n})=>{const e=CI(RI),t=`\`${e.contentName}\` requires a \`${e.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${e.docsSlug}`;return L.useEffect(()=>{n&&(document.getElementById(n)||console.error(t))},[t,n]),null},DD="DialogDescriptionWarning",VD=({contentRef:n,descriptionId:e})=>{const i=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${CI(DD).contentName}}.`;return L.useEffect(()=>{var l;const o=(l=n.current)==null?void 0:l.getAttribute("aria-describedby");e&&o&&(document.getElementById(e)||console.warn(i))},[i,n,e]),null},OD=fI,MD=mI,LD=yI,FD=vI,UD=_I,jD=EI,zD=II,kI=AI,PI="AlertDialog",[BD]=HT(PI,[dI]),Zr=dI(),xI=n=>{const{__scopeAlertDialog:e,...t}=n,i=Zr(e);return G.jsx(OD,{...i,...t,modal:!0})};xI.displayName=PI;var $D="AlertDialogTrigger",WD=L.forwardRef((n,e)=>{const{__scopeAlertDialog:t,...i}=n,o=Zr(t);return G.jsx(MD,{...o,...i,ref:e})});WD.displayName=$D;var qD="AlertDialogPortal",bI=n=>{const{__scopeAlertDialog:e,...t}=n,i=Zr(e);return G.jsx(LD,{...i,...t})};bI.displayName=qD;var HD="AlertDialogOverlay",NI=L.forwardRef((n,e)=>{const{__scopeAlertDialog:t,...i}=n,o=Zr(t);return G.jsx(FD,{...o,...i,ref:e})});NI.displayName=HD;var Zo="AlertDialogContent",[GD,KD]=BD(Zo),DI=L.forwardRef((n,e)=>{const{__scopeAlertDialog:t,children:i,...o}=n,l=Zr(t),c=L.useRef(null),f=Jr(e,c),m=L.useRef(null);return G.jsx(bD,{contentName:Zo,titleName:VI,docsSlug:"alert-dialog",children:G.jsx(GD,{scope:t,cancelRef:m,children:G.jsxs(UD,{role:"alertdialog",...l,...o,ref:f,onOpenAutoFocus:qr(o.onOpenAutoFocus,y=>{var _;y.preventDefault(),(_=m.current)==null||_.focus({preventScroll:!0})}),onPointerDownOutside:y=>y.preventDefault(),onInteractOutside:y=>y.preventDefault(),children:[G.jsx(QT,{children:i}),G.jsx(YD,{contentRef:c})]})})})});DI.displayName=Zo;var VI="AlertDialogTitle",OI=L.forwardRef((n,e)=>{const{__scopeAlertDialog:t,...i}=n,o=Zr(t);return G.jsx(jD,{...o,...i,ref:e})});OI.displayName=VI;var MI="AlertDialogDescription",LI=L.forwardRef((n,e)=>{const{__scopeAlertDialog:t,...i}=n,o=Zr(t);return G.jsx(zD,{...o,...i,ref:e})});LI.displayName=MI;var QD="AlertDialogAction",FI=L.forwardRef((n,e)=>{const{__scopeAlertDialog:t,...i}=n,o=Zr(t);return G.jsx(kI,{...o,...i,ref:e})});FI.displayName=QD;var UI="AlertDialogCancel",jI=L.forwardRef((n,e)=>{const{__scopeAlertDialog:t,...i}=n,{cancelRef:o}=KD(UI,t),l=Zr(t),c=Jr(e,o);return G.jsx(kI,{...l,...i,ref:c})});jI.displayName=UI;var YD=({contentRef:n})=>{const e=`\`${Zo}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${Zo}\` by passing a \`${MI}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${Zo}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return L.useEffect(()=>{var i;document.getElementById((i=n.current)==null?void 0:i.getAttribute("aria-describedby"))||console.warn(e)},[e,n]),null},JD=xI,XD=bI,ZD=NI,e2=DI,t2=FI,n2=jI,r2=OI,i2=LI;function zI(n){var e,t,i="";if(typeof n=="string"||typeof n=="number")i+=n;else if(typeof n=="object")if(Array.isArray(n)){var o=n.length;for(e=0;e<o;e++)n[e]&&(t=zI(n[e]))&&(i&&(i+=" "),i+=t)}else for(t in n)n[t]&&(i&&(i+=" "),i+=t);return i}function BI(){for(var n,e,t=0,i="",o=arguments.length;t<o;t++)(n=arguments[t])&&(e=zI(n))&&(i&&(i+=" "),i+=e);return i}const wm="-",s2=n=>{const e=a2(n),{conflictingClassGroups:t,conflictingClassGroupModifiers:i}=n;return{getClassGroupId:c=>{const f=c.split(wm);return f[0]===""&&f.length!==1&&f.shift(),$I(f,e)||o2(c)},getConflictingClassGroupIds:(c,f)=>{const m=t[c]||[];return f&&i[c]?[...m,...i[c]]:m}}},$I=(n,e)=>{var c;if(n.length===0)return e.classGroupId;const t=n[0],i=e.nextPart.get(t),o=i?$I(n.slice(1),i):void 0;if(o)return o;if(e.validators.length===0)return;const l=n.join(wm);return(c=e.validators.find(({validator:f})=>f(l)))==null?void 0:c.classGroupId},M_=/^\[(.+)\]$/,o2=n=>{if(M_.test(n)){const e=M_.exec(n)[1],t=e==null?void 0:e.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}},a2=n=>{const{theme:e,classGroups:t}=n,i={nextPart:new Map,validators:[]};for(const o in t)ap(t[o],i,o,e);return i},ap=(n,e,t,i)=>{n.forEach(o=>{if(typeof o=="string"){const l=o===""?e:L_(e,o);l.classGroupId=t;return}if(typeof o=="function"){if(l2(o)){ap(o(i),e,t,i);return}e.validators.push({validator:o,classGroupId:t});return}Object.entries(o).forEach(([l,c])=>{ap(c,L_(e,l),t,i)})})},L_=(n,e)=>{let t=n;return e.split(wm).forEach(i=>{t.nextPart.has(i)||t.nextPart.set(i,{nextPart:new Map,validators:[]}),t=t.nextPart.get(i)}),t},l2=n=>n.isThemeGetter,u2=n=>{if(n<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,i=new Map;const o=(l,c)=>{t.set(l,c),e++,e>n&&(e=0,i=t,t=new Map)};return{get(l){let c=t.get(l);if(c!==void 0)return c;if((c=i.get(l))!==void 0)return o(l,c),c},set(l,c){t.has(l)?t.set(l,c):o(l,c)}}},lp="!",up=":",c2=up.length,h2=n=>{const{prefix:e,experimentalParseClassName:t}=n;let i=o=>{const l=[];let c=0,f=0,m=0,y;for(let W=0;W<o.length;W++){let M=o[W];if(c===0&&f===0){if(M===up){l.push(o.slice(m,W)),m=W+c2;continue}if(M==="/"){y=W;continue}}M==="["?c++:M==="]"?c--:M==="("?f++:M===")"&&f--}const _=l.length===0?o:o.substring(m),E=d2(_),I=E!==_,D=y&&y>m?y-m:void 0;return{modifiers:l,hasImportantModifier:I,baseClassName:E,maybePostfixModifierPosition:D}};if(e){const o=e+up,l=i;i=c=>c.startsWith(o)?l(c.substring(o.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:c,maybePostfixModifierPosition:void 0}}if(t){const o=i;i=l=>t({className:l,parseClassName:o})}return i},d2=n=>n.endsWith(lp)?n.substring(0,n.length-1):n.startsWith(lp)?n.substring(1):n,f2=n=>{const e=Object.fromEntries(n.orderSensitiveModifiers.map(i=>[i,!0]));return i=>{if(i.length<=1)return i;const o=[];let l=[];return i.forEach(c=>{c[0]==="["||e[c]?(o.push(...l.sort(),c),l=[]):l.push(c)}),o.push(...l.sort()),o}},p2=n=>({cache:u2(n.cacheSize),parseClassName:h2(n),sortModifiers:f2(n),...s2(n)}),m2=/\s+/,g2=(n,e)=>{const{parseClassName:t,getClassGroupId:i,getConflictingClassGroupIds:o,sortModifiers:l}=e,c=[],f=n.trim().split(m2);let m="";for(let y=f.length-1;y>=0;y-=1){const _=f[y],{isExternal:E,modifiers:I,hasImportantModifier:D,baseClassName:W,maybePostfixModifierPosition:M}=t(_);if(E){m=_+(m.length>0?" "+m:m);continue}let z=!!M,Z=i(z?W.substring(0,M):W);if(!Z){if(!z){m=_+(m.length>0?" "+m:m);continue}if(Z=i(W),!Z){m=_+(m.length>0?" "+m:m);continue}z=!1}const ne=l(I).join(":"),ie=D?ne+lp:ne,ue=ie+Z;if(c.includes(ue))continue;c.push(ue);const ve=o(Z,z);for(let we=0;we<ve.length;++we){const R=ve[we];c.push(ie+R)}m=_+(m.length>0?" "+m:m)}return m};function y2(){let n=0,e,t,i="";for(;n<arguments.length;)(e=arguments[n++])&&(t=WI(e))&&(i&&(i+=" "),i+=t);return i}const WI=n=>{if(typeof n=="string")return n;let e,t="";for(let i=0;i<n.length;i++)n[i]&&(e=WI(n[i]))&&(t&&(t+=" "),t+=e);return t};function v2(n,...e){let t,i,o,l=c;function c(m){const y=e.reduce((_,E)=>E(_),n());return t=p2(y),i=t.cache.get,o=t.cache.set,l=f,f(m)}function f(m){const y=i(m);if(y)return y;const _=g2(m,t);return o(m,_),_}return function(){return l(y2.apply(null,arguments))}}const Ct=n=>{const e=t=>t[n]||[];return e.isThemeGetter=!0,e},qI=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,HI=/^\((?:(\w[\w-]*):)?(.+)\)$/i,_2=/^\d+\/\d+$/,w2=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,E2=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,T2=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,I2=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,S2=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Uo=n=>_2.test(n),De=n=>!!n&&!Number.isNaN(Number(n)),bi=n=>!!n&&Number.isInteger(Number(n)),bf=n=>n.endsWith("%")&&De(n.slice(0,-1)),Br=n=>w2.test(n),A2=()=>!0,R2=n=>E2.test(n)&&!T2.test(n),GI=()=>!1,C2=n=>I2.test(n),k2=n=>S2.test(n),P2=n=>!fe(n)&&!pe(n),x2=n=>pa(n,YI,GI),fe=n=>qI.test(n),bs=n=>pa(n,JI,R2),Nf=n=>pa(n,O2,De),F_=n=>pa(n,KI,GI),b2=n=>pa(n,QI,k2),wc=n=>pa(n,XI,C2),pe=n=>HI.test(n),dl=n=>ma(n,JI),N2=n=>ma(n,M2),U_=n=>ma(n,KI),D2=n=>ma(n,YI),V2=n=>ma(n,QI),Ec=n=>ma(n,XI,!0),pa=(n,e,t)=>{const i=qI.exec(n);return i?i[1]?e(i[1]):t(i[2]):!1},ma=(n,e,t=!1)=>{const i=HI.exec(n);return i?i[1]?e(i[1]):t:!1},KI=n=>n==="position"||n==="percentage",QI=n=>n==="image"||n==="url",YI=n=>n==="length"||n==="size"||n==="bg-size",JI=n=>n==="length",O2=n=>n==="number",M2=n=>n==="family-name",XI=n=>n==="shadow",L2=()=>{const n=Ct("color"),e=Ct("font"),t=Ct("text"),i=Ct("font-weight"),o=Ct("tracking"),l=Ct("leading"),c=Ct("breakpoint"),f=Ct("container"),m=Ct("spacing"),y=Ct("radius"),_=Ct("shadow"),E=Ct("inset-shadow"),I=Ct("text-shadow"),D=Ct("drop-shadow"),W=Ct("blur"),M=Ct("perspective"),z=Ct("aspect"),Z=Ct("ease"),ne=Ct("animate"),ie=()=>["auto","avoid","all","avoid-page","page","left","right","column"],ue=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],ve=()=>[...ue(),pe,fe],we=()=>["auto","hidden","clip","visible","scroll"],R=()=>["auto","contain","none"],S=()=>[pe,fe,m],C=()=>[Uo,"full","auto",...S()],b=()=>[bi,"none","subgrid",pe,fe],x=()=>["auto",{span:["full",bi,pe,fe]},bi,pe,fe],V=()=>[bi,"auto",pe,fe],k=()=>["auto","min","max","fr",pe,fe],He=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Ye=()=>["start","end","center","stretch","center-safe","end-safe"],Ve=()=>["auto",...S()],je=()=>[Uo,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...S()],q=()=>[n,pe,fe],ye=()=>[...ue(),U_,F_,{position:[pe,fe]}],se=()=>["no-repeat",{repeat:["","x","y","space","round"]}],O=()=>["auto","cover","contain",D2,x2,{size:[pe,fe]}],Q=()=>[bf,dl,bs],he=()=>["","none","full",y,pe,fe],_e=()=>["",De,dl,bs],be=()=>["solid","dashed","dotted","double"],Ne=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Ae=()=>[De,bf,U_,F_],Oe=()=>["","none",W,pe,fe],Be=()=>["none",De,pe,fe],ot=()=>["none",De,pe,fe],oe=()=>[De,pe,fe],Ge=()=>[Uo,"full",...S()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Br],breakpoint:[Br],color:[A2],container:[Br],"drop-shadow":[Br],ease:["in","out","in-out"],font:[P2],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Br],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Br],shadow:[Br],spacing:["px",De],text:[Br],"text-shadow":[Br],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Uo,fe,pe,z]}],container:["container"],columns:[{columns:[De,fe,pe,f]}],"break-after":[{"break-after":ie()}],"break-before":[{"break-before":ie()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:ve()}],overflow:[{overflow:we()}],"overflow-x":[{"overflow-x":we()}],"overflow-y":[{"overflow-y":we()}],overscroll:[{overscroll:R()}],"overscroll-x":[{"overscroll-x":R()}],"overscroll-y":[{"overscroll-y":R()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:C()}],"inset-x":[{"inset-x":C()}],"inset-y":[{"inset-y":C()}],start:[{start:C()}],end:[{end:C()}],top:[{top:C()}],right:[{right:C()}],bottom:[{bottom:C()}],left:[{left:C()}],visibility:["visible","invisible","collapse"],z:[{z:[bi,"auto",pe,fe]}],basis:[{basis:[Uo,"full","auto",f,...S()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[De,Uo,"auto","initial","none",fe]}],grow:[{grow:["",De,pe,fe]}],shrink:[{shrink:["",De,pe,fe]}],order:[{order:[bi,"first","last","none",pe,fe]}],"grid-cols":[{"grid-cols":b()}],"col-start-end":[{col:x()}],"col-start":[{"col-start":V()}],"col-end":[{"col-end":V()}],"grid-rows":[{"grid-rows":b()}],"row-start-end":[{row:x()}],"row-start":[{"row-start":V()}],"row-end":[{"row-end":V()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":k()}],"auto-rows":[{"auto-rows":k()}],gap:[{gap:S()}],"gap-x":[{"gap-x":S()}],"gap-y":[{"gap-y":S()}],"justify-content":[{justify:[...He(),"normal"]}],"justify-items":[{"justify-items":[...Ye(),"normal"]}],"justify-self":[{"justify-self":["auto",...Ye()]}],"align-content":[{content:["normal",...He()]}],"align-items":[{items:[...Ye(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Ye(),{baseline:["","last"]}]}],"place-content":[{"place-content":He()}],"place-items":[{"place-items":[...Ye(),"baseline"]}],"place-self":[{"place-self":["auto",...Ye()]}],p:[{p:S()}],px:[{px:S()}],py:[{py:S()}],ps:[{ps:S()}],pe:[{pe:S()}],pt:[{pt:S()}],pr:[{pr:S()}],pb:[{pb:S()}],pl:[{pl:S()}],m:[{m:Ve()}],mx:[{mx:Ve()}],my:[{my:Ve()}],ms:[{ms:Ve()}],me:[{me:Ve()}],mt:[{mt:Ve()}],mr:[{mr:Ve()}],mb:[{mb:Ve()}],ml:[{ml:Ve()}],"space-x":[{"space-x":S()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":S()}],"space-y-reverse":["space-y-reverse"],size:[{size:je()}],w:[{w:[f,"screen",...je()]}],"min-w":[{"min-w":[f,"screen","none",...je()]}],"max-w":[{"max-w":[f,"screen","none","prose",{screen:[c]},...je()]}],h:[{h:["screen",...je()]}],"min-h":[{"min-h":["screen","none",...je()]}],"max-h":[{"max-h":["screen",...je()]}],"font-size":[{text:["base",t,dl,bs]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[i,pe,Nf]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",bf,fe]}],"font-family":[{font:[N2,fe,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[o,pe,fe]}],"line-clamp":[{"line-clamp":[De,"none",pe,Nf]}],leading:[{leading:[l,...S()]}],"list-image":[{"list-image":["none",pe,fe]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",pe,fe]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:q()}],"text-color":[{text:q()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...be(),"wavy"]}],"text-decoration-thickness":[{decoration:[De,"from-font","auto",pe,bs]}],"text-decoration-color":[{decoration:q()}],"underline-offset":[{"underline-offset":[De,"auto",pe,fe]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:S()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",pe,fe]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",pe,fe]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:ye()}],"bg-repeat":[{bg:se()}],"bg-size":[{bg:O()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},bi,pe,fe],radial:["",pe,fe],conic:[bi,pe,fe]},V2,b2]}],"bg-color":[{bg:q()}],"gradient-from-pos":[{from:Q()}],"gradient-via-pos":[{via:Q()}],"gradient-to-pos":[{to:Q()}],"gradient-from":[{from:q()}],"gradient-via":[{via:q()}],"gradient-to":[{to:q()}],rounded:[{rounded:he()}],"rounded-s":[{"rounded-s":he()}],"rounded-e":[{"rounded-e":he()}],"rounded-t":[{"rounded-t":he()}],"rounded-r":[{"rounded-r":he()}],"rounded-b":[{"rounded-b":he()}],"rounded-l":[{"rounded-l":he()}],"rounded-ss":[{"rounded-ss":he()}],"rounded-se":[{"rounded-se":he()}],"rounded-ee":[{"rounded-ee":he()}],"rounded-es":[{"rounded-es":he()}],"rounded-tl":[{"rounded-tl":he()}],"rounded-tr":[{"rounded-tr":he()}],"rounded-br":[{"rounded-br":he()}],"rounded-bl":[{"rounded-bl":he()}],"border-w":[{border:_e()}],"border-w-x":[{"border-x":_e()}],"border-w-y":[{"border-y":_e()}],"border-w-s":[{"border-s":_e()}],"border-w-e":[{"border-e":_e()}],"border-w-t":[{"border-t":_e()}],"border-w-r":[{"border-r":_e()}],"border-w-b":[{"border-b":_e()}],"border-w-l":[{"border-l":_e()}],"divide-x":[{"divide-x":_e()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":_e()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...be(),"hidden","none"]}],"divide-style":[{divide:[...be(),"hidden","none"]}],"border-color":[{border:q()}],"border-color-x":[{"border-x":q()}],"border-color-y":[{"border-y":q()}],"border-color-s":[{"border-s":q()}],"border-color-e":[{"border-e":q()}],"border-color-t":[{"border-t":q()}],"border-color-r":[{"border-r":q()}],"border-color-b":[{"border-b":q()}],"border-color-l":[{"border-l":q()}],"divide-color":[{divide:q()}],"outline-style":[{outline:[...be(),"none","hidden"]}],"outline-offset":[{"outline-offset":[De,pe,fe]}],"outline-w":[{outline:["",De,dl,bs]}],"outline-color":[{outline:q()}],shadow:[{shadow:["","none",_,Ec,wc]}],"shadow-color":[{shadow:q()}],"inset-shadow":[{"inset-shadow":["none",E,Ec,wc]}],"inset-shadow-color":[{"inset-shadow":q()}],"ring-w":[{ring:_e()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:q()}],"ring-offset-w":[{"ring-offset":[De,bs]}],"ring-offset-color":[{"ring-offset":q()}],"inset-ring-w":[{"inset-ring":_e()}],"inset-ring-color":[{"inset-ring":q()}],"text-shadow":[{"text-shadow":["none",I,Ec,wc]}],"text-shadow-color":[{"text-shadow":q()}],opacity:[{opacity:[De,pe,fe]}],"mix-blend":[{"mix-blend":[...Ne(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Ne()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[De]}],"mask-image-linear-from-pos":[{"mask-linear-from":Ae()}],"mask-image-linear-to-pos":[{"mask-linear-to":Ae()}],"mask-image-linear-from-color":[{"mask-linear-from":q()}],"mask-image-linear-to-color":[{"mask-linear-to":q()}],"mask-image-t-from-pos":[{"mask-t-from":Ae()}],"mask-image-t-to-pos":[{"mask-t-to":Ae()}],"mask-image-t-from-color":[{"mask-t-from":q()}],"mask-image-t-to-color":[{"mask-t-to":q()}],"mask-image-r-from-pos":[{"mask-r-from":Ae()}],"mask-image-r-to-pos":[{"mask-r-to":Ae()}],"mask-image-r-from-color":[{"mask-r-from":q()}],"mask-image-r-to-color":[{"mask-r-to":q()}],"mask-image-b-from-pos":[{"mask-b-from":Ae()}],"mask-image-b-to-pos":[{"mask-b-to":Ae()}],"mask-image-b-from-color":[{"mask-b-from":q()}],"mask-image-b-to-color":[{"mask-b-to":q()}],"mask-image-l-from-pos":[{"mask-l-from":Ae()}],"mask-image-l-to-pos":[{"mask-l-to":Ae()}],"mask-image-l-from-color":[{"mask-l-from":q()}],"mask-image-l-to-color":[{"mask-l-to":q()}],"mask-image-x-from-pos":[{"mask-x-from":Ae()}],"mask-image-x-to-pos":[{"mask-x-to":Ae()}],"mask-image-x-from-color":[{"mask-x-from":q()}],"mask-image-x-to-color":[{"mask-x-to":q()}],"mask-image-y-from-pos":[{"mask-y-from":Ae()}],"mask-image-y-to-pos":[{"mask-y-to":Ae()}],"mask-image-y-from-color":[{"mask-y-from":q()}],"mask-image-y-to-color":[{"mask-y-to":q()}],"mask-image-radial":[{"mask-radial":[pe,fe]}],"mask-image-radial-from-pos":[{"mask-radial-from":Ae()}],"mask-image-radial-to-pos":[{"mask-radial-to":Ae()}],"mask-image-radial-from-color":[{"mask-radial-from":q()}],"mask-image-radial-to-color":[{"mask-radial-to":q()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":ue()}],"mask-image-conic-pos":[{"mask-conic":[De]}],"mask-image-conic-from-pos":[{"mask-conic-from":Ae()}],"mask-image-conic-to-pos":[{"mask-conic-to":Ae()}],"mask-image-conic-from-color":[{"mask-conic-from":q()}],"mask-image-conic-to-color":[{"mask-conic-to":q()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:ye()}],"mask-repeat":[{mask:se()}],"mask-size":[{mask:O()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",pe,fe]}],filter:[{filter:["","none",pe,fe]}],blur:[{blur:Oe()}],brightness:[{brightness:[De,pe,fe]}],contrast:[{contrast:[De,pe,fe]}],"drop-shadow":[{"drop-shadow":["","none",D,Ec,wc]}],"drop-shadow-color":[{"drop-shadow":q()}],grayscale:[{grayscale:["",De,pe,fe]}],"hue-rotate":[{"hue-rotate":[De,pe,fe]}],invert:[{invert:["",De,pe,fe]}],saturate:[{saturate:[De,pe,fe]}],sepia:[{sepia:["",De,pe,fe]}],"backdrop-filter":[{"backdrop-filter":["","none",pe,fe]}],"backdrop-blur":[{"backdrop-blur":Oe()}],"backdrop-brightness":[{"backdrop-brightness":[De,pe,fe]}],"backdrop-contrast":[{"backdrop-contrast":[De,pe,fe]}],"backdrop-grayscale":[{"backdrop-grayscale":["",De,pe,fe]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[De,pe,fe]}],"backdrop-invert":[{"backdrop-invert":["",De,pe,fe]}],"backdrop-opacity":[{"backdrop-opacity":[De,pe,fe]}],"backdrop-saturate":[{"backdrop-saturate":[De,pe,fe]}],"backdrop-sepia":[{"backdrop-sepia":["",De,pe,fe]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":S()}],"border-spacing-x":[{"border-spacing-x":S()}],"border-spacing-y":[{"border-spacing-y":S()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",pe,fe]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[De,"initial",pe,fe]}],ease:[{ease:["linear","initial",Z,pe,fe]}],delay:[{delay:[De,pe,fe]}],animate:[{animate:["none",ne,pe,fe]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[M,pe,fe]}],"perspective-origin":[{"perspective-origin":ve()}],rotate:[{rotate:Be()}],"rotate-x":[{"rotate-x":Be()}],"rotate-y":[{"rotate-y":Be()}],"rotate-z":[{"rotate-z":Be()}],scale:[{scale:ot()}],"scale-x":[{"scale-x":ot()}],"scale-y":[{"scale-y":ot()}],"scale-z":[{"scale-z":ot()}],"scale-3d":["scale-3d"],skew:[{skew:oe()}],"skew-x":[{"skew-x":oe()}],"skew-y":[{"skew-y":oe()}],transform:[{transform:[pe,fe,"","none","gpu","cpu"]}],"transform-origin":[{origin:ve()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Ge()}],"translate-x":[{"translate-x":Ge()}],"translate-y":[{"translate-y":Ge()}],"translate-z":[{"translate-z":Ge()}],"translate-none":["translate-none"],accent:[{accent:q()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:q()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",pe,fe]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":S()}],"scroll-mx":[{"scroll-mx":S()}],"scroll-my":[{"scroll-my":S()}],"scroll-ms":[{"scroll-ms":S()}],"scroll-me":[{"scroll-me":S()}],"scroll-mt":[{"scroll-mt":S()}],"scroll-mr":[{"scroll-mr":S()}],"scroll-mb":[{"scroll-mb":S()}],"scroll-ml":[{"scroll-ml":S()}],"scroll-p":[{"scroll-p":S()}],"scroll-px":[{"scroll-px":S()}],"scroll-py":[{"scroll-py":S()}],"scroll-ps":[{"scroll-ps":S()}],"scroll-pe":[{"scroll-pe":S()}],"scroll-pt":[{"scroll-pt":S()}],"scroll-pr":[{"scroll-pr":S()}],"scroll-pb":[{"scroll-pb":S()}],"scroll-pl":[{"scroll-pl":S()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",pe,fe]}],fill:[{fill:["none",...q()]}],"stroke-w":[{stroke:[De,dl,bs,Nf]}],stroke:[{stroke:["none",...q()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},F2=v2(L2);function rs(...n){return F2(BI(n))}const j_=n=>typeof n=="boolean"?`${n}`:n===0?"0":n,z_=BI,U2=(n,e)=>t=>{var i;if((e==null?void 0:e.variants)==null)return z_(n,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:o,defaultVariants:l}=e,c=Object.keys(o).map(y=>{const _=t==null?void 0:t[y],E=l==null?void 0:l[y];if(_===null)return null;const I=j_(_)||j_(E);return o[y][I]}),f=t&&Object.entries(t).reduce((y,_)=>{let[E,I]=_;return I===void 0||(y[E]=I),y},{}),m=e==null||(i=e.compoundVariants)===null||i===void 0?void 0:i.reduce((y,_)=>{let{class:E,className:I,...D}=_;return Object.entries(D).every(W=>{let[M,z]=W;return Array.isArray(z)?z.includes({...l,...f}[M]):{...l,...f}[M]===z})?[...y,E,I]:y},[]);return z_(n,c,m,t==null?void 0:t.class,t==null?void 0:t.className)},ZI=U2("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9 rounded-md"}},defaultVariants:{variant:"default",size:"default"}});function j2({...n}){return G.jsx(JD,{"data-slot":"alert-dialog",...n})}function z2({...n}){return G.jsx(XD,{"data-slot":"alert-dialog-portal",...n})}function B2({className:n,...e}){return G.jsx(ZD,{"data-slot":"alert-dialog-overlay",className:rs("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",n),...e})}function $2({className:n,...e}){return G.jsxs(z2,{children:[G.jsx(B2,{}),G.jsx(e2,{"data-slot":"alert-dialog-content",className:rs("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",n),...e})]})}function W2({className:n,...e}){return G.jsx("div",{"data-slot":"alert-dialog-header",className:rs("flex flex-col gap-2 text-center sm:text-left",n),...e})}function q2({className:n,...e}){return G.jsx("div",{"data-slot":"alert-dialog-footer",className:rs("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",n),...e})}function H2({className:n,...e}){return G.jsx(r2,{"data-slot":"alert-dialog-title",className:rs("text-lg font-semibold",n),...e})}function G2({className:n,...e}){return G.jsx(i2,{"data-slot":"alert-dialog-description",className:rs("text-muted-foreground text-sm",n),...e})}function K2({className:n,...e}){return G.jsx(t2,{className:rs(ZI(),n),...e})}function Q2({className:n,...e}){return G.jsx(n2,{className:rs(ZI({variant:"outline"}),n),...e})}const B_="marcoPlayerName";function Y2(){var ot;const[n,e]=L.useState("menu"),[t,i]=L.useState(null),[o,l]=L.useState(null),[c,f]=L.useState([]),[m,y]=L.useState(""),[_,E]=L.useState(""),[I,D]=L.useState(!1),[W,M]=L.useState(!1),[z,Z]=L.useState(!1),[ne,ie]=L.useState(null),[ue,ve]=L.useState(null),[we,R]=L.useState(null),[S,C]=L.useState(!1),[b,x]=L.useState(null),V=L.useRef(null),k=L.useMemo(()=>/[a-z0-9]/i.test(m),[m]),He=I&&k&&W&&!S,Ye=(ot=Sl.currentUser)==null?void 0:ot.uid,Ve=c.find(oe=>oe.id===Ye)??null,je=(Ve==null?void 0:Ve.isReady)===!0,q=c.length>=4&&c.every(oe=>oe.isReady===!0),ye=Math.max(2,Math.ceil((c.length-1)/2));L.useEffect(()=>{const oe=localStorage.getItem(B_);oe&&(y(oe),E(oe),D(!0))},[]),L.useEffect(()=>{let oe=!0;return E_().then(async()=>{if(!oe)return;M(!0);const Ge=await Xb();Ge&&(i(Ge),e("lobby"))}).catch(Ge=>{oe&&(M(!1),R(Ge.message))}),()=>{oe=!1}},[]),L.useEffect(()=>{if(!W||!I||!_)return;let oe=!0;return T_(_).catch(Ge=>{oe&&R(Ge.message)}),()=>{oe=!1}},[W,I,_]),L.useEffect(()=>{if(!t){l(null),f([]);return}const oe=Zb(t,Jt=>{l(Jt),Jt||(i(null),e("menu"))}),Ge=eN(t,f);return()=>{oe(),Ge()}},[t]),L.useEffect(()=>{if(!t)return;let oe=!0;const Ge=async()=>{try{await tN(t)}catch{if(!oe)return}};Ge();const Jt=window.setInterval(Ge,3e4);return()=>{oe=!1,window.clearInterval(Jt)}},[t]),L.useEffect(()=>{(o==null?void 0:o.state)==="playing"&&n==="lobby"&&e("photo-select")},[o==null?void 0:o.state,n]),L.useEffect(()=>{if(!t||n!=="lobby"||(o==null?void 0:o.state)!=="waiting"||!q||S)return;let oe=!1;return(async()=>{try{await aN(t)}catch(Jt){oe||R(Jt.message)}})(),()=>{oe=!0}},[t,o==null?void 0:o.state,n,q,S]);const se=async()=>{if(R(null),!k){R("Name must contain at least one letter or number.");return}const oe=m.trim();if(!oe){R("Name cannot be empty.");return}C(!0);try{await E_(),await T_(oe),E(oe),D(!0),localStorage.setItem(B_,oe)}catch(Ge){R(Ge.message)}finally{C(!1)}},O=async()=>{R(null),C(!0);try{const oe=await nN(_);i(oe.roomId),e("lobby")}catch(oe){R(oe.message)}finally{C(!1)}},Q=async()=>{if(t){R(null),C(!0);try{await sN(t,!je)}catch(oe){R(oe.message)}finally{C(!1)}}},he=(o==null?void 0:o.photosPerPlayer)??qT(c.length).photosPerPlayer,_e=()=>{var oe;ie(null),(oe=V.current)==null||oe.click()},be=oe=>{const Ge=oe.target.files;if(!(!Ge||Ge.length===0)){if(Ge.length!==he){ie(`Please select exactly ${he} photo${he!==1?"s":""}. You selected ${Ge.length}.`),oe.target.value="";return}ie(null),Z(!0)}},Ne=async()=>{if(!(!t||!window.confirm("Leave the room? You can rejoin later."))){R(null),C(!0);try{await rN(t),ve(null),Z(!1),i(null),e("menu")}catch(Ge){R(Ge.message)}finally{C(!1)}}},Ae=()=>{Ve!=null&&Ve.role&&(ve(Ve.role),e("role-reveal"))},Oe=oe=>{!t||oe.id===Ye||x(oe)},Be=async()=>{if(!(!t||!b)){R(null),C(!0);try{const oe=await iN(t,b.id);x(null),oe.kicked||R(`${b.name} has ${oe.voteCount}/${oe.votesNeeded} votes.`)}catch(oe){R(oe.message)}finally{C(!1)}}};return G.jsxs("div",{className:"min-h-screen w-full flex items-center justify-center px-4 py-10 sm:px-8",children:[G.jsxs("div",{className:"w-full max-w-5xl text-center",children:[n==="menu"&&G.jsxs("div",{className:"space-y-6 sm:space-y-8",children:[G.jsx("img",{src:yS,alt:"Marco Photo",className:"w-full h-auto max-w-4xl mx-auto mb-6 sm:mb-8"}),G.jsx("p",{className:"text-base sm:text-lg lg:text-2xl mb-6 sm:mb-8",children:"Get ready for a fun game!"}),G.jsxs("div",{className:"flex flex-col items-center gap-3 sm:gap-4",children:[G.jsxs("div",{className:"w-full max-w-sm space-y-3",children:[G.jsx("input",{type:"text",value:m,onChange:oe=>{y(oe.target.value),D(!1)},placeholder:"Enter your name",className:"border-2 border-gray-300 p-2 w-full text-center rounded-full"}),G.jsx(Pi,{onClick:se,disabled:!k||S,children:I?"Name Saved":"Save Name"})]}),G.jsx("div",{className:"flex flex-col gap-3 sm:gap-4 items-center",children:G.jsx(Pi,{onClick:O,disabled:!He,children:"Join Game"})}),G.jsx("p",{className:"text-sm text-gray-500",children:"One shared lobby, up to 19 players."}),!k&&m.length>0&&G.jsx("p",{className:"text-sm text-red-500",children:"Name must contain at least one letter or number."}),!W&&G.jsx("p",{className:"text-sm text-red-500",children:"Waiting for sign-in. If this persists, enable Anonymous Auth in Firebase."})]}),we&&G.jsx("p",{className:"text-sm text-red-500",children:we})]}),n==="lobby"&&G.jsxs("div",{className:"space-y-6 sm:space-y-8",children:[G.jsx("h1",{className:"text-3xl sm:text-4xl lg:text-5xl",children:"Game Lobby"}),G.jsxs("div",{className:"bg-white rounded-3xl p-6 sm:p-8 mb-6 shadow-lg",children:[G.jsx("p",{className:"text-base sm:text-lg lg:text-xl mb-2",children:"Room:"}),G.jsx("p",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-500 break-all",children:"Main Lobby"}),G.jsxs("p",{className:"text-sm text-gray-500 mt-2",children:[c.length,"/19 players joined"]})]}),G.jsxs("div",{className:"bg-white rounded-3xl p-6 sm:p-8 shadow-lg",children:[G.jsx("p",{className:"text-base sm:text-lg lg:text-xl mb-4",children:"Players"}),G.jsx("div",{className:"space-y-2",children:c.map(oe=>G.jsxs("div",{className:"flex items-center justify-between border-b last:border-b-0 pb-2",children:[G.jsxs("span",{className:"text-base sm:text-lg",children:[oe.name,oe.id===Ye?" (You)":""]}),G.jsxs("div",{className:"flex items-center gap-3",children:[oe.isReady&&G.jsx("span",{className:"text-xs uppercase tracking-wide text-green-600",children:"Ready"}),oe.id!==Ye&&G.jsx("button",{type:"button",onClick:()=>Oe(oe),disabled:S,className:"text-sm font-semibold text-red-600 hover:text-red-700 disabled:text-red-300",children:"Vote Kick"})]})]},oe.id))})]}),G.jsx("p",{className:"text-base sm:text-lg lg:text-xl",children:(o==null?void 0:o.state)==="playing"?"Game in progress.":c.length<4?`Waiting for players… ${c.length}/4 minimum to start.`:q?"Everyone is ready. Starting game...":"Waiting for everyone to ready up..."}),(o==null?void 0:o.state)!=="playing"&&G.jsx(Pi,{onClick:Q,disabled:S||!Ve,children:je?"Not Ready":"Ready"}),G.jsx(Pi,{onClick:Ne,disabled:S,children:"Leave Room"}),we&&G.jsx("p",{className:"text-sm text-red-500",children:we})]}),n==="photo-select"&&G.jsxs("div",{className:"space-y-6 sm:space-y-8",children:[G.jsx("h1",{className:"text-3xl sm:text-4xl lg:text-5xl mb-4",children:"Select Your Photos"}),G.jsx("p",{className:"text-base sm:text-lg lg:text-xl mb-8",children:z?"Photos selected! Reveal your role when you're all set.":`Choose exactly ${he} photo${he!==1?"s":""} from your camera roll or files.`}),G.jsx("input",{ref:V,type:"file",accept:"image/*",multiple:!0,className:"hidden",onChange:be}),G.jsxs("div",{className:"flex flex-col gap-4 items-center",children:[!z&&G.jsx(Pi,{onClick:_e,disabled:S,children:"Select Photos"}),ne&&G.jsx("p",{className:"text-sm text-red-500",children:ne}),z&&G.jsx(Pi,{onClick:Ae,disabled:S||!(Ve!=null&&Ve.role),children:"Reveal Role"}),G.jsx(Pi,{onClick:Ne,disabled:S,children:"Leave Room"})]})]}),n==="role-reveal"&&ue&&G.jsxs("div",{className:"space-y-6 sm:space-y-8",children:[G.jsx("h1",{className:"text-3xl sm:text-5xl lg:text-6xl mb-4",children:"Your Role"}),G.jsx("div",{className:`text-4xl sm:text-6xl lg:text-8xl p-6 sm:p-10 lg:p-12 rounded-3xl shadow-2xl ${ue==="Marco"?"bg-blue-500 text-white":"bg-white text-blue-500 border-4 border-blue-500"}`,children:ue==="Marco"?"🏊 Marco 🏊":"🧍 Reg 🧍"}),G.jsx("p",{className:"text-lg sm:text-2xl lg:text-3xl mt-6 sm:mt-8",children:ue==="Marco"?"You're the Marco! Time to hunt!":"You're a Reg. Stay hidden!"}),G.jsx(Pi,{onClick:Ne,disabled:S,children:"Leave Room"})]})]}),G.jsx(j2,{open:!!b,onOpenChange:oe=>{!oe&&!S&&x(null)},children:G.jsxs($2,{className:"rounded-3xl border-2 border-blue-200",children:[G.jsxs(W2,{children:[G.jsx(H2,{className:"text-2xl text-blue-600",children:"Vote Kick Player?"}),G.jsx(G2,{className:"text-base text-gray-600",children:b?`Vote to remove ${b.name} from the room? ${ye} votes needed right now.`:"Vote to remove this player from the room?"})]}),G.jsxs(q2,{children:[G.jsx(Q2,{disabled:S,children:"Cancel"}),G.jsx(K2,{onClick:Be,disabled:S,className:"bg-red-600 text-white hover:bg-red-700",children:S?"Submitting...":"Vote Kick"})]})]})})]})}pS.createRoot(document.getElementById("root")).render(G.jsx(Y2,{}));
