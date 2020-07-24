list1 = [0,1,2,10,4,1,0,56,2,0,1,3,0,56,0,4]
m = max(list1)

def fun(x):
    if(x == 0):
        return m+1
    return x

list1.sort(key = fun)
print(list1)
