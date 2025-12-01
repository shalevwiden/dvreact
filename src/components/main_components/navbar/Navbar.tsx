import { Link } from "react-router-dom";
import routes from "../../../routes";

import "./navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to={routes.home}>Home</Link>
      <Link to={routes.blurbify}>Blurbify</Link>
      <Link to={routes.about}>About</Link>
    </nav>
  );
}

export default Navbar;
