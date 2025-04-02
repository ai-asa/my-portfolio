from fastapi import APIRouter, HTTPException

from app.models.profile import Profile, SocialLinks
from app.services.firebase_service import get_profile_data

router = APIRouter()

@router.get("/profile", response_model=Profile)
async def get_profile():
    """
    プロフィール情報を取得します。
    """
    try:
        # 本来はFirebaseからデータを取得
        # profile_data = get_profile_data()
        
        # モック用のデータ
        profile_data = {
            "name": "山田 太郎",
            "title": "システムエンジニア",
            "bio": "10年以上のシステム開発経験を持つエンジニアです。Webアプリケーション開発、クラウドインフラ構築、DevOpsなどを得意としています。",
            "skills": ["Python", "JavaScript", "TypeScript", "React", "Next.js", "FastAPI", "AWS", "Firebase", "Docker"],
            "avatarUrl": "https://example.com/avatar.jpg",
            "socialLinks": {
                "github": "https://github.com/example",
                "linkedin": "https://linkedin.com/in/example",
                "twitter": "https://twitter.com/example",
                "email": "example@example.com"
            }
        }
        
        return profile_data
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
