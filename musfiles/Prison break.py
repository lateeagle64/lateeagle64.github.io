import random
"""Dead just defines whether or ont the game is over if dead is 0 the game is going if dead is 1 the game is over"""
dead=0
speed=0
escape=0
strength=0
rep=0
money=0
shovel=False
energy=50
def cell():
    global speed,dead,strength,money,rep,energy,shovel,escape
    while dead !=1:
        jumpscare=random.randint(1,100)

        print("\n--- Cell Menu ---")
        print("Enter 1 to go to your cell")
        print("Enter 2 to go to the yard")
        print("Enter 3 to go to the shop")
        action = input("Enter here: ")
        print("")
        if jumpscare==67:
            print("D.Piddy does stuff to you thats not nice")
            dead=1
            break
    
        if action == '1':
            print("You're in your cell.")
            print("Enter 1 to check your stats")
            print("Enter 2 to sleep")
            print("Enter 3 to search for items")
            cell_action=input("Enter here: ")
            print("")
            if cell_action=="1":
                print("--------Stats--------")
                print(f"Your speed is {speed}")
                print(f"Your strength is {strength}")
                print(f"Your money is {money}")
                print(f"Your rep is {rep}")
                print(f"Your energy is {energy} (Max=100)")
                print("")
            if cell_action=="2":
                sleep=random.randint(15,40)
                energy=energy+sleep
                if sleep<20:
                    print("You sleep was awful")
                    print(f"+{sleep} energy")
                    print("")
                if sleep<30 and sleep>21:
                    print("You sleep was Decent")
                    print(f"+{sleep} energy")
                    print("")
                if sleep<37 and sleep>31:
                    print("You sleep was Great")
                    print(f"+{sleep} energy")
                    print("")
                if sleep<41 and sleep>38:
                    print("You sleep was Perfect")
                    print(f"+{sleep} energy")
                    print("")
                
        
        
        elif action == '2':
            print("You're in the yard.")
            print("Enter 1 to workout")
            print("Enter 2 to search for items")
            print("Enter 3 to change locations")
            yard_actions=input("Enter here: ")
            print("")
            if yard_actions=="1":
                    print("Enter 1 to go to treadmills (-10 energy)")
                    print("Enter 2 to go to bench press(-10 energy)")
                    print("Enter 3 to do both(-10 energy)")
                    gym_action=input("Enter here: ")
                    if gym_action=="1":
                        speed=speed+10
                        print("+10 speed!")
                        print(f"Your speed is now {speed}")
                    if gym_action=="2":
                         strength=strength+10
                         print("+10 strength!")
                         print(f"Your strength is now {strength}")
                    if gym_action=="3":
                        speed=speed+5
                        strength=strength+5
                        print("+5 speed!")
                        print(f"Your speed is now {speed}")
                        print("+5 strength!")
                        print(f"Your strength is now {strength}")
                    energy=energy-10
            if yard_actions=="2":
                ransearch=random.randint(1,100)
                print("Where would you search?")
                print("Enter 1 for trash can (-5 energy)")
                print("Enter 2 for grass(-5 energy)")
                print("Enter 3 to dig into the ground to search (-10 energy)(Shovel needed)")
                search_yard=input("Enter here: ")
                if search_yard=="1":
                    print("You searched the trash can and found:")
                    energy=energy-5
                    if ransearch<30 and ransearch>0:
                        print("A chicken nugget(does nothing)")
                    elif ransearch==100:
                        print("You found $10")
                    elif ransearch<100 and ransearch>89:
                        print("You found $1")
                    elif ransearch<90 and ransearch>80:
                        print("The guard catches you and you lose %50 of your money")
                        money=money/2
                        print("")
                        print(f"Your money is now{money}")
                    else:
                        print("You found nothing")
                if search_yard=="2":
                    print("You searched the grass and found:")
                    energy=energy-5
                    if ransearch<30 and ransearch>0:
                        print("A chicken nugget(does nothing)")
                    elif ransearch==100:
                        print("You found $10")
                    elif ransearch<100 and ransearch>89:
                        print("You found $1")
                    elif ransearch<90 and ransearch>80:
                        print("The guard catches you and you lose %50 of your money")
                        money=money/2
                        print("")
                        print(f"Your money is now{money}")
                    else:
                        print("You found nothing")
                if search_yard=="3":
                    if shovel==True:
                        print("You have a shovel!")
                        hours_dig_search=int(input("How many hours do you want to dig for(each hour -15 energy)"))
                        energy_wasted=hours_dig_search*15
                        energy=energy-energy_wasted
        if action=="3":
            print("Welcome to the harrybarry shop")
            print("Enter 1 to buy a shovel ($5)")
            print("Enter 2 to but a sword($5)")
            print("Enter 3 to challenge him to an arm wrestle(20 strength needed or you would lose)")
            shop_act=input("Enter here: ")
            if shop_act=="1":
                shovel=True
                print("You bought a shovel!")
        else: 
            print("Invalid input. Please enter 1,2 or 3.")
        if energy<1:
            print("You exausted yourself to death, You had 0 energy")
            dead=1
        if energy >100:
            energy=100

print("Welcome to Prison Break 2.0")
while dead !=1 or escape !=1:
    cell()



    
