# 💕 Our Love Story - Digital Scrapbook 2025

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)
![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?style=for-the-badge&logo=greensock)

**A romantic digital scrapbook celebrating love throughout the year 2025**

[English](#english) | [Bahasa Indonesia](#bahasa-indonesia)

</div>

---

## English

### ✨ About

Our Love Story is a beautiful, interactive web application designed as a romantic digital scrapbook. It showcases memories month by month with smooth animations, decorative elements, and a lovely aesthetic inspired by love and romance.

### 🎨 Features

- **📅 12 Month Sections** - Each month has its own section with photos and romantic notes
- **🌐 Bilingual Support** - Toggle between English and Indonesian languages
- **🎵 Background Music** - Optional romantic background music
- **✨ Smooth Animations** - Powered by GSAP with scroll-triggered reveals
- **📱 Responsive Design** - Beautiful on all devices
- **🎀 Scrapbook Elements** - Sticky notes, tape effects, stickers, doodles
- **💫 Floating Decorations** - Hearts, stars, and romantic elements

### 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS + Custom CSS
- **Animations**: GSAP + ScrollTrigger
- **Smooth Scroll**: Lenis
- **Fonts**: Caveat (handwriting) + Outfit (body)

### 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/Douzxy/our-love-story.git

# Navigate to project
cd our-love-story

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles & romantic theme
│   ├── layout.tsx       # Root layout with providers
│   └── page.tsx         # Main page with month data
├── components/
│   ├── Header.tsx       # Hero section
│   ├── MonthSection.tsx # Monthly photo galleries
│   ├── PhotoCard.tsx    # Individual photo cards
│   ├── MusicPlayer.tsx  # Music + language controls
│   ├── ClientLayout.tsx # Client-side providers
│   └── scrapbook/       # Decorative elements
│       ├── StickyNote.tsx
│       ├── Sticker.tsx
│       ├── Doodle.tsx
│       └── ...
├── context/
│   └── LanguageContext.tsx  # i18n translations
└── public/
    ├── photos/          # Your photos organized by month
    └── music/           # Background music
```

### 📸 Adding Your Photos

1. Create folders in `public/photos/` for each month:

   ```
   public/photos/january/
   public/photos/february/
   ...
   ```

2. Add numbered photos (1.jpg, 2.jpg, etc.)

3. Update captions in `src/context/LanguageContext.tsx`

### 🎵 Adding Music

Place your background music file at:

```
public/music/background.mp3
```

### 📄 License

MIT License - Feel free to use for your own love story! 💕

---

## Bahasa Indonesia

### ✨ Tentang

Our Love Story adalah aplikasi web interaktif yang dirancang sebagai scrapbook digital romantis. Menampilkan kenangan bulan demi bulan dengan animasi halus, elemen dekoratif, dan estetika indah yang terinspirasi dari cinta dan romansa.

### 🎨 Fitur

- **📅 12 Seksi Bulan** - Setiap bulan memiliki seksi dengan foto dan catatan romantis
- **🌐 Dukungan Dwibahasa** - Beralih antara Bahasa Inggris dan Indonesia
- **🎵 Musik Latar** - Musik latar romantis opsional
- **✨ Animasi Halus** - Didukung oleh GSAP dengan reveal saat scroll
- **📱 Desain Responsif** - Indah di semua perangkat
- **🎀 Elemen Scrapbook** - Sticky notes, efek selotip, stiker, doodle
- **💫 Dekorasi Melayang** - Hati, bintang, dan elemen romantis

### 🛠️ Teknologi

- **Framework**: Next.js 15 (App Router)
- **Bahasa**: TypeScript
- **Styling**: TailwindCSS + Custom CSS
- **Animasi**: GSAP + ScrollTrigger
- **Smooth Scroll**: Lenis
- **Font**: Caveat (tulisan tangan) + Outfit (body)

### 🚀 Cara Memulai

```bash
# Clone repository
git clone https://github.com/Douzxy/our-love-story.git

# Masuk ke folder project
cd our-love-story

# Install dependencies
npm install

# Jalankan development server
npm run dev

# Buka http://localhost:3000
```

### 📸 Menambahkan Foto

1. Buat folder di `public/photos/` untuk setiap bulan:

   ```
   public/photos/january/
   public/photos/february/
   ...
   ```

2. Tambahkan foto bernomor (1.jpg, 2.jpg, dst.)

3. Update caption di `src/context/LanguageContext.tsx`

### 🎵 Menambahkan Musik

Letakkan file musik latar di:

```
public/music/background.mp3
```

### 💝 Dibuat Dengan Cinta

Dibuat oleh **Edo Priyatna** untuk seseorang yang spesial 💕

---

<div align="center">

### 💕 Made with Love by Edo Priyatna (Douzxy) 💕

_"Bersamamu adalah rumah yang paling indah"_

_"With you is the most beautiful home"_

⭐ Star this repo if you like it!

</div>
