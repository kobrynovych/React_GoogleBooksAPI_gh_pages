(this.webpackJsonpmyprog=this.webpackJsonpmyprog||[]).push([[0],{138:function(e,t,n){"use strict";var a=n(2),o=(n(0),n(27)),r=n(159),c=n(40),s=n(30),i=(n(139),n(37));t.a=function(e){return Object(a.jsxs)(o.a,{style:{border:"3px solid #ccc",padding:"15px"},children:[Object(a.jsx)(o.a.Image,{src:e.el.volumeInfo.imageLinks?e.el.volumeInfo.imageLinks.thumbnail:"https://react.semantic-ui.com/images/wireframe/white-image.png"}),Object(a.jsxs)(o.a.Content,{children:[Object(a.jsx)(o.a.Header,{as:"a",children:Object(a.jsx)(i.b,{to:{pathname:e.el.volumeInfo.previewLink&&e.el.volumeInfo.previewLink},target:"_blank",children:e.el.volumeInfo.title&&e.el.volumeInfo.title})}),Object(a.jsx)(o.a.Meta,{children:e.el.volumeInfo.subtitle&&e.el.volumeInfo.subtitle}),Object(a.jsxs)(o.a.Meta,{children:["Author: ",e.el.volumeInfo.authors&&e.el.volumeInfo.authors.map((function(e,t){return Object(a.jsxs)("span",{children:[e," "]},t)}))]}),Object(a.jsxs)(o.a.Meta,{children:["Published: ",e.el.volumeInfo.publishedDate&&e.el.volumeInfo.publishedDate]}),Object(a.jsxs)(o.a.Meta,{children:["Categories: ",e.el.volumeInfo.categories&&e.el.volumeInfo.categories.map((function(e,t){return Object(a.jsxs)("span",{children:[e," "]},t)}))]}),Object(a.jsxs)(o.a.Meta,{children:["Page count: ",e.el.volumeInfo.pageCount&&e.el.volumeInfo.pageCount]}),Object(a.jsxs)(o.a.Meta,{children:["Language: ",e.el.volumeInfo.language&&e.el.volumeInfo.language]}),e.el.volumeInfo.averageRating?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(r.a,{icon:"star",rating:e.el.volumeInfo.averageRating,maxRating:5}),Object(a.jsx)("span",{children:e.el.volumeInfo.averageRating})]}):Object(a.jsx)(r.a,{rating:0,maxRating:5}),Object(a.jsxs)(o.a.Meta,{children:["Price: ",Object(a.jsx)("span",{children:e.el.saleInfo.listPrice&&e.el.saleInfo.listPrice.amount}),Object(a.jsx)("span",{children:e.el.saleInfo.retailPrice&&"/".concat(e.el.saleInfo.retailPrice.amount)}),Object(a.jsx)("span",{children:e.el.saleInfo.listPrice&&e.el.saleInfo.listPrice.currencyCode})]}),Object(a.jsx)(o.a.Description,{children:Object(a.jsx)(o.a.Meta,{children:e.el.volumeInfo.description})}),Object(a.jsx)(i.b,{to:{pathname:e.el.volumeInfo.canonicalVolumeLink},target:"_blank",children:Object(a.jsxs)(c.a,{animated:!0,children:[Object(a.jsx)(c.a.Content,{visible:!0,children:"Details"}),Object(a.jsx)(c.a.Content,{hidden:!0,children:Object(a.jsx)(s.a,{name:"arrow right"})})]})}),e.favouritesBook.length>0&&e.favouritesBook.find((function(t){return t.id===e.el.id}))?Object(a.jsxs)(c.a,{animated:"fade",children:[Object(a.jsx)(c.a.Content,{visible:!0,children:"Delete in favourites"}),Object(a.jsx)(c.a.Content,{hidden:!0,onClick:function(){return e.addFavouritesBook(e.el.id)},style:{color:"red"},children:Object(a.jsx)(s.a,{name:"delete"})})]}):Object(a.jsxs)(c.a,{animated:"fade",children:[Object(a.jsx)(c.a.Content,{visible:!0,children:"Add in favourites"}),Object(a.jsx)(c.a.Content,{hidden:!0,onClick:function(){return e.addFavouritesBook(e.el.id)},style:{color:"green"},children:Object(a.jsx)(s.a,{name:"add"})})]})]})]})}},177:function(e,t,n){},178:function(e,t,n){},208:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n(0),r=n.n(o),c=n(41),s=n.n(c),i=(n(177),n(57)),l=(n(178),n(12)),u=n(14),j=n(138),b=n(27),d=function(e){var t=function(t){e.favouritesBookThunk(t)};return Object(a.jsx)(b.a.Group,{style:{margin:"15px"},children:e.favouritesBook.length?e.favouritesBook.map((function(n){return Object(a.jsx)(j.a,Object(u.a)(Object(u.a)({el:n},e),{},{addFavouritesBook:t,favouritesBook:e.favouritesBook}),n.id)})):Object(a.jsx)("h1",{children:"Not favourites books"})})},h=n(37),f=n(223),O=n(226),g=n(220),x=function(e){var t=Object(o.useState)("home"),n=Object(i.a)(t,2),r=n[0],c=n[1],s=function(e,t){var n=t.name;return c(n)};return Object(a.jsxs)(f.a,{secondary:!0,style:{margin:"5px"},children:[Object(a.jsx)(f.a.Item,{name:"home",active:"home"===r,onClick:s,children:Object(a.jsx)(h.c,{exect:!0,to:"/React_GoogleBooksAPI_gh_pages",children:"Home"})}),Object(a.jsx)(f.a.Item,{name:"messages",active:"messages"===r,onClick:s,children:Object(a.jsx)(h.c,{exect:!0,to:"/messages",children:"Messages"})}),Object(a.jsx)(f.a.Item,{name:"favourites",active:"favourites"===r,onClick:s,children:Object(a.jsxs)(h.c,{exect:!0,to:"/favourites",children:["Favourites ",e.favouritesBook.length>0&&Object(a.jsxs)("span",{children:["(",e.favouritesBook.length,")"]})]})}),Object(a.jsxs)(f.a.Menu,{position:"right",children:[Object(a.jsx)(f.a.Item,{children:Object(a.jsx)(O.a,{toggle:!0,checked:e.langRestrict,onChange:function(){return e.langChange()},label:"Lang: Uk"})}),Object(a.jsx)(f.a.Item,{children:Object(a.jsx)(O.a,{toggle:!0,checked:e.orderBy,onChange:function(){return e.orderByChange()},label:"New"})}),Object(a.jsx)(f.a.Item,{children:e.totalItems&&Object(a.jsxs)("span",{children:["Search result: ",e.totalItems]})}),Object(a.jsx)(f.a.Item,{children:Object(a.jsx)(g.a,{action:{icon:"search",value:e.query,onClick:function(){return e.onSearch()}},actionPosition:"right",placeholder:"Search...",onChange:function(t){return e.setQuery(t.target.value)},onKeyPress:function(t){return"Enter"===t.key?e.onSearch():null}})})]})]})},m=n(116),p=n(54),k=n(221),v=n(89),I=n.n(v),y=n(135),C=n(58),B=n(155),T=n.n(B).a.create({baseURL:"https://www.googleapis.com/books/v1/"}),S=function(e,t,n,a,o,r,c){return T.get("volumes?q=".concat(e,"&").concat(a,"&").concat(o,"&").concat(r,"&").concat(c,"&maxResults=").concat(t,"&startIndex=").concat(n,"&key=").concat("AIzaSyCWJPlgc1bW_gHaGC6hYCtHeqonbVJwWvA")).then((function(e){return e}))},P="SET_BOOKS",w="UPDATE_RESULT",E="SET_TOTAL_ITEMS",F="START_INDEX",L="IS_LOADING",R="FREE_BOOKS",_="ADD_FAVOURITES_BOOKS",A="UPDATE_FAVOURITES_BOOKS",M={books:[],totalItems:null,maxResults:5,startIndex:0,isLoading:!1,isError:!1,favouritesBook:[]},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(u.a)(Object(u.a)({},e),{},{books:Object(C.a)(t.payload)});case w:return Object(u.a)(Object(u.a)({},e),{},{books:[].concat(Object(C.a)(e.books),Object(C.a)(t.payload))});case F:case R:return Object(u.a)(Object(u.a)({},e),{},{startIndex:t.payload});case E:return Object(u.a)(Object(u.a)({},e),{},{totalItems:t.payload});case L:return Object(u.a)(Object(u.a)({},e),{},{isLoading:t.payload});case _:return Object(u.a)(Object(u.a)({},e),{},{favouritesBook:[].concat(Object(C.a)(e.favouritesBook),[t.payload])});case A:return Object(u.a)(Object(u.a)({},e),{},{favouritesBook:Object(C.a)(t.payload)});default:return e}},N=function(e){return{type:w,payload:e}},J=function(e){return{type:F,payload:e}},U=function(e){return{type:E,payload:e}},z=function(e){return{type:L,payload:e}},G=function(e){return{type:A,payload:e}},H=n(222),V=n(224),K=function(e){return Object(a.jsx)(H.a,{children:Object(a.jsx)(H.a.Field,{children:Object(a.jsxs)(V.a,{horizontal:!0,style:{margin:"0 50px"},children:[Object(a.jsx)("h4",{children:"Filter"}),Object(a.jsx)(V.a.Item,{children:Object(a.jsx)(V.a.Content,{children:Object(a.jsx)(O.a,{radio:!0,label:"All",name:"priceFilter",value:"",checked:""===e.filter,onChange:e.filterChange})})}),Object(a.jsx)(V.a.Item,{children:Object(a.jsx)(V.a.Content,{children:Object(a.jsx)(O.a,{radio:!0,label:"Free ebooks",name:"priceFilter",value:"free-ebooks",checked:"free-ebooks"===e.filter,onChange:e.filterChange})})}),Object(a.jsx)(V.a.Item,{children:Object(a.jsx)(V.a.Content,{children:Object(a.jsx)(O.a,{radio:!0,label:"Paid ebooks",name:"priceFilter",value:"paid-ebooks",checked:"paid-ebooks"===e.filter,onChange:e.filterChange})})}),Object(a.jsx)(V.a.Item,{children:Object(a.jsx)(V.a.Content,{children:Object(a.jsx)(O.a,{radio:!0,label:"Full content",name:"priceFilter",value:"full",checked:"full"===e.filter,onChange:e.filterChange})})}),Object(a.jsx)(V.a.Item,{style:{marginLeft:"320px"},children:Object(a.jsx)(V.a.Content,{children:Object(a.jsx)(O.a,{radio:!0,label:"All",name:"printType",value:"all",checked:"all"===e.printType,onChange:e.printTypeChange})})}),Object(a.jsx)(V.a.Item,{children:Object(a.jsx)(V.a.Content,{children:Object(a.jsx)(O.a,{radio:!0,label:"Books",name:"printType",value:"books",checked:"books"===e.printType,onChange:e.printTypeChange})})}),Object(a.jsx)(V.a.Item,{children:Object(a.jsx)(V.a.Content,{children:Object(a.jsx)(O.a,{radio:!0,label:"Magazines",name:"printType",value:"magazines",checked:"magazines"===e.printType,onChange:e.printTypeChange})})})]})})})},q=r.a.lazy((function(){return n.e(3).then(n.bind(null,227))})),W=Object(p.d)(Object(m.b)((function(e){return{books:e.booksPages.books,maxResults:e.booksPages.maxResults,startIndex:e.booksPages.startIndex,isLoading:e.booksPages.isLoading,isError:e.booksPages.isError,totalItems:e.booksPages.totalItems,favouritesBook:e.booksPages.favouritesBook}}),{searchBooksThunk:function(e,t,n,a,o,r){return function(){var c=Object(y.a)(I.a.mark((function c(s,i){var l,u,j,b,d,h;return I.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return s(z(!0)),l=i().booksPages.maxResults,u=n?"filter=".concat(n):"",j=a?"printType=".concat(a):"",b=o?"orderBy=newest":"orderBy=relevance",d=r?"langRestrict=uk":"",c.next=8,S(e,l,t,u,j,b,d);case 8:(h=c.sent).data.items&&(s(0===t?(f=h.data.items,{type:P,payload:f}):N(h.data.items)),s(J(t)),s(U(h.data.totalItems)),s(z(!1)));case 10:case"end":return c.stop()}var f}),c)})));return function(e,t){return c.apply(this,arguments)}}()},favouritesBookThunk:function(e){return function(){var t=Object(y.a)(I.a.mark((function t(n,a){var o,r,c,s,i;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=a().booksPages.favouritesBook,r=a().booksPages.books,c=JSON.parse(localStorage.getItem("mybooks")),s=null===c?"":c,o.find((function(t){return t.id===e}))?(n(G(o.filter((function(t){return t.id!==e})))),localStorage.setItem("mybooks",JSON.stringify(Object(C.a)(s.filter((function(t){return t.id!==e})))))):(i=r.find((function(t){return t.id===e})),n({type:_,payload:i}),localStorage.setItem("mybooks",JSON.stringify([].concat(Object(C.a)(s),[i]))));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},updateFavouritesBookActionCreator:G}))((function(e){var t=Object(o.useState)("search+terms"),n=Object(i.a)(t,2),c=n[0],s=n[1],u=Object(o.useState)(""),j=Object(i.a)(u,2),b=j[0],h=j[1],f=Object(o.useState)("all"),O=Object(i.a)(f,2),g=O[0],m=O[1],p=Object(o.useState)(!1),v=Object(i.a)(p,2),I=v[0],y=v[1],C=Object(o.useState)(!1),B=Object(i.a)(C,2),T=B[0],S=B[1];Object(o.useEffect)((function(){e.searchBooksThunk("search+terms",0)}),[]),Object(o.useEffect)((function(){var t=JSON.parse(localStorage.getItem("mybooks"));t&&e.updateFavouritesBookActionCreator(t)}),[]);var P=function(){console.log("true");var t=e.startIndex+e.maxResults;e.searchBooksThunk(c,t,b,g,I,T)},w=function(t){t.target.scrollingElement.scrollTop>=t.target.scrollingElement.scrollHeight-t.target.scrollingElement.offsetHeight-200&&e.books.length&&!e.isLoading&&!e.isError&&P()};Object(o.useEffect)((function(){return window.addEventListener("scroll",w,!1),function(){return window.removeEventListener("scroll",w,!1)}}));return Object(a.jsx)("container",{className:"wrapper",children:Object(a.jsxs)("section",{className:"wrapper2",children:[Object(a.jsx)(x,{langRestrict:T,langChange:function(){return S(!T)},orderBy:I,orderByChange:function(){return y(!I)},totalItems:e.totalItems,query:c,onSearch:function(){0===String(c).length||"search+terms"===String(c).length?e.searchBooksThunk("search+terms",0,b,g,I,T):e.searchBooksThunk(c,0,b,g,I,T)},setQuery:s,favouritesBook:e.favouritesBook}),Object(a.jsx)(r.a.Suspense,{fallback:Object(a.jsx)(k.a,{active:!0,inline:"centered"}),children:Object(a.jsxs)(l.d,{children:[Object(a.jsx)(l.b,{path:"/Messages"}),Object(a.jsx)(l.b,{exact:!0,path:"/favourites",children:Object(a.jsx)(d,{favouritesBook:e.favouritesBook,favouritesBookThunk:e.favouritesBookThunk})}),Object(a.jsx)(l.b,{exact:!0,path:"/React_GoogleBooksAPI_gh_pages",children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(K,{filterChange:function(e){return h(e.currentTarget.firstChild.defaultValue)},filter:b,printType:g,printTypeChange:function(e){return m(e.currentTarget.firstChild.defaultValue)}}),Object(a.jsx)(q,{books:e.books,favouritesBook:e.favouritesBook,favouritesBookThunk:e.favouritesBookThunk})]})}),Object(a.jsx)(l.b,{path:"/",children:Object(a.jsx)(l.a,{to:"/React_GoogleBooksAPI_gh_pages"})})]})}),Object(a.jsxs)("div",{children:[e.isLoading&&Object(a.jsx)(k.a,{active:!0,inline:"centered"}),0!==e.startIndex&&!e.isLoading&&e.isError&&Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:"Something went wrong..."}),Object(a.jsx)("button",{onClick:function(){return P()},children:"Try Again"})]})]})]})})})),Q=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,228)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),r(e),c(e)}))},X=n(156),Y=n(157),Z=n.n(Y),$=Object(p.c)({booksPages:D}),ee=Object(p.e)($,Object(p.a)(X.a,Z.a));window.store=ee;var te=ee;n(139);s.a.render(Object(a.jsxs)(h.a,{children:[Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(m.a,{store:te,children:Object(a.jsx)(W,{})})}),","]}),document.getElementById("root")),Q()}},[[208,1,2]]]);
//# sourceMappingURL=main.ddf324b2.chunk.js.map