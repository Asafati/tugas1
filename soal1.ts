function countingValleys(steps: number, path: string): number {
    let seaLevel = 0;
    let valleys = 0;
    let currentLevel = 0;

    for (let i = 0; i < steps; i++) {
        if (path[i] === 'U') {
            currentLevel++;
            if (currentLevel === 0) {
                valleys++;
            }
        } else {
            currentLevel--;
        }
    }

    return valleys;
}

// Contoh penggunaan:
const steps = 8;
const path = "DDUUUUDD";
console.log(countingValleys(steps, path)); // Output: 1
