#!/bin/bash 

read -p "Enter your age" age 

if [[ $age -ge 18 ]];
then
	echo "You can vote now"
else
	echo "Chhoti bacchi ho kya"
fi 
