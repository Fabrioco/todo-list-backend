# To-Do List Backend

Este é um backend de To-Do List desenvolvido com Node.js, Express, Sequelize e PostgreSQL. O projeto implementa um CRUD completo para gerenciamento de tarefas.

## Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **Express** - Framework web para Node.js
- **Sequelize** - ORM para interagir com o banco de dados
- **PostgreSQL** - Banco de dados relacional
- **Router** - Gerenciamento de rotas no Express

## Funcionalidades

- Criar uma nova tarefa
- Listar todas as tarefas do usuário
- Buscar uma tarefa por ID
- Atualizar uma tarefa existente
- Deletar uma tarefa

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Fabrioco/todo-list-backend.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd todo-list-backend
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Configure o banco de *dados* no arquivo `.env`:
   ```env
   DB_HOST=localhost
   DB_USER=postgres
   DB_PASSWORD=authnext
   DB_NAME=auth_next
   DB_PORT=5432
   ```
5. Execute as migrações do banco de dados:
   ```bash
   npx sequelize db:migrate
   ```
6. Inicie o servidor:
   ```bash
   npm start
   ```

## Rotas da API

### Criar uma tarefa

**POST** `/todos/create`

```json
{
  "title": "Nome da tarefa",
  "description": "Descrição da tarefa",
  "user_id": 1,
  "status": false
}
```

### Listar todas as tarefas

**GET** `/todos/getAll`

### Buscar uma tarefa por ID

**GET** `/todos/get/:id`

### Atualizar uma tarefa

**PUT** `/todos/update/:id`

```json
{
  "status": true
}
```

### Deletar uma tarefa

**DELETE** `/todos/delete/:id`

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

---

Desenvolvido por [Fabricio](https://github.com/Fabrioco) 🚀

