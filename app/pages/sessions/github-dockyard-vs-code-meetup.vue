<script setup lang="ts">
import { communityPath } from "~/data/communities";
import { event } from "~/data/event";
import { session } from "~/data/session";

usePageSeo(`${session.fullTitle} | Session | AI Dev Day 2026`, session.seoDescription);
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="mx-auto max-w-5xl px-6 pt-20 pb-16">
      <PageHero title="Session" subtitle="セッション" />

      <div class="mt-14 flex flex-wrap items-center gap-4">
        <span
          class="rounded-full border border-emerald-400/60 px-4 py-1 text-xs font-bold tracking-widest text-emerald-300"
        >
          {{ session.track }}
        </span>
        <span class="text-sm font-semibold tracking-widest text-zinc-300">{{ session.time }}</span>
      </div>

      <h1
        class="mt-6 max-w-4xl text-3xl font-extrabold leading-snug text-white sm:text-5xl sm:leading-tight"
      >
        {{ session.fullTitle }}
      </h1>

      <div class="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-zinc-400">
        <a
          v-for="hashtag in session.hashtags"
          :key="hashtag.url"
          :href="hashtag.url"
          target="_blank"
          rel="noopener"
          class="hover:text-white"
        >
          {{ hashtag.label }}
        </a>
      </div>
    </section>

    <!-- Description -->
    <section class="mx-auto max-w-5xl px-6 pb-20">
      <div class="grid gap-8 md:grid-cols-2">
        <div
          v-for="part in session.parts"
          :key="part.title"
          class="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition-colors hover:border-zinc-700"
        >
          <p
            class="text-xs font-bold tracking-widest"
            :class="accentClasses[part.community.accent].text"
          >
            {{ part.label }}
          </p>
          <h2 class="mt-3 text-xl font-bold text-white">{{ part.title }}</h2>
          <p class="mt-4 leading-relaxed text-zinc-300">{{ part.description }}</p>
          <a
            v-if="part.link"
            :href="part.link.url"
            target="_blank"
            rel="noopener"
            class="mt-4 inline-block text-sm font-semibold"
            :class="accentClasses[part.community.accent].link"
          >
            {{ part.link.label }}
          </a>
        </div>
      </div>
    </section>

    <!-- Speakers -->
    <section class="border-t border-zinc-800/60 bg-zinc-900/30">
      <div class="mx-auto max-w-5xl px-6 py-20">
        <SectionHeading kicker="Speaker" />
        <div class="mt-10 grid gap-10 sm:grid-cols-2">
          <article
            v-for="speaker in session.speakers"
            :key="speaker.community.slug"
            class="flex flex-col"
          >
            <img
              :src="speaker.community.image"
              :alt="speaker.community.name"
              class="aspect-square w-full max-w-xs rounded-2xl border border-zinc-800 object-cover"
              loading="lazy"
            />
            <h2 class="mt-6 text-2xl font-bold text-white">{{ speaker.community.name }}</h2>
            <p class="mt-3 leading-relaxed text-zinc-400">{{ speaker.description }}</p>
            <p class="mt-3 text-sm leading-relaxed text-zinc-500">{{ speaker.note }}</p>
            <div class="mt-5">
              <p class="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500">Members</p>
              <ul class="mt-2 flex flex-wrap gap-x-5 gap-y-1">
                <li
                  v-for="member in speaker.community.members"
                  :key="member.handle"
                  class="text-sm"
                >
                  <a
                    :href="member.url"
                    target="_blank"
                    rel="noopener"
                    class="font-semibold text-zinc-300 hover:text-white"
                  >
                    {{ member.name }}
                    <span class="font-normal text-zinc-500">{{ member.handle }}</span>
                  </a>
                </li>
              </ul>
            </div>
            <LinkPills :links="speaker.links" class="mt-4" />
            <NuxtLink
              :to="communityPath(speaker.community)"
              class="mt-6 inline-block text-sm font-semibold text-emerald-300 hover:text-emerald-200"
            >
              コミュニティの詳細を見る →
            </NuxtLink>
          </article>
        </div>
      </div>
    </section>

    <!-- Event info -->
    <section class="border-t border-zinc-800/60">
      <div class="mx-auto max-w-5xl px-6 py-20 text-center">
        <p class="text-3xl font-black uppercase tracking-tight sm:text-4xl">{{ event.name }}</p>
        <p class="mt-4 text-sm tracking-widest text-zinc-400">{{ event.date }}</p>
        <p class="mt-1 text-sm tracking-widest text-zinc-400">{{ event.venue }}</p>
        <p class="mt-6 text-sm italic text-zinc-500">{{ event.tagline }}</p>
        <a
          :href="event.ticketUrl"
          target="_blank"
          rel="noopener"
          class="mt-10 inline-block rounded-full bg-zinc-100 px-8 py-3 text-sm font-bold tracking-widest text-zinc-950 transition-colors hover:bg-white"
        >
          GET TICKET
        </a>
      </div>
    </section>
  </div>
</template>
