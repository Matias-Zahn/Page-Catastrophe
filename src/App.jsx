import { useState } from "react";
import MainImages from "./components/MainImages";
import NavBar from "./components/NavBar";
import AboutUs from "./components/AboutUs";

function App() {
  const [pages, setPages] = useState("home");

  return (
    <main className="font-['Poppins']">
      <NavBar setPages={setPages} pages={pages} />

      <MainImages pages={pages} />
      <AboutUs pages={pages} />
    </main>
  );
}

export default App;
