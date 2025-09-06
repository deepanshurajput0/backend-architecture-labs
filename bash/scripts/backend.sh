#!/bin/bash 

REPO_URL="https://github.com/deepanshurajput0/dockerized-node-app.git"
PROJECT_PATH="dockerized-node-app"


cloneRepo(){
	if [ -d "$PROJECT_PATH" ]; then
		echo "Project is already exists"
		cd "$PROJECT_PATH"
		git pull
	else
		echo "Cloning the repo"
		git clone "$REPO_URL"
		cd "$PROJECT_PATH"
	fi

}

install_requirements(){
	echo "Installing system dependencies"
	sudo apt-get update -y
	sudo apt-get install docker -y 
}

deploy(){
	echo "Building and running the docker container...."
        docker build -t my-node-app .
        docker run -p 8000:8000 my-node-app
}

echo "********* Deployment Started **********"

cloneRepo
install_requirements
deploy


