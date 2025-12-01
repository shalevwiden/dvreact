// This will be a button that takes people to the create a Blurb page
// Blurbify Studio

import { useNavigate } from "react-router-dom";
import routes from "../../../../routes";
import "./createblurb.scss";

function Createblurb() {
  const navigate = useNavigate();

  return (
    <div className="linkdiv" onClick={() => navigate(routes.blurbify)}>
      Create a Blurb
    </div>
  );
}

export default Createblurb;
