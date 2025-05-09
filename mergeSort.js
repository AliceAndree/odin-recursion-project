const mergeSort = (array) => {
  // if the array has more than 1 element, split it in two equal arrays

  if (array.length <= 1) return array;
  const mid = Math.floor(array.length / 2);
  const leftArray = array.slice(0, mid);
  const rightArray = array.slice(mid, array.length);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
};

const merge = (left, right) => {
  const mergedCollection = [];
  let iL = 0;
  let iR = 0;

  while (iL < left.length && iR < right.length) {
    left[iL] < right[iR]
      ? mergedCollection.push(left[iL++])
      : mergedCollection.push(right[iR++]);
  }

  while (iL < left.length) mergedCollection.push(left[iL++]);
  while (iR < right.length) mergedCollection.push(right[iR++]);

  return mergedCollection;
};

console.log(mergeSort([]));
console.log(mergeSort([5]));
console.log(mergeSort([9, 7, 8, 3, 2, 1]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
