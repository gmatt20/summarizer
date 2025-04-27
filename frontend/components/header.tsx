import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="text-center text-2xl flex flex-col items-center justify-center h-screen">
      <p className="font-bold text-4xl mb-5">Welcome to Article Summarizer!</p>
      <p>
        An AI and Machine Learning Summarizer Using Hugging Face Transformers
        and Google Gemini
      </p>
      <Link href="/dashboard">
        <Button className="font-bold cursor-pointer my-5">Try it Now!</Button>
      </Link>
    </div>
  );
};

export default Header;
