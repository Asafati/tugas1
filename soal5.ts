function angryProfessor(k: number, a: number[]): string {
    // Hitung jumlah siswa yang datang tepat waktu atau lebih awal (a[i] <= 0)
    const onTimeStudents = a.filter(arrival => arrival <= 0).length;

    // Jika jumlah siswa yang datang tepat waktu >= k, kelas tidak dibatalkan
    return onTimeStudents >= k ? "NO" : "YES";
}

// Contoh penggunaan
const testCases: number = parseInt(prompt("Masukkan jumlah test case: ") || "0");

for (let i = 0; i < testCases; i++) {
    const [n, k] = prompt("Masukkan jumlah siswa dan batas minimal hadir: ")?.split(" ").map(Number) || [0, 0];
    const a: number[] = prompt("Masukkan daftar kedatangan siswa: ")?.split(" ").map(Number) || [];

    console.log(angryProfessor(k, a));
}
