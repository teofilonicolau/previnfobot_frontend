# 🖥️ Frontend — Melhorias Implementadas (13/07/2025)

## 🧩 Novo componente `UploadLogo.jsx`

- Criado arquivo: `src/components/UploadLogo.jsx`
- Permite selecionar imagem `.png` ou `.jpg`
- Envia via `axios.post(...)` para `POST /upload_logo`
- Campos:
  - `idEscritorio` manual ou futuro automático
  - `arquivo` (imagem da logo)
- Layout estilizado com Tailwind (`rounded`, `shadow`, `hover`, `transition`)
- Comportamento responsivo e elegante

## 📁 Página `PerfilEscritorio.jsx`

- Página dedicada criada em `src/pages/PerfilEscritorio.jsx`
- Envolve `UploadLogo` com `SidebarLayout`
- Permite envio da logo vinculado ao login ou ID

## 🧾 Integração com PDF

- Atualizado `VisualizadorPeticao.jsx`:
  - `axios.post(".../gerar_peticao_final_pdf")` agora inclui `id_escritorio`
  - PDF final gerado já incorpora logo correta automaticamente
  - Link para download atualizado com `.pdf` final personalizado
