function nA(n,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in n)){const a=Object.getOwnPropertyDescriptor(r,o);a&&Object.defineProperty(n,o,a.get?a:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function Iw(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Tf={exports:{}},Nl={},If={exports:{}},Me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rv;function rA(){if(rv)return Me;rv=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),E=Symbol.iterator;function T(L){return L===null||typeof L!="object"?null:(L=E&&L[E]||L["@@iterator"],typeof L=="function"?L:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,V={};function U(L,Q,he){this.props=L,this.context=Q,this.refs=V,this.updater=he||O}U.prototype.isReactComponent={},U.prototype.setState=function(L,Q){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,Q,"setState")},U.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function Z(){}Z.prototype=U.prototype;function te(L,Q,he){this.props=L,this.context=Q,this.refs=V,this.updater=he||O}var se=te.prototype=new Z;se.constructor=te,q(se,U.prototype),se.isPureReactComponent=!0;var ie=Array.isArray,ge=Object.prototype.hasOwnProperty,ue={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function I(L,Q,he){var we,Pe={},De=null,Te=null;if(Q!=null)for(we in Q.ref!==void 0&&(Te=Q.ref),Q.key!==void 0&&(De=""+Q.key),Q)ge.call(Q,we)&&!R.hasOwnProperty(we)&&(Pe[we]=Q[we]);var Oe=arguments.length-2;if(Oe===1)Pe.children=he;else if(1<Oe){for(var Le=Array(Oe),ht=0;ht<Oe;ht++)Le[ht]=arguments[ht+2];Pe.children=Le}if(L&&L.defaultProps)for(we in Oe=L.defaultProps,Oe)Pe[we]===void 0&&(Pe[we]=Oe[we]);return{$$typeof:n,type:L,key:De,ref:Te,props:Pe,_owner:ue.current}}function C(L,Q){return{$$typeof:n,type:L.type,key:Q,ref:L.ref,props:L.props,_owner:L._owner}}function N(L){return typeof L=="object"&&L!==null&&L.$$typeof===n}function b(L){var Q={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(he){return Q[he]})}var F=/\/+/g;function P(L,Q){return typeof L=="object"&&L!==null&&L.key!=null?b(""+L.key):Q.toString(36)}function Ge(L,Q,he,we,Pe){var De=typeof L;(De==="undefined"||De==="boolean")&&(L=null);var Te=!1;if(L===null)Te=!0;else switch(De){case"string":case"number":Te=!0;break;case"object":switch(L.$$typeof){case n:case e:Te=!0}}if(Te)return Te=L,Pe=Pe(Te),L=we===""?"."+P(Te,0):we,ie(Pe)?(he="",L!=null&&(he=L.replace(F,"$&/")+"/"),Ge(Pe,Q,he,"",function(ht){return ht})):Pe!=null&&(N(Pe)&&(Pe=C(Pe,he+(!Pe.key||Te&&Te.key===Pe.key?"":(""+Pe.key).replace(F,"$&/")+"/")+L)),Q.push(Pe)),1;if(Te=0,we=we===""?".":we+":",ie(L))for(var Oe=0;Oe<L.length;Oe++){De=L[Oe];var Le=we+P(De,Oe);Te+=Ge(De,Q,he,Le,Pe)}else if(Le=T(L),typeof Le=="function")for(L=Le.call(L),Oe=0;!(De=L.next()).done;)De=De.value,Le=we+P(De,Oe++),Te+=Ge(De,Q,he,Le,Pe);else if(De==="object")throw Q=String(L),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return Te}function et(L,Q,he){if(L==null)return L;var we=[],Pe=0;return Ge(L,we,"","",function(De){return Q.call(he,De,Pe++)}),we}function Xe(L){if(L._status===-1){var Q=L._result;Q=Q(),Q.then(function(he){(L._status===0||L._status===-1)&&(L._status=1,L._result=he)},function(he){(L._status===0||L._status===-1)&&(L._status=2,L._result=he)}),L._status===-1&&(L._status=0,L._result=Q)}if(L._status===1)return L._result.default;throw L._result}var ze={current:null},G={transition:null},ye={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:G,ReactCurrentOwner:ue};function ae(){throw Error("act(...) is not supported in production builds of React.")}return Me.Children={map:et,forEach:function(L,Q,he){et(L,function(){Q.apply(this,arguments)},he)},count:function(L){var Q=0;return et(L,function(){Q++}),Q},toArray:function(L){return et(L,function(Q){return Q})||[]},only:function(L){if(!N(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},Me.Component=U,Me.Fragment=t,Me.Profiler=o,Me.PureComponent=te,Me.StrictMode=r,Me.Suspense=p,Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ye,Me.act=ae,Me.cloneElement=function(L,Q,he){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var we=q({},L.props),Pe=L.key,De=L.ref,Te=L._owner;if(Q!=null){if(Q.ref!==void 0&&(De=Q.ref,Te=ue.current),Q.key!==void 0&&(Pe=""+Q.key),L.type&&L.type.defaultProps)var Oe=L.type.defaultProps;for(Le in Q)ge.call(Q,Le)&&!R.hasOwnProperty(Le)&&(we[Le]=Q[Le]===void 0&&Oe!==void 0?Oe[Le]:Q[Le])}var Le=arguments.length-2;if(Le===1)we.children=he;else if(1<Le){Oe=Array(Le);for(var ht=0;ht<Le;ht++)Oe[ht]=arguments[ht+2];we.children=Oe}return{$$typeof:n,type:L.type,key:Pe,ref:De,props:we,_owner:Te}},Me.createContext=function(L){return L={$$typeof:u,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:a,_context:L},L.Consumer=L},Me.createElement=I,Me.createFactory=function(L){var Q=I.bind(null,L);return Q.type=L,Q},Me.createRef=function(){return{current:null}},Me.forwardRef=function(L){return{$$typeof:h,render:L}},Me.isValidElement=N,Me.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:Xe}},Me.memo=function(L,Q){return{$$typeof:y,type:L,compare:Q===void 0?null:Q}},Me.startTransition=function(L){var Q=G.transition;G.transition={};try{L()}finally{G.transition=Q}},Me.unstable_act=ae,Me.useCallback=function(L,Q){return ze.current.useCallback(L,Q)},Me.useContext=function(L){return ze.current.useContext(L)},Me.useDebugValue=function(){},Me.useDeferredValue=function(L){return ze.current.useDeferredValue(L)},Me.useEffect=function(L,Q){return ze.current.useEffect(L,Q)},Me.useId=function(){return ze.current.useId()},Me.useImperativeHandle=function(L,Q,he){return ze.current.useImperativeHandle(L,Q,he)},Me.useInsertionEffect=function(L,Q){return ze.current.useInsertionEffect(L,Q)},Me.useLayoutEffect=function(L,Q){return ze.current.useLayoutEffect(L,Q)},Me.useMemo=function(L,Q){return ze.current.useMemo(L,Q)},Me.useReducer=function(L,Q,he){return ze.current.useReducer(L,Q,he)},Me.useRef=function(L){return ze.current.useRef(L)},Me.useState=function(L){return ze.current.useState(L)},Me.useSyncExternalStore=function(L,Q,he){return ze.current.useSyncExternalStore(L,Q,he)},Me.useTransition=function(){return ze.current.useTransition()},Me.version="18.3.1",Me}var sv;function bp(){return sv||(sv=1,If.exports=rA()),If.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iv;function sA(){if(iv)return Nl;iv=1;var n=bp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(h,p,y){var _,E={},T=null,O=null;y!==void 0&&(T=""+y),p.key!==void 0&&(T=""+p.key),p.ref!==void 0&&(O=p.ref);for(_ in p)r.call(p,_)&&!a.hasOwnProperty(_)&&(E[_]=p[_]);if(h&&h.defaultProps)for(_ in p=h.defaultProps,p)E[_]===void 0&&(E[_]=p[_]);return{$$typeof:e,type:h,key:T,ref:O,props:E,_owner:o.current}}return Nl.Fragment=t,Nl.jsx=u,Nl.jsxs=u,Nl}var ov;function iA(){return ov||(ov=1,Tf.exports=sA()),Tf.exports}var A=iA(),Tc={},Sf={exports:{}},En={},Af={exports:{}},Rf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var av;function oA(){return av||(av=1,(function(n){function e(G,ye){var ae=G.length;G.push(ye);e:for(;0<ae;){var L=ae-1>>>1,Q=G[L];if(0<o(Q,ye))G[L]=ye,G[ae]=Q,ae=L;else break e}}function t(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var ye=G[0],ae=G.pop();if(ae!==ye){G[0]=ae;e:for(var L=0,Q=G.length,he=Q>>>1;L<he;){var we=2*(L+1)-1,Pe=G[we],De=we+1,Te=G[De];if(0>o(Pe,ae))De<Q&&0>o(Te,Pe)?(G[L]=Te,G[De]=ae,L=De):(G[L]=Pe,G[we]=ae,L=we);else if(De<Q&&0>o(Te,ae))G[L]=Te,G[De]=ae,L=De;else break e}}return ye}function o(G,ye){var ae=G.sortIndex-ye.sortIndex;return ae!==0?ae:G.id-ye.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var u=Date,h=u.now();n.unstable_now=function(){return u.now()-h}}var p=[],y=[],_=1,E=null,T=3,O=!1,q=!1,V=!1,U=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function se(G){for(var ye=t(y);ye!==null;){if(ye.callback===null)r(y);else if(ye.startTime<=G)r(y),ye.sortIndex=ye.expirationTime,e(p,ye);else break;ye=t(y)}}function ie(G){if(V=!1,se(G),!q)if(t(p)!==null)q=!0,Xe(ge);else{var ye=t(y);ye!==null&&ze(ie,ye.startTime-G)}}function ge(G,ye){q=!1,V&&(V=!1,Z(I),I=-1),O=!0;var ae=T;try{for(se(ye),E=t(p);E!==null&&(!(E.expirationTime>ye)||G&&!b());){var L=E.callback;if(typeof L=="function"){E.callback=null,T=E.priorityLevel;var Q=L(E.expirationTime<=ye);ye=n.unstable_now(),typeof Q=="function"?E.callback=Q:E===t(p)&&r(p),se(ye)}else r(p);E=t(p)}if(E!==null)var he=!0;else{var we=t(y);we!==null&&ze(ie,we.startTime-ye),he=!1}return he}finally{E=null,T=ae,O=!1}}var ue=!1,R=null,I=-1,C=5,N=-1;function b(){return!(n.unstable_now()-N<C)}function F(){if(R!==null){var G=n.unstable_now();N=G;var ye=!0;try{ye=R(!0,G)}finally{ye?P():(ue=!1,R=null)}}else ue=!1}var P;if(typeof te=="function")P=function(){te(F)};else if(typeof MessageChannel<"u"){var Ge=new MessageChannel,et=Ge.port2;Ge.port1.onmessage=F,P=function(){et.postMessage(null)}}else P=function(){U(F,0)};function Xe(G){R=G,ue||(ue=!0,P())}function ze(G,ye){I=U(function(){G(n.unstable_now())},ye)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(G){G.callback=null},n.unstable_continueExecution=function(){q||O||(q=!0,Xe(ge))},n.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<G?Math.floor(1e3/G):5},n.unstable_getCurrentPriorityLevel=function(){return T},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(G){switch(T){case 1:case 2:case 3:var ye=3;break;default:ye=T}var ae=T;T=ye;try{return G()}finally{T=ae}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(G,ye){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var ae=T;T=G;try{return ye()}finally{T=ae}},n.unstable_scheduleCallback=function(G,ye,ae){var L=n.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?L+ae:L):ae=L,G){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=ae+Q,G={id:_++,callback:ye,priorityLevel:G,startTime:ae,expirationTime:Q,sortIndex:-1},ae>L?(G.sortIndex=ae,e(y,G),t(p)===null&&G===t(y)&&(V?(Z(I),I=-1):V=!0,ze(ie,ae-L))):(G.sortIndex=Q,e(p,G),q||O||(q=!0,Xe(ge))),G},n.unstable_shouldYield=b,n.unstable_wrapCallback=function(G){var ye=T;return function(){var ae=T;T=ye;try{return G.apply(this,arguments)}finally{T=ae}}}})(Rf)),Rf}var lv;function aA(){return lv||(lv=1,Af.exports=oA()),Af.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uv;function lA(){if(uv)return En;uv=1;var n=bp(),e=aA();function t(s){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+s,l=1;l<arguments.length;l++)i+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+s+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function a(s,i){u(s,i),u(s+"Capture",i)}function u(s,i){for(o[s]=i,s=0;s<i.length;s++)r.add(i[s])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},E={};function T(s){return p.call(E,s)?!0:p.call(_,s)?!1:y.test(s)?E[s]=!0:(_[s]=!0,!1)}function O(s,i,l,d){if(l!==null&&l.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(s=s.toLowerCase().slice(0,5),s!=="data-"&&s!=="aria-");default:return!1}}function q(s,i,l,d){if(i===null||typeof i>"u"||O(s,i,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function V(s,i,l,d,f,m,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=d,this.attributeNamespace=f,this.mustUseProperty=l,this.propertyName=s,this.type=i,this.sanitizeURL=m,this.removeEmptyString=w}var U={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(s){U[s]=new V(s,0,!1,s,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(s){var i=s[0];U[i]=new V(i,1,!1,s[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(s){U[s]=new V(s,2,!1,s.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(s){U[s]=new V(s,2,!1,s,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(s){U[s]=new V(s,3,!1,s.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(s){U[s]=new V(s,3,!0,s,null,!1,!1)}),["capture","download"].forEach(function(s){U[s]=new V(s,4,!1,s,null,!1,!1)}),["cols","rows","size","span"].forEach(function(s){U[s]=new V(s,6,!1,s,null,!1,!1)}),["rowSpan","start"].forEach(function(s){U[s]=new V(s,5,!1,s.toLowerCase(),null,!1,!1)});var Z=/[\-:]([a-z])/g;function te(s){return s[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(s){var i=s.replace(Z,te);U[i]=new V(i,1,!1,s,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(s){var i=s.replace(Z,te);U[i]=new V(i,1,!1,s,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(s){var i=s.replace(Z,te);U[i]=new V(i,1,!1,s,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(s){U[s]=new V(s,1,!1,s.toLowerCase(),null,!1,!1)}),U.xlinkHref=new V("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(s){U[s]=new V(s,1,!1,s.toLowerCase(),null,!0,!0)});function se(s,i,l,d){var f=U.hasOwnProperty(i)?U[i]:null;(f!==null?f.type!==0:d||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(q(i,l,f,d)&&(l=null),d||f===null?T(i)&&(l===null?s.removeAttribute(i):s.setAttribute(i,""+l)):f.mustUseProperty?s[f.propertyName]=l===null?f.type===3?!1:"":l:(i=f.attributeName,d=f.attributeNamespace,l===null?s.removeAttribute(i):(f=f.type,l=f===3||f===4&&l===!0?"":""+l,d?s.setAttributeNS(d,i,l):s.setAttribute(i,l))))}var ie=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ge=Symbol.for("react.element"),ue=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),b=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),Ge=Symbol.for("react.suspense_list"),et=Symbol.for("react.memo"),Xe=Symbol.for("react.lazy"),ze=Symbol.for("react.offscreen"),G=Symbol.iterator;function ye(s){return s===null||typeof s!="object"?null:(s=G&&s[G]||s["@@iterator"],typeof s=="function"?s:null)}var ae=Object.assign,L;function Q(s){if(L===void 0)try{throw Error()}catch(l){var i=l.stack.trim().match(/\n( *(at )?)/);L=i&&i[1]||""}return`
`+L+s}var he=!1;function we(s,i){if(!s||he)return"";he=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(W){var d=W}Reflect.construct(s,[],i)}else{try{i.call()}catch(W){d=W}s.call(i.prototype)}else{try{throw Error()}catch(W){d=W}s()}}catch(W){if(W&&d&&typeof W.stack=="string"){for(var f=W.stack.split(`
`),m=d.stack.split(`
`),w=f.length-1,k=m.length-1;1<=w&&0<=k&&f[w]!==m[k];)k--;for(;1<=w&&0<=k;w--,k--)if(f[w]!==m[k]){if(w!==1||k!==1)do if(w--,k--,0>k||f[w]!==m[k]){var x=`
`+f[w].replace(" at new "," at ");return s.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",s.displayName)),x}while(1<=w&&0<=k);break}}}finally{he=!1,Error.prepareStackTrace=l}return(s=s?s.displayName||s.name:"")?Q(s):""}function Pe(s){switch(s.tag){case 5:return Q(s.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return s=we(s.type,!1),s;case 11:return s=we(s.type.render,!1),s;case 1:return s=we(s.type,!0),s;default:return""}}function De(s){if(s==null)return null;if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s;switch(s){case R:return"Fragment";case ue:return"Portal";case C:return"Profiler";case I:return"StrictMode";case P:return"Suspense";case Ge:return"SuspenseList"}if(typeof s=="object")switch(s.$$typeof){case b:return(s.displayName||"Context")+".Consumer";case N:return(s._context.displayName||"Context")+".Provider";case F:var i=s.render;return s=s.displayName,s||(s=i.displayName||i.name||"",s=s!==""?"ForwardRef("+s+")":"ForwardRef"),s;case et:return i=s.displayName||null,i!==null?i:De(s.type)||"Memo";case Xe:i=s._payload,s=s._init;try{return De(s(i))}catch{}}return null}function Te(s){var i=s.type;switch(s.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return s=i.render,s=s.displayName||s.name||"",i.displayName||(s!==""?"ForwardRef("+s+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(i);case 8:return i===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Oe(s){switch(typeof s){case"boolean":case"number":case"string":case"undefined":return s;case"object":return s;default:return""}}function Le(s){var i=s.type;return(s=s.nodeName)&&s.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ht(s){var i=Le(s)?"checked":"value",l=Object.getOwnPropertyDescriptor(s.constructor.prototype,i),d=""+s[i];if(!s.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,m=l.set;return Object.defineProperty(s,i,{configurable:!0,get:function(){return f.call(this)},set:function(w){d=""+w,m.call(this,w)}}),Object.defineProperty(s,i,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(w){d=""+w},stopTracking:function(){s._valueTracker=null,delete s[i]}}}}function zn(s){s._valueTracker||(s._valueTracker=ht(s))}function fn(s){if(!s)return!1;var i=s._valueTracker;if(!i)return!0;var l=i.getValue(),d="";return s&&(d=Le(s)?s.checked?"true":"false":s.value),s=d,s!==l?(i.setValue(s),!0):!1}function Sn(s){if(s=s||(typeof document<"u"?document:void 0),typeof s>"u")return null;try{return s.activeElement||s.body}catch{return s.body}}function wr(s,i){var l=i.checked;return ae({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??s._wrapperState.initialChecked})}function Vi(s,i){var l=i.defaultValue==null?"":i.defaultValue,d=i.checked!=null?i.checked:i.defaultChecked;l=Oe(i.value!=null?i.value:l),s._wrapperState={initialChecked:d,initialValue:l,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Bn(s,i){i=i.checked,i!=null&&se(s,"checked",i,!1)}function Er(s,i){Bn(s,i);var l=Oe(i.value),d=i.type;if(l!=null)d==="number"?(l===0&&s.value===""||s.value!=l)&&(s.value=""+l):s.value!==""+l&&(s.value=""+l);else if(d==="submit"||d==="reset"){s.removeAttribute("value");return}i.hasOwnProperty("value")?pt(s,i.type,l):i.hasOwnProperty("defaultValue")&&pt(s,i.type,Oe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(s.defaultChecked=!!i.defaultChecked)}function es(s,i,l){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var d=i.type;if(!(d!=="submit"&&d!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+s._wrapperState.initialValue,l||i===s.value||(s.value=i),s.defaultValue=i}l=s.name,l!==""&&(s.name=""),s.defaultChecked=!!s._wrapperState.initialChecked,l!==""&&(s.name=l)}function pt(s,i,l){(i!=="number"||Sn(s.ownerDocument)!==s)&&(l==null?s.defaultValue=""+s._wrapperState.initialValue:s.defaultValue!==""+l&&(s.defaultValue=""+l))}var rt=Array.isArray;function qe(s,i,l,d){if(s=s.options,i){i={};for(var f=0;f<l.length;f++)i["$"+l[f]]=!0;for(l=0;l<s.length;l++)f=i.hasOwnProperty("$"+s[l].value),s[l].selected!==f&&(s[l].selected=f),f&&d&&(s[l].defaultSelected=!0)}else{for(l=""+Oe(l),i=null,f=0;f<s.length;f++){if(s[f].value===l){s[f].selected=!0,d&&(s[f].defaultSelected=!0);return}i!==null||s[f].disabled||(i=s[f])}i!==null&&(i.selected=!0)}}function Ke(s,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},i,{value:void 0,defaultValue:void 0,children:""+s._wrapperState.initialValue})}function Ds(s,i){var l=i.value;if(l==null){if(l=i.children,i=i.defaultValue,l!=null){if(i!=null)throw Error(t(92));if(rt(l)){if(1<l.length)throw Error(t(93));l=l[0]}i=l}i==null&&(i=""),l=i}s._wrapperState={initialValue:Oe(l)}}function ts(s,i){var l=Oe(i.value),d=Oe(i.defaultValue);l!=null&&(l=""+l,l!==s.value&&(s.value=l),i.defaultValue==null&&s.defaultValue!==l&&(s.defaultValue=l)),d!=null&&(s.defaultValue=""+d)}function Tr(s){var i=s.textContent;i===s._wrapperState.initialValue&&i!==""&&i!==null&&(s.value=i)}function ns(s){switch(s){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Os(s,i){return s==null||s==="http://www.w3.org/1999/xhtml"?ns(i):s==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":s}var $n,Mi=(function(s){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,l,d,f){MSApp.execUnsafeLocalFunction(function(){return s(i,l,d,f)})}:s})(function(s,i){if(s.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in s)s.innerHTML=i;else{for($n=$n||document.createElement("div"),$n.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=$n.firstChild;s.firstChild;)s.removeChild(s.firstChild);for(;i.firstChild;)s.appendChild(i.firstChild)}});function nr(s,i){if(i){var l=s.firstChild;if(l&&l===s.lastChild&&l.nodeType===3){l.nodeValue=i;return}}s.textContent=i}var pn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vs=["Webkit","ms","Moz","O"];Object.keys(pn).forEach(function(s){Vs.forEach(function(i){i=i+s.charAt(0).toUpperCase()+s.substring(1),pn[i]=pn[s]})});function Ir(s,i,l){return i==null||typeof i=="boolean"||i===""?"":l||typeof i!="number"||i===0||pn.hasOwnProperty(s)&&pn[s]?(""+i).trim():i+"px"}function Ms(s,i){s=s.style;for(var l in i)if(i.hasOwnProperty(l)){var d=l.indexOf("--")===0,f=Ir(l,i[l],d);l==="float"&&(l="cssFloat"),d?s.setProperty(l,f):s[l]=f}}var Li=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rt(s,i){if(i){if(Li[s]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,s));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ls(s,i){if(s.indexOf("-")===-1)return typeof i.is=="string";switch(s){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sr=null;function Fs(s){return s=s.target||s.srcElement||window,s.correspondingUseElement&&(s=s.correspondingUseElement),s.nodeType===3?s.parentNode:s}var rr=null,sr=null,Je=null;function ir(s){if(s=yl(s)){if(typeof rr!="function")throw Error(t(280));var i=s.stateNode;i&&(i=Lu(i),rr(s.stateNode,s.type,i))}}function or(s){sr?Je?Je.push(s):Je=[s]:sr=s}function Ar(){if(sr){var s=sr,i=Je;if(Je=sr=null,ir(s),i)for(s=0;s<i.length;s++)ir(i[s])}}function xo(s,i){return s(i)}function bo(){}var Wn=!1;function No(s,i,l){if(Wn)return s(i,l);Wn=!0;try{return xo(s,i,l)}finally{Wn=!1,(sr!==null||Je!==null)&&(bo(),Ar())}}function rs(s,i){var l=s.stateNode;if(l===null)return null;var d=Lu(l);if(d===null)return null;l=d[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(s=s.type,d=!(s==="button"||s==="input"||s==="select"||s==="textarea")),s=!d;break e;default:s=!1}if(s)return null;if(l&&typeof l!="function")throw Error(t(231,i,typeof l));return l}var Rr=!1;if(h)try{var Cr={};Object.defineProperty(Cr,"passive",{get:function(){Rr=!0}}),window.addEventListener("test",Cr,Cr),window.removeEventListener("test",Cr,Cr)}catch{Rr=!1}function kr(s,i,l,d,f,m,w,k,x){var W=Array.prototype.slice.call(arguments,3);try{i.apply(l,W)}catch(J){this.onError(J)}}var qn=!1,mt=null,ss=!1,on=null,Fi={onError:function(s){qn=!0,mt=s}};function Ui(s,i,l,d,f,m,w,k,x){qn=!1,mt=null,kr.apply(Fi,arguments)}function Us(s,i,l,d,f,m,w,k,x){if(Ui.apply(this,arguments),qn){if(qn){var W=mt;qn=!1,mt=null}else throw Error(t(198));ss||(ss=!0,on=W)}}function mn(s){var i=s,l=s;if(s.alternate)for(;i.return;)i=i.return;else{s=i;do i=s,(i.flags&4098)!==0&&(l=i.return),s=i.return;while(s)}return i.tag===3?l:null}function $(s){if(s.tag===13){var i=s.memoizedState;if(i===null&&(s=s.alternate,s!==null&&(i=s.memoizedState)),i!==null)return i.dehydrated}return null}function Ne(s){if(mn(s)!==s)throw Error(t(188))}function Dt(s){var i=s.alternate;if(!i){if(i=mn(s),i===null)throw Error(t(188));return i!==s?null:s}for(var l=s,d=i;;){var f=l.return;if(f===null)break;var m=f.alternate;if(m===null){if(d=f.return,d!==null){l=d;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===l)return Ne(f),s;if(m===d)return Ne(f),i;m=m.sibling}throw Error(t(188))}if(l.return!==d.return)l=f,d=m;else{for(var w=!1,k=f.child;k;){if(k===l){w=!0,l=f,d=m;break}if(k===d){w=!0,d=f,l=m;break}k=k.sibling}if(!w){for(k=m.child;k;){if(k===l){w=!0,l=m,d=f;break}if(k===d){w=!0,d=m,l=f;break}k=k.sibling}if(!w)throw Error(t(189))}}if(l.alternate!==d)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?s:i}function _u(s){return s=Dt(s),s!==null?ji(s):null}function ji(s){if(s.tag===5||s.tag===6)return s;for(s=s.child;s!==null;){var i=ji(s);if(i!==null)return i;s=s.sibling}return null}var Ga=e.unstable_scheduleCallback,Do=e.unstable_cancelCallback,zi=e.unstable_shouldYield,is=e.unstable_requestPaint,at=e.unstable_now,Jd=e.unstable_getCurrentPriorityLevel,Oo=e.unstable_ImmediatePriority,Ka=e.unstable_UserBlockingPriority,Bi=e.unstable_NormalPriority,Qa=e.unstable_LowPriority,Vo=e.unstable_IdlePriority,$i=null,An=null;function wu(s){if(An&&typeof An.onCommitFiberRoot=="function")try{An.onCommitFiberRoot($i,s,void 0,(s.current.flags&128)===128)}catch{}}var Rn=Math.clz32?Math.clz32:Wi,Pr=Math.log,Hn=Math.LN2;function Wi(s){return s>>>=0,s===0?32:31-(Pr(s)/Hn|0)|0}var xr=64,js=4194304;function Ze(s){switch(s&-s){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return s&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return s}}function os(s,i){var l=s.pendingLanes;if(l===0)return 0;var d=0,f=s.suspendedLanes,m=s.pingedLanes,w=l&268435455;if(w!==0){var k=w&~f;k!==0?d=Ze(k):(m&=w,m!==0&&(d=Ze(m)))}else w=l&~f,w!==0?d=Ze(w):m!==0&&(d=Ze(m));if(d===0)return 0;if(i!==0&&i!==d&&(i&f)===0&&(f=d&-d,m=i&-i,f>=m||f===16&&(m&4194240)!==0))return i;if((d&4)!==0&&(d|=l&16),i=s.entangledLanes,i!==0)for(s=s.entanglements,i&=d;0<i;)l=31-Rn(i),f=1<<l,d|=s[l],i&=~f;return d}function qi(s,i){switch(s){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hi(s,i){for(var l=s.suspendedLanes,d=s.pingedLanes,f=s.expirationTimes,m=s.pendingLanes;0<m;){var w=31-Rn(m),k=1<<w,x=f[w];x===-1?((k&l)===0||(k&d)!==0)&&(f[w]=qi(k,i)):x<=i&&(s.expiredLanes|=k),m&=~k}}function Ya(s){return s=s.pendingLanes&-1073741825,s!==0?s:s&1073741824?1073741824:0}function Xa(){var s=xr;return xr<<=1,(xr&4194240)===0&&(xr=64),s}function Ja(s){for(var i=[],l=0;31>l;l++)i.push(s);return i}function Gi(s,i,l){s.pendingLanes|=i,i!==536870912&&(s.suspendedLanes=0,s.pingedLanes=0),s=s.eventTimes,i=31-Rn(i),s[i]=l}function Zd(s,i){var l=s.pendingLanes&~i;s.pendingLanes=i,s.suspendedLanes=0,s.pingedLanes=0,s.expiredLanes&=i,s.mutableReadLanes&=i,s.entangledLanes&=i,i=s.entanglements;var d=s.eventTimes;for(s=s.expirationTimes;0<l;){var f=31-Rn(l),m=1<<f;i[f]=0,d[f]=-1,s[f]=-1,l&=~m}}function Za(s,i){var l=s.entangledLanes|=i;for(s=s.entanglements;l;){var d=31-Rn(l),f=1<<d;f&i|s[d]&i&&(s[d]|=i),l&=~f}}var Be=0;function br(s){return s&=-s,1<s?4<s?(s&268435455)!==0?16:536870912:4:1}var el,Mo,tl,nl,rl,Nr=!1,Lo=[],Dr=null,Or=null,Wt=null,Ki=new Map,as=new Map,Cn=[],Eu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zs(s,i){switch(s){case"focusin":case"focusout":Dr=null;break;case"dragenter":case"dragleave":Or=null;break;case"mouseover":case"mouseout":Wt=null;break;case"pointerover":case"pointerout":Ki.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":as.delete(i.pointerId)}}function ar(s,i,l,d,f,m){return s===null||s.nativeEvent!==m?(s={blockedOn:i,domEventName:l,eventSystemFlags:d,nativeEvent:m,targetContainers:[f]},i!==null&&(i=yl(i),i!==null&&Mo(i)),s):(s.eventSystemFlags|=d,i=s.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),s)}function Tu(s,i,l,d,f){switch(i){case"focusin":return Dr=ar(Dr,s,i,l,d,f),!0;case"dragenter":return Or=ar(Or,s,i,l,d,f),!0;case"mouseover":return Wt=ar(Wt,s,i,l,d,f),!0;case"pointerover":var m=f.pointerId;return Ki.set(m,ar(Ki.get(m)||null,s,i,l,d,f)),!0;case"gotpointercapture":return m=f.pointerId,as.set(m,ar(as.get(m)||null,s,i,l,d,f)),!0}return!1}function Fo(s){var i=Ji(s.target);if(i!==null){var l=mn(i);if(l!==null){if(i=l.tag,i===13){if(i=$(l),i!==null){s.blockedOn=i,rl(s.priority,function(){tl(l)});return}}else if(i===3&&l.stateNode.current.memoizedState.isDehydrated){s.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}s.blockedOn=null}function st(s){if(s.blockedOn!==null)return!1;for(var i=s.targetContainers;0<i.length;){var l=Uo(s.domEventName,s.eventSystemFlags,i[0],s.nativeEvent);if(l===null){l=s.nativeEvent;var d=new l.constructor(l.type,l);Sr=d,l.target.dispatchEvent(d),Sr=null}else return i=yl(l),i!==null&&Mo(i),s.blockedOn=l,!1;i.shift()}return!0}function Iu(s,i,l){st(s)&&l.delete(i)}function eh(){Nr=!1,Dr!==null&&st(Dr)&&(Dr=null),Or!==null&&st(Or)&&(Or=null),Wt!==null&&st(Wt)&&(Wt=null),Ki.forEach(Iu),as.forEach(Iu)}function Bs(s,i){s.blockedOn===i&&(s.blockedOn=null,Nr||(Nr=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,eh)))}function $s(s){function i(f){return Bs(f,s)}if(0<Lo.length){Bs(Lo[0],s);for(var l=1;l<Lo.length;l++){var d=Lo[l];d.blockedOn===s&&(d.blockedOn=null)}}for(Dr!==null&&Bs(Dr,s),Or!==null&&Bs(Or,s),Wt!==null&&Bs(Wt,s),Ki.forEach(i),as.forEach(i),l=0;l<Cn.length;l++)d=Cn[l],d.blockedOn===s&&(d.blockedOn=null);for(;0<Cn.length&&(l=Cn[0],l.blockedOn===null);)Fo(l),l.blockedOn===null&&Cn.shift()}var ls=ie.ReactCurrentBatchConfig,us=!0;function Vr(s,i,l,d){var f=Be,m=ls.transition;ls.transition=null;try{Be=1,sl(s,i,l,d)}finally{Be=f,ls.transition=m}}function Su(s,i,l,d){var f=Be,m=ls.transition;ls.transition=null;try{Be=4,sl(s,i,l,d)}finally{Be=f,ls.transition=m}}function sl(s,i,l,d){if(us){var f=Uo(s,i,l,d);if(f===null)dh(s,i,d,Mr,l),zs(s,d);else if(Tu(f,s,i,l,d))d.stopPropagation();else if(zs(s,d),i&4&&-1<Eu.indexOf(s)){for(;f!==null;){var m=yl(f);if(m!==null&&el(m),m=Uo(s,i,l,d),m===null&&dh(s,i,d,Mr,l),m===f)break;f=m}f!==null&&d.stopPropagation()}else dh(s,i,d,null,l)}}var Mr=null;function Uo(s,i,l,d){if(Mr=null,s=Fs(d),s=Ji(s),s!==null)if(i=mn(s),i===null)s=null;else if(l=i.tag,l===13){if(s=$(i),s!==null)return s;s=null}else if(l===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;s=null}else i!==s&&(s=null);return Mr=s,null}function jo(s){switch(s){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jd()){case Oo:return 1;case Ka:return 4;case Bi:case Qa:return 16;case Vo:return 536870912;default:return 16}default:return 16}}var kn=null,zo=null,cs=null;function Au(){if(cs)return cs;var s,i=zo,l=i.length,d,f="value"in kn?kn.value:kn.textContent,m=f.length;for(s=0;s<l&&i[s]===f[s];s++);var w=l-s;for(d=1;d<=w&&i[l-d]===f[m-d];d++);return cs=f.slice(s,1<d?1-d:void 0)}function Qi(s){var i=s.keyCode;return"charCode"in s?(s=s.charCode,s===0&&i===13&&(s=13)):s=i,s===10&&(s=13),32<=s||s===13?s:0}function Lr(){return!0}function il(){return!1}function Xt(s){function i(l,d,f,m,w){this._reactName=l,this._targetInst=f,this.type=d,this.nativeEvent=m,this.target=w,this.currentTarget=null;for(var k in s)s.hasOwnProperty(k)&&(l=s[k],this[k]=l?l(m):m[k]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Lr:il,this.isPropagationStopped=il,this}return ae(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Lr)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Lr)},persist:function(){},isPersistent:Lr}),i}var Fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(s){return s.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yi=Xt(Fr),Ws=ae({},Fr,{view:0,detail:0}),Bo=Xt(Ws),$o,Wo,Pn,Xi=ae({},Ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:be,button:0,buttons:0,relatedTarget:function(s){return s.relatedTarget===void 0?s.fromElement===s.srcElement?s.toElement:s.fromElement:s.relatedTarget},movementX:function(s){return"movementX"in s?s.movementX:(s!==Pn&&(Pn&&s.type==="mousemove"?($o=s.screenX-Pn.screenX,Wo=s.screenY-Pn.screenY):Wo=$o=0,Pn=s),$o)},movementY:function(s){return"movementY"in s?s.movementY:Wo}}),ol=Xt(Xi),Ru=ae({},Xi,{dataTransfer:0}),Cu=Xt(Ru),qo=ae({},Ws,{relatedTarget:0}),qt=Xt(qo),ku=ae({},Fr,{animationName:0,elapsedTime:0,pseudoElement:0}),Pu=Xt(ku),qs=ae({},Fr,{clipboardData:function(s){return"clipboardData"in s?s.clipboardData:window.clipboardData}}),c=Xt(qs),g=ae({},Fr,{data:0}),v=Xt(g),S={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},z={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},H={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function re(s){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(s):(s=H[s])?!!i[s]:!1}function be(){return re}var It=ae({},Ws,{key:function(s){if(s.key){var i=S[s.key]||s.key;if(i!=="Unidentified")return i}return s.type==="keypress"?(s=Qi(s),s===13?"Enter":String.fromCharCode(s)):s.type==="keydown"||s.type==="keyup"?z[s.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:be,charCode:function(s){return s.type==="keypress"?Qi(s):0},keyCode:function(s){return s.type==="keydown"||s.type==="keyup"?s.keyCode:0},which:function(s){return s.type==="keypress"?Qi(s):s.type==="keydown"||s.type==="keyup"?s.keyCode:0}}),tt=Xt(It),Ct=ae({},Xi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xn=Xt(Ct),ds=ae({},Ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:be}),Ur=Xt(ds),jr=ae({},Fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ho=Xt(jr),al=ae({},Xi,{deltaX:function(s){return"deltaX"in s?s.deltaX:"wheelDeltaX"in s?-s.wheelDeltaX:0},deltaY:function(s){return"deltaY"in s?s.deltaY:"wheelDeltaY"in s?-s.wheelDeltaY:"wheelDelta"in s?-s.wheelDelta:0},deltaZ:0,deltaMode:0}),YI=Xt(al),XI=[9,13,27,32],th=h&&"CompositionEvent"in window,ll=null;h&&"documentMode"in document&&(ll=document.documentMode);var JI=h&&"TextEvent"in window&&!ll,Qm=h&&(!th||ll&&8<ll&&11>=ll),Ym=" ",Xm=!1;function Jm(s,i){switch(s){case"keyup":return XI.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zm(s){return s=s.detail,typeof s=="object"&&"data"in s?s.data:null}var Go=!1;function ZI(s,i){switch(s){case"compositionend":return Zm(i);case"keypress":return i.which!==32?null:(Xm=!0,Ym);case"textInput":return s=i.data,s===Ym&&Xm?null:s;default:return null}}function eS(s,i){if(Go)return s==="compositionend"||!th&&Jm(s,i)?(s=Au(),cs=zo=kn=null,Go=!1,s):null;switch(s){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Qm&&i.locale!=="ko"?null:i.data;default:return null}}var tS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eg(s){var i=s&&s.nodeName&&s.nodeName.toLowerCase();return i==="input"?!!tS[s.type]:i==="textarea"}function tg(s,i,l,d){or(d),i=Ou(i,"onChange"),0<i.length&&(l=new Yi("onChange","change",null,l,d),s.push({event:l,listeners:i}))}var ul=null,cl=null;function nS(s){_g(s,0)}function xu(s){var i=Jo(s);if(fn(i))return s}function rS(s,i){if(s==="change")return i}var ng=!1;if(h){var nh;if(h){var rh="oninput"in document;if(!rh){var rg=document.createElement("div");rg.setAttribute("oninput","return;"),rh=typeof rg.oninput=="function"}nh=rh}else nh=!1;ng=nh&&(!document.documentMode||9<document.documentMode)}function sg(){ul&&(ul.detachEvent("onpropertychange",ig),cl=ul=null)}function ig(s){if(s.propertyName==="value"&&xu(cl)){var i=[];tg(i,cl,s,Fs(s)),No(nS,i)}}function sS(s,i,l){s==="focusin"?(sg(),ul=i,cl=l,ul.attachEvent("onpropertychange",ig)):s==="focusout"&&sg()}function iS(s){if(s==="selectionchange"||s==="keyup"||s==="keydown")return xu(cl)}function oS(s,i){if(s==="click")return xu(i)}function aS(s,i){if(s==="input"||s==="change")return xu(i)}function lS(s,i){return s===i&&(s!==0||1/s===1/i)||s!==s&&i!==i}var lr=typeof Object.is=="function"?Object.is:lS;function dl(s,i){if(lr(s,i))return!0;if(typeof s!="object"||s===null||typeof i!="object"||i===null)return!1;var l=Object.keys(s),d=Object.keys(i);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var f=l[d];if(!p.call(i,f)||!lr(s[f],i[f]))return!1}return!0}function og(s){for(;s&&s.firstChild;)s=s.firstChild;return s}function ag(s,i){var l=og(s);s=0;for(var d;l;){if(l.nodeType===3){if(d=s+l.textContent.length,s<=i&&d>=i)return{node:l,offset:i-s};s=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=og(l)}}function lg(s,i){return s&&i?s===i?!0:s&&s.nodeType===3?!1:i&&i.nodeType===3?lg(s,i.parentNode):"contains"in s?s.contains(i):s.compareDocumentPosition?!!(s.compareDocumentPosition(i)&16):!1:!1}function ug(){for(var s=window,i=Sn();i instanceof s.HTMLIFrameElement;){try{var l=typeof i.contentWindow.location.href=="string"}catch{l=!1}if(l)s=i.contentWindow;else break;i=Sn(s.document)}return i}function sh(s){var i=s&&s.nodeName&&s.nodeName.toLowerCase();return i&&(i==="input"&&(s.type==="text"||s.type==="search"||s.type==="tel"||s.type==="url"||s.type==="password")||i==="textarea"||s.contentEditable==="true")}function uS(s){var i=ug(),l=s.focusedElem,d=s.selectionRange;if(i!==l&&l&&l.ownerDocument&&lg(l.ownerDocument.documentElement,l)){if(d!==null&&sh(l)){if(i=d.start,s=d.end,s===void 0&&(s=i),"selectionStart"in l)l.selectionStart=i,l.selectionEnd=Math.min(s,l.value.length);else if(s=(i=l.ownerDocument||document)&&i.defaultView||window,s.getSelection){s=s.getSelection();var f=l.textContent.length,m=Math.min(d.start,f);d=d.end===void 0?m:Math.min(d.end,f),!s.extend&&m>d&&(f=d,d=m,m=f),f=ag(l,m);var w=ag(l,d);f&&w&&(s.rangeCount!==1||s.anchorNode!==f.node||s.anchorOffset!==f.offset||s.focusNode!==w.node||s.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),s.removeAllRanges(),m>d?(s.addRange(i),s.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),s.addRange(i)))}}for(i=[],s=l;s=s.parentNode;)s.nodeType===1&&i.push({element:s,left:s.scrollLeft,top:s.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<i.length;l++)s=i[l],s.element.scrollLeft=s.left,s.element.scrollTop=s.top}}var cS=h&&"documentMode"in document&&11>=document.documentMode,Ko=null,ih=null,hl=null,oh=!1;function cg(s,i,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;oh||Ko==null||Ko!==Sn(d)||(d=Ko,"selectionStart"in d&&sh(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),hl&&dl(hl,d)||(hl=d,d=Ou(ih,"onSelect"),0<d.length&&(i=new Yi("onSelect","select",null,i,l),s.push({event:i,listeners:d}),i.target=Ko)))}function bu(s,i){var l={};return l[s.toLowerCase()]=i.toLowerCase(),l["Webkit"+s]="webkit"+i,l["Moz"+s]="moz"+i,l}var Qo={animationend:bu("Animation","AnimationEnd"),animationiteration:bu("Animation","AnimationIteration"),animationstart:bu("Animation","AnimationStart"),transitionend:bu("Transition","TransitionEnd")},ah={},dg={};h&&(dg=document.createElement("div").style,"AnimationEvent"in window||(delete Qo.animationend.animation,delete Qo.animationiteration.animation,delete Qo.animationstart.animation),"TransitionEvent"in window||delete Qo.transitionend.transition);function Nu(s){if(ah[s])return ah[s];if(!Qo[s])return s;var i=Qo[s],l;for(l in i)if(i.hasOwnProperty(l)&&l in dg)return ah[s]=i[l];return s}var hg=Nu("animationend"),fg=Nu("animationiteration"),pg=Nu("animationstart"),mg=Nu("transitionend"),gg=new Map,yg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hs(s,i){gg.set(s,i),a(i,[s])}for(var lh=0;lh<yg.length;lh++){var uh=yg[lh],dS=uh.toLowerCase(),hS=uh[0].toUpperCase()+uh.slice(1);Hs(dS,"on"+hS)}Hs(hg,"onAnimationEnd"),Hs(fg,"onAnimationIteration"),Hs(pg,"onAnimationStart"),Hs("dblclick","onDoubleClick"),Hs("focusin","onFocus"),Hs("focusout","onBlur"),Hs(mg,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fS=new Set("cancel close invalid load scroll toggle".split(" ").concat(fl));function vg(s,i,l){var d=s.type||"unknown-event";s.currentTarget=l,Us(d,i,void 0,s),s.currentTarget=null}function _g(s,i){i=(i&4)!==0;for(var l=0;l<s.length;l++){var d=s[l],f=d.event;d=d.listeners;e:{var m=void 0;if(i)for(var w=d.length-1;0<=w;w--){var k=d[w],x=k.instance,W=k.currentTarget;if(k=k.listener,x!==m&&f.isPropagationStopped())break e;vg(f,k,W),m=x}else for(w=0;w<d.length;w++){if(k=d[w],x=k.instance,W=k.currentTarget,k=k.listener,x!==m&&f.isPropagationStopped())break e;vg(f,k,W),m=x}}}if(ss)throw s=on,ss=!1,on=null,s}function lt(s,i){var l=i[yh];l===void 0&&(l=i[yh]=new Set);var d=s+"__bubble";l.has(d)||(wg(i,s,2,!1),l.add(d))}function ch(s,i,l){var d=0;i&&(d|=4),wg(l,s,d,i)}var Du="_reactListening"+Math.random().toString(36).slice(2);function pl(s){if(!s[Du]){s[Du]=!0,r.forEach(function(l){l!=="selectionchange"&&(fS.has(l)||ch(l,!1,s),ch(l,!0,s))});var i=s.nodeType===9?s:s.ownerDocument;i===null||i[Du]||(i[Du]=!0,ch("selectionchange",!1,i))}}function wg(s,i,l,d){switch(jo(i)){case 1:var f=Vr;break;case 4:f=Su;break;default:f=sl}l=f.bind(null,i,l,s),f=void 0,!Rr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),d?f!==void 0?s.addEventListener(i,l,{capture:!0,passive:f}):s.addEventListener(i,l,!0):f!==void 0?s.addEventListener(i,l,{passive:f}):s.addEventListener(i,l,!1)}function dh(s,i,l,d,f){var m=d;if((i&1)===0&&(i&2)===0&&d!==null)e:for(;;){if(d===null)return;var w=d.tag;if(w===3||w===4){var k=d.stateNode.containerInfo;if(k===f||k.nodeType===8&&k.parentNode===f)break;if(w===4)for(w=d.return;w!==null;){var x=w.tag;if((x===3||x===4)&&(x=w.stateNode.containerInfo,x===f||x.nodeType===8&&x.parentNode===f))return;w=w.return}for(;k!==null;){if(w=Ji(k),w===null)return;if(x=w.tag,x===5||x===6){d=m=w;continue e}k=k.parentNode}}d=d.return}No(function(){var W=m,J=Fs(l),ee=[];e:{var X=gg.get(s);if(X!==void 0){var le=Yi,fe=s;switch(s){case"keypress":if(Qi(l)===0)break e;case"keydown":case"keyup":le=tt;break;case"focusin":fe="focus",le=qt;break;case"focusout":fe="blur",le=qt;break;case"beforeblur":case"afterblur":le=qt;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=ol;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=Cu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=Ur;break;case hg:case fg:case pg:le=Pu;break;case mg:le=Ho;break;case"scroll":le=Bo;break;case"wheel":le=YI;break;case"copy":case"cut":case"paste":le=c;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=xn}var ve=(i&4)!==0,St=!ve&&s==="scroll",j=ve?X!==null?X+"Capture":null:X;ve=[];for(var D=W,B;D!==null;){B=D;var ne=B.stateNode;if(B.tag===5&&ne!==null&&(B=ne,j!==null&&(ne=rs(D,j),ne!=null&&ve.push(ml(D,ne,B)))),St)break;D=D.return}0<ve.length&&(X=new le(X,fe,null,l,J),ee.push({event:X,listeners:ve}))}}if((i&7)===0){e:{if(X=s==="mouseover"||s==="pointerover",le=s==="mouseout"||s==="pointerout",X&&l!==Sr&&(fe=l.relatedTarget||l.fromElement)&&(Ji(fe)||fe[hs]))break e;if((le||X)&&(X=J.window===J?J:(X=J.ownerDocument)?X.defaultView||X.parentWindow:window,le?(fe=l.relatedTarget||l.toElement,le=W,fe=fe?Ji(fe):null,fe!==null&&(St=mn(fe),fe!==St||fe.tag!==5&&fe.tag!==6)&&(fe=null)):(le=null,fe=W),le!==fe)){if(ve=ol,ne="onMouseLeave",j="onMouseEnter",D="mouse",(s==="pointerout"||s==="pointerover")&&(ve=xn,ne="onPointerLeave",j="onPointerEnter",D="pointer"),St=le==null?X:Jo(le),B=fe==null?X:Jo(fe),X=new ve(ne,D+"leave",le,l,J),X.target=St,X.relatedTarget=B,ne=null,Ji(J)===W&&(ve=new ve(j,D+"enter",fe,l,J),ve.target=B,ve.relatedTarget=St,ne=ve),St=ne,le&&fe)t:{for(ve=le,j=fe,D=0,B=ve;B;B=Yo(B))D++;for(B=0,ne=j;ne;ne=Yo(ne))B++;for(;0<D-B;)ve=Yo(ve),D--;for(;0<B-D;)j=Yo(j),B--;for(;D--;){if(ve===j||j!==null&&ve===j.alternate)break t;ve=Yo(ve),j=Yo(j)}ve=null}else ve=null;le!==null&&Eg(ee,X,le,ve,!1),fe!==null&&St!==null&&Eg(ee,St,fe,ve,!0)}}e:{if(X=W?Jo(W):window,le=X.nodeName&&X.nodeName.toLowerCase(),le==="select"||le==="input"&&X.type==="file")var _e=rS;else if(eg(X))if(ng)_e=aS;else{_e=iS;var Se=sS}else(le=X.nodeName)&&le.toLowerCase()==="input"&&(X.type==="checkbox"||X.type==="radio")&&(_e=oS);if(_e&&(_e=_e(s,W))){tg(ee,_e,l,J);break e}Se&&Se(s,X,W),s==="focusout"&&(Se=X._wrapperState)&&Se.controlled&&X.type==="number"&&pt(X,"number",X.value)}switch(Se=W?Jo(W):window,s){case"focusin":(eg(Se)||Se.contentEditable==="true")&&(Ko=Se,ih=W,hl=null);break;case"focusout":hl=ih=Ko=null;break;case"mousedown":oh=!0;break;case"contextmenu":case"mouseup":case"dragend":oh=!1,cg(ee,l,J);break;case"selectionchange":if(cS)break;case"keydown":case"keyup":cg(ee,l,J)}var Ae;if(th)e:{switch(s){case"compositionstart":var Ce="onCompositionStart";break e;case"compositionend":Ce="onCompositionEnd";break e;case"compositionupdate":Ce="onCompositionUpdate";break e}Ce=void 0}else Go?Jm(s,l)&&(Ce="onCompositionEnd"):s==="keydown"&&l.keyCode===229&&(Ce="onCompositionStart");Ce&&(Qm&&l.locale!=="ko"&&(Go||Ce!=="onCompositionStart"?Ce==="onCompositionEnd"&&Go&&(Ae=Au()):(kn=J,zo="value"in kn?kn.value:kn.textContent,Go=!0)),Se=Ou(W,Ce),0<Se.length&&(Ce=new v(Ce,s,null,l,J),ee.push({event:Ce,listeners:Se}),Ae?Ce.data=Ae:(Ae=Zm(l),Ae!==null&&(Ce.data=Ae)))),(Ae=JI?ZI(s,l):eS(s,l))&&(W=Ou(W,"onBeforeInput"),0<W.length&&(J=new v("onBeforeInput","beforeinput",null,l,J),ee.push({event:J,listeners:W}),J.data=Ae))}_g(ee,i)})}function ml(s,i,l){return{instance:s,listener:i,currentTarget:l}}function Ou(s,i){for(var l=i+"Capture",d=[];s!==null;){var f=s,m=f.stateNode;f.tag===5&&m!==null&&(f=m,m=rs(s,l),m!=null&&d.unshift(ml(s,m,f)),m=rs(s,i),m!=null&&d.push(ml(s,m,f))),s=s.return}return d}function Yo(s){if(s===null)return null;do s=s.return;while(s&&s.tag!==5);return s||null}function Eg(s,i,l,d,f){for(var m=i._reactName,w=[];l!==null&&l!==d;){var k=l,x=k.alternate,W=k.stateNode;if(x!==null&&x===d)break;k.tag===5&&W!==null&&(k=W,f?(x=rs(l,m),x!=null&&w.unshift(ml(l,x,k))):f||(x=rs(l,m),x!=null&&w.push(ml(l,x,k)))),l=l.return}w.length!==0&&s.push({event:i,listeners:w})}var pS=/\r\n?/g,mS=/\u0000|\uFFFD/g;function Tg(s){return(typeof s=="string"?s:""+s).replace(pS,`
`).replace(mS,"")}function Vu(s,i,l){if(i=Tg(i),Tg(s)!==i&&l)throw Error(t(425))}function Mu(){}var hh=null,fh=null;function ph(s,i){return s==="textarea"||s==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var mh=typeof setTimeout=="function"?setTimeout:void 0,gS=typeof clearTimeout=="function"?clearTimeout:void 0,Ig=typeof Promise=="function"?Promise:void 0,yS=typeof queueMicrotask=="function"?queueMicrotask:typeof Ig<"u"?function(s){return Ig.resolve(null).then(s).catch(vS)}:mh;function vS(s){setTimeout(function(){throw s})}function gh(s,i){var l=i,d=0;do{var f=l.nextSibling;if(s.removeChild(l),f&&f.nodeType===8)if(l=f.data,l==="/$"){if(d===0){s.removeChild(f),$s(i);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=f}while(l);$s(i)}function Gs(s){for(;s!=null;s=s.nextSibling){var i=s.nodeType;if(i===1||i===3)break;if(i===8){if(i=s.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return s}function Sg(s){s=s.previousSibling;for(var i=0;s;){if(s.nodeType===8){var l=s.data;if(l==="$"||l==="$!"||l==="$?"){if(i===0)return s;i--}else l==="/$"&&i++}s=s.previousSibling}return null}var Xo=Math.random().toString(36).slice(2),zr="__reactFiber$"+Xo,gl="__reactProps$"+Xo,hs="__reactContainer$"+Xo,yh="__reactEvents$"+Xo,_S="__reactListeners$"+Xo,wS="__reactHandles$"+Xo;function Ji(s){var i=s[zr];if(i)return i;for(var l=s.parentNode;l;){if(i=l[hs]||l[zr]){if(l=i.alternate,i.child!==null||l!==null&&l.child!==null)for(s=Sg(s);s!==null;){if(l=s[zr])return l;s=Sg(s)}return i}s=l,l=s.parentNode}return null}function yl(s){return s=s[zr]||s[hs],!s||s.tag!==5&&s.tag!==6&&s.tag!==13&&s.tag!==3?null:s}function Jo(s){if(s.tag===5||s.tag===6)return s.stateNode;throw Error(t(33))}function Lu(s){return s[gl]||null}var vh=[],Zo=-1;function Ks(s){return{current:s}}function ut(s){0>Zo||(s.current=vh[Zo],vh[Zo]=null,Zo--)}function ot(s,i){Zo++,vh[Zo]=s.current,s.current=i}var Qs={},Jt=Ks(Qs),gn=Ks(!1),Zi=Qs;function ea(s,i){var l=s.type.contextTypes;if(!l)return Qs;var d=s.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===i)return d.__reactInternalMemoizedMaskedChildContext;var f={},m;for(m in l)f[m]=i[m];return d&&(s=s.stateNode,s.__reactInternalMemoizedUnmaskedChildContext=i,s.__reactInternalMemoizedMaskedChildContext=f),f}function yn(s){return s=s.childContextTypes,s!=null}function Fu(){ut(gn),ut(Jt)}function Ag(s,i,l){if(Jt.current!==Qs)throw Error(t(168));ot(Jt,i),ot(gn,l)}function Rg(s,i,l){var d=s.stateNode;if(i=i.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var f in d)if(!(f in i))throw Error(t(108,Te(s)||"Unknown",f));return ae({},l,d)}function Uu(s){return s=(s=s.stateNode)&&s.__reactInternalMemoizedMergedChildContext||Qs,Zi=Jt.current,ot(Jt,s),ot(gn,gn.current),!0}function Cg(s,i,l){var d=s.stateNode;if(!d)throw Error(t(169));l?(s=Rg(s,i,Zi),d.__reactInternalMemoizedMergedChildContext=s,ut(gn),ut(Jt),ot(Jt,s)):ut(gn),ot(gn,l)}var fs=null,ju=!1,_h=!1;function kg(s){fs===null?fs=[s]:fs.push(s)}function ES(s){ju=!0,kg(s)}function Ys(){if(!_h&&fs!==null){_h=!0;var s=0,i=Be;try{var l=fs;for(Be=1;s<l.length;s++){var d=l[s];do d=d(!0);while(d!==null)}fs=null,ju=!1}catch(f){throw fs!==null&&(fs=fs.slice(s+1)),Ga(Oo,Ys),f}finally{Be=i,_h=!1}}return null}var ta=[],na=0,zu=null,Bu=0,Gn=[],Kn=0,eo=null,ps=1,ms="";function to(s,i){ta[na++]=Bu,ta[na++]=zu,zu=s,Bu=i}function Pg(s,i,l){Gn[Kn++]=ps,Gn[Kn++]=ms,Gn[Kn++]=eo,eo=s;var d=ps;s=ms;var f=32-Rn(d)-1;d&=~(1<<f),l+=1;var m=32-Rn(i)+f;if(30<m){var w=f-f%5;m=(d&(1<<w)-1).toString(32),d>>=w,f-=w,ps=1<<32-Rn(i)+f|l<<f|d,ms=m+s}else ps=1<<m|l<<f|d,ms=s}function wh(s){s.return!==null&&(to(s,1),Pg(s,1,0))}function Eh(s){for(;s===zu;)zu=ta[--na],ta[na]=null,Bu=ta[--na],ta[na]=null;for(;s===eo;)eo=Gn[--Kn],Gn[Kn]=null,ms=Gn[--Kn],Gn[Kn]=null,ps=Gn[--Kn],Gn[Kn]=null}var bn=null,Nn=null,ft=!1,ur=null;function xg(s,i){var l=Jn(5,null,null,0);l.elementType="DELETED",l.stateNode=i,l.return=s,i=s.deletions,i===null?(s.deletions=[l],s.flags|=16):i.push(l)}function bg(s,i){switch(s.tag){case 5:var l=s.type;return i=i.nodeType!==1||l.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(s.stateNode=i,bn=s,Nn=Gs(i.firstChild),!0):!1;case 6:return i=s.pendingProps===""||i.nodeType!==3?null:i,i!==null?(s.stateNode=i,bn=s,Nn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(l=eo!==null?{id:ps,overflow:ms}:null,s.memoizedState={dehydrated:i,treeContext:l,retryLane:1073741824},l=Jn(18,null,null,0),l.stateNode=i,l.return=s,s.child=l,bn=s,Nn=null,!0):!1;default:return!1}}function Th(s){return(s.mode&1)!==0&&(s.flags&128)===0}function Ih(s){if(ft){var i=Nn;if(i){var l=i;if(!bg(s,i)){if(Th(s))throw Error(t(418));i=Gs(l.nextSibling);var d=bn;i&&bg(s,i)?xg(d,l):(s.flags=s.flags&-4097|2,ft=!1,bn=s)}}else{if(Th(s))throw Error(t(418));s.flags=s.flags&-4097|2,ft=!1,bn=s}}}function Ng(s){for(s=s.return;s!==null&&s.tag!==5&&s.tag!==3&&s.tag!==13;)s=s.return;bn=s}function $u(s){if(s!==bn)return!1;if(!ft)return Ng(s),ft=!0,!1;var i;if((i=s.tag!==3)&&!(i=s.tag!==5)&&(i=s.type,i=i!=="head"&&i!=="body"&&!ph(s.type,s.memoizedProps)),i&&(i=Nn)){if(Th(s))throw Dg(),Error(t(418));for(;i;)xg(s,i),i=Gs(i.nextSibling)}if(Ng(s),s.tag===13){if(s=s.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(t(317));e:{for(s=s.nextSibling,i=0;s;){if(s.nodeType===8){var l=s.data;if(l==="/$"){if(i===0){Nn=Gs(s.nextSibling);break e}i--}else l!=="$"&&l!=="$!"&&l!=="$?"||i++}s=s.nextSibling}Nn=null}}else Nn=bn?Gs(s.stateNode.nextSibling):null;return!0}function Dg(){for(var s=Nn;s;)s=Gs(s.nextSibling)}function ra(){Nn=bn=null,ft=!1}function Sh(s){ur===null?ur=[s]:ur.push(s)}var TS=ie.ReactCurrentBatchConfig;function vl(s,i,l){if(s=l.ref,s!==null&&typeof s!="function"&&typeof s!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var d=l.stateNode}if(!d)throw Error(t(147,s));var f=d,m=""+s;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(w){var k=f.refs;w===null?delete k[m]:k[m]=w},i._stringRef=m,i)}if(typeof s!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,s))}return s}function Wu(s,i){throw s=Object.prototype.toString.call(i),Error(t(31,s==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":s))}function Og(s){var i=s._init;return i(s._payload)}function Vg(s){function i(j,D){if(s){var B=j.deletions;B===null?(j.deletions=[D],j.flags|=16):B.push(D)}}function l(j,D){if(!s)return null;for(;D!==null;)i(j,D),D=D.sibling;return null}function d(j,D){for(j=new Map;D!==null;)D.key!==null?j.set(D.key,D):j.set(D.index,D),D=D.sibling;return j}function f(j,D){return j=si(j,D),j.index=0,j.sibling=null,j}function m(j,D,B){return j.index=B,s?(B=j.alternate,B!==null?(B=B.index,B<D?(j.flags|=2,D):B):(j.flags|=2,D)):(j.flags|=1048576,D)}function w(j){return s&&j.alternate===null&&(j.flags|=2),j}function k(j,D,B,ne){return D===null||D.tag!==6?(D=gf(B,j.mode,ne),D.return=j,D):(D=f(D,B),D.return=j,D)}function x(j,D,B,ne){var _e=B.type;return _e===R?J(j,D,B.props.children,ne,B.key):D!==null&&(D.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===Xe&&Og(_e)===D.type)?(ne=f(D,B.props),ne.ref=vl(j,D,B),ne.return=j,ne):(ne=pc(B.type,B.key,B.props,null,j.mode,ne),ne.ref=vl(j,D,B),ne.return=j,ne)}function W(j,D,B,ne){return D===null||D.tag!==4||D.stateNode.containerInfo!==B.containerInfo||D.stateNode.implementation!==B.implementation?(D=yf(B,j.mode,ne),D.return=j,D):(D=f(D,B.children||[]),D.return=j,D)}function J(j,D,B,ne,_e){return D===null||D.tag!==7?(D=uo(B,j.mode,ne,_e),D.return=j,D):(D=f(D,B),D.return=j,D)}function ee(j,D,B){if(typeof D=="string"&&D!==""||typeof D=="number")return D=gf(""+D,j.mode,B),D.return=j,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case ge:return B=pc(D.type,D.key,D.props,null,j.mode,B),B.ref=vl(j,null,D),B.return=j,B;case ue:return D=yf(D,j.mode,B),D.return=j,D;case Xe:var ne=D._init;return ee(j,ne(D._payload),B)}if(rt(D)||ye(D))return D=uo(D,j.mode,B,null),D.return=j,D;Wu(j,D)}return null}function X(j,D,B,ne){var _e=D!==null?D.key:null;if(typeof B=="string"&&B!==""||typeof B=="number")return _e!==null?null:k(j,D,""+B,ne);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case ge:return B.key===_e?x(j,D,B,ne):null;case ue:return B.key===_e?W(j,D,B,ne):null;case Xe:return _e=B._init,X(j,D,_e(B._payload),ne)}if(rt(B)||ye(B))return _e!==null?null:J(j,D,B,ne,null);Wu(j,B)}return null}function le(j,D,B,ne,_e){if(typeof ne=="string"&&ne!==""||typeof ne=="number")return j=j.get(B)||null,k(D,j,""+ne,_e);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case ge:return j=j.get(ne.key===null?B:ne.key)||null,x(D,j,ne,_e);case ue:return j=j.get(ne.key===null?B:ne.key)||null,W(D,j,ne,_e);case Xe:var Se=ne._init;return le(j,D,B,Se(ne._payload),_e)}if(rt(ne)||ye(ne))return j=j.get(B)||null,J(D,j,ne,_e,null);Wu(D,ne)}return null}function fe(j,D,B,ne){for(var _e=null,Se=null,Ae=D,Ce=D=0,jt=null;Ae!==null&&Ce<B.length;Ce++){Ae.index>Ce?(jt=Ae,Ae=null):jt=Ae.sibling;var Qe=X(j,Ae,B[Ce],ne);if(Qe===null){Ae===null&&(Ae=jt);break}s&&Ae&&Qe.alternate===null&&i(j,Ae),D=m(Qe,D,Ce),Se===null?_e=Qe:Se.sibling=Qe,Se=Qe,Ae=jt}if(Ce===B.length)return l(j,Ae),ft&&to(j,Ce),_e;if(Ae===null){for(;Ce<B.length;Ce++)Ae=ee(j,B[Ce],ne),Ae!==null&&(D=m(Ae,D,Ce),Se===null?_e=Ae:Se.sibling=Ae,Se=Ae);return ft&&to(j,Ce),_e}for(Ae=d(j,Ae);Ce<B.length;Ce++)jt=le(Ae,j,Ce,B[Ce],ne),jt!==null&&(s&&jt.alternate!==null&&Ae.delete(jt.key===null?Ce:jt.key),D=m(jt,D,Ce),Se===null?_e=jt:Se.sibling=jt,Se=jt);return s&&Ae.forEach(function(ii){return i(j,ii)}),ft&&to(j,Ce),_e}function ve(j,D,B,ne){var _e=ye(B);if(typeof _e!="function")throw Error(t(150));if(B=_e.call(B),B==null)throw Error(t(151));for(var Se=_e=null,Ae=D,Ce=D=0,jt=null,Qe=B.next();Ae!==null&&!Qe.done;Ce++,Qe=B.next()){Ae.index>Ce?(jt=Ae,Ae=null):jt=Ae.sibling;var ii=X(j,Ae,Qe.value,ne);if(ii===null){Ae===null&&(Ae=jt);break}s&&Ae&&ii.alternate===null&&i(j,Ae),D=m(ii,D,Ce),Se===null?_e=ii:Se.sibling=ii,Se=ii,Ae=jt}if(Qe.done)return l(j,Ae),ft&&to(j,Ce),_e;if(Ae===null){for(;!Qe.done;Ce++,Qe=B.next())Qe=ee(j,Qe.value,ne),Qe!==null&&(D=m(Qe,D,Ce),Se===null?_e=Qe:Se.sibling=Qe,Se=Qe);return ft&&to(j,Ce),_e}for(Ae=d(j,Ae);!Qe.done;Ce++,Qe=B.next())Qe=le(Ae,j,Ce,Qe.value,ne),Qe!==null&&(s&&Qe.alternate!==null&&Ae.delete(Qe.key===null?Ce:Qe.key),D=m(Qe,D,Ce),Se===null?_e=Qe:Se.sibling=Qe,Se=Qe);return s&&Ae.forEach(function(tA){return i(j,tA)}),ft&&to(j,Ce),_e}function St(j,D,B,ne){if(typeof B=="object"&&B!==null&&B.type===R&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case ge:e:{for(var _e=B.key,Se=D;Se!==null;){if(Se.key===_e){if(_e=B.type,_e===R){if(Se.tag===7){l(j,Se.sibling),D=f(Se,B.props.children),D.return=j,j=D;break e}}else if(Se.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===Xe&&Og(_e)===Se.type){l(j,Se.sibling),D=f(Se,B.props),D.ref=vl(j,Se,B),D.return=j,j=D;break e}l(j,Se);break}else i(j,Se);Se=Se.sibling}B.type===R?(D=uo(B.props.children,j.mode,ne,B.key),D.return=j,j=D):(ne=pc(B.type,B.key,B.props,null,j.mode,ne),ne.ref=vl(j,D,B),ne.return=j,j=ne)}return w(j);case ue:e:{for(Se=B.key;D!==null;){if(D.key===Se)if(D.tag===4&&D.stateNode.containerInfo===B.containerInfo&&D.stateNode.implementation===B.implementation){l(j,D.sibling),D=f(D,B.children||[]),D.return=j,j=D;break e}else{l(j,D);break}else i(j,D);D=D.sibling}D=yf(B,j.mode,ne),D.return=j,j=D}return w(j);case Xe:return Se=B._init,St(j,D,Se(B._payload),ne)}if(rt(B))return fe(j,D,B,ne);if(ye(B))return ve(j,D,B,ne);Wu(j,B)}return typeof B=="string"&&B!==""||typeof B=="number"?(B=""+B,D!==null&&D.tag===6?(l(j,D.sibling),D=f(D,B),D.return=j,j=D):(l(j,D),D=gf(B,j.mode,ne),D.return=j,j=D),w(j)):l(j,D)}return St}var sa=Vg(!0),Mg=Vg(!1),qu=Ks(null),Hu=null,ia=null,Ah=null;function Rh(){Ah=ia=Hu=null}function Ch(s){var i=qu.current;ut(qu),s._currentValue=i}function kh(s,i,l){for(;s!==null;){var d=s.alternate;if((s.childLanes&i)!==i?(s.childLanes|=i,d!==null&&(d.childLanes|=i)):d!==null&&(d.childLanes&i)!==i&&(d.childLanes|=i),s===l)break;s=s.return}}function oa(s,i){Hu=s,Ah=ia=null,s=s.dependencies,s!==null&&s.firstContext!==null&&((s.lanes&i)!==0&&(vn=!0),s.firstContext=null)}function Qn(s){var i=s._currentValue;if(Ah!==s)if(s={context:s,memoizedValue:i,next:null},ia===null){if(Hu===null)throw Error(t(308));ia=s,Hu.dependencies={lanes:0,firstContext:s}}else ia=ia.next=s;return i}var no=null;function Ph(s){no===null?no=[s]:no.push(s)}function Lg(s,i,l,d){var f=i.interleaved;return f===null?(l.next=l,Ph(i)):(l.next=f.next,f.next=l),i.interleaved=l,gs(s,d)}function gs(s,i){s.lanes|=i;var l=s.alternate;for(l!==null&&(l.lanes|=i),l=s,s=s.return;s!==null;)s.childLanes|=i,l=s.alternate,l!==null&&(l.childLanes|=i),l=s,s=s.return;return l.tag===3?l.stateNode:null}var Xs=!1;function xh(s){s.updateQueue={baseState:s.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fg(s,i){s=s.updateQueue,i.updateQueue===s&&(i.updateQueue={baseState:s.baseState,firstBaseUpdate:s.firstBaseUpdate,lastBaseUpdate:s.lastBaseUpdate,shared:s.shared,effects:s.effects})}function ys(s,i){return{eventTime:s,lane:i,tag:0,payload:null,callback:null,next:null}}function Js(s,i,l){var d=s.updateQueue;if(d===null)return null;if(d=d.shared,(He&2)!==0){var f=d.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),d.pending=i,gs(s,l)}return f=d.interleaved,f===null?(i.next=i,Ph(d)):(i.next=f.next,f.next=i),d.interleaved=i,gs(s,l)}function Gu(s,i,l){if(i=i.updateQueue,i!==null&&(i=i.shared,(l&4194240)!==0)){var d=i.lanes;d&=s.pendingLanes,l|=d,i.lanes=l,Za(s,l)}}function Ug(s,i){var l=s.updateQueue,d=s.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var f=null,m=null;if(l=l.firstBaseUpdate,l!==null){do{var w={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};m===null?f=m=w:m=m.next=w,l=l.next}while(l!==null);m===null?f=m=i:m=m.next=i}else f=m=i;l={baseState:d.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:d.shared,effects:d.effects},s.updateQueue=l;return}s=l.lastBaseUpdate,s===null?l.firstBaseUpdate=i:s.next=i,l.lastBaseUpdate=i}function Ku(s,i,l,d){var f=s.updateQueue;Xs=!1;var m=f.firstBaseUpdate,w=f.lastBaseUpdate,k=f.shared.pending;if(k!==null){f.shared.pending=null;var x=k,W=x.next;x.next=null,w===null?m=W:w.next=W,w=x;var J=s.alternate;J!==null&&(J=J.updateQueue,k=J.lastBaseUpdate,k!==w&&(k===null?J.firstBaseUpdate=W:k.next=W,J.lastBaseUpdate=x))}if(m!==null){var ee=f.baseState;w=0,J=W=x=null,k=m;do{var X=k.lane,le=k.eventTime;if((d&X)===X){J!==null&&(J=J.next={eventTime:le,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var fe=s,ve=k;switch(X=i,le=l,ve.tag){case 1:if(fe=ve.payload,typeof fe=="function"){ee=fe.call(le,ee,X);break e}ee=fe;break e;case 3:fe.flags=fe.flags&-65537|128;case 0:if(fe=ve.payload,X=typeof fe=="function"?fe.call(le,ee,X):fe,X==null)break e;ee=ae({},ee,X);break e;case 2:Xs=!0}}k.callback!==null&&k.lane!==0&&(s.flags|=64,X=f.effects,X===null?f.effects=[k]:X.push(k))}else le={eventTime:le,lane:X,tag:k.tag,payload:k.payload,callback:k.callback,next:null},J===null?(W=J=le,x=ee):J=J.next=le,w|=X;if(k=k.next,k===null){if(k=f.shared.pending,k===null)break;X=k,k=X.next,X.next=null,f.lastBaseUpdate=X,f.shared.pending=null}}while(!0);if(J===null&&(x=ee),f.baseState=x,f.firstBaseUpdate=W,f.lastBaseUpdate=J,i=f.shared.interleaved,i!==null){f=i;do w|=f.lane,f=f.next;while(f!==i)}else m===null&&(f.shared.lanes=0);io|=w,s.lanes=w,s.memoizedState=ee}}function jg(s,i,l){if(s=i.effects,i.effects=null,s!==null)for(i=0;i<s.length;i++){var d=s[i],f=d.callback;if(f!==null){if(d.callback=null,d=l,typeof f!="function")throw Error(t(191,f));f.call(d)}}}var _l={},Br=Ks(_l),wl=Ks(_l),El=Ks(_l);function ro(s){if(s===_l)throw Error(t(174));return s}function bh(s,i){switch(ot(El,i),ot(wl,s),ot(Br,_l),s=i.nodeType,s){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Os(null,"");break;default:s=s===8?i.parentNode:i,i=s.namespaceURI||null,s=s.tagName,i=Os(i,s)}ut(Br),ot(Br,i)}function aa(){ut(Br),ut(wl),ut(El)}function zg(s){ro(El.current);var i=ro(Br.current),l=Os(i,s.type);i!==l&&(ot(wl,s),ot(Br,l))}function Nh(s){wl.current===s&&(ut(Br),ut(wl))}var gt=Ks(0);function Qu(s){for(var i=s;i!==null;){if(i.tag===13){var l=i.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break;for(;i.sibling===null;){if(i.return===null||i.return===s)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Dh=[];function Oh(){for(var s=0;s<Dh.length;s++)Dh[s]._workInProgressVersionPrimary=null;Dh.length=0}var Yu=ie.ReactCurrentDispatcher,Vh=ie.ReactCurrentBatchConfig,so=0,yt=null,Ot=null,Ft=null,Xu=!1,Tl=!1,Il=0,IS=0;function Zt(){throw Error(t(321))}function Mh(s,i){if(i===null)return!1;for(var l=0;l<i.length&&l<s.length;l++)if(!lr(s[l],i[l]))return!1;return!0}function Lh(s,i,l,d,f,m){if(so=m,yt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Yu.current=s===null||s.memoizedState===null?CS:kS,s=l(d,f),Tl){m=0;do{if(Tl=!1,Il=0,25<=m)throw Error(t(301));m+=1,Ft=Ot=null,i.updateQueue=null,Yu.current=PS,s=l(d,f)}while(Tl)}if(Yu.current=ec,i=Ot!==null&&Ot.next!==null,so=0,Ft=Ot=yt=null,Xu=!1,i)throw Error(t(300));return s}function Fh(){var s=Il!==0;return Il=0,s}function $r(){var s={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?yt.memoizedState=Ft=s:Ft=Ft.next=s,Ft}function Yn(){if(Ot===null){var s=yt.alternate;s=s!==null?s.memoizedState:null}else s=Ot.next;var i=Ft===null?yt.memoizedState:Ft.next;if(i!==null)Ft=i,Ot=s;else{if(s===null)throw Error(t(310));Ot=s,s={memoizedState:Ot.memoizedState,baseState:Ot.baseState,baseQueue:Ot.baseQueue,queue:Ot.queue,next:null},Ft===null?yt.memoizedState=Ft=s:Ft=Ft.next=s}return Ft}function Sl(s,i){return typeof i=="function"?i(s):i}function Uh(s){var i=Yn(),l=i.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=s;var d=Ot,f=d.baseQueue,m=l.pending;if(m!==null){if(f!==null){var w=f.next;f.next=m.next,m.next=w}d.baseQueue=f=m,l.pending=null}if(f!==null){m=f.next,d=d.baseState;var k=w=null,x=null,W=m;do{var J=W.lane;if((so&J)===J)x!==null&&(x=x.next={lane:0,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),d=W.hasEagerState?W.eagerState:s(d,W.action);else{var ee={lane:J,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null};x===null?(k=x=ee,w=d):x=x.next=ee,yt.lanes|=J,io|=J}W=W.next}while(W!==null&&W!==m);x===null?w=d:x.next=k,lr(d,i.memoizedState)||(vn=!0),i.memoizedState=d,i.baseState=w,i.baseQueue=x,l.lastRenderedState=d}if(s=l.interleaved,s!==null){f=s;do m=f.lane,yt.lanes|=m,io|=m,f=f.next;while(f!==s)}else f===null&&(l.lanes=0);return[i.memoizedState,l.dispatch]}function jh(s){var i=Yn(),l=i.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=s;var d=l.dispatch,f=l.pending,m=i.memoizedState;if(f!==null){l.pending=null;var w=f=f.next;do m=s(m,w.action),w=w.next;while(w!==f);lr(m,i.memoizedState)||(vn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),l.lastRenderedState=m}return[m,d]}function Bg(){}function $g(s,i){var l=yt,d=Yn(),f=i(),m=!lr(d.memoizedState,f);if(m&&(d.memoizedState=f,vn=!0),d=d.queue,zh(Hg.bind(null,l,d,s),[s]),d.getSnapshot!==i||m||Ft!==null&&Ft.memoizedState.tag&1){if(l.flags|=2048,Al(9,qg.bind(null,l,d,f,i),void 0,null),Ut===null)throw Error(t(349));(so&30)!==0||Wg(l,i,f)}return f}function Wg(s,i,l){s.flags|=16384,s={getSnapshot:i,value:l},i=yt.updateQueue,i===null?(i={lastEffect:null,stores:null},yt.updateQueue=i,i.stores=[s]):(l=i.stores,l===null?i.stores=[s]:l.push(s))}function qg(s,i,l,d){i.value=l,i.getSnapshot=d,Gg(i)&&Kg(s)}function Hg(s,i,l){return l(function(){Gg(i)&&Kg(s)})}function Gg(s){var i=s.getSnapshot;s=s.value;try{var l=i();return!lr(s,l)}catch{return!0}}function Kg(s){var i=gs(s,1);i!==null&&fr(i,s,1,-1)}function Qg(s){var i=$r();return typeof s=="function"&&(s=s()),i.memoizedState=i.baseState=s,s={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sl,lastRenderedState:s},i.queue=s,s=s.dispatch=RS.bind(null,yt,s),[i.memoizedState,s]}function Al(s,i,l,d){return s={tag:s,create:i,destroy:l,deps:d,next:null},i=yt.updateQueue,i===null?(i={lastEffect:null,stores:null},yt.updateQueue=i,i.lastEffect=s.next=s):(l=i.lastEffect,l===null?i.lastEffect=s.next=s:(d=l.next,l.next=s,s.next=d,i.lastEffect=s)),s}function Yg(){return Yn().memoizedState}function Ju(s,i,l,d){var f=$r();yt.flags|=s,f.memoizedState=Al(1|i,l,void 0,d===void 0?null:d)}function Zu(s,i,l,d){var f=Yn();d=d===void 0?null:d;var m=void 0;if(Ot!==null){var w=Ot.memoizedState;if(m=w.destroy,d!==null&&Mh(d,w.deps)){f.memoizedState=Al(i,l,m,d);return}}yt.flags|=s,f.memoizedState=Al(1|i,l,m,d)}function Xg(s,i){return Ju(8390656,8,s,i)}function zh(s,i){return Zu(2048,8,s,i)}function Jg(s,i){return Zu(4,2,s,i)}function Zg(s,i){return Zu(4,4,s,i)}function ey(s,i){if(typeof i=="function")return s=s(),i(s),function(){i(null)};if(i!=null)return s=s(),i.current=s,function(){i.current=null}}function ty(s,i,l){return l=l!=null?l.concat([s]):null,Zu(4,4,ey.bind(null,i,s),l)}function Bh(){}function ny(s,i){var l=Yn();i=i===void 0?null:i;var d=l.memoizedState;return d!==null&&i!==null&&Mh(i,d[1])?d[0]:(l.memoizedState=[s,i],s)}function ry(s,i){var l=Yn();i=i===void 0?null:i;var d=l.memoizedState;return d!==null&&i!==null&&Mh(i,d[1])?d[0]:(s=s(),l.memoizedState=[s,i],s)}function sy(s,i,l){return(so&21)===0?(s.baseState&&(s.baseState=!1,vn=!0),s.memoizedState=l):(lr(l,i)||(l=Xa(),yt.lanes|=l,io|=l,s.baseState=!0),i)}function SS(s,i){var l=Be;Be=l!==0&&4>l?l:4,s(!0);var d=Vh.transition;Vh.transition={};try{s(!1),i()}finally{Be=l,Vh.transition=d}}function iy(){return Yn().memoizedState}function AS(s,i,l){var d=ni(s);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},oy(s))ay(i,l);else if(l=Lg(s,i,l,d),l!==null){var f=ln();fr(l,s,d,f),ly(l,i,d)}}function RS(s,i,l){var d=ni(s),f={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(oy(s))ay(i,f);else{var m=s.alternate;if(s.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var w=i.lastRenderedState,k=m(w,l);if(f.hasEagerState=!0,f.eagerState=k,lr(k,w)){var x=i.interleaved;x===null?(f.next=f,Ph(i)):(f.next=x.next,x.next=f),i.interleaved=f;return}}catch{}finally{}l=Lg(s,i,f,d),l!==null&&(f=ln(),fr(l,s,d,f),ly(l,i,d))}}function oy(s){var i=s.alternate;return s===yt||i!==null&&i===yt}function ay(s,i){Tl=Xu=!0;var l=s.pending;l===null?i.next=i:(i.next=l.next,l.next=i),s.pending=i}function ly(s,i,l){if((l&4194240)!==0){var d=i.lanes;d&=s.pendingLanes,l|=d,i.lanes=l,Za(s,l)}}var ec={readContext:Qn,useCallback:Zt,useContext:Zt,useEffect:Zt,useImperativeHandle:Zt,useInsertionEffect:Zt,useLayoutEffect:Zt,useMemo:Zt,useReducer:Zt,useRef:Zt,useState:Zt,useDebugValue:Zt,useDeferredValue:Zt,useTransition:Zt,useMutableSource:Zt,useSyncExternalStore:Zt,useId:Zt,unstable_isNewReconciler:!1},CS={readContext:Qn,useCallback:function(s,i){return $r().memoizedState=[s,i===void 0?null:i],s},useContext:Qn,useEffect:Xg,useImperativeHandle:function(s,i,l){return l=l!=null?l.concat([s]):null,Ju(4194308,4,ey.bind(null,i,s),l)},useLayoutEffect:function(s,i){return Ju(4194308,4,s,i)},useInsertionEffect:function(s,i){return Ju(4,2,s,i)},useMemo:function(s,i){var l=$r();return i=i===void 0?null:i,s=s(),l.memoizedState=[s,i],s},useReducer:function(s,i,l){var d=$r();return i=l!==void 0?l(i):i,d.memoizedState=d.baseState=i,s={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:s,lastRenderedState:i},d.queue=s,s=s.dispatch=AS.bind(null,yt,s),[d.memoizedState,s]},useRef:function(s){var i=$r();return s={current:s},i.memoizedState=s},useState:Qg,useDebugValue:Bh,useDeferredValue:function(s){return $r().memoizedState=s},useTransition:function(){var s=Qg(!1),i=s[0];return s=SS.bind(null,s[1]),$r().memoizedState=s,[i,s]},useMutableSource:function(){},useSyncExternalStore:function(s,i,l){var d=yt,f=$r();if(ft){if(l===void 0)throw Error(t(407));l=l()}else{if(l=i(),Ut===null)throw Error(t(349));(so&30)!==0||Wg(d,i,l)}f.memoizedState=l;var m={value:l,getSnapshot:i};return f.queue=m,Xg(Hg.bind(null,d,m,s),[s]),d.flags|=2048,Al(9,qg.bind(null,d,m,l,i),void 0,null),l},useId:function(){var s=$r(),i=Ut.identifierPrefix;if(ft){var l=ms,d=ps;l=(d&~(1<<32-Rn(d)-1)).toString(32)+l,i=":"+i+"R"+l,l=Il++,0<l&&(i+="H"+l.toString(32)),i+=":"}else l=IS++,i=":"+i+"r"+l.toString(32)+":";return s.memoizedState=i},unstable_isNewReconciler:!1},kS={readContext:Qn,useCallback:ny,useContext:Qn,useEffect:zh,useImperativeHandle:ty,useInsertionEffect:Jg,useLayoutEffect:Zg,useMemo:ry,useReducer:Uh,useRef:Yg,useState:function(){return Uh(Sl)},useDebugValue:Bh,useDeferredValue:function(s){var i=Yn();return sy(i,Ot.memoizedState,s)},useTransition:function(){var s=Uh(Sl)[0],i=Yn().memoizedState;return[s,i]},useMutableSource:Bg,useSyncExternalStore:$g,useId:iy,unstable_isNewReconciler:!1},PS={readContext:Qn,useCallback:ny,useContext:Qn,useEffect:zh,useImperativeHandle:ty,useInsertionEffect:Jg,useLayoutEffect:Zg,useMemo:ry,useReducer:jh,useRef:Yg,useState:function(){return jh(Sl)},useDebugValue:Bh,useDeferredValue:function(s){var i=Yn();return Ot===null?i.memoizedState=s:sy(i,Ot.memoizedState,s)},useTransition:function(){var s=jh(Sl)[0],i=Yn().memoizedState;return[s,i]},useMutableSource:Bg,useSyncExternalStore:$g,useId:iy,unstable_isNewReconciler:!1};function cr(s,i){if(s&&s.defaultProps){i=ae({},i),s=s.defaultProps;for(var l in s)i[l]===void 0&&(i[l]=s[l]);return i}return i}function $h(s,i,l,d){i=s.memoizedState,l=l(d,i),l=l==null?i:ae({},i,l),s.memoizedState=l,s.lanes===0&&(s.updateQueue.baseState=l)}var tc={isMounted:function(s){return(s=s._reactInternals)?mn(s)===s:!1},enqueueSetState:function(s,i,l){s=s._reactInternals;var d=ln(),f=ni(s),m=ys(d,f);m.payload=i,l!=null&&(m.callback=l),i=Js(s,m,f),i!==null&&(fr(i,s,f,d),Gu(i,s,f))},enqueueReplaceState:function(s,i,l){s=s._reactInternals;var d=ln(),f=ni(s),m=ys(d,f);m.tag=1,m.payload=i,l!=null&&(m.callback=l),i=Js(s,m,f),i!==null&&(fr(i,s,f,d),Gu(i,s,f))},enqueueForceUpdate:function(s,i){s=s._reactInternals;var l=ln(),d=ni(s),f=ys(l,d);f.tag=2,i!=null&&(f.callback=i),i=Js(s,f,d),i!==null&&(fr(i,s,d,l),Gu(i,s,d))}};function uy(s,i,l,d,f,m,w){return s=s.stateNode,typeof s.shouldComponentUpdate=="function"?s.shouldComponentUpdate(d,m,w):i.prototype&&i.prototype.isPureReactComponent?!dl(l,d)||!dl(f,m):!0}function cy(s,i,l){var d=!1,f=Qs,m=i.contextType;return typeof m=="object"&&m!==null?m=Qn(m):(f=yn(i)?Zi:Jt.current,d=i.contextTypes,m=(d=d!=null)?ea(s,f):Qs),i=new i(l,m),s.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=tc,s.stateNode=i,i._reactInternals=s,d&&(s=s.stateNode,s.__reactInternalMemoizedUnmaskedChildContext=f,s.__reactInternalMemoizedMaskedChildContext=m),i}function dy(s,i,l,d){s=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(l,d),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(l,d),i.state!==s&&tc.enqueueReplaceState(i,i.state,null)}function Wh(s,i,l,d){var f=s.stateNode;f.props=l,f.state=s.memoizedState,f.refs={},xh(s);var m=i.contextType;typeof m=="object"&&m!==null?f.context=Qn(m):(m=yn(i)?Zi:Jt.current,f.context=ea(s,m)),f.state=s.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&($h(s,i,m,l),f.state=s.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&tc.enqueueReplaceState(f,f.state,null),Ku(s,l,f,d),f.state=s.memoizedState),typeof f.componentDidMount=="function"&&(s.flags|=4194308)}function la(s,i){try{var l="",d=i;do l+=Pe(d),d=d.return;while(d);var f=l}catch(m){f=`
Error generating stack: `+m.message+`
`+m.stack}return{value:s,source:i,stack:f,digest:null}}function qh(s,i,l){return{value:s,source:null,stack:l??null,digest:i??null}}function Hh(s,i){try{console.error(i.value)}catch(l){setTimeout(function(){throw l})}}var xS=typeof WeakMap=="function"?WeakMap:Map;function hy(s,i,l){l=ys(-1,l),l.tag=3,l.payload={element:null};var d=i.value;return l.callback=function(){lc||(lc=!0,lf=d),Hh(s,i)},l}function fy(s,i,l){l=ys(-1,l),l.tag=3;var d=s.type.getDerivedStateFromError;if(typeof d=="function"){var f=i.value;l.payload=function(){return d(f)},l.callback=function(){Hh(s,i)}}var m=s.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(l.callback=function(){Hh(s,i),typeof d!="function"&&(ei===null?ei=new Set([this]):ei.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),l}function py(s,i,l){var d=s.pingCache;if(d===null){d=s.pingCache=new xS;var f=new Set;d.set(i,f)}else f=d.get(i),f===void 0&&(f=new Set,d.set(i,f));f.has(l)||(f.add(l),s=WS.bind(null,s,i,l),i.then(s,s))}function my(s){do{var i;if((i=s.tag===13)&&(i=s.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return s;s=s.return}while(s!==null);return null}function gy(s,i,l,d,f){return(s.mode&1)===0?(s===i?s.flags|=65536:(s.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(i=ys(-1,1),i.tag=2,Js(l,i,1))),l.lanes|=1),s):(s.flags|=65536,s.lanes=f,s)}var bS=ie.ReactCurrentOwner,vn=!1;function an(s,i,l,d){i.child=s===null?Mg(i,null,l,d):sa(i,s.child,l,d)}function yy(s,i,l,d,f){l=l.render;var m=i.ref;return oa(i,f),d=Lh(s,i,l,d,m,f),l=Fh(),s!==null&&!vn?(i.updateQueue=s.updateQueue,i.flags&=-2053,s.lanes&=~f,vs(s,i,f)):(ft&&l&&wh(i),i.flags|=1,an(s,i,d,f),i.child)}function vy(s,i,l,d,f){if(s===null){var m=l.type;return typeof m=="function"&&!mf(m)&&m.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(i.tag=15,i.type=m,_y(s,i,m,d,f)):(s=pc(l.type,null,d,i,i.mode,f),s.ref=i.ref,s.return=i,i.child=s)}if(m=s.child,(s.lanes&f)===0){var w=m.memoizedProps;if(l=l.compare,l=l!==null?l:dl,l(w,d)&&s.ref===i.ref)return vs(s,i,f)}return i.flags|=1,s=si(m,d),s.ref=i.ref,s.return=i,i.child=s}function _y(s,i,l,d,f){if(s!==null){var m=s.memoizedProps;if(dl(m,d)&&s.ref===i.ref)if(vn=!1,i.pendingProps=d=m,(s.lanes&f)!==0)(s.flags&131072)!==0&&(vn=!0);else return i.lanes=s.lanes,vs(s,i,f)}return Gh(s,i,l,d,f)}function wy(s,i,l){var d=i.pendingProps,f=d.children,m=s!==null?s.memoizedState:null;if(d.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(ca,Dn),Dn|=l;else{if((l&1073741824)===0)return s=m!==null?m.baseLanes|l:l,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:s,cachePool:null,transitions:null},i.updateQueue=null,ot(ca,Dn),Dn|=s,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=m!==null?m.baseLanes:l,ot(ca,Dn),Dn|=d}else m!==null?(d=m.baseLanes|l,i.memoizedState=null):d=l,ot(ca,Dn),Dn|=d;return an(s,i,f,l),i.child}function Ey(s,i){var l=i.ref;(s===null&&l!==null||s!==null&&s.ref!==l)&&(i.flags|=512,i.flags|=2097152)}function Gh(s,i,l,d,f){var m=yn(l)?Zi:Jt.current;return m=ea(i,m),oa(i,f),l=Lh(s,i,l,d,m,f),d=Fh(),s!==null&&!vn?(i.updateQueue=s.updateQueue,i.flags&=-2053,s.lanes&=~f,vs(s,i,f)):(ft&&d&&wh(i),i.flags|=1,an(s,i,l,f),i.child)}function Ty(s,i,l,d,f){if(yn(l)){var m=!0;Uu(i)}else m=!1;if(oa(i,f),i.stateNode===null)rc(s,i),cy(i,l,d),Wh(i,l,d,f),d=!0;else if(s===null){var w=i.stateNode,k=i.memoizedProps;w.props=k;var x=w.context,W=l.contextType;typeof W=="object"&&W!==null?W=Qn(W):(W=yn(l)?Zi:Jt.current,W=ea(i,W));var J=l.getDerivedStateFromProps,ee=typeof J=="function"||typeof w.getSnapshotBeforeUpdate=="function";ee||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(k!==d||x!==W)&&dy(i,w,d,W),Xs=!1;var X=i.memoizedState;w.state=X,Ku(i,d,w,f),x=i.memoizedState,k!==d||X!==x||gn.current||Xs?(typeof J=="function"&&($h(i,l,J,d),x=i.memoizedState),(k=Xs||uy(i,l,k,d,X,x,W))?(ee||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=d,i.memoizedState=x),w.props=d,w.state=x,w.context=W,d=k):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),d=!1)}else{w=i.stateNode,Fg(s,i),k=i.memoizedProps,W=i.type===i.elementType?k:cr(i.type,k),w.props=W,ee=i.pendingProps,X=w.context,x=l.contextType,typeof x=="object"&&x!==null?x=Qn(x):(x=yn(l)?Zi:Jt.current,x=ea(i,x));var le=l.getDerivedStateFromProps;(J=typeof le=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(k!==ee||X!==x)&&dy(i,w,d,x),Xs=!1,X=i.memoizedState,w.state=X,Ku(i,d,w,f);var fe=i.memoizedState;k!==ee||X!==fe||gn.current||Xs?(typeof le=="function"&&($h(i,l,le,d),fe=i.memoizedState),(W=Xs||uy(i,l,W,d,X,fe,x)||!1)?(J||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(d,fe,x),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(d,fe,x)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||k===s.memoizedProps&&X===s.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||k===s.memoizedProps&&X===s.memoizedState||(i.flags|=1024),i.memoizedProps=d,i.memoizedState=fe),w.props=d,w.state=fe,w.context=x,d=W):(typeof w.componentDidUpdate!="function"||k===s.memoizedProps&&X===s.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||k===s.memoizedProps&&X===s.memoizedState||(i.flags|=1024),d=!1)}return Kh(s,i,l,d,m,f)}function Kh(s,i,l,d,f,m){Ey(s,i);var w=(i.flags&128)!==0;if(!d&&!w)return f&&Cg(i,l,!1),vs(s,i,m);d=i.stateNode,bS.current=i;var k=w&&typeof l.getDerivedStateFromError!="function"?null:d.render();return i.flags|=1,s!==null&&w?(i.child=sa(i,s.child,null,m),i.child=sa(i,null,k,m)):an(s,i,k,m),i.memoizedState=d.state,f&&Cg(i,l,!0),i.child}function Iy(s){var i=s.stateNode;i.pendingContext?Ag(s,i.pendingContext,i.pendingContext!==i.context):i.context&&Ag(s,i.context,!1),bh(s,i.containerInfo)}function Sy(s,i,l,d,f){return ra(),Sh(f),i.flags|=256,an(s,i,l,d),i.child}var Qh={dehydrated:null,treeContext:null,retryLane:0};function Yh(s){return{baseLanes:s,cachePool:null,transitions:null}}function Ay(s,i,l){var d=i.pendingProps,f=gt.current,m=!1,w=(i.flags&128)!==0,k;if((k=w)||(k=s!==null&&s.memoizedState===null?!1:(f&2)!==0),k?(m=!0,i.flags&=-129):(s===null||s.memoizedState!==null)&&(f|=1),ot(gt,f&1),s===null)return Ih(i),s=i.memoizedState,s!==null&&(s=s.dehydrated,s!==null)?((i.mode&1)===0?i.lanes=1:s.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=d.children,s=d.fallback,m?(d=i.mode,m=i.child,w={mode:"hidden",children:w},(d&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=w):m=mc(w,d,0,null),s=uo(s,d,l,null),m.return=i,s.return=i,m.sibling=s,i.child=m,i.child.memoizedState=Yh(l),i.memoizedState=Qh,s):Xh(i,w));if(f=s.memoizedState,f!==null&&(k=f.dehydrated,k!==null))return NS(s,i,w,d,k,f,l);if(m){m=d.fallback,w=i.mode,f=s.child,k=f.sibling;var x={mode:"hidden",children:d.children};return(w&1)===0&&i.child!==f?(d=i.child,d.childLanes=0,d.pendingProps=x,i.deletions=null):(d=si(f,x),d.subtreeFlags=f.subtreeFlags&14680064),k!==null?m=si(k,m):(m=uo(m,w,l,null),m.flags|=2),m.return=i,d.return=i,d.sibling=m,i.child=d,d=m,m=i.child,w=s.child.memoizedState,w=w===null?Yh(l):{baseLanes:w.baseLanes|l,cachePool:null,transitions:w.transitions},m.memoizedState=w,m.childLanes=s.childLanes&~l,i.memoizedState=Qh,d}return m=s.child,s=m.sibling,d=si(m,{mode:"visible",children:d.children}),(i.mode&1)===0&&(d.lanes=l),d.return=i,d.sibling=null,s!==null&&(l=i.deletions,l===null?(i.deletions=[s],i.flags|=16):l.push(s)),i.child=d,i.memoizedState=null,d}function Xh(s,i){return i=mc({mode:"visible",children:i},s.mode,0,null),i.return=s,s.child=i}function nc(s,i,l,d){return d!==null&&Sh(d),sa(i,s.child,null,l),s=Xh(i,i.pendingProps.children),s.flags|=2,i.memoizedState=null,s}function NS(s,i,l,d,f,m,w){if(l)return i.flags&256?(i.flags&=-257,d=qh(Error(t(422))),nc(s,i,w,d)):i.memoizedState!==null?(i.child=s.child,i.flags|=128,null):(m=d.fallback,f=i.mode,d=mc({mode:"visible",children:d.children},f,0,null),m=uo(m,f,w,null),m.flags|=2,d.return=i,m.return=i,d.sibling=m,i.child=d,(i.mode&1)!==0&&sa(i,s.child,null,w),i.child.memoizedState=Yh(w),i.memoizedState=Qh,m);if((i.mode&1)===0)return nc(s,i,w,null);if(f.data==="$!"){if(d=f.nextSibling&&f.nextSibling.dataset,d)var k=d.dgst;return d=k,m=Error(t(419)),d=qh(m,d,void 0),nc(s,i,w,d)}if(k=(w&s.childLanes)!==0,vn||k){if(d=Ut,d!==null){switch(w&-w){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(d.suspendedLanes|w))!==0?0:f,f!==0&&f!==m.retryLane&&(m.retryLane=f,gs(s,f),fr(d,s,f,-1))}return pf(),d=qh(Error(t(421))),nc(s,i,w,d)}return f.data==="$?"?(i.flags|=128,i.child=s.child,i=qS.bind(null,s),f._reactRetry=i,null):(s=m.treeContext,Nn=Gs(f.nextSibling),bn=i,ft=!0,ur=null,s!==null&&(Gn[Kn++]=ps,Gn[Kn++]=ms,Gn[Kn++]=eo,ps=s.id,ms=s.overflow,eo=i),i=Xh(i,d.children),i.flags|=4096,i)}function Ry(s,i,l){s.lanes|=i;var d=s.alternate;d!==null&&(d.lanes|=i),kh(s.return,i,l)}function Jh(s,i,l,d,f){var m=s.memoizedState;m===null?s.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=d,m.tail=l,m.tailMode=f)}function Cy(s,i,l){var d=i.pendingProps,f=d.revealOrder,m=d.tail;if(an(s,i,d.children,l),d=gt.current,(d&2)!==0)d=d&1|2,i.flags|=128;else{if(s!==null&&(s.flags&128)!==0)e:for(s=i.child;s!==null;){if(s.tag===13)s.memoizedState!==null&&Ry(s,l,i);else if(s.tag===19)Ry(s,l,i);else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break e;for(;s.sibling===null;){if(s.return===null||s.return===i)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}d&=1}if(ot(gt,d),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(l=i.child,f=null;l!==null;)s=l.alternate,s!==null&&Qu(s)===null&&(f=l),l=l.sibling;l=f,l===null?(f=i.child,i.child=null):(f=l.sibling,l.sibling=null),Jh(i,!1,f,l,m);break;case"backwards":for(l=null,f=i.child,i.child=null;f!==null;){if(s=f.alternate,s!==null&&Qu(s)===null){i.child=f;break}s=f.sibling,f.sibling=l,l=f,f=s}Jh(i,!0,l,null,m);break;case"together":Jh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function rc(s,i){(i.mode&1)===0&&s!==null&&(s.alternate=null,i.alternate=null,i.flags|=2)}function vs(s,i,l){if(s!==null&&(i.dependencies=s.dependencies),io|=i.lanes,(l&i.childLanes)===0)return null;if(s!==null&&i.child!==s.child)throw Error(t(153));if(i.child!==null){for(s=i.child,l=si(s,s.pendingProps),i.child=l,l.return=i;s.sibling!==null;)s=s.sibling,l=l.sibling=si(s,s.pendingProps),l.return=i;l.sibling=null}return i.child}function DS(s,i,l){switch(i.tag){case 3:Iy(i),ra();break;case 5:zg(i);break;case 1:yn(i.type)&&Uu(i);break;case 4:bh(i,i.stateNode.containerInfo);break;case 10:var d=i.type._context,f=i.memoizedProps.value;ot(qu,d._currentValue),d._currentValue=f;break;case 13:if(d=i.memoizedState,d!==null)return d.dehydrated!==null?(ot(gt,gt.current&1),i.flags|=128,null):(l&i.child.childLanes)!==0?Ay(s,i,l):(ot(gt,gt.current&1),s=vs(s,i,l),s!==null?s.sibling:null);ot(gt,gt.current&1);break;case 19:if(d=(l&i.childLanes)!==0,(s.flags&128)!==0){if(d)return Cy(s,i,l);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ot(gt,gt.current),d)break;return null;case 22:case 23:return i.lanes=0,wy(s,i,l)}return vs(s,i,l)}var ky,Zh,Py,xy;ky=function(s,i){for(var l=i.child;l!==null;){if(l.tag===5||l.tag===6)s.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===i)break;for(;l.sibling===null;){if(l.return===null||l.return===i)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Zh=function(){},Py=function(s,i,l,d){var f=s.memoizedProps;if(f!==d){s=i.stateNode,ro(Br.current);var m=null;switch(l){case"input":f=wr(s,f),d=wr(s,d),m=[];break;case"select":f=ae({},f,{value:void 0}),d=ae({},d,{value:void 0}),m=[];break;case"textarea":f=Ke(s,f),d=Ke(s,d),m=[];break;default:typeof f.onClick!="function"&&typeof d.onClick=="function"&&(s.onclick=Mu)}Rt(l,d);var w;l=null;for(W in f)if(!d.hasOwnProperty(W)&&f.hasOwnProperty(W)&&f[W]!=null)if(W==="style"){var k=f[W];for(w in k)k.hasOwnProperty(w)&&(l||(l={}),l[w]="")}else W!=="dangerouslySetInnerHTML"&&W!=="children"&&W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&W!=="autoFocus"&&(o.hasOwnProperty(W)?m||(m=[]):(m=m||[]).push(W,null));for(W in d){var x=d[W];if(k=f!=null?f[W]:void 0,d.hasOwnProperty(W)&&x!==k&&(x!=null||k!=null))if(W==="style")if(k){for(w in k)!k.hasOwnProperty(w)||x&&x.hasOwnProperty(w)||(l||(l={}),l[w]="");for(w in x)x.hasOwnProperty(w)&&k[w]!==x[w]&&(l||(l={}),l[w]=x[w])}else l||(m||(m=[]),m.push(W,l)),l=x;else W==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,k=k?k.__html:void 0,x!=null&&k!==x&&(m=m||[]).push(W,x)):W==="children"?typeof x!="string"&&typeof x!="number"||(m=m||[]).push(W,""+x):W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&(o.hasOwnProperty(W)?(x!=null&&W==="onScroll"&&lt("scroll",s),m||k===x||(m=[])):(m=m||[]).push(W,x))}l&&(m=m||[]).push("style",l);var W=m;(i.updateQueue=W)&&(i.flags|=4)}},xy=function(s,i,l,d){l!==d&&(i.flags|=4)};function Rl(s,i){if(!ft)switch(s.tailMode){case"hidden":i=s.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?s.tail=null:l.sibling=null;break;case"collapsed":l=s.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?i||s.tail===null?s.tail=null:s.tail.sibling=null:d.sibling=null}}function en(s){var i=s.alternate!==null&&s.alternate.child===s.child,l=0,d=0;if(i)for(var f=s.child;f!==null;)l|=f.lanes|f.childLanes,d|=f.subtreeFlags&14680064,d|=f.flags&14680064,f.return=s,f=f.sibling;else for(f=s.child;f!==null;)l|=f.lanes|f.childLanes,d|=f.subtreeFlags,d|=f.flags,f.return=s,f=f.sibling;return s.subtreeFlags|=d,s.childLanes=l,i}function OS(s,i,l){var d=i.pendingProps;switch(Eh(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(i),null;case 1:return yn(i.type)&&Fu(),en(i),null;case 3:return d=i.stateNode,aa(),ut(gn),ut(Jt),Oh(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(s===null||s.child===null)&&($u(i)?i.flags|=4:s===null||s.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ur!==null&&(df(ur),ur=null))),Zh(s,i),en(i),null;case 5:Nh(i);var f=ro(El.current);if(l=i.type,s!==null&&i.stateNode!=null)Py(s,i,l,d,f),s.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!d){if(i.stateNode===null)throw Error(t(166));return en(i),null}if(s=ro(Br.current),$u(i)){d=i.stateNode,l=i.type;var m=i.memoizedProps;switch(d[zr]=i,d[gl]=m,s=(i.mode&1)!==0,l){case"dialog":lt("cancel",d),lt("close",d);break;case"iframe":case"object":case"embed":lt("load",d);break;case"video":case"audio":for(f=0;f<fl.length;f++)lt(fl[f],d);break;case"source":lt("error",d);break;case"img":case"image":case"link":lt("error",d),lt("load",d);break;case"details":lt("toggle",d);break;case"input":Vi(d,m),lt("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!m.multiple},lt("invalid",d);break;case"textarea":Ds(d,m),lt("invalid",d)}Rt(l,m),f=null;for(var w in m)if(m.hasOwnProperty(w)){var k=m[w];w==="children"?typeof k=="string"?d.textContent!==k&&(m.suppressHydrationWarning!==!0&&Vu(d.textContent,k,s),f=["children",k]):typeof k=="number"&&d.textContent!==""+k&&(m.suppressHydrationWarning!==!0&&Vu(d.textContent,k,s),f=["children",""+k]):o.hasOwnProperty(w)&&k!=null&&w==="onScroll"&&lt("scroll",d)}switch(l){case"input":zn(d),es(d,m,!0);break;case"textarea":zn(d),Tr(d);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(d.onclick=Mu)}d=f,i.updateQueue=d,d!==null&&(i.flags|=4)}else{w=f.nodeType===9?f:f.ownerDocument,s==="http://www.w3.org/1999/xhtml"&&(s=ns(l)),s==="http://www.w3.org/1999/xhtml"?l==="script"?(s=w.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild)):typeof d.is=="string"?s=w.createElement(l,{is:d.is}):(s=w.createElement(l),l==="select"&&(w=s,d.multiple?w.multiple=!0:d.size&&(w.size=d.size))):s=w.createElementNS(s,l),s[zr]=i,s[gl]=d,ky(s,i,!1,!1),i.stateNode=s;e:{switch(w=Ls(l,d),l){case"dialog":lt("cancel",s),lt("close",s),f=d;break;case"iframe":case"object":case"embed":lt("load",s),f=d;break;case"video":case"audio":for(f=0;f<fl.length;f++)lt(fl[f],s);f=d;break;case"source":lt("error",s),f=d;break;case"img":case"image":case"link":lt("error",s),lt("load",s),f=d;break;case"details":lt("toggle",s),f=d;break;case"input":Vi(s,d),f=wr(s,d),lt("invalid",s);break;case"option":f=d;break;case"select":s._wrapperState={wasMultiple:!!d.multiple},f=ae({},d,{value:void 0}),lt("invalid",s);break;case"textarea":Ds(s,d),f=Ke(s,d),lt("invalid",s);break;default:f=d}Rt(l,f),k=f;for(m in k)if(k.hasOwnProperty(m)){var x=k[m];m==="style"?Ms(s,x):m==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,x!=null&&Mi(s,x)):m==="children"?typeof x=="string"?(l!=="textarea"||x!=="")&&nr(s,x):typeof x=="number"&&nr(s,""+x):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?x!=null&&m==="onScroll"&&lt("scroll",s):x!=null&&se(s,m,x,w))}switch(l){case"input":zn(s),es(s,d,!1);break;case"textarea":zn(s),Tr(s);break;case"option":d.value!=null&&s.setAttribute("value",""+Oe(d.value));break;case"select":s.multiple=!!d.multiple,m=d.value,m!=null?qe(s,!!d.multiple,m,!1):d.defaultValue!=null&&qe(s,!!d.multiple,d.defaultValue,!0);break;default:typeof f.onClick=="function"&&(s.onclick=Mu)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return en(i),null;case 6:if(s&&i.stateNode!=null)xy(s,i,s.memoizedProps,d);else{if(typeof d!="string"&&i.stateNode===null)throw Error(t(166));if(l=ro(El.current),ro(Br.current),$u(i)){if(d=i.stateNode,l=i.memoizedProps,d[zr]=i,(m=d.nodeValue!==l)&&(s=bn,s!==null))switch(s.tag){case 3:Vu(d.nodeValue,l,(s.mode&1)!==0);break;case 5:s.memoizedProps.suppressHydrationWarning!==!0&&Vu(d.nodeValue,l,(s.mode&1)!==0)}m&&(i.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[zr]=i,i.stateNode=d}return en(i),null;case 13:if(ut(gt),d=i.memoizedState,s===null||s.memoizedState!==null&&s.memoizedState.dehydrated!==null){if(ft&&Nn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Dg(),ra(),i.flags|=98560,m=!1;else if(m=$u(i),d!==null&&d.dehydrated!==null){if(s===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[zr]=i}else ra(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;en(i),m=!1}else ur!==null&&(df(ur),ur=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=l,i):(d=d!==null,d!==(s!==null&&s.memoizedState!==null)&&d&&(i.child.flags|=8192,(i.mode&1)!==0&&(s===null||(gt.current&1)!==0?Vt===0&&(Vt=3):pf())),i.updateQueue!==null&&(i.flags|=4),en(i),null);case 4:return aa(),Zh(s,i),s===null&&pl(i.stateNode.containerInfo),en(i),null;case 10:return Ch(i.type._context),en(i),null;case 17:return yn(i.type)&&Fu(),en(i),null;case 19:if(ut(gt),m=i.memoizedState,m===null)return en(i),null;if(d=(i.flags&128)!==0,w=m.rendering,w===null)if(d)Rl(m,!1);else{if(Vt!==0||s!==null&&(s.flags&128)!==0)for(s=i.child;s!==null;){if(w=Qu(s),w!==null){for(i.flags|=128,Rl(m,!1),d=w.updateQueue,d!==null&&(i.updateQueue=d,i.flags|=4),i.subtreeFlags=0,d=l,l=i.child;l!==null;)m=l,s=d,m.flags&=14680066,w=m.alternate,w===null?(m.childLanes=0,m.lanes=s,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=w.childLanes,m.lanes=w.lanes,m.child=w.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=w.memoizedProps,m.memoizedState=w.memoizedState,m.updateQueue=w.updateQueue,m.type=w.type,s=w.dependencies,m.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),l=l.sibling;return ot(gt,gt.current&1|2),i.child}s=s.sibling}m.tail!==null&&at()>da&&(i.flags|=128,d=!0,Rl(m,!1),i.lanes=4194304)}else{if(!d)if(s=Qu(w),s!==null){if(i.flags|=128,d=!0,l=s.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),Rl(m,!0),m.tail===null&&m.tailMode==="hidden"&&!w.alternate&&!ft)return en(i),null}else 2*at()-m.renderingStartTime>da&&l!==1073741824&&(i.flags|=128,d=!0,Rl(m,!1),i.lanes=4194304);m.isBackwards?(w.sibling=i.child,i.child=w):(l=m.last,l!==null?l.sibling=w:i.child=w,m.last=w)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=at(),i.sibling=null,l=gt.current,ot(gt,d?l&1|2:l&1),i):(en(i),null);case 22:case 23:return ff(),d=i.memoizedState!==null,s!==null&&s.memoizedState!==null!==d&&(i.flags|=8192),d&&(i.mode&1)!==0?(Dn&1073741824)!==0&&(en(i),i.subtreeFlags&6&&(i.flags|=8192)):en(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function VS(s,i){switch(Eh(i),i.tag){case 1:return yn(i.type)&&Fu(),s=i.flags,s&65536?(i.flags=s&-65537|128,i):null;case 3:return aa(),ut(gn),ut(Jt),Oh(),s=i.flags,(s&65536)!==0&&(s&128)===0?(i.flags=s&-65537|128,i):null;case 5:return Nh(i),null;case 13:if(ut(gt),s=i.memoizedState,s!==null&&s.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ra()}return s=i.flags,s&65536?(i.flags=s&-65537|128,i):null;case 19:return ut(gt),null;case 4:return aa(),null;case 10:return Ch(i.type._context),null;case 22:case 23:return ff(),null;case 24:return null;default:return null}}var sc=!1,tn=!1,MS=typeof WeakSet=="function"?WeakSet:Set,de=null;function ua(s,i){var l=s.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){wt(s,i,d)}else l.current=null}function ef(s,i,l){try{l()}catch(d){wt(s,i,d)}}var by=!1;function LS(s,i){if(hh=us,s=ug(),sh(s)){if("selectionStart"in s)var l={start:s.selectionStart,end:s.selectionEnd};else e:{l=(l=s.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var f=d.anchorOffset,m=d.focusNode;d=d.focusOffset;try{l.nodeType,m.nodeType}catch{l=null;break e}var w=0,k=-1,x=-1,W=0,J=0,ee=s,X=null;t:for(;;){for(var le;ee!==l||f!==0&&ee.nodeType!==3||(k=w+f),ee!==m||d!==0&&ee.nodeType!==3||(x=w+d),ee.nodeType===3&&(w+=ee.nodeValue.length),(le=ee.firstChild)!==null;)X=ee,ee=le;for(;;){if(ee===s)break t;if(X===l&&++W===f&&(k=w),X===m&&++J===d&&(x=w),(le=ee.nextSibling)!==null)break;ee=X,X=ee.parentNode}ee=le}l=k===-1||x===-1?null:{start:k,end:x}}else l=null}l=l||{start:0,end:0}}else l=null;for(fh={focusedElem:s,selectionRange:l},us=!1,de=i;de!==null;)if(i=de,s=i.child,(i.subtreeFlags&1028)!==0&&s!==null)s.return=i,de=s;else for(;de!==null;){i=de;try{var fe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(fe!==null){var ve=fe.memoizedProps,St=fe.memoizedState,j=i.stateNode,D=j.getSnapshotBeforeUpdate(i.elementType===i.type?ve:cr(i.type,ve),St);j.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var B=i.stateNode.containerInfo;B.nodeType===1?B.textContent="":B.nodeType===9&&B.documentElement&&B.removeChild(B.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ne){wt(i,i.return,ne)}if(s=i.sibling,s!==null){s.return=i.return,de=s;break}de=i.return}return fe=by,by=!1,fe}function Cl(s,i,l){var d=i.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var f=d=d.next;do{if((f.tag&s)===s){var m=f.destroy;f.destroy=void 0,m!==void 0&&ef(i,l,m)}f=f.next}while(f!==d)}}function ic(s,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var l=i=i.next;do{if((l.tag&s)===s){var d=l.create;l.destroy=d()}l=l.next}while(l!==i)}}function tf(s){var i=s.ref;if(i!==null){var l=s.stateNode;switch(s.tag){case 5:s=l;break;default:s=l}typeof i=="function"?i(s):i.current=s}}function Ny(s){var i=s.alternate;i!==null&&(s.alternate=null,Ny(i)),s.child=null,s.deletions=null,s.sibling=null,s.tag===5&&(i=s.stateNode,i!==null&&(delete i[zr],delete i[gl],delete i[yh],delete i[_S],delete i[wS])),s.stateNode=null,s.return=null,s.dependencies=null,s.memoizedProps=null,s.memoizedState=null,s.pendingProps=null,s.stateNode=null,s.updateQueue=null}function Dy(s){return s.tag===5||s.tag===3||s.tag===4}function Oy(s){e:for(;;){for(;s.sibling===null;){if(s.return===null||Dy(s.return))return null;s=s.return}for(s.sibling.return=s.return,s=s.sibling;s.tag!==5&&s.tag!==6&&s.tag!==18;){if(s.flags&2||s.child===null||s.tag===4)continue e;s.child.return=s,s=s.child}if(!(s.flags&2))return s.stateNode}}function nf(s,i,l){var d=s.tag;if(d===5||d===6)s=s.stateNode,i?l.nodeType===8?l.parentNode.insertBefore(s,i):l.insertBefore(s,i):(l.nodeType===8?(i=l.parentNode,i.insertBefore(s,l)):(i=l,i.appendChild(s)),l=l._reactRootContainer,l!=null||i.onclick!==null||(i.onclick=Mu));else if(d!==4&&(s=s.child,s!==null))for(nf(s,i,l),s=s.sibling;s!==null;)nf(s,i,l),s=s.sibling}function rf(s,i,l){var d=s.tag;if(d===5||d===6)s=s.stateNode,i?l.insertBefore(s,i):l.appendChild(s);else if(d!==4&&(s=s.child,s!==null))for(rf(s,i,l),s=s.sibling;s!==null;)rf(s,i,l),s=s.sibling}var Ht=null,dr=!1;function Zs(s,i,l){for(l=l.child;l!==null;)Vy(s,i,l),l=l.sibling}function Vy(s,i,l){if(An&&typeof An.onCommitFiberUnmount=="function")try{An.onCommitFiberUnmount($i,l)}catch{}switch(l.tag){case 5:tn||ua(l,i);case 6:var d=Ht,f=dr;Ht=null,Zs(s,i,l),Ht=d,dr=f,Ht!==null&&(dr?(s=Ht,l=l.stateNode,s.nodeType===8?s.parentNode.removeChild(l):s.removeChild(l)):Ht.removeChild(l.stateNode));break;case 18:Ht!==null&&(dr?(s=Ht,l=l.stateNode,s.nodeType===8?gh(s.parentNode,l):s.nodeType===1&&gh(s,l),$s(s)):gh(Ht,l.stateNode));break;case 4:d=Ht,f=dr,Ht=l.stateNode.containerInfo,dr=!0,Zs(s,i,l),Ht=d,dr=f;break;case 0:case 11:case 14:case 15:if(!tn&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){f=d=d.next;do{var m=f,w=m.destroy;m=m.tag,w!==void 0&&((m&2)!==0||(m&4)!==0)&&ef(l,i,w),f=f.next}while(f!==d)}Zs(s,i,l);break;case 1:if(!tn&&(ua(l,i),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(k){wt(l,i,k)}Zs(s,i,l);break;case 21:Zs(s,i,l);break;case 22:l.mode&1?(tn=(d=tn)||l.memoizedState!==null,Zs(s,i,l),tn=d):Zs(s,i,l);break;default:Zs(s,i,l)}}function My(s){var i=s.updateQueue;if(i!==null){s.updateQueue=null;var l=s.stateNode;l===null&&(l=s.stateNode=new MS),i.forEach(function(d){var f=HS.bind(null,s,d);l.has(d)||(l.add(d),d.then(f,f))})}}function hr(s,i){var l=i.deletions;if(l!==null)for(var d=0;d<l.length;d++){var f=l[d];try{var m=s,w=i,k=w;e:for(;k!==null;){switch(k.tag){case 5:Ht=k.stateNode,dr=!1;break e;case 3:Ht=k.stateNode.containerInfo,dr=!0;break e;case 4:Ht=k.stateNode.containerInfo,dr=!0;break e}k=k.return}if(Ht===null)throw Error(t(160));Vy(m,w,f),Ht=null,dr=!1;var x=f.alternate;x!==null&&(x.return=null),f.return=null}catch(W){wt(f,i,W)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Ly(i,s),i=i.sibling}function Ly(s,i){var l=s.alternate,d=s.flags;switch(s.tag){case 0:case 11:case 14:case 15:if(hr(i,s),Wr(s),d&4){try{Cl(3,s,s.return),ic(3,s)}catch(ve){wt(s,s.return,ve)}try{Cl(5,s,s.return)}catch(ve){wt(s,s.return,ve)}}break;case 1:hr(i,s),Wr(s),d&512&&l!==null&&ua(l,l.return);break;case 5:if(hr(i,s),Wr(s),d&512&&l!==null&&ua(l,l.return),s.flags&32){var f=s.stateNode;try{nr(f,"")}catch(ve){wt(s,s.return,ve)}}if(d&4&&(f=s.stateNode,f!=null)){var m=s.memoizedProps,w=l!==null?l.memoizedProps:m,k=s.type,x=s.updateQueue;if(s.updateQueue=null,x!==null)try{k==="input"&&m.type==="radio"&&m.name!=null&&Bn(f,m),Ls(k,w);var W=Ls(k,m);for(w=0;w<x.length;w+=2){var J=x[w],ee=x[w+1];J==="style"?Ms(f,ee):J==="dangerouslySetInnerHTML"?Mi(f,ee):J==="children"?nr(f,ee):se(f,J,ee,W)}switch(k){case"input":Er(f,m);break;case"textarea":ts(f,m);break;case"select":var X=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!m.multiple;var le=m.value;le!=null?qe(f,!!m.multiple,le,!1):X!==!!m.multiple&&(m.defaultValue!=null?qe(f,!!m.multiple,m.defaultValue,!0):qe(f,!!m.multiple,m.multiple?[]:"",!1))}f[gl]=m}catch(ve){wt(s,s.return,ve)}}break;case 6:if(hr(i,s),Wr(s),d&4){if(s.stateNode===null)throw Error(t(162));f=s.stateNode,m=s.memoizedProps;try{f.nodeValue=m}catch(ve){wt(s,s.return,ve)}}break;case 3:if(hr(i,s),Wr(s),d&4&&l!==null&&l.memoizedState.isDehydrated)try{$s(i.containerInfo)}catch(ve){wt(s,s.return,ve)}break;case 4:hr(i,s),Wr(s);break;case 13:hr(i,s),Wr(s),f=s.child,f.flags&8192&&(m=f.memoizedState!==null,f.stateNode.isHidden=m,!m||f.alternate!==null&&f.alternate.memoizedState!==null||(af=at())),d&4&&My(s);break;case 22:if(J=l!==null&&l.memoizedState!==null,s.mode&1?(tn=(W=tn)||J,hr(i,s),tn=W):hr(i,s),Wr(s),d&8192){if(W=s.memoizedState!==null,(s.stateNode.isHidden=W)&&!J&&(s.mode&1)!==0)for(de=s,J=s.child;J!==null;){for(ee=de=J;de!==null;){switch(X=de,le=X.child,X.tag){case 0:case 11:case 14:case 15:Cl(4,X,X.return);break;case 1:ua(X,X.return);var fe=X.stateNode;if(typeof fe.componentWillUnmount=="function"){d=X,l=X.return;try{i=d,fe.props=i.memoizedProps,fe.state=i.memoizedState,fe.componentWillUnmount()}catch(ve){wt(d,l,ve)}}break;case 5:ua(X,X.return);break;case 22:if(X.memoizedState!==null){jy(ee);continue}}le!==null?(le.return=X,de=le):jy(ee)}J=J.sibling}e:for(J=null,ee=s;;){if(ee.tag===5){if(J===null){J=ee;try{f=ee.stateNode,W?(m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(k=ee.stateNode,x=ee.memoizedProps.style,w=x!=null&&x.hasOwnProperty("display")?x.display:null,k.style.display=Ir("display",w))}catch(ve){wt(s,s.return,ve)}}}else if(ee.tag===6){if(J===null)try{ee.stateNode.nodeValue=W?"":ee.memoizedProps}catch(ve){wt(s,s.return,ve)}}else if((ee.tag!==22&&ee.tag!==23||ee.memoizedState===null||ee===s)&&ee.child!==null){ee.child.return=ee,ee=ee.child;continue}if(ee===s)break e;for(;ee.sibling===null;){if(ee.return===null||ee.return===s)break e;J===ee&&(J=null),ee=ee.return}J===ee&&(J=null),ee.sibling.return=ee.return,ee=ee.sibling}}break;case 19:hr(i,s),Wr(s),d&4&&My(s);break;case 21:break;default:hr(i,s),Wr(s)}}function Wr(s){var i=s.flags;if(i&2){try{e:{for(var l=s.return;l!==null;){if(Dy(l)){var d=l;break e}l=l.return}throw Error(t(160))}switch(d.tag){case 5:var f=d.stateNode;d.flags&32&&(nr(f,""),d.flags&=-33);var m=Oy(s);rf(s,m,f);break;case 3:case 4:var w=d.stateNode.containerInfo,k=Oy(s);nf(s,k,w);break;default:throw Error(t(161))}}catch(x){wt(s,s.return,x)}s.flags&=-3}i&4096&&(s.flags&=-4097)}function FS(s,i,l){de=s,Fy(s)}function Fy(s,i,l){for(var d=(s.mode&1)!==0;de!==null;){var f=de,m=f.child;if(f.tag===22&&d){var w=f.memoizedState!==null||sc;if(!w){var k=f.alternate,x=k!==null&&k.memoizedState!==null||tn;k=sc;var W=tn;if(sc=w,(tn=x)&&!W)for(de=f;de!==null;)w=de,x=w.child,w.tag===22&&w.memoizedState!==null?zy(f):x!==null?(x.return=w,de=x):zy(f);for(;m!==null;)de=m,Fy(m),m=m.sibling;de=f,sc=k,tn=W}Uy(s)}else(f.subtreeFlags&8772)!==0&&m!==null?(m.return=f,de=m):Uy(s)}}function Uy(s){for(;de!==null;){var i=de;if((i.flags&8772)!==0){var l=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:tn||ic(5,i);break;case 1:var d=i.stateNode;if(i.flags&4&&!tn)if(l===null)d.componentDidMount();else{var f=i.elementType===i.type?l.memoizedProps:cr(i.type,l.memoizedProps);d.componentDidUpdate(f,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&jg(i,m,d);break;case 3:var w=i.updateQueue;if(w!==null){if(l=null,i.child!==null)switch(i.child.tag){case 5:l=i.child.stateNode;break;case 1:l=i.child.stateNode}jg(i,w,l)}break;case 5:var k=i.stateNode;if(l===null&&i.flags&4){l=k;var x=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":x.autoFocus&&l.focus();break;case"img":x.src&&(l.src=x.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var W=i.alternate;if(W!==null){var J=W.memoizedState;if(J!==null){var ee=J.dehydrated;ee!==null&&$s(ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}tn||i.flags&512&&tf(i)}catch(X){wt(i,i.return,X)}}if(i===s){de=null;break}if(l=i.sibling,l!==null){l.return=i.return,de=l;break}de=i.return}}function jy(s){for(;de!==null;){var i=de;if(i===s){de=null;break}var l=i.sibling;if(l!==null){l.return=i.return,de=l;break}de=i.return}}function zy(s){for(;de!==null;){var i=de;try{switch(i.tag){case 0:case 11:case 15:var l=i.return;try{ic(4,i)}catch(x){wt(i,l,x)}break;case 1:var d=i.stateNode;if(typeof d.componentDidMount=="function"){var f=i.return;try{d.componentDidMount()}catch(x){wt(i,f,x)}}var m=i.return;try{tf(i)}catch(x){wt(i,m,x)}break;case 5:var w=i.return;try{tf(i)}catch(x){wt(i,w,x)}}}catch(x){wt(i,i.return,x)}if(i===s){de=null;break}var k=i.sibling;if(k!==null){k.return=i.return,de=k;break}de=i.return}}var US=Math.ceil,oc=ie.ReactCurrentDispatcher,sf=ie.ReactCurrentOwner,Xn=ie.ReactCurrentBatchConfig,He=0,Ut=null,kt=null,Gt=0,Dn=0,ca=Ks(0),Vt=0,kl=null,io=0,ac=0,of=0,Pl=null,_n=null,af=0,da=1/0,_s=null,lc=!1,lf=null,ei=null,uc=!1,ti=null,cc=0,xl=0,uf=null,dc=-1,hc=0;function ln(){return(He&6)!==0?at():dc!==-1?dc:dc=at()}function ni(s){return(s.mode&1)===0?1:(He&2)!==0&&Gt!==0?Gt&-Gt:TS.transition!==null?(hc===0&&(hc=Xa()),hc):(s=Be,s!==0||(s=window.event,s=s===void 0?16:jo(s.type)),s)}function fr(s,i,l,d){if(50<xl)throw xl=0,uf=null,Error(t(185));Gi(s,l,d),((He&2)===0||s!==Ut)&&(s===Ut&&((He&2)===0&&(ac|=l),Vt===4&&ri(s,Gt)),wn(s,d),l===1&&He===0&&(i.mode&1)===0&&(da=at()+500,ju&&Ys()))}function wn(s,i){var l=s.callbackNode;Hi(s,i);var d=os(s,s===Ut?Gt:0);if(d===0)l!==null&&Do(l),s.callbackNode=null,s.callbackPriority=0;else if(i=d&-d,s.callbackPriority!==i){if(l!=null&&Do(l),i===1)s.tag===0?ES($y.bind(null,s)):kg($y.bind(null,s)),yS(function(){(He&6)===0&&Ys()}),l=null;else{switch(br(d)){case 1:l=Oo;break;case 4:l=Ka;break;case 16:l=Bi;break;case 536870912:l=Vo;break;default:l=Bi}l=Xy(l,By.bind(null,s))}s.callbackPriority=i,s.callbackNode=l}}function By(s,i){if(dc=-1,hc=0,(He&6)!==0)throw Error(t(327));var l=s.callbackNode;if(ha()&&s.callbackNode!==l)return null;var d=os(s,s===Ut?Gt:0);if(d===0)return null;if((d&30)!==0||(d&s.expiredLanes)!==0||i)i=fc(s,d);else{i=d;var f=He;He|=2;var m=qy();(Ut!==s||Gt!==i)&&(_s=null,da=at()+500,ao(s,i));do try{BS();break}catch(k){Wy(s,k)}while(!0);Rh(),oc.current=m,He=f,kt!==null?i=0:(Ut=null,Gt=0,i=Vt)}if(i!==0){if(i===2&&(f=Ya(s),f!==0&&(d=f,i=cf(s,f))),i===1)throw l=kl,ao(s,0),ri(s,d),wn(s,at()),l;if(i===6)ri(s,d);else{if(f=s.current.alternate,(d&30)===0&&!jS(f)&&(i=fc(s,d),i===2&&(m=Ya(s),m!==0&&(d=m,i=cf(s,m))),i===1))throw l=kl,ao(s,0),ri(s,d),wn(s,at()),l;switch(s.finishedWork=f,s.finishedLanes=d,i){case 0:case 1:throw Error(t(345));case 2:lo(s,_n,_s);break;case 3:if(ri(s,d),(d&130023424)===d&&(i=af+500-at(),10<i)){if(os(s,0)!==0)break;if(f=s.suspendedLanes,(f&d)!==d){ln(),s.pingedLanes|=s.suspendedLanes&f;break}s.timeoutHandle=mh(lo.bind(null,s,_n,_s),i);break}lo(s,_n,_s);break;case 4:if(ri(s,d),(d&4194240)===d)break;for(i=s.eventTimes,f=-1;0<d;){var w=31-Rn(d);m=1<<w,w=i[w],w>f&&(f=w),d&=~m}if(d=f,d=at()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*US(d/1960))-d,10<d){s.timeoutHandle=mh(lo.bind(null,s,_n,_s),d);break}lo(s,_n,_s);break;case 5:lo(s,_n,_s);break;default:throw Error(t(329))}}}return wn(s,at()),s.callbackNode===l?By.bind(null,s):null}function cf(s,i){var l=Pl;return s.current.memoizedState.isDehydrated&&(ao(s,i).flags|=256),s=fc(s,i),s!==2&&(i=_n,_n=l,i!==null&&df(i)),s}function df(s){_n===null?_n=s:_n.push.apply(_n,s)}function jS(s){for(var i=s;;){if(i.flags&16384){var l=i.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var f=l[d],m=f.getSnapshot;f=f.value;try{if(!lr(m(),f))return!1}catch{return!1}}}if(l=i.child,i.subtreeFlags&16384&&l!==null)l.return=i,i=l;else{if(i===s)break;for(;i.sibling===null;){if(i.return===null||i.return===s)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ri(s,i){for(i&=~of,i&=~ac,s.suspendedLanes|=i,s.pingedLanes&=~i,s=s.expirationTimes;0<i;){var l=31-Rn(i),d=1<<l;s[l]=-1,i&=~d}}function $y(s){if((He&6)!==0)throw Error(t(327));ha();var i=os(s,0);if((i&1)===0)return wn(s,at()),null;var l=fc(s,i);if(s.tag!==0&&l===2){var d=Ya(s);d!==0&&(i=d,l=cf(s,d))}if(l===1)throw l=kl,ao(s,0),ri(s,i),wn(s,at()),l;if(l===6)throw Error(t(345));return s.finishedWork=s.current.alternate,s.finishedLanes=i,lo(s,_n,_s),wn(s,at()),null}function hf(s,i){var l=He;He|=1;try{return s(i)}finally{He=l,He===0&&(da=at()+500,ju&&Ys())}}function oo(s){ti!==null&&ti.tag===0&&(He&6)===0&&ha();var i=He;He|=1;var l=Xn.transition,d=Be;try{if(Xn.transition=null,Be=1,s)return s()}finally{Be=d,Xn.transition=l,He=i,(He&6)===0&&Ys()}}function ff(){Dn=ca.current,ut(ca)}function ao(s,i){s.finishedWork=null,s.finishedLanes=0;var l=s.timeoutHandle;if(l!==-1&&(s.timeoutHandle=-1,gS(l)),kt!==null)for(l=kt.return;l!==null;){var d=l;switch(Eh(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&Fu();break;case 3:aa(),ut(gn),ut(Jt),Oh();break;case 5:Nh(d);break;case 4:aa();break;case 13:ut(gt);break;case 19:ut(gt);break;case 10:Ch(d.type._context);break;case 22:case 23:ff()}l=l.return}if(Ut=s,kt=s=si(s.current,null),Gt=Dn=i,Vt=0,kl=null,of=ac=io=0,_n=Pl=null,no!==null){for(i=0;i<no.length;i++)if(l=no[i],d=l.interleaved,d!==null){l.interleaved=null;var f=d.next,m=l.pending;if(m!==null){var w=m.next;m.next=f,d.next=w}l.pending=d}no=null}return s}function Wy(s,i){do{var l=kt;try{if(Rh(),Yu.current=ec,Xu){for(var d=yt.memoizedState;d!==null;){var f=d.queue;f!==null&&(f.pending=null),d=d.next}Xu=!1}if(so=0,Ft=Ot=yt=null,Tl=!1,Il=0,sf.current=null,l===null||l.return===null){Vt=1,kl=i,kt=null;break}e:{var m=s,w=l.return,k=l,x=i;if(i=Gt,k.flags|=32768,x!==null&&typeof x=="object"&&typeof x.then=="function"){var W=x,J=k,ee=J.tag;if((J.mode&1)===0&&(ee===0||ee===11||ee===15)){var X=J.alternate;X?(J.updateQueue=X.updateQueue,J.memoizedState=X.memoizedState,J.lanes=X.lanes):(J.updateQueue=null,J.memoizedState=null)}var le=my(w);if(le!==null){le.flags&=-257,gy(le,w,k,m,i),le.mode&1&&py(m,W,i),i=le,x=W;var fe=i.updateQueue;if(fe===null){var ve=new Set;ve.add(x),i.updateQueue=ve}else fe.add(x);break e}else{if((i&1)===0){py(m,W,i),pf();break e}x=Error(t(426))}}else if(ft&&k.mode&1){var St=my(w);if(St!==null){(St.flags&65536)===0&&(St.flags|=256),gy(St,w,k,m,i),Sh(la(x,k));break e}}m=x=la(x,k),Vt!==4&&(Vt=2),Pl===null?Pl=[m]:Pl.push(m),m=w;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var j=hy(m,x,i);Ug(m,j);break e;case 1:k=x;var D=m.type,B=m.stateNode;if((m.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||B!==null&&typeof B.componentDidCatch=="function"&&(ei===null||!ei.has(B)))){m.flags|=65536,i&=-i,m.lanes|=i;var ne=fy(m,k,i);Ug(m,ne);break e}}m=m.return}while(m!==null)}Gy(l)}catch(_e){i=_e,kt===l&&l!==null&&(kt=l=l.return);continue}break}while(!0)}function qy(){var s=oc.current;return oc.current=ec,s===null?ec:s}function pf(){(Vt===0||Vt===3||Vt===2)&&(Vt=4),Ut===null||(io&268435455)===0&&(ac&268435455)===0||ri(Ut,Gt)}function fc(s,i){var l=He;He|=2;var d=qy();(Ut!==s||Gt!==i)&&(_s=null,ao(s,i));do try{zS();break}catch(f){Wy(s,f)}while(!0);if(Rh(),He=l,oc.current=d,kt!==null)throw Error(t(261));return Ut=null,Gt=0,Vt}function zS(){for(;kt!==null;)Hy(kt)}function BS(){for(;kt!==null&&!zi();)Hy(kt)}function Hy(s){var i=Yy(s.alternate,s,Dn);s.memoizedProps=s.pendingProps,i===null?Gy(s):kt=i,sf.current=null}function Gy(s){var i=s;do{var l=i.alternate;if(s=i.return,(i.flags&32768)===0){if(l=OS(l,i,Dn),l!==null){kt=l;return}}else{if(l=VS(l,i),l!==null){l.flags&=32767,kt=l;return}if(s!==null)s.flags|=32768,s.subtreeFlags=0,s.deletions=null;else{Vt=6,kt=null;return}}if(i=i.sibling,i!==null){kt=i;return}kt=i=s}while(i!==null);Vt===0&&(Vt=5)}function lo(s,i,l){var d=Be,f=Xn.transition;try{Xn.transition=null,Be=1,$S(s,i,l,d)}finally{Xn.transition=f,Be=d}return null}function $S(s,i,l,d){do ha();while(ti!==null);if((He&6)!==0)throw Error(t(327));l=s.finishedWork;var f=s.finishedLanes;if(l===null)return null;if(s.finishedWork=null,s.finishedLanes=0,l===s.current)throw Error(t(177));s.callbackNode=null,s.callbackPriority=0;var m=l.lanes|l.childLanes;if(Zd(s,m),s===Ut&&(kt=Ut=null,Gt=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||uc||(uc=!0,Xy(Bi,function(){return ha(),null})),m=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||m){m=Xn.transition,Xn.transition=null;var w=Be;Be=1;var k=He;He|=4,sf.current=null,LS(s,l),Ly(l,s),uS(fh),us=!!hh,fh=hh=null,s.current=l,FS(l),is(),He=k,Be=w,Xn.transition=m}else s.current=l;if(uc&&(uc=!1,ti=s,cc=f),m=s.pendingLanes,m===0&&(ei=null),wu(l.stateNode),wn(s,at()),i!==null)for(d=s.onRecoverableError,l=0;l<i.length;l++)f=i[l],d(f.value,{componentStack:f.stack,digest:f.digest});if(lc)throw lc=!1,s=lf,lf=null,s;return(cc&1)!==0&&s.tag!==0&&ha(),m=s.pendingLanes,(m&1)!==0?s===uf?xl++:(xl=0,uf=s):xl=0,Ys(),null}function ha(){if(ti!==null){var s=br(cc),i=Xn.transition,l=Be;try{if(Xn.transition=null,Be=16>s?16:s,ti===null)var d=!1;else{if(s=ti,ti=null,cc=0,(He&6)!==0)throw Error(t(331));var f=He;for(He|=4,de=s.current;de!==null;){var m=de,w=m.child;if((de.flags&16)!==0){var k=m.deletions;if(k!==null){for(var x=0;x<k.length;x++){var W=k[x];for(de=W;de!==null;){var J=de;switch(J.tag){case 0:case 11:case 15:Cl(8,J,m)}var ee=J.child;if(ee!==null)ee.return=J,de=ee;else for(;de!==null;){J=de;var X=J.sibling,le=J.return;if(Ny(J),J===W){de=null;break}if(X!==null){X.return=le,de=X;break}de=le}}}var fe=m.alternate;if(fe!==null){var ve=fe.child;if(ve!==null){fe.child=null;do{var St=ve.sibling;ve.sibling=null,ve=St}while(ve!==null)}}de=m}}if((m.subtreeFlags&2064)!==0&&w!==null)w.return=m,de=w;else e:for(;de!==null;){if(m=de,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Cl(9,m,m.return)}var j=m.sibling;if(j!==null){j.return=m.return,de=j;break e}de=m.return}}var D=s.current;for(de=D;de!==null;){w=de;var B=w.child;if((w.subtreeFlags&2064)!==0&&B!==null)B.return=w,de=B;else e:for(w=D;de!==null;){if(k=de,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:ic(9,k)}}catch(_e){wt(k,k.return,_e)}if(k===w){de=null;break e}var ne=k.sibling;if(ne!==null){ne.return=k.return,de=ne;break e}de=k.return}}if(He=f,Ys(),An&&typeof An.onPostCommitFiberRoot=="function")try{An.onPostCommitFiberRoot($i,s)}catch{}d=!0}return d}finally{Be=l,Xn.transition=i}}return!1}function Ky(s,i,l){i=la(l,i),i=hy(s,i,1),s=Js(s,i,1),i=ln(),s!==null&&(Gi(s,1,i),wn(s,i))}function wt(s,i,l){if(s.tag===3)Ky(s,s,l);else for(;i!==null;){if(i.tag===3){Ky(i,s,l);break}else if(i.tag===1){var d=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(ei===null||!ei.has(d))){s=la(l,s),s=fy(i,s,1),i=Js(i,s,1),s=ln(),i!==null&&(Gi(i,1,s),wn(i,s));break}}i=i.return}}function WS(s,i,l){var d=s.pingCache;d!==null&&d.delete(i),i=ln(),s.pingedLanes|=s.suspendedLanes&l,Ut===s&&(Gt&l)===l&&(Vt===4||Vt===3&&(Gt&130023424)===Gt&&500>at()-af?ao(s,0):of|=l),wn(s,i)}function Qy(s,i){i===0&&((s.mode&1)===0?i=1:(i=js,js<<=1,(js&130023424)===0&&(js=4194304)));var l=ln();s=gs(s,i),s!==null&&(Gi(s,i,l),wn(s,l))}function qS(s){var i=s.memoizedState,l=0;i!==null&&(l=i.retryLane),Qy(s,l)}function HS(s,i){var l=0;switch(s.tag){case 13:var d=s.stateNode,f=s.memoizedState;f!==null&&(l=f.retryLane);break;case 19:d=s.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(i),Qy(s,l)}var Yy;Yy=function(s,i,l){if(s!==null)if(s.memoizedProps!==i.pendingProps||gn.current)vn=!0;else{if((s.lanes&l)===0&&(i.flags&128)===0)return vn=!1,DS(s,i,l);vn=(s.flags&131072)!==0}else vn=!1,ft&&(i.flags&1048576)!==0&&Pg(i,Bu,i.index);switch(i.lanes=0,i.tag){case 2:var d=i.type;rc(s,i),s=i.pendingProps;var f=ea(i,Jt.current);oa(i,l),f=Lh(null,i,d,s,f,l);var m=Fh();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,yn(d)?(m=!0,Uu(i)):m=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,xh(i),f.updater=tc,i.stateNode=f,f._reactInternals=i,Wh(i,d,s,l),i=Kh(null,i,d,!0,m,l)):(i.tag=0,ft&&m&&wh(i),an(null,i,f,l),i=i.child),i;case 16:d=i.elementType;e:{switch(rc(s,i),s=i.pendingProps,f=d._init,d=f(d._payload),i.type=d,f=i.tag=KS(d),s=cr(d,s),f){case 0:i=Gh(null,i,d,s,l);break e;case 1:i=Ty(null,i,d,s,l);break e;case 11:i=yy(null,i,d,s,l);break e;case 14:i=vy(null,i,d,cr(d.type,s),l);break e}throw Error(t(306,d,""))}return i;case 0:return d=i.type,f=i.pendingProps,f=i.elementType===d?f:cr(d,f),Gh(s,i,d,f,l);case 1:return d=i.type,f=i.pendingProps,f=i.elementType===d?f:cr(d,f),Ty(s,i,d,f,l);case 3:e:{if(Iy(i),s===null)throw Error(t(387));d=i.pendingProps,m=i.memoizedState,f=m.element,Fg(s,i),Ku(i,d,null,l);var w=i.memoizedState;if(d=w.element,m.isDehydrated)if(m={element:d,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){f=la(Error(t(423)),i),i=Sy(s,i,d,l,f);break e}else if(d!==f){f=la(Error(t(424)),i),i=Sy(s,i,d,l,f);break e}else for(Nn=Gs(i.stateNode.containerInfo.firstChild),bn=i,ft=!0,ur=null,l=Mg(i,null,d,l),i.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(ra(),d===f){i=vs(s,i,l);break e}an(s,i,d,l)}i=i.child}return i;case 5:return zg(i),s===null&&Ih(i),d=i.type,f=i.pendingProps,m=s!==null?s.memoizedProps:null,w=f.children,ph(d,f)?w=null:m!==null&&ph(d,m)&&(i.flags|=32),Ey(s,i),an(s,i,w,l),i.child;case 6:return s===null&&Ih(i),null;case 13:return Ay(s,i,l);case 4:return bh(i,i.stateNode.containerInfo),d=i.pendingProps,s===null?i.child=sa(i,null,d,l):an(s,i,d,l),i.child;case 11:return d=i.type,f=i.pendingProps,f=i.elementType===d?f:cr(d,f),yy(s,i,d,f,l);case 7:return an(s,i,i.pendingProps,l),i.child;case 8:return an(s,i,i.pendingProps.children,l),i.child;case 12:return an(s,i,i.pendingProps.children,l),i.child;case 10:e:{if(d=i.type._context,f=i.pendingProps,m=i.memoizedProps,w=f.value,ot(qu,d._currentValue),d._currentValue=w,m!==null)if(lr(m.value,w)){if(m.children===f.children&&!gn.current){i=vs(s,i,l);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var k=m.dependencies;if(k!==null){w=m.child;for(var x=k.firstContext;x!==null;){if(x.context===d){if(m.tag===1){x=ys(-1,l&-l),x.tag=2;var W=m.updateQueue;if(W!==null){W=W.shared;var J=W.pending;J===null?x.next=x:(x.next=J.next,J.next=x),W.pending=x}}m.lanes|=l,x=m.alternate,x!==null&&(x.lanes|=l),kh(m.return,l,i),k.lanes|=l;break}x=x.next}}else if(m.tag===10)w=m.type===i.type?null:m.child;else if(m.tag===18){if(w=m.return,w===null)throw Error(t(341));w.lanes|=l,k=w.alternate,k!==null&&(k.lanes|=l),kh(w,l,i),w=m.sibling}else w=m.child;if(w!==null)w.return=m;else for(w=m;w!==null;){if(w===i){w=null;break}if(m=w.sibling,m!==null){m.return=w.return,w=m;break}w=w.return}m=w}an(s,i,f.children,l),i=i.child}return i;case 9:return f=i.type,d=i.pendingProps.children,oa(i,l),f=Qn(f),d=d(f),i.flags|=1,an(s,i,d,l),i.child;case 14:return d=i.type,f=cr(d,i.pendingProps),f=cr(d.type,f),vy(s,i,d,f,l);case 15:return _y(s,i,i.type,i.pendingProps,l);case 17:return d=i.type,f=i.pendingProps,f=i.elementType===d?f:cr(d,f),rc(s,i),i.tag=1,yn(d)?(s=!0,Uu(i)):s=!1,oa(i,l),cy(i,d,f),Wh(i,d,f,l),Kh(null,i,d,!0,s,l);case 19:return Cy(s,i,l);case 22:return wy(s,i,l)}throw Error(t(156,i.tag))};function Xy(s,i){return Ga(s,i)}function GS(s,i,l,d){this.tag=s,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(s,i,l,d){return new GS(s,i,l,d)}function mf(s){return s=s.prototype,!(!s||!s.isReactComponent)}function KS(s){if(typeof s=="function")return mf(s)?1:0;if(s!=null){if(s=s.$$typeof,s===F)return 11;if(s===et)return 14}return 2}function si(s,i){var l=s.alternate;return l===null?(l=Jn(s.tag,i,s.key,s.mode),l.elementType=s.elementType,l.type=s.type,l.stateNode=s.stateNode,l.alternate=s,s.alternate=l):(l.pendingProps=i,l.type=s.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=s.flags&14680064,l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,i=s.dependencies,l.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},l.sibling=s.sibling,l.index=s.index,l.ref=s.ref,l}function pc(s,i,l,d,f,m){var w=2;if(d=s,typeof s=="function")mf(s)&&(w=1);else if(typeof s=="string")w=5;else e:switch(s){case R:return uo(l.children,f,m,i);case I:w=8,f|=8;break;case C:return s=Jn(12,l,i,f|2),s.elementType=C,s.lanes=m,s;case P:return s=Jn(13,l,i,f),s.elementType=P,s.lanes=m,s;case Ge:return s=Jn(19,l,i,f),s.elementType=Ge,s.lanes=m,s;case ze:return mc(l,f,m,i);default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case N:w=10;break e;case b:w=9;break e;case F:w=11;break e;case et:w=14;break e;case Xe:w=16,d=null;break e}throw Error(t(130,s==null?s:typeof s,""))}return i=Jn(w,l,i,f),i.elementType=s,i.type=d,i.lanes=m,i}function uo(s,i,l,d){return s=Jn(7,s,d,i),s.lanes=l,s}function mc(s,i,l,d){return s=Jn(22,s,d,i),s.elementType=ze,s.lanes=l,s.stateNode={isHidden:!1},s}function gf(s,i,l){return s=Jn(6,s,null,i),s.lanes=l,s}function yf(s,i,l){return i=Jn(4,s.children!==null?s.children:[],s.key,i),i.lanes=l,i.stateNode={containerInfo:s.containerInfo,pendingChildren:null,implementation:s.implementation},i}function QS(s,i,l,d,f){this.tag=i,this.containerInfo=s,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ja(0),this.expirationTimes=Ja(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ja(0),this.identifierPrefix=d,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function vf(s,i,l,d,f,m,w,k,x){return s=new QS(s,i,l,k,x),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Jn(3,null,null,i),s.current=m,m.stateNode=s,m.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},xh(m),s}function YS(s,i,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ue,key:d==null?null:""+d,children:s,containerInfo:i,implementation:l}}function Jy(s){if(!s)return Qs;s=s._reactInternals;e:{if(mn(s)!==s||s.tag!==1)throw Error(t(170));var i=s;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(yn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(s.tag===1){var l=s.type;if(yn(l))return Rg(s,l,i)}return i}function Zy(s,i,l,d,f,m,w,k,x){return s=vf(l,d,!0,s,f,m,w,k,x),s.context=Jy(null),l=s.current,d=ln(),f=ni(l),m=ys(d,f),m.callback=i??null,Js(l,m,f),s.current.lanes=f,Gi(s,f,d),wn(s,d),s}function gc(s,i,l,d){var f=i.current,m=ln(),w=ni(f);return l=Jy(l),i.context===null?i.context=l:i.pendingContext=l,i=ys(m,w),i.payload={element:s},d=d===void 0?null:d,d!==null&&(i.callback=d),s=Js(f,i,w),s!==null&&(fr(s,f,w,m),Gu(s,f,w)),w}function yc(s){if(s=s.current,!s.child)return null;switch(s.child.tag){case 5:return s.child.stateNode;default:return s.child.stateNode}}function ev(s,i){if(s=s.memoizedState,s!==null&&s.dehydrated!==null){var l=s.retryLane;s.retryLane=l!==0&&l<i?l:i}}function _f(s,i){ev(s,i),(s=s.alternate)&&ev(s,i)}function XS(){return null}var tv=typeof reportError=="function"?reportError:function(s){console.error(s)};function wf(s){this._internalRoot=s}vc.prototype.render=wf.prototype.render=function(s){var i=this._internalRoot;if(i===null)throw Error(t(409));gc(s,i,null,null)},vc.prototype.unmount=wf.prototype.unmount=function(){var s=this._internalRoot;if(s!==null){this._internalRoot=null;var i=s.containerInfo;oo(function(){gc(null,s,null,null)}),i[hs]=null}};function vc(s){this._internalRoot=s}vc.prototype.unstable_scheduleHydration=function(s){if(s){var i=nl();s={blockedOn:null,target:s,priority:i};for(var l=0;l<Cn.length&&i!==0&&i<Cn[l].priority;l++);Cn.splice(l,0,s),l===0&&Fo(s)}};function Ef(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11)}function _c(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11&&(s.nodeType!==8||s.nodeValue!==" react-mount-point-unstable "))}function nv(){}function JS(s,i,l,d,f){if(f){if(typeof d=="function"){var m=d;d=function(){var W=yc(w);m.call(W)}}var w=Zy(i,d,s,0,null,!1,!1,"",nv);return s._reactRootContainer=w,s[hs]=w.current,pl(s.nodeType===8?s.parentNode:s),oo(),w}for(;f=s.lastChild;)s.removeChild(f);if(typeof d=="function"){var k=d;d=function(){var W=yc(x);k.call(W)}}var x=vf(s,0,!1,null,null,!1,!1,"",nv);return s._reactRootContainer=x,s[hs]=x.current,pl(s.nodeType===8?s.parentNode:s),oo(function(){gc(i,x,l,d)}),x}function wc(s,i,l,d,f){var m=l._reactRootContainer;if(m){var w=m;if(typeof f=="function"){var k=f;f=function(){var x=yc(w);k.call(x)}}gc(i,w,s,f)}else w=JS(l,i,s,f,d);return yc(w)}el=function(s){switch(s.tag){case 3:var i=s.stateNode;if(i.current.memoizedState.isDehydrated){var l=Ze(i.pendingLanes);l!==0&&(Za(i,l|1),wn(i,at()),(He&6)===0&&(da=at()+500,Ys()))}break;case 13:oo(function(){var d=gs(s,1);if(d!==null){var f=ln();fr(d,s,1,f)}}),_f(s,1)}},Mo=function(s){if(s.tag===13){var i=gs(s,134217728);if(i!==null){var l=ln();fr(i,s,134217728,l)}_f(s,134217728)}},tl=function(s){if(s.tag===13){var i=ni(s),l=gs(s,i);if(l!==null){var d=ln();fr(l,s,i,d)}_f(s,i)}},nl=function(){return Be},rl=function(s,i){var l=Be;try{return Be=s,i()}finally{Be=l}},rr=function(s,i,l){switch(i){case"input":if(Er(s,l),i=l.name,l.type==="radio"&&i!=null){for(l=s;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<l.length;i++){var d=l[i];if(d!==s&&d.form===s.form){var f=Lu(d);if(!f)throw Error(t(90));fn(d),Er(d,f)}}}break;case"textarea":ts(s,l);break;case"select":i=l.value,i!=null&&qe(s,!!l.multiple,i,!1)}},xo=hf,bo=oo;var ZS={usingClientEntryPoint:!1,Events:[yl,Jo,Lu,or,Ar,hf]},bl={findFiberByHostInstance:Ji,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},eA={bundleType:bl.bundleType,version:bl.version,rendererPackageName:bl.rendererPackageName,rendererConfig:bl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ie.ReactCurrentDispatcher,findHostInstanceByFiber:function(s){return s=_u(s),s===null?null:s.stateNode},findFiberByHostInstance:bl.findFiberByHostInstance||XS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ec.isDisabled&&Ec.supportsFiber)try{$i=Ec.inject(eA),An=Ec}catch{}}return En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZS,En.createPortal=function(s,i){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ef(i))throw Error(t(200));return YS(s,i,null,l)},En.createRoot=function(s,i){if(!Ef(s))throw Error(t(299));var l=!1,d="",f=tv;return i!=null&&(i.unstable_strictMode===!0&&(l=!0),i.identifierPrefix!==void 0&&(d=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=vf(s,1,!1,null,null,l,!1,d,f),s[hs]=i.current,pl(s.nodeType===8?s.parentNode:s),new wf(i)},En.findDOMNode=function(s){if(s==null)return null;if(s.nodeType===1)return s;var i=s._reactInternals;if(i===void 0)throw typeof s.render=="function"?Error(t(188)):(s=Object.keys(s).join(","),Error(t(268,s)));return s=_u(i),s=s===null?null:s.stateNode,s},En.flushSync=function(s){return oo(s)},En.hydrate=function(s,i,l){if(!_c(i))throw Error(t(200));return wc(null,s,i,!0,l)},En.hydrateRoot=function(s,i,l){if(!Ef(s))throw Error(t(405));var d=l!=null&&l.hydratedSources||null,f=!1,m="",w=tv;if(l!=null&&(l.unstable_strictMode===!0&&(f=!0),l.identifierPrefix!==void 0&&(m=l.identifierPrefix),l.onRecoverableError!==void 0&&(w=l.onRecoverableError)),i=Zy(i,null,s,1,l??null,f,!1,m,w),s[hs]=i.current,pl(s),d)for(s=0;s<d.length;s++)l=d[s],f=l._getVersion,f=f(l._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[l,f]:i.mutableSourceEagerHydrationData.push(l,f);return new vc(i)},En.render=function(s,i,l){if(!_c(i))throw Error(t(200));return wc(null,s,i,!1,l)},En.unmountComponentAtNode=function(s){if(!_c(s))throw Error(t(40));return s._reactRootContainer?(oo(function(){wc(null,null,s,!1,function(){s._reactRootContainer=null,s[hs]=null})}),!0):!1},En.unstable_batchedUpdates=hf,En.unstable_renderSubtreeIntoContainer=function(s,i,l,d){if(!_c(l))throw Error(t(200));if(s==null||s._reactInternals===void 0)throw Error(t(38));return wc(s,i,l,!1,d)},En.version="18.3.1-next-f1338f8080-20240426",En}var cv;function Sw(){if(cv)return Sf.exports;cv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Sf.exports=lA(),Sf.exports}var dv;function uA(){if(dv)return Tc;dv=1;var n=Sw();return Tc.createRoot=n.createRoot,Tc.hydrateRoot=n.hydrateRoot,Tc}var cA=uA(),M=bp();const dA=Iw(M),hA=nA({__proto__:null,default:dA},[M]);function Pt({onClick:n,children:e,disabled:t=!1,className:r}){return A.jsx("button",{onClick:n,disabled:t,className:`bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 active:scale-95${r?` ${r}`:""}`,children:e})}const fA="/assets/bc1bc1c44f6ba6cb1fd8be782ee33922cc6339af-Dpd72UCo.png",pA=()=>{};var hv={};/**
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
 */const Aw=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let o=n.charCodeAt(r);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},mA=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const o=n[t++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const a=n[t++];e[r++]=String.fromCharCode((o&31)<<6|a&63)}else if(o>239&&o<365){const a=n[t++],u=n[t++],h=n[t++],p=((o&7)<<18|(a&63)<<12|(u&63)<<6|h&63)-65536;e[r++]=String.fromCharCode(55296+(p>>10)),e[r++]=String.fromCharCode(56320+(p&1023))}else{const a=n[t++],u=n[t++];e[r++]=String.fromCharCode((o&15)<<12|(a&63)<<6|u&63)}}return e.join("")},Rw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<n.length;o+=3){const a=n[o],u=o+1<n.length,h=u?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,_=a>>2,E=(a&3)<<4|h>>4;let T=(h&15)<<2|y>>6,O=y&63;p||(O=64,u||(T=64)),r.push(t[_],t[E],t[T],t[O])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Aw(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):mA(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<n.length;){const a=t[n.charAt(o++)],h=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const E=o<n.length?t[n.charAt(o)]:64;if(++o,a==null||h==null||y==null||E==null)throw new gA;const T=a<<2|h>>4;if(r.push(T),y!==64){const O=h<<4&240|y>>2;if(r.push(O),E!==64){const q=y<<6&192|E;r.push(q)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class gA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yA=function(n){const e=Aw(n);return Rw.encodeByteArray(e,!0)},Xc=function(n){return yA(n).replace(/\./g,"")},Cw=function(n){try{return Rw.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function vA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const _A=()=>vA().__FIREBASE_DEFAULTS__,wA=()=>{if(typeof process>"u"||typeof hv>"u")return;const n=hv.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},EA=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Cw(n[1]);return e&&JSON.parse(e)},Td=()=>{try{return pA()||_A()||wA()||EA()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},kw=n=>{var e,t;return(t=(e=Td())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Pw=n=>{const e=kw(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},xw=()=>{var n;return(n=Td())==null?void 0:n.config},bw=n=>{var e;return(e=Td())==null?void 0:e[`_${n}`]};/**
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
 */class TA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Pi(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Np(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Nw(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",o=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u={iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Xc(JSON.stringify(t)),Xc(JSON.stringify(u)),""].join(".")}const Bl={};function IA(){const n={prod:[],emulator:[]};for(const e of Object.keys(Bl))Bl[e]?n.emulator.push(e):n.prod.push(e);return n}function SA(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let fv=!1;function Dp(n,e){if(typeof window>"u"||typeof document>"u"||!Pi(window.location.host)||Bl[n]===e||Bl[n]||fv)return;Bl[n]=e;function t(T){return`__firebase__banner__${T}`}const r="__firebase__banner",a=IA().prod.length>0;function u(){const T=document.getElementById(r);T&&T.remove()}function h(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function p(T,O){T.setAttribute("width","24"),T.setAttribute("id",O),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function y(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{fv=!0,u()},T}function _(T,O){T.setAttribute("id",O),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function E(){const T=SA(r),O=t("text"),q=document.getElementById(O)||document.createElement("span"),V=t("learnmore"),U=document.getElementById(V)||document.createElement("a"),Z=t("preprendIcon"),te=document.getElementById(Z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const se=T.element;h(se),_(U,V);const ie=y();p(te,Z),se.append(te,q,U,ie),document.body.appendChild(se)}a?(q.innerText="Preview backend disconnected.",te.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(te.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,q.innerText="Preview backend running in this workspace."),q.setAttribute("id",O)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
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
 */function sn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function AA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(sn())}function RA(){var e;const n=(e=Td())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function CA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Op(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function kA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function PA(){const n=sn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function xA(){return!RA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Vp(){try{return typeof indexedDB=="object"}catch{return!1}}function Mp(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var a;e(((a=o.error)==null?void 0:a.message)||"")}}catch(t){e(t)}})}function Dw(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const bA="FirebaseError";class tr extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=bA,Object.setPrototypeOf(this,tr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ro.prototype.create)}}class Ro{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},o=`${this.service}/${e}`,a=this.errors[e],u=a?NA(a,r):"Error",h=`${this.serviceName}: ${u} (${o}).`;return new tr(o,h,r)}}function NA(n,e){return n.replace(DA,(t,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const DA=/\{\$([^}]+)}/g;function OA(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ss(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const o of t){if(!r.includes(o))return!1;const a=n[o],u=e[o];if(pv(a)&&pv(u)){if(!Ss(a,u))return!1}else if(a!==u)return!1}for(const o of r)if(!t.includes(o))return!1;return!0}function pv(n){return n!==null&&typeof n=="object"}/**
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
 */function ou(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function VA(n,e){const t=new MA(n,e);return t.subscribe.bind(t)}class MA{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let o;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");LA(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:r},o.next===void 0&&(o.next=Cf),o.error===void 0&&(o.error=Cf),o.complete===void 0&&(o.complete=Cf);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function LA(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Cf(){}/**
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
 */const FA=1e3,UA=2,jA=14400*1e3,zA=.5;function mv(n,e=FA,t=UA){const r=e*Math.pow(t,n),o=Math.round(zA*r*(Math.random()-.5)*2);return Math.min(jA,r+o)}/**
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
 */function dt(n){return n&&n._delegate?n._delegate:n}class er{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ho="[DEFAULT]";/**
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
 */class BA{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new TA;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(WA(e))try{this.getOrInitializeService({instanceIdentifier:ho})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:o});r.resolve(a)}catch{}}}}clearInstance(e=ho){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ho){return this.instances.has(e)}getOptions(e=ho){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,u]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(a);r===h&&u.resolve(o)}return o}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(r)??new Set;o.add(e),this.onInitCallbacks.set(r,o);const a=this.instances.get(r);return a&&e(a,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const o of r)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$A(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ho){return this.component?this.component.multipleInstances?e:ho:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $A(n){return n===ho?void 0:n}function WA(n){return n.instantiationMode==="EAGER"}/**
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
 */class qA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new BA(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Fe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Fe||(Fe={}));const HA={debug:Fe.DEBUG,verbose:Fe.VERBOSE,info:Fe.INFO,warn:Fe.WARN,error:Fe.ERROR,silent:Fe.SILENT},GA=Fe.INFO,KA={[Fe.DEBUG]:"log",[Fe.VERBOSE]:"log",[Fe.INFO]:"info",[Fe.WARN]:"warn",[Fe.ERROR]:"error"},QA=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),o=KA[e];if(o)console[o](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Id{constructor(e){this.name=e,this._logLevel=GA,this._logHandler=QA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?HA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Fe.DEBUG,...e),this._logHandler(this,Fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Fe.VERBOSE,...e),this._logHandler(this,Fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Fe.INFO,...e),this._logHandler(this,Fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Fe.WARN,...e),this._logHandler(this,Fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Fe.ERROR,...e),this._logHandler(this,Fe.ERROR,...e)}}const YA=(n,e)=>e.some(t=>n instanceof t);let gv,yv;function XA(){return gv||(gv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function JA(){return yv||(yv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ow=new WeakMap,Zf=new WeakMap,Vw=new WeakMap,kf=new WeakMap,Lp=new WeakMap;function ZA(n){const e=new Promise((t,r)=>{const o=()=>{n.removeEventListener("success",a),n.removeEventListener("error",u)},a=()=>{t(mi(n.result)),o()},u=()=>{r(n.error),o()};n.addEventListener("success",a),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&Ow.set(t,n)}).catch(()=>{}),Lp.set(e,n),e}function eR(n){if(Zf.has(n))return;const e=new Promise((t,r)=>{const o=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",u),n.removeEventListener("abort",u)},a=()=>{t(),o()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",a),n.addEventListener("error",u),n.addEventListener("abort",u)});Zf.set(n,e)}let ep={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Zf.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Vw.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return mi(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function tR(n){ep=n(ep)}function nR(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Pf(this),e,...t);return Vw.set(r,e.sort?e.sort():[e]),mi(r)}:JA().includes(n)?function(...e){return n.apply(Pf(this),e),mi(Ow.get(this))}:function(...e){return mi(n.apply(Pf(this),e))}}function rR(n){return typeof n=="function"?nR(n):(n instanceof IDBTransaction&&eR(n),YA(n,XA())?new Proxy(n,ep):n)}function mi(n){if(n instanceof IDBRequest)return ZA(n);if(kf.has(n))return kf.get(n);const e=rR(n);return e!==n&&(kf.set(n,e),Lp.set(e,n)),e}const Pf=n=>Lp.get(n);function Mw(n,e,{blocked:t,upgrade:r,blocking:o,terminated:a}={}){const u=indexedDB.open(n,e),h=mi(u);return r&&u.addEventListener("upgradeneeded",p=>{r(mi(u.result),p.oldVersion,p.newVersion,mi(u.transaction),p)}),t&&u.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),h.then(p=>{a&&p.addEventListener("close",()=>a()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),h}const sR=["get","getKey","getAll","getAllKeys","count"],iR=["put","add","delete","clear"],xf=new Map;function vv(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(xf.get(e))return xf.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,o=iR.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(o||sR.includes(t)))return;const a=async function(u,...h){const p=this.transaction(u,o?"readwrite":"readonly");let y=p.store;return r&&(y=y.index(h.shift())),(await Promise.all([y[t](...h),o&&p.done]))[0]};return xf.set(e,a),a}tR(n=>({...n,get:(e,t,r)=>vv(e,t)||n.get(e,t,r),has:(e,t)=>!!vv(e,t)||n.has(e,t)}));/**
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
 */class oR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(aR(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function aR(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const tp="@firebase/app",_v="0.14.8";/**
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
 */const As=new Id("@firebase/app"),lR="@firebase/app-compat",uR="@firebase/analytics-compat",cR="@firebase/analytics",dR="@firebase/app-check-compat",hR="@firebase/app-check",fR="@firebase/auth",pR="@firebase/auth-compat",mR="@firebase/database",gR="@firebase/data-connect",yR="@firebase/database-compat",vR="@firebase/functions",_R="@firebase/functions-compat",wR="@firebase/installations",ER="@firebase/installations-compat",TR="@firebase/messaging",IR="@firebase/messaging-compat",SR="@firebase/performance",AR="@firebase/performance-compat",RR="@firebase/remote-config",CR="@firebase/remote-config-compat",kR="@firebase/storage",PR="@firebase/storage-compat",xR="@firebase/firestore",bR="@firebase/ai",NR="@firebase/firestore-compat",DR="firebase",OR="12.9.0";/**
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
 */const np="[DEFAULT]",VR={[tp]:"fire-core",[lR]:"fire-core-compat",[cR]:"fire-analytics",[uR]:"fire-analytics-compat",[hR]:"fire-app-check",[dR]:"fire-app-check-compat",[fR]:"fire-auth",[pR]:"fire-auth-compat",[mR]:"fire-rtdb",[gR]:"fire-data-connect",[yR]:"fire-rtdb-compat",[vR]:"fire-fn",[_R]:"fire-fn-compat",[wR]:"fire-iid",[ER]:"fire-iid-compat",[TR]:"fire-fcm",[IR]:"fire-fcm-compat",[SR]:"fire-perf",[AR]:"fire-perf-compat",[RR]:"fire-rc",[CR]:"fire-rc-compat",[kR]:"fire-gcs",[PR]:"fire-gcs-compat",[xR]:"fire-fst",[NR]:"fire-fst-compat",[bR]:"fire-vertex","fire-js":"fire-js",[DR]:"fire-js-all"};/**
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
 */const Jc=new Map,MR=new Map,rp=new Map;function wv(n,e){try{n.container.addComponent(e)}catch(t){As.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function gr(n){const e=n.name;if(rp.has(e))return As.debug(`There were multiple attempts to register component ${e}.`),!1;rp.set(e,n);for(const t of Jc.values())wv(t,n);for(const t of MR.values())wv(t,n);return!0}function xi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Zn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const LR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gi=new Ro("app","Firebase",LR);/**
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
 */class FR{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new er("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gi.create("app-deleted",{appName:this._name})}}/**
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
 */const Co=OR;function Lw(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:np,automaticDataCollectionEnabled:!0,...e},o=r.name;if(typeof o!="string"||!o)throw gi.create("bad-app-name",{appName:String(o)});if(t||(t=xw()),!t)throw gi.create("no-options");const a=Jc.get(o);if(a){if(Ss(t,a.options)&&Ss(r,a.config))return a;throw gi.create("duplicate-app",{appName:o})}const u=new qA(o);for(const p of rp.values())u.addComponent(p);const h=new FR(t,r,u);return Jc.set(o,h),h}function Sd(n=np){const e=Jc.get(n);if(!e&&n===np&&xw())return Lw();if(!e)throw gi.create("no-app",{appName:n});return e}function In(n,e,t){let r=VR[n]??n;t&&(r+=`-${t}`);const o=r.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const u=[`Unable to register library "${r}" with version "${e}":`];o&&u.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),As.warn(u.join(" "));return}gr(new er(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const UR="firebase-heartbeat-database",jR=1,Xl="firebase-heartbeat-store";let bf=null;function Fw(){return bf||(bf=Mw(UR,jR,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Xl)}catch(t){console.warn(t)}}}}).catch(n=>{throw gi.create("idb-open",{originalErrorMessage:n.message})})),bf}async function zR(n){try{const t=(await Fw()).transaction(Xl),r=await t.objectStore(Xl).get(Uw(n));return await t.done,r}catch(e){if(e instanceof tr)As.warn(e.message);else{const t=gi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});As.warn(t.message)}}}async function Ev(n,e){try{const r=(await Fw()).transaction(Xl,"readwrite");await r.objectStore(Xl).put(e,Uw(n)),await r.done}catch(t){if(t instanceof tr)As.warn(t.message);else{const r=gi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});As.warn(r.message)}}}function Uw(n){return`${n.name}!${n.options.appId}`}/**
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
 */const BR=1024,$R=30;class WR{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new HR(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Tv();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:o}),this._heartbeatsCache.heartbeats.length>$R){const u=GR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){As.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Tv(),{heartbeatsToSend:r,unsentEntries:o}=qR(this._heartbeatsCache.heartbeats),a=Xc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return As.warn(t),""}}}function Tv(){return new Date().toISOString().substring(0,10)}function qR(n,e=BR){const t=[];let r=n.slice();for(const o of n){const a=t.find(u=>u.agent===o.agent);if(a){if(a.dates.push(o.date),Iv(t)>e){a.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Iv(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class HR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vp()?Mp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await zR(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ev(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ev(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Iv(n){return Xc(JSON.stringify({version:2,heartbeats:n})).length}function GR(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function KR(n){gr(new er("platform-logger",e=>new oR(e),"PRIVATE")),gr(new er("heartbeat",e=>new WR(e),"PRIVATE")),In(tp,_v,n),In(tp,_v,"esm2020"),In("fire-js","")}KR("");var QR="firebase",YR="12.9.0";/**
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
 */In(QR,YR,"app");const jw="@firebase/installations",Fp="0.6.19";/**
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
 */const zw=1e4,Bw=`w:${Fp}`,$w="FIS_v2",XR="https://firebaseinstallations.googleapis.com/v1",JR=3600*1e3,ZR="installations",eC="Installations";/**
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
 */const tC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},yo=new Ro(ZR,eC,tC);function Ww(n){return n instanceof tr&&n.code.includes("request-failed")}/**
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
 */function qw({projectId:n}){return`${XR}/projects/${n}/installations`}function Hw(n){return{token:n.token,requestStatus:2,expiresIn:rC(n.expiresIn),creationTime:Date.now()}}async function Gw(n,e){const r=(await e.json()).error;return yo.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Kw({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function nC(n,{refreshToken:e}){const t=Kw(n);return t.append("Authorization",sC(e)),t}async function Qw(n){const e=await n();return e.status>=500&&e.status<600?n():e}function rC(n){return Number(n.replace("s","000"))}function sC(n){return`${$w} ${n}`}/**
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
 */async function iC({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=qw(n),o=Kw(n),a=e.getImmediate({optional:!0});if(a){const y=await a.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const u={fid:t,authVersion:$w,appId:n.appId,sdkVersion:Bw},h={method:"POST",headers:o,body:JSON.stringify(u)},p=await Qw(()=>fetch(r,h));if(p.ok){const y=await p.json();return{fid:y.fid||t,registrationStatus:2,refreshToken:y.refreshToken,authToken:Hw(y.authToken)}}else throw await Gw("Create Installation",p)}/**
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
 */function Yw(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function oC(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const aC=/^[cdef][\w-]{21}$/,sp="";function lC(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=uC(n);return aC.test(t)?t:sp}catch{return sp}}function uC(n){return oC(n).substr(0,22)}/**
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
 */function Ad(n){return`${n.appName}!${n.appId}`}/**
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
 */const Xw=new Map;function Jw(n,e){const t=Ad(n);Zw(t,e),cC(t,e)}function Zw(n,e){const t=Xw.get(n);if(t)for(const r of t)r(e)}function cC(n,e){const t=dC();t&&t.postMessage({key:n,fid:e}),hC()}let fo=null;function dC(){return!fo&&"BroadcastChannel"in self&&(fo=new BroadcastChannel("[Firebase] FID Change"),fo.onmessage=n=>{Zw(n.data.key,n.data.fid)}),fo}function hC(){Xw.size===0&&fo&&(fo.close(),fo=null)}/**
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
 */const fC="firebase-installations-database",pC=1,vo="firebase-installations-store";let Nf=null;function Up(){return Nf||(Nf=Mw(fC,pC,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(vo)}}})),Nf}async function Zc(n,e){const t=Ad(n),o=(await Up()).transaction(vo,"readwrite"),a=o.objectStore(vo),u=await a.get(t);return await a.put(e,t),await o.done,(!u||u.fid!==e.fid)&&Jw(n,e.fid),e}async function eE(n){const e=Ad(n),r=(await Up()).transaction(vo,"readwrite");await r.objectStore(vo).delete(e),await r.done}async function Rd(n,e){const t=Ad(n),o=(await Up()).transaction(vo,"readwrite"),a=o.objectStore(vo),u=await a.get(t),h=e(u);return h===void 0?await a.delete(t):await a.put(h,t),await o.done,h&&(!u||u.fid!==h.fid)&&Jw(n,h.fid),h}/**
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
 */async function jp(n){let e;const t=await Rd(n.appConfig,r=>{const o=mC(r),a=gC(n,o);return e=a.registrationPromise,a.installationEntry});return t.fid===sp?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function mC(n){const e=n||{fid:lC(),registrationStatus:0};return tE(e)}function gC(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(yo.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=yC(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:vC(n)}:{installationEntry:e}}async function yC(n,e){try{const t=await iC(n,e);return Zc(n.appConfig,t)}catch(t){throw Ww(t)&&t.customData.serverCode===409?await eE(n.appConfig):await Zc(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function vC(n){let e=await Sv(n.appConfig);for(;e.registrationStatus===1;)await Yw(100),e=await Sv(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await jp(n);return r||t}return e}function Sv(n){return Rd(n,e=>{if(!e)throw yo.create("installation-not-found");return tE(e)})}function tE(n){return _C(n)?{fid:n.fid,registrationStatus:0}:n}function _C(n){return n.registrationStatus===1&&n.registrationTime+zw<Date.now()}/**
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
 */async function wC({appConfig:n,heartbeatServiceProvider:e},t){const r=EC(n,t),o=nC(n,t),a=e.getImmediate({optional:!0});if(a){const y=await a.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const u={installation:{sdkVersion:Bw,appId:n.appId}},h={method:"POST",headers:o,body:JSON.stringify(u)},p=await Qw(()=>fetch(r,h));if(p.ok){const y=await p.json();return Hw(y)}else throw await Gw("Generate Auth Token",p)}function EC(n,{fid:e}){return`${qw(n)}/${e}/authTokens:generate`}/**
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
 */async function zp(n,e=!1){let t;const r=await Rd(n.appConfig,a=>{if(!nE(a))throw yo.create("not-registered");const u=a.authToken;if(!e&&SC(u))return a;if(u.requestStatus===1)return t=TC(n,e),a;{if(!navigator.onLine)throw yo.create("app-offline");const h=RC(a);return t=IC(n,h),h}});return t?await t:r.authToken}async function TC(n,e){let t=await Av(n.appConfig);for(;t.authToken.requestStatus===1;)await Yw(100),t=await Av(n.appConfig);const r=t.authToken;return r.requestStatus===0?zp(n,e):r}function Av(n){return Rd(n,e=>{if(!nE(e))throw yo.create("not-registered");const t=e.authToken;return CC(t)?{...e,authToken:{requestStatus:0}}:e})}async function IC(n,e){try{const t=await wC(n,e),r={...e,authToken:t};return await Zc(n.appConfig,r),t}catch(t){if(Ww(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await eE(n.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Zc(n.appConfig,r)}throw t}}function nE(n){return n!==void 0&&n.registrationStatus===2}function SC(n){return n.requestStatus===2&&!AC(n)}function AC(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+JR}function RC(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function CC(n){return n.requestStatus===1&&n.requestTime+zw<Date.now()}/**
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
 */async function kC(n){const e=n,{installationEntry:t,registrationPromise:r}=await jp(e);return r?r.catch(console.error):zp(e).catch(console.error),t.fid}/**
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
 */async function PC(n,e=!1){const t=n;return await xC(t),(await zp(t,e)).token}async function xC(n){const{registrationPromise:e}=await jp(n);e&&await e}/**
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
 */function bC(n){if(!n||!n.options)throw Df("App Configuration");if(!n.name)throw Df("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Df(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Df(n){return yo.create("missing-app-config-values",{valueName:n})}/**
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
 */const rE="installations",NC="installations-internal",DC=n=>{const e=n.getProvider("app").getImmediate(),t=bC(e),r=xi(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},OC=n=>{const e=n.getProvider("app").getImmediate(),t=xi(e,rE).getImmediate();return{getId:()=>kC(t),getToken:o=>PC(t,o)}};function VC(){gr(new er(rE,DC,"PUBLIC")),gr(new er(NC,OC,"PRIVATE"))}VC();In(jw,Fp);In(jw,Fp,"esm2020");/**
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
 */const ed="analytics",MC="firebase_id",LC="origin",FC=60*1e3,UC="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Bp="https://www.googletagmanager.com/gtag/js";/**
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
 */const hn=new Id("@firebase/analytics");/**
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
 */const jC={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ln=new Ro("analytics","Analytics",jC);/**
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
 */function zC(n){if(!n.startsWith(Bp)){const e=Ln.create("invalid-gtag-resource",{gtagURL:n});return hn.warn(e.message),""}return n}function sE(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function BC(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function $C(n,e){const t=BC("firebase-js-sdk-policy",{createScriptURL:zC}),r=document.createElement("script"),o=`${Bp}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(o):o,r.async=!0,document.head.appendChild(r)}function WC(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function qC(n,e,t,r,o,a){const u=r[o];try{if(u)await e[u];else{const p=(await sE(t)).find(y=>y.measurementId===o);p&&await e[p.appId]}}catch(h){hn.error(h)}n("config",o,a)}async function HC(n,e,t,r,o){try{let a=[];if(o&&o.send_to){let u=o.send_to;Array.isArray(u)||(u=[u]);const h=await sE(t);for(const p of u){const y=h.find(E=>E.measurementId===p),_=y&&e[y.appId];if(_)a.push(_);else{a=[];break}}}a.length===0&&(a=Object.values(e)),await Promise.all(a),n("event",r,o||{})}catch(a){hn.error(a)}}function GC(n,e,t,r){async function o(a,...u){try{if(a==="event"){const[h,p]=u;await HC(n,e,t,h,p)}else if(a==="config"){const[h,p]=u;await qC(n,e,t,r,h,p)}else if(a==="consent"){const[h,p]=u;n("consent",h,p)}else if(a==="get"){const[h,p,y]=u;n("get",h,p,y)}else if(a==="set"){const[h]=u;n("set",h)}else n(a,...u)}catch(h){hn.error(h)}}return o}function KC(n,e,t,r,o){let a=function(...u){window[r].push(arguments)};return window[o]&&typeof window[o]=="function"&&(a=window[o]),window[o]=GC(a,n,e,t),{gtagCore:a,wrappedGtag:window[o]}}function QC(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Bp)&&t.src.includes(n))return t;return null}/**
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
 */const YC=30,XC=1e3;class JC{constructor(e={},t=XC){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const iE=new JC;function ZC(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function ek(n){var u;const{appId:e,apiKey:t}=n,r={method:"GET",headers:ZC(t)},o=UC.replace("{app-id}",e),a=await fetch(o,r);if(a.status!==200&&a.status!==304){let h="";try{const p=await a.json();(u=p.error)!=null&&u.message&&(h=p.error.message)}catch{}throw Ln.create("config-fetch-failed",{httpStatus:a.status,responseMessage:h})}return a.json()}async function tk(n,e=iE,t){const{appId:r,apiKey:o,measurementId:a}=n.options;if(!r)throw Ln.create("no-app-id");if(!o){if(a)return{measurementId:a,appId:r};throw Ln.create("no-api-key")}const u=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},h=new sk;return setTimeout(async()=>{h.abort()},FC),oE({appId:r,apiKey:o,measurementId:a},u,h,e)}async function oE(n,{throttleEndTimeMillis:e,backoffCount:t},r,o=iE){var h;const{appId:a,measurementId:u}=n;try{await nk(r,e)}catch(p){if(u)return hn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:a,measurementId:u};throw p}try{const p=await ek(n);return o.deleteThrottleMetadata(a),p}catch(p){const y=p;if(!rk(y)){if(o.deleteThrottleMetadata(a),u)return hn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:a,measurementId:u};throw p}const _=Number((h=y==null?void 0:y.customData)==null?void 0:h.httpStatus)===503?mv(t,o.intervalMillis,YC):mv(t,o.intervalMillis),E={throttleEndTimeMillis:Date.now()+_,backoffCount:t+1};return o.setThrottleMetadata(a,E),hn.debug(`Calling attemptFetch again in ${_} millis`),oE(n,E,r,o)}}function nk(n,e){return new Promise((t,r)=>{const o=Math.max(e-Date.now(),0),a=setTimeout(t,o);n.addEventListener(()=>{clearTimeout(a),r(Ln.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function rk(n){if(!(n instanceof tr)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class sk{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function ik(n,e,t,r,o){if(o&&o.global){n("event",t,r);return}else{const a=await e,u={...r,send_to:a};n("event",t,u)}}async function ok(n,e,t,r){if(r&&r.global){const o={};for(const a of Object.keys(t))o[`user_properties.${a}`]=t[a];return n("set",o),Promise.resolve()}else{const o=await e;n("config",o,{update:!0,user_properties:t})}}/**
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
 */async function ak(){if(Vp())try{await Mp()}catch(n){return hn.warn(Ln.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return hn.warn(Ln.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function lk(n,e,t,r,o,a,u){const h=tk(n);h.then(T=>{t[T.measurementId]=T.appId,n.options.measurementId&&T.measurementId!==n.options.measurementId&&hn.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${T.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(T=>hn.error(T)),e.push(h);const p=ak().then(T=>{if(T)return r.getId()}),[y,_]=await Promise.all([h,p]);QC(a)||$C(a,y.measurementId),o("js",new Date);const E=(u==null?void 0:u.config)??{};return E[LC]="firebase",E.update=!0,_!=null&&(E[MC]=_),o("config",y.measurementId,E),y.measurementId}/**
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
 */class uk{constructor(e){this.app=e}_delete(){return delete Ia[this.app.options.appId],Promise.resolve()}}let Ia={},Rv=[];const Cv={};let Of="dataLayer",ck="gtag",kv,$p,Pv=!1;function dk(){const n=[];if(Op()&&n.push("This is a browser extension environment."),Dw()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,o)=>`(${o+1}) ${r}`).join(" "),t=Ln.create("invalid-analytics-context",{errorInfo:e});hn.warn(t.message)}}function hk(n,e,t){dk();const r=n.options.appId;if(!r)throw Ln.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)hn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ln.create("no-api-key");if(Ia[r]!=null)throw Ln.create("already-exists",{id:r});if(!Pv){WC(Of);const{wrappedGtag:a,gtagCore:u}=KC(Ia,Rv,Cv,Of,ck);$p=a,kv=u,Pv=!0}return Ia[r]=lk(n,Rv,Cv,e,kv,Of,t),new uk(n)}function fk(n=Sd()){n=dt(n);const e=xi(n,ed);return e.isInitialized()?e.getImmediate():pk(n)}function pk(n,e={}){const t=xi(n,ed);if(t.isInitialized()){const o=t.getImmediate();if(Ss(e,t.getOptions()))return o;throw Ln.create("already-initialized")}return t.initialize({options:e})}async function mk(){if(Op()||!Dw()||!Vp())return!1;try{return await Mp()}catch{return!1}}function gk(n,e,t){n=dt(n),ok($p,Ia[n.app.options.appId],e,t).catch(r=>hn.error(r))}function yk(n,e,t,r){n=dt(n),ik($p,Ia[n.app.options.appId],e,t,r).catch(o=>hn.error(o))}const xv="@firebase/analytics",bv="0.10.19";function vk(){gr(new er(ed,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return hk(r,o,t)},"PUBLIC")),gr(new er("analytics-internal",n,"PRIVATE")),In(xv,bv),In(xv,bv,"esm2020");function n(e){try{const t=e.getProvider(ed).getImmediate();return{logEvent:(r,o,a)=>yk(t,r,o,a),setUserProperties:(r,o)=>gk(t,r,o)}}catch(t){throw Ln.create("interop-component-reg-failed",{reason:t})}}}vk();function aE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _k=aE,lE=new Ro("auth","Firebase",aE());/**
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
 */const td=new Id("@firebase/auth");function wk(n,...e){td.logLevel<=Fe.WARN&&td.warn(`Auth (${Co}): ${n}`,...e)}function Uc(n,...e){td.logLevel<=Fe.ERROR&&td.error(`Auth (${Co}): ${n}`,...e)}/**
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
 */function Rs(n,...e){throw Wp(n,...e)}function Kr(n,...e){return Wp(n,...e)}function uE(n,e,t){const r={..._k(),[e]:t};return new Ro("auth","Firebase",r).create(e,{appName:n.name})}function yi(n){return uE(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Wp(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return lE.create(n,...e)}function ke(n,e,...t){if(!n)throw Wp(e,...t)}function Es(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Uc(e),new Error(e)}function Cs(n,e){n||Es(e)}/**
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
 */function ip(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Ek(){return Nv()==="http:"||Nv()==="https:"}function Nv(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function Tk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ek()||Op()||"connection"in navigator)?navigator.onLine:!0}function Ik(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class au{constructor(e,t){this.shortDelay=e,this.longDelay=t,Cs(t>e,"Short delay should be less than long delay!"),this.isMobile=AA()||kA()}get(){return Tk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function qp(n,e){Cs(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class cE{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Es("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Es("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Es("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Sk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Ak=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Rk=new au(3e4,6e4);function Cd(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Fa(n,e,t,r,o={}){return dE(n,o,async()=>{let a={},u={};r&&(e==="GET"?u=r:a={body:JSON.stringify(r)});const h=ou({key:n.config.apiKey,...u}).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y={method:e,headers:p,...a};return CA()||(y.referrerPolicy="no-referrer"),n.emulatorConfig&&Pi(n.emulatorConfig.host)&&(y.credentials="include"),cE.fetch()(await fE(n,n.config.apiHost,t,h),y)})}async function dE(n,e,t){n._canInitEmulator=!1;const r={...Sk,...e};try{const o=new Ck(n),a=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw Ic(n,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const h=a.ok?u.errorMessage:u.error.message,[p,y]=h.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ic(n,"credential-already-in-use",u);if(p==="EMAIL_EXISTS")throw Ic(n,"email-already-in-use",u);if(p==="USER_DISABLED")throw Ic(n,"user-disabled",u);const _=r[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw uE(n,_,y);Rs(n,_)}}catch(o){if(o instanceof tr)throw o;Rs(n,"network-request-failed",{message:String(o)})}}async function hE(n,e,t,r,o={}){const a=await Fa(n,e,t,r,o);return"mfaPendingCredential"in a&&Rs(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function fE(n,e,t,r){const o=`${e}${t}?${r}`,a=n,u=a.config.emulator?qp(n.config,o):`${n.config.apiScheme}://${o}`;return Ak.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}class Ck{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Kr(this.auth,"network-request-failed")),Rk.get())})}}function Ic(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const o=Kr(n,e,r);return o.customData._tokenResponse=t,o}/**
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
 */async function kk(n,e){return Fa(n,"POST","/v1/accounts:delete",e)}async function nd(n,e){return Fa(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function $l(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Pk(n,e=!1){const t=dt(n),r=await t.getIdToken(e),o=Hp(r);ke(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const a=typeof o.firebase=="object"?o.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:o,token:r,authTime:$l(Vf(o.auth_time)),issuedAtTime:$l(Vf(o.iat)),expirationTime:$l(Vf(o.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Vf(n){return Number(n)*1e3}function Hp(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Uc("JWT malformed, contained fewer than 3 sections"),null;try{const o=Cw(t);return o?JSON.parse(o):(Uc("Failed to decode base64 JWT payload"),null)}catch(o){return Uc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Dv(n){const e=Hp(n);return ke(e,"internal-error"),ke(typeof e.exp<"u","internal-error"),ke(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Jl(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof tr&&xk(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function xk({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class bk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class op{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=$l(this.lastLoginAt),this.creationTime=$l(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function rd(n){var E;const e=n.auth,t=await n.getIdToken(),r=await Jl(n,nd(e,{idToken:t}));ke(r==null?void 0:r.users.length,e,"internal-error");const o=r.users[0];n._notifyReloadListener(o);const a=(E=o.providerUserInfo)!=null&&E.length?pE(o.providerUserInfo):[],u=Dk(n.providerData,a),h=n.isAnonymous,p=!(n.email&&o.passwordHash)&&!(u!=null&&u.length),y=h?p:!1,_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new op(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(n,_)}async function Nk(n){const e=dt(n);await rd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Dk(n,e){return[...n.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function pE(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function Ok(n,e){const t=await dE(n,{},async()=>{const r=ou({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:a}=n.config,u=await fE(n,o,"/v1/token",`key=${a}`),h=await n._getAdditionalHeaders();h["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:h,body:r};return n.emulatorConfig&&Pi(n.emulatorConfig.host)&&(p.credentials="include"),cE.fetch()(u,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Vk(n,e){return Fa(n,"POST","/v2/accounts:revokeToken",Cd(n,e))}/**
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
 */class Sa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ke(e.idToken,"internal-error"),ke(typeof e.idToken<"u","internal-error"),ke(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Dv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ke(e.length!==0,"internal-error");const t=Dv(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ke(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:o,expiresIn:a}=await Ok(e,t);this.updateTokensAndExpiration(r,o,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:o,expirationTime:a}=t,u=new Sa;return r&&(ke(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),o&&(ke(typeof o=="string","internal-error",{appName:e}),u.accessToken=o),a&&(ke(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Sa,this.toJSON())}_performRefresh(){return Es("not implemented")}}/**
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
 */function oi(n,e){ke(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class pr{constructor({uid:e,auth:t,stsTokenManager:r,...o}){this.providerId="firebase",this.proactiveRefresh=new bk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new op(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Jl(this,this.stsTokenManager.getToken(this.auth,e));return ke(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Pk(this,e)}reload(){return Nk(this)}_assign(e){this!==e&&(ke(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new pr({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ke(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await rd(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Zn(this.auth.app))return Promise.reject(yi(this.auth));const e=await this.getIdToken();return await Jl(this,kk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,o=t.email??void 0,a=t.phoneNumber??void 0,u=t.photoURL??void 0,h=t.tenantId??void 0,p=t._redirectEventId??void 0,y=t.createdAt??void 0,_=t.lastLoginAt??void 0,{uid:E,emailVerified:T,isAnonymous:O,providerData:q,stsTokenManager:V}=t;ke(E&&V,e,"internal-error");const U=Sa.fromJSON(this.name,V);ke(typeof E=="string",e,"internal-error"),oi(r,e.name),oi(o,e.name),ke(typeof T=="boolean",e,"internal-error"),ke(typeof O=="boolean",e,"internal-error"),oi(a,e.name),oi(u,e.name),oi(h,e.name),oi(p,e.name),oi(y,e.name),oi(_,e.name);const Z=new pr({uid:E,auth:e,email:o,emailVerified:T,displayName:r,isAnonymous:O,photoURL:u,phoneNumber:a,tenantId:h,stsTokenManager:U,createdAt:y,lastLoginAt:_});return q&&Array.isArray(q)&&(Z.providerData=q.map(te=>({...te}))),p&&(Z._redirectEventId=p),Z}static async _fromIdTokenResponse(e,t,r=!1){const o=new Sa;o.updateFromServerResponse(t);const a=new pr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await rd(a),a}static async _fromGetAccountInfoResponse(e,t,r){const o=t.users[0];ke(o.localId!==void 0,"internal-error");const a=o.providerUserInfo!==void 0?pE(o.providerUserInfo):[],u=!(o.email&&o.passwordHash)&&!(a!=null&&a.length),h=new Sa;h.updateFromIdToken(r);const p=new pr({uid:o.localId,auth:e,stsTokenManager:h,isAnonymous:u}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new op(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(a!=null&&a.length)};return Object.assign(p,y),p}}/**
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
 */const Ov=new Map;function Ts(n){Cs(n instanceof Function,"Expected a class definition");let e=Ov.get(n);return e?(Cs(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ov.set(n,e),e)}/**
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
 */class mE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}mE.type="NONE";const Vv=mE;/**
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
 */function jc(n,e,t){return`firebase:${n}:${e}:${t}`}class Aa{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:o,name:a}=this.auth;this.fullUserKey=jc(this.userKey,o.apiKey,a),this.fullPersistenceKey=jc("persistence",o.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await nd(this.auth,{idToken:e}).catch(()=>{});return t?pr._fromGetAccountInfoResponse(this.auth,t,e):null}return pr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Aa(Ts(Vv),e,r);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let a=o[0]||Ts(Vv);const u=jc(r,e.config.apiKey,e.name);let h=null;for(const y of t)try{const _=await y._get(u);if(_){let E;if(typeof _=="string"){const T=await nd(e,{idToken:_}).catch(()=>{});if(!T)break;E=await pr._fromGetAccountInfoResponse(e,T,_)}else E=pr._fromJSON(e,_);y!==a&&(h=E),a=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!a._shouldAllowMigration||!p.length?new Aa(a,e,r):(a=p[0],h&&await a._set(u,h.toJSON()),await Promise.all(t.map(async y=>{if(y!==a)try{await y._remove(u)}catch{}})),new Aa(a,e,r))}}/**
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
 */function Mv(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_E(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(EE(e))return"Blackberry";if(TE(e))return"Webos";if(yE(e))return"Safari";if((e.includes("chrome/")||vE(e))&&!e.includes("edge/"))return"Chrome";if(wE(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function gE(n=sn()){return/firefox\//i.test(n)}function yE(n=sn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vE(n=sn()){return/crios\//i.test(n)}function _E(n=sn()){return/iemobile/i.test(n)}function wE(n=sn()){return/android/i.test(n)}function EE(n=sn()){return/blackberry/i.test(n)}function TE(n=sn()){return/webos/i.test(n)}function Gp(n=sn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Mk(n=sn()){var e;return Gp(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Lk(){return PA()&&document.documentMode===10}function IE(n=sn()){return Gp(n)||wE(n)||TE(n)||EE(n)||/windows phone/i.test(n)||_E(n)}/**
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
 */function SE(n,e=[]){let t;switch(n){case"Browser":t=Mv(sn());break;case"Worker":t=`${Mv(sn())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Co}/${r}`}/**
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
 */class Fk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((u,h)=>{try{const p=e(a);u(p)}catch(p){h(p)}});r.onAbort=t,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Uk(n,e={}){return Fa(n,"GET","/v2/passwordPolicy",Cd(n,e))}/**
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
 */const jk=6;class zk{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??jk,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,o,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class Bk{constructor(e,t,r,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lv(this),this.idTokenSubscription=new Lv(this),this.beforeStateQueue=new Fk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ts(t)),this._initializationPromise=this.queue(async()=>{var r,o,a;if(!this._deleted&&(this.persistenceManager=await Aa.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)==null?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await nd(this,{idToken:e}),r=await pr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var a;if(Zn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(h,h))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(a=this.redirectUser)==null?void 0:a._redirectEventId,h=r==null?void 0:r._redirectEventId,p=await this.tryRedirectSignIn(e);(!u||u===h)&&(p!=null&&p.user)&&(r=p.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(u){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ke(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await rd(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ik()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Zn(this.app))return Promise.reject(yi(this));const t=e?dt(e):null;return t&&ke(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ke(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Zn(this.app)?Promise.reject(yi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Zn(this.app)?Promise.reject(yi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ts(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Uk(this),t=new zk(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ro("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Vk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ts(e)||this._popupRedirectResolver;ke(t,this,"argument-error"),this.redirectPersistenceManager=await Aa.create(this,[Ts(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,o){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let u=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(ke(h,this,"internal-error"),h.then(()=>{u||a(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,r,o);return()=>{u=!0,p()}}else{const p=e.addObserver(t);return()=>{u=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ke(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=SE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(Zn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&wk(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function kd(n){return dt(n)}class Lv{constructor(e){this.auth=e,this.observer=null,this.addObserver=VA(t=>this.observer=t)}get next(){return ke(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Kp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $k(n){Kp=n}function Wk(n){return Kp.loadJS(n)}function qk(){return Kp.gapiScript}function Hk(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Gk(n,e){const t=xi(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),a=t.getOptions();if(Ss(a,e??{}))return o;Rs(o,"already-initialized")}return t.initialize({options:e})}function Kk(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ts);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Qk(n,e,t){const r=kd(n);ke(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!1,a=AE(e),{host:u,port:h}=Yk(e),p=h===null?"":`:${h}`,y={url:`${a}//${u}${p}/`},_=Object.freeze({host:u,port:h,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!r._canInitEmulator){ke(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ke(Ss(y,r.config.emulator)&&Ss(_,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=y,r.emulatorConfig=_,r.settings.appVerificationDisabledForTesting=!0,Pi(u)?(Np(`${a}//${u}${p}`),Dp("Auth",!0)):Xk()}function AE(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Yk(n){const e=AE(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const a=o[1];return{host:a,port:Fv(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:Fv(u)}}}function Fv(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Xk(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class RE{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Es("not implemented")}_getIdTokenResponse(e){return Es("not implemented")}_linkToIdToken(e,t){return Es("not implemented")}_getReauthenticationResolver(e){return Es("not implemented")}}/**
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
 */async function Ra(n,e){return hE(n,"POST","/v1/accounts:signInWithIdp",Cd(n,e))}/**
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
 */const Jk="http://localhost";class _o extends RE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new _o(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Rs("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o,...a}=t;if(!r||!o)return null;const u=new _o(r,o);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return Ra(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ra(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ra(e,t)}buildRequest(){const e={requestUri:Jk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ou(t)}return e}}/**
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
 */class CE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class lu extends CE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ui extends lu{constructor(){super("facebook.com")}static credential(e){return _o._fromParams({providerId:ui.PROVIDER_ID,signInMethod:ui.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ui.credentialFromTaggedObject(e)}static credentialFromError(e){return ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ui.credential(e.oauthAccessToken)}catch{return null}}}ui.FACEBOOK_SIGN_IN_METHOD="facebook.com";ui.PROVIDER_ID="facebook.com";/**
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
 */class ci extends lu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return _o._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ci.credentialFromTaggedObject(e)}static credentialFromError(e){return ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ci.credential(t,r)}catch{return null}}}ci.GOOGLE_SIGN_IN_METHOD="google.com";ci.PROVIDER_ID="google.com";/**
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
 */class di extends lu{constructor(){super("github.com")}static credential(e){return _o._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return di.credential(e.oauthAccessToken)}catch{return null}}}di.GITHUB_SIGN_IN_METHOD="github.com";di.PROVIDER_ID="github.com";/**
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
 */class hi extends lu{constructor(){super("twitter.com")}static credential(e,t){return _o._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return hi.credential(t,r)}catch{return null}}}hi.TWITTER_SIGN_IN_METHOD="twitter.com";hi.PROVIDER_ID="twitter.com";/**
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
 */async function Zk(n,e){return hE(n,"POST","/v1/accounts:signUp",Cd(n,e))}/**
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
 */class Ei{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,o=!1){const a=await pr._fromIdTokenResponse(e,r,o),u=Uv(r);return new Ei({user:a,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const o=Uv(r);return new Ei({user:e,providerId:o,_tokenResponse:r,operationType:t})}}function Uv(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function e1(n){var o;if(Zn(n.app))return Promise.reject(yi(n));const e=kd(n);if(await e._initializationPromise,(o=e.currentUser)!=null&&o.isAnonymous)return new Ei({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await Zk(e,{returnSecureToken:!0}),r=await Ei._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(r.user),r}/**
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
 */class sd extends tr{constructor(e,t,r,o){super(t.code,t.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,sd.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,o){return new sd(e,t,r,o)}}function kE(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?sd._fromErrorAndOperation(n,a,e,r):a})}async function t1(n,e,t=!1){const r=await Jl(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ei._forOperation(n,"link",r)}/**
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
 */async function n1(n,e,t=!1){const{auth:r}=n;if(Zn(r.app))return Promise.reject(yi(r));const o="reauthenticate";try{const a=await Jl(n,kE(r,o,e,n),t);ke(a.idToken,r,"internal-error");const u=Hp(a.idToken);ke(u,r,"internal-error");const{sub:h}=u;return ke(n.uid===h,r,"user-mismatch"),Ei._forOperation(n,o,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Rs(r,"user-mismatch"),a}}/**
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
 */async function r1(n,e,t=!1){if(Zn(n.app))return Promise.reject(yi(n));const r="signIn",o=await kE(n,r,e),a=await Ei._fromIdTokenResponse(n,r,o);return t||await n._updateCurrentUser(a.user),a}function s1(n,e,t,r){return dt(n).onIdTokenChanged(e,t,r)}function i1(n,e,t){return dt(n).beforeAuthStateChanged(e,t)}const id="__sak";/**
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
 */class PE{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(id,"1"),this.storage.removeItem(id),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const o1=1e3,a1=10;class xE extends PE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=IE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),o=this.localCache[t];r!==o&&e(t,o,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,h,p)=>{this.notifyListeners(u,p)});return}const r=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},a=this.storage.getItem(r);Lk()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,a1):o()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},o1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}xE.type="LOCAL";const l1=xE;/**
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
 */class bE extends PE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}bE.type="SESSION";const NE=bE;/**
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
 */function u1(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Pd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const r=new Pd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:o,data:a}=t.data,u=this.handlersMap[o];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const h=Array.from(u).map(async y=>y(t.origin,a)),p=await u1(h);t.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pd.receivers=[];/**
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
 */function Qp(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class c1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let a,u;return new Promise((h,p)=>{const y=Qp("",20);o.port1.start();const _=setTimeout(()=>{p(new Error("unsupported_event"))},r);u={messageChannel:o,onMessage(E){const T=E;if(T.data.eventId===y)switch(T.data.status){case"ack":clearTimeout(_),a=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),h(T.data.response);break;default:clearTimeout(_),clearTimeout(a),p(new Error("invalid_response"));break}}},this.handlers.add(u),o.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function Qr(){return window}function d1(n){Qr().location.href=n}/**
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
 */function DE(){return typeof Qr().WorkerGlobalScope<"u"&&typeof Qr().importScripts=="function"}async function h1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function f1(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function p1(){return DE()?self:null}/**
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
 */const OE="firebaseLocalStorageDb",m1=1,od="firebaseLocalStorage",VE="fbase_key";class uu{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function xd(n,e){return n.transaction([od],e?"readwrite":"readonly").objectStore(od)}function g1(){const n=indexedDB.deleteDatabase(OE);return new uu(n).toPromise()}function ap(){const n=indexedDB.open(OE,m1);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(od,{keyPath:VE})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(od)?e(r):(r.close(),await g1(),e(await ap()))})})}async function jv(n,e,t){const r=xd(n,!0).put({[VE]:e,value:t});return new uu(r).toPromise()}async function y1(n,e){const t=xd(n,!1).get(e),r=await new uu(t).toPromise();return r===void 0?null:r.value}function zv(n,e){const t=xd(n,!0).delete(e);return new uu(t).toPromise()}const v1=800,_1=3;class ME{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ap(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>_1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return DE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pd._getInstance(p1()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await h1(),!this.activeServiceWorker)return;this.sender=new c1(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||f1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ap();return await jv(e,id,"1"),await zv(e,id),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>jv(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>y1(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>zv(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const a=xd(o,!1).getAll();return new uu(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:a}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(a)&&(this.notifyListeners(o,a),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),v1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ME.type="LOCAL";const w1=ME;new au(3e4,6e4);/**
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
 */function E1(n,e){return e?Ts(e):(ke(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Yp extends RE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ra(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ra(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ra(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function T1(n){return r1(n.auth,new Yp(n),n.bypassAuthState)}function I1(n){const{auth:e,user:t}=n;return ke(t,e,"internal-error"),n1(t,new Yp(n),n.bypassAuthState)}async function S1(n){const{auth:e,user:t}=n;return ke(t,e,"internal-error"),t1(t,new Yp(n),n.bypassAuthState)}/**
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
 */class LE{constructor(e,t,r,o,a=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:o,tenantId:a,error:u,type:h}=e;if(u){this.reject(u);return}const p={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return T1;case"linkViaPopup":case"linkViaRedirect":return S1;case"reauthViaPopup":case"reauthViaRedirect":return I1;default:Rs(this.auth,"internal-error")}}resolve(e){Cs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const A1=new au(2e3,1e4);class Ea extends LE{constructor(e,t,r,o,a){super(e,t,o,a),this.provider=r,this.authWindow=null,this.pollId=null,Ea.currentPopupAction&&Ea.currentPopupAction.cancel(),Ea.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ke(e,this.auth,"internal-error"),e}async onExecution(){Cs(this.filter.length===1,"Popup operations only handle one event");const e=Qp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Kr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Kr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ea.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Kr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,A1.get())};e()}}Ea.currentPopupAction=null;/**
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
 */const R1="pendingRedirect",zc=new Map;class C1 extends LE{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=zc.get(this.auth._key());if(!e){try{const r=await k1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}zc.set(this.auth._key(),e)}return this.bypassAuthState||zc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function k1(n,e){const t=b1(e),r=x1(n);if(!await r._isAvailable())return!1;const o=await r._get(t)==="true";return await r._remove(t),o}function P1(n,e){zc.set(n._key(),e)}function x1(n){return Ts(n._redirectPersistence)}function b1(n){return jc(R1,n.config.apiKey,n.name)}async function N1(n,e,t=!1){if(Zn(n.app))return Promise.reject(yi(n));const r=kd(n),o=E1(r,e),u=await new C1(r,o,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}/**
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
 */const D1=600*1e3;class O1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!V1(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!FE(e)){const o=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(Kr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=D1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bv(e))}saveEventToCache(e){this.cachedEventUids.add(Bv(e)),this.lastProcessedEventTime=Date.now()}}function Bv(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function FE({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function V1(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return FE(n);default:return!1}}/**
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
 */async function M1(n,e={}){return Fa(n,"GET","/v1/projects",e)}/**
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
 */const L1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,F1=/^https?/;async function U1(n){if(n.config.emulator)return;const{authorizedDomains:e}=await M1(n);for(const t of e)try{if(j1(t))return}catch{}Rs(n,"unauthorized-domain")}function j1(n){const e=ip(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!F1.test(t))return!1;if(L1.test(n))return r===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
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
 */const z1=new au(3e4,6e4);function $v(){const n=Qr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function B1(n){return new Promise((e,t)=>{var o,a,u;function r(){$v(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$v(),t(Kr(n,"network-request-failed"))},timeout:z1.get()})}if((a=(o=Qr().gapi)==null?void 0:o.iframes)!=null&&a.Iframe)e(gapi.iframes.getContext());else if((u=Qr().gapi)!=null&&u.load)r();else{const h=Hk("iframefcb");return Qr()[h]=()=>{gapi.load?r():t(Kr(n,"network-request-failed"))},Wk(`${qk()}?onload=${h}`).catch(p=>t(p))}}).catch(e=>{throw Bc=null,e})}let Bc=null;function $1(n){return Bc=Bc||B1(n),Bc}/**
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
 */const W1=new au(5e3,15e3),q1="__/auth/iframe",H1="emulator/auth/iframe",G1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},K1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Q1(n){const e=n.config;ke(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?qp(e,H1):`https://${n.config.authDomain}/${q1}`,r={apiKey:e.apiKey,appName:n.name,v:Co},o=K1.get(n.config.apiHost);o&&(r.eid=o);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${ou(r).slice(1)}`}async function Y1(n){const e=await $1(n),t=Qr().gapi;return ke(t,n,"internal-error"),e.open({where:document.body,url:Q1(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:G1,dontclear:!0},r=>new Promise(async(o,a)=>{await r.restyle({setHideOnLeave:!1});const u=Kr(n,"network-request-failed"),h=Qr().setTimeout(()=>{a(u)},W1.get());function p(){Qr().clearTimeout(h),o(r)}r.ping(p).then(p,()=>{a(u)})}))}/**
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
 */const X1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},J1=500,Z1=600,eP="_blank",tP="http://localhost";class Wv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nP(n,e,t,r=J1,o=Z1){const a=Math.max((window.screen.availHeight-o)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let h="";const p={...X1,width:r.toString(),height:o.toString(),top:a,left:u},y=sn().toLowerCase();t&&(h=vE(y)?eP:t),gE(y)&&(e=e||tP,p.scrollbars="yes");const _=Object.entries(p).reduce((T,[O,q])=>`${T}${O}=${q},`,"");if(Mk(y)&&h!=="_self")return rP(e||"",h),new Wv(null);const E=window.open(e||"",h,_);ke(E,n,"popup-blocked");try{E.focus()}catch{}return new Wv(E)}function rP(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const sP="__/auth/handler",iP="emulator/auth/handler",oP=encodeURIComponent("fac");async function qv(n,e,t,r,o,a){ke(n.config.authDomain,n,"auth-domain-config-required"),ke(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Co,eventId:o};if(e instanceof CE){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",OA(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,E]of Object.entries({}))u[_]=E}if(e instanceof lu){const _=e.getScopes().filter(E=>E!=="");_.length>0&&(u.scopes=_.join(","))}n.tenantId&&(u.tid=n.tenantId);const h=u;for(const _ of Object.keys(h))h[_]===void 0&&delete h[_];const p=await n._getAppCheckToken(),y=p?`#${oP}=${encodeURIComponent(p)}`:"";return`${aP(n)}?${ou(h).slice(1)}${y}`}function aP({config:n}){return n.emulator?qp(n,iP):`https://${n.authDomain}/${sP}`}/**
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
 */const Mf="webStorageSupport";class lP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=NE,this._completeRedirectFn=N1,this._overrideRedirectResult=P1}async _openPopup(e,t,r,o){var u;Cs((u=this.eventManagers[e._key()])==null?void 0:u.manager,"_initialize() not called before _openPopup()");const a=await qv(e,t,r,ip(),o);return nP(e,a,Qp())}async _openRedirect(e,t,r,o){await this._originValidation(e);const a=await qv(e,t,r,ip(),o);return d1(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:a}=this.eventManagers[t];return o?Promise.resolve(o):(Cs(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Y1(e),r=new O1(e);return t.register("authEvent",o=>(ke(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Mf,{type:Mf},o=>{var u;const a=(u=o==null?void 0:o[0])==null?void 0:u[Mf];a!==void 0&&t(!!a),Rs(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=U1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return IE()||yE()||Gp()}}const uP=lP;var Hv="@firebase/auth",Gv="1.12.0";/**
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
 */class cP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ke(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function dP(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hP(n){gr(new er("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:h}=r.options;ke(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const p={apiKey:u,authDomain:h,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:SE(n)},y=new Bk(r,o,a,p);return Kk(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),gr(new er("auth-internal",e=>{const t=kd(e.getProvider("auth").getImmediate());return(r=>new cP(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),In(Hv,Gv,dP(n)),In(Hv,Gv,"esm2020")}/**
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
 */const fP=300,pP=bw("authIdTokenMaxAge")||fP;let Kv=null;const mP=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>pP)return;const o=t==null?void 0:t.token;Kv!==o&&(Kv=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function gP(n=Sd()){const e=xi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Gk(n,{popupRedirectResolver:uP,persistence:[w1,l1,NE]}),r=bw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const u=mP(a.toString());i1(t,u,()=>u(t.currentUser)),s1(t,h=>u(h))}}const o=kw("auth");return o&&Qk(t,`http://${o}`),t}function yP(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}$k({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=o=>{const a=Kr("internal-error");a.customData=o,t(a)},r.type="text/javascript",r.charset="UTF-8",yP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hP("Browser");var Qv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vi,UE;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,I){function C(){}C.prototype=I.prototype,R.F=I.prototype,R.prototype=new C,R.prototype.constructor=R,R.D=function(N,b,F){for(var P=Array(arguments.length-2),Ge=2;Ge<arguments.length;Ge++)P[Ge-2]=arguments[Ge];return I.prototype[b].apply(N,P)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(R,I,C){C||(C=0);const N=Array(16);if(typeof I=="string")for(var b=0;b<16;++b)N[b]=I.charCodeAt(C++)|I.charCodeAt(C++)<<8|I.charCodeAt(C++)<<16|I.charCodeAt(C++)<<24;else for(b=0;b<16;++b)N[b]=I[C++]|I[C++]<<8|I[C++]<<16|I[C++]<<24;I=R.g[0],C=R.g[1],b=R.g[2];let F=R.g[3],P;P=I+(F^C&(b^F))+N[0]+3614090360&4294967295,I=C+(P<<7&4294967295|P>>>25),P=F+(b^I&(C^b))+N[1]+3905402710&4294967295,F=I+(P<<12&4294967295|P>>>20),P=b+(C^F&(I^C))+N[2]+606105819&4294967295,b=F+(P<<17&4294967295|P>>>15),P=C+(I^b&(F^I))+N[3]+3250441966&4294967295,C=b+(P<<22&4294967295|P>>>10),P=I+(F^C&(b^F))+N[4]+4118548399&4294967295,I=C+(P<<7&4294967295|P>>>25),P=F+(b^I&(C^b))+N[5]+1200080426&4294967295,F=I+(P<<12&4294967295|P>>>20),P=b+(C^F&(I^C))+N[6]+2821735955&4294967295,b=F+(P<<17&4294967295|P>>>15),P=C+(I^b&(F^I))+N[7]+4249261313&4294967295,C=b+(P<<22&4294967295|P>>>10),P=I+(F^C&(b^F))+N[8]+1770035416&4294967295,I=C+(P<<7&4294967295|P>>>25),P=F+(b^I&(C^b))+N[9]+2336552879&4294967295,F=I+(P<<12&4294967295|P>>>20),P=b+(C^F&(I^C))+N[10]+4294925233&4294967295,b=F+(P<<17&4294967295|P>>>15),P=C+(I^b&(F^I))+N[11]+2304563134&4294967295,C=b+(P<<22&4294967295|P>>>10),P=I+(F^C&(b^F))+N[12]+1804603682&4294967295,I=C+(P<<7&4294967295|P>>>25),P=F+(b^I&(C^b))+N[13]+4254626195&4294967295,F=I+(P<<12&4294967295|P>>>20),P=b+(C^F&(I^C))+N[14]+2792965006&4294967295,b=F+(P<<17&4294967295|P>>>15),P=C+(I^b&(F^I))+N[15]+1236535329&4294967295,C=b+(P<<22&4294967295|P>>>10),P=I+(b^F&(C^b))+N[1]+4129170786&4294967295,I=C+(P<<5&4294967295|P>>>27),P=F+(C^b&(I^C))+N[6]+3225465664&4294967295,F=I+(P<<9&4294967295|P>>>23),P=b+(I^C&(F^I))+N[11]+643717713&4294967295,b=F+(P<<14&4294967295|P>>>18),P=C+(F^I&(b^F))+N[0]+3921069994&4294967295,C=b+(P<<20&4294967295|P>>>12),P=I+(b^F&(C^b))+N[5]+3593408605&4294967295,I=C+(P<<5&4294967295|P>>>27),P=F+(C^b&(I^C))+N[10]+38016083&4294967295,F=I+(P<<9&4294967295|P>>>23),P=b+(I^C&(F^I))+N[15]+3634488961&4294967295,b=F+(P<<14&4294967295|P>>>18),P=C+(F^I&(b^F))+N[4]+3889429448&4294967295,C=b+(P<<20&4294967295|P>>>12),P=I+(b^F&(C^b))+N[9]+568446438&4294967295,I=C+(P<<5&4294967295|P>>>27),P=F+(C^b&(I^C))+N[14]+3275163606&4294967295,F=I+(P<<9&4294967295|P>>>23),P=b+(I^C&(F^I))+N[3]+4107603335&4294967295,b=F+(P<<14&4294967295|P>>>18),P=C+(F^I&(b^F))+N[8]+1163531501&4294967295,C=b+(P<<20&4294967295|P>>>12),P=I+(b^F&(C^b))+N[13]+2850285829&4294967295,I=C+(P<<5&4294967295|P>>>27),P=F+(C^b&(I^C))+N[2]+4243563512&4294967295,F=I+(P<<9&4294967295|P>>>23),P=b+(I^C&(F^I))+N[7]+1735328473&4294967295,b=F+(P<<14&4294967295|P>>>18),P=C+(F^I&(b^F))+N[12]+2368359562&4294967295,C=b+(P<<20&4294967295|P>>>12),P=I+(C^b^F)+N[5]+4294588738&4294967295,I=C+(P<<4&4294967295|P>>>28),P=F+(I^C^b)+N[8]+2272392833&4294967295,F=I+(P<<11&4294967295|P>>>21),P=b+(F^I^C)+N[11]+1839030562&4294967295,b=F+(P<<16&4294967295|P>>>16),P=C+(b^F^I)+N[14]+4259657740&4294967295,C=b+(P<<23&4294967295|P>>>9),P=I+(C^b^F)+N[1]+2763975236&4294967295,I=C+(P<<4&4294967295|P>>>28),P=F+(I^C^b)+N[4]+1272893353&4294967295,F=I+(P<<11&4294967295|P>>>21),P=b+(F^I^C)+N[7]+4139469664&4294967295,b=F+(P<<16&4294967295|P>>>16),P=C+(b^F^I)+N[10]+3200236656&4294967295,C=b+(P<<23&4294967295|P>>>9),P=I+(C^b^F)+N[13]+681279174&4294967295,I=C+(P<<4&4294967295|P>>>28),P=F+(I^C^b)+N[0]+3936430074&4294967295,F=I+(P<<11&4294967295|P>>>21),P=b+(F^I^C)+N[3]+3572445317&4294967295,b=F+(P<<16&4294967295|P>>>16),P=C+(b^F^I)+N[6]+76029189&4294967295,C=b+(P<<23&4294967295|P>>>9),P=I+(C^b^F)+N[9]+3654602809&4294967295,I=C+(P<<4&4294967295|P>>>28),P=F+(I^C^b)+N[12]+3873151461&4294967295,F=I+(P<<11&4294967295|P>>>21),P=b+(F^I^C)+N[15]+530742520&4294967295,b=F+(P<<16&4294967295|P>>>16),P=C+(b^F^I)+N[2]+3299628645&4294967295,C=b+(P<<23&4294967295|P>>>9),P=I+(b^(C|~F))+N[0]+4096336452&4294967295,I=C+(P<<6&4294967295|P>>>26),P=F+(C^(I|~b))+N[7]+1126891415&4294967295,F=I+(P<<10&4294967295|P>>>22),P=b+(I^(F|~C))+N[14]+2878612391&4294967295,b=F+(P<<15&4294967295|P>>>17),P=C+(F^(b|~I))+N[5]+4237533241&4294967295,C=b+(P<<21&4294967295|P>>>11),P=I+(b^(C|~F))+N[12]+1700485571&4294967295,I=C+(P<<6&4294967295|P>>>26),P=F+(C^(I|~b))+N[3]+2399980690&4294967295,F=I+(P<<10&4294967295|P>>>22),P=b+(I^(F|~C))+N[10]+4293915773&4294967295,b=F+(P<<15&4294967295|P>>>17),P=C+(F^(b|~I))+N[1]+2240044497&4294967295,C=b+(P<<21&4294967295|P>>>11),P=I+(b^(C|~F))+N[8]+1873313359&4294967295,I=C+(P<<6&4294967295|P>>>26),P=F+(C^(I|~b))+N[15]+4264355552&4294967295,F=I+(P<<10&4294967295|P>>>22),P=b+(I^(F|~C))+N[6]+2734768916&4294967295,b=F+(P<<15&4294967295|P>>>17),P=C+(F^(b|~I))+N[13]+1309151649&4294967295,C=b+(P<<21&4294967295|P>>>11),P=I+(b^(C|~F))+N[4]+4149444226&4294967295,I=C+(P<<6&4294967295|P>>>26),P=F+(C^(I|~b))+N[11]+3174756917&4294967295,F=I+(P<<10&4294967295|P>>>22),P=b+(I^(F|~C))+N[2]+718787259&4294967295,b=F+(P<<15&4294967295|P>>>17),P=C+(F^(b|~I))+N[9]+3951481745&4294967295,R.g[0]=R.g[0]+I&4294967295,R.g[1]=R.g[1]+(b+(P<<21&4294967295|P>>>11))&4294967295,R.g[2]=R.g[2]+b&4294967295,R.g[3]=R.g[3]+F&4294967295}r.prototype.v=function(R,I){I===void 0&&(I=R.length);const C=I-this.blockSize,N=this.C;let b=this.h,F=0;for(;F<I;){if(b==0)for(;F<=C;)o(this,R,F),F+=this.blockSize;if(typeof R=="string"){for(;F<I;)if(N[b++]=R.charCodeAt(F++),b==this.blockSize){o(this,N),b=0;break}}else for(;F<I;)if(N[b++]=R[F++],b==this.blockSize){o(this,N),b=0;break}}this.h=b,this.o+=I},r.prototype.A=function(){var R=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);R[0]=128;for(var I=1;I<R.length-8;++I)R[I]=0;I=this.o*8;for(var C=R.length-8;C<R.length;++C)R[C]=I&255,I/=256;for(this.v(R),R=Array(16),I=0,C=0;C<4;++C)for(let N=0;N<32;N+=8)R[I++]=this.g[C]>>>N&255;return R};function a(R,I){var C=h;return Object.prototype.hasOwnProperty.call(C,R)?C[R]:C[R]=I(R)}function u(R,I){this.h=I;const C=[];let N=!0;for(let b=R.length-1;b>=0;b--){const F=R[b]|0;N&&F==I||(C[b]=F,N=!1)}this.g=C}var h={};function p(R){return-128<=R&&R<128?a(R,function(I){return new u([I|0],I<0?-1:0)}):new u([R|0],R<0?-1:0)}function y(R){if(isNaN(R)||!isFinite(R))return E;if(R<0)return U(y(-R));const I=[];let C=1;for(let N=0;R>=C;N++)I[N]=R/C|0,C*=4294967296;return new u(I,0)}function _(R,I){if(R.length==0)throw Error("number format error: empty string");if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(R.charAt(0)=="-")return U(_(R.substring(1),I));if(R.indexOf("-")>=0)throw Error('number format error: interior "-" character');const C=y(Math.pow(I,8));let N=E;for(let F=0;F<R.length;F+=8){var b=Math.min(8,R.length-F);const P=parseInt(R.substring(F,F+b),I);b<8?(b=y(Math.pow(I,b)),N=N.j(b).add(y(P))):(N=N.j(C),N=N.add(y(P)))}return N}var E=p(0),T=p(1),O=p(16777216);n=u.prototype,n.m=function(){if(V(this))return-U(this).m();let R=0,I=1;for(let C=0;C<this.g.length;C++){const N=this.i(C);R+=(N>=0?N:4294967296+N)*I,I*=4294967296}return R},n.toString=function(R){if(R=R||10,R<2||36<R)throw Error("radix out of range: "+R);if(q(this))return"0";if(V(this))return"-"+U(this).toString(R);const I=y(Math.pow(R,6));var C=this;let N="";for(;;){const b=ie(C,I).g;C=Z(C,b.j(I));let F=((C.g.length>0?C.g[0]:C.h)>>>0).toString(R);if(C=b,q(C))return F+N;for(;F.length<6;)F="0"+F;N=F+N}},n.i=function(R){return R<0?0:R<this.g.length?this.g[R]:this.h};function q(R){if(R.h!=0)return!1;for(let I=0;I<R.g.length;I++)if(R.g[I]!=0)return!1;return!0}function V(R){return R.h==-1}n.l=function(R){return R=Z(this,R),V(R)?-1:q(R)?0:1};function U(R){const I=R.g.length,C=[];for(let N=0;N<I;N++)C[N]=~R.g[N];return new u(C,~R.h).add(T)}n.abs=function(){return V(this)?U(this):this},n.add=function(R){const I=Math.max(this.g.length,R.g.length),C=[];let N=0;for(let b=0;b<=I;b++){let F=N+(this.i(b)&65535)+(R.i(b)&65535),P=(F>>>16)+(this.i(b)>>>16)+(R.i(b)>>>16);N=P>>>16,F&=65535,P&=65535,C[b]=P<<16|F}return new u(C,C[C.length-1]&-2147483648?-1:0)};function Z(R,I){return R.add(U(I))}n.j=function(R){if(q(this)||q(R))return E;if(V(this))return V(R)?U(this).j(U(R)):U(U(this).j(R));if(V(R))return U(this.j(U(R)));if(this.l(O)<0&&R.l(O)<0)return y(this.m()*R.m());const I=this.g.length+R.g.length,C=[];for(var N=0;N<2*I;N++)C[N]=0;for(N=0;N<this.g.length;N++)for(let b=0;b<R.g.length;b++){const F=this.i(N)>>>16,P=this.i(N)&65535,Ge=R.i(b)>>>16,et=R.i(b)&65535;C[2*N+2*b]+=P*et,te(C,2*N+2*b),C[2*N+2*b+1]+=F*et,te(C,2*N+2*b+1),C[2*N+2*b+1]+=P*Ge,te(C,2*N+2*b+1),C[2*N+2*b+2]+=F*Ge,te(C,2*N+2*b+2)}for(R=0;R<I;R++)C[R]=C[2*R+1]<<16|C[2*R];for(R=I;R<2*I;R++)C[R]=0;return new u(C,0)};function te(R,I){for(;(R[I]&65535)!=R[I];)R[I+1]+=R[I]>>>16,R[I]&=65535,I++}function se(R,I){this.g=R,this.h=I}function ie(R,I){if(q(I))throw Error("division by zero");if(q(R))return new se(E,E);if(V(R))return I=ie(U(R),I),new se(U(I.g),U(I.h));if(V(I))return I=ie(R,U(I)),new se(U(I.g),I.h);if(R.g.length>30){if(V(R)||V(I))throw Error("slowDivide_ only works with positive integers.");for(var C=T,N=I;N.l(R)<=0;)C=ge(C),N=ge(N);var b=ue(C,1),F=ue(N,1);for(N=ue(N,2),C=ue(C,2);!q(N);){var P=F.add(N);P.l(R)<=0&&(b=b.add(C),F=P),N=ue(N,1),C=ue(C,1)}return I=Z(R,b.j(I)),new se(b,I)}for(b=E;R.l(I)>=0;){for(C=Math.max(1,Math.floor(R.m()/I.m())),N=Math.ceil(Math.log(C)/Math.LN2),N=N<=48?1:Math.pow(2,N-48),F=y(C),P=F.j(I);V(P)||P.l(R)>0;)C-=N,F=y(C),P=F.j(I);q(F)&&(F=T),b=b.add(F),R=Z(R,P)}return new se(b,R)}n.B=function(R){return ie(this,R).h},n.and=function(R){const I=Math.max(this.g.length,R.g.length),C=[];for(let N=0;N<I;N++)C[N]=this.i(N)&R.i(N);return new u(C,this.h&R.h)},n.or=function(R){const I=Math.max(this.g.length,R.g.length),C=[];for(let N=0;N<I;N++)C[N]=this.i(N)|R.i(N);return new u(C,this.h|R.h)},n.xor=function(R){const I=Math.max(this.g.length,R.g.length),C=[];for(let N=0;N<I;N++)C[N]=this.i(N)^R.i(N);return new u(C,this.h^R.h)};function ge(R){const I=R.g.length+1,C=[];for(let N=0;N<I;N++)C[N]=R.i(N)<<1|R.i(N-1)>>>31;return new u(C,R.h)}function ue(R,I){const C=I>>5;I%=32;const N=R.g.length-C,b=[];for(let F=0;F<N;F++)b[F]=I>0?R.i(F+C)>>>I|R.i(F+C+1)<<32-I:R.i(F+C);return new u(b,R.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,UE=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.B,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=y,u.fromString=_,vi=u}).apply(typeof Qv<"u"?Qv:typeof self<"u"?self:typeof window<"u"?window:{});var Sc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jE,Fl,zE,$c,lp,BE,$E,WE;(function(){var n,e=Object.defineProperty;function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Sc=="object"&&Sc];for(var g=0;g<c.length;++g){var v=c[g];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var r=t(this);function o(c,g){if(g)e:{var v=r;c=c.split(".");for(var S=0;S<c.length-1;S++){var z=c[S];if(!(z in v))break e;v=v[z]}c=c[c.length-1],S=v[c],g=g(S),g!=S&&g!=null&&e(v,c,{configurable:!0,writable:!0,value:g})}}o("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(c){return c||function(g){var v=[],S;for(S in g)Object.prototype.hasOwnProperty.call(g,S)&&v.push([S,g[S]]);return v}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function h(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function p(c,g,v){return c.call.apply(c.bind,arguments)}function y(c,g,v){return y=p,y.apply(null,arguments)}function _(c,g){var v=Array.prototype.slice.call(arguments,1);return function(){var S=v.slice();return S.push.apply(S,arguments),c.apply(this,S)}}function E(c,g){function v(){}v.prototype=g.prototype,c.Z=g.prototype,c.prototype=new v,c.prototype.constructor=c,c.Ob=function(S,z,H){for(var re=Array(arguments.length-2),be=2;be<arguments.length;be++)re[be-2]=arguments[be];return g.prototype[z].apply(S,re)}}var T=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function O(c){const g=c.length;if(g>0){const v=Array(g);for(let S=0;S<g;S++)v[S]=c[S];return v}return[]}function q(c,g){for(let S=1;S<arguments.length;S++){const z=arguments[S];var v=typeof z;if(v=v!="object"?v:z?Array.isArray(z)?"array":v:"null",v=="array"||v=="object"&&typeof z.length=="number"){v=c.length||0;const H=z.length||0;c.length=v+H;for(let re=0;re<H;re++)c[v+re]=z[re]}else c.push(z)}}class V{constructor(g,v){this.i=g,this.j=v,this.h=0,this.g=null}get(){let g;return this.h>0?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function U(c){u.setTimeout(()=>{throw c},0)}function Z(){var c=R;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class te{constructor(){this.h=this.g=null}add(g,v){const S=se.get();S.set(g,v),this.h?this.h.next=S:this.g=S,this.h=S}}var se=new V(()=>new ie,c=>c.reset());class ie{constructor(){this.next=this.g=this.h=null}set(g,v){this.h=g,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ge,ue=!1,R=new te,I=()=>{const c=Promise.resolve(void 0);ge=()=>{c.then(C)}};function C(){for(var c;c=Z();){try{c.h.call(c.g)}catch(v){U(v)}var g=se;g.j(c),g.h<100&&(g.h++,c.next=g.g,g.g=c)}ue=!1}function N(){this.u=this.u,this.C=this.C}N.prototype.u=!1,N.prototype.dispose=function(){this.u||(this.u=!0,this.N())},N.prototype[Symbol.dispose]=function(){this.dispose()},N.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function b(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}b.prototype.h=function(){this.defaultPrevented=!0};var F=(function(){if(!u.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};u.addEventListener("test",v,g),u.removeEventListener("test",v,g)}catch{}return c})();function P(c){return/^[\s\xa0]*$/.test(c)}function Ge(c,g){b.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,g)}E(Ge,b),Ge.prototype.init=function(c,g){const v=this.type=c.type,S=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget,g||(v=="mouseover"?g=c.fromElement:v=="mouseout"&&(g=c.toElement)),this.relatedTarget=g,S?(this.clientX=S.clientX!==void 0?S.clientX:S.pageX,this.clientY=S.clientY!==void 0?S.clientY:S.pageY,this.screenX=S.screenX||0,this.screenY=S.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&Ge.Z.h.call(this)},Ge.prototype.h=function(){Ge.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var et="closure_listenable_"+(Math.random()*1e6|0),Xe=0;function ze(c,g,v,S,z){this.listener=c,this.proxy=null,this.src=g,this.type=v,this.capture=!!S,this.ha=z,this.key=++Xe,this.da=this.fa=!1}function G(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function ye(c,g,v){for(const S in c)g.call(v,c[S],S,c)}function ae(c,g){for(const v in c)g.call(void 0,c[v],v,c)}function L(c){const g={};for(const v in c)g[v]=c[v];return g}const Q="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function he(c,g){let v,S;for(let z=1;z<arguments.length;z++){S=arguments[z];for(v in S)c[v]=S[v];for(let H=0;H<Q.length;H++)v=Q[H],Object.prototype.hasOwnProperty.call(S,v)&&(c[v]=S[v])}}function we(c){this.src=c,this.g={},this.h=0}we.prototype.add=function(c,g,v,S,z){const H=c.toString();c=this.g[H],c||(c=this.g[H]=[],this.h++);const re=De(c,g,S,z);return re>-1?(g=c[re],v||(g.fa=!1)):(g=new ze(g,this.src,H,!!S,z),g.fa=v,c.push(g)),g};function Pe(c,g){const v=g.type;if(v in c.g){var S=c.g[v],z=Array.prototype.indexOf.call(S,g,void 0),H;(H=z>=0)&&Array.prototype.splice.call(S,z,1),H&&(G(g),c.g[v].length==0&&(delete c.g[v],c.h--))}}function De(c,g,v,S){for(let z=0;z<c.length;++z){const H=c[z];if(!H.da&&H.listener==g&&H.capture==!!v&&H.ha==S)return z}return-1}var Te="closure_lm_"+(Math.random()*1e6|0),Oe={};function Le(c,g,v,S,z){if(Array.isArray(g)){for(let H=0;H<g.length;H++)Le(c,g[H],v,S,z);return null}return v=es(v),c&&c[et]?c.J(g,v,h(S)?!!S.capture:!1,z):ht(c,g,v,!1,S,z)}function ht(c,g,v,S,z,H){if(!g)throw Error("Invalid event type");const re=h(z)?!!z.capture:!!z;let be=Bn(c);if(be||(c[Te]=be=new we(c)),v=be.add(g,v,S,re,H),v.proxy)return v;if(S=zn(),v.proxy=S,S.src=c,S.listener=v,c.addEventListener)F||(z=re),z===void 0&&(z=!1),c.addEventListener(g.toString(),S,z);else if(c.attachEvent)c.attachEvent(wr(g.toString()),S);else if(c.addListener&&c.removeListener)c.addListener(S);else throw Error("addEventListener and attachEvent are unavailable.");return v}function zn(){function c(v){return g.call(c.src,c.listener,v)}const g=Vi;return c}function fn(c,g,v,S,z){if(Array.isArray(g))for(var H=0;H<g.length;H++)fn(c,g[H],v,S,z);else S=h(S)?!!S.capture:!!S,v=es(v),c&&c[et]?(c=c.i,H=String(g).toString(),H in c.g&&(g=c.g[H],v=De(g,v,S,z),v>-1&&(G(g[v]),Array.prototype.splice.call(g,v,1),g.length==0&&(delete c.g[H],c.h--)))):c&&(c=Bn(c))&&(g=c.g[g.toString()],c=-1,g&&(c=De(g,v,S,z)),(v=c>-1?g[c]:null)&&Sn(v))}function Sn(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[et])Pe(g.i,c);else{var v=c.type,S=c.proxy;g.removeEventListener?g.removeEventListener(v,S,c.capture):g.detachEvent?g.detachEvent(wr(v),S):g.addListener&&g.removeListener&&g.removeListener(S),(v=Bn(g))?(Pe(v,c),v.h==0&&(v.src=null,g[Te]=null)):G(c)}}}function wr(c){return c in Oe?Oe[c]:Oe[c]="on"+c}function Vi(c,g){if(c.da)c=!0;else{g=new Ge(g,this);const v=c.listener,S=c.ha||c.src;c.fa&&Sn(c),c=v.call(S,g)}return c}function Bn(c){return c=c[Te],c instanceof we?c:null}var Er="__closure_events_fn_"+(Math.random()*1e9>>>0);function es(c){return typeof c=="function"?c:(c[Er]||(c[Er]=function(g){return c.handleEvent(g)}),c[Er])}function pt(){N.call(this),this.i=new we(this),this.M=this,this.G=null}E(pt,N),pt.prototype[et]=!0,pt.prototype.removeEventListener=function(c,g,v,S){fn(this,c,g,v,S)};function rt(c,g){var v,S=c.G;if(S)for(v=[];S;S=S.G)v.push(S);if(c=c.M,S=g.type||g,typeof g=="string")g=new b(g,c);else if(g instanceof b)g.target=g.target||c;else{var z=g;g=new b(S,c),he(g,z)}z=!0;let H,re;if(v)for(re=v.length-1;re>=0;re--)H=g.g=v[re],z=qe(H,S,!0,g)&&z;if(H=g.g=c,z=qe(H,S,!0,g)&&z,z=qe(H,S,!1,g)&&z,v)for(re=0;re<v.length;re++)H=g.g=v[re],z=qe(H,S,!1,g)&&z}pt.prototype.N=function(){if(pt.Z.N.call(this),this.i){var c=this.i;for(const g in c.g){const v=c.g[g];for(let S=0;S<v.length;S++)G(v[S]);delete c.g[g],c.h--}}this.G=null},pt.prototype.J=function(c,g,v,S){return this.i.add(String(c),g,!1,v,S)},pt.prototype.K=function(c,g,v,S){return this.i.add(String(c),g,!0,v,S)};function qe(c,g,v,S){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();let z=!0;for(let H=0;H<g.length;++H){const re=g[H];if(re&&!re.da&&re.capture==v){const be=re.listener,It=re.ha||re.src;re.fa&&Pe(c.i,re),z=be.call(It,S)!==!1&&z}}return z&&!S.defaultPrevented}function Ke(c,g){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=y(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(g)>2147483647?-1:u.setTimeout(c,g||0)}function Ds(c){c.g=Ke(()=>{c.g=null,c.i&&(c.i=!1,Ds(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class ts extends N{constructor(g,v){super(),this.m=g,this.l=v,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:Ds(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Tr(c){N.call(this),this.h=c,this.g={}}E(Tr,N);var ns=[];function Os(c){ye(c.g,function(g,v){this.g.hasOwnProperty(v)&&Sn(g)},c),c.g={}}Tr.prototype.N=function(){Tr.Z.N.call(this),Os(this)},Tr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $n=u.JSON.stringify,Mi=u.JSON.parse,nr=class{stringify(c){return u.JSON.stringify(c,void 0)}parse(c){return u.JSON.parse(c,void 0)}};function pn(){}function Vs(){}var Ir={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ms(){b.call(this,"d")}E(Ms,b);function Li(){b.call(this,"c")}E(Li,b);var Rt={},Ls=null;function Sr(){return Ls=Ls||new pt}Rt.Ia="serverreachability";function Fs(c){b.call(this,Rt.Ia,c)}E(Fs,b);function rr(c){const g=Sr();rt(g,new Fs(g))}Rt.STAT_EVENT="statevent";function sr(c,g){b.call(this,Rt.STAT_EVENT,c),this.stat=g}E(sr,b);function Je(c){const g=Sr();rt(g,new sr(g,c))}Rt.Ja="timingevent";function ir(c,g){b.call(this,Rt.Ja,c),this.size=g}E(ir,b);function or(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){c()},g)}function Ar(){this.g=!0}Ar.prototype.ua=function(){this.g=!1};function xo(c,g,v,S,z,H){c.info(function(){if(c.g)if(H){var re="",be=H.split("&");for(let tt=0;tt<be.length;tt++){var It=be[tt].split("=");if(It.length>1){const Ct=It[0];It=It[1];const xn=Ct.split("_");re=xn.length>=2&&xn[1]=="type"?re+(Ct+"="+It+"&"):re+(Ct+"=redacted&")}}}else re=null;else re=H;return"XMLHTTP REQ ("+S+") [attempt "+z+"]: "+g+`
`+v+`
`+re})}function bo(c,g,v,S,z,H,re){c.info(function(){return"XMLHTTP RESP ("+S+") [ attempt "+z+"]: "+g+`
`+v+`
`+H+" "+re})}function Wn(c,g,v,S){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+rs(c,v)+(S?" "+S:"")})}function No(c,g){c.info(function(){return"TIMEOUT: "+g})}Ar.prototype.info=function(){};function rs(c,g){if(!c.g)return g;if(!g)return null;try{const H=JSON.parse(g);if(H){for(c=0;c<H.length;c++)if(Array.isArray(H[c])){var v=H[c];if(!(v.length<2)){var S=v[1];if(Array.isArray(S)&&!(S.length<1)){var z=S[0];if(z!="noop"&&z!="stop"&&z!="close")for(let re=1;re<S.length;re++)S[re]=""}}}}return $n(H)}catch{return g}}var Rr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Cr={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},kr;function qn(){}E(qn,pn),qn.prototype.g=function(){return new XMLHttpRequest},kr=new qn;function mt(c){return encodeURIComponent(String(c))}function ss(c){var g=1;c=c.split(":");const v=[];for(;g>0&&c.length;)v.push(c.shift()),g--;return c.length&&v.push(c.join(":")),v}function on(c,g,v,S){this.j=c,this.i=g,this.l=v,this.S=S||1,this.V=new Tr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Fi}function Fi(){this.i=null,this.g="",this.h=!1}var Ui={},Us={};function mn(c,g,v){c.M=1,c.A=os(Hn(g)),c.u=v,c.R=!0,$(c,null)}function $(c,g){c.F=Date.now(),ji(c),c.B=Hn(c.A);var v=c.B,S=c.S;Array.isArray(S)||(S=[String(S)]),nl(v.i,"t",S),c.C=0,v=c.j.L,c.h=new Fi,c.g=Ru(c.j,v?g:null,!c.u),c.P>0&&(c.O=new ts(y(c.Y,c,c.g),c.P)),g=c.V,v=c.g,S=c.ba;var z="readystatechange";Array.isArray(z)||(z&&(ns[0]=z.toString()),z=ns);for(let H=0;H<z.length;H++){const re=Le(v,z[H],S||g.handleEvent,!1,g.h||g);if(!re)break;g.g[re.key]=re}g=c.J?L(c.J):{},c.u?(c.v||(c.v="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,g)):(c.v="GET",c.g.ea(c.B,c.v,null,g)),rr(),xo(c.i,c.v,c.B,c.l,c.S,c.u)}on.prototype.ba=function(c){c=c.target;const g=this.O;g&&Vr(c)==3?g.j():this.Y(c)},on.prototype.Y=function(c){try{if(c==this.g)e:{const be=Vr(this.g),It=this.g.ya(),tt=this.g.ca();if(!(be<3)&&(be!=3||this.g&&(this.h.h||this.g.la()||Su(this.g)))){this.K||be!=4||It==7||(It==8||tt<=0?rr(3):rr(2)),Do(this);var g=this.g.ca();this.X=g;var v=Ne(this);if(this.o=g==200,bo(this.i,this.v,this.B,this.l,this.S,be,g),this.o){if(this.U&&!this.L){t:{if(this.g){var S,z=this.g;if((S=z.g?z.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!P(S)){var H=S;break t}}H=null}if(c=H)Wn(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,at(this,c);else{this.o=!1,this.m=3,Je(12),is(this),zi(this);break e}}if(this.R){c=!0;let Ct;for(;!this.K&&this.C<v.length;)if(Ct=_u(this,v),Ct==Us){be==4&&(this.m=4,Je(14),c=!1),Wn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ct==Ui){this.m=4,Je(15),Wn(this.i,this.l,v,"[Invalid Chunk]"),c=!1;break}else Wn(this.i,this.l,Ct,null),at(this,Ct);if(Dt(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),be!=4||v.length!=0||this.h.h||(this.m=1,Je(16),c=!1),this.o=this.o&&c,!c)Wn(this.i,this.l,v,"[Invalid Chunked Response]"),is(this),zi(this);else if(v.length>0&&!this.W){this.W=!0;var re=this.j;re.g==this&&re.aa&&!re.P&&(re.j.info("Great, no buffering proxy detected. Bytes received: "+v.length),Yi(re),re.P=!0,Je(11))}}else Wn(this.i,this.l,v,null),at(this,v);be==4&&is(this),this.o&&!this.K&&(be==4?$o(this.j,this):(this.o=!1,ji(this)))}else sl(this.g),g==400&&v.indexOf("Unknown SID")>0?(this.m=3,Je(12)):(this.m=0,Je(13)),is(this),zi(this)}}}catch{}finally{}};function Ne(c){if(!Dt(c))return c.g.la();const g=Su(c.g);if(g==="")return"";let v="";const S=g.length,z=Vr(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return is(c),zi(c),"";c.h.i=new u.TextDecoder}for(let H=0;H<S;H++)c.h.h=!0,v+=c.h.i.decode(g[H],{stream:!(z&&H==S-1)});return g.length=0,c.h.g+=v,c.C=0,c.h.g}function Dt(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function _u(c,g){var v=c.C,S=g.indexOf(`
`,v);return S==-1?Us:(v=Number(g.substring(v,S)),isNaN(v)?Ui:(S+=1,S+v>g.length?Us:(g=g.slice(S,S+v),c.C=S+v,g)))}on.prototype.cancel=function(){this.K=!0,is(this)};function ji(c){c.T=Date.now()+c.H,Ga(c,c.H)}function Ga(c,g){if(c.D!=null)throw Error("WatchDog timer not null");c.D=or(y(c.aa,c),g)}function Do(c){c.D&&(u.clearTimeout(c.D),c.D=null)}on.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(No(this.i,this.B),this.M!=2&&(rr(),Je(17)),is(this),this.m=2,zi(this)):Ga(this,this.T-c)};function zi(c){c.j.I==0||c.K||$o(c.j,c)}function is(c){Do(c);var g=c.O;g&&typeof g.dispose=="function"&&g.dispose(),c.O=null,Os(c.V),c.g&&(g=c.g,c.g=null,g.abort(),g.dispose())}function at(c,g){try{var v=c.j;if(v.I!=0&&(v.g==c||Qa(v.h,c))){if(!c.L&&Qa(v.h,c)&&v.I==3){try{var S=v.Ba.g.parse(g)}catch{S=null}if(Array.isArray(S)&&S.length==3){var z=S;if(z[0]==0){e:if(!v.v){if(v.g)if(v.g.F+3e3<c.F)Bo(v),kn(v);else break e;Fr(v),Je(18)}}else v.xa=z[1],0<v.xa-v.K&&z[2]<37500&&v.F&&v.A==0&&!v.C&&(v.C=or(y(v.Va,v),6e3));Bi(v.h)<=1&&v.ta&&(v.ta=void 0)}else Pn(v,11)}else if((c.L||v.g==c)&&Bo(v),!P(g))for(z=v.Ba.g.parse(g),g=0;g<z.length;g++){let tt=z[g];const Ct=tt[0];if(!(Ct<=v.K))if(v.K=Ct,tt=tt[1],v.I==2)if(tt[0]=="c"){v.M=tt[1],v.ba=tt[2];const xn=tt[3];xn!=null&&(v.ka=xn,v.j.info("VER="+v.ka));const ds=tt[4];ds!=null&&(v.za=ds,v.j.info("SVER="+v.za));const Ur=tt[5];Ur!=null&&typeof Ur=="number"&&Ur>0&&(S=1.5*Ur,v.O=S,v.j.info("backChannelRequestTimeoutMs_="+S)),S=v;const jr=c.g;if(jr){const Ho=jr.g?jr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ho){var H=S.h;H.g||Ho.indexOf("spdy")==-1&&Ho.indexOf("quic")==-1&&Ho.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(Vo(H,H.h),H.h=null))}if(S.G){const al=jr.g?jr.g.getResponseHeader("X-HTTP-Session-Id"):null;al&&(S.wa=al,Ze(S.J,S.G,al))}}v.I=3,v.l&&v.l.ra(),v.aa&&(v.T=Date.now()-c.F,v.j.info("Handshake RTT: "+v.T+"ms")),S=v;var re=c;if(S.na=ol(S,S.L?S.ba:null,S.W),re.L){$i(S.h,re);var be=re,It=S.O;It&&(be.H=It),be.D&&(Do(be),ji(be)),S.g=re}else Xt(S);v.i.length>0&&cs(v)}else tt[0]!="stop"&&tt[0]!="close"||Pn(v,7);else v.I==3&&(tt[0]=="stop"||tt[0]=="close"?tt[0]=="stop"?Pn(v,7):jo(v):tt[0]!="noop"&&v.l&&v.l.qa(tt),v.A=0)}}rr(4)}catch{}}var Jd=class{constructor(c,g){this.g=c,this.map=g}};function Oo(c){this.l=c||10,u.PerformanceNavigationTiming?(c=u.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ka(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Bi(c){return c.h?1:c.g?c.g.size:0}function Qa(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function Vo(c,g){c.g?c.g.add(g):c.h=g}function $i(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}Oo.prototype.cancel=function(){if(this.i=An(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function An(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const v of c.g.values())g=g.concat(v.G);return g}return O(c.i)}var wu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Rn(c,g){if(c){c=c.split("&");for(let v=0;v<c.length;v++){const S=c[v].indexOf("=");let z,H=null;S>=0?(z=c[v].substring(0,S),H=c[v].substring(S+1)):z=c[v],g(z,H?decodeURIComponent(H.replace(/\+/g," ")):"")}}}function Pr(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let g;c instanceof Pr?(this.l=c.l,Wi(this,c.j),this.o=c.o,this.g=c.g,xr(this,c.u),this.h=c.h,js(this,rl(c.i)),this.m=c.m):c&&(g=String(c).match(wu))?(this.l=!1,Wi(this,g[1]||"",!0),this.o=qi(g[2]||""),this.g=qi(g[3]||"",!0),xr(this,g[4]),this.h=qi(g[5]||"",!0),js(this,g[6]||"",!0),this.m=qi(g[7]||"")):(this.l=!1,this.i=new Be(null,this.l))}Pr.prototype.toString=function(){const c=[];var g=this.j;g&&c.push(Hi(g,Xa,!0),":");var v=this.g;return(v||g=="file")&&(c.push("//"),(g=this.o)&&c.push(Hi(g,Xa,!0),"@"),c.push(mt(v).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.u,v!=null&&c.push(":",String(v))),(v=this.h)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(Hi(v,v.charAt(0)=="/"?Gi:Ja,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",Hi(v,Za)),c.join("")},Pr.prototype.resolve=function(c){const g=Hn(this);let v=!!c.j;v?Wi(g,c.j):v=!!c.o,v?g.o=c.o:v=!!c.g,v?g.g=c.g:v=c.u!=null;var S=c.h;if(v)xr(g,c.u);else if(v=!!c.h){if(S.charAt(0)!="/")if(this.g&&!this.h)S="/"+S;else{var z=g.h.lastIndexOf("/");z!=-1&&(S=g.h.slice(0,z+1)+S)}if(z=S,z==".."||z==".")S="";else if(z.indexOf("./")!=-1||z.indexOf("/.")!=-1){S=z.lastIndexOf("/",0)==0,z=z.split("/");const H=[];for(let re=0;re<z.length;){const be=z[re++];be=="."?S&&re==z.length&&H.push(""):be==".."?((H.length>1||H.length==1&&H[0]!="")&&H.pop(),S&&re==z.length&&H.push("")):(H.push(be),S=!0)}S=H.join("/")}else S=z}return v?g.h=S:v=c.i.toString()!=="",v?js(g,rl(c.i)):v=!!c.m,v&&(g.m=c.m),g};function Hn(c){return new Pr(c)}function Wi(c,g,v){c.j=v?qi(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function xr(c,g){if(g){if(g=Number(g),isNaN(g)||g<0)throw Error("Bad port number "+g);c.u=g}else c.u=null}function js(c,g,v){g instanceof Be?(c.i=g,Lo(c.i,c.l)):(v||(g=Hi(g,Zd)),c.i=new Be(g,c.l))}function Ze(c,g,v){c.i.set(g,v)}function os(c){return Ze(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function qi(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Hi(c,g,v){return typeof c=="string"?(c=encodeURI(c).replace(g,Ya),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Ya(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Xa=/[#\/\?@]/g,Ja=/[#\?:]/g,Gi=/[#\?]/g,Zd=/[#\?@]/g,Za=/#/g;function Be(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function br(c){c.g||(c.g=new Map,c.h=0,c.i&&Rn(c.i,function(g,v){c.add(decodeURIComponent(g.replace(/\+/g," ")),v)}))}n=Be.prototype,n.add=function(c,g){br(this),this.i=null,c=Nr(this,c);let v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(g),this.h+=1,this};function el(c,g){br(c),g=Nr(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function Mo(c,g){return br(c),g=Nr(c,g),c.g.has(g)}n.forEach=function(c,g){br(this),this.g.forEach(function(v,S){v.forEach(function(z){c.call(g,z,S,this)},this)},this)};function tl(c,g){br(c);let v=[];if(typeof g=="string")Mo(c,g)&&(v=v.concat(c.g.get(Nr(c,g))));else for(c=Array.from(c.g.values()),g=0;g<c.length;g++)v=v.concat(c[g]);return v}n.set=function(c,g){return br(this),this.i=null,c=Nr(this,c),Mo(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},n.get=function(c,g){return c?(c=tl(this,c),c.length>0?String(c[0]):g):g};function nl(c,g,v){el(c,g),v.length>0&&(c.i=null,c.g.set(Nr(c,g),O(v)),c.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(let S=0;S<g.length;S++){var v=g[S];const z=mt(v);v=tl(this,v);for(let H=0;H<v.length;H++){let re=z;v[H]!==""&&(re+="="+mt(v[H])),c.push(re)}}return this.i=c.join("&")};function rl(c){const g=new Be;return g.i=c.i,c.g&&(g.g=new Map(c.g),g.h=c.h),g}function Nr(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function Lo(c,g){g&&!c.j&&(br(c),c.i=null,c.g.forEach(function(v,S){const z=S.toLowerCase();S!=z&&(el(this,S),nl(this,z,v))},c)),c.j=g}function Dr(c,g){const v=new Ar;if(u.Image){const S=new Image;S.onload=_(Wt,v,"TestLoadImage: loaded",!0,g,S),S.onerror=_(Wt,v,"TestLoadImage: error",!1,g,S),S.onabort=_(Wt,v,"TestLoadImage: abort",!1,g,S),S.ontimeout=_(Wt,v,"TestLoadImage: timeout",!1,g,S),u.setTimeout(function(){S.ontimeout&&S.ontimeout()},1e4),S.src=c}else g(!1)}function Or(c,g){const v=new Ar,S=new AbortController,z=setTimeout(()=>{S.abort(),Wt(v,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:S.signal}).then(H=>{clearTimeout(z),H.ok?Wt(v,"TestPingServer: ok",!0,g):Wt(v,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(z),Wt(v,"TestPingServer: error",!1,g)})}function Wt(c,g,v,S,z){try{z&&(z.onload=null,z.onerror=null,z.onabort=null,z.ontimeout=null),S(v)}catch{}}function Ki(){this.g=new nr}function as(c){this.i=c.Sb||null,this.h=c.ab||!1}E(as,pn),as.prototype.g=function(){return new Cn(this.i,this.h)};function Cn(c,g){pt.call(this),this.H=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}E(Cn,pt),n=Cn.prototype,n.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=g,this.readyState=1,ar(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const g={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(g.body=c),(this.H||u).fetch(new Request(this.D,g)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,zs(this)),this.readyState=0},n.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,ar(this)),this.g&&(this.readyState=3,ar(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Eu(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function Eu(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}n.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.B.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?zs(this):ar(this),this.readyState==3&&Eu(this)}},n.Oa=function(c){this.g&&(this.response=this.responseText=c,zs(this))},n.Na=function(c){this.g&&(this.response=c,zs(this))},n.ga=function(){this.g&&zs(this)};function zs(c){c.readyState=4,c.l=null,c.j=null,c.B=null,ar(c)}n.setRequestHeader=function(c,g){this.A.append(c,g)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var v=g.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=g.next();return c.join(`\r
`)};function ar(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Cn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Tu(c){let g="";return ye(c,function(v,S){g+=S,g+=":",g+=v,g+=`\r
`}),g}function Fo(c,g,v){e:{for(S in v){var S=!1;break e}S=!0}S||(v=Tu(v),typeof c=="string"?v!=null&&mt(v):Ze(c,g,v))}function st(c){pt.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}E(st,pt);var Iu=/^https?$/i,eh=["POST","PUT"];n=st.prototype,n.Fa=function(c){this.H=c},n.ea=function(c,g,v,S){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():kr.g(),this.g.onreadystatechange=T(y(this.Ca,this));try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(H){Bs(this,H);return}if(c=v||"",v=new Map(this.headers),S)if(Object.getPrototypeOf(S)===Object.prototype)for(var z in S)v.set(z,S[z]);else if(typeof S.keys=="function"&&typeof S.get=="function")for(const H of S.keys())v.set(H,S.get(H));else throw Error("Unknown input type for opt_headers: "+String(S));S=Array.from(v.keys()).find(H=>H.toLowerCase()=="content-type"),z=u.FormData&&c instanceof u.FormData,!(Array.prototype.indexOf.call(eh,g,void 0)>=0)||S||z||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,re]of v)this.g.setRequestHeader(H,re);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(H){Bs(this,H)}};function Bs(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.o=5,$s(c),us(c)}function $s(c){c.A||(c.A=!0,rt(c,"complete"),rt(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,rt(this,"complete"),rt(this,"abort"),us(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),us(this,!0)),st.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?ls(this):this.Xa())},n.Xa=function(){ls(this)};function ls(c){if(c.h&&typeof a<"u"){if(c.v&&Vr(c)==4)setTimeout(c.Ca.bind(c),0);else if(rt(c,"readystatechange"),Vr(c)==4){c.h=!1;try{const H=c.ca();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var v;if(!(v=g)){var S;if(S=H===0){let re=String(c.D).match(wu)[1]||null;!re&&u.self&&u.self.location&&(re=u.self.location.protocol.slice(0,-1)),S=!Iu.test(re?re.toLowerCase():"")}v=S}if(v)rt(c,"complete"),rt(c,"success");else{c.o=6;try{var z=Vr(c)>2?c.g.statusText:""}catch{z=""}c.l=z+" ["+c.ca()+"]",$s(c)}}finally{us(c)}}}}function us(c,g){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const v=c.g;c.g=null,g||rt(c,"ready");try{v.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Vr(c){return c.g?c.g.readyState:0}n.ca=function(){try{return Vr(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),Mi(g)}};function Su(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function sl(c){const g={};c=(c.g&&Vr(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let S=0;S<c.length;S++){if(P(c[S]))continue;var v=ss(c[S]);const z=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const H=g[z]||[];g[z]=H,H.push(v)}ae(g,function(S){return S.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Mr(c,g,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||g}function Uo(c){this.za=0,this.i=[],this.j=new Ar,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Mr("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Mr("baseRetryDelayMs",5e3,c),this.Za=Mr("retryDelaySeedMs",1e4,c),this.Ta=Mr("forwardChannelMaxRetries",2,c),this.va=Mr("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new Oo(c&&c.concurrentRequestLimit),this.Ba=new Ki,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Uo.prototype,n.ka=8,n.I=1,n.connect=function(c,g,v,S){Je(0),this.W=c,this.H=g||{},v&&S!==void 0&&(this.H.OSID=v,this.H.OAID=S),this.F=this.X,this.J=ol(this,null,this.W),cs(this)};function jo(c){if(zo(c),c.I==3){var g=c.V++,v=Hn(c.J);if(Ze(v,"SID",c.M),Ze(v,"RID",g),Ze(v,"TYPE","terminate"),Lr(c,v),g=new on(c,c.j,g),g.M=2,g.A=os(Hn(v)),v=!1,u.navigator&&u.navigator.sendBeacon)try{v=u.navigator.sendBeacon(g.A.toString(),"")}catch{}!v&&u.Image&&(new Image().src=g.A,v=!0),v||(g.g=Ru(g.j,null),g.g.ea(g.A)),g.F=Date.now(),ji(g)}Xi(c)}function kn(c){c.g&&(Yi(c),c.g.cancel(),c.g=null)}function zo(c){kn(c),c.v&&(u.clearTimeout(c.v),c.v=null),Bo(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&u.clearTimeout(c.m),c.m=null)}function cs(c){if(!Ka(c.h)&&!c.m){c.m=!0;var g=c.Ea;ge||I(),ue||(ge(),ue=!0),R.add(g,c),c.D=0}}function Au(c,g){return Bi(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=g.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=or(y(c.Ea,c,g),Wo(c,c.D)),c.D++,!0)}n.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const z=new on(this,this.j,c);let H=this.o;if(this.U&&(H?(H=L(H),he(H,this.U)):H=this.U),this.u!==null||this.R||(z.J=H,H=null),this.S)e:{for(var g=0,v=0;v<this.i.length;v++){t:{var S=this.i[v];if("__data__"in S.map&&(S=S.map.__data__,typeof S=="string")){S=S.length;break t}S=void 0}if(S===void 0)break;if(g+=S,g>4096){g=v;break e}if(g===4096||v===this.i.length-1){g=v+1;break e}}g=1e3}else g=1e3;g=il(this,z,g),v=Hn(this.J),Ze(v,"RID",c),Ze(v,"CVER",22),this.G&&Ze(v,"X-HTTP-Session-Id",this.G),Lr(this,v),H&&(this.R?g="headers="+mt(Tu(H))+"&"+g:this.u&&Fo(v,this.u,H)),Vo(this.h,z),this.Ra&&Ze(v,"TYPE","init"),this.S?(Ze(v,"$req",g),Ze(v,"SID","null"),z.U=!0,mn(z,v,null)):mn(z,v,g),this.I=2}}else this.I==3&&(c?Qi(this,c):this.i.length==0||Ka(this.h)||Qi(this))};function Qi(c,g){var v;g?v=g.l:v=c.V++;const S=Hn(c.J);Ze(S,"SID",c.M),Ze(S,"RID",v),Ze(S,"AID",c.K),Lr(c,S),c.u&&c.o&&Fo(S,c.u,c.o),v=new on(c,c.j,v,c.D+1),c.u===null&&(v.J=c.o),g&&(c.i=g.G.concat(c.i)),g=il(c,v,1e3),v.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),Vo(c.h,v),mn(v,S,g)}function Lr(c,g){c.H&&ye(c.H,function(v,S){Ze(g,S,v)}),c.l&&ye({},function(v,S){Ze(g,S,v)})}function il(c,g,v){v=Math.min(c.i.length,v);const S=c.l?y(c.l.Ka,c.l,c):null;e:{var z=c.i;let be=-1;for(;;){const It=["count="+v];be==-1?v>0?(be=z[0].g,It.push("ofs="+be)):be=0:It.push("ofs="+be);let tt=!0;for(let Ct=0;Ct<v;Ct++){var H=z[Ct].g;const xn=z[Ct].map;if(H-=be,H<0)be=Math.max(0,z[Ct].g-100),tt=!1;else try{H="req"+H+"_"||"";try{var re=xn instanceof Map?xn:Object.entries(xn);for(const[ds,Ur]of re){let jr=Ur;h(Ur)&&(jr=$n(Ur)),It.push(H+ds+"="+encodeURIComponent(jr))}}catch(ds){throw It.push(H+"type="+encodeURIComponent("_badmap")),ds}}catch{S&&S(xn)}}if(tt){re=It.join("&");break e}}re=void 0}return c=c.i.splice(0,v),g.G=c,re}function Xt(c){if(!c.g&&!c.v){c.Y=1;var g=c.Da;ge||I(),ue||(ge(),ue=!0),R.add(g,c),c.A=0}}function Fr(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=or(y(c.Da,c),Wo(c,c.A)),c.A++,!0)}n.Da=function(){if(this.v=null,Ws(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=or(y(this.Wa,this),c)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Je(10),kn(this),Ws(this))};function Yi(c){c.B!=null&&(u.clearTimeout(c.B),c.B=null)}function Ws(c){c.g=new on(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var g=Hn(c.na);Ze(g,"RID","rpc"),Ze(g,"SID",c.M),Ze(g,"AID",c.K),Ze(g,"CI",c.F?"0":"1"),!c.F&&c.ia&&Ze(g,"TO",c.ia),Ze(g,"TYPE","xmlhttp"),Lr(c,g),c.u&&c.o&&Fo(g,c.u,c.o),c.O&&(c.g.H=c.O);var v=c.g;c=c.ba,v.M=1,v.A=os(Hn(g)),v.u=null,v.R=!0,$(v,c)}n.Va=function(){this.C!=null&&(this.C=null,kn(this),Fr(this),Je(19))};function Bo(c){c.C!=null&&(u.clearTimeout(c.C),c.C=null)}function $o(c,g){var v=null;if(c.g==g){Bo(c),Yi(c),c.g=null;var S=2}else if(Qa(c.h,g))v=g.G,$i(c.h,g),S=1;else return;if(c.I!=0){if(g.o)if(S==1){v=g.u?g.u.length:0,g=Date.now()-g.F;var z=c.D;S=Sr(),rt(S,new ir(S,v)),cs(c)}else Xt(c);else if(z=g.m,z==3||z==0&&g.X>0||!(S==1&&Au(c,g)||S==2&&Fr(c)))switch(v&&v.length>0&&(g=c.h,g.i=g.i.concat(v)),z){case 1:Pn(c,5);break;case 4:Pn(c,10);break;case 3:Pn(c,6);break;default:Pn(c,2)}}}function Wo(c,g){let v=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(v*=2),v*g}function Pn(c,g){if(c.j.info("Error code "+g),g==2){var v=y(c.bb,c),S=c.Ua;const z=!S;S=new Pr(S||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Wi(S,"https"),os(S),z?Dr(S.toString(),v):Or(S.toString(),v)}else Je(2);c.I=0,c.l&&c.l.pa(g),Xi(c),zo(c)}n.bb=function(c){c?(this.j.info("Successfully pinged google.com"),Je(2)):(this.j.info("Failed to ping google.com"),Je(1))};function Xi(c){if(c.I=0,c.ja=[],c.l){const g=An(c.h);(g.length!=0||c.i.length!=0)&&(q(c.ja,g),q(c.ja,c.i),c.h.i.length=0,O(c.i),c.i.length=0),c.l.oa()}}function ol(c,g,v){var S=v instanceof Pr?Hn(v):new Pr(v);if(S.g!="")g&&(S.g=g+"."+S.g),xr(S,S.u);else{var z=u.location;S=z.protocol,g=g?g+"."+z.hostname:z.hostname,z=+z.port;const H=new Pr(null);S&&Wi(H,S),g&&(H.g=g),z&&xr(H,z),v&&(H.h=v),S=H}return v=c.G,g=c.wa,v&&g&&Ze(S,v,g),Ze(S,"VER",c.ka),Lr(c,S),S}function Ru(c,g,v){if(g&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Aa&&!c.ma?new st(new as({ab:v})):new st(c.ma),g.Fa(c.L),g}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Cu(){}n=Cu.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function qo(){}qo.prototype.g=function(c,g){return new qt(c,g)};function qt(c,g){pt.call(this),this.g=new Uo(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.sa&&(c?c["X-WebChannel-Client-Profile"]=g.sa:c={"X-WebChannel-Client-Profile":g.sa}),this.g.U=c,(c=g&&g.Qb)&&!P(c)&&(this.g.u=c),this.A=g&&g.supportsCrossDomainXhr||!1,this.v=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!P(g)&&(this.g.G=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new qs(this)}E(qt,pt),qt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},qt.prototype.close=function(){jo(this.g)},qt.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.v&&(v={},v.__data__=$n(c),c=v);g.i.push(new Jd(g.Ya++,c)),g.I==3&&cs(g)},qt.prototype.N=function(){this.g.l=null,delete this.j,jo(this.g),delete this.g,qt.Z.N.call(this)};function ku(c){Ms.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const v in g){c=v;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}E(ku,Ms);function Pu(){Li.call(this),this.status=1}E(Pu,Li);function qs(c){this.g=c}E(qs,Cu),qs.prototype.ra=function(){rt(this.g,"a")},qs.prototype.qa=function(c){rt(this.g,new ku(c))},qs.prototype.pa=function(c){rt(this.g,new Pu)},qs.prototype.oa=function(){rt(this.g,"b")},qo.prototype.createWebChannel=qo.prototype.g,qt.prototype.send=qt.prototype.o,qt.prototype.open=qt.prototype.m,qt.prototype.close=qt.prototype.close,WE=function(){return new qo},$E=function(){return Sr()},BE=Rt,lp={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Rr.NO_ERROR=0,Rr.TIMEOUT=8,Rr.HTTP_ERROR=6,$c=Rr,Cr.COMPLETE="complete",zE=Cr,Vs.EventType=Ir,Ir.OPEN="a",Ir.CLOSE="b",Ir.ERROR="c",Ir.MESSAGE="d",pt.prototype.listen=pt.prototype.J,Fl=Vs,st.prototype.listenOnce=st.prototype.K,st.prototype.getLastError=st.prototype.Ha,st.prototype.getLastErrorCode=st.prototype.ya,st.prototype.getStatus=st.prototype.ca,st.prototype.getResponseJson=st.prototype.La,st.prototype.getResponseText=st.prototype.la,st.prototype.send=st.prototype.ea,st.prototype.setWithCredentials=st.prototype.Fa,jE=st}).apply(typeof Sc<"u"?Sc:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class rn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rn.UNAUTHENTICATED=new rn(null),rn.GOOGLE_CREDENTIALS=new rn("google-credentials-uid"),rn.FIRST_PARTY=new rn("first-party-uid"),rn.MOCK_USER=new rn("mock-user");/**
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
 */let Ua="12.9.0";function vP(n){Ua=n}/**
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
 */const wo=new Id("@firebase/firestore");function ya(){return wo.logLevel}function ce(n,...e){if(wo.logLevel<=Fe.DEBUG){const t=e.map(Xp);wo.debug(`Firestore (${Ua}): ${n}`,...t)}}function ks(n,...e){if(wo.logLevel<=Fe.ERROR){const t=e.map(Xp);wo.error(`Firestore (${Ua}): ${n}`,...t)}}function Eo(n,...e){if(wo.logLevel<=Fe.WARN){const t=e.map(Xp);wo.warn(`Firestore (${Ua}): ${n}`,...t)}}function Xp(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function Ie(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,qE(n,r,t)}function qE(n,e,t){let r=`FIRESTORE (${Ua}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw ks(r),new Error(r)}function We(n,e,t,r){let o="Unexpected state";typeof t=="string"?o=t:r=t,n||qE(e,o,r)}function xe(n,e){return n}/**
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
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oe extends tr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Yr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class HE{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _P{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(rn.UNAUTHENTICATED)))}shutdown(){}}class wP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class EP{constructor(e){this.t=e,this.currentUser=rn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){We(this.o===void 0,42304);let r=this.i;const o=p=>this.i!==r?(r=this.i,t(p)):Promise.resolve();let a=new Yr;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Yr,e.enqueueRetryable((()=>o(this.currentUser)))};const u=()=>{const p=a;e.enqueueRetryable((async()=>{await p.promise,await o(this.currentUser)}))},h=p=>{ce("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((p=>h(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?h(p):(ce("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Yr)}}),0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(ce("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(We(typeof r.accessToken=="string",31837,{l:r}),new HE(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return We(e===null||typeof e=="string",2055,{h:e}),new rn(e)}}class TP{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=rn.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class IP{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new TP(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(rn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Yv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class SP{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Zn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){We(this.o===void 0,3512);const r=a=>{a.error!=null&&ce("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.m;return this.m=a.token,ce("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>r(a)))};const o=a=>{ce("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>o(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?o(a):ce("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Yv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(We(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Yv(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function AP(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Jp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const o=AP(40);for(let a=0;a<o.length;++a)r.length<20&&o[a]<t&&(r+=e.charAt(o[a]%62))}return r}}function Ue(n,e){return n<e?-1:n>e?1:0}function up(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const o=n.charAt(r),a=e.charAt(r);if(o!==a)return Lf(o)===Lf(a)?Ue(o,a):Lf(o)?1:-1}return Ue(n.length,e.length)}const RP=55296,CP=57343;function Lf(n){const e=n.charCodeAt(0);return e>=RP&&e<=CP}function ba(n,e,t){return n.length===e.length&&n.every(((r,o)=>t(r,e[o])))}/**
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
 */const Xv="__name__";class qr{constructor(e,t,r){t===void 0?t=0:t>e.length&&Ie(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&Ie(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return qr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof qr?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let o=0;o<r;o++){const a=qr.compareSegments(e.get(o),t.get(o));if(a!==0)return a}return Ue(e.length,t.length)}static compareSegments(e,t){const r=qr.isNumericId(e),o=qr.isNumericId(t);return r&&!o?-1:!r&&o?1:r&&o?qr.extractNumericId(e).compare(qr.extractNumericId(t)):up(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return vi.fromString(e.substring(4,e.length-2))}}class nt extends qr{construct(e,t,r){return new nt(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new oe(K.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((o=>o.length>0)))}return new nt(t)}static emptyPath(){return new nt([])}}const kP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qt extends qr{construct(e,t,r){return new Qt(e,t,r)}static isValidIdentifier(e){return kP.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Xv}static keyField(){return new Qt([Xv])}static fromServerFormat(e){const t=[];let r="",o=0;const a=()=>{if(r.length===0)throw new oe(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;o<e.length;){const h=e[o];if(h==="\\"){if(o+1===e.length)throw new oe(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new oe(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=p,o+=2}else h==="`"?(u=!u,o++):h!=="."||u?(r+=h,o++):(a(),o++)}if(a(),u)throw new oe(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qt(t)}static emptyPath(){return new Qt([])}}/**
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
 */class Ee{constructor(e){this.path=e}static fromPath(e){return new Ee(nt.fromString(e))}static fromName(e){return new Ee(nt.fromString(e).popFirst(5))}static empty(){return new Ee(nt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&nt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return nt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ee(new nt(e.slice()))}}/**
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
 */function GE(n,e,t){if(!t)throw new oe(K.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function PP(n,e,t,r){if(e===!0&&r===!0)throw new oe(K.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Jv(n){if(!Ee.isDocumentKey(n))throw new oe(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Zv(n){if(Ee.isDocumentKey(n))throw new oe(K.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function KE(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function bd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ie(12329,{type:typeof n})}function Fn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new oe(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=bd(n);throw new oe(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Nt(n,e){const t={typeString:n};return e&&(t.value=e),t}function cu(n,e){if(!KE(n))throw new oe(K.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const o=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const u=n[r];if(o&&typeof u!==o){t=`JSON field '${r}' must be a ${o}.`;break}if(a!==void 0&&u!==a.value){t=`Expected '${r}' field to equal '${a.value}'`;break}}if(t)throw new oe(K.INVALID_ARGUMENT,t);return!0}/**
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
 */const e_=-62135596800,t_=1e6;class ct{static now(){return ct.fromMillis(Date.now())}static fromDate(e){return ct.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*t_);return new ct(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new oe(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new oe(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<e_)throw new oe(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oe(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/t_}_compareTo(e){return this.seconds===e.seconds?Ue(this.nanoseconds,e.nanoseconds):Ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ct._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(cu(e,ct._jsonSchema))return new ct(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-e_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ct._jsonSchemaVersion="firestore/timestamp/1.0",ct._jsonSchema={type:Nt("string",ct._jsonSchemaVersion),seconds:Nt("number"),nanoseconds:Nt("number")};/**
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
 */class Re{static fromTimestamp(e){return new Re(e)}static min(){return new Re(new ct(0,0))}static max(){return new Re(new ct(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Zl=-1;function xP(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,o=Re.fromTimestamp(r===1e9?new ct(t+1,0):new ct(t,r));return new Ti(o,Ee.empty(),e)}function bP(n){return new Ti(n.readTime,n.key,Zl)}class Ti{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ti(Re.min(),Ee.empty(),Zl)}static max(){return new Ti(Re.max(),Ee.empty(),Zl)}}function NP(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Ee.comparator(n.documentKey,e.documentKey),t!==0?t:Ue(n.largestBatchId,e.largestBatchId))}/**
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
 */const DP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class OP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function ja(n){if(n.code!==K.FAILED_PRECONDITION||n.message!==DP)throw n;ce("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Y{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ie(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Y(((r,o)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,o)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Y?t:Y.resolve(t)}catch(t){return Y.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Y.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Y.reject(t)}static resolve(e){return new Y(((t,r)=>{t(e)}))}static reject(e){return new Y(((t,r)=>{r(e)}))}static waitFor(e){return new Y(((t,r)=>{let o=0,a=0,u=!1;e.forEach((h=>{++o,h.next((()=>{++a,u&&a===o&&t()}),(p=>r(p)))})),u=!0,a===o&&t()}))}static or(e){let t=Y.resolve(!1);for(const r of e)t=t.next((o=>o?Y.resolve(o):r()));return t}static forEach(e,t){const r=[];return e.forEach(((o,a)=>{r.push(t.call(this,o,a))})),this.waitFor(r)}static mapArray(e,t){return new Y(((r,o)=>{const a=e.length,u=new Array(a);let h=0;for(let p=0;p<a;p++){const y=p;t(e[y]).next((_=>{u[y]=_,++h,h===a&&r(u)}),(_=>o(_)))}}))}static doWhile(e,t){return new Y(((r,o)=>{const a=()=>{e()===!0?t().next((()=>{a()}),o):r()};a()}))}}function VP(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function za(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Nd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Nd.ce=-1;/**
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
 */const Zp=-1;function du(n){return n==null}function ad(n){return n===0&&1/n==-1/0}function MP(n){return typeof n=="number"&&Number.isInteger(n)&&!ad(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const QE="";function LP(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=n_(e)),e=FP(n.get(t),e);return n_(e)}function FP(n,e){let t=e;const r=n.length;for(let o=0;o<r;o++){const a=n.charAt(o);switch(a){case"\0":t+="";break;case QE:t+="";break;default:t+=a}}return t}function n_(n){return n+QE+""}/**
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
 */function r_(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function bi(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function YE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class _t{constructor(e,t){this.comparator=e,this.root=t||Kt.EMPTY}insert(e,t){return new _t(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Kt.BLACK,null,null))}remove(e){return new _t(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Kt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const o=this.comparator(e,r.key);if(o===0)return t+r.left.size;o<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ac(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ac(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ac(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ac(this.root,e,this.comparator,!0)}}class Ac{constructor(e,t,r,o){this.isReverse=o,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&o&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Kt{constructor(e,t,r,o,a){this.key=e,this.value=t,this.color=r??Kt.RED,this.left=o??Kt.EMPTY,this.right=a??Kt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,o,a){return new Kt(e??this.key,t??this.value,r??this.color,o??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let o=this;const a=r(e,o.key);return o=a<0?o.copy(null,null,null,o.left.insert(e,t,r),null):a===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,r)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Kt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Kt.EMPTY;r=o.right.min(),o=o.copy(r.key,r.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ie(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ie(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ie(27949);return e+(this.isRed()?0:1)}}Kt.EMPTY=null,Kt.RED=!0,Kt.BLACK=!1;Kt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ie(57766)}get value(){throw Ie(16141)}get color(){throw Ie(16727)}get left(){throw Ie(29726)}get right(){throw Ie(36894)}copy(e,t,r,o,a){return this}insert(e,t,r){return new Kt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Lt{constructor(e){this.comparator=e,this.data=new _t(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const o=r.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new s_(this.data.getIterator())}getIteratorFrom(e){return new s_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof Lt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=r.getNext().key;if(this.comparator(o,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Lt(this.comparator);return t.data=e,t}}class s_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Vn{constructor(e){this.fields=e,e.sort(Qt.comparator)}static empty(){return new Vn([])}unionWith(e){let t=new Lt(Qt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Vn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ba(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class XE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Yt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new XE("Invalid base64 string: "+a):a}})(e);return new Yt(t)}static fromUint8Array(e){const t=(function(o){let a="";for(let u=0;u<o.length;++u)a+=String.fromCharCode(o[u]);return a})(e);return new Yt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let o=0;o<t.length;o++)r[o]=t.charCodeAt(o);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Yt.EMPTY_BYTE_STRING=new Yt("");const UP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ii(n){if(We(!!n,39018),typeof n=="string"){let e=0;const t=UP.exec(n);if(We(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:At(n.seconds),nanos:At(n.nanos)}}function At(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Si(n){return typeof n=="string"?Yt.fromBase64String(n):Yt.fromUint8Array(n)}/**
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
 */const JE="server_timestamp",ZE="__type__",eT="__previous_value__",tT="__local_write_time__";function em(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[ZE])==null?void 0:r.stringValue)===JE}function Dd(n){const e=n.mapValue.fields[eT];return em(e)?Dd(e):e}function eu(n){const e=Ii(n.mapValue.fields[tT].timestampValue);return new ct(e.seconds,e.nanos)}/**
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
 */class jP{constructor(e,t,r,o,a,u,h,p,y,_,E){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=o,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=h,this.longPollingOptions=p,this.useFetchStreams=y,this.isUsingEmulator=_,this.apiKey=E}}const ld="(default)";class tu{constructor(e,t){this.projectId=e,this.database=t||ld}static empty(){return new tu("","")}get isDefaultDatabase(){return this.database===ld}isEqual(e){return e instanceof tu&&e.projectId===this.projectId&&e.database===this.database}}function zP(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new oe(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tu(n.options.projectId,e)}/**
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
 */const nT="__type__",BP="__max__",Rc={mapValue:{}},rT="__vector__",ud="value";function Ai(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?em(n)?4:WP(n)?9007199254740991:$P(n)?10:11:Ie(28295,{value:n})}function Zr(n,e){if(n===e)return!0;const t=Ai(n);if(t!==Ai(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return eu(n).isEqual(eu(e));case 3:return(function(o,a){if(typeof o.timestampValue=="string"&&typeof a.timestampValue=="string"&&o.timestampValue.length===a.timestampValue.length)return o.timestampValue===a.timestampValue;const u=Ii(o.timestampValue),h=Ii(a.timestampValue);return u.seconds===h.seconds&&u.nanos===h.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,a){return Si(o.bytesValue).isEqual(Si(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,a){return At(o.geoPointValue.latitude)===At(a.geoPointValue.latitude)&&At(o.geoPointValue.longitude)===At(a.geoPointValue.longitude)})(n,e);case 2:return(function(o,a){if("integerValue"in o&&"integerValue"in a)return At(o.integerValue)===At(a.integerValue);if("doubleValue"in o&&"doubleValue"in a){const u=At(o.doubleValue),h=At(a.doubleValue);return u===h?ad(u)===ad(h):isNaN(u)&&isNaN(h)}return!1})(n,e);case 9:return ba(n.arrayValue.values||[],e.arrayValue.values||[],Zr);case 10:case 11:return(function(o,a){const u=o.mapValue.fields||{},h=a.mapValue.fields||{};if(r_(u)!==r_(h))return!1;for(const p in u)if(u.hasOwnProperty(p)&&(h[p]===void 0||!Zr(u[p],h[p])))return!1;return!0})(n,e);default:return Ie(52216,{left:n})}}function nu(n,e){return(n.values||[]).find((t=>Zr(t,e)))!==void 0}function Na(n,e){if(n===e)return 0;const t=Ai(n),r=Ai(e);if(t!==r)return Ue(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ue(n.booleanValue,e.booleanValue);case 2:return(function(a,u){const h=At(a.integerValue||a.doubleValue),p=At(u.integerValue||u.doubleValue);return h<p?-1:h>p?1:h===p?0:isNaN(h)?isNaN(p)?0:-1:1})(n,e);case 3:return i_(n.timestampValue,e.timestampValue);case 4:return i_(eu(n),eu(e));case 5:return up(n.stringValue,e.stringValue);case 6:return(function(a,u){const h=Si(a),p=Si(u);return h.compareTo(p)})(n.bytesValue,e.bytesValue);case 7:return(function(a,u){const h=a.split("/"),p=u.split("/");for(let y=0;y<h.length&&y<p.length;y++){const _=Ue(h[y],p[y]);if(_!==0)return _}return Ue(h.length,p.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,u){const h=Ue(At(a.latitude),At(u.latitude));return h!==0?h:Ue(At(a.longitude),At(u.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return o_(n.arrayValue,e.arrayValue);case 10:return(function(a,u){var T,O,q,V;const h=a.fields||{},p=u.fields||{},y=(T=h[ud])==null?void 0:T.arrayValue,_=(O=p[ud])==null?void 0:O.arrayValue,E=Ue(((q=y==null?void 0:y.values)==null?void 0:q.length)||0,((V=_==null?void 0:_.values)==null?void 0:V.length)||0);return E!==0?E:o_(y,_)})(n.mapValue,e.mapValue);case 11:return(function(a,u){if(a===Rc.mapValue&&u===Rc.mapValue)return 0;if(a===Rc.mapValue)return 1;if(u===Rc.mapValue)return-1;const h=a.fields||{},p=Object.keys(h),y=u.fields||{},_=Object.keys(y);p.sort(),_.sort();for(let E=0;E<p.length&&E<_.length;++E){const T=up(p[E],_[E]);if(T!==0)return T;const O=Na(h[p[E]],y[_[E]]);if(O!==0)return O}return Ue(p.length,_.length)})(n.mapValue,e.mapValue);default:throw Ie(23264,{he:t})}}function i_(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ue(n,e);const t=Ii(n),r=Ii(e),o=Ue(t.seconds,r.seconds);return o!==0?o:Ue(t.nanos,r.nanos)}function o_(n,e){const t=n.values||[],r=e.values||[];for(let o=0;o<t.length&&o<r.length;++o){const a=Na(t[o],r[o]);if(a)return a}return Ue(t.length,r.length)}function Da(n){return cp(n)}function cp(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Ii(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Si(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return Ee.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",o=!0;for(const a of t.values||[])o?o=!1:r+=",",r+=cp(a);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let o="{",a=!0;for(const u of r)a?a=!1:o+=",",o+=`${u}:${cp(t.fields[u])}`;return o+"}"})(n.mapValue):Ie(61005,{value:n})}function Wc(n){switch(Ai(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Dd(n);return e?16+Wc(e):16;case 5:return 2*n.stringValue.length;case 6:return Si(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((o,a)=>o+Wc(a)),0)})(n.arrayValue);case 10:case 11:return(function(r){let o=0;return bi(r.fields,((a,u)=>{o+=a.length+Wc(u)})),o})(n.mapValue);default:throw Ie(13486,{value:n})}}function a_(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function dp(n){return!!n&&"integerValue"in n}function tm(n){return!!n&&"arrayValue"in n}function l_(n){return!!n&&"nullValue"in n}function u_(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function qc(n){return!!n&&"mapValue"in n}function $P(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[nT])==null?void 0:r.stringValue)===rT}function Wl(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return bi(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Wl(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Wl(n.arrayValue.values[t]);return e}return{...n}}function WP(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===BP}/**
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
 */class cn{constructor(e){this.value=e}static empty(){return new cn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!qc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wl(t)}setAll(e){let t=Qt.emptyPath(),r={},o=[];e.forEach(((u,h)=>{if(!t.isImmediateParentOf(h)){const p=this.getFieldsMap(t);this.applyChanges(p,r,o),r={},o=[],t=h.popLast()}u?r[h.lastSegment()]=Wl(u):o.push(h.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,r,o)}delete(e){const t=this.field(e.popLast());qc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Zr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let o=t.mapValue.fields[e.get(r)];qc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,r){bi(t,((o,a)=>e[o]=a));for(const o of r)delete e[o]}clone(){return new cn(Wl(this.value))}}function sT(n){const e=[];return bi(n.fields,((t,r)=>{const o=new Qt([t]);if(qc(r)){const a=sT(r.mapValue).fields;if(a.length===0)e.push(o);else for(const u of a)e.push(o.child(u))}else e.push(o)})),new Vn(e)}/**
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
 */class $t{constructor(e,t,r,o,a,u,h){this.key=e,this.documentType=t,this.version=r,this.readTime=o,this.createTime=a,this.data=u,this.documentState=h}static newInvalidDocument(e){return new $t(e,0,Re.min(),Re.min(),Re.min(),cn.empty(),0)}static newFoundDocument(e,t,r,o){return new $t(e,1,t,Re.min(),r,o,0)}static newNoDocument(e,t){return new $t(e,2,t,Re.min(),Re.min(),cn.empty(),0)}static newUnknownDocument(e,t){return new $t(e,3,t,Re.min(),Re.min(),cn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=cn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=cn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class cd{constructor(e,t){this.position=e,this.inclusive=t}}function c_(n,e,t){let r=0;for(let o=0;o<n.position.length;o++){const a=e[o],u=n.position[o];if(a.field.isKeyField()?r=Ee.comparator(Ee.fromName(u.referenceValue),t.key):r=Na(u,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function d_(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Zr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ru{constructor(e,t="asc"){this.field=e,this.dir=t}}function qP(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class iT{}class bt extends iT{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new GP(e,t,r):t==="array-contains"?new YP(e,r):t==="in"?new XP(e,r):t==="not-in"?new JP(e,r):t==="array-contains-any"?new ZP(e,r):new bt(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new KP(e,r):new QP(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Na(t,this.value)):t!==null&&Ai(this.value)===Ai(t)&&this.matchesComparison(Na(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ie(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class yr extends iT{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new yr(e,t)}matches(e){return oT(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function oT(n){return n.op==="and"}function aT(n){return HP(n)&&oT(n)}function HP(n){for(const e of n.filters)if(e instanceof yr)return!1;return!0}function hp(n){if(n instanceof bt)return n.field.canonicalString()+n.op.toString()+Da(n.value);if(aT(n))return n.filters.map((e=>hp(e))).join(",");{const e=n.filters.map((t=>hp(t))).join(",");return`${n.op}(${e})`}}function lT(n,e){return n instanceof bt?(function(r,o){return o instanceof bt&&r.op===o.op&&r.field.isEqual(o.field)&&Zr(r.value,o.value)})(n,e):n instanceof yr?(function(r,o){return o instanceof yr&&r.op===o.op&&r.filters.length===o.filters.length?r.filters.reduce(((a,u,h)=>a&&lT(u,o.filters[h])),!0):!1})(n,e):void Ie(19439)}function uT(n){return n instanceof bt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Da(t.value)}`})(n):n instanceof yr?(function(t){return t.op.toString()+" {"+t.getFilters().map(uT).join(" ,")+"}"})(n):"Filter"}class GP extends bt{constructor(e,t,r){super(e,t,r),this.key=Ee.fromName(r.referenceValue)}matches(e){const t=Ee.comparator(e.key,this.key);return this.matchesComparison(t)}}class KP extends bt{constructor(e,t){super(e,"in",t),this.keys=cT("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class QP extends bt{constructor(e,t){super(e,"not-in",t),this.keys=cT("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function cT(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((r=>Ee.fromName(r.referenceValue)))}class YP extends bt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return tm(t)&&nu(t.arrayValue,this.value)}}class XP extends bt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&nu(this.value.arrayValue,t)}}class JP extends bt{constructor(e,t){super(e,"not-in",t)}matches(e){if(nu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!nu(this.value.arrayValue,t)}}class ZP extends bt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!tm(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>nu(this.value.arrayValue,r)))}}/**
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
 */class ex{constructor(e,t=null,r=[],o=[],a=null,u=null,h=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=o,this.limit=a,this.startAt=u,this.endAt=h,this.Te=null}}function h_(n,e=null,t=[],r=[],o=null,a=null,u=null){return new ex(n,e,t,r,o,a,u)}function nm(n){const e=xe(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>hp(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(a){return a.field.canonicalString()+a.dir})(r))).join(","),du(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>Da(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>Da(r))).join(",")),e.Te=t}return e.Te}function rm(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!qP(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!lT(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!d_(n.startAt,e.startAt)&&d_(n.endAt,e.endAt)}function fp(n){return Ee.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Ba{constructor(e,t=null,r=[],o=[],a=null,u="F",h=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=o,this.limit=a,this.limitType=u,this.startAt=h,this.endAt=p,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function tx(n,e,t,r,o,a,u,h){return new Ba(n,e,t,r,o,a,u,h)}function Od(n){return new Ba(n)}function f_(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function nx(n){return Ee.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function dT(n){return n.collectionGroup!==null}function ql(n){const e=xe(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const a of e.explicitOrderBy)e.Ie.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let h=new Lt(Qt.comparator);return u.filters.forEach((p=>{p.getFlattenedFilters().forEach((y=>{y.isInequality()&&(h=h.add(y.field))}))})),h})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Ie.push(new ru(a,r))})),t.has(Qt.keyField().canonicalString())||e.Ie.push(new ru(Qt.keyField(),r))}return e.Ie}function Xr(n){const e=xe(n);return e.Ee||(e.Ee=rx(e,ql(n))),e.Ee}function rx(n,e){if(n.limitType==="F")return h_(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const a=o.dir==="desc"?"asc":"desc";return new ru(o.field,a)}));const t=n.endAt?new cd(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new cd(n.startAt.position,n.startAt.inclusive):null;return h_(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function pp(n,e){const t=n.filters.concat([e]);return new Ba(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function sx(n,e){const t=n.explicitOrderBy.concat([e]);return new Ba(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function mp(n,e,t){return new Ba(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Vd(n,e){return rm(Xr(n),Xr(e))&&n.limitType===e.limitType}function hT(n){return`${nm(Xr(n))}|lt:${n.limitType}`}function va(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((o=>uT(o))).join(", ")}]`),du(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((o=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(o))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((o=>Da(o))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((o=>Da(o))).join(",")),`Target(${r})`})(Xr(n))}; limitType=${n.limitType})`}function Md(n,e){return e.isFoundDocument()&&(function(r,o){const a=o.key.path;return r.collectionGroup!==null?o.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):Ee.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)})(n,e)&&(function(r,o){for(const a of ql(r))if(!a.field.isKeyField()&&o.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(r,o){for(const a of r.filters)if(!a.matches(o))return!1;return!0})(n,e)&&(function(r,o){return!(r.startAt&&!(function(u,h,p){const y=c_(u,h,p);return u.inclusive?y<=0:y<0})(r.startAt,ql(r),o)||r.endAt&&!(function(u,h,p){const y=c_(u,h,p);return u.inclusive?y>=0:y>0})(r.endAt,ql(r),o))})(n,e)}function ix(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function fT(n){return(e,t)=>{let r=!1;for(const o of ql(n)){const a=ox(o,e,t);if(a!==0)return a;r=r||o.field.isKeyField()}return 0}}function ox(n,e,t){const r=n.field.isKeyField()?Ee.comparator(e.key,t.key):(function(a,u,h){const p=u.data.field(a),y=h.data.field(a);return p!==null&&y!==null?Na(p,y):Ie(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Ie(19790,{direction:n.dir})}}/**
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
 */class ko{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[o,a]of r)if(this.equalsFn(o,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),o=this.inner[r];if(o===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<o.length;a++)if(this.equalsFn(o[a][0],e))return void(o[a]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return r.length===1?delete this.inner[t]:r.splice(o,1),this.innerSize--,!0;return!1}forEach(e){bi(this.inner,((t,r)=>{for(const[o,a]of r)e(o,a)}))}isEmpty(){return YE(this.inner)}size(){return this.innerSize}}/**
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
 */const ax=new _t(Ee.comparator);function Ps(){return ax}const pT=new _t(Ee.comparator);function Ul(...n){let e=pT;for(const t of n)e=e.insert(t.key,t);return e}function mT(n){let e=pT;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function po(){return Hl()}function gT(){return Hl()}function Hl(){return new ko((n=>n.toString()),((n,e)=>n.isEqual(e)))}const lx=new _t(Ee.comparator),ux=new Lt(Ee.comparator);function je(...n){let e=ux;for(const t of n)e=e.add(t);return e}const cx=new Lt(Ue);function dx(){return cx}/**
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
 */function sm(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ad(e)?"-0":e}}function yT(n){return{integerValue:""+n}}function hx(n,e){return MP(e)?yT(e):sm(n,e)}/**
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
 */class Ld{constructor(){this._=void 0}}function fx(n,e,t){return n instanceof su?(function(o,a){const u={fields:{[ZE]:{stringValue:JE},[tT]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return a&&em(a)&&(a=Dd(a)),a&&(u.fields[eT]=a),{mapValue:u}})(t,e):n instanceof Oa?_T(n,e):n instanceof iu?wT(n,e):(function(o,a){const u=vT(o,a),h=p_(u)+p_(o.Ae);return dp(u)&&dp(o.Ae)?yT(h):sm(o.serializer,h)})(n,e)}function px(n,e,t){return n instanceof Oa?_T(n,e):n instanceof iu?wT(n,e):t}function vT(n,e){return n instanceof dd?(function(r){return dp(r)||(function(a){return!!a&&"doubleValue"in a})(r)})(e)?e:{integerValue:0}:null}class su extends Ld{}class Oa extends Ld{constructor(e){super(),this.elements=e}}function _T(n,e){const t=ET(e);for(const r of n.elements)t.some((o=>Zr(o,r)))||t.push(r);return{arrayValue:{values:t}}}class iu extends Ld{constructor(e){super(),this.elements=e}}function wT(n,e){let t=ET(e);for(const r of n.elements)t=t.filter((o=>!Zr(o,r)));return{arrayValue:{values:t}}}class dd extends Ld{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function p_(n){return At(n.integerValue||n.doubleValue)}function ET(n){return tm(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class TT{constructor(e,t){this.field=e,this.transform=t}}function mx(n,e){return n.field.isEqual(e.field)&&(function(r,o){return r instanceof Oa&&o instanceof Oa||r instanceof iu&&o instanceof iu?ba(r.elements,o.elements,Zr):r instanceof dd&&o instanceof dd?Zr(r.Ae,o.Ae):r instanceof su&&o instanceof su})(n.transform,e.transform)}class gx{constructor(e,t){this.version=e,this.transformResults=t}}class dn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new dn}static exists(e){return new dn(void 0,e)}static updateTime(e){return new dn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Hc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Fd{}function IT(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new im(n.key,dn.none()):new hu(n.key,n.data,dn.none());{const t=n.data,r=cn.empty();let o=new Lt(Qt.comparator);for(let a of e.fields)if(!o.has(a)){let u=t.field(a);u===null&&a.length>1&&(a=a.popLast(),u=t.field(a)),u===null?r.delete(a):r.set(a,u),o=o.add(a)}return new Ni(n.key,r,new Vn(o.toArray()),dn.none())}}function yx(n,e,t){n instanceof hu?(function(o,a,u){const h=o.value.clone(),p=g_(o.fieldTransforms,a,u.transformResults);h.setAll(p),a.convertToFoundDocument(u.version,h).setHasCommittedMutations()})(n,e,t):n instanceof Ni?(function(o,a,u){if(!Hc(o.precondition,a))return void a.convertToUnknownDocument(u.version);const h=g_(o.fieldTransforms,a,u.transformResults),p=a.data;p.setAll(ST(o)),p.setAll(h),a.convertToFoundDocument(u.version,p).setHasCommittedMutations()})(n,e,t):(function(o,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()})(0,e,t)}function Gl(n,e,t,r){return n instanceof hu?(function(a,u,h,p){if(!Hc(a.precondition,u))return h;const y=a.value.clone(),_=y_(a.fieldTransforms,p,u);return y.setAll(_),u.convertToFoundDocument(u.version,y).setHasLocalMutations(),null})(n,e,t,r):n instanceof Ni?(function(a,u,h,p){if(!Hc(a.precondition,u))return h;const y=y_(a.fieldTransforms,p,u),_=u.data;return _.setAll(ST(a)),_.setAll(y),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),h===null?null:h.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((E=>E.field)))})(n,e,t,r):(function(a,u,h){return Hc(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):h})(n,e,t)}function vx(n,e){let t=null;for(const r of n.fieldTransforms){const o=e.data.field(r.field),a=vT(r.transform,o||null);a!=null&&(t===null&&(t=cn.empty()),t.set(r.field,a))}return t||null}function m_(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,o){return r===void 0&&o===void 0||!(!r||!o)&&ba(r,o,((a,u)=>mx(a,u)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class hu extends Fd{constructor(e,t,r,o=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ni extends Fd{constructor(e,t,r,o,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=o,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function ST(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function g_(n,e,t){const r=new Map;We(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let o=0;o<t.length;o++){const a=n[o],u=a.transform,h=e.data.field(a.field);r.set(a.field,px(u,h,t[o]))}return r}function y_(n,e,t){const r=new Map;for(const o of n){const a=o.transform,u=t.data.field(o.field);r.set(o.field,fx(a,u,e))}return r}class im extends Fd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class AT extends Fd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class _x{constructor(e,t,r,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=o}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const a=this.mutations[o];a.key.isEqual(e.key)&&yx(a,e,r[o])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Gl(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Gl(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=gT();return this.mutations.forEach((o=>{const a=e.get(o.key),u=a.overlayedDocument;let h=this.applyToLocalView(u,a.mutatedFields);h=t.has(o.key)?null:h;const p=IT(u,h);p!==null&&r.set(o.key,p),u.isValidDocument()||u.convertToNoDocument(Re.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),je())}isEqual(e){return this.batchId===e.batchId&&ba(this.mutations,e.mutations,((t,r)=>m_(t,r)))&&ba(this.baseMutations,e.baseMutations,((t,r)=>m_(t,r)))}}class om{constructor(e,t,r,o){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=o}static from(e,t,r){We(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let o=(function(){return lx})();const a=e.mutations;for(let u=0;u<a.length;u++)o=o.insert(a[u].key,r[u].version);return new om(e,t,r,o)}}/**
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
 */let wx=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Ex{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var xt,$e;function RT(n){switch(n){case K.OK:return Ie(64938);case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0;default:return Ie(15467,{code:n})}}function CT(n){if(n===void 0)return ks("GRPC error has no .code"),K.UNKNOWN;switch(n){case xt.OK:return K.OK;case xt.CANCELLED:return K.CANCELLED;case xt.UNKNOWN:return K.UNKNOWN;case xt.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case xt.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case xt.INTERNAL:return K.INTERNAL;case xt.UNAVAILABLE:return K.UNAVAILABLE;case xt.UNAUTHENTICATED:return K.UNAUTHENTICATED;case xt.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case xt.NOT_FOUND:return K.NOT_FOUND;case xt.ALREADY_EXISTS:return K.ALREADY_EXISTS;case xt.PERMISSION_DENIED:return K.PERMISSION_DENIED;case xt.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case xt.ABORTED:return K.ABORTED;case xt.OUT_OF_RANGE:return K.OUT_OF_RANGE;case xt.UNIMPLEMENTED:return K.UNIMPLEMENTED;case xt.DATA_LOSS:return K.DATA_LOSS;default:return Ie(39323,{code:n})}}($e=xt||(xt={}))[$e.OK=0]="OK",$e[$e.CANCELLED=1]="CANCELLED",$e[$e.UNKNOWN=2]="UNKNOWN",$e[$e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$e[$e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$e[$e.NOT_FOUND=5]="NOT_FOUND",$e[$e.ALREADY_EXISTS=6]="ALREADY_EXISTS",$e[$e.PERMISSION_DENIED=7]="PERMISSION_DENIED",$e[$e.UNAUTHENTICATED=16]="UNAUTHENTICATED",$e[$e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$e[$e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$e[$e.ABORTED=10]="ABORTED",$e[$e.OUT_OF_RANGE=11]="OUT_OF_RANGE",$e[$e.UNIMPLEMENTED=12]="UNIMPLEMENTED",$e[$e.INTERNAL=13]="INTERNAL",$e[$e.UNAVAILABLE=14]="UNAVAILABLE",$e[$e.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Tx(){return new TextEncoder}/**
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
 */const Ix=new vi([4294967295,4294967295],0);function v_(n){const e=Tx().encode(n),t=new UE;return t.update(e),new Uint8Array(t.digest())}function __(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),o=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new vi([t,r],0),new vi([o,a],0)]}class am{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new jl(`Invalid padding: ${t}`);if(r<0)throw new jl(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new jl(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new jl(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=vi.fromNumber(this.ge)}ye(e,t,r){let o=e.add(t.multiply(vi.fromNumber(r)));return o.compare(Ix)===1&&(o=new vi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=v_(e),[r,o]=__(t);for(let a=0;a<this.hashCount;a++){const u=this.ye(r,o,a);if(!this.we(u))return!1}return!0}static create(e,t,r){const o=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),u=new am(a,o,t);return r.forEach((h=>u.insert(h))),u}insert(e){if(this.ge===0)return;const t=v_(e),[r,o]=__(t);for(let a=0;a<this.hashCount;a++){const u=this.ye(r,o,a);this.be(u)}}be(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class jl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ud{constructor(e,t,r,o,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=o,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const o=new Map;return o.set(e,fu.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ud(Re.min(),o,new _t(Ue),Ps(),je())}}class fu{constructor(e,t,r,o,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=o,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new fu(r,t,je(),je(),je())}}/**
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
 */class Gc{constructor(e,t,r,o){this.Se=e,this.removedTargetIds=t,this.key=r,this.De=o}}class kT{constructor(e,t){this.targetId=e,this.Ce=t}}class PT{constructor(e,t,r=Yt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=o}}class w_{constructor(){this.ve=0,this.Fe=E_(),this.Me=Yt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=je(),t=je(),r=je();return this.Fe.forEach(((o,a)=>{switch(a){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:r=r.add(o);break;default:Ie(38017,{changeType:a})}})),new fu(this.Me,this.xe,e,t,r)}Ke(){this.Oe=!1,this.Fe=E_()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,We(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Sx{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ps(),this.He=Cc(),this.Je=Cc(),this.Ze=new _t(Ue)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:Ie(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,r=e.Ce.count,o=this.ot(t);if(o){const a=o.target;if(fp(a))if(r===0){const u=new Ee(a.path);this.et(t,u,$t.newNoDocument(u,Re.min()))}else We(r===1,20013,{expectedCount:r});else{const u=this._t(t);if(u!==r){const h=this.ut(e),p=h?this.ct(h,e,u):1;if(p!==0){this.it(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,y)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=t;let u,h;try{u=Si(r).toUint8Array()}catch(p){if(p instanceof XE)return Eo("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{h=new am(u,o,a)}catch(p){return Eo(p instanceof jl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return h.ge===0?null:h}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let o=0;return r.forEach((a=>{const u=this.Ge.ht(),h=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;e.mightContain(h)||(this.et(t,a,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((a,u)=>{const h=this.ot(u);if(h){if(a.current&&fp(h.target)){const p=new Ee(h.target.path);this.It(p).has(u)||this.Et(u,p)||this.et(u,p,$t.newNoDocument(p,e))}a.Be&&(t.set(u,a.ke()),a.Ke())}}));let r=je();this.Je.forEach(((a,u)=>{let h=!0;u.forEachWhile((p=>{const y=this.ot(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(h=!1,!1)})),h&&(r=r.add(a))})),this.je.forEach(((a,u)=>u.setReadTime(e)));const o=new Ud(e,t,this.Ze,this.je,r);return this.je=Ps(),this.He=Cc(),this.Je=Cc(),this.Ze=new _t(Ue),o}Ye(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,r),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.qe(t,1):o.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new w_,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new Lt(Ue),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new Lt(Ue),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ce("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new w_),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Cc(){return new _t(Ee.comparator)}function E_(){return new _t(Ee.comparator)}const Ax={asc:"ASCENDING",desc:"DESCENDING"},Rx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Cx={and:"AND",or:"OR"};class kx{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function gp(n,e){return n.useProto3Json||du(e)?e:{value:e}}function hd(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xT(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Px(n,e){return hd(n,e.toTimestamp())}function Un(n){return We(!!n,49232),Re.fromTimestamp((function(t){const r=Ii(t);return new ct(r.seconds,r.nanos)})(n))}function lm(n,e){return yp(n,e).canonicalString()}function yp(n,e){const t=(function(o){return new nt(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function bT(n){const e=nt.fromString(n);return We(LT(e),10190,{key:e.toString()}),e}function fd(n,e){return lm(n.databaseId,e.path)}function Kl(n,e){const t=bT(e);if(t.get(1)!==n.databaseId.projectId)throw new oe(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new oe(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Ee(DT(t))}function NT(n,e){return lm(n.databaseId,e)}function xx(n){const e=bT(n);return e.length===4?nt.emptyPath():DT(e)}function vp(n){return new nt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function DT(n){return We(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function T_(n,e,t){return{name:fd(n,e),fields:t.value.mapValue.fields}}function bx(n,e){return"found"in e?(function(r,o){We(!!o.found,43571),o.found.name,o.found.updateTime;const a=Kl(r,o.found.name),u=Un(o.found.updateTime),h=o.found.createTime?Un(o.found.createTime):Re.min(),p=new cn({mapValue:{fields:o.found.fields}});return $t.newFoundDocument(a,u,h,p)})(n,e):"missing"in e?(function(r,o){We(!!o.missing,3894),We(!!o.readTime,22933);const a=Kl(r,o.missing),u=Un(o.readTime);return $t.newNoDocument(a,u)})(n,e):Ie(7234,{result:e})}function Nx(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Ie(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],a=(function(y,_){return y.useProto3Json?(We(_===void 0||typeof _=="string",58123),Yt.fromBase64String(_||"")):(We(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array,16193),Yt.fromUint8Array(_||new Uint8Array))})(n,e.targetChange.resumeToken),u=e.targetChange.cause,h=u&&(function(y){const _=y.code===void 0?K.UNKNOWN:CT(y.code);return new oe(_,y.message||"")})(u);t=new PT(r,o,a,h||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const o=Kl(n,r.document.name),a=Un(r.document.updateTime),u=r.document.createTime?Un(r.document.createTime):Re.min(),h=new cn({mapValue:{fields:r.document.fields}}),p=$t.newFoundDocument(o,a,u,h),y=r.targetIds||[],_=r.removedTargetIds||[];t=new Gc(y,_,p.key,p)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const o=Kl(n,r.document),a=r.readTime?Un(r.readTime):Re.min(),u=$t.newNoDocument(o,a),h=r.removedTargetIds||[];t=new Gc([],h,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const o=Kl(n,r.document),a=r.removedTargetIds||[];t=new Gc([],a,o,null)}else{if(!("filter"in e))return Ie(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:o=0,unchangedNames:a}=r,u=new Ex(o,a),h=r.targetId;t=new kT(h,u)}}return t}function OT(n,e){let t;if(e instanceof hu)t={update:T_(n,e.key,e.value)};else if(e instanceof im)t={delete:fd(n,e.key)};else if(e instanceof Ni)t={update:T_(n,e.key,e.data),updateMask:zx(e.fieldMask)};else{if(!(e instanceof AT))return Ie(16599,{dt:e.type});t={verify:fd(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(a,u){const h=u.transform;if(h instanceof su)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof Oa)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof iu)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof dd)return{fieldPath:u.field.canonicalString(),increment:h.Ae};throw Ie(20930,{transform:u.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(o,a){return a.updateTime!==void 0?{updateTime:Px(o,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:Ie(27497)})(n,e.precondition)),t}function Dx(n,e){return n&&n.length>0?(We(e!==void 0,14353),n.map((t=>(function(o,a){let u=o.updateTime?Un(o.updateTime):Un(a);return u.isEqual(Re.min())&&(u=Un(a)),new gx(u,o.transformResults||[])})(t,e)))):[]}function Ox(n,e){return{documents:[NT(n,e.path)]}}function Vx(n,e){const t={structuredQuery:{}},r=e.path;let o;e.collectionGroup!==null?(o=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=NT(n,o);const a=(function(y){if(y.length!==0)return MT(yr.create(y,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const u=(function(y){if(y.length!==0)return y.map((_=>(function(T){return{field:_a(T.field),direction:Fx(T.dir)}})(_)))})(e.orderBy);u&&(t.structuredQuery.orderBy=u);const h=gp(n,e.limit);return h!==null&&(t.structuredQuery.limit=h),e.startAt&&(t.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{ft:t,parent:o}}function Mx(n){let e=xx(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let o=null;if(r>0){We(r===1,65062);const _=t.from[0];_.allDescendants?o=_.collectionId:e=e.child(_.collectionId)}let a=[];t.where&&(a=(function(E){const T=VT(E);return T instanceof yr&&aT(T)?T.getFilters():[T]})(t.where));let u=[];t.orderBy&&(u=(function(E){return E.map((T=>(function(q){return new ru(wa(q.field),(function(U){switch(U){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(q.direction))})(T)))})(t.orderBy));let h=null;t.limit&&(h=(function(E){let T;return T=typeof E=="object"?E.value:E,du(T)?null:T})(t.limit));let p=null;t.startAt&&(p=(function(E){const T=!!E.before,O=E.values||[];return new cd(O,T)})(t.startAt));let y=null;return t.endAt&&(y=(function(E){const T=!E.before,O=E.values||[];return new cd(O,T)})(t.endAt)),tx(e,o,u,a,h,"F",p,y)}function Lx(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ie(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function VT(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=wa(t.unaryFilter.field);return bt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const o=wa(t.unaryFilter.field);return bt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=wa(t.unaryFilter.field);return bt.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=wa(t.unaryFilter.field);return bt.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ie(61313);default:return Ie(60726)}})(n):n.fieldFilter!==void 0?(function(t){return bt.create(wa(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ie(58110);default:return Ie(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return yr.create(t.compositeFilter.filters.map((r=>VT(r))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ie(1026)}})(t.compositeFilter.op))})(n):Ie(30097,{filter:n})}function Fx(n){return Ax[n]}function Ux(n){return Rx[n]}function jx(n){return Cx[n]}function _a(n){return{fieldPath:n.canonicalString()}}function wa(n){return Qt.fromServerFormat(n.fieldPath)}function MT(n){return n instanceof bt?(function(t){if(t.op==="=="){if(u_(t.value))return{unaryFilter:{field:_a(t.field),op:"IS_NAN"}};if(l_(t.value))return{unaryFilter:{field:_a(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(u_(t.value))return{unaryFilter:{field:_a(t.field),op:"IS_NOT_NAN"}};if(l_(t.value))return{unaryFilter:{field:_a(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_a(t.field),op:Ux(t.op),value:t.value}}})(n):n instanceof yr?(function(t){const r=t.getFilters().map((o=>MT(o)));return r.length===1?r[0]:{compositeFilter:{op:jx(t.op),filters:r}}})(n):Ie(54877,{filter:n})}function zx(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function LT(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function FT(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class pi{constructor(e,t,r,o,a=Re.min(),u=Re.min(),h=Yt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=o,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=h,this.expectedCount=p}withSequenceNumber(e){return new pi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new pi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new pi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new pi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Bx{constructor(e){this.yt=e}}function $x(n){const e=Mx({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?mp(e,e.limit,"L"):e}/**
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
 */class Wx{constructor(){this.Sn=new qx}addToCollectionParentIndex(e,t){return this.Sn.add(t),Y.resolve()}getCollectionParents(e,t){return Y.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return Y.resolve()}deleteFieldIndex(e,t){return Y.resolve()}deleteAllFieldIndexes(e){return Y.resolve()}createTargetIndexes(e,t){return Y.resolve()}getDocumentsMatchingTarget(e,t){return Y.resolve(null)}getIndexType(e,t){return Y.resolve(0)}getFieldIndexes(e,t){return Y.resolve([])}getNextCollectionGroupToUpdate(e){return Y.resolve(null)}getMinOffset(e,t){return Y.resolve(Ti.min())}getMinOffsetFromCollectionGroup(e,t){return Y.resolve(Ti.min())}updateCollectionGroup(e,t,r){return Y.resolve()}updateIndexEntries(e,t){return Y.resolve()}}class qx{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),o=this.index[t]||new Lt(nt.comparator),a=!o.has(r);return this.index[t]=o.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),o=this.index[t];return o&&o.has(r)}getEntries(e){return(this.index[e]||new Lt(nt.comparator)).toArray()}}/**
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
 */const I_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},UT=41943040;class Tn{static withCacheSize(e){return new Tn(e,Tn.DEFAULT_COLLECTION_PERCENTILE,Tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Tn.DEFAULT_COLLECTION_PERCENTILE=10,Tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tn.DEFAULT=new Tn(UT,Tn.DEFAULT_COLLECTION_PERCENTILE,Tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tn.DISABLED=new Tn(-1,0,0);/**
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
 */class Va{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Va(0)}static ar(){return new Va(-1)}}/**
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
 */const S_="LruGarbageCollector",Hx=1048576;function A_([n,e],[t,r]){const o=Ue(n,t);return o===0?Ue(e,r):o}class Gx{constructor(e){this.Pr=e,this.buffer=new Lt(A_),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();A_(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Kx{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){ce(S_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){za(t)?ce(S_,"Ignoring IndexedDB error during garbage collection: ",t):await ja(t)}await this.Ar(3e5)}))}}class Qx{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return Y.resolve(Nd.ce);const r=new Gx(t);return this.Vr.forEachTarget(e,(o=>r.Er(o.sequenceNumber))).next((()=>this.Vr.mr(e,(o=>r.Er(o))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ce("LruGarbageCollector","Garbage collection skipped; disabled"),Y.resolve(I_)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(ce("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),I_):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let r,o,a,u,h,p,y;const _=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((E=>(E>this.params.maximumSequenceNumbersToCollect?(ce("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),o=this.params.maximumSequenceNumbersToCollect):o=E,u=Date.now(),this.nthSequenceNumber(e,o)))).next((E=>(r=E,h=Date.now(),this.removeTargets(e,r,t)))).next((E=>(a=E,p=Date.now(),this.removeOrphanedDocuments(e,r)))).next((E=>(y=Date.now(),ya()<=Fe.DEBUG&&ce("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-_}ms
	Determined least recently used ${o} in `+(h-u)+`ms
	Removed ${a} targets in `+(p-h)+`ms
	Removed ${E} documents in `+(y-p)+`ms
Total Duration: ${y-_}ms`),Y.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:a,documentsRemoved:E}))))}}function Yx(n,e){return new Qx(n,e)}/**
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
 */class Xx{constructor(){this.changes=new ko((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,$t.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?Y.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Jx{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Zx{constructor(e,t,r,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=o}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(r=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(r!==null&&Gl(r.mutation,o,Vn.empty(),ct.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,je()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=je()){const o=po();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,r).next((a=>{let u=Ul();return a.forEach(((h,p)=>{u=u.insert(h,p.overlayedDocument)})),u}))))}getOverlayedDocuments(e,t){const r=po();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,je())))}populateOverlays(e,t,r){const o=[];return r.forEach((a=>{t.has(a)||o.push(a)})),this.documentOverlayCache.getOverlays(e,o).next((a=>{a.forEach(((u,h)=>{t.set(u,h)}))}))}computeViews(e,t,r,o){let a=Ps();const u=Hl(),h=(function(){return Hl()})();return t.forEach(((p,y)=>{const _=r.get(y.key);o.has(y.key)&&(_===void 0||_.mutation instanceof Ni)?a=a.insert(y.key,y):_!==void 0?(u.set(y.key,_.mutation.getFieldMask()),Gl(_.mutation,y,_.mutation.getFieldMask(),ct.now())):u.set(y.key,Vn.empty())})),this.recalculateAndSaveOverlays(e,a).next((p=>(p.forEach(((y,_)=>u.set(y,_))),t.forEach(((y,_)=>h.set(y,new Jx(_,u.get(y)??null)))),h)))}recalculateAndSaveOverlays(e,t){const r=Hl();let o=new _t(((u,h)=>u-h)),a=je();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((u=>{for(const h of u)h.keys().forEach((p=>{const y=t.get(p);if(y===null)return;let _=r.get(p)||Vn.empty();_=h.applyToLocalView(y,_),r.set(p,_);const E=(o.get(h.batchId)||je()).add(p);o=o.insert(h.batchId,E)}))})).next((()=>{const u=[],h=o.getReverseIterator();for(;h.hasNext();){const p=h.getNext(),y=p.key,_=p.value,E=gT();_.forEach((T=>{if(!a.has(T)){const O=IT(t.get(T),r.get(T));O!==null&&E.set(T,O),a=a.add(T)}})),u.push(this.documentOverlayCache.saveOverlays(e,y,E))}return Y.waitFor(u)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,o){return nx(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):dT(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,o):this.getDocumentsMatchingCollectionQuery(e,t,r,o)}getNextDocuments(e,t,r,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,o).next((a=>{const u=o-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,o-a.size):Y.resolve(po());let h=Zl,p=a;return u.next((y=>Y.forEach(y,((_,E)=>(h<E.largestBatchId&&(h=E.largestBatchId),a.get(_)?Y.resolve():this.remoteDocumentCache.getEntry(e,_).next((T=>{p=p.insert(_,T)}))))).next((()=>this.populateOverlays(e,y,a))).next((()=>this.computeViews(e,p,y,je()))).next((_=>({batchId:h,changes:mT(_)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ee(t)).next((r=>{let o=Ul();return r.isFoundDocument()&&(o=o.insert(r.key,r)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,o){const a=t.collectionGroup;let u=Ul();return this.indexManager.getCollectionParents(e,a).next((h=>Y.forEach(h,(p=>{const y=(function(E,T){return new Ba(T,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)})(t,p.child(a));return this.getDocumentsMatchingCollectionQuery(e,y,r,o).next((_=>{_.forEach(((E,T)=>{u=u.insert(E,T)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(e,t,r,o){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,o)))).next((u=>{a.forEach(((p,y)=>{const _=y.getKey();u.get(_)===null&&(u=u.insert(_,$t.newInvalidDocument(_)))}));let h=Ul();return u.forEach(((p,y)=>{const _=a.get(p);_!==void 0&&Gl(_.mutation,y,Vn.empty(),ct.now()),Md(t,y)&&(h=h.insert(p,y))})),h}))}}/**
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
 */class eb{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return Y.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:Un(o.createTime)}})(t)),Y.resolve()}getNamedQuery(e,t){return Y.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(o){return{name:o.name,query:$x(o.bundledQuery),readTime:Un(o.readTime)}})(t)),Y.resolve()}}/**
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
 */class tb{constructor(){this.overlays=new _t(Ee.comparator),this.Lr=new Map}getOverlay(e,t){return Y.resolve(this.overlays.get(t))}getOverlays(e,t){const r=po();return Y.forEach(t,(o=>this.getOverlay(e,o).next((a=>{a!==null&&r.set(o,a)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((o,a)=>{this.bt(e,t,a)})),Y.resolve()}removeOverlaysForBatchId(e,t,r){const o=this.Lr.get(r);return o!==void 0&&(o.forEach((a=>this.overlays=this.overlays.remove(a))),this.Lr.delete(r)),Y.resolve()}getOverlaysForCollection(e,t,r){const o=po(),a=t.length+1,u=new Ee(t.child("")),h=this.overlays.getIteratorFrom(u);for(;h.hasNext();){const p=h.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===a&&p.largestBatchId>r&&o.set(p.getKey(),p)}return Y.resolve(o)}getOverlaysForCollectionGroup(e,t,r,o){let a=new _t(((y,_)=>y-_));const u=this.overlays.getIterator();for(;u.hasNext();){const y=u.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>r){let _=a.get(y.largestBatchId);_===null&&(_=po(),a=a.insert(y.largestBatchId,_)),_.set(y.getKey(),y)}}const h=po(),p=a.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((y,_)=>h.set(y,_))),!(h.size()>=o)););return Y.resolve(h)}bt(e,t,r){const o=this.overlays.get(r.key);if(o!==null){const u=this.Lr.get(o.largestBatchId).delete(r.key);this.Lr.set(o.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new wx(t,r));let a=this.Lr.get(t);a===void 0&&(a=je(),this.Lr.set(t,a)),this.Lr.set(t,a.add(r.key))}}/**
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
 */class nb{constructor(){this.sessionToken=Yt.EMPTY_BYTE_STRING}getSessionToken(e){return Y.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Y.resolve()}}/**
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
 */class um{constructor(){this.kr=new Lt(Bt.Kr),this.qr=new Lt(Bt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const r=new Bt(e,t);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new Bt(e,t))}Qr(e,t){e.forEach((r=>this.removeReference(r,t)))}Gr(e){const t=new Ee(new nt([])),r=new Bt(t,e),o=new Bt(t,e+1),a=[];return this.qr.forEachInRange([r,o],(u=>{this.Wr(u),a.push(u.key)})),a}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new Ee(new nt([])),r=new Bt(t,e),o=new Bt(t,e+1);let a=je();return this.qr.forEachInRange([r,o],(u=>{a=a.add(u.key)})),a}containsKey(e){const t=new Bt(e,0),r=this.kr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Bt{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return Ee.comparator(e.key,t.key)||Ue(e.Hr,t.Hr)}static Ur(e,t){return Ue(e.Hr,t.Hr)||Ee.comparator(e.key,t.key)}}/**
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
 */class rb{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new Lt(Bt.Kr)}checkEmpty(e){return Y.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,o){const a=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new _x(a,t,r,o);this.mutationQueue.push(u);for(const h of o)this.Jr=this.Jr.add(new Bt(h.key,a)),this.indexManager.addToCollectionParentIndex(e,h.key.path.popLast());return Y.resolve(u)}lookupMutationBatch(e,t){return Y.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,o=this.Xr(r),a=o<0?0:o;return Y.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return Y.resolve(this.mutationQueue.length===0?Zp:this.Yn-1)}getAllMutationBatches(e){return Y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Bt(t,0),o=new Bt(t,Number.POSITIVE_INFINITY),a=[];return this.Jr.forEachInRange([r,o],(u=>{const h=this.Zr(u.Hr);a.push(h)})),Y.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Lt(Ue);return t.forEach((o=>{const a=new Bt(o,0),u=new Bt(o,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([a,u],(h=>{r=r.add(h.Hr)}))})),Y.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,o=r.length+1;let a=r;Ee.isDocumentKey(a)||(a=a.child(""));const u=new Bt(new Ee(a),0);let h=new Lt(Ue);return this.Jr.forEachWhile((p=>{const y=p.key.path;return!!r.isPrefixOf(y)&&(y.length===o&&(h=h.add(p.Hr)),!0)}),u),Y.resolve(this.Yr(h))}Yr(e){const t=[];return e.forEach((r=>{const o=this.Zr(r);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){We(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return Y.forEach(t.mutations,(o=>{const a=new Bt(o.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Jr=r}))}nr(e){}containsKey(e,t){const r=new Bt(t,0),o=this.Jr.firstAfterOrEqual(r);return Y.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,Y.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class sb{constructor(e){this.ti=e,this.docs=(function(){return new _t(Ee.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,o=this.docs.get(r),a=o?o.size:0,u=this.ti(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return Y.resolve(r?r.document.mutableCopy():$t.newInvalidDocument(t))}getEntries(e,t){let r=Ps();return t.forEach((o=>{const a=this.docs.get(o);r=r.insert(o,a?a.document.mutableCopy():$t.newInvalidDocument(o))})),Y.resolve(r)}getDocumentsMatchingQuery(e,t,r,o){let a=Ps();const u=t.path,h=new Ee(u.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(h);for(;p.hasNext();){const{key:y,value:{document:_}}=p.getNext();if(!u.isPrefixOf(y.path))break;y.path.length>u.length+1||NP(bP(_),r)<=0||(o.has(_.key)||Md(t,_))&&(a=a.insert(_.key,_.mutableCopy()))}return Y.resolve(a)}getAllFromCollectionGroup(e,t,r,o){Ie(9500)}ni(e,t){return Y.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new ib(this)}getSize(e){return Y.resolve(this.size)}}class ib extends Xx{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,o)=>{o.isValidDocument()?t.push(this.Mr.addEntry(e,o)):this.Mr.removeEntry(r)})),Y.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class ob{constructor(e){this.persistence=e,this.ri=new ko((t=>nm(t)),rm),this.lastRemoteSnapshotVersion=Re.min(),this.highestTargetId=0,this.ii=0,this.si=new um,this.targetCount=0,this.oi=Va._r()}forEachTarget(e,t){return this.ri.forEach(((r,o)=>t(o))),Y.resolve()}getLastRemoteSnapshotVersion(e){return Y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Y.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),Y.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ii&&(this.ii=t),Y.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Va(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,Y.resolve()}updateTargetData(e,t){return this.lr(t),Y.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,Y.resolve()}removeTargets(e,t,r){let o=0;const a=[];return this.ri.forEach(((u,h)=>{h.sequenceNumber<=t&&r.get(h.targetId)===null&&(this.ri.delete(u),a.push(this.removeMatchingKeysForTargetId(e,h.targetId)),o++)})),Y.waitFor(a).next((()=>o))}getTargetCount(e){return Y.resolve(this.targetCount)}getTargetData(e,t){const r=this.ri.get(t)||null;return Y.resolve(r)}addMatchingKeys(e,t,r){return this.si.$r(t,r),Y.resolve()}removeMatchingKeys(e,t,r){this.si.Qr(t,r);const o=this.persistence.referenceDelegate,a=[];return o&&t.forEach((u=>{a.push(o.markPotentiallyOrphaned(e,u))})),Y.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),Y.resolve()}getMatchingKeysForTargetId(e,t){const r=this.si.jr(t);return Y.resolve(r)}containsKey(e,t){return Y.resolve(this.si.containsKey(t))}}/**
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
 */class jT{constructor(e,t){this._i={},this.overlays={},this.ai=new Nd(0),this.ui=!1,this.ui=!0,this.ci=new nb,this.referenceDelegate=e(this),this.li=new ob(this),this.indexManager=new Wx,this.remoteDocumentCache=(function(o){return new sb(o)})((r=>this.referenceDelegate.hi(r))),this.serializer=new Bx(t),this.Pi=new eb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new tb,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this._i[e.toKey()];return r||(r=new rb(t,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,r){ce("MemoryPersistence","Starting transaction:",e);const o=new ab(this.ai.next());return this.referenceDelegate.Ti(),r(o).next((a=>this.referenceDelegate.Ii(o).next((()=>a)))).toPromise().then((a=>(o.raiseOnCommittedEvent(),a)))}Ei(e,t){return Y.or(Object.values(this._i).map((r=>()=>r.containsKey(e,t))))}}class ab extends OP{constructor(e){super(),this.currentSequenceNumber=e}}class cm{constructor(e){this.persistence=e,this.Ri=new um,this.Ai=null}static Vi(e){return new cm(e)}get di(){if(this.Ai)return this.Ai;throw Ie(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.di.delete(r.toString()),Y.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.di.add(r.toString()),Y.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),Y.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((o=>this.di.add(o.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((a=>this.di.add(a.toString())))})).next((()=>r.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Y.forEach(this.di,(r=>{const o=Ee.fromPath(r);return this.mi(e,o).next((a=>{a||t.removeEntry(o,Re.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return Y.or([()=>Y.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class pd{constructor(e,t){this.persistence=e,this.fi=new ko((r=>LP(r.path)),((r,o)=>r.isEqual(o))),this.garbageCollector=Yx(this,t)}static Vi(e,t){return new pd(e,t)}Ti(){}Ii(e){return Y.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((o=>r+o))))}pr(e){let t=0;return this.mr(e,(r=>{t++})).next((()=>t))}mr(e,t){return Y.forEach(this.fi,((r,o)=>this.wr(e,r,o).next((a=>a?Y.resolve():t(o)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const o=this.persistence.getRemoteDocumentCache(),a=o.newChangeBuffer();return o.ni(e,(u=>this.wr(e,u,t).next((h=>{h||(r++,a.removeEntry(u,Re.min()))})))).next((()=>a.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),Y.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),Y.resolve()}removeReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),Y.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),Y.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Wc(e.data.value)),t}wr(e,t,r){return Y.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.fi.get(t);return Y.resolve(o!==void 0&&o>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class dm{constructor(e,t,r,o){this.targetId=e,this.fromCache=t,this.Ts=r,this.Is=o}static Es(e,t){let r=je(),o=je();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:o=o.add(a.doc.key)}return new dm(e,t.fromCache,r,o)}}/**
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
 */class lb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class ub{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return xA()?8:VP(sn())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,o){const a={result:null};return this.gs(e,t).next((u=>{a.result=u})).next((()=>{if(!a.result)return this.ps(e,t,o,r).next((u=>{a.result=u}))})).next((()=>{if(a.result)return;const u=new lb;return this.ys(e,t,u).next((h=>{if(a.result=h,this.As)return this.ws(e,t,u,h.size)}))})).next((()=>a.result))}ws(e,t,r,o){return r.documentReadCount<this.Vs?(ya()<=Fe.DEBUG&&ce("QueryEngine","SDK will not create cache indexes for query:",va(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),Y.resolve()):(ya()<=Fe.DEBUG&&ce("QueryEngine","Query:",va(t),"scans",r.documentReadCount,"local documents and returns",o,"documents as results."),r.documentReadCount>this.ds*o?(ya()<=Fe.DEBUG&&ce("QueryEngine","The SDK decides to create cache indexes for query:",va(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xr(t))):Y.resolve())}gs(e,t){if(f_(t))return Y.resolve(null);let r=Xr(t);return this.indexManager.getIndexType(e,r).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=mp(t,null,"F"),r=Xr(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((a=>{const u=je(...a);return this.fs.getDocuments(e,u).next((h=>this.indexManager.getMinOffset(e,r).next((p=>{const y=this.bs(t,h);return this.Ss(t,y,u,p.readTime)?this.gs(e,mp(t,null,"F")):this.Ds(e,y,t,p)}))))})))))}ps(e,t,r,o){return f_(t)||o.isEqual(Re.min())?Y.resolve(null):this.fs.getDocuments(e,r).next((a=>{const u=this.bs(t,a);return this.Ss(t,u,r,o)?Y.resolve(null):(ya()<=Fe.DEBUG&&ce("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),va(t)),this.Ds(e,u,t,xP(o,Zl)).next((h=>h)))}))}bs(e,t){let r=new Lt(fT(e));return t.forEach(((o,a)=>{Md(e,a)&&(r=r.add(a))})),r}Ss(e,t,r,o){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(o)>0)}ys(e,t,r){return ya()<=Fe.DEBUG&&ce("QueryEngine","Using full collection scan to execute query:",va(t)),this.fs.getDocumentsMatchingQuery(e,t,Ti.min(),r)}Ds(e,t,r,o){return this.fs.getDocumentsMatchingQuery(e,r,o).next((a=>(t.forEach((u=>{a=a.insert(u.key,u)})),a)))}}/**
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
 */const hm="LocalStore",cb=3e8;class db{constructor(e,t,r,o){this.persistence=e,this.Cs=t,this.serializer=o,this.vs=new _t(Ue),this.Fs=new ko((a=>nm(a)),rm),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Zx(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function hb(n,e,t,r){return new db(n,e,t,r)}async function zT(n,e){const t=xe(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let o;return t.mutationQueue.getAllMutationBatches(r).next((a=>(o=a,t.Os(e),t.mutationQueue.getAllMutationBatches(r)))).next((a=>{const u=[],h=[];let p=je();for(const y of o){u.push(y.batchId);for(const _ of y.mutations)p=p.add(_.key)}for(const y of a){h.push(y.batchId);for(const _ of y.mutations)p=p.add(_.key)}return t.localDocuments.getDocuments(r,p).next((y=>({Ns:y,removedBatchIds:u,addedBatchIds:h})))}))}))}function fb(n,e){const t=xe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const o=e.batch.keys(),a=t.xs.newChangeBuffer({trackRemovals:!0});return(function(h,p,y,_){const E=y.batch,T=E.keys();let O=Y.resolve();return T.forEach((q=>{O=O.next((()=>_.getEntry(p,q))).next((V=>{const U=y.docVersions.get(q);We(U!==null,48541),V.version.compareTo(U)<0&&(E.applyToRemoteDocument(V,y),V.isValidDocument()&&(V.setReadTime(y.commitVersion),_.addEntry(V)))}))})),O.next((()=>h.mutationQueue.removeMutationBatch(p,E)))})(t,r,e,a).next((()=>a.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(h){let p=je();for(let y=0;y<h.mutationResults.length;++y)h.mutationResults[y].transformResults.length>0&&(p=p.add(h.batch.mutations[y].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(r,o)))}))}function BT(n){const e=xe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function pb(n,e){const t=xe(n),r=e.snapshotVersion;let o=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const u=t.xs.newChangeBuffer({trackRemovals:!0});o=t.vs;const h=[];e.targetChanges.forEach(((_,E)=>{const T=o.get(E);if(!T)return;h.push(t.li.removeMatchingKeys(a,_.removedDocuments,E).next((()=>t.li.addMatchingKeys(a,_.addedDocuments,E))));let O=T.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(E)!==null?O=O.withResumeToken(Yt.EMPTY_BYTE_STRING,Re.min()).withLastLimboFreeSnapshotVersion(Re.min()):_.resumeToken.approximateByteSize()>0&&(O=O.withResumeToken(_.resumeToken,r)),o=o.insert(E,O),(function(V,U,Z){return V.resumeToken.approximateByteSize()===0||U.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=cb?!0:Z.addedDocuments.size+Z.modifiedDocuments.size+Z.removedDocuments.size>0})(T,O,_)&&h.push(t.li.updateTargetData(a,O))}));let p=Ps(),y=je();if(e.documentUpdates.forEach((_=>{e.resolvedLimboDocuments.has(_)&&h.push(t.persistence.referenceDelegate.updateLimboDocument(a,_))})),h.push(mb(a,u,e.documentUpdates).next((_=>{p=_.Bs,y=_.Ls}))),!r.isEqual(Re.min())){const _=t.li.getLastRemoteSnapshotVersion(a).next((E=>t.li.setTargetsMetadata(a,a.currentSequenceNumber,r)));h.push(_)}return Y.waitFor(h).next((()=>u.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,p,y))).next((()=>p))})).then((a=>(t.vs=o,a)))}function mb(n,e,t){let r=je(),o=je();return t.forEach((a=>r=r.add(a))),e.getEntries(n,r).next((a=>{let u=Ps();return t.forEach(((h,p)=>{const y=a.get(h);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(h)),p.isNoDocument()&&p.version.isEqual(Re.min())?(e.removeEntry(h,p.readTime),u=u.insert(h,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),u=u.insert(h,p)):ce(hm,"Ignoring outdated watch update for ",h,". Current version:",y.version," Watch version:",p.version)})),{Bs:u,Ls:o}}))}function gb(n,e){const t=xe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Zp),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function yb(n,e){const t=xe(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let o;return t.li.getTargetData(r,e).next((a=>a?(o=a,Y.resolve(o)):t.li.allocateTargetId(r).next((u=>(o=new pi(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.li.addTargetData(r,o).next((()=>o)))))))})).then((r=>{const o=t.vs.get(r.targetId);return(o===null||r.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.vs=t.vs.insert(r.targetId,r),t.Fs.set(e,r.targetId)),r}))}async function _p(n,e,t){const r=xe(n),o=r.vs.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,(u=>r.persistence.referenceDelegate.removeTarget(u,o)))}catch(u){if(!za(u))throw u;ce(hm,`Failed to update sequence numbers for target ${e}: ${u}`)}r.vs=r.vs.remove(e),r.Fs.delete(o.target)}function R_(n,e,t){const r=xe(n);let o=Re.min(),a=je();return r.persistence.runTransaction("Execute query","readwrite",(u=>(function(p,y,_){const E=xe(p),T=E.Fs.get(_);return T!==void 0?Y.resolve(E.vs.get(T)):E.li.getTargetData(y,_)})(r,u,Xr(e)).next((h=>{if(h)return o=h.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(u,h.targetId).next((p=>{a=p}))})).next((()=>r.Cs.getDocumentsMatchingQuery(u,e,t?o:Re.min(),t?a:je()))).next((h=>(vb(r,ix(e),h),{documents:h,ks:a})))))}function vb(n,e,t){let r=n.Ms.get(e)||Re.min();t.forEach(((o,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)})),n.Ms.set(e,r)}class C_{constructor(){this.activeTargetIds=dx()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _b{constructor(){this.vo=new C_,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,r){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new C_,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class wb{Mo(e){}shutdown(){}}/**
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
 */const k_="ConnectivityMonitor";class P_{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){ce(k_,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){ce(k_,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let kc=null;function wp(){return kc===null?kc=(function(){return 268435456+Math.round(2147483648*Math.random())})():kc++,"0x"+kc.toString(16)}/**
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
 */const Ff="RestConnection",Eb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Tb{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${r}/databases/${o}`,this.$o=this.databaseId.database===ld?`project_id=${r}`:`project_id=${r}&database_id=${o}`}Wo(e,t,r,o,a){const u=wp(),h=this.Qo(e,t.toUriEncodedString());ce(Ff,`Sending RPC '${e}' ${u}:`,h,r);const p={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(p,o,a);const{host:y}=new URL(h),_=Pi(y);return this.zo(e,h,p,r,_).then((E=>(ce(Ff,`Received RPC '${e}' ${u}: `,E),E)),(E=>{throw Eo(Ff,`RPC '${e}' ${u} failed with error: `,E,"url: ",h,"request:",r),E}))}jo(e,t,r,o,a,u){return this.Wo(e,t,r,o,a)}Go(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ua})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,a)=>e[a]=o)),r&&r.headers.forEach(((o,a)=>e[a]=o))}Qo(e,t){const r=Eb[e];let o=`${this.qo}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(o=`${o}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),o}terminate(){}}/**
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
 */class Ib{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const nn="WebChannelConnection",Dl=(n,e,t)=>{n.listen(e,(r=>{try{t(r)}catch(o){setTimeout((()=>{throw o}),0)}}))};class Ca extends Tb{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Ca.c_){const e=$E();Dl(e,BE.STAT_EVENT,(t=>{t.stat===lp.PROXY?ce(nn,"STAT_EVENT: detected buffering proxy"):t.stat===lp.NOPROXY&&ce(nn,"STAT_EVENT: detected no buffering proxy")})),Ca.c_=!0}}zo(e,t,r,o,a){const u=wp();return new Promise(((h,p)=>{const y=new jE;y.setWithCredentials(!0),y.listenOnce(zE.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case $c.NO_ERROR:const E=y.getResponseJson();ce(nn,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(E)),h(E);break;case $c.TIMEOUT:ce(nn,`RPC '${e}' ${u} timed out`),p(new oe(K.DEADLINE_EXCEEDED,"Request time out"));break;case $c.HTTP_ERROR:const T=y.getStatus();if(ce(nn,`RPC '${e}' ${u} failed with status:`,T,"response text:",y.getResponseText()),T>0){let O=y.getResponseJson();Array.isArray(O)&&(O=O[0]);const q=O==null?void 0:O.error;if(q&&q.status&&q.message){const V=(function(Z){const te=Z.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(te)>=0?te:K.UNKNOWN})(q.status);p(new oe(V,q.message))}else p(new oe(K.UNKNOWN,"Server responded with status "+y.getStatus()))}else p(new oe(K.UNAVAILABLE,"Connection failed."));break;default:Ie(9055,{l_:e,streamId:u,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{ce(nn,`RPC '${e}' ${u} completed.`)}}));const _=JSON.stringify(o);ce(nn,`RPC '${e}' ${u} sending request:`,o),y.send(t,"POST",_,r,15)}))}T_(e,t,r){const o=wp(),a=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=this.createWebChannelTransport(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(h.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Go(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;const y=a.join("");ce(nn,`Creating RPC '${e}' stream ${o}: ${y}`,h);const _=u.createWebChannel(y,h);this.I_(_);let E=!1,T=!1;const O=new Ib({Ho:q=>{T?ce(nn,`Not sending because RPC '${e}' stream ${o} is closed:`,q):(E||(ce(nn,`Opening RPC '${e}' stream ${o} transport.`),_.open(),E=!0),ce(nn,`RPC '${e}' stream ${o} sending:`,q),_.send(q))},Jo:()=>_.close()});return Dl(_,Fl.EventType.OPEN,(()=>{T||(ce(nn,`RPC '${e}' stream ${o} transport opened.`),O.i_())})),Dl(_,Fl.EventType.CLOSE,(()=>{T||(T=!0,ce(nn,`RPC '${e}' stream ${o} transport closed`),O.o_(),this.E_(_))})),Dl(_,Fl.EventType.ERROR,(q=>{T||(T=!0,Eo(nn,`RPC '${e}' stream ${o} transport errored. Name:`,q.name,"Message:",q.message),O.o_(new oe(K.UNAVAILABLE,"The operation could not be completed")))})),Dl(_,Fl.EventType.MESSAGE,(q=>{var V;if(!T){const U=q.data[0];We(!!U,16349);const Z=U,te=(Z==null?void 0:Z.error)||((V=Z[0])==null?void 0:V.error);if(te){ce(nn,`RPC '${e}' stream ${o} received error:`,te);const se=te.status;let ie=(function(R){const I=xt[R];if(I!==void 0)return CT(I)})(se),ge=te.message;se==="NOT_FOUND"&&ge.includes("database")&&ge.includes("does not exist")&&ge.includes(this.databaseId.database)&&Eo(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),ie===void 0&&(ie=K.INTERNAL,ge="Unknown error status: "+se+" with message "+te.message),T=!0,O.o_(new oe(ie,ge)),_.close()}else ce(nn,`RPC '${e}' stream ${o} received:`,U),O.__(U)}})),Ca.u_(),setTimeout((()=>{O.s_()}),0),O}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,r){super.Go(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return WE()}}/**
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
 */function Sb(n){return new Ca(n)}function Uf(){return typeof document<"u"?document:null}/**
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
 */function jd(n){return new kx(n,!0)}/**
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
 */Ca.c_=!1;class fm{constructor(e,t,r=1e3,o=1.5,a=6e4){this.Ci=e,this.timerId=t,this.R_=r,this.A_=o,this.V_=a,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-r);o>0&&ce("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const x_="PersistentStream";class $T{constructor(e,t,r,o,a,u,h,p){this.Ci=e,this.b_=r,this.S_=o,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=h,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new fm(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===K.RESOURCE_EXHAUSTED?(ks(t.toString()),ks("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,o])=>{this.D_===t&&this.G_(r,o)}),(r=>{e((()=>{const o=new oe(K.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(o)}))}))}G_(e,t){const r=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.Yo((()=>{r((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((o=>{r((()=>this.z_(o)))})),this.stream.onMessage((o=>{r((()=>++this.F_==1?this.H_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ce(x_,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(ce(x_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ab extends $T{constructor(e,t,r,o,a,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,o,u),this.serializer=a}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Nx(this.serializer,e),r=(function(a){if(!("targetChange"in a))return Re.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?Re.min():u.readTime?Un(u.readTime):Re.min()})(e);return this.listener.J_(t,r)}Z_(e){const t={};t.database=vp(this.serializer),t.addTarget=(function(a,u){let h;const p=u.target;if(h=fp(p)?{documents:Ox(a,p)}:{query:Vx(a,p).ft},h.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){h.resumeToken=xT(a,u.resumeToken);const y=gp(a,u.expectedCount);y!==null&&(h.expectedCount=y)}else if(u.snapshotVersion.compareTo(Re.min())>0){h.readTime=hd(a,u.snapshotVersion.toTimestamp());const y=gp(a,u.expectedCount);y!==null&&(h.expectedCount=y)}return h})(this.serializer,e);const r=Lx(this.serializer,e);r&&(t.labels=r),this.K_(t)}X_(e){const t={};t.database=vp(this.serializer),t.removeTarget=e,this.K_(t)}}class Rb extends $T{constructor(e,t,r,o,a,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,o,u),this.serializer=a}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return We(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,We(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){We(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Dx(e.writeResults,e.commitTime),r=Un(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=vp(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>OT(this.serializer,r)))};this.K_(t)}}/**
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
 */class Cb{}class kb extends Cb{constructor(e,t,r,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new oe(K.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.Wo(e,yp(t,r),o,a,u))).catch((a=>{throw a.name==="FirebaseError"?(a.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new oe(K.UNKNOWN,a.toString())}))}jo(e,t,r,o,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.jo(e,yp(t,r),o,u,h,a))).catch((u=>{throw u.name==="FirebaseError"?(u.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new oe(K.UNKNOWN,u.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function Pb(n,e,t,r){return new kb(n,e,t,r)}class xb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ks(t),this.aa=!1):ce("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const To="RemoteStore";class bb{constructor(e,t,r,o,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=a,this.Aa.Mo((u=>{r.enqueueAndForget((async()=>{Po(this)&&(ce(To,"Restarting streams for network reachability change."),await(async function(p){const y=xe(p);y.Ea.add(4),await pu(y),y.Va.set("Unknown"),y.Ea.delete(4),await zd(y)})(this))}))})),this.Va=new xb(r,o)}}async function zd(n){if(Po(n))for(const e of n.Ra)await e(!0)}async function pu(n){for(const e of n.Ra)await e(!1)}function WT(n,e){const t=xe(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),ym(t)?gm(t):$a(t).O_()&&mm(t,e))}function pm(n,e){const t=xe(n),r=$a(t);t.Ia.delete(e),r.O_()&&qT(t,e),t.Ia.size===0&&(r.O_()?r.L_():Po(t)&&t.Va.set("Unknown"))}function mm(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Re.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}$a(n).Z_(e)}function qT(n,e){n.da.$e(e),$a(n).X_(e)}function gm(n){n.da=new Sx({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),$a(n).start(),n.Va.ua()}function ym(n){return Po(n)&&!$a(n).x_()&&n.Ia.size>0}function Po(n){return xe(n).Ea.size===0}function HT(n){n.da=void 0}async function Nb(n){n.Va.set("Online")}async function Db(n){n.Ia.forEach(((e,t)=>{mm(n,e)}))}async function Ob(n,e){HT(n),ym(n)?(n.Va.ha(e),gm(n)):n.Va.set("Unknown")}async function Vb(n,e,t){if(n.Va.set("Online"),e instanceof PT&&e.state===2&&e.cause)try{await(async function(o,a){const u=a.cause;for(const h of a.targetIds)o.Ia.has(h)&&(await o.remoteSyncer.rejectListen(h,u),o.Ia.delete(h),o.da.removeTarget(h))})(n,e)}catch(r){ce(To,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await md(n,r)}else if(e instanceof Gc?n.da.Xe(e):e instanceof kT?n.da.st(e):n.da.tt(e),!t.isEqual(Re.min()))try{const r=await BT(n.localStore);t.compareTo(r)>=0&&await(function(a,u){const h=a.da.Tt(u);return h.targetChanges.forEach(((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const _=a.Ia.get(y);_&&a.Ia.set(y,_.withResumeToken(p.resumeToken,u))}})),h.targetMismatches.forEach(((p,y)=>{const _=a.Ia.get(p);if(!_)return;a.Ia.set(p,_.withResumeToken(Yt.EMPTY_BYTE_STRING,_.snapshotVersion)),qT(a,p);const E=new pi(_.target,p,y,_.sequenceNumber);mm(a,E)})),a.remoteSyncer.applyRemoteEvent(h)})(n,t)}catch(r){ce(To,"Failed to raise snapshot:",r),await md(n,r)}}async function md(n,e,t){if(!za(e))throw e;n.Ea.add(1),await pu(n),n.Va.set("Offline"),t||(t=()=>BT(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ce(To,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await zd(n)}))}function GT(n,e){return e().catch((t=>md(n,t,e)))}async function Bd(n){const e=xe(n),t=Ri(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Zp;for(;Mb(e);)try{const o=await gb(e.localStore,r);if(o===null){e.Ta.length===0&&t.L_();break}r=o.batchId,Lb(e,o)}catch(o){await md(e,o)}KT(e)&&QT(e)}function Mb(n){return Po(n)&&n.Ta.length<10}function Lb(n,e){n.Ta.push(e);const t=Ri(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function KT(n){return Po(n)&&!Ri(n).x_()&&n.Ta.length>0}function QT(n){Ri(n).start()}async function Fb(n){Ri(n).ra()}async function Ub(n){const e=Ri(n);for(const t of n.Ta)e.ea(t.mutations)}async function jb(n,e,t){const r=n.Ta.shift(),o=om.from(r,e,t);await GT(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await Bd(n)}async function zb(n,e){e&&Ri(n).Y_&&await(async function(r,o){if((function(u){return RT(u)&&u!==K.ABORTED})(o.code)){const a=r.Ta.shift();Ri(r).B_(),await GT(r,(()=>r.remoteSyncer.rejectFailedWrite(a.batchId,o))),await Bd(r)}})(n,e),KT(n)&&QT(n)}async function b_(n,e){const t=xe(n);t.asyncQueue.verifyOperationInProgress(),ce(To,"RemoteStore received new credentials");const r=Po(t);t.Ea.add(3),await pu(t),r&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await zd(t)}async function Bb(n,e){const t=xe(n);e?(t.Ea.delete(2),await zd(t)):e||(t.Ea.add(2),await pu(t),t.Va.set("Unknown"))}function $a(n){return n.ma||(n.ma=(function(t,r,o){const a=xe(t);return a.sa(),new Ab(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)})(n.datastore,n.asyncQueue,{Zo:Nb.bind(null,n),Yo:Db.bind(null,n),t_:Ob.bind(null,n),J_:Vb.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),ym(n)?gm(n):n.Va.set("Unknown")):(await n.ma.stop(),HT(n))}))),n.ma}function Ri(n){return n.fa||(n.fa=(function(t,r,o){const a=xe(t);return a.sa(),new Rb(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Fb.bind(null,n),t_:zb.bind(null,n),ta:Ub.bind(null,n),na:jb.bind(null,n)}),n.Ra.push((async e=>{e?(n.fa.B_(),await Bd(n)):(await n.fa.stop(),n.Ta.length>0&&(ce(To,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class vm{constructor(e,t,r,o,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=o,this.removalCallback=a,this.deferred=new Yr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,o,a){const u=Date.now()+r,h=new vm(e,t,u,o,a);return h.start(r),h}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _m(n,e){if(ks("AsyncQueue",`${e}: ${n}`),za(n))return new oe(K.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class ka{static emptySet(e){return new ka(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Ee.comparator(t.key,r.key):(t,r)=>Ee.comparator(t.key,r.key),this.keyedMap=Ul(),this.sortedSet=new _t(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ka)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=r.getNext().key;if(!o.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new ka;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class N_{constructor(){this.ga=new _t(Ee.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):Ie(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Ma{constructor(e,t,r,o,a,u,h,p,y){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=o,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=h,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,r,o,a){const u=[];return t.forEach((h=>{u.push({type:0,doc:h})})),new Ma(e,t,ka.emptySet(t),u,r,o,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Vd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==r[o].type||!t[o].doc.isEqual(r[o].doc))return!1;return!0}}/**
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
 */class $b{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class Wb{constructor(){this.queries=D_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const o=xe(t),a=o.queries;o.queries=D_(),a.forEach(((u,h)=>{for(const p of h.ba)p.onError(r)}))})(this,new oe(K.ABORTED,"Firestore shutting down"))}}function D_(){return new ko((n=>hT(n)),Vd)}async function wm(n,e){const t=xe(n);let r=3;const o=e.query;let a=t.queries.get(o);a?!a.Sa()&&e.Da()&&(r=2):(a=new $b,r=e.Da()?0:1);try{switch(r){case 0:a.wa=await t.onListen(o,!0);break;case 1:a.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(u){const h=_m(u,`Initialization of query '${va(e.query)}' failed`);return void e.onError(h)}t.queries.set(o,a),a.ba.push(e),e.va(t.onlineState),a.wa&&e.Fa(a.wa)&&Tm(t)}async function Em(n,e){const t=xe(n),r=e.query;let o=3;const a=t.queries.get(r);if(a){const u=a.ba.indexOf(e);u>=0&&(a.ba.splice(u,1),a.ba.length===0?o=e.Da()?0:1:!a.Sa()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function qb(n,e){const t=xe(n);let r=!1;for(const o of e){const a=o.query,u=t.queries.get(a);if(u){for(const h of u.ba)h.Fa(o)&&(r=!0);u.wa=o}}r&&Tm(t)}function Hb(n,e,t){const r=xe(n),o=r.queries.get(e);if(o)for(const a of o.ba)a.onError(t);r.queries.delete(e)}function Tm(n){n.Ca.forEach((e=>{e.next()}))}var Ep,O_;(O_=Ep||(Ep={})).Ma="default",O_.Cache="cache";class Im{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const o of e.docChanges)o.type!==3&&r.push(o);e=new Ma(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Ma.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ep.Cache}}/**
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
 */class YT{constructor(e){this.key=e}}class XT{constructor(e){this.key=e}}class Gb{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=je(),this.mutatedKeys=je(),this.eu=fT(e),this.tu=new ka(this.eu)}get nu(){return this.Za}ru(e,t){const r=t?t.iu:new N_,o=t?t.tu:this.tu;let a=t?t.mutatedKeys:this.mutatedKeys,u=o,h=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((_,E)=>{const T=o.get(_),O=Md(this.query,E)?E:null,q=!!T&&this.mutatedKeys.has(T.key),V=!!O&&(O.hasLocalMutations||this.mutatedKeys.has(O.key)&&O.hasCommittedMutations);let U=!1;T&&O?T.data.isEqual(O.data)?q!==V&&(r.track({type:3,doc:O}),U=!0):this.su(T,O)||(r.track({type:2,doc:O}),U=!0,(p&&this.eu(O,p)>0||y&&this.eu(O,y)<0)&&(h=!0)):!T&&O?(r.track({type:0,doc:O}),U=!0):T&&!O&&(r.track({type:1,doc:T}),U=!0,(p||y)&&(h=!0)),U&&(O?(u=u.add(O),a=V?a.add(_):a.delete(_)):(u=u.delete(_),a=a.delete(_)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const _=this.query.limitType==="F"?u.last():u.first();u=u.delete(_.key),a=a.delete(_.key),r.track({type:1,doc:_})}return{tu:u,iu:r,Ss:h,mutatedKeys:a}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,o){const a=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const u=e.iu.ya();u.sort(((_,E)=>(function(O,q){const V=U=>{switch(U){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ie(20277,{Vt:U})}};return V(O)-V(q)})(_.type,E.type)||this.eu(_.doc,E.doc))),this.ou(r),o=o??!1;const h=t&&!o?this._u():[],p=this.Ya.size===0&&this.current&&!o?1:0,y=p!==this.Xa;return this.Xa=p,u.length!==0||y?{snapshot:new Ma(this.query,e.tu,a,u,e.mutatedKeys,p===0,y,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:h}:{au:h}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new N_,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=je(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))}));const t=[];return e.forEach((r=>{this.Ya.has(r)||t.push(new XT(r))})),this.Ya.forEach((r=>{e.has(r)||t.push(new YT(r))})),t}cu(e){this.Za=e.ks,this.Ya=je();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Ma.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Sm="SyncEngine";class Kb{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Qb{constructor(e){this.key=e,this.hu=!1}}class Yb{constructor(e,t,r,o,a,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=o,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.Pu={},this.Tu=new ko((h=>hT(h)),Vd),this.Iu=new Map,this.Eu=new Set,this.Ru=new _t(Ee.comparator),this.Au=new Map,this.Vu=new um,this.du={},this.mu=new Map,this.fu=Va.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Xb(n,e,t=!0){const r=r0(n);let o;const a=r.Tu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),o=a.view.lu()):o=await JT(r,e,t,!0),o}async function Jb(n,e){const t=r0(n);await JT(t,e,!0,!1)}async function JT(n,e,t,r){const o=await yb(n.localStore,Xr(e)),a=o.targetId,u=n.sharedClientState.addLocalQueryTarget(a,t);let h;return r&&(h=await Zb(n,e,a,u==="current",o.resumeToken)),n.isPrimaryClient&&t&&WT(n.remoteStore,o),h}async function Zb(n,e,t,r,o){n.pu=(E,T,O)=>(async function(V,U,Z,te){let se=U.view.ru(Z);se.Ss&&(se=await R_(V.localStore,U.query,!1).then((({documents:R})=>U.view.ru(R,se))));const ie=te&&te.targetChanges.get(U.targetId),ge=te&&te.targetMismatches.get(U.targetId)!=null,ue=U.view.applyChanges(se,V.isPrimaryClient,ie,ge);return M_(V,U.targetId,ue.au),ue.snapshot})(n,E,T,O);const a=await R_(n.localStore,e,!0),u=new Gb(e,a.ks),h=u.ru(a.documents),p=fu.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",o),y=u.applyChanges(h,n.isPrimaryClient,p);M_(n,t,y.au);const _=new Kb(e,t,u);return n.Tu.set(e,_),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),y.snapshot}async function eN(n,e,t){const r=xe(n),o=r.Tu.get(e),a=r.Iu.get(o.targetId);if(a.length>1)return r.Iu.set(o.targetId,a.filter((u=>!Vd(u,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(o.targetId),r.sharedClientState.isActiveQueryTarget(o.targetId)||await _p(r.localStore,o.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(o.targetId),t&&pm(r.remoteStore,o.targetId),Tp(r,o.targetId)})).catch(ja)):(Tp(r,o.targetId),await _p(r.localStore,o.targetId,!0))}async function tN(n,e){const t=xe(n),r=t.Tu.get(e),o=t.Iu.get(r.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),pm(t.remoteStore,r.targetId))}async function nN(n,e,t){const r=uN(n);try{const o=await(function(u,h){const p=xe(u),y=ct.now(),_=h.reduce(((O,q)=>O.add(q.key)),je());let E,T;return p.persistence.runTransaction("Locally write mutations","readwrite",(O=>{let q=Ps(),V=je();return p.xs.getEntries(O,_).next((U=>{q=U,q.forEach(((Z,te)=>{te.isValidDocument()||(V=V.add(Z))}))})).next((()=>p.localDocuments.getOverlayedDocuments(O,q))).next((U=>{E=U;const Z=[];for(const te of h){const se=vx(te,E.get(te.key).overlayedDocument);se!=null&&Z.push(new Ni(te.key,se,sT(se.value.mapValue),dn.exists(!0)))}return p.mutationQueue.addMutationBatch(O,y,Z,h)})).next((U=>{T=U;const Z=U.applyToLocalDocumentSet(E,V);return p.documentOverlayCache.saveOverlays(O,U.batchId,Z)}))})).then((()=>({batchId:T.batchId,changes:mT(E)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(o.batchId),(function(u,h,p){let y=u.du[u.currentUser.toKey()];y||(y=new _t(Ue)),y=y.insert(h,p),u.du[u.currentUser.toKey()]=y})(r,o.batchId,t),await mu(r,o.changes),await Bd(r.remoteStore)}catch(o){const a=_m(o,"Failed to persist write");t.reject(a)}}async function ZT(n,e){const t=xe(n);try{const r=await pb(t.localStore,e);e.targetChanges.forEach(((o,a)=>{const u=t.Au.get(a);u&&(We(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?u.hu=!0:o.modifiedDocuments.size>0?We(u.hu,14607):o.removedDocuments.size>0&&(We(u.hu,42227),u.hu=!1))})),await mu(t,r,e)}catch(r){await ja(r)}}function V_(n,e,t){const r=xe(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const o=[];r.Tu.forEach(((a,u)=>{const h=u.view.va(e);h.snapshot&&o.push(h.snapshot)})),(function(u,h){const p=xe(u);p.onlineState=h;let y=!1;p.queries.forEach(((_,E)=>{for(const T of E.ba)T.va(h)&&(y=!0)})),y&&Tm(p)})(r.eventManager,e),o.length&&r.Pu.J_(o),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function rN(n,e,t){const r=xe(n);r.sharedClientState.updateQueryState(e,"rejected",t);const o=r.Au.get(e),a=o&&o.key;if(a){let u=new _t(Ee.comparator);u=u.insert(a,$t.newNoDocument(a,Re.min()));const h=je().add(a),p=new Ud(Re.min(),new Map,new _t(Ue),u,h);await ZT(r,p),r.Ru=r.Ru.remove(a),r.Au.delete(e),Am(r)}else await _p(r.localStore,e,!1).then((()=>Tp(r,e,t))).catch(ja)}async function sN(n,e){const t=xe(n),r=e.batch.batchId;try{const o=await fb(t.localStore,e);t0(t,r,null),e0(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await mu(t,o)}catch(o){await ja(o)}}async function iN(n,e,t){const r=xe(n);try{const o=await(function(u,h){const p=xe(u);return p.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let _;return p.mutationQueue.lookupMutationBatch(y,h).next((E=>(We(E!==null,37113),_=E.keys(),p.mutationQueue.removeMutationBatch(y,E)))).next((()=>p.mutationQueue.performConsistencyCheck(y))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(y,_,h))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,_))).next((()=>p.localDocuments.getDocuments(y,_)))}))})(r.localStore,e);t0(r,e,t),e0(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await mu(r,o)}catch(o){await ja(o)}}function e0(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function t0(n,e,t){const r=xe(n);let o=r.du[r.currentUser.toKey()];if(o){const a=o.get(e);a&&(t?a.reject(t):a.resolve(),o=o.remove(e)),r.du[r.currentUser.toKey()]=o}}function Tp(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((r=>{n.Vu.containsKey(r)||n0(n,r)}))}function n0(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(pm(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),Am(n))}function M_(n,e,t){for(const r of t)r instanceof YT?(n.Vu.addReference(r.key,e),oN(n,r)):r instanceof XT?(ce(Sm,"Document no longer in limbo: "+r.key),n.Vu.removeReference(r.key,e),n.Vu.containsKey(r.key)||n0(n,r.key)):Ie(19791,{wu:r})}function oN(n,e){const t=e.key,r=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(r)||(ce(Sm,"New document in limbo: "+t),n.Eu.add(r),Am(n))}function Am(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new Ee(nt.fromString(e)),r=n.fu.next();n.Au.set(r,new Qb(t)),n.Ru=n.Ru.insert(t,r),WT(n.remoteStore,new pi(Xr(Od(t.path)),r,"TargetPurposeLimboResolution",Nd.ce))}}async function mu(n,e,t){const r=xe(n),o=[],a=[],u=[];r.Tu.isEmpty()||(r.Tu.forEach(((h,p)=>{u.push(r.pu(p,e,t).then((y=>{var _;if((y||t)&&r.isPrimaryClient){const E=y?!y.fromCache:(_=t==null?void 0:t.targetChanges.get(p.targetId))==null?void 0:_.current;r.sharedClientState.updateQueryState(p.targetId,E?"current":"not-current")}if(y){o.push(y);const E=dm.Es(p.targetId,y);a.push(E)}})))})),await Promise.all(u),r.Pu.J_(o),await(async function(p,y){const _=xe(p);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",(E=>Y.forEach(y,(T=>Y.forEach(T.Ts,(O=>_.persistence.referenceDelegate.addReference(E,T.targetId,O))).next((()=>Y.forEach(T.Is,(O=>_.persistence.referenceDelegate.removeReference(E,T.targetId,O)))))))))}catch(E){if(!za(E))throw E;ce(hm,"Failed to update sequence numbers: "+E)}for(const E of y){const T=E.targetId;if(!E.fromCache){const O=_.vs.get(T),q=O.snapshotVersion,V=O.withLastLimboFreeSnapshotVersion(q);_.vs=_.vs.insert(T,V)}}})(r.localStore,a))}async function aN(n,e){const t=xe(n);if(!t.currentUser.isEqual(e)){ce(Sm,"User change. New user:",e.toKey());const r=await zT(t.localStore,e);t.currentUser=e,(function(a,u){a.mu.forEach((h=>{h.forEach((p=>{p.reject(new oe(K.CANCELLED,u))}))})),a.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await mu(t,r.Ns)}}function lN(n,e){const t=xe(n),r=t.Au.get(e);if(r&&r.hu)return je().add(r.key);{let o=je();const a=t.Iu.get(e);if(!a)return o;for(const u of a){const h=t.Tu.get(u);o=o.unionWith(h.view.nu)}return o}}function r0(n){const e=xe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=ZT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=lN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=rN.bind(null,e),e.Pu.J_=qb.bind(null,e.eventManager),e.Pu.yu=Hb.bind(null,e.eventManager),e}function uN(n){const e=xe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iN.bind(null,e),e}class gd{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=jd(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return hb(this.persistence,new ub,e.initialUser,this.serializer)}Cu(e){return new jT(cm.Vi,this.serializer)}Du(e){return new _b}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}gd.provider={build:()=>new gd};class cN extends gd{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){We(this.persistence.referenceDelegate instanceof pd,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Kx(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Tn.withCacheSize(this.cacheSizeBytes):Tn.DEFAULT;return new jT((r=>pd.Vi(r,t)),this.serializer)}}class Ip{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>V_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=aN.bind(null,this.syncEngine),await Bb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Wb})()}createDatastore(e){const t=jd(e.databaseInfo.databaseId),r=Sb(e.databaseInfo);return Pb(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,o,a,u,h){return new bb(r,o,a,u,h)})(this.localStore,this.datastore,e.asyncQueue,(t=>V_(this.syncEngine,t,0)),(function(){return P_.v()?new P_:new wb})())}createSyncEngine(e,t){return(function(o,a,u,h,p,y,_){const E=new Yb(o,a,u,h,p,y);return _&&(E.gu=!0),E})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const a=xe(o);ce(To,"RemoteStore shutting down."),a.Ea.add(5),await pu(a),a.Aa.shutdown(),a.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Ip.provider={build:()=>new Ip};/**
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
 */class Rm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):ks("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */let dN=class{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new oe(K.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await(async function(o,a){const u=xe(o),h={documents:a.map((E=>fd(u.serializer,E)))},p=await u.jo("BatchGetDocuments",u.serializer.databaseId,nt.emptyPath(),h,a.length),y=new Map;p.forEach((E=>{const T=bx(u.serializer,E);y.set(T.key.toString(),T)}));const _=[];return a.forEach((E=>{const T=y.get(E.toString());We(!!T,55234,{key:E}),_.push(T)})),_})(this.datastore,e);return t.forEach((r=>this.recordVersion(r))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new im(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((t,r)=>{const o=Ee.fromPath(r);this.mutations.push(new AT(o,this.precondition(o)))})),await(async function(r,o){const a=xe(r),u={writes:o.map((h=>OT(a.serializer,h)))};await a.Wo("Commit",a.serializer.databaseId,nt.emptyPath(),u)})(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw Ie(50498,{Gu:e.constructor.name});t=Re.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new oe(K.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(Re.min())?dn.exists(!1):dn.updateTime(t):dn.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Re.min()))throw new oe(K.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return dn.updateTime(t)}return dn.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}};/**
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
 */class hN{constructor(e,t,r,o,a){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=o,this.deferred=a,this.zu=r.maxAttempts,this.M_=new fm(this.asyncQueue,"transaction_retry")}ju(){this.zu-=1,this.Hu()}Hu(){this.M_.p_((async()=>{const e=new dN(this.datastore),t=this.Ju(e);t&&t.then((r=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(r)})).catch((o=>{this.Zu(o)}))))})).catch((r=>{this.Zu(r)}))}))}Ju(e){try{const t=this.updateFunction(e);return!du(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Zu(e){this.zu>0&&this.Xu(e)?(this.zu-=1,this.asyncQueue.enqueueAndForget((()=>(this.Hu(),Promise.resolve())))):this.deferred.reject(e)}Xu(e){if((e==null?void 0:e.name)==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!RT(t)}return!1}}/**
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
 */const Ci="FirestoreClient";class fN{constructor(e,t,r,o,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=o,this.user=rn.UNAUTHENTICATED,this.clientId=Jp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,(async u=>{ce(Ci,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(r,(u=>(ce(Ci,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Yr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=_m(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function jf(n,e){n.asyncQueue.verifyOperationInProgress(),ce(Ci,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async o=>{r.isEqual(o)||(await zT(e.localStore,o),r=o)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function L_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await pN(n);ce(Ci,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>b_(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,o)=>b_(e.remoteStore,o))),n._onlineComponents=e}async function pN(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ce(Ci,"Using user provided OfflineComponentProvider");try{await jf(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===K.FAILED_PRECONDITION||o.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Eo("Error using user provided cache. Falling back to memory cache: "+t),await jf(n,new gd)}}else ce(Ci,"Using default OfflineComponentProvider"),await jf(n,new cN(void 0));return n._offlineComponents}async function Cm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ce(Ci,"Using user provided OnlineComponentProvider"),await L_(n,n._uninitializedComponentsProvider._online)):(ce(Ci,"Using default OnlineComponentProvider"),await L_(n,new Ip))),n._onlineComponents}function mN(n){return Cm(n).then((e=>e.syncEngine))}function gN(n){return Cm(n).then((e=>e.datastore))}async function yd(n){const e=await Cm(n),t=e.eventManager;return t.onListen=Xb.bind(null,e.syncEngine),t.onUnlisten=eN.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Jb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=tN.bind(null,e.syncEngine),t}function yN(n,e,t,r){const o=new Rm(r),a=new Im(e,o,t);return n.asyncQueue.enqueueAndForget((async()=>wm(await yd(n),a))),()=>{o.Nu(),n.asyncQueue.enqueueAndForget((async()=>Em(await yd(n),a)))}}function vN(n,e,t={}){const r=new Yr;return n.asyncQueue.enqueueAndForget((async()=>(function(a,u,h,p,y){const _=new Rm({next:T=>{_.Nu(),u.enqueueAndForget((()=>Em(a,E)));const O=T.docs.has(h);!O&&T.fromCache?y.reject(new oe(K.UNAVAILABLE,"Failed to get document because the client is offline.")):O&&T.fromCache&&p&&p.source==="server"?y.reject(new oe(K.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(T)},error:T=>y.reject(T)}),E=new Im(Od(h.path),_,{includeMetadataChanges:!0,Ka:!0});return wm(a,E)})(await yd(n),n.asyncQueue,e,t,r))),r.promise}function _N(n,e,t={}){const r=new Yr;return n.asyncQueue.enqueueAndForget((async()=>(function(a,u,h,p,y){const _=new Rm({next:T=>{_.Nu(),u.enqueueAndForget((()=>Em(a,E))),T.fromCache&&p.source==="server"?y.reject(new oe(K.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(T)},error:T=>y.reject(T)}),E=new Im(h,_,{includeMetadataChanges:!0,Ka:!0});return wm(a,E)})(await yd(n),n.asyncQueue,e,t,r))),r.promise}function wN(n,e){const t=new Yr;return n.asyncQueue.enqueueAndForget((async()=>nN(await mN(n),e,t))),t.promise}function EN(n,e,t){const r=new Yr;return n.asyncQueue.enqueueAndForget((async()=>{const o=await gN(n);new hN(n.asyncQueue,o,t,e,r).ju()})),r.promise}/**
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
 */function s0(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const TN="ComponentProvider",F_=new Map;function IN(n,e,t,r,o){return new jP(n,e,t,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,s0(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator,r)}/**
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
 */const i0="firestore.googleapis.com",U_=!0;class j_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new oe(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=i0,this.ssl=U_}else this.host=e.host,this.ssl=e.ssl??U_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=UT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Hx)throw new oe(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}PP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=s0(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new oe(K.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new oe(K.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new oe(K.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,o){return r.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class $d{constructor(e,t,r,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new j_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new oe(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new oe(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new j_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new _P;switch(r.type){case"firstParty":return new IP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new oe(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=F_.get(t);r&&(ce(TN,"Removing Datastore"),F_.delete(t),r.terminate())})(this),Promise.resolve()}}function SN(n,e,t,r={}){var y;n=Fn(n,$d);const o=Pi(e),a=n._getSettings(),u={...a,emulatorOptions:n._getEmulatorOptions()},h=`${e}:${t}`;o&&(Np(`https://${h}`),Dp("Firestore",!0)),a.host!==i0&&a.host!==h&&Eo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...a,host:h,ssl:o,emulatorOptions:r};if(!Ss(p,u)&&(n._setSettings(p),r.mockUserToken)){let _,E;if(typeof r.mockUserToken=="string")_=r.mockUserToken,E=rn.MOCK_USER;else{_=Nw(r.mockUserToken,(y=n._app)==null?void 0:y.options.projectId);const T=r.mockUserToken.sub||r.mockUserToken.user_id;if(!T)throw new oe(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new rn(T)}n._authCredentials=new wP(new HE(_,E))}}/**
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
 */class Di{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Di(this.firestore,e,this._query)}}class vt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _i(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vt(this.firestore,e,this._key)}toJSON(){return{type:vt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(cu(t,vt._jsonSchema))return new vt(e,r||null,new Ee(nt.fromString(t.referencePath)))}}vt._jsonSchemaVersion="firestore/documentReference/1.0",vt._jsonSchema={type:Nt("string",vt._jsonSchemaVersion),referencePath:Nt("string")};class _i extends Di{constructor(e,t,r){super(e,t,Od(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vt(this.firestore,null,new Ee(e))}withConverter(e){return new _i(this.firestore,e,this._path)}}function km(n,e,...t){if(n=dt(n),GE("collection","path",e),n instanceof $d){const r=nt.fromString(e,...t);return Zv(r),new _i(n,null,r)}{if(!(n instanceof vt||n instanceof _i))throw new oe(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(nt.fromString(e,...t));return Zv(r),new _i(n.firestore,null,r)}}function it(n,e,...t){if(n=dt(n),arguments.length===1&&(e=Jp.newId()),GE("doc","path",e),n instanceof $d){const r=nt.fromString(e,...t);return Jv(r),new vt(n,null,new Ee(r))}{if(!(n instanceof vt||n instanceof _i))throw new oe(K.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(nt.fromString(e,...t));return Jv(r),new vt(n.firestore,n instanceof _i?n.converter:null,new Ee(r))}}/**
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
 */const z_="AsyncQueue";class B_{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new fm(this,"async_queue_retry"),this._c=()=>{const r=Uf();r&&ce(z_,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Uf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Uf();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Yr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!za(e))throw e;ce(z_,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,ks("INTERNAL UNHANDLED ERROR: ",$_(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=vm.createAndSchedule(this,e,t,r,(a=>this.hc(a)));return this.tc.push(o),o}uc(){this.nc&&Ie(47125,{Pc:$_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function $_(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class ki extends $d{constructor(e,t,r,o){super(e,t,r,o),this.type="firestore",this._queue=new B_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new B_(e),this._firestoreClient=void 0,await e}}}function AN(n,e){const t=typeof n=="object"?n:Sd(),r=typeof n=="string"?n:ld,o=xi(t,"firestore").getImmediate({identifier:r});if(!o._initialized){const a=Pw("firestore");a&&SN(o,...a)}return o}function gu(n){if(n._terminated)throw new oe(K.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||RN(n),n._firestoreClient}function RN(n){var r,o,a,u;const e=n._freezeSettings(),t=IN(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(o=n._app)==null?void 0:o.options.apiKey,e);n._componentsProvider||(a=e.localCache)!=null&&a._offlineComponentProvider&&((u=e.localCache)!=null&&u._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new fN(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(p){const y=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(y),_online:y}})(n._componentsProvider))}/**
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
 */class On{constructor(e){this._byteString=e}static fromBase64String(e){try{return new On(Yt.fromBase64String(e))}catch(t){throw new oe(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new On(Yt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:On._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(cu(e,On._jsonSchema))return On.fromBase64String(e.bytes)}}On._jsonSchemaVersion="firestore/bytes/1.0",On._jsonSchema={type:Nt("string",On._jsonSchemaVersion),bytes:Nt("string")};/**
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
 */class Wd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new oe(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class yu{constructor(e){this._methodName=e}}/**
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
 */class Jr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new oe(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new oe(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ue(this._lat,e._lat)||Ue(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Jr._jsonSchemaVersion}}static fromJSON(e){if(cu(e,Jr._jsonSchema))return new Jr(e.latitude,e.longitude)}}Jr._jsonSchemaVersion="firestore/geoPoint/1.0",Jr._jsonSchema={type:Nt("string",Jr._jsonSchemaVersion),latitude:Nt("number"),longitude:Nt("number")};/**
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
 */class mr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,o){if(r.length!==o.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==o[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:mr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(cu(e,mr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new mr(e.vectorValues);throw new oe(K.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}mr._jsonSchemaVersion="firestore/vectorValue/1.0",mr._jsonSchema={type:Nt("string",mr._jsonSchemaVersion),vectorValues:Nt("object")};/**
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
 */const CN=/^__.*__$/;class kN{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ni(e,this.data,this.fieldMask,t,this.fieldTransforms):new hu(e,this.data,t,this.fieldTransforms)}}class o0{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Ni(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function a0(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ie(40011,{dataSource:n})}}class qd{constructor(e,t,r,o,a,u){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=o,a===void 0&&this.validatePath(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new qd({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var o;const t=(o=this.path)==null?void 0:o.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var o;const t=(o=this.path)==null?void 0:o.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return vd(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(a0(this.dataSource)&&CN.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class PN{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||jd(e)}createContext(e,t,r,o=!1){return new qd({dataSource:e,methodName:t,targetDoc:r,path:Qt.emptyPath(),arrayElement:!1,hasConverter:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Hd(n){const e=n._freezeSettings(),t=jd(n._databaseId);return new PN(n._databaseId,!!e.ignoreUndefinedProperties,t)}function l0(n,e,t,r,o,a={}){const u=n.createContext(a.merge||a.mergeFields?2:0,e,t,o);bm("Data must be an object, but it was:",u,r);const h=d0(r,u);let p,y;if(a.merge)p=new Vn(u.fieldMask),y=u.fieldTransforms;else if(a.mergeFields){const _=[];for(const E of a.mergeFields){const T=La(e,E,t);if(!u.contains(T))throw new oe(K.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);p0(_,T)||_.push(T)}p=new Vn(_),y=u.fieldTransforms.filter((E=>p.covers(E.field)))}else p=null,y=u.fieldTransforms;return new kN(new cn(h),p,y)}class vu extends yu{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof vu}}function xN(n,e,t){return new qd({dataSource:3,targetDoc:e.settings.targetDoc,methodName:n._methodName,arrayElement:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Pm extends yu{_toFieldTransform(e){return new TT(e.path,new su)}isEqual(e){return e instanceof Pm}}class xm extends yu{constructor(e,t){super(e),this.Ac=t}_toFieldTransform(e){const t=xN(this,e,!0),r=this.Ac.map((a=>Wa(a,t))),o=new Oa(r);return new TT(e.path,o)}isEqual(e){return e instanceof xm&&Ss(this.Ac,e.Ac)}}function u0(n,e,t,r){const o=n.createContext(1,e,t);bm("Data must be an object, but it was:",o,r);const a=[],u=cn.empty();bi(r,((p,y)=>{const _=f0(e,p,t);y=dt(y);const E=o.childContextForFieldPath(_);if(y instanceof vu)a.push(_);else{const T=Wa(y,E);T!=null&&(a.push(_),u.set(_,T))}}));const h=new Vn(a);return new o0(u,h,o.fieldTransforms)}function c0(n,e,t,r,o,a){const u=n.createContext(1,e,t),h=[La(e,r,t)],p=[o];if(a.length%2!=0)throw new oe(K.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<a.length;T+=2)h.push(La(e,a[T])),p.push(a[T+1]);const y=[],_=cn.empty();for(let T=h.length-1;T>=0;--T)if(!p0(y,h[T])){const O=h[T];let q=p[T];q=dt(q);const V=u.childContextForFieldPath(O);if(q instanceof vu)y.push(O);else{const U=Wa(q,V);U!=null&&(y.push(O),_.set(O,U))}}const E=new Vn(y);return new o0(_,E,u.fieldTransforms)}function bN(n,e,t,r=!1){return Wa(t,n.createContext(r?4:3,e))}function Wa(n,e){if(h0(n=dt(n)))return bm("Unsupported field value:",e,n),d0(n,e);if(n instanceof yu)return(function(r,o){if(!a0(o.dataSource))throw o.createError(`${r._methodName}() can only be used with update() and set()`);if(!o.path)throw o.createError(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(o);a&&o.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(r,o){const a=[];let u=0;for(const h of r){let p=Wa(h,o.childContextForArray(u));p==null&&(p={nullValue:"NULL_VALUE"}),a.push(p),u++}return{arrayValue:{values:a}}})(n,e)}return(function(r,o){if((r=dt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return hx(o.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=ct.fromDate(r);return{timestampValue:hd(o.serializer,a)}}if(r instanceof ct){const a=new ct(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:hd(o.serializer,a)}}if(r instanceof Jr)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof On)return{bytesValue:xT(o.serializer,r._byteString)};if(r instanceof vt){const a=o.databaseId,u=r.firestore._databaseId;if(!u.isEqual(a))throw o.createError(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:lm(r.firestore._databaseId||o.databaseId,r._key.path)}}if(r instanceof mr)return(function(u,h){const p=u instanceof mr?u.toArray():u;return{mapValue:{fields:{[nT]:{stringValue:rT},[ud]:{arrayValue:{values:p.map((_=>{if(typeof _!="number")throw h.createError("VectorValues must only contain numeric values.");return sm(h.serializer,_)}))}}}}}})(r,o);if(FT(r))return r._toProto(o.serializer);throw o.createError(`Unsupported field value: ${bd(r)}`)})(n,e)}function d0(n,e){const t={};return YE(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bi(n,((r,o)=>{const a=Wa(o,e.childContextForField(r));a!=null&&(t[r]=a)})),{mapValue:{fields:t}}}function h0(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ct||n instanceof Jr||n instanceof On||n instanceof vt||n instanceof yu||n instanceof mr||FT(n))}function bm(n,e,t){if(!h0(t)||!KE(t)){const r=bd(t);throw r==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+r)}}function La(n,e,t){if((e=dt(e))instanceof Wd)return e._internalPath;if(typeof e=="string")return f0(n,e);throw vd("Field path arguments must be of type string or ",n,!1,void 0,t)}const NN=new RegExp("[~\\*/\\[\\]]");function f0(n,e,t){if(e.search(NN)>=0)throw vd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Wd(...e.split("."))._internalPath}catch{throw vd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function vd(n,e,t,r,o){const a=r&&!r.isEmpty(),u=o!==void 0;let h=`Function ${e}() called with invalid data`;t&&(h+=" (via `toFirestore()`)"),h+=". ";let p="";return(a||u)&&(p+=" (found",a&&(p+=` in field ${r}`),u&&(p+=` in document ${o}`),p+=")"),new oe(K.INVALID_ARGUMENT,h+n+p)}function p0(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class m0{convertValue(e,t="none"){switch(Ai(e)){case 0:return null;case 1:return e.booleanValue;case 2:return At(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Si(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ie(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return bi(e,((o,a)=>{r[o]=this.convertValue(a,t)})),r}convertVectorValue(e){var r,o,a;const t=(a=(o=(r=e.fields)==null?void 0:r[ud].arrayValue)==null?void 0:o.values)==null?void 0:a.map((u=>At(u.doubleValue)));return new mr(t)}convertGeoPoint(e){return new Jr(At(e.latitude),At(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Dd(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(eu(e));default:return null}}convertTimestamp(e){const t=Ii(e);return new ct(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=nt.fromString(e);We(LT(r),9688,{name:e});const o=new tu(r.get(1),r.get(3)),a=new Ee(r.popFirst(5));return o.isEqual(t)||ks(`Document ${a} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
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
 */class Gd extends m0{constructor(e){super(),this.firestore=e}convertBytes(e){return new On(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new vt(this.firestore,null,t)}}/**
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
 */function Ol(){return new vu("deleteField")}function zt(){return new Pm("serverTimestamp")}function Nm(...n){return new xm("arrayUnion",n)}const W_="@firebase/firestore",q_="4.11.0";/**
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
 */function H_(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const o=t;for(const a of r)if(a in o&&typeof o[a]=="function")return!0;return!1})(n,["next","error","complete"])}/**
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
 */class _d{constructor(e,t,r,o,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=o,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new DN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(La("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class DN extends _d{data(){return super.data()}}/**
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
 */function g0(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new oe(K.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Dm{}class y0 extends Dm{}function v0(n,e,...t){let r=[];e instanceof Dm&&r.push(e),r=r.concat(t),(function(a){const u=a.filter((p=>p instanceof Vm)).length,h=a.filter((p=>p instanceof Om)).length;if(u>1||u>0&&h>0)throw new oe(K.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const o of r)n=o._apply(n);return n}class Om extends y0{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Om(e,t,r)}_apply(e){const t=this._parse(e);return w0(e._query,t),new Di(e.firestore,e.converter,pp(e._query,t))}_parse(e){const t=Hd(e.firestore);return(function(a,u,h,p,y,_,E){let T;if(y.isKeyField()){if(_==="array-contains"||_==="array-contains-any")throw new oe(K.INVALID_ARGUMENT,`Invalid Query. You can't perform '${_}' queries on documentId().`);if(_==="in"||_==="not-in"){K_(E,_);const q=[];for(const V of E)q.push(G_(p,a,V));T={arrayValue:{values:q}}}else T=G_(p,a,E)}else _!=="in"&&_!=="not-in"&&_!=="array-contains-any"||K_(E,_),T=bN(h,u,E,_==="in"||_==="not-in");return bt.create(y,_,T)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Vm extends Dm{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Vm(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:yr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,a){let u=o;const h=a.getFlattenedFilters();for(const p of h)w0(u,p),u=pp(u,p)})(e._query,t),new Di(e.firestore,e.converter,pp(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Mm extends y0{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Mm(e,t)}_apply(e){const t=(function(o,a,u){if(o.startAt!==null)throw new oe(K.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new oe(K.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ru(a,u)})(e._query,this._field,this._direction);return new Di(e.firestore,e.converter,sx(e._query,t))}}function _0(n,e="asc"){const t=e,r=La("orderBy",n);return Mm._create(r,t)}function G_(n,e,t){if(typeof(t=dt(t))=="string"){if(t==="")throw new oe(K.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!dT(e)&&t.indexOf("/")!==-1)throw new oe(K.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(nt.fromString(t));if(!Ee.isDocumentKey(r))throw new oe(K.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return a_(n,new Ee(r))}if(t instanceof vt)return a_(n,t._key);throw new oe(K.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${bd(t)}.`)}function K_(n,e){if(!Array.isArray(n)||n.length===0)throw new oe(K.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function w0(n,e){const t=(function(o,a){for(const u of o)for(const h of u.getFlattenedFilters())if(a.indexOf(h.op)>=0)return h.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new oe(K.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new oe(K.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function E0(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class ON extends m0{constructor(e){super(),this.firestore=e}convertBytes(e){return new On(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new vt(this.firestore,null,t)}}class Ta{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wi extends _d{constructor(e,t,r,o,a,u){super(e,t,r,o,u),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Kc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(La("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new oe(K.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=wi._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}wi._jsonSchemaVersion="firestore/documentSnapshot/1.0",wi._jsonSchema={type:Nt("string",wi._jsonSchemaVersion),bundleSource:Nt("string","DocumentSnapshot"),bundleName:Nt("string"),bundle:Nt("string")};class Kc extends wi{data(e={}){return super.data(e)}}class mo{constructor(e,t,r,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Ta(o.hasPendingWrites,o.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Kc(this._firestore,this._userDataWriter,r.key,r,new Ta(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new oe(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,a){if(o._snapshot.oldDocs.isEmpty()){let u=0;return o._snapshot.docChanges.map((h=>{const p=new Kc(o._firestore,o._userDataWriter,h.doc.key,h.doc,new Ta(o._snapshot.mutatedKeys.has(h.doc.key),o._snapshot.fromCache),o.query.converter);return h.doc,{type:"added",doc:p,oldIndex:-1,newIndex:u++}}))}{let u=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((h=>a||h.type!==3)).map((h=>{const p=new Kc(o._firestore,o._userDataWriter,h.doc.key,h.doc,new Ta(o._snapshot.mutatedKeys.has(h.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,_=-1;return h.type!==0&&(y=u.indexOf(h.doc.key),u=u.delete(h.doc.key)),h.type!==1&&(u=u.add(h.doc),_=u.indexOf(h.doc.key)),{type:VN(h.type),doc:p,oldIndex:y,newIndex:_}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new oe(K.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=mo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Jp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],o=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),o.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function VN(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ie(61501,{type:n})}}/**
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
 */mo._jsonSchemaVersion="firestore/querySnapshot/1.0",mo._jsonSchema={type:Nt("string",mo._jsonSchemaVersion),bundleSource:Nt("string","QuerySnapshot"),bundleName:Nt("string"),bundle:Nt("string")};const MN={maxAttempts:5};function zl(n,e){if((n=dt(n)).firestore!==e)throw new oe(K.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */class LN{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Hd(e)}get(e){const t=zl(e,this._firestore),r=new ON(this._firestore);return this._transaction.lookup([t._key]).then((o=>{if(!o||o.length!==1)return Ie(24041);const a=o[0];if(a.isFoundDocument())return new _d(this._firestore,r,a.key,a,t.converter);if(a.isNoDocument())return new _d(this._firestore,r,t._key,null,t.converter);throw Ie(18433,{doc:a})}))}set(e,t,r){const o=zl(e,this._firestore),a=E0(o.converter,t,r),u=l0(this._dataReader,"Transaction.set",o._key,a,o.converter!==null,r);return this._transaction.set(o._key,u),this}update(e,t,r,...o){const a=zl(e,this._firestore);let u;return u=typeof(t=dt(t))=="string"||t instanceof Wd?c0(this._dataReader,"Transaction.update",a._key,t,r,o):u0(this._dataReader,"Transaction.update",a._key,t),this._transaction.update(a._key,u),this}delete(e){const t=zl(e,this._firestore);return this._transaction.delete(t._key),this}}/**
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
 */class FN extends LN{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=zl(e,this._firestore),r=new Gd(this._firestore);return super.get(e).then((o=>new wi(this._firestore,r,t._key,o._document,new Ta(!1,!1),t.converter)))}}function Kd(n,e,t){n=Fn(n,ki);const r={...MN,...t};(function(u){if(u.maxAttempts<1)throw new oe(K.INVALID_ARGUMENT,"Max attempts must be at least 1")})(r);const o=gu(n);return EN(o,(a=>e(new FN(n,a))),r)}/**
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
 */function UN(n){n=Fn(n,vt);const e=Fn(n.firestore,ki),t=gu(e);return vN(t,n._key).then((r=>I0(e,n,r)))}function jN(n){n=Fn(n,Di);const e=Fn(n.firestore,ki),t=gu(e),r=new Gd(e);return g0(n._query),_N(t,n._query).then((o=>new mo(e,r,n,o)))}function zN(n,e,t){n=Fn(n,vt);const r=Fn(n.firestore,ki),o=E0(n.converter,e,t),a=Hd(r);return T0(r,[l0(a,"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,dn.none())])}function vr(n,e,t,...r){n=Fn(n,vt);const o=Fn(n.firestore,ki),a=Hd(o);let u;return u=typeof(e=dt(e))=="string"||e instanceof Wd?c0(a,"updateDoc",n._key,e,t,r):u0(a,"updateDoc",n._key,e),T0(o,[u.toMutation(n._key,dn.exists(!0))])}function Lm(n,...e){var y,_,E;n=dt(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||H_(e[r])||(t=e[r++]);const o={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(H_(e[r])){const T=e[r];e[r]=(y=T.next)==null?void 0:y.bind(T),e[r+1]=(_=T.error)==null?void 0:_.bind(T),e[r+2]=(E=T.complete)==null?void 0:E.bind(T)}let a,u,h;if(n instanceof vt)u=Fn(n.firestore,ki),h=Od(n._key.path),a={next:T=>{e[r]&&e[r](I0(u,n,T))},error:e[r+1],complete:e[r+2]};else{const T=Fn(n,Di);u=Fn(T.firestore,ki),h=T._query;const O=new Gd(u);a={next:q=>{e[r]&&e[r](new mo(u,O,T,q))},error:e[r+1],complete:e[r+2]},g0(n._query)}const p=gu(u);return yN(p,h,o,a)}function T0(n,e){const t=gu(n);return wN(t,e)}function I0(n,e,t){const r=t.docs.get(e._key),o=new Gd(n);return new wi(n,o,e._key,r,new Ta(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){vP(Co),gr(new er("firestore",((r,{instanceIdentifier:o,options:a})=>{const u=r.getProvider("app").getImmediate(),h=new ki(new EP(r.getProvider("auth-internal")),new SP(u,r.getProvider("app-check-internal")),zP(u,o),u);return a={useFetchStreams:t,...a},h._setSettings(a),h}),"PUBLIC").setMultipleInstances(!0)),In(W_,q_,e),In(W_,q_,"esm2020")})();/**
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
 */const S0="firebasestorage.googleapis.com",A0="storageBucket",BN=120*1e3,$N=600*1e3;/**
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
 */class Tt extends tr{constructor(e,t,r=0){super(zf(e),`Firebase Storage: ${t} (${zf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Tt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return zf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Et;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Et||(Et={}));function zf(n){return"storage/"+n}function Fm(){const n="An unknown error occurred, please check the error payload for server response.";return new Tt(Et.UNKNOWN,n)}function WN(n){return new Tt(Et.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function qN(n){return new Tt(Et.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function HN(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Tt(Et.UNAUTHENTICATED,n)}function GN(){return new Tt(Et.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function KN(n){return new Tt(Et.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function QN(){return new Tt(Et.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function YN(){return new Tt(Et.CANCELED,"User canceled the upload/download.")}function XN(n){return new Tt(Et.INVALID_URL,"Invalid URL '"+n+"'.")}function JN(n){return new Tt(Et.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function ZN(){return new Tt(Et.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+A0+"' property when initializing the app?")}function eD(){return new Tt(Et.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function tD(){return new Tt(Et.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function nD(n){return new Tt(Et.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Sp(n){return new Tt(Et.INVALID_ARGUMENT,n)}function R0(){return new Tt(Et.APP_DELETED,"The Firebase app was deleted.")}function rD(n){return new Tt(Et.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ql(n,e){return new Tt(Et.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Vl(n){throw new Tt(Et.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class Mn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Mn.makeFromUrl(e,t)}catch{return new Mn(e,"")}if(r.path==="")return r;throw JN(e)}static makeFromUrl(e,t){let r=null;const o="([A-Za-z0-9.\\-_]+)";function a(ie){ie.path.charAt(ie.path.length-1)==="/"&&(ie.path_=ie.path_.slice(0,-1))}const u="(/(.*))?$",h=new RegExp("^gs://"+o+u,"i"),p={bucket:1,path:3};function y(ie){ie.path_=decodeURIComponent(ie.path)}const _="v[A-Za-z0-9_]+",E=t.replace(/[.]/g,"\\."),T="(/([^?#]*).*)?$",O=new RegExp(`^https?://${E}/${_}/b/${o}/o${T}`,"i"),q={bucket:1,path:3},V=t===S0?"(?:storage.googleapis.com|storage.cloud.google.com)":t,U="([^?#]*)",Z=new RegExp(`^https?://${V}/${o}/${U}`,"i"),se=[{regex:h,indices:p,postModify:a},{regex:O,indices:q,postModify:y},{regex:Z,indices:{bucket:1,path:2},postModify:y}];for(let ie=0;ie<se.length;ie++){const ge=se[ie],ue=ge.regex.exec(e);if(ue){const R=ue[ge.indices.bucket];let I=ue[ge.indices.path];I||(I=""),r=new Mn(R,I),ge.postModify(r);break}}if(r==null)throw XN(e);return r}}class sD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function iD(n,e,t){let r=1,o=null,a=null,u=!1,h=0;function p(){return h===2}let y=!1;function _(...U){y||(y=!0,e.apply(null,U))}function E(U){o=setTimeout(()=>{o=null,n(O,p())},U)}function T(){a&&clearTimeout(a)}function O(U,...Z){if(y){T();return}if(U){T(),_.call(null,U,...Z);return}if(p()||u){T(),_.call(null,U,...Z);return}r<64&&(r*=2);let se;h===1?(h=2,se=0):se=(r+Math.random())*1e3,E(se)}let q=!1;function V(U){q||(q=!0,T(),!y&&(o!==null?(U||(h=2),clearTimeout(o),E(0)):U||(h=1)))}return E(0),a=setTimeout(()=>{u=!0,V(!0)},t),V}function oD(n){n(!1)}/**
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
 */function aD(n){return n!==void 0}function lD(n){return typeof n=="object"&&!Array.isArray(n)}function Um(n){return typeof n=="string"||n instanceof String}function Q_(n){return jm()&&n instanceof Blob}function jm(){return typeof Blob<"u"}function Y_(n,e,t,r){if(r<e)throw Sp(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw Sp(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function zm(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function C0(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const o=e(r)+"="+e(n[r]);t=t+o+"&"}return t=t.slice(0,-1),t}var go;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(go||(go={}));/**
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
 */function uD(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,a=e.indexOf(n)!==-1;return t||o||a}/**
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
 */class cD{constructor(e,t,r,o,a,u,h,p,y,_,E,T=!0,O=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=o,this.successCodes_=a,this.additionalRetryCodes_=u,this.callback_=h,this.errorCallback_=p,this.timeout_=y,this.progressCallback_=_,this.connectionFactory_=E,this.retry=T,this.isUsingEmulator=O,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((q,V)=>{this.resolve_=q,this.reject_=V,this.start_()})}start_(){const e=(r,o)=>{if(o){r(!1,new Pc(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const u=h=>{const p=h.loaded,y=h.lengthComputable?h.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,y)};this.progressCallback_!==null&&a.addUploadProgressListener(u),a.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(u),this.pendingConnection_=null;const h=a.getErrorCode()===go.NO_ERROR,p=a.getStatus();if(!h||uD(p,this.additionalRetryCodes_)&&this.retry){const _=a.getErrorCode()===go.ABORT;r(!1,new Pc(!1,null,_));return}const y=this.successCodes_.indexOf(p)!==-1;r(!0,new Pc(y,a))})},t=(r,o)=>{const a=this.resolve_,u=this.reject_,h=o.connection;if(o.wasSuccessCode)try{const p=this.callback_(h,h.getResponse());aD(p)?a(p):a()}catch(p){u(p)}else if(h!==null){const p=Fm();p.serverResponse=h.getErrorText(),this.errorCallback_?u(this.errorCallback_(h,p)):u(p)}else if(o.canceled){const p=this.appDelete_?R0():YN();u(p)}else{const p=QN();u(p)}};this.canceled_?t(!1,new Pc(!1,null,!0)):this.backoffId_=iD(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&oD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Pc{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function dD(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function hD(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function fD(n,e){e&&(n["X-Firebase-GMPID"]=e)}function pD(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function mD(n,e,t,r,o,a,u=!0,h=!1){const p=C0(n.urlParams),y=n.url+p,_=Object.assign({},n.headers);return fD(_,e),dD(_,t),hD(_,a),pD(_,r),new cD(y,n.method,_,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,u,h)}/**
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
 */function gD(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function yD(...n){const e=gD();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(jm())return new Blob(n);throw new Tt(Et.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function vD(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function _D(n){if(typeof atob>"u")throw nD("base-64");return atob(n)}/**
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
 */const Gr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Bf{constructor(e,t){this.data=e,this.contentType=t||null}}function wD(n,e){switch(n){case Gr.RAW:return new Bf(k0(e));case Gr.BASE64:case Gr.BASE64URL:return new Bf(P0(n,e));case Gr.DATA_URL:return new Bf(TD(e),ID(e))}throw Fm()}function k0(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const a=r,u=n.charCodeAt(++t);r=65536|(a&1023)<<10|u&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function ED(n){let e;try{e=decodeURIComponent(n)}catch{throw Ql(Gr.DATA_URL,"Malformed data URL.")}return k0(e)}function P0(n,e){switch(n){case Gr.BASE64:{const o=e.indexOf("-")!==-1,a=e.indexOf("_")!==-1;if(o||a)throw Ql(n,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case Gr.BASE64URL:{const o=e.indexOf("+")!==-1,a=e.indexOf("/")!==-1;if(o||a)throw Ql(n,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=_D(e)}catch(o){throw o.message.includes("polyfill")?o:Ql(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let o=0;o<t.length;o++)r[o]=t.charCodeAt(o);return r}class x0{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Ql(Gr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=SD(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function TD(n){const e=new x0(n);return e.base64?P0(Gr.BASE64,e.rest):ED(e.rest)}function ID(n){return new x0(n).contentType}function SD(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class fi{constructor(e,t){let r=0,o="";Q_(e)?(this.data_=e,r=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if(Q_(this.data_)){const r=this.data_,o=vD(r,e,t);return o===null?null:new fi(o)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new fi(r,!0)}}static getBlob(...e){if(jm()){const t=e.map(r=>r instanceof fi?r.data_:r);return new fi(yD.apply(null,t))}else{const t=e.map(u=>Um(u)?wD(Gr.RAW,u).data:u.data_);let r=0;t.forEach(u=>{r+=u.byteLength});const o=new Uint8Array(r);let a=0;return t.forEach(u=>{for(let h=0;h<u.length;h++)o[a++]=u[h]}),new fi(o,!0)}}uploadData(){return this.data_}}/**
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
 */function b0(n){let e;try{e=JSON.parse(n)}catch{return null}return lD(e)?e:null}/**
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
 */function AD(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function RD(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function N0(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function CD(n,e){return e}class un{constructor(e,t,r,o){this.server=e,this.local=t||e,this.writable=!!r,this.xform=o||CD}}let xc=null;function kD(n){return!Um(n)||n.length<2?n:N0(n)}function D0(){if(xc)return xc;const n=[];n.push(new un("bucket")),n.push(new un("generation")),n.push(new un("metageneration")),n.push(new un("name","fullPath",!0));function e(a,u){return kD(u)}const t=new un("name");t.xform=e,n.push(t);function r(a,u){return u!==void 0?Number(u):u}const o=new un("size");return o.xform=r,n.push(o),n.push(new un("timeCreated")),n.push(new un("updated")),n.push(new un("md5Hash",null,!0)),n.push(new un("cacheControl",null,!0)),n.push(new un("contentDisposition",null,!0)),n.push(new un("contentEncoding",null,!0)),n.push(new un("contentLanguage",null,!0)),n.push(new un("contentType",null,!0)),n.push(new un("metadata","customMetadata",!0)),xc=n,xc}function PD(n,e){function t(){const r=n.bucket,o=n.fullPath,a=new Mn(r,o);return e._makeStorageReference(a)}Object.defineProperty(n,"ref",{get:t})}function xD(n,e,t){const r={};r.type="file";const o=t.length;for(let a=0;a<o;a++){const u=t[a];r[u.local]=u.xform(r,e[u.server])}return PD(r,n),r}function O0(n,e,t){const r=b0(e);return r===null?null:xD(n,r,t)}function bD(n,e,t,r){const o=b0(e);if(o===null||!Um(o.downloadTokens))return null;const a=o.downloadTokens;if(a.length===0)return null;const u=encodeURIComponent;return a.split(",").map(y=>{const _=n.bucket,E=n.fullPath,T="/b/"+u(_)+"/o/"+u(E),O=zm(T,t,r),q=C0({alt:"media",token:y});return O+q})[0]}function ND(n,e){const t={},r=e.length;for(let o=0;o<r;o++){const a=e[o];a.writable&&(t[a.server]=n[a.local])}return JSON.stringify(t)}class V0{constructor(e,t,r,o){this.url=e,this.method=t,this.handler=r,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function M0(n){if(!n)throw Fm()}function DD(n,e){function t(r,o){const a=O0(n,o,e);return M0(a!==null),a}return t}function OD(n,e){function t(r,o){const a=O0(n,o,e);return M0(a!==null),bD(a,o,n.host,n._protocol)}return t}function L0(n){function e(t,r){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=GN():o=HN():t.getStatus()===402?o=qN(n.bucket):t.getStatus()===403?o=KN(n.path):o=r,o.status=t.getStatus(),o.serverResponse=r.serverResponse,o}return e}function VD(n){const e=L0(n);function t(r,o){let a=e(r,o);return r.getStatus()===404&&(a=WN(n.path)),a.serverResponse=o.serverResponse,a}return t}function MD(n,e,t){const r=e.fullServerUrl(),o=zm(r,n.host,n._protocol),a="GET",u=n.maxOperationRetryTime,h=new V0(o,a,OD(n,t),u);return h.errorHandler=VD(e),h}function LD(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function FD(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=LD(null,e)),r}function UD(n,e,t,r,o){const a=e.bucketOnlyServerUrl(),u={"X-Goog-Upload-Protocol":"multipart"};function h(){let se="";for(let ie=0;ie<2;ie++)se=se+Math.random().toString().slice(2);return se}const p=h();u["Content-Type"]="multipart/related; boundary="+p;const y=FD(e,r,o),_=ND(y,t),E="--"+p+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+_+`\r
--`+p+`\r
Content-Type: `+y.contentType+`\r
\r
`,T=`\r
--`+p+"--",O=fi.getBlob(E,r,T);if(O===null)throw eD();const q={name:y.fullPath},V=zm(a,n.host,n._protocol),U="POST",Z=n.maxUploadRetryTime,te=new V0(V,U,DD(n,t),Z);return te.urlParams=q,te.headers=u,te.body=O.uploadData(),te.errorHandler=L0(e),te}class jD{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=go.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=go.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=go.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,o,a){if(this.sent_)throw Vl("cannot .send() more than once");if(Pi(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),a!==void 0)for(const u in a)a.hasOwnProperty(u)&&this.xhr_.setRequestHeader(u,a[u].toString());return o!==void 0?this.xhr_.send(o):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Vl("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Vl("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Vl("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Vl("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class zD extends jD{initXhr(){this.xhr_.responseType="text"}}function F0(){return new zD}/**
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
 */class Io{constructor(e,t){this._service=e,t instanceof Mn?this._location=t:this._location=Mn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Io(e,t)}get root(){const e=new Mn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return N0(this._location.path)}get storage(){return this._service}get parent(){const e=AD(this._location.path);if(e===null)return null;const t=new Mn(this._location.bucket,e);return new Io(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw rD(e)}}function BD(n,e,t){n._throwIfRoot("uploadBytes");const r=UD(n.storage,n._location,D0(),new fi(e,!0),t);return n.storage.makeRequestWithTokens(r,F0).then(o=>({metadata:o,ref:n}))}function $D(n){n._throwIfRoot("getDownloadURL");const e=MD(n.storage,n._location,D0());return n.storage.makeRequestWithTokens(e,F0).then(t=>{if(t===null)throw tD();return t})}function WD(n,e){const t=RD(n._location.path,e),r=new Mn(n._location.bucket,t);return new Io(n.storage,r)}/**
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
 */function qD(n){return/^[A-Za-z]+:\/\//.test(n)}function HD(n,e){return new Io(n,e)}function U0(n,e){if(n instanceof Bm){const t=n;if(t._bucket==null)throw ZN();const r=new Io(t,t._bucket);return e!=null?U0(r,e):r}else return e!==void 0?WD(n,e):n}function GD(n,e){if(e&&qD(e)){if(n instanceof Bm)return HD(n,e);throw Sp("To use ref(service, url), the first argument must be a Storage instance.")}else return U0(n,e)}function X_(n,e){const t=e==null?void 0:e[A0];return t==null?null:Mn.makeFromBucketSpec(t,n)}function KD(n,e,t,r={}){n.host=`${e}:${t}`;const o=Pi(e);o&&(Np(`https://${n.host}/b`),Dp("Storage",!0)),n._isUsingEmulator=!0,n._protocol=o?"https":"http";const{mockUserToken:a}=r;a&&(n._overrideAuthToken=typeof a=="string"?a:Nw(a,n.app.options.projectId))}class Bm{constructor(e,t,r,o,a,u=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=o,this._firebaseVersion=a,this._isUsingEmulator=u,this._bucket=null,this._host=S0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=BN,this._maxUploadRetryTime=$N,this._requests=new Set,o!=null?this._bucket=Mn.makeFromBucketSpec(o,this._host):this._bucket=X_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Mn.makeFromBucketSpec(this._url,e):this._bucket=X_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Y_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Y_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Zn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Io(this,e)}_makeRequest(e,t,r,o,a=!0){if(this._deleted)return new sD(R0());{const u=mD(e,this._appId,r,o,t,this._firebaseVersion,a,this._isUsingEmulator);return this._requests.add(u),u.getPromise().then(()=>this._requests.delete(u),()=>this._requests.delete(u)),u}}async makeRequestWithTokens(e,t){const[r,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,o).getPromise()}}const J_="@firebase/storage",Z_="0.14.0";/**
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
 */const j0="storage";function QD(n,e,t){return n=dt(n),BD(n,e,t)}function YD(n){return n=dt(n),$D(n)}function XD(n,e){return n=dt(n),GD(n,e)}function JD(n=Sd(),e){n=dt(n);const r=xi(n,j0).getImmediate({identifier:e}),o=Pw("storage");return o&&ZD(r,...o),r}function ZD(n,e,t,r={}){KD(n,e,t,r)}function e2(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new Bm(t,r,o,e,Co)}function t2(){gr(new er(j0,e2,"PUBLIC").setMultipleInstances(!0)),In(J_,Z_,""),In(J_,Z_,"esm2020")}t2();const n2={apiKey:"AIzaSyBWTuW6eD1gxTf8sLnZzuWN2dngDFphUH8",authDomain:"marcophoto-9cb75.firebaseapp.com",projectId:"marcophoto-9cb75",storageBucket:"marcophoto-9cb75.firebasestorage.app",messagingSenderId:"690399228253",appId:"1:690399228253:web:39777c4e908417294838b4",measurementId:"G-EY1HGL647R"},Qd=Lw(n2),Yl=gP(Qd),Ye=AN(Qd),r2=async()=>{await mk()&&fk(Qd)},ew=async()=>(Yl.currentUser||await e1(Yl),Yl.currentUser);r2();const s2=JD(Qd),i2=async(n,e)=>{const t=XD(s2,n);return await QD(t,e),YD(t)},z0=n=>n>=16?{marcoCount:4,rounds:12,photosPerPlayer:24}:n>=12?{marcoCount:3,rounds:9,photosPerPlayer:18}:n>=8?{marcoCount:2,rounds:6,photosPerPlayer:12}:{marcoCount:1,rounds:3,photosPerPlayer:6},Ml="main",o2=19,a2=2,jn=()=>{var e;const n=(e=Yl.currentUser)==null?void 0:e.uid;if(!n)throw new Error("Not signed in.");return n},tw=async n=>{const e=jn(),t=it(Ye,"users",e);await zN(t,{displayName:n},{merge:!0})},l2=async()=>{const n=jn(),e=await UN(it(Ye,"users",n));return e.exists()?e.data().activeRoomId??null:null},u2=(n,e)=>{const t=it(Ye,"rooms",n);return Lm(t,r=>{if(!r.exists()){e(null);return}const o=r.data();e({id:r.id,...o})})},c2=(n,e)=>{const t=km(Ye,"rooms",n,"players"),r=v0(t,_0("joinedAt","asc"));return Lm(r,o=>{const a=o.docs.map(u=>{const h=u.data();return{id:u.id,...h}});e(a)})},d2=async n=>{const e=jn(),t=it(Ye,"rooms",n,"players",e);await vr(t,{lastSeenAt:zt()})},h2=async n=>{const e=jn(),t=it(Ye,"rooms",Ml),r=it(Ye,"users",e),o=it(Ye,"rooms",Ml,"players",e);return Kd(Ye,async a=>{var _;const h=((_=(await a.get(r)).data())==null?void 0:_.activeRoomId)??null;if(h&&h!==Ml)throw new Error("You are already in a room.");const p=await a.get(t),y=await a.get(o);if(!p.exists())a.set(t,{state:"waiting",createdAt:zt(),lastActiveAt:zt(),playerCount:1,waitingSince:zt()}),a.set(o,{name:n,isReady:!1,votekickCount:0,joinedAt:zt(),lastSeenAt:zt()});else{const E=p.data(),T=E.playerCount??0,O=T<2;if(y.exists())a.set(o,{name:n,lastSeenAt:zt()},{merge:!0}),O&&E.state!=="waiting"&&a.update(t,{state:"waiting",lastActiveAt:zt(),waitingSince:zt()});else{if(E.state!=="waiting"&&!O)throw new Error("Game already started.");if(T>=o2)throw new Error("Room is full (19 players max).");a.set(o,{name:n,isReady:!1,votekickCount:0,joinedAt:zt(),lastSeenAt:zt()});const q={playerCount:T+1,lastActiveAt:zt(),waitingSince:T+1<=1?zt():E.waitingSince??null};O&&(q.state="waiting"),a.update(t,q)}}return a.set(r,{displayName:n,activeRoomId:Ml},{merge:!0}),{roomId:Ml}})},f2=async n=>{const e=jn(),t=it(Ye,"rooms",n),r=it(Ye,"rooms",n,"players",e),o=it(Ye,"users",e);return Kd(Ye,async a=>{const u=await a.get(t);if(u.exists()){const h=u.data(),p=Math.max((h.playerCount??1)-1,0),y={playerCount:p,lastActiveAt:zt(),waitingSince:p<=1?zt():h.waitingSince??null};p<2&&(y.state="waiting"),a.update(t,y)}a.delete(r),a.set(o,{activeRoomId:null},{merge:!0})})},p2=async(n,e)=>{const t=jn();if(t===e)throw new Error("You cannot vote kick yourself.");const r=it(Ye,"rooms",n),o=km(Ye,"rooms",n,"players"),a=it(o,t),u=it(o,e),h=it(Ye,"rooms",n,"players",e,"votes",t);return Kd(Ye,async p=>{const y=await p.get(r);if(!y.exists())throw new Error("Room not found.");if(!(await p.get(a)).exists())throw new Error("You are not in this room.");const E=await p.get(u);if(!E.exists())throw new Error("Player is no longer in this room.");if((await p.get(h)).exists())throw new Error("You already voted to kick this player.");const O=y.data(),q=E.data(),V=O.playerCount??0,U=(q.votekickCount??0)+1,Z=Math.max(a2,Math.ceil((V-1)/2));return p.set(h,{voterUid:t,createdAt:zt()}),p.update(u,{votekickCount:U}),{kicked:U>=Z,voteCount:U,votesNeeded:Z}})},m2=async(n,e)=>{const t=jn(),r=it(Ye,"rooms",n,"players",t);await vr(r,{isReady:e,lastSeenAt:zt()})},g2=n=>{const e=[...n];for(let t=e.length-1;t>0;t--){const r=Math.floor(Math.random()*(t+1));[e[t],e[r]]=[e[r],e[t]]}return e},y2=(n,e,t)=>{const r=it(Ye,"rooms",n,"rounds",String(e));return Lm(r,o=>{if(!o.exists()){t(null);return}t(o.data())})},v2=async(n,e)=>{const t=jn(),r=[];for(let a=0;a<e.length;a++){const u=`marcophotos/${n}/${t}/pool/${a}`,h=await i2(u,e[a]);r.push(h)}const o=it(Ye,"rooms",n,"players",t);await vr(o,{photoUrls:r,usedPhotoUrls:[],hasUploadedPhotos:!0})},_2=async(n,e,t,r,o)=>{const a=jn(),u=it(Ye,"rooms",n,"rounds",String(e)),h=it(Ye,"rooms",n,"players",a);await vr(u,{[`marcoSubmissions.${a}`]:{eliminatedPlayerId:t,privatePhotoUrl:r,publicPhotoUrl:o},marcoConfirmed:[a]}),await vr(h,{usedPhotoUrls:Nm(r,o)})},w2=async(n,e)=>{const t=jn(),r=it(Ye,"rooms",n,"rounds",String(e));await vr(r,{marcoConfirmed:Nm(t)})},E2=async(n,e,t)=>{const r=jn(),o=it(Ye,"rooms",n,"rounds",String(e)),a=it(Ye,"rooms",n,"players",r);await vr(o,{[`publicPhotoUrls.${r}`]:t}),await vr(a,{usedPhotoUrls:Nm(t)})},T2=async(n,e,t)=>{const r=it(Ye,"rooms",n,"rounds",String(e));await vr(r,{eliminatedClue:t})},I2=async(n,e)=>{const t=it(Ye,"rooms",n,"rounds",String(e));await vr(t,{advanceToInvestigation:!0})},S2=async(n,e,t)=>{const r=jn(),o=it(Ye,"rooms",n,"rounds",String(e));await vr(o,{[`investigationVotes.${r}`]:t})},A2=async n=>{jn();const e=it(Ye,"rooms",n),t=km(Ye,"rooms",n,"players");return Kd(Ye,async r=>{const o=await r.get(e);if(!o.exists())throw new Error("Room not found.");if(o.data().state==="playing")return;const u=await jN(v0(t,_0("joinedAt","asc")));if(u.size<4)throw new Error("Need at least 4 players to start.");if(!u.docs.every(T=>T.data().isReady===!0))throw new Error("All players must be ready first.");const{marcoCount:p,rounds:y,photosPerPlayer:_}=z0(u.size),E=g2(u.docs.map(T=>T.id));for(let T=0;T<E.length;T++){const O=it(Ye,"rooms",n,"players",E[T]);r.update(O,{role:T<p?"Marco":"Reg"})}r.update(e,{state:"playing",marcoCount:p,rounds:y,photosPerPlayer:_,gamePhase:Ol(),currentRound:Ol(),eliminatedPlayerIds:Ol(),investigatedPlayerIds:Ol(),winner:Ol(),lastActiveAt:zt()})})};function R2(n,e){const t=M.createContext(e),r=a=>{const{children:u,...h}=a,p=M.useMemo(()=>h,Object.values(h));return A.jsx(t.Provider,{value:p,children:u})};r.displayName=n+"Provider";function o(a){const u=M.useContext(t);if(u)return u;if(e!==void 0)return e;throw new Error(`\`${a}\` must be used within \`${n}\``)}return[r,o]}function B0(n,e=[]){let t=[];function r(a,u){const h=M.createContext(u),p=t.length;t=[...t,u];const y=E=>{var Z;const{scope:T,children:O,...q}=E,V=((Z=T==null?void 0:T[n])==null?void 0:Z[p])||h,U=M.useMemo(()=>q,Object.values(q));return A.jsx(V.Provider,{value:U,children:O})};y.displayName=a+"Provider";function _(E,T){var V;const O=((V=T==null?void 0:T[n])==null?void 0:V[p])||h,q=M.useContext(O);if(q)return q;if(u!==void 0)return u;throw new Error(`\`${E}\` must be used within \`${a}\``)}return[y,_]}const o=()=>{const a=t.map(u=>M.createContext(u));return function(h){const p=(h==null?void 0:h[n])||a;return M.useMemo(()=>({[`__scope${n}`]:{...h,[n]:p}}),[h,p])}};return o.scopeName=n,[r,C2(o,...e)]}function C2(...n){const e=n[0];if(n.length===1)return e;const t=()=>{const r=n.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(a){const u=r.reduce((h,{useScope:p,scopeName:y})=>{const E=p(a)[`__scope${y}`];return{...h,...E}},{});return M.useMemo(()=>({[`__scope${e.scopeName}`]:u}),[u])}};return t.scopeName=e.scopeName,t}function nw(n,e){if(typeof n=="function")return n(e);n!=null&&(n.current=e)}function $0(...n){return e=>{let t=!1;const r=n.map(o=>{const a=nw(o,e);return!t&&typeof a=="function"&&(t=!0),a});if(t)return()=>{for(let o=0;o<r.length;o++){const a=r[o];typeof a=="function"?a():nw(n[o],null)}}}}function xs(...n){return M.useCallback($0(...n),n)}function Is(n,e,{checkForDefaultPrevented:t=!0}={}){return function(o){if(n==null||n(o),t===!1||!o.defaultPrevented)return e==null?void 0:e(o)}}var wd=globalThis!=null&&globalThis.document?M.useLayoutEffect:()=>{},k2=hA.useId||(()=>{}),P2=0;function $f(n){const[e,t]=M.useState(k2());return wd(()=>{t(r=>r??String(P2++))},[n]),n||(e?`radix-${e}`:"")}function So(n){const e=M.useRef(n);return M.useEffect(()=>{e.current=n}),M.useMemo(()=>(...t)=>{var r;return(r=e.current)==null?void 0:r.call(e,...t)},[])}function x2({prop:n,defaultProp:e,onChange:t=()=>{}}){const[r,o]=b2({defaultProp:e,onChange:t}),a=n!==void 0,u=a?n:r,h=So(t),p=M.useCallback(y=>{if(a){const E=typeof y=="function"?y(n):y;E!==n&&h(E)}else o(y)},[a,n,o,h]);return[u,p]}function b2({defaultProp:n,onChange:e}){const t=M.useState(n),[r]=t,o=M.useRef(r),a=So(e);return M.useEffect(()=>{o.current!==r&&(a(r),o.current=r)},[r,o,a]),t}var W0=Sw();const N2=Iw(W0);var $m=M.forwardRef((n,e)=>{const{children:t,...r}=n,o=M.Children.toArray(t),a=o.find(D2);if(a){const u=a.props.children,h=o.map(p=>p===a?M.Children.count(u)>1?M.Children.only(null):M.isValidElement(u)?u.props.children:null:p);return A.jsx(Ap,{...r,ref:e,children:M.isValidElement(u)?M.cloneElement(u,void 0,h):null})}return A.jsx(Ap,{...r,ref:e,children:t})});$m.displayName="Slot";var Ap=M.forwardRef((n,e)=>{const{children:t,...r}=n;if(M.isValidElement(t)){const o=V2(t),a=O2(r,t.props);return t.type!==M.Fragment&&(a.ref=e?$0(e,o):o),M.cloneElement(t,a)}return M.Children.count(t)>1?M.Children.only(null):null});Ap.displayName="SlotClone";var q0=({children:n})=>A.jsx(A.Fragment,{children:n});function D2(n){return M.isValidElement(n)&&n.type===q0}function O2(n,e){const t={...e};for(const r in e){const o=n[r],a=e[r];/^on[A-Z]/.test(r)?o&&a?t[r]=(...h)=>{a(...h),o(...h)}:o&&(t[r]=o):r==="style"?t[r]={...o,...a}:r==="className"&&(t[r]=[o,a].filter(Boolean).join(" "))}return{...n,...t}}function V2(n){var r,o;let e=(r=Object.getOwnPropertyDescriptor(n.props,"ref"))==null?void 0:r.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?n.ref:(e=(o=Object.getOwnPropertyDescriptor(n,"ref"))==null?void 0:o.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?n.props.ref:n.props.ref||n.ref)}var M2=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],bs=M2.reduce((n,e)=>{const t=M.forwardRef((r,o)=>{const{asChild:a,...u}=r,h=a?$m:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),A.jsx(h,{...u,ref:o})});return t.displayName=`Primitive.${e}`,{...n,[e]:t}},{});function L2(n,e){n&&W0.flushSync(()=>n.dispatchEvent(e))}function F2(n,e=globalThis==null?void 0:globalThis.document){const t=So(n);M.useEffect(()=>{const r=o=>{o.key==="Escape"&&t(o)};return e.addEventListener("keydown",r,{capture:!0}),()=>e.removeEventListener("keydown",r,{capture:!0})},[t,e])}var U2="DismissableLayer",Rp="dismissableLayer.update",j2="dismissableLayer.pointerDownOutside",z2="dismissableLayer.focusOutside",rw,H0=M.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),G0=M.forwardRef((n,e)=>{const{disableOutsidePointerEvents:t=!1,onEscapeKeyDown:r,onPointerDownOutside:o,onFocusOutside:a,onInteractOutside:u,onDismiss:h,...p}=n,y=M.useContext(H0),[_,E]=M.useState(null),T=(_==null?void 0:_.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,O]=M.useState({}),q=xs(e,R=>E(R)),V=Array.from(y.layers),[U]=[...y.layersWithOutsidePointerEventsDisabled].slice(-1),Z=V.indexOf(U),te=_?V.indexOf(_):-1,se=y.layersWithOutsidePointerEventsDisabled.size>0,ie=te>=Z,ge=W2(R=>{const I=R.target,C=[...y.branches].some(N=>N.contains(I));!ie||C||(o==null||o(R),u==null||u(R),R.defaultPrevented||h==null||h())},T),ue=q2(R=>{const I=R.target;[...y.branches].some(N=>N.contains(I))||(a==null||a(R),u==null||u(R),R.defaultPrevented||h==null||h())},T);return F2(R=>{te===y.layers.size-1&&(r==null||r(R),!R.defaultPrevented&&h&&(R.preventDefault(),h()))},T),M.useEffect(()=>{if(_)return t&&(y.layersWithOutsidePointerEventsDisabled.size===0&&(rw=T.body.style.pointerEvents,T.body.style.pointerEvents="none"),y.layersWithOutsidePointerEventsDisabled.add(_)),y.layers.add(_),sw(),()=>{t&&y.layersWithOutsidePointerEventsDisabled.size===1&&(T.body.style.pointerEvents=rw)}},[_,T,t,y]),M.useEffect(()=>()=>{_&&(y.layers.delete(_),y.layersWithOutsidePointerEventsDisabled.delete(_),sw())},[_,y]),M.useEffect(()=>{const R=()=>O({});return document.addEventListener(Rp,R),()=>document.removeEventListener(Rp,R)},[]),A.jsx(bs.div,{...p,ref:q,style:{pointerEvents:se?ie?"auto":"none":void 0,...n.style},onFocusCapture:Is(n.onFocusCapture,ue.onFocusCapture),onBlurCapture:Is(n.onBlurCapture,ue.onBlurCapture),onPointerDownCapture:Is(n.onPointerDownCapture,ge.onPointerDownCapture)})});G0.displayName=U2;var B2="DismissableLayerBranch",$2=M.forwardRef((n,e)=>{const t=M.useContext(H0),r=M.useRef(null),o=xs(e,r);return M.useEffect(()=>{const a=r.current;if(a)return t.branches.add(a),()=>{t.branches.delete(a)}},[t.branches]),A.jsx(bs.div,{...n,ref:o})});$2.displayName=B2;function W2(n,e=globalThis==null?void 0:globalThis.document){const t=So(n),r=M.useRef(!1),o=M.useRef(()=>{});return M.useEffect(()=>{const a=h=>{if(h.target&&!r.current){let p=function(){K0(j2,t,y,{discrete:!0})};const y={originalEvent:h};h.pointerType==="touch"?(e.removeEventListener("click",o.current),o.current=p,e.addEventListener("click",o.current,{once:!0})):p()}else e.removeEventListener("click",o.current);r.current=!1},u=window.setTimeout(()=>{e.addEventListener("pointerdown",a)},0);return()=>{window.clearTimeout(u),e.removeEventListener("pointerdown",a),e.removeEventListener("click",o.current)}},[e,t]),{onPointerDownCapture:()=>r.current=!0}}function q2(n,e=globalThis==null?void 0:globalThis.document){const t=So(n),r=M.useRef(!1);return M.useEffect(()=>{const o=a=>{a.target&&!r.current&&K0(z2,t,{originalEvent:a},{discrete:!1})};return e.addEventListener("focusin",o),()=>e.removeEventListener("focusin",o)},[e,t]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function sw(){const n=new CustomEvent(Rp);document.dispatchEvent(n)}function K0(n,e,t,{discrete:r}){const o=t.originalEvent.target,a=new CustomEvent(n,{bubbles:!1,cancelable:!0,detail:t});e&&o.addEventListener(n,e,{once:!0}),r?L2(o,a):o.dispatchEvent(a)}var Wf="focusScope.autoFocusOnMount",qf="focusScope.autoFocusOnUnmount",iw={bubbles:!1,cancelable:!0},H2="FocusScope",Q0=M.forwardRef((n,e)=>{const{loop:t=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:a,...u}=n,[h,p]=M.useState(null),y=So(o),_=So(a),E=M.useRef(null),T=xs(e,V=>p(V)),O=M.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;M.useEffect(()=>{if(r){let V=function(se){if(O.paused||!h)return;const ie=se.target;h.contains(ie)?E.current=ie:li(E.current,{select:!0})},U=function(se){if(O.paused||!h)return;const ie=se.relatedTarget;ie!==null&&(h.contains(ie)||li(E.current,{select:!0}))},Z=function(se){if(document.activeElement===document.body)for(const ge of se)ge.removedNodes.length>0&&li(h)};document.addEventListener("focusin",V),document.addEventListener("focusout",U);const te=new MutationObserver(Z);return h&&te.observe(h,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",V),document.removeEventListener("focusout",U),te.disconnect()}}},[r,h,O.paused]),M.useEffect(()=>{if(h){aw.add(O);const V=document.activeElement;if(!h.contains(V)){const Z=new CustomEvent(Wf,iw);h.addEventListener(Wf,y),h.dispatchEvent(Z),Z.defaultPrevented||(G2(J2(Y0(h)),{select:!0}),document.activeElement===V&&li(h))}return()=>{h.removeEventListener(Wf,y),setTimeout(()=>{const Z=new CustomEvent(qf,iw);h.addEventListener(qf,_),h.dispatchEvent(Z),Z.defaultPrevented||li(V??document.body,{select:!0}),h.removeEventListener(qf,_),aw.remove(O)},0)}}},[h,y,_,O]);const q=M.useCallback(V=>{if(!t&&!r||O.paused)return;const U=V.key==="Tab"&&!V.altKey&&!V.ctrlKey&&!V.metaKey,Z=document.activeElement;if(U&&Z){const te=V.currentTarget,[se,ie]=K2(te);se&&ie?!V.shiftKey&&Z===ie?(V.preventDefault(),t&&li(se,{select:!0})):V.shiftKey&&Z===se&&(V.preventDefault(),t&&li(ie,{select:!0})):Z===te&&V.preventDefault()}},[t,r,O.paused]);return A.jsx(bs.div,{tabIndex:-1,...u,ref:T,onKeyDown:q})});Q0.displayName=H2;function G2(n,{select:e=!1}={}){const t=document.activeElement;for(const r of n)if(li(r,{select:e}),document.activeElement!==t)return}function K2(n){const e=Y0(n),t=ow(e,n),r=ow(e.reverse(),n);return[t,r]}function Y0(n){const e=[],t=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;t.nextNode();)e.push(t.currentNode);return e}function ow(n,e){for(const t of n)if(!Q2(t,{upTo:e}))return t}function Q2(n,{upTo:e}){if(getComputedStyle(n).visibility==="hidden")return!0;for(;n;){if(e!==void 0&&n===e)return!1;if(getComputedStyle(n).display==="none")return!0;n=n.parentElement}return!1}function Y2(n){return n instanceof HTMLInputElement&&"select"in n}function li(n,{select:e=!1}={}){if(n&&n.focus){const t=document.activeElement;n.focus({preventScroll:!0}),n!==t&&Y2(n)&&e&&n.select()}}var aw=X2();function X2(){let n=[];return{add(e){const t=n[0];e!==t&&(t==null||t.pause()),n=lw(n,e),n.unshift(e)},remove(e){var t;n=lw(n,e),(t=n[0])==null||t.resume()}}}function lw(n,e){const t=[...n],r=t.indexOf(e);return r!==-1&&t.splice(r,1),t}function J2(n){return n.filter(e=>e.tagName!=="A")}var Z2="Portal",X0=M.forwardRef((n,e)=>{var h;const{container:t,...r}=n,[o,a]=M.useState(!1);wd(()=>a(!0),[]);const u=t||o&&((h=globalThis==null?void 0:globalThis.document)==null?void 0:h.body);return u?N2.createPortal(A.jsx(bs.div,{...r,ref:e}),u):null});X0.displayName=Z2;function eO(n,e){return M.useReducer((t,r)=>e[t][r]??t,n)}var Yd=n=>{const{present:e,children:t}=n,r=tO(e),o=typeof t=="function"?t({present:r.isPresent}):M.Children.only(t),a=xs(r.ref,nO(o));return typeof t=="function"||r.isPresent?M.cloneElement(o,{ref:a}):null};Yd.displayName="Presence";function tO(n){const[e,t]=M.useState(),r=M.useRef({}),o=M.useRef(n),a=M.useRef("none"),u=n?"mounted":"unmounted",[h,p]=eO(u,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return M.useEffect(()=>{const y=bc(r.current);a.current=h==="mounted"?y:"none"},[h]),wd(()=>{const y=r.current,_=o.current;if(_!==n){const T=a.current,O=bc(y);n?p("MOUNT"):O==="none"||(y==null?void 0:y.display)==="none"?p("UNMOUNT"):p(_&&T!==O?"ANIMATION_OUT":"UNMOUNT"),o.current=n}},[n,p]),wd(()=>{if(e){let y;const _=e.ownerDocument.defaultView??window,E=O=>{const V=bc(r.current).includes(O.animationName);if(O.target===e&&V&&(p("ANIMATION_END"),!o.current)){const U=e.style.animationFillMode;e.style.animationFillMode="forwards",y=_.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=U)})}},T=O=>{O.target===e&&(a.current=bc(r.current))};return e.addEventListener("animationstart",T),e.addEventListener("animationcancel",E),e.addEventListener("animationend",E),()=>{_.clearTimeout(y),e.removeEventListener("animationstart",T),e.removeEventListener("animationcancel",E),e.removeEventListener("animationend",E)}}else p("ANIMATION_END")},[e,p]),{isPresent:["mounted","unmountSuspended"].includes(h),ref:M.useCallback(y=>{y&&(r.current=getComputedStyle(y)),t(y)},[])}}function bc(n){return(n==null?void 0:n.animationName)||"none"}function nO(n){var r,o;let e=(r=Object.getOwnPropertyDescriptor(n.props,"ref"))==null?void 0:r.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?n.ref:(e=(o=Object.getOwnPropertyDescriptor(n,"ref"))==null?void 0:o.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?n.props.ref:n.props.ref||n.ref)}var Hf=0;function rO(){M.useEffect(()=>{const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",n[0]??uw()),document.body.insertAdjacentElement("beforeend",n[1]??uw()),Hf++,()=>{Hf===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),Hf--}},[])}function uw(){const n=document.createElement("span");return n.setAttribute("data-radix-focus-guard",""),n.tabIndex=0,n.style.outline="none",n.style.opacity="0",n.style.position="fixed",n.style.pointerEvents="none",n}var Hr=function(){return Hr=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Hr.apply(this,arguments)};function J0(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]]);return t}function sO(n,e,t){if(t||arguments.length===2)for(var r=0,o=e.length,a;r<o;r++)(a||!(r in e))&&(a||(a=Array.prototype.slice.call(e,0,r)),a[r]=e[r]);return n.concat(a||Array.prototype.slice.call(e))}var Qc="right-scroll-bar-position",Yc="width-before-scroll-bar",iO="with-scroll-bars-hidden",oO="--removed-body-scroll-bar-size";function Gf(n,e){return typeof n=="function"?n(e):n&&(n.current=e),n}function aO(n,e){var t=M.useState(function(){return{value:n,callback:e,facade:{get current(){return t.value},set current(r){var o=t.value;o!==r&&(t.value=r,t.callback(r,o))}}}})[0];return t.callback=e,t.facade}var lO=typeof window<"u"?M.useLayoutEffect:M.useEffect,cw=new WeakMap;function uO(n,e){var t=aO(null,function(r){return n.forEach(function(o){return Gf(o,r)})});return lO(function(){var r=cw.get(t);if(r){var o=new Set(r),a=new Set(n),u=t.current;o.forEach(function(h){a.has(h)||Gf(h,null)}),a.forEach(function(h){o.has(h)||Gf(h,u)})}cw.set(t,n)},[n]),t}function cO(n){return n}function dO(n,e){e===void 0&&(e=cO);var t=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return t.length?t[t.length-1]:n},useMedium:function(a){var u=e(a,r);return t.push(u),function(){t=t.filter(function(h){return h!==u})}},assignSyncMedium:function(a){for(r=!0;t.length;){var u=t;t=[],u.forEach(a)}t={push:function(h){return a(h)},filter:function(){return t}}},assignMedium:function(a){r=!0;var u=[];if(t.length){var h=t;t=[],h.forEach(a),u=t}var p=function(){var _=u;u=[],_.forEach(a)},y=function(){return Promise.resolve().then(p)};y(),t={push:function(_){u.push(_),y()},filter:function(_){return u=u.filter(_),t}}}};return o}function hO(n){n===void 0&&(n={});var e=dO(null);return e.options=Hr({async:!0,ssr:!1},n),e}var Z0=function(n){var e=n.sideCar,t=J0(n,["sideCar"]);if(!e)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=e.read();if(!r)throw new Error("Sidecar medium not found");return M.createElement(r,Hr({},t))};Z0.isSideCarExport=!0;function fO(n,e){return n.useMedium(e),Z0}var eI=hO(),Kf=function(){},Xd=M.forwardRef(function(n,e){var t=M.useRef(null),r=M.useState({onScrollCapture:Kf,onWheelCapture:Kf,onTouchMoveCapture:Kf}),o=r[0],a=r[1],u=n.forwardProps,h=n.children,p=n.className,y=n.removeScrollBar,_=n.enabled,E=n.shards,T=n.sideCar,O=n.noRelative,q=n.noIsolation,V=n.inert,U=n.allowPinchZoom,Z=n.as,te=Z===void 0?"div":Z,se=n.gapMode,ie=J0(n,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),ge=T,ue=uO([t,e]),R=Hr(Hr({},ie),o);return M.createElement(M.Fragment,null,_&&M.createElement(ge,{sideCar:eI,removeScrollBar:y,shards:E,noRelative:O,noIsolation:q,inert:V,setCallbacks:a,allowPinchZoom:!!U,lockRef:t,gapMode:se}),u?M.cloneElement(M.Children.only(h),Hr(Hr({},R),{ref:ue})):M.createElement(te,Hr({},R,{className:p,ref:ue}),h))});Xd.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Xd.classNames={fullWidth:Yc,zeroRight:Qc};var pO=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function mO(){if(!document)return null;var n=document.createElement("style");n.type="text/css";var e=pO();return e&&n.setAttribute("nonce",e),n}function gO(n,e){n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}function yO(n){var e=document.head||document.getElementsByTagName("head")[0];e.appendChild(n)}var vO=function(){var n=0,e=null;return{add:function(t){n==0&&(e=mO())&&(gO(e,t),yO(e)),n++},remove:function(){n--,!n&&e&&(e.parentNode&&e.parentNode.removeChild(e),e=null)}}},_O=function(){var n=vO();return function(e,t){M.useEffect(function(){return n.add(e),function(){n.remove()}},[e&&t])}},tI=function(){var n=_O(),e=function(t){var r=t.styles,o=t.dynamic;return n(r,o),null};return e},wO={left:0,top:0,right:0,gap:0},Qf=function(n){return parseInt(n||"",10)||0},EO=function(n){var e=window.getComputedStyle(document.body),t=e[n==="padding"?"paddingLeft":"marginLeft"],r=e[n==="padding"?"paddingTop":"marginTop"],o=e[n==="padding"?"paddingRight":"marginRight"];return[Qf(t),Qf(r),Qf(o)]},TO=function(n){if(n===void 0&&(n="margin"),typeof window>"u")return wO;var e=EO(n),t=document.documentElement.clientWidth,r=window.innerWidth;return{left:e[0],top:e[1],right:e[2],gap:Math.max(0,r-t+e[2]-e[0])}},IO=tI(),Pa="data-scroll-locked",SO=function(n,e,t,r){var o=n.left,a=n.top,u=n.right,h=n.gap;return t===void 0&&(t="margin"),`
  .`.concat(iO,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(h,"px ").concat(r,`;
  }
  body[`).concat(Pa,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([e&&"position: relative ".concat(r,";"),t==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(a,`px;
    padding-right: `).concat(u,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(h,"px ").concat(r,`;
    `),t==="padding"&&"padding-right: ".concat(h,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(Qc,` {
    right: `).concat(h,"px ").concat(r,`;
  }
  
  .`).concat(Yc,` {
    margin-right: `).concat(h,"px ").concat(r,`;
  }
  
  .`).concat(Qc," .").concat(Qc,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(Yc," .").concat(Yc,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(Pa,`] {
    `).concat(oO,": ").concat(h,`px;
  }
`)},dw=function(){var n=parseInt(document.body.getAttribute(Pa)||"0",10);return isFinite(n)?n:0},AO=function(){M.useEffect(function(){return document.body.setAttribute(Pa,(dw()+1).toString()),function(){var n=dw()-1;n<=0?document.body.removeAttribute(Pa):document.body.setAttribute(Pa,n.toString())}},[])},RO=function(n){var e=n.noRelative,t=n.noImportant,r=n.gapMode,o=r===void 0?"margin":r;AO();var a=M.useMemo(function(){return TO(o)},[o]);return M.createElement(IO,{styles:SO(a,!e,o,t?"":"!important")})},Cp=!1;if(typeof window<"u")try{var Nc=Object.defineProperty({},"passive",{get:function(){return Cp=!0,!0}});window.addEventListener("test",Nc,Nc),window.removeEventListener("test",Nc,Nc)}catch{Cp=!1}var fa=Cp?{passive:!1}:!1,CO=function(n){return n.tagName==="TEXTAREA"},nI=function(n,e){if(!(n instanceof Element))return!1;var t=window.getComputedStyle(n);return t[e]!=="hidden"&&!(t.overflowY===t.overflowX&&!CO(n)&&t[e]==="visible")},kO=function(n){return nI(n,"overflowY")},PO=function(n){return nI(n,"overflowX")},hw=function(n,e){var t=e.ownerDocument,r=e;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var o=rI(n,r);if(o){var a=sI(n,r),u=a[1],h=a[2];if(u>h)return!0}r=r.parentNode}while(r&&r!==t.body);return!1},xO=function(n){var e=n.scrollTop,t=n.scrollHeight,r=n.clientHeight;return[e,t,r]},bO=function(n){var e=n.scrollLeft,t=n.scrollWidth,r=n.clientWidth;return[e,t,r]},rI=function(n,e){return n==="v"?kO(e):PO(e)},sI=function(n,e){return n==="v"?xO(e):bO(e)},NO=function(n,e){return n==="h"&&e==="rtl"?-1:1},DO=function(n,e,t,r,o){var a=NO(n,window.getComputedStyle(e).direction),u=a*r,h=t.target,p=e.contains(h),y=!1,_=u>0,E=0,T=0;do{if(!h)break;var O=sI(n,h),q=O[0],V=O[1],U=O[2],Z=V-U-a*q;(q||Z)&&rI(n,h)&&(E+=Z,T+=q);var te=h.parentNode;h=te&&te.nodeType===Node.DOCUMENT_FRAGMENT_NODE?te.host:te}while(!p&&h!==document.body||p&&(e.contains(h)||e===h));return(_&&Math.abs(E)<1||!_&&Math.abs(T)<1)&&(y=!0),y},Dc=function(n){return"changedTouches"in n?[n.changedTouches[0].clientX,n.changedTouches[0].clientY]:[0,0]},fw=function(n){return[n.deltaX,n.deltaY]},pw=function(n){return n&&"current"in n?n.current:n},OO=function(n,e){return n[0]===e[0]&&n[1]===e[1]},VO=function(n){return`
  .block-interactivity-`.concat(n,` {pointer-events: none;}
  .allow-interactivity-`).concat(n,` {pointer-events: all;}
`)},MO=0,pa=[];function LO(n){var e=M.useRef([]),t=M.useRef([0,0]),r=M.useRef(),o=M.useState(MO++)[0],a=M.useState(tI)[0],u=M.useRef(n);M.useEffect(function(){u.current=n},[n]),M.useEffect(function(){if(n.inert){document.body.classList.add("block-interactivity-".concat(o));var V=sO([n.lockRef.current],(n.shards||[]).map(pw),!0).filter(Boolean);return V.forEach(function(U){return U.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),V.forEach(function(U){return U.classList.remove("allow-interactivity-".concat(o))})}}},[n.inert,n.lockRef.current,n.shards]);var h=M.useCallback(function(V,U){if("touches"in V&&V.touches.length===2||V.type==="wheel"&&V.ctrlKey)return!u.current.allowPinchZoom;var Z=Dc(V),te=t.current,se="deltaX"in V?V.deltaX:te[0]-Z[0],ie="deltaY"in V?V.deltaY:te[1]-Z[1],ge,ue=V.target,R=Math.abs(se)>Math.abs(ie)?"h":"v";if("touches"in V&&R==="h"&&ue.type==="range")return!1;var I=window.getSelection(),C=I&&I.anchorNode,N=C?C===ue||C.contains(ue):!1;if(N)return!1;var b=hw(R,ue);if(!b)return!0;if(b?ge=R:(ge=R==="v"?"h":"v",b=hw(R,ue)),!b)return!1;if(!r.current&&"changedTouches"in V&&(se||ie)&&(r.current=ge),!ge)return!0;var F=r.current||ge;return DO(F,U,V,F==="h"?se:ie)},[]),p=M.useCallback(function(V){var U=V;if(!(!pa.length||pa[pa.length-1]!==a)){var Z="deltaY"in U?fw(U):Dc(U),te=e.current.filter(function(ge){return ge.name===U.type&&(ge.target===U.target||U.target===ge.shadowParent)&&OO(ge.delta,Z)})[0];if(te&&te.should){U.cancelable&&U.preventDefault();return}if(!te){var se=(u.current.shards||[]).map(pw).filter(Boolean).filter(function(ge){return ge.contains(U.target)}),ie=se.length>0?h(U,se[0]):!u.current.noIsolation;ie&&U.cancelable&&U.preventDefault()}}},[]),y=M.useCallback(function(V,U,Z,te){var se={name:V,delta:U,target:Z,should:te,shadowParent:FO(Z)};e.current.push(se),setTimeout(function(){e.current=e.current.filter(function(ie){return ie!==se})},1)},[]),_=M.useCallback(function(V){t.current=Dc(V),r.current=void 0},[]),E=M.useCallback(function(V){y(V.type,fw(V),V.target,h(V,n.lockRef.current))},[]),T=M.useCallback(function(V){y(V.type,Dc(V),V.target,h(V,n.lockRef.current))},[]);M.useEffect(function(){return pa.push(a),n.setCallbacks({onScrollCapture:E,onWheelCapture:E,onTouchMoveCapture:T}),document.addEventListener("wheel",p,fa),document.addEventListener("touchmove",p,fa),document.addEventListener("touchstart",_,fa),function(){pa=pa.filter(function(V){return V!==a}),document.removeEventListener("wheel",p,fa),document.removeEventListener("touchmove",p,fa),document.removeEventListener("touchstart",_,fa)}},[]);var O=n.removeScrollBar,q=n.inert;return M.createElement(M.Fragment,null,q?M.createElement(a,{styles:VO(o)}):null,O?M.createElement(RO,{noRelative:n.noRelative,gapMode:n.gapMode}):null)}function FO(n){for(var e=null;n!==null;)n instanceof ShadowRoot&&(e=n.host,n=n.host),n=n.parentNode;return e}const UO=fO(eI,LO);var iI=M.forwardRef(function(n,e){return M.createElement(Xd,Hr({},n,{ref:e,sideCar:UO}))});iI.classNames=Xd.classNames;var jO=function(n){if(typeof document>"u")return null;var e=Array.isArray(n)?n[0]:n;return e.ownerDocument.body},ma=new WeakMap,Oc=new WeakMap,Vc={},Yf=0,oI=function(n){return n&&(n.host||oI(n.parentNode))},zO=function(n,e){return e.map(function(t){if(n.contains(t))return t;var r=oI(t);return r&&n.contains(r)?r:(console.error("aria-hidden",t,"in not contained inside",n,". Doing nothing"),null)}).filter(function(t){return!!t})},BO=function(n,e,t,r){var o=zO(e,Array.isArray(n)?n:[n]);Vc[t]||(Vc[t]=new WeakMap);var a=Vc[t],u=[],h=new Set,p=new Set(o),y=function(E){!E||h.has(E)||(h.add(E),y(E.parentNode))};o.forEach(y);var _=function(E){!E||p.has(E)||Array.prototype.forEach.call(E.children,function(T){if(h.has(T))_(T);else try{var O=T.getAttribute(r),q=O!==null&&O!=="false",V=(ma.get(T)||0)+1,U=(a.get(T)||0)+1;ma.set(T,V),a.set(T,U),u.push(T),V===1&&q&&Oc.set(T,!0),U===1&&T.setAttribute(t,"true"),q||T.setAttribute(r,"true")}catch(Z){console.error("aria-hidden: cannot operate on ",T,Z)}})};return _(e),h.clear(),Yf++,function(){u.forEach(function(E){var T=ma.get(E)-1,O=a.get(E)-1;ma.set(E,T),a.set(E,O),T||(Oc.has(E)||E.removeAttribute(r),Oc.delete(E)),O||E.removeAttribute(t)}),Yf--,Yf||(ma=new WeakMap,ma=new WeakMap,Oc=new WeakMap,Vc={})}},$O=function(n,e,t){t===void 0&&(t="data-aria-hidden");var r=Array.from(Array.isArray(n)?n:[n]),o=jO(n);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live], script"))),BO(r,o,t,"aria-hidden")):function(){return null}},Wm="Dialog",[aI,lI]=B0(Wm),[WO,_r]=aI(Wm),uI=n=>{const{__scopeDialog:e,children:t,open:r,defaultOpen:o,onOpenChange:a,modal:u=!0}=n,h=M.useRef(null),p=M.useRef(null),[y=!1,_]=x2({prop:r,defaultProp:o,onChange:a});return A.jsx(WO,{scope:e,triggerRef:h,contentRef:p,contentId:$f(),titleId:$f(),descriptionId:$f(),open:y,onOpenChange:_,onOpenToggle:M.useCallback(()=>_(E=>!E),[_]),modal:u,children:t})};uI.displayName=Wm;var cI="DialogTrigger",dI=M.forwardRef((n,e)=>{const{__scopeDialog:t,...r}=n,o=_r(cI,t),a=xs(e,o.triggerRef);return A.jsx(bs.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":Gm(o.open),...r,ref:a,onClick:Is(n.onClick,o.onOpenToggle)})});dI.displayName=cI;var qm="DialogPortal",[qO,hI]=aI(qm,{forceMount:void 0}),fI=n=>{const{__scopeDialog:e,forceMount:t,children:r,container:o}=n,a=_r(qm,e);return A.jsx(qO,{scope:e,forceMount:t,children:M.Children.map(r,u=>A.jsx(Yd,{present:t||a.open,children:A.jsx(X0,{asChild:!0,container:o,children:u})}))})};fI.displayName=qm;var Ed="DialogOverlay",pI=M.forwardRef((n,e)=>{const t=hI(Ed,n.__scopeDialog),{forceMount:r=t.forceMount,...o}=n,a=_r(Ed,n.__scopeDialog);return a.modal?A.jsx(Yd,{present:r||a.open,children:A.jsx(HO,{...o,ref:e})}):null});pI.displayName=Ed;var HO=M.forwardRef((n,e)=>{const{__scopeDialog:t,...r}=n,o=_r(Ed,t);return A.jsx(iI,{as:$m,allowPinchZoom:!0,shards:[o.contentRef],children:A.jsx(bs.div,{"data-state":Gm(o.open),...r,ref:e,style:{pointerEvents:"auto",...r.style}})})}),Ao="DialogContent",mI=M.forwardRef((n,e)=>{const t=hI(Ao,n.__scopeDialog),{forceMount:r=t.forceMount,...o}=n,a=_r(Ao,n.__scopeDialog);return A.jsx(Yd,{present:r||a.open,children:a.modal?A.jsx(GO,{...o,ref:e}):A.jsx(KO,{...o,ref:e})})});mI.displayName=Ao;var GO=M.forwardRef((n,e)=>{const t=_r(Ao,n.__scopeDialog),r=M.useRef(null),o=xs(e,t.contentRef,r);return M.useEffect(()=>{const a=r.current;if(a)return $O(a)},[]),A.jsx(gI,{...n,ref:o,trapFocus:t.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:Is(n.onCloseAutoFocus,a=>{var u;a.preventDefault(),(u=t.triggerRef.current)==null||u.focus()}),onPointerDownOutside:Is(n.onPointerDownOutside,a=>{const u=a.detail.originalEvent,h=u.button===0&&u.ctrlKey===!0;(u.button===2||h)&&a.preventDefault()}),onFocusOutside:Is(n.onFocusOutside,a=>a.preventDefault())})}),KO=M.forwardRef((n,e)=>{const t=_r(Ao,n.__scopeDialog),r=M.useRef(!1),o=M.useRef(!1);return A.jsx(gI,{...n,ref:e,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{var u,h;(u=n.onCloseAutoFocus)==null||u.call(n,a),a.defaultPrevented||(r.current||(h=t.triggerRef.current)==null||h.focus(),a.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:a=>{var p,y;(p=n.onInteractOutside)==null||p.call(n,a),a.defaultPrevented||(r.current=!0,a.detail.originalEvent.type==="pointerdown"&&(o.current=!0));const u=a.target;((y=t.triggerRef.current)==null?void 0:y.contains(u))&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&o.current&&a.preventDefault()}})}),gI=M.forwardRef((n,e)=>{const{__scopeDialog:t,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:a,...u}=n,h=_r(Ao,t),p=M.useRef(null),y=xs(e,p);return rO(),A.jsxs(A.Fragment,{children:[A.jsx(Q0,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:a,children:A.jsx(G0,{role:"dialog",id:h.contentId,"aria-describedby":h.descriptionId,"aria-labelledby":h.titleId,"data-state":Gm(h.open),...u,ref:y,onDismiss:()=>h.onOpenChange(!1)})}),A.jsxs(A.Fragment,{children:[A.jsx(YO,{titleId:h.titleId}),A.jsx(JO,{contentRef:p,descriptionId:h.descriptionId})]})]})}),Hm="DialogTitle",yI=M.forwardRef((n,e)=>{const{__scopeDialog:t,...r}=n,o=_r(Hm,t);return A.jsx(bs.h2,{id:o.titleId,...r,ref:e})});yI.displayName=Hm;var vI="DialogDescription",_I=M.forwardRef((n,e)=>{const{__scopeDialog:t,...r}=n,o=_r(vI,t);return A.jsx(bs.p,{id:o.descriptionId,...r,ref:e})});_I.displayName=vI;var wI="DialogClose",EI=M.forwardRef((n,e)=>{const{__scopeDialog:t,...r}=n,o=_r(wI,t);return A.jsx(bs.button,{type:"button",...r,ref:e,onClick:Is(n.onClick,()=>o.onOpenChange(!1))})});EI.displayName=wI;function Gm(n){return n?"open":"closed"}var TI="DialogTitleWarning",[QO,II]=R2(TI,{contentName:Ao,titleName:Hm,docsSlug:"dialog"}),YO=({titleId:n})=>{const e=II(TI),t=`\`${e.contentName}\` requires a \`${e.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${e.docsSlug}`;return M.useEffect(()=>{n&&(document.getElementById(n)||console.error(t))},[t,n]),null},XO="DialogDescriptionWarning",JO=({contentRef:n,descriptionId:e})=>{const r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${II(XO).contentName}}.`;return M.useEffect(()=>{var a;const o=(a=n.current)==null?void 0:a.getAttribute("aria-describedby");e&&o&&(document.getElementById(e)||console.warn(r))},[r,n,e]),null},ZO=uI,eV=dI,tV=fI,nV=pI,rV=mI,sV=yI,iV=_I,SI=EI,AI="AlertDialog",[oV]=B0(AI,[lI]),Ns=lI(),RI=n=>{const{__scopeAlertDialog:e,...t}=n,r=Ns(e);return A.jsx(ZO,{...r,...t,modal:!0})};RI.displayName=AI;var aV="AlertDialogTrigger",lV=M.forwardRef((n,e)=>{const{__scopeAlertDialog:t,...r}=n,o=Ns(t);return A.jsx(eV,{...o,...r,ref:e})});lV.displayName=aV;var uV="AlertDialogPortal",CI=n=>{const{__scopeAlertDialog:e,...t}=n,r=Ns(e);return A.jsx(tV,{...r,...t})};CI.displayName=uV;var cV="AlertDialogOverlay",kI=M.forwardRef((n,e)=>{const{__scopeAlertDialog:t,...r}=n,o=Ns(t);return A.jsx(nV,{...o,...r,ref:e})});kI.displayName=cV;var xa="AlertDialogContent",[dV,hV]=oV(xa),PI=M.forwardRef((n,e)=>{const{__scopeAlertDialog:t,children:r,...o}=n,a=Ns(t),u=M.useRef(null),h=xs(e,u),p=M.useRef(null);return A.jsx(QO,{contentName:xa,titleName:xI,docsSlug:"alert-dialog",children:A.jsx(dV,{scope:t,cancelRef:p,children:A.jsxs(rV,{role:"alertdialog",...a,...o,ref:h,onOpenAutoFocus:Is(o.onOpenAutoFocus,y=>{var _;y.preventDefault(),(_=p.current)==null||_.focus({preventScroll:!0})}),onPointerDownOutside:y=>y.preventDefault(),onInteractOutside:y=>y.preventDefault(),children:[A.jsx(q0,{children:r}),A.jsx(pV,{contentRef:u})]})})})});PI.displayName=xa;var xI="AlertDialogTitle",bI=M.forwardRef((n,e)=>{const{__scopeAlertDialog:t,...r}=n,o=Ns(t);return A.jsx(sV,{...o,...r,ref:e})});bI.displayName=xI;var NI="AlertDialogDescription",DI=M.forwardRef((n,e)=>{const{__scopeAlertDialog:t,...r}=n,o=Ns(t);return A.jsx(iV,{...o,...r,ref:e})});DI.displayName=NI;var fV="AlertDialogAction",OI=M.forwardRef((n,e)=>{const{__scopeAlertDialog:t,...r}=n,o=Ns(t);return A.jsx(SI,{...o,...r,ref:e})});OI.displayName=fV;var VI="AlertDialogCancel",MI=M.forwardRef((n,e)=>{const{__scopeAlertDialog:t,...r}=n,{cancelRef:o}=hV(VI,t),a=Ns(t),u=xs(e,o);return A.jsx(SI,{...a,...r,ref:u})});MI.displayName=VI;var pV=({contentRef:n})=>{const e=`\`${xa}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${xa}\` by passing a \`${NI}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${xa}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return M.useEffect(()=>{var r;document.getElementById((r=n.current)==null?void 0:r.getAttribute("aria-describedby"))||console.warn(e)},[e,n]),null},mV=RI,gV=CI,yV=kI,vV=PI,_V=OI,wV=MI,EV=bI,TV=DI;function LI(n){var e,t,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var o=n.length;for(e=0;e<o;e++)n[e]&&(t=LI(n[e]))&&(r&&(r+=" "),r+=t)}else for(t in n)n[t]&&(r&&(r+=" "),r+=t);return r}function FI(){for(var n,e,t=0,r="",o=arguments.length;t<o;t++)(n=arguments[t])&&(e=LI(n))&&(r&&(r+=" "),r+=e);return r}const Km="-",IV=n=>{const e=AV(n),{conflictingClassGroups:t,conflictingClassGroupModifiers:r}=n;return{getClassGroupId:u=>{const h=u.split(Km);return h[0]===""&&h.length!==1&&h.shift(),UI(h,e)||SV(u)},getConflictingClassGroupIds:(u,h)=>{const p=t[u]||[];return h&&r[u]?[...p,...r[u]]:p}}},UI=(n,e)=>{var u;if(n.length===0)return e.classGroupId;const t=n[0],r=e.nextPart.get(t),o=r?UI(n.slice(1),r):void 0;if(o)return o;if(e.validators.length===0)return;const a=n.join(Km);return(u=e.validators.find(({validator:h})=>h(a)))==null?void 0:u.classGroupId},mw=/^\[(.+)\]$/,SV=n=>{if(mw.test(n)){const e=mw.exec(n)[1],t=e==null?void 0:e.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}},AV=n=>{const{theme:e,classGroups:t}=n,r={nextPart:new Map,validators:[]};for(const o in t)kp(t[o],r,o,e);return r},kp=(n,e,t,r)=>{n.forEach(o=>{if(typeof o=="string"){const a=o===""?e:gw(e,o);a.classGroupId=t;return}if(typeof o=="function"){if(RV(o)){kp(o(r),e,t,r);return}e.validators.push({validator:o,classGroupId:t});return}Object.entries(o).forEach(([a,u])=>{kp(u,gw(e,a),t,r)})})},gw=(n,e)=>{let t=n;return e.split(Km).forEach(r=>{t.nextPart.has(r)||t.nextPart.set(r,{nextPart:new Map,validators:[]}),t=t.nextPart.get(r)}),t},RV=n=>n.isThemeGetter,CV=n=>{if(n<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,r=new Map;const o=(a,u)=>{t.set(a,u),e++,e>n&&(e=0,r=t,t=new Map)};return{get(a){let u=t.get(a);if(u!==void 0)return u;if((u=r.get(a))!==void 0)return o(a,u),u},set(a,u){t.has(a)?t.set(a,u):o(a,u)}}},Pp="!",xp=":",kV=xp.length,PV=n=>{const{prefix:e,experimentalParseClassName:t}=n;let r=o=>{const a=[];let u=0,h=0,p=0,y;for(let q=0;q<o.length;q++){let V=o[q];if(u===0&&h===0){if(V===xp){a.push(o.slice(p,q)),p=q+kV;continue}if(V==="/"){y=q;continue}}V==="["?u++:V==="]"?u--:V==="("?h++:V===")"&&h--}const _=a.length===0?o:o.substring(p),E=xV(_),T=E!==_,O=y&&y>p?y-p:void 0;return{modifiers:a,hasImportantModifier:T,baseClassName:E,maybePostfixModifierPosition:O}};if(e){const o=e+xp,a=r;r=u=>u.startsWith(o)?a(u.substring(o.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:u,maybePostfixModifierPosition:void 0}}if(t){const o=r;r=a=>t({className:a,parseClassName:o})}return r},xV=n=>n.endsWith(Pp)?n.substring(0,n.length-1):n.startsWith(Pp)?n.substring(1):n,bV=n=>{const e=Object.fromEntries(n.orderSensitiveModifiers.map(r=>[r,!0]));return r=>{if(r.length<=1)return r;const o=[];let a=[];return r.forEach(u=>{u[0]==="["||e[u]?(o.push(...a.sort(),u),a=[]):a.push(u)}),o.push(...a.sort()),o}},NV=n=>({cache:CV(n.cacheSize),parseClassName:PV(n),sortModifiers:bV(n),...IV(n)}),DV=/\s+/,OV=(n,e)=>{const{parseClassName:t,getClassGroupId:r,getConflictingClassGroupIds:o,sortModifiers:a}=e,u=[],h=n.trim().split(DV);let p="";for(let y=h.length-1;y>=0;y-=1){const _=h[y],{isExternal:E,modifiers:T,hasImportantModifier:O,baseClassName:q,maybePostfixModifierPosition:V}=t(_);if(E){p=_+(p.length>0?" "+p:p);continue}let U=!!V,Z=r(U?q.substring(0,V):q);if(!Z){if(!U){p=_+(p.length>0?" "+p:p);continue}if(Z=r(q),!Z){p=_+(p.length>0?" "+p:p);continue}U=!1}const te=a(T).join(":"),se=O?te+Pp:te,ie=se+Z;if(u.includes(ie))continue;u.push(ie);const ge=o(Z,U);for(let ue=0;ue<ge.length;++ue){const R=ge[ue];u.push(se+R)}p=_+(p.length>0?" "+p:p)}return p};function VV(){let n=0,e,t,r="";for(;n<arguments.length;)(e=arguments[n++])&&(t=jI(e))&&(r&&(r+=" "),r+=t);return r}const jI=n=>{if(typeof n=="string")return n;let e,t="";for(let r=0;r<n.length;r++)n[r]&&(e=jI(n[r]))&&(t&&(t+=" "),t+=e);return t};function MV(n,...e){let t,r,o,a=u;function u(p){const y=e.reduce((_,E)=>E(_),n());return t=NV(y),r=t.cache.get,o=t.cache.set,a=h,h(p)}function h(p){const y=r(p);if(y)return y;const _=OV(p,t);return o(p,_),_}return function(){return a(VV.apply(null,arguments))}}const Mt=n=>{const e=t=>t[n]||[];return e.isThemeGetter=!0,e},zI=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,BI=/^\((?:(\w[\w-]*):)?(.+)\)$/i,LV=/^\d+\/\d+$/,FV=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,UV=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,jV=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,zV=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,BV=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,ga=n=>LV.test(n),Ve=n=>!!n&&!Number.isNaN(Number(n)),ai=n=>!!n&&Number.isInteger(Number(n)),Xf=n=>n.endsWith("%")&&Ve(n.slice(0,-1)),ws=n=>FV.test(n),$V=()=>!0,WV=n=>UV.test(n)&&!jV.test(n),$I=()=>!1,qV=n=>zV.test(n),HV=n=>BV.test(n),GV=n=>!pe(n)&&!me(n),KV=n=>qa(n,HI,$I),pe=n=>zI.test(n),co=n=>qa(n,GI,WV),Jf=n=>qa(n,ZV,Ve),yw=n=>qa(n,WI,$I),QV=n=>qa(n,qI,HV),Mc=n=>qa(n,KI,qV),me=n=>BI.test(n),Ll=n=>Ha(n,GI),YV=n=>Ha(n,eM),vw=n=>Ha(n,WI),XV=n=>Ha(n,HI),JV=n=>Ha(n,qI),Lc=n=>Ha(n,KI,!0),qa=(n,e,t)=>{const r=zI.exec(n);return r?r[1]?e(r[1]):t(r[2]):!1},Ha=(n,e,t=!1)=>{const r=BI.exec(n);return r?r[1]?e(r[1]):t:!1},WI=n=>n==="position"||n==="percentage",qI=n=>n==="image"||n==="url",HI=n=>n==="length"||n==="size"||n==="bg-size",GI=n=>n==="length",ZV=n=>n==="number",eM=n=>n==="family-name",KI=n=>n==="shadow",tM=()=>{const n=Mt("color"),e=Mt("font"),t=Mt("text"),r=Mt("font-weight"),o=Mt("tracking"),a=Mt("leading"),u=Mt("breakpoint"),h=Mt("container"),p=Mt("spacing"),y=Mt("radius"),_=Mt("shadow"),E=Mt("inset-shadow"),T=Mt("text-shadow"),O=Mt("drop-shadow"),q=Mt("blur"),V=Mt("perspective"),U=Mt("aspect"),Z=Mt("ease"),te=Mt("animate"),se=()=>["auto","avoid","all","avoid-page","page","left","right","column"],ie=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],ge=()=>[...ie(),me,pe],ue=()=>["auto","hidden","clip","visible","scroll"],R=()=>["auto","contain","none"],I=()=>[me,pe,p],C=()=>[ga,"full","auto",...I()],N=()=>[ai,"none","subgrid",me,pe],b=()=>["auto",{span:["full",ai,me,pe]},ai,me,pe],F=()=>[ai,"auto",me,pe],P=()=>["auto","min","max","fr",me,pe],Ge=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],et=()=>["start","end","center","stretch","center-safe","end-safe"],Xe=()=>["auto",...I()],ze=()=>[ga,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...I()],G=()=>[n,me,pe],ye=()=>[...ie(),vw,yw,{position:[me,pe]}],ae=()=>["no-repeat",{repeat:["","x","y","space","round"]}],L=()=>["auto","cover","contain",XV,KV,{size:[me,pe]}],Q=()=>[Xf,Ll,co],he=()=>["","none","full",y,me,pe],we=()=>["",Ve,Ll,co],Pe=()=>["solid","dashed","dotted","double"],De=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Te=()=>[Ve,Xf,vw,yw],Oe=()=>["","none",q,me,pe],Le=()=>["none",Ve,me,pe],ht=()=>["none",Ve,me,pe],zn=()=>[Ve,me,pe],fn=()=>[ga,"full",...I()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[ws],breakpoint:[ws],color:[$V],container:[ws],"drop-shadow":[ws],ease:["in","out","in-out"],font:[GV],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[ws],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[ws],shadow:[ws],spacing:["px",Ve],text:[ws],"text-shadow":[ws],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",ga,pe,me,U]}],container:["container"],columns:[{columns:[Ve,pe,me,h]}],"break-after":[{"break-after":se()}],"break-before":[{"break-before":se()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:ge()}],overflow:[{overflow:ue()}],"overflow-x":[{"overflow-x":ue()}],"overflow-y":[{"overflow-y":ue()}],overscroll:[{overscroll:R()}],"overscroll-x":[{"overscroll-x":R()}],"overscroll-y":[{"overscroll-y":R()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:C()}],"inset-x":[{"inset-x":C()}],"inset-y":[{"inset-y":C()}],start:[{start:C()}],end:[{end:C()}],top:[{top:C()}],right:[{right:C()}],bottom:[{bottom:C()}],left:[{left:C()}],visibility:["visible","invisible","collapse"],z:[{z:[ai,"auto",me,pe]}],basis:[{basis:[ga,"full","auto",h,...I()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Ve,ga,"auto","initial","none",pe]}],grow:[{grow:["",Ve,me,pe]}],shrink:[{shrink:["",Ve,me,pe]}],order:[{order:[ai,"first","last","none",me,pe]}],"grid-cols":[{"grid-cols":N()}],"col-start-end":[{col:b()}],"col-start":[{"col-start":F()}],"col-end":[{"col-end":F()}],"grid-rows":[{"grid-rows":N()}],"row-start-end":[{row:b()}],"row-start":[{"row-start":F()}],"row-end":[{"row-end":F()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":P()}],"auto-rows":[{"auto-rows":P()}],gap:[{gap:I()}],"gap-x":[{"gap-x":I()}],"gap-y":[{"gap-y":I()}],"justify-content":[{justify:[...Ge(),"normal"]}],"justify-items":[{"justify-items":[...et(),"normal"]}],"justify-self":[{"justify-self":["auto",...et()]}],"align-content":[{content:["normal",...Ge()]}],"align-items":[{items:[...et(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...et(),{baseline:["","last"]}]}],"place-content":[{"place-content":Ge()}],"place-items":[{"place-items":[...et(),"baseline"]}],"place-self":[{"place-self":["auto",...et()]}],p:[{p:I()}],px:[{px:I()}],py:[{py:I()}],ps:[{ps:I()}],pe:[{pe:I()}],pt:[{pt:I()}],pr:[{pr:I()}],pb:[{pb:I()}],pl:[{pl:I()}],m:[{m:Xe()}],mx:[{mx:Xe()}],my:[{my:Xe()}],ms:[{ms:Xe()}],me:[{me:Xe()}],mt:[{mt:Xe()}],mr:[{mr:Xe()}],mb:[{mb:Xe()}],ml:[{ml:Xe()}],"space-x":[{"space-x":I()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":I()}],"space-y-reverse":["space-y-reverse"],size:[{size:ze()}],w:[{w:[h,"screen",...ze()]}],"min-w":[{"min-w":[h,"screen","none",...ze()]}],"max-w":[{"max-w":[h,"screen","none","prose",{screen:[u]},...ze()]}],h:[{h:["screen",...ze()]}],"min-h":[{"min-h":["screen","none",...ze()]}],"max-h":[{"max-h":["screen",...ze()]}],"font-size":[{text:["base",t,Ll,co]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,me,Jf]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Xf,pe]}],"font-family":[{font:[YV,pe,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[o,me,pe]}],"line-clamp":[{"line-clamp":[Ve,"none",me,Jf]}],leading:[{leading:[a,...I()]}],"list-image":[{"list-image":["none",me,pe]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",me,pe]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:G()}],"text-color":[{text:G()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Pe(),"wavy"]}],"text-decoration-thickness":[{decoration:[Ve,"from-font","auto",me,co]}],"text-decoration-color":[{decoration:G()}],"underline-offset":[{"underline-offset":[Ve,"auto",me,pe]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:I()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",me,pe]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",me,pe]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:ye()}],"bg-repeat":[{bg:ae()}],"bg-size":[{bg:L()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},ai,me,pe],radial:["",me,pe],conic:[ai,me,pe]},JV,QV]}],"bg-color":[{bg:G()}],"gradient-from-pos":[{from:Q()}],"gradient-via-pos":[{via:Q()}],"gradient-to-pos":[{to:Q()}],"gradient-from":[{from:G()}],"gradient-via":[{via:G()}],"gradient-to":[{to:G()}],rounded:[{rounded:he()}],"rounded-s":[{"rounded-s":he()}],"rounded-e":[{"rounded-e":he()}],"rounded-t":[{"rounded-t":he()}],"rounded-r":[{"rounded-r":he()}],"rounded-b":[{"rounded-b":he()}],"rounded-l":[{"rounded-l":he()}],"rounded-ss":[{"rounded-ss":he()}],"rounded-se":[{"rounded-se":he()}],"rounded-ee":[{"rounded-ee":he()}],"rounded-es":[{"rounded-es":he()}],"rounded-tl":[{"rounded-tl":he()}],"rounded-tr":[{"rounded-tr":he()}],"rounded-br":[{"rounded-br":he()}],"rounded-bl":[{"rounded-bl":he()}],"border-w":[{border:we()}],"border-w-x":[{"border-x":we()}],"border-w-y":[{"border-y":we()}],"border-w-s":[{"border-s":we()}],"border-w-e":[{"border-e":we()}],"border-w-t":[{"border-t":we()}],"border-w-r":[{"border-r":we()}],"border-w-b":[{"border-b":we()}],"border-w-l":[{"border-l":we()}],"divide-x":[{"divide-x":we()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":we()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...Pe(),"hidden","none"]}],"divide-style":[{divide:[...Pe(),"hidden","none"]}],"border-color":[{border:G()}],"border-color-x":[{"border-x":G()}],"border-color-y":[{"border-y":G()}],"border-color-s":[{"border-s":G()}],"border-color-e":[{"border-e":G()}],"border-color-t":[{"border-t":G()}],"border-color-r":[{"border-r":G()}],"border-color-b":[{"border-b":G()}],"border-color-l":[{"border-l":G()}],"divide-color":[{divide:G()}],"outline-style":[{outline:[...Pe(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Ve,me,pe]}],"outline-w":[{outline:["",Ve,Ll,co]}],"outline-color":[{outline:G()}],shadow:[{shadow:["","none",_,Lc,Mc]}],"shadow-color":[{shadow:G()}],"inset-shadow":[{"inset-shadow":["none",E,Lc,Mc]}],"inset-shadow-color":[{"inset-shadow":G()}],"ring-w":[{ring:we()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:G()}],"ring-offset-w":[{"ring-offset":[Ve,co]}],"ring-offset-color":[{"ring-offset":G()}],"inset-ring-w":[{"inset-ring":we()}],"inset-ring-color":[{"inset-ring":G()}],"text-shadow":[{"text-shadow":["none",T,Lc,Mc]}],"text-shadow-color":[{"text-shadow":G()}],opacity:[{opacity:[Ve,me,pe]}],"mix-blend":[{"mix-blend":[...De(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":De()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Ve]}],"mask-image-linear-from-pos":[{"mask-linear-from":Te()}],"mask-image-linear-to-pos":[{"mask-linear-to":Te()}],"mask-image-linear-from-color":[{"mask-linear-from":G()}],"mask-image-linear-to-color":[{"mask-linear-to":G()}],"mask-image-t-from-pos":[{"mask-t-from":Te()}],"mask-image-t-to-pos":[{"mask-t-to":Te()}],"mask-image-t-from-color":[{"mask-t-from":G()}],"mask-image-t-to-color":[{"mask-t-to":G()}],"mask-image-r-from-pos":[{"mask-r-from":Te()}],"mask-image-r-to-pos":[{"mask-r-to":Te()}],"mask-image-r-from-color":[{"mask-r-from":G()}],"mask-image-r-to-color":[{"mask-r-to":G()}],"mask-image-b-from-pos":[{"mask-b-from":Te()}],"mask-image-b-to-pos":[{"mask-b-to":Te()}],"mask-image-b-from-color":[{"mask-b-from":G()}],"mask-image-b-to-color":[{"mask-b-to":G()}],"mask-image-l-from-pos":[{"mask-l-from":Te()}],"mask-image-l-to-pos":[{"mask-l-to":Te()}],"mask-image-l-from-color":[{"mask-l-from":G()}],"mask-image-l-to-color":[{"mask-l-to":G()}],"mask-image-x-from-pos":[{"mask-x-from":Te()}],"mask-image-x-to-pos":[{"mask-x-to":Te()}],"mask-image-x-from-color":[{"mask-x-from":G()}],"mask-image-x-to-color":[{"mask-x-to":G()}],"mask-image-y-from-pos":[{"mask-y-from":Te()}],"mask-image-y-to-pos":[{"mask-y-to":Te()}],"mask-image-y-from-color":[{"mask-y-from":G()}],"mask-image-y-to-color":[{"mask-y-to":G()}],"mask-image-radial":[{"mask-radial":[me,pe]}],"mask-image-radial-from-pos":[{"mask-radial-from":Te()}],"mask-image-radial-to-pos":[{"mask-radial-to":Te()}],"mask-image-radial-from-color":[{"mask-radial-from":G()}],"mask-image-radial-to-color":[{"mask-radial-to":G()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":ie()}],"mask-image-conic-pos":[{"mask-conic":[Ve]}],"mask-image-conic-from-pos":[{"mask-conic-from":Te()}],"mask-image-conic-to-pos":[{"mask-conic-to":Te()}],"mask-image-conic-from-color":[{"mask-conic-from":G()}],"mask-image-conic-to-color":[{"mask-conic-to":G()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:ye()}],"mask-repeat":[{mask:ae()}],"mask-size":[{mask:L()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",me,pe]}],filter:[{filter:["","none",me,pe]}],blur:[{blur:Oe()}],brightness:[{brightness:[Ve,me,pe]}],contrast:[{contrast:[Ve,me,pe]}],"drop-shadow":[{"drop-shadow":["","none",O,Lc,Mc]}],"drop-shadow-color":[{"drop-shadow":G()}],grayscale:[{grayscale:["",Ve,me,pe]}],"hue-rotate":[{"hue-rotate":[Ve,me,pe]}],invert:[{invert:["",Ve,me,pe]}],saturate:[{saturate:[Ve,me,pe]}],sepia:[{sepia:["",Ve,me,pe]}],"backdrop-filter":[{"backdrop-filter":["","none",me,pe]}],"backdrop-blur":[{"backdrop-blur":Oe()}],"backdrop-brightness":[{"backdrop-brightness":[Ve,me,pe]}],"backdrop-contrast":[{"backdrop-contrast":[Ve,me,pe]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Ve,me,pe]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Ve,me,pe]}],"backdrop-invert":[{"backdrop-invert":["",Ve,me,pe]}],"backdrop-opacity":[{"backdrop-opacity":[Ve,me,pe]}],"backdrop-saturate":[{"backdrop-saturate":[Ve,me,pe]}],"backdrop-sepia":[{"backdrop-sepia":["",Ve,me,pe]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":I()}],"border-spacing-x":[{"border-spacing-x":I()}],"border-spacing-y":[{"border-spacing-y":I()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",me,pe]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Ve,"initial",me,pe]}],ease:[{ease:["linear","initial",Z,me,pe]}],delay:[{delay:[Ve,me,pe]}],animate:[{animate:["none",te,me,pe]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[V,me,pe]}],"perspective-origin":[{"perspective-origin":ge()}],rotate:[{rotate:Le()}],"rotate-x":[{"rotate-x":Le()}],"rotate-y":[{"rotate-y":Le()}],"rotate-z":[{"rotate-z":Le()}],scale:[{scale:ht()}],"scale-x":[{"scale-x":ht()}],"scale-y":[{"scale-y":ht()}],"scale-z":[{"scale-z":ht()}],"scale-3d":["scale-3d"],skew:[{skew:zn()}],"skew-x":[{"skew-x":zn()}],"skew-y":[{"skew-y":zn()}],transform:[{transform:[me,pe,"","none","gpu","cpu"]}],"transform-origin":[{origin:ge()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:fn()}],"translate-x":[{"translate-x":fn()}],"translate-y":[{"translate-y":fn()}],"translate-z":[{"translate-z":fn()}],"translate-none":["translate-none"],accent:[{accent:G()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:G()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",me,pe]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":I()}],"scroll-mx":[{"scroll-mx":I()}],"scroll-my":[{"scroll-my":I()}],"scroll-ms":[{"scroll-ms":I()}],"scroll-me":[{"scroll-me":I()}],"scroll-mt":[{"scroll-mt":I()}],"scroll-mr":[{"scroll-mr":I()}],"scroll-mb":[{"scroll-mb":I()}],"scroll-ml":[{"scroll-ml":I()}],"scroll-p":[{"scroll-p":I()}],"scroll-px":[{"scroll-px":I()}],"scroll-py":[{"scroll-py":I()}],"scroll-ps":[{"scroll-ps":I()}],"scroll-pe":[{"scroll-pe":I()}],"scroll-pt":[{"scroll-pt":I()}],"scroll-pr":[{"scroll-pr":I()}],"scroll-pb":[{"scroll-pb":I()}],"scroll-pl":[{"scroll-pl":I()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",me,pe]}],fill:[{fill:["none",...G()]}],"stroke-w":[{stroke:[Ve,Ll,co,Jf]}],stroke:[{stroke:["none",...G()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},nM=MV(tM);function Oi(...n){return nM(FI(n))}const _w=n=>typeof n=="boolean"?`${n}`:n===0?"0":n,ww=FI,rM=(n,e)=>t=>{var r;if((e==null?void 0:e.variants)==null)return ww(n,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:o,defaultVariants:a}=e,u=Object.keys(o).map(y=>{const _=t==null?void 0:t[y],E=a==null?void 0:a[y];if(_===null)return null;const T=_w(_)||_w(E);return o[y][T]}),h=t&&Object.entries(t).reduce((y,_)=>{let[E,T]=_;return T===void 0||(y[E]=T),y},{}),p=e==null||(r=e.compoundVariants)===null||r===void 0?void 0:r.reduce((y,_)=>{let{class:E,className:T,...O}=_;return Object.entries(O).every(q=>{let[V,U]=q;return Array.isArray(U)?U.includes({...a,...h}[V]):{...a,...h}[V]===U})?[...y,E,T]:y},[]);return ww(n,u,p,t==null?void 0:t.class,t==null?void 0:t.className)},QI=rM("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9 rounded-md"}},defaultVariants:{variant:"default",size:"default"}});function sM({...n}){return A.jsx(mV,{"data-slot":"alert-dialog",...n})}function iM({...n}){return A.jsx(gV,{"data-slot":"alert-dialog-portal",...n})}function oM({className:n,...e}){return A.jsx(yV,{"data-slot":"alert-dialog-overlay",className:Oi("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",n),...e})}function aM({className:n,...e}){return A.jsxs(iM,{children:[A.jsx(oM,{}),A.jsx(vV,{"data-slot":"alert-dialog-content",className:Oi("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",n),...e})]})}function lM({className:n,...e}){return A.jsx("div",{"data-slot":"alert-dialog-header",className:Oi("flex flex-col gap-2 text-center sm:text-left",n),...e})}function uM({className:n,...e}){return A.jsx("div",{"data-slot":"alert-dialog-footer",className:Oi("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",n),...e})}function cM({className:n,...e}){return A.jsx(EV,{"data-slot":"alert-dialog-title",className:Oi("text-lg font-semibold",n),...e})}function dM({className:n,...e}){return A.jsx(TV,{"data-slot":"alert-dialog-description",className:Oi("text-muted-foreground text-sm",n),...e})}function hM({className:n,...e}){return A.jsx(_V,{className:Oi(QI(),n),...e})}function fM({className:n,...e}){return A.jsx(wV,{className:Oi(QI({variant:"outline"}),n),...e})}const Ew="marcoPlayerName",Fc=()=>{const n=Math.random();let e,t,r,o;return n<.4?(e=Math.floor(Math.random()*20)+1,t=Math.floor(Math.random()*20)+1,r=e+t,o=`${e} + ${t}`):n<.7?(e=Math.floor(Math.random()*20)+10,t=Math.floor(Math.random()*(e-1))+1,r=e-t,o=`${e} − ${t}`):(e=Math.floor(Math.random()*9)+2,t=Math.floor(Math.random()*9)+2,r=e*t,o=`${e} × ${t}`),{question:o,answer:r}};function Tw({mathQ:n,mathInput:e,mathScore:t,mathFeedback:r,onInput:o,subtitle:a}){return A.jsxs("div",{className:"space-y-4",children:[a&&A.jsx("p",{className:"text-sm text-gray-500",children:a}),A.jsxs("div",{className:"bg-white border-2 border-blue-100 rounded-3xl p-8 shadow-sm space-y-5",children:[A.jsxs("div",{className:"flex justify-between items-center",children:[A.jsx("p",{className:"text-sm text-gray-400 uppercase tracking-wide",children:"Math Challenge"}),A.jsxs("p",{className:"text-sm font-semibold text-blue-500",children:["Score: ",t]})]}),A.jsxs("p",{className:"text-5xl sm:text-6xl font-bold text-center",children:[n.question," = ?"]}),A.jsx("input",{type:"number",inputMode:"numeric",value:e,onChange:u=>o(u.target.value),placeholder:"Answer",autoFocus:!0,className:`w-full text-center text-2xl border-2 rounded-full p-3 transition-colors ${r==="correct"?"border-green-400 bg-green-50 text-green-700":"border-gray-300"}`}),r==="correct"&&A.jsx("p",{className:"text-green-600 font-semibold text-center text-lg",children:"✓ Correct!"})]})]})}async function pM(n){if(!(n.type==="image/heic"||n.type==="image/heif"||n.name.toLowerCase().endsWith(".heic")||n.name.toLowerCase().endsWith(".heif")))return n;const t=await createImageBitmap(n),r=document.createElement("canvas");r.width=t.width,r.height=t.height,r.getContext("2d").drawImage(t,0,0),t.close();const o=await new Promise((a,u)=>r.toBlob(h=>h?a(h):u(new Error("Canvas toBlob failed")),"image/jpeg",.85));return new File([o],n.name.replace(/\.(heic|heif)$/i,".jpg"),{type:"image/jpeg"})}function mM(){var ss,on,Fi,Ui,Us,mn;const[n,e]=M.useState("menu"),[t,r]=M.useState(null),[o,a]=M.useState(null),[u,h]=M.useState([]),[p,y]=M.useState(null),[_,E]=M.useState(""),[T,O]=M.useState(""),[q,V]=M.useState(!1),[U,Z]=M.useState(!1),[te,se]=M.useState(null),[ie,ge]=M.useState(!1),[ue,R]=M.useState(null),[I,C]=M.useState(!1),[N,b]=M.useState(null),F=M.useRef(null),[P,Ge]=M.useState(null),[et,Xe]=M.useState(!1),[ze,G]=M.useState(null),[ye,ae]=M.useState(null),[L,Q]=M.useState(null),[he,we]=M.useState(null),[Pe,De]=M.useState(null),[Te,Oe]=M.useState(""),[Le,ht]=M.useState(null),[zn,fn]=M.useState(!1),[Sn,wr]=M.useState(()=>Fc()),[Vi,Bn]=M.useState(""),[Er,es]=M.useState(0),[pt,rt]=M.useState(null),qe=(ss=Yl.currentUser)==null?void 0:ss.uid,Ke=u.find($=>$.id===qe)??null,Ds=(Ke==null?void 0:Ke.isReady)===!0,ts=M.useMemo(()=>/[a-z0-9]/i.test(_),[_]),Tr=q&&ts&&U&&!I,ns=u.length>=4&&u.every($=>$.isReady===!0),Os=Math.max(2,Math.ceil((u.length-1)/2)),$n=(o==null?void 0:o.photosPerPlayer)??z0(u.length).photosPerPlayer,Mi=(o==null?void 0:o.eliminatedPlayerIds)??[],nr=u.filter($=>!Mi.includes($.id)),pn=qe?Mi.includes(qe):!1;(((on=p==null?void 0:p.marcoConfirmed)==null?void 0:on.length)??0)>=((o==null?void 0:o.marcoCount)??1);const Vs=M.useMemo(()=>{const $=(Ke==null?void 0:Ke.photoUrls)??[],Ne=new Set((Ke==null?void 0:Ke.usedPhotoUrls)??[]);return $.filter(Dt=>!Ne.has(Dt))},[Ke==null?void 0:Ke.photoUrls,Ke==null?void 0:Ke.usedPhotoUrls]);M.useEffect(()=>{const $=localStorage.getItem(Ew);$&&(E($),O($),V(!0))},[]),M.useEffect(()=>{let $=!0;return ew().then(async()=>{if(!$)return;Z(!0);const Ne=await l2();Ne&&(r(Ne),e("lobby"))}).catch(Ne=>{$&&(Z(!1),R(Ne.message))}),()=>{$=!1}},[]),M.useEffect(()=>{if(!U||!q||!T)return;let $=!0;return tw(T).catch(Ne=>{$&&R(Ne.message)}),()=>{$=!1}},[U,q,T]),M.useEffect(()=>{if(!t){a(null),h([]);return}const $=u2(t,Dt=>{a(Dt),Dt||(r(null),e("menu"))}),Ne=c2(t,h);return()=>{$(),Ne()}},[t]),M.useEffect(()=>{if(!t||!(o!=null&&o.currentRound)){y(null);return}const $=y2(t,o.currentRound,y);return()=>$()},[t,o==null?void 0:o.currentRound]),M.useEffect(()=>{if(!t)return;let $=!0;const Ne=async()=>{try{await d2(t)}catch{if(!$)return}};Ne();const Dt=window.setInterval(Ne,3e4);return()=>{$=!1,window.clearInterval(Dt)}},[t]),M.useEffect(()=>{if(o&&o.state==="playing"){if(!o.gamePhase){n==="lobby"&&e("photo-upload");return}if(o.gamePhase==="round-action"){if(!ie){e("role-reveal");return}n!=="round-action"&&(ae(null),Q(null),we(null),De(null),e("round-action"));return}if(o.gamePhase==="eliminated-reveal"&&n!=="eliminated-reveal"){e("eliminated-reveal"),Oe("");return}if(o.gamePhase==="photo-reveal"&&n!=="photo-reveal"){e("photo-reveal");return}if(o.gamePhase==="investigation"&&n!=="investigation"){e("investigation"),ht(null);return}if(o.gamePhase==="game-over"&&n!=="game-over"){e("game-over");return}}},[o==null?void 0:o.state,o==null?void 0:o.gamePhase,ie]),M.useEffect(()=>{n==="round-action"&&(wr(Fc()),es(0),Bn(""),rt(null))},[n,o==null?void 0:o.currentRound]),M.useEffect(()=>{if(!t||n!=="lobby"||(o==null?void 0:o.state)!=="waiting"||!ns||I)return;let $=!1;return(async()=>{try{await A2(t)}catch(Dt){$||R(Dt.message)}})(),()=>{$=!0}},[t,o==null?void 0:o.state,n,ns,I]);const Ir=async()=>{R(null);const $=_.trim();if(!$||!ts){R("Name must contain at least one letter or number.");return}C(!0);try{await ew(),await tw($),O($),V(!0),localStorage.setItem(Ew,$)}catch(Ne){R(Ne.message)}finally{C(!1)}},Ms=async()=>{R(null),C(!0);try{const $=await h2(T);r($.roomId),e("lobby")}catch($){R($.message)}finally{C(!1)}},Li=async()=>{if(t){R(null),C(!0);try{await m2(t,!Ds)}catch($){R($.message)}finally{C(!1)}}},Rt=async()=>{if(t&&window.confirm("Leave the room?")){R(null),C(!0);try{await f2(t),se(null),ge(!1),y(null),r(null),e("menu")}catch($){R($.message)}finally{C(!1)}}},Ls=()=>{Ke!=null&&Ke.role&&se(Ke.role)},Sr=()=>{var $;G(null),($=F.current)==null||$.click()},Fs=async $=>{const Ne=$.target.files;if(!(!Ne||Ne.length===0)){if(Ne.length!==$n){G(`Select exactly ${$n} photos. You picked ${Ne.length}.`),$.target.value="";return}G(null),Xe(!0);try{const Dt=await Promise.all(Array.from(Ne).map(pM));Ge(Dt)}catch(Dt){G("Failed to process one or more photos. Please try again."),console.error(Dt)}finally{Xe(!1)}}},rr=async()=>{if(!(!t||!P)){Xe(!0),G(null);try{await v2(t,P)}catch($){G($.message)}finally{Xe(!1)}}},sr=nr.filter($=>$.role!=="Marco"&&$.id!==qe),Je=M.useMemo(()=>{if(!(p!=null&&p.marcoSubmissions))return null;const $=Object.entries(p.marcoSubmissions);return $.length>0?$[0]:null},[p==null?void 0:p.marcoSubmissions]),ir=qe?!!((Fi=p==null?void 0:p.marcoSubmissions)!=null&&Fi[qe]):!1,or=qe?((p==null?void 0:p.marcoConfirmed)??[]).includes(qe):!1,Ar=async()=>{if(!(!t||!(o!=null&&o.currentRound)||!ye||!L||!he)){R(null),C(!0);try{await _2(t,o.currentRound,ye,L,he)}catch($){R($.message)}finally{C(!1)}}},xo=async()=>{if(!(!t||!(o!=null&&o.currentRound))){R(null),C(!0);try{await w2(t,o.currentRound)}catch($){R($.message)}finally{C(!1)}}},bo=async()=>{if(!(!t||!(o!=null&&o.currentRound)||!Pe)){R(null),C(!0);try{await E2(t,o.currentRound,Pe)}catch($){R($.message)}finally{C(!1)}}},Wn=async()=>{if(!(!t||!(o!=null&&o.currentRound)||!Te.trim())){R(null),C(!0);try{await T2(t,o.currentRound,Te.trim())}catch($){R($.message)}finally{C(!1)}}},No=async()=>{if(!(!t||!(o!=null&&o.currentRound))){R(null),C(!0);try{await I2(t,o.currentRound)}catch($){R($.message)}finally{C(!1)}}},rs=async $=>{if(!(!t||!(o!=null&&o.currentRound)||Le)){ht($),R(null);try{await S2(t,o.currentRound,$)}catch(Ne){R(Ne.message),ht(null)}}},Rr=$=>{!t||$.id===qe||b($)},Cr=async()=>{if(!(!t||!N)){R(null),C(!0);try{const $=await p2(t,N.id);b(null),$.kicked||R(`${N.name} has ${$.voteCount}/${$.votesNeeded} votes.`)}catch($){R($.message)}finally{C(!1)}}},kr=$=>{var Ne;return((Ne=u.find(Dt=>Dt.id===$))==null?void 0:Ne.name)??$},qn=u.filter($=>$.hasUploadedPhotos).length,mt=p!=null&&p.eliminatedPlayerId?u.find($=>$.id===p.eliminatedPlayerId):null;return A.jsxs("div",{className:"min-h-screen w-full flex items-center justify-center px-4 py-10 sm:px-8",children:[A.jsxs("div",{className:"w-full max-w-5xl text-center",children:[n==="menu"&&A.jsxs("div",{className:"space-y-6 sm:space-y-8",children:[A.jsx("img",{src:fA,alt:"Marco Photo",className:"w-full h-auto max-w-4xl mx-auto mb-6 sm:mb-8"}),A.jsx("p",{className:"text-base sm:text-lg lg:text-2xl mb-6 sm:mb-8",children:"Get ready for a fun game!"}),A.jsxs("div",{className:"flex flex-col items-center gap-3 sm:gap-4",children:[A.jsxs("div",{className:"w-full max-w-sm space-y-3",children:[A.jsx("input",{type:"text",value:_,onChange:$=>{E($.target.value),V(!1)},placeholder:"Enter your name",className:"border-2 border-gray-300 p-2 w-full text-center rounded-full"}),A.jsx(Pt,{onClick:Ir,disabled:!ts||I,children:q?"Name Saved":"Save Name"})]}),A.jsx(Pt,{onClick:Ms,disabled:!Tr,children:"Join Game"}),A.jsx("p",{className:"text-sm text-gray-500",children:"One shared lobby, up to 19 players."}),!ts&&_.length>0&&A.jsx("p",{className:"text-sm text-red-500",children:"Name must contain at least one letter or number."}),!U&&A.jsx("p",{className:"text-sm text-red-500",children:"Waiting for sign-in..."})]}),ue&&A.jsx("p",{className:"text-sm text-red-500",children:ue})]}),n==="lobby"&&A.jsxs("div",{className:"space-y-6 sm:space-y-8",children:[A.jsx("h1",{className:"text-3xl sm:text-4xl lg:text-5xl",children:"Game Lobby"}),A.jsxs("div",{className:"bg-white rounded-3xl p-6 sm:p-8 shadow-lg",children:[A.jsx("p",{className:"text-3xl sm:text-4xl font-bold text-blue-500",children:"Main Lobby"}),A.jsxs("p",{className:"text-sm text-gray-500 mt-2",children:[u.length,"/19 players joined"]})]}),A.jsxs("div",{className:"bg-white rounded-3xl p-6 sm:p-8 shadow-lg",children:[A.jsx("p",{className:"text-base sm:text-lg mb-4",children:"Players"}),A.jsx("div",{className:"space-y-2",children:u.map($=>A.jsxs("div",{className:"flex items-center justify-between border-b last:border-b-0 pb-2",children:[A.jsxs("span",{className:"text-base sm:text-lg",children:[$.name,$.id===qe?" (You)":""]}),A.jsxs("div",{className:"flex items-center gap-3",children:[$.isReady&&A.jsx("span",{className:"text-xs uppercase tracking-wide text-green-600",children:"Ready"}),$.id!==qe&&A.jsx("button",{type:"button",onClick:()=>Rr($),disabled:I,className:"text-sm font-semibold text-red-600 hover:text-red-700 disabled:text-red-300",children:"Vote Kick"})]})]},$.id))})]}),A.jsx("p",{className:"text-base sm:text-lg",children:(o==null?void 0:o.state)==="playing"?"Game in progress.":u.length<4?`Waiting for players… ${u.length}/4 minimum to start.`:ns?"Everyone is ready. Starting game...":"Waiting for everyone to ready up..."}),(o==null?void 0:o.state)!=="playing"&&A.jsx(Pt,{onClick:Li,disabled:I||!Ke,children:Ds?"Not Ready":"Ready"}),A.jsx(Pt,{onClick:Rt,disabled:I,children:"Leave Room"}),ue&&A.jsx("p",{className:"text-sm text-red-500",children:ue})]}),n==="photo-upload"&&A.jsxs("div",{className:"space-y-6 sm:space-y-8",children:[A.jsx("h1",{className:"text-3xl sm:text-4xl lg:text-5xl",children:"Upload Your Photos"}),Ke!=null&&Ke.hasUploadedPhotos?A.jsxs(A.Fragment,{children:[A.jsxs("div",{className:"bg-green-50 border-2 border-green-400 rounded-3xl p-6",children:[A.jsx("p",{className:"text-xl text-green-700 font-semibold",children:"Photos uploaded!"}),A.jsxs("p",{className:"text-gray-600 mt-1",children:[qn,"/",u.length," players ready"]})]}),A.jsx("p",{className:"text-gray-500",children:"Waiting for others to upload their photos…"})]}):A.jsxs(A.Fragment,{children:[A.jsxs("p",{className:"text-base sm:text-lg",children:["Select exactly ",A.jsxs("strong",{children:[$n," photos"]})," from your camera roll. These will be your photo pool for the entire game."]}),A.jsx("input",{ref:F,type:"file",accept:"image/*",multiple:!0,className:"hidden",onChange:Fs}),P?A.jsxs("div",{className:"bg-blue-50 border-2 border-blue-200 rounded-3xl p-6",children:[A.jsxs("p",{className:"text-blue-700 font-semibold",children:[P.length," photos selected"]}),A.jsx("div",{className:"grid grid-cols-4 sm:grid-cols-6 gap-2 mt-4",children:P.map(($,Ne)=>A.jsx("img",{src:URL.createObjectURL($),alt:`Photo ${Ne+1}`,className:"w-full aspect-square object-cover rounded-lg"},Ne))})]}):null,ze&&A.jsx("p",{className:"text-sm text-red-500",children:ze}),A.jsxs("div",{className:"flex flex-col gap-3 items-center",children:[A.jsx(Pt,{onClick:Sr,disabled:et,children:P?"Change Photos":"Select Photos"}),P&&A.jsx(Pt,{onClick:rr,disabled:et,children:et?"Uploading…":"Upload Photos"})]})]}),A.jsxs("p",{className:"text-sm text-gray-500",children:[qn,"/",u.length," players uploaded"]}),A.jsx(Pt,{onClick:Rt,disabled:I||et,children:"Leave Room"})]}),n==="role-reveal"&&A.jsxs("div",{className:"space-y-6 sm:space-y-8",children:[A.jsx("h1",{className:"text-3xl sm:text-5xl lg:text-6xl mb-4",children:"Your Role"}),te?A.jsxs(A.Fragment,{children:[A.jsx("div",{className:`text-4xl sm:text-6xl lg:text-8xl p-6 sm:p-10 rounded-3xl shadow-2xl ${te==="Marco"?"bg-blue-500 text-white":"bg-white text-blue-500 border-4 border-blue-500"}`,children:te==="Marco"?"🏊 Marco 🏊":"🧍 Reg 🧍"}),A.jsx("p",{className:"text-lg sm:text-2xl mt-6",children:te==="Marco"?"You're a Marco! Pick targets and deceive the Regs.":"You're a Reg. Find the Marcos!"}),A.jsx(Pt,{onClick:()=>ge(!0),children:"Enter Game"})]}):A.jsx(Pt,{onClick:Ls,disabled:!(Ke!=null&&Ke.role),children:"Reveal Role"}),A.jsx(Pt,{onClick:Rt,disabled:I,children:"Leave Room"})]}),n==="round-action"&&A.jsxs("div",{className:"space-y-6 sm:space-y-8",children:[A.jsxs("h1",{className:"text-2xl sm:text-3xl lg:text-4xl",children:["Round ",(o==null?void 0:o.currentRound)??"?"," of ",(o==null?void 0:o.rounds)??"?"]}),pn&&A.jsx(Tw,{mathQ:Sn,mathInput:Vi,mathScore:Er,mathFeedback:pt,onInput:$=>{Bn($),parseInt($,10)===Sn.answer&&(es(Ne=>Ne+1),rt("correct"),setTimeout(()=>{rt(null),wr(Fc()),Bn("")},600))},subtitle:"You've been eliminated — keep busy while the round is set up."}),!pn&&te==="Reg"&&A.jsx("div",{className:"space-y-4",children:qe&&((Ui=p==null?void 0:p.publicPhotoUrls)!=null&&Ui[qe])?A.jsx(Tw,{mathQ:Sn,mathInput:Vi,mathScore:Er,mathFeedback:pt,onInput:$=>{Bn($),parseInt($,10)===Sn.answer&&(es(Ne=>Ne+1),rt("correct"),setTimeout(()=>{rt(null),wr(Fc()),Bn("")},600))},subtitle:"Photo submitted! Keep busy while the Marcos decide…"}):A.jsxs(A.Fragment,{children:[A.jsx("p",{className:"text-base sm:text-lg",children:"Pick one photo to share this round:"}),A.jsx("div",{className:"grid grid-cols-3 sm:grid-cols-4 gap-3",children:Vs.map($=>A.jsx("button",{type:"button",onClick:()=>De($),className:`aspect-square rounded-2xl overflow-hidden border-4 transition-all ${Pe===$?"border-blue-500 scale-105":"border-transparent"}`,children:A.jsx("img",{src:$,alt:"Pool photo",className:"w-full h-full object-cover"})},$))}),Pe&&A.jsx(Pt,{onClick:bo,disabled:I,children:"Submit Photo"})]})}),!pn&&te==="Marco"&&A.jsxs("div",{className:"space-y-6",children:[Je&&!ir&&A.jsxs("div",{className:"bg-blue-50 border-2 border-blue-200 rounded-3xl p-6 text-left",children:[A.jsxs("p",{className:"font-semibold text-blue-700 mb-2",children:["Marco proposal from ",kr(Je[0]),":"]}),A.jsxs("p",{children:["Eliminate: ",A.jsx("strong",{children:kr(Je[1].eliminatedPlayerId)})]}),A.jsxs("div",{className:"flex gap-3 mt-3",children:[A.jsxs("div",{className:"text-center",children:[A.jsx("p",{className:"text-xs text-gray-500 mb-1",children:"Private photo"}),A.jsx("img",{src:Je[1].privatePhotoUrl,alt:"Private",className:"w-20 h-20 object-cover rounded-xl"})]}),A.jsxs("div",{className:"text-center",children:[A.jsx("p",{className:"text-xs text-gray-500 mb-1",children:"Public photo"}),A.jsx("img",{src:Je[1].publicPhotoUrl,alt:"Public",className:"w-20 h-20 object-cover rounded-xl"})]})]}),!or&&A.jsx(Pt,{onClick:xo,disabled:I,className:"mt-4",children:"Confirm This Plan"}),or&&A.jsx("p",{className:"text-green-600 mt-3 font-semibold",children:"You confirmed. Waiting for other Marcos…"})]}),ir&&A.jsxs("div",{className:"bg-green-50 border-2 border-green-400 rounded-3xl p-6",children:[A.jsxs("p",{className:"text-green-700 font-semibold",children:["Your plan is submitted (",((p==null?void 0:p.marcoConfirmed)??[]).length,"/",(o==null?void 0:o.marcoCount)??1," Marcos confirmed)."]}),A.jsx("p",{className:"text-gray-500 text-sm mt-1",children:"Other Marcos need to confirm to proceed."})]}),(!ir||(Je==null?void 0:Je[0])!==qe)&&A.jsxs("div",{className:"space-y-4 text-left",children:[A.jsx("p",{className:"font-semibold text-lg",children:ir?"Override your plan:":"Submit your plan:"}),A.jsxs("div",{children:[A.jsx("p",{className:"text-sm text-gray-600 mb-2",children:"1. Pick who to eliminate:"}),A.jsx("div",{className:"space-y-1",children:sr.map($=>A.jsx("button",{type:"button",onClick:()=>ae($.id),className:`w-full px-4 py-2 rounded-full text-left border-2 transition-all ${ye===$.id?"border-blue-500 bg-blue-50":"border-gray-200"}`,children:$.name},$.id))})]}),A.jsxs("div",{children:[A.jsx("p",{className:"text-sm text-gray-600 mb-2",children:"2. Pick private photo (sent only to eliminated player):"}),A.jsx("div",{className:"grid grid-cols-3 sm:grid-cols-4 gap-2",children:Vs.filter($=>$!==he).map($=>A.jsx("button",{type:"button",onClick:()=>Q($),className:`aspect-square rounded-xl overflow-hidden border-4 transition-all ${L===$?"border-blue-500 scale-105":"border-transparent"}`,children:A.jsx("img",{src:$,alt:"",className:"w-full h-full object-cover"})},$))})]}),A.jsxs("div",{children:[A.jsx("p",{className:"text-sm text-gray-600 mb-2",children:"3. Pick public photo (shown to everyone):"}),A.jsx("div",{className:"grid grid-cols-3 sm:grid-cols-4 gap-2",children:Vs.filter($=>$!==L).map($=>A.jsx("button",{type:"button",onClick:()=>we($),className:`aspect-square rounded-xl overflow-hidden border-4 transition-all ${he===$?"border-green-500 scale-105":"border-transparent"}`,children:A.jsx("img",{src:$,alt:"",className:"w-full h-full object-cover"})},$))})]}),ye&&L&&he&&A.jsx(Pt,{onClick:Ar,disabled:I,children:ir?"Update Plan":"Submit Plan"})]})]}),ue&&A.jsx("p",{className:"text-sm text-red-500",children:ue}),A.jsx(Pt,{onClick:Rt,disabled:I,children:"Leave Room"})]}),n==="eliminated-reveal"&&A.jsxs("div",{className:"space-y-6 sm:space-y-8",children:[A.jsx("h1",{className:"text-2xl sm:text-3xl lg:text-4xl",children:"Player Eliminated"}),A.jsx("div",{className:"bg-red-50 border-2 border-red-300 rounded-3xl p-6",children:A.jsxs("p",{className:"text-xl font-semibold text-red-700",children:[(mt==null?void 0:mt.name)??"Unknown"," has been eliminated this round."]})}),qe===(p==null?void 0:p.eliminatedPlayerId)&&A.jsxs("div",{className:"space-y-4",children:[A.jsx("p",{className:"text-base sm:text-lg font-semibold",children:"Marco sent you this photo:"}),p.privatePhotoUrl&&A.jsx("img",{src:p.privatePhotoUrl,alt:"Private photo from Marco",className:"mx-auto max-w-xs rounded-3xl shadow-lg"}),p.eliminatedClue?A.jsx("div",{className:"bg-green-50 border-2 border-green-400 rounded-3xl p-6",children:A.jsxs("p",{className:"text-green-700",children:["Clue submitted: ",A.jsx("strong",{children:p.eliminatedClue})]})}):A.jsxs("div",{className:"space-y-3",children:[A.jsx("p",{className:"text-gray-600",children:"Give the group one word to describe this photo:"}),A.jsx("input",{type:"text",value:Te,onChange:$=>{const Ne=$.target.value.replace(/\s/g,"");Oe(Ne)},placeholder:"One word…",maxLength:30,className:"border-2 border-gray-300 p-2 w-full max-w-xs text-center rounded-full"}),A.jsx(Pt,{onClick:Wn,disabled:I||!Te.trim(),children:"Submit Clue"})]})]}),qe!==(p==null?void 0:p.eliminatedPlayerId)&&A.jsx("div",{className:"space-y-3",children:p!=null&&p.eliminatedClue?A.jsx("div",{className:"bg-yellow-50 border-2 border-yellow-300 rounded-3xl p-6",children:A.jsxs("p",{className:"text-gray-700",children:[(mt==null?void 0:mt.name)??"They","'s clue:"," ",A.jsx("strong",{className:"text-2xl",children:p.eliminatedClue})]})}):A.jsxs("p",{className:"text-gray-500",children:["Waiting for ",(mt==null?void 0:mt.name)??"the eliminated player"," to give their clue…"]})}),ue&&A.jsx("p",{className:"text-sm text-red-500",children:ue}),A.jsx(Pt,{onClick:Rt,disabled:I,children:"Leave Room"})]}),n==="photo-reveal"&&A.jsxs("div",{className:"space-y-6 sm:space-y-8",children:[A.jsx("h1",{className:"text-2xl sm:text-3xl lg:text-4xl",children:"Photos This Round"}),(p==null?void 0:p.eliminatedClue)&&A.jsx("div",{className:"bg-yellow-50 border-2 border-yellow-300 rounded-3xl p-4",children:A.jsxs("p",{className:"text-gray-700",children:[mt==null?void 0:mt.name,"'s clue: ",A.jsx("strong",{className:"text-2xl",children:p.eliminatedClue})]})}),A.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-4",children:Object.entries((p==null?void 0:p.publicPhotoUrls)??{}).map(([$,Ne])=>A.jsxs("div",{className:"space-y-1",children:[A.jsx("img",{src:Ne,alt:kr($),className:"w-full aspect-square object-cover rounded-2xl shadow"}),A.jsx("p",{className:"text-sm text-gray-600 truncate",children:kr($)})]},$))}),!pn&&A.jsx(Pt,{onClick:No,disabled:I,children:"Proceed to Investigation"}),ue&&A.jsx("p",{className:"text-sm text-red-500",children:ue}),A.jsx(Pt,{onClick:Rt,disabled:I,children:"Leave Room"})]}),n==="investigation"&&A.jsxs("div",{className:"space-y-6 sm:space-y-8",children:[A.jsx("h1",{className:"text-2xl sm:text-3xl lg:text-4xl",children:"Investigate"}),A.jsx("p",{className:"text-base sm:text-lg text-gray-600",children:"Who do you want to investigate? Pick one player."}),pn?A.jsx("p",{className:"text-gray-400",children:"You've been eliminated and cannot vote."}):Le||qe&&((Us=p==null?void 0:p.investigationVotes)!=null&&Us[qe])?A.jsxs("div",{className:"bg-blue-50 border-2 border-blue-200 rounded-3xl p-6",children:[A.jsxs("p",{className:"text-blue-700 font-semibold",children:["You voted for ",kr(Le??((mn=p==null?void 0:p.investigationVotes)==null?void 0:mn[qe??""])??""),"."]}),A.jsxs("p",{className:"text-gray-500 text-sm mt-1",children:["Waiting for others (",Object.keys((p==null?void 0:p.investigationVotes)??{}).length,"/",nr.length-1," voted)…"]})]}):A.jsx("div",{className:"space-y-2",children:nr.filter($=>$.id!==qe).map($=>A.jsx("button",{type:"button",onClick:()=>rs($.id),className:"w-full px-4 py-3 rounded-full border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all text-left",children:$.name},$.id))}),ue&&A.jsx("p",{className:"text-sm text-red-500",children:ue}),A.jsx(Pt,{onClick:Rt,disabled:I,children:"Leave Room"})]}),n==="game-over"&&A.jsxs("div",{className:"space-y-6 sm:space-y-8",children:[A.jsx("h1",{className:"text-3xl sm:text-5xl lg:text-6xl",children:"Game Over"}),A.jsx("div",{className:`p-8 rounded-3xl shadow-2xl text-4xl sm:text-6xl font-bold ${(o==null?void 0:o.winner)==="Marco"?"bg-blue-500 text-white":"bg-yellow-400 text-white"}`,children:(o==null?void 0:o.winner)==="Marco"?"🏊 Marcos Win! 🏊":"🎉 Regs Win! 🎉"}),A.jsxs("div",{className:"bg-white rounded-3xl p-6 shadow-lg",children:[A.jsx("p",{className:"text-lg font-semibold mb-4",children:"Roles Revealed"}),A.jsx("div",{className:"space-y-2",children:u.map($=>A.jsxs("div",{className:"flex justify-between items-center border-b last:border-0 pb-2",children:[A.jsxs("span",{children:[$.name,$.id===qe?" (You)":""]}),A.jsx("span",{className:`font-semibold ${$.role==="Marco"?"text-blue-600":"text-gray-600"}`,children:$.role??"?"})]},$.id))})]}),A.jsxs("p",{className:"text-gray-500",children:["Completed ",(o==null?void 0:o.currentRound)??"?"," round",((o==null?void 0:o.currentRound)??1)!==1?"s":""," out of ",(o==null?void 0:o.rounds)??"?","."]}),A.jsx(Pt,{onClick:Rt,disabled:I,children:"Leave Room"})]})]}),A.jsx("button",{type:"button",onClick:()=>fn(!0),className:"fixed top-4 right-4 z-50 w-10 h-10 rounded-full bg-blue-500 text-white text-xl font-bold shadow-lg flex items-center justify-center hover:bg-blue-600 active:scale-95 transition-all","aria-label":"Game rules",children:"?"}),zn&&A.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4",onClick:()=>fn(!1),children:A.jsxs("div",{className:"bg-white rounded-3xl p-6 sm:p-8 shadow-2xl max-w-sm w-full text-left space-y-4",onClick:$=>$.stopPropagation(),children:[A.jsxs("div",{className:"flex items-center justify-between",children:[A.jsx("h2",{className:"text-2xl font-bold text-blue-600",children:"How to Play"}),A.jsx("button",{type:"button",onClick:()=>fn(!1),className:"text-gray-400 hover:text-gray-600 text-2xl leading-none","aria-label":"Close rules",children:"×"})]}),A.jsxs("ol",{className:"space-y-3 text-sm text-gray-700 list-decimal list-inside leading-relaxed",children:[A.jsx("li",{children:"Don't leak what's on your device!!!"}),A.jsxs("li",{children:["One or more players are secretly assigned as ",A.jsx("strong",{children:"Marcos"}),". Everyone else is a ",A.jsx("strong",{children:"Regular"}),"."]}),A.jsx("li",{children:"Marcos know who each other are. Regulars know nothing."}),A.jsxs("li",{children:["Each round, Marcos secretly agree on a player to ",A.jsx("strong",{children:"eliminate"})," and pick two photos — a ",A.jsx("strong",{children:"private"})," one (only the eliminated player sees) and a ",A.jsx("strong",{children:"public"})," one (everyone sees)."]}),A.jsxs("li",{children:["Each Regular picks one ",A.jsx("strong",{children:"public photo"})," to share with the group."]}),A.jsxs("li",{children:["The eliminated player sees their private photo and gives the group a ",A.jsx("strong",{children:"one-word clue"}),"."]}),A.jsxs("li",{children:["Everyone votes to ",A.jsx("strong",{children:"investigate"})," who they think is a Marco. The most-voted player is revealed."]}),A.jsxs("li",{children:[A.jsx("strong",{children:"Regs win"})," by successfully investigating all Marcos. ",A.jsx("strong",{children:"Marcos win"})," by surviving all rounds."]})]})]})}),A.jsx(sM,{open:!!N,onOpenChange:$=>{!$&&!I&&b(null)},children:A.jsxs(aM,{className:"rounded-3xl border-2 border-blue-200",children:[A.jsxs(lM,{children:[A.jsx(cM,{className:"text-2xl text-blue-600",children:"Vote Kick Player?"}),A.jsx(dM,{className:"text-base text-gray-600",children:N?`Vote to remove ${N.name}? ${Os} votes needed.`:"Vote to remove this player?"})]}),A.jsxs(uM,{children:[A.jsx(fM,{disabled:I,children:"Cancel"}),A.jsx(hM,{onClick:Cr,disabled:I,className:"bg-red-600 text-white hover:bg-red-700",children:I?"Submitting...":"Vote Kick"})]})]})})]})}cA.createRoot(document.getElementById("root")).render(A.jsx(mM,{}));
