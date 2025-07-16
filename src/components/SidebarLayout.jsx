import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa"; // Ícone do menu hambúrguer

export default function SidebarLayout({ children }) {
  const [expandido, setExpandido] = useState(true);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-fundo text-gray-800">
      {/* Sidebar */}
      <aside
        className={`${
          expandido ? "w-64" : "w-20"
        } bg-primario text-white flex flex-col justify-between shadow-lg transition-all duration-500 ease-in-out`}
      >
        {/* Cabeçalho do menu */}
        <div className="p-4 flex items-center justify-between">
          <div className="text-lg font-bold">{expandido && "PrevInfoBot"}</div>
          <button onClick={() => setExpandido(!expandido)}>
            <FaBars className="text-white" />
          </button>
        </div>

        {/* Navegação */}
        <nav className="px-4 flex flex-col gap-2">
          <button
            onClick={() => navigate("/dashboard")}
            className="text-left px-3 py-2 rounded hover:bg-blue-800 transition-all"
          >
            📤 {expandido && "Dashboard"}
          </button>
          <button
            onClick={() => navigate("/historico")}
            className="text-left px-3 py-2 rounded hover:bg-blue-800 transition-all"
          >
            📚 {expandido && "Histórico"}
          </button>
          <button
            onClick={() => navigate("/peticao")}
            className="text-left px-3 py-2 rounded hover:bg-blue-800 transition-all"
          >
            📄 {expandido && "Petição"}
          </button>
          <button
            onClick={() => navigate("/perfil")}
            className="text-left px-3 py-2 rounded hover:bg-blue-800 transition-all"
          >
            🏢 {expandido && "Perfil"}
          </button>
        </nav>

        {/* Logout */}
        <div className="p-4">
          <button
            onClick={logout}
            className="bg-secundario w-full py-2 rounded hover:bg-blue-700 transition"
          >
            {expandido ? "Sair" : "🚪"}
          </button>
        </div>
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 overflow-auto p-6">{children}</main>
    </div>
  );
}
