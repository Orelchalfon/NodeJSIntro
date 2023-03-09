const os = require("os");
const path = require("path");
const { MaxVal, PrintStrN_T, HowManyAfterP_Dig } = require("./function");

const main = () => {
  console.log(MaxVal(4, 20, 10));
  PrintStrN_T("orel", 5);

  console.log(HowManyAfterP_Dig(18.214));
};
main();
