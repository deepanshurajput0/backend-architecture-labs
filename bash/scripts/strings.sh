#!/bin/bash 

#length of strings 

Name="deepanshu Verma"

nameLength=${#Name}

echo "The length of name is $nameLength"


# TO replace the string 

newVar=${Name/deepanshu/chirag}

echo "New Var is $newVar"

# To slice the string 

newString=${Name:4:5}

echo "new string is $newString"






