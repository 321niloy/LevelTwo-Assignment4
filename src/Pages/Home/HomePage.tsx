import Carousel from "../../Components/Banner/Carousel";
import CardSlider from "../../Components/CardSlider/CardSlider";
import Contact from "../../Components/Contact/Contact";
import Marque from "../../Components/Marquee/Marque";

const HomePage = () => {
  return (
    <div>
      <Marque></Marque>
      <Carousel></Carousel>
      <CardSlider></CardSlider>
      <Contact></Contact>
    </div>
  );
};

export default HomePage;
