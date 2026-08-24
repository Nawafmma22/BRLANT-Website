import Link from "next/link";
import Container from "@/components/ui/Container";
import styles from "./Services.module.css";

const services = [
  {
    number: "01",
    title: "Event Management",
    description:
      "End-to-end planning and delivery, from the first brief to final close-out.",
  },
  {
    number: "02",
    title: "Exhibitions & Conferences",
    description:
      "Structured environments designed around brands, audiences and business objectives.",
  },
  {
    number: "03",
    title: "Creative & Production",
    description:
      "Concept development, spatial design, branding, fabrication, AV and technical production.",
  },
  {
    number: "04",
    title: "Operations & Logistics",
    description:
      "Site operations, transportation, suppliers, equipment and detailed execution planning.",
  },
  {
    number: "05",
    title: "Staffing & Crowd Management",
    description:
      "Trained teams, supervisors, accreditation and crowd-flow operations built for scale.",
  },
  {
    number: "06",
    title: "VIP & Guest Experience",
    description:
      "Protocol, hospitality, registration, transportation and seamless guest journeys.",
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <Container>
        <div className={styles.topLine} data-reveal="soft">
          <span className={styles.label}>WHAT WE DO</span>
          <span className={styles.index}>04</span>
        </div>

        <div className={styles.intro} data-reveal data-reveal-delay="1">
          <p className={styles.eyebrow}>OUR CAPABILITIES</p>

          <h2 className={styles.heading}>
            <span>BUILT FOR</span>
            <span>EVERY STAGE</span>
            <span className={styles.headingMuted}>OF THE EXPERIENCE.</span>
          </h2>

          <div className={styles.introBottom}>
            <p className={styles.description}>
              One integrated team across strategy, creative, production and
              operations — giving every part of the experience the same level
              of control.
            </p>

            <Link href="/services" className={styles.viewAll}>
              View all capabilities
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className={styles.list}>
          {services.map((service, index) => (
            <article
  className={styles.service}
  key={service.number}
  data-reveal="soft"
  data-reveal-delay={String((index % 4) + 1)}
>
              <span className={styles.serviceNumber}>{service.number}</span>

              <h3 className={styles.serviceTitle}>{service.title}</h3>

              <p className={styles.serviceDescription}>
                {service.description}
              </p>

              <span className={styles.arrow} aria-hidden="true">
                ↗
              </span>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}