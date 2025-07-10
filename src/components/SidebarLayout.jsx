import { useNavigate } from "react-router-dom";

export default function SidebarLayout({ children }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-fundo text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-primario text-white flex flex-col justify-between shadow-lg">
        <div>
          <div className="p-6 text-2xl font-bold">PrevInfoBot</div>
          <nav className="px-4 flex flex-col gap-2">
            <button
              onClick={() => navigate("/dashboard")}
              className="text-left px-3 py-2 rounded hover:bg-blue-800"
            >
              📤 Dashboard
            </button>
            <button
              onClick={() => navigate("/historico")}
              className="text-left px-3 py-2 rounded hover:bg-blue-800"
            >
              📚 Histórico
            </button>
          </nav>
        </div>
        <div className="p-4">
          <button
            onClick={logout}
            className="bg-secundario w-full py-2 rounded hover:bg-blue-700 transition"
          >
            Sair
          </button>
        </div>
      </aside>

      {/* Conteúdo */}
      <main className="flex-1 overflow-auto p-6">{children}</main>
    </div>
  );
}
