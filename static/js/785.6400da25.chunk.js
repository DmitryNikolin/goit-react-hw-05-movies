"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[785],{785:function(e,n,t){t.r(n);var r=t(861),a=t(439),c=t(687),u=t.n(c),s=t(791),o=t(689),i=t(207),p=t(184);n.default=function(){var e=(0,o.UO)().movieId,n=(0,s.useState)([]),t=(0,a.Z)(n,2),c=t[0],f=t[1],v=(0,s.useState)(null),l=(0,a.Z)(v,2),h=l[0],d=l[1],g=(0,s.useState)(!1),m=(0,a.Z)(g,2),x=m[0],w=m[1];return(0,s.useEffect)((function(){var n=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,w(!0),n.next=4,(0,i.sv)(e);case 4:t=n.sent,f(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),d("Movie reviews search error...");case 11:return n.prev=11,w(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]),(0,p.jsxs)(p.Fragment,{children:[x&&"Loading...",h&&(0,p.jsx)("div",{children:h}),c&&c.length?(0,p.jsx)("ul",{children:c.map((function(e){return(0,p.jsxs)("li",{children:[(0,p.jsxs)("p",{children:["Author: ",e.author]}),(0,p.jsx)("p",{children:e.content})]},e.id)}))}):(0,p.jsx)("h3",{children:"We don't have any reviews for this movie."})]})}},207:function(e,n,t){t.d(n,{Hq:function(){return h},XT:function(){return l},fU:function(){return g},l2:function(){return d},sv:function(){return m}});var r=t(861),a=t(687),c=t.n(a),u=t(263),s="2a8b839138ac7f0e01e4e118027c67da";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="/trending/movie/day",i="/search/movie",p="/movie",f="/credits",v="/reviews",l=function(){var e=(0,r.Z)(c().mark((function e(){var n,t,r=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:1,e.next=3,u.Z.get("".concat(o,"?api_key=").concat(s,"&page=").concat(n,"&language=en-US&include_adult=false"));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,u.Z.get("".concat(i,"?api_key=").concat(s,"&page=").concat(t,"&query=").concat(n,"&language=en-US&include_adult=false"));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(p,"/").concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),g=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(n).concat(f,"?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,u.Z.get("/movie/".concat(n).concat(v,"?api_key=").concat(s,"&language=en-US&page=").concat(t));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=785.6400da25.chunk.js.map