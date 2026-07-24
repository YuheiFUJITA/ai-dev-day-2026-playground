<script setup lang="ts">
const speakers = [
  {
    name: "GitHub dockyard",
    page: "/communities/github-dockyard",
    image: "https://aidevday.com/images/speakers/github-dockyard.webp",
    description:
      "GitHubに関する知見の共有や、質問・サポート、雑談を行えるコミュニティ。いつでも開かれたコミュニケーションスペース（Discord）で気軽にGitHubについて共有や相談ができるほか、月2回、GitHubの更新情報をキャッチアップする配信「GitHub dockyard Radio」を開催している。",
    note: '"dockyard"は、船を修理したりメンテナンスをする造船所のこと。GitHubという宇宙船で旅する開発者たちが、トラブルを解決し、情報を共有し、労いあい、そしてよりよいプロダクトを生み出すために開発に戻っていく、そんな場所でありたいという想いが込められている。',
    members: [
      { name: "Kazumi OHIRA", handle: "@dz_", url: "https://x.com/dz_" },
      {
        name: "Maki NAGASE",
        handle: "@yuma_prog",
        url: "https://x.com/yuma_prog",
      },
    ],
    links: [
      { label: "connpass", url: "https://github-dockyard.connpass.com/" },
      { label: "YouTube", url: "https://www.youtube.com/@github-dockyard" },
      {
        label: "#GitHubDockyard",
        url: "https://x.com/hashtag/GitHubDockyard",
      },
    ],
  },
  {
    name: "VS Code Meetup",
    page: "/communities/vs-code-meetup",
    image: "https://aidevday.com/images/speakers/vs-code-meetup.webp",
    description:
      "強力かつ軽量なオープンソースのコードエディター「Visual Studio Code」の日本コミュニティ。1 Dayイベント『VS Code Conference Japan』を複数回開催しているほか、毎月月初に1ヶ月分のVS Codeのリリースノートをわいわいと振り返る配信イベント「VS Code Monthly Update」を開催している。",
    note: '「VS Code Monthly Update」は2025年2月から継続中。"全"リリースノートを確認するため1回につき2〜3時間以上におよぶ。VS Codeのアップデートと言いつつ、ほとんどGitHub Copilot機能のアップデートでいっぱい。',
    members: [
      { name: "Y10A", handle: "@Yuhei_FUJITA", url: "https://x.com/Yuhei_FUJITA" },
      { name: "yamachu", handle: "@y_chu5", url: "https://x.com/y_chu5" },
      { name: "74th", handle: "@74th", url: "https://x.com/74th" },
    ],
    links: [
      { label: "connpass", url: "https://vscode.connpass.com/" },
      {
        label: "YouTube",
        url: "https://www.youtube.com/@vscodemeetup6795",
      },
      { label: "#vscodejp", url: "https://x.com/hashtag/vscodejp" },
    ],
  },
];

useHead({
  title:
    "GitHub dockyard Radio & VS Code Monthly Update @ AI Dev Day 2026 | Session | AI Dev Day 2026",
  meta: [
    {
      name: "description",
      content:
        "GitHub dockyard RadioとVS Code Monthly UpdateがAI Dev Day 2026のCommunity Boothに登場。7月のGitHubとVS Codeのアップデート情報をオフラインで一緒にキャッチアップしましょう。",
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
          Session
        </p>
        <p class="mt-2 text-sm tracking-widest text-zinc-400">セッション</p>

        <div class="mt-14 flex flex-wrap items-center gap-4">
          <span
            class="rounded-full border border-emerald-400/60 px-4 py-1 text-xs font-bold tracking-widest text-emerald-300"
          >
            COMMUNITY BOOTH
          </span>
          <span class="text-sm font-semibold tracking-widest text-zinc-300"> 15:30 – 16:25 </span>
        </div>

        <h1
          class="mt-6 max-w-4xl text-3xl font-extrabold leading-snug text-white sm:text-5xl sm:leading-tight"
        >
          GitHub dockyard Radio &amp; VS Code Monthly Update @ AI Dev Day 2026
        </h1>

        <div class="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-zinc-400">
          <a
            href="https://x.com/hashtag/vscodejp"
            target="_blank"
            rel="noopener"
            class="hover:text-white"
          >
            #vscodejp
          </a>
          <a
            href="https://x.com/hashtag/GitHubDockyard"
            target="_blank"
            rel="noopener"
            class="hover:text-white"
          >
            #GitHubDockyard
          </a>
        </div>
      </section>

      <!-- Description -->
      <section class="mx-auto max-w-5xl px-6 pb-20">
        <div class="grid gap-8 md:grid-cols-2">
          <div
            class="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition-colors hover:border-zinc-700"
          >
            <p class="text-xs font-bold tracking-widest text-emerald-300">前半</p>
            <h2 class="mt-3 text-xl font-bold text-white">
              GitHub dockyard Radio 出張版（2026年7月前半）
            </h2>
            <p class="mt-4 leading-relaxed text-zinc-300">
              月2回行っているGitHubの更新情報をキャッチアップする配信「GitHub dockyard
              Radio」をオフラインで再現！
              7月のGitHubの更新情報を見ながら、それぞれの視点でわいわいコメントし合います。
            </p>
            <a
              href="https://github.com/github-dockyard-community/radio/discussions/52"
              target="_blank"
              rel="noopener"
              class="mt-4 inline-block text-sm font-semibold text-emerald-300 hover:text-emerald-200"
            >
              アジェンダを見る →
            </a>
          </div>
          <div
            class="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition-colors hover:border-zinc-700"
          >
            <p class="text-xs font-bold tracking-widest text-sky-300">後半</p>
            <h2 class="mt-3 text-xl font-bold text-white">VS Code Monthly Update 出張版</h2>
            <p class="mt-4 leading-relaxed text-zinc-300">
              毎月YouTubeで配信している「VS Code Monthly Update」がAI Dev Day 2026にやってくる！！
              普段は3時間かけて1ヶ月分のVS
              Codeのアップデート内容を"すべて"解説している企画を、今回はコンパクトにまとめてオフライン開催します！！
              みなさんも一緒に7月のアップデート内容を確認していきましょう。
            </p>
          </div>
        </div>
      </section>

      <!-- Speakers -->
      <section class="border-t border-zinc-800/60 bg-zinc-900/30">
        <div class="mx-auto max-w-5xl px-6 py-20">
          <p class="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">Speaker</p>
          <div class="mt-10 grid gap-10 sm:grid-cols-2">
            <article v-for="speaker in speakers" :key="speaker.name" class="flex flex-col">
              <img
                :src="speaker.image"
                :alt="speaker.name"
                class="aspect-square w-full max-w-xs rounded-2xl border border-zinc-800 object-cover"
                loading="lazy"
              />
              <h2 class="mt-6 text-2xl font-bold text-white">
                {{ speaker.name }}
              </h2>
              <p class="mt-3 leading-relaxed text-zinc-400">
                {{ speaker.description }}
              </p>
              <p class="mt-3 text-sm leading-relaxed text-zinc-500">
                {{ speaker.note }}
              </p>
              <div class="mt-5">
                <p class="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500">Members</p>
                <ul class="mt-2 flex flex-wrap gap-x-5 gap-y-1">
                  <li v-for="member in speaker.members" :key="member.handle" class="text-sm">
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
              <ul class="mt-4 flex flex-wrap gap-3">
                <li v-for="link in speaker.links" :key="link.url">
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
              <NuxtLink
                :to="speaker.page"
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
          <p class="text-3xl font-black uppercase tracking-tight sm:text-4xl">AI Dev Day 2026</p>
          <p class="mt-4 text-sm tracking-widest text-zinc-400">JULY 24, 2026 / TOKYO, JAPAN</p>
          <p class="mt-1 text-sm tracking-widest text-zinc-400">
            OTEMACHI PLACE HALL&amp;CONFERENCE
          </p>
          <p class="mt-6 text-sm italic text-zinc-500">Fast Alone, Far Together.</p>
          <a
            href="https://connpass.com/event/393431/"
            target="_blank"
            rel="noopener"
            class="mt-10 inline-block rounded-full bg-zinc-100 px-8 py-3 text-sm font-bold tracking-widest text-zinc-950 transition-colors hover:bg-white"
          >
            GET TICKET
          </a>
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
