(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{148:function(t,n,r){},254:function(t,n,r){"use strict";var e=r(148);r.n(e).a},273:function(t,n,r){"use strict";r.r(n);r(26),r(29);var e=r(80),s=r(79),i={components:{"g-col":e.a,"g-row":s.a},data:function(){return{content:'\n        <g-row gutter="20">\n            <g-col span="6"><div class="grid-content bg-purple"></div></g-col>\n            <g-col span="6" offset="6"><div class="grid-content bg-purple"></div></g-col>\n        </g-row>\n        <br>\n        <g-row gutter="20">\n            <g-col span="4" offset="6"><div class="grid-content bg-purple"></div></g-col>\n            <g-col span="4" offset="6"><div class="grid-content bg-purple"></div></g-col>\n        </g-row>\n        <br>\n        <g-row gutter="20">\n            <g-col span="14" offset="6"><div class="grid-content bg-purple"></div></g-col>\n        </g-row>\n        '.replace(/^ {8}/gm,"").trim(),show:!1}}},c=(r(254),r(0)),a=Object(c.a)(i,function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticStyle:{"padding-top":"16px"}},[r("h2",[t._v("分栏偏移")]),t._v(" "),r("p",{staticClass:"p1"},[t._v("支持偏移指定的栏数。")]),t._v(" "),r("div",{staticClass:"div1",staticStyle:{"padding-top":"20px"}},[r("g-row",{attrs:{gutter:"20"}},[r("g-col",{attrs:{span:"6"}},[r("div",{staticClass:"grid-content bg-purple"})]),t._v(" "),r("g-col",{attrs:{span:"6",offset:"6"}},[r("div",{staticClass:"grid-content bg-purple"})])],1),t._v(" "),r("br"),t._v(" "),r("g-row",{attrs:{gutter:"20"}},[r("g-col",{attrs:{span:"4",offset:"6"}},[r("div",{staticClass:"grid-content bg-purple"})]),t._v(" "),r("g-col",{attrs:{span:"4",offset:"6"}},[r("div",{staticClass:"grid-content bg-purple"})])],1),t._v(" "),r("br"),t._v(" "),r("g-row",{attrs:{gutter:"20"}},[r("g-col",{attrs:{span:"14",offset:"6"}},[r("div",{staticClass:"grid-content bg-purple"})])],1)],1),t._v(" "),r("p",{staticClass:"code",on:{click:function(n){t.show=!t.show}}},[r("strong",[t._v("展示代码")])]),t._v(" "),t.show?r("span",[r("pre",[r("code",[t._v(t._s(t.content))])])]):t._e()])},[],!1,null,"2f85e750",null);n.default=a.exports},31:function(t,n,r){"use strict";var e=r(10),s=r(48)(0),i=r(25)([].forEach,!0);e(e.P+e.F*!i,"Array",{forEach:function(t){return s(this,t,arguments[1])}})},35:function(t,n,r){},36:function(t,n,r){},49:function(t,n,r){"use strict";var e=r(11),s=r(24),i=r(23),c=r(90),a=r(33),o=r(12),u=r(70).f,l=r(82).f,p=r(20).f,f=r(44).trim,g=e.Number,d=g,v=g.prototype,h="Number"==i(r(83)(v)),b="trim"in String.prototype,w=function(t){var n=a(t,!1);if("string"==typeof n&&n.length>2){var r,e,s,i=(n=b?n.trim():f(n,3)).charCodeAt(0);if(43===i||45===i){if(88===(r=n.charCodeAt(2))||120===r)return NaN}else if(48===i){switch(n.charCodeAt(1)){case 66:case 98:e=2,s=49;break;case 79:case 111:e=8,s=55;break;default:return+n}for(var c,o=n.slice(2),u=0,l=o.length;u<l;u++)if((c=o.charCodeAt(u))<48||c>s)return NaN;return parseInt(o,e)}}return+n};if(!g(" 0o1")||!g("0b1")||g("+0x1")){g=function(t){var n=arguments.length<1?0:t,r=this;return r instanceof g&&(h?o(function(){v.valueOf.call(r)}):"Number"!=i(r))?c(new d(w(n)),r,g):w(n)};for(var _,y=r(14)?u(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),m=0;y.length>m;m++)s(d,_=y[m])&&!s(g,_)&&p(g,_,l(d,_));g.prototype=v,v.constructor=g,r(21)(e,"Number",g)}},73:function(t,n,r){"use strict";var e=r(10),s=r(37)(!0);e(e.P,"Array",{includes:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),r(88)("includes")},74:function(t,n,r){"use strict";var e=r(10),s=r(75);e(e.P+e.F*r(76)("includes"),"String",{includes:function(t){return!!~s(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},75:function(t,n,r){var e=r(91),s=r(13);t.exports=function(t,n,r){if(e(n))throw TypeError("String#"+r+" doesn't accept regex!");return String(s(t))}},76:function(t,n,r){var e=r(15)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(r){try{return n[e]=!1,!"/./"[t](n)}catch(t){}}return!0}},77:function(t,n,r){"use strict";var e=r(35);r.n(e).a},78:function(t,n,r){"use strict";var e=r(36);r.n(e).a},79:function(t,n,r){"use strict";r(42),r(31),r(39),r(49);var e={name:"gulu-row",props:{gutter:{type:[Number,String]},align:{type:String,validator:function(t){return["left","right","center"].indexOf(t)>=0}}},computed:{rowStyle:function(){var t=this.gutter;return{marginLeft:-t/2+"px",marginRight:-t/2+"px"}},rowClass:function(){var t=this.align;return[t&&"align-".concat(t)]}},mounted:function(){var t=this;this.$children.forEach(function(n){n.gutter=t.gutter})}},s=(r(78),r(0)),i=Object(s.a)(e,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",class:this.rowClass,style:this.rowStyle},[this._t("default")],2)},[],!1,null,"1d6f21a4",null);n.a=i.exports},80:function(t,n,r){"use strict";var e=r(95),s=(r(49),r(73),r(74),r(31),r(42),r(84),function(t){var n=Object.keys(t),r=!0;return n.forEach(function(t){["span","offset"].includes(t)||(r=!1)}),r}),i={name:"gulu-col",props:{span:{type:[Number,String],default:24},offset:{type:[Number,String]},ipad:{type:Object,validator:s},narrowPc:{type:Object,validator:s},pc:{type:Object,validator:s},widePc:{type:Object,validator:s}},data:function(){return{gutter:{type:[Number,String]}}},methods:{createClasses:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=[];return t?(t.span&&r.push("col-".concat(n).concat(t.span)),t.offset&&r.push("offset-".concat(n).concat(t.offset)),r):[]}},computed:{colStyle:function(){var t=this.gutter;return{paddingLeft:t/2+"px",paddingRight:t/2+"px"}},colClass:function(){var t=this.span,n=this.offset,r=this.ipad,s=this.narrowPc,i=this.pc,c=this.widePc,a=this.createClasses;return[].concat(Object(e.a)(a({span:t,offset:n})),Object(e.a)(a(r,"ipad-")),Object(e.a)(a(s,"narrow-pc-")),Object(e.a)(a(i,"pc-")),Object(e.a)(a(c,"wide-pc-")))}}},c=(r(77),r(0)),a=Object(c.a)(i,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"col-wrapper",class:this.colClass,style:this.colStyle},[n("div",{staticClass:"col"},[this._t("default")],2)])},[],!1,null,"255e3494",null);n.a=a.exports}}]);