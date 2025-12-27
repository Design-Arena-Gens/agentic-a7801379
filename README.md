# Odar Confirmation Studio

Generate ready-to-read order confirmation call scripts tailored to any Indian state language. The web app lets call agents prep instantly by selecting a state, tuning the tone, and adding customer details. Scripts are available in 20+ official languages with one-click copy and optional text-to-speech playback.

## Tech Stack

- [Next.js 14](https://nextjs.org/) with the App Router
- [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/) with the Forms plugin
- [Framer Motion](https://www.framer.com/motion/) for subtle UI animation
- [lucide-react](https://lucide.dev/) icons
- [@vercel/analytics](https://vercel.com/analytics) instrumentation-ready

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open the app at [http://localhost:3000](http://localhost:3000).

## Usage

1. Fill in the customer, order number, and delivery window.
2. Pick the destination state/UT to auto-load its official languages.
3. Toggle language chips or add more from the full catalog.
4. Generate scripts and copy or voice-play them for quick rehearsal.

Each script expands placeholders such as customer name, order ID, and delivery slot in the chosen language. Notes appear in English to guide the agent.

## Deploy

Build for production with:
```bash
npm run build
```

Then deploy through your preferred platform (Vercel recommended).

## License

MIT
