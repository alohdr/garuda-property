"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations } from '../data/translations';

type Language = 'id' | 'en';
type TranslationType = typeof translations.id;

interface LanguageContextType {
  language: Language;
  t: TranslationType;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('id');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'id' ? 'en' : 'id');
  };

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        t: translations[language], 
        toggleLanguage,
        setLanguage 
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
