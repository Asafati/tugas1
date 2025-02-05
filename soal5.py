def angryProfessor(k, a):
    # Hitung jumlah siswa yang datang tepat waktu atau lebih awal (a[i] <= 0)
    on_time_students = sum(1 for arrival in a if arrival <= 0)

    # Jika jumlah siswa yang datang tepat waktu >= k, kelas tidak dibatalkan
    return "NO" if on_time_students >= k else "YES"

# Contoh penggunaan
if __name__ == "__main__":
    t = int(input("Masukkan jumlah test case: ").strip())

    for _ in range(t):
        n, k = map(int, input().split())  # Baca n (jumlah siswa) dan k (batas minimal siswa hadir)
        a = list(map(int, input().split()))  # Baca daftar kedatangan siswa

        print(angryProfessor(k, a))
