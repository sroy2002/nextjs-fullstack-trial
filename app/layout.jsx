import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { ThemeProvider } from "../context/ThemeContext";
import ThemeWrapper from "./Components/ThemeWrapper";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio App",
  description: "This is the home page",
};

// bg-gradient-to-b from-[#54a4c9] to-[#C9E6F0]

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}  antialiased`}
        >
        <ThemeProvider>
          <ThemeWrapper>
          <Navbar />
          {children}
          <Footer />
          </ThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
