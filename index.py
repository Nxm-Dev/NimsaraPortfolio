numList = [18,25,2,78,89,54,36]
ascendingArray = []
minNum = numList[0]

while len(numList)>0:
    for i in numList:
        if i<minNum:
            minNum = i
    ascendingArray.append(minNum)
    numList.remove(minNum)
    if len(numList)>0:
        minNum = numList[0]
    

print(ascendingArray)



