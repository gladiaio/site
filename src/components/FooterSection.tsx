import { Link } from "react-router-dom";

import "./FooterSection.scss";
import githubIcon from "../assets/social/github.png";
import linkedInIcon from "../assets/social/linkedin.png";
import twitterIcon from "../assets/social/twitter.png";
import discordIcon from "../assets/social/discord.png";
import { SocialBtn } from "./SocialBtn";

export function FooterSection() {
  return (
    <footer>
      <div className="content">
        <div className="copyrights">© GladIA 2022</div>
        <div className="legal-links">
          <Link to="/privacy">Privacy</Link>
          <Link to="/cgu">CGU</Link>
        </div>
        <div className="social-links">
          <SocialBtn
            socialNetworkName="Github"
            url="https://github.com/gladiaio"
            icon={githubIcon}
          />
          <SocialBtn
            socialNetworkName="LinkedIn"
            url="https://linkedin.com/company/gladia-io"
            icon={linkedInIcon}
          />
          <SocialBtn
            socialNetworkName="Twitter"
            url="https://twitter.com/gladia_io"
            icon={twitterIcon}
          />
          <SocialBtn
            socialNetworkName="Discord"
            url="https://discord.com/invite/HeuCTxnXrE"
            icon={discordIcon}
          />
        </div>
      </div>
    </footer>
  );
}
