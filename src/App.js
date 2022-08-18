import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useLayoutEffect } from "react";

import { Home__Nav, Home__Index, Home__About } from "./Home/Home__Exports";

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
          </Route>
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
