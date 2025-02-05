function plusMinus(arr: number[]): void {
    const n: number = arr.length;
    
    const positive: number = arr.filter(x => x > 0).length / n;
    const negative: number = arr.filter(x => x < 0).length / n;
    const zero: number = arr.filter(x => x === 0).length / n;

    // Print hasil dengan 6 angka setelah koma
    console.log(positive.toFixed(6));
    console.log(negative.toFixed(6));
    console.log(zero.toFixed(6));
}

// Contoh penggunaan
const n: number = parseInt(prompt("Masukkan ukuran array: ") || "0");
const arr: number[] = prompt("Masukkan elemen array (dipisah spasi): ")?.split(" ").map(Number) || [];

plusMinus(arr);
