// Importa a biblioteca Express e também o tipo Express
// O Express será utilizado para criar o servidor web
import express from "express";
import type { Express, Request, Response } from "express";
// importa a classe Player do arquivo Player.ts
import { Player } from "./models/Player.js";

// Cria uma aplicação Express
// A função express() devolve um objeto que representa o servidor da aplicação
const app: Express = express();

// Midleware para permitir que o servidor entenda requisições com corpo em JSON
app.use(express.json());

// Define a porta onde o servidor ficará disponível
// Neste caso, o servidor poderá ser acessado pela porta 8081
const PORT: number = 8081;

// Instanciação de um jogador utilizando a classe Player
// Criamos (Instanciamos) um novo jogador chamado "Hero" com 100 de saúde e nível 5
// a partir da classe Player que foi importada do arquivo Player.ts
let player1: Player = new Player("Hero", 100, 5);

// Rota GET para obter informações do jogador
// Quando o usuário acessar a rota "/player", 
// o servidor responderá com os dados do jogador
// A função de callback recebe dois parâmetros: req (requisição) e res (resposta)
app.get ("/player", (req: Request, res: Response) => {
    res.json({
        mensage: "Informações do jogador",
        player: player1
    });
});

// Rota POST para o jogador atacar
// Quando o usuário acessar a rota "/player/attack", 
// o servidor chamará o método attack() do jogador
// É utilizada para enviar dados ou realizar ações que alteram o estado do servidor, 
// como neste caso, onde o jogador realiza uma ação (como acionar um comportamento de ataque)
// que é o método attack() do jogador. 
// A função de callback recebe dois parâmetros: req (requisição) e res (resposta)
app.post("/player/attack", (req: Request, res: Response) => {
    const attackMessage = player1.attack(); // Chama o método attack() do jogador
    // Retorna uma resposta JSON com a mensagem de ataque
    // para o cliente que fez a requisição
    res.json({
        mensage: attackMessage
        // retorna a mensagem como resposta
    });
});

// Rota POST para o jogador receber dano
// Quando o usuário acessar a rota "/player/take-damage",
// o servidor chamará o método takeDamage() do jogador,
// passando o valor do dano recebido como parâmetro
app.post("/player/take-damage", (req: Request, res: Response) => {
    // Extrai o valor do dano da requisição
    const { ammount } = req.body;
    // Chama o método takeDamage() do jogador
    const damageMessage = player1.takeDamage(ammount);
    // Retorna uma resposta JSON com a mensagem de dano
    // para o cliente que fez a requisição
    res.json({
        // retorna a mensagem do dano recebido
        action: damageMessage,
        // retorna a saúde atual do jogador
        currenthealth: player1.health,
        // retorna o nível atual do jogador
        currentlevel: player1.level
    });
});

// Inicializa o servidor utilizando a porta definida
// O método listen() faz o servidor começar a "escutar" requisições HTTP
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log("Rotas disponíveis:");
    console.log(`- GET http://localhost:${PORT}/player: Obter informações do jogador`);
    console.log(`- POST http://localhost:${PORT}/player/attack: Jogador realiza um ataque`);
    console.log(`- POST http://localhost:${PORT}/player/take-damage: Jogador recebe dano`);
});