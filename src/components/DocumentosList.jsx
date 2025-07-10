import { useEffect, useState } from "react";
import axios from "axios";

export default function DocumentosList() {
  const [documentos, setDocumentos] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8000/documentos/historico", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setDocumentos(res.data))
      .catch((err) => console.error("Erro ao buscar documentos:", err));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">📚 Seus Documentos Enviados</h2>
      <ul className="bg-white p-4 rounded shadow divide-y">
        {documentos.map((doc) => (
          <li key={doc.id} className="py-2 flex justify-between">
            <span>{doc.nome}</span>
            <span className="text-gray-500 text-sm">
              {new Date(doc.data_envio).toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
