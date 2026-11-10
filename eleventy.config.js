const handlebars = require("handlebars");
const handlebarsPlugin = require("@11ty/eleventy-plugin-handlebars");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(handlebarsPlugin, {
    eleventyLibraryOverride: handlebars,
  });

  const prefix = process.env.SITE_PREFIX || "/";
  const clean = (args) =>
    args.filter((a) => typeof a === "string" || typeof a === "number").join("");

  eleventyConfig.addFilter("path", (...args) => prefix.replace(/\/$/, "") + clean(args));
  eleventyConfig.addFilter("concat", (...args) => clean(args));

  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/js");

  return {
    templateFormats: ["hbs", "html", "md"],
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    htmlTemplateEngine: "hbs",
    markdownTemplateEngine: "hbs",
  };
};
