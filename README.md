# ES6 REST API WITH EXPRESS AND POSTGRES
Effort was put into using es6 as much as possible.
The base URL ends with "/api/v1". For local development, the port is 3000.
All requests are GET requests
The endpoints are as follows:
1. "/categories": Endpoint for category tree
2. "/books" : Endpoint returns all books
3. "/bookcat/:id" : Books per category id
4. "/bookstatclient/:id" : Unique clients that have read a book
5. "/bookstatregclient/:id": Unique registered clients that have read a book
6. "/bookstatclientpercount/:id" : Number of clients that have read a book in a country
7. "/users" : Paginated list of users 
8. "/user/:id" : User details
## Setup

```sh
npm install
```

## Run

```sh
npm run dev
```

## Test

```sh
npm test
```

## TODO
- Return categories in a tree data structure
- complete writing of tests 



