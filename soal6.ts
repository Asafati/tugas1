function birthdayCakeCandles(candles: number[]): number {
    const tallest = Math.max(...candles); // Cari tinggi lilin tertinggi
    return candles.filter(candle => candle === tallest).length; // Hitung jumlah lilin tertinggi
}

// Contoh penggunaan
const number = parseInt(prompt("Masukkan jumlah lilin: ") || "0");
const candles: number[] = prompt("Masukkan tinggi lilin (dipisah spasi): ")?.split(" ").map(Number) || [];

console.log(birthdayCakeCandles(candles));
