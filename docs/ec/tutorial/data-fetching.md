---
title: データフェッチング
description: データフェッチングの説明
---

Next.js のコンポーネントから API などにリクエストしてデータを取得する方法を学びます。

## fetch

Next.js v13 からは、`fetch`を使ってデータを取得することができます。
`fetch`は[ブラウザの標準関数](https://developer.mozilla.org/ja/docs/Web/API/fetch)を拡張して作られた関数で、データのキャッシュ周りの制御ができるようになっています。

`profile/settings/page.tsx`にデータを取得するコードを書いてみましょう。[Dog API](https://dog.ceo/dog-api/) というランダムな犬の画像を返す API を使います。

```tsx title="src/app/profile/settings/page.tsx"
type DogPicture = {
  message: string;
  status: string;
};

async function getData(): Promise<DogPicture> {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  return res.json();
}

export default async function Settings() {
  const data = await getData();

  return (
    <>
      <h1>設定ページ</h1>
      <img src={data.message} alt="犬の画像" />
    </>
  );
}
```

まず、`DogPicture`という型を定義しています。これは、`Dog API`が返すデータの型を表しています。

次に、`getData`という関数を定義しています。この関数は、`Dog API`からデータを取得するための関数です。`fetch`を使ってデータを取得し、`res.json()`で JSON 形式に変換しています。戻り値は`Promise<DogPicture>`型です。

最後に、`Settings`コンポーネントを修正しました。await を使う必要があるため、`async`関数に変更しています。`getData`関数を呼び出してデータを取得し、画像を表示しています。

ブラウザで、http://localhost:3000/profile/settings にアクセスしてみましょう。ランダムな犬の画像が表示されていることが確認できます。

:::note
前の章で profile を Router Group に変更している場合、http://localhost:3000/settings にアクセスするか、`(prifole)`ディレクトリを`profile`に変更してください。
:::

![alt text](../img/dataFetching.png)

## キャッシュの制御

### no-cache オプション

`fetch`はデフォルトではキャッシュを利用します。そのため、同じリクエストを複数回行うと、キャッシュされたデータが返されます。

試しにブラウザをリロードしてみてください。同じ画像が表示されることが確認できます。

この挙動は時に問題になることがあります。例えば、最新の投稿を取得するような API の場合、キャッシュされてしまうと古いデータが表示されてしまいます。

このような場合、`fetch`の第二引数に`cache: "no-cache"`を指定することで、キャッシュを無効にすることができます。

```tsx title="src/app/profile/settings/page.tsx"
async function getData(): Promise<DogPicture> {
  // highlight-start
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    cache: "no-cache",
  });
  // highlight-end
  return res.json();
}
```

ブラウザをリロードしてみてください。毎回異なる画像が表示されることが確認できます。

### キャッシュの有効期限

API への負荷を減らすために、ある程度の時間はキャッシュさせたいこともあるでしょう。

`fetch`の第二引数に`next: { revalidate }`オプションを指定することで、キャッシュの有効期限を設定することができます。

```tsx title="src/app/profile/settings/page.tsx"
async function getData(): Promise<DogPicture> {
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    // highlight-next-line
    next: { revalidate: 5 },
  });
  return res.json();
}
```

上記の例では、5 秒間キャッシュを有効にしています。5 秒以内に同じリクエストを行うと、キャッシュされたデータが返されます。5 秒以上経過すると、再度 API からデータを取得します。

ただし、５秒以上経過後にリロードしたタイミングではキャッシュされたデータが返されます。そのタイミングで裏側でデータ再取得が走り、次のリロード時に新しいデータが表示されます。一旦古いデータを返しておいて、裏側でデータを取得してキャッシュを更新しておくという挙動です。このようにすることで、ユーザーにリクエストの待ち時間を感じさせないようにすることができます。

このようなキャッシュの仕組みを、`Stale-While-Revalidate` と呼びます。
