import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";
import NotFound from "./pages/NotFound";
import Health from "./pages/Health";
import RealEstate from "./pages/RealEstate";

const App: React.FC = () => {
  return (
    <Router>
      <LanguageProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/:lang/" element={<Home />} />
              <Route path="/:lang/health" element={<Health />} />
              <Route path="/:lang/realestate" element={<RealEstate />} />
              <Route path="/:lang/aboutus" element={<AboutUs />} />
              <Route path="/:lang/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </Router>
  );
};

export default App;
