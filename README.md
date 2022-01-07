# todo_chisel_app
Todo App where user can view his different todos of different boards

steps to start the project
1. start frontend
 1.1cd todo-app-frontend
 1.2 npm i
 1.3 npm start
 
2. start backend
 2.1 install postgresSQL - https://www.postgresql.org/download/
 2.2 open pgAdmin
 2.3 create database todo_app
 2.4 create two tables boards and todos
 schema of boards 
     id - text
     boardName - text
  schema of todos 
     id - text
     todoName - text
     boardId - text
     completed - text
 2.5 cd todo-app-backend
 2.6 npm i
 2.7 nodemon app(nodemon has to be installed) or sails lift
 
 
 
     
     
   
