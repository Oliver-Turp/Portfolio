import { Link } from "react-router-dom";
import WebsiteData from "../Components/Home__Projects_Websites-Data";
import UIData from "../Components/Home__UI-Examples-Data";

import "../Styles/home__projects.css";

const Home__Projects = () => {
  return (
    <div className="home__projects-wrap">
      <div className="home__projects-content">
        <h1>all projects</h1>
        <h2>custom static websites</h2>
        <div className="home__projects-content_grid">
          {WebsiteData.map((card) => (
            <div className="home__projects_card-wrap">
              <Link key={card.id} to="/">
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
          {UIData.map((card) => {
            <div className="home__UI_card-wrap">
              <Link key={card.id} to="/">
                <img src={card.video} alt={card.video} />
              </Link>
              <div className="home__UI_card-body">
                <h5>
                  {card.section}: {card.type}
                </h5>
                <p>{card.desc}</p>
              </div>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home__Projects;
