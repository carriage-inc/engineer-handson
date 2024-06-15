---
sidebar_label: マイグレーションと シーディング
title: マイグレーションと シーディング
description: マイグレーションと シーディング の方法の説明
---

Web アプリケーションを開発する場合、LP などの静的なサイトとは違い、ユーザー情報や商品情報などのデータを保存したり、取得したりする必要があります。

そのため、データベースを使ってデータの保存や取得を行うことが一般的です。

データベースを使う際には、データを格納するためのテーブルを作成したり、初期データを投入したりする必要があります。

Laravel では、テーブルを作成するための`マイグレーション`と、初期データを投入するための`シーディング`という機能を提供しています。

## マイグレーション

マイグレーションは、データベースのテーブルを作成・変更するための仕組みです。

マイグレーション機能を使うことで、データベースのテーブルをコードで管理することができます。（**※重要**）

:::warning
マイグレーション機能を使わずに mysql コマンドなどで直接テーブルを作成すると、データベースのテーブルの状態とコードの状態が一致しなくなり、テーブル管理が困難になります。必ずマイグレーション機能を使ってテーブルを作成・変更してください。
:::

### マイグレーションファイルの作成

マイグレーションファイルは、`sail artisan make:migration` コマンドで作成します。

今回は、TODO アプリケーションで使用する `tasks` テーブルを作成するマイグレーションファイルを作成します。

```bash
sail artisan make:migration create_tasks_table
```

`database/migrations` ディレクトリに `create_tasks_table` という名前のマイグレーションファイルが作成されます。

### マイグレーションファイルの編集

作成したマイグレーションファイルを編集して、テーブルのカラムを定義します。

`create_tasks_table` マイグレーションファイルを以下のように編集します。

```php title="database/migrations/yyyy_mm_dd_create_tasks_table.php"
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};

```

`up` メソッドはマイグレーションの際に実行され、`down` メソッドはマイグレーションをロールバック（やり直し）する際に実行されます。  
そのため、`down` メソッドには、`up` メソッドの処理と逆の処理を記述します。

### マイグレーションの実行

続いて、上記で記述したファイルを元に実際にマイグレーションを実行します。
この操作によって、データベース内に `tasks` テーブルが作成されます。

先にデータベースの中を確認しておきましょう。

```bash
sail mysql

mysql> show databases;
```

結果は以下のようになります。

```bash
+--------------------+
| Database           |
+--------------------+
| information_schema |
| laravel            |
| performance_schema |
| testing            |
+--------------------+
4 rows in set (0.02 sec)
```

`laravel` というデータベースが、アプリケーションで使用するデータベースです。

データベースの中のテーブルを確認してみましょう。

```bash
mysql> use laravel;
mysql> show tables;
```

結果は以下のようになります。

```bash
+-------------------+
| Tables_in_laravel |
+-------------------+
| migrations        |
+-------------------+
1 row in set (0.00 sec)
```

`migrations` というテーブルが存在していますが、`tasks` テーブルは存在していません。

では、一度 mysql を抜けて、マイグレーションを実行しましょう。

```bash
mysql> exit;
```

```bash
sail artisan migrate
```

マイグレーションが正常に行われた旨のメッセージが表示されるはずです。

再度 mysql に入り、テーブルが作成されているか確認してみましょう。

```bash
sail mysql

mysql> show tables;
```

結果は以下のようになります。

```bash
+-----------------------+
| Tables_in_laravel     |
+-----------------------+
| cache                 |
| cache_locks           |
| failed_jobs           |
| job_batches           |
| jobs                  |
| migrations            |
| password_reset_tokens |
| sessions              |
| tasks                 |
| users                 |
+-----------------------+
10 rows in set (0.00 sec)
```

`tasks` テーブルが作成されていることが確認できました。

:::note
他にもデフォルトで用意されているマイグレーションファイルから、いくつかのテーブルが作成されていることが確認できます。  
これらは、Laravel の認証機能やキュー機能などで使用されるテーブルです。
:::

## シーディング

シーディングは、データベースに初期データを投入するための仕組みです。  
シーダーというクラスを使って、初期データをデータベースに投入します。

シーダーは必ず作る必要があるわけではありませんが、今回のようにタスクの作成機能よりも先に一覧表示機能を作成する場合は、シーダーを使って初期データを投入する必要があります。

その他にも商品カテゴリや性別などの固定のデータ（マスターデータと言います。）を投入する場合にもシーダーを使います。

### シーダーファイルの作成

シーダーファイルは、`sail artisan make:seeder` コマンドで作成します。

今回は、`tasks` テーブルに初期データを投入するシーダーファイルを作成します。

```bash
sail artisan make:seeder TaskSeeder
```

`database/seeders` ディレクトリに `TaskSeeder` という名前のシーダーファイルが作成されます。

### シーダーファイルの編集

作成したシーダーファイルを編集して、初期データを定義します。

`TaskSeeder` シーダーファイルを以下のように編集します。

```php title="database/seeders/TaskSeeder.php"
<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tasks')->insert([
            ['title' => 'タスク1'],
        ]);
    }
}
```

`run` メソッド内に初期データを定義します。

上記の例では、`tasks` テーブルに `タスク1` というタイトルのデータを投入しています。

次に、この Seeder を DatabaseSeeder.php に登録します。

```php title="database/seeders/DatabaseSeeder.php"
<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run()
    {
        $this->call(TaskSeeder::class);
    }
}
```

### シーディングの実行

続いて、上記で記述したファイルを元に実際にシーディングを実行します。

```bash
sail artisan db:seed
```

シーディングが正常に行われた旨のメッセージが表示されるはずです。

:::tip
上記のコマンドで、`DatabaseSeeder` クラスの `run` メソッドが実行されます。  
個別のシーダーを実行する場合は、`sail artisan db:seed --class=TaskSeeder` のように `--class` オプションを使って実行します。
:::

再度 mysql に入り、データが投入されているか確認してみましょう。

```bash
sail mysql

mysql> select * from tasks;
```

結果は以下のようになります。

```bash
+----+------------+------------+------------+
| id | title      | created_at | updated_at |
+----+------------+------------+------------+
|  1 | タスク1    | NULL       | NULL       |
+----+------------+------------+------------+
1 row in set (0.01 sec)
```

`tasks` テーブルに初期データが投入されていることが確認できました。

## Model

一度、[基本的な構造](/docs/crud/tutorial/about_laravel#基本的な構造)の図を見てみましょう。ここまでの作業は、`Database` にあたる部分を作成してきました。

次に、Database を操作するためのクラスである `Model` を作成します。`Model` は、データベースのテーブルと 1 対 1 で対応します。

### Model ファイルの作成

では、`tasks` テーブルに対応する `Task` Model ファイルを作成しましょう。以下のコマンドで作成します。

```bash
sail artisan make:model Task
```

`app/Models` ディレクトリに `Task.php` という名前の Model ファイルが作られるので、開きましょう。

```php title="app/Models/Task.php"
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;
}
```

HasFactory というトレイトが書かれているだけですが、これだけで Database へのデータの追加や取得が可能になります。

:::tip
これだけで動く理由は、Task が Model クラスを継承しているためです。
:::

### Factory ファイルの作成

`Model` が作成できたので、シーダーで使ってみることにしましょう。

仮のデータを大量に作るには、`Model` をそのまま使うのではなく、`Factory` というクラスを作って、そのクラスから `Model` のインスタンスを作成するのが一般的です。

`Factory`は日本語で「工場」という意味です。`Factory` が、`Model` のインスタンスを作成するための工場であるとイメージしてもらうと、理解しやすいかもしれません。

では、`Task` Model に対応する `TaskFactory` を作成しましょう。

```bash
sail artisan make:factory TaskFactory --model=Task
```

`database/factories` ディレクトリに `TaskFactory.php` という名前の Factory ファイルが作成されます。  
中身を以下のように編集します。

```php title="database/factories/TaskFactory.php"
<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence,
        ];
    }
}
```

faker というダミーデータを生成するためのライブラリを使って、`title` カラムにランダムな文章を入れるようにしています。

標準では faker は英語の文章になっているので、`config/app.php` の `faker_locale` を `ja_JP` に変更する必要があります。

`config/app.php` 内を `faker_locale` で検索すると、以下のようになっています。

```php title="config/app.php"
'faker_locale' => env('APP_FAKER_LOCALE', 'en_US'),
```

これは、.env ファイル内の `APP_FAKER_LOCALE` を使い、もし.env に設定されていない場合は `en_US` を使うという意味です。

`.env` ファイルを開いて、`APP_FAKER_LOCALE` の値を `ja_JP` に変更します。

```bash title=".env"
APP_FAKER_LOCALE=ja_JP
```

反映させるために、一度コンテナを再起動します。

```bash
sail down
sail up -d
```

### シーダーファイルの編集

最後に、`TaskSeeder` シーダーファイルを編集して、`TaskFactory` を使ってデータを投入します。

```php title="database/seeders/TaskSeeder.php"
namespace Database\Seeders;

use App\Models\Task; // 自動importで追加
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Task::factory(10)->create(); // 10 件のデータを作成
    }
}
```

`Task::factory(10)->create();` で、`TaskFactory` を使って 10 件のデーズを作成しています。

それでは、シーディングを実行してみましょう。

```bash
sail artisan db:seed
```

再度 mysql に入り、データが投入されているか確認してみましょう。

```bash
sail mysql

mysql> select * from tasks;
```

結果は以下のようになります。

```bash
+----+--------------------------------+------------+------------+
| id | title                          | created_at | updated_at |
+----+--------------------------------+------------+------------+
|  1 | タスク1                          | NULL       | NULL       |
|  2 | も下から出ていました...             | NULL       | NULL       |
|  3 | 終しじゅうにわらの礫こいでした。...     | NULL       | NULL       |
...
+----+--------------------------------+------------+------------+
1 row in set (0.01 sec)
```

以上で、初期データの投入は完了です。

次のステップでは、このデータを取得して表示する方法を説明します。

:::tip
マイグレーションやシーダー、モデルファイルをまとめて作成するコマンドも用意されています。
https://laravel.com/docs/11.x/eloquent#generating-model-classes
:::
