# Normalization In DBMS

## What is normalization ?
It is the process of removing redundancy in your database.

## What is Redundancy ?
It means data that already exists elsewhere and we are duplicating it in two places.

## Normalizing data

Normalization in databases is a systematic approach of decomposing tables to eliminate data redundancy and improve data integrity. 
The process typically progresses through several normal forms, each building on the last.
When you look at a schema, you can identify if it lies in one of the following categories of normalization

##    1NF

##    2NF

##    3NF

##    BCNF
 
 
You aim to reach 3NF/BCNF usually. The lower you go, the more normalised your table is. But over normalization can lead to excessive joins

## 1NF

A single cell must not hold more than one value (atomicity): This rule ensures that each column of a database table holds only atomic (indivisible) values, and multi-valued attributes are split into separate columns. For example, if a column is meant to store phone numbers, and a person has multiple phone numbers, each number should be in a separate row, not as a list or set in a single cell.





