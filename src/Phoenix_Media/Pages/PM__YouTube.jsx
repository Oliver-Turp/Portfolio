import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

import TCG_Banner from "../Assets/Images/channels4_banner.jpg";
import Left from "../Assets/Images/l_arrow.svg";
import Right from "../Assets/Images/r_arrow.svg";

import "../Styles/pm__youtube.css";

const PM__YouTube = () => {
  const track = document.querySelector(".carousel__track");
  const slides = Array.from(track.children);
  const nextButton = document.querySelector(".carousel__button--right");
  const prevButton = document.querySelector(".carousel__button--left");
  const dotsNav = document.querySelector(".carousel__nav");
  const dots = Array.from(dotsNav.children);

  const slideWidth = slides[0].getBoundingClientRect().width;

  const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px";
  };
  slides.forEach(setSlidePosition);

  const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = "translateX(-" + targetSlide.style.left + ")";
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
  };

  const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove("current-slide");
    targetDot.classList.add("current-slide");
  };

  const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
      prevButton.classList.add("is-hidden");
      nextButton.classList.remove("is-hidden");
    } else if (targetIndex === slides.length - 1) {
      prevButton.classList.remove("is-hidden");
      nextButton.classList.add("is-hidden");
    } else {
      prevButton.classList.remove("is-hidden");
      nextButton.classList.remove("is-hidden");
    }
  };

  prevButton.addEventListener("click", (e) => {
    const currentSlide = track.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector(".current-slide");
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex((slide) => slide === prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
  });

  nextButton.addEventListener("click", (e) => {
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector(".current-slide");
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex((slide) => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
  });

  dotsNav.addEventListener("click", (e) => {
    const targetDot = e.target.closest("button");

    if (!targetDot) return;

    const currentSlide = track.querySelector(".current-slide");
    const currentDot = dotsNav.querySelector(".current-slide");
    const targetIndex = dots.findIndex((dot) => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
  });

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Phoenix Media | Temp</title>
        </Helmet>
      </HelmetProvider>

      <div className="yt-banner">
        <a
          href="https://www.youtube.com/channel/UC_jS43nnHuq7pWd65TVAzzA"
          target="_blank"
        >
          <img src={TCG_Banner} alt="yt-banner" />
        </a>
      </div>
      <main className="main-yt">
        <div className="carousel cb">
          <button className="carousel__button carousel__button--left is-hidden">
            <img src={Left} alt="left" />
          </button>
          <div className="carousel__track-container">
            <ul className="carousel__track">
              <li className="carousel__slide current-slide">
                <div>Latest Video</div>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/?listType=playlist&list=UU_jS43nnHuq7pWd65TVAzzA"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>{" "}
              </li>

              <li className="carousel__slide">
                <div>Popular Uploads</div>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/LNtXoDWTgnM"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </li>

              <li className="carousel__slide">
                <div>Popular Uploads</div>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/tW5qB33_4uI"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </li>

              <li className="carousel__slide">
                <div>Popular Uploads</div>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/xJ1vt37uMUU"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </li>
            </ul>
          </div>
          <button className="carousel__button carousel__button--right">
            <img src={Right} alt="right" />
          </button>

          <div className="carousel__nav">
            <button className="carousel__indicator current-slide"></button>
            <button className="carousel__indicator"></button>
            <button className="carousel__indicator"></button>
            <button className="carousel__indicator"></button>
          </div>
        </div>
      </main>
    </>
  );
};

export default PM__YouTube;
