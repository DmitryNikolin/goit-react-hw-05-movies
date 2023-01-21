"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[509],{509:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(439),a=n(791),c=n(689),i=n(87),s=n(686),u=n.n(s),o=n(543),l=n(968),d=n(207),v="MovieDetails_backButton__ilGfB",f="MovieDetails_reviews__tdSgP",p="MovieDetails_cast__DSRRH",h=n(184);function g(){var e=(0,a.useState)(null),t=(0,r.Z)(e,2),n=t[0],s=t[1],g=(0,a.useState)(null),x=(0,r.Z)(g,2),m=x[0],_=x[1],j=(0,a.useState)(!1),w=(0,r.Z)(j,2),k=w[0],Z=w[1],y=(0,c.UO)().movieId,b=(0,c.TH)(),S=(0,c.s0)(),U={color:"tomato"};return(0,a.useEffect)((function(){Z(!0),(0,d.l2)(y).then((function(e){s(e)})).catch((function(e){_("Ooops. Something went wrong..."),u().Notify.failure(e)})).finally((function(){return Z(!1)}))}),[y]),(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(o.Z,{children:[(0,h.jsx)("button",{onClick:function(){var e,t;return S(null!==(e=null===b||void 0===b||null===(t=b.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/")},className:v,children:"GO BACK"}),n&&(0,h.jsx)(l.Z,{text:n.title}),k&&"Loading ...",m&&(0,h.jsx)("div",{children:m}),n&&(0,h.jsxs)("div",{children:[(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(n.poster_path),alt:n.title}),(0,h.jsxs)("h3",{children:[n.title," (",new Date(n.release_date).getFullYear(),")"]}),(0,h.jsxs)("p",{children:["User score: ",Math.round(n.vote_average/10*100),"%"]}),(0,h.jsxs)("div",{className:"movie_overview",children:[(0,h.jsx)("h3",{children:"Overview"}),(0,h.jsx)("p",{children:n.overview})]}),(0,h.jsx)("h3",{children:"Genres"}),(0,h.jsx)("p",{children:n.genres?n.genres.map((function(e){return e.name})).join(", "):"-"})]}),(0,h.jsx)("hr",{}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:"Additional Information"}),(0,h.jsx)(i.OL,{to:"/movies/".concat(y,"/reviews"),style:function(e){return e.isActive?U:void 0},state:b.state,children:(0,h.jsx)("p",{className:f,children:"Reviews"})}),(0,h.jsx)(i.OL,{to:"/movies/".concat(y,"/cast"),style:function(e){return e.isActive?U:void 0},state:b.state,children:(0,h.jsx)("p",{className:p,children:"Cast"})}),(0,h.jsx)("hr",{}),(0,h.jsx)(c.j3,{})]})]})})}},968:function(e,t,n){n.d(t,{Z:function(){return c}});var r="PageHeading_title__whdE-",a=n(184);function c(e){var t=e.text;return(0,a.jsx)("h1",{className:r,children:t})}},207:function(e,t,n){n.d(t,{Hq:function(){return p},XT:function(){return f},fU:function(){return g},l2:function(){return h},sv:function(){return x}});var r=n(861),a=n(687),c=n.n(a),i=n(263),s="2a8b839138ac7f0e01e4e118027c67da";i.Z.defaults.baseURL="https://api.themoviedb.org/3";var u="/trending/movie/day",o="/search/movie",l="/movie",d="/credits",v="/reviews",f=function(){var e=(0,r.Z)(c().mark((function e(){var t,n,r=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,e.next=3,i.Z.get("".concat(u,"?api_key=").concat(s,"&page=").concat(t,"&language=en-US&include_adult=false"));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,i.Z.get("".concat(o,"?api_key=").concat(s,"&page=").concat(n,"&query=").concat(t,"&language=en-US&include_adult=false"));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(l,"/").concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t).concat(d,"?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,i.Z.get("/movie/".concat(t).concat(v,"?api_key=").concat(s,"&language=en-US&page=").concat(n));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=509.2164b273.chunk.js.map