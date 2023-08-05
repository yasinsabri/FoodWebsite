import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import React from "react";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route index path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
