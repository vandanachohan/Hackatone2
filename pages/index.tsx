import NewCeramics from "./components/NewCeramics";
import ProductCard from "./components/ProductCard";
import Nav from "./components/TopNav";
import Feature from "./components/feature";
import Footer from "./components/footer";
import HeroSection from "./components/herosection";
import Contanier from "./components/Container";
import Features from "./components/features";


const Home = () => {
  return (
    <div>
      <Nav />
      <HeroSection />
      <Feature />
      <NewCeramics />
      <ProductCard />
      <Contanier />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
