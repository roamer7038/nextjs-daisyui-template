# Next.js Web Application Template

以下のフレームワーク/ライブラリによって構成されている．

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- DaisyUI (Tailwind CSS Components)
  - [react-daisyUI](https://react.daisyui.com/?path=/docs/welcome--docs)
- Storybook
- ESLint
- Prettier

## Getting Started

#### 依存関係のインストール

依存関係をインストールする．可能な限り最新LTSのNode.jsを利用することを推奨する．

```bash
npm install
```

#### 開発サーバの起動

開発サーバを起動する．Next.jsの開発サーバが起動し，ファイルの変更を検知して自動的にリロードする．

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) をブラウザで開くと，アプリケーションが表示される． `app/page.tsx` を編集
することで，ページを編集することができる．

#### デプロイ

ソースコードをビルドする．`next.config.js`の設定`output: 'export'`に基づいて，静的ファイル（html, js）が`out`ディレクト
リに出力される．デプロイする際は，デプロイ先に`out`ディレクトリ配下のファイルを展開する．

```bash
npm run build
```

出力された静的ファイルを確認する．

```bash
npm run start
```

HTTPサーバが起動し，[http://localhost:3000](http://localhost:3000) でアプリケーションが表示される．

## Storybook

```bash
npm run dev:storybook # Storybookの開発サーバを起動
npm run build:storybook # Storybookの静的ビルド
npm run start:storybook # Storybookの静的ビルドを確認
```

[http://localhost:6006](http://localhost:6006) をブラウザで開くと，Storybook が表示される．

## Tips

- react-daisyuiがサーバコンポーネントに対応していない．
  - react-daisyuiを使う場合は`use client`が必須である．
  - サーバコンポーネントを使いたい場合は，Tailwind CSSやDaisyUIを直接利用する．
  - 本リポジトリは`next.config.js`の設定`output: 'export'`に基づいて静的ファイルを出力するため，サーバコンポーネントは利
    用できない．ただし，開発サーバ利用時にエラーを吐くため，`use client`は必須である．
- コード整形はPrettierによって行われる．
  - 必要に応じて`.prettierrc.json`を編集する．
- Nodeモジュールの無効化
  - `fs`や`dgram`などのNodeモジュールはブラウザで利用できない．
  - これらのモジュールを含むパッケージをインストールする場合は，`package.json`の`browser`フィールドに無効化するモジュー
    ルを指定する．
  - 例: `"browser": { "fs": false, "dgram": false }`
  - storybookの場合は`main.ts`に以下のような設定を追加する．
    ```typescript
    webpackFinal: (config) => {
      return {
        ...config,
        resolve: {
            ...config.resolve,
            fallback: {
            fs: false,
            dgram: false,
            },
          },
        },
    },
    ```
