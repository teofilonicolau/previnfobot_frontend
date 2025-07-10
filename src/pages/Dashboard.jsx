import SidebarLayout from "../components/SidebarLayout";
import UploadForm from "../components/UploadForm";

export default function Dashboard() {
  return (
    <SidebarLayout>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">📤 Enviar Documento</h2>
          <UploadForm />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">🧠 Consulta Jurídica</h2>
          <p className="text-sm text-gray-600">
            Acesse a consulta jurídica completa pelo menu lateral.
          </p>
          <button
            onClick={() => window.location.href = "/consulta"}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 mt-2"
          >
            Ir para consulta
          </button>
        </div>
      </div>
    </SidebarLayout>
  );
}
