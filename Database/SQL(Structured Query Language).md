SQL is a standard language for storing, manipulating and retrieving data in databases

### Table
There are two components:
1. **Col:** Design or Schema
2. **Row**: Information or Tuple

### Creating First Database
```sql
-- Creating a database:
create database college;
create database xyz_company;

-- Deleting a database
drop database xyz_company;

-- To use or create table in specfic database
use college; 
```

### Our First Table
```sql

use college; 

create table student(
rollno INT,
name varchar(30),
age int
);

insert into student
values
(101,"adam",12),
(102,"bob",14);

select * from student;

```

### Database Queries
```sql
Create DATABASE  IF NOT EXIST college;
Drop database if exist college;
Show databses;
```

### Table Queries
####  Data Definition Language (DDL)

- **CREATE**: It creates a new table, a view of a table.
- **ALTER**: It modifies the existing table.
- **DROP**: It deletes the entire table or other objects in the database.

#### Data Manipulation Language (DML)

- **SELECT**: It extracts certain records from one or more tables.
- **INSERT**: It creates a record in the existing table.
- **UPDATE**: It modifies the existing record of the table.
- **DELETE**: It deletes the records in the table and even delete the complete table.

### Data Types

| **Category**              | **Datatype**              | **Description**                                                                 |
|---------------------------|---------------------------|---------------------------------------------------------------------------------|
| **Numeric**               | `INT` / `INTEGER`         | Whole numbers (e.g., -2,147,483,648 to 2,147,483,647).                         |
|                           | `SMALLINT`               | Smaller range of whole numbers (e.g., -32,768 to 32,767).                      |
|                           | `BIGINT`                 | Larger range of whole numbers (e.g., -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807). |
|                           | `TINYINT`                | Very small integers (e.g., 0 to 255 for unsigned).                             |
|                           | `DECIMAL(p, s)` / `NUMERIC(p, s)` | Fixed-point numbers with precision `p` and scale `s` (e.g., `DECIMAL(10,2)`). |
|                           | `FLOAT(p)`               | Approximate floating-point numbers with optional precision `p`.               |
|                           | `REAL`                   | Approximate floating-point numbers (usually a synonym for `FLOAT`).           |
| **Character/String**      | `CHAR(n)` / `CHARACTER(n)`| Fixed-length strings (e.g., `CHAR(10)`).                                       |
|                           | `VARCHAR(n)`             | Variable-length strings, up to `n` characters (e.g., `VARCHAR(50)`).          |
|                           | `TEXT`                   | Large variable-length strings.                                                |
| **Date/Time**             | `DATE`                   | Stores a date (e.g., `YYYY-MM-DD`).                                           |
|                           | `TIME`                   | Stores a time of day (e.g., `HH:MM:SS`).                                      |
|                           | `DATETIME`               | Stores date and time (e.g., `YYYY-MM-DD HH:MM:SS`).                           |
|                           | `TIMESTAMP`              | Stores date and time with timezone support.                                   |
|                           | `YEAR`                   | Stores a year (e.g., `YEAR(4)`).                                              |
| **Binary**                | `BINARY(n)`              | Fixed-length binary data.                                                     |
|                           | `VARBINARY(n)`           | Variable-length binary data.                                                 |
|                           | `BLOB`                   | Binary Large Object for large binary data (e.g., images, videos).            |
| **Boolean**               | `BOOLEAN`                | Stores `TRUE` or `FALSE` values.                                             |
| **Spatial**               | `GEOMETRY`               | Stores geometric data (e.g., points, lines, polygons).                       |
| **JSON**                  | `JSON`                   | Stores JSON-formatted data.                                                  |


### Constraints
Rules for data in the table

| **Constraint**     | **Description**                                                                                                                                                           | **Example**                                                                      |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **NOT NULL**       | Ensures that a column cannot have a `NULL` value.                                                                                                                         | `CREATE TABLE example (id INT NOT NULL);`                                        |
| **UNIQUE**         | Ensures that all values in a column are unique.                                                                                                                           | `CREATE TABLE example (email VARCHAR(50) UNIQUE);`                               |
| **PRIMARY KEY**    | Makes a column unique and not null but used only for one                                                                                                                  | `CREATE TABLE example (id INT PRIMARY KEY);`                                     |
| **FOREIGN KEY**    | Establishes a relationship between two tables. Ensures the value in a column matches a value in another table.Prevent actions that would destroy links between the tables | `CREATE TABLE orders (user_id INT, FOREIGN KEY (user_id) REFERENCES users(id));` |
| **CHECK**          | Ensures that all values in a column satisfy a specific condition.                                                                                                         | `CREATE TABLE example (age INT CHECK (age >= 18));`                              |
| **DEFAULT**        | Sets a default value for a column when no value is specified.                                                                                                             | `CREATE TABLE example (status VARCHAR(20) DEFAULT 'active');`                    |
| **INDEX**          | Improves query performance by creating an index on one or more columns.                                                                                                   | `CREATE INDEX idx_name ON example (name);`                                       |
| **AUTO_INCREMENT** | Automatically generates a unique number for each row (specific to some SQL databases like MySQL).                                                                         | `CREATE TABLE example (id INT AUTO_INCREMENT PRIMARY KEY);`                      |
| **UNIQUE KEY**     | A constraint that ensures all values in a column or group of columns are unique (can allow multiple nulls).                                                               | `CREATE TABLE example (email VARCHAR(50), UNIQUE KEY (email));`                  |

```sql
create database instagram;
use instagram;

create table user (
id Int,
age int,
name varchar(30) not null,
email varchar(30) unique,
followers int default 0,
following int,
constraint age_check check (age >=13),
primary key (id)
);

create table post(
id Int primary key,
content Varchar(100),
user_id Int,
Foreign key (user_id) References user(id)
);
```
### Keys
Keys are special columns in the table

- **Primary Key**
   It is a column (or set of columns) in a table that uniquely identifies each row.(a unique id)
   There is only 1 pk and it should be NOT NULL

- **Foreign Key**
   A foreign key is a column(or a set of columns) in a table that refers to the primary key in another table
	 FKs can have duplicate and null values.
	There can be multiple FKs.


### Insert into Table

```sql
INSERT into user
(id,age,name,email,followers,following)
values
(1,14,"adam","adam@yahoo.in",123,145),
(2,15,"bob","bob123@yahoo.in",200,200),
(3,16,"casey","casey@yahoo.in",300,306),
(4,17,"donald","donald@yahoo.in",200,105);
```

### Select Command
Select and show data from the DB

```sql
-- Syntax
Select col1,col2 from table_name; -- Selects perticular columns 

Select * from table_name; -- Selects all the columns
```

### Clauses

To define some conditions
1. **Where**
   
```sql
 Select col1,col2 from table_name
 where conditions;
-- Example
 select * from user where followers >= 200;
```

   **Operators**:
- Arithmetic Operators: +,-,*,/,%
- Comparison Operators : =,!=,>,<,>=
- Logical Operators :  And ,Or ,Not,In,Between,All,Like,Any
- Bitwise Operators :  &,\


  **Frequently Used**

-  **AND**(to check for both conditions to be true)
- **OR**(to check for one of the conditions to be true)
- **Between**(to check one of the conditions to be true)
- **IN**(matches any value in the list)
- **NOT**(to negate the given conditions)

2. **Limit**

   Sets an upper limit on number of (tuples) rows to be returned
   
    ```sql
    Select name,age,email
    from user
    limit 2
```

3. **Order by clause**
     To sort in ascending (ASC) or descending order(DESC)
     ```sql
 select name,age,email,followers 
 from user 
 order by followers ASC;
```

### Aggregate Functions

Aggregate functions perform a calculation on a set of values,and return a single value.

- COUNT()
- MAX()
- MIN()
- SUM()
- AVG()

 Examples:
```sql
select max(followers)
from user;

select count(age)
from user 
where age = 14;

select avg(age)
from user ;
```

3. **Group by clause**
     Groups rows that have the same values into summary rows.
     It collects data from multiple records and groups the result by one or more column.
     Generally we use some aggregation functions
     
	 ```sql
Select age,count(id)
from user 
group by age;
```

4. Having Clause
     Similar to where i.e applies some conditions on rows
     But it is used when we want to apply any condition after grouping
 ```sql
 -- Having Clause
 select age,max(followers)
from user
group by age
having max(followers) > 200;
```

### Update
To update existing rows

```sql
UPDATE user
Set followers = 600
where age = 16;
```

If you get error:
```sql
set sql_safe_updates =0;
```

### Delete
To delete rows from a table

```sql
Delete from user
where age =14;
```


### Alter
To change the schema

- ADD column
   ```sql
   Alter table user
Add column city VARCHAR(25) default "Bengaluru";

```
- Drop
```sql
Alter table user
drop column age;
```

- Rename
  ```sql
alter table user
Rename to instaUser;
```

- Modify
```sql
alter table instaUser
Modify followers int default 5;

```

### Truncate
to delete table's data

```sql
Truncate table user;
```

if it is connected to any other table then it will not delete