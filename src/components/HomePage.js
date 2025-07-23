import Navbar2 from "./NavBar2";
import CardCarousel from "./CardCarousel";
import Footer from "./Footer";


function HomePage() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar2 />
      <CardCarousel />
      <Footer />
    </div>
  );
}

export default HomePage;