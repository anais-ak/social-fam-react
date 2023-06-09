import PostComponent from "@/components/post/post";
import PostSort from "@/components/post/post-sort";
import { useRouter } from "next/router";
import { IPost } from "@/types/post";

export default function PostList(props: { posts: IPost[] }) {
  useRouter();
  const { posts } = props;

  const sortHandler = function (sort?: string, isFeatured?: string): IPost[] {
    const featured = isFeatured == "yes" ? true : false;
    const res = posts
      .filter((post) => post.isFeatured == featured)
      .sort(function (a: IPost, b: IPost) {
        const aDate: Date = new Date(a.date);
        const bDate: Date = new Date(b.date);
        if (sort == "asc") return aDate.getTime() - bDate.getTime();
        return aDate.getTime() - bDate.getTime();
      });
    return res;
  };

  return (
    <div>
      <div>
        <PostSort onSort={sortHandler} />
      </div>
      <div>
        {posts.map((post) => (
          <PostComponent key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
