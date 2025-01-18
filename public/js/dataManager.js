let importedData = [];

// Function to get the current imported data
export function getImportedData() {
    return importedData;
}

// Function to set the imported data
export function setImportedData(data) {
    importedData = data;
}

// Function to add a new entry to the data
export function addDataEntry(entry) {
    importedData.push(entry);
}

// Function to delete an entry from the data by Index
export function deleteDataEntry(index) {
    const dataIndex = importedData.findIndex(item => item.Index === index);
    if (dataIndex !== -1) {
        importedData.splice(dataIndex, 1);
    }
}
