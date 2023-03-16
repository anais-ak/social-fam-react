import { useRouter } from "next/router";
import { IPerson } from "@/types/person";
import Link from "next/link";

export default function PersonList(props: { members: IPerson[] }) {
  useRouter();
  const { members } = props;

  return (
    <div>
      <ul>
        {members.map((member) => (
          <li key={member.id}>
            <Link href={"/family/" + member.id}>
              {member.name} - {member.id}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
