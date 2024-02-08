# Next.js Web Application Template

以下のフレームワーク/ライブラリによって構成されている．

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- DaisyUI (Tailwind CSS Components)
- Storybook
- ESLint
- Prettier

## Getting Started

依存関係をインストールする．

```bash
npm install
```

開発サーバーを起動する．

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) をブラウザで開くと，アプリケーションが表示される．

`app/page.tsx` を編集することで，ページを編集することができる．

## Storybook

Storybook を起動します．

```bash
npm run storybook
```

[http://localhost:6006](http://localhost:6006) をブラウザで開くと，Storybook が表示される．

## 既知の問題

- react-daisyuiがサーバコンポーネントに対応していない．
  - react-daisyuiを使う場合は`use client`が必須である．
  - サーバコンポーネントを使いたい場合は，Tailwind CSSやDaisyUIを直接利用する．