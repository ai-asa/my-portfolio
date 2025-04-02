'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { locales } from '@/lib/i18n';
import type { Locale } from '@/app/[locale]/layout';

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  
  // 現在のパスから言語部分を除去
  const pathnameWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
  
  return (
    <div className="flex space-x-2">
      {locales.map((l) => (
        <Link
          key={l}
          href={l === 'ja' ? pathnameWithoutLocale : `/${l}${pathnameWithoutLocale}`}
          className={`px-2 py-1 rounded-md ${
            locale === l
              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100'
              : 'hover:bg-gray-100 dark:hover:bg-gray-800'
          } transition-colors`}
        >
          {l === 'ja' ? '🇯🇵' : '🇺🇸'}
        </Link>
      ))}
    </div>
  );
}
