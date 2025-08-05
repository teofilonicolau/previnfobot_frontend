import { useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import Layout from "../components/Layout";

export default function ResetPassword() {
  const [novaSenha, setNovaSenha] = useState("");
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/auth/reset-password", {
        token,
        nova_senha: novaSenha,
      });
      alert(res.data.mensagem);
      navigate("/login");
    } catch (err) {
      alert("Erro: " + (err.response?.data?.detail || err.message));
    }
  };

  return (
    <Layout hideLogout>
      <div className="max-w-md mx-auto mt-24 animate-fadeIn">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold text-center text-primario mb-6">🔄 Nova Senha</h2>
          <input
            type="password"
            placeholder="Digite a nova senha"
            value={novaSenha}
            onChange={(e) => setNovaSenha(e.target.value)}
            className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-primario"
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-secundario text-white rounded hover:bg-blue-900 transition duration-300"
          >
            Redefinir Senha
          </button>
        </form>
      </div>
    </Layout>
  );
}