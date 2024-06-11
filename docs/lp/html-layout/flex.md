---
sidebar_label: Flexbox
title: Flexbox
description: Flexbox レイアウトの使い方を説明します。
---

# Flexbox の使い方

## 1. Flex Container と Flex Items の設定

まずは index.html と style.css を以下の内容にしてください。

```html title="index.html"
<div class="container">
  <div class="item" id="item1">Item 1</div>
  <div class="item" id="item2">Item 2</div>
  <div class="item" id="item3">Item 3</div>
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
</div>

Flexbox を使用するには、まず、親要素（container）に`display: flex`を設定します。

```css title="style.css"
.container {
  border: 1px solid;
  padding: 16px;
  display: flex; /* 追加 */
}

.item {
  border: 1px solid;
  padding: 8px;
}
```

子要素（item）は自動的にフレックスアイテムになります。

<div
  class="container"
  style={{
    marginBottom: "16px", 
    border: "1px solid", 
    padding: "16px",
    display: "flex"
  }}
>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 1</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 2</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 3</div>
</div>

## 2. Flex Direction

`flex-direction`プロパティを使用して、アイテムの配置方向を設定できます。値は以下の通りです。

- `row`（デフォルト）：アイテムを横方向に配置
- `row-reverse`：アイテムを横方向に逆順で配置
- `column`：アイテムを縦方向に配置
- `column-reverse`：アイテムを縦方向に逆順で配置

```css title="style.css"
.container {
  border: 1px solid;
  padding: 16px;
  display: flex;
  height: 200px; /* 効果をわかりやすくするために高さを設定 */
  flex-direction: row;
}

.item {
  border: 1px solid;
  padding: 8px;
}
```

### row

<div
  class="container"
  style={{
    marginBottom: "16px", 
    border: "1px solid", 
    padding: "16px",
    display: "flex",
    height: "200px",
    flexDirection: "row"
  }}
>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 1</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 2</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 3</div>
</div>

### row-reverse

<div
  class="container"
  style={{
    marginBottom: "16px", 
    border: "1px solid", 
    padding: "16px",
    display: "flex",
    height: "200px",
    flexDirection: "row-reverse"
  }}
>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 1</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 2</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 3</div>
</div>

### column

<div
  class="container"
  style={{
    marginBottom: "16px", 
    border: "1px solid", 
    padding: "16px",
    display: "flex",
    height: "200px",
    flexDirection: "column"
  }}
>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 1</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 2</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 3</div>
</div>

### column-reverse

<div
  class="container"
  style={{
    marginBottom: "16px", 
    border: "1px solid", 
    padding: "16px",
    display: "flex",
    height: "200px",
    flexDirection: "column-reverse"
  }}
>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 1</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 2</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 3</div>
</div>

## 3. Justify Content

`justify-content`プロパティを使用して、主軸方向に沿ったアイテムの配置方法を設定します。  
主軸とは、`flex-direction`プロパティで設定した方向のことで、row の場合は横方向、column の場合は縦方向です。

- `flex-start`（デフォルト）：先頭に揃える
- `flex-end`：末尾に揃える
- `center`：中央に揃える
- `space-between`：アイテム間のスペースを均等に
- `space-around`：アイテムの周りのスペースを均等に

```css title="style.css"
.container {
  border: 1px solid;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.item {
  border: 1px solid;
  padding: 8px;
}
```

### flex-start

<div
  class="container"
  style={{
    marginBottom: "16px", 
    border: "1px solid", 
    padding: "16px",
    display: "flex",
    justifyContent: "flex-start"
  }}
>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 1</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 2</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 3</div>
</div>

### flex-end

<div
  class="container"
  style={{
    marginBottom: "16px", 
    border: "1px solid", 
    padding: "16px",
    display: "flex",
    justifyContent: "flex-end"
  }}
>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 1</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 2</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 3</div>
</div>

### center

<div
  class="container"
  style={{
    marginBottom: "16px", 
    border: "1px solid", 
    padding: "16px",
    display: "flex",
    justifyContent: "center"
  }}
>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 1</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 2</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 3</div>
</div>

### space-between

<div
  class="container"
  style={{
    marginBottom: "16px", 
    border: "1px solid", 
    padding: "16px",
    display: "flex",
    justifyContent: "space-between"
  }}
>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 1</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 2</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 3</div>
</div>

### space-around

<div
  class="container"
  style={{
    marginBottom: "16px", 
    border: "1px solid", 
    padding: "16px",
    display: "flex",
    justifyContent: "space-around"
  }}
>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 1</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 2</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 3</div>
</div>

## 4. Align Items

`align-items`プロパティを使用して、主軸と交差する軸に沿ったアイテムの配置方法を設定します。

- `stretch`（デフォルト）：アイテムを伸ばして揃える
- `flex-start`：先頭に揃える
- `flex-end`：末尾に揃える
- `center`：中央に揃える
- `baseline`：アイテムのテキストの基線に揃える

```css title="style.css"
.container {
  border: 1px solid;
  padding: 16px;
  display: flex;
  flex-direction: row;
  height: 200px; /* 効果をわかりやすくするために高さを設定 */
  align-items: center;
}

.item {
  border: 1px solid;
  padding: 8px;
}

.item1 {
  padding: 8px;
}

.item2 {
  padding: 16px 8px;
}

.item3 {
  padding: 24px 8px;
}
```

### stretch

<div
  class="container"
  style={{
    marginBottom: "16px", 
    border: "1px solid", 
    padding: "16px",
    display: "flex",
    height: "200px",
    alignItems: "stretch"
  }}
>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 1</div>
  <div class="item" style={{ border: "1px solid", padding: "16px 8px" }}>Item 2</div>
  <div class="item" style={{ border: "1px solid", padding: "24px 8px" }}>Item 3</div>
</div>

### flex-start

<div
  class="container"
  style={{
    marginBottom: "16px", 
    border: "1px solid", 
    padding: "16px",
    display: "flex",
    height: "200px",
    alignItems: "flex-start"
  }}
>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 1</div>
  <div class="item" style={{ border: "1px solid", padding: "16px 8px" }}>Item 2</div>
  <div class="item" style={{ border: "1px solid", padding: "24px 8px" }}>Item 3</div>
</div>

### flex-end

<div
  class="container"
  style={{
    marginBottom: "16px", 
    border: "1px solid", 
    padding: "16px",
    display: "flex",
    height: "200px",
    alignItems: "flex-end"
  }}
>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 1</div>
  <div class="item" style={{ border: "1px solid", padding: "16px 8px" }}>Item 2</div>
  <div class="item" style={{ border: "1px solid", padding: "24px 8px" }}>Item 3</div>
</div>

### center

<div
  class="container"
  style={{
    marginBottom: "16px", 
    border: "1px solid", 
    padding: "16px",
    display: "flex",
    height: "200px",
    alignItems: "center"
  }}
>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 1</div>
  <div class="item" style={{ border: "1px solid", padding: "16px 8px" }}>Item 2</div>
  <div class="item" style={{ border: "1px solid", padding: "24px 8px" }}>Item 3</div>
</div>

### baseline

<div
  class="container"
  style={{
    marginBottom: "16px", 
    border: "1px solid", 
    padding: "16px",
    display: "flex",
    height: "200px",
    alignItems: "baseline"
  }}
>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 1</div>
  <div class="item" style={{ border: "1px solid", padding: "16px 8px" }}>Item 2</div>
  <div class="item" style={{ border: "1px solid", padding: "24px 8px" }}>Item 3</div>
</div>

## 5. Flex Wrap

`flex-wrap`プロパティを使用して、アイテムがコンテナの枠を超えるときの折り返し方法を設定します。

- `nowrap`（デフォルト）：折り返さない
- `wrap`：アイテムを折り返す
- `wrap-reverse`：逆方向に折り返す

```css title="style.css"
.container {
  border: 1px solid;
  padding: 16px;
  display: flex;
  flex-direction: row;
  height: 200px; /* 効果をわかりやすくするために高さを設定 */
  width: 200px; /* 効果をわかりやすくするために幅を設定 */
  flex-wrap: wrap;
}

.item {
  border: 1px solid;
  padding: 8px;
}

.item1 {
  padding: 8px;
}

.item2 {
  padding: 16px 8px;
}

.item3 {
  padding: 24px 8px;
}
```

### nowrap

<div
  class="container"
  style={{
    marginBottom: "16px", 
    border: "1px solid", 
    padding: "16px",
    display: "flex",
    flexDirection: "row",
    height: "200px",
    width: "200px",
    flexWrap: "nowrap"
  }}
>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 1</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 2</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 3</div>
</div>

### wrap

<div
  class="container"
  style={{
    marginBottom: "16px", 
    border: "1px solid", 
    padding: "16px",
    display: "flex",
    flexDirection: "row",
    height: "200px",
    width: "200px",
    flexWrap: "wrap"
  }}
>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 1</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 2</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 3</div>
</div>

### wrap-reverse

<div
  class="container"
  style={{
    marginBottom: "16px", 
    border: "1px solid", 
    padding: "16px",
    display: "flex",
    flexDirection: "row",
    height: "200px",
    width: "200px",
    flexWrap: "wrap-reverse"
  }}
>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 1</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 2</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 3</div>
</div>

## 6. Align Content

`align-content`プロパティは、複数行のアイテムの間隔を設定します。  
アイテムが複数行にわたる場合に有効です。

- `flex-start`：先頭に揃える
- `flex-end`：末尾に揃える
- `center`：中央に揃える
- `space-between`：行間のスペースを均等に
- `space-around`：行の周りのスペースを均等に
- `stretch`（デフォルト）：行を伸ばして揃える

```css title="style.css"
.container {
  border: 1px solid;
  padding: 16px;
  display: flex;
  flex-direction: row;
  height: 200px; /* 効果をわかりやすくするために高さを設定 */
  width: 200px; /* 効果をわかりやすくするために幅を設定 */
  flex-wrap: wrap;
  align-content: flex-start;
}

.item {
  border: 1px solid;
  padding: 8px;
}
```

### flex-start

<div
  class="container"
  style={{
    marginBottom: "16px", 
    border: "1px solid", 
    padding: "16px",
    display: "flex",
    flexDirection: "row",
    height: "200px",
    width: "200px",
    flexWrap: "wrap",
    alignContent: "flex-start"
  }}
>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 1</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 2</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 3</div>
</div>

### flex-end

<div
  class="container"
  style={{
    marginBottom: "16px", 
    border: "1px solid", 
    padding: "16px",
    display: "flex",
    flexDirection: "row",
    height: "200px",
    width: "200px",
    flexWrap: "wrap",
    alignContent: "flex-end"
  }}
>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 1</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 2</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 3</div>
</div>

### center

<div
  class="container"
  style={{
    marginBottom: "16px", 
    border: "1px solid", 
    padding: "16px",
    display: "flex",
    flexDirection: "row",
    height: "200px",
    width: "200px",
    flexWrap: "wrap",
    alignContent: "center"
  }}
>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 1</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 2</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 3</div>
</div>

### space-between

<div
  class="container"
  style={{
    marginBottom: "16px", 
    border: "1px solid", 
    padding: "16px",
    display: "flex",
    flexDirection: "row",
    height: "200px",
    width: "200px",
    flexWrap: "wrap",
    alignContent: "space-between"
  }}
>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 1</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 2</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 3</div>
</div>

### space-around

<div
  class="container"
  style={{
    marginBottom: "16px", 
    border: "1px solid", 
    padding: "16px",
    display: "flex",
    flexDirection: "row",
    height: "200px",
    width: "200px",
    flexWrap: "wrap",
    alignContent: "space-around"
  }}
>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 1</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 2</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 3</div>
</div>

### stretch

<div
  class="container"
  style={{
    marginBottom: "16px", 
    border: "1px solid", 
    padding: "16px",
    display: "flex",
    flexDirection: "row",
    height: "200px",
    width: "200px",
    flexWrap: "wrap",
    alignContent: "stretch"
  }}
>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 1</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 2</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 3</div>
</div>

## 7. Flex Item の個別設定

各アイテムには`flex`、`order`、および`align-self`プロパティを使用して個別に設定ができます。  
まず、item に id を追加してください。

```html title="index.html"
<div class="container">
  <div class="item" style={{ border: "1px solid", padding: "8px" }} id="item1">Item 1</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }} id="item2">Item 2</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }} id="item3">Item 3</div>
</div>
```

### Order

`order`プロパティは、アイテムの順序を設定します。デフォルトは`0`です。

```css title="style.css"
.container {
  display: flex;
}

#item1 {
  order: 3;
}

#item2 {
  order: 2;
}

#item3 {
  order: 1;
}
```

### Flex

`flex`プロパティは、アイテムの拡大、縮小、および基準サイズを設定します。`flex-grow`、`flex-shrink`、`flex-basis`の 3 つの値を一括で設定できます。

```css title="style.css"
.item {
  flex: 1 1 auto;
}
```

### Align Self

`align-self`プロパティは、特定のアイテムの配置を設定します。`align-items`と同じ値が使えます。

```css title="style.css"
.container {
  display: flex;
  height: 200px;
}

#item2 {
  align-self: center;
}

#item3 {
  align-self: flex-end;
}
```

## 8. 実際の例

以下は、すべての基本プロパティを使用した例です：

```html title="index.html"
<div class="container">
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 1</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 2</div>
  <div class="item" style={{ border: "1px solid", padding: "8px" }}>Item 3</div>
</div>
```

```css title="style.css"
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.item {
  flex: 1 1 200px;
  order: 2;
  align-self: flex-start;
}
```

この設定では、アイテムは横方向に配置され、スペースが均等に割り当てられ、必要に応じて折り返されます。アイテムの順序や配置も個別に設定されています。
