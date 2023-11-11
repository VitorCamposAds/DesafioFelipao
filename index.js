//crie uma variável para armazernar o nome e a quantidade de experiência(xp) de um herói, depois utilize uma
//estrutura de decisão para apresentar uma mensagem abaixo:
//se xp for menor do que 1.000 = Ferro
//se xp for entre 1001 e 2.000 = Bronze
//se xp for entre 2.001 e 5.000 = Prata Ouro
//se xp for entre 5.001 e 8.000 = Platina Diamante
//se xp for entre 8.001 e 9.000 = Ascendente
//se xp for entre 9.001 e 10.000 = Imortal
//se xp for maior ou igual a 10.001 = Radiante 

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicitar ao usuário que insira o nome do herói
rl.question("Digite o nome do herói: ", (nomeDoHeroi) => {
  // Solicitar ao usuário que insira a quantidade de experiência (xp) do herói
  rl.question("Digite a quantidade de experiência (xp) do herói: ", (xpInput) => {
    const xpDoHeroi = parseInt(xpInput);

    // Verificar a categoria com base na xp inserida pelo usuário
    let categoria;

    if (xpDoHeroi < 1000) {
      categoria = "Ferro";
    } else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
      categoria = "Bronze";
    } else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000) {
      categoria = "Prata Ouro";
    } else if (xpDoHeroi >= 5001 && xpDoHeroi <= 8000) {
      categoria = "Platina Diamante";
    } else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {
      categoria = "Ascendente";
    } else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000) {
      categoria = "Imortal";
    } else {
      categoria = "Radiante";
    }

    // Exibir a mensagem com o nome e a categoria
    console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${categoria}`);
    rl.close();
  });
});
