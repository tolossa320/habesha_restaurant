import { useContext, useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.ico";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { DataContext } from "../dataProvider/DataProvider";
import { auth } from "../../utility/Firebase";
function Header() {
  const [state, dispatch] = useContext(DataContext);
  const [{ user, basket }] = useContext(DataContext);
  const [open, setOpen] = useState(false);
  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className={styles.header}>
      {/* Logo */}
      <Link className={styles.brand} to="/" onClick={closeMenu}>
        <span className={styles.logo}>
          <img src={logo} alt="Habesha Restaurant" />
        </span>
        <span className={styles.brandText}>
          <strong>Habesha</strong>
          <small>RESTAURANT</small>
        </span>
      </Link>

      {/* Mobile Toggle */}
      <button
        type="button"
        className={styles.mobileToggle}
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? <X size={25} /> : <Menu size={25} />}
      </button>

      {/* Navigation */}
      <nav className={`${styles.nav} ${open ? styles.active : ""}`}>
        <div className={styles.navLink}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
          <a href="#menu" onClick={closeMenu}>
            Menu
          </a>
          <a href="#about" onClick={closeMenu}>
            Our Story
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </div>

        <div className={styles.navActions}>
          <Link to={!user && "/signin"} className={styles.authLink}>
            <div>
              {user ? (
                <>
                  <p>Hello {user?.email?.split("@")[0]}</p>
                  <span onClick={() => auth.signOut()}>Sign out</span>
                </>
              ) : (
                <>
                  <p>Hello, Sign In</p>
                  <span>Account & Lists</span>
                </>
              )}
            </div>
          </Link>
          <Link to="/order" className={styles.authLink} onClick={closeMenu}>
            Order
          </Link>
          <Link to="/cart" className={styles.orderLink} onClick={closeMenu}>
            <BsCart4 />
            <span className={styles.cartCount}>{state.basket.length}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
