# AI Dev Day 2026 Playground

[AI Dev Day 2026](https://aidevday.com/) のセッション・コミュニティ紹介ページ集です。
GitHub Actions で静的サイトとして生成し、GitHub Pages にデプロイされます。

## 技術スタック

- [Nuxt 4](https://nuxt.com/)（Vue 3 / vue-router）
- [@nuxtjs/tailwindcss](https://tailwindcss.nuxtjs.org/)
- [Vite+](https://viteplus.dev/)（`vp` CLI によるフォーマット・リント・型チェック）
- パッケージマネージャー: pnpm（`devEngines` で自動解決）

## ページ構成

| パス                                       | 内容                                                       |
| ------------------------------------------ | ---------------------------------------------------------- |
| `/`                                        | トップページ（各ページへのリンク一覧）                     |
| `/sessions/github-dockyard-vs-code-meetup` | セッション: GitHub dockyard Radio & VS Code Monthly Update |
| `/communities/github-dockyard`             | コミュニティ: GitHub dockyard                              |
| `/communities/vs-code-meetup`              | コミュニティ: VS Code Meetup                               |

## ディレクトリ構成

| パス                                                   | 内容                                                                   |
| ------------------------------------------------------ | ---------------------------------------------------------------------- |
| [`app/data/`](./app/data)                              | 表示コンテンツ（イベント情報・コミュニティ・セッション）の定義         |
| [`app/pages/`](./app/pages)                            | ページ。コミュニティページは `communities/[slug].vue` でデータから生成 |
| [`app/layouts/default.vue`](./app/layouts/default.vue) | 共通ヘッダー・フッターを含むレイアウト                                 |
| [`app/components/`](./app/components)                  | 共通 UI パーツ（ヘッダー、フッター、見出し、リンクピルなど）           |
| [`app/composables/`](./app/composables)                | `usePageSeo` などの composable                                         |
| [`app/utils/`](./app/utils)                            | アクセントカラーのクラス定義など                                       |

コミュニティを追加する場合は [`app/data/communities.ts`](./app/data/communities.ts) の `communities` 配列にエントリを追加するだけで、ページとトップページのリンクが生成されます。

## セットアップ

依存関係をインストールします:

```bash
pnpm install
# または
vp install
```

## 開発サーバー

`http://localhost:3000` で開発サーバーを起動します:

```bash
pnpm dev
```

## 検証

フォーマット・リント・型チェックを実行します:

```bash
vp check        # チェックのみ
vp check --fix  # 自動修正あり
```

### CI

Pull Request と `main` への push をトリガーに、GitHub Actions（[`ci.yml`](./.github/workflows/ci.yml)）が `vp check` と `vp run generate` を実行します。

## ビルド / プレビュー

静的サイトを生成します（出力先: `.output/public`）:

```bash
pnpm generate
```

生成結果をローカルでプレビューします:

```bash
pnpm preview
```

## デプロイ

`main` ブランチへの push をトリガーに、GitHub Actions（[`deploy-pages.yml`](./.github/workflows/deploy-pages.yml)）が `pnpm generate` で静的サイトを生成し、GitHub Pages へ自動デプロイします。ベースパスはリポジトリ名（`NUXT_APP_BASE_URL=/ai-dev-day-2026-playground/`）に設定されます。
