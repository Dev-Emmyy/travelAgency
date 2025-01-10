import "./globals.css";
import SessionProviderWrapper from "./SessionProviderWrapper";


export const metadata = {
  title: "Travel Agency",
  description: "Travel around the world easily",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <SessionProviderWrapper>{children}</SessionProviderWrapper>
      </body>
    </html>
  );
}
