import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex top-0 bg-black-200 justify-center">
      <ul className="flex flex-1 px-8 py-12 max-w-screen-lg items-center tracking-tight">
        <div className={"flex-1"}>
          <li>
            <Link className={"text-3xl tracking-wide"} href="/">
              Matias
            </Link>
          </li>
        </div>
        <div className={"flex flex-1 justify-end gap-8"}>
          <li>
            <Link href="/about" className={"font-bold"}>About</Link>
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
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
