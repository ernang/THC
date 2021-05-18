#!/bin/bash

timeout 6 python3 -m http.server 8888

wget http://172.16.0.2:8123/all.txt
