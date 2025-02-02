import "./globals.css";
import SessionProviderWrapper from "./SessionProviderWrapper";

export const metadata = {
  title: "Travel Agency",
  description: "Travel around the world easily",
  icons: {
    icon: "/appLogo.png", // Path to your favicon
    shortcut: "/appLogo.png", // Shortcut icon for browsers
    apple: "/appLogo.png", // Apple touch icon
  },
  manifest: "/manifest.json", // Path to your manifest file
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProviderWrapper>{children}</SessionProviderWrapper>
      </body>
    </html>
  );
}