# Hero Section 設計仕様

## 1. 概要
- 目的: ユーザーに強い第一印象を与え、自己紹介と主要CTA（プロジェクト閲覧／お問い合わせ）へ誘導する
- 配置場所: ページ最上部 (Above the Fold)

## 2. コンポーネント構成
- ファイル: `components/sections/HeroSection.tsx`
- 種別: React Client Component
- 内包:
  - Title（`<h1>`）
  - Subtitle（`<p>`）
  - TechTags（アイコンリスト）
  - CTAButtons（2種類のボタン）
  - BackgroundAnimation（パーティクル／Canvas）

## 3. レイアウト & コンテンツ
### 3.1 デスクトップ
- 2カラムレイアウト
  - 左カラム (60%幅): テキスト群 + ボタン
    - `flex flex-col space-y-4`
  - 右カラム (40%幅): 背景アニメーション
    - `relative w-full h-full`
- Title: `text-5xl md:text-6xl font-bold`
- Subtitle: `text-xl md:text-2xl text-gray-600 dark:text-gray-300`
- TechTags: `<ul className="flex space-x-3">`アイコン
- CTAButtons: `<div className="flex space-x-4">`

### 3.2 モバイル
- 単一カラム縦積み
- 順序: Title → Subtitle → TechTags → CTAButtons → Animation
- フォントサイズ: `text-4xl` → `sm:text-5xl`
- パディング: `px-4 py-6`

## 4. スタイリング & テーマ
- Tailwind CSSユーティリティ
- ダークモード: `dark:bg-gray-900 dark:text-white`
- カラーパレット: 設計システムに準拠
- コンポーネントライブラリ: `@headlessui/react`
- アイコンライブラリ: `@heroicons/react`
- クラス名ユーティリティ: `clsx`
- アニメーションユーティリティ: `tailwindcss-animate`

## 5. アニメーション
- ライブラリ: Framer Motion
  - Title/SubTitle: fade-in + slide-up（`staggerChildren`）
  - TechTags: staggered fade-in
  - CTAButtons: scale & opacityアニメーション
- 背景: `react-tsparticles` or Canvas APIでパーティクル生成

## 6. 多言語化
- App Routerの `params.locale` を利用
- 翻訳リソース: `locales/{ja,en}/hero.json`
- 翻訳キー:
  - `hero.title`
  - `hero.subtitle`
  - `hero.cta.projects`
  - `hero.cta.contact`

## 7. アクセシビリティ
- `h1` の明示
- ボタンに `aria-label`
- フォーカススタイルをカスタム
- color-contrast: WCAG AA以上

## 8. レスポンシブ & テスト
- Storybook: Viewport Addonでスマホ/タブレット/デスクトップ確認
- Jest + React Testing Library: snapshot／アクセシビリティテスト

## 9. デザインアセット
- 技術アイコン: `public/images/skills/` 内のSVG
- フォント: システムフォント＋Google Fonts (必要時)

## 10. 今後の拡張
- 3Dパララックスエフェクト (Three.js)
- 動的背景ビデオ（Vimeo/YouTube埋め込み）

---

※ 実装前にデザイナーと配色・モーションデザインの詳細を詰め、アクセシビリティレビューを実施してください。 