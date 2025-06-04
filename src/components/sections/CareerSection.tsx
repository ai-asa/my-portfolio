"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface CareerItem {
  year: string
  title: string
  description: string
  skills?: string[]
}

const careerData: CareerItem[] = [
  {
    year: "2023",
    title: "Pythonプログラミング学習開始",
    description: "機械学習・Web開発の基礎を習得。個人プロジェクトとしてAIライブストリームシステムを開発。",
    skills: ["Python", "Machine Learning", "Web Development"]
  },
  {
    year: "2024",
    title: "システムエンジニア副業開始",
    description: "LINE連携AIチャットボット開発、AI活用学習サイト構築、その他Web開発案件を担当。",
    skills: ["LINE Messaging API", "Firebase", "React", "Node.js"]
  },
  {
    year: "2025",
    title: "フルスタックエンジニアとして活動",
    description: "AI × Web開発の案件に従事。企業向けのAIチャットボット、RAGシステム、データ分析ダッシュボードなどを開発。",
    skills: ["Next.js", "TypeScript", "Python", "FastAPI", "Gemini API"]
  }
]

export default function CareerSection() {
  return (
    <section id="career" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            経歴
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            非IT職種からキャリアチェンジし、夜間・週末の学習を通じて
            フルスタックエンジニアとして成長してきました
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* タイムライン */}
            <div className="absolute left-0 md:left-20 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>

            {careerData.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-4 md:gap-8 mb-8 last:mb-0"
              >
                {/* 年代 */}
                <div className="flex-shrink-0 w-16 md:w-20">
                  <div className="relative">
                    <Badge 
                      variant="outline" 
                      className="bg-background border-2 border-primary"
                    >
                      {item.year}
                    </Badge>
                    {/* パルスアニメーション（最新年度） */}
                    {index === careerData.length - 1 && (
                      <div className="absolute -inset-1 bg-primary/20 rounded-full animate-ping"></div>
                    )}
                  </div>
                </div>

                {/* コンテンツ */}
                <Card className="flex-1 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {item.description}
                    </p>
                    {item.skills && (
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 背景装飾 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}