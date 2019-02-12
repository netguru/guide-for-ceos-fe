module.exports = {
  title: "",
  description: "This is a guide for executives who want to know enough to understand how and why certain decisions will be made during development, what brings the biggest risks, why and how to avoid those risks.",
  theme: "live-ebook",
  base: "/",
  head: [
    ["link", { rel: "icon", href: "/images/favicon.ico" }],
    ["meta", { property: "og:type", content: "website" }],
    ["script", { charset: "utf-8", src: "https://js.hscta.net/cta/current.js" }],
    ["script", {}, "hbspt.cta.load(493098, '8b6650f9-8488-455c-a3c0-691986954263', {});"],
    ["script", {}, '!function(e,t,a,n,g){e[n]=e[n]||[],e[n].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var m=t.getElementsByTagName(a)[0],r=t.createElement(a);r.async=!0,r.src="https://www.googletagmanager.com/gtm.js?id=GTM-PZBJBZV",m.parentNode.insertBefore(r,m)}(window,document,"script","dataLayer");'],
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
