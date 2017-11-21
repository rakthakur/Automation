#!/bin/bash
domain="healthy.kaiserpermanente.org"
useragent="Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Chrome/60.0.3112.113 Safari/537.36"

reportdate="$(date +'%b-%d-%Y')"
report_date="$(date +'%A, %b %d, %Y - %H:%M %p')"

node main.js login

sleep 20s

readarray urlList < config/URLs.txt

mkdir -p ./reports/$reportdate
cd ./reports/$reportdate


for url in "${urlList[@]}"
do
name="$(echo ${url} | sed 's/!.*//' | sed 's#.*/##')"
lighthouse ${url} --port 9222 --disable-network-throttling --disable-cpu-throttling --disable-device-emulation --output json --output html --output-path=./${name}.json --save-assets
done