'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'en' | 'id'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

// Translations
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Hero
    'hero.title': 'Our Love Story 2025',
    'hero.subtitle': 'Our journey of love throughout 2025 💕',
    'hero.scroll': 'scroll down',
    
    // Music modal
    'music.title': 'Play Music?',
    'music.description': 'Would you like to play background music on this website?',
    'music.hint': 'Music will make the experience more memorable ✨',
    'music.yes': 'Yes, Play! 🎶',
    'music.no': 'No, Thanks',
    
    // Footer
    'footer.title': 'Thank You For Everything 💕',
    'footer.subtitle': 'Our Love Story 2025 — Edo Priyatna ❤️ Intinya Wanita',
    'footer.quote': '"With you is the most beautiful home" 🏠',
    
    // Month notes
    'note.january': 'New year, new chapter of our love story together 💑',
    'note.february': 'Month of love, month for the two of us 💕 Happy Valentine!',
    'note.march': 'Spring time, our love blooms even more 🌷',
    'note.april': 'Rain or shine, as long as we\'re together 🌈💜',
    'note.may': 'Every moment with you is the most beautiful gift 🎁💗',
    'note.june': 'Summer heat, our love burns even brighter 🔥💕',
    'note.july': 'Celebrating our love every single day 🥂💝',
    'note.august': 'Together chasing sunsets and our dreams 🌅💑',
    'note.september': 'Autumn season, our love grows deeper 🍁💜',
    'note.october': 'Together, every day is an adventure 👻💕',
    'note.november': 'Grateful for every second with you 💗🍂',
    'note.december': 'A year full of love and happiness with you! 🎄💝 I love you!',
    
    // Photo captions
    'caption.jan1': 'The beginning of our story 💕',
    'caption.jan2': 'Our first moment together',
    'caption.jan3': 'Your beautiful smile',
    'caption.feb1': 'Our Valentine 💝',
    'caption.feb2': 'Love in the month of love',
    'caption.feb3': 'Just the two of us',
    'caption.feb4': 'Sweet memories',
    'caption.mar1': 'Spring date 🌸',
    'caption.mar2': 'Walking together',
    'caption.mar3': 'Hanami together',
    'caption.apr1': 'Together in the rain ☔',
    'caption.apr2': 'Staying warm with you',
    'caption.apr3': 'One umbrella for two',
    'caption.apr4': 'Love in the rain',
    'caption.may1': 'Sweet date 🧁',
    'caption.may2': 'Quality time',
    'caption.may3': 'Romantic evening',
    'caption.jun1': 'Summer love ☀️',
    'caption.jun2': 'Beach together',
    'caption.jun3': 'Romantic sunset',
    'caption.jun4': 'Love under the sun',
    'caption.jul1': 'Our anniversary? 💍',
    'caption.jul2': 'Romantic dinner',
    'caption.jul3': 'Gift for you',
    'caption.aug1': 'Vacation together 🏝️',
    'caption.aug2': 'Travel memories',
    'caption.aug3': 'Exploring together',
    'caption.aug4': 'Beautiful memories',
    'caption.sep1': 'Autumn date 🍂',
    'caption.sep2': 'Cozy together',
    'caption.sep3': 'Colors of love',
    'caption.oct1': 'Couple costume 🎃',
    'caption.oct2': 'Having fun together',
    'caption.oct3': 'Night date',
    'caption.oct4': 'Halloween together',
    'caption.nov1': 'Grateful for you 🙏',
    'caption.nov2': 'Warmth together',
    'caption.nov3': 'Warm embrace',
    'caption.dec1': 'Our Christmas 🎄',
    'caption.dec2': 'My best gift',
    'caption.dec3': 'Winter love',
    'caption.dec4': 'Forever with you',
  },
  id: {
    // Hero
    'hero.title': 'Our Love Story 2025',
    'hero.subtitle': 'Perjalanan cinta kita sepanjang tahun 2025 💕',
    'hero.scroll': 'scroll down',
    
    // Music modal
    'music.title': 'Putar Musik?',
    'music.description': 'Apakah kamu ingin memutar musik di website ini?',
    'music.hint': 'Musik akan membuat pengalaman lebih berkesan ✨',
    'music.yes': 'Yes, Play! 🎶',
    'music.no': 'No, Thanks',
    
    // Footer
    'footer.title': 'Terima Kasih Untuk Segalanya 💕',
    'footer.subtitle': 'Our Love Story 2025 — Edo Priyatna ❤️ Intinya Wanita',
    'footer.quote': '"Bersamamu adalah rumah yang paling indah" 🏠',
    
    // Month notes
    'note.january': 'Awal tahun baru, awal cerita cinta kita bersama 💑',
    'note.february': 'Bulan cinta, bulan kita berdua 💕 Happy Valentine!',
    'note.march': 'Musim semi, cinta kita semakin mekar 🌷',
    'note.april': 'Hujan atau cerah, yang penting berdua 🌈💜',
    'note.may': 'Setiap momen bersamamu adalah hadiah terindah 🎁💗',
    'note.june': 'Musim panas, cinta kita semakin membara 🔥💕',
    'note.july': 'Merayakan cinta kita setiap hari 🥂💝',
    'note.august': 'Bersama mengejar sunset dan mimpi-mimpi kita 🌅💑',
    'note.september': 'Musim gugur, cinta kita semakin dalam 🍁💜',
    'note.october': 'Bersama, setiap hari adalah petualangan 👻💕',
    'note.november': 'Bersyukur untuk setiap detik bersamamu 💗🍂',
    'note.december': 'Setahun penuh cinta dan kebahagiaan bersamamu! 🎄💝 I love you!',
    
    // Photo captions
    'caption.jan1': 'Awal cerita kita 💕',
    'caption.jan2': 'Momen pertama bersama',
    'caption.jan3': 'Senyummu yang indah',
    'caption.feb1': 'Valentine kita 💝',
    'caption.feb2': 'Cinta di bulan cinta',
    'caption.feb3': 'Berdua saja',
    'caption.feb4': 'Kenangan manis',
    'caption.mar1': 'Spring date 🌸',
    'caption.mar2': 'Jalan-jalan bersama',
    'caption.mar3': 'Hanami berdua',
    'caption.apr1': 'Hujan berdua ☔',
    'caption.apr2': 'Tetap hangat bersamamu',
    'caption.apr3': 'Payung satu berdua',
    'caption.apr4': 'Cinta di tengah hujan',
    'caption.may1': 'Date manis 🧁',
    'caption.may2': 'Quality time',
    'caption.may3': 'Sore romantis',
    'caption.jun1': 'Summer love ☀️',
    'caption.jun2': 'Pantai berdua',
    'caption.jun3': 'Sunset romantis',
    'caption.jun4': 'Cinta di bawah matahari',
    'caption.jul1': 'Anniversary kita? 💍',
    'caption.jul2': 'Dinner romantis',
    'caption.jul3': 'Hadiah untukmu',
    'caption.aug1': 'Liburan berdua 🏝️',
    'caption.aug2': 'Travel memories',
    'caption.aug3': 'Explore bareng',
    'caption.aug4': 'Kenangan indah',
    'caption.sep1': 'Autumn date 🍂',
    'caption.sep2': 'Cozy berdua',
    'caption.sep3': 'Warna-warni cinta',
    'caption.oct1': 'Couple costume 🎃',
    'caption.oct2': 'Seru-seruan bareng',
    'caption.oct3': 'Date malam',
    'caption.oct4': 'Halloween berdua',
    'caption.nov1': 'Bersyukur ada kamu 🙏',
    'caption.nov2': 'Warmth berdua',
    'caption.nov3': 'Pelukan hangat',
    'caption.dec1': 'Christmas kita 🎄',
    'caption.dec2': 'Hadiah terbaikku',
    'caption.dec3': 'Winter love',
    'caption.dec4': 'Selamanya bersamamu',
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const LANG_STORAGE_KEY = 'preferredLanguage'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en') // Default English
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Load saved language preference
    const saved = localStorage.getItem(LANG_STORAGE_KEY) as Language | null
    if (saved && (saved === 'en' || saved === 'id')) {
      setLanguageState(saved)
    }
    setIsInitialized(true)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem(LANG_STORAGE_KEY, lang)
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  if (!isInitialized) {
    return null
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
