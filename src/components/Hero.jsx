export default function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.content}>
        <h1 style={styles.title}>
          Transform Your Business With Smart AI Solutions
        </h1>
        <p style={styles.subtitle}>
          We help startups and enterprises automate, innovate and scale using cutting-edge AI technology.
        </p>
        <div style={styles.buttons}>
          <button style={styles.primary}>Start Now</button>
          <button style={styles.secondary}>Learn More</button>
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    minHeight: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    background: "linear-gradient(to right, #eef2ff, #f8fafc)",
    padding: "0 20px",
  },
  content: {
    maxWidth: "700px",
  },
  title: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#111827",
  },
  subtitle: {
    fontSize: "18px",
    color: "#6b7280",
    marginBottom: "30px",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  primary: {
    background: "#2563eb",
    color: "white",
    padding: "14px 28px",
    borderRadius: "10px",
    border: "none",
    fontWeight: 600,
    cursor: "pointer",
  },
  secondary: {
    background: "white",
    color: "#2563eb",
    padding: "14px 28px",
    borderRadius: "10px",
    border: "2px solid #2563eb",
    fontWeight: 600,
    cursor: "pointer",
  },
};
