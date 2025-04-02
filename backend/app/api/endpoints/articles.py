from typing import List
from fastapi import APIRouter, HTTPException

from app.models.article import Article
from app.services.firebase_service import get_articles

router = APIRouter()

@router.get("/articles", response_model=List[Article])
async def get_all_articles():
    """
    すべての技術記事情報を取得します。
    """
    try:
        # 本来はFirebaseからデータを取得
        # articles_data = get_articles()
        
        # モック用のデータ
        articles_data = [
            {
                "id": "1",
                "title": "Next.jsとFastAPIでポートフォリオサイトを作る",
                "summary": "モダンなフロントエンドとバックエンドを組み合わせたポートフォリオサイトの作り方について解説します。",
                "url": "https://example.com/blog/nextjs-fastapi-portfolio",
                "publishedAt": "2025-04-01",
                "tags": ["Next.js", "FastAPI", "Portfolio"]
            },
            {
                "id": "2",
                "title": "Firebaseを使ったサーバーレスアプリケーション開発",
                "summary": "Firebaseを活用したサーバーレスアプリケーション開発の利点と実装方法について解説します。",
                "url": "https://example.com/blog/firebase-serverless",
                "publishedAt": "2025-03-15",
                "tags": ["Firebase", "Serverless", "Web Development"]
            },
            {
                "id": "3",
                "title": "Tailwind CSSでレスポンシブデザインを実装する",
                "summary": "Tailwind CSSを使用して効率的にレスポンシブデザインを実装する方法について解説します。",
                "url": "https://example.com/blog/tailwind-responsive",
                "publishedAt": "2025-02-20",
                "tags": ["Tailwind CSS", "Responsive Design", "CSS"]
            }
        ]
        
        return articles_data
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
