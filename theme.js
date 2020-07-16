const theme = document.getElementById('themeAppButton'),
      textLight = document.getElementsByClassName('text-light'),
      inputs = document.getElementsByClassName('form-control'),
      body = document.getElementsByTagName('body'),
      inputGroupText = document.getElementsByClassName('input-group-text');

theme.addEventListener('click', () => { 
    if(textLight.length > 10) {
        [...textLight].forEach(el => {
            el.classList.remove('text-light');
            el.classList.add('text-dark');
        });
    } else {
        textDark = document.getElementsByClassName('text-dark');
        [...textDark].forEach(el => {
            el.classList.remove('text-dark');
            el.classList.add('text-light');
        })
    }
    [...inputs].forEach(el => {
        if(el.classList.contains('bg-white')) {
            el.classList.add('bg-dark');
            el.classList.remove('bg-white');
            el.classList.add('text-white')
            el.classList.remove('text-dark');
        } else {
            el.classList.remove('bg-dark');
            el.classList.add('bg-white');
            el.classList.add('text-dark')
            el.classList.remove('text-white')
        }
    });
    [...body].forEach(el => {
        if(el.classList.contains('bg-gradient')) {
            el.classList.remove('bg-gradient')
            el.classList.add('bg-white');
        } else {
            el.classList.add('bg-gradient')
            el.classList.remove('bg-white');
        }
    });
    [...inputGroupText].forEach(el => {
        if(el.classList.contains('bg-white')) {
            el.classList.remove('bg-white');
            el.classList.add('bg-dark');
            el.classList.remove('text-dark');
            el.classList.add('text-white');
        } else {
            el.classList.remove('bg-dark');
            el.classList.add('bg-white');
            el.classList.remove('text-white');
            el.classList.add('text-dark');
        }
    }); 
})