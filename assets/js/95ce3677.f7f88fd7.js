"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9444],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5293:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={title:"Linking",sidebar_position:2},o=void 0,l={unversionedId:"features/linking",id:"features/linking",title:"Linking",description:"Use the ` component to navigate between pages. This is conceptually similar to the ` element in HTML.",source:"@site/docs/features/linking.md",sourceDirName:"features",slug:"/features/linking",permalink:"/router/docs/features/linking",draft:!1,editUrl:"https://github.com/expo/router/tree/main/docs/docs/features/linking.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Linking",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Routing",permalink:"/router/docs/features/routing"},next:{title:"404s",permalink:"/router/docs/features/unmatched"}},s={},p=[{value:"<code>useRouter</code>",id:"userouter",level:2},{value:"<code>Href</code> type",id:"href-type",level:3},{value:"<code>usePathname</code>",id:"usepathname",level:2},{value:"<code>useSearchParams</code>",id:"usesearchparams",level:2},{value:"<code>useSegments</code>",id:"usesegments",level:2},{value:"<code>useNavigation</code>",id:"usenavigation",level:2},{value:"Redirect",id:"redirect",level:2},{value:"Testing",id:"testing",level:2},{value:"Sitemap",id:"sitemap",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"<Link />")," component to navigate between pages. This is conceptually similar to the ",(0,i.kt)("inlineCode",{parentName:"p"},"<a>")," element in HTML."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { Link } from "expo-router";\n\nexport default function Page() {\n  return (\n    <View>\n      <Link href="/">Home</Link>\n    </View>\n  );\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"href")," accepts relative paths like ",(0,i.kt)("inlineCode",{parentName:"li"},"../settings")," or full paths like ",(0,i.kt)("inlineCode",{parentName:"li"},"/profile/settings"),". Relative paths are useful for shared routes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"href")," can also accept an object like ",(0,i.kt)("inlineCode",{parentName:"li"},"{ pathname: 'profile', params: { id: '123' } }")," to navigate to dynamic routes."),(0,i.kt)("li",{parentName:"ul"},"Use the ",(0,i.kt)("inlineCode",{parentName:"li"},"replace")," prop to replace the current route in the history instead of pushing a new route.")),(0,i.kt)("h2",{id:"userouter"},(0,i.kt)("inlineCode",{parentName:"h2"},"useRouter")),(0,i.kt)("p",null,"For more advanced use cases, you can use the imperative ",(0,i.kt)("inlineCode",{parentName:"p"},"useRouter()")," hook to navigate imperatively."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { View, Text } from "react-native";\nimport { useRouter } from "expo-router";\n\nexport default function Page() {\n  const router = useRouter();\n\n  return (\n    <View>\n      <Text onPress={() => router.push("/profile/settings")}>Settings</Text>\n    </View>\n  );\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"push"),": ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"em"},"(href: Href) => void"))," Navigate to a route. You can provide a full path like ",(0,i.kt)("inlineCode",{parentName:"li"},"/profile/settings")," or a relative path like ",(0,i.kt)("inlineCode",{parentName:"li"},"../settings"),". Navigate to dynamic routes by passing an object like ",(0,i.kt)("inlineCode",{parentName:"li"},"{ pathname: 'profile', params: { id: '123' } }"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"replace"),": ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"em"},"(href: Href) => void"))," Same API as ",(0,i.kt)("inlineCode",{parentName:"li"},"push")," but replaces the current route in the history instead of pushing a new one. This is useful for redirects."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"back"),": ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"em"},"() => void"))," Navigate to a route. You can provide a full path like ",(0,i.kt)("inlineCode",{parentName:"li"},"/profile/settings")," or a relative path like ",(0,i.kt)("inlineCode",{parentName:"li"},"../settings"),". Navigate to dynamic routes by passing an object like ",(0,i.kt)("inlineCode",{parentName:"li"},"{ pathname: 'profile', params: { id: '123' } }"),".")),(0,i.kt)("h3",{id:"href-type"},(0,i.kt)("inlineCode",{parentName:"h3"},"Href")," type"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Href")," type is a union of the following types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"string"),": A full path like ",(0,i.kt)("inlineCode",{parentName:"li"},"/profile/settings")," or a relative path like ",(0,i.kt)("inlineCode",{parentName:"li"},"../settings"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"object"),": An object with a ",(0,i.kt)("inlineCode",{parentName:"li"},"pathname")," and optional ",(0,i.kt)("inlineCode",{parentName:"li"},"params")," object. The ",(0,i.kt)("inlineCode",{parentName:"li"},"pathname")," can be a full path like ",(0,i.kt)("inlineCode",{parentName:"li"},"/profile/settings")," or a relative path like ",(0,i.kt)("inlineCode",{parentName:"li"},"../settings"),". The ",(0,i.kt)("inlineCode",{parentName:"li"},"params")," can be an object of key/value pairs.")),(0,i.kt)("h2",{id:"usepathname"},(0,i.kt)("inlineCode",{parentName:"h2"},"usePathname")),(0,i.kt)("p",null,"Returns the currently selected route location without search parameters. e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"/acme?foo=bar")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"/acme"),". Segments will be normalized: ",(0,i.kt)("inlineCode",{parentName:"p"},"/[id]?id=normal")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"/normal")),(0,i.kt)("h2",{id:"usesearchparams"},(0,i.kt)("inlineCode",{parentName:"h2"},"useSearchParams")),(0,i.kt)("p",null,"Returns ",(0,i.kt)("inlineCode",{parentName:"p"},"URLSearchParameters")," for the currently selected route."),(0,i.kt)("p",null,"Given a route at ",(0,i.kt)("inlineCode",{parentName:"p"},"app/profile/[id].tsx")," if the hook is called while the URL is ",(0,i.kt)("inlineCode",{parentName:"p"},"/profile/123"),", the results of ",(0,i.kt)("inlineCode",{parentName:"p"},"useSearchParams")," would be as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  id: "123";\n}\n')),(0,i.kt)("h2",{id:"usesegments"},(0,i.kt)("inlineCode",{parentName:"h2"},"useSegments")),(0,i.kt)("p",null,"Returns a list of segments for the currently selected route. Segments are not normalized, so they will be the same as the file path. e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"/[id]?id=normal")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},'["[id]"]')),(0,i.kt)("h2",{id:"usenavigation"},(0,i.kt)("inlineCode",{parentName:"h2"},"useNavigation")),(0,i.kt)("p",null,"Access the underlying React Navigation ",(0,i.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/navigation-prop"},(0,i.kt)("inlineCode",{parentName:"a"},"navigation")," prop")," to imperatively access layout-specific functionality like ",(0,i.kt)("inlineCode",{parentName:"p"},"navigation.openDrawer()")," in a Drawer layout. ",(0,i.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/navigation-prop/#navigator-dependent-functions"},"Learn more"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { useNavigation } from "expo-router";\n\nexport default function Route() {\n  const navigation = useNavigation();\n  return (\n    <View>\n      <Text\n        onPress={() => {\n          navigation.openDrawer();\n        }}\n      >\n        Open Drawer\n      </Text>\n    </View>\n  );\n}\n')),(0,i.kt)("h2",{id:"redirect"},"Redirect"),(0,i.kt)("p",null,"You can immediately redirect from a particular screen by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Redirect")," component:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { Redirect } from "expo-router";\n\nexport default function Page() {\n  // Some logic to determine if the user is logged in.\n  const { user } = useAuth();\n\n  if (!user) {\n    // Redirect to the login screen if the user is not authenticated.\n    return <Redirect href="/login" />;\n  }\n\n  return (\n    <View>\n      <Text>Welcome Back!</Text>\n    </View>\n  );\n}\n')),(0,i.kt)("p",null,"You can also redirect imperatively using the ",(0,i.kt)("inlineCode",{parentName:"p"},"useRouter")," hook:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { useRouter, useFocusEffect } from "expo-router";\n\nfunction MyScreen() {\n  const router = useRouter();\n\n  useFocusEffect(() => {\n    // Call the replace method to redirect to a new route without adding to the history.\n    // We do this in a useFocusEffect to ensure the redirect happens every time the screen\n    // is focused.\n    router.replace("/profile/settings");\n  });\n\n  return <Text>My Screen</Text>;\n}\n')),(0,i.kt)("h2",{id:"testing"},"Testing"),(0,i.kt)("p",null,"On native, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"uri-scheme")," CLI to test opening native links on a device."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx uri-scheme open exp://192.168.87.39:19000/--/form-sheet --ios\n")),(0,i.kt)("p",null,"You can also search for links directly in a browser like Safari or Chrome to test deep linking on physical devices. Learn more about ",(0,i.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/deep-linking"},"testing deep links"),"."),(0,i.kt)("h2",{id:"sitemap"},"Sitemap"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(2826).Z,width:"1920",height:"1080"})),(0,i.kt)("p",null,"We currently inject a ",(0,i.kt)("inlineCode",{parentName:"p"},"/_sitemap")," file which provides a list of all routes in the app. This is useful for debugging and development. This screen is only injected during development, and won't be available in production."),(0,i.kt)("p",null,"We may remove this feature for the official release, but it's useful for now."))}c.isMDXComponent=!0},2826:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/directory-d6318463da62250df9c154474cc8ab12.png"}}]);