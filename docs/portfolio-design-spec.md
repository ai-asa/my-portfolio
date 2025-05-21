# ポートフォリオサイト設計仕様書

## 1. プロジェクト概要

### 1.1 目的
フルスタックエンジニアとしての技術力、プロジェクト経験、スキルセットを効果的に紹介するためのポートフォリオウェブサイトを構築する。

### 1.2 技術スタック
- フロントエンド: Next.js 14 + TypeScript
- スタイリング: Tailwind CSS
- アニメーション: Framer Motion
- デプロイ: Firebase Hosting + Firebase Functions
- CI/CD: GitHub Actions
- コンテンツ管理: ローカルMDXファイル

### 1.3 ユーザー情報
- 本業: 非IT職種（夜間/週末に学習・開発を継続中）
- Pythonプログラミング歴: 約3年
- システムエンジニア副業経験: 約1.5年
- 使用言語: TypeScript（フロントエンド）、GAS、C++
- データベース: Firebase、MongoDB、Supabase
- 機械学習: Pythonベースの基礎的ML知識
- AI連携システム: チャットボット／エージェント構築、RAG構築、Webアプリ組込
- フレームワーク: FastAPI、Electron（Python）、Node.js、Next.js、React、LINE Messaging API、Stripe
- プラットフォーム: GCP、LINE Developers、Stripe、Vercel
- 主な開発実績: AIライブストリームシステム、LINE連携AIチャットボット、AI活用学習サイト、その他デスクトップツール
- 活動実績: GitHub毎日Push、Zenn技術記事執筆中

## 2. 機能要件

### 2.1 基本機能
- レスポンシブデザイン (モバイル、タブレット、デスクトップ対応)
- ダークモード/ライトモード切替
- 多言語対応 (日本語/英語)
- アクセシビリティ対応
- グローバルナビゲーション: PCではヘッダーにアンカーリンク、モバイルではハンバーガーメニュー

### 2.2 セクション構成
1. **ヒーローセクション**
   - Above the Fold: キャッチコピー＋自己紹介（例: AI×システム開発のフルスタックエンジニア）、主な技術タグアイコン、CTAボタン
   - 簡易アニメーション（フェードイン、パーティクルなど）

2. **Skills & Stats セクション**
   - 言語、フレームワーク、DB、クラウド、AI/ML等をアイコン付きで表示
   - コミットカレンダー（Contribution Graph）を表示
     - GitHub の SVG エンドポイントを `<img>` タグで埋め込み（例: `https://github.com/users/${GITHUB_USERNAME}/contributions`）
     - または GitHub GraphQL API (カスタム API Route) で取得し、react-calendar-heatmap 等で描画
   - 各リポジトリの言語使用割合を円グラフで表示

3. **プロジェクト紹介セクション**
   - GitHub API (カスタム API Route) からリポジトリ一覧を取得
   - フィルタ機能（AI, Web, Desktop）
   - リポジトリカード（概要、技術スタック、リンク）
   - 詳細ページ（課題→解決→技術構成→コード例→結果）

4. **技術記事（Blog）セクション**
   - Zenn RSS フィード (カスタム API Route) から記事一覧を取得
   - サムネイル付き記事一覧
   - カテゴリ／タグ別フィルタ

5. **お問い合わせセクション**
   - コンタクトフォーム（Next.js API Routes）
   - SNS・メールリンク

### 2.3 チャットボット機能 -> 将来的な実装。初期実装しない
- 全ページ右下に浮きボタンを配置し、クリックでスライドアウトパネルが展開
- フロントエンド: `components/ChatWidget.tsx`（React, Framer Motion, Tailwind CSS）
- グローバル配置: `app/layout.tsx` 配下に `<ChatWidget />` を追加
- チャットエンドポイント: `/api/chat` (Next.js API Route)
- ベクトル検索: Firebase Firestore Vector Search Extension または外部Vector DB（例: Supabase Vector）を利用し、各リポジトリREADMEと自己紹介データを検索
- Embedding & LLM: Vertex AI Gemini API を使用し、ユーザー質問＋コンテキストを元に応答生成
- 環境変数: `FIREBASE_SERVICE_ACCOUNT`, `VERTEX_AI_API_KEY`, `VERTEX_AI_ENDPOINT`
- パフォーマンス: サーバーレス関数のタイムアウト（60秒前後）を考慮し、キャッシュやバッチ処理を実装

## 3. 技術仕様

### 3.1 アーキテクチャ
- App Router採用による新しいNext.js 14のディレクトリ構造
- サーバーコンポーネントとクライアントコンポーネントの適切な使い分け
- API Routes for フォーム送信および外部サービス (GitHub REST, GitHub GraphQL, Zenn RSS) データ取得

### 3.2 デザインシステム
- モダンでミニマルなデザイン
- 一貫したカラーパレット
- レスポンシブタイポグラフィ
- コンポーネントライブラリ:
  - 自作UIコンポーネント
  - `@headlessui/react`
- アイコンライブラリ: `@heroicons/react`
- クラス名ユーティリティ: `clsx`

### 3.3 アニメーション要素
- アニメーションユーティリティ: `tailwindcss-animate`
- スクロールベースのアニメーション
- ホバーエフェクト
- ページトランジション
- パララックス効果
- 3D要素 (オプション: Three.js)

### 3.4 パフォーマンス最適化
- 画像最適化 (Next.js Image)
- コード分割とレイジーローディング
- キャッシュ戦略
- Lighthouseスコア目標: 90+

## 4. ディレクトリ構造

```
/
├── app/                               // Next.js App Router ルート
│   ├── layout.tsx                     // ルートレイアウト
│   ├── head.tsx                       // HTML head 設定
│   ├── globals.css                    // グローバルスタイル
│   ├── api/                           // API ルート
│   │   ├── contact/
│   │   │   └── route.ts               // お問い合わせフォーム送信 API
│   │   ├── github/
│   │   │   └── repos/
│   │   │       └── route.ts           // GitHubリポジトリ取得 API
│   │   │   ├── contributions/         // (オプション) GraphQLベースの貢献情報 API
│   │   │   │   └── route.ts           // GitHub Contributions取得 API
│   │   │   └── zenn/
│   │   │       └── feed/
│   │   │           └── route.ts           // Zenn記事取得 API
│   │   └── [locale]/                      // ロケール別ルート
│   │       ├── page.tsx                   // ホームページ
│   │       ├── about/
│   │       │   └── page.tsx               // About ページ
│   │       ├── projects/
│   │       │   ├── page.tsx               // プロジェクト一覧
│   │       │   └── [slug]/
│   │       │       └── page.tsx           // プロジェクト詳細ページ
│   │       ├── blog/
│   │       │   ├── page.tsx               // ブログ一覧
│   │       │   └── [slug]/
│   │       │       └── page.tsx           // ブログ詳細ページ
│   │       └── contact/
│   │           └── page.tsx               // お問い合わせページ
│   ├── components/                        // 再利用可能な UI コンポーネント
│   │   ├── ui/                            // ボタンや入力など小さな要素
│   │   ├── layout/                        // ヘッダー、フッターなどレイアウト
│   │   ├── sections/                      // Hero, Skills, Projects などセクション
│   │   └── animations/                    // Framer Motion アニメーション
│   └── content/                           // MDX コンテンツ
│       ├── projects/                      // 各プロジェクト情報 (.mdx)
│       └── blog/                          // ブログ記事 (.mdx)
├── lib/                               // 共通ロジック・ユーティリティ
│   ├── hooks/                         // カスタムフック
│   ├── utils/                         // 汎用関数
│   └── animations/                    // アニメーション設定
├── public/                            // 静的ファイル
│   ├── images/                        // 画像
│   └── fonts/                         // フォント
└── styles/                            // スタイル関連
    └── globals.css                    // グローバル CSS
```

## 5. データ管理

### 5.1 プロジェクトデータ
- MDXファイルで各プロジェクト情報を管理
- フロントマターでメタデータ定義

### 5.2 ブログ記事
- MDXファイルでコンテンツ管理
- タグ、カテゴリ、公開日のメタデータ

### 5.3 スキル/経験データ
- JSONデータファイルで構造化

## 6. デプロイメント戦略

- Firebase Hosting + Firebase Functions への自動デプロイ
- GitHub Actionsによる継続的インテグレーション＆デプロイ
- 環境変数管理
- ステージング/本番環境の設定

## 7. 今後の拡張予定

- ポートフォリオ管理用のダッシュボード
- リアルタイムGitHubアクティビティ統合
- インタラクティブなスキルツリー
- 訪問者分析機能
- RAGベースのAIチャットボット機能（Firebase Vector Search + Gemini API連携）: 全ページ右下の浮きボタン + スライドアウトパネルでのチャットウィジェット実装予定

## 8. ページ構成ワイヤーフレーム

以下は、想定している「1ページ完結型」のレイアウトワイヤーフレーム例です。

```text
─────────────────────────────────────
｜ Header
｜  PC: ロゴ ｜ Home ｜ Skills ｜ Projects ｜ Blog ｜ Contact
｜  Mobile: ロゴ ｜ ☰
─────────────────────────────────────
｜ Hero Section (Above the Fold)
｜ ┌─────────────────────────────────┐
｜ │ 背景アニメーション             │
｜ │ H1: AI×システム開発のフルスタックエンジニア │
｜ │ サブタイトル or 一言自己紹介   │
｜ │ [View Projects] [Contact Me]   │
｜ └─────────────────────────────────┘
─────────────────────────────────────
｜ Skills & Stats Section
｜ ┌───────────────────────────────┬───────────────────────────┐
｜ │ ・言語: Python, TypeScript…    │ [Contribution Graph]     │
｜ │ ・フレームワーク: Next.js…     │                           │
｜ │ ・DB: Firebase, Supabase…     │ [Language Usage Pie Chart]│
｜ │ ・AI/ML: FastAPI, チャットボット│                           │
｜ └───────────────────────────────┴───────────────────────────┘
─────────────────────────────────────
｜ Projects Section
｜ ┌─────────────────────────────────┐
｜ │ フィルタ (All / AI / Web / Desktop) │
｜ │ ┌───┐ ┌───┐ ┌───┐ …               │
｜ │ │Card│ │Card│ │Card│ …             │
｜ │ └───┘ └───┘ └───┘ …               │
｜ └─────────────────────────────────┘
─────────────────────────────────────
｜ Blog Section
｜ ┌─────────────────────────────────┐
｜ │ カテゴリ／タグ ／ サムネイル付き記事一覧 │
｜ └─────────────────────────────────┘
─────────────────────────────────────
｜ Contact Section
｜ ┌─────────────────────────────────┐
｜ │ フォーム(Name/Email/Message)    │
｜ │ [Submit] ボタン                 │
｜ │ SNS・メールアイコン             │
｜ └─────────────────────────────────┘
─────────────────────────────────────
｜ Footer: © Your Name | Privacy | TOS
─────────────────────────────────────
```

---

**注**: この設計仕様書は初期バージョンであり、開発の進行に伴って更新される可能性があります。 