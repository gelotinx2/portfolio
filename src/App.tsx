import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PasadaPage from "./pages/PasadaPage";
import Footer from "./components/Footer";

const App: React.FC = () => {
    return (
        <Router>
            <div className="min-h-screen font-sans bg-[#121212]">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pasada" element={<PasadaPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
