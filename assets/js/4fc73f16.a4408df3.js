"use strict";(self.webpackChunkhandson=self.webpackChunkhandson||[]).push([[9461],{38431:n=>{n.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"github-pull-request","metadata":{"permalink":"/engineer-handson/blog/github-pull-request","source":"@site/blog/github-pull-request/github-pull-request.md","title":"\u3010GitHub\u3011\u30d6\u30e9\u30f3\u30c1\u306e\u4f5c\u6210\u304b\u3089\u30d7\u30eb\u30ea\u30af\u30a8\u30b9\u30c8\u307e\u3067\u306e\u624b\u9806","description":"\u65b0\u3057\u304f Git \u3067\u7ba1\u7406\u3092\u59cb\u3081\u305f\u6642\u306f main \u30d6\u30e9\u30f3\u30c1\u3057\u304b\u3042\u308a\u307e\u305b\u3093\u304c\u3001\u4eca\u5f8c\u6a5f\u80fd\u8ffd\u52a0\u3092\u884c\u306a\u3063\u3066\u3044\u304f\u969b\u306b\u306f\u3001\u6a5f\u80fd\u306e\u5358\u4f4d\u3067\u65b0\u3057\u304f\u30d6\u30e9\u30f3\u30c1\u3092\u4f5c\u6210\u3057\u3066\u4f5c\u696d\u3092\u884c\u3044\u307e\u3059\u3002\u305d\u3057\u3066\u3001\u4f5c\u696d\u304c\u5b8c\u4e86\u3057\u305f\u3089\u3001main \u30d6\u30e9\u30f3\u30c1\u306b\u5411\u3051\u3066\u30d7\u30eb\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u4f5c\u6210\u3057\u3001\u30ec\u30d3\u30e5\u30fc\u3092\u7d4c\u3066 main \u30d6\u30e9\u30f3\u30c1\u306b\u30de\u30fc\u30b8\u3057\u307e\u3059\u3002","date":"2024-07-11T12:00:00.000Z","tags":[{"inline":true,"label":"Git","permalink":"/engineer-handson/blog/tags/git"}],"readingTime":2.995,"hasTruncateMarker":true,"authors":[{"name":"\u30e6\u30fc\u30b9\u30b1","title":"Carriage CEO","imageURL":"/engineer-handson/img/inoue.jpeg","key":"inoue"}],"frontMatter":{"slug":"github-pull-request","title":"\u3010GitHub\u3011\u30d6\u30e9\u30f3\u30c1\u306e\u4f5c\u6210\u304b\u3089\u30d7\u30eb\u30ea\u30af\u30a8\u30b9\u30c8\u307e\u3067\u306e\u624b\u9806","date":"2024-07-11T12:00","authors":["inoue"],"tags":["Git"]},"unlisted":false,"nextItem":{"title":"\u3010GitHub\u3011\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u4f5c\u6210\u304b\u3089\u30ea\u30dd\u30b8\u30c8\u30ea\u4f5c\u6210\u307e\u3067\u306e\u624b\u9806","permalink":"/engineer-handson/blog/initialize-github"}},"content":"\u65b0\u3057\u304f Git \u3067\u7ba1\u7406\u3092\u59cb\u3081\u305f\u6642\u306f main \u30d6\u30e9\u30f3\u30c1\u3057\u304b\u3042\u308a\u307e\u305b\u3093\u304c\u3001\u4eca\u5f8c\u6a5f\u80fd\u8ffd\u52a0\u3092\u884c\u306a\u3063\u3066\u3044\u304f\u969b\u306b\u306f\u3001\u6a5f\u80fd\u306e\u5358\u4f4d\u3067\u65b0\u3057\u304f\u30d6\u30e9\u30f3\u30c1\u3092\u4f5c\u6210\u3057\u3066\u4f5c\u696d\u3092\u884c\u3044\u307e\u3059\u3002\u305d\u3057\u3066\u3001\u4f5c\u696d\u304c\u5b8c\u4e86\u3057\u305f\u3089\u3001main \u30d6\u30e9\u30f3\u30c1\u306b\u5411\u3051\u3066\u30d7\u30eb\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u4f5c\u6210\u3057\u3001\u30ec\u30d3\u30e5\u30fc\u3092\u7d4c\u3066 main \u30d6\u30e9\u30f3\u30c1\u306b\u30de\u30fc\u30b8\u3057\u307e\u3059\u3002\\n\\n\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001\u30d6\u30e9\u30f3\u30c1\u3092\u65b0\u3057\u304f\u4f5c\u6210\u3057\u3066\u3001\u30d7\u30eb\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u4f5c\u6210\u30fb\u30de\u30fc\u30b8\u3059\u308b\u6d41\u308c\u3092\u89e3\u8aac\u3057\u307e\u3059\u3002\\n\\n\x3c!-- truncate --\x3e\\n\\n## \u30d6\u30e9\u30f3\u30c1\u306e\u4f5c\u6210\\n\\n\u307e\u305a\u306f\u3001\u65b0\u3057\u304f\u30d6\u30e9\u30f3\u30c1\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u3053\u3053\u3067\u306f\u3001`feature/sample-feature` \u3068\u3044\u3046\u540d\u524d\u3067\u4f5c\u6210\u3057\u307e\u3059\u304c\u3001\u5b9f\u969b\u306f\u4f5c\u696d\u5185\u5bb9\u304c\u5206\u304b\u308a\u3084\u3059\u3044\u3088\u3046\u306b\u547d\u540d\u3059\u308b\u3068\u826f\u3044\u3067\u3057\u3087\u3046\u3002\\nVSCode \u3067\u30bf\u30fc\u30df\u30ca\u30eb\u3092\u958b\u3044\u3066\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3059\u308b\u304b\u3001\u5de6\u4e0b\u306e\u300cmain\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u30d6\u30e9\u30f3\u30c1\u540d\u3092\u5165\u529b\u3057\u3066\u65b0\u3057\u3044\u30d6\u30e9\u30f3\u30c1\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\\n\\n```bash\\ngit checkout -b feature/sample-feature\\n```\\n\\n## \u30d5\u30a1\u30a4\u30eb\u306e\u5909\u66f4\\n\\n\u9069\u5f53\u306a\u30d5\u30a1\u30a4\u30eb\u3092\u958b\u3044\u3066\u5909\u66f4\u3092\u52a0\u3048\u307e\u3059\u3002\u3053\u3053\u3067\u306f\u3001`README.md` \u3092\u958b\u3044\u3066\u5909\u66f4\u3092\u52a0\u3048\u308b\u3068\u3057\u307e\u3059\u3002\\n\\n```bash\\necho \\"Hello, World!\\" >> README.md\\n```\\n\\nVSCode \u306e Source Control \u30bf\u30d6\u304b\u3089\u5909\u66f4\u3092\u30b9\u30c6\u30fc\u30b8\u30f3\u30b0\u3057\u3001\u9069\u5f53\u306a\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u5165\u529b\u3057\u3066\u30b3\u30df\u30c3\u30c8\u3057\u307e\u3059\u3002\\n\\n## \u30d6\u30e9\u30f3\u30c1\u306e\u30d7\u30c3\u30b7\u30e5\\n\\n\u4eca\u306e\u72b6\u614b\u3060\u3068 GitHub \u5074\u306b\u306f\u65b0\u3057\u304f\u4f5c\u3089\u308c\u305f\u30d6\u30e9\u30f3\u30c1\u304c\u5b58\u5728\u3057\u3066\u3044\u306a\u3044\u305f\u3081\u3001\u30ed\u30fc\u30ab\u30eb\u304b\u3089\u30d6\u30e9\u30f3\u30c1\u3092\u30d7\u30c3\u30b7\u30e5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\\n\\nVSCode \u306e Source Control \u30bf\u30d6\u304b\u3089\u3001`Publish branch` \u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u30d6\u30e9\u30f3\u30c1\u3092\u30d7\u30c3\u30b7\u30e5\u3057\u307e\u3059\u3002\\n\\n![alt text](publish-branch.png)\\n\\n## \u30d7\u30eb\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u4f5c\u6210\\n\\n\u3053\u3053\u304b\u3089\u306f\u3001GitHub \u306e Web \u30da\u30fc\u30b8\u3067\u64cd\u4f5c\u3092\u884c\u3044\u307e\u3059\u3002\\n\\n1. \u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u30c8\u30c3\u30d7\u30da\u30fc\u30b8\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3001`Pull requests` \u30bf\u30d6\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002\\n\\n![alt text](pr1.png)\\n\\n2. `New pull request` \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002\\n\\n![alt text](pr2.png)\\n\\n3. `compare` \u306e\u6b04\u3067\u3001`feature/sample-feature` \u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u5dee\u5206\u304c\u8868\u793a\u3055\u308c\u308b\u306e\u3067\u3001\u554f\u984c\u306a\u3051\u308c\u3070 `Create pull request` \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002\\n\\n![alt text](pr3.png)\\n\\n4. \u30bf\u30a4\u30c8\u30eb\u3068\u30b3\u30e1\u30f3\u30c8\u3092\u5165\u529b\u3057\u3066\u3001`Create pull request` \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002\u30b3\u30e1\u30f3\u30c8\u306b\u306f\u3001\u5909\u66f4\u5185\u5bb9\u3084\u30ec\u30d3\u30e5\u30fc\u3057\u3066\u307b\u3057\u3044\u30dd\u30a4\u30f3\u30c8\u306a\u3069\u3092\u8a18\u8f09\u3057\u307e\u3057\u3087\u3046\u3002\\n\\n![alt text](pr4.png)\\n\\n5. \u30d7\u30eb\u30ea\u30af\u30a8\u30b9\u30c8\u304c\u4f5c\u6210\u3055\u308c\u307e\u3057\u305f\u3002\u30ec\u30d3\u30e5\u30fc\u5f85\u3061\u306e\u72b6\u614b\u306b\u306a\u308b\u306e\u3067\u3001URL \u3092\u5171\u6709\u3057\u3066\u30ec\u30d3\u30e5\u30fc\u3092\u4f9d\u983c\u3057\u307e\u3057\u3087\u3046\u3002\\n\\n![alt text](pr5.png)\\n\\n## \u30d7\u30eb\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u30de\u30fc\u30b8\\n\\n\u30ec\u30d3\u30e5\u30fc\u304c\u5b8c\u4e86\u3057\u3001\u554f\u984c\u304c\u306a\u3051\u308c\u3070\u3001\u30d7\u30eb\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u30de\u30fc\u30b8\u3057\u307e\u3059\u3002\u30d7\u30eb\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u30da\u30fc\u30b8\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3001`Merge pull request` \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001main \u30d6\u30e9\u30f3\u30c1\u306b\u5909\u66f4\u304c\u30de\u30fc\u30b8\u3055\u308c\u307e\u3059\u3002"},{"id":"initialize-github","metadata":{"permalink":"/engineer-handson/blog/initialize-github","source":"@site/blog/initialize-github/initialize-github.md","title":"\u3010GitHub\u3011\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u4f5c\u6210\u304b\u3089\u30ea\u30dd\u30b8\u30c8\u30ea\u4f5c\u6210\u307e\u3067\u306e\u624b\u9806","description":"GitHub \u306f\u3001Git \u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u30db\u30b9\u30c6\u30a3\u30f3\u30b0\u3059\u308b\u305f\u3081\u306e\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002GitHub \u3092\u4f7f\u3046\u3053\u3068\u3067\u3001\u8907\u6570\u306e\u4eba\u304c\u5354\u529b\u3057\u3066\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u9032\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002","date":"2024-07-11T10:00:00.000Z","tags":[{"inline":true,"label":"Git","permalink":"/engineer-handson/blog/tags/git"}],"readingTime":6.2,"hasTruncateMarker":true,"authors":[{"name":"\u30e6\u30fc\u30b9\u30b1","title":"Carriage CEO","imageURL":"/engineer-handson/img/inoue.jpeg","key":"inoue"}],"frontMatter":{"slug":"initialize-github","title":"\u3010GitHub\u3011\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u4f5c\u6210\u304b\u3089\u30ea\u30dd\u30b8\u30c8\u30ea\u4f5c\u6210\u307e\u3067\u306e\u624b\u9806","date":"2024-07-11T10:00","authors":["inoue"],"tags":["Git"]},"unlisted":false,"prevItem":{"title":"\u3010GitHub\u3011\u30d6\u30e9\u30f3\u30c1\u306e\u4f5c\u6210\u304b\u3089\u30d7\u30eb\u30ea\u30af\u30a8\u30b9\u30c8\u307e\u3067\u306e\u624b\u9806","permalink":"/engineer-handson/blog/github-pull-request"},"nextItem":{"title":"\u3010POST or GET?\u3011HTTP\u30e1\u30bd\u30c3\u30c9\u306b\u3064\u3044\u3066\u89e3\u8aac","permalink":"/engineer-handson/blog/http-method"}},"content":"GitHub \u306f\u3001Git \u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u30db\u30b9\u30c6\u30a3\u30f3\u30b0\u3059\u308b\u305f\u3081\u306e\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002GitHub \u3092\u4f7f\u3046\u3053\u3068\u3067\u3001\u8907\u6570\u306e\u4eba\u304c\u5354\u529b\u3057\u3066\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u9032\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\\n\\n\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001Git \u306e\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9\u306f\u7406\u89e3\u3057\u3066\u3044\u308b\u524d\u63d0\u3067\u3001GitHub \u3067\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u4f5c\u6210\u3084\u30b3\u30fc\u30c9\u306e\u7ba1\u7406\u65b9\u6cd5\u306b\u3064\u3044\u3066\u89e3\u8aac\u3057\u307e\u3059\u3002\\n\\n\x3c!-- truncate --\x3e\\n\\n## GitHub \u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u4f5c\u6210\\n\\n\u307e\u305a\u306f\u3001GitHub \u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3057\u3087\u3046\u3002[GitHub \u306e\u30db\u30fc\u30e0\u30da\u30fc\u30b8](https://github.com/)\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\\n\\nSign up \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u753b\u9762\u306e\u6d41\u308c\u306b\u5f93\u3063\u3066\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u3066\u304f\u3060\u3055\u3044\u3002\\n\\n\u9014\u4e2d\u3067\u6599\u91d1\u30d7\u30e9\u30f3\u3092\u9078\u629e\u3059\u308b\u753b\u9762\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u304c\u3001\u7121\u6599\u30d7\u30e9\u30f3\u3067\u554f\u984c\u3042\u308a\u307e\u305b\u3093\u3002\\n\\n## SSH \u63a5\u7d9a\u306e\u8a2d\u5b9a\\n\\n### SSH \u30ad\u30fc\u306e\u767b\u9332\\n\\nGitHub \u306b\u30b3\u30fc\u30c9\u3092\u30d7\u30c3\u30b7\u30e5\u3057\u305f\u308a\u3001\u30d7\u30eb\u3057\u305f\u308a\u3059\u308b\u305f\u3081\u306b\u306f\u3001SSH \u30ad\u30fc\u3092 GitHub \u306b\u767b\u9332\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\\n\\n\u307e\u305a\u306f\u3001SSH \u30ad\u30fc\u3092\u30ed\u30fc\u30ab\u30eb\u3067\u751f\u6210\u3057\u307e\u3059\u3002\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u3001SSH \u30ad\u30fc\u3092\u751f\u6210\u3057\u307e\u3059\u3002\\n\\n```bash\\ncd ~/.ssh\\nssh-keygen -t rsa -f github\\n```\\n\\n\u5b9f\u884c\u3059\u308b\u3068\u8272\u3005\u805e\u304b\u308c\u307e\u3059\u304c\u3001\u305d\u306e\u307e\u307e Enter \u30ad\u30fc\u3092\u62bc\u3057\u3066\u9032\u3081\u3066\u304f\u3060\u3055\u3044\u3002\u5b9f\u884c\u304c\u5b8c\u4e86\u3059\u308b\u3068\u3001`github` \u3068 `github.pub` \u3068\u3044\u3046\u30d5\u30a1\u30a4\u30eb\u304c\u751f\u6210\u3055\u308c\u307e\u3059\u3002`github.pub`\u304c\u516c\u958b\u9375\u306a\u306e\u3067\u3001\u3053\u306e\u30d5\u30a1\u30a4\u30eb\u3092 GitHub \u306b\u767b\u9332\u3057\u3066\u3044\u304d\u307e\u3059\u3002\\n\\nGitHub \u306b\u623b\u3063\u3066\u3001 \u53f3\u4e0a\u306e\u30a2\u30d0\u30bf\u30fc\u30a2\u30a4\u30b3\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001Settings \u3092\u9078\u629e\u3057\u307e\u3059\u3002\\n\\n![alt text](settings.png)\\n\\n\u5de6\u30e1\u30cb\u30e5\u30fc\u306e SSH and GPG keys \u3092\u9078\u629e\u3057\u3001New SSH key \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002\\n\\n![alt text](new-ssh-key.png)\\n\\n\u767b\u9332\u753b\u9762\u306b\u306a\u308b\u306e\u3067\u3001Title \u306b\u4efb\u610f\u306e\u540d\u524d\u3092\u5165\u529b\u3057\u3001Key \u306b`github.pub` \u30d5\u30a1\u30a4\u30eb\u306e\u4e2d\u8eab\u3092\u30b3\u30d4\u30fc\u3057\u3066 Add SSH key \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002\\n\\n![alt text](add-new-ssh-key.png)\\n\\n\u3053\u308c\u3067 SSH \u30ad\u30fc\u306e\u767b\u9332\u304c\u5b8c\u4e86\u3057\u307e\u3057\u305f\u3002\\n\\n### \u63a5\u7d9a\u78ba\u8a8d\\n\\n\u7d9a\u3044\u3066\u3001SSH \u63a5\u7d9a\u3092\u78ba\u8a8d\u3057\u3066\u3044\u304d\u307e\u3059\u3002\\n\u307e\u305a\u306f SSH Config \u30d5\u30a1\u30a4\u30eb\u306e\u8a2d\u5b9a\u3092\u884c\u3044\u307e\u3059\u3002\\n\\n`~/.ssh/config` \u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u3001\u4ee5\u4e0b\u306e\u5185\u5bb9\u3092\u8a18\u8ff0\u3057\u307e\u3059\u3002\\n\\n```bash\\nHost github github.com\\n  HostName github.com\\n  IdentityFile ~/.ssh/github\\n  User git\\n```\\n\\n\u305d\u3057\u3066\u3001\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u3001SSH \u63a5\u7d9a\u304c\u3067\u304d\u308b\u304b\u78ba\u8a8d\u3057\u307e\u3059\u3002\\n\\n```bash\\nssh -T github\\n```\\n\\n\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u8868\u793a\u3055\u308c\u308c\u3070\u3001SSH \u63a5\u7d9a\u304c\u6210\u529f\u3057\u3066\u3044\u307e\u3059\u3002\\n\\n```\\nHi {username}! You\'ve successfully authenticated, but GitHub does not provide shell access.\\n```\\n\\n## \u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u4f5c\u6210\\n\\n### \u7a7a\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u4f5c\u6210\u3059\u308b\\n\\nGitHub \u3067\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u4f5c\u6210\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002\\n\\nGitHub \u306b\u30ed\u30b0\u30a4\u30f3\u3059\u308b\u3068\u3001\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u304c\u8868\u793a\u3055\u308c\u308b\u306e\u3067\u3001\u5de6\u30e1\u30cb\u30e5\u30fc\u306e\u300cCreate repository\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002\\n\\n![alt text](dashboard.png)\\n\\n\u3059\u308b\u3068\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u753b\u9762\u304c\u8868\u793a\u3055\u308c\u308b\u306e\u3067\u3001Repository name \u306b\u30ea\u30dd\u30b8\u30c8\u30ea\u540d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30ea\u30dd\u30b8\u30c8\u30ea\u306f\u516c\u958b\u7bc4\u56f2\u306e\u8a2d\u5b9a\u304c\u53ef\u80fd\u3067\u3001Public \u306b\u3059\u308b\u3068\u8ab0\u3067\u3082\u95b2\u89a7\u3067\u304d\u308b\u30ea\u30dd\u30b8\u30c8\u30ea\u306b\u306a\u308a\u3001Private \u306b\u3059\u308b\u3068\u3001\u81ea\u5206\u4ee5\u5916\u306f\u95b2\u89a7\u3067\u304d\u306a\u3044\u30ea\u30dd\u30b8\u30c8\u30ea\u306b\u306a\u308a\u307e\u3059\u3002\\n\\n\u305d\u308c\u4ee5\u5916\u306e\u8a2d\u5b9a\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u307e\u307e\u3067\u554f\u984c\u3042\u308a\u307e\u305b\u3093\u3002\\n\\n\u5165\u529b\u304c\u5b8c\u4e86\u3057\u305f\u3089\u3001Create repository \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002\\n\\n![alt text](create-repository.png)\\n\\n\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u4f5c\u6210\u65b9\u6cd5\u306f\u3001\u5927\u304d\u304f\u5206\u3051\u3066\u4ee5\u4e0b\u306e 2 \u7a2e\u985e\u3042\u308a\u307e\u3059\u3002\\n\\n### \u30ed\u30fc\u30ab\u30eb\u306e Git \u30ea\u30dd\u30b8\u30c8\u30ea\u3068\u9023\u643a\u3059\u308b\\n\\n\u30ed\u30fc\u30ab\u30eb\u306e Git \u30ea\u30dd\u30b8\u30c8\u30ea\u3092 GitHub \u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u3068\u9023\u643a\u3055\u305b\u308b\u65b9\u6cd5\u306f\u3001\u4ee5\u4e0b\u306e 2 \u7a2e\u985e\u304c\u3042\u308a\u307e\u3059\u3002\\n\\n1. GitHub \u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u30ed\u30fc\u30ab\u30eb\u306b\u30af\u30ed\u30fc\u30f3\u3059\u308b\u65b9\u6cd5\\n2. \u30ed\u30fc\u30ab\u30eb\u3068 GitHub \u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u7d10\u3065\u3051\u3066\u5229\u7528\u3059\u308b\u65b9\u6cd5\\n\\nLaravel \u3084 Next.js \u306a\u3069\u306e\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3067\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u308b\u969b\u306b\u30ed\u30fc\u30ab\u30eb\u306b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30d5\u30a9\u30eb\u30c0\u304c\u4f5c\u6210\u3055\u308c\u308b\u306e\u3067\u30012 \u756a\u76ee\u306e\u65b9\u6cd5\u3092\u4f7f\u3046\u3053\u3068\u304c\u591a\u3044\u3067\u3059\u3002\\n\\n#### 1. GitHub \u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u30ed\u30fc\u30ab\u30eb\u306b\u30af\u30ed\u30fc\u30f3\u3059\u308b\u65b9\u6cd5\\n\\ngit \u30b3\u30de\u30f3\u30c9\u3067\u30ed\u30fc\u30ab\u30eb\u306b\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u30af\u30ed\u30fc\u30f3\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u306e\u3067\u3001\u753b\u50cf\u306e\u3088\u3046\u306b SSH \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u304b\u3089\u3001URL \u3092\u30b3\u30d4\u30fc\u3057\u3066\u304f\u3060\u3055\u3044\u3002\\n\\n![alt text](copy-ssh-url.png)\\n\\n\u305d\u3057\u3066\u3001\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u3001\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u30af\u30ed\u30fc\u30f3\u3057\u307e\u3059\u3002\\n\\n```bash\\ngit clone {git@\u3067\u59cb\u307e\u308b\u30ea\u30dd\u30b8\u30c8\u30ea\u306e URL}\\n```\\n\\n\u305d\u3057\u3066\u3001\u30af\u30ed\u30fc\u30f3\u3057\u305f\u30ea\u30dd\u30b8\u30c8\u30ea\u3092 VSCode \u306a\u3069\u3067\u958b\u3044\u3066\u958b\u767a\u3092\u884c\u3044\u3001\u30b3\u30df\u30c3\u30c8\u3057\u3066\u30d7\u30c3\u30b7\u30e5\u3059\u308b\u3053\u3068\u3067\u3001GitHub \u306b\u30b3\u30fc\u30c9\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\\n\\n#### 2. \u30ed\u30fc\u30ab\u30eb\u3068 GitHub \u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u7d10\u3065\u3051\u3066\u5229\u7528\u3059\u308b\u65b9\u6cd5\\n\\n\u307e\u305a\u306f\u30ed\u30fc\u30ab\u30eb\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u304c Git \u7ba1\u7406\u3055\u308c\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002VSCode \u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u3044\u3066\u3001\u5de6\u30e1\u30cb\u30e5\u30fc\u306e Souce Control \u3092\u958b\u3044\u305f\u3068\u304d\u306b\u3001Initialize Repository \u306e\u30dc\u30bf\u30f3\u304c\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u307e\u3060 Git \u7ba1\u7406\u3055\u308c\u3066\u3044\u306a\u3044\u72b6\u614b\u306a\u306e\u3067\u3001\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066 Git \u7ba1\u7406\u3092\u958b\u59cb\u3057\u307e\u3059\u3002\\n\\n![alt text](initialize-repository.png)\\n\\n\u305d\u3057\u3066\u3001\u3059\u3079\u3066\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u30b9\u30c6\u30fc\u30b8\u30f3\u30b0\u3057\u3066\u3001Initial commit \u3068\u3044\u3046\u30e1\u30c3\u30bb\u30fc\u30b8\u3067\u30b3\u30df\u30c3\u30c8\u3057\u307e\u3059\u3002\\n\\n![alt text](staging.png)\\n\\n![alt text](commit.png)\\n\\n\u6b21\u306b\u3001GitHub \u306e\u300c...or push an existing repository from the command line\u300d\u306e\u30b3\u30de\u30f3\u30c9\u3092\u30b3\u30d4\u30fc\u3057\u3001VSCode \u3067\u30bf\u30fc\u30df\u30ca\u30eb\u3092\u958b\u3044\u3066\u3001\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002\\n\\n![alt text](copy-existing-repository-command.png)\\n\\n![alt text](vscode-terminal.png)\\n\\n\u3053\u308c\u3067\u3001GitHub \u4e0a\u306b\u30ed\u30fc\u30ab\u30eb\u306e\u30d5\u30a1\u30a4\u30eb\u306e\u5185\u5bb9\u304c\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3055\u308c\u308b\u306f\u305a\u3067\u3059\u3002\u3053\u306e\u5f8c\u306f\u3001VSCode \u3067\u30d5\u30a1\u30a4\u30eb\u3092\u7de8\u96c6\u3057\u3066\u30b3\u30df\u30c3\u30c8\u3057\u3001\u30d7\u30c3\u30b7\u30e5\u3059\u308b\u3053\u3068\u3067\u3001GitHub \u30b3\u30fc\u30c9\u306e\u5185\u5bb9\u3092\u53cd\u6620\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"},{"id":"http-method","metadata":{"permalink":"/engineer-handson/blog/http-method","source":"@site/blog/http-method.md","title":"\u3010POST or GET?\u3011HTTP\u30e1\u30bd\u30c3\u30c9\u306b\u3064\u3044\u3066\u89e3\u8aac","description":"\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001HTTP \u30e1\u30bd\u30c3\u30c9\u306b\u3064\u3044\u3066\u89e3\u8aac\u3057\u307e\u3059\u3002","date":"2024-06-23T10:00:00.000Z","tags":[{"inline":true,"label":"Web","permalink":"/engineer-handson/blog/tags/web"}],"readingTime":4.05,"hasTruncateMarker":true,"authors":[{"name":"\u30e6\u30fc\u30b9\u30b1","title":"Carriage CEO","imageURL":"/engineer-handson/img/inoue.jpeg","key":"inoue"}],"frontMatter":{"slug":"http-method","title":"\u3010POST or GET?\u3011HTTP\u30e1\u30bd\u30c3\u30c9\u306b\u3064\u3044\u3066\u89e3\u8aac","date":"2024-06-23T10:00","authors":["inoue"],"tags":["Web"]},"unlisted":false,"prevItem":{"title":"\u3010GitHub\u3011\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u4f5c\u6210\u304b\u3089\u30ea\u30dd\u30b8\u30c8\u30ea\u4f5c\u6210\u307e\u3067\u306e\u624b\u9806","permalink":"/engineer-handson/blog/initialize-github"}},"content":"\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001HTTP \u30e1\u30bd\u30c3\u30c9\u306b\u3064\u3044\u3066\u89e3\u8aac\u3057\u307e\u3059\u3002\\n\\nHTTP \u30e1\u30bd\u30c3\u30c9\u306f\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u30b5\u30fc\u30d0\u30fc\u306b\u5bfe\u3057\u3066\u884c\u3044\u305f\u3044\u51e6\u7406\u3092\u6307\u5b9a\u3059\u308b\u305f\u3081\u306e\u3082\u306e\u3067\u3059\u3002\u4ee3\u8868\u7684\u306a HTTP \u30e1\u30bd\u30c3\u30c9\u306b\u306f\u3001GET\u3001POST\u3001PUT\u3001DELETE \u306a\u3069\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u308c\u305e\u308c\u306e HTTP \u30e1\u30bd\u30c3\u30c9\u306e\u7279\u5fb4\u3084\u4f7f\u3044\u5206\u3051\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002\\n\\n\x3c!-- truncate --\x3e\\n\\n## \u30ea\u30bd\u30fc\u30b9\u306b\u3064\u3044\u3066\\n\\nHTTP \u3067\u306f\u3001\u30ea\u30bd\u30fc\u30b9\u3068\u3044\u3046\u5358\u4f4d\u3067\u60c5\u5831\u3092\u6271\u3044\u307e\u3059\u3002\u30ea\u30bd\u30fc\u30b9\u306f\u3001URI \u3067\u8b58\u5225\u3055\u308c\u307e\u3059\u3002\u30ea\u30bd\u30fc\u30b9\u306b\u5bfe\u3057\u3066\u884c\u3044\u305f\u3044\u51e6\u7406\u3092 HTTP \u30e1\u30bd\u30c3\u30c9\u3067\u6307\u5b9a\u3057\u3066\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\u3057\u307e\u3059\u3002\\n\\n\u4f8b\u3048\u3070\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u306f\u30ea\u30bd\u30fc\u30b9\u3068\u3057\u3066\u6349\u3048\u307e\u3059\u3002\\n\\n- \u5546\u54c1\u60c5\u5831\\n- \u30e6\u30fc\u30b6\u30fc\u60c5\u5831\\n- \u8cfc\u5165\u60c5\u5831\\n\\n\u3053\u308c\u3089\u306e\u30ea\u30bd\u30fc\u30b9\u306b\u5bfe\u3057\u3066\u3001GET \u30e1\u30bd\u30c3\u30c9\u3067\u60c5\u5831\u3092\u53d6\u5f97\u3057\u305f\u308a\u3001POST \u30e1\u30bd\u30c3\u30c9\u3067\u65b0\u3057\u3044\u60c5\u5831\u3092\u767b\u9332\u3057\u305f\u308a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\\n\\n## \u5404\u30e1\u30bd\u30c3\u30c9\u306e\u8aac\u660e\\n\\n### GET \u30e1\u30bd\u30c3\u30c9\\n\\nGET \u30e1\u30bd\u30c3\u30c9\u306f\u3001\u30ea\u30bd\u30fc\u30b9\u306e\u53d6\u5f97\u3092\u884c\u3046\u305f\u3081\u306e\u30e1\u30bd\u30c3\u30c9\u3067\u3059\u3002\u30d6\u30e9\u30a6\u30b6\u3067 URL \u3092\u5165\u529b\u3057\u3066\u30da\u30fc\u30b8\u3092\u8868\u793a\u3059\u308b\u3068\u304d\u306b\u3082 GET \u30e1\u30bd\u30c3\u30c9\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\\n\\n\u30ea\u30bd\u30fc\u30b9\u306e ID \u306a\u3069\u3084\u691c\u7d22\u30d1\u30e9\u30e1\u30fc\u30bf\u306a\u3069\u3092\u6307\u5b9a\u3057\u305f\u3044\u3068\u304d\u306f\u3001URL \u306e\u30af\u30a8\u30ea\u30d1\u30e9\u30e1\u30fc\u30bf\u306b\u6307\u5b9a\u3057\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001`https://example.com/items?id=1` \u306e\u3088\u3046\u306a URL \u3067\u3001ID \u304c 1 \u306e\u5546\u54c1\u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b\u3068\u3044\u3046\u610f\u5473\u306b\u306a\u308a\u307e\u3059\u3002\\n\\nGET \u30e1\u30bd\u30c3\u30c9\u306f\u3001POST \u30e1\u30bd\u30c3\u30c9\u3068\u9055\u3063\u3066\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u30dc\u30c7\u30a3\u306b\u30c7\u30fc\u30bf\u3092\u542b\u3081\u308b\u3053\u3068\u306f\u60f3\u5b9a\u3055\u308c\u3066\u3044\u306a\u3044\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002\\n\\n### POST \u30e1\u30bd\u30c3\u30c9\\n\\nPOST \u30e1\u30bd\u30c3\u30c9\u306f\u3001\u30ea\u30bd\u30fc\u30b9\u306e\u65b0\u898f\u4f5c\u6210\u3084\u66f4\u65b0\u3092\u884c\u3046\u305f\u3081\u306e\u30e1\u30bd\u30c3\u30c9\u3067\u3059\u3002\u30d5\u30a9\u30fc\u30e0\u304b\u3089\u30c7\u30fc\u30bf\u3092\u9001\u4fe1\u3059\u308b\u3068\u304d\u306b\u3082 POST \u30e1\u30bd\u30c3\u30c9\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\\n\\nPOST \u30e1\u30bd\u30c3\u30c9\u306f\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u30dc\u30c7\u30a3\u306b\u30c7\u30fc\u30bf\u3092\u542b\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u30e6\u30fc\u30b6\u30fc\u60c5\u5831\u3092\u767b\u9332\u3059\u308b\u3068\u304d\u306f\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u30dc\u30c7\u30a3\u306b\u30e6\u30fc\u30b6\u30fc\u540d\u3084\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306a\u3069\u306e\u60c5\u5831\u3092\u542b\u3081\u3066\u9001\u4fe1\u3057\u307e\u3059\u3002\\n\\n### PUT \u30e1\u30bd\u30c3\u30c9\\n\\nPUT \u30e1\u30bd\u30c3\u30c9\u306f\u3001\u30ea\u30bd\u30fc\u30b9\u306e\u66f4\u65b0\u3092\u884c\u3046\u305f\u3081\u306e\u30e1\u30bd\u30c3\u30c9\u3067\u3059\u3002POST \u30e1\u30bd\u30c3\u30c9\u3068\u540c\u69d8\u306b\u30ea\u30af\u30a8\u30b9\u30c8\u30dc\u30c7\u30a3\u306b\u30c7\u30fc\u30bf\u3092\u542b\u3081\u3066\u9001\u4fe1\u3057\u307e\u3059\u304c\u3001PUT \u30e1\u30bd\u30c3\u30c9\u306f\u30ea\u30bd\u30fc\u30b9\u306e\u66f4\u65b0\u3092\u884c\u3046\u3053\u3068\u3092\u660e\u793a\u7684\u306b\u793a\u3059\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\\n\\n\u307e\u305f PUT \u30e1\u30bd\u30c3\u30c9\u306f\u51aa\u7b49\u3067\u3042\u308b\u3088\u3046\u306b\u8a2d\u8a08\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u51aa\u7b49\u3068\u306f\u3001\u540c\u3058\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u8907\u6570\u56de\u9001\u4fe1\u3057\u3066\u3082\u3001\u30ea\u30bd\u30fc\u30b9\u306e\u66f4\u65b0\u306e\u7d50\u679c\u304c\u5909\u308f\u3089\u306a\u3044\u3053\u3068\u3092\u6307\u3057\u307e\u3059\u3002\\n\\n\u305d\u306e\u305f\u3081\u3001POST \u30e1\u30bd\u30c3\u30c9\u306f\u65b0\u898f\u4f5c\u6210\u3001PUT \u30e1\u30bd\u30c3\u30c9\u306f\u66f4\u65b0\u3068\u3044\u3046\u4f7f\u3044\u5206\u3051\u304c\u3055\u308c\u308b\u3053\u3068\u304c\u591a\u3044\u3067\u3059\u3002\\n\\n### DELETE \u30e1\u30bd\u30c3\u30c9\\n\\nDELETE \u30e1\u30bd\u30c3\u30c9\u306f\u3001\u30ea\u30bd\u30fc\u30b9\u306e\u524a\u9664\u3092\u884c\u3046\u305f\u3081\u306e\u30e1\u30bd\u30c3\u30c9\u3067\u3059\u3002\u30ea\u30bd\u30fc\u30b9\u3092\u524a\u9664\u3059\u308b\u3068\u304d\u306b\u4f7f\u7528\u3057\u307e\u3059\u3002\\n\\nDELETE \u30e1\u30bd\u30c3\u30c9\u306f\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u30dc\u30c7\u30a3\u306b\u30c7\u30fc\u30bf\u3092\u542b\u3081\u308b\u3053\u3068\u306f\u60f3\u5b9a\u3055\u308c\u3066\u3044\u306a\u3044\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30ea\u30bd\u30fc\u30b9\u306e ID \u306a\u3069\u306f GET \u30e1\u30bd\u30c3\u30c9\u3068\u540c\u69d8\u306b URL \u306e\u30d1\u30b9\u306b\u542b\u3081\u3066\u9001\u4fe1\u3057\u307e\u3059\u3002\\n\\n## \u5b9f\u4f8b\u3092\u898b\u3066\u307f\u3088\u3046\\n\\n\u4ee5\u4e0b\u306f\u3001\u30d6\u30ed\u30b0\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e URL \u8a2d\u8a08\u4f8b\u3067\u3059\u3002\\n\\n- \u8a18\u4e8b\u4e00\u89a7\u306e\u53d6\u5f97: `GET /articles`\\n- \u8a18\u4e8b\u8a73\u7d30\u306e\u53d6\u5f97: `GET /articles/:id`\\n- \u8a18\u4e8b\u306e\u65b0\u898f\u4f5c\u6210: `POST /articles`\\n- \u8a18\u4e8b\u306e\u66f4\u65b0: `PUT /articles/:id`\\n- \u8a18\u4e8b\u306e\u524a\u9664: `DELETE /articles/:id`\\n\\n\u3053\u306e\u3088\u3046\u306b\u3001HTTP \u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u3044\u5206\u3051\u308b\u3053\u3068\u3067\u3001\u30ea\u30bd\u30fc\u30b9\u306b\u5bfe\u3057\u3066\u9069\u5207\u306a\u51e6\u7406\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}]}}')}}]);