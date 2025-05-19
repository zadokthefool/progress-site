import styles from "./logo.module.css";
import { UkFlagImage } from "@assets";
import Image from "next/image";

const Logo = () => {
  return (
    <div className={styles.container}>
      <Image className={styles.image} src={UkFlagImage} alt="UK Flag" />
      <span className={styles.text}>PROGRESS</span>
    </div>
  );
};

export default Logo;
