<script setup lang="ts">
const stats = [
  { label: "connpass メンバー", value: "705+" },
  { label: "開催イベント", value: "39+" },
  { label: "Radio 配信", value: "月2回" },
];

const activities = [
  {
    title: "GitHub dockyard Radio",
    badge: "定期配信",
    description:
      "GitHub Changelogを眺めながら雑談する約30分のYouTube Live配信。2025年1月に開始し、現在は月2回（前半/後半）のペースでGitHubの最新アップデートをキャッチアップしている。前身は主催者が個人で配信していた「Catch-up on GitHub updates weekly」。アジェンダはGitHubのDiscussionsで公開されており、耳だけの参加も歓迎。",
    links: [
      {
        label: "アジェンダ (GitHub Discussions)",
        url: "https://github.com/github-dockyard-community/radio/discussions",
      },
      { label: "YouTube", url: "https://www.youtube.com/@github-dockyard" },
    ],
  },
  {
    title: "GitHub dockyard Meetup",
    badge: "オフライン",
    description:
      "GitHub UniverseのレポートやGitHub Actionsのナレッジ共有、GitHub Copilot Enterprise、監査ログなど、毎回テーマを設定して開催するミートアップ。過去には一時保育を用意した回もあり、多様な参加者に開かれた運営を行っている。",
    links: [{ label: "connpass", url: "https://github-dockyard.connpass.com/" }],
  },
  {
    title: "Agentic Workflows を検証する会",
    badge: "ハンズオン",
    description:
      "自然言語でGitHub Actionsを作成できる「Agentic Workflows」をみんなで検証するハンズオンシリーズ。2025年9月の第1回から継続開催しており、第3回は100人が参加するコミュニティ最大規模のイベントとなった。",
    links: [{ label: "connpass", url: "https://github-dockyard.connpass.com/" }],
  },
  {
    title: "Discord コミュニティ",
    badge: "いつでも",
    description:
      "コミュニティのメイン活動スペース。GitHubに関する知見の共有、質問・サポート、雑談をいつでも気軽に行える、開かれたコミュニケーションの場。スキルレベルの制限はなく、初学者からベテランまで歓迎。",
    links: [{ label: "Discord に参加", url: "https://discord.gg/n3q7UrRZTh" }],
  },
];

const members = [
  {
    name: "Kazumi OHIRA",
    handle: "@dz_",
    url: "https://x.com/dz_",
    bio: "GitHub dockyard 発起人・主催者。GitHub Star / GitHub公認トレーナー。女性エンジニアを応援するコミュニティ「Code Polaris」の立ち上げ・運営など、多数の技術コミュニティで活動。",
  },
  {
    name: "Maki NAGASE",
    handle: "@yuma_prog",
    url: "https://x.com/yuma_prog",
    bio: "共同運営者・Radioスピーカー。Microsoft MVP & GitHub Star。JAZUG（Japan Azure User Group）やAI駆動開発勉強会の運営にも携わり、AI Dev Day 2026ではオーガナイザーも務める。",
  },
];

const links = [
  { label: "connpass", url: "https://github-dockyard.connpass.com/" },
  { label: "YouTube", url: "https://www.youtube.com/@github-dockyard" },
  { label: "GitHub", url: "https://github.com/github-dockyard-community" },
  { label: "Discord", url: "https://discord.gg/n3q7UrRZTh" },
  { label: "#GitHubDockyard", url: "https://x.com/hashtag/GitHubDockyard" },
];

useHead({
  title: "GitHub dockyard | Community | AI Dev Day 2026",
  meta: [
    {
      name: "description",
      content:
        "GitHubに関する知見の共有や質問・サポート、雑談を行える日本のコミュニティ「GitHub dockyard」の紹介ページ。月2回のGitHub dockyard Radioをはじめとした活動内容を紹介します。",
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
            src="https://aidevday.com/images/speakers/github-dockyard.webp"
            alt="GitHub dockyard"
            class="aspect-square w-full max-w-xs rounded-2xl border border-zinc-800 object-cover"
            loading="lazy"
          />
          <div>
            <h1 class="text-3xl font-extrabold leading-snug text-white sm:text-5xl">
              GitHub dockyard
            </h1>
            <p class="mt-6 max-w-2xl leading-relaxed text-zinc-300">
              GitHubに関する知見の共有や、質問・サポート、雑談を行えるコミュニティ。いつでも開かれたコミュニケーションスペース（Discord）で気軽にGitHubについて共有や相談ができるほか、月2回、GitHubの更新情報をキャッチアップする配信「GitHub
              dockyard Radio」を開催している。
            </p>
            <a
              href="https://x.com/hashtag/GitHubDockyard"
              target="_blank"
              rel="noopener"
              class="mt-6 inline-block text-sm font-semibold text-emerald-300 hover:text-emerald-200"
            >
              #GitHubDockyard
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
            <p class="text-3xl font-black text-emerald-300">{{ stat.value }}</p>
            <p class="mt-2 text-xs font-bold tracking-widest text-zinc-400">
              {{ stat.label }}
            </p>
          </div>
        </div>
      </section>

      <!-- Concept -->
      <section class="border-t border-zinc-800/60 bg-zinc-900/30">
        <div class="mx-auto max-w-5xl px-6 py-20">
          <p class="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">Concept</p>
          <h2 class="mt-3 text-2xl font-bold text-white">"dockyard" ＝ 宇宙船の造船所</h2>
          <div class="mt-6 max-w-3xl space-y-4 leading-relaxed text-zinc-300">
            <p>
              "dockyard"は、船を修理したりメンテナンスをする造船所のこと。GitHubは、広いテクノロジーの星々を渡り歩くためになくてはならない、さながら宇宙船のような存在。
            </p>
            <p>
              その船のトラブルを修理し整備するために立ち寄る"dockyard"。船だけでなく、一時の休息に、または旅路の情報を求めて立ち寄る旅人たち。彼らは装備を整え、また新たな目的地を目指して旅立つ——。
            </p>
            <p>
              GitHubとともに開発に携わる人たちが、トラブルを解決し、情報を共有し、労いあい、そしてよりよいプロダクトを生み出すために開発に戻っていく。そんな場所でありたいという想いが込められている。
            </p>
          </div>
        </div>
      </section>

      <!-- Activities -->
      <section class="border-t border-zinc-800/60">
        <div class="mx-auto max-w-5xl px-6 py-20">
          <p class="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">Activities</p>
          <h2 class="mt-3 text-2xl font-bold text-white">主な活動</h2>
          <div class="mt-10 grid gap-8 md:grid-cols-2">
            <article
              v-for="activity in activities"
              :key="activity.title"
              class="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition-colors hover:border-zinc-700"
            >
              <p class="text-xs font-bold tracking-widest text-emerald-300">
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
      <section class="border-t border-zinc-800/60 bg-zinc-900/30">
        <div class="mx-auto max-w-5xl px-6 py-20">
          <p class="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">History</p>
          <h2 class="mt-3 text-2xl font-bold text-white">GitHub dockyard Radio のあゆみ</h2>
          <ol class="mt-10 space-y-6 border-l border-zinc-800 pl-6">
            <li>
              <p class="text-sm font-bold tracking-widest text-emerald-300">〜2024</p>
              <p class="mt-1 leading-relaxed text-zinc-300">
                前身となる個人配信「Catch-up on GitHub updates weekly」を配信。
              </p>
            </li>
            <li>
              <p class="text-sm font-bold tracking-widest text-emerald-300">2025.01</p>
              <p class="mt-1 leading-relaxed text-zinc-300">
                「GitHub dockyard Radio」としてマンスリー配信を開始。
              </p>
            </li>
            <li>
              <p class="text-sm font-bold tracking-widest text-emerald-300">2025.07</p>
              <p class="mt-1 leading-relaxed text-zinc-300">
                新たに仲間を迎えて再始動。以降、月2回（前半/後半）体制へ移行。
              </p>
            </li>
            <li>
              <p class="text-sm font-bold tracking-widest text-emerald-300">2026.07</p>
              <p class="mt-1 leading-relaxed text-zinc-300">
                AI Dev Day 2026 のCommunity Boothにて「GitHub dockyard Radio
                出張版」をオフライン開催。
              </p>
            </li>
          </ol>
        </div>
      </section>

      <!-- Members -->
      <section class="border-t border-zinc-800/60">
        <div class="mx-auto max-w-5xl px-6 py-20">
          <p class="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">Members</p>
          <h2 class="mt-3 text-2xl font-bold text-white">運営メンバー</h2>
          <div class="mt-10 grid gap-8 sm:grid-cols-2">
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
      <section class="border-t border-zinc-800/60 bg-zinc-900/30">
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
      <section class="border-t border-zinc-800/60">
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
