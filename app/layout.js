
import "./globals.css";

import Theme from "@/components/Theme";
import DarkLight from "@/components/DarkLight";
export const metadata = {
  title: "France Cawich",
  description: "My name is Francis cawich I am a ful stack developer and Data Analyst",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body > 
        
         <Theme>
          
          <DarkLight />
          {children}
         
          </Theme>
      </body>

     
    </html>
  );
}
