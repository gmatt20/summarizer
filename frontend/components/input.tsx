import { CircleArrowDown } from "lucide-react";
import { useState } from "react";

const Input = () => {
  const [inputText, setInputText] = useState("");
  const [sumamry, setSummary] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try{
      const response = await fetch()
    }
  };

  return (
    <div className="text-center text-2xl flex flex-col items-center justify-center h-screen">
      <div className="flex items-center gap-2">
        <p>Article Goes Here</p>
        <CircleArrowDown />
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <textarea placeholder="Blah blah blah...." value={inputText} onChange={(e) => setInputText(e.target.value)}/>
          <button type="submit">Summarize Please</button>
        </form>
      </div>
    </div>
  );
};

export default Input;
