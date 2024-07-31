---
title: 課題の概要
description: CRUDサイト課題の概要
---

映画鑑賞記録ができる架空サービス「CinemaLog」を、PHP の Web フレームワークである Laravel を使って作成しましょう。

## デザイン

デザインは以下に示す Figma ファイルを参考にしてください。

[デザインファイルのリンク](https://www.figma.com/design/8ywrAB97pUmUCnDFkDZSNx/%E3%80%90%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%8B%E3%82%A2%E9%A4%8A%E6%88%90%E3%80%91CRUD%E3%82%B5%E3%82%A4%E3%83%88?node-id=144-36&t=DMI83Yq2AVUlhRNj-1)

<iframe width="100%" height="650" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F8ywrAB97pUmUCnDFkDZSNx%2F%25E3%2580%2590%25E3%2582%25A8%25E3%2583%25B3%25E3%2582%25B8%25E3%2583%258B%25E3%2582%25A2%25E9%25A4%258A%25E6%2588%2590%25E3%2580%2591CRUD%25E3%2582%25B5%25E3%2582%25A4%25E3%2583%2588%3Fnode-id%3D181-57%26t%3DL0LzY9denj0Jed0r-1%26scaling%3Dscale-down%26page-id%3D144%253A36%26starting-point-node-id%3D181%253A57" allowfullscreen></iframe>

## 手順

以下のステップに従って、CRUD サイトを作成していきましょう。

1. [DB 設計](db-design.md)
2. [マイグレーション・シーディング・モデル作成](migration.md)
3. [URL 構成設計](url-design.md)
4. [Breeze 導入、空のコントローラー・ビュー作成、ルーティング設定](preparation.md)
5. コンポーネント作成
   - [コンポーネント作成 ①](component1.md)
   - [コンポーネント作成 ②](component2.md)
6. [リスト画面実装](list.md)
7. [詳細画面実装](detail.md)
8. [登録画面実装](create.md)
9. [編集画面実装](edit.md)
10. [トップ画面、登録・ログイン画面実装](top.md)

## 必要ファイルのダウンロード

以下のリンクから、課題で使用する画像をダウンロードしてください。

[zip ファイルダウンロード](../../../static/downloads/cinemalog_images.zip)

アイコンなどのリソースは、Figma ファイルの export 機能を使ってもダウンロードできます。

## 提出方法

1. 作業用の Github リポジトリを作成し、課題を実装してください。
2. 設計課題の場合は、それぞれの課題ごとの提出方法に従ってください。
3. 実装課題の場合は、プルリクエストを作ってコードレビューを依頼してください。
