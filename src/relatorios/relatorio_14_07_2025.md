# 📄 Atualização no Componente `UploadLogo.jsx`

## 🎯 Objetivo  
Melhorar a usabilidade e aparência do botão de upload de arquivo (`<input type="file" />`), tornando-o visualmente mais agradável e padronizado com o estilo do botão presente no `UploadForm.jsx`.

---

## ✅ O que foi feito:

### Estilização do botão de upload de arquivo:
- O botão padrão do input (`<input type="file" />`) foi ocultado usando a classe `hidden`.
- Criado um botão estilizado com `label` que simula o clique no input escondido, com o texto **"📁 Escolher Arquivo"**.

### Melhoria na experiência do usuário:
- Exibição dinâmica do nome do arquivo selecionado.
- Adicionada uma variável de estado `nomeArquivo` para armazenar e mostrar o nome do arquivo após a seleção.

---

## ✨ Benefícios:
- Interface mais amigável e coerente com o restante da aplicação.
- Melhor feedback visual ao usuário.
- Código modular e reutilizável.

---

## 🧪 Como testar:
1. Execute a aplicação.
2. Acesse o componente `UploadLogo`.
3. Clique em **📁 Escolher Arquivo**.
4. Selecione um arquivo `.png` ou `.jpg`.
5. Verifique se o nome do arquivo aparece logo abaixo do botão.
6. Clique em **🧾 Salvar Logo** e verifique o envio correto.

---
