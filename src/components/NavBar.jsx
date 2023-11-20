import { IconMenu2, IconSearch, IconWorld } from "@tabler/icons-react";
import SectionNav from "./layouts/SectionNav";
import { useState } from "react";

function NavBar() {
  const [isShowModal, setIsShowModal] = useState(false);
  return (
    <>
      <nav className="bg-black text-white">
        <div className="flex justify-between items-center px-4 max-w-7xl mx-auto">
          <img className="max-w-[70px]  " src="/logo.png" alt="" />
          <div className="hidden md:flex gap-4 text-xs">
            <SectionNav />
          </div>
          <button onClick={() => setIsShowModal(!isShowModal)} className="md:hidden hover:text-yellow-500 transition-colors">
            {" "}
            <IconMenu2 />{" "}
          </button>
          <div className="hidden md:flex gap-4">
            <IconSearch />
            <IconWorld />
          </div>
        </div>
      </nav>
      <div
          className={`grid justify-center text-center bg-black text-white ${
            isShowModal
              ? "visible h-56 p-4"
              : "invisible h-0 overflow-hidden p-0"
          } transition-all duration-300`}
        >
          <SectionNav />
        </div>
    </>
  );
}

export default NavBar;
