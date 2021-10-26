import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TODOS = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
];

export default function Body() {
  const [todoList] = useState(TODOS);

  return (
    <div
      className="bg-gray-900 w-screen h-screen flex 
    justify-center items-center"
    >
      <div className="flex flex-col w-9/12 m-auto">
        <div className="flex justify-between items-center gap-2">
          <input
            type="text"
            className=" w-9/12 block
                  outline-none rounded-md py-2 px-4"
            placeholder="What you will do..."
          />
          <button className="rounded-md bg-green-400 py-2 px-4 text-white">
            Add Todo
          </button>
        </div>
        <ul className="">
          {todoList.map((todo) => (
            <TodoItem item={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
}
