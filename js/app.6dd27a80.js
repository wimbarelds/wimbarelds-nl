(function(t){function e(e){for(var a,n,l=e[0],c=e[1],o=e[2],u=0,p=[];u<l.length;u++)n=l[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&p.push(i[n][0]),i[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,o||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,n=1;n<s.length;n++){var c=s[n];0!==i[c]&&(a=!1)}a&&(r.splice(e--,1),t=l(l.s=s[0]))}return t}var a={},i={app:0},r=[];function n(t){return l.p+"js/"+({article:"article"}[t]||t)+"."+{article:"48c69768"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.e=function(t){var e=[],s=i[t];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise((function(e,a){s=i[t]=[e,a]}));e.push(s[2]=a);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=n(t);var o=new Error;r=function(e){c.onerror=c.onload=null,clearTimeout(u);var s=i[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;o.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",o.name="ChunkLoadError",o.type=a,o.request=r,s[1](o)}i[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,s){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(s,a,function(e){return t[e]}.bind(null,a));return s},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=o;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("cd49")},"27d3":function(t,e,s){},3282:function(t,e,s){"use strict";s("ed2a")},"36f7":function(t,e,s){"use strict";s("fdbe")},4389:function(t,e,s){},"43b1":function(t,e,s){"use strict";s("4389")},"5c0b":function(t,e,s){"use strict";s("9c0c")},"70d5":function(t,e,s){"use strict";s("7fe8")},"7fe8":function(t,e,s){},"9c0c":function(t,e,s){},afb3:function(t,e,s){"use strict";s("27d3")},cd49:function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"site",class:{"prefers-reduced-motion":t.prefersReducedMotion}},[s("main",[s("router-view",{class:{"prefers-reduced-motion":t.prefersReducedMotion}})],1)])},r=[],n=s("d4ec"),l=s("bee2"),c=s("262e"),o=s("2caf"),u=s("9ab4"),d=s("1b40"),p=function(t){Object(c["a"])(s,t);var e=Object(o["a"])(s);function s(){var t;return Object(n["a"])(this,s),t=e.apply(this,arguments),t.prefersReducedMotion=!1,t}return Object(l["a"])(s,[{key:"created",value:function(){var t=window.matchMedia("(prefers-reduced-motion: reduce)");this.prefersReducedMotion=t.matches}}]),s}(d["d"]);Object(u["a"])([Object(d["c"])()],p.prototype,"prefersReducedMotion",void 0),p=Object(u["a"])([d["a"]],p);var v=p,f=v,h=(s("5c0b"),s("3282"),s("2877")),m=Object(h["a"])(f,i,r,!1,null,"a6cfd738",null),b=m.exports,g=(s("d3b7"),s("3ca3"),s("ddb0"),s("8c4f")),_=function(){var t,e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"about-me",class:(t={"fullscreen-slides":e.fullScreenSlides},t[e.curSlideName]=!0,t)},[a("WhoAmI",{class:{"slide-above":e.curSlide>0,"slide-below":e.curSlide<0}}),a("Skills",{class:{"slide-above":e.curSlide>1,"slide-below":e.curSlide<1}}),a("Links",{class:{"slide-above":e.curSlide>2,"slide-below":e.curSlide<2}})],1)},k=[],w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"links"},[s("h2",[t._v("Links")]),s("ul",{staticClass:"presence"},[s("li",{staticClass:"presence-item"},[s("a",{attrs:{href:"https://github.com/WimBarelds",target:"_blank"}},[s("img",{attrs:{src:"/presence/github.svg",alt:""}}),s("span",{staticClass:"presence-linktext"},[t._v("Github")])])]),s("li",{staticClass:"presence-item"},[s("a",{attrs:{href:"https://codepen.io/wimbarelds/",target:"_blank"}},[s("img",{attrs:{src:"/presence/codepen.png",alt:""}}),s("span",{staticClass:"presence-linktext"},[t._v("Codepen")])])]),s("li",{staticClass:"presence-item"},[s("a",{attrs:{href:"https://www.linkedin.com/in/wimbarelds/",target:"_blank"}},[s("img",{attrs:{src:"/presence/linkedin.svg",alt:""}}),s("span",{staticClass:"presence-linktext"},[t._v("LinkedIn")])])])])])}],y=function(t){Object(c["a"])(s,t);var e=Object(o["a"])(s);function s(){return Object(n["a"])(this,s),e.apply(this,arguments)}return Object(l["a"])(s)}(d["d"]);y=Object(u["a"])([d["a"]],y);var O=y,C=O,S=(s("70d5"),Object(h["a"])(C,w,j,!1,null,"468c400d",null)),x=S.exports,A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"skills"},[s("h2",[t._v("Things I like to work with")]),s("ul",{staticClass:"primary-skills"},[s("li",[s("img",{attrs:{src:"/logos/javascript-plain.svg",alt:""}}),s("span",{staticClass:"skill-text"},[t._v("Javascript")])]),s("li",[s("img",{attrs:{src:"/logos/typescript-plain.svg",alt:""}}),s("span",{staticClass:"skill-text"},[t._v("Typescript")])]),s("li",[s("img",{attrs:{src:"/logos/html5-plain.svg",alt:""}}),s("span",{staticClass:"skill-text"},[t._v("HTML")])]),s("li",[s("img",{attrs:{src:"/logos/css3-plain.svg",alt:""}}),s("span",{staticClass:"skill-text"},[t._v("CSS")])]),s("li",[s("img",{attrs:{src:"/logos/vuejs-plain.svg",alt:""}}),s("span",{staticClass:"skill-text"},[t._v("VueJS")])]),s("li",[s("img",{attrs:{src:"/logos/angular-plain.svg",alt:""}}),s("span",{staticClass:"skill-text"},[t._v("Angular")])]),s("li",[s("img",{attrs:{src:"/logos/webpack-plain.svg",alt:""}}),s("span",{staticClass:"skill-text"},[t._v("Webpack")])]),s("li",[s("img",{attrs:{src:"/logos/nodejs-plain.svg",alt:""}}),s("span",{staticClass:"skill-text"},[t._v("NodeJS")])])]),s("h3",[t._v("However...")]),s("div",{staticClass:"seconary-skills-wrapper"},[s("p",[t._v(" Though the above are all things I have the most fun working with,"),s("br"),t._v(" I also have experience and no problem working with things like... ")]),s("ul",{staticClass:"seconary-skills"},[s("li",[s("img",{attrs:{src:"/logos/csharp-plain.svg",alt:""}}),s("span",{staticClass:"alt-skill-text"},[t._v("C#")])]),s("li",[s("img",{attrs:{src:"/logos/java-plain.svg",alt:""}}),s("span",{staticClass:"alt-skill-text"},[t._v("Java")])]),s("li",[s("img",{attrs:{src:"/logos/php-plain.svg",alt:""}}),s("span",{staticClass:"alt-skill-text"},[t._v("PHP")])]),s("li",[s("img",{attrs:{src:"/logos/sql-plain.svg",alt:""}}),s("span",{staticClass:"alt-skill-text"},[t._v("SQL")])]),s("li",[s("img",{attrs:{src:"/logos/android-plain.svg",alt:""}}),s("span",{staticClass:"alt-skill-text"},[t._v("Android")])]),s("li",[s("img",{attrs:{src:"/logos/jquery-plain.svg",alt:""}}),s("span",{staticClass:"alt-skill-text"},[t._v("jQuery")])])])])])}],E=function(t){Object(c["a"])(s,t);var e=Object(o["a"])(s);function s(){return Object(n["a"])(this,s),e.apply(this,arguments)}return Object(l["a"])(s)}(d["d"]);E=Object(u["a"])([d["a"]],E);var I=E,T=I,L=(s("43b1"),Object(h["a"])(T,A,M,!1,null,"05656ec4",null)),P=L.exports,W=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"who-am-i"},[s("div",{staticClass:"section-content"},[s("div",{staticClass:"summary"},[s("img",{attrs:{src:"/photo.png",alt:""}}),s("div",{staticClass:"summary-text"},[s("h2",[t._v("Who am I?")]),s("p",[t._v(" Hi, I'm Wim Barelds, I live in Groningen in the Netherlands and speak English and Dutch. I'm a well-rounded developer who's passionate about creating cool frontend stuff on the web; a gamer who loves singleplayer, story-driven games; a nerd who's hooked on science fiction and fantasy audiobooks; and a maker with interests such as smart-tech, DIY, and 3D printing. ")]),s("p",[s("i",[t._v("(This website however will mostly focus on the webdeveloper bit.)")])])])]),s("div",{staticClass:"traits"},[s("h3",[t._v("As a Developer, I am...")]),s("ul",{staticClass:"characteristics"},[s("li",{staticClass:"characteristics-item"},[s("img",{attrs:{src:"/traits/creative.png",alt:""}}),s("span",{staticClass:"characteristics-text"},[t._v("Creative")])]),s("li",{staticClass:"characteristics-item"},[s("img",{attrs:{src:"/traits/versatile.png",alt:""}}),s("span",{staticClass:"characteristics-text"},[t._v("Versatile")])]),s("li",{staticClass:"characteristics-item"},[s("img",{attrs:{src:"/traits/curious.png",alt:""}}),s("span",{staticClass:"characteristics-text"},[t._v("Analytical")])]),s("li",{staticClass:"characteristics-item"},[s("img",{attrs:{src:"/traits/articulate.png",alt:""}}),s("span",{staticClass:"characteristics-text"},[t._v("Articulate")])])])])])])}],R=function(t){Object(c["a"])(s,t);var e=Object(o["a"])(s);function s(){return Object(n["a"])(this,s),e.apply(this,arguments)}return Object(l["a"])(s)}(d["d"]);R=Object(u["a"])([d["a"]],R);var J=R,B=J,D=(s("36f7"),Object(h["a"])(B,W,$,!1,null,"8ce14930",null)),H=D.exports,q=function(t){Object(c["a"])(s,t);var e=Object(o["a"])(s);function s(){var t;return Object(n["a"])(this,s),t=e.apply(this,arguments),t.smallScreen=!1,t.slides=["who-am-i","skills","links"],t.curSlide=0,t.transitionActive=!1,t}return Object(l["a"])(s,[{key:"fullScreenSlides",get:function(){return!this.smallScreen&&!this.prefersReducedMotion}},{key:"curSlideName",get:function(){return this.slides[this.curSlide]}},{key:"created",value:function(){var t=this;this._resizeObserver=new ResizeObserver((function(){t.smallScreen=window.innerWidth<800||window.innerHeight<700})),this._resizeObserver.observe(document.body),this._wheelListener=function(e){t.transitionActive||(e.deltaY>0?(t.curSlide=Math.min(t.slides.length-1,t.curSlide+1),t.transitionActive=!0,setTimeout((function(){t.transitionActive=!1}),300)):e.deltaY<0&&(t.curSlide=Math.max(0,t.curSlide-1),t.transitionActive=!0,setTimeout((function(){t.transitionActive=!1}),300)))},document.body.addEventListener("wheel",this._wheelListener)}},{key:"beforeDestroy",value:function(){this._resizeObserver.disconnect()}},{key:"updateFullScreenSlides",value:function(){}}]),s}(d["d"]);Object(u["a"])([Object(d["b"])()],q.prototype,"prefersReducedMotion",void 0),Object(u["a"])([Object(d["e"])("fullScreenSlides")],q.prototype,"updateFullScreenSlides",null),q=Object(u["a"])([Object(d["a"])({components:{Links:x,Skills:P,WhoAmI:H}})],q);var z=q,N=z,Y=(s("afb3"),Object(h["a"])(N,_,k,!1,null,"d23cd3ae",null)),F=Y.exports,G=(s("a4d3"),s("e01a"),{title:"WimBarelds.nl",description:"Wim Barelds is a frontend developer, a gamer, a nerd and a climber?"}),Q=function(t){var e=document.querySelector("meta[name=description]");e&&(e.content=t)},V=function(t){var e,s;document.title=(null===(e=t.meta)||void 0===e?void 0:e.title)||G.title,Q((null===(s=t.meta)||void 0===s?void 0:s.description)||G.description)};a["a"].use(g["a"]);var K=[{path:"/",name:"AboutMe",meta:{title:"Wim Barelds.nl - About me"},component:F},{path:"/read/:path",name:"Article",component:function(){return s.e("article").then(s.bind(null,"3ad6"))}}],U=new g["a"]({mode:"history",base:"/",routes:K});U.afterEach(V),a["a"].config.productionTip=!1,new a["a"]({router:U,render:function(t){return t(b)}}).$mount("#app")},ed2a:function(t,e,s){},fdbe:function(t,e,s){}});
//# sourceMappingURL=app.6dd27a80.js.map