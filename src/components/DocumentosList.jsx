import { useEffect, useState } from "react";
import axios from "axios";

export default function DocumentosList() {
  const [documentos, setDocumentos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Usuário não autenticado. Faça login novamente.");
      setLoading(false);
      return;
    }

    axios
      .get("http://localhost:8000/documentos/historico", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setDocumentos(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar documentos:", err);
        setError("Falha ao carregar documentos: " + (err.response?.data?.detail || err.message));
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md animate-fadeIn">
        <h2 className="text-xl font-bold mb-4 text-primario">📚 Seus Documentos Enviados</h2>
        <p>Carregando...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md animate-fadeIn">
        <h2 className="text-xl font-bold mb-4 text-primario">📚 Seus Documentos Enviados</h2>
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md animate-fadeIn">
      <h2 className="text-xl font-bold mb-4 text-primario">📚 Seus Documentos Enviados</h2>
      {documentos.length === 0 ? (
        <p className="text-gray-600">Nenhum documento encontrado.</p>
      ) : (
        <ul className="divide-y">
          {documentos.map((doc) => (
            <li key={doc.id} className="py-2 flex justify-between">
              <span>{doc.nome}</span>
              <span className="text-gray-500 text-sm">
                {new Date(doc.data_envio).toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}