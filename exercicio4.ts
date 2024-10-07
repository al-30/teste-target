function calculaPorcetagem(estado: number, total: number): number {
  const porcentagem = (estado / total) * 100;
  return porcentagem;
}
function porcentagemPorEstado() {
  const sp = 67836.43;
  const rj = 36678.66;
  const mg = 29229.88;
  const es = 27165.48;
  const outros = 19849.53;

  const total = sp + rj + mg + es + outros;
  console.log(calculaPorcetagem(sp, total));
  console.log(calculaPorcetagem(rj, total));
  console.log(calculaPorcetagem(mg, total));
  console.log(calculaPorcetagem(es, total));
  console.log(calculaPorcetagem(outros, total));
  return;
}
porcentagemPorEstado();
