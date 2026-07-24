<script setup lang="ts">
const pages = [
  {
    label: "Session",
    title: "GitHub dockyard Radio & VS Code Monthly Update @ AI Dev Day 2026",
    to: "/sessions/github-dockyard-vs-code-meetup",
  },
  {
    label: "Community",
    title: "GitHub dockyard",
    to: "/communities/github-dockyard",
  },
  {
    label: "Community",
    title: "VS Code Meetup",
    to: "/communities/vs-code-meetup",
  },
];

useHead({
  title: "AI Dev Day 2026 Playground",
  meta: [
    {
      name: "description",
      content: "AI Dev Day 2026 のセッション・コミュニティ紹介ページ集。",
    },
  ],
});
</script>

<template>
  <div class="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
    <header class="border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur sticky top-0 z-10">
      <div class="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="https://aidevday.com/"
          class="text-sm font-bold tracking-widest text-zinc-100 hover:text-white"
        >
          AI DEV DAY / 2026.07.24
        </a>
      </div>
    </header>

    <main class="mx-auto max-w-5xl px-6 pt-20 pb-24">
      <p class="text-6xl font-black uppercase tracking-tight text-zinc-100 sm:text-8xl">
        Playground
      </p>
      <p class="mt-2 text-sm tracking-widest text-zinc-400">AI Dev Day 2026 Playground</p>

      <ul class="mt-14 space-y-4">
        <li v-for="page in pages" :key="page.to">
          <NuxtLink
            :to="page.to"
            class="block rounded-2xl border border-zinc-800 bg-zinc-900/40 px-6 py-5 transition-colors hover:border-zinc-600 hover:bg-zinc-900"
          >
            <span class="text-xs font-bold uppercase tracking-widest text-emerald-300">
              {{ page.label }}
            </span>
            <span class="mt-1 block text-lg font-bold text-white">
              {{ page.title }}
            </span>
          </NuxtLink>
        </li>
      </ul>
    </main>
  </div>
</template>
