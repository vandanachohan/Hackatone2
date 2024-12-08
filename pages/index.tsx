
import NewCeramics from "./components/NewCeramics";
import ProductCard from "./components/ProductCard";
import Nav from "./components/TopNav";
import Feature from "./components/feature";
import Footer from "./components/footer";
import HeroSection from "./components/herosection";
import Contanier from "./components/Container";



export default  function Home (){

    return(
      <div>

      <Nav/>
      <HeroSection/>
      <Feature/>
      <NewCeramics/>
      <ProductCard/>
      <Contanier/>
      <Footer/>
      </div>
    )
 };
 
 