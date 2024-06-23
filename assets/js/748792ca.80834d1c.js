"use strict";(self.webpackChunkhandson=self.webpackChunkhandson||[]).push([[6752],{5018:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>x,frontMatter:()=>o,metadata:()=>d,toc:()=>i});var c=t(74848),s=t(28453);const o={title:"React \u306e\u72b6\u614b\u7ba1\u7406",description:"React \u306e\u72b6\u614b\u7ba1\u7406\u306e\u8aac\u660e"},r=void 0,d={id:"ec/tutorial/state-management",title:"React \u306e\u72b6\u614b\u7ba1\u7406",description:"React \u306e\u72b6\u614b\u7ba1\u7406\u306e\u8aac\u660e",source:"@site/docs/ec/tutorial/state-management.md",sourceDirName:"ec/tutorial",slug:"/ec/tutorial/state-management",permalink:"/engineer-handson/docs/ec/tutorial/state-management",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"React \u306e\u72b6\u614b\u7ba1\u7406",description:"React \u306e\u72b6\u614b\u7ba1\u7406\u306e\u8aac\u660e"},sidebar:"ecSidebar",previous:{title:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3068 Props",permalink:"/engineer-handson/docs/ec/tutorial/component-and-props"},next:{title:"Next.js \u306b\u3064\u3044\u3066",permalink:"/engineer-handson/docs/ec/tutorial/about-nextjs"}},l={},i=[{value:"React \u306e\u72b6\u614b\u7ba1\u7406",id:"react-\u306e\u72b6\u614b\u7ba1\u7406",level:2},{value:"useState \u95a2\u6570",id:"usestate-\u95a2\u6570",level:3},{value:"useEffect \u95a2\u6570",id:"useeffect-\u95a2\u6570",level:3},{value:"useContext \u95a2\u6570",id:"usecontext-\u95a2\u6570",level:3}];function a(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"react-\u306e\u72b6\u614b\u7ba1\u7406",children:"React \u306e\u72b6\u614b\u7ba1\u7406"}),"\n",(0,c.jsx)(n.h3,{id:"usestate-\u95a2\u6570",children:"useState \u95a2\u6570"}),"\n",(0,c.jsx)(n.p,{children:"\u30e9\u30a4\u30af\u30dc\u30bf\u30f3\u3084\u30ab\u30a6\u30f3\u30bf\u30fc\u306a\u3069\u3001\u30e6\u30fc\u30b6\u30fc\u306e\u64cd\u4f5c\u306b\u3088\u3063\u3066\u753b\u9762\u306e\u8868\u793a\u304c\u5909\u308f\u308b UI \u3067\u306f\u3001\u72b6\u614b\u3092\u7ba1\u7406\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["React \u3067\u306f\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u72b6\u614b\u3092\u7ba1\u7406\u3059\u308b\u305f\u3081\u306b\u3001",(0,c.jsx)(n.code,{children:"useState"})," \u3068\u3044\u3046\u95a2\u6570\u3092\u4f7f\u3044\u307e\u3059\u3002\nuse \u3067\u59cb\u307e\u308b\u95a2\u6570\u306f\u3001React Hooks \u3068\u547c\u3070\u308c\u308b\u6a5f\u80fd\u3067\u3001React \u30e9\u30a4\u30d6\u30e9\u30ea\u3067\u63d0\u4f9b\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"useState"})," \u95a2\u6570\u306f\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u72b6\u614b\u3092\u4fdd\u6301\u3059\u308b\u305f\u3081\u306e\u5909\u6570\u3068\u3001\u305d\u306e\u72b6\u614b\u3092\u66f4\u65b0\u3059\u308b\u305f\u3081\u306e\u95a2\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002\n\u3069\u3046\u3044\u3046\u3053\u3068\u304b\u3001\u5177\u4f53\u4f8b\u3092\u898b\u3066\u307f\u307e\u3057\u3087\u3046\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-jsx",metastring:'title="index.jsx"',children:'<html>\n  <body>\n    <div id="app"></div>\n    \x3c!-- React \u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u3092CDN\u3067\u8aad\u307f\u8fbc\u3080 --\x3e\n    <script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>\n    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>\n\n    \x3c!-- Babel \u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u3092CDN\u3067\u8aad\u307f\u8fbc\u3080 --\x3e\n    <script src="https://unpkg.com/@babel/standalone/babel.min.js"><\/script>\n\n    \x3c!-- text/jsx\u3092\u6307\u5b9a --\x3e\n    <script type="text/jsx">\n      function LikeButton() {\n        // useState \u95a2\u6570\u3092\u4f7f\u3063\u3066 likeCount \u3068\u3044\u3046\u72b6\u614b\u3092\u5b9a\u7fa9\n        const [likeCount, setLikeCount] = React.useState(0);\n\n        return (\n          <button>Like</button>\n        );\n      }\n\n      const app = document.getElementById("app");\n      const root = ReactDOM.createRoot(app);\n\n      root.render(<LikeButton />);\n    <\/script>\n  </body>\n</html>\n'})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-jsx",children:"const [likeCount, setLikeCount] = React.useState(0);\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u3053\u306e\u30b3\u30fc\u30c9\u306f\u3001",(0,c.jsx)(n.code,{children:"useState"})," \u95a2\u6570\u3092\u4f7f\u3063\u3066\u3001",(0,c.jsx)(n.code,{children:"likeCount"})," \u3068\u3044\u3046\u72b6\u614b\u5909\u6570\u3092\u5b9a\u7fa9\u3057\u3066\u3044\u307e\u3059\u3002\n",(0,c.jsx)(n.code,{children:"useState"})," \u95a2\u6570\u306e\u5f15\u6570\u306b\u306f\u3001\u72b6\u614b\u306e\u521d\u671f\u5024\u3092\u6e21\u3057\u307e\u3059\u3002\u3053\u306e\u5834\u5408\u306f\u3001",(0,c.jsx)(n.code,{children:"0"})," \u304c\u521d\u671f\u5024\u3068\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"useState"})," \u95a2\u6570\u306e\u623b\u308a\u5024\u306f\u4e8c\u3064\u3042\u308a\u3001\u4e8c\u3064\u76ee\u306e\u623b\u308a\u5024\u306f",(0,c.jsx)(n.code,{children:"likeCount"}),"\u3068\u3044\u3046\u72b6\u614b\u5909\u6570\u3092\u66f4\u65b0\u3059\u308b\u305f\u3081\u306e\u95a2\u6570\u3067\u3001",(0,c.jsx)(n.code,{children:"setLikeCount"})," \u3068\u3044\u3046\u540d\u524d\u3067\u5b9a\u7fa9\u3057\u307e\u3057\u305f\u3002\n\u547d\u540d\u306f\u81ea\u7531\u3067\u3059\u304c\u3001",(0,c.jsx)(n.code,{children:"set{\u72b6\u614b\u5909\u6570\u540d}"})," \u3068\u3044\u3046\u540d\u524d\u3092\u4f7f\u3046\u306e\u304c\u6163\u7fd2\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"LikeButton"})," \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u4e2d\u3067\u3001",(0,c.jsx)(n.code,{children:"likeCount"})," \u3068 ",(0,c.jsx)(n.code,{children:"setLikeCount"})," \u3092\u4f7f\u3063\u3066\u3001\u30dc\u30bf\u30f3\u304c\u30af\u30ea\u30c3\u30af\u3055\u308c\u305f\u3068\u304d\u306b ",(0,c.jsx)(n.code,{children:"likeCount"})," \u306e\u5024\u3092\u66f4\u65b0\u3059\u308b\u3088\u3046\u306b\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-jsx",metastring:'title="index.jsx"',children:"function LikeButton() {\n  const [likeCount, setLikeCount] = React.useState(0);\n\n  const handleClick = () => {\n    setLikeCount(likeCount + 1);\n  };\n\n  return <button onClick={handleClick}>Like {likeCount}</button>;\n}\n"})}),"\n",(0,c.jsxs)(n.p,{children:["button \u306e\u30af\u30ea\u30c3\u30af\u30a4\u30d9\u30f3\u30c8\u306e\u30cf\u30f3\u30c9\u30e9\u30fc\u3068\u3057\u3066\u3001",(0,c.jsx)(n.code,{children:"handleClick"})," \u95a2\u6570\u3092\u5b9a\u7fa9\u3057\u307e\u3057\u305f\u3002\n\u305d\u306e\u4e2d\u3067\u3001",(0,c.jsx)(n.code,{children:"setLikeCount"})," \u95a2\u6570\u3092\u4f7f\u3063\u3066\u3001",(0,c.jsx)(n.code,{children:"likeCount"})," \u306e\u5024\u3092 1 \u5897\u3084\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5b9f\u969b\u306b\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u307f\u308b\u3068\u3001\u30dc\u30bf\u30f3\u306b ",(0,c.jsx)(n.code,{children:"Like {likeCount}"})," \u3068\u8868\u793a\u3055\u308c\u3001\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u305f\u3073\u306b ",(0,c.jsx)(n.code,{children:"likeCount"})," \u306e\u5024\u304c\u5897\u3048\u3066\u3044\u304f\u3053\u3068\u304c\u78ba\u8a8d\u3067\u304d\u308b\u3067\u3057\u3087\u3046\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u3053\u306e\u3088\u3046\u306b\u3001",(0,c.jsx)(n.code,{children:"useState"})," \u95a2\u6570\u3092\u4f7f\u3046\u3053\u3068\u3067\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u72b6\u614b\u3092\u7ba1\u7406\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"useeffect-\u95a2\u6570",children:"useEffect \u95a2\u6570"}),"\n",(0,c.jsx)(n.p,{children:"React \u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u3001\u753b\u9762\u306e\u8868\u793a\u3092\u66f4\u65b0\u3059\u308b\u305f\u3073\u306b\u518d\u63cf\u753b\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"useEffect"})," \u95a2\u6570\u306f\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u30de\u30a6\u30f3\u30c8\u3055\u308c\u305f\u3068\u304d\u3084\u3001\u72b6\u614b\u304c\u66f4\u65b0\u3055\u308c\u305f\u3068\u304d\u306a\u3069\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u306b\u5fdc\u3058\u3066\u51e6\u7406\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306e\u95a2\u6570\u3067\u3059\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"useEffect"})," \u95a2\u6570\u306f\u3001\u7b2c\u4e00\u5f15\u6570\u306b\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u95a2\u6570\u3092\u53d7\u3051\u53d6\u308a\u307e\u3059\u3002\n\u3053\u306e\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u95a2\u6570\u306f\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u518d\u63cf\u753b\u3055\u308c\u308b\u305f\u3073\u306b\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"useEffect"})," \u95a2\u6570\u306e\u7b2c\u4e8c\u5f15\u6570\u306b\u306f\u3001\u4f9d\u5b58\u3059\u308b\u72b6\u614b\u306e\u914d\u5217\u3092\u6e21\u3057\u307e\u3059\u3002\n\u3053\u306e\u914d\u5217\u306b\u6307\u5b9a\u3057\u305f\u72b6\u614b\u304c\u5909\u66f4\u3055\u308c\u305f\u3068\u304d\u3060\u3051\u3001\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u95a2\u6570\u304c\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u5177\u4f53\u4f8b\u3092\u898b\u3066\u307f\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-jsx",metastring:'title="index.jsx"',children:"function Timer() {\n  const [count, setCount] = React.useState(0);\n\n  React.useEffect(() => {\n    const timerId = setInterval(() => {\n      setCount(count + 1);\n    }, 1000);\n\n    return () => {\n      clearInterval(timerId);\n    };\n  }, [count]);\n\n  return <div>{count}</div>;\n}\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u3053\u306e\u30b3\u30fc\u30c9\u306f\u3001",(0,c.jsx)(n.code,{children:"Timer"})," \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u5b9a\u7fa9\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"useEffect"})," \u95a2\u6570\u306e\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u95a2\u6570\u306f\u4ee5\u4e0b\u306e\u90e8\u5206\u306b\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-jsx",children:"() => {\n  const timerId = setInterval(() => {\n    setCount(count + 1);\n  }, 1000);\n\n  return () => {\n    clearInterval(timerId);\n  };\n};\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u3053\u3053\u3067\u306f\u3001",(0,c.jsx)(n.code,{children:"setInterval"})," \u95a2\u6570\u3092\u4f7f\u3063\u3066\u30011 \u79d2\u3054\u3068\u306b ",(0,c.jsx)(n.code,{children:"count"})," \u306e\u5024\u3092\u66f4\u65b0\u3059\u308b\u3088\u306b\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"useEffect"})," \u95a2\u6570\u306e\u7b2c\u4e8c\u5f15\u6570\u306b\u306f\u3001",(0,c.jsx)(n.code,{children:"[count]"})," \u3068\u3044\u3046\u914d\u5217\u3092\u6e21\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u306e",(0,c.jsx)(n.code,{children:"count"})," \u306e\u5024\u304c\u5909\u66f4\u3055\u308c\u308b\u305f\u3073\u306b\u3001",(0,c.jsx)(n.code,{children:"useEffect"})," \u95a2\u6570\u306e\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u95a2\u6570\u304c\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002\n\u3064\u307e\u308a\u3001",(0,c.jsx)(n.code,{children:"count"})," \u306e\u5024\u304c\u5909\u66f4\u3055\u308c\u308b\u305f\u3073\u306b\u3001interval \u304c\u518d\u8a2d\u5b9a\u3055\u308c\u3001",(0,c.jsx)(n.code,{children:"count"})," \u306e\u5024\u304c 1 \u305a\u3064\u5897\u3048\u3066\u3044\u304f\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u307e\u305f\u3001",(0,c.jsx)(n.code,{children:"return"})," \u3067\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u95a2\u6570\u3092\u8fd4\u3059\u3053\u3068\u3067\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u30a2\u30f3\u30de\u30a6\u30f3\u30c8\u3055\u308c\u305f\u3068\u304d\u306b\u30af\u30ea\u30fc\u30f3\u30a2\u30c3\u30d7\u51e6\u7406\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\n\u30a2\u30f3\u30de\u30a6\u30f3\u30c8\u3068\u306f\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u753b\u9762\u304b\u3089\u524a\u9664\u3055\u308c\u308b\u3053\u3068\u3092\u610f\u5473\u3057\u3001\u4f8b\u3048\u3070\u6761\u4ef6\u5206\u5c90\u306e\u7d50\u679c\u8868\u793a\u3055\u308c\u306a\u304f\u306a\u3063\u305f\u308a\u3001\u5225\u306e\u753b\u9762\u306b\u9077\u79fb\u3057\u305f\u308a\u3059\u308b\u3068\u304d\u306b\u767a\u751f\u3057\u307e\u3059\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u3053\u306e\u4f8b\u3067\u306f\u3001",(0,c.jsx)(n.code,{children:"clearInterval"})," \u95a2\u6570\u3092\u4f7f\u3063\u3066\u3001",(0,c.jsx)(n.code,{children:"setInterval"})," \u95a2\u6570\u3067\u767b\u9332\u3057\u305f\u30bf\u30a4\u30de\u30fc\u3092\u89e3\u9664\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u308c\u3092\u884c\u308f\u306a\u3044\u3068\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u524a\u9664\u3055\u308c\u305f\u5f8c\u3082\u30bf\u30a4\u30de\u30fc\u304c\u52d5\u304d\u7d9a\u3051\u3066\u3057\u307e\u3044\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u554f\u984c\u304c\u767a\u751f\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u307e\u305f\u7b2c\u4e8c\u5f15\u6570\u306b\u4f55\u3082\u6307\u5b9a\u3057\u306a\u3044\u5834\u5408\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u30de\u30a6\u30f3\u30c8\u3055\u308c\u305f\u3068\u304d\u306b\u4e00\u5ea6\u3060\u3051\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u95a2\u6570\u304c\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002\n\u305d\u306e\u305f\u3081\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u521d\u671f\u5316\u3057\u305f\u969b\u306b\u5b9f\u884c\u3057\u305f\u3044\u51e6\u7406\u3092\u8a18\u8ff0\u3059\u308b\u305f\u3081\u306b\u4f7f\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,c.jsx)(n.h3,{id:"usecontext-\u95a2\u6570",children:"useContext \u95a2\u6570"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"useContext"})," \u95a2\u6570\u306f\u3001React \u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u4f7f\u3063\u3066\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u9593\u3067\u30c7\u30fc\u30bf\u3092\u5171\u6709\u3059\u308b\u305f\u3081\u306e\u95a2\u6570\u3067\u3059\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306f\u3001React \u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u30c4\u30ea\u30fc\u5168\u4f53\u3067\u5171\u6709\u3055\u308c\u308b\u30c7\u30fc\u30bf\u3092\u6271\u3046\u305f\u3081\u306e\u4ed5\u7d44\u307f\u3067\u3001\u89aa\u304b\u3089\u5b50\u4ee5\u5916\u306e\u95a2\u4fc2\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u9593\u3067\u30c7\u30fc\u30bf\u3092\u5171\u6709\u3059\u308b\u305f\u3081\u306b\u4f7f\u308f\u308c\u307e\u3059\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u5177\u4f53\u4f8b\u3092\u898b\u3066\u307f\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-jsx",metastring:'title="index.jsx"',children:'// 1. \u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u4f5c\u6210\nconst MyContext = React.createContext();\n\n// 2. \u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u63d0\u4f9b\u3059\u308b\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f5c\u6210\nconst MyProvider = ({ children }) => {\n  const [value, setValue] = React.useState("Hello from context!");\n\n  return (\n    <MyContext.Provider value={{ value, setValue }}>\n      {children}\n    </MyContext.Provider>\n  );\n};\n\n// 3. \u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u4f7f\u7528\u3059\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f5c\u6210\nconst DisplayComponent = () => {\n  const { value } = React.useContext(MyContext);\n  return <h1>{value}</h1>;\n};\n\nconst UpdateComponent = () => {\n  const { setValue } = React.useContext(MyContext);\n  return (\n    <button onClick={() => setValue("Updated context value!")}>\n      Update Context\n    </button>\n  );\n};\n\nconst app = document.getElementById("app");\nconst root = ReactDOM.createRoot(app);\n\nroot.render(\n  <MyProvider>\n    <DisplayComponent />\n    <UpdateComponent />\n  </MyProvider>\n);\n'})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"useContext"}),"\u306e\u4f7f\u3044\u65b9\u306e\u624b\u9806\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\u3002"]}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsx)(n.li,{children:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u4f5c\u6210\u3059\u308b"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-jsx",children:"const MyContext = React.createContext();\n"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"React.createContext()"})," \u3067\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u4eca\u56de\u306f ",(0,c.jsx)(n.code,{children:"MyContext"})," \u3068\u3044\u3046\u540d\u524d\u3067\u4f5c\u6210\u3057\u307e\u3057\u305f\u304c\u3001\u5b9f\u969b\u306b\u306f\u5171\u6709\u3057\u305f\u3044\u30c7\u30fc\u30bf\u306b\u5fdc\u3058\u3066\u540d\u524d\u3092\u3064\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,c.jsxs)(n.ol,{start:"2",children:["\n",(0,c.jsx)(n.li,{children:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u63d0\u4f9b\u3059\u308b\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-jsx",children:'const MyProvider = ({ children }) => {\n  const [value, setValue] = React.useState("Hello from context!");\n\n  return (\n    <MyContext.Provider value={{ value, setValue }}>\n      {children}\n    </MyContext.Provider>\n  );\n};\n'})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"MyProvider"})," \u3068\u3044\u3046\u540d\u524d\u306e\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u3001",(0,c.jsx)(n.code,{children:"MyContext.Provider"})," \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u63d0\u4f9b\u3057\u305f\u3044\u30c7\u30fc\u30bf\u3092\u6e21\u3057\u307e\u3059\u3002\n\u4eca\u56de\u306f\u3001",(0,c.jsx)(n.code,{children:"value"})," \u3068 ",(0,c.jsx)(n.code,{children:"setValue"})," \u3068\u3044\u3046\u72b6\u614b\u5909\u6570\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,c.jsxs)(n.ol,{start:"3",children:["\n",(0,c.jsx)(n.li,{children:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u4f7f\u7528\u3059\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-jsx",children:'const DisplayComponent = () => {\n  const { value } = React.useContext(MyContext);\n  return <h1>{value}</h1>;\n};\n\nconst UpdateComponent = () => {\n  const { setValue } = React.useContext(MyContext);\n  return (\n    <button onClick={() => setValue("Updated context value!")}>\n      Update Context\n    </button>\n  );\n};\n'})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"useContext"})," \u95a2\u6570\u3092\u4f7f\u3063\u3066\u3001",(0,c.jsx)(n.code,{children:"MyContext"})," \u3067\u63d0\u4f9b\u3055\u308c\u305f\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"DisplayComponent"})," \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u306f\u3001\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u304b\u3089",(0,c.jsx)(n.code,{children:"value"})," \u3092\u53d6\u5f97\u3057\u3066\u8868\u793a\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"UpdateComponent"})," \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u306f\u3001\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u304b\u3089 ",(0,c.jsx)(n.code,{children:"setValue"})," \u3092\u53d6\u5f97\u3057\u3066\u3001\u30dc\u30bf\u30f3\u304c\u30af\u30ea\u30c3\u30af\u3055\u308c\u305f\u3068\u304d\u306b\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u5024\u3092\u66f4\u65b0\u3059\u308b\u3088\u3046\u306b\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u3053\u306e\u4f8b\u3067\u306f",(0,c.jsx)(n.code,{children:"DisplayComponent"})," \u3068 ",(0,c.jsx)(n.code,{children:"UpdateComponent"})," \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u540c\u3058\u968e\u5c64\u306b\u3042\u308b\u3001\u3044\u308f\u3070\u5144\u5f1f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3059\u304c\u3001",(0,c.jsx)(n.code,{children:"MyProvider"})," \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u63d0\u4f9b\u3055\u308c\u305f\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u4f7f\u3063\u3066\u30c7\u30fc\u30bf\u3092\u5171\u6709\u3067\u304d\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u5b9f\u969b\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306f\u3001\u4f8b\u3048\u3070\u8a8d\u8a3c\u72b6\u614b\u306a\u3069\u8907\u6570\u306e\u753b\u9762\u3084\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u5171\u6709\u3057\u305f\u3044\u30c7\u30fc\u30bf\u304c\u3042\u308b\u5834\u5408\u306b\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u4f7f\u3046\u306e\u3067\u3001\u62bc\u3055\u3048\u3066\u304a\u3044\u3066\u304f\u3060\u3055\u3044\u3002"})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>d});var c=t(96540);const s={},o=c.createContext(s);function r(e){const n=c.useContext(o);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),c.createElement(o.Provider,{value:n},e.children)}}}]);