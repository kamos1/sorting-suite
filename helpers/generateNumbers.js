export const generateNumbers = (min, max) => {
  let random = [];

  for (let i = min; i < max; i++) {
    random.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return random;
}
