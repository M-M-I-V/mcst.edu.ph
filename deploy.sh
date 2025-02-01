#!/bin/bash

# Build the project
npm run build

# Commit and push
git add .
git commit -m "Updated news and events section"
git push origin main

# Navigate to the deployment repo
cd /home/mmiv/Home

# Copy files
cp -r /home/mmiv/mcst.edu.ph/dist/* .

# Commit and push
git add .
git commit -m "Updated news and events section"
git push origin main