from typing import List
from fastapi import APIRouter, HTTPException, Path

from app.models.project import Project
from app.services.firebase_service import get_projects, get_project_by_id

router = APIRouter()

@router.get("/projects", response_model=List[Project])
async def get_all_projects():
    """
    すべてのプロジェクト情報を取得します。
    """
    try:
        # 本来はFirebaseからデータを取得
        # projects_data = get_projects()
        
        # モック用のデータ
        projects_data = [
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
        
        return projects_data
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/projects/{project_id}", response_model=Project)
async def get_project(project_id: str = Path(..., description="プロジェクトID")):
    """
    特定のプロジェクト情報を取得します。
    """
    try:
        # 本来はFirebaseからデータを取得
        # project_data = get_project_by_id(project_id)
        
        # モック用のデータ
        projects_data = {
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
        
        if project_id not in projects_data:
            raise HTTPException(status_code=404, detail="Project not found")
            
        return projects_data[project_id]
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
