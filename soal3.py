def camelcase(s):
    count = 1  # Minimal ada 1 kata
    for char in s:
        if char.isupper():  # Setiap huruf kapital menandai kata baru
            count += 1
    return count

# Contoh penggunaan
if __name__ == "__main__":
    s = input("Masukkan string CamelCase: ").strip()
    print(camelcase(s))
