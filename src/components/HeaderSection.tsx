import logo from "../assets/logo-black.png";

import "./HeaderSection.scss";

export function HeaderSection() {
  return (
    <header>
      <div className="content">
        <div className="logo">
          <img src={logo} alt="GladIA" />
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="https://gladia.io//blog">Blog</a>
            </li>
            <li>
              <a href="https://gladia.io/jobs">Jobs</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
