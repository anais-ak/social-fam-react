import { useRouter } from 'next/router';

export default function PostPage() {
  const router = useRouter();

  console.log(router.query)
  
  return (
    <div>
      <h1>A post</h1>
    </div>
  );
}