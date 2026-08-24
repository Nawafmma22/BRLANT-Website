import Link from "next/link";
import Container from "@/components/ui/Container";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section id="contact" className={styles.section}>
      <Container>
        <div className={styles.topLine} data-reveal="soft">
          <span className={styles.label}>LET&apos;S TALK</span>
          <span className={styles.index}>08</span>
        </div>

        <div className={styles.content}>
  <p
    className={styles.eyebrow}
    data-reveal="soft"
    data-reveal-delay="1"
  >
    YOUR NEXT EXPERIENCE
  </p>

  <h2
    className={styles.heading}
    data-reveal
    data-reveal-delay="2"
  >
    <span>HAVE AN EVENT</span>
    <span>IN MIND?</span>
  </h2>

  <a
    href="#contact"
    className={styles.cta}
    data-reveal="scale"
    data-reveal-delay="3"
  >
    <span>LET&apos;S</span>

    <span className={styles.ctaBottom}>
      BUILD IT.
      <span className={styles.arrow} aria-hidden="true">
        ↗
      </span>
    </span>
  </a>
</div>

        <div
  className={styles.bottom}
  data-reveal="soft"
  data-reveal-delay="4"
>
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