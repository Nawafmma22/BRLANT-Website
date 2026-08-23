import Container from "@/components/ui/Container";
import styles from "./WhyBrlant.module.css";

const principles = [
  {
    number: "01",
    title: "One Team.",
    subtitle: "From Strategy to Site.",
    description:
      "Creative, production and operations move as one system — reducing handoffs, delays and execution gaps.",
  },
  {
    number: "02",
    title: "Built for Reality.",
    subtitle: "Not Just the Deck.",
    description:
      "Every idea is tested against timelines, logistics, guest flow and what can actually be delivered on site.",
  },
  {
    number: "03",
    title: "Control at Scale.",
    subtitle: "Details Still Matter.",
    description:
      "From a single VIP journey to high-volume crowd operations, we build clarity and accountability into every layer.",
  },
  {
    number: "04",
    title: "Saudi by Execution.",
    subtitle: "Global by Standard.",
    description:
      "Local understanding, supplier networks and operational experience — delivered with an international mindset.",
  },
];

export default function WhyBrlant() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.topLine}>
          <span className={styles.label}>WHY BRLANT</span>
          <span className={styles.index}>06</span>
        </div>

        <div className={styles.intro}>
          <p className={styles.eyebrow}>HOW WE WORK</p>

          <h2 className={styles.heading}>
            <span>BIG IDEAS NEED</span>
            <span>MORE THAN</span>
            <span className={styles.headingMuted}>GOOD IDEAS.</span>
          </h2>

          <div className={styles.introBottom}>
            <p className={styles.description}>
              Great experiences depend on what happens behind the scenes —
              clear ownership, disciplined planning and teams that know how to
              deliver when the doors open.
            </p>

            <div className={styles.statement}>
              <span>THINK CLEARLY.</span>
              <span>BUILD PRECISELY.</span>
              <span>DELIVER CONFIDENTLY.</span>
            </div>
          </div>
        </div>

        <div className={styles.principles}>
          {principles.map((principle) => (
            <article className={styles.principle} key={principle.number}>
              <span className={styles.number}>{principle.number}</span>

              <div className={styles.principleTitle}>
                <h3>{principle.title}</h3>
                <span>{principle.subtitle}</span>
              </div>

              <p>{principle.description}</p>

              <span className={styles.mark} aria-hidden="true">
                +
              </span>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}