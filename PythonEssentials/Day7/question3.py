list1 = [(1,2,3),[1,2],['a','hit','less']]

list2 = []

for i in list1:
    list2.extend(i)

print(list2)
