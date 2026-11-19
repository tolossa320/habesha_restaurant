import { useState } from "react";
import { Clock3, Mail, MapPin, Phone, Send } from "lucide-react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section className={`section ${styles.contact}`} id="contact">
      <div className="sectionHeading">
        <p className="eyebrowDark">WE'D LOVE TO SEE YOU</p>
        <h2>
          Come gather <em>with us.</em>
        </h2>
        <p>
          Questions, celebrations, or a craving for something delicious? Get in
          touch.
        </p>
      </div>
      <div className={styles.layout}>
        <div className={styles.details}>
          <h3>Visit Habesha</h3>
          <p className={styles.detailIntro}>
            We're ready to welcome you. Reach out or stop by for a taste of
            Ethiopia.
          </p>
          <a
            href="https://maps.app.goo.gl/6h8bvBsksiRPhSH36"
            target="_blank"
            rel="noreferrer"
            className={styles.detail}
          >
            <MapPin />
            <span>
              <strong>Find us</strong>
              <small>4 KILLO, Addis Ababa, Ethiopia</small>
            </span>
          </a>
          <a href="tel:+251978285238" className={styles.detail}>
            <Phone />
            <span>
              <strong>Call us</strong>
              <small>+251- 9-78-28-52-38</small>
            </span>
          </a>
          <a
            href="mailto:habesharestaurant@gmail.com"
            className={styles.detail}
          >
            <Mail />
            <span>
              <strong>Email us</strong>
              <small>habesharestaurant@gmail.com</small>
            </span>
          </a>
          <div className={styles.detail}>
            <Clock3 />
            <span>
              <strong>Opening hours</strong>
              <small>Daily · 11:00 AM – 11:00 PM</small>
            </span>
          </div>
          <a
            className={styles.mapLink}
            href="https://maps.app.goo.gl/6h8bvBsksiRPhSH36"
            target="_blank"
            rel="noreferrer"
          >
            Open directions ↗
          </a>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <h3>Send us a message</h3>
          <p>Fill in the form and we'll be happy to hear from you.</p>
          <label>
            Your name
            <input required name="name" placeholder="e.g. Hana Bekele" />
          </label>
          <label>
            Email address
            <input
              required
              name="email"
              type="email"
              placeholder="you@example.com"
            />
          </label>
          <label>
            What can we help with?
            <select name="subject" defaultValue="General inquiry">
              <option>General inquiry</option>
              <option>Table reservation</option>
              <option>Catering</option>
              <option>Feedback</option>
            </select>
          </label>
          <label>
            Your message
            <textarea
              required
              name="message"
              rows="4"
              placeholder="Write your message here..."
            />
          </label>
          <button className="button buttonGold" type="submit">
            Send Message <Send size={15} />
          </button>
          {submitted && (
            <p className={styles.success} role="status">
              Thanks for reaching out{" "}
              <small
                style={{
                  color: "#dba32f",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                Our Habesha Restaurant
              </small>
            </p>
          )}
          <small className={styles.disclaimer}>
            Demo form: messages are not sent until you connect a form service or
            backend.
          </small>
        </form>
      </div>
    </section>
  );
}
