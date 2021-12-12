# Imsce
A Website Information Management System on Cooperative Education for CSIT Students Naresuan University

## Project structure.
The project is a monorepo, Each monorepo has its own README

## Prequistics.
First, check the required versions.

- Node.js v14 or higher.
  You can check by typing
  ```
  node -v
  ```
  into the terminal.
- `npm` v7 or higher.
  You can check by typing
  ```
  npm -v
  ```
  into the terminal.

You can download Node.js [here](https://nodejs.org/en/) (download the LTS version).

When Node.js is installed, upgrade `npm` by running
```
npm i -g npm@latest
```

## Running the application.
```
npm install
```
to install dependencies in the project.

Then, open 2 terminals and run these commands from the root of the project.
| Terminal #1             | Terminal #2            |
| ----------------------- | ---------------------- |
| `npm run dev:backend`   | `npm run dev:frontend` |

You will see the API runs at `http://127.0.0.1:3000` and frontend server runs at `http://localhost:8080`
