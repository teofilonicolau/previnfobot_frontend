export default function VisualizadorPeticao({ dados }) {
  if (!dados) return null;

  const { nome_arquivo, titulo, qualificacao, fatos, fundamentos, pedidos, local } = dados;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg animate-fadeIn space-y-4 text-gray-800">
      <h2 className="text-xl font-bold text-primario">📋 Petição Gerada</h2>

      <p><strong>🗂 Nome do arquivo:</strong> {nome_arquivo}</p>
      <p><strong>📌 Título da petição:</strong> {titulo}</p>
      <p><strong>🧾 Qualificação:</strong> {qualificacao}</p>
      <p><strong>📚 Fatos:</strong> {fatos}</p>
      <p><strong>⚖️ Fundamentos Jurídicos:</strong> {fundamentos}</p>
      <div>
        <strong>📝 Pedidos:</strong>
        <ul className="list-disc list-inside mt-1">
          {pedidos.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
      </div>
      <p><strong>📍 Local:</strong> {local}</p>
    </div>
  );
}
