import Content from '../../GenericContent';

import "../../Styles/header__horizontal.css";

const Horizontal = () => {
  return (
    <>
      <div className="generic__page-wrap">
        <div className="generic__page-wrap_header-bg">
          <div className="generic__page-wrap_header-wrap">
            <p className='generic__header-link underline'>Your Name</p>
            <div>
              <p className='generic__header-link underline'>Home</p>
              <p className='generic__header-link underline tw-pl-4 tw-pr-4'>Projects</p>
              <p className='generic__header-link underline'>Services</p>
              <p className='generic__header-link underline tw-pl-4 tw-pr-4'>About</p>
              <p className='generic__header-link underline'>Contact</p>
            </div>
          </div>
        </div>
        <Content />
      </div>
    </>
  );
};

export default Horizontal;
