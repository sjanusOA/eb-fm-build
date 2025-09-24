#!/bin/bash

# Script to copy Figma components to the React project

echo "Copying Figma components..."

# Create src directory if it doesn't exist
mkdir -p src/components

# Copy components from Figma export
if [ -d "/Users/sjanus/Documents/GitHub/eb-fm-build/Luxury Home Builder Website/components" ]; then
    echo "Found Figma components, copying..."
    cp -r "/Users/sjanus/Documents/GitHub/eb-fm-build/Luxury Home Builder Website/components"/* src/components/
    echo "Components copied successfully!"
else
    echo "Figma components folder not found at expected location"
    echo "Please check the path: /Users/sjanus/Documents/GitHub/eb-fm-build/Luxury Home Builder Website/components"
fi

# Copy styles if they exist
if [ -d "/Users/sjanus/Documents/GitHub/eb-fm-build/Luxury Home Builder Website/styles" ]; then
    echo "Found Figma styles, copying..."
    cp -r "/Users/sjanus/Documents/GitHub/eb-fm-build/Luxury Home Builder Website/styles"/* src/
    echo "Styles copied successfully!"
fi

# Copy assets if they exist
if [ -d "/Users/sjanus/Documents/GitHub/eb-fm-build/Luxury Home Builder Website/assets" ]; then
    echo "Found Figma assets, copying..."
    mkdir -p public/assets
    cp -r "/Users/sjanus/Documents/GitHub/eb-fm-build/Luxury Home Builder Website/assets"/* public/assets/
    echo "Assets copied successfully!"
fi

# Copy App.tsx if it exists
if [ -f "/Users/sjanus/Documents/GitHub/eb-fm-build/Luxury Home Builder Website/App.tsx" ]; then
    echo "Found App.tsx, copying..."
    cp "/Users/sjanus/Documents/GitHub/eb-fm-build/Luxury Home Builder Website/App.tsx" src/
    echo "App.tsx copied successfully!"
fi

echo "Copy process completed!"
echo "Next steps:"
echo "1. Check what components were copied: ls -la src/components/"
echo "2. Update App.tsx to import your components"
echo "3. Run: npm install"
echo "4. Run: npm run build"
echo "5. Deploy to GitHub Pages"
