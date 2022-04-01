import "./App.css";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/About";
import DataPage from "./pages/Data";
import HomePage from "./pages/Home";
import Mainnav from "./layout/Mainnav";
import Footer from "./layout/Footer";
import Testing from "./pages/Testing";
import React from "react";
import { render } from "@testing-library/react";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { apiResponse: "" };
//   }

//   callAPI() {
//     fetch("http://localhost:3001/testAPI")
//       .then((res) => res.text())
//       .then((res) => this.setState({ apiResponse: res }));
//   }

//   componentWillMount() {
//     this.callAPI();
//   }
// }

function App() {
    return (
      <div>
        <Mainnav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/data" element={<Testing />} />
        </Routes>
        <Footer />
      </div>
    );
  }

export default App;
