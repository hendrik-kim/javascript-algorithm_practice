function countDown(num) {
  if (num <= 0) {
    console.log('Alll done!');
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

countDown(3);
