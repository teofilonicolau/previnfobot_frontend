import { useState } from 'react';
import axios from 'axios';

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/auth/login', {
        email,
        senha
      });
      const token = res.data.access_token;
      localStorage.setItem('token', token);
      onLogin(token);
    } catch (err) {
      console.error("Erro de login:", err);
      alert("Erro ao autenticar");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
      <button type="submit">Entrar</button>
    </form>
  );
}
