import { useNavigate } from "react-router-dom";
import styles from "./About.module.css";

const values = [
  {
    icon: "✦",
    title: "Quality First",
    description:
      "We carefully select products that meet our quality standards and customer expectations.",
  },
  {
    icon: "◇",
    title: "Customer Focus",
    description:
      "Our customers are at the center of everything we do. Your satisfaction matters to us.",
  },
  {
    icon: "↗",
    title: "Innovation",
    description:
      "We follow the latest technology trends to bring modern solutions to your everyday life.",
  },
  {
    icon: "♡",
    title: "Trust & Transparency",
    description:
      "We believe in honest communication, transparent service and long-term relationships.",
  },
];

const advantages = [
  {
    number: "01",
    title: "Carefully Selected Products",
    description:
      "We focus on bringing together useful, reliable and modern technology products.",
  },
  {
    number: "02",
    title: "Easy Shopping Experience",
    description:
      "Our goal is to make discovering and purchasing technology simple and convenient.",
  },
  {
    number: "03",
    title: "Customer Support",
    description:
      "We are committed to helping our customers throughout their shopping experience.",
  },
];

function About() {
  const navigate = useNavigate();

  return (
    <main className={styles.aboutPage}>
      {/* HERO SECTION */}

      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>ABOUT OUR COMPANY</span>

            <h1>
              Technology
              <br />
              for a <span>Better</span>
              <br />
              Tomorrow.
            </h1>

            <p>
              We believe technology should make life easier, smarter and more
              connected. Discover the story behind our passion for innovation.
            </p>

            <div className={styles.heroButtons}>
              <button
                className={styles.primaryButton}
                onClick={() => navigate("/products")}
              >
                Explore Our Products <span>→</span>
              </button>

              <button
                className={styles.secondaryButton}
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </button>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroCircle}></div>

            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=85"
              alt="Modern workspace"
            />

            <div className={styles.heroFloatingCard}>
              <span className={styles.floatingIcon}>✦</span>

              <div>
                <strong>Driven by Innovation</strong>
                <p>Inspired by technology</p>
              </div>
            </div>

            <div className={styles.heroSideText}>
              INNOVATION · QUALITY · TRUST
            </div>
          </div>
        </div>

        <div className={styles.heroBottom}>
          <span>OUR STORY STARTS HERE</span>
          <span className={styles.bottomLine}></span>
        </div>
      </section>

      {/* STORY SECTION */}

      <section className={styles.storySection}>
        <div className={styles.storyImages}>
          <div className={styles.storyMainImage}>
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85"
              alt="Team working together"
            />
          </div>

          <div className={styles.storySmallImage}>
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=700&q=85"
              alt="Creative workspace"
            />
          </div>

          <div className={styles.storyImageBadge}>
            <span>OUR</span>
            <strong>STORY</strong>
          </div>
        </div>

        <div className={styles.storyContent}>
          <span className={styles.sectionEyebrow}>WHO WE ARE</span>

          <h2>
            More Than Just
            <br />
            <span>Technology.</span>
          </h2>

          <p>
            We are passionate about connecting people with technology that makes
            a difference in their lives. From everyday essentials to powerful
            devices, we aim to bring modern technology closer to everyone.
          </p>

          <p>
            Our store was built around a simple idea: finding the right
            technology should be an enjoyable and straightforward experience.
          </p>

          <p>
            We continue to grow with a focus on quality, innovation and building
            lasting relationships with our customers.
          </p>

          <button
            className={styles.textButton}
            onClick={() => navigate("/products")}
          >
            Discover Our Collection <span>→</span>
          </button>
        </div>
      </section>

      {/* STATISTICS */}

      <section className={styles.statsSection}>
        <div className={styles.statsHeader}>
          <span className={styles.sectionEyebrow}>OUR JOURNEY</span>

          <h2>
            Built Around <span>Better Experiences.</span>
          </h2>

          <p>
            Our priorities are simple: quality, service and a better shopping
            experience.
          </p>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <h3>Quality</h3>
            <span>First Priority</span>
            <p>Every product deserves attention.</p>
          </div>

          <div className={styles.statItem}>
            <h3>Modern</h3>
            <span>Technology</span>
            <p>Discover products for today's world.</p>
          </div>

          <div className={styles.statItem}>
            <h3>Customer</h3>
            <span>Focused</span>
            <p>Your experience matters to us.</p>
          </div>

          <div className={styles.statItem}>
            <h3>Always</h3>
            <span>Improving</span>
            <p>Growing through innovation.</p>
          </div>
        </div>
      </section>

      {/* MISSION AND VISION */}

      <section className={styles.missionSection}>
        <div className={styles.missionContent}>
          <span className={styles.sectionEyebrow}>WHAT DRIVES US</span>

          <h2>
            Purpose Behind
            <br />
            <span>Everything We Do.</span>
          </h2>

          <p>
            Technology is constantly changing, and we want to make that journey
            easier for our customers. Our mission and vision guide every step we
            take.
          </p>
        </div>

        <div className={styles.missionCards}>
          <div className={styles.missionCard}>
            <div className={styles.missionIcon}>◎</div>

            <span>OUR MISSION</span>

            <h3>Making Technology Accessible</h3>

            <p>
              To provide a convenient shopping experience with carefully
              selected technology products that meet everyday needs.
            </p>
          </div>

          <div className={styles.visionCard}>
            <div className={styles.missionIcon}>✧</div>

            <span>OUR VISION</span>

            <h3>A Smarter Connected World</h3>

            <p>
              To become a trusted destination for modern technology and inspire
              people to discover better ways of living.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}

      <section className={styles.valuesSection}>
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionEyebrow}>WHAT WE BELIEVE IN</span>

            <h2>
              Our Core <span>Values.</span>
            </h2>

            <p>
              The principles that shape our decisions and define our approach.
            </p>
          </div>
        </div>

        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div className={styles.valueCard} key={value.title}>
              <div className={styles.valueTop}>
                <div className={styles.valueIcon}>{value.icon}</div>

                <span>0{index + 1}</span>
              </div>

              <h3>{value.title}</h3>

              <p>{value.description}</p>

              <div className={styles.valueLine}></div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}

      <section className={styles.whySection}>
        <div className={styles.whyVisual}>
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=85"
            alt="Technology team"
          />

          <div className={styles.whyImageLabel}>
            <span>OUR COMMITMENT</span>
            <strong>Better Shopping, Better Living.</strong>
          </div>
        </div>

        <div className={styles.whyContent}>
          <span className={styles.sectionEyebrow}>THE DIFFERENCE</span>

          <h2>
            Why Shop
            <br />
            <span>With Us?</span>
          </h2>

          <p className={styles.whyDescription}>
            We want every step of your shopping experience to feel simple,
            convenient and reliable.
          </p>

          <div className={styles.advantageList}>
            {advantages.map((item) => (
              <div className={styles.advantageItem} key={item.number}>
                <span className={styles.advantageNumber}>{item.number}</span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}

      <section className={styles.ctaSection}>
        <div className={styles.ctaDecoration}>
          <span>✦</span>
          <span>◇</span>
          <span>✧</span>
        </div>

        <div className={styles.ctaContent}>
          <span>YOUR NEXT DISCOVERY STARTS HERE</span>

          <h2>
            Let's Explore
            <br />
            What's Possible.
          </h2>

          <p>
            Discover products designed to make your everyday life smarter and
            more convenient.
          </p>

          <button onClick={() => navigate("/products")}>
            Explore Collection <span>→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

export default About;
