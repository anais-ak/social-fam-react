import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import PostList from "@/components/post/post-list";
import { Post } from "@/types/post";

import { getFeaturedPosts } from "../mocks/post-faker";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const featuredPosts: Post[] = getFeaturedPosts(5);

  return (
    <>
      <main className={styles.main}>
        <PostList posts={featuredPosts} />
      </main>
    </>
  );
}
