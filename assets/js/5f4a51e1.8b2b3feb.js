"use strict";(self.webpackChunkhandson=self.webpackChunkhandson||[]).push([[7879],{990:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var t=s(4848),l=s(8453);const i={sidebar_label:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f5c\u6210",title:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f5c\u6210",description:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f5c\u6210\u65b9\u6cd5\u306e\u8aac\u660e"},c=void 0,d={id:"lp/start-project",title:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f5c\u6210",description:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f5c\u6210\u65b9\u6cd5\u306e\u8aac\u660e",source:"@site/docs/lp/start-project.md",sourceDirName:"lp",slug:"/lp/start-project",permalink:"/engineer-handson/docs/lp/start-project",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f5c\u6210",title:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f5c\u6210",description:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f5c\u6210\u65b9\u6cd5\u306e\u8aac\u660e"},sidebar:"lpSidebar",previous:{title:"\u74b0\u5883\u69cb\u7bc9",permalink:"/engineer-handson/docs/lp/environment"},next:{title:"\u30ec\u30a4\u30a2\u30a6\u30c8\u306e\u57fa\u672c",permalink:"/engineer-handson/docs/html-layout"}},r={},o=[{value:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f5c\u6210\u624b\u9806",id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f5c\u6210\u624b\u9806",level:2},{value:"1. \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u4f5c\u6210",id:"1-\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u4f5c\u6210",level:3},{value:"2. \u30d5\u30a1\u30a4\u30eb\u306e\u4f5c\u6210",id:"2-\u30d5\u30a1\u30a4\u30eb\u306e\u4f5c\u6210",level:3},{value:"3. destyle.css \u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",id:"3-destylecss-\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",level:3},{value:"3. HTML \u306e\u57fa\u672c\u69cb\u9020\u3092\u8a18\u8ff0",id:"3-html-\u306e\u57fa\u672c\u69cb\u9020\u3092\u8a18\u8ff0",level:3},{value:"4. Live Server \u306e\u8d77\u52d5",id:"4-live-server-\u306e\u8d77\u52d5",level:3},{value:"\u6b21\u306e\u30b9\u30c6\u30c3\u30d7",id:"\u6b21\u306e\u30b9\u30c6\u30c3\u30d7",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\u3053\u306e\u30b3\u30fc\u30b9\u3092\u9032\u3081\u308b\u306b\u3042\u305f\u3063\u3066\u3001\u30ed\u30fc\u30ab\u30eb\u3067 HTML/CSS \u306e\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f5c\u6210\u624b\u9806",children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f5c\u6210\u624b\u9806"}),"\n",(0,t.jsx)(n.h3,{id:"1-\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u4f5c\u6210",children:"1. \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u4f5c\u6210"}),"\n",(0,t.jsx)(n.p,{children:"\u307e\u305a\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4fdd\u5b58\u3059\u308b\u305f\u3081\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["VSCode \u3092\u4f7f\u3046\u5834\u5408\u306f\u3001\u30e1\u30cb\u30e5\u30fc\u306e File > Open Folder \u304b\u3089\u65b0\u898f\u30d5\u30a9\u30eb\u30c0\u3092\u4f5c\u6210\u3057\u3001\u958b\u3044\u3066\u304f\u3060\u3055\u3044\u3002\n\u30d5\u30a9\u30eb\u30c0\u540d\u306f\u4efb\u610f\u3067\u3059\u304c\u3001\u3053\u3053\u3067\u306f ",(0,t.jsx)(n.code,{children:"lp-project"})," \u3068\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Open Folder",src:s(1605).A+"",width:"1026",height:"727"}),"\n",(0,t.jsx)(n.img,{alt:"New Folder",src:s(5307).A+"",width:"806",height:"456"})]}),"\n",(0,t.jsx)(n.h3,{id:"2-\u30d5\u30a1\u30a4\u30eb\u306e\u4f5c\u6210",children:"2. \u30d5\u30a1\u30a4\u30eb\u306e\u4f5c\u6210"}),"\n",(0,t.jsx)(n.p,{children:"\u6b21\u306b\u3001HTML \u30d5\u30a1\u30a4\u30eb\u3068 CSS \u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.p,{children:"VSCode \u3092\u4f7f\u3046\u5834\u5408\u306f\u3001\u53f3\u30af\u30ea\u30c3\u30af\u30e1\u30cb\u30e5\u30fc\u306e New File \u304b\u3089\u65b0\u898f\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\n\u4ee5\u4e0b\u306e 4 \u3064\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"index.html"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"destyle.css"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"style.css"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"script.js"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"New File",src:s(1525).A+"",width:"1023",height:"623"}),"\n",(0,t.jsx)(n.img,{alt:"Name Index.html",src:s(2525).A+"",width:"1030",height:"572"})]}),"\n",(0,t.jsx)(n.h3,{id:"3-destylecss-\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",children:"3. destyle.css \u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"destyle.css"}),"\u306b\u306f\u3001\u30d6\u30e9\u30a6\u30b6\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u30b9\u30bf\u30a4\u30eb\u3092\u30ea\u30bb\u30c3\u30c8\u3059\u308b CSS \u3092\u8a18\u8ff0\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(9623).A+"",children:"destyle.css"})," \u3092\u958b\u3044\u3066\u3001\u30da\u30fc\u30b8\u5185\u306e CSS \u30b3\u30fc\u30c9\u3092\u30b3\u30d4\u30fc\u3057\u3001\u5148\u307b\u3069\u4f5c\u6210\u3057\u305f",(0,t.jsx)(n.code,{children:"destyle.css"})," \u5185\u306b\u8cbc\u308a\u4ed8\u3051\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"3-html-\u306e\u57fa\u672c\u69cb\u9020\u3092\u8a18\u8ff0",children:"3. HTML \u306e\u57fa\u672c\u69cb\u9020\u3092\u8a18\u8ff0"}),"\n",(0,t.jsx)(n.p,{children:"index.html \u306b\u3001\u4ee5\u4e0b\u306e\u5185\u5bb9\u3092\u8a18\u8ff0\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",metastring:'title="index.html"',children:'<!DOCTYPE html>\n<html lang="ja">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>LP \u30b5\u30a4\u30c8</title>\n    \x3c!-- Google Fonts --\x3e\n    <link rel="preconnect" href="https://fonts.googleapis.com" />\n    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n    <link\n      href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans+JP:wght@100..900&display=swap"\n      rel="stylesheet"\n    />\n\n    \x3c!-- CSS Styles --\x3e\n    <link rel="stylesheet" href="destyle.css" />\n    <link rel="stylesheet" href="style.css" />\n  </head>\n  <body>\n    \x3c!-- \u3053\u3053\u306b\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u8a18\u8ff0 --\x3e\n\n    \x3c!-- scripts --\x3e\n    <script src="script.js"><\/script>\n  </body>\n</html>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u3053\u306e\u3042\u3068\u306e\u30b9\u30c6\u30c3\u30d7\u3067\u306f\u3001",(0,t.jsx)(n.code,{children:"<body>"}),"\u30bf\u30b0\u5185\u306b\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u8a18\u8ff0\u3059\u308b\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"4-live-server-\u306e\u8d77\u52d5",children:"4. Live Server \u306e\u8d77\u52d5"}),"\n",(0,t.jsx)(n.p,{children:"HTML \u30d5\u30a1\u30a4\u30eb\u3092\u30d6\u30e9\u30a6\u30b6\u3067\u78ba\u8a8d\u3059\u308b\u305f\u3081\u306b\u3001Live Server \u3092\u8d77\u52d5\u3057\u307e\u3059\u3002\nindex.html \u30d5\u30a1\u30a4\u30eb\u3092\u958b\u3044\u305f\u72b6\u614b\u3067\u3001\u53f3\u4e0b\u306e\u300cGoLive\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Go Live",src:s(8205).A+"",width:"993",height:"600"})}),"\n",(0,t.jsxs)(n.p,{children:["\u30d6\u30e9\u30a6\u30b6\u304c\u81ea\u52d5\u7684\u306b\u958b\u304b\u308c\u3001",(0,t.jsx)(n.a,{href:"http://127.0.0.1:5500",children:"http://127.0.0.1:5500"})," \u306e URL \u3067\u3001index.html\n\u30d5\u30a1\u30a4\u30eb\u304c\u8868\u793a\u3055\u308c\u308b\u306f\u305a\u3067\u3059\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u6b21\u306e\u30b9\u30c6\u30c3\u30d7",children:"\u6b21\u306e\u30b9\u30c6\u30c3\u30d7"}),"\n",(0,t.jsx)(n.p,{children:"\u3053\u308c\u3067\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u6e96\u5099\u304c\u6574\u3044\u307e\u3057\u305f\u3002\n\u6b21\u306e\u30b9\u30c6\u30c3\u30d7\u304b\u3089\u3001HTML/CSS \u306e\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u3092\u9032\u3081\u3066\u3044\u304d\u307e\u3057\u3087\u3046\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},9623:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/destyle-9dac398eed6f0a6fc13abce69b2bdd6f.css"},8205:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/goLive-360804f7b18c2584803c9004a4d01512.png"},2525:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/naming-34b5c666a30c2172f6bdbdcfe2f2204c.png"},1525:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/newFile-8c22eca1db3014b25ea50daa3f98e5c5.png"},5307:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/newFolder-e8daa9c3c37cc77e19f96b9c157175cd.png"},1605:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/openFolder-73f4ed59310aa6a7cc190d26783cad9f.png"},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>d});var t=s(6540);const l={},i=t.createContext(l);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);