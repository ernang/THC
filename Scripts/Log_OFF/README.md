# Log off from Windows account
This script has been written in javascript adapted to P4wnP1 language in order to be ran in a Windows desktop environment

# Script
```js
layout('es');                   // Spanish keyboard layout
typingSpeed(100,150)    // Wait 100ms between key strokes + an additional random value between 0ms and 150ms (natural)

// Author: Ernest & Isaac
// Leave a little reminder to lock your PC (just delete or comment this out if you don't want that)
press("GUI r")
delay(300)
type("notepad")
delay(300)
press("ENTER")
delay(300)
type("You forgot to lock your PC.")
delay(3000)
// Lock the PC
press("GUI l")
```
