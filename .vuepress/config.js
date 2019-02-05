module.exports = {
  title: "Frontend Development - Quick Guide for CEOs",
  description: "tbd",
  theme: "live-ebook",
  base: "/",
  head: [
    ["link", { rel: "icon", href: "/images/favicon.ico" }],
    ["meta", { property: "og:type", content: "website" }]
  ],
  ga: "UA-259047-66",

  themeConfig: {
    bookTitle: "Frontend Development",
    baseUrl: "https://design-process.netguru.co",
    exitUrl: "https://www.netguru.co/",
    company: {
      name: "Netguru",
      url: "https://www.netguru.co",
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
