import dynamic from "next/dynamic";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Copyright from "../src/components/Copyright";
import Features from "../src/components/Features";
import Home from "../src/components/Home";
import Skills from "../src/components/Skills";
import Head from "next/head";
import Header from "../src/layouts/Header";
import Layout from "../src/layouts/Layout";
import MobileHeader from "../src/layouts/MobileHeader";
import Mouse from "../src/layouts/Mouse";
import ScrollTop from "../src/layouts/ScrollTop";
const Index = () => {
  return (
    <Layout>
      <Head>
        <title>Fauzan Gifari</title>
      </Head>
      <MobileHeader />
      <Header />
      <Home />
      <Features />
      <About />
      <Skills />
      <Contact />
      <Copyright />
      <Mouse />
      <ScrollTop />
    </Layout>
  );
};
export default Index;
