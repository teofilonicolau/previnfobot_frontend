// src/components/ResetPasswordForm.jsx
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../config/firebase-config";

export default function ResetPasswordForm() {
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);
      setEnviado(true);
    } catch (error) {
      alert("Erro: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  if (enviado) {
    return (
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-xl text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          ✅ Email Enviado!
        </h2>
        <p className="text-gray-600 mb-6">
          Verifique sua caixa de entrada e siga as instruções para redefinir sua senha.
        </p>
        <button
          onClick={() => window.location.href = "/login"}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Voltar ao Login
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleReset} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">
        🔄 Recuperar Senha
      </h2>
      
      <input
        type="email"
        placeholder="Digite seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 mb-6"
        required
      />
      
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
      >
        {loading ? "Enviando..." : "Enviar Link de Recuperação"}
      </button>
    </form>
  );
}