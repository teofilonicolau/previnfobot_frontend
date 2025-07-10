# ⚖️ PrevInfoBot — Consulta Jurídica Digital

![Print da aplicação](./src/assets/previnfobot-preview.png)

[![React](https://img.shields.io/badge/React-18+-blue?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwindcss)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-React%20Project-646CFF?logo=vite)](https://vitejs.dev/)
[![MIT License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

O **PrevInfoBot** é uma interface web moderna desenvolvida para realizar **consultas jurídicas automatizadas** com resposta direta do back-end. Ideal para escritórios, advogados ou usuários que desejam tirar dúvidas rápidas sobre previdência social e direitos trabalhistas.

---

## 🚀 Funcionalidades principais

- 🧠 Formulário de consulta com validação  
- ⚙️ Integração com API via JWT (token)  
- 📤 Upload de documentos com autenticação  
- 📚 Histórico pessoal de consultas/documentos  
- 📦 Interface reativa e responsiva  

---

## 🛠️ Tecnologias utilizadas

- **React 18+** — com React Router DOM  
- **Tailwind CSS** — estilização ágil e moderna  
- **Axios** — requisições HTTP seguras  
- **FastAPI (no backend)** — não incluso nesse repositório  
- **JWT Token** — controle de autenticação  

---

## 📁 Estrutura do projeto

```
src/
├── components/ # componentes reutilizáveis
├── pages/ # páginas da aplicação
├── App.jsx # rotas e controle principal
├── index.css # Tailwind e global styles
└── main.jsx # ponto de entrada do React
```

---


---

## 🔐 Autenticação

- Ao fazer login, o token JWT é salvo em `localStorage`  
- Algumas rotas (como `/consulta` e `/dashboard`) exigem autenticação  

---
---
![image](https://github.com/user-attachments/assets/9f9fd84c-6a9c-4efe-a08d-ce3a54308355)

---

---
![image](https://github.com/user-attachments/assets/c4d138e7-2090-482a-bb5c-fce6a6409612)

---
---
![image](https://github.com/user-attachments/assets/0da6e132-67da-4f7b-b2de-1af0619d7414)

---

## 📦 Como rodar o projeto localmente

```bash
npm install
npm run dev
```
---

## Certifique-se de que o back-end esteja rodando em http://localhost:8000

---

## 📮 Contato
### Projeto mantido por @teofilonicolau.
### Contribuições e feedbacks são sempre bem-vindos!



##


