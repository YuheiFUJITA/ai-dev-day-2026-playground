<script setup lang="ts">
defineProps<{ title: string; subtitle: string }>();
</script>

<template>
  <p class="text-6xl font-black uppercase tracking-tight text-zinc-100 sm:text-8xl">
    {{ title }}
  </p>
  <p class="mt-2 text-sm tracking-widest text-zinc-400">{{ subtitle }}</p>
</template>
