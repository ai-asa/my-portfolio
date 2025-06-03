# ポートフォリオサイト設計仕様書

## 1. プロジェクト概要

### 1.1 目的
フルスタックエンジニアとしての技術力、プロジェクト経験、スキルセットを効果的に紹介するためのポートフォリオウェブサイトを構築する。

### 1.2 技術スタック
- フロントエンド: Next.js 14 + TypeScript
- スタイリング: Tailwind CSS
- UIライブラリ: shadcn/ui (Radix UI + Tailwind CSS)
- アニメーション: Framer Motion + tailwindcss-animate
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
   - 左側: Above the Fold: キャッチコピー＋自己紹介（例: AI×システム開発のフルスタックエンジニア）、CTAボタン
   - 右側: プロフィール情報（アイコン画像、名前、簡潔な自己紹介、主な専門分野タグ）
   - 簡易アニメーション（フェードイン、パーティクルなど）
   - モバイル: 縦積みレイアウト（左側内容が上、右側内容が下）

2. **経歴セクション**
   - タイムライン形式での経歴表示
   - 左側: 年代（2025年、2024年など）を縦に配置
   - 右側: 各年代の活動内容、役職、実績
   - スクロールアニメーションで段階的に表示
   - モダンなデザインで視覚的に分かりやすく

3. **プロジェクト紹介セクション**
   - ハイライトプロジェクト（3つ）
     - 左右交互レイアウト（画像と詳細説明）
     - 各プロジェクトに十分なスペースを確保
     - 使用技術、課題、解決策を含む
   - その他のプロジェクト
     - 従来のカード形式でコンパクトに表示
     - フィルタ機能（AI, Web, Desktop）
   - GitHub API (カスタム API Route) からリポジトリ一覧を取得

4. **技術記事（Blog）セクション**
   - Zenn RSS フィード (カスタム API Route) から記事一覧を取得
   - サムネイル付き記事一覧
   - カテゴリ／タグ別フィルタ

5. **Skills & Stats セクション**
   - 言語、フレームワーク、DB、クラウド、AI/ML等をアイコン付きで表示
   - コミットカレンダー（Contribution Graph）を表示
     - GitHub の SVG エンドポイントを `<img>` タグで埋め込み（例: `https://github.com/users/${GITHUB_USERNAME}/contributions`）
     - または GitHub GraphQL API (カスタム API Route) で取得し、react-calendar-heatmap 等で描画
   - 各リポジトリの言語使用割合を円グラフで表示

6. **お問い合わせセクション**
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

#### 3.2.1 デザインコンセプト
- モダンでミニマルなデザイン
- グラスモーフィズムとソフトシャドウの活用
- 自然なグラデーションで深みのある表現
- ホワイトスペースを活かした読みやすさ

#### 3.2.2 カラーパレット
```css
/* プライマリカラー（グラデーション） */
--primary-start: #3B82F6;  /* 鮮やかな青 */
--primary-end: #8B5CF6;    /* 紫 */

/* セカンダリカラー */
--secondary: #06B6D4;      /* 青緑（シアン） */

/* アクセントカラー */
--accent: #F59E0B;         /* オレンジ（CTAボタン用） */

/* 背景色 */
--bg-light: #F9FAFB;       /* ライトモード背景 */
--bg-dark: #0F172A;        /* ダークモード背景 */

/* グラデーション背景 */
--gradient-subtle: linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 100%);
--gradient-dark: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
```

#### 3.2.3 デザインテクニック
1. **グラスモーフィズム**
   - カード要素: `backdrop-filter: blur(10px)`
   - 背景: `background: rgba(255, 255, 255, 0.7)`
   - ボーダー: `border: 1px solid rgba(255, 255, 255, 0.2)`

2. **グラデーション**
   - ヒーローセクション: メッシュグラデーション背景
   - セクション区切り: 波形SVGでの自然な遷移
   - ボタン: ホバー時のグラデーション変化

3. **シャドウ**
   - カード: `box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.1)`
   - ホバー時: `transform: translateY(-4px)` + 深いシャドウ

4. **幾何学パターン**
   - CSS Grid/SVGによる背景パターン
   - 低い不透明度で繊細な表現

#### 3.2.4 コンポーネントライブラリ
- **メインUIライブラリ**: `shadcn/ui`
  - Radix UI + Tailwind CSSベース
  - 高いカスタマイズ性とアクセシビリティ
  - 必要なコンポーネントのみ選択的に導入
  - TypeScript完全対応
- **アニメーション参考**: ReactBitsのアイデアを部分的に採用
  - ヒーローセクションの派手なエフェクト
  - プロジェクトカードのホバーアニメーション
- **アイコンライブラリ**: `lucide-react` (shadcn/ui推奨)
- **クラス名ユーティリティ**: `clsx` + `tailwind-merge`
- **追加ライブラリ**:
  - `@radix-ui/react-*`: shadcn/uiの基盤
  - `tailwindcss-animate`: 基本アニメーション

### 3.3 アニメーション要素

#### 3.3.1 アニメーションライブラリ
- **Framer Motion**: メインアニメーションライブラリ（既存）
- **tailwindcss-animate**: 基本的なアニメーション
- **AOS (Animate On Scroll)**: スクロール連動（オプション）
- **CSS Animations**: 軽量な装飾アニメーション

#### 3.3.2 実装するアニメーション
1. **ヒーローセクション**
   - テキスト: スタガーフェードイン
   - 背景: 浮遊する幾何学図形（CSS Animation）
   - パーティクル: CSSのみで実装（軽量）

2. **スクロール連動**
   - セクション: フェードイン + スライドアップ
   - カード: スタガー表示
   - タイムライン: 順次表示

3. **インタラクション**
   - ホバー: スケール + シャドウ変化
   - クリック: リップルエフェクト
   - フォーカス: グロー効果

4. **背景アニメーション**
   - グラデーション: ゆっくりとした色相変化
   - パターン: 微細な移動アニメーション

#### 3.3.3 パフォーマンス考慮
- GPU加速を活用: `transform`, `opacity`のみ使用
- `will-change`の適切な使用
- アニメーション量の調整（prefers-reduced-motion対応）

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

### 3.5 セクション別デザイン詳細

#### 3.5.1 ヒーローセクション
- **背景**: ReactBits風のメッシュグラデーション + CSS浮遊アニメーション
- **プロフィールカード**: shadcn/ui Card + カスタムグラスモーフィズム
- **CTAボタン**: shadcn/ui Button + ReactBits風グラデーション
- **実装コンポーネント**:
  - shadcn/ui: Card, Button
  - カスタム: GradientBackground, FloatingShapes

#### 3.5.2 経歴セクション
- **タイムライン**: カスタム実装（shadcn/ui Separator活用）
- **年代マーカー**: shadcn/ui Badge + パルスアニメーション
- **カード**: shadcn/ui Card + Framer Motion
- **実装コンポーネント**:
  - shadcn/ui: Card, Badge, Separator
  - カスタム: Timeline, TimelineItem

#### 3.5.3 プロジェクトセクション
- **ハイライト**: shadcn/ui Card（大） + ReactBits風ホバー効果
- **通常カード**: shadcn/ui Card + hover:scale効果
- **フィルタ**: shadcn/ui Tabs または ToggleGroup
- **実装コンポーネント**:
  - shadcn/ui: Card, Tabs/ToggleGroup, Badge
  - カスタム: ProjectCard, ProjectHighlight

#### 3.5.4 その他のセクション
- **ブログ**: shadcn/ui Card + Skeleton（ローディング）
- **スキル**: shadcn/ui Progress または Chart
- **コンタクト**: shadcn/ui Form + Input + Textarea + Button
- **共通要素**:
  - shadcn/ui: ScrollArea, Tooltip, Dialog
  - カスタム: SectionDivider（波形SVG）

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

## 7. 実装手順

### 7.1 shadcn/ui セットアップ
1. shadcn/ui初期化: `npx shadcn-ui@latest init`
2. 必要なコンポーネントの追加:
   ```bash
   npx shadcn-ui@latest add card button form input textarea
   npx shadcn-ui@latest add tabs badge separator skeleton
   npx shadcn-ui@latest add scroll-area tooltip dialog
   ```

### 7.2 カスタムコンポーネント実装順序
1. 共通レイアウト（Header, Footer）
2. ヒーローセクション（グラデーション背景）
3. 経歴セクション（タイムライン）
4. プロジェクトセクション（ハイライト + カード）
5. その他セクション

## 8. 今後の拡張予定

- ポートフォリオ管理用のダッシュボード
- リアルタイムGitHubアクティビティ統合
- インタラクティブなスキルツリー
- 訪問者分析機能
- RAGベースのAIチャットボット機能（Firebase Vector Search + Gemini API連携）: 全ページ右下の浮きボタン + スライドアウトパネルでのチャットウィジェット実装予定

## 9. ページ構成ワイヤーフレーム

以下は、想定している「1ページ完結型」のレイアウトワイヤーフレーム例です。

```text
─────────────────────────────────────
｜ Header
｜  PC: ロゴ ｜ Home ｜ Career ｜ Projects ｜ Blog ｜ Skills ｜ Contact
｜  Mobile: ロゴ ｜ ☰
─────────────────────────────────────
｜ Hero Section (Above the Fold)
｜ ┌──────────────────────┬────────────────────┐
｜ │ 背景アニメーション    │ プロフィール       │
｜ │ H1: AI×システム開発の│ ┌────────────┐    │
｜ │ フルスタックエンジニア│ │ [アイコン]  │    │
｜ │ サブタイトル         │ └────────────┘    │
｜ │ [View Projects]      │ 名前: 浅尾 一樹    │
｜ │ [Contact Me]         │ 自己紹介文（2-3行） │
｜ │                      │ [タグ][タグ][タグ] │
｜ └──────────────────────┴────────────────────┘
─────────────────────────────────────
｜ Career Section (経歴)
｜ ┌─────┬──────────────────────────────────┐
｜ │2023 │● フルスタックエンジニアとして活動 │
｜ │     │  AI × Web開発の案件に従事         │
｜ │     │                                   │
｜ │2024 │● システムエンジニア副業開始       │
｜ │     │  LINE連携AIチャットボット開発     │
｜ │     │                                   │
｜ │2025 │● Pythonプログラミング学習開始     │
｜ │     │  機械学習・Web開発の基礎を習得    │
｜ └─────┴──────────────────────────────────┘
─────────────────────────────────────
｜ Projects Section
｜ ┌─────────────────────────────────┐
｜ │ ■ ハイライトプロジェクト        │
｜ │ ┌──────────┬──────────────────┐ │
｜ │ │ [画像]    │ プロジェクト1    │ │
｜ │ │           │ 説明・技術・成果 │ │
｜ │ └──────────┴──────────────────┘ │
｜ │ ┌──────────────────┬──────────┐ │
｜ │ │ プロジェクト2    │ [画像]    │ │
｜ │ │ 説明・技術・成果 │           │ │
｜ │ └──────────────────┴──────────┘ │
｜ │                                  │
｜ │ ■ その他のプロジェクト          │
｜ │ フィルタ (All / AI / Web / Desktop) │
｜ │ ┌───┐ ┌───┐ ┌───┐ …           │
｜ │ │Card│ │Card│ │Card│ …         │
｜ │ └───┘ └───┘ └───┘ …           │
｜ └─────────────────────────────────┘
─────────────────────────────────────
｜ Blog Section
｜ ┌─────────────────────────────────┐
｜ │ カテゴリ／タグ ／ サムネイル付き記事一覧 │
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