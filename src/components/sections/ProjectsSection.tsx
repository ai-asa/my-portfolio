"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
// import Image from 'next/image' // TODO: 画像実装時に有効化

// プロジェクトのモックデータ
const projects = [
  {
    id: 'ai-livestream',
    title: 'AIライブストリームシステム',
    description: 'リアルタイムのストリーミングデータ処理とAI連携を実現したシステム',
    image: '/images/projects/project1.jpg',
    tags: ['AI', 'Web'],
    technologies: ['TypeScript', 'Next.js', 'WebRTC', 'Firebase', 'OpenAI API'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/username/ai-livestream',
  },
  {
    id: 'line-chatbot',
    title: 'LINE連携AIチャットボット',
    description: 'LINEメッセージングAPIを活用し、自然言語処理とRAG機能を組み込んだチャットボット',
    image: '/images/projects/project2.jpg',
    tags: ['AI', 'Bot'],
    technologies: ['Python', 'FastAPI', 'LINE API', 'langchain', 'Redis'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/username/line-chatbot',
  },
  {
    id: 'ai-learning-platform',
    title: 'AI活用学習サイト',
    description: 'AI技術の基礎から応用までを学べるインタラクティブなラーニングプラットフォーム',
    image: '/images/projects/project3.jpg',
    tags: ['Web', 'AI'],
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Firebase Auth'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/username/ai-learning-platform',
  },
  {
    id: 'desktop-utility',
    title: 'デスクトップユーティリティツール',
    description: 'クロスプラットフォーム対応の生産性向上を支援するデスクトップアプリケーション',
    image: '/images/projects/project4.jpg',
    tags: ['Desktop'],
    technologies: ['Python', 'Electron', 'React', 'SQLite'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/username/desktop-utility',
  },
]

// フィルタータイプの定義
type FilterType = 'All' | 'AI' | 'Web' | 'Desktop' | 'Bot'

export default function ProjectsSection() {
  const [filter, setFilter] = useState<FilterType>('All')
  
  // プロジェクトのフィルタリング
  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.tags.includes(filter))
  
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            各種プロジェクトの紹介。技術スタックやソースコードへのリンクを掲載しています。
          </p>
        </motion.div>
        
        {/* フィルタータブ */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            {(['All', 'AI', 'Web', 'Desktop', 'Bot'] as FilterType[]).map((filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType)}
                className={`px-4 py-2 text-sm font-medium border ${
                  filter === filterType 
                    ? 'bg-primary-600 text-white border-primary-600 dark:bg-primary-700 dark:border-primary-700'
                    : 'bg-white text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
                } ${
                  filterType === 'All' ? 'rounded-l-lg' : ''
                } ${
                  filterType === 'Bot' ? 'rounded-r-lg' : ''
                }`}
              >
                {filterType}
              </button>
            ))}
          </div>
        </div>
        
        {/* プロジェクト一覧 */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-100 dark:border-gray-700"
            >
              <div className="relative h-48 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                {/* プロジェクト画像（実際の実装では存在する画像パスを指定） */}
                <div className="text-gray-500 dark:text-gray-400 text-sm">Project Image Placeholder</div>
              </div>
              
              <div className="p-6">
                {/* タグ */}
                <div className="flex gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{project.description}</p>
                
                {/* 技術スタック */}
                <div className="mb-4">
                  <h4 className="text-xs uppercase text-gray-500 dark:text-gray-400 mb-2">使用技術</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="bg-gray-50 dark:bg-gray-900 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between mt-4">
                  <Link 
                    href={project.demoUrl} 
                    target="_blank"
                    className="text-primary-600 dark:text-primary-400 text-sm hover:underline"
                  >
                    デモを見る
                  </Link>
                  <Link 
                    href={project.githubUrl} 
                    target="_blank"
                    className="text-primary-600 dark:text-primary-400 text-sm hover:underline"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            選択したカテゴリのプロジェクトがありません。
          </div>
        )}
      </div>
    </section>
  )
} 