"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2202],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=s(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||l[h]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1725:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={title:"Authentication"},i=void 0,u={unversionedId:"guides/auth",id:"guides/auth",title:"Authentication",description:"It's common to restrict certain routes to users who are not authenticated. In expo-router, you can use the redirect prop on the `` component to prevent access to a route.",source:"@site/docs/guides/auth.md",sourceDirName:"guides",slug:"/guides/auth",permalink:"/router/docs/guides/auth",draft:!1,editUrl:"https://github.com/expo/router/tree/main/docs/docs/guides/auth.md",tags:[],version:"current",frontMatter:{title:"Authentication"},sidebar:"tutorialSidebar",previous:{title:"Nesting navigators",permalink:"/router/docs/guides/nesting-navigators"},next:{title:"Hosting",permalink:"/router/docs/guides/hosting"}},c={},s=[],p={toc:s};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"It's common to restrict certain routes to users who are not authenticated. In ",(0,o.kt)("inlineCode",{parentName:"p"},"expo-router"),", you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"redirect")," prop on the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Screen />")," component to prevent access to a route."),(0,o.kt)("p",null,"Consider the following project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="File System"',title:'"File','System"':!0},"app/\n  _layout.js\n  sign-in.js\n  (app)/\n    index.js\n")),(0,o.kt)("p",null,"We can configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"/(app)")," routes to be redirect when the user is not authenticated:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=app/_layout.js",title:"app/_layout.js"},'import { Layout } from "expo-router";\n\n// Some generic authentication system...\nimport { AuthContext } from "../context/auth";\n\nexport default function Root() {\n  return (\n    // Setup the auth context and render our layout inside of it.\n    <AuthContext.Provider>\n      <RootLayout />\n    </AuthContext.Provider>\n  );\n}\n\nfunction RootLayout() {\n  // Use some global auth context to control the route access.\n  const auth = AuthContext.useToken();\n\n  return (\n    // Create a basic custom layout to render some children routes.\n    <Layout>\n      <Layout.Screen\n        name="(app)/index"\n        // When the auth is unavailable (no user signed in), restrict access to all the routes in the `(app)` directory.\n        redirect={!auth}\n      />\n      <Layout.Screen\n        name="sign-in"\n        // When the auth is available (user is signed in), restrict access to the sign-in page.\n        redirect={auth}\n      />\n\n      <Layout.Children />\n    </Layout>\n  );\n}\n')),(0,o.kt)("p",null,"Now if the authentication state changes globally, the user will be redirected to the appropriate route."))}l.isMDXComponent=!0}}]);