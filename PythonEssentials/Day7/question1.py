port1 = {21:"FTP",22:"SSH",23:"telnet",80:"http"}

port2 = {}

for k,v in port1.items():
    port2[v] = k
    
print(port2)
