function PrincipalLayout({ pages, children }) {
  return (
    <section
      className={` grid grid-rows-[1fr_auto] h-screen pt-20 ${
        pages === "quienes"
          ? "visible translate-y-0 h-auto"
          : "invisible translate-y-full  h-0 overflow-hidden"
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
