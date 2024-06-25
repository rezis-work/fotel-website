import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

export const metadata = {
  title: "Fotell",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
