---
sidebar_label: "解答"
id: answer
title: 解答：ヘッダーの実装
description: ヘッダーの実装課題解答
---

### HTML

```html
<header>
  <nav>
    <div class="logo">
      <a href="#">TripShare</a>
    </div>
    <ul class="nav-links">
      <li><a href="#features">機能</a></li>
      <li><a href="#voices">利用者の声</a></li>
      <li><a href="#inquiry">お問い合わせ</a></li>
      <li><a href="#start">旅の記録を開始する</a></li>
    </ul>
  </nav>
</header>
```

### CSS

```css
header {
  background-color: #fff;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo a {
  font-size: 1.5em;
  font-weight: bold;
  color: #333;
  text-decoration: none;
}

.nav-links {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin-left: 20px;
}

.nav-links a {
  color: #333;
  text-decoration: none;
  font-size: 1em;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #ff6600;
}
```

### 実装のポイント

1. **ロゴの表示**:

   - ロゴは`<a>`タグを使用し、ページのトップにリンクします。
   - ロゴは左上に配置します。

2. **ナビゲーションリンク**:

   - ナビゲーションリンクは`<a>`タグを使用し、リスト形式で表示します。
   - リンクを右上に配置し、横並びにします。

3. **固定位置**:

   - ヘッダーを固定位置にして、スクロールしても常に表示されるようにします。
   - CSS の`position: fixed;`を使用します。

4. **スタイルの一貫性**:
   - 他のセクションとデザインの一貫性を保つために、同じフォントやカラースキームを使用します。
