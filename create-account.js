function createAccount(pin, amount) {
    let balance = amount || 0;
    let acctPin = pin;
    return {
        checkBalance: function (pin){
            if(pin !== acctPin) return "Invalid PIN."
            return `$${balance}`
        },
        deposit: function(pin, addAmount){
            if(pin!== acctPin) return "Invalid PIN."
            balance += addAmount;
            return `Successfully deposited $${addAmount}. Current balance: $${balance}.`
        },
        withdraw: function(pin, wdrawAmount){
            if(pin!== acctPin) return "Invalid PIN."
            if(wdrawAmount > balance) return "Withdrawal amount exceeds account balance. Transaction cancelled."
            balance -= wdrawAmount;
            return `Successfully withdrew $${wdrawAmount}. Current balance: $${balance}.`
        },
        changePin: function(pin, newpin){
            if(pin!== acctPin) return "Invalid PIN."
            acctPin = newpin;
            return "PIN successfully changed!"
        }
    }
}

module.exports = { createAccount };
