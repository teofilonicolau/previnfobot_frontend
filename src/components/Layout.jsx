import { useNavigate } from "react-router-dom";

export default function Layout({ children, hideLogout = false }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col bg-fundo text-gray-800">
      {/* Topbar */}
      <header className="bg-primario text-white px-6 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-semibold">PrevInfoBot 👨‍⚖️</h1>
        {!hideLogout && (
          <button
            onClick={handleLogout}
            className="bg-secundario px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Sair
          </button>
        )}
      </header>

      {/* Conteúdo principal */}
      <main className="flex-grow px-6 py-8 animate-fadeIn">{children}</main>

      {/* Rodapé */}
      <footer className="text-center py-4 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Previnfobot - todos os direitos reservados.
      </footer>
    </div>
  );
}
