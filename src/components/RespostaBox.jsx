export default function RespostaBox({ resposta }) {
  if (!resposta || resposta === "") return null;

  return (
    <div className="bg-gray-100 border-l-4 border-blue-600 p-4 mt-4 rounded shadow">
      <h3 className="text-lg font-bold text-blue-700 mb-2">📄 Resposta do Previnfobot:</h3>
      <p className="whitespace-pre-line text-gray-800">
        {resposta.result || JSON.stringify(resposta)}
      </p>
    </div>
  );
}
