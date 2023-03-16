import { IPost } from "@/types/post";
import { useEffect, useState } from "react";

export default function PostsPage() {
  const [posts, setPosts] = useState<IPost[]>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://socialfam-fcd5a-default-rtdb.europe-west1.firebasedatabase.app/posts.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const transformed: IPost[] = [];

        for (const key in data) {
          transformed.push({ id: key, ...data[key] });
        }

        setPosts(transformed);
        setIsLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <div>
        <h1>Loading..</h1>
      </div>
    );

  if (!posts)
    return (
      <div>
        <h1>No posts</h1>
      </div>
    );

  return (
    <div>
      <h1>Persons post</h1>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
