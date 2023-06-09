
# Todo App

This is a simple Todo App built with React and Redux.

## Installation

To run the application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your/repository.git
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the app.

## Description

The Todo App allows you to manage your tasks efficiently. You can add, update, toggle, and delete todos.

## Features

- Add new todos with a description.
- Toggle the completion status of a todo.
- Update the description of a todo.
- Delete a todo.

## Code Overview

The app consists of the following components:

### Todo

The `Todo` component represents an individual todo item. It displays the todo's description and provides functionality to toggle its completion status, update the description, and delete the todo.

### Redux Actions

The Redux actions are defined in separate files and exported for use in the application. The actions include:

- `toggleTodo`: Toggles the completion status of a todo.
- `updateTodo`: Updates the description of a todo.
- `deleteTodo`: Deletes a todo.

### Server API Endpoints

The server API endpoints are responsible for handling the CRUD operations for the todos. The endpoints include:

- `addTodo`: Creates a new todo.
- `getAllTodos`: Retrieves all the todos.
- `toggleTodoDone`: Toggles the completion status of a todo.
- `updateTodo`: Updates the description of a todo.
- `deleteTodo`: Deletes a todo.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Redux: A predictable state container for managing application state.
- Express: A fast and minimalist web application framework for Node.js.
- MongoDB: A NoSQL document database for storing the todos.

Feel free to explore the code and customize the application to suit your needs!

```
