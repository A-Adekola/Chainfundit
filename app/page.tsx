// pages/index.tsx
import Header from "./components/Header";
import Hero from "./components/Hero";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <MainContent />
      <Footer />
    </div>
  );
}
