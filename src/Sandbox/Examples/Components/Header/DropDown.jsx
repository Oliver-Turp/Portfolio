import { Helmet, HelmetProvider } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import Content from "../../GenericContent";

import "../../Styles/header__dropdown.css";

const Horizontal = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>UI Examples | Temp</title>
        </Helmet>
      </HelmetProvider>
      <div className="generic__page-wrap">
        <div className="generic__page-wrap_header-bg">
          <div className="generic__page-wrap_header-wrap">
            <p className="generic__header-link underline">Your Name</p>
            <div>
              <p className="generic__header-link underline">Home</p>
              <div className="generic__header-drop_wrap tw-pl-4 tw-pr-4">
                <p className="generic__header-link">
                  Products <FontAwesomeIcon icon={faCaretDown} />
                </p>
                <div className="generic__header-drop_content">
                  <p className="generic__header-link underline">Link 1</p>
                  <p className="generic__header-link underline">Link 2</p>
                  <p className="generic__header-link underline">Link 3</p>
                  <p className="generic__header-link underline">Link 4</p>
                </div>
              </div>
              <div className="generic__header-drop_wrap tw-pl-4 tw-pr-4">
                <p className="generic__header-link">
                  Services <FontAwesomeIcon icon={faCaretDown} />
                </p>
                <div className="generic__header-drop_content">
                  <p className="generic__header-link underline">Link 1</p>
                  <p className="generic__header-link underline">Link 2</p>
                  <p className="generic__header-link underline">Link 3</p>
                  <p className="generic__header-link underline">Link 4</p>
                </div>
              </div>
              <p className="generic__header-link underline  tw-pl-4 tw-pr-4">
                About
              </p>
              <p className="generic__header-link underline">Contact</p>
            </div>
          </div>
        </div>
        <Content />
      </div>
    </>
  );
};

export default Horizontal;
