let dropdownMenuButton = document.getElementById('dropdownMenuButton'),
    translateAppButton = document.getElementById('translateAppButton'),
    themeAppButton = document.getElementById('themeAppButton'),
    mainMenuButton = document.getElementById('mainMenuButton'),

    leasingNetPriceInput = document.getElementById('leasingNetPriceInput'),
    leasingNetPriceRange = document.getElementById('leasingNetPriceRange'),

    leasingFirstPaymentInput = document.getElementById('leasingFirstPaymentInput'),
    leasingFirstPaymentRange = document.getElementById('leasingFirstPaymentRange'),

    leasingTermInput = document.getElementById('leasingTermInput'),
    leasingTermRange = document.getElementById('leasingTermRange'),
    // typeOfTerm = document.getElementById('typeOfTerm'),
    forYearsOfTerm = document.getElementById('forYearsOfTerm'),
    forMonthsOfTerm = document.getElementById('forMonthsOfTerm'),

    leasingRedeemPriceInput = document.getElementById('leasingRedeemPriceInput'),
    leasingRedeemPriceRange = document.getElementById('leasingRedeemPriceRange'),

    leasingInterestRateInput = document.getElementById('leasingInterestRateInput'),
    leasingInterestRateRange = document.getElementById('leasingInterestRateRange'),

    radiosOfTypePayments = document.getElementById('radiosOfTypePayments'),
    forFixedPayment = document.getElementById('forFixedPayment'),
    forDescreasingPayment = document.getElementById('forDescreasingPayment'),
    displayNextPaymentResult = document.getElementById('displayNextPaymentResult'),
    displayLastPaymentResult = document.getElementById('displayLastPaymentResult'),
    displayFixedPaymentResult = document.getElementById('displayFixedPaymentResult'),

    valueFromLeasingNetPrice,
    valueFromLeasingFirstPayment,
    valueFromLeasingTerm = "3209439.00",
    valueFromLeasingRedeemPrice,
    valueFromLeasingInterestRate;


    leasingNetPriceInput.addEventListener('change', (value) => {
        leasingNetPriceFunction(value);
    });
    leasingNetPriceRange.addEventListener('change', (value) => {
        leasingNetPriceFunction(value);
    });

    leasingFirstPaymentInput.addEventListener('change', (value) => {
        leasingFirstPaymentFunction(value)
    });
    leasingFirstPaymentRange.addEventListener('change', (value) => {
        leasingFirstPaymentFunction(value)
    });

    leasingTermInput.addEventListener('change', (value) => {
        leasingTermFunction(value);
    });
    leasingTermRange.addEventListener('change', (value) => {
        leasingTermFunction(value);
    });

    leasingRedeemPriceInput.addEventListener('change', (value) => {
        leasingRedeemPriceFunction(value);
    });
    leasingRedeemPriceRange.addEventListener('change', (value) => {
        leasingRedeemPriceFunction(value);
    });

    leasingInterestRateInput.addEventListener('change', (value) => {
        leasingInterestRateFunction(value);
    });
    leasingInterestRateRange.addEventListener('change', (value) => {
        leasingInterestRateFunction(value);
    });

    // lack of decreasing leasing pattern!!!!

    // radiosOfTypePayments.addEventListener('change', () => {    
    // });
    // displayNextPaymentResult.addEventListener('change', () => { 
    // });
    // displayLastPaymentResult.addEventListener('change', () => {
    // });

    displayFixedPaymentResult.addEventListener('change', () => {
    
    });

let leasingNetPriceFunction = (param) => {
    if( leasingNetPriceInput.value > 0) {
        leasingNetPriceInput.value = param.target.value;
    } else {
        leasingNetPriceInput.value = 50000;
    }
    leasingNetPriceRange.value = param.target.value;
    valueFromLeasingNetPrice = parseFloat(param.target.value);
    changeRedeemPaymentInputFunction();
    changeFirstPaymentInputFunction();
    calculate();
};

let leasingFirstPaymentFunction = (param) => {
    if( leasingFirstPaymentInput.value >= 0) {
        leasingFirstPaymentInput.value = param.target.value;
    } else {
        leasingFirstPaymentInput.value = 0;
    }
    leasingFirstPaymentRange.value = param.target.value;
    valueFromLeasingFirstPayment = parseFloat(param.target.value);
    console.log(param.target.value, valueFromLeasingFirstPayment);
    calculate();
};

let leasingTermFunction = (param) => {
    if(leasingTermInput.value > 0) {
        leasingTermInput.value = param.target.value;
    } else {
        leasingTermInput.value = 35;
    }
    leasingTermRange.value = param.target.value;
    valueFromLeasingTerm = parseFloat(param.target.value).toFixed(2);
    console.log(param.target.value, valueFromLeasingTerm);
    calculate();
};

let leasingRedeemPriceFunction = (param) => {
    if(leasingRedeemPriceInput.value >= 0) {
        leasingRedeemPriceInput.value = param.target.value;
    } else {
        leasingRedeemPriceInput.value = 0;
    }
    leasingRedeemPriceRange.value = param.target.value;
    valueFromLeasingRedeemPrice = parseFloat(param.target.value);
    console.log(param.target.value, valueFromLeasingRedeemPrice);
    calculate();
};

let leasingInterestRateFunction = (param) => {
    if(leasingInterestRateInput.value > 0) {
        leasingInterestRateInput.value = param.target.value;
    } else {
        leasingInterestRateInput.value = 5;
    }
    leasingInterestRateRange.value = param.target.value;
    valueFromLeasingInterestRate = (parseFloat(param.target.value).toFixed(4) / 12) / 100;
    console.log(param.target.value, valueFromLeasingInterestRate);
    calculate();
};

let changeFirstPaymentInputFunction = () => {
    if(valueFromLeasingNetPrice !== undefined) {
        if(valueFromLeasingNetPrice < valueFromLeasingFirstPayment) {
            leasingFirstPaymentInput.value = 0; 
            leasingFirstPaymentRange.value = 0;
        }

        leasingFirstPaymentInput.max = valueFromLeasingNetPrice * 0.3;
        leasingFirstPaymentRange.max = valueFromLeasingNetPrice * 0.3;
    } else {
        console.log('XD');
    }
}

let changeRedeemPaymentInputFunction = () => {
    if(valueFromLeasingNetPrice !== undefined) {
        if(valueFromLeasingNetPrice < valueFromLeasingRedeemPrice) {
            leasingRedeemPriceInput.value = 0; 
            leasingRedeemPriceRange.value = 0;
        } 
        leasingRedeemPriceInput.max = valueFromLeasingNetPrice * 0.3;
        leasingRedeemPriceRange.max = valueFromLeasingNetPrice * 0.3;
    } else {
        console.log('XD');
    }
}

let displayFixedResult = (value) => {
    displayFixedPaymentResult.value = value;
}



let calculate = () => {
    let first = ((valueFromLeasingNetPrice - valueFromLeasingFirstPayment) - (valueFromLeasingRedeemPrice / ((1 + (valueFromLeasingInterestRate)) ** valueFromLeasingTerm)));
    let second = (1 - (1 / ((1 + (valueFromLeasingInterestRate)) ** valueFromLeasingTerm))) / (valueFromLeasingInterestRate);
    let result = (first / second);
    if(valueFromLeasingNetPrice && valueFromLeasingFirstPayment && valueFromLeasingTerm && valueFromLeasingRedeemPrice && valueFromLeasingInterestRate !== undefined) {
        if(result > 0) {
            displayFixedResult(result.toFixed(2))
        } else {
            displayFixedResult("Incorrect value!")
        }
    }
}