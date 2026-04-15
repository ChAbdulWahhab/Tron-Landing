import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "@/pages/LandingPage";
import Terms from "@/pages/Terms";
import Privacy from "@/pages/Privacy";
import Feedback from "@/pages/Feedback";
import ScrollToTop from "@/components/layout/ScrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
}
