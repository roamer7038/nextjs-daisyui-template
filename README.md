
# Next.js Web Application Template

このテンプレートは，以下のフレームワークおよびライブラリを使用して構築されています:

- **Next.js**: アプリケーションのルーティングとサーバサイドレンダリングを管理
- **TypeScript**: 型付けによるJavaScriptの拡張
- **Tailwind CSS**: 効率的なスタイル指定
- **DaisyUI**: Tailwind CSSに基づいたUIキット
- **Storybook**: UIコンポーネントのドキュメント化とテスト
- **ESLint**: JavaScriptとTypeScriptのコード品質とスタイルのチェック
- **Prettier**: コードフォーマットツール

## セットアップ

以下の手順で依存関係をインストールし，開発サーバを起動してください．

```bash
npm install
npm run dev
```

アプリケーションは[http://localhost:3000](http://localhost:3000)でブラウザからアクセス可能です．

## ビルド方法

以下のコマンドでアプリケーションをビルドし，本番環境用サーバを起動します．

```bash
npm run build
npm start
```

ビルド後，アプリケーションは[http://localhost:3000](http://localhost:3000)で確認できます．

## Dockerの使用

Dockerを使用してアプリケーションをコンテナ化する方法は以下の通りです．Dockerfileはアプリケーションの要件に応じて適宜編集してください．NEXT_PUBLICで始まる環境変数はビルド時に読み込まれるため，Dockerfileで明示的に設定する必要があります．

```bash
docker build -t nextjs-daisyui-template .
docker run -p 3000:3000 nextjs-daisyui-template
```

## Storybookの利用

以下のコマンドでStorybookを起動し，UIコンポーネントをブラウザで確認できます．

```bash
npm run storybook
```

Storybookは[http://localhost:6006](http://localhost:6006)でアクセス可能です．
このテンプレートではGitHub Actionsを使用してStorybookのビルドとGitHub Pagesへのデプロイを行っています．

## カスタマイズ

### ビルド設定

このテンプレートでは`next.config.js`でビルド設定を行っています．必要に応じて設定を変更してください．

```javascript
const nextConfig = {
  output: 'standalone',
  transpilePackages: ['react-daisyui'],
  reactStrictMode: true
};
```

デフォルトでは`standalone`モードでビルドされます．これはDockerイメージでアプリケーションを実行する場合に利用します．

静的ファイルとしてビルドする場合は`export`モードを使用してください．
いくつかの制約があるため，詳しくは[Next.jsの公式ドキュメント](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)を参照してください．

```javascript
const nextConfig = {
  output: 'export',
  transpilePackages: ['react-daisyui'],
  reactStrictMode: true
};
```

### フォーマット

このテンプレートではPreitterとESLintを使用してコードのフォーマットと品質チェックを行っています．必要に応じて設定を変更してください．

```json
{
  "singleQuote": true,
  "proseWrap": "always",
  "tabWidth": 2,
  "printWidth": 120,
  "useTabs": false,
  "trailingComma": "none",
  "bracketSpacing": true,
  "semi": true,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```