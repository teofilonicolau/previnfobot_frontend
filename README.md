# ⚖️ AdvogPT — Assistente Jurídico com IA

[![React](https://img.shields.io/badge/React-18+-blue?logo=react)](https://react.dev/)  
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)  
[![FastAPI](https://img.shields.io/badge/FastAPI-009688?logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)  
[![Redis](https://img.shields.io/badge/Redis-DD0031?logo=redis&logoColor=white)](https://redis.io/)  
[![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)](https://python.org/)  
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)  
[![MIT License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

---

## 📖 Sobre o projeto

AdvogPT é um assistente jurídico pessoal desenvolvido para responder perguntas nas áreas de Previdenciário, Direito do Consumidor e Processo Civil usando IA generativa com base em uma base documental indexada via FAISS.

O projeto integra um backend em FastAPI que usa Redis para cache e rate limiting, e um frontend moderno em React + Tailwind para consulta e feedback.

---

## 🚀 Funcionalidades principais

- Consulta jurídica com suporte multi-área (Previdenciário, Consumidor, Processo Civil)  
- Respostas com tecnologia RAG (Retrieval-Augmented Generation) usando OpenAI GPT-4  
- Cache de respostas e limitação de requisições via Redis  
- Registro de consultas e feedbacks em logs CSV  
- Interface web responsiva e intuitiva com React e Tailwind  
- Botão "Nova Pesquisa" para resetar a consulta facilmente

---

## 📁 Estrutura do projeto

```
advogpt-frontend/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ConsultaForm.jsx
│   │   ├── DocumentosList.jsx
│   │   ├── Layout.jsx
│   │   ├── LoginForm.jsx
|   |   ├── PeticaoForm.jsx
│   │   ├── RegisterForm.jsx
│   │   ├── RespostaBox.jsx
│   │   ├── SidebarLayout.jsx
│   │   ├── UploadForm.jsx
|   |   ├── UploadLogo.jsx
|   |   ├── VizualizadorPeticao.jsx
│   ├── pages/
│   │   ├── ConsultaApp.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Historico.jsx
│   │   ├── LoginPage.jsx
|   |   ├── PerfilEscritorio.jsx
|   |   ├── Peticao.jsx
│   │   ├── Register.jsx
|   ├── relatorios/
|   |   ├── relatorio_13_07_2025
|   |   ├── relatorio_14_07_2025
|   |   ├── relatorio_18_07_2025
|   |   ├── relatorio_22_07_2025
│   ├── services/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── vite.config.js

```

---

## 🛠️ Tecnologias utilizadas

- **Backend:** Python, FastAPI, Redis, FAISS, OpenAI API  
- **Frontend:** React 18, Tailwind CSS, Vite, Axios  
- **Controle de versão:** Git e GitHub  
- **Gerenciamento de ambiente:** venv (Python) e npm (Node.js)

---

## 📦 Como rodar localmente

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate      # Linux/macOS
venv\Scripts\activate         # Windows
pip install -r requirements.txt
uvicorn app.api.router:app --reload
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Acesse o frontend em `http://localhost:5173` e certifique-se de que o backend está rodando em `http://localhost:8000`.

---

## 📝 Atualizações recentes

- Implementação do suporte multi-área para consultas jurídicas  
- Correção de paths para carregamento do índice FAISS  
- Adição do botão "Nova Pesquisa" para resetar consultas  
- Integração completa entre frontend e backend com cache e rate limiting via Redis  
- Logs detalhados para consultas e feedback em CSV

---

## 👤 Autor

**Teófilo Nicolau**  
- [LinkedIn](https://www.linkedin.com/in/teofilonicolau/)  
- [GitHub](https://github.com/teofilonicolau)  

---

> Pequenos começos, grandes conquistas.

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.
