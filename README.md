# Imsce
A Website Information Management System on Cooperative Education for CSIT Students Naresuan University

## What is imsce.
imsce it is a web for managing information about the department of cooperative education. Department of Computer Science and Information Technology Faculty of Science Naresuan University

Our project consists of
- imsce.com: Frontend application.
- imsce API: Backend application API with PostgreSQL.

## Technology stack.
### imsce.csit.nu.ac.th
- [Vuejs](https://v3.vuejs.org/) for creating frontend application.
- [Vite](https://vitejs.dev/) for building our frontend Vuejs application.
- [Buefy](https://buefy.org) to manage our frontend application's stylings.
- [Tailwindcss](https://tailwindcss.com/) for styling our application.
- [ESLint](https://eslint.org) to keep our TypeScript stylings constant throughout the project.
- [Stylelint](https://stylelint.io) to keep our SCSS stylings constant throughout the project.
- [d3.js](https://d3js.org) for creating beautiful graph admin side.

Our main language of development is [TypeScript](https://www.typescriptlang.org)

### Imsce API.
- [Fastify](https://www.fastify.io/) for serving our api.
- [PostgreSQL](https://www.postgresql.org/) for our database.

## Prequistics.
### Check the required versions.
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
