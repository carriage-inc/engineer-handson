---
title: コンポーネントと Props
description: コンポーネントと Propsの説明
---

## React コンポーネント

Web の画面には、ヘッダーやサイドバー、カードなどの様々な UI 要素が使われています。フロントエンド開発ではそれらひとつひとつの要素をコンポーネントととらえ、組み合わせながら画面を構築していきます。

そして、React ではこのようなコンポーネントを簡単に作成することができます。

例えば、ヘッダーとフッターをコンポーネントとして定義して、それを組み合わせて画面を構築してみましょう。
React でコンポーネントを作るには、JavaScript の関数を使います。

まずは Header コンポーネントです。

```html title="index.html"
<script type="text/jsx">
  // highlight-start
  function Header() {
    return <h1>Header Title</h1>;
  }
  // highlight-end
</script>
```

React コンポーネントを定義する際のルールは以下の通りなので、覚えておきましょう。

- 関数名は大文字で始める
- 戻り値として JSX を返す

それでは、次に Footer コンポーネントを定義します。

```html title="index.html"
<script type="text/jsx">
  function Header() {
    return <h1>Header Title</h1>;
  }

  // highlight-start
  function Footer() {
    return <footer>Footer</footer>;
  }
  // highlight-end
</script>
```

そして、これらのコンポーネントは、html タグのように `<Header />`や`<Footer />`というふうに記述して使うことができます。

```html title="index.html"
<script type="text/jsx">
  function Header() {
    return <h1>Header Title</h1>;
  }

  function Footer() {
    return <footer>Footer</footer>;
  }

  // highlight-start
  const app = document.getElementById("app");
  const root = ReactDOM.createRoot(app);

  root.render(
    <div>
      <Header />
      <div>Main Content</div>
      <Footer />
    </div>
  );
  // highlight-end
</script>
```

このように、React を使えば宣言的な記述でコンポーネントを組み合わせて画面を構築することができます。

## Props

コンポーネントを使う際に、何らかの値を渡すことができます。これを Props といいます。

Props は通常、親コンポーネントから子コンポーネントに渡されます。

例えば、Header コンポーネントにタイトルを渡せるようにしてみましょう。

```html title="index.html"
<script type="text/jsx">
  // highlight-start
  function Header(props) {
    return <h1>{props.title}</h1>;
  // highlight-end
  }

  function Footer() {
    return <footer>Footer</footer>;
  }

  const app = document.getElementById("app");
  const root = ReactDOM.createRoot(app);

  root.render(
    <div>
      // highlight-next-line
      <Header title="Header Title" />
      <div>Main Content</div>
      <Footer />
    </div>
  );
</script>
```

受け取りたい props を関数の引数とし、`{props.title}`のようにして値を表示することができます。
`{}`に囲まれた部分は JavaScript の式として評価されるため、変数や関数を使うことができます。

また、props は上記のような受け取り方の他に、分割代入を使って受け取ることもできます。

```javascript title="index.html"
function Header({ title }) {
  return <h1>{title}</h1>;
}
```

複数の値を受け取る場合は、以下のように書くことができます。

```javascript title="index.html"
// highlight-start
function Header({ title, color }) {
  return <h1 style={{ color: color }}>{title}</h1>;
  // highlight-end
}

// 省略

// highlight-next-line
<Header title="Header Title" color="red" />;
```

このように、Props を使うことで、複数のパターンのコンポーネントを引数によって生成することができます。

## 配列でコンポーネントを生成

配列に対して map メソッドを使うことで、複数のコンポーネントを生成することができます。

例えば、以下のようにして、複数のリストアイテムを生成することができます。

```javascript title="index.html"
function List() {
  const items = ["item1", "item2", "item3"];

  return (
    <ul>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
}

const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);

root.render(<List />);
```

map メソッドの書き方は少し難しいかもしれませんが、商品一覧ページなど Web ではコンポーネントを繰り返し生成することがよくありますので、覚えておきましょう。

## 三項演算子でコンポーネントを出しわけ

三項演算子を使うことで、条件によってコンポーネントを出しわけることができます。

例えば、以下のようにして、条件によって表示するコンポーネントを変えることができます。

```javascript title="index.html"
function Message() {
  const isLoggedIn = true;

  return <div>{isLoggedIn ? <p>Welcome!</p> : <p>Please log in</p>}</div>;
}

const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);

root.render(<Message />);
```

この例のようにログイン状況によって表示を変えたりすることはよくあるので、この書き方もしっかり押さえておきましょう。
