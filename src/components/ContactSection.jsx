import { useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Let’s Build Something Amazing</h2>

      {submitted && (
        <p style={styles.success}>Thank you! We will contact you soon.</p>
      )}

      <form
        style={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
      >
        <input type="text" placeholder="Your Name" required style={styles.input} />
        <input type="email" placeholder="Email Address" required style={styles.input} />
        <textarea placeholder="Your Message" rows="4" style={styles.textarea} />
        <button type="submit" style={styles.button}>Send Message</button>
      </form>
    </section>
  );
}

const styles = {
  section: {
    padding: "100px 20px",
    textAlign: "center",
    background: "#f9fafb",
  },
  heading: {
    fontSize: "36px",
    marginBottom: "40px",
    color: "#111827",
  },
  form: {
    maxWidth: "500px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  input: {
    padding: "14px",
    borderRadius: "8px",
    border: "1px solid #ddd",
  },
  textarea: {
    padding: "14px",
    borderRadius: "8px",
    border: "1px solid #ddd",
  },
  button: {
    background: "#2563eb",
    color: "white",
    padding: "14px",
    borderRadius: "8px",
    border: "none",
    fontWeight: 600,
    cursor: "pointer",
  },
  success: {
    color: "green",
    marginBottom: "20px",
  },
};
