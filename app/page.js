"use client"
import { useState } from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Speakers from "./sections/Speakers";
import ContactUs from "./sections/ContactUs";
import Footer from "./sections/Footer";

export default function Home() {
  const [aboutInView, setAboutInView] = useState(false);
  const [speakersInView, setSpeakersInView] = useState(false);
  const [contactInView, setContactInView] = useState(false);

  return (
    <>
      <Header 
        aboutInView={aboutInView}
        speakersInView={speakersInView}
        contactInView={contactInView}
      />
      <Hero />
      <About setAboutInView={setAboutInView} />
      <Speakers setSpeakersInView={setSpeakersInView}/>
      <ContactUs setContactInView={setContactInView}/>
      <Footer />
    </>
  );
}
