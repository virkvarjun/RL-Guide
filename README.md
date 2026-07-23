# RL Bible

A from-scratch, PhD-level guide to reinforcement learning — from bandits and Bellman equations to world models and vision-language-action policies for robots — built as a static Next.js site.

Every chapter is finished, publishable prose with full mathematical derivations (KaTeX), boxed Sutton–Barto-style pseudocode, minimal runnable NumPy/PyTorch implementations (each verified by execution — measured numbers in the text come from real runs), inline SVG diagrams, "check your understanding" boxes, common-pitfall notes, annotated primary-source readings (every link verified), and 5–10 graded exercises.

## Running locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to out/
```

Stack: Next.js (App Router, static export) · Tailwind CSS v4 · MDX compiled at build time · KaTeX (server-rendered) · rehype-pretty-code/Shiki. Design system matches [arjunvirk.com/writing/ml-guide](https://www.arjunvirk.com/writing/ml-guide) (et-book / Palatino serif, warm off-white `#FAFAF8`, 672px column). Chapters live in `content/*.mdx`; the chapter registry is `lib/chapters.ts`; routes follow `/chapter-N-slug`. To nest the guide under an existing site (e.g. `/writing/rl-guide`), set a `basePath` in `next.config.mjs` and adjust the back-link in `app/page.tsx`.

Python code samples need only `numpy torch gymnasium` — see [Appendix C](/environments).

## Contents

**Part 0 — Foundations**
1. [What Reinforcement Learning Is](/chapter-1-what-reinforcement-learning-is)
2. [Bandits & the Exploration Problem](/chapter-2-bandits-and-exploration)
3. [Markov Decision Processes](/chapter-3-markov-decision-processes)

**Part I — Tabular Methods**
4. [Dynamic Programming](/chapter-4-dynamic-programming)
5. [Monte Carlo Methods](/chapter-5-monte-carlo-methods)
6. [Temporal-Difference Learning](/chapter-6-temporal-difference-learning)
7. [n-step Bootstrapping & Eligibility Traces](/chapter-7-nstep-and-eligibility-traces)
8. [Planning & Learning with Tabular Models](/chapter-8-planning-and-tabular-models)

**Part II — Approximation & Deep RL**
9. [Value-Function Approximation](/chapter-9-value-function-approximation)
10. [Deep Q-Networks & the Value-Based Family](/chapter-10-deep-q-networks)
11. [Policy Gradients](/chapter-11-policy-gradients)
12. [Advanced Policy Optimization](/chapter-12-advanced-policy-optimization)
13. [Continuous Control & Maximum-Entropy RL](/chapter-13-continuous-control-and-max-entropy)
14. [Model-Based RL](/chapter-14-model-based-rl)

**Part III — The Modern RL Toolbox**
15. [Exploration in Deep RL](/chapter-15-exploration-in-deep-rl)
16. [Imitation Learning & Inverse RL](/chapter-16-imitation-and-inverse-rl)
17. [Offline (Batch) RL](/chapter-17-offline-rl)
18. [RL as Sequence Modeling](/chapter-18-rl-as-sequence-modeling)
19. [Goal-Conditioned, Hierarchical, Meta & Multi-Agent RL](/chapter-19-goals-hierarchy-meta-and-multi-agent)
20. [RL for Large Language Models](/chapter-20-rl-for-large-language-models)
21. [Theory & Foundations](/chapter-21-theory-and-foundations)

**Part IV — RL for Robotics**
22. [Classical & Deep RL for Robots](/chapter-22-classical-and-deep-rl-for-robots)
23. [World Models](/chapter-23-world-models)
24. [Vision-Language-Action Models](/chapter-24-vision-language-action-models)
25. [Frontier, Synthesis & Open Problems](/chapter-25-frontier-synthesis-open-problems)

**Appendices**
- A. [Notation & Conventions](/notation)
- B. [Math Refresher](/math-refresher)
- C. [Environments & Code Setup](/environments)
- D. [Annotated Bibliography](/bibliography)

## Reading paths

- **Cover to cover** (the intended path): Parts 0 → I → II → III → IV; every concept is introduced before it is used.
- **Fast track to deep RL**: 1 → 3 → 6 → 9 → 10 → 11 → 12 → 13, backfilling as needed.
- **Robotics-first**: 22 → 25 as a survey, then backfill via each chapter's explicit cross-references.
- **The book in 25 papers**: the curated reading path in [Chapter 25, §8](/chapter-25-frontier-synthesis-open-problems).

built with next.js in waterloo, 2026
