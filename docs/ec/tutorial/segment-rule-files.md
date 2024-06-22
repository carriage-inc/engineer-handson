---
title: Segment の規約ファイル
description: Segment の規約ファイルの説明
---

`Segment`のディレクトリには、`page.tsx`と`layout.tsx`というファイルの他にも、下記のような名前の決められた規約ファイルを配置できます。

- `loading.tsx`
- `not-found.tsx`
- `error.tsx`
- `route.tsx`
- `template.tsx`
- `default.tsx`

このコースでは、`loading.tsx`、`not-found.tsx`、`error.tsx`のみを扱います。
他のファイルについては、一通りコースが終わった後に一つずつ押さえていけば良いでしょう。

## `loading.tsx`

`loading.tsx`は、データの取得中に表示するコンポーネントを定義するファイルです。

一般的に API からデータを取得するには時間がかかります。その間にユーザーには何かしらのフィードバックを表示する必要があります。

前の章で、`profile/settings`ページに API 取得のコードを書いたので、`loading.tsx`を追加して挙動を確認してみましょう。

```tsx title="src/app/profile/settings/loading.tsx"
export default function SettingsLoading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <h1>データ取得中...</h1>
    </div>
  );
}
```

キャッシュを無効にしたいので、`fetch`の第二引数に`cache: "no-cache"`を指定してください。

```tsx title="src/app/profile/settings/page.tsx"
async function getData(): Promise<DogPicture> {
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    // highlight-next-line
    cache: "no-cache",
  });
  return res.json();
}
```

リロードすると、犬の画像が表示される前に「データ取得中...」と表示されることが確認できます。

このように、`loading.tsx`を使うことで、データ取得中に表示する画面を簡単に作成することができます。

## `not-found.tsx`

`not-found.tsx`は、ページが見つからなかった場合に表示するコンポーネントを定義するファイルです。

`profile/[id]`ディレクトリに `not-found.tsx`を作成し、以下のコードを追加してください。

```tsx title="src/app/profile/settings/not-found.tsx"
export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center">
      <h1>404：指定のidは存在しません。</h1>
    </div>
  );
}
```

`not found`を表示するためには、`page.tsx`から `notFound`関数を呼ぶ必要があります。
`profile/[id]/page.tsx`に以下のコードを追加してください。

```tsx title="src/app/profile/[id]/page.tsx"
// highlight-next-line
import { notFound } from "next";

type Props = {
  params: {
    id: string;
  };
};

export default function Profile({ params }: Props) {
  // highlight-start
  // 0の場合は not found を表示
  if (params.id === "0") {
    notFound();
  }
  // highlight-end

  return <h1>プロフィールページ: {params.id}</h1>;
}
```

http://localhost:3000/profile/0 にアクセスすると、`404：指定のidは存在しません。`と表示されることが確認できます。

## `error.tsx`

`error.tsx`は、エラーが発生した場合に表示するコンポーネントを定義するファイルです。

`profile/settings`ページにエラーを発生させるために、`fetch`の URL を間違ったものに変更してください。

```tsx title="src/app/profile/settings/page.tsx"
async function getData(): Promise<DogPicture> {
  // highlight-next-line
  const res = await fetch("https://dog.ceo/api/breeds/image/random2", {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("エラーが発生しました");
  }

  return res.json();
}
```

そして、`profile/settings`ディレクトリに `error.tsx`を作成し、以下のコードを追加してください。

```tsx title="src/app/profile/settings/error.tsx"
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h1>エラー</h1>
      <pre>{error.message}</pre>
      <button onClick={reset}>リロード</button>
    </div>
  );
}
```

`error.tsx`は他のファイルと違い、`"use client"`を記述して、`Client Component`として定義する必要があります。引数の型定義が少し複雑になっていますが、基本的にはコピペしてそのまま使えば大丈夫です。

http://localhost:3000/profile/settings にアクセスすると、`エラー`と表示され、`リロード`ボタンが表示されることが確認できます。
