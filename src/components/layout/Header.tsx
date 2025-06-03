"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from '@/components/theme-provider'
import { Bars3Icon as MenuIcon, XMarkIcon as XIcon, SunIcon, MoonIcon, GlobeAltIcon as GlobeIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import clsx from 'clsx'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Career', href: '#career' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#blog' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  // スクロール時の背景色変更効果
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const toggleLanguage = () => {
    // 言語切替機能（将来実装）
    console.log('言語切替予定')
  }

  return (
    <header 
      className={clsx(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* ロゴ */}
        <Link 
          href="/" 
          className="font-bold text-xl text-primary-600 dark:text-primary-400"
        >
          Portfolio
        </Link>

        {/* デスクトップナビゲーション */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              {item.name}
            </Link>
          ))}
          
          {/* テーマ切替ボタン */}
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="テーマ切替"
          >
            {theme === 'dark' ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </button>
          
          {/* 言語切替ボタン */}
          <button 
            onClick={toggleLanguage} 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="言語切替"
          >
            <GlobeIcon className="h-5 w-5" />
          </button>
        </nav>

        {/* モバイルメニューボタン */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="メニュー"
          >
            {isMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* モバイルナビゲーション */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-16 inset-x-0 bg-white dark:bg-gray-900 shadow-lg"
        >
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium py-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="flex items-center space-x-4 py-2">
                {/* モバイルのテーマ切替 */}
                <button 
                  onClick={toggleTheme} 
                  className="flex items-center space-x-2 text-sm font-medium"
                >
                  {theme === 'dark' ? (
                    <>
                      <SunIcon className="h-5 w-5" />
                      <span>ライトモード</span>
                    </>
                  ) : (
                    <>
                      <MoonIcon className="h-5 w-5" />
                      <span>ダークモード</span>
                    </>
                  )}
                </button>
                
                {/* モバイルの言語切替 */}
                <button 
                  onClick={toggleLanguage} 
                  className="flex items-center space-x-2 text-sm font-medium"
                >
                  <GlobeIcon className="h-5 w-5" />
                  <span>English</span>
                </button>
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  )
} 