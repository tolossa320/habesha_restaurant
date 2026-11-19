import React, { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import styles from "./MenuSection.module.css";
import { categories, menuItems } from "../data/menu";
import MenuCard from "./MenuCard";

function Menu() {
  // 1. Store the selected category
  const [activeCategory, setActiveCategory] = useState("All");
  // 2. Filter menu items using useMemo
  const filteredItems = useMemo(() => {
    if (activeCategory === "All") {
      return menuItems;
    }
    return menuItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);
  return (
    <div>
      <section className={`section ${styles.menuSection}`} id="menu">
        {/* Section Heading */}
        <div className="sectionHeading">
          <p className="eyebrowDark">FROM OUR KITCHEN</p>
          <h2>
            Favorites from <em>Habesha</em>
          </h2>
          <p>
            Traditional recipes, bold spices, and something delicious for
            everyone.
          </p>
        </div>
        {/* Category Filter */}
        <div className={styles.filters}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.filter} ${
                activeCategory === category ? styles.active : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        {/* Menu Items */}
        <div className={styles.grid}>
          {filteredItems.map((item) => {
            return <MenuCard key={item.id} renderAdd={true} data={item} />;
          })}
        </div>
        {/* Full Menu Link */}
        <a className={styles.fullMenu} href="#contact">
          Ask about our full menu
          <ArrowUpRight size={16} />
        </a>

      </section>
    </div>
  );
}

export default Menu;
