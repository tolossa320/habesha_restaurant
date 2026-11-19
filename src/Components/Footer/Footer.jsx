import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { UtensilsCrossed, Music2 } from "lucide-react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.ico";
function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Restaurant Brand */}
      <a className={styles.brand} href="#home">
        <span className={styles.logo}>
          <img src={logo} alt="" />
        </span>

        <span>
          <strong>Habesha</strong>
          <small>RESTAURANT</small>
        </span>
      </a>
      {/* Restaurant Description */}
      <p>Authentic flavors. Timeless hospitality.</p>
      {/* Social Media Links */}
      <div className={styles.socials}>
        <a
          href="https://instagram.com"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://facebook.com"
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://tiktok.com"
          aria-label="TikTok"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Music2 size={17} />
        </a>
      </div>
      {/* Copyright */}
      <small className={styles.copyright}>
        © {new Date().getFullYear()} Habesha Restaurant. Developed By Tolossa
        Kenaw.
      </small>
    </footer>
  );
}

export default Footer;
