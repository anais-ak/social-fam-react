import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import PostList from "@/components/post/post-list";
import { IPost } from "@/types/post";

import { getFeaturedPosts } from "@/mocks/post-mock";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props: { posts: IPost[] }) {
  const { posts } = props;

  return (
    <>
      <main className={styles.main}>
        <PostList posts={posts} />
      </main>
    </>
  );
}

async function getData() {
  return getFeaturedPosts(5);
}

export async function getStaticProps() {
  const postList = await getData();

  return {
    props: {
      posts: postList,
    },
    revalidate: 120,
  };
}
