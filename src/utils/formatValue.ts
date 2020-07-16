const formatValue = (value: number): string => {
  const formattedValue = Intl.NumberFormat('pt-BR').format(value);
  return `R$ ${formattedValue}`;
};

export default formatValue;
