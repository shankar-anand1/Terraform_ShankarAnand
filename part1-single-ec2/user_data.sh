#!/bin/bash
apt-get update -y
apt-get install -y python3-pip nodejs npm
mkdir -p /opt/app/backend /opt/app/frontend
# apps are copied after ssh in this assignment; this script just installs runtime
pip3 install flask
echo "ready" > /opt/app/ready.txt
