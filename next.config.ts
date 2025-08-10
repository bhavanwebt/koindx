import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

// const nextConfig = {
//   webpack(config:any) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ["@svgr/webpack"],
//     });
//     return config;
//   },
// };

// module.exports = nextConfig;

// const nextConfig = {
//   webpack(config:any) {
//     // Remove existing svg handling
//     const fileLoaderRule = config.module.rules.find((rule:any) =>
//       rule.test?.test?.(".svg")
//     );
//     if (fileLoaderRule) {
//       fileLoaderRule.exclude = /\.svg$/i;
//       fileLoaderRule.exclude = /\.png$/i;
//     }

//     // Add new rule to load svg as URL
//     config.module.rules.push({
//       test: /\.svg$/i,
//       type: "asset/resource",
//     });

//     return config;
//   },
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
// const nextConfig = {
//   webpack(config) {
//     // Exclude svg from the default Next.js loader
//     const fileLoaderRule = config.module.rules.find((rule) =>
//       rule.test?.test?.(".svg")
//     );
//     if (fileLoaderRule) {
//       fileLoaderRule.exclude = /\.svg$/i;
//     }

//     // Add custom rules for image files (SVG, PNG, JPG, JPEG, GIF, WEBP)
//     config.module.rules.push({
//       test: /\.(svg|png|jpe?g|gif|webp)$/i,
//       type: "asset/resource",
//     });

//     return config;
//   },
// };

// module.exports = nextConfig;
