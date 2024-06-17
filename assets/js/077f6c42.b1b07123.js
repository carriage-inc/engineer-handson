"use strict";(self.webpackChunkhandson=self.webpackChunkhandson||[]).push([[5952],{6650:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>o});var l=i(4848),r=i(8453);const t={title:"\u8ab2\u984c\u306e\u6982\u8981",description:"CRUD\u30b5\u30a4\u30c8\u8ab2\u984c\u306e\u6982\u8981"},s=void 0,d={id:"crud/challenge/intro",title:"\u8ab2\u984c\u306e\u6982\u8981",description:"CRUD\u30b5\u30a4\u30c8\u8ab2\u984c\u306e\u6982\u8981",source:"@site/docs/crud/challenge/intro.md",sourceDirName:"crud/challenge",slug:"/crud/challenge/intro",permalink:"/engineer-handson/docs/crud/challenge/intro",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"\u8ab2\u984c\u306e\u6982\u8981",description:"CRUD\u30b5\u30a4\u30c8\u8ab2\u984c\u306e\u6982\u8981"},sidebar:"crudSidebar",previous:{title:"\u8ab2\u984c",permalink:"/engineer-handson/docs/crud/challenge"},next:{title:"1. DB \u8a2d\u8a08",permalink:"/engineer-handson/docs/crud/challenge/db-design"}},c={},o=[{value:"\u30c7\u30b6\u30a4\u30f3",id:"\u30c7\u30b6\u30a4\u30f3",level:2},{value:"\u624b\u9806",id:"\u624b\u9806",level:2},{value:"\u5fc5\u8981\u30d5\u30a1\u30a4\u30eb\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",id:"\u5fc5\u8981\u30d5\u30a1\u30a4\u30eb\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",level:2},{value:"\u63d0\u51fa\u65b9\u6cd5",id:"\u63d0\u51fa\u65b9\u6cd5",level:2}];function a(e){const n={a:"a",h2:"h2",li:"li",ol:"ol",p:"p",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"\u6620\u753b\u9451\u8cde\u8a18\u9332\u304c\u3067\u304d\u308b\u67b6\u7a7a\u30b5\u30fc\u30d3\u30b9\u300cCinemaLog\u300d\u3092\u3001PHP \u306e Web \u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3067\u3042\u308b Laravel \u3092\u4f7f\u3063\u3066\u4f5c\u6210\u3057\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u30c7\u30b6\u30a4\u30f3",children:"\u30c7\u30b6\u30a4\u30f3"}),"\n",(0,l.jsx)(n.p,{children:"\u30c7\u30b6\u30a4\u30f3\u306f\u4ee5\u4e0b\u306b\u793a\u3059 Figma \u30d5\u30a1\u30a4\u30eb\u3092\u53c2\u8003\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://www.figma.com/design/8ywrAB97pUmUCnDFkDZSNx/%E3%80%90%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%8B%E3%82%A2%E9%A4%8A%E6%88%90%E3%80%91CRUD%E3%82%B5%E3%82%A4%E3%83%88?node-id=144-36&t=DMI83Yq2AVUlhRNj-1",children:"\u30c7\u30b6\u30a4\u30f3\u30d5\u30a1\u30a4\u30eb\u306e\u30ea\u30f3\u30af"})}),"\n",(0,l.jsx)("iframe",{width:"100%",height:"650",src:"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F8ywrAB97pUmUCnDFkDZSNx%2F%25E3%2580%2590%25E3%2582%25A8%25E3%2583%25B3%25E3%2582%25B8%25E3%2583%258B%25E3%2582%25A2%25E9%25A4%258A%25E6%2588%2590%25E3%2580%2591CRUD%25E3%2582%25B5%25E3%2582%25A4%25E3%2583%2588%3Fnode-id%3D181-57%26t%3DL0LzY9denj0Jed0r-1%26scaling%3Dscale-down%26page-id%3D144%253A36%26starting-point-node-id%3D181%253A57",allowfullscreen:!0}),"\n",(0,l.jsx)(n.h2,{id:"\u624b\u9806",children:"\u624b\u9806"}),"\n",(0,l.jsx)(n.p,{children:"\u4ee5\u4e0b\u306e\u30b9\u30c6\u30c3\u30d7\u306b\u5f93\u3063\u3066\u3001CRUD \u30b5\u30a4\u30c8\u3092\u4f5c\u6210\u3057\u3066\u3044\u304d\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"DB \u8a2d\u8a08"}),"\n",(0,l.jsx)(n.li,{children:"\u30de\u30a4\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3\u30fb\u30b7\u30fc\u30c7\u30a3\u30f3\u30b0\u30fb\u30e2\u30c7\u30eb\u4f5c\u6210"}),"\n",(0,l.jsx)(n.li,{children:"URL \u69cb\u6210\u8a2d\u8a08"}),"\n",(0,l.jsx)(n.li,{children:"Breeze \u5c0e\u5165\u3001\u7a7a\u306e\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc\u30fb\u30d3\u30e5\u30fc\u4f5c\u6210\u3001\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u8a2d\u5b9a"}),"\n",(0,l.jsx)(n.li,{children:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u4f5c\u6210"}),"\n",(0,l.jsx)(n.li,{children:"\u30ea\u30b9\u30c8\u753b\u9762\u5b9f\u88c5"}),"\n",(0,l.jsx)(n.li,{children:"\u8a73\u7d30\u753b\u9762\u5b9f\u88c5"}),"\n",(0,l.jsx)(n.li,{children:"\u767b\u9332\u753b\u9762\u5b9f\u88c5"}),"\n",(0,l.jsx)(n.li,{children:"\u7de8\u96c6\u753b\u9762\u5b9f\u88c5"}),"\n",(0,l.jsx)(n.li,{children:"\u30c8\u30c3\u30d7\u753b\u9762\u3001\u767b\u9332\u30fb\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u5b9f\u88c5"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u5fc5\u8981\u30d5\u30a1\u30a4\u30eb\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",children:"\u5fc5\u8981\u30d5\u30a1\u30a4\u30eb\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"}),"\n",(0,l.jsx)(n.p,{children:"\u4ee5\u4e0b\u306e\u30ea\u30f3\u30af\u304b\u3089\u3001\u8ab2\u984c\u3067\u4f7f\u7528\u3059\u308b\u753b\u50cf\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:i(7421).A+"",children:"zip \u30d5\u30a1\u30a4\u30eb\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"})}),"\n",(0,l.jsx)(n.p,{children:"\u30a2\u30a4\u30b3\u30f3\u306a\u3069\u306e\u30ea\u30bd\u30fc\u30b9\u306f\u3001Figma \u30d5\u30a1\u30a4\u30eb\u306e export \u6a5f\u80fd\u3092\u4f7f\u3063\u3066\u3082\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u63d0\u51fa\u65b9\u6cd5",children:"\u63d0\u51fa\u65b9\u6cd5"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u4f5c\u696d\u7528\u306e Github \u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u4f5c\u6210\u3057\u3001\u8ab2\u984c\u3092\u5b9f\u88c5\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u8a2d\u8a08\u8ab2\u984c\u306e\u5834\u5408\u306f\u3001\u305d\u308c\u305e\u308c\u306e\u8ab2\u984c\u3054\u3068\u306e\u63d0\u51fa\u65b9\u6cd5\u306b\u5f93\u3063\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u5b9f\u88c5\u8ab2\u984c\u306e\u5834\u5408\u306f\u3001\u30d7\u30eb\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u4f5c\u3063\u3066\u30b3\u30fc\u30c9\u30ec\u30d3\u30e5\u30fc\u3092\u4f9d\u983c\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},7421:(e,n,i)=>{i.d(n,{A:()=>l});const l=i.p+"assets/files/cinemalog_images-f4634d6835828978ebc9f2d69e0f43d6.zip"},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>d});var l=i(6540);const r={},t=l.createContext(r);function s(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);