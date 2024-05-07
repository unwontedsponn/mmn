import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import HighlightSpeakers from "./components/HighlightSpeakers";
import Agenda from "./components/Agenda";
import BuyTickets from "./components/BuyTickets";
import FAQ from "./components/FAQ";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <HighlightSpeakers />
      <Agenda />
      <BuyTickets />
      <FAQ />
      <ContactUs />
      <Footer />
    </>
  );
}
