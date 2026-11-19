import React from "react";
import Layout from "../../Components/layout/Layout";
import About from "../../Components/about/About";
import Hero from "../../Components/Hero/Hero";
//import MenuSection from "../../Components/menu/MenuSection";
import Contact from "../../Components/Contact/Contact";
import Menu from "../../Components/menu/Menu";

function Landing() {
  return (
    <Layout>
      <Hero />
      {/* <MenuSection /> */}
      <Menu />
      <About />
      <Contact />
    </Layout>
  );
}

export default Landing;
