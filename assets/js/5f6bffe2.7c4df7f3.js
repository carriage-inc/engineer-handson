"use strict";(self.webpackChunkhandson=self.webpackChunkhandson||[]).push([[3059],{9907:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var i=d(4848),r=d(8453);const s={sidebar_label:"Grid",title:"Grid",description:"Grid \u30ec\u30a4\u30a2\u30a6\u30c8\u306e\u4f7f\u3044\u65b9\u3092\u8aac\u660e\u3057\u307e\u3059\u3002"},t="Grid \u306e\u4f7f\u3044\u65b9",l={id:"lp/html-layout/grid",title:"Grid",description:"Grid \u30ec\u30a4\u30a2\u30a6\u30c8\u306e\u4f7f\u3044\u65b9\u3092\u8aac\u660e\u3057\u307e\u3059\u3002",source:"@site/docs/lp/html-layout/grid.md",sourceDirName:"lp/html-layout",slug:"/lp/html-layout/grid",permalink:"/engineer-handson/docs/lp/html-layout/grid",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Grid",title:"Grid",description:"Grid \u30ec\u30a4\u30a2\u30a6\u30c8\u306e\u4f7f\u3044\u65b9\u3092\u8aac\u660e\u3057\u307e\u3059\u3002"},sidebar:"lpSidebar",previous:{title:"Flexbox",permalink:"/engineer-handson/docs/lp/html-layout/flex"},next:{title:"\u30ec\u30b9\u30dd\u30f3\u30b7\u30d6\u30c7\u30b6\u30a4\u30f3",permalink:"/engineer-handson/docs/lp/html-layout/responsive"}},o={},a=[{value:"1. Grid Container \u3068 Grid Items \u306e\u8a2d\u5b9a",id:"1-grid-container-\u3068-grid-items-\u306e\u8a2d\u5b9a",level:2},{value:"2. Grid Template Columns and Rows",id:"2-grid-template-columns-and-rows",level:2},{value:"3. Grid Gap",id:"3-grid-gap",level:2},{value:"4. Grid Area",id:"4-grid-area",level:2},{value:"5. Grid Item \u306e\u500b\u5225\u8a2d\u5b9a",id:"5-grid-item-\u306e\u500b\u5225\u8a2d\u5b9a",level:2},{value:"6. Justify Items \u3068 Align Items",id:"6-justify-items-\u3068-align-items",level:2},{value:"7. Justify Content \u3068 Align Content",id:"7-justify-content-\u3068-align-content",level:2},{value:"\u307e\u3068\u3081",id:"\u307e\u3068\u3081",level:2}];function p(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"grid-\u306e\u4f7f\u3044\u65b9",children:"Grid \u306e\u4f7f\u3044\u65b9"}),"\n",(0,i.jsx)(n.h2,{id:"1-grid-container-\u3068-grid-items-\u306e\u8a2d\u5b9a",children:"1. Grid Container \u3068 Grid Items \u306e\u8a2d\u5b9a"}),"\n",(0,i.jsx)(n.p,{children:"\u307e\u305a\u306f index.html \u3068 style.css \u3092\u4ee5\u4e0b\u306e\u5185\u5bb9\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:'title="index.html"',children:'<div class="container">\n  <div class="item" id="item1">Item 1</div>\n  <div class="item" id="item2">Item 2</div>\n  <div class="item" id="item3">Item 3</div>\n  <div class="item" id="item4">Item 4</div>\n</div>\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",metastring:'title="style.css"',children:".container {\n  border: 1px solid;\n  padding: 16px;\n}\n\n.item {\n  border: 1px solid;\n  padding: 8px;\n}\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/lp/start-project#3-html-%E3%81%AE%E5%9F%BA%E6%9C%AC%E6%A7%8B%E9%80%A0%E3%82%92%E8%A8%98%E8%BF%B0",children:"HTML \u306e\u57fa\u672c\u69cb\u9020"})," \u306e index.html \u3092\u30b3\u30d4\u30fc\u3057\u3066\u3001body \u30bf\u30b0\u5185\u306b\u8a18\u8ff0\u3057\u3066\u4e0b\u3055\u3044\u3002"]})}),"\n",(0,i.jsx)(n.p,{children:"\u6b21\u306e\u3088\u3046\u306b\u7e26\u4e26\u3073\u306e\u30a2\u30a4\u30c6\u30e0\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,i.jsxs)("div",{class:"container",style:{marginBottom:"16px",border:"1px solid",padding:"16px"},children:[(0,i.jsx)("div",{class:"item",style:{border:"1px solid",padding:"8px"},children:"Item 1"}),(0,i.jsx)("div",{class:"item",style:{border:"1px solid",padding:"8px"},children:"Item 2"}),(0,i.jsx)("div",{class:"item",style:{border:"1px solid",padding:"8px"},children:"Item 3"}),(0,i.jsx)("div",{class:"item",style:{border:"1px solid",padding:"8px"},children:"Item 4"})]}),"\n",(0,i.jsxs)(n.p,{children:["Grid \u3092\u4f7f\u7528\u3059\u308b\u306b\u306f\u3001\u307e\u305a\u3001\u89aa\u8981\u7d20\uff08container\uff09\u306b",(0,i.jsx)(n.code,{children:"display: grid"}),"\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",metastring:'title="style.css"',children:".container {\n  border: 1px solid;\n  padding: 16px;\n  display: grid; /* \u8ffd\u52a0 */\n}\n\n.item {\n  border: 1px solid;\n  padding: 8px;\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"2-grid-template-columns-and-rows",children:"2. Grid Template Columns and Rows"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"grid-template-columns"}),"\u304a\u3088\u3073",(0,i.jsx)(n.code,{children:"grid-template-rows"}),"\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u4f7f\u7528\u3057\u3066\u3001\u30b0\u30ea\u30c3\u30c9\u306e\u5217\u3068\u884c\u306e\u30b5\u30a4\u30ba\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",metastring:'title="style.css"',children:".container {\n  border: 1px solid;\n  padding: 16px;\n  display: grid;\n  grid-template-columns: 100px 200px;\n  grid-template-rows: 150px 200px;\n}\n\n.item {\n  border: 1px solid;\n  padding: 8px;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u306e\u4f8b\u3067\u306f\u30012 \u5217\u3068 2 \u884c\u306e\u30b0\u30ea\u30c3\u30c9\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002\u5404\u5217\u3068\u884c\u306e\u30b5\u30a4\u30ba\u306f\u3001\u30d4\u30af\u30bb\u30eb\u307e\u305f\u306f\u30d1\u30fc\u30bb\u30f3\u30c8\u3067\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsxs)("div",{class:"container",style:{marginBottom:"16px",border:"1px solid",padding:"16px",display:"grid",gridTemplateColumns:"100px 200px",gridTemplateRows:"150px 200px"},children:[(0,i.jsx)("div",{class:"item",style:{border:"1px solid",padding:"8px"},children:"Item 1"}),(0,i.jsx)("div",{class:"item",style:{border:"1px solid",padding:"8px"},children:"Item 2"}),(0,i.jsx)("div",{class:"item",style:{border:"1px solid",padding:"8px"},children:"Item 3"}),(0,i.jsx)("div",{class:"item",style:{border:"1px solid",padding:"8px"},children:"Item 4"})]}),"\n",(0,i.jsx)(n.h2,{id:"3-grid-gap",children:"3. Grid Gap"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"grid-gap"}),"\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u4f7f\u7528\u3057\u3066\u3001\u30b0\u30ea\u30c3\u30c9\u30a2\u30a4\u30c6\u30e0\u9593\u306e\u9593\u9694\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"row-gap"}),"\u3001\u304a\u3088\u3073 ",(0,i.jsx)(n.code,{children:"column-gap"}),"\u3092\u4f7f\u7528\u3057\u3066\u3001\u884c\u3068\u5217\u306e\u9593\u9694\u3092\u500b\u5225\u306b\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",metastring:'title="style.css"',children:".container {\n  border: 1px solid;\n  padding: 16px;\n  display: grid;\n  grid-template-columns: 100px 200px;\n  grid-template-rows: 150px 200px;\n  grid-gap: 10px;\n}\n\n.item {\n  border: 1px solid;\n  padding: 8px;\n}\n"})}),"\n",(0,i.jsxs)("div",{class:"container",style:{marginBottom:"16px",border:"1px solid",padding:"16px",display:"grid",gridTemplateColumns:"100px 200px",gridTemplateRows:"150px 200px",gridGap:"10px"},children:[(0,i.jsx)("div",{class:"item",style:{border:"1px solid",padding:"8px"},children:"Item 1"}),(0,i.jsx)("div",{class:"item",style:{border:"1px solid",padding:"8px"},children:"Item 2"}),(0,i.jsx)("div",{class:"item",style:{border:"1px solid",padding:"8px"},children:"Item 3"}),(0,i.jsx)("div",{class:"item",style:{border:"1px solid",padding:"8px"},children:"Item 4"})]}),"\n",(0,i.jsx)(n.h2,{id:"4-grid-area",children:"4. Grid Area"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"grid-template-areas"}),"\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u4f7f\u7528\u3057\u3066\u3001\u30b0\u30ea\u30c3\u30c9\u30ec\u30a4\u30a2\u30a6\u30c8\u5185\u306e\u30a8\u30ea\u30a2\u3092\u540d\u524d\u3067\u5b9a\u7fa9\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",metastring:'title="style.css"',children:'.container {\n  border: 1px solid;\n  padding: 16px;\n  display: grid;\n  grid-template-columns: 100px 100px 100px;\n  grid-template-rows: 100px 100px;\n  grid-template-areas:\n    "header header header"\n    "sidebar content content"\n    "footer footer footer";\n}\n\n.item {\n  border: 1px solid;\n  padding: 8px;\n}\n\n#item1 {\n  grid-area: header;\n}\n\n#item2 {\n  grid-area: sidebar;\n}\n\n#item3 {\n  grid-area: content;\n}\n\n#item4 {\n  grid-area: footer;\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u3053\u306e\u4f8b\u3067\u306f\u30013 \u5217\u3068 2 \u884c\u306e\u30b0\u30ea\u30c3\u30c9\u304c\u4f5c\u6210\u3055\u308c\u3001\u5404\u30a8\u30ea\u30a2\u306b\u30a2\u30a4\u30c6\u30e0\u304c\u914d\u7f6e\u3055\u308c\u3066\u3044\u307e\u3059\u3002\n\u5404\u30b0\u30ea\u30c3\u30c9\u30a2\u30a4\u30c6\u30e0\u306b\u306f\u3001",(0,i.jsx)(n.code,{children:"grid-area"}),"\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u4f7f\u7528\u3057\u3066\u30a8\u30ea\u30a2\u540d\u3092\u5272\u308a\u5f53\u3066\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)("div",{class:"container",style:{marginBottom:"16px",border:"1px solid",padding:"16px",display:"grid",gridTemplateColumns:"100px 100px 100px",gridTemplateRows:"100px 100px",gridTemplateAreas:'\n      "header header header"\n      "sidebar content content"\n      "footer footer footer\n    '},children:[(0,i.jsx)("div",{class:"item",style:{border:"1px solid",padding:"8px",gridArea:"header"},children:"Item 1"}),(0,i.jsx)("div",{class:"item",style:{border:"1px solid",padding:"8px",gridArea:"sidebar"},children:"Item 2"}),(0,i.jsx)("div",{class:"item",style:{border:"1px solid",padding:"8px",gridArea:"content"},children:"Item 3"}),(0,i.jsx)("div",{class:"item",style:{border:"1px solid",padding:"8px",gridArea:"footer"},children:"Item 4"})]}),"\n",(0,i.jsx)(n.h2,{id:"5-grid-item-\u306e\u500b\u5225\u8a2d\u5b9a",children:"5. Grid Item \u306e\u500b\u5225\u8a2d\u5b9a"}),"\n",(0,i.jsx)(n.p,{children:"\u30b0\u30ea\u30c3\u30c9\u30a2\u30a4\u30c6\u30e0\u306e\u4f4d\u7f6e\u3084\u30b5\u30a4\u30ba\u306f\u3001\u4ee5\u4e0b\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u4f7f\u7528\u3057\u3066\u500b\u5225\u306b\u8a2d\u5b9a\u3067\u304d\u307e\u3059\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"grid-column-start"})," / ",(0,i.jsx)(n.code,{children:"grid-column-end"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"grid-row-start"})," / ",(0,i.jsx)(n.code,{children:"grid-row-end"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"grid-column"})," (grid-column-start \u3068 grid-column-end \u306e\u30b7\u30e7\u30fc\u30c8\u30cf\u30f3\u30c9)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"grid-row"})," (grid-row-start \u3068 grid-row-end \u306e\u30b7\u30e7\u30fc\u30c8\u30cf\u30f3\u30c9)"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",metastring:'title="style.css"',children:".container {\n  border: 1px solid;\n  padding: 16px;\n  display: grid;\n  grid-template-columns: 100px 200px;\n  grid-template-rows: 150px 200px 100px;\n}\n\n.item {\n  border: 1px solid;\n  padding: 8px;\n}\n\n#item1 {\n  grid-column-start: 1;\n  grid-column-end: 3;\n  grid-row-start: 1;\n  grid-row-end: 2;\n}\n\n#item2 {\n  grid-column-start: 1;\n  grid-column-end: 2;\n  grid-row-start: 2;\n  grid-row-end: 3;\n}\n\n#item3 {\n  grid-column-start: 2;\n  grid-column-end: 3;\n  grid-row-start: 2;\n  grid-row-end: 3;\n}\n\n#item4 {\n  grid-column-start: 1;\n  grid-column-end: 3;\n  grid-row-start: 3;\n  grid-row-end: 4;\n}\n"})}),"\n",(0,i.jsxs)("div",{class:"container",style:{marginBottom:"16px",border:"1px solid",padding:"16px",display:"grid",gridTemplateColumns:"100px 200px",gridTemplateRows:"150px 200px 100px"},children:[(0,i.jsx)("div",{class:"item",style:{border:"1px solid",padding:"8px",gridColumnStart:1,gridColumnEnd:3,gridRowStart:1,gridRowEnd:2},children:"Item 1"}),(0,i.jsx)("div",{class:"item",style:{border:"1px solid",padding:"8px",gridColumnStart:1,gridColumnEnd:2,gridRowStart:2,gridRowEnd:3},children:"Item 2"}),(0,i.jsx)("div",{class:"item",style:{border:"1px solid",padding:"8px",gridColumnStart:2,gridColumnEnd:3,gridRowStart:2,gridRowEnd:3},children:"Item 3"}),(0,i.jsx)("div",{class:"item",style:{border:"1px solid",padding:"8px",gridColumnStart:1,gridColumnEnd:3,gridRowStart:3,gridRowEnd:4},children:"Item 4"})]}),"\n",(0,i.jsx)(n.h2,{id:"6-justify-items-\u3068-align-items",children:"6. Justify Items \u3068 Align Items"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"justify-items"}),"\u304a\u3088\u3073",(0,i.jsx)(n.code,{children:"align-items"}),"\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u4f7f\u7528\u3057\u3066\u3001\u5404\u30b0\u30ea\u30c3\u30c9\u30a2\u30a4\u30c6\u30e0\u306e\u6c34\u5e73\u304a\u3088\u3073\u5782\u76f4\u65b9\u5411\u306e\u914d\u7f6e\u65b9\u6cd5\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u8a2d\u5b9a\u3067\u304d\u308b\u5024\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"stretch"}),"\uff08\u30c7\u30d5\u30a9\u30eb\u30c8\uff09: \u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u30b0\u30ea\u30c3\u30c9\u30a2\u30a4\u30c6\u30e0\u306e\u30b5\u30a4\u30ba\u306b\u5408\u308f\u305b\u3066\u4f38\u7e2e\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"start"}),": \u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u958b\u59cb\u4f4d\u7f6e\u306b\u914d\u7f6e\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"end"}),": \u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u7d42\u4e86\u4f4d\u7f6e\u306b\u914d\u7f6e\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"center"}),": \u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u4e2d\u592e\u306b\u914d\u7f6e\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",metastring:'title="style.css"',children:".container {\n  border: 1px solid;\n  padding: 16px;\n  display: grid;\n  grid-template-columns: 100px 200px;\n  grid-template-rows: 150px 200px;\n  grid-gap: 10px;\n  justify-items: center;\n  align-items: end;\n}\n\n.item {\n  border: 1px solid;\n  padding: 8px;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u306e\u4f8b\u3067\u306f\u3001\u5404\u30b0\u30ea\u30c3\u30c9\u30a2\u30a4\u30c6\u30e0\u304c\u4e2d\u592e\u306b\u914d\u7f6e\u3055\u308c\u3001\u5782\u76f4\u65b9\u5411\u306b\u4e0b\u306b\u914d\u7f6e\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,i.jsxs)("div",{class:"container",style:{marginBottom:"16px",border:"1px solid",padding:"16px",display:"grid",gridTemplateColumns:"100px 200px",gridTemplateRows:"150px 200px",gridGap:"10px",justifyItems:"center",alignItems:"end"},children:[(0,i.jsx)("div",{class:"item",style:{border:"1px solid",padding:"8px"},children:"Item 1"}),(0,i.jsx)("div",{class:"item",style:{border:"1px solid",padding:"8px"},children:"Item 2"}),(0,i.jsx)("div",{class:"item",style:{border:"1px solid",padding:"8px"},children:"Item 3"}),(0,i.jsx)("div",{class:"item",style:{border:"1px solid",padding:"8px"},children:"Item 4"})]}),"\n",(0,i.jsx)(n.h2,{id:"7-justify-content-\u3068-align-content",children:"7. Justify Content \u3068 Align Content"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"justify-content"}),"\u304a\u3088\u3073",(0,i.jsx)(n.code,{children:"align-content"}),"\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u4f7f\u7528\u3057\u3066\u3001\u30b0\u30ea\u30c3\u30c9\u5168\u4f53\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u914d\u7f6e\u65b9\u6cd5\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u8a2d\u5b9a\u3067\u304d\u308b\u5024\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"stretch"}),"\uff08\u30c7\u30d5\u30a9\u30eb\u30c8\uff09: \u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u30b0\u30ea\u30c3\u30c9\u30b3\u30f3\u30c6\u30ca\u306e\u30b5\u30a4\u30ba\u306b\u5408\u308f\u305b\u3066\u4f38\u7e2e\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"start"}),": \u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u958b\u59cb\u4f4d\u7f6e\u306b\u914d\u7f6e\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"end"}),": \u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u7d42\u4e86\u4f4d\u7f6e\u306b\u914d\u7f6e\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"center"}),": \u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u4e2d\u592e\u306b\u914d\u7f6e\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".container {\n  border: 1px solid;\n  padding: 16px;\n  display: grid;\n  grid-template-columns: 100px 200px;\n  grid-template-rows: 150px 200px;\n  grid-gap: 10px;\n  justify-items: center;\n  align-items: end;\n  justify-content: center;\n  align-content: end;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u306e\u4f8b\u3067\u306f\u3001\u30b0\u30ea\u30c3\u30c9\u5168\u4f53\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u304c\u4e2d\u592e\u306b\u914d\u7f6e\u3055\u308c\u3001\u5782\u76f4\u65b9\u5411\u306b\u4e0b\u306b\u914d\u7f6e\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,i.jsxs)("div",{class:"container",style:{marginBottom:"16px",border:"1px solid",padding:"16px",display:"grid",gridTemplateColumns:"100px 200px",gridTemplateRows:"150px 200px",gridGap:"10px",justifyItems:"center",alignItems:"end",justifyContent:"center",alignContent:"end"},children:[(0,i.jsx)("div",{class:"item",style:{border:"1px solid",padding:"8px"},children:"Item 1"}),(0,i.jsx)("div",{class:"item",style:{border:"1px solid",padding:"8px"},children:"Item 2"}),(0,i.jsx)("div",{class:"item",style:{border:"1px solid",padding:"8px"},children:"Item 3"}),(0,i.jsx)("div",{class:"item",style:{border:"1px solid",padding:"8px"},children:"Item 4"})]}),"\n",(0,i.jsx)(n.h2,{id:"\u307e\u3068\u3081",children:"\u307e\u3068\u3081"}),"\n",(0,i.jsxs)(n.p,{children:["Grid \u30ec\u30a4\u30a2\u30a6\u30c8\u3082\u3001Flexbox \u3068\u540c\u69d8\u306b\u3001Web \u30da\u30fc\u30b8\u306e\u30ec\u30a4\u30a2\u30a6\u30c8\u3092\u67d4\u8edf\u306b\u8a2d\u8a08\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",(0,i.jsx)(n.br,{}),"\n","\u6697\u8a18\u3059\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u304c\u3001\u30ec\u30a4\u30a2\u30a6\u30c8\u3092\u8a2d\u8a08\u3059\u308b\u969b\u306b\u3001\u30a2\u30ec\u3042\u3063\u305f\u306a\u3068\u601d\u3044\u51fa\u305b\u308b\u3088\u3046\u306b\u3057\u3066\u304a\u304d\u307e\u3057\u3087\u3046\u3002"]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},8453:(e,n,d)=>{d.d(n,{R:()=>t,x:()=>l});var i=d(6540);const r={},s=i.createContext(r);function t(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);