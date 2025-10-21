print('Welcome to prison break!')
print("")
rules=input("Press 1 for rules and 2 to start: ")
print("")

if rules == "1":
    print(" This is a story simlating a prison break where you can press the keystrokes 1 2 or 3 to decide your next desicion ")
    print("")
    rulesstart=input("Now when youre ready to play enter the letter s:  ")
    print("")


if rules == "2" or rulesstart =="s":
    print("You are chilling in your cell when a big black man walks up to you")
    print("")
    print("Enter 1 to try to beat him up")
    print("Enter 2 to try to ask him to help escape the prison")
    print("Enter 3 to run away")
    print("")
    choice_1=input("What do you do: ")
    if choice_1 == "1":
        print("What were you thinking idiot hes big AND black")
        print("You lost (you got graped)")



    
    if choice_1 == "2":
        print("You're safe for now... ")
        print("")
        print("You found baby oil on the floor")
        babyoil=input("Do you pick it up Y/N: ")
        if babyoil=="Y":
            leftoright=input("You hit a hallway do you go left or right R/L?: ")
            if leftoright == "L":
                print("You hear the black guy with his gang yelling down the other hallway. i wonder what happened there...")
                print("")
                print("You found a phone on the ground do you pick it up")
                print("1 for yes 2 for no")
                phone=input("")
                if phone == "1":
                    print("You got addicted to yt shorts and the guard catches you and the big black mans gang an the police oil you up and tickle you in spots you didnt know existed")
                if  phone == "2":
                    print("why wouldnt you pick it up dumbass well i dont know what to put here put youre stupid for not picking up the phone and just because of that you snooze you lose")
            
            
            if leftoright == "R":
                print("The big black man got his gang stole the oil and oiled you up")
        if babyoil == "N":
            print("")
            print("When you replay the game PLEASE dont choose the other option you dont wannna know but you are safe.")
            print("")
            print("Your rep in the prison increased and the prison dealer is asking you if you want a pickaxe or sword")
            print("")
            print("Enter 1 for sword")
            print("Enter 2 for pickaxe")
            print("")
            dealer=input("Enter here: ")
            print("")
            print("That choice will be important later...")
            print("")
            guy_left=input("The big black man tells you to go left at the hallway but everyone else says to go right which direction do you go? L/R:")
            if guy_left == "L":
                
                    blackgang=input("You go left to see the black man and his gang and you might win depending on what item you took for the dealer press enter to continue")
                    if dealer=="1":
                        print("Ending 1 unlocked: Fight the gang")
                    if dealer =="2":
                        print("They beat you up stole your pickaxe and escape without you")                    
            if guy_left == "R":
                hole=input("You find a hole and you win depending on the item you took from the dealer press enter to find out.")
                if dealer=="1":
                    print("You try breaking out with the sword and they catch you and kill you")
                if dealer == "2":
                    print("You dug out successfully")
                    print("")
                    print("")
                    print("YOU WIN!!!!")
                    print("")
                    print("Ending 2 unlocked:  Dugout")
                    
                
                      
            
    if choice_1 == "3":
        print("You barely escape but you made an enemy")
        print("")
        print("There are 3 items you can aquire from the prison gang man")
        print("Enter 1 for the spoon")
        print("Enter 2 for the jackhammer")
        print("Enter 3 for hammer")
        print("")
        choice3=input("Choose an option: ")
        if choice3 == "1":
            print("The spoon is too weak to break through the wall so you try to beat up the big black man and you get oiled up and die")
        if choice3 == "2":
                print("Yeah no that is wayyyyy to loud you lose")
        if choice3 == "3":
            print("Good choice")
            print("")
            print("The black guy is asking you to join a gang war do you join it or do you ignore?")
            print("")
            print("Enter 1 to ignore")
            print("Enter 2 to join the fight")
            print("")
            gangfight=input("Enter here: ")
            if gangfight == "2":
                    print("You try using your hammer to beat up the other guys but they knock you out due to them having their own hammers")
            if gangfight=="1":
                        print("They peer pressure you but you keep saying no and they beat you up.")


    if choice_1 == "67":
        print("MANGOES EVERYWHERE")
