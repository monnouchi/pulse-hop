# PULSE HOP

タップでサイバー世界を渡るリズムゲーム。8拍の練習から、5つの領域・各60拍、約2分23秒の旅へ。コンボで世界の色や音が育ち、ミスしても最後まで遊べます。

[ブラウザで遊ぶ](https://monnouchi.github.io/pulse-hop/)

- 「音を出してはじめる」のあと、画面タップ・Space・Enterでジャンプ。本編は輪が重なる拍に合わせます。表拍成功後の裏拍では二段ジャンプでき、仲間や演出が現れます。
- ♪でミュート。結果には本編300拍のPERFECT・GOOD・MISSと最大コンボを表示し、再試行できます。練習・裏拍は採点に含めません。全拍PERFECTでは特別な祝祭が見られます。
- 結果は1080×1080のPNGカードとして保存・共有できます。画像対応のWeb Shareでは共有先を選び、未対応ではPNGを保存します。カードは端末内で作られ、結果画面と画像には完走・中断時の現地時刻が入ります。

画面を離れると停止し、戻ったら最初から再試行します。途中の再開や成績の自動保存はありません。音の遅延を抑えるには本体スピーカー・有線を推奨。タイミング補正は行いません。「視差効果を減らす」設定に対応しています。iPhone実機での音・遅延・共有動作は未確認です。

Node.js 20.19以上（または22.12以上）で `npm ci` → `npm run dev`。`npm run build` で型チェック・公開用 `dist/` 生成・第三者告知の検証、`npm run preview` でビルド結果を確認できます。[GitHub Actions](.github/workflows/pages.yml)が `main` のpush後にビルドしてPagesへ配信します。`dist/` はcommitしません。

[MIT License](LICENSE)。本作のコード・楽曲・キャラクター・オリジナルピクセルフォント・本作向けに生成したロゴとOGP画像を含みます。依存パッケージには各提供元のライセンスが適用されます（TypeScript: Apache-2.0、Vite: MIT等）。依存パッケージの著作権表示・ライセンスをこのMIT表記で置き換えません。

公開JavaScriptに含まれるViteのmodulepreload polyfill（Guy Bedford）のMIT全文告知は[第三者ライセンス](public/THIRD_PARTY_NOTICES.txt)／[公開版](https://monnouchi.github.io/pulse-hop/THIRD_PARTY_NOTICES.txt)に掲載し、配信JSにも保持します。`npm run build` は再生成後の告知・導線を検証します。専用ピクセル字体の生成元は `tools/pixel_font.py`（再生成時のみFontTools／Brotliが必要）です。
