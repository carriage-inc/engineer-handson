---
title: React の状態管理
description: React の状態管理の説明
---

## React の状態管理

### useState 関数

ライクボタンやカウンターなど、ユーザーの操作によって画面の表示が変わる UI では、状態を管理する必要があります。

React では、コンポーネントの状態を管理するために、`useState` という関数を使います。
use で始まる関数は、React Hooks と呼ばれる機能で、React ライブラリで提供されています。

`useState` 関数は、コンポーネントの状態を保持するための変数と、その状態を更新するための関数を返します。
どういうことか、具体例を見てみましょう。

```jsx title="index.jsx"
<html>
  <body>
    <div id="app"></div>
    <!-- React のライブラリをCDNで読み込む -->
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <!-- Babel のライブラリをCDNで読み込む -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <!-- text/jsxを指定 -->
    <script type="text/jsx">
      function LikeButton() {
        // useState 関数を使って likeCount という状態を定義
        const [likeCount, setLikeCount] = React.useState(0);

        return (
          <button>Like</button>
        );
      }

      const app = document.getElementById("app");
      const root = ReactDOM.createRoot(app);

      root.render(<LikeButton />);
    </script>
  </body>
</html>
```

```jsx
const [likeCount, setLikeCount] = React.useState(0);
```

このコードは、`useState` 関数を使って、`likeCount` という状態変数を定義しています。
`useState` 関数の引数には、状態の初期値を渡します。この場合は、`0` が初期値となります。

`useState` 関数の戻り値は二つあり、二つ目の戻り値は`likeCount`という状態変数を更新するための関数で、`setLikeCount` という名前で定義しました。
命名は自由ですが、`set{状態変数名}` という名前を使うのが慣習になっています。

`LikeButton` コンポーネントの中で、`likeCount` と `setLikeCount` を使って、ボタンがクリックされたときに `likeCount` の値を更新するようにしてみましょう。

```jsx title="index.jsx"
function LikeButton() {
  const [likeCount, setLikeCount] = React.useState(0);

  const handleClick = () => {
    setLikeCount(likeCount + 1);
  };

  return <button onClick={handleClick}>Like {likeCount}</button>;
}
```

button のクリックイベントのハンドラーとして、`handleClick` 関数を定義しました。
その中で、`setLikeCount` 関数を使って、`likeCount` の値を 1 増やしています。

実際にボタンをクリックしてみると、ボタンに `Like {likeCount}` と表示され、ボタンをクリックするたびに `likeCount` の値が増えていくことが確認できるでしょう。

このように、`useState` 関数を使うことで、コンポーネントの状態を管理することができます。

### useEffect 関数

React のコンポーネントは、画面の表示を更新するたびに再描画されます。

`useEffect` 関数は、コンポーネントがマウントされたときや、状態が更新されたときなど、コンポーネントのライフサイクルに応じて処理を実行するための関数です。

`useEffect` 関数は、第一引数にコールバック関数を受け取ります。
このコールバック関数は、コンポーネントが再描画されるたびに実行されます。

`useEffect` 関数の第二引数には、依存する状態の配列を渡します。
この配列に指定した状態が変更されたときだけ、コールバック関数が実行されます。

具体例を見てみましょう。

```jsx title="index.jsx"
function Timer() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const timerId = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [count]);

  return <div>{count}</div>;
}
```

このコードは、`Timer` コンポーネントを定義しています。

`useEffect` 関数のコールバック関数は以下の部分になります。

```jsx
() => {
  const timerId = setInterval(() => {
    setCount(count + 1);
  }, 1000);

  return () => {
    clearInterval(timerId);
  };
};
```

ここでは、`setInterval` 関数を使って、1 秒ごとに `count` の値を更新するよにしています。

`useEffect` 関数の第二引数には、`[count]` という配列を渡しています。この`count` の値が変更されるたびに、`useEffect` 関数のコールバック関数が実行されます。
つまり、`count` の値が変更されるたびに、interval が再設定され、`count` の値が 1 ずつ増えていくことになります。

また、`return` でコールバック関数を返すことで、コンポーネントがアンマウントされたときにクリーンアップ処理を行うことができます。
アンマウントとは、コンポーネントが画面から削除されることを意味し、例えば条件分岐の結果表示されなくなったり、別の画面に遷移したりするときに発生します。

この例では、`clearInterval` 関数を使って、`setInterval` 関数で登録したタイマーを解除しています。これを行わないと、コンポーネントが削除された後もタイマーが動き続けてしまい、パフォーマンスの問題が発生する可能性があります。

また第二引数に何も指定しない場合、コンポーネントがマウントされたときに一度だけコールバック関数が実行されます。
そのため、コンポーネントを初期化した際に実行したい処理を記述するために使うことができます。

### useContext 関数

`useContext` 関数は、React のコンテキストを使って、コンポーネント間でデータを共有するための関数です。

コンテキストは、React のコンポーネントツリー全体で共有されるデータを扱うための仕組みで、親から子以外の関係のコンポーネント間でデータを共有するために使われます。

具体例を見てみましょう。

```jsx title="index.jsx"
// 1. コンテキストを作成
const MyContext = React.createContext();

// 2. コンテキストを提供するプロバイダーコンポーネントを作成
const MyProvider = ({ children }) => {
  const [value, setValue] = React.useState("Hello from context!");

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

// 3. コンテキストを使用するコンポーネントを作成
const DisplayComponent = () => {
  const { value } = React.useContext(MyContext);
  return <h1>{value}</h1>;
};

const UpdateComponent = () => {
  const { setValue } = React.useContext(MyContext);
  return (
    <button onClick={() => setValue("Updated context value!")}>
      Update Context
    </button>
  );
};

const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);

root.render(
  <MyProvider>
    <DisplayComponent />
    <UpdateComponent />
  </MyProvider>
);
```

`useContext`の使い方の手順は以下の通りです。

1. コンテキストを作成する

```jsx
const MyContext = React.createContext();
```

`React.createContext()` でコンテキストを作成します。今回は `MyContext` という名前で作成しましたが、実際には共有したいデータに応じて名前をつけることができます。

2. コンテキストを提供するプロバイダーコンポーネントを作成する

```jsx
const MyProvider = ({ children }) => {
  const [value, setValue] = React.useState("Hello from context!");

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};
```

`MyProvider` という名前のプロバイダーコンポーネントを作成し、`MyContext.Provider` コンポーネントで提供したいデータを渡します。
今回は、`value` と `setValue` という状態変数を提供しています。

3. コンテキストを使用するコンポーネントを作成する

```jsx
const DisplayComponent = () => {
  const { value } = React.useContext(MyContext);
  return <h1>{value}</h1>;
};

const UpdateComponent = () => {
  const { setValue } = React.useContext(MyContext);
  return (
    <button onClick={() => setValue("Updated context value!")}>
      Update Context
    </button>
  );
};
```

`useContext` 関数を使って、`MyContext` で提供されたデータを取得しています。

`DisplayComponent` コンポーネントでは、コンテキストから`value` を取得して表示しています。

`UpdateComponent` コンポーネントでは、コンテキストから `setValue` を取得して、ボタンがクリックされたときにコンテキストの値を更新するようにしています。

この例では`DisplayComponent` と `UpdateComponent` コンポーネントは同じ階層にある、いわば兄弟コンポーネントですが、`MyProvider` コンポーネントで提供されたコンテキストを使ってデータを共有できています。

実際のアプリケーションでは、例えば認証状態など複数の画面やコンポーネントで共有したいデータがある場合にコンテキストを使うので、押さえておいてください。
