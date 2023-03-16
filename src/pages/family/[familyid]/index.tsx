import { useRouter } from "next/router";
import { getPersonById, getAllPersons } from "@/mocks/person-mock";
import { IPerson } from "@/types/person";

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

async function getPerson(id: number): Promise<IPerson> {
  return getPersonById(id);
}

export async function getStaticPaths() {
  const family = await getAllPersons(5);
  const params = family
    .map((member) => member.id)
    .map((id) => {
      return {
        params: {
          familyid: id,
        },
      };
    });

  return {
    paths: params,
    fallback: "blocking",
  };
}

// i wanna pre=generate this page in advance
export async function getStaticProps(context) {
  const { params } = context;
  const { id } = params;

  const family = await getPerson(id);

  return {
    props: {
      family,
    },
    revalidate: 120,
  };
}
