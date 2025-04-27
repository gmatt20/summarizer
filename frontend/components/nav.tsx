import Link from "next/link";
import { Button } from "./ui/button";

const Nav = () => {
  return (
    <div className="fixed top-0 w-screen">
      <div className="flex items-center justify-between px-10 py-5">
        <Link href="/" className="font-bold text-3xl uppercase">
          Article Summarizer
        </Link>

        <Link href="/dashboard">
          <Button className="font-bold cursor-pointer">Go To Summarizer</Button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
