---
sidebar_label: "映画編集ページ"
title: 映画編集ページの実装
description: 映画編集ページの実装課題
---

## 目標

映画編集ページのコンポーネントを作成し、既存の映画の情報を編集できるようにします。

## 課題内容

1. `resources/js/Pages/Movies/Edit.jsx` ファイルを作成します。
2. 編集する映画の情報をフォームに表示します。
3. フォームの入力内容をサーバーに送信して、映画の情報を更新します。

## ヒント

- `Inertia.put` を使ってフォームのデータを送信します。
- 初期値には編集する映画の情報を使用します。

```jsx
import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

const Edit = ({ movie }) => {
  const [title, setTitle] = useState(movie.title);
  const [description, setDescription] = useState(movie.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    Inertia.put(`/movies/${movie.id}`, { title, description });
  };

  return (
    <div>
      <h1>Edit Movie</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Edit;
```
