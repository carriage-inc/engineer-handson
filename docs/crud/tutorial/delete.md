---
sidebar_label: タスク削除機能の実装
title: タスク削除機能の実装
description: タスク削除機能の実装の説明
---

## コントローラーの作成

タスク削除機能を実装するために、以下のコントローラーを作成します。

- Task/Delete/DestroyController：タスク削除処理を行う

### Delete/DestroyController

タスク削除処理を行う `Task/Delete/DestroyController` を作成します。

```bash
sail artisan make:controller Task/Delete/DestroyController --invokable
```

そして生成されたファイルを以下のように修正し、`delete()` メソッドでタスクを削除します。

```php title="app/Http/Controllers/Task/Delete/DestroyController.php"
<?php

namespace App\Http\Controllers\Task\Delete;

use App\Http\Controllers\Controller;
use App\Models\Task;

class DestroyController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(int $id)
    {
        $task = Task::find($id);
        $task->delete();

        return redirect()->route('tasks.index');
    }
}

```

`Task::find()` で取得したレコードを `delete()` メソッドで削除し、`redirect()` メソッドでタスク一覧画面にリダイレクトします。

### ルーティング

`routes/web.php` に以下のルーティングを追加します。

```php title="routes/web.php"
Route::delete('/tasks/{id}', Task\Delete\DestroyController::class)->name('tasks.destroy');
```

`Route::delete()` で DELETE メソッドのルーティングを定義し、`name()` メソッドで名前付きルートを設定します。

### ビューの修正

`resources/views/tasks/index.blade.php` を以下のように修正します。

```php title="resources/views/tasks/index.blade.php"
@foreach ($tasks as $task)
    <tr>
        <td>{{ $task->id }}</td>
        <td>{{ $task->title }}</td>
        <td>
            <a href="{{ route('tasks.edit', ['id' => $task->id]) }}">編集</a>
        </td>
        <td>
            <form method="POST" action="{{ route('tasks.destroy', ['id' => $task->id]) }}">
                @csrf
                @method('DELETE')
                <button type="submit">削除</button>
            </form>
        </td>
    </tr>
@endforeach
```

form の method は、DELETE メソッドをサポートしていないため、`@method('DELETE')` で POST メソッドを DELETE メソッドに変換しています。

以上で、タスク削除機能の実装が完了しました。
http://localhost/tasks にアクセスして、タスクの削除ができることを確誽してみましょう。
