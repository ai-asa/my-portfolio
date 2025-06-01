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
  // Firebase Hosting用の静的エクスポート設定
  output: "export",

  // MDXをページとして扱うための設定
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],

  // その他の設定
  reactStrictMode: true,
  images: {
    domains: ["github.com", "zenn.dev"], // 画像最適化対象ドメイン
    unoptimized: true, // 静的エクスポート時は画像最適化を無効化
  },
};

// withMDXでラップして、設定を適用
export default withMDX(nextConfig);
