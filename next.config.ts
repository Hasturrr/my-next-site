import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  output: 'export',
  basePath: isProd ? '/my-next-site' : '',
  assetPrefix: isProd ? '/my-next-site/' : '',

  images: { unoptimized: true },
};

export default nextConfig;
