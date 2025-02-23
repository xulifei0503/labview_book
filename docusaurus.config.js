// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LabVIEW 编程经验',
  tagline: 'LabVIEW, 编程, 经验, 教程, 开源, 免费, 电子书, 下载, PDF, 示例',
  url: 'https://lv.qizhen.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  projectName: 'labview_book', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
		  sidebarCollapsed: false,
          // Please change this to your repo.
          editUrl: 'https://github.com/ruanqizhen/labview_book/edit/main/',
		  routeBasePath: '/',
		  path: './docs',
        },
		blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
		sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          trailingSlash: false,
        },
        gtag: {
          trackingID: 'G-9EFRGQK2N0',
        },
      }),
    ],
  ],

  themeConfig: (
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
	  hideableSidebar: true,
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
		hideOnScroll: true,
        title: 'LabVIEW 编程经验',
        logo: {
          alt: 'LabVIEW',
          src: 'img/logo.png',
		  href: '/'
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
	  zoomSelector: '.markdown img',
	  metadata: [
		{name: 'keywords', content: 'LabVIEW, 编程, 经验, 教程, 开源, 免费, 电子书, 下载, PDF, 示例'},
		{name: 'description', content: '《我和LabVIEW:一个NI工程师的十年编程经验》，是一本广受好评的的畅销书。介绍了各种控件，节点，结构的使用方法和编程模式，调试优化等高级功能。'},
		{name: 'author', content: 'Qizhen Ruan 阮奇桢'},
		{name: 'sogou_site_verification', content: 'zamt1S8Mci'},
	  ],
    }
  ),
  plugins: [
    function cnzzPlugin(context, options) {
      return {
        name: 'cnzz-plugin',
        injectHtmlTags({content}) {
		  return {
			postBodyTags: [`<div hidden>
              <script type="text/javascript" src="https://s4.cnzz.com/z_stat.php?id=1280609189&web_id=1280609189"></script>
			  </div>`
			],
		  };
		},
      };
    },
	[
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "zh"],
		docsRouteBasePath: "/",
		highlightSearchTermsOnTargetPage: true,
      },
    ],
    "./src/plugin/plugin-image-zoom",
  ],
};

module.exports = config;
