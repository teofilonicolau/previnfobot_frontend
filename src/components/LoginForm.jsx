import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [showReset, setShowReset] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/auth/login', { email, senha });
      const token = res.data.access_token;
      localStorage.setItem('token', token);
      onLogin(token);
    } catch (err) {
      console.error("Erro de login:", err);
      alert("Erro ao autenticar. Verifique seus dados.");
    }
  };

  const handleResetRequest = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/auth/reset-password-request', { email: resetEmail });
      alert(res.data.mensagem);
      setShowReset(false);
      setResetEmail('');
    } catch (err) {
      alert("Erro: " + (err.response?.data?.detail || err.message));
    }
  };

  return (
    <div className="bg-white max-w-md mx-auto p-8 rounded-lg shadow-xl animate-fadeIn">
      {!showReset ? (
        <>
          <h2 className="text-2xl font-bold text-center text-primario mb-6">🔐 Acesso ao PrevInfoBot</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="✉️ Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-primario"
              required
            />

            {/* 🔒 Campo de senha com visualização */}
            <div className="relative mb-4">
              <input
                type={senhaVisivel ? "text" : "password"}
                placeholder="🔒 Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full p-3 border rounded pr-10 focus:outline-none focus:ring-2 focus:ring-primario"
                required
              />
              <button
                type="button"
                onClick={() => setSenhaVisivel(!senhaVisivel)}
                className="absolute right-3 top-3 text-sm text-gray-600 hover:text-gray-900"
              >
                {senhaVisivel ? "🙈 Ocultar" : "👁️ Mostrar"}
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-secundario text-white rounded hover:bg-blue-900 transition duration-300"
            >
              Entrar
            </button>
          </form>
          <div className="mt-4 text-sm text-center">
            <button
              onClick={() => setShowReset(true)}
              className="text-blue-600 hover:underline"
            >
              Esqueci minha senha
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold text-center text-primario mb-6">🔄 Redefinir Senha</h2>
          <form onSubmit={handleResetRequest}>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
              className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-primario"
              required
            />
            <button
              type="submit"
              className="w-full py-3 bg-secundario text-white rounded hover:bg-blue-900 transition duration-300"
            >
              Enviar Link de Redefinição
            </button>
          </form>
          <div className="mt-4 text-sm text-center">
            <button
              onClick={() => setShowReset(false)}
              className="text-blue-600 hover:underline"
            >
              Voltar ao login
            </button>
          </div>
        </>
      )}
      <div className="mt-4 text-sm text-center">
        Ainda não tem conta?{" "}
        <a href="/register" className="text-blue-600 hover:underline">
          Cadastre-se aqui
        </a>
      </div>
    </div>
  );
}
