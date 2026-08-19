import Header from "../components/Header";
import Hero from "../components/Hero";
import ServicesBar from "../components/ServicesBar";
import Mission from "../components/Mission";
import HowItWorks from "../components/HowItWorks";
import useReveal from "../useReveal";
import Projects from "../components/Projects";
import Events from "../components/Events";
import NewsFaq from "../components/NewsFaq";
import CtaBanner from "../components/CtaBanner";
import Footer from "../components/Footer";

export default function Home({ showEvents = true }) {
  useReveal();
  return (
    <div style={{ background: "#F2F5F9" }}>
      <div style={{ background: "#17458F", padding: "0 0 96px" }}>
        <Header />
        <Hero />
      </div>

      <ServicesBar />
      <Mission />
      <HowItWorks />
      <Projects />
      <Events show={showEvents} />
      <NewsFaq />
      <CtaBanner />
      <Footer />
    </div>
  );
}
