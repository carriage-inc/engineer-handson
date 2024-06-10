---
sidebar_label: Grid
title: Grid
description: Grid レイアウトの使い方を説明します。
---

# Grid の使い方

## 1. Grid Container と Grid Items の設定

Grid の使用を開始するには、まず、親要素（コンテナ）に`display: grid`または`display: inline-grid`を設定します。子要素（アイテム）は自動的にグリッドアイテムになります。

```html
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

```css
.container {
  display: grid;
}
```

## 2. Grid Template Columns and Rows

`grid-template-columns`および`grid-template-rows`プロパティを使用して、グリッドの列と行のサイズを設定します。

```css
.container {
  display: grid;
  grid-template-columns: 100px 200px;
  grid-template-rows: 100px 200px;
}
```

## 3. Grid Gap

`grid-gap`プロパティを使用して、グリッドアイテム間の間隔を設定します。これは`row-gap`および`column-gap`のショートハンドです。

```css
.container {
  display: grid;
  grid-template-columns: 100px 200px;
  grid-template-rows: 100px 200px;
  grid-gap: 10px;
}
```

## 4. Grid Area

`grid-template-areas`プロパティを使用して、グリッドレイアウト内のエリアを名前で定義できます。

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px;
  grid-template-areas:
    "header header header"
    "sidebar content content";
}
```

各グリッドアイテムには、`grid-area`プロパティを使用してエリア名を割り当てます。

```css
.item1 {
  grid-area: header;
}
.item2 {
  grid-area: sidebar;
}
.item3 {
  grid-area: content;
}
```

```html
<div class="container">
  <div class="item1">Header</div>
  <div class="item2">Sidebar</div>
  <div class="item3">Content</div>
</div>
```

## 5. Grid Item の個別設定

グリッドアイテムの位置やサイズは、以下のプロパティを使用して個別に設定できます：

- `grid-column-start` / `grid-column-end`
- `grid-row-start` / `grid-row-end`
- `grid-column`（ショートハンド）
- `grid-row`（ショートハンド）

```css
.item {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}
```

## 6. Justify Items と Align Items

`justify-items`および`align-items`プロパティを使用して、各グリッドアイテムの水平および垂直方向の配置方法を設定します。

```css
.container {
  display: grid;
  justify-items: center;
  align-items: center;
}
```

## 7. Justify Content と Align Content

`justify-content`および`align-content`プロパティを使用して、グリッド全体のコンテンツの配置方法を設定します。

```css
.container {
  display: grid;
  justify-content: center;
  align-content: center;
}
```

## 8. 実際の例

以下は、すべての基本プロパティを使用した例です：

```html
<div class="container">
  <div class="item1">Header</div>
  <div class="item2">Sidebar</div>
  <div class="item3">Content</div>
  <div class="item4">Footer</div>
</div>
```

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
  grid-gap: 10px;
  justify-items: stretch;
  align-items: stretch;
}

.item1 {
  grid-area: header;
}
.item2 {
  grid-area: sidebar;
}
.item3 {
  grid-area: content;
}
.item4 {
  grid-area: footer;
}
```

この設定では、グリッドは 2 列で構成され、各エリアにアイテムが配置されています。アイテム間の間隔や配置も設定されています。
