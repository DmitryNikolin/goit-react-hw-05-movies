"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[71],{71:function(t,n,e){e.r(n),e.d(n,{default:function(){return v}});var r=e(439),a=e(791),c=e(686),u=e.n(c),i=e(543),o=e(968),s=e(858),l=e(207),f=e(87),p=e(184);function d(){return(0,p.jsxs)("h1",{children:["Page is not found. Go to ",(0,p.jsx)(f.rU,{to:"/",children:"Home page"})," "]})}function v(){var t=(0,a.useState)([]),n=(0,r.Z)(t,2),e=n[0],c=n[1],f=(0,a.useState)(null),v=(0,r.Z)(f,2),h=v[0],g=v[1],m=(0,a.useState)(!1),x=(0,r.Z)(m,2),_=x[0],w=x[1];(0,a.useEffect)((function(){w(!0),(0,l.XT)().then((function(t){c(t)})).catch((function(t){g("Ooops. Something went wrong..."),u().Notify.failure(t)})).finally((function(){return w(!1)}))}),[]);var Z=!_&&!e.length;return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(i.Z,{children:[(0,p.jsx)(o.Z,{text:"Trending today"}),_&&"Loading ...",Z&&(0,p.jsx)(d,{}),h&&(0,p.jsx)("div",{children:h}),e&&(0,p.jsx)(s.Z,{movies:e})]})})}},858:function(t,n,e){e.d(n,{Z:function(){return o}});var r=e(87),a="MoviesList_list__0Owr9",c="MoviesList_item__eePYv",u="MoviesList_img__v4jFC",i=e(184),o=function(t){var n=t.movies,e=t.prevLocation;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("ul",{className:a,children:n&&n.map((function(t){var n=t.id,a=t.name,o=t.title,s=t.poster_path;return(0,i.jsx)("li",{className:c,children:(0,i.jsxs)(r.rU,{to:"/movies/".concat(n),state:{from:e},children:[s?(0,i.jsx)("img",{className:u,src:"https://image.tmdb.org/t/p/w500".concat(s),alt:o}):(0,i.jsx)("img",{className:u,src:"https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-11.jpg",alt:a}),(0,i.jsx)("p",{children:a||o})]})},n)}))})})}},968:function(t,n,e){e.d(n,{Z:function(){return c}});var r="PageHeading_title__whdE-",a=e(184);function c(t){var n=t.text;return(0,a.jsx)("h1",{className:r,children:n})}},207:function(t,n,e){e.d(n,{Hq:function(){return v},XT:function(){return d},fU:function(){return g},l2:function(){return h},sv:function(){return m}});var r=e(861),a=e(687),c=e.n(a),u=e(263),i="2a8b839138ac7f0e01e4e118027c67da";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="/trending/movie/day",s="/search/movie",l="/movie",f="/credits",p="/reviews",d=function(){var t=(0,r.Z)(c().mark((function t(){var n,e,r=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:1,t.next=3,u.Z.get("".concat(o,"?api_key=").concat(i,"&page=").concat(n,"&language=en-US&include_adult=false"));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r,a=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:1,t.next=3,u.Z.get("".concat(s,"?api_key=").concat(i,"&page=").concat(e,"&query=").concat(n,"&language=en-US&include_adult=false"));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(l,"/").concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),g=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n).concat(f,"?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),m=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r,a=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:1,t.next=3,u.Z.get("/movie/".concat(n).concat(p,"?api_key=").concat(i,"&language=en-US&page=").concat(e));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=71.333497f1.chunk.js.map