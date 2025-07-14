import { useState } from "react";
import axios from "axios";

export default function UploadLogo() {
  const [arquivo, setArquivo] = useState(null);
  const [idEscritorio, setIdEscritorio] = useState("");

  const enviarLogo = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("arquivo", arquivo);
    formData.append("id_escritorio", idEscritorio);

    try {
      await axios.post("http://localhost:8000/upload_logo", formData);
      alert("✅ Logo enviada com sucesso!");
    } catch (err) {
      console.error(err);
      alert("❌ Erro ao enviar logo");
    }
  };

  return (
    <form onSubmit={enviarLogo} className="bg-white p-6 rounded shadow space-y-4 max-w-md mx-auto animate-fadeIn">
      <h2 className="text-xl font-bold text-primario">📤 Enviar Logotipo do Escritório</h2>

      <input
        type="text"
        value={idEscritorio}
        onChange={(e) => setIdEscritorio(e.target.value)}
        placeholder="ID do escritório"
        required
        className="w-full p-2 border rounded"
      />

      <input
        type="file"
        accept=".png,.jpg"
        onChange={(e) => setArquivo(e.target.files[0])}
        required
        className="w-full"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800 transition"
      >
        🧾 Salvar Logo
      </button>
    </form>
  );
}
