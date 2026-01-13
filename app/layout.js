import "./globals.css";
import Navbar from "@/components/Navbar";
import Theme from "@/components/Theme";

export const metadata = {
  title: "France Cawich",
  description: "My name is Francis cawich I am a ful stack developer and Data Analyst",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Theme>
          <Navbar />
          {children}
        </Theme>
      </body>
    </html>
  );
}
