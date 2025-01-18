import { addDataEntry } from './dataManager.js';

// Function to handle the addition of new entries
function addNewEntry() {

    // Get form inputs
    const index = document.getElementById('index').value.trim();
    const imie = document.getElementById('imie').value.trim();
    const nazwisko = document.getElementById('nazwisko').value.trim();
    const adres = document.getElementById('adres').value.trim();
    const pesel = document.getElementById('pesel').value.trim();
    const plec = document.querySelector('input[name="plec"]:checked').value;

    // Validate that fields are not empty
    if (!index || !imie || !nazwisko || !adres || !pesel || !plec) {
        alert('All fields must be filled out.');
        return;
    }

    // Validate if Pesel has 11 digits
    const peselPattern = /^[0-9]{11}$/;
    if (!peselPattern.test(pesel)) {
        alert('PESEL number must be 11 digits.');
        return;
    }
    // Validate if Pesel meets the requirements
    let peselSum = (1*pesel[0]+3*pesel[1]+7*pesel[2]+9*pesel[3]+1*pesel[4]+3*pesel[5]+7*pesel[6]+9*pesel[7]+1*pesel[8]+3*pesel[9])%10
    if((10 - peselSum) != pesel[10]){
        alert('Invalid Pesel.');
        return; 
    }

    // Prepare the new entry object
    const newEntry = {
        Index: parseInt(index),
        Imie: imie,
        Nazwisko: nazwisko,
        Adres: adres,
        Pesel: pesel,
        Płeć: plec
    };

    // Add the new entry to the imported data
    addDataEntry(newEntry);

    // Reset the form
    document.getElementById('addForm').reset();

    // Hide the form after submission
    document.getElementById('formContainer').style.display = 'none';
    document.querySelector("body").classList.toggle("hideScroll")
}

document.getElementById('add').addEventListener('click', () => {
    // Show the form when the "Add" button is clicked
    document.getElementById('formContainer').style.display = 'block';
    document.querySelector("body").classList.toggle("hideScroll");
});

export {addNewEntry}
