import Link from "next/link";
import Container from "@/components/ui/Container";
import styles from "./Header.module.css";
import Image from "next/image";

const navigation = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#projects" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Link href="/#top" className={styles.logo} aria-label="BRLANT Home">
  <Image
    src="/brand/brlant-wordmark.svg"
    alt="BRLANT"
    width={461}
    height={132}
    priority
    className={styles.logoImage}
  />
</Link>

        <nav className={styles.nav} aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/#contact" className={styles.cta}>
          Start a Project
          <span aria-hidden="true">↗</span>
        </Link>

        <details className={styles.mobileMenu}>
          <summary aria-label="Open navigation">
            <span>Menu</span>
            <span className={styles.menuIcon}>
              <i />
              <i />
            </span>
          </summary>

          <div className={styles.mobilePanel}>
            {navigation.map((item, index) => (
              <Link key={item.label} href={item.href}>
                <span>0{index + 1}</span>
                {item.label}
              </Link>
            ))}

            <Link href="/#contact" className={styles.mobileContact}>
              <span>04</span>
              Start a Project
            </Link>
          </div>
        </details>
      </Container>
    </header>
  );
}