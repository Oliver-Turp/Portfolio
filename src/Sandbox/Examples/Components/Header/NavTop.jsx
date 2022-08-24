import { NavLink, Link, Outlet } from "react-router-dom";

const NavTop = () => {
  return (
    <>
      <div className="generic__page-wrap">
        <div className="generic__page-wrap_header-bg">
          <div className="generic__page-wrap_header-wrap">
            <p>Your Name</p>
            <span>
              <p>Home</p>
              <p>About</p>
              <p>Contact</p>
            </span>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default NavTop;
