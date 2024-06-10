---
sidebar_label: レスポンシブデザイン
title: レスポンシブデザイン
description: レスポンシブ対応の基本的な方法を説明します。
---

レスポンシブデザインは、異なるデバイスや画面サイズに応じてウェブサイトのレイアウトを調整する技術です。  
以下は、レスポンシブデザインを実現するための基本的な方法を詳しく説明します。

## 1. ビューポートの設定

ビューポートメタタグを使用して、ページがデバイスの幅に応じて適切にスケーリングされるようにします。これにより、デバイスに合わせたズームやレイアウト調整が可能になります。

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

- `width=device-width`: デバイスの幅に合わせてページの幅を設定します。
- `initial-scale=1.0`: ページの初期スケールを 1.0 に設定します。

## 2. メディアクエリの使用

メディアクエリを使用して、異なる画面サイズやデバイスに応じて CSS を適用します。これにより、特定の条件下でのみ適用されるスタイルを設定できます。

```css
/* デスクトップ用 */
body {
  background-color: lightblue;
}

@media (max-width: 768px) {
  /* タブレット用 */
  body {
    background-color: lightgreen;
  }
}

@media (max-width: 480px) {
  /* モバイル用 */
  body {
    background-color: lightcoral;
  }
}
```

- `@media (max-width: 768px)`: ブラウザの幅が 768px 以下の場合に適用されるスタイルを定義します。
- `@media (max-width: 480px)`: ブラウザの幅が 480px 以下の場合に適用されるスタイルを定義します。

## 3. フレキシブルグリッド

フレキシブルグリッドを使用して、コンテナの幅をパーセンテージで設定し、コンテンツが画面サイズに応じてリサイズされるようにします。Flexbox を使用してグリッドを作成し、アイテムが自動的にラップ（折り返し）されるようにします。

```css
.container {
  display: flex;
  flex-wrap: wrap;
}

.item {
  flex: 1 1 100%;
}

@media (min-width: 768px) {
  .item {
    flex: 1 1 48%;
  }
}

@media (min-width: 1024px) {
  .item {
    flex: 1 1 30%;
  }
}
```

- `flex: 1 1 100%`: アイテムの成長・縮小の割合と基準幅を設定します。ここでは、幅を 100%に設定しています。
- `@media (min-width: 768px)`: 幅が 768px 以上の場合に適用されるスタイルを定義します。

## 4. フレキシブルイメージ

画像をレスポンシブにするためには、CSS で最大幅を 100%に設定し、親要素の幅に合わせてリサイズされるようにします。

```css
img {
  max-width: 100%;
  height: auto;
}
```

- `max-width: 100%`: 画像の最大幅を 100%に設定し、親要素の幅を超えないようにします。
- `height: auto`: 画像の高さを自動調整し、アスペクト比を維持します。

## 5. レスポンシブユニットの使用

パーセンテージや`vw`（ビューポート幅）などのレスポンシブユニットを使用して、レイアウトを柔軟にします。

```css
.container {
  width: 90%;
  margin: 0 auto;
}

.item {
  padding: 2vw;
}
```

- `width: 90%`: コンテナの幅を親要素の 90%に設定します。
- `padding: 2vw`: アイテムのパディングをビューポート幅の 2%に設定します。

## 6. フレキシブルテキスト

レスポンシブなテキストサイズを設定するために、`vw`や`em`を使用します。これにより、テキストが画面サイズに応じてリサイズされます。

```css
h1 {
  font-size: 4vw;
}

p {
  font-size: 1.2em;
}
```

- `font-size: 4vw`: ヘッダーテキストのフォントサイズをビューポート幅の 4%に設定します。
- `font-size: 1.2em`: パラグラフテキストのフォントサイズを親要素の 1.2 倍に設定します。

## 7. 実際の例

以下は、上記の要素をすべて含むレスポンシブレイアウトの基本的な例です：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <title>Responsive Design Example</title>
  </head>
  <body>
    <div class="container">
      <div class="item">Item 1</div>
      <div class="item">Item 2</div>
      <div class="item">Item 3</div>
    </div>
  </body>
</html>
```

```css
body {
  font-family: Arial, sans-serif;
  background-color: lightblue;
}

.container {
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
}

.item {
  flex: 1 1 100%;
  padding: 2vw;
  background-color: white;
  margin: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

@media (min-width: 768px) {
  .item {
    flex: 1 1 48%;
  }
}

@media (min-width: 1024px) {
  .item {
    flex: 1 1 30%;
  }
}

img {
  max-width: 100%;
  height: auto;
}

h1 {
  font-size: 4vw;
}

p {
  font-size: 1.2em;
}
```

### PC での表示

PC では、コンテナは全体の 90%の幅を持ち、アイテムは 48%の幅を持ちます。アイテムは 2 列に並び、適度なスペースが確保されています。テキストサイズはビューポートの幅に応じて調整され、画像は親要素の幅に合わせてリサイズされます。

### スマホでの表示

スマホでは、コンテナは同様に全体の 90%の幅を持ちますが、アイテムは 100%の幅を持ち、1 列に並びます。これにより、コンテンツが狭い画面でも見やすくなります。テキストサイズと画像のリサイズは同様にビューポートの幅に応じて行われます。

この例では、Flexbox とメディアクエリを使用して、異なるデバイスに応じてレイアウトが調整されるようにしています。背景色やアイテムの幅が変更され、ユーザーがどのデバイスを使用しても最適な表示が提供されます。
