class Person:
    def __init__(self,name):
        self.name=name
    def talk(self):
        print(f"{self.name} talk")


umer = Person("umer amir")
umer.talk()

ali = Person("Ali Umer")
ali.talk()