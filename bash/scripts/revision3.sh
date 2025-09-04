#!/bin/bash 


## Revision 

name="deepanshu"

echo "My Name is $name"

myArray=( deepanshu 12 software developer )

echo "Values are ${myArray[*]}"

# If else 


fruit="Apple"

if [[ fruit == "Apple" ]];
then
	echo "Its correct"
else
	echo "Its incorrect"
fi

# Loops 

for ((number = 1; number<=5; number++))
do
	echo $number
done

# while loop

count=1

while [ $count -le 5 ]
do 
	echo $count
	count=$((count+1))
done 






