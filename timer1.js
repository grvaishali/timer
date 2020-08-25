
let alarm = function (time) {
  if (time > 0) {
    setTimeout(() => {

      process.stdout.write('..');

    }, 1000 * time);
  }
  else {
    return;
  }
}

const sort = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

const input = sort(process.argv.slice(2));
for (var ele of input) {
  alarm(parseInt(ele));
}
