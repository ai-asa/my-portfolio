import { createTranslator } from 'next-intl';
import type { Locale } from '@/app/[locale]/layout';

// 言語設定
export const locales = ['ja', 'en'] as const;
export const defaultLocale: Locale = 'ja';

// 翻訳ヘルパー関数
export function getTranslations(locale: Locale, namespace: string) {
  // 動的インポート
  try {
    return require(`../locales/${locale}.json`)[namespace];
  } catch (error) {
    console.error(`Failed to load translations for ${locale}.${namespace}`, error);
    return {};
  }
}

// 翻訳関数を作成
export function createT(locale: Locale, namespace: string) {
  const messages = getTranslations(locale, namespace);
  return createTranslator({ locale, messages });
}
