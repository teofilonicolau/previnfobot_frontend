import { useState } from "react";
import axios from "axios";

export default function RespostaBox({ resposta, pergunta, area, resetForm }) {
  const [feedbackEnviado, setFeedbackEnviado] = useState(false);
  const token = localStorage.getItem("token");

  const enviarFeedback = async () => {
    const feedback = prompt("Digite seu feedback sobre a resposta:");
    if (!feedback) return;

    try {
      await axios.post(
        "http://localhost:8000/feedback",
        { pergunta, resposta, feedback },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setFeedbackEnviado(true);
      alert("Feedback enviado com sucesso!");
    } catch (err) {
      alert("Erro ao enviar feedback: " + err.response?.data?.detail || err.message);
    }
  };

  if (!resposta || resposta === "") return null;

  return (
    <div className="bg-white border-l-4 border-blue-600 p-4 mt-6 rounded shadow-md animate-fadeIn">
      <h3 className="text-lg font-bold text-blue-700 mb-2">📄 Resposta do Previnfobot:</h3>
      <p className="whitespace-pre-line text-gray-800">{resposta}</p>
      <div className="mt-4 space-x-4">
        <button
          onClick={enviarFeedback}
          disabled={feedbackEnviado}
          className={`px-4 py-2 rounded text-white font-semibold transition-all ${
            feedbackEnviado ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-800"
          }`}
        >
          {feedbackEnviado ? "Feedback Enviado" : "Enviar Feedback"}
        </button>
        <button
          onClick={resetForm}
          className="px-4 py-2 rounded text-white font-semibold bg-green-600 hover:bg-green-800 transition-all"
        >
          Nova Pesquisa
        </button>
      </div>
    </div>
  );
}