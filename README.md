# モダンポートフォリオサイト

Next.jsとFastAPIを使用したモダンなポートフォリオサイト。フロントエンドとバックエンドをモノレポ構成で管理しています。

## 機能

- レスポンシブデザイン
- ダークモード対応
- 多言語対応（日本語/英語）
- Firebaseデータストア

## 技術スタック

### フロントエンド
- Next.js
- TypeScript
- Tailwind CSS
- next-intl（多言語対応）

### バックエンド
- Python
- FastAPI
- Firebase Admin SDK

### インフラ/CI/CD
- Vercel
- GitHub Actions

## 開発環境のセットアップ

### 前提条件
- Node.js 18.x以上
- Python 3.11以上
- npm または yarn

### インストール手順

1. リポジトリをクローン
```bash
git clone https://github.com/yourusername/my-portfolio.git
cd my-portfolio
```

2. フロントエンドの依存関係をインストール
```bash
cd frontend
npm install
```

3. バックエンドの依存関係をインストール
```bash
cd ../backend
pip install -r requirements.txt
```

4. 環境変数の設定
```bash
# バックエンド用の.envファイルを作成
cp backend/.env.example backend/.env
# 必要な環境変数を設定
```

### 開発サーバーの起動

1. フロントエンド開発サーバー
```bash
cd frontend
npm run dev
```

2. バックエンド開発サーバー
```bash
cd backend
python -m uvicorn app.main:app --reload
```

## デプロイ

このプロジェクトはVercelにデプロイするように設定されています。GitHub Actionsを使用して、mainブランチへのプッシュ時に自動的にデプロイされます。

## ライセンス

MIT
