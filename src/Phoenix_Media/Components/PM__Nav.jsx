import { NavLink, Link, Outlet } from "react-router-dom";

import "../Styles/pm__nav.css";

const PM__Nav = () => {
  const container = document.querySelector(".pm__container");

  document
    .querySelector(".pm__header-wrap_hamburger")
    .addEventListener("click", () => {
      container.classList.add("change");
    });

  document
    .querySelector(".pm__header-wrap_nav-close")
    .addEventListener("click", () => {
      container.classList.remove("change");
    });

  const colors = [
    "#03c04a",
    "#f08080",
    "#7289da",
    "#f96854",
    "#afeeee",
    "#800080",
  ];

  let i = 0;

  Array.from(document.querySelectorAll(".pm__nav-link")).forEach((item) => {
    item.style.cssText = `background-color: ${colors[i++]}`;
  });

  Array.from(document.querySelectorAll(".navigation-button")).forEach(
    (item) => {
      item.onclick = () => {
        item.parentElement.parentElement.classList.toggle("change");
      };
    }
  );

  return (
    <>
      <div className="pm__container">
        <div className="pm__header-wrap_logo">
          <h1>
            <span>P</span>
            <span>H</span>
            <span>O</span>
            <span>E</span>
            <span>N</span>
            <span>I</span>
            <span>X</span>
          </h1>
          <br />
          <h2>
            <span>S</span>
            <span>T</span>
            <span>U</span>
            <span>D</span>
            <span>I</span>
            <span>O</span>
            <span>S</span>
          </h2>
        </div>
        <div className="pm__header-wrap_hamburger">
          <div className="pm__header-wrap_hamburger-line"></div>
          <div className="pm__header-wrap_hamburger-line"></div>
          <div className="pm__header-wrap_hamburger-line"></div>
        </div>
        <div className="pm__header-wrap_nav-wrap">
          <nav className="pm__header-wrap_nav-content">
            <div className="pm__header-wrap_nav-close">
              <div className="pm__header-wrap_nav-close_1"></div>
              <div className="pm__header-wrap_nav-close_2"></div>
            </div>
            <div className="pm__header-wrap_nav-list">
              <Link to="/" className="pm__nav-link">
                Home
              </Link>
              <Link to="/" className="pm__nav-link">
                YouTube
              </Link>
              <Link to="/" className="pm__nav-link">
                Discord
              </Link>
              <Link to="/" className="pm__nav-link">
                Patreon
              </Link>
              <Link to="/" className="pm__nav-link">
                About
              </Link>
              <Link to="/" className="pm__nav-link">
                Contact
              </Link>
            </div>
          </nav>
        </div>

        <Outlet />
        <div className="pm__footer-wrap"></div>
      </div>
    </>
  );
};

export default PM__Nav;
