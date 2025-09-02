# Revision of bash scripting 

name="Deepanshu Verma"

echo "My Name is $name"


# Arrays 

myArray=(deepanshu 21 software_developer )

echo "All values of an array ${myArray[*]}"

#length of an array 


echo "Total length of an array ${#myArray[*]}"

#add new values in an array 

myArray+=(newValue 19)

echo "ALl Values are ${myArray[*]}"



