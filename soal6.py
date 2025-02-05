def birthdayCakeCandles(candles):
    tallest = max(candles)  # Cari tinggi lilin tertinggi
    return candles.count(tallest)  # Hitung jumlah lilin dengan tinggi tersebut

# Contoh penggunaan
if __name__ == "__main__":
    n = int(input("Masukkan jumlah lilin: ").strip())
    candles = list(map(int, input().split()))
    print(birthdayCakeCandles(candles))
