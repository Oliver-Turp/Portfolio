import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Temp from "../Assets/Images/Glados.jpg";

import "../Styles/home__index.css";

const Home__Index = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Oliver Turp | Home</title>
        </Helmet>
      </HelmetProvider>
      <div className="home__index-wrap">
        <div className="home__index-wrap_bio-wrap">
          <div className="home__index-wrap_bio-content">
            <div className="home__index-wrap_bio-content_logo">
              <img src={Temp} alt="Temp" />
            </div>
            <div className="home__index-wrap_bio-content_text">
              <h1>Hello, I'm Oliver!</h1>
              <p>
                I am a bachelor of engineering (BEng) having graduated with
                upper second class honours in civil engineering.
              </p>
              <p>
                despite my chosen field, during the pandemic I decided to teach
                myself to code.
              </p>
              <p>
                I have taken a keen interest in front end web design and
                development.
              </p>
              <br />
              <p>
                Please snoop around the <Link to="/">projects</Link> I've
                undertaken in my short career so far
              </p>
              <p>
                Or perhaps learn more <Link to="/">about me</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home__Index;
