---
sidebar_label: "トップページ"
title: トップページの実装
description: トップページの実装課題
---

## 目標

トップページのコンポーネントを作成し、映画の紹介文やユーザー登録へのリンクを表示できるようにします。

## 課題内容

1. `resources/js/Pages/Top.jsx` ファイルを作成します。
2. トップページに映画の紹介文を追加します。
3. ユーザー登録ページへのリンクを追加します。

## ヒント

- `InertiaLink` を使ってページ間のリンクを作成します。

```jsx
import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

const Top = () => (
  <div>
    <h1>映画の思い出、すべてをここに。</h1>
    <p>このサービスは、映画好きのための鑑賞記録サービスです。</p>
    <InertiaLink href="/register">ユーザー登録する</InertiaLink>
  </div>
);

export default Top;
```
