import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

import Forest from "../Assets/Images/forest.jpg";
import River from "../Assets/Images/river.jpg";
import Sea from "../Assets/Images/sea.jpg";

import "../Styles/pm__patreon.css";

const PM__Patreon = () => {
  const [btnState, setBtnState] = useState(false);

  function handleClick() {
    setBtnState((btnState) => !btnState);
  }

  let togglePatreonCheck = btnState ? " change" : "";

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Phoenix Media | Patreon</title>
        </Helmet>
      </HelmetProvider>
      <div className="pm__patreon-wrap">
        <h1>patreon</h1>
        <div className="pm__patreon-wrap_content-wrap">
          <div className={`card${togglePatreonCheck}`}>
            <div className="card_front">
              <img src={Forest} alt="forest" />
              <h1>our community</h1>
              <ul>
                <li>unique discord role</li>
                <li>automatic entry to wall of fame</li>
                <li>patreon only discord channels*</li>
                <li>unique discord emojis*</li>
                <li>access to the phoenix newsletter</li>
              </ul>
              <button className="pm__patreon-btn" onClick={handleClick}>
                price &gt;&gt;
              </button>
            </div>
            <div className="card_back">
              <button className="pm__patreon-btn" onClick={handleClick}>
                &lt;&lt; back
              </button>
              <h3>&pound;5</h3>
              <Link to="">click me to pay*</Link>
            </div>
          </div>

          <div className={`card${togglePatreonCheck}`}>
            <div className="card_front">
              <img src={River} alt="forest" />
              <h1>the inside scoop</h1>
              <ul>
                <li>all of tier 1</li>
                <li>bonus entries in giveaways *</li>
                <li>exclusive participation in videos</li>
                <li>early access to content</li>
                <li>post video shout outs</li>
              </ul>
              <button className="pm__patreon-btn" onClick={handleClick}>
                price &gt;&gt;
              </button>
            </div>
            <div className="card_back">
              <button className="pm__patreon-btn" onClick={handleClick}>
                &lt;&lt; back
              </button>
              <h3>&pound;10</h3>
              <Link to="">click me to pay*</Link>
            </div>
          </div>

          <div className={`card${togglePatreonCheck}`}>
            <div className="card_front">
              <img src={Sea} alt="forest" />
              <h1>join team phoenix</h1>
              <ul>
                <li>all of tiers 1 & 2</li>
                <li>exclusive content</li>
                <li>sponsor a video</li>
                <li>exclusive hangouts / Q&A</li>
                <li>merch discounts *</li>
              </ul>
              <button className="pm__patreon-btn" onClick={handleClick}>
                price &gt;&gt;
              </button>
            </div>
            <div className="card_back">
              <button className="pm__patreon-btn" onClick={handleClick}>
                &lt;&lt; back
              </button>
              <h3>&pound;20</h3>
              <Link to="">click me to pay*</Link>
            </div>
          </div>
        </div>
        <p>*not yet set up</p>
      </div>
    </>
  );
};

export default PM__Patreon;
