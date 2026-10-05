import type { Accent } from "~/utils/accent";
import type { Link } from "./event";

export interface Stat {
  label: string;
  value: string;
}

export interface Activity {
  title: string;
  badge: string;
  description: string;
  links: Link[];
}

export interface Member {
  name: string;
  handle: string;
  url: string;
  bio: string;
}

export interface HistoryEntry {
  date: string;
  text: string;
}

export interface Community {
  slug: string;
  name: string;
  image: string;
  accent: Accent;
  hashtag: Link;
  description: string;
  seoDescription: string;
  stats: Stat[];
  concept?: { title: string; paragraphs: string[] };
  activities: Activity[];
  history: { title: string; entries: HistoryEntry[] };
  members: Member[];
  links: Link[];
}

export const githubDockyard: Community = {
  slug: "github-dockyard",
  name: "GitHub dockyard",
  image: "https://aidevday.com/images/speakers/github-dockyard.webp",
  accent: "emerald",
  hashtag: { label: "#GitHubDockyard", url: "https://x.com/hashtag/GitHubDockyard" },
  description:
    "GitHubに関する知見の共有や、質問・サポート、雑談を行えるコミュニティ。いつでも開かれたコミュニケーションスペース（Discord）で気軽にGitHubについて共有や相談ができるほか、月2回、GitHubの更新情報をキャッチアップする配信「GitHub dockyard Radio」を開催している。",
  seoDescription:
    "GitHubに関する知見の共有や質問・サポート、雑談を行える日本のコミュニティ「GitHub dockyard」の紹介ページ。月2回のGitHub dockyard Radioをはじめとした活動内容を紹介します。",
  stats: [
    { label: "connpass メンバー", value: "705+" },
    { label: "開催イベント", value: "39+" },
    { label: "Radio 配信", value: "月2回" },
  ],
  concept: {
    title: '"dockyard" ＝ 宇宙船の造船所',
    paragraphs: [
      '"dockyard"は、船を修理したりメンテナンスをする造船所のこと。GitHubは、広いテクノロジーの星々を渡り歩くためになくてはならない、さながら宇宙船のような存在。',
      'その船のトラブルを修理し整備するために立ち寄る"dockyard"。船だけでなく、一時の休息に、または旅路の情報を求めて立ち寄る旅人たち。彼らは装備を整え、また新たな目的地を目指して旅立つ——。',
      "GitHubとともに開発に携わる人たちが、トラブルを解決し、情報を共有し、労いあい、そしてよりよいプロダクトを生み出すために開発に戻っていく。そんな場所でありたいという想いが込められている。",
    ],
  },
  activities: [
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
  ],
  history: {
    title: "GitHub dockyard Radio のあゆみ",
    entries: [
      { date: "〜2024", text: "前身となる個人配信「Catch-up on GitHub updates weekly」を配信。" },
      { date: "2025.01", text: "「GitHub dockyard Radio」としてマンスリー配信を開始。" },
      { date: "2025.07", text: "新たに仲間を迎えて再始動。以降、月2回（前半/後半）体制へ移行。" },
      {
        date: "2026.07",
        text: "AI Dev Day 2026 のCommunity Boothにて「GitHub dockyard Radio 出張版」をオフライン開催。",
      },
    ],
  },
  members: [
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
  ],
  links: [
    { label: "connpass", url: "https://github-dockyard.connpass.com/" },
    { label: "YouTube", url: "https://www.youtube.com/@github-dockyard" },
    { label: "GitHub", url: "https://github.com/github-dockyard-community" },
    { label: "Discord", url: "https://discord.gg/n3q7UrRZTh" },
    { label: "#GitHubDockyard", url: "https://x.com/hashtag/GitHubDockyard" },
  ],
};

export const vsCodeMeetup: Community = {
  slug: "vs-code-meetup",
  name: "VS Code Meetup",
  image: "https://aidevday.com/images/speakers/vs-code-meetup.webp",
  accent: "sky",
  hashtag: { label: "#vscodejp", url: "https://x.com/hashtag/vscodejp" },
  description:
    "強力かつ軽量なオープンソースのコードエディター「Visual Studio Code」の日本コミュニティ。2019年12月の発足以来、毎回テーマを設定したミートアップを積み重ね、1 Dayイベント『VS Code Conference Japan』を複数回開催しているほか、毎月月初に1ヶ月分のVS Codeのリリースノートをわいわいと振り返る配信イベント「VS Code Monthly Update」を開催している。",
  seoDescription:
    "Visual Studio Codeの日本コミュニティ「VS Code Meetup」の紹介ページ。毎月のVS Code Monthly UpdateやVS Code Conference Japanなどの活動内容を紹介します。",
  stats: [
    { label: "開催イベント", value: "72+" },
    { label: "1 Day カンファレンス", value: "3回" },
    { label: "Monthly Update", value: "毎月配信" },
  ],
  activities: [
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
  ],
  history: {
    title: "コミュニティのあゆみ",
    entries: [
      {
        date: "2019.12",
        text: "VS Code Meetup #1 - 初回基礎編を東京で開催。479人が登録する大盛況でスタート。",
      },
      {
        date: "2021.11",
        text: "初の1 Dayカンファレンス「VS Code Conference Japan 2021」をオンライン開催（887人登録）。",
      },
      { date: "2023.01", text: "「VS Code Conference Japan 2022-2023」をハイブリッド開催。" },
      {
        date: "2024.04",
        text: "「VS Code Conference Japan 2024」をハイブリッド開催（431人登録）。",
      },
      {
        date: "2025.02",
        text: "「VS Code Monthly Update」（v1.97回）を開始。以降、毎月継続配信中。",
      },
      {
        date: "2026.07",
        text: "AI Dev Day 2026 のCommunity Boothにて「VS Code Monthly Update 出張版」をオフライン開催。",
      },
    ],
  },
  members: [
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
  ],
  links: [
    { label: "connpass", url: "https://vscode.connpass.com/" },
    { label: "YouTube", url: "https://www.youtube.com/@vscodemeetup6795" },
    { label: "GitHub", url: "https://github.com/vscodejp" },
    { label: "Discord", url: "https://discord.gg/MG6wy7mjRk" },
    { label: "#vscodejp", url: "https://x.com/hashtag/vscodejp" },
  ],
};

export const communities: Community[] = [githubDockyard, vsCodeMeetup];

export const communityPath = (community: Community) => `/communities/${community.slug}`;

export const findCommunity = (slug: string) =>
  communities.find((community) => community.slug === slug);
