const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = "Доступные валюты:"+"\n";
    
    if(arr.length===0){
        return 'Нет доступных валют';
    }
    let a = [];
    for (let i = 0; i< arr.length; i++){
        if(arr[i]===missingCurr){
             arr.splice(i,1) ;
        }
    }
    str += arr.join("\n");
    return str ; 
}

console.log(availableCurr(additionalCurrencies, 'UAH'));