import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  lpSidebar: [
    "lp/intro",
    "lp/environment",
    "lp/start-project",
    {
      type: "category",
      label: "レイアウトの基本",
      link: {
        type: "generated-index",
        title: "レイアウトの基本",
        slug: "html-layout",
        description:
          "HTML/CSSで押さえておきたい基本的なレイアウト手法を学びましょう！",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "lp/html-layout",
        },
      ],
    },
    {
      type: "category",
      label: "課題",
      link: {
        type: "generated-index",
        title: "課題",
        slug: "lp/challenge",
        description:
          "旅行シェアサービス「TripShare」のLPページを実装してみましょう！",
      },
      items: [
        "lp/challenge/intro",
        "lp/challenge/header",
        "lp/challenge/hero",
        "lp/challenge/service",
        "lp/challenge/feature",
        "lp/challenge/voice",
        "lp/challenge/cta",
        "lp/challenge/contact",
        "lp/challenge/footer",
      ],
    },
  ],
  crudSidebar: [
    "crud/intro",
    "crud/environment",
    {
      type: "category",
      label: "Laravelの基本",
      link: {
        type: "generated-index",
        title: "Laravelの基本",
        slug: "laravel-basic",
        description: "Laravelの基本について解説します。",
      },
      items: ["crud/laravel/about"],
    },
    {
      type: "category",
      label: "課題",
      link: {
        type: "generated-index",
        title: "課題",
        slug: "crud/challenge",
        description: "映画鑑賞記録アプリ「CinemaLog」を実装してみましょう！",
      },
      items: ["crud/challenge/intro"],
    },
  ],

  ecSidebar: [
    "ec/intro",
    "ec/environment",
    {
      type: "category",
      label: "NextJSの基本",
      link: {
        type: "generated-index",
        title: "NextJSの基本",
        slug: "nextjs-basic",
        description: "laravelの基本について解説します。",
      },
      items: ["ec/nextjs/about"],
    },
    {
      type: "category",
      label: "課題",
      link: {
        type: "generated-index",
        title: "課題",
        slug: "ec/challenge",
        description: "絵画専門のECサイト「イロアート」を実装してみましょう！",
      },
      items: ["ec/challenge/intro"],
    },
  ],
};

export default sidebars;
