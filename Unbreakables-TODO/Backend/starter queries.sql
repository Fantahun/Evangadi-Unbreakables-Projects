TODO LIST 

- id - primary key
- task name
- task creation date
- isCompleted
- last updated time


1  do the dishes  jun 25, 2025   false   null
2  do the dishes  jun 24, 2025   false   jun 26, 2025


✅ Create the table (new table)
CREATE TABLE TODOLIST (
    id INT AUTO_INCREMENT PRIMARY KEY,
    task_name VARCHAR(255) NOT NULL,
    task_creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    isCompleted BOOLEAN DEFAULT FALSE
);

✅ Add the last_updated_time column to the table 
alter TABLE TODOLIST add COLUMN last_updated_time DATETIME DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP

✅ Sample select all statement (selects everything)
SELECT * FROM TODOLIST;

✅ Sample select using WHERE clause (selects specific task)
SELECT * FROM TODOLIST
WHERE id = 1;


✅ Sample INSERT (new task)

INSERT INTO TODOLIST (task_name)
VALUES ('Finish the project report');


✅ Sample UPDATE (mark task as completed)

UPDATE TODOLIST
SET isCompleted = TRUE
WHERE id = 1;


✅ Sample DELETE (delete task)

DELETE FROM TODOLIST
WHERE id = 1; -- if this is not here all the tasks will be deleted