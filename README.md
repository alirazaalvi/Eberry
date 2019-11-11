# eBerry
Sample app for eBerry test.

Table of Contents
-----------------

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)

Prerequisites
-------------
- [Node.js 8.0+](http://nodejs.org)

Getting Started
---------------

The easiest way to get started is to clone the repository:
```bash
# Get the latest snapshot
git clone https://github.com/alirazaalvi/EBerry.git myproject

# Change directory
cd myproject

#install create react app
npm i create-react-app

# Install NPM dependencies
npm install

# Then simply start your app
npm start

# Access the application
http://localhost:3000

# Test
npm test

# Coverage
npm run coverage

# Demo page url
https://alirazaalvi.github.io/EBerry/
```

Project Structure
-----------------

| Name                               | Description                                                  |
| ---------------------------------- | ------------------------------------------------------------ |
| **src/features**/*             | Contains components, reducers and actions of each feature.              |
| **src/layout**/*             | Contains all of the layouts elements including header,footer and navbar.              |
| **src/shared**/*             | Shared helpers and types.              |
| **.storybook**/*             | Storybook of controls.              |
| **helpers**/*        | Utility methods.             |
| tslint.json                          | Rules for tslint linter.                                     |
| .gitignore                         | Folder and files ignored by git.                             |
| app.tsx                             | The main component.                                   |
| index.tsx                             | Entry point of the application.                                   |
| package.json                       | NPM dependencies.                                            |
| package-lock.json                  | Locked versions of NPM dependencies. |

