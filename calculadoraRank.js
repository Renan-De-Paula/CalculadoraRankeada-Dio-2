function calcularRankeadas(vitorias, derrotas) {
    // Calcula o saldo de vitórias subtraindo o número de derrotas do número de vitórias
    let saldoVitorias = vitorias - derrotas;
    let nivel;
  
    // Verifica o nível com base na quantidade de vitórias
    if (vitorias < 10) {
      nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
      nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
      nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
      nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
      nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
      nivel = "Lendário";
    } else {
      nivel = "Imortal";
    }
  
    // Retorna a mensagem formatada com o saldo de vitórias e o nível do jogador
    return `O Herói tem saldo de ${saldoVitorias} está no nível de ${nivel}`;
}
  
// Exemplo de uso
console.log(calcularRankeadas(92, 1));