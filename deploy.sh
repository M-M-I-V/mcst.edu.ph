#!/bin/bash

# Build the project
npm run build

# Navigate to the deployment repo
cd /home/mmiv/Home

# Copy files
cp -r /home/mmiv/mcst.edu.ph/dist/* .

# Commit and push
git add .
git commit -m "Fixed footer's weird behavior"
git push origin main
