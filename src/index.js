// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if (currency <= 0) return {};
    else if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    else {

        const usedCoinsStorage = [50, 25, 10, 5, 1]; //storage for coins nominals used
        const coinsNamesStorage = ['H', 'Q', 'D', 'N', 'P']; //storage for coins' names respectively
        let result = new Object(); //result storage

        for (let i = 0; i < usedCoinsStorage.length; i++) {
            if (currency >= usedCoinsStorage[i]) {
                result[coinsNamesStorage[i]] = Math.floor(currency / usedCoinsStorage[i]);
                currency = currency % usedCoinsStorage[i];
            }
        }

        return result;
    }
}
