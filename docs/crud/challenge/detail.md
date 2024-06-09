---
sidebar_label: "映画詳細ページ"
title: 映画詳細ページの実装
description: 映画詳細ページの実装課題
---

## 目標

映画詳細ページのコンポーネントを作成し、特定の映画の詳細情報を表示できるようにします。

## 課題内容

1. `resources/js/Pages/Movies/Show.jsx` ファイルを作成します。
2. 特定の映画の詳細情報を表示します。

## ヒント

- 映画の詳細情報は`props`から受け取ります。

```jsx
import React from "react";

const Show = ({ movie }) => (
  <div>
    <h1>{movie.title}</h1>
    <p>{movie.description}</p>
    {/* 他の映画詳細情報 */}
  </div>
);

export default Show;
```
