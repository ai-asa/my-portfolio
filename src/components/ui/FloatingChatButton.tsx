"use client"

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function FloatingChatButton() {
  const handleClick = () => {
    // TODO: チャットパネルを開く機能の実装
    alert('チャットボット機能は現在開発中です')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleClick()
    }
  }

  return (
    <motion.button
      role="button"
      aria-label="AIアシスタントを開く"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className="fixed bottom-6 right-6 z-50 
        bg-gradient-to-br from-primary to-primary/80 
        text-white rounded-lg shadow-lg 
        hover:scale-105 hover:shadow-xl 
        active:scale-95
        transition-all duration-200
        cursor-pointer
        focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="px-6 py-4 sm:px-8 sm:py-5">
        {/* 上段: アイコンとタイトル */}
        <div className="flex items-center gap-2 mb-1">
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="font-bold text-base sm:text-lg">
            AIアシスタント
          </span>
        </div>
        {/* 下段: 説明文 */}
        <div className="text-xs sm:text-sm opacity-90">
          ポートフォリオについて質問
        </div>
      </div>
    </motion.button>
  )
}