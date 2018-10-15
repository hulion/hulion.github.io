// 手淘REM
!function(n,e){function t(){var e=i.getBoundingClientRect().width;540<e/s&&(e=540*s);var t=e/10;i.style.fontSize=t+"px",l.rem=n.rem=t}var o=n.document,i=o.documentElement,a=o.querySelector('meta[name="viewport"]'),r=o.querySelector('meta[name="flexible"]'),s=0,c=0,u,l=e.flexible||(e.flexible={});if(a){
// console.warn('修正Rem完畢-Lion');
var p=a.getAttribute("content").match(/initial\-scale=([\d\.]+)/);p&&(c=parseFloat(p[1]),s=parseInt(1/c))}else if(r){var d=r.getAttribute("content");if(d){var v=d.match(/initial\-dpr=([\d\.]+)/),h=d.match(/maximum\-dpr=([\d\.]+)/);v&&(s=parseFloat(v[1]),c=parseFloat((1/s).toFixed(2))),h&&(s=parseFloat(h[1]),c=parseFloat((1/s).toFixed(2)))}}if(!s&&!c){var f=n.navigator.appVersion.match(/android/gi),m=n.navigator.appVersion.match(/iphone/gi),g=n.devicePixelRatio;c=1/(s=m?
// iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
3<=g&&(!s||3<=s)?3:2<=g&&(!s||2<=s)?2:1:1)}if(i.setAttribute("data-dpr",s),!a)if((a=o.createElement("meta")).setAttribute("name","viewport"),a.setAttribute("content","initial-scale="+c+", maximum-scale="+c+", minimum-scale="+c+", user-scalable=no"),i.firstElementChild)i.firstElementChild.appendChild(a);else{var w=o.createElement("div");w.appendChild(a),o.write(w.innerHTML)}n.addEventListener("resize",function(){clearTimeout(u),u=setTimeout(t,300)},!1),n.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(u),u=setTimeout(t,300))},!1),"complete"===o.readyState?o.body.style.fontSize=12*s+"px":o.addEventListener("DOMContentLoaded",function(e){o.body.style.fontSize=12*s+"px"},!1),t(),l.dpr=n.dpr=s,l.refreshRem=t,l.rem2px=function(e){var t=parseFloat(e)*this.rem;return"string"==typeof e&&e.match(/rem$/)&&(t+="px"),t},l.px2rem=function(e){var t=parseFloat(e)/this.rem;return"string"==typeof e&&e.match(/px$/)&&(t+="rem"),t}}(window,window.lib||(window.lib={})),
/*! jQuery Mobile v1.4.5 */
function(t,n,o){"function"==typeof define&&define.amd?define(["jquery"],function(e){return o(e,t,n),e.mobile}):o(t.jQuery,t,n)}(this,document,function(e,t,o,n){var i,a,r,s;(function(d,e,t,v){function h(e){for(;e&&void 0!==e.originalEvent;)e=e.originalEvent;return e}function i(e,t){var n=e.type,o,i,a,r,s,c,u,l,p;if((e=d.Event(e)).type=t,o=e.originalEvent,i=d.event.props,-1<n.search(/^(mouse|click)/)&&(i=P),o)for(u=i.length;u;)e[r=i[--u]]=o[r];if(-1<n.search(/mouse(down|up)|click/)&&!e.which&&(e.which=1),-1!==n.search(/^touch/)&&(n=(a=h(o)).touches,s=a.changedTouches,c=n&&n.length?n[0]:s&&s.length?s[0]:v))for(l=0,p=C.length;l<p;l++)e[r=C[l]]=c[r];return e}function a(e){for(var t={},n,o;e;){for(o in n=d.data(e,x))n[o]&&(t[o]=t.hasVirtualBinding=!0);e=e.parentNode}return t}function r(e,t){for(var n;e;){if((n=d.data(e,x))&&(!t||n[t]))return e;e=e.parentNode}return null}function n(){L=!1}function s(){L=!0}function o(){H=0,Y.length=0,F=!1,s()}function c(){n()}function u(){l(),M=setTimeout(function(){M=0,o()},d.vmouse.resetTimerDuration)}function l(){M&&(clearTimeout(M),M=0)}function p(e,t,n){var o;return(n&&n[e]||!n&&r(t.target,e))&&(o=i(t,e),d(t.target).trigger(o)),o}function f(e){var t=d.data(e.target,y),n;!F&&(!H||H!==t)&&((n=p("v"+e.type,e))&&(n.isDefaultPrevented()&&e.preventDefault(),n.isPropagationStopped()&&e.stopPropagation(),n.isImmediatePropagationStopped()&&e.stopImmediatePropagation()))}function m(e){var t=h(e).touches,n,o,i;t&&1===t.length&&((o=a(n=e.target)).hasVirtualBinding&&(H=A++,d.data(n,y,H),l(),c(),X=!1,i=h(e).touches[0],I=i.pageX,S=i.pageY,p("vmouseover",e,o),p("vmousedown",e,o)))}function g(e){L||(X||p("vmousecancel",e,a(e.target)),X=!0,u())}function w(e){if(!L){var t=h(e).touches[0],n=X,o=d.vmouse.moveDistanceThreshold,i=a(e.target);(X=X||Math.abs(t.pageX-I)>o||Math.abs(t.pageY-S)>o)&&!n&&p("vmousecancel",e,i),p("vmousemove",e,i),u()}}function b(e){if(!L){s();var t=a(e.target),n,o;p("vmouseup",e,t),X||(n=p("vclick",e,t))&&n.isDefaultPrevented()&&(o=h(e).changedTouches[0],Y.push({touchID:H,x:o.clientX,y:o.clientY}),F=!0),p("vmouseout",e,t),X=!1,u()}}function _(e){var t=d.data(e,x),n;if(t)for(n in t)if(t[n])return!0;return!1}function $(){}function T(n){var o=n.substr(1);return{setup:function(){var e;_(this)||d.data(this,x,{}),d.data(this,x)[n]=!0,k[n]=(k[n]||0)+1,1===k[n]&&z.bind(o,f),d(this).bind(o,$),O&&(k.touchstart=(k.touchstart||0)+1,1===k.touchstart&&z.bind("touchstart",m).bind("touchend",b).bind("touchmove",w).bind("scroll",g))},teardown:function(){--k[n],k[n]||z.unbind(o,f),O&&(--k.touchstart,k.touchstart||z.unbind("touchstart",m).unbind("touchmove",w).unbind("touchend",b).unbind("scroll",g));var e=d(this),t=d.data(this,x);t&&(t[n]=!1),e.unbind(o,$),_(this)||e.removeData(x)}}}var x="virtualMouseBindings",y="virtualTouchID",D="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),C="clientX clientY pageX pageY screenX screenY".split(" "),E=d.event.mouseHooks?d.event.mouseHooks.props:[],P=d.event.props.concat(E),k={},M=0,I=0,S=0,X=!1,Y=[],F=!1,L=!1,O="addEventListener"in t,z=d(t),A=1,H=0,N,B;for(d.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500},B=0;B<D.length;B++)d.event.special[D[B]]=T(D[B]);O&&t.addEventListener("click",function(e){var t=Y.length,n=e.target,o,i,a,r,s,c;if(t)for(o=e.clientX,i=e.clientY,N=d.vmouse.clickDistanceThreshold,a=n;a;){for(r=0;r<t;r++)if(s=Y[r],c=0,a===n&&Math.abs(s.x-o)<N&&Math.abs(s.y-i)<N||d.data(a,y)===s.touchID)return e.preventDefault(),void e.stopPropagation();a=a.parentNode}},!0)})(e,t,o),(s=e).mobile={},r={touch:"ontouchend"in o},(i=e).mobile.support=i.mobile.support||{},i.extend(i.support,r),i.extend(i.mobile.support,r),function(u,a,r){function l(e,t,n,o){var i=n.type;n.type=t,o?u.event.trigger(n,r,e):u.event.dispatch.call(e,n),n.type=i}var p=u(o),e=u.mobile.support.touch,s="touchmove scroll",n=e?"touchstart":"mousedown",c=e?"touchend":"mouseup",d=e?"touchmove":"mousemove";u.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(e,t){u.fn[t]=function(e){return e?this.bind(t,e):this.trigger(t)},u.attrFn&&(u.attrFn[t]=!0)}),u.event.special.scrollstart={enabled:!0,setup:function(){function t(e,t){l(n,(o=t)?"scrollstart":"scrollstop",e)}var n=this,e,o,i;u(n).bind(s,function(e){u.event.special.scrollstart.enabled&&(o||t(e,!0),clearTimeout(i),i=setTimeout(function(){t(e,!1)},50))})},teardown:function(){u(this).unbind(s)}},u.event.special.tap={tapholdThreshold:750,emitTapOnTaphold:!0,setup:function(){var r=this,s=u(r),c=!1;s.bind("vmousedown",function(e){function t(){clearTimeout(a)}function n(){t(),s.unbind("vclick",o).unbind("vmouseup",t),p.unbind("vmousecancel",n)}function o(e){n(),c||i!==e.target?c&&e.preventDefault():l(r,"tap",e)}if(c=!1,e.which&&1!==e.which)return!1;var i=e.target,a;s.bind("vmouseup",t).bind("vclick",o),p.bind("vmousecancel",n),a=setTimeout(function(){u.event.special.tap.emitTapOnTaphold||(c=!0),l(r,"taphold",u.Event("taphold",{target:i}))},u.event.special.tap.tapholdThreshold)})},teardown:function(){u(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"),p.unbind("vmousecancel")}},u.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:30,getLocation:function(e){var t=a.pageXOffset,n=a.pageYOffset,o=e.clientX,i=e.clientY;return 0===e.pageY&&Math.floor(i)>Math.floor(e.pageY)||0===e.pageX&&Math.floor(o)>Math.floor(e.pageX)?(o-=t,i-=n):(i<e.pageY-n||o<e.pageX-t)&&(o=e.pageX-t,i=e.pageY-n),{x:o,y:i}},start:function(e){var t=e.originalEvent.touches?e.originalEvent.touches[0]:e,n=u.event.special.swipe.getLocation(t);return{time:(new Date).getTime(),coords:[n.x,n.y],origin:u(e.target)}},stop:function(e){var t=e.originalEvent.touches?e.originalEvent.touches[0]:e,n=u.event.special.swipe.getLocation(t);return{time:(new Date).getTime(),coords:[n.x,n.y]}},handleSwipe:function(e,t,n,o){if(t.time-e.time<u.event.special.swipe.durationThreshold&&Math.abs(e.coords[0]-t.coords[0])>u.event.special.swipe.horizontalDistanceThreshold&&Math.abs(e.coords[1]-t.coords[1])<u.event.special.swipe.verticalDistanceThreshold){var i=e.coords[0]>t.coords[0]?"swipeleft":"swiperight";return l(n,"swipe",u.Event("swipe",{target:o,swipestart:e,swipestop:t}),!0),l(n,i,u.Event(i,{target:o,swipestart:e,swipestop:t}),!0),!0}return!1},eventInProgress:!1,setup:function(){var e,a=this,t=u(a),r={};(e=u.data(this,"mobile-events"))||(e={length:0},u.data(this,"mobile-events",e)),e.length++,(e.swipe=r).start=function(e){if(!u.event.special.swipe.eventInProgress){u.event.special.swipe.eventInProgress=!0;var t,n=u.event.special.swipe.start(e),o=e.target,i=!1;r.move=function(e){n&&!e.isDefaultPrevented()&&(t=u.event.special.swipe.stop(e),i||(i=u.event.special.swipe.handleSwipe(n,t,a,o))&&(u.event.special.swipe.eventInProgress=!1),Math.abs(n.coords[0]-t.coords[0])>u.event.special.swipe.scrollSupressionThreshold&&e.preventDefault())},r.stop=function(){i=!0,u.event.special.swipe.eventInProgress=!1,p.off(d,r.move),r.move=null},p.on(d,r.move).one(c,r.stop)}},t.on(n,r.start)},teardown:function(){var e,t;(e=u.data(this,"mobile-events"))&&(t=e.swipe,delete e.swipe,e.length--,0===e.length&&u.removeData(this,"mobile-events")),t&&(t.start&&u(this).off(n,t.start),t.move&&p.off(d,t.move),t.stop&&p.off(c,t.stop))}},u.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe.left",swiperight:"swipe.right"},function(e,t){u.event.special[e]={setup:function(){u(this).bind(t,u.noop)},teardown:function(){u(this).unbind(t)}}})}(e,this)}),
// 輪播
$(window).load(function(){$(".flexslider").flexslider({animation:"slide",/*fade or slide 動態淡入淡出或是滑動*/
direction:"horizontal",/*horizontal or vertical 垂直水平*/
slideshowSpeed:3e3,/*輪播速度*/
pauseOnHover:"true",/*true or false 移入內容是否停止*/
mousewheel:!1,controlNav:!1,directionNav:!0,touch:!0,prevText:"",nextText:"",startAt:0})}),
// Lion JS
$(function(){
// 首頁菜單動態
$(".btn__menu").on("tap",function(){$(".menu__nav--wrap").addClass("active"),$(".H5__content").delay(250).fadeOut(),$(".footer__nav--wrap").delay(250).fadeOut()}),$(".btn__back--wrap").on("tap",function(){$(".H5__content").fadeIn(),$(".footer__nav--wrap").fadeIn(),$(".menu__nav--wrap").removeClass("active"),$(this).parents().find(".second__menu").slideUp(),$(this).parents().find(".nav__btn--slide i").removeClass("active")}),
// 次選單動態
$(".nav__btn--slide").on("tap",function(){$(this).children("i").toggleClass("active"),$(this).parents().children(".second__menu").slideToggle()}),$(".second__menu li").on("tap",function(){$(".second__menu li a").removeClass("active"),$(this).children("a").addClass("active")}),
// input 動態
$(".input-text").focus(function(){$(this).parents().children(".reset-x").addClass("show")}),$(".input-text").focusout(function(){$(this).parents().children(".reset-x").removeClass("show")}),
// 下方按鈕區塊
$(".footer__nav--wrap ul li a").on("vmouseover",function(){$(".footer__nav--wrap ul li a i").removeClass("over"),$(this).children("i").addClass("over")}),$(".footer__nav--wrap ul li a").on("vmouseout",function(){$(".footer__nav--wrap ul li a i").removeClass("over")}),$(".footer__nav--wrap ul li a").on("taphold",function(){$(".footer__nav--wrap ul li a i").removeClass("over")}),
// 更多影片按鈕
$(".more__wrap a").on("vmouseover",function(){$(this).addClass("over")}),$(".more__wrap a").on("vmouseout",function(){$(".more__wrap a").removeClass("over")}),$(".more__wrap a").on("taphold",function(){$(".more__wrap a").removeClass("over")}),$(".btn-close").click(function(){$(".pop_up-wrap").addClass("active")}),$(".vipPay_wrap li").click(function(){$(".vipPay_wrap li").removeClass("active"),$(this).addClass("active")})});