

# Todo List App

A simple web-based Todo List application built with React.

Host link: (https://github.com/facebook/create-react-app).

## Features

- Add new tasks to your list.
- Mark tasks as completed.
- View a list of completed tasks.
- Reset the entire list.

## Usage

- Add tasks by typing in the input field and pressing Enter or clicking the "Add" button.
- Mark tasks as completed by clicking on them.
- View completed tasks in the "Completed" section.
- Reset the entire list by clicking the "Reset" button.

## Code Structure

### App.js

- Utilizes the useState hook to manage component state.
- Uses the useEffect hook to handle component updates and mounting.
- Implements Local Storage for data persistence across page reloads.
- Utilizes built-in methods like find and filter to display the latest tasks or todos at the top.

### App.css

- Contains CSS styles for the Todo app layout and positioning.
