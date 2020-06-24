let debtValue = document.getElementById('debtValue'),
    debtRange = document.getElementById('debtRange'),
    termValue = document.getElementById('termValue'),
    termRange = document.getElementById('termRange'),
    interestRateValue = document.getElementById('interestRateValue'),
    interestRateRange = document.getElementById('interestRateRange'),
    displayResult = document.getElementById('displayResult'),
    radioTypeOfCalculate = document.getElementById('radioTypeOfCalculate'),
    radioTypeOfTerm = document.getElementById('typeOfTerm'),
    decreasingCheck = document.getElementById('forDescreasingMortgage'),
    displayMinValue = document.getElementById('displayMinResult'),
    displayMaxValue = document.getElementById('displayMaxResult'),
    valueFromDebt,
    valueFromTerm,
    valueFromInterestRate,
    sumOfResult,
    sumOfInterest;
    // valueFromRadio;


console.log(document)

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

radioTypeOfCalculate.addEventListener('change', () => {
    calculateMortage();
});

radioTypeOfTerm.addEventListener('change', () => {
    const isYears = radioTypeOfTerm.children[0].children[0].checked
    if(isYears == true) {
        termRange.step = 5;
        termRange.max = 30;
        termRange.value = 15;
    } else {
        termRange.step = 6;
        termRange.max = 300;
        termRange.value = 120;
    }
})




let displayInputs = () => {
    
    console.log(displayMinValue.parentElement.parentElement);
    if(decreasingCheck.checked == false) { 
        displayMinValue.parentElement.parentElement.classList.add("non-display-form");
        displayMaxValue.parentElement.parentElement.classList.add("non-display-form");
        displayResult.parentElement.classList.remove("non-display-form")
    } else {
        displayResult.parentElement.classList.add("non-display-form")
        displayMinValue.parentElement.parentElement.classList.remove("non-display-form");
        displayMaxValue.parentElement.parentElement.classList.remove("non-display-form");
    }
}


let calculateMortage = () => {
    if(valueFromDebt > 0 && valueFromInterestRate > 0 && valueFromTerm > 0) {

        if(decreasingCheck.checked == false) {
            displayInputs();
            const termByMonths = (valueFromTerm*12);
            let sumOfResults = 0;
            const q = Number(1+(valueFromInterestRate / 100).toFixed(4) / 12);
            const R = (valueFromDebt*(Math.pow(q, termByMonths))*(q-1)/((Math.pow(q, termByMonths))-1));
            
    
            
            for(let i = 0; i < termByMonths; i++) {
                sumOfResults += Number(R);
                sumOfResultFixed = sumOfResults;
            }

            displayResult.value = `${R.toFixed(2)} zł`;
        } else {
        displayInputs();
            const termByMonths = (valueFromTerm*12);
            let sumOfResults = 0;
            let sumOfInterests = 0;
            const q = Number(1+(valueFromInterestRate / 100).toFixed(4) / 12);
            // let R = (valueFromDebt*(Math.pow(q, termByMonths))*(q-1)/((Math.pow(q, termByMonths))-1));
            const Rk = (valueFromDebt / termByMonths);
            const RoMax = ((valueFromDebt - 0 * Rk) * (valueFromInterestRate / 100)) / 12;
            const RoMin = ((valueFromDebt - termByMonths * Rk) * (valueFromInterestRate / 100)) / 12;
            
            
            for(let i = 0; i < termByMonths; i++) {
                const sum = (((valueFromDebt - i * Rk) * (valueFromInterestRate / 100)) / 12)
                sumOfInterests += Number(sum);
                sumOfInterest = sumOfInterests
                
                sumOfResults += Number(Rk + sum);
                sumOfResult = sumOfResults;
                
            }
            displayMinValue.value = `${(Rk + RoMin).toFixed(2)} zł`;
            displayMaxValue.value = `${(Rk + RoMax).toFixed(2)} zł`;
        } 
    }
}
displayResult.addEventListener('click', calculateMortage());


   
    
    // A– wysokość kredytu
    // b– oprocentowanie w skali roku (stopy procentowe plus marża banku)
    // n– ilość rat do spłaty (okres kredytowania l (jak lata) pomnożony przez m, czyli 12, bo tyle jest miesięcy w roku)
    // R– to będzie wysokość naszej raty
    // C– całkowita kwota do spłaty

    // q=1+(4,7%/12)=1,00392

    // R=A*(q^n)*(q-1)/[(q^n)-1]
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
        
// console.log( displayResult.value)