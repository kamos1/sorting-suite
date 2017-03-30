export const mergeSort = (array) => {
  if (array.length < 2) {
    return array;
  }

  let middle = parseInt(array.length / 2);
  let left   = array.slice(0, middle);
  let right  = array.slice(middle, array.length);

  return merge(mergeSort(left), mergeSort(right));
}

export const merge = (left, right) => {
  let result = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  
  // use concat
  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }

  return result;
}
