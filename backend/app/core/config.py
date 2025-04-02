import os
from typing import List

from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    # アプリケーション設定
    PROJECT_NAME: str = "Portfolio API"
    PROJECT_DESCRIPTION: str = "Portfolio Website Backend API"
    VERSION: str = "0.1.0"
    API_V1_STR: str = "/api"
    
    # サーバー設定
    HOST: str = "0.0.0.0"
    PORT: int = 8000
    DEBUG: bool = True
    
    # CORS設定
    CORS_ORIGINS: List[str] = [
        "http://localhost:3000",  # Next.jsフロントエンド
        "http://localhost:8000",  # FastAPIバックエンド（Swagger UI用）
    ]
    
    # Firebase設定
    FIREBASE_CREDENTIALS: str = os.getenv("FIREBASE_CREDENTIALS", "")
    FIREBASE_DATABASE_URL: str = os.getenv("FIREBASE_DATABASE_URL", "")
    
    class Config:
        env_file = ".env"
        case_sensitive = True

settings = Settings()
