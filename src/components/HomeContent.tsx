"use client";

import Image from "next/image";
import styles from "../app/page.module.css";
import Navbar from "./Navbar";
import { useLanguage } from "../context/LanguageContext";

export default function HomeContent() {
  const { t } = useLanguage();

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
          <div className={styles.grid}>
            {[
              { price: t.properties.callPrice, img: "1500382017468-9049fed747ef", size: "150" },
              { price: `${t.properties.price} 250.000.000`, img: "1513836279014-a89f7a760af3", size: "200" },
              { price: `${t.properties.price} 350.000.000`, img: "1504307651254-35680f356dfd", size: "300" }
            ].map((item, idx) => (
              <div key={idx} className={styles.card}>
                <div style={{ position: 'relative', height: '300px' }}>
                  <Image 
                    src={`https://images.unsplash.com/photo-${item.img}?q=80&w=800&auto=format&fit=crop`}
                    alt={t.properties.items[idx].title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: 20, right: 20, background: 'var(--primary)', color: '#000', padding: '0.5rem 1rem', fontSize: '0.8rem', fontWeight: 'bold' }}>
                    {t.properties.available}
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{t.properties.items[idx].title}</h3>
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
      </section>

      {/* Sales Agent Section */}
      <section id="contact" className={`${styles.section} ${styles.agentSection}`}>
        <div className={styles.container}>
          <div className={styles.agentCard}>
            <div style={{ position: 'relative' }}>
               <Image 
                 src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
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
