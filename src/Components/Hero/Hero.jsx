import { ArrowRight, CalendarDays } from "lucide-react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.overlay} />
      <div className={styles.content}>
        <p className={styles.eyebrow}>
          <span /> AUTHENTIC ETHIOPIAN CUISINE
        </p>
        <h1>
          Taste the rich
          <br />
          <em>flavors of Ethiopia.</em>
        </h1>
        <p className={styles.description}>
          Discover soulful Ethiopian cooking, fresh ingredients, and recipes
          rooted in tradition. Every dish brings people together around the
          table.
        </p>
        <div className={styles.actions}>
          <a className="button buttonGold" href="#menu">
            Explore Our Menu <ArrowRight size={16} />
          </a>
          <a className="button buttonOutline" href="#contact">
            <CalendarDays size={16} /> Contact Us
          </a>
        </div>
        <div className={styles.note}>
          <span className={styles.noteLine} /> GOOD FOOD. WARM HEARTS. ETHIOPIAN
          HOSPITALITY.
        </div>
      </div>
      <a href="#menu" className={styles.scrollCue}>
        SCROLL TO DISCOVER <span>↓</span>
      </a>
    </section>
  );
}
export default Hero;
