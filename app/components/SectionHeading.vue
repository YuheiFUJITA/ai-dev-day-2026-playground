<script setup lang="ts">
defineProps<{ kicker: string; title?: string }>();
</script>

<template>
  <p class="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">{{ kicker }}</p>
  <h2 v-if="title" class="mt-3 text-2xl font-bold text-white">{{ title }}</h2>
</template>
