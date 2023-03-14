import PostComponent from "@/components/post/post";
import { Post } from "@/types/post";

export default function PostList(props: { posts: Post[] }) {
  const { posts } = props;
  return (
    <div>
      {posts.map((post: Post) => (
        <PostComponent key={post.id} post={post} />
      ))}
    </div>
  );
}
