lists = [2,3,2,3,5,6,7,7,8]
list1 = []
for x in lists:
    if x not in list1:
        list1.append(x)

print(list1)