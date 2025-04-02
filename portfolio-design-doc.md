# ポートフォリオサイト 要件定義・設計書

## 1. プロジェクト概要

モノレポ構成のモダンなポートフォリオサイトを開発します。フロントエンドはNext.js、バックエンドはPython（FastAPI）を使用し、データストアにはFirebaseを採用します。

## 2. 機能要件

### 2.1 フロントエンド（Next.js）
- **セクション構成**
  - 自己紹介
  - スキル一覧
  - プロジェクト実績
  - 技術記事
  - 連絡先

### 2.2 UI/UX要件
- レスポンシブデザイン（モバイル対応）
- ダークモード/ライトモード切替
- 多言語対応（日本語/英語）
- Tailwind CSSによるモダンなデザイン

### 2.3 バックエンド（FastAPI）
- Firebaseからのデータ取得・整形API
- 将来的な拡張性を考慮した設計

### 2.4 データストア（Firebase）
- ポートフォリオデータの保存
- 将来的な機能拡張に備えた設計

## 3. 技術スタック

- **フロントエンド**
  - Next.js
  - Tailwind CSS
  - ESLint/Prettier
  - i18n（多言語対応）

- **バックエンド**
  - Python
  - FastAPI

- **データストア**
  - Firebase

- **インフラ/CI/CD**
  - Vercel
  - GitHub Actions

## 4. プロジェクト構成

```
my-portfolio/
├── .github/                    # GitHub Actions設定
│   └── workflows/              # CI/CD設定ファイル
├── frontend/                   # Next.jsフロントエンド
│   ├── public/                 # 静的ファイル
│   ├── src/
│   │   ├── app/                # App Router
│   │   ├── components/         # UIコンポーネント
│   │   ├── hooks/              # カスタムフック
│   │   ├── lib/                # ユーティリティ関数
│   │   ├── locales/            # 多言語対応ファイル
│   │   └── styles/             # グローバルスタイル
│   ├── .eslintrc.js            # ESLint設定
│   ├── .prettierrc             # Prettier設定
│   ├── next.config.js          # Next.js設定
│   ├── package.json            # 依存関係
│   ├── postcss.config.js       # PostCSS設定
│   ├── tailwind.config.js      # Tailwind設定
│   └── tsconfig.json           # TypeScript設定
├── backend/                    # FastAPIバックエンド
│   ├── app/
│   │   ├── api/                # APIエンドポイント
│   │   ├── core/               # 設定・ユーティリティ
│   │   ├── db/                 # データベース接続
│   │   ├── models/             # データモデル
│   │   └── services/           # ビジネスロジック
│   ├── tests/                  # テスト
│   ├── .env.example            # 環境変数サンプル
│   ├── main.py                 # アプリケーションエントリポイント
│   ├── pyproject.toml          # Python依存関係
│   └── requirements.txt        # 依存関係
├── .gitignore                  # Git除外設定
├── README.md                   # プロジェクト説明
└── package.json                # ルートパッケージ設定（モノレポ用）
```

## 5. 実装計画

### フェーズ1: プロジェクト初期設定
1. モノレポ構造のセットアップ
2. Next.jsプロジェクトの初期化
3. FastAPIプロジェクトの初期化
4. ESLint/Prettierの設定
5. Tailwind CSSのセットアップ
6. GitHubリポジトリの設定

### フェーズ2: フロントエンド実装
1. ベースレイアウトの作成
2. 各セクションのコンポーネント実装
3. レスポンシブデザインの適用
4. ダークモード実装
5. 多言語対応の実装

### フェーズ3: バックエンド実装
1. FastAPIの基本設定
2. Firebaseとの連携設定
3. APIエンドポイントの実装

### フェーズ4: CI/CD設定
1. GitHub Actionsの設定
2. Vercelデプロイの設定

## 6. データモデル（案）

### Profile
- name: String
- title: String
- bio: String
- skills: String[]
- avatarUrl: String
- socialLinks: SocialLinks

### Project
- id: String
- title: String
- description: String
- technologies: String[]
- imageUrl: String
- projectUrl: String
- githubUrl: String
- date: Date

### Article
- id: String
- title: String
- summary: String
- url: String
- publishedAt: Date
- tags: String[]

### SocialLinks
- github: String
- linkedin: String
- twitter: String
- email: String

## 7. API設計（案）

### エンドポイント
- `GET /api/profile` - プロフィール情報の取得
- `GET /api/projects` - プロジェクト一覧の取得
- `GET /api/projects/{id}` - 特定プロジェクトの詳細取得
- `GET /api/articles` - 技術記事一覧の取得
