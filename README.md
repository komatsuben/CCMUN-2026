# CCMUN 2026 - Model United Nations Conference

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=flat&logo=mui&logoColor=white)](https://mui.com/)

Official website for the CCMUN (Canisius College Model United Nations) 2026 conference. This modern, responsive web application provides information about the event, registration functionality, and essential details for participants.

## 🚀 Features

- 🌓 Light/Dark mode toggle
- 📅 Interactive conference timeline
- 📝 Online registration form
- 📱 Fully responsive design
- ✨ Modern UI with smooth animations
- 📋 Committee information
- ❓ FAQ section
- 📍 Venue details

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **UI Library**: Material-UI (MUI) v5
- **Styling**: Emotion, Tailwind CSS
- **Form Handling**: React Hook Form
- **Animations**: Framer Motion
- **Type Safety**: TypeScript
- **Linting**: ESLint
- **Testing**: Vitest

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm (v8 or later) or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/komatsuben/CCMUN-2026.git
   cd CCMUN-2026
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Building for Production

```bash
# Build the app for production
npm run build

# Preview the production build locally
npm run preview
```

## 🚀 Deployment

The project is configured for GitHub Pages deployment. To deploy:

1. Ensure your GitHub repository is named `CCMUN-2026`
2. Run the deployment script:
   ```bash
   npm run deploy
   ```
3. Your site will be live at: [https://komatsuben.github.io/CCMUN-2026](https://komatsuben.github.io/CCMUN-2026)

## 📂 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── AboutSection/     # About the conference
│   ├── CommitteeSection/ # Committee information
│   ├── FaqSection/       # Frequently asked questions
│   ├── Footer/           # Site footer
│   ├── Header/           # Navigation header
│   ├── HeroSection/      # Main banner section
│   ├── Layout/           # Main layout wrapper
│   ├── RegistrationForm/ # Registration form
│   └── Timeline/         # Conference timeline
├── theme/                # MUI theme configuration
└── App.tsx               # Main application component
```

## 🎨 Theming

The application uses Material-UI theming with custom dark/light mode support. The theme can be toggled using the theme switcher in the header.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) for the amazing build tool
- [Material-UI](https://mui.com/) for the component library
- [Framer Motion](https://www.framer.com/motion/) for animations
- All contributors and participants of CCMUN 2026

---

Built with ❤️ by the CCMUN 2026 Organizing Team
