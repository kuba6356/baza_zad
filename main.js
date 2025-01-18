import generateDB from './public/js/generateDB.js';
import { mergeSort, createHashMap } from './public/js/sort.js';
import { deleteFromDB } from './public/js/deleteFromDB.js';
import { addNewEntry } from './public/js/addToDB.js'; 
import { setImportedData, getImportedData, addDataEntry, deleteDataEntry } from './public/js/dataManager.js'; 
import { setupSearch } from './public/js/search.js';

const container = document.getElementById('container');
const importInput = document.getElementById('import');

// Function to handle file import
function handleFileImport(event) {
    const file = event.target.files[0];
    
    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {
        try {
            const data = JSON.parse(e.target.result);
            console.log('Data imported:', data);

            // Set the imported data using setImportedData
            setImportedData(data);

            // After importing the data, generate the divs
            generateDB(getImportedData());  // Use getImportedData to get the updated data
        } catch (err) {
            alert('Error parsing the JSON file');
        }
    };

    reader.readAsText(file);
}

// Handle sorting
document.getElementById('sort').addEventListener('change', function (event) {
    const data = getImportedData(); // Get the current data

    if (data.length === 0) {
        alert('Please import a file first.');
        return;
    }

    const sortValue = event.target.value;

    // Parse sort value and determine sorting key and order
    let key = 'Index';
    let ascending = true;

    if (sortValue.startsWith('Surname')) {
        key = 'Nazwisko';
        ascending = sortValue.endsWith('l-h');
    } else if (sortValue.startsWith('ID')) {
        key = 'Index';
        ascending = sortValue.endsWith('l-h');
    }

    // Sort the data
    const sortedData = mergeSort(data, key, ascending);

    //Create a hashmap for quick lookups
    const hashMap = createHashMap(sortedData, key);
    console.log('HashMap:', hashMap);

    // Update the data with the sorted version
    setImportedData(sortedData);

    // Regenerate the divs based on the sorted data
    generateDB(getImportedData());
});

// Add the event listener to handle file import
importInput.addEventListener('change', handleFileImport);

//Delete selected items
document.querySelector("#delete").addEventListener("click", () => {
    deleteFromDB();

    // After deletion, regenerate the divs with the updated data
    generateDB(getImportedData());
});

//export the modified JSON
document.querySelector("#export").addEventListener("click", () => {
    const data = getImportedData();

    if (data.length === 0) {
        alert('No data available to export.');
        return;
    }

    // Convert the data to JSON and download it
    const dataStr = JSON.stringify(data, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "exported_data.json";
    link.click();
});

// Event listener for adding new entry
document.getElementById('submitAdd').addEventListener('click', () => {
    addNewEntry(); // Call the addNewEntry function to add the new data
    generateDB(getImportedData());
});

// Initialize search functionality
setupSearch();
