import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  availableChapters,
  getChapter,
  hasContent,
  neighbors,
} from "@/lib/chapters";
import { renderChapter } from "@/lib/mdx";
import Footer from "@/components/Footer";

export const dynamicParams = false;

export function generateStaticParams() {
  return availableChapters().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ch = getChapter(slug);
  return ch ? { title: ch.title, description: ch.description } : {};
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ch = getChapter(slug);
  if (!ch || !hasContent(slug)) notFound();

  const { prev, next } = neighbors(slug);
  const content = await renderChapter(slug);

  return (
    <main className="max-w-2xl mx-auto px-6 w-full">
      <div className="pt-12 pb-6 flex items-center justify-between gap-4">
        <Link
          className="inline-flex items-center gap-1 text-xs text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          href="/"
        >
          <ArrowLeft size={12} aria-hidden="true" />
          RL Bible
        </Link>
        <nav className="flex items-center gap-4">
          {prev ? (
            <Link
              className="inline-flex items-center gap-1 text-xs text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              aria-label={`Previous chapter: ${prev.title}`}
              href={`/${prev.slug}`}
            >
              <ArrowLeft size={13} aria-hidden="true" />
              Prev
            </Link>
          ) : (
            <span
              className="inline-flex items-center gap-1 text-xs text-[var(--border)] cursor-default select-none"
              aria-hidden="true"
            >
              <ArrowLeft size={13} aria-hidden="true" />
              Prev
            </span>
          )}
          {next ? (
            <Link
              className="inline-flex items-center gap-1 text-xs text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              aria-label={`Next chapter: ${next.title}`}
              href={`/${next.slug}`}
            >
              Next
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
          ) : (
            <span
              className="inline-flex items-center gap-1 text-xs text-[var(--border)] cursor-default select-none"
              aria-hidden="true"
            >
              Next
              <ArrowRight size={13} aria-hidden="true" />
            </span>
          )}
        </nav>
      </div>

      <article>
        <p className="text-xs text-[var(--muted)] font-mono mb-2">
          RL Bible · {ch.label}
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">{ch.title}</h1>
        <p className="mt-3 text-base text-[var(--muted)] leading-relaxed">
          {ch.description}
        </p>

        <div className="mt-10">{content}</div>

        <nav className="mt-16 pt-6 border-t border-[var(--border)] flex items-center justify-between gap-4 text-sm">
          {prev ? (
            <Link
              className="group flex items-center gap-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              href={`/${prev.slug}`}
            >
              <ArrowLeft size={14} aria-hidden="true" />
              <span>
                <span className="block text-[10px] uppercase tracking-wider">
                  Prev
                </span>
                <span className="block text-sm font-medium">{prev.title}</span>
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              className="group flex items-center gap-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors text-right"
              href={`/${next.slug}`}
            >
              <span>
                <span className="block text-[10px] uppercase tracking-wider">
                  Next
                </span>
                <span className="block text-sm font-medium">{next.title}</span>
              </span>
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </article>

      <Footer />
    </main>
  );
}
