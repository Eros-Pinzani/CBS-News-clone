// Seleziona gli elementi
const burgerMenu = document.querySelector('.burger-menu');
const burgerPopup = document.querySelector('.burger-popup');
const burgerOverlay = document.querySelector('.burger-overlay');
const body = document.body; // Seleziona il body

// Mostra il popup e cambia l'icona in croce
burgerMenu.addEventListener('click', () => {
    const isOpen = burgerMenu.classList.contains('open');
    burgerPopup.scrollTop = 0; // Riporta il popup all'inizio

    if (isOpen) {
        // Chiudi il menu
        burgerPopup.classList.remove('open');
        burgerOverlay.classList.remove('open');
        body.classList.remove('no-scroll'); // Riabilita lo scorrimento del body
        setTimeout(() => {
            burgerPopup.style.display = 'none'; // Nascondi dopo l'animazione
            burgerOverlay.style.display = 'none';
        }, 300); // Tempo della transizione (0.3s)
        burgerMenu.classList.remove('open'); // Rimuovi lo stato "aperto"
    } else {
        // Apri il menu
        burgerPopup.style.display = 'block';
        burgerOverlay.style.display = 'block';
        setTimeout(() => {
            burgerPopup.classList.add('open');
            burgerOverlay.classList.add('open');
        }, 10); // Piccolo ritardo per attivare la transizione
        body.classList.add('no-scroll'); // Disabilita lo scorrimento del body
        burgerMenu.classList.add('open'); // Aggiungi lo stato "aperto"
    }
});