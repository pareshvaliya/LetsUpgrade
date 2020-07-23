import math

number  = int(input("Enter a Number : "))
isprime = True

for i in range(2,int(math.sqrt(number)+1)):
    if(number % i == 0):
        isprime = False


if(isprime):
    print(f'The number {number} is a Prime number')

else:
    print(f'The number {number} is not a Prime number')
