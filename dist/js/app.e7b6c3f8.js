(function(e){function t(t){for(var n,o,s=t[0],c=t[1],l=t[2],v=0,d=[];v<s.length;v++)o=s[v],a[o]&&d.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},i=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"2bc3":function(e,t,r){},5190:function(e,t,r){"use strict";var n=r("2bc3"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=r("bb71");r("da64");n["a"].use(a["a"],{iconfont:"md"});var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-toolbar",{attrs:{app:""}},[r("v-toolbar-title",{staticClass:"headline text-uppercase"},[r("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/",tag:"span"}},[r("span",[e._v("MOVIE")]),r("span",{staticClass:"font-weight-light"},[e._v("FY")])])],1),r("v-spacer"),r("v-flex",{attrs:{xa12:"",sm6:"",md3:""}},[r("v-text-field",{attrs:{label:"Movie Name"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchMovie(t)}},model:{value:e.searchString,callback:function(t){e.searchString=t},expression:"searchString"}})],1),r("v-btn",{attrs:{flat:"",disabled:!e.dataAvaliable},on:{click:e.searchMovie}},[r("span",{staticClass:"mr-2"},[e._v("Search")])])],1),r("v-content",[r("router-view")],1),r("moviefyFooter")],1)},o=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-footer",{attrs:{color:"transparent",height:"200px",center:""}},[r("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[r("v-card",{staticClass:"transparent black--text text-xs-center",attrs:{flat:"",tile:""}},[r("v-img",{attrs:{src:e.tmdb_logo,height:"50",contain:"true"}}),r("v-card-text",[e._v("This product uses the TMDb API but is not endorsed or certified by\n        TMDb.")]),r("v-card-text",[e._v("\n        Made by\n        "),r("a",{attrs:{href:"https://github.com/AndreasHaaversen"}},[e._v("Andreas Hammer Håversen")])])],1)],1)],1)},c=[],l=r("a26c"),u=r.n(l),v={data:function(){return{tmdb_logo:u.a}}},d=v,p=r("2877"),f=r("6544"),h=r.n(f),g=r("b0af"),m=r("99d9"),_=r("553a"),b=r("adda"),x=r("a722"),y=Object(p["a"])(d,s,c,!1,null,null,null),w=y.exports;h()(y,{VCard:g["a"],VCardText:m["b"],VFooter:_["a"],VImg:b["a"],VLayout:x["a"]});var M={name:"App",components:{moviefyFooter:w},data:function(){return{searchString:""}},methods:{searchMovie:function(){this.$router.push("/search/"+this.searchString),this.searchString=""}},computed:{dataAvaliable:function(){return null!==this.searchString&&""!=this.searchString}}},V=M,C=r("7496"),k=r("8336"),S=r("549c"),R=r("0e8f"),j=r("9910"),O=r("2677"),D=r("71d9"),T=r("2a7f"),A=Object(p["a"])(V,i,o,!1,null,null,null),I=A.exports;h()(A,{VApp:C["a"],VBtn:k["a"],VContent:S["a"],VFlex:R["a"],VSpacer:j["a"],VTextField:O["a"],VToolbar:D["a"],VToolbarTitle:T["a"]});var $=r("8c4f"),P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.loading?r("v-container",[r("div",{staticClass:"text-xs-center"},[r("v-progress-circular",{attrs:{indeterminate:"",size:150,width:"8",color:"green"}})],1)]):r("v-container",{attrs:{"grid-list-xl":""}},[r("v-layout",{attrs:{wrap:""}},e._l(e.wholeResponse.results,function(t){return r("v-flex",{key:t.id,attrs:{sm3:"",xs4:"","mb-2":""}},[r("v-card",[r("v-img",{attrs:{src:e.image_url+t.poster_path,"aspect-ratio":"0.67"}}),r("v-card-title",{attrs:{"primary-title":""}},[r("div",[r("h2",[e._v(e._s(t.title))]),r("div",[e._v("Release: "+e._s(t.release_date))]),r("div",[e._v("Vote Average: "+e._s(t.vote_average))])])]),r("v-card-actions",{staticClass:"justify-center"},[r("v-btn",{attrs:{flat:"",color:"green"},on:{click:function(r){return e.singleMovie(t.id)}}},[e._v("Details")])],1)],1)],1)}),1)],1)},B=[],F=(r("96cf"),r("3b8d")),E=r("bc3a"),L=r.n(E),U="?api_key=1ead4035163c520c10d30f773c296b20",z={fetchMovieDiscover:function(){var e=Object(F["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("discover/movie"+U+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}(),fetchSingleMovie:function(){var e=Object(F["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("movie/"+t+U+"&language=en-US");case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),fetchMovieSearch:function(){var e=Object(F["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("search/movie"+U+"&language=en-US&include_adult=false&query="+t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},H={data:function(){return{wholeResponse:[],loading:!0,image_url:"https://image.tmdb.org/t/p/w500/"}},mounted:function(){var e=this;z.fetchMovieDiscover().then(function(t){e.wholeResponse=t,e.loading=!1})},methods:{singleMovie:function(e){this.$router.push("/movie/"+e)}}},J=H,N=(r("a3d9"),r("12b2")),q=r("a523"),G=r("490a"),W=Object(p["a"])(J,P,B,!1,null,"839edc46",null),Y=W.exports;h()(W,{VBtn:k["a"],VCard:g["a"],VCardActions:m["a"],VCardTitle:N["a"],VContainer:q["a"],VFlex:R["a"],VImg:b["a"],VLayout:x["a"],VProgressCircular:G["a"]});var K=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.loading?r("v-container",[r("div",{staticClass:"text-xs-center"},[r("v-progress-circular",{attrs:{indeterminate:"",size:150,width:8,color:"green"}})],1)]):r("v-container",[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{attrs:{"offset-sm1":"","offset-xs1":"",xs10:""}},[r("v-card",[r("v-img",{attrs:{src:e.image_url+e.singleMovie.poster_path,"aspect-ratio":"2"}}),r("v-card-title",{attrs:{"primary-title":""}},[r("div",[r("h2",{staticClass:"headline mb-0"},[e._v("\n              "+e._s(e.singleMovie.title)+"\n              "),r("div",{attrs:{id:"vote"}},[e._v(e._s(e.singleMovie.vote_average)+"/10")])]),r("br"),r("p",[e._v(e._s(e.singleMovie.overview))]),r("h4",[e._v("Genres:")]),r("ul",e._l(e.singleMovie.genres,function(t){return r("li",{key:t.id},[r("p",[e._v(e._s(t.name))])])}),0),r("p",[e._v("Runtime: "+e._s(e.singleMovie.runtime)+" minutes")]),r("p",[e._v("Status: "+e._s(e.singleMovie.status))]),e.singleMovie.release_date?r("p",[e._v("\n              Release date: "+e._s(e.singleMovie.release_date)+"\n            ")]):e._e(),r("p",[e._v("IMDB-ID: "+e._s(e.singleMovie.imdb_id))])])]),r("v-card-actions",[r("v-btn",{attrs:{flat:"",color:"green"},on:{click:e.back}},[e._v("Back")]),e.singleMovie.homepage?r("v-btn",{attrs:{flat:"",color:"green"},on:{click:e.website}},[e._v("Website")]):e._e(),e.singleMovie.imdb_id?r("v-btn",{attrs:{flat:"",color:"green"},on:{click:e.openIMDB}},[e._v("IMDB")]):e._e()],1)],1)],1)],1)],1)},Q=[],X={props:["id"],data:function(){return{singleMovie:"",dialog:!1,loading:!0,image_url:"https://image.tmdb.org/t/p/w500/"}},mounted:function(){var e=this;z.fetchSingleMovie(this.id).then(function(t){e.singleMovie=t,e.loading=!1}).catch(function(e){console.log(e)})},methods:{back:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/")},website:function(){window.open(this.singleMovie.homepage)},openIMDB:function(){window.open("https://www.imdb.com/title/"+this.singleMovie.imdb_id)}}},Z=X,ee=(r("c098"),Object(p["a"])(Z,K,Q,!1,null,null,null)),te=ee.exports;h()(ee,{VBtn:k["a"],VCard:g["a"],VCardActions:m["a"],VCardTitle:N["a"],VContainer:q["a"],VFlex:R["a"],VImg:b["a"],VLayout:x["a"],VProgressCircular:G["a"]});var re=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.loading?r("v-container",[r("div",{staticClass:"text-xs-center"},[r("v-progress-circular",{attrs:{indeterminate:"",size:150,width:8,color:"green"}})],1)]):e.noData?r("v-container",[r("div",{staticClass:"text-xs-center"},[r("h2",[e._v('No matches for "'+e._s(e.name)+'" could be found')])])]):r("v-container",{attrs:{"grid-list-xl":""}},[r("v-layout",{attrs:{wrap:""}},e._l(e.movieResponse.results,function(t){return r("v-flex",{key:t.id,attrs:{xs4:"","mb-2":""}},[r("v-card",[r("v-img",{attrs:{src:e.image_url+t.poster_path,"aspect-ratio":"1"}}),r("v-card-title",{attrs:{"primary-title":""}},[r("div",[r("h2",[e._v(e._s(t.title))]),r("div",[e._v("Released: "+e._s(t.release_date))]),r("div",[e._v("Vote Average: "+e._s(t.vote_average))])])]),r("v-card-actions",{staticClass:"justify-center"},[r("v-btn",{attrs:{flat:"",color:"green"},on:{click:function(r){return e.singleMovie(t.id)}}},[e._v("Details")])],1)],1)],1)}),1)],1)},ne=[],ae=(r("7f7f"),{props:["name"],data:function(){return{movieResponse:[],loading:!0,noData:!1,image_url:"https://image.tmdb.org/t/p/w500/"}},methods:{singleMovie:function(e){this.$router.push("/movie/"+e)},fetchResult:function(e){var t=this;z.fetchMovieSearch(e).then(function(e){0!==e.total_results?(t.movieResponse=e,t.loading=!1,t.noData=!1):(t.noData=!0,t.loading=!1)}).catch(function(e){console.log(e)})}},mounted:function(){this.fetchResult(this.name)},watch:{name:function(e){this.fetchResult(e)}}}),ie=ae,oe=(r("5190"),Object(p["a"])(ie,re,ne,!1,null,"033d5520",null)),se=oe.exports;h()(oe,{VBtn:k["a"],VCard:g["a"],VCardActions:m["a"],VCardTitle:N["a"],VContainer:q["a"],VFlex:R["a"],VImg:b["a"],VLayout:x["a"],VProgressCircular:G["a"]}),n["a"].use($["a"]);var ce=new $["a"]({routes:[{path:"/",name:"LatestMovie",component:Y},{path:"/movie/:id",name:"Movie",props:!0,component:te},{path:"/search/:name",name:"SearchMovie",props:!0,component:se}],mode:"history"});n["a"].config.productionTip=!1,L.a.defaults.baseURL="https://api.themoviedb.org/3/",new n["a"]({render:function(e){return e(I)},router:ce}).$mount("#app")},"64a3":function(e,t,r){},7859:function(e,t,r){},a26c:function(e,t,r){e.exports=r.p+"img/tmdb-logo.bb455492.png"},a3d9:function(e,t,r){"use strict";var n=r("7859"),a=r.n(n);a.a},c098:function(e,t,r){"use strict";var n=r("64a3"),a=r.n(n);a.a}});
//# sourceMappingURL=app.e7b6c3f8.js.map