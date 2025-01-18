import { getImportedData } from './dataManager.js';  
import generateDB from './generateDB.js'; 

export function setupSearch() {
    const searchInput = document.getElementById('search');  // Get the search input field

    searchInput.addEventListener('input', () => {
        const searchValue = searchInput.value.trim().toLowerCase();  // Get search input value, make it lowercase
        const data = getImportedData(); 

        // If no search term, display all data
        if (!searchValue) {
            generateDB(data);  // Regenerate divs with the original data
            return;
        }

        // Filter the data based on search term (search through Pesel, Surname)
        const filteredData = data.filter(item => {
            return (
                item.Pesel.includes(searchValue) ||
                item.Nazwisko.toLowerCase().includes(searchValue)
            );
        });

        // Regenerate the divs with filtered data
        generateDB(filteredData);
    });
}
