import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div>
          <h1>SocialFam</h1>

          <nav>
            <ul>
              <li>
                <Link href="/favorites">Fav</Link>
              </li>
              <li>
                <Link href="/family">Fam</Link>
              </li>
            </ul>
          </nav>
        </div>
      </main>
    </>
  );
}
