<script setup lang="ts">
import { event } from "~/data/event";

withDefaults(defineProps<{ ticket?: boolean }>(), { ticket: true });
</script>

<template>
  <header class="border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur sticky top-0 z-10">
    <div class="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
      <a
        :href="event.siteUrl"
        class="text-sm font-bold tracking-widest text-zinc-100 hover:text-white"
      >
        {{ event.headerLabel }}
      </a>
      <a
        v-if="ticket"
        :href="event.ticketUrl"
        target="_blank"
        rel="noopener"
        class="rounded-full border border-zinc-100 px-4 py-1.5 text-xs font-bold tracking-widest hover:bg-zinc-100 hover:text-zinc-950 transition-colors"
      >
        GET TICKET
      </a>
    </div>
  </header>
</template>
