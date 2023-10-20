/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Angelo Yalung
 * Created on: Oct 2023
 * This program chooses numbers between 0 and 99 and then shows what number is bigger than the other when shaking.
*/

// variable gets their number
let num1: number = randint(0,99)
let num2: number = randint(0,99)

// if one number is bigger than why the other
input.onGesture(Gesture.Shake, function() {
  if (num1 > num2) {
    basic.showString(num1 + '>')
    basic.showNumber(num2)
  } else {
    basic.showString(num1 + '<')
    basic.showNumber(num2)
  }
})

// displaying number 1
input.onButtonPressed(Button.A, function() {
  basic.showNumber(num1)
})

// displaying number 2
input.onButtonPressed(Button.B, function() {
  basic.showNumber(num2)
})
