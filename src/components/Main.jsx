import React, { useState } from "react";

const Text =
  "A lot of people were talking about it on Twitter which includes a lot of hype around this so-called “the new normal social app”. This is what brings Clubhouse to my attention.";

export default function Main() {
  const [text, settext] = useState(Text);
  const [errorsCount, seterrorsCount] = useState(0);
  const [currentSpeed, setcurrentSpeed] = useState(0);
  const [accuracy, setaccuracy] = useState(0);
  const [score, setscore] = useState(0);
  return (
    <main className="min-h-screen bg-gray-900 pt-10 text-white">
      <div className="w-9/12 mx-auto">
        <div className=" bg-white rounded-md p-6 text-black">
          <p>{text}</p>
        </div>
        <input
          type="text"
          className="mt-4 block w-full rounded-md bg-white text-black p-4 outline-none"
          placeholder="Enter Text here..."
        />
        <div className="flex space-x-6 my-10">
          <div className="text-red-500">Errors : {errorsCount}</div>
          <div className="text-green-500">Accuracy : {accuracy}</div>
          <div className="">Speed : {currentSpeed} WPM</div>
        </div>
      </div>
    </main>
  );
}
