"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronDown, MessageCircle } from 'lucide-react'

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16"
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
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* プロフィールとタイトル */}
          <div className="flex items-start gap-6 mb-8">
            {/* アイコン */}
            <motion.div
              className="relative w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-primary to-secondary p-1 flex-shrink-0"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <span className="text-2xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                  KA
                </span>
              </div>
            </motion.div>
            
            {/* 名前と肩書き */}
            <div>
              <motion.h2 
                className="text-2xl font-bold mb-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                浅尾 一樹
              </motion.h2>
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                AI×システム開発の<br className="md:hidden" />
                フルスタックエンジニア
              </motion.h1>
            </div>
          </div>
          
          {/* 詳細説明 */}
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            TypeScriptとPythonを駆使し、Next.jsやFastAPIを用いたモダンなWeb開発からAI連携システムまで幅広く対応。
            ユーザー体験を第一に、技術と創造性を融合させた革新的なソリューションを提供します。
          </motion.p>
          
          {/* CTAボタン */}
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button asChild size="lg" className="min-w-[160px]">
              <Link href="#projects">
                プロジェクトを見る
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-w-[140px]">
              <Link href="#contact">
                お問い合わせ
              </Link>
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="min-w-[140px]"
              onClick={() => {
                // TODO: チャットボット機能の実装
                alert('チャットボット機能は現在開発中です')
              }}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              AIに質問
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