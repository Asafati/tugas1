function isPalindrome(x: number): boolean {
    // Jika x negatif atau x berakhiran 0 tetapi bukan 0 itu sendiri, bukan palindrome
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let reversedHalf: number = 0;
    let originalX: number = x;

    while (x > reversedHalf) {
        reversedHalf = reversedHalf * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    // Jika x sudah lebih kecil atau sama dengan reversedHalf, berarti palindrome
    return x === reversedHalf || x === Math.floor(reversedHalf / 10);
}

// Contoh penggunaan
const x: number = parseInt(prompt("Masukkan angka: ") || "0");
console.log(isPalindrome(x));
