import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Blog.module.css";

const articles = [
  {
    id: 1,
    category: "TECHNOLOGY",
    title: "The Future of Technology: What to Expect in 2026",
    description:
      "Discover the latest technological innovations that are changing the way we live, work and communicate.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=85",
    date: "November 20, 2026",
    readTime: "6 min read",
    author: "Alex Morgan",
    featured: true,
    content: `Technology continues to evolve at an incredible pace. From artificial intelligence to smarter everyday devices, innovation is changing how we interact with the world.

In 2026, personal technology is becoming more connected, efficient and accessible. Modern devices are designed not only to improve productivity but also to make everyday experiences easier.

The next generation of technology will focus on smarter software, better performance, improved connectivity and more personalized experiences.`,
  },
  {
    id: 2,
    category: "LAPTOPS",
    title: "How to Choose the Perfect Laptop for Your Needs",
    description:
      "A practical guide to choosing a laptop for studying, professional work, gaming and everyday use.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85",
    date: "November 16, 2026",
    readTime: "5 min read",
    author: "Daniel Smith",
    content: `Choosing the right laptop depends on how you plan to use it.

Students may prioritize portability, battery life and affordability. Professionals often need reliable performance, enough memory and a comfortable keyboard.

Gamers and content creators usually benefit from more powerful processors, dedicated graphics and high-quality displays.

Before purchasing, consider your budget, software requirements and how long you expect to use the device.`,
  },
  {
    id: 3,
    category: "SMARTPHONES",
    title: "Smartphone Features That Actually Matter",
    description:
      "Camera quality, battery life, performance and display: understand what really matters when buying a phone.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=85",
    date: "November 12, 2026",
    readTime: "4 min read",
    author: "Sarah Johnson",
    content: `A smartphone is more than its technical specifications.

A good display makes everyday usage more enjoyable, while reliable battery life keeps you connected throughout the day.

Camera performance is important for people who frequently take photos and videos. Processing power also matters when multitasking or using demanding applications.

The best phone is the one that matches your everyday needs.`,
  },
  {
    id: 4,
    category: "GUIDES",
    title: "5 Simple Ways to Make Your Devices Last Longer",
    description:
      "Take better care of your electronics with these practical maintenance tips.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85",
    date: "November 08, 2026",
    readTime: "3 min read",
    author: "Michael Brown",
    content: `Taking care of electronics can help extend their useful life.

Keep your devices clean, avoid exposing them to extreme temperatures and use suitable chargers.

Software updates can also improve performance and security. Managing storage and closing unnecessary background applications can help keep devices running smoothly.

Small habits can make a meaningful difference over time.`,
  },
  {
    id: 5,
    category: "TECHNOLOGY",
    title: "Artificial Intelligence Is Changing Everyday Life",
    description:
      "Explore how AI tools are becoming part of education, business and personal productivity.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=85",
    date: "November 04, 2026",
    readTime: "7 min read",
    author: "Alex Morgan",
    content: `Artificial intelligence is becoming an important part of modern life.

AI-powered tools can help people organize information, automate repetitive tasks and explore new ideas.

In education, these tools can support learning. In business, they can assist with analysis and productivity.

Understanding both the benefits and limitations of AI is important when using these technologies.`,
  },
  {
    id: 6,
    category: "LAPTOPS",
    title: "SSD vs HDD: Which Storage Is Better?",
    description:
      "Learn the main differences between SSD and HDD storage and decide which one suits your needs.",
    image:
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=900&q=85",
    date: "October 29, 2026",
    readTime: "4 min read",
    author: "Daniel Smith",
    content: `SSD and HDD are two common types of storage.

SSDs use flash memory and generally provide much faster loading and file transfer speeds. HDDs use spinning disks and can offer more storage capacity at a lower price.

For most modern laptops, an SSD is a great choice because it improves system responsiveness.

Your decision should depend on your budget, storage requirements and performance expectations.`,
  },
];

const categories = ["ALL", "TECHNOLOGY", "LAPTOPS", "SMARTPHONES", "GUIDES"];

function Blog() {
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState("ALL");
  const [search, setSearch] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const featuredArticle = articles[0];

  const filteredArticles = useMemo(() => {
    return articles
      .filter((article) => !article.featured)
      .filter((article) => {
        const matchesCategory =
          activeCategory === "ALL" || article.category === activeCategory;

        const matchesSearch =
          article.title.toLowerCase().includes(search.toLowerCase()) ||
          article.description.toLowerCase().includes(search.toLowerCase());

        return matchesCategory && matchesSearch;
      });
  }, [activeCategory, search]);

  return (
    <main className={styles.blogPage}>
      {/* PAGE HERO */}

      <section className={styles.blogHero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroText}>
            <span className={styles.eyebrow}>OUR BLOG & INSIGHTS</span>

            <h1>
              Explore the world
              <br />
              of <span>technology.</span>
            </h1>

            <p>
              Discover the latest technology trends, expert guides, product
              insights and ideas that keep you one step ahead.
            </p>

            <button
              className={styles.heroButton}
              onClick={() =>
                document
                  .getElementById("articles")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Articles <span>↓</span>
            </button>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroCircle}></div>

            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=85"
              alt="Technology workspace"
            />

            <div className={styles.heroImageLabel}>
              <span>IDEAS. INNOVATION. TECHNOLOGY.</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLE */}

      <section className={styles.featuredSection}>
        <div className={styles.sectionHeading}>
          <div>
            <span className={styles.sectionEyebrow}>EDITOR'S PICK</span>
            <h2>Featured Article</h2>
          </div>

          <span className={styles.articleNumber}>01 / 06</span>
        </div>

        <div className={styles.featuredCard}>
          <div className={styles.featuredImage}>
            <img src={featuredArticle.image} alt={featuredArticle.title} />

            <span className={styles.featuredBadge}>FEATURED</span>
          </div>

          <div className={styles.featuredContent}>
            <span className={styles.articleCategory}>
              {featuredArticle.category}
            </span>

            <h2>{featuredArticle.title}</h2>

            <p>{featuredArticle.description}</p>

            <div className={styles.articleMeta}>
              <span>{featuredArticle.date}</span>
              <span>•</span>
              <span>{featuredArticle.readTime}</span>
            </div>

            <button
              className={styles.readButton}
              onClick={() => setSelectedArticle(featuredArticle)}
            >
              Read Full Article <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* ARTICLES */}

      <section className={styles.articlesSection} id="articles">
        <div className={styles.articlesHeading}>
          <div>
            <span className={styles.sectionEyebrow}>THE LATEST STORIES</span>
            <h2>Latest Articles</h2>
            <p>
              Fresh ideas, useful guides and everything happening in the
              technology world.
            </p>
          </div>

          <div className={styles.searchBox}>
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {search && <button onClick={() => setSearch("")}>×</button>}
          </div>
        </div>

        {/* CATEGORY FILTER */}

        <div className={styles.categoryFilters}>
          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category
                  ? styles.activeFilter
                  : styles.filterButton
              }
              onClick={() => setActiveCategory(category)}
            >
              {category === "ALL" ? "All Articles" : category}
            </button>
          ))}
        </div>

        {/* ARTICLE GRID */}

        {filteredArticles.length > 0 ? (
          <div className={styles.articleGrid}>
            {filteredArticles.map((article) => (
              <article className={styles.articleCard} key={article.id}>
                <div className={styles.articleImage}>
                  <img src={article.image} alt={article.title} loading="lazy" />

                  <span>{article.category}</span>
                </div>

                <div className={styles.articleContent}>
                  <div className={styles.cardMeta}>
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3>{article.title}</h3>

                  <p>{article.description}</p>

                  <div className={styles.cardFooter}>
                    <span>By {article.author}</span>

                    <button
                      onClick={() => setSelectedArticle(article)}
                      aria-label={`Read ${article.title}`}
                    >
                      Read More <span>→</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className={styles.noResults}>
            <span>⌕</span>
            <h3>No articles found</h3>
            <p>Try another search term or choose a different category.</p>

            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("ALL");
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* BOTTOM BANNER */}

      <section className={styles.blogBanner}>
        <div>
          <span>DISCOVER MORE</span>
          <h2>
            Find the right technology
            <br />
            for your everyday life.
          </h2>
          <p>Explore our collection and find devices that match your needs.</p>
        </div>

        <button onClick={() => navigate("/products")}>
          Explore Products <span>→</span>
        </button>
      </section>

      {/* ARTICLE MODAL */}

      {selectedArticle && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className={styles.articleModal}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.modalClose}
              onClick={() => setSelectedArticle(null)}
              aria-label="Close article"
            >
              ×
            </button>

            <div className={styles.modalImage}>
              <img src={selectedArticle.image} alt={selectedArticle.title} />
            </div>

            <div className={styles.modalContent}>
              <span className={styles.articleCategory}>
                {selectedArticle.category}
              </span>

              <h2>{selectedArticle.title}</h2>

              <div className={styles.articleMeta}>
                <span>{selectedArticle.author}</span>
                <span>•</span>
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>

              <p className={styles.modalDescription}>
                {selectedArticle.description}
              </p>

              <div className={styles.fullArticle}>
                {selectedArticle.content
                  .split("\n\n")
                  .map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Blog;
