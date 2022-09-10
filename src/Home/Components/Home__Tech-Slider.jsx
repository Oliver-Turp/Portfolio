import Carousel from "better-react-carousel";
import TechSlides from "./Home__Technology-Data";

const Home__TechSlider = () => {
  const newDot = ({ isActive }) => {
    <span
      style={{
        display: "inline-block",
        height: isActive ? "8px" : "5px",
        width: isActive ? "8px" : "5px",
        background: isActive ? "red" : "blue",
      }}
    />;
  };
  return (
    <Carousel
      cols={4}
      rows={1}
      gap={20}
      loop
      showDots={true}
      hideArrow={true}
      autoplay={5000}
      mobileBreakpoint={250}
    >
      {TechSlides.map((slide) => (
        <Carousel.Item>
          <img width="100%" src={slide.image} className="tech-slider_image" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Home__TechSlider;
