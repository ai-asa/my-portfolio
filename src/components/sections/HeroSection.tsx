"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16"
    >
      {/* 背景アニメーション（パーティクル効果） */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="particles-container" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            AI×システム開発の<br />
            <span className="text-primary-600 dark:text-primary-400">フルスタックエンジニア</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            TypeScript、Python、Next.js、FastAPIを用いたWeb開発、AI連携システム、チャットボット開発を得意としています。
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              href="#projects"
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              プロジェクトを見る
            </Link>
            <Link 
              href="#contact"
              className="bg-transparent border border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-gray-800 px-6 py-3 rounded-md font-medium transition-colors"
            >
              お問い合わせ
            </Link>
          </motion.div>
          
          {/* 技術タグ */}
          <motion.div 
            className="mt-12 flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {['TypeScript', 'Python', 'Next.js', 'FastAPI', 'React', 'AI', 'Firebase'].map((tag) => (
              <span 
                key={tag} 
                className="bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* スクロールダウンインジケータ */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center"
        >
          <span className="text-sm mb-2">スクロール</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
} 