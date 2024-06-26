import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import "@/app/_styles/globals.css";

export const metadata = {
  title: "Fotell",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" bg-primary-950 text-primary-100 min-h-screen">
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
