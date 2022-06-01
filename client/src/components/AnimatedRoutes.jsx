import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "../pages/Home";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../components/contact/Contact";
import Article from "../pages/Article";
import NoMatch from "../pages/NoMatch";
import { AnimatePresence } from "framer-motion";
import Login from "../pages/Login";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Article />} />
        <Route path="/blog/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>{" "}
    </AnimatePresence>
  );
}
