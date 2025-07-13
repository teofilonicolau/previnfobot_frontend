export default function RespostaBox({ resposta }) {
  if (!resposta || resposta === "") return null;

  return (
    <div className="bg-white border-l-4 border-blue-600 p-4 mt-6 rounded shadow-md animate-fadeIn">
      <h3 className="text-lg font-bold text-blue-700 mb-2">📄 Resposta do Previnfobot:
      </h3>
      <p className="whitespace-pre-line text-gray-800">
        {resposta.result || JSON.stringify(resposta)}
      </p>
    </div>
  );
}
