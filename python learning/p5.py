i = 0
loend = 1
started = False
while(i<loend):
    choice = input("Enter Your Choice : ")
    if choice.lower() == 'help':
        print("""
              start : To Start Car
              stop : To Stop Car
              quit : To quit Game""")
        loend=loend+1
        i=i+1
    elif choice.lower() == 'start':
        if started:
            print("Already started")
        else:
            started=True
            print("Car Started.. Ready to go")
        loend=loend+1
        i=i+1
    elif choice.lower() == 'stop':
        if not started:
            print("Car is already stopped")
        else:
            started=False
            print("Car stopped")
        loend=loend+1
        i=i+1
    elif choice.lower() == 'quit':
        break
    else:
        print("I don't Understand")
        loend=loend+1
        i=i+1