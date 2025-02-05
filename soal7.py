def plusMinus(arr):
    n = len(arr)
    positive = len([x for x in arr if x > 0]) / n
    negative = len([x for x in arr if x < 0]) / n
    zero = len([x for x in arr if x == 0]) / n

    # Print hasil dengan 6 angka setelah koma desimal
    print(f"{positive:.6f}")
    print(f"{negative:.6f}")
    print(f"{zero:.6f}")

# Contoh penggunaan
if __name__ == "__main__":
    n = int(input("Masukkan ukuran array: ").strip())
    arr = list(map(int, input().split()))
    plusMinus(arr)
