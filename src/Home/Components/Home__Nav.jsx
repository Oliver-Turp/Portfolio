import { NavLink, Link, Outlet } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import ThemeToggle from "./Home__Theme";

import "../Styles/home__nav.css";

const Home__Nav = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>{/* <link rel="icon" href={FavIcon} /> */}</Helmet>
      </HelmetProvider>
      <div className="home__bg">
        <div className="home__header-wrap">
          <div className="home__header-wrap_content">
            <div className="home__header-wrap_content-left">
              <Link to="/">oliver turp</Link>
            </div>
            <div className="home__header-wrap_content-right">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "homeLink active" : "homeLink inactive"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="about"
                className={({ isActive }) =>
                  isActive ? "homeLink active" : "homeLink inactive"
                }
              >
                About
              </NavLink>
              <NavLink
                to="projects"
                className={({ isActive }) =>
                  isActive ? "homeLink active" : "homeLink inactive"
                }
              >
                Projects
              </NavLink>
              <NavLink
                to="contact"
                className={({ isActive }) =>
                  isActive ? "homeLink active" : "homeLink inactive"
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>

        <Outlet />

        <div className="home__footer-wrap">
          <div className="home__footer-wrap_content">
            <div className="home__footer-wrap_content-left">
              <p>copyright &copy; oliver turp 2022</p>
            </div>
            <div className="home__footer-wrap_content-right">
              <Link to="/">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
              <Link to="/">
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
              <Link to="/">
                <FontAwesomeIcon icon={faEnvelope} />
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home__Nav;
