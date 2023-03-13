/*! This file is auto-generated */
!function(){"use strict";var n={d:function(t,r){for(var e in r)n.o(r,e)&&!n.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:r[e]})},o:function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r:function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}},t={};n.r(t),n.d(t,{actions:function(){return S},addAction:function(){return v},addFilter:function(){return m},applyFilters:function(){return k},createHooks:function(){return h},currentAction:function(){return w},currentFilter:function(){return I},defaultHooks:function(){return f},didAction:function(){return O},didFilter:function(){return j},doAction:function(){return b},doingAction:function(){return x},doingFilter:function(){return T},filters:function(){return z},hasAction:function(){return _},hasFilter:function(){return g},removeAction:function(){return p},removeAllActions:function(){return y},removeAllFilters:function(){return F},removeFilter:function(){return A}});var r=function(n){return"string"!=typeof n||""===n?(console.error("The namespace must be a non-empty string."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(n)||(console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),!1)};var e=function(n){return"string"!=typeof n||""===n?(console.error("The hook name must be a non-empty string."),!1):/^__/.test(n)?(console.error("The hook name cannot begin with `__`."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(n)||(console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),!1)};var o=function(n,t){return function(o,i,c){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10;const u=n[t];if(!e(o))return;if(!r(i))return;if("function"!=typeof c)return void console.error("The hook callback must be a function.");if("number"!=typeof s)return void console.error("If specified, the hook priority must be a number.");const l={callback:c,priority:s,namespace:i};if(u[o]){const n=u[o].handlers;let t;for(t=n.length;t>0&&!(s>=n[t-1].priority);t--);t===n.length?n[t]=l:n.splice(t,0,l),u.__current.forEach((n=>{n.name===o&&n.currentIndex>=t&&n.currentIndex++}))}else u[o]={handlers:[l],runs:0};"hookAdded"!==o&&n.doAction("hookAdded",o,i,c,s)}};var i=function(n,t){let o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(i,c){const s=n[t];if(!e(i))return;if(!o&&!r(c))return;if(!s[i])return 0;let u=0;if(o)u=s[i].handlers.length,s[i]={runs:s[i].runs,handlers:[]};else{const n=s[i].handlers;for(let t=n.length-1;t>=0;t--)n[t].namespace===c&&(n.splice(t,1),u++,s.__current.forEach((n=>{n.name===i&&n.currentIndex>=t&&n.currentIndex--})))}return"hookRemoved"!==i&&n.doAction("hookRemoved",i,c),u}};var c=function(n,t){return function(r,e){const o=n[t];return void 0!==e?r in o&&o[r].handlers.some((n=>n.namespace===e)):r in o}};var s=function(n,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(e){const o=n[t];o[e]||(o[e]={handlers:[],runs:0}),o[e].runs++;const i=o[e].handlers;for(var c=arguments.length,s=new Array(c>1?c-1:0),u=1;u<c;u++)s[u-1]=arguments[u];if(!i||!i.length)return r?s[0]:void 0;const l={name:e,currentIndex:0};for(o.__current.push(l);l.currentIndex<i.length;){const n=i[l.currentIndex].callback.apply(null,s);r&&(s[0]=n),l.currentIndex++}return o.__current.pop(),r?s[0]:void 0}};var u=function(n,t){return function(){var r,e;const o=n[t];return null!==(r=null===(e=o.__current[o.__current.length-1])||void 0===e?void 0:e.name)&&void 0!==r?r:null}};var l=function(n,t){return function(r){const e=n[t];return void 0===r?void 0!==e.__current[0]:!!e.__current[0]&&r===e.__current[0].name}};var a=function(n,t){return function(r){const o=n[t];if(e(r))return o[r]&&o[r].runs?o[r].runs:0}};class d{constructor(){this.actions=Object.create(null),this.actions.__current=[],this.filters=Object.create(null),this.filters.__current=[],this.addAction=o(this,"actions"),this.addFilter=o(this,"filters"),this.removeAction=i(this,"actions"),this.removeFilter=i(this,"filters"),this.hasAction=c(this,"actions"),this.hasFilter=c(this,"filters"),this.removeAllActions=i(this,"actions",!0),this.removeAllFilters=i(this,"filters",!0),this.doAction=s(this,"actions"),this.applyFilters=s(this,"filters",!0),this.currentAction=u(this,"actions"),this.currentFilter=u(this,"filters"),this.doingAction=l(this,"actions"),this.doingFilter=l(this,"filters"),this.didAction=a(this,"actions"),this.didFilter=a(this,"filters")}}var h=function(){return new d};const f=h(),{addAction:v,addFilter:m,removeAction:p,removeFilter:A,hasAction:_,hasFilter:g,removeAllActions:y,removeAllFilters:F,doAction:b,applyFilters:k,currentAction:w,currentFilter:I,doingAction:x,doingFilter:T,didAction:O,didFilter:j,actions:S,filters:z}=f;(window.wp=window.wp||{}).hooks=t}()