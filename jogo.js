const rl = require("readline-sync");

let tab = ["1","2","3","4","5","6","7","8","9"];
let jogador = "X";

function mostrarTabuleiro() {
    console.clear();
  console.log(`
   ${tab[0]} | ${tab[1]} | ${tab[2]}
  ---+---+---
   ${tab[3]} | ${tab[4]} | ${tab[5]}
  ---+---+---
   ${tab[6]} | ${tab[7]} | ${tab[8]}
  `);
}

function venceu(j) {
  const vitorias = [
    [0,1,2],[3,4,5],[6,7,8], // linhas
    [0,3,6],[1,4,7],[2,5,8], // colunas
    [0,4,8],[2,4,6]          // diagonais
  ];
  return vitorias.some(comb => comb.every(i => tab[i] === j));
}

for (let jogada = 0; jogada < 9; jogada++) {
  mostrarTabuleiro();
  let pos = rl.questionInt(`Jogador ${jogador}, escolha posicao: `) - 1;

  if (tab[pos] === "X" || tab[pos] === "O") {
    console.log("Posição ocupada, tente novamente!");
    jogada--;
    continue;
  }

  tab[pos] = jogador;

  if (venceu(jogador)) {
    mostrarTabuleiro();
    console.log(`Jogador ${jogador} venceu!`);
    process.exit();
  }

  jogador = (jogador === "X") ? "O" : "X";
}

mostrarTabuleiro();
console.log("Deu velha!");