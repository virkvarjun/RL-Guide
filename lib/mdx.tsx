import fs from "fs";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";
import { mdxComponents } from "@/components/mdx";
import { contentPath } from "./chapters";

/** KaTeX macros used throughout the book — keep in sync with /notation. */
const katexMacros = {
  "\\E": "\\mathbb{E}",
  "\\R": "\\mathbb{R}",
  "\\N": "\\mathbb{N}",
  "\\argmax": "\\operatorname*{arg\\,max}",
  "\\argmin": "\\operatorname*{arg\\,min}",
  "\\KL": "D_{\\mathrm{KL}}",
};

/**
 * Compile one chapter's MDX (from content/<slug>.mdx) to a React element,
 * fully at build time. Math renders server-side via KaTeX; code highlights
 * via rehype-pretty-code (shiki, light theme, no background so the card
 * color from globals.css shows through).
 */
export async function renderChapter(slug: string): Promise<React.ReactNode> {
  const source = fs.readFileSync(contentPath(slug), "utf8");

  const { default: MDXContent } = await evaluate(source, {
    ...runtime,
    remarkPlugins: [remarkMath, remarkGfm],
    rehypePlugins: [
      [rehypeKatex, { macros: katexMacros, strict: "ignore", trust: true }],
      [rehypePrettyCode, { theme: "github-light", keepBackground: false }],
    ],
  });

  return <MDXContent components={mdxComponents} />;
}
