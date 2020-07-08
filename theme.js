const theme = document.getElementById('themeAppButton'),
      textLight = document.getElementsByClassName('text-light'),
      inputs = document.getElementsByClassName('form-control'),
      body = document.getElementsByTagName('body');


theme.addEventListener('click', () => { 
    // textLight.forEach(element => {
        
    // });
    [...textLight].forEach(el => { 
        if(el.classList.contains('text-light')) {
            el.classList.remove('text-light');
            el.classList.add('text-dark');
        } else {
            el.classList.remove('text-dark');
            el.classList.add('text-light');
        }
    });
    [...inputs].forEach(el => {
        if(el.classList.contains('form-control')) {
            el.classList.add('bg-dark');
            el.classList.remove('bg-light');
            el.classList.add('text-light')
            el.classList.remove('text-dark');
        } else {
            el.classList.remove('bg-dark');
            el.classList.add('bg-light');
            el.classList.add('text-dark')
            el.classList.remove('text-light')
        }
    });
    [...body].forEach(el => {
        if(el.classList.contains('bg-gradient')) {
            el.classList.remove('bg-gradient')
            el.classList.add('bg-light');
        } else {
            el.classList.add('bg-gradient')
            el.classList.remove('bg-light');
        }
    })   
})