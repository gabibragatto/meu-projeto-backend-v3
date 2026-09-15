# 🎮 API RPG — POO e Persistência de Dados

Projeto desenvolvido em aula para aplicar conceitos fundamentais de **Programação Orientada a Objetos (POO)** no desenvolvimento de uma API, utilizando como contexto um sistema de RPG.

A atividade também apresenta a implementação de **persistência local de dados** por meio do módulo nativo `fs` (File System), permitindo que o estado do jogador seja mantido mesmo após a reinicialização do servidor.

## 📚 Conteúdos abordados

### 🧩 Modelagem de Classes e Objetos

Foi criada a classe `Player`, responsável por representar o jogador do sistema.

A classe possui:

* **Atributos:** nome, vida (HP) e nível;
* **Métodos:** ações como atacar e receber dano;
* **Objeto:** representa uma instância do jogador criada a partir da classe.

### 🏗️ Instanciação e Construtor

A criação do jogador é realizada utilizando o operador `new`:

```javascript
new Player(...)
```

O construtor da classe é responsável por receber as informações iniciais e definir os atributos do objeto.

### 💾 Persistência de Dados

Para evitar que os dados sejam perdidos quando o servidor é reiniciado, foi utilizado o módulo nativo `fs` do Node.js.

O projeto trabalha com:

* **Serialização:** conversão dos dados do objeto para JSON e armazenamento no arquivo;
* **Desserialização:** leitura dos dados salvos no arquivo e reconstrução do estado do jogador em memória;
* **Arquivo de dados:** `./data/player.json`.

Dessa forma, alterações realizadas durante a execução da API podem ser armazenadas localmente.

## 🚀 Como executar

### 1. Instalar as dependências

No terminal, execute:

```bash
npm install
```

### 2. Iniciar o servidor

Execute:

```bash
npm run dev
```

Após iniciar o servidor, as rotas podem ser testadas utilizando o **Postman**.

## 🧪 Testando as rotas

### GET `/player`

Retorna os dados e o estado atual do jogador.

**Método:** `GET`

```text
GET /player
```

### POST `/player/attack`

Executa a ação de ataque do jogador por meio do método definido na classe `Player`.

**Método:** `POST`

```text
POST /player/attack
```

### POST `/player/damage`

Recebe uma quantidade de dano pelo corpo da requisição, altera o estado interno do jogador e atualiza o arquivo de persistência.

**Método:** `POST`

```text
POST /player/damage
```

Exemplo de corpo da requisição:

```json
{
  "damage": 25
}
```

A alteração também é registrada no arquivo:

```text
./data/player.json
```

## 🗂️ Estrutura do projeto

```text
📁 projeto
├── 📁 data
│   └── player.json
├── 📁 src
│   └── ...
├── package.json
└── ...
```

## 🎯 Objetivo

O objetivo da atividade é compreender, na prática, como os conceitos de **POO**, **classes**, **objetos**, **construtores**, **métodos** e **persistência de dados** podem ser aplicados no desenvolvimento de uma API.

## 🛠️ Tecnologias utilizadas

* JavaScript
* Node.js
* Express
* File System (`fs`)
* JSON
* Postman

## 👩‍💻 Projeto desenvolvido em aula

Atividade prática de desenvolvimento de API com foco em **Programação Orientada a Objetos e persistência local de dados**.
