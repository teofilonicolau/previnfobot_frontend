import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import Historico from "./pages/Historico";
import Register from "./pages/Register";
import ConsultaApp from "./pages/ConsultaApp";
import Peticao from "./pages/Peticao";
import PerfilEscritorio from "./pages/PerfilEscritorio"; // ⬅️ novo import

export default function App() {
  const isAutenticado = !!localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={isAutenticado ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/historico"
          element={isAutenticado ? <Historico /> : <Navigate to="/login" />}
        />
        <Route
          path="/consulta"
          element={isAutenticado ? <ConsultaApp /> : <Navigate to="/login" />}
        />
        <Route
          path="/peticao"
          element={isAutenticado ? <Peticao /> : <Navigate to="/login" />}
        />
        <Route
          path="/perfil"
          element={isAutenticado ? <PerfilEscritorio /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}
