import "./FooterSection.scss";
import githubIcon from "../assets/social/github.png";
import linkedInIcon from "../assets/social/linkedin.png";
import twitterIcon from "../assets/social/twitter.png";
import discordIcon from "../assets/social/discord.png";

export function FooterSection() {
  return (
    <footer>
      <div className="content">
        <div className="copyrights">© GladIA 2022</div>
        <div className="social-links">
          <a href="https://github.com/gladiaio">
            <img src={githubIcon} alt="Github" />
          </a>
          <a href="https://linkedin.com/company/gladia-io">
            <img src={linkedInIcon} alt="LinkedIn" />
          </a>
          <a href="https://twitter.com/gladia_io">
            <img src={twitterIcon} alt="Twitter" />
          </a>
          <a href="https://discord.com/invite/HeuCTxnXrE">
            <img src={discordIcon} alt="Discord" />
          </a>
        </div>
      </div>
    </footer>
  );
}
