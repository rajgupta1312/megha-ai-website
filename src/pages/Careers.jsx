import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./careers.css";

export default function Careers() {
  const [showForm, setShowForm] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");

  const openForm = (role) => {
    setSelectedRole(role);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <>
      <Navbar />

      <div className="careers-page">
        <h1 className="careers-title">Careers</h1>

        <div className="careers-container">
          {/* Card 1 */}
          <div className="career-card card-1">
            <h3>Data Scientist</h3>
            <p>
              3-5 Year’s experience in building models with IOT data. Deep
              knowledge on Hyper parameter tuning and accuracy metrics.
            </p>
            <button onClick={() => openForm("Data Scientist")}>
              APPLY
            </button>
          </div>

          {/* Card 2 */}
          <div className="career-card card-2">
            <h3>AWS Cloud Expert</h3>
            <p>
              Cloud migration specialist with 5-7 years of experience in
              moving in house databases to cloud. Having good expertise in
              both structured and unstructured data migration.
            </p>
            <button onClick={() => openForm("AWS Cloud Expert")}>
              APPLY
            </button>
          </div>

          {/* Card 3 */}
          <div className="career-card card-3">
            <h3>Product Owner</h3>
            <p>
              10-12 Years experience in handling project in Agile. Ability
              to define the product backlog and run Scrum teams providing
              guidance to the team on releases and deliverables.
            </p>
            <button onClick={() => openForm("Product Owner")}>
              APPLY
            </button>
          </div>
        </div>

        {/* Modal */}
        {showForm && (
          <div className="modal-overlay">
            <div className="modal">
              <span className="close-btn" onClick={closeForm}>
                ✕
              </span>

              <h2>Apply Here</h2>

              <form className="apply-form">
                <div className="row">
                  <input type="text" placeholder="First Name" required />
                  <input type="text" placeholder="Last Name" required />
                </div>

                <div className="row">
                  <input type="email" placeholder="Email *" required />
                  <input type="tel" placeholder="Phone" />
                </div>

                <div className="row">
                  <select value={selectedRole} readOnly>
                    <option>{selectedRole}</option>
                  </select>
                  <input type="date" />
                </div>

                <button type="submit" className="submit-btn">
                  APPLY
                </button>
              </form>
            </div>
          </div>
        )}

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
