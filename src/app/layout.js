import "./globals.css";
import NavBar from "@/components/NavBar";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
