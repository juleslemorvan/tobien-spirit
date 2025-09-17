import Product from "@/components/Product/Product";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Philosophy from "@/components/Philosophy/Philosophy";
import Product2 from "@/components/Product2/Product2";

export default function Home() {
  return (
    <main style={{ flex: "1" }}>
      <Header />
      <Hero />
      <Product />
      <Product2 />
      <Philosophy />
      <Contact />
      <Footer />
    </main>
  );
}
