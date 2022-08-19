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
  PM__About,
  PM__Comments,
  PM__Contact,
  PM__Discord,
  PM__Friends,
  PM__Home,
  PM__Patreon,
  PM__TCG,
  PM__WOF,
  PM__YouTube,
} from "./Phoenix_Media/PhoenixMedia__Exports";

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
          </Route>
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
