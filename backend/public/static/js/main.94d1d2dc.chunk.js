(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{108:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/otaru.e2154a2a.png"},109:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/sapporo.31ea8ff1.jpg"},110:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/muroran.9e2cde3a.jpg"},111:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/shiretoko.f743dddc.jpg"},112:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/asahikawa.9a0643e3.jpg"},140:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n.n(c),a=n(6),r=n.n(a),s=n(18),u=n(144),o=n(11),j=(n(13),n(14),n(12)),d=n(2);var l,f,h=function(t){var e=t.city_name;return Object(d.jsxs)("div",{children:["\u5c0f\u6a3d"===e?Object(d.jsx)("img",{src:n(108).default,width:"300",height:"auto"}):null,"\u672d\u5e4c"===e?Object(d.jsx)("img",{src:n(109).default,width:"300",height:"auto"}):null,"\u5ba4\u862d"===e?Object(d.jsx)("img",{src:n(110).default,width:"300",height:"auto"}):null,"\u77e5\u5e8a"===e?Object(d.jsx)("img",{src:n(111).default,width:"300",height:"auto"}):null,"\u65ed\u5ddd"===e?Object(d.jsx)("img",{src:n(112).default,width:"300",height:"auto"}):null]})};var b,O,g=function(t){var e=t.city_name,n=t.arrival_time;return Object(d.jsxs)(p,{children:[Object(d.jsx)(x,{children:e}),Object(d.jsx)(x,{children:n}),Object(d.jsx)(h,{city_name:e})]})},p=j.a.div(l||(l=Object(o.a)(["\n  color: #763f2d ;\n  fontSize: 30;\n  background-color:  #03a8d6;\n  alignItems: center;\n  display: flex;\n  padding: 60px;\n  list-style: none;\n  margin: 0px;\n  width: 100%;\n  \n  \n"]))),x=j.a.div(f||(f=Object(o.a)(["\n\nmargin: 60px;\nfont-size:80px;\n\n"])));var m=function(t){var e=t.route,n=t.time,c=function(t){var e=Math.floor(t/60),n=t%60;return String(e)+":"+String(n)};return Object(d.jsx)("div",{children:e.map((function(t,i){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(g,{city_name:e[i],arrival_time:c(n[i])})})}))})};j.a.div(b||(b=Object(o.a)(["\n  color: red;\n  size: 40px;\n"]))),j.a.div(O||(O=Object(o.a)(["\n  color: blue;\n"])));var v=function(){var t=Object(c.useState)([]),e=Object(s.a)(t,2),n=e[0],i=(e[1],Object(c.useState)([])),a=Object(s.a)(i,2),r=a[0],o=a[1],j=Object(c.useState)(!1),l=Object(s.a)(j,2),f=l[0],h=l[1];Object(c.useEffect)((function(){b()}),[]);var b=function(){var t="http://localhost:8000/api/cities/";alert(t);fetch(t)};return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"TravelingSarorunKamuy"}),n.map((function(t,e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{children:t}),Object(d.jsx)(u.b,{checked:r[e],onChange:function(){!function(t){for(var e=[],c=0;c<n.length;c++)c===t?e.push(!r[c]):e.push(r[c]);o(e)}(e)}},e)]})})),Object(d.jsx)(u.a,{icon:"search",intent:"success",text:"Go",onClick:function(){h(!0)}}),f?Object(d.jsx)(m,{route:n,time:[0,40,333,523,3336]}):null]})};var w=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(v,{})})},S=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,145)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),c(t),i(t),a(t),r(t)}))};r.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root")),S()}},[[140,1,2]]]);
//# sourceMappingURL=main.94d1d2dc.chunk.js.map