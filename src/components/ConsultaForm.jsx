import { useState, useEffect } from "react";
import axios from "axios";

export default function ConsultaForm({ setResposta, setEmConsulta, emConsulta, setPergunta, setArea, resetForm }) {
  const [perguntaLocal, setPerguntaLocal] = useState("");
  const [areaLocal, setAreaLocal] = useState("previdenciario");
  const token = localStorage.getItem("token");

  // Sincroniza estado local com resetForm
  useEffect(() => {
    setPerguntaLocal("");
    setAreaLocal("previdenciario");
  }, [resetForm]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!perguntaLocal.trim()) {
      alert("Por favor, digite uma pergunta válida.");
      return;
    }
    if (typeof setEmConsulta === "function") setEmConsulta(true);

    try {
      const res = await axios.post(
        "http://localhost:8000/consultar",
        { pergunta: perguntaLocal, area: areaLocal },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (typeof setResposta === "function") setResposta(res.data.resposta);
      if (typeof setPergunta === "function") setPergunta(perguntaLocal);
      if (typeof setArea === "function") setArea(areaLocal);
    } catch (err) {
      console.error("Erro ao consultar:", err);
      alert(`Erro ao consultar: ${err.response?.data?.detail || err.message}`);
    } finally {
      if (typeof setEmConsulta === "function") setEmConsulta(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md animate-fadeIn space-y-4">
      <select
        value={areaLocal}
        onChange={(e) => setAreaLocal(e.target.value)}
        className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="previdenciario">Previdenciário</option>
        <option value="consumidor">Consumidor</option>
        <option value="processual_civil">Processual Civil</option>
      </select>
      <input
        type="text"
        value={perguntaLocal}
        onChange={(e) => setPerguntaLocal(e.target.value)}
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