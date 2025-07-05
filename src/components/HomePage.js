import Navbar2 from "./NavBar2";
import FeaturedCard from "./FeaturedCard";
import CardCarousel from "./CardCarousel";


function HomePage() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar2 />
      <CardCarousel />
    </div>
  );
}

export default HomePage;