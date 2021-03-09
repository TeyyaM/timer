let argArr = process.argv.slice(2);
argArr.forEach(num => {
  let time = parseInt(num);
  if (typeof time === 'number' && time >= 0) {
    setTimeout(() => {
      process.stdout.write('.\n');
    }, time * 1000);
  }
});