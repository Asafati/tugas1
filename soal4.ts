function staircase(n: number): void {
    for (let i = 1; i <= n; i++) {
        console.log(" ".repeat(n - i) + "#".repeat(i));
    }
}

// Contoh penggunaan
const n: number = 6;
staircase(n);
