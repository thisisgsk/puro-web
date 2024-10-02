"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[556],{7183:function(e,t,n){n.d(t,{O:function(){return x}});var r=n(9488),o=n(5512),a=(0,r.tv)({base:["relative inline-flex items-center outline-none tap-highlight-transparent",...o.Dh],variants:{size:{sm:"text-small",md:"text-medium",lg:"text-large"},color:{foreground:"text-foreground",primary:"text-primary",secondary:"text-secondary",success:"text-success",warning:"text-warning",danger:"text-danger"},underline:{none:"no-underline",hover:"hover:underline",always:"underline",active:"active:underline",focus:"focus:underline"},isBlock:{true:["px-2","py-1","hover:after:opacity-100","after:content-['']","after:inset-0","after:opacity-0","after:w-full","after:h-full","after:rounded-xl","after:transition-background","after:absolute"],false:"hover:opacity-80 active:opacity-disabled transition-opacity"},isDisabled:{true:"opacity-disabled cursor-default pointer-events-none"},disableAnimation:{true:"after:transition-none transition-none"}},compoundVariants:[{isBlock:!0,color:"foreground",class:"hover:after:bg-foreground/10"},{isBlock:!0,color:"primary",class:"hover:after:bg-primary/20"},{isBlock:!0,color:"secondary",class:"hover:after:bg-secondary/20"},{isBlock:!0,color:"success",class:"hover:after:bg-success/20"},{isBlock:!0,color:"warning",class:"hover:after:bg-warning/20"},{isBlock:!0,color:"danger",class:"hover:after:bg-danger/20"},{underline:["hover","always","active","focus"],class:"underline-offset-4"}],defaultVariants:{color:"primary",size:"md",isBlock:!1,underline:"none",isDisabled:!1}}),i=n(3136),u=n(7127),l=n(2433),c=n(1080),s=n(5680),f=n(6733),d=n(5607),p=n(3295),v=n(2459),m=n(9037),h=n(262),y=n(7294),b=n(5893),g=e=>(0,b.jsxs)("svg",{"aria-hidden":"true",fill:"none",focusable:"false",height:"1em",shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",viewBox:"0 0 24 24",width:"1em",...e,children:[(0,b.jsx)("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"}),(0,b.jsx)("path",{d:"M15 3h6v6"}),(0,b.jsx)("path",{d:"M10 14L21 3"})]}),w=(0,d.Gp)((e,t)=>{let{Component:n,children:r,showAnchorIcon:o,anchorIcon:w=(0,b.jsx)(g,{className:"flex mx-1 text-current self-center"}),getLinkProps:x}=function(e){var t,n,r,o;let b=(0,f.w)(),[g,w]=(0,d.oe)(e,a.variantKeys),{ref:x,as:k,children:j,anchorIcon:E,isExternal:S=!1,showAnchorIcon:P=!1,autoFocus:C=!1,className:_,onPress:N,onPressStart:R,onPressEnd:O,onClick:B,...I}=g,M=(0,p.gy)(x),L=null!=(n=null!=(t=null==e?void 0:e.disableAnimation)?t:null==b?void 0:b.disableAnimation)&&n,{linkProps:T}=function(e,t){let{elementType:n="a",onPress:r,onPressStart:o,onPressEnd:a,onClick:f,isDisabled:d,...p}=e,v={};"a"!==n&&(v={role:"link",tabIndex:d?void 0:0});let{focusableProps:m}=(0,c.k)(e,t),{pressProps:h,isPressed:y}=(0,s.r)({onPress:r,onPressStart:o,onPressEnd:a,isDisabled:d,ref:t}),b=(0,i.z)(p,{labelable:!0}),g=(0,u.d)(m,h),w=(0,l.tv)(),x=(0,l.eY)(e);return{isPressed:y,linkProps:(0,u.d)(b,x,{...g,...v,"aria-disabled":d||void 0,"aria-current":e["aria-current"],onClick:t=>{var n;null===(n=h.onClick)||void 0===n||n.call(h,t),f&&(f(t),console.warn("onClick is deprecated, please use onPress")),!w.isNative&&t.currentTarget instanceof HTMLAnchorElement&&t.currentTarget.href&&!t.isDefaultPrevented()&&(0,l.b0)(t.currentTarget,t)&&e.href&&(t.preventDefault(),w.open(t.currentTarget,t,e.href,e.routerOptions))}})}}({...I,onPress:N,onPressStart:R,onPressEnd:O,onClick:B,isDisabled:e.isDisabled,elementType:`${k}`},M),{isFocused:$,isFocusVisible:W,focusProps:A}=(0,v.F)({autoFocus:C});S&&(I.rel=null!=(r=I.rel)?r:"noopener noreferrer",I.target=null!=(o=I.target)?o:"_blank");let D=(0,y.useMemo)(()=>a({...w,disableAnimation:L,className:_}),[(0,m.Xx)(w),L,_]);return{Component:k||"a",children:j,anchorIcon:E,showAnchorIcon:P,getLinkProps:(0,y.useCallback)(()=>({ref:M,className:D,"data-focus":(0,h.PB)($),"data-disabled":(0,h.PB)(e.isDisabled),"data-focus-visible":(0,h.PB)(W),...(0,u.d)(A,T,I)}),[D,$,W,A,T,I])}}({ref:t,...e});return(0,b.jsx)(n,{...x(),children:(0,b.jsxs)(b.Fragment,{children:[r,o&&w]})})});w.displayName="NextUI.Link";var x=w},9981:function(e,t,n){let r,o,a;n.d(t,{R:function(){return D}});var i=n(7666),u=n(29),l={visible:{y:0,transition:{ease:u.Lj.easeOut}},hidden:{y:"-100%",transition:{ease:u.Lj.easeIn}}},c=n(6733),s=n(5607),f=n(9488),d=n(5512),p=(0,f.tv)({slots:{base:["flex","z-40","w-full","h-auto","items-center","justify-center","data-[menu-open=true]:border-none"],wrapper:["z-40","flex","px-6","gap-4","w-full","flex-row","relative","flex-nowrap","items-center","justify-between","h-[var(--navbar-height)]"],toggle:["group","flex","items-center","justify-center","w-6","h-full","outline-none","rounded-small","tap-highlight-transparent",...d.Dh],srOnly:["sr-only"],toggleIcon:["w-full","h-full","pointer-events-none","flex","flex-col","items-center","justify-center","text-inherit","group-data-[pressed=true]:opacity-70","transition-opacity","before:content-['']","before:block","before:h-px","before:w-6","before:bg-current","before:transition-transform","before:duration-150","before:-translate-y-1","before:rotate-0","group-data-[open=true]:before:translate-y-px","group-data-[open=true]:before:rotate-45","after:content-['']","after:block","after:h-px","after:w-6","after:bg-current","after:transition-transform","after:duration-150","after:translate-y-1","after:rotate-0","group-data-[open=true]:after:translate-y-0","group-data-[open=true]:after:-rotate-45"],brand:["flex","basis-0","flex-row","flex-grow","flex-nowrap","justify-start","bg-transparent","items-center","no-underline","text-medium","whitespace-nowrap","box-border"],content:["flex","gap-4","h-full","flex-row","flex-nowrap","items-center","data-[justify=start]:justify-start","data-[justify=start]:flex-grow","data-[justify=start]:basis-0","data-[justify=center]:justify-center","data-[justify=end]:justify-end","data-[justify=end]:flex-grow","data-[justify=end]:basis-0"],item:["text-medium","whitespace-nowrap","box-border","list-none","data-[active=true]:font-semibold"],menu:["z-30","px-6","pt-2","fixed","flex","max-w-full","top-[var(--navbar-height)]","inset-x-0","bottom-0","w-screen","flex-col","gap-2","overflow-y-auto"],menuItem:["text-large","data-[active=true]:font-semibold"]},variants:{position:{static:{base:"static"},sticky:{base:"sticky top-0 inset-x-0"}},maxWidth:{sm:{wrapper:"max-w-[640px]"},md:{wrapper:"max-w-[768px]"},lg:{wrapper:"max-w-[1024px]"},xl:{wrapper:"max-w-[1280px]"},"2xl":{wrapper:"max-w-[1536px]"},full:{wrapper:"max-w-full"}},hideOnScroll:{true:{base:["sticky","top-0","inset-x-0"]}},isBordered:{true:{base:["border-b","border-divider"]}},isBlurred:{false:{base:"bg-background",menu:"bg-background"},true:{base:["backdrop-blur-lg","data-[menu-open=true]:backdrop-blur-xl","backdrop-saturate-150","bg-background/70"],menu:["backdrop-blur-xl","backdrop-saturate-150","bg-background/70"]}},disableAnimation:{true:{menu:["hidden","h-[calc(100dvh_-_var(--navbar-height))]","data-[open=true]:flex"]}}},defaultVariants:{maxWidth:"lg",position:"sticky",isBlurred:!0}}),v=n(3295),m=n(9037),h=n(9869),y=n(262),b=n(7294),g=n(7127),w="undefined"!=typeof window;function x(e){return w?e?{x:e.scrollLeft,y:e.scrollTop}:{x:window.scrollX,y:window.scrollY}:{x:0,y:0}}var k=e=>{let{elementRef:t,delay:n=30,callback:r,isEnabled:o}=e,a=(0,b.useRef)(o?x(null==t?void 0:t.current):{x:0,y:0}),i=(0,b.useRef)(null),u=(0,b.useCallback)(()=>{let e=x(null==t?void 0:t.current);"function"==typeof r&&r({prevPos:a.current,currPos:e}),a.current=e,i.current=null},[r,t]);return(0,b.useEffect)(()=>{if(!o)return;let e=()=>{n?(i.current&&clearTimeout(i.current),i.current=setTimeout(u,n)):u()},r=(null==t?void 0:t.current)||window;return r.addEventListener("scroll",e),()=>{r.removeEventListener("scroll",e),i.current&&clearTimeout(i.current)}},[null==t?void 0:t.current,n,u,o]),a.current},j=n(9373),E=n(3123),S=Object.create,P=Object.defineProperty,C=Object.getOwnPropertyDescriptor,_=Object.getOwnPropertyNames,N=Object.getPrototypeOf,R=Object.prototype.hasOwnProperty,O=(e,t)=>function(){return t||(0,e[_(e)[0]])((t={exports:{}}).exports,t),t.exports},B=O({"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.production.min.js"(e){var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),u=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),s=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),d=Symbol.iterator,p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v=Object.assign,m={};function h(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||p}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||p}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=h.prototype;var g=b.prototype=new y;g.constructor=b,v(g,h.prototype),g.isPureReactComponent=!0;var w=Array.isArray,x=Object.prototype.hasOwnProperty,k={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function E(e,n,r){var o,a={},i=null,u=null;if(null!=n)for(o in void 0!==n.ref&&(u=n.ref),void 0!==n.key&&(i=""+n.key),n)x.call(n,o)&&!j.hasOwnProperty(o)&&(a[o]=n[o]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var c=Array(l),s=0;s<l;s++)c[s]=arguments[s+2];a.children=c}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===a[o]&&(a[o]=l[o]);return{$$typeof:t,type:e,key:i,ref:u,props:a,_owner:k.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var P=/\/+/g;function C(e,t){var n,r;return"object"==typeof e&&null!==e&&null!=e.key?(n=""+e.key,r={"=":"=0",":":"=2"},"$"+n.replace(/[=:]/g,function(e){return r[e]})):t.toString(36)}function _(e,r,o){if(null==e)return e;var a=[],i=0;return!function e(r,o,a,i,u){var l,c,s,f=typeof r;("undefined"===f||"boolean"===f)&&(r=null);var p=!1;if(null===r)p=!0;else switch(f){case"string":case"number":p=!0;break;case"object":switch(r.$$typeof){case t:case n:p=!0}}if(p)return u=u(p=r),r=""===i?"."+C(p,0):i,w(u)?(a="",null!=r&&(a=r.replace(P,"$&/")+"/"),e(u,o,a,"",function(e){return e})):null!=u&&(S(u)&&(l=u,c=a+(!u.key||p&&p.key===u.key?"":(""+u.key).replace(P,"$&/")+"/")+r,u={$$typeof:t,type:l.type,key:c,ref:l.ref,props:l.props,_owner:l._owner}),o.push(u)),1;if(p=0,i=""===i?".":i+":",w(r))for(var v=0;v<r.length;v++){var m=i+C(f=r[v],v);p+=e(f,o,a,m,u)}else if("function"==typeof(m=null===(s=r)||"object"!=typeof s?null:"function"==typeof(s=d&&s[d]||s["@@iterator"])?s:null))for(r=m.call(r),v=0;!(f=r.next()).done;)m=i+C(f=f.value,v++),p+=e(f,o,a,m,u);else if("object"===f)throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(o=String(r))?"object with keys {"+Object.keys(r).join(", ")+"}":o)+"). If you meant to render a collection of children, use an array instead.");return p}(e,a,"","",function(e){return r.call(o,e,i++)}),a}function N(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R={current:null},O={transition:null};e.Children={map:_,forEach:function(e,t,n){_(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return _(e,function(){t++}),t},toArray:function(e){return _(e,function(e){return e})||[]},only:function(e){if(!S(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},e.Component=h,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=o,e.Suspense=c,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:O,ReactCurrentOwner:k},e.cloneElement=function(e,n,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=v({},e.props),a=e.key,i=e.ref,u=e._owner;if(null!=n){if(void 0!==n.ref&&(i=n.ref,u=k.current),void 0!==n.key&&(a=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in n)x.call(n,c)&&!j.hasOwnProperty(c)&&(o[c]=void 0===n[c]&&void 0!==l?l[c]:n[c])}var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){l=Array(c);for(var s=0;s<c;s++)l[s]=arguments[s+2];o.children=l}return{$$typeof:t,type:e.type,key:a,ref:i,props:o,_owner:u}},e.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},e.createElement=E,e.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:l,render:e}},e.isValidElement=S,e.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:N}},e.memo=function(e,t){return{$$typeof:s,type:e,compare:void 0===t?null:t}},e.startTransition=function(e){var t=O.transition;O.transition={};try{e()}finally{O.transition=t}},e.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},e.useCallback=function(e,t){return R.current.useCallback(e,t)},e.useContext=function(e){return R.current.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e){return R.current.useDeferredValue(e)},e.useEffect=function(e,t){return R.current.useEffect(e,t)},e.useId=function(){return R.current.useId()},e.useImperativeHandle=function(e,t,n){return R.current.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return R.current.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return R.current.useLayoutEffect(e,t)},e.useMemo=function(e,t){return R.current.useMemo(e,t)},e.useReducer=function(e,t,n){return R.current.useReducer(e,t,n)},e.useRef=function(e){return R.current.useRef(e)},e.useState=function(e){return R.current.useState(e)},e.useSyncExternalStore=function(e,t,n){return R.current.useSyncExternalStore(e,t,n)},e.useTransition=function(){return R.current.useTransition()},e.version="18.2.0"}});O({"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.development.js"(e,t){}});var I=(a=null!=(r=O({"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"(e,t){t.exports=B()}})())?S(N(r)):{},((e,t,n,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of _(t))R.call(e,o)||o===n||P(e,o,{get:()=>t[o],enumerable:!(r=C(t,o))||r.enumerable});return e})(!o&&r&&r.__esModule?a:P(a,"default",{value:r,enumerable:!0}),r)),M=(e,t)=>{var n;let r=[];return[null==(n=I.Children.map(e,e=>(0,I.isValidElement)(e)&&e.type===t?(r.push(e),null):e))?void 0:n.filter(Boolean),r.length>=0?r:void 0]},L=n(8522),T=n(1673),$=n(2560),W=n(5893),A=(0,s.Gp)((e,t)=>{let{children:n,...r}=e,o=function(e){var t,n;let r=(0,c.w)(),[o,a]=(0,s.oe)(e,p.variantKeys),{ref:i,as:u,parentRef:l,height:f="4rem",shouldHideOnScroll:d=!1,disableScrollHandler:w=!1,onScrollPositionChange:x,isMenuOpen:E,isMenuDefaultOpen:S,onMenuOpenChange:P=()=>{},motionProps:C,className:_,classNames:N,...R}=o,O=null!=(n=null!=(t=e.disableAnimation)?t:null==r?void 0:r.disableAnimation)&&n,B=(0,v.gy)(i),I=(0,b.useRef)(0),M=(0,b.useRef)(0),[L,T]=(0,b.useState)(!1),$=(0,b.useCallback)(e=>{P(e||!1)},[P]),[W,A]=(0,j.z)(E,null!=S&&S,$),D=()=>{if(B.current){let e=B.current.offsetWidth;e!==I.current&&(I.current=e)}};!function(e){let{ref:t,onResize:n}=e;(0,b.useEffect)(()=>{let e=null==t?void 0:t.current;if(e){if(!(void 0!==window.ResizeObserver))return window.addEventListener("resize",n,!1),()=>{window.removeEventListener("resize",n,!1)};{let t=new window.ResizeObserver(e=>{e.length&&n()});return t.observe(e),()=>{e&&t.unobserve(e)}}}},[n,t])}({ref:B,onResize:()=>{var e;(null==(e=B.current)?void 0:e.offsetWidth)!==I.current&&(D(),A(!1))}}),(0,b.useEffect)(()=>{var e;D(),M.current=(null==(e=B.current)?void 0:e.offsetHeight)||0},[]);let z=(0,b.useMemo)(()=>p({...a,disableAnimation:O,hideOnScroll:d}),[(0,m.Xx)(a),O,d]),U=(0,h.W)(null==N?void 0:N.base,_);return k({elementRef:l,isEnabled:d||!w,callback:({prevPos:e,currPos:t})=>{null==x||x(t.y),d&&T(n=>{let r=t.y>e.y&&t.y>M.current;return r!==n?r:n})}}),{Component:u||"nav",slots:z,domRef:B,height:f,isHidden:L,disableAnimation:O,shouldHideOnScroll:d,isMenuOpen:W,classNames:N,setIsMenuOpen:A,motionProps:C,getBaseProps:(e={})=>({...(0,g.d)(R,e),"data-hidden":(0,y.PB)(L),"data-menu-open":(0,y.PB)(W),ref:B,className:z.base({class:(0,h.W)(U,null==e?void 0:e.className)}),style:{"--navbar-height":f,...null==R?void 0:R.style,...null==e?void 0:e.style}}),getWrapperProps:(e={})=>({...e,"data-menu-open":(0,y.PB)(W),className:z.wrapper({class:(0,h.W)(null==N?void 0:N.wrapper,null==e?void 0:e.className)})})}}({...r,ref:t}),a=o.Component,[u,f]=M(n,i.$),d=(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)("header",{...o.getWrapperProps(),children:u}),f]});return(0,W.jsx)(E.V,{value:o,children:o.shouldHideOnScroll?(0,W.jsx)(L.X,{features:T.H,children:(0,W.jsx)($.m.nav,{animate:o.isHidden?"hidden":"visible",initial:!1,variants:l,...(0,g.d)(o.getBaseProps(),o.motionProps),children:d})}):(0,W.jsx)(a,{...o.getBaseProps(),children:d})})});A.displayName="NextUI.Navbar";var D=A},4633:function(e,t,n){n.d(t,{L:function(){return y}});var r=n(3123),o=n(1086),a=n(7127),i=n(7316),u=n(5607),l=n(3295),c=n(9869),s=n(262),f=n(9373),d=n(2459),p=n(8419),v=n(7294),m=n(5893),h=(0,u.Gp)((e,t)=>{var n;let{as:u,icon:h,className:y,onChange:b,autoFocus:g,srOnlyText:w,...x}=e,k=(0,l.gy)(t),{slots:j,classNames:E,isMenuOpen:S,setIsMenuOpen:P}=(0,r.q)(),C=function(e={}){let{isReadOnly:t}=e,[n,r]=(0,f.z)(e.isSelected,e.defaultSelected||!1,e.onChange);return{isSelected:n,setSelected:function(e){t||r(e)},toggle:function(){t||r(!n)}}}({...x,isSelected:S,onChange:e=>{null==b||b(e),P(e)}}),{buttonProps:_,isPressed:N}=function(e,t,n){let{isSelected:r}=t,{isPressed:u,buttonProps:l}=(0,i.j)({...e,onPress:(0,o.t)(t.toggle,e.onPress)},n);return{isPressed:u,buttonProps:(0,a.d)(l,{"aria-pressed":r})}}(e,C,k),{isFocusVisible:R,focusProps:O}=(0,d.F)({autoFocus:g}),{isHovered:B,hoverProps:I}=(0,p.X)({}),M=(0,c.W)(null==E?void 0:E.toggle,y),L=(0,v.useMemo)(()=>"function"==typeof h?h(null!=S&&S):h||(0,m.jsx)("span",{className:j.toggleIcon({class:null==E?void 0:E.toggleIcon})}),[h,S,j.toggleIcon,null==E?void 0:E.toggleIcon]),T=(0,v.useMemo)(()=>w||(C.isSelected?"close navigation menu":"open navigation menu"),[w,S]);return(0,m.jsxs)(u||"button",{ref:k,className:null==(n=j.toggle)?void 0:n.call(j,{class:M}),"data-focus-visible":(0,s.PB)(R),"data-hover":(0,s.PB)(B),"data-open":(0,s.PB)(S),"data-pressed":(0,s.PB)(N),...(0,a.d)(_,O,I,x),children:[(0,m.jsx)("span",{className:j.srOnly(),children:T}),L]})});h.displayName="NextUI.NavbarMenuToggle";var y=h},3123:function(e,t,n){n.d(t,{V:function(){return r},q:function(){return o}});var[r,o]=(0,n(6347).k)({name:"NavbarContext",strict:!0,errorMessage:"useNavbarContext: `context` is undefined. Seems you forgot to wrap component within <Navbar />"})},7311:function(e,t,n){n.d(t,{k:function(){return s}});var r=n(3123),o=n(5607),a=n(3295),i=n(9869),u=n(262),l=n(5893),c=(0,o.Gp)((e,t)=>{var n;let{as:o,className:c,children:s,isActive:f,...d}=e,p=(0,a.gy)(t),{slots:v,classNames:m}=(0,r.q)(),h=(0,i.W)(null==m?void 0:m.item,c);return(0,l.jsx)(o||"li",{ref:p,className:null==(n=v.item)?void 0:n.call(v,{class:h}),"data-active":(0,u.PB)(f),...d,children:s})});c.displayName="NextUI.NavbarItem";var s=c},9479:function(e,t,n){n.d(t,{U:function(){return c}});var r=n(3123),o=n(5607),a=n(3295),i=n(9869),u=n(5893),l=(0,o.Gp)((e,t)=>{var n;let{as:o,className:l,children:c,justify:s="start",...f}=e,d=(0,a.gy)(t),{slots:p,classNames:v}=(0,r.q)(),m=(0,i.W)(null==v?void 0:v.content,l);return(0,u.jsx)(o||"ul",{ref:d,className:null==(n=p.content)?void 0:n.call(p,{class:m}),"data-justify":s,...f,children:c})});l.displayName="NextUI.NavbarContent";var c=l},7666:function(e,t,n){n.d(t,{$:function(){return es}});var r,o,a,i,u,l,c,s=n(3123),f={enter:{height:"calc(100vh - var(--navbar-height))",transition:{duration:.3,easings:"easeOut"}},exit:{height:0,transition:{duration:.25,easings:"easeIn"}}},d=n(5607),p=n(3295),v=n(9869),m=n(262),h=n(3114),y=n(8522),b=n(1673),g=n(2560),w=n(7127),x=n(7294),k=function(){return(k=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function j(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}"function"==typeof SuppressedError&&SuppressedError;var E="right-scroll-bar-position",S="width-before-scroll-bar";function P(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var C="undefined"!=typeof window?x.useLayoutEffect:x.useEffect,_=new WeakMap,N=(void 0===r&&(r={}),(void 0===o&&(o=function(e){return e}),a=[],i=!1,u={read:function(){if(i)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return a.length?a[a.length-1]:null},useMedium:function(e){var t=o(e,i);return a.push(t),function(){a=a.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(i=!0;a.length;){var t=a;a=[],t.forEach(e)}a={push:function(t){return e(t)},filter:function(){return a}}},assignMedium:function(e){i=!0;var t=[];if(a.length){var n=a;a=[],n.forEach(e),t=a}var r=function(){var n=t;t=[],n.forEach(e)},o=function(){return Promise.resolve().then(r)};o(),a={push:function(e){t.push(e),o()},filter:function(e){return t=t.filter(e),a}}}}).options=k({async:!0,ssr:!1},r),u),R=function(){},O=x.forwardRef(function(e,t){var n,r,o,a,i=x.useRef(null),u=x.useState({onScrollCapture:R,onWheelCapture:R,onTouchMoveCapture:R}),l=u[0],c=u[1],s=e.forwardProps,f=e.children,d=e.className,p=e.removeScrollBar,v=e.enabled,m=e.shards,h=e.sideCar,y=e.noIsolation,b=e.inert,g=e.allowPinchZoom,w=e.as,E=e.gapMode,S=j(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),O=(n=[i,t],r=function(e){return n.forEach(function(t){return P(t,e)})},(o=(0,x.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,a=o.facade,C(function(){var e=_.get(a);if(e){var t=new Set(e),r=new Set(n),o=a.current;t.forEach(function(e){r.has(e)||P(e,null)}),r.forEach(function(e){t.has(e)||P(e,o)})}_.set(a,n)},[n]),a),B=k(k({},S),l);return x.createElement(x.Fragment,null,v&&x.createElement(h,{sideCar:N,removeScrollBar:p,shards:m,noIsolation:y,inert:b,setCallbacks:c,allowPinchZoom:!!g,lockRef:i,gapMode:E}),s?x.cloneElement(x.Children.only(f),k(k({},B),{ref:O})):x.createElement(void 0===w?"div":w,k({},B,{className:d,ref:O}),f))});O.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},O.classNames={fullWidth:S,zeroRight:E};var B=function(e){var t=e.sideCar,n=j(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return x.createElement(r,k({},n))};B.isSideCarExport=!0;var I=function(){var e=0,t=null;return{add:function(r){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=c||n.nc;return t&&e.setAttribute("nonce",t),e}())){var o,a;(o=t).styleSheet?o.styleSheet.cssText=r:o.appendChild(document.createTextNode(r)),a=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(a)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},M=function(){var e=I();return function(t,n){x.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},L=function(){var e=M();return function(t){return e(t.styles,t.dynamic),null}},T={left:0,top:0,right:0,gap:0},$=function(e){return parseInt(e||"",10)||0},W=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[$(n),$(r),$(o)]},A=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return T;var t=W(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},D=L(),z="data-scroll-locked",U=function(e,t,n,r){var o=e.left,a=e.top,i=e.right,u=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(u,"px ").concat(r,";\n  }\n  body[").concat(z,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(i,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(u,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(E," {\n    right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(S," {\n    margin-right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(E," .").concat(E," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(S," .").concat(S," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(z,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(u,"px;\n  }\n")},V=function(){var e=parseInt(document.body.getAttribute(z)||"0",10);return isFinite(e)?e:0},X=function(){x.useEffect(function(){return document.body.setAttribute(z,(V()+1).toString()),function(){var e=V()-1;e<=0?document.body.removeAttribute(z):document.body.setAttribute(z,e.toString())}},[])},q=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r;X();var a=x.useMemo(function(){return A(o)},[o]);return x.createElement(D,{styles:U(a,!t,o,n?"":"!important")})},F=!1;if("undefined"!=typeof window)try{var H=Object.defineProperty({},"passive",{get:function(){return F=!0,!0}});window.addEventListener("test",H,H),window.removeEventListener("test",H,H)}catch(e){F=!1}var Y=!!F&&{passive:!1},G=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},Z=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),K(e,r)){var o=J(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},K=function(e,t){return"v"===e?G(t,"overflowY"):G(t,"overflowX")},J=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},Q=function(e,t,n,r,o){var a,i=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),u=i*r,l=n.target,c=t.contains(l),s=!1,f=u>0,d=0,p=0;do{var v=J(e,l),m=v[0],h=v[1]-v[2]-i*m;(m||h)&&K(e,l)&&(d+=h,p+=m),l instanceof ShadowRoot?l=l.host:l=l.parentNode}while(!c&&l!==document.body||c&&(t.contains(l)||t===l));return f&&(o&&1>Math.abs(d)||!o&&u>d)?s=!0:!f&&(o&&1>Math.abs(p)||!o&&-u>p)&&(s=!0),s},ee=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},et=function(e){return[e.deltaX,e.deltaY]},en=function(e){return e&&"current"in e?e.current:e},er=0,eo=[],ea=(l=function(e){var t=x.useRef([]),n=x.useRef([0,0]),r=x.useRef(),o=x.useState(er++)[0],a=x.useState(L)[0],i=x.useRef(e);x.useEffect(function(){i.current=e},[e]),x.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(function(e,t,n){if(n||2==arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(en),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var u=x.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!i.current.allowPinchZoom;var o,a=ee(e),u=n.current,l="deltaX"in e?e.deltaX:u[0]-a[0],c="deltaY"in e?e.deltaY:u[1]-a[1],s=e.target,f=Math.abs(l)>Math.abs(c)?"h":"v";if("touches"in e&&"h"===f&&"range"===s.type)return!1;var d=Z(f,s);if(!d)return!0;if(d?o=f:(o="v"===f?"h":"v",d=Z(f,s)),!d)return!1;if(!r.current&&"changedTouches"in e&&(l||c)&&(r.current=o),!o)return!0;var p=r.current||o;return Q(p,t,e,"h"===p?l:c,!0)},[]),l=x.useCallback(function(e){if(eo.length&&eo[eo.length-1]===a){var n="deltaY"in e?et(e):ee(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(i.current.shards||[]).map(en).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?u(e,o[0]):!i.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),c=x.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),s=x.useCallback(function(e){n.current=ee(e),r.current=void 0},[]),f=x.useCallback(function(t){c(t.type,et(t),t.target,u(t,e.lockRef.current))},[]),d=x.useCallback(function(t){c(t.type,ee(t),t.target,u(t,e.lockRef.current))},[]);x.useEffect(function(){return eo.push(a),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:d}),document.addEventListener("wheel",l,Y),document.addEventListener("touchmove",l,Y),document.addEventListener("touchstart",s,Y),function(){eo=eo.filter(function(e){return e!==a}),document.removeEventListener("wheel",l,Y),document.removeEventListener("touchmove",l,Y),document.removeEventListener("touchstart",s,Y)}},[]);var p=e.removeScrollBar,v=e.inert;return x.createElement(x.Fragment,null,v?x.createElement(a,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,p?x.createElement(q,{gapMode:e.gapMode}):null)},N.useMedium(l),B),ei=x.forwardRef(function(e,t){return x.createElement(O,k({},e,{ref:t,sideCar:ea}))});ei.classNames=O.classNames;var eu=n(5299),el=n(5893),ec=(0,d.Gp)((e,t)=>{var n,r;let{className:o,children:a,portalContainer:i,motionProps:u,style:l,...c}=e,d=(0,p.gy)(t),{slots:k,isMenuOpen:j,height:E,disableAnimation:S,classNames:P}=(0,s.q)(),C=(0,v.W)(null==P?void 0:P.menu,o),_=(0,x.useCallback)(({children:e})=>(0,el.jsx)(ei,{forwardProps:!0,enabled:j,removeScrollBar:!1,children:e}),[j]),N=S?(0,el.jsx)(_,{children:(0,el.jsx)("ul",{ref:d,className:null==(n=k.menu)?void 0:n.call(k,{class:C}),"data-open":(0,m.PB)(j),style:{"--navbar-height":E},...c,children:a})}):(0,el.jsx)(h.M,{mode:"wait",children:j?(0,el.jsx)(y.X,{features:b.H,children:(0,el.jsx)(_,{children:(0,el.jsx)(g.m.ul,{ref:d,layoutScroll:!0,animate:"enter",className:null==(r=k.menu)?void 0:r.call(k,{class:C}),"data-open":(0,m.PB)(j),exit:"exit",initial:"exit",style:{"--navbar-height":E,...l},variants:f,...(0,w.d)(u,c),children:a})})}):null});return(0,el.jsx)(eu.aV,{portalContainer:i,children:N})});ec.displayName="NextUI.NavbarMenu";var es=ec},7806:function(e,t,n){n.d(t,{h:function(){return s}});var r=n(3123),o=n(5607),a=n(3295),i=n(9869),u=n(262),l=n(5893),c=(0,o.Gp)((e,t)=>{var n;let{className:o,children:c,isActive:s,...f}=e,d=(0,a.gy)(t),{slots:p,isMenuOpen:v,classNames:m}=(0,r.q)(),h=(0,i.W)(null==m?void 0:m.menuItem,o);return(0,l.jsx)("li",{ref:d,className:null==(n=p.menuItem)?void 0:n.call(p,{class:h}),"data-active":(0,u.PB)(s),"data-open":(0,u.PB)(v),...f,children:c})});c.displayName="NextUI.NavbarMenuItem";var s=c},5336:function(e,t,n){n.d(t,{H:function(){return c}});var r=n(3123),o=n(5607),a=n(3295),i=n(9869),u=n(5893),l=(0,o.Gp)((e,t)=>{var n;let{as:o,className:l,children:c,...s}=e,f=(0,a.gy)(t),{slots:d,classNames:p}=(0,r.q)(),v=(0,i.W)(null==p?void 0:p.brand,l);return(0,u.jsx)(o||"div",{ref:f,className:null==(n=d.brand)?void 0:n.call(d,{class:v}),...s,children:c})});l.displayName="NextUI.NavbarBrand";var c=l}}]);