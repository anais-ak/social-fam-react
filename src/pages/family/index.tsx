import { getAllPersons } from "@/mocks/person-mock";
import PersonList from "@/components/family/person-list";
import { IPerson } from "@/types/person";

export default function FamilyPage(props: { family: IPerson[] }) {
  const { family } = props;
  return (
    <div>
      <h1>My Fam</h1>
      <PersonList members={family} />
    </div>
  );
}

async function getData(): Promise<IPerson[]> {
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
