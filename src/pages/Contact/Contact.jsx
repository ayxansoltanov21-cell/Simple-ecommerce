import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Contact.module.css";

const faqs = [
  {
    question: "How can I track my order?",
    answer:
      "You can contact our support team with your order information to get an update about your order.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Available payment methods depend on the checkout options offered by the store.",
  },
  {
    question: "Can I return a product?",
    answer:
      "Return eligibility depends on the product and the store's return policy. Please contact our team for assistance.",
  },
  {
    question: "How can I get product information?",
    answer:
      "You can contact our team with the product name and we will help you find the information you need.",
  },
];

function Contact() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSubmitted(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Demo: real email göndərişi üçün backend/API inteqrasiyası lazımdır.
    setSubmitted(true);
  }

  return (
    <main className={styles.contactPage}>
      {/* HERO */}

      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>WE ARE HERE TO HELP</span>

            <h1>
              Let's Start a
              <br />
              <span>Conversation.</span>
            </h1>

            <p>
              Have a question about our products or need assistance with your
              order? Our team is ready to help you.
            </p>

            <button
              className={styles.heroButton}
              onClick={() =>
                document
                  .getElementById("contact-form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Send Us a Message <span>↓</span>
            </button>

            <div className={styles.heroNote}>
              <span className={styles.onlineDot}></span>
              We would love to hear from you.
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.visualCircle}></div>

            <img
              src="https://images.unsplash.com/photo-1525186402429-b4ff38bedec6?auto=format&fit=crop&w=1000&q=85"
              alt="Customer support workspace"
            />

            <div className={styles.floatingMessage}>
              <span>✉</span>
              <div>
                <strong>Let's connect</strong>
                <p>Your message matters to us.</p>
              </div>
            </div>

            <div className={styles.visualDecoration}>✦</div>
          </div>
        </div>
      </section>

      {/* CONTACT INFORMATION */}

      <section className={styles.contactInfoSection}>
        <div className={styles.sectionHeading}>
          <span className={styles.sectionEyebrow}>GET IN TOUCH</span>

          <h2>
            We'd Love to <span>Hear From You.</span>
          </h2>

          <p>Choose the most convenient way to get in touch with our team.</p>
        </div>

        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>✉</div>

            <span>EMAIL US</span>

            <h3>Send an Email</h3>

            <a href="mailto:hello@yourstore.com">hello@yourstore.com</a>

            <p>For general questions and assistance.</p>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>☎</div>

            <span>CALL US</span>

            <h3>Talk to Our Team</h3>

            <a href="tel:+994000000000">+994 XX XXX XX XX</a>

            <p>For direct customer support.</p>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>⌖</div>

            <span>OUR LOCATION</span>

            <h3>Visit Our Store</h3>

            <p className={styles.locationText}>
              Baku, Azerbaijan
              <br />
              Your store address
            </p>

            <p>We would be happy to welcome you.</p>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>◷</div>

            <span>WORKING HOURS</span>

            <h3>When We're Available</h3>

            <p className={styles.hoursText}>
              Monday – Friday: 09:00 – 18:00
              <br />
              Saturday: 10:00 – 16:00
              <br />
              Sunday: Closed
            </p>

            <p>Our usual support hours.</p>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}

      <section className={styles.formSection} id="contact-form">
        <div className={styles.formIntro}>
          <span className={styles.sectionEyebrow}>SEND A MESSAGE</span>

          <h2>
            How Can We
            <br />
            <span>Help You?</span>
          </h2>

          <p>
            Fill out the form and tell us what you need. Provide as much detail
            as possible so we can better understand your request.
          </p>

          <div className={styles.supportBox}>
            <div className={styles.supportIcon}>✦</div>

            <div>
              <h3>Customer First</h3>
              <p>Every question matters. We are always happy to assist you.</p>
            </div>
          </div>
        </div>

        <div className={styles.formCard}>
          <div className={styles.formHeader}>
            <h3>Send Us a Message</h3>
            <p>Fields marked with * are required.</p>
          </div>

          {submitted ? (
            <div className={styles.successMessage}>
              <div className={styles.successIcon}>✓</div>

              <h3>Form Successfully Completed!</h3>

              <p>
                Your information has passed the form validation. This is a demo
                form; messages are not yet sent to a server.
              </p>

              <button onClick={() => setSubmitted(false)}>Back to Form</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Your Name *</label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    minLength={2}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address *</label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="example@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject *</label>

                <select
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select a subject
                  </option>

                  <option value="General Inquiry">General Inquiry</option>

                  <option value="Product Information">
                    Product Information
                  </option>

                  <option value="Order Support">Order Support</option>

                  <option value="Returns & Refunds">Returns & Refunds</option>

                  <option value="Other">Other</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Your Message *</label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message here..."
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  minLength={10}
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                Send Message <span>→</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}

      <section className={styles.faqSection}>
        <div className={styles.faqIntro}>
          <span className={styles.sectionEyebrow}>QUICK ANSWERS</span>

          <h2>
            Frequently Asked
            <br />
            <span>Questions.</span>
          </h2>

          <p>
            Find answers to some of the most common questions about our store
            and services.
          </p>

          <button
            onClick={() =>
              document
                .getElementById("contact-form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Ask Another Question <span>→</span>
          </button>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <details
              className={styles.faqItem}
              key={faq.question}
              open={index === 0}
            >
              <summary>
                <span>{faq.question}</span>
                <span className={styles.faqArrow}>+</span>
              </summary>

              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}

      <section className={styles.bottomBanner}>
        <div className={styles.bannerDecoration}>✧</div>

        <div className={styles.bannerContent}>
          <span>DISCOVER MORE WITH US</span>

          <h2>
            Your Next Favorite
            <br />
            Device Is Waiting.
          </h2>

          <p>
            Explore our collection and discover technology designed for your
            everyday life.
          </p>
        </div>

        <button onClick={() => navigate("/products")}>
          Explore Products <span>→</span>
        </button>
      </section>
    </main>
  );
}

export default Contact;
