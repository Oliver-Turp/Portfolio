import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "../Styles/home__about.css";

const Home__About = () => {
  return (
    <div className="home__about-wrap">
      <div className="home__about-wrap_content">
        <h1>about me</h1>
        <section className="home__about-wrap_content_personalProfile">
          <h2>personal profile</h2>
          <p>blurb</p>
        </section>
        <div className="home__about-wrap_content-buttons">
          <Link to="../Assets/Uploads/" target="_blank">
            Download my CV
          </Link>
          <Link to="../Assets/Uploads/" target="_blank">
            Download my degree
          </Link>
        </div>
        <section className="home__about-wrap_content_transferableSkills">
          <h2>transferable skills</h2>
          <p>some setup for the following list</p>
        </section>
        <div className="home__about-wrap_content-list">
          <p>
            <FontAwesomeIcon icon={faCheck} /> Item 1
          </p>
          <p>
            <FontAwesomeIcon icon={faCheck} /> Item 2
          </p>
          <p>
            <FontAwesomeIcon icon={faCheck} /> Item 3
          </p>
          <p>
            <FontAwesomeIcon icon={faCheck} /> Item 4
          </p>
        </div>
        <section className="home__about-wrap_content_technicalSkills">
          <h2>technical skills</h2>
          <p>some setup for the following list</p>
        </section>
        <div className="home__about-wrap_content-list">
          <p>
            <FontAwesomeIcon icon={faArrowRight} /> Item 1
          </p>
          <p>
            <FontAwesomeIcon icon={faArrowRight} /> Item 2
          </p>
          <p>
            <FontAwesomeIcon icon={faArrowRight} /> Item 3
          </p>
          <p>
            <FontAwesomeIcon icon={faArrowRight} /> Item 4
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home__About;
