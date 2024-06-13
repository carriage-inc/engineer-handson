import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "マナテク",
  tagline: "超本格サービス実装で本物の実力を身につける💪🔥",
  favicon: "img/favicon.ico",
  // Set the production url of your site here
  url: "https://carriage-inc.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/engineer-handson/",

  // GitHub pages deployment config.
  organizationName: "carriage-inc", // Usually your GitHub org/user name.
  projectName: "engineer-handson", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "ja",
    locales: ["ja"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/service-summary.png",
    navbar: {
      title: "",
      logo: {
        alt: "ロゴ",
        src: "img/logo.png",
        srcDark: "img/logo-dark.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "lpSidebar",
          position: "left",
          label: "LPサイト",
        },
        {
          type: "docSidebar",
          sidebarId: "crudSidebar",
          position: "left",
          label: "CRUDアプリ",
        },
        {
          type: "docSidebar",
          sidebarId: "ecSidebar",
          position: "left",
          label: "ECサイト",
        },
        // { to: "/blog", label: "参考記事", position: "left" },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "LPサイト",
              to: "/docs/lp/environment",
            },
            {
              label: "CRUDアプリ",
              to: "/docs/crud/environment",
            },
            {
              label: "ECサイト",
              to: "/docs/ec/environment",
            },
          ],
        },
        {
          title: "SNS",
          items: [
            {
              label: "X",
              href: "https://x.com/carriage_inc",
            },
          ],
        },
        // {
        //   title: "More",
        //   items: [
        //     {
        //       label: "参考記事",
        //       to: "/blog",
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Carriage, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
