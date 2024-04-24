secret_number = 5
count = 0
while(count<3):
    guess = int(input("Guess : "))
    if guess == secret_number:
        print("Correct")
        break
    else:
        print("Wrong")
    count=count+1
else:
    print("Sorry You are Failed")