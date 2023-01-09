"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8339],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8504:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={title:"Routing",sidebar_position:1},o=void 0,l={unversionedId:"features/routing",id:"features/routing",title:"Routing",description:"The file-based routing convention enables developers to structure their app in a logic and intuitive way. Expo Router uses this convention to optimize the app by generating native deep links and web routes automatically.",source:"@site/docs/features/routing.md",sourceDirName:"features",slug:"/features/routing",permalink:"/router/docs/features/routing",draft:!1,editUrl:"https://github.com/expo/router/tree/main/docs/docs/features/routing.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Routing",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/router/docs/"},next:{title:"Linking",permalink:"/router/docs/features/linking"}},s={},p=[{value:"Pages",id:"pages",level:2},{value:"Dynamic Routes",id:"dynamic-routes",level:2},{value:"Layouts",id:"layouts",level:2},{value:"Native Layouts",id:"native-layouts",level:3},{value:"Layout Settings",id:"layout-settings",level:3},{value:"Groups",id:"groups",level:2},{value:"Shared Routes",id:"shared-routes",level:3},{value:"Arrays",id:"arrays",level:3}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The file-based routing convention enables developers to structure their app in a logic and intuitive way. Expo Router uses this convention to optimize the app by generating native deep links and web routes automatically."),(0,r.kt)("p",null,"The convention is based on the concept of nesting routes inside each other to create shared UI elements like tab bars and headers across multiple children. This format should feel familiar to React developers."),(0,r.kt)("p",null,"File-based routing enables URLs for every page in your app. All routes must be created within the root ",(0,r.kt)("inlineCode",{parentName:"p"},"app/")," directory. Within this directory, you can create routes by defining files using the route name."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app/home.js")," matches ",(0,r.kt)("inlineCode",{parentName:"li"},"/home"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app/settings/index.js")," matches ",(0,r.kt)("inlineCode",{parentName:"li"},"/settings"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app/[user].js")," matches any unmatched path like ",(0,r.kt)("inlineCode",{parentName:"li"},"/evanbacon")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"/expo"),".")),(0,r.kt)("h2",{id:"pages"},"Pages"),(0,r.kt)("p",null,"Pages are defined by exporting a React component as the default value from a file in the app directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app/home.js"',title:'"app/home.js"'},'import { Text } from "react-native";\n\nexport default function Home() {\n  return <Text>Home page</Text>;\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Files named ",(0,r.kt)("inlineCode",{parentName:"li"},"index")," add no path segment to the URL. For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"app/index.js")," matches ",(0,r.kt)("inlineCode",{parentName:"li"},"/"),"."),(0,r.kt)("li",{parentName:"ul"},"The following extensions are supported by default: ",(0,r.kt)("inlineCode",{parentName:"li"},"js"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"jsx"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ts"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"tsx"),"."),(0,r.kt)("li",{parentName:"ul"},"Metro platform extensions (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},".ios.js"),", ",(0,r.kt)("inlineCode",{parentName:"li"},".native.ts"),") are not currently supported.")),(0,r.kt)("h2",{id:"dynamic-routes"},"Dynamic Routes"),(0,r.kt)("p",null,"Dynamic routes match any unmatched path at a given segment level."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app/blog/[slug].js")," -- Matches ",(0,r.kt)("inlineCode",{parentName:"li"},"/blog/123")," in your app and in the browser."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app/blog/[...rest].js")," -- Matches ",(0,r.kt)("inlineCode",{parentName:"li"},"/blog/123/settings")," in your app and in the browser.")),(0,r.kt)("p",null,"Routes with higher specificity will be matched before a dynamic route. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"/blog/bacon")," will match ",(0,r.kt)("inlineCode",{parentName:"p"},"blog/bacon.js")," before ",(0,r.kt)("inlineCode",{parentName:"p"},"blog/[id].js"),"."),(0,r.kt)("p",null,"Multiple slugs can be matched in a single route by adding the ",(0,r.kt)("em",{parentName:"p"},"rest syntax"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"..."),". For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"app/blog/[...id].js")," will match ",(0,r.kt)("inlineCode",{parentName:"p"},"/blog/123/settings")," in your app and in the browser."),(0,r.kt)("h2",{id:"layouts"},"Layouts"),(0,r.kt)("p",null,"Pages on their own fill the entire screen. Moving between them is a full page transition with no animation."),(0,r.kt)("p",null,"In native apps, users expect shared elements like headers and tab bars to persist between pages. These can be created using ",(0,r.kt)("em",{parentName:"p"},"layout routes"),"."),(0,r.kt)("p",null,"To create a layout route for a directory, create a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"_layout.js")," in the directory, and export a React component as ",(0,r.kt)("em",{parentName:"p"},"default"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app/home/_layout.js"',title:'"app/home/_layout.js"'},'import { Children } from "expo-router";\n\nexport default function HomeLayout() {\n  return <Children />;\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<Children />")," will render the selected child route. This component can be wrapped with other components to create a layout."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app/home/_layout.js"',title:'"app/home/_layout.js"'},'import { Children } from "expo-router";\n\nexport default function HomeLayout() {\n  return (\n    <>\n      <Header />\n      <Children />\n      <Footer />\n    </>\n  );\n}\n')),(0,r.kt)("h3",{id:"native-layouts"},"Native Layouts"),(0,r.kt)("p",null,"Mobile app users expect a refined platform-specific look and native feel for layouts. Expo Router provides a few drop-in native layouts that you can use to easily achieve familiar native behavior."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Stack")," - Render a stack of screens like a deck of cards with a header on top. This is a native stack navigator that uses native animations and gestures. Extends the library ",(0,r.kt)("a",{parentName:"li",href:"https://reactnavigation.org/docs/native-stack-navigator"},(0,r.kt)("inlineCode",{parentName:"a"},"@react-navigation/native-stack")),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Tabs")," - Render screens with a tab bar below. ",(0,r.kt)("a",{parentName:"li",href:"https://reactnavigation.org/docs/bottom-tab-navigator/"},(0,r.kt)("inlineCode",{parentName:"a"},"@react-navigation/bottom-tabs")),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app/home/_layout.js"',title:'"app/home/_layout.js"'},"import { Stack } from 'expo-router';\n\nexport default function HomeLayout() {\n    return (\n        <Stack screenOptions={{ ... }} />\n    )\n}\n")),(0,r.kt)("h3",{id:"layout-settings"},"Layout Settings"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Unstable: This feature will be replaced with something that supports React Suspense in the future.")),(0,r.kt)("p",null,"To support defining the ",(0,r.kt)("inlineCode",{parentName:"p"},"initialRouteName")," you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"unstable_settings")," object export from any Layout Route."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="File System"',title:'"File','System"':!0},"app/\n  _layout.js\n  index.js\n  other.js\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=app/_layout.tsx",title:"app/_layout.tsx"},'import { Stack } from "expo-router";\n\nexport const unstable_settings = {\n  // Ensure any route can link back to `/`\n  initialRouteName: "index",\n};\n\nexport default function Layout() {\n  return <Stack />;\n}\n')),(0,r.kt)("p",null,"Now deep linking directly to ",(0,r.kt)("inlineCode",{parentName:"p"},"/other")," or reloading the page will continue to show the back arrow."),(0,r.kt)("p",null,"When using ",(0,r.kt)("a",{parentName:"p",href:"#arrays"},"array syntax")," ",(0,r.kt)("inlineCode",{parentName:"p"},"(foo,bar)")," you can specify the name of a group in the ",(0,r.kt)("inlineCode",{parentName:"p"},"unstable_settings")," object to target a particular segment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'export const unstable_settings = {\n  // Used for `(foo)`\n  initialRouteName: "first",\n  // Used for `(bar)`\n  bar: {\n    initialRouteName: "second",\n  },\n};\n')),(0,r.kt)("h2",{id:"groups"},"Groups"),(0,r.kt)("p",null,"You can prevent a segment from showing in the URL by using the group syntax ",(0,r.kt)("inlineCode",{parentName:"p"},"()"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app/root/home.js")," -- Matches ",(0,r.kt)("inlineCode",{parentName:"li"},"/root/home"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app/(root)/home.js")," -- Matches ",(0,r.kt)("inlineCode",{parentName:"li"},"/home"),".")),(0,r.kt)("p",null,"This is useful for adding layouts without adding additional segments to the URL."),(0,r.kt)("h3",{id:"shared-routes"},"Shared Routes"),(0,r.kt)("p",null,"To match the same URL with different layouts, use ",(0,r.kt)("em",{parentName:"p"},"groups")," with overlapping child routes."),(0,r.kt)("p",null,"This pattern is very common in native apps. For example, in Twitter, a profile can be viewed in every tab (home, search, profile). There should only be one URL needed to access this route however."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="File System"',title:'"File','System"':!0},"app/\n  _layout.js # Tab bar\n  (home)\n    _layout.js # Header\n    [user].js # Matches `/baconbrix`\n  (search)\n    _layout.js # Header with search bar\n    [user].js # Also matches `/baconbrix`\n  (profile)\n    _layout.js # Folding profile header\n    [user].js # Also matches `/baconbrix`\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When reloading the page, the first match (alphabetically) will be rendered.")),(0,r.kt)("p",null,"Shared routes can be navigated to directly by including the group name in the route, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"/(search)/baconbrix")," would navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"/baconbrix")," in the ",(0,r.kt)("em",{parentName:"p"},"search")," layout."),(0,r.kt)("h3",{id:"arrays"},"Arrays"),(0,r.kt)("p",null,"Instead of defining the same route multiple times with different layouts, use the array syntax ",(0,r.kt)("inlineCode",{parentName:"p"},"(,)")," to duplicate the children of a group."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app/(home,search)/[user].js")," -- creates ",(0,r.kt)("inlineCode",{parentName:"li"},"app/(home)/[user].js")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"app/(search)/[user].js")," in memory.")),(0,r.kt)("p",null,"Distinguishing between the two routes using the ",(0,r.kt)("inlineCode",{parentName:"p"},"segment")," prop of a layout."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app/(home,search)/_layout.js"',title:'"app/(home,search)/_layout.js"'},'export default function DynamicLayout({ segment }) {\n  if (segment === "(search)") {\n    return <SearchStack />;\n  }\n\n  return <Stack />;\n}\n')))}m.isMDXComponent=!0}}]);