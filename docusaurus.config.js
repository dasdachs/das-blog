const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Das Blog",
    tagline: "Personal tech blog",
    url: "https://blog.firstbulb.xyz",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/terminal.ico",
    organizationName: "Firstbulb",
    projectName: "DasBlog",

    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            editUrl: "https://github.com/dasdachs/das-blog/docs/",
          },
          blog: {
            showReadingTime: true,
            editUrl: "https://github.com/dasdachs/das-blog/blog/",
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: "Das Blog",
          logo: {
            alt: "Das Blog",
            src: "img/terminal_logo.svg",
          },
          items: [
            { to: "/blog", label: "Blog", position: "left" },
            {
              type: "doc",
              docId: "intro",
              position: "left",
              label: "Guides",
            },
            {
              href: "https://github.com/dasdachs",
              label: "GitHub",
              position: "right",
            },
          ],
        },
        footer: {
          style: "dark",
          links: [
            {
              title: "Docs",
              items: [
                {
                  label: "Guides",
                  to: "/docs/intro",
                },
              ],
            },
            {
              title: "More",
              items: [
                {
                  label: "Blog",
                  to: "/blog",
                },
                {
                  label: "GitHub",
                  href: "https://github.com/dasdachs",
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Jani Šumak. Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);
