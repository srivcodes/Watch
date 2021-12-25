import "./styles.css";
import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-main">
        <div className="footer-left ">
          <div className="footer-padding footer-para">Reach out to me here:</div>
          <div className="socialNav">
            <a
              href="https://www.linkedin.com/in/srividyamv/"
              aria-label="Linkedin-profile"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://twitter.com/MysoreSrividya"
              aria-label="Twitter-handle"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://github.com/srivcodes" aria-label="Github-profile">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        <div className="footer-right">
          <Link to="/" className="footer-logo">
            <FaYoutube className="head-logo" />
            Watchw
          </Link>
          <div className="connectMe">
            <div className="footer-name-padding">BY</div>
            <a
              href="https://sounds-interesting.netlify.app/"
              className=" footer-name-padding"
            >
              @SRIVI
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
