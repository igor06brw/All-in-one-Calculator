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
    typeOfTerm = document.getElementById('typeOfTerm'),
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
    valueFromLeasingTerm,
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

    typeOfTerm.addEventListener('change', () => {
        
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

    radiosOfTypePayments.addEventListener('change', () => {
        
    });

    displayNextPaymentResult.addEventListener('change', () => {
    
    });

    displayLastPaymentResult.addEventListener('change', () => {
    
    });

    displayFixedPaymentResult.addEventListener('change', () => {
    
    });

let leasingNetPriceFunction = (param) => {
        leasingNetPriceInput.value = param.target.value;
        leasingNetPriceRange.value = param.target.value;
        valueFromLeasingNetPrice = parseFloat(param.target.value).toFixed(2);
        console.log(param.target.value, valueFromLeasingNetPrice);
};

let leasingFirstPaymentFunction = (param) => {
        leasingFirstPaymentInput.value = param.target.value;
        leasingFirstPaymentRange.value = param.target.value;
        valueFromLeasingFirstPayment = parseFloat(param.target.value).toFixed(2);
        console.log(param.target.value, valueFromLeasingFirstPayment);
};

let leasingTermFunction = (param) => {
        leasingTermInput.value = param.target.value;
        leasingTermRange.value = param.target.value;
        valueFromLeasingTerm = parseFloat(param.target.value).toFixed(2);
        console.log(param.target.value, valueFromLeasingTerm);
};

let leasingRedeemPriceFunction = (param) => {
        leasingRedeemPriceInput.value = param.target.value;
        leasingRedeemPriceRange.value = param.target.value;
        valueFromLeasingRedeemPrice = parseFloat(param.target.value).toFixed(2);
        console.log(param.target.value, valueFromLeasingRedeemPrice);
};

let leasingInterestRateFunction = (param) => {
        leasingInterestRateInput.value = param.target.value;
        leasingInterestRateRange.value = param.target.value;
        valueFromLeasingInterestRate = parseFloat(param.target.value).toFixed(1);
        // console.log(param.target.value, valueFromLeasingInterestRate);
};

// example of values
valueFromLeasingNetPrice = 100000;
valueFromLeasingFirstPayment = 10000;
valueFromLeasingRedeemPrice = 20000;
valueFromLeasingInterestRate = 3;
valueFromLeasingTerm = 35;

let first = ((valueFromLeasingNetPrice - valueFromLeasingFirstPayment) - (valueFromLeasingRedeemPrice / ((1 + (valueFromLeasingInterestRate / 1200)) ** valueFromLeasingTerm)));
let second = (1 - (1 / ((1 + (valueFromLeasingInterestRate / 1200)) ** valueFromLeasingTerm))) / (valueFromLeasingInterestRate / 1200);


console.log(first, second);
console.log(first / second);

console.log(((valueFromLeasingInterestRate / 1200) ** valueFromLeasingTerm));
// console.log((((valueFromLeasingNetPrice - valueFromLeasingFirstPayment) - (valueFromLeasingRedeemPrice / ((1 + (valueFromLeasingInterestRate / 12)) ** valueFromLeasingTerm))) / ((1 - valueFromLeasingFirstPayment) - (1 / ((1 + (valueFromLeasingInterestRate / 12)) ** valueFromLeasingTerm)) / (valueFromLeasingInterestRate / 12))));