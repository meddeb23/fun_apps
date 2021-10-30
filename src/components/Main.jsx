import React, { useEffect, useState } from "react";

const Text =
  "A lot of people were talking about it on Twitter which includes a lot of hype around this so-called “the new normal social app”. This is what brings Clubhouse to my attention.";

export default function Main() {
  const [text, setText] = useState(
    Text.split("").map((i) => ({ letter: i, isCorrect: undefined }))
  );
  const [textPointer, settextPointer] = useState(0);
  const [errorsCount, seterrorsCount] = useState(0);
  const [currentSpeed, setcurrentSpeed] = useState(0);
  const [accuracy, setaccuracy] = useState(0);
  //   const [score, setscore] = useState(0);
  const [userInput, setuserInput] = useState("");
  const [lastWord, setlastWord] = useState("");

  const toggleCorrectness = (value) => {
    setText((text) =>
      text.map((i, idx) =>
        idx === textPointer ? { ...i, isCorrect: value } : i
      )
    );
  };

  //   const getAccuracy = () => {
  //     setInterval(() => {
  //       console.log("test");
  //       console.log(accuracy);
  //       const acc =
  //         textPointer === 0
  //           ? 0
  //           : ((textPointer - errorsCount) / textPointer) * 100;
  //       console.log(acc);
  //       setaccuracy(acc.toFixed(2));
  //     }, 1000);
  //   };

  const checkSpell = (value) => {
    setuserInput(value);
    const userIsDeleting = lastWord.length > value.length;
    const lastTypedChar = value[value.length - 1];
    if (text[textPointer].letter !== lastTypedChar) {
      if (!userIsDeleting) {
        toggleCorrectness(false);
        seterrorsCount((errorsCount) => errorsCount + 1);
      }
    } else {
      toggleCorrectness(true);
    }
    if (userIsDeleting) {
      toggleCorrectness(undefined);
      settextPointer((counter) => counter - 1);
    } else settextPointer((counter) => counter + 1);

    setlastWord(value);
    if (lastTypedChar === " ") {
      setuserInput("");
      setlastWord("");
    }
  };

  //   useEffect(() => {
  //     getAccuracy();
  //     setTimeout(() => clearInterval(getAccuracy), 3000);
  //   }, []);

  return (
    <main className="min-h-screen bg-gray-900 pt-10 text-white">
      <div className="w-9/12 mx-auto">
        <div className=" bg-white rounded-md p-6 text-black">
          <p className="text-xl">
            {text.map(({ letter, isCorrect }, idx) =>
              idx === textPointer ? (
                <span key={letter + idx} className="bg-blue-400 text-white">
                  {letter}
                </span>
              ) : isCorrect !== undefined ? (
                <span
                  key={letter + idx}
                  className={`
                            ${
                              isCorrect ? "bg-green-400" : "bg-red-400"
                            } text-white
                            `}
                >
                  {letter}
                </span>
              ) : (
                letter
              )
            )}
          </p>
        </div>
        <input
          type="text"
          className="mt-4 block w-full rounded-md bg-white text-black p-4 outline-none"
          placeholder="Enter Text here..."
          value={userInput}
          onChange={(e) =>
            textPointer < text.length && checkSpell(e.target.value)
          }
        />
        <div className="flex gap-6 my-10">
          <div className="text-red-500">Errors : {errorsCount}</div>
          <div className="text-green-500">Accuracy : {accuracy} %</div>
          <div className="">Speed : {currentSpeed} WPM</div>
        </div>
      </div>
    </main>
  );
}
