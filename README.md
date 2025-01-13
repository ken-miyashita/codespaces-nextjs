# README.md

# My Next.js App

このプロジェクトは、Next.jsをバックエンドに使用し、TypeScriptとReactを用いたユーザー登録、編集、削除機能を持つWebアプリケーションです。

## 概要

このアプリケーションは、ユーザーの登録、情報の編集、削除を行うためのインターフェースを提供します。ユーザーは名前、メールアドレス、セール番号を入力して新しいアカウントを作成し、登録されたユーザーの一覧を表示することができます。

## セットアップ手順

1. リポジトリをクローンします。

   ```bash
   git clone <repository-url>
   ```

2. プロジェクトディレクトリに移動します。

   ```bash
   cd my-nextjs-app
   ```

3. 依存関係をインストールします。

   ```bash
   npm install
   ```

4. 開発サーバーを起動します。

   ```bash
   npm run dev
   ```

5. ブラウザで `http://localhost:3000` にアクセスします。

## 使用方法

- **ユーザー登録**: `/users/create` ページに移動し、フォームに必要な情報を入力して登録ボタンを押します。
- **ユーザー一覧**: ホームページに移動すると、登録されたユーザーの一覧が表示されます。
- **ユーザー編集**: `/users/edit` ページに移動し、特定のユーザー情報を編集できます。
- **ユーザー削除**: ユーザー一覧から削除ボタンを押すことで、特定のユーザーを削除できます。

## ファイル構成

- `src/components/UserForm.tsx`: ユーザー登録フォームコンポーネント
- `src/components/UserList.tsx`: 登録されたユーザー情報の一覧を表示するコンポーネント
- `src/pages/api/users/[id].ts`: 特定のユーザー情報を取得、編集、削除するAPIエンドポイント
- `src/pages/api/users/index.ts`: ユーザーの登録や一覧取得を行うAPIエンドポイント
- `src/pages/_app.tsx`: アプリケーション全体の設定
- `src/pages/_document.tsx`: HTMLドキュメントのカスタマイズ
- `src/pages/index.tsx`: アプリケーションのホームページ
- `src/pages/users/create.tsx`: ユーザー登録ページ
- `src/pages/users/edit.tsx`: ユーザー情報編集ページ
- `src/pages/users/[id].tsx`: 特定のユーザー情報を表示するページ
- `src/styles/globals.css`: グローバルスタイル
- `src/styles/Home.module.css`: ホームページ専用スタイル
- `src/types/index.ts`: TypeScriptの型定義

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。