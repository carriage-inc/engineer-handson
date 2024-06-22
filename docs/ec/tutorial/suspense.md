---
title: Suspense
description: Suspenseの説明
---

前の章では、`loading.tsx`を使ってデータ取得中に表示する画面を作成しました。時には画面全体のローディング状態だけではなく、コンポーネントごとにローディング状態を表現したい場合もあります。そのような場合には、`Suspense`を使うことで簡単に実装することができます。

## Suspense

`Suspense`は、React 18 から導入された新しい機能です。`Suspense`を使うことで、非同期処理中にローディング画面を表示することができます。

`Suspense`を使うには、`React.Suspense`コンポーネントを使います。`React.Suspense`コンポーネントの中に、非同期処理を行うコンポーネントをラップします。

まずは、`src/app/profile/settings/page.tsx`で犬の画像の部分をコンポーネント化したいので、`profile`ディレクトリの下に`_components`ディレクトリを作成し、`dogPicture.tsx`というファイルを作成します。

そして、`dogPicture.tsx`に以下のコードを追加してください。

```tsx title="src/app/profile/settings/_components/dogPicture.tsx"
type DogPicture = {
  message: string;
  status: string;
};

async function getData(): Promise<DogPicture> {
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    cache: "no-cache",
  });

  return res.json();
}

export default async function DogPicture() {
  const data = await getData();

  return <img src={data.message} alt="犬の画像" />;
}
```

次に、`page.tsx`で`DogPicture`コンポーネントを使うように変更します。

```tsx title="src/app/profile/settings/page.tsx"
import DogPicture from "@/app/profile/_components/dogPicture";

export default function Settings() {
  return (
    <div>
      <h1>設定ページ</h1>
      <DogPicture />
    </div>
  );
}
```

そして、Suspense を import して、コンポーネントをラップします。

```tsx title="src/app/profile/settings/page.tsx"
import DogPicture from "@/app/profile/_components/dogPicture";
// highlight-next-line
import { Suspense } from "react";

export default function Settings() {
  return (
    <div>
      <h1>設定ページ</h1>
      // highlight-next-line
      <Suspense fallback={<div>ロード中...</div>}>
        <DogPicture />
        // highlight-next-line
      </Suspense>
    </div>
  );
}
```

fallback には、非同期処理中に表示するコンポーネントを指定します。ここでは、`div`タグで`ロード中...`と表示するようにしています。

http://localhost:3000/profile/settings にアクセスすると、犬の画像が表示される前に`ロード中...`と表示されていることが確認できます。

実際にはローディングスケルトンなどの、より洗練された表現を使うと良いでしょう。
