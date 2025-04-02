import os
import json
from typing import Dict, List, Any, Optional

import firebase_admin
from firebase_admin import credentials, firestore
from app.core.config import settings

# Firebaseの初期化（実際の実装時にコメントを外す）
# def initialize_firebase():
#     if not firebase_admin._apps:
#         cred = credentials.Certificate(settings.FIREBASE_CREDENTIALS)
#         firebase_admin.initialize_app(cred, {
#             'databaseURL': settings.FIREBASE_DATABASE_URL
#         })
#     return firestore.client()

# プロフィールデータの取得
def get_profile_data() -> Dict[str, Any]:
    """
    Firebaseからプロフィールデータを取得します。
    """
    # db = initialize_firebase()
    # profile_ref = db.collection('profile').document('main')
    # profile_data = profile_ref.get().to_dict()
    # return profile_data
    
    # モック実装
    return {
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

# プロジェクト一覧の取得
def get_projects() -> List[Dict[str, Any]]:
    """
    Firebaseからプロジェクト一覧を取得します。
    """
    # db = initialize_firebase()
    # projects_ref = db.collection('projects')
    # projects = []
    # for doc in projects_ref.stream():
    #     project = doc.to_dict()
    #     project['id'] = doc.id
    #     projects.append(project)
    # return projects
    
    # モック実装
    return [
        {
            "id": "1",
            "title": "ポートフォリオサイト",
            "description": "Next.jsとFastAPIを使用したポートフォリオサイト。",
            "technologies": ["Next.js", "FastAPI", "Tailwind CSS", "Firebase"],
            "imageUrl": "https://example.com/portfolio.jpg",
            "projectUrl": "https://example.com",
            "githubUrl": "https://github.com/example/portfolio",
            "date": "2025-04-01"
        },
        {
            "id": "2",
            "title": "タスク管理アプリ",
            "description": "Reactとバックエンドにはノードを使用したタスク管理アプリケーション。",
            "technologies": ["React", "Node.js", "Express", "MongoDB"],
            "imageUrl": "https://example.com/task-app.jpg",
            "projectUrl": "https://example.com/task-app",
            "githubUrl": "https://github.com/example/task-app",
            "date": "2024-12-15"
        }
    ]

# 特定のプロジェクトの取得
def get_project_by_id(project_id: str) -> Optional[Dict[str, Any]]:
    """
    Firebaseから特定のプロジェクトを取得します。
    """
    # db = initialize_firebase()
    # project_ref = db.collection('projects').document(project_id)
    # project = project_ref.get()
    # if project.exists:
    #     data = project.to_dict()
    #     data['id'] = project.id
    #     return data
    # return None
    
    # モック実装
    projects = {
        "1": {
            "id": "1",
            "title": "ポートフォリオサイト",
            "description": "Next.jsとFastAPIを使用したポートフォリオサイト。",
            "technologies": ["Next.js", "FastAPI", "Tailwind CSS", "Firebase"],
            "imageUrl": "https://example.com/portfolio.jpg",
            "projectUrl": "https://example.com",
            "githubUrl": "https://github.com/example/portfolio",
            "date": "2025-04-01"
        },
        "2": {
            "id": "2",
            "title": "タスク管理アプリ",
            "description": "Reactとバックエンドにはノードを使用したタスク管理アプリケーション。",
            "technologies": ["React", "Node.js", "Express", "MongoDB"],
            "imageUrl": "https://example.com/task-app.jpg",
            "projectUrl": "https://example.com/task-app",
            "githubUrl": "https://github.com/example/task-app",
            "date": "2024-12-15"
        }
    }
    return projects.get(project_id)

# 技術記事一覧の取得
def get_articles() -> List[Dict[str, Any]]:
    """
    Firebaseから技術記事一覧を取得します。
    """
    # db = initialize_firebase()
    # articles_ref = db.collection('articles').order_by('publishedAt', direction=firestore.Query.DESCENDING)
    # articles = []
    # for doc in articles_ref.stream():
    #     article = doc.to_dict()
    #     article['id'] = doc.id
    #     articles.append(article)
    # return articles
    
    # モック実装
    return [
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
