import Container from "@/components/ui/Container";
import styles from "./Impact.module.css";

const impactItems = [
  {
    value: "100K+",
    label: "Guests & Crowds Managed",
    description: "Across high-volume events and live experiences.",
  },
  {
    value: "360°",
    label: "Event Delivery",
    description: "From concept and planning to operations and close-out.",
  },
  {
    value: "ONE",
    label: "Integrated Team",
    description: "Strategy, creative, production and operations aligned.",
  },
  {
    value: "KSA",
    label: "Local Execution",
    description: "Built for the pace, standards and ambition of Saudi Arabia.",
  },
];

export default function Impact() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.topLine}>
          <span className={styles.index}>03</span>
          <span className={styles.label}>OUR IMPACT</span>
        </div>

        <div className={styles.intro}>
          <p className={styles.kicker}>BUILT TO DELIVER</p>

          <h2 className={styles.heading}>
            SCALE IS NOTHING
            <span>WITHOUT CONTROL.</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {impactItems.map((item, index) => (
            <article className={styles.item} key={item.label}>
              <div className={styles.itemTop}>
                <span className={styles.itemIndex}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className={styles.value}>{item.value}</span>
              </div>

              <div className={styles.itemBottom}>
                <h3>{item.label}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}