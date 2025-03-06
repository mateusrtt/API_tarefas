# API de Tarefas

Este projeto implementa uma API RESTful para gerenciar tarefas, utilizando **Node.js**, **Express** e **SQLite** como banco de dados. A API oferece operações básicas de CRUD (Criar, Ler, Atualizar e Deletar) para tarefas, permitindo que um usuário gerencie suas tarefas de forma simples.

## Tecnologias utilizadas

- **Node.js**: Ambiente de execução JavaScript para servidor.
- **Express**: Framework para construir a API de forma simples e escalável.
- **SQLite**: Banco de dados leve e fácil de usar para persistência de dados.
- **Body-Parser**: Middleware do Express para fazer parsing de dados em formato JSON nas requisições.

## Estrutura do Projeto

O projeto é estruturado da seguinte maneira:

## 1. Modelo de Dados (models/tarefa.js)

O modelo de dados de uma tarefa é simples, contendo os seguintes campos:

- **id**: Identificador único da tarefa.
- **titulo**: Título da tarefa.
- **descricao**: Descrição da tarefa.
- **concluida**: Booleano que indica se a tarefa foi concluída ou não.

## 2. Controladores (controllers/tarefasController.js)

Os controladores contêm as funções para realizar as operações CRUD. Eles interagem com o banco de dados através do arquivo **bd.js** e são responsáveis por manipular as tarefas. A seguir estão as funções que o controlador implementa:

- **createTarefa**: Cria uma nova tarefa no banco de dados.
- **getAllTarefas**: Recupera todas as tarefas armazenadas no banco de dados.
- **getTarefaById**: Recupera uma tarefa específica com base no ID.
- **updateTarefa**: Atualiza os dados de uma tarefa existente.
- **deleteTarefa**: Deleta uma tarefa do banco de dados.

## 3. Rotas (routes/tarefasRoutes.js)

O arquivo de rotas define os endpoints da API que correspondem às operações CRUD. Ele utiliza os controladores para executar a lógica de cada operação. Aqui estão as rotas principais:

- **POST /tarefas**: Cria uma nova tarefa.
- **GET /tarefas**: Lista todas as tarefas.
- **GET /tarefas/:id**: Retorna uma tarefa específica.
- **PUT /tarefas/:id**: Atualiza uma tarefa existente.
- **DELETE /tarefas/:id**: Deleta uma tarefa existente.

## 4. Ponto de Entrada (index.js)

O arquivo **index.js** é o ponto de entrada da aplicação. Ele configura o servidor Express e define as rotas, além de inicializar a conexão com o banco de dados.

```javascript
const express = require('express');
const tarefasRoutes = require('./routes/tarefasRoutes');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware para parse de JSON
app.use('/tarefas', tarefasRoutes); // Rotas da API

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
```
## Instalação e Execução

### Clone o repositório:

```bash
git clone https://github.com/mateusrtt/API_tarefas.git
cd API_tarefas
```
### Instale as dependências:

```bash
 npm install
```
### Inicie o servidor:

```bash
 npm start
```
### Dependências:

Express: Framework para criar APIs de maneira simples.

Sqlite3: Biblioteca para interação com o banco de dados SQLite.






