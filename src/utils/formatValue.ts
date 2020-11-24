const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value); // Passar parâmetros para passar o formato que deve ser retornado

export default formatValue;
