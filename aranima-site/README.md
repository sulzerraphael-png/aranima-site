# Aranima – Next.js One-Page

## Schnellstart lokal
1. Node.js 18+ installieren.
2. Im Terminal:
```
npm install
npm run dev
```
Seite unter http://localhost:3000

## Auf Vercel deployen
1. vercel.com → Login.
2. „Add New…“ → „Project“ → „Import“ → „Deploy“.
   - Falls nach Build Command gefragt: `next build`
   - Output dir: `.next` (automatisch)
3. Fertig – du bekommst sofort eine URL.

## Farben & E-Mail ändern
- Farben in `app/globals.css` (Tokens `--brand-*`). 
- E‑Mail-Link in `app/page.tsx` suchen nach `mailto:`.