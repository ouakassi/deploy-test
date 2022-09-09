import { Link, useLocation } from "react-router-dom";
import "./ContactIcon.css";

export default function ContactIcon() {
  const location = useLocation();

  return location.pathname !== "/" ? (
    <Link to="/contact">
      <div className="floated-contact">
        <i className=" uil uil-phone" />
      </div>
    </Link>
  ) : (
    <a href="#contact">
      <div className="floated-contact">
        <i className=" uil uil-phone" />
      </div>
    </a>
  );
}
