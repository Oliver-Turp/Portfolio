import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import WebsiteData from "../Components/Home__Projects_Websites-Data";
import PersonalData from "../Components/Home__Projects_Personal-Data";
import UIData from "../Components/Home__UI-Examples-Data";

import "../Styles/home__projects.css";

const Home__Projects = () => {
  const UIHeaders = UIData.filter(function (item) {
    return item.section === "Header";
  });

  const UIImages = UIData.filter(function (item) {
    return item.section === "Images";
  });

  const UIContact = UIData.filter(function (item) {
    return item.section === "Contact";
  });

  const UIFooters = UIData.filter(function (item) {
    return item.section === "Footer";
  });

  const UITheme = UIData.filter(function (item) {
    return item.section === "Theme";
  });

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Oliver Turp | Projects</title>
        </Helmet>
      </HelmetProvider>
      <div className="home__projects-wrap">
        <div className="home__projects-content">
          <h1>all projects</h1>
          <h2>custom static websites</h2>
          <div className="home__projects-content_grid">
            {WebsiteData.map((card) => (
              <div className="home__projects_card-wrap" key={card.id}>
                <Link to={card.link} target="_blank">
                  <img src={card.image} alt={card.name} />
                </Link>
                <div className="home__projects_card-body">
                  <h5>{card.name}</h5>
                  <p>{card.desc}</p>
                </div>
                <div className="home__projects_card-footer">
                  <p>{card.icon1}</p>
                  <p>{card.icon2}</p>
                  <p>{card.icon3}</p>
                </div>
              </div>
            ))}
          </div>
          <h2>personal projects</h2>
          <div className="home__projects-content_grid">
            {PersonalData.map((card) => (
              <div className="home__projects_card-wrap" key={card.id}>
                <Link to={card.link} target="_blank">
                  <img src={card.image} alt={card.name} />
                </Link>
                <div className="home__projects_card-body">
                  <h5>{card.name}</h5>
                  <p>{card.desc}</p>
                </div>
                <div className="home__projects_card-footer">
                  <p>{card.icon1}</p>
                  <p>{card.icon2}</p>
                  <p>{card.icon3}</p>
                </div>
              </div>
            ))}
          </div>
          <h2>UI examples</h2>
          <p id="uiBlurb">
            occasionally, a client will withdraw from a project before it's
            completed. <br /> rather than let my partial work go to waste, these
            are examples of what you could have if you're unsure of your own
            designs.
          </p>
          <div className="home__UI-content_grid">
            <div className="home__UI-content_grid-row">
              {UIHeaders.map((card) => (
                <div
                  className="home__UI_card-wrap"
                  id="home__UI-headers_card"
                  key={card.id}
                >
                  <Link to="/">
                    <img src={card.video} alt={card.video} />
                  </Link>
                  <div className="home__UI_card-body">
                    <h5>
                      {card.section}: {card.type}
                    </h5>
                    <p>{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="home__UI-content_grid-row">
              {UIImages.map((card) => (
                <div
                  className="home__UI_card-wrap"
                  id="home__UI-headers_card"
                  key={card.id}
                >
                  <Link to="/">
                    <img src={card.video} alt={card.video} />
                  </Link>
                  <div className="home__UI_card-body">
                    <h5>
                      {card.section}: {card.type}
                    </h5>
                    <p>{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="home__UI-content_grid-row">
              {UIContact.map((card) => (
                <div
                  className="home__UI_card-wrap"
                  id="home__UI-headers_card"
                  key={card.id}
                >
                  <Link to="/">
                    <img src={card.video} alt={card.video} />
                  </Link>
                  <div className="home__UI_card-body">
                    <h5>
                      {card.section}: {card.type}
                    </h5>
                    <p>{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="home__UI-content_grid-row">
              {UIFooters.map((card) => (
                <div
                  className="home__UI_card-wrap"
                  id="home__UI-headers_card"
                  key={card.id}
                >
                  <Link to="/">
                    <img src={card.video} alt={card.video} />
                  </Link>
                  <div className="home__UI_card-body">
                    <h5>
                      {card.section}: {card.type}
                    </h5>
                    <p>{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="home__UI-content_grid-row">
              {UITheme.map((card) => (
                <div
                  className="home__UI_card-wrap"
                  id="home__UI-headers_card"
                  key={card.id}
                >
                  <Link to="/">
                    <img src={card.video} alt={card.video} />
                  </Link>
                  <div className="home__UI_card-body">
                    <h5>
                      {card.section}: {card.type}
                    </h5>
                    <p>{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home__Projects;
