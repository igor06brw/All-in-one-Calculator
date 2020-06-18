// const mortgage = document.getElementById('mortgage');
// const menu = document.querySelector('.menu');

// mortgage.addEventListener('click', displayCalc);

// function displayCalc() {
//     menu.style.display="none";
// }

let debtValue = document.getElementById('debtValue');
let debtRange = document.getElementById('debtRange');
let termValue = document.getElementById('termValue');
let termRange = document.getElementById('termRange');
let interestRateValue = document.getElementById('interestRateValue');
let interestRateRange = document.getElementById('interestRateRange');
let displayResult = document.getElementById('displayResult');
let fixedOption = document.getElementById('forFixedMortgage');






let valueFromDebt;
let valueFromTerm;
let valueFromInterestRate;


let debtFunc = (param) => {
    debtValue.value = param.target.value;
    debtRange.value = param.target.value;
    if(debtValue.value == debtRange.value) {
        valueFromDebt = parseFloat(param.target.value).toFixed(2);
    }
}
let termFunc = (param) => {
    termValue.value = param.target.value;
    termRange.value = param.target.value;
    if(termValue.value == termRange.value) {
        valueFromTerm = parseFloat(param.target.value).toFixed(2);
    }
}
let interestRateFunc = (param) => {
    interestRateValue.value = param.target.value;
    interestRateRange.value = param.target.value;
    if(interestRateValue.value == interestRateRange.value) {
        valueFromInterestRate = parseFloat(param.target.value).toFixed(2);
    }
}

termValue.addEventListener('change', (value) => {
    termFunc(value);
    displayResult.addEventListener('change', calculateMortage());
});
termRange.addEventListener('click',(value) => {
    termFunc(value);
    displayResult.addEventListener('change', calculateMortage());
});


debtValue.addEventListener('change', (value) => {
    debtFunc(value);
    displayResult.addEventListener('change', calculateMortage());
});
debtRange.addEventListener('click',(value) => {
    debtFunc(value);
    displayResult.addEventListener('change', calculateMortage());
});


interestRateValue.addEventListener('change', (value) => {
    interestRateFunc(value);
    displayResult.addEventListener('change', calculateMortage());
});
interestRateRange.addEventListener('click',(value) => {
    interestRateFunc(value);
    displayResult.addEventListener('change', calculateMortage());
});


let calculateFixedMortage = () => {

    if(valueFromDebt > 0 && valueFromInterestRate > 0 && valueFromTerm > 0) {
        let q = Number(1+(valueFromInterestRate / 100).toFixed(4) / 12);
        let R = (valueFromDebt*(Math.pow(q, (valueFromTerm*12)))*(q-1)/((Math.pow(q, (valueFromTerm*12)))-1)).toFixed(2);

        displayResult.value = R + ' zł';
    }
    
    
    // A– wysokość kredytu
    // b– oprocentowanie w skali roku (stopy procentowe plus marża banku)
    // n– ilość rat do spłaty (okres kredytowania l (jak lata) pomnożony przez m, czyli 12, bo tyle jest miesięcy w roku)
    // R– to będzie wysokość naszej raty
    // C– całkowita kwota do spłaty

    // q=1+(4,7%/12)=1,00392

    // R=A*(q^n)*(q-1)/[(q^n)-1]

}
let calculateDescreasingMortage = () => {
    if(valueFromDebt > 0 && valueFromInterestRate > 0 && valueFromTerm > 0) {
        let q = Number(1+(valueFromInterestRate / 100).toFixed(4) / 12);
        let R = (valueFromDebt*(Math.pow(q, (valueFromTerm*12)))*(q-1)/((Math.pow(q, (valueFromTerm*12)))-1)).toFixed(2);


        let Rk = valueFromDebt / (valueFromTerm * 12);


        displayResult.value = R + ' zł';



        // A– wysokość kredytu
        // b– oprocentowanie w skali roku (stopy procentowe plus marża banku)
        // n– ilość rat do spłaty (okres kredytowania l (jak lata) pomnożony przez m, czyli 12, bo tyle jest miesięcy w roku)
        // R– to będzie wysokość naszej raty
        // C– całkowita kwota do spłaty

        // q=1+(4,7%/12)=1,00392
        
        // R=A*(q^n)*(q-1)/[(q^n)-1]

        // Rata kapitałowa (Rk):
        // Rk=A/n

        // Czyli w naszym przypadku:
        // Rk= 300000/300
        // Rk= 1000

        // Rata odsetkowa (Ro):
        // Ro=[(A-x*Rk)*b]/12

        // Dla pierwszej raty odsetkowej:
        // Ro=[(300000-0*1000)*4,7]/12
        // Ro=(300000*4,7)/12
        // Ro=14100/12
        // Ro=1175

        // Dla drugiej raty odsetkowej:
        // Ro=[(300000-1*1000)*4,75]/12
        // Ro=[(300000-1000)*4,7]/12
        // Ro=(299000*4,7)/12
        // Ro=14053/12
        // Ro=1171,08
        
    }

}
console.log( displayResult.value)
if(displayResult.value == NaN) {
    displayResult.value = 000
}

displayResult.addEventListener('change', calculateFixedMortage());