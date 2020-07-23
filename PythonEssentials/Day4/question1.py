string = "what we think we become; we are Python programmer"
substing = 'z'
i = 0
result = ''
while(True):
    i = string.find(substing,i+1)
    if(i==-1):
        break
    result += str(i)+" "

if(len(result)):
    print(f"The occurence of substring '{substing}' are at {result.strip().replace(' ',',')}") 

else:
    print(f"The substring '{substing}' is not present")
    
