"use client";

import { useLanguage } from "../context/LanguageContext";
import styles from "./Navbar.module.css";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div style={{ display: 'flex', gap: '0.5rem', marginLeft: '2rem', zIndex: 102 }}>
      <button 
        onClick={() => setLanguage('id')}
        style={{
          background: 'none',
          border: 'none',
          color: language === 'id' ? 'var(--primary)' : 'rgba(255,255,255,0.5)',
          fontWeight: language === 'id' ? 'bold' : 'normal',
          cursor: 'pointer',
          fontFamily: 'var(--font-outfit)',
          fontSize: '0.9rem'
        }}
      >
        ID
      </button>
      <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
      <button 
        onClick={() => setLanguage('en')}
        style={{
          background: 'none',
          border: 'none',
          color: language === 'en' ? 'var(--primary)' : 'rgba(255,255,255,0.5)',
          fontWeight: language === 'en' ? 'bold' : 'normal',
          cursor: 'pointer',
          fontFamily: 'var(--font-outfit)',
          fontSize: '0.9rem'
        }}
      >
        EN
      </button>
    </div>
  );
}
