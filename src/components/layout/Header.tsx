import Link from "next/link";
import Container from "@/components/ui/Container";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="BRLANT Home">
          BRLANT
        </Link>

        <span className={styles.status}>Events · Exhibitions · Experiences</span>
      </Container>
    </header>
  );
}
