#!/bin/bash 


cloneRepo(){
	echo "Project Cloning..."
	git clone https://github.com/deepanshurajput0/React-Project-For-Deployment.git
	echo "Project Cloned successfully..."
}

installDependencies(){
	cd React-Project-For-Deployment
	echo "Installing all dependencies..."
	npm install 
	echo "dependencies installed successfully"
}

run(){
	echo "Running my react app..."
	npm run dev
}


cloneRepo
installDependencies
run


