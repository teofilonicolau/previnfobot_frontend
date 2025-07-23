# Relatório Técnico - 18/07/2025

## 📌 Descrição
Este relatório documenta o ajuste de caminhos de arquivos utilizados na aplicação **AdvogPT** para o carregamento do índice vetorial FAISS, utilizado no fluxo de recuperação de contexto com LangChain.

## 🔍 Problema Identificado
Durante a tentativa de carregar o índice FAISS utilizando `FAISS.load_local()`, foi identificado um erro de caminho incorreto. O caminho estava incorretamente concatenado como:

```
C:\Users\Samsung\Desktop\AdvogPT\dados\vetores\faiss_index\index.faiss/C:\Users\Samsung\Desktop\AdvogPT\dados\vetores\faiss_index\index.pkl
```

Esse formato inválido misturava dois caminhos de arquivos diferentes, gerando falha de leitura.

## ✅ Solução Aplicada

Foi realizada a correção, separando corretamente os caminhos esperados para os arquivos:

- `index.faiss`
- `index.pkl`

Ambos localizados em:

```
C:\Users\Samsung\Desktop\AdvogPT\dados\vetores\faiss_index\
```

Com isso, o código foi ajustado da seguinte forma:

```python
from langchain_community.vectorstores import FAISS

vectorstore = FAISS.load_local(
    folder_path="C:/Users/Samsung/Desktop/AdvogPT/dados/vetores/faiss_index",
    embeddings=embeddings,
    index_name="index"  # Vai buscar "index.faiss" e "index.pkl"
)
```

## 🧪 Resultado
Após a correção, o carregamento do índice foi realizado com sucesso, permitindo a utilização da base vetorial para consultas com RAG (Retrieval-Augmented Generation).

## 👨‍💻 Autor
Teófilo Nicolau  
Projeto: AdvogPT  
Data: 18/07/2025
