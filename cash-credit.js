let cashCreditLoanInput = document.getElementById('cashCreditLoanInput'),
    cashCreditLoanRange = document.getElementById('cashCreditLoanRange'),
    cashCreditTermInput = document.getElementById('cashCreditTermInput'),
    cashCreditTermRange = document.getElementById('cashCreditTermRange'),
    cashCreditInterestRateInput = document.getElementById('cashCreditInterestRateInput'),
    cashCreditInterestRateRange = document.getElementById('cashCreditInterestRateRange'),
    displayFixedPaymentResult = document.getElementById('displayFixedPaymentResult'),

    valueFromCashCreditLoan,
    valueFromCashCreditTerm,
    valueFromCashCreditInterestRat;

    cashCreditLoanInput.addEventListener('change', (value) => {
        console.log(value.target.value);
    });
    cashCreditLoanRange.addEventListener('change', (value) => {
        console.log(value.target.value);
    });

    cashCreditTermInput.addEventListener('change', (value) => {
        console.log(value.target.value);
    });
    cashCreditTermRange.addEventListener('change', (value) => {
        console.log(value.target.value);
    });

    cashCreditInterestRateInput.addEventListener('change', (value) => {
        console.log(value.target.value);
    });
    cashCreditInterestRateRange.addEventListener('change', (value) => {
        console.log(value.target.value);
    });

