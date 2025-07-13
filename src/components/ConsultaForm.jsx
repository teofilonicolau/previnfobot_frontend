import { useState } from "react"; 
import axios from "axios";

export default function ConsultaForm({ setResposta, setEmConsulta, emConsulta }) {
  const [pergunta, setPergunta] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (typeof setEmConsulta === "function") setEmConsulta(true);

    try {
      const token = localStorage.getItem("token");
      const res = await axios.post("http://localhost:8000/consultar",
        { pergunta },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (typeof setResposta === "function") {
        setResposta(res.data.resposta);
      }
    } catch (err) {
      console.error("Erro ao consultar:", err);
      if (typeof setResposta === "function") {
        setResposta("Erro ao consultar.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md animate-fadeIn space-y-4">
      <input
        type="text"
        value={pergunta}
        onChange={(e) => setPergunta(e.target.value)}
        placeholder="Digite sua dúvida jurídica"
        required
        className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className={`w-full py-3 rounded text-white font-semibold transition-all ${
          emConsulta ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-800"
        }`}
        disabled={emConsulta}
      >
        {emConsulta ? "Consultando..." : "Consultar"}
      </button>
    </form>
  );
}
