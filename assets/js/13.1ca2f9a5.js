(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{100:function(t,n,e){"use strict";var r=e(65);e.n(r).a},101:function(t,n,e){"use strict";var r=e(66);e.n(r).a},102:function(t,n,e){"use strict";var r=e(67);e.n(r).a},103:function(t,n,e){"use strict";var r=e(68);e.n(r).a},104:function(t,n,e){"use strict";var r=e(69);e.n(r).a},105:function(t,n,e){"use strict";var r={name:"gulu-slider",data:function(){return{}}},a=(e(103),e(0)),i=Object(a.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"slider"},[this._t("default",[this._v("Slider")])],2)},[],!1,null,"39dd3bdc",null);n.a=i.exports},106:function(t,n,e){"use strict";var r={name:"gulu-content",data:function(){return{}}},a=(e(102),e(0)),i=Object(a.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content"},[this._t("default",[this._v("Content")])],2)},[],!1,null,"00c2ff45",null);n.a=i.exports},107:function(t,n,e){"use strict";var r={name:"gulu-header"},a=(e(101),e(0)),i=Object(a.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default",[this._v("Header")])],2)},[],!1,null,"470f8fb0",null);n.a=i.exports},108:function(t,n,e){"use strict";e(99),e(42),e(31);var r={name:"gulu-layout",data:function(){return{layoutClass:{hasSlider:!1}}},mounted:function(){var t=this;this.$children.forEach(function(n){"gulu-slider"===n.$options.name&&(t.layoutClass.hasSlider=!0)})}},a=(e(100),e(0)),i=Object(a.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)},[],!1,null,"6f4a9ea9",null);n.a=i.exports},109:function(t,n,e){"use strict";var r={name:"gulu-footer",data:function(){return{}}},a=(e(104),e(0)),i=Object(a.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default",[this._v("Footer")])],2)},[],!1,null,"379c9946",null);n.a=i.exports},157:function(t,n,e){},263:function(t,n,e){"use strict";var r=e(157);e.n(r).a},269:function(t,n,e){"use strict";e.r(n);e(26),e(29);var r=e(108),a=e(107),i=e(106),s=e(105),u=e(109),o={components:{"g-layout":r.a,"g-header":a.a,"g-content":i.a,"g-slider":s.a,"g-footer":u.a},data:function(){return{content:"\n        <g-layout>\n          <g-slider></g-slider>\n          <g-layout>\n              <g-header></g-header>\n              <g-content></g-content>\n              <g-footer></g-footer>\n          </g-layout>\n          <g-slider></g-slider>\n        </g-layout>\n        ".replace(/^ {8}/gm,"").trim(),show:!1}}},c=(e(263),e(0)),l=Object(c.a)(o,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{"padding-top":"16px"}},[e("h3",[t._v("左中右布局")]),t._v(" "),e("g-layout",[e("g-slider"),t._v(" "),e("g-layout",[e("g-header"),t._v(" "),e("g-content"),t._v(" "),e("g-footer")],1),t._v(" "),e("g-slider")],1),t._v(" "),e("p",{staticClass:"code",on:{click:function(n){t.show=!t.show}}},[e("strong",[t._v("展示代码")])]),t._v(" "),t.show?e("span",[e("pre",[e("code",[t._v(t._s(t.content))])])]):t._e()],1)},[],!1,null,"4b34ef64",null);n.default=l.exports},31:function(t,n,e){"use strict";var r=e(10),a=e(48)(0),i=e(25)([].forEach,!0);r(r.P+r.F*!i,"Array",{forEach:function(t){return a(this,t,arguments[1])}})},48:function(t,n,e){var r=e(43),a=e(46),i=e(38),s=e(28),u=e(85);t.exports=function(t,n){var e=1==t,o=2==t,c=3==t,l=4==t,f=6==t,d=5==t||f,v=n||u;return function(n,u,h){for(var g,_,p=i(n),y=a(p),m=r(u,h,3),b=s(y.length),w=0,x=e?v(n,b):o?v(n,0):void 0;b>w;w++)if((d||w in y)&&(_=m(g=y[w],w,p),t))if(e)x[w]=_;else if(_)switch(t){case 3:return!0;case 5:return g;case 6:return w;case 2:x.push(g)}else if(l)return!1;return f?-1:c||l?l:x}}},65:function(t,n,e){},66:function(t,n,e){},67:function(t,n,e){},68:function(t,n,e){},69:function(t,n,e){},85:function(t,n,e){var r=e(86);t.exports=function(t,n){return new(r(t))(n)}},86:function(t,n,e){var r=e(16),a=e(89),i=e(15)("species");t.exports=function(t){var n;return a(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!a(n.prototype)||(n=void 0),r(n)&&null===(n=n[i])&&(n=void 0)),void 0===n?Array:n}},99:function(t,n,e){var r=e(20).f,a=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in a||e(14)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})}}]);