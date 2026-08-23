export default function Home() {
  return (
    <main
      style={{
        display: "grid",
        placeItems: "center",
        padding: "120px 24px 48px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <p
          style={{
            margin: "0 0 16px",
            color: "#a7a7a7",
            letterSpacing: "0.16em",
            fontSize: 12,
          }}
        >
          RIYADH · SAUDI ARABIA
        </p>
        <h1
          style={{
            margin: 0,
            fontSize: "clamp(64px, 12vw, 180px)",
            lineHeight: 0.9,
            letterSpacing: "-0.06em",
          }}
        >
          BRLANT
        </h1>
      </div>
    </main>
  );
}
