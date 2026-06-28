# Blue Jay Travels



Blue Jay Travels is an enterprise mobility solutions provider offering reliable, safe, and scalable transportation services for modern organizations. From corporate employee transportation and school bus services to luxury rentals and airport transfers, we engineer mobility architectures for the modern world.

## 🚀 Live Demo

[Visit Blue Jay Travels](https://bluejay-travels.vercel.app/)

## ✨ Features

- **Enterprise Scale Transportation**: Scalable solutions for large workforces and educational institutions.
- **Diverse Fleet**: From executive sedans and luxury SUVs to 50+ seater coaches.
- **Safety First**: Rigorous screening, 24/7 monitoring, and maintenance excellence.
- **Quick Quote System**: An integrated contact and inquiry system to get custom quotes.
- **Modern UI/UX**: Built with React, Tailwind CSS, and Framer Motion for a seamless, animated experience.

## 🛠️ Tech Stack

- **Frontend**: React (Vite), TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Hosting**: Vercel (with Serverless Functions)
- **Database**: Supabase (PostgreSQL)

## 📦 Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn or pnpm

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/blue-jay-travels.git
   ```

2. Install NPM packages
   ```bash
   npm install
   ```

3. Set up your environment variables
   Duplicate `.env.example` to `.env` and fill in your keys (Supabase credentials, etc.)
   ```bash
   cp .env.example .env
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

## 📂 Project Structure

```
.
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components (Hero, Navbar, Fleet, etc.)
│   ├── context/            # React context providers (InquiryContext)
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # React application entry point
│   └── index.css           # Global styles and Tailwind configuration
├── package.json            # Project dependencies and scripts
└── vite.config.ts          # Vite bundler configuration
```

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.
