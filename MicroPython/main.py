"""
Created by: Angelo Yalung
Created on: Oct 2023
This module is a Micro:bit MicroPython program that chooses 2 random numbers and compares them
"""

from microbit import *
import random

# variables
num1 = random.randint(0, 99)
num2 = random.randint(0, 99)


# if one number is bigger than the other
if num1 > num2:
    print(num1 + ">" + num2)
else:
    print(num1 + "<" + num2)

# displaying number 1
input.on_button_pressed(button_a)
print("#1" + num1)

# displaying number 2
input.on_button_pressed(button_b)
print("#2" + num2)
