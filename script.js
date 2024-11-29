// Variabel 1: Checkbox
const checkbox = document.querySelector('.checkbox'); // Hämta checkbox med querySelector
console.log("Checkbox:", checkbox); // Kontrollera i konsolen

// Variabel 2: Alla textfält
const textFields = document.getElementsByClassName('textfield'); // Hämta alla textfält med klassen "textfield"
console.log("Textfält:", textFields); // Kontrollera i konsolen

// Variabel 3: Knappen
const button = document.getElementById('submit-button'); // Hämta knappen via id
console.log("Knapp:", button); // Kontrollera i konsolen

// Variabel 4: Div-elementet
const emptyDiv = document.querySelector('#empty-div'); // Hämta div via id med querySelector
console.log("Div-element:", emptyDiv); // Kontrollera i konsolen

// Eventlyssnare för knappen
button.addEventListener('click', () => {
    // Läs värden från input-fält
    const colorValue = document.getElementById('color').value;
    const contentValue = document.getElementById('content').value;
    const isStyled = checkbox.checked; // Kolla om checkbox är markerad

    // Kontrollera om textfältet är tomt
    if (contentValue.trim() === "") {
        emptyDiv.textContent = "Inget innehåll angivet!";
        emptyDiv.style.backgroundColor = "transparent";
    } else {
        // Uppdatera div med text och eventuell stil
        emptyDiv.textContent = contentValue;
        emptyDiv.style.backgroundColor = isStyled ? colorValue : "transparent";
    }
});