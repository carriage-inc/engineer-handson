---
sidebar_label: Grid
title: Grid
description: Grid レイアウトの使い方を説明します。
---

# Grid の使い方

## 1. Grid Container と Grid Items の設定

まずは index.html と style.css を以下の内容にしてください。

```html title="index.html"
<div class="container">
  <div class="item" id="item1">Item 1</div>
  <div class="item" id="item2">Item 2</div>
  <div class="item" id="item3">Item 3</div>
  <div class="item" id="item4">Item 4</div>
</div>
```

```css title="style.css"
.container {
  border: 1px solid;
  padding: 16px;
}

.item {
  border: 1px solid;
  padding: 8px;
}
```

:::info
[HTML の基本構造](/docs/lp/start-project#3-html-の基本構造を記述) の index.html をコピーして、body タグ内に記述して下さい。
:::

次のように縦並びのアイテムが表示されます。

<div
  class="container"
  style={{
    marginBottom: "16px", 
    border: "1px solid", 
    padding: "16px"
  }}
>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 1</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 2</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 3</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 4</div>
</div>

Grid を使用するには、まず、親要素（container）に`display: grid`を設定します。

```css title="style.css"
.container {
  border: 1px solid;
  padding: 16px;
  display: grid; /* 追加 */
}

.item {
  border: 1px solid;
  padding: 8px;
}
```

## 2. Grid Template Columns and Rows

`grid-template-columns`および`grid-template-rows`プロパティを使用して、グリッドの列と行のサイズを設定します。

```css title="style.css"
.container {
  border: 1px solid;
  padding: 16px;
  display: grid;
  grid-template-columns: 100px 200px;
  grid-template-rows: 150px 200px;
}

.item {
  border: 1px solid;
  padding: 8px;
}
```

この例では、2 列と 2 行のグリッドが作成されます。各列と行のサイズは、ピクセルまたはパーセントで指定できます。

<div
  class="container"
  style={{
    marginBottom: "16px", 
    border: "1px solid", 
    padding: "16px",
    display: "grid",
    gridTemplateColumns: "100px 200px",
    gridTemplateRows: "150px 200px"
  }}
>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 1</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 2</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 3</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 4</div>
</div>

## 3. Grid Gap

`grid-gap`プロパティを使用して、グリッドアイテム間の間隔を設定します。  
`row-gap`、および `column-gap`を使用して、行と列の間隔を個別に設定することもできます。

```css title="style.css"
.container {
  border: 1px solid;
  padding: 16px;
  display: grid;
  grid-template-columns: 100px 200px;
  grid-template-rows: 150px 200px;
  grid-gap: 10px;
}

.item {
  border: 1px solid;
  padding: 8px;
}
```

<div
  class="container"
  style={{
    marginBottom: "16px", 
    border: "1px solid", 
    padding: "16px",
    display: "grid",
    gridTemplateColumns: "100px 200px",
    gridTemplateRows: "150px 200px",
    gridGap: "10px"
  }}
>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 1</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 2</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 3</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 4</div>
</div>

## 4. Grid Area

`grid-template-areas`プロパティを使用して、グリッドレイアウト内のエリアを名前で定義できます。

```css title="style.css"
.container {
  border: 1px solid;
  padding: 16px;
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
}

.item {
  border: 1px solid;
  padding: 8px;
}

#item1 {
  grid-area: header;
}

#item2 {
  grid-area: sidebar;
}

#item3 {
  grid-area: content;
}

#item4 {
  grid-area: footer;
}
```

この例では、3 列と 2 行のグリッドが作成され、各エリアにアイテムが配置されています。
各グリッドアイテムには、`grid-area`プロパティを使用してエリア名を割り当てます。

<div
  class="container"
  style={{
    marginBottom: "16px", 
    border: "1px solid", 
    padding: "16px",
    display: "grid",
    gridTemplateColumns: "100px 100px 100px",
    gridTemplateRows: "100px 100px",
    gridTemplateAreas: `
      "header header header"
      "sidebar content content"
      "footer footer footer
    `
  }}
>
  <div class="item" style={{ border: "1px solid", padding: "8px", gridArea: "header" }}>Item 1</div>
  <div class="item" style={{ border: "1px solid", padding: "8px", gridArea: "sidebar" }}>Item 2</div>
  <div class="item" style={{ border: "1px solid", padding: "8px", gridArea: "content" }}>Item 3</div>
  <div class="item" style={{ border: "1px solid", padding: "8px", gridArea: "footer" }}>Item 4</div>
</div>

## 5. Grid Item の個別設定

グリッドアイテムの位置やサイズは、以下のプロパティを使用して個別に設定できます：

- `grid-column-start` / `grid-column-end`
- `grid-row-start` / `grid-row-end`
- `grid-column` (grid-column-start と grid-column-end のショートハンド)
- `grid-row` (grid-row-start と grid-row-end のショートハンド)

```css title="style.css"
.container {
  border: 1px solid;
  padding: 16px;
  display: grid;
  grid-template-columns: 100px 200px;
  grid-template-rows: 150px 200px 100px;
}

.item {
  border: 1px solid;
  padding: 8px;
}

#item1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}

#item2 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
}

#item3 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
}

#item4 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
}
```

<div
  class="container"
  style={{
    marginBottom: "16px", 
    border: "1px solid", 
    padding: "16px",
    display: "grid",
    gridTemplateColumns: "100px 200px",
    gridTemplateRows: "150px 200px 100px"
  }}
>
  <div class="item" style={{ border: "1px solid", padding: "8px", gridColumnStart: 1, gridColumnEnd: 3, gridRowStart: 1, gridRowEnd: 2 }}>Item 1</div>
  <div class="item" style={{ border: "1px solid", padding: "8px", gridColumnStart: 1, gridColumnEnd: 2, gridRowStart: 2, gridRowEnd: 3 }}>Item 2</div>
  <div class="item" style={{ border: "1px solid", padding: "8px", gridColumnStart: 2, gridColumnEnd: 3, gridRowStart: 2, gridRowEnd: 3 }}>Item 3</div>
  <div class="item" style={{ border: "1px solid", padding: "8px", gridColumnStart: 1, gridColumnEnd: 3, gridRowStart: 3, gridRowEnd: 4 }}>Item 4</div>
</div>

## 6. Justify Items と Align Items

`justify-items`および`align-items`プロパティを使用して、各グリッドアイテムの水平および垂直方向の配置方法を設定します。

設定できる値は以下の通りです。

- `stretch`（デフォルト）: コンテンツをグリッドアイテムのサイズに合わせて伸縮します。
- `start`: コンテンツを開始位置に配置します。
- `end`: コンテンツを終了位置に配置します。
- `center`: コンテンツを中央に配置します。

```css title="style.css"
.container {
  border: 1px solid;
  padding: 16px;
  display: grid;
  grid-template-columns: 100px 200px;
  grid-template-rows: 150px 200px;
  grid-gap: 10px;
  justify-items: center;
  align-items: end;
}

.item {
  border: 1px solid;
  padding: 8px;
}
```

この例では、各グリッドアイテムが中央に配置され、垂直方向に下に配置されます。

<div
  class="container"
  style={{
    marginBottom: "16px", 
    border: "1px solid", 
    padding: "16px",
    display: "grid",
    gridTemplateColumns: "100px 200px",
    gridTemplateRows: "150px 200px",
    gridGap: "10px",
    justifyItems: "center",
    alignItems: "end"
  }}
>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 1</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 2</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 3</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 4</div>
</div>

## 7. Justify Content と Align Content

`justify-content`および`align-content`プロパティを使用して、グリッド全体のコンテンツの配置方法を設定します。

設定できる値は以下の通りです。

- `stretch`（デフォルト）: コンテンツをグリッドコンテナのサイズに合わせて伸縮します。
- `start`: コンテンツを開始位置に配置します。
- `end`: コンテンツを終了位置に配置します。
- `center`: コンテンツを中央に配置します。

```css
.container {
  border: 1px solid;
  padding: 16px;
  display: grid;
  grid-template-columns: 100px 200px;
  grid-template-rows: 150px 200px;
  grid-gap: 10px;
  justify-items: center;
  align-items: end;
  justify-content: center;
  align-content: end;
}
```

この例では、グリッド全体のコンテンツが中央に配置され、垂直方向に下に配置されます。

<div
  class="container"
  style={{
    marginBottom: "16px", 
    border: "1px solid", 
    padding: "16px",
    display: "grid",
    gridTemplateColumns: "100px 200px",
    gridTemplateRows: "150px 200px",
    gridGap: "10px",
    justifyItems: "center",
    alignItems: "end",
    justifyContent: "center",
    alignContent: "end"
  }}
>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 1</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 2</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 3</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 4</div>
</div>

## まとめ

Grid レイアウトも、Flexbox と同様に、Web ページのレイアウトを柔軟に設計することができます。  
暗記する必要はありませんが、レイアウトを設計する際に、アレあったなと思い出せるようにしておきましょう。
