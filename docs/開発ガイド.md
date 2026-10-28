# 開発ガイド

## 起動

Node.js 20.19 以上、または 22.12 以上を使用します。

```sh
npm ci
npm run dev
```

表示された URL をブラウザで開きます。`dev` と `preview` は全ネットワークインターフェースで待ち受ける設定なので、信頼できる開発環境で起動してください。遊び方は [README](../README.md) を参照してください。

## ビルドと確認

```sh
npm run build
npm run preview
```

`build` は TypeScript の型確認、Vite による `dist/` の生成、第三者ライセンス告知の検証を順に行います。`dist/` は生成物であり、コミットしません。`package.json` に自動テスト用のコマンドはありません。GitHub Actions はプルリクエストと `main` の更新時に `npm ci` と `npm run build` を実行し、`main` の成果物を Pages に配信します。

変更後はブラウザで、開始・タップ／Space／Enter の入力、音のオン／オフ、画面を離れた際の停止、結果画面、PNG の保存・共有を確認してください。小画面と「視差効果を減らす」設定でも表示を確かめてください。端末固有の音の遅延や共有機能は、必要に応じて実機で確認します。

## コードの構成

- `index.html` と `src/style.css`：画面の要素と表示。
- `src/main.ts`：入力、Web Audio、進行状態、描画、結果画面を統合。
- `src/journey.ts`：拍の時間軸、領域、入力判定に使う時間幅。
- `src/field.ts`、`src/transition.ts`、`src/character.ts` など：世界・道・人物・演出の描画。
- `src/share.ts` と `src/result-time.ts`：結果画像と時刻の生成、保存・共有。
- `public/`：画像、フォント、第三者ライセンス告知。
- `tools/verify-notices.mjs`：ビルド成果物に告知が残ることの確認。

## 変更時の注意

拍の長さや判定幅を変える場合は、`src/journey.ts` と `src/main.ts` の進行・音・入力判定を合わせて確認します。結果画像の変更では、共有対応ブラウザと PNG 保存への切替を確認します。`public/THIRD_PARTY_NOTICES.txt` は Vite 設定で公開 JavaScript にも組み込まれ、ビルド時に検査されます。告知とリンクを維持してください。
