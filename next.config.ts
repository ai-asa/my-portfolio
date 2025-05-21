import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const withMDX = createMDX({
  // MDXの設定オプション
  extension: /\.mdx?$/,
  options: {
    // MDX Remarksプラグイン等が必要ならここに追加
  },
});

const nextConfig: NextConfig = {
  // 多言語対応設定
  i18n: {
    locales: ["ja", "en"],
    defaultLocale: "ja",
  },

  // MDXをページとして扱うための設定
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],

  // その他の設定
  reactStrictMode: true,
  images: {
    domains: ["github.com", "zenn.dev"], // 画像最適化対象ドメイン
  },
};

// withMDXでラップして、設定を適用
export default withMDX(nextConfig);
