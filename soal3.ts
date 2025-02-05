function camelcase(s: string): number {
    let count = 1; // Minimal ada 1 kata dalam CamelCase

    for (let char of s) {
        if (char >= 'A' && char <= 'Z') { // Cek huruf kapital
            count += 1;
        }
    }

    return count;
}

// Contoh penggunaan
const inputString: string = "saveChangesInTheEditor";
console.log(camelcase(inputString)); // Output: 5
