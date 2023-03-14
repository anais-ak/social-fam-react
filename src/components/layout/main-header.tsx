import Link from "next/link";
import classes from "@/components/layout/main-header.module.css";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">SocialFam</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/family">Family</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
