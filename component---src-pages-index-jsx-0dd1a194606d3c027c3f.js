(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{140:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(152);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("p",null,"Hello, my name is Michael McKay and this is my website."),r.a.createElement("p",null,"I'm a PhD student at the University of Glasgow, interested in the field of algorithms and stable matching."),r.a.createElement("p",null,"You can email me"),r.a.createElement("ul",null,r.a.createElement("li",null,"professionally at"," ",r.a.createElement("code",null,"michael.mckay (at) glasgow (dot) ac (dot) uk")),r.a.createElement("li",null,"personally at ",r.a.createElement("code",null,"michael_mac_i (at) me (dot) com"))))}},144:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return h});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(143),u=a.n(o);a.d(t,"Link",function(){return u.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var c=a(27);a.d(t,"waitForRouteChange",function(){return c.c});var s=a(145),d=a.n(s);a.d(t,"PageRenderer",function(){return d.a});var m=a(38);a.d(t,"parsePath",function(){return m.a});var p=r.a.createContext({}),h=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},145:function(e,t,a){var n;e.exports=(n=a(147))&&n.default||n},146:function(e){e.exports={data:{site:{siteMetadata:{title:"michael's homepage"}}}}},147:function(e,t,a){"use strict";a.r(t);a(39);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(52),u=a(1),c=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({key:t.pathname,location:t,pageResources:a},a.json))};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},148:function(e,t,a){e.exports={menulink:"header-module--menulink--WI7pQ",menu:"header-module--menu--ZYk9A",header:"header-module--header--L1ZnK"}},150:function(e,t,a){},152:function(e,t,a){"use strict";var n=a(146),r=a(0),i=a.n(r),l=a(4),o=a.n(l),u=a(153),c=a.n(u),s=a(144),d=a(148),m=a.n(d),p=function(e){var t=e.siteTitle;return i.a.createElement("div",{className:m.a.header},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))},h=(a(150),function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:n})});h.propTypes={children:o.a.node.isRequired};t.a=h}}]);
//# sourceMappingURL=component---src-pages-index-jsx-0dd1a194606d3c027c3f.js.map