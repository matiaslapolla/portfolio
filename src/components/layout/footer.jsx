import React from "react";

function Footer() {
  return (
    <>
      <footer
        className={
          "flex flex-col items-center justify-center gap-4 p-4 bg-black-900"
        }
      >
        <div className={"flex flex-col items-center justify-center gap-4"}>
          <div className={"flex flex-row gap-4"}>
            <a
              href={"https://www.linkedin.com/in/matiaslapolla/"}
              className={
                "text-black-100 hover:text-cyan-600 transition duration-100"
              }
            >
              LinkedIn{" "}
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
