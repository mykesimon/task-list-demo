# Task list app

![Task List](/task-list.png)

## Getting Started

The React framework has been created using [vite](https://vitejs.dev/) with the [TypeScript template](https://vitejs.dev/guide/features.html#typescript).

To run application:

1. [Install Node](https://nodejs.org/en)
2. Run `npm install` in this folder
3. Run `npm run dev` in this folder to run dev environment (runs both the json-server and the FE).

After this there should be two applications running:

- React front-end: http://localhost:5173/
- Server: http://localhost:3001/

## Folder Structure

- `src/` contains the React application
- `src/components` contains the React components
- `src/context` contains the Context Provider
- `src/lib/types` contains generic types
- `src/lib/utils` contains custom common utils functions
- `src/lib/data` contains const data used in the app
- `src/routes` contains app routes
- `db.json` contains a mock of tasks for json-server

## Technology choices

- Used Vite to bootstrap the React application
- Typescript was useful to type props, DB schema and other things
- Used React Router to handle routes
- Used React Context to handle global state
- Used Tailwind CSS to style the app
- Used Toast to show toast messages when a task is added, removed or there is an error message to display. This provides a better user experience.

## Architecture

- I decided to separate the app into components that could potentially be reused.
- I decided to separate the app into routes that could potentially be reused.
- The app is fully responsive and mobile-friendly.
- The Add New Task form has validation on Summary and Assignee. By default new tasks have Open status and Unassigned priority. Ideally we could make those two fields required as well but I thought that those default make sense.
- The Task component render 3 task at the time. This setting can be easily changed. Note: the pagination is very simple but not very efficient nor scalable. I tried to implement using json-server but I couldn't get it to work as the search params were not working as expected.
