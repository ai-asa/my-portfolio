"use client"

import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import Image from 'next/image'

// 言語使用割合のサンプルデータ
const languageData = [
  { name: 'TypeScript', value: 35, color: '#3178c6' },
  { name: 'Python', value: 30, color: '#3776ab' },
  { name: 'JavaScript', value: 15, color: '#f7df1e' },
  { name: 'HTML/CSS', value: 10, color: '#e34c26' },
  { name: 'C++', value: 5, color: '#00599c' },
  { name: 'Other', value: 5, color: '#8a8a8a' },
]

// スキルセット
const skills = [
  {
    category: '言語',
    items: ['TypeScript', 'Python', 'JavaScript', 'C++']
  },
  {
    category: 'フレームワーク',
    items: ['Next.js', 'React', 'FastAPI', 'Electron', 'Node.js']
  },
  {
    category: 'データベース',
    items: ['Firebase Firestore', 'MongoDB', 'Supabase']
  },
  {
    category: 'AI / ML',
    items: ['OpenAI API', 'Gemini API', 'RAG', 'ベクトル検索', 'チャットボットシステム']
  },
  {
    category: 'クラウド',
    items: ['Google Cloud Platform', 'Firebase', 'Vercel']
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Skills & Stats</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            使用言語、技術、フレームワークと GitHub 活動状況
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* スキル一覧 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6">技術スタック</h3>
            
            <div className="space-y-6">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <h4 className="text-lg font-medium mb-2">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span 
                        key={skill}
                        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* 言語グラフと GitHub 統計 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            {/* 言語使用割合 */}
            <div>
              <h3 className="text-xl font-semibold mb-4">言語使用割合</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={languageData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {languageData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* GitHub コントリビュートグラフ */}
            <div>
              <h3 className="text-xl font-semibold mb-4">GitHub 活動状況</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                366日間の貢献状況 (プレースホルダ画像)
              </p>
              
              {/* ここでは実際の GitHub コントリビューショングラフはモックとして表示 */}
              {/* 実際の実装では、GitHub API または SVG を取得して表示する */}
              <div className="bg-white dark:bg-gray-800 rounded-md p-3 relative h-32 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-sm text-gray-500">
                GitHub Contributions Graph (プレースホルダ)
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 