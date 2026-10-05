<script setup lang="ts">
import type { Link } from "~/data/event";

withDefaults(defineProps<{ links: Link[]; size?: "sm" | "md" }>(), { size: "sm" });

const sizeClasses = {
  sm: "px-3 py-1 text-xs",
  md: "px-4 py-1.5 text-sm",
};
</script>

<template>
  <ul class="flex flex-wrap gap-3">
    <li v-for="link in links" :key="link.url">
      <a
        :href="link.url"
        target="_blank"
        rel="noopener"
        class="inline-block rounded-full border border-zinc-700 font-semibold text-zinc-300 transition-colors hover:border-zinc-400 hover:text-white"
        :class="sizeClasses[size]"
      >
        {{ link.label }}
      </a>
    </li>
  </ul>
</template>
