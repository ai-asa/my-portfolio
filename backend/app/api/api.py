from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings
from app.api.endpoints import profile, projects, articles

app = FastAPI(
    title=settings.PROJECT_NAME,
    description=settings.PROJECT_DESCRIPTION,
    version=settings.VERSION,
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
)

# CORSミドルウェアの設定
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# APIルーターの登録
app.include_router(profile.router, prefix=settings.API_V1_STR, tags=["profile"])
app.include_router(projects.router, prefix=settings.API_V1_STR, tags=["projects"])
app.include_router(articles.router, prefix=settings.API_V1_STR, tags=["articles"])

@app.get("/")
async def root():
    return {"message": "Welcome to Portfolio API"}
