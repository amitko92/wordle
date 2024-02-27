import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import MainContent from "./components/mainContent/MainContent";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <MainContent />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
