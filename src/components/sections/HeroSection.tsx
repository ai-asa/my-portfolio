"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center"
    >
      {/* グラデーション背景 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* プロフィールとタイトル */}
          <div className="flex items-center gap-8 mb-12">
            {/* アイコン */}
            <motion.div
              className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-gradient-to-br from-primary to-secondary p-1.5 flex-shrink-0"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <span className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                  KA
                </span>
              </div>
            </motion.div>
            
            {/* 名前と肩書き */}
            <div>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                浅尾 一樹
              </motion.h2>
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                AI×システム開発の<br />
                フルスタックエンジニア
              </motion.h1>
            </div>
          </div>
          
          {/* 詳細説明 */}
          <motion.div 
            className="space-y-4 mb-12 text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p>
              TypeScriptとPythonを駆使し、Next.jsやFastAPIを用いた
              モダンなWeb開発からAI連携システムまで幅広く対応。
              チャットボット開発、RAG構築、AIエージェント実装など、
              最先端のAI技術を実用的なソリューションに落とし込みます。
            </p>
            <p>
              ユーザー体験を第一に、技術と創造性を融合させた
              革新的なソリューションを提供します。
              副業として1年半の実績を積み重ね、
              フルスタックエンジニアとして活動中。
            </p>
          </motion.div>
          
          {/* CTAボタン */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button asChild size="lg" className="text-base px-8 py-6">
              <Link href="#projects">
                プロジェクトを見る
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 py-6">
              <Link href="#contact">
                お問い合わせ
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* スクロールダウンインジケータ */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => {
            document.getElementById('career')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <span className="text-sm mb-2 text-muted-foreground">スクロール</span>
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  )
} 