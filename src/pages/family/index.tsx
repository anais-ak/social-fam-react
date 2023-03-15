import Link from "next/link";
import { getAllPersons } from "@/mocks/person-mock";
import PersonList from "@/components/family/person-list";

export default function FamilyPage(props) {
  const { family } = props;
  return (
    <div>
      <h1>My Fam</h1>
      <PersonList members={family} />
    </div>
  );
}

async function getData() {
  return getAllPersons(5);
}

export async function getStaticProps() {
  const family = await getData();

  return {
    props: {
      family,
    },
    revalidate: 120,
  };
}
