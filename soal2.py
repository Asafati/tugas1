def gradingStudents(grades):
    rounded_grades = []
    
    for grade in grades:
        if grade < 38:
            rounded_grades.append(grade)  # Tidak dibulatkan karena kurang dari 38
        else:
            next_multiple_of_5 = (grade // 5 + 1) * 5
            if next_multiple_of_5 - grade < 3:
                rounded_grades.append(next_multiple_of_5)  # Dibulatkan ke kelipatan 5 terdekat
            else:
                rounded_grades.append(grade)  # Tidak dibulatkan
            
    return rounded_grades

# Contoh penggunaan
if __name__ == "__main__":
    n = int(input("Masukkan jumlah siswa: "))
    grades = [int(input()) for _ in range(n)]
    
    result = gradingStudents(grades)
    for grade in result:
        print(grade)
