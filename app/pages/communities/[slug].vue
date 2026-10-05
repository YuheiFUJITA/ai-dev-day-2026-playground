<script setup lang="ts">
import { findCommunity } from "~/data/communities";

const route = useRoute();
const community = findCommunity(route.params.slug as string);

if (!community) {
  throw createError({ statusCode: 404, statusMessage: "Community not found", fatal: true });
}

const accent = accentClasses[community.accent];
const memberColumns = community.members.length >= 3 ? "sm:grid-cols-3" : "sm:grid-cols-2";

usePageSeo(`${community.name} | Community | AI Dev Day 2026`, community.seoDescription);
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="mx-auto max-w-5xl px-6 pt-20 pb-16">
      <PageHero title="Community" subtitle="コミュニティ" />

      <div class="mt-14 flex flex-col gap-10 sm:flex-row sm:items-start">
        <img
          :src="community.image"
          :alt="community.name"
          class="aspect-square w-full max-w-xs rounded-2xl border border-zinc-800 object-cover"
          loading="lazy"
        />
        <div>
          <h1 class="text-3xl font-extrabold leading-snug text-white sm:text-5xl">
            {{ community.name }}
          </h1>
          <p class="mt-3 text-xs font-bold tracking-widest text-zinc-500">
            SINCE {{ community.founded }}
          </p>
          <p class="mt-6 max-w-2xl leading-relaxed text-zinc-300">
            {{ community.description }}
          </p>
          <a
            :href="community.hashtag.url"
            target="_blank"
            rel="noopener"
            class="mt-6 inline-block text-sm font-semibold"
            :class="accent.link"
          >
            {{ community.hashtag.label }}
          </a>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="mx-auto max-w-5xl px-6 pb-16">
      <div class="grid gap-4 sm:grid-cols-3">
        <div
          v-for="stat in community.stats"
          :key="stat.label"
          class="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 text-center"
        >
          <p class="text-3xl font-black" :class="accent.text">{{ stat.value }}</p>
          <p class="mt-2 text-xs font-bold tracking-widest text-zinc-400">
            {{ stat.label }}
          </p>
        </div>
      </div>
    </section>

    <!-- Sections below alternate their background automatically -->
    <div
      class="[&>section]:border-t [&>section]:border-zinc-800/60 [&>section:nth-child(odd)]:bg-zinc-900/30"
    >
      <!-- Concept -->
      <section v-if="community.concept">
        <div class="mx-auto max-w-5xl px-6 py-20">
          <SectionHeading kicker="Concept" :title="community.concept.title" />
          <div class="mt-6 max-w-3xl space-y-4 leading-relaxed text-zinc-300">
            <p v-for="paragraph in community.concept.paragraphs" :key="paragraph">
              {{ paragraph }}
            </p>
          </div>
        </div>
      </section>

      <!-- Activities -->
      <section>
        <div class="mx-auto max-w-5xl px-6 py-20">
          <SectionHeading kicker="Activities" title="主な活動" />
          <div class="mt-10 grid gap-8 md:grid-cols-2">
            <article
              v-for="activity in community.activities"
              :key="activity.title"
              class="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition-colors hover:border-zinc-700"
            >
              <p class="text-xs font-bold tracking-widest" :class="accent.text">
                {{ activity.badge }}
              </p>
              <h3 class="mt-3 text-xl font-bold text-white">{{ activity.title }}</h3>
              <p class="mt-4 leading-relaxed text-zinc-300">
                {{ activity.description }}
              </p>
              <LinkPills :links="activity.links" class="mt-5" />
            </article>
          </div>
        </div>
      </section>

      <!-- History -->
      <section>
        <div class="mx-auto max-w-5xl px-6 py-20">
          <SectionHeading kicker="History" :title="community.history.title" />
          <ol class="mt-10 space-y-6 border-l border-zinc-800 pl-6">
            <li v-for="entry in community.history.entries" :key="entry.date">
              <p class="text-sm font-bold tracking-widest" :class="accent.text">
                {{ entry.date }}
              </p>
              <p class="mt-1 leading-relaxed text-zinc-300">{{ entry.text }}</p>
            </li>
          </ol>
        </div>
      </section>

      <!-- Members -->
      <section>
        <div class="mx-auto max-w-5xl px-6 py-20">
          <SectionHeading kicker="Members" title="運営メンバー" />
          <div class="mt-10 grid gap-8" :class="memberColumns">
            <article
              v-for="member in community.members"
              :key="member.handle"
              class="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8"
            >
              <h3 class="text-xl font-bold text-white">
                {{ member.name }}
                <a
                  :href="member.url"
                  target="_blank"
                  rel="noopener"
                  class="ml-2 text-sm font-normal text-zinc-500 hover:text-zinc-300"
                >
                  {{ member.handle }}
                </a>
              </h3>
              <p class="mt-4 leading-relaxed text-zinc-400">{{ member.bio }}</p>
            </article>
          </div>
        </div>
      </section>

      <!-- Links -->
      <section>
        <div class="mx-auto max-w-5xl px-6 py-20">
          <SectionHeading kicker="Links" />
          <LinkPills :links="community.links" size="md" class="mt-8" />
        </div>
      </section>

      <!-- Session CTA -->
      <section>
        <SessionCta />
      </section>
    </div>
  </div>
</template>
