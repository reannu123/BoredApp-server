# BoredApp Server

This is the server that serves the API for the BoredApp Client. The Client-side component can be accessed in this [repository](https://github.com/reannu123/BoredApp)

## Installation and Execution

### 1. Install dependencies

`npm install`

### 2. Create an .env file in the `server` directory

Proceed to the server env variables section to see what variables are needed. There is also a `.end.template` file where the needed

### 3. Start the server

Navigate to the `server` directory and execute the following command: <br>
`npm run dev` <BR>
This also starts the authentication server.

# Controllers

Controllers are responsible for handling incoming requests and returning responses from API calls. Controllers are defined in the `controllers` directory.

# Models

The Models are objects that serve as blueprints that define how an entry is stored in the database. It uses a schema to validate the data that is stored in the database. Models are defined in the `models` directory.

# Data Access Object

Data Access Objects are objects used for accessing data in a database. It is a wrapper around the database transaction calls. Data Access Objects are defined in the `dao` directory.

# DOTENV Set-up

    -DB_URL
    -PORT
    -ACCESS_TOKEN_SECRET
    -REFRESH_TOKEN_SECRET
    -PORT_AUTH
