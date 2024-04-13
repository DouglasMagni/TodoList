import { Route, Routes } from "react-router-dom";
import App from "../App.jsx";
import React from "react";
import Nav from "../components/Nav.tsx";
import Footer from "../components/Footer.tsx";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="nav" element={<Nav />} />
      <Route path="footer" element={<Footer />} />
    </Routes>
  );
}
