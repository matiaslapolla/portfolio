import React from "react";

const PageHeader = (props) => {
  const { title, subtitle, ...other } = props;

  return (
    <>
      <div className={"flex mt-8 justify-center items-center"}>
        <div className={"w-3/5 flex flex-col gap-8"}>
          <h1 className={"text-5xl font-bold text-center"}>{title}</h1>

          {subtitle && (
            <>
              <div className={"relative"}>
                <div className={"absolute inset-0 flex items-center"}>
                  <div className={"w-full border-b border-gray-300"}></div>
                </div>
                <div className={"relative flex justify-center"}></div>
              </div>
              <h4
                className={
                  "text-black-400 text-lg font-light italic text-center "
                }
              >
                {subtitle}
              </h4>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default PageHeader;
