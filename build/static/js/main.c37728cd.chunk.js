(this.webpackJsonpieat=this.webpackJsonpieat||[]).push([[0],{1:function(t,e,n){"use strict";n.d(e,"o",(function(){return v})),n.d(e,"p",(function(){return x})),n.d(e,"c",(function(){return C})),n.d(e,"b",(function(){return L})),n.d(e,"j",(function(){return P})),n.d(e,"n",(function(){return F})),n.d(e,"f",(function(){return N})),n.d(e,"i",(function(){return S})),n.d(e,"h",(function(){return A})),n.d(e,"g",(function(){return T})),n.d(e,"l",(function(){return J})),n.d(e,"m",(function(){return R})),n.d(e,"e",(function(){return V})),n.d(e,"k",(function(){return B})),n.d(e,"d",(function(){return U}));var a=n(8),r=n(20),c=n(12),i=n(2),s=n.n(i),l=n(6),u=n(10),o=Object(u.b)({name:"city",initialState:{loading:"idle",simpleList:[],fullList:[],filteredList:[],list:[],citiesList:[],nEntries:25,currentPage:1,totalPages:0,totalEntries:0,value:"",filter:""},reducers:{loading:function(t,e){"idle"===t.loading&&(t.loading="pending")},listReceived:function(t,e){console.log("oldlist",e.payload);var n=e.payload;if("pending"===t.loading)if(t.loading="idle",t.filter.length>0){var a=t.nEntries,r=t.currentPage,c=r*a-a,i=(r-1)*a+a+1,s=n.slice(c,i);console.log({newList:s}),t.list=s}else t.list=n},setCitiesList:function(t,e){t.citiesList=e.payload},clearLists:function(t,e){t.list=[],t.simpleList=[],t.fullList=[]},setTotalPages:function(t,e){t.totalPages=e.payload},setNEntries:function(t,e){t.nEntries=e.payload},setCityVal:function(t,e){t.value=e.payload},setFilterVal:function(t,e){t.filter=e.payload},setSimpleList:function(t,e){t.simpleList+=e.payload},setFullList:function(t,e){t.fullList+=e.payload},setFilteredList:function(t,e){t.filteredList=e.payload},setCurrentPage:function(t,e){console.log(e.payload),t.currentPage=e.payload},setTotalEntries:function(t,e){t.totalEntries=e.payload}}}),p=o.actions,f=p.loading,_=p.setCityVal,d=p.setFilterVal,g=(p.fetchList,p.listReceived),m=p.setCitiesList,b=p.setSimpleList,y=p.setFullList,h=p.setFilteredList,v=(p.filterLists,p.setCurrentPage),j=p.setTotalEntries,E=p.setTotalPages,O=(p.setNEntries,p.clearLists),x=function(t){return function(e){e(f()),e(g(t))}},C=function(){return function(){var t=Object(l.a)(s.a.mark((function t(e){var n,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://opentable.herokuapp.com/api/cities",n=function(){var t=Object(l.a)(s.a.mark((function t(){var e,n,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat("https://opentable.herokuapp.com/api/cities"));case 3:return e=t.sent,t.next=6,e.json();case 6:return n=t.sent,t.next=9,n.cities;case 9:return a=t.sent,t.next=12,a;case 12:return t.abrupt("return",t.sent);case 15:t.prev=15,t.t0=t.catch(0),alert(t.t0);case 18:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(){return t.apply(this,arguments)}}(),t.next=4,n();case 4:a=t.sent,e(m(a));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},k=function(t){return function(){var e=Object(l.a)(s.a.mark((function e(n){var a,i,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(E(t.totalPages)),a=Object(c.a)(Array(t.totalPages).keys()).map((function(t){return t+1})),i=function(){var e=Object(l.a)(s.a.mark((function e(){var n,c,i,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],c=Object(r.a)(a),e.prev=2,u=s.a.mark((function e(){var a,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.value,"https://opentable.herokuapp.com/api/restaurants",r=function(){var e=Object(l.a)(s.a.mark((function e(){var n,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://opentable.herokuapp.com/api/restaurants","?city=").concat(t.city,";page=").concat(a));case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.next=9,r.restaurants;case 9:return c=e.sent,e.next=12,c;case 12:return e.abrupt("return",e.sent);case 15:e.prev=15,e.t0=e.catch(0),alert(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}(),e.next=5,r();case 5:c=e.sent,n=n.concat(c);case 7:case"end":return e.stop()}}),e)})),c.s();case 5:if((i=c.n()).done){e.next=9;break}return e.delegateYield(u(),"t0",7);case 7:e.next=5;break;case 9:e.next=14;break;case 11:e.prev=11,e.t1=e.catch(2),c.e(e.t1);case 14:return e.prev=14,c.f(),e.finish(14);case 17:return e.next=19,n;case 19:return e.abrupt("return",e.sent);case 20:case"end":return e.stop()}}),e,null,[[2,11,14,17]])})));return function(){return e.apply(this,arguments)}}(),e.next=5,i();case 5:u=e.sent,n(y(u)),t.filter.length>0&&n(w(u,t));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},L=function(t){return function(){var e=Object(l.a)(s.a.mark((function e(n){var r,c,i,u,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(f()),n(_(t.city)),n(d(t.filter)),"https://opentable.herokuapp.com/api/restaurants",r=function(){var e=Object(l.a)(s.a.mark((function e(){var r,c,i,l,u,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://opentable.herokuapp.com/api/restaurants","?city=").concat(t.city,";page=").concat(t.page));case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,i=c.total_entries,l=c.per_page,u=Math.ceil(i/l),n(E(u)),n(v(c.current_page)),n(j(i)),1===t.page&&n(k(Object(a.a)({},t,{totalPages:u,perPage:l}))),e.next=16,c;case 16:return o=e.sent,e.next=19,o;case 19:return e.abrupt("return",e.sent);case 22:e.prev=22,e.t0=e.catch(0),alert(e.t0);case 25:case"end":return e.stop()}}),e,null,[[0,22]])})));return function(){return e.apply(this,arguments)}}(),e.next=7,r();case 7:c=e.sent,i=c.restaurants,u=i.map((function(t){return{name:t.name,address:t.address,area:t.area}})),console.log({res:c,restaurants:i}),n(b(u)),o=c.total_entries,0===t.filter.length&&(n(O()),n(w(i,Object(a.a)({},t,{perPage:c.per_page,totalEntries:o}))));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=function(t,e){return function(){var n=Object(l.a)(s.a.mark((function n(a){var r,c,i,l,u;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:console.log({obj:e}),r=Array.from(new Set(t.map(JSON.stringify))).map(JSON.parse),c=r.filter((function(t){var n=[t.name,t.address,t.area],a=e.filter.replace(/\s/g," ").toLowerCase();return n.some((function(t){return-1!==t.replace(/\s/g," ").toLowerCase().indexOf(a)}))})),i=e.perPage,l=e.filter.length>0?c.length:e.totalEntries,console.log({totalEntries:l}),u=Math.ceil(l/i),a(E(u)),a(j(l)),a(h(c)),a(g(c));case 11:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},P=function(t){return t.city.loading},F=function(t){return t.city.value},N=function(t){return t.city.filter},S=function(t){return t.city.list},A=function(t){return t.city.fullList},T=function(t){return t.city.filteredList},J=function(t){return t.city.totalEntries},R=function(t){return t.city.totalPages},V=function(t){return t.city.currentPage},B=function(t){return t.city.nEntries},U=function(t){return t.city.citiesList};e.a=o.reducer},21:function(t,e,n){t.exports=n(35)},26:function(t,e,n){},34:function(t,e,n){},35:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(11),i=n.n(c),s=(n(26),n(12)),l=n(13),u=n(8),o=n(17),p=n(3),f=n(1),_=n(5),d=n.n(_),g=r.a.lazy((function(){return n.e(4).then(n.bind(null,37))}));function m(){var t=Object(p.b)(),e=Object(p.c)(f.g),n=Object(p.c)(f.d),c=Object(p.c)(f.k),i=Object(p.c)(f.e),_=Object(p.c)(f.j),m=Object(p.c)(f.l),b=Object(p.c)(f.m),y=Object(p.c)(f.i),h=(Object(p.c)(f.h),Object(p.c)(f.n)),v=Object(p.c)(f.f),j=Object(a.useState)({city:h,filter:v,page:i}),E=Object(o.a)(j,2),O=E[0],x=E[1],C=Object(a.useState)(h),k=Object(o.a)(C,2),L=k[0],w=k[1];Object(a.useEffect)((function(){t(Object(f.c)())}),[]);var P=function(t){t.preventDefault(),x(Object(u.a)({},O,Object(l.a)({},t.target.id,t.target.value))),"city"===t.target.id&&w(t.target.value)},F=function(t){var e=t.id,a=n.map((function(t,e){return r.a.createElement("option",{key:"c".concat(e),value:t})}));return r.a.createElement("datalist",{id:e},a)},N=function(){var n=b,a=Object(s.a)(Array(n).keys()).filter((function(t){var e=t+1;return 0===t||e<=i+1&&e>=i-1||i<=2&&e<=4||i>=n-1&&e>=n-3||t===n-1})).map((function(a){var c=i===a+1?d.a.current_page_btn:d.a.page_btn;return r.a.createElement("button",{key:"p".concat(a),className:c,onClick:function(){return n=a+1,console.log({n:n}),t(Object(f.o)(n)),void(v.length>0?t(Object(f.p)(e)):t(Object(f.b)(Object(u.a)({},O,{page:n}))));var n}},(a===n-1&&i<n-1?"...":"")+"".concat(a+1)+(a+1===1&&i>3?"...":""))}));return r.a.createElement("ul",{className:d.a.pages_list},a)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:d.a.searching_text}," Search for restaurants in ",O.city),r.a.createElement("div",{className:d.a.search_fields},r.a.createElement("label",{className:d.a.city_label,htmlFor:"city"},"City:"),r.a.createElement("input",{list:"citiesList",className:d.a.city_input,type:"text",id:"city",name:"city",placeholder:"City",required:!0,onChange:P}),r.a.createElement(F,{id:"citiesList"}),r.a.createElement("label",{className:d.a.filter_label,htmlFor:"filter"},"Filter:"),r.a.createElement("input",{className:d.a.filter_input,type:"text",id:"filter",name:"filter",placeholder:"Filter",required:!0,onChange:P}),r.a.createElement("button",{className:d.a.search_btn,onClick:function(){t(Object(f.b)(O))},disabled:0===L.length||"idle"!==_},"Find")),"idle"!==_&&r.a.createElement("p",null,"Loading..."),y.length>=0&&h&&"pending"!==_&&r.a.createElement("p",null,"Showing ".concat(i*c-(c-1))+"-".concat((i-1)*c+y.length," ")+"of ".concat(m)),v.length>0&&r.a.createElement("p",null,"Finding: '".concat(v,"' / Found ").concat(y.length)," "),y&&r.a.createElement(r.a.Fragment,null,r.a.createElement(N,{totalPages:b,currentPage:i,totalEntries:m}),r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(g,null)),r.a.createElement(N,{totalPages:b,currentPage:i,totalEntries:m})))}n(34);var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(m,null)))},y=n(10),h=Object(y.a)({reducer:{city:f.a},middleware:Object(y.c)({serializableCheck:!1})});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p.a,{store:h},r.a.createElement(b,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},5:function(t,e,n){t.exports={searching_text:"City_searching_text__1GPRk",search_fields:"City_search_fields__1C3VR",city_label:"City_city_label__38Y80",filter_label:"City_filter_label__uRfOL",city_input:"City_city_input__2Gq1l",filter_input:"City_filter_input__Z4b1x",search_btn:"City_search_btn__2lonH",pages_list:"City_pages_list__2ZUgP",page_btn:"City_page_btn__YbmDK",current_page_btn:"City_current_page_btn__1kwmU",restaurant_list:"City_restaurant_list__3Oy84",anchor:"City_anchor__3kxJh",item_card:"City_item_card__1TIhY",image_bg:"City_image_bg__2ghLL",image:"City_image__2Lio_",text_bg:"City_text_bg__1i18B",address:"City_address__THvf_",name_bg:"City_name_bg__2G-SB",name:"City_name__oQ0sk",price_list:"City_price_list__37A7m",price_symbol:"City_price_symbol__21fIH",area:"City_area__lisU7",reserve_btn:"City_reserve_btn__3XvU5"}}},[[21,1,2]]]);
//# sourceMappingURL=main.c37728cd.chunk.js.map