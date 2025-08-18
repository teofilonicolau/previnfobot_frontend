// src/components/RegisterForm.jsx
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase-config";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    nomeEscritorio: "",
    adminNome: "",
    adminEmail: "",
    senha: "",
    confirmarSenha: "",
    plano: "gratuito"
  });
  
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [confirmarSenhaVisivel, setConfirmarSenhaVisivel] = useState(false);
  const [loading, setLoading] = useState(false);

  const [senhaValidacao, setSenhaValidacao] = useState({
    comprimento: false,
    maiuscula: false,
    minuscula: false,
    numero: false,
    especial: false
  });

  const validarSenha = (senha) => {
    setSenhaValidacao({
      comprimento: senha.length >= 8,
      maiuscula: /[A-Z]/.test(senha),
      minuscula: /[a-z]/.test(senha),
      numero: /\d/.test(senha),
      especial: /[@$!%*?&]/.test(senha)
    });
  };

  const handleSenhaChange = (e) => {
    const novaSenha = e.target.value;
    setFormData(prev => ({ ...prev, senha: novaSenha }));
    validarSenha(novaSenha);
  };

  const senhaValida = Object.values(senhaValidacao).every(Boolean);
  const senhasIguais = formData.senha === formData.confirmarSenha;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!senhaValida) {
      alert("A senha não atende aos requisitos mínimos");
      return;
    }
    
    if (!senhasIguais) {
      alert("As senhas não coincidem");
      return;
    }

    setLoading(true);

    try {
      // 1. Criar usuário no Firebase Auth
      await createUserWithEmailAndPassword(
        auth, 
        formData.adminEmail, 
        formData.senha
      );

      // 2. Criar escritório no backend
      const response = await fetch("http://localhost:8000/auth/register-escritorio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome_escritorio: formData.nomeEscritorio,
          admin_email: formData.adminEmail,
          admin_nome: formData.adminNome,
          plano: formData.plano
        })
      });

      if (response.ok) {
        alert("Conta criada! Verifique seu email para ativar.");
        window.location.href = "/login";
      } else {
        const errorData = await response.json();
        alert("Erro: " + errorData.detail);
      }

    } catch (error) {
      console.error("Erro ao criar conta:", error);
      alert("Erro ao criar conta: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-xl space-y-6">
      <h2 className="text-2xl font-bold text-center text-blue-800">
        🏢 Criar Escritório
      </h2>

      {/* Nome do Escritório */}
      <input
        type="text"
        placeholder="Nome do Escritório"
        value={formData.nomeEscritorio}
        onChange={(e) => setFormData(prev => ({ ...prev, nomeEscritorio: e.target.value }))}
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
        required
      />

      {/* Nome do Admin */}
      <input
        type="text"
        placeholder="Nome do Administrador"
        value={formData.adminNome}
        onChange={(e) => setFormData(prev => ({ ...prev, adminNome: e.target.value }))}
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
        required
      />

      {/* Email */}
      <input
        type="email"
        placeholder="Email do Administrador"
        value={formData.adminEmail}
        onChange={(e) => setFormData(prev => ({ ...prev, adminEmail: e.target.value }))}
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
        required
      />

      {/* Senha com visualização */}
      <div className="relative">
        <input
          type={senhaVisivel ? "text" : "password"}
          placeholder="Senha"
          value={formData.senha}
          onChange={handleSenhaChange}
          className={`w-full p-3 pr-12 border rounded-lg focus:ring-2 ${
            senhaValida ? 'focus:ring-blue-500 border-green-300' : 'focus:ring-red-500 border-red-300'
          }`}
          required
        />
        <button
          type="button"
          onClick={() => setSenhaVisivel(!senhaVisivel)}
          className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
        >
          {senhaVisivel ? (
            <EyeSlashIcon className="h-5 w-5" />
          ) : (
            <EyeIcon className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Validação da senha */}
      <div className="text-sm space-y-1">
        <div className={`flex items-center ${senhaValidacao.comprimento ? 'text-green-600' : 'text-red-500'}`}>
          {senhaValidacao.comprimento ? '✓' : '✗'} Mínimo 8 caracteres
        </div>
        <div className={`flex items-center ${senhaValidacao.maiuscula ? 'text-green-600' : 'text-red-500'}`}>
          {senhaValidacao.maiuscula ? '✓' : '✗'} Uma letra maiúscula
        </div>
        <div className={`flex items-center ${senhaValidacao.minuscula ? 'text-green-600' : 'text-red-500'}`}>
          {senhaValidacao.minuscula ? '✓' : '✗'} Uma letra minúscula
        </div>
        <div className={`flex items-center ${senhaValidacao.numero ? 'text-green-600' : 'text-red-500'}`}>
          {senhaValidacao.numero ? '✓' : '✗'} Um número
        </div>
        <div className={`flex items-center ${senhaValidacao.especial ? 'text-green-600' : 'text-red-500'}`}>
          {senhaValidacao.especial ? '✓' : '✗'} Um caractere especial
        </div>
      </div>

      {/* Confirmar senha */}
      <div className="relative">
        <input
          type={confirmarSenhaVisivel ? "text" : "password"}
          placeholder="Confirmar Senha"
          value={formData.confirmarSenha}
          onChange={(e) => setFormData(prev => ({ ...prev, confirmarSenha: e.target.value }))}
          className={`w-full p-3 pr-12 border rounded-lg focus:ring-2 ${
            senhasIguais && formData.confirmarSenha ? 'focus:ring-blue-500 border-green-300' : 'focus:ring-red-500 border-red-300'
          }`}
          required
        />
        <button
          type="button"
          onClick={() => setConfirmarSenhaVisivel(!confirmarSenhaVisivel)}
          className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
        >
          {confirmarSenhaVisivel ? (
            <EyeSlashIcon className="h-5 w-5" />
          ) : (
            <EyeIcon className="h-5 w-5" />
          )}
        </button>
      </div>

      {formData.confirmarSenha && (
        <div className={`text-sm ${senhasIguais ? 'text-green-600' : 'text-red-500'}`}>
          {senhasIguais ? '✓ Senhas coincidem' : '✗ Senhas não coincidem'}
        </div>
      )}

      {/* Plano */}
      <select
        value={formData.plano}
        onChange={(e) => setFormData(prev => ({ ...prev, plano: e.target.value }))}
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
      >
        <option value="gratuito">🆓 Gratuito (100 consultas/mês)</option>
        <option value="premium">💎 Premium (1000 consultas/mês)</option>
        <option value="enterprise">🏢 Enterprise (Ilimitado)</option>
      </select>

      {/* Botão de submit */}
      <button
        type="submit"
        disabled={!senhaValida || !senhasIguais || loading}
        className={`w-full py-3 rounded-lg font-semibold transition-all ${
          senhaValida && senhasIguais && !loading
            ? 'bg-blue-600 hover:bg-blue-700 text-white'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        {loading ? 'Criando...' : 'Criar Escritório'}
      </button>
    </form>
  );
}