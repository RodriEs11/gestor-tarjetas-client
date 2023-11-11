import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Inicio from "./pages/Inicio";
import IndexConsumo from "./pages/Consumos/LEGACYIndexConsumo";

import AgregarConsumo from "./pages/Consumos/AgregarConsumo";
import EditarConsumos from "./pages/Consumos/EditarConsumos";
import VerConsumos from "./pages/Consumos/VerConsumos";

import AgregarAutor from "./pages/Autores/AgregarAutor";
import EditarAutor from "./pages/Autores/EditarAutor";


import AgregarTarjeta from "./pages/Tarjetas/AgregarTarjeta";
import EditarTarjeta from "./pages/Tarjetas/EditarTarjeta";



//import IndexTarjeta from "./pages/Tarjetas/IndexTarjeta";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/consumos/agregar" element={<AgregarConsumo />} />
        <Route path="/consumos/editar" element={<EditarConsumos />} />
        <Route path="/consumos" element={<VerConsumos />} />

        <Route path="/autores/agregar" element={<AgregarAutor />} />
        <Route path="/autores/editar" element={<EditarAutor />} />


        <Route path="/tarjetas/agregar" element={<AgregarTarjeta />} />
        <Route path="/tarjetas/editar" element={<EditarTarjeta />} />

      </Routes>
    </Router>
  );
}

export default App;
