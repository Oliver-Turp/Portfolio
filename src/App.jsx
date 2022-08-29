import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useLayoutEffect } from "react";

import {
  Home__Nav,
  Home__Index,
  Home__About,
  Home__Contact,
  Home__Projects,
} from "./Home/Home__Exports";

import {
  PM__Comments,
  PM__Contact,
  PM__Discord,
  PM__Friends,
  PM__Home,
  PM__Patreon,
  PM__TCG,
  PM__WOF,
  PM__YouTube,
  PM__Nav,
} from "./Sandbox/Phoenix_Media/PhoenixMedia__Exports";

import { Horizontal, DropDown, Hamburger, Carousel, Gallery } from "./Sandbox/Examples/ExamplesExports";

function App() {
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home__Nav />}>
            <Route index element={<Home__Index />} />
            <Route path="about" element={<Home__About />} />
            <Route path="contact" element={<Home__Contact />} />
            <Route path="projects" element={<Home__Projects />} />
            {/* PM REDIRECTS */}
            <Route
              path="phoenixmedia"
              element={<Navigate to="/sandbox/projects/phoenixmedia" replace />}
            />
            <Route
              path="/sandbox/projects/phoenixmedia/tcg"
              element={
                <Navigate
                  to="/sandbox/projects/phoenixmedia/turpochargedgaming"
                  replace
                />
              }
            />
            <Route
              path="/sandbox/projects/phoenixmedia/wof"
              element={
                <Navigate
                  to="/sandbox/projects/phoenixmedia/walloffame"
                  replace
                />
              }
            />
          </Route>
          {/* PM ROUTES */}
          <Route path="/sandbox/projects/phoenixmedia" element={<PM__Nav />}>
            <Route index element={<PM__Home />} />
            <Route path="comments" element={<PM__Comments />} />
            <Route path="contact" element={<PM__Contact />} />
            <Route path="discord" element={<PM__Discord />} />
            <Route path="friends" element={<PM__Friends />} />
            <Route path="patreon" element={<PM__Patreon />} />
            <Route path="turpochargedgaming" element={<PM__TCG />} />
            <Route path="walloffame" element={<PM__WOF />} />
            <Route path="youtube" element={<PM__YouTube />} />
          </Route>
          {/* SANDBOX ROUTES */}
          {/* HEADERS */}
          <Route path="/sandbox/examples/header/horizontal" element={<Horizontal />} />
          <Route path="/sandbox/examples/header/dropdown" element={<DropDown />} />
          <Route path="/sandbox/examples/header/hamburger" element={<Hamburger />} />
          {/* IMAGE */}
          <Route path="/sandbox/examples/image/gallery" element={<Gallery />} />
          <Route path="/sandbox/examples/image/carousel" element={<Carousel />} />
          {/* GENERAL ERROR PAGE */}
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
