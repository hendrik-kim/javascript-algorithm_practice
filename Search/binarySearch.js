function binarySearch(arr, el) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor(start + end / 2);

  while (arr[middle] != el && start <= end) {
    if (el < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor(start + end / 2);
  }
  return arr[middle] === el ? middle : -1;
}
