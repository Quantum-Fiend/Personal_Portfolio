import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articlesPath = path.join(process.cwd(), "src/content/articles");

export async function getPostBySlug(slug: string) {
  if (!slug) return null;

  const fullPath = path.join(articlesPath, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const file = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(file);

  return {
    frontmatter: data,
    content, // raw MDX string — MDXRemote (rsc) handles compilation itself
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(articlesPath)) return [];
  return fs
    .readdirSync(articlesPath)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
