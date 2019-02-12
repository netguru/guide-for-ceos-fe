module.exports = {
  title: "",
  description: "This is a guide for executives who want to know enough to understand how and why certain decisions will be made during development, what brings the biggest risks, why and how to avoid those risks.",
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
