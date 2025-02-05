function gradingStudents(grades: number[]): number[] {
    let roundedGrades: number[] = [];

    for (let grade of grades) {
        if (grade < 38) {
            roundedGrades.push(grade); // Tidak dibulatkan karena kurang dari 38
        } else {
            let nextMultipleOf5 = Math.ceil(grade / 5) * 5;
            if (nextMultipleOf5 - grade < 3) {
                roundedGrades.push(nextMultipleOf5); // Dibulatkan ke kelipatan 5 terdekat
            } else {
                roundedGrades.push(grade); // Tidak dibulatkan
            }
        }
    }

    return roundedGrades;
}

// Contoh penggunaan
const grades: number[] = [73, 67, 38, 33];
const result = gradingStudents(grades);
console.log(result); // Output: [75, 67, 40, 33]
