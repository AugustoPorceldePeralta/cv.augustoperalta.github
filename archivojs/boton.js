
botonjs = document.getElementById('hide-text');
        texto = document.getElementById('text');
        botonjs.addEventListener('click', toggleText);
        function toggleText() {
            texto.classList.toggle('hide');
            if(texto.classList.contains('hide')) {
                botonjs.innerHTML = 'Leer mas';
               
            }
            else {
                botonjs.innerHTML = 'Leer menos';
            }
        }