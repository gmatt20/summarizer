import Link from "next/link";

const Header = () => {
  return (
    <div className="text-center text-2xl flex flex-col items-center justify-center h-screen">
      <p className="font-bold text-4xl mb-5">Welcome to Article Summarizer!</p>
      <p>An AI and Machine Learning Summarizer</p>
      <Link
        className="font-bold bg-white text-xl text-black px-5 py-2 rounded-xl transition hover:bg-gray-200 my-5"
        href="/dashboard">
        Try it Now!
      </Link>
    </div>
  );
};

export default Header;
