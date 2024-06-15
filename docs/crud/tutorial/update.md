---
sidebar_label: タスク更新機能の実装
title: タスク更新機能の実装
description: タスク更新機能の実装の説明
---

## 完成図

![alt text](../img/taskEdit.png)

## コントローラーの作成

タスク更新機能を実装するために、以下のコントローラーを作成します。

- Task/Edit/IndexController：タスク編集画面を返す
- Task/Edit/UpdateController：タスク更新処理を行う

### Edit/IndexController

まず、タスク編集画面を返す `Task/Edit/IndexController` を作成します。

```bash
sail artisan make:controller Task/Edit/IndexController --invokable
```

そして生成されたファイルを以下のように修正し、`view()` メソッドで`tasks.edit` ビューを返します。

```php title="app/Http/Controllers/Task/Edit/IndexController.php"
<?php

namespace App\Http\Controllers\Task\Edit;

use App\Http\Controllers\Controller;
use App\Models\Task;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, int $id)
    {
        $task = Task::find($id);
        return view('tasks.edit')->with('task', $task);
    }
}
```

task の ID はパスパラメータで受け取るため、`__invoke()` メソッドの引数に`$id`を追加しています。

`Task::find()` は、task テーブルから id が一致するレコードを取得するメソッドです。
取得したレコードの title をリクエストデータで更新し、`save()` メソッドで保存します。

### Edit/UpdateController

次に、フォームから送信されたリクエストデータを受け取ってタスク更新処理を行う `Task/Edit/UpdateController` を作成します。

```bash
sail artisan make:controller Task/Edit/UpdateController --invokable
```

また、リクエストをバリデーションするために、`Request` クラス継承した `TaskUpdateRequest` を作成します。

```bash
sail artisan make:request TaskUpdateRequest
```

そして生成されたファイルを以下のように修正し、`update()` メソッドでタスクを更新します。

```php title="app/Http/Requests/TaskUpdateRequest.php"
<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TaskUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
        ];
    }
}
```

Controller は以下のように実装します。

```php title="app/Http/Controllers/Task/Edit/UpdateController.php"
<?php

namespace App\Http\Controllers\Task\Edit;

use App\Http\Controllers\Controller;
use App\Http\Requests\TaskUpdateRequest;
use App\Models\Task;

class UpdateController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(TaskUpdateRequest $request, int $id)
    {
        $task = Task::find($id);
        $task->title = $request->title;
        $task->save();

        return redirect()->route('tasks.index');
    }
}
```

`Task::find()` で取得したレコードの title をリクエストデータで更新し、`save()` メソッドで保存します。

最後に、新規作成画面と同じく`redirect()->route('tasks.index')` でタスク一覧画面にリダイレクトします。

## View の作成

`resources/views/tasks/edit.blade.php` ファイルを作成します。

```bash
sail artisan make:view tasks/edit
```

そして、以下のようにフォームを作成します。

```php title="resources/views/tasks/edit.blade.php"
<x-layout>
    <h1 class="text-3xl">タスク編集</h1>

    <form method="POST" action="{{ route('tasks.update', ['id' => $task->id]) }}">
        @csrf
        @method('PUT')

        <div class="mt-4">
            <label for="title" class="block">タイトル</label>
            <input type="text" id="title" name="title" value="{{ old('title', $task->title) }}"
                class="w-full border px-3 py-2" />
        </div>

        @error('title')
            <div class="mt-2 text-red-500 text-sm">{{ $message }}</div>
        @enderror

        <div class="mt-4">
            <button type="submit">
                更新
            </button>
        </div>
    </form>
</x-layout>
```

form の method は、PUT メソッドをサポートしていないため、`@method('PUT')` で POST メソッドを PUT メソッドに変換しています。

:::tip
PUT と POST の違いは、冪等であるかどうかです。冪等とは、同じリクエストを何度実行しても同じ結果が得られることを指します。  
PUT は冪等ですが、POST は冪等ではありません。
:::

action には、task の id をパスパラメータで渡す必要があるため、route メソッドの第二引数に連想配列で渡しています。

編集画面なので、元の値（$task->title）を input タグの value 属性に設定しています。
`old()` ヘルパー関数は、フォームの再表示時に前回の入力値を保持するために使用します。
例えば、バリデーションエラーが発生した場合に、入力値を保持するために使用します。

## ルーティングの設定

最後に、ルーティングを設定します。

`routes/web.php` ファイルに以下を追記します。

```php title="routes/web.php"
Route::get('/tasks/{id}/edit', Task\Edit\IndexController::class)->name('tasks.edit'); // 編集画面表示
Route::put('/tasks/{id}', Task\Edit\UpdateController::class)->name('tasks.update'); // 更新処理
```

これでタスク更新機能の実装が完了しました。

タスク一覧画面から遷移できるようにしたいので、`resources/views/tasks/index.blade.php` ファイルを以下のように修正します。

```php title="resources/views/tasks/index.blade.php"
<tr>
    <td>{{ $task->id }}</td>
    <td>{{ $task->title }}</td>
    // 編集ボタンを追加
    <td>
        <a href="{{ route('tasks.edit', ['id' => $task->id]) }}">編集</a>
    </td>
</tr>
```

http://localhost/tasks にアクセスして、タスク一覧画面からタスク編集画面に遷移できるようになっていることを確認してください。
