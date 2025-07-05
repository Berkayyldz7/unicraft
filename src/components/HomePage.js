import Navbar2 from "./NavBar2";
import FeaturedCard from "./FeaturedCard";


function HomePage() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar2 />
      {/* <div className="pt-32 text-center text-white">
            <FeaturedCard
        image="https://cdn.prod.website-files.com/6425f546844727ce5fb9e5ab/680f1ccd5c6d45a068e6d907_04-03-Blog-Header.avif"
        category="Move"
        title="Announcing the Move Registry (MVR): Radical Interoperability"
        link="https://blog.sui.io/announcing-move-registry-interoperability/"
        />

      </div> */}

        <div className="bg-black min-h-screen flex justify-center items-center p-10">
         <FeaturedCard
        image="https://cdn.prod.website-files.com/6425f546844727ce5fb9e5ab/680f1ccd5c6d45a068e6d907_04-03-Blog-Header.avif"
        category="Move"
        title="Announcing the Move Registry (MVR): Radical Interoperability"
        link="https://blog.sui.io/announcing-move-registry-interoperability/"
         />
        </div>
    </div>
  );
}

export default HomePage;
