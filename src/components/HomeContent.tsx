"use client";

import { useRef } from "react";
import Image from "next/image";
import styles from "../app/page.module.css";
import Navbar from "./Navbar";
import { useLanguage } from "../context/LanguageContext";

export default function HomeContent() {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 400;
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 400;
    }
  };

  return (
    <main className={styles.main}>
      <Navbar />

      {/* Hero Section */}
      <section id="home" className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            {t.hero.title1} <br />
            <span className={styles.goldText}>{t.hero.title2}</span>
          </h1>
          <p className={styles.subtitle}>
            {t.hero.subtitle}
          </p>
          <a href="#contact" className={styles.ctaButton}>{t.hero.cta}</a>
        </div>
      </section>

      {/* Values / Why Us */}
      <section id="about" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{t.whyUs.title}</h2>
            <p className={styles.sectionDesc}>{t.whyUs.desc}</p>
          </div>
          <div className={styles.grid}>
            {t.whyUs.items.map((item, idx) => (
              <div key={idx} className={styles.card}>
                 <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle} style={{ color: 'var(--primary)' }}>{item.title}</h3>
                    <p style={{ color: '#ccc', lineHeight: '1.8' }}>
                      {item.desc}
                    </p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section id="properties" className={styles.section} style={{ background: '#0a0a0a' }}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{t.properties.title}</h2>
            <p className={styles.sectionDesc}>{t.properties.desc}</p>
          </div>
          
          <div className={styles.carouselWrapper}>
            <div className={styles.carouselControls}>
               <button onClick={scrollLeft} className={styles.carouselBtn} aria-label="Previous">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
               </button>
               <button onClick={scrollRight} className={styles.carouselBtn} aria-label="Next">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
               </button>
            </div>
            
            <div className={styles.carousel} ref={scrollRef}>
              {[
                { price: t.properties.callPrice, img: "/images/properties/prop-1.jpg", size: "150", title: t.properties.items[0].title },
                { price: `${t.properties.price} 250.000.000`, img: "/images/properties/prop-2.jpg", size: "200", title: t.properties.items[1].title },
                { price: `${t.properties.price} 350.000.000`, img: "/images/properties/prop-3.jpg", size: "300", title: t.properties.items[2].title },
                { price: `${t.properties.price} 450.000.000`, img: "/images/properties/prop-4.jpg", size: "180", title: "Bukit Golf View" },
                { price: `${t.properties.price} 500.000.000`, img: "/images/properties/prop-5.jpg", size: "400", title: "Lembah Pinus" },
              ].map((item, idx) => (
                <div key={idx} className={styles.card}>
                  <div style={{ position: 'relative', height: '300px' }}>
                    <Image 
                      src={item.img}
                      alt={item.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)' }} />
                    <div style={{ position: 'absolute', top: 20, right: 20, background: 'var(--primary)', color: '#000', padding: '0.5rem 1rem', fontSize: '0.8rem', fontWeight: 'bold', zIndex: 2 }}>
                      {t.properties.available}
                    </div>
                  </div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <span className={styles.cardPrice}>{item.price}</span>
                    <ul className={styles.featureList}>
                      <li>✓ {t.properties.features.area}: {item.size} m²</li>
                      <li>✓ {t.properties.features.zone}</li>
                      <li>✓ {t.properties.features.access}</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sales Agent Section */}
      <section id="contact" className={`${styles.section} ${styles.agentSection}`}>
        <div className={styles.container}>
          <div className={styles.agentCard}>
            <div style={{ position: 'relative' }}>
               <Image 
                 src="/images/abi-consultant.jpg"
                 alt="Abi Sales Executive"
                 width={350}
                 height={450}
                 className={styles.agentImage}
               />
               <div style={{ 
                  position: 'absolute', 
                  bottom: -20, 
                  right: -20, 
                  background: 'var(--primary)', 
                  color: '#000', 
                  padding: '1rem',
                  fontFamily: 'var(--font-playfair)',
                  fontWeight: 'bold'
               }}>
                  ABI
               </div>
            </div>
            
            <div className={styles.agentInfo}>
              <span className={styles.agentRole}>{t.agent.role}</span>
              <h3>{t.agent.title}</h3>
               <p className={styles.agentBio}>
                {t.agent.bio}
              </p>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className={styles.contactButton}>
                <span>{t.agent.cta}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.logo} style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>GARUDA NUSANTARA</div>
          <p style={{ opacity: 0.6 }}>&copy; {new Date().getFullYear()} {t.footer.rights}</p>
        </div>
      </footer>
    </main>
  );
}
