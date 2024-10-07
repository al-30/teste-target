interface Faturamento {
  dia: number;
  valor: number;
}

interface Distribuidora {
  faturamento_diario: Faturamento[];
}
function faturamentosValidos(dados: Distribuidora): Faturamento[] {
  const faturamentoDiario = dados.faturamento_diario.filter((item) => item.valor > 0);
  return faturamentoDiario;
}
function menorValor(faturamento: Faturamento[]): number {
  let quantidadeDias = faturamento.length;
  let menorFaturamento = faturamento[0].valor;

  for (let i = 1; i < quantidadeDias; i++) {
    if (faturamento[i].valor < menorFaturamento) {
      menorFaturamento = faturamento[i].valor;
    }
  }
  return menorFaturamento;
}

function maiorValor(faturamento: Faturamento[]): number {
  let quantidadeDias = faturamento.length;
  let maiorFaturamento = 0;

  for (let i = 0; i < quantidadeDias; i++) {
    if (faturamento[i].valor > maiorFaturamento) {
      maiorFaturamento = faturamento[i].valor;
    }
  }
  return maiorFaturamento;
}

function mediaFaturamento(faturamento: Faturamento[]): number {
  const dias = faturamento.length;
  let soma = 0;

  for (let i = 0; i < faturamento.length; i++) {
    soma += faturamento[i].valor;
  }
  return soma / dias;
}

function diasMaiorQueMedia(faturamento: Faturamento[]): number {
  const media = mediaFaturamento(faturamento);
  let diasSuperiorMedia = 0;

  for (let i = 0; i < faturamento.length; i++) {
    if (faturamento[i].valor > media) {
      diasSuperiorMedia++;
    }
  }
  return diasSuperiorMedia;
}

function resumo(dados: Distribuidora) {
  const faturamento = faturamentosValidos(dados);

  return {
    menorValor: menorValor(faturamento),
    maiorValor: maiorValor(faturamento),
    diasAcimaDaMedia: diasMaiorQueMedia(faturamento),
  };
}