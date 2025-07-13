import { useState } from "react";
import axios from "axios";

export default function PeticaoForm({ setRespostaPeticao }) {
  const [formulario, setFormulario] = useState({
    nome_arquivo: "",
    titulo: "",
    qualificacao: "",
    fatos: "",
    fundamentos: "",
    local: "Icó/CE",
    pedidos: [],
  });

  const [pedidoAtual, setPedidoAtual] = useState("");

  const atualizarCampo = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const adicionarPedido = () => {
    if (pedidoAtual.trim()) {
      setFormulario({
        ...formulario,
        pedidos: [...formulario.pedidos, pedidoAtual.trim()]
      });
      setPedidoAtual("");
    }
  };

  const enviarPeticao = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post("http://localhost:8000/api/elabora_peca", formulario, {
        headers: { Authorization: `Bearer ${token}` }
      });

      alert(res.data.mensagem);

      // 🔁 envia os dados para o componente pai (visualização)
      if (typeof setRespostaPeticao === "function") {
        setRespostaPeticao(formulario);
      }
    } catch (err) {
      console.error("Erro ao gerar petição:", err);
    }
  };

  return (
    <form onSubmit={enviarPeticao} className="bg-white p-8 rounded-lg shadow-xl max-w-2xl mx-auto animate-fadeIn space-y-5">
      <h2 className="text-2xl font-bold text-center text-primario">📄 Gerar Petição</h2>

      <input
        type="text"
        name="nome_arquivo"
        value={formulario.nome_arquivo}
        onChange={atualizarCampo}
        placeholder="Nome do arquivo (ex: peticao_loas.docx)"
        className="w-full p-3 border rounded focus:ring-2 focus:ring-primario"
        required
      />

      <input
        type="text"
        name="titulo"
        value={formulario.titulo}
        onChange={atualizarCampo}
        placeholder="Título da petição"
        className="w-full p-3 border rounded focus:ring-2 focus:ring-primario"
        required
      />

      <textarea
        name="qualificacao"
        value={formulario.qualificacao}
        onChange={atualizarCampo}
        placeholder="Qualificação"
        rows={3}
        className="w-full p-3 border rounded focus:ring-2 focus:ring-primario"
        required
      />

      <textarea
        name="fatos"
        value={formulario.fatos}
        onChange={atualizarCampo}
        placeholder="Fatos"
        rows={4}
        className="w-full p-3 border rounded focus:ring-2 focus:ring-primario"
        required
      />

      <textarea
        name="fundamentos"
        value={formulario.fundamentos}
        onChange={atualizarCampo}
        placeholder="Fundamentos Jurídicos"
        rows={4}
        className="w-full p-3 border rounded focus:ring-2 focus:ring-primario"
        required
      />

      {/* Pedidos */}
      <div>
        <label className="block font-semibold mb-2">📌 Pedidos:</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={pedidoAtual}
            onChange={(e) => setPedidoAtual(e.target.value)}
            placeholder="Digite um pedido"
            className="flex-grow p-3 border rounded focus:ring-2 focus:ring-primario"
          />
          <button
            type="button"
            onClick={adicionarPedido}
            className="bg-secundario text-white px-4 py-2 rounded hover:bg-blue-800"
          >
            Adicionar
          </button>
        </div>
        <ul className="mt-2 list-disc list-inside text-sm text-gray-700">
          {formulario.pedidos.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
      </div>

      {/* Local */}
      <input
        type="text"
        name="local"
        value={formulario.local}
        onChange={atualizarCampo}
        placeholder="Local (ex: Icó/CE)"
        className="w-full p-3 border rounded focus:ring-2 focus:ring-primario"
      />

      {/* Botão */}
      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-800 transition duration-300"
      >
        ✍️ Gerar Petição
      </button>
    </form>
  );
}
