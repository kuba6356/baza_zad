import { getImportedData, setImportedData } from './dataManager.js';

export function deleteFromDB() {
    let importedData = getImportedData();
    // Find the checked checkboxes and remove the corresponding entries
    const checkboxes = document.querySelectorAll('.checkbox input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
        console.log(checkbox.id)
        // Find the index of the entry to remove
        const rowIndex = checkbox.id;  // Assuming each row div has a data-index attribute
        console.log(rowIndex)
        const indexToDelete = parseInt(rowIndex, 10);
        console.log(indexToDelete)
        
        // Remove the entry
        const dataIndex = importedData.findIndex(item => item.Index === indexToDelete);
        console.log(dataIndex)
        if (dataIndex !== -1) {
            importedData.splice(dataIndex, 1);
        }
    });

    // Update the global data manager after deletion
    setImportedData(importedData);
}
