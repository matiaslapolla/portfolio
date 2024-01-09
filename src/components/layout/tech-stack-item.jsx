import React, { useState } from "react";

function TechStackItem(props) {
  const { title, order, description } = props;

  const [showDescription, setShowDescription] = useState(false);

  return (
    <li
      className={
        "flex flex-col gap-2 p-4 w-full  hover:border-sky-500 hover:border transition duration-100 ease-in-out rounded-md"
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
              "text-md leading-normal hover:text-sky-600 font-mono transition duration-100 ease-in-out rounded-md"
            }
          >
            {description}
          </p>
        ) : (
          <button
            className={
              "text-sm border px-2 py-1 rounded-md bg-black-100 shadow-sm hover:bg-black-200"
            }
            onClick={() => setShowDescription(!showDescription)}
          >
            What's {title.toLowerCase()}?
          </button>
        )}
      </div>
    </li>
  );
}

export default TechStackItem;
