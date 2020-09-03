let cashCreditLoanInput = document.getElementById('cashCreditLoanInput'),
    cashCreditLoanRange = document.getElementById('cashCreditLoanRange'),
    cashCreditTermInput = document.getElementById('cashCreditTermInput'),
    cashCreditTermRange = document.getElementById('cashCreditTermRange'),
    cashCreditInterestRateInput = document.getElementById('cashCreditInterestRateInput'),
    cashCreditInterestRateRange = document.getElementById('cashCreditInterestRateRange'),
    displayFixedPaymentResult = document.getElementById('displayFixedPaymentResult'),

    valueFromCashCreditLoan,
    valueFromCashCreditTerm,
    valueFromCashCreditInterestRate;

    cashCreditLoanInput.addEventListener('change', (value) => {
        cashCreditLoanFunction(value);
    });
    cashCreditLoanRange.addEventListener('change', (value) => {
        cashCreditLoanFunction(value);
    });

    cashCreditTermInput.addEventListener('change', (value) => {
        cashCreditTermFunction(value);
    });
    cashCreditTermRange.addEventListener('change', (value) => {
        cashCreditTermFunction(value);
    });

    cashCreditInterestRateInput.addEventListener('change', (value) => {
        cashCreditInterestRateFunction(value);
    });
    cashCreditInterestRateRange.addEventListener('change', (value) => {
        cashCreditInterestRateFunction(value);
    });

let cashCreditLoanFunction = (param) => {
    cashCreditLoanInput.value = param.target.value;
    cashCreditLoanRange.value = param.target.value;
    valueFromCashCreditLoan = parseFloat(param.target.value);
    console.log(valueFromCashCreditLoan)
    calculate();
}
let cashCreditTermFunction = (param) => {
    cashCreditTermInput.value = param.target.value;
    cashCreditTermRange.value = param.target.value;
    valueFromCashCreditTerm = parseFloat(param.target.value);
    console.log(valueFromCashCreditTerm)
    calculate();
}
let cashCreditInterestRateFunction = (param) => {
    cashCreditInterestRateInput.value = param.target.value;
    cashCreditInterestRateRange.value = param.target.value;
    valueFromCashCreditInterestRate = parseFloat(param.target.value);
    console.log(valueFromCashCreditInterestRate)
    calculate();
}

let displayFixedResult = (value) => {
    displayFixedPaymentResult.value = value;
}


let calculate = () => {

    let q = (1 + ((valueFromCashCreditInterestRate / 100) / 12)),
        first = valueFromCashCreditLoan * Math.pow(q, valueFromCashCreditTerm),
        second = (1 - q),
        third = (1 - Math.pow(q, valueFromCashCreditTerm)),
        result =  first * (second / third);
        displayFixedResult(result.toFixed(2));
}


