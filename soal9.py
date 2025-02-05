def climbStairs(n):
    if n == 1:
        return 1
    if n == 2:
        return 2
    
    first, second = 1, 2
    for i in range(3, n + 1):
        first, second = second, first + second
    return second

# Contoh penggunaan
if __name__ == "__main__":
    n = int(input("Masukkan jumlah langkah: ").strip())
    print(climbStairs(n))
