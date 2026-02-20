import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  FaShareAlt,
  FaUserCircle,
  FaEllipsisV,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaEye,
  FaRegCommentDots,
  FaLink,
  FaSmile,
  FaImage,
  FaVideo,
  FaGift,
  FaFacebook
} from "react-icons/fa";


import { FaXTwitter } from "react-icons/fa6";


import Navbar from "../components/Navbar";
import "./blog.css";


export default function BlogDetail() {
  const [showScroll, setShowScroll] = useState(false);
  const [mainLikes, setMainLikes] = useState(12);
  const [mainLiked, setMainLiked] = useState(false);
  const { id } = useParams();
  const ref = useRef(null);
  const [darkMode, setDarkMode] = useState(false);
  const [summaryOpen, setSummaryOpen] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [comment, setComment] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const navigate = useNavigate();
  const currentUrl = window.location.href;





const handleCopy = () => {
  navigator.clipboard.writeText(window.location.href);
  alert("Link copied!");
};


  /* Scroll Progress */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  });

  const sections = [
    { id: "1", title: "Introduction" }

  ];
  const [recentPosts, setRecentPosts] = useState([
  {
    id: 1,
    title: "Digital Twins in Industry",
    image: "/B11.avif",
    preview: "How digital twins are transforming predictive analytics.",
    views: 18,
    comments: 13,
    likes: 5,
    liked: false,
    link: "/blog/1"
  },
  {
    id: 2,
    title: "AI in Manufacturing",
    image: "/B12.avif",
    preview: "Leveraging AI to optimize production lines.",
    views: 13,
    comments: 18,
    likes: 5,
    liked: false,
    link: "/blog/2"
  },
  {
    id: 3,
    title: "Smart Supply Chains",
    image: "/B13.avif",
    preview: "How predictive systems help manage supply chain disruptions.",
    views: 20,
    comments: 9,
    likes: 5,
    liked: false,
    link: "/blog/3"
  }
]);
useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

  


  return (
    <>
      <Navbar />

      <motion.div className="progress-bar" style={{ scaleX }} />

      <div className={`blog-wrapper ${darkMode ? "dark" : ""}`} ref={ref}>
{/* CATEGORY TABS */}
<div
  style={{
    marginTop: "0px",   // space below navbar
    maxWidth: "1200px",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "0 20px"
  }}
>

  <div>
  <Link to="/all-posts">All Posts</Link>

  <Link to="/press-release" style={{ marginLeft: "20px" }}>
    Press Release
  </Link>

  <Link to="/blog" style={{ marginLeft: "20px" }}>
    Blog
  </Link>
</div>

  <input
    type="text"
    placeholder="Search posts..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === "Enter") navigate("/search");
    }}
    style={{
      width: "180px",
      padding: "6px 10px",
      borderRadius: "20px",
      border: "1px solid #ccc"
    }}
  />
</div>


        {/* Dark Mode Toggle */}
        <button 
          className="dark-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

       {/* LAYOUT WRAPPER */}
<div className="blog-layout">

  {/* Floating Table of Contents */}
  <aside className="toc">
    <h4>Contents</h4>
    {sections.map(sec => (
      <a key={sec.id} href={`#${sec.id}`}>
        {sec.title}
      </a>
    ))}
  </aside>

        {/* HERO */}
        <div className="blog-container">
        <motion.div
  initial={{ opacity: 0, y: -120 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
>
  {/* AUTHOR BAR */}
<div className="author-bar">
  <div className="author-left">
    <FaUserCircle className="author-icon" />
    <div>
      <span className="author-name">meghaai</span>
      <span className="author-meta">
        · Mar 3, 2022 · 1 min read
      </span>
    </div>
  </div>

  <div className="author-right">
    <button onClick={() => setShowShare(true)}>
  <FaShareAlt size={20} />
</button>
{showShare && (
  <div className="share-overlay">
    <div className="share-box">
      <h3>Share Post</h3>

      <div className="icons">
        <a
    href={`https://www.facebook.com/sharer/sharer.php?u=https://www.meghaai.com/post/five-most-dangerous-trends-facing-manufacturers-today
`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaFacebook size={30} />
  </a>
        <a
    href={`https://x.com/intent/post?url=https%3A%2F%2Fwww.meghaai.com%2Fpost%2Ffive-most-dangerous-trends-facing-manufacturers-today
`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaTwitter size={30} />
  </a>
        <a
    href={`https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttps%3A%2F%2Fwww.meghaai.com%2Fpost%2Ffive-most-dangerous-trends-facing-manufacturers-today`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedinIn size={30} />
  </a>
       <FaLink
    size={30}
    style={{ cursor: "pointer" }}
    onClick={() => {
      navigator.clipboard.writeText(currentUrl);
      alert("Link copied!");
    }}
  />
      </div>

      <button onClick={() => setShowShare(false)}>
        Close
      </button>
    </div>
  </div>
)}

  </div>
</div>

  <div className="blog-hero">
    <h1>Megha AI as AI-ML based insights solution provider for State of Indiana.</h1>
    <p>Updated: May 29, 2022</p>
  </div>

  {/* Auto Expand Summary */}
  <div className="summary">
    <div 
      className="summary-header"
      onClick={() => setSummaryOpen(!summaryOpen)}
    >
      <h3>Summary</h3>
      <span>{summaryOpen ? "−" : "+"}</span>
    </div>

    <motion.div
      initial={false}
      animate={{ height: summaryOpen ? "auto" : 0 }}
      className="summary-content"
    >
      <p>
      In collaboration with the Indiana Economic Development Corporation (IEDC) and Amazon Web Services (AWS), MeghaAI serves as a core technology provider for the Energy INsights program. This state-wide initiative aims to transform Indiana's manufacturing landscape by integrating AI-ML insights to drive down energy costs and improve global competitiveness.</p>

<p>MeghaAI’s role is centered on its RAIN (Rapid Actionable INsights) platform, which provides the advanced data science and machine learning models necessary to turn raw sensor data into significant savings.
      </p>
    </motion.div>
  </div>
</motion.div>


          {/* Sections */}
          <PremiumSection
            id="1"
            direction="left"
            title="New Energy Insights program, in partnership with IEDC and AWS, to reduce energy costs for Indiana manufacturers

            (March 2,2022)"
            image="/B91.avif"
          >
            <p>INDIANAPOLIS (March 2, 2022) – Energy Systems Network (ESN) and the Emerging Manufacturing Collaboration Center (EMC2) announced today the launch of Energy INsights. A first-of-its-kind statewide program, developed in collaboration with the Indiana Economic Development Corporation (IEDC) and Amazon Web Services (AWS), to use artificial intelligence (AI) and data science to reduce energy costs and improve sustainability for Indiana manufacturers.</p>
            <p>Energy INsights is designed to engage with at least 100 manufacturing companies across Indiana to integrate the I4.0 Accelerator solution powered by AWS that can gather data from legacy factory equipment and energy management systems, using AI/data analytics, to further optimize energy efficiency. The result is projected to be a reduction in energy costs of between 8-20% depending on the factory’s current efficiency of operations. Participating manufacturers expect to see improvements in their environmental, social, and governance (ESG) scores, an important benchmark for maintaining and attracting customers and investors.</p>
            <p> To support the program, the IEDC has approved $5 million to provide grants to participating manufacturers that will leverage investment made by AWS and its industry collaborators. This funding will ensure no financial cost for most small and medium-sized Indiana manufacturing companies to participate in Energy INsights and implement its advanced computer and sensor hardware and AI and data science software tools at their factories. </p>

<p style={{textAlign:"center"}}>Continue reading with:</p>

<p style={{textAlign:"center"}}>< a href="https://www.cicpindiana.com/new-energy-insights-program-in-partnership-with-iedc-and-aws-to-reduce-energy-costs-for-indiana-manufacturers/" target="_blank">Central Indiana Corporate Partnership</a></p>

<p style={{textAlign:"center"}}>< a href="https://energysystemsnetwork.com/2022/03/energyinsights/" target="_blank">Energy Systems Network </a></p>

<p style={{textAlign:"center"}}>< a href="https://www.energyinsights.tech/new-energy-insights-program" target="_blank">Energy Insights  </a></p>

<p style={{textAlign:"center"}}>< a href="http://www.wbiw.com/2022/03/02/new-energy-insights-program-in-partnership-with-iedc-and-aws-to-reduce-energy-costs-for-indiana-manufacturers/" target="_blank">WBIW </a></p>


          </PremiumSection>
          {/* SHARE + STATS */}
<div className="share-section">
  <div className="share-icons">

  {/* Facebook */}
  <a
    href="https://www.facebook.com/sharer/sharer.php?u=https://www.meghaai.com/post/five-most-dangerous-trends-facing-manufacturers-today"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaFacebookF />
  </a>

  {/* X (Twitter) */}
  <a
    href="https://x.com/intent/post?url=https%3A%2F%2Fwww.meghaai.com%2Fpost%2Ffive-most-dangerous-trends-facing-manufacturers-today"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaXTwitter />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/feed?mini=true&url=https%3A%2F%2Fwww.meghaai.com%2Fpost%2Ffive-most-dangerous-trends-facing-manufacturers-today&shareUrl=https%3A%2F%2Fwww.meghaai.com%2Fpost%2Ffive-most-dangerous-trends-facing-manufacturers-today&shareActive=true&linkOrigin=LI_BADGE&skipRedirect=true&lipi=urn%3Ali%3Apage%3Ad_UNKNOWN_ROUTE_inshare-redirect%3B19b2eb82-0de4-40a8-ad31-048082b4a11b"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedinIn />
  </a>

  {/* Copy Link */}
  <FaLink className="copy-icon" onClick={handleCopy} />

</div>


  <div className="post-stats">
    <span><FaEye /> 10 views</span>
    <span><FaRegCommentDots /> 0 comments</span>
    <span 
  className="like-btn"
  onClick={() => {
    if (!mainLiked) {
      setMainLikes(mainLikes + 1);
    } else {
      setMainLikes(mainLikes - 1);
    }
    setMainLiked(!mainLiked);
  }}
>
  {mainLiked ? (
    <FaHeart className="heart filled" />
  ) : (
    <FaRegHeart className="heart" />
  )}
  <span className="like-count">{mainLikes}</span>
</span>


  </div>
</div>
{/* RECENT POSTS */}
<div className="recent-posts">
  <div className="recent-header">
  <h3>Recent Posts</h3>
  <button className="see-all">See All</button>
</div>

  <div className="recent-grid">
    {recentPosts.map(post => (
  <RecentCard 
    key={post.id} 
    post={post} 
    updatePosts={setRecentPosts}
  />
))}

  </div>
</div>
{/* Comment Section Title */}
<div style={{ marginTop: "60px", marginBottom: "20px" }}>
  <h2 style={{ borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
    Comments
  </h2>
</div>

{/* COMMENTS */}
<textarea
  placeholder="Start writing or type / for plugins"
  value={comment}
  onChange={(e) => setComment(e.target.value)}
  style={{ width: "100%", height: "100px" ,border: "2px solid black", borderRadius: "20px", padding: "15px"}}
/>

<div style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
  <FaSmile />
  <FaImage />
  <FaVideo />
  <FaGift />
</div>

<div style={{ marginTop: "15px" }}>
  <span
    style={{ color: "blue", cursor: "pointer" }}
    onClick={() => setShowLogin(true)}
  >
    Log in to publish as a member
  </span>

  <div style={{ float: "right" }}>
    <button onClick={() => setComment("")}>Cancel</button>
    <button>Publish</button>
  </div>
</div>



        </div>
      </div>

        </div> {/* END blog-container */}

      {showLogin && (
  <div className="login-overlay">
    <div className="login-box">
      <h1>Log In</h1>
      <p>New to this site? Sign Up</p>

      <button>Log in with Google</button>
      <button>Log in with Facebook</button>
      <button>Log in with Email</button>

      <button onClick={() => setShowLogin(false)}>
        Close
      </button>
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
        {showScroll && (
  <button className="scroll-top-btn" onClick={scrollToTop}>
    ↑
  </button>
)}

    </>
  );
}


/* 🔥 Section Component */
function PremiumSection({ id, direction, title, image, children }) {
  const isLeft = direction === "left";

  return (
    <motion.section
      id={id}
      className={`premium-section ${isLeft ? "row-normal" : "row-reverse"}`}
      initial={{ opacity: 0, x: isLeft ? -200 : 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}  // 🔥 animation every scroll
    >
        {image && (
  <div className="section-image">
    <img src={image} alt={title} />
  </div>
)}

      <div className="section-text">
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
    </motion.section>
    
  );
}
function RecentCard({ post, updatePosts }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleLike = (e) => {
    e.stopPropagation();
    updatePosts(prev =>
      prev.map(p =>
        p.id === post.id
          ? {
              ...p,
              liked: !p.liked,
              likes: p.liked ? p.likes - 1 : p.likes + 1
            }
          : p
      )
    );
  };

  return (
    <div className="recent-card-wrapper">

      <div className={`recent-card-inner ${isFlipped ? "flipped" : ""}`}>

        {/* FRONT */}
        <div className="recent-card-front">

          {/* TOP IMAGE AREA (FLIP + NAVIGATE) */}
          <Link
            to={post.link}
            className="recent-top-area"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
          >
            <img src={post.image} alt={post.title} />
            <h4>{post.title}</h4>
          </Link>

          {/* DIVIDER LINE */}
          <div className="recent-divider"></div>

          {/* BOTTOM ICON AREA (NO FLIP) */}
          <div className="recent-bottom-area">
            <span><FaEye /> {post.views}</span>
            <span><FaRegCommentDots /> {post.comments}</span>

            <span className="like-btn" onClick={handleLike}>
              {post.liked ? (
                <FaHeart className="heart filled" />
              ) : (
                <FaRegHeart className="heart" />
              )}
              {post.likes}
            </span>
          </div>

        </div>

        {/* BACK */}
        <div
          className="recent-card-back"
          onMouseLeave={() => setIsFlipped(false)}
        >
          <p>{post.preview}</p>

          <Link to={post.link} className="read-more-btn">
            Read More →
          </Link>
        </div>

      </div>
    </div>
  );
}

