import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/Navbar";
import "./contact.css";
import { Link } from "react-router-dom";


export default function ContactPage() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* REUSABLE NAVBAR */}
      <Navbar />

      <div className="page">

        {/* HEADING */}
        <motion.div
          className="hero"
          initial={{ opacity: 0, x: -120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 style={{ fontSize: "clamp(28px, 5vw, 48px)" }}>
            Take The Next Step Toward Operational Excellence
          </h1>
        </motion.div>

        {/* FORM */}
        <motion.div
          className="form-container"
          initial={{ opacity: 0, x: 120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <div className="row">
            <input
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
            />
            <input
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <input
              name="email"
              placeholder="Email *"
              onChange={handleChange}
            />
            <div className="phone-group">
              <select>
                <option>IN +91</option>
              </select>
              <input
                name="phone"
                placeholder="Phone"
                onChange={handleChange}
              />
            </div>
          </div>

          <textarea
            name="address"
            placeholder="Address"
            rows="3"
            onChange={handleChange}
          ></textarea>

          {/* Animated Button */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="send-btn"
          >
            Send
          </motion.button>

          <p className="bottom-text">
            Get In Touch With Our Experts
          </p>
        </motion.div>

        {/* MAP SECTION */}
        <motion.div
          className="map-section"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="map-heading">Find Us Here</h2>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5321040579815!2d78.37644087516598!3d17.434228133460984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93bd18410b0f%3A0x8d7e3fea891858ce!2sT-Hub!5e0!3m2!1sen!2sin!4v1771265699461!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <a
            href="https://www.google.com/maps/place/T-Hub/"
            target="_blank"
            rel="noopener noreferrer"
            className="map-btn"
          >
            Open in Google Maps
          </a>
        </motion.div>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-left">
            <img
              src="/MeghaFoot.avif"
              alt="MeghaAI Logo"
              className="footer-logo"
            />

            <p>Tel. 1-833-634-4281</p>
            <p>support@meghaai.com</p>

            <div className="social-icons">
              <a
                href="https://www.linkedin.com/company/meghaai/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/linkedin.png" alt="LinkedIn" />
              </a>
            </div>
          </div>

          <div className="footer-middle">
  <h4>Learn More</h4>
  <Link to="" className="footer-link">Industries</Link>
  <Link to="" className="footer-link">Products</Link>
  <Link to="" className="footer-link">About Us</Link>
</div>

<div className="footer-right">
  <h4>Get Started</h4>
  <Link to="/contact" className="footer-link">Contact Us</Link>
  <Link to="/careers" className="footer-link">Careers</Link>
</div>
        </footer>
      </div>
    </>
  );
}
