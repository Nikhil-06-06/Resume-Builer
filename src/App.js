import React from "react";

import "./static/scss/app.scss";
import "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/presentation/header";
import Footer from "./components/presentation/footer";
import LandingPage from "./components/presentation/landingPage";
import GettingStarted from "./components/presentation/gettingStarted";
import Login from "./components/presentation/login";
import Register from "./components/presentation/register";
import AboutUs from "./components/presentation/aboutUs";
import Contacts from "./components/presentation/contact";
import Education from "./components/presentation/education";
import Finalize from "./components/presentation/finalizePage";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/education" Component={Education}></Route>
        <Route path="/contact" Component={Contacts}></Route>
        <Route path="/getting-started" Component={GettingStarted}></Route>
        <Route path="/resume-templates" Component={GettingStarted}></Route>
        <Route path="/about-us" Component={AboutUs}></Route>
        <Route path="/finalize" Component={Finalize}></Route>
        <Route path="/login" Component={Login}></Route>
        <Route path="/register" Component={Register}></Route>
        <Route path="/" Component={LandingPage}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
