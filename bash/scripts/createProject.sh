#!/bin/bash 

set -e

GITHUB_URL="https://github.com/deepanshurajput0/React-Project-For-Deployment.git"
PROJECT_PATH="React-Project-For-Deployment"


cloneRepo(){
	if [ -d $PROJECT_PATH ]; then
		echo "Project already exists"
		cd $PROJECT_PATH
		git pull
		cd ..
	else
		echo "Cloning Project..."
		git clone $GITHUB_URL
	fi
	echo "Project Ready."
}

installDependencies(){
	cd "$PROJECT_PATH"
	npm install
	echo "All dependencies installed successfully..."

}

run(){
	echo "Running the project"
	npm run dev 

}

cloneRepo
installDependencies
run

