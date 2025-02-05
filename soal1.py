def countingValleys(steps, path):
    sea_level = 0
    valleys = 0
    current_level = 0

    for step in path:
        if step == 'U':
            current_level += 1
        else:
            current_level -= 1

        # Jika naik ke level 0 dari bawah, berarti baru saja keluar dari lembah
        if current_level == 0 and step == 'U':
            valleys += 1

    return valleys

# Contoh penggunaan
if __name__ == "__main__":
    steps = int(input("Masukkan jumlah langkah: "))
    path = input("Masukkan jalur pendakian: ").strip()
    print(countingValleys(steps, path))
