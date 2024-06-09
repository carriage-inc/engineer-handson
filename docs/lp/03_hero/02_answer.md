---
sidebar_label: "解答"
id: answer
title: 解答：ヒーローセクションの実装
description: ヒーローセクションの実装課題解答
---

### HTML

```html
<section class="hero">
  <div class="hero-content">
    <h1>世界をシェアしよう</h1>
    <h2>あなたの冒険が、誰かのインスピレーションに。</h2>
    <button>旅の記録を開始する</button>
  </div>
</section>
```

### CSS

```css
.hero {
  background-image: url("hero-bg.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
}

.hero-content h1 {
  font-size: 3em;
  margin-bottom: 0.5em;
}

.hero-content h2 {
  font-size: 1.5em;
  margin-bottom: 1em;
}

.hero-content button {
  padding: 0.5em 1em;
  font-size: 1em;
  background-color: #ff6600;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.hero-content button:hover {
  background-color: #e55a00;
}
```

### 実装のポイント

1. **背景画像の設定**:

   - CSS の`background-image`プロパティを使って、セクションに背景画像を設定します。
   - 画像がセクション全体をカバーするように`background-size: cover;`を使用します。

2. **中央揃えのレイアウト**:

   - セクション内のコンテンツを中央に揃えるために、CSS の`flex`を使用します。
   - `justify-content: center;`と`align-items: center;`を使って、水平・垂直方向の中央揃えを実現します。

3. **テキストのスタイリング**:

   - キャッチフレーズは`<h1>`タグ、サブタイトルは`<h2>`タグを使って大きな文字で表示します。
   - テキストの色は白に設定し、読みやすくします。

4. **ボタンのスタイリング**:
   - ボタンは`<button>`タグを使用し、CSS で背景色、文字色、パディング、ボーダーなどを設定します。
   - ホバー時に色が変わるように、`hover`のスタイルを追加します。
