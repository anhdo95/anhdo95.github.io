(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){"use strict";(function(e){var r;a.d(t,"e",(function(){return s})),a.d(t,"d",(function(){return l})),a.d(t,"g",(function(){return i})),a.d(t,"b",(function(){return d})),a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return u})),a.d(t,"f",(function(){return m})),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var o,n,s="SET_LOGGED_IN_USER",l="LOGGED_IN_USER_STORAGE",i="USER_POSTS_STORAGE",d=["Politics & Law","Society","Economy","Life & Style","Sports","Environment"],c="YYYY-MM-DD HH:mm:ss",u="00:00:00",m="HH:mm:ss";(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(o.register(s,"SET_LOGGED_IN_USER","/media/anhdo/Data/projects/react/simple-admin-SPA/src/constant.js"),o.register(l,"LOGGED_IN_USER_STORAGE","/media/anhdo/Data/projects/react/simple-admin-SPA/src/constant.js"),o.register(i,"USER_POSTS_STORAGE","/media/anhdo/Data/projects/react/simple-admin-SPA/src/constant.js"),o.register(d,"FAKE_CATEGORIES","/media/anhdo/Data/projects/react/simple-admin-SPA/src/constant.js"),o.register(c,"FULL_DATETIME_FORMAT","/media/anhdo/Data/projects/react/simple-admin-SPA/src/constant.js"),o.register(u,"DEFAULT_TIME","/media/anhdo/Data/projects/react/simple-admin-SPA/src/constant.js"),o.register(m,"TIME_FORMAT","/media/anhdo/Data/projects/react/simple-admin-SPA/src/constant.js")),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&n(e)}).call(this,a(21)(e))},28:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return p}));var r,o=a(110),n=a(302),s=a.n(n),l=a(3),i=a.n(l);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var d,c,u=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))},m=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s()();return u(Object(o.b)(t,a))(e)},p=function(e){return e&&e<=i()().endOf("day")};(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(u,"compose","/media/anhdo/Data/projects/react/simple-admin-SPA/src/util/index.js"),d.register(m,"composeContainer","/media/anhdo/Data/projects/react/simple-admin-SPA/src/util/index.js"),d.register(p,"disabledDate","/media/anhdo/Data/projects/react/simple-admin-SPA/src/util/index.js")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,a(21)(e))},300:function(e,t,a){"use strict";(function(e){var r,o=a(0),n=a.n(o),s=a(1),l=a.n(s),i=a(332),d=a(20),c=a(54),u=a(33),m=a.n(u),p=a(301),f=a(328),b=a(81),g=a(28),j=a(22);a(487),a(488);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},L=function(e){var t=m()(j.d),a=t&&t.isLoggedIn;Object(o.useEffect)((function(){a&&e.setLoggedInUser(t.username,t.isLoggedIn)}),[t,a]);var r=function(e){var t={pathname:"/",state:{from:e.location}};return n.a.createElement(d.a,{to:t})};return n.a.createElement(c.a,null,n.a.createElement(d.d,null,n.a.createElement(d.b,{exact:!0,path:"/"},n.a.createElement(f.a,null)),n.a.createElement((function(t){var o=t.children,s=v(t,["children"]);return n.a.createElement(d.b,h({},s,{render:function(t){var s=t.location;return e.isLoggedIn||a?o:n.a.createElement(r,{location:s})}}))}),{path:"/admin"},n.a.createElement(p.a,null)),n.a.createElement(d.b,{exact:!0,path:"*"},"The requested page not found!")))};y(L,"useEffect{}"),L.propTypes={isLoggedIn:l.a.bool,setLoggedInUser:l.a.func.isRequired};var G,H,P=function(e){return{isLoggedIn:e.user.isLoggedIn}},S=function(e){return{setLoggedInUser:function(t,a){var r={username:t,isLoggedIn:a};e(Object(b.a)(r))}}},E=Object(g.a)(Object(i.hot)(L),P,S);t.a=E,(G="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(G.register(L,"App","/media/anhdo/Data/projects/react/simple-admin-SPA/src/App.js"),G.register(P,"mapStateToProps","/media/anhdo/Data/projects/react/simple-admin-SPA/src/App.js"),G.register(S,"mapDispatchToProps","/media/anhdo/Data/projects/react/simple-admin-SPA/src/App.js"),G.register(E,"default","/media/anhdo/Data/projects/react/simple-admin-SPA/src/App.js")),(H="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&H(e)}).call(this,a(21)(e))},301:function(e,t,a){"use strict";(function(e){var r,o=a(33),n=a.n(o),s=a(81),l=a(28),i=a(22),d=a(303);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var c,u,m=function(e){return{username:e.user.username}},p=function(e){return{removeLoggedInUser:function(){e(Object(s.a)({username:null,isLoggedIn:!1})),n.a.remove(i.d)}}},f=Object(l.a)(d.a,m,p);t.a=f,(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(m,"mapStateToProps","/media/anhdo/Data/projects/react/simple-admin-SPA/src/pages/Admin/Container.js"),c.register(p,"mapDispatchToProps","/media/anhdo/Data/projects/react/simple-admin-SPA/src/pages/Admin/Container.js"),c.register(f,"default","/media/anhdo/Data/projects/react/simple-admin-SPA/src/pages/Admin/Container.js")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}).call(this,a(21)(e))},303:function(e,t,a){"use strict";(function(e){var r,o=a(0),n=a.n(o),s=a(1),l=a.n(s),i=a(20),d=a(53),c=a(8),u=a(91),m=a(304),p=a(308);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},b=function(e){var t=Object(i.g)(),a=Object(i.i)().path;var r=n.a.createElement(d.a,{onClick:function(a){if("logout"===a.key)return e.removeLoggedInUser(),t.push("/")}},n.a.createElement(d.a.Item,{key:"logout"},n.a.createElement(c.a,{type:"logout"}),"Logout"));return n.a.createElement("div",{className:"admin-page"},n.a.createElement(m.a,null),n.a.createElement("div",{className:"admin-page__content"},n.a.createElement("header",{className:"admin-page__header"},n.a.createElement(u.a,{overlay:r,trigger:["click"]},n.a.createElement("span",{className:"admin-page__user"},n.a.createElement(c.a,{className:"admin-page__user-icon",type:"user"}),e.username,n.a.createElement(c.a,{className:"ml-xs",type:"down"}))),","),n.a.createElement("main",{className:"admin-page__main"},n.a.createElement(i.d,null,n.a.createElement(i.b,{exact:!0,path:a}),n.a.createElement(i.b,{path:"".concat(a,"/posts")},n.a.createElement(p.a,null))))))};f(b,"useHistory{history}\nuseRouteMatch{{ path }}",(function(){return[i.g,i.i]})),b.propTypes={username:l.a.string.isRequired,removeLoggedInUser:l.a.func.isRequired};var g,j,h=b;t.a=h,(g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(g.register(b,"Presenter","/media/anhdo/Data/projects/react/simple-admin-SPA/src/pages/Admin/Presenter.js"),g.register(h,"default","/media/anhdo/Data/projects/react/simple-admin-SPA/src/pages/Admin/Presenter.js")),(j="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&j(e)}).call(this,a(21)(e))},304:function(e,t,a){"use strict";(function(e){var r,o=a(28),n=a(305);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,l,i=function(){return{}},d=function(){return{}},c=Object(o.a)(n.a,i,d);t.a=c,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(i,"mapStateToProps","/media/anhdo/Data/projects/react/simple-admin-SPA/src/components/Sidebar/Container.js"),s.register(d,"mapDispatchToProps","/media/anhdo/Data/projects/react/simple-admin-SPA/src/components/Sidebar/Container.js"),s.register(c,"default","/media/anhdo/Data/projects/react/simple-admin-SPA/src/components/Sidebar/Container.js")),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)}).call(this,a(21)(e))},305:function(e,t,a){"use strict";(function(e){var r,o=a(0),n=a.n(o),s=a(20),l=a(53),i=a(8);function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],r=!0,o=!1,n=void 0;try{for(var s,l=e[Symbol.iterator]();!(r=(s=l.next()).done)&&(a.push(s.value),!t||a.length!==t);r=!0);}catch(e){o=!0,n=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw n}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},u=l.a.SubMenu,m={"dashboard:overview":"/admin","posts:list":"/admin/posts"},p=function(){var e=d(Object(o.useState)("dashboard"),2),t=e[0],a=e[1],r=Object(s.g)();return n.a.createElement(l.a,{className:"app-sidebar",theme:"dark",onClick:function(e){a(e.key),r.push(m[e.key])},selectedKeys:[t],mode:"inline"},n.a.createElement(l.a.Item,null,n.a.createElement("h1",{className:"app-sidebar__heading"},"Admin Page")),n.a.createElement(u,{key:"dashboard",title:n.a.createElement("span",null,n.a.createElement(i.a,{type:"dashboard"})," Dashboard")},n.a.createElement(l.a.Item,{key:"dashboard:overview"},n.a.createElement(i.a,{type:"area-chart"})," Overview")),n.a.createElement(u,{key:"posts",title:n.a.createElement("span",null,n.a.createElement(i.a,{type:"snippets"})," Posts")},n.a.createElement(l.a.Item,{key:"posts:list"},n.a.createElement(i.a,{type:"unordered-list"})," List")))};c(p,"useState{[ current, setCurrent ]('dashboard')}\nuseHistory{history}",(function(){return[s.g]}));var f,b,g=p;t.a=g,(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(f.register(u,"SubMenu","/media/anhdo/Data/projects/react/simple-admin-SPA/src/components/Sidebar/Presenter.js"),f.register(m,"adminPages","/media/anhdo/Data/projects/react/simple-admin-SPA/src/components/Sidebar/Presenter.js"),f.register(p,"Presenter","/media/anhdo/Data/projects/react/simple-admin-SPA/src/components/Sidebar/Presenter.js"),f.register(g,"default","/media/anhdo/Data/projects/react/simple-admin-SPA/src/components/Sidebar/Presenter.js")),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&b(e)}).call(this,a(21)(e))},308:function(e,t,a){"use strict";(function(e){var r,o=a(28),n=a(309);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,l,i=function(e){return{username:e.user.username}},d=function(){return{}},c=Object(o.a)(n.a,i,d);t.a=c,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(i,"mapStateToProps","/media/anhdo/Data/projects/react/simple-admin-SPA/src/components/Posts/Container.js"),s.register(d,"mapDispatchToProps","/media/anhdo/Data/projects/react/simple-admin-SPA/src/components/Posts/Container.js"),s.register(c,"default","/media/anhdo/Data/projects/react/simple-admin-SPA/src/components/Posts/Container.js")),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)}).call(this,a(21)(e))},309:function(e,t,a){"use strict";(function(e){var r,o=a(0),n=a.n(o),s=a(54),l=a(267),i=a(29),d=a(507),c=a(3),u=a.n(c),m=a(33),p=a.n(m),f=a(310),b=a.n(f),g=a(311),j=a(314),h=a(38),v=a(22);function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function L(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(Object(a),!0).forEach((function(t){G(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function G(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function H(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],r=!0,o=!1,n=void 0;try{for(var s,l=e[Symbol.iterator]();!(r=(s=l.next()).done)&&(a.push(s.value),!t||a.length!==t);r=!0);}catch(e){o=!0,n=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw n}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var P="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},S=function(e){var t=H(Object(o.useState)(!1),2),a=t[0],r=t[1],c=H(Object(o.useState)(null),2),m=c[0],f=c[1],y=H(Object(o.useState)(!1),2),G=y[0],P=y[1],S=H(Object(o.useState)(null),2),E=S[0],O=S[1],D=[{title:h.a.get("common.title"),dataIndex:"title",render:function(e,t){return n.a.createElement(s.b,{to:"#",onClick:x(t)},e)}},{title:h.a.get("common.author"),dataIndex:"author"},{title:h.a.get("common.category"),dataIndex:"category"},{title:h.a.get("common.tags"),dataIndex:"tags",width:"20%",render:function(e){return e.map((function(e){return n.a.createElement(l.a,{key:e,color:"#87d068"},e)}))}},{title:h.a.get("common.date"),dataIndex:"published",render:function(e){return n.a.createElement("p",null,h.a.get("common.published"),n.a.createElement("br",null),n.a.createElement("span",null,u()(e).format(v.c)))}}],A={onChange:function(e){O(e)}},w=function(){r(!0),P(!1)},x=function(e){return function(){w(),f(e)}},M=function(){r(!1),P(!0),f(null)};return n.a.createElement("div",{className:"app-posts"},n.a.createElement("section",{className:"mb-md app-posts__cta"},n.a.createElement(i.a,{type:"primary",icon:"plus",onClick:w},"Create New"),n.a.createElement(i.a,{className:"ml-md",type:"danger",icon:"delete",onClick:function(){if(E&&E.length&&confirm(h.a.get("message.notification.post.deletingConfirmation"))){var e=p()(v.g).filter((function(e){return!E.includes(e.key)}));p()(v.g,e),O(null)}}},"Delete")),n.a.createElement(d.a,{size:"small",rowSelection:A,columns:D,dataSource:p()(v.g)||[],pagination:!1,scroll:{x:!0}}),n.a.createElement(g.a,{title:h.a.get("message.form.createNewPost"),visible:a,onCancel:M,footer:null},n.a.createElement(j.a,{post:m,canReset:G,onSubmit:function(t){var a=p()(v.g)||[];if(m){var r=a.findIndex((function(e){return e.id===m.id}));a[r]=L({},m,{},t)}else{var o=b()();a.push(L({},t,{id:o,key:o,author:e.username}))}p()(v.g,a),M()}})))};P(S,"useState{[ visible, setVisible ](false)}\nuseState{[ selectedPost, setSelectedPost ](null)}\nuseState{[ canReset, setCanReset ](false)}\nuseState{[ selectedRowKeys, setSelectedRowKeys ](null)}");var E,O,D=S;t.a=D,(E="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(E.register(S,"Presenter","/media/anhdo/Data/projects/react/simple-admin-SPA/src/components/Posts/Presenter.js"),E.register(D,"default","/media/anhdo/Data/projects/react/simple-admin-SPA/src/components/Posts/Presenter.js")),(O="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&O(e)}).call(this,a(21)(e))},311:function(e,t,a){"use strict";(function(e){var r,o=a(28),n=a(312);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,l,i=function(){return{}},d=function(){return{}},c=Object(o.a)(n.a,i,d);t.a=c,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(i,"mapStateToProps","/media/anhdo/Data/projects/react/simple-admin-SPA/src/components/Modal/Container.js"),s.register(d,"mapDispatchToProps","/media/anhdo/Data/projects/react/simple-admin-SPA/src/components/Modal/Container.js"),s.register(c,"default","/media/anhdo/Data/projects/react/simple-admin-SPA/src/components/Modal/Container.js")),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)}).call(this,a(21)(e))},312:function(e,t,a){"use strict";(function(e){var r,o=a(0),n=a.n(o),s=a(509);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,i,d=function(e){return n.a.createElement(s.a,{style:{top:20},title:e.title,visible:e.visible,footer:e.footer,confirmLoading:e.onfirmLoading,onOk:e.onOk,onCancel:e.onCancel},e.children)},c=d;t.a=c,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(d,"Presenter","/media/anhdo/Data/projects/react/simple-admin-SPA/src/components/Modal/Presenter.js"),l.register(c,"default","/media/anhdo/Data/projects/react/simple-admin-SPA/src/components/Modal/Presenter.js")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,a(21)(e))},314:function(e,t,a){"use strict";(function(e){var r,o=a(28),n=a(315);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,l,i=function(e){return{username:e.user.username}},d=function(){return{}},c=Object(o.a)(n.a,i,d);t.a=c,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(i,"mapStateToProps","/media/anhdo/Data/projects/react/simple-admin-SPA/src/components/EditablePost/Container.js"),s.register(d,"mapDispatchToProps","/media/anhdo/Data/projects/react/simple-admin-SPA/src/components/EditablePost/Container.js"),s.register(c,"default","/media/anhdo/Data/projects/react/simple-admin-SPA/src/components/EditablePost/Container.js")),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)}).call(this,a(21)(e))},315:function(e,t,a){"use strict";(function(e){var r,o=a(0),n=a.n(o),s=a(74),l=a(511),i=a(8),d=a(57),c=a(508),u=a(45),m=a(29),p=a(3),f=a.n(p),b=a(109),g=a.n(b),j=a(28),h=a(22);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var y,L,G=s.a.TextArea,H={labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:18}}},P=function(e){e.canReset&&e.form.resetFields();var t,a,r,o=(t=e.post,a=e.form.getFieldDecorator,r={title:{rules:[{required:!0,message:"Please input a post title!"}],initialValue:t&&t.title,element:n.a.createElement(s.a,{placeholder:"Please enter a post title"})},content:{rules:[{required:!0,message:"Please input a post content!"}],initialValue:t&&t.content,element:n.a.createElement(G,{placeholder:"Please enter a post content",autoSize:{minRows:3,maxRows:6}})},category:{rules:[{required:!0,message:"Please select a post category!"}],initialValue:t&&t.category,element:n.a.createElement(l.a,{dataSource:h.b,placeholder:"Search categories"},n.a.createElement(s.a,{suffix:n.a.createElement(i.a,{type:"search"})}))},tags:{rules:[{required:!0,message:"Please input post tags!"}],initialValue:t&&t.tags||void 0,element:n.a.createElement(d.a,{mode:"tags",placeholder:"Please input post tags",dropdownRender:function(){return n.a.createElement("span",null)},tokenSeparators:[","]})},published:{rules:[{required:!0,message:"Please choose a published date!"}],initialValue:t&&f()(t.published),element:n.a.createElement(c.a,{style:{width:"100%"},format:h.c,disabledDate:j.b,showTime:{defaultValue:f()(h.a,h.f)}})}},g()(r,(function(e,t,r){var o=a(r,t);return e[r]=o(t.element),e}),{}));return n.a.createElement(u.a,v({},H,{onSubmit:function(t){t.preventDefault(),e.form.validateFields((function(t,a){t||e.onSubmit(a)}))}}),n.a.createElement(u.a.Item,{label:"Title"},o.title),n.a.createElement(u.a.Item,{label:"Content"},o.content),n.a.createElement(u.a.Item,{label:"Category"},o.category),n.a.createElement(u.a.Item,{label:"Tags"},o.tags),n.a.createElement(u.a.Item,{label:"Published"},o.published),n.a.createElement("div",{className:"text-right"},n.a.createElement(m.a,{type:"primary",htmlType:"submit"},e.post?"Save changes":"Create New")))},S=u.a.create()(P);t.a=S,(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(y.register(G,"TextArea","/media/anhdo/Data/projects/react/simple-admin-SPA/src/components/EditablePost/Presenter.js"),y.register(H,"formItemLayout","/media/anhdo/Data/projects/react/simple-admin-SPA/src/components/EditablePost/Presenter.js"),y.register(P,"Presenter","/media/anhdo/Data/projects/react/simple-admin-SPA/src/components/EditablePost/Presenter.js"),y.register(S,"default","/media/anhdo/Data/projects/react/simple-admin-SPA/src/components/EditablePost/Presenter.js")),(L="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&L(e)}).call(this,a(21)(e))},324:function(e,t,a){"use strict";(function(e){var a;(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var r,o,n={"common.title":"Title","common.author":"Author","common.category":"Category","common.date":"Date","common.tags":"Tags","common.published":"Published","message.form.createNewPost":"Create a new post","message.form.error.accountNonExist":"Your account doesn't exist. Please try another one.","message.form.error.usernameRequired":"Please input your username!","message.form.error.passwordRequired":"Please input your password!","message.notification.post.deletingConfirmation":"Are you sure to delete selected post(s)?"};t.a=n,(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&r.register(n,"default","/media/anhdo/Data/projects/react/simple-admin-SPA/src/i18n/en.js"),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&o(e)}).call(this,a(21)(e))},328:function(e,t,a){"use strict";(function(e){var r,o=a(28),n=a(329);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,l,i=function(){return{}},d=function(){return{}},c=Object(o.a)(n.a,i,d);t.a=c,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(i,"mapStateToProps","/media/anhdo/Data/projects/react/simple-admin-SPA/src/pages/Login/Container.js"),s.register(d,"mapDispatchToProps","/media/anhdo/Data/projects/react/simple-admin-SPA/src/pages/Login/Container.js"),s.register(c,"default","/media/anhdo/Data/projects/react/simple-admin-SPA/src/pages/Login/Container.js")),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)}).call(this,a(21)(e))},329:function(e,t,a){"use strict";(function(e){var r,o=a(0),n=a.n(o),s=a(330);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,i,d=function(){return n.a.createElement("div",{className:"login-page"},n.a.createElement("div",{className:"login-page__container"},n.a.createElement(s.a,null)))},c=d;t.a=c,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(d,"Presenter","/media/anhdo/Data/projects/react/simple-admin-SPA/src/pages/Login/Presenter.js"),l.register(c,"default","/media/anhdo/Data/projects/react/simple-admin-SPA/src/pages/Login/Presenter.js")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,a(21)(e))},330:function(e,t,a){"use strict";(function(e){var r,o=a(33),n=a.n(o),s=a(81),l=a(28),i=a(22),d=a(331);function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var m,p,f=function(){return{}},b=function(e){return{setLoggedInUser:function(t,a){var r={username:t,isLoggedIn:!0};e(Object(s.a)(r)),n()(i.d,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){u(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},r,{remember:a}))}}},g=Object(l.a)(d.a,f,b);t.a=g,(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(m.register(f,"mapStateToProps","/media/anhdo/Data/projects/react/simple-admin-SPA/src/components/LoginForm/Container.js"),m.register(b,"mapDispatchToProps","/media/anhdo/Data/projects/react/simple-admin-SPA/src/components/LoginForm/Container.js"),m.register(g,"default","/media/anhdo/Data/projects/react/simple-admin-SPA/src/components/LoginForm/Container.js")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}).call(this,a(21)(e))},331:function(e,t,a){"use strict";(function(e){var r,o=a(0),n=a.n(o),s=a(20),l=a(54),i=a(510),d=a(74),c=a(8),u=a(73),m=a(45),p=a(29),f=a(109),b=a.n(f),g=a(33),j=a.n(g),h=a(38),v=a(22);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},L=function(e){var t,a,r,o,f,g=Object(s.g)(),y=Object(s.h)(),L=(t=e.form.getFieldDecorator,a=j()(v.d)||{},r=a.username,o=a.remember,f={username:{rules:[{required:!0,message:h.a.get("message.form.error.usernameRequired")}],initialValue:o?r:"",element:n.a.createElement(d.a,{prefix:n.a.createElement(c.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"})},password:{rules:[{required:!0,message:h.a.get("message.form.error.passwordRequired")}],element:n.a.createElement(d.a,{prefix:n.a.createElement(c.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"})},remember:{valuePropName:"checked",initialValue:o,element:n.a.createElement(u.a,null,"Remember me")}},b()(f,(function(e,a,r){var o=t(r,a);return e[r]=o(a.element),e}),{}));return n.a.createElement(m.a,{onSubmit:function(t){t.preventDefault(),e.form.validateFields((function(t,a){if(!t){var r=a.username,o=a.password,n=a.remember;if("demo"===r&&"demo"===o){e.setLoggedInUser(r,n);var s=(y.state||{from:{pathname:"/admin"}}).from;return g.replace(s)}i.a.error({message:h.a.get("message.form.error.accountNonExist")})}}))},className:"login-form"},n.a.createElement(m.a.Item,null,L.username),n.a.createElement(m.a.Item,null,L.password),n.a.createElement(m.a.Item,null,L.remember,n.a.createElement("div",null,n.a.createElement(p.a,{type:"primary",htmlType:"submit"},"Log in"),n.a.createElement("span",{className:"ml-xs"},"Or ",n.a.createElement(l.b,{to:"#"},"register now!"))),n.a.createElement(l.b,{className:"login-form-forgot",to:"#"},"Forgot password")))};y(L,"useHistory{history}\nuseLocation{location}",(function(){return[s.g,s.h]}));var G,H,P=m.a.create()(L);t.a=P,(G="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(G.register(L,"Presenter","/media/anhdo/Data/projects/react/simple-admin-SPA/src/components/LoginForm/Presenter.js"),G.register(P,"default","/media/anhdo/Data/projects/react/simple-admin-SPA/src/components/LoginForm/Presenter.js")),(H="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&H(e)}).call(this,a(21)(e))},333:function(e,t,a){"use strict";(function(e){var r,o=a(80),n=a(334);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s=Object(o.c)(n.a);var l,i,d=s;t.a=d,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(s,"store","/media/anhdo/Data/projects/react/simple-admin-SPA/src/redux/store.js"),l.register(d,"default","/media/anhdo/Data/projects/react/simple-admin-SPA/src/redux/store.js")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,a(21)(e))},334:function(e,t,a){"use strict";(function(e){var r,o=a(80),n=a(335);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,l,i=Object(o.b)({user:n.a});t.a=i,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&s.register(i,"default","/media/anhdo/Data/projects/react/simple-admin-SPA/src/redux/index.js"),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)}).call(this,a(21)(e))},335:function(e,t,a){"use strict";(function(e){var r,o=a(336),n=a.n(o),s=a(22);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,i,d={isLoggedIn:!1,username:null},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0,a=n()(e);switch(t.type){case s.e:a.isLoggedIn=t.payload.isLoggedIn,a.username=t.payload.username}return a};t.a=c,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(d,"initialState","/media/anhdo/Data/projects/react/simple-admin-SPA/src/redux/reducers/user.js"),l.register(c,"default","/media/anhdo/Data/projects/react/simple-admin-SPA/src/redux/reducers/user.js")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,a(21)(e))},341:function(e,t,a){"use strict";a.r(t);var r=a(0),o=a.n(r),n=a(5),s=a.n(n),l=a(110),i=a(300),d=a(333);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;s.a.render(o.a.createElement(l.a,{store:d.a},o.a.createElement(i.a,null)),document.getElementById("root"))},351:function(e,t,a){var r={"./af":114,"./af.js":114,"./ar":115,"./ar-dz":116,"./ar-dz.js":116,"./ar-kw":117,"./ar-kw.js":117,"./ar-ly":118,"./ar-ly.js":118,"./ar-ma":119,"./ar-ma.js":119,"./ar-sa":120,"./ar-sa.js":120,"./ar-tn":121,"./ar-tn.js":121,"./ar.js":115,"./az":122,"./az.js":122,"./be":123,"./be.js":123,"./bg":124,"./bg.js":124,"./bm":125,"./bm.js":125,"./bn":126,"./bn.js":126,"./bo":127,"./bo.js":127,"./br":128,"./br.js":128,"./bs":129,"./bs.js":129,"./ca":130,"./ca.js":130,"./cs":131,"./cs.js":131,"./cv":132,"./cv.js":132,"./cy":133,"./cy.js":133,"./da":134,"./da.js":134,"./de":135,"./de-at":136,"./de-at.js":136,"./de-ch":137,"./de-ch.js":137,"./de.js":135,"./dv":138,"./dv.js":138,"./el":139,"./el.js":139,"./en-SG":140,"./en-SG.js":140,"./en-au":141,"./en-au.js":141,"./en-ca":142,"./en-ca.js":142,"./en-gb":143,"./en-gb.js":143,"./en-ie":144,"./en-ie.js":144,"./en-il":145,"./en-il.js":145,"./en-nz":146,"./en-nz.js":146,"./eo":147,"./eo.js":147,"./es":148,"./es-do":149,"./es-do.js":149,"./es-us":150,"./es-us.js":150,"./es.js":148,"./et":151,"./et.js":151,"./eu":152,"./eu.js":152,"./fa":153,"./fa.js":153,"./fi":154,"./fi.js":154,"./fo":155,"./fo.js":155,"./fr":156,"./fr-ca":157,"./fr-ca.js":157,"./fr-ch":158,"./fr-ch.js":158,"./fr.js":156,"./fy":159,"./fy.js":159,"./ga":160,"./ga.js":160,"./gd":161,"./gd.js":161,"./gl":162,"./gl.js":162,"./gom-latn":163,"./gom-latn.js":163,"./gu":164,"./gu.js":164,"./he":165,"./he.js":165,"./hi":166,"./hi.js":166,"./hr":167,"./hr.js":167,"./hu":168,"./hu.js":168,"./hy-am":169,"./hy-am.js":169,"./id":170,"./id.js":170,"./is":171,"./is.js":171,"./it":172,"./it-ch":173,"./it-ch.js":173,"./it.js":172,"./ja":174,"./ja.js":174,"./jv":175,"./jv.js":175,"./ka":176,"./ka.js":176,"./kk":177,"./kk.js":177,"./km":178,"./km.js":178,"./kn":179,"./kn.js":179,"./ko":180,"./ko.js":180,"./ku":181,"./ku.js":181,"./ky":182,"./ky.js":182,"./lb":183,"./lb.js":183,"./lo":184,"./lo.js":184,"./lt":185,"./lt.js":185,"./lv":186,"./lv.js":186,"./me":187,"./me.js":187,"./mi":188,"./mi.js":188,"./mk":189,"./mk.js":189,"./ml":190,"./ml.js":190,"./mn":191,"./mn.js":191,"./mr":192,"./mr.js":192,"./ms":193,"./ms-my":194,"./ms-my.js":194,"./ms.js":193,"./mt":195,"./mt.js":195,"./my":196,"./my.js":196,"./nb":197,"./nb.js":197,"./ne":198,"./ne.js":198,"./nl":199,"./nl-be":200,"./nl-be.js":200,"./nl.js":199,"./nn":201,"./nn.js":201,"./pa-in":202,"./pa-in.js":202,"./pl":203,"./pl.js":203,"./pt":204,"./pt-br":205,"./pt-br.js":205,"./pt.js":204,"./ro":206,"./ro.js":206,"./ru":207,"./ru.js":207,"./sd":208,"./sd.js":208,"./se":209,"./se.js":209,"./si":210,"./si.js":210,"./sk":211,"./sk.js":211,"./sl":212,"./sl.js":212,"./sq":213,"./sq.js":213,"./sr":214,"./sr-cyrl":215,"./sr-cyrl.js":215,"./sr.js":214,"./ss":216,"./ss.js":216,"./sv":217,"./sv.js":217,"./sw":218,"./sw.js":218,"./ta":219,"./ta.js":219,"./te":220,"./te.js":220,"./tet":221,"./tet.js":221,"./tg":222,"./tg.js":222,"./th":223,"./th.js":223,"./tl-ph":224,"./tl-ph.js":224,"./tlh":225,"./tlh.js":225,"./tr":226,"./tr.js":226,"./tzl":227,"./tzl.js":227,"./tzm":228,"./tzm-latn":229,"./tzm-latn.js":229,"./tzm.js":228,"./ug-cn":230,"./ug-cn.js":230,"./uk":231,"./uk.js":231,"./ur":232,"./ur.js":232,"./uz":233,"./uz-latn":234,"./uz-latn.js":234,"./uz.js":233,"./vi":235,"./vi.js":235,"./x-pseudo":236,"./x-pseudo.js":236,"./yo":237,"./yo.js":237,"./zh-cn":238,"./zh-cn.js":238,"./zh-hk":239,"./zh-hk.js":239,"./zh-tw":240,"./zh-tw.js":240};function o(e){var t=n(e);return a(t)}function n(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=n,e.exports=o,o.id=351},38:function(e,t,a){"use strict";(function(e){var r,o=a(322),n=a.n(o),s=a(50),l=a.n(s),i=a(323),d=a.n(i),c=a(324);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var u,m,p=d()({},{en:c.a}),f="en",b={setLang:function(e){if(!n()(["en"],e))throw new Error("Invalid language: ".concat(e));f=e},getLang:function(){return f},get:function(e){return l()(p[f],e,l()(p.en,e,e))}};t.a=b,(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register("en","DEFAULT_LANGUAGE","/media/anhdo/Data/projects/react/simple-admin-SPA/src/i18n/index.js"),u.register(p,"all","/media/anhdo/Data/projects/react/simple-admin-SPA/src/i18n/index.js"),u.register(f,"lang","/media/anhdo/Data/projects/react/simple-admin-SPA/src/i18n/index.js"),u.register(b,"default","/media/anhdo/Data/projects/react/simple-admin-SPA/src/i18n/index.js")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)}).call(this,a(21)(e))},488:function(e,t,a){var r=a(489),o=a(490);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var n={insert:"head",singleton:!1},s=(r("!!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss",o,n),o.locals?o.locals:{});e.exports=s},490:function(e,t,a){(t=a(491)(!1)).push([e.i,'.text-uppercase{text-transform:uppercase}.abs-full{position:absolute;top:0;right:0;bottom:0;left:0}.abs-center{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.text-center{text-align:center}.text-right{text-align:right}.mb-md{margin-bottom:2rem}.ml-xs{margin-left:.5rem}.ml-md{margin-left:2rem}*,*::before,*::after{box-sizing:inherit;margin:0;padding:0}html{font-size:50%}@media only screen and (min-width: 840px){html{font-size:56.25%}}@media only screen and (min-width: 1160px){html{font-size:62.5%}}@media only screen and (min-width: 1600px){html{font-size:75%}}body{box-sizing:border-box;font-family:"Lato",sans-serif}.app-sidebar{min-height:100vh}.app-sidebar__heading{text-align:center;color:#fff}.app-posts{padding:4rem 2rem}@media only screen and (min-width: 1160px){.app-posts>.ant-table-wrapper>.ant-spin-nested-loading>.ant-spin-container>.ant-table>.ant-table-content>.ant-table-scroll>.ant-table-body{overflow-x:initial !important}}.login-page{min-height:100vh;padding-top:7rem;background-color:#f0eeee}.login-page__container{max-width:40rem;margin:0 auto;padding:7rem;background-color:#fff;box-shadow:0 1.5rem 3rem rgba(0,0,0,.2)}.admin-page{display:grid;grid-template-columns:minmax(min-content, 25rem) 1fr;min-height:100vh}.admin-page__header{text-align:right;background-color:#f0eeee}.admin-page__user{display:inline-block;padding:1rem 2rem;font-size:1.6rem;cursor:pointer}.admin-page__user:hover{background-color:#ccc}.admin-page__user-icon{margin-right:1rem}#root{min-height:100vh}',""]),e.exports=t},81:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return l}));var r,o=a(22);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var n,s,l=function(e){return{type:o.e,payload:e}};(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&n.register(l,"setLoggedInUser","/media/anhdo/Data/projects/react/simple-admin-SPA/src/redux/actions/user.js"),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)}).call(this,a(21)(e))}},[[341,1,2]]]);