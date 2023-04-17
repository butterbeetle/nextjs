import Link from "next/link";
import styles from "./main-header.module.css";

const MainHeader = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["logo"]}>
        <Link href="/section04/">Next Events</Link>
      </div>
      <nav className={styles["navigation"]}>
        <ul>
          <li>
            <Link href="/section04/events/">Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
