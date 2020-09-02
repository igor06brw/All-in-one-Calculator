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


let calculate = () => {
    let result = (valueFromCashCreditLoan * (1 + ((valueFromCashCreditInterestRate / 12) ** valueFromCashCreditTerm )) * (1 - (valueFromCashCreditInterestRate / 12)) / (1 - ((valueFromCashCreditInterestRate ** valueFromCashCreditTerm) / 12)));
    console.log(result);
}


