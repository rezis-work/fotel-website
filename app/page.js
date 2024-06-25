import Link from "next/link";
import Navigation from "./components/Navigation";

export default function Page() {
  return (
    <div>
      <Navigation />
      <h1>Fotel, Welcome to best hotel in da Country</h1>
      <Link href="/cabins">Explore luxury cabins</Link>
    </div>
  );
}
