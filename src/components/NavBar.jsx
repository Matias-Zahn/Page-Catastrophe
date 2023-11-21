import { IconMenu2, IconSearch, IconWorld } from "@tabler/icons-react";
import SectionNav from "./layouts/SectionNav";
import { useState } from "react";

function NavBar({ setPages, pages }) {
  const [isShowModal, setIsShowModal] = useState(false);
  return (
    <nav className=" fixed z-10 top-0 right-0  left-0">
      <section className="bg-[#557C55] text-white">
        <div className="flex justify-around gap-10 items-center px-4  mx-auto">
          <div className="flex items-center justify-center">
            <img className="max-w-[70px]  " src="/logo.png" alt="" />
            <img className="max-w-[170px]  " src="/axion.png" alt="" />
          </div>
          <div className="hidden md:flex gap-4 text-xs md:text-base">
            <SectionNav setPages={setPages} pages={pages} />
          </div>
          <button
            onClick={() => setIsShowModal(!isShowModal)}
            className="md:hidden hover:text-yellow-500 transition-colors"
          >
            {" "}
            <IconMenu2 />{" "}
          </button>
          <div className="hidden md:flex gap-4">
            <IconSearch />
            <IconWorld />
          </div>
        </div>
      </section>
      <div
        className={`grid bg-[#557C55] gap-4 place-items-center  text-white ${
          isShowModal ? "visible h-64 p-4" : "invisible h-0 overflow-hidden p-0"
        } transition-all duration-150`}
      >
        <SectionNav setPages={setPages} pages={pages} setIsShowModal={setIsShowModal} />
      </div>
    </nav>
  );
}

export default NavBar;
