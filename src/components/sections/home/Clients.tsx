import Container from "@/components/ui/Container";
import styles from "./Clients.module.css";

const clients = [
  "CLIENT / PARTNER 01",
  "CLIENT / PARTNER 02",
  "CLIENT / PARTNER 03",
  "CLIENT / PARTNER 04",
  "CLIENT / PARTNER 05",
  "CLIENT / PARTNER 06",
  "CLIENT / PARTNER 07",
  "CLIENT / PARTNER 08",
];

export default function Clients() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.topLine}>
          <span className={styles.index}>07</span>
          <span className={styles.label}>CLIENTS & PARTNERS</span>
        </div>

        <div className={styles.intro}>
          <p className={styles.eyebrow}>TRUSTED EXPERIENCE</p>

          <h2 className={styles.heading}>
            <span>BUILT AROUND</span>
            <span>PEOPLE.</span>
            <span className={styles.headingMuted}>TRUSTED BY BRANDS.</span>
          </h2>

          <p className={styles.description}>
            We work alongside organizations, brands and teams to deliver
            experiences where every detail matters.
          </p>
        </div>
      </Container>

      <div className={styles.logoArea}>
        <Container>
          <div className={styles.grid}>
            {clients.map((client, index) => (
              <div className={styles.client} key={client}>
                <span className={styles.clientIndex}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className={styles.clientName}>{client}</span>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <Container>
        <div className={styles.bottom}>
          <p>
            Different industries.
            <br />
            One standard of delivery.
          </p>

          <span>BRLANT · RIYADH · SAUDI ARABIA</span>
        </div>
      </Container>
    </section>
  );
}