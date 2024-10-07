function isFibonacci(entrada: number) {
  if (entrada === 0 || entrada === 1) {
    return 'Pertence a sequencia de Fibonacci';
  }

  let anterior = 0;
  let atual = 1;

  while (atual < entrada) {
    let temporario = anterior;
    anterior = atual;
    atual += temporario;
  }

  if (atual === entrada) {
    return 'Pertence a sequencia de Fibonacci';
  } else return 'Nao pertence a sequencia de Fibonacci';
}
console.log(isFibonacci(5))
