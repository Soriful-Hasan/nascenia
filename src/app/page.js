import Image from "next/image";
import Header from "./Components/Header";
import Service from "./Components/Service";
import AboutUs from "./Components/AboutUs";
import OurClients from "./Components/OurClients";
import ServicesGrid from "./Components/ServicesGrid";
import Partnership from "./Components/Partnership";
import Specialize from "./Components/Specialize";
import ContactSection from "./Components/Contact";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Service />
      <AboutUs />
      <OurClients />
      <ServicesGrid />
      <Partnership />
      <Specialize />
      <ContactSection />
      <Footer />
    </>
  );
}
