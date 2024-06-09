---
sidebar_label: "映画リストページ"
title: 映画リストページの実装
description: 映画リストページの実装課題
---

## 目標

映画リストページのコンポーネントを作成し、映画の一覧を表示できるようにします。

## 課題内容

1. `resources/js/Pages/Movies/Index.jsx` ファイルを作成します。
2. 映画の一覧を取得して表示します。
3. 各映画の詳細ページへのリンクを追加します。

## ヒント

- `InertiaLink` を使ってページ間のリンクを作成します。
- 映画の一覧は`props`から受け取ります。

```jsx
import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

const Index = ({ movies }) => (
  <div>
    <h1>Movies</h1>
    <InertiaLink href="/movies/create">Create Movie</InertiaLink>
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <InertiaLink href={`/movies/${movie.id}`}>{movie.title}</InertiaLink>
        </li>
      ))}
    </ul>
  </div>
);

export default Index;
```
