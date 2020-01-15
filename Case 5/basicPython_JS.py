import random
import math


def c1():
    # Даны стороны прямоугольника a и b. Найти его площадь S = a·b и периметр P = 2·(a + b).
    a = int(input("a = "))
    b = int(input("b = "))
    p = 2 * (a + b)
    print("Case1\nS = " + str(s) + "; P = " + str(p))


def c2():
    # Даны три целых числа. Найти количество положительных чисел в исходном наборе.
    list_ = [1, -1, 1]
    count = 0
    for i in range(len(list_)):
        if list_[i] > 0:
            count += 1
    print("Case2\nКоличество положительных чисел:" + str(count))


def c3():
    # Дано целое число в диапазоне 1–7.
    # Вывести строку — название дня недели, соответствующее данному числу (1 — «понедельник», 2 — «вторник» и т. д.).
    day_number = int(input("День недели по счёту: "))
    if day_number == 1:
        print("Понедельник")
    elif day_number == 2:
        print("Вторник")
    elif day_number == 3:
        print("Среда")
    elif day_number == 4:
        print("Четверг")
    elif day_number == 5:
        print("Пятница")
    elif day_number == 6:
        print("Суббота")
    elif day_number == 7:
        print("Воскресенье")
    else:
        print("Такого дня недели не существует")


def c4():
    # Даны целые числа K и N (N > 0). Вывести N раз число K
    k = input("k = ")
    n = int(input("n (n > 0) = "))
    if n > 0:
        print(str(k) * n)
    else:
        print("n < 0")


def c5():
    # Даны положительные числа A и B (A > B).
    # На отрезке длины A размещено максимально возможное количество отрезков длины B (без наложений).
    # Не используя операции умножения и деления, найти длину незанятой части отрезка A.
    a = float(input("a (a > 0) ="))
    if a > 0:
        b = float(input("b (b > 0) ="))
        if b > 0:
            i = a
            while i > b:
                l = i - b
                i -= b
            print("Длина незанятой части отрезка = " + str(l))
        else:
            print("b not > 0")
    else:
        print("a not > 0")


def sign(x):
    if x < 0:
        return -1
    elif x == 0:
        return 0
    elif x > 0:
        return 1
    else:
        print("Error")


def c6():
    a = float(input("a = "))
    b = float(input("b = "))
    sum_ = sign(a) + sign(b)
    print("sum_ = " + str(sum_))


def c7():
    n = int(input("n (n > 0) = "))
    if n > 0:
        list_ = []
        for i in range(n):
            list_.append(random.randint(0, 100))
        print(list_)
        print("max: " + str(max(list_)) + "\nmin: " + str(min(list_)))
    else:
        print("n not > 0")


def c8():
    n = int(input("n (n > 1) = "))
    if n > 1:
        a = float(input("a = "))
        d = float(input("d = "))
        list_ = []
        for i in range(n):
            list_.append(a + i * d)
        print(list_)
    else:
        print("n not > 1")


def c9():
    # Дан массив A размера N и целое число K (1 ≤ K ≤ N).
    # Преобразовать массив, увеличив каждый его элемент на исходное значение элемента AK.
    n = int(input("n (n > 0) = "))
    k = int(input("k (1 <= k <= n) = "))
    if n > 0:
        if 1 <= k <= n:
            a = []
            for i in range(n):
                a.append(random.randint(0, 100))
            print(a)
            ak = a[k - 1]
            print(ak)
            for i in range(len(a)):
                a[i] += ak
            print(a)
        else:
            print("k not 1 <= k <= n")
    else:
        print("n not > 0")


def c10():
    # Дана строка. Подсчитать количество содержащихся в ней цифр.
    string_ = str(input("Input string: "))
    if len(string_) > 0:
        count = 0
        for i in range(len(string_)):
            if string_[i].isdigit():
                print(string_[i])
                count += 1
        print("Num of digits:" + str(count))
    else:
        print("There is empty string")


class Сircle:
    def __init__(self, x=0, y=0, r=0, p=0, s=0):
        self.x = x
        self.y = y
        self.r = r
        self.p = p
        self.s = s

    def setCenterX(self):
        self.x = float(input("Input centerX: "))

    def setCenterY(self):
        self.y = float(input("Input centerY: "))

    def setRadius(self):
        self.r = float(input("Input radius: "))

    def calcCircleLength(self):
        self.p = 2 * math.pi * self.r;
        print("Circle length: " + str(self.p))

    def calcSquare(self):
        self.s = math.pi * self.r ** 2
        print("Circle square:" + str(self.s))

    def pointInside(self):
        px = float(input("Point's x: "))
        py = float(input("Point's y: "))

        ps = (px - self.x) ** 2 + (py - self.y)

        if (ps ** 2) <= (self.r ** 2):
            print("Point is inside of the circle")
        else:
            print("Point is outside of the circle")


def c11():
    circle = Сircle()
    print(circle)
    print(circle.x)
    print(circle.y)
    print(circle.r)
    circle.setCenterX()
    circle.setCenterY()
    circle.setRadius()
    circle.calcCircleLength()
    circle.calcSquare()
    circle.pointInside()
    print(circle.p)
    print(circle.s)


# c1()
# c2()
# c3()
# c4()
# c5()
# c6()
# c7()
# c8()
# c9()
# c10()
c11()
