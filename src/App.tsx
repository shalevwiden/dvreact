import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blurbify from "./pages/Blurbify";
import About from "./pages/About";

import routes from "./routes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.about} element={<About />} />
        <Route path={routes.blurbify} element={<Blurbify />} />
      </Routes>
    </Router>
  );
}

export default App;
