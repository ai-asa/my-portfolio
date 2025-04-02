from typing import List
from datetime import date
from pydantic import BaseModel

class Article(BaseModel):
    id: str
    title: str
    summary: str
    url: str
    publishedAt: date
    tags: List[str]
