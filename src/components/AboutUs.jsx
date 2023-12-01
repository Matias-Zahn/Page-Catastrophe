import PrincipalLayout from "./layouts/PrincipalLayout";

function AboutUs({ pages }) {
  return (
    <PrincipalLayout pages={pages}>
        <article className="max-w-5xl mx-auto shadow-md p-4">
        <div className="flex items-center justify-center flex-wrap">
          <img className="max-w-[300px]  " src="/logo-geologia.png" alt="" />
          <img className="max-w-[300px]  " src="/logo-geoloneta.png" alt="" />
        </div>
        <div className="grid gap-4 mt-5 p-4">
          <h1 className="font-bold text-2xl uppercase">¿Quienes somos?</h1>
          <p>
            Los participantes involucrados en el proyecto: “Caracterización de
            zonas de peligrosidad en la ciudad de Comodoro Rivadavia” son
            estudiantes avanzados de la carrera de Geología de la Universidad
            Nacional de la Patagonia San Juan Bosco (UNPSJB), entre los cuales
            se encuentran Craveroú Fabricio, Espin Santacruz Maria Luz,
            Geiannone Franco, Morales Agustina, Olivera Dana Ivonne, Parolín
            Lourdes, Rementería Ludmila y Segura Zashira{" "}
          </p>
        </div>
      </article>
    </PrincipalLayout>
  );
}
export default AboutUs;
