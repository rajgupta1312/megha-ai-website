import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./resources.css";

const blogs = [
  {
    id: 1,
    title: "Five most dangerous trends facing manufacturers today",
    date: "Mar 26, 2023",
    image: "RE.B1.avif",
    preview: "Explore the major risks manufacturers face including regulations, digital disruption and market shifts."
  },
  {
    id: 2,
    title: "3D Digital Twins and AI for Predictive Analytics in Industry",
    date: "Jan 11, 2023",
    image: "RE.B2.avif",
    preview: "How digital twins and AI transform predictive maintenance and operational intelligence."
  },
  {
    id: 3,
    title: "Navigating the transition to Industry 4.0",
    date: "Dec 29, 2022",
    image: "RE.B3.avif",
    preview: "How manufacturers can successfully transition to Industry 4.0 with AI and IoT."
  },
  {
    id: 4,
    title: "Effortlessly Monitor Your Manufacturing Assets",
    date: "Dec 29, 2022",
    image: "RE.B4.avif",
    preview: "How to monitor manufacturing assets with minimal effort using AI."
  },
  {
    id: 5,
    title: "Maximizing Efficiency and Quality in Manufacturing",
    date: "Dec 26, 2022",
    image: "RE.B5.avif",
    preview: "How to maximize efficiency and quality in manufacturing operations."
  },
  {
    id: 6,
    title: "How Manufacturing companies can save energy using IOT data?",
    date: "Dec 26, 2022",
    image: "RE.B6.avif",
    preview: "How to save energy in manufacturing using IoT data."
  },
  {
    id: 7,
    title: "6 Ways Anomaly Detection Can Benefit Manufacturing Operations",
    date: "Dec 26, 2022",
    image: "RE.B7.avif",
    preview: "How anomaly detection can improve manufacturing operations."
  },
  {
    id: 8,
    title: "Monitoring Asset Health with Megha AI Solution.",
    date: "Jul 10, 2022",
    image: "RE.B8.avif",
    preview: "How Megha AI helps monitor asset health in manufacturing."
  },
  {
    id: 9,
    title: "Megha AI as AI-ML based insights solution provider for State of Indiana.",
    date: "Mar 3, 2022",
    image: "RE.B9.avif",
    preview: "How Megha AI provides AI-ML based insights for the State of Indiana."
  }
];

export default function ResourcesPage() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      <div className="resources-page">

        {/* Animated Page Title */}
        <motion.h1
          className="resources-title"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          BLOGS
        </motion.h1>

        {/* Blog Grid */}
        <div className="blog-grid">
          {blogs.map((blog, index) => (
            
            <Link 
              to={`/blog/${blog.id}`} 
              key={blog.id} 
              className="blog-link"
            >
              <motion.div
  className="blog-card"
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.15 }}
>
  <div className="card-inner">
    
    {/* FRONT */}
    <div className="card-front">
      <div className="blog-image">
        <img src={blog.image} alt={blog.title} />
      </div>

      <div className="blog-content">
        <p className="blog-date">{blog.date}</p>
        <h3>{blog.title}</h3>
      </div>
    </div>

    {/* BACK (Preview) */}
    <div className="card-back">
  <div className="preview-wrapper">
    <p className="preview-text">{blog.preview}</p>
  </div>

  <div className="read-more">
    Read More →
  </div>
</div>

  </div>
</motion.div>


            </Link>
            

          ))}
        </div>
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
