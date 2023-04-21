# CRUD de Tasks com Node.js

## 📖 Sobre

Este projeto consiste em uma API para realizar o CRUD de tasks (tarefas), onde é possível criar, listar, atualizar, remover e marcar como completa uma task, além da importação de tasks em massa através de um arquivo CSV.

## 🚀 Tecnologias utilizadas

- [Node.js](https://nodejs.org/en/) - É um ambiente de execução Javascript server-side.
- [CSV Parser](https://csv.js.org/parse/) - É uma biblioteca para ler e analisar arquivos CSV.

## ✨ Funcionalidades

- [x] Criação de uma task
- [x] Listagem de todas as tasks
- [x] Filtragem de tasks pelo título e descrição
- [x] Atualização de uma task pelo id
- [x] Remoção de uma task pelo id
- [x] Marcação de uma task como completa pelo id
- [x] Importação de tasks em massa através de um arquivo CSV

## 📦 Como baixar o projeto

```bash
# Clonar o repositório
$ git clone

# Entrar no diretório
$ cd ignite-node-desafio-01

# Instalar as dependências
$ pnpm install / npm install

# Iniciar o projeto
$ pnpm dev / npm run dev
```

## 🛣️ Rotas

| Método | Rota | Descrição |
|--------|-----|-----------|
| 🔒 GET | /tasks | Lista todas as tarefas salvas no banco de dados. É possível filtrar as tarefas pelo title e description adicionando os parâmetros na query string. |
| 📤 POST | /tasks | Cria uma tarefa no banco de dados, enviando os campos title e description no corpo da requisição. |
| 📥 PUT | /tasks/:id | Atualiza uma tarefa pelo id. No corpo da requisição, recebe somente o title e/ou description para serem atualizados. Se for enviado somente o title, significa que o description não pode ser atualizado e vice-versa.
| 🗑️ DELETE | /tasks/:id | Remove uma tarefa pelo id. |
| 📥 PATCH | /tasks/:id/complete | Marca a tarefa como concluída ou não. |
| 📤 POST | /tasks/import | Importa tarefas em massa por meio de um arquivo CSV. O arquivo deve ser enviado pelo campo file do corpo da requisição. |

#### 🖊️ Autor - [@raniellimontagna](https://www.github.com/raniellimontagna)
