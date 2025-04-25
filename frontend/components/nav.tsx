import Link from "next/link";

const Nav = () => {
  return (
    <div className="fixed top-0 w-screen">
      <div className="flex items-center justify-between px-10 py-5">
        <p className="font-bold text-3xl uppercase">Article Summarizer</p>
        <Link className="font-bold bg-white text-black px-5 py-2 rounded-xl transition hover:bg-gray-200" href="/dashboard">
          Go To Summarizer
        </Link>
      </div>
    </div>
  );
};

export default Nav;
