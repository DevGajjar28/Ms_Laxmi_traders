import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Acrylicsheets from "./Components/Products/Acrylicsheets";
import Home from "./pages/Home";
import Product from "./pages/Product";

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/products/acrylicsheets" element={<Acrylicsheets />} />
          <Route path="/products/acrylicsheets" element={<Acrylicsheets />} />


        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
};

export default App;
