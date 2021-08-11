const fs = require("fs");
const globby = require("globby");
const localesConfig = require("../locales.json");

const generateSitemap = async () => {
  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const pages = await globby([
    "src/pages/**/*{.js,.mdx}",
    "resources/**",
    "!src/pages/**/[slug]{.js,.mdx}",
    "!src/pages/_*.js",
    "!src/pages/api",
  ]);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          const path = page
            .replace("src", "")
            .replace("pages", "")
            .replace("_content", "")
            .replace(".js", "")
            .replace(".md", "")
            .replace(".mdx", "")
            .replace(/^\/\//gi, "");

          const localizedRoute = localesConfig.locales.reduce(
            (matchedPath, locale) => {
              if (
                path.endsWith(`/index`) &&
                locale !== localesConfig.defaultLocale
              ) {
                matchedPath = `${locale.toLowerCase()}/${path.replace(
                  "/index",
                  ""
                )}`;
              } else if (
                path.endsWith(`/${locale}`) &&
                locale !== localesConfig.defaultLocale
              ) {
                matchedPath = `${locale.toLowerCase()}/${path.replace(
                  `/${locale}`,
                  ""
                )}`;
              } else if (
                path.endsWith(`/${locale}`) &&
                locale === localesConfig.defaultLocale
              ) {
                matchedPath = path.replace(`/${locale}`, "");
              }
              return matchedPath;
            },
            ""
          );

          const route = path === "/index" ? "" : `/${localizedRoute}`;
          return `
                  <url>
                      <loc>${`https://agitated-tereshkova-dee58f.netlify.app${route}`}</loc>
                  </url>
              `;
        })
        .join("")}
  </urlset>
      `;

  fs.writeFileSync("public/sitemap.xml", sitemap);
};

generateSitemap();
