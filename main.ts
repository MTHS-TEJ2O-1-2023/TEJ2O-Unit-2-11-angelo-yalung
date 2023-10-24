/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Angelo Yalung
 * Created on: Oct 2023
 * This program chooses numbers between 0 and 99 and then shows what number is bigger than the other when shaking.
*/

// variables
let num1: number
let num2: number

// starting up
basic.clearScreen()
basic.pause(1000)
basic.showIcon(IconNames.Happy)
num2 = randint(0, 99)
num1 = randint(0, 99)

// if one number is bigger than the other
input.onGesture(Gesture.Shake, function () {
  if (num1 > num2) {
    basic.showNumber(num1)
    basic.showString('>')
    basic.showNumber(num2)
  }
  else {
    basic.showNumber(num1)
    basic.showString('<')
    basic.showNumber(num2)
  }
  basic.showIcon(IconNames.Sad)
})

// displaying number 1
input.onButtonPressed(Button.A, function () {
  basic.clearScreen()
  basic.showString('#1')
  basic.showNumber(num1)
  basic.showIcon(IconNames.Happy)
})

// displaying number 2
input.onButtonPressed(Button.B, function () {
  basic.clearScreen()
  basic.showString('#2')
  basic.showNumber(num2)
  basic.showIcon(IconNames.Happy)
})
