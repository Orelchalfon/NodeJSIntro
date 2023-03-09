exports.MaxVal = (a, b, c) => Math.max(a, b, c);
exports.PrintStrN_T = (str, num) => {
  for (let index = 0; index < num; index++) {
    console.log(str);
  }
};
exports.HowManyAfterP_Dig = (num) => {
  //parsInt
  let counter = 0;
  while (num - parseInt(num) > 0) {
    counter++;
    num *= 10;
  }
  return counter;
};
