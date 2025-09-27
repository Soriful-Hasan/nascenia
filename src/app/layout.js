import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";

export const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata = {
  title: "Dash IT",
  description: "Nacenia this website is a company overview type website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable}  antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
