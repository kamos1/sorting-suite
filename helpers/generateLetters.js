export const generateLetters = (max) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMOPQRSTUVWXYZ';
  let letters = [];

  for (let i = 0; i < max; i++) {
    letters.push(alphabet.charAt(Math.floor(Math.random() * alphabet.length)))
  }

  return letters
}
