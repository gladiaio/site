import { Link } from "react-router-dom";
import logo from "../assets/logo-black.png";

import "./HeaderSection.scss";

export function HeaderSection() {
  return (
    <header>
      <div className="content">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="GladIA" />
          </Link>
        </div>
        <div className="menu">
          <ul>
            {/* <li>
              <a href="https://gladia.io/jobs">Jobs</a>
            </li> */}
          </ul>
        </div>
      </div>
    </header>
  );
}
