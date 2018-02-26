module.exports = function check(str, bracketsConfig) {
    // your solution
    let  result = true, arrBrackets = [];
    if (str.length%2 === 1) return false;

    for (let i = 0; i < str.length && result === true; i++) {
        let config = findConfig(str[i], bracketsConfig);
        if (config === undefined) return false;
        if (str[i] === config[0] && arrBrackets.indexOf(config[1]) === -1) {
                arrBrackets.push(str[i]);
        } else if (str[i] === config[1]) {
            if(arrBrackets[arrBrackets.length - 1] !== config[0]) {
                result = false;
            }else arrBrackets.pop();
        }
    }

    if (arrBrackets.length > 0) return false;

    function findConfig(symbol, configs) {
        return configs.find((elem) => {
            return elem[0] === symbol || elem[1] === symbol;
        });
    }

    return result;

}
