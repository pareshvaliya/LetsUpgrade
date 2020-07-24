list1 = [10,20,40,60,70,80]
list2 = [5,15,25,35,45,60]

list3 = []

len1 = len(list1)
len2 = len(list2)

i = 0
j = 0

while(i < len1 and j < len2):
    if(list1[i] < list2[j]):
        list3.append(list1[i])
        i = i + 1
    else:
        list3.append(list2[j])
        j = j + 1

if(i != len1):
    while(i < len1):
        list3.append(list1[i])
        i += 1

if(j != len2):
    while(j < len2):
        list3.append(list2[j])
        j += 1

print("The final sorted list is",list3) 
    
