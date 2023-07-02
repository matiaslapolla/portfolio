import React, { useState } from "react";

function TechStackItem(props) {
  const { title, order, description } = props;

  const borderColors = [
    "border-red-500",
    "border-yellow-500",
    "border-green-500",
    "border-blue-500",
    "border-indigo-500",
    "border-purple-500",
    "border-pink-500",
  ];

  const getRandomBorderColor = () => {
    const randomIndex = Math.floor(Math.random() * borderColors.length);
    return borderColors[randomIndex];
  };

  const [showDescription, setShowDescription] = useState(false);

  return (
    <li
      className={
        "flex flex-col gap-2 p-4 w-5/6  hover:border-cyan-300 hover:border transition duration-500 ease-in-out rounded-md "
      }
    >
      <div className={"w-3/4"}>
        <h3 className={"text-lg font-bold"}>{title}</h3>
      </div>
      <div className={"w-4/5"}>
        {showDescription === true ? (
          <p
            onClick={() => setShowDescription(!showDescription)}
            className={
              "text-md leading-normal hover:text-cyan-500 font-mono transition duration-250 ease-in-out rounded-md"
            }
          >
            {description}
          </p>
        ) : (
          <button
            className={
              "text-sm border px-2 py-1 rounded-md bg-slate-100 shadow-sm hover:bg-slate-200"
            }
            onClick={() => setShowDescription(!showDescription)}
          >
            Show description
          </button>
        )}
      </div>
    </li>
  );
}

export default TechStackItem;
