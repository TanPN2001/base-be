/**
 *
 * @param {Array} arr
 * @param {Integer} i
 * @param {Integer} j
 */
const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  //   return arr;
};

/**
 *
 * @param {Array} arr
 * @returns
 */
const doubleSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr);
  return arr;
};

/**
 *
 * @param {Array} arr
 * @returns {Array} arr
 */
const insertionSort = arr => {
  //   for (let i = 1; i < arr.length; i++) {
  //     let index = i;
  //     let newNumber = arr[index];

  //     while (index > 0 && arr[index - 1] < newNumber) {
  //       arr[index] = arr[index - 1];
  //       index--;
  //     }
  //     arr[index] = newNumber;
  //   }

  for (let i = 1; i < arr.length; i++) {
    let index = i;
    let newNumber = arr[index];

    while (index > 0 && arr[index - 1] < newNumber) {
      arr[index] = arr[index - 1];
      index--;
    }
    arr[index] = newNumber;
  }

  console.log(arr);
  return arr;
};

/**
 *
 * @param {Array} arr
 * @returns {Array} arr
 */
const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    // let min = arr[i];
    let indexMin = i;
    for (let index = i + 1; index < arr.length; index++) {
      if (arr[index] < arr[indexMin]) {
        // min = arr[index];
        indexMin = index;
      }
    }
    if (i != indexMin) {
      let tem = arr[i];
      arr[i] = arr[indexMin];
      arr[indexMin] = tem;
    }
  }
  console.log(arr);
  return arr;
};

/**
 *
 * @param {Array} arr
 * @param {Number} l
 * @param {Number} m
 * @param {Number} r
 */
const merge = (arr, l, m, r) => {
  // length of left arr
  let n1 = m - l + 1;
  // length of right arr
  let n2 = r - m;

  //   0 1 2 3 4 5 6 7 8 9
  //     l   m   r
  //   let L = arr.slice(l, l + n1);
  //   let R = arr.slice(m + 1, m + n2 + 1);
  let L = new Array(n1);
  let R = new Array(n2);
  for (let i = 0; i < n1; i++) {
    L[i] = arr[i + l];
  }

  for (let i = 0; i < n2; i++) {
    R[i] = arr[i + m + 1];
  }

  //   console.log('top: ', L, R);

  //   for (let i = 0; i < n1; i++) L[i] = arr[l + i];
  //   for (let j = 0; j < n2; j++) R[j] = arr[m + 1 + j];
  //   console.log('bottom: ', L, R);
  // index of L[]
  let i = 0;

  // index of R[]
  let j = 0;

  // index of Arr[]
  let k = l;

  while (i < n1 && j < n2) {
    if (L[i] < R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    arr[k] = L[i];
    k++;
    i++;
  }
  while (j < n2) {
    arr[k] = R[j];
    k++;
    j++;
  }
};

/**
 *
 * @param {Array} arr
 * @param {Number} l
 * @param {Number} r
 */
const mergeSort = (arr, l, r) => {
  if (r > l) {
    let m = l + Math.floor((r - l) / 2);
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    merge(arr, l, m, r);
  } else {
    return;
  }
  //   console.log(arr);
  return arr;
};

/**
 *
 * @param {Array} arr
 * @param {Number} low
 * @param {Number} hight
 * @returns
 */
let partition = (arr, low, hight) => {
  let index = low - 1;
  let pivot = arr[hight];
  for (let i = low; i < hight; i++) {
    if (arr[i] < pivot) {
      index++;
      [arr[i], arr[index]] = [arr[index], arr[i]];
    }
  }
  index++;
  [arr[index], arr[hight]] = [arr[hight], arr[index]];
  return index;
};

/**
 *
 * @param {Array} arr
 * @returns
 */
const quickSort = (arr, low, hight) => {
  if (low >= hight) return;
  let pIndex = partition(arr, low, hight);
  quickSort(arr, low, pIndex - 1);
  quickSort(arr, pIndex + 1, hight);
  return arr;
};

/**
 *
 * @param {Array} arr
 * @param {Number} x
 * @returns {Number} index of x, if not return -1
 */
const binarySearch = (arr, x) => {
  let index = -1;
  let l = 0,
    r = arr.length;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    console.log(l, r, mid);
    if (arr[mid] < x) {
      l = mid + 1;
    } else if (arr[mid] > x) {
      r = mid - 1;
    } else {
      index = mid;
      return index;
    }
  }

  return index;
};

let arr = [6, 3, 9, 11, 4, 5, 9, 10, 7];
arr = doubleSort(arr);
console.log(arr);
let index = binarySearch(arr, 9);
console.log('index: ', index);
