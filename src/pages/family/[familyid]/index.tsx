import { useRouter } from "next/router";

export default function PersonPage() {
  const router = useRouter();
  const person = { id: 1, name: "anais" };

  const loadPosts = () => {
    router.push(`/family/${person.id}/posts`);
  };

  return (
    <div>
      <h1>{person.name}</h1>
      <button onClick={loadPosts}>See posts</button>
    </div>
  );
}
