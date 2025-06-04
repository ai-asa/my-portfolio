# TailwindCSS v4 主な変更点

このドキュメントは、TailwindCSS v3からv4への移行時に注意すべき主な変更点をまとめたものです。

## 1. CSSファーストのアプローチ

TailwindCSS v4では、設定ファイル（tailwind.config.js）ではなく、CSSファイル内でカスタマイズを行う「CSSファースト」という新しい方法が導入されました。

### v3（JavaScript設定）:
```js
// tailwind.config.js
module.exports = {
  theme: {
    colors: {
      primary: {
        500: '#0ea5e9',
        // ...
      }
    }
  }
}
```

### v4（CSS設定）:
```css
/* styles.css */
@theme {
  --color-primary-500: #0ea5e9;
  /* ... */
}
```

## 2. インポート構文の変更

TailwindCSS v4では、CSSファイル内でのインポート構文が変更されました。

### v3:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### v4:
```css
@import "tailwindcss";
```

## 3. @themeレイヤーの導入

カスタムカラーを含むすべてのデザインに関する設定は、CSSファイル内の@themeレイヤーで行います。

```css
@theme {
  --color-primary-50: #f0f9ff;
  --color-primary-100: #e0f2fe;
  /* ... */
}
```

## 4. CSS変数によるカラー定義

カスタムカラーは、@themeブロック内で標準のCSS変数（カスタムプロパティ）として定義します。色の変数の命名規則は通常`--color-{名前}-{濃さ}`の形式です。

```css
@theme {
  --color-primary-500: #0ea5e9;
  --color-white: #ffffff;
  --color-gray-700: #374151;
  /* ... */
}
```

## 5. PostCSSプラグインの分離

PostCSSプラグインが別のパッケージに移動しました。

### v3:
```js
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

### v4:
```js
// postcss.config.js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  }
}
```

## 6. Viteとの統合

TailwindCSS v4では、Viteと統合するための専用プラグイン（@tailwindcss/vite）が提供されています。

```js
// vite.config.js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    // ...
    tailwindcss()
  ],
})
```

## 7. @themeブロックの制約

@themeブロック内には、カスタムプロパティ（CSS変数）または@keyframesのみを含めることができます。セレクタ（:rootなど）は使用できません。

### 誤った使用方法:
```css
@theme {
  :root {
    --color-primary-500: #0ea5e9;
  }
}
```

### 正しい使用方法:
```css
@theme {
  --color-primary-500: #0ea5e9;
}
```

## 8. 基本カラーの定義

TailwindCSS v4では、基本カラー（white、gray、redなど）も@themeブロック内でCSS変数として定義する必要があります。

```css
@theme {
  --color-white: #ffffff;
  --color-gray-700: #374151;
  --color-red-500: #ef4444;
  /* ... */
}
```

## 参考リンク

- [TailwindCSS v4 公式ドキュメント](https://tailwindcss.com/)
- [TailwindCSS v4 移行ガイド](https://tailwindcss.com/docs/migration-guide)
