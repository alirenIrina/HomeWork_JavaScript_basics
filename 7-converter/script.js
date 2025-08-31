const RUB_TO_USD = 0.012448;
const RUB_TO_EUR = 0.010633;
const USD_TO_RUB = 80.33;
const USD_TO_EUR = 0.8553;
const EUR_TO_RUB = 94.05;
const EUR_TO_USD = 1.17;

function conversion(sum, sourceСurrency, targetCurrency) {
    switch (true) {
        case sourceСurrency == "RUB" && targetCurrency == "USD":
            return sum * RUB_TO_USD;
        case sourceСurrency == "RUB" && targetCurrency == "EUR":
            return sum * RUB_TO_EUR;
        case sourceСurrency == "USD" && targetCurrency == "RUB":
            return sum * USD_TO_RUB;
        case sourceСurrency == "USD" && targetCurrency == "EUR":
            return sum * USD_TO_EUR;
        case sourceСurrency == "EUR" && targetCurrency == "RUB":
            return sum * EUR_TO_RUB;
        case sourceСurrency == "EUR" && targetCurrency == "USD":
            return sum * EUR_TO_USD;  
        default:    
            return null;              
    }
};

console.log(conversion (1, "RUB", "USD"));
console.log(conversion (1, "RUB", "EUR"));
console.log(conversion (1, "USD", "RUB"));
console.log(conversion (1, "USD", "EUR"));
console.log(conversion (1, "EUR", "RUB"));
console.log(conversion (1, "EUR", "USD"));