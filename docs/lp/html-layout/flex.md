---
sidebar_label: Flexbox
title: Flexbox
description: Flexbox レイアウトの使い方を説明します。
---

# Flexbox の使い方

## 1. Flex Container と Flex Items の設定

Flexbox の使用を開始するには、まず、親要素（コンテナ）に`display: flex`または`display: inline-flex`を設定します。  
子要素（アイテム）は自動的にフレックスアイテムになります。

```html title="index.html"
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

```css title="style.css"
.container {
  display: flex;
}
```

## 2. Flex Direction

`flex-direction`プロパティを使用して、アイテムの配置方向を設定できます。値は以下の通りです：

- `row`（デフォルト）：アイテムを横方向に配置
- `row-reverse`：アイテムを横方向に逆順で配置
- `column`：アイテムを縦方向に配置
- `column-reverse`：アイテムを縦方向に逆順で配置

```css title="style.css"
.container {
  display: flex;
  flex-direction: row;
}
```

## 3. Justify Content

`justify-content`プロパティを使用して、主軸（横方向または縦方向）に沿ったアイテムの配置方法を設定します。

- `flex-start`（デフォルト）：先頭に揃える
- `flex-end`：末尾に揃える
- `center`：中央に揃える
- `space-between`：アイテム間のスペースを均等に
- `space-around`：アイテムの周りのスペースを均等に

```css title="style.css"
.container {
  display: flex;
  justify-content: center;
}
```

## 4. Align Items

`align-items`プロパティを使用して、交差軸（通常は縦方向）に沿ったアイテムの配置方法を設定します。

- `stretch`（デフォルト）：アイテムを伸ばして揃える
- `flex-start`：先頭に揃える
- `flex-end`：末尾に揃える
- `center`：中央に揃える
- `baseline`：アイテムのテキストの基線に揃える

```css title="style.css"
.container {
  display: flex;
  align-items: center;
}
```

## 5. Flex Wrap

`flex-wrap`プロパティを使用して、アイテムがコンテナの枠を超えるときの折り返し方法を設定します。

- `nowrap`（デフォルト）：折り返さない
- `wrap`：アイテムを折り返す
- `wrap-reverse`：逆方向に折り返す

```css title="style.css"
.container {
  display: flex;
  flex-wrap: wrap;
}
```

## 6. Align Content

`align-content`プロパティは、複数行のアイテムの間隔を設定します。これはアイテムが複数行にわたる場合に有効です。

- `flex-start`：先頭に揃える
- `flex-end`：末尾に揃える
- `center`：中央に揃える
- `space-between`：行間のスペースを均等に
- `space-around`：行の周りのスペースを均等に
- `stretch`（デフォルト）：行を伸ばして揃える

```css title="style.css"
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}
```

## 7. Flex Item の個別設定

各アイテムには`flex`、`order`、および`align-self`プロパティを使用して個別に設定ができます。

### Order

`order`プロパティは、アイテムの順序を設定します。デフォルトは`0`です。

```css title="style.css"
.item {
  order: 1;
}
```

### Flex

`flex`プロパティは、アイテムの成長、縮小、および基準サイズを設定します。`flex-grow`、`flex-shrink`、`flex-basis`の 3 つの値を一括で設定できます。

```css title="style.css"
.item {
  flex: 1 1 auto;
}
```

### Align Self

`align-self`プロパティは、特定のアイテムの配置を設定します。`align-items`と同じ値が使えます。

```css title="style.css"
.item {
  align-self: flex-end;
}
```

## 8. 実際の例

以下は、すべての基本プロパティを使用した例です：

```html title="index.html"
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
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
