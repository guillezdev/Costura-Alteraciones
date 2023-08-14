import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
export const metadata = {
  title: "L&R Alteration",
  description: "Soy una costurera con mas de 15 años de experiencia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <NavBar />
        <ScrollToTop />
        {children}
        <Footer />
      </body>
    </html>
  );
}
