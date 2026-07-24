<script setup lang="ts">
const stats = [
  { label: "開催イベント", value: "72+" },
  { label: "1 Day カンファレンス", value: "3回" },
  { label: "Monthly Update", value: "毎月配信" },
];

const activities = [
  {
    title: "VS Code Monthly Update",
    badge: "定期配信",
    description:
      '毎月月初に、1ヶ月分のVS Codeのリリースノートをわいわいと振り返るYouTube Live配信。2025年2月（v1.97）から継続中。"全"リリースノートを確認するため1回につき2〜3時間以上におよぶこともある名物企画。VS Codeのアップデートと言いつつ、近年はGitHub Copilot機能のアップデートでいっぱい。',
    links: [
      { label: "connpass", url: "https://vscode.connpass.com/" },
      { label: "YouTube", url: "https://www.youtube.com/@vscodemeetup6795" },
    ],
  },
  {
    title: "VS Code Conference Japan",
    badge: "カンファレンス",
    description:
      "コミュニティが主催する1 Dayカンファレンス。2021年（オンライン・887人登録）、2022-2023年（ハイブリッド・基調講演はMicrosoftのAnthony Shaw氏）、2024年（ハイブリッド・基調講演はMarp作者のYuki Hattori氏）と、これまでに3回開催している。",
    links: [
      {
        label: "Conference 2024 特設サイト",
        url: "https://vscodejp.github.io/conference-2024/",
      },
    ],
  },
  {
    title: "VS Code Meetup",
    badge: "ミートアップ",
    description:
      "2019年12月の初回から続くコミュニティの原点。入門編、拡張機能開発、GitHub Copilot、LT大会など毎回テーマを設定して開催。GitHub Copilot回（#25）には500人以上が登録するなど、オンライン・オフライン・ハイブリッドと形式を変えながら継続している。",
    links: [{ label: "connpass", url: "https://vscode.connpass.com/" }],
  },
  {
    title: "ハンズオン・コラボイベント",
    badge: "ハンズオン",
    description:
      "拡張機能開発ハンズオン教材やLSP実装テンプレートをGitHubで公開しているほか、GitHub dockyardとの共催「AI Codingを極める会」や、グローバルイベントの東京版「VS Code Dev Days Tokyo」なども開催している。",
    links: [{ label: "GitHub (vscodejp)", url: "https://github.com/vscodejp" }],
  },
];

const members = [
  {
    name: "Y10A",
    handle: "@Yuhei_FUJITA",
    url: "https://x.com/Yuhei_FUJITA",
    bio: "運営メンバー。VS Code Conference Japan 2022-2023および2024でDev Containers / GitHub Codespacesをテーマに登壇。MeetupのMCも務める。",
  },
  {
    name: "yamachu",
    handle: "@y_chu5",
    url: "https://x.com/y_chu5",
    bio: "運営メンバー。VS Code Dev Days Tokyo 2025では「Essential Techniques for GitHub Copilot in VS Code」をテーマに登壇。",
  },
  {
    name: "74th",
    handle: "@74th",
    url: "https://x.com/74th",
    bio: "運営メンバー。VS Code Monthly Updateの主催者。『Visual Studio Code 実践ガイド』著者。ハンズオン講師やConference登壇など幅広く活動。",
  },
];

const links = [
  { label: "connpass", url: "https://vscode.connpass.com/" },
  { label: "YouTube", url: "https://www.youtube.com/@vscodemeetup6795" },
  { label: "GitHub", url: "https://github.com/vscodejp" },
  { label: "Discord", url: "https://discord.gg/MG6wy7mjRk" },
  { label: "#vscodejp", url: "https://x.com/hashtag/vscodejp" },
];

useHead({
  title: "VS Code Meetup | Community | AI Dev Day 2026",
  meta: [
    {
      name: "description",
      content:
        "Visual Studio Codeの日本コミュニティ「VS Code Meetup」の紹介ページ。毎月のVS Code Monthly UpdateやVS Code Conference Japanなどの活動内容を紹介します。",
    },
  ],
});
</script>

<template>
  <div class="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
    <!-- Header -->
    <header class="border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur sticky top-0 z-10">
      <div class="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="https://aidevday.com/"
          class="text-sm font-bold tracking-widest text-zinc-100 hover:text-white"
        >
          AI DEV DAY / 2026.07.24
        </a>
        <a
          href="https://connpass.com/event/393431/"
          target="_blank"
          rel="noopener"
          class="rounded-full border border-zinc-100 px-4 py-1.5 text-xs font-bold tracking-widest hover:bg-zinc-100 hover:text-zinc-950 transition-colors"
        >
          GET TICKET
        </a>
      </div>
    </header>

    <main>
      <!-- Hero -->
      <section class="mx-auto max-w-5xl px-6 pt-20 pb-16">
        <p class="text-6xl font-black uppercase tracking-tight text-zinc-100 sm:text-8xl">
          Community
        </p>
        <p class="mt-2 text-sm tracking-widest text-zinc-400">コミュニティ</p>

        <div class="mt-14 flex flex-col gap-10 sm:flex-row sm:items-start">
          <img
            src="https://aidevday.com/images/speakers/vs-code-meetup.webp"
            alt="VS Code Meetup"
            class="aspect-square w-full max-w-xs rounded-2xl border border-zinc-800 object-cover"
            loading="lazy"
          />
          <div>
            <h1 class="text-3xl font-extrabold leading-snug text-white sm:text-5xl">
              VS Code Meetup
            </h1>
            <p class="mt-6 max-w-2xl leading-relaxed text-zinc-300">
              強力かつ軽量なオープンソースのコードエディター「Visual Studio
              Code」の日本コミュニティ。2019年12月の発足以来、毎回テーマを設定したミートアップを積み重ね、1
              Dayイベント『VS Code Conference Japan』を複数回開催しているほか、毎月月初に1ヶ月分のVS
              Codeのリリースノートをわいわいと振り返る配信イベント「VS Code Monthly
              Update」を開催している。
            </p>
            <a
              href="https://x.com/hashtag/vscodejp"
              target="_blank"
              rel="noopener"
              class="mt-6 inline-block text-sm font-semibold text-sky-300 hover:text-sky-200"
            >
              #vscodejp
            </a>
          </div>
        </div>
      </section>

      <!-- Stats -->
      <section class="mx-auto max-w-5xl px-6 pb-16">
        <div class="grid gap-4 sm:grid-cols-3">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 text-center"
          >
            <p class="text-3xl font-black text-sky-300">{{ stat.value }}</p>
            <p class="mt-2 text-xs font-bold tracking-widest text-zinc-400">
              {{ stat.label }}
            </p>
          </div>
        </div>
      </section>

      <!-- Activities -->
      <section class="border-t border-zinc-800/60 bg-zinc-900/30">
        <div class="mx-auto max-w-5xl px-6 py-20">
          <p class="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">Activities</p>
          <h2 class="mt-3 text-2xl font-bold text-white">主な活動</h2>
          <div class="mt-10 grid gap-8 md:grid-cols-2">
            <article
              v-for="activity in activities"
              :key="activity.title"
              class="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition-colors hover:border-zinc-700"
            >
              <p class="text-xs font-bold tracking-widest text-sky-300">
                {{ activity.badge }}
              </p>
              <h3 class="mt-3 text-xl font-bold text-white">{{ activity.title }}</h3>
              <p class="mt-4 leading-relaxed text-zinc-300">
                {{ activity.description }}
              </p>
              <ul class="mt-5 flex flex-wrap gap-3">
                <li v-for="link in activity.links" :key="link.url">
                  <a
                    :href="link.url"
                    target="_blank"
                    rel="noopener"
                    class="inline-block rounded-full border border-zinc-700 px-3 py-1 text-xs font-semibold text-zinc-300 transition-colors hover:border-zinc-400 hover:text-white"
                  >
                    {{ link.label }}
                  </a>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <!-- History -->
      <section class="border-t border-zinc-800/60">
        <div class="mx-auto max-w-5xl px-6 py-20">
          <p class="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">History</p>
          <h2 class="mt-3 text-2xl font-bold text-white">コミュニティのあゆみ</h2>
          <ol class="mt-10 space-y-6 border-l border-zinc-800 pl-6">
            <li>
              <p class="text-sm font-bold tracking-widest text-sky-300">2019.12</p>
              <p class="mt-1 leading-relaxed text-zinc-300">
                VS Code Meetup #1 - 初回基礎編を東京で開催。479人が登録する大盛況でスタート。
              </p>
            </li>
            <li>
              <p class="text-sm font-bold tracking-widest text-sky-300">2021.11</p>
              <p class="mt-1 leading-relaxed text-zinc-300">
                初の1 Dayカンファレンス「VS Code Conference Japan
                2021」をオンライン開催（887人登録）。
              </p>
            </li>
            <li>
              <p class="text-sm font-bold tracking-widest text-sky-300">2023.01</p>
              <p class="mt-1 leading-relaxed text-zinc-300">
                「VS Code Conference Japan 2022-2023」をハイブリッド開催。
              </p>
            </li>
            <li>
              <p class="text-sm font-bold tracking-widest text-sky-300">2024.04</p>
              <p class="mt-1 leading-relaxed text-zinc-300">
                「VS Code Conference Japan 2024」をハイブリッド開催（431人登録）。
              </p>
            </li>
            <li>
              <p class="text-sm font-bold tracking-widest text-sky-300">2025.02</p>
              <p class="mt-1 leading-relaxed text-zinc-300">
                「VS Code Monthly Update」（v1.97回）を開始。以降、毎月継続配信中。
              </p>
            </li>
            <li>
              <p class="text-sm font-bold tracking-widest text-sky-300">2026.07</p>
              <p class="mt-1 leading-relaxed text-zinc-300">
                AI Dev Day 2026 のCommunity Boothにて「VS Code Monthly Update
                出張版」をオフライン開催。
              </p>
            </li>
          </ol>
        </div>
      </section>

      <!-- Members -->
      <section class="border-t border-zinc-800/60 bg-zinc-900/30">
        <div class="mx-auto max-w-5xl px-6 py-20">
          <p class="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">Members</p>
          <h2 class="mt-3 text-2xl font-bold text-white">運営メンバー</h2>
          <div class="mt-10 grid gap-8 sm:grid-cols-3">
            <article
              v-for="member in members"
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
      <section class="border-t border-zinc-800/60">
        <div class="mx-auto max-w-5xl px-6 py-20">
          <p class="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">Links</p>
          <ul class="mt-8 flex flex-wrap gap-3">
            <li v-for="link in links" :key="link.url">
              <a
                :href="link.url"
                target="_blank"
                rel="noopener"
                class="inline-block rounded-full border border-zinc-700 px-4 py-1.5 text-sm font-semibold text-zinc-300 transition-colors hover:border-zinc-400 hover:text-white"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </section>

      <!-- Session CTA -->
      <section class="border-t border-zinc-800/60 bg-zinc-900/30">
        <div class="mx-auto max-w-5xl px-6 py-20 text-center">
          <p class="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">
            @ AI Dev Day 2026
          </p>
          <p class="mt-4 text-2xl font-bold text-white sm:text-3xl">
            GitHub dockyard Radio &amp; VS Code Monthly Update
          </p>
          <p class="mt-2 text-sm tracking-widest text-zinc-400">COMMUNITY BOOTH / 15:30 – 16:25</p>
          <NuxtLink
            to="/sessions/github-dockyard-vs-code-meetup"
            class="mt-8 inline-block rounded-full bg-zinc-100 px-8 py-3 text-sm font-bold tracking-widest text-zinc-950 transition-colors hover:bg-white"
          >
            セッション詳細を見る
          </NuxtLink>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="border-t border-zinc-800/60">
      <div
        class="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-xs text-zinc-500"
      >
        <a
          href="https://x.com/hashtag/AIDevDay?f=live"
          target="_blank"
          rel="noopener"
          class="hover:text-zinc-300"
        >
          #AIDevDay
        </a>
        <p>© 2026 AI Dev Day.</p>
      </div>
    </footer>
  </div>
</template>
