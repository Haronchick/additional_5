module.exports = function check(str, bracketsConfig) {
    // your solution
    let bracketOpen = 0, bracketClose = 0, result = true, arrBrackets = [];
    if (str.length%2 === 1) return false;
    for (let i = 0; i < str.length && result === true; i++) {
        //  console.log(str[i]);
        //  console.log(bracketsConfig);
        let config = findConfig(str[i], bracketsConfig);

        //console.log(config);
        if (str[i] === config[0]) arrBrackets.push(str[i]);  //if (str[i] === config[0]) bracketOpen++;
        if (str[i] === config[1]) {
            console.log(arrBrackets[arrBrackets.length - 1]);
            console.log(config[0]);
            if(arrBrackets[arrBrackets.length - 1] !== config[0]) {
                result = false;
            }else arrBrackets.pop();
        }
        //if (str[i] === config[1]) bracketClose++;
       // if (bracketOpen < bracketClose) result = false;
        // console.log(bracketOpen);
        // console.log(bracketClose);
    }

  //  if (bracketOpen !== bracketClose) result = false;
    if (arrBrackets === []) result = true;

    // let config = findConfig(openBracket,bracketsConfig);

    function findConfig(symbol, configs) {
        return configs.find((elem) => {
            //  console.log('elem');
            //  console.log(elem);
            return elem[0] === symbol || elem[1] === symbol;
        });
    }

    return result;

}
