export default function UploadForm() {
  const token = localStorage.getItem('token');

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const res = await fetch("http://localhost:8000/upload_documento", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formData,
    });

    const result = await res.json();
    alert(result.mensagem || 'Enviado!');
  };

  return (
    <form onSubmit={handleUpload} className="space-y-4">
      <input
        name="id_escritorio"
        placeholder="ID do escritório"
        required
        className="w-full p-2 border rounded"
      />

      {/* Estilização do botão Choose File */}
      <div>
        <label className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-800 inline-block">
          Escolher Arquivo
          <input
            type="file"
            name="arquivo"
            required
            className="hidden" // oculta o input original
          />
        </label>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
      >
        Enviar Documento
      </button>
    </form>
  );
}
