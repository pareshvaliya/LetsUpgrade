string = "what we think we become; we are Python programmer"
substing = 'w'
i = 0
result = ''
while(True):
    i = string.find(substing,i)
    if(i==-1):
        break
    result += str(i)+","
    i = i+1

if(len(result)):
    print(f"The substring '{substing}' occures at {result.strip(',')}.") 

else:
    print(f"The substring '{substing}' is not present")
    
