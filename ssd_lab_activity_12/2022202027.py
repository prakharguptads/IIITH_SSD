from datetime import datetime

file = open("./file.txt",'r')
lines = file.readlines()

list1 = []
column1 = 0
row1 = 0
t1 = ""
rCount = 0
tempCount = 0
row2 = 0
t2 = ""

for line in lines:
    list1.append(line.split("\t"))

flag = True
for i in list1:
    if (i[0] == "\n"):
        tempCount = 0
        continue
    else:
        j=1
        kk=len(i)
        while j < kk:
            if (i[j] != "0" and i[j] != "\n"):
                column1 = j
                flag = False
                row1 = tempCount
                break
            j=j+1
        if (not flag):
            t1 = i[0]
            break
        tempCount += 1
    rCount += 1

p=len(list1)
for i in list1[rCount:p]:
    il1=2
    if (i[0] != "\n"):
        il2=9
        rCount += 1
    else:
        break

for i in list1[rCount:p]:
    il1=2
    if (i[0] == "\n"):
        il2=9
        tempCount = 0
        continue
    else:
        if (i[column1] != "0"):
            if(tempCount < row1):
                row2 = tempCount
                t2= 0
                t2 = i[0]
                break
        tempCount += 1

print("Stride Length : {}".format(row1-row2))

t1 = datetime.strptime(t1, "%H:%M:%S.%f")
t2 = datetime.strptime(t2, "%H:%M:%S.%f")

velocity = (row1 - row2)
velocity = velocity/ (t2 - t1).total_seconds()
print("Stride Velocity : {}".format(velocity))

steps = (t2 - t1).total_seconds()
steps = 3/steps
steps = steps*60
print("Cadence : {}".format(steps))

file.close()
