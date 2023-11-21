import { IconHome } from "@tabler/icons-react";

function SectionNav({ setPages, pages }) {
  return (
    <>
      <button
        onClick={() => setPages('home')}
        className={` uppercase hover:tracking-wider hover:text-yellow-500 transition-all  ${pages === 'home' ? 'opacity-0 invisible' : ' opacity-100 visible'}`}
      >
        <IconHome  />
      </button>

      <button
        onClick={() => setPages("quienes")}
        className=" uppercase hover:tracking-wider hover:text-yellow-500 transition-all"
      >
        ¿Quiénes somos?
      </button>
      <button
        onClick={() => setPages("que")}
        className=" uppercase hover:tracking-wider hover:text-yellow-500 transition-all"
      >
        ¿Qué hacemos?
      </button>
      <button
        onClick={() => setPages("concientacion")}
        className=" uppercase hover:tracking-wider hover:text-yellow-500 transition-all"
      >
        Concientización
      </button>
      <button
        onClick={() => setPages("informate")}
        className=" uppercase hover:tracking-wider hover:text-yellow-500 transition-all"
      >
        Informate
      </button>
      <button
        onClick={() => setPages("como")}
        className=" uppercase hover:tracking-wider hover:text-yellow-500 transition-all"
      >
        ¿Cómo sumarte?
      </button>
    </>
  );
}

export default SectionNav;
