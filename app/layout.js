import Navigation from "@/app/_components/Navigation";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

import "@/app/_styles/globals.css";
import Header from "./_components/Header";

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
        className={`${josefin.className} bg-primary-950 antialiased text-primary-100 min-h-screen flex flex-col`}
      >
        <Header />
        <div className=" flex-1 px-8 py-12">
          <main className=" max-w-7xl mx-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
