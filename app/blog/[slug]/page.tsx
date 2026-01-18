
import { getPosts } from "../../../lib/posts";

export default function Post({ params }) {
  const post = getPosts().find(p => p.slug === params.slug);
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}

