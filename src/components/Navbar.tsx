"use client";

import { useState } from "react";
import styles from "./Navbar.module.css";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className={styles.logo}>GARUDA NUSANTARA</div>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div className={styles.desktopSwitcher}>
            <LanguageSwitcher />
          </div>

          <button 
            className={`${styles.mobileMenuBtn} ${isOpen ? styles.open : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </div>

        <nav className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
          <a href="#home" className={styles.navLink} onClick={closeMenu}>{t.nav.home}</a>
          <a href="#properties" className={styles.navLink} onClick={closeMenu}>{t.nav.collection}</a>
          <a href="#about" className={styles.navLink} onClick={closeMenu}>{t.nav.about}</a>
          <a href="#contact" className={styles.navLink} onClick={closeMenu}>{t.nav.contact}</a>
          <div className={styles.mobileSwitcher}>
             <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
}
