(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{139:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(152);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},144:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return h});var a=n(0),r=n.n(a),i=n(4),u=n.n(i),o=n(143),c=n.n(o);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var l=n(27);n.d(t,"waitForRouteChange",function(){return l.c});var s=n(145),d=n.n(s);n.d(t,"PageRenderer",function(){return d.a});var m=n(38);n.d(t,"parsePath",function(){return m.a});var p=r.a.createContext({}),h=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},145:function(e,t,n){var a;e.exports=(a=n(147))&&a.default||a},146:function(e){e.exports={data:{site:{siteMetadata:{title:"michael's homepage"}}}}},147:function(e,t,n){"use strict";n.r(t);n(39);var a=n(0),r=n.n(a),i=n(4),u=n.n(i),o=n(52),c=n(1),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({key:t.pathname,location:t,pageResources:n},n.json))};l.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},t.default=l},148:function(e,t,n){e.exports={menulink:"header-module--menulink--WI7pQ",menu:"header-module--menu--ZYk9A",header:"header-module--header--L1ZnK"}},150:function(e,t,n){},152:function(e,t,n){"use strict";var a=n(146),r=n(0),i=n.n(r),u=n(4),o=n.n(u),c=n(153),l=n.n(c),s=n(144),d=n(148),m=n.n(d),p=function(e){var t=e.siteTitle;return i.a.createElement("div",{className:m.a.header},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))},h=(n(150),function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:a})});h.propTypes={children:o.a.node.isRequired};t.a=h}}]);
//# sourceMappingURL=component---src-pages-404-jsx-8bbfd5b771874efc6b5e.js.map