<p align="center">
  <img src="public/logo.svg" alt="Awaaj Labs Logo" width="280" />
</p>

<h1 align="center">Awaaj Labs</h1>

<p align="center">
  <strong>AI-Powered Text-to-Speech & Audio Platform</strong><br/>
  Transform text into natural-sounding speech, clone voices, and create immersive audio experiences.
</p>

<p align="center">
  <a href="#features"><img src="https://img.shields.io/badge/Features-8A2BE2?style=for-the-badge" alt="Features"/></a>
  <a href="#tech-stack"><img src="https://img.shields.io/badge/Tech_Stack-0078D4?style=for-the-badge" alt="Tech Stack"/></a>
  <a href="#getting-started"><img src="https://img.shields.io/badge/Get_Started-00C853?style=for-the-badge" alt="Get Started"/></a>
</p>

---

## 📸 Preview

<p align="center">
  <img src="public/dashboard-preview.png" alt="Awaaj Labs Dashboard" width="100%" style="border-radius: 12px;" />
</p>

---

## ✨ Features

| Feature                     | Description                                                                                                                                         |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🎙️ **Text to Speech**       | Convert text into lifelike audio with customizable voice parameters — temperature, topP, topK, and repetition penalty                               |
| 🗣️ **Voice Cloning**        | Clone and create custom voice profiles for personalized audio output                                                                                |
| 🔍 **Explore Voices**       | Browse a library of system and custom voices across 12+ categories — Audiobook, Conversational, Podcast, and more                                   |
| ⚡ **Quick Actions**        | One-click workflows for narrating text, summarizing content, directing movie scenes, voicing game characters, recording ads, and transcribing audio |
| 🏢 **Organization Support** | Multi-org workspace management powered by Clerk                                                                                                     |
| 🌙 **Dark Mode**            | Full dark/light theme support via `next-themes`                                                                                                     |

---

## 🛠️ Tech Stack

<table>
  <tr>
    <td><strong>Category</strong></td>
    <td><strong>Technology</strong></td>
  </tr>
  <tr>
    <td>Framework</td>
    <td><img src="https://img.shields.io/badge/Next.js_16-000?logo=nextdotjs&logoColor=white" alt="Next.js" /> <img src="https://img.shields.io/badge/React_19-61DAFB?logo=react&logoColor=black" alt="React" /></td>
  </tr>
  <tr>
    <td>Language</td>
    <td><img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" alt="TypeScript" /></td>
  </tr>
  <tr>
    <td>Styling</td>
    <td><img src="https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind" /> <img src="https://img.shields.io/badge/shadcn/ui-000?logo=shadcnui&logoColor=white" alt="shadcn/ui" /> <img src="https://img.shields.io/badge/Radix_UI-161618?logo=radixui&logoColor=white" alt="Radix UI" /></td>
  </tr>
  <tr>
    <td>Auth</td>
    <td><img src="https://img.shields.io/badge/Clerk-6C47FF?logo=clerk&logoColor=white" alt="Clerk" /></td>
  </tr>
  <tr>
    <td>Database</td>
    <td><img src="https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white" alt="PostgreSQL" /> <img src="https://img.shields.io/badge/Prisma_7-2D3748?logo=prisma&logoColor=white" alt="Prisma" /></td>
  </tr>
  <tr>
    <td>Forms & Validation</td>
    <td><img src="https://img.shields.io/badge/React_Hook_Form-EC5990?logo=reacthookform&logoColor=white" alt="RHF" /> <img src="https://img.shields.io/badge/Zod-3E67B1?logo=zod&logoColor=white" alt="Zod" /> <img src="https://img.shields.io/badge/TanStack_Form-FF4154?logo=reactquery&logoColor=white" alt="TanStack" /></td>
  </tr>
  <tr>
    <td>Package Manager</td>
    <td><img src="https://img.shields.io/badge/pnpm-F69220?logo=pnpm&logoColor=white" alt="pnpm" /></td>
  </tr>
</table>

---

## 📁 Project Structure

```
awaaj-labs/
├── app/
│   ├── (dashboard)/            # Main dashboard views
│   │   ├── _components/        # Dashboard-specific components
│   │   ├── data/               # Quick action data
│   │   └── text-to-speech/     # TTS page & components
│   ├── org-selection/          # Organization selection
│   ├── sign-in/                # Auth – Sign in
│   ├── sign-up/                # Auth – Sign up
│   ├── layout.tsx              # Root layout (Clerk + Theme)
│   └── globals.css             # Global styles
├── components/ui/              # Reusable UI components (shadcn)
├── hooks/                      # Custom React hooks
├── lib/                        # Utilities, DB client, env config
│   └── generated/prisma/       # Prisma generated client
├── prisma/
│   ├── schema.prisma           # Database schema
│   └── migrations/             # Migration files
└── public/                     # Static assets & logo
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+
- **pnpm** 9+
- **PostgreSQL** instance

### 1. Clone the repository

```bash
git clone https://github.com/Saurabh-shukla1/Awaaj-Labs.git
cd Awaaj-Labs
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/awaaj_labs"

# Clerk Auth
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
CLERK_SECRET_KEY=sk_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

### 4. Set up the database

```bash
pnpm prisma migrate dev
pnpm prisma generate
```

### 5. Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

---

## 📜 Available Scripts

| Command                   | Description              |
| ------------------------- | ------------------------ |
| `pnpm dev`                | Start development server |
| `pnpm build`              | Create production build  |
| `pnpm start`              | Start production server  |
| `pnpm lint`               | Run ESLint               |
| `pnpm prisma studio`      | Open Prisma Studio GUI   |
| `pnpm prisma migrate dev` | Run database migrations  |

---

## 🗄️ Database Schema

The app uses two core models:

- **Voice** — Stores voice profiles (system & custom) with category, language, and R2 storage references
- **Generation** — Tracks each TTS generation with full parameter history (temperature, topP, topK, repetition penalty)

```
Voice 1 ──── * Generation
```

Voice categories include: `AUDIOBOOK`, `CONVERSATIONAL`, `PODCAST`, `NARRATIVE`, `CHARACTERS`, `MEDITATION`, `CORPORATE`, and more.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is private and proprietary.

---

<p align="center">
  Built with ❤️ by the <strong>Awaaj Labs</strong> team
</p>
