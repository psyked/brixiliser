(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1053:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(1060);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},1058:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(1),o=n.n(i),u=n(1057),c=n.n(u);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var l=n(35);n.d(t,"waitForRouteChange",function(){return l.c});var s=n(1059),d=n.n(s);n.d(t,"PageRenderer",function(){return d.a});var m=n(45);n.d(t,"parsePath",function(){return m.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},1059:function(e,t,n){var a;e.exports=(a=n(1062))&&a.default||a},1060:function(e,t,n){"use strict";var a=n(1061),r=n(0),i=n.n(r),o=n(1),u=n.n(o),c=n(1067),l=n.n(c),s=n(1058),d=n(60),m=Object(d.b)(function(e,t){return{pokemonid:e.pokemonid}},function(e){return{setPokemon:function(t){e({type:"SET_POKEMON",payload:{id:t}})}}})(function(e){var t=e.siteTitle,n=e.pokemonid,a=e.setPokemon;return i.a.createElement("div",{style:{background:"#D11013",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t)),n,i.a.createElement("button",{onClick:function(){return a(parseInt(n,10)+1)}},"Next"),i.a.createElement("button",{onClick:function(){return a(parseInt(n,10)-1)}},"Prev")))}),p=(n(1070),n(9)),f=n.n(p),h=n(56),y=n.n(h),g=(r.Component,n(1063),function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement("div",null,i.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto"}},t))},data:a})});g.propTypes={children:u.a.node.isRequired};t.a=g},1061:function(e){e.exports={data:{site:{siteMetadata:{title:"Brixiliser™"}}}}},1062:function(e,t,n){"use strict";n.r(t);n(30);var a=n(0),r=n.n(a),i=n(1),o=n.n(i),u=n(70),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({key:t.pathname,location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},1063:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-404-jsx-cf552fe2301192681cc5.js.map