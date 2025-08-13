import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Tabroom.com Help Center',
  tagline: 'Tabroom documentation',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.tabroom.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'speechanddebate', // Usually your GitHub org/user name.
  projectName: 'tabroom-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          sidebarCollapsed: false,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo.jpeg',
    navbar: {
      title: 'Tabroom.com Help Center',
      logo: {
        alt: 'Tabroom Logo',
        src: 'img/logo.jpeg',
      },
      items: [
          {
            href: 'https://tabroom.com',
            position: 'right',
            'aria-label': 'Back to tabroom.com',
            label: 'Back to tabroom.com',
          },
      ],
    },
    footer: {
      style: 'dark',
      links: [
          {
            title: 'Links',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/speechanddebate/tabroom-docs',
              },
            ],
          },
        ],
      copyright: `Copyright © ${new Date().getFullYear()} National Speech & Debate Association.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
