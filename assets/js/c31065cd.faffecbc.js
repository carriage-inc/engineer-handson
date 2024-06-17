"use strict";(self.webpackChunkhandson=self.webpackChunkhandson||[]).push([[7724],{5548:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>o});var l=i(4848),r=i(8453);const s={title:"2. \u30de\u30a4\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3\u30fb\u30b7\u30fc\u30c7\u30a3\u30f3\u30b0\u30fb\u30e2\u30c7\u30eb\u4f5c\u6210",description:"\u30de\u30a4\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3\u30fb\u30b7\u30fc\u30c7\u30a3\u30f3\u30b0\u30fb\u30e2\u30c7\u30eb\u4f5c\u6210\u8ab2\u984c"},c=void 0,t={id:"crud/challenge/migration",title:"2. \u30de\u30a4\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3\u30fb\u30b7\u30fc\u30c7\u30a3\u30f3\u30b0\u30fb\u30e2\u30c7\u30eb\u4f5c\u6210",description:"\u30de\u30a4\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3\u30fb\u30b7\u30fc\u30c7\u30a3\u30f3\u30b0\u30fb\u30e2\u30c7\u30eb\u4f5c\u6210\u8ab2\u984c",source:"@site/docs/crud/challenge/migration.md",sourceDirName:"crud/challenge",slug:"/crud/challenge/migration",permalink:"/engineer-handson/docs/crud/challenge/migration",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"2. \u30de\u30a4\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3\u30fb\u30b7\u30fc\u30c7\u30a3\u30f3\u30b0\u30fb\u30e2\u30c7\u30eb\u4f5c\u6210",description:"\u30de\u30a4\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3\u30fb\u30b7\u30fc\u30c7\u30a3\u30f3\u30b0\u30fb\u30e2\u30c7\u30eb\u4f5c\u6210\u8ab2\u984c"},sidebar:"crudSidebar",previous:{title:"1. DB \u8a2d\u8a08",permalink:"/engineer-handson/docs/crud/challenge/db-design"},next:{title:"3. URL \u69cb\u6210\u8a2d\u8a08",permalink:"/engineer-handson/docs/crud/challenge/url-design"}},d={},o=[{value:"\u8ab2\u984c",id:"\u8ab2\u984c",level:2},{value:"\u8981\u4ef6",id:"\u8981\u4ef6",level:2},{value:"\u63d0\u51fa\u65b9\u6cd5",id:"\u63d0\u51fa\u65b9\u6cd5",level:2}];function a(n){const e={a:"a",h2:"h2",li:"li",ul:"ul",...(0,r.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u8ab2\u984c",children:"\u8ab2\u984c"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"/engineer-handson/docs/crud/challenge/db-design",children:"db-design.md"})," \u3067\u8a2d\u8a08\u3057\u305f\u30c6\u30fc\u30d6\u30eb\u3092\u5143\u306b\u3001\u30de\u30a4\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3\u30d5\u30a1\u30a4\u30eb\u3068\u30b7\u30fc\u30c7\u30a3\u30f3\u30b0\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,l.jsx)(e.li,{children:"\u30c6\u30fc\u30d6\u30eb\u306b\u5bfe\u5fdc\u3059\u308b\u30e2\u30c7\u30eb\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u3001\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u8981\u4ef6",children:"\u8981\u4ef6"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5916\u90e8\u30ad\u30fc\u5236\u7d04\u3092\u6b63\u3057\u304f\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u30de\u30a4\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3\u3068\u30b7\u30fc\u30c7\u30a3\u30f3\u30b0\u306e\u30b3\u30de\u30f3\u30c9\u304c\u30a8\u30e9\u30fc\u306a\u304f\u5b9f\u884c\u3067\u304d\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,l.jsxs)(e.li,{children:["\u30ab\u30c6\u30b4\u30ea\u306f\u56fa\u5b9a\u306e\u9078\u629e\u80a2\u3068\u3057\u305f\u3044\u305f\u3081\u3001\u30b7\u30fc\u30c7\u30a3\u30f3\u30b0\u30d5\u30a1\u30a4\u30eb\u3067\u4ee5\u4e0b\u306e\u30ab\u30c6\u30b4\u30ea\u3092\u767b\u9332\u3059\u308b\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u30a2\u30af\u30b7\u30e7\u30f3"}),"\n",(0,l.jsx)(e.li,{children:"\u30b3\u30e1\u30c7\u30a3"}),"\n",(0,l.jsx)(e.li,{children:"\u30db\u30e9\u30fc"}),"\n",(0,l.jsx)(e.li,{children:"\u30b5\u30a4\u30a8\u30f3\u30b9"}),"\n",(0,l.jsx)(e.li,{children:"\u30df\u30b9\u30c6\u30ea\u30fc"}),"\n",(0,l.jsx)(e.li,{children:"\u30ed\u30de\u30f3\u30b9"}),"\n",(0,l.jsx)(e.li,{children:"\u30d5\u30a1\u30f3\u30bf\u30b8\u30fc"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u63d0\u51fa\u65b9\u6cd5",children:"\u63d0\u51fa\u65b9\u6cd5"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u8ffd\u52a0\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u3092 GitHub \u306b\u30d7\u30c3\u30b7\u30e5\u3057\u3066\u30d7\u30eb\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u4f5c\u6210\u3057\u3001 URL \u3092\u5171\u6709\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(a,{...n})}):a(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>c,x:()=>t});var l=i(6540);const r={},s=l.createContext(r);function c(n){const e=l.useContext(s);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),l.createElement(s.Provider,{value:e},n.children)}}}]);