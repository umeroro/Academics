class university:
    def name(name):
        print(f"My name is {name}")

    def roll(roll):
        print(f"My Roll is {roll}")

class staff(university):
    def teacher(teach_name):
        print(f"My teacher name is {teach_name}")


s1 = staff
s1.name("--")
s1.roll("--")
s1.teacher("---")