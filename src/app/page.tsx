import styles from "./page.module.css";
import { Header } from "@layout";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Header />
      {/* Page content */}
      <div className={styles.pageContent}>
        {/* Hero message */}
        <div className={styles.heroMessage}>
          A{" "}
          <span>
            <span className={styles.thickUnderline}>serious</span> political
            party
          </span>{" "}
          for the UK
        </div>
        {/* Introduction */}
        <div className={styles.introMessage}>
          Progress is prepared to deliver excellence beyond the limits of the
          broken <span className={styles.left}>left</span>
          <span className={styles.right}>right</span> machine, as a{" "}
          <strong>new political party</strong> that <i>needs</i> the support of
          those committed to building a better future.
        </div>

        {/* Explore section */}
        <div className={styles.exploreMessage}>Please take a moment to</div>
        <div className={styles.exploreTitle}>EXPLORE OUR</div>
        <div className={styles.exploreButtons}>
          <Link href="/principles">
            <button>Principles</button>
          </Link>

          <Link href="/plan">
            <button>Plan</button>
          </Link>

          <Link href="/policies">
            <button>Policies</button>
          </Link>
        </div>
      </div>
    </>
  );
}
