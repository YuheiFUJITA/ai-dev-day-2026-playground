<script setup lang="ts">
import { communities, communityPath } from "~/data/communities";
import { session } from "~/data/session";

definePageMeta({ layout: false });

const pages = [
  { label: "Session", title: session.fullTitle, to: session.path },
  ...communities.map((community) => ({
    label: "Community",
    title: community.name,
    to: communityPath(community),
  })),
];

usePageSeo(
  "AI Dev Day 2026 Playground",
  "AI Dev Day 2026 のセッション・コミュニティ紹介ページ集。",
);
</script>

<template>
  <div class="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
    <SiteHeader :ticket="false" />

    <main class="mx-auto max-w-5xl px-6 pt-20 pb-24">
      <PageHero title="Playground" subtitle="AI Dev Day 2026 Playground" />

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
