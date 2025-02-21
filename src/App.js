import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Banner from "./Components/Banner";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import AcrylicBoxs from "./Components/Products/AcrylicBoxs";
import AcrylicMementos from "./Components/Products/AcrylicMementos";
import AcrylicRods from "./Components/Products/AcrylicRods";
import Acrylicsheets from "./Components/Products/Acrylicsheets";
import MachineCovers from "./Components/Products/MachineCovers";
import Home from "./pages/Home";
import Product from "./pages/Product";


const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <Banner />
        <Header />
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/products/acrylicsheets" element={<Acrylicsheets />} />
          <Route path="/products/acrylicsheets" element={<Acrylicsheets />} />
          <Route path="/products/acrylicsheets/:productId" element={<Acrylicsheets />} />
          <Route path="/products/acrylicboxs" element={<AcrylicBoxs />} />
          <Route path="/products/acrylicmementos" element={<AcrylicMementos />} />
          <Route path="/products/acrylicrod" element={<AcrylicRods />} />
          <Route path="/products/machinecover" element={<MachineCovers />} />
          <Route path="productList" element={<ProductList />} />


        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
};

export default App;
