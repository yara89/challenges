#  list all the numbers between 1 and 1000
# that are multiples of 3 or 5
result = 0
for i in range(1, 1000):
    if (i % 3 == 0 or i % 5 == 0):
#Find the sum of all the numbers
        result = result + i
print(result)
