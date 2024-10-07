function invertString(s: string): string {
  let fim = s.length - 1;
  let resposta = '';
  while (fim >= 0) {
    resposta += s[fim];
    fim--;
  }
  return resposta;
}

console.log(invertString('target'));
