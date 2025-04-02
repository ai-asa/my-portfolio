from typing import List
from datetime import date
from pydantic import BaseModel

class Project(BaseModel):
    id: str
    title: str
    description: str
    technologies: List[str]
    imageUrl: str
    projectUrl: str
    githubUrl: str
    date: date
