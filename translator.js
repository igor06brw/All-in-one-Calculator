const headerTitle = document.getElementById('headerTitle'),
      headerDescription = document.getElementById('headerDescription'),
      mortgageDebtLabel = document.getElementById('mortgageDebtLabel'),
      mortgageDebtInput = document.getElementById('debtValue'),
      mortgageTermLabel = document.getElementById('mortgageTermLabel')
      mortgageTermInput = document.getElementById('termValue'),
      mortgageInterestRateLabel = document.getElementById('mortgageInterestRateLabel'),
      mortgageInterestRateInput = document.getElementById('interestRateValue'),
      mortgageTermRadioYears = document.getElementById('forYearsOfTermLabel'),
      mortgageTermRadioMonths = document.getElementById('forMonthsOfTermLabel'),
      mortgageFixed = document.getElementById('forFixedMortgageLabel'),
      mortgageDecreasing = document.getElementById('forDescreasingMortgageLabel'),
      mortgageResultMin = document.getElementById('displayMinResultLabel'),
      mortgageResultMax = document.getElementById('displayMaxResultLabel'),
      mortgageResultFixed = document.getElementById('displayFixedResultLabel'),
      translateAppButton = document.getElementById('translateAppButton')

let isEnglish = true;



translateAppButton.addEventListener('click', () => {
    let words;
    let requestURL = "./dictionary.json"
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json'
    request.send();
    request.onload = function() {
        words = request.response;
        translate(words)
    };
})

function translate(words) {
    const polishTranslateBase = words.dictionary.polish,
          englishTranslateBase = words.dictionary.english

    if(isEnglish == true) {
        isEnglish = false;
        headerTitle.textContent = polishTranslateBase.header.title;
        headerDescription.textContent = polishTranslateBase.header.description;
        mortgageDebtLabel.textContent = polishTranslateBase.debt.label;
        mortgageDebtInput.placeholder = polishTranslateBase.debt.placeholder;
        mortgageTermLabel.textContent = polishTranslateBase.term.label;
        mortgageTermInput.placeholder = polishTranslateBase.term.placeholder;
        mortgageInterestRateLabel.textContent = polishTranslateBase.interestRate.label;
        mortgageInterestRateInput.placeholder = polishTranslateBase.interestRate.placeholder;
        mortgageTermRadioYears.textContent = polishTranslateBase.radioTerm.years;
        mortgageTermRadioMonths.textContent = polishTranslateBase.radioTerm.months;
        mortgageFixed.textContent = polishTranslateBase.radioMortgage.fixed;
        mortgageDecreasing.textContent = polishTranslateBase.radioMortgage.decreasing;
        mortgageResultMin.textContent = polishTranslateBase.displayResults.first;
        mortgageResultMax.textContent = polishTranslateBase.displayResults.last;
        mortgageResultFixed.textContent = polishTranslateBase.displayResults.fixed;
    } else {
        isEnglish = true;
        headerTitle.textContent = englishTranslateBase.header.title;
        headerDescription.textContent = englishTranslateBase.header.description;
        mortgageDebtLabel.textContent = englishTranslateBase.debt.label;
        mortgageDebtInput.placeholder = englishTranslateBase.debt.placeholder;
        mortgageTermLabel.textContent = englishTranslateBase.term.label;
        mortgageTermInput.placeholder = englishTranslateBase.term.placeholder;
        mortgageInterestRateLabel.textContent = englishTranslateBase.interestRate.label;
        mortgageInterestRateInput.placeholder = englishTranslateBase.interestRate.placeholder;
        mortgageTermRadioYears.textContent = englishTranslateBase.radioTerm.years;
        mortgageTermRadioMonths.textContent = englishTranslateBase.radioTerm.months;
        mortgageFixed.textContent = englishTranslateBase.radioMortgage.fixed;
        mortgageDecreasing.textContent = englishTranslateBase.radioMortgage.decreasing;
        mortgageResultMin.textContent = englishTranslateBase.displayResults.first;
        mortgageResultMax.textContent = englishTranslateBase.displayResults.last;
        mortgageResultFixed.textContent = englishTranslateBase.displayResults.fixed;
    }
}