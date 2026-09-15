// A palavra "class" define que estamos criando um molde. 
// A palavra "export" permite que esse arquivo seja usado por outros arquivos (como o app.ts).

export class Player {
    public name: string; // O nome do jogador (texto)
    public health: number; // A saúde do jogador (número)
    public level: number; // O nível do jogador (número)

    // Construtores (O construtor é um método especial que é executado automaticamente quando a classe é instanciada uma única vez)
    constructor(name: string, health: number = 100, level: number = 1) {
        // A palavra "this" faz referência a própria classe, ou seja:
        // "Pegue o atributo 'name' da classe Player e atribua o valor do parâmetro 'name' a ele".
        this.name = name; 
        this.health = health;
        this.level = level;
    }

    // Métodos (Comportamentos da Classe)
    // Métodos são "funções" que a classe pode executar, ou seja, são os comportamentos da classe.
    // O método "attack" é um método que retorna uma string.
    public attack(): string {
        const damage = this.level * 10; // Calcula o dano baseado no nível do jogador
        return `${this.name} atacou e causou ${damage} de dano!`;
    }

    // O método "takeDamage" é um método que recebe um número como parâmetro e não retorna nada (void).
    public takeDamage(ammount: number): string {
        this.health -= ammount; // Reduz a saúde do jogador pelo valor do parâmetro
        if (this.health < 0) {
            this.health = 0; // Garante que a saúde não fique negativa
            return `${this.name} foi derrotado!`;
        }

        return `${this.name} recebeu ${ammount} de dano e agora tem ${this.health} de saúde.`;
    }
}