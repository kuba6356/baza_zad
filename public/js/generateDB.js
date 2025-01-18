export default function generateDB(data) {
    const container = document.querySelector("#container");
    container.innerHTML = ""; // Clear existing content in the container

    const columnMapping = {
        checkbox: "checkbox",
        index: "Index",
        name: "Imie",
        surname: "Nazwisko",
        address: "Adres",
        pesel: "Pesel",
        gender: "Płeć"
    };

    // Generate divs for each column
    for (const column in columnMapping) {
        const columnDiv = document.createElement("div");
        columnDiv.classList.add(column);

        // Add black div as header placeholder with column name
        const blackDiv = document.createElement("div");
        blackDiv.classList.add(column, "black", "DB_value");
        blackDiv.textContent = columnMapping[column]; // Set column name as text
        columnDiv.appendChild(blackDiv);

        // Add data divs for each entry
        data.forEach(item => {
            const valueDiv = document.createElement("div");
            valueDiv.classList.add(column, "DB_value");
            if (column === "checkbox") {
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.setAttribute("id", `${item[columnMapping["index"]]}`)
                valueDiv.appendChild(checkbox);
            } else {
                valueDiv.textContent = item[columnMapping[column]] || ""; // Fallback to empty string if undefined
            }

            columnDiv.appendChild(valueDiv);
        });

        container.appendChild(columnDiv);
    }
}
