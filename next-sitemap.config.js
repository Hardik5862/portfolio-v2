/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: "monthly",
  exclude: ["/404", "/500", "/success"],
};

module.exports = config;
