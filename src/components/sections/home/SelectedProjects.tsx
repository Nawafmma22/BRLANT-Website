import Container from "@/components/ui/Container";
import styles from "./SelectedProjects.module.css";

const projects = [
  {
    number: "01",
    title: "World Investment Conference",
    category: "Event Operations",
    location: "Riyadh · Saudi Arabia",
    className: styles.projectOne,
  },
  {
    number: "02",
    title: "WTA Finals",
    category: "Guest & Operational Experience",
    location: "Riyadh · Saudi Arabia",
    className: styles.projectTwo,
  },
  {
    number: "03",
    title: "COP16",
    category: "Event Operations",
    location: "Riyadh · Saudi Arabia",
    className: styles.projectThree,
  },
];

export default function SelectedProjects() {
  return (
    <section id="projects" className={styles.section}>
      <Container>
        <div className={styles.topLine} data-reveal="soft">
          <span className={styles.index}>05</span>
          <span className={styles.label}>SELECTED EXPERIENCE</span>
        </div>

        <div className={styles.intro} data-reveal data-reveal-delay="1">
          <p className={styles.eyebrow}>OUR WORK</p>

          <h2 className={styles.heading}>
            <span>EXPERIENCES</span>
            <span>WE&apos;VE HELPED</span>
            <span className={styles.headingMuted}>BRING TO LIFE.</span>
          </h2>

          <p className={styles.description}>
            Selected experience across major events, live environments and
            high-volume operations in Saudi Arabia.
          </p>
        </div>

        <div className={styles.projects}>
          {projects.map((project, index) => (
            <article className={styles.project} key={project.number}>
              <div
  className={`${styles.media} ${project.className}`}
  data-reveal="scale"
  data-reveal-delay={String((index % 3) + 1)}
>
                <div className={styles.mediaOverlay} />

                <div className={styles.mediaTop}>
                  <span>{project.number}</span>
                  <span>BRLANT EXPERIENCE</span>
                </div>

                <div className={styles.mediaArrow} aria-hidden="true">
                  ↗
                </div>
              </div>

             <div
  className={styles.projectInfo}
  data-reveal="soft"
  data-reveal-delay="1"
>
                <div>
                  <span className={styles.projectNumber}>
                    {project.number}
                  </span>

                  <h3>{project.title}</h3>
                </div>

                <div className={styles.projectMeta}>
                  <span>{project.category}</span>
                  <span>{project.location}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.bottomLine} data-reveal="soft">
          <span>SELECTED EXPERIENCE · BRLANT</span>
          <span>MORE TO COME</span>
        </div>
      </Container>
    </section>
  );
}