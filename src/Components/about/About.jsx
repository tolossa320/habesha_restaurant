import { Heart, Leaf, Soup } from "lucide-react";
import styles from "./About.module.css";
import img from "../../../src/assets/about.avif";
const values = [
  {
    icon: Leaf,
    title: "Fresh ingredients",
    text: "Thoughtfully selected ingredients in every dish.",
  },
  {
    icon: Soup,
    title: "Recipes with roots",
    text: "Traditional flavors inspired by Ethiopian kitchens.",
  },
  {
    icon: Heart,
    title: "Hospitality first",
    text: "A welcoming table where everyone belongs.",
  },
];

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.photo}>
        <img
          src={img}
          alt="Warm, welcoming restaurant dining room"
          loading="lazy"
        />
        <span className={styles.photoLabel}>A TABLE FULL OF STORIES</span>
      </div>
      <div className={styles.story}>
        <p className="eyebrowGold">OUR STORY</p>
        <h2>
          More than a meal.
          <br />
          <em>It's a feeling.</em>
        </h2>
        <p className={styles.intro}>
          At Habesha Restaurant, food is a way to bring people together. We
          celebrate the generous spirit of Ethiopian hospitality with comforting
          dishes, vibrant spices, and a place to slow down and share.
        </p>
        <a className="textLink" href="#contact">
          Come visit us <span>↗</span>
        </a>
      </div>
      <div className={styles.values}>
        {values.map(({ icon: Icon, title, text }) => (
          <div className={styles.value} key={title}>
            <span className={styles.icon}>
              <Icon size={23} />
            </span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
