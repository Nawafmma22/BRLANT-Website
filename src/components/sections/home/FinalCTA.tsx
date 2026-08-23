import Link from "next/link";
import Container from "@/components/ui/Container";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.topLine}>
          <span className={styles.label}>LET&apos;S TALK</span>
          <span className={styles.index}>08</span>
        </div>

        <div className={styles.content}>
          <p className={styles.eyebrow}>YOUR NEXT EXPERIENCE</p>

          <h2 className={styles.heading}>
            <span>HAVE AN EVENT</span>
            <span>IN MIND?</span>
          </h2>

          <Link href="/contact" className={styles.cta}>
            <span>LET&apos;S</span>

            <span className={styles.ctaBottom}>
              BUILD IT.
              <span className={styles.arrow} aria-hidden="true">
                ↗
              </span>
            </span>
          </Link>
        </div>

        <div className={styles.bottom}>
          <span>RIYADH · SAUDI ARABIA</span>

          <p>
            Events · Exhibitions · Conferences
            <br />
            Creative · Production · Operations
          </p>
        </div>
      </Container>
    </section>
  );
}