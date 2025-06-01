"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

// 記事カテゴリタイプ
type CategoryType = 'All' | 'React' | 'Next.js' | 'TypeScript' | 'AI'

// 記事のモックデータ
const articles = [
  {
    id: 'nextjs-portfolio',
    title: 'Next.js 14 でポートフォリオサイトを作る方法',
    excerpt: 'App Routerを使った最新のNext.jsでポートフォリオサイトを構築する方法を解説します。',
    publishedAt: '2023-12-15',
    image: '/images/blog/nextjs.jpg',
    url: 'https://zenn.dev/username/articles/nextjs-portfolio',
    categories: ['Next.js', 'React'],
  },
  {
    id: 'typescript-tips',
    title: 'TypeScriptで型安全なコードを書くためのTips',
    excerpt: '実務で活かせるTypeScriptの型定義テクニックを紹介します。',
    publishedAt: '2023-11-20',
    image: '/images/blog/typescript.jpg',
    url: 'https://zenn.dev/username/articles/typescript-tips',
    categories: ['TypeScript'],
  },
  {
    id: 'ai-chatbot',
    title: 'RAGを活用したAIチャットボットの作り方',
    excerpt: 'Retrieval Augmented Generation (RAG) を用いたカスタムナレッジベースのチャットボット構築方法',
    publishedAt: '2023-10-05',
    image: '/images/blog/ai-chatbot.jpg',
    url: 'https://zenn.dev/username/articles/ai-chatbot',
    categories: ['AI'],
  },
  {
    id: 'react-state-management',
    title: 'Reactの状態管理ライブラリ比較',
    excerpt: 'Redux, Zustand, Jotai, Recoilなど、主要な状態管理ライブラリの特徴と使い分け',
    publishedAt: '2023-09-10',
    image: '/images/blog/react.jpg',
    url: 'https://zenn.dev/username/articles/react-state-management',
    categories: ['React'],
  },
]

export default function BlogSection() {
  const [category, setCategory] = useState<CategoryType>('All')
  
  // 記事のフィルタリング
  const filteredArticles = category === 'All'
    ? articles
    : articles.filter(article => article.categories.includes(category))
  
  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Technical Blog</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Zennで公開している技術記事をピックアップしています。
          </p>
        </motion.div>
        
        {/* カテゴリフィルター */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {(['All', 'React', 'Next.js', 'TypeScript', 'AI'] as CategoryType[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  category === cat 
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        {/* 記事一覧 */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                href={article.url} 
                target="_blank"
                className="block bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                  {/* 記事画像（実際の実装では存在する画像パスを指定） */}
                  <div className="text-gray-500 dark:text-gray-400 text-sm">Article Image Placeholder</div>
                </div>
                
                <div className="p-6">
                  {/* カテゴリ */}
                  <div className="flex gap-2 mb-4">
                    {article.categories.map((cat) => (
                      <span 
                        key={cat} 
                        className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs px-2 py-1 rounded"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 dark:text-gray-400">{article.publishedAt}</span>
                    <span className="text-primary-600 dark:text-primary-400">記事を読む →</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        {filteredArticles.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            選択したカテゴリの記事がありません。
          </div>
        )}
        
        <div className="mt-12 text-center">
          <Link 
            href="https://zenn.dev/username" 
            target="_blank"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
          >
            <span>すべての記事を見る</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
} 