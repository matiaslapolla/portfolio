import Image from "next/image";
import GlobalWindowTitle from "@/components/layout/global-windowtitle";
import Divider from "@/components/layout/divider";
import { TechStack } from "@/content/tech-stack";
import TechStackItem from "@/components/layout/tech-stack-item";

export default function Home() {
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight + 100,
      behavior: "smooth",
    });
  };

  return (
    <>
      <GlobalWindowTitle />
      <div className={"flex flex-col py-16 gap-4"}>
        <div className={"flex max-h-screen items-center"}>
          <div className={"flex flex-1 justify-center items-center "}>
            <div
              className={"flex flex-col p-16 h-1/2 items-center justify-center"}
            >
              <h1
                className={
                  "bg-gradient-to-br from-cyan-500 to-cyan-600 text-transparent bg-clip-text text-6xl leading-relaxed font-bold text-center"
                }
              >
                Hola! My name is Matias Lapolla
              </h1>
              <Divider />
              <h4
                className={
                  "text-slate-400 text-lg text-center hover:text-cyan-600 hover:font-normal"
                }
              >
                I am a Frontend Developer
              </h4>
            </div>
          </div>

          <div className={"flex-1 flex flex-col items-center"}>
            <div
              className={
                "flex flex-1 flex-col gap-8 p-16 h-1/2 items-center justify-center"
              }
            >
              <p className={"text-xl leading-relaxed"}>
                Welcome to my portfolio! I'm a passionate developer with a
                usability-first development focus and a love for creating clean
                and functional websites.
              </p>
              <p className={"text-xl leading-relaxed"}>
                I have coded designs from user interfaces, migrated code from
                old projects to newer versions, done refactors, created new
                features, designed custom components, designed and developed
                APIs.
              </p>
              <p className={"text-xl leading-relaxed"}>
                Apart from my tech stack I have knowledge in Object Oriented
                Programming, SOLID Principles, Onion Architecture, and used
                tools like Trello and Slack for project management.
              </p>
            </div>
          </div>
        </div>

        <div className={"flex flex-col items-center mb-12"}>
          <Image
            onClick={scrollDown}
            height={100}
            width={100}
            src={"/down-arrow.png"}
          />
        </div>

        <div className={"flex-1 mb-32 flex flex-col items-center"}>
          <h1 className={"text-4xl text-center font-bold leading-relaxed"}>
            My tech stack includes:
          </h1>
          <p className={"text-xs text-slate-400 italic leading-relaxed mb-2"}>
            (as of july 1st 2023)
          </p>

          <ul
            className={
              "flex flex-col border rounded-xl w-1/2 max-h-96 p-8 gap-4 items-center overflow-y-scroll"
            }
          >
            {TechStack.map((tech) => (
              <>
                <TechStackItem key={tech.order} {...tech} />
              </>
            ))}
          </ul>
        </div>

        <div className={"flex"}>
          <div
            className={
              "flex flex-1 flex-col p-16 h-1/2 items-center justify-center border border-red-500"
            }
          >
            <h1 className={"text-4xl text-center font-bold leading-relaxed"}>
              Some of my projects are:
            </h1>
          </div>
          <div className={"flex flex-1 border border-red-500"}></div>
        </div>
      </div>
    </>
  );
}
