/* eslint-disable @next/next/no-img-element */
// {

"use client";
import { useState } from "react";

type todo = {
  title: string;
  description: string;
};

const TodoUI = () => {
  const [todo, setTodo] = useState<todo>({
    title: "",
    description: "",
  });

  const onChange = (e: any) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const onClickAdd = async () => {
    const response = await fetch("/api/todo", {
      method: "POST",
      body: JSON.stringify(todo),
    });
  };

  return (
    <>
      <body className="bg-black">

        <div className="max-w-screen-lg mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg shadow-red-400">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Todo List Using Drizzle</h2>

            </div>
            <div className="mt-8 text-center">
              <img src="tree.png" alt="" />
            </div>
          </div>
          <div className="">
            <div>
              <span className="uppercase text-sm text-gray-600 font-bold">Name</span>
              <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                name="title"
                placeholder="Title"
                value={todo.title}
                onChange={onChange} />
            </div>

            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
              <textarea
                className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                name="description"
                placeholder="Description"
                value={todo.description}
                onChange={onChange}
              ></textarea>
            </div>
            <div className="mt-8">
              <button
                className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline" onClick={onClickAdd}>
                Send Message
              </button>
            </div>
          </div>
        </div>

      </body>
    </>
  );
};

export default TodoUI;

// }