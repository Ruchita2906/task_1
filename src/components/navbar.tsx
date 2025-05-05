import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto flex h-16 items-center px-4 justify-between">
        <Link href="/" className="text-xl font-bold">
          HR Portal
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost">Home</Button>
          </Link>
          <Link href="/signup">
            <Button>Sign In</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
