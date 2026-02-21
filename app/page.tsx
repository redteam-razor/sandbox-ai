import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import WhatsInTheBox from "@/components/WhatsInTheBox";
import Training from "@/components/Training";
import Trust from "@/components/Trust";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Pricing />
        <WhatsInTheBox />
        <Training />
        <Trust />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
