
import re

myFile = open("purple.txt", "r")
myOutput = open("green.txt", "w+")

myList = []

for line in myFile:
    #print line
    #newStr = line.replace("<LI><FONT face", "")
    #newStr = newStr.replace("</FONT>", "")
    #newStr = re.sub(r'^=.*>', "", line)
    #newStr = newStr.lower()
    line = line.strip()
    myList.append(line);
    #print newStr
    #myOutput.write(newStr)

myList = list(set(myList))
myList.sort();

for i in range(len(myList)):
    print(myList[i])
    myOutput.write(myList[i] + "\n")


myFile.close()
myOutput.close()
