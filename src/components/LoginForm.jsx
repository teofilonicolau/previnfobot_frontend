import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../config/firebase-config";
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(auth, email, senha);
      const token = await result.user.getIdToken();
      localStorage.setItem("token", token);
      if (onLogin) onLogin(token);
    } catch (error) {
      console.error("Erro no login com e-mail:", error);
      alert("Verifique seu e-mail e senha.");
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const token = await result.user.getIdToken();
      localStorage.setItem("token", token);
      if (onLogin) onLogin(token);
    } catch (error) {
      console.error("Erro ao autenticar com Google:", error);
      alert("Erro na autenticação com Google.");
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm mx-auto">
      {/* Formulário tradicional */}
      <form onSubmit={handleEmailLogin} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="px-4 py-2 border rounded"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Entrar com e-mail
        </button>
      </form>

      {/* Botão Google estilizado */}
      <button
        onClick={handleGoogleLogin}
        className="flex items-center justify-center gap-2 px-4 py-3 w-full bg-blue-600 text-white rounded shadow hover:bg-blue-700 transitionduration-300 text-sm sm:text-base"
      >
        <FcGoogle size={20} className="sm:size-6" />
        <span className="hidden sm:inline">Entrar com Google</span>
        <span className="sm:hidden">Google</span>
      </button>
    </div>
  );
}
