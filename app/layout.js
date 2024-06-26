import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

import "@/app/_styles/globals.css";

export const metadata = {
  // title: "Fotell",
  title: {
    template: "%s The Fotell",
    default: "Welcome / The fotell",
  },
  description:
    "Luxutious cabin hotel, located in the heart of georgian mountains, surrounded with dark beautiful forrest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen`}
      >
        <header>
          <Logo />
        </header>
        <Navigation />
        <main>{children}</main>
        <footer>Copyright by the Fotell</footer>
      </body>
    </html>
  );
}
