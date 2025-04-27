"use client";

import { CircleArrowDown } from "lucide-react";
import { useState } from "react";

const Input = () => {
  const [inputText, setInputText] = useState("");
  const [summary, setSummary] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/summarizethisplease",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userInput: inputText }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP ERROR STATUS: ${response.status}`);
      }

      const responseData = await response.json();
      setSummary(responseData);
      console.log(summary);
    } catch (error) {
      console.error(error);
      throw error;
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
          <textarea
            placeholder="Blah blah blah...."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button type="submit">Summarize Please</button>
        </form>
      </div>
    </div>
  );
};

export default Input;
