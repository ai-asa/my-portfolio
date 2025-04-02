'use client';

import Link from 'next/link';
import { createT, defaultLocale } from '@/lib/i18n';
import type { Locale } from '@/app/[locale]/layout';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header({ locale }: { locale: Locale }) {
  const t = createT(locale || defaultLocale, 'common');
  
  const navItems = [
    { key: 'home', href: `/${locale}` },
    { key: 'about', href: `/${locale}#about` },
    { key: 'skills', href: `/${locale}#skills` },
    { key: 'projects', href: `/${locale}#projects` },
    { key: 'articles', href: `/${locale}#articles` },
    { key: 'contact', href: `/${locale}#contact` },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={`/${locale}`} className="text-xl font-bold">
          {t('title')}
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              {t(`nav.${item.key}`)}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          <LanguageSwitcher locale={locale} />
          <ThemeToggle locale={locale} />
        </div>
      </div>
    </header>
  );
}
