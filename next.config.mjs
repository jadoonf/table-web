
import { rehypeCodeDefaultOptions } from "fumadocs-core/mdx-plugins";
import { remarkInstall } from "fumadocs-docgen";
import { transformerTwoslash } from "fumadocs-twoslash";
import { JsxEmit, ModuleResolutionKind } from "typescript";
import { createMDX } from 'fumadocs-mdx/next';
// const withMDX = createMDX({
// 	mdxOptions: {
// 		rehypeCodeOptions: {
// 			transformers: [
// 				...rehypeCodeDefaultOptions.transformers,
// 				transformerTwoslash({
// 					twoslashOptions: {
// 						compilerOptions: {
// 							moduleResolution: ModuleResolutionKind.Bundler,
// 							jsx: JsxEmit.React,
// 						},
// 					},
// 				}),
// 			],
// 		},
// 		remarkPlugins: [
// 			[
// 				remarkInstall,
// 				{
// 					persist: {
// 						id: "persist-install",
// 					},
// 				},
// 			],
// 		],
// 	},
// });
const withMDX = createMDX();
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "img.shields.io",
      },
    ],
  },
  experimental: {
    serverActions: {
      // edit: updated to new key. Was previously `allowedForwardedHosts`
      allowedOrigins: ["localhost:3000"],
    },
  },
  compiler: {
    styledComponents: true,
  },
};

export default withMDX(nextConfig);
