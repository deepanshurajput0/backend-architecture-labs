#!/bin/bash

createDir() {
    mkdir newdemo
}

if createDir; then
    echo "Folder is created"
else
    echo "Unable to create directory, something went wrong"
fi





