import socials from "../../data/socials";

const FooterSocials = () => {
  return (
    <ul className="footer__socials">
      {socials.map(({ id, href, img, name }) => (
        <li key={id}>
          <a
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`Visit ${name}`}>
            <img className="facebook-logo" src={img} alt="" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterSocials;
