# 💻 Relatório Frontend – 06/08/2025

## 🛠️ Tecnologias Utilizadas
- **React 18+**
- **Vite** – bundler moderno e rápido
- **Tailwind CSS** – estilização responsiva e utilitária
- **Firebase JS SDK (modular)** – autenticação com Google e email/senha
- **Axios** – requisições HTTP para o backend
- **React Router DOM** – navegação entre páginas
- **React Icons** – ícones SVG para botões e UI

## 📚 Bibliotecas Instaladas
```bash
npm install firebase axios react-router-dom react-icons
```

## 🔐 Funcionalidades Implementadas
- **Login com email/senha** e **login com Google**
- **Validação de senha e feedback visual**
- **Redefinição de senha com integração ao backend**
- **Armazenamento de token JWT no `localStorage`**
- **Redirecionamento automático após login**
- **Botão do Google estilizado e responsivo**
- **Integração com `.env.local` para variáveis seguras**
- **Firebase Hosting pronto para deploy (opcional)**

## 📁 Estrutura de Arquivos
```
src/
├── components/
│   ├── LoginForm.jsx
│   ├── GoogleLoginButton.jsx
├── pages/
│   └── LoginPage.jsx
├── config/
│   └── firebase-config.js
.env.local
```
