def isPalindrome(x):
    # Jika x negatif atau x berakhiran 0 tetapi bukan 0 itu sendiri, bukan palindrome
    if x < 0 or (x % 10 == 0 and x != 0):
        return False

    reversed_half = 0
    while x > reversed_half:
        reversed_half = reversed_half * 10 + x % 10
        x //= 10

    # Jika x sudah lebih kecil atau sama dengan reversed_half, berarti palindrome
    return x == reversed_half or x == reversed_half // 10

# Contoh penggunaan
if __name__ == "__main__":
    x = int(input("Masukkan angka: ").strip())
    print(isPalindrome(x))
