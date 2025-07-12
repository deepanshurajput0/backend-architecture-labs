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


<img width="1662" height="776" alt="Screenshot 2025-07-13 222648" src="https://github.com/user-attachments/assets/9cdd636c-13fd-4397-8c26-4f132c771bc2" />


## 2NF

1NF gets rid of repeating rows. 2NF gets rid of redundancy

A table is said to be in 2NF if it meets the following criteria:

    is already in 1NF

    Has 0 partial dependency.


## Partial dependency 

This occurs when a non-primary key attribute is dependent on part of a composite primary key, rather than on the whole primary key. In simpler terms, if your table has a primary key made up of multiple columns, a partial dependency exists if an attribute in the table is dependent only on a subset of those columns that form the primary key.


Example: Consider a table with the composite primary key (StudentID, CourseID) and other attributes like InstructorName and CourseName. If CourseName is dependent only on CourseID and not on the complete composite key (StudentID, CourseID), then CourseName has a partial dependency on the primary key. This violates 2NF.

If a non-key column depends only on part of a composite key, not the full key — that’s a partial dependency, and it breaks 2NF.

To fix it, move such columns to a new table where their dependency is on a single key (not a composite one).

<img width="1777" height="796" alt="Screenshot 2025-07-13 231027" src="https://github.com/user-attachments/assets/2cc8914c-d240-4303-a19b-ce539ecf7ec1" />


