---
sidebar_label: "映画作成ページ"
title: 映画作成ページの実装
description: 映画作成ページの実装課題
---

## 目標

映画作成ページのコンポーネントを作成し、新しい映画を登録できるようにします。

## 課題内容

1. `resources/js/Pages/Movies/Create.jsx` ファイルを作成します。
2. 映画を作成するためのフォームを表示します。
3. フォームの入力内容をサーバーに送信して、新しい映画を登録します。

## ヒント

- `Inertia.post` を使ってフォームのデータを送信します。

```jsx
import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

const Create = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    Inertia.post("/movies", { title, description });
  };

  return (
    <div>
      <h1>Create Movie</h1>
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

export default Create;
```
