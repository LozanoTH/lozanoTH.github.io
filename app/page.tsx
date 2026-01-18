
import Link from "next/link";
import { getPosts } from "../lib/posts";

export default function Home() {
  const posts = getPosts();
  return (
    <main>
      <h1>Blog</h1>
      {posts.map(p => (
        <div key={p.slug}>
          <Link href={`/blog/${p.slug}`}>{p.title}</Link>
        </div>
      ))}
    </main>
  );
}

