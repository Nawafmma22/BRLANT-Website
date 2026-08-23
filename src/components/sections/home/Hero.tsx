import Link from "next/link";
import Container from "@/components/ui/Container";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.background} aria-hidden="true">
        <div className={styles.glowOne} />
        <div className={styles.glowTwo} />
        <div className={styles.grid} />
      </div>

      <Container className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            RIYADH · SAUDI ARABIA
          </p>

          <h1 id="hero-title" className={styles.title}>
            <span>WE BUILD</span>
            <span>EXPERIENCES</span>
            <span className={styles.titleMuted}>THAT MOVE PEOPLE.</span>
          </h1>

          <div className={styles.bottom}>
            <p className={styles.description}>
              Events, exhibitions and experiences — strategically planned,
              creatively built and precisely delivered.
            </p>

            <div className={styles.actions}>
              <Link href="/projects" className={styles.primaryButton}>
                Explore Our Work
                <span aria-hidden="true">↗</span>
              </Link>

              <Link href="/contact" className={styles.secondaryButton}>
                Start a Project
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <span>Events · Exhibitions · Conferences</span>

          <a href="#about" className={styles.scroll}>
            Scroll to explore
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </Container>
    </section>
  );
}