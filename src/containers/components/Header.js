import { twMerge } from "tailwind-merge";
import { RxCaretLeft } from 'react-icons/rx';
import { RxCaretRight } from 'react-icons/rx';
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Button from "./Button";

const Header = ({ children, className }) => {
  return (
    <div className={twMerge(`h-fit bg-gradient-to-b from-sky-700 p-6`, className)}>
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <Link to="#" className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition">
            <RxCaretLeft className="text-white" size={30} />
          </Link>

          <Link to="#" className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition">
            <RxCaretRight className="text-white" size={30} />
          </Link>
        </div>

        <div className="flex md:hidden gap-x-2 items-center">
          <Link to="#" className="rounded-full p-2 bg-neutral-900 flex items-center justify-center hover:opacity-75 transition">
            <HiHome className="text-white" size={20} />
          </Link>

          <Link to="#" className="rounded-full p-2 flex items-center justify-center hover:opacity-75 transition">
            <BiSearch className="text-white" size={20} />
          </Link>
        </div>

        <div className="flex justify-between items-center gap-x-4">
          <div>
            <Button className="bg-transparent text-neutral-300 font-medium">
              Sign up
            </Button>
          </div>

          <div>
            <Button className="bg-white text-neutral-300 font-medium">
              Log in
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
