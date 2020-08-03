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
    displayFixedPaymentResult = document.getElementById('displayFixedPaymentResult');


    leasingNetPriceInput.addEventListener('change', () => {
        
    })
    leasingNetPriceRange.addEventListener('change', () => {
        
    })

    leasingFirstPaymentInput.addEventListener('change', () => {
        
    })
    leasingFirstPaymentRange.addEventListener('change', () => {
        
    })

    leasingTermInput.addEventListener('change', () => {
        
    })
    leasingTermRange.addEventListener('change', () => {
        
    })

    typeOfTerm.addEventListener('change', () => {
        
    })

    leasingRedeemPriceInput.addEventListener('change', () => {
        
    })
    leasingRedeemPriceRange.addEventListener('change', () => {
        
    })

    leasingInterestRateInput.addEventListener('change', () => {
        
    })
    leasingInterestRateRange.addEventListener('change', () => {
        
    })

    radiosOfTypePayments.addEventListener('change', () => {
        
    })

    displayNextPaymentResult.addEventListener('change', () => {
    
    })

    displayLastPaymentResult.addEventListener('change', () => {
    
    })

    displayFixedPaymentResult.addEventListener('change', () => {
    
    })

console.log(((((leasingNetPriceInput - leasingFirstPaymentInput) * leasingInterestRateInput) * ((1 + leasingInterestRateInput) ** leasingTermInput) - (leasingRedeemPriceInput * leasingInterestRateInput)) / ((1 + leasingInterestRateInput) ** leasingTermInput) - 1));