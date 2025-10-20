export const metadata = { title: "Aranima – Raum · Heilung · Bewusstsein", description: "Sanfte Energie. Gehaltener Raum. Begegnung im Herzen."}
import "./globals.css"
export default function RootLayout({children}:{children:React.ReactNode}){
  return (<html lang="de"><body>{children}</body></html>)
}