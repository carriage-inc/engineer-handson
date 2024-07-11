---
slug: github-pull-request
title: 【GitHub】ブランチの作成からプルリクエストまでの手順
date: 2024-07-11T12:00 # TODO: 後で修正
authors: [inoue]
tags: [Git]
---

新しく Git で管理を始めた時は main ブランチしかありませんが、今後機能追加を行なっていく際には、機能の単位で新しくブランチを作成して作業を行います。そして、作業が完了したら、main ブランチに向けてプルリクエストを作成し、レビューを経て main ブランチにマージします。

この記事では、ブランチを新しく作成して、プルリクエストを作成・マージする流れを解説します。

## ブランチの作成

まずは、新しくブランチを作成します。ここでは、`feature/sample-feature` という名前で作成しますが、実際は作業内容が分かりやすいように命名すると良いでしょう。
VSCode でターミナルを開いて以下のコマンドを実行するか、左下の「main」をクリックしてブランチ名を入力して新しいブランチを作成します。

```bash
git checkout -b feature/sample-feature
```

## ファイルの変更

適当なファイルを開いて変更を加えます。ここでは、`README.md` を開いて変更を加えるとします。

```bash
echo "Hello, World!" >> README.md
```

VSCode の Source Control タブから変更をステージングし、適当なメッセージを入力してコミットします。

## ブランチをプッシュ

作成したブランチをリモートリポジトリにプッシュします。

```bash
git push origin feature/sample-feature
```
