function PrincipalLayout({ pages, children }) {
  return (
    <section
      className={` grid grid-rows-[1fr_auto]  pt-20 ${
        pages === "quienes"
          ? "visible translate-x-0 h-screen"
          : "invisible translate-x-full  h-0 overflow-hidden"
      } transition-all duration-150`}
    >
      {children}

      <footer className="w-full bg-[#557C55] p-4">
        <p className="text-center text-white font-light tracking-widest">
          Contactate con nosostros, se parte de nuestro proyecto para la mejora
          de nuestra ciudad
        </p>
      </footer>
    </section>
  );
}
export default PrincipalLayout;
