import Link from "next/link";
import Container from "@/components/ui/Container";
import styles from "./Footer.module.css";
import Image from "next/image";

const navigation = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Selected Work", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.intro}>
            <span className={styles.label}>BRLANT</span>

            <p>
              Events.
              <br />
              Exhibitions.
              <br />
              Experiences.
            </p>
          </div>

          <div className={styles.navigation}>
            <span className={styles.navLabel}>NAVIGATION</span>

            <nav aria-label="Footer navigation">
              {navigation.map((item) => (
                <Link key={item.label} href={item.href}>
                  {item.label}
                  <span aria-hidden="true">↗</span>
                </Link>
              ))}
            </nav>
          </div>

          <div className={styles.location}>
            <span className={styles.navLabel}>BASED IN</span>

            <p>
              Riyadh
              <br />
              Saudi Arabia
            </p>
          </div>
        </div>

        <div className={styles.wordmark} aria-hidden="true">
  <Image
    src="/brand/brlant-wordmark.svg"
    alt=""
    width={461}
    height={132}
    className={styles.wordmarkImage}
  />
</div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} BRLANT</span>

          <span>EVENTS · EXHIBITIONS · EXPERIENCES</span>

          <a href="#top">
            BACK TO TOP
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </Container>
    </footer>
  );
}