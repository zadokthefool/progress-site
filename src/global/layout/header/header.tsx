import { Logo } from "@components";
import styles from "./header.module.css";
import Link from "next/link";

interface HeaderProps {
  isGetInvolved?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isGetInvolved = false }) => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Logo />
      </Link>
      {!isGetInvolved && (
        <Link href="/get-involved">
          <button className={styles.getInvolvedButton}>Get Involved</button>
        </Link>
      )}
    </header>
  );
};

export default Header;
