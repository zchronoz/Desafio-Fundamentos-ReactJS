const formatValue = (value: string): string =>
  Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(
    parseFloat(value),
  );

export default formatValue;
