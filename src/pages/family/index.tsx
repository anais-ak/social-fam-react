import Link from "next/link";

export default function FamilyPage() {
  const family = [
    { id: 1, name: "anais" },
    { id: 2, name: "paresh" },
  ];

  return (
    <div>
      <h1>My Fam</h1>
      <nav>
        <ul>
          {family.map((person) => (
            <li key={person.name}>
              <Link href={`/family/${person.id}`}>{person.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
