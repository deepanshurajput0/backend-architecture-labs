readonly Name="deepanshu"

echo "My Name is $Name"

Name="Dustin"

echo "My Name is $Name"

myArray=(1 20 30.5 Hello "Hey Buddy")

echo "All the values in array ${myArray[*]}"

echo "${myArray[1]}"


#How to find no. of elements in an array 

echo "The length of an array is ${#myArray[*]}"

#Updating our arrays with new Values 

myArray+=( New 67 89 )

echo "New Array ${myArray[*]}"

declare -A newArray 

newArray=( [name]=Deepanshu [age]=21 [city]=Paris )

echo "Name is ${newArray[name]}"



