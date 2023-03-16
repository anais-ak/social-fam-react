import { useRouter } from "next/router";
// import { GetStaticProps } from "next";
import { GetServerSideProps } from "next";

import { getPersonById, getAllPersons } from "@/mocks/person-mock";
import { IPerson } from "@/types/person";

export default function PersonPage(props: { person: IPerson }) {
  const router = useRouter();

  // console.log(props.person);

  const loadPosts = () => {
    router.push(`/family/${props.person.id}/posts`);
  };

  return (
    <div>
      <h1>
        {props.person.name} - {props.person.id}
      </h1>
      <button onClick={loadPosts}>See posts</button>
    </div>
  );
}

async function getPerson(id: number): Promise<IPerson> {
  return getPersonById(id);
}

// no need pre-generation
// TODO
// to use at another place
// // i wanna pregenerate this page in advance
export async function getServerSideProps(context: GetServerSideProps) {
  const { params } = context;
  const person = await getPerson(params?.familyid);
  return {
    props: {
      person,
    },
  };
}

// TODO
// to use at another place
// // i wanna pregenerate this page in advance
// export async function getStaticPaths() {
//   const family = await getAllPersons(5);
//   console.log(family);
//   const params = family
//     .map((member) => member.id)
//     .map((id) => {
//       return {
//         params: {
//           familyid: id.toString(),
//         },
//       };
//     });

//   return {
//     paths: params,
//     fallback: true, //"blocking",
//   };
// }

// TODO
// to use at another place
// // i wanna pregenerate this page in advance
// console.log("entering pre-regeneration");
// export async function getStaticProps(context: { params: { id: string } }) {
//   const { params } = context;
//   const { id } = params;

//   const person = await getPerson(+id);

//   return {
//     props: {
//       person: person,
//     },
//     revalidate: 120,
//   };
// }
