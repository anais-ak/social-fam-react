import { useRouter } from "next/router";
import { Person } from "@/types/person";
import Link from "next/link";

export default function PersonList(props: { members: Person[] }) {
  useRouter();
  const { members } = props;

  return (
    <div>
      <ul>
        {members.map((member) => (
          <li key={member.id}>
            <Link href={"/family/" + member.id}>{member.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
