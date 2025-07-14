import { useState } from "react";
import axios from "axios";

export default function VisualizadorPeticao({ dados }) {
  const [pdfLink, setPdfLink] = useState("");
  const [nomeEscritorio, setNomeEscritorio] = useState("ADVOCACIA ADVOGPT");
  const [enderecoEscritorio, setEnderecoEscritorio] = useState("Rua X, nº 123 – Icó/CE");
  const [telefoneEscritorio, setTelefoneEscritorio] = useState("(88) 99999-0000");

  if (!dados) return null;

  const { nome_arquivo, titulo, qualificacao, fatos, fundamentos, pedidos, local } = dados;

  const gerarPdf = async () => {
    try {
      const token = localStorage.getItem("token");

      const params = {
        nome_arquivo,
        id_escritorio: "123", // 🟡 pode vir fixo, de contexto global ou do perfil
        nome_escritorio: nomeEscritorio,
        endereco_escritorio: enderecoEscritorio,
        telefone_escritorio: telefoneEscritorio,
      };

      await axios.post("http://localhost:8000/api/gerar_peticao_final_pdf", null, {
        params,
        headers: { Authorization: `Bearer ${token}` },
      });

      const nomePdf = nome_arquivo.replace(".docx", "_final.pdf");
      setPdfLink(`http://localhost:8000/api/download_peticao?arquivo=${nomePdf}`);
      alert("✅ PDF personalizado gerado!");
    } catch (err) {
      console.error("Erro ao gerar PDF:", err);
      alert("❌ Falha ao gerar PDF");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg animate-fadeIn space-y-6 text-gray-800">
      <h2 className="text-xl font-bold text-primario">📋 Petição Gerada</h2>

      <p><strong>🗂 Arquivo:</strong> {nome_arquivo}</p>
      <p><strong>📌 Título:</strong> {titulo}</p>
      <p><strong>🧾 Qualificação:</strong> {qualificacao}</p>
      <p><strong>📚 Fatos:</strong> {fatos}</p>
      <p><strong>⚖️ Fundamentos:</strong> {fundamentos}</p>
      <div>
        <strong>📝 Pedidos:</strong>
        <ul className="list-disc list-inside mt-1">
          {pedidos.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
      </div>
      <p><strong>📍 Local:</strong> {local}</p>

      <hr />

      <h3 className="text-lg font-semibold text-primario">🎨 Personalizar PDF Final</h3>

      <input
        type="text"
        value={nomeEscritorio}
        onChange={(e) => setNomeEscritorio(e.target.value)}
        placeholder="Nome do Escritório"
        className="w-full p-2 border rounded"
      />

      <input
        type="text"
        value={enderecoEscritorio}
        onChange={(e) => setEnderecoEscritorio(e.target.value)}
        placeholder="Endereço"
        className="w-full p-2 border rounded"
      />

      <input
        type="text"
        value={telefoneEscritorio}
        onChange={(e) => setTelefoneEscritorio(e.target.value)}
        placeholder="Telefone"
        className="w-full p-2 border rounded"
      />

      <button
        onClick={gerarPdf}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800 transition w-full mt-2"
      >
        🧾 Gerar PDF Final com Cabeçalho
      </button>

      <a
        href={`http://localhost:8000/api/download_peticao?arquivo=${nome_arquivo}`}
        className="inline-block mt-2 py-2 px-4 bg-green-600 text-white rounded hover:bg-green-800"
        download
      >
        ⬇️ Baixar .DOCX
      </a>

      {pdfLink && (
        <a
          href={pdfLink}
          className="inline-block mt-2 py-2 px-4 bg-purple-600 text-white rounded hover:bg-purple-800"
          download
        >
          📥 Baixar PDF Personalizado
        </a>
      )}
    </div>
  );
}
