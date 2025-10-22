import "./company-info.css";
import { motion } from "framer-motion";
import PizzaOne from "../../../assets/images/contact-us/image-one-parallax.webp";

const ContactUsLanding = () => {
  return (
    <section
      className="homepage__company-info flex-container flex-row txt-white"
      aria-describedby="contact-title">
      <h2 id="contact-title" className="visually-hidden">
        Contact us
      </h2>
      <motion.img
        initial={{ opacity: 0, right: 100 }}
        whileInView={{ opacity: 0.8, right: 300 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        src={PizzaOne}
        alt=""
        aria-hidden="true"
        className="parallax company-info__img"
        loading="lazy"
      />
      <motion.img
        initial={{ opacity: 0, right: 100 }}
        whileInView={{ opacity: 0.8, right: 200 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        src={PizzaOne}
        alt=""
        aria-hidden="true"
        className="parallax company-info__img"
        loading="lazy"
      />
      <motion.img
        initial={{ opacity: 0, right: 50 }}
        whileInView={{ opacity: 0.8, right: 100 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        src={PizzaOne}
        alt=""
        aria-hidden="true"
        className="parallax company-info__img"
        loading="lazy"
      />
      <address className="company-info__details">
        <ul>
          <li>
            <h3>
              <a href="tel:09952716491">0995 271 6491</a> / <a href="tel:09626268413">0962 626 8413</a>
            </h3>
            <p>Contact us if you have any questions</p>
          </li>
          <li>
            <h3>Blk 6 Lot 32, Southville 8C</h3>
            <p>Brgy. San Isidro, Rodriguez, Rizal, Philippines</p>
          </li>
          <li>
            <h3>Open Monday-Friday</h3>
            <p>
              <time dateTime="8:00">8:00</time>am - <time dateTime="21:00">9:00</time>pm
            </p>
          </li>
        </ul>
      </address>
    </section>
  );
};

export default ContactUsLanding;
