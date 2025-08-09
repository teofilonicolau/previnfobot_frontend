import { useState } from "react";
import axios from "axios";

export default function UploadLogo() {
  const [arquivo, setArquivo] = useState(null);
  const [idEscritorio, setIdEscritorio] = useState("");
  const [nomeArquivo, setNomeArquivo] = useState("Nenhum arquivo selecionado");

  const enviarLogo = async (e) => {
    e.preventDefault();
    
    // ✅ PEGA O TOKEN DO LOCALSTORAGE
    const token = localStorage.getItem("token");
    if (!token) {
      alert("❌ Você precisa estar logado para enviar logo!");
      return;
    }

    const formData = new FormData();
    formData.append("arquivo", arquivo);
    formData.append("id_escritorio", idEscritorio);

    try {
      // ✅ ENVIA O TOKEN NO HEADER
      await axios.post("http://localhost:8000/upload_logo", formData, {
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      alert("✅ Logo enviada com sucesso!");
    } catch (err) {
      console.error(err);
      alert(`❌ Erro ao enviar logo: ${err.response?.data?.detail || err.message}`);
    }
  };

  const handleArquivoChange = (e) => {
    const file = e.target.files[0];
    setArquivo(file);
    setNomeArquivo(file ? file.name : "Nenhum arquivo selecionado");
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

      <div>
        <label className="block">
          <span className="sr-only">Escolher Arquivo</span>
          <input
            type="file"
            accept=".png,.jpg,.jpeg"
            onChange={handleArquivoChange}
            className="hidden"
            id="input-arquivo"
          />
          <label
            htmlFor="input-arquivo"
            className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition inline-block"
          >
            📁 Escolher Arquivo
          </label>
        </label>
        <p className="mt-2 text-sm text-gray-600">{nomeArquivo}</p>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800 transition"
        disabled={!arquivo || !idEscritorio}
      >
        🧾 Salvar Logo
      </button>
    </form>
  );
}