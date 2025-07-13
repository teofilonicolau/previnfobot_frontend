import { useState } from 'react';
import axios from 'axios';

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

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

  return (
    <form onSubmit={handleSubmit} className="bg-white max-w-md mx-auto p-8 rounded-lg shadow-xl animate-fadeIn">
      <h2 className="text-2xl font-bold text-center text-primario mb-6">🔐 Acesso ao PrevInfoBot</h2>
      
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-primario"
        required
      />

      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-primario"
        required
      />

      <button
        type="submit"
        className="w-full py-3 bg-secundario text-white rounded hover:bg-blue-900 transition duration-300"
      >
        Entrar
      </button>

      <div className="mt-4 text-sm text-center">
        <a href="#" className="text-blue-600 hover:underline">Esqueci minha senha</a>
      </div>
    </form>
  );
}
