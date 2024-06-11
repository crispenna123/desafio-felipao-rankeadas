// Entrada de dados
const vitorias = parseInt("Digite o número de vitórias: ");
const derrotas = parseInt("Digite o número de derrotas: ");

function calcularRank(vitorias, derrotas) {
  // Calcular o saldo de vitórias
  const saldo = vitorias - derrotas;

  let rank;
  if (vitorias < 10) {
    rank = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    rank = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    rank = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    rank = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    rank = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    rank = "Lendário";
  } else {
    rank = "Imortal";
  }

  // Mensagem de saída
  const mensagem = `O Herói tem de saldo de ${saldo} está no nível de ${rank}`;
  return mensagem;
}

// Chamar a função e exibir o resultado
const resultado = calcularRank(vitorias, derrotas);
console.log(resultado);
