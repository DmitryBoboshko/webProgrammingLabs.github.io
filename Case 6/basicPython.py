# If you don’t want characters prefaced by \ to be interpreted as special characters,
# you can use raw strings by adding an r before the first quote

# Вывести третий символ строки
string = "Web development"
print(string[2]);
# Во второй строке выведите предпоследний символ этой строки
print(string[-1])
# В третьей строке выведите первые пять символов этой строки
print(string[0:5])
# В четвертой строке выведите всю строку, кроме последних двух символов
print(string[:-2])
# В пятой строке выведите все символы с четными индексами
# (считая, что индексация начинается с 0, поэтому символы выводятся начиная с первого)
print(string[0::2])
# В шестой строке выведите все символы с нечетными индексами, то есть начиная со второго символа строки
print(string[1::2])
# В седьмой строке выведите все символы в обратном порядке
print(string[::-1])
# В восьмой строке выведите все символы строки через один в обратном порядке, начиная с последнего
print(string[-1::-2])
# В девятой строке выведите длину данной строки
print(len(string))