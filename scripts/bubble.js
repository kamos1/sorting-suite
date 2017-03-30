export const bubbleSort = (array) => {
  for (let i = 0; i <= array.length - 1; i++) {
    let container = array[i];

    for (let j = i + 1; j <= array.length; j++) {
      if (container > array[j]) {
        array[j] = array[j - 1];
        array[j - 1] = container;
      }
    }
  }
  return array
}
