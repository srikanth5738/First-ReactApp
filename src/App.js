import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Events from "./pages/events";
import AnnualReport from "./pages/annual";
import Sri3 from "./pages/sri3";
import Blogs from "./pages/blogs";
import Sri2 from "./pages/sri2";

function App() {
  return (
    <div className="apple">
	
		 <BrowserRouter>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/annual" element={<AnnualReport />} />
        <Route path="/sri3" element={<Sri3 />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/sri2" element={<Sri2 />} />
        
      </Routes>
    </BrowserRouter>
    </div>

	
   
  );
}

export default App;
