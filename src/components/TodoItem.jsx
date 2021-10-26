import React from "react";

export default function TodoItem({ item }) {
  return (
    <li key={item.id} className="py-4 px-6 my-2 rounded-md bg-white">
      {item.title}
    </li>
  );
}
