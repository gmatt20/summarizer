"use client";

import { CircleArrowDown } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import Spinner from "./ui/spinner";

const Input = () => {
  const [inputText, setInputText] = useState("");
  const [summary, setSummary] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("sent!");
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
      console.log(responseData);
      setSummary(responseData.response);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <div className="text-center text-2xl flex flex-col items-center justify-center h-screen">
      <div className="flex items-center gap-2 my-5">
        <CircleArrowDown />
        <p>Article Goes Here</p>
        <CircleArrowDown />
      </div>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <textarea
            placeholder="Blah blah blah...."
            className="max-h-60 min-h-10 border-2 rounded-2xl p-3 mb-5"
            rows={10}
            cols={60}
            maxLength={15}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <Button
            className="font-bold cursor-pointer"
            variant="default"
            type="submit">
            Summarize Please
          </Button>
        </form>
      </div>
      <Spinner />
      <p>{summary}</p>
    </div>
  );
};

export default Input;
