import "./globals.css";
import Navbar from "@/components/Navbar";
import Theme from "@/components/Theme";
import Footer from "@/components/Footer";

export const metadata = {
  title: "France Cawich",
  description: "My name is Francis cawich I am a ful stack developer and Data Analyst",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-white min-h-screen flex flex-col">
        <Theme>
          <Navbar />
          <main className="max-w-screen-xl w-full mx-auto px-6 pt-10 flex-grow">
            {children}
          </main>
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
