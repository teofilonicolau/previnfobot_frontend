import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [plano, setPlano] = useState("gratuito");
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [erroMsg, setErroMsg] = useState("");

  const [senhaCheck, setSenhaCheck] = useState({
    comprimento: false,
    maiuscula: false,
    numero: false,
    especial: false,
  });

  const navigate = useNavigate();

  const handleSenhaChange = (e) => {
    const valor = e.target.value;
    setSenha(valor);

    setSenhaCheck({
      comprimento: valor.length >= 8,
      maiuscula: /[A-Z]/.test(valor),
      numero: /\d/.test(valor),
      especial: /[@$!%*?&#]/.test(valor), // ✅ Incluído o "#"
    });

    setErroMsg("");
  };

  const senhaValida = Object.values(senhaCheck).every(Boolean);

  const calcularForca = () => {
    const pontos = Object.values(senhaCheck).filter(Boolean).length;
    return (pontos / 4) * 100;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!senhaValida) {
      setErroMsg("🛑 A senha não atende aos requisitos mínimos.");
      return;
    }

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
    } catch (err) {
      setErroMsg(
        err.response?.data?.detail ||
        "Erro inesperado ao criar conta."
      );
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
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 mb-4"
        required
      />

      <input
        type="email"
        placeholder="✉️ Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 mb-4"
        required
      />

      {/* 🔒 Campo de senha com botão de visibilidade */}
      <div className="relative mb-2">
        <input
          type={senhaVisivel ? "text" : "password"}
          placeholder="🔒 Senha"
          value={senha}
          onChange={handleSenhaChange}
          className={`w-full p-3 border rounded-lg pr-10 focus:ring-2 ${
            senhaValida ? "focus:ring-blue-500" : "border-red-500 focus:ring-red-500"
          }`}
          required
        />
        <button
          type="button"
          onClick={() => setSenhaVisivel((prev) => !prev)}
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-sm"
        >
          {senhaVisivel ? "🙈 Ocultar" : "👁️ Mostrar"}
        </button>
      </div>

      {/* ✔️ Checklist de requisitos */}
      <ul className="text-sm mb-3 pl-4 list-disc text-gray-600">
        <li className={senhaCheck.comprimento ? "text-green-600" : "text-red-500"}>
          {senhaCheck.comprimento ? "✔" : "❌"} Mínimo de 8 caracteres
        </li>
        <li className={senhaCheck.maiuscula ? "text-green-600" : "text-red-500"}>
          {senhaCheck.maiuscula ? "✔" : "❌"} Uma letra maiúscula
        </li>
        <li className={senhaCheck.numero ? "text-green-600" : "text-red-500"}>
          {senhaCheck.numero ? "✔" : "❌"} Um número
        </li>
        <li className={senhaCheck.especial ? "text-green-600" : "text-red-500"}>
          {senhaCheck.especial ? "✔" : "❌"} Um caractere especial (@$!%*?&#)
        </li>
      </ul>

      {/* 📊 Barra de progresso */}
      <div className="w-full h-2 bg-gray-200 rounded mb-6">
        <div
          className={`h-full rounded transition-all ${
            calcularForca() < 40
              ? "bg-red-500"
              : calcularForca() < 80
              ? "bg-yellow-500"
              : "bg-green-500"
          }`}
          style={{ width: `${calcularForca()}%` }}
        ></div>
      </div>

      {/* 🧠 Popover de erro personalizado */}
      {erroMsg && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 text-sm">
          {erroMsg}
        </div>
      )}

      <select
        value={plano}
        onChange={(e) => setPlano(e.target.value)}
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 mb-6"
      >
        <option value="gratuito">🔓 Gratuito</option>
        <option value="premium">💎 Premium</option>
      </select>

      <button
        type="submit"
        disabled={!senhaValida}
        className={`w-full py-3 rounded-lg font-semibold transition-all ${
          senhaValida ? "bg-blue-700 text-white hover:bg-blue-900" : "bg-gray-400 text-gray-700 cursor-not-allowed"
        }`}
      >
        Criar Conta
      </button>
    </form>
  );
}
