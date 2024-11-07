function generateAndSortNumbers() {
    // Generate a random array of 5 numbers between 1 and 100
    let numbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100) + 1);
    
    // Sort numbers in ascending and descending order
    let ascendingNumbers = [...numbers].sort((a, b) => a - b);
    let descendingNumbers = [...numbers].sort((a, b) => b - a);
    
    // Display the results
    document.getElementById("numbers").innerHTML = `
        <p>Original Numbers: ${numbers.join(", ")}</p>
        <p>Ascending Order: ${ascendingNumbers.join(", ")}</p>
        <p>Descending Order: ${descendingNumbers.join(", ")}</p>
    `;
}
