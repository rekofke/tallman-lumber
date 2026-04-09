import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Tallman.css";
import FAQ from "./pages/resources/FAQ";
import Referrals from "./pages/resources/Referrals";
import CustomerProjects from "./pages/CustomerProjects";
import Tools from "./pages/Tools";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
// import News from "./pages/News";
// import { News } from './pages/News';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/referrals" element={<Referrals />} />
          <Route path="projects" element={<CustomerProjects />} />
          <Route path="tools" element={<Tools />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />

          {/* <Route path="news" element={<News />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
