"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ChevronDown } from 'lucide-react'

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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* 左側：メインコンテンツ */}
          <div className="order-2 lg:order-1">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              AI×システム開発の<br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                フルスタックエンジニア
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl mb-8 text-muted-foreground"
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
              <Button asChild size="lg">
                <Link href="#projects">
                  プロジェクトを見る
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#contact">
                  お問い合わせ
                </Link>
              </Button>
            </motion.div>
          </div>
          
          {/* 右側：プロフィールカード */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card className="relative w-full max-w-md backdrop-blur-sm bg-card/50 border-muted">
              <CardContent className="p-6">
                {/* アイコン画像 */}
                <div className="flex justify-center mb-4">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-primary to-secondary p-1">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <span className="text-4xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                        KA
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* 名前 */}
                <h2 className="text-2xl font-bold text-center mb-2">
                  浅尾 一樹
                </h2>
                
                {/* 自己紹介 */}
                <p className="text-center text-muted-foreground mb-4">
                  フルスタックエンジニアとして、AIとWebを融合させた革新的なソリューションを提供しています。ユーザー体験を第一に考えた開発を心がけています。
                </p>
                
                {/* 専門分野タグ */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {['AI開発', 'Web開発', 'システム設計', 'UI/UX'].map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
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