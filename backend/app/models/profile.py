from typing import List
from pydantic import BaseModel, HttpUrl

class SocialLinks(BaseModel):
    github: str
    linkedin: str
    twitter: str
    email: str

class Profile(BaseModel):
    name: str
    title: str
    bio: str
    skills: List[str]
    avatarUrl: str
    socialLinks: SocialLinks
