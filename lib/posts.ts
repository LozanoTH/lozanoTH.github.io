
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const dir = path.join(process.cwd(), "content/posts");

export function getPosts() {
  return fs.readdirSync(dir).map(file => {
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data, content } = matter(raw);
    return { slug: file.replace(".mdx",""), ...data, content };
  });
}