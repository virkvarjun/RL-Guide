import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { availableChapters, PARTS } from "@/lib/chapters";
import Footer from "@/components/Footer";

export default function Home() {
  const avail = availableChapters();

  return (
    <main className="max-w-2xl mx-auto px-6 w-full">
      <div className="pt-12 pb-6">
        <a
          className="inline-flex items-center gap-1 text-xs text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          href="https://www.arjunvirk.com"
        >
          <ArrowLeft size={12} aria-hidden="true" />
          back
        </a>
      </div>

      <header className="pb-8">
        <h1 className="text-3xl font-semibold tracking-tight">RL Bible</h1>
        <p className="mt-3 text-base text-[var(--muted)] leading-relaxed">
          A from-scratch guide to reinforcement learning — bandits, Bellman
          equations, deep RL, offline RL, world models, and
          vision-language-action policies for robots.
        </p>
      </header>

      {PARTS.map((part) => {
        const group = avail.filter((c) => c.part === part);
        if (group.length === 0) return null;
        return (
          <section key={part} className="mb-10">
            <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--muted)] mb-4">
              {part}
            </p>
            <ol className="border-t border-[var(--border)]">
              {group.map((c) => (
                <li key={c.slug} className="border-b border-[var(--border)]">
                  <Link
                    className="group flex items-baseline gap-4 py-3.5"
                    href={`/${c.slug}`}
                  >
                    <span className="text-xs font-mono text-[var(--muted)] shrink-0 w-20">
                      {c.label}
                    </span>
                    <span className="flex-1">
                      <span className="block text-sm font-medium group-hover:underline underline-offset-2">
                        {c.title}
                      </span>
                    </span>
                    <ArrowRight
                      size={14}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-[var(--border)] transition-colors group-hover:text-[var(--foreground)]"
                    />
                  </Link>
                </li>
              ))}
            </ol>
          </section>
        );
      })}

      <Footer />
    </main>
  );
}
