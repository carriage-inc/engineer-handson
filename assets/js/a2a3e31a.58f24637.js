"use strict";(self.webpackChunkhandson=self.webpackChunkhandson||[]).push([[3756],{22519:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>c,default:()=>o,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var n=t(74848),s=t(28453);const l={slug:"initialize-github",title:"\u3010GitHub\u3011\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u4f5c\u6210\u304b\u3089\u30ea\u30dd\u30b8\u30c8\u30ea\u4f5c\u6210\u307e\u3067\u306e\u624b\u9806",date:"2024-07-11T10:00",authors:["inoue"],tags:["Git"]},c=void 0,d={permalink:"/engineer-handson/blog/initialize-github",source:"@site/blog/initialize-github/initialize-github.md",title:"\u3010GitHub\u3011\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u4f5c\u6210\u304b\u3089\u30ea\u30dd\u30b8\u30c8\u30ea\u4f5c\u6210\u307e\u3067\u306e\u624b\u9806",description:"GitHub \u306f\u3001Git \u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u30db\u30b9\u30c6\u30a3\u30f3\u30b0\u3059\u308b\u305f\u3081\u306e\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002GitHub \u3092\u4f7f\u3046\u3053\u3068\u3067\u3001\u8907\u6570\u306e\u4eba\u304c\u5354\u529b\u3057\u3066\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u9032\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",date:"2024-07-11T10:00:00.000Z",tags:[{inline:!0,label:"Git",permalink:"/engineer-handson/blog/tags/git"}],readingTime:6.185,hasTruncateMarker:!1,authors:[{name:"\u30e6\u30fc\u30b9\u30b1",title:"Carriage CEO",imageURL:"/engineer-handson/img/inoue.jpeg",key:"inoue"}],frontMatter:{slug:"initialize-github",title:"\u3010GitHub\u3011\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u4f5c\u6210\u304b\u3089\u30ea\u30dd\u30b8\u30c8\u30ea\u4f5c\u6210\u307e\u3067\u306e\u624b\u9806",date:"2024-07-11T10:00",authors:["inoue"],tags:["Git"]},unlisted:!1,prevItem:{title:"\u3010GitHub\u3011\u30d6\u30e9\u30f3\u30c1\u306e\u4f5c\u6210\u304b\u3089\u30d7\u30eb\u30ea\u30af\u30a8\u30b9\u30c8\u307e\u3067\u306e\u624b\u9806",permalink:"/engineer-handson/blog/github-pull-request"},nextItem:{title:"\u3010POST or GET?\u3011HTTP\u30e1\u30bd\u30c3\u30c9\u306b\u3064\u3044\u3066\u89e3\u8aac",permalink:"/engineer-handson/blog/http-method"}},a={authorsImageUrls:[void 0]},h=[{value:"GitHub \u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u4f5c\u6210",id:"github-\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u4f5c\u6210",level:2},{value:"SSH \u63a5\u7d9a\u306e\u8a2d\u5b9a",id:"ssh-\u63a5\u7d9a\u306e\u8a2d\u5b9a",level:2},{value:"SSH \u30ad\u30fc\u306e\u767b\u9332",id:"ssh-\u30ad\u30fc\u306e\u767b\u9332",level:3},{value:"\u63a5\u7d9a\u78ba\u8a8d",id:"\u63a5\u7d9a\u78ba\u8a8d",level:3},{value:"\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u4f5c\u6210",id:"\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u4f5c\u6210",level:2},{value:"\u7a7a\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u4f5c\u6210\u3059\u308b",id:"\u7a7a\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u4f5c\u6210\u3059\u308b",level:3},{value:"\u30ed\u30fc\u30ab\u30eb\u306e Git \u30ea\u30dd\u30b8\u30c8\u30ea\u3068\u9023\u643a\u3059\u308b",id:"\u30ed\u30fc\u30ab\u30eb\u306e-git-\u30ea\u30dd\u30b8\u30c8\u30ea\u3068\u9023\u643a\u3059\u308b",level:3},{value:"1. GitHub \u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u30ed\u30fc\u30ab\u30eb\u306b\u30af\u30ed\u30fc\u30f3\u3059\u308b\u65b9\u6cd5",id:"1-github-\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u30ed\u30fc\u30ab\u30eb\u306b\u30af\u30ed\u30fc\u30f3\u3059\u308b\u65b9\u6cd5",level:4},{value:"2. \u30ed\u30fc\u30ab\u30eb\u3068 GitHub \u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u7d10\u3065\u3051\u3066\u5229\u7528\u3059\u308b\u65b9\u6cd5",id:"2-\u30ed\u30fc\u30ab\u30eb\u3068-github-\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u7d10\u3065\u3051\u3066\u5229\u7528\u3059\u308b\u65b9\u6cd5",level:4}];function r(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:"GitHub \u306f\u3001Git \u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u30db\u30b9\u30c6\u30a3\u30f3\u30b0\u3059\u308b\u305f\u3081\u306e\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002GitHub \u3092\u4f7f\u3046\u3053\u3068\u3067\u3001\u8907\u6570\u306e\u4eba\u304c\u5354\u529b\u3057\u3066\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u9032\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,n.jsx)(i.p,{children:"\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001Git \u306e\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9\u306f\u7406\u89e3\u3057\u3066\u3044\u308b\u524d\u63d0\u3067\u3001GitHub \u3067\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u4f5c\u6210\u3084\u30b3\u30fc\u30c9\u306e\u7ba1\u7406\u65b9\u6cd5\u306b\u3064\u3044\u3066\u89e3\u8aac\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(i.h2,{id:"github-\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u4f5c\u6210",children:"GitHub \u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u4f5c\u6210"}),"\n",(0,n.jsxs)(i.p,{children:["\u307e\u305a\u306f\u3001GitHub \u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3057\u3087\u3046\u3002",(0,n.jsx)(i.a,{href:"https://github.com/",children:"GitHub \u306e\u30db\u30fc\u30e0\u30da\u30fc\u30b8"}),"\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(i.p,{children:"Sign up \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u753b\u9762\u306e\u6d41\u308c\u306b\u5f93\u3063\u3066\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,n.jsx)(i.p,{children:"\u9014\u4e2d\u3067\u6599\u91d1\u30d7\u30e9\u30f3\u3092\u9078\u629e\u3059\u308b\u753b\u9762\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u304c\u3001\u7121\u6599\u30d7\u30e9\u30f3\u3067\u554f\u984c\u3042\u308a\u307e\u305b\u3093\u3002"}),"\n",(0,n.jsx)(i.h2,{id:"ssh-\u63a5\u7d9a\u306e\u8a2d\u5b9a",children:"SSH \u63a5\u7d9a\u306e\u8a2d\u5b9a"}),"\n",(0,n.jsx)(i.h3,{id:"ssh-\u30ad\u30fc\u306e\u767b\u9332",children:"SSH \u30ad\u30fc\u306e\u767b\u9332"}),"\n",(0,n.jsx)(i.p,{children:"GitHub \u306b\u30b3\u30fc\u30c9\u3092\u30d7\u30c3\u30b7\u30e5\u3057\u305f\u308a\u3001\u30d7\u30eb\u3057\u305f\u308a\u3059\u308b\u305f\u3081\u306b\u306f\u3001SSH \u30ad\u30fc\u3092 GitHub \u306b\u767b\u9332\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,n.jsx)(i.p,{children:"\u307e\u305a\u306f\u3001SSH \u30ad\u30fc\u3092\u30ed\u30fc\u30ab\u30eb\u3067\u751f\u6210\u3057\u307e\u3059\u3002\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u3001SSH \u30ad\u30fc\u3092\u751f\u6210\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"cd ~/.ssh\nssh-keygen -t rsa -f github\n"})}),"\n",(0,n.jsxs)(i.p,{children:["\u5b9f\u884c\u3059\u308b\u3068\u8272\u3005\u805e\u304b\u308c\u307e\u3059\u304c\u3001\u305d\u306e\u307e\u307e Enter \u30ad\u30fc\u3092\u62bc\u3057\u3066\u9032\u3081\u3066\u304f\u3060\u3055\u3044\u3002\u5b9f\u884c\u304c\u5b8c\u4e86\u3059\u308b\u3068\u3001",(0,n.jsx)(i.code,{children:"github"})," \u3068 ",(0,n.jsx)(i.code,{children:"github.pub"})," \u3068\u3044\u3046\u30d5\u30a1\u30a4\u30eb\u304c\u751f\u6210\u3055\u308c\u307e\u3059\u3002",(0,n.jsx)(i.code,{children:"github.pub"}),"\u304c\u516c\u958b\u9375\u306a\u306e\u3067\u3001\u3053\u306e\u30d5\u30a1\u30a4\u30eb\u3092 GitHub \u306b\u767b\u9332\u3057\u3066\u3044\u304d\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(i.p,{children:"GitHub \u306b\u623b\u3063\u3066\u3001 \u53f3\u4e0a\u306e\u30a2\u30d0\u30bf\u30fc\u30a2\u30a4\u30b3\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001Settings \u3092\u9078\u629e\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"alt text",src:t(6593).A+"",width:"853",height:"708"})}),"\n",(0,n.jsx)(i.p,{children:"\u5de6\u30e1\u30cb\u30e5\u30fc\u306e SSH and GPG keys \u3092\u9078\u629e\u3057\u3001New SSH key \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"alt text",src:t(53457).A+"",width:"1671",height:"923"})}),"\n",(0,n.jsxs)(i.p,{children:["\u767b\u9332\u753b\u9762\u306b\u306a\u308b\u306e\u3067\u3001Title \u306b\u4efb\u610f\u306e\u540d\u524d\u3092\u5165\u529b\u3057\u3001Key \u306b",(0,n.jsx)(i.code,{children:"github.pub"})," \u30d5\u30a1\u30a4\u30eb\u306e\u4e2d\u8eab\u3092\u30b3\u30d4\u30fc\u3057\u3066 Add SSH key \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"alt text",src:t(27143).A+"",width:"1574",height:"893"})}),"\n",(0,n.jsx)(i.p,{children:"\u3053\u308c\u3067 SSH \u30ad\u30fc\u306e\u767b\u9332\u304c\u5b8c\u4e86\u3057\u307e\u3057\u305f\u3002"}),"\n",(0,n.jsx)(i.h3,{id:"\u63a5\u7d9a\u78ba\u8a8d",children:"\u63a5\u7d9a\u78ba\u8a8d"}),"\n",(0,n.jsx)(i.p,{children:"\u7d9a\u3044\u3066\u3001SSH \u63a5\u7d9a\u3092\u78ba\u8a8d\u3057\u3066\u3044\u304d\u307e\u3059\u3002\n\u307e\u305a\u306f SSH Config \u30d5\u30a1\u30a4\u30eb\u306e\u8a2d\u5b9a\u3092\u884c\u3044\u307e\u3059\u3002"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"~/.ssh/config"})," \u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u3001\u4ee5\u4e0b\u306e\u5185\u5bb9\u3092\u8a18\u8ff0\u3057\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"Host github github.com\n  HostName github.com\n  IdentityFile ~/.ssh/github\n  User git\n"})}),"\n",(0,n.jsx)(i.p,{children:"\u305d\u3057\u3066\u3001\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u3001SSH \u63a5\u7d9a\u304c\u3067\u304d\u308b\u304b\u78ba\u8a8d\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"ssh -T github\n"})}),"\n",(0,n.jsx)(i.p,{children:"\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u8868\u793a\u3055\u308c\u308c\u3070\u3001SSH \u63a5\u7d9a\u304c\u6210\u529f\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"Hi {username}! You've successfully authenticated, but GitHub does not provide shell access.\n"})}),"\n",(0,n.jsx)(i.h2,{id:"\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u4f5c\u6210",children:"\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u4f5c\u6210"}),"\n",(0,n.jsx)(i.h3,{id:"\u7a7a\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u4f5c\u6210\u3059\u308b",children:"\u7a7a\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u4f5c\u6210\u3059\u308b"}),"\n",(0,n.jsx)(i.p,{children:"GitHub \u3067\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u4f5c\u6210\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,n.jsx)(i.p,{children:"GitHub \u306b\u30ed\u30b0\u30a4\u30f3\u3059\u308b\u3068\u3001\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u304c\u8868\u793a\u3055\u308c\u308b\u306e\u3067\u3001\u5de6\u30e1\u30cb\u30e5\u30fc\u306e\u300cCreate repository\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"alt text",src:t(72028).A+"",width:"1673",height:"967"})}),"\n",(0,n.jsx)(i.p,{children:"\u3059\u308b\u3068\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u753b\u9762\u304c\u8868\u793a\u3055\u308c\u308b\u306e\u3067\u3001Repository name \u306b\u30ea\u30dd\u30b8\u30c8\u30ea\u540d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30ea\u30dd\u30b8\u30c8\u30ea\u306f\u516c\u958b\u7bc4\u56f2\u306e\u8a2d\u5b9a\u304c\u53ef\u80fd\u3067\u3001Public \u306b\u3059\u308b\u3068\u8ab0\u3067\u3082\u95b2\u89a7\u3067\u304d\u308b\u30ea\u30dd\u30b8\u30c8\u30ea\u306b\u306a\u308a\u3001Private \u306b\u3059\u308b\u3068\u3001\u81ea\u5206\u4ee5\u5916\u306f\u95b2\u89a7\u3067\u304d\u306a\u3044\u30ea\u30dd\u30b8\u30c8\u30ea\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,n.jsx)(i.p,{children:"\u305d\u308c\u4ee5\u5916\u306e\u8a2d\u5b9a\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u307e\u307e\u3067\u554f\u984c\u3042\u308a\u307e\u305b\u3093\u3002"}),"\n",(0,n.jsx)(i.p,{children:"\u5165\u529b\u304c\u5b8c\u4e86\u3057\u305f\u3089\u3001Create repository \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"alt text",src:t(29277).A+"",width:"1679",height:"972"})}),"\n",(0,n.jsx)(i.p,{children:"\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u4f5c\u6210\u65b9\u6cd5\u306f\u3001\u5927\u304d\u304f\u5206\u3051\u3066\u4ee5\u4e0b\u306e 2 \u7a2e\u985e\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,n.jsx)(i.h3,{id:"\u30ed\u30fc\u30ab\u30eb\u306e-git-\u30ea\u30dd\u30b8\u30c8\u30ea\u3068\u9023\u643a\u3059\u308b",children:"\u30ed\u30fc\u30ab\u30eb\u306e Git \u30ea\u30dd\u30b8\u30c8\u30ea\u3068\u9023\u643a\u3059\u308b"}),"\n",(0,n.jsx)(i.p,{children:"\u30ed\u30fc\u30ab\u30eb\u306e Git \u30ea\u30dd\u30b8\u30c8\u30ea\u3092 GitHub \u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u3068\u9023\u643a\u3055\u305b\u308b\u65b9\u6cd5\u306f\u3001\u4ee5\u4e0b\u306e 2 \u7a2e\u985e\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"GitHub \u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u30ed\u30fc\u30ab\u30eb\u306b\u30af\u30ed\u30fc\u30f3\u3059\u308b\u65b9\u6cd5"}),"\n",(0,n.jsx)(i.li,{children:"\u30ed\u30fc\u30ab\u30eb\u3068 GitHub \u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u7d10\u3065\u3051\u3066\u5229\u7528\u3059\u308b\u65b9\u6cd5"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Laravel \u3084 Next.js \u306a\u3069\u306e\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3067\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u308b\u969b\u306b\u30ed\u30fc\u30ab\u30eb\u306b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30d5\u30a9\u30eb\u30c0\u304c\u4f5c\u6210\u3055\u308c\u308b\u306e\u3067\u30012 \u756a\u76ee\u306e\u65b9\u6cd5\u3092\u4f7f\u3046\u3053\u3068\u304c\u591a\u3044\u3067\u3059\u3002"}),"\n",(0,n.jsx)(i.h4,{id:"1-github-\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u30ed\u30fc\u30ab\u30eb\u306b\u30af\u30ed\u30fc\u30f3\u3059\u308b\u65b9\u6cd5",children:"1. GitHub \u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u30ed\u30fc\u30ab\u30eb\u306b\u30af\u30ed\u30fc\u30f3\u3059\u308b\u65b9\u6cd5"}),"\n",(0,n.jsx)(i.p,{children:"git \u30b3\u30de\u30f3\u30c9\u3067\u30ed\u30fc\u30ab\u30eb\u306b\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u30af\u30ed\u30fc\u30f3\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u306e\u3067\u3001\u753b\u50cf\u306e\u3088\u3046\u306b SSH \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u304b\u3089\u3001URL \u3092\u30b3\u30d4\u30fc\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"alt text",src:t(94148).A+"",width:"1657",height:"958"})}),"\n",(0,n.jsx)(i.p,{children:"\u305d\u3057\u3066\u3001\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u3001\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u30af\u30ed\u30fc\u30f3\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"git clone {git@\u3067\u59cb\u307e\u308b\u30ea\u30dd\u30b8\u30c8\u30ea\u306e URL}\n"})}),"\n",(0,n.jsx)(i.p,{children:"\u305d\u3057\u3066\u3001\u30af\u30ed\u30fc\u30f3\u3057\u305f\u30ea\u30dd\u30b8\u30c8\u30ea\u3092 VSCode \u306a\u3069\u3067\u958b\u3044\u3066\u958b\u767a\u3092\u884c\u3044\u3001\u30b3\u30df\u30c3\u30c8\u3057\u3066\u30d7\u30c3\u30b7\u30e5\u3059\u308b\u3053\u3068\u3067\u3001GitHub \u306b\u30b3\u30fc\u30c9\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,n.jsx)(i.h4,{id:"2-\u30ed\u30fc\u30ab\u30eb\u3068-github-\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u7d10\u3065\u3051\u3066\u5229\u7528\u3059\u308b\u65b9\u6cd5",children:"2. \u30ed\u30fc\u30ab\u30eb\u3068 GitHub \u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u7d10\u3065\u3051\u3066\u5229\u7528\u3059\u308b\u65b9\u6cd5"}),"\n",(0,n.jsx)(i.p,{children:"\u307e\u305a\u306f\u30ed\u30fc\u30ab\u30eb\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u304c Git \u7ba1\u7406\u3055\u308c\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002VSCode \u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u3044\u3066\u3001\u5de6\u30e1\u30cb\u30e5\u30fc\u306e Souce Control \u3092\u958b\u3044\u305f\u3068\u304d\u306b\u3001Initialize Repository \u306e\u30dc\u30bf\u30f3\u304c\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u307e\u3060 Git \u7ba1\u7406\u3055\u308c\u3066\u3044\u306a\u3044\u72b6\u614b\u306a\u306e\u3067\u3001\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066 Git \u7ba1\u7406\u3092\u958b\u59cb\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"alt text",src:t(80915).A+"",width:"350",height:"402"})}),"\n",(0,n.jsx)(i.p,{children:"\u305d\u3057\u3066\u3001\u3059\u3079\u3066\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u30b9\u30c6\u30fc\u30b8\u30f3\u30b0\u3057\u3066\u3001Initial commit \u3068\u3044\u3046\u30e1\u30c3\u30bb\u30fc\u30b8\u3067\u30b3\u30df\u30c3\u30c8\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"alt text",src:t(57827).A+"",width:"348",height:"353"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"alt text",src:t(71349).A+"",width:"344",height:"298"})}),"\n",(0,n.jsx)(i.p,{children:"\u6b21\u306b\u3001GitHub \u306e\u300c...or push an existing repository from the command line\u300d\u306e\u30b3\u30de\u30f3\u30c9\u3092\u30b3\u30d4\u30fc\u3057\u3001VSCode \u3067\u30bf\u30fc\u30df\u30ca\u30eb\u3092\u958b\u3044\u3066\u3001\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"alt text",src:t(22190).A+"",width:"1656",height:"962"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"alt text",src:t(28575).A+"",width:"1103",height:"493"})}),"\n",(0,n.jsx)(i.p,{children:"\u3053\u308c\u3067\u3001GitHub \u4e0a\u306b\u30ed\u30fc\u30ab\u30eb\u306e\u30d5\u30a1\u30a4\u30eb\u306e\u5185\u5bb9\u304c\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3055\u308c\u308b\u306f\u305a\u3067\u3059\u3002\u3053\u306e\u5f8c\u306f\u3001VSCode \u3067\u30d5\u30a1\u30a4\u30eb\u3092\u7de8\u96c6\u3057\u3066\u30b3\u30df\u30c3\u30c8\u3057\u3001\u30d7\u30c3\u30b7\u30e5\u3059\u308b\u3053\u3068\u3067\u3001GitHub \u30b3\u30fc\u30c9\u306e\u5185\u5bb9\u3092\u53cd\u6620\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"})]})}function o(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}},27143:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/add-new-ssh-key-94b9c1fdd5a32ba30bac52aa946c8cca.png"},71349:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/commit-68bf25a4c55aa0224158367815b599f7.png"},22190:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/copy-existing-repository-command-a42b5909303958d9c7d2e8ca62e2aa03.png"},94148:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/copy-ssh-url-320cd7e0e68abb72c439f580cd8c3bd9.png"},29277:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/create-repository-deace42df6ccdbe8859ac6d1685e6dbb.png"},72028:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/dashboard-cf16f3f0f770758cacca1d6ce25bcfad.png"},80915:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/initialize-repository-174463174ed447590c9af70edc3c3922.png"},53457:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/new-ssh-key-54182321ae8ded3a91d2a20edb171049.png"},6593:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/settings-1acf5295161678a0885b7018e77f183e.png"},57827:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/staging-747ae123cb7db271a43050b2e16f7223.png"},28575:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/vscode-terminal-ff5e6b9ef52b21f64fce2b3bfeaac639.png"},28453:(e,i,t)=>{t.d(i,{R:()=>c,x:()=>d});var n=t(96540);const s={},l=n.createContext(s);function c(e){const i=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(l.Provider,{value:i},e.children)}}}]);