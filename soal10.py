def twoSum(nums, target):
    num_map = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_map:
            return [num_map[complement], i]
        num_map[num] = i

# Contoh penggunaan
if __name__ == "__main__":
    nums = list(map(int, input("Masukkan angka dalam array: ").split()))
    target = int(input("Masukkan target: "))
    print(twoSum(nums, target))
