const fs = require("fs");
const path = require("path");

const IMG_EXT = /\.(jpe?g|png|gif|webp|svg)$/i;

function labelFor(file) {
  return file.replace(/\.[^.]+$/, "").replace(/^\d+[-_ ]*/, "").replace(/[-_]+/g, " ").trim();
}

function altFor(project, file) {
  const custom = project.alts && project.alts[file];
  if (custom) return custom;
  const label = labelFor(file);
  return label ? project.title + ": " + label : project.title;
}

function mediaFor(project) {
  const dir = path.join(__dirname, "..", "img", "projects", project.slug);
  let files = [];
  try {
    files = fs.readdirSync(dir).filter((f) => IMG_EXT.test(f))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  } catch (e) {}
  return files.map((f) => {
    const isMobile = /mobile/i.test(f);
    return {
      src: "/img/projects/" + project.slug + "/" + f,
      isMobile: isMobile,
      alt: altFor(project, f),
    };
  });
}

const toList = (v) => (Array.isArray(v) ? v : v ? [v] : []);

function trim(text, max) {
  if (!text || text.length <= max) return text || "";
  const cut = text.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[.,;:\s]+$/, "") + "…";
}

module.exports = {
  eleventyComputed: {
    media: (data) => mediaFor(data.project),
    hasMedia: (data) => mediaFor(data.project).length > 0 || !!data.project.youtube,
    oneColumn: (data) => data.project.layout === "one",
    intro: (data) => toList(data.project.intro || data.project.description),
    outro: (data) => toList(data.project.outro),
    metaDescription: (data) =>
      trim(
        toList(data.project.intro || data.project.description)[0] || toList(data.project.outro)[0],
        155
      ),
    metaImage: (data) => (data.project.thumb ? "/img/thumbnails/" + data.project.thumb : ""),
  },
};
