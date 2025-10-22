import GCashLogo from "../../assets/images/payment-methods/GCash_logo.svg";

const FooterContact = () => {
  return (
    <section className="footer__contact flex-container flex-column">
      <h2>Have questions?</h2>
      <address>
        <p>Blk 6 Lot 32, Southville 8C, Brgy. San Isidro, Rodriguez, Rizal</p>
        <p>
          <a href="tel:09952716491" aria-label="Call us at 0995 271 6491">
            0995 271 6491
          </a>
        </p>
        <p>
          <a href="tel:09626268413" aria-label="Call us at 0962 626 8413">
            0962 626 8413
          </a>
        </p>
        <p>
          <a
            href="mailto:jccastro25714@gmail.com"
            aria-label="Email us at jccastro25714 at gmail dot com">
            jccastro25714@gmail.com
          </a>
        </p>
        <p>
          <time dateTime="08:00">8:00am</time> - <time dateTime="21:00">9:00pm</time>
        </p>
        
      </address>
      <section className="footer__contact__payments">
        <h3>Accepted Payment Methods</h3>
        <ul className="footer__contact__payments-img">
          <li>
            <img
              width="80"
              height="28"
              src={GCashLogo}
              alt="GCash accepted"
            />
          </li>
        </ul>
      </section>
    </section>
  );
};
export default FooterContact;
