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
      mortgageResultFixed = document.getElementById('displayFixedResultLabel')

// let words;
let requestURL = "./dictionary.json"
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json'
request.send();
request.onload = function() {
    const words = request.response;

    // translate(words);
}

function translate(words) {
    const polishTranslateBase = words.dictionary.polish,
          englishTranslateBase = words.dictionary.english

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
}





// fetch('./dictionary.json')
//     .then(res => res.json())
//     .then(data => dictionary = data)
//     .then(() => console.log(dictionary[1]))


