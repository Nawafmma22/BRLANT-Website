import Container from "@/components/ui/Container";
import styles from "./BrandStatement.module.css";

export default function BrandStatement() {
  return (
    <section id="about" className={styles.section}>
      <Container>
        <div className={styles.topLine}>
          <span className={styles.label}>ABOUT BRLANT</span>
          <span className={styles.index}>02</span>
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>
            <span>WE DON&apos;T JUST</span>
            <span>RUN EVENTS.</span>
            <span className={styles.accent}>WE ENGINEER EXPERIENCES.</span>
          </h2>

          <div className={styles.bottom}>
            <p className={styles.description}>
              BRLANT brings strategy, creative direction, production,
              operations and guest experience together under one team —
              transforming ambitious ideas into precisely delivered
              experiences.
            </p>

            <div className={styles.meta}>
              <span>Strategy</span>
              <span>Creative</span>
              <span>Production</span>
              <span>Operations</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}