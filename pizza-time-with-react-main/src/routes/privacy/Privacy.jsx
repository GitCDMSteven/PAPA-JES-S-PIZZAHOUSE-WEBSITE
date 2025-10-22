import { useEffect } from "react";
import privacyContent from "../../data/privacy";
import { motion } from "framer-motion";
import { slideInLeft } from "../../data/animations";
const Privacy = () => {
  useEffect(() => {
    document.title = "Privacy | PAPA JES’S PIZZAHOUSE";
  }, []);
  return (
    <motion.main
      className="terms"
      initial={slideInLeft.initial}
      whileInView={slideInLeft.whileInView}
      exit={slideInLeft.exit}
      transition={slideInLeft.transition}>
      <h2>Privacy</h2>
      <p>
            This Privacy Policy ("Policy") outlines how PAPA JES’S PIZZAHOUSE ("PAPA JES’S PIZZAHOUSE,"
        "we," "our," or "us") collects, uses, and protects your personal
        information when you use our Instagram growth services. By using our
        services, you ("you," "your," or "user") consent to the practices
        described in this Policy.
      </p>
      {privacyContent.map((content) => (
        <section key={content.title}>
          <h3>
            {content.id}. {content.title}:
          </h3>
          <p>{content.content}</p>
        </section>
      ))}
      <p>
        If you have any questions or concerns regarding our Privacy Policy,
        please contact us at jccastro25714@gmail.com. Thank you for trusting PAPA JES’S PIZZAHOUSE with your personal information.
      </p>
    </motion.main>
  );
};

export default Privacy;
