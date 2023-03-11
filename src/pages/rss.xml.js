import rss from "@astrojs/rss";

const postImportResult = import.meta.globEager("./posts/*.md");
const posts = Object.values(postImportResult);

export const get = () =>
  rss({
    title: "Blog Rat Friendly",
    description: "Blog sobre la vida con ratas",
    site: import.meta.env.SITE,
    items: import.meta.glob("./posts/**/*.md"),
  });