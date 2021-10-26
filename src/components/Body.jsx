import React, { useState } from "react";

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
  const [todoList, settodoList] = useState(TODOS);

  return (
    <div className="bg-gray-900 w-screen h-screen flex justify-start items-center">
      <ul className="w-9/12 m-auto">
        {todoList.map((todo) => (
          <li key={todo.id} className="py-4 px-6 m-2 rounded-md bg-white">
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
