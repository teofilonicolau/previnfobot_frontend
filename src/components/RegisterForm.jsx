import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [plano, setPlano] = useState("gratuito");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/auth/register", {
        nome,
        email,
        senha,
        plano,
      });
      const res = await axios.post("http://localhost:8000/auth/login", {
        email,
        senha,
      });
      localStorage.setItem("token", res.data.access_token);
      navigate("/dashboard");
    } catch (error) {
      console.error("Erro no cadastro:", error);
      alert("Erro ao criar conta. Verifique os dados.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white max-w-md mx-auto p-8 rounded-lg shadow-xl animate-fadeIn"
    >
      <h2 className="text-2xl font-bold text-center text-primario mb-6">
        📥 Criar Conta
      </h2>

      <input
        type="text"
        placeholder="👤 Nome completo"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        required
      />
      <input
        type="email"
        placeholder="✉️ Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        required
      />
      <input
        type="password"
        placeholder="🔒 Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        required
      />

      <select
        value={plano}
        onChange={(e) => setPlano(e.target.value)}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
      >
        <option value="gratuito">🔓 Gratuito</option>
        <option value="premium">💎 Premium</option>
      </select>

      <button
        type="submit"
        className="bg-blue-700 text-white w-full py-3 rounded-lg hover:bg-blue-900 transition-all font-semibold"
      >
        Criar Conta
      </button>
    </form>
  );
}
