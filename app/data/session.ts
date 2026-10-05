import { githubDockyard, vsCodeMeetup, type Community } from "./communities";
import type { Link } from "./event";

export interface SessionPart {
  community: Community;
  label: string;
  title: string;
  description: string;
  link?: Link;
}

export interface Speaker {
  community: Community;
  description: string;
  note: string;
  links: Link[];
}

export interface Session {
  path: string;
  title: string;
  fullTitle: string;
  track: string;
  time: string;
  seoDescription: string;
  hashtags: Link[];
  parts: SessionPart[];
  speakers: Speaker[];
}

export const session: Session = {
  path: "/sessions/github-dockyard-vs-code-meetup",
  title: "GitHub dockyard Radio & VS Code Monthly Update",
  fullTitle: "GitHub dockyard Radio & VS Code Monthly Update @ AI Dev Day 2026",
  track: "COMMUNITY BOOTH",
  time: "15:30 – 16:25",
  seoDescription:
    "GitHub dockyard RadioとVS Code Monthly UpdateがAI Dev Day 2026のCommunity Boothに登場。7月のGitHubとVS Codeのアップデート情報をオフラインで一緒にキャッチアップしましょう。",
  hashtags: [vsCodeMeetup.hashtag, githubDockyard.hashtag],
  parts: [
    {
      community: githubDockyard,
      label: "前半",
      title: "GitHub dockyard Radio 出張版（2026年7月前半）",
      description:
        "月2回行っているGitHubの更新情報をキャッチアップする配信「GitHub dockyard Radio」をオフラインで再現！ 7月のGitHubの更新情報を見ながら、それぞれの視点でわいわいコメントし合います。",
      link: {
        label: "アジェンダを見る →",
        url: "https://github.com/github-dockyard-community/radio/discussions/52",
      },
    },
    {
      community: vsCodeMeetup,
      label: "後半",
      title: "VS Code Monthly Update 出張版",
      description:
        '毎月YouTubeで配信している「VS Code Monthly Update」がAI Dev Day 2026にやってくる！！ 普段は3時間かけて1ヶ月分のVS Codeのアップデート内容を"すべて"解説している企画を、今回はコンパクトにまとめてオフライン開催します！！ みなさんも一緒に7月のアップデート内容を確認していきましょう。',
    },
  ],
  speakers: [
    {
      community: githubDockyard,
      description: githubDockyard.description,
      note: '"dockyard"は、船を修理したりメンテナンスをする造船所のこと。GitHubという宇宙船で旅する開発者たちが、トラブルを解決し、情報を共有し、労いあい、そしてよりよいプロダクトを生み出すために開発に戻っていく、そんな場所でありたいという想いが込められている。',
      links: [
        { label: "connpass", url: "https://github-dockyard.connpass.com/" },
        { label: "YouTube", url: "https://www.youtube.com/@github-dockyard" },
        githubDockyard.hashtag,
      ],
    },
    {
      community: vsCodeMeetup,
      description:
        "強力かつ軽量なオープンソースのコードエディター「Visual Studio Code」の日本コミュニティ。1 Dayイベント『VS Code Conference Japan』を複数回開催しているほか、毎月月初に1ヶ月分のVS Codeのリリースノートをわいわいと振り返る配信イベント「VS Code Monthly Update」を開催している。",
      note: '「VS Code Monthly Update」は2025年2月から継続中。"全"リリースノートを確認するため1回につき2〜3時間以上におよぶ。VS Codeのアップデートと言いつつ、ほとんどGitHub Copilot機能のアップデートでいっぱい。',
      links: [
        { label: "connpass", url: "https://vscode.connpass.com/" },
        { label: "YouTube", url: "https://www.youtube.com/@vscodemeetup6795" },
        vsCodeMeetup.hashtag,
      ],
    },
  ],
};
