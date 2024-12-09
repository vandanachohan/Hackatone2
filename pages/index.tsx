import NewCeramics from "./components/NewCeramics";
import ProductCard from "./components/ProductCard";
import Nav from "./components/TopNav";
import Feature from "./components/feature";
import Footer from "./components/footer";
import HeroSection from "./components/herosection";
import Contanier from "./components/Container";
import Features from "./components/features";
import Link from "next/link";


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

       {/* 2nd [Page] Link */}
       <ul>
        <li>
          <Link
            href="/homepage2"
            className="bg-[#8773c9] text-white py-3 px-6 rounded-lg hover:bg-[#705bb5]"
          >
            Go to the second homepage
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
