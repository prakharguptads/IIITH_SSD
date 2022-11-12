#  1st
import csv
l = []
with open('lab_11_data.csv') as file:
    reader = csv.reader(file)
    for row in reader:
        l.append(row[0:7])

#  2nd
del l[0]
new_l = list(filter(lambda x: False if float(x[-1]) < -3 else True, l))
for i in new_l:
    print(i)

# 3rd
avg = lambda op: sum(op)/(len(op))
op=[]
for i in list(new_l):
    print(i)
    op.append(float(i[1].replace(",", "")))

op2=[]
for i in list(new_l):
    op2.append(float(i[2].replace(",", "")))
op3=[]
for i in list(new_l):
    op3.append(float(i[3].replace(",", "")))
h=[op,op2,op3]
print(list(map(avg,h)))

# 4th 
lis=[]
ch = input("Enter a char: ")
for i in new_l:
    if(i[0][0] == ch.upper()):
        lis.append(i)

#  5th
f = open("avg_output.txt", "w")
for i in list(map(avg,h)):
    f.write(str(i)+"\n")
f.close()

f = open("stock_output.txt", "w")
for i in lis:
    for j in i:
        f.write(str(j)+" , ")
    f.write("\n")
f.close()
