<h1 align="center">MERN Stack</h1>
<h4 align="center">MongoDB, Expressjs, React, Nodejs</h4>

> MERN is a fullstack implementation in MongoDB, Expressjs, React and Nodejs.

Project with Express/Node Backend + React/MaterialUI Frontend + MongoDB Database.

> Setting up the express backend api in NodeJS and frontend using React and Material UI, also using the HTTP methods GET, POST, PUT and DELETE in frontend as well as backend

## Clone the project
    $ git clone https://github.com/AlapPandya05/User_Management_System.git

## Project Structure
    .gitignore
    
    /client
      public/
      src/
      package.json
      
    /server
      index.js
      package.json
      
## Run this project on your machine

### Prerequisites
+ [Node](https://nodejs.org/en/download/)^14.0.2
+ [npm](https://nodejs.org/en/download/package-manager/)
+ [Express](https://expressjs.com/en/starter/installing.html)
+ [MongoDB](https://www.mongodb.com/docs/manual/installation/)

Notice, You need client and server running concurrently in different terminal session, in order to make them talk with each other.

### Server-side usage(PORT:8000)
    $ cd server/
    npm i
    npm start

>It will automatically install all the dependencies from the package.json file of server folder.

### Client-side usage(PORT:5000)
     $ cd client/
     npm i
     npm start

>It will automatically install all the dependencies from the package.json file of client folder.

Note: You need to connect your own mongodb database and so you need to edit url in the db.js file inside the database folder in the server directory.

## Dependencies for Frontend
| Name | Description |
| ---- | ----------- |
| express:^4.17.1 | Stores software that your project depends on to function correctly. |
| react-dom:^18.2.0 | The react-dom package provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside the React model if you need to. |
| nodemon:^2.0.12 | nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected. |
| @mui/material:^5.11.13| Material-UI (MUI) is a CSS framework that provides React components out-of-the-box. |
| axios:^1.3.4 | It has the ability to make HTTP requests from the browser and handle the transformation of request and response data. |
| react-router-dom:^6.9.0| React Router enables routing in React applications and allows defining multiple routes in an application. |

## Dependencies for Backend
| Name | Description |
| ---- | ----------- |
| body-parser:^1.20.2 | Body-parser parses is an HTTP request body that usually helps when you need to know more than just the URL being hit. |
| cors:^2.8.5 | So we need to install Cross-origin resource sharing (CORS) which is a browser mechanism which enables controlled access to resources located outside of a given domain. |
| dotenv:^16.0.3 | The dotenv package is a great way to keep passwords, API keys, and other sensitive data out of your code. |
| express:^4.17.1 | Stores software that your project depends on to function correctly. |
| mongoose:^7.0.2 | It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB. |
| nodemon:^2.0.12 | nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected. |

## Screenshots

### Frontend running on port 3000

> Here we can see all the users already present inside the database.(using GET method).

![Screenshot from 2023-03-23 11-24-26](https://user-images.githubusercontent.com/122338265/227159842-bdd134ce-1872-457b-840d-18db4f7f5fa8.png)

> Here we can add a new user inside our database.(using POST method).

![Screenshot from 2023-03-23 11-24-54](https://user-images.githubusercontent.com/122338265/227159896-2d44e437-a985-448e-af4c-749b990e0271.png)

> Here we can edit our user’s information.(using PUT method).

![Screenshot from 2023-03-23 11-26-01](https://user-images.githubusercontent.com/122338265/227159948-8731c5c6-3687-4342-b6d8-17aee9c29fd4.png)

> Here we can delete any user from our database.(using DELETE method).

![Screenshot from 2023-03-23 11-27-09](https://user-images.githubusercontent.com/122338265/227159987-d92d3760-5b5a-4de4-ab8d-4660e9a170b5.png)

> Now, we can see the user is finally deleted.(again using GET method).

![Screenshot from 2023-03-23 11-27-34](https://user-images.githubusercontent.com/122338265/227160020-54c9c8f1-8acf-432a-b535-b3f72dfca11b.png)


### Backend server running on port 8000

![image](https://user-images.githubusercontent.com/122338265/227158630-6e26da25-b7b0-41c0-89aa-eb6a433c3450.png)





## Author

[AlapPandya05](https://github.com/AlapPandya05)


<h3 align="center">Made with :heart: by Alap</h3>
