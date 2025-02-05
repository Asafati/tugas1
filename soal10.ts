function twoSum(nums: number[], target: number): number[] {
    let numMap: Map<number, number> = new Map();

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (numMap.has(complement)) {
            return [numMap.get(complement)!, i];
        }
        numMap.set(nums[i], i);
    }

    return []; // Harusnya tidak terjadi karena diasumsikan ada satu solusi
}

// Contoh penggunaan
const inputNums: string | null = prompt("Masukkan angka dalam array (dipisahkan dengan spasi): ");
const target: number = parseInt(prompt("Masukkan target: ") || "0");

if (inputNums) {
    const nums: number[] = inputNums.split(" ").map(Number);
    console.log(twoSum(nums, target));
}
