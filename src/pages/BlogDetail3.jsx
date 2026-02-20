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
    { id: "1", title: "Industry 3.0 and 4.0?" },
    { id: "2", title: "AI Role" },
    { id: "3", title: "challenges" },
    { id: "4", title: "start-up Help" },
    { id: "5", title: "How MeghaAI helps" }
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
        ·Dec 29, 2022 · 5 min read
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
    <h1>Navigating the transition to Industry 4.0: Challenges, opportunities, & the role of startups and AI</h1>
    <p>Dec 29, 20223</p>
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
       Industry 4.0 marks a transition from the basic computer automation of Industry 3.0 to "smart factories" powered by AI, IoT, and real-time data exchange. While this shift offers immense opportunities for predictive maintenance and production optimization, companies must navigate significant hurdles including high financial costs, technical complexity, and organizational resistance. Startups like MeghaAI bridge this gap by offering agile, no-code AI solutions that allow manufacturers to implement anomaly detection and data analytics without deep technical expertise. Ultimately, this evolution enables a more responsive and efficient industrial ecosystem that can adapt instantly to market demands.
      </p>
    </motion.div>
  </div>
</motion.div>


          {/* Sections */}
          <PremiumSection
            id="1"
            direction="left"
            title="What are the main differences between Industry 3.0 and 4.0?"
            image="/B31.avif"
          >
            <p> Industry 3.0, also known as the Digital Revolution, refers to the period of history characterized by the use of computers and automation in manufacturing processes, which began in the late 20th century. It marked a significant shift from earlier manufacturing practices, which were largely mechanical and manual.</p>

<p>Industry 4.0, also known as the Fourth Industrial Revolution, builds upon the technological advances of Industry 3.0 and introduces the integration of advanced technologies such as the Internet of Things (IoT), artificial intelligence (AI), and machine learning into manufacturing processes. This integration allows for greater automation and data exchange, enabling factories to become more flexible, efficient, and responsive to changes in demand.</p>

<p>Some key differences between Industry 3.0 and Industry 4.0 include:</p>


<p>1. Industry 3.0 is characterized by the use of computers to automate and control manufacturing processes, while Industry 4.0 involves the integration of advanced technologies such as AI and the IoT, which enables factories to become more flexible and responsive.</p>

<p>2. Industry 3.0 introduced the use of computers to improve efficiency and reduce errors in manufacturing processes, while Industry 4.0 introduces the concept of "smart factories," in which machines and systems are connected and can communicate with each other, enabling greater automation and data exchange.</p>

<p>3. Industry 3.0 focused on improving efficiency and reducing costs through automation, while Industry 4.0 aims to create more adaptable and flexible manufacturing processes that can respond quickly to changes in demand and market conditions.</p>
          </PremiumSection>

          <PremiumSection
            id="2"
            direction="right"
            title="What role does AI play in Industry 4.0?"
            image="/B32.avif"
          >
            <p> Artificial intelligence (AI) plays a significant role in Industry 4.0, also known as the Fourth Industrial Revolution. AI is used to automate and optimize manufacturing processes, improve efficiency and productivity, and enhance the overall performance of factories.</p>

<p>Some specific ways in which AI is used in Industry 4.0 include:</p>


<p>1. Automating manufacturing processes: AI can be used to automate tasks such as material handling, inspection, and quality control, allowing factories to operate more efficiently and reduce the need for manual labor.</p>


<p>2. Optimizing production: AI can be used to analyze data from various sources, such as machine sensors and production logs, to optimize production and identify areas for improvement.</p>


<p>3. Enhancing maintenance: AI can be used to monitor the performance of machines and equipment, identifying potential problems and suggesting maintenance actions before issues arise.</p>


<p>4. Improving product quality: AI can be used to analyze data from production processes and identify patterns or trends that may indicate potential quality issues. This allows factories to take proactive measures to prevent defects and improve product quality.</p>

<p>AI plays a key role in Industry 4.0 by enabling factories to automate and optimize their operations, enhance maintenance, and improve product quality.</p>
          </PremiumSection>

          <PremiumSection
            id="3"
            direction="left"
            title="What are the challenges in moving to Industry 4.0?"
            image="/B33.avif"
          >
            <p>There are several challenges that companies may face when transitioning from Industry 3.0 to Industry 4.0:</p>


<p>1. Technological challenges: Implementing advanced technologies such as the Internet of Things (IoT), artificial intelligence (AI), and machine learning requires a significant investment in both hardware and software. It also requires a certain level of technical expertise to design and implement these technologies, which may be a challenge for companies that do not have the necessary resources or expertise.</p>


<p>2. Organizational challenges: Adopting Industry 4.0 technologies requires a significant shift in the way a company operates and may involve changes to organizational structures, processes, and management practices. This can be a challenge, especially for companies that are used to traditional ways of working.</p>


<p>3. Cultural challenges: The implementation of Industry 4.0 technologies may also require a shift in the company culture and the way employees work. This can be a challenge, especially if employees are resistant to change or do not have the necessary skills to work with the new technologies.</p>


<p>4. Regulatory challenges: The adoption of Industry 4.0 technologies may also be subject to regulatory and legal constraints, such as data protection and privacy laws. Ensuring compliance with these regulations can be a challenge for companies.</p>


<p>5. Financial challenges: Implementing Industry 4.0 technologies can be expensive, requiring a significant investment in hardware, software, and training. This may be a challenge for smaller companies or those with limited financial resources.</p>

<p>Transitioning to Industry 4.0 requires a significant investment in advanced technologies, as well as changes to organizational structures, processes, and management practices. It can also be subject to regulatory and legal constraints and may require a shift in company culture and employee skills.</p>
          </PremiumSection>

          <PremiumSection
            id="4"
            direction="right"
            title="How can start-up companies help in making the transition smooth?"
            image="/B34.avif"
          >
           <p>There are several ways in which start-up companies can help facilitate a smooth transition to Industry 4.0:</p>


<p>1. Offering innovative solutions: Start-ups can play a key role in helping companies transition to Industry 4.0 by offering innovative solutions that address specific challenges or needs. This could involve developing new technologies or products that help companies automate and optimize their manufacturing processes, or providing software solutions that enable better data management and analysis.</p>


<p>2. Partnering with established companies: Start-ups can also help facilitate a smooth transition to Industry 4.0 by partnering with established companies and offering their expertise and solutions as part of a larger ecosystem of technologies and services. This can help companies adopt new technologies more quickly and efficiently.</p>


<p>3. Providing training and support: Start-ups can also help ensure a smooth transition to Industry 4.0 by providing training and support to companies as they adopt new technologies. This could include providing education and training on how to use new technologies, as well as offering ongoing support and maintenance to ensure that they are functioning optimally.</p>


<p>4. Leveraging their agility and flexibility: Start-ups are often more agile and flexible than larger, established companies, which can be an advantage in the fast-paced world of Industry 4.0. This agility and flexibility can help start-ups respond quickly to changes in the market and adapt to new technologies, making them valuable partners in the transition to Industry 4.0.</p>

<p>Innovative start-ups can play a key role in helping companies transition to Industry 4.0 by offering innovative solutions, partnering with established companies, providing training and support, and leveraging their agility and flexibility.</p>
          </PremiumSection>
                <PremiumSection
            id="5"
            direction="left"
            title="How MeghaAI helps manufacturing companies in moving to Industry 4.0?"
            image="/B35.avif"
          >
           <p>MeghaAI's no-code AI module can help manufacturing companies to move towards Industry 4.0 by providing a simple and efficient way to incorporate AI into their operations. With just a few clicks, users can build and run anomaly detection models to monitor their assets and processes in real-time, alerting them to any problems or issues that may arise. This proactive approach to maintenance and problem-solving can help manufacturing companies to reduce downtime and improve efficiency, positioning them to take advantage of the benefits of Industry 4.0.</p>

<p>In addition, MeghaAI's no-code AI module can help manufacturing companies to analyze and understand their data more effectively, providing valuable insights that can be used to optimize their operations and drive innovation. Overall, MeghaAI's software can be a valuable tool for manufacturing companies looking to move towards Industry 4.0 and stay competitive in a rapidly changing industry.</p>
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
    <span><FaEye /> 11 views</span>
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

