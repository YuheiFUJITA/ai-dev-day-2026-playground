<script setup lang="ts">
import { event } from "~/data/event";
</script>

<template>
  <footer class="border-t border-zinc-800/60">
    <div
      class="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-xs text-zinc-500"
    >
      <a :href="event.hashtag.url" target="_blank" rel="noopener" class="hover:text-zinc-300">
        {{ event.hashtag.label }}
      </a>
      <p>© 2026 AI Dev Day.</p>
    </div>
  </footer>
</template>
