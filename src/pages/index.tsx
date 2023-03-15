import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import PostList from "@/components/post/post-list";
import { Post } from "@/types/post";
// import fs from "fs";
// import path from "path";

import { getFeaturedPosts } from "@/mocks/post-faker";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props: { posts: Post[] }) {
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
