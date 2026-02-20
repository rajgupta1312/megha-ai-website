import { Routes, Route } from "react-router-dom";
import contactpage from "./pages/contactpage";
import ResourcesPage from "./pages/ResourcesPage";
import Footer from "./components/Footer";
import BlogDetail from "./pages/BlogDetail";
import SearchResults from "./pages/SearchResults";
import BlogDetail2 from "./pages/BlogDetail2";
import BlogDetail3 from "./pages/BlogDetail3";
import BlogDetail4 from "./pages/BlogDetail4";
import BlogDetail5 from "./pages/BlogDetail5";
import BlogDetail6 from "./pages/BlogDetail6";
import BlogDetail7 from "./pages/BlogDetail7";
import BlogDetail8 from "./pages/BlogDetail8";
import BlogDetail9 from "./pages/BlogDetail9";
import AllPosts from "./pages/AllPosts";
import PressRelease from "./pages/PressRelease";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";





function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ResourcesPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/contact" element={<contactpage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/blog/1" element={<BlogDetail />} />
<Route path="/blog/2" element={<BlogDetail2 />} />
<Route path="/blog/3" element={<BlogDetail3 />} />
<Route path="/blog/4" element={<BlogDetail4 />} />
<Route path="/blog/5" element={<BlogDetail5 />} />
<Route path="/blog/6" element={<BlogDetail6 />} />
<Route path="/blog/7" element={<BlogDetail7 />} />
<Route path="/blog/8" element={<BlogDetail8 />} />
<Route path="/blog/9" element={<BlogDetail9 />} />
<Route path="/all-posts" element={<AllPosts />} />
<Route path="/press-release" element={<PressRelease />} />
<Route path="/blog" element={<Blog />} />
<Route path="/careers" element={<Careers />} />




      </Routes>
      
      {/* GLOBAL FOOTER */}
      <Footer />
    </>
  );
}

export default App;
