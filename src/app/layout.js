import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "./Providers";
import NavBar from "@/components/NavBar";
import SearchBox from "@/components/SearchBox";

export const metadata = {
  title: "IMDb Clone Tutorial",
  description: "Find best movies and TV shows",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Providers>
          {/* Header */}
          <Header/>
          {/* Navbar */}
          <NavBar/>
          {/* SearchBox */}
          <SearchBox/>
          {/* Main */}

        {children}
        </Providers>
        
      </body>
    </html>
  );
}