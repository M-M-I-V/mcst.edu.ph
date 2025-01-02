#!/bin/bash

# Build the project
npm run build

# Navigate to the deployment repo
cd /home/mmiv/Home

# Copy files
cp -r /home/mmiv/mcst.edu.ph/dist/* .

# Commit and push
git add .
git commit -m "Updated links that redirect to apply.html"
git push origin main
