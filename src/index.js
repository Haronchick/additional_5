module.exports = function check(str, bracketsConfig) {
  // your solution
  let  openBracket = str[0];

  let config = findConfig(openBracket,bracketsConfig);


  let arrStr = str.split('');
  console.log(arrStr);
  let index = arrStr.findIndex((elem) => {
      return elem === config[1];
  });
 // console.log(index);



    if (config === undefined || index%2 === 0 ) return false;

    function findConfig(symbol, configs) {
        return configs.find((elem) => {
            return elem[0] === symbol;
        });
    }
    str = str.substr(1);
 return str.length > 1 ? check(str, bracketsConfig) : true;

}
