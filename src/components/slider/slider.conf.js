export const setColor = (i, n) => {
  let c = i * (150 / n) + 20;
  let color = `rgb(${c},${c},${c})`;
  return color;
};
