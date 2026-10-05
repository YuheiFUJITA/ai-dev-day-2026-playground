<script setup lang="ts">
import { session } from "~/data/session";
</script>

<template>
  <div class="mx-auto max-w-5xl px-6 py-20 text-center">
    <SectionHeading kicker="@ AI Dev Day 2026" />
    <p class="mt-4 text-2xl font-bold text-white sm:text-3xl">{{ session.title }}</p>
    <p class="mt-2 text-sm tracking-widest text-zinc-400">
      {{ session.track }} / {{ session.time }}
    </p>
    <NuxtLink
      :to="session.path"
      class="mt-8 inline-block rounded-full bg-zinc-100 px-8 py-3 text-sm font-bold tracking-widest text-zinc-950 transition-colors hover:bg-white"
    >
      セッション詳細を見る
    </NuxtLink>
  </div>
</template>
