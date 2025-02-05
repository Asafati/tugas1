function climbStairs(n: number): number {
    if (n === 1) return 1;
    if (n === 2) return 2;

    let first: number = 1;
    let second: number = 2;

    for (let i = 3; i <= n; i++) {
        let temp: number = first + second;
        first = second;
        second = temp;
    }

    return second;
}

// Contoh penggunaan
const n: number = parseInt(prompt("Masukkan jumlah langkah: ") || "0");
console.log(climbStairs(n));
