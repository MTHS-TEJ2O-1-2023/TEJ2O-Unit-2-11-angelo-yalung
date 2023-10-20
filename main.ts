/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Angelo Yalung
 * Created on: Oct 2023
 * This program chooses numbers between 0 and 99 and then shows what number is bigger than the other when shaking.
*/

// variable gets their number
let num1: number
let num2: number
num1 = randint(0, 99)
num2 = randint(0, 99)

// if one number is bigger than why the other
input.onGesture(Gesture.Shake, function () {
  if (num1 > num2) {
    basic.showNumber(num1)
    basic.showString('>')
    basic.showNumber(num2)
  } else {
    basic.showNumber(num1)
    basic.showString('<')
    basic.showNumber(num2)
  }
})

// displaying number 1
input.onButtonPressed(Button.A, function () {
  basic.showString('#1')
  basic.showNumber(num1)
})

// displaying number 2
input.onButtonPressed(Button.B, function () {
  basic.showString('#2')
  basic.showNumber(num2)
})
