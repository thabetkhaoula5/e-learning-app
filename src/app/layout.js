import "./globals.css";

export const metadata = {
  title: "E-tutor",
  description: "platform d'E-learning pour le domaine de science de l'informatique",
  icons: {
    icon: "/images/meta-icon.svg",  
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
