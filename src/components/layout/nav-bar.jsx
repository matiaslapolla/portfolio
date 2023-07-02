import Link from "next/link";

const NavBar = () => {
  return (
    <div className=" top-0 flex bg-slate-200">
      <ul className="flex flex-1 justify-around">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about" className={"font-bold"}>
            About
          </Link>
        </li>
        <li>
          <Link href="/experience">Experience</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
