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
    { id: "1", title: "Industry 4.0 " },
    { id: "2", title: "Solution Overview" },
    { id: "3", title: "Data Pipeline " },
    { id: "4", title: "Business Benefits " },
    { id: "5", title: "Solution Details   " },
    { id: "6", title: "About the Authors " }

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
        · Jul 10, 2022 · 4 min read
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
    <h1>Monitoring Asset Health with Megha AI Solution.</h1>
    <p>Updated: Jan 11, 2023</p>
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
       Megha AI’s Asset Health solution, powered by the RAIN platform and AWS, transitions manufacturers to predictive maintenance by using no-code AI to monitor real-time sensor data. The system creates a digital twin of the factory floor, automatically detecting abnormal machine behavior and providing root cause analysis to prevent failures before they occur. By democratizing machine learning for non-experts, the platform is projected to reduce maintenance-related costs significantly while increasing gross margins by up to 33%. Ultimately, it optimizes asset uptime and energy efficiency, allowing plant operators to schedule repairs precisely when needed rather than relying on wasteful, fixed schedules.
      </p>
    </motion.div>
  </div>
</motion.div>


          {/* Sections */}
          <PremiumSection
            id="1"
            direction="left"
            title="Industry 4.0 "
            image=""
          >
            <p>The Fourth Industrial Revolution, or Industry 4.0, is bringing rapid changes within the industry from the evolution of technology, largely due to increasing interconnectivity, smart automation, and modern technologies like artificial intelligence, big data, and machine learning and building technology to derive insights from data and technical processes. </p>
            <p>This movement is making fundamental shifts toward the “Smart Factory” through automation of existing manufacturing and industrial practices using the internet of things (IoT). This adoption of smart sensors and IoT is resulting in increased automation, improving communication between machines, between processes, between machines and processes, between people and machines/processes, and self-monitoring, as well as the use of smart machines that can analyze and diagnose issues without the need for human intervention. The applications of Industry 4.0 range in wide technologies like sensors, the Internet of Things, Mobile, Cloud Computing, Big Data, AR/VR, AI-ML, and many more.</p>
            <p> Industry 4.0 and the “Smart Factory” is no longer a distant goal. Various elements within manufacturing: people, process, product, quality, performance, and machine metrics can all exchange data with each other with IoT and other high-speed communication channels like 5G and efficient protocols like MQTT. The concept of the “digital twin” and its reality through the cloud services like AWS IoT Site Wise, and AWS digital TwinMaker, can bring the system components of the factory to the centralized technological platform for better insights and data-driven decision making. </p>

<p>Megha AI through the I4.0 Accelerator solution powered by AWS can gather data from assets and energy reading systems to optimize energy efficiency using AI/data analytics. This solution is projected to drive down energy costs between 8-20% depending on the factory’s current  
the efficiency of operations.  </p>

<p>Megha AI also provides an Asset Health solution. This is an anomaly detection platform that scans the health of machines, alerts when there is abnormal behavior, and provides a root cause analysis as to where the anomaly occurred. These analytics help industries move towards predictive maintenance and allow for plant owners to determine when to schedule maintenance before machine failure and optimize cost. </p>
<p>This solution is projected to reduce product development costs by up to 50% and increase gross margin by 33%.  </p>

          </PremiumSection>

          <PremiumSection
            id="2"
            direction="right"
            title="Solution Overview"
            image=""
          >
            <p>
 Machine maintenance is the process of assessing, upgrading, and performing upkeep on machinery to ensure mechanical assets stay running with minimal downtime. Scheduling machine maintenance can be challenging for manufacturers today. Maintaining too frequently is waste of time and resources, whereas not maintaining machines until the point of failure can lead to substantial repair costs, delayed production schedules, and workplace accidents. Megha AI proposes a solution to machine maintenance scheduling wherein continuous monitoring of machines is applied using advanced machine learning and analysis which alerts the end-user when machines are behaving abnormally.  

</p>

<p>Megha AI RAIN (Rapid Actionable Insights Navigator) provides a digital twin of the plant floor, machine insights visualization, and machine learning models to monitor asset health.

</p>
<p>Asset health functionality works with multiple related assets and associated measurements/tags and is not limited to a single asset.  </p>
          </PremiumSection>

          <PremiumSection
            id="3"
            direction="left"
            title="Data Pipeline 

"
            image=""
          >
            <p>The following block diagram summarizes the data flow from the factory to the visualization. Data from the industrial assets are captured and organized at the edge and sent to Amazon Web Services (AWS) Cloud to be stored, processed, and visualized. 

</p>
 <img src="/B81.avif" className="blog-inline-image" />

<p>Megha AI auto-extracts the data schema from the edge and transforms streaming asset values for data visualization, model training, and inference. This data pipeline is built under our intuitive, no-code user interface which provides uses a way to derive value from data insights without any prior knowledge of data science knowledge. </p>
<img src="/B82.avif" className="blog-inline-image" />
          </PremiumSection>

          <PremiumSection
            id="4"
            direction="right"
            title="Business Benefits  
"
            image=""
          >
           <p>Most manufacturers today operate with outdated, stale, data or no data at all. When data connectivity is established, there is an overwhelming amount of data published at a very high velocity. Without AI-ML tools for data analytics and Insights, it is impossible to digest and understand the millions of metrics published by machines.  </p>

<p>Megha AI’s Asset Health is a breakthrough in the democratization of AI and ML technology- any manufacturer, plant operator, supervisor, or machinist can derive insights without the need for a data science organization. Asset Health facilitates development by providing user-friendly tools, pre-built algorithms, and intuitive interfaces within a high-performance cloud computing platform.  

</p>

<p>With Asset Health, end users can build AI models to identify and understand abnormal behavior on machines. Asset Health monitors machine parameters and alerts when abnormal behavior is detected. This technology increases assets uptime, performance, and quality of the parts being produced, and ultimately kick starts predictive maintenance across industries.

</p>
          </PremiumSection>
 <PremiumSection
            id="5"
            direction="left"
            title="Solution Details  "
            image=""
          >
           <p>Asset Health provides a platform for end-users to build AI models to monitor the running behavior of assets and schedule an inference, which runs the model periodically in real-time, streaming data to assess for anomalous behavior. </p>

 <p>The user can build new Asset Health models by selecting assets and their associated measurements/tags, and optionally loading past failures (timestamps). Models can support as many as 300 measurements.  </p>
 <img src="/B83.avif" className="blog-inline-image" />

 <p>Once the Asset Health model is created, real-time streaming data from the assets can be scheduled for inference at the desired time intervals and frequencies. For example, critical equipment is monitored at a high frequency whereas less operational equipment does not need the same level of inference. 

</p>
<img src="/B84.avif" className="blog-inline-image" />
<p>Asset Health allows users to understand the behavior of their machines over time by visualizing machine health and plotting sensor contributions to each abnormal asset event. Alarms can also be set on these results to notify users of critical metrics and potential machine failure.</p>
<img src="/B85.avif" className="blog-inline-image" />

          </PremiumSection>
 <PremiumSection
            id="6"
            direction="right"
            title="About the Authors"
            image=""
          >
           <p>Krishan Kumar Meghani is an experienced software professional with 25+ years of software product development experience in the enterprise and Industrial suite of products, mainly in the oil, gas, and marine industries. He has led various Innovative development Products throughout his career for the success of the customers. He has six patents filed in his name along with co-inventors in machine learning and data science for industrial domains.  </p>

 <p>Aarthi Janakiraman is a data analytics and cloud industry professional for Megha AI. She currently works with several manufacturers across Indiana and helps define data science strategy and AI/ML execution within the industry 4.0 space. 



</p>
<h3>Contact us </h3>
<p>1-833-634-4281</p>

<p>support@meghaai.com</p>

 <p>Visit us at  </p>

<p>https://www.meghaai.com/ </p>

<p>https://www.linkedin.com/company/meghaai/</p>

 

<p><a href="">Blog</a></p>
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
    <span><FaEye /> 19 views</span>
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

