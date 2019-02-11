module.exports = {
  title: "",
  description: "tbd",
  theme: "live-ebook",
  base: "/",
  head: [
    ["link", { rel: "icon", href: "/images/favicon.ico" }],
    ["meta", { property: "og:type", content: "website" }]
  ],
  ga: "",

  themeConfig: {
    bookTitle: "Frontend Development",
    baseUrl: "https://frontend-guide.netguru.com",
    exitUrl: "https://www.netguru.com/",
    company: {
      name: "Netguru",
      url: "https://www.netguru.com",
      logo: "/images/netguru.svg"
    },
    twitter: "netguru"
  },

  chainWebpack: config => {
    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  }
};
