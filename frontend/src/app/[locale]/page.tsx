import { createT, defaultLocale } from '@/lib/i18n';
import type { Locale } from './layout';
import Image from 'next/image';

export default async function Home({
  params,
}: {
  params: { locale: Locale };
}) {
  // パラメータを非同期で使用
  const { locale } = await params;
  const t = createT(locale || defaultLocale, 'home');
  const aboutT = createT(locale || defaultLocale, 'about');
  const skillsT = createT(locale || defaultLocale, 'skills');
  const projectsT = createT(locale || defaultLocale, 'projects');
  const articlesT = createT(locale || defaultLocale, 'articles');
  const contactT = createT(locale || defaultLocale, 'contact');

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {t('greeting')} <span className="text-blue-600 dark:text-blue-400">{t('role')}</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                {t('description')}
              </p>
              <a
                href="#about"
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                {t('cta')}
              </a>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400">
                <Image
                  src="https://placehold.co/400"
                  alt="Profile"
                  fill
                  sizes="(max-width: 768px) 256px, 320px"
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">{aboutT('title')}</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {aboutT('description')}
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">{skillsT('title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{skillsT('frontend')}</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  React / Next.js
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  TypeScript
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Tailwind CSS
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{skillsT('backend')}</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Python / FastAPI
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Node.js
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Firebase
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{skillsT('devops')}</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Docker
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  GitHub Actions
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  AWS / Vercel
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">{projectsT('title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                <Image
                  src="https://placehold.co/600x300"
                  alt="Project 1"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">ポートフォリオサイト</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Next.jsとFastAPIを使用したポートフォリオサイト。
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 rounded-md text-sm">
                    Next.js
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 rounded-md text-sm">
                    FastAPI
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 rounded-md text-sm">
                    Tailwind CSS
                  </span>
                </div>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {projectsT('viewProject')}
                  </a>
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {projectsT('viewCode')}
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                <Image
                  src="https://placehold.co/600x300"
                  alt="Project 2"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">タスク管理アプリ</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Reactとバックエンドにはノードを使用したタスク管理アプリケーション。
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 rounded-md text-sm">
                    React
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 rounded-md text-sm">
                    Node.js
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 rounded-md text-sm">
                    MongoDB
                  </span>
                </div>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {projectsT('viewProject')}
                  </a>
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {projectsT('viewCode')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">{articlesT('title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Next.jsとFastAPIでポートフォリオサイトを作る
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                モダンなフロントエンドとバックエンドを組み合わせたポートフォリオサイトの作り方について解説します。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 rounded-md text-sm">
                  Next.js
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 rounded-md text-sm">
                  FastAPI
                </span>
              </div>
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {articlesT('readMore')}
              </a>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Firebaseを使ったサーバーレスアプリケーション開発
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Firebaseを活用したサーバーレスアプリケーション開発の利点と実装方法について解説します。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 rounded-md text-sm">
                  Firebase
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 rounded-md text-sm">
                  Serverless
                </span>
              </div>
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {articlesT('readMore')}
              </a>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Tailwind CSSでレスポンシブデザインを実装する
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Tailwind CSSを使用して効率的にレスポンシブデザインを実装する方法について解説します。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 rounded-md text-sm">
                  Tailwind CSS
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 rounded-md text-sm">
                  Responsive Design
                </span>
              </div>
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {articlesT('readMore')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">{contactT('title')}</h2>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {contactT('name')}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {contactT('email')}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {contactT('message')}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors w-full"
              >
                {contactT('send')}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
